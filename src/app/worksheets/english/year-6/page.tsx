import type { Metadata } from "next";
import Link from "next/link";
import { year6EnglishWorksheets } from "@/lib/worksheet-data-english-year6";

export const metadata: Metadata = {
  title: "Year 6 English Worksheets",
  description:
    "Free printable Year 6 English worksheets aligned to the Australian Curriculum V9. Covering phonics, reading, writing, grammar and literature.",
  keywords: ["Year 6 english worksheets", "Year 6 english Australia", "homeschool Year 6 english", "Australian Curriculum Year 6"],
  alternates: { canonical: "/worksheets/english/year-6" },
  openGraph: {
    title: "Year 6 English Worksheets | Australian Home Schooling",
    description: "Free printable Year 6 English worksheets covering phonics, reading, writing, grammar and literature.",
    url: "/worksheets/english/year-6",
  },
};

const strandColors: Record<string, string> = {
  Language: "bg-sage/10 text-charcoal border-sage/20",
  Literature: "bg-terracotta/10 text-terracotta-dark border-terracotta/20",
  Literacy: "bg-golden/15 text-terracotta-dark border-golden/20",
};

const strandIcons: Record<string, string> = {
  Language: "💬",
  Literature: "📖",
  Literacy: "✍️",
};

export default function Year6EnglishWorksheetLanding() {
  const grouped = year6EnglishWorksheets.reduce<Record<string, typeof year6EnglishWorksheets>>(
    (acc, ws) => {
      if (!acc[ws.strand]) acc[ws.strand] = [];
      acc[ws.strand].push(ws);
      return acc;
    },
    {}
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -right-20 top-10 h-[350px] w-[350px] rounded-full bg-sage/[0.05]" />
          <div className="animate-float-reverse absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-terracotta/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="max-w-3xl">
            <Link
              href="/curriculum?subject=english"
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-light transition-colors hover:text-charcoal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Curriculum
            </Link>

            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-terracotta-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              Year 6
            </span>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
              Printable{" "}
              <span className="relative">
                <span className="relative z-10">English Worksheets</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/25 sm:bottom-2 sm:h-4" />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg">
              Collaborative, curriculum-aligned worksheets for Year 6 English.
              Each worksheet includes a full parent-guided lesson, activities and real online resources.
            </p>
          </div>
        </div>
      </section>

      {/* Worksheet cards */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="space-y-10">
            {Object.entries(grouped).map(([strand, worksheets]) => (
              <div key={strand}>
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xl">{strandIcons[strand] || "\u{1F4DD}"}</span>
                  <h2 className="font-display text-2xl font-semibold text-charcoal">
                    {strand}
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {worksheets.map((ws) => (
                    <Link
                      key={ws.slug}
                      href={`/worksheets/english/year-6/${ws.slug}`}
                      className="group rounded-2xl border border-charcoal/[0.06] bg-warm-white p-5 transition-all duration-200 hover:border-charcoal/15 hover:shadow-md"
                    >
                      <span
                        className={`inline-flex rounded-md px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${strandColors[ws.strand] || "bg-charcoal/10 text-charcoal"}`}
                      >
                        {ws.strand}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-semibold text-charcoal group-hover:text-terracotta">
                        {ws.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal-light">
                        {ws.description}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-terracotta">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 6 2 18 2 18 9" />
                          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                          <rect x="6" y="14" width="12" height="8" />
                        </svg>
                        {ws.activities.length} activities
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
