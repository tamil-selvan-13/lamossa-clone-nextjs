'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const leftQuotes = [
  { text: "Love the flexibility—my brand looks amazing on this template.", author: "Chloe D", rotation: -8 },
  { text: "Saved me weeks of work, and the result looks professional.", author: "Ethan J.", rotation: -4 },
  { text: "The updates and attention to detail are unmatched.", author: "Nora S", rotation: 0, featured: true },
  { text: "Helped me go live in days, not weeks—highly recommend.", author: "Marcus T", rotation: 4 },
  { text: "Clean design, modern feel, and excellent support team.", author: "Sofia L", rotation: 8 },
];

const rightQuotes = [
  { text: "Exactly what I needed to kickstart my SaaS project fast.", author: "Leo M.", rotation: 8 },
  { text: "Beautiful template, easy to customize, and worth every penny.", author: "Amelia R", rotation: 4 },
  { text: "Super smooth experience—launched my site in no time!", author: "Daniel K", rotation: 0, featured: true },
  { text: "The best investment for my startup's landing page.", author: "Sarah W.", rotation: -4 },
  { text: "Incredible attention to detail in every component.", author: "James P.", rotation: -8 },
];

const avatars = [
  'https://framerusercontent.com/images/IEkAyD8FxrKesSO05azGbu6cOU.jpg',
  'https://framerusercontent.com/images/fTIxNsAqL5kAuPvnKO17blaBlqc.jpg',
  'https://framerusercontent.com/images/IjJa1vBDDNzASjXZGBTLcNObHc.jpg',
  'https://framerusercontent.com/images/b6L3lDYpFTgGEMCn1iAOdSuxsw.jpg',
];

const QuoteCard = ({ quote, index, side }: { quote: any, index: number, side: 'left' | 'right' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      type: 'spring', 
      stiffness: 66, 
      damping: 20, 
      delay: 2.2 + index * 0.1 
    }}
    className={`absolute w-[222px] p-[22px] bg-white border border-[#ebecef] rounded-[24px] shadow-sm ${quote.featured ? 'z-10 shadow-xl' : 'z-0'}`}
    style={{ 
      rotate: `${quote.rotation}deg`,
      [side]: '-95px',
      top: `${index * 130}px`,
      willChange: 'transform'
    }}
  >
    <div className="flex flex-col gap-3">
      <svg width="14" height="12" viewBox="0 0 16 16" fill="none" className="text-[#a3a3a3]">
        <path d="M5.333 0L4 3.333H0V11.333H7.333V3.333H6L7.333 0H5.333ZM13.333 0L12 3.333H8V11.333H15.333V3.333H14L15.333 0H13.333Z" fill="currentColor" />
      </svg>
      <p className="text-[12px] leading-relaxed text-[#737373]" style={{ fontFamily: 'var(--font-inter)' }}>
        {quote.text}
      </p>
      <p className="text-[12px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-inter)' }}>
        {quote.author}
      </p>
    </div>
  </motion.div>
);

const AnimatedText = ({ text }: { text: string }) => {
  const characters = Array.from(text);
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 50, 
            damping: 20, 
            delay: 0.4 + i * 0.02 
          }}
          className={char === ' ' ? 'mr-[0.25em]' : ''}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-[140px] pb-[40px] overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-content-width relative flex flex-col items-center">
        {/* Floating Cards - Desktop Only */}
        <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-[300px]" style={{ maskImage: 'linear-gradient(0deg, transparent 10%, black 38%, black 62%, transparent 90%)' }}>
          {leftQuotes.map((q, i) => (
            <QuoteCard key={i} quote={q} index={i} side="left" />
          ))}
        </div>
        
        <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[300px]" style={{ maskImage: 'linear-gradient(0deg, transparent 10%, black 38%, black 62%, transparent 90%)' }}>
          {rightQuotes.map((q, i) => (
            <QuoteCard key={i} quote={q} index={i} side="right" />
          ))}
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 66, damping: 20 }}
            className="pill-badge mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[#0a0a0a] font-bold">Open for Work</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1, mass: 2 }}
            className="text-[48px] md:text-[64px] font-bold text-[#171717] leading-[1.1] tracking-[-0.05em] max-w-[800px] mb-6 text-wrap-balance"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Web & Brand Design For Ambitious Founders
          </motion.h1>

          {/* Subtext */}
          <div className="text-[18px] text-[#404040] max-w-[500px] mb-10 leading-relaxed font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
            <AnimatedText text="We build conversion-driven websites and marketing that attract, engage, and convert." />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.8 }}
            >
              <Button variant="premium-dark" size="lg" showArrow href="/contact-us">
                Book A Call
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.9 }}
            >
              <Button variant="premium-light" size="lg" href="/projects">
                View Projects
              </Button>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 1.0 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt="Reviewer"
                  className="w-[34px] h-[34px] rounded-full border-[1.5px] border-white object-cover"
                />
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 text-[#FFA300]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[12px] font-bold text-[#171717]">From 150+ reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
