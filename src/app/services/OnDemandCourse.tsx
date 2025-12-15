'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Check, PlayCircle, Users, Calendar, Infinity } from 'lucide-react';
import Button from '@/components/ui/Button';

const courseIncludes = [
  'The time audit process that reveals where 15-20 hours are hiding',
  'Energy mapping that stops you from doing strategic work when your brain is fried',
  'Revenue forensics that show which activities actually make you money',
  'Priority matrix that eliminates decision fatigue',
  'Delegation system that finally gets your team operating without you',
  'Monthly live coaching calls with Bill',
  'Private community of entrepreneurs implementing alongside you',
  'Lifetime access to all materials',
];

export default function OnDemandCourse() {
  return (
    <section id="course" className="relative py-24 bg-[#121218] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#1e1e26] to-[#0a0a0f] rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4a9ad8]/10 to-transparent" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f5f94]/20 mb-4">
                  <GraduationCap className="w-4 h-4 text-[#4a9ad8]" />
                  <span className="text-xs text-[#4a9ad8] font-medium">Self-Paced Learning</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Time Ownership Mastery Course</h3>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-white">Starting at $497</span>
                </div>

                <p className="text-[#ababbe] mb-6 leading-relaxed">
                  The complete 168 Game framework. Step-by-step implementation system. Monthly live coaching with Bill. 
                  Private community of high-performers doing this with you.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: PlayCircle, text: 'Complete video course library' },
                    { icon: Calendar, text: 'Monthly live coaching calls' },
                    { icon: Users, text: 'Private community access' },
                    { icon: Infinity, text: 'Lifetime access' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-[#d0d0dd]">
                      <item.icon className="w-5 h-5 text-[#4a9ad8]" />
                      {item.text}
                    </div>
                  ))}
                </div>

                <Button href="#" variant="accent" size="lg" className="w-full mb-4" showArrow>
                  Enroll Now
                </Button>

                <p className="text-center text-[#8686a0] text-sm">
                  Immediate access upon enrollment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What If You Could Get 20+ Hours Back Every Week Without Hiring a $25K Coach?
            </h2>

            <p className="text-[#ababbe] text-lg leading-relaxed mb-6">
              This is the exact framework Bill used to go from bankruptcy to running multiple 7-figure businesses. 
              The same system he charges $25K to customize for 1:1 clients.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">YOU GET EVERYTHING:</h3>
            <ul className="space-y-3 mb-8">
              {courseIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#d0d0dd]">
                  <Check className="w-5 h-5 text-[#ff8c1a] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-2xl bg-[#1e1e26] border border-[#ff8c1a]/20">
              <h4 className="text-lg font-semibold text-[#ff8c1a] mb-2">BONUS:</h4>
              <p className="text-[#ababbe]">
                Enroll today and get The CEO Time Architecture Blueprint — the exact weekly framework 
                Bill uses to run multiple businesses in under 40 hours per week.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
