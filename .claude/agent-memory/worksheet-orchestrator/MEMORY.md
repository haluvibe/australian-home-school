# Worksheet Orchestrator Memory

## Last Session: 2026-02-19
All 8 Foundation English worksheets at 100 activities each. File compiles clean (4966 lines).
All 8 Year 1 English worksheets at 100 activities each. File compiles clean (2236 lines).

## Activity Count Audit (2026-02-19)

### Mathematics Worksheets
| Year Level | Worksheets | Avg Activities | Min | Max | Status |
|---|---|---|---|---|---|
| Foundation | 12 | ~86 | 78 | 97 | Near target |
| Year 1 | 11 | ~66 | 39 | 74 | Needs expansion |
| Year 2 | 16 | ~63 | 11 | 103 | Needs expansion (data-collection=11!) |
| Year 3 | 19 | ~96 | 83 | 159 | Some over 100, some under |
| Year 4 | 23 | ~56 | 49 | 68 | Needs expansion |
| Year 5 | 23 | ~96 | 94 | 106 | Near target |
| Year 6 | 22 | ~36 | 30 | 57 | Needs major expansion |
| Year 7 | 15 | ~12 | 12 | 14 | Needs major expansion |
| Year 8 | 14 | ~13 | 12 | 13 | Needs major expansion |
| Year 9 | 13 | ~13 | 12 | 14 | Needs major expansion |
| Year 10 | 12 | ~58 | 55 | 62 | Needs expansion |

### English Worksheets
| Year Level | Worksheets | Completed | Remaining | Status |
|---|---|---|---|---|
| Foundation | 8 | 8 (ALL COMPLETE) | 0 | DONE |
| Year 1 | 8 | 8 (ALL COMPLETE) | 0 | DONE |
| Year 2 | 7 | 0 | 7 | Not started |
| Year 3 | 7 | 0 | 7 | Not started |
| Year 4 | 8 | 0 | 8 | Not started |
| Year 5 | 8 | 0 | 8 | Not started |
| Year 6 | 7 | 0 | 7 | Not started |
| Year 7 | 7 | 0 | 7 | Not started |
| Year 8 | 7 | 0 | 7 | Not started |
| Year 9 | 7 | 0 | 7 | Not started |
| Year 10 | 8 | 0 | 8 | Not started |

## Key File Paths
- Types: `src/lib/worksheet-types.ts`
- Foundation Maths: `src/lib/worksheet-data.ts`
- Year N Maths: `src/lib/worksheet-data-yearN.ts`
- Year N English: `src/lib/worksheet-data-english-yearN.ts` (foundation = "foundation")
- Landing page: `src/app/page.tsx`

## Activity Types Available
NumberTrace, CountObjects, Matching, CompareGroups, NumberBonds, Pattern, Sorting, CircleCorrect, Sequence, ShapeTrace, TallyChart, TenFrame, OpenResponse, HomeActivity, PictureGraph

## Expansion Pattern (English)
- Use `as const` type assertions for type field
- 100 activities per worksheet
- Difficulty bands: 1-20 foundational, 21-50 developing, 51-80 consolidating, 81-100 extending
- Tips at: 15, 30, 45, 60, 75, 90
- Sparks at: 20, 40, 60, 80, 100
- Mix activity types: matching, circle-correct, sorting, open-response, home-activity, sequence
- No single type > 25% of total
- parentTip on every 2nd-3rd activity

## SVG Objects (50)
star, apple, fish, heart, flower, circle, square, triangle, diamond, butterfly, cat, dog, mouse, elephant, bird, ant, giraffe, horse, snake, sun, moon, tree, pencil, cup, book, car, house, ball, teddy, clock, bucket, bed, feather, rock, banana, spoon, bottle, watermelon, grape, sphere, cube, cone, cylinder, dice-1 to dice-6
