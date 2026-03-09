import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/ExpCard";
import { workExperience, sectionTitles, uiText } from "@/data";

const MyWorkExperience = () => {
  return (
    <section id="experience" className="py-20 w-[90vw] mx-auto scroll-mt-20">
      <h1 className="heading text-white">
        {sectionTitles.experience.title.split(" ").map((word, i) =>
          i === 0 ? (
            <span key={i} className="text-purple">{word} </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h1>
      <p className="text-center text-[#BEC1DD] text-sm md:text-base max-w-2xl mx-auto mt-3 mb-6">
        {sectionTitles.experience.subtitle}
      </p>
      <div className="flex flex-wrap justify-center items-start gap-4 my-2">
        {workExperience.map((card, index) => (
          <div
            key={card.id}
            className="flex-1 min-w-[300px] max-w-[400px] h-[600px]"
          >
            <CardContainer className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col min-h-[500px] card-glow">
                <div className="flex flex-col flex-grow min-h-0">
                  {/* Timeline number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
                  </div>

                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
                  >
                    {card.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm dark:text-neutral-300 mb-6 flex-grow line-clamp-6 leading-relaxed"
                    style={{ minHeight: "4rem" }}
                  >
                    {card.desc}
                  </CardItem>
                </div>

                <div className="flex flex-col justify-end flex-shrink-0">
                  <CardItem translateZ="100" className="w-full mb-4">
                    <div className="flex items-center justify-center h-48 w-full bg-white dark:bg-black rounded-xl overflow-hidden" style={{position: 'relative', height: '12rem'}}>
                      <Image
                        src={card.thumbnail}
                        height={180}
                        width={180}
                        className="max-h-full max-w-full object-contain"
                        alt={card.title}
                        sizes="180px"
                      />
                    </div>
                  </CardItem>
                  <a
                    href={uiText.experience.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="flex justify-between items-center w-full cursor-pointer">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 text-white text-xs font-bold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 w-full cursor-pointer shadow-lg shadow-purple-500/20"
                      >
                        {uiText.experience.viewDetails}
                      </CardItem>
                    </div>
                  </a>
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
