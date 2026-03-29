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
  const lastUpdated = "March 29, 2026";

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
                    We (Brevitus Technology) are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">1. Information We Collect</h3>
                    <p>We may collect personal information such as your name, email address, phone number, and any other details you provide through our enquiry form.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">2. Purpose of Processing</h3>
                    <p>Your personal data is collected and processed only for the following purpose:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>To respond to your enquiries</li>
                      <li>To communicate with you regarding your course request</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">3. Consent</h3>
                    <p>By submitting the enquiry form, you provide your consent for the collection and processing of your personal data for the stated purpose. You have the right to withdraw your consent at any time by contacting us.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">4. Third-Party Processing</h3>
                    <p>We use Google LLC (Google Forms) to collect and store enquiry data. Your information may be processed on secure servers managed by Google in accordance with their privacy policies.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">5. Data Sharing</h3>
                    <p>We do not sell, rent, or share your personal data with third parties, except where required by law.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">6. Data Retention</h3>
                    <p>We retain your personal data only for as long as necessary to fulfill the purpose for which it was collected or as required under applicable laws.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">7. Data Security</h3>
                    <p>We implement reasonable security safeguards to protect your personal data against unauthorized access, disclosure, or misuse.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">8. Updates to This Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    By accessing or using this website, you agree to comply with and be bound by the following Terms of Service.
                  </p>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">1. Use of Website</h3>
                    <p>This website is intended to provide general information and allow users to submit enquiries through a contact form. You agree to use this website only for lawful purposes and not for any activity that may harm the website or its users.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">2. No User Accounts or Transactions</h3>
                    <p>This website does not provide user registration, login functionality, or payment processing. All interactions are limited to voluntary submission of enquiries.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">3. User Submissions</h3>
                    <p>By submitting information through the enquiry form, you agree that:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>The information provided is accurate and not misleading</li>
                      <li>You have the right to share the information</li>
                      <li>You will not submit unlawful, offensive, or harmful content</li>
                    </ul>
                    <p className="mt-2">We reserve the right to ignore or remove inappropriate submissions.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">4. Third-Party Services</h3>
                    <p>We use Google LLC (Google Forms) to collect enquiries. Your interaction with such third-party services is also governed by their respective terms and policies.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">5. Intellectual Property</h3>
                    <p>All content on this website (text, design, logos, etc.) is the property of Brevitus Technology unless otherwise stated. You may not copy, reproduce, or distribute content without prior permission.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">6. Limitation of Liability</h3>
                    <p>The information provided on this website is for general purposes only. Under no circumstances shall we be liable for any direct or indirect loss arising from:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Use of the website</li>
                      <li>Reliance on the information provided</li>
                      <li>Submission of data through the enquiry form</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">7. Privacy</h3>
                    <p>Your use of this website is also governed by our Privacy Policy.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">8. Termination of Access</h3>
                    <p>We reserve the right to restrict or block access to the website for users who violate these terms.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">9. Changes to Terms</h3>
                    <p>We may update these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
                  </div>
                </>
              )}
              
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <p className="font-semibold text-black dark:text-white">Contact Us</p>
                <p>If you have any questions or suggestions about our {title}, do not hesitate to contact us at <a href="mailto:brevitusdevelopers@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">brevitusdevelopers@gmail.com</a>.</p>
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