'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

const services = [
  { 
    name: 'Web Design & UX/UI', 
    icon: 'grid',
    body: 'Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions.',
    open: true
  },
  { name: 'No-code Development', icon: 'layers', body: 'Building powerful applications without writing code, using cutting-edge no-code platforms.', open: false },
  { name: 'MVP prototyping', icon: 'code', body: 'Rapid prototyping to validate your ideas and get to market faster.', open: false },
  { name: 'Ongoing Design Partner', icon: 'edit', body: 'Continuous design support and improvements as your business grows.', open: false },
];

const icons: Record<string, JSX.Element> = {
  grid: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5d636f" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  layers: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5d636f" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  code: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5d636f" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  edit: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5d636f" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
};

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="section-services" className="py-[120px] bg-[#F9F9F9]">
      <div className="max-w-[1120px] mx-auto px-[24px]">
        
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-[16px]">
                <span className="w-2 h-2 bg-[#e1443a] rounded-sm" />
                <span className="text-base text-[#404040]">Services</span>
              </div>
              
              <h1 className="text-[40px] font-bold tracking-[-0.05em] text-[#000000] font-sans max-w-[600px] leading-[1.1]">
                From idea to scale. We master our craft.
              </h1>
            </div>

            <Button href="/contact-us" variant="dark">
              Start A Project
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Accordion List */}
          <div className="space-y-3">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[32px] overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer ${openIndex === i ? 'shadow-md' : ''}`}
                >
                  <button
                    className="w-full flex items-center gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  >
                    <span className="w-10 h-10 rounded-full bg-[#F9F9F9] border border-[#d4d8dd] flex items-center justify-center">
                      {icons[service.icon]}
                    </span>
                    <span className="flex-1 text-xl text-[#171717]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                      {service.name}
                    </span>
                    <svg 
                      width="20" height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#5d636f" 
                      strokeWidth="2"
                      className={`transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="bg-[#fcfcfd] border border-[rgba(235,236,239,0.45)] rounded-2xl mx-4 mb-4 p-4 text-base text-[#404040]">
                      {service.body}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="hidden lg:block relative sticky top-24">
              <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[32px] p-4 shadow-lg">
                <div className="aspect-[5/4] relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[24px] overflow-hidden group">
                  <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=640&fit=crop"
                    alt="Service Team"
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}