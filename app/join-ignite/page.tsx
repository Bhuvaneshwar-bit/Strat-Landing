'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Users, Clock, Target, Sparkles, Calendar, MapPin, Award, Rocket, BookOpen, Briefcase } from 'lucide-react';
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
    answer: 'No! We help you discover and validate problems worth solving in the first few weeks.'
  },
  {
    question: 'Can I join if I\'m working full-time?',
    answer: 'Absolutely! Sessions are on Saturdays (6 hours/week), designed for working professionals.'
  },
  {
    question: 'Is this only for students?',
    answer: 'Not at all. We welcome working professionals, retired executives, career-breakers, and students alike.'
  },
  {
    question: 'What if I\'m not from a tech background?',
    answer: 'Perfect! We teach you the tools and frameworks. No coding required unless you want to build yourself.'
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes, upon completion you\'ll receive a program completion certificate.'
  },
  {
    question: 'Can I register a real company during this program?',
    answer: 'Yes! In Week 11, we guide you through company registration, GST, and legal documentation.'
  },
];

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

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-3xl border border-white/10 hover:border-red-600/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
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
