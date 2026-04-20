'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

export default function TestimonialCTA() {
  return (
    <section className="pb-[120px] bg-white">
      <div className="max-w-[1100px] mx-auto px-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr,1fr] gap-[24px] items-stretch">
          
          {/* Main Testimonial Card */}
          <FadeIn className="h-full" delay={0.1}>
            <div className="bg-[#F6F6F7] rounded-[32px] p-[40px] h-full flex flex-col justify-between relative overflow-hidden group">
              {/* Decorator Snowflake Icon (Top Right) */}
              <div className="absolute top-8 right-8 opacity-10">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex flex-col">
                    <span className="text-[64px] font-bold leading-none tracking-tight text-black">62%</span>
                    <span className="text-[14px] text-black/50 font-medium uppercase tracking-wider mt-2">increase in mobile traffic retention</span>
                  </div>
                </div>

                <div className="mb-12">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F97316">
                      <path d="M14.017 21L14.017 18C14.017 14.503 16.85 13.017 19.055 12.017C17.43 11.2 16.5 9.017 16.5 7.017C16.5 3.5 19.5 2 22 2V4C21.017 4 18.5 5 18.5 7.017C18.5 8.5 19.5 10.017 22 10.017V12.017C18.5 14.017 16.65 16.5 16.65 19.5V21H14.017ZM1.65 21V18C1.65 14.503 4.483 13.017 6.688 12.017C5.063 11.2 4.133 9.017 4.133 7.017C4.133 3.5 7.133 2 9.633 2V4C8.65 4 6.133 5 6.133 7.017C6.133 8.5 7.133 10.017 9.633 10.017V12.017C6.133 14.017 4.283 16.5 4.283 19.5V21H1.65Z" />
                    </svg>
                  </div>
                  <p className="text-[24px] md:text-[28px] font-semibold text-black leading-[1.3] tracking-tight">
                    "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly."
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-8 border-t border-black/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                    alt="Julian Ortega" 
                    width={48} 
                    height={48} 
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-black leading-none mb-1">Julian Ortega</h4>
                  <p className="text-[14px] text-black/40">CEO</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTA Card (Right) */}
          <FadeIn className="h-full" delay={0.3}>
            <div className="bg-black rounded-[32px] p-[40px] h-full flex flex-col justify-between relative overflow-hidden group">
              {/* Dot Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{
                  backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)',
                  backgroundSize: '16px 16px'
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-[40px] md:text-[44px] font-bold text-white leading-[1.1] tracking-tight mb-8">
                  Can't decide yet? Let's have a free call.
                </h3>
              </div>

              <div className="relative z-10">
                <Button 
                  href="/contact-us" 
                  variant="primary" 
                  className="w-full sm:w-auto"
                  showArrow
                >
                  Book A Call
                </Button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
