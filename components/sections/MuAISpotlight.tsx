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
    gradient: 'from-slate-700 to-slate-900',
    color: 'slate'
  },
  {
    id: 'ledger',
    icon: TrendingUp,
    name: 'MU LEDGER',
    title: 'Finance Agent',
    description: 'Tracks expenses, forecasts revenue, analyzes unit economics, and helps founders understand their financial runway and investor metrics.',
    features: ['Expense tracking', 'Revenue forecasting', 'Unit economics analysis', 'Investor metrics'],
    gradient: 'from-amber-700 to-amber-900',
    color: 'amber'
  },
  {
    id: 'reach',
    icon: Megaphone,
    name: 'MU REACH',
    title: 'Marketing Agent',
    description: 'Generates campaign strategies, social media posts, content ideas, and marketing funnels — tailored for your startup stage.',
    features: ['Campaign strategies', 'Social media content', 'Marketing funnels', 'Growth tactics'],
    gradient: 'from-rose-700 to-rose-900',
    color: 'rose'
  },
  {
    id: 'hire',
    icon: Target,
    name: 'MU HIRE',
    title: 'HR Agent',
    description: 'Streamlines recruiting, creates job descriptions, and helps build your founding team with the right talent for your startup.',
    features: ['Job descriptions', 'Recruiting assistance', 'Team building', 'Talent matching'],
    gradient: 'from-red-800 to-red-950',
    color: 'red'
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
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onLeave();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="group relative cursor-pointer"
    >
      {/* Neon Glow */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${agent.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
      />

      {/* Card */}
      <div className="relative h-full p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/30">
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: isHovered ? ['0%', '200%'] : '0%',
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
          style={{
            transform: 'translateX(-100%) skewX(-20deg)',
          }}
        />

        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <motion.div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${agent.gradient} mb-6`}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
          <p className={`text-lg font-semibold bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent mb-4`}>
            {agent.title}
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {agent.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {agent.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + i * 0.05 }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.gradient}`} />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
