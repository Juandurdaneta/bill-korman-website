'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Heart, Check } from 'lucide-react';
import Button from '../ui/Button';
import Aurora from '../ui/Aurora';
import GlowingOrb from '../ui/GlowingOrb';
import MagneticButton from '../ui/MagneticButton';
import BlurText from '../ui/BlurText';

const benefits = [
  'Exactly where you\'re losing time (most waste 15-20 hours weekly)',
  'Which hours actually make you money',
  'The 3 immediate changes that get you 20+ hours back',
];

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <Aurora amplitude={0.8} blend={0.3} />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Animated Glowing Orbs */}
      <GlowingOrb color="#1f5f94" size={400} className="top-1/4 left-1/4" delay={0} />
      <GlowingOrb color="#ff8c1a" size={350} className="bottom-1/4 right-1/4" delay={1} />
      <GlowingOrb color="#2a7ab8" size={250} className="top-1/2 right-1/3" delay={2} blur={100} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#ff8c1a] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Ready To Transform?
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <BlurText delay={0.2}>Ready To Reclaim 20+ Hours of Your Week?</BlurText>
          </h2>

          <p className="text-[#ababbe] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
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
                <Check className="w-5 h-5 text-[#ff8c1a] flex-shrink-0" />
                <span className="text-[#d0d0dd] text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Trust statement */}
          <motion.p
            className="text-[#8686a0] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            This is the same framework that&apos;s helped <span className="text-[#ff8c1a] font-semibold">10,000+ entrepreneurs</span> and 
            business owners scale past their revenue ceilings while working fewer hours.
          </motion.p>

          {/* Value proposition */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1e1e26] border border-white/10 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[#8686a0]">No fluff. No theory.</span>
            <span className="w-1 h-1 rounded-full bg-[#ff8c1a]" />
            <span className="text-white font-semibold">Just the exact system that works.</span>
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
              <Button href="#" variant="accent" size="lg" showArrow className="text-lg px-10">
                Get Your Free Playbook Now
              </Button>
            </MagneticButton>
            <p className="text-[#62627d] text-sm">
              <span className="text-[#ff8c1a] font-semibold">$497 value</span> — yours free today
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
