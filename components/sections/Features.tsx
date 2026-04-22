'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const projects = [
  {
    title: "Redesigning Atlas",
    metric: "+45% engagement, -20% churn",
    href: "/projects/redesigning-atlas",
    image: "https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg"
  },
  {
    title: "Launch MVP for Finlytics",
    metric: "Live in 27 days, 1,200+ early users",
    href: "/projects/launch-mvp-for-finlytics",
    image: "https://framerusercontent.com/images/5kd7Hmen8Zb7gfwj1BZyuA0ko.png"
  },
  {
    title: "Orbital Website Redesign",
    metric: "+21% signup conversion rate",
    href: "/projects/orbital-website-redesign",
    image: "https://framerusercontent.com/images/zvQ7tedi7AxHplgmospF42dcjQo.png"
  }
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      filter: 'blur(4px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      filter: 'blur(4px)'
    })
  };

  return (
    <section className="py-[80px] bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-[24px]">
        <div className="relative w-full min-h-[600px] md:min-h-[750px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25, restDelta: 0.5 },
                opacity: { duration: 0.4 },
                filter: { duration: 0.4 }
              }}
              className="w-full"
            >
              <div className="w-full bg-[#F6F7F8] rounded-[48px] overflow-hidden border border-[#EBECEF] shadow-sm">
                {/* Card Header Area */}
                <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white border-b border-[#EBECEF]">
                  <div>
                    <h3 className="text-[28px] md:text-[36px] font-bold text-black font-sans tracking-tight">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-[16px] md:text-[18px] font-medium text-[#5D636F] mt-2">
                      {projects[currentIndex].metric}
                    </p>
                  </div>
                  <Button 
                    href={projects[currentIndex].href} 
                    variant="secondary" 
                    size="md" 
                    showArrow 
                    className="rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    View Project
                  </Button>
                </div>

                {/* Card Image Area */}
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                  <img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Thumbnail Indicators (Bottom Left overlay) */}
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex gap-4 z-10">
                    {projects.map((proj, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDirection(i > currentIndex ? 1 : -1);
                          setCurrentIndex(i);
                        }}
                        className={`relative w-[80px] h-[60px] rounded-[16px] overflow-hidden border-2 transition-all duration-300 ${
                          i === currentIndex 
                            ? 'border-white scale-105 opacity-100' 
                            : 'border-transparent opacity-40 hover:opacity-70 scale-100'
                        }`}
                      >
                        <img 
                          src={proj.image} 
                          alt="thumbnail" 
                          className="w-full h-full object-cover"
                        />
                        {/* Progress line inside thumbnail bottom */}
                        {i === currentIndex && (
                          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/20">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                              className="h-full bg-white"
                            />
                          </div>
                        )}
                        {i < currentIndex && (
                          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
