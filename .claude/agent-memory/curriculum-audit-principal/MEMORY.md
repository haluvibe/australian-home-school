# Curriculum Audit Principal - Memory

## Project Structure
- Curriculum JSON: `curriculum/mathematics/mathematics-curriculum-data.json` (Year levels Foundation through Year 10)
- Worksheet data files: `src/lib/worksheet-data-year{N}.ts` (one per year level)
- Types: `src/lib/worksheet-types.ts` (ActivityData union type, WorksheetItem)
- Curriculum types: `src/lib/curriculum-data.ts` (StrandItem with worksheetSlug linkage)
- Landing page: `src/app/page.tsx` (worksheetsByYearLevel array drives stats)

## Year 6 Audit Findings (2026-02-18)
See `year6-audit-findings.md` for full details.

### Key Data Quality Issues Found
- Fraction worksheet: `number-bonds` activity at line 1557 has ALL null values (both partA and partB)
- Fraction worksheet: `matching` at line 1378 has duplicate "1/2" in right array (ambiguous matching)
- Decimal-metric worksheet: 0.01 m matched to "1 mm (approx)" at line 2266 -- WRONG (0.01 m = 1 cm)
- Algorithms worksheet: sequence `[1000, 0, 100, 10, 1]` with answer `[0]` at line 4225 -- divide-by-10 pattern should yield 100, not 0
- Fraction sequence at line 1716 uses whole integers for a "fraction sequences" title -- misleading
- First worksheet line 20: sequence `[0, -1, 0, 1, 2]` with answer `[0]` is ambiguous (two 0s already in sequence)
- First worksheet line 364: matching has duplicate "-2" in right array

### Curriculum Coverage
- All 22 Year 6 ACARA maths objectives have corresponding worksheets (100% slug coverage)
- 6 strands covered: Number (7), Algebra (3), Measurement (4), Space (3), Statistics (2), Probability (3)
- Total: 796 activities across 22 worksheets (~36 per worksheet)

### Activity Types Used in Year 6
Primary: open-response, circle-correct, matching, sorting, sequence, number-bonds
Supporting: tally-chart, picture-graph, ten-frame, count-objects, pattern, home-activity
NOT used: number-trace, shape-trace, compare-groups (age-appropriate omission)

### Pedagogical Patterns
- Each worksheet follows Easy -> Medium -> Hard progression (commendable)
- Home activities included in every worksheet (good parent engagement)
- Some worksheets push beyond Year 6 (e.g., absolute value, integer multiplication, cube numbers, HCF/LCM)

## Foundation Audit Findings (2026-02-18)
See `foundation-audit-findings.md` for full details.

### Key Data Quality Issues Found
- add-subtract-share: "Match the Take Away" (line 4074) has 3x "2" in rightItems -- ambiguous matching
- add-subtract-share: "Match the Subtraction" (line 4271) has 3x "3" in rightItems -- ambiguous matching
- add-subtract-share: "Equal Sharing Bonds" (line 4483) has ALL null values (both partA and partB) for 4 bonds
- familiar-shapes: "Match Shape to Number of Corners" (line 8860) has 2x "4 corners" in rightItems -- ambiguous
- time-of-day: "Match Morning and Night" (line 7653) has 2x each "Night" and "Morning" in rightItems
- mass-capacity-length-duration: "A worm is ___" (line 5808) ambiguous (worms are short)

### Curriculum Coverage
- All 12 Foundation ACARA maths objectives have corresponding worksheets (100% slug coverage)
- 5 strands covered: Number (5), Algebra (1), Measurement (3), Space (2), Statistics (1)
- No Probability strand at Foundation (correct per ACARA -- introduced in Year 1)
- Total: 1,330 activities across 12 worksheets (~111 per worksheet)

### Learning Guide / Lesson Coverage
- Only 1 of 12 worksheets has learningGuide data (number-names-0-20)
- 0 of 12 worksheets have lesson data
- This is a significant gap for home-educating parents

