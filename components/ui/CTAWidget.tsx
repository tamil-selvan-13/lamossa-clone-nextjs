'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CTAWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isClosed) setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isClosed]);

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[60] w-[280px] bg-white rounded-[24px] border border-[#ebecef] shadow-2xl overflow-hidden p-3"
        >
          <button 
            onClick={() => setIsClosed(true)}
            className="absolute top-2 right-2 w-6 h-6 bg-[#f6f7f8] rounded-full flex items-center justify-center text-[#737373] hover:text-[#171717] transition-colors z-10"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="relative aspect-video rounded-[16px] overflow-hidden mb-3">
            <img src="/images/hero_thumb.png" alt="Template" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)' }}>Lamossa Template</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[10px] font-bold uppercase rounded-full">Best Seller</span>
            </div>
            <button className="w-full h-10 bg-[#0066ff] text-white rounded-full text-[14px] font-bold hover:bg-blue-700 transition-colors">
              Get Template
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
