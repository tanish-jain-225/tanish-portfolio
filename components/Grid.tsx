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
    <section id="about" aria-labelledby="about-heading" className="section-container" ref={sectionRef}>      
      <div className="text-center section-transition opacity-0 flex flex-col items-center w-full">
        <h2 id="about-heading" className="heading text-white">
          {bentoGridData.title.split(" ").map((word, i) =>
            i === 0 ? (
              <span key={i} className="text-purple">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        <p className="section-subtitle">
          {bentoGridData.subtitle}
        </p>
      </div>
      <div aria-label="Skills and interests flex" className="w-full flex flex-col items-center">
        <BentoGrid />
      </div>
    </section>
  );
};

export default Grid;
