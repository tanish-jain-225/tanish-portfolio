import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/ExpCard";
import { workExperience, sectionTitles, uiText } from "@/data";

const MyWorkExperience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-container">
      <div className="text-center w-full">
        <h2 id="experience-heading" className="heading text-white">
          {sectionTitles.experience.title.split(" ").map((word, i) =>
            i === 0 ? (
              <span key={i} className="text-purple">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        <p className="section-subtitle">
          {sectionTitles.experience.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl justify-items-center py-4 px-1 sm:px-4">
        {workExperience.map((card, index) => (
          <div
            key={card.id}
            className="w-full max-w-[480px] flex flex-col h-full"
          >
            <CardContainer containerClassName="w-full h-full py-1 sm:py-2" className="w-full h-full">
              <CardBody className="relative group/card bg-[#0b0d21] border border-white/[0.12] hover:border-purple-500/40 rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-full min-h-[440px] sm:min-h-[480px] shadow-xl shadow-black/50 hover:shadow-purple-500/10 transition-all duration-300 card-glow">
                <div className="flex flex-col flex-grow min-h-0">
                  {/* Timeline number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0 shadow-md shadow-purple-600/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
                  </div>

                  <CardItem
                    translateZ="25"
                    className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3"
                  >
                    {card.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="20"
                    className="text-[#BEC1DD] text-xs sm:text-sm mb-4 flex-grow line-clamp-4 leading-relaxed"
                  >
                    {card.desc}
                  </CardItem>
                </div>

                <div className="flex flex-col justify-end flex-shrink-0 mt-2 relative z-30 pointer-events-auto">
                  <CardItem translateZ="20" className="w-full mb-3">
                    <div className="flex items-center justify-center h-32 sm:h-40 w-full bg-[#050718] border border-white/5 rounded-xl overflow-hidden relative p-4">
                      <Image
                        src={card.thumbnail}
                        height={140}
                        width={140}
                        className="max-h-full max-w-full object-contain pointer-events-none select-none"
                        style={{ width: "auto", height: "auto" }}
                        alt={card.title}
                        sizes="140px"
                        loading="lazy"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    as="a"
                    translateZ="45"
                    href={card.link || uiText.experience.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View details for ${card.title} (opens in new tab)`}
                    className="w-full block px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black relative z-30 pointer-events-auto"
                  >
                    {uiText.experience.viewDetails}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorkExperience;
