"use client";

import Link from "next/link";
import { IconCalendarEvent, IconMapPin, IconClock, IconEye, IconFileDescription } from "@tabler/icons-react";

export interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  imageGradient: string;
}

export default function PastEventCard({ event }: { event: EventData }) {
  return (
    <div 
      // STRICT HEIGHT APPLIED HERE: h-[460px] guarantees uniform sizing across the grid
      className="w-full h-[460px] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a] transition-all duration-300 overflow-hidden flex flex-col group md:hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 active:scale-[0.98] cursor-pointer"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Image / Gradient Placeholder Section - Fixed Height */}
      <div className="relative h-48 shrink-0 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <div className={`absolute inset-0 bg-gradient-to-br ${event.imageGradient} transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100`} />
        {/* Subtle dark overlay at the bottom of the image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-black dark:text-white shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          COMPLETED
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow z-10 relative overflow-hidden">
        
        {/* Title clamped to 2 lines */}
        <h3 className="text-xl font-bold text-black dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 shrink-0">
          {event.title}
        </h3>

        {/* Date, Time, Venue Details */}
        <div className="space-y-2 mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 shrink-0">
          <div className="flex items-center gap-2.5">
            <IconCalendarEvent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <IconClock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <IconMapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>
        
        {/* Description clamped to 2 or 3 lines to fit the fixed height perfectly */}
        <p className="text-zinc-500 dark:text-zinc-500 text-sm mb-6 flex-grow line-clamp-2 md:line-clamp-3">
          {event.description}
        </p>
        
        {/* Action Buttons - Pushed to the bottom */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80 shrink-0">
          <button className="text-xs text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors font-bold uppercase tracking-wider">
            <IconEye className="w-4 h-4" /> Quick Look
          </button>
          
          <Link href={`/events/report/${event.id}`}>
            <button className="text-xs text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors font-bold uppercase tracking-wider">
              Full Report <IconFileDescription className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}