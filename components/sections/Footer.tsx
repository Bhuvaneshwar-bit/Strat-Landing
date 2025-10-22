'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/our-people' },
      { name: 'Our Work', href: '/our-work' },
      { name: 'Contact', href: '/reach-us' },
    ],
    Programs: [
      { name: 'Join IGNITE', href: '/join-ignite' },
      { name: 'StratSchool LIFTOFF', href: '/stratschool-liftoff' },
      { name: 'StratSchool FOUNDATIONS', href: '/stratschool-foundations' },
      { name: 'Mu AI Suite', href: '/mu-ai-suite' },
    ],
    Resources: [
      { name: 'Bootcamps & Workshops', href: '/bootcamps-and-workshops' },
      { name: 'Pricing', href: '/join-ignite' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/stratschool/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/StratSchool_', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/strat.school', label: 'Instagram' },
    { icon: Mail, href: 'mailto:reach@stratschool.org', label: 'Email' },
  ];

  return (
    <footer id="contact" ref={ref} className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pb-20 border-b border-white/10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
            Ready to Launch{' '}
            <span className="gradient-text">Your Dream?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join StratSchool and turn your innovative ideas into reality. Connect with us to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reach-us"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get in Touch
              <ExternalLink className="w-5 h-5" />
            </Link>
            <a
              href="mailto:reach@stratschool.org"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              reach@stratschool.org
            </a>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-space-grotesk mb-2">
                <span className="text-red-600">Strat</span>
                <span className="text-white">School</span>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 StratSchool | A brand of Noburo Business Services LLP
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
