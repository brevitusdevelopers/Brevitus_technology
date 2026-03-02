"use client";

import { motion } from "framer-motion";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-black dark:text-white transition-colors duration-300 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Events & Workshops
        </motion.h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-center max-w-2xl">
          Discover our past and upcoming events designed to empower students across various campuses.
        </p>

        {/* Events List */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Single Event Card */}
          {[1, 2].map((i) => (
            <div key={i} className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
              {/* Photo/Recording Placeholder */}
              <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-500 text-sm">Event Photo/Video</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Tech Innovation Summit {i}</h2>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">College Name / Target Audience</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Key Takeaways:</h3>
                  <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <li>Industry trends and future scope</li>
                    <li>Hands-on experience with modern tools</li>
                    <li>Networking with professionals</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
            Host an Event at Your Campus
          </button>
          <button className="px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 font-bold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            Explore Our Courses
          </button>
        </div>

      </div>
    </div>
  );
}