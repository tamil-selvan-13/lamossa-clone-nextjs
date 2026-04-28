import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CloseButton({ className, ...props }: CloseButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border text-secondary hover:text-white hover:border-white/50 transition-all-ease focus:outline-none focus:ring-2 focus:ring-accent",
        className
      )}
      aria-label="Close"
      {...props}
    >
      <X className="w-5 h-5" />
    </button>
  );
}
