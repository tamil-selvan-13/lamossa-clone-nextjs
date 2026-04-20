'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import SectionLabel from '../ui/SectionLabel';

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 cursor-help hover:opacity-100 transition-opacity">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const plans = [
  {
    name: 'Product design',
    price: '$2,200',
    priceSuffix: 'One time',
    description: 'Perfect for startups needing a high-end web presence.',
    features: [
      { text: 'One active request at a time', info: true },
      { text: 'Average 48 hour delivery' },
      { text: 'Unlimited revisions' },
      { text: 'Figma source files' },
      { text: 'Direct communication' },
    ],
    buttonText: 'Get Started',
    hasToggle: true,
  },
  {
    name: 'Design partner',
    price: '$4,000',
    priceSuffix: '/ month',
    description: 'Ideal for scaling companies needing ongoing support.',
    features: [
      { text: 'Two active requests at a time', info: true },
      { text: 'Unlimited revisions' },
      { text: 'Priority delivery' },
      { text: 'Monthly CRO & Growth Strategy', info: true },
      { text: 'Pause or cancel anytime' },
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Custom',
    price: '$9,000',
    pricePrefix: 'Starts at ',
    subtitle: 'Limited spots',
    description: 'Ideal for brands seeking unlimited design and motion support, delivering high-impact results without restrictions.',
    features: [
      { text: 'Dedicated team & expert designers' },
      { text: 'Unlimited requests', info: true },
      { text: '2 Days Delivery, monthly commitment' },
      { text: 'Advanced SEO & Marketing' },
      { text: '1-1 Private Slack channel' },
      { text: '50% secured upfront payment' },
    ],
    buttonText: 'Get Started Now',
    featured: true,
  },
];

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  const [is3xFaster, setIs3xFaster] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="section-pricing" className="py-[160px] bg-white" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-[24px]">
        <FadeIn className="flex flex-col items-center text-center mb-20">
          <SectionLabel label="PRICING" />
          <h2 className="text-[72px] font-bold tracking-[-0.05em] text-black leading-[1.05] mb-4 mt-4">
            Choose a plan.
          </h2>
          <p className="text-[18px] text-black/60 max-w-[600px] mx-auto leading-relaxed">
            Flexible plans designed to accelerate growth, with solutions that evolve as your business scales.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px] items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              className={`relative flex flex-col h-full p-[26px] rounded-[20px] transition-all duration-[350ms] ease-out hover:scale-[1.02] border ${
                plan.featured 
                ? 'bg-black border-black z-10 shadow-2xl overflow-hidden' 
                : 'bg-white border-black/5 shadow-sm'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-[18px] font-medium ${plan.featured ? 'text-white' : 'text-black'}`}>
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                      plan.featured ? 'bg-white/10 text-white' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {plan.subtitle}
                    </span>
                  )}
                </div>
                <div className={`text-[34px] font-semibold mt-[12px] leading-none mb-1 ${plan.featured ? 'text-white' : 'text-black'}`}>
                  {plan.pricePrefix && <span className={`text-[14px] font-normal ${plan.featured ? 'text-white/40' : 'text-black/40'}`}>{plan.pricePrefix}</span>}
                  {plan.hasToggle && is3xFaster ? '$3,200' : plan.price}
                  {plan.priceSuffix && <span className={`text-[14px] font-normal ${plan.featured ? 'text-white/40' : 'text-black/40'}`}> {plan.priceSuffix}</span>}
                </div>
                <p className={`text-[14px] mt-[8px] leading-relaxed ${plan.featured ? 'text-white/60' : 'text-black/60'}`}>
                  {plan.description}
                </p>

                {/* Optional Toggle for Card 1 */}
                {plan.hasToggle && (
                  <div className="mt-6 p-3 bg-black/5 rounded-xl flex items-center justify-between">
                    <span className="text-[12px] font-medium text-black">3X faster delivery</span>
                    <button 
                      onClick={() => setIs3xFaster(!is3xFaster)}
                      className={`w-10 h-6 rounded-full transition-colors relative flex items-center px-1 ${is3xFaster ? 'bg-orange-500' : 'bg-gray-300'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${is3xFaster ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                    <span className="text-[12px] font-bold text-orange-500">+$1k</span>
                  </div>
                )}

                <div className={`h-[1px] my-[20px] ${plan.featured ? 'bg-white/10' : 'bg-black/10'}`} />

                <ul className="mt-[16px] space-y-[10px]">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-3 text-[14px] ${plan.featured ? 'text-white/80' : 'text-black/80'}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-400 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature.text}
                      {feature.info && <InfoIcon />}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-[18px]">
                <Button 
                  href="/contact-us" 
                  variant={plan.featured ? 'primary' : 'dark'} 
                  className="w-full"
                  showArrow
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framer Development Add-on Block - Forensic Structure */}
        <div className="flex justify-center mt-[28px]">
          <motion.div 
            className={`relative flex flex-col md:flex-row items-center gap-12 p-[26px] rounded-[24px] bg-[#F9F9F9] border border-black/5 shadow-sm max-w-[760px] w-full ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex items-center gap-6 flex-1">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5">
                <svg width="24" height="24" viewBox="0 0 14.5 22.5" fill="none" stroke="#000" strokeWidth="1.5"><path d="M0 0h14.5v7.25h-7.25l-7.25 7.25v-14.5zM7.25 7.25h7.25v7.25h-7.25v-7.25zM0 15.25h7.25v7.25l-7.25-7.25z" fill="currentColor"/></svg>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-black">Framer development</h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-2 text-[13px] text-black/50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
                    Up to 8 full pages + 404 page
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-black/50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    + $400/ additional page
                  </div>
                </div>
              </div>
            </div>

            <Button href="/contact-us" variant="light" className="bg-[#EEE] border-transparent hover:bg-gray-200">
              Add + $3.4k
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}