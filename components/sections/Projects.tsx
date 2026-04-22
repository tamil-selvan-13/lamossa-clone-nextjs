'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';

const portfolioItems = [
  { name: 'Atlas Technologies', badges: ['UX Design', 'Web Design'], href: '/projects/atlas', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' },
  { name: 'Finlytics', badges: ['UI Design', 'Branding'], href: '/projects/finlytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop' },
  { name: 'Orbital Bank', badges: ['Fintech', 'UX Design', 'Web Design'], href: '/projects/orbital', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop' },
  { name: 'Echo Analytics', badges: ['UI Design', 'Motion Design'], href: '/projects/echo', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop' },
];

export default function Projects() {
  return (
    <section className="py-[160px] bg-white" id="projects">
      <div className="max-w-[1240px] mx-auto px-[24px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionLabel label="PROJECTS" />
          <h2 className="text-[48px] md:text-[56px] font-bold font-sans mt-4 text-black">
            Here's what <br />
            <span className="text-[#5D636F]">the momentum looks like.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] relative rounded-[32px] overflow-hidden bg-gray-100 border border-[#EBECEF]">
                <Image src={project.image} alt={project.name} fill unoptimized className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>{project.name}</h3>
                  <div className="flex gap-2 mt-2">
                    {project.badges.map((badge, j) => (
                      <span key={j} className="text-xs font-medium text-[#5D636F] uppercase tracking-wider">{badge}</span>
                    ))}
                  </div>
                </div>
                <Button href={project.href} variant="light" size="sm" showArrow>View</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
