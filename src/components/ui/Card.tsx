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
    featured: 'bg-gradient-to-br from-[#1a4d7a]/20 to-[#121218] border border-[#2a7ab8]/20 hover:border-[#2a7ab8]/40',
    numbered: 'bg-[#121218] border border-white/5 hover:border-[#ff8c1a]/30',
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
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8c1a] to-[#f07800] flex items-center justify-center text-[#0a0a0f] font-bold text-xl">
            {number}
          </div>
        )}
        {Icon && variant !== 'numbered' && (
          <div className="w-14 h-14 rounded-xl bg-[#1f5f94]/20 flex items-center justify-center">
            <Icon className="w-7 h-7 text-[#4a9ad8]" />
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        <p className="text-[#ababbe] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
