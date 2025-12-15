'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Users, DollarSign } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedNumber from '../ui/AnimatedNumber';
import FloatingParticles from '../ui/FloatingParticles';
import GlowingOrb from '../ui/GlowingOrb';
import BlurText from '../ui/BlurText';
import SpotlightCard from '../ui/SpotlightCard';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        {/* Floating Particles */}
        <FloatingParticles count={60} speed={0.3} />

        {/* Animated Glowing Orbs */}
        <GlowingOrb color="#1f5f94" size={500} className="top-1/4 left-1/4" delay={0} />
        <GlowingOrb color="#ff8c1a" size={400} className="bottom-1/4 right-1/4" delay={2} />
        <GlowingOrb color="#2a7ab8" size={300} className="top-1/2 right-1/3" delay={1} blur={100} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f5f94]/20 border border-[#2a7ab8]/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Clock className="w-4 h-4 text-[#ff8c1a]" />
              <span className="text-sm text-[#4a9ad8] font-medium">Time Ownership Framework</span>
            </motion.div>

            {/* Main Headline with BlurText */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              <BlurText delay={0.3}>Reclaim</BlurText>{' '}
              <span className="text-[#ff8c1a]">
                <BlurText delay={0.4}>20+ Hours</BlurText>
              </span>{' '}
              <BlurText delay={0.5}>Per Week Without Sacrificing Revenue</BlurText>
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-[#ababbe] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The proven framework entrepreneurs use to scale past 6-figures while working less. 
              Stop managing time. Start owning it.
            </motion.p>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MagneticButton strength={0.2}>
                <Button href="#playbook" variant="accent" size="lg" showArrow>
                  Get Your Free Playbook
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Button href="/services" variant="outline" size="lg">
                  Explore Coaching
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Value Badge */}
            <motion.p
              className="text-[#8686a0] text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="text-[#ff8c1a] font-semibold">$497 value</span> — yours free today
            </motion.p>
          </motion.div>

          {/* Right Column - Stats Card with Spotlight Effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <SpotlightCard className="rounded-3xl" spotlightColor="rgba(31, 95, 148, 0.2)">
              <div className="relative p-8 md:p-10 overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff8c1a]/10 to-transparent" />
              
              <h3 className="text-2xl font-bold text-white mb-8">Proven Results</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Stat 1 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/50">
                  <div className="w-12 h-12 rounded-lg bg-[#1f5f94]/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#4a9ad8]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      <AnimatedNumber value={100} suffix="+" />
                    </div>
                    <div className="text-[#8686a0] text-sm">Entrepreneurs Coached</div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/50">
                  <div className="w-12 h-12 rounded-lg bg-[#ff8c1a]/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#ff8c1a]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      $<AnimatedNumber value={50} suffix="M+" />
                    </div>
                    <div className="text-[#8686a0] text-sm">Combined Client Revenue</div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/50">
                  <div className="w-12 h-12 rounded-lg bg-[#1f5f94]/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#4a9ad8]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      <AnimatedNumber value={2000} suffix="+" />
                    </div>
                    <div className="text-[#8686a0] text-sm">Hours Reclaimed</div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                  {['Navy Veteran', 'Serial Entrepreneur', 'Best-Selling Author'].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1f5f94]/10 text-[#4a9ad8] text-xs font-medium"
                    >
                      <Check className="w-3 h-3" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </SpotlightCard>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#ff8c1a] to-[#f07800] text-[#0a0a0f] px-4 py-2 rounded-lg font-bold text-sm shadow-lg"
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
            className="w-6 h-10 rounded-full border-2 border-[#2a7ab8]/50 flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 bg-[#4a9ad8] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
