# Year 10 Mathematics Audit Findings (2026-02-18)

## Overview
- File: `src/lib/worksheet-data-year10.ts` (10,217 lines)
- 12 worksheets, 695 activities (excluding prompt sub-types)
- Activity type breakdown: open-response 252, circle-correct 188, matching 85, sorting 67, home-activity 50, sequence 30, tally-chart 23
- 0 learning guides, 0 lessons
- No addition files (ws10-additions-*.ts do not exist on disk)

## Curriculum Mapping (ACARA Year 10 Mathematics)
### Objectives WITH worksheetSlug (15 of 16):
| Strand | Objective | worksheetSlug |
|--------|-----------|---------------|
| Number | Approximations of real numbers | approximations-logarithmic-scales |
| Number | Logarithmic scales | approximations-logarithmic-scales |
| Algebra | Growth and decay functions | growth-decay-functions |
| Algebra | Simultaneous equations/inequalities | simultaneous-equations-inequalities |
| Algebra | Conjectures involving functions | conjectures-functions-relations |
| Measurement | Surface area & volume composites | surface-area-volume-composites |
| Measurement | Pythagoras & trigonometry | pythagoras-trigonometry |
| Measurement | Measurement errors | measurement-errors-proportion |
| Measurement | Proportion and scaling | measurement-errors-proportion |
| Space | Deductive reasoning & theorems | deductive-reasoning-geometric-theorems |
| Space | Networks and connectedness | networks-paths-connectedness |
| Statistics | Bivariate data investigations | bivariate-data-scatter-plots |
| Statistics | Scatter plots & association | bivariate-data-scatter-plots |
| Statistics | Media bias analysis | media-bias-statistical-analysis |
| Probability | Conditional probability | conditional-probability-compound-events |
| Probability | Simulations with conditional probability | conditional-probability-compound-events |

### Objectives WITHOUT worksheetSlug (1 of 16):
- Statistics: "Compare distributions of continuous numerical data using various displays"
  - NOTE: Content IS partially covered in media-bias-statistical-analysis worksheet (box plots, histograms, skewness)
  - BUT no worksheetSlug linkage in curriculum JSON

## Critical Mathematical Errors

### True/False Answer Key Errors (WRONG first option = wrong answer key)
1. **Line 237**: "A magnitude 8 earthquake is twice as strong as magnitude 4" -- marked TRUE, should be FALSE (10,000x amplitude)
2. **Line 866**: "Exponential growth means the same amount is added each period" -- marked TRUE, should be FALSE (that is LINEAR growth)
3. **Line 868**: "Compound interest always gives more than simple interest for the same rate and time" -- marked TRUE, should be FALSE (equal at n=1)
4. **Line 869**: "An exponential function can have a negative base" -- marked TRUE, debatable but FALSE at Year 10 level

## Matching Activities with Duplicate Right Values (8 instances)
1. L1433: "Graph Description to Number of Solutions" -- "Exactly one solution" x2
2. L2529: "Discriminant Value to Number of Solutions" -- "Two distinct real solutions" x2, "No real solutions" x2
3. L4001: "Special Angles -- Exact Values" -- "sqrt(3)/2" x2, "1/2" x2
4. L5070: "Map Scale & Real Distance" -- "1 km" x2
5. L5604: "Proportional Contexts -- Match the Relationship" -- "Inverse proportion" x3, "Direct proportion" x3
6. L6614: "Real-World Networks" -- "Directed graph (digraph)" x2
7. L6837: "Euler Classification" -- "Euler circuit" x2, "Euler path" x2
8. L6911: "Vertex Degrees & Euler Paths" -- "Neither... (disconnected)" x2

### Notes on Duplicate Matching
- Instances 2, 3, 6, 7, 8 are mathematically correct but ambiguous for students
- Instance 5 (Proportional Contexts) should be a sorting activity, not matching
- Instance 4 (Map Scale) is mathematically correct but creates ambiguity

## Pedagogical Concerns

### Rule of 72 vs Rule of 70 Inconsistency
- Growth-decay worksheet uses BOTH "Rule of 72" (L800) and "Rule of 70" (L962) without explanation
- Both are legitimate but switching mid-worksheet is confusing

### Tally Charts in Year 10
- 23 tally-chart activities use pre-set counts and childish icons (stars, pencils)
- These are metacognitive tracking activities, not mathematical content
- Format feels juvenile for 15-16 year olds

### Content Beyond Year 10 Curriculum
- Sine Rule and Cosine Rule (L4570, L4579) -- Year 11/12 content
- Bayes' Theorem (L10120) -- university-level content
- Permutations and Combinations (L10047, L10199) -- Year 11/12 content
- Piecewise Functions (L3052) -- Year 11/12 content
- Unit Circle (L4729) -- Year 11/12 content
- Composite and Inverse Functions (L3029) -- Year 11/12 content

### Worksheet Size
- Each worksheet averages ~58 activities (range: 93-117)
- This is very large for a single printable worksheet
- At ~95+ activities per worksheet, printing would exceed reasonable page counts

## Commendable Aspects
- Easy -> Medium -> Hard progression within each worksheet
- Home activities in every worksheet (excellent for home education)
- Australian context throughout (ASX, superannuation, Australian geography)
- Open-response activities demand genuine mathematical reasoning
- Real-world applications are relevant and engaging (drug dosage, GPS, Mars Orbiter)
- No inappropriate activity types (no number-trace, count-objects, etc.)
- All activity mathematics verified correct EXCEPT the True/False errors noted above
