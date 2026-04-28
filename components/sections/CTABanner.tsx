"use client";

import { ArrowButton } from "@/components/ui/ArrowButton";
import { ProfileAvatars } from "@/components/ui/ProfileAvatars";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, damping: 20, stiffness: 66 }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 flex flex-col items-center gap-4">
            <ProfileAvatars />
            <p className="text-[#5D5F6F] font-medium">Trusted by 1,200+ founders worldwide</p>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#09090B]">
            Ready to scale your <br />digital presence?
          </h2>
          
          <p className="text-xl text-[#5D5F6F] max-w-2xl mx-auto mb-12">
            Let's discuss how we can help you achieve your business goals through strategic design and development.
          </p>
          
          <ArrowButton>Start Your Project</ArrowButton>
        </motion.div>
      </div>
    </section>
  );
}