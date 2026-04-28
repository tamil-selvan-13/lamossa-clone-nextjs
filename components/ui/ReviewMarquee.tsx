"use client";

import { cn } from "@/lib/utils";
import { REVIEWS } from "@/lib/constants";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface ReviewMarqueeProps {
  className?: string;
}

export function ReviewMarquee({ className }: ReviewMarqueeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("w-full overflow-hidden flex bg-surface/30 border-y border-border py-4", className)}>
      <div className="flex w-max animate-marquee space-x-8 px-4">
        {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
          <div key={`${review.id}-${i}`} className="flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-secondary whitespace-nowrap">
              "{review.content}" — <span className="text-white font-medium">{review.author}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
