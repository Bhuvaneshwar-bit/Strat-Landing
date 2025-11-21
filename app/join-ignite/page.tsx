'use client';

import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Users, Clock, Target, Sparkles, Calendar, MapPin, Award, Rocket, BookOpen, Briefcase, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

const weeklyTimeline = [
  {
    week: 'Week 1',
    title: 'Discover a Problem Worth Solving',
    description: 'Explore your interests, scan real-world pain points, and shortlist high-potential problems.',
    subtitle: '"Not every problem deserves a startup. Let\'s find one that does."'
  },
  {
    week: 'Week 2',
    title: 'Validate Your Problem with Real People',
    description: 'Interview target users and confirm that the problem truly exists.',
    subtitle: '"Assumptions are dangerous. Talk to real users."'
  },
  {
    week: 'Week 3',
    title: 'Map the Market Landscape',
    description: 'Analyze existing solutions, spot gaps, and size the opportunity.',
    subtitle: '"Don\'t build blind. Know your competitors and your edge."'
  },
  {
    week: 'Week 4',
    title: 'Sharpen Your Solution',
    description: 'Draft your initial solution idea and refine it based on user and market insights.',
    subtitle: '"Craft the right solution, not just the easiest one."'
  },
  {
    week: 'Week 5',
    title: 'Design Your Business Model Canvas',
    description: 'Identify your target customer, pricing model, revenue logic, and value proposition.',
    subtitle: '"An idea is fragile. A business model makes it real."'
  },
  {
    week: 'Week 6',
    title: 'Blueprint Your MVP',
    description: 'List must-have features, user flow, and tools needed for your first version.',
    subtitle: '"What\'s the smallest thing you can build to prove value?"'
  },
  {
    week: 'Week 7',
    title: 'Build your Prototype',
    description: 'Build your first working prototype.',
    subtitle: '"Time to build. Fast. Lean."'
  },
  {
    week: 'Week 8',
    title: 'Launch Your Prototype to the World',
    description: 'Share your prototype, gather early responses, and document feedback.',
    subtitle: '"Your product belongs in front of users, not just slides."'
  },
  {
    week: 'Week 9',
    title: 'Analyze & Iterate',
    description: 'Identify what worked and what didn\'t. Refine your prototype and messaging.',
    subtitle: '"First versions are never perfect. That\'s the point."'
  },
  {
    week: 'Week 10',
    title: 'Position and Polish',
    description: 'Craft compelling messaging, a pitch deck, and your brand story.',
    subtitle: '"The way you position your idea matters as much as the idea itself."'
  },
  {
    week: 'Week 11',
    title: 'Launch Your Company Officially',
    description: 'Register your company, get GST or UDYAM certificates, and set up basic legal documents.',
    subtitle: '"Every startup needs a stable foundation."'
  },
  {
    week: 'Week 12',
    title: 'Pitch Day + First Traction Steps',
    description: 'Pitch your MVP, get live mentor feedback, and plan next steps for customers, grants or incubation.',
    subtitle: '"It\'s time to show the world what you\'ve built."'
  },
];

const benefits = [
  { icon: BookOpen, title: '12 High-impact in-person Workshops' },
  { icon: Award, title: 'Exclusive Founder Toolkit (Worth ₹10,000+)' },
  { icon: Users, title: 'Lifetime Access to Vibrant Founder Community i-ACE' },
  { icon: Briefcase, title: 'IGNITE Alumni Job & Intern Board' },
  { icon: Rocket, title: 'Your Legally Registered Startup' },
  { icon: Target, title: 'Government Grants & Incubator Support' },
  { icon: Sparkles, title: 'Pitch Your Startup Live on Demo Day' },
  { icon: CheckCircle2, title: 'Bonus Business Mastermind + LinkedIn Growth Kit' },
];

