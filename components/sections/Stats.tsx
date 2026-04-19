'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '500+', subtitle: 'Successful projects delivered', body: 'We build high-impact websites and digital experiences for startups and enterprises to scale fast.' },
  { number: '240%', subtitle: 'Increased in conversion rate', body: 'Purpose-built digital experiences that elevate brands and increase conversion rates at every touchpoint.' },
  { number: '$100M+', subtitle: 'Seed + series A funding', body: "Through strategic design, marketing, and conversion optimization, we've helped businesses scale faster." },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section-stats" className="py-[120px] bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-[24px]">
        <div className="flex items-center gap-2 justify-center mb-8">
          <span className="w-2 h-2 bg-[#e1443a] rounded-sm" />
          <span className="text-base text-[#404040]">Impact</span>
        </div>

        <h2 className="text-[40px] font-bold text-center mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          <span className="text-[#0a0a0a]">Lamosa makes it simple,</span>
          <br />
          <span className="text-[#5d636f]">and delivers results.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[32px] p-6 transition-all duration-700 ease-out hover:shadow-lg hover:scale-[1.02]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <p className="text-[32px] font-bold text-[#010309] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {stat.number}
              </p>
              <p className="text-[24px] text-[#5d636f] mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                {stat.subtitle}
              </p>
              <hr className="border-[#ebecef] mb-4" />
              <p className="text-base text-[#737373]">{stat.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}