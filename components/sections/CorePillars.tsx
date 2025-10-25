'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Rocket, Building2, Radio } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const Lightning = dynamic(() => import('@/components/animations/Lightning'), {
  ssr: false,
});

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
  },
];

export default function CorePillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={containerRef} className="relative bg-black overflow-hidden">
      {/* Lightning Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Lightning 
          hue={0}
          xOffset={0}
          speed={0.4}
          intensity={0.5}
          size={1.2}
        />
      </div>

      {/* Subtle Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

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

        {/* Parallax Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <ParallaxCard
                key={pillar.id}
                pillar={pillar}
                Icon={Icon}
                index={index}
              />
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

interface ParallaxCardProps {
  pillar: typeof pillars[0];
  Icon: any;
  index: number;
}

function ParallaxCard({ pillar, Icon, index }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects - each card moves at different speeds
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  
  // Alternate parallax direction for visual interest
  const yDirection = index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        y: yDirection,
        opacity,
        scale,
      }}
      className="group relative"
    >
      {/* Elegant Glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Glassmorphism Card */}
      <div className="relative bg-gradient-to-br from-white/[0.07] via-white/[0.05] to-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform-gpu">
        {/* Premium glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-red-500/5 via-transparent to-transparent" />
        
        {/* Glass reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        
        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }} />

        <div className="relative p-10 sm:p-12">
          {/* Icon */}
          <div className="mb-6 p-5 bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent rounded-2xl w-fit border border-red-500/20 shadow-lg transition-transform hover:scale-110">
            <Icon className="w-10 h-10 text-red-400" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-space-grotesk tracking-tight mb-4">
              {pillar.title}
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              {pillar.description}
            </p>
          </div>
        </div>

        {/* Elegant bottom glass border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        {/* Premium hover glow effect - simplified */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 via-red-400/10 to-red-500/20 blur-sm" />
        </div>

        {/* Inner glow on hover - simplified */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>
    </motion.div>
  );
}
