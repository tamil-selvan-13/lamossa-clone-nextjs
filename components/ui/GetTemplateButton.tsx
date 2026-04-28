import { cn } from "@/lib/utils";
import Link from "next/link";

interface GetTemplateButtonProps {
  href?: string;
  className?: string;
}

export function GetTemplateButton({ href = "#", className }: GetTemplateButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#E1443A] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#E1443A] focus:ring-offset-2",
        className
      )}
    >
      Get Template
    </Link>
  );
}