'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Product design',
    price: 2200,
    priceSuffix: 'One time',
    description: 'Perfect for startups needing a high-end web presence.',
    features: [
      { text: 'Senior designer' },
      { text: 'One Active Request', info: true },
      { text: '7-10 Days delivery' },
      { text: 'SEO optimized' },
      { text: '1-1 Private Slack' },
      { text: '50% upfront' },
    ],
    hasToggle: true,
  },
  {
    name: 'Design partner',
    price: 4000,
    priceSuffix: '/ month',
    description: 'Ideal for scaling companies needing ongoing support.',
    features: [
      { text: 'Senior designer' },
      { text: 'Two Active Requests', info: true },
      { text: '5-7 Days delivery' },
      { text: 'Unlimited revisions' },
      { text: '1-1 Private Slack' },
      { text: 'Cancel anytime' },
    ],
  },
  {
    name: 'Custom',
    price: 9000,
    pricePrefix: 'Starts at ',
    description: 'Ideal for brands seeking unlimited design and motion support.',
    features: [
      { text: 'Dedicated team' },
      { text: 'Unlimited requests', info: true },
      { text: '2 Days Delivery' },
      { text: 'Advanced SEO' },
      { text: '1-1 Private Slack' },
      { text: 'Monthly commitment' },
    ],
    featured: true,
    badge: 'Limited spots',
  },
];

export default function Pricing() {
  const [is3xFaster, setIs3xFaster] = useState(false);

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
            <span className="text-[#404040] font-bold">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            <span className="text-[#171717]">Choose a plan.</span><br />
            <span className="text-[#a3a3a3]">That fits your needs.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 66, damping: 20, delay: i * 0.1 }}
              className={`relative flex flex-col p-10 rounded-[40px] border ${
                plan.featured 
                ? 'bg-[#010309] border-[#0c111c] text-white shadow-xl' 
                : 'bg-white border-[#ebecef] text-[#171717] shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-8 right-8 px-3 py-1 bg-[#e1443a] rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center ${plan.featured ? 'bg-white/10' : 'bg-[#f6f7f8]'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <h6 className="text-[20px] font-bold mb-2" style={{ fontFamily: 'var(--font-satoshi)' }}>{plan.name}</h6>
                <p className={`text-[14px] leading-relaxed mb-6 ${plan.featured ? 'text-white/60' : 'text-[#737373]'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[40px] font-bold" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    ${plan.hasToggle && is3xFaster ? (plan.price + 1000).toLocaleString() : plan.price.toLocaleString()}
                  </span>
                  <span className={`text-[14px] font-medium ${plan.featured ? 'text-white/40' : 'text-[#a3a3a3]'}`}>
                    {plan.priceSuffix}
                  </span>
                </div>
              </div>

              {plan.hasToggle && (
                <div className="mb-8 p-4 bg-[#f6f7f8] rounded-[20px] flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[#171717]">3X faster delivery</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-bold text-[#e1443a]">+$1k</span>
                    <button 
                      onClick={() => setIs3xFaster(!is3xFaster)}
                      className={`w-10 h-6 rounded-full transition-colors relative flex items-center px-1 ${is3xFaster ? 'bg-[#e1443a]' : 'bg-[#d4d8dd]'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${is3xFaster ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e1443a" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14px] font-medium">{feature.text}</span>
                    {feature.info && (
                      <div className="w-4 h-4 rounded-full border border-current opacity-30 flex items-center justify-center text-[10px]">i</div>
                    )}
                  </div>
                ))}
              </div>

              <Button variant={plan.featured ? 'light' : 'dark'} className="w-full" showArrow>
                Get Started Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-on Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.4 }}
          className="bg-white rounded-[32px] border-2 border-dashed border-[#ebecef] p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f6f7f8] flex items-center justify-center text-[#171717]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)' }}>Framer development</h4>
              <p className="text-[14px] text-[#737373] font-medium">Add-on for your design project</p>
            </div>
          </div>
          <Button variant="secondary" className="bg-[#f6f7f8] border-none shadow-none">
            Add + $3.4k
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
