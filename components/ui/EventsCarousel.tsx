'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

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
  baseWidth = 380,
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
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-black/40 backdrop-blur-xl"
      style={{ width: `${baseWidth}px` }}
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
          
          return (
            <motion.div
              key={index}
              className="relative flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl cursor-grab active:cursor-grabbing group"
              style={{
                width: itemWidth,
                height: '400px',
                rotateY: rotateY,
              }}
              transition={effectiveTransition}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              {/* Event Content */}
              <div className="p-6 flex flex-col justify-between h-[calc(400px-12rem)]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20">
                        <Calendar className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-gray-300">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20">
                        <Users className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-gray-300">{event.attendees} Attendees</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/0 to-red-600/0 group-hover:from-red-600/10 group-hover:via-red-500/5 group-hover:to-red-600/10 transition-all duration-500 pointer-events-none rounded-2xl" />
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
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex % events.length === index 
                  ? 'bg-red-500 w-8' 
                  : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
              animate={{
                scale: currentIndex % events.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
