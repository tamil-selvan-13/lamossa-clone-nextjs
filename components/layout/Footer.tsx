'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#f4f4f5] pt-12">
      <div className="max-content-width">
        {/* Top Section Card */}
        <div className="bg-white border border-[#ebecef] rounded-[48px] p-10 md:p-[60px] mb-6 shadow-sm">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.05em] leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-satoshi)' }}>
              <span className="text-[#171717]">Trusted by 1,200+ founders.</span><br />
              <span className="text-[#a3a3a3]">Turning ideas into bold brands.</span>
            </h2>
            <p className="text-[18px] text-[#737373] max-w-[600px] mx-auto mb-10 font-medium">
              Book a free discovery call to discuss strategy, set goals, and see how we can help you grow.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <div className="pill-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[#0a0a0a] font-bold">Open for Work</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="dark" size="lg" showArrow>Book A Call</Button>
                <Button variant="outline" size="lg">View Plans</Button>
              </div>
            </div>
          </div>

          {/* Mini Logo Ticker in Footer */}
          <div className="relative w-full overflow-hidden opacity-30">
            <div className="flex items-center gap-16 animate-marquee py-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-16">
                  {['Acme Corp', 'Quantum', 'APEX', 'Celestial'].map((name) => (
                    <span key={name} className="text-[20px] font-bold text-[#171717] uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: 'var(--font-satoshi)' }}>
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <svg width="29" height="19" viewBox="0 0 29.383 18.806" fill="none">
                <path d="M18.696 0L7.808 18.772L0 18.772L10.887 0Z M29.07 0L18.696 18.772L10.887 18.772L21.775 0Z" fill="#090909" />
                <path d="M25.992 12.054 C27.865 12.054 29.383 13.565 29.383 15.43 C29.383 17.294 27.865 18.806 25.992 18.806 C24.119 18.806 22.6 17.294 22.6 15.43 C22.6 13.565 24.119 12.054 25.992 12.054 Z" fill="#e1443a" />
              </svg>
              <span className="text-[24px] font-bold tracking-tight" style={{ fontFamily: 'var(--font-satoshi)' }}>lamosa</span>
            </Link>
            
            <p className="text-[16px] font-bold text-[#171717] mb-4">Join our newsletter</p>
            <div className="flex relative max-w-[300px]">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-white border border-[#ebecef] rounded-full px-6 py-3 text-[14px] outline-none focus:border-[#e1443a] transition-colors shadow-sm"
              />
              <button className="absolute right-1.5 top-1.5 w-10 h-10 bg-[#e1443a] rounded-full flex items-center justify-center text-white hover:bg-[#dc2626] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[16px] font-bold text-[#171717]">Company</p>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium">Contact us</Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium flex items-center gap-2">Projects <span className="px-2 py-0.5 bg-[#e1443a] text-white text-[10px] rounded-full">New</span></Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium">About us</Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium flex items-center gap-2">Career <span className="px-2 py-0.5 bg-[#e1443a] text-white text-[10px] rounded-full">Hiring</span></Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium flex items-center gap-2">Blog <span className="px-2 py-0.5 bg-[#e1443a] text-white text-[10px] rounded-full">6</span></Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[16px] font-bold text-[#171717]">Socials</p>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium flex items-center justify-between">X (Twitter) <span>↗</span></Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium flex items-center justify-between">Framer <span>↗</span></Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium flex items-center justify-between">Dribbble <span>↗</span></Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium flex items-center justify-between">Facebook <span>↗</span></Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[16px] font-bold text-[#171717]">Legal</p>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium">Privacy policy</Link></li>
              <li><Link href="#" className="text-[14px] text-[#737373] hover:text-[#171717] transition-colors font-medium">Terms of services</Link></li>
            </ul>
          </div>
        </div>

        {/* Massive Text Background */}
        <div className="relative mt-12 pb-24 overflow-hidden select-none pointer-events-none">
          <p 
            className="text-[180px] md:text-[280px] font-bold text-[#d4d8dd] leading-none text-center" 
            style={{ 
              fontFamily: 'var(--font-satoshi)',
              maskImage: 'linear-gradient(to top, transparent 15%, black 120%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 15%, black 120%)'
            }}
          >
            lamosa<span className="text-[#e1443a]">.</span>
          </p>
        </div>

        {/* Final Copyright Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 px-8 border-t border-[#ebecef] text-[14px] text-[#737373] font-medium">
          <p>@ 2025 Built in Framer by <Link href="#" className="text-[#171717] underline">Lunixify Studio</Link></p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#171717] transition-colors">Privacy policy</Link>
            <Link href="#" className="hover:text-[#171717] transition-colors">Terms of services</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
