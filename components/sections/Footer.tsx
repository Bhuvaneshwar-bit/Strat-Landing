'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Twitter, Instagram, X, Send, User, Sparkles, CheckCircle2 } from 'lucide-react';

// Contact Form Modal Component
function ContactFormModal({ 
  isOpen, 
  onClose, 
  initialWhoAmI, 
  initialLookingFor 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  initialWhoAmI: string;
  initialLookingFor: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mvgllgwj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl pointer-events-auto"
            >
              {/* Glow Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20 rounded-3xl blur-xl" />
              
              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-white/10 rounded-3xl p-8 sm:p-10 overflow-y-auto max-h-[90vh]">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 relative z-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-500/30"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-400" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-3 font-space-grotesk">Message Sent!</h3>
                    <p className="text-gray-400 text-lg">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                          <Sparkles className="w-5 h-5 text-red-400" />
                        </div>
                        <span className="text-red-400 text-sm font-medium uppercase tracking-wider">Get in Touch</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-2">
                        Let's Start Your <span className="gradient-text">Journey</span>
                      </h2>
                      <p className="text-gray-400">
                        Fill in your details and we'll connect with you shortly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Two Column Layout for dropdowns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Who Am I */}
                        <div>
                          <label htmlFor="who-am-i" className="block text-sm font-medium text-gray-300 mb-2">
                            Who Am I? *
                          </label>
                          <div className="relative">
                            <select
                              id="who-am-i"
                              name="who-am-i"
                              required
                              defaultValue={initialWhoAmI}
                              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all appearance-none cursor-pointer hover:bg-white/10"
                            >
                              <option value="" disabled className="bg-zinc-900">Select...</option>
                              <option value="Student" className="bg-zinc-900">Student</option>
                              <option value="Entrepreneur" className="bg-zinc-900">Entrepreneur</option>
                              <option value="Investor" className="bg-zinc-900">Investor</option>
                              <option value="Mentor" className="bg-zinc-900">Mentor</option>
                              <option value="Corporate" className="bg-zinc-900">Corporate</option>
                              <option value="Institution" className="bg-zinc-900">Institution</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Looking For */}
                        <div>
                          <label htmlFor="looking-for" className="block text-sm font-medium text-gray-300 mb-2">
                            I'm looking for *
                          </label>
                          <div className="relative">
                            <select
                              id="looking-for"
                              name="looking-for"
                              required
                              defaultValue={initialLookingFor}
                              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all appearance-none cursor-pointer hover:bg-white/10"
                            >
                              <option value="" disabled className="bg-zinc-900">Select...</option>
                              <option value="Startup Programs" className="bg-zinc-900">Startup Programs</option>
                              <option value="Funding Opportunities" className="bg-zinc-900">Funding Opportunities</option>
                              <option value="Mentorship" className="bg-zinc-900">Mentorship</option>
                              <option value="Workshops & Events" className="bg-zinc-900">Workshops & Events</option>
                              <option value="Partnership" className="bg-zinc-900">Partnership</option>
                              <option value="Other" className="bg-zinc-900">Other</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all hover:bg-white/10"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all hover:bg-white/10"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all hover:bg-white/10"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all resize-none hover:bg-white/10"
                          placeholder="Tell us about your startup idea or how we can help you..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whoAmI, setWhoAmI] = useState('');
  const [lookingFor, setLookingFor] = useState('');

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

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
    <>
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialWhoAmI={whoAmI}
        initialLookingFor={lookingFor}
      />
      
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Join StratSchool and turn your innovative ideas into reality. Connect with us to start your journey.
            </p>
            
            {/* Contact Form - Glass Morphism Style */}
            <div className="flex flex-col sm:flex-row items-end justify-center gap-4 max-w-4xl mx-auto p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              {/* Who Am I Dropdown */}
              <div className="relative w-full sm:w-auto">
                <label className="block text-left text-gray-400 text-sm mb-2 font-medium">Who Am I?</label>
                <div className="relative">
                  <select
                    value={whoAmI}
                    onChange={(e) => setWhoAmI(e.target.value)}
                    className="w-full sm:w-52 px-4 py-3.5 bg-white/5 backdrop-blur-sm text-white rounded-xl border border-white/10 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 appearance-none cursor-pointer transition-all duration-300 hover:bg-white/10"
                  >
                    <option value="" className="bg-zinc-900 text-gray-400">Select...</option>
                    <option value="Student" className="bg-zinc-900">Student</option>
                    <option value="Entrepreneur" className="bg-zinc-900">Entrepreneur</option>
                    <option value="Investor" className="bg-zinc-900">Investor</option>
                    <option value="Mentor" className="bg-zinc-900">Mentor</option>
                    <option value="Corporate" className="bg-zinc-900">Corporate</option>
                    <option value="Institution" className="bg-zinc-900">Institution</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* I'm looking for Dropdown */}
              <div className="relative w-full sm:w-auto">
                <label className="block text-left text-gray-400 text-sm mb-2 font-medium">I'm looking for</label>
                <div className="relative">
                  <select
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="w-full sm:w-64 px-4 py-3.5 bg-white/5 backdrop-blur-sm text-white rounded-xl border border-white/10 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 appearance-none cursor-pointer transition-all duration-300 hover:bg-white/10"
                  >
                    <option value="" className="bg-zinc-900 text-gray-400">Select...</option>
                    <option value="Startup Programs" className="bg-zinc-900">Startup Programs</option>
                    <option value="Funding Opportunities" className="bg-zinc-900">Funding Opportunities</option>
                    <option value="Mentorship" className="bg-zinc-900">Mentorship</option>
                    <option value="Workshops & Events" className="bg-zinc-900">Workshops & Events</option>
                    <option value="Partnership" className="bg-zinc-900">Partnership</option>
                    <option value="Other" className="bg-zinc-900">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contact Us Button */}
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact us
              </button>
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
    </>
  );
}
