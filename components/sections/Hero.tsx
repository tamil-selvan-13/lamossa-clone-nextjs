'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import CTAButton from '../ui/CTAButton';

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
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="section-hero"
      className="relative flex flex-col justify-center pt-[180px] pb-[120px] min-h-[90vh] overflow-hidden"
    >
      {/* Background Layer Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Background Layer */}
        <div className="absolute inset-0 bg-white" />
        {/* Pattern Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://framerusercontent.com/images/jIzgWv1ngkkV3oGhfkZy0ymiHU.png?width=114&height=114")',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center top',
            backgroundSize: '32px',
            opacity: 0.35 // Subtle pattern
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-[24px] relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center justify-center gap-[10px] px-[14px] py-[6px] mb-[40px] bg-white text-[#171717] rounded-full text-[14px] font-bold border border-black/[0.08] shadow-[0_4px_16px_-6px_rgba(66,75,87,0.2),0_2px_1px_-0.625px_rgba(41,49,61,0.1)]"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}
          >
            <div className="relative flex items-center justify-center w-[12px] h-[12px]">
              <div className="absolute inset-0 rounded-full bg-[#16A34A] opacity-20 animate-ping" />
              <div className="relative w-[8px] h-[8px] rounded-full bg-[#16A34A]" />
            </div>
            Open for Work
          </div>

          <h1
            className="text-[64px] font-bold text-[#171717] leading-[1.08] tracking-[-0.04em] max-w-[780px] mx-auto"
            style={{ fontFamily: 'Satoshi, sans-serif', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.1s' }}
          >
            Web & Brand Design For Ambitious Founders
          </h1>

          <p
            className="text-[15px] text-[#404040] mt-[20px] mb-[32px] max-w-[450px] w-full mx-auto leading-[1.6]"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.2s' }}
          >
            We build conversion-driven websites and marketing that attract, engage, and convert.
          </p>

          <div
            className="flex flex-row justify-center items-center gap-[14px] mb-[48px]"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.3s' }}
          >
            <Button href="/contact-us" variant="dark" showArrow>
              Book A Call
            </Button>
            <Button href="/projects" variant="secondary" className="bg-white border-[#EBECEF] hover:bg-gray-50 shadow-[0_4px_12px_rgba(63,63,70,0.1)]">
              View Projects
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-[24px]"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.4s' }}
          >
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div key={i} className="w-[34px] h-[34px] rounded-full border-[1.5px] border-white overflow-hidden relative shadow-sm">
                  <img src={avatar} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFA300">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[13.5px] font-bold text-[#0c111c] tracking-tight">From 150+ reviews</span>
            </div>
          </div>
        </div>

        {/* Floating Cards - Desktop Only */}
        <div className="hidden xl:block absolute left-0 top-[28%] -translate-x-8">
          {leftQuotes.map((q, i) => (
            <div
              key={i}
              className="absolute bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[22px] p-5 w-[220px] text-sm"
              style={{
                transform: `rotate(${leftRotations[i]}deg)`,
                top: `${i * 165}px`,
                left: '0px',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease ${0.5 + i * 0.1}s`,
              }}
            >
              <p className="mb-3 text-[#404040]">"{q.text}"</p>
              <p className="font-medium text-[#171717]">— {q.author}</p>
            </div>
          ))}
        </div>

        <div className="hidden xl:block absolute right-0 top-[28%] translate-x-8">
          {rightQuotes.map((q, i) => (
            <div
              key={i}
              className="absolute bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[22px] p-5 w-[220px] text-sm"
              style={{
                transform: `rotate(${rightRotations[i]}deg)`,
                top: `${i * 165}px`,
                right: '0px',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease ${0.5 + i * 0.1}s`,
              }}
            >
              <p className="mb-3 text-[#404040]">"{q.text}"</p>
              <p className="font-medium text-[#171717]">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}