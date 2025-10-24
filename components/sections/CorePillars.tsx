'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Rocket, Building2, Radio } from 'lucide-react';

const pillars = [
  {
    id: 1,
    title: 'Foundations',
    icon: BookOpen,
    description: 'Cutting-edge curriculum designed by industry experts to give you the most relevant and practical knowledge',
    position: 'left',
  },
  {
    id: 2,
    title: 'Ignite',
    icon: Rocket,
    description: 'Hands-on guidance from seasoned entrepreneurs who have been there and done that',
    position: 'right',
  },
  {
    id: 3,
    title: 'Venture Studio',
    icon: Building2,
    description: 'Access to a thriving network and endless collaboration opportunities',
    position: 'left',
  },
  {
    id: 4,
    title: 'Stratschool Media',
    icon: Radio,
    description: 'Pathways to funding and global market access to scale your venture',
    position: 'right',
  },
];

export default function CorePillars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Clean Background - Ready for custom animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center pt-32 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6"
          >
            <span className="text-red-400 font-semibold text-sm">OUR MISSION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6"
          >
            Fueling India's{' '}
            <span className="gradient-text">Startup Ecosystem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            At StratSchool, we combine education, incubation, and innovation to create real companies. 
            We collaborate with exceptional founders, helping them validate ideas, develop products, and access capital.
          </motion.p>
        </motion.div>

        {/* Zig-Zag Cards Layout */}
        <div className="space-y-32 pb-32">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isLeft = pillar.position === 'left';
            
            return (
              <motion.div
                key={pillar.id}
                initial={prefersReducedMotion ? { opacity: 0 } : { 
                  opacity: 0, 
                  y: 60,
                  rotateY: isLeft ? -25 : 25,
                  scale: 0.9
                }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                style={{
                  willChange: 'transform, opacity',
                }}
              >
                <motion.div
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="group relative w-full max-w-md"
                >
                  {/* Simplified Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Optimized Glassmorphism Card */}
                  <div 
                    className="relative bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-black/40 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
                  >
                    {/* Minimal glass effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="relative p-10 sm:p-12">
                      {/* Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.1,
                        }}
                        viewport={{ once: true }}
                        className="mb-6 p-5 bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent rounded-2xl w-fit border border-red-500/20 shadow-lg"
                      >
                        <Icon className="w-10 h-10 text-red-400" strokeWidth={1.5} />
                      </motion.div>

                      {/* Content */}
                      <div>
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk tracking-tight mb-4"
                        >
                          {pillar.title}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="text-gray-300 leading-relaxed text-lg"
                        >
                          {pillar.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
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
