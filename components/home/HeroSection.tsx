// components/home/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useState, useEffect } from "react";

// Import the DotGrid component
import DotGrid from './DotGrid';
// Import the newly created CompanyTitle component
import CompanyTitle from '@/components/home/HeroSection/CompanyTitle';

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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      
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

      {/* Content Layer */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUpVariant}
        className="relative z-10 max-w-4xl flex flex-col items-center gap-6 pointer-events-none"
      >
        
        {/* Render the extracted Company Name component from the new file */}
        <CompanyTitle />
        
        {/* Responsive Typewriter Effect */}
        <div className="mt-2 h-[40px] flex items-center justify-center pointer-events-auto w-full">
          <TypewriterEffect 
            words={typeWriterWords} 
            className="whitespace-nowrap text-sm sm:text-lg md:text-2xl max-w-2xl" 
          />
        </div>
        
      </motion.div>
    </section>
  );
}