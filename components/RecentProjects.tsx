"use client";

import Image from "next/image";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { projects, sectionTitles, uiText, images } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 w-[90vw] mx-auto scroll-mt-20">
      <h1 className="heading text-white p-2">
        {sectionTitles.projects.title.split(" ").map((word, i) =>
          i === 0 ? (
            <span key={i} className="text-purple">{word} </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h1>
      <p className="text-center text-[#BEC1DD] text-sm md:text-base max-w-2xl mx-auto mt-3 mb-2 px-4">
        {sectionTitles.projects.subtitle}
      </p>
      <div className="flex flex-wrap items-center justify-center p-4 m-4 md:gap-10">
        {[...projects]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((item) => (
          <div
            className="flex items-center justify-center sm:w-96 w-[80vw] cardContainer"
            style={{ minHeight: '34rem', height: '100%', maxHeight: '40rem' }}
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
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={`${item.title} preview`}
                    className="z-10 absolute bottom-0 w-full h-full object-cover object-top"
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1200px) 384px, 384px"
                  />
                ) : (
                  <div className="z-10 absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-950/80 to-indigo-950/80 border border-white/10 rounded-2xl">
                    <span className="text-4xl font-extrabold text-white/30 tracking-widest select-none">
                      {item.title.split(" ").map(w => w[0]).join("").toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {/* Category & Status */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-purple-300">
                    <MdCategory className="w-3 h-3" />
                    <span>{item.category}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    item.status === 'completed' 
                      ? 'bg-green-900/30 text-green-400 border border-green-500/20' 
                      : 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {item.status === 'completed' ? uiText.status.completed : uiText.status.inProgress}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 text-white">
                  {item.title}
                </h2>

                {/* Description */}
                <p
                  className="lg:text-sm md:text-sm text-xs leading-relaxed line-clamp-4"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-[#10132E] border border-white/5 text-purple-300">
                      {tech}
                    </span>
                  ))}
                  {item.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] rounded-full bg-[#10132E] border border-white/5 text-[#BEC1DD]">
                      +{item.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10 gap-3">
                  {item.sourceLink ? (
                    <button 
                      onClick={() => window.open(item.sourceLink, '_blank', 'noopener,noreferrer')}
                      className="flex items-center justify-center gap-2 flex-1 py-2 px-3 bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/20 rounded-lg text-xs text-white transition-all duration-200 hover:scale-105 cursor-pointer"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>{uiText.projects.sourceCode}</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 flex-1 py-2 px-3 bg-black/20 border border-white/5 rounded-lg text-xs text-white/30 cursor-not-allowed select-none">
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>{uiText.projects.sourceCode}</span>
                    </div>
                  )}
                  
                  {item.demoLink ? (
                    <button
                      onClick={() => window.open(item.demoLink, '_blank', 'noopener,noreferrer')}
                      className="flex items-center justify-center gap-2 flex-1 py-2 px-3 bg-gradient-to-r from-purple-900/40 to-purple-800/40 hover:from-purple-900/60 hover:to-purple-800/60 border border-purple-500/30 hover:border-purple-500/50 rounded-lg text-xs text-purple-300 hover:text-purple-200 transition-all duration-200 hover:scale-105 cursor-pointer"
                    >
                      <span>{uiText.projects.liveProject}</span>
                      <FaLocationArrow className="w-3 h-3" />
                    </button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 flex-1 py-2 px-3 bg-purple-900/10 border border-purple-500/10 rounded-lg text-xs text-purple-300/30 cursor-not-allowed select-none">
                      <span>{uiText.projects.liveProject}</span>
                      <FaLocationArrow className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;