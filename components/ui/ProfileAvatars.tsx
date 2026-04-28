import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfileAvatarsProps {
  className?: string;
}

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
];

export function ProfileAvatars({ className }: ProfileAvatarsProps) {
  return (
    <div className={cn("flex -space-x-4", className)}>
      {AVATARS.map((src, i) => (
        <div
          key={i}
          className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden"
          style={{ zIndex: AVATARS.length - i }}
        >
          <Image
            src={src}
            alt={`User ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}