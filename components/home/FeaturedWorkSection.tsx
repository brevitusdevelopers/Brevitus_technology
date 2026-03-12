"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Imports
// Note: Adjust the import paths depending on your exact folder structure
import { featuredProjects } from "@/lib/featuredProjectsData";
import FeatureCard from "./FeatureCard";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Animation for the section entering the viewport
  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Triggers when the top of the section hits 80% down the viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full max-w-7xl px-6 py-24 mx-auto overflow-hidden">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Featured Work
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg font-medium text-justify md:text-left">
            Explore some of the standout digital products, AI models, and research projects developed by our incredible students and faculty members.
          </p>
        </motion.div>

        {/* Enhanced CTA Link */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link 
            href="/our-work" 
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white font-bold rounded-full hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 whitespace-nowrap"
          >
            View All Work 
            <IconArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Projects Grid mapping with FeatureCard */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
        {featuredProjects.map((project, index) => (
          /* Wrap the FeatureCard in a div to allow GSAP to animate it seamlessly */
          <div key={index} className="opacity-0 translate-y-[50px]">
            <FeatureCard index={index} {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}