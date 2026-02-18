# Year 4 Audit Findings (2026-02-18)

## Worksheet Inventory
23 worksheets total, covering all 23 ACARA Year 4 mathematics objectives (100% slug coverage)

### Strand Breakdown
- Number: 8 worksheets (tenths-hundredths-decimals, multiply-by-multiples-of-10, efficient-four-operations, rounding-estimation, odd-even-properties, equivalent-fractions-decimals, fractions-number-line, financial-problems-number-sentences)
- Algebra: 2 worksheets (unknown-values-equations, algorithms-number-patterns)
- Measurement: 4 worksheets (scaled-instruments-measure, perimeter-area, time-units-duration, angles-right-angle-comparison)
- Space: 3 worksheets (represent-shapes-environment, grid-references, line-rotational-symmetry)
- Statistics: 3 worksheets (many-to-one-displays, distributions-variation, surveys-digital-tools)
- Probability: 3 worksheets (order-likelihood, independent-dependent-events, chance-experiments-variation-y4)

## Data Quality Issues Found

### CRITICAL: Matching with Duplicate Right-Side Values
Multiple matching activities have duplicate values in rightItems, making them ambiguous:

1. **Line 872**: "Match Products (x Multiples of 10)" -- right has 2x "200" (3x30=90, 5x40=200, 7x20=140, 4x50=200)
2. **Line 879**: "Match Products (x 10, x 100)" -- right has 2x "600" (6x100=600, 60x10=600)
3. **Line 987**: "Match the Multiplication (Mixed)" -- right has 2x "120" (3x40=120, 4x30=120)
4. **Line 994**: "Match Bigger Multiplications" -- right has 2x "180" (6x30=180, 9x20=180)
5. **Line 1580**: "Match Divisions to Quotients" -- right has 3x "9" (45/5=9, 72/9=8, 54/6=9)
6. **Line 1684**: "Match Division Facts (Set A)" -- right has 2x "9" and 2x "7"
7. **Line 1691**: "Match Division Facts (Set B)" -- right has 3x "9"
8. **Line 2448**: "Match the Estimate (Addition)" -- right has 2x "400"
9. **Line 2455**: "Match the Estimate (Multiplication)" -- right has 3x "100"
10. **Line 3387**: "Match Operation Result to Odd/Even" -- labels are confusing and incorrect (see pedagogical issues)
11. **Line 3954**: "Match Equivalent Fractions" -- right has 2x "2/4" and 2x "1/2"
12. **Line 4329**: "Match Fractions to Their Value" -- ALL 5 right items are "Half" (defeats purpose of matching)
13. **Line 4954**: "Match Purchases to Totals" -- right has 2x "$20.00"
14. **Line 9067**: "Match 3D Shapes to Properties" -- right has 2x "5" and 2x "6"

### CRITICAL: Content Correctness Errors

1. **Line 3386-3387**: "Match Operation Result to Odd/Even" -- The right-side labels are garbled:
   - "Always Odd" is correct for Even+Odd, NOT Even+Even (Even+Even=Even)
   - "Always Odd (x)" is correct for Odd*Odd, NOT Odd+Odd (Odd+Odd=Even)
   - Labels like "Always Even (+e)" and "Always Even (xe)" are cryptic/meaningless to students
   - The intended matches are mathematically WRONG as presented

2. **Line 1325**: "Doubling Patterns" -- sequence [50, 100, 150, 200] with answer [250, 300, 350] is "+50" NOT doubling. Title says "Doubling Patterns" but pattern is additive.

3. **Line 1976**: Sequence [100, 50, 25, 0, 6] with answer [12] -- The pattern is halving (100/2=50, 50/2=25, 25/2=12.5, 12.5/2=6.25). But answer 12 implies 25/2=12 (wrong: should be 12.5) and 6 implies 12/2=6 (wrong if 12.5). Halving sequence produces non-integers.

4. **Line 8070-8072**: "Match Time Units to Their Size" -- instruction says "how many seconds it contains" but right-side mixes units: "525,600 min" (should be seconds for consistency), "10,080 min" for 1 week (should be seconds). Also, 1 week = 604,800 seconds (not listed). The matching is between mismatched units.

### Pedagogical Concerns

1. **Line 4329**: Matching where ALL right items are "Half" -- this teaches nothing since every line goes to the same answer. Convert to circle-correct or sorting.

2. **Line 1321-1327**: "Doubling Patterns with Multiples of 10" -- Only sequences 1 and 3 actually double. Sequence 2 adds 50 each time. Misleading title.

3. **Line 192**: "Tenths or Hundredths?" question for 0.50 -- pedagogically ambiguous: 0.50 CAN be expressed as 5 tenths OR 50 hundredths. The "correct" answer depends on whether you're looking at decimal places written.

## Learning Guide / Lesson Coverage
- 0 of 23 worksheets have learningGuide data
- 0 of 23 worksheets have lesson data
- This is a significant gap for home-educating parents who need pedagogical guidance

## Activity Types Used in Year 4
Primary: circle-correct, matching, number-bonds, open-response, sequence, sorting
Supporting: count-objects, number-trace, tally-chart, picture-graph, home-activity
NOT used: compare-groups, shape-trace, ten-frame, pattern (object pattern type)

## Cross-Year Pattern: Matching Duplicates
Consistent with Foundation and Year 6 findings -- matching activities with duplicate right-side labels remain a SYSTEMIC issue across all audited year levels.
