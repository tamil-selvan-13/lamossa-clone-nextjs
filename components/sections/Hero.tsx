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
      className="relative flex flex-col justify-center pt-[140px] pb-10 min-h-screen bg-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: '0.5'
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div 
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-8 bg-[#F3F4F6] text-[#374151] rounded-full text-[14px] font-semibold"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}
          >
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#22C55E] opacity-75 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
              <span className="relative inline-flex rounded-full w-2 h-2 bg-[#22C55E]"></span>
            </div>
            Open for work
          </div>

          <h1 
            className="text-[72px] font-semibold text-[#171717] leading-[1.05] tracking-tight max-w-[900px] mx-auto"
            style={{ fontFamily: 'Satoshi, sans-serif', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.1s' }}
          >
            Web & Brand Design For Ambitious Founders
          </h1>

          <p 
            className="text-lg text-[#404040] mt-8 mb-8 max-w-[480px] w-full mx-auto leading-relaxed"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.2s' }}
          >
            We build conversion-driven websites and marketing that attract, engage, and convert.
          </p>

          <div 
            className="flex flex-row justify-center items-center gap-8 mb-8"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.3s' }}
          >
            <Link 
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#000000] text-white rounded-full px-8 py-4 font-semibold transition hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              Book A Call
            </Link>
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] rounded-full px-8 py-4 font-semibold transition hover:bg-gray-50"
            >
              View Projects
            </Link>
          </div>

          <div
            className="flex items-center justify-center gap-3"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.4s' }}
          >
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative">
                  <img src={avatar} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#161d27">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-[#0c111c]">From 150+ reviews</span>
          </div>
        </div>

        {/* Floating Cards - Desktop Only */}
        <div className="hidden xl:block absolute left-0 top-[28%] -translate-x-8">
          {leftQuotes.map((q, i) => (
            <div
              key={i}
              className="absolute bg-white border border-[#ebecef] rounded-[22px] p-5 w-[220px] text-sm"
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
              className="absolute bg-white border border-[#ebecef] rounded-[22px] p-5 w-[220px] text-sm"
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