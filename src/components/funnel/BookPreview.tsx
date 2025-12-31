'use client';

import { motion } from 'framer-motion';

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

      {/* Book Container */}
      <motion.div
        whileHover={{ rotateY: 5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative w-56 sm:w-64 md:w-72 h-80 sm:h-96 md:h-[420px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Book Back (depth effect) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-950 rounded-r-lg"
          style={{ transform: 'translateZ(-20px)' }}
        />

        {/* Book Pages (side) */}
        <div className="absolute right-0 top-2 bottom-2 w-3 bg-gradient-to-r from-neutral-200 to-neutral-100 rounded-r-sm shadow-inner" />

        {/* Book Cover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 rounded-r-lg shadow-[0_25px_50px_-12px_rgba(52,152,219,0.5)]">
          {/* Spine Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 rounded-l-sm shadow-[inset_-2px_0_4px_rgba(0,0,0,0.3)]" />

          {/* Cover Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)]" />
          </div>

          {/* Cover Content */}
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
            {/* Top Badge */}
            <div className="text-center">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="inline-block px-3 py-1 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-xs font-bold rounded shadow-lg"
              >
                BESTSELLER
              </motion.span>
            </div>

            {/* Title */}
            <div className="text-center space-y-1">
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider drop-shadow-lg"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                THE 168
              </motion.h3>
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider drop-shadow-lg"
                style={{ fontFamily: 'Bebas Neue, sans-serif', background: 'linear-gradient(135deg, #7ED321 0%, #5cb80f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                GAME
              </motion.h3>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto my-3 rounded-full shadow-lg"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium"
              >
                Time Ownership<br />vs. Time Management
              </motion.p>
            </div>

            {/* Author */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="text-center"
            >
              <p className="text-gold-400 text-xs sm:text-sm font-bold tracking-widest">
                BILL KORMAN
              </p>
            </motion.div>
          </div>

          {/* Glossy Shine Effect */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none rounded-r-lg"
          />

          {/* Corner highlight */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/15 to-transparent rounded-tr-lg pointer-events-none" />
        </div>

        {/* 3D Shadow */}
        <div className="absolute -bottom-6 left-4 right-2 h-10 bg-gradient-to-r from-primary-900/40 via-black/30 to-primary-900/20 blur-2xl rounded-full" />
      </motion.div>
    </motion.div>
  );
}
