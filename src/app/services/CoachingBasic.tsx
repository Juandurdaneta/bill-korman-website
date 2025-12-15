'use client';

import { motion } from 'framer-motion';
import { Check, Calendar, Video, FileText } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CoachingBasic() {
  return (
    <section className="relative py-24 bg-[#121218] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#1e1e26] to-[#0a0a0f] rounded-3xl p-8 md:p-10 border border-white/5">
              <span className="text-xs uppercase tracking-wider text-[#4a9ad8] font-semibold">
                6-Month Program
              </span>
              
              <h3 className="text-2xl font-bold text-white mt-2 mb-2">1:1 Coaching: Standard</h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">$15,000</span>
                <span className="text-[#8686a0]">/ program</span>
              </div>

              <p className="text-[#ababbe] mb-6 leading-relaxed">
                Weekly 1:1 coaching over 6 months. Same proven framework, structured implementation, 
                with focused weekly sessions to ensure consistent progress.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Calendar, text: 'Weekly 1:1 calls with Bill' },
                  { icon: Video, text: '6 months of structured coaching' },
                  { icon: FileText, text: 'Full framework & implementation tools' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#d0d0dd]">
                    <item.icon className="w-5 h-5 text-[#4a9ad8]" />
                    {item.text}
                  </div>
                ))}
              </div>

              <Button href="#" variant="primary" size="lg" className="w-full" showArrow>
                Apply Now
              </Button>
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
              Steady Progress. Consistent Results.
            </h2>

            <p className="text-[#ababbe] text-lg leading-relaxed mb-8">
              Not everyone needs the intensive 90-day program. If you prefer a more measured pace 
              with consistent weekly guidance, the 6-month program gives you the same powerful 
              framework with structured implementation over time.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">Perfect for you if:</h3>
            <ul className="space-y-3">
              {[
                'You want consistent, weekly accountability',
                'You prefer to implement changes gradually',
                'You\'re balancing other major commitments',
                'You want the full framework without the intensive pace',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#d0d0dd]">
                  <Check className="w-5 h-5 text-[#ff8c1a] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
