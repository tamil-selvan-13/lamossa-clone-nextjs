'use client';

import { motion } from 'framer-motion';

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
    <section className="section-padding bg-white">
      <div className="max-content-width">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20 }}
            className="pill-badge mb-6"
          >
            <div className="w-2 h-2 bg-[#e1443a] rounded-sm" />
            <span className="text-[#404040] font-bold">Impact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            <span className="text-[#171717]">Lamossa makes it simple,</span><br />
            <span className="text-[#a3a3a3]">and delivers results.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-[32px] border border-[#ebecef] p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[32px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)' }}>
                {stat.number}
              </h3>
              <h5 className="text-[20px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.03em' }}>
                {stat.subtitle}
              </h5>
              <p className="text-[16px] text-[#737373] leading-relaxed font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                {stat.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
