"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import ProjectCard from "./ProjectCard";

export default function FeaturedWorkSection() {
  const featuredProjects = [
    {
      title: "Smart Campus Navigation App",
      category: "Student Project",
      techStack: ["React Native", "Node.js", "Mapbox API"],
      placeholderGradient: "from-emerald-400 to-teal-600", 
    },
    {
      title: "Eco-Track Sustainability Dashboard",
      category: "Capstone Project",
      techStack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      placeholderGradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Autonomous Drone Flight Logic",
      category: "Research Initiative",
      techStack: ["Python", "OpenCV", "C++", "ROS"],
      placeholderGradient: "from-purple-500 to-fuchsia-600",
    }
  ];

  return (
    <section className="w-full max-w-7xl px-6 py-24 mx-auto">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Featured Work
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg font-medium">
            Explore some of the standout digital products, platforms, and research projects developed by our incredible students and faculty members.
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
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white font-bold rounded-full hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95"
          >
            View All Work 
            <IconArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={index}
            index={index}
            title={project.title}
            category={project.category}
            techStack={project.techStack}
            placeholderGradient={project.placeholderGradient}
          />
        ))}
      </div>
    </section>
  );
}