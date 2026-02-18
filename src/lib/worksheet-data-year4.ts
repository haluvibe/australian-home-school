import type { WorksheetItem } from "./worksheet-types";

export const year4MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Tenths and Hundredths in Decimal Form ──────────────────────────
  {
    slug: "tenths-hundredths-decimals",
    title: "Tenths & Hundredths as Decimals",
    strand: "Number",
    description:
      "Represent tenths and hundredths in decimal form",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "matching",
        title: "Match Fractions to Decimals (Tenths – Set A)",
        instruction: "Draw a line from each fraction to its decimal.",
        left: ["1/10", "2/10", "3/10", "4/10", "5/10"],
        right: ["0.4", "0.1", "0.5", "0.2", "0.3"],
      },
      {
        type: "matching",
        title: "Match Fractions to Decimals (Tenths – Set B)",
        instruction: "Draw a line from each fraction to its decimal.",
        left: ["6/10", "7/10", "8/10", "9/10", "10/10"],
        right: ["0.9", "0.7", "1.0", "0.6", "0.8"],
      },
      {
        type: "circle-correct",
        title: "Which Decimal Is Correct? (Tenths – Set A)",
        instruction: "Circle the correct decimal for each fraction.",
        questions: [
          { prompt: "One-tenth", options: ["0.01", "0.1", "1.0"] },
          { prompt: "Two-tenths", options: ["0.02", "0.2", "2.0"] },
          { prompt: "Three-tenths", options: ["0.3", "3.0", "0.03"] },
          { prompt: "Four-tenths", options: ["4.0", "0.04", "0.4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Decimal Is Correct? (Tenths – Set B)",
        instruction: "Circle the correct decimal for each fraction.",
        questions: [
          { prompt: "Five-tenths", options: ["0.5", "5.0", "0.05"] },
          { prompt: "Six-tenths", options: ["0.6", "6.0", "0.06"] },
          { prompt: "Seven-tenths", options: ["0.07", "7.0", "0.7"] },
          { prompt: "Eight-tenths", options: ["0.08", "8.0", "0.8"] },
        ],
      },
      {
        type: "sequence",
        title: "Count by Tenths (Set A)",
        instruction: "Fill in the missing decimals. Each step adds one-tenth.",
        sequences: [
          { items: [1, 2, 0, 4, 5], answer: [3] },
          { items: [0, 4, 5, 6, 0], answer: [3, 7] },
          { items: [0, 8, 9, 0, 11], answer: [7, 10] },
        ],
      },
      {
        type: "sequence",
        title: "Count by Tenths (Set B)",
        instruction: "Fill in the missing decimals.",
        sequences: [
          { items: [2, 0, 4, 5, 6], answer: [3] },
          { items: [5, 6, 0, 8, 0], answer: [7, 9] },
          { items: [0, 1, 2, 3, 0], answer: [0, 4] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Shaded Tenths (Stars)",
        instruction: "Each row has 10 objects. Count the shaded ones and write the decimal.",
        rows: [
          { object: "star", count: 3 },
          { object: "star", count: 7 },
          { object: "star", count: 5 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Shaded Tenths (Hearts)",
        instruction: "Each row has 10 objects. Count the shaded ones and write the decimal.",
        rows: [
          { object: "heart", count: 1 },
          { object: "heart", count: 4 },
          { object: "heart", count: 9 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False? (Tenths)",
        instruction: "Circle TRUE or FALSE for each statement.",
        questions: [
          { prompt: "0.3 means three-tenths", options: ["TRUE", "FALSE"] },
          { prompt: "0.7 is the same as 7/10", options: ["TRUE", "FALSE"] },
          { prompt: "0.5 equals one half", options: ["TRUE", "FALSE"] },
          { prompt: "0.9 is greater than 1", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Tenths Greater or Less Than 0.5",
        instruction: "Sort each decimal into the correct column.",
        columns: ["Less than 0.5", "Equal to or greater than 0.5"],
        items: [
          { label: "0.2" },
          { label: "0.8" },
          { label: "0.5" },
          { label: "0.1" },
          { label: "0.9" },
          { label: "0.4" },
          { label: "0.6" },
          { label: "0.3" },
        ],
      },
      {
        type: "matching",
        title: "Match Decimals to Words (Tenths)",
        instruction: "Draw a line from each decimal to the correct word.",
        left: ["0.1", "0.4", "0.6", "0.9", "0.5"],
        right: ["six-tenths", "one-tenth", "five-tenths", "nine-tenths", "four-tenths"],
      },
      {
        type: "number-bonds",
        title: "Tenths That Make 1 Whole",
        instruction: "Each pair of decimals adds to 1.0. Find the missing part.",
        bonds: [
          { total: 10, partA: 3, partB: null },
          { total: 10, partA: null, partB: 6 },
          { total: 10, partA: 5, partB: null },
          { total: 10, partA: null, partB: 2 },
          { total: 10, partA: 1, partB: null },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Tenths",
        instruction: "Circle the larger decimal.",
        questions: [
          { prompt: "Which is larger?", options: ["0.3", "0.7"] },
          { prompt: "Which is larger?", options: ["0.9", "0.1"] },
          { prompt: "Which is larger?", options: ["0.5", "0.4"] },
          { prompt: "Which is larger?", options: ["0.6", "0.8"] },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "matching",
        title: "Match Fractions to Decimals (Hundredths – Set A)",
        instruction: "Draw a line from each fraction to its decimal.",
        left: ["10/100", "25/100", "50/100", "75/100", "1/100"],
        right: ["0.50", "0.01", "0.75", "0.10", "0.25"],
      },
      {
        type: "matching",
        title: "Match Fractions to Decimals (Hundredths – Set B)",
        instruction: "Draw a line from each fraction to its decimal.",
        left: ["20/100", "30/100", "40/100", "60/100", "90/100"],
        right: ["0.40", "0.90", "0.20", "0.60", "0.30"],
      },
      {
        type: "circle-correct",
        title: "Which Decimal Is Correct? (Hundredths – Set A)",
        instruction: "Circle the correct decimal for each fraction.",
        questions: [
          { prompt: "Thirty-five hundredths", options: ["3.5", "0.35", "35.0"] },
          { prompt: "Nine hundredths", options: ["0.9", "0.09", "9.0"] },
          { prompt: "Seventy hundredths", options: ["0.07", "7.0", "0.70"] },
          { prompt: "Forty-two hundredths", options: ["4.2", "0.42", "42.0"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Decimal Is Correct? (Hundredths – Set B)",
        instruction: "Circle the correct decimal for each fraction.",
        questions: [
          { prompt: "Fifteen hundredths", options: ["1.5", "0.15", "15.0"] },
          { prompt: "Eighty-three hundredths", options: ["8.3", "0.83", "83.0"] },
          { prompt: "Six hundredths", options: ["0.06", "0.6", "6.0"] },
          { prompt: "Ninety-nine hundredths", options: ["0.99", "9.9", "99.0"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Tenths or Hundredths?",
        instruction: "Look at each decimal. Circle whether it is in tenths or hundredths.",
        questions: [
          { prompt: "0.7", options: ["Tenths", "Hundredths"] },
          { prompt: "0.35", options: ["Tenths", "Hundredths"] },
          { prompt: "0.4", options: ["Tenths", "Hundredths"] },
          { prompt: "0.08", options: ["Tenths", "Hundredths"] },
          { prompt: "0.50", options: ["Tenths", "Hundredths"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Tenths or Hundredths?",
        instruction: "Sort each decimal into the correct column.",
        columns: ["Written in tenths", "Written in hundredths"],
        items: [
          { label: "0.3" },
          { label: "0.25" },
          { label: "0.8" },
          { label: "0.47" },
          { label: "0.5" },
          { label: "0.09" },
          { label: "0.6" },
          { label: "0.72" },
        ],
      },
      {
        type: "matching",
        title: "Match Equivalent Tenths and Hundredths",
        instruction: "Draw a line from each tenths decimal to its hundredths equivalent.",
        left: ["0.1", "0.3", "0.5", "0.7", "0.9"],
        right: ["0.50", "0.70", "0.10", "0.90", "0.30"],
      },
      {
        type: "circle-correct",
        title: "Same or Different? (Tenths vs Hundredths)",
        instruction: "Circle SAME if both decimals are equal, or DIFFERENT if they are not.",
        questions: [
          { prompt: "0.5 and 0.50", options: ["SAME", "DIFFERENT"] },
          { prompt: "0.3 and 0.03", options: ["SAME", "DIFFERENT"] },
          { prompt: "0.7 and 0.70", options: ["SAME", "DIFFERENT"] },
          { prompt: "0.4 and 0.40", options: ["SAME", "DIFFERENT"] },
          { prompt: "0.1 and 0.01", options: ["SAME", "DIFFERENT"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Hundredths That Make 1.00",
        instruction: "Find the missing hundredths so each pair adds to 100 hundredths (= 1.00).",
        bonds: [
          { total: 100, partA: 25, partB: null },
          { total: 100, partA: null, partB: 60 },
          { total: 100, partA: 50, partB: null },
          { total: 100, partA: null, partB: 15 },
          { total: 100, partA: 75, partB: null },
        ],
      },
      {
        type: "circle-correct",
        title: "Order Decimals (Tenths)",
        instruction: "Circle the decimal that comes FIRST when counting from 0.",
        questions: [
          { prompt: "Which comes first?", options: ["0.4", "0.2", "0.8"] },
          { prompt: "Which comes first?", options: ["0.6", "0.9", "0.1"] },
          { prompt: "Which is the smallest?", options: ["0.7", "0.3", "0.5"] },
          { prompt: "Which is the largest?", options: ["0.2", "0.8", "0.6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Order Decimals (Hundredths)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which is smallest: 0.25, 0.52, 0.05?", options: ["0.25", "0.52", "0.05"] },
          { prompt: "Which is largest: 0.30, 0.03, 0.33?", options: ["0.30", "0.03", "0.33"] },
          { prompt: "Which is closest to 0.5: 0.48, 0.55, 0.40?", options: ["0.48", "0.55", "0.40"] },
        ],
      },
      {
        type: "sequence",
        title: "Count by Hundredths (Set A)",
        instruction: "Fill in the missing numbers. Each step adds the same amount.",
        sequences: [
          { items: [10, 20, 0, 40, 50], answer: [30] },
          { items: [0, 25, 50, 75, 0], answer: [0, 100] },
          { items: [5, 10, 15, 0, 25], answer: [20] },
        ],
      },
      {
        type: "sequence",
        title: "Count by Hundredths (Set B)",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [20, 0, 60, 80, 100], answer: [40] },
          { items: [0, 10, 20, 30, 0], answer: [0, 40] },
          { items: [15, 30, 0, 60, 75], answer: [45] },
        ],
      },
      {
        type: "open-response",
        title: "Write the Decimal (Tenths)",
        instruction: "Write each fraction as a decimal number.",
        prompts: [
          { text: "Write 4/10 as a decimal:", type: "lines", lines: 1 },
          { text: "Write 8/10 as a decimal:", type: "lines", lines: 1 },
          { text: "Write 2/10 as a decimal:", type: "lines", lines: 1 },
          { text: "Write 10/10 as a decimal:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Decimal (Hundredths)",
        instruction: "Write each fraction as a decimal number.",
        prompts: [
          { text: "Write 62/100 as a decimal:", type: "lines", lines: 1 },
          { text: "Write 15/100 as a decimal:", type: "lines", lines: 1 },
          { text: "Write 7/100 as a decimal:", type: "lines", lines: 1 },
          { text: "Write 88/100 as a decimal:", type: "lines", lines: 1 },
        ],
      },
      // ── HARD (approx 18 activities) ──
      {
        type: "open-response",
        title: "Place Value in Decimals",
        instruction: "Write the value of the underlined digit.",
        prompts: [
          { text: "In 0.47, what is the value of the 4?", type: "lines", lines: 1 },
          { text: "In 0.83, what is the value of the 3?", type: "lines", lines: 1 },
          { text: "In 0.56, what is the value of the 5?", type: "lines", lines: 1 },
          { text: "In 0.19, what is the value of the 9?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Place Value Quiz",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "In 0.36, the 3 means:", options: ["3 ones", "3 tenths", "3 hundredths"] },
          { prompt: "In 0.36, the 6 means:", options: ["6 ones", "6 tenths", "6 hundredths"] },
          { prompt: "In 0.08, the 8 means:", options: ["8 ones", "8 tenths", "8 hundredths"] },
          { prompt: "In 0.90, the 9 means:", options: ["9 ones", "9 tenths", "9 hundredths"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort Decimals: Less or Greater Than 0.50",
        instruction: "Sort each decimal into the correct column.",
        columns: ["Less than 0.50", "Greater than or equal to 0.50"],
        items: [
          { label: "0.35" },
          { label: "0.72" },
          { label: "0.50" },
          { label: "0.08" },
          { label: "0.91" },
          { label: "0.49" },
          { label: "0.63" },
          { label: "0.17" },
        ],
      },
      {
        type: "matching",
        title: "Match Decimals to Real Life",
        instruction: "Draw a line to match each decimal to a real-life example.",
        left: ["0.5", "0.25", "0.1", "0.75", "0.01"],
        right: ["one cent from a dollar", "half of something", "three-quarters full", "one-tenth of a metre", "a quarter of a pie"],
      },
      {
        type: "open-response",
        title: "Convert Between Fractions and Decimals",
        instruction: "Write the equivalent fraction or decimal.",
        prompts: [
          { text: "0.25 = ___/100", type: "lines", lines: 1 },
          { text: "50/100 = 0.___", type: "lines", lines: 1 },
          { text: "0.75 = ___/100", type: "lines", lines: 1 },
          { text: "33/100 = 0.___", type: "lines", lines: 1 },
          { text: "0.10 = ___/100", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Order These Decimals",
        instruction: "Write the decimals in order from smallest to largest.",
        prompts: [
          { text: "0.5, 0.2, 0.8, 0.1 → ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "0.35, 0.53, 0.05, 0.30 → ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "0.99, 0.09, 0.90, 0.19 → ___, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Decimal Word Problems",
        instruction: "Read each problem and circle the correct answer.",
        questions: [
          { prompt: "Sam drank 0.3 of a litre. How many tenths is that?", options: ["3 tenths", "30 tenths", "0.3 tenths"] },
          { prompt: "A ribbon is 0.75 m long. Is it more or less than half a metre?", options: ["More", "Less", "Exactly half"] },
          { prompt: "Mia ran 0.5 km and Jake ran 0.50 km. Who ran further?", options: ["Mia", "Jake", "They ran the same distance"] },
        ],
      },
      {
        type: "open-response",
        title: "Decimal Reasoning",
        instruction: "Answer each question. Show your thinking.",
        prompts: [
          { text: "Is 0.5 the same as 0.50? Explain why or why not.", type: "lines", lines: 2 },
          { text: "Write a decimal between 0.3 and 0.4. How do you know it is between them?", type: "lines", lines: 2 },
          { text: "A jug is 0.6 full. How much more water is needed to fill it to 1.0?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems with Decimals",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A cake is cut into 10 equal pieces. You eat 3 pieces. What decimal of the cake did you eat?", type: "lines", lines: 2 },
          { text: "A bar of chocolate has 100 squares. You eat 25 squares. What decimal did you eat?", type: "lines", lines: 2 },
          { text: "A swimming pool is 0.8 full. Is it nearly full or nearly empty? Explain.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Decimal Puzzles",
        instruction: "Solve these tricky decimal puzzles.",
        prompts: [
          { text: "I am a decimal in tenths. I am greater than 0.6 but less than 0.8. What am I?", type: "lines", lines: 1 },
          { text: "I am a decimal in hundredths. My digits add up to 10 and I am less than 0.50. What could I be?", type: "lines", lines: 2 },
          { text: "Write three different decimals that are all between 0.1 and 0.2.", type: "lines", lines: 2 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Decimals in Real Life",
        instruction: "Find decimals around your home!",
        suggestions: [
          "Look at price tags — write down three prices and circle the tenths and hundredths digits.",
          "Measure your height in metres. Write it as a decimal (e.g. 1.35 m).",
          "Check the temperature on a weather app. Is the decimal in tenths or hundredths?",
          "Find a food label. Write any decimal numbers you can see.",
        ],
      },
    ],
  },

  // ── WS 2: Multiply by Multiples of 10 ──────────────────────────────────
  {
    slug: "multiply-by-multiples-of-10",
    title: "Multiply by Multiples of 10",
    strand: "Number",
    description:
      "Multiply natural numbers by multiples of 10",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "number-trace",
        title: "Trace Multiples of 10",
        instruction: "Trace each multiple of 10 carefully.",
        numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
      {
        type: "sequence",
        title: "Skip Count by 10s (Set A)",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [10, 20, 0, 40, 50], answer: [30] },
          { items: [50, 60, 0, 80, 90], answer: [70] },
          { items: [0, 20, 30, 40, 0], answer: [10, 50] },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count by 10s (Set B)",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [30, 60, 0, 120, 150], answer: [90] },
          { items: [20, 40, 0, 80, 0], answer: [60, 100] },
          { items: [0, 100, 150, 200, 0], answer: [50, 250] },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count by 20s",
        instruction: "Fill in the missing numbers. Each step adds 20.",
        sequences: [
          { items: [20, 40, 0, 80, 100], answer: [60] },
          { items: [0, 40, 60, 80, 0], answer: [20, 100] },
          { items: [60, 80, 100, 0, 140], answer: [120] },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count by 50s",
        instruction: "Fill in the missing numbers. Each step adds 50.",
        sequences: [
          { items: [50, 100, 0, 200, 250], answer: [150] },
          { items: [0, 100, 150, 200, 0], answer: [50, 250] },
          { items: [100, 150, 200, 0, 300], answer: [250] },
        ],
      },
      {
        type: "matching",
        title: "Match × 10 Facts",
        instruction: "Draw a line from each multiplication to its answer.",
        left: ["3 × 10", "7 × 10", "5 × 10", "9 × 10", "1 × 10"],
        right: ["50", "10", "90", "30", "70"],
      },
      {
        type: "matching",
        title: "Match × 20 Facts",
        instruction: "Draw a line from each multiplication to its answer.",
        left: ["2 × 20", "5 × 20", "4 × 20", "3 × 20", "6 × 20"],
        right: ["80", "60", "40", "120", "100"],
      },
      {
        type: "matching",
        title: "Match × 30 Facts",
        instruction: "Draw a line from each multiplication to its answer.",
        left: ["3 × 30", "2 × 30", "5 × 30", "4 × 30", "7 × 30"],
        right: ["150", "120", "90", "210", "60"],
      },
      {
        type: "circle-correct",
        title: "Quick × 10 (Set A)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "4 × 10 = ?", options: ["40", "14", "400"] },
          { prompt: "6 × 10 = ?", options: ["16", "60", "600"] },
          { prompt: "8 × 10 = ?", options: ["80", "18", "800"] },
          { prompt: "2 × 10 = ?", options: ["12", "20", "200"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick × 10 (Set B)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "11 × 10 = ?", options: ["110", "21", "1100"] },
          { prompt: "12 × 10 = ?", options: ["22", "120", "1200"] },
          { prompt: "15 × 10 = ?", options: ["25", "150", "1500"] },
          { prompt: "10 × 10 = ?", options: ["20", "100", "1000"] },
        ],
      },
      {
        type: "number-bonds",
        title: "× 10 Fact Bonds (Set A)",
        instruction: "Find the missing number. The total is the product.",
        bonds: [
          { total: 50, partA: 5, partB: null },
          { total: 90, partA: null, partB: 10 },
          { total: 70, partA: 7, partB: null },
          { total: 30, partA: null, partB: 10 },
          { total: 120, partA: 12, partB: null },
        ],
      },
      {
        type: "count-objects",
        title: "Groups of 10 (Stars)",
        instruction: "Count the groups of 10. Write the total.",
        rows: [
          { object: "star", count: 10 },
          { object: "star", count: 20 },
          { object: "star", count: 30 },
        ],
      },
      {
        type: "count-objects",
        title: "Groups of 10 (Apples)",
        instruction: "Count the groups of 10. Write the total.",
        rows: [
          { object: "apple", count: 20 },
          { object: "apple", count: 40 },
          { object: "apple", count: 50 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False? (× 10)",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "3 × 10 = 30", options: ["TRUE", "FALSE"] },
          { prompt: "5 × 20 = 50", options: ["TRUE", "FALSE"] },
          { prompt: "4 × 30 = 120", options: ["TRUE", "FALSE"] },
          { prompt: "7 × 10 = 700", options: ["TRUE", "FALSE"] },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "circle-correct",
        title: "Choose the Correct Product (Set A)",
        instruction: "Circle the correct answer for each multiplication.",
        questions: [
          { prompt: "8 × 30 = ?", options: ["24", "240", "2400"] },
          { prompt: "5 × 60 = ?", options: ["30", "300", "3000"] },
          { prompt: "9 × 40 = ?", options: ["36", "360", "3600"] },
          { prompt: "12 × 20 = ?", options: ["24", "240", "2400"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Product (Set B)",
        instruction: "Circle the correct answer for each multiplication.",
        questions: [
          { prompt: "7 × 30 = ?", options: ["21", "210", "2100"] },
          { prompt: "6 × 40 = ?", options: ["24", "240", "2400"] },
          { prompt: "4 × 50 = ?", options: ["20", "200", "2000"] },
          { prompt: "3 × 80 = ?", options: ["24", "240", "2400"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Multiplication (Mixed)",
        instruction: "Draw a line from each multiplication to its answer.",
        left: ["5 × 20", "3 × 40", "7 × 10", "4 × 30", "6 × 50"],
        right: ["70", "120", "100", "300", "120"],
      },
      {
        type: "matching",
        title: "Match Bigger Multiplications",
        instruction: "Draw a line from each multiplication to its answer.",
        left: ["8 × 50", "6 × 30", "9 × 20", "5 × 40", "7 × 60"],
        right: ["180", "200", "400", "420", "180"],
      },
      {
        type: "number-bonds",
        title: "Multiply and Complete (Set A)",
        instruction: "Find the missing numbers.",
        bonds: [
          { total: 150, partA: 5, partB: null },
          { total: 280, partA: 7, partB: null },
          { total: 360, partA: null, partB: 40 },
          { total: 450, partA: 9, partB: null },
          { total: 200, partA: null, partB: 50 },
        ],
      },
      {
        type: "number-bonds",
        title: "Multiply and Complete (Set B)",
        instruction: "Find the missing numbers.",
        bonds: [
          { total: 240, partA: 8, partB: null },
          { total: 180, partA: null, partB: 30 },
          { total: 400, partA: 10, partB: null },
          { total: 350, partA: 7, partB: null },
          { total: 480, partA: null, partB: 60 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is the Same?",
        instruction: "Circle the multiplication that gives the same answer.",
        questions: [
          { prompt: "5 × 40 is the same as:", options: ["50 × 4", "5 × 4", "500 × 4"] },
          { prompt: "3 × 60 is the same as:", options: ["30 × 6", "3 × 6", "300 × 6"] },
          { prompt: "7 × 20 is the same as:", options: ["7 × 2", "70 × 2", "700 × 2"] },
          { prompt: "9 × 30 is the same as:", options: ["9 × 3", "90 × 3", "90 × 30"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort Products: Less or Greater Than 200",
        instruction: "Work out each product and sort it.",
        columns: ["Less than 200", "200 or more"],
        items: [
          { label: "3 × 50 = ?" },
          { label: "6 × 40 = ?" },
          { label: "4 × 30 = ?" },
          { label: "8 × 20 = ?" },
          { label: "5 × 50 = ?" },
          { label: "9 × 30 = ?" },
        ],
      },
      {
        type: "open-response",
        title: "Solve × 20 Problems",
        instruction: "Work out each multiplication. Show your working.",
        prompts: [
          { text: "14 × 20 = ___", type: "lines", lines: 2 },
          { text: "16 × 20 = ___", type: "lines", lines: 2 },
          { text: "23 × 20 = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Solve × 30 Problems",
        instruction: "Work out each multiplication. Show your working.",
        prompts: [
          { text: "15 × 30 = ___", type: "lines", lines: 2 },
          { text: "13 × 30 = ___", type: "lines", lines: 2 },
          { text: "21 × 30 = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Solve × 40 and × 50 Problems",
        instruction: "Work out each multiplication. Show your working.",
        prompts: [
          { text: "25 × 40 = ___", type: "lines", lines: 2 },
          { text: "18 × 50 = ___", type: "lines", lines: 2 },
          { text: "12 × 40 = ___", type: "lines", lines: 2 },
        ],
      },
      // ── HARD (approx 18 activities) ──
      {
        type: "circle-correct",
        title: "Spot the Error",
        instruction: "One answer is wrong. Circle the INCORRECT one.",
        questions: [
          { prompt: "Which is WRONG?", options: ["6 × 30 = 180", "7 × 20 = 160", "5 × 40 = 200"] },
          { prompt: "Which is WRONG?", options: ["9 × 50 = 450", "8 × 30 = 240", "4 × 60 = 200"] },
          { prompt: "Which is WRONG?", options: ["3 × 70 = 210", "5 × 80 = 400", "12 × 20 = 220"] },
        ],
      },
      {
        type: "open-response",
        title: "Two-Digit × Multiples of 10",
        instruction: "Solve these harder multiplications. Show your strategy.",
        prompts: [
          { text: "32 × 20 = ___", type: "lines", lines: 2 },
          { text: "45 × 30 = ___", type: "lines", lines: 2 },
          { text: "28 × 40 = ___", type: "lines", lines: 2 },
          { text: "16 × 50 = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems (× Multiples of 10) – Set A",
        instruction: "Write a number sentence and solve each problem.",
        prompts: [
          { text: "A school orders 30 boxes of pencils. Each box has 12 pencils. How many pencils altogether?", type: "lines", lines: 2 },
          { text: "A baker makes 20 trays of muffins. Each tray holds 15 muffins. How many muffins in total?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems (× Multiples of 10) – Set B",
        instruction: "Write a number sentence and solve each problem.",
        prompts: [
          { text: "There are 40 rows of seats. Each row has 25 seats. How many seats altogether?", type: "lines", lines: 2 },
          { text: "A truck carries 50 cartons. Each carton weighs 18 kg. What is the total weight?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Find the Missing Factor",
        instruction: "Work out what number goes in the gap.",
        prompts: [
          { text: "___ × 20 = 260", type: "lines", lines: 2 },
          { text: "___ × 30 = 450", type: "lines", lines: 2 },
          { text: "___ × 50 = 600", type: "lines", lines: 2 },
          { text: "___ × 40 = 360", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own × 10 Problems",
        instruction: "Write your own multiplication problems using multiples of 10.",
        prompts: [
          { text: "Write a word problem that uses × 20:", type: "lines", lines: 3 },
          { text: "Write a word problem that uses × 50:", type: "lines", lines: 3 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Multiples of 10 Hunt",
        instruction: "Practise multiplying by multiples of 10 at home!",
        suggestions: [
          "If a pack of biscuits has 20 biscuits, how many in 6 packs? In 9 packs?",
          "A box holds 30 crayons. How many crayons are in 5 boxes? 8 boxes?",
          "Count by 50s to 500. Write the numbers down.",
          "Ask a family member to give you a number. Multiply it by 10, 20 and 30.",
        ],
      },
    ],
  },

  // ── WS 3: Efficient Four Operations ──────────────────────────────────
  {
    slug: "efficient-four-operations",
    title: "Efficient Strategies for +, −, × and ÷",
    strand: "Number",
    description:
      "Add, subtract, multiply and divide numbers efficiently using known facts",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "number-bonds",
        title: "Addition Fact Families (Set A)",
        instruction: "Use fact families to fill in the missing numbers.",
        bonds: [
          { total: 56, partA: 28, partB: null },
          { total: 93, partA: null, partB: 47 },
          { total: 125, partA: 68, partB: null },
          { total: 150, partA: null, partB: 75 },
          { total: 204, partA: 99, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Addition Fact Families (Set B)",
        instruction: "Fill in the missing numbers.",
        bonds: [
          { total: 45, partA: 19, partB: null },
          { total: 80, partA: null, partB: 36 },
          { total: 100, partA: 52, partB: null },
          { total: 73, partA: null, partB: 28 },
          { total: 160, partA: 85, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Subtraction Fact Families",
        instruction: "Find the missing number. Total minus one part gives the other.",
        bonds: [
          { total: 64, partA: 27, partB: null },
          { total: 90, partA: null, partB: 35 },
          { total: 110, partA: 48, partB: null },
          { total: 200, partA: null, partB: 87 },
          { total: 175, partA: 96, partB: null },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Mental Addition (Set A)",
        instruction: "Use known facts to work out each answer quickly. Circle the correct answer.",
        questions: [
          { prompt: "25 + 25 = ?", options: ["45", "50", "55"] },
          { prompt: "30 + 18 = ?", options: ["38", "48", "58"] },
          { prompt: "45 + 15 = ?", options: ["50", "55", "60"] },
          { prompt: "36 + 24 = ?", options: ["50", "60", "70"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Mental Addition (Set B)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "48 + 35 = ?", options: ["73", "83", "93"] },
          { prompt: "156 + 44 = ?", options: ["190", "200", "210"] },
          { prompt: "275 + 125 = ?", options: ["390", "400", "410"] },
          { prompt: "367 + 233 = ?", options: ["590", "600", "610"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Mental Subtraction (Set A)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "50 − 18 = ?", options: ["22", "32", "42"] },
          { prompt: "75 − 25 = ?", options: ["40", "50", "60"] },
          { prompt: "100 − 37 = ?", options: ["53", "63", "73"] },
          { prompt: "60 − 24 = ?", options: ["34", "36", "46"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Mental Subtraction (Set B)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "83 − 27 = ?", options: ["46", "56", "66"] },
          { prompt: "200 − 65 = ?", options: ["125", "135", "145"] },
          { prompt: "500 − 175 = ?", options: ["315", "325", "335"] },
          { prompt: "1000 − 450 = ?", options: ["540", "550", "560"] },
        ],
      },
      {
        type: "matching",
        title: "Match Related Facts (Addition/Subtraction)",
        instruction: "Draw a line to match each addition to the related subtraction.",
        left: ["25 + 75 = 100", "48 + 52 = 100", "36 + 64 = 100", "17 + 83 = 100"],
        right: ["100 − 36 = 64", "100 − 25 = 75", "100 − 17 = 83", "100 − 48 = 52"],
      },
      {
        type: "matching",
        title: "Match Multiplication and Division Facts",
        instruction: "Draw a line to match each fact to a related fact.",
        left: ["7 × 8 = 56", "9 × 6 = 54", "12 × 5 = 60", "8 × 4 = 32"],
        right: ["60 ÷ 5 = 12", "32 ÷ 8 = 4", "56 ÷ 7 = 8", "54 ÷ 9 = 6"],
      },
      {
        type: "circle-correct",
        title: "Times Tables Quick Recall (× 6)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "6 × 3 = ?", options: ["12", "18", "24"] },
          { prompt: "6 × 7 = ?", options: ["36", "42", "48"] },
          { prompt: "6 × 9 = ?", options: ["48", "54", "56"] },
          { prompt: "6 × 12 = ?", options: ["62", "66", "72"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Times Tables Quick Recall (× 7)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "7 × 4 = ?", options: ["21", "28", "35"] },
          { prompt: "7 × 6 = ?", options: ["36", "42", "49"] },
          { prompt: "7 × 8 = ?", options: ["49", "54", "56"] },
          { prompt: "7 × 9 = ?", options: ["56", "63", "72"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Times Tables Quick Recall (× 8)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "8 × 3 = ?", options: ["18", "24", "32"] },
          { prompt: "8 × 5 = ?", options: ["35", "40", "45"] },
          { prompt: "8 × 8 = ?", options: ["56", "64", "72"] },
          { prompt: "8 × 9 = ?", options: ["63", "72", "81"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Times Tables Quick Recall (× 9)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "9 × 4 = ?", options: ["27", "36", "45"] },
          { prompt: "9 × 6 = ?", options: ["48", "54", "63"] },
          { prompt: "9 × 7 = ?", options: ["56", "63", "72"] },
          { prompt: "9 × 11 = ?", options: ["90", "99", "108"] },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "sequence",
        title: "Multiplication Fact Chains (× 6)",
        instruction: "Fill in the missing products. Each step adds 6.",
        sequences: [
          { items: [6, 12, 0, 24, 30], answer: [18] },
          { items: [36, 42, 0, 54, 60], answer: [48] },
          { items: [0, 12, 18, 24, 0], answer: [6, 30] },
        ],
      },
      {
        type: "sequence",
        title: "Multiplication Fact Chains (× 7)",
        instruction: "Fill in the missing products. Each step adds 7.",
        sequences: [
          { items: [7, 14, 0, 28, 35], answer: [21] },
          { items: [0, 42, 49, 56, 0], answer: [35, 63] },
          { items: [21, 28, 0, 42, 49], answer: [35] },
        ],
      },
      {
        type: "sequence",
        title: "Multiplication Fact Chains (× 8)",
        instruction: "Fill in the missing products. Each step adds 8.",
        sequences: [
          { items: [8, 16, 24, 0, 40], answer: [32] },
          { items: [0, 16, 24, 32, 0], answer: [8, 40] },
          { items: [48, 56, 0, 72, 80], answer: [64] },
        ],
      },
      {
        type: "sequence",
        title: "Multiplication Fact Chains (× 9)",
        instruction: "Fill in the missing products. Each step adds 9.",
        sequences: [
          { items: [9, 18, 0, 36, 45], answer: [27] },
          { items: [45, 54, 0, 72, 81], answer: [63] },
          { items: [0, 18, 27, 36, 0], answer: [9, 45] },
        ],
      },
      {
        type: "matching",
        title: "Match Division Facts (Set A)",
        instruction: "Draw a line from each division to its answer.",
        left: ["56 ÷ 8", "63 ÷ 9", "72 ÷ 8", "48 ÷ 6", "45 ÷ 5"],
        right: ["9", "7", "8", "9", "7"],
      },
      {
        type: "matching",
        title: "Match Division Facts (Set B)",
        instruction: "Draw a line from each division to its answer.",
        left: ["36 ÷ 4", "81 ÷ 9", "42 ÷ 7", "54 ÷ 6", "64 ÷ 8"],
        right: ["9", "6", "8", "9", "9"],
      },
      {
        type: "circle-correct",
        title: "Division Quick Recall (Set A)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "35 ÷ 7 = ?", options: ["4", "5", "6"] },
          { prompt: "48 ÷ 8 = ?", options: ["5", "6", "7"] },
          { prompt: "63 ÷ 7 = ?", options: ["7", "8", "9"] },
          { prompt: "72 ÷ 9 = ?", options: ["7", "8", "9"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Division Quick Recall (Set B)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "24 ÷ 6 = ?", options: ["3", "4", "5"] },
          { prompt: "56 ÷ 7 = ?", options: ["7", "8", "9"] },
          { prompt: "81 ÷ 9 = ?", options: ["8", "9", "10"] },
          { prompt: "36 ÷ 4 = ?", options: ["8", "9", "10"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Multiplication/Division Fact Bonds (Set A)",
        instruction: "Find the missing number.",
        bonds: [
          { total: 42, partA: 6, partB: null },
          { total: 56, partA: null, partB: 8 },
          { total: 72, partA: 9, partB: null },
          { total: 36, partA: null, partB: 4 },
          { total: 54, partA: 6, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Multiplication/Division Fact Bonds (Set B)",
        instruction: "Find the missing number.",
        bonds: [
          { total: 48, partA: null, partB: 6 },
          { total: 63, partA: 7, partB: null },
          { total: 81, partA: null, partB: 9 },
          { total: 32, partA: 4, partB: null },
          { total: 108, partA: null, partB: 12 },
        ],
      },
      {
        type: "open-response",
        title: "Division Using Known Facts (Set A)",
        instruction: "Use multiplication facts to help you divide.",
        prompts: [
          { text: "If 7 × 9 = 63, then 63 ÷ 9 = ___", type: "lines", lines: 1 },
          { text: "If 8 × 6 = 48, then 48 ÷ 8 = ___", type: "lines", lines: 1 },
          { text: "If 12 × 4 = 48, then 48 ÷ 12 = ___", type: "lines", lines: 1 },
          { text: "If 11 × 7 = 77, then 77 ÷ 11 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Division Using Known Facts (Set B)",
        instruction: "Use multiplication facts to help you divide.",
        prompts: [
          { text: "If 6 × 6 = 36, then 36 ÷ 6 = ___", type: "lines", lines: 1 },
          { text: "If 9 × 8 = 72, then 72 ÷ 9 = ___", type: "lines", lines: 1 },
          { text: "If 5 × 12 = 60, then 60 ÷ 5 = ___", type: "lines", lines: 1 },
          { text: "If 4 × 9 = 36, then 36 ÷ 4 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Easy or Hard to Do Mentally?",
        instruction: "Sort each calculation.",
        columns: ["Easy to do mentally", "Harder — may need a strategy"],
        items: [
          { label: "25 + 25" },
          { label: "347 + 289" },
          { label: "100 − 50" },
          { label: "456 − 178" },
          { label: "6 × 5" },
          { label: "37 × 8" },
        ],
      },
      {
        type: "circle-correct",
        title: "Addition Strategies",
        instruction: "Circle the BEST strategy for each addition.",
        questions: [
          { prompt: "99 + 56: best strategy is:", options: ["Count on by 1s", "Add 100, subtract 1", "Use a calculator"] },
          { prompt: "48 + 52: best strategy is:", options: ["Count on by 1s", "Make a friendly number (50 + 50)", "Draw a picture"] },
          { prompt: "25 + 25 + 25: best strategy is:", options: ["Add 25 three times", "Use 3 × 25", "Count on by 1s"] },
        ],
      },
      // ── HARD (approx 18 activities) ──
      {
        type: "open-response",
        title: "Multi-Step Problems (Set A)",
        instruction: "Use efficient strategies. Show your working.",
        prompts: [
          { text: "256 + 144 = ___", type: "lines", lines: 2 },
          { text: "500 − 237 = ___", type: "lines", lines: 2 },
          { text: "8 × 7 + 6 × 9 = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Multi-Step Problems (Set B)",
        instruction: "Use efficient strategies. Show your working.",
        prompts: [
          { text: "375 + 225 = ___", type: "lines", lines: 2 },
          { text: "1000 − 463 = ___", type: "lines", lines: 2 },
          { text: "72 ÷ 8 + 63 ÷ 9 = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems Using All Four Operations",
        instruction: "Write a number sentence and solve.",
        prompts: [
          { text: "There are 8 rows of 7 chairs. How many chairs in total?", type: "lines", lines: 2 },
          { text: "A farmer has 96 eggs. He puts them equally into 8 cartons. How many in each?", type: "lines", lines: 2 },
          { text: "A shop sells 45 apples on Monday and 38 on Tuesday. How many altogether?", type: "lines", lines: 2 },
          { text: "Ben has 200 stickers. He gives away 75. How many are left?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Operation",
        instruction: "Circle the correct operation to solve each problem.",
        questions: [
          { prompt: "5 bags of 12 oranges — to find the total:", options: ["5 + 12", "5 × 12", "12 − 5"] },
          { prompt: "60 lollies shared among 5 children:", options: ["60 + 5", "60 − 5", "60 ÷ 5"] },
          { prompt: "Had 85 cards, lost 23:", options: ["85 + 23", "85 − 23", "85 × 23"] },
          { prompt: "7 children each bring 9 cupcakes:", options: ["7 + 9", "7 × 9", "9 − 7"] },
        ],
      },
      {
        type: "open-response",
        title: "Write a Fact Family",
        instruction: "Write all four related facts for each set of numbers.",
        prompts: [
          { text: "Use the numbers 6, 8 and 48:", type: "lines", lines: 4 },
          { text: "Use the numbers 7, 9 and 63:", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Missing Operations",
        instruction: "Fill in the missing operation symbol: +, −, × or ÷.",
        prompts: [
          { text: "8 ___ 7 = 56", type: "lines", lines: 1 },
          { text: "63 ___ 9 = 7", type: "lines", lines: 1 },
          { text: "125 ___ 75 = 200", type: "lines", lines: 1 },
          { text: "300 ___ 150 = 150", type: "lines", lines: 1 },
          { text: "9 ___ 9 = 81", type: "lines", lines: 1 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Fact Family Practice",
        instruction: "Practise using number facts efficiently at home!",
        suggestions: [
          "Write a multiplication fact (e.g. 6 × 7 = 42). Now write three related facts using the same numbers.",
          "Time yourself answering 10 multiplication facts. Try to beat your time each day!",
          "Pick a number under 100. How many different ways can you make it using +, −, × or ÷?",
          "Play 'I say a product, you say the factors' with a family member.",
        ],
      },
    ],
  },

  // ── WS 4: Rounding and Estimation ──────────────────────────────────
  {
    slug: "rounding-estimation",
    title: "Rounding & Estimation",
    strand: "Number",
    description:
      "Use rounding and estimation to check the reasonableness of calculations",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "circle-correct",
        title: "Round to the Nearest 10 (Set A)",
        instruction: "Circle the correct answer when rounding to the nearest 10.",
        questions: [
          { prompt: "Round 23 to the nearest 10", options: ["20", "30", "25"] },
          { prompt: "Round 47 to the nearest 10", options: ["40", "50", "45"] },
          { prompt: "Round 61 to the nearest 10", options: ["60", "70", "65"] },
          { prompt: "Round 85 to the nearest 10", options: ["80", "90", "85"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Round to the Nearest 10 (Set B)",
        instruction: "Circle the correct answer when rounding to the nearest 10.",
        questions: [
          { prompt: "Round 34 to the nearest 10", options: ["30", "40", "35"] },
          { prompt: "Round 78 to the nearest 10", options: ["70", "80", "75"] },
          { prompt: "Round 125 to the nearest 10", options: ["120", "130", "125"] },
          { prompt: "Round 556 to the nearest 10", options: ["550", "560", "555"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Round to the Nearest 10 (Set C)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Round 15 to the nearest 10", options: ["10", "20", "15"] },
          { prompt: "Round 95 to the nearest 10", options: ["90", "100", "95"] },
          { prompt: "Round 245 to the nearest 10", options: ["240", "250", "245"] },
          { prompt: "Round 999 to the nearest 10", options: ["990", "1000", "1010"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Round to the Nearest 100 (Set A)",
        instruction: "Circle the correct answer when rounding to the nearest 100.",
        questions: [
          { prompt: "Round 238 to the nearest 100", options: ["200", "300", "230"] },
          { prompt: "Round 472 to the nearest 100", options: ["400", "500", "470"] },
          { prompt: "Round 850 to the nearest 100", options: ["800", "900", "850"] },
          { prompt: "Round 149 to the nearest 100", options: ["100", "200", "150"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Round to the Nearest 100 (Set B)",
        instruction: "Circle the correct answer when rounding to the nearest 100.",
        questions: [
          { prompt: "Round 550 to the nearest 100", options: ["500", "600", "550"] },
          { prompt: "Round 723 to the nearest 100", options: ["700", "800", "720"] },
          { prompt: "Round 1,347 to the nearest 100", options: ["1,300", "1,400", "1,350"] },
          { prompt: "Round 1,950 to the nearest 100", options: ["1,900", "2,000", "1,950"] },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers to Rounded Values (Nearest 10)",
        instruction: "Draw a line from each number to its value rounded to the nearest 10.",
        left: ["23", "47", "65", "88", "14"],
        right: ["90", "70", "20", "50", "10"],
      },
      {
        type: "matching",
        title: "Match Numbers to Rounded Values (Nearest 100)",
        instruction: "Draw a line from each number to its value rounded to the nearest 100.",
        left: ["267", "450", "819", "135", "672"],
        right: ["100", "300", "500", "700", "800"],
      },
      {
        type: "sorting",
        title: "Sort: Rounds Up or Rounds Down? (Nearest 10)",
        instruction: "When rounding to the nearest 10, does the number round up or down?",
        columns: ["Rounds down", "Rounds up"],
        items: [
          { label: "32" },
          { label: "78" },
          { label: "45" },
          { label: "14" },
          { label: "67" },
          { label: "91" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Rounds Up or Rounds Down? (Nearest 100)",
        instruction: "When rounding to the nearest 100, does the number round up or down?",
        columns: ["Rounds down", "Rounds up"],
        items: [
          { label: "230" },
          { label: "780" },
          { label: "450" },
          { label: "120" },
          { label: "670" },
          { label: "950" },
        ],
      },
      {
        type: "number-bonds",
        title: "Round Then Add (Nearest 10)",
        instruction: "Round each part to the nearest 10, then add. The total is the estimate.",
        bonds: [
          { total: 80, partA: 38, partB: null },
          { total: 90, partA: null, partB: 43 },
          { total: 120, partA: 57, partB: null },
          { total: 100, partA: null, partB: 52 },
        ],
      },
      {
        type: "circle-correct",
        title: "Rounding Rules",
        instruction: "Circle the correct answer about rounding.",
        questions: [
          { prompt: "When the ones digit is 5, we round:", options: ["Down", "Up", "Stay the same"] },
          { prompt: "When the ones digit is 3, we round:", options: ["Down", "Up", "Stay the same"] },
          { prompt: "When the ones digit is 8, we round:", options: ["Down", "Up", "Stay the same"] },
          { prompt: "When rounding 350 to the nearest 100, we get:", options: ["300", "400", "350"] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False? (Rounding)",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "47 rounded to the nearest 10 is 50", options: ["TRUE", "FALSE"] },
          { prompt: "342 rounded to the nearest 100 is 400", options: ["TRUE", "FALSE"] },
          { prompt: "65 rounded to the nearest 10 is 60", options: ["TRUE", "FALSE"] },
          { prompt: "750 rounded to the nearest 100 is 800", options: ["TRUE", "FALSE"] },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "matching",
        title: "Match the Estimate (Addition)",
        instruction: "Round each number to the nearest 100 and match to the estimated sum.",
        left: ["312 + 489", "725 − 298", "195 + 406", "867 − 512"],
        right: ["600", "400", "800", "400"],
      },
      {
        type: "matching",
        title: "Match the Estimate (Multiplication)",
        instruction: "Round to make the multiplication easier, then match.",
        left: ["19 × 5", "31 × 4", "48 × 2", "11 × 9"],
        right: ["100", "100", "120", "100"],
      },
      {
        type: "circle-correct",
        title: "Estimate the Sum (Set A)",
        instruction: "Round each number to the nearest 10, then estimate the sum.",
        questions: [
          { prompt: "38 + 51 ≈ ?", options: ["80", "90", "100"] },
          { prompt: "27 + 64 ≈ ?", options: ["80", "90", "100"] },
          { prompt: "73 + 48 ≈ ?", options: ["110", "120", "130"] },
          { prompt: "86 + 35 ≈ ?", options: ["110", "120", "130"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Estimate the Sum (Set B)",
        instruction: "Round each number to the nearest 100, then estimate.",
        questions: [
          { prompt: "312 + 489 ≈ ?", options: ["700", "800", "900"] },
          { prompt: "147 + 263 ≈ ?", options: ["300", "400", "500"] },
          { prompt: "561 + 438 ≈ ?", options: ["900", "1000", "1100"] },
          { prompt: "823 + 179 ≈ ?", options: ["900", "1000", "1100"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Estimate the Difference (Set A)",
        instruction: "Round to the nearest 10, then estimate the difference.",
        questions: [
          { prompt: "82 − 29 ≈ ?", options: ["40", "50", "60"] },
          { prompt: "97 − 43 ≈ ?", options: ["50", "60", "70"] },
          { prompt: "61 − 18 ≈ ?", options: ["40", "50", "60"] },
          { prompt: "78 − 32 ≈ ?", options: ["40", "50", "60"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Estimate the Difference (Set B)",
        instruction: "Round to the nearest 100, then estimate.",
        questions: [
          { prompt: "789 − 312 ≈ ?", options: ["400", "500", "600"] },
          { prompt: "945 − 478 ≈ ?", options: ["400", "500", "600"] },
          { prompt: "1,230 − 680 ≈ ?", options: ["500", "600", "700"] },
          { prompt: "2,100 − 890 ≈ ?", options: ["1,100", "1,200", "1,300"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Is It Reasonable? (Set A)",
        instruction: "Use estimation to decide if the answer is reasonable. Circle YES or NO.",
        questions: [
          { prompt: "398 + 211 = 609. Reasonable?", options: ["YES", "NO"] },
          { prompt: "742 − 289 = 253. Reasonable?", options: ["YES", "NO"] },
          { prompt: "505 + 497 = 1,002. Reasonable?", options: ["YES", "NO"] },
          { prompt: "830 − 419 = 611. Reasonable?", options: ["YES", "NO"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Is It Reasonable? (Set B)",
        instruction: "Use estimation to decide if the answer is reasonable.",
        questions: [
          { prompt: "199 + 203 = 402. Reasonable?", options: ["YES", "NO"] },
          { prompt: "567 − 234 = 433. Reasonable?", options: ["YES", "NO"] },
          { prompt: "8 × 49 = 292. Reasonable?", options: ["YES", "NO"] },
          { prompt: "312 + 298 = 610. Reasonable?", options: ["YES", "NO"] },
        ],
      },
      {
        type: "open-response",
        title: "Estimate, Then Calculate (Set A)",
        instruction: "First estimate by rounding, then find the exact answer.",
        prompts: [
          { text: "347 + 256: Estimate = ___ , Exact = ___", type: "lines", lines: 2 },
          { text: "891 − 438: Estimate = ___ , Exact = ___", type: "lines", lines: 2 },
          { text: "623 + 389: Estimate = ___ , Exact = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Estimate, Then Calculate (Set B)",
        instruction: "First estimate by rounding, then find the exact answer.",
        prompts: [
          { text: "478 + 323: Estimate = ___ , Exact = ___", type: "lines", lines: 2 },
          { text: "1,050 − 672: Estimate = ___ , Exact = ___", type: "lines", lines: 2 },
          { text: "836 + 164: Estimate = ___ , Exact = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Round to the Nearest 1,000",
        instruction: "Round each number to the nearest 1,000.",
        prompts: [
          { text: "Round 3,450 to the nearest 1,000: ___", type: "lines", lines: 1 },
          { text: "Round 7,890 to the nearest 1,000: ___", type: "lines", lines: 1 },
          { text: "Round 1,500 to the nearest 1,000: ___", type: "lines", lines: 1 },
          { text: "Round 9,250 to the nearest 1,000: ___", type: "lines", lines: 1 },
        ],
      },
      // ── HARD (approx 18 activities) ──
      {
        type: "open-response",
        title: "Estimation Word Problems (Set A)",
        instruction: "Estimate first, then solve. Show your working.",
        prompts: [
          { text: "A school has 387 students. 194 are girls. About how many are boys? Estimate first.", type: "lines", lines: 2 },
          { text: "A baker makes 48 muffins each day. About how many in 5 days? Estimate first.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Estimation Word Problems (Set B)",
        instruction: "Estimate first, then solve.",
        prompts: [
          { text: "A shop sold 312 items on Saturday and 289 on Sunday. About how many altogether?", type: "lines", lines: 2 },
          { text: "A pool holds 1,250 litres. 478 litres have been drained. About how many litres are left?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Best Estimate for Multiplication",
        instruction: "Use rounding to find the best estimate.",
        questions: [
          { prompt: "19 × 6 ≈ ?", options: ["100", "120", "140"] },
          { prompt: "32 × 4 ≈ ?", options: ["100", "120", "160"] },
          { prompt: "49 × 5 ≈ ?", options: ["200", "250", "300"] },
          { prompt: "98 × 3 ≈ ?", options: ["270", "300", "330"] },
        ],
      },
      {
        type: "open-response",
        title: "Was the Estimate Close?",
        instruction: "Estimate, then calculate. How close was your estimate?",
        prompts: [
          { text: "52 × 8: Estimate = ___, Exact = ___, Difference = ___", type: "lines", lines: 2 },
          { text: "297 + 405: Estimate = ___, Exact = ___, Difference = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: When Is Estimation Useful?",
        instruction: "Answer these thinking questions.",
        prompts: [
          { text: "Give an example of when you would estimate instead of finding the exact answer.", type: "lines", lines: 2 },
          { text: "You estimate 48 + 53 ≈ 100. The exact answer is 101. Is this a good estimate? Why?", type: "lines", lines: 2 },
          { text: "Why might two people get different estimates for the same calculation?", type: "lines", lines: 2 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Estimation in Everyday Life",
        instruction: "Practise estimating in real situations!",
        suggestions: [
          "At the shops, round each price to the nearest dollar. Estimate the total before paying.",
          "Estimate how many steps it takes to walk from your bedroom to the kitchen. Then count!",
          "Guess how many pages are in a book. Then check — were you close?",
          "Round your family members' ages to the nearest 10. Add them up for an estimated total.",
        ],
      },
    ],
  },

  // ── WS 5: Odd and Even Properties ──────────────────────────────────
  {
    slug: "odd-even-properties",
    title: "Odd & Even Numbers",
    strand: "Number",
    description:
      "Use properties of odd and even numbers",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "sorting",
        title: "Sort Odd and Even (Set A)",
        instruction: "Sort each number into the correct column.",
        columns: ["Even", "Odd"],
        items: [
          { label: "14" },
          { label: "27" },
          { label: "36" },
          { label: "51" },
          { label: "88" },
          { label: "103" },
          { label: "200" },
          { label: "479" },
        ],
      },
      {
        type: "sorting",
        title: "Sort Odd and Even (Set B)",
        instruction: "Sort each number into the correct column.",
        columns: ["Even", "Odd"],
        items: [
          { label: "22" },
          { label: "35" },
          { label: "40" },
          { label: "63" },
          { label: "78" },
          { label: "99" },
          { label: "156" },
          { label: "301" },
        ],
      },
      {
        type: "sorting",
        title: "Sort Odd and Even (Set C – Bigger Numbers)",
        instruction: "Sort each number. Look at the ones digit!",
        columns: ["Even", "Odd"],
        items: [
          { label: "1,234" },
          { label: "5,677" },
          { label: "8,900" },
          { label: "3,451" },
          { label: "2,468" },
          { label: "7,009" },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd or Even? (Set A)",
        instruction: "Circle whether each number is odd or even.",
        questions: [
          { prompt: "17", options: ["Odd", "Even"] },
          { prompt: "44", options: ["Odd", "Even"] },
          { prompt: "100", options: ["Odd", "Even"] },
          { prompt: "333", options: ["Odd", "Even"] },
          { prompt: "1,256", options: ["Odd", "Even"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd or Even? (Set B)",
        instruction: "Circle whether each number is odd or even.",
        questions: [
          { prompt: "58", options: ["Odd", "Even"] },
          { prompt: "71", options: ["Odd", "Even"] },
          { prompt: "206", options: ["Odd", "Even"] },
          { prompt: "999", options: ["Odd", "Even"] },
          { prompt: "4,002", options: ["Odd", "Even"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Digit Tells You?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "To tell if a number is odd or even, look at the:", options: ["First digit", "Last digit", "Middle digit"] },
          { prompt: "Even numbers always end in:", options: ["1, 3, 5, 7, 9", "0, 2, 4, 6, 8", "0, 1, 2, 3, 4"] },
          { prompt: "Odd numbers always end in:", options: ["1, 3, 5, 7, 9", "0, 2, 4, 6, 8", "2, 4, 6, 8, 0"] },
        ],
      },
      {
        type: "sequence",
        title: "Even Number Sequences",
        instruction: "Fill in the missing even numbers.",
        sequences: [
          { items: [2, 4, 0, 8, 10], answer: [6] },
          { items: [12, 14, 16, 0, 20], answer: [18] },
          { items: [0, 22, 24, 26, 0], answer: [20, 28] },
        ],
      },
      {
        type: "sequence",
        title: "Odd Number Sequences",
        instruction: "Fill in the missing odd numbers.",
        sequences: [
          { items: [1, 3, 0, 7, 9], answer: [5] },
          { items: [11, 13, 15, 0, 19], answer: [17] },
          { items: [0, 23, 25, 27, 0], answer: [21, 29] },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers to Odd/Even",
        instruction: "Draw a line from each number to ODD or EVEN.",
        left: ["56", "73", "148", "201", "990"],
        right: ["ODD", "EVEN", "ODD", "EVEN", "EVEN"],
      },
      {
        type: "count-objects",
        title: "Even Groups (Stars)",
        instruction: "Count the stars. Is the total odd or even? Write the number.",
        rows: [
          { object: "star", count: 6 },
          { object: "star", count: 8 },
          { object: "star", count: 10 },
        ],
      },
      {
        type: "count-objects",
        title: "Odd Groups (Hearts)",
        instruction: "Count the hearts. Is the total odd or even? Write the number.",
        rows: [
          { object: "heart", count: 5 },
          { object: "heart", count: 7 },
          { object: "heart", count: 9 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False? (Odd/Even Basics)",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "All even numbers can be divided by 2 with no remainder", options: ["TRUE", "FALSE"] },
          { prompt: "0 is an odd number", options: ["TRUE", "FALSE"] },
          { prompt: "The number 1,000 is even", options: ["TRUE", "FALSE"] },
          { prompt: "Every other number is odd", options: ["TRUE", "FALSE"] },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "circle-correct",
        title: "Odd + Even = ? (Addition Rules)",
        instruction: "Is the result odd or even? Circle the correct answer.",
        questions: [
          { prompt: "Even + Even = ?", options: ["Even", "Odd"] },
          { prompt: "Odd + Odd = ?", options: ["Even", "Odd"] },
          { prompt: "Even + Odd = ?", options: ["Even", "Odd"] },
          { prompt: "Odd + Even = ?", options: ["Even", "Odd"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd × Even = ? (Multiplication Rules)",
        instruction: "Is the product odd or even? Circle the correct answer.",
        questions: [
          { prompt: "Even × Even = ?", options: ["Even", "Odd"] },
          { prompt: "Odd × Odd = ?", options: ["Even", "Odd"] },
          { prompt: "Even × Odd = ?", options: ["Even", "Odd"] },
          { prompt: "Odd × Even = ?", options: ["Even", "Odd"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Subtraction: Odd or Even? (Set A)",
        instruction: "Without calculating, decide whether each result is odd or even.",
        questions: [
          { prompt: "Even − Even = ?", options: ["Even", "Odd"] },
          { prompt: "Odd − Odd = ?", options: ["Even", "Odd"] },
          { prompt: "Even − Odd = ?", options: ["Even", "Odd"] },
          { prompt: "Odd − Even = ?", options: ["Even", "Odd"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Predict: Odd or Even? (Set A)",
        instruction: "Without calculating, predict if the result is odd or even.",
        questions: [
          { prompt: "24 + 13", options: ["Odd", "Even"] },
          { prompt: "46 + 32", options: ["Odd", "Even"] },
          { prompt: "7 × 8", options: ["Odd", "Even"] },
          { prompt: "15 × 3", options: ["Odd", "Even"] },
          { prompt: "100 − 37", options: ["Odd", "Even"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Predict: Odd or Even? (Set B)",
        instruction: "Without calculating, predict if the result is odd or even.",
        questions: [
          { prompt: "55 + 45", options: ["Odd", "Even"] },
          { prompt: "33 × 2", options: ["Odd", "Even"] },
          { prompt: "81 − 40", options: ["Odd", "Even"] },
          { prompt: "12 × 11", options: ["Odd", "Even"] },
          { prompt: "99 + 1", options: ["Odd", "Even"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Predict: Odd or Even? (Set C)",
        instruction: "Without calculating, predict if the result is odd or even.",
        questions: [
          { prompt: "6 + 8 + 10", options: ["Odd", "Even"] },
          { prompt: "3 + 5 + 7", options: ["Odd", "Even"] },
          { prompt: "4 × 5 × 2", options: ["Odd", "Even"] },
          { prompt: "3 × 7 × 5", options: ["Odd", "Even"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort Results: Odd or Even?",
        instruction: "Without calculating, sort each expression.",
        columns: ["Result is even", "Result is odd"],
        items: [
          { label: "14 + 22" },
          { label: "15 + 20" },
          { label: "8 × 3" },
          { label: "9 × 7" },
          { label: "100 − 48" },
          { label: "75 − 30" },
        ],
      },
      {
        type: "number-bonds",
        title: "Odd + Odd = Even Bonds",
        instruction: "Both parts are odd. Find the missing odd number.",
        bonds: [
          { total: 20, partA: 7, partB: null },
          { total: 30, partA: null, partB: 17 },
          { total: 50, partA: 23, partB: null },
          { total: 100, partA: null, partB: 57 },
        ],
      },
      {
        type: "number-bonds",
        title: "Even + Even = Even Bonds",
        instruction: "Both parts are even. Find the missing even number.",
        bonds: [
          { total: 24, partA: 10, partB: null },
          { total: 40, partA: null, partB: 16 },
          { total: 60, partA: 28, partB: null },
          { total: 100, partA: null, partB: 46 },
        ],
      },
      {
        type: "matching",
        title: "Match Expression to Result Type",
        instruction: "Draw a line from each expression to whether the result is odd or even.",
        left: ["6 × 5", "7 × 7", "12 + 14", "15 + 8", "99 − 33"],
        right: ["Even", "Odd", "Even", "Odd", "Even"],
      },
      {
        type: "open-response",
        title: "Complete the Rule",
        instruction: "Fill in the rule for each pattern.",
        prompts: [
          { text: "Odd + Odd = _____ (odd or even?)", type: "lines", lines: 1 },
          { text: "Even × Odd = _____ (odd or even?)", type: "lines", lines: 1 },
          { text: "Odd × Odd = _____ (odd or even?)", type: "lines", lines: 1 },
          { text: "Even − Odd = _____ (odd or even?)", type: "lines", lines: 1 },
        ],
      },
      // ── HARD (approx 15 activities) ──
      {
        type: "open-response",
        title: "Explain the Pattern (Set A)",
        instruction: "Answer each question using what you know about odd and even numbers.",
        prompts: [
          { text: "Why is the sum of two even numbers always even? Give an example.", type: "lines", lines: 3 },
          { text: "Is the sum of three odd numbers odd or even? Explain why.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Explain the Pattern (Set B)",
        instruction: "Answer each question.",
        prompts: [
          { text: "Write three consecutive even numbers starting from 48.", type: "lines", lines: 1 },
          { text: "Write three consecutive odd numbers starting from 77.", type: "lines", lines: 1 },
          { text: "Is the product of an even number and any other number always even? Explain.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Odd/Even Puzzles",
        instruction: "Solve these puzzles.",
        prompts: [
          { text: "I am an even number between 40 and 50. My digits add up to 10. What am I?", type: "lines", lines: 1 },
          { text: "I am an odd number. I am a multiple of 7. I am between 20 and 30. What am I?", type: "lines", lines: 1 },
          { text: "Can the sum of 5 odd numbers ever be even? Explain.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Always, Sometimes, Never",
        instruction: "Write ALWAYS, SOMETIMES or NEVER for each statement. Explain your answer.",
        prompts: [
          { text: "The sum of two even numbers is even.", type: "lines", lines: 2 },
          { text: "The product of two odd numbers is even.", type: "lines", lines: 2 },
          { text: "An odd number minus an even number is odd.", type: "lines", lines: 2 },
          { text: "The sum of an odd and an even number is even.", type: "lines", lines: 2 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Odd & Even Investigations",
        instruction: "Investigate odd and even numbers at home!",
        suggestions: [
          "Write numbers 1–20. Colour even numbers blue and odd numbers red. What pattern do you notice?",
          "Add pairs of house numbers on your street. Are the results odd or even?",
          "Roll two dice. Add the numbers — is the total odd or even? Do this 20 times and record your results.",
          "Can you find a number that is both odd and even? Why or why not?",
        ],
      },
    ],
  },

  // ── WS 6: Equivalent Fractions & Decimals ──────────────────────────────────
  {
    slug: "equivalent-fractions-decimals",
    title: "Equivalent Fractions & Decimals",
    strand: "Number",
    description:
      "Recognise equivalent fractions and connect fraction and decimal notations",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "matching",
        title: "Match Equivalent Fractions (Set A)",
        instruction: "Draw a line from each fraction to its equivalent.",
        left: ["1/2", "2/4", "3/6", "1/3", "2/3"],
        right: ["2/6", "4/6", "5/10", "3/6", "4/8"],
      },
      {
        type: "matching",
        title: "Match Equivalent Fractions (Set B)",
        instruction: "Draw a line from each fraction to its equivalent.",
        left: ["1/4", "3/4", "2/5", "1/5", "4/5"],
        right: ["8/10", "2/10", "4/10", "2/8", "6/8"],
      },
      {
        type: "circle-correct",
        title: "Pick the Equivalent Fraction (Set A)",
        instruction: "Circle the fraction that is equivalent to the one given.",
        questions: [
          { prompt: "1/2", options: ["2/4", "2/3", "1/3"] },
          { prompt: "1/4", options: ["2/8", "2/6", "3/8"] },
          { prompt: "2/5", options: ["3/10", "4/10", "5/10"] },
          { prompt: "3/4", options: ["6/8", "6/12", "4/8"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Pick the Equivalent Fraction (Set B)",
        instruction: "Circle the fraction that is equivalent to the one given.",
        questions: [
          { prompt: "1/3", options: ["2/6", "2/4", "3/4"] },
          { prompt: "2/3", options: ["4/6", "3/6", "2/4"] },
          { prompt: "1/5", options: ["2/10", "2/5", "5/10"] },
          { prompt: "3/5", options: ["6/10", "3/10", "5/6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Same or Different Fraction? (Set A)",
        instruction: "Circle SAME if the fractions are equivalent, or DIFFERENT if not.",
        questions: [
          { prompt: "1/2 and 3/6", options: ["SAME", "DIFFERENT"] },
          { prompt: "1/3 and 2/5", options: ["SAME", "DIFFERENT"] },
          { prompt: "2/4 and 1/2", options: ["SAME", "DIFFERENT"] },
          { prompt: "3/4 and 3/8", options: ["SAME", "DIFFERENT"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Same or Different Fraction? (Set B)",
        instruction: "Circle SAME or DIFFERENT.",
        questions: [
          { prompt: "4/8 and 1/2", options: ["SAME", "DIFFERENT"] },
          { prompt: "2/6 and 1/4", options: ["SAME", "DIFFERENT"] },
          { prompt: "6/10 and 3/5", options: ["SAME", "DIFFERENT"] },
          { prompt: "2/3 and 6/9", options: ["SAME", "DIFFERENT"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Equivalent to 1/2 or Not?",
        instruction: "Sort each fraction.",
        columns: ["Equivalent to 1/2", "Not equivalent to 1/2"],
        items: [
          { label: "2/4" },
          { label: "3/5" },
          { label: "5/10" },
          { label: "4/6" },
          { label: "3/6" },
          { label: "2/3" },
          { label: "4/8" },
          { label: "1/3" },
        ],
      },
      {
        type: "matching",
        title: "Match Fractions to Decimals (Set A)",
        instruction: "Draw a line from each fraction to its decimal.",
        left: ["1/2", "1/4", "3/4", "1/10", "1/5"],
        right: ["0.25", "0.1", "0.2", "0.75", "0.5"],
      },
      {
        type: "matching",
        title: "Match Fractions to Decimals (Set B)",
        instruction: "Draw a line from each fraction to its decimal.",
        left: ["2/5", "3/10", "7/10", "1/2", "9/10"],
        right: ["0.5", "0.9", "0.4", "0.3", "0.7"],
      },
      {
        type: "circle-correct",
        title: "Fraction to Decimal (Set A)",
        instruction: "Circle the correct decimal for each fraction.",
        questions: [
          { prompt: "1/2 = ?", options: ["0.2", "0.5", "0.12"] },
          { prompt: "1/4 = ?", options: ["0.4", "0.14", "0.25"] },
          { prompt: "3/4 = ?", options: ["0.34", "0.75", "0.3"] },
          { prompt: "1/10 = ?", options: ["0.1", "0.01", "1.0"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Fraction to Decimal (Set B)",
        instruction: "Circle the correct decimal for each fraction.",
        questions: [
          { prompt: "2/10 = ?", options: ["0.2", "0.02", "2.0"] },
          { prompt: "5/10 = ?", options: ["0.5", "0.05", "5.0"] },
          { prompt: "3/5 = ?", options: ["0.35", "0.6", "0.3"] },
          { prompt: "4/5 = ?", options: ["0.45", "0.4", "0.8"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Fraction Pairs That Make 1 Whole",
        instruction: "Find the missing fraction (as a number of parts). Each pair makes a whole.",
        bonds: [
          { total: 4, partA: 1, partB: null },
          { total: 4, partA: null, partB: 1 },
          { total: 10, partA: 3, partB: null },
          { total: 10, partA: null, partB: 6 },
          { total: 8, partA: 5, partB: null },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "circle-correct",
        title: "Fraction or Decimal — Same or Different? (Set A)",
        instruction: "Circle SAME if the fraction and decimal are equal, or DIFFERENT if not.",
        questions: [
          { prompt: "1/2 and 0.5", options: ["SAME", "DIFFERENT"] },
          { prompt: "1/4 and 0.4", options: ["SAME", "DIFFERENT"] },
          { prompt: "3/10 and 0.3", options: ["SAME", "DIFFERENT"] },
          { prompt: "3/4 and 0.34", options: ["SAME", "DIFFERENT"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Fraction or Decimal — Same or Different? (Set B)",
        instruction: "Circle SAME or DIFFERENT.",
        questions: [
          { prompt: "1/5 and 0.2", options: ["SAME", "DIFFERENT"] },
          { prompt: "2/5 and 0.25", options: ["SAME", "DIFFERENT"] },
          { prompt: "7/10 and 0.7", options: ["SAME", "DIFFERENT"] },
          { prompt: "1/10 and 0.01", options: ["SAME", "DIFFERENT"] },
        ],
      },
      {
        type: "matching",
        title: "Match Mixed Fractions and Decimals",
        instruction: "Draw a line to match each fraction to its decimal equivalent.",
        left: ["25/100", "50/100", "75/100", "10/100", "1/100"],
        right: ["0.01", "0.50", "0.10", "0.25", "0.75"],
      },
      {
        type: "open-response",
        title: "Write the Equivalent (Set A)",
        instruction: "Write an equivalent fraction or decimal for each.",
        prompts: [
          { text: "Write 2/4 as a simpler fraction: ___", type: "lines", lines: 1 },
          { text: "Write 0.5 as a fraction: ___", type: "lines", lines: 1 },
          { text: "Write 6/8 as a simpler fraction: ___", type: "lines", lines: 1 },
          { text: "Write 0.75 as a fraction: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Equivalent (Set B)",
        instruction: "Write an equivalent fraction or decimal for each.",
        prompts: [
          { text: "Write 4/10 as a decimal: ___", type: "lines", lines: 1 },
          { text: "Write 0.25 as a fraction: ___", type: "lines", lines: 1 },
          { text: "Write 3/6 as a simpler fraction: ___", type: "lines", lines: 1 },
          { text: "Write 0.1 as a fraction: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Missing Numerator",
        instruction: "Fill in the missing numerator to make equivalent fractions.",
        prompts: [
          { text: "1/2 = ___/6", type: "lines", lines: 1 },
          { text: "1/3 = ___/9", type: "lines", lines: 1 },
          { text: "2/5 = ___/10", type: "lines", lines: 1 },
          { text: "3/4 = ___/8", type: "lines", lines: 1 },
          { text: "1/4 = ___/12", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Missing Denominator",
        instruction: "Fill in the missing denominator to make equivalent fractions.",
        prompts: [
          { text: "1/2 = 3/___", type: "lines", lines: 1 },
          { text: "1/3 = 2/___", type: "lines", lines: 1 },
          { text: "2/5 = 6/___", type: "lines", lines: 1 },
          { text: "3/4 = 9/___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Fractions",
        instruction: "Circle the LARGER fraction.",
        questions: [
          { prompt: "Which is larger?", options: ["1/3", "1/2"] },
          { prompt: "Which is larger?", options: ["3/4", "2/3"] },
          { prompt: "Which is larger?", options: ["2/5", "3/5"] },
          { prompt: "Which is larger?", options: ["5/8", "1/2"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort Fractions: Less or Greater Than 1/2",
        instruction: "Sort each fraction.",
        columns: ["Less than 1/2", "Equal to or greater than 1/2"],
        items: [
          { label: "1/4" },
          { label: "3/4" },
          { label: "2/5" },
          { label: "3/5" },
          { label: "1/3" },
          { label: "2/3" },
          { label: "5/10" },
          { label: "7/8" },
        ],
      },
      {
        type: "circle-correct",
        title: "Simplify the Fraction",
        instruction: "Circle the simplest form of each fraction.",
        questions: [
          { prompt: "4/8 simplified is:", options: ["1/2", "2/4", "4/8"] },
          { prompt: "6/9 simplified is:", options: ["2/3", "3/6", "6/9"] },
          { prompt: "4/6 simplified is:", options: ["2/3", "2/6", "4/6"] },
          { prompt: "5/10 simplified is:", options: ["1/2", "2/5", "5/10"] },
        ],
      },
      // ── HARD (approx 15 activities) ──
      {
        type: "open-response",
        title: "Fraction and Decimal Conversion Challenge",
        instruction: "Convert between fractions and decimals.",
        prompts: [
          { text: "Write 3/8 as a decimal (hint: what is 3 ÷ 8?):", type: "lines", lines: 2 },
          { text: "Write 0.6 as a fraction in simplest form:", type: "lines", lines: 1 },
          { text: "Write 0.125 as a fraction:", type: "lines", lines: 1 },
          { text: "Write 7/20 as a decimal:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Fraction Word Problems",
        instruction: "Solve each problem.",
        prompts: [
          { text: "A pizza is cut into 8 equal slices. You eat 4 slices. What fraction did you eat? Write it in simplest form.", type: "lines", lines: 2 },
          { text: "A jar is 3/4 full. Write this as a decimal.", type: "lines", lines: 1 },
          { text: "Tom has read 6/10 of his book. Write an equivalent fraction and the decimal.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Order Fractions and Decimals",
        instruction: "Put these numbers in order from smallest to largest.",
        prompts: [
          { text: "1/4, 0.5, 1/3, 0.75 → ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "0.1, 1/5, 0.3, 1/2 → ___, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Fraction Reasoning",
        instruction: "Answer these thinking questions.",
        prompts: [
          { text: "How do you know that 2/3 is greater than 1/2? Explain.", type: "lines", lines: 3 },
          { text: "Name three fractions equivalent to 1/2. How could you find even more?", type: "lines", lines: 3 },
          { text: "Is 0.33 exactly equal to 1/3? Why or why not?", type: "lines", lines: 3 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Fractions & Decimals Around You",
        instruction: "Explore fractions and decimals in real life!",
        suggestions: [
          "Cut a piece of bread into 4 equal pieces. Eat 2 — what fraction is left? Write it two ways.",
          "Look at a measuring cup. Find 1/2, 1/4 and 3/4. Write each as a decimal.",
          "Find prices at the shop. Which ones use .50 (that is 1/2 of a dollar)?",
          "Fold a piece of paper in half, then half again. What fraction is each section?",
        ],
      },
    ],
  },

  // ── WS 7: Fractions on a Number Line ──────────────────────────────────
  {
    slug: "fractions-number-line",
    title: "Fractions on a Number Line",
    strand: "Number",
    description:
      "Count and represent fractions on a number line",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "sequence",
        title: "Count by Halves",
        instruction: "Fill in the missing numbers. Count by halves (think: 1 = 2/2).",
        sequences: [
          { items: [0, 1, 0, 3, 4], answer: [2] },
          { items: [4, 5, 6, 0, 8], answer: [7] },
          { items: [0, 2, 3, 4, 0], answer: [1, 5] },
        ],
      },
      {
        type: "sequence",
        title: "Count by Quarters (Set A)",
        instruction: "Fill in the missing fractions (1 = 1/4, 2 = 2/4, etc.).",
        sequences: [
          { items: [0, 1, 0, 3, 4], answer: [2] },
          { items: [4, 5, 0, 7, 8], answer: [6] },
          { items: [0, 2, 3, 0, 5], answer: [1, 4] },
        ],
      },
      {
        type: "sequence",
        title: "Count by Quarters (Set B)",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [8, 9, 0, 11, 12], answer: [10] },
          { items: [0, 6, 7, 8, 0], answer: [5, 9] },
          { items: [3, 0, 5, 6, 7], answer: [4] },
        ],
      },
      {
        type: "sequence",
        title: "Count by Thirds",
        instruction: "Fill in the missing numbers (count by thirds: 1 = 1/3, 2 = 2/3, etc.).",
        sequences: [
          { items: [0, 1, 0, 3, 4], answer: [2] },
          { items: [3, 4, 0, 6, 7], answer: [5] },
          { items: [0, 2, 3, 4, 0], answer: [1, 5] },
        ],
      },
      {
        type: "matching",
        title: "Match Fractions to Number Line Positions",
        instruction: "Match each fraction to where it belongs on a number line from 0 to 1.",
        left: ["1/4", "1/2", "3/4", "1/3", "2/3"],
        right: ["halfway", "one-quarter mark", "two-thirds mark", "three-quarter mark", "one-third mark"],
      },
      {
        type: "matching",
        title: "Match Fractions to Positions (Fifths)",
        instruction: "Match each fraction to its position between 0 and 1.",
        left: ["1/5", "2/5", "3/5", "4/5"],
        right: ["near the middle", "one-fifth of the way", "four-fifths of the way", "two-fifths of the way"],
      },
      {
        type: "circle-correct",
        title: "Where on the Number Line? (Set A)",
        instruction: "Circle where this fraction belongs on a number line from 0 to 1.",
        questions: [
          { prompt: "1/2 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
          { prompt: "1/4 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
          { prompt: "3/4 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
          { prompt: "1/10 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Where on the Number Line? (Set B)",
        instruction: "Circle where this fraction belongs.",
        questions: [
          { prompt: "9/10 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
          { prompt: "1/3 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
          { prompt: "2/3 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
          { prompt: "1/8 is:", options: ["Closer to 0", "In the middle", "Closer to 1"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Fraction Is Greater? (Set A)",
        instruction: "Circle the fraction that is further along the number line (greater).",
        questions: [
          { prompt: "Which is greater?", options: ["1/4", "3/4"] },
          { prompt: "Which is greater?", options: ["2/3", "1/3"] },
          { prompt: "Which is greater?", options: ["1/2", "3/8"] },
          { prompt: "Which is greater?", options: ["5/6", "2/3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Fraction Is Greater? (Set B)",
        instruction: "Circle the greater fraction.",
        questions: [
          { prompt: "Which is greater?", options: ["2/5", "4/5"] },
          { prompt: "Which is greater?", options: ["3/8", "5/8"] },
          { prompt: "Which is greater?", options: ["1/2", "2/5"] },
          { prompt: "Which is greater?", options: ["7/10", "3/10"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Less Than or Greater Than 1/2",
        instruction: "Sort each fraction.",
        columns: ["Less than 1/2", "Equal to or greater than 1/2"],
        items: [
          { label: "1/4" },
          { label: "3/4" },
          { label: "1/3" },
          { label: "2/3" },
          { label: "3/8" },
          { label: "5/8" },
          { label: "1/2" },
          { label: "4/5" },
        ],
      },
      {
        type: "count-objects",
        title: "Fraction of a Group (Stars)",
        instruction: "Count the objects. Write how many there are.",
        rows: [
          { object: "star", count: 4 },
          { object: "star", count: 8 },
          { object: "star", count: 12 },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "sorting",
        title: "Order Fractions — Smallest to Largest (Set A)",
        instruction: "Write these fractions in order from smallest to largest.",
        columns: ["1st (smallest)", "2nd", "3rd", "4th (largest)"],
        items: [
          { label: "3/4" },
          { label: "1/4" },
          { label: "1/2" },
          { label: "1/8" },
        ],
      },
      {
        type: "sorting",
        title: "Order Fractions — Smallest to Largest (Set B)",
        instruction: "Write these fractions in order.",
        columns: ["1st (smallest)", "2nd", "3rd", "4th (largest)"],
        items: [
          { label: "2/3" },
          { label: "1/6" },
          { label: "1/2" },
          { label: "5/6" },
        ],
      },
      {
        type: "circle-correct",
        title: "Fractions Greater Than 1 (Set A)",
        instruction: "Circle whether each fraction is less than, equal to, or greater than 1.",
        questions: [
          { prompt: "5/4", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
          { prompt: "3/3", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
          { prompt: "7/8", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
          { prompt: "10/10", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Fractions Greater Than 1 (Set B)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "9/5", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
          { prompt: "4/4", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
          { prompt: "3/10", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
          { prompt: "7/3", options: ["Less than 1", "Equal to 1", "Greater than 1"] },
        ],
      },
      {
        type: "matching",
        title: "Match Fractions Between 0 and 2",
        instruction: "Match each fraction to its approximate position on a 0–2 number line.",
        left: ["1/4", "5/4", "1/2", "3/2", "2/1"],
        right: ["halfway between 1 and 2", "just past 1", "one-quarter", "halfway", "at 2"],
      },
      {
        type: "open-response",
        title: "Draw Fractions on a Number Line (Set A)",
        instruction: "Draw a number line from 0 to 1 and mark each fraction.",
        prompts: [
          { text: "Mark 1/4, 1/2 and 3/4 on a number line from 0 to 1.", type: "box" },
          { text: "Mark 1/3 and 2/3 on a number line from 0 to 1.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw Fractions on a Number Line (Set B)",
        instruction: "Draw a number line and mark each fraction.",
        prompts: [
          { text: "Mark 1/5, 2/5, 3/5 and 4/5 on a number line from 0 to 1.", type: "box" },
          { text: "Mark 1/8, 3/8, 5/8 and 7/8 on a number line from 0 to 1.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Fractions Beyond 1",
        instruction: "Draw a number line from 0 to 2 and mark these fractions.",
        prompts: [
          { text: "Mark 1/2, 1, 3/2 and 2 on a number line.", type: "box" },
          { text: "Mark 1/4, 3/4, 5/4 and 7/4 on a number line from 0 to 2.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Name the Fraction (Set A)",
        instruction: "A number line from 0 to 1 is divided into equal parts. Name the fraction at each arrow.",
        prompts: [
          { text: "Divided into 4 equal parts. Arrow points to the 1st mark: ___", type: "lines", lines: 1 },
          { text: "Divided into 4 equal parts. Arrow points to the 3rd mark: ___", type: "lines", lines: 1 },
          { text: "Divided into 5 equal parts. Arrow points to the 2nd mark: ___", type: "lines", lines: 1 },
          { text: "Divided into 10 equal parts. Arrow points to the 7th mark: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Name the Fraction (Set B)",
        instruction: "Name the fraction at each position.",
        prompts: [
          { text: "Divided into 3 equal parts. Arrow at the 1st mark: ___", type: "lines", lines: 1 },
          { text: "Divided into 8 equal parts. Arrow at the 5th mark: ___", type: "lines", lines: 1 },
          { text: "Divided into 6 equal parts. Arrow at the 4th mark: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Fraction Is Closer to 1?",
        instruction: "Circle the fraction that is closer to 1 on the number line.",
        questions: [
          { prompt: "Which is closer to 1?", options: ["3/4", "1/4"] },
          { prompt: "Which is closer to 1?", options: ["5/6", "1/2"] },
          { prompt: "Which is closer to 1?", options: ["7/8", "2/3"] },
          { prompt: "Which is closer to 1?", options: ["4/5", "3/10"] },
        ],
      },
      // ── HARD (approx 15 activities) ──
      {
        type: "open-response",
        title: "Order Mixed Numbers and Fractions",
        instruction: "Put these in order from smallest to largest.",
        prompts: [
          { text: "1/2, 1/4, 3/4, 2/5, 4/5 → smallest to largest", type: "lines", lines: 1 },
          { text: "1/3, 2/3, 1/6, 5/6, 1/2 → smallest to largest", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Fractions Between Fractions",
        instruction: "Name a fraction that falls between the two given fractions.",
        prompts: [
          { text: "Name a fraction between 1/4 and 1/2:", type: "lines", lines: 1 },
          { text: "Name a fraction between 1/2 and 3/4:", type: "lines", lines: 1 },
          { text: "Name a fraction between 0 and 1/4:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Number Line Reasoning",
        instruction: "Answer these questions about fractions on a number line.",
        prompts: [
          { text: "Why is 1/2 always in the middle between 0 and 1?", type: "lines", lines: 2 },
          { text: "A number line from 0 to 1 has 8 equal parts. What fraction is at the 6th mark? Simplify if possible.", type: "lines", lines: 2 },
          { text: "Is 3/5 closer to 1/2 or to 1? How do you know?", type: "lines", lines: 2 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Fraction Number Lines",
        instruction: "Practise placing fractions on number lines at home!",
        suggestions: [
          "Draw a number line on the footpath with chalk. Mark fractions and jump to each one!",
          "Use a ruler as a number line. Where is 1/2 of 30 cm? Where is 1/4?",
          "Cut a piece of string into quarters. Lay it out and label each fraction.",
          "Walk halfway to the letterbox. Then walk 3/4 of the way. How far is each?",
        ],
      },
    ],
  },

  // ── WS 8: Financial Problems ──────────────────────────────────
  {
    slug: "financial-problems-number-sentences",
    title: "Financial Problems & Number Sentences",
    strand: "Number",
    description:
      "Solve financial and other practical problems using number sentences",
    activities: [
      // ── EASY (approx 25 activities) ──
      {
        type: "matching",
        title: "Match Word Problems to Number Sentences (Set A)",
        instruction: "Draw a line from each word problem to the correct number sentence.",
        left: [
          "3 pens at $2.50 each",
          "Buy a $15 book, pay with $20",
          "Share $24 equally among 4 friends",
          "2 pizzas at $8 plus $3 delivery",
        ],
        right: ["$20 − $15", "$24 ÷ 4", "2 × $8 + $3", "3 × $2.50"],
      },
      {
        type: "matching",
        title: "Match Word Problems to Number Sentences (Set B)",
        instruction: "Draw a line from each word problem to the correct number sentence.",
        left: [
          "5 tickets at $4 each",
          "Pay $50, item costs $32",
          "Share $36 among 6 people",
          "3 books at $7 plus $2 bag",
        ],
        right: ["$50 − $32", "3 × $7 + $2", "5 × $4", "$36 ÷ 6"],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Total (Set A)",
        instruction: "Circle the correct answer for each money problem.",
        questions: [
          { prompt: "4 × $3.50 = ?", options: ["$12.00", "$14.00", "$16.00"] },
          { prompt: "$20.00 − $7.50 = ?", options: ["$11.50", "$12.50", "$13.50"] },
          { prompt: "3 × $6.00 + $2.50 = ?", options: ["$18.50", "$20.50", "$21.00"] },
          { prompt: "$50.00 ÷ 5 = ?", options: ["$8.00", "$10.00", "$12.00"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Total (Set B)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "6 × $2.00 = ?", options: ["$10.00", "$12.00", "$14.00"] },
          { prompt: "$10.00 − $3.75 = ?", options: ["$6.25", "$6.75", "$7.25"] },
          { prompt: "5 × $1.50 = ?", options: ["$6.50", "$7.00", "$7.50"] },
          { prompt: "$30.00 ÷ 6 = ?", options: ["$4.00", "$5.00", "$6.00"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Total (Set C)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "8 × $2.50 = ?", options: ["$18.00", "$20.00", "$22.00"] },
          { prompt: "$100.00 − $45.00 = ?", options: ["$45.00", "$55.00", "$65.00"] },
          { prompt: "4 × $12.00 = ?", options: ["$44.00", "$48.00", "$52.00"] },
          { prompt: "$72.00 ÷ 8 = ?", options: ["$8.00", "$9.00", "$10.00"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Making Change (Set A)",
        instruction: "Work out the change. Total is what you paid, parts are cost and change.",
        bonds: [
          { total: 20, partA: 13, partB: null },
          { total: 50, partA: 32, partB: null },
          { total: 10, partA: null, partB: 3 },
          { total: 100, partA: 64, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Making Change (Set B)",
        instruction: "Work out the change.",
        bonds: [
          { total: 20, partA: 8, partB: null },
          { total: 50, partA: null, partB: 15 },
          { total: 100, partA: 43, partB: null },
          { total: 10, partA: null, partB: 6 },
        ],
      },
      {
        type: "number-bonds",
        title: "Making Change (Set C)",
        instruction: "Work out the change.",
        bonds: [
          { total: 20, partA: 17, partB: null },
          { total: 50, partA: 28, partB: null },
          { total: 100, partA: null, partB: 22 },
          { total: 5, partA: 3, partB: null },
          { total: 10, partA: 4, partB: null },
        ],
      },
      {
        type: "matching",
        title: "Match Coins and Notes to Values",
        instruction: "Draw a line to match each combination to its total.",
        left: ["Two $2 coins", "A $5 note and a $2 coin", "Three $1 coins and a 50c coin", "A $10 note minus $3.50"],
        right: ["$6.50", "$3.50", "$4.00", "$7.00"],
      },
      {
        type: "circle-correct",
        title: "True or False? (Money)",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "4 × $5.00 = $20.00", options: ["TRUE", "FALSE"] },
          { prompt: "$7.50 + $7.50 = $14.00", options: ["TRUE", "FALSE"] },
          { prompt: "$20.00 − $12.50 = $7.50", options: ["TRUE", "FALSE"] },
          { prompt: "$100.00 ÷ 4 = $20.00", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Can You Afford It with $20?",
        instruction: "Sort each item: can you buy it with $20?",
        columns: ["Can afford with $20", "Cannot afford with $20"],
        items: [
          { label: "Book: $15.00" },
          { label: "Game: $25.00" },
          { label: "3 pens at $4.00 each" },
          { label: "5 drinks at $3.50 each" },
          { label: "Lunch: $8.50" },
          { label: "Movie ticket: $18.00" },
        ],
      },
      // ── MEDIUM (approx 25 activities) ──
      {
        type: "open-response",
        title: "Write the Number Sentence and Solve (Set A)",
        instruction: "Write a number sentence for each problem, then find the answer.",
        prompts: [
          { text: "Emma buys 5 apples at $1.20 each. How much does she spend?", type: "lines", lines: 2 },
          { text: "Jack has $25. He buys a book for $8.50 and a pen for $3.00. How much change?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number Sentence and Solve (Set B)",
        instruction: "Write a number sentence and solve.",
        prompts: [
          { text: "Three children share $27 equally. How much does each child get?", type: "lines", lines: 2 },
          { text: "Mia saves $4.50 each week. How much does she save in 6 weeks?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number Sentence and Solve (Set C)",
        instruction: "Write a number sentence and solve.",
        prompts: [
          { text: "A family buys 4 movie tickets at $14 each. What is the total?", type: "lines", lines: 2 },
          { text: "Sam has $50. He buys 3 toys at $12 each. How much change does he get?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number Sentence and Solve (Set D)",
        instruction: "Write a number sentence and solve.",
        prompts: [
          { text: "A cake costs $6.50. How much do 4 cakes cost?", type: "lines", lines: 2 },
          { text: "Eight friends share a bill of $96 equally. How much does each person pay?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Operation? (Money) – Set A",
        instruction: "Circle the correct operation to solve each money problem.",
        questions: [
          { prompt: "6 items at $3 each — total cost?", options: ["6 + 3", "6 × 3", "6 − 3"] },
          { prompt: "$40 shared among 5 people?", options: ["40 + 5", "40 × 5", "40 ÷ 5"] },
          { prompt: "Paid $20, spent $14.50 — change?", options: ["20 + 14.50", "20 − 14.50", "20 × 14.50"] },
          { prompt: "3 books at $8 plus $2.50 delivery?", options: ["3 × 8 + 2.50", "3 + 8 + 2.50", "3 × 8 − 2.50"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Operation? (Money) – Set B",
        instruction: "Circle the correct operation.",
        questions: [
          { prompt: "Had $35, earned $15 more — total?", options: ["35 + 15", "35 − 15", "35 × 15"] },
          { prompt: "$60 split equally 4 ways?", options: ["60 + 4", "60 ÷ 4", "60 − 4"] },
          { prompt: "7 drinks at $2.50 each?", options: ["7 + 2.50", "7 × 2.50", "7 − 2.50"] },
        ],
      },
      {
        type: "open-response",
        title: "Two-Step Money Problems (Set A)",
        instruction: "These problems need two steps. Show your working.",
        prompts: [
          { text: "Alex buys 3 sandwiches at $4.50 each and 2 drinks at $2.00 each. What is the total?", type: "lines", lines: 3 },
          { text: "Lily has $30. She buys a hat for $12 and a scarf for $9. How much does she have left?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Two-Step Money Problems (Set B)",
        instruction: "Show your working.",
        prompts: [
          { text: "A shop sells pies for $5 and sausage rolls for $3. A family buys 4 pies and 6 sausage rolls. What is the total?", type: "lines", lines: 3 },
          { text: "Noah earns $8 per hour. He works 5 hours and then spends $15 on lunch. How much does he have left?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Best Deal?",
        instruction: "Circle the better deal.",
        questions: [
          { prompt: "Which is cheaper?", options: ["3 for $9.00", "1 for $3.50"] },
          { prompt: "Which is cheaper per item?", options: ["5 for $10.00", "3 for $7.50"] },
          { prompt: "Which saves more?", options: ["Buy 2 get 1 free ($6 each)", "3 for $15.00"] },
        ],
      },
      // ── HARD (approx 15 activities) ──
      {
        type: "open-response",
        title: "Multi-Step Money Word Problems",
        instruction: "Write number sentences and solve. Show all working.",
        prompts: [
          { text: "A family of 4 goes to the movies. Adult tickets cost $18 and child tickets cost $12. There are 2 adults and 2 children. They also buy popcorn for $8. What is the total cost?", type: "lines", lines: 4 },
          { text: "Ben saves $6.50 each week. After 8 weeks, he buys a game for $45. How much does he have left?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Budget Planning",
        instruction: "You have $50 to spend at the school fair. Plan your spending.",
        prompts: [
          { text: "Rides cost $5 each, food costs $4 each, games cost $3 each. Plan how many of each you would buy. Show the total.", type: "lines", lines: 4 },
          { text: "How much change would you have?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Money Problem",
        instruction: "Write your own word problem about money. Then write the number sentence and solve it.",
        prompts: [
          { text: "My word problem:", type: "lines", lines: 3 },
          { text: "Number sentence:", type: "lines", lines: 1 },
          { text: "Answer:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Profit and Loss",
        instruction: "Solve these problems about profit and loss.",
        prompts: [
          { text: "A baker buys ingredients for $15 and sells cakes for $36. What is the profit?", type: "lines", lines: 2 },
          { text: "A shop buys 20 toys at $3 each and sells them at $5 each. What is the total profit?", type: "lines", lines: 3 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Money Maths",
        instruction: "Practise money skills at home!",
        suggestions: [
          "Help with a shopping list. Estimate the total cost by rounding each item to the nearest dollar.",
          "Set up a pretend shop. Price items and practise giving change from $10 or $20.",
          "If you get pocket money, plan a budget: how much to save and how much to spend?",
          "Look at a receipt. Check the total by adding up the items yourself.",
        ],
      },
    ],
  },

  // ── WS 9: Unknown Values in Equations ──────────────────────────────────
  {
    slug: "unknown-values-equations",
    title: "Unknown Values in Equations",
    strand: "Algebra",
    description:
      "Find unknown values in equations involving addition and subtraction",
    activities: [
      // ── EASY ──
      {
        type: "number-bonds",
        title: "Find the Missing Part – Addition (Set A)",
        instruction: "Find the missing number in each equation.",
        bonds: [
          { total: 45, partA: 18, partB: null },
          { total: 72, partA: null, partB: 35 },
          { total: 100, partA: 53, partB: null },
          { total: 150, partA: null, partB: 86 },
          { total: 200, partA: 127, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Find the Missing Part – Addition (Set B)",
        instruction: "Find the missing number.",
        bonds: [
          { total: 30, partA: 12, partB: null },
          { total: 55, partA: null, partB: 28 },
          { total: 80, partA: 45, partB: null },
          { total: 125, partA: null, partB: 67 },
          { total: 250, partA: 143, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Find the Missing Part – Addition (Set C)",
        instruction: "Find the missing number.",
        bonds: [
          { total: 60, partA: null, partB: 25 },
          { total: 90, partA: 37, partB: null },
          { total: 110, partA: null, partB: 58 },
          { total: 175, partA: 89, partB: null },
          { total: 300, partA: null, partB: 162 },
        ],
      },
      {
        type: "number-bonds",
        title: "Find the Missing Part – Subtraction (Set A)",
        instruction: "Find the missing number. Total minus one part gives the other.",
        bonds: [
          { total: 90, partA: null, partB: 34 },
          { total: 125, partA: 67, partB: null },
          { total: 200, partA: null, partB: 88 },
          { total: 300, partA: 145, partB: null },
          { total: 500, partA: null, partB: 276 },
        ],
      },
      {
        type: "number-bonds",
        title: "Find the Missing Part – Subtraction (Set B)",
        instruction: "Find the missing number.",
        bonds: [
          { total: 75, partA: 32, partB: null },
          { total: 100, partA: null, partB: 41 },
          { total: 160, partA: 78, partB: null },
          { total: 250, partA: null, partB: 123 },
          { total: 400, partA: 215, partB: null },
        ],
      },
      {
        type: "circle-correct",
        title: "What Goes in the Box? (Set A)",
        instruction: "Circle the number that makes each equation true.",
        questions: [
          { prompt: "___ + 24 = 61", options: ["33", "37", "41"] },
          { prompt: "85 − ___ = 39", options: ["44", "46", "48"] },
          { prompt: "___ + 156 = 200", options: ["34", "44", "54"] },
          { prompt: "300 − ___ = 178", options: ["112", "122", "132"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Goes in the Box? (Set B)",
        instruction: "Circle the number that makes each equation true.",
        questions: [
          { prompt: "___ + 35 = 82", options: ["43", "47", "57"] },
          { prompt: "100 − ___ = 63", options: ["37", "47", "57"] },
          { prompt: "___ + 250 = 400", options: ["140", "150", "160"] },
          { prompt: "500 − ___ = 285", options: ["205", "215", "225"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Goes in the Box? (Set C)",
        instruction: "Circle the correct number.",
        questions: [
          { prompt: "___ + 19 = 50", options: ["29", "31", "39"] },
          { prompt: "75 − ___ = 48", options: ["23", "27", "33"] },
          { prompt: "___ + 88 = 200", options: ["102", "112", "122"] },
          { prompt: "1000 − ___ = 725", options: ["265", "275", "285"] },
        ],
      },
      {
        type: "matching",
        title: "Match Equations to Answers (Set A)",
        instruction: "Draw a line from each equation to the value of the unknown.",
        left: ["___ + 15 = 42", "63 − ___ = 28", "100 − ___ = 47", "___ + 88 = 150"],
        right: ["53", "27", "62", "35"],
      },
      {
        type: "matching",
        title: "Match Equations to Answers (Set B)",
        instruction: "Draw a line from each equation to the unknown value.",
        left: ["___ + 34 = 80", "120 − ___ = 55", "200 − ___ = 137", "___ + 75 = 200"],
        right: ["63", "46", "125", "65"],
      },
      {
        type: "circle-correct",
        title: "True or False? (Equations)",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "25 + 75 = 100", options: ["TRUE", "FALSE"] },
          { prompt: "If ___ + 30 = 80, then ___ = 40", options: ["TRUE", "FALSE"] },
          { prompt: "If 100 − ___ = 35, then ___ = 65", options: ["TRUE", "FALSE"] },
          { prompt: "If ___ + 48 = 100, then ___ = 62", options: ["TRUE", "FALSE"] },
        ],
      },
      // ── MEDIUM ──
      {
        type: "number-bonds",
        title: "Larger Unknown Values (Set A)",
        instruction: "Find the missing number.",
        bonds: [
          { total: 500, partA: 234, partB: null },
          { total: 750, partA: null, partB: 418 },
          { total: 1000, partA: 567, partB: null },
          { total: 1200, partA: null, partB: 735 },
        ],
      },
      {
        type: "number-bonds",
        title: "Larger Unknown Values (Set B)",
        instruction: "Find the missing number.",
        bonds: [
          { total: 600, partA: null, partB: 275 },
          { total: 850, partA: 493, partB: null },
          { total: 1000, partA: null, partB: 382 },
          { total: 1500, partA: 876, partB: null },
        ],
      },
      {
        type: "open-response",
        title: "Solve the Equations (Set A)",
        instruction: "Find the unknown value. Show your working.",
        prompts: [
          { text: "___ + 234 = 500. The unknown is ___", type: "lines", lines: 2 },
          { text: "375 − ___ = 198. The unknown is ___", type: "lines", lines: 2 },
          { text: "___ + 167 = 400. The unknown is ___", type: "lines", lines: 2 },
          { text: "600 − ___ = 347. The unknown is ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Solve the Equations (Set B)",
        instruction: "Find the unknown. Show working.",
        prompts: [
          { text: "___ + 456 = 900. The unknown is ___", type: "lines", lines: 2 },
          { text: "800 − ___ = 525. The unknown is ___", type: "lines", lines: 2 },
          { text: "___ + ___ = 100 (find two different numbers that add to 100)", type: "lines", lines: 2 },
          { text: "1,000 − ___ = 637. The unknown is ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems with Unknowns (Set A)",
        instruction: "Write an equation with an unknown, then solve.",
        prompts: [
          { text: "I think of a number. I add 35 and get 82. What was my number?", type: "lines", lines: 2 },
          { text: "I think of a number. I subtract 47 and get 53. What was my number?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems with Unknowns (Set B)",
        instruction: "Write an equation and solve.",
        prompts: [
          { text: "A bag has some marbles. 25 are added and now there are 68. How many were there at the start?", type: "lines", lines: 2 },
          { text: "A jar has 150 lollies. Some are eaten and 87 are left. How many were eaten?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Equation Matches? (Set A)",
        instruction: "Circle the correct equation for each problem.",
        questions: [
          { prompt: "I add 45 to a number and get 100.", options: ["___ + 45 = 100", "___ − 45 = 100", "45 × ___ = 100"] },
          { prompt: "I subtract a number from 80 and get 35.", options: ["80 + ___ = 35", "80 − ___ = 35", "___ − 80 = 35"] },
          { prompt: "A number plus 67 equals 200.", options: ["67 − ___ = 200", "200 + ___ = 67", "___ + 67 = 200"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Equation Matches? (Set B)",
        instruction: "Circle the correct equation.",
        questions: [
          { prompt: "250 minus a number equals 175.", options: ["250 − ___ = 175", "175 − ___ = 250", "___ + 250 = 175"] },
          { prompt: "A number added to 89 equals 150.", options: ["89 − ___ = 150", "___ + 89 = 150", "150 + ___ = 89"] },
          { prompt: "500 take away something gives 312.", options: ["500 + ___ = 312", "312 − ___ = 500", "500 − ___ = 312"] },
        ],
      },
      {
        type: "matching",
        title: "Match Word Problems to Equations",
        instruction: "Draw a line from each problem to its equation.",
        left: ["15 more than a number is 40", "A number less 20 is 55", "Double a number is 48", "Half a number is 12"],
        right: ["___ − 20 = 55", "___ + 15 = 40", "___ ÷ 2 = 12", "___ × 2 = 48"],
      },
      // ── HARD ──
      {
        type: "open-response",
        title: "Two-Step Equations",
        instruction: "Solve these two-step problems. Show your working.",
        prompts: [
          { text: "I think of a number, double it, and add 10. I get 50. What was my number?", type: "lines", lines: 3 },
          { text: "I think of a number, subtract 15, and then add 8. I get 43. What was my number?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Balance Puzzles",
        instruction: "Both sides must be equal. Find the unknown.",
        prompts: [
          { text: "___ + 25 = 40 + 10. What is ___?", type: "lines", lines: 2 },
          { text: "100 − ___ = 35 + 15. What is ___?", type: "lines", lines: 2 },
          { text: "___ + ___ + ___ = 60 (all three numbers are the same). What is each number?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Equations",
        instruction: "Write your own equations with unknowns. Then give them to someone to solve!",
        prompts: [
          { text: "Write an addition equation with an unknown:", type: "lines", lines: 1 },
          { text: "Write a subtraction equation with an unknown:", type: "lines", lines: 1 },
          { text: "Write a word problem that uses an unknown:", type: "lines", lines: 3 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Mystery Number Games",
        instruction: "Practise finding unknowns at home!",
        suggestions: [
          "Play 'I'm thinking of a number.' Give clues like 'add 25 and you get 60'. Can your family guess?",
          "Write equations on cards with one number missing. Race to solve them!",
          "Think of your age. What do you add to get 100? What do you subtract to get 0?",
          "Make a set of balance puzzles using household items and a ruler balance.",
        ],
      },
    ],
  },

  // ── WS 10: Algorithms & Number Patterns ──────────────────────────────────
  {
    slug: "algorithms-number-patterns",
    title: "Algorithms & Number Patterns",
    strand: "Algebra",
    description:
      "Follow and create algorithms that generate sets of numbers and identify emerging patterns",
    activities: [
      // ── EASY ──
      {
        type: "sequence",
        title: "Follow the Rule: Add 3",
        instruction: "The rule is 'add 3'. Fill in the missing numbers.",
        sequences: [
          { items: [2, 5, 0, 11, 14], answer: [8] },
          { items: [10, 13, 16, 0, 22], answer: [19] },
          { items: [0, 4, 7, 10, 0], answer: [1, 13] },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Rule: Add 4",
        instruction: "The rule is 'add 4'. Fill in the missing numbers.",
        sequences: [
          { items: [1, 5, 0, 13, 17], answer: [9] },
          { items: [3, 7, 11, 0, 19], answer: [15] },
          { items: [0, 6, 10, 14, 0], answer: [2, 18] },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Rule: Add 5",
        instruction: "The rule is 'add 5'. Fill in the missing numbers.",
        sequences: [
          { items: [5, 10, 0, 20, 25], answer: [15] },
          { items: [0, 8, 13, 18, 0], answer: [3, 23] },
          { items: [12, 17, 22, 0, 32], answer: [27] },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Rule: Subtract 3",
        instruction: "The rule is 'subtract 3'. Fill in the missing numbers.",
        sequences: [
          { items: [30, 27, 0, 21, 18], answer: [24] },
          { items: [50, 47, 44, 0, 38], answer: [41] },
          { items: [0, 22, 19, 16, 0], answer: [25, 13] },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Rule: Multiply by 2",
        instruction: "The rule is 'multiply by 2'. Fill in the missing numbers.",
        sequences: [
          { items: [3, 6, 0, 24, 48], answer: [12] },
          { items: [5, 10, 20, 0, 80], answer: [40] },
          { items: [1, 2, 0, 8, 0], answer: [4, 16] },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Rule: Multiply by 3",
        instruction: "The rule is 'multiply by 3'. Fill in the missing numbers.",
        sequences: [
          { items: [2, 6, 0, 54, 162], answer: [18] },
          { items: [1, 3, 9, 0, 81], answer: [27] },
          { items: [0, 12, 36, 108, 0], answer: [4, 324] },
        ],
      },
      {
        type: "matching",
        title: "Match the Rule to the Pattern (Set A)",
        instruction: "Draw a line from each rule to the pattern it creates.",
        left: ["Start at 4, add 5", "Start at 1, multiply by 3", "Start at 100, subtract 12", "Start at 2, add 7"],
        right: ["1, 3, 9, 27, 81", "4, 9, 14, 19, 24", "2, 9, 16, 23, 30", "100, 88, 76, 64, 52"],
      },
      {
        type: "matching",
        title: "Match the Rule to the Pattern (Set B)",
        instruction: "Draw a line from each rule to the number pattern.",
        left: ["Start at 50, subtract 8", "Start at 3, add 6", "Start at 1, multiply by 2", "Start at 0, add 9"],
        right: ["1, 2, 4, 8, 16", "3, 9, 15, 21, 27", "50, 42, 34, 26, 18", "0, 9, 18, 27, 36"],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (Set A)",
        instruction: "Look at the pattern and circle what comes next.",
        questions: [
          { prompt: "7, 14, 21, 28, ___", options: ["30", "35", "42"] },
          { prompt: "2, 6, 18, 54, ___", options: ["108", "162", "72"] },
          { prompt: "100, 90, 81, 73, ___", options: ["66", "64", "63"] },
          { prompt: "1, 4, 9, 16, ___", options: ["20", "25", "36"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (Set B)",
        instruction: "Circle what comes next.",
        questions: [
          { prompt: "5, 10, 20, 40, ___", options: ["60", "80", "100"] },
          { prompt: "3, 7, 11, 15, ___", options: ["17", "19", "21"] },
          { prompt: "64, 32, 16, 8, ___", options: ["2", "4", "6"] },
          { prompt: "1, 1, 2, 3, 5, ___", options: ["7", "8", "10"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Is the Rule? (Set A)",
        instruction: "Look at the pattern and circle the rule.",
        questions: [
          { prompt: "3, 6, 9, 12, 15", options: ["Add 2", "Add 3", "Multiply by 2"] },
          { prompt: "2, 4, 8, 16, 32", options: ["Add 2", "Add 4", "Multiply by 2"] },
          { prompt: "50, 45, 40, 35, 30", options: ["Subtract 5", "Subtract 10", "Divide by 2"] },
          { prompt: "1, 4, 16, 64", options: ["Add 3", "Multiply by 4", "Add 4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Is the Rule? (Set B)",
        instruction: "Circle the rule.",
        questions: [
          { prompt: "10, 17, 24, 31, 38", options: ["Add 5", "Add 7", "Add 8"] },
          { prompt: "100, 91, 82, 73, 64", options: ["Subtract 8", "Subtract 9", "Subtract 10"] },
          { prompt: "2, 6, 18, 54, 162", options: ["Multiply by 2", "Multiply by 3", "Add 4"] },
        ],
      },
      // ── MEDIUM ──
      {
        type: "sorting",
        title: "Sort: Growing or Shrinking Pattern?",
        instruction: "Sort each pattern.",
        columns: ["Growing (increasing)", "Shrinking (decreasing)"],
        items: [
          { label: "5, 10, 15, 20" },
          { label: "100, 90, 80, 70" },
          { label: "2, 4, 8, 16" },
          { label: "50, 45, 40, 35" },
          { label: "1, 3, 9, 27" },
          { label: "64, 32, 16, 8" },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Pattern (Set A)",
        instruction: "Create a number pattern using the given rule. Write the first 5 numbers.",
        prompts: [
          { text: "Rule: Start at 7, add 6. Pattern: 7, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Rule: Start at 2, multiply by 2. Pattern: 2, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Rule: Start at 50, subtract 7. Pattern: 50, ___, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Pattern (Set B)",
        instruction: "Create the pattern.",
        prompts: [
          { text: "Rule: Start at 100, subtract 11. Pattern: 100, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Rule: Start at 3, multiply by 3. Pattern: 3, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Rule: Start at 1, add 8. Pattern: 1, ___, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Describe the Pattern",
        instruction: "Look at each pattern and describe the rule in words.",
        prompts: [
          { text: "4, 8, 12, 16, 20 — The rule is: ___", type: "lines", lines: 1 },
          { text: "3, 6, 12, 24, 48 — The rule is: ___", type: "lines", lines: 1 },
          { text: "80, 72, 64, 56, 48 — The rule is: ___", type: "lines", lines: 1 },
          { text: "1, 4, 9, 16, 25 — The rule is: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Continue the Pattern",
        instruction: "Work out the rule, then write the next 3 numbers.",
        prompts: [
          { text: "6, 11, 16, 21, ___, ___, ___", type: "lines", lines: 1 },
          { text: "2, 6, 18, 54, ___, ___, ___", type: "lines", lines: 1 },
          { text: "95, 86, 77, 68, ___, ___, ___", type: "lines", lines: 1 },
          { text: "1, 2, 4, 7, 11, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "pattern",
        title: "Shape Patterns (Set A)",
        instruction: "What comes next? Fill in the blank shapes.",
        rows: [
          { sequence: ["star", "heart", "star", "heart", "star", null], unitLength: 2 },
          { sequence: ["circle", "circle", "square", "circle", "circle", null], unitLength: 3 },
          { sequence: ["triangle", "diamond", "diamond", "triangle", "diamond", null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Shape Patterns (Set B)",
        instruction: "Fill in the missing shapes.",
        rows: [
          { sequence: ["apple", "fish", "apple", null, "apple", "fish"], unitLength: 2 },
          { sequence: ["star", "star", "heart", null, "star", "heart"], unitLength: 3 },
          { sequence: [null, "circle", "triangle", "square", null, "triangle"], unitLength: 4 },
        ],
      },
      // ── HARD ──
      {
        type: "open-response",
        title: "Two-Step Rules",
        instruction: "Follow the two-step rule to generate the pattern.",
        prompts: [
          { text: "Rule: Multiply by 2, then add 1. Start at 1: ___, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Rule: Add 3, then multiply by 2. Start at 1: ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Rule: Double, then subtract 1. Start at 2: ___, ___, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Hidden Rule",
        instruction: "These patterns have tricky rules. Work them out.",
        prompts: [
          { text: "1, 1, 2, 3, 5, 8, 13 — What is the rule? Write the next two numbers.", type: "lines", lines: 2 },
          { text: "1, 4, 9, 16, 25 — What is the rule? Write the next two numbers.", type: "lines", lines: 2 },
          { text: "2, 3, 5, 8, 12, 17 — What is the rule? Write the next two numbers.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Make Up Your Own Rule and Pattern",
        instruction: "Be creative!",
        prompts: [
          { text: "Write your own rule: ___", type: "lines", lines: 1 },
          { text: "Write the first 6 numbers of your pattern: ___", type: "lines", lines: 1 },
          { text: "Challenge: write a two-step rule and its first 5 numbers:", type: "lines", lines: 2 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Pattern Detectives",
        instruction: "Find and create patterns at home!",
        suggestions: [
          "Count tiles in your bathroom. How does the pattern grow row by row?",
          "Write a 'secret code' using a number pattern rule. Can your family crack it?",
          "Stack blocks following a rule (e.g. each layer has 2 more). Draw the pattern.",
          "Find patterns in house numbers on your street. What is the rule?",
        ],
      },
    ],
  },

  // ── WS 11: Scaled Instruments ──────────────────────────────────
  {
    slug: "scaled-instruments-measure",
    title: "Reading Scaled Instruments",
    strand: "Measurement",
    description:
      "Use scaled instruments to measure length, mass, capacity and temperature",
    activities: [
      // ── EASY ──
      {
        type: "matching",
        title: "Match Units to What We Measure",
        instruction: "Draw a line from each unit to what it measures.",
        left: ["centimetres (cm)", "grams (g)", "litres (L)", "degrees Celsius (°C)"],
        right: ["temperature", "length", "capacity", "mass"],
      },
      {
        type: "matching",
        title: "Match Tools to What They Measure",
        instruction: "Draw a line from each tool to what it measures.",
        left: ["Ruler", "Kitchen scales", "Measuring jug", "Thermometer"],
        right: ["temperature", "mass", "length", "capacity"],
      },
      {
        type: "circle-correct",
        title: "Choose the Best Unit (Set A)",
        instruction: "Circle the best unit to measure each item.",
        questions: [
          { prompt: "Length of a pencil", options: ["cm", "m", "km"] },
          { prompt: "Mass of a watermelon", options: ["g", "kg", "t"] },
          { prompt: "Water in a swimming pool", options: ["mL", "L", "kL"] },
          { prompt: "Temperature of a hot drink", options: ["°C", "g", "cm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Best Unit (Set B)",
        instruction: "Circle the best unit.",
        questions: [
          { prompt: "Height of a door", options: ["cm", "m", "km"] },
          { prompt: "Mass of a feather", options: ["g", "kg", "t"] },
          { prompt: "Water in a teaspoon", options: ["mL", "L", "kL"] },
          { prompt: "Distance from Sydney to Melbourne", options: ["cm", "m", "km"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Best Unit (Set C)",
        instruction: "Circle the best unit.",
        questions: [
          { prompt: "Length of an ant", options: ["mm", "cm", "m"] },
          { prompt: "Mass of a car", options: ["g", "kg", "t"] },
          { prompt: "Water in a fish tank", options: ["mL", "L", "kL"] },
          { prompt: "Width of your thumb", options: ["mm", "cm", "m"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Length Units",
        instruction: "Sort each item by which unit you would use to measure it.",
        columns: ["Millimetres (mm)", "Centimetres (cm)", "Metres (m)", "Kilometres (km)"],
        items: [
          { label: "Thickness of a coin" },
          { label: "Length of your foot" },
          { label: "Height of a building" },
          { label: "Distance to school" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Mass Units",
        instruction: "Sort each item by which unit you would use.",
        columns: ["Grams (g)", "Kilograms (kg)"],
        items: [
          { label: "A paperclip" },
          { label: "A bag of potatoes" },
          { label: "A pencil" },
          { label: "A child" },
          { label: "A slice of bread" },
          { label: "A suitcase" },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading a Ruler (Set A)",
        instruction: "Circle the correct reading.",
        questions: [
          { prompt: "Arrow points to the 5th mark on a cm ruler", options: ["5 mm", "5 cm", "50 cm"] },
          { prompt: "Arrow points halfway between 7 cm and 8 cm", options: ["7.5 cm", "7 cm", "8 cm"] },
          { prompt: "Arrow points to the 12th mark on a cm ruler", options: ["12 mm", "12 cm", "120 cm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading a Thermometer (Set A)",
        instruction: "Circle the correct temperature reading.",
        questions: [
          { prompt: "Halfway between 20°C and 30°C", options: ["24°C", "25°C", "26°C"] },
          { prompt: "3 marks past 10°C (each mark = 2°C)", options: ["13°C", "16°C", "15°C"] },
          { prompt: "2 marks past 30°C (each mark = 5°C)", options: ["32°C", "35°C", "40°C"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading a Thermometer (Set B)",
        instruction: "Circle the correct reading.",
        questions: [
          { prompt: "1 mark past 0°C (each mark = 1°C)", options: ["1°C", "10°C", "0.1°C"] },
          { prompt: "Halfway between 30°C and 40°C", options: ["33°C", "35°C", "37°C"] },
          { prompt: "4 marks past 20°C (each mark = 2°C)", options: ["24°C", "28°C", "30°C"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading Kitchen Scales (Set A)",
        instruction: "Circle the correct mass reading.",
        questions: [
          { prompt: "Scales show halfway between 200 g and 300 g", options: ["240 g", "250 g", "260 g"] },
          { prompt: "Scales show 3 marks past 1 kg (each mark = 100 g)", options: ["1.2 kg", "1.3 kg", "1.5 kg"] },
          { prompt: "Scales show 1 mark past 500 g (each mark = 50 g)", options: ["510 g", "525 g", "550 g"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading Kitchen Scales (Set B)",
        instruction: "Circle the correct reading.",
        questions: [
          { prompt: "Scales show 2 marks past 0 g (each mark = 100 g)", options: ["2 g", "20 g", "200 g"] },
          { prompt: "Scales show halfway between 1 kg and 2 kg", options: ["1.5 kg", "1.2 kg", "1.8 kg"] },
          { prompt: "Scales show 4 marks past 500 g (each mark = 25 g)", options: ["525 g", "600 g", "540 g"] },
        ],
      },
      // ── MEDIUM ──
      {
        type: "circle-correct",
        title: "Reading a Measuring Jug (Set A)",
        instruction: "Circle the correct capacity.",
        questions: [
          { prompt: "Water line at the 3rd mark (each mark = 100 mL)", options: ["30 mL", "300 mL", "3 L"] },
          { prompt: "Water line halfway between 500 mL and 1 L", options: ["700 mL", "750 mL", "800 mL"] },
          { prompt: "Water line at 2 marks past 1 L (each mark = 250 mL)", options: ["1.25 L", "1.5 L", "1.75 L"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading a Measuring Jug (Set B)",
        instruction: "Circle the correct reading.",
        questions: [
          { prompt: "Water line at 4 marks (each mark = 50 mL)", options: ["200 mL", "400 mL", "40 mL"] },
          { prompt: "Water line halfway between 200 mL and 400 mL", options: ["250 mL", "300 mL", "350 mL"] },
          { prompt: "Water line 1 mark past 750 mL (each mark = 50 mL)", options: ["760 mL", "800 mL", "850 mL"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Unit Conversions (Length)",
        instruction: "Fill in the missing value.",
        bonds: [
          { total: 100, partA: null, partB: 100 },
          { total: 1000, partA: null, partB: 1000 },
          { total: 200, partA: 2, partB: null },
          { total: 500, partA: 5, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Unit Conversions (Mass)",
        instruction: "Fill in the missing value.",
        bonds: [
          { total: 1000, partA: null, partB: 1000 },
          { total: 2000, partA: 2, partB: null },
          { total: 500, partA: null, partB: 500 },
          { total: 3000, partA: 3, partB: null },
        ],
      },
      {
        type: "open-response",
        title: "Estimate and Measure (Set A)",
        instruction: "Estimate first, then measure if you can.",
        prompts: [
          { text: "Length of your desk — Estimate: ___ cm, Measured: ___ cm", type: "lines", lines: 1 },
          { text: "Mass of your pencil case — Estimate: ___ g, Measured: ___ g", type: "lines", lines: 1 },
          { text: "Capacity of a cup — Estimate: ___ mL, Measured: ___ mL", type: "lines", lines: 1 },
          { text: "Temperature outside — Estimate: ___ °C, Actual: ___ °C", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Estimate and Measure (Set B)",
        instruction: "Estimate, then measure.",
        prompts: [
          { text: "Length of your arm — Estimate: ___ cm, Measured: ___ cm", type: "lines", lines: 1 },
          { text: "Mass of a book — Estimate: ___ g, Measured: ___ g", type: "lines", lines: 1 },
          { text: "Width of your hand — Estimate: ___ cm, Measured: ___ cm", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Convert the Units",
        instruction: "Convert each measurement.",
        prompts: [
          { text: "3 m = ___ cm", type: "lines", lines: 1 },
          { text: "2 kg = ___ g", type: "lines", lines: 1 },
          { text: "5 L = ___ mL", type: "lines", lines: 1 },
          { text: "150 cm = ___ m ___ cm", type: "lines", lines: 1 },
          { text: "2,500 g = ___ kg ___ g", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is More?",
        instruction: "Circle the larger measurement.",
        questions: [
          { prompt: "Which is longer?", options: ["150 cm", "1 m"] },
          { prompt: "Which is heavier?", options: ["2 kg", "1,500 g"] },
          { prompt: "Which holds more?", options: ["3 L", "2,500 mL"] },
          { prompt: "Which is hotter?", options: ["35°C", "28°C"] },
        ],
      },
      // ── HARD ──
      {
        type: "open-response",
        title: "Measurement Word Problems (Set A)",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A ribbon is 2 m 40 cm long. You cut off 85 cm. How long is the ribbon now?", type: "lines", lines: 2 },
          { text: "A recipe needs 750 mL of milk. You have 1 L. How much will be left over?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Measurement Word Problems (Set B)",
        instruction: "Solve each problem.",
        prompts: [
          { text: "Three packages weigh 450 g, 1.2 kg and 800 g. What is the total mass in kg?", type: "lines", lines: 2 },
          { text: "The temperature at 7 am was 12°C. By noon it rose 15°C. What was the noon temperature?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Reading Tricky Scales",
        instruction: "Answer these questions about reading instruments.",
        prompts: [
          { text: "A scale goes from 0 to 500 g with 10 marks. What does each mark represent?", type: "lines", lines: 1 },
          { text: "A thermometer goes from 0°C to 50°C with 25 marks. What does each mark represent?", type: "lines", lines: 1 },
          { text: "Why is it important to read a measuring jug at eye level?", type: "lines", lines: 2 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Measurement Scavenger Hunt",
        instruction: "Use measuring tools around your home!",
        suggestions: [
          "Find 3 objects shorter than 15 cm. Measure them with a ruler.",
          "Weigh 3 fruits or vegetables on kitchen scales. Order them lightest to heaviest.",
          "Fill different containers with water. Estimate capacity, then measure with a jug.",
          "Read the thermometer at different times of the day. How does temperature change?",
        ],
      },
    ],
  },

  // ── WS 12: Perimeter and Area ──────────────────────────────────
  {
    slug: "perimeter-area",
    title: "Perimeter & Area",
    strand: "Measurement",
    description:
      "Measure and approximate perimeters and areas",
    activities: [
      // ── EASY ──
      {
        type: "matching",
        title: "Match the Definition",
        instruction: "Draw a line from each word to its meaning.",
        left: ["Perimeter", "Area"],
        right: ["The space inside a shape", "The distance around the outside of a shape"],
      },
      {
        type: "circle-correct",
        title: "Perimeter or Area? (Set A)",
        instruction: "Circle whether you would find the PERIMETER or the AREA.",
        questions: [
          { prompt: "How much fencing for a garden?", options: ["Perimeter", "Area"] },
          { prompt: "How much carpet for a room?", options: ["Perimeter", "Area"] },
          { prompt: "How much ribbon around a present?", options: ["Perimeter", "Area"] },
          { prompt: "How much paint for a wall?", options: ["Perimeter", "Area"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Perimeter or Area? (Set B)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "How much border tape around a poster?", options: ["Perimeter", "Area"] },
          { prompt: "How many tiles to cover a floor?", options: ["Perimeter", "Area"] },
          { prompt: "How much edging for a garden bed?", options: ["Perimeter", "Area"] },
          { prompt: "How much wrapping paper to cover a box top?", options: ["Perimeter", "Area"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Perimeter (Set A)",
        instruction: "Add all the sides to find the perimeter. Circle the correct answer.",
        questions: [
          { prompt: "Rectangle: 5 cm, 3 cm, 5 cm, 3 cm", options: ["15 cm", "16 cm", "18 cm"] },
          { prompt: "Square: 4 sides of 6 cm", options: ["18 cm", "24 cm", "36 cm"] },
          { prompt: "Triangle: 7 cm, 5 cm, 8 cm", options: ["15 cm", "20 cm", "25 cm"] },
          { prompt: "Rectangle: 10 m, 4 m, 10 m, 4 m", options: ["24 m", "28 m", "40 m"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Perimeter (Set B)",
        instruction: "Circle the correct perimeter.",
        questions: [
          { prompt: "Square: 4 sides of 9 cm", options: ["27 cm", "36 cm", "45 cm"] },
          { prompt: "Rectangle: 12 cm, 5 cm, 12 cm, 5 cm", options: ["29 cm", "34 cm", "60 cm"] },
          { prompt: "Triangle: 6 cm, 6 cm, 6 cm", options: ["12 cm", "18 cm", "36 cm"] },
          { prompt: "Rectangle: 8 m, 3 m, 8 m, 3 m", options: ["22 m", "24 m", "26 m"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Count the Square Units – Area (Set A)",
        instruction: "Each small square = 1 square unit. Circle the area.",
        questions: [
          { prompt: "Rectangle: 4 long, 3 wide", options: ["7 sq units", "12 sq units", "14 sq units"] },
          { prompt: "Rectangle: 5 long, 2 wide", options: ["7 sq units", "10 sq units", "14 sq units"] },
          { prompt: "Square: 3 on each side", options: ["6 sq units", "9 sq units", "12 sq units"] },
          { prompt: "Rectangle: 6 long, 4 wide", options: ["20 sq units", "24 sq units", "10 sq units"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Count the Square Units – Area (Set B)",
        instruction: "Circle the area.",
        questions: [
          { prompt: "Square: 5 on each side", options: ["20 sq units", "25 sq units", "10 sq units"] },
          { prompt: "Rectangle: 7 long, 3 wide", options: ["10 sq units", "21 sq units", "24 sq units"] },
          { prompt: "Rectangle: 8 long, 2 wide", options: ["10 sq units", "16 sq units", "20 sq units"] },
          { prompt: "Square: 4 on each side", options: ["8 sq units", "12 sq units", "16 sq units"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Perimeter Puzzles (Set A)",
        instruction: "Find the missing side length. Total is the perimeter.",
        bonds: [
          { total: 20, partA: 12, partB: null },
          { total: 24, partA: null, partB: 8 },
          { total: 30, partA: 18, partB: null },
          { total: 36, partA: null, partB: 10 },
        ],
      },
      {
        type: "number-bonds",
        title: "Perimeter Puzzles (Set B)",
        instruction: "Find the missing value.",
        bonds: [
          { total: 16, partA: 8, partB: null },
          { total: 28, partA: null, partB: 6 },
          { total: 40, partA: 22, partB: null },
          { total: 32, partA: null, partB: 12 },
        ],
      },
      {
        type: "matching",
        title: "Match Rectangles to Their Perimeters",
        instruction: "Draw a line from each rectangle to its perimeter.",
        left: ["3 cm × 5 cm", "4 cm × 4 cm", "2 cm × 8 cm", "6 cm × 1 cm"],
        right: ["14 cm", "16 cm", "20 cm", "16 cm"],
      },
      {
        type: "matching",
        title: "Match Rectangles to Their Areas",
        instruction: "Draw a line from each rectangle to its area.",
        left: ["3 cm × 5 cm", "4 cm × 4 cm", "2 cm × 8 cm", "6 cm × 3 cm"],
        right: ["16 sq cm", "15 sq cm", "18 sq cm", "16 sq cm"],
      },
      // ── MEDIUM ──
      {
        type: "open-response",
        title: "Calculate Perimeter and Area (Set A)",
        instruction: "Work out the perimeter and area for each rectangle.",
        prompts: [
          { text: "Length = 8 cm, Width = 3 cm. Perimeter = ___ cm, Area = ___ sq cm", type: "lines", lines: 2 },
          { text: "Length = 10 m, Width = 5 m. Perimeter = ___ m, Area = ___ sq m", type: "lines", lines: 2 },
          { text: "Length = 12 cm, Width = 7 cm. Perimeter = ___ cm, Area = ___ sq cm", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Calculate Perimeter and Area (Set B)",
        instruction: "Work out the perimeter and area.",
        prompts: [
          { text: "Length = 6 m, Width = 6 m. Perimeter = ___ m, Area = ___ sq m", type: "lines", lines: 2 },
          { text: "Length = 15 cm, Width = 4 cm. Perimeter = ___ cm, Area = ___ sq cm", type: "lines", lines: 2 },
          { text: "Length = 9 m, Width = 8 m. Perimeter = ___ m, Area = ___ sq m", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Same Perimeter, Different Area?",
        instruction: "Both rectangles have the same perimeter. Circle the one with the LARGER area.",
        questions: [
          { prompt: "Perimeter = 20 cm: which has more area?", options: ["5 cm × 5 cm (square)", "8 cm × 2 cm"] },
          { prompt: "Perimeter = 24 cm: which has more area?", options: ["6 cm × 6 cm (square)", "10 cm × 2 cm"] },
          { prompt: "Perimeter = 16 cm: which has more area?", options: ["4 cm × 4 cm (square)", "6 cm × 2 cm"] },
        ],
      },
      {
        type: "open-response",
        title: "Perimeter Word Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A garden is 12 m long and 8 m wide. How much fencing is needed to go around it?", type: "lines", lines: 2 },
          { text: "A square painting has a perimeter of 60 cm. How long is each side?", type: "lines", lines: 2 },
          { text: "A rectangular pool is 25 m long and 10 m wide. What is its perimeter?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Area Word Problems",
        instruction: "Solve each problem.",
        prompts: [
          { text: "A rug is 3 m long and 2 m wide. What is its area?", type: "lines", lines: 2 },
          { text: "A rectangular garden bed has an area of 24 sq m. It is 8 m long. How wide is it?", type: "lines", lines: 2 },
          { text: "How many 1 m × 1 m tiles do you need to cover a 5 m × 4 m floor?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Missing Side",
        instruction: "Use the perimeter or area to find the missing side.",
        prompts: [
          { text: "A rectangle has a perimeter of 26 cm. One side is 8 cm. What is the other side?", type: "lines", lines: 2 },
          { text: "A rectangle has an area of 36 sq cm. One side is 9 cm. What is the other side?", type: "lines", lines: 2 },
          { text: "A square has an area of 49 sq cm. What is the length of each side?", type: "lines", lines: 2 },
        ],
      },
      // ── HARD ──
      {
        type: "open-response",
        title: "Draw Shapes with Given Perimeter",
        instruction: "On grid paper, draw shapes with these perimeters.",
        prompts: [
          { text: "Draw two different rectangles that each have a perimeter of 20 cm. Write their areas.", type: "box" },
          { text: "Draw a rectangle with a perimeter of 24 cm and the largest possible area.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Composite Shapes",
        instruction: "These shapes are made from rectangles joined together.",
        prompts: [
          { text: "An L-shape is made from two rectangles: 4×3 and 2×3. What is the total area?", type: "lines", lines: 2 },
          { text: "Why is finding the perimeter of an L-shape harder than a rectangle?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Area and Perimeter Reasoning",
        instruction: "Answer these thinking questions.",
        prompts: [
          { text: "Can two shapes have the same area but different perimeters? Give an example.", type: "lines", lines: 3 },
          { text: "If you double the sides of a square, does the perimeter double? Does the area double? Explain.", type: "lines", lines: 3 },
        ],
      },
      // ── HOME ACTIVITY ──
      {
        type: "home-activity",
        title: "Home Activity: Perimeter & Area at Home",
        instruction: "Explore perimeter and area in your home!",
        suggestions: [
          "Measure the perimeter of a book, a table and a rug. Which has the largest perimeter?",
          "Use square sticky notes to cover a small surface. Count them — that is the area!",
          "Pace around your bedroom. How many steps is the perimeter?",
          "Draw two different rectangles that both have a perimeter of 20 cm. Are their areas the same?",
        ],
      },
    ],
  },

  // ── PLACEHOLDER for WS 13–23 ──
];

export function getYear4Worksheet(
  slug: string
): WorksheetItem | undefined {
  return year4MathsWorksheets.find((w) => w.slug === slug);
}
