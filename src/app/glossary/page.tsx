import type { Metadata } from "next";
import Link from "next/link";
import GlossaryClient, { type GlossaryEntry } from "./GlossaryClient";
import mathsGlossaryRaw from "@/../curriculum/mathematics/glossary.json";
import englishGlossaryRaw from "@/../curriculum/english/glossary.json";

export const metadata: Metadata = {
  title: "Maths & English Glossary — Australian Home Schooling",
  description:
    "Plain-English definitions of mathematical and English terms from the Australian Curriculum.",
};

function buildEntries(
  raw: Record<string, string>,
  subject: GlossaryEntry["subject"]
): GlossaryEntry[] {
  return Object.entries(raw).map(([term, definition]) => ({
    term,
    definition,
    subject,
  }));
}

export default function GlossaryPage() {
  const entries: GlossaryEntry[] = [
    ...buildEntries(mathsGlossaryRaw as Record<string, string>, "Mathematics"),
    ...buildEntries(englishGlossaryRaw as Record<string, string>, "English"),
  ];

  // Pre-sort alphabetically so the client receives them in order
  entries.sort((a, b) => a.term.localeCompare(b.term));

  const mathsCount = entries.filter((e) => e.subject === "Mathematics").length;
  const englishCount = entries.filter((e) => e.subject === "English").length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -right-20 top-10 h-[350px] w-[350px] rounded-full bg-sage/[0.05]" />
          <div className="animate-float-reverse absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-terracotta/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-light transition-colors hover:text-charcoal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 3L5 7l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-charcoal/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-charcoal">
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal/50" />
            Reference
          </span>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
            Maths{" "}
            <span className="relative">
              <span className="relative z-10">&amp; English</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/25 sm:bottom-2 sm:h-4" />
            </span>{" "}
            Glossary
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg">
            Plain-English definitions of curriculum terms — helpful for parents
            explaining concepts to their children at home.
          </p>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-charcoal/[0.08] bg-cream px-4 py-2.5">
              <span className="font-display text-2xl font-bold text-charcoal">
                {entries.length}
              </span>
              <span className="text-sm text-charcoal-light">total terms</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-terracotta/20 bg-terracotta/5 px-4 py-2.5">
              <span className="font-display text-2xl font-bold text-terracotta-dark">
                {mathsCount}
              </span>
              <span className="text-sm text-terracotta-dark">Maths</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-sage/30 bg-sage/10 px-4 py-2.5">
              <span className="font-display text-2xl font-bold text-charcoal">
                {englishCount}
              </span>
              <span className="text-sm text-charcoal">English</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive glossary */}
      <section className="border-t border-charcoal/5 bg-cream">
        <GlossaryClient entries={entries} />
      </section>
    </>
  );
}
