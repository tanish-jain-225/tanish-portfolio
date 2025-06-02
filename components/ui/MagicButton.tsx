import React from "react";
import { cn } from "@/lib/utils";

const MagicButton = ({
  title, 
  icon, 
  position = "right", 
  handleClick, 
  otherClasses
}: {
  title: string; 
  icon: React.ReactNode; 
  position: string; 
  handleClick?: () => void; 
  otherClasses?: string;
}) => {
  return (
    <button 
      onClick={handleClick}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-6 hover:scale-[1.03] transition-all duration-300"
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={cn(
        "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3",
        otherClasses
      )}>
        {position === "left" && <span className="text-lg">{icon}</span>}
        <span>{title}</span>
        {position === "right" && <span className="text-lg">{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;
