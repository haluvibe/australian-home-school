"use client";

import { useState, useCallback } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type YearLevel =
  | "Foundation"
  | "Year 1"
  | "Year 2"
  | "Year 3"
  | "Year 4"
  | "Year 5"
  | "Year 6"
  | "Year 7"
  | "Year 8"
  | "Year 9"
  | "Year 10";

interface Session {
  sessionNumber: number;
  strand: string;
  topic: string;
  type: "lesson" | "revision" | "hands-on";
}

interface Week {
  weekNumber: number;
  sessions: Session[];
}

// ── Curriculum data ───────────────────────────────────────────────────────────

const STRANDS_BY_YEAR: Record<YearLevel, string[]> = {
  Foundation: ["Number", "Measurement", "Space", "Statistics"],
  "Year 1": ["Number", "Algebra", "Measurement", "Space", "Statistics"],
  "Year 2": ["Number", "Algebra", "Measurement", "Space", "Statistics"],
  "Year 3": ["Number", "Algebra", "Measurement", "Space", "Statistics"],
  "Year 4": ["Number", "Algebra", "Measurement", "Space", "Statistics"],
  "Year 5": ["Number", "Algebra", "Measurement", "Space", "Statistics", "Probability"],
  "Year 6": ["Number", "Algebra", "Measurement", "Space", "Statistics", "Probability"],
  "Year 7": ["Number", "Algebra", "Measurement", "Space", "Statistics", "Probability"],
  "Year 8": ["Number", "Algebra", "Measurement", "Space", "Statistics", "Probability"],
  "Year 9": ["Number", "Algebra", "Measurement", "Space", "Statistics", "Probability"],
  "Year 10": ["Number", "Algebra", "Measurement", "Space", "Statistics", "Probability"],
};

