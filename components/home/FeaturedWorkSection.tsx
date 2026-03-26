"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

// Imports
import { featuredProjects } from "@/lib/featuredProjectsData";
import FeatureCard from "./FeatureCard";

export default function FeaturedWorkSection() {
  // State for the pill filter navigation
  const [filter, setFilter] = useState("All");
  
  // Extract categories to display (Adding "All" to the list of unique tags)
  const categories = ["All", "Student Project", "Research Project","Capstone Project"];

  // Filter the projects based on the selected tag
  const filteredProjects = filter === "All" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.tag === filter);

  return (
    <section className="w-full max-w-7xl px-6 py-24 mx-auto overflow-hidden">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
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
            href="" 
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white font-bold rounded-full hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 whitespace-nowrap"
          >
            View All Work 
            <IconArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Clean, Accessible Filter Tabs (Matches Events Page) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2 sm:gap-6 mb-12 border-b border-zinc-200 dark:border-zinc-800 w-full"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`pb-3 px-2 text-sm sm:text-base font-semibold transition-colors relative ${
              filter === cat
                ? "text-blue-600 dark:text-blue-400"
                : "text-zinc-500 hover:text-black dark:hover:text-white"
            }`}
          >
            {cat}
            {filter === cat && (
              <motion.div 
                layoutId="activeFeaturedTab"
                className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid mapping with Framer Motion AnimatePresence for smooth filtering */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={project.title} // Ensure key is unique so framer motion can track them during filters
            >
              <FeatureCard index={index} {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
    </section>
  );
}