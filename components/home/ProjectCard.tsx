"use client";

import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

export interface ProjectProps {
  title: string;
  category: string;
  techStack: string[];
  placeholderGradient: string;
  index: number;
}

export default function ProjectCard({ title, category, techStack, placeholderGradient, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      // Mobile tap feedback
      className="group flex flex-col cursor-pointer active:scale-[0.98] transition-transform duration-200"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Image Container with Overflow Hidden for the Zoom Effect */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
        
        {/* Placeholder Image (Replace with actual <Image /> tag later) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${placeholderGradient} group-hover:scale-105 transition-transform duration-700 ease-out`} />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
          {/* Sliding "View Project" Pill */}
          <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center gap-2 bg-white/90 dark:bg-black/90 text-black dark:text-white px-5 py-2.5 rounded-full font-bold text-sm backdrop-blur-sm shadow-xl">
            View Project <IconArrowUpRight size={18} />
          </div>
        </div>
      </div>

      {/* Project Meta Info */}
      <div className="flex flex-col px-2">
        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2 uppercase tracking-wider">
          {category}
        </p>
        <h3 className="text-2xl md:text-3xl font-extrabold text-black dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}