"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CurriculumYearCard from "@/components/CurriculumYearCard";
import { subjects, primaryYears, secondaryYears } from "@/lib/curriculum-data";

function CurriculumContent() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject");
  const initialIndex = subjects.findIndex((s) => s.slug === subjectParam);
  const [activeSubject, setActiveSubject] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  useEffect(() => {
    const idx = subjects.findIndex((s) => s.slug === subjectParam);
    if (idx >= 0) setActiveSubject(idx);
  }, [subjectParam]);
  const current = subjects[activeSubject];

  const primaryData = current.years.filter((y) =>
    primaryYears.includes(y.yearLevel)
  );
  const secondaryData = current.years.filter((y) =>
    secondaryYears.includes(y.yearLevel)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -right-20 top-10 h-[350px] w-[350px] rounded-full bg-sage/[0.05]" />
          <div className="animate-float-reverse absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-terracotta/[0.04]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #235F8B 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-charcoal">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-dark" />
              Australian Curriculum V9
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              What your child learns,{" "}
              <span className="relative">
                <span className="relative z-10">year by year</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/25 sm:bottom-2 sm:h-4" />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg">
              A clear breakdown of the Australian Curriculum for each year of
              schooling. All content sourced directly from the official
              curriculum documents published by ACARA.
            </p>
          </div>
        </div>
      </section>

      {/* Subject Tabs + Content */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Subject switcher */}
          <div className="flex gap-1 border-b border-charcoal/5 pt-2">
            {subjects.map((subject, i) => (
              <button
                key={subject.slug}
                onClick={() => setActiveSubject(i)}
                className={`relative px-5 py-4 text-base font-semibold transition-colors ${
                  activeSubject === i
                    ? "text-charcoal"
                    : "text-charcoal-light/70 hover:text-charcoal"
                }`}
              >
                {subject.subject}
                {activeSubject === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-terracotta" />
                )}
              </button>
            ))}
          </div>

          {/* Year level cards */}
          <div className="py-8 sm:py-12">
            {/* Primary */}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
                  Primary School
                </h2>
                <span className="rounded-full bg-sage/10 px-3 py-1 text-sm font-medium text-charcoal">
                  Foundation &ndash; Year 6
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-base text-charcoal-light">
                The foundation years of the {current.subject} curriculum build
                core skills progressively from Foundation through Year 6.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8">
                {primaryData.map((year, i) => (
                  <CurriculumYearCard
                    key={year.yearLevel}
                    year={year}
                    subject={current.subject}
                    defaultOpen={i === 0}
                  />
                ))}
              </div>
            </div>

            {/* Secondary */}
            <div className="mt-12 sm:mt-16">
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
                  Secondary School
                </h2>
                <span className="rounded-full bg-terracotta/10 px-3 py-1 text-sm font-medium text-terracotta-dark">
                  Year 7 &ndash; Year 10
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-base text-charcoal-light">
                In the secondary years, {current.subject} curriculum extends
                skills and introduces more complex concepts.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8">
                {secondaryData.map((year) => (
                  <CurriculumYearCard
                    key={year.yearLevel}
                    year={year}
                    subject={current.subject}
                  />
                ))}
              </div>
            </div>

            {/* Official source link */}
            <div className="mt-12 rounded-2xl border border-charcoal/[0.06] bg-warm-white p-5 sm:mt-16 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    Official Curriculum Documents
                  </h3>
                  <p className="mt-1 text-base text-charcoal-light">
                    Download the full {current.subject} curriculum documents from
                    ACARA, the Australian Curriculum, Assessment and Reporting
                    Authority.
                  </p>
                </div>
                <a
                  href={current.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-base font-semibold text-cream transition-all duration-200 hover:bg-terracotta hover:shadow-lg hover:shadow-terracotta/20"
                >
                  Download from ACARA
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5 3l2-2m0 0l2 2m-2-2v8M3 9v3a1 1 0 001 1h8a1 1 0 001-1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CurriculumPage() {
  return (
    <Suspense>
      <CurriculumContent />
    </Suspense>
  );
}
