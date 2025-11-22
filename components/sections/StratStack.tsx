'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, DollarSign, Users, Network, ArrowRight } from 'lucide-react';

const stackItems = [
  {
    icon: GraduationCap,
    title: 'Education Programs',
    description: 'Structured bootcamps and workshops to build your startup foundation',
    gradient: 'from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop'
  },
  {
    icon: DollarSign,
    title: 'Capital Access',
    description: 'Connect with investors and funding opportunities at every stage',
    gradient: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=300&fit=crop'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Learn from experienced founders and industry experts',
    gradient: 'from-purple-600 to-purple-800',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop'
  },
  {
    icon: Network,
    title: 'Network and Partnerships',
    description: 'Access our ecosystem of partners, collaborators, and fellow founders',
    gradient: 'from-orange-600 to-orange-800',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=300&fit=crop'
  }
];

const journeySteps = [
  { label: 'Ideate', color: 'text-blue-400' },
  { label: 'Validate', color: 'text-emerald-400' },
  { label: 'Build', color: 'text-purple-400' },
  { label: 'Scale', color: 'text-orange-400' },
  { label: 'Fund', color: 'text-red-400' },
  { label: 'Repeat', color: 'text-pink-400' }
];

export default function StratStack() {
  return (
    <section id="stratstack" className="relative bg-black py-20">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            The <span className="gradient-text">StratSchool Stack</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We provide founders with everything they need to turn ideas into ventures.
          </p>
        </motion.div>

        <CardRevealGrid items={stackItems} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden py-12">
            <div className="flex items-center justify-center gap-6 animate-scroll-journey">
              {[...journeySteps, ...journeySteps].map((step, i) => (
                <div key={i} className="flex items-center gap-6 shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % journeySteps.length) * 0.1 }}
                    className={`text-2xl sm:text-3xl font-bold ${step.color} whitespace-nowrap`}
                  >
                    {step.label}
                  </motion.div>
                  {i < (journeySteps.length * 2 - 1) && (
                    <ArrowRight className="w-6 h-6 text-gray-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-journey {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-journey {
          animation: scroll-journey 30s linear infinite;
        }
        .animate-scroll-journey:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function CardRevealGrid({ items }: { items: typeof stackItems }) {
  const [revealedCards, setRevealedCards] = useState<boolean[]>(new Array(items.length).fill(false));
  const [hasStarted, setHasStarted] = useState(false);

  const handleHover = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Reveal cards one by one with delay
    items.forEach((_, index) => {
      setTimeout(() => {
        setRevealedCards(prev => {
          const newRevealed = [...prev];
          newRevealed[index] = true;
          return newRevealed;
        });
      }, index * 400); // 400ms delay between each card
    });
  };

  const allRevealed = revealedCards.every(r => r);

  return (
    <div 
      className="relative max-w-5xl mx-auto"
      onMouseEnter={handleHover}
    >
      {/* Hover Me Text */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          >
            <div className="text-center">
              <motion.h3
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl font-bold text-white/20"
              >
                HOVER ME
              </motion.h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {items.map((item, index) => (
          <RevealCard 
            key={item.title} 
            item={item} 
            index={index}
            isRevealed={revealedCards[index]}
          />
        ))}
      </div>
    </div>
  );
}

function RevealCard({ 
  item, 
  index,
  isRevealed
}: { 
  item: typeof stackItems[0]; 
  index: number;
  isRevealed: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={isRevealed ? { 
        rotateY: 0, 
        opacity: 1 
      } : { 
        rotateY: 90, 
        opacity: 0 
      }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className="group relative"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      <div className="relative h-full bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/20 p-8 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" 
          style={{ transition: 'transform 1.5s ease' }}
        />
        <div className="relative">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl mb-4`}>
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">
            {item.title}
          </h3>
          <p className="text-base text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <span className="text-lg font-bold text-white/80">{index + 1}</span>
        </div>
      </div>
    </motion.div>
  );
}
