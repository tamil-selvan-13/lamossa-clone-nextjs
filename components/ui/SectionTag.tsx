'use client';

import { motion } from 'framer-motion';

interface SectionTagProps {
  text: string;
  color: string;
  className?: string;
}

export default function SectionTag({ text, color, className = '' }: SectionTagProps) {
  // Split the text string into individual characters
  const characters = text.split('');

  // Parent animation variant dictating the stagger behavior
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Child animation variant dictating the individual 5px drop-in physics
  const charVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={`flex items-center gap-2 mb-4 ${className}`}>
      {/* 10x10 geometric tag indicator */}
      <motion.span 
        className="w-[10px] h-[10px] rounded-[2px] shrink-0" 
        style={{ backgroundColor: color }} 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Container housing the letter-by-letter reveal map */}
      <motion.div
        className="text-[14px] font-semibold text-[#000000] uppercase tracking-[0.1em] flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      >
        {characters.map((char, index) => (
          <motion.span key={index} variants={charVariants}>
            {/* Non-breaking space used to correctly render pure space characters */}
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
