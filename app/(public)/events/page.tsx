"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PastEventCard, { EventData } from "@/components/events/PastEventCard";


import { pastEvents } from "@/lib/eventsData";

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Bootcamp", "Masterclass", "Workshop", "Hackathon"];

  const filteredEvents = filter === "All" 
    ? pastEvents 
    : pastEvents.filter(event => event.eventType === filter);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-black dark:text-white transition-colors duration-300 pt-20 pb-20 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Simple Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Events & Workshops
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover our past bootcamps, masterclasses, and hands-on sessions.
          </p>
        </motion.div>

        {/* Clean, Accessible Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-12 border-b border-zinc-200 dark:border-zinc-800 w-full max-w-3xl"
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
                  layoutId="activeTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div layout className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={event.id}
              >
                <PastEventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Clean Call To Action Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 text-center shadow-sm flex flex-col items-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Host a Brevitus Event?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl">
            Bring industry-grade tech training directly to your campus. Partner with us to conduct high-impact hackathons and skill-building workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
              {/*Partner With Us*/}
              Host an Event at Your Campus
            </button>
            <a
              href="/courses"
              className="px-6 py-3 bg-transparent border border-zinc-300 dark:border-zinc-700 text-black dark:text-white font-bold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center"
            >
              Explore Our Courses
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}