import React from "react";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { heroData, navigationConfig, personalInfo, socialMedia } from "@/data";

const Hero = () => {
  const github = socialMedia.find((item) => item.name === "GitHub");
  const linkedin = socialMedia.find((item) => item.name === "LinkedIn");

  return (
    <section
      id="home"
      tabIndex={-1}
      className="w-full bg-[#09090b] border-b border-zinc-800/80 pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 focus:outline-none"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 text-xs font-mono text-zinc-400">
          <p className="inline-flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"
              aria-hidden="true"
            />
            <span>{heroData.availabilityBadge}</span>
          </p>
          <span className="text-zinc-400">{personalInfo.location}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight">
          {personalInfo.name}
        </h1>

        <p className="mt-2 text-sm sm:text-base font-mono text-zinc-400">
          {heroData.subtitle}
        </p>

        <p className="mt-5 text-lg sm:text-xl font-medium tracking-tight text-zinc-200 max-w-3xl leading-snug">
          {heroData.title}
        </p>

        <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
          {heroData.description}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={heroData.ctaButton.link}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            <span>{heroData.ctaButton.text}</span>
            <FaArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>

          <a
            href={navigationConfig.resumeButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-700 hover:bg-zinc-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            <FaDownload className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
            <span>{heroData.resumeButtonText}</span>
          </a>

          <div
            className="hidden sm:block h-4 w-px bg-zinc-800 mx-1"
            aria-hidden="true"
          />

          <div className="flex items-center gap-1">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xs:inline">GitHub</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xs:inline">LinkedIn</span>
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label={`Email ${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
            >
              <HiOutlineMail className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

        <dl className="mt-12 pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {heroData.highlights.map((item) => (
            <div key={item.label} className="space-y-1">
              <dt className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
                {item.value}
              </dt>
              <dd className="text-xs sm:text-sm text-zinc-400 leading-snug">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
