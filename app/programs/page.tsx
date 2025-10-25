'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Rocket, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

const programs = [
  {
    id: 'ignite',
    icon: Lightbulb,
    name: 'IGNITE',
    duration: '12-week bootcamp',
    tagline: 'Turn Your Idea Into Reality',
    gradient: 'from-orange-500 to-red-500',
    description: 'An intensive 12-week bootcamp designed for aspiring entrepreneurs willing to build their startup from scratch.',
    features: [
      'Idea validation and market research',
      'Business model canvas development',
      'MVP development guidance',
      'Pitch deck creation',
      'Investor network access',
      'Mentorship from successful founders'
    ],
    cta: 'Apply to IGNITE',
    link: '/join-ignite'
  },
  {
    id: 'liftoff',
    icon: Rocket,
    name: 'LIFTOFF',
    duration: '6-month accelerator',
    tagline: 'Scale Your Startup',
    gradient: 'from-red-500 to-pink-500',
    description: 'A 6-month accelerator program for startups with an existing MVP ready to scale and raise funds.',
    features: [
      'Growth strategy development',
      'Fundraising preparation',
      'Go-to-market execution',
      'Team building workshops',
      'Legal and compliance guidance',
      'Direct investor introductions'
    ],
    cta: 'Apply to LIFTOFF',
    link: '#contact'
  },
  {
    id: 'foundations',
    icon: GraduationCap,
    name: 'FOUNDATIONS',
    duration: 'Self-paced online',
    tagline: 'Learn at Your Own Pace',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'A flexible, self-paced online course covering the fundamentals of entrepreneurship and startup building.',
    features: [
      'Comprehensive video modules',
      'Interactive assignments',
      'Community forum access',
      'Certificate of completion',
      'Lifetime access to content',
      'Monthly live Q&A sessions'
    ],
    cta: 'Explore FOUNDATIONS',
    link: '/foundations'
  },
];

export default function ProgramsPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-red-600/20 border border-red-600/30 rounded-full mb-8"
            >
              <span className="text-red-400 font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                OUR FLAGSHIP PROGRAMS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space-grotesk mb-6 leading-tight"
            >
              Tailored Programs for <span className="gradient-text">Every Stage</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              From idea to impact, we guide you at every stage of your entrepreneurial journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <ProgramsSection programs={programs} />

      <Footer />
    </main>
  );
}

function ProgramsSection({ programs }: { programs: typeof programs }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${program.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-red-500/50">
                  {/* Icon */}
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${program.gradient} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">{program.duration}</div>
                      <h3 className="text-3xl font-bold text-white mb-3">{program.name}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent mb-4`}>
                        {program.tagline}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient} mt-2 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={program.link}
                      className={`group/btn w-full px-6 py-4 bg-gradient-to-r ${program.gradient} rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                    >
                      {program.cta}
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
