"use client";

import React, { useEffect, useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { heroData } from "@/data";
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
    <div id="home" className="w-full relative min-h-screen flex items-center justify-center scroll-mt-20" ref={heroRef}>
      {/* Fixed position background container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {/* Spotlight container with proper positioning */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Spotlight
            className="-top-40 -left-10 sm:-left-20 md:-left-32 md:-top-20 h-screen animate-spotlight"
            fill="white"
          />
          <Spotlight
            className="top-10 left-[40%] sm:left-[45%] md:left-[70%] h-[80vh] w-[50vw] animate-spotlight"
            fill="#cbacf9"
          />
          <Spotlight className="top-28 left-[20%] sm:left-[25%] md:left-[40%] h-[80vh] w-[50vw] animate-spotlight" fill="#8b5cf6" />
        </div>

        {/* Grid background layer */}
        <div className="absolute inset-0 bg-white dark:bg-black pointer-events-none">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px] sm:[background-size:30px_30px] md:[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        </div>
      </div>

      {/* Content layer with proper z-index */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 w-full px-2 sm:px-6 md:px-8">
        <div className="w-full max-w-[calc(100vw-1rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-[10px] sm:text-xs md:text-sm text-center text-blue-100 max-w-[260px] sm:max-w-md md:max-w-lg hero-animate opacity-0 pt-2 sm:pt-6 md:pt-8 break-words font-medium">
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
                className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs rounded-full bg-white/5 border border-white/10 text-purple-300 backdrop-blur-sm whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="hero-animate opacity-0 max-w-full">
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
