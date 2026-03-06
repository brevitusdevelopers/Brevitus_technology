export interface Testimonial {
  id: string;
  name: string;
  college: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aditya Sharma",
    college: "Indian Institute of Technology, Bombay",
    quote: "Brevitus Technology completely changed my approach to learning. The hands-on projects and mentorship helped me secure my first tech job in a top product-based company!"
  },
  {
    id: "2",
    name: "Priya Desai",
    college: "Pune Institute of Computer Technology",
    quote: "The internship program bridged the massive gap between academic theory and actual industry requirements. I finally feel confident building scalable full-stack applications."
  },
  {
    id: "3",
    name: "Rohan Verma",
    college: "MGM College of Engineering and Technology",
    quote: "The mentors here don't just teach you syntax; they teach you how to think like an engineer. The research and innovation support brought my startup idea to life."
  },
  {
    id: "4",
    name: "Ananya Iyer",
    college: "Vellore Institute of Technology",
    quote: "I highly recommend the Advanced Web Development course. The curriculum is perfectly structured, and the community of builders here is incredibly inspiring."
  },
  {
    id: "5",
    name: "Vikram Singh",
    college: "Delhi Technological University",
    quote: "From learning the fundamentals to deploying cloud-native applications, my journey with Brevitus has been nothing short of transformative. A must for ambitious students."
  }
];