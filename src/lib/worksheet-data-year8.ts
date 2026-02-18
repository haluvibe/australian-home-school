import type { WorksheetItem } from "./worksheet-types";

export const year8MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Irrational Numbers & Recurring Decimals ─────────────
  {
    slug: "irrational-numbers-decimals",
    title: "Rational, Irrational & Recurring Decimals",
    strand: "Number",
    description:
      "Recognise irrational numbers and distinguish between terminating and recurring decimals",
    lesson: {
      title: "Rational, Irrational and Recurring Decimals",
      objective: "Understand what makes a number rational or irrational, and tell the difference between terminating and recurring decimals.",
      materials: [
        "Paper and pencil",
        "Calculator",
        "Ruler",
      ],
      intro: {
        title: "The Number That Broke a Rule",
        script: "Did you know there are numbers that cannot be written as a fraction? No matter how hard you try, you cannot write the square root of 2 as a fraction. When the ancient Greeks discovered this, it was so shocking that according to legend, the person who revealed it was thrown overboard from a ship! These are called irrational numbers. A rational number is any number you can write as a fraction, like one half, three quarters, or even negative five. So where do decimals fit in?",
        action: "Write on paper: Rational = can be written as a/b (fraction). Then write a few examples: 1/2 = 0.5, 1/4 = 0.25, 1/3 = 0.333... Ask your child to type 1 divided by 3 into a calculator and read out what they see. Point out the repeating digits.",
      },
      mainActivity: {
        title: "Two Types of Decimals",
        script: "When you divide a fraction, you always get a decimal that either stops or repeats. Watch me: one divided by four equals 0.25 — it stops, so we call it a terminating decimal. Now try one divided by three — it gives 0.333 going on forever. That is a recurring decimal. Both of these come from fractions, so they are rational. But the square root of 2 gives 1.41421356... and it never stops and never repeats. That is irrational. Now you try — use the calculator to divide these fractions and decide: terminating or recurring?",
        action: "Give your child these fractions to enter on the calculator: 1/4, 1/3, 2/3, 5/8, 1/6. For each, they write the decimal and decide terminating or recurring. Then together, try the square root button on 2, 3, 4, 9 — discuss which results are rational (sqrt 4 = 2, sqrt 9 = 3) and which are irrational.",
      },
      wrapUp: {
        title: "Explain It Back",
        script: "Okay, your turn to be the teacher. Tell me: what is the difference between a rational and an irrational number? And what is the difference between a terminating and a recurring decimal? Give me one example of each.",
        action: "Child explains both distinctions out loud and writes one example of each type (rational terminating, rational recurring, irrational) on paper. Correct any confusion gently. The child is now ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "sorting",
        title: "Rational or Irrational?",
        instruction: "Sort each number into the correct column.",
        columns: ["Rational", "Irrational"],
        items: [
          { label: "√4" },
          { label: "√2" },
          { label: "π" },
          { label: "3/7" },
          { label: "√9" },
          { label: "√5" },
          { label: "0.333..." },
          { label: "√3" },
          { label: "1.5" },
          { label: "√16" },
        ],
      },
      {
        type: "matching",
        title: "Match Fraction to Decimal",
        instruction: "Draw a line to match each fraction to its decimal form.",
        left: ["1/3", "1/4", "1/6", "2/3", "5/8"],
        right: ["0.1666...", "0.625", "0.333...", "0.25", "0.666..."],
      },
      {
        type: "sorting",
        title: "Terminating or Recurring?",
        instruction: "Sort each decimal into the correct column.",
        columns: ["Terminating", "Recurring"],
        items: [
          { label: "0.5" },
          { label: "0.333..." },
          { label: "0.75" },
          { label: "0.142857142857..." },
          { label: "0.625" },
          { label: "0.1666..." },
          { label: "0.25" },
          { label: "0.090909..." },
        ],
      },
      {
        type: "circle-correct",
        title: "Estimate Irrational Numbers",
        instruction: "Circle the best estimate.",
        questions: [
          { prompt: "√2 is approximately", options: ["1.41", "1.73", "2.00"] },
          { prompt: "√3 is approximately", options: ["1.73", "1.41", "1.50"] },
          { prompt: "√5 is approximately", options: ["2.24", "2.00", "2.50"] },
          { prompt: "π is approximately", options: ["3.14", "3.41", "3.00"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify Recurring Decimal Notation",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which is a recurring decimal?", options: ["0.142857142857...", "0.5", "0.75"] },
          { prompt: "1/7 = 0.142857142857... How many digits recur?", options: ["6", "3", "7"] },
          { prompt: "0.333... expressed as a fraction:", options: ["1/3", "1/4", "3/10"] },
        ],
      },
      {
        type: "sorting",
        title: "Order on the Number Line",
        instruction: "Sort each set of numbers from smallest to largest.",
        columns: ["Smallest", "Middle", "Largest"],
        items: [
          { label: "Set A: √2 ≈ 1.41, 1.5, 1.3" },
          { label: "Set B: π ≈ 3.14, √10 ≈ 3.16, 3.1" },
          { label: "Set C: 1/3, √(1/4)=0.5, 0.4" },
        ],
      },
      {
        type: "open-response",
        title: "Explain Your Reasoning",
        instruction: "Answer in complete sentences.",
        prompts: [
          { text: "Explain why √2 is irrational. What does irrational mean?", type: "lines", lines: 3 },
          { text: "Is 0.999... equal to 1? Explain your thinking.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sequence",
        title: "Place Surds on the Number Line",
        instruction: "Each row gives approximate decimal values. Write the values in order from smallest to largest.",
        sequences: [
          { items: [141, 150, 173], answer: [141, 150, 173] },
          { items: [314, 300, 316], answer: [300, 314, 316] },
          { items: [224, 200, 236], answer: [200, 224, 236] },
        ],
      },
      {
        type: "matching",
        title: "Recurring Decimals to Fractions",
        instruction: "Draw a line to match each recurring decimal to its fraction equivalent.",
        left: ["0.333...", "0.666...", "0.111...", "0.142857142857...", "0.090909..."],
        right: ["1/7", "2/3", "1/9", "1/11", "1/3"],
      },
      {
        type: "circle-correct",
        title: "Compare Irrational Numbers",
        instruction: "Circle the larger value in each pair.",
        questions: [
          { prompt: "√2 ≈ 1.414  or  √3 ≈ 1.732", options: ["√3", "√2", "They are equal"] },
          { prompt: "π ≈ 3.142  or  √10 ≈ 3.162", options: ["√10", "π", "They are equal"] },
          { prompt: "√5 ≈ 2.236  or  2.3", options: ["2.3", "√5", "They are equal"] },
          { prompt: "√8 ≈ 2.828  or  √7 ≈ 2.646", options: ["√8", "√7", "They are equal"] },
        ],
      },
      {
        type: "sorting",
        title: "Between Which Two Integers?",
        instruction: "Sort each surd into the correct pair of consecutive integers it lies between.",
        columns: ["Between 1 and 2", "Between 2 and 3", "Between 3 and 4", "Between 4 and 5"],
        items: [
          { label: "√2" },
          { label: "√5" },
          { label: "√11" },
          { label: "√18" },
          { label: "√3" },
          { label: "√8" },
        ],
      },
      {
        type: "open-response",
        title: "Converting Recurring Decimals",
        instruction: "Show full working for each conversion.",
        prompts: [
          { text: "Let x = 0.777... Multiply both sides by 10. Subtract x from 10x to find x as a fraction.", type: "lines", lines: 4 },
          { text: "Use the same method to convert 0.363636... to a fraction. (Hint: multiply by 100.)", type: "lines", lines: 4 },
        ],
      },
      {
        type: "home-activity",
        title: "Irrational Number Hunt",
        instruction: "Explore irrational numbers in everyday life.",
        suggestions: [
          "Use a calculator to find √2, √3, √5, √6, √7 and √8. Write down the first 10 decimal places of each. Do any repeat?",
          "Measure the circumference and diameter of three round objects (plate, cup, tin). Divide circumference by diameter each time. How close to π do you get?",
          "Research: what is the golden ratio φ ≈ 1.618...? Find two real-life examples where it appears.",
        ],
      },
    ],
  },

  // ── WS 2: Exponent Laws ───────────────────────────────────────
  {
    slug: "exponent-laws",
    title: "Exponent Laws",
    strand: "Number",
    description:
      "Apply exponent laws to simplify and evaluate expressions with positive integer exponents",
    lesson: {
      title: "Exponent Laws",
      objective: "Apply the product, quotient, and power-of-a-power laws to simplify expressions involving positive integer exponents.",
      materials: [
        "Paper and pencil",
        "Calculator (optional, for checking only)",
      ],
      intro: {
        title: "Bacteria That Doubles",
        script: "Imagine one bacterium that doubles every hour. After one hour there are 2 bacteria. After two hours, 4. After ten hours, 2 to the power of 10 — that is 1024 bacteria! Writing 2 times 2 times 2... ten times is tedious. Exponents are shorthand for repeated multiplication. Today we learn rules that let us simplify expressions like 2 cubed times 2 to the fourth without writing all the twos out. There are three main laws and they all make sense if you think about what repeated multiplication actually means.",
        action: "Write on paper: 2^3 = 2 x 2 x 2 and 2^4 = 2 x 2 x 2 x 2. Count the total factors when multiplied together: 7 twos, so 2^7. Then write the rule: a^m x a^n = a^(m+n). This is the product law.",
      },
      mainActivity: {
        title: "Three Laws in Action",
        script: "I will show you all three laws and then you try one of each. Product law: when you multiply the same base, add the exponents. So 3 squared times 3 cubed equals 3 to the fifth. Quotient law: when you divide the same base, subtract the exponents. So 5 to the sixth divided by 5 squared equals 5 to the fourth. Power of a power: when you raise a power to another power, multiply the exponents. So 2 cubed, all to the power of 4, equals 2 to the twelfth. Now notice that anything to the power zero equals 1 — because dividing the same number gives 1. Try these: x to the 5 times x to the 3. Then y to the 8 divided by y to the 3. Then open bracket z squared close bracket to the power of 5.",
        action: "Write each law clearly on paper with one worked example per law. Then write one practice problem for each law and let your child solve them. Check by substituting a simple number for the variable. Confirm zero exponent: write 3^5 / 3^5 = 3^0 and show it equals 1.",
      },
      wrapUp: {
        title: "Which Law?",
        script: "Look at this expression: x cubed times x to the fourth, divided by x to the second, all raised to the power of two. Can you work through it step by step using the laws we learned? Tell me which law you are using at each step.",
        action: "Child works through the expression on paper, naming each law. The answer is x to the sixth. If they struggle, ask them to identify the operation first (multiplying? dividing? power of power?) before applying the rule.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Match the Exponent Law",
        instruction: "Draw a line from each law to an example of it.",
        left: [
          "Multiplying same base: aᵐ × aⁿ = aᵐ⁺ⁿ",
          "Dividing same base: aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
          "Power of a power: (aᵐ)ⁿ = aᵐⁿ",
          "Zero exponent: a⁰ = 1",
        ],
        right: [
          "(3²)⁴ = 3⁸",
          "5⁰ = 1",
          "2³ × 2⁴ = 2⁷",
          "6⁵ ÷ 6² = 6³",
        ],
      },
      {
        type: "circle-correct",
        title: "Multiply with Same Base",
        instruction: "Simplify using aᵐ × aⁿ = aᵐ⁺ⁿ.",
        questions: [
          { prompt: "3² × 3⁴", options: ["3⁶", "3⁸", "9⁶"] },
          { prompt: "5³ × 5²", options: ["5⁵", "5⁶", "25⁵"] },
          { prompt: "x⁵ × x³", options: ["x⁸", "x¹⁵", "2x⁸"] },
          { prompt: "2⁴ × 2", options: ["2⁵", "2⁴", "4⁴"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Divide with Same Base",
        instruction: "Simplify using aᵐ ÷ aⁿ = aᵐ⁻ⁿ.",
        questions: [
          { prompt: "4⁶ ÷ 4²", options: ["4⁴", "4³", "1⁴"] },
          { prompt: "x⁷ ÷ x³", options: ["x⁴", "x¹⁰", "x⁷"] },
          { prompt: "3⁵ ÷ 3⁵", options: ["1", "0", "3"] },
          { prompt: "y⁹ ÷ y²", options: ["y⁷", "y¹¹", "y⁴"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Power of a Power",
        instruction: "Simplify using (aᵐ)ⁿ = aᵐⁿ.",
        questions: [
          { prompt: "(2³)²", options: ["2⁶", "2⁵", "4⁶"] },
          { prompt: "(x²)⁵", options: ["x¹⁰", "x⁷", "5x²"] },
          { prompt: "(3²)³", options: ["3⁶", "3⁵", "9³"] },
        ],
      },
      {
        type: "sorting",
        title: "Which Law?",
        instruction: "Sort each expression by which exponent law applies.",
        columns: ["Multiply (add exponents)", "Divide (subtract exponents)", "Power of power (multiply)"],
        items: [
          { label: "a³ × a⁶" },
          { label: "(b⁴)³" },
          { label: "c⁸ ÷ c⁵" },
          { label: "x² × x⁷" },
          { label: "(y³)⁴" },
          { label: "z¹⁰ ÷ z³" },
        ],
      },
      {
        type: "circle-correct",
        title: "Mixed Exponent Practice",
        instruction: "Simplify each expression.",
        questions: [
          { prompt: "2³ × 2² ÷ 2⁴", options: ["2¹ = 2", "2⁹", "2⁻¹"] },
          { prompt: "(3²)³ ÷ 3⁴", options: ["3²", "3⁵", "3⁰ = 1"] },
          { prompt: "x⁶ × x² ÷ x³", options: ["x⁵", "x¹¹", "x⁴"] },
        ],
      },
      {
        type: "open-response",
        title: "Explain and Apply",
        instruction: "Show all working.",
        prompts: [
          { text: "Simplify: (2x³)² × x⁴. Show each step.", type: "lines", lines: 3 },
          { text: "A bacteria culture doubles every hour. After t hours there are 2ᵗ bacteria. How many after 8 hours? Express as a power of 2 and calculate.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "matching",
        title: "Negative Exponents",
        instruction: "Draw a line to match each negative exponent expression to its equivalent fraction.",
        left: ["2⁻¹", "3⁻²", "5⁻¹", "10⁻³", "4⁻²"],
        right: ["1/8 (not used — just 1/4²)", "1/2", "1/9", "1/1000", "1/5"],
      },
      {
        type: "circle-correct",
        title: "Negative Exponent Introduction",
        instruction: "Use a⁻ⁿ = 1/aⁿ. Circle the correct equivalent.",
        questions: [
          { prompt: "2⁻³ =", options: ["1/8", "−8", "1/6"] },
          { prompt: "5⁻² =", options: ["1/25", "−25", "1/10"] },
          { prompt: "10⁻² =", options: ["0.01", "−100", "0.1"] },
          { prompt: "3⁻¹ =", options: ["1/3", "−3", "3"] },
        ],
      },
      {
        type: "matching",
        title: "Scientific Notation Connection",
        instruction: "Draw a line to match each number to its scientific notation.",
        left: ["6 000 000", "0.0045", "302 000", "0.000071"],
        right: ["7.1 × 10⁻⁵", "6 × 10⁶", "4.5 × 10⁻³", "3.02 × 10⁵"],
      },
      {
        type: "sequence",
        title: "Exponential Growth Pattern",
        instruction: "Each sequence follows a doubling (×2) pattern. Write the next two values.",
        sequences: [
          { items: [1, 2, 4, 8], answer: [16, 32] },
          { items: [3, 6, 12, 24], answer: [48, 96] },
          { items: [1, 3, 9, 27], answer: [81, 243] },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems with Exponents",
        instruction: "Show all working and express answers as powers where possible.",
        prompts: [
          { text: "A town's population doubles every 10 years. It currently has 5000 people. Write an expression for the population after 30 years and calculate it.", type: "lines", lines: 3 },
          { text: "Simplify: (3² × 3³) ÷ 3⁴. Show each step and name the law used.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Standard Form or Not?",
        instruction: "Sort each number: is it correctly written in scientific notation (a × 10ⁿ where 1 ≤ a < 10)?",
        columns: ["Correct scientific notation", "Incorrect — needs adjusting"],
        items: [
          { label: "3.5 × 10⁴" },
          { label: "12 × 10³" },
          { label: "7.02 × 10⁻²" },
          { label: "0.6 × 10⁵" },
          { label: "1.0 × 10⁰" },
          { label: "50 × 10²" },
        ],
      },
    ],
  },

  // ── WS 3: Integer & Rational Number Operations ────────────────
  {
    slug: "integer-rational-operations",
    title: "Operations with Integers & Rational Numbers",
    strand: "Number",
    description:
      "Solve problems involving all four operations with integers and positive rational numbers",
    lesson: {
      title: "Operations with Integers and Rational Numbers",
      objective: "Confidently multiply and divide positive and negative integers, apply sign rules, and carry out all four operations with fractions.",
      materials: [
        "Paper and pencil",
        "A number line drawn on paper",
      ],
      intro: {
        title: "Below Zero in Real Life",
        script: "You know that temperatures can go below zero. If it is 3 degrees and it drops another 5 degrees, we say it is negative 2 degrees — that is 3 minus 5. But what if the temperature drops at 3 degrees per hour for 4 hours? That is negative 3 times 4. Now here is the surprising part: what if we ran time backwards? Negative 3 times negative 4 gives us positive 12 — because reversing a fall is a rise. The sign rules for multiplication and division all follow this kind of logic.",
        action: "Draw a number line from -10 to 10. Walk through: start at 0, step left 3 four times to show -3 x 4 = -12. Then explain that two negatives multiplied give a positive by discussing the concept of reversing direction twice. Write the four sign rules on paper together.",
      },
      mainActivity: {
        title: "Sign Rules and Fraction Operations",
        script: "The rules are: positive times positive is positive, positive times negative is negative, negative times negative is positive, and the same applies to division. Watch me: negative 6 times negative 5 equals positive 30. Now you try negative 8 times 3. For fractions, remember to multiply numerators together and denominators together. To divide a fraction, flip the second one and multiply. So 3 quarters divided by one half equals 3 quarters times 2 over 1, which is 3 halves. Now you try 2 thirds times 9 quarters.",
        action: "Write two multiplication examples (one with integers, one with fractions) and work through them aloud. Then give your child two problems to solve independently: (-7) x (-4) and 3/4 divided by 1/2. Check their work and focus on whether they are applying the sign rule correctly. Also cover order of operations (BODMAS) with one example like -3 + 4 x 2.",
      },
      wrapUp: {
        title: "Make Up Your Own",
        script: "I want you to make up one multiplication problem with integers and one division problem with fractions. Write them down, solve them, and then explain the sign rule you used.",
        action: "Child writes and solves their own examples. Check that they can articulate the sign rules in their own words. If they are unsure about fraction division, demonstrate the flip-and-multiply trick once more before moving to the worksheet.",
      },
    },
    activities: [
      {
        type: "circle-correct",
        title: "Multiplying Integers",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "−4 × 3", options: ["−12", "12", "−7"] },
          { prompt: "−5 × (−6)", options: ["30", "−30", "11"] },
          { prompt: "7 × (−2)", options: ["−14", "14", "−9"] },
          { prompt: "−8 × (−4)", options: ["32", "−32", "12"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Dividing Integers",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "−24 ÷ 6", options: ["−4", "4", "−18"] },
          { prompt: "−36 ÷ (−9)", options: ["4", "−4", "27"] },
          { prompt: "45 ÷ (−5)", options: ["−9", "9", "−40"] },
          { prompt: "−56 ÷ (−7)", options: ["8", "−8", "49"] },
        ],
      },
      {
        type: "matching",
        title: "Sign Rules",
        instruction: "Draw a line to match each sign combination to its result sign.",
        left: ["positive × positive", "negative × negative", "positive × negative", "negative ÷ positive"],
        right: ["negative", "positive", "positive", "negative"],
      },
      {
        type: "circle-correct",
        title: "Order of Operations with Integers",
        instruction: "Use BODMAS. Circle the correct answer.",
        questions: [
          { prompt: "−3 + 4 × 2", options: ["5", "2", "−14"] },
          { prompt: "(−2 + 5) × (−3)", options: ["−9", "9", "3"] },
          { prompt: "−10 − (−4) × 2", options: ["−2", "−18", "2"] },
          { prompt: "12 ÷ (−4) + 5", options: ["2", "−8", "8"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Operations with Rational Numbers",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3/4 ÷ 1/2", options: ["3/2", "3/8", "2/3"] },
          { prompt: "2/3 × 9/4", options: ["3/2", "6/7", "18/12"] },
          { prompt: "1 3/4 + 2 1/2", options: ["4 1/4", "3 3/4", "4"] },
          { prompt: "3 1/3 − 1 2/3", options: ["1 2/3", "2 1/3", "5"] },
        ],
      },
      {
        type: "sorting",
        title: "Positive, Negative or Zero?",
        instruction: "Without calculating, sort each expression by sign of result.",
        columns: ["Positive", "Negative", "Zero"],
        items: [
          { label: "(−3) × (−4)" },
          { label: "(−5) + 5" },
          { label: "6 × (−2)" },
          { label: "(−2)³" },
          { label: "(−1)⁴" },
          { label: "−10 ÷ 2" },
        ],
      },
      {
        type: "open-response",
        title: "Integer Word Problems",
        instruction: "Show all working.",
        prompts: [
          { text: "The temperature drops 3°C each hour for 5 hours from 8°C. What is the final temperature?", type: "lines", lines: 2 },
          { text: "A diver is at −18 m and ascends at 3 m per minute. How long until she reaches the surface?", type: "lines", lines: 2 },
          { text: "Expand and simplify: (−3) × (4 − 7) + 2 × (−5)", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "BODMAS Chains with Integers",
        instruction: "Apply BODMAS carefully. Circle the correct answer.",
        questions: [
          { prompt: "−2 × (3 + (−5))", options: ["4", "−4", "16"] },
          { prompt: "(−4)² − 3 × (−2)", options: ["22", "10", "−10"] },
          { prompt: "−18 ÷ (−3) + (−4) × 2", options: ["−2", "14", "2"] },
          { prompt: "5 − 2 × (−3) + (−1)", options: ["10", "0", "12"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Four Operations with Mixed Numbers",
        instruction: "Circle the correct answer. Convert to improper fractions to help.",
        questions: [
          { prompt: "2½ + 1¾", options: ["4¼", "3¾", "4½"] },
          { prompt: "3⅓ − 1⅔", options: ["1⅔", "2", "1⅓"] },
          { prompt: "1½ × 2⅔", options: ["4", "3½", "5"] },
          { prompt: "2¼ ÷ ¾", options: ["3", "1½", "2"] },
        ],
      },
      {
        type: "matching",
        title: "Absolute Value",
        instruction: "Draw a line to match each expression to its value. |x| means the distance of x from zero.",
        left: ["|−7|", "|+3|", "|−12|", "|0|", "|−4 + (−3)|"],
        right: ["0", "7", "3", "12", "7"],
      },
      {
        type: "open-response",
        title: "Temperature and Depth Word Problems",
        instruction: "Show all working. Include units.",
        prompts: [
          { text: "A submarine descends 15 m, then a further 23 m, then rises 8 m. If it started at the surface (0 m), what is its final depth? Write as an integer.", type: "lines", lines: 2 },
          { text: "On Monday the temperature is −3°C. By Wednesday it has tripled in coldness (multiplied by 3). What is Wednesday's temperature?", type: "lines", lines: 2 },
          { text: "A bank account has a balance of −$240. If the owner deposits $75 each week for 4 weeks, what is the new balance?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Operation Rules for Fractions",
        instruction: "Sort each step into the correct operation column.",
        columns: ["Adding fractions", "Multiplying fractions", "Dividing fractions"],
        items: [
          { label: "Find a common denominator" },
          { label: "Flip the second fraction and multiply" },
          { label: "Multiply numerators together" },
          { label: "Add numerators, keep denominator" },
          { label: "Multiply denominators together" },
          { label: "No need for a common denominator" },
        ],
      },
      {
        type: "home-activity",
        title: "Integers in the Real World",
        instruction: "Look for integers in everyday life this week.",
        suggestions: [
          "Check the weather forecast for your city and three other cities. Record minimum temperatures as integers. Find the difference between the highest and lowest.",
          "Look up the elevation (in metres) of three mountains and three ocean trenches. List them as positive and negative integers and order them from deepest to highest.",
          "Find a recipe that serves 4 people. Multiply each ingredient by −1/2 — what does that mean? Discuss why we can't actually have a negative amount of an ingredient.",
        ],
      },
    ],
  },

  // ── WS 4: Percentages, Rates & Financial Maths ────────────────
  {
    slug: "percentages-rates-financial",
    title: "Percentages, Rates & Financial Maths",
    strand: "Number",
    description:
      "Solve practical problems involving ratios, percentages and rates in financial and everyday contexts",
    lesson: {
      title: "Percentages, Rates and Financial Maths",
      objective: "Calculate percentage increases, decreases, discounts, and simple interest using real-world financial contexts.",
      materials: [
        "Paper and pencil",
        "Calculator",
        "Pen and paper for a pretend shop price list",
      ],
      intro: {
        title: "Going Shopping",
        script: "Imagine you see a jacket marked $120 with a 25% off sale sign. How much will you actually pay? Percentages show up everywhere in real life — discounts, taxes like GST, interest on savings, and percentage changes in prices. Today we are going to learn how to calculate all of these so you can always figure out what something really costs, and whether you are getting a good deal.",
        action: "Write a short pretend price list: shirt $40, book $25, shoes $90. Ask your child: if everything is 10% off, how much does each cost? Work through the shirt together: 10% of $40 = $4, so the sale price is $36. Let them do the book and shoes. Discuss the shortcut: multiply by 0.9 to find 90% (the amount you pay after 10% off).",
      },
      mainActivity: {
        title: "Percentage Change and Simple Interest",
        script: "There are two other types I want to show you. First, percentage change: if a price goes from $50 to $65, the increase is $15. To find the percentage, divide the change by the original and multiply by 100: 15 divided by 50 times 100 equals 30%. Second, simple interest: if you put $500 in a bank account at 4% per year for 3 years, you earn I = PRT divided by 100 = 500 times 4 times 3 divided by 100 = $60. I will do one of each, then you do one.",
        action: "Work through: percentage decrease from $80 to $60 (show 20 / 80 x 100 = 25%). Then simple interest: P = $1000, R = 5%, T = 2 years. Write the formula together. Then give your child: calculate percentage increase from $40 to $52, and simple interest on $200 at 6% for 3 years. Check their answers.",
      },
      wrapUp: {
        title: "Best Deal?",
        script: "Here is a challenge: Shop A offers 20% off a $90 item. Shop B offers $15 off the same item. Which shop gives the better deal? Work it out and explain your reasoning to me.",
        action: "Child calculates both: 20% of $90 = $18 off (pay $72) versus $15 off (pay $75). Shop A is better. If they get it right, ask: at what price would both deals be equal? (That is a great extension question.) Then they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "circle-correct",
        title: "Percentage of a Quantity",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "35% of 200", options: ["70", "65", "35"] },
          { prompt: "12.5% of 80", options: ["10", "12.5", "8"] },
          { prompt: "8% of 450", options: ["36", "40", "58"] },
          { prompt: "150% of 60", options: ["90", "60", "80"] },
        ],
      },
      {
        type: "matching",
        title: "Match Problem to Answer",
        instruction: "Draw a line to match each financial problem to its answer.",
        left: [
          "20% discount on $85",
          "15% tip on a $60 bill",
          "GST (10%) added to $120",
          "30% increase on $40",
        ],
        right: ["$52", "$9", "$132", "$68"],
      },
      {
        type: "circle-correct",
        title: "Percentage Increase & Decrease",
        instruction: "Circle the correct percentage change.",
        questions: [
          { prompt: "Price increases from $50 to $65. % increase =", options: ["30%", "15%", "25%"] },
          { prompt: "Price decreases from $80 to $60. % decrease =", options: ["25%", "20%", "33%"] },
          { prompt: "Population was 2000, now 2400. % increase =", options: ["20%", "16%", "25%"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Simple Interest",
        instruction: "Use I = PRT/100. Circle the correct interest amount.",
        questions: [
          { prompt: "P = $500, R = 4% p.a., T = 2 years", options: ["$40", "$20", "$80"] },
          { prompt: "P = $1000, R = 5% p.a., T = 3 years", options: ["$150", "$500", "$50"] },
          { prompt: "P = $200, R = 10% p.a., T = 1 year", options: ["$20", "$200", "$2"] },
        ],
      },
      {
        type: "sorting",
        title: "Best Deal?",
        instruction: "Sort these offers from best to worst value for the buyer.",
        columns: ["Best value", "Middle", "Worst value"],
        items: [
          { label: "20% off a $90 item ($72)" },
          { label: "Buy 2 get 1 free — item costs $30 each (pay $60 for 3)" },
          { label: "$15 off a $90 item ($75)" },
        ],
      },
      {
        type: "circle-correct",
        title: "Exchange Rates",
        instruction: "Use the rate: A$1 = US$0.65.",
        questions: [
          { prompt: "Convert A$200 to USD", options: ["US$130", "US$307", "US$200"] },
          { prompt: "Convert US$65 to AUD", options: ["A$100", "A$42", "A$65"] },
        ],
      },
      {
        type: "open-response",
        title: "Financial Problem Solving",
        instruction: "Show all working and include units in your answers.",
        prompts: [
          { text: "You invest $3000 at 6% simple interest per year. How much interest will you earn in 5 years? What is the total value of your investment?", type: "lines", lines: 3 },
          { text: "A laptop costs $1200. Option A: 25% off. Option B: $280 off. Which is the better deal and by how much?", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 5: Expanding & Factorising Linear Expressions ─────────
  {
    slug: "expanding-factorising-linear",
    title: "Expanding & Factorising Linear Expressions",
    strand: "Algebra",
    description:
      "Rearrange, expand and factorise linear algebraic expressions",
    lesson: {
      title: "Expanding and Factorising Linear Expressions",
      objective: "Expand brackets using the distributive law and factorise linear expressions by finding the highest common factor.",
      materials: [
        "Paper and pencil",
        "Ruler (optional, for drawing area diagrams)",
      ],
      intro: {
        title: "The Distributive Law as an Area",
        script: "Imagine a rectangle that is 3 metres wide and its length is x plus 4 metres. The area is 3 times the whole length: 3 times x plus 4. If I expand that, I multiply 3 by x to get 3x, and 3 by 4 to get 12. So the area is 3x plus 12. That is expanding. Factorising is the reverse: if someone gives me 3x plus 12 and asks me to factorise it, I look for the common factor — what divides both 3x and 12? Three does! So I write 3 times the bracket x plus 4. Expanding and factorising are opposites.",
        action: "Draw a rectangle on paper, label width 3 and length (x + 4). Shade two sub-rectangles: one 3 by x, one 3 by 4. Write 3(x + 4) = 3x + 12. Then reverse: given 6y + 9, ask what the HCF of 6 and 9 is (answer: 3), so 6y + 9 = 3(2y + 3). Verify by expanding.",
      },
      mainActivity: {
        title: "Expand Then Factorise",
        script: "Let me expand 4 open bracket 2x minus 3 close bracket. I multiply 4 by 2x to get 8x, and 4 by negative 3 to get negative 12. So the answer is 8x minus 12. Watch out for the minus sign — it applies to everything inside. Now factorise 10a plus 15. The HCF of 10 and 15 is 5, so I get 5 open bracket 2a plus 3 close bracket. Check by expanding: 5 times 2a is 10a, 5 times 3 is 15. Correct! Now you do these two: expand negative 2 open bracket a minus 6 close bracket, then factorise 12n plus 18.",
        action: "Let the child work both problems on paper. For expanding, watch that they handle the negative sign correctly: -2(a - 6) = -2a + 12. For factorising 12n + 18, the HCF is 6. Check by expanding their answer. Common errors: forgetting to distribute to both terms, or dividing by a number that is not the HCF.",
      },
      wrapUp: {
        title: "Spot the Difference",
        script: "Here are two expressions: 3 open bracket x plus 5 close bracket and 3x plus 5. Are they the same? Expand the first one and compare.",
        action: "Child expands 3(x + 5) = 3x + 15, then sees it is NOT the same as 3x + 5. This is a key conceptual point. Discuss: the bracket means multiply EVERYTHING inside by 3. Once they can articulate this clearly, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Match Expression to Expanded Form",
        instruction: "Draw a line to match each expression to its expanded form.",
        left: ["2(x + 3)", "3(2y − 4)", "−(a + 5)", "4(3m + 2)", "5(x − 1)"],
        right: ["5x − 5", "12m + 8", "−a − 5", "6y − 12", "2x + 6"],
      },
      {
        type: "circle-correct",
        title: "Expand the Brackets",
        instruction: "Circle the correct expanded form.",
        questions: [
          { prompt: "3(x + 4)", options: ["3x + 12", "3x + 4", "x + 12"] },
          { prompt: "5(2y − 3)", options: ["10y − 15", "10y − 3", "7y − 8"] },
          { prompt: "−2(a − 6)", options: ["−2a + 12", "−2a − 12", "2a − 12"] },
          { prompt: "4(3n + 1)", options: ["12n + 4", "12n + 1", "7n + 4"] },
        ],
      },
      {
        type: "matching",
        title: "Match to Factorised Form",
        instruction: "Draw a line to match each expression to its factorised form.",
        left: ["6x + 9", "4y − 12", "10a + 15", "8m − 6", "12n + 18"],
        right: ["2(4m − 3)", "6(2n + 3)", "3(2x + 3)", "5(2a + 3)", "4(y − 3)"],
      },
      {
        type: "circle-correct",
        title: "Factorise the Expression",
        instruction: "Circle the correct factorised form.",
        questions: [
          { prompt: "8x + 12", options: ["4(2x + 3)", "8(x + 4)", "2(4x + 6)"] },
          { prompt: "15y − 10", options: ["5(3y − 2)", "5(y − 2)", "15(y − 1)"] },
          { prompt: "6a + 9b", options: ["3(2a + 3b)", "6(a + b)", "3(2a + 9b)"] },
          { prompt: "14m − 21", options: ["7(2m − 3)", "7(m − 3)", "14(m − 3)"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Expand and Simplify",
        instruction: "Expand then collect like terms.",
        questions: [
          { prompt: "2(x + 3) + 3(x + 1)", options: ["5x + 9", "5x + 4", "6x + 9"] },
          { prompt: "4(y − 2) − 2(y + 1)", options: ["2y − 10", "2y − 6", "6y − 10"] },
          { prompt: "3(2a + 1) + 2(a − 3)", options: ["8a − 3", "8a + 3", "6a − 3"] },
        ],
      },
      {
        type: "sorting",
        title: "Fully Simplified or Not?",
        instruction: "Sort: which expressions are already fully simplified?",
        columns: ["Fully simplified", "Can simplify further"],
        items: [
          { label: "3x + 5x" },
          { label: "4a + 3b" },
          { label: "2y − y + 4" },
          { label: "6m + 3" },
          { label: "5n − 2n + n" },
          { label: "x² + 2x" },
        ],
      },
      {
        type: "open-response",
        title: "Algebra in Context",
        instruction: "Write and simplify expressions.",
        prompts: [
          { text: "A rectangle has length (3x + 2) and width 4. Write and expand an expression for its perimeter.", type: "lines", lines: 3 },
          { text: "Factorise fully: 12x² + 18x. Show the HCF and your working.", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 6: Graphing Linear Relations ──────────────────────────
  {
    slug: "graphing-linear-relations",
    title: "Graphing Linear Relations",
    strand: "Algebra",
    description:
      "Graph linear relations by plotting tables of values and interpret gradient and y-intercept",
    lesson: {
      title: "Graphing Linear Relations",
      objective: "Plot a straight-line graph from a table of values and read the gradient and y-intercept from the equation y = mx + c.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Graph paper or lined paper to draw a grid on",
      ],
      intro: {
        title: "A Phone Bill You Can Graph",
        script: "Imagine a phone plan that charges a flat fee of $10 per month, plus $0.20 per minute of calls. If you use m minutes, your bill is C = 0.2m + 10. That is a linear equation. If you use 0 minutes, you pay $10. If you use 50 minutes, you pay $20. We can plot these points on a graph and draw a straight line through them. The line tells us the cost for ANY number of minutes. Today we are going to learn to graph any straight line and understand what the numbers in the equation tell us.",
        action: "Draw a set of axes on grid paper. Label the horizontal axis m (minutes) and the vertical axis C (cost in dollars). Plot the points (0, 10) and (50, 20) and draw a straight line through them. Point to where the line crosses the vertical axis: that is the y-intercept, $10. Explain: the gradient (steepness) is how much the cost rises per minute.",
      },
      mainActivity: {
        title: "Table of Values to Graph",
        script: "For the equation y equals 2x plus 1, I first make a table of values. When x is negative 1, y is 2 times negative 1 plus 1, which is negative 1. When x is 0, y is 1. When x is 2, y is 5. I plot these three points and draw a line through them. The gradient is 2 — for every 1 step to the right, the line goes 2 steps up. The y-intercept is 1, because the line crosses the y-axis at y equals 1. In the equation y equals mx plus c, m is always the gradient and c is always the y-intercept. Your turn: make a table of values for y equals negative x plus 3, using x equals negative 1, 0, 1, 2. Plot it.",
        action: "Work through y = 2x + 1 together, completing a table for x = -1, 0, 1, 2 and plotting the four points. Draw the line with a ruler. Then let the child complete the table for y = -x + 3 and draw that line on the same grid. Ask: which line goes uphill? Which goes downhill? Why?",
      },
      wrapUp: {
        title: "Reading the Equation",
        script: "Without graphing, tell me: what is the gradient of y equals 3x minus 2? What is the y-intercept? Does this line go uphill or downhill from left to right?",
        action: "Child answers: gradient = 3 (steep uphill), y-intercept = -2 (line crosses y-axis at -2). Then ask them to write a new equation for a line with gradient -1 and y-intercept 4. Once they can do that confidently, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "circle-correct",
        title: "Complete the Table of Values",
        instruction: "For y = 2x + 1, find the missing y-values.",
        questions: [
          { prompt: "x = 0, y = ?", options: ["1", "2", "3"] },
          { prompt: "x = 2, y = ?", options: ["5", "4", "3"] },
          { prompt: "x = −1, y = ?", options: ["−1", "1", "−3"] },
        ],
      },
      {
        type: "matching",
        title: "Match Equation to Gradient",
        instruction: "Draw a line to match each equation to its gradient.",
        left: ["y = 3x + 2", "y = −x + 5", "y = 1/2 x − 3", "y = −2x", "y = 4"],
        right: ["0", "3", "1/2", "−2", "−1"],
      },
      {
        type: "circle-correct",
        title: "Identify Gradient & y-intercept",
        instruction: "Identify m and c in y = mx + c.",
        questions: [
          { prompt: "y = 4x − 3. Gradient =", options: ["4", "−3", "1"] },
          { prompt: "y = −2x + 7. y-intercept =", options: ["7", "−2", "0"] },
          { prompt: "y = x + 5. Gradient =", options: ["1", "5", "0"] },
          { prompt: "y = 3. Gradient =", options: ["0", "3", "undefined"] },
        ],
      },
      {
        type: "sorting",
        title: "Positive, Negative or Zero Gradient?",
        instruction: "Sort each line by gradient type.",
        columns: ["Positive gradient", "Negative gradient", "Zero gradient"],
        items: [
          { label: "y = 2x + 1" },
          { label: "y = −3x + 5" },
          { label: "y = 5" },
          { label: "y = 1/2 x − 2" },
          { label: "y = −x" },
          { label: "y = 0" },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the x-intercept",
        instruction: "Set y = 0 and solve.",
        questions: [
          { prompt: "y = 2x − 6. x-intercept =", options: ["3", "−3", "6"] },
          { prompt: "y = x + 4. x-intercept =", options: ["−4", "4", "0"] },
          { prompt: "y = 3x − 9. x-intercept =", options: ["3", "−3", "9"] },
        ],
      },
      {
        type: "matching",
        title: "Match Description to Equation",
        instruction: "Draw a line to match each description to its equation.",
        left: [
          "Steep positive slope, crosses y-axis at 2",
          "Gentle negative slope, crosses y-axis at 5",
          "Horizontal line at y = −3",
          "Passes through origin with gradient 2",
        ],
        right: ["y = −1/2 x + 5", "y = 2x", "y = −3", "y = 4x + 2"],
      },
      {
        type: "open-response",
        title: "Graphing and Interpreting",
        instruction: "Show your working.",
        prompts: [
          { text: "For y = 3x − 2, complete a table for x = −1, 0, 1, 2. Describe the gradient and y-intercept.", type: "box" },
          { text: "A phone plan costs $20/month plus $0.30/minute. Write a linear equation for cost C with m minutes. What does the gradient represent?", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 7: Solving Linear Equations & Inequalities ────────────
  {
    slug: "linear-equations-inequalities",
    title: "Linear Equations & Inequalities",
    strand: "Algebra",
    description:
      "Solve linear equations with rational solutions and one-variable inequalities",
    lesson: {
      title: "Linear Equations and Inequalities",
      objective: "Solve linear equations by doing the same operation to both sides, and solve simple inequalities with correct notation.",
      materials: [
        "Paper and pencil",
        "A balance scale drawing (draw two pans on paper)",
      ],
      intro: {
        title: "A Balanced Scale",
        script: "Imagine a balance scale perfectly level. On the left pan sits a mystery bag of apples plus 3 extra apples — we can write that as x plus 3. On the right pan there are 11 apples. The scale is balanced, meaning x plus 3 equals 11. Now to find out how many are in the mystery bag, I remove 3 apples from BOTH sides — because the scale must stay balanced. What is left? x on the left and 8 on the right. So x equals 8. That is how we solve equations: whatever we do to one side, we do to the other.",
        action: "Draw two balance pans on paper. On the left write x + 3, on the right write 11. Cross out 3 from each side, then write the simplified version: x = 8. Verify: substitute 8 back in. Then draw a new balance showing 2x - 5 = 9. Walk through: add 5 to both sides, then divide both sides by 2.",
      },
      mainActivity: {
        title: "Solving and Inequalities",
        script: "Let me solve 3y minus 5 equals 13. Add 5 to both sides: 3y equals 18. Divide both sides by 3: y equals 6. Now check: 3 times 6 minus 5 equals 18 minus 5 equals 13. Correct! For inequalities, the process is identical, but instead of equals we use a greater-than or less-than sign. Solve x plus 4 is greater than 9. Subtract 4 from both sides: x is greater than 5. That means any number bigger than 5 works. The one extra rule: if you multiply or divide both sides by a NEGATIVE number, the inequality sign flips. Now you solve: 2x plus 3 equals x plus 7. Then solve: 3x minus 6 is less than 12.",
        action: "Let the child solve 2x + 3 = x + 7 (answer: x = 4) and 3x - 6 < 12 (answer: x < 6) on paper. Check their working step by step. Point out they should always write the step they are performing on the side (e.g., add 6 to both sides). Verify their equation answer by substituting back.",
      },
      wrapUp: {
        title: "Words to Algebra",
        script: "I am going to describe a problem and I want you to write it as an inequality and then solve it. You have $50. You buy a book for $x. You want to have more than $15 left over. Write the inequality and find the maximum price of the book.",
        action: "Child writes: 50 - x > 15, then solves to get x < 35. Discuss what this means in plain English. Once they can move comfortably between words and algebra, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "circle-correct",
        title: "Solve Linear Equations",
        instruction: "Circle the correct solution.",
        questions: [
          { prompt: "2x + 7 = 15", options: ["x = 4", "x = 11", "x = 7"] },
          { prompt: "3y − 5 = 13", options: ["y = 6", "y = 8", "y = 3"] },
          { prompt: "x/3 + 4 = 7", options: ["x = 9", "x = 11", "x = 3"] },
          { prompt: "5(n − 2) = 20", options: ["n = 6", "n = 4", "n = 2"] },
          { prompt: "2x + 3 = x + 7", options: ["x = 4", "x = 10", "x = 5"] },
        ],
      },
      {
        type: "matching",
        title: "Match Equation to Solution",
        instruction: "Draw a line to match each equation to its solution.",
        left: ["4x − 3 = 17", "3(x + 2) = 18", "x/2 − 1 = 5", "2x + 5 = x + 9"],
        right: ["x = 12", "x = 4", "x = 4", "x = 5"],
      },
      {
        type: "sorting",
        title: "Inequality Symbols",
        instruction: "Match each word description to the correct inequality symbol.",
        columns: ["< (less than)", "≤ (at most)", "> (greater than)", "≥ (at least)"],
        items: [
          { label: "x is at most 5" },
          { label: "x is greater than 3" },
          { label: "x is less than 10" },
          { label: "x is at least 7" },
        ],
      },
      {
        type: "circle-correct",
        title: "Solve Inequalities",
        instruction: "Circle the correct solution.",
        questions: [
          { prompt: "x + 4 > 9", options: ["x > 5", "x > 13", "x < 5"] },
          { prompt: "2x ≤ 14", options: ["x ≤ 7", "x ≤ 12", "x ≥ 7"] },
          { prompt: "3x − 6 < 12", options: ["x < 6", "x < 2", "x > 6"] },
          { prompt: "x/4 ≥ 3", options: ["x ≥ 12", "x ≥ 7", "x ≤ 12"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Equations with Fractions",
        instruction: "Circle the correct solution.",
        questions: [
          { prompt: "x/2 = 7", options: ["x = 14", "x = 3.5", "x = 9"] },
          { prompt: "3x/4 = 9", options: ["x = 12", "x = 6.75", "x = 36"] },
          { prompt: "2(x + 3)/5 = 4", options: ["x = 7", "x = 2", "x = 10"] },
        ],
      },
      {
        type: "matching",
        title: "Match Situation to Inequality",
        instruction: "Draw a line to match each situation to the correct inequality.",
        left: [
          "You need more than 60 points to pass",
          "The bag can carry at most 15 kg",
          "You must be at least 18 years old",
          "Temperature must be below 5°C for frost",
        ],
        right: ["T < 5", "w ≤ 15", "a ≥ 18", "p > 60"],
      },
      {
        type: "open-response",
        title: "Word Problems",
        instruction: "Write an equation or inequality, then solve.",
        prompts: [
          { text: "Three times a number, minus 8, equals 22. Find the number.", type: "lines", lines: 2 },
          { text: "You have $50 and spend $x on a book. You want more than $15 left. Write and solve an inequality.", type: "lines", lines: 3 },
          { text: "Check whether x = −2 is a solution to 3x + 11 > 4. Show your substitution.", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 8: Perimeter & Area of Composite Shapes ───────────────
  {
    slug: "perimeter-area-composite-shapes",
    title: "Perimeter & Area of Composite Shapes",
    strand: "Measurement",
    description:
      "Solve problems involving perimeter and area of composite shapes made from rectangles, triangles and semicircles",
    lesson: {
      title: "Perimeter and Area of Composite Shapes",
      objective: "Find the perimeter and area of composite shapes by splitting them into simpler shapes or subtracting a cut-out.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Scissors (optional, to cut out shapes from paper)",
      ],
      intro: {
        title: "Floor Plans",
        script: "Architects use composite shapes every day. Rooms are not always neat rectangles — they might be an L-shape, or a rectangle with a bay window added. To find the area of an L-shaped room, you just cut it into two rectangles, find each area, and add them. To find the perimeter, you carefully trace around the outside edges. Today we will practice both strategies: adding parts together and subtracting a cut-out.",
        action: "Draw a simple L-shape on paper (a large rectangle with a small rectangle cut from one corner). Mark some dimensions. Ask: how would you find the area? Guide the child to split it into two rectangles or subtract the missing corner from the big rectangle. Both methods should give the same answer. Demonstrate both.",
      },
      mainActivity: {
        title: "Two Strategies",
        script: "Strategy one: add the parts. A rectangle 10 by 6 has area 60. A triangle on top with base 10 and height 4 has area one half times 10 times 4 equals 20. Total: 80 square centimetres. Strategy two: subtract the cut-out. Start with the big 10 by 8 rectangle (area 80), then subtract the triangular cut-out (area 20), leaving 60. For perimeter: only count the outside edges — do not include any internal lines. Now you try: find the area and perimeter of an L-shape that is 8 cm tall, 6 cm wide, with a 3 by 2 cm rectangle cut from the top right corner.",
        action: "Draw the L-shape with all dimensions labelled. Walk through the area calculation together (8 x 6 - 3 x 2 = 48 - 6 = 42 cm squared, or split into two rectangles). For perimeter, trace each outer edge: 8, 6, 3, 2, 5, 4 (ensure all 6 sides are counted). Then let the child attempt a second composite shape independently.",
      },
      wrapUp: {
        title: "The Running Track",
        script: "A running track has a rectangular middle section and a semicircle on each end. If I want to find the total perimeter of the track, what shapes do I need to consider and which formula do I need to remember?",
        action: "Child identifies: perimeter = two long straight sides + two semicircle circumferences (which together make one full circle). They write the formula and describe the strategy. Once confident, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Match Shape to Area Formula",
        instruction: "Draw a line to match each shape to its area formula.",
        left: ["Rectangle", "Triangle", "Parallelogram", "Trapezium"],
        right: ["A = ½(a + b)h", "A = bh", "A = lw", "A = ½bh"],
      },
      {
        type: "circle-correct",
        title: "Area of Composite Shapes",
        instruction: "A shape = rectangle (10 cm × 6 cm) + triangle on top (base 10 cm, height 4 cm).",
        questions: [
          { prompt: "Area of the rectangle:", options: ["60 cm²", "32 cm²", "48 cm²"] },
          { prompt: "Area of the triangle:", options: ["20 cm²", "40 cm²", "10 cm²"] },
          { prompt: "Total composite area:", options: ["80 cm²", "100 cm²", "60 cm²"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Perimeter of Composite Shapes",
        instruction: "Find the perimeter. Count outer edges only.",
        questions: [
          { prompt: "L-shape outer edges: 8, 5, 3, 2, 5, 3 cm. Perimeter =", options: ["26 cm", "28 cm", "24 cm"] },
          { prompt: "Rectangle 12 × 8 with 2×3 corner cut out. Perimeter =", options: ["50 cm", "40 cm", "44 cm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Area Involving Semicircles",
        instruction: "Use π ≈ 3.14.",
        questions: [
          { prompt: "Area of semicircle, radius 5 cm:", options: ["39.3 cm²", "78.5 cm²", "15.7 cm²"] },
          { prompt: "Rectangle (10 × 6) with semicircle (r = 3) on one end. Total area:", options: ["74.1 cm²", "60 cm²", "88.3 cm²"] },
        ],
      },
      {
        type: "sorting",
        title: "Add Parts or Subtract Cut-out?",
        instruction: "Sort each composite shape problem by strategy.",
        columns: ["Add parts together", "Subtract the cut-out"],
        items: [
          { label: "Rectangle with triangle on top" },
          { label: "Large square with small square hole" },
          { label: "Two rectangles joined in an L-shape" },
          { label: "Circle with rectangular piece removed" },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Area Problems",
        instruction: "Show all working. Include units.",
        prompts: [
          { text: "A garden is a rectangle (15 m × 8 m) with a triangular bed (base 6 m, height 4 m) removed from one corner. Find the remaining area.", type: "lines", lines: 3 },
          { text: "A running track is a rectangle (100 m × 60 m) with a semicircle on each short end. Calculate the total perimeter of the track.", type: "lines", lines: 4 },
        ],
      },
    ],
  },

  // ── WS 9: Volume of Right Prisms ─────────────────────────────
  {
    slug: "volume-right-prisms",
    title: "Volume of Right Prisms",
    strand: "Measurement",
    description:
      "Calculate the volume of right prisms with various cross-sections using V = Ah",
    lesson: {
      title: "Volume of Right Prisms",
      objective: "Calculate the volume of rectangular, triangular, and trapezoidal prisms using the formula V = cross-section area times height (length).",
      materials: [
        "Paper and pencil",
        "A rectangular box from the kitchen (cereal box, tissue box, etc.)",
        "Ruler",
      ],
      intro: {
        title: "Stacking Slices",
        script: "Pick up that box. A prism is like a shape that has been stretched out in one direction. If you sliced this cereal box into thin layers like a loaf of bread, every slice would look the same — they all have the same cross-section. So to find the volume, you just figure out the area of one slice, then multiply by how many slices fit — which is the length. Volume equals area of cross-section times length. For this box, the cross-section is a rectangle.",
        action: "Measure the cereal box together: length, width, and height. Calculate volume as L x W x H. Then reframe it: cross-section area (width x height) times length. Both give the same answer. This shows V = Ah works for rectangular prisms because A = lw and you multiply by h.",
      },
      mainActivity: {
        title: "Triangular and Trapezoidal Prisms",
        script: "Now imagine slicing a Toblerone box — the cross-section is a triangle! The area of a triangle is one half times base times height. If the triangle has base 6 cm and height 4 cm, the cross-section area is 12 square centimetres. If the prism is 10 cm long, the volume is 12 times 10 equals 120 cubic centimetres. For a trapezoidal prism, the cross-section is a trapezoid, and its area is one half times (side a plus side b) times height. Let me try one and then you try one. Triangular prism: base 8 m, height 3 m, length 7 m.",
        action: "Demonstrate: area of triangle = 1/2 x 8 x 3 = 12 m squared. V = 12 x 7 = 84 m cubed. Then give the child: triangular prism with base 5 cm, height 5 cm, length 8 cm. Answer: area = 12.5 cm squared, V = 100 cm cubed. Also demonstrate rearranging: if V = 240 and A = 30, what is the length? Length = V / A = 8.",
      },
      wrapUp: {
        title: "The Pool Problem",
        script: "A swimming pool is 25 metres long, 10 metres wide, and 1.8 metres deep. What is the volume in cubic metres? And knowing that one cubic metre equals 1000 litres, what is the capacity in litres?",
        action: "Child calculates: V = 25 x 10 x 1.8 = 450 m cubed = 450,000 litres. If they are unsure, remind them the cross-section of a rectangular pool is just length times width. Once they can explain why we multiply by height (or length), they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Match Prism to Cross-Section Formula",
        instruction: "Draw a line to match each prism to the formula for its cross-section area.",
        left: ["Rectangular prism", "Triangular prism", "Trapezoidal prism"],
        right: ["A = ½(a + b)h", "A = lw", "A = ½bh"],
      },
      {
        type: "circle-correct",
        title: "V = Cross-Section Area × Length",
        instruction: "Circle the correct volume.",
        questions: [
          { prompt: "Cross-section = 12 cm², length = 8 cm", options: ["96 cm³", "20 cm³", "48 cm³"] },
          { prompt: "Cross-section = 25 m², length = 6 m", options: ["150 m³", "31 m³", "75 m³"] },
          { prompt: "Cross-section = 30 cm², length = 5 cm", options: ["150 cm³", "35 cm³", "75 cm³"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Triangular Prism Volume",
        instruction: "Find cross-section area (triangle) then multiply by length.",
        questions: [
          { prompt: "Base 6 cm, height 4 cm, length 10 cm", options: ["120 cm³", "240 cm³", "60 cm³"] },
          { prompt: "Base 8 m, height 3 m, length 7 m", options: ["84 m³", "168 m³", "21 m³"] },
          { prompt: "Base 5 cm, height 5 cm, length 8 cm", options: ["100 cm³", "200 cm³", "50 cm³"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Missing Dimension",
        instruction: "Rearrange V = Ah to find the unknown.",
        questions: [
          { prompt: "V = 240 cm³, A = 30 cm². Length =", options: ["8 cm", "210 cm", "7200 cm"] },
          { prompt: "V = 180 m³, length = 12 m. Cross-section area =", options: ["15 m²", "2160 m²", "168 m²"] },
          { prompt: "V = 120 cm³, l = 5 cm, w = 4 cm. Height =", options: ["6 cm", "600 cm", "3 cm"] },
        ],
      },
      {
        type: "sorting",
        title: "Best Unit for Volume",
        instruction: "Match each context to the most appropriate unit.",
        columns: ["mm³ or cm³", "m³", "mL (= cm³)"],
        items: [
          { label: "A concrete slab for a driveway" },
          { label: "A cup of water" },
          { label: "A matchbox" },
          { label: "A shipping container" },
          { label: "A dose of medicine" },
        ],
      },
      {
        type: "open-response",
        title: "Volume in Context",
        instruction: "Show all working.",
        prompts: [
          { text: "A pool is 25 m long, 10 m wide, depth 1.8 m. Volume in m³? Capacity in litres? (1 m³ = 1000 L)", type: "lines", lines: 3 },
          { text: "A triangular prism tent has cross-section: base 2.4 m, height 1.8 m. Length 3 m. Volume of air inside?", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 10: Pythagoras' Theorem ────────────────────────────────
  {
    slug: "pythagoras-theorem",
    title: "Pythagoras' Theorem",
    strand: "Measurement",
    description:
      "Use Pythagoras' theorem to find unknown side lengths in right-angled triangles",
    lesson: {
      title: "Pythagoras' Theorem",
      objective: "Use a squared plus b squared equals c squared to find the hypotenuse or a shorter side of a right-angled triangle.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Calculator",
        "A piece of string or tape measure (optional)",
      ],
      intro: {
        title: "The 3-4-5 Triangle",
        script: "Builders have used a clever trick for thousands of years to make perfectly square corners. They take a rope, tie knots at 3, 4, and 5 units apart, form a triangle, and the corner between the 3 and 4 sides is always exactly 90 degrees. Why does this work? Because 3 squared plus 4 squared equals 5 squared: 9 plus 16 equals 25. Pythagoras' theorem says that for any right-angled triangle, the area of the square on the longest side (the hypotenuse) equals the sum of the areas of the squares on the other two sides.",
        action: "Draw a 3-4-5 right triangle on paper. Draw squares on all three sides. Count the grid squares if you like. Write: 3 squared + 4 squared = 9 + 16 = 25 = 5 squared. Mark the hypotenuse as c (always the longest side, opposite the right angle). The formula is a squared + b squared = c squared.",
      },
      mainActivity: {
        title: "Finding the Hypotenuse and the Shorter Side",
        script: "To find the hypotenuse: c equals the square root of a squared plus b squared. If a is 5 and b is 12, then c equals the square root of 25 plus 144 equals the square root of 169 equals 13. To find a shorter side, rearrange: a equals the square root of c squared minus b squared. If c is 10 and b is 6, then a equals the square root of 100 minus 36 equals the square root of 64 equals 8. I will do one of each and then you try one of each. Remember, the hypotenuse is ALWAYS the side opposite the right angle — the longest side.",
        action: "Work through: find c when a = 8, b = 15 (answer: c = 17). Then find a when c = 13, b = 5 (answer: a = 12). Give the child: find c when a = 6, b = 8 and find b when c = 25, b = 20. Watch that they identify the hypotenuse correctly — it is always c, always opposite the right angle.",
      },
      wrapUp: {
        title: "Is This a Right Triangle?",
        script: "I will give you three side lengths. Your job is to check whether they form a right-angled triangle. Try: 5, 7, 9. Does 5 squared plus 7 squared equal 9 squared?",
        action: "Child checks: 25 + 49 = 74, but 81 does not equal 74, so NO. Then try: 9, 12, 15 (yes: 81 + 144 = 225 = 15 squared). Once they can both find missing sides and check triples, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Label the Triangle",
        instruction: "Draw a line to match each term to its description.",
        left: ["Hypotenuse", "Legs (shorter sides)", "Right angle"],
        right: ["Always 90°", "The longest side, opposite the right angle", "The two sides forming the right angle"],
      },
      {
        type: "circle-correct",
        title: "The Formula",
        instruction: "Circle the correct statement about Pythagoras' theorem.",
        questions: [
          { prompt: "Pythagoras' theorem:", options: ["a² + b² = c²", "a + b = c", "a × b = c²"] },
          { prompt: "To find hypotenuse c:", options: ["c = √(a² + b²)", "c = a² + b²", "c = √a + √b"] },
          { prompt: "To find shorter side a:", options: ["a = √(c² − b²)", "a = √(c² + b²)", "a = c − b"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Hypotenuse",
        instruction: "Use c² = a² + b².",
        questions: [
          { prompt: "a = 3, b = 4", options: ["5", "7", "25"] },
          { prompt: "a = 5, b = 12", options: ["13", "17", "7"] },
          { prompt: "a = 8, b = 15", options: ["17", "23", "7"] },
          { prompt: "a = 6, b = 8", options: ["10", "14", "100"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find a Shorter Side",
        instruction: "Use a² = c² − b².",
        questions: [
          { prompt: "c = 10, b = 6", options: ["8", "4", "√136"] },
          { prompt: "c = 13, b = 5", options: ["12", "8", "√194"] },
          { prompt: "c = 25, b = 20", options: ["15", "5", "√225"] },
        ],
      },
      {
        type: "matching",
        title: "Pythagorean Triples",
        instruction: "Draw a line to match each pair to the correct hypotenuse.",
        left: ["3, 4", "5, 12", "8, 15", "7, 24"],
        right: ["25", "13", "17", "5"],
      },
      {
        type: "sorting",
        title: "Right-Angled or Not?",
        instruction: "Check a² + b² = c². Sort each triangle.",
        columns: ["Right-angled", "Not right-angled"],
        items: [
          { label: "3, 4, 5" },
          { label: "5, 6, 7" },
          { label: "6, 8, 10" },
          { label: "7, 8, 9" },
          { label: "9, 12, 15" },
          { label: "2, 3, 4" },
        ],
      },
      {
        type: "open-response",
        title: "Pythagoras in Real Life",
        instruction: "Draw a diagram and show all working.",
        prompts: [
          { text: "A 5 m ladder leans against a wall. The base is 2 m from the wall. How high up the wall does the ladder reach? Round to 2 decimal places.", type: "lines", lines: 4 },
          { text: "A rectangular field is 48 m long and 36 m wide. What is the length of the diagonal path across it?", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 11: Circle Area & Circumference ───────────────────────
  {
    slug: "circle-area-circumference",
    title: "Circle Area & Circumference",
    strand: "Measurement",
    description:
      "Use formulas to find the area and circumference of circles and solve related problems",
    lesson: {
      title: "Circle Area and Circumference",
      objective: "Apply C = 2 pi r, C = pi d, and A = pi r squared to calculate the circumference and area of circles and solve practical problems.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Calculator",
        "A round object like a cup, tin can, or roll of tape",
        "A piece of string",
      ],
      intro: {
        title: "Measuring Pi",
        script: "Can you see that round tin over there? Grab the string and wrap it around the tin once to measure the distance all the way around — that is the circumference. Now measure across the middle — that is the diameter. Divide the circumference by the diameter. What number do you get? It should be very close to 3.14. It does not matter what size the circle is — that ratio is ALWAYS approximately 3.14. The ancient mathematicians called this ratio pi. So circumference equals pi times diameter, or equivalently pi times 2 times radius.",
        action: "Let the child measure a round object with string and ruler. Calculate circumference / diameter and confirm it is close to pi. Write: C = pi x d = pi x 2r. Then write A = pi x r squared and explain this is harder to see intuitively but gives the space inside the circle.",
      },
      mainActivity: {
        title: "Calculate and Apply",
        script: "Let me do a circumference example. Radius 5 centimetres. C equals 2 times 3.14 times 5 equals 31.4 centimetres. Now area: radius 5 centimetres. A equals 3.14 times 5 squared equals 3.14 times 25 equals 78.5 square centimetres. An important thing to remember: diameter is twice the radius, so if you are given the diameter, halve it first to get the radius. Now you try: find the circumference and area of a circle with radius 7 centimetres.",
        action: "Child works: C = 2 x 3.14 x 7 = 43.96 cm, A = 3.14 x 49 = 153.86 cm squared. Check their working. Also show working backwards: if C = 31.4, then d = C / pi = 10, so r = 5. This prepares them for the worksheet question about finding radius from area.",
      },
      wrapUp: {
        title: "Pizza Problem",
        script: "A large pizza has a diameter of 30 centimetres. What is its area? And if the crust goes around the outside, how long is the crust?",
        action: "Child calculates: r = 15, A = pi x 225 = 706.5 cm squared, C = 2 x pi x 15 = 94.2 cm. Once they can clearly distinguish between area (the surface of the pizza) and circumference (the crust), they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Circle Formulas",
        instruction: "Draw a line to match each formula to its name.",
        left: ["C = 2πr", "C = πd", "A = πr²", "d = 2r"],
        right: ["Diameter from radius", "Circumference using diameter", "Area of a circle", "Circumference using radius"],
      },
      {
        type: "circle-correct",
        title: "Calculate Circumference",
        instruction: "Use π ≈ 3.14. Round to 1 decimal place.",
        questions: [
          { prompt: "Radius = 5 cm", options: ["31.4 cm", "15.7 cm", "78.5 cm"] },
          { prompt: "Diameter = 12 m", options: ["37.7 m", "18.8 m", "452.2 m"] },
          { prompt: "Radius = 7 cm", options: ["44.0 cm", "22.0 cm", "153.9 cm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Calculate Area",
        instruction: "Use A = πr². Use π ≈ 3.14.",
        questions: [
          { prompt: "Radius = 4 cm", options: ["50.2 cm²", "25.1 cm²", "200.9 cm²"] },
          { prompt: "Radius = 6 m", options: ["113.0 m²", "56.5 m²", "226.1 m²"] },
          { prompt: "Diameter = 10 cm", options: ["78.5 cm²", "157.0 cm²", "31.4 cm²"] },
          { prompt: "Radius = 3 mm", options: ["28.3 mm²", "18.8 mm²", "56.5 mm²"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Radius from Area",
        instruction: "Use r = √(A ÷ π).",
        questions: [
          { prompt: "A = 78.5 cm²", options: ["5 cm", "10 cm", "3 cm"] },
          { prompt: "A = 113 m²", options: ["6 m", "12 m", "3 m"] },
        ],
      },
      {
        type: "sorting",
        title: "Circle vs Square — Larger Area?",
        instruction: "Compare areas. Sort each.",
        columns: ["Circle has larger area", "Square has larger area"],
        items: [
          { label: "Circle radius 4 cm vs square side 4 cm" },
          { label: "Circle radius 3 m vs square side 6 m" },
          { label: "Circle diameter 10 cm vs square side 10 cm" },
        ],
      },
      {
        type: "open-response",
        title: "Circle Problems",
        instruction: "Show all working. Use π ≈ 3.14.",
        prompts: [
          { text: "A circular pizza has diameter 30 cm. Find its area and circumference.", type: "lines", lines: 4 },
          { text: "A sprinkler waters a circular area with radius 8 m. What area of lawn is watered?", type: "lines", lines: 2 },
          { text: "A wheel has circumference 188.4 cm. What is its diameter?", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  // ── WS 12: Congruence & Similarity ───────────────────────────
  {
    slug: "congruence-similarity",
    title: "Congruence & Similarity",
    strand: "Space",
    description:
      "Identify conditions for congruency and similarity in shapes and solve scale problems",
    lesson: {
      title: "Congruence and Similarity",
      objective: "Distinguish between congruent and similar figures, identify congruence conditions for triangles, and solve problems using scale factors.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Scissors (optional)",
      ],
      intro: {
        title: "Identical Twins vs Siblings",
        script: "Think of congruent shapes as identical twins — exactly the same shape AND the same size. Similar shapes are more like siblings — same shape (same angles, sides in proportion) but different sizes. A photograph and its enlargement are similar: all the proportions are the same, just bigger. A stamp and a door are similar to a rectangle, but not similar to each other because their proportions differ. When we describe similar shapes, we use the scale factor — the number by which all sides are multiplied.",
        action: "Draw a small triangle with sides 3, 4, 5 cm on paper. Then draw a larger triangle with sides 6, 8, 10 cm. Ask: are these similar? (Yes — each side doubled, scale factor 2.) Are they congruent? (No — different sizes.) Then draw an exact copy of the small triangle and confirm it is congruent.",
      },
      mainActivity: {
        title: "Scale Factor and Missing Sides",
        script: "In two similar triangles, corresponding sides are always in the same ratio. If triangle A has sides 5 and 8 centimetres, and triangle B has the corresponding side as 15 centimetres, the scale factor is 15 divided by 5 equals 3. So the other side of triangle B is 8 times 3 equals 24 centimetres. To find the scale factor, always divide a side in the larger shape by the corresponding side in the smaller shape. For congruent triangles, we check using four conditions: SSS, SAS, ASA, or RHS. The AAA condition gives similar triangles but NOT necessarily congruent.",
        action: "Work through a scale factor example together. Give your child: two similar rectangles, one with sides 4 and 6, the other with one known side of 10. Find the scale factor (10/4 = 2.5) and the missing side (6 x 2.5 = 15). Then ask about congruence conditions: if two triangles each have angles 60, 70, 50 degrees, are they congruent? (Not necessarily — AAA gives similarity, not congruence.)",
      },
      wrapUp: {
        title: "Model Car",
        script: "A model car is built to a scale of 1 to 20. The real car is 4 metres long. How long is the model in centimetres?",
        action: "Child converts: 4 m = 400 cm, model = 400 / 20 = 20 cm. Then ask the reverse: if the model wheel diameter is 3 cm, what is the real wheel diameter? (3 x 20 = 60 cm.) Once they are comfortable with scale factors in both directions, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Congruent or Similar?",
        instruction: "Draw a line to match each description to the correct term.",
        left: ["Same shape and same size", "Same shape, different size", "Scale factor = 1", "Scale factor ≠ 1"],
        right: ["Similar (different size)", "Congruent (same size)", "Similar", "Congruent"],
      },
      {
        type: "sorting",
        title: "Classify Each Pair",
        instruction: "Sort each pair of shapes.",
        columns: ["Congruent", "Similar (not congruent)", "Neither"],
        items: [
          { label: "Two squares both with side 5 cm" },
          { label: "A 3-4-5 triangle and a 6-8-10 triangle" },
          { label: "A circle and an oval" },
          { label: "Two equilateral triangles of different sizes" },
          { label: "Two rectangles: 3×4 and 3×4" },
          { label: "Rectangle 3×4 and square 4×4" },
        ],
      },
      {
        type: "circle-correct",
        title: "Congruence Conditions",
        instruction: "Circle the correct congruence condition.",
        questions: [
          { prompt: "Three sides equal (SSS) means triangles are:", options: ["Congruent", "Similar only", "Neither"] },
          { prompt: "Two sides and included angle equal (SAS) means:", options: ["Congruent", "Similar only", "Neither"] },
          { prompt: "Three angles equal (AAA) means:", options: ["Similar (not necessarily congruent)", "Congruent", "Neither"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Scale Factor",
        instruction: "Find the scale factor from original to image.",
        questions: [
          { prompt: "Original side 4 cm, image side 12 cm. Scale factor =", options: ["3", "1/3", "8"] },
          { prompt: "Original side 10 m, image side 4 m. Scale factor =", options: ["0.4", "2.5", "6"] },
          { prompt: "Scale factor 2.5, original side 8 cm. Image side =", options: ["20 cm", "10 cm", "5 cm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find Missing Sides in Similar Shapes",
        instruction: "Use the scale factor.",
        questions: [
          { prompt: "Similar triangles. Sides 3 cm and 9 cm correspond. Another side of small triangle = 4 cm. Matching side of large triangle =", options: ["12 cm", "6 cm", "36 cm"] },
          { prompt: "Scale factor 1.5. Small rectangle 6 m × 4 m. Large rectangle length =", options: ["9 m", "7.5 m", "10 m"] },
        ],
      },
      {
        type: "open-response",
        title: "Similarity in Real Life",
        instruction: "Show all working.",
        prompts: [
          { text: "A model car is at scale 1:20. The real car is 4 m long and 1.6 m wide. What are the model's dimensions in cm?", type: "lines", lines: 3 },
          { text: "Two similar triangles have sides 5 cm and 15 cm. Smaller triangle area = 10 cm². What is the larger triangle's area? (Area scales by scale factor squared.)", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 13: Statistical Investigations ────────────────────────
  {
    slug: "statistical-investigations",
    title: "Statistical Investigations & Sampling",
    strand: "Statistics",
    description:
      "Conduct statistical investigations, compare samples and explain implications of sampling methods",
    lesson: {
      title: "Statistical Investigations and Sampling",
      objective: "Understand sampling methods and their biases, read histograms and box plots, and interpret measures of centre and spread.",
      materials: [
        "Paper and pencil",
        "A list of 10 numbers to practise with (e.g. 15, 22, 18, 31, 22, 19, 27, 22, 35, 29)",
      ],
      intro: {
        title: "Can You Trust That Survey?",
        script: "Imagine a news headline: 8 out of 10 people prefer Brand X. But then you find out the 10 people were all employees of Brand X's company. Does that change things? Statistics can be very misleading if the sample is biased. A sample is biased when the way it was chosen means some groups are over-represented or under-represented. Today we are going to look at how to collect a good sample, how to display data fairly, and how to compare data sets using statistics.",
        action: "Discuss two sampling examples: (1) surveying only Year 8 students to find the most popular subject for the whole school — biased; (2) putting all student names in a hat and drawing 50 — random and unbiased. Ask your child which they would trust more and why. Write: random sample = everyone has an equal chance of being selected.",
      },
      mainActivity: {
        title: "Reading Data Displays",
        script: "Here is a set of data: 15, 22, 18, 31, 22, 19, 27, 22, 35, 29. The mean is the sum divided by 10 — add them up and divide by 10. The median is the middle value when sorted — with 10 values, average the 5th and 6th. The mode is the most common value. The range is the highest minus the lowest. Now for a box plot: the box sits between the lower quartile (Q1) and upper quartile (Q3), with a line at the median. The interquartile range is Q3 minus Q1 and tells us how spread out the middle 50% of data is. A wider box means more spread.",
        action: "Sort the data together: 15, 18, 19, 22, 22, 22, 27, 29, 31, 35. Find mean (242/10 = 24.2), median ((22+22)/2 = 22), mode (22), range (35-15=20). Sketch a simple box plot: min=15, Q1=19.5, median=22, Q3=29, max=35. IQR = 9.5. Discuss what IQR means for how consistent the data is.",
      },
      wrapUp: {
        title: "Design a Question",
        script: "If I wanted to investigate whether Year 8 students sleep enough for good school performance, what statistical question would I ask? What is a fair way to collect data? And what graph would best show the results?",
        action: "Child writes a statistical question (e.g. How many hours do Year 8 students sleep per night?), names a sampling method (random selection from the class roll), and chooses a graph type (histogram or box plot). Once they can design the basic investigation framework, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Sampling Methods",
        instruction: "Draw a line to match each method to its description.",
        left: ["Random sample", "Convenience sample", "Stratified sample", "Census"],
        right: [
          "Everyone in the population is surveyed",
          "Groups in the sample reflect population proportions",
          "Every member has equal chance of selection",
          "Easiest people to reach are chosen",
        ],
      },
      {
        type: "sorting",
        title: "Biased or Unbiased?",
        instruction: "Sort each sampling scenario.",
        columns: ["Likely biased", "Likely unbiased"],
        items: [
          { label: "Survey only Year 8 students about school lunch (for whole school)" },
          { label: "Randomly select 50 names from school roll" },
          { label: "Ask your friends about favourite music genre to represent all Year 8s" },
          { label: "Use random number generator to select participants" },
        ],
      },
      {
        type: "circle-correct",
        title: "Interpret a Histogram",
        instruction: "Test scores: 50–59: 3 students, 60–69: 8, 70–79: 12, 80–89: 7, 90–99: 2.",
        questions: [
          { prompt: "Total students:", options: ["32", "30", "34"] },
          { prompt: "Most common score range:", options: ["70–79", "60–69", "80–89"] },
          { prompt: "Distribution shape:", options: ["Roughly symmetrical", "Positively skewed", "Negatively skewed"] },
        ],
      },
      {
        type: "sorting",
        title: "Shape of Distribution",
        instruction: "Sort each description by likely distribution shape.",
        columns: ["Positively skewed", "Negatively skewed", "Roughly symmetrical"],
        items: [
          { label: "Most students score near top; few score low" },
          { label: "Most people earn moderate incomes; a few earn very high" },
          { label: "Heights of adult women" },
          { label: "Time to complete a difficult exam" },
        ],
      },
      {
        type: "circle-correct",
        title: "Interpret Box Plots",
        instruction: "Box plot: Min=20, Q1=35, Median=50, Q3=65, Max=90.",
        questions: [
          { prompt: "Interquartile range (IQR) =", options: ["30", "15", "70"] },
          { prompt: "50% of data lies between:", options: ["35 and 65", "20 and 90", "50 and 90"] },
          { prompt: "Spread of middle 50% of data:", options: ["IQR = 30", "Range = 70", "Median = 50"] },
        ],
      },
      {
        type: "open-response",
        title: "Design a Statistical Investigation",
        instruction: "Answer all parts.",
        prompts: [
          { text: "Write a statistical question that Year 8 students could investigate about sleep and school performance.", type: "lines", lines: 2 },
          { text: "What sampling method would you use? How many people? Why?", type: "lines", lines: 3 },
          { text: "What data display would best show your results? What conclusions might you draw?", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  // ── WS 14: Probability of Compound Events ────────────────────
  {
    slug: "compound-probability",
    title: "Probability of Compound Events",
    strand: "Probability",
    description:
      "Represent and determine probabilities of compound events using tables and tree diagrams",
    lesson: {
      title: "Probability of Compound Events",
      objective: "List sample spaces for compound events using tables and tree diagrams, and calculate probabilities of combined outcomes.",
      materials: [
        "Paper and pencil",
        "A coin",
        "A six-sided die (or write numbers 1-6 on slips of paper)",
      ],
      intro: {
        title: "Flipping and Rolling at the Same Time",
        script: "Imagine flipping a coin and rolling a die at the same time. How many different outcomes are possible? The coin has 2 options (heads or tails) and the die has 6 options. Since each coin result can pair with each die result, there are 2 times 6 equals 12 outcomes. This is a compound event — two things happening together. When events are independent like this — the coin result does not affect the die result — we can multiply the number of outcomes. Today we will list all outcomes in a table or tree diagram so we can calculate probabilities accurately.",
        action: "Draw a two-way table together: rows labelled H and T, columns labelled 1, 2, 3, 4, 5, 6. Fill in all 12 cells: (H,1), (H,2), etc. Count total outcomes: 12. Highlight one cell: (H, 6). P(H and 6) = 1/12.",
      },
      mainActivity: {
        title: "Tree Diagrams and Multiplication",
        script: "A tree diagram is another way to show all outcomes. Start with the coin: two branches, H and T. From each coin branch, draw 6 more branches for the die. Count the ends: 12 branches, 12 outcomes. For independent events, you can multiply probabilities directly. P(H) = 1/2, P(rolling a 5) = 1/6, so P(H and 5) = 1/2 times 1/6 equals 1/12. For complementary events, remember P(not A) = 1 minus P(A). If the probability of rolling a 6 is 1/6, the probability of NOT rolling a 6 is 5/6. Now you draw a tree diagram for flipping two coins.",
        action: "Child draws a tree diagram for two coin flips: H-H, H-T, T-H, T-T. They identify 4 outcomes. Ask: P(two heads) = 1/4. P(at least one head) = 3/4. P(not two heads) = 1 - 1/4 = 3/4. Check that they understand both methods give the same answer for the complementary event.",
      },
      wrapUp: {
        title: "The Spinner Experiment",
        script: "A spinner has three equal sections: Red, Blue, Green. It is spun twice. How many outcomes are there in total? What is the probability of getting Red both times?",
        action: "Child draws a 3x3 table (or tree diagram) showing 9 outcomes. P(Red, Red) = 1/9. If they struggle, remind them: 3 options for the first spin, 3 for the second, 3 x 3 = 9 total. Once they can set up the table and calculate correctly, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Probability Terms",
        instruction: "Draw a line to match each term to its meaning.",
        left: ["Compound event", "Independent events", "Complementary events", "Sample space"],
        right: [
          "The outcome of one does not affect the other",
          "P(A) + P(B) = 1",
          "The set of all possible outcomes",
          "An event made up of two or more simple events",
        ],
      },
      {
        type: "circle-correct",
        title: "Two-Way Tables",
        instruction: "Class of 30: 12 boys, 18 girls. 8 boys and 10 girls like sport.",
        questions: [
          { prompt: "P(girl who likes sport):", options: ["10/30 = 1/3", "10/18", "18/30"] },
          { prompt: "P(someone who likes sport):", options: ["18/30 = 3/5", "10/30", "8/30"] },
          { prompt: "P(boy who does NOT like sport):", options: ["4/30 = 2/15", "8/30", "12/30"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Probability from Sample Spaces",
        instruction: "A coin is flipped and a die is rolled.",
        questions: [
          { prompt: "Total outcomes in sample space:", options: ["12", "8", "6"] },
          { prompt: "P(heads AND a 6):", options: ["1/12", "1/6", "1/2"] },
          { prompt: "P(tails AND an even number):", options: ["3/12 = 1/4", "1/2", "1/6"] },
        ],
      },
      {
        type: "sorting",
        title: "Independent or Dependent?",
        instruction: "Sort each pair of events.",
        columns: ["Independent", "Dependent"],
        items: [
          { label: "Flip a coin; roll a die" },
          { label: "Draw a card; draw another WITHOUT replacing" },
          { label: "Pick a marble; replace it; pick again" },
          { label: "Pick a marble without replacing; pick again" },
          { label: "Roll two dice" },
          { label: "Select a student; then select another (no replacement)" },
        ],
      },
      {
        type: "circle-correct",
        title: "Multiply for Independent Events",
        instruction: "P(A and B) = P(A) × P(B) for independent events.",
        questions: [
          { prompt: "P(heads) × P(rolling a 3)", options: ["1/12", "1/6", "1/3"] },
          { prompt: "P(two sixes in a row):", options: ["1/36", "1/12", "1/6"] },
          { prompt: "P(girl born twice if P(girl) = 0.5):", options: ["0.25", "0.5", "0.1"] },
        ],
      },
      {
        type: "sorting",
        title: "Experimental vs Theoretical",
        instruction: "Sort each statement.",
        columns: ["Theoretical", "Experimental"],
        items: [
          { label: "Calculated from equally likely outcomes" },
          { label: "Found by running many trials" },
          { label: "P(head) = 1/2 because there are 2 sides" },
          { label: "After 200 flips, heads came up 104 times" },
          { label: "Approaches theoretical as trial count increases" },
        ],
      },
      {
        type: "open-response",
        title: "Compound Event Problems",
        instruction: "Show all working. Draw a table or tree diagram.",
        prompts: [
          { text: "A spinner has 3 equal sections (Red, Blue, Green). Spun twice. List all 9 outcomes. What is P(Red both times)?", type: "box" },
          { text: "A bag has 4 red and 6 blue balls. Draw one, replace it, draw again. What is P(blue then red)?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Compound Probability Experiment",
        instruction: "Try these experiments at home.",
        suggestions: [
          "Flip 2 coins simultaneously. Record outcomes (HH, HT, TH, TT) for 40 trials. Compare to theoretical probabilities.",
          "Roll 2 dice and add totals. Record for 36 rolls. Which total appeared most? Compare to theoretical distribution.",
          "Make a spinner with 3 coloured sections. Spin twice, record results. Calculate P(matching colours) experimentally and theoretically.",
        ],
      },
    ],
  },
];

export function getYear8Worksheet(slug: string): WorksheetItem | undefined {
  return year8MathsWorksheets.find((w) => w.slug === slug);
}
