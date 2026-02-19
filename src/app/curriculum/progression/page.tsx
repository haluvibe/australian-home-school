import type { Metadata } from "next";
import Link from "next/link";
import { subjects } from "@/lib/curriculum-data";
import type { StrandItem, StrandObjectives, YearLevelData } from "@/lib/curriculum-data";

export const metadata: Metadata = {
  title: "Maths Progression Map — Foundation to Year 10",
  description:
    "See how mathematical concepts build year by year from Foundation to Year 10. Browse every strand: Number, Algebra, Measurement, Space, Statistics and Probability.",
  keywords: [
    "maths progression",
    "mathematics scope and sequence",
    "Australian Curriculum maths",
    "homeschool maths progression",
    "Foundation to Year 10 maths",
  ],
  alternates: { canonical: "/curriculum/progression" },
  openGraph: {
    title: "Maths Progression Map — Foundation to Year 10 | AI Native School",
    description:
      "How mathematical concepts build year by year across Number, Algebra, Measurement, Space, Statistics and Probability.",
    url: "/curriculum/progression",
  },
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface PageProps {
  searchParams: Promise<{ strand?: string }>;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const ALL_STRANDS = [
  "Number",
  "Algebra",
  "Measurement",
  "Space",
  "Statistics",
  "Probability",
] as const;

type Strand = (typeof ALL_STRANDS)[number];

const STRAND_CONFIG: Record<
  Strand,
  {
    color: string;
    bg: string;
    border: string;
    pill: string;
    icon: string;
    tagline: string;
  }
> = {
  Number: {
    color: "text-terracotta-dark",
    bg: "bg-terracotta/10",
    border: "border-terracotta/25",
    pill: "bg-terracotta text-white",
    icon: "✦",
    tagline: "Place value, operations, fractions, decimals & more",
  },
  Algebra: {
    color: "text-charcoal",
    bg: "bg-sage/10",
    border: "border-sage/30",
    pill: "bg-sage text-white",
    icon: "≈",
    tagline: "Patterns, equations, functions & relationships",
  },
  Measurement: {
    color: "text-terracotta-dark",
    bg: "bg-golden/15",
    border: "border-golden/30",
    pill: "bg-golden text-charcoal",
    icon: "◈",
    tagline: "Length, area, volume, time & units",
  },
  Space: {
    color: "text-charcoal",
    bg: "bg-charcoal/[0.07]",
    border: "border-charcoal/15",
    pill: "bg-charcoal text-white",
    icon: "◇",
    tagline: "Shapes, location, transformation & reasoning",
  },
  Statistics: {
    color: "text-terracotta-dark",
    bg: "bg-terracotta-light/15",
    border: "border-terracotta-light/30",
    pill: "bg-terracotta-light text-charcoal",
    icon: "▦",
    tagline: "Data collection, displays & interpretation",
  },
  Probability: {
    color: "text-charcoal",
    bg: "bg-sage/15",
    border: "border-sage/35",
    pill: "bg-sage-dark text-white",
    icon: "◎",
    tagline: "Chance, experiments & compound events",
  },
};

const YEAR_LEVELS: string[] = [
  "Foundation",
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
];

function yearToWorksheetSlug(yearLevel: string): string | null {
  if (yearLevel === "Foundation") return "foundation";
  const match = yearLevel.match(/Year (\d+)/);
  if (!match) return null;
  return `year-${match[1]}`;
}

// ─── Data helpers ─────────────────────────────────────────────────────────────

function getKeyConceptsForStrand(
  yearData: YearLevelData,
  strand: string
): string[] {
  if (!yearData.objectives) return [];
  const strandObj = yearData.objectives.find(
    (o: StrandObjectives) => o.strand === strand
  );
  if (!strandObj) return [];

  const concepts: string[] = [];
  for (const item of strandObj.items) {
    if (concepts.length >= 3) break;
    if (typeof item === "string") {
      // Strip example suffix after " — e.g."
      const clean = item.replace(/\s*—\s*e\.g\..*$/i, "").trim();
      concepts.push(clean);
    } else {
      const si = item as StrandItem;
      concepts.push(si.description);
    }
  }
  return concepts;
}

function buildProgressionData(strand: Strand) {
  const mathSubject = subjects.find((s) => s.slug === "mathematics");
  if (!mathSubject) return [];

  return YEAR_LEVELS.map((yearLevel) => {
    const yearData = mathSubject.years.find(
      (y: YearLevelData) => y.yearLevel === yearLevel
    );
    const concepts = yearData
      ? getKeyConceptsForStrand(yearData, strand)
      : [];
    const hasStrand = yearData?.strands?.includes(strand) ?? false;

    return {
      yearLevel,
      concepts,
      hasStrand,
      worksheetSlug: yearToWorksheetSlug(yearLevel),
    };
  });
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StrandTab({
  strand,
  isActive,
  currentParams,
}: {
  strand: Strand;
  isActive: boolean;
  currentParams: URLSearchParams;
}) {
  const cfg = STRAND_CONFIG[strand];
  const params = new URLSearchParams(currentParams.toString());
  params.set("strand", strand);

  return (
    <Link
      href={`/curriculum/progression?${params.toString()}`}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
        isActive
          ? `${cfg.pill} shadow-sm`
          : "bg-warm-white text-charcoal-light border border-charcoal/10 hover:border-charcoal/25 hover:text-charcoal",
      ].join(" ")}
      prefetch={false}
    >
      <span className="font-mono text-xs opacity-70">{cfg.icon}</span>
      {strand}
    </Link>
  );
}

interface YearCellProps {
  yearLevel: string;
  concepts: string[];
  hasStrand: boolean;
  worksheetSlug: string | null;
  strand: Strand;
  isPrimary: boolean;
}

function YearCell({
  yearLevel,
  concepts,
  hasStrand,
  worksheetSlug,
  strand,
  isPrimary,
}: YearCellProps) {
  const cfg = STRAND_CONFIG[strand];
  const worksheetPath = worksheetSlug
    ? `/worksheets/mathematics/${worksheetSlug}`
    : null;

  const yearLabel =
    yearLevel === "Foundation" ? "F" : yearLevel.replace("Year ", "Y");

  const isClickable = !!(worksheetPath && hasStrand && concepts.length > 0);

  const innerCard = (
    <div
      className={[
        "group relative flex h-full flex-col rounded-2xl border p-4 transition-all duration-200",
        hasStrand && concepts.length > 0
          ? [
              cfg.bg,
              cfg.border,
              isClickable ? "hover:shadow-md hover:scale-[1.02]" : "",
            ].join(" ")
          : "bg-warm-white/60 border-charcoal/[0.06] opacity-40",
      ].join(" ")}
    >
      {/* Year badge row */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className={[
            "inline-flex items-center justify-center rounded-full text-xs font-bold",
            isPrimary
              ? "h-7 w-7 bg-terracotta/15 text-terracotta-dark"
              : "h-7 w-7 bg-charcoal/10 text-charcoal",
          ].join(" ")}
        >
          {yearLabel}
        </span>
        {isClickable && (
          <svg
            className="h-3.5 w-3.5 text-charcoal/25 transition-colors group-hover:text-charcoal/55"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 7h8M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Full year label */}
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-charcoal/45">
        {yearLevel}
      </p>

      {/* Concepts list */}
      {hasStrand && concepts.length > 0 ? (
        <ul className="flex flex-1 flex-col gap-1.5">
          {concepts.map((concept, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span
                className={`mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full opacity-55 ${
                  isPrimary ? "bg-terracotta" : "bg-charcoal"
                }`}
              />
              <span className={`text-[11px] leading-snug ${cfg.color} opacity-80`}>
                {concept}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-1 text-[11px] italic text-charcoal/30">
          {hasStrand ? "No concepts listed" : "Not in this strand"}
        </p>
      )}
    </div>
  );

  if (isClickable) {
    return (
      <Link href={worksheetPath!} className="flex h-full" prefetch={false}>
        {innerCard}
      </Link>
    );
  }

  return <div className="flex h-full">{innerCard}</div>;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ProgressionPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const rawStrand = params.strand ?? "Number";
  const activeStrand: Strand = (
    ALL_STRANDS.includes(rawStrand as Strand) ? rawStrand : "Number"
  ) as Strand;

  const progressionData = buildProgressionData(activeStrand);
  const cfg = STRAND_CONFIG[activeStrand];

  const currentSearchParams = new URLSearchParams(
    params.strand ? { strand: params.strand } : {}
  );

  const primaryData = progressionData.slice(0, 7); // Foundation–Year 6
  const secondaryData = progressionData.slice(7);  // Year 7–10

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-warm-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -right-24 top-8 h-[360px] w-[360px] rounded-full bg-sage/[0.05]" />
          <div className="animate-float-reverse absolute -left-28 bottom-0 h-[420px] w-[420px] rounded-full bg-terracotta/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-28">
          {/* Breadcrumb */}
          <Link
            href="/curriculum"
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
            Curriculum
          </Link>

          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-terracotta-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              Mathematics
            </span>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
              Strand{" "}
              <span className="relative">
                <span className="relative z-10">Progression Map</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/25 sm:bottom-2 sm:h-4" />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg">
              See how mathematical ideas build year by year — from Foundation
              through to Year 10. Choose a strand to explore its full journey
              across the curriculum.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-charcoal-light">
            <div className="flex items-center gap-2">
              <span className="font-bold text-charcoal">11</span>
              <span>year levels</span>
            </div>
            <div className="h-4 w-px bg-charcoal/10" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-charcoal">6</span>
              <span>strands</span>
            </div>
            <div className="h-4 w-px bg-charcoal/10" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-charcoal">F – 10</span>
              <span>Australian Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strand Tabs ──────────────────────────────────────────────────── */}
      <section className="sticky top-[72px] z-30 border-b border-charcoal/[0.07] bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {ALL_STRANDS.map((strand) => (
              <StrandTab
                key={strand}
                strand={strand}
                isActive={strand === activeStrand}
                currentParams={currentSearchParams}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Active Strand Header ─────────────────────────────────────────── */}
      <section className={`border-b ${cfg.border} ${cfg.bg}`}>
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl font-mono text-xl font-bold ${cfg.pill}`}
            >
              {cfg.icon}
            </span>
            <div>
              <h2 className={`font-display text-xl font-semibold ${cfg.color}`}>
                {activeStrand}
              </h2>
              <p className="text-sm text-charcoal-light">{cfg.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Progression Grid ─────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          {/* Primary Years */}
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-terracotta/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-terracotta-dark">
                Primary
              </span>
              <span className="text-sm text-charcoal/50">Foundation — Year 6</span>
            </div>

            {/* Desktop: 7-column grid */}
            <div className="hidden grid-cols-7 gap-3 lg:grid">
              {primaryData.map(({ yearLevel, concepts, hasStrand, worksheetSlug }) => (
                <YearCell
                  key={yearLevel}
                  yearLevel={yearLevel}
                  concepts={concepts}
                  hasStrand={hasStrand}
                  worksheetSlug={worksheetSlug}
                  strand={activeStrand}
                  isPrimary={true}
                />
              ))}
            </div>

            {/* Tablet: 4-column grid */}
            <div className="hidden grid-cols-4 gap-3 sm:grid lg:hidden">
              {primaryData.map(({ yearLevel, concepts, hasStrand, worksheetSlug }) => (
                <YearCell
                  key={yearLevel}
                  yearLevel={yearLevel}
                  concepts={concepts}
                  hasStrand={hasStrand}
                  worksheetSlug={worksheetSlug}
                  strand={activeStrand}
                  isPrimary={true}
                />
              ))}
            </div>

            {/* Mobile: vertical list */}
            <div className="flex flex-col gap-3 sm:hidden">
              {primaryData.map(({ yearLevel, concepts, hasStrand, worksheetSlug }) => (
                <YearCell
                  key={yearLevel}
                  yearLevel={yearLevel}
                  concepts={concepts}
                  hasStrand={hasStrand}
                  worksheetSlug={worksheetSlug}
                  strand={activeStrand}
                  isPrimary={true}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-terracotta/15 via-charcoal/8 to-charcoal/15" />
            <span className="rounded-full border border-charcoal/10 bg-warm-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-charcoal/35">
              Secondary
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-charcoal/15 via-charcoal/8 to-terracotta/15" />
          </div>

          {/* Secondary Years */}
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-charcoal/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-widest text-charcoal">
                Secondary
              </span>
              <span className="text-sm text-charcoal/50">Year 7 — Year 10</span>
            </div>

            {/* Desktop: 4-column grid */}
            <div className="hidden grid-cols-4 gap-3 lg:grid">
              {secondaryData.map(({ yearLevel, concepts, hasStrand, worksheetSlug }) => (
                <YearCell
                  key={yearLevel}
                  yearLevel={yearLevel}
                  concepts={concepts}
                  hasStrand={hasStrand}
                  worksheetSlug={worksheetSlug}
                  strand={activeStrand}
                  isPrimary={false}
                />
              ))}
            </div>

            {/* Tablet: 2-column grid */}
            <div className="hidden grid-cols-2 gap-3 sm:grid lg:hidden">
              {secondaryData.map(({ yearLevel, concepts, hasStrand, worksheetSlug }) => (
                <YearCell
                  key={yearLevel}
                  yearLevel={yearLevel}
                  concepts={concepts}
                  hasStrand={hasStrand}
                  worksheetSlug={worksheetSlug}
                  strand={activeStrand}
                  isPrimary={false}
                />
              ))}
            </div>

            {/* Mobile: vertical list */}
            <div className="flex flex-col gap-3 sm:hidden">
              {secondaryData.map(({ yearLevel, concepts, hasStrand, worksheetSlug }) => (
                <YearCell
                  key={yearLevel}
                  yearLevel={yearLevel}
                  concepts={concepts}
                  hasStrand={hasStrand}
                  worksheetSlug={worksheetSlug}
                  strand={activeStrand}
                  isPrimary={false}
                />
              ))}
            </div>
          </div>

          {/* How-to callout */}
          <div className="rounded-2xl border border-charcoal/[0.07] bg-warm-white p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-charcoal">
              How to use this map
            </h3>
            <div className="mt-4 grid gap-5 text-sm leading-relaxed text-charcoal-light sm:grid-cols-3">
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-xs font-bold text-terracotta-dark">
                  1
                </span>
                <p>
                  Choose a strand from the tabs above to see how that topic
                  evolves from Foundation to Year 10.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage/15 text-xs font-bold text-charcoal">
                  2
                </span>
                <p>
                  Each card shows 2–3 key concepts for that year. Click any
                  card to open printable worksheets for that level.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-golden/20 text-xs font-bold text-terracotta-dark">
                  3
                </span>
                <p>
                  Use the map to identify gaps, plan ahead, or find exactly
                  where your child sits in the bigger picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────────────── */}
      <section className="border-t border-charcoal/[0.07] bg-warm-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-lg font-semibold text-charcoal">
              Ready to practise?
            </p>
            <p className="mt-1 text-sm text-charcoal-light">
              Browse printable worksheets for every year level.
            </p>
          </div>
          <Link
            href="/worksheets/mathematics"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-terracotta-dark hover:shadow-md"
          >
            All Maths Worksheets
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
