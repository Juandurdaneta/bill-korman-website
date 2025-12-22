'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  showArrow = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap';
  
  const variants = {
    primary: 'bg-gradient-to-br from-[#3498db] to-[#1a6fa3] text-white hover:from-[#5dade2] hover:to-[#3498db] hover:shadow-[0_10px_40px_rgba(52,152,219,0.4)]',
    accent: 'bg-gradient-to-br from-[#7ED321] to-[#27ae60] text-black hover:from-[#58d68d] hover:to-[#7ED321] hover:shadow-[0_10px_40px_rgba(46,204,113,0.4)]',
    outline: 'bg-transparent border-2 border-[#5dade2] text-[#85c1e9] hover:bg-[#5dade2]/10 hover:border-[#85c1e9]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <motion.span
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
