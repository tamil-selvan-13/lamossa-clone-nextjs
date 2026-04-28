"use client";

import { BLOG_POSTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BlogSection() {
  return (
    <section id="blog" className="py-32 bg-[#F6F7F8] border-y border-[#EBECEF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#09090B]">Insights & News</h2>
            <p className="text-xl text-[#5D5F6F] max-w-2xl">
              Thoughts, resources, and updates from our team.
            </p>
          </div>
          <Link href="#all-articles" className="text-[#09090B] border-b border-[#09090B] pb-1 font-medium hover:text-[#E1443A] hover:border-[#E1443A] transition-all-ease">
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`#post-${post.id}`} className="group flex flex-col h-full">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white uppercase tracking-wider">
                  {post.category}
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-[#5D5F6F] mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#EBECEF]" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#09090B] mb-4 group-hover:text-[#E1443A] transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-[#EBECEF] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EBECEF]" />
                  <span className="text-sm font-medium text-[#09090B]">{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}