# Game Swarm Queen - Agent Memory

## Architecture Patterns

### Game Page Pattern (Next.js 16 + Turbopack)
- Server Component pages CANNOT pass functions to Client Components (render prop pattern breaks in Next.js 16)
- Solution: Use `GamePageClient` component (`/src/components/games/GamePageClient.tsx`) that maps gameId to the correct game component internally
- Page files export metadata (server) and render `<GamePageClient gameId="slug" />`
- `GameShell` handles fullscreen, launch overlay, and exit routing

### Game Component Pattern
- Each game is a standalone `"use client"` component in `/src/components/games/`
- Props: `{ onExit?: () => void }` - called to return to games hub
- Internal screen state machine: `"intro" | "playing" | "levelComplete" | "gameOver"`
- CSS: inline `<style>` tag with component-scoped class prefixes (e.g., `ww-` for WordWorm, `ss-` for ShapeShadows)
- Font: Nunito loaded via Google Fonts import in the style block
- All games use Nunito font, dark background themes, emoji-based visuals

### GamesGrid Registry
- `/src/components/games/GamesGrid.tsx` has a `games: GameEntry[]` array
- Each entry: slug, title, description, subject, subjectColour, yearLevels, skills, emoji, bgGradient
- Mathematics games use `text-terracotta`; English games use `text-sage-dark`

## Games Catalogue (as of Feb 2026)

| Game | Slug | Subject | Year Levels | Curriculum Strand |
|------|------|---------|-------------|-------------------|
| Bubble Math Lab | bubble-math-lab | Maths | F-Y3 | Number (addition, number bonds) |
| MathStorm | math-storm | Maths | Y2-Y6 | Number (four operations) |
| Word Worm | word-worm | English | F-Y1 | Language (CVC words, phonics) |
| Shape Shadows | shape-shadows | Maths | F-Y1 | Space (shape recognition) |
| Skip Count Surf | skip-count-surf | Maths | Y1-Y2 | Number (skip counting 2s/5s/10s) |
| Pattern Pirates | pattern-pirates | Maths | F-Y1 | Algebra (repeating patterns) |
| Critter Compare | critter-compare | Maths | F-Y1 | Number (comparing collections) |

## Design Principles That Worked
- Emoji-heavy visuals work great for young learners (no custom art assets needed)
- Screen shake on wrong answers + sparkle effects on correct = satisfying feedback
- Progressive difficulty via level system with escalating parameters
- Streak/combo mechanics add excitement without being punishing
- Timer bars work well for Year 1+ but should be disabled for Foundation
- Australian theming (outback critters, surfing) adds local flavour

## Curriculum Gaps Still Needing Games
- English: Literature strand (comprehension, story elements)
- English: Year 1+ phonics (blends, digraphs)
- Maths: Measurement strand (length, mass, capacity)
- Maths: Statistics/Probability (data collection, chance)
- Maths: Year 2+ (place value, multiplication intro)
