'use client';

import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Brain, TrendingUp, Users, Megaphone, Sparkles, ArrowRight, CheckCircle2, Rocket, Zap } from 'lucide-react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background - Red/Black Theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Parallax effect with mouse */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
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
          {/* Badge with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateX: 5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-red-600/10 to-red-900/10 border border-red-600/20 rounded-full mb-8 backdrop-blur-xl shadow-lg shadow-red-500/10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">
              THE FIRST VENTURE FROM STRATSCHOOL
            </span>
          </motion.div>

          {/* Main Heading with 3D depth */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-space-grotesk mb-6 leading-tight"
            style={{
              textShadow: '0 0 80px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3)',
            }}
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

          {/* CTA Buttons with 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#beta"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl text-white font-bold text-lg shadow-2xl shadow-red-500/50 transition-all duration-500 flex items-center gap-3"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Join Beta Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a
              href="#modules"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Explore Modules
            </motion.a>
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const rotateX = useSpring((mousePosition.y - 0.5) * 10, { stiffness: 300, damping: 30 });
  const rotateY = useSpring((mousePosition.x - 0.5) * -10, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={onToggle}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
      style={{ perspective: '1000px' }}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${module.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />

      {/* Card with 3D transform */}
      <motion.div
        className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-red-500/20"
        animate={{
          height: isExpanded ? 'auto' : '280px'
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="p-8" style={{ transform: 'translateZ(20px)' }}>
          {/* Icon with 3D depth */}
          <motion.div 
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${module.gradient} mb-6 shadow-lg`}
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            style={{ transform: 'translateZ(40px)' }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

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
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 bg-gradient-to-r ${module.gradient} bg-clip-text`} style={{ color: 'transparent' }} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Expand Indicator with animation */}
          <motion.div
            className="mt-4 text-center text-sm text-gray-500"
            animate={{ rotate: isExpanded ? 180 : 0 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
            >
              <ArrowRight className="w-5 h-5 mx-auto rotate-90" />
            </motion.div>
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            className="p-16 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Rocket className="w-16 h-16 text-red-400 mx-auto mb-6" />
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6 relative">
              Join the <span className="gradient-text">Beta</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed relative">
              μ AI is currently in private beta. Join the waitlist to be among the first to experience the future of AI-powered entrepreneurship.
            </p>
            <motion.a
              href="https://www.stratschool.org/mu-ai-suite"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl text-white font-bold text-lg shadow-2xl shadow-red-500/50 transition-all duration-500 relative"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Zap className="w-6 h-6" />
              Join Beta Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function OriginSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-8"
            style={{
              textShadow: '0 0 60px rgba(239, 68, 68, 0.3)',
            }}
          >
            Built at <span className="gradient-text">StratSchool Venture Studio</span>
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              μ AI was born inside StratSchool's venture studio as part of our mission to build intelligent tools for founders.
            </motion.p>
            
            <motion.div
              className="p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                It reflects our philosophy of combining{' '}
                <motion.span 
                  className="text-white font-semibold"
                  whileHover={{ scale: 1.1, display: 'inline-block' }}
                >
                  innovation
                </motion.span>
                ,{' '}
                <motion.span 
                  className="text-red-400 font-semibold"
                  whileHover={{ scale: 1.1, display: 'inline-block' }}
                >
                  technology
                </motion.span>
                , and{' '}
                <motion.span 
                  className="text-red-500 font-semibold"
                  whileHover={{ scale: 1.1, display: 'inline-block' }}
                >
                  real founder insight
                </motion.span>{' '}
                to create tools that actually solve problems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-600/30 rounded-xl text-white hover:border-red-500/50 transition-all group backdrop-blur-xl"
                >
                  <span>Learn more about StratSchool</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
