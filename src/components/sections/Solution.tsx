'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, Target, Grid3X3, Calendar, Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import SpotlightCard from '../ui/SpotlightCard';
import GlowingOrb from '../ui/GlowingOrb';

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
    <section id="playbook" className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background accents */}
      <GlowingOrb color="#3498db" size={400} className="right-0 top-1/4" delay={0} blur={150} />
      <GlowingOrb color="#7ED321" size={300} className="left-1/4 bottom-1/4" delay={1} blur={120} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The Free Playbook"
          title="What You'll Discover"
          subtitle="When you download the Time Ownership Playbook, you'll get the exact framework used by high-performing entrepreneurs to reclaim control of their week, without sacrificing income, momentum, or their sanity."
          animateTitle
        />

        {/* CTA Card with Playbook Cover */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SpotlightCard
            className="rounded-3xl"
            spotlightColor="rgba(52, 152, 219, 0.15)"
            borderColor="rgba(255, 255, 255, 0.05)"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - CTA Content */}
              <div className="p-8 md:p-10 lg:p-12 relative">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-white">FREE</span>
                    <div className="flex flex-col">
                      <span className="text-[#888888] text-sm line-through">$497 value</span>
                      <span className="text-[#7ED321] text-sm font-semibold">Limited time</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
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

                  <Button href="#" variant="accent" size="lg" className="w-full sm:w-auto" showArrow>
                    Get Your Free Playbook Now
                  </Button>

                  <p className="text-[#555555] text-xs mt-4">
                    No credit card required • Instant download
                  </p>
                </div>
              </div>

              {/* Right Column - Playbook Cover Image */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0d0d14] flex items-center justify-center p-8 lg:p-12 min-h-[300px] lg:min-h-0">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#7ED321]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#3498db]/10 to-transparent" />

                {/* Playbook Cover Placeholder */}
                <div className="relative w-full max-w-[280px] aspect-[3/4] bg-gradient-to-br from-[#1e3a5f] to-[#0d1b2a] rounded-lg shadow-2xl border border-white/10 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  {/* Cover design */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-[#7ED321] text-xs font-semibold uppercase tracking-wider mb-2">Bill Korman</div>
                      <h4 className="text-white text-xl font-bold leading-tight">The Time Ownership Playbook</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 w-16 bg-[#7ED321] rounded-full" />
                      <p className="text-[#85c1e9] text-xs">Reclaim 20+ Hours Per Week</p>
                    </div>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#7ED321]/20 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-3 -right-3 lg:bottom-8 lg:right-8 bg-gradient-to-r from-[#f1c40f] to-[#f39c12] text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  Instant Download
                </motion.div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Features Grid - Below CTA */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            What&apos;s Inside
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {playbookFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SpotlightCard
                  className="h-full"
                  spotlightColor="rgba(52, 152, 219, 0.15)"
                  borderColor="rgba(255, 255, 255, 0.05)"
                >
                  <div className="flex gap-4 p-5">
                    <div className="w-12 h-12 rounded-xl bg-[#3498db]/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#85c1e9]" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-[#888888] text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
