'use client';

import { motion } from 'framer-motion';
import { Quote, Anchor, AlertTriangle, Lightbulb, Rocket, Building2 } from 'lucide-react';

const journeySteps = [
  {
    icon: Anchor,
    period: 'The Foundation',
    title: 'Navy Discipline Meets Entrepreneurship',
    content: 'I was working harder than I ever had in the Navy—80-hour weeks, constantly reacting, drowning in decisions, and I had nothing to show for it except exhaustion and debt.',
    accent: '#3498db',
  },
  {
    icon: AlertTriangle,
    period: 'The Struggle',
    title: 'Systems in the Military, Chaos in Business',
    content: 'I had structure and systems in the military. But in business? I was winging it. And it nearly destroyed me.',
    accent: '#e74c3c',
  },
  {
    icon: Lightbulb,
    period: 'The Turning Point',
    title: 'Give Up or Figure This Out',
    content: 'I chose to figure it out. I spent the next several years studying everything I could about productivity, performance, and how successful entrepreneurs actually operate. I tested frameworks. I failed. I adjusted. I tried again.',
    accent: '#f1c40f',
  },
  {
    icon: Rocket,
    period: 'The Breakthrough',
    title: 'From Time Management to Time Ownership',
    content: 'In the military, we didn\'t "manage" time—we architected operations around mission-critical objectives. Every hour had a strategic purpose. I applied that same philosophy to my business and built The 168 Game.',
    accent: '#7ED321',
  },
];

const companies = [
  { name: 'Built for Life Financial Agency', role: 'Founder & CEO', icon: '💼', category: 'Financial Services' },
  { name: 'Visionary Flow Solutions', role: 'Co-Founder', icon: '🚀', category: 'Business Solutions' },
  { name: 'Korman Elite Holdings', role: 'Co-Founder', icon: '📈', category: 'Investment Holdings' },
  { name: 'Mindset Revolution', role: 'Founder', icon: '🧠', category: 'Personal Development' },
  { name: 'Korman Dominion Alliance', role: 'Founder', icon: '🤝', category: 'Strategic Partnerships' },
  { name: 'Their Voice Global Warriors', role: 'Founder', icon: '🌍', category: 'Non-Profit' },
];

export default function AboutStory() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7ED321]/10 text-[#7ED321] text-sm font-medium mb-4">
            The Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            From Chaos to Clarity
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#333] to-transparent" />

          {/* Journey Steps */}
          <div className="space-y-8 md:space-y-0">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative md:flex md:items-center md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className="relative p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/10 transition-colors group"
                  >
                    {/* Accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${step.accent}40, ${step.accent})` }}
                    />

                    {/* Period badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{ backgroundColor: `${step.accent}20`, color: step.accent }}
                    >
                      {step.period}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#85c1e9] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-[#999] leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>

                {/* Center Icon - Timeline node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#1a1a1a] border-2 border-[#333] items-center justify-center z-10 group-hover:border-white/20 transition-colors">
                  <step.icon className="w-6 h-6" style={{ color: step.accent }} />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Quote Card */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#1a2744] to-[#141414] border border-[#3498db]/20 mb-12">
            {/* Decorative quote marks */}
            <div className="absolute top-4 left-4 text-8xl text-[#3498db]/10 font-serif leading-none">&ldquo;</div>

            <div className="relative flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#7ED321]/20 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-[#7ED321]" />
                </div>
              </div>

              <div>
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4">
                  Owning time, not just managing it, is a true driver of success. Resources like The 168 Game
                  add practical strategies that go far beyond traditional time management.
                </blockquote>
                <cite className="flex items-center gap-3 not-italic">
                  <div className="w-10 h-10 rounded-full bg-[#7ED321] flex items-center justify-center text-black font-bold text-sm">
                    PBD
                  </div>
                  <div>
                    <div className="text-white font-semibold">Patrick Bet-David</div>
                    <div className="text-[#888] text-sm">Founder of PHP Agency & Valuetainment</div>
                  </div>
                </cite>
              </div>
            </div>
          </div>

          {/* Current Ventures */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7ED321]/10 mb-4">
              <Building2 className="w-4 h-4 text-[#7ED321]" />
              <span className="text-[#7ED321] text-sm font-medium">Today</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Running Multiple 7-Figure Businesses
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0d0d0d] border border-white/5 hover:border-[#7ED321]/30 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-15px_rgba(126,211,33,0.2)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                {/* Top row with icon and category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {company.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded-full bg-white/5">
                    {company.category}
                  </span>
                </div>

                {/* Company name */}
                <h4 className="text-lg text-white font-semibold mb-1 group-hover:text-[#7ED321] transition-colors">
                  {company.name}
                </h4>

                {/* Role */}
                <p className="text-[#7ED321] text-sm font-medium">{company.role}</p>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#7ED321]/5 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
