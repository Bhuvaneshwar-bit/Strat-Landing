'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, TrendingUp, Users, Megaphone, ArrowRight, X } from 'lucide-react';
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
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      <BetaSection onOpenForm={() => setIsFormOpen(true)} />
      <OriginSection />
      <Footer />
      
      {/* Beta Access Form Modal */}
      <BetaFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
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
            Your AI Business Suite
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
            An AI Business Suite that empowers founders with automated intelligence across finance, marketing and operations
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
function BetaSection({ onOpenForm }: { onOpenForm: () => void }) {
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

          {/* CTA Button - Rounded Red Style */}
          <motion.button
            onClick={onOpenForm}
            className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span>Join Beta Access</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" strokeWidth={2} />
          </motion.button>
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
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500"
            >
              <span>Learn more about StratSchool</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Beta Access Form Modal
function BetaFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mvgllgwj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 sm:p-12 pointer-events-auto overflow-y-auto max-h-[90vh]"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-400 text-lg">We'll be in touch soon about your beta access.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-4">
                      Join the <span className="gradient-text">Beta</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                      Fill in your details to get early access to μ AI
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company/Startup Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                        placeholder="Your startup name"
                      />
                    </div>

                    {/* When do you need access */}
                    <div>
                      <label htmlFor="access-date" className="block text-sm font-medium text-gray-300 mb-2">
                        When do you need access? *
                      </label>
                      <select
                        id="access-date"
                        name="access-date"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
                      >
                        <option value="">Select timeframe</option>
                        <option value="immediately">Immediately</option>
                        <option value="1-2-weeks">In 1-2 weeks</option>
                        <option value="1-month">In 1 month</option>
                        <option value="2-3-months">In 2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    {/* Use case */}
                    <div>
                      <label htmlFor="use-case" className="block text-sm font-medium text-gray-300 mb-2">
                        What will you use μ AI for? *
                      </label>
                      <textarea
                        id="use-case"
                        name="use-case"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                        placeholder="Tell us about your startup and how μ AI can help..."
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="w-5 h-5" strokeWidth={2} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
