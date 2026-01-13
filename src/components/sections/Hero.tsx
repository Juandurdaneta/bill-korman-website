'use client';

import { motion } from 'framer-motion';
import { Clock, Play } from 'lucide-react';
import Button from '../ui/Button';
import AuroraBackground from '../ui/AuroraBackground';
import BlurText from '../ui/BlurText';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Aurora Background */}
      <AuroraBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3498db]/20 border border-[#5dade2]/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Clock className="w-4 h-4 text-[#7ED321]" />
              <span className="text-sm text-[#85c1e9] font-medium">Time Ownership Framework</span>
            </motion.div>

            {/* Main Headline with BlurText */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
              <BlurText delay={0.3}>Reclaim</BlurText>{' '}
              <span className="text-[#5dade2]">
                <BlurText delay={0.4}>20+ Hours</BlurText>
              </span>{' '}
              <BlurText delay={0.5}>Per Week Without Losing Revenue</BlurText>
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-[#aaaaaa] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The Proven Framework Entrepreneurs Use To Scale Beyond 6-Figures While Working Less.
              Download The Time Ownership Playbook and discover exactly where you&apos;re losing time,
              which hours actually make you money, and the 3 moves that get you 20+ hours back this week.
            </motion.p>

            {/* CTA Button with Magnetic Effect */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MagneticButton strength={0.2}>
                <Button href="/free-book" variant="accent" size="lg" showArrow>
                  Get Your Time Ownership Playbook
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Value Badge */}
            <motion.p
              className="text-[#888888] text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="text-[#f1c40f] font-semibold">$497 value</span> — yours free for a Limited Time
            </motion.p>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0d0d14] border border-white/10 aspect-video">
              {/* Video placeholder - replace src with actual video */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <motion.button
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7ED321] to-[#27ae60] flex items-center justify-center shadow-[0_0_40px_rgba(126,211,33,0.4)] cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                </motion.button>
              </div>
              {/* Placeholder image/thumbnail */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3498db]/20 to-[#7ED321]/10" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#7ED321] to-[#27ae60] text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              20+ Years Experience
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-[#5dade2]/50 flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 bg-[#85c1e9] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
