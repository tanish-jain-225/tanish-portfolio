import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/ExpCard";
import { workExperience, sectionTitles, uiText } from "@/data";

const MyWorkExperience = () => {
  return (
    <section id="experience" className="py-20 w-[90vw] mx-auto scroll-mt-20">
      <h1 className="heading text-white">{sectionTitles.experience}</h1>
      <div className="flex flex-wrap justify-center items-start gap-4 my-2">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="flex-1 min-w-[300px] max-w-[400px] h-[600px]"
          >
            <CardContainer className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col min-h-[500px]">
                <div className="flex flex-col flex-grow min-h-0">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
                  >
                    {card.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm dark:text-neutral-300 mb-6 flex-grow line-clamp-6"
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
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-full cursor-pointer"
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
