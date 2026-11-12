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
        <div className="lg:col-span-6 rounded-lg border border-[#172136] bg-[#0a0f1c] p-6 space-y-3 transition-colors hover:border-blue-500/35">
          <h3 className="text-sm font-medium text-slate-100">
            Background
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {personalInfo.bio}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Across academic systems, full-stack products, and data pipelines, my focus stays on explicit API schemas, predictable access control, clean database models, and automated tests before shipping.
          </p>
        </div>

        <div className="lg:col-span-6 rounded-lg border border-[#172136] bg-[#0a0f1c] p-6 flex flex-col justify-between gap-4 transition-colors hover:border-blue-500/35">
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-slate-100">
                Education
              </h3>
              <span className="font-mono text-xs text-blue-400">
                {academics?.batch ?? "2023 – 2027 (Expected)"}
              </span>
            </div>

            <p className="text-sm font-medium text-slate-200 leading-snug">
              {academics?.university ?? personalInfo.university}
            </p>
            <p className="text-sm text-slate-400">
              {academics?.degree ?? personalInfo.degree}
            </p>
            <p className="font-mono text-xs text-slate-300 pt-1">
              CGPA: {academics?.cgpa ?? "7.43 / 10.0"}
            </p>
          </div>

          <div className="pt-4 border-t border-[#172136]">
            <p className="text-xs font-mono text-blue-400 mb-1">
              Relevant Coursework
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {courseworkList.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-[#172136] bg-[#0a0f1c] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#172136] flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-medium text-slate-100">
            Technical Skills
          </h3>
          <span className="text-xs font-mono text-slate-400">
            Languages, frameworks, databases &amp; testing
          </span>
        </div>

        <dl className="divide-y divide-[#172136]">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-[175px_1fr] gap-1.5 sm:gap-6 items-baseline"
            >
              <dt className="text-xs font-mono text-blue-400">
                {group.category}
              </dt>
              <dd className="text-sm text-slate-200 leading-relaxed">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
