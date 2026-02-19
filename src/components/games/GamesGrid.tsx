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
  {
    slug: "word-worm",
    title: "Word Worm",
    description: "Tap falling letters in the right order to spell words and grow your worm longer! Builds phonics, CVC words, and spelling confidence.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["CVC words", "Phonics", "Spelling", "Letter sounds"],
    emoji: "🪱",
    bgGradient: "from-amber-950 to-yellow-900",
  },
  {
    slug: "shape-shadows",
    title: "Shape Shadows",
    description: "Mystery shadows appear on stage — can you identify which shape is casting the shadow before it fades? Learn shape names, sides, and corners.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Shape recognition", "Geometry", "Properties of shapes"],
    emoji: "🎭",
    bgGradient: "from-violet-950 to-indigo-900",
  },
  {
    slug: "skip-count-surf",
    title: "Skip Count Surf",
    description: "Ride ocean waves by tapping the next number in skip counting sequences. Count by 2s, 5s, and 10s to surf your way to victory!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Year 1", "Year 2"],
    skills: ["Skip counting", "Number patterns", "Counting by 2s 5s 10s"],
    emoji: "🏄",
    bgGradient: "from-sky-600 to-cyan-800",
  },
  {
    slug: "pattern-pirates",
    title: "Pattern Pirates",
    description: "Decode repeating patterns to unlock pirate treasure chests! Spot the repeating unit and fill in the missing symbols to plunder gold.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Repeating patterns", "Pattern recognition", "Algebra"],
    emoji: "🏴‍☠️",
    bgGradient: "from-indigo-950 to-purple-900",
  },
  {
    slug: "critter-compare",
    title: "Critter Compare",
    description: "Count groups of Australian animals and decide which group has more, fewer, or equal. Learn greater than, less than, and equal to!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Comparing numbers", "Counting", "Greater/less than"],
    emoji: "🦘",
    bgGradient: "from-orange-700 to-amber-900",
  },
  {
    slug: "number-balloons",
    title: "Number Balloons",
    description: "Pop matching balloon pairs to connect numerals, number words, and quantities from 0 to 20. Builds number name recognition and counting confidence.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation"],
    skills: ["Number names", "Numerals 0–20", "Matching", "Counting"],
    emoji: "🎈",
    bgGradient: "from-sky-400 to-blue-600",
  },
  {
    slug: "dot-dash",
    title: "Dot Dash",
    description: "Dot patterns flash on screen — can you instantly recognise the quantity without counting one by one? Trains subitising, a key early number skill.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation"],
    skills: ["Subitising", "Quick counting", "Number sense", "Quantity recognition"],
    emoji: "⚡",
    bgGradient: "from-purple-700 to-indigo-900",
  },
  {
    slug: "measurement-kitchen",
    title: "Measurement Kitchen",
    description: "Help the chef compare heavier and lighter, longer and shorter, holds more and holds less. A hands-on measurement game with animated scales and pouring.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation"],
    skills: ["Mass", "Capacity", "Length", "Duration", "Comparing"],
    emoji: "👨‍🍳",
    bgGradient: "from-amber-600 to-orange-800",
  },
  {
    slug: "size-safari",
    title: "Size Safari",
    description: "Snap photos of the taller, shorter, longer, or heavier animal on your Australian outback safari. Direct comparison made adventurous!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation"],
    skills: ["Direct comparison", "Taller/shorter", "Longer/shorter", "Heavier/lighter"],
    emoji: "📷",
    bgGradient: "from-yellow-600 to-orange-700",
  },
  {
    slug: "clockwork-castle",
    title: "Clockwork Castle",
    description: "Help castle characters through their day by matching activities to morning, afternoon, evening, and night. The castle transforms with each time of day!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation"],
    skills: ["Time of day", "Daily routines", "Sequencing events", "Morning/afternoon/night"],
    emoji: "🏰",
    bgGradient: "from-indigo-800 to-purple-950",
  },
  {
    slug: "position-playground",
    title: "Position Playground",
    description: "Find and place objects using position words — above, below, next to, between, left, and right — in a colourful playground scene.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation"],
    skills: ["Position language", "Above/below", "Left/right", "Next to/between"],
    emoji: "🛝",
    bgGradient: "from-green-500 to-emerald-700",
  },
  {
    slug: "data-detective",
    title: "Data Detective",
    description: "Collect backyard specimens, sort them into categories, build picture graphs, and answer questions about your data. A detective adventure in statistics!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation"],
    skills: ["Data collection", "Sorting", "Picture graphs", "Comparing categories"],
    emoji: "🔍",
    bgGradient: "from-lime-600 to-green-800",
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
