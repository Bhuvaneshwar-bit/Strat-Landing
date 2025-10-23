'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, Sparkles, Award, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

const upcomingEvents = [
  {
    event: 'Pitch & Network',
    date: 'Nov 10, 2025',
    venue: 'Chennai',
    description: 'Connect with investors and fellow entrepreneurs'
  },
  {
    event: 'Startup Bootcamp',
    date: 'Nov 25, 2025',
    venue: 'Coimbatore',
    description: 'Intensive 2-day workshop on startup fundamentals'
  },
  {
    event: 'Innovation Hackathon',
    date: 'Dec 5, 2025',
    venue: 'Madurai',
    description: '48-hour challenge to build innovative solutions'
  },
  {
    event: 'Founder Meetup',
    date: 'Dec 15, 2025',
    venue: 'Trichy',
    description: 'Network with successful entrepreneurs and mentors'
  },
];

const pastEvents = [
  {
    title: 'Campus Innovation Summit 2024',
    date: 'Sept 2024',
    attendees: '500+',
    image: '/events/placeholder1.jpg'
  },
  {
    title: 'Startup Weekend Chennai',
    date: 'Aug 2024',
    attendees: '300+',
    image: '/events/placeholder2.jpg'
  },
  {
    title: 'Entrepreneurship Workshop',
    date: 'July 2024',
    attendees: '200+',
    image: '/events/placeholder3.jpg'
  },
  {
    title: 'Pitch Competition Finals',
    date: 'June 2024',
    attendees: '150+',
    image: '/events/placeholder4.jpg'
  },
];

const impactStats = [
  { label: 'Students Reached', value: '10,000+' },
  { label: 'Campuses', value: '50+' },
  { label: 'Events Conducted', value: '100+' },
  { label: 'Startups Launched', value: '75+' },
];

export default function EDIITNPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-3xl" />
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
                GOVERNMENT PARTNERSHIP
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space-grotesk mb-6 leading-tight"
            >
              <span className="gradient-text">Empowering Campuses</span><br />
              Through Entrepreneurship
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              In partnership with EDII Tamil Nadu, StratSchool conducts workshops, hackathons, and startup events that nurture innovation in students. Together, we're helping the Government of Tamil Nadu build the future of startups and enabling transformative change across campuses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#upcoming-events"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Upcoming Events
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactSection stats={impactStats} />

      {/* Upcoming Events */}
      <UpcomingEventsSection events={upcomingEvents} />

      {/* Past Events Gallery */}
      <PastEventsSection events={pastEvents} />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}

function ImpactSection({ stats }: { stats: Array<{ label: string; value: string }> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/5 to-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-400">
            Transforming Tamil Nadu's entrepreneurial landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 glass-effect rounded-2xl border border-white/10 hover:border-red-600/30 transition-all duration-300 text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingEventsSection({ events }: { events: Array<{ event: string; date: string; venue: string; description: string }> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="upcoming-events" ref={ref} className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">Upcoming</span> Events
          </h2>
          <p className="text-xl text-gray-400">
            Join us at our next innovation gatherings
          </p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.event}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-red-600/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {event.event}
                    </h3>
                    <p className="text-gray-400">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-red-400" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4 text-red-400" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PastEventsSection({ events }: { events: Array<{ title: string; date: string; attendees: string; image: string }> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">Past Events</span> Gallery
          </h2>
          <p className="text-xl text-gray-400">
            Highlights from our journey of innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-effect rounded-3xl border border-white/10 hover:border-red-600/30 transition-all duration-300 overflow-hidden">
                {/* Placeholder for image */}
                <div className="aspect-video bg-gradient-to-br from-red-600/20 to-red-900/20 flex items-center justify-center">
                  <Award className="w-16 h-16 text-red-400/50" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-400" />
                      {event.attendees} Attendees
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Campus?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Partner with us to bring world-class entrepreneurship education to your institution
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get in Touch
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
