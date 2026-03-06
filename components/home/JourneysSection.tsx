"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/testimonial_data";

export default function JourneysSection() {
  // We duplicate the array to ensure the infinite scrolling loop is perfectly seamless
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-24 bg-zinc-50 dark:bg-[#050505] overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
          Journeys with Brevitus
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
          Hear from the students who built, learned, and flew with us.
        </p>
      </div>

      {/* Marquee Container:
        The mask-image creates a smooth fade-out effect on the left and right edges.
      */}
      <div className="relative w-full max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
        <motion.div
          className="flex w-max gap-6 pr-6 items-stretch"
          // Moves the entire flex container from 0 to -50% (exactly half its width)
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45, // Increase to slow down, decrease to speed up
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <TestimonialCard key={`${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}