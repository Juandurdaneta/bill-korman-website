'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="relative py-24 bg-[#121218] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Struggle */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            All that discipline didn&apos;t prepare me for the chaos of entrepreneurship.
          </h2>
          <div className="space-y-4 text-[#aaaaaa] text-lg leading-relaxed">
            <p>
              I was working harder than I ever had in the Navy — 80-hour weeks, constantly reacting, 
              drowning in decisions — and I had nothing to show for it except exhaustion and debt.
            </p>
            <p>
              I had structure and systems in the military. But in business? I was winging it. And it nearly destroyed me.
            </p>
          </div>
        </motion.div>

        {/* The Turning Point */}
        <motion.div
          className="mb-16 p-8 rounded-2xl bg-[#141414] border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#7ED321] mb-4">
            I had a choice: give up or figure this out.
          </h3>
          <p className="text-[#aaaaaa] text-lg leading-relaxed">
            I chose to figure it out. I spent the next several years studying everything I could about productivity, 
            performance, and how successful entrepreneurs actually operate. I tested frameworks. I failed. I adjusted. I tried again.
          </p>
        </motion.div>

        {/* The Breakthrough */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The breakthrough came when I stopped thinking about time management and started thinking about time ownership.
          </h2>
          <div className="space-y-4 text-[#aaaaaa] text-lg leading-relaxed">
            <p>
              In the military, we didn&apos;t &ldquo;manage&rdquo; time — we architected operations around mission-critical objectives. 
              Every hour had a strategic purpose. Every decision was filtered through: does this move us toward the mission?
            </p>
            <p>
              I applied that same philosophy to my business. I built what would eventually become The 168 Game — 
              a complete framework for owning every hour of your week instead of being owned by chaos.
            </p>
            <p className="text-white font-semibold text-xl">
              And everything changed.
            </p>
          </div>
        </motion.div>

        {/* The Results */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#aaaaaa] text-lg leading-relaxed mb-6">
            I went from bankruptcy to becoming a top performer at one of the largest insurance agencies in the country: 
            PHP Agency, eventually managing one of the company&apos;s most prominent offices with over 760 agents.
          </p>

          {/* Patrick Bet-David Quote */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#1a4d7a]/20 to-[#3498db]/10 border border-[#5dade2]/20">
            <Quote className="w-10 h-10 text-[#7ED321] mb-4" />
            <blockquote className="text-xl text-white italic mb-4">
              &ldquo;Owning time, not just managing it, is a true driver of success. Resources like The 168 Game 
              add practical strategies that go far beyond traditional time management.&rdquo;
            </blockquote>
            <cite className="text-[#888888]">
              — <span className="text-[#7ED321] font-semibold">Patrick Bet-David</span>, Founder of PHP Agency and Valuetainment
            </cite>
          </div>
        </motion.div>

        {/* Current Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Today, I run multiple 7-figure businesses:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Built for Life Financial Agency (Founder & CEO)',
              'Visionary Flow Solutions (Co-Founder)',
              'Korman Elite Holdings (Co-Founder)',
              'Bill Korman\'s Mindset Revolution (Founder)',
              'Korman Dominion Alliance (Founder)',
              'Their Voice Global Warriors (Founder, Non-Profit)',
            ].map((company, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#141414]/50 border border-white/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#7ED321]" />
                <span className="text-[#d0d0dd]">{company}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
