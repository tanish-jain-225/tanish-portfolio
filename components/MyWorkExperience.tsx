import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/ExpCard";
import { workExperience, sectionTitles, uiText } from "@/data";

const MyWorkExperience = () => {  return (
    <section id="experience" className="py-20 w-[90vw] mx-auto scroll-mt-20">
      <h1 className="heading text-white">{sectionTitles.experience}</h1>
      <div className="flex flex-wrap justify-center items-start gap-4 my-2">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="flex-1 min-w-[300px] max-w-[400px] h-[600px]"
          >
            <CardContainer className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col justify-between min-h-[500px]">
                <div className="flex flex-col flex-grow">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
                  >
                    {card.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm dark:text-neutral-300 mb-6 flex-grow"
                  >
                    {card.desc}
                  </CardItem>
                </div>

                <div className="flex flex-col">
                  <CardItem translateZ="100" className="w-full mb-6">                    <Image
                      src={card.thumbnail}
                      height={200}
                      width={200}
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={card.title}
                    />
                  </CardItem>                  <a
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
