'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import FadeIn from '../ui/FadeIn';

const stats = [
  { 
    number: '500+', 
    subtitle: 'Successful projects delivered', 
    body: 'We build high-impact websites and digital experiences for startups and enterprises to scale fast.' 
  },
  { 
    number: '240%', 
    subtitle: 'Increased in conversion rate', 
    body: 'Purpose-built digital experiences that elevate brands and increase conversion rates at every touchpoint.' 
  },
  { 
    number: '$100M+', 
    subtitle: 'Seed + series A funding', 
    body: "Through strategic design, marketing, and conversion optimization, we've helped businesses scale faster." 
  },
];

export default function Stats() {
  return (
    <section id="section-stats" className="py-[160px] bg-white">
      <div className="max-w-[1240px] mx-auto px-[24px]">
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <SectionLabel label="IMPACT" />
          <h2 className="text-[48px] md:text-[56px] font-bold mb-6 font-sans leading-[1.05] tracking-[-0.04em] text-black mt-4">
             Lamosa makes it simple, <br />
             <span className="text-[#5D636F]">and delivers results.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15, 
                ease: [0.2, 0.8, 0.2, 1] 
              }}
              className="group flex flex-col p-[32px] rounded-[32px] bg-white border border-[#EBECEF] hover:bg-white shadow-[0_4px_16px_-6px_rgba(161,161,170,0.15),0_4px_1px_-0.625px_rgba(161,161,170,0.05)] transition-all duration-500 ease-out"
            >
              <div className="text-[48px] md:text-[56px] font-bold tracking-[-0.04em] text-black leading-none mb-6 transition-transform duration-500 group-hover:scale-[1.02] origin-left">
                {stat.number}
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-black leading-[1.3] mb-3">
                  {stat.subtitle}
                </h3>
                
                <div className="h-[1px] w-full bg-black/5 mb-6" />
                
                <p className="text-[15px] md:text-[16px] text-[#5D636F] leading-relaxed font-medium">
                  {stat.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}