// data/eventsData.ts

import { EventData } from "@/components/events/PastEventCard";

export const pastEvents: EventData[] = [
  {
    id: "ev-1",
    title: "Automation Bounty Hunt",
    eventType: "Workshop",
    date: "Mar 15, 2026",
    time: "10:00 AM - 2:00 PM",
    venue: "SIES GST, Navi Mumbai",
    speaker: "Guest Speaker",
    attendees: "50+ attended",
    tags: ["Agentic AI", "n8n", "Automation"],
    description: "Introduced students to Agentic AI and automated workflows using n8n, demonstrating real-world automation systems and decision-making.",
    imageGradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "ev-2",
    title: "Faculty Development Program on Agentic AI",
    eventType: "Masterclass",
    date: "Mar 10, 2026",
    time: "11:00 AM - 3:00 PM",
    venue: "SIES GST, Navi Mumbai",
    speaker: "Lead Trainer",
    attendees: "25+ attended",
    tags: ["Agentic AI", "n8n", "FDP"],
    description: "Trained faculty members on building intelligent, AI-driven workflows using n8n with hands-on practical implementation and real-world use cases.",
    imageGradient: "from-emerald-400 to-teal-600"
  },
  {
    id: "ev-3",
    title: "Data Science 20 Days Marathon Program",
    eventType: "Bootcamp",
    date: "Feb 01 - Feb 20, 2026",
    time: "Flexible",
    venue: "Virtual Event (Zoom)",
    speaker: "Lead Instructor",
    attendees: "30+ attended",
    tags: ["Data Science", "Python", "Machine Learning"],
    description: "A 20-day comprehensive virtual bootcamp covering Python, data analysis, visualization, and machine learning through hands-on mini-projects.",
    imageGradient: "from-purple-500 to-fuchsia-600"
  },
  {
    id: "ev-4",
    title: "AI-Powered Banking Transformation",
    eventType: "Masterclass",
    date: "Feb 25, 2026",
    time: "9:00 AM - 1:00 PM",
    venue: "HDFC Bank (Corporate)",
    speaker: "Corporate Trainer",
    attendees: "30+ attended",
    tags: ["FinTech", "AI Strategy", "Corporate Training"],
    description: "Corporate training for HDFC executives on leveraging AI for banking transformation, focusing on automation, data-driven decisions, and risk reduction.",
    imageGradient: "from-orange-400 to-red-500"
  },
  {
    id: "ev-5",
    title: "FDP - Agentic AI Masterclass",
    eventType: "Masterclass",
    date: "Jan 18, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    speaker: "Lead Trainer",
    attendees: "40+ attended",
    tags: ["GenAI", "RAG", "Agentic AI"],
    description: "Specialized training for educators on GenAI, focusing on Retrieval-Augmented Generation (RAG) models and building autonomous agentic workflows.",
    imageGradient: "from-pink-500 to-rose-600"
  }
];