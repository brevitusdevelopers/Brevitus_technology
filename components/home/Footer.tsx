// components/home/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  IconBrandLinkedin, 
  IconBrandTwitter, 
  IconBrandGithub, 
  IconBrandInstagram, 
  IconMail, 
  IconMapPin 
} from "@tabler/icons-react";
import LegalModal, { LegalModalType } from "@/components/ui/LegalModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="w-full bg-white dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 pt-16 pb-8 px-6 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand & Intro */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 w-max group">
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                  B
                </div>
                <span className="font-bold text-xl text-black dark:text-white tracking-tight">
                  Brevitus
                </span>
              </Link>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                Empowering Students to Learn, Build, and Fly. Bridging the gap between academics and industry through practical, hands-on learning.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-2">
                {[
                  { icon: <IconBrandLinkedin size={20} />, link: "#", label: "LinkedIn" },
                  { icon: <IconBrandTwitter size={20} />, link: "#", label: "Twitter" },
                  { icon: <IconBrandGithub size={20} />, link: "#", label: "GitHub" },
                  { icon: <IconBrandInstagram size={20} />, link: "#", label: "Instagram" },
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 active:scale-95"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black dark:text-white text-lg tracking-tight">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                {["Home", "Events", "Internships", "Courses"].map((item) => (
                  <Link 
                    key={item} 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-max"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Programs */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black dark:text-white text-lg tracking-tight">Programs</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/internships" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-max">Web Development</Link>
                <Link href="/internships" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-max">Artificial Intelligence</Link>
                <Link href="/internships" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-max">Cloud & DevOps</Link>
                <Link href="/events" className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-max">Workshops & Events</Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black dark:text-white text-lg tracking-tight">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@brevitus.com" className="group flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-max">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors shrink-0">
                    <IconMail size={16} />
                  </div>
                  <span className="text-sm font-medium">hello@brevitus.com</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                    <IconMapPin size={16} />
                  </div>
                  <span className="text-sm font-medium leading-tight">Navi Mumbai, Maharashtra,<br/> India</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium text-center md:text-left">
              © {currentYear} Brevitus Technology. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <button 
                onClick={() => setActiveModal("privacy")}
                className="text-zinc-500 dark:text-zinc-500 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setActiveModal("terms")}
                className="text-zinc-500 dark:text-zinc-500 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Render the Modals outside the footer flow */}
      <LegalModal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)} 
        type={activeModal} 
      />
    </>
  );
}