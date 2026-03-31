"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// IMPORT YOUR DATA FILE HERE
import { coursesData } from "@/lib/coursesData";

export default function CoursesPage() {
  // Navigation State
  const [filter, setFilter] = useState("All");

  // Define our custom duration categories
  const categories = ["All", "Short Course", "Long Course"];

  // Filter logic based on the 'duration' string
  const filteredCourses = coursesData.filter(course => {
    if (filter === "All") return true;
    
    // We classify courses containing "hour" or "hours" as Short Courses.
    // Flexible, Marathon, or week/month-based courses become Long Courses.
    const isShortCourse = course.duration.toLowerCase().includes("hour");
    
    if (filter === "Short Course") return isShortCourse;
    if (filter === "Long Course") return !isShortCourse;
    
    return true;
  });

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
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our Courses
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover our specialized tech programs and bootcamps.
          </p>
        </motion.div>

        {/* Clean, Accessible Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-12 border-b border-zinc-200 dark:border-zinc-800 w-full max-w-4xl"
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
                  layoutId="activeCourseTab" 
                  className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                layout
                variants={cardVariants}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={course.title} // Used 'title' as a unique key for tracking
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
                    href={course.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <button className="w-full px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 text-sm font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                      Download Curriculum
                    </button>
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe08SWkQk04BgcQbyyB0irBXhek2jdfrLq-ug3HC-o85gMUgg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg hover:opacity-80 transition-opacity">
                      Host this Program
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}