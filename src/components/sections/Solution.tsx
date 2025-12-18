'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, Target, Grid3X3, Calendar, Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const playbookFeatures = [
  {
    icon: Clock,
    title: 'The 168-Hour Audit Process',
    description: 'Discover where your time actually goes and uncover the invisible leaks costing you 15+ hours/week.',
  },
  {
    icon: Zap,
    title: 'The Energy Mapping Method',
    description: 'How to identify your peak performance windows and stop wasting them on low-value tasks.',
  },
  {
    icon: Target,
    title: 'Revenue Forensics',
    description: 'Which 20% of your activities drive 80% of your income (and which 80% you need to eliminate immediately).',
  },
  {
    icon: Grid3X3,
    title: 'The Priority Decision Matrix',
    description: 'The exact framework for deciding what deserves your time and what doesn\'t.',
  },
  {
    icon: Calendar,
    title: 'Your First 168 Game Week',
    description: 'A ready-to-implement blueprint you can use this week to reclaim 20+ hours.',
  },
];

export default function Solution() {
  return (
    <section id="playbook" className="relative py-24 bg-[#121218] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3498db]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The Free Playbook"
          title="What You'll Discover"
          subtitle="When you download the Time Ownership Playbook, you'll get the exact framework used by high-performing entrepreneurs to reclaim control of their week, without sacrificing income, momentum, or their sanity."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Features List */}
          <div className="space-y-6">
            {playbookFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4 p-4 rounded-xl hover:bg-[#141414]/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3498db] to-[#5dade2] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-[#888888] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            className="sticky top-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#141414] to-[#000000] rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#7ED321]/10 to-transparent" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-white">FREE</span>
                  <div className="flex flex-col">
                    <span className="text-[#888888] text-sm line-through">$497 value</span>
                    <span className="text-[#7ED321] text-sm font-semibold">Limited time</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  The Time Ownership Playbook
                </h3>
                
                <p className="text-[#aaaaaa] mb-6 leading-relaxed">
                  This is the same system Bill uses to run multiple 7-figure businesses simultaneously.
                  And it&apos;s the framework that&apos;s helped 1000+ entrepreneurs break through their revenue ceilings in the last 2 years.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Complete 168-Hour audit template',
                    'Energy mapping worksheet',
                    'Revenue forensics calculator',
                    'Priority decision matrix',
                    'Weekly implementation blueprint',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#d0d0dd]">
                      <Check className="w-5 h-5 text-[#7ED321] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button href="#" variant="accent" size="lg" className="w-full" showArrow>
                  Get Your Free Playbook Now
                </Button>

                <p className="text-center text-[#555555] text-xs mt-4">
                  No credit card required • Instant download
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
