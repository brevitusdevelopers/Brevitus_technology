"use client";

import { motion } from "framer-motion";
import { IconQuote, IconTarget, IconEye, IconUsers } from "@tabler/icons-react";

export default function AboutUsSection() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const whoWeWorkWith = [
    { label: "Colleges", icon: <IconUsers size={18} stroke={1.5} /> },
    { label: "Faculty", icon: <IconUsers size={18} stroke={1.5} /> },
    { label: "Students", icon: <IconUsers size={18} stroke={1.5} /> },
    { label: "Industry Mentors", icon: <IconUsers size={18} stroke={1.5} /> },
  ];

  return (
    <section className="w-full bg-zinc-50 dark:bg-[#050505]">
      <div className="w-full max-w-7xl px-6 py-24 mx-auto relative">
        {/* Subtle ambient background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-500/5 dark:bg-blue-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* ==================== HEADER & WHO WE ARE ==================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUpVariant}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Us
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed font-medium text-justify">
              At Brevitus Technology, we believe growth begins when curiosity meets courage. 
              We encourage learners to question, explore, and challenge themselves beyond comfort zones. 
              Every journey here is shaped by persistence, creativity, and the willingness to learn from experience. 
              We celebrate progress over perfection and value effort as much as outcomes. 
              Together, we build a community driven by passion, purpose, and possibility.
            </p>
          </div>
        </motion.div>

        {/* ==================== MISSION & VISION GRID ==================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 mb-20"
        >
          {/* Mission Card */}
          <motion.div
            variants={fadeUpVariant}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 
            transition-all duration-300 
            md:hover:-translate-y-2 md:hover:scale-[1.02] hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 
            overflow-hidden flex flex-col h-full"
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-transparent dark:from-blue-900/0 transition-colors duration-500 group-hover:from-blue-50/80 dark:group-hover:from-blue-900/10 -z-10" />
            
            {/* Icon */}
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:-rotate-3">
              <IconTarget size={32} stroke={1.5} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Our Mission
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed font-medium flex-grow">
              To empower students and professionals by providing practical, industry-relevant learning experiences 
              that transform knowledge into real-world skills, enabling them to build meaningful solutions and 
              confidently launch their careers in the digital age.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeUpVariant}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 
            transition-all duration-300 
            md:hover:-translate-y-2 md:hover:scale-[1.02] hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 
            overflow-hidden flex flex-col h-full"
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-transparent dark:from-indigo-900/0 transition-colors duration-500 group-hover:from-indigo-50/80 dark:group-hover:from-indigo-900/10 -z-10" />
            
            {/* Icon */}
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-600 dark:group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/30 group-hover:rotate-3">
              <IconEye size={32} stroke={1.5} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              Our Vision
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed font-medium flex-grow">
              To become a trusted learning and innovation partner that strengthens talent from foundational 
              understanding to professional excellence, inspiring individuals to rise beyond limitations and 
              thrive in a technology-driven world.
            </p>
          </motion.div>
        </motion.div>

        {/* ==================== WHO WE WORK WITH ==================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUpVariant}
          className="text-center mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white tracking-tight mb-8">
            Who We Work With
          </h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {whoWeWorkWith.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                transition={{ duration: 0.4 }}
                className="group flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a] 
                transition-all duration-300 
                hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  {item.icon}
                </span>
                <span className="text-zinc-700 dark:text-zinc-300 font-medium text-base transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ==================== ABOUT FOUNDER ==================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeUpVariant}
          className="relative rounded-3xl bg-zinc-100 dark:bg-zinc-900 p-8 md:p-12 overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image Placeholder
            <div className="shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-2xl shadow-blue-500/20">
              <IconUsers size={80} stroke={1} className="text-white/80" />
            </div> */}

            {/* Founder Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <IconQuote size={28} stroke={1.5} className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-black dark:text-white tracking-tight">
                  About the Founder
                </h3>
              </div>
              
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed font-medium text-justify">
                <p>
                  The founder of Brevitus Technology is a visionary educator and technology professional who believes 
                  that education should ignite curiosity, build confidence, and create real-world impact beyond classrooms 
                  and textbooks. With hands-on experience in emerging technologies and a strong academic foundation, 
                  the founder recognized a growing disconnect between theoretical learning and practical industry demands.
                </p>
                <p>
                  Inspired by the idea that every learner has the potential to rise higher with the right guidance and 
                  opportunities, Brevitus Technology was created as a space where learning transforms into action. Here, 
                  students explore concepts deeply, turn ideas into meaningful projects, and develop problem-solving 
                  abilities that prepare them for real challenges.
                </p>
                <p>
                  Working closely with colleges, faculty members, and students, the founder designs learning experiences 
                  that encourage innovation, continuous growth, and professional excellence. Through thoughtfully crafted 
                  workshops, internships, courses, and mentorship programs, Brevitus Technology aims to shape confident 
                  learners who are prepared to create, contribute, and lead in their chosen paths.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
