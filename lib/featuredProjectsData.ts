// data/featuredProjectsData.ts

export interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  placeholderGradient: string;
  tag: string; // Newly added field
}

export const featuredProjects: FeaturedProject[] = [
  // --- EXISTING PROJECTS ---
  {
    title: "Real-Time Helmet Compliance Detection",
    category: "Computer Vision",
    description: "A smart surveillance solution powered by YOLO that monitors construction workers and detects missing helmets instantly. The system sends automated alerts, enabling faster response and promoting a safer, AI-enabled work environment.",
    techStack: ["YOLO", "Computer Vision", "Python", "OpenCV"],
    placeholderGradient: "from-orange-500 to-red-600",
    tag: "Research Project",
  },
  {
    title: "Pneumonia Detection Hybrid Model",
    category: "Healthcare AI Research",
    description: "Developed a hybrid deep learning model combining VGG19 and ResNet50 architectures. The study explores ensemble learning to enhance feature extraction and improve diagnostic accuracy in chest X-ray analysis.",
    techStack: ["Deep Learning", "VGG19", "ResNet50", "TensorFlow"],
    placeholderGradient: "from-blue-500 to-cyan-600",
    tag: "Research Project",
  },
  {
    title: "NewsAgent AI",
    category: "Agentic AI Workflow",
    description: "An Agentic AI-based automated news workflow that autonomously gathers, filters, summarizes, and delivers personalized news updates every morning, demonstrating real-world applications of autonomous AI.",
    techStack: ["Agentic AI", "LLMs", "Python", "Automation APIs"],
    placeholderGradient: "from-purple-500 to-indigo-600",
    tag: "Student Project",
  },
  {
    title: "Student Performance AI Agent",
    category: "EdTech AI",
    description: "An Agentic AI-based student performance monitoring system that autonomously analyzes academic data, tracks learning progress, and generates actionable, personalized performance insights.",
    techStack: ["Agentic AI", "Data Analytics", "Machine Learning", "Python"],
    placeholderGradient: "from-emerald-400 to-teal-600",
    tag: "Student Project",
  },

  // --- NEWLY ADDED PROJECTS ---
  {
    title: "Face-MeshAI – Real-Time Face Landmark Detection",
    category: "Computer Vision",
    description: "Developed an AI-based facial analysis system that detects and tracks facial landmarks in real time using computer vision techniques. The system processes live video streams to generate detailed face mesh points, enabling accurate facial feature mapping for applications like expression analysis, AR filters, and real-time face tracking.",
    techStack: ["Python", "OpenCV", "MediaPipe", "NumPy", "React.js", "Flask"],
    placeholderGradient: "from-pink-500 to-rose-600",
    tag: "Research Project",
  },
  {
    title: "Smart Waste Classifier using YOLO",
    category: "AI for Sustainability",
    description: "Developed an AI-powered waste classification system using YOLO that automatically detects and classifies waste into organic and recyclable categories in real time. The system assists in improving waste segregation efficiency and supports smarter, environmentally friendly waste management.",
    techStack: ["Python", "PyTorch", "YOLO", "OpenCV", "Flask", "React"],
    placeholderGradient: "from-green-500 to-emerald-700",
    tag: "Student Project",
  },
  {
    title: "Smart Study Monitor",
    category: "EdTech AI",
    description: "Developed a real-time AI-based monitoring system that tracks user posture, detects mobile phone distractions, and identifies user absence during study sessions. The system uses MediaPipe Pose for skeletal tracking and YOLOv8 for object detection, with Flask-SocketIO enabling live video streaming to a React interface.",
    techStack: ["Python", "Flask", "React.js", "MediaPipe Pose", "YOLOv8", "OpenCV"],
    placeholderGradient: "from-sky-400 to-blue-600",
    tag: "Student Project",
  },
  {
    title: "Real-Time Driver Monitoring System",
    category: "Automotive AI",
    description: "Developed an intelligent driver safety system that monitors fatigue indicators such as eye closure, head drop, and drowsiness in real time using facial landmark analysis. The system generates automated alerts and displays live analytics on a web dashboard, helping enhance road safety through AI-powered monitoring.",
    techStack: ["Python", "OpenCV", "MediaPipe", "FastAPI", "React"],
    placeholderGradient: "from-red-500 to-rose-700",
    tag: "Student Project",
  },
  {
    title: "Proctor Vision – AI-Based Online Exam Proctoring",
    category: "Computer Vision",
    description: "Developed an intelligent online exam monitoring system that detects suspicious head movements during remote assessments using facial landmark analysis. The system continuously tracks head direction through webcam input and identifies rule violations, generating automated voice alerts and capturing evidence to ensure exam integrity.",
    techStack: ["Python", "OpenCV", "MediaPipe", "Flask", "JavaScript", "HTML/CSS"],
    placeholderGradient: "from-violet-500 to-purple-700",
    tag: "Student Project",
  },
  {
    title: "Regret Engine: ML-Based Risk Assessment",
    category: "Predictive Analytics",
    description: "Developed an interactive risk-analysis platform powered by Machine Learning that evaluates academic and career decisions to predict 'future regret.' The system features a custom-built Streamlit interface that processes user inputs to provide real-time feedback and actionable insights, promoting data-driven self-reflection.",
    techStack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
    placeholderGradient: "from-amber-400 to-orange-500",
    tag: "Student Project",
  }
];