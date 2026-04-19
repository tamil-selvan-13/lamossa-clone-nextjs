'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import SectionTag from '../ui/SectionTag';

const faqs = [
  { question: 'What is included with each Framer template?', answer: 'Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize.' },
  { question: 'Do I need coding skills to use your templates?', answer: 'No! Our templates are designed to be user-friendly with intuitive editing tools.' },
  { question: 'Can I use a template for multiple projects?', answer: 'This depends on the license. Check each template for usage terms.' },
  { question: 'Are the templates optimized for performance?', answer: 'Yes, all templates are optimized for fast loading and great performance.' },
  { question: 'Do you offer support after purchase?', answer: 'We offer email support for all templates with a 24-hour response time.' },
  { question: 'Can I integrate third-party tools with these templates?', answer: 'Yes, most templates support common integrations like analytics, email, and CRM tools.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="section-faq" className="py-28 bg-[#F9F9F9]">
      <div className="max-w-[800px] mx-auto px-6">
        
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <SectionTag text="GOT A QUESTION?" color="#3B82F6" />
          <h2 className="text-[56px] font-black tracking-[-0.04em] text-[#000000] leading-[1.1]">
            We've got answers.
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-[#ebecef]">
          {faqs.slice(0, 6).map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-b border-[#ebecef]">
                <button
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className="text-[18px] font-medium text-[#171717]">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4 relative w-5 h-5 flex items-center justify-center">
                    <div className="w-[14px] h-[2px] bg-[#171717] absolute" />
                    <div className={`w-[14px] h-[2px] bg-[#171717] absolute transition-transform duration-300 ${openIndex === i ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[16px] text-[#6b7280] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
           <Button href="/contact-us" variant="dark">Contact Us</Button>
        </FadeIn>

      </div>
    </section>
  );
}