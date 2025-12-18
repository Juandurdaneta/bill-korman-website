'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, Target } from 'lucide-react';
import Button from '../ui/Button';

export default function Warning() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#121218] to-[#000000] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7ED321]/50 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Warning icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7ED321]/10 mb-6">
            <AlertTriangle className="w-8 h-8 text-[#7ED321]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            WARNING: ⅓ of Entrepreneurs Hit a Ceiling They Never Break Through
          </h2>

          <p className="text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            The way you&apos;re currently working isn&apos;t sustainable. Recent surveys suggest that over one-third of entrepreneurs 
            report burnout, high stress and hit a revenue plateau they never escape — not because they lack talent or work ethic, 
            but because they don&apos;t have a framework for time ownership.
          </p>

          {/* Stats row */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              className="p-6 rounded-2xl bg-[#141414]/50 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <TrendingDown className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">33%+</div>
              <div className="text-[#888888] text-sm">Report Burnout</div>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-[#141414]/50 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Clock className="w-8 h-8 text-[#7ED321] mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">15-20</div>
              <div className="text-[#888888] text-sm">Hours Wasted Weekly</div>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-[#141414]/50 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Target className="w-8 h-8 text-[#85c1e9] mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Revenue</div>
              <div className="text-[#888888] text-sm">Plateau Inevitable</div>
            </motion.div>
          </div>

          {/* Key insight */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-r from-[#1a4d7a]/20 to-[#3498db]/10 border border-[#5dade2]/20 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl text-white font-medium">
              Success at scale isn&apos;t about working more. It&apos;s about working on what matters 
              during the hours when you&apos;re actually capable of doing your best work.
            </p>
          </motion.div>

          <p className="text-[#aaaaaa] mb-8">
            Successful entrepreneurs design their 168 hours like a financial portfolio — allocating time 
            to the activities with the highest ROI on revenue, relationships, and fulfillment.
          </p>

          <Button href="#playbook" variant="accent" size="lg" showArrow>
            Get Your Free Playbook Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
