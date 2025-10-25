'use client';

import { memo } from 'react';

interface LogoLoopProps {
  items: { name: string; logo: string }[];
  speed?: number;
}

function LogoLoop({ items, speed = 30 }: LogoLoopProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container - Using CSS animation for better performance */}
      <div
        className="flex gap-16 items-center"
        style={{
          animation: `scroll ${speed}s linear infinite`,
          width: 'fit-content',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 w-40 h-24 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-full h-full flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-white font-bold text-sm text-center">{item.name}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CSS Keyframe animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100px * ${items.length} - ${items.length * 64}px));
          }
        }
      `}</style>
    </div>
  );
}

export default memo(LogoLoop);
