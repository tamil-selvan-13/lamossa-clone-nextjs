'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import SectionTag from '../ui/SectionTag';

const posts = [
  { 
    title: 'Why Motion Design is the New Differentiator in SaaS', 
    author: 'Tarek El-Hassan', 
    date: 'Jul 9, 2025', 
    readTime: '8 min',
    badges: ['Motion Design', 'Design'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=640&fit=crop',
    featured: true 
  },
  { 
    title: 'The Psychology Behind High-Converting Landing Pages', 
    author: 'Maya Koji', 
    date: 'Jun 18, 2025', 
    readTime: '9 min',
    badges: ['Design', 'Technology'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=600&fit=crop'
  },
  { 
    title: "Building an MVP That Doesn't Suck: 6 Rules to Follow", 
    author: 'Amina Johnson', 
    date: 'Jul 4, 2025', 
    readTime: '12 min',
    badges: ['product-development', 'Design'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop'
  },
];

export default function Blog() {
  return (
    <section id="section-blogs" className="py-[120px] pb-12 bg-[#F9F9F9]">
      <div className="max-w-[1120px] mx-auto px-[24px]">
        <FadeIn className="flex flex-col items-start mb-12">
          <SectionTag text="OUR BLOG" color="#10B981" />
          <h2 className="text-[56px] font-black tracking-[-0.04em] text-[#000000] leading-[1.1] mb-8">
            Fresh insights & ideas.
          </h2>
          <p className="text-[18px] text-[#6B7280] max-w-[600px]">
            Expert tips, case studies, and trends to help you design, grow, and convert smarter.
          </p>
        </FadeIn>

        <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[64px] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[32px] overflow-hidden group">
              <div className="aspect-[5/4] relative bg-gray-100">
                <Image 
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[rgba(93,99,111,0.4)] backdrop-blur rounded-full px-3 py-1">
                  <span className="text-xs text-white">Featured</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-[#737373] mb-2">
                  <span>{posts[0].author}</span>
                  <span>•</span>
                  <span>{posts[0].date}</span>
                  <span>•</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <h3 className="text-xl font-medium text-[#171717] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {posts[0].title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {posts[0].badges.map((badge, i) => (
                      <span key={i} className="bg-[#F9F9F9] text-xs px-2 py-1 rounded-full">{badge}</span>
                    ))}
                  </div>
                  <span className="w-8 h-8 rounded-full border border-[#d4d8dd] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5d636f" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {posts.slice(1).map((post, i) => (
                <div key={i} className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-[32px] p-4 flex gap-4 group">
                  <div className="w-[30%] aspect-square relative bg-gray-100 rounded-2xl overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-[#737373] mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-medium text-[#171717] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {post.title}
                    </h3>
                    <div className="flex gap-2">
                      {post.badges.map((badge, j) => (
                        <span key={j} className="bg-[#F9F9F9] text-xs px-2 py-1 rounded-full">{badge}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/blog" variant="light">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}