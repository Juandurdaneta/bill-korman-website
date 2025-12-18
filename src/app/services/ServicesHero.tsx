'use client';

import { motion } from 'framer-motion';
import { Clock, Users, GraduationCap } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#000000]">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#3498db]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#7ED321]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#7ED321] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Choose Your Path
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Three Ways To Master Your 168 Hours
          </h1>

          <p className="text-[#aaaaaa] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            You know the problem. You&apos;ve seen the framework. Now it&apos;s time to implement. 
            Whether you want personal guidance, self-guided mastery with expert support, or 
            company-wide transformation — there&apos;s a path designed for where you are and where you want to go.
          </p>

          {/* Quick icons */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Clock, label: '1:1 Coaching', sublabel: 'Fastest Results' },
              { icon: Users, label: 'Group Training', sublabel: 'Team Transformation' },
              { icon: GraduationCap, label: 'On-Demand Course', sublabel: 'Self-Paced Learning' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#3498db]/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#85c1e9]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{item.label}</div>
                  <div className="text-[#888888] text-sm">{item.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
