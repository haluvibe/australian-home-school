import type { WorksheetItem } from "./worksheet-types";

export const year7MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Prime Factors & Exponent Notation ──────────────────
  {
    slug: "prime-factors-exponents",
    title: "Prime Factors & Exponent Notation",
    strand: "Number",
    description:
      "Represent natural numbers in expanded form and as products of prime factors using exponent notation",
    activities: [
      {
        type: "sorting",
        title: "Prime or Composite?",
        instruction: "Sort each number into the correct column.",
        columns: ["Prime", "Composite"],
        items: [
          { label: "2" },
          { label: "9" },
          { label: "11" },
          { label: "15" },
          { label: "17" },
          { label: "21" },
          { label: "23" },
          { label: "25" },
          { label: "31" },
          { label: "36" },
        ],
      },
      {
        type: "matching",
        title: "Match to Prime Factorisation",
        instruction: "Draw a line from each number to its prime factorisation.",
        left: ["12", "18", "30", "20", "45"],
        right: ["2² × 3", "2 × 3²", "2 × 3 × 5", "2² × 5", "3² × 5"],
      },
      {
        type: "circle-correct",
        title: "Identify the Prime Factorisation",
        instruction: "Circle the correct prime factorisation for each number.",
        questions: [
          { prompt: "24", options: ["2³ × 3", "2² × 6", "4 × 6"] },
          { prompt: "36", options: ["2² × 3²", "6²", "2 × 18"] },
          { prompt: "50", options: ["2 × 5²", "10 × 5", "2² × 5"] },
          { prompt: "72", options: ["2³ × 3²", "8 × 9", "2⁴ × 3"] },
        ],
      },
      {
        type: "matching",
        title: "Exponent Notation Values",
        instruction: "Draw a line to match each exponent expression to its value.",
        left: ["2³", "3²", "5²", "2⁴", "4²"],
        right: ["25", "16", "9", "8", "16"],
      },
      {
        type: "circle-correct",
        title: "Expanded Form",
        instruction: "Circle the correct expanded form for each expression.",
        questions: [
          { prompt: "2⁴", options: ["2 × 2 × 2 × 2", "2 × 4", "4 + 4"] },
          { prompt: "3³", options: ["3 × 3 × 3", "3 × 3", "9 × 3"] },
          { prompt: "5²", options: ["5 × 5", "5 × 2", "5 + 5"] },
        ],
      },
      {
        type: "sorting",
        title: "Group by Number of Prime Factors",
        instruction: "Sort each number by how many prime factors it has (counting repeats).",
        columns: ["2 factors", "3 factors", "4 factors"],
        items: [
          { label: "4 = 2²" },
          { label: "8 = 2³" },
          { label: "6 = 2 × 3" },
          { label: "12 = 2² × 3" },
          { label: "16 = 2⁴" },
          { label: "15 = 3 × 5" },
          { label: "30 = 2 × 3 × 5" },
          { label: "9 = 3²" },
        ],
      },
      {
        type: "open-response",
        title: "Show Your Factor Tree",
        instruction: "Draw a factor tree and write the prime factorisation using exponents for each number.",
        prompts: [
          { text: "Factor tree for 48:", type: "box" },
          { text: "Prime factorisation of 48:", type: "lines", lines: 1 },
          { text: "Factor tree for 100:", type: "box" },
          { text: "Prime factorisation of 100:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Highest Common Factor",
        instruction: "Use prime factorisation to find the HCF. Circle the correct answer.",
        questions: [
          { prompt: "HCF of 12 and 18", options: ["6", "3", "9"] },
          { prompt: "HCF of 20 and 30", options: ["10", "5", "15"] },
          { prompt: "HCF of 24 and 36", options: ["12", "6", "18"] },
        ],
      },
      {
        type: "open-response",
        title: "Explain Your Thinking",
        instruction: "Answer each question in your own words.",
        prompts: [
          { text: "Why is 1 not considered a prime number?", type: "lines", lines: 2 },
          { text: "A number has prime factorisation 2³ × 7. What is the number?", type: "lines", lines: 1 },
          { text: "Write a number between 50 and 60 and find its prime factorisation.", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 2: Squares & Square Roots ─────────────────────────────
  {
    slug: "squares-square-roots",
    title: "Squares & Square Roots",
    strand: "Number",
    description:
      "Solve problems involving squares and square roots of perfect squares",
    activities: [
      {
        type: "matching",
        title: "Match Squares to Values",
        instruction: "Draw a line from each square to its value.",
        left: ["1²", "3²", "5²", "7²", "10²"],
        right: ["49", "25", "1", "100", "9"],
      },
      {
        type: "circle-correct",
        title: "Calculate the Square",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "4²", options: ["16", "8", "12"] },
          { prompt: "6²", options: ["36", "12", "30"] },
          { prompt: "8²", options: ["64", "16", "56"] },
          { prompt: "9²", options: ["81", "18", "72"] },
          { prompt: "12²", options: ["144", "24", "124"] },
        ],
      },
      {
        type: "matching",
        title: "Match Square Roots",
        instruction: "Draw a line from each square root to its answer.",
        left: ["√4", "√9", "√25", "√36", "√64"],
        right: ["8", "5", "6", "3", "2"],
      },
      {
        type: "sequence",
        title: "Perfect Square Sequences",
        instruction: "Fill in the missing perfect squares.",
        sequences: [
          { items: [1, 4, 9, 0, 25], answer: [16] },
          { items: [36, 49, 0, 81, 100], answer: [64] },
          { items: [100, 121, 0, 169, 196], answer: [144] },
        ],
      },
      {
        type: "sorting",
        title: "Perfect Square or Not?",
        instruction: "Sort each number into the correct column.",
        columns: ["Perfect Square", "Not a Perfect Square"],
        items: [
          { label: "16" },
          { label: "20" },
          { label: "49" },
          { label: "50" },
          { label: "81" },
          { label: "90" },
          { label: "121" },
          { label: "150" },
        ],
      },
      {
        type: "circle-correct",
        title: "Estimate Square Roots",
        instruction: "Circle the best estimate for each square root.",
        questions: [
          { prompt: "√20 is between:", options: ["4 and 5", "5 and 6", "3 and 4"] },
          { prompt: "√50 is between:", options: ["7 and 8", "6 and 7", "8 and 9"] },
          { prompt: "√90 is between:", options: ["9 and 10", "8 and 9", "10 and 11"] },
        ],
      },
      {
        type: "open-response",
        title: "Area and Side Length",
        instruction: "Use square roots to find the side length of each square.",
        prompts: [
          { text: "A square has area 49 cm². What is its side length?", type: "lines", lines: 1 },
          { text: "A square has area 144 cm². What is its side length?", type: "lines", lines: 1 },
          { text: "A square park has area 625 m². What is its side length?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Squares and Square Roots — Mixed",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "√(4²)", options: ["4", "16", "2"] },
          { prompt: "(√25)²", options: ["25", "5", "625"] },
          { prompt: "√(49 + 51)", options: ["10", "7", "100"] },
        ],
      },
    ],
  },

  // ── WS 3: Integer Operations ──────────────────────────────────
  {
    slug: "integer-operations",
    title: "Adding & Subtracting Integers",
    strand: "Number",
    description:
      "Solve addition and subtraction problems involving positive and negative integers",
    activities: [
      {
        type: "sorting",
        title: "Positive, Negative or Zero?",
        instruction: "Sort each integer into the correct column.",
        columns: ["Negative", "Zero", "Positive"],
        items: [
          { label: "-7" },
          { label: "4" },
          { label: "0" },
          { label: "-12" },
          { label: "9" },
          { label: "-1" },
          { label: "100" },
          { label: "-50" },
        ],
      },
      {
        type: "matching",
        title: "Match to the Number Line",
        instruction: "Draw a line to match each description to its integer.",
        left: ["5 below zero", "3 above zero", "8 below zero", "halfway between -2 and 2"],
        right: ["0", "-8", "3", "-5"],
      },
      {
        type: "circle-correct",
        title: "Adding Integers",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3 + (−5)", options: ["-2", "8", "-8"] },
          { prompt: "-4 + 7", options: ["3", "-3", "11"] },
          { prompt: "-6 + (−3)", options: ["-9", "9", "-3"] },
          { prompt: "−10 + 10", options: ["0", "20", "-20"] },
          { prompt: "-2 + (−8)", options: ["-10", "10", "6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Subtracting Integers",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "5 − 8", options: ["-3", "3", "13"] },
          { prompt: "-3 − 4", options: ["-7", "7", "-1"] },
          { prompt: "6 − (−2)", options: ["8", "4", "-8"] },
          { prompt: "-5 − (−3)", options: ["-2", "2", "-8"] },
        ],
      },
      {
        type: "sequence",
        title: "Integer Sequences",
        instruction: "Fill in the missing integers.",
        sequences: [
          { items: [-5, -3, -1, 0, 3], answer: [1] },
          { items: [8, 5, 2, 0, -4], answer: [-1] },
          { items: [-10, -6, -2, 0, 6], answer: [2] },
        ],
      },
      {
        type: "matching",
        title: "Match Temperature Changes",
        instruction: "Match each situation to the correct calculation.",
        left: [
          "Temp was −3°C, rose 8°C",
          "Temp was 5°C, fell 9°C",
          "Temp was −6°C, fell 4°C",
          "Temp was −2°C, rose 2°C",
        ],
        right: ["5°C", "−4°C", "−10°C", "0°C"],
      },
      {
        type: "sorting",
        title: "Order of Integers",
        instruction: "Sort each set from smallest to largest.",
        columns: ["Smallest", "Middle", "Largest"],
        items: [
          { label: "Set A: −3, 1, −7" },
          { label: "Set B: 5, −5, 0" },
          { label: "Set C: −10, −4, −8" },
        ],
      },
      {
        type: "open-response",
        title: "Integer Word Problems",
        instruction: "Solve each problem and show your working.",
        prompts: [
          { text: "The temperature in Canberra was −6°C at night. By midday it had risen 14°C. What was the midday temperature?", type: "lines", lines: 2 },
          { text: "A submarine is at −80 m. It rises 35 m. What is its new depth?", type: "lines", lines: 2 },
          { text: "Sam owes $25 and earns $40. How much does Sam have now?", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 4: Fractions & Decimals — All Four Operations ─────────
  {
    slug: "fractions-decimals-all-operations",
    title: "Fractions & Decimals — All Four Operations",
    strand: "Number",
    description:
      "Use all four operations with positive fractions and decimals to solve problems",
    activities: [
      {
        type: "matching",
        title: "Match Fractions to Decimals",
        instruction: "Draw a line to match each fraction to its decimal equivalent.",
        left: ["1/2", "1/4", "3/4", "1/5", "2/5"],
        right: ["0.4", "0.75", "0.5", "0.2", "0.25"],
      },
      {
        type: "circle-correct",
        title: "Adding Fractions",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "1/2 + 1/4", options: ["3/4", "2/6", "1/2"] },
          { prompt: "2/3 + 1/6", options: ["5/6", "3/9", "1/2"] },
          { prompt: "3/4 + 1/8", options: ["7/8", "4/12", "4/8"] },
          { prompt: "1/3 + 1/2", options: ["5/6", "2/5", "2/6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Subtracting Fractions",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3/4 − 1/4", options: ["1/2", "2/0", "1/4"] },
          { prompt: "5/6 − 1/3", options: ["1/2", "4/3", "4/6"] },
          { prompt: "1 − 3/8", options: ["5/8", "3/8", "2/5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Multiplying Fractions",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "1/2 × 2/3", options: ["1/3", "3/5", "2/5"] },
          { prompt: "3/4 × 2/5", options: ["6/20 = 3/10", "5/9", "1/5"] },
          { prompt: "2/3 × 3/4", options: ["1/2", "5/7", "6/7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Adding & Subtracting Decimals",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3.6 + 1.75", options: ["5.35", "4.85", "5.11"] },
          { prompt: "8.4 − 2.65", options: ["5.75", "6.25", "5.85"] },
          { prompt: "0.48 + 1.3", options: ["1.78", "1.48", "0.61"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Multiplying Decimals",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "1.2 × 3", options: ["3.6", "0.36", "36"] },
          { prompt: "0.5 × 0.4", options: ["0.2", "2", "0.02"] },
          { prompt: "2.5 × 4", options: ["10", "1", "100"] },
        ],
      },
      {
        type: "sorting",
        title: "Estimate: Greater or Less Than 1?",
        instruction: "Sort each expression by whether its answer is greater than, equal to, or less than 1.",
        columns: ["Less than 1", "Equal to 1", "Greater than 1"],
        items: [
          { label: "1/2 + 1/4" },
          { label: "3/4 + 1/4" },
          { label: "2/3 + 2/3" },
          { label: "0.5 + 0.3" },
          { label: "0.6 + 0.4" },
          { label: "1.2 + 0.9" },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Fractions & Decimals",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A recipe needs 2/3 cup of flour. If you make 1.5 times the recipe, how much flour do you need?", type: "lines", lines: 2 },
          { text: "Three friends share a pizza. Tom eats 1/4, Sara eats 3/8. What fraction is left?", type: "lines", lines: 2 },
          { text: "A jacket costs $64.80. It is reduced by 0.25 (one quarter). What is the new price?", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 5: Ratios, Percentages & Financial Maths ───────────────
  {
    slug: "ratios-percentages-financial",
    title: "Ratios, Percentages & Financial Maths",
    strand: "Number",
    description:
      "Solve practical problems involving ratios, rates and percentages in financial and everyday contexts",
    activities: [
      {
        type: "matching",
        title: "Match Percentages to Fractions",
        instruction: "Draw a line from each percentage to its fraction.",
        left: ["25%", "50%", "10%", "75%", "20%"],
        right: ["1/4", "1/5", "3/4", "1/10", "1/2"],
      },
      {
        type: "circle-correct",
        title: "Calculate the Percentage",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "25% of 80", options: ["20", "25", "40"] },
          { prompt: "10% of 150", options: ["15", "10", "50"] },
          { prompt: "50% of 64", options: ["32", "16", "8"] },
          { prompt: "30% of 90", options: ["27", "30", "9"] },
        ],
      },
      {
        type: "matching",
        title: "Simplify the Ratio",
        instruction: "Draw a line from each ratio to its simplest form.",
        left: ["4:6", "10:15", "8:12", "6:9", "15:20"],
        right: ["3:4", "2:3", "2:3", "2:3", "2:3"],
      },
      {
        type: "circle-correct",
        title: "Share in a Ratio",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Share $30 in ratio 1:2. Smaller share =", options: ["$10", "$15", "$20"] },
          { prompt: "Share $40 in ratio 3:1. Larger share =", options: ["$30", "$10", "$20"] },
          { prompt: "Share $60 in ratio 1:3. Larger share =", options: ["$45", "$15", "$30"] },
        ],
      },
      {
        type: "sorting",
        title: "Percentage Increase or Decrease?",
        instruction: "Sort each situation as a percentage increase or decrease.",
        columns: ["Increase", "Decrease"],
        items: [
          { label: "Sale price 20% off" },
          { label: "Wage rise of 5%" },
          { label: "Membership fee goes up 10%" },
          { label: "Discount of 30%" },
          { label: "Interest earned 4%" },
          { label: "Value drops 15%" },
        ],
      },
      {
        type: "circle-correct",
        title: "Financial Percentages",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "A shirt costs $40. GST is 10%. Final price?", options: ["$44", "$36", "$50"] },
          { prompt: "A book is $25. It goes on sale for 20% off. New price?", options: ["$20", "$21", "$22"] },
          { prompt: "You earn $80 pocket money. You save 25%. How much saved?", options: ["$20", "$25", "$60"] },
        ],
      },
      {
        type: "open-response",
        title: "Ratio & Percentage Word Problems",
        instruction: "Show all working.",
        prompts: [
          { text: "Orange juice and water are mixed in ratio 2:3. If you use 400 mL of juice, how much water do you need?", type: "lines", lines: 2 },
          { text: "A $350 bike is on sale for 30% off. What do you save, and what is the sale price?", type: "lines", lines: 3 },
          { text: "A class has 15 boys and 10 girls. Write the ratio of boys to girls in simplest form.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Percentage Hunt",
        instruction: "Look for real-life examples of percentages and ratios at home or in shops.",
        suggestions: [
          "Find 3 food labels showing percentages (e.g., fat content, daily value). Record them.",
          "Look at a supermarket catalogue or website. Find a sale item and calculate how much you save.",
          "Mix a drink (e.g., cordial and water) in ratio 1:4. How much of each did you use?",
          "Check a bank or savings account (with a parent). What interest rate does it offer?",
        ],
      },
    ],
  },

  // ── WS 6: Algebraic Expressions ──────────────────────────────
  {
    slug: "algebraic-expressions",
    title: "Algebraic Expressions",
    strand: "Algebra",
    description:
      "Use algebraic expressions to represent situations and substitute values to find unknowns",
    activities: [
      {
        type: "matching",
        title: "Match Words to Expressions",
        instruction: "Draw a line from each phrase to its algebraic expression.",
        left: [
          "5 more than n",
          "double x",
          "3 less than y",
          "half of m",
          "4 times k",
        ],
        right: ["m ÷ 2", "y − 3", "2x", "4k", "n + 5"],
      },
      {
        type: "circle-correct",
        title: "Write the Expression",
        instruction: "Circle the correct algebraic expression.",
        questions: [
          { prompt: "The cost of 3 apples at p cents each", options: ["3p", "p + 3", "p ÷ 3"] },
          { prompt: "10 more than twice a number n", options: ["2n + 10", "10n + 2", "n + 12"] },
          { prompt: "A number x divided by 4, then add 1", options: ["x/4 + 1", "4x + 1", "x + 4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Substitute Values",
        instruction: "Substitute the given value and circle the correct answer.",
        questions: [
          { prompt: "If x = 3, find 4x + 2", options: ["14", "12", "20"] },
          { prompt: "If n = 5, find 2n − 3", options: ["7", "10", "13"] },
          { prompt: "If y = 4, find y² + 1", options: ["17", "9", "25"] },
          { prompt: "If m = 6, find 3m ÷ 2", options: ["9", "10", "12"] },
        ],
      },
      {
        type: "sorting",
        title: "Like Terms or Unlike Terms?",
        instruction: "Sort each pair into the correct column.",
        columns: ["Like Terms", "Unlike Terms"],
        items: [
          { label: "3x and 5x" },
          { label: "2y and 3z" },
          { label: "4a and a" },
          { label: "6x and 6y" },
          { label: "m and 7m" },
          { label: "5n² and 3n" },
        ],
      },
      {
        type: "matching",
        title: "Simplify by Collecting Like Terms",
        instruction: "Draw a line to match each expression to its simplified form.",
        left: ["3x + 2x", "5y − 2y", "4a + a + 2a", "6n − n", "2m + 3m − m"],
        right: ["5n", "7a", "4m", "5x", "3y"],
      },
      {
        type: "circle-correct",
        title: "Evaluate Formulas",
        instruction: "Use the formula to find the answer.",
        questions: [
          { prompt: "Area of a rectangle: A = lw. Find A when l = 7 and w = 4.", options: ["28", "22", "11"] },
          { prompt: "Perimeter of a square: P = 4s. Find P when s = 6.", options: ["24", "36", "12"] },
          { prompt: "Speed: d = st. Find d when s = 60 and t = 3.", options: ["180", "63", "20"] },
        ],
      },
      {
        type: "open-response",
        title: "Create and Evaluate Your Own Expression",
        instruction: "Write and solve your own algebra problems.",
        prompts: [
          { text: "Write an algebraic expression for: 'I start with x books, buy 4 more, then give away 2.' Evaluate when x = 10.", type: "lines", lines: 3 },
          { text: "A mobile plan costs $20 per month plus $0.10 per text. Write a formula for the monthly cost C when you send t texts. Find C when t = 50.", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 7: Linear Equations ───────────────────────────────────
  {
    slug: "linear-equations",
    title: "Solving Linear Equations",
    strand: "Algebra",
    description:
      "Solve linear equations with natural number solutions using inverse operations",
    activities: [
      {
        type: "matching",
        title: "Match Equation to Solution",
        instruction: "Draw a line from each equation to its solution.",
        left: ["x + 5 = 12", "y − 3 = 10", "2n = 16", "m ÷ 4 = 5", "3k = 21"],
        right: ["7", "8", "13", "20", "k = 7"],
      },
      {
        type: "circle-correct",
        title: "One-Step Equations",
        instruction: "Circle the correct solution.",
        questions: [
          { prompt: "x + 8 = 15", options: ["x = 7", "x = 23", "x = 6"] },
          { prompt: "y − 6 = 9", options: ["y = 15", "y = 3", "y = 14"] },
          { prompt: "3n = 24", options: ["n = 8", "n = 21", "n = 27"] },
          { prompt: "m ÷ 5 = 7", options: ["m = 35", "m = 12", "m = 2"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Two-Step Equations",
        instruction: "Solve each equation. Circle the correct answer.",
        questions: [
          { prompt: "2x + 3 = 11", options: ["x = 4", "x = 7", "x = 5"] },
          { prompt: "3y − 4 = 14", options: ["y = 6", "y = 5", "y = 10"] },
          { prompt: "n ÷ 2 + 5 = 9", options: ["n = 8", "n = 7", "n = 4"] },
          { prompt: "4m − 8 = 20", options: ["m = 7", "m = 3", "m = 12"] },
        ],
      },
      {
        type: "sorting",
        title: "Which Step Comes First?",
        instruction: "To solve 3x + 6 = 18, what should you do first? Sort these steps in correct order.",
        columns: ["Step 1", "Step 2", "Step 3"],
        items: [
          { label: "Divide both sides by 3 → x = 4" },
          { label: "Start: 3x + 6 = 18" },
          { label: "Subtract 6 from both sides → 3x = 12" },
        ],
      },
      {
        type: "matching",
        title: "Equation — Situation Match",
        instruction: "Draw a line to match each real-life situation to its equation.",
        left: [
          "I have x chocolates. I give away 4. I have 9 left.",
          "Three equal piles of coins make 24 coins.",
          "Double a number plus 5 equals 17.",
          "A number divided by 6 equals 8.",
        ],
        right: ["2n + 5 = 17", "3c = 24", "x − 4 = 9", "n ÷ 6 = 8"],
      },
      {
        type: "open-response",
        title: "Write and Solve Equations",
        instruction: "Write an equation for each problem, then solve it. Show your steps.",
        prompts: [
          { text: "Mia thinks of a number, doubles it, and adds 3. The result is 19. What is the number?", type: "lines", lines: 3 },
          { text: "Tickets to a show cost $t each. Four tickets plus a $5 booking fee totals $37. Find t.", type: "lines", lines: 3 },
          { text: "A length of rope is cut into 6 equal pieces. Each piece is 8 cm long. Write an equation and find the original length.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Check the Solution",
        instruction: "Substitute the given solution back into the equation. Is it correct?",
        questions: [
          { prompt: "2x + 4 = 14, proposed solution x = 5", options: ["Incorrect (gives 14 = 14 ✓ wait — 2×5+4=14 ✓)", "Correct: x = 5", "Incorrect: x = 5"] },
          { prompt: "3y − 2 = 10, proposed solution y = 3", options: ["Incorrect (3×3−2 = 7 ≠ 10)", "Correct: y = 3", "Cannot tell"] },
          { prompt: "n ÷ 4 + 1 = 6, proposed solution n = 20", options: ["Correct: 20÷4+1=6 ✓", "Incorrect", "Not enough info"] },
        ],
      },
    ],
  },

  // ── WS 8: Tables of Values & Variable Relationships ──────────
  {
    slug: "tables-of-values",
    title: "Tables of Values & Variable Relationships",
    strand: "Algebra",
    description:
      "Create tables of values from algebraic expressions and describe how variables change",
    activities: [
      {
        type: "matching",
        title: "Match Rule to Table",
        instruction: "Draw a line from each rule to the correct output value when x = 3.",
        left: ["y = 2x", "y = x + 5", "y = 3x − 1", "y = x²"],
        right: ["9", "8", "6", "8"],
      },
      {
        type: "circle-correct",
        title: "Complete the Table",
        instruction: "For the rule y = 2x + 1, what is y when x = 4?",
        questions: [
          { prompt: "y = 2x + 1, x = 4", options: ["9", "10", "7"] },
          { prompt: "y = 3x − 2, x = 5", options: ["13", "10", "17"] },
          { prompt: "y = x² + 1, x = 3", options: ["10", "7", "12"] },
          { prompt: "y = x ÷ 2 + 3, x = 8", options: ["7", "9", "5"] },
        ],
      },
      {
        type: "sequence",
        title: "Find the Pattern in the Table",
        instruction: "Look at x → y pairs and fill in the missing values. Rule: y = x + 4",
        sequences: [
          { items: [1, 5, 2, 6, 3, 0], answer: [7] },
          { items: [0, 4, 5, 9, 10, 0], answer: [14] },
        ],
      },
      {
        type: "sorting",
        title: "Which Rule Matches?",
        instruction: "A table has x values 1, 2, 3, 4 and y values 3, 6, 9, 12. Sort these rules: which one fits?",
        columns: ["Fits the table", "Does not fit"],
        items: [
          { label: "y = 3x" },
          { label: "y = x + 2" },
          { label: "y = x × 3" },
          { label: "y = 2x + 1" },
          { label: "y = 12/x" },
        ],
      },
      {
        type: "circle-correct",
        title: "Increasing or Decreasing?",
        instruction: "As x increases, does y increase or decrease?",
        questions: [
          { prompt: "y = 2x", options: ["Increases", "Decreases", "Stays the same"] },
          { prompt: "y = 10 − x", options: ["Decreases", "Increases", "Stays the same"] },
          { prompt: "y = x²", options: ["Increases", "Decreases", "Stays the same"] },
          { prompt: "y = 5", options: ["Stays the same", "Increases", "Decreases"] },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Table",
        instruction: "Complete each table of values and describe the pattern.",
        prompts: [
          { text: "Rule: y = 4x − 1. Complete the table for x = 0, 1, 2, 3, 4. Describe what happens to y as x increases.", type: "box" },
          { text: "A taxi charges $3 plus $2 per km. Write a rule for total cost C in terms of km k. Fill in a table for k = 1, 2, 3, 4, 5.", type: "box" },
        ],
      },
    ],
  },

  // ── WS 9: Area of Triangles & Parallelograms ─────────────────
  {
    slug: "area-triangles-parallelograms",
    title: "Area of Triangles & Parallelograms",
    strand: "Measurement",
    description:
      "Use and apply formulas to find the area of triangles and parallelograms",
    activities: [
      {
        type: "matching",
        title: "Match Shape to Formula",
        instruction: "Draw a line to match each shape to its area formula.",
        left: ["Triangle", "Parallelogram", "Rectangle", "Square"],
        right: ["A = s²", "A = lw", "A = bh", "A = ½bh"],
      },
      {
        type: "circle-correct",
        title: "Triangle Area",
        instruction: "Use A = ½ × base × height. Circle the correct area.",
        questions: [
          { prompt: "Base = 6 cm, Height = 4 cm", options: ["12 cm²", "24 cm²", "6 cm²"] },
          { prompt: "Base = 10 m, Height = 7 m", options: ["35 m²", "70 m²", "17 m²"] },
          { prompt: "Base = 8 cm, Height = 5 cm", options: ["20 cm²", "40 cm²", "13 cm²"] },
          { prompt: "Base = 12 mm, Height = 9 mm", options: ["54 mm²", "108 mm²", "27 mm²"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Parallelogram Area",
        instruction: "Use A = base × height. Circle the correct area.",
        questions: [
          { prompt: "Base = 7 cm, Height = 5 cm", options: ["35 cm²", "24 cm²", "12 cm²"] },
          { prompt: "Base = 9 m, Height = 4 m", options: ["36 m²", "13 m²", "26 m²"] },
          { prompt: "Base = 11 cm, Height = 6 cm", options: ["66 cm²", "33 cm²", "17 cm²"] },
        ],
      },
      {
        type: "sorting",
        title: "Larger or Smaller Area?",
        instruction: "Compare these shapes. Sort them from smallest to largest area.",
        columns: ["Smallest", "Middle", "Largest"],
        items: [
          { label: "Triangle: b=8cm, h=6cm" },
          { label: "Parallelogram: b=5cm, h=4cm" },
          { label: "Rectangle: l=9cm, w=3cm" },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Missing Dimension",
        instruction: "Use the area formula to find the unknown.",
        questions: [
          { prompt: "Triangle area = 24 cm², base = 8 cm. Height = ?", options: ["6 cm", "3 cm", "12 cm"] },
          { prompt: "Parallelogram area = 45 m², height = 5 m. Base = ?", options: ["9 m", "50 m", "225 m"] },
          { prompt: "Triangle area = 30 cm², height = 10 cm. Base = ?", options: ["6 cm", "3 cm", "15 cm"] },
        ],
      },
      {
        type: "open-response",
        title: "Composite Shape Problems",
        instruction: "Find the area of each composite shape by splitting it into simpler parts.",
        prompts: [
          { text: "A shape is made of a rectangle (8 cm × 5 cm) and a triangle on top (base 8 cm, height 3 cm). What is the total area?", type: "lines", lines: 3 },
          { text: "A garden is in the shape of a parallelogram with base 12 m and height 6 m. A triangular bed inside has base 4 m and height 3 m. What is the remaining garden area?", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 10: Volume of Prisms ───────────────────────────────────
  {
    slug: "volume-of-prisms",
    title: "Volume of Rectangular & Triangular Prisms",
    strand: "Measurement",
    description:
      "Calculate the volume of rectangular and triangular prisms using formulas",
    activities: [
      {
        type: "matching",
        title: "Match Prism to Formula",
        instruction: "Draw a line from each prism type to its volume formula.",
        left: ["Rectangular prism", "Triangular prism", "Cube"],
        right: ["V = s³", "V = ½ × b × h × l", "V = l × w × h"],
      },
      {
        type: "circle-correct",
        title: "Volume of Rectangular Prisms",
        instruction: "Use V = l × w × h. Circle the correct volume.",
        questions: [
          { prompt: "l = 4 cm, w = 3 cm, h = 5 cm", options: ["60 cm³", "12 cm³", "47 cm³"] },
          { prompt: "l = 6 m, w = 6 m, h = 6 m", options: ["216 m³", "36 m³", "72 m³"] },
          { prompt: "l = 10 cm, w = 4 cm, h = 2 cm", options: ["80 cm³", "16 cm³", "40 cm³"] },
          { prompt: "l = 8 m, w = 3 m, h = 5 m", options: ["120 m³", "40 m³", "24 m³"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Volume of Triangular Prisms",
        instruction: "Use V = ½ × b × h × length. Circle the correct volume.",
        questions: [
          { prompt: "b = 4 cm, h = 3 cm, length = 10 cm", options: ["60 cm³", "120 cm³", "30 cm³"] },
          { prompt: "b = 6 m, h = 4 m, length = 5 m", options: ["60 m³", "120 m³", "30 m³"] },
          { prompt: "b = 8 cm, h = 6 cm, length = 7 cm", options: ["168 cm³", "336 cm³", "84 cm³"] },
        ],
      },
      {
        type: "sorting",
        title: "Volume Units",
        instruction: "Sort each measurement into the correct unit category.",
        columns: ["mm³", "cm³", "m³"],
        items: [
          { label: "Volume of a matchbox" },
          { label: "Volume of a swimming pool" },
          { label: "Volume of a grain of rice" },
          { label: "Volume of a school bag" },
          { label: "Volume of a house" },
          { label: "Volume of a pencil eraser" },
        ],
      },
      {
        type: "circle-correct",
        title: "Capacity Conversions",
        instruction: "Use 1 cm³ = 1 mL. Circle the correct answer.",
        questions: [
          { prompt: "A box has volume 500 cm³. Capacity = ?", options: ["500 mL", "5 L", "50 mL"] },
          { prompt: "A container holds 2 L. Volume = ?", options: ["2000 cm³", "200 cm³", "20 cm³"] },
          { prompt: "Volume = 1500 cm³. Capacity = ?", options: ["1.5 L", "15 L", "150 mL"] },
        ],
      },
      {
        type: "open-response",
        title: "Volume Word Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A fish tank is 60 cm long, 30 cm wide, and 40 cm high. What is its volume in cm³? How many litres of water will it hold?", type: "lines", lines: 3 },
          { text: "A triangular wedge of cheese has a triangular cross-section with base 6 cm and height 4 cm. The wedge is 8 cm long. What is its volume?", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 11: Circles & Angle Relationships ─────────────────────
  {
    slug: "circles-and-angles",
    title: "Circles & Angle Relationships",
    strand: "Measurement",
    description:
      "Describe relationships between radius, diameter and circumference, and apply angle relationships in triangles and parallel lines",
    activities: [
      {
        type: "matching",
        title: "Circle Parts",
        instruction: "Draw a line to match each term to its definition.",
        left: ["Radius", "Diameter", "Circumference", "Pi (π)"],
        right: [
          "The perimeter of a circle",
          "The ratio C ÷ d ≈ 3.14",
          "Distance from centre to edge",
          "Distance across a circle through the centre",
        ],
      },
      {
        type: "circle-correct",
        title: "Radius and Diameter",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Diameter = 10 cm. Radius = ?", options: ["5 cm", "20 cm", "10 cm"] },
          { prompt: "Radius = 7 m. Diameter = ?", options: ["14 m", "7 m", "3.5 m"] },
          { prompt: "Diameter = 24 mm. Radius = ?", options: ["12 mm", "48 mm", "6 mm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Circumference",
        instruction: "Use C = πd ≈ 3.14 × d. Circle the correct answer (round to 1 decimal place).",
        questions: [
          { prompt: "Diameter = 5 cm", options: ["15.7 cm", "7.9 cm", "31.4 cm"] },
          { prompt: "Radius = 4 m", options: ["25.1 m", "12.6 m", "50.2 m"] },
          { prompt: "Diameter = 10 cm", options: ["31.4 cm", "15.7 cm", "62.8 cm"] },
        ],
      },
      {
        type: "matching",
        title: "Angle Relationships",
        instruction: "Draw a line from each angle relationship to its description.",
        left: [
          "Angles on a straight line",
          "Angles in a triangle",
          "Vertically opposite angles",
          "Complementary angles",
        ],
        right: ["Add to 90°", "Are equal", "Add to 180°", "Add to 180°"],
      },
      {
        type: "circle-correct",
        title: "Find the Missing Angle in a Triangle",
        instruction: "Angles in a triangle add to 180°. Find the missing angle.",
        questions: [
          { prompt: "Angles: 60°, 70°, ?", options: ["50°", "60°", "70°"] },
          { prompt: "Angles: 90°, 45°, ?", options: ["45°", "55°", "35°"] },
          { prompt: "Angles: 30°, 110°, ?", options: ["40°", "50°", "60°"] },
          { prompt: "Isosceles triangle, one angle = 40°. Other base angle = ?", options: ["40°", "70°", "50°"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Angles on Lines",
        instruction: "Find the missing angle.",
        questions: [
          { prompt: "Angles on a straight line: 55° + ? = 180°", options: ["125°", "115°", "135°"] },
          { prompt: "Vertically opposite to 72°", options: ["72°", "108°", "18°"] },
          { prompt: "Complementary to 38°", options: ["52°", "142°", "62°"] },
        ],
      },
      {
        type: "open-response",
        title: "Geometry Problems",
        instruction: "Show your working for each problem.",
        prompts: [
          { text: "A circular running track has diameter 80 m. How far do you run in one lap? Use π ≈ 3.14.", type: "lines", lines: 2 },
          { text: "A triangle has angles in ratio 1:2:3. Find all three angles.", type: "lines", lines: 3 },
          { text: "Two angles on a straight line are in ratio 2:1. Find each angle.", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 12: Polygons & Coordinates ────────────────────────────
  {
    slug: "polygons-and-coordinates",
    title: "Polygons & Coordinate Transformations",
    strand: "Space",
    description:
      "Classify polygons by their features and use coordinates to describe reflections, rotations and translations",
    activities: [
      {
        type: "matching",
        title: "Match Polygon to Feature",
        instruction: "Draw a line to match each polygon to its key feature.",
        left: ["Equilateral triangle", "Square", "Regular hexagon", "Rhombus", "Trapezium"],
        right: [
          "One pair of parallel sides",
          "4 equal sides, 4 right angles",
          "All sides equal, no right angles",
          "6 equal sides, 6 equal angles",
          "3 equal sides, 3 equal angles",
        ],
      },
      {
        type: "sorting",
        title: "Regular or Irregular?",
        instruction: "Sort each polygon into the correct column.",
        columns: ["Regular (all sides and angles equal)", "Irregular"],
        items: [
          { label: "Equilateral triangle" },
          { label: "Scalene triangle" },
          { label: "Square" },
          { label: "Rectangle (not a square)" },
          { label: "Regular pentagon" },
          { label: "Parallelogram (not a rhombus)" },
        ],
      },
      {
        type: "circle-correct",
        title: "Polygon Properties",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "A regular polygon has 5 sides. Each interior angle = ?", options: ["108°", "120°", "90°"] },
          { prompt: "How many lines of symmetry does a square have?", options: ["4", "2", "8"] },
          { prompt: "A polygon with all interior angles less than 180° is called:", options: ["Convex", "Concave", "Regular"] },
          { prompt: "Sum of interior angles of a quadrilateral:", options: ["360°", "180°", "540°"] },
        ],
      },
      {
        type: "matching",
        title: "Coordinate Transformations",
        instruction: "Draw a line to match each transformation to its description.",
        left: ["Translation", "Reflection", "Rotation", "Enlargement"],
        right: [
          "Shape is flipped over a line",
          "Shape is turned around a point",
          "Shape is made bigger or smaller",
          "Shape slides to a new position",
        ],
      },
      {
        type: "circle-correct",
        title: "Transformations on a Grid",
        instruction: "Circle the correct new coordinates.",
        questions: [
          { prompt: "Point (3, 2) reflected in the y-axis", options: ["(−3, 2)", "(3, −2)", "(−3, −2)"] },
          { prompt: "Point (1, 4) translated right 2, down 3", options: ["(3, 1)", "(−1, 7)", "(3, 7)"] },
          { prompt: "Point (2, 3) rotated 180° about the origin", options: ["(−2, −3)", "(3, 2)", "(−3, 2)"] },
        ],
      },
      {
        type: "open-response",
        title: "Describe and Draw Transformations",
        instruction: "Answer each question about transformations.",
        prompts: [
          { text: "A square has vertices at (1,1), (3,1), (3,3), (1,3). Translate it right 4 and up 2. Write the new coordinates.", type: "lines", lines: 3 },
          { text: "Describe the transformation that maps (2, 5) to (−2, 5).", type: "lines", lines: 2 },
          { text: "Name two real-life objects that have rotational symmetry and state the order of symmetry.", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 13: Data Investigation & Statistics ───────────────────
  {
    slug: "data-investigation",
    title: "Statistical Investigation & Data Display",
    strand: "Statistics",
    description:
      "Plan and conduct statistical investigations, display data and interpret results",
    activities: [
      {
        type: "sorting",
        title: "Types of Data",
        instruction: "Sort each example into the correct data type.",
        columns: ["Categorical", "Discrete numerical", "Continuous numerical"],
        items: [
          { label: "Favourite sport" },
          { label: "Number of siblings" },
          { label: "Height in cm" },
          { label: "Eye colour" },
          { label: "Number of pets" },
          { label: "Temperature at noon" },
          { label: "Type of music preferred" },
          { label: "Time to run 100 m" },
        ],
      },
      {
        type: "matching",
        title: "Match Graph to Data Type",
        instruction: "Draw a line to match each data type to its best graph.",
        left: ["Categorical data", "Numerical data distribution", "Changes over time", "Two numerical variables"],
        right: ["Scatter plot", "Bar or column graph", "Histogram or stem-and-leaf", "Line graph"],
      },
      {
        type: "circle-correct",
        title: "Interpret the Stem-and-Leaf Plot",
        instruction: "The stem-and-leaf plot shows test scores: Stem | Leaves — 4|2 5 8 — 5|1 3 6 9 — 6|0 4 7 — 7|2 5. Answer each question.",
        questions: [
          { prompt: "How many students sat the test?", options: ["13", "12", "14"] },
          { prompt: "What is the highest score?", options: ["75", "72", "67"] },
          { prompt: "How many students scored 50 or more?", options: ["11", "10", "13"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify Outliers",
        instruction: "Look at each data set. Which value is an outlier?",
        questions: [
          { prompt: "Data: 12, 14, 13, 15, 11, 45", options: ["45", "11", "15"] },
          { prompt: "Data: 80, 82, 79, 81, 3, 83", options: ["3", "83", "79"] },
          { prompt: "Data: 5, 6, 5, 4, 6, 5, 55", options: ["55", "4", "6"] },
        ],
      },
      {
        type: "sorting",
        title: "Investigation Steps",
        instruction: "Sort the steps of a statistical investigation in correct order.",
        columns: ["First", "Second", "Third", "Fourth"],
        items: [
          { label: "Collect and organise data" },
          { label: "Pose a statistical question" },
          { label: "Draw conclusions and communicate findings" },
          { label: "Display data in a graph" },
        ],
      },
      {
        type: "open-response",
        title: "Conduct a Mini-Investigation",
        instruction: "Plan and describe a statistical investigation.",
        prompts: [
          { text: "Write a statistical question you could investigate in your class (e.g., 'How many hours of screen time per day do students have?').", type: "lines", lines: 2 },
          { text: "How would you collect the data? What type of data is it?", type: "lines", lines: 2 },
          { text: "Which graph would you use to display your results? Explain why.", type: "lines", lines: 2 },
          { text: "What is one question you could answer from your results?", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 14: Measures of Centre & Spread ───────────────────────
  {
    slug: "measures-of-centre",
    title: "Mean, Median, Mode & Spread",
    strand: "Statistics",
    description:
      "Calculate and compare measures of central tendency and decide which measure best represents a data set",
    activities: [
      {
        type: "matching",
        title: "Match Measure to Definition",
        instruction: "Draw a line to match each statistical measure to its definition.",
        left: ["Mean", "Median", "Mode", "Range"],
        right: [
          "Most common value",
          "Sum of all values ÷ number of values",
          "Middle value when data is ordered",
          "Highest value minus lowest value",
        ],
      },
      {
        type: "circle-correct",
        title: "Calculate the Mean",
        instruction: "Find the mean of each data set.",
        questions: [
          { prompt: "2, 4, 6, 8, 10", options: ["6", "5", "8"] },
          { prompt: "15, 20, 25, 30, 10", options: ["20", "25", "22"] },
          { prompt: "3, 3, 5, 7, 7", options: ["5", "3", "7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Median",
        instruction: "Order the data set and find the median.",
        questions: [
          { prompt: "4, 1, 7, 3, 9", options: ["4", "5", "3"] },
          { prompt: "12, 8, 15, 10, 6, 14", options: ["11", "12", "10"] },
          { prompt: "2, 5, 5, 7, 8", options: ["5", "7", "6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Mode",
        instruction: "Find the mode of each data set.",
        questions: [
          { prompt: "3, 5, 3, 7, 3, 5", options: ["3", "5", "7"] },
          { prompt: "10, 12, 10, 14, 12, 10", options: ["10", "12", "14"] },
          { prompt: "A, B, A, C, B, A", options: ["A", "B", "C"] },
        ],
      },
      {
        type: "sorting",
        title: "Choose the Best Measure",
        instruction: "Sort each situation into which measure of centre best represents the data.",
        columns: ["Mean", "Median", "Mode"],
        items: [
          { label: "Incomes in a suburb (one billionaire included)" },
          { label: "Most popular shoe size in a shop" },
          { label: "Average mark on a maths test (no outliers)" },
          { label: "House prices in a suburb" },
          { label: "Most common eye colour in a class" },
          { label: "Average rainfall across 10 days" },
        ],
      },
      {
        type: "circle-correct",
        title: "Effect of Outliers",
        instruction: "Which measure is MOST affected by an outlier?",
        questions: [
          { prompt: "Data set: 4, 5, 5, 6, 50. Adding 50 most changes the:", options: ["Mean", "Median", "Mode"] },
          { prompt: "Which measure is LEAST affected by outliers?", options: ["Median", "Mean", "Range"] },
          { prompt: "For skewed data, the better measure of centre is usually the:", options: ["Median", "Mean", "Mode"] },
        ],
      },
      {
        type: "open-response",
        title: "Real Data Analysis",
        instruction: "Use the data set to answer all questions: Monthly rainfall (mm): 45, 60, 30, 90, 55, 40, 75, 60, 50, 80, 65, 70",
        prompts: [
          { text: "Calculate the mean monthly rainfall.", type: "lines", lines: 2 },
          { text: "Find the median.", type: "lines", lines: 2 },
          { text: "Find the mode.", type: "lines", lines: 1 },
          { text: "Find the range.", type: "lines", lines: 1 },
          { text: "Which measure best represents this data? Explain.", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 15: Probability — Sample Spaces ───────────────────────
  {
    slug: "probability-sample-spaces",
    title: "Probability & Sample Spaces",
    strand: "Probability",
    description:
      "List sample spaces, assign probabilities and compare predicted vs observed outcomes in experiments",
    activities: [
      {
        type: "matching",
        title: "Match Probability to Value",
        instruction: "Draw a line to match each event to its probability value.",
        left: [
          "Rolling a 6 on a fair die",
          "Flipping heads on a fair coin",
          "Drawing a red card from a standard deck",
          "Rolling a number less than 7",
          "Rolling a number greater than 6",
        ],
        right: ["0", "1/2", "1/6", "1", "1/2"],
      },
      {
        type: "sorting",
        title: "Likelihood Scale",
        instruction: "Sort each event on the likelihood scale.",
        columns: ["Impossible", "Unlikely", "Even chance", "Likely", "Certain"],
        items: [
          { label: "Flipping a coin and getting heads" },
          { label: "Rolling a number > 1 on a die" },
          { label: "It snows in the Sahara Desert today" },
          { label: "The sun rises tomorrow" },
          { label: "Picking a red ball from a bag of 1 red, 9 blue" },
        ],
      },
      {
        type: "circle-correct",
        title: "Calculate Theoretical Probability",
        instruction: "Circle the correct probability.",
        questions: [
          { prompt: "P(rolling a 3 on a standard die)", options: ["1/6", "1/3", "3/6"] },
          { prompt: "P(drawing a heart from 52 cards)", options: ["1/4", "1/13", "13/4"] },
          { prompt: "P(picking a blue from bag of 3 red, 7 blue)", options: ["7/10", "3/10", "7/3"] },
          { prompt: "P(flipping tails)", options: ["1/2", "1/4", "0"] },
        ],
      },
      {
        type: "matching",
        title: "List the Sample Space",
        instruction: "Draw a line to match each experiment to the size of its sample space.",
        left: [
          "Flip one coin",
          "Roll one die",
          "Flip two coins",
          "Pick one card from Ace–10 of one suit",
        ],
        right: ["10 outcomes", "4 outcomes", "6 outcomes", "2 outcomes"],
      },
      {
        type: "circle-correct",
        title: "Complementary Events",
        instruction: "Find the probability of the complement (the event NOT happening).",
        questions: [
          { prompt: "P(rain) = 0.3. P(no rain) = ?", options: ["0.7", "0.3", "0.6"] },
          { prompt: "P(winning) = 1/5. P(not winning) = ?", options: ["4/5", "1/5", "3/5"] },
          { prompt: "P(rolling a 6) = 1/6. P(not rolling a 6) = ?", options: ["5/6", "1/6", "4/6"] },
        ],
      },
      {
        type: "sorting",
        title: "Predicted vs Observed",
        instruction: "Sort each statement as about theoretical probability or experimental probability.",
        columns: ["Theoretical", "Experimental"],
        items: [
          { label: "Based on equally likely outcomes" },
          { label: "Found by actually conducting the experiment" },
          { label: "P(head) = 1/2 because there are 2 sides" },
          { label: "We flipped 100 coins and got 48 heads" },
          { label: "Gets closer to theoretical as trials increase" },
          { label: "Calculated using the formula P = favourable ÷ total" },
        ],
      },
      {
        type: "open-response",
        title: "Design an Experiment",
        instruction: "Plan a simple probability experiment.",
        prompts: [
          { text: "You have a bag with 4 red counters and 6 blue counters. What is the theoretical probability of picking red?", type: "lines", lines: 2 },
          { text: "If you picked a counter 50 times (replacing each time), how many times would you expect to pick red?", type: "lines", lines: 2 },
          { text: "You actually pick red 28 times in 50 trials. Is this close to what you predicted? Does this mean the experiment is unfair?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Probability Experiment at Home",
        instruction: "Try these probability experiments and record your results.",
        suggestions: [
          "Flip a coin 20 times. Record heads and tails. How close was your result to the theoretical 1/2?",
          "Roll a die 30 times. Record each number. Which number came up most? Does this match theoretical probability?",
          "Draw cards from a shuffled pack (10 cards: 5 red, 5 black). Record your picks. Compare to the theoretical probability.",
          "Use a spinner (draw one with 4 equal sections). Spin 40 times. Compare results to theoretical probability.",
        ],
      },
    ],
  },
];

export function getYear7Worksheet(slug: string): WorksheetItem | undefined {
  return year7MathsWorksheets.find((w) => w.slug === slug);
}
