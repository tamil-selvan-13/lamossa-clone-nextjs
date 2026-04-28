"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { MenuButton } from "@/components/ui/MenuButton";
import Link from "next/link";
import { GetTemplateButton } from "@/components/ui/GetTemplateButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border border-[#EBECEF] rounded-[32px] mt-3 mx-auto max-w-7xl left-0 right-0" 
            : "bg-transparent"
        )}
        style={isScrolled ? { width: 'calc(100% - 48px)', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' } : {}}
      >
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-[#5D5F6F] hover:text-[#09090B] transition-all-ease">Services</Link>
            <Link href="#work" className="text-sm font-medium text-[#5D5F6F] hover:text-[#09090B] transition-all-ease">Work</Link>
            <Link href="#process" className="text-sm font-medium text-[#5D5F6F] hover:text-[#09090B] transition-all-ease">Process</Link>
            <Link href="#pricing" className="text-sm font-medium text-[#5D5F6F] hover:text-[#09090B] transition-all-ease">Pricing</Link>
            <Link href="#faq" className="text-sm font-medium text-[#5D5F6F] hover:text-[#09090B] transition-all-ease">FAQ</Link>
          </nav>

          <div className="flex items-center gap-4">
            <GetTemplateButton />
            <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden" />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-32 px-6 lg:hidden">
          <nav className="flex flex-col gap-6 text-2xl font-semibold">
            <Link href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="#work" onClick={() => setIsMenuOpen(false)}>Work</Link>
            <Link href="#process" onClick={() => setIsMenuOpen(false)}>Process</Link>
            <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          </nav>
          <div className="mt-8">
            <GetTemplateButton className="w-full" />
          </div>
        </div>
      )}
    </>
  );
}