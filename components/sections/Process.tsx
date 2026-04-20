'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import SectionLabel from '../ui/SectionLabel';

const steps = [
  { number: '01', title: 'Discovery & Strategy', body: 'We uncover your goals, audience, and challenges to build a clear roadmap for success.' },
  { number: '02', title: 'Design & Prototyping', body: 'Transforming insights into bold, user-focused designs that connect and convert.' },
  { number: '03', title: 'Development & Launch', body: 'From pixel to code, we craft high-performing websites and launch them flawlessly.' },
  { number: '04', title: 'Optimization & Scale', body: 'We monitor, refine, and enhance to ensure continuous growth and lasting impact.' },
];

interface ProcessStepProps {
  step: typeof steps[0];
  i: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}

function ProcessStep({ step, i, totalSteps, scrollYProgress }: ProcessStepProps) {
  // Approximate the scroll threshold point where the line strikes the node.
  const threshold = i / Math.max(1, (totalSteps - 1));
  
  // Transition text color when active
  const color = useTransform(scrollYProgress, 
    [Math.max(0, threshold - 0.05), threshold], 
    ["#E5E7EB", "#000000"]
  );

  return (
    <div className="relative">
      {/* Circle marker on the timeline */}
      <div 
        className="absolute left-[0px] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-black/5"
      >
        <motion.span 
          className="text-[14px] font-bold"
          style={{ color }}
        >
          {step.number}
        </motion.span>
      </div>

      <div className="pl-[56px] md:pl-[80px]">
        <FadeIn delay={i * 0.1}>
          <div className="flex flex-col bg-white p-[36px] md:p-[48px] rounded-[48px] border border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out w-full">
            <h3 className="text-[24px] md:text-[28px] font-bold text-black mb-[12px] tracking-tight leading-tight">
              {step.title}
            </h3>
            <p className="text-[16px] md:text-[18px] text-black/60 leading-relaxed font-medium">
              {step.body}
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="section-process" className="py-[140px] bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-[60px] items-start">
          
          <div className="lg:sticky lg:top-32">
            <FadeIn>
              <SectionLabel label="PROCESS" className="mb-6" />
              
              <h2 className="text-[48px] md:text-[56px] font-bold mb-6 font-sans leading-[1.05] tracking-[-0.04em] text-black">
                Proven & effective process. <br />
                <span className="text-black/30">That delivers results.</span>
              </h2>

              <p className="text-[17px] md:text-[18px] text-black/60 max-w-[380px] leading-relaxed font-medium mt-10">
                We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
              </p>
            </FadeIn>
          </div>

          <div className="relative" ref={containerRef}>
            
            {/* The vertical tracking line */}
            <div className="absolute left-[0px] top-[50px] bottom-[50px] w-[2px] bg-[#E5E7EB] -translate-x-1/2 origin-top overflow-hidden rounded-full">
               <motion.div 
                 className="absolute top-0 left-0 w-full h-[100%] bg-orange-500 origin-top"
                 style={{ scaleY }}
               />
            </div>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <ProcessStep 
                  key={i} 
                  step={step} 
                  i={i} 
                  totalSteps={steps.length} 
                  scrollYProgress={scaleY} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}