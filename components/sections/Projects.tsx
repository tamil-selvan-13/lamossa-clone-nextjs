'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const projects = [
  { 
    name: 'Orbital Website Redesign', 
    subtitle: '+21% signup conversion rate',
    tags: ['Fintech', 'UX Design', 'Web Design'], 
    image: '/images/project_1.png' 
  },
  { 
    name: 'Redesigning Atlas', 
    subtitle: '+45% engagement, -20% churn',
    tags: ['UX Design', 'Web Design'], 
    image: '/images/project_1.png' 
  },
  { 
    name: 'Launch MVP for Finlytics', 
    subtitle: 'Live in 27 days, 1,200+ early users',
    tags: ['UI Design', 'Branding'], 
    image: '/images/project_2.png' 
  },
  { 
    name: 'Echo Analytics', 
    subtitle: 'Modernizing data visualization',
    tags: ['UI Design', 'Motion Design'], 
    image: '/images/project_2.png' 
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 66, damping: 20, delay: index * 0.1 }}
        className="group relative"
      >
        <div className="bg-white rounded-[40px] border border-[#ebecef] p-4 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
          {/* Glass Header */}
          <div className="absolute top-8 left-8 right-8 z-10 flex items-center justify-between p-4 bg-white/20 glass-blur rounded-[24px] border border-white/30">
            <div className="flex flex-col gap-1">
              <h3 className="text-[20px] font-bold text-[#171717]" style={{ fontFamily: 'var(--font-satoshi)', letterSpacing: '-0.03em' }}>
                {project.name}
              </h3>
              <p className="text-[12px] text-[#737373] font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                {project.subtitle}
              </p>
              <div className="flex gap-2 mt-1">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-white/40 border border-white/50 rounded-full text-[10px] font-bold text-[#171717] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#171717] shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17l10-10M7 7h10v10" />
              </svg>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-[4/3] rounded-[32px] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.name}
              style={{ scale: imageScale }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="section-padding bg-white">
      <div className="max-content-width">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20 }}
            className="pill-badge mb-6"
          >
            <div className="w-2 h-2 bg-[#e1443a] rounded-sm" />
            <span className="text-[#404040] font-bold">Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 66, damping: 20, delay: 0.1 }}
            className="text-[40px] md:text-[48px] font-bold tracking-[-0.05em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            <span className="text-[#171717]">Here's what</span><br />
            <span className="text-[#a3a3a3]">the momentum looks like.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" showArrow>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
