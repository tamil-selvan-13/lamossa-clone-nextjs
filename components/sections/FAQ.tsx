'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const faqs = [
  { question: 'What is included with each Framer template?', answer: 'Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready for you to customize and launch in minutes.' },
  { question: 'Do I need coding skills to use your templates?', answer: 'No coding skills are required. Our templates are built for Framer, which is a no-code tool that allows you to edit everything visually.' },
  { question: 'Can I use a template for multiple projects?', answer: 'One license covers one project. If you want to use the template for multiple projects, you will need to purchase additional licenses.' },
  { question: 'Are the templates optimized for performance?', answer: 'Yes, all our templates are optimized for speed, performance, and SEO to ensure your site ranks well and loads fast.' },
  { question: 'Do you offer support after purchase?', answer: 'Yes, we offer ongoing support for all our templates. If you have any questions or run into issues, you can reach out to us.' },
  { question: 'Can I integrate third-party tools with these templates?', answer: 'Absolutely. Framer supports integrations with common tools like GA4, Mailchimp, Typeform, and many others.' },
  { question: 'How often do you release updates?', answer: 'We regularly update our templates to ensure they remain compatible with the latest Framer features and web standards.' },
  { question: 'Can I get a custom design instead?', answer: 'Yes, we offer custom design services. Feel free to contact us to discuss your specific needs and project requirements.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
              <span className="text-[#404040] font-bold">FAQ</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
              className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1]"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              <span className="text-[#171717]">Got a question?</span><br />
              <span className="text-[#a3a3a3]">We've got answers.</span>
            </motion.h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 66, damping: 20, delay: i * 0.1 }}
                className="bg-white rounded-[32px] border border-[#ebecef] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[18px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.02em' }}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-[#ebecef] flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                    {openIndex === i ? (
                       <svg width="14" height="2" viewBox="0 0 14 2" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M1 1h12" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6">
                        <div className="bg-[#fcfcfd] rounded-[24px] p-6 text-[16px] text-[#737373] leading-relaxed font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Dark CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.4 }}
          className="relative bg-[#010309] rounded-[40px] p-10 md:p-16 mt-16 overflow-hidden"
        >
          <div className="absolute inset-0 dot-pattern opacity-10" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <h3 className="text-[32px] md:text-[40px] font-bold text-white tracking-[-0.04em] mb-2" style={{ fontFamily: 'var(--font-satoshi)' }}>
                Still have questions?
              </h3>
              <p className="text-[#737373] text-[18px] font-medium">We're here to help you get started.</p>
            </div>
            <Button variant="light" size="lg" showArrow>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
