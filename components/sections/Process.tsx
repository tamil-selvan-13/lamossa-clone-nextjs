'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const steps = [
  { 
    number: '01', 
    title: 'Discovery & Strategy', 
    body: 'We uncover your goals, audience, and challenges to build a clear roadmap for success.' 
  },
  { 
    number: '02', 
    title: 'Design & Prototyping', 
    body: 'Transforming insights into bold, user-focused designs that connect and convert.' 
  },
  { 
    number: '03', 
    title: 'Development & Launch', 
    body: 'From pixel to code, we craft high-performing websites and launch them flawlessly.' 
  },
  { 
    number: '04', 
    title: 'Optimization & Scale', 
    body: 'We monitor, refine, and enhance to ensure continuous growth and lasting impact.' 
  },
];

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
    <section className="section-padding bg-[#f4f4f5]">
      <div className="max-content-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Sticky */}
          <div className="lg:sticky lg:top-[140px] h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20 }}
              className="pill-badge mb-6"
            >
              <div className="w-2 h-2 bg-[#e1443a] rounded-sm" />
              <span className="text-[#404040] font-bold">Process</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
              className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              <span className="text-[#171717]">Proven & effective process.</span><br />
              <span className="text-[#a3a3a3]">That delivers results.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.2 }}
              className="text-[18px] text-[#737373] max-w-[400px] leading-relaxed font-medium"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
            </motion.p>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative" ref={containerRef}>
            {/* Vertical Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-[#ebecef]">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#e1443a] origin-top"
                style={{ height: '100%', scaleY }}
              />
            </div>

            <div className="flex flex-col gap-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: 'spring', stiffness: 66, damping: 20 }}
                  className="relative pl-20"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border border-[#ebecef] flex items-center justify-center z-10 shadow-sm">
                    <span className="text-[14px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)' }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-[32px] border border-[#ebecef] p-4 shadow-sm">
                    <div className="bg-[#fcfcfd] rounded-[24px] p-8">
                      <h3 className="text-[24px] font-bold text-[#171717] mb-3" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.03em' }}>
                        {step.title}
                      </h3>
                      <p className="text-[16px] text-[#737373] leading-relaxed font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
