"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export interface FeatureCardProps {
  title: string;
  desc?: string;           // Used for simple feature cards
  description?: string;    // Used for featured project cards
  icon?: React.ReactNode;  // Used for simple feature cards
  index?: number;
  category?: string;       // Featured project data
  techStack?: string[];    // Featured project data
  placeholderGradient?: string; // Featured project data
}

export default function FeatureCard({ 
  title, 
  desc, 
  description, 
  icon, 
  category, 
  techStack, 
  placeholderGradient 
}: FeatureCardProps) {
  
  // Display whichever description prop is passed
  const displayDesc = description || desc;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-300 overflow-hidden cursor-pointer h-full z-10 select-none"
      style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
    >
      {/* Subtle Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-transparent dark:from-blue-900/0 transition-colors duration-500 group-hover:from-blue-50/80 dark:group-hover:from-blue-900/10 -z-10" />

      {/* Render Project Style Gradient if data exists */}
      {placeholderGradient && (
        <div className={`w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br ${placeholderGradient} mb-6 shadow-inner flex items-center justify-center overflow-hidden relative`}>
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            <IconArrowRight size={24} className="text-white -rotate-45" />
          </div>
        </div>
      )}

      {/* Render Simple Icon Style if data exists and no gradient is passed */}
      {icon && !placeholderGradient && (
        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:-rotate-3">
          {icon}
        </div>
      )}

      {/* Text Content */}
      <div className="flex flex-col flex-grow">
        {category && (
          <span className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
            {category}
          </span>
        )}
        
        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed flex-grow font-medium pointer-events-none text-justify">
          {displayDesc}
        </p>

        {/* Technology Stack Pills */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {techStack.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}