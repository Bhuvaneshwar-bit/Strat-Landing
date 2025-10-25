'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BackgroundTransitionProps {
  images: string[];
  interval?: number;
}

export default function BackgroundTransition({ images, interval = 6000 }: BackgroundTransitionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Always render all images, but only show one at a time */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ 
            opacity: currentIndex === index ? 1 : 0,
            zIndex: currentIndex === index ? 1 : 0
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            priority={index === 0}
            quality={90}
            className="object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </motion.div>
      ))}
    </div>
  );
}
