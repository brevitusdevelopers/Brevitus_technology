"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

export type LegalModalType = "privacy" | "terms" | null;

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: LegalModalType;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!type) return null;

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const lastUpdated = "October 24, 2023";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6 py-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#050505] shrink-0">
              <div>
                <h2 id="modal-title" className="text-xl md:text-2xl font-extrabold text-black dark:text-white tracking-tight">
                  {title}
                </h2>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                  Last Updated: {lastUpdated}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close modal"
              >
                <IconX size={20} />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-grow overflow-y-auto px-6 py-6 md:px-8 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
              
              {isPrivacy ? (
                <>
                  <p>
                    At Brevitus Technology, accessible from our platform, one of our main priorities is the privacy of our visitors and students. This Privacy Policy document contains types of information that is collected and recorded by Brevitus Technology and how we use it.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">1. Information We Collect</h3>
                    <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">2. How We Use Your Information</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Provide, operate, and maintain our educational platform.</li>
                      <li>Improve, personalize, and expand our course offerings.</li>
                      <li>Understand and analyze how you use our services to optimize your learning journey.</li>
                      <li>Develop new products, services, features, and functionality.</li>
                      <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">3. Log Files and Cookies</h3>
                    <p>Brevitus Technology follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. Like any other website, Brevitus Technology uses "cookies" to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">4. Data Security</h3>
                    <p>We take the security of your data seriously. We implement industry-standard security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the data you share with us. However, please be aware that no method of transmission over the internet, or method of electronic storage is 100% secure.</p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    Welcome to Brevitus Technology! These terms and conditions outline the rules and regulations for the use of Brevitus Technology's educational platform and services.
                  </p>
                  <p>
                    By accessing this website and enrolling in our programs, we assume you accept these terms and conditions. Do not continue to use Brevitus Technology if you do not agree to take all of the terms and conditions stated on this page.
                  </p>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">1. Educational Services & Licensing</h3>
                    <p>Unless otherwise stated, Brevitus Technology and/or its licensors own the intellectual property rights for all educational material, project structures, and code bases provided on the platform. All intellectual property rights are reserved. You may access this from Brevitus Technology for your own personal educational use subjected to restrictions set in these terms and conditions.</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>You must not republish material from Brevitus Technology.</li>
                      <li>You must not sell, rent or sub-license material from Brevitus Technology.</li>
                      <li>You must not reproduce, duplicate or copy course materials for commercial distribution.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">2. Student Conduct & Collaboration</h3>
                    <p>As a community of learners and builders, we expect all participants to maintain a respectful and constructive environment. Harassment, plagiarism, or disruptive behavior during events, bootcamps, or peer collaboration sessions will result in immediate suspension of access to our services without refund.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">3. Certification & Project Work</h3>
                    <p>Certificates of completion are awarded entirely at the discretion of Brevitus Technology instructors based on the successful and original completion of the required capstone projects or coursework. Plagiarized project submissions will result in disqualification from the certification process.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">4. Limitation of Liability</h3>
                    <p>In no event shall Brevitus Technology, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this platform whether such liability is under contract. Brevitus Technology shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
                  </div>
                </>
              )}
              
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <p className="font-semibold text-black dark:text-white">Contact Us</p>
                <p>If you have any questions or suggestions about our {title}, do not hesitate to contact us at <a href="mailto:hello@brevitus.com" className="text-blue-600 dark:text-blue-400 hover:underline">hello@brevitus.com</a>.</p>
              </div>

            </div>

            {/* Footer / Action Area */}
            <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#050505] shrink-0 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors active:scale-95"
              >
                I Understand
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}