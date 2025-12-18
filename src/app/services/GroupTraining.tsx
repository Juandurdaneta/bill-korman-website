'use client';

import { motion } from 'framer-motion';
import { Users, Check, TrendingUp, Target, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const benefits = [
  'Productivity metrics measurably improved',
  'Meetings cut by 30-50%',
  'Projects completed faster',
  'Burnout rates decrease significantly',
  'Retention improves across the organization',
];

export default function GroupTraining() {
  return (
    <section id="group" className="relative py-24 bg-[#000000] overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gradient-to-l from-[#7ED321]/5 to-transparent rounded-l-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3498db]/20 border border-[#5dade2]/30 mb-6">
              <Users className="w-4 h-4 text-[#85c1e9]" />
              <span className="text-sm text-[#85c1e9] font-medium">Team Transformation</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Organizational Training
            </h2>

            <p className="text-xl text-[#aaaaaa] mb-6 leading-relaxed">
              Your Team Is Maxed Out. Productivity Is Tanking. Burnout Is Costing You Millions.
            </p>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">THE CRISIS YOU&apos;RE MANAGING:</h3>
              <ul className="space-y-3 text-[#888888]">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                  Productivity is down even though everyone&apos;s &ldquo;busy&rdquo;
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                  You&apos;re losing talent you can&apos;t afford to lose
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                  Your organization has a reactivity culture, not a time ownership culture
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">WHAT ORGANIZATIONAL TRAINING DELIVERS:</h3>
            <p className="text-[#aaaaaa] mb-6">
              This isn&apos;t a one-day seminar that everyone forgets by Tuesday. This is a complete cultural transformation.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-[#d0d0dd]">
                  <Check className="w-5 h-5 text-[#7ED321] flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#141414] to-[#121218] rounded-3xl p-8 md:p-10 border border-white/5">
              <span className="text-xs uppercase tracking-wider text-[#7ED321] font-semibold">
                Team Program
              </span>

              <h3 className="text-2xl font-bold text-white mt-2 mb-2">Group Training</h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">$7,500</span>
                <span className="text-[#888888]">/ team</span>
              </div>

              <p className="text-[#aaaaaa] mb-6 leading-relaxed">
                Scale time ownership across your entire team. Custom company-wide implementation 
                with measurable improvements in productivity, retention, and output.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Users, text: 'Up to 5 team members' },
                  { icon: Clock, text: '6-month program' },
                  { icon: Target, text: 'Monthly group coaching' },
                  { icon: TrendingUp, text: 'Measurable ROI tracking' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#d0d0dd]">
                    <item.icon className="w-5 h-5 text-[#85c1e9]" />
                    {item.text}
                  </div>
                ))}
              </div>

              <Button href="#" variant="primary" size="lg" className="w-full mb-4" showArrow>
                Schedule Free Consultation
              </Button>

              <p className="text-center text-[#555555] text-sm">
                <span className="text-[#7ED321] font-semibold">Limited:</span> 2 organizations per quarter
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
