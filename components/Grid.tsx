"use client";

import React, { useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
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
    <section id="about" className="py-16 md:py-24 w-[90vw] mx-auto scroll-mt-20" ref={sectionRef}>      <div className="mb-12 text-center section-transition opacity-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
          {bentoGridData.title}
        </h2>
        <p className="text-[#C1C2D3] max-w-xl mx-auto">
          {bentoGridData.subtitle}
        </p>
      </div>
        <div aria-label="Skills and interests grid">
        <BentoGrid>
          {bentoGridData.items.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg, content}) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              className={`${className} bento-item section-transition opacity-0`}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              content={content}
              id={id}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
