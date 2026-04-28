'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const CARD_SHADOW = 'rgba(161, 161, 170, 0.15) 0px 4px 16px -6px, rgba(161, 161, 170, 0.05) 0px 4.03105px 1.61242px -0.625px, rgba(161, 161, 170, 0.05) 0px 9.5543px 3.82172px -1.25px, rgba(161, 161, 170, 0.05) 0px 17.428px 6.97121px -1.875px, rgba(161, 161, 170, 0.04) 0px 28.9741px 11.5896px -2.5px, rgba(161, 161, 170, 0.04) 0px 46.7908px 18.7163px -3.125px, rgba(161, 161, 170, 0.03) 0px 76.5918px 30.6367px -3.75px, rgba(161, 161, 170, 0.02) 0px 131.886px 52.7544px -4.375px, rgba(161, 161, 170, 0) 0px 240px 96px -5px';

const projects = [
  {
    id: 1,
    title: 'Orbital Website Redesign',
    subtitle: '+21% signup conversion rate',
    image: 'https://framerusercontent.com/images/zvQ7tedi7AxHplgmospF42dcjQo.png',
    href: '/projects/orbital-website-redesign'
  },
  {
    id: 2,
    title: 'Redesigning Atlas',
    subtitle: '+45% engagement, -20% churn',
    image: 'https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg',
    href: '/projects/redesigning-atlas'
  },
  {
    id: 3,
    title: 'Launch MVP for Finlytics',
    subtitle: 'Live in 27 days, 1,200+ early users',
    image: 'https://framerusercontent.com/images/5kd7Hmen8Zb7gfwj1BZyuA0ko.png',
    href: '/projects/launch-mvp-for-finlytics'
  },
];

