import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import MyWorkExperience from "@/components/MyWorkExperience";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { DynamicGrid, DynamicContact } from "@/components/ClientComponents";

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
        className="bg-black relative flex justify-center items-center flex-col overflow-hidden mx-auto w-full"
      >
        <Hero />

        <div className="w-full flex flex-col items-center">
          <Suspense fallback={<div className="content-loader h-96 w-full" />}>
            <DynamicGrid />
          </Suspense>
          <RecentProjects />
          <MyWorkExperience />
          <Suspense fallback={<div className="content-loader h-96 w-full" />}>
            <DynamicContact />
          </Suspense>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
