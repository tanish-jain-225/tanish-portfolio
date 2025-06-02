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
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition-all duration-300 shadow-lg justify-between flex flex-col space-y-4 hover:border-white/[0.2] hover:scale-[1.01]",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={cn("h-full", id === 6 ? "flex justify-center" : "")}>        {img && (
          <div className="w-full h-full absolute">
            <Image
              src={img}
              alt={title?.toString() || `Grid item ${id}`}
              className={cn("object-cover object-center", imgClassName)}
              fill
            />
          </div>
        )}        {spareImg && (
          <div
            className={cn(
              "absolute right-0 -bottom-5",
              id === 5 ? "w-full opacity-80" : ""
            )}
          >
            <Image
              src={spareImg}
              alt={title?.toString() || `Grid item ${id} secondary`}
              className="object-cover object-center w-full h-full"
              fill
            />
          </div>
        )}
        
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-10 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none opacity-30"></div>
          </BackgroundGradientAnimation>
        )}
        
        <div
          className={cn(
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10",
            titleClassName
          )}
        >
          {description && (
            <div className="font-sans font-extralight md:max-w-64 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 mb-2">
              {description}
            </div>
          )}
          {title && (
            <div className="font-sans text-lg md:text-2xl lg:text-3xl max-w-96 font-bold z-10 text-white tracking-tight">
              {title}
            </div>
          )}

          {/* Render content based on type */}
          {content && (
            <>
              {/* Academic content */}
              {content.type === "academic" && (
                <>                  <div className="absolute bottom-0 right-0 w-full h-full opacity-10">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={images.backgrounds.footerGrid}
                        alt="Background pattern"
                        className="object-cover min-w-full min-h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-5 relative z-10">
                    <p className="text-[#C1C2D3] text-xs md:text-sm lg:text-base max-w-80 leading-relaxed">
                      {content.text}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {content.stats?.map((stat, index) => (
                        <div key={index} className="p-3 lg:p-4 rounded-lg bg-[#10132E]/80 border border-white/5 backdrop-blur-sm">
                          <div className="text-lg lg:text-2xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs text-[#C1C2D3]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Collaboration content */}
              {content.type === "collaboration" && (
                <>                  <div className="absolute -bottom-5 -right-5 w-40 h-40 opacity-30 transform rotate-12">
                    <Image
                      src={images.backgrounds.cloud}
                      alt="World time zones"
                      className="object-contain"
                      width={160}
                      height={160}
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
                      <span className="text-[#C1C2D3] text-xs">{content.availability?.schedule}</span>
                    </div>
                  </div>
                </>
              )}

              {/* Tech stack content */}
              {content.type === "techstack" && (
                <>                  <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={images.backgrounds.grid}
                        alt="Tech background"
                        className="object-cover min-w-full min-h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <p className="text-[#C1C2D3] text-xs">{content.text}</p>
                    <div className="flex flex-wrap gap-3">
                      {techStack.map((item, i) => (
                        <span
                          key={i}
                          className="py-2 px-3 text-xs md:text-sm 
                          rounded-full text-center bg-[#10132E] transition-all duration-300 
                          shadow-lg text-white flex items-center gap-2 border border-white/5"
                        >
                          <div className="w-2 h-2 rounded-full bg-[rgb(198,179,255)]"></div>
                          {item}
                        </span>
                      ))}
                    </div>
                    {content.note && (
                      <div className="mt-3">
                        <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-xs py-1 px-3 rounded-full text-white shadow-lg">
                          {content.note}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Engineering content */}
              {content.type === "engineering" && (
                <>                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={images.backgrounds.grid}
                        alt="Tech background"
                        className="object-cover min-w-full min-h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="mt-4 relative z-10 flex flex-col gap-3">
                    <p className="text-[#C1C2D3] text-xs md:text-sm leading-relaxed">
                      {content.text}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {content.interests?.map((interest, index) => (                        <div key={index} className={`inline-flex items-center px-2 py-1 rounded-md bg-[#161A31] border ${getColorClass(interest.color)}`}>
                          <Image
                            src={interest.icon}
                            alt={interest.name}
                            className="w-4 h-4 mr-1"
                            width={16}
                            height={16}
                          />
                          <span className="text-xs text-white">{interest.name}</span>
                        </div>
                      ))}
                    </div>
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
                    <div className="mt-4 grid grid-cols-1 gap-3">
                      <div className="bg-[#10132E]/80 rounded-lg p-3 border border-white/5">
                        <div className="text-xs font-semibold text-white mb-1">
                          Technologies Used
                        </div>
                        <ul className="text-[10px] text-[#C1C2D3] space-y-1">
                          {content.technologies?.map((tech, index) => (
                            <li key={index} className="flex items-center gap-1">
                              <div className="w-1 h-1 rounded-full bg-green-400"></div>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {content.repository && (
                      <div className="mt-4 p-2 rounded-md bg-[#161A31] border border-white/5 flex items-center">                        <div className="flex items-center">
                          <Image
                            src={images.icons.git}
                            alt="GitHub"
                            className="w-4 h-4 mr-2"
                            width={16}
                            height={16}
                            onError={(e) => (e.currentTarget.style.display = "none")}
                          />
                          <span className="text-xs text-[#C1C2D3]">
                            {content.repository}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Contact content */}
              {content.type === "contact" && (
                <>                  <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={images.backgrounds.footerGrid}
                        alt="Background pattern"
                        className="object-cover min-w-full min-h-full"
                        fill
                      />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-black text-xs md:text-sm lg:text-base max-w-80 leading-relaxed mb-4">
                      {content.text}
                    </p>
                    <div className="mt-4 relative z-20">
                      <div
                        className={`absolute -bottom-5 -right-10 ${
                          copied ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-300`}
                      >
                        <Lottie 
                          animationData={animationData} 
                          loop={copied} 
                          autoplay={copied}
                          style={{ height: 200, width: 400 }}
                        />
                      </div>

                      <MagicButton
                        title={copied ? "Email Copied!" : "Copy Email"}
                        icon={<IoCopyOutline />}
                        position="left"
                        handleClick={handleCopy}
                        otherClasses="!bg-[#161A31] hover:!bg-[#212753] transition-colors"
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
