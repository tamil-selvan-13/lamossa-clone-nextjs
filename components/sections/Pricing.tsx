'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import SectionTag from '../ui/SectionTag';

const plans = [
  {
    name: 'Product design',
    description: 'Ideal for launching or revamping a website or product to boost conversions.',
    price: '$ 2,200',
    period: 'One time',
    features: [
      'Senior designer', 'One Active Request', '7-10 Days delivery', 'SEO optimized', '1-1 Private Slack channel', '50% secured upfront payment'
    ],
    upsell: { label: '3X faster delivery', price: '+$1k' }
  },
  {
    name: 'Design partner',
    description: 'Ongoing design support for continuous growth and iteration.',
    price: '$ 4,000',
    period: '/ month',
    features: [
      'Dedicated team', 'Multiple requests (fair use)', '2-3 Days delivery', 'Monthly CRO & Growth Strategy', 'Slack', '50% upfront'
    ],
    upsell: { label: 'Framer development', price: '+$3.4k', feature: true }
  },
  {
    name: 'Custom',
    description: 'Tailored solutions for unique business requirements.',
    price: '$ 9,000+',
    period: 'Starts at',
    features: [
      'Custom strategy', 'Unlimited requests', 'Priority delivery', 'Full Suite of Services', 'Dedicated Slack', 'Flexible payment'
    ],
    dark: true
  }
];

export default function Pricing() {
  const [fasterToggle, setFasterToggle] = useState(false);
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
    <section id="section-pricing" className="py-[120px] bg-[#F9F9F9]" ref={ref}>
      <div className="max-w-[1120px] mx-auto px-[24px]">
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <SectionTag text="CHOOSE A PLAN." color="#8B5CF6" />
          <h2 className="text-[56px] font-black tracking-[-0.04em] text-[#000000] leading-[1.1] mb-8">
            That fits your needs.
          </h2>
          <p className="text-[18px] text-[#6B7280] max-w-[600px]">
            Flexible plans designed to accelerate growth, with solutions that evolve as your business scales.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`${plan.dark ? 'bg-[#010309]/80 backdrop-blur-md border-[#0c111c]' : 'bg-white/80 backdrop-blur-md border-[#ebecef]'} ${i === 1 ? 'border-[2px] border-[#8B5CF6]' : 'border'} rounded-[24px] p-6 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl ${visible ? '' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {plan.name === 'Custom' && (
                <span className="inline-block bg-[rgba(225,68,58,0.25)] text-[#e1443a] text-xs px-3 py-1 rounded-full mb-4">Limited spots</span>
              )}
              
              <h3 className={`text-xl font-medium mb-2 ${plan.dark ? 'text-white' : 'text-[#171717]'}`} style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {plan.name}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className={`text-4xl font-bold ${plan.dark ? 'text-white' : 'text-[#171717]'}`} style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {i === 0 && fasterToggle ? '$ 3,200' : plan.price}
                </span>
                <span className={plan.dark ? 'text-[#737373]' : 'text-[#737373]'}>{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${plan.dark ? 'text-[#a3a3a3]' : 'text-[#404040]'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={plan.dark ? '#a3a3a3' : '#404040'} strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {i === 0 && plan.upsell && (
                <div className="flex items-center gap-3 bg-[#F9F9F9] rounded-[25px] p-1 mb-4">
                  <span className={`flex-1 text-center text-sm py-2 ${!fasterToggle ? 'bg-white shadow rounded-full' : ''}`}>⚡ {plan.upsell?.label}</span>
                  <button 
                    onClick={() => setFasterToggle(!fasterToggle)}
                    className={`w-10 h-5 rounded-full transition-colors ${fasterToggle ? 'bg-[#e1443a]' : 'bg-gray-300'}`}
                  >
                    <span className={`block w-4 h-4 bg-white rounded-full m-0.5 ${fasterToggle ? 'translate-x-5' : ''}`} />
                  </button>
                  <span className="text-sm">{plan.upsell?.price}</span>
                </div>
              )}

              {i === 1 && plan.upsell && (
                <div className="border border-dashed border-[#d4d8dd] rounded-2xl p-4 mb-4">
                  <p className="text-sm mb-2">Framer development</p>
                  <ul className="space-y-1 text-xs text-[#737373] mb-3">
                    <li>→ Premium Framer development</li>
                    <li>→ Custom animations</li>
                    <li>→ Responsive implementation</li>
                  </ul>
                  <Button href="#" variant="light" size="sm" className="w-full">Add + $3.4k</Button>
                </div>
              )}

              <Button 
                href={i === 2 ? '/contact-us' : 'https://buy.polar.sh/polar_cl_Vh9Iuo4sax2ytsA3hQ7kRDF0JaFPdw9qEYRVb2aO0xL'} 
                target="_blank"
                variant={plan.dark ? 'light' : 'dark'}
                className="w-full"
              >
                Get Started Now
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#010309] rounded-[40px] p-8 text-center" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.6s ease 0.5s' }}>
          <p className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Can&apos;t decide yet? Let&apos;s have a free call.
          </p>
          <Button href="/contact-us" variant="light" className="w-full md:w-auto">Book A Call</Button>
        </div>
      </div>
    </section>
  );
}