const logos = [
  // 1. Pure SVG
  { id: 'logo-1', type: 'svg', viewBox: '0 0 56 22', paths: [
    { d: 'M 13.293 0 C 11.097 0.004 8.994 0.893 7.462 2.467 L 2.415 7.622 C 0.863 9.215 -0.004 11.353 0 13.577 C 0 18.23 3.692 22 8.246 22 C 10.442 21.996 12.544 21.106 14.076 19.533 L 17.567 15.967 L 27.74 5.578 C 28.471 4.827 29.475 4.402 30.523 4.4 C 32.272 4.4 33.755 5.564 34.269 7.175 L 37.479 3.896 C 36.013 1.553 33.445 0 30.522 0 C 28.326 0.004 26.224 0.894 24.692 2.467 L 11.03 16.422 C 10.298 17.173 9.295 17.598 8.246 17.6 C 6.071 17.6 4.308 15.8 4.308 13.577 C 4.308 12.511 4.723 11.487 5.461 10.733 L 10.508 5.578 C 11.24 4.826 12.244 4.402 13.293 4.4 C 15.041 4.4 16.523 5.564 17.038 7.175 L 20.248 3.896 C 18.783 1.553 16.216 0 13.293 0 Z', color: 'rgb(93, 99, 111)' },
    { d: 'M 28.261 16.422 C 27.529 17.174 26.525 17.598 25.476 17.6 C 23.728 17.6 22.246 16.436 21.731 14.826 L 18.521 18.104 C 19.986 20.447 22.555 22 25.477 22 C 27.673 21.996 29.776 21.107 31.308 19.533 L 44.969 5.578 C 45.701 4.826 46.705 4.402 47.754 4.4 C 49.929 4.4 51.692 6.2 51.692 8.423 C 51.692 9.489 51.277 10.513 50.539 11.267 L 45.492 16.422 C 44.76 17.174 43.756 17.598 42.707 17.6 C 40.959 17.6 39.477 16.436 38.962 14.825 L 35.752 18.104 C 37.217 20.447 39.784 22 42.707 22 C 44.903 21.996 47.005 21.106 48.537 19.533 L 53.584 14.378 C 55.136 12.785 56.003 10.647 56 8.423 C 56 3.77 52.308 0 47.754 0 C 45.558 0.004 43.456 0.894 41.924 2.467 L 28.26 16.422 Z', color: 'rgb(93, 99, 111)' }
  ], width: 56 },
  // 2. Pure SVG
  { id: 'logo-2', type: 'svg', viewBox: '0 0 88 20', paths: [
    { d: 'M 7.5 14 C 6.119 14 5 12.881 5 11.5 L 5 0 L 0 0 L 0 11.5 C 0 15.642 3.358 19 7.5 19 L 13 19 L 13 14 Z M 22.5 5 C 20.015 5 18 7.015 18 9.5 C 18 11.985 20.015 14 22.5 14 C 24.985 14 27 11.985 27 9.5 C 27 7.015 24.985 5 22.5 5 Z M 13 9.5 C 13 4.254 17.254 0 22.5 0 C 27.746 0 32 4.254 32 9.5 C 32 14.746 27.746 19 22.5 19 C 17.254 19 13 14.746 13 9.5 Z M 76.5 5 C 74.015 5 72 7.015 72 9.5 C 72 11.985 74.015 14 76.5 14 C 78.985 14 81 11.985 81 9.5 C 81 7.015 78.985 5 76.5 5 Z M 67 9.5 C 67 4.254 71.254 0 76.5 0 C 81.746 0 86 4.254 86 9.5 C 86 14.746 81.746 19 76.5 19 C 71.254 19 67 14.746 67 9.5 Z M 42.5 0 C 37.254 0 33 4.254 33 9.5 C 33 14.746 37.254 19 42.5 19 L 56.5 19 C 57.484 19 58.434 18.85 59.327 18.572 L 62 20 L 64.884 14.598 C 65.617 13.223 66 11.689 66 10.13 L 66 9.5 C 66 4.254 61.746 0 56.5 0 Z M 61 9.5 C 61 7.015 58.985 5 56.5 5 L 42.5 5 C 40.015 5 38 7.015 38 9.5 C 38 11.985 40.015 14 42.5 14 L 56.5 14 C 58.972 14 60.981 12.007 61 9.535 Z', color: 'rgb(93, 99, 111)' },
    { d: 'M 88 1.25 C 88 1.94 87.44 2.5 86.75 2.5 C 86.06 2.5 85.5 1.94 85.5 1.25 C 85.5 0.56 86.06 0 86.75 0 C 87.44 0 88 0.56 88 1.25 Z', color: 'rgb(93, 99, 111)' }
  ], width: 88 },
  // 3. Acme Corp
  { id: 'logo-3', type: 'text', text: 'Acme Corp', font: 'Satoshi, sans-serif', viewBox: '0 0 26 26', paths: [
    { d: 'M 13 6.5 L 13 0 L 26 6.5 L 26 19.5 L 13 26 L 13 19.5 L 0 26 L 0 19.5 L 13 13 L 0 6.5 L 0 0 Z M 13 6.5 L 13 19.5 L 26 13 Z', color: 'rgb(93, 99, 111)' }
  ], width: 26 },
  // 4. Quantum
  { id: 'logo-4', type: 'text', text: 'Quantum', font: 'Switzer, sans-serif', viewBox: '0 0 26 26', paths: [
    { d: 'M 13 26 C 12.142 26 11.352 25.786 10.63 25.357 C 9.931 24.951 9.366 24.398 8.938 23.698 C 8.531 22.976 8.328 22.186 8.328 21.328 C 8.328 20.245 8.576 19.342 9.073 18.62 C 9.57 17.898 10.337 17.051 11.375 16.081 C 12.142 15.381 12.526 14.715 12.526 14.083 L 12.526 13.474 L 11.917 13.474 C 11.217 13.474 10.258 14.174 9.039 15.573 C 7.843 16.972 6.387 17.672 4.672 17.672 C 3.814 17.672 3.024 17.469 2.302 17.063 C 1.602 16.634 1.038 16.069 0.609 15.37 C 0.203 14.648 0 13.858 0 13 C 0 12.142 0.203 11.364 0.609 10.664 C 1.038 9.942 1.602 9.378 2.302 8.971 C 3.024 8.542 3.814 8.328 4.672 8.328 C 6.365 8.328 7.809 9.017 9.005 10.393 C 10.201 11.77 11.172 12.458 11.917 12.458 L 12.526 12.458 L 12.526 11.917 C 12.526 11.285 12.142 10.619 11.375 9.919 L 10.596 9.208 C 10.032 8.689 9.513 8.069 9.039 7.346 C 8.565 6.602 8.328 5.71 8.328 4.672 C 8.328 3.814 8.531 3.036 8.938 2.336 C 9.366 1.614 9.931 1.049 10.63 0.643 C 11.353 0.214 12.143 0 13 0 C 13.858 0 14.636 0.214 15.336 0.643 C 16.058 1.072 16.622 1.636 17.029 2.336 C 17.457 3.036 17.672 3.814 17.672 4.672 C 17.672 6.365 16.983 7.809 15.607 9.005 C 14.23 10.201 13.542 11.172 13.542 11.917 L 13.542 12.458 L 14.083 12.458 C 14.851 12.458 15.821 11.77 16.995 10.393 C 18.146 9.017 19.59 8.328 21.328 8.328 C 22.186 8.328 22.964 8.543 23.664 8.971 C 24.386 9.378 24.951 9.931 25.357 10.63 C 25.786 11.33 26 12.12 26 13 C 26 13.858 25.786 14.648 25.357 15.37 C 24.951 16.069 24.386 16.634 23.664 17.063 C 22.964 17.469 22.186 17.672 21.328 17.672 C 20.267 17.672 19.353 17.412 18.586 16.893 C 17.841 16.374 17.006 15.618 16.081 14.625 C 15.381 13.858 14.715 13.474 14.083 13.474 L 13.542 13.474 L 13.542 14.083 C 13.542 14.918 14.23 15.889 15.607 16.995 C 16.983 18.101 17.672 19.545 17.672 21.328 C 17.672 22.186 17.457 22.976 17.029 23.698 C 16.622 24.398 16.069 24.951 15.37 25.357 C 14.67 25.786 13.88 26 13 26 Z', color: 'rgb(93, 99, 111)' }
  ], width: 26 },
  // 5. APEX
  { id: 'logo-5', type: 'text', text: 'APEX', font: 'Chillax, sans-serif', viewBox: '0 0 24 24', paths: [
    { d: 'M 12 20.849 C 2.924 28.433 -4.433 21.076 3.151 12 C -4.433 2.924 2.924 -4.433 12 3.151 C 21.075 -4.433 28.433 2.924 20.849 12 C 28.433 21.069 21.075 28.433 12 20.849 Z', color: 'rgb(93, 99, 111)' }
  ], width: 24 },
  // 6. Celestial
  { id: 'logo-6', type: 'text', text: 'Celestial', font: 'Satoshi, sans-serif', viewBox: '0 0 24 24', paths: [
    { d: 'M 12 12 C 12 12 13.5 7.983 13.5 5.143 C 13.5 2.302 12.828 0 12 0 C 11.172 0 10.5 2.303 10.5 5.143 C 10.5 7.983 12 12 12 12 Z M 12 12 C 12 12 13.78 15.901 15.788 17.909 C 17.796 19.918 19.899 21.071 20.485 20.485 C 21.071 19.899 19.918 17.796 17.909 15.788 C 15.901 13.78 12 12 12 12 Z M 12 12 C 12 12 16.017 10.5 18.857 10.5 C 21.697 10.5 24 11.172 24 12 C 24 12.828 21.697 13.5 18.857 13.5 C 16.017 13.5 12 12 12 12 Z M 12 12 C 12 12 8.099 13.78 6.091 15.788 C 4.082 17.796 2.929 19.899 3.515 20.485 C 4.101 21.071 6.204 19.918 8.212 17.909 C 10.22 15.901 12 12 12 12 Z M 12 12 C 12.003 12.009 13.5 16.02 13.5 18.857 C 13.5 21.697 12.828 24 12 24 C 11.172 24 10.5 21.697 10.5 18.857 C 10.5 16.017 12 12 12 12 Z M 12 12 C 12 12 7.983 10.5 5.143 10.5 C 2.302 10.5 0 11.172 0 12 C 0 12.828 2.303 13.5 5.143 13.5 C 7.983 13.5 12 12 12 12 Z M 12 12 C 12 12 15.901 10.22 17.909 8.212 C 19.918 6.204 21.071 4.101 20.485 3.515 C 19.899 2.929 17.796 4.082 15.788 6.091 C 13.78 8.099 12 12 12 12 Z M 8.212 6.091 C 10.22 8.099 12 12 12 12 C 12 12 8.099 10.22 6.091 8.212 C 4.082 6.204 2.929 4.1 3.515 3.515 C 4.101 2.929 6.204 4.082 8.212 6.091 Z', color: 'rgb(93, 99, 111)' }
  ], width: 24 },
  // 7. Pure SVG
  { id: 'logo-7', type: 'svg', viewBox: '0 0 48 32', paths: [
    { d: 'M 24.11 27.604 C 28.063 25.062 30.675 20.673 30.675 15.684 C 30.675 10.694 28.063 6.305 24.11 3.764 C 20.195 6.305 17.609 10.694 17.609 15.684 C 17.609 20.673 20.195 25.062 24.109 27.604 Z', color: 'rgb(66, 75, 87)' },
    { d: 'M 30.675 15.684 C 30.675 20.672 28.063 25.062 24.11 27.603 C 26.364 29.067 29.058 29.918 31.953 29.918 C 39.875 29.918 46.297 23.545 46.297 15.684 L 46.299 15.684 C 46.299 7.822 39.876 1.449 31.954 1.449 C 29.059 1.449 26.364 2.3 24.11 3.764 C 28.063 6.306 30.675 10.695 30.675 15.684 Z M 16.189 29.918 C 8.189 29.918 1.702 23.545 1.702 15.684 C 1.702 7.822 8.188 1.449 16.189 1.449 C 19.112 1.449 21.834 2.3 24.11 3.764 C 20.196 6.306 17.61 10.695 17.61 15.684 C 17.61 20.672 20.196 25.062 24.11 27.603 C 21.833 29.067 19.112 29.918 16.189 29.918 Z', color: 'rgb(93, 99, 111)' }
  ], width: 48 },
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
            className="bg-white rounded-[40px] border border-[#ebecef] overflow-hidden"
            style={{ boxShadow: CARD_SHADOW }}
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
            <Button variant="premium-light" size="md" showArrow href={projects[activeTab].href}>
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
                  className={`relative w-[120px] aspect-[3/2] rounded-[24px] overflow-hidden transition-all duration-300 ${
                    activeTab === i 
                      ? 'border-[1.4px] border-[#f6f7f8] opacity-100' 
                      : 'border-2 border-transparent opacity-60 hover:opacity-80'
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
          <div className="relative flex-grow overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)' }}>
            <div className="flex w-max items-center animate-marquee">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {logos.map((logo) => (
                    <div key={logo.id} className="flex-shrink-0 px-[20px] flex items-center justify-center gap-[12px]">
                      <div className="flex items-center justify-center" style={{ width: logo.width, height: 24 }}>
                        <svg width="100%" height="100%" viewBox={logo.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                          {logo.paths.map((p, j) => (
                            <path key={j} d={p.d} fill={p.color} />
                          ))}
                        </svg>
                      </div>
                      {logo.type === 'text' && (
                        <span 
                          className="text-[18px] font-bold tracking-tight"
                          style={{ color: 'rgb(93, 99, 111)', fontFamily: logo.font }}
                        >
                          {logo.text}
                        </span>
                      )}
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
