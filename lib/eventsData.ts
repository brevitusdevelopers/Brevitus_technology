// data/eventsData.ts

import { EventData } from "@/components/events/PastEventCard";

export const pastEvents: EventData[] = [
  {
    id: "ev-1",
    title: "Applied Machine Learning Bootcamp",
    eventType: "Bootcamp",
    date: "Feb 10, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "MGM College of Engineering, Navi Mumbai",
    speaker: "Dr. Arvind Mehta",
    attendees: "120+ attended",
    tags: ["Python", "Scikit-Learn", "Data Viz"],
    description: "A comprehensive bootcamp guiding students through data preprocessing, model training, and deploying ML algorithms using Python and Scikit-Learn.",
    imageGradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "ev-2",
    title: "AI for Web Developers: LLM Integration",
    eventType: "Masterclass",
    date: "Jan 22, 2026",
    time: "1:00 PM - 5:00 PM",
    venue: "Virtual Event (Zoom)",
    speaker: "Priya Sharma",
    attendees: "250+ attended",
    tags: ["Next.js", "OpenAI", "LangChain"],
    description: "Taught web developers how to integrate Large Language Models (like OpenAI and Gemini APIs) into Next.js applications to build smart tools.",
    imageGradient: "from-emerald-400 to-teal-600"
  },
  {
    id: "ev-3",
    title: "Deep Learning & Neural Networks",
    eventType: "Workshop",
    date: "Dec 05, 2025",
    time: "9:00 AM - 3:00 PM",
    venue: "Pune Institute of Technology",
    speaker: "Rohan Desai",
    attendees: "80+ attended",
    tags: ["TensorFlow", "PyTorch", "Keras"],
    description: "An intensive masterclass on building and tuning deep neural networks from scratch using TensorFlow and PyTorch for real-world datasets.",
    imageGradient: "from-purple-500 to-fuchsia-600"
  },
  {
    id: "ev-4",
    title: "Computer Vision & Autonomous Systems",
    eventType: "Hackathon",
    date: "Nov 18, 2025",
    time: "10:00 AM - 2:00 PM",
    venue: "IIT Bombay, Mumbai",
    speaker: "Vikram Singh",
    attendees: "300+ attended",
    tags: ["OpenCV", "YOLOv8", "Robotics"],
    description: "Hands-on workshop exploring OpenCV, image processing, and object detection models used in modern autonomous robotics and drones.",
    imageGradient: "from-orange-400 to-red-500"
  }
];