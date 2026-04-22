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
  secondary: 'bg-white text-[#0A0A0A] border border-[#EBECEF] hover:bg-[#F9F9F9]',
  dark: 'bg-[#030712] text-white shadow-[0_4px_16px_-6px_rgba(66,75,87,0.2),0_10px_60px_-5px_rgba(41,49,61,0.2),0_60px_100px_-10px_rgba(41,49,61,0.1)]',
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

  const darkShadow = '0px 4px 16px -6px rgba(66, 75, 87, 0.2), 0px 2.3514463744533716px 0.9405785497813484px -0.625px rgba(41, 49, 61, 0.1), 0px 5.573343114665477px 2.22933724586619px -1.25px rgba(41, 49, 61, 0.1), 0px 10.166353931039337px 4.066541572415734px -1.875px rgba(41, 49, 61, 0.09), 0px 16.901543001731625px 6.760617200692648px -2.5px rgba(41, 49, 61, 0.09), 0px 27.294613810739246px 10.917845524295696px -3.125px rgba(41, 49, 61, 0.08), 0px 44.67857465039123px 17.87142986015649px -3.75px rgba(41, 49, 61, 0.07), 0px 76.93348846871523px 30.773395387486083px -4.375px rgba(41, 49, 61, 0.05), 0px 140px 55.999999999999986px -5px rgba(41, 49, 61, 0)';
  const secondaryShadow = '0px 4px 12px 0px rgba(63, 63, 70, 0.15), 0px 1.0077627319085878px 0.6046576391451528px -0.625px rgba(39, 39, 42, 0.05), 0px 2.3885756205709185px 1.4331453723425513px -1.25px rgba(39, 39, 42, 0.05), 0px 4.357008827588287px 2.614205296552973px -1.875px rgba(39, 39, 42, 0.05), 0px 7.2435184293135535px 4.346111057588133px -2.5px rgba(39, 39, 42, 0.04), 0px 11.697691633173964px 7.018614979904379px -3.125px rgba(39, 39, 42, 0.04), 0px 19.147960564453385px 11.488776338672032px -3.75px rgba(39, 39, 42, 0.03), 0px 32.97149505802081px 19.78289703481249px -4.375px rgba(39, 39, 42, 0.02), 0px 60px 36.00000000000001px -5px rgba(39, 39, 42, 0)';

  const baseStyles = 'inline-flex items-center justify-center px-[26px] py-[14px] text-[14px] font-semibold rounded-full transition-all duration-[300ms] ease-out select-none cursor-pointer tracking-[-0.01em] leading-none';
  const btnClass = `${baseStyles} ${variantClasses[variant]} ${className}`;
  const fontStyle = { fontFamily: 'Satoshi, sans-serif' };

  const motionProps = {
    whileHover: { scale: 1.025, y: -1 },
    whileTap: { scale: 0.98, y: 0 },
  };

  const btnStyle = {
    boxShadow: variant === 'dark' ? darkShadow : variant === 'secondary' ? secondaryShadow : undefined
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
            <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
          style={{ ...btnStyle, ...fontStyle }}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link
        href={href}
        className={btnClass}
        style={{ ...btnStyle, ...fontStyle }}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={btnClass}
      style={{ ...btnStyle, ...fontStyle }}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}