const TOPICS_BY_STRAND: Record<string, Record<YearLevel, string[]>> = {
  Number: {
    Foundation: ["Counting to 20", "Subitising", "Comparing Groups", "Number Names", "Ordering Numbers"],
    "Year 1": ["Place Value to 100", "Addition Strategies", "Subtraction Strategies", "Skip Counting", "Half & Quarter"],
    "Year 2": ["Place Value to 1000", "Addition & Subtraction", "Multiplication Introduction", "Division Introduction", "Fractions"],
    "Year 3": ["Place Value to 10 000", "Mental Strategies", "Multiplication Facts", "Division Facts", "Fractions & Decimals"],
    "Year 4": ["Place Value to 100 000", "Multiplication", "Division", "Fractions", "Decimals to Hundredths"],
    "Year 5": ["Place Value to Millions", "Multiplication Algorithms", "Division Algorithms", "Fractions & Percentages", "Decimals"],
    "Year 6": ["Integers", "Prime & Composite Numbers", "Fractions, Decimals & Percentages", "Rates & Ratios", "Order of Operations"],
    "Year 7": ["Integers & Number Lines", "Fractions Operations", "Percentages", "Ratio & Rates", "Index Notation"],
    "Year 8": ["Real Numbers", "Percentages & Finance", "Index Laws", "Scientific Notation", "Surds Introduction"],
    "Year 9": ["Number Systems", "Surds", "Financial Mathematics", "Proportional Reasoning", "Index Laws"],
    "Year 10": ["Number & Proof", "Financial Mathematics", "Logarithms", "Surds & Irrationals", "Complex Expressions"],
  },
  Algebra: {
    Foundation: [],
    "Year 1": ["Repeating Patterns", "Number Patterns", "Growing Patterns", "Pattern Rules", "Odd & Even"],
    "Year 2": ["Number Patterns", "Skip-count Patterns", "Symbol Equations", "Growing Patterns", "Input-Output Tables"],
    "Year 3": ["Number Patterns", "Variables & Rules", "Equations", "Tables of Values", "Function Machines"],
    "Year 4": ["Number Sentences", "Variables", "Patterns & Rules", "Equations with Unknowns", "Graphing Patterns"],
    "Year 5": ["Algebraic Thinking", "Variables & Expressions", "Number Sentences", "Sequences & Rules", "Graphing Linear Patterns"],
    "Year 6": ["Variables & Expressions", "Equations", "Graphing on Number Plane", "Sequences", "Formulas"],
    "Year 7": ["Algebraic Expressions", "Linear Equations", "Graphing Lines", "Sequences", "Linear Relationships"],
    "Year 8": ["Algebraic Techniques", "Linear Equations", "Simultaneous Equations", "Non-linear Relationships", "Factorisation"],
    "Year 9": ["Quadratic Expressions", "Quadratic Equations", "Linear & Simultaneous", "Non-linear Graphs", "Polynomials"],
    "Year 10": ["Quadratics", "Functions & Graphs", "Polynomials", "Exponential Functions", "Logarithmic Functions"],
  },
  Measurement: {
    Foundation: ["Length Comparison", "Mass Comparison", "Capacity", "Time: Day & Night", "Direct Comparison"],
    "Year 1": ["Informal Length", "Informal Mass", "Capacity & Volume", "Days & Months", "Informal Area"],
    "Year 2": ["Centimetres & Metres", "Kilograms & Grams", "Litres & Millilitres", "Telling Time", "Area with Tiles"],
    "Year 3": ["Metres & Kilometres", "Mass with Scales", "Volume & Capacity", "Time: Minutes & Hours", "Perimeter"],
    "Year 4": ["Formal Units", "Area of Rectangles", "Perimeter", "Time: am & pm", "Volume of Rectangular Prisms"],
    "Year 5": ["Area & Perimeter", "Volume & Capacity", "Time & Duration", "Metric Conversions", "Mass"],
    "Year 6": ["Area of Composite Shapes", "Volume", "Time Zones", "Metric Units", "Scale & Maps"],
    "Year 7": ["Perimeter & Area", "Volume & Capacity", "Surface Area", "Time & Duration", "Measurement Precision"],
    "Year 8": ["Area & Perimeter Review", "Surface Area", "Volume of Prisms", "Pythagoras Theorem", "Trigonometry Introduction"],
    "Year 9": ["Pythagoras Theorem", "Trigonometry", "Area of Composite Figures", "Volume of Complex Solids", "Rates"],
    "Year 10": ["Trigonometry", "Circle Geometry", "Surface Area & Volume", "Rates of Change", "Applications"],
  },
  Space: {
    Foundation: ["2D Shapes", "3D Objects", "Position & Location", "Sorting Shapes", "Shape Properties"],
    "Year 1": ["2D Shape Names", "3D Object Names", "Position Language", "Shape Puzzles", "Symmetry"],
    "Year 2": ["Shape Properties", "3D Objects", "Maps & Grids", "Angles Introduction", "Line Symmetry"],
    "Year 3": ["Quadrilaterals", "Prisms & Pyramids", "Grid Coordinates", "Angles", "Symmetry & Rotation"],
    "Year 4": ["Symmetry & Transformation", "Prisms & Pyramids", "Grid Maps", "Angles: Types", "Lines & Angles"],
    "Year 5": ["Transformations", "3D Objects & Nets", "Coordinates", "Angles in Polygons", "Scale Drawings"],
    "Year 6": ["Geometric Reasoning", "Cartesian Plane", "Transformations", "Nets of 3D Shapes", "Angles"],
    "Year 7": ["Angles & Lines", "Triangles & Quadrilaterals", "Cartesian Plane", "Geometric Reasoning", "Transformations"],
    "Year 8": ["Congruence & Similarity", "Geometric Proof", "Cartesian Plane", "Circle Properties", "Transformations"],
    "Year 9": ["Geometric Proof", "Similar Figures", "Circle Theorems", "Coordinate Geometry", "Vectors Introduction"],
    "Year 10": ["Geometric Proof", "Circle Theorems", "Vectors", "Coordinate Geometry", "Conics Introduction"],
  },
  Statistics: {
    Foundation: ["Sorting & Classifying", "Data Collection", "Picture Graphs", "Yes/No Questions", "Tallying"],
    "Year 1": ["Data Collection", "Picture Graphs", "Tally Charts", "Asking Questions", "Interpreting Data"],
    "Year 2": ["Surveys", "Column Graphs", "Picture Graphs", "Interpreting Graphs", "Data Collection"],
    "Year 3": ["Data Investigation", "Column Graphs", "Dot Plots", "Tables", "Interpreting Data"],
    "Year 4": ["Statistical Questions", "Column Graphs", "Line Plots", "Data Collection Methods", "Interpreting Results"],
    "Year 5": ["Mean, Median, Mode", "Stem & Leaf Plots", "Scatter Plots Introduction", "Interpreting Statistics", "Data Investigation"],
    "Year 6": ["Mean & Variation", "Column & Bar Graphs", "Line Graphs", "Interpreting Statistics", "Sampling"],
    "Year 7": ["Data Collection", "Dot Plots & Stem-Leaf", "Mean, Median, Mode, Range", "Comparing Datasets", "Interpreting Statistics"],
    "Year 8": ["Sampling Methods", "Histograms", "Box Plots", "Scatter Plots", "Statistical Inference"],
    "Year 9": ["Statistical Investigation", "Bivariate Data", "Scatter Plots & Correlation", "Box Plots", "Standard Deviation"],
    "Year 10": ["Statistical Analysis", "Bivariate Data", "Correlation & Causation", "Normal Distribution", "Inference"],
  },
  Probability: {
    Foundation: [],
    "Year 1": [],
    "Year 2": [],
    "Year 3": [],
    "Year 4": [],
    "Year 5": ["Chance Experiments", "Probability Language", "Simple Probability", "Theoretical vs Experimental", "Equally Likely Outcomes"],
    "Year 6": ["Probability Scale", "Complementary Events", "Experimental Probability", "Sample Space", "Probability of Events"],
    "Year 7": ["Probability Language", "Sample Space", "Complementary Events", "Theoretical Probability", "Frequency Tables"],
    "Year 8": ["Two-step Experiments", "Tree Diagrams", "Venn Diagrams", "Conditional Probability Intro", "Expected Value"],
    "Year 9": ["Multi-step Experiments", "Conditional Probability", "Two-way Tables", "Independent Events", "Simulations"],
    "Year 10": ["Conditional Probability", "Probability Theorems", "Permutations & Combinations", "Binomial Probability", "Applications"],
  },
};

