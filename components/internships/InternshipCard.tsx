"use client";

import { motion, Variants } from "framer-motion";
import { IconClock, IconCash, IconDownload, IconArrowRight } from "@tabler/icons-react";

export interface InternshipData {
  id: number;
  domain: string;
  title: string;
  duration: string;
  type: string;
  skills: string[];
  description: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function InternshipCard({ internship }: { internship: InternshipData }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col h-full p-6 sm:p-8 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-transparent dark:from-blue-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Domain */}
      <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
        {internship.domain}
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-extrabold mb-4 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
        {internship.title}
      </h3>

      {/* Clean Meta Row (Stacked on mobile, inline with a dot on desktop) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 text-sm font-semibold text-zinc-600 dark:text-zinc-400 shrink-0">
        <div className="flex items-center gap-2">
          <IconClock size={18} className="text-blue-500" /> 
          <span>{internship.duration}</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <div className="flex items-center gap-2">
          <IconCash size={18} className="text-emerald-500" /> 
          <span>{internship.type}</span>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-8 flex-grow leading-relaxed">
        {internship.description}
      </p>

      {/* Tech Stack (Minimal Outline Tags) */}
      <div className="mb-8 shrink-0">
        <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {internship.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1.5 text-xs font-bold border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800/80 mb-6 shrink-0" />

      {/* Action Buttons (100% width on mobile, split on desktop) */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto shrink-0">
        <button className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-zinc-300 dark:border-zinc-700 text-black dark:text-white text-sm font-bold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors active:scale-95">
          <IconDownload size={18} /> Syllabus
        </button>
        <button className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md active:scale-95">
          Apply Now <IconArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}