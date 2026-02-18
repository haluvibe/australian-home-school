# Foundation Mathematics Audit - Detailed Findings

## Date: 2026-02-18

## Worksheet Inventory

| # | Slug | Title | Strand | Activities |
|---|------|-------|--------|------------|
| 1 | number-names-0-20 | Number Names & Numerals 0-20 | Number | 108 |
| 2 | subitising-counting | Subitising & Counting | Number | 110 |
| 3 | compare-collections | Compare Collections | Number | 112 |
| 4 | partition-combine | Partition & Combine | Number | 138 |
| 5 | add-subtract-share | Adding, Subtracting & Sharing | Number | 112 |
| 6 | repeating-patterns | Repeating Patterns | Algebra | 98 |
| 7 | mass-capacity-length-duration | Mass, Capacity, Length & Duration | Measurement | 99 |
| 8 | direct-comparison | Direct Comparison | Measurement | 102 |
| 9 | time-of-day | Time of Day | Measurement | 114 |
| 10 | familiar-shapes | Familiar Shapes | Space | 115 |
| 11 | position-location | Position & Location | Space | 110 |
| 12 | collect-sort-data | Collect, Sort & Compare Data | Statistics | 112 |

## Data Quality Issues

### Critical (Must Fix)
1. **Line 4487-4490**: "Equal Sharing Bonds" has ALL null values for both partA and partB in all 4 bonds. The renderer cannot show any known part to the child.
2. **Line 4074**: "Match the Take Away" has 3x "2" in rightItems. Left items: 3-1=2, 4-2=2, 5-1=4, 5-3=2. Three answers are "2" but only one right-side "4" is unique. Ambiguous.
3. **Line 4271**: "Match the Subtraction" has 3x "3" in rightItems. Left items: 5-2=3, 6-3=3, 7-6=1, 7-4=3. Three answers are "3" making matching ambiguous.

### Moderate (Should Fix)
4. **Line 8860**: "Match Shape to Number of Corners" has 2x "4 corners". Diamond and Rectangle both have 4 corners, making this technically correct but visually ambiguous in a matching exercise.
5. **Line 7653**: "Match Morning and Night" has 2x "Night" and 2x "Morning" in rightItems. Technically valid for a many-to-many match but unconventional for Foundation level.
6. **Line 5808**: "A worm is ___" with options Long/Short is ambiguous. Common worms are 5-15cm, which most would consider short. Expected answer seems to be "Long" based on context but this is debatable.

### Minor (Nice to Fix)
7. Only 1 of 12 worksheets has a learningGuide (number-names-0-20). All others lack parent guidance.
8. No worksheets have lesson data populated.

## Pedagogical Observations
- All 12 worksheets follow an Easy -> Medium -> Hard -> Challenge progression
- All 12 worksheets include home-activity suggestions
- Activity types are age-appropriate (number-trace, count-objects, shape-trace used heavily)
- Objects used are culturally neutral and age-appropriate for Australian 5-year-olds
- Ten-frame activities included across multiple worksheets (good)
- Dice pattern recognition included in subitising (excellent for Foundation)
