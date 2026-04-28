import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
  totalReviews?: number;
  className?: string;
}

export function StarRating({ rating = 5, totalReviews = 150, className }: StarRatingProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "fill-[#E1443A] text-[#E1443A]" : "fill-white text-[#EBECEF]"
            )}
          />
        ))}
      </div>
      <div className="text-sm text-[#5D5F6F] font-medium">
        From {totalReviews}+ reviews
      </div>
    </div>
  );
}