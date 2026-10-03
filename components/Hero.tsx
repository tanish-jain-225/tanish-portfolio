"use client";

import React, { useEffect, useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { heroData, navigationConfig } from "@/data";
import { getIcon } from "@/lib/icons";

const Hero = () => {
  // Get the icon component dynamically from the icon name in heroData
  const IconComponent = getIcon(heroData.ctaButton.icon);
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Create staggered animation effect for hero elements
    const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
    
    if (heroElements) {
      heroElements.forEach((el, index) => {
        // Add staggered animation classes
        el.classList.add('animate-fade-in-up');
        el.classList.add(`stagger-delay-${index + 1}`);
      });
    }
    
    // Optional: Add scroll indicator animation
    const scrollIndicator = heroRef.current?.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      setTimeout(() => {
        scrollIndicator.classList.add('visible');
      }, 2000);
    }
    
    // Activate spotlight animations with staggered timing
    const spotlights = heroRef.current?.querySelectorAll('.animate-spotlight');
    if (spotlights) {
      spotlights.forEach((spotlight, index) => {
        const htmlEl = spotlight as HTMLElement;
        // Use inline styles to create staggered animation delays
        htmlEl.style.animationDelay = `${0.75 + (index * 0.2)}s`;
      });
    }
    
  }, []);    return (
    <div id="home" className="w-full relative min-h-screen flex items-center justify-center scroll-mt-20 bg-[#000319]" ref={heroRef}>
      {/* Fixed position background container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {/* Spotlight container with vibrant cosmic glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Spotlight
            className="-top-40 -left-10 sm:-left-20 md:-left-32 md:-top-20 h-screen animate-spotlight"
            fill="#a855f7"
          />
          <Spotlight
            className="top-10 left-[40%] sm:left-[45%] md:left-[70%] h-[80vh] w-[50vw] animate-spotlight"
            fill="#38bdf8"
          />
          <Spotlight className="top-28 left-[20%] sm:left-[25%] md:left-[40%] h-[80vh] w-[50vw] animate-spotlight" fill="#8b5cf6" />
        </div>

        {/* Dark cosmic grid background layer */}
        <div className="absolute inset-0 bg-[#000319] pointer-events-none">
          <div
            className={cn(
              "absolute inset-0 opacity-40",
              "[background-size:24px_24px] sm:[background-size:36px_36px] md:[background-size:48px_48px]",
              "[background-image:linear-gradient(to_right,#1f2448_1px,transparent_1px),linear-gradient(to_bottom,#1f2448_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000319)]" />
        </div>
      </div>

      {/* Content layer with proper z-index */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 w-full px-2 sm:px-6 md:px-8">
        <div className="w-full max-w-[calc(100vw-1rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-center">
          {/* Recruiter availability status badge */}
          <div className="hero-animate opacity-0 mb-3 sm:mb-4 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-[11px] sm:text-xs font-medium backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{heroData.availabilityBadge}</span>
          </div>

          <p className="uppercase tracking-widest text-[10px] sm:text-xs md:text-sm text-center text-purple-200/90 max-w-[260px] sm:max-w-md md:max-w-lg hero-animate opacity-0 break-words font-semibold">
            {heroData.subtitle}
          </p>
          
          <h1 className="hero-animate opacity-0 w-full max-w-4xl">
            <TextGenerateEffect 
              className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words px-1"
              words={heroData.title}
              accentWordIndex={heroData.accentWordIndex}
            />
          </h1>

          <p className="text-center md:tracking-wider mb-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hero-animate opacity-0 text-white/80 px-1 sm:px-4 md:px-6 break-words max-w-3xl">
            {heroData.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 hero-animate opacity-0 px-1 max-w-3xl">
            {heroData.techBadges.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs rounded-full bg-white/5 border border-white/10 text-purple-300 backdrop-blur-sm whitespace-nowrap hover:border-purple-400/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Dual Action Buttons */}
          <div className="hero-animate opacity-0 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-full">
            <a 
              href={heroData.ctaButton.link}
              aria-label={heroData.ctaButton.text}
              className="inline-block max-w-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#projects');
                  projectsSection.focus({ preventScroll: true });
                }
              }}
            >
              <MagicButton 
                as="span"
                title={heroData.ctaButton.text}
                icon={<IconComponent />}
                position={heroData.ctaButton.position}
              />
            </a>

            <a
              href={navigationConfig.resumeButton.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${heroData.resumeButtonText || navigationConfig.resumeButton.text} (opens in new tab)`}
              className="px-5 py-3 rounded-xl bg-[#0e1026] hover:bg-[#15193b] border border-white/10 hover:border-purple-500/40 text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black flex items-center gap-2"
            >
              <span>{heroData.resumeButtonText || navigationConfig.resumeButton.text}</span>
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Engineering Highlights Strip */}
          <div className="hero-animate opacity-0 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-neutral-300 font-medium max-w-3xl">
            {heroData.highlights.map((highlight, index) => {
              const colorClasses: Record<string, string> = {
                purple: "bg-purple-400",
                cyan: "bg-cyan-400",
                emerald: "bg-emerald-400",
                blue: "bg-blue-400",
                green: "bg-green-400",
              };
              const dotColor = colorClasses[highlight.color] || "bg-purple-400";
              return (
                <div key={index} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0d24] border border-white/10">
                  <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
                  <span><strong className="text-white">{highlight.value}</strong> {highlight.label}</span>
                </div>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div 
            className="pointer-events-none select-none absolute bottom-4 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator opacity-0 transition-opacity duration-700"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-2 scroll-indicator-arrow">
              <span className="text-white/40 text-xs tracking-widest uppercase">{heroData.scrollText}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/40">
                <path d="M10 4L10 16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
