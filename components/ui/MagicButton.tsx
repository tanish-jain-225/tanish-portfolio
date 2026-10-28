import React from "react";
import { cn } from "@/lib/utils";

const MagicButton = ({
  title, 
  icon, 
  position = "right", 
  handleClick, 
  otherClasses,
  as = "button",
  type = "button",
}: {
  title: string; 
  icon: React.ReactNode; 
  position?: string; 
  handleClick?: () => void; 
  otherClasses?: string;
  as?: "button" | "span" | "div";
  type?: "button" | "submit" | "reset";
}) => {
  const Component = as;
  const buttonProps = as === "button" ? { type, onClick: handleClick } : {};

  return (
    <Component 
      {...buttonProps}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl",
        "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500",
        "text-white text-xs sm:text-sm font-semibold tracking-wide",
        "shadow-lg shadow-purple-600/25 hover:shadow-purple-500/40",
        "border border-purple-400/30 hover:border-purple-300/60",
        "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        "select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        otherClasses
      )}
    >
      {position === "left" && (
        <span className="text-sm transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{title}</span>
      {position === "right" && (
        <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
          {icon}
        </span>
      )}
    </Component>
  );
};

export default MagicButton;
