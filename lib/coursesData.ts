// data/coursesData.ts

export interface CourseData {
  title: string;
  duration: string;
  suitableFor: string;
  overview: string;
  pdfLink: string;
}

export const coursesData: CourseData[] = [
  {
    title: "Creating Agentic AI workflows with no code tools",
    duration: "3 hours",
    suitableFor: "Students and Faculties",
    overview:
      "Step into the future of automation by creating Agentic AI workflows using no-code tools. Discover how AI agents can analyse information, make decisions, and execute tasks independently. Learn how to design smart workflows where AI agents collaborate with tools to solve problems autonomously.",
    pdfLink: "https://ik.imagekit.io/wkqezkwpg/Site%20content/Site%20content/agentic%20ai%20.pdf?updatedAt=1774204999482",
  },
  {
    title: "Launching yourself from campus to corporate",
    duration: "3 hours",
    suitableFor: "Final year students",
    overview:
      "Moving from campus to corporate is more than getting a job — it is about developing the mindset of a professional. This program equips students with the skills, discipline, and confidence needed to thrive in the workplace. Learn how to transform academic potential into corporate success.",
    pdfLink: "https://ik.imagekit.io/wkqezkwpg/Site%20content/Site%20content/career_oriented_prgm.pdf?updatedAt=1774204999482", 
  },
  {
    title: "Learn Business Intelligence using Power BI",
    duration: "3 hours",
    suitableFor: "Students",
    overview:
      "Data is valuable only when it drives decisions. This session introduces the core concepts of Business Intelligence and shows how Power BI can be used to analyse data, create visual reports, and uncover insights that support smarter business decisions.",
    pdfLink: "https://ik.imagekit.io/wkqezkwpg/Site%20content/Site%20content/power_bi.pdf?updatedAt=1774204999359", 
  },
  {
    title: "Building Next Generation AI ChatBot with RAG Model",
    duration: "3 hours",
    suitableFor: "Students and Faculties",
    overview:
      "Discover how modern AI chatbots go beyond simple responses using the RAG model. This session introduces the architecture behind intelligent conversational systems that retrieve information and generate accurate answers. Participants will gain practical insights into building next-generation AI chatbots.",
    pdfLink: "https://ik.imagekit.io/wkqezkwpg/Site%20content/Site%20content/rag%20model.pdf?updatedAt=1774204999389", 
  },
  {
    title: "Data Science Marathon Bootcamp",
    duration: "Flexible / Marathon", 
    suitableFor: "Beginners to Intermediate",
    overview:
      "A fast-paced, project-oriented Data Science marathon designed for beginners to intermediate learners. Students learn Python, Data Analysis, Machine Learning, Deep Learning, Computer Vision, NLP, and build 4+ real-world projects. The program focuses on hands-on learning, mini-projects, and resume-ready end-to-end applications.",
    pdfLink: "https://ik.imagekit.io/wkqezkwpg/Site%20content/Site%20content/20%20days%20ds%20marathon_.pdf?updatedAt=1774204999395"
  }
];