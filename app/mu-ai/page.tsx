'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, TrendingUp, Users, Megaphone, Sparkles, ArrowRight, Play, CheckCircle2, Rocket } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

const modules = [
  {
    id: 'ledger',
    icon: TrendingUp,
    name: 'Mu Ledger',
    title: 'AI CFO',
    description: 'Tracks expenses, forecasts revenue, analyzes unit economics, and helps founders understand their financial runway and investor metrics.',
    gradient: 'from-amber-500 to-orange-600',
    features: [
      'Expense tracking & categorization',
      'Revenue forecasting & projections',
      'Unit economics analysis',
      'Investor metrics dashboard',
      'Cash runway calculator',
      'Financial health scoring'
    ]
  },
  {
    id: 'hire',
    icon: Users,
    name: 'Mu Hire',
    title: 'AI HR',
    description: 'Helps define roles, craft job descriptions, structure teams, and design hiring or onboarding workflows.',
    gradient: 'from-rose-500 to-pink-600',
    features: [
      'Role definition templates',
      'Job description generator',
      'Team structure planning',
      'Hiring workflow automation',
      'Onboarding process design',
      'Candidate evaluation frameworks'
    ]
  },
  {
    id: 'reach',
    icon: Megaphone,
    name: 'Mu Reach',
    title: 'AI CMO',
    description: 'Generates campaign strategies, social media posts, content ideas, and marketing funnels — tailored for your startup stage.',
    gradient: 'from-purple-500 to-indigo-600',
    features: [
      'Campaign strategy generation',
      'Social media content calendar',
      'Marketing funnel builder',
      'Content ideation engine',
      'Growth tactics library',
      'Performance analytics'
    ]
  },
  {
    id: 'ignis',
    icon: Brain,
    name: 'Ignis',
    title: 'AI Co-Founder',
    description: 'Your thinking partner that helps you validate problems, structure your business model, and plan your go-to-market roadmap.',
    gradient: 'from-blue-500 to-cyan-600',
    features: [
      'Problem validation framework',
      'Business model canvas builder',
      'Go-to-market strategy planner',
      'Competitive analysis tools',
      'Strategic decision support',
      'Market research assistant'
    ]
  },
];

export default function MuAIPage() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection isInView={isHeroInView} heroRef={heroRef} />

      {/* Core Modules Section */}
      <ModulesSection />

      {/* Beta Access Section */}
      <BetaAccessSection />

      {/* Origin Section */}
      <OriginSection />

      <Footer />
    </main>
  );
}

function HeroSection({ isInView, heroRef }: { isInView: boolean; heroRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600/10 border border-blue-600/20 rounded-full mb-8 backdrop-blur-xl"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">
              THE FIRST VENTURE FROM STRATSCHOOL
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-space-grotesk mb-6 leading-tight"
          >
            <span className="gradient-text">μ AI</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Your AI Co-Founder
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            An AI Business Suite that empowers founders with automated intelligence across finance, marketing, and operations.
          </motion.p>

          {/* Video Placeholder / Visual Cue */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-5xl mx-auto mb-12"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-950/50 to-purple-950/50 backdrop-blur-xl">
              {/* Placeholder for Video/Dashboard */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-blue-400"
                >
                  <Play className="w-24 h-24" />
                </motion.div>
              </div>
              {/* Animated Grid Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }} />
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#beta"
              className="group px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105 flex items-center gap-3"
            >
              Join Beta Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#modules"
              className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
            >
              Explore Modules
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <section id="modules" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-space-grotesk mb-6">
            Built to <span className="gradient-text">Empower Founders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Four intelligent modules working together to accelerate your startup journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              index={index}
              isInView={isInView}
              isExpanded={expandedModule === module.id}
              onToggle={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({
  module,
  index,
  isInView,
  isExpanded,
  onToggle
}: {
  module: typeof modules[0];
  index: number;
  isInView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = module.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={onToggle}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${module.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

      {/* Card */}
      <motion.div
        className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/30"
        animate={{
          height: isExpanded ? 'auto' : '280px'
        }}
      >
        <div className="p-8">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${module.gradient} mb-6`}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Header */}
          <h3 className="text-3xl font-bold mb-2">{module.name}</h3>
          <p className={`text-lg font-semibold bg-gradient-to-r ${module.gradient} bg-clip-text text-transparent mb-4`}>
            {module.title}
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {module.description}
          </p>

          {/* Expanded Features */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold text-gray-300 mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 text-transparent bg-gradient-to-r ${module.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Expand Indicator */}
          <motion.div
            className="mt-4 text-center text-sm text-gray-500"
            animate={{ rotate: isExpanded ? 180 : 0 }}
          >
            <ArrowRight className="w-5 h-5 mx-auto rotate-90" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BetaAccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="beta" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="p-16 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10">
            <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              Join the <span className="gradient-text">Beta</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              μ AI is currently in private beta. Join the waitlist to be among the first to experience the future of AI-powered entrepreneurship.
            </p>
            <a
              href="https://www.stratschool.org/mu-ai-suite"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              Join Beta Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OriginSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-8">
            Built at <span className="gradient-text">StratSchool Venture Studio</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              μ AI was born inside StratSchool's venture studio as part of our mission to build intelligent tools for founders.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              It reflects our philosophy of combining <span className="text-white font-semibold">innovation</span>, 
              <span className="text-red-400 font-semibold"> technology</span>, and 
              <span className="text-blue-400 font-semibold"> real founder insight</span> to create tools that actually solve problems.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <span>Learn more about StratSchool</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
