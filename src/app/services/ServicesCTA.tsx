'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingDown, Heart, Users } from 'lucide-react';
import Button from '@/components/ui/Button';

const costs = [
  { icon: Clock, text: 'Wasted peak energy hours on low-value work' },
  { icon: TrendingDown, text: 'Revenue left on the table because you don\'t have capacity' },
  { icon: Heart, text: 'Relationships deteriorating because you\'re never truly present' },
  { icon: Users, text: 'Health declining from chronic stress and exhaustion' },
];

export default function ServicesCTA() {
  return (
    <section className="relative py-24 bg-[#121218] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3498db]/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#2ecc71] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Time Is Running Out
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            You&apos;ve Waited Long Enough. It&apos;s Time To Take Back Your 168 Hours.
          </h2>

          <p className="text-[#aaaaaa] text-lg leading-relaxed mb-10">
            Every week you operate without a system is another week of:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {costs.map((cost, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#000000]/50 border border-white/5 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <cost.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-[#888888] text-sm">{cost.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-xl text-white font-medium mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            You can&apos;t get this time back. But you can change what happens next.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button href="#" variant="accent" size="lg" showArrow>
              Schedule Free Consultation
            </Button>
            <Button href="/#playbook" variant="outline" size="lg">
              Download Free Playbook First
            </Button>
          </motion.div>

          <p className="mt-6 text-[#555555] text-sm">
            Not sure which path? Book a free 30-minute consultation and I&apos;ll help you figure out 
            which option makes the most sense for where you are.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
