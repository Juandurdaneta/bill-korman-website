'use client';

import { motion } from 'framer-motion';
import { Sparkles, Check, DollarSign, Clock, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';

const comparisons = [
  {
    problem: 'You\'re stuck at a revenue plateau, not because you\'re not working hard enough, but because you\'re working on the wrong things at the wrong times.',
    result: 'Finally know exactly which hours make you money and which ones are bleeding you dry',
  },
  {
    problem: 'Your calendar controls you. Your best energy hours disappear into email and meetings.',
    result: 'Reclaim 20+ hours per week without touching revenue',
  },
  {
    problem: 'That strategic project that could 10x your business? Still in your notes from six months ago.',
    result: 'Break through your ceiling because you\'ll finally have capacity to work ON your business',
  },
  {
    problem: 'You\'re one or two burned bridges away from losing what matters most.',
    result: 'Prove you can have both — the business AND the life',
  },
];

export default function CoachingIntensive() {
  return (
    <section id="coaching" className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gradient-to-r from-[#3498db]/10 to-transparent rounded-r-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7ED321]/10 border border-[#7ED321]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#7ED321]" />
            <span className="text-sm text-[#7ED321] font-medium">Premium 1:1 Program</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Complete Rebuild
          </h2>

          <p className="text-xl text-[#aaaaaa] max-w-3xl mx-auto leading-relaxed">
            Stop Losing $50K-$200K Per Year To Wasted Time<br />(And Get Your Life Back In The Process)
          </p>
        </motion.div>

        {/* Two Column Content: Problems & Results - Aligned */}
        <motion.div
          className="mb-12 rounded-2xl bg-[#141414]/50 border border-white/5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headers */}
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8 pb-4 border-b border-white/5 md:border-r">
              <h3 className="text-lg font-bold text-white">THE REALITY YOU&apos;RE LIVING:</h3>
            </div>
            <div className="p-6 md:p-8 pb-4 border-b border-white/5 bg-[#7ED321]/5">
              <h3 className="text-lg font-bold text-white">WHAT CHANGES WITH 1:1 COACHING:</h3>
            </div>
          </div>

          {/* Aligned Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 ${index !== comparisons.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              {/* Problem */}
              <div className="p-6 md:p-8 py-5 md:border-r border-white/5">
                <div className="flex items-start gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                  {item.problem}
                </div>
              </div>

              {/* Result */}
              <div className="p-6 md:p-8 py-5 bg-[#7ED321]/5">
                <div className="flex items-start gap-3 text-[#d0d0dd]">
                  <Check className="w-5 h-5 text-[#7ED321] flex-shrink-0 mt-0.5" />
                  {item.result}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Card - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#141414] to-[#121218] rounded-3xl border border-[#5dade2]/20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Program Details */}
              <div className="p-8 md:p-10 lg:p-12 relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#3498db]/10 to-transparent" />

                <div className="relative">
                  <span className="text-xs uppercase tracking-wider text-[#7ED321] font-semibold mb-2 block">
                    90-Day Intensive
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Complete Rebuild</h3>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold text-white">$25,000</span>
                    <span className="text-[#888888]">/ program</span>
                  </div>

                  <p className="text-[#aaaaaa] mb-6 leading-relaxed">
                    Personalized transformation. Custom frameworks built for your specific business.
                    Real-time support. This is the fastest path to results.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Clock, text: '90 days of intensive coaching' },
                      { icon: Sparkles, text: 'Unlimited access to Bill' },
                      { icon: TrendingUp, text: 'Custom frameworks for your business' },
                      { icon: DollarSign, text: 'Payment plans available' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-[#d0d0dd]">
                        <item.icon className="w-5 h-5 text-[#85c1e9]" />
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <Button href="#" variant="accent" size="lg" className="w-full sm:w-auto" showArrow>
                    Apply for 1:1 Coaching
                  </Button>

                  <p className="text-[#aaaaaa] text-sm mt-4">
                    <span className="text-[#7ED321] font-semibold">Limited:</span> 3 new clients per quarter
                  </p>
                </div>
              </div>

              {/* Right - Results Stats */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0d0d14] p-8 lg:p-12 min-h-[300px]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#7ED321]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#3498db]/10 to-transparent" />

                <div className="relative h-full flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#7ED321] font-semibold mb-4">
                    Average Client Results
                  </span>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                      <div className="text-3xl font-bold text-white mb-1">20+</div>
                      <div className="text-xs text-[#888]">Hours reclaimed per week</div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                      <div className="text-3xl font-bold text-[#7ED321] mb-1">90</div>
                      <div className="text-xs text-[#888]">Days to transformation</div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                      <div className="text-3xl font-bold text-white mb-1">$50K+</div>
                      <div className="text-xs text-[#888]">Saved annually</div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                      <div className="text-3xl font-bold text-[#85c1e9] mb-1">100%</div>
                      <div className="text-xs text-[#888]">Personalized approach</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-auto p-4 rounded-xl bg-[#7ED321]/10 border border-[#7ED321]/20">
                    <p className="text-sm text-[#d0d0dd] italic mb-2">
                      &ldquo;This isn&apos;t another course. It&apos;s a complete operating system rebuild for your business.&rdquo;
                    </p>
                    <span className="text-xs text-[#7ED321] font-semibold">— Bill Korman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
