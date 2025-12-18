'use client';

import { motion } from 'framer-motion';
import { Users, Check, TrendingUp, Target, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const benefits = [
  'Peer accountability from 4 other driven entrepreneurs on the same journey',
  'Hot seat coaching where Bill works on YOUR calendar, YOUR bottlenecks, YOUR specific challenges',
  'Same frameworks as 1:1 coaching + peer support',
  'Weekly coaching calls',
  'Build your business, systemize your time, grow together',
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
              <span className="text-sm text-[#85c1e9] font-medium">For Builders Who Don&apos;t Want to Scale Alone</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Group Coaching
            </h2>

            <p className="text-xl text-[#aaaaaa] mb-6 leading-relaxed">
              Get Personalized Coaching, Peer Accountability, and Real Results
            </p>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">THIS ISN&apos;T YOUR STANDARD GROUP TRAINING:</h3>
              <p className="text-[#888888]">
                It&apos;s for entrepreneurs and executives who want to implement the 168 Game together,
                with others playing at a high level. You&apos;ve bought courses before. You know you need more than DIY.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">WHAT GROUP COACHING DELIVERS:</h3>
            <p className="text-[#aaaaaa] mb-6">
              Join a small group of 5 driven entrepreneurs mastering The 168 Game with Bill&apos;s direct guidance, at a fraction of the 1:1 price.
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
                6-Month Program
              </span>

              <h3 className="text-2xl font-bold text-white mt-2 mb-2">Group Coaching</h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">$5,000</span>
                <span className="text-[#888888]">or 3 payments of $1,750</span>
              </div>

              <p className="text-[#aaaaaa] mb-6 leading-relaxed">
                Join a small group of 5 driven entrepreneurs mastering The 168 Game with Bill&apos;s direct guidance.
                Same frameworks + accountability + peer support.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Users, text: 'Small group (5 participants)' },
                  { icon: Clock, text: '6-month program' },
                  { icon: Target, text: 'Weekly coaching calls' },
                  { icon: TrendingUp, text: 'Shared energy & accountability' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#d0d0dd]">
                    <item.icon className="w-5 h-5 text-[#85c1e9]" />
                    {item.text}
                  </div>
                ))}
              </div>

              <Button href="#" variant="primary" size="lg" className="w-full mb-4" showArrow>
                Learn About Group Coaching
              </Button>

              <p className="text-center text-[#555555] text-sm">
                <span className="text-[#7ED321] font-semibold">Limited:</span> Only 5 spots per cohort | New cohorts launch quarterly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
