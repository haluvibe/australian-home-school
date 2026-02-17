"use client";

import { useState } from "react";
import Link from "next/link";
import type { YearLevelData } from "@/lib/curriculum-data";
import { annotateText } from "@/lib/glossary";

interface CurriculumYearCardProps {
  year: YearLevelData;
  subject: string;
  defaultOpen?: boolean;
}

const strandColors: Record<string, string> = {
  Number: "bg-terracotta/10 text-terracotta-dark",
  Algebra: "bg-sage/10 text-charcoal",
  Measurement: "bg-golden/15 text-terracotta-dark",
  Space: "bg-charcoal/[0.08] text-charcoal",
  Statistics: "bg-terracotta-light/15 text-terracotta-dark",
  Probability: "bg-sage-light/15 text-charcoal",
  Language: "bg-terracotta/10 text-terracotta-dark",
  Literature: "bg-sage/10 text-charcoal",
  Literacy: "bg-golden/15 text-terracotta-dark",
};

export default function CurriculumYearCard({
  year,
  subject,
  defaultOpen = false,
}: CurriculumYearCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${isOpen
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
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-base font-semibold text-terracotta">
            {year.yearLevel === "Foundation"
              ? "F"
              : year.yearLevel.replace("Year ", "")}
          </span>
          <span
            className={`font-display text-lg font-medium transition-colors ${isOpen ? "text-charcoal" : "text-charcoal-light"
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
                className="rounded-full bg-sage/10 px-3 py-0.5 text-sm font-medium text-charcoal"
              >
                {strand}
              </span>
            ))}
          </div>
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                ? "bg-terracotta text-white"
                : "bg-sand/60 text-charcoal-light"
              }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""
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
                  className="rounded-full bg-sage/10 px-3 py-0.5 text-sm font-medium text-charcoal"
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
                        className={`inline-flex rounded-md px-3 py-1 text-sm font-semibold ${strandColors[strandGroup.strand] ||
                          "bg-charcoal/[0.06] text-charcoal"
                          }`}
                      >
                        {strandGroup.strand}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-2.5 pl-1">
                      {strandGroup.items.map((item, i) => {
                        let description = "";
                        let example = "";
                        let khanUrl = "";

                        let worksheetSlug = "";

                        if (typeof item === "string") {
                          const parts = item.split(" — e.g. ");
                          description = parts[0];
                          example = parts[1];
                        } else {
                          description = item.description;
                          example = item.example || "";
                          khanUrl = item.khanAcademyUrl || "";
                          worksheetSlug = item.worksheetSlug || "";
                        }

                        return (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal/40" />
                            <div>
                              <span className="text-base leading-relaxed text-charcoal">
                                {annotateText(description, subject)}
                              </span>
                              {example && (
                                <span className="mt-0.5 block text-base italic leading-relaxed text-charcoal-light">
                                  e.g. {example}
                                </span>
                              )}
                              {khanUrl && (
                                <a
                                  href={khanUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-1.5 flex items-center gap-2 rounded-lg border border-terracotta/15 bg-terracotta/[0.04] px-3 py-1.5 text-sm transition-colors hover:bg-terracotta/[0.08]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="shrink-0 text-terracotta"
                                  >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                  </svg>
                                  <span>
                                    <span className="font-medium text-terracotta">Khan Academy</span>
                                    <span className="ml-1.5 text-charcoal-light/70">{new URL(khanUrl).pathname.split("/").filter(Boolean).slice(1).join(" › ")}</span>
                                  </span>
                                </a>
                              )}
                              {worksheetSlug && (
                                <Link
                                  href={`/worksheets/mathematics/foundation/${worksheetSlug}`}
                                  className="mt-1.5 flex items-center gap-2 rounded-lg border border-sage/15 bg-sage/[0.04] px-3 py-1.5 text-sm transition-colors hover:bg-sage/[0.08]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="shrink-0 text-sage-dark"
                                  >
                                    <polyline points="6 9 6 2 18 2 18 9" />
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <rect x="6" y="14" width="12" height="8" />
                                  </svg>
                                  <span className="font-medium text-sage-dark">Printable Worksheet</span>
                                </Link>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ) : year.description ? (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60">
                  What students learn in {subject}
                </h4>
                <p className="mt-2 text-base leading-relaxed text-charcoal">
                  {year.description}
                </p>
              </div>
            ) : null}

            {/* Achievement Standard */}
            <details className="group rounded-xl border border-sage/15 bg-sage/[0.04]">
              <summary className="cursor-pointer select-none px-5 py-4 text-sm font-semibold uppercase tracking-wider text-charcoal">
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
              <p className="px-5 pb-4 text-base leading-relaxed text-charcoal-light">
                {year.achievementStandard}
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
