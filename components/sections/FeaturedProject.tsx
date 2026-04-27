'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const projects = [
  {
    id: 1,
    title: 'Redesigning Atlas',
    subtitle: '+45% engagement, -20% churn',
    image: '/images/featured_project.png',
  },
  {
    id: 2,
    title: 'Finlytics Dashboard',
    subtitle: 'Streamlining financial data',
    image: '/images/project_1.png',
  },
  {
    id: 3,
    title: 'Orbital Banking',
    subtitle: 'Modernizing fintech',
    image: '/images/project_2.png',
  },
];

const logos = [
  { name: 'Acme Corp', path: 'M13 6.5L13 0L26 6.5L26 19.5L13 26L13 19.5L0 26L0 19.5L13 13L0 6.5L0 0Z M13 6.5L13 19.5L26 13Z' },
  { name: 'Quantum', path: 'M13 26C12.142 26 11.352 25.786 10.63 25.357C9.931 24.951 9.366 24.398 8.938 23.698C8.531 22.976 8.328 22.186 8.328 21.328' },
  { name: 'APEX', path: 'M12 20.849C2.924 28.433 -4.433 21.076 3.151 12C-4.433 2.924 2.924 -4.433 12 3.151' },
  { name: 'Celestial', path: 'M12 12C12 12 13.5 7.983 13.5 5.143C13.5 2.302 12.828 0 12 0' },
];

export default function FeaturedProject() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.05717, 1]);

  return (
    <section className="section-padding bg-[#f4f4f5]">
      <div className="max-content-width">
        <div ref={containerRef} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 1.2 }}
            className="bg-white rounded-[40px] border border-[#ebecef] shadow-xl overflow-hidden"
          >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-8 md:p-10 border-b border-[#ebecef]">
            <div>
              <h3 className="text-[24px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)' }}>
                {projects[activeTab].title}
              </h3>
              <p className="text-[18px] text-[#737373] mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                {projects[activeTab].subtitle}
              </p>
            </div>
            <Button variant="outline" size="md" showArrow>
              View Project
            </Button>
          </div>

          {/* Slideshow Content */}
          <div className="p-6 md:p-8">
            <div className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden border border-[#ebecef]">
              <motion.img
                key={activeTab}
                src={projects[activeTab].image}
                alt={projects[activeTab].title}
                style={{ scale }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-4 mt-8">
              {projects.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setActiveTab(i)}
                  className={`relative w-[120px] aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeTab === i ? 'border-[#e1443a]' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        </div>

        {/* Logo Ticker */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
          <span className="text-[14px] font-bold text-[#737373] whitespace-nowrap" style={{ fontFamily: 'var(--font-inter)' }}>
            Trusted by top founders.
          </span>
          <div className="relative w-full overflow-hidden infinite-marquee">
            <div className="flex items-center gap-16 animate-marquee py-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-16">
                  {logos.map((logo) => (
                    <div key={logo.name} className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" className="text-[#a3a3a3]">
                        <path d={logo.path} fill="currentColor" />
                      </svg>
                      <span className="text-[20px] font-bold text-[#a3a3a3]" style={{ fontFamily: 'var(--font-satoshi)' }}>
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
