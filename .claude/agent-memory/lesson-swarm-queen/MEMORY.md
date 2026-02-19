# Lesson Swarm Queen Memory

## Audit Results (2026-02-19)

### Worksheet Inventory
- **Total worksheets: 262** across 22 data files
- **All 262 have substantive companion lessons** (0 missing)
- Lesson structure: `Lesson` type in `src/lib/worksheet-types.ts` (lines 261-271)
- Each lesson includes: title, objective, materials, intro, mainActivity, wrapUp, parentTip, extension, resources

### Data File Map
| File | Subject | Year | Worksheets |
|------|---------|------|------------|
| worksheet-data.ts | Maths | Foundation | 12 |
| worksheet-data-year1.ts | Maths | Year 1 | 11 |
| worksheet-data-year2.ts | Maths | Year 2 | 16 |
| worksheet-data-year3.ts | Maths | Year 3 | 19 |
| worksheet-data-year4.ts | Maths | Year 4 | 23 |
| worksheet-data-year5.ts | Maths | Year 5 | 23 |
| worksheet-data-year6.ts | Maths | Year 6 | 22 |
| worksheet-data-year7.ts | Maths | Year 7 | 15 |
| worksheet-data-year8.ts | Maths | Year 8 | 14 |
| worksheet-data-year9.ts | Maths | Year 9 | 13 |
| worksheet-data-year10.ts | Maths | Year 10 | 12 |
| worksheet-data-english-foundation.ts | English | Foundation | 8 |
| worksheet-data-english-year1.ts | English | Year 1 | 8 |
| worksheet-data-english-year2.ts | English | Year 2 | 7 |
| worksheet-data-english-year3.ts | English | Year 3 | 7 |
| worksheet-data-english-year4.ts | English | Year 4 | 8 |
| worksheet-data-english-year5.ts | English | Year 5 | 8 |
| worksheet-data-english-year6.ts | English | Year 6 | 7 |
| worksheet-data-english-year7.ts | English | Year 7 | 7 |
| worksheet-data-english-year8.ts | English | Year 8 | 7 |
| worksheet-data-english-year9.ts | English | Year 9 | 7 |
| worksheet-data-english-year10.ts | English | Year 10 | 8 |

### Lesson Type (existing)
Defined in `src/lib/worksheet-types.ts`:
- `LessonPart` — title, script, action
- `LessonResource` — title, url, description
- `Lesson` — title, objective, materials[], intro, mainActivity, wrapUp, parentTip?, extension?, resources[]
- Lessons are inline on each `WorksheetItem` via optional `lesson?: Lesson`

### No standalone lesson pages exist
- No `src/app/lessons/` directory
- No `src/lib/lesson-types.ts` or `src/lib/lesson-data.ts`
- Lessons are rendered inline on worksheet pages, not as separate routes

### Subjects covered
- Mathematics: Foundation through Year 10 (11 year levels)
- English: Foundation through Year 10 (11 year levels)
