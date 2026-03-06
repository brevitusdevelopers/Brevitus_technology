"use client";

import { Testimonial } from "@/lib/testimonial_data";

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div 
      className="w-[320px] md:w-[420px] h-[400px] md:h-[360px] shrink-0 p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 relative group flex flex-col justify-between overflow-hidden cursor-default"
    >
      
      {/* Subtle Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-transparent dark:from-blue-900/0 transition-colors duration-500 group-hover:from-blue-50/80 dark:group-hover:from-blue-900/10 -z-10" />

      <div className="mb-4">
        {/* Star Rating */}
        <div className="flex gap-1 text-yellow-400 mb-6 drop-shadow-sm">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </div>
        
        {/* Quote */}
        <p className="text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed whitespace-normal italic line-clamp-6 md:line-clamp-5">
          "{item.quote}"
        </p>
      </div>

      {/* User Info block (Forced to the bottom by justify-between) */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-transparent group-hover:border-zinc-100 dark:group-hover:border-zinc-800/50 transition-colors duration-300">
        <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-inner group-hover:scale-110 transition-transform duration-300">
          {item.name.charAt(0)}
        </div>
        <div className="flex flex-col overflow-hidden">
          <h4 className="font-bold text-black dark:text-white tracking-tight truncate">{item.name}</h4>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold truncate">{item.college}</p>
        </div>
      </div>

    </div>
  );
}