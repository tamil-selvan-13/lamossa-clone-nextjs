"use client";

import { ArrowButton } from "@/components/ui/ArrowButton";
import { ProfileAvatars } from "@/components/ui/ProfileAvatars";
import { StarRating } from "@/components/ui/StarRating";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, damping: 20, stiffness: 66 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBECEF] mb-8"
          >
            <span className="text-[#E1443A]">★</span>
            <span className="text-sm font-medium text-[#5D5F6F]">Award-winning design agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, damping: 20, stiffness: 66 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-[#09090B]"
          >
            We build digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1443A] to-[#09090B]">convert.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, damping: 20, stiffness: 66 }}
            className="text-xl text-[#5D5F6F] mb-12 max-w-2xl mx-auto"
          >
            Partner with us to create premium websites, brands, and digital products that stand out and drive growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, damping: 20, stiffness: 66 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <ArrowButton className="w-full sm:w-auto">Book A Call</ArrowButton>
            <ArrowButton variant="secondary" href="#work" className="w-full sm:w-auto">View Projects</ArrowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, damping: 20, stiffness: 66 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <ProfileAvatars />
            <div className="h-10 w-px bg-[#EBECEF] hidden sm:block" />
            <StarRating />
          </motion.div>
        </div>
      </div>
    </section>
  );
}