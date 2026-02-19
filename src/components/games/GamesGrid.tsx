"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface GameEntry {
  slug: string;
  title: string;
  description: string;
  subject: string;
  subjectColour: string;
  yearLevels: string[];
  skills: string[];
  emoji: string;
  bgGradient: string;
}

const games: GameEntry[] = [
  {
    slug: "bubble-math-lab",
    title: "Bubble Math Lab",
    description: "Drag number bubbles together to add them, split them in half, then rescue creatures by delivering the right total. Builds number bonds, addition facts, and mental arithmetic.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation", "Year 1", "Year 2", "Year 3"],
    skills: ["Addition", "Number bonds", "Halving", "Mental arithmetic"],
    emoji: "🫧",
    bgGradient: "from-slate-900 to-slate-800",
  },
  {
    slug: "math-storm",
    title: "MathStorm: Number Squadron",
    description: "A vertical scrolling shooter where your weapons are maths operations. Blast enemies with addition, subtraction, multiplication, and division to power up and defeat boss shields.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
    skills: ["Addition", "Subtraction", "Multiplication", "Division"],
    emoji: "⚡",
    bgGradient: "from-indigo-950 to-slate-900",
  },
];

export default function GamesGrid() {
  const router = useRouter();

  const handlePlay = useCallback(async (slug: string) => {
    // Attempt fullscreen before navigating — works because we're inside a click handler
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Denied or not supported — GameShell will handle it
    }
    router.push(`/games/${slug}`);
  }, [router]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <button
          key={game.slug}
          onClick={() => handlePlay(game.slug)}
          className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/8 text-left"
        >
          {/* Preview area */}
          <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${game.bgGradient}`}>
            <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
              {game.emoji}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            {/* Subject badge */}
            <div className={`absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm ${game.subjectColour}`}>
              {game.subject}
            </div>
            {/* Fullscreen hint */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white/70 backdrop-blur-sm">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
              Fullscreen
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
                <span key={skill} className="rounded-full bg-cream px-2.5 py-0.5 text-xs text-charcoal/60">
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
        </button>
      ))}

      {/* Coming soon placeholder */}
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-charcoal/10 bg-white/50 p-8 text-center">
        <span className="mb-3 text-4xl opacity-30">🎲</span>
        <p className="text-sm font-medium text-charcoal/40">More games coming soon</p>
        <p className="mt-1 text-xs text-charcoal/25">Word puzzles, times tables, and more</p>
      </div>
    </div>
  );
}
