"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects, sectionTitles, uiText } from "@/data";

type CategoryType = (typeof uiText.projects.categories)[number];

const FEATURED_PROJECT_IDS = new Set([1, 2, 3, 4, 5]);

export const RecentProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const visibleProjects = useMemo(() => {
    if (selectedCategory !== "All") {
      return projects.filter((p) => p.category === selectedCategory);
    }
    return showAllProjects
      ? projects
      : projects.filter((p) => FEATURED_PROJECT_IDS.has(p.id));
  }, [selectedCategory, showAllProjects]);

  const hiddenCount = projects.length - FEATURED_PROJECT_IDS.size;

  const handleImageError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="projects"
      tabIndex={-1}
      aria-label={sectionTitles.projects.title}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#172136] scroll-mt-14 focus:outline-none"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
            {sectionTitles.projects.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {sectionTitles.projects.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-[#172136]">
          <div
            className="flex flex-wrap gap-1.5"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {uiText.projects.categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    active
                      ? "bg-blue-600/15 text-blue-300 border border-blue-500/45 font-medium"
                      : "bg-transparent text-slate-400 border border-transparent hover:text-slate-100 hover:bg-[#0d1426]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {selectedCategory === "All" && hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              aria-pressed={showAllProjects}
              className="text-xs font-mono text-slate-400 hover:text-blue-300 border border-[#172136] bg-[#0a0f1c] hover:border-blue-500/45 rounded-md px-3 py-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {showAllProjects
                ? "Show selected (5)"
                : `Show all projects (${projects.length})`}
            </button>
          )}
        </div>

        {visibleProjects.length === 0 ? (
          <div className="rounded-lg border border-[#172136] bg-[#0a0f1c] p-10 text-center text-sm text-slate-400">
            {uiText.projects.noProjectsMessage}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleProjects.map((item, idx) => {
              const isLeadCard =
                selectedCategory === "All" && !showAllProjects && idx === 0;
              const engineeringHighlight =
                item.features?.[item.features.length - 1];

              return (
                <article
                  key={item.id}
                  className={`cardContainer rounded-lg border border-[#172136] bg-[#0a0f1c] overflow-hidden transition-colors hover:border-blue-500/45 flex flex-col ${
                    isLeadCard
                      ? "md:col-span-2 lg:grid lg:grid-cols-[1.08fr_1fr]"
                      : ""
                  }`}
                >
                  <div
                    className={`relative bg-[#060913] border-b border-[#172136] overflow-hidden ${
                      isLeadCard
                        ? "lg:border-b-0 lg:border-r aspect-[16/10] lg:aspect-auto lg:min-h-[280px]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    {!imgErrors[item.id] ? (
                      <Image
                        src={item.img}
                        alt={`${item.title} application preview`}
                        fill
                        sizes={
                          isLeadCard
                            ? "(max-width: 1024px) 100vw, 560px"
                            : "(max-width: 768px) 100vw, 480px"
                        }
                        onError={() => handleImageError(item.id)}
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-6 text-center">
                        <span className="font-mono text-xs text-slate-400">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col justify-between gap-5 flex-1">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                        <span className="text-blue-400">{item.category}</span>
                        <span>
                          {item.duration || item.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold tracking-tight text-slate-100 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.des}
                      </p>

                      {engineeringHighlight && (
                        <p className="text-xs text-slate-300 leading-relaxed border-l-2 border-blue-500/60 pl-3 py-0.5">
                          {engineeringHighlight}
                        </p>
                      )}

                      <p className="font-mono text-xs text-slate-400 pt-1 leading-relaxed">
                        {(item.techStack ?? []).join(" · ")}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#172136]">
                      {item.sourceLink && (
                        <a
                          href={item.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Source code for ${item.title} on GitHub`}
                          className="inline-flex items-center gap-2 rounded-md border border-[#1a2742] bg-[#060913] px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/45 hover:bg-[#0d1426] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <FaGithub
                            className="h-3.5 w-3.5 text-blue-400"
                            aria-hidden="true"
                          />
                          <span>{uiText.projects.sourceCode}</span>
                        </a>
                      )}

                      {item.demoLink && (
                        <a
                          href={item.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${item.title}`}
                          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <span>{uiText.projects.liveProject}</span>
                          <FaExternalLinkAlt
                            className="h-3 w-3"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