const targetAudience = [
  {
    title: 'Working Professionals',
    points: [
      'Build a startup without quitting your job',
      'Launch your side hustle the smart way',
      'Join a network beyond your 9–5'
    ]
  },
  {
    title: 'Students & Freshers',
    points: [
      'Go beyond projects & build a real startup',
      'Stand out from your batchmates',
      'Get incubator-ready before you graduate'
    ]
  },
  {
    title: 'Retired Executives',
    points: [
      'Channel your wisdom into innovation',
      'Learn startup tools without tech overwhelm',
      'Leave a legacy, not just a memory'
    ]
  },
  {
    title: 'Women on Career Breaks',
    points: [
      'Reclaim your ambition on your own terms',
      'Turn your passion or idea into a real venture',
      'Build confidence, independence, and community'
    ]
  },
];

const faqs = [
  {
    question: 'Do I need a startup idea to join?',
    answer: 'Nope. Most participants come with just curiosity or a problem they care about. We help you find, validate, and shape your idea in Week 1 and 2.'
  },
  {
    question: 'Can I join if I\'m working full-time?',
    answer: 'Absolutely! Sessions are on Saturdays (6 hours/week), designed for working professionals. Build your startup without quitting your job.'
  },
  {
    question: 'Is this only for students?',
    answer: 'Not at all. We welcome working professionals, retired executives, career-breakers, and students alike. IGNITE is built for first-time founders from all walks of life.'
  },
  {
    question: 'What if I\'m not from a tech background?',
    answer: 'Perfect! We teach you the tools and frameworks you need. No coding required unless you want to build it yourself. Many successful founders aren\'t technical.'
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes! Upon completion, you\'ll receive a program completion certificate from StratSchool.'
  },
  {
    question: 'Can I register a real company during this program?',
    answer: 'Absolutely! In Week 11, we guide you through company registration, GST certification, UDYAM registration, and setting up basic legal documents. You\'ll walk away with a legally registered startup.'
  },
  {
    question: 'Will I get personal feedback on my idea or pitch?',
    answer: 'Yes! You\'ll get regular feedback from mentors who\'ve built real companies. Plus, on Demo Day (Week 12), you\'ll pitch live and receive detailed feedback from experienced founders and investors.'
  },
  {
    question: 'What happens after the 12 weeks?',
    answer: 'You\'ll have lifetime access to the i-ACE Founder Community, access to the IGNITE Alumni Job & Intern Board, and continued support for government grants, incubator applications, and traction-building strategies.'
  },
  {
    question: 'Can I work with a co-founder or a friend?',
    answer: 'Definitely! Many participants team up during the program. You can also join with a friend or find a co-founder within the cohort.'
  },
  {
    question: 'What kind of startups is this for?',
    answer: 'IGNITE works for any startup idea—SaaS, D2C, social impact, hardware, or service-based. The frameworks we teach apply to all types of ventures. Whether you\'re building an app, a product, or a service, you\'ll find your path here.'
  },
];

