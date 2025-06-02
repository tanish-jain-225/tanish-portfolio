"use client";

import React from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import * as FaIcons from "react-icons/fa";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import dynamic from "next/dynamic";
import MyWorkExperience from "@/components/MyWorkExperience";

// Dynamically import components that might cause hydration issues
const DynamicGrid = dynamic(() => import("@/components/Grid"), { ssr: false });
const DynamicContact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-black relative flex justify-center items-center flex-col overflow-hidden mx-auto" suppressHydrationWarning>
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
        <DynamicGrid />
        <RecentProjects />
        <MyWorkExperience />
        <DynamicContact />
      </div>
      <Footer />
    </main>
  );
}
