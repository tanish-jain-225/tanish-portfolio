import React from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import MyWorkExperience from "@/components/MyWorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <header role="banner" className="w-full">
        <FloatingNav navItems={navItems} />
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        role="main"
        className="bg-[#09090b] relative flex flex-col items-center overflow-x-clip mx-auto w-full"
      >
        <Hero />
        <Grid />
        <RecentProjects />
        <MyWorkExperience />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
