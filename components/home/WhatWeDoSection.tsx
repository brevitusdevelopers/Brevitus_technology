"use client";

import { motion } from "framer-motion";
import { IconBook2, IconBriefcase, IconUsersGroup, IconBulb } from "@tabler/icons-react";
import FeatureCard from "./FeatureCard"; // Import the separated component

export default function WhatWeDoSection() {
  const features = [
    { 
      title: "Skill-Based Learning", 
      icon: <IconBook2 size={32} stroke={1.5} />, 
      desc: "Master the latest technologies with a hands-on, practical curriculum designed for the modern tech landscape." 
    },
    { 
      title: "Industry Projects", 
      icon: <IconBriefcase size={32} stroke={1.5} />, 
      desc: "Work on real-world problems, build a standout portfolio, and gain the tangible experience top tech companies demand." 
    },
    { 
      title: "Internships & Mentorship", 
      icon: <IconUsersGroup size={32} stroke={1.5} />, 
      desc: "Get directly guided by industry experts, build valuable networking connections, and earn real-world experience." 
    },
    { 
      title: "Research & Innovation Support",
      icon: <IconBulb size={32} stroke={1.5} />, 
      desc: "Receive comprehensive support, guidance, and resources for transforming your creative ideas into viable products." 
    },
  ];

  return (
    <section className="w-full max-w-7xl px-6 py-24 relative">
      {/* Subtle ambient background blob for depth across the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-blue-500/5 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
          What We Do
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Bridging the gap between academics and industry through practical learning and real-world exposure.
        </p>
      </motion.div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {features.map((item, index) => (
          <FeatureCard 
            key={index}
            index={index}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}