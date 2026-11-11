import React from "react";
import { bentoGridData, personalInfo, skillCategories } from "@/data";

const DEFAULT_COURSEWORK = [
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Machine Learning",
  "Generative AI",
];

export const BentoGrid = () => {
  const academicItem = bentoGridData.items.find((item) => item.id === 1);
  const academics =
    academicItem?.content.type === "engineering"
      ? academicItem.content.academics
      : undefined;

  const courseworkList = academics?.coursework ?? DEFAULT_COURSEWORK;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 rounded-lg border border-zinc-800 bg-[#111114] p-6 space-y-3">
          <h3 className="text-sm font-medium text-zinc-100">
            Background
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {personalInfo.bio}
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Across academic systems, full-stack products, and data pipelines, my focus stays on explicit API schemas, predictable access control, clean database models, and automated tests before shipping.
          </p>
        </div>

        <div className="lg:col-span-6 rounded-lg border border-zinc-800 bg-[#111114] p-6 flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-zinc-100">
                Education
              </h3>
              <span className="font-mono text-xs text-zinc-400">
                {academics?.batch ?? "2023 – 2027 (Expected)"}
              </span>
            </div>

            <p className="text-sm font-medium text-zinc-200 leading-snug">
              {academics?.university ?? personalInfo.university}
            </p>
            <p className="text-sm text-zinc-400">
              {academics?.degree ?? personalInfo.degree}
            </p>
            <p className="font-mono text-xs text-zinc-300 pt-1">
              CGPA: {academics?.cgpa ?? "7.43 / 10.0"}
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800/80">
            <p className="text-xs font-mono text-zinc-400 mb-1">
              Relevant Coursework
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {courseworkList.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-[#111114] overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-medium text-zinc-100">
            Technical Skills
          </h3>
          <span className="text-xs font-mono text-zinc-400">
            Languages, frameworks, databases &amp; testing
          </span>
        </div>

        <dl className="divide-y divide-zinc-800/80">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-[175px_1fr] gap-1.5 sm:gap-6 items-baseline"
            >
              <dt className="text-xs font-mono text-zinc-400">
                {group.category}
              </dt>
              <dd className="text-sm text-zinc-200 leading-relaxed">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
