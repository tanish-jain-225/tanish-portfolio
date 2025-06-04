"use client";

import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import * as FaIcons from "react-icons/fa";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import dynamic from "next/dynamic";
import MyWorkExperience from "@/components/MyWorkExperience";

// Dynamically import components that might cause hydration issues
const DynamicGrid = dynamic(() => import("@/components/Grid"), { ssr: false, loading: () => <div className="content-loader h-96 w-full" /> });
const DynamicContact = dynamic(() => import("@/components/Contact"), { ssr: false, loading: () => <div className="content-loader h-96 w-full" /> });

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} role="main" className="bg-black relative flex justify-center items-center flex-col overflow-hidden mx-auto" suppressHydrationWarning>
      {/* Full-width hero section */}
      <section className="w-full">
        <FloatingNav
          navItems={navItems.map((item) => ({
            name: item.name,
            link: item.link,
            icon: React.createElement(
              FaIcons[item.icon as keyof typeof FaIcons]
            ),
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
    </main>
  );
}
