"use client";

import { useState } from "react";
import type { YearLevelData } from "@/lib/curriculum-data";

interface CurriculumYearCardProps {
  year: YearLevelData;
  subject: string;
  defaultOpen?: boolean;
}

const strandColors: Record<string, string> = {
  Number: "bg-terracotta/10 text-terracotta-dark",
  Algebra: "bg-sage/10 text-sage-dark",
  Measurement: "bg-golden/15 text-golden",
  Space: "bg-charcoal/[0.06] text-charcoal",
  Statistics: "bg-terracotta-light/15 text-terracotta",
  Probability: "bg-sage-light/15 text-sage-dark",
  Language: "bg-terracotta/10 text-terracotta-dark",
  Literature: "bg-sage/10 text-sage-dark",
  Literacy: "bg-golden/15 text-golden",
};

export default function CurriculumYearCard({
  year,
  subject,
  defaultOpen = false,
}: CurriculumYearCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-charcoal/10 bg-warm-white shadow-sm"
          : "border-charcoal/[0.06] bg-transparent hover:border-charcoal/10"
      }`}
    >
      <button
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-sm font-semibold text-terracotta">
            {year.yearLevel === "Foundation"
              ? "F"
              : year.yearLevel.replace("Year ", "")}
          </span>
          <span
            className={`font-display text-lg font-medium transition-colors ${
              isOpen ? "text-charcoal" : "text-charcoal-light"
            }`}
          >
            {year.yearLevel}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden flex-wrap gap-1.5 sm:flex">
            {year.strands.map((strand) => (
              <span
                key={strand}
                className="rounded-full bg-sage/10 px-2.5 py-0.5 text-xs font-medium text-sage-dark"
              >
                {strand}
              </span>
            ))}
          </div>
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-terracotta text-white"
                : "bg-sand/60 text-charcoal-light"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </button>

      <div
        className="overflow-hidden"
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 px-5 pb-5 sm:px-6 sm:pb-6">
            {/* Strands - mobile only */}
            <div className="flex flex-wrap gap-1.5 sm:hidden">
              {year.strands.map((strand) => (
                <span
                  key={strand}
                  className="rounded-full bg-sage/10 px-2.5 py-0.5 text-xs font-medium text-sage-dark"
                >
                  {strand}
                </span>
              ))}
            </div>

            {/* Objectives by strand */}
            {year.objectives ? (
              <div className="space-y-4">
                {year.objectives.map((strandGroup) => (
                  <div key={strandGroup.strand}>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${
                          strandColors[strandGroup.strand] ||
                          "bg-charcoal/[0.06] text-charcoal"
                        }`}
                      >
                        {strandGroup.strand}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5 pl-1">
                      {strandGroup.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[15px] leading-relaxed text-charcoal-light/90"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal/20" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : year.description ? (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                  What students learn in {subject}
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal-light/85">
                  {year.description}
                </p>
              </div>
            ) : null}

            {/* Achievement Standard */}
            <details className="group rounded-xl border border-sage/15 bg-sage/[0.04]">
              <summary className="cursor-pointer select-none px-5 py-4 text-xs font-semibold uppercase tracking-wider text-sage-dark">
                Achievement Standard
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-1.5 inline-block transition-transform duration-200 group-open:rotate-90"
                >
                  <path
                    d="M4.5 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="px-5 pb-4 text-[14px] leading-relaxed text-charcoal-light/80">
                {year.achievementStandard}
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
