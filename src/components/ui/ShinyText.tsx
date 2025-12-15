'use client';

import { motion } from 'framer-motion';

interface ShinyTextProps {
  children: string;
  className?: string;
  shimmerColor?: string;
  duration?: number;
}

export default function ShinyText({
  children,
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.8)',
  duration = 3,
}: ShinyTextProps) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(
            120deg,
            transparent 20%,
            ${shimmerColor} 50%,
            transparent 80%
          )`,
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          mixBlendMode: 'overlay',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