## Year 4 Audit Findings (2026-02-18)
See `year4-audit-findings.md` for full details.

### Key Data Quality Issues Found
- 14+ matching activities with duplicate right-side values (WORST of any audited year level)
- Line 3386-3387: "Match Operation Result to Odd/Even" has WRONG mathematical content (Even+Even mapped to "Always Odd")
- Line 1976: Halving sequence [100,50,25,?,6] expects answer 12, but 25/2=12.5 (non-integer)
- Line 1325: "Doubling Patterns" title but sequence 2 is +50 (additive, not doubling)
- Line 8070-8072: Time units matching mixes seconds and minutes in right-side labels
- Line 4329: Matching with ALL 5 right items as "Half" -- defeats purpose of matching

### Curriculum Coverage
- All 23 Year 4 ACARA maths objectives have corresponding worksheets (100% slug coverage)
- 6 strands: Number (8), Algebra (2), Measurement (4), Space (3), Statistics (3), Probability (3)

### Learning Guide / Lesson Coverage
- 0 of 23 worksheets have learningGuide data
- 0 of 23 worksheets have lesson data
- Worst coverage of any audited year level

## Year 2 Audit Findings (2026-02-18)
See `year2-audit-findings.md` for full details.

### Key Data Quality Issues Found
- count-objects activities render 100-999 SVG objects (CountObjectsActivity creates Array.from({length: count}))
- This will crash browsers and be illegible on print -- CRITICAL rendering issue
- 11 matching activities with duplicate right values (ambiguous matching)
- 36 number-bonds with both partA and partB null (halving worksheet -- intentional but needs renderer check)
- Rounding activities (lines 716-742) extend beyond ACARA Year 2 curriculum
- Even/Odd activities not in Year 2 curriculum (enrichment)

### Curriculum Coverage
- All 15 Year 2 ACARA maths objectives have corresponding worksheets (100% slug coverage)
- 5 strands: Number (6), Algebra (2), Measurement (3), Space (3), Statistics (1)
- Total: 974 activities across 15 worksheets (~65 per worksheet)

### Cross-Year Pattern: Matching Duplicates
- Matching activities with duplicate labels in rightItems is a RECURRING issue across year levels
- Found in Year 6, Foundation, Year 4, and Year 2 -- systematic in all year levels
- Year 4 is the worst offender with 14+ instances; Year 2 has 11
- The issue makes matching activities ambiguous and unfair to students

### Cross-Year Pattern: Count-Objects Overflow
- Year 2 is the FIRST year level where count-objects counts exceed double digits
- The renderer has no cap or grouping -- it renders every object individually
- Counts of 100+ in count-objects are unsuitable for the current component

## Year 3 Audit Findings (2026-02-18)
See `year3-audit-findings.md` for full details.

### Key Data Quality Issues Found
- Line 798: "Fractions That Make a Whole" -- 4 bonds with BOTH partA and partB null (unsolvable)
- 28 matching activities with duplicate right-side values (second-worst after Year 4)
- Line 520: right has TRIPLE duplicate "7" in division matching
- Line 858: right has TRIPLE duplicate "about $20" in estimation matching
- Line 1891: Mode/Median/Mean/Range matching -- ALL beyond Year 3 (introduced Year 7)
- Line 1896: "What percentage scored under 6?" -- percentages beyond Year 3
- Line 1897-1898: "Find the Mode" and "Find the Mean" activities -- significantly above Year 3
- Line 1029: "Growing Pattern Sequences" title says "each term grows by same amount" but third seq is x2

### Curriculum Coverage
- All 19 Year 3 ACARA maths objectives have corresponding worksheets (100% slug coverage)
- 6 strands: Number (7), Algebra (2), Measurement (4), Space (2), Statistics (2), Probability (2)
- Total: 1,839 activities across 19 worksheets (~97 per worksheet)

### Learning Guide / Lesson Coverage
- 0 of 19 worksheets have learningGuide data
- 0 of 19 worksheets have lesson data

