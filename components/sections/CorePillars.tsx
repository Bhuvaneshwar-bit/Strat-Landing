'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import CardImageGenerator from '@/components/animations/CardImageGenerator';

const FlyingCards = dynamic(() => import('@/components/animations/FlyingCards'), {
  ssr: false,
});

export default function CorePillars() {
  const cardImages = CardImageGenerator();

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
          className="text-center pt-32 pb-12"
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            Scroll to explore our journey
          </motion.p>
        </motion.div>

        {/* Flying Cards Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full"
          style={{ height: '60vh', minHeight: '500px' }}
        >
          {cardImages.length > 0 && (
            <FlyingCards items={cardImages} className="rounded-2xl" />
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-20"
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
