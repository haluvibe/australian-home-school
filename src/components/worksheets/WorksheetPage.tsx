import type { ReactNode } from "react";

const strandColors: Record<string, string> = {
  Number: "bg-terracotta/15 text-terracotta-dark",
  Algebra: "bg-sage/15 text-charcoal",
  Measurement: "bg-golden/20 text-terracotta-dark",
  Space: "bg-charcoal/10 text-charcoal",
  Statistics: "bg-terracotta-light/20 text-terracotta-dark",
};

import type { LearningGuide } from "@/lib/worksheet-types";

// ... existing imports

interface WorksheetPageProps {
  title: string;
  strand: string;
  learningGuide?: LearningGuide;
  children: ReactNode;
}

export default function WorksheetPage({ title, strand, learningGuide, children }: WorksheetPageProps) {
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
        <div className="flex gap-6 text-base text-charcoal-light">
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
    </div>
  );
}
