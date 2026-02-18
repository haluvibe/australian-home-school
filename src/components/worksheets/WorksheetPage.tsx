"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import type { LearningGuide, Lesson } from "@/lib/worksheet-types";

const strandColors: Record<string, string> = {
  Number: "bg-terracotta/15 text-terracotta-dark",
  Algebra: "bg-sage/15 text-charcoal",
  Measurement: "bg-golden/20 text-terracotta-dark",
  Space: "bg-charcoal/10 text-charcoal",
  Statistics: "bg-terracotta-light/20 text-terracotta-dark",
};

// ... existing imports

interface WorksheetPageProps {
  title: string;
  strand: string;
  learningGuide?: LearningGuide;
  lesson?: Lesson;
  children: ReactNode;
}

export default function WorksheetPage({ title, strand, learningGuide, lesson, children }: WorksheetPageProps) {
  const [mode, setMode] = useState<"worksheet" | "lesson">("worksheet");

  return (
    <div className="worksheet-page mx-auto max-w-[210mm] bg-white p-6 sm:p-10 print:p-0">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 border-b-2 border-charcoal/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span
            className={`inline-flex rounded-md px-3 py-1 text-sm font-bold uppercase tracking-wider ${strandColors[strand] || "bg-charcoal/10 text-charcoal"}`}
          >
            {strand}
          </span>
          <h1 className="mt-2 font-display text-2xl font-semibold leading-tight text-charcoal sm:text-3xl">
            {title}
          </h1>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 print:hidden">
          {lesson && (
            <button
              onClick={() => setMode(mode === "worksheet" ? "lesson" : "worksheet")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${mode === "lesson"
                ? "bg-charcoal text-white"
                : "bg-charcoal/5 text-charcoal hover:bg-charcoal/10"
                }`}
            >
              {mode === "lesson" ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  View Worksheet
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                  Companion Lesson
                </>
              )}
            </button>
          )}
        </div>

        <div className="hidden gap-6 text-base text-charcoal-light print:flex">
          <div className="flex items-end gap-2">
            <span className="font-semibold leading-none text-charcoal">Name:</span>
            <span className="mb-0.5 inline-block w-40 border-b-2 border-dashed border-charcoal/30" />
          </div>
          <div className="flex items-end gap-2">
            <span className="font-semibold leading-none text-charcoal">Date:</span>
            <span className="mb-0.5 inline-block w-28 border-b-2 border-dashed border-charcoal/30" />
          </div>
        </div>
      </div>

      {mode === "lesson" && lesson ? (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
          <div className="rounded-2xl bg-blue-50 p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="font-display text-3xl font-bold text-blue-900">{lesson.title}</h2>
              <p className="mt-2 text-lg text-blue-800/80">{lesson.objective}</p>
            </div>

            <div className="mb-8 rounded-xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-charcoal/50">Materials Needed</h3>
              <ul className="flex flex-wrap gap-2">
                {lesson.materials.map((item, i) => (
                  <li key={i} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <section>
                <div className="mb-2 flex items-center gap-2 text-blue-600">
                  <span className="text-sm font-bold uppercase tracking-wider">1. Introduction</span>
                  <div className="h-px flex-1 bg-blue-200"></div>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-charcoal">{lesson.intro.title}</h3>
                <div className="space-y-4">
                  <div className="rounded-xl border-l-4 border-blue-400 bg-white p-4 shadow-sm">
                    <span className="mb-1 block text-xs font-bold uppercase text-blue-400">Say</span>
                    <p className="text-lg italic leading-relaxed text-charcoal-light">"{lesson.intro.script}"</p>
                  </div>
                  {lesson.intro.action && (
                    <div className="rounded-xl border-l-4 border-terracotta bg-white p-4 shadow-sm">
                      <span className="mb-1 block text-xs font-bold uppercase text-terracotta">Do</span>
                      <p className="font-medium text-charcoal">{lesson.intro.action}</p>
                    </div>
                  )}
                </div>
              </section>

              <section>
                <div className="mb-2 flex items-center gap-2 text-blue-600">
                  <span className="text-sm font-bold uppercase tracking-wider">2. Main Activity</span>
                  <div className="h-px flex-1 bg-blue-200"></div>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-charcoal">{lesson.mainActivity.title}</h3>
                <div className="space-y-4">
                  <div className="rounded-xl border-l-4 border-blue-400 bg-white p-4 shadow-sm">
                    <span className="mb-1 block text-xs font-bold uppercase text-blue-400">Say</span>
                    <p className="text-lg italic leading-relaxed text-charcoal-light">"{lesson.mainActivity.script}"</p>
                  </div>
                  {lesson.mainActivity.action && (
                    <div className="rounded-xl border-l-4 border-terracotta bg-white p-4 shadow-sm">
                      <span className="mb-1 block text-xs font-bold uppercase text-terracotta">Do</span>
                      <p className="font-medium text-charcoal">{lesson.mainActivity.action}</p>
                    </div>
                  )}
                </div>
              </section>

              <section>
                <div className="mb-2 flex items-center gap-2 text-blue-600">
                  <span className="text-sm font-bold uppercase tracking-wider">3. Wrap Up</span>
                  <div className="h-px flex-1 bg-blue-200"></div>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-charcoal">{lesson.wrapUp.title}</h3>
                <div className="space-y-4">
                  <div className="rounded-xl border-l-4 border-blue-400 bg-white p-4 shadow-sm">
                    <span className="mb-1 block text-xs font-bold uppercase text-blue-400">Say</span>
                    <p className="text-lg italic leading-relaxed text-charcoal-light">"{lesson.wrapUp.script}"</p>
                  </div>
                  {lesson.wrapUp.action && (
                    <div className="rounded-xl border-l-4 border-terracotta bg-white p-4 shadow-sm">
                      <span className="mb-1 block text-xs font-bold uppercase text-terracotta">Do</span>
                      <p className="font-medium text-charcoal">{lesson.wrapUp.action}</p>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Parent Tip */}
            {lesson.parentTip && (
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  <h3 className="font-display text-lg font-bold text-amber-900">Parent Tip</h3>
                </div>
                <p className="text-base leading-relaxed text-amber-800">{lesson.parentTip}</p>
              </div>
            )}

            {/* Going Further */}
            {lesson.extension && (
              <div className="mt-4 rounded-2xl border border-sage/40 bg-sage/10 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  <h3 className="font-display text-lg font-bold text-charcoal">Going Further</h3>
                </div>
                <p className="text-base leading-relaxed text-charcoal-light">{lesson.extension}</p>
              </div>
            )}

            {/* Resources */}
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="mt-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xl">🔗</span>
                  <h3 className="font-display text-lg font-bold text-charcoal">Helpful Resources</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {lesson.resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 rounded-xl border border-charcoal/10 bg-white p-4 shadow-sm transition-all hover:border-terracotta/30 hover:shadow-md"
                    >
                      <span className="text-sm font-bold text-terracotta group-hover:underline">{r.title}</span>
                      <span className="text-xs leading-relaxed text-charcoal-light">{r.description}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* The Spark (Learning Guide) */}
          {learningGuide && (
            <div className="mb-8 rounded-xl border-2 border-golden/30 bg-golden/10 p-5 print:break-inside-avoid">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-golden text-lg">
                  ✨
                </span>
                <h2 className="font-display text-xl font-bold text-charcoal">The Spark</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/60">Concept</h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-charcoal">
                    {learningGuide.concept}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/60">Activity</h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-charcoal">
                    {learningGuide.activation}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/60">Check</h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-charcoal">
                    {learningGuide.check}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Activities */}
          <div className="grid grid-cols-2 gap-4">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
