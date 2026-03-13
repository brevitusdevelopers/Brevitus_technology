// data/featuredProjectsData.ts

export interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  placeholderGradient: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Real-Time Helmet Compliance Detection",
    category: "Computer Vision",
    description: "A smart surveillance solution powered by YOLO that monitors construction workers and detects missing helmets instantly. The system sends automated alerts, enabling faster response and promoting a safer, AI-enabled work environment.",
    techStack: ["YOLO", "Computer Vision", "Python", "OpenCV"],
    placeholderGradient: "from-orange-500 to-red-600",
  },
  {
    title: "Pneumonia Detection Hybrid Model",
    category: "Healthcare AI Research",
    description: "Developed a hybrid deep learning model combining VGG19 and ResNet50 architectures. The study explores ensemble learning to enhance feature extraction and improve diagnostic accuracy in chest X-ray analysis.",
    techStack: ["Deep Learning", "VGG19", "ResNet50", "TensorFlow"],
    placeholderGradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "NewsAgent AI",
    category: "Agentic AI Workflow",
    description: "An Agentic AI-based automated news workflow that autonomously gathers, filters, summarizes, and delivers personalized news updates every morning, demonstrating real-world applications of autonomous AI.",
    techStack: ["Agentic AI", "LLMs", "Python", "Automation APIs"],
    placeholderGradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Student Performance AI Agent",
    category: "EdTech AI",
    description: "An Agentic AI-based student performance monitoring system that autonomously analyzes academic data, tracks learning progress, and generates actionable, personalized performance insights.",
    techStack: ["Agentic AI", "Data Analytics", "Machine Learning", "Python"],
    placeholderGradient: "from-emerald-400 to-teal-600",
  }
];