"use client";

import React, { useEffect, useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { heroData } from "@/data";
import * as FaIcons from "react-icons/fa";

const Hero = () => {
  // Get the icon component dynamically from the icon name in heroData
  const IconComponent = FaIcons[heroData.ctaButton.icon as keyof typeof FaIcons];
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
      <div className="absolute inset-0 overflow-hidden">
        {/* Spotlight container with proper positioning */}
        <div className="absolute inset-0 overflow-hidden">
          <Spotlight
            className="-top-40 -left-10 sm:-left-20 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-[40%] sm:left-[45%] md:left-[70%] h-[80vh] w-[50vw]"
            fill="red"
          />
          <Spotlight className="top-28 left-[20%] sm:left-[25%] md:left-[40%] h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* Grid background layer */}
        <div className="absolute inset-0 bg-white dark:bg-black">
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
      <div className="relative z-10 flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 w-full px-4 sm:px-8">
        <div className="max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs sm:text-sm text-center text-blue-100 max-w-64 sm:max-w-80 hero-animate opacity-0 pt-4 sm:pt-8 md:pt-10">
            {heroData.subtitle}
          </h2>
          
          <div className="hero-animate opacity-0">
            <TextGenerateEffect 
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              words={heroData.title}
            />
          </div>

          <p className="text-center md:tracking-wider mb-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hero-animate opacity-0 text-white px-2 sm:px-4 md:px-6">
            {heroData.description}
          </p>
          <div className="hero-animate opacity-0">
            <a 
              href={heroData.ctaButton.link}
              aria-label={heroData.ctaButton.text}
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <MagicButton 
                title={heroData.ctaButton.text}
                icon={<IconComponent />}
                position={heroData.ctaButton.position}
              />
            </a>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 mt-12 scroll-indicator opacity-0 transition-opacity duration-700">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
