'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import SectionTag from '../ui/SectionTag';

const projects = [
  { name: 'Atlas Technologies', badges: ['UX Design', 'Web Design'], href: '/projects/redesigning-atlas', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' },
  { name: 'Finlytics', badges: ['UI Design', 'Branding'], href: '/projects/launch-mvp-for-finlytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop' },
  { name: 'Orbital Bank', badges: ['Fintech', 'UX Design', 'Web Design'], href: '/projects/orbital-website-redesign', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop' },
  { name: 'Echo Analytics', badges: ['UI Design', 'Motion Design'], href: '/projects/echo-analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop' },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeIn className="py-[120px] bg-[#F9F9F9]">
      <div className="max-w-[1120px] mx-auto px-[24px]" ref={ref}>
        <div className="flex flex-col items-start mb-12">
          <SectionTag text="PROJECTS" color="#FF4D4D" />
          <h2 className="text-[56px] font-black tracking-[-0.04em] text-[#000000] leading-[1.1]">
            Here's what the momentum looks like.
          </h2>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[64px] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                className="group relative bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[40px] overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "circOut" } }}
                layout
              >
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badges.map((badge, j) => (
                        <span key={j} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button href={project.href} variant="light" size="sm" className="w-full">View</Button>
                </div>

                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/projects" variant="light" className="w-full md:w-auto">View All Projects</Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}