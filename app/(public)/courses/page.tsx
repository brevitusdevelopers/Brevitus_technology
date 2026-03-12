"use client";

import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-black dark:text-white transition-colors duration-300 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          Our Courses
        </motion.h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card Example */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col p-6 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full w-max mb-4">
                Course Category
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Advanced Web Development</h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                ⏱ Duration: 6 Weeks
              </p>
              
              <div className="mb-6 flex-grow">
                <h3 className="text-sm font-semibold mb-1">Topic Objective:</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Learn to build scalable, full-stack applications from scratch. Master the fundamentals and advanced concepts required by top tech companies.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <a href="https://drive.google.com/uc?export=download&id=1Z2jW6YMCkatbfqNg-pVYxt34vpFPIDeh" download="curriculum.pdf">
                <button className="w-full px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 text-sm font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                  Download Curriculum
                </button>
                </a>
                <button className="w-full px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg hover:opacity-80 transition-opacity">
                  Host this Program
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}