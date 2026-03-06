"use client";

import { motion } from "framer-motion";
import PastEventCard, { EventData } from "@/components/events/PastEventCard";

export default function EventsPage() {
  // Dummy data curated for AI/ML and Tech teaching events
  const pastEvents: EventData[] = [
    {
      id: "ev-1",
      title: "Applied Machine Learning Bootcamp",
      date: "Feb 10, 2026",
      time: "10:00 AM - 4:00 PM",
      venue: "MGM College of Engineering, Navi Mumbai",
      description: "A comprehensive bootcamp guiding students through data preprocessing, model training, and deploying ML algorithms using Python and Scikit-Learn.",
      imageGradient: "from-blue-500 to-indigo-600"
    },
    {
      id: "ev-2",
      title: "AI for Web Developers: LLM Integration",
      date: "Jan 22, 2026",
      time: "1:00 PM - 5:00 PM",
      venue: "Virtual Event (Zoom)",
      description: "Taught web developers how to integrate Large Language Models (like OpenAI and Gemini APIs) into Next.js applications to build smart tools.",
      imageGradient: "from-emerald-400 to-teal-600"
    },
    {
      id: "ev-3",
      title: "Deep Learning & Neural Networks Masterclass",
      date: "Dec 05, 2025",
      time: "9:00 AM - 3:00 PM",
      venue: "Pune Institute of Technology",
      description: "An intensive masterclass on building and tuning deep neural networks from scratch using TensorFlow and PyTorch for real-world datasets.",
      imageGradient: "from-purple-500 to-fuchsia-600"
    },
    {
      id: "ev-4",
      title: "Computer Vision & Autonomous Systems",
      date: "Nov 18, 2025",
      time: "10:00 AM - 2:00 PM",
      venue: "IIT Bombay, Mumbai",
      description: "Hands-on workshop exploring OpenCV, image processing, and object detection models used in modern autonomous robotics and drones.",
      imageGradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-black dark:text-white transition-colors duration-300 pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Events & Workshops
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium max-w-2xl mx-auto">
            Discover our past bootcamps and masterclasses designed to equip students with cutting-edge AI, Machine Learning, and Cloud technologies.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PastEventCard event={event} />
            </motion.div>
          ))}
        </div>

        {/* Host Event Call To Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-blue-600 dark:bg-blue-900 rounded-3xl p-8 md:p-12 text-center shadow-xl flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Want to Host a Brevitus Event?</h2>
          <p className="text-blue-100 mb-8 max-w-xl">
            Bring industry-grade tech training directly to your campus. Partner with us to conduct high-impact hackathons and AI/ML skill-building workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-zinc-50 transition-colors shadow-lg active:scale-95">
              Partner With Us
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors active:scale-95">
              Explore Our Courses
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}