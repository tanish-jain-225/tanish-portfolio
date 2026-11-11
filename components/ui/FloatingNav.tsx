"use client";

import React, { JSX } from "react";
import { cn, scrollToSection } from "@/lib/utils";
import { navigationConfig, personalInfo, uiText } from "@/data";
import { getIcon } from "@/lib/icons";

export interface FloatingNavItem {
  name: string;
  link: string;
  icon?: string | JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: FloatingNavItem[];
  className?: string;
}) => {
  const renderIcon = (icon?: string | JSX.Element) => {
    if (!icon) return null;
    if (typeof icon === "string") {
      const IconComponent = getIcon(icon);
      return <IconComponent />;
    }
    return icon;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    scrollToSection(link, true);
    const sectionId = link.replace(/^#/, "");
    window.history.pushState(null, "", sectionId ? link : "#");
  };

  return (
    <nav
      role="navigation"
      aria-label={uiText.accessibility.mainNavigation}
      className="fixed top-0 inset-x-0 z-[5000] border-b border-zinc-800/80 bg-[#09090b]/85 backdrop-blur-md"
    >
      <div
        className={cn(
          "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-2 sm:gap-4",
          className
        )}
      >
        <a
          href="#home"
          aria-label={`${personalInfo.name} — Back to top`}
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-sm font-semibold tracking-tight text-zinc-100 hover:text-white rounded px-1.5 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 transition-colors shrink-0"
        >
          <span className="sm:hidden">TS</span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((navItem) => (
            <a
              key={navItem.link}
              href={navItem.link}
              aria-label={navItem.name}
              onClick={(e) => handleNavClick(e, navItem.link)}
              className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 flex items-center cursor-pointer p-2 sm:px-3 sm:py-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 transition-colors text-xs sm:text-sm"
            >
              <span className="block sm:hidden text-xs" aria-hidden="true">
                {renderIcon(navItem.icon)}
              </span>
              <span className="hidden sm:block">{navItem.name}</span>
            </a>
          ))}

          {navigationConfig.resumeButton.enabled && (
            <a
              href={navigationConfig.resumeButton.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${navigationConfig.resumeButton.text} (opens in new tab)`}
              className="ml-1.5 text-xs sm:text-sm font-medium bg-zinc-100 text-zinc-950 px-3 py-1.5 rounded-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] transition-colors whitespace-nowrap"
            >
              {navigationConfig.resumeButton.text}
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};