// Rocket Animation Component
function RocketAnimation({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start']
  });

  // Map scroll progress to rocket assembly stages (0 to 1)
  const baseOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const bodyOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const noseOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const windowOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  
  // Rocket position - stays fixed until launch
  const rocketY = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, -1000]);
  const rocketScale = useTransform(scrollYProgress, [0.9, 1], [1, 1.5]);
  
  // Flame effects for launch
  const flameOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const flameScale = useTransform(scrollYProgress, [0.9, 1], [0.5, 2]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        style={{ y: rocketY, scale: rocketScale }}
        className="fixed top-1/2 right-10 md:right-20 lg:right-32 -translate-y-1/2 z-0"
      >
        <svg
          width="200"
          height="300"
          viewBox="0 0 200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Rocket Base/Engines (Week 1-3) */}
          <motion.g style={{ opacity: baseOpacity }}>
            {/* Left Engine */}
            <path
              d="M60 280 L70 250 L80 280 Z"
              fill="url(#engineGradient)"
              stroke="#DC2626"
              strokeWidth="2"
            />
            {/* Right Engine */}
            <path
              d="M120 280 L130 250 L140 280 Z"
              fill="url(#engineGradient)"
              stroke="#DC2626"
              strokeWidth="2"
            />
            {/* Center Engine */}
            <path
              d="M90 290 L100 250 L110 290 Z"
              fill="url(#engineGradient)"
              stroke="#DC2626"
              strokeWidth="2"
            />
            {/* Base Platform */}
            <rect
              x="65"
              y="240"
              width="70"
              height="15"
              fill="#B91C1C"
              stroke="#DC2626"
              strokeWidth="2"
              rx="3"
            />
          </motion.g>

          {/* Rocket Body (Week 4-8) */}
          <motion.g style={{ opacity: bodyOpacity }}>
            {/* Main Body */}
            <rect
              x="75"
              y="120"
              width="50"
              height="130"
              fill="url(#bodyGradient)"
              stroke="#DC2626"
              strokeWidth="2"
              rx="5"
            />
            {/* Body Details */}
            <line x1="75" y1="160" x2="125" y2="160" stroke="#DC2626" strokeWidth="1" opacity="0.5" />
            <line x1="75" y1="200" x2="125" y2="200" stroke="#DC2626" strokeWidth="1" opacity="0.5" />
            
            {/* Left Fin */}
            <path
              d="M75 220 L50 240 L75 240 Z"
              fill="#B91C1C"
              stroke="#DC2626"
              strokeWidth="2"
            />
            {/* Right Fin */}
            <path
              d="M125 220 L150 240 L125 240 Z"
              fill="#B91C1C"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </motion.g>

          {/* Nose Cone (Week 9-11) */}
          <motion.g style={{ opacity: noseOpacity }}>
            <path
              d="M75 120 L100 60 L125 120 Z"
              fill="url(#noseGradient)"
              stroke="#DC2626"
              strokeWidth="2"
            />
            <circle cx="100" cy="100" r="3" fill="#EF4444" />
          </motion.g>

          {/* Window (Week 11-12) */}
          <motion.g style={{ opacity: windowOpacity }}>
            <circle
              cx="100"
              cy="150"
              r="15"
              fill="#1F2937"
              stroke="#DC2626"
              strokeWidth="2"
            />
            <circle cx="100" cy="150" r="12" fill="#374151" opacity="0.6" />
            <circle cx="105" cy="145" r="3" fill="#60A5FA" opacity="0.8" />
          </motion.g>

          {/* Launch Flames (Week 12) */}
          <motion.g style={{ opacity: flameOpacity, scale: flameScale, originX: 0.5, originY: 1 }}>
            {/* Center Flame */}
            <path
              d="M95 290 Q100 310 105 290 Q100 305 95 290"
              fill="url(#flameGradient)"
              opacity="0.9"
            >
              <animate
                attributeName="d"
                values="M95 290 Q100 310 105 290 Q100 305 95 290;M95 290 Q100 320 105 290 Q100 315 95 290;M95 290 Q100 310 105 290 Q100 305 95 290"
                dur="0.3s"
                repeatCount="indefinite"
              />
            </path>
            {/* Left Flame */}
            <path
              d="M65 280 Q70 295 75 280 Q70 290 65 280"
              fill="url(#flameGradient)"
              opacity="0.8"
            >
              <animate
                attributeName="d"
                values="M65 280 Q70 295 75 280 Q70 290 65 280;M65 280 Q70 305 75 280 Q70 300 65 280;M65 280 Q70 295 75 280 Q70 290 65 280"
                dur="0.25s"
                repeatCount="indefinite"
              />
            </path>
            {/* Right Flame */}
            <path
              d="M125 280 Q130 295 135 280 Q130 290 125 280"
              fill="url(#flameGradient)"
              opacity="0.8"
            >
              <animate
                attributeName="d"
                values="M125 280 Q130 295 135 280 Q130 290 125 280;M125 280 Q130 305 135 280 Q130 300 125 280;M125 280 Q130 295 135 280 Q130 290 125 280"
                dur="0.28s"
                repeatCount="indefinite"
              />
            </path>
          </motion.g>

          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="noseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="engineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#991B1B" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </linearGradient>
            <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
          </defs>
        </svg>

        {/* Smoke/Particles on Launch */}
        <motion.div
          style={{ opacity: flameOpacity }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-red-500/30 rounded-full blur-xl"
              animate={{
                y: [0, -60, -120],
                x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
                opacity: [0.6, 0.3, 0],
                scale: [1, 1.5, 2]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut'
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function JoinIgnitePage() {
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
                <Rocket className="w-4 h-4" />
                IGNITE PROGRAM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space-grotesk mb-6 leading-tight"
            >
              Build Your First Startup<br />
              <span className="gradient-text">in 3 Months</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto"
            >
              Without quitting your job or while pursuing your degree.<br />
              <span className="text-gray-400">Even without a big idea.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <a
                href="https://rzp.io/rzp/stratschool-ignite"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Apply Now - Limited Seats
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/#programs"
                className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore All Programs
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Calendar, label: 'Duration', value: '12 Weeks' },
                { icon: Clock, label: 'Sessions', value: 'Saturdays | 6 hrs/week' },
                { icon: Users, label: 'Batch Size', value: 'Only 30 seats' },
                { icon: Target, label: 'Program Fee', value: '₹19,999/-' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-red-600/30 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-red-400 mb-3 mx-auto" />
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Timeline Section */}
      <TimelineSection timeline={weeklyTimeline} />

      {/* Target Audience Section */}
      <TargetAudienceSection audience={targetAudience} />

      {/* Benefits Section */}
      <BenefitsSection benefits={benefits} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}

function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Rocket,
      title: 'Build your MVP',
      description: 'Start from scratch. Launch by Week 12'
    },
    {
      icon: Users,
      title: 'Real founder feedback',
      description: 'Validate with mentors who\'ve built real companies'
    },
    {
      icon: Target,
      title: 'Learn by doing',
      description: '100% action-based. No lectures or theory overload'
    },
    {
      icon: Sparkles,
      title: 'Join a founder circle',
      description: 'Be part of India\'s boldest early-stage cohort'
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Not Just Another Course.<br />
            A <span className="gradient-text">Real Startup Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full glass-effect p-8 rounded-3xl border border-white/10 hover:border-red-600/30 transition-all duration-300">
                <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ timeline }: { timeline: typeof weeklyTimeline }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Rocket Animation Background */}
      <RocketAnimation containerRef={ref} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Your <span className="gradient-text">12-Week Startup Sprint</span><br />
            Simplified
          </h2>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-effect p-8 rounded-3xl border border-white/10 hover:border-red-600/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold">{item.week.replace('Week ', '')}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm text-red-400 font-semibold mb-2">{item.week}</p>
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 italic mb-3">{item.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
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

function TargetAudienceSection({ audience }: { audience: typeof targetAudience }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Built for <span className="gradient-text">First-Time Founders</span><br />
            from All Walks of Life
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-effect p-8 rounded-3xl border border-white/10 hover:border-red-600/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">{item.title}</h3>
                <ul className="space-y-4">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

function BenefitsSection({ benefits }: { benefits: Benefit[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Everything You'll <span className="gradient-text">Walk Away With</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-effect p-6 rounded-2xl border border-white/10 hover:border-red-600/30 transition-all duration-300 hover:scale-105">
                <benefit.icon className="w-10 h-10 text-red-400 mb-4" />
                <p className="text-white font-semibold">{benefit.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQ {
  question: string;
  answer: string;
}

function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">Frequently Asked</span> Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div 
                className={`glass-effect rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  openIndex === index 
                    ? 'border-red-600/50 bg-white/10' 
                    : 'border-white/10 hover:border-red-600/30'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6 sm:p-8 flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${
                      openIndex === index ? 'text-red-400' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent mb-6" />
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-6">
            This Is Your Sign to<br />
            <span className="gradient-text">Stop Dreaming. Start Building.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12">
            Join IGNITE and launch your startup in just 12 weeks.
          </p>

          <motion.a
            href="https://rzp.io/rzp/stratschool-ignite"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 hover:scale-110"
          >
            Join Now - Limited Seats
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
