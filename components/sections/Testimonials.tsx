'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';

const testimonials = [
  { stat: '2.3×', subtitle: 'increase in lead conversion', quote: 'Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly.', name: 'Sarah Coleman', role: 'CMO', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
  { stat: '45%', subtitle: 'Reduced bounce rate', quote: 'The team at Lamosa not only built us a beautiful platform—they made it fast, smart, and incredibly intuitive.', name: 'Marcus Levine', role: 'Co-founder', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { stat: '3x', subtitle: 'faster MVP launch', quote: 'Working with Lamosa helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision.', name: 'Amina Khatri', role: 'Head of Product', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { stat: '62%', subtitle: 'increase in mobile traffic retention', quote: 'Lamosa completely redefined our digital presence. Their strategic design approach boosted our conversion rate significantly.', name: 'Julian Ortega', role: 'CEO', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeIn className="py-[160px] bg-[#F9F9F9]">
      <div className="max-w-[1240px] mx-auto px-[24px]" ref={ref}>
        <div className="flex flex-col items-start mb-16">
          {/* Framer motion wrapper configured specifically for the requested 20px slide distance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* The Tag */}
            <SectionLabel label="TESTIMONIALS" />
            
            {/* The Main Title */}
            <h1 className="text-[48px] md:text-[56px] font-bold mb-6 font-sans leading-[1.05] tracking-[-0.04em] text-black mt-4">
              We're loved. <br />
              <span className="text-black/30">Just success stories.</span>
            </h1>
          </motion.div>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[64px] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-effect rounded-[40px] p-8"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${i * 0.15}s`,
                }}
              >
                <p className="text-3xl font-bold text-[#171717] mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{t.stat}</p>
                <p className="text-xl text-[#5d636f] mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>{t.subtitle}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#e1443a" className="mb-4">
                  <path d="M4 12h8v8H4v-8zm10 0h8v8h-8v-8z"/>
                </svg>
                <p className="text-base text-[#404040] mb-4">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full relative overflow-hidden bg-gray-200">
                    <Image src={t.avatar} alt={t.name} fill unoptimized className="object-cover" />
                  </div>
                  <div>
                    <p className="text-base text-[#404040]">{t.name}</p>
                    <p className="text-sm text-[#737373]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#010309] border border-[#0c111c] rounded-[40px] p-6">
            <div className="text-center mb-8">
              <p className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                You focus on your company.<br/>
                <span className="text-[#737373]">We make it happen.</span>
              </p>
              <p className="text-2xl text-[#e1443a] font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>Unstoppable Growth.</p>
            </div>
            <div className="text-center">
              <Button href="/contact-us" variant="dark" showArrow>Book A Call</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button href="https://www.trustpilot.com/" target="_blank" variant="light" showArrow>View All Reviews</Button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />)}
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#161d27"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <span className="text-xs text-[#0c111c]">From 150+ reviews</span>
        </div>
      </div>
    </FadeIn>
  );
}