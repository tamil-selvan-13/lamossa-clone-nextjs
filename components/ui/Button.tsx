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
  primary: 'bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5',
  secondary: 'bg-transparent text-black border border-black/10 hover:bg-black/[0.03]',
  dark: 'bg-[#030712] text-white shadow-[0_4px_16px_-6px_rgba(66,75,87,0.2),0_10px_40px_-5px_rgba(41,49,61,0.09)]',
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

  const baseStyles = 'inline-flex items-center justify-center px-[22px] py-[10px] text-[14.5px] font-semibold rounded-full transition-all duration-[350ms] ease-out select-none cursor-pointer';
  const btnClass = `${baseStyles} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.025, y: -1 },
    whileTap: { scale: 0.98, y: 0 },
  };

  const content = (
    <span className="flex items-center gap-[10px]">
      <span className="leading-none">{children}</span>
      {showArrow && (
        <span className={`flex items-center justify-center w-[22px] h-[22px] rounded-full transition-colors ${
          variant === 'dark' 
            ? 'bg-[#161D27] border border-[#424B57]' 
            : 'bg-black/5 border border-black/10'
        }`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
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