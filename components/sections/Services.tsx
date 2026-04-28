'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const CARD_SHADOW = 'rgba(161, 161, 170, 0.15) 0px 4px 16px -6px, rgba(161, 161, 170, 0.05) 0px 4.03105px 1.61242px -0.625px, rgba(161, 161, 170, 0.05) 0px 9.5543px 3.82172px -1.25px, rgba(161, 161, 170, 0.05) 0px 17.428px 6.97121px -1.875px, rgba(161, 161, 170, 0.04) 0px 28.9741px 11.5896px -2.5px, rgba(161, 161, 170, 0.04) 0px 46.7908px 18.7163px -3.125px, rgba(161, 161, 170, 0.03) 0px 76.5918px 30.6367px -3.75px, rgba(161, 161, 170, 0.02) 0px 131.886px 52.7544px -4.375px, rgba(161, 161, 170, 0) 0px 240px 96px -5px';


const services = [
  { 
    name: 'Web Design & UX/UI', 
    icon: 'M12 1.5H8.5a3.5 3.5 0 1 0 0 7m3.5-7v7m0-7h3.5a3.5 3.5 0 1 1 0 7m-3.5 0H8.5m3.5 0v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0V19a3.5 3.5 0 1 1-3.5-3.5m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z',
    body: 'Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions.'
  },
  { 
    name: 'No-code Development', 
    icon: 'M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7',
    body: 'Building powerful applications without writing code, using cutting-edge no-code platforms like Framer and Webflow for fast deployment.'
  },
  { 
    name: 'MVP prototyping', 
    icon: 'M22 9H2m12 8.5 2.5-2.5-2.5-2.5m-4 0L7.5 15l2.5 2.5M2 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8Z',
    body: 'Rapid prototyping to validate your ideas and get to market faster. We help you test your core value proposition with real users.'
  },
  { 
    name: 'Ongoing Design Partner', 
    icon: 'M13 6 6.502 7.3c-.363.072-.545.108-.692.197a1 1 0 0 0-.325.312c-.094.144-.138.324-.225.684L2 22m0 0 13.507-3.26c.36-.087.54-.13.684-.225a1 1 0 0 0 .312-.325c.088-.148.125-.329.197-.692L18 11M2 22l7.586-7.586m11.283-6.546L16.13 3.131c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.737c-.396.397-.594.595-.668.823a1 1 0 0 0 0 .618c.074.228.272.426.668.822l4.738 4.737c.396.396.594.595.822.669a1 1 0 0 0 .618 0c.228-.075.426-.273.822-.669l.738-.737c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.229-.272-.427-.668-.823ZM11 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z',
    body: 'Continuous design support and improvements as your business grows. We act as an extension of your team, providing consistent quality.'
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section className="section-padding bg-[#f4f4f5]">
      <div className="max-content-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 66, damping: 20 }}
                className="pill-badge mb-6"
              >
                <div className="w-2 h-2 bg-[#e1443a] rounded-sm" />
                <span className="text-[#404040] font-bold">Services</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
                className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1]"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                <span className="text-[#171717]">From idea to scale.</span><br />
                <span className="text-[#a3a3a3]">We master our craft.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.2 }}
            >
              <Button variant="premium-light" size="lg" showArrow href="/contact-us">
                Start A Project
              </Button>
            </motion.div>

            {/* Services Bento */}
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 66, damping: 20, delay: i * 0.1 }}
                  className="bg-white rounded-[32px] border border-[#ebecef] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(i)}
                    className="w-full flex items-center gap-5 p-5 text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f6f7f8] border border-[#d4d8dd] flex items-center justify-center text-[#737373]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={service.icon} />
                      </svg>
                    </div>
                    <span className="flex-1 text-[24px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.03em' }}>
                      {service.name}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      className="w-8 h-8 rounded-full bg-[#f6f7f8] flex items-center justify-center text-[#737373]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5">
                          <div className="bg-[#fcfcfd] rounded-[16px] border border-[rgba(235,236,239,0.45)] p-6 text-[16px] text-[#404040] leading-relaxed font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                            {service.body}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Card */}
          <div className="lg:sticky lg:top-[140px] h-fit">
            <div ref={imageContainerRef} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.4 }}
                className="bg-white rounded-[32px] border border-[#ebecef] overflow-hidden"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div className="m-4 aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] rounded-[24px] overflow-hidden">
                  <motion.img
                    src="https://framerusercontent.com/images/vdtm4vbMi9SyPgj2Z1bVuq9b2o.png"
                    alt="Services"
                    style={{ scale: imageScale }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
