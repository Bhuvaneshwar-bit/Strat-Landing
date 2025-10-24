'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Rocket, Building2, Radio } from 'lucide-react';
import { useRef } from 'react';

const pillars = [
  {
    id: 1,
    title: 'Foundations',
    icon: BookOpen,
    description: 'Master the fundamentals of entrepreneurship with cutting-edge curriculum designed by industry experts',
    color: 'from-red-600 to-orange-500',
    bgGlow: 'bg-red-600/20',
    textColor: 'text-red-400',
    borderColor: 'border-red-600/30',
  },
  {
    id: 2,
    title: 'Ignite',
    icon: Rocket,
    description: 'Join our intensive 12-week bootcamp to validate ideas, build MVPs, and launch your startup',
    color: 'from-orange-500 to-yellow-500',
    bgGlow: 'bg-orange-500/20',
    textColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
  },
  {
    id: 3,
    title: 'Venture Studio',
    icon: Building2,
    description: 'Partner with us to build real companies through hands-on collaboration, product development, and access to capital',
    color: 'from-yellow-500 to-red-600',
    bgGlow: 'bg-yellow-500/20',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
  },
  {
    id: 4,
    title: 'Stratschool Media',
    icon: Radio,
    description: 'Coming soon - Amplifying entrepreneurial stories and insights to inspire the next generation',
    color: 'from-red-600 to-pink-500',
    bgGlow: 'bg-pink-500/20',
    textColor: 'text-pink-400',
    borderColor: 'border-pink-500/30',
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
    <section id="about" ref={containerRef} className="relative bg-black">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 pt-32 pb-16 bg-gradient-to-b from-black via-black to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6"
            >
              <span className="text-red-400 font-semibold text-sm">OUR JOURNEY</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Core Pillars{' '}
              <span className="gradient-text">Roadmap</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your entrepreneurial journey, from foundations to market leadership
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Stack Cards */}
      <div className="relative pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const targetScale = 1 - (pillars.length - index) * 0.05;
            const start = index / pillars.length;
            const end = (index + 1) / pillars.length;

            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [1, targetScale]
            );

            const opacity = useTransform(
              scrollYProgress,
              [start - 0.1, start, end - 0.1, end],
              [0.5, 1, 1, 0.8]
            );

            return (
              <motion.div
                key={pillar.id}
                style={{
                  scale,
                  opacity,
                  position: 'sticky',
                  top: `${120 + index * 20}px`,
                }}
                className="mb-8"
              >
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                      }} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, ease: 'backOut' }}
                            className={`p-4 bg-gradient-to-br ${pillar.color} rounded-2xl shadow-2xl`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>

                          {/* Title */}
                          <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk">
                              {pillar.title}
                            </h3>
                            {pillar.tbd && (
                              <span className="inline-block mt-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-400">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Step Number */}
                        <div className={`hidden sm:block px-4 py-2 ${pillar.bgGlow} border ${pillar.borderColor} rounded-xl`}>
                          <span className={`text-lg font-bold ${pillar.textColor}`}>
                            {String(pillar.id).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                        {pillar.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${pillar.color} rounded-full`}
                          />
                        </div>
                        <span className={`text-sm font-semibold ${pillar.textColor}`}>
                          Stage {pillar.id}/4
                        </span>
                      </div>

                      {/* Interactive CTA */}
                      {!pillar.tbd && (
                        <motion.a
                          href={pillar.id === 2 ? '/join-ignite' : '#'}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`inline-flex items-center gap-2 mt-8 ${pillar.textColor} hover:text-white transition-colors font-semibold group`}
                        >
                          Learn more about {pillar.title}
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.a>
                      )}
                    </div>

                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${pillar.color} p-[1px]`}>
                        <div className="h-full w-full bg-black/90 rounded-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-30 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}
