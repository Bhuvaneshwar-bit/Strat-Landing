'use client';

import { motion } from 'framer-motion';

interface LogoLoopProps {
  items: { name: string; logo: string }[];
  speed?: number;
}

export default function LogoLoop({ items, speed = 30 }: LogoLoopProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling Container */}
      <motion.div
        className="flex gap-16 items-center"
        animate={{
          x: [0, -100 * items.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 w-40 h-24 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
          >
            <div className="w-full h-full flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-white font-bold text-sm text-center">{item.name}</span>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
