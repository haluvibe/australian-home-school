import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maths Manipulatives Guide — AI Native School",
  description:
    "What physical tools help at each stage, and how to improvise with everyday household items.",
};

type Manipulative = {
  name: string;
  diy: string;
  howTo: string;
};

type Band = {
  id: string;
  label: string;
  years: string;
  stage: string;
  stageNote: string;
  color: string;
  badgeColor: string;
  accentBar: string;
  icon: string;
  learning: string[];
  manipulatives: Manipulative[];
};

const bands: Band[] = [
  {
    id: "foundation-2",
    label: "Foundation – Year 2",
    years: "Ages 5–8",
    stage: "Concrete Stage",
    stageNote:
      "Children at this stage learn by touching, moving, and grouping real objects. Physical materials are not optional extras — they are the lesson.",
    color: "bg-terracotta/[0.07] border-terracotta/15",
    badgeColor: "bg-terracotta/10 text-terracotta-dark border-terracotta/20",
    accentBar: "bg-terracotta",
    icon: "🧱",
    learning: [
      "Counting and number sense to 100",
      "Addition and subtraction within 20",
      "Grouping into tens and ones (place value)",
      "Simple patterns and sequences",
      "Comparing and ordering lengths, mass, and capacity",
      "2D shapes and 3D objects",
    ],
    manipulatives: [
      {
        name: "Counters",
        diy: "Buttons, dried pasta, pebbles, dried beans, or 5-cent coins",
        howTo:
          'Use to count, combine, and separate quantities. Ask your child to show you 7, then add 3 more. "How many now?" Let them physically move each counter as they count.',
      },
      {
        name: "Ten-Frame",
        diy: "Draw two rows of 5 squares on paper, or cut an egg carton down to 10 cups",
        howTo:
          'Place counters in the frame to show numbers up to 10. Encourage your child to notice that 7 is "5 and 2 more". This builds the mental image of numbers that underpins later addition.',
      },
      {
        name: "Base-10 Blocks",
        diy: "Beads for ones, bundled paddle-pop sticks (rubber-banded) for tens, a flat 10×10 grid drawn on card for hundreds",
        howTo:
          "Build numbers like 34 by laying out 3 bundles of 10 and 4 loose beads. When adding, physically trade 10 loose ones for a bundle — the concept of regrouping becomes visible and tangible.",
      },
      {
        name: "Number Line",
        diy: "A strip of masking tape along the floor, labelled with a marker",
        howTo:
          'Have your child physically walk or hop along the line to add and subtract. "Start on 4, jump forward 3 — where do you land?" The body movement reinforces the direction numbers travel.',
      },
      {
        name: "Pattern Blocks",
        diy: "Cardboard cut into triangles, squares, hexagons, and rhombuses — trace around a coin for circles",
        howTo:
          'Ask your child to make a repeating pattern (triangle, square, triangle, square…) then continue it. Introduce colours and shapes together. Discuss: "What comes next?"',
      },
      {
        name: "Balance Scales",
        diy: "A 30 cm ruler balanced on a pencil as a fulcrum, with a small plastic cup taped to each end",
        howTo:
          'Place objects in each cup to compare mass. Ask: "Which is heavier?" "How many blocks balance one apple?" This lays the groundwork for equation thinking long before algebra appears.',
      },
    ],
  },
  {
    id: "year-3-4",
    label: "Year 3 – Year 4",
    years: "Ages 8–10",
    stage: "Concrete to Pictorial",
    stageNote:
      "Children begin to represent quantities as drawings and diagrams rather than always needing physical objects. Keep materials available but begin drawing and recording alongside them.",
    color: "bg-golden/[0.07] border-golden/20",
    badgeColor: "bg-golden/15 text-terracotta-dark border-golden/25",
    accentBar: "bg-golden",
    icon: "📐",
    learning: [
      "Multiplication and division facts to 10×10",
      "Fractions: halves, quarters, thirds, eighths",
      "Place value to 10,000",
      "Area, perimeter, and length in standard units",
      "Telling time on analogue clocks",
      "Collecting and interpreting data",
    ],
    manipulatives: [
      {
        name: "Fraction Tiles",
        diy: "Fold and cut equal strips from a single sheet of A4 paper: one whole, halves, thirds, quarters, eighths",
        howTo:
          "Line up the strips to show that two quarters equal one half, or that three thirds make a whole. Ask your child to find which combination of pieces covers the whole strip exactly — fractions as comparison, not just symbols.",
      },
      {
        name: "Multiplication Arrays",
        diy: "Grid paper with stickers placed in rows, or coins lined up in neat rectangles",
        howTo:
          'Build 3 rows of 4. Count the total. Rotate the array — 4 rows of 3. "Is it the same?" Seeing that 3×4 and 4×3 give the same result is far more memorable than being told it is.',
      },
      {
        name: "Measuring Tools",
        diy: "Ruler, flexible tape measure, kitchen scales (analogue if possible), and measuring cups",
        howTo:
          "Measure real things: the kitchen table, a shoe, a litre of water. Compare estimates to actual measurements. Cook a recipe using only the measuring cups — practical maths that sticks.",
      },
      {
        name: "Analogue Clock Face",
        diy: "Print a blank clock face and attach two card hands with a split pin (paper fastener)",
        howTo:
          'Move the hands together, talking aloud: "The short hand shows the hour, the long hand shows the minutes." Practise setting times from everyday life: "Show me what the clock looks like at 7:30 in the morning."',
      },
      {
        name: "Grid / Graph Paper",
        diy: "Print free 1 cm grid paper, or rule it yourself on blank paper",
        howTo:
          "Draw rectangles and count squares inside to find area. Trace the perimeter and measure it with string, then lay the string flat and measure it. Area and perimeter become things to discover rather than formulas to memorise.",
      },
    ],
  },
  {
    id: "year-5-6",
    label: "Year 5 – Year 6",
    years: "Ages 10–12",
    stage: "Pictorial to Abstract",
    stageNote:
      "Diagrams and number lines carry more of the thinking load. Students should still sketch and draw before working with bare numbers or symbols.",
    color: "bg-sage/[0.07] border-sage/20",
    badgeColor: "bg-sage/10 text-charcoal border-sage/20",
    accentBar: "bg-sage",
    icon: "🔢",
    learning: [
      "Fractions, decimals, and percentages",
      "Negative numbers and integers",
      "Ratio and proportion",
      "Angles and geometric properties",
      "Probability as a fraction between 0 and 1",
      "Statistical displays: stem-and-leaf, column graphs, scatter plots",
    ],
    manipulatives: [
      {
        name: "Fraction–Decimal–Percentage Number Lines",
        diy: "Draw a long number line from 0 to 1 on butcher's paper; mark and label ½, 0.5, and 50% at the same point",
        howTo:
          "Plot equivalent values together so the connection is visual. Ask your child to place ¾ on the line, then name it as a decimal and percentage. The number line makes the three representations feel like the same thing seen from different angles.",
      },
      {
        name: "Protractor and Compass",
        diy: "A standard plastic protractor (under $2 at newsagents); substitute a piece of string anchored with a finger for a compass",
        howTo:
          "Measure angles in everyday life: the opening of a door, a ramp, a piece of sliced pizza. Draw triangles with a set sum of angles and check — do they always add to 180°?",
      },
      {
        name: "Playing Cards",
        diy: "A standard deck of 52 cards",
        howTo:
          "Draw two cards face-down and flip them. Before looking, discuss: how likely is it that both are red? Then test by dealing 20 pairs and recording results. Compare the experimental fraction to the theoretical one — probability in action.",
      },
      {
        name: "Data Collection Sheets",
        diy: "A blank table drawn on paper with tally marks",
        howTo:
          "Survey the household: favourite meals, number of hours slept, shoe sizes. Tally, total, and graph. Analysing data you collected yourself makes statistics purposeful and memorable.",
      },
    ],
  },
  {
    id: "year-7-8",
    label: "Year 7 – Year 8",
    years: "Ages 12–14",
    stage: "Early Abstract",
    stageNote:
      "Symbols and equations take centre stage, but drawing and visual representation remain powerful checking tools. Encourage students to sketch before they calculate.",
    color: "bg-charcoal/[0.05] border-charcoal/[0.12]",
    badgeColor: "bg-charcoal/[0.08] text-charcoal border-charcoal/[0.15]",
    accentBar: "bg-charcoal",
    icon: "🔣",
    learning: [
      "Algebra: variables, expressions, equations",
      "Linear relationships and graphing",
      "Integers, rational numbers, and real number operations",
      "Geometric proofs and constructions",
      "Pythagoras' theorem",
      "Surface area and volume",
    ],
    manipulatives: [
      {
        name: "Algebra Tiles",
        diy: "Cut card into three sizes: a large square (x²), a long rectangle (x), and a small square (1 unit). Use one colour for positives, another for negatives.",
        howTo:
          "Model expressions like 2x + 3 by laying out 2 long tiles and 3 small tiles. To solve x + 5 = 8, place the tiles and physically remove 5 unit tiles from both sides — the balance principle becomes concrete.",
      },
      {
        name: "Coordinate Plane",
        diy: "Draw a large grid on card with x and y axes; laminate if possible for repeated use with a whiteboard marker",
        howTo:
          'Plot points from a table of values, then connect them to reveal a line. Ask: "What happens to the line if we change this number?" Physical plotting before digital tools builds genuine understanding of what a graph represents.',
      },
      {
        name: "Desmos Graphing Calculator",
        diy: "Free at desmos.com or the free iOS/Android app",
        howTo:
          "Type y = 2x + 1 and observe the line. Change the 2 and watch the slope shift. Change the 1 and watch it move up or down. This immediate visual feedback makes the meaning of gradient and y-intercept intuitive.",
      },
      {
        name: "Compass and Straightedge",
        diy: "Compass from a newsagent (~$3); string with a pencil attached as an alternative",
        howTo:
          "Practise geometric constructions: bisecting an angle, drawing a perpendicular line, constructing an equilateral triangle. Each construction reinforces a geometric theorem through doing rather than reading.",
      },
    ],
  },
  {
    id: "year-9-10",
    label: "Year 9 – Year 10",
    years: "Ages 14–16",
    stage: "Abstract",
    stageNote:
      "Students work primarily with symbols, equations, and digital tools. Real-world data and technology bridge abstract maths to genuine purpose.",
    color: "bg-terracotta/[0.04] border-terracotta/[0.10]",
    badgeColor: "bg-terracotta/[0.08] text-terracotta-dark border-terracotta/[0.15]",
    accentBar: "bg-terracotta-dark",
    icon: "📊",
    learning: [
      "Quadratic equations and non-linear functions",
      "Trigonometry: sine, cosine, tangent",
      "Logarithms and exponential growth",
      "Statistics: bivariate data, lines of best fit",
      "Financial mathematics: interest, depreciation",
      "Probability: multi-step experiments, Venn diagrams",
    ],
    manipulatives: [
      {
        name: "Scientific Calculator",
        diy: "Any scientific calculator (Casio fx-82AU is the Australian standard, ~$25); or the free Desmos scientific calculator at desmos.com/scientific",
        howTo:
          "Learn the calculator as a tool for checking, not a replacement for understanding. Work a trigonometry problem by hand first, then verify with the calculator. Discuss what the answer means in context.",
      },
      {
        name: "GeoGebra",
        diy: "Free at geogebra.org or the free app on any device",
        howTo:
          "Use the geometry view to explore circle theorems, transformations, and congruence proofs interactively. Drag points and watch relationships hold — this is the manipulative for abstract geometry.",
      },
      {
        name: "Desmos for Functions",
        diy: "Free at desmos.com/calculator",
        howTo:
          "Graph y = x², then y = (x−3)², then y = (x−3)² + 2. Ask your child to describe what each change does to the parabola. Predicting, then checking, builds deep understanding of function transformations.",
      },
      {
        name: "Real-World Data Sets",
        diy: "Free from the ABS (abs.gov.au), Sports Australia, or your child's own data collection (daily steps, temperatures, spending)",
        howTo:
          "Download a simple data set, display it in a spreadsheet, and ask questions: Which year had the highest value? Is there a trend? What might the value be in 5 years? Statistics taught with real data is statistics worth learning.",
      },
    ],
  },
];

