'use client';

import { motion } from 'framer-motion';

interface StatProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function Stat({ value, label, prefix = '', suffix = '' }: StatProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        <span className="text-[#ff8c1a]">{prefix}</span>
        {value}
        <span className="text-[#ff8c1a]">{suffix}</span>
      </div>
      <div className="text-[#8686a0] text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
