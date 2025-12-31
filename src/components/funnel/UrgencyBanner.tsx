'use client';

import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';

interface UrgencyBannerProps {
  message: string;
  variant?: 'warning' | 'info' | 'limited';
  icon?: 'clock' | 'alert';
}

export default function UrgencyBanner({
  message,
  variant = 'warning',
  icon = 'alert',
}: UrgencyBannerProps) {
  const variants = {
    warning: 'bg-gradient-to-r from-gold-600 to-gold-500 text-black',
    info: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white',
    limited: 'bg-gradient-to-r from-red-600 to-red-500 text-white',
  };

  const Icon = icon === 'clock' ? Clock : AlertTriangle;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        w-full py-3 px-4
        ${variants[variant]}
        text-center font-semibold
        sticky top-0 z-50
      `}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
        <Icon className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm md:text-base">{message}</span>
      </div>
    </motion.div>
  );
}
