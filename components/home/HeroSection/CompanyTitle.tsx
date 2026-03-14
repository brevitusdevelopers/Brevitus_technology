// components/home/CompanyTitle.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function CompanyTitle() {
  // 1. Entrance and Hover animations for the main container
  const h1Variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15, 
      },
    },
    hover: {
      scale: 1.03, 
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // 2. Entrance animation for the first word ("Brevitus")
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // 3. Entrance & Hover animation specifically for the 'i'
  const iVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.15, color: "#3b82f6", transition: { stiffness: 300 } }, 
  };

  // 4. Entrance & Hover animation for "Technology"
  const technologyVariants: Variants = {
    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
    hover: { y: -3, scale: 1.02, transition: { stiffness: 300 } }, 
  };

  return (
    <motion.h1
      // FIX 1: Changed `items-center` to `items-baseline` and removed `leading-none`
      className="flex flex-row items-baseline justify-center whitespace-nowrap gap-1.5 sm:gap-3 md:gap-5 text-[7.5vw] sm:text-[3.5rem] md:text-7xl lg:text-[96px] font-extrabold tracking-tight text-black dark:text-white pointer-events-auto"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={h1Variants}
    >
      {/* First Word Container */}
      <motion.div variants={wordVariants} className="flex flex-row items-baseline">
        <span>Brev</span>
        <motion.span
          className="text-blue-600 inline-block"
          variants={iVariants}
        >
          i
        </motion.span>
        <span>tus</span>
      </motion.div>

      {/* Second Word Container */}
      <motion.span
        // FIX 2: Added `pb-2 md:pb-4` to extend the background box so 'g' and 'y' aren't cut off
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 inline-block pb-2 md:pb-4"
        variants={technologyVariants}
      >
        Technology
      </motion.span>
    </motion.h1>
  );
}