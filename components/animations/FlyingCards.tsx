'use client';

import { useRef, useEffect } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture } from 'ogl';

const vertexShader = `
precision highp float;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uPosition;
uniform float uDistortion;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;

varying vec2 vUv;

float PI = 3.141592653589793238;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(
      oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                              0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5
    ? 16.0 * pow(t, 5.0)
    : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  
  float norm = 0.5;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
  float localprogress = clamp(
    (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
    0.,
    2.
  );
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 imageSize = uImageSize;
  vec2 planeSize = uPlaneSize;

  float imageAspect = imageSize.x / imageSize.y;
  float planeAspect = planeSize.x / planeSize.y;
  vec2 scale = vec2(1.0, 1.0);

  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }

  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

  gl_FragColor = texture2D(tMap, uv);
}
`;

function lerp(p1: number, p2: number, t: number) {
  return p1 + (p2 - p1) * t;
}

interface FlyingCardsProps {
  items: string[];
  className?: string;
}

export default function FlyingCards({ items, className = '' }: FlyingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollRef = useRef({ current: 0, target: 0, ease: 0.08 });

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || items.length === 0) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Initialize WebGL
    const renderer = new Renderer({
      canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl);
    camera.fov = 45;
    camera.position.z = 20;

    const scene = new Transform();

    // Create geometry
    const geometry = new Plane(gl, {
      heightSegments: 1,
      widthSegments: 100,
    });

    // Create meshes for each card
    const meshes: any[] = [];
    const planeWidth = 320;
    const planeHeight = 420;
    const distortion = 2.5;

    items.forEach((src, index) => {
      const texture = new Texture(gl, { 
        generateMipmaps: false,
        width: 1,
        height: 1,
      });

      const program = new Program(gl, {
        depthTest: false,
        depthWrite: false,
        fragment: fragmentShader,
        vertex: vertexShader,
        uniforms: {
          tMap: { value: texture },
          uPosition: { value: 0 },
          uPlaneSize: { value: [0, 0] },
          uImageSize: { value: [0, 0] },
          rotationAxis: { value: [0, 1, 0] },
          distortionAxis: { value: [0, 1, 0] },
          uDistortion: { value: distortion },
        },
        cullFace: false,
      });

      const mesh = new Mesh(gl, { geometry, program });
      mesh.setParent(scene);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      img.onload = () => {
        texture.image = img;
        program.uniforms.uImageSize.value = [img.naturalWidth, img.naturalHeight];
      };

      meshes.push({ mesh, program, index, extra: 0 });
    });

    // Handle resize
    const onResize = () => {
      const rect = container.getBoundingClientRect();
      const screen = { width: rect.width, height: rect.height };

      renderer.setSize(screen.width, screen.height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });

      const fov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(fov / 2) * camera.position.z;
      const width = height * camera.aspect;
      const viewport = { height, width };

      meshes.forEach((item, i) => {
        const { mesh, program } = item;
        mesh.scale.x = (viewport.width * planeWidth) / screen.width;
        mesh.scale.y = (viewport.height * planeHeight) / screen.height;
        program.uniforms.uPlaneSize.value = [mesh.scale.x, mesh.scale.y];

        const padding = 0.8;
        const meshWidth = mesh.scale.x + padding;
        const widthTotal = meshWidth * items.length;
        
        // Position cards horizontally
        mesh.position.x = -widthTotal / 2 + (i + 0.5) * meshWidth;
        mesh.position.y = 0;
        
        item.x = mesh.position.x;
        item.widthTotal = widthTotal;
        item.meshWidth = meshWidth;
      });
    };

    onResize();
    window.addEventListener('resize', onResize);

    // Handle wheel
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollRef.current.target += e.deltaY * 0.002;
    };

    canvas.addEventListener('wheel', onWheel, { passive: false });

    // Animation loop
    const animate = () => {
      scrollRef.current.current = lerp(
        scrollRef.current.current,
        scrollRef.current.target,
        scrollRef.current.ease
      );

      meshes.forEach((item) => {
        const { mesh, program } = item;
        mesh.position.x = item.x - scrollRef.current.current - item.extra;

        const position = mesh.position.x;
        const normalizedPos = (position + 20) / 40;
        program.uniforms.uPosition.value = normalizedPos * 100;

        const viewport = 20;
        const meshWidth = item.meshWidth;

        if (mesh.position.x + meshWidth / 2 < -viewport) {
          item.extra -= item.widthTotal;
        } else if (mesh.position.x - meshWidth / 2 > viewport) {
          item.extra += item.widthTotal;
        }
      });

      renderer.render({ scene, camera });
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('wheel', onWheel);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [items]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
