import React from "react";
import Image from "next/image";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { heroData, navigationConfig, personalInfo, socialMedia } from "@/data";

const portraitEdgeBlurMask =
  "radial-gradient(ellipse 66% 64% at 54% 48%, transparent 52%, rgba(0, 0, 0, 0.72) 78%, #000 100%)";

const portraitVignetteOverlay = [
  "radial-gradient(ellipse 74% 70% at 54% 48%, transparent 48%, rgba(5, 7, 12, 0.5) 76%, #05070c 98%)",
  "linear-gradient(to bottom, #05070c 0%, rgba(5, 7, 12, 0.5) 10%, transparent 24%, transparent 74%, rgba(5, 7, 12, 0.76) 89%, #05070c 100%)",
  "linear-gradient(to right, #05070c 0%, rgba(5, 7, 12, 0.45) 9%, transparent 20%, transparent 86%, rgba(5, 7, 12, 0.45) 94%, #05070c 100%)",
].join(", ");

const Hero = () => {
  const github = socialMedia.find((item) => item.name === "GitHub");
  const linkedin = socialMedia.find((item) => item.name === "LinkedIn");

  return (
    <section
      id="home"
      tabIndex={-1}
      className="w-full bg-[#05070c] border-b border-[#172136] pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 focus:outline-none"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10 text-xs font-mono text-slate-400">
          <p className="inline-flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-500 ring-2 ring-blue-500/20 shrink-0"
              aria-hidden="true"
            />
            <span>{heroData.availabilityBadge}</span>
          </p>
          <span className="text-slate-400">{personalInfo.location}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-50 leading-tight">
              {personalInfo.name}
            </h1>

            <p className="mt-2 text-sm sm:text-base font-mono text-blue-400">
              {heroData.subtitle}
            </p>

            <p className="mt-5 text-lg sm:text-xl font-medium tracking-tight text-slate-200 max-w-2xl leading-snug">
              {heroData.title}
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              {heroData.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={heroData.ctaButton.link}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]"
              >
                <span>{heroData.ctaButton.text}</span>
                <FaArrowRight className="h-3 w-3" aria-hidden="true" />
              </a>

              <a
                href={navigationConfig.resumeButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0a0f1c] border border-[#1a2742] px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-blue-500/45 hover:bg-[#0f172a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]"
              >
                <FaDownload className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                <span>{heroData.resumeButtonText}</span>
              </a>

              <div
                className="hidden sm:block h-4 w-px bg-[#172136] mx-1"
                aria-hidden="true"
              />

              <div className="flex items-center gap-1">
                {github && (
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-slate-400 transition-colors hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
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
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-slate-400 transition-colors hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden xs:inline">LinkedIn</span>
                  </a>
                )}
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label={`Email ${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-slate-400 transition-colors hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <HiOutlineMail className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] aspect-[584/668] overflow-hidden bg-[#05070c] select-none">
              <Image
                src={heroData.portrait.src}
                alt={heroData.portrait.alt}
                width={heroData.portrait.width}
                height={heroData.portrait.height}
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                className="h-full w-full object-cover object-center brightness-[0.97] contrast-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 backdrop-blur-[8px]"
                style={{
                  maskImage: portraitEdgeBlurMask,
                  WebkitMaskImage: portraitEdgeBlurMask,
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ background: portraitVignetteOverlay }}
              />
            </div>
          </div>
        </div>

        <dl className="mt-10 sm:mt-12 pt-8 border-t border-[#172136] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {heroData.highlights.map((item) => (
            <div key={item.label} className="space-y-1">
              <dt className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                {item.value}
              </dt>
              <dd className="text-xs sm:text-sm text-slate-400 leading-snug">
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
