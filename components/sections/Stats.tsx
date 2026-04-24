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
    <section id="section-stats" className="py-[100px] md:py-[160px] bg-white">
      <div className="max-w-[1240px] mx-auto px-[24px]">
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-[10px] px-[14px] py-[6px] rounded-full border border-black/[0.08] bg-white text-[#404040] text-[14px] font-bold shadow-sm" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M 0 2 C 0 0.895 0.895 0 2 0 L 8 0 C 9.105 0 10 0.895 10 2 L 10 8 C 10 9.105 9.105 10 8 10 L 2 10 C 0.895 10 0 9.105 0 8 Z" fill="#E1443A" />
            </svg>
            Impact
          </div>

          <h2 className="text-[42px] md:text-[64px] font-bold mb-6 font-sans leading-[1.08] tracking-[-0.04em] mt-8">
            <span className="text-[#0A0A0A]">Lamosa makes it simple,</span><br />
            <span className="text-[#5D636F]">and delivers results.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
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
              className="flex flex-col rounded-[32px] bg-white border border-[#EBECEF] overflow-hidden p-[24px] gap-4"
              style={{ boxShadow: '0px 2px 4px rgba(0,0,0,0.02), 0px 4px 8px rgba(0,0,0,0.02)' }}
            >
              {/* framer-bimta7: Title region — flex-col gap-[16px] */}
              <div className="flex flex-col gap-4 w-full">
                <h3
                  className="font-bold text-[#010309]"
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '28px',
                    lineHeight: '36px',
                    letterSpacing: '-0.05em',
                    fontWeight: 700
                  }}
                >
                  {stat.number}
                </h3>
                <h5
                  className="text-[#5D636F]"
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '20px',
                    lineHeight: '1.3',
                    fontWeight: 400
                  }}
                >
                  {stat.subtitle}
                </h5>
              </div>

              {/* framer-pi6ddt: Content region — flex-row */}
              <div className="flex flex-row items-center w-full">
                <p
                  className="text-[#737373] flex-1"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '1.3em',
                    letterSpacing: '0em'
                  }}
                >
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