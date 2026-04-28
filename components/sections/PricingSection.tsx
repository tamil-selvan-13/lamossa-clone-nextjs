"use client";

import { PRICING_PLANS } from "@/lib/constants";
import { Check } from "lucide-react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-[#F6F7F8] border-y border-[#EBECEF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#09090B]">Simple, transparent pricing</h2>
          <p className="text-xl text-[#5D5F6F] max-w-2xl mx-auto">
            Choose the plan that best fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div
              key={plan.id}
              className={cn(
                "relative p-8 rounded-3xl border flex flex-col h-full transition-all-ease",
                plan.isPopular 
                  ? "bg-white border-[#E1443A] shadow-[0_0_40px_rgba(225,68,58,0.1)]" 
                  : "bg-white border-[#EBECEF] hover:border-[#09090B]/30"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#E1443A] text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#09090B] mb-2">{plan.name}</h3>
              <div className="text-[#5D5F6F] mb-6 h-12">{plan.description}</div>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-[#09090B]">{plan.price}</span>
                {plan.price !== "Let's Talk" && <span className="text-[#5D5F6F]">/mo</span>}
              </div>

              <div className="flex-grow">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-[#09090B]">
                      <Check className="w-5 h-5 text-[#E1443A] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ArrowButton 
                variant={plan.isPopular ? "primary" : "secondary"} 
                className="w-full"
              >
                Get Started
              </ArrowButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}