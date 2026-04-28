"use client";

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { Globe, Mail, MessageCircle, Rss } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F6F7F8] border-t border-[#EBECEF] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6 inline-block" />
            <p className="text-[#5D5F6F] max-w-sm mb-8">
              A premium creative agency delivering top-tier web design, branding, and digital experiences that convert.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-[#EBECEF] flex items-center justify-center text-[#5D5F6F] hover:text-[#09090B] hover:border-[#09090B] transition-all-ease">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-[#EBECEF] flex items-center justify-center text-[#5D5F6F] hover:text-[#09090B] hover:border-[#09090B] transition-all-ease">
                <Mail className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-[#EBECEF] flex items-center justify-center text-[#5D5F6F] hover:text-[#09090B] hover:border-[#09090B] transition-all-ease">
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-[#EBECEF] flex items-center justify-center text-[#5D5F6F] hover:text-[#09090B] hover:border-[#09090B] transition-all-ease">
                <Rss className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#09090B] font-semibold mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#services" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">Services</Link></li>
              <li><Link href="#work" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">Work</Link></li>
              <li><Link href="#process" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">Process</Link></li>
              <li><Link href="#pricing" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#09090B] font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">About Us</Link></li>
              <li><Link href="#blog" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">Blog</Link></li>
              <li><Link href="#" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">Careers</Link></li>
              <li><Link href="#" className="text-[#5D5F6F] hover:text-[#E1443A] transition-all-ease">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#EBECEF] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#5D5F6F]">
            &copy; 2024 lamosa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#5D5F6F]">
            <Link href="#" className="hover:text-[#09090B] transition-all-ease">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#09090B] transition-all-ease">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}