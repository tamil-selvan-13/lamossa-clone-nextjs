'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-white">
      <div className="max-w-[1100px] mx-auto px-6 pb-8">
        <div className="bg-white border border-[#ebecef] rounded-[48px] p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-[40px] font-bold mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <span className="text-[#171717]">Trusted by 1,200+ founders.</span>
              <br />
              <span className="text-[#5d636f] font-normal">Turning ideas into bold brands.</span>
            </h2>
            <p className="text-base text-[#404040] mb-8 max-w-lg mx-auto">
              Book a free discovery call to discuss strategy, set goals, and see how we can help you grow.
            </p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white border border-[#ebecef] rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">Open for work</span>
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact-us">Book A Call</Button>
              <Button href="/#section-pricing" variant="light">View Plans</Button>
            </div>
          </div>
        </div>

        <div className="py-8 mb-8">
          <p className="text-center text-xl text-[#737373] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            Trusted by top founders.
          </p>
          <div className="flex justify-center gap-8 flex-wrap opacity-60">
            {['Wave', 'Loop', 'Acme Corp', 'Quantum', 'APEX', 'Celestial'].map((name, i) => (
              <span key={i} className="text-lg font-bold text-[#5d636f]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{name}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-t border-[#ebecef]">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 24L16 8L24 24H18L16 18L14 24H8Z" fill="#090909"/>
                <circle cx="24" cy="8" r="3" fill="#e1443a"/>
              </svg>
              <span className="font-bold text-xl" style={{ fontFamily: 'Satoshi, sans-serif' }}>lamosa</span>
            </Link>
            <p className="text-base font-bold mb-2">Join our newsletter</p>
            <p className="text-sm text-[#737373] mb-4">Get the latest insights delivered to your inbox.</p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="flex-1 bg-white border border-[#ebecef] rounded-l-full px-4 py-2 text-sm outline-none focus:border-[#e1443a] transition-colors"
              />
              <button className="bg-[#e1443a] w-10 h-10 rounded-r-full flex items-center justify-center hover:bg-[#c93830] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <p className="text-base font-bold mb-4">Company</p>
            <ul className="space-y-3">
              <li><Link href="/contact-us" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors">Contact us</Link></li>
              <li><Link href="/" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors flex items-center gap-2">Projects <span className="bg-[#e1443a] text-white text-[10px] px-2 py-0.5 rounded-full">New</span></Link></li>
              <li><Link href="/" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors">About us</Link></li>
              <li><Link href="/" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors flex items-center gap-2">Career <span className="bg-[#e1443a] text-white text-[10px] px-2 py-0.5 rounded-full">Hiring</span></Link></li>
              <li><Link href="/" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors flex items-center gap-2">Blog <span className="bg-[#e1443a] text-white text-[10px] px-2 py-0.5 rounded-full">6</span></Link></li>
            </ul>
          </div>

          <div>
            <p className="text-base font-bold mb-4">Socials</p>
            <ul className="space-y-3">
              <li><Link href="https://x.com/" target="_blank" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors flex items-center gap-2">X (Twitter) <span className="text-[#5d636f]">↗</span></Link></li>
              <li><Link href="https://framer.link/lunixifystudio" target="_blank" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors flex items-center gap-2">Framer <span className="text-[#5d636f]">↗</span></Link></li>
              <li><Link href="https://dribbble.com/" target="_blank" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors flex items-center gap-2">Dribbble <span className="text-[#5d636f]">↗</span></Link></li>
              <li><Link href="https://facebook.com/" target="_blank" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors flex items-center gap-2">Facebook <span className="text-[#5d636f]">↗</span></Link></li>
            </ul>
          </div>

          <div>
            <p className="text-base font-bold mb-4">Legal</p>
            <ul className="space-y-3">
              <li><Link href="/legal-pages/privacy-policy" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors">Privacy policy</Link></li>
              <li><Link href="/legal-pages/terms-of-service" className="text-sm text-[#404040] hover:text-[#e1443a] transition-colors">Terms of services</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-[#ebecef] text-sm text-[#737373]">
          <p>© 2025 Built in Framer by <Link href="https://framer.link/lunixifystudio" className="text-[#171717] hover:text-[#e1443a] transition-colors underline">Lunixify Studio</Link></p>
          <p>© 2025</p>
        </div>

        <div className="relative -mt-32 overflow-hidden pointer-events-none">
          <p className="text-[280px] font-bold text-[#d4d8dd] leading-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            lamosa<span className="text-[#e1443a]">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}