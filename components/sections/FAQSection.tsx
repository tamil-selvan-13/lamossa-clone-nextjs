"use client";

import { FAQS } from "@/lib/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#09090B]">Common Questions</h2>
          <p className="text-xl text-[#5D5F6F]">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all-ease",
                  isOpen ? "border-[#09090B]/30 bg-[#F6F7F8]/50" : "border-[#EBECEF] bg-white"
                )}
              >
                <button
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <span className="text-lg font-semibold text-[#09090B]">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all-ease",
                    isOpen ? "bg-[#09090B] text-white border-[#09090B]" : "border-[#EBECEF] text-[#5D5F6F]"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[#5D5F6F] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}