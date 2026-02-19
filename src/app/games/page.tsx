import type { Metadata } from "next";
import Link from "next/link";

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

const games = [
  {
    slug: "bubble-math-lab",
    title: "Bubble Math Lab",
    description: "Drag number bubbles together to add them, split them in half, then rescue creatures by delivering the right total. A hands-on way to build number bonds, addition facts, and mental arithmetic.",
    subject: "Mathematics",
    subjectColour: "bg-terracotta/10 text-terracotta",
    yearLevels: ["Foundation", "Year 1", "Year 2", "Year 3"],
    skills: ["Addition", "Number bonds", "Halving", "Mental arithmetic"],
    emoji: "🫧",
    bgGradient: "from-slate-900 to-slate-800",
    accentColour: "#38bdf8",
  },
];

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

      {/* Games grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/8"
              >
                {/* Preview area */}
                <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${game.bgGradient}`}>
                  <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                    {game.emoji}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Subject badge */}
                  <div className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${game.subjectColour} bg-white/90 backdrop-blur-sm`}>
                    {game.subject}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h2 className="font-display text-xl font-bold text-charcoal">{game.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal-light">{game.description}</p>
                  </div>

                  {/* Year level badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {game.yearLevels.map((yr) => (
                      <span
                        key={yr}
                        className="rounded-full border border-sand bg-sand/40 px-2.5 py-0.5 text-xs font-medium text-charcoal-light"
                      >
                        {yr}
                      </span>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {game.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-cream px-2.5 py-0.5 text-xs text-charcoal/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-terracotta/90">
                      Play Now
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming soon placeholder */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-charcoal/10 bg-white/50 p-8 text-center">
              <span className="mb-3 text-4xl opacity-30">🎲</span>
              <p className="text-sm font-medium text-charcoal/40">More games coming soon</p>
              <p className="mt-1 text-xs text-charcoal/25">Word puzzles, times tables, and more</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
