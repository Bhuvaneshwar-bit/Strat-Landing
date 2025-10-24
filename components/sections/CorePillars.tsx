'use client';

import { motion } from 'framer-motion';
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
    tbd: true,
    position: 'right',
  },
];

export default function CorePillars() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
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
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateX: 90,
                  rotateY: isLeft ? -45 : 45,
                  rotateZ: isLeft ? -10 : 10,
                  scale: 0.6
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  scale: 1
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                  rotateX: {
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1]
                  },
                  rotateY: {
                    duration: 1.3,
                    ease: [0.16, 1, 0.3, 1]
                  },
                  rotateZ: {
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: true, margin: '-200px' }}
                className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '2000px',
                }}
              >
                <motion.div
                  initial={{
                    rotateY: isLeft ? -25 : 25,
                    z: -100
                  }}
                  whileInView={{
                    rotateY: 0,
                    z: 0
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    rotateY: isLeft ? 5 : -5,
                    scale: 1.02,
                    z: 50
                  }}
                  className="group relative w-full max-w-md"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Elegant Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -inset-2 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                  />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Refined gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />
                    
                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    }} />

                    <div className="relative p-10 sm:p-12">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.4,
                          type: 'spring',
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="mb-6 p-5 bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent rounded-2xl w-fit border border-red-500/20 shadow-lg"
                      >
                        <Icon className="w-10 h-10 text-red-400" strokeWidth={1.5} />
                      </motion.div>

                      {/* Content */}
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk tracking-tight"
                          >
                            {pillar.title}
                          </motion.h3>
                          {pillar.tbd && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.6 }}
                              viewport={{ once: true }}
                              className="px-3 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full text-xs text-red-400 font-semibold whitespace-nowrap"
                            >
                              TBD
                            </motion.span>
                          )}
                        </div>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          viewport={{ once: true }}
                          className="text-gray-300 leading-relaxed text-lg"
                        >
                          {pillar.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Elegant bottom border accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

                    {/* Hover border glow */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 p-[1px]">
                        <div className="h-full w-full bg-zinc-900/98 rounded-3xl" />
                      </div>
                    </motion.div>
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
