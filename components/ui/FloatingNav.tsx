"use client";
import React, { JSX } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { navigationConfig, uiText } from "@/data";

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
      aria-label={uiText.accessibility.mainNavigation}
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
            "flex max-w-[calc(100vw-1rem)] w-fit fixed top-3 sm:top-8 inset-x-0 mx-auto border border-white/[0.12] rounded-full bg-[#04071d]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(139,92,246,0.15)] z-[5000] px-2 sm:px-4 sm:pl-6 py-1.5 sm:py-2 items-center justify-center space-x-1 sm:space-x-3 md:space-x-4",
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
                  "relative text-neutral-300 hover:text-white hover:bg-white/[0.08] items-center flex space-x-1 cursor-pointer p-1 sm:px-2.5 sm:py-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all text-xs sm:text-sm font-medium"
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
              className="border text-xs sm:text-sm font-medium relative border-purple-500/40 bg-purple-950/40 text-purple-200 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full hover:bg-purple-900/60 hover:text-white hover:border-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all whitespace-nowrap shadow-sm shadow-purple-500/20"
            >
              <span>{navigationConfig.resumeButton.text}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px pointer-events-none" aria-hidden="true" />
            </a>
          )}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};
