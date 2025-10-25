'use client';

import { useEffect } from 'react';

interface BackgroundTransitionProps {
  images: string[];
}

export default function BackgroundTransition({ images }: BackgroundTransitionProps) {
  // Preload images immediately
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Display only the first image */}
      <div className="absolute inset-0">
        {/* Use native img for immediate loading */}
        <img
          src={images[0]}
          alt="Background"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>
    </div>
  );
}
