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
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:w-60 my-4 hover:scale-[1.03] motion-reduce:hover:scale-100 transition-all duration-300 select-none cursor-pointer"
    >
      <span 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-[-1000%] animate-[spin_4s_linear_infinite] motion-reduce:animate-none bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" 
      />
      <span className={cn(
        "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3 relative z-10",
        otherClasses
      )}>
        {position === "left" && <span className="text-lg flex-shrink-0" aria-hidden="true">{icon}</span>}
        <span>{title}</span>
        {position === "right" && <span className="text-lg flex-shrink-0" aria-hidden="true">{icon}</span>}
      </span>
    </Component>
  );
};

export default MagicButton;
