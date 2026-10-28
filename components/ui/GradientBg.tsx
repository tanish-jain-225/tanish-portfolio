"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradientAnimation = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0f1238] via-[#090b24] to-[#04061a]",
        containerClassName
      )}
    >
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[20%] opacity-40 blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.35),rgba(59,130,246,0.15),transparent_70%)]"
      />
      <div className={cn("relative z-10 w-full h-full", className)}>
        {children}
      </div>
    </div>
  );
};