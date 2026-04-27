'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const testimonials = [
  {
    stat: '2.3×',
    label: 'increase in lead conversion',
    quote: 'Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly.',
    name: 'Sarah Coleman',
    role: 'CMO',
    avatar: 'https://framerusercontent.com/images/AEQsxb2QlSXIvQcf0rFoLl3DcQc.png'
  },
  {
    stat: '45%',
    label: 'Reduced bounce rate',
    quote: 'The team at Lamosa not only built us a beautiful platform—they made it fast, smart, and incredibly intuitive.',
    name: 'Marcus Levine',
    role: 'Co-founder',
    avatar: 'https://framerusercontent.com/images/EfXMIMfdWjgI3EibNMgVqMZNCE0.png'
  },
  {
    stat: '3x',
    label: 'faster MVP launch',
    quote: 'Working with Lamosa helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision.',
    name: 'Amina Khatri',
    role: 'Head of Product',
    avatar: 'https://framerusercontent.com/images/9Qwg91kOgbDmLRkV9k7Q2p4ls.png'
  },
  {
    stat: '62%',
    label: 'increase in mobile traffic retention',
    quote: 'Lamosa completely redefined our digital presence. Their strategic design approach boosted our conversion rate significantly.',
    name: 'Julian Ortega',
    role: 'CEO',
    avatar: 'https://framerusercontent.com/images/jIzgWv1ngkkV3oGhfkZy0ymiHU.png'
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f4f4f5]">
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
            <span className="text-[#404040] font-bold">Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            <span className="text-[#171717]">We're loved.</span><br />
            <span className="text-[#a3a3a3]">Just success stories.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: i * 0.1 }}
              className="bg-white rounded-[40px] border border-[#ebecef] p-10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-[48px] font-bold text-[#171717] leading-none mb-2" style={{ fontFamily: 'var(--font-satoshi)' }}>
                {t.stat}
              </h3>
              <p className="text-[20px] font-bold text-[#a3a3a3] mb-8" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.03em' }}>
                {t.label}
              </p>
              
              <div className="mb-8">
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="text-[#e1443a] mb-4">
                  <path d="M5.333 0L4 3.333H0V11.333H7.333V3.333H6L7.333 0H5.333ZM13.333 0L12 3.333H8V11.333H15.333V3.333H14L15.333 0H13.333Z" fill="currentColor" />
                </svg>
                <p className="text-[18px] text-[#404040] leading-relaxed font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-[#ebecef]">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-[16px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-inter)' }}>{t.name}</h4>
                  <p className="text-[14px] text-[#737373]" style={{ fontFamily: 'var(--font-inter)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dark CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.4 }}
          className="relative bg-[#010309] rounded-[40px] p-10 md:p-16 overflow-hidden"
        >
          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 dot-pattern opacity-10" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <h3 className="text-[32px] md:text-[40px] font-bold tracking-[-0.04em] leading-[1.2] max-w-[600px]" style={{ fontFamily: 'var(--font-satoshi)' }}>
              <span className="text-white">You focus on your company.</span><br />
              <span className="text-[#737373]">We make it happen. Unstoppable Growth.</span>
            </h3>
            <Button variant="light" size="lg" showArrow>
              Book A Call
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-col items-center mt-16">
          <Button variant="outline" size="lg" showArrow className="mb-12">
            View All Reviews
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://framerusercontent.com/images/AEQsxb2QlSXIvQcf0rFoLl3DcQc.png`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 text-[#FFA300]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[12px] font-bold text-[#171717]">From 150+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
