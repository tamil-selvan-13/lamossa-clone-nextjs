import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function ArrowButton({
  href,
  variant = "primary",
  children,
  className,
  ...props
}: ArrowButtonProps) {
  const baseStyles = "group inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 font-medium transition-all-ease focus:outline-none focus:ring-2 focus:ring-[#E1443A]";
  const variants = {
    primary: "bg-[#09090B] text-white hover:bg-[#09090B]/90",
    secondary: "bg-white border border-[#EBECEF] text-[#09090B] hover:border-[#09090B]/50",
  };

  const content = (
    <>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {content}
    </button>
  );
}