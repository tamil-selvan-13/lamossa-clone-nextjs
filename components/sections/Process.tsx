'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import FadeIn from '../ui/FadeIn';

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
  // Approximate the scroll threshold point where the red line strikes the node.
  // 4 steps map mathematically to 0, 0.33, 0.66, and 1.
  const threshold = i / Math.max(1, (totalSteps - 1));
  
  // Transition text color automatically when the smoothly interpolated spring 'reaches' the node threshold
  const color = useTransform(scrollYProgress, 
    [Math.max(0, threshold - 0.05), threshold], 
    ["#E5E7EB", "#000000"]
  );

  return (
    <div className="relative">
      {/* Small white circle sitting exactly centrally overlaid across the track line */}
      <div 
        className="absolute left-[0px] top-[40px] -translate-x-1/2 -translate-y-1/2 z-10 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      >
        <motion.span 
          className="text-[13px] font-bold"
          style={{ color }}
        >
          {step.number}
        </motion.span>
      </div>

      <div className="pl-[48px]">
        <FadeIn delay={i * 0.1}>
          <div className="flex flex-col bg-white/[0.04] backdrop-blur-lg p-8 rounded-3xl border border-white/[0.08] shadow-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow duration-300 w-full">
            <h2 className="text-[22px] font-bold text-[#111827] mb-[8px] tracking-tight">
              {step.title}
            </h2>
            <p className="text-[16px] text-[#4B5563] leading-relaxed">
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
    <section id="section-process" className="py-28 bg-[#F9F9F9]">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="lg:sticky lg:top-24 lg:self-start">
            <FadeIn>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#e1443a] rounded-sm" />
                <span className="text-base text-[#404040]">Process</span>
              </div>
              
              <h2 className="text-[40px] font-bold mb-4 font-sans leading-[1.1] tracking-tight text-[#000000]">
                Proven & effective process.
              </h2>

              <p className="text-lg text-[#404040] max-w-sm mt-8">
                We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
              </p>
            </FadeIn>
          </div>

          <div className="relative py-[8px]" ref={containerRef}>
            
            {/* The vertical tracking line centered horizontally directly beneath the circle nodes */}
            <div className="absolute left-[0px] top-[48px] bottom-[48px] w-[2px] bg-[#E5E7EB] -translate-x-1/2 origin-top overflow-hidden rounded-full">
               <motion.div 
                 className="absolute top-0 left-0 w-full h-[100%] bg-[#FF4D4D] origin-top"
                 style={{ scaleY }}
               />
            </div>

            <div className="flex flex-col gap-8">
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