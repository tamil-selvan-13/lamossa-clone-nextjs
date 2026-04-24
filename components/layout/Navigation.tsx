'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Company', href: '/', hasDropdown: true },
    { name: 'Projects', href: '/', badge: 'New' },
    { name: 'Blog', href: '/' },
    { name: 'About us', href: '/' },
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[12px] xl:hidden pointer-events-auto"
          />
        )}
      </AnimatePresence>

      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[0.16, 1, 0.3, 1] ${
          scrolled ? 'pt-4' : 'pt-6'
        } px-6 md:px-10 flex justify-center pointer-events-none`}
      >
        <motion.nav 
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={`w-full max-w-[1120px] bg-white border border-[#EBECEF] rounded-[32px] shadow-sm pointer-events-auto transition-all duration-500 overflow-hidden ${
            isOpen ? 'max-h-[600px]' : 'max-h-[72px] md:max-h-[80px]'
          }`}
          style={{
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 10px 20px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div className="px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center">
                 <svg width="29" height="19" viewBox="0 0 29.383 18.806" fill="none" className="transition-transform group-hover:scale-105">
                    <path d="M 18.696 0 L 7.808 18.772 L 0 18.772 L 10.887 0 Z M 29.07 0 L 18.696 18.772 L 10.887 18.772 L 21.775 0 Z" fill="#090909" />
                    <path d="M 25.992 12.054 C 27.865 12.054 29.383 13.565 29.383 15.43 C 29.383 17.294 27.865 18.806 25.992 18.806 C 24.119 18.806 22.6 17.294 22.6 15.43 C 12.6 13.565 24.119 12.054 25.992 12.054 Z" fill="#e1443a" />
                  </svg>
              </div>
              <span className="font-bold text-[20px] tracking-tight hidden lg:block" style={{ fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.02em' }}>lamosa</span>
            </Link>

            {/* Desktop Links (Visible above 1200px) */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href} 
                  className="px-4 py-2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#5D636F] transition-colors flex items-center gap-1.5"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  {link.name}
                  {link.badge && (
                    <span className="bg-[#e1443a] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                      {link.badge}
                    </span>
                  )}
                  {link.hasDropdown && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Area (Buttons & Mobile Toggle) */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Get Template Button (Visible on both Desktop and Tablet/Mobile) */}
              <div className="block">
                <Button 
                  href="https://buy.polar.sh/polar_cl_Vh9Iuo4sax2ytsA3hQ7kRDF0JaFPdw9qEYRVb2aO0xL" 
                  variant="dark" 
                  size="sm" 
                  showArrow
                  className="scale-90 md:scale-100 px-4 md:px-6" // Slightly smaller on mobile to save space
                >
                  Get Template
                </Button>
              </div>

              {/* Mobile Toggle (Hamburger) */}
              <button 
                className="flex xl:hidden w-[38px] h-[38px] items-center justify-center rounded-full bg-[#0C111C] text-white transition-transform active:scale-90"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.svg 
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      width="14" height="2" viewBox="0 0 14 2" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path d="M1 1h12"/>
                    </motion.svg>
                  ) : (
                    <motion.div 
                      key="menu"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      className="flex flex-col gap-[4.8px] items-center" // 4.8px gap gives exactly 6px center-to-center for 1.2px lines
                    >
                      <div className="w-[14px] h-[1.2px] bg-current rounded-full" />
                      <div className="w-[10px] h-[1.2px] bg-current rounded-full" />
                      <div className="w-[14px] h-[1.2px] bg-current rounded-full" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Menu Content (Visible below 1200px) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="xl:hidden px-6 pb-8 pt-4 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <Link 
                      key={i} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-[#F9F9F9] transition-colors"
                    >
                      <span className="text-[17px] font-bold text-[#1A1A1A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        {link.name}
                      </span>
                      {link.badge ? (
                        <span className="bg-[#e1443a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                          {link.badge}
                        </span>
                      ) : link.hasDropdown ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5D636F" strokeWidth="2.5">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      ) : null}
                    </Link>
                  ))}
                </div>
                <div className="px-2">
                  <Button 
                    href="https://buy.polar.sh/polar_cl_Vh9Iuo4sax2ytsA3hQ7kRDF0JaFPdw9qEYRVb2aO0xL" 
                    variant="dark"
                    className="w-full justify-between h-[56px] rounded-[18px] text-[17px]"
                    showArrow
                  >
                    Get Template
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
}