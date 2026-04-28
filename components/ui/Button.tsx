'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'outline' | 'premium-dark' | 'premium-light';
  size?: 'sm' | 'md' | 'lg' | 'hero';
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
  primary: 'bg-[#e1443a] text-white hover:bg-[#ea6857]',
  secondary: 'bg-white text-[#0a0a0a] border border-[#ebecef] hover:bg-[#f6f7f8]',
  dark: 'bg-[#010309] text-white hover:bg-[#161d27]',
  light: 'bg-white text-[#0a0a0a] border border-[#ebecef] shadow-sm',
  outline: 'bg-transparent text-[#0a0a0a] border border-[#ebecef] hover:bg-[#f6f7f8]',
  'premium-dark': 'bg-[#030712] text-white shadow-premium-dark hover:brightness-110',
  'premium-light': 'bg-white text-[#0a0a0a] border border-[#ebecef] shadow-sm hover:bg-[#f6f7f8]',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-[14px]',
  md: 'px-6 h-[52px] text-[16px]',
  lg: 'px-8 h-[52px] text-[16px]',
  hero: 'px-8 h-[52px] text-[18px]',
};

export default function Button({
  variant = 'primary',
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
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 select-none cursor-pointer tracking-[-0.02em]';
  const btnClass = `${baseStyles} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const fontStyle = { fontFamily: 'var(--font-satoshi)' };

  const arrowCircle = showArrow && (
    <span className={`flex items-center justify-center w-[26px] h-[26px] rounded-full ml-3 transition-transform duration-300 group-hover:translate-x-1 ${
      (variant === 'dark' || variant === 'premium-dark')
        ? 'bg-[#161d27] border border-[#424b57]' 
        : 'bg-[#f6f7f8] border border-[#ebecef]'
    }`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const content = (
    <span className="flex items-center group">
      <span>{children}</span>
      {arrowCircle}
    </span>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || 'noopener noreferrer'}
          className={btnClass}
          style={fontStyle}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={btnClass}
        style={fontStyle}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={btnClass}
      style={fontStyle}
    >
      {content}
    </button>
  );
}
