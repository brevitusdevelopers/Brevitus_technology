"use client";

import { motion } from "framer-motion";

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-black dark:text-white transition-colors duration-300 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          Internships
        </motion.h1>

        {/* Why Our Internships? */}
        <section className="w-full max-w-4xl mb-16 p-8 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Why Our Internships?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-2"><span className="text-blue-500">✔</span> Project-based</div>
            <div className="flex items-center gap-2"><span className="text-blue-500">✔</span> Mentor-guided</div>
            <div className="flex items-center gap-2"><span className="text-blue-500">✔</span> Skill certification</div>
            <div className="flex items-center gap-2"><span className="text-blue-500">✔</span> Portfolio-ready outcomes</div>
          </div>
        </section>

        {/* Available Internships */}
        <section className="w-full mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Available Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example Card */}
            {[1, 2].map((i) => (
              <div key={i} className="p-6 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-500 transition-colors">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">Internship Domain • Learning Domain</div>
                <h3 className="text-xl font-bold mb-4">Frontend Development Internship</h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 space-y-1">
                  <p><strong>Duration:</strong> 3 Months</p>
                  <p><strong>Charges:</strong> Free / Paid</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    Download Syllabus
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Interest in Internship
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Journey */}
        <section className="w-full max-w-5xl mb-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Student Journey</h2>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50 text-blue-900 dark:text-blue-100 font-medium">
            <span>Apply</span> <span>→</span>
            <span>Learn</span> <span>→</span>
            <span>Build</span> <span>→</span>
            <span>Showcase</span> <span>→</span>
            <span>Get Internship Certificate</span>
          </div>
        </section>

        {/* Certificate Display */}
        <section className="w-full max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6">Sample Certificate</h2>
          <div className="w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-300 dark:border-zinc-700">
            <span className="text-zinc-500 dark:text-zinc-400">Certificate Image Placeholder</span>
          </div>
        </section>

      </div>
    </div>
  );
}