import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "text-2xl font-bold tracking-tight text-[#09090B] hover:opacity-80 transition-all-ease",
        className
      )}
    >
      {BRAND_NAME}
    </Link>
  );
}