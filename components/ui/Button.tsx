'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'dark' | 'light' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: '_blank' | '_self';
  rel?: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'px-[20px] py-[10px] text-[14px]',
  md: 'px-[32px] py-[16px] text-[16px]',
  lg: 'px-[40px] py-[20px] text-[18px]',
};

const variantClasses = {
  dark: 'bg-[#000000] text-white',
  light: 'bg-white text-black border border-[#e5e7eb]',
  outline: 'border border-white/20 text-white hover:bg-white/10',
  gradient: 'bg-gradient-to-r from-white to-gray-200 text-black shadow-sm',
};

export default function Button({
  variant = 'dark',
  size = 'md',
  children,
  href,
  target,
  rel,
  onClick,
  showArrow = false,
  className = '',
  disabled = false,
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-[600ms] ease-out select-none cursor-pointer';
  const btnClass = `${baseStyles} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
  };

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {showArrow && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      )}
    </span>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel || 'noopener noreferrer'}
          className={btnClass}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }
    const MotionLink = motion.create(Link);
    return (
      <MotionLink
        href={href}
        className={btnClass}
        {...motionProps}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={btnClass}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}