"use client";

import Image from "next/image";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { projects, sectionTitles, uiText, images } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-10 scroll-mt-20">
      <h1 className="heading text-white">
        {sectionTitles.projects.split(' ')[0]} {sectionTitles.projects.split(' ')[1]}{" "}
        <span className="text-purple-600">{sectionTitles.projects.split(' ').slice(2).join(' ')}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 m-4 md:gap-10">
        {projects.map((item) => (
          <div
            className="flex items-center justify-center sm:w-96 w-[80vw] cardContainer" // removed fixed height classes
            style={{ minHeight: '32rem', height: '100%', maxHeight: '38rem' }} // dynamic, consistent height
            key={item.id}
          >            
          <PinContainer
              title={item.title}
              href={item.demoLink}
              disableWrapper={true}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden" style={{ height: '22vh', minHeight: 160, maxHeight: 240, marginBottom: 24, position: 'relative' }}>
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D", position: 'relative', height: '100%' }}
                >
                  <Image src={images.backgrounds.projectsBackground} alt="bgimg" className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-full h-full object-cover object-top"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="space-y-4">
                {/* Category & Duration */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-purple-300">
                    <MdCategory className="w-3 h-3" />
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className="lg:text-sm md:text-sm text-xs leading-relaxed line-clamp-6"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-6 pt-3 border-t border-white/10 gap-3">
                  <button 
                    onClick={() => window.open(item.sourceLink, '_blank', 'noopener,noreferrer')}
                    className="flex items-center justify-center gap-2 flex-1 py-2 px-3 bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/20 rounded text-xs text-white transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <FaGithub className="w-3 h-3" />
                    <span>{uiText.projects.sourceCode}</span>
                  </button>
                  
                  <button
                    onClick={() => window.open(item.demoLink, '_blank', 'noopener,noreferrer')}
                    className="flex items-center justify-center gap-2 flex-1 py-2 px-3 bg-gradient-to-r from-purple-900/40 to-purple-800/40 hover:from-purple-900/60 hover:to-purple-800/60 border border-purple-500/30 hover:border-purple-500/50 rounded text-xs text-purple-300 hover:text-purple-200 transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <span>{uiText.projects.liveProject}</span>
                    <FaLocationArrow className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;