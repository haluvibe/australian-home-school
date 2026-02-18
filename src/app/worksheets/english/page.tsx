import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "English Worksheets — Australian Home Schooling",
  description:
    "Free printable English worksheets aligned to the Australian Curriculum. Choose your year level to get started.",
};

const yearLevels = [
  {
    label: "Foundation",
    href: "/worksheets/english/foundation",
    description: "Rhyme, beginning sounds, letter recognition, CVC words, syllables, vocabulary, story retelling and early writing.",
  },
  {
    label: "Year 1",
    href: "/worksheets/english/year-1",
    description: "Blends and digraphs, sight words, sentence punctuation, reading comprehension, creative writing, speaking and listening.",
  },
  {
    label: "Year 2",
    href: "/worksheets/english/year-2",
    description: "Long vowel patterns, word endings, nouns/verbs/adjectives, joining words, main idea, and short story writing.",
  },
  {
    label: "Year 3",
    href: "/worksheets/english/year-3",
    description: "Prefixes and suffixes, expanded noun groups, apostrophes, making inferences, recounts, and commas in lists.",
  },
  {
    label: "Year 4",
    href: "/worksheets/english/year-4",
    description: "Synonyms and antonyms, complex sentences, speech marks, pronoun agreement, fact vs opinion, and persuasive writing.",
  },
  {
    label: "Year 5",
    href: "/worksheets/english/year-5",
    description: "Figurative language, verb tenses, relative clauses, inferencing, media literacy, expository writing, and persuasive arguments.",
  },
  {
    label: "Year 6",
    href: "/worksheets/english/year-6",
    description: "Connotation, modal verbs, passive voice, persuasive essays, author's craft, theme analysis, and research reports.",
  },
  {
    label: "Year 7",
    href: "/worksheets/english/year-7",
    description: "Register, complex sentences, analytical paragraphs (TEEL/PEEL), poetry analysis, visual literacy, and cohesive devices.",
  },
  {
    label: "Year 8",
    href: "/worksheets/english/year-8",
    description: "How texts position readers, symbolism, intertextuality, syntax for effect, analytical essays, and comparative analysis.",
  },
  {
    label: "Year 9",
    href: "/worksheets/english/year-9",
    description: "Critical literacy, rhetorical devices, multimodal analysis, Australian literature, reflective writing, and formal presentations.",
  },
  {
    label: "Year 10",
    href: "/worksheets/english/year-10",
    description: "Ideology and representation, close reading, comparative text analysis, extended essay writing, research synthesis, and grammar for effect.",
  },
];

export default function EnglishWorksheetsPage() {
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
            <span className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-charcoal">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              English
            </span>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
              Choose your{" "}
              <span className="relative">
                <span className="relative z-10">year level</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/25 sm:bottom-2 sm:h-4" />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg">
              Colourful, curriculum-aligned English worksheets ready to print.
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
