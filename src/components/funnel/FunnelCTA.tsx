'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FunnelCTAProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  showArrow?: boolean;
  pulse?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function FunnelCTA({
  children,
  href,
  onClick,
  variant = 'accent',
  size = 'lg',
  className = '',
  showArrow = true,
  pulse = false,
  type = 'button',
}: FunnelCTAProps) {
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #3498db 0%, #1a6fa3 100%)',
      color: 'white',
      boxShadow: '0 4px 20px rgba(52, 152, 219, 0.4)',
    },
    accent: {
      background: 'linear-gradient(135deg, #7ED321 0%, #5BA60B 100%)',
      color: '#000000',
      boxShadow: '0 4px 20px rgba(126, 211, 33, 0.4)',
    },
    outline: {
      background: 'transparent',
      color: '#5dade2',
      border: '2px solid #3498db',
    },
  };

  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const buttonClasses = `
    inline-flex items-center justify-center gap-3
    rounded-lg font-bold
    transition-all duration-300
    hover:scale-[1.02]
    ${sizes[size]}
    ${pulse ? 'animate-pulse' : ''}
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={href}
          className={buttonClasses}
          style={variantStyles[variant]}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      style={variantStyles[variant]}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