const tips = [
  {
    heading: "You don't need to buy anything expensive",
    body: "Almost every manipulative can be improvised from what you have at home. Buttons, paper, a tape measure, and a deck of cards will carry you through Foundation to Year 6. Invest only in a scientific calculator (Year 9+) and perhaps a compass and protractor.",
  },
  {
    heading: "Physical first, abstract second",
    body: "Research in mathematics education consistently shows that moving from concrete objects to pictures to symbols — in that order — leads to deeper and more durable understanding. Resist the urge to rush to the written algorithm.",
  },
  {
    heading: "Let your child handle and explore before you explain",
    body: "Hand over the materials and step back. Let your child count, arrange, break apart, and rebuild before you introduce the vocabulary or the rule. Curiosity and discovery are powerful teachers.",
  },
  {
    heading: "Make connections explicit",
    body: 'When your child moves from blocks to a written equation, say it aloud: "You put 3 bundles and 4 ones together — I\'m going to write that as 34." Naming the link between the concrete and the symbolic is the moment understanding forms.',
  },
  {
    heading: "Revisit earlier materials when introducing new ideas",
    body: "A Year 6 student meeting fractions in a new context might still benefit from folding paper. Going back to a concrete model is not regression — it is good teaching.",
  },
  {
    heading: "Keep it conversational",
    body: 'The goal is not silent seatwork. Ask questions while your child uses the materials: "Why did you put it there?" "What would happen if we added one more?" Mathematical thinking grows through spoken reasoning.',
  },
];

