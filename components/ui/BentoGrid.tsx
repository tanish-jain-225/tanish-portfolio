"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";
import { techStack, personalInfo, images } from "@/data";

import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-8 mx-auto w-full py-10",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  content?: {
    type: string;
    text?: string;
    stats?: Array<{ label: string; value: string }>;
    availability?: { status: string; schedule: string };
    note?: string;
    interests?: Array<{ name: string; icon: string; color: string }>;
    currentStudy?: string;
    technologies?: string[];
    repository?: string;
    email?: string;
  };
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  content,
}: BentoGridItemProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = content?.email || personalInfo.email;
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Reset copied state after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: "border-purple-500/20",
      blue: "border-blue-500/20",
      green: "border-green-500/20",
    };
    return colorMap[color] || "border-white/20";
  };

  return (
    <div
      className={cn(
        // Consistent sizing, spacing, and alignment for all boxes
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition-all duration-300 shadow-lg flex flex-col justify-between items-stretch hover:border-white/[0.2] hover:scale-[1.01]",
        // Remove space-y-4 to control spacing via padding/margin inside
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={cn(
          "flex-1 flex flex-col h-full w-full",
          id === 6 ? "justify-center items-center" : ""
        )}
      >
        {/* add img divs */}
        {id === 1 && img && (
          <div
            className="w-full h-full absolute"
            style={{ position: "relative", minHeight: 220 }}
          >
            <Image
              src={img}
              alt={title?.toString() || `Grid item ${id}`}
              className={cn("object-cover object-center", imgClassName)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
        )}
        {img && (
          <div
            className="w-full h-full absolute"
            style={{ position: "relative", height: "100%" }}
          >
            <Image
              src={img}
              alt={title?.toString() || `Grid item ${id}`}
              className={cn("object-cover object-center", imgClassName)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay for better text visibility over img */}
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
        )}
        {spareImg && id === 5 && (
          <div
            className="absolute right-0 -bottom-5 w-full opacity-80"
            style={{ position: "relative", minHeight: 120 }}
          >
            <Image
              src={spareImg}
              alt={title?.toString() || `Grid item ${id} secondary`}
              className="object-cover object-center w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay for better text visibility over spareImg */}
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
        )}

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* Overlay for gradient bg */}
            <div className="absolute inset-0 z-10" />
            <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none opacity-30"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Overlay for better text visibility over backgrounds */}
        {id !== 1 &&
          id !== 6 &&
          (content?.type === "academic" ||
            content?.type === "engineering" ||
            content?.type === "techstack" ||
            content?.type === "contact") && (
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,12,30,0.82) 60%, rgba(10,12,30,0.92) 100%)",
              }}
            ></div>
          )}

        <div
          className={cn(
            // Consistent padding and alignment for content
            "group-hover/bento:translate-x-2 transition duration-200 relative flex-1 flex flex-col justify-between p-5 md:p-6 lg:p-8 xl:p-10 z-20 w-full h-full",
            titleClassName
          )}
        >
          {title && (
            <div className="font-sans text-lg md:text-2xl lg:text-3xl max-w-96 font-bold z-10 text-white tracking-tight ">
              {title}
            </div>
          )}

          {/* Render content based on type */}
          {content && (
            <>
              {/* Academic content */}
              {content.type === "academic" && (
                <>
                  <div
                    className="absolute bottom-0 right-0 w-full h-full opacity-10"
                    style={{ position: "relative", height: "100%" }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={images.backgrounds.footerGrid}
                        alt="Background pattern"
                        className="object-cover min-w-full min-h-full"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay for better text visibility */}
                      <div className="absolute inset-0 bg-black/40 z-10" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-5 relative z-10">
                    <p className="text-[#C1C2D3] text-xs md:text-sm lg:text-base max-w-100 leading-relaxed">
                      {content.text}
                    </p>
                    {content.stats && (
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {content.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="p-3 lg:p-4 rounded-lg bg-[#10132E]/80 border border-white/5 backdrop-blur-sm"
                          >
                            <div className="text-lg lg:text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs text-[#C1C2D3]">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Collaboration content */}
              {content.type === "collaboration" && (
                <>
                  <div
                    className="absolute -bottom-5 -right-5 w-40 h-40 opacity-30 transform rotate-12"
                    style={{ position: "relative", minHeight: 80 }}
                  >
                    <Image
                      src={images.backgrounds.cloud}
                      alt="World time zones"
                      className="object-contain"
                      width={160}
                      height={160}
                      style={{ width: "auto", height: "100%" }}
                    />
                  </div>
                  <div className="mt-4 text-xs lg:text-base text-[#C1C2D3] max-w-72 leading-relaxed relative z-10">
                    {content.text}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">
                        {content.availability?.status}
                      </span>
                    </div>
                    <div className="h-3 w-[1px] bg-white/20"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#C1C2D3] text-xs">
                        {content.availability?.schedule}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Tech stack content */}
              {content.type === "techstack" && id === 3 && (
                <div className="flex flex-col gap-6 w-full h-full justify-center items-center">
                  <div className="w-full flex flex-wrap justify-center gap-3 bg-[#10132E]/80 rounded-xl p-4 border border-white/10 my-2">
                    {techStack.map((item, i) => {
                      const iconKey = item.toLowerCase();
                      const iconSrc = (images.icons as Record<string, string>)[
                        iconKey
                      ];
                      return (
                        // Tech stack item with icon
                        <span
                          key={i}
                          className="py-2 px-3 text-xs md:text-sm rounded-full text-center bg-[#161A31] transition-all duration-300 shadow-lg text-white flex items-center gap-2 border border-white/5"
                        >
                          <div className="w-2 h-2 rounded-full bg-[rgb(198,179,255)]"></div>

                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Engineering content */}
              {content.type === "engineering" && (
                <>
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{ position: "relative", height: "100%" }}
                  >
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={images.backgrounds.grid}
                        alt="Tech background"
                        className="object-cover min-w-full min-h-full"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay for better text visibility */}
                      <div className="absolute inset-0 bg-black/40 z-10" />
                    </div>
                  </div>
                  <div className="mt-4 relative z-10 flex flex-col gap-3">
                    <p className="text-[#C1C2D3] text-xs md:text-sm leading-relaxed">
                      {content.text}
                    </p>
                    {content.stats && (
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {content.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="p-3 lg:p-4 rounded-lg bg-[#10132E]/80 border border-white/5 backdrop-blur-sm"
                          >
                            <div className="text-lg lg:text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-xs text-[#C1C2D3]">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {content.interests && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {content.interests.map((interest, index) => (
                          <div
                            key={index}
                            className={`inline-flex items-center px-2 py-1 rounded-md bg-[#161A31] border ${getColorClass(
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

              {/* Project content */}
              {content.type === "project" && (
                <>
                  <div className="mt-4 relative z-10">
                    <p className="text-[#C1C2D3] text-xs md:text-sm leading-relaxed max-w-72 mb-3">
                      {content.text}
                    </p>
                    {content.technologies && (
                      <div className="mt-4 grid grid-cols-1 gap-3">
                        <div className="bg-[#10132E]/80 rounded-lg p-3 border border-white/5">
                          <div className="text-xs font-semibold text-white mb-1">
                            Technologies Used
                          </div>
                          <ul className="text-[10px] text-[#C1C2D3] space-y-1">
                            {content.technologies.map((tech, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-1"
                              >
                                <div className="w-1 h-1 rounded-full bg-green-400"></div>
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {content.repository && (
                      <div className="mt-4 p-2 rounded-md bg-[#161A31] border border-white/5 flex items-center">
                        <div className="flex items-center">
                          <Image
                            src={images.icons.git}
                            alt="GitHub"
                            className="w-4 h-4 mr-2"
                            width={16}
                            height={16}
                            sizes="16px"
                            onError={(e) =>
                              (e.currentTarget.style.display = "none")
                            }
                          />
                          <span className="text-xs text-[#C1C2D3]">
                            {content.repository.startsWith("http") ? (
                              <a
                                href={content.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-purple-400 transition-colors"
                              >
                                Repository
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

              {/* Contact content */}
              {content.type === "contact" && (
                <div className="flex flex-col items-center justify-center w-full h-full p-6">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("tanishjain020205@gmail.com");
                      setCopied(true);
                      setTimeout(() => setCopied(false), 3000);
                    }}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 cursor-pointer text-lg md:text-xl"
                  >
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
