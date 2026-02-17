import type { ReactNode } from "react";

const strandColors: Record<string, string> = {
  Number: "bg-terracotta/15 text-terracotta-dark",
  Algebra: "bg-sage/15 text-charcoal",
  Measurement: "bg-golden/20 text-terracotta-dark",
  Space: "bg-charcoal/10 text-charcoal",
  Statistics: "bg-terracotta-light/20 text-terracotta-dark",
};

interface WorksheetPageProps {
  title: string;
  strand: string;
  children: ReactNode;
}

export default function WorksheetPage({ title, strand, children }: WorksheetPageProps) {
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

      {/* Activities */}
      <div className="space-y-7">
        {children}
      </div>
    </div>
  );
}
