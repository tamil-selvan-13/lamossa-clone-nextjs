'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Company', href: '#', hasDropdown: true },
    { name: 'Projects', href: '#', badge: 'New' },
    { name: 'Blog', href: '#' },
    { name: 'About us', href: '#' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 66, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 pt-6 px-8 flex justify-center pointer-events-none"
    >
      <nav className={`w-full max-w-[1136px] border rounded-[32px] px-4 py-3 flex items-center justify-between pointer-events-auto transition-all duration-500 ${
        scrolled 
        ? 'bg-white border-[#ebecef] shadow-md' 
        : 'bg-white border-[#ebecef] shadow-none'
      }`}>
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          <svg width="29" height="19" viewBox="0 0 29.383 18.806" fill="none">
            <path d="M18.696 0L7.808 18.772L0 18.772L10.887 0Z M29.07 0L18.696 18.772L10.887 18.772L21.775 0Z" fill="#090909" />
            <path d="M25.992 12.054 C27.865 12.054 29.383 13.565 29.383 15.43 C29.383 17.294 27.865 18.806 25.992 18.806 C24.119 18.806 22.6 17.294 22.6 15.43 C22.6 13.565 24.119 12.054 25.992 12.054 Z" fill="#e1443a" />
          </svg>
          <span className="text-[20px] font-bold tracking-tight" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.02em' }}>lamosa</span>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative flex items-center gap-1.5 px-3 py-2 rounded-[19px] hover:bg-[#f6f7f8] text-[#0a0a0a] text-[16px] font-medium transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {link.name}
              {link.badge && (
                <span className="bg-[#e1443a] text-white rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {link.badge}
                </span>
              )}
              {link.hasDropdown && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button variant="dark" size="sm" showArrow className="rounded-full">
              Get Template
            </Button>
          </div>
          
          {/* Mobile Menu Toggle - Hamburger Inverted */}
          <button 
            className="w-[44px] h-[44px] flex flex-col items-center justify-center gap-[4.5px] bg-[#0c111c] rounded-full text-white transition-transform active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
            <span className={`w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-[20px] font-bold">lamosa</span>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center bg-[#f6f7f8] rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-[32px] font-bold tracking-tight" style={{ fontFamily: 'var(--font-satoshi)' }}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Button variant="dark" size="lg" className="w-full" showArrow>
                Get Template
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
