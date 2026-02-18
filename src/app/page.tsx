import Link from "next/link";
import { foundationMathsWorksheets } from "@/lib/worksheet-data";
import { year1MathsWorksheets } from "@/lib/worksheet-data-year1";
import { year2MathsWorksheets } from "@/lib/worksheet-data-year2";
import { year3MathsWorksheets } from "@/lib/worksheet-data-year3";
import { year4MathsWorksheets } from "@/lib/worksheet-data-year4";
import { year5MathsWorksheets } from "@/lib/worksheet-data-year5";
import { year6MathsWorksheets } from "@/lib/worksheet-data-year6";
import { year7MathsWorksheets } from "@/lib/worksheet-data-year7";
import { year8MathsWorksheets } from "@/lib/worksheet-data-year8";
import { year9MathsWorksheets } from "@/lib/worksheet-data-year9";
import { year10MathsWorksheets } from "@/lib/worksheet-data-year10";
import WorksheetObject from "@/components/worksheets/svg/WorksheetObject";

const worksheetsByYearLevel = [foundationMathsWorksheets, year1MathsWorksheets, year2MathsWorksheets, year3MathsWorksheets, year4MathsWorksheets, year5MathsWorksheets, year6MathsWorksheets, year7MathsWorksheets, year8MathsWorksheets, year9MathsWorksheets, year10MathsWorksheets];

const totalWorksheets = worksheetsByYearLevel.reduce(
  (sum, ws) => sum + ws.length,
  0
);

const allActivities = worksheetsByYearLevel.flatMap((ws) =>
  ws.flatMap((w) => w.activities)
);
const activityTypeCount = new Set(allActivities.map((a) => a.type)).size;
const yearLevelCount = worksheetsByYearLevel.length;

const featuredSlugs = [
  "number-names-0-20",
  "repeating-patterns",
  "compare-collections",
] as const;

