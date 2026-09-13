"use client";

import React, { useEffect, useRef } from "react";
import { BentoGrid } from "./ui/BentoGrid";
import { bentoGridData } from "@/data";

const Grid = () => {
  const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
    // Capture the ref value at the beginning of the effect
    const currentRef = sectionRef.current;
    
    // Animation for section elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    
    if (currentRef) {
      const elements = currentRef.querySelectorAll('.section-transition');
      elements.forEach((el) => observer.observe(el));
      
      // Add staggered animation to grid items
      const gridItems = currentRef.querySelectorAll('.bento-item');
      gridItems.forEach((item, index) => {
        setTimeout(() => {
          observer.observe(item);
        }, index * 100);
      });
    }
    
    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll('.section-transition, .bento-item');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-16 sm:py-20 w-[94vw] sm:w-[90vw] max-w-7xl mx-auto scroll-mt-20" ref={sectionRef}>      
      <div className="mb-8 sm:mb-12 text-center section-transition opacity-0">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white tracking-tight break-words px-1">
          {bentoGridData.title.split(" ").map((word, i) =>
            i === 0 ? (
              <span key={i} className="text-purple">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        <p className="text-[#C1C2D3] max-w-xl mx-auto text-xs sm:text-base px-1">
          {bentoGridData.subtitle}
        </p>
      </div>
      <div aria-label="Skills and interests flex" className="w-full">
        <BentoGrid />
      </div>
    </section>
  );
};

export default Grid;
