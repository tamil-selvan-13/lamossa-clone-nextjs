"use client";

import { REVIEWS } from "@/lib/constants";
import { StarRating } from "@/components/ui/StarRating";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#09090B]">Don't just take our word for it.</h2>
            <p className="text-xl text-[#5D5F6F] mb-8">
              We've helped hundreds of founders scale their businesses through strategic design.
            </p>
            <StarRating rating={5} totalReviews={150} />
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, damping: 20, stiffness: 66 }}
                className="p-8 rounded-2xl bg-[#F6F7F8] border border-[#EBECEF] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <span key={j} className="text-[#E1443A] text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-[#09090B] mb-8 leading-relaxed">
                    "{review.content}"
                  </p>
                </div>
                <div>
                  <div className="font-bold text-[#09090B]">{review.author}</div>
                  <div className="text-sm text-[#5D5F6F]">{review.role}, {review.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}