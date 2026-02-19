import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Printable Mathematics Worksheets — Foundation to Year 10",
  description:
    "Free printable Mathematics worksheets aligned to the Australian Curriculum V9. Number, Algebra, Measurement, Space and Statistics for Foundation to Year 10.",
  keywords: [
    "free maths worksheets Australia",
    "printable mathematics worksheets",
    "Australian Curriculum maths worksheets",
    "homeschool maths",
    "Foundation maths worksheets",
    "Year 10 maths worksheets",
  ],
  alternates: { canonical: "/worksheets/mathematics" },
  openGraph: {
    title: "Free Printable Mathematics Worksheets — Foundation to Year 10",
    description:
      "Printable Mathematics worksheets for every year level, aligned to the Australian Curriculum V9.",
    url: "/worksheets/mathematics",
  },
};

const yearLevels = [
  {
    label: "Foundation",
    href: "/worksheets/mathematics/foundation",
    description: "Numbers 0–20, shapes, patterns, sorting and simple measurement.",
  },
  {
    label: "Year 1",
    href: "/worksheets/mathematics/year-1",
    description: "Numbers to 120, place value, skip counting, addition and subtraction.",
  },
  {
    label: "Year 2",
    href: "/worksheets/mathematics/year-2",
    description: "Numbers to 1,000, place value, addition & subtraction facts, times tables for twos, money, fractions and time.",
  },
  {
    label: "Year 3",
    href: "/worksheets/mathematics/year-3",
    description: "Numbers beyond 10,000, times tables (2–5, 10), fractions, metric units, angles, 3D objects and probability.",
  },
  {
    label: "Year 4",
    href: "/worksheets/mathematics/year-4",
    description: "Decimals, equivalent fractions, perimeter & area, symmetry, data displays and chance experiments.",
  },
  {
    label: "Year 5",
    href: "/worksheets/mathematics/year-5",
    description: "Factors & multiples, percentages, fraction operations, angles in degrees, nets, transformations and line graphs.",
  },
  {
    label: "Year 6",
    href: "/worksheets/mathematics/year-6",
    description: "Integers, prime numbers, decimal operations, area formulas, Cartesian plane, tessellations and probability.",
  },
  {
    label: "Year 10",
    href: "/worksheets/mathematics/year-10",
    description: "Logarithms, trigonometry, simultaneous equations, networks, probability and statistics.",
  },
];

export default function MathematicsWorksheetsPage() {
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
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-terracotta-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              Mathematics
            </span>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
              Choose your{" "}
              <span className="relative">
                <span className="relative z-10">year level</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/25 sm:bottom-2 sm:h-4" />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg">
              Colourful, curriculum-aligned maths worksheets ready to print.
              Select a year level below to browse available worksheets.
            </p>
          </div>
        </div>
      </section>

      {/* Year level cards */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {yearLevels.map((level) => (
              <Link
                key={level.href}
                href={level.href}
                className="group rounded-2xl border border-charcoal/[0.06] bg-warm-white p-6 transition-all duration-200 hover:border-charcoal/15 hover:shadow-md"
              >
                <h2 className="font-display text-xl font-semibold text-charcoal group-hover:text-terracotta">
                  {level.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  {level.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta">
                  Browse worksheets
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
