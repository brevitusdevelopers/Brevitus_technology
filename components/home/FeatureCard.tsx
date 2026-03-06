"use client";

import { motion } from "framer-motion";

export interface FeatureCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}

export default function FeatureCard({ title, desc, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      // 1. Entrance Animation remains in Framer Motion for the smooth scroll-in spring effect
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        delay: index * 0.1 
      }}
      // 2. Interactive states moved to Tailwind CSS for flawless mobile execution:
      // - md:hover ensures the lift effect only happens on desktop (prevents "sticky hover" on mobile)
      // - active:scale-[0.96] shrinks the card instantly the moment a finger touches it
      // - select-none prevents the text from highlighting if the user presses too long
      className="relative group p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 
      transition-all duration-300 
      md:hover:-translate-y-2 md:hover:scale-[1.02] hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 
      active:scale-[0.96] active:shadow-sm overflow-hidden flex flex-col h-full z-10 cursor-pointer select-none"
      
      // 3. Mobile Webkit optimizations: removes the default grey flash on iOS tap and improves touch responsiveness
      style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
    >
      {/* Subtle background glow effect inside the card that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-transparent dark:from-blue-900/0 transition-colors duration-500 group-hover:from-blue-50/80 dark:group-hover:from-blue-900/10 -z-10" />

      {/* Icon Container with dynamic hover effects */}
      <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:-rotate-3">
        {icon}
      </div>

      {/* Text Content */}
      <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed flex-grow font-medium pointer-events-none">
        {desc}
      </p>
    </motion.div>
  );
}