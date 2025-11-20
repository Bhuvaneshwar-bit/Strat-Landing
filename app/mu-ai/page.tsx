'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, TrendingUp, Users, Megaphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

// Smooth text reveal animation - word by word
const TextReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  const words = children.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: delay + i * 0.08, 
            ease: [0.16, 1, 0.3, 1] // Custom easing like Barba.js sites
          }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

export default function MuAIPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-black text-white"
    >
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ModulesSection />
      <BetaSection />
      <OriginSection />
      <Footer />
    </motion.main>
  );
}

// Hero - MASSIVE Typography, Minimal
function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-center space-y-12"
        >
          {/* Small badge */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-gray-500"
          >
            The First Venture from StratSchool
          </motion.p>

          {/* MASSIVE Typography - Key feature! */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.7, 
              ease: [0.16, 1, 0.3, 1] // Smooth easing
            }}
            className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter"
          >
            μ AI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-400"
          >
            Your AI Co-Founder
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Intro Section - Large flowing text
function IntroSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.2] text-center"
        >
          <TextReveal delay={0}>
            An AI Business Suite that empowers founders with automated intelligence across finance marketing and operations
          </TextReveal>
        </motion.h2>
      </div>
    </section>
  );
}

// Modules - Clean Grid with hover effects
function ModulesSection() {
  const modules = [
    {
      icon: TrendingUp,
      name: 'Mu Ledger',
      role: 'AI CFO',
      desc: 'Tracks expenses, forecasts revenue, analyzes unit economics, and helps founders understand their financial runway and investor metrics.',
    },
    {
      icon: Users,
      name: 'Mu Hire',
      role: 'AI HR',
      desc: 'Helps define roles, craft job descriptions, structure teams, and design hiring or onboarding workflows.',
    },
    {
      icon: Megaphone,
      name: 'Mu Reach',
      role: 'AI CMO',
      desc: 'Generates campaign strategies, social media posts, content ideas, and marketing funnels — tailored for your startup stage.',
    },
    {
      icon: Brain,
      name: 'Ignis',
      role: 'AI Co-Founder',
      desc: 'Your thinking partner that helps you validate problems, structure your business model, and plan your go-to-market roadmap.',
    },
  ];

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
            Built to
            <br />
            <span className="gradient-text">Empower Founders</span>
          </h3>
        </motion.div>

        {/* Grid - Like Cieffe Milano's clean sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {modules.map((module, i) => (
            <ModuleCard key={module.name} module={module} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module, index }: { module: any; index: number }) {
  const Icon = module.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 1, 
        delay: index * 0.15, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group relative bg-black p-12 sm:p-16 hover:bg-white/[0.02] transition-colors duration-700"
    >
      {/* Icon with hover animation */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
      </motion.div>

      {/* Content */}
      <h4 className="text-4xl sm:text-5xl font-bold mb-4">{module.name}</h4>
      <p className="text-xl text-red-400 font-medium mb-6">{module.role}</p>
      <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
        {module.desc}
      </p>

      {/* Arrow indicator */}
      <motion.div
        className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors duration-500"
        whileHover={{ x: 10 }}
      >
        <ArrowRight className="w-5 h-5" strokeWidth={1} />
      </motion.div>
    </motion.div>
  );
}

// Beta - Minimal CTA with smooth hover
function BetaSection() {
  return (
    <section className="relative py-48 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-12">
            Join the <span className="gradient-text">Beta</span>
          </h3>
          <p className="text-xl sm:text-2xl text-gray-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
            μ AI is currently in private beta. Join the waitlist to be among the first to experience the future of AI-powered entrepreneurship.
          </p>

          {/* CTA Button - Minimal with smooth fill animation */}
          <motion.a
            href="https://www.stratschool.org/mu-ai-suite"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-16 py-6 border border-white/20 hover:border-white transition-all duration-700 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10 text-xl font-light">Join Beta Access</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1.5} />
            
            {/* Smooth hover fill effect - like Cieffe Milano */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <span className="absolute inset-0 mix-blend-difference" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Origin - Story section
function OriginSection() {
  return (
    <section className="relative py-32 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-12"
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Built at <span className="gradient-text">StratSchool Venture Studio</span>
          </h3>

          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl text-gray-300 font-light leading-relaxed">
              μ AI was born inside StratSchool's venture studio as part of our mission to build intelligent tools for founders.
            </p>

            <p className="text-lg text-gray-500 font-light leading-relaxed">
              It reflects our philosophy of combining innovation, technology, and real founder insight to create tools that actually solve problems.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-500 text-lg"
            >
              <span>Learn more about StratSchool</span>
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
