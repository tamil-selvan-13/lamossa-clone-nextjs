'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  useSection?: boolean;
}

export default function FadeIn({ children, className = '', delay = 0, useSection = false }: FadeInProps) {
  const Component = useSection ? motion.section : motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.2, 0.8, 0.2, 1] 
      }}
    >
      {children}
    </Component>
  );
}