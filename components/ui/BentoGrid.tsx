"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { techStack, personalInfo, images, bentoGridData, uiText } from "@/data";

import { BackgroundGradientAnimation } from "./GradientBg";

// Main BentoGrid component: renders a responsive flexbox grid of BentoGridItem cards
export const BentoGrid = ({ className }: { className?: string }) => (
  <div
    className={cn(
      // Responsive grid: 1 col xs, 2 cols sm, 3 cols md+, tight gap
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mx-auto w-full py-6 sm:py-8 md:py-10",
      className
    )}
    role="list"
    aria-label="About Me Grid"
  >
    {bentoGridData.items.map((item) => (
      <BentoGridItem key={item.id} id={item.id} />
    ))}
  </div>
);

// Type definitions for each content type in the grid
type EngineeringContent = {
  type: "engineering";
  text: string;
  stats?: Array<{ label: string; value: string }>;

  interests?: Array<{ name: string; icon: string; color: string }>;
  currentStudy?: string;
};
type CollaborationContent = {
  type: "collaboration";
  text: string;
  availability?: { status: string; schedule: string };
};
type TechstackContent = {
  type: "techstack";
  text: string;
  note?: string;
};
type ProjectContent = {
  type: "project";
  text: string;
  technologies?: string[];
  repository?: string;
};
type ContactContent = {
  type: "contact";
  email: string;
};
type AcademicContent = {
  type: "academic";
  text: string;
  stats?: Array<{ label: string; value: string }>;
};
type BentoContent =
  | EngineeringContent
  | CollaborationContent
  | TechstackContent
  | ProjectContent
  | ContactContent
  | AcademicContent;

interface BentoGridItemProps {
  id: number;
}

