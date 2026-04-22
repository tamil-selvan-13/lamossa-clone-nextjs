'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../ui/Button';

const leftQuotes = [
  { text: "Love the flexibility—my brand looks amazing on this template.", author: "Chloe D" },
  { text: "Saved me weeks of work, and the result looks professional.", author: "Ethan J." },
  { text: "The updates and attention to detail are unmatched.", author: "Nora S" },
  { text: "Helped me go live in days, not weeks—highly recommend.", author: "Marcus T" },
];

const rightQuotes = [
  { text: "Clean design, modern feel, and excellent support team.", author: "Sofia L" },
  { text: "Exactly what I needed to kickstart my SaaS project fast.", author: "Leo M." },
  { text: "Beautiful template, easy to customize, and worth every penny.", author: "Amelia R" },
  { text: "Super smooth experience—launched my site in no time!", author: "Daniel K" },
];

const leftRotations = [-8, -4, 0, 4];
const rightRotations = [8, 4, 0, -4];

const avatars = [
  'https://framerusercontent.com/images/IEkAyD8FxrKesSO05azGbu6cOU.jpg',
  'https://framerusercontent.com/images/fTIxNsAqL5kAuPvnKO17blaBlqc.jpg',
  'https://framerusercontent.com/images/IjJa1vBDDNzASjXZGBTLcNObHc.jpg',
  'https://framerusercontent.com/images/b6L3lDYpFTgGEMCn1iAOdSuxsw.jpg',
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section
      id="section-hero"
      className="relative flex flex-col justify-center pt-[180px] pb-[120px] min-h-[90vh] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://framerusercontent.com/images/jIzgWv1ngkkV3oGhfkZy0ymiHU.png?width=114&height=114")',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center top',
            backgroundSize: '32px',
            opacity: 0.15
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-[24px] relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center justify-center gap-[10px] px-[14px] py-[6px] mb-[40px] bg-white text-[#171717] rounded-full text-[14px] font-bold border border-black/[0.08] shadow-sm"
          >
            <div className="relative flex items-center justify-center w-[12px] h-[12px]">
              <div className="absolute inset-0 rounded-full bg-[#16A34A] opacity-20 animate-ping" />
              <div className="relative w-[8px] h-[8px] rounded-full bg-[#16A34A]" />
            </div>
            Open for Work
          </div>

          <h1
            className="text-[64px] font-bold text-[#171717] leading-[1.08] tracking-[-0.04em] max-w-[780px] mx-auto"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Web & Brand Design For Ambitious Founders
          </h1>

          <p
            className="text-[15px] text-[#404040] mt-[20px] mb-[32px] max-w-[450px] w-full mx-auto leading-[1.6]"
          >
            We build conversion-driven websites and marketing that attract, engage, and convert.
          </p>

          <div className="flex flex-row justify-center items-center gap-[14px] mb-[48px]">
            <Button href="/contact-us" variant="dark" showArrow>
              Book A Call
            </Button>
            <Button href="/projects" variant="secondary" className="shadow-[0_4px_12px_rgba(63,63,70,0.1)]">
              View Projects
            </Button>
          </div>

          <div className="flex items-center justify-center gap-[12px]">
            <div className="flex -space-x-[10px]">
              {avatars.map((avatar, i) => (
                <div 
                  key={i} 
                  className="w-[34px] h-[34px] rounded-full border-[1.5px] border-white overflow-hidden relative shadow-sm"
                  style={{ zIndex: i + 1 }}
                >
                  <img src={avatar} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-[1px]">
              <div className="flex items-center gap-[4px]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFA300">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[13px] font-semibold text-[#0c111C]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                From 150+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hidden xl:block absolute left-0 top-[28%] -translate-x-8">
          {leftQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20, rotate: leftRotations[i] }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="absolute bg-white/80 backdrop-blur-md border border-black/5 rounded-[22px] p-5 w-[220px] text-sm shadow-xl"
              style={{ top: `${i * 165}px` }}
            >
              <p className="mb-3 text-[#404040]">"{q.text}"</p>
              <p className="font-medium text-[#171717]">— {q.author}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden xl:block absolute right-0 top-[28%] translate-x-8">
          {rightQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20, rotate: rightRotations[i] }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="absolute bg-white/80 backdrop-blur-md border border-black/5 rounded-[22px] p-5 w-[220px] text-sm shadow-xl"
              style={{ top: `${i * 165}px` }}
            >
              <p className="mb-3 text-[#404040]">"{q.text}"</p>
              <p className="font-medium text-[#171717]">— {q.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}