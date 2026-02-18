# Year 5 Audit Findings (2026-02-18)

## Key Data Quality Issues Found
- Line 935: Halving sequence [100,50,25] with answer [12,6] -- 25/2=12.5, NOT 12. Mathematical error.
- Line 1356: Number-bonds use JS division for fractions (3/8, 5/12, 7/10, 2/9) -- evaluates as decimals not fraction strings
- Line 4954: True/False "Angles on a straight line add up to 360°" -- first option TRUE but correct answer is FALSE (180°)
- 29 matching activities with duplicate right-side values across 10 worksheets
- Line 4728: ALL 4 right values are "20 cm" (perimeter matching -- correct math but broken UI)
- Line 4786: ALL 4 right values are "22 cm" (same issue)
- Line 4785: Two right values are "30 cm²" (area matching -- correct math but ambiguous)

## Curriculum Coverage
- All 23 Year 5 ACARA maths objectives have corresponding worksheets (100% slug coverage)
- 6 strands: Number (8), Algebra (2), Measurement (4), Space (3), Statistics (3), Probability (3)
- Total: 2,208 activities across 23 worksheets (~96 per worksheet)
- 0 orphaned worksheets, 0 missing curriculum objectives

## Activity Types Used in Year 5
- open-response: 978 (44%) -- dominant type
- circle-correct: 370 (17%)
- matching: 208 (9%)
- sorting: 174 (8%)
- number-bonds: 144 (7%)
- tally-chart: 79 (4%)
- sequence: 77 (3%)
- picture-graph: 68 (3%)
- compare-groups: 62 (3%)
- number-trace: 14 (1%)
- count-objects: 8 (<1%)
- ten-frame: 3 (<1%)
- home-activity: 23 (one per worksheet)
- NOT used: pattern, shape-trace (age-appropriate omissions)

## Extension Content Beyond Year 5 ACARA
- HCF/LCM (Year 6): lines 912, 913, 921, 933, 934, 968, 969, 980, 981
- Prime factorisation (Year 6): lines 921, 970, 971
- Divisibility rules (Year 6): lines 914, 927, 972, 973
- Thousandths (not explicit in Year 5 ACARA): lines 473-510
- Reflex angles (Year 6): lines 4939, 4945, 4970, 4973, 4976
- Supplementary/complementary angles (Year 7): lines 4965, 4966, 5007
- Vertically opposite angles (Year 7): lines 4966, 4984
- Negative coordinates/quadrants (Year 6): lines 5125, 5131, 5134, 5137
- Time zones (enrichment): lines 4844, 4880, 4899, 4906, 4911
- Midpoints (Year 7): lines 5095, 5108
- Composite shapes (enrichment): lines 4738, 4739
- GST calculations (enrichment): line 1789
- Interior angles of polygons (Year 7): lines 4992, 4993

## Learning Guide / Lesson Coverage
- 0 of 23 worksheets have learningGuide data
- 0 of 23 worksheets have lesson data
- Consistent with Years 2, 3, 4 pattern

## Count-Objects Safety
- All count-objects activities have counts <= 12 (safe for rendering)

## Matching Duplicates by Worksheet
- unknown-values-multiply-divide: 6
- perimeter-area-problems: 6
- divide-single-digit: 4
- add-subtract-fractions: 3
- transformations-symmetry: 3
- estimation-reasonableness: 2
- 2d-nets: 2
- statistical-investigations-digital: 1
- estimate-likelihoods: 1
- repeated-chance-experiments: 1
