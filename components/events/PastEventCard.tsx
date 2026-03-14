"use client";

import Link from "next/link";
import { 
  IconCalendarEvent, 
  IconMapPin, 
  IconUser,
  IconArrowRight
} from "@tabler/icons-react";

export interface EventData {
  id: string;
  title: string;
  eventType: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  attendees: string;
  tags: string[];
  description: string;
  imageGradient: string;
}

export default function PastEventCard({ event }: { event: EventData }) {
  return (
    <div 
      className="w-full h-full flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a] transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-500/30 overflow-hidden group"
    >
      {/* 1. Image Area (Clean, no floating clutter) */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        {/* Placeholder Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${event.imageGradient} transition-transform duration-700 group-hover:scale-105`} />
        
        {/* Simple Type Badge */}
        <div className="absolute top-4 left-4 bg-white dark:bg-black px-3 py-1 rounded-md text-xs font-bold text-black dark:text-white shadow-sm uppercase tracking-wider">
          {event.eventType}
        </div>
      </div>
      
      {/* 2. Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-xl font-bold text-black dark:text-white mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {event.title}
        </h3>

        {/* Clean, readable info list */}
        <div className="space-y-2 mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2.5">
            <IconCalendarEvent className="w-4 h-4 text-blue-500 shrink-0" />
            <span>{event.date} • {event.time}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <IconMapPin className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <IconUser className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="truncate">Led by {event.speaker} • {event.attendees}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-500 dark:text-zinc-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {event.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 shrink-0">
          {event.tags.map((tag, idx) => (
            <span key={idx} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold rounded-md">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action Button
        <div className="mt-auto shrink-0">
          <Link 
            href={`/events/report/${event.id}`} 
            className="flex items-center justify-between w-full py-3 px-4 bg-transparent border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-black dark:text-white text-sm font-bold rounded-xl transition-colors"
          >
            Read Event Report 
            <IconArrowRight className="w-4 h-4 text-blue-500" />
          </Link>
        </div> */}

      </div>
    </div>
  );
}