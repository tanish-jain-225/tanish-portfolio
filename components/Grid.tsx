import React from "react";
import { BentoGrid } from "./ui/BentoGrid";
import { bentoGridData } from "@/data";

const Grid = () => {
  return (
    <section
      id="about"
      tabIndex={-1}
      aria-label={bentoGridData.title}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 scroll-mt-14 focus:outline-none"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            {bentoGridData.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {bentoGridData.subtitle}
          </p>
        </div>

        <BentoGrid />
      </div>
    </section>
  );
};

export default Grid;
