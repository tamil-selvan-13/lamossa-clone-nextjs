"use client";

import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  return (
    <section id="services" className="py-32 bg-[#F6F7F8]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#09090B]">Our Services</h2>
          <p className="text-xl text-[#5D5F6F] max-w-2xl">
            We provide end-to-end design and development solutions for modern brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-4">
            {SERVICES.map((service) => {
              const isActive = activeService === service.id;
              return (
                <div
                  key={service.id}
                  className={cn(
                    "border border-[#EBECEF] rounded-2xl overflow-hidden transition-all-ease cursor-pointer",
                    isActive ? "bg-white" : "bg-white hover:border-[#09090B]/30"
                  )}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="px-6 py-6 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-[#09090B]">{service.title}</h3>
                    <div className={cn(
                      "w-10 h-10 rounded-full border flex items-center justify-center transition-all-ease",
                      isActive ? "bg-[#E1443A] border-[#E1443A] text-white" : "border-[#EBECEF] text-[#09090B]"
                    )}>
                      {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-[#5D5F6F] text-lg">
                          {service.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-[#EBECEF] hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={`https://images.unsplash.com/photo-${activeService === '1' ? '1561070791-2526d3098f71' : activeService === '2' ? '1551288049-bebda4e38f71' : activeService === '3' ? '1522071820081-009f0129c71c' : '1553877522-43269d4ea984'}?auto=format&fit=crop&q=80&w=1200`}
                  alt="Service preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}