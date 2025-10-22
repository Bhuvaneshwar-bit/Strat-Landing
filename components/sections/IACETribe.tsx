'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, TrendingUp, Handshake, Award } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Continued Mentorship',
    description: 'Access to industry leaders and StratSchool faculty for ongoing guidance',
  },
  {
    icon: TrendingUp,
    title: 'Alumni Network',
    description: 'A vibrant community for collaboration, support, and partnerships',
  },
  {
    icon: Handshake,
    title: 'Investor Connects',
    description: 'Exclusive access to investors and demo day opportunities',
  },
  {
    icon: Award,
    title: 'Lifetime Benefits',
    description: 'Resources, events, and opportunities that extend beyond graduation',
  },
];

export default function IACETribe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6"
          >
            <span className="text-red-400 font-semibold text-sm">EXCLUSIVE COMMUNITY</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Beyond the Program:{' '}
            <span className="gradient-text">Join the i-ACE Tribe</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our commitment to your success extends far beyond graduation. The Indian Association of Changemakers & Entrepreneurs (i-ACE) Tribe is our exclusive alumni community.
          </p>

          <p className="text-lg text-gray-500 mt-4">
            <span className="font-semibold text-red-400">i-ACE:</span> Incubate • Accelerate • Connect • Empower
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-xl">
                      <Icon className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white font-space-grotesk">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats/Highlight Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 bg-gradient-to-r from-red-600/10 to-red-500/10 backdrop-blur-sm border border-red-600/20 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">Alumni Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">₹50Cr+</div>
              <div className="text-gray-400">Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-400">Startups Launched</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
