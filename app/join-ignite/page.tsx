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

// Premium SpaceX-Style Rocket Animation
function RocketAnimation({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start']
  });

  // Map scroll progress to rocket assembly stages (week by week)
  const baseProgress = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const bodyProgress = useTransform(scrollYProgress, [0.18, 0.4], [0, 1]);
  const upperProgress = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);
  const detailsProgress = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  
  // Launch triggers at week 11 with smooth acceleration physics
  const launchTrigger = useTransform(scrollYProgress, [0.78, 0.82], [0, 1]);
  
  // Realistic flight physics - exponential acceleration curve
  const rocketY = useTransform(
    scrollYProgress, 
    [0.78, 0.82, 0.88, 0.95, 1], 
    [0, -150, -600, -1200, -2500]
  );
  
  // Subtle realistic tilt during ascent
  const rocketRotate = useTransform(
    scrollYProgress, 
    [0.78, 0.82, 0.9, 1], 
    [0, -1, 1, -0.5]
  );
  
  // Scale down as it flies away for depth
  const rocketScale = useTransform(
    scrollYProgress,
    [0.78, 0.88, 1],
    [1, 0.85, 0.4]
  );
  
  // Fade out at distance
  const rocketOpacity = useTransform(scrollYProgress, [0.92, 1], [1, 0]);
  
  // 3D transformations with smooth easing
  const baseY = useTransform(baseProgress, [0, 1], [400, 0]);
  const baseRotateX = useTransform(baseProgress, [0, 0.5, 1], [90, 45, 0]);
  
  const bodyY = useTransform(bodyProgress, [0, 1], [300, 0]);
  const bodyScale = useTransform(bodyProgress, [0, 0.5, 1], [0.5, 1.15, 1]);
  
  const upperY = useTransform(upperProgress, [0, 1], [200, 0]);
  const upperRotateZ = useTransform(upperProgress, [0, 0.5, 1], [-180, -90, 0]);

  return (
    <div className="fixed top-1/2 right-[5%] -translate-y-1/2 z-[1] pointer-events-none">
      <motion.div
        style={{ 
          y: rocketY,
          rotateZ: rocketRotate,
          scale: rocketScale,
          opacity: rocketOpacity
        }}
        className="relative"
      >
        {/* Atmospheric Lighting */}
        <motion.div
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.8, 0.95], [0.2, 0.4, 0]),
            scale: useTransform(launchTrigger, [0, 1], [1, 1.8])
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-gradient-radial from-orange-400/20 via-orange-500/10 to-transparent blur-[80px]" />
        </motion.div>

        {/* ULTRA-REALISTIC ENGINE BASE */}
        <motion.div
          style={{
            y: baseY,
            rotateX: baseRotateX,
            opacity: baseProgress
          }}
          className="relative w-[160px] mx-auto"
        >
          {/* Main Raptor Engine - Center */}
          <div className="relative w-full h-[100px] flex justify-center">
            <div className="relative w-[100px] h-full">
              {/* Engine Bell Housing */}
              <div 
                className="absolute inset-0 rounded-t-[50px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600"
                style={{
                  boxShadow: `
                    0 10px 40px rgba(0,0,0,0.8),
                    inset -12px 0 25px rgba(0,0,0,0.4),
                    inset 12px 0 25px rgba(255,255,255,0.4)
                  `
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-t-[50px]" />
              </div>
              
              {/* Engine Nozzle Opening */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full bg-gradient-radial from-zinc-700 via-zinc-900 to-black"
                style={{ 
                  boxShadow: 'inset 0 15px 35px rgba(0,0,0,0.95), 0 5px 20px rgba(0,0,0,0.9)' 
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-radial from-zinc-800 to-black"
                  style={{ boxShadow: 'inset 0 8px 20px rgba(0,0,0,1)' }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-radial from-red-900/60 to-black" />
              </div>
            </div>
          </div>

          {/* Side Booster Nozzles */}
          {[-1, 1].map((side) => (
            <div
              key={side}
              className="absolute top-2 w-[50px] h-[70px]"
              style={{ [side > 0 ? 'right' : 'left']: '5px' }}
            >
              <div 
                className="relative w-full h-full rounded-t-[30px] bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700"
                style={{
                  boxShadow: `0 8px 25px rgba(0,0,0,0.7), inset ${side * -8}px 0 20px rgba(0,0,0,0.3)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-t-[30px]" />
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] rounded-full bg-gradient-radial from-zinc-800 to-black"
                  style={{ boxShadow: 'inset 0 8px 20px rgba(0,0,0,0.95)' }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* MAIN CYLINDRICAL BODY */}
        <motion.div
          style={{
            y: bodyY,
            scale: bodyScale,
            opacity: bodyProgress
          }}
          className="relative w-[160px] mx-auto -mt-2"
        >
          <div className="relative w-full h-[350px]">
            {/* Stainless Steel Cylinder */}
            <div 
              className="absolute inset-0 rounded-[40px] overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #94a3b8 0%, #cbd5e1 20%, #e2e8f0 40%, #f1f5f9 50%, #e2e8f0 60%, #cbd5e1 80%, #94a3b8 100%)',
                boxShadow: `
                  0 25px 70px rgba(0,0,0,0.6),
                  inset -30px 0 50px rgba(0,0,0,0.2),
                  inset 30px 0 50px rgba(255,255,255,0.3)
                `
              }}
            >
              {/* Chrome Highlight Strip */}
              <div 
                className="absolute top-0 bottom-0 left-[35%] w-[30%] bg-gradient-to-r from-transparent via-white/70 to-transparent"
                style={{ mixBlendMode: 'overlay' }}
              />
              
              {/* Welded Seam Rings */}
              {[20, 40, 60, 80].map((pos) => (
                <div key={pos} className="absolute left-0 right-0 h-[2px]" style={{ top: `${pos}%` }}>
                  <div className="absolute inset-0 bg-slate-600/70" />
                  <div className="absolute inset-0 bg-slate-400/30 translate-y-[-1px]" />
                </div>
              ))}

              {/* Black Heat Shield Base */}
              <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-gradient-to-t from-zinc-900 via-zinc-800 to-transparent">
                <div className="absolute inset-3 grid grid-cols-5 gap-1 opacity-40">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="bg-black rounded-sm aspect-square" />
                  ))}
                </div>
              </div>

              {/* Red Accent Band */}
              <div 
                className="absolute top-[45%] left-0 right-0 h-12 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-90"
                style={{ 
                  boxShadow: '0 0 25px rgba(220,38,38,0.5)',
                  clipPath: 'polygon(8% 0%, 92% 0%, 88% 100%, 12% 100%)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent" />
              </div>

              {/* RCS Thrusters */}
              {[25, 45, 65].map((pos) => (
                <div
                  key={pos}
                  className="absolute right-4 w-2.5 h-2.5 bg-zinc-800 rounded-full"
                  style={{ 
                    top: `${pos}%`,
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.9)' 
                  }}
                />
              ))}
            </div>

            {/* Aerodynamic Fins */}
            {[-1, 1].map((side) => (
              <div
                key={side}
                className="absolute bottom-20 w-[70px] h-[110px]"
                style={{ 
                  [side > 0 ? 'right' : 'left']: '-18px',
                  clipPath: 'polygon(55% 0%, 100% 100%, 25% 100%)',
                  background: 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 50%, #64748b 100%)',
                  boxShadow: `0 10px 35px rgba(0,0,0,0.7), inset ${side * -6}px -6px 18px rgba(0,0,0,0.35)`,
                  transform: `rotateY(${side * 5}deg)`
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent"
                  style={{ clipPath: 'polygon(55% 0%, 100% 100%, 25% 100%)' }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* NOSE CONE */}
        <motion.div
          style={{
            y: upperY,
            rotateZ: upperRotateZ,
            opacity: upperProgress
          }}
          className="relative w-[160px] mx-auto -mt-4"
        >
          {/* Payload Fairing */}
          <div 
            className="relative w-full h-[90px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-t-[60px]"
            style={{
              boxShadow: `
                0 -8px 35px rgba(0,0,0,0.5),
                inset -18px 0 28px rgba(0,0,0,0.2),
                inset 18px 0 28px rgba(255,255,255,0.35)
              `
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-transparent to-transparent rounded-t-[60px]" />
            
            {/* Crew Window */}
            <motion.div
              style={{ opacity: detailsProgress }}
              className="absolute top-12 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full"
            >
              <div className="absolute inset-0 bg-zinc-900 rounded-full"
                style={{ boxShadow: '0 0 18px rgba(0,0,0,0.8), inset 0 0 15px rgba(0,0,0,0.9)' }}
              />
              <div 
                className="absolute inset-1 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-900 rounded-full"
                style={{ boxShadow: 'inset 0 3px 10px rgba(0,0,0,0.5)' }}
              >
                <div className="absolute top-1 left-1 w-3 h-3 bg-white/80 rounded-full blur-sm" />
              </div>
            </motion.div>
          </div>

          {/* Sharp Tip */}
          <div 
            className="relative w-full h-[100px]"
            style={{
              clipPath: 'polygon(50% 0%, 12% 100%, 88% 100%)',
              background: 'linear-gradient(180deg, #cbd5e1 0%, #94a3b8 50%, #64748b 100%)',
              boxShadow: `
                0 -8px 30px rgba(0,0,0,0.6),
                inset -12px 0 25px rgba(0,0,0,0.3),
                inset 12px 0 25px rgba(255,255,255,0.25)
              `
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/15"
              style={{ clipPath: 'polygon(50% 0%, 12% 100%, 88% 100%)' }}
            />
            
            {/* Nav Light */}
            <motion.div
              style={{ opacity: detailsProgress }}
              className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full"
              animate={{
                opacity: [1, 0.4, 1],
                boxShadow: [
                  '0 0 6px rgba(239,68,68,0.9)',
                  '0 0 15px rgba(239,68,68,1)',
                  '0 0 6px rgba(239,68,68,0.9)'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* PHOTOREALISTIC EXHAUST PLUME */}
        <motion.div
          style={{ 
            opacity: launchTrigger,
            scale: useTransform(launchTrigger, [0, 1], [0.8, 1])
          }}
          className="relative w-[160px] -mt-2 flex justify-center"
        >
          {/* Engine Nozzle Glow - At rocket base */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(254,249,195,0.95) 30%, rgba(251,191,36,0.8) 60%, transparent 100%)',
              filter: 'blur(8px)',
              boxShadow: '0 0 60px rgba(255,255,255,1), 0 0 100px rgba(254,243,199,0.9)',
              mixBlendMode: 'screen'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 0.25, repeat: Infinity }}
          />

          {/* Ultra-Hot Core - White-hot plasma shooting down */}
          <motion.div
            className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[90px] h-[450px]"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 5%, rgba(254,249,195,0.95) 15%, rgba(253,224,71,0.85) 30%, rgba(251,191,36,0.7) 50%, rgba(251,146,60,0.5) 75%, rgba(234,88,12,0.2) 92%, transparent 100%)',
              filter: 'blur(3px)',
              mixBlendMode: 'screen',
              willChange: 'transform',
              borderRadius: '45% 45% 50% 50% / 10% 10% 90% 90%'
            }}
            animate={{
              scaleY: [1, 1.08, 1.02, 1],
              scaleX: [1, 0.94, 0.98, 1],
            }}
            transition={{ 
              duration: 0.35, 
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1]
            }}
          />

          {/* Mach Diamond Shock Structures - Moving down plume */}
          <motion.div
            className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[110px] h-[35px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(186,230,253,0.3), rgba(125,211,252,0.5) 40%, transparent 70%)',
              filter: 'blur(1.5px)',
              borderRadius: '50%',
              border: '1.5px solid rgba(165, 243, 252, 0.4)',
              boxShadow: '0 0 12px rgba(165, 243, 252, 0.25), inset 0 0 8px rgba(186,230,253,0.35)'
            }}
            animate={{
              opacity: [0.6, 0.85, 0.6],
              scaleX: [1, 1.05, 1]
            }}
            transition={{ duration: 0.55, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[115px] h-[38px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(186,230,253,0.25), rgba(125,211,252,0.4) 40%, transparent 70%)',
              filter: 'blur(1.5px)',
              borderRadius: '50%',
              border: '1.5px solid rgba(165, 243, 252, 0.3)',
              boxShadow: '0 0 10px rgba(165, 243, 252, 0.2)'
            }}
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scaleX: [1, 1.06, 1]
            }}
            transition={{ duration: 0.55, repeat: Infinity, delay: 0.15 }}
          />

          {/* Primary Flame Envelope - Yellow-orange glow expanding downward */}
          <motion.div
            className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[140px] h-[520px]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 8%, transparent 20%, rgba(254,243,199,0.55) 28%, rgba(251,191,36,0.7) 45%, rgba(249,115,22,0.55) 68%, rgba(234,88,12,0.28) 88%, transparent 100%)',
              filter: 'blur(18px)',
              willChange: 'transform',
              borderRadius: '45% 45% 50% 50% / 8% 8% 92% 92%'
            }}
            animate={{
              scaleY: [1, 1.12, 1.04, 1],
              scaleX: [1, 0.91, 0.96, 1]
            }}
            transition={{ 
              duration: 0.42, 
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1]
            }}
          />

          {/* Outer Turbulent Boundary - Red glow at edges */}
          <motion.div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[170px] h-[540px]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 5%, transparent 35%, rgba(220,38,38,0.4) 55%, rgba(185,28,28,0.3) 75%, rgba(127,29,29,0.15) 92%, transparent 100%)',
              filter: 'blur(28px)',
              willChange: 'transform',
              borderRadius: '45% 45% 50% 50% / 5% 5% 95% 95%'
            }}
            animate={{
              scaleY: [1, 1.15, 1.06, 1],
              scaleX: [1, 0.88, 0.94, 1]
            }}
            transition={{ 
              duration: 0.48, 
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1]
            }}
          />

          {/* Exhaust Particles - Shooting downward */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`exhaust-${i}`}
              className="absolute top-[25px] left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: '5px',
                height: '5px',
                background: 'radial-gradient(circle, rgba(254,249,195,0.95) 0%, rgba(254,249,195,0.6) 50%, transparent 100%)',
                filter: 'blur(1.5px)',
                willChange: 'transform',
                boxShadow: '0 0 8px rgba(254,249,195,0.7)'
              }}
              animate={{
                y: [0, 450],
                x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 80],
                opacity: [0.95, 0.7, 0],
                scale: [1, 0.6, 0.3]
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          ))}

          {/* Launch Pad Illumination - Orange glow below rocket */}
          <motion.div
            className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[320px] h-[180px]"
            style={{
              background: 'radial-gradient(ellipse 100% 60% at center top, rgba(251,191,36,0.45) 0%, rgba(249,115,22,0.3) 35%, rgba(234,88,12,0.15) 65%, transparent 100%)',
              filter: 'blur(45px)',
              willChange: 'opacity'
            }}
            animate={{
              opacity: [0.7, 0.95, 0.75, 0.9, 0.7],
              scale: [1, 1.1, 1.03, 1.08, 1]
            }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />

          {/* Exhaust Smoke Trail - Expanding downward */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`smoke-${i}`}
              className="absolute top-[40px] left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: '70px',
                height: '70px',
                background: 'radial-gradient(circle, rgba(156,163,175,0.35) 0%, rgba(107,114,128,0.25) 40%, transparent 70%)',
                filter: 'blur(30px)',
                willChange: 'transform'
              }}
              animate={{
                y: [0, 320],
                x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 130],
                opacity: [0.5, 0.35, 0],
                scale: [1, 2.4, 3.0]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          ))}

          {/* Atmospheric Heat Distortion - Downward shimmer */}
          <motion.div
            className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[170px] h-[500px]"
            style={{
              background: 'linear-gradient(180deg, rgba(251,191,36,0.08) 0%, rgba(251,146,60,0.12) 35%, rgba(251,191,36,0.08) 70%, transparent 100%)',
              filter: 'blur(20px)',
              mixBlendMode: 'soft-light',
              willChange: 'transform',
              borderRadius: '40% 40% 50% 50%'
            }}
            animate={{
              scaleX: [1, 1.12, 1.05, 1],
              skewX: [0, 1.5, -1, 0]
            }}
            transition={{ duration: 0.65, repeat: Infinity }}
          />
        </motion.div>

        {/* Assembly Glow Pulses - Subtle Professional Effect */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.85], [0.4, 0]) }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Assembly Zone Highlights */}
          {[baseProgress, bodyProgress, upperProgress].map((progress, i) => (
            <motion.div
              key={i}
              style={{ opacity: progress }}
              className="absolute left-1/2 -translate-x-1/2 w-48 h-48 rounded-full"
              initial={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-cyan-500/10 to-transparent rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7
                }}
                style={{
                  filter: 'blur(30px)',
                  top: `${20 + i * 30}%`
                }}
              />
            </motion.div>
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
    <section ref={ref} className="relative py-32 overflow-visible">
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
