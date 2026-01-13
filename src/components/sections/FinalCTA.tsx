'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Heart, Check } from 'lucide-react';
import Button from '../ui/Button';
import Aurora from '../ui/Aurora';
import GlowingOrb from '../ui/GlowingOrb';
import MagneticButton from '../ui/MagneticButton';
import BlurText from '../ui/BlurText';

const benefits = [
  'Exactly where you\'re losing time (most entrepreneurs waste 15-20 hours per week on low-value work)',
  'Which hours actually make you money (so you can protect and multiply them)',
  'The 3 immediate changes that get you 20+ hours back',
];

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[#000000]">
        <Aurora amplitude={0.8} blend={0.3} />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Animated Glowing Orbs */}
      <GlowingOrb color="#3498db" size={400} className="top-1/4 left-1/4" delay={0} />
      <GlowingOrb color="#7ED321" size={350} className="bottom-1/4 right-1/4" delay={1} />
      <GlowingOrb color="#5dade2" size={250} className="top-1/2 right-1/3" delay={2} blur={100} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#7ED321] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Ready To Transform?
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <BlurText delay={0.2}>Ready To Reclaim 20+ Hours of Your Week?</BlurText>
          </h2>

          <p className="text-[#aaaaaa] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Download The Time Ownership Playbook right now and discover:
          </p>

          {/* Benefits list */}
          <div className="flex flex-col items-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Check className="w-5 h-5 text-[#7ED321] flex-shrink-0" />
                <span className="text-[#d0d0dd] text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Trust statement */}
          <motion.p
            className="text-[#888888] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            This is the same framework that&apos;s helped <span className="text-[#7ED321] font-semibold">10,000+ entrepreneurs</span> and
            business owners scale past their revenue ceilings while working fewer hours.
            No fluff. No theory. Just the exact system that works.
          </motion.p>

          {/* Value proposition */}
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-6 py-3 rounded-2xl sm:rounded-full bg-[#141414] border border-white/10 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[#888888]">The playbook is valued at <span className="text-[#f1c40f] font-semibold">$497</span></span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#7ED321]" />
            <span className="text-white font-semibold">It&apos;s yours free today.</span>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <MagneticButton strength={0.15}>
              <Button href="/free-book" variant="accent" size="lg" showArrow className="text-lg px-10">
                Get Your Free Playbook Now
              </Button>
            </MagneticButton>
            <p className="text-white text-sm">
              <span className="text-[#7ED321] font-semibold">$497 value</span> — yours free today
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
