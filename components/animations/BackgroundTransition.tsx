'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BackgroundTransitionProps {
  images: string[];
  interval?: number;
}

export default function BackgroundTransition({ images, interval = 6000 }: BackgroundTransitionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  // Preload images on mount
  useEffect(() => {
    const loadedStates = new Array(images.length).fill(false);
    
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedStates[index] = true;
        setImagesLoaded([...loadedStates]);
      };
    });
  }, [images]);

  useEffect(() => {
    // Only start interval if first image is loaded
    if (!imagesLoaded[0]) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, imagesLoaded]);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ 
            opacity: currentIndex === index && imagesLoaded[index] ? 1 : 0,
            zIndex: currentIndex === index ? 1 : 0
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Use native img for immediate loading */}
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority={index === 0 ? "high" : "low"}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </motion.div>
      ))}
      
      {/* Loading state for first image */}
      {!imagesLoaded[0] && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
