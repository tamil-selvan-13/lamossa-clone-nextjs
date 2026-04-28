"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { label: "Projects Completed", value: "500+" },
  { label: "Average ROI", value: "240%" },
  { label: "Client Revenue Generated", value: "$100M+" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#EBECEF]">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: i * 0.1, damping: 20, stiffness: 66 }}
              className="flex flex-col items-center justify-center pt-12 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#09090B] mb-4">{stat.value}</div>
              <div className="text-[#5D5F6F] font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}