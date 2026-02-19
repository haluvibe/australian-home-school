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
    slug: "place-value-bakery",
    title: "Place Value Bakery",
    description: "You're a baker! Customers order numbers and you BUILD them using tens trays and individual cupcakes. Drag trays of 10 and single cupcakes onto the counter to match each order. Fast service earns bigger tips!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Year 1", "Year 2"],
    skills: ["Place value", "Tens and ones", "Number decomposition", "Mental arithmetic"],
    emoji: "🧁",
    bgGradient: "from-amber-800 to-orange-950",
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
    slug: "word-painter",
    title: "Word Painter",
    description: "Drag describing words onto objects to paint and transform a scene! Use colour, size, texture, and action words to create beautiful paintings and build sentences.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Adjectives", "Describing words", "Vocabulary", "Sentence building"],
    emoji: "\u{1F3A8}",
    bgGradient: "from-purple-900 to-fuchsia-900",
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
  {
    slug: "fair-share-farm",
    title: "Fair Share Farm",
    description: "You're the farmhand! Drag food to animal troughs to share equally. Animals react when fed — but you must be FAIR. Learn equal sharing, grouping, and remainders!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Year 1", "Year 2"],
    skills: ["Equal sharing", "Division concepts", "Remainders", "Grouping"],
    emoji: "🐮",
    bgGradient: "from-green-600 to-emerald-800",
  },
  {
    slug: "shape-sorter-factory",
    title: "Shape Sorter Factory",
    description: "Run a shape factory! Shapes roll down a conveyor belt and you must drag them into the correct sorting bins based on their properties — sides, corners, curves, and 2D vs 3D.",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Foundation", "Year 1", "Year 2"],
    skills: ["2D shapes", "3D shapes", "Shape properties", "Sorting by attributes"],
    emoji: "🏭",
    bgGradient: "from-orange-800 to-amber-950",
  },
  {
    slug: "footstep-explorer",
    title: "Footstep Explorer",
    description: "You're an explorer measuring everything you find! Drag paperclips, handspans, footsteps, and blocks end-to-end along objects to measure them. Estimate first for bonus points!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Year 1"],
    skills: ["Informal measurement", "Comparing lengths", "Estimation", "Counting units"],
    emoji: "🗺️",
    bgGradient: "from-amber-700 to-yellow-900",
  },
  {
    slug: "pet-survey",
    title: "Pet Survey",
    description: "You're a pet shop researcher! Interview customers, record their favourites on a clipboard with tally marks, then build a picture graph by dragging icons into columns. Answer data questions to earn your detective badge!",
    subject: "Mathematics",
    subjectColour: "text-terracotta",
    yearLevels: ["Year 1"],
    skills: ["Data collection", "Tally marks", "Picture graphs", "Interpreting data"],
    emoji: "📊",
    bgGradient: "from-amber-500 to-orange-700",
  },
  {
    slug: "story-scramble",
    title: "Story Scramble",
    description: "The pages of a picture book have been scattered by a mischievous wind! Drag the story scene cards back into the correct narrative order on a timeline before the wind blows again.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation"],
    skills: ["Story sequencing", "Comprehension", "Narrative order", "Retelling"],
    emoji: "📖",
    bgGradient: "from-amber-900 to-yellow-950",
  },
  {
    slug: "punctuation-patrol",
    title: "Punctuation Patrol",
    description: "You're a punctuation police officer! Sentences drive across the screen missing their punctuation. Drag the correct mark — full stop, question mark, or exclamation mark — to fix each one before it escapes!",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Year 1"],
    skills: ["Full stops", "Question marks", "Exclamation marks", "Capital letters"],
    emoji: "🚔",
    bgGradient: "from-red-800 to-blue-900",
  },
  {
    slug: "story-machine",
    title: "Story Machine",
    description: "Drag story building blocks — characters, settings, actions, and feelings — into a magical Rube Goldberg machine that clanks and whirs to produce complete sentences! Build a whole storybook across levels.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Year 1"],
    skills: ["Creative writing", "Sentence building", "Narrative structure", "Vocabulary"],
    emoji: "⚙️",
    bgGradient: "from-amber-900 to-yellow-950",
  },
  {
    slug: "crystal-ball",
    title: "Crystal Ball",
    description: "You're a fortune teller's apprentice! Read a story beginning inside a glowing crystal ball, then predict what happens next by dragging the correct ending. Fill your magic meter and unlock a bonus wizard tale!",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Year 1"],
    skills: ["Reading comprehension", "Prediction", "Inferencing", "Context clues"],
    emoji: "\u{1F52E}",
    bgGradient: "from-purple-950 to-indigo-950",
  },
  {
    slug: "syllable-samurai",
    title: "Syllable Samurai",
    description: "Fruit Ninja meets phonics! Words launch upward on wooden planks \u2014 slash them at the correct syllable break points to split them apart. Dodge bomb words, chain combos, and defeat boss words!",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1", "Year 2"],
    skills: ["Syllables", "Phonics", "Word structure", "Syllable counting"],
    emoji: "\u{1F5E1}",
    bgGradient: "from-red-950 to-orange-950",
  },
  {
    slug: "letter-land",
    title: "Letter Land",
    description: "A platformer adventure! Collect lowercase keys to free uppercase letters from golden cages. Jump across platforms, stomp scrambled-letter enemies, and defeat Word Scrambler bosses across 4 themed worlds.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Letter recognition", "Uppercase/lowercase", "Alphabet", "Phonics"],
    emoji: "🏰",
    bgGradient: "from-emerald-700 to-teal-900",
  },
  {
    slug: "sound-safari",
    title: "Sound Safari",
    description: "Your safari guide gives you instructions — read them carefully and carry them out by dragging objects around the scene! Tests instruction-following, spatial language, sequencing, and description comprehension.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Following instructions", "Spatial language", "Sequencing", "Comprehension"],
    emoji: "🌿",
    bgGradient: "from-green-800 to-emerald-950",
  },
  {
    slug: "sound-blaster",
    title: "Sound Blaster",
    description: "Load beginning letter sounds into your blaster and fire at matching objects! A platformer across 4 worlds — Forest, Ocean, Sky, and Cave — with boss fights and combo scoring.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Beginning sounds", "Letter-sound matching", "Phonics", "Alphabet"],
    emoji: "🔫",
    bgGradient: "from-indigo-900 to-slate-950",
  },
  {
    slug: "sight-word-sprint",
    title: "Sight Word Sprint",
    description: "An endless runner platformer! Your character auto-runs through Forest, City, and Space zones. Jump to collect matching sight words, duck under obstacles, grab power-ups, and survive boss zones.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Sight words", "High-frequency words", "Word recognition", "Reading fluency"],
    emoji: "\u{1F3C3}",
    bgGradient: "from-green-800 to-emerald-950",
  },
  {
    slug: "syllable-smasher",
    title: "Syllable Smasher",
    description: "Smash words at the correct syllable break points with a mighty hammer! Progress through Wood, Stone, Metal, and Crystal materials in this dojo-themed phonics game.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1", "Year 2"],
    skills: ["Syllables", "Phonics", "Word structure", "Syllable counting"],
    emoji: "🔨",
    bgGradient: "from-amber-900 to-stone-950",
  },
  {
    slug: "hop-and-rhyme",
    title: "Hop & Rhyme",
    description: "Help a happy frog hop between floating platforms to collect rhyming words! Tap the platform with the word that rhymes with the target — land on the right one to earn stars and unlock new word families.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Foundation", "Year 1"],
    skills: ["Rhyming", "CVC word families", "Phonics", "Word recognition"],
    emoji: "🐸",
    bgGradient: "from-green-700 to-emerald-900",
  },
  {
    slug: "message-quest",
    title: "Message Quest",
    description: "You're the village postal carrier! Explore a tile-based village, read instruction clues, and deliver messages to the right NPC. Clues get trickier — from names to roles, appearances, and multi-step chains.",
    subject: "English",
    subjectColour: "text-sage-dark",
    yearLevels: ["Year 1", "Year 2"],
    skills: ["Reading comprehension", "Following instructions", "Descriptive language", "Inference"],
    emoji: "📬",
    bgGradient: "from-sky-700 to-blue-900",
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
