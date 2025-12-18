'use client';

import { motion } from 'framer-motion';
import BlurText from './BlurText';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  animateTitle?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  animateTitle = false,
}: SectionTitleProps) {
  const alignmentClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignmentClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="text-[#7ED321] font-semibold text-sm uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        {animateTitle ? <BlurText delay={0.2}>{title}</BlurText> : title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#aaaaaa] max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
