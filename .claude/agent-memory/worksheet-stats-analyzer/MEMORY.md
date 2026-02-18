# Worksheet Statistics Analyzer - Memory

## Latest Analysis (2026-02-19)

### Key File Locations
- **Worksheet data files**: `/Users/paulhayes/repositories/australian-home-school/src/lib/`
  - Mathematics: `worksheet-data.ts` (Foundation), `worksheet-data-year{1-10}.ts`
  - English: `worksheet-data-english-foundation.ts`, `worksheet-data-english-year{1-10}.ts`
- **Type definitions**: `src/lib/worksheet-types.ts`
- **Landing page**: `src/app/page.tsx` (imports all worksheet data and calculates totals)

### Structure Pattern
Each worksheet file exports a `WorksheetItem[]` array where:
- **WorksheetItem** has: slug, title, strand, description, activities[]
- **activities** is an array of activity objects with `type` field
- Activity types in use: 17 total (see below)

### Content Inventory (as of 2026-02-19)

**Grand Totals**: 236 worksheets, 20,574 activities, avg 87.18 activities per worksheet

**Subjects Covered**: Mathematics, English

**Mathematics Worksheets by Year**:
| Year Level | Count | Activity Count | Avg/Worksheet |
|------------|-------|-----------------|----------------|
| Foundation | 12 | 1,330 | 110.83 |
| Year 1 | 11 | 1,105 | 100.45 |
| Year 2 | 9 | 1,551 | 172.33 |
| Year 3 | 19 | 3,566 | 187.68 |
| Year 4 | 23 | 2,568 | 111.65 |
| Year 5 | 23 | 5,154 | 224.09 |
| Year 6 | 22 | 2,256 | 102.55 |
| Year 7 | 15 | 268 | 17.87 |
| Year 8 | 9 | 240 | 26.67 |
| Year 9 | 13 | 464 | 35.69 |
| Year 10 | 5 | 1,199 | 239.80 |
| **Math Total** | **162** | **19,701** | **121.49** |

**English Worksheets by Year**:
| Year Level | Count | Activity Count | Avg/Worksheet |
|------------|-------|-----------------|----------------|
| Foundation | 8 | 58 | 7.25 |
| Year 1 | 8 | 74 | 9.25 |
| Year 2 | 7 | 79 | 11.29 |
| Year 3 | 7 | 89 | 12.71 |
| Year 4 | 8 | 73 | 9.13 |
| Year 5 | 8 | 80 | 10.00 |
| Year 6 | 3 | 83 | 27.67 |
| Year 7 | 4 | 68 | 17.00 |
| Year 8 | 7 | 80 | 11.43 |
| Year 9 | 7 | 86 | 12.29 |
| Year 10 | 8 | 103 | 12.88 |
| **English Total** | **74** | **873** | **11.80** |

### Activity Types (17 total, alphabetical)
1. **box** — Open-ended text response box
2. **circle-correct** — Multiple choice with circle-correct interaction
3. **compare-groups** — Visual comparison of object groups
4. **count-objects** — Counting activity with object rows
5. **home-activity** — Suggested activity for home environment
6. **lines** — Metadata marker (response type, not a full activity type)
7. **matching** — Match items from left to right columns
8. **number-bonds** — Number part-whole relationships
9. **number-trace** — Trace numerals
10. **open-response** — Open-ended response activity
11. **pattern** — Pattern completion and sequences
12. **picture-graph** — Picture-based data graph
13. **sequence** — Sequential ordering activity
14. **shape-trace** — Trace shapes (geometric)
15. **sorting** — Classify/sort items by criteria
16. **tally-chart** — Tally mark data collection
17. **ten-frame** — Ten-frame visual representation

### Analysis Notes
- Mathematics has ~22x more activities per worksheet than English (121.49 vs 11.80 avg)
- Year 5 Mathematics is densest (224.09 activities/worksheet, 5,154 total)
- Year 7-10 Mathematics appear transitional (fewer worksheets, simpler activity types - no number-trace, count-objects, etc.)
- English Year 6-10 show reduced content density compared to Foundation-Year 5
- Worksheet counts verified against `grep "slug:"` counts (minor variance due to comments)

### Data Quality Notes
- Verification method: Count `type: "..."` declarations in TypeScript files
- Foundation Math verified: 12 slugs, 1,330 activity types
- Files are well-structured with consistent export patterns
- No missing year levels referenced in page.tsx that aren't populated with data
