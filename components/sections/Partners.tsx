'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import LogoLoop from '@/components/animations/LogoLoop';

const institutions = [
  { name: 'Rajalakshmi Engineering College', logo: '/logos/Rajalakshmi_Engineering_College_(REC)_Chennai_Logo.png' },
  { name: 'SRM', logo: '/logos/srm.png' },
  { name: "St. Joseph's College", logo: '/logos/stjosephs.png' },
  { name: 'Sairam Institutions', logo: '/logos/sairam.png' },
  { name: 'Prince Venkateswara', logo: '/logos/prince.png' },
];

const ecosystemPartners = [
  { name: 'EDII-TN', logo: '/logos/edii-tn.png' },
  { name: 'Niral Thiruvizha', logo: '/logos/niral.png' },
  { name: 'mu.ai', logo: '/logos/mu-ai.svg' },
  { name: 'StartupTN', logo: '/logos/startup-tn.png' },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="partners" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-red-950/5 to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted Institutions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6"
          >
            <span className="text-red-400 font-semibold text-sm">TRUSTED BY</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Trusted by Innovators and{' '}
            <span className="gradient-text">Institutions</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12">+ 5 more institutions</p>
        </motion.div>

        {/* Institutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-32"
        >
          {institutions.map((institution, index) => (
            <motion.div
              key={institution.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center p-8">
                {institution.logo ? (
                  <img
                    src={institution.logo}
                    alt={institution.name}
                    className="w-full h-full object-contain transition-all duration-300 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <span className="text-white font-bold text-center text-lg">{institution.name}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Startup Ecosystem Enablers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Startup Ecosystem</span> Enablers
          </h2>
          <p className="text-xl text-gray-400">
            Partnering with leading organizations to empower entrepreneurs
          </p>
        </motion.div>

        {/* Logo Loop Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-8"
        >
          <LogoLoop items={ecosystemPartners} speed={25} />
        </motion.div>
      </div>
    </section>
  );
}
