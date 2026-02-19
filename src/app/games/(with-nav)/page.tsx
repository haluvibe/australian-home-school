import type { Metadata } from "next";
import GamesGrid from "@/components/games/GamesGrid";

export const metadata: Metadata = {
  title: "Learning Games",
  description: "Free interactive maths and English games for Australian homeschool students, Foundation to Year 10. Play in the browser — no download needed.",
  keywords: ["homeschool games", "maths games Australia", "free learning games", "interactive maths", "Australian Curriculum games"],
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Learning Games | AI Native School",
    description: "Free interactive maths and English games for Australian homeschool students.",
    url: "/games",
  },
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="border-b border-charcoal/5 bg-warm-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 text-sm font-medium text-sage-dark">
            <span>🎮</span>
            Interactive Learning Games
          </div>
          <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Learn by Playing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-light">
            Browser-based games that make curriculum concepts click. No download, no login — just play.
          </p>
        </div>
      </section>

      {/* Games grid — client component handles fullscreen pre-request */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <GamesGrid />
        </div>
      </section>

      {/* Feedback actions */}
      <section className="border-t border-charcoal/5 bg-warm-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display mb-2 text-2xl font-bold tracking-tight text-charcoal">
            Help us make games better
          </h2>
          <p className="mb-8 text-charcoal-light">
            Got an idea? Found a bug? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://ainativeschool.featurebase.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              <span>💡</span>
              Request a Game
            </a>
            <a
              href="https://ainativeschool.featurebase.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-6 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-sand/30"
            >
              <span>🐛</span>
              Report an Issue
            </a>
            <a
              href="https://ainativeschool.featurebase.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-6 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-sand/30"
            >
              <span>✨</span>
              Suggest an Improvement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
