'use client';

import { motion } from 'framer-motion';

interface GlowingOrbProps {
  color?: string;
  size?: number;
  className?: string;
  delay?: number;
  blur?: number;
}

export default function GlowingOrb({
  color = '#1f5f94',
  size = 400,
  className = '',
  delay = 0,
  blur = 120,
}: GlowingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, ${color}00 70%)`,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
