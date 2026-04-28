"use client";

import { CloseButton } from "@/components/ui/CloseButton";
import { Project } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewCardProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectPreviewCard({ project, onClose }: ProjectPreviewCardProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-8 right-8 z-50 w-full max-w-sm rounded-2xl bg-surface border border-border overflow-hidden shadow-2xl"
        >
          <div className="relative h-48 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <CloseButton onClick={onClose} />
            </div>
          </div>
          <div className="p-6">
            <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">{project.category}</div>
            <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
            <button className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-all-ease">
              View Case Study
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
