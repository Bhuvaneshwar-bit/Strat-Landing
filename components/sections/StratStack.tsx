'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { GraduationCap, DollarSign, Users, Network, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stackItems = [
  {
    icon: GraduationCap,
    title: 'Education Programs',
    description: 'Structured bootcamps and workshops to build your startup foundation',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    icon: DollarSign,
    title: 'Capital Access',
    description: 'Connect with investors and funding opportunities at every stage',
    gradient: 'from-emerald-600 to-emerald-800'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Learn from experienced founders and industry experts',
    gradient: 'from-purple-600 to-purple-800'
  },
  {
    icon: Network,
    title: 'Network and Partnerships',
    description: 'Access our ecosystem of partners, collaborators, and fellow founders',
    gradient: 'from-orange-600 to-orange-800'
  },
  {
    icon: Zap,
    title: 'Growth Infrastructure',
    description: 'Essential tools and platforms (Zoho, analytics, automation) to scale efficiently',
    gradient: 'from-red-600 to-red-800'
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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !containerRef.current) return;

    const scrollTop = window.scrollY;
    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const stackPosition = window.innerHeight * 0.2; // 20% from top
    const itemStackDistance = 30;
    const itemScale = 0.05;
    const baseScale = 0.9;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = containerTop + (i * 100); // Initial offset
      const triggerStart = cardTop - stackPosition - itemStackDistance * i;
      const triggerEnd = cardTop - window.innerHeight * 0.1;

      // Calculate scale progress
      const scaleProgress = Math.max(0, Math.min(1, (scrollTop - triggerStart) / (triggerEnd - triggerStart)));
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      // Calculate pin position
      const pinStart = cardTop - stackPosition - itemStackDistance * i;
      const pinEnd = containerTop + container.offsetHeight - window.innerHeight / 2;
      
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPosition + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosition + itemStackDistance * i;
      }

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(updateCardTransforms);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateCardTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateCardTransforms]);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-32 pb-12"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            The <span className="gradient-text">StratSchool Stack</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We provide founders with everything they need to turn ideas into ventures.
          </p>
        </motion.div>
      </div>

      {/* Stacking Cards Container */}
      <div ref={containerRef} className="relative" style={{ minHeight: `${stackItems.length * 100}vh`, paddingBottom: '50vh' }}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {stackItems.map((item, index) => (
            <StackingCard
              key={item.title}
              item={item}
              index={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>

      {/* Journey Flow Animation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Continuous Scrolling Journey */}
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

          {/* Gradient Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-journey {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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

const StackingCard = React.forwardRef<HTMLDivElement, { 
  item: typeof stackItems[0]; 
  index: number;
}>(({ item, index }, ref) => {
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      style={{
        marginBottom: index < stackItems.length - 1 ? '100px' : '0',
        transformOrigin: 'top center',
        willChange: 'transform',
        position: 'relative',
        zIndex: index,
      }}
      className="w-full"
    >
      <div className="group relative w-full h-[400px]">
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

        {/* Card */}
        <div className="relative w-full h-full bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/20 p-6 sm:p-8 overflow-hidden flex flex-col justify-between shadow-2xl">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" 
            style={{ transition: 'transform 1.5s ease' }}
          />

          {/* Top Content */}
          <div className="relative">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl mb-4`}>
              <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          {/* Card Number Badge */}
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-xl font-bold text-white/80">{index + 1}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

StackingCard.displayName = 'StackingCard';
