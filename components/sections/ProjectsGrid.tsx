"use client";

import { PROJECTS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import { useState } from "react";
import { Project } from "@/lib/types";

export function ProjectsGrid() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#09090B]">Selected Work</h2>
            <p className="text-xl text-[#5D5F6F] max-w-2xl">
              A collection of our best projects spanning web design, apps, and branding.
            </p>
          </div>
          <Link href="#all-work" className="text-[#09090B] border-b border-[#09090B] pb-1 font-medium hover:text-[#E1443A] hover:border-[#E1443A] transition-all-ease">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-16' : ''}`}
              onClick={() => setPreviewProject(project)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#E1443A] transition-colors text-[#09090B]">{project.title}</h3>
                  <p className="text-[#5D5F6F]">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectPreviewCard project={previewProject} onClose={() => setPreviewProject(null)} />
    </section>
  );
}