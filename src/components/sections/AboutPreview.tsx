'use client';

import { motion } from 'framer-motion';
import { Award, Building2, BookOpen, Users, Shield, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const credentials = [
  { icon: Shield, text: '20 Years US Navy Chief Officer' },
  { icon: Building2, text: 'CEO, Built for Life Financial Agency' },
  { icon: BookOpen, text: 'Author, The 168 Game' },
  { icon: Users, text: 'Managed 760+ Agent Team' },
];

const companies = [
  'Built for Life Financial Agency',
  'Visionary Flow Solutions',
  'Korman Elite Holdings',
  'Bill Korman\'s Mindset Revolution',
  'Korman Dominion Alliance',
  'Their Voice Global Warriors (Non-profit)',
];

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gradient-to-l from-[#1f5f94]/10 to-transparent rounded-l-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Image placeholder - replace with actual image */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1e1e26] to-[#121218] border border-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Stylized placeholder */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1f5f94] to-[#2a7ab8] opacity-20" />
                </div>
                {/* You would replace this with an actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-[#8686a0]">
                  <span className="text-sm">Bill Korman Photo</span>
                </div>
              </div>
              
              {/* Floating credential cards */}
              <motion.div
                className="absolute -right-4 lg:-right-8 top-20 bg-[#1e1e26] rounded-xl p-4 border border-white/10 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ff8c1a]/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#ff8c1a]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Navy Veteran</div>
                    <div className="text-[#8686a0] text-sm">20 Years of Service</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 lg:-left-8 bottom-20 bg-[#1e1e26] rounded-xl p-4 border border-white/10 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f5f94]/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#4a9ad8]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Best-Selling Author</div>
                    <div className="text-[#8686a0] text-sm">The 168 Game</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#ff8c1a] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Meet Your Guide
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built By Someone Who&apos;s Mastered Their Time
            </h2>
            
            <p className="text-[#ababbe] text-lg leading-relaxed mb-6">
              Bill Korman is a former US Navy Chief Officer with 20 years of service, 
              serial entrepreneur, and author of <span className="text-white font-semibold">The 168 Game: Time Ownership vs. Time Management</span>.
            </p>
            
            <p className="text-[#ababbe] leading-relaxed mb-8">
              From bankruptcy to running multiple 7-figure businesses simultaneously, Bill doesn&apos;t teach theory — 
              he teaches what works when you&apos;re actually building something real.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-2 text-[#d0d0dd]">
                  <cred.icon className="w-5 h-5 text-[#4a9ad8]" />
                  <span className="text-sm">{cred.text}</span>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary" showArrow>
              Read Bill&apos;s Full Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
