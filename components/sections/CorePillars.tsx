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
    offset: ['start start', 'end end'],
  });

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
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
          className="text-center mb-20"
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
        <div ref={containerRef} className="relative h-[400vh]">
          <div className="sticky top-32 h-[80vh] flex items-center justify-center">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const cardStart = index * 0.25;
              const cardEnd = cardStart + 0.25;

              const y = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [index * 60, 0]
              );

              const scale = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [0.9, 1]
              );

              const rotateX = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [index === 0 ? 0 : 10, 0]
              );

              const opacity = useTransform(
                scrollYProgress,
                [cardStart - 0.05, cardStart, cardEnd, cardEnd + 0.05],
                [0, 1, 1, 0.3]
              );

              const zIndex = pillars.length - index;

              return (
                <motion.div
                  key={pillar.id}
                  style={{
                    y,
                    scale,
                    rotateX,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                  className="absolute inset-x-0 max-w-4xl mx-auto px-4"
                >
                  <div className="group relative">
                    {/* 3D Shadow/Depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" 
                         style={{ transform: 'translateZ(-20px)' }} />

                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
                         style={{ transform: 'translateZ(0)' }}>
                      
                      <div className="p-8 sm:p-10">
                        <div className="flex items-start gap-6 mb-6">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ 
                              scale: 1.1,
                              rotateY: 180,
                            }}
                            transition={{ duration: 0.6, ease: 'backOut' }}
                            className="p-4 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-xl shrink-0"
                            style={{ transformStyle: 'preserve-3d' }}
                          >
                            <Icon className="w-8 h-8 text-red-400" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-2xl sm:text-3xl font-bold text-white font-space-grotesk">
                                {pillar.title}
                              </h3>
                              {pillar.tbd && (
                                <span className="px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-xs text-red-400 font-semibold">
                                  TBD
                                </span>
                              )}
                            </div>

                            <p className="text-gray-400 leading-relaxed text-lg">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Animated Border on Hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-[1px]">
                          <div className="h-full w-full bg-black/80 rounded-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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
