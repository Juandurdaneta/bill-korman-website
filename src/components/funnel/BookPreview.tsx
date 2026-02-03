'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BookPreviewProps {
  className?: string;
}

export default function BookPreview({ className = '' }: BookPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative flex items-center justify-center ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* Animated Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-80 h-[450px] bg-gradient-to-br from-primary-500/40 via-accent-500/30 to-gold-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute w-72 h-96 bg-gradient-to-tr from-accent-500/30 to-primary-500/40 blur-3xl rounded-full"
      />

      {/* Book Container with actual image */}
      <motion.div
        whileHover={{ rotateY: 5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative w-56 sm:w-64 md:w-72 h-80 sm:h-96 md:h-[420px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Actual Workbook Cover Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(52,152,219,0.5)]"
        >
          <Image
            src="/images/Cover the time ownership .jpg"
            alt="The Time Ownership Playbook"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Glossy Shine Effect */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.div>

        {/* 3D Shadow */}
        <div className="absolute -bottom-6 left-4 right-2 h-10 bg-gradient-to-r from-primary-900/40 via-black/30 to-primary-900/20 blur-2xl rounded-full" />
      </motion.div>
    </motion.div>
  );
}
