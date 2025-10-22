'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Rocket, GraduationCap, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    icon: Lightbulb,
    name: 'IGNITE',
    duration: '12-week bootcamp',
    tagline: 'Turn Your Idea Into Reality',
    description: 'An intensive 12-week bootcamp designed for aspiring entrepreneurs with an early-stage idea. We help you validate your concept, build a minimum viable product (MVP), and craft a compelling pitch.',
    features: [
      'Idea validation workshops',
      'MVP development support',
      'Pitch coaching',
      'Mentorship sessions',
    ],
    color: 'from-orange-500 to-red-500',
    link: '/join-ignite',
  },
  {
    icon: Rocket,
    name: 'LIFTOFF',
    duration: '6-month accelerator',
    tagline: 'Scale Your Startup',
    description: 'A 6-month accelerator program for startups with an existing MVP and early traction. We provide seed funding, dedicated mentorship, and resources to scale your business.',
    features: [
      'Seed funding up to ₹10 Lakhs',
      'Dedicated mentorship',
      'Growth hacking strategies',
      'Investor network access',
    ],
    color: 'from-red-500 to-red-600',
    link: '/stratschool-liftoff',
  },
  {
    icon: GraduationCap,
    name: 'FOUNDATIONS',
    duration: 'Self-paced online',
    tagline: 'Learn at Your Own Pace',
    description: 'A flexible, self-paced online course covering the fundamentals of entrepreneurship. Perfect for those exploring the startup world or looking to build essential business skills.',
    features: [
      'Comprehensive curriculum',
      'Self-paced learning',
      'Expert-led video modules',
      'Certificate of completion',
    ],
    color: 'from-blue-500 to-cyan-500',
    link: '/stratschool-foundations',
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6"
          >
            <span className="text-red-400 font-semibold text-sm">OUR FLAGSHIP PROGRAMS</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Tailored Programs for{' '}
            <span className="gradient-text">Every Stage</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From idea to impact, we guide you at every stage of your entrepreneurial journey.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                  {/* Icon & Name */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${program.color} rounded-2xl mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold font-space-grotesk mb-2">{program.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{program.duration}</p>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                      {program.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={program.link}
                    className={`group/btn w-full py-4 px-6 bg-gradient-to-r ${program.color} rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105`}
                  >
                    Learn more
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Join us in building the next generation of successful ventures. Discover how StratSchool can help you turn your ideas into reality
          </p>
          <Link
            href="/bootcamps-and-workshops"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
