"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split text inside of words into an array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  
  // Use a slight margin so it starts typing right as it enters the view
  const isInView = useInView(scope, { once: false, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.5, // Much faster fade-in per character
          delay: stagger(0.04, { startDelay: 0.2 }), // Natural typing speed with a slight initial pause
          ease: "linear",
        }
      );
    } else {
      // Instantly reset if it goes out of view so it can retype smoothly
      animate("span", { display: "none", opacity: 0 }, { duration: 0 });
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  // Let Framer Motion handle the initial hidden state, NOT Tailwind
                  initial={{ opacity: 0, display: "none" }}
                  key={`char-${index}`}
                  className={cn(
                    "dark:text-white text-black", // Removed "opacity-0 hidden"
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              {/* Ensure spaces are preserved between words */}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div 
      className={cn(
        "text-center flex justify-center items-center flex-wrap gap-y-1", 
        className
      )}
    >
      {renderWords()}
      
      {/* Blinking Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className={cn(
          "inline-block rounded-sm w-[3px] h-5 md:h-6 lg:h-8 bg-blue-500 ml-1 shrink-0",
          cursorClassName
        )}
      />
    </div>
  );
};