'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: '100%' };
      case 'down':
        return { y: '-100%' };
      case 'left':
        return { x: '100%' };
      case 'right':
        return { x: '-100%' };
    }
  };

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{
          ...getInitialPosition(),
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                y: 0,
                x: 0,
                opacity: 1,
              }
            : undefined
        }
        transition={{
          duration: 0.6,
          delay,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
