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
  sm: 'h-[38px] px-6 text-xs',
  md: 'h-[52px] px-8 text-base',
  lg: 'h-[64px] px-10 text-lg',
};

const variantClasses = {
  dark: 'bg-[#010309] text-white',
  light: 'bg-white text-[#0a0a0a] border border-[#d4d8dd]',
  outline: 'bg-transparent text-[#0a0a0a] border border-[#ebecef]',
  gradient: 'bg-white text-[#0a0a0a]', // Base for gradient, will add gradient styles separately
};

const variantHoverClasses = {
  dark: 'hover:bg-[#161d27]',
  light: 'hover:bg-[#F9F9F9]',
  outline: 'hover:bg-white',
  gradient: 'hover:bg-white', // Will be overridden by gradient hover
};

const variantActiveClasses = {
  dark: 'active:scale-[0.98]',
  light: 'active:scale-[0.98]',
  outline: 'active:scale-[0.98]',
  gradient: 'active:scale-[0.98]',
};

// Custom gradient button class from Uiverse.io - only applied when variant='gradient'
const gradientButtonBase = 'relative overflow-hidden';
const gradientButtonHover = 'before:content-"" before:absolute before:inset-0 before:transform-scaleX-0 before:origin-left before:transition-all before:duration-475 before:hover:transform-scaleX-100';
const gradientButtonBg = 'bg-[linear-gradient(82.3deg,_rgba(150,93,233,1)_10.8%,_rgba(99,88,238,1)_94.3%)] bg-[background-size:400%]';
const gradientButtonText = 'text-white relative z-[1]';

export default function Button({
  variant = 'dark',
  size = 'md',
  children,
  href,
  target,
  rel,
  onClick,
  showArrow = true,
  className = '',
  disabled = false,
}: ButtonProps) {
  // For gradient variant, override showArrow to false unless explicitly set to true
  const shouldShowArrow = variant === 'gradient' ? false : showArrow;

  const baseStyles = `inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full gap-0`;
  const btnClass = `${baseStyles} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const hoverClass = variantHoverClasses[variant];
  const activeClass = variantActiveClasses[variant];

  const arrowBg = variant === 'dark' ? '#161d27' : variant === 'light' ? '#f3f4f6' : variant === 'gradient' ? '#ffffff' : '#ebecef';
  const arrowBorder = variant === 'dark' ? '#424b57' : variant === 'light' ? '#d1d5db' : variant === 'gradient' ? '#ffffff' : '#d4d8dd';
  const arrowStroke = variant === 'dark' ? 'white' : '#030712';

  const sizeMap = { sm: 38, md: 52, lg: 64 };
  const arrowHeight = sizeMap[size];

  const content = (
    <>
      <span className="flex-1 text-center">{children}</span>
      {shouldShowArrow && (
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center flex-shrink-0"
          style={{
            background: arrowBg,
            borderLeft: `1px solid ${arrowBorder}`,
            height: `${arrowHeight}px`,
            width: `${arrowHeight}px`,
          }}
        >
          <motion.svg
            whileHover={{ rotate: 45 }}
            whileTap={{ rotate: 0 }}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={arrowStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </motion.span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      // Handle gradient variant for external links
      if (variant === 'gradient') {
        return (
          <motion.a
            href={href}
            target={target}
            rel={rel || 'noopener noreferrer'}
            // Apply gradient button styles for external links
            className={`${btnClass} ${gradientButtonBase} ${gradientButtonBg} ${gradientButtonText} ${gradientButtonHover} ${hoverClass} ${activeClass}`}
          >
            {content}
          </motion.a>
        );
      }
      // Standard variants for external links
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel || 'noopener noreferrer'}
          className={`${btnClass} ${hoverClass} ${activeClass}`}
        >
          {content}
        </motion.a>
      );
    }
    // Internal link using next/link wrapped with motion
    const MotionLink = motion.create(Link);
    // Handle gradient variant for internal links
    if (variant === 'gradient') {
      return (
        <MotionLink
          href={href}
          // Apply gradient button styles for internal links
          className={`${btnClass} ${gradientButtonBase} ${gradientButtonBg} ${gradientButtonText} ${gradientButtonHover} ${hoverClass} ${activeClass}`}
        >
          {content}
        </MotionLink>
      );
    }
    // Standard variants for internal links
    return (
      <MotionLink
        href={href}
        className={`${btnClass} ${hoverClass} ${activeClass}`}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      // Handle gradient variant for buttons
      className={`${btnClass} ${variant === 'gradient' ? `${gradientButtonBase} ${gradientButtonBg} ${gradientButtonText} ${gradientButtonHover}` : ''} ${hoverClass} ${activeClass}`}
    >
      {content}
    </motion.button>
  );
}