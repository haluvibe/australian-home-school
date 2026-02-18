# Year 3 Mathematics Audit Findings (2026-02-18)

## Overview
- 19 worksheets covering all 19 Year 3 ACARA maths objectives (100% slug coverage)
- 6 strands: Number (7), Algebra (2), Measurement (4), Space (2), Statistics (2), Probability (2)
- Total: 1,839 activities across 19 worksheets (~97 per worksheet)
  NOTE: Earlier estimate of 3,566 was inflated by regex false-matching prompt type:"lines" and type:"box"
- 0 learningGuide, 0 lesson data

## Key Data Quality Issues

### Critical: All-Null Number Bonds
- Line 798: "Fractions That Make a Whole" -- 4 bonds with { total: 1, partA: null, partB: null }
  Both parts null = unsolvable for students. Must fix.

### Ambiguous Matching (28 instances with duplicates in right arrays)
Most problematic:
- Line 520: right: ["9", "7", "7", "7"] -- TRIPLE duplicate "7" in division answers
- Line 858: right: ["about $20", "about $20", "about $11", "about $20"] -- TRIPLE duplicate
- Line 1087: right array has duplicates (5, 11, 44 x2 each) -- algorithm outputs
- Line 380: right: ["50", "130", "80", "130"] -- legitimate same-answer but ambiguous
- Line 458: right: ["20", "12", "10", "12"] -- multiplication groups with same product
- Line 780: right has 2x "1 whole" -- fraction multiples
- Line 843: right has 2x "about $10" -- estimation
- Line 881: right has 2x "about $20" -- more estimation
- Line 954: right has 2x "12" -- unknown values
- Line 1020: right has 2x "27" -- equation solutions
- Line 1219: right has 2x "2 m" -- metric units
- Line 1567: right has 2x "1 curved surface" -- 3D objects
- Line 1582: right has 2x "5" -- faces count
- Line 1719: right has 2x "West" -- compass directions
- Line 1892: right has 2x each "Numerical -- discrete" and "Categorical"
- Line 1954: right has 2x "Certain" -- likelihood
- Line 2090: right has 2x "about 50" -- probability predictions
- Line 2115: right has 2x "this is low" -- chance
- Line 2142: right has 3x "1/2" -- probability fractions

### Content Concerns
- Line 1029: Sequence [4, 8, 16, 32, 0] with answer [64] -- this is a multiply-by-2 pattern but placed in "Growing Pattern Sequences" alongside add-7 patterns, potentially confusing
- Line 797: Fraction number line sequences use 0-based items [0, 0, 0, 0, 1] with answers [1,2,3,4] -- unclear how students would know the denominator
- Line 1896: picture-graph asks "What percentage scored under 6?" -- percentages beyond Year 3
- Line 1891: "Match Data to Correct Conclusion" includes Mode, Median, Mean, Range -- ALL beyond Year 3 curriculum (introduced Year 7)
- Line 1897-1898: "Find the Mode" and "Find the Mean" activities -- significantly above Year 3 level

### Count-Objects Overflow Concerns
- Lines 110, 134: count-objects with counts of 25-80 objects per row -- these may render too many SVG objects
- Line 456-457: counts 10-24 per row -- borderline but manageable

## Strand Coverage Analysis
| Strand | ACARA Objectives | Worksheets | Status |
|--------|-----------------|------------|--------|
| Number | 7 | 7 | Complete |
| Algebra | 2 | 2 | Complete |
| Measurement | 4 | 4 | Complete |
| Space | 2 | 2 | Complete |
| Statistics | 2 | 2 | Complete |
| Probability | 2 | 2 | Complete |

## Pedagogical Observations
- Each worksheet follows Easy -> Medium -> Hard progression with Extended Practice rounds
- Home activities included in every worksheet (commendable)
- Worksheets are VERY large (~188 activities average) -- may overwhelm home-educating families
- WS1 (numbers-beyond-10000) has 306 activities -- likely too many for one topic
- Year 3 introduces Probability strand (correct per ACARA)
- Good use of Australian context (distances, populations, census data)

## Activity Types Used
Primary: open-response, circle-correct, matching, number-bonds, sequence, sorting
Supporting: count-objects, tally-chart, picture-graph, pattern, ten-frame, home-activity, number-trace
Note: number-trace still used for place value practice (appropriate for tracing large numbers)
