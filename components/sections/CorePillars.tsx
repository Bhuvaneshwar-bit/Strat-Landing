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
    <section id="about" className="relative bg-gradient-to-b from-black via-red-950/10 to-black">
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
        <div ref={containerRef} className="relative pb-32" style={{ minHeight: '300vh' }}>
          <div className="sticky top-40 w-full max-w-5xl mx-auto" style={{ height: '70vh' }}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              
              // Each card gets its own scroll range
              const start = index / pillars.length;
              const end = (index + 1) / pillars.length;

              const y = useTransform(scrollYProgress, [start, end], [100, 0]);
              const scale = useTransform(scrollYProgress, [start, end], [0.95, 1 - index * 0.05]);
              const opacity = useTransform(scrollYProgress, [start - 0.05, start, end], [0, 1, 1]);

              return (
                <motion.div
                  key={pillar.id}
                  style={{
                    y,
                    scale,
                    opacity,
                    top: `${index * 25}px`,
                    zIndex: pillars.length - index,
                  }}
                  className="absolute left-0 right-0 mx-auto"
                >
                  <div className="group relative mx-4">
                    {/* Elegant Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-red-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                      {/* Refined gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />
                      
                      {/* Subtle noise texture */}
                      <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                      }} />

                      <div className="relative p-10 sm:p-12">
                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="p-5 bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent rounded-2xl shrink-0 border border-red-500/20 shadow-lg"
                          >
                            <Icon className="w-10 h-10 text-red-400" strokeWidth={1.5} />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <h3 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk tracking-tight">
                                {pillar.title}
                              </h3>
                              {pillar.tbd && (
                                <span className="px-3 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full text-xs text-red-400 font-semibold whitespace-nowrap mt-1">
                                  TBD
                                </span>
                              )}
                            </div>

                            <p className="text-gray-300 leading-relaxed text-lg">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Elegant bottom border accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

                      {/* Hover border glow */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 p-[1px]">
                          <div className="h-full w-full bg-zinc-900/98 rounded-3xl" />
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pb-32"
        >
          <a
            href="#programs"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-semibold group"
          >
            Explore our programs
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
