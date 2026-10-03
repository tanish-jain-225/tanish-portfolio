"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { projects, sectionTitles, uiText, images } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = uiText.projects.categories;

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (selectedCategory === "All") return sorted;

    return sorted.filter((item) => {
      const cat = item.category || "";
      if (selectedCategory === "AI & Autonomous") {
        return cat.includes("AI") || cat.includes("Autonomous") || cat.includes("EdTech");
      }
      if (selectedCategory === "Full-Stack Web") {
        return (
          cat.includes("Management") ||
          cat.includes("Hospitality") ||
          cat.includes("Health") ||
          cat.includes("Fitness")
        );
      }
      if (selectedCategory === "Security & Utilities") {
        return (
          cat.includes("Security") ||
          cat.includes("Application") ||
          cat.includes("Privacy") ||
          cat.includes("Image")
        );
      }
      return true;
    });
  }, [selectedCategory]);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-container">
      <div className="text-center w-full">
        <h2 id="projects-heading" className="heading text-white">
          {sectionTitles.projects.title.split(" ").map((word, i) =>
            i === 0 ? (
              <span key={i} className="text-purple">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        <p className="section-subtitle">
          {sectionTitles.projects.subtitle}
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8 px-2" role="tablist" aria-label={uiText.accessibility.categoryFilters}>
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                  : "bg-[#0b0e24] text-neutral-400 border border-white/10 hover:border-purple-500/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center text-neutral-400 text-sm">
          {uiText.projects.noProjectsMessage}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl justify-items-center py-4 px-1 sm:px-4">
          {filteredProjects.map((item) => (
          <div
            className="flex items-center justify-center w-full max-w-[380px] cardContainer"
            style={{ minHeight: '32rem', height: '100%' }}
            key={item.id}
          >            
            <PinContainer
              title={item.title}
              href={item.demoLink}
              disableWrapper={true}
            >
              <div 
                className="relative flex items-center justify-center w-[calc(100vw-3rem)] max-w-[340px] overflow-hidden rounded-xl h-[180px] mb-4"
                style={{ position: "relative", height: "180px", width: "100%", aspectRatio: "17 / 9" }}
              >
                <div
                  className="relative w-full h-[180px] overflow-hidden rounded-xl lg:rounded-2xl bg-[#13162D]"
                  style={{ position: "relative", height: "180px", width: "100%", aspectRatio: "17 / 9" }}
                >
                  <Image src={images.backgrounds.projectsBackground} alt="bgimg" className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                {item.img ? (
                  <div 
                    className="z-10 absolute inset-0 w-full h-[180px] overflow-hidden"
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: "180px", width: "100%" }}
                  >
                    <Image
                      src={item.img}
                      alt={`${item.title} preview`}
                      className="w-full h-full object-cover object-top"
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1200px) 384px, 384px"
                    />
                  </div>
                ) : (
                  <div className="z-10 absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-950/80 to-indigo-950/80 border border-white/10 rounded-2xl">
                    <span className="text-4xl font-extrabold text-white/30 tracking-widest select-none">
                      {item.title.split(" ").map(w => w[0]).join("").toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="w-[calc(100vw-3rem)] max-w-[340px] flex flex-col justify-between flex-1 space-y-3">
                <div className="flex flex-col space-y-2.5 flex-1">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-purple-300">
                      <MdCategory className="w-3 h-3" />
                      <span>{item.category}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      item.status === 'completed' 
                        ? 'bg-green-900/30 text-green-400 border border-green-500/20' 
                        : 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {item.status === 'completed' ? uiText.status.completed : uiText.status.inProgress}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 text-white">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="lg:text-sm md:text-sm text-xs leading-relaxed line-clamp-3"
                    style={{ color: "#BEC1DD" }}
                  >
                    {item.des}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-[#10132E] border border-white/5 text-purple-300">
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-[#10132E] border border-white/5 text-[#BEC1DD]">
                        +{item.techStack.length - 4} {uiText.projects.more}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between mt-auto pt-3 border-t border-white/10 gap-2 xs:gap-3 relative z-20">
                  {item.sourceLink ? (
                    <a 
                      href={item.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${item.title} on GitHub (opens in new tab)`}
                      className="flex items-center justify-center gap-1.5 xs:gap-2 flex-1 py-2 px-2.5 sm:px-3 bg-[#0c0e24] hover:bg-[#16193d] border border-white/10 hover:border-white/20 rounded-lg text-[11px] sm:text-xs text-white transition-all duration-200 hover:scale-105 motion-reduce:hover:scale-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <FaGithub className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{uiText.projects.sourceCode}</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5 xs:gap-2 flex-1 py-2 px-2.5 sm:px-3 bg-black/20 border border-white/5 rounded-lg text-[11px] sm:text-xs text-white/30 cursor-not-allowed select-none" aria-hidden="true">
                      <FaGithub className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{uiText.projects.sourceCode}</span>
                    </div>
                  )}
                  
                  {item.demoLink ? (
                    <a
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit live demo for ${item.title} (opens in new tab)`}
                      className="flex items-center justify-center gap-1.5 xs:gap-2 flex-1 py-2 px-2.5 sm:px-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-500/30 hover:border-purple-400/50 rounded-lg text-[11px] sm:text-xs text-white transition-all duration-200 hover:scale-105 motion-reduce:hover:scale-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-md shadow-purple-600/20"
                    >
                      <span className="truncate">{uiText.projects.liveProject}</span>
                      <FaLocationArrow className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5 xs:gap-2 flex-1 py-2 px-2.5 sm:px-3 bg-purple-900/10 border border-purple-500/10 rounded-lg text-[11px] sm:text-xs text-purple-300/30 cursor-not-allowed select-none" aria-hidden="true">
                      <span className="truncate">{uiText.projects.liveProject}</span>
                      <FaLocationArrow className="w-3 h-3 flex-shrink-0" />
                    </div>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        </div>
      )}
    </section>
  );
};

export default RecentProjects;