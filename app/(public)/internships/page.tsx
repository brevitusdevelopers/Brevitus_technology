"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  IconBriefcase,
  IconCode,
  IconUsers,
  IconAward
} from "@tabler/icons-react";
import InternshipCard from "@/components/internships/InternshipCard";

// IMPORT YOUR NEW DATA FILE HERE
import { internshipsData } from "@/lib/internshipsData"; 

export default function InternshipsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const features = [
    { icon: <IconBriefcase size={28} />, title: "Project-based", desc: "Work on real industry use-cases." },
    { icon: <IconUsers size={28} />, title: "Mentor-guided", desc: "1-on-1 guidance from experts." },
    { icon: <IconAward size={28} />, title: "Skill Certification", desc: "Validate your newly acquired skills." },
    { icon: <IconCode size={28} />, title: "Portfolio-ready", desc: "Graduate with a standout portfolio." },
  ];

  const journeySteps = [
    { title: "Apply", desc: "Submit your application and resume." },
    { title: "Learn", desc: "Master the fundamentals with mentors." },
    { title: "Build", desc: "Work on a live, real-world project." },
    { title: "Showcase", desc: "Present your work to industry experts." },
    { title: "Get Certified", desc: "Earn your verified credential." }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-black dark:text-white transition-colors duration-300 pt-20 pb-24 px-6 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24 mt-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Launch Your Career
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Gain hands-on experience, build real-world projects, and get mentored by industry professionals.
          </p>
        </motion.div>

        {/* Minimalist Features Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-5xl mb-24 sm:mb-32"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center sm:items-start text-center sm:text-left group"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-black dark:text-white">{feature.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Available Internships */}
        <section className="w-full mb-24 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center sm:text-left mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Available Opportunities</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Map over the imported internshipsData array */}
            {internshipsData.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </motion.div>
        </section>

        {/* Responsive Connected Timeline (Your Journey) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mb-24 sm:mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Your Journey</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium max-w-xl mx-auto">
              A clear, step-by-step path from application to graduation.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 px-4 sm:px-8">
            {/* The Connecting Line (Hidden on mobile, visible on MD+) */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-zinc-200 dark:bg-zinc-800 -z-10" />
            
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute top-6 bottom-6 left-[35px] w-0.5 bg-zinc-200 dark:bg-zinc-800 -z-10" />

            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-4 w-full md:w-48 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#050505] border-4 border-zinc-100 dark:border-zinc-900 shadow-sm flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 shrink-0">
                  {index + 1}
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <span className="font-bold text-black dark:text-white text-lg mb-1">{step.title}</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certificate Display */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl flex flex-col items-center"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Earn Your Credential</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium max-w-xl mx-auto">
              Successfully complete the internship and your final project to receive an industry-recognized certificate.
            </p>
          </div>

          {/* Minimalist Certificate Presentation Frame */}
          <div className="w-full relative p-2 sm:p-6 rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="relative z-10 w-full aspect-[1.414/1] md:aspect-[16/10] bg-zinc-50 dark:bg-[#050505] rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors group cursor-default">
              
              <Image 
                src="/assets/certificate.png" 
                alt="Sample Internship Certificate"
                fill
                className="object-contain p-2 md:p-4 group-hover:scale-[1.02] transition-transform duration-500"
              />
              
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}