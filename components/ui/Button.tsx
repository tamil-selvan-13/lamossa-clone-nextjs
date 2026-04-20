'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'outline';
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

const variantClasses = {
  primary: 'bg-white text-black',
  secondary: 'bg-transparent text-black border border-black/10 hover:bg-black/[0.03]',
  dark: 'bg-[#000000] text-white',
  light: 'bg-white text-black border border-black/10 shadow-sm',
  outline: 'bg-transparent text-white border border-white/10 hover:bg-white/5',
};

export default function Button({
  variant = 'primary',
  children,
  href,
  target,
  rel,
  onClick,
  showArrow = false,
  className = '',
  disabled = false,
}: ButtonProps) {

  const baseStyles = 'inline-flex items-center justify-center px-[26px] py-[11px] text-[14.5px] font-medium rounded-[999px] transition-all duration-[350ms] ease-out select-none cursor-pointer';
  const btnClass = `${baseStyles} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.98 },
  };

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {showArrow && (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
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