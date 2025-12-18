'use client';

import { motion } from 'framer-motion';
import { Sparkles, Check, DollarSign, Clock, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';

const problems = [
  'You\'re stuck at a revenue plateau, not because you\'re not working hard enough, but because you\'re working on the wrong things at the wrong times.',
  'Your calendar controls you. Your best energy hours disappear into email and meetings.',
  'That strategic project that could 10x your business? Still in your notes from six months ago.',
  'You\'re one or two burned bridges away from losing what matters most.',
];

const results = [
  'Finally know exactly which hours make you money and which ones are bleeding you dry',
  'Reclaim 20+ hours per week without touching revenue',
  'Break through your ceiling because you\'ll finally have capacity to work ON your business',
  'Prove you can have both — the business AND the life',
];

export default function CoachingIntensive() {
  return (
    <section id="coaching" className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gradient-to-r from-[#3498db]/10 to-transparent rounded-r-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7ED321]/10 border border-[#7ED321]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#7ED321]" />
              <span className="text-sm text-[#7ED321] font-medium">Premium 1:1 Program</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              1:1 Coaching: The Complete Rebuild
            </h2>

            <p className="text-xl text-[#aaaaaa] mb-8 leading-relaxed">
              Stop Losing $50K-$200K Per Year To Wasted Time (And Get Your Life Back In The Process)
            </p>

            {/* The Reality */}
            <h3 className="text-xl font-bold text-white mb-4">THE REALITY YOU&apos;RE LIVING:</h3>
            <ul className="space-y-3 mb-8">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                  {problem}
                </li>
              ))}
            </ul>

            {/* What Changes */}
            <h3 className="text-xl font-bold text-white mb-4">WHAT CHANGES WITH 1:1 COACHING:</h3>
            <p className="text-[#aaaaaa] mb-6">
              This isn&apos;t another course you won&apos;t finish or a productivity hack that doesn&apos;t stick. 
              This is a complete operating system rebuild customized for your business, your goals, your life.
            </p>
            <ul className="space-y-3 mb-8">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-[#d0d0dd]">
                  <Check className="w-5 h-5 text-[#7ED321] flex-shrink-0 mt-0.5" />
                  {result}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#141414] to-[#121218] rounded-3xl p-8 md:p-10 border border-[#5dade2]/20 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7ED321]/10 to-transparent" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-wider text-[#7ED321] font-semibold">
                    90-Day Intensive
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">The Complete Rebuild</h3>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-white">$25,000</span>
                  <span className="text-[#888888]">/ program</span>
                </div>

                <p className="text-[#aaaaaa] mb-6 leading-relaxed">
                  Personalized transformation. Custom frameworks built for your specific business. 
                  Real-time support. This is the fastest path to results.
                </p>

                <div className="space-y-4 mb-8">
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

                <Button href="#" variant="accent" size="lg" className="w-full mb-4" showArrow>
                  Apply for 1:1 Coaching
                </Button>

                <p className="text-center text-[#555555] text-sm">
                  <span className="text-[#7ED321] font-semibold">Limited:</span> 3 new clients per quarter
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
