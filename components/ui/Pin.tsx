"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  disableWrapper = false,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  disableWrapper?: boolean;
}) => {
  const content = (
    <div
      className={cn(
        "group/card relative w-full h-full rounded-2xl bg-[#0b0e24]/90 border border-white/[0.1] hover:border-purple-500/40",
        "p-4 sm:p-5 flex flex-col justify-between",
        "shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-purple-500/10",
        "transition-all duration-300 hover:-translate-y-1.5",
        containerClassName
      )}
    >
      <div className={cn("relative z-10 w-full h-full flex flex-col justify-between", className)}>
        {children}
      </div>
    </div>
  );

  if (disableWrapper) {
    return content;
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={title ? `Visit ${title} (opens in new tab)` : "Visit link"}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-2xl block w-full h-full"
    >
      {content}
    </a>
  );
};

export const PinPerspective = () => null;
