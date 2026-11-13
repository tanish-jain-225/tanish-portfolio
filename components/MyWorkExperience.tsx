import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { workExperience, sectionTitles, uiText } from "@/data";

const MyWorkExperience = () => {
  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#172136] scroll-mt-14 focus:outline-none"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2
            id="experience-heading"
            className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50"
          >
            {sectionTitles.experience.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {sectionTitles.experience.subtitle}
          </p>
        </div>

        <div className="rounded-lg border border-[#172136] bg-[#0a0f1c] divide-y divide-[#172136]">
          {workExperience.map((item) => (
            <article
              key={item.id}
              className="p-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-8 items-start transition-colors hover:bg-[#0d1426]/60"
            >
              <div className="space-y-2">
                {item.duration && (
                  <span className="font-mono text-xs text-blue-400 block">
                    {item.duration}
                  </span>
                )}
                <h3 className="text-base font-semibold tracking-tight text-slate-100 leading-snug">
                  {item.title}
                </h3>
                <a
                  href={item.link || uiText.experience.linkedInProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View details for ${item.title} (opens in new tab)`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded py-1"
                >
                  <span>{uiText.experience.viewDetails}</span>
                  <FaArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
                </a>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorkExperience;
