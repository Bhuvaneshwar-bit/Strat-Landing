'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Code, Presentation } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    team: 'Team JETMECH',
    title: 'IGNITE Scholarship Winners',
    quote: 'Huge thanks to StratSchool for inspiring us to look beyond, enabling us to tackle complex problems with a creative and systematic approach.',
    image: '',
  },
  {
    team: 'Team InnovateTech',
    title: 'LIFTOFF Graduates',
    quote: 'The mentorship and resources provided by StratSchool helped us scale from an idea to a funded startup in just 6 months.',
    image: '',
  },
  {
    team: 'Team EcoSolutions',
    title: 'FOUNDATIONS Alumni',
    quote: 'The comprehensive curriculum gave us the confidence and skills to launch our sustainable tech venture.',
    image: '',
  },
];

const features = [
  {
    icon: Lightbulb,
    title: 'Idea Validation Workshops',
    description: 'Learn to test and refine your startup concept',
  },
  {
    icon: Code,
    title: 'MVP Development Support',
    description: 'Build your minimum viable product with expert guidance',
  },
  {
    icon: Presentation,
    title: 'Pitch Coaching',
    description: 'Master the art of presenting your vision',
  },
];

export default function CampusExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
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
            <span className="text-red-400 font-semibold text-sm">CAMPUS PROGRAMS</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Experience StratSchool{' '}
            <span className="gradient-text">In Your Campus</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bring StratSchool's expertise to your institution with our free introductory sessions. 
            Empower your students with essential entrepreneurial skills through engaging and interactive workshops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group flex gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-xl">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between">
              {/* Testimonial Content */}
              <div>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  {testimonials[currentTestimonial].image && (
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].team}
                      className="w-full h-48 object-cover rounded-2xl mb-6"
                    />
                  )}
                  <h3 className="text-2xl font-bold mb-2">{testimonials[currentTestimonial].team}</h3>
                  <p className="text-red-400 mb-4">{testimonials[currentTestimonial].title}</p>
                  <p className="text-gray-300 text-lg leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'w-8 bg-red-600' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 mb-2">1/{testimonials.length}</p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/bootcamps-and-workshops"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
          >
            Book a Free Workshop
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