const HANDS_ON_ACTIVITIES: Record<YearLevel, string[]> = {
  Foundation: ["Counting with Blocks", "Shape Hunt", "Measurement Exploration", "Pattern Making", "Number Games"],
  "Year 1": ["Number Line Games", "Shape Sorting", "Measurement with Rulers", "Pattern Blocks", "Counting Games"],
  "Year 2": ["Skip Counting Games", "Fraction Folding", "Measurement Activities", "Shape Art", "Money Games"],
  "Year 3": ["Multiplication Arrays", "Fraction Strips", "Area Tiles", "Geometry Constructions", "Data Collection"],
  "Year 4": ["Area & Perimeter Games", "Fraction Activities", "3D Model Building", "Number Investigations", "Probability Games"],
  "Year 5": ["Decimal Activities", "Statistics Project", "Ratio Exploration", "Geometry Proof", "Problem Solving"],
  "Year 6": ["Real-World Measurement", "Statistics Survey", "Ratio & Proportion", "Geometry Investigation", "Financial Maths"],
  "Year 7": ["Number Investigation", "Algebraic Puzzles", "Measurement Project", "Data Analysis", "Problem Solving"],
  "Year 8": ["Pythagoras Exploration", "Statistics Project", "Probability Simulation", "Algebraic Investigation", "Real-World Problem"],
  "Year 9": ["Trigonometry Exploration", "Statistics Investigation", "Algebraic Applications", "Geometry Proof", "Financial Investigation"],
  "Year 10": ["Advanced Problem Solving", "Statistics Project", "Calculus Introduction", "Algebraic Investigation", "Real-World Modelling"],
};

// ── Schedule generation ───────────────────────────────────────────────────────

