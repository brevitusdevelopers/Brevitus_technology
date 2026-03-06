"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatProps {
  targetValue: number;
  label: string;
  suffix?: string;
  index: number;
}

const StatCounter = ({ targetValue, label, suffix = "+", index }: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Notice we did NOT use 'once: true' so it triggers every time it enters the viewport
  const isInView = useInView(ref, { margin: "-50px" }); 
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to targetValue when in view
      const controls = animate(count, targetValue, { 
        duration: 2, 
        ease: "easeOut",
        delay: index * 0.1 // Slightly stagger the start of each counter
      });
      return controls.stop;
    } else {
      // Reset back to 0 when the user scrolls away
      count.set(0);
    }
  }, [isInView, targetValue, count, index]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-4 w-full group"
    >
      <div className="flex items-center justify-center text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
        <motion.span>{rounded}</motion.span>
        <span className="text-blue-300 dark:text-blue-400 ml-1">{suffix}</span>
      </div>
      <span className="text-blue-100 dark:text-blue-200/80 font-semibold text-sm md:text-base uppercase tracking-wider text-center">
        {label}
      </span>
    </motion.div>
  );
};

export default function QuickStatsSection() {
  const stats = [
    { label: "Students Trained", value: 500, suffix: "+" },
    { label: "Projects Delivered", value: 120, suffix: "+" },
    { label: "Partner Colleges", value: 15, suffix: "+" },
    { label: "Domains Covered", value: 8, suffix: "+" },
  ];

  return (
    <section className="relative w-full bg-blue-700 dark:bg-blue-950 py-24 px-6 overflow-hidden">
      {/* Subtle Background Decorative Grid for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 md:divide-x divide-blue-500/50 dark:divide-blue-800/80">
        {stats.map((stat, i) => (
          <StatCounter 
            key={i} 
            index={i}
            targetValue={stat.value} 
            label={stat.label} 
            suffix={stat.suffix} 
          />
        ))}
      </div>
    </section>
  );
}