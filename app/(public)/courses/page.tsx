"use client";

import { motion, Variants } from "framer-motion";

export default function CoursesPage() {
  const courses = [
    {
      title: "Creating Agentic AI workflows with no code tools",
      duration: "3 hours",
      suitableFor: "Students and Faculties",
      overview:
        "Step into the future of automation by creating Agentic AI workflows using no-code tools. Discover how AI agents can analyse information, make decisions, and execute tasks independently. Learn how to design smart workflows where AI agents collaborate with tools to solve problems autonomously.",
    },
    {
      title: "Launching yourself from campus to corporate",
      duration: "3 hours",
      suitableFor: "Final year students",
      overview:
        "Moving from campus to corporate is more than getting a job — it is about developing the mindset of a professional. This program equips students with the skills, discipline, and confidence needed to thrive in the workplace. Learn how to transform academic potential into corporate success.",
    },
    {
      title: "Learn Business Intelligence using Power BI",
      duration: "3 hours",
      suitableFor: "Students",
      overview:
        "Data is valuable only when it drives decisions. This session introduces the core concepts of Business Intelligence and shows how Power BI can be used to analyse data, create visual reports, and uncover insights that support smarter business decisions.",
    },
    {
      title: "Building Next Generation AI ChatBot with RAG Model",
      duration: "3 hours",
      suitableFor: "Students and Faculties",
      overview:
        "Discover how modern AI chatbots go beyond simple responses using the RAG model. This session introduces the architecture behind intelligent conversational systems that retrieve information and generate accurate answers. Participants will gain practical insights into building next-generation AI chatbots.",
    },
  ];

  // Framer motion variants for staggered animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-black dark:text-white transition-colors duration-300 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
        >
          Our Courses
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col p-6 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full w-max mb-4">
                {course.suitableFor}
              </div>

              {/* Title & Duration */}
              <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {course.title}
              </h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                ⏱ Duration: {course.duration}
              </p>

              {/* Overview */}
              <div className="mb-8 flex-grow">
                <h3 className="text-sm font-semibold mb-2 text-black dark:text-white">
                  Topic Objective:
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                  {course.overview}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="https://drive.google.com/uc?export=download&id=1Z2jW6YMCkatbfqNg-pVYxt34vpFPIDeh"
                  download="curriculum.pdf"
                >
                  <button className="w-full px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 text-sm font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    Download Curriculum
                  </button>
                </a>
                <button className="w-full px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg hover:opacity-80 transition-opacity">
                  Host this Program
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}