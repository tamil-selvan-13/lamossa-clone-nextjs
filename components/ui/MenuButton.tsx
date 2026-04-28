"use client";

import { cn } from "@/lib/utils";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MenuButton({ isOpen, onClick, className }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-12 h-12 rounded-full border border-[#EBECEF] bg-white flex items-center justify-center hover:border-[#09090B] transition-all-ease focus:outline-none focus:ring-2 focus:ring-[#E1443A]",
        className
      )}
      aria-label="Toggle Menu"
    >
      <div className="flex flex-col items-center justify-center w-6 h-5 relative overflow-hidden">
        <span
          className={cn(
            "w-full h-[2px] bg-[#09090B] absolute transition-all duration-300 ease-in-out",
            isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
          )}
        />
        <span
          className={cn(
            "w-full h-[2px] bg-[#09090B] absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-0 translate-x-4" : "opacity-100"
          )}
        />
        <span
          className={cn(
            "w-full h-[2px] bg-[#09090B] absolute transition-all duration-300 ease-in-out",
            isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
          )}
        />
      </div>
    </button>
  );
}