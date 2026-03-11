"use client";

import React, { Suspense, useEffect, useState, useCallback } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems, uiText } from "@/data";
import { getIcon, FaArrowUp } from "@/lib/icons";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import dynamic from "next/dynamic";
import MyWorkExperience from "@/components/MyWorkExperience";

// Dynamically import components that might cause hydration issues
const DynamicGrid = dynamic(() => import("@/components/Grid"), { ssr: false, loading: () => <div className="content-loader h-96 w-full" /> });
const DynamicContact = dynamic(() => import("@/components/Contact"), { ssr: false, loading: () => <div className="content-loader h-96 w-full" /> });

// Scroll-to-top button component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={uiText.accessibility.scrollToTop}
      title={uiText.accessibility.backToTop}
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} role="main" className="bg-black relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      {/* Full-width hero section */}
      <section className="w-full">
        <FloatingNav
          navItems={navItems.map((item) => ({
            name: item.name,
            link: item.link,
            icon: React.createElement(getIcon(item.icon)),
          }))}
        />
        <Hero />
      </section>
      
      {/* Content with max-width constraint */}
      <div className="w-full">
        <Suspense fallback={<div className="content-loader h-96 w-full" />}>
          <DynamicGrid />
        </Suspense>
        <RecentProjects />
        <MyWorkExperience />
        <Suspense fallback={<div className="content-loader h-96 w-full" />}>
          <DynamicContact />
        </Suspense>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
