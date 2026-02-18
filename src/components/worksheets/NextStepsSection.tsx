import Link from "next/link";
import type { WorksheetItem } from "@/lib/worksheet-types";

interface Props {
  nextSteps: WorksheetItem[];
  basePath: string; // e.g. "/worksheets/mathematics/year-7"
}

export default function NextStepsSection({ nextSteps, basePath }: Props) {
  if (!nextSteps.length) return null;

  const strandColors: Record<string, string> = {
    Number: "bg-terracotta/10 text-terracotta-dark border-terracotta/20",
    Algebra: "bg-sage/10 text-charcoal border-sage/20",
    Measurement: "bg-golden/15 text-terracotta-dark border-golden/20",
    Space: "bg-charcoal/[0.08] text-charcoal border-charcoal/15",
    Statistics: "bg-terracotta-light/15 text-terracotta-dark border-terracotta-light/25",
    Probability: "bg-sage/15 text-charcoal border-sage/25",
    Language: "bg-sage/10 text-charcoal border-sage/20",
    Literature: "bg-terracotta/10 text-terracotta-dark border-terracotta/20",
    Literacy: "bg-golden/15 text-terracotta-dark border-golden/20",
  };

  return (
    <section className="border-t border-charcoal/5 bg-cream print:hidden">
      <div className="mx-auto max-w-[210mm] px-5 py-8 sm:px-6">
        <h2 className="mb-4 font-display text-xl font-semibold text-charcoal">What to do next</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nextSteps.map((ws) => (
            <Link
              key={ws.slug}
              href={`${basePath}/${ws.slug}`}
              className="group rounded-xl border border-charcoal/[0.06] bg-warm-white p-4 transition-all duration-200 hover:border-charcoal/15 hover:shadow-md"
            >
              <span
                className={`inline-flex rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${strandColors[ws.strand] ?? "bg-charcoal/10 text-charcoal"}`}
              >
                {ws.strand}
              </span>
              <h3 className="mt-1.5 font-display text-base font-semibold text-charcoal group-hover:text-terracotta">
                {ws.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-charcoal-light line-clamp-2">
                {ws.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