export default function ManipulativesGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute -right-16 top-8 h-[320px] w-[320px] rounded-full bg-sage/[0.06]" />
          <div className="animate-float-reverse absolute -left-20 bottom-0 h-[380px] w-[380px] rounded-full bg-terracotta/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="max-w-3xl">
            <Link
              href="/"
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
              Back to Home
            </Link>

            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-sage/25 bg-sage/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-charcoal">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Parent Guide
            </span>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
              Maths{" "}
              <span className="relative">
                <span className="relative z-10">Manipulatives</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-golden/30 sm:bottom-2 sm:h-4" />
              </span>{" "}
              Guide
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal-light sm:mt-6 sm:text-lg">
              Maths manipulatives are physical objects children use to make abstract
              ideas tangible. From Foundation through Year 10, the right tool at the
              right time can be the difference between a child who memorises rules and
              one who genuinely understands them — and almost all of it can be
              improvised from things you already have at home.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {bands.map((band) => (
                <a
                  key={band.id}
                  href={`#${band.id}`}
                  className="rounded-full border border-charcoal/10 bg-cream px-4 py-1.5 text-sm font-medium text-charcoal-light transition-colors hover:border-charcoal/20 hover:text-charcoal"
                >
                  {band.label}
                </a>
              ))}
              <a
                href="#tips"
                className="rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1.5 text-sm font-medium text-terracotta-dark transition-colors hover:bg-terracotta/10"
              >
                Tips for parents
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Year-level band sections */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="space-y-16">
            {bands.map((band) => (
              <div key={band.id} id={band.id} className="scroll-mt-8">
                <div className={`rounded-2xl border p-6 sm:p-8 ${band.color}`}>
                  <div className="flex flex-wrap items-start gap-4">
                    <span className="text-3xl" aria-hidden="true">
                      {band.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
                          {band.label}
                        </h2>
                        <span
                          className={`rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${band.badgeColor}`}
                        >
                          {band.years}
                        </span>
                        <span
                          className={`rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide ${band.badgeColor}`}
                        >
                          {band.stage}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-light sm:text-base">
                        {band.stageNote}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-charcoal/50">
                      What your child is learning
                    </p>
                    <ul className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                      {band.learning.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-charcoal-light"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${band.accentBar}`}
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {band.manipulatives.map((m) => (
                    <div
                      key={m.name}
                      className="rounded-2xl border border-charcoal/[0.06] bg-warm-white p-5"
                    >
                      <div
                        className={`mb-4 h-1 w-10 rounded-full ${band.accentBar}`}
                        aria-hidden="true"
                      />
                      <h3 className="font-display text-lg font-semibold text-charcoal">
                        {m.name}
                      </h3>
                      <div className="mt-3 space-y-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40">
                            DIY alternative
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-charcoal-light">
                            {m.diy}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40">
                            How to use it
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-charcoal-light">
                            {m.howTo}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for parents */}
      <section id="tips" className="scroll-mt-8 border-t border-charcoal/5 bg-warm-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-golden/25 bg-golden/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-terracotta-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-golden" />
              Tips for parents
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              Making the most of manipulatives
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal-light">
              A few principles that make a genuine difference, drawn from research in mathematics education.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, index) => (
              <div
                key={tip.heading}
                className="relative rounded-2xl border border-charcoal/[0.06] bg-cream p-6"
              >
                <span className="select-none font-display text-4xl font-bold text-charcoal/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-charcoal">
                  {tip.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-semibold text-charcoal">
                Ready to put this into practice?
              </p>
              <p className="mt-1 text-sm text-charcoal-light">
                Browse our free printable worksheets, organised by year level.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/worksheets/mathematics/foundation/"
                className="rounded-xl border border-terracotta/20 bg-terracotta/5 px-5 py-2.5 text-sm font-semibold text-terracotta-dark transition-colors hover:bg-terracotta/10"
              >
                Foundation Worksheets
              </Link>
              <Link
                href="/curriculum?subject=mathematics"
                className="rounded-xl border border-charcoal/10 bg-warm-white px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:border-charcoal/20"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