// Individual grid item card
export const BentoGridItem = ({ id }: BentoGridItemProps) => {
  const [copied, setCopied] = useState(false);
  const item = bentoGridData.items.find((item) => item.id === id);
  if (!item) return null;
  const { title, img, spareImg, content } = item as {
    title?: string;
    img?: string;
    spareImg?: string;
    content: BentoContent;
  };

  // Utility for colored borders (used for interests)
  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: "border-purple-500/20",
      blue: "border-blue-500/20",
      green: "border-green-500/20",
    };
    return colorMap[color] || "border-white/20";
  };

  // Card container
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition-all duration-300 shadow-lg flex flex-col justify-between items-stretch hover:border-white/[0.2] hover:scale-[1.01] min-h-[260px] bento-item"
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      tabIndex={0}
      aria-label={title || `Bento card ${id}`}
      role="listitem"
    >
      {/* Card background images and overlays */}
      <div
        className={cn(
          "flex-1 flex flex-col h-full w-full",
          id === 6 ? "justify-center items-center" : ""
        )}
      >
        {/* Main image backgrounds for visual cards */}
        {img && (
          <div
            className={id === 4 || id === 5 ? "absolute inset-0 w-full h-full z-0" : "w-full h-full absolute"}
            style={id === 1 ? { position: "relative", minHeight: 220 } : { position: "relative", height: "100%" }}
            aria-hidden="true"
          >
            <Image
              src={img}
              alt={title ? `${title} illustration` : `Grid item ${id}`}
              className="object-cover object-center"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={id === 4 || id === 5}
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
        )}
        {/* Animated background for contact card */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 z-10" />
            <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none opacity-30"></div>
          </BackgroundGradientAnimation>
        )}
        {/* Overlay for text readability on certain cards */}
        {id !== 1 &&
          id !== 6 &&
          ["academic", "engineering", "techstack", "contact"].includes(
            content?.type || ""
          ) && (
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,12,30,0.82) 60%, rgba(10,12,30,0.92) 100%)",
              }}
              aria-hidden="true"
            ></div>
          )}
        {/* Card content */}
        <div
          className="group-hover/bento:translate-x-2 transition duration-200 relative flex-1 flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 z-20 w-full h-full"
        >
          {/* Card title */}
          {title && (
            <h3 className="font-sans text-base sm:text-lg md:text-2xl lg:text-3xl max-w-full sm:max-w-96 font-bold z-10 text-white tracking-tight " id={`bento-title-${id}`}>
              {title}
            </h3>
          )}
          {/* Card body by content type */}
          {content && (
            <>
              {/* Academic card */}
              {content.type === "academic" && (
                <>
                  {/* Decorative background */}
                  <div
                    className="absolute bottom-0 right-0 w-full h-full opacity-10"
                    style={{ position: "relative", height: "100%" }}
                    aria-hidden="true"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={images.backgrounds.footerGrid}
                        alt="Background pattern"
                        className="object-cover min-w-full min-h-full"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                    </div>
                  </div>
                  {/* Academic text and stats */}
                  <div className="mt-4 flex flex-col gap-3 sm:gap-5 relative z-10">
                    <p className="text-[#C1C2D3] text-xs sm:text-sm md:text-base max-w-full sm:max-w-100 leading-relaxed">
                      {content.text}
                    </p>
                    {content.stats && (
                      <div className="flex flex-wrap gap-2 mt-4" aria-label="Academic stats">
                        {content.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="flex-1 min-w-[100px] p-2 sm:p-3 lg:p-4 rounded-lg bg-[#10132E]/80 border border-white/5 backdrop-blur-sm flex flex-col items-center"
                          >
                            <div className="text-base sm:text-lg lg:text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-[#C1C2D3]">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
              {/* Collaboration card */}
              {content.type === "collaboration" && (
                <>
                  <div className="flex items-center justify-center">
                    <Image
                      src={images.backgrounds.cloud}
                      alt={item.description || content.text}
                      className="object-contain"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="mt-4 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 relative z-10">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                      {title}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-[#C1C2D3] max-w-full sm:max-w-72 leading-relaxed">
                      {content.text}
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-2">
                      <div className="flex items-center gap-2 bg-green-900/20 px-3 py-1 rounded-full">
                        <span className="text-green-400 text-xs font-medium">
                          {content.availability?.status}
                        </span>
                      </div>
                      <div className="hidden sm:block h-3 w-[1px] bg-white/20" aria-hidden="true"></div>
                      <div className="flex items-center gap-2 bg-blue-900/20 px-3 py-1 rounded-full">
                        <span className="text-[#C1C2D3] text-xs">
                          {content.availability?.schedule}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* Tech stack card */}
              {content.type === "techstack" && id === 3 && (
                <div className="flex flex-col gap-4 sm:gap-6 w-full h-full justify-center items-center">
                  <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3 bg-[#10132E]/80 rounded-xl p-2 sm:p-4 border border-white/10 my-2" aria-label="Tech stack list">
                    {techStack.map((stackItem, i) => (
                      <span
                        key={i}
                        className="py-1 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm rounded-full text-center bg-[#161A31] transition-all duration-300 shadow-lg text-white flex items-center gap-1 sm:gap-2 border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-[rgb(198,179,255)]"></div>
                        {stackItem}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {/* Engineering card */}
              {content.type === "engineering" && (
                <>
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{ position: "relative", height: "100%" }}
                    aria-hidden="true"
                  >
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={images.backgrounds.grid}
                        alt="Tech background"
                        className="object-cover min-w-full min-h-full"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                    </div>
                  </div>
                  <div className="mt-4 relative z-10 flex flex-col gap-2 sm:gap-3">
                    <p className="text-[#C1C2D3] text-xs sm:text-sm leading-relaxed">
                      {content.text}
                    </p>
                    {content.stats && (
                      <div className="flex flex-wrap gap-2 mt-4" aria-label="Engineering stats">
                        {content.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="flex-1 min-w-[100px] p-2 sm:p-3 lg:p-4 rounded-lg bg-[#10132E]/80 border border-white/5 backdrop-blur-sm flex flex-col items-center"
                          >
                            <div className="text-base sm:text-lg lg:text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-[#C1C2D3]">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Interests and current study */}
                    {content.interests && (
                      <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2" aria-label="Interests">
                        {content.interests.map((interest, index) => (
                          <div
                            key={index}
                            className={`inline-flex items-center px-1 sm:px-2 py-1 rounded-md bg-[#161A31] border ${getColorClass(
                              interest.color
                            )}`}
                          >
                            <Image
                              src={interest.icon}
                              alt={interest.name}
                              className="w-4 h-4 mr-1"
                              width={16}
                              height={16}
                              sizes="16px"
                            />
                            <span className="text-xs text-white">
                              {interest.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {content.currentStudy && (
                      <div className="mt-2 p-2 rounded-lg bg-gradient-to-r from-[#161A31] to-[#10132E] border border-white/5">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></div>
                          <span className="text-xs text-[#C1C2D3]">
                            {content.currentStudy}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
              {/* Project card */}
              {content.type === "project" && (
                <>
                  <div className="mt-4 relative z-10">
                    <p className="text-[#C1C2D3] text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-72 mb-2 sm:mb-3">
                      {content.text}
                    </p>
                    {/* Technologies used */}
                    {content.technologies && (
                      <div className="mt-2 sm:mt-4 flex flex-col gap-2 sm:gap-3">
                        <div className="bg-[#10132E]/80 rounded-lg p-2 sm:p-3 border border-white/5">
                          <div className="text-xs font-semibold text-white mb-1">
                            {uiText.projects.technologiesUsed}
                          </div>
                          <ul className="text-[10px] sm:text-xs text-[#C1C2D3] space-y-1">
                            {content.technologies.map((tech, index) => (
                              <li key={index} className="flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-green-400"></div>
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {/* Repository link or label */}
                    {content.repository && (
                      <div className="mt-2 sm:mt-4 p-2 rounded-md bg-[#161A31] border border-white/5 flex items-center">
                        <div className="flex items-center">
                          <Image
                            src={images.icons.git}
                            alt={uiText.projects.sourceCode}
                            className="w-4 h-4 mr-2"
                            width={16}
                            height={16}
                            sizes="16px"
                            onError={(e) => (e.currentTarget.style.display = "none")}
                          />
                          <span className="text-xs text-[#C1C2D3]">
                            {content.repository.startsWith("http") ? (
                              <a
                                href={content.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-purple-400 transition-colors"
                              >
                                {uiText.projects.sourceCode}
                              </a>
                            ) : (
                              content.repository
                            )}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
              {/* Contact card */}
              {content.type === "contact" && (
                <div className="flex flex-col items-center justify-center w-full h-full p-4 m-2">
                  <button
                    onClick={async () => {
                      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
                        try {
                          await navigator.clipboard.writeText(content.email);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 3000);
                        } catch (err) {
                          setCopied(false);
                          alert('Copy to clipboard failed.');
                        }
                      } else {
                        setCopied(false);
                        alert('Copy to clipboard is not supported in this browser.');
                      }
                    }}
                    className="px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 cursor-pointer text-xs sm:text-sm md:text-base m-2 flex items-center max-w-full min-w-0"
                    style={{
                      wordBreak: 'break-all',
                      whiteSpace: 'pre-line',
                      minWidth: 0,
                    }}
                  >
                    <span className="truncate block max-w-[60vw] sm:max-w-[40vw] md:max-w-[22vw] lg:max-w-[300px] text-ellipsis overflow-hidden text-left">
                      {copied ? 'Copied!' : `Copy Email: ${content.email}`}
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
