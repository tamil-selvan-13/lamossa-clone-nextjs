'use client';

import Image from 'next/image';
import FadeIn from '../ui/FadeIn';

const slides = [
  { name: 'Atlas Technologies', subtitle: 'Redesigning Atlas', badges: ['UX Design', 'Web Design'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop' },
  { name: 'Mobile App Design', subtitle: 'App Development', badges: ['UI Design'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop' },
  { name: 'Brand Identity', subtitle: 'Visual Design', badges: ['Branding'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=675&fit=crop' },
];

export default function FeaturedProject() {
  return (
    <FadeIn className="py-[120px] bg-[#F9F9F9]">
      <div className="max-w-[1120px] mx-auto px-[24px]">
        <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[64px] p-6">
          <div className="relative aspect-[16/9] bg-gray-100 rounded-[40px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <Image
              src={slides[0].image}
              alt={slides[0].name}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8">
              <p className="text-sm text-white/80 mb-2">{slides[0].subtitle}</p>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {slides[0].name}
              </h3>
              <div className="flex gap-2 mt-3">
                {slides[0].badges.map((badge, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#e1443a] w-6' : 'bg-[#d4d8dd]'}`} />
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}