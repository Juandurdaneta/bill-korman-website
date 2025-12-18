'use client';

import { motion } from 'framer-motion';
import { Calendar, Zap, TrendingUp, Heart, AlertTriangle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import SpotlightCard from '../ui/SpotlightCard';
import GlowingOrb from '../ui/GlowingOrb';

const painPoints = [
  {
    icon: Calendar,
    text: 'Your calendar is full of back-to-back meetings.',
  },
  {
    icon: Zap,
    text: 'Days disappear into "busy work" while that strategic project that could 3x your business sits untouched for months.',
  },
  {
    icon: TrendingUp,
    text: 'You\'re doing $10/hour work during your peak energy hours because you haven\'t figured out how to protect them.',
  },
  {
    icon: Heart,
    text: 'Your revenue is stuck at a ceiling you can\'t break through without working even MORE, which isn\'t sustainable.',
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background accents */}
      <GlowingOrb color="#7ED321" size={400} className="left-0 top-1/4" delay={0} blur={150} />
      <GlowingOrb color="#3498db" size={300} className="right-1/4 bottom-1/4" delay={1} blur={120} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The Reality Check"
          title="Working More Than Ever... So Why Does Success Feel Like Burnout?"
          subtitle="You didn't escape the 9-to-5 just to work 80-hour weeks for yourself."
          animateTitle
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(255, 140, 26, 0.15)"
                borderColor="rgba(255, 255, 255, 0.05)"
              >
                <div className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#7ED321]/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-[#7ED321]" />
                  </div>
                  <p className="text-[#d0d0dd] text-lg leading-relaxed">{point.text}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Call out box */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#1a4d7a]/20 to-[#3498db]/10 border border-[#5dade2]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#3498db]/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-[#85c1e9]" />
            </div>
            <div>
              <p className="text-xl text-white font-semibold mb-2">
                And the worst part? You&apos;re missing the life moments you started this business to actually enjoy.
              </p>
              <p className="text-[#aaaaaa] leading-relaxed">
                You know you&apos;re capable of more. You just don&apos;t have a system.
                <span className="text-[#7ED321] font-semibold"> More revenue doesn&apos;t give you more time. It gives you more chaos.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
