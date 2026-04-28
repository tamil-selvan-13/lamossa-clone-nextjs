"use client";

import { ArrowRight } from "lucide-react";

export function NewsletterSection() {
  return (
    <div className="bg-surface border border-border rounded-3xl p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
          <p className="text-secondary">Get the latest insights, news and resources delivered directly to your inbox.</p>
        </div>
        
        <div className="w-full md:w-1/2">
          <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-background border border-border rounded-full py-4 pl-6 pr-32 text-white placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all-ease"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-full font-semibold flex items-center gap-2 hover:bg-white/90 transition-all-ease"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-xs text-secondary mt-3 ml-4">
            We care about your data. Read our <a href="#" className="underline hover:text-white transition-all-ease">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
