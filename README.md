# Australian Home School

A free, AI-powered homeschooling resource platform for Australian parents. No sign-ups, no subscriptions. Built with Next.js and the official Australian Curriculum V9.

## What It Does

Translates the official Australian Curriculum V9 into plain-English, parent-friendly language and pairs it with printable, curriculum-aligned worksheets.

### Curriculum Browser

- Covers **English** and **Mathematics**, Foundation through Year 10
- Organised by strand:
  - Mathematics: Number, Algebra, Measurement, Space, Statistics
  - English: Language, Literature, Literacy
- Each objective includes a plain-English description, a real-world example, a Khan Academy link, and an optional link to a practice worksheet

### Worksheets

- 90+ printable worksheets for Mathematics (Foundation through Year 10)
- 15 activity types: NumberTrace, CountObjects, Matching, CompareGroups, NumberBonds, Pattern, Sorting, CircleCorrect, Sequence, ShapeTrace, TallyChart, TenFrame, PictureGraph, OpenResponse, HomeActivity
- Each worksheet includes a lesson plan view with a full teaching script and a learning guide with concept explanation and checkpoint questions
- Print-optimised A4 layout with PDF export

### External Resources

- Curated links to Twinkl, Teach Starter, K5 Learning, and others
- Organised by category: multi-subject, English/literacy, maths, early learning, generators

### FAQ

- State-by-state homeschool registration info
- Planning templates and guidance for parents

---

## Curriculum Data

The Australian Curriculum V9 data lives in the `curriculum/` directory:

```
curriculum/
  english/
    english-curriculum-data.json
    glossary.json
  mathematics/
    mathematics-curriculum-data.json
    glossary.json
```

---

## Project Structure

```
src/
  app/                    # Pages (App Router)
    curriculum/           # Curriculum browser
    worksheets/           # Worksheet hub and individual pages
    external-resources/   # Curated external links
    faq/                  # FAQ and registration info
  components/             # Shared components (Navbar, Footer, CurriculumYearCard, worksheets/)
  lib/                    # Data types and loaders
    curriculum-data.ts
    worksheet-types.ts
    worksheet-data.ts
curriculum/               # Australian Curriculum V9 JSON data files
```

---

## Tech Stack

- **Framework:** Next.js 16 with Turbopack, App Router, React Server Components
- **Styling:** Tailwind CSS v4 with `@theme inline` block
- **Fonts:** Fraunces (display), Outfit (body)
- **Language:** TypeScript
- **Rendering:** Static site generation (`generateStaticParams`) for all worksheet pages

### Colour Palette

`cream`, `terracotta`, `sage`, `sand`, `charcoal`, `golden`

---

## Adding a New Year Level

1. Create `src/lib/worksheet-data-yearN.ts` with the worksheet definitions
2. Import it in `src/lib/worksheet-data.ts`
3. Add the array to `worksheetsByYearLevel` in `src/app/page.tsx`

Landing page stats (total worksheets, activity types, year levels) auto-update from that array.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
