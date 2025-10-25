'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Calendar, MapPin, Users, Sparkles, Award, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';
import BackgroundTransition from '@/components/animations/BackgroundTransition';

const upcomingEvents = [
  {
    event: 'Pitch & Network',
    type: 'NETWORKING EVENT',
    date: 'November 10, 2025',
    venue: 'Chennai',
    description: 'Present your startup idea and connect with fellow entrepreneurs and mentors',
    attendees: '50+ Students'
  },
  {
    event: 'Design Thinking Workshop',
    type: 'WORKSHOP',
    date: 'November 25, 2025',
    venue: 'Coimbatore',
    description: 'Learn human-centered design principles to solve real-world problems',
    attendees: '40+ Students'
  },
  {
    event: 'Innovation Bootcamp',
    type: 'BOOTCAMP',
    date: 'December 8, 2025',
    venue: 'Madurai',
    description: '3-day intensive program on ideation, validation, and MVP development',
    attendees: '60+ Students'
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

  // Preload background images immediately
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preload';
    link1.as = 'image';
    link1.href = '/images/one.JPG';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preload';
    link2.as = 'image';
    link2.href = '/images/two.JPG';
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Smooth Background Image Transition */}
        <BackgroundTransition 
          images={['/images/one.JPG', '/images/two.JPG']}
          interval={6000}
        />

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

function UpcomingEventsSection({ events }: { events: Array<{ event: string; type: string; date: string; venue: string; description: string; attendees: string }> }) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.event}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-red-400/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110" />
              
              {/* Main Card with 3D Glassmorphism */}
              <div 
                className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-2xl group-hover:shadow-red-500/20"
                style={{
                  transform: 'translateZ(0)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'translateZ(20px) rotateX(2deg) rotateY(-2deg)';
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
                }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Event Type Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full mb-6 w-fit">
                    <span className="text-red-400 font-semibold text-xs uppercase tracking-wider">
                      {event.type}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {event.event}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20">
                        <Calendar className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-gray-300">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20">
                        <MapPin className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-gray-300">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20">
                        <Users className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-gray-300">{event.attendees}</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn">
                    Register Now
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
