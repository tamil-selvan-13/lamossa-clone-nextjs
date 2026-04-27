'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const posts = [
  { 
    title: 'Why Motion Design is the New Differentiator in SaaS', 
    author: 'Tarek El-Hassan', 
    date: 'Jul 9, 2025', 
    readTime: '8 min',
    tags: ['Motion Design', 'Design'],
    image: '/images/blog_office.png',
    featured: true 
  },
  { 
    title: 'The Psychology Behind High-Converting Landing Pages', 
    author: 'Maya Koji', 
    date: 'Jun 18, 2025', 
    readTime: '9 min',
    tags: ['Design', 'Technology'],
    image: '/images/project_1.png'
  },
  { 
    title: "Building an MVP That Doesn't Suck: 6 Rules to Follow", 
    author: 'Amina Johnson', 
    date: 'Jul 4, 2025', 
    readTime: '12 min',
    tags: ['product-development', 'Design'],
    image: '/images/project_2.png'
  },
];

const BlogCard = ({ post, featured }: { post: any, featured?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  if (featured) {
    return (
      <div ref={containerRef} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 66, damping: 20 }}
          className="bg-white rounded-[40px] border border-[#ebecef] p-4 shadow-sm group hover:shadow-xl transition-all duration-500"
        >
          <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8">
            <motion.img
              src={post.image}
              alt={post.title}
              style={{ scale: imageScale }}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 glass-blur border border-white/30 rounded-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">Featured</span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 text-[14px] text-[#737373] font-medium mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
              <span>{post.author}</span>
              <div className="w-1 h-1 bg-[#d4d8dd] rounded-full" />
              <span>{post.date}</span>
              <div className="w-1 h-1 bg-[#d4d8dd] rounded-full" />
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-[28px] font-bold text-[#171717] mb-6 leading-tight" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.03em' }}>
              {post.title}
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-[#f6f7f8] rounded-full text-[10px] font-bold text-[#737373] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-10 h-10 rounded-full border border-[#ebecef] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-white transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17l10-10M7 7h10v10" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 66, damping: 20 }}
        className="bg-white rounded-[32px] border border-[#ebecef] p-4 flex gap-6 group hover:shadow-lg transition-all duration-500"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[12px] text-[#737373] font-medium mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
            <span>{post.author}</span>
            <div className="w-1 h-1 bg-[#d4d8dd] rounded-full" />
            <span>{post.date}</span>
          </div>
          <h4 className="text-[18px] font-bold text-[#171717] mb-4 leading-snug" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.02em' }}>
            {post.title}
          </h4>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {post.tags.slice(0, 1).map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-[#f6f7f8] rounded-full text-[10px] font-bold text-[#737373] uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <div className="w-8 h-8 rounded-full border border-[#ebecef] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-white transition-colors duration-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17l10-10M7 7h10v10" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-32 h-32 rounded-[24px] overflow-hidden flex-shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      </motion.div>
    </div>
  );
};

export default function Blog() {
  return (
    <section className="section-padding bg-white">
      <div className="max-content-width">
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20 }}
            className="pill-badge mb-6"
          >
            <div className="w-2 h-2 bg-[#e1443a] rounded-sm" />
            <span className="text-[#404040] font-bold">Our Blog</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            <span className="text-[#171717]">Fresh insights & ideas</span><br />
            <span className="text-[#a3a3a3]">from the team.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <BlogCard post={posts[0]} featured />
          <div className="flex flex-col gap-6">
            <BlogCard post={posts[1]} />
            <BlogCard post={posts[2]} />
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" showArrow>
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
