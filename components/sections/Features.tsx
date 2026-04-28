'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const projects = [
  {
    title: "Orbital Website Redesign",
    metric: "+21% signup conversion rate",
    href: "/projects/orbital-website-redesign",
    image: "https://framerusercontent.com/images/zvQ7tedi7AxHplgmospF42dcjQo.png"
  },
  {
    title: "Redesigning Atlas",
    metric: "+45% engagement, -20% churn",
    href: "/projects/redesigning-atlas",
    image: "https://framerusercontent.com/images/vdtm4vbMi9SyPgj2Z1bVuq9b2o.png"
  },
  {
    title: "Launch MVP for Finlytics",
    metric: "Live in 27 days, 1,200+ early users",
    href: "/projects/launch-mvp-for-finlytics",
    image: "https://framerusercontent.com/images/5kd7Hmen8Zb7gfwj1BZyuA0ko.png"
  }
];

const SLIDE_DURATION = 6000;

// Exact box-shadow from framer-1w3bqzu
const CARD_SHADOW = 'rgba(161, 161, 170, 0.15) 0px 4px 16px -6px, rgba(161, 161, 170, 0.05) 0px 4.03105px 1.61242px -0.625px, rgba(161, 161, 170, 0.05) 0px 9.5543px 3.82172px -1.25px, rgba(161, 161, 170, 0.05) 0px 17.428px 6.97121px -1.875px, rgba(161, 161, 170, 0.04) 0px 28.9741px 11.5896px -2.5px, rgba(161, 161, 170, 0.04) 0px 46.7908px 18.7163px -3.125px, rgba(161, 161, 170, 0.03) 0px 76.5918px 30.6367px -3.75px, rgba(161, 161, 170, 0.02) 0px 131.886px 52.7544px -4.375px, rgba(161, 161, 170, 0) 0px 240px 96px -5px';

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgressKey(k => k + 1);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const next = (currentIndex + 1) % projects.length;
    setDirection(1);
    setCurrentIndex(next);
    setProgressKey(k => k + 1);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  return (
    <section className="py-[80px] md:py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-[24px]">
        <div className="flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[80px]">

          {/* Left: Text + Thumbnails */}
          <div className="flex flex-col gap-[32px] lg:w-[360px] flex-shrink-0 lg:pt-[60px]">
            <div>
              <h2
                className="text-[36px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0A0A0A]"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {projects[currentIndex].title}
              </h2>
              <p
                className="mt-3 text-[16px] font-medium text-[#737373] leading-[1.5]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {projects[currentIndex].metric}
              </p>
            </div>

            <Button
              href={projects[currentIndex].href}
              variant="secondary"
              showArrow
            >
              View Project
            </Button>

            {/* Thumbnail Indicators */}
            <div className="flex gap-[12px]">
              {projects.map((proj, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="relative flex-1 group"
                >
                  {/* Thumbnail image */}
                  <div className={`relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border-2 transition-all duration-300 ${i === currentIndex
                      ? 'border-[#0A0A0A] opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-70'
                    }`}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Progress bar at bottom */}
                    {i === currentIndex && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/20">
                        <motion.div
                          key={progressKey}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                          className="h-full bg-white"
                        />
                      </div>
                    )}
                    {i < currentIndex && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Image Card — framer-1w3bqzu */}
          <div className="flex-1 w-full">
            <div className="relative w-full overflow-hidden" style={{ minHeight: 400 }}>
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 260, damping: 28 },
                    opacity: { duration: 0.3 }
                  }}
                  className="w-full"
                >
                  {/* framer-1w3bqzu: outer card — padding:8px, border-radius:32px, border rgb(229,229,229) */}
                  <div
                    className="w-full bg-white border border-[#E5E5E5] rounded-[32px] p-[8px]"
                    style={{ boxShadow: CARD_SHADOW }}
                  >
                    {/* framer-qnjh34: border-radius:24px, overflow:hidden */}
                    <div className="w-full rounded-[24px] overflow-hidden relative" style={{ position: 'relative' }}>
                      {/* framer-RI38l framer-1dqfnk0 framer-v-1vrr49q: width:100%, position:relative, overflow:hidden */}
                      <div className="w-full relative overflow-hidden" style={{ display: 'flex', flexDirection: 'row' }}>
                        {/* framer-r4ckmb: flex:1, aspect-ratio:1.25 (5:4 landscape) */}
                        <div style={{ flex: '1 0 0', width: '1px', aspectRatio: '1.25', position: 'relative' }}>
                          {/* data-framer-background-image-wrapper: position:absolute, border-radius:inherit, inset:0 */}
                          <div style={{ position: 'absolute', borderRadius: 'inherit', inset: 0 }}>
                            <img
                              src={projects[currentIndex].image}
                              alt={projects[currentIndex].title}
                              width={960}
                              height={1200}
                              style={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center center',
                                borderRadius: 'inherit',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
