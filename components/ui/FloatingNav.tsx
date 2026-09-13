"use client";
import React, { JSX } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@/data";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const visible = true;

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className={cn(
            "flex max-w-[calc(100vw-1rem)] w-fit fixed top-3 sm:top-8 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-2 sm:px-4 sm:pl-6 py-1.5 sm:py-2 items-center justify-center space-x-1 sm:space-x-3 md:space-x-4",
            className
          )}
        >
          {navItems.map(
            (
              navItem: { link: string; name: string; icon?: React.JSX.Element }
            ) => (
              <a
                key={navItem.link}
                href={navItem.link}
                aria-label={navItem.name}
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = navItem.link.replace("#", "");
                  if (sectionId) {
                    const section = document.getElementById(sectionId);
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      window.history.pushState(null, '', navItem.link);
                      section.focus({ preventScroll: true });
                    }
                  } else {
                    // If no section ID, scroll to top
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    window.history.pushState(null, '', '#');
                  }
                }}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer p-1 sm:px-2 sm:py-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors text-xs sm:text-sm"
                )}
              >
                <span className="block sm:hidden text-xs" aria-hidden="true">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </a>
            )
          )}
          {navigationConfig.resumeButton.enabled && (
            <a
              href={navigationConfig.resumeButton.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${navigationConfig.resumeButton.text} (opens in new tab)`}
              className="border text-xs sm:text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-2.5 sm:px-4 py-1 sm:py-2 rounded-full hover:text-purple-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors whitespace-nowrap"
            >
              <span>{navigationConfig.resumeButton.text}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px pointer-events-none" aria-hidden="true" />
            </a>
          )}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};
