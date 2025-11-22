'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Youtube, Music, Podcast, ArrowRight } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

type TabType = 'dialogues' | 'bytes' | 'newsletter';

const dialoguesEpisodes = [
  {
    id: 1,
    title: 'StratSchool Dialogues',
    guest: 'Featured Episode',
    description: 'Watch our latest conversation with entrepreneurs, investors, and innovators shaping India\'s startup ecosystem.',
    youtubeUrl: 'https://youtu.be/8OcQt2t-t4M',
    thumbnail: 'https://img.youtube.com/vi/8OcQt2t-t4M/maxresdefault.jpg',
    duration: '45:23'
  }
];

const bytesContent = [
  {
    id: 1,
    title: '3 Pitching Mistakes to Avoid',
    description: 'Quick tips on what NOT to do when pitching to investors.',
    youtubeUrl: 'https://www.youtube.com/shorts/abc123',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=600&fit=crop',
    duration: '0:58'
  },
  {
    id: 2,
    title: 'MVP in 48 Hours',
    description: 'How to validate your idea with a minimum viable product in just 2 days.',
    youtubeUrl: 'https://www.youtube.com/shorts/def456',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
    duration: '1:24'
  },
  {
    id: 3,
    title: 'Hiring Your First Employee',
    description: 'What to look for when building your founding team.',
    youtubeUrl: 'https://www.youtube.com/shorts/ghi789',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=600&fit=crop',
    duration: '1:15'
  }
];

const platforms = [
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@stratschool', color: 'text-red-500' },
  { name: 'Spotify', icon: Music, url: 'https://spotify.com', color: 'text-green-500' },
  { name: 'Apple Podcasts', icon: Podcast, url: 'https://podcasts.apple.com', color: 'text-purple-500' }
];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<TabType>('dialogues');

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Conversations That <br />
              <span className="gradient-text">Build Change</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The StratSchool Podcast brings you real conversations with entrepreneurs, 
              investors, and innovators shaping India's startup ecosystem.
            </motion.p>

            {/* Platform Links */}
            <motion.div 
              className="flex items-center justify-center gap-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-500 font-medium">Available on:</p>
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <platform.icon className={`w-5 h-5 ${platform.color}`} />
                  <span className="text-white font-medium">{platform.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[120px] animate-pulse delay-1000" />
      </section>

      {/* Tabs Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-16">
            {[
              { id: 'dialogues' as TabType, label: 'StratSchool Dialogues' },
              { id: 'bytes' as TabType, label: 'StratSchool Bytes' },
              { id: 'newsletter' as TabType, label: 'StratSchool Insights' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 border border-white/20 rounded-full"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'dialogues' && (
              <motion.div
                key="dialogues"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <DialoguesGrid episodes={dialoguesEpisodes} />
              </motion.div>
            )}

            {activeTab === 'bytes' && (
              <motion.div
                key="bytes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <BytesGrid content={bytesContent} />
              </motion.div>
            )}

            {activeTab === 'newsletter' && (
              <motion.div
                key="newsletter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <NewsletterSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DialoguesGrid({ episodes }: { episodes: typeof dialoguesEpisodes }) {
  return (
    <div className="max-w-4xl mx-auto">
      {episodes.map((episode, index) => (
        <motion.div
          key={episode.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            {/* Thumbnail */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={episode.thumbnail} 
                alt={episode.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                {episode.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                {episode.title}
              </h3>
              <p className="text-red-400 font-medium mb-3">with {episode.guest}</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {episode.description}
              </p>
              
              <a
                href={episode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 group/btn"
              >
                <Youtube className="w-5 h-5" />
                Watch on YouTube
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function BytesGrid({ content }: { content: typeof bytesContent }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {content.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            {/* Vertical thumbnail for Shorts format */}
            <div className="relative aspect-[9/16] overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                  <Play className="w-7 h-7 text-white fill-white" />
                </div>
              </div>

              {/* Duration */}
              <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                {item.duration}
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

function NewsletterSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20" />
        
        <div className="relative bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <Podcast className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            StratSchool Insights
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Get weekly insights, startup tips, and exclusive content delivered straight to your inbox. 
            Join 5,000+ founders building the future.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
