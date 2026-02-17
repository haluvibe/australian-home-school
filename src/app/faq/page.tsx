import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Australian Home School",
  description:
    "Frequently asked questions about homeschooling in Australia. Learn about registration, curriculum requirements, state regulations, and more.",
};

const faqItems = [
  {
    question: "When and where can I register my child for homeschooling?",
    answer: (
      <>
        <p>
          In Australia, homeschooling is managed at the state and territory level — each has its own registration body, compulsory age range, and process. You register directly with your state or territory&apos;s education authority. Education is compulsory from around age 5–6 until age 17 in most states.
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">New South Wales</p>
            <p className="mt-1">Optional from age 5 (by 31 July cut-off), compulsory from age 6 until age 17. Register with the <a href="https://www.nsw.gov.au/education-and-training/home-schooling" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">NSW Department of Education</a>.</p>
          </div>
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">Victoria</p>
            <p className="mt-1">Compulsory from the year a child turns 6 until age 17. Register with the <a href="https://www2.vrqa.vic.gov.au/home-education" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">Victorian Registration and Qualifications Authority (VRQA)</a>.</p>
          </div>
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">Queensland</p>
            <p className="mt-1">Registration available from age 5.5, compulsory from age 6.5 until age 17 (compulsory participation phase from 16 to 17). Register with <a href="https://education.qld.gov.au/schools-educators/other-education/home-education" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">Queensland Home Education Unit</a>.</p>
          </div>
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">Western Australia</p>
            <p className="mt-1">Compulsory from the year a child turns 5.5 until age 17.5. Register with the <a href="https://www.education.wa.edu.au/home-schooling" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">WA Department of Education</a>.</p>
          </div>
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">South Australia</p>
            <p className="mt-1">Compulsory from age 6 until age 17. Apply via the <a href="https://www.sa.gov.au/topics/education-and-learning/schools/alternative-schooling/home-education" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">SA Department for Education</a>.</p>
          </div>
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">Tasmania</p>
            <p className="mt-1">Compulsory from age 5 until age 17 — the youngest start age in Australia. Register with the <a href="https://oer.tas.gov.au/home-education/" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">Office of the Education Registrar</a>.</p>
          </div>
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">Northern Territory</p>
            <p className="mt-1">Compulsory from age 6 until age 17. Registration is valid for one calendar year and must be renewed. Register with the <a href="https://nt.gov.au/learning/primary-and-secondary-students/home-education" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">NT Department of Education</a>.</p>
          </div>
          <div className="rounded-xl border border-charcoal/[0.06] bg-cream/50 px-5 py-3.5">
            <p className="font-semibold text-charcoal">ACT</p>
            <p className="mt-1">Compulsory from age 6 until age 17 (or completion of Year 12, whichever comes first). Register with the <a href="https://www.act.gov.au/education-and-training/find-a-school-and-enrol/home-education-home-schooling" target="_blank" rel="noopener noreferrer" className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta">ACT Education Directorate</a>.</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-charcoal-light/70">
          Note: Requirements may change. Always check directly with your state or territory&apos;s education authority for the most current information.
        </p>
      </>
    ),
  },
  {
    question: "Where can I find Australian Curriculum plan and report templates?",
    answer: (
      <>
        <p>
          Well-structured plan and report templates can make a huge difference when you&apos;re starting out — especially when it comes to meeting state registration and reporting requirements. Good templates align with the Australian Curriculum and help you map out learning areas, goals, and activities for the year, as well as document your child&apos;s progress for review.
        </p>
        <p className="mt-3">
          We recommend the plan and report templates from{" "}
          <a
            href="https://busybooksaustralia.com.au/product-category/homeschool-resources/australian-curriculum-homeschool-plan-templates/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-terracotta underline decoration-terracotta/30 hover:text-terracotta-dark hover:decoration-terracotta"
          >
            Busy Books Australia
          </a>
          . They offer a range of Australian Curriculum-aligned homeschool plan and report templates designed specifically for Australian families. These cover different year levels and make it straightforward to both plan your educational program and report on progress in a way that satisfies state authority requirements.
        </p>
        <p className="mt-3">
          Having solid plan and report templates not only helps with compliance — it also gives you confidence and structure as you shape and track your child&apos;s learning journey.
        </p>
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-warm-white pb-4 pt-16 sm:pt-20 lg:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-sage/[0.04]" />
          <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-terracotta/[0.03]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Help Centre
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal-light/85">
            Everything you need to know about homeschooling in Australia.
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="font-medium text-terracotta underline decoration-terracotta/30 transition-colors hover:text-terracotta-dark hover:decoration-terracotta">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24 pt-12 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/5 bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
            Still have questions?
          </h2>
          <p className="mt-3 text-charcoal-light/85">
            Our team is here to help you navigate your homeschooling journey.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-terracotta"
            >
              Contact Us
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 px-7 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-charcoal/20 hover:bg-warm-white"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
