'use client';

import { motion } from 'framer-motion';
import { Shield, Building2, BookOpen, Users } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  { icon: Shield, label: '20 Years Navy Service' },
  { icon: Building2, label: 'Serial Entrepreneur' },
  { icon: BookOpen, label: 'Best-Selling Author' },
  { icon: Users, label: '10,000+ Coached' },
];

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#000000]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3498db]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7ED321]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#141414] to-[#121218] border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/bill_korman.jpeg"
                  alt="Bill Korman - Leadership Coach and Author"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#7ED321] to-[#27ae60] rounded-2xl opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#3498db] to-[#5dade2] rounded-2xl opacity-20" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#7ED321] font-semibold text-sm uppercase tracking-widest mb-4 block">
              About Bill Korman
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              From Bankruptcy to Building a Time Ownership Empire
            </h1>

            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-8">
              I know what it&apos;s like to have everything fall apart. After 20 years as a Navy Chief Officer, 
              I thought I had it figured out. I had discipline. I had work ethic. I knew how to lead teams 
              and execute under pressure. Then I left the military and faced bankruptcy.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#141414]/50 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3498db]/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#85c1e9]" />
                  </div>
                  <span className="text-[#d0d0dd] text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
