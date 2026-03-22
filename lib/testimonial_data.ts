export interface Testimonial {
  id: string;
  name: string;
  college: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sunroy Rodrigues",
    college: "SLRT College, Mira Road",
    quote: "You guided us beyond the curriculum, showing us how to learn through curiosity. Your sessions inspired us to think beyond textbooks and explore new ideas with confidence. Truly grateful for your mentorship!"
  },
  {
    id: "2",
    name: "Swati Mourya",
    college: "Deloitte", // Used company name as subtitle
    quote: "Being mentored by such a skilled teacher was a privilege. I followed your advice, worked hard, and landed a job at Deloitte! Your ML sessions were instrumental in cracking the interview."
  },
  {
    id: "3",
    name: "Hrithik Singh",
    college: "MGM CET",
    quote: "Joining Brevitus to improve my data science skills was totally worth it! The interactive sessions, digital whiteboards, end-to-end projects, and resume-building support made the overall journey perfect."
  },
  {
    id: "4",
    name: "Ananya Pandey",
    college: "MGM CET",
    quote: "Machine learning used to feel intimidating, but the teaching approach changed everything. Complex concepts were visualized and connected to real-world examples smoothly, making me genuinely enjoy coding."
  },
  {
    id: "5",
    name: "Sayali Sawant",
    college: "Engineering Student", // Added generic title since college wasn't specified
    quote: "Your sessions built our strong fundamentals in ML and Python while giving insights into real-world applications. Your practical approach perfectly bridged the gap between theory and practice."
  },
  {
    id: "6",
    name: "Aron Mandecona",
    college: "SLRT College, Mira Road",
    quote: "Thank you for your outstanding teaching, mentorship, patience, and clarity. Even in a short time, your guidance left a lasting positive impact on our learning journey."
  },
  {
    id: "7",
    name: "Sonal",
    college: "SLRT College, Mira Road",
    quote: "It was a wonderful learning experience. The superb support and guidance during the sessions taught me so much. I will never forget the impact of your teaching!"
  }
];