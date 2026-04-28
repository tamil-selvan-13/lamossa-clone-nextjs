"use client";

import { cn } from "@/lib/utils";

const LOGOS = [
  "Acme Corp", "Globalia", "Stark Industries", "Wayne Ent", "Initech", "Soylent", "Massive Dynamic", "Cyberdyne"
];

export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-[#EBECEF] bg-white/30">
      <div className="container mx-auto px-6 max-w-7xl mb-6">
        <p className="text-center text-[#5D5F6F] text-sm font-medium uppercase tracking-widest">Trusted by top founders</p>
      </div>
      <div className="w-full overflow-hidden flex">
        <div className="flex w-max animate-marquee space-x-16 px-8">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="text-2xl font-bold text-[#09090B]/20 whitespace-nowrap">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}