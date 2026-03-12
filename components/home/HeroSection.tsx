"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useState, useEffect } from "react";

// Import the DotGrid component
import DotGrid from './DotGrid';

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Safely detect dark mode changes (works with Tailwind and next-themes)
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check initial theme on mount
    checkTheme();

    // Observe changes to the 'class' attribute on the <html> element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const typeWriterWords = [
    { text: "Empowering", className: "text-zinc-600 dark:text-zinc-300 font-medium" },
    { text: "Students", className: "text-zinc-600 dark:text-zinc-300 font-medium" },
    { text: "to", className: "text-zinc-600 dark:text-zinc-300 font-medium" },
    { text: "Learn,", className: "text-blue-600 dark:text-blue-400 font-bold" },
    { text: "Build,", className: "text-indigo-600 dark:text-indigo-400 font-bold" },
    { text: "and", className: "text-zinc-600 dark:text-zinc-300 font-medium" },
    { text: "Fly.", className: "text-emerald-600 dark:text-emerald-400 font-bold" },
  ];

  // Dynamically set DotGrid colors based on the current theme
  const gridBaseColor = isDarkMode ? "#271E37" : "#e4e4e7"; // Dark grey/purple vs Light Zinc
  const gridActiveColor = isDarkMode ? "#5227FF" : "#2563eb"; // Bright Purple vs Bright Blue

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      
      {/* Interactive DotGrid Background Layer */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor={gridBaseColor}
          activeColor={gridActiveColor}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Existing Background Blur Element */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
       */}
      {/* Content Layer */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUpVariant}
        className="relative z-10 max-w-4xl flex flex-col items-center gap-6 pointer-events-none"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white pointer-events-auto">
          Brevitus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Technology</span>
        </h1>
        
        {/* Responsive Typewriter Effect */}
        <div className="mt-2 h-[40px] flex items-center justify-center pointer-events-auto w-full">
          <TypewriterEffect 
            words={typeWriterWords} 
            className="whitespace-nowrap text-sm sm:text-lg md:text-2xl max-w-2xl" 
          />
        </div>
        
        {/* <div className="flex flex-wrap justify-center gap-4 mt-8 pointer-events-auto">
          <Link href="/courses" className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95">
            Explore Courses
          </Link>
          <Link href="/internships" className="px-8 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white font-semibold rounded-full hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95">
            Explore Internships
          </Link>
          <Link href="/our-work" className="px-8 py-3.5 bg-transparent border border-transparent text-zinc-600 dark:text-zinc-400 font-semibold rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all active:scale-95">
            View Our Work
          </Link>
        </div> */}
      </motion.div>
    </section>
  );
}