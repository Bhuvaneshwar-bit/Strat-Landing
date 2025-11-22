'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, DollarSign, Users, Network, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const stackItems = [
  {
    icon: GraduationCap,
    title: 'Education Programs',
    description: 'Structured bootcamps and workshops to build your startup foundation',
    gradient: 'from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop'
  },
  {
    icon: DollarSign,
    title: 'Capital Access',
    description: 'Connect with investors and funding opportunities at every stage',
    gradient: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=300&fit=crop'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Learn from experienced founders and industry experts',
    gradient: 'from-purple-600 to-purple-800',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop'
  },
  {
    icon: Network,
    title: 'Network and Partnerships',
    description: 'Access our ecosystem of partners, collaborators, and fellow founders',
    gradient: 'from-orange-600 to-orange-800',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=300&fit=crop'
  }
];

const journeySteps = [
  { label: 'Ideate', color: 'text-blue-400' },
  { label: 'Validate', color: 'text-emerald-400' },
  { label: 'Build', color: 'text-purple-400' },
  { label: 'Scale', color: 'text-orange-400' },
  { label: 'Fund', color: 'text-red-400' },
  { label: 'Repeat', color: 'text-pink-400' }
];

export default function StratStack() {
  return (
    <section id="stratstack" className="relative bg-black py-32">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            The <span className="gradient-text">StratSchool Stack</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We provide founders with everything they need to turn ideas into ventures.
          </p>
        </motion.div>

        <div className="relative" style={{ height: '600px' }}>
          <CardTrail items={stackItems} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden py-12">
            <div className="flex items-center justify-center gap-6 animate-scroll-journey">
              {[...journeySteps, ...journeySteps].map((step, i) => (
                <div key={i} className="flex items-center gap-6 shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % journeySteps.length) * 0.1 }}
                    className={`text-2xl sm:text-3xl font-bold ${step.color} whitespace-nowrap`}
                  >
                    {step.label}
                  </motion.div>
                  {i < (journeySteps.length * 2 - 1) && (
                    <ArrowRight className="w-6 h-6 text-gray-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-journey {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-journey {
          animation: scroll-journey 30s linear infinite;
        }
        .animate-scroll-journey:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function CardTrail({ items }: { items: typeof stackItems }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cacheMousePos = useRef({ x: 0, y: 0 });
  const cardPosition = useRef(0);
  const zIndexVal = useRef(1);
  const threshold = 100;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      let clientX = 0, clientY = 0;
      
      if ('touches' in ev && ev.touches.length > 0) {
        clientX = ev.touches[0].clientX;
        clientY = ev.touches[0].clientY;
      } else if ('clientX' in ev) {
        clientX = ev.clientX;
        clientY = ev.clientY;
      }
      
      mousePos.current = {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    container.addEventListener('mousemove', handlePointerMove as any);
    container.addEventListener('touchmove', handlePointerMove as any);

    let animationFrameId: number;

    const render = () => {
      const dx = mousePos.current.x - lastMousePos.current.x;
      const dy = mousePos.current.y - lastMousePos.current.y;
      const distance = Math.hypot(dx, dy);

      cacheMousePos.current.x += (mousePos.current.x - cacheMousePos.current.x) * 0.1;
      cacheMousePos.current.y += (mousePos.current.y - cacheMousePos.current.y) * 0.1;

      if (distance > threshold) {
        showNextCard();
        lastMousePos.current = { ...mousePos.current };
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      let clientX = 0, clientY = 0;
      
      if ('touches' in ev && ev.touches.length > 0) {
        clientX = ev.touches[0].clientX;
        clientY = ev.touches[0].clientY;
      } else if ('clientX' in ev) {
        clientX = ev.clientX;
        clientY = ev.clientY;
      }
      
      mousePos.current = {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
      cacheMousePos.current = { ...mousePos.current };
      lastMousePos.current = { ...mousePos.current };

      animationFrameId = requestAnimationFrame(render);

      container.removeEventListener('mousemove', initRender as any);
      container.removeEventListener('touchmove', initRender as any);
    };

    container.addEventListener('mousemove', initRender as any);
    container.addEventListener('touchmove', initRender as any);

    const showNextCard = () => {
      zIndexVal.current++;
      cardPosition.current = cardPosition.current < items.length - 1 ? cardPosition.current + 1 : 0;
      
      const card = cardsRef.current[cardPosition.current];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      gsap.killTweensOf(card);
      gsap.timeline()
        .fromTo(
          card,
          {
            opacity: 1,
            scale: 0.8,
            zIndex: zIndexVal.current,
            x: cacheMousePos.current.x - rect.width / 2,
            y: cacheMousePos.current.y - rect.height / 2,
          },
          {
            duration: 0.5,
            ease: 'power2.out',
            scale: 1,
            x: mousePos.current.x - rect.width / 2,
            y: mousePos.current.y - rect.height / 2,
          },
          0
        )
        .to(
          card,
          {
            duration: 0.8,
            ease: 'power2.in',
            opacity: 0,
            scale: 0.7,
          },
          0.8
        );
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handlePointerMove as any);
      container.removeEventListener('touchmove', handlePointerMove as any);
    };
  }, [items]);

  return (
    <div ref={containerRef} className="relative w-full h-full cursor-crosshair">
      {items.map((item, index) => (
        <div
          key={item.title}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="absolute top-0 left-0 opacity-0 pointer-events-none"
          style={{ width: '350px' }}
        >
          <TrailCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
}

function TrailCard({ 
  item, 
  index
}: { 
  item: typeof stackItems[0]; 
  index: number;
}) {
  const Icon = item.icon;

  return (
    <div className="group relative">
      <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-2xl opacity-30`} />
      <div className="relative h-full bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/20 p-6 overflow-hidden shadow-2xl">
        <div className="relative">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl mb-4`}>
            <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            {item.title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <span className="text-base font-bold text-white/80">{index + 1}</span>
        </div>
      </div>
    </div>
  );
}
