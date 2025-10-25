'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 24;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

interface Event {
  title: string;
  date: string;
  attendees: string;
  image: string;
}

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
  isLandscape: boolean;
}

interface EventsCarouselProps {
  events: Event[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

export default function EventsCarousel({
  events,
  baseWidth = 600,
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true
}: EventsCarouselProps) {
  const containerPadding = 24;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...events, events[0]] : events;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions[]>([]);
  const [currentDimensions, setCurrentDimensions] = useState<ImageDimensions>({
    width: itemWidth,
    height: 600,
    aspectRatio: itemWidth / 600,
    isLandscape: true
  });
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Preload images and get their dimensions
  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = await Promise.all(
        events.map((event) => {
          return new Promise<ImageDimensions>((resolve) => {
            const img = new Image();
            img.src = event.image;
            img.onload = () => {
              const aspectRatio = img.width / img.height;
              const isLandscape = aspectRatio > 1;
              
              // Calculate optimal dimensions
              let width = itemWidth;
              let height = 600;
              
              if (isLandscape) {
                // Landscape: fit to width
                width = itemWidth;
                height = Math.min(itemWidth / aspectRatio, 600);
              } else {
                // Portrait: fit to height
                height = 600;
                width = Math.min(600 * aspectRatio, itemWidth);
              }
              
              resolve({
                width,
                height,
                aspectRatio,
                isLandscape
              });
            };
          });
        })
      );
      setImageDimensions(dimensions);
      if (dimensions.length > 0) {
        setCurrentDimensions(dimensions[0]);
      }
    };
    
    loadImageDimensions();
  }, [events, itemWidth]);

  // Update current dimensions when index changes
  useEffect(() => {
    if (imageDimensions.length > 0) {
      const actualIndex = currentIndex % events.length;
      setCurrentDimensions(imageDimensions[actualIndex]);
    }
  }, [currentIndex, imageDimensions, events.length]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === events.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, events.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === events.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(events.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-black/40 backdrop-blur-xl"
      style={{ width: `${baseWidth}px` }}
      animate={{
        height: currentDimensions.height + 100 // Add padding for indicators
      }}
      transition={{
        type: 'spring' as const,
        stiffness: 200,
        damping: 25,
        duration: 0.6
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((event, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [15, 0, -15];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          
          const actualIndex = index % events.length;
          const dimensions = imageDimensions[actualIndex] || currentDimensions;
          
          return (
            <motion.div
              key={index}
              className="relative flex-shrink-0 overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing flex items-center justify-center"
              style={{
                width: itemWidth,
                rotateY: rotateY,
              }}
              animate={{
                height: dimensions.height
              }}
              transition={{
                type: 'spring' as const,
                stiffness: 200,
                damping: 25,
                duration: 0.6
              }}
            >
              {/* Event Image Only */}
              <motion.img
                src={event.image}
                alt={event.title}
                className="rounded-2xl"
                loading="eager"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
                animate={{
                  width: dimensions.width,
                  height: dimensions.height
                }}
                transition={{
                  type: 'spring' as const,
                  stiffness: 200,
                  damping: 25,
                  duration: 0.6
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Indicators */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {events.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex % events.length === index 
                  ? 'bg-red-500 w-6' 
                  : 'bg-white/20 w-1.5 hover:bg-white/40'
              }`}
              animate={{
                scale: currentIndex % events.length === index ? 1 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
