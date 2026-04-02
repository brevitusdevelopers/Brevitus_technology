"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; // <-- Import useTheme
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/events" },
  { name: "Internships", link: "/internships" },
  { name: "Programs", link: "/courses" },
  // { name: "Our Work", link: "/our-work" },
  // { name: "About Us", link: "/about-us" },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Theme state from next-themes
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Wait until mounted to render theme toggle (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine actual theme (useful if user sets theme to 'system')
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  // Reusable Theme Button Component
  const ThemeToggleButton = () => {
    // Show a skeleton circle before mounting to prevent layout shift
    if (!mounted) {
      return (
        <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800" />
      );
    }

    return (
      <button
        onClick={toggleTheme}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDarkMode ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <IconMoon size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <IconSun size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  };

  return (
    <motion.div
      className="fixed top-0 inset-x-0 z-[100] flex justify-center w-full pointer-events-none p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* DESKTOP NAVBAR */}
      <motion.nav
        animate={{
          width: isScrolled ? "75%" : "100%",
          borderRadius: isScrolled ? "32px" : "12px",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={cn(
          "pointer-events-auto hidden lg:flex items-center justify-between px-6 py-3 transition-colors duration-300",
          isScrolled
            ? "bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-100 dark:bg-black/90 dark:border-blue-900/50 dark:shadow-[0_8px_30px_rgba(37,99,235,0.15)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-20">
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="font-bold text-xl text-black dark:text-white tracking-tight">
            Brevitus
          </span>
        </Link>

        {/* Links & Theme Toggle */}
        <div className="flex items-center gap-2" onMouseLeave={() => setHoveredTab(null)}>
          <div className="flex items-center gap-1 mr-2">
            {navItems.map((item) => {
              const isActive = pathname === item.link;

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors z-10",
                    isActive
                      ? "text-white"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                >
                  {/* Hover Glow Effect */}
                  {hoveredTab === item.name && !isActive && (
                    <motion.div
                      layoutId="desktop-hover"
                      className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/20 z-[-1]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  {/* Active Tab Effect */}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-active"
                      className="absolute inset-0 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] z-[-1]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          {/* Theme Toggle Button (Desktop) */}
          <div className="pl-4 border-l border-zinc-200 dark:border-zinc-800">
            <ThemeToggleButton />
          </div>
        </div>
      </motion.nav>

      {/* MOBILE NAVBAR */}
      <motion.nav
        animate={{
          borderRadius: isScrolled || isMobileMenuOpen ? "24px" : "12px",
        }}
        className={cn(
          "pointer-events-auto flex flex-col w-full max-w-md lg:hidden px-4 py-3 transition-colors duration-300 backdrop-blur-md overflow-hidden",
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 shadow-lg border border-blue-100 dark:bg-black/95 dark:border-blue-900/50"
            : "bg-white/80 dark:bg-black/80 border border-transparent"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-20">
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="font-bold text-lg text-black dark:text-white">
              Brevitus
            </span>
          </Link>
          
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button (Mobile) */}
            <ThemeToggleButton />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-3"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}