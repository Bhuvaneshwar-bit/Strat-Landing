'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Rocket, Building2, Radio } from 'lucide-react';
import { useRef } from 'react';

const pillars = [
  {
    id: 1,
    title: 'Foundations',
    icon: BookOpen,
    description: 'Cutting-edge curriculum designed by industry experts to give you the most relevant and practical knowledge',
  },
  {
    id: 2,
    title: 'Ignite',
    icon: Rocket,
    description: 'Hands-on guidance from seasoned entrepreneurs who have been there and done that',
  },
  {
    id: 3,
    title: 'Venture Studio',
    icon: Building2,
    description: 'Access to a thriving network and endless collaboration opportunities',
  },
  {
    id: 4,
    title: 'Stratschool Media',
    icon: Radio,
    description: 'Pathways to funding and global market access to scale your venture',
    tbd: true,
  },
];

export default function CorePillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.2', 'end 0.8'],
  });

  return (
    <section id="about" className="relative bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-32 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6"
          >
            <span className="text-red-400 font-semibold text-sm">OUR MISSION</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Fueling India's{' '}
            <span className="gradient-text">Startup Ecosystem</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At StratSchool, we combine education, incubation, and innovation to create real companies. 
            We collaborate with exceptional founders, helping them validate ideas, develop products, and access capital.
          </p>
        </motion.div>

        {/* Scroll Stack Container */}
        <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
          <div className="sticky top-24 h-screen flex items-center justify-center py-20">
            <div className="relative w-full max-w-4xl">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                
                // Calculate scroll progress for each card
                const cardProgress = useTransform(
                  scrollYProgress,
                  [index / pillars.length, (index + 1) / pillars.length],
                  [0, 1]
                );

                // Stack position - cards stack from bottom to top
                const y = useTransform(
                  cardProgress,
                  [0, 1],
                  [400 - (index * 40), index * 20]
                );

                // Scale animation - cards scale up as they come into view
                const scale = useTransform(
                  cardProgress,
                  [0, 0.5, 1],
                  [0.85 - (index * 0.03), 0.95, 1]
                );

                // Opacity - fade in smoothly
                const opacity = useTransform(
                  cardProgress,
                  [0, 0.3, 0.7, 1],
                  [0, 1, 1, 0.6]
                );

                // Rotate X for 3D depth
                const rotateX = useTransform(
                  cardProgress,
                  [0, 0.5, 1],
                  [15, 5, 0]
                );

                const zIndex = pillars.length - index;

                return (
                  <motion.div
                    key={pillar.id}
                    style={{
                      y,
                      scale,
                      opacity,
                      rotateX,
                      zIndex,
                    }}
                    className="absolute inset-0 w-full"
                  >
                    <div 
                      className="group relative"
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                      }}
                    >
                      {/* Glow Shadow */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />

                      {/* Card */}
                      <div 
                        className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'transform',
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent opacity-50" />
                        
                        <div className="relative p-8 sm:p-12">
                          <div className="flex items-start gap-6">
                            {/* Icon */}
                            <motion.div
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                              }}
                              transition={{ duration: 0.4, ease: 'backOut' }}
                              className="p-4 bg-gradient-to-br from-red-600/30 to-red-500/20 rounded-2xl shrink-0 backdrop-blur-sm border border-red-500/20"
                            >
                              <Icon className="w-8 h-8 text-red-400" />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white font-space-grotesk">
                                  {pillar.title}
                                </h3>
                                {pillar.tbd && (
                                  <span className="px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-xs text-red-400 font-semibold whitespace-nowrap">
                                    TBD
                                  </span>
                                )}
                              </div>

                              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                                {pillar.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/50 via-red-500/50 to-red-600/50 p-[1px]">
                            <div className="h-full w-full bg-zinc-900/95 rounded-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Spacer for smooth transition */}
        <div className="h-32" />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pb-32"
        >
          <a
            href="/our-people"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-semibold group"
          >
            Learn more about us
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