### Cross-Year Pattern Update: Matching Duplicates
- Year 3 has 28 instances of matching duplicates (second-worst after Year 4 at 14+)
- Confirmed in ALL audited year levels: Foundation, Year 2, Year 3, Year 4, Year 6

### Cross-Year Pattern: Content Beyond Year Level
- Year 3 statistics worksheets include Mode, Median, Mean, Range (Year 7 concepts)
- This is the most severe year-level mismatch found in any audit so far
- Year 6 also had content pushing beyond level but less dramatically

### Activity Count Methodology Note
- When counting activities via regex, /type: "..."/ matches prompt type:"lines" and type:"box" too
- Must filter for known activity types only to get accurate counts
- Earlier Year 3 estimate of 3,566 was inflated; correct count is 1,839

## Year 10 Audit Findings (2026-02-18)
See `year10-audit-findings.md` for full details.

### Key Data Quality Issues Found
- 4 True/False answer key errors (first option marked as correct answer but mathematically WRONG):
  - L237: "Magnitude 8 = twice magnitude 4" (TRUE, should be FALSE -- 10,000x)
  - L866: "Exponential growth = same amount added" (TRUE, should be FALSE -- that's linear)
  - L868: "Compound > simple always" (TRUE, should be FALSE at n=1)
  - L869: "Negative base exponential" (TRUE, should be FALSE at Year 10)
- 8 matching activities with duplicate right-side values
- 1 ACARA objective missing worksheetSlug: "Compare distributions of continuous data"

### Curriculum Coverage
- 15 of 16 ACARA objectives have worksheetSlugs (93.75% coverage)
- 6 strands: Number (2), Algebra (3), Measurement (4), Space (2), Statistics (4), Probability (2)
- 12 worksheets with 695 activities (avg ~58 per worksheet)

### Pedagogical Patterns
- Easy -> Medium -> Hard progression (consistent with all year levels)
- Heavy use of open-response (252 activities) -- appropriate for Year 10
- Some content extends beyond Year 10 (Sine/Cosine Rule, Bayes, Permutations)
- Rule of 72 vs Rule of 70 inconsistency within same worksheet
- 23 tally-chart activities feel juvenile for Year 10 students

### Cross-Year Pattern Updates
- Matching duplicates: 8 instances in Year 10 (LESS than Year 3/4 but still present)
- True/False errors: NEW pattern not seen in other year levels
- Learning guide/lesson gap: 0/12 for both -- consistent with Years 2-6
- No inappropriate activity types (number-trace, count-objects etc.) -- correct

## Year 5 Audit Findings (2026-02-18)
See `year5-audit-findings.md` for full details.

### Key Data Quality Issues Found
- Line 935: Halving sequence [100,50,25] with answer [12,6] -- 25/2=12.5 (mathematical error)
- Line 1356: Number-bonds use JS division for fractions (3/8 evaluates to 0.375)
- Line 4954: True/False answer key error (angles on straight line = 360, marked TRUE)
- 29 matching activities with duplicate right-side values (WORST of any audited year)
- Lines 4728, 4786: ALL 4 right values identical (correct math, broken UI)

### Curriculum Coverage
- 23/23 objectives covered (100%), 2,208 activities across 23 worksheets (~96 avg)
- 6 strands: Number (8), Algebra (2), Measurement (4), Space (3), Statistics (3), Probability (3)

### Extension Content
- HCF/LCM/prime factorisation/divisibility (Year 6), thousandths (unlabelled)
- Reflex/supplementary/complementary angles (Year 6-7), negative coordinates (Year 6)
- Midpoints, interior angle formula (Year 7), time zones, GST (enrichment)

### Cross-Year Updates
- Matching duplicates: 29 in Year 5 (new worst), halving error identical to Year 4
- JS fraction division in number-bonds is a NEW issue type
- 0/23 learningGuide, 0/23 lesson data (consistent pattern)
