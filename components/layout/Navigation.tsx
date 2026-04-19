'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-[100] transition-all duration-300 h-[72px] flex items-center ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
      <div className="w-full max-w-[1136px] mx-auto px-4 md:px-8">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 24L16 8L24 24H18L16 18L14 24H8Z" fill="#090909"/>
              <circle cx="24" cy="8" r="3" fill="#e1443a"/>
            </svg>
            <span className="font-bold text-xl" style={{ fontFamily: 'Satoshi, sans-serif' }}>lamosa</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/" className="px-4 py-2 text-base hover:opacity-75 transition-opacity flex items-center gap-1">
              Company
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </Link>
            <Link href="/" className="px-4 py-2 text-base hover:opacity-75 transition-opacity flex items-center gap-2">
              Projects
              <span className="bg-[#e1443a] text-white text-[10px] px-2 py-0.5 rounded-full">New</span>
            </Link>
            <Link href="/" className="px-4 py-2 text-base hover:opacity-75 transition-opacity">Blog</Link>
            <Link href="/" className="px-4 py-2 text-base hover:opacity-75 transition-opacity">About us</Link>
          </div>

          <div className="hidden md:block">
            <Button href="https://buy.polar.sh/polar_cl_Vh9Iuo4sax2ytsA3hQ7kRDF0JaFPdw9qEYRVb2aO0xL" target="_blank">
              Get Template
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white rounded-[32px] border border-[#ebecef] mt-2 p-4">
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-3 rounded-[19px] text-base hover:bg-[#F9F9F9]">Company</Link>
              <Link href="/" className="px-4 py-3 rounded-[19px] text-base hover:bg-[#F9F9F9] flex items-center gap-2">
                Projects
                <span className="bg-[#e1443a] text-white text-[10px] px-2 py-0.5 rounded-full">New</span>
              </Link>
              <Link href="/" className="px-4 py-3 rounded-[19px] text-base hover:bg-[#F9F9F9]">Blog</Link>
              <Link href="/" className="px-4 py-3 rounded-[19px] text-base hover:bg-[#F9F9F9]">About us</Link>
              <div className="pt-2">
                <Button href="https://buy.polar.sh/polar_cl_Vh9Iuo4sax2ytsA3hQ7kRDF0JaFPdw9qEYRVb2aO0xL" target="_blank" className="w-full">
                  Get Template
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}