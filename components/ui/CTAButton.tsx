'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: '_blank' | '_self';
  rel?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function CTAButton({
  children,
  href,
  target,
  rel,
  onClick,
  className = '',
  disabled = false,
}: CTAButtonProps) {
  // Premium pill-shaped CTA with glossy flat design
  const btnClass = `inline-flex items-center justify-center rounded-full font-sans text-[16px] font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] px-[32px] py-[14px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_15px_rgba(139,92,246,0.3)] ring-1 ring-white/10 transition-all duration-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_6px_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 hover:brightness-105 active:scale-95 ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel || 'noopener noreferrer'}
          className={btnClass}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link
        href={href}
        className={btnClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={btnClass}
    >
      {children}
    </motion.button>
  );
}