function generateSchedule(
  yearLevel: YearLevel,
  sessionsPerWeek: number,
  numberOfWeeks: number
): Week[] {
  const strands = STRANDS_BY_YEAR[yearLevel].filter(
    (s) => (TOPICS_BY_STRAND[s]?.[yearLevel] ?? []).length > 0
  );

  const topicIndices: Record<string, number> = {};
  strands.forEach((s) => (topicIndices[s] = 0));

  const handsOnTopics = HANDS_ON_ACTIVITIES[yearLevel];
  let handsOnIndex = 0;
  let sessionCounter = 0;
  let strandIndex = 0;
  let lessonsSinceRevision = 0;

  const getNextSession = (overrideType?: "revision" | "hands-on"): Session => {
    sessionCounter += 1;

    if (overrideType === "revision") {
      return {
        sessionNumber: sessionCounter,
        strand: "Revision",
        topic: "Consolidation & Review",
        type: "revision",
      };
    }

    if (overrideType === "hands-on") {
      const topic = handsOnTopics[handsOnIndex % handsOnTopics.length];
      handsOnIndex += 1;
      return {
        sessionNumber: sessionCounter,
        strand: "Exploration",
        topic,
        type: "hands-on",
      };
    }

    const strand = strands[strandIndex % strands.length];
    const topics = TOPICS_BY_STRAND[strand]?.[yearLevel] ?? [];
    const topic = topics[topicIndices[strand] % topics.length];
    topicIndices[strand] = (topicIndices[strand] + 1) % topics.length;
    strandIndex += 1;

    return {
      sessionNumber: sessionCounter,
      strand,
      topic,
      type: "lesson",
    };
  };

  const weeks: Week[] = [];

  for (let w = 0; w < numberOfWeeks; w++) {
    const sessions: Session[] = [];

    for (let d = 0; d < sessionsPerWeek; d++) {
      // Last slot of a 5-day week is always hands-on
      if (sessionsPerWeek === 5 && d === sessionsPerWeek - 1) {
        sessions.push(getNextSession("hands-on"));
        continue;
      }

      // Every 4 lessons insert a revision session
      if (lessonsSinceRevision >= 4) {
        sessions.push(getNextSession("revision"));
        lessonsSinceRevision = 0;
        continue;
      }

      sessions.push(getNextSession());
      lessonsSinceRevision += 1;
    }

    weeks.push({ weekNumber: w + 1, sessions });
  }

  return weeks;
}

// ── Style helpers ─────────────────────────────────────────────────────────────

const STRAND_STYLES: Record<string, { badge: string; dot: string }> = {
  Number:      { badge: "bg-terracotta/10 text-terracotta-dark border-terracotta/20", dot: "bg-terracotta" },
  Algebra:     { badge: "bg-sage/15 text-charcoal border-sage/25", dot: "bg-sage-dark" },
  Measurement: { badge: "bg-golden/15 text-terracotta-dark border-golden/30", dot: "bg-golden" },
  Space:       { badge: "bg-charcoal/[0.08] text-charcoal border-charcoal/15", dot: "bg-charcoal" },
  Statistics:  { badge: "bg-terracotta-light/15 text-terracotta-dark border-terracotta-light/25", dot: "bg-terracotta-light" },
  Probability: { badge: "bg-eucalyptus/10 text-eucalyptus-dark border-eucalyptus/20", dot: "bg-eucalyptus" },
  Revision:    { badge: "bg-sand/20 text-charcoal border-sand/30", dot: "bg-sand" },
  Exploration: { badge: "bg-cream-dark/40 text-charcoal border-charcoal/10", dot: "bg-charcoal/40" },
};

