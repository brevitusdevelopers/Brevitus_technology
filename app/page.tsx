"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  IconBook2, 
  IconBriefcase, 
  IconUsersGroup, 
  IconBulb,
  IconArrowRight
} from "@tabler/icons-react";

export default function Home() {
  // Animation variants for staggered fading in
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col items-center overflow-hidden" suppressHydrationWarning={true}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="max-w-4xl flex flex-col items-center gap-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white">
            Brevitus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 font-medium max-w-2xl">
            Empowering Students to Learn, Build, and Fly.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/courses" className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95">
              Explore Courses
            </Link>
            <Link href="/internships" className="px-8 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white font-semibold rounded-full hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95">
              Explore Internships
            </Link>
            <Link href="/our-work" className="px-8 py-3.5 bg-transparent border border-transparent text-zinc-600 dark:text-zinc-400 font-semibold rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all active:scale-95">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* --- WHAT WE DO SECTION --- */}
      <section className="w-full max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">What We Do</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Bridging the gap between academics and industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Skill-Based Learning", icon: <IconBook2 size={32} />, desc: "Master the latest technologies with hands-on, practical curriculum." },
            { title: "Industry Projects", icon: <IconBriefcase size={32} />, desc: "Work on real-world problems and build a standout portfolio." },
            { title: "Internships & Mentorship", icon: <IconUsersGroup size={32} />, desc: "Get guided by industry experts and earn valuable experience." },
            { title: "Research & Innovation", icon: <IconBulb size={32} />, desc: "Support for transforming your creative ideas into viable products." },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- QUICK STATS SECTION --- */}
      <section className="w-full bg-blue-600 dark:bg-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/30 dark:divide-blue-800">
          {[
            { label: "Students Trained", value: "500+" },
            { label: "Projects Delivered", value: "120+" },
            { label: "Partner Colleges", value: "15+" },
            { label: "Domains Covered", value: "8+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</span>
              <span className="text-blue-100 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- JOURNEYS WITH BREVITUS (Feedback) --- */}
      <section className="w-full max-w-7xl px-6 py-24 bg-zinc-50 dark:bg-[#050505]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Journeys with Brevitus</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Hear from the students who built and flew with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <div className="flex gap-1 text-blue-500 mb-4">
                ★★★★★
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6 italic">
                "Brevitus Technology completely changed my approach to learning. The hands-on projects and mentorship helped me secure my first tech job!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                <div>
                  <h4 className="font-bold text-sm text-black dark:text-white">Student Name</h4>
                  <p className="text-xs text-zinc-500">Computer Science Engineering</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED WORK --- */}
      <section className="w-full max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Featured Work</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl">
              Explore some of the standout projects developed by our incredible students and faculty members.
            </p>
          </div>
          <Link href="/our-work" className="group flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-colors">
            View All Work <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-full h-64 bg-zinc-200 dark:bg-zinc-800 rounded-2xl mb-4 overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">View Project Details</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Project Title {index + 1}</h3>
              <p className="text-zinc-500 mt-2 text-sm">Tech Stack: React, Node.js, MongoDB</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}