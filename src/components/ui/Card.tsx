'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'featured' | 'numbered';
  number?: number;
  className?: string;
}

export default function Card({
  icon: Icon,
  title,
  description,
  variant = 'default',
  number,
  className = '',
}: CardProps) {
  const baseStyles = 'p-6 md:p-8 rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-[#121218] border border-white/5 hover:border-white/10',
    featured: 'bg-gradient-to-br from-[#1a4d7a]/20 to-[#121218] border border-[#5dade2]/20 hover:border-[#5dade2]/40',
    numbered: 'bg-[#121218] border border-white/5 hover:border-[#2ecc71]/30',
  };

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-4">
        {variant === 'numbered' && number !== undefined && (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] flex items-center justify-center text-[#000000] font-bold text-xl">
            {number}
          </div>
        )}
        {Icon && variant !== 'numbered' && (
          <div className="w-14 h-14 rounded-xl bg-[#3498db]/20 flex items-center justify-center">
            <Icon className="w-7 h-7 text-[#85c1e9]" />
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        <p className="text-[#aaaaaa] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
