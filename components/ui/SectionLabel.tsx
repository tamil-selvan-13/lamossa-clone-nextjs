'use client';

import React from 'react';

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-[8px] ${className}`}>
      {/* Square Orange Dot */}
      <div className="w-[6px] h-[6px] bg-orange-400 rounded-sm flex-shrink-0" />
      
      {/* Uppercase Label Text */}
      <span className="text-[14px] font-bold tracking-[0.05em] text-black uppercase">
        {label}
      </span>
    </div>
  );
}