function getStrandStyle(strand: string) {
  return STRAND_STYLES[strand] ?? STRAND_STYLES.Exploration;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  options: { value: string | number; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-charcoal/10 bg-warm-white px-4 py-3 pr-10 text-sm font-medium text-charcoal shadow-sm transition-all focus:border-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/10 hover:border-charcoal/20"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SessionCell({ session }: { session: Session }) {
  const style = getStrandStyle(session.strand);
  const baseClasses = "flex min-h-[90px] flex-col gap-2 rounded-xl border p-3";

  if (session.type === "revision") {
    return (
      <div className={`revision-cell ${baseClasses} border-sand/40 bg-sand/10`}>
        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40">
          Session {session.sessionNumber}
        </span>
        <span className={`inline-flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${style.badge}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          {session.strand}
        </span>
        <p className="text-xs font-medium italic leading-snug text-charcoal/70">
          {session.topic}
        </p>
      </div>
    );
  }

  if (session.type === "hands-on") {
    return (
      <div className={`hands-on-cell ${baseClasses} border-charcoal/[0.06] bg-cream-dark/20`}>
        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40">
          Session {session.sessionNumber}
        </span>
        <span className={`inline-flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${style.badge}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          {session.strand}
        </span>
        <p className="text-xs font-medium leading-snug text-charcoal/70">
          {session.topic}
        </p>
      </div>
    );
  }

  return (
    <div className={`lesson-cell ${baseClasses} border-charcoal/[0.07] bg-warm-white shadow-[0_1px_3px_rgba(35,95,139,0.06)]`}>
      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40">
        Session {session.sessionNumber}
      </span>
      <span className={`inline-flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${style.badge}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
        {session.strand}
      </span>
      <p className="text-xs font-semibold leading-snug text-charcoal">
        {session.topic}
      </p>
      <p className="mt-auto text-[10px] text-charcoal/40">Lesson + Worksheet</p>
    </div>
  );
}

const LEGEND_ITEMS = [
  { label: "Number",      style: STRAND_STYLES.Number },
  { label: "Algebra",     style: STRAND_STYLES.Algebra },
  { label: "Measurement", style: STRAND_STYLES.Measurement },
  { label: "Space",       style: STRAND_STYLES.Space },
  { label: "Statistics",  style: STRAND_STYLES.Statistics },
  { label: "Probability", style: STRAND_STYLES.Probability },
  { label: "Revision",    style: STRAND_STYLES.Revision },
  { label: "Exploration", style: STRAND_STYLES.Exploration },
];

const YEAR_LEVELS: YearLevel[] = [
  "Foundation", "Year 1", "Year 2", "Year 3", "Year 4",
  "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10",
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PlannerPage() {
  const [yearLevel, setYearLevel] = useState<YearLevel>("Year 3");
  const [sessionsPerWeek, setSessionsPerWeek] = useState(3);
  const [numberOfWeeks, setNumberOfWeeks] = useState(10);
  const [schedule, setSchedule] = useState<Week[] | null>(null);

  const handleGenerate = useCallback(() => {
    setSchedule(generateSchedule(yearLevel, sessionsPerWeek, numberOfWeeks));
  }, [yearLevel, sessionsPerWeek, numberOfWeeks]);

  const totalSessions = schedule
    ? schedule.reduce((s, w) => s + w.sessions.length, 0)
    : 0;
  const lessonCount = schedule
    ? schedule.flatMap((w) => w.sessions).filter((s) => s.type === "lesson").length
    : 0;
  const revisionCount = schedule
    ? schedule.flatMap((w) => w.sessions).filter((s) => s.type === "revision").length
    : 0;

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .planner-controls,
          .planner-hero,
          .planner-legend,
          .planner-footer { display: none !important; }
          .print-header { display: block !important; }
          .planner-table-wrapper { overflow: visible !important; }
          .planner-schedule { padding: 0 !important; }
          @page { size: A4 landscape; margin: 10mm 12mm; }
          .week-row { page-break-inside: avoid; }
          .lesson-cell, .revision-cell, .hands-on-cell {
            border: 1px solid #d0d5dd !important;
            box-shadow: none !important;
          }
        }
        .print-header { display: none; }
      `}</style>

      {/* Hero */}
      <section className="planner-hero relative overflow-hidden bg-warm-white pb-8 pt-14 sm:pt-20 lg:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-sage/[0.05]" />
          <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-terracotta/[0.04]" />
          <div className="absolute left-1/2 top-1/3 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-golden/[0.04]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Planning Tool
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Weekly Maths Planner
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-charcoal/65">
            Generate a term-by-term mathematics schedule aligned to the Australian
            Curriculum V9. Adjust the year level, session count, and term length
            then print and go.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="planner-controls border-b border-charcoal/[0.06] bg-cream py-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-2xl border border-charcoal/[0.07] bg-warm-white p-6 shadow-[0_2px_16px_rgba(35,95,139,0.06)]">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-wider text-charcoal/50">
              Configure your term planner
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <SelectField
                label="Year Level"
                value={yearLevel}
                onChange={(v) => {
                  setYearLevel(v as YearLevel);
                  setSchedule(null);
                }}
                options={YEAR_LEVELS.map((y) => ({ value: y, label: y }))}
              />
              <SelectField
                label="Sessions per Week"
                value={sessionsPerWeek}
                onChange={(v) => {
                  setSessionsPerWeek(Number(v));
                  setSchedule(null);
                }}
                options={[
                  { value: 2, label: "2 days / sessions" },
                  { value: 3, label: "3 days / sessions" },
                  { value: 4, label: "4 days / sessions" },
                  { value: 5, label: "5 days / sessions (incl. hands-on)" },
                ]}
              />
              <SelectField
                label="Term Length"
                value={numberOfWeeks}
                onChange={(v) => {
                  setNumberOfWeeks(Number(v));
                  setSchedule(null);
                }}
                options={[
                  { value: 4, label: "4 weeks" },
                  { value: 8, label: "8 weeks" },
                  { value: 10, label: "10 weeks (full term)" },
                ]}
              />
            </div>
            <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-charcoal/50">
                Strands for {yearLevel}:{" "}
                <span className="font-medium text-charcoal/70">
                  {STRANDS_BY_YEAR[yearLevel].join(", ")}
                </span>
              </p>
              <button
                onClick={handleGenerate}
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream shadow-sm transition-all duration-200 hover:bg-terracotta hover:shadow-md active:scale-[0.98]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Generate Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule output */}
      {schedule && (
        <section className="planner-schedule bg-cream pb-20 pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Print-only header */}
            <div className="print-header mb-6">
              <h1 className="font-display text-2xl font-bold text-charcoal">
                {yearLevel} Mathematics Term Planner
              </h1>
              <p className="mt-1 text-sm text-charcoal/60">
                {numberOfWeeks} weeks · {sessionsPerWeek} sessions/week · Australian Curriculum V9
              </p>
            </div>

            {/* Stats */}
            <div className="planner-controls mb-6 grid grid-cols-3 gap-4">
              {[
                { label: "Total Sessions",       value: totalSessions },
                { label: "Lessons + Worksheets", value: lessonCount },
                { label: "Revision Sessions",    value: revisionCount },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-charcoal/[0.07] bg-warm-white px-5 py-4 text-center shadow-sm"
                >
                  <p className="font-display text-3xl font-semibold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="planner-legend mb-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">Legend:</span>
              {LEGEND_ITEMS.map((item) => (
                <span
                  key={item.label}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${item.style.badge}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${item.style.dot}`} />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Table */}
            <div className="planner-table-wrapper overflow-x-auto">
              <div className="min-w-[600px]">

                {/* Column headers */}
                <div
                  className="mb-2 grid gap-2"
                  style={{ gridTemplateColumns: `72px repeat(${sessionsPerWeek}, 1fr)` }}
                >
                  <div />
                  {Array.from({ length: sessionsPerWeek }, (_, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-charcoal/5 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wider text-charcoal/50"
                    >
                      {sessionsPerWeek === 5 && i === 4 ? "Free Explore" : `Day ${i + 1}`}
                    </div>
                  ))}
                </div>

                {/* Week rows */}
                <div className="flex flex-col gap-2">
                  {schedule.map((week) => (
                    <div
                      key={week.weekNumber}
                      className="week-row grid items-start gap-2"
                      style={{ gridTemplateColumns: `72px repeat(${sessionsPerWeek}, 1fr)` }}
                    >
                      <div className="flex flex-col items-center justify-center rounded-xl border border-charcoal/[0.07] bg-warm-white py-3 shadow-sm">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-charcoal/40">Week</span>
                        <span className="font-display text-2xl font-semibold text-charcoal">{week.weekNumber}</span>
                      </div>
                      {week.sessions.map((session, idx) => (
                        <SessionCell key={idx} session={session} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="planner-controls mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-charcoal/[0.07] bg-warm-white p-5 shadow-sm sm:flex-row">
              <div>
                <p className="font-semibold text-charcoal">Ready to print?</p>
                <p className="mt-0.5 text-sm text-charcoal/55">
                  Prints in A4 landscape with all controls hidden.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSchedule(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 px-5 py-2.5 text-sm font-semibold text-charcoal transition-all hover:border-charcoal/20 hover:bg-cream"
                >
                  Reset
                </button>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-terracotta-dark hover:shadow-md active:scale-[0.98]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  Print Planner
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {!schedule && (
        <section className="flex min-h-[40vh] items-center justify-center bg-cream py-20">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sage/10">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sage-dark"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="8" y1="14" x2="8.01" y2="14" />
                <line x1="12" y1="14" x2="12.01" y2="14" />
                <line x1="16" y1="14" x2="16.01" y2="14" />
                <line x1="8" y1="18" x2="8.01" y2="18" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-semibold text-charcoal">
              Your planner will appear here
            </h2>
            <p className="mt-2 text-sm text-charcoal/55">
              Select your options above and click{" "}
              <span className="font-semibold text-charcoal/80">Generate Schedule</span>.
            </p>
          </div>
        </section>
      )}

      {/* Footer note */}
      <section className="planner-footer border-t border-charcoal/5 bg-warm-white py-10">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm text-charcoal/50">
            Topics are drawn from the{" "}
            <span className="font-medium text-charcoal/70">
              Australian Curriculum V9 &mdash; Mathematics
            </span>
            . Adjust sessions to suit your child&apos;s pace. Revision sessions are
            automatically inserted every four lessons.
          </p>
        </div>
      </section>
    </>
  );
}
