'use client';

import { motion } from 'framer-motion';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  gradientColors?: string[];
  borderRadius?: string;
}

export default function GradientBorder({
  children,
  className = '',
  borderWidth = 2,
  duration = 4,
  gradientColors = ['#3498db', '#2ecc71', '#5dade2', '#27ae60', '#3498db'],
  borderRadius = '1rem',
}: GradientBorderProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ borderRadius }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-px pointer-events-none"
        style={{
          borderRadius,
          background: `linear-gradient(90deg, ${gradientColors.join(', ')})`,
          backgroundSize: '300% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner content with background */}
      <div
        className="relative bg-[#121218]"
        style={{
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
          margin: borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
}
