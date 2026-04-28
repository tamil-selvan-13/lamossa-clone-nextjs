"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "We dive deep into your business, goals, and audience to create a strategic foundation." },
  { num: "02", title: "Strategy", desc: "Developing a comprehensive plan encompassing UX, architecture, and visual direction." },
  { num: "03", title: "Design & Build", desc: "Crafting pixel-perfect designs and robust development using modern tech stacks." },
  { num: "04", title: "Launch & Scale", desc: "Rigorous testing, smooth deployment, and ongoing support for continuous growth." },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-32 bg-[#F6F7F8] border-y border-[#EBECEF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#09090B]">How We Work</h2>
          <p className="text-xl text-[#5D5F6F] text-center max-w-2xl mx-auto">
            A proven, transparent process designed to deliver exceptional results without the typical agency friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.1, damping: 20, stiffness: 66 }}
              className="relative p-8 rounded-2xl bg-white border border-[#EBECEF]"
            >
              <div className="text-5xl font-bold text-[#09090B]/5 mb-6">{step.num}</div>
              <h3 className="text-xl font-bold mb-4 text-[#09090B]">{step.title}</h3>
              <p className="text-[#5D5F6F] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}