const featuredWorksheets = featuredSlugs.map(
  (slug) => foundationMathsWorksheets.find((w) => w.slug === slug)!
);

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] overflow-hidden bg-charcoal">
        {/* Rich layered background */}
        <div className="pointer-events-none absolute inset-0">
          {/* Bold gradient mesh */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(228,156,149,0.25) 0%, transparent 60%), radial-gradient(ellipse 80% 70% at 0% 80%, rgba(146,171,211,0.20) 0%, transparent 50%), radial-gradient(ellipse 40% 40% at 40% 60%, rgba(250,192,152,0.15) 0%, transparent 50%)",
            }}
          />
          {/* Animated floating orbs */}
          <div className="animate-drift absolute right-[10%] top-[15%] h-[350px] w-[350px] rounded-full bg-terracotta/20 blur-[100px]" />
          <div className="animate-drift-slow absolute -left-[5%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-eucalyptus/15 blur-[120px]" />
          <div className="animate-float absolute right-[40%] top-[60%] h-[200px] w-[200px] rounded-full bg-golden/20 blur-[80px]" />
          <div className="animate-float-reverse absolute left-[35%] top-[20%] h-[250px] w-[250px] rounded-full bg-eucalyptus/10 blur-[90px]" />
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(250,246,244,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Grain */}
          <div className="grain-overlay absolute inset-0 opacity-40" />
        </div>

        {/* Floating SVG objects — visible and playful */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-drift absolute right-[8%] top-[12%] opacity-20 sm:opacity-30">
            <WorksheetObject name="star" size={72} />
          </div>
          <div className="animate-float-reverse absolute left-[5%] top-[25%] opacity-15 sm:opacity-25">
            <WorksheetObject name="heart" size={56} />
          </div>
          <div className="animate-drift-slow absolute bottom-[20%] right-[25%] opacity-15 sm:opacity-20">
            <WorksheetObject name="butterfly" size={64} />
          </div>
          <div className="animate-float absolute bottom-[15%] left-[12%] opacity-15 sm:opacity-25">
            <WorksheetObject name="sun" size={80} />
          </div>
          <div className="animate-drift absolute right-[15%] top-[55%] opacity-10 sm:opacity-20">
            <WorksheetObject name="flower" size={48} />
          </div>
          <div className="animate-float-reverse absolute left-[30%] top-[8%] opacity-10 sm:opacity-15">
            <WorksheetObject name="apple" size={44} />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
          <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Left: Copy */}
            <div className="max-w-2xl lg:flex-1">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta-light">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-terracotta-light" />
                  AI-Powered. Free. No Sign-Up.
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:mt-8 sm:text-6xl md:text-7xl">
                Stop Googling what your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">kid should know.</span>
                  <span className="absolute -bottom-1 left-0 -z-0 h-4 w-full bg-terracotta/40 sm:-bottom-1 sm:h-5" />
                </span>
              </h1>

              <p className="animate-fade-up delay-200 mt-5 max-w-xl text-lg leading-relaxed text-cream/85 sm:mt-6 sm:text-xl">
                The Australian Curriculum is comprehensive &mdash; but it
                wasn&apos;t written for parents. We break it down into
                clear objectives and printable worksheets, year by year.
              </p>

              <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/curriculum"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-terracotta/30 transition-all duration-300 hover:-translate-y-1 hover:bg-terracotta-dark hover:shadow-2xl hover:shadow-terracotta/40"
                >
                  Browse the Curriculum
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10m0 0l-4-4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/worksheets/mathematics"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-8 py-4 text-sm font-semibold text-cream/90 transition-all duration-300 hover:border-cream/40 hover:bg-cream/5"
                >
                  Print a Free Worksheet
                </Link>
              </div>
            </div>

            {/* Right: Curriculum browser mock */}
            <div className="animate-fade-up delay-300 hidden lg:block lg:flex-1">
              <div className="mx-auto max-w-md">
                <div className="rounded-2xl border border-white/20 bg-white shadow-2xl shadow-black/25">
                  {/* Year level tabs */}
                  <div className="flex gap-0 overflow-hidden rounded-t-2xl border-b border-charcoal/[0.06]">
                    {["Foundation", "Year 1", "Year 2", "...", "Year 10"].map(
                      (year, i) => (
                        <div
                          key={year}
                          className={`flex-1 px-3 py-2.5 text-center text-xs font-semibold ${
                            i === 0
                              ? "bg-terracotta text-white"
                              : "bg-cream/50 text-charcoal/55"
                          }`}
                        >
                          {year}
                        </div>
                      )
                    )}
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                      Mathematics &middot; Foundation
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-lg border border-charcoal/[0.06] bg-cream/40">
                        <div className="flex items-center justify-between px-3 py-2">
                          <span className="text-sm font-semibold text-charcoal">
                            Number
                          </span>
                          <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-[11px] font-semibold text-terracotta">
                            5 worksheets
                          </span>
                        </div>
                        <div className="border-t border-charcoal/[0.06] px-3 py-2 space-y-1.5">
                          {[
                            "Name and write numbers 0\u201320",
                            "Count collections to 20",
                            "Compare which group has more or less",
                            "Split numbers into parts (number bonds)",
                          ].map((obj) => (
                            <div key={obj} className="flex items-start gap-2">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="mt-0.5 shrink-0 text-eucalyptus"
                              >
                                <path
                                  d="M4 8l3 3 5-5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="text-xs leading-relaxed text-charcoal/75">
                                {obj}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {["Algebra", "Measurement", "Space", "Statistics"].map((strand) => (
                        <div
                          key={strand}
                          className="flex items-center justify-between rounded-lg border border-charcoal/[0.06] bg-cream/40 px-3 py-2"
                        >
                          <span className="text-sm font-semibold text-charcoal">
                            {strand}
                          </span>
                          <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-[11px] font-semibold text-terracotta">
                            {strand === "Measurement" ? "3" : strand === "Space" ? "2" : "1"} worksheet{strand === "Algebra" || strand === "Statistics" ? "" : "s"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fade out gradient effects before wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #235F8B)" }} />
        {/* Organic wave bottom edge */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block h-16 w-full sm:h-20">
            <path d="M0 40C240 10 480 60 720 35C960 10 1200 55 1440 30V80H0V40Z" fill="#FAF6F4" />
          </svg>
        </div>
      </section>

      {/* ── 2. Why Level Up ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(228,156,149,0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 15% 80%, rgba(107,145,126,0.12) 0%, transparent 50%)",
            }}
          />
          {/* Visible dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #5d8371 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
              Why Level Up?
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              Teaching your kids shouldn&apos;t require a teaching degree
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group flex flex-col rounded-2xl border border-charcoal/[0.08] bg-warm-white p-6 shadow-lg shadow-charcoal/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/[0.06] sm:p-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/15 text-terracotta transition-colors duration-300 group-hover:bg-terracotta group-hover:text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                You&apos;re the parent!
                <br />
                We&apos;re just here to help.
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal-light">
                You have the passion to teach your child. We use AI to generate
                the guides, worksheets, and resources to help you do it.
              </p>
              <div className="mt-auto flex items-center gap-2.5 pt-6">
                <WorksheetObject name="book" size={32} />
                <WorksheetObject name="pencil" size={32} />
                <WorksheetObject name="sun" size={32} />
                <WorksheetObject name="star" size={32} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col rounded-2xl border border-charcoal/[0.08] bg-warm-white p-6 shadow-lg shadow-charcoal/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/[0.06] sm:p-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-eucalyptus/15 text-eucalyptus transition-colors duration-300 group-hover:bg-eucalyptus group-hover:text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                Clarity over complexity
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal-light">
                The Australian Curriculum is world-class, but it wasn&apos;t
                designed for parents. We transform educator standards into
                accessible, engaging family resources.
              </p>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <div className="flex h-10 items-center rounded-lg bg-charcoal/[0.06] px-3 text-xs font-medium text-charcoal/40 line-through">
                  ACMNA001
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-terracotta">
                  <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex h-10 items-center rounded-lg bg-terracotta/10 px-3 text-xs font-semibold text-terracotta">
                  Count to 20
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col rounded-2xl border border-charcoal/[0.08] bg-warm-white p-6 shadow-lg shadow-charcoal/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/[0.06] sm:p-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-golden/20 text-golden transition-colors duration-300 group-hover:bg-golden group-hover:text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                More signal, less noise.
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal-light">
                Guides, worksheets, and resources mapped directly to the
                Australian Curriculum V9 &mdash; so you get better outcomes,
                faster, and stay closely aligned.
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {["Number", "Algebra", "Space", "Statistics"].map((s) => (
                  <span key={s} className="rounded-full bg-golden/15 px-2.5 py-1 text-[11px] font-semibold text-golden">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Fade out gradient effects before wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #FAF6F4)" }} />
        {/* Organic wave → charcoal */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block h-16 w-full sm:h-20">
            <path d="M0 50C180 20 360 65 600 30C840 -5 1080 50 1440 25V80H0V50Z" fill="#235F8B" />
          </svg>
        </div>
      </section>

      {/* ── 3. How It Works ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="grain-overlay absolute inset-0 opacity-40" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(250,192,152,0.12) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(228,156,149,0.10) 0%, transparent 50%)",
            }}
          />
          {/* Geometric accent — large ring */}
          <div className="animate-spin-slow absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-cream/[0.04]" />
          <div className="animate-spin-slow absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-cream/[0.03]" style={{ animationDirection: "reverse" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta-light">
              How It Works
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl lg:text-5xl">
              From overwhelmed to organised in three clicks
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="group relative rounded-2xl border border-white/20 bg-white p-6 shadow-xl shadow-black/15 transition-all duration-300 hover:shadow-2xl sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/15 font-display text-xl font-bold text-terracotta">
                1
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                Pick a subject &amp; year level
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
                Choose your child&apos;s subject and year level. Foundation
                through Year 10 across Mathematics and English.
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {["Foundation", "Year 1", "Year 2", "Year 3"].map((y) => (
                  <span key={y} className="rounded-full border border-terracotta/20 bg-terracotta/10 px-2.5 py-1 text-xs font-semibold text-terracotta">
                    {y}
                  </span>
                ))}
                <span className="rounded-full border border-charcoal/10 px-2.5 py-1 text-xs font-medium text-charcoal/55">
                  +7 more
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl border border-white/20 bg-white p-6 shadow-xl shadow-black/15 transition-all duration-300 hover:shadow-2xl sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-eucalyptus/15 font-display text-xl font-bold text-eucalyptus">
                2
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                See exactly what to teach
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
                Every year level broken down by strand with plain-language
                objectives. No jargon, no guesswork.
              </p>
              <div className="mt-6 rounded-lg border border-eucalyptus/20 bg-eucalyptus/[0.08] p-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-eucalyptus">
                  Number &middot; Foundation
                </div>
                <div className="mt-1 text-sm text-charcoal/80">
                  Connect number names, numerals and quantities to at least 20
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl border border-white/20 bg-white p-6 shadow-xl shadow-black/15 transition-all duration-300 hover:shadow-2xl sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-golden/15 font-display text-xl font-bold text-golden">
                3
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">
                Print and teach
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
                Each topic links to free printable worksheets built for
                repetition and mastery. No screens, no subscriptions.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <WorksheetObject name="apple" size={28} />
                  <WorksheetObject name="apple" size={28} />
                  <WorksheetObject name="apple" size={28} />
                </div>
                <span className="text-sm text-charcoal/55">=</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-dashed border-golden/40 font-display text-lg font-semibold text-golden">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fade out gradient effects before wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #235F8B)" }} />
        {/* Organic wave → eucalyptus */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block h-16 w-full sm:h-20">
            <path d="M0 30C300 55 500 15 750 45C1000 75 1200 20 1440 40V80H0V30Z" fill="#7a9e8b" />
          </svg>
        </div>
      </section>

      {/* ── 4. Worksheet Showcase ───────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36" style={{ background: "linear-gradient(170deg, #7a9e8b 0%, #6b917e 40%, #507564 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="grain-overlay absolute inset-0 opacity-20" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 85% 20%, rgba(250,246,244,0.08) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(250,192,152,0.08) 0%, transparent 50%)",
            }}
          />
          {/* Geometric rings */}
          <div className="animate-spin-slow absolute -right-20 top-20 h-[500px] w-[500px] rounded-full border border-white/[0.05]" />
          <div className="absolute -left-10 bottom-10 h-[300px] w-[300px] rounded-full border border-white/[0.04]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Ready to Print
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {totalWorksheets} free worksheets and counting
            </h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">
              Curriculum-aligned, AI-generated, and designed for learning
              through repetition. New worksheets added regularly.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-3 divide-x divide-charcoal/[0.06] rounded-2xl border border-white/20 bg-white shadow-2xl shadow-black/20">
            {[
              { value: totalWorksheets, label: "Printable worksheets" },
              { value: activityTypeCount, label: "Activity types" },
              { value: yearLevelCount, label: "Year levels live" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 px-4 py-6 text-center sm:py-8">
                <span className="font-display text-3xl font-semibold text-terracotta sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-charcoal/80 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Featured worksheet cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {/* Card 1: Number Names */}
            <Link
              href={`/worksheets/mathematics/foundation/${featuredWorksheets[0].slug}`}
              className="group rounded-2xl border border-white/20 bg-white p-5 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-7"
            >
              <span className="inline-flex rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
                {featuredWorksheets[0].strand}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal group-hover:text-terracotta">
                {featuredWorksheets[0].title}
              </h3>
              <div className="mt-4 space-y-2">
                {[{ count: 2, label: "two" }, { count: 4, label: "four" }].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg bg-cream/60 px-3 py-2">
                    <div className="flex gap-1">
                      {Array.from({ length: row.count }).map((_, j) => (
                        <WorksheetObject key={j} name="star" size={22} />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-charcoal/65">{row.label}</span>
                  </div>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta">
                View worksheet
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            {/* Card 2: Repeating Patterns */}
            <Link
              href={`/worksheets/mathematics/foundation/${featuredWorksheets[1].slug}`}
              className="group rounded-2xl border border-white/20 bg-white p-5 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-7"
            >
              <span className="inline-flex rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
                {featuredWorksheets[1].strand}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal group-hover:text-terracotta">
                {featuredWorksheets[1].title}
              </h3>
              <div className="mt-4 rounded-lg bg-cream/60 px-3 py-3">
                <div className="flex items-center gap-1.5">
                  <WorksheetObject name="circle" size={22} />
                  <WorksheetObject name="triangle" size={22} />
                  <WorksheetObject name="circle" size={22} />
                  <WorksheetObject name="triangle" size={22} />
                  <div className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-dashed border-charcoal/25 text-xs text-charcoal/45">?</div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-dashed border-charcoal/25 text-xs text-charcoal/45">?</div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <WorksheetObject name="heart" size={22} />
                  <WorksheetObject name="heart" size={22} />
                  <WorksheetObject name="star" size={22} />
                  <WorksheetObject name="heart" size={22} />
                  <WorksheetObject name="heart" size={22} />
                  <div className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-dashed border-charcoal/25 text-xs text-charcoal/45">?</div>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta">
                View worksheet
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            {/* Card 3: Compare Collections */}
            <Link
              href={`/worksheets/mathematics/foundation/${featuredWorksheets[2].slug}`}
              className="group rounded-2xl border border-white/20 bg-white p-5 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-7"
            >
              <span className="inline-flex rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
                {featuredWorksheets[2].strand}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal group-hover:text-terracotta">
                {featuredWorksheets[2].title}
              </h3>
              <div className="mt-4 rounded-lg bg-cream/60 px-3 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-1">
                      <WorksheetObject name="fish" size={20} />
                      <WorksheetObject name="fish" size={20} />
                      <WorksheetObject name="fish" size={20} />
                    </div>
                    <span className="text-xs font-medium text-charcoal/65">3</span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-charcoal/25 text-sm font-semibold text-charcoal/45">?</div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-1">
                      <WorksheetObject name="fish" size={20} />
                      <WorksheetObject name="fish" size={20} />
                      <WorksheetObject name="fish" size={20} />
                      <WorksheetObject name="fish" size={20} />
                      <WorksheetObject name="fish" size={20} />
                    </div>
                    <span className="text-xs font-medium text-charcoal/65">5</span>
                  </div>
                </div>
                <div className="mt-1 flex justify-center gap-3 text-xs text-charcoal/55">
                  <span>more</span>
                  <span>less</span>
                  <span>equal</span>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta">
                View worksheet
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/worksheets/mathematics"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-terracotta/20 transition-all duration-300 hover:-translate-y-1 hover:bg-terracotta-dark hover:shadow-xl hover:shadow-terracotta/30"
            >
              Browse All Worksheets
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Fade out gradient effects before wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #507564)" }} />
        {/* Organic wave → charcoal */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block h-16 w-full sm:h-20">
            <path d="M0 45C200 15 450 60 720 25C990 -10 1250 50 1440 35V80H0V45Z" fill="#235F8B" />
          </svg>
        </div>
      </section>

      {/* ── 5. Curriculum Preview ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="grain-overlay absolute inset-0 opacity-50" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(228,156,149,0.18) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 0% 100%, rgba(146,171,211,0.10) 0%, transparent 40%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(250,192,152,0.08) 0%, transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #FAF6F4 0.8px, transparent 0.8px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Geometric accent rings */}
          <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full border border-cream/[0.04]" />
          <div className="absolute -right-20 bottom-1/4 h-[300px] w-[300px] rounded-full border border-terracotta/[0.06]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-terracotta-light">
              What&apos;s Inside
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl lg:text-5xl">
              Mathematics and English.<br className="sm:hidden" />{" "}Foundation to Year 10.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/90 sm:text-xl">
              Australia&apos;s first home schooling resource built entirely with AI.
              <br />
              Plain-English curriculum guides, printable worksheets, and resources for every year level.
              <br />
              All free.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {[
              {
                subject: "Mathematics",
                href: "/curriculum?subject=mathematics",
                strands: ["Number", "Algebra", "Measurement", "Space", "Statistics"],
                accent: "terracotta",
              },
              {
                subject: "English",
                href: "/curriculum?subject=english",
                strands: ["Language", "Literature", "Literacy"],
                accent: "sage",
              },
            ].map((card) => (
              <Link
                key={card.subject}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white p-6 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-8 lg:p-10"
              >
                <h3 className="relative font-display text-3xl font-semibold text-charcoal">
                  {card.subject}
                </h3>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {card.strands.map((s) => (
                    <span key={s} className="rounded-full border border-eucalyptus/20 bg-eucalyptus/10 px-3 py-1.5 text-xs font-semibold text-eucalyptus-dark">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="relative mt-5 flex items-center justify-between">
                  <p className="text-sm text-charcoal/60">
                    Foundation &ndash; Year 10
                  </p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-eucalyptus/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-eucalyptus"
                  >
                    <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Fade out gradient effects before wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #235F8B)" }} />
        {/* Organic wave → cream */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block h-16 w-full sm:h-20">
            <path d="M0 35C160 60 400 10 680 45C960 80 1200 15 1440 40V80H0V35Z" fill="#FAF6F4" />
          </svg>
        </div>
      </section>

      {/* ── 6. CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          {/* Bold central gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(228,156,149,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 30% 30%, rgba(107,145,126,0.12) 0%, transparent 40%), radial-gradient(ellipse 40% 40% at 70% 70%, rgba(250,192,152,0.12) 0%, transparent 40%)",
            }}
          />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #5d8371 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
            Start Today
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Australia&apos;s first home schooling resource built entirely with AI.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-charcoal-light sm:mt-6 sm:text-lg">
            No accounts. No subscriptions. No cost.
            <br />
            Just free, curriculum-aligned guides and worksheets.
            <br />
            Pick a year level and start teaching.
          </p>

          {/* Floating objects */}
          <div className="my-10 flex items-center justify-center gap-4 sm:gap-5">
            <div className="animate-float"><WorksheetObject name="butterfly" size={40} /></div>
            <div className="animate-float-reverse"><WorksheetObject name="flower" size={44} /></div>
            <div className="animate-drift"><WorksheetObject name="sun" size={48} /></div>
            <div className="animate-float"><WorksheetObject name="bird" size={44} /></div>
            <div className="animate-float-reverse"><WorksheetObject name="tree" size={40} /></div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/curriculum"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-terracotta/25 transition-all duration-300 hover:-translate-y-1 hover:bg-terracotta-dark hover:shadow-2xl hover:shadow-terracotta/35"
            >
              Browse the Curriculum
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/worksheets/mathematics/foundation"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-charcoal-light transition-colors hover:text-terracotta"
            >
              Print a Worksheet Now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
