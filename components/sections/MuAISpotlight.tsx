'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, TrendingUp, Code, Megaphone, Sparkles, ArrowRight, Zap, Target, Rocket } from 'lucide-react';
import Link from 'next/link';

const agents = [
  {
    id: 'ignis',
    icon: Brain,
    name: 'IGNIS',
    title: 'AI Co-Founder',
    description: 'Your thinking partner that helps you validate problems, structure your business model, and plan your go-to-market roadmap.',
    features: ['Strategic planning', 'Business model validation', 'Market analysis', 'Go-to-market roadmap'],
    iconBg: 'bg-slate-800',
    iconColor: 'text-slate-200'
  },
  {
    id: 'ledger',
    icon: TrendingUp,
    name: 'MU LEDGER',
    title: 'Finance Agent',
    description: 'Tracks expenses, forecasts revenue, analyzes unit economics, and helps founders understand their financial runway and investor metrics.',
    features: ['Expense tracking', 'Revenue forecasting', 'Unit economics analysis', 'Investor metrics'],
    iconBg: 'bg-orange-600',
    iconColor: 'text-white'
  },
  {
    id: 'reach',
    icon: Megaphone,
    name: 'MU REACH',
    title: 'Marketing Agent',
    description: 'Generates campaign strategies, social media posts, content ideas, and marketing funnels — tailored for your startup stage.',
    features: ['Campaign strategies', 'Social media content', 'Marketing funnels', 'Growth tactics'],
    iconBg: 'bg-rose-700',
    iconColor: 'text-white'
  },
  {
    id: 'hire',
    icon: Target,
    name: 'MU HIRE',
    title: 'HR Agent',
    description: 'Streamlines recruiting, creates job descriptions, and helps build your founding team with the right talent for your startup.',
    features: ['Job descriptions', 'Recruiting assistance', 'Team building', 'Talent matching'],
    iconBg: 'bg-red-800',
    iconColor: 'text-white'
  },
];

export default function MuAISpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-red-600/10 border border-red-600/20 rounded-full mb-8 backdrop-blur-xl"
          >
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">
              STARTUP SPOTLIGHT
            </span>
            <Zap className="w-5 h-5 text-red-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold font-space-grotesk mb-6 leading-tight"
          >
            Meet <span className="gradient-text">μ AI</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-gray-400">The AI Co-Founder Suite</span>
          </motion.h2>

          {/* Storytelling Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Building a startup is lonely. You wear every hat — CFO, CTO, CMO, and more. 
              <span className="text-red-400 font-semibold"> What if you didn't have to?</span>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">μ AI Suite</span> is your intelligent business companion — an AI-powered team designed for early-stage founders. 
              From forecasting financials to deploying technology, from crafting marketing strategies to making critical decisions, 
              <span className="text-red-400"> μ AI manages it all like never before.</span>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              It's not just AI. It's AI with <span className="text-white font-semibold">direction</span>, 
              <span className="text-gray-300 font-semibold"> context</span>, and 
              <span className="text-red-400 font-semibold"> purpose</span> — built by founders, for founders.
            </p>
          </motion.div>
        </motion.div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {agents.map((agent, index) => (
            <AgentCard 
              key={agent.id} 
              agent={agent} 
              index={index} 
              isInView={isInView}
              isHovered={hoveredAgent === agent.id}
              onHover={() => setHoveredAgent(agent.id)}
              onLeave={() => setHoveredAgent(null)}
            />
          ))}
        </div>

        {/* Why It Matters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10">
            <Target className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">Why μ AI Suite Matters</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Early-stage founders often get stuck between <span className="text-white font-semibold">ideas</span> and 
              <span className="text-red-400 font-semibold"> execution</span>. 
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              μ AI Suite closes that gap — combining StratSchool's startup expertise with intelligent automation 
              that supports founders across every domain. At every step of your startup journey, 
              <span className="text-red-400 font-semibold"> μ AI is here.</span>
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <Link
            href="https://www.stratschool.org/mu-ai-suite"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 hover:scale-105 flex items-center gap-3"
          >
            <span className="relative flex items-center gap-3">
              <Rocket className="w-6 h-6" />
              Learn More About μ AI
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AgentCard({ 
  agent, 
  index, 
  isInView,
  isHovered,
  onHover,
  onLeave
}: { 
  agent: typeof agents[0]; 
  index: number; 
  isInView: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const Icon = agent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className="group relative cursor-pointer"
    >
      {/* Card with Fey-inspired hover effect */}
      <motion.div 
        className="relative h-full p-8 bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-zinc-800/50 overflow-hidden transition-all duration-300"
        animate={{
          boxShadow: isHovered 
            ? '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            : '0 4px 12px -4px rgba(0, 0, 0, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Content */}
        <div className="relative">
          {/* Icon - Fey style */}
          <motion.div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${agent.iconBg} mb-6 shadow-lg`}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className={`w-8 h-8 ${agent.iconColor}`} strokeWidth={2} />
          </motion.div>

          <h3 className="text-2xl font-bold mb-2 text-white">{agent.name}</h3>
          <p className="text-base font-medium text-gray-400 mb-4">
            {agent.title}
          </p>
          <p className="text-gray-500 mb-6 leading-relaxed text-[15px]">
            {agent.description}
          </p>

          {/* Features */}
          <ul className="space-y-2.5">
            {agent.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + i * 0.05 }}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <div className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Subtle hover gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
