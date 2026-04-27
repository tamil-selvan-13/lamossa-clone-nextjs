'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const services = [
  { 
    name: 'Web Design & UX/UI', 
    icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z M14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z M14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z',
    body: 'Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions. We focus on visual storytelling and seamless user journeys.'
  },
  { 
    name: 'No-code Development', 
    icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
    body: 'Building powerful applications without writing code, using cutting-edge no-code platforms like Framer and Webflow for fast deployment.'
  },
  { 
    name: 'MVP prototyping', 
    icon: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
    body: 'Rapid prototyping to validate your ideas and get to market faster. We help you test your core value proposition with real users.'
  },
  { 
    name: 'Ongoing Design Partner', 
    icon: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5',
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
              <span className="text-[#404040] font-bold">Services</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
              className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              <span className="text-[#171717]">From idea to scale.</span><br />
              <span className="text-[#a3a3a3]">We master our craft.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.2 }}
            >
              <Button variant="outline" size="lg" showArrow>
                Start A Project
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Accordion + Image */}
          <div className="flex flex-col gap-12">
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
                    <div className="w-12 h-12 rounded-full bg-[#f6f7f8] border border-[#ebecef] flex items-center justify-center text-[#737373]">
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
                          <div className="bg-[#fcfcfd] rounded-[24px] p-6 text-[16px] text-[#737373] leading-relaxed font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                            {service.body}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Image Card */}
            <div ref={imageContainerRef} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.4 }}
                className="bg-white rounded-[32px] border border-[#ebecef] p-4 shadow-xl overflow-hidden"
              >
                <div className="aspect-[5/4] rounded-[24px] overflow-hidden">
                  <motion.img
                    src="/images/services_glow.png"
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
