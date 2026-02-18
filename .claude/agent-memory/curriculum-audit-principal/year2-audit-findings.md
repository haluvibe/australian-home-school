# Year 2 Audit Findings (2026-02-18)

## Worksheet Inventory
- 15 worksheets total, 974 activities across all worksheets
- Average ~65 activities per worksheet (range 54-103)
- Worksheets follow Easy -> Medium -> Hard progression
- Every worksheet includes a home-activity
- All 15 curriculum slugs have corresponding worksheets (100% slug coverage)

## Strand Distribution
- Number: 6 worksheets (numbers-to-1000, place-value-hundreds, addition-subtraction-facts-20, multiplication-facts-twos, money-problems, halves-quarters-eighths)
- Algebra: 2 worksheets (increasing-decreasing-patterns, missing-elements-patterns)
- Measurement: 3 worksheets (informal-units-measure, analog-clock-time, calendar-days)
- Space: 3 worksheets (classify-shapes-formal, positions-2d-maps, directions-pathways)
- Statistics: 1 worksheet (categorical-data-bar-graphs)

## Critical Data Quality Issues

### Count-Objects Rendering Overflow
- In worksheet "numbers-to-1000": count-objects activities at lines 30-33 use counts of 100-200
- Later in the same worksheet: counts reach 750, 825, and 999 (line 352)
- CountObjectsActivity.tsx line 18 creates Array.from({length: row.count}) SVG elements
- 999 SVGs at 36px each = performance crash and illegible on A4 print
- Also affects place-value-hundreds worksheet with counts 135-504

### Matching Activities with Duplicate Right Values
11 matching activities have duplicate values in the right column:
- Line 1874: right=["9","10","8","10"] -- ambiguous matching for students
- Line 1952: right=["11","13","13","15"] -- two 13s
- Line 2040: right=["8","7","8","8"] -- three 8s
- Line 2272: right=["14","14","14","14"] -- ALL four identical (intentional for "Match Equal Additions")
- Line 3536: right=["$6","$1","$7","$6"] -- two $6 values
- Line 3710: right=["$2","$4","$6","$6"] -- two $6 values
- Line 5879: right=["20","12","70","12"] -- two 12s
- Line 6154: right=["6 cubes","3 cubes","5 cubes","5 cubes"] -- two "5 cubes"
- Line 7471: right=["31 days","30 days","28 or 29 days","31 days"] -- two "31 days"
- Line 8425: right=["Circle","Square","Triangle","Square"] -- two "Square"
- Line 10233: right=["12 total","12 total","10 total","10 total"] -- duplicate pairs

### Number Bonds with Both Parts Null
- 36 bonds across "halves-quarters-eighths" worksheet have partA: null AND partB: null
- Pedagogically intentional (student fills both halves)
- But the NumberBonds renderer may not handle this -- needs verification

## Content Alignment Notes
- Rounding activities (lines 716-742) are NOT in ACARA Year 2 curriculum -- extension material
- Even/Odd sorting (lines 754-777) extends beyond stated curriculum -- acceptable enrichment
- Doubling to 15 in multiplication worksheet pushes slightly beyond Year 2 twos facts
- "Doubling Chain" sequence at line 3159 includes 48 (1,2,4,8,16 then 3,6,12,24,48) -- beyond scope

## Activity Types Used
Primary: circle-correct (185), open-response (158), matching (123), sequence (109)
Supporting: number-bonds (84), sorting (67), count-objects (63)
Visual: tally-chart (34), number-trace (32), picture-graph (28)
Specialist: compare-groups (23), ten-frame (21), pattern (21), home-activity (15), shape-trace (11)
