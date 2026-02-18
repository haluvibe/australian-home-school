import type { WorksheetItem } from "./worksheet-types";

export const year7MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Prime Factors & Exponent Notation ──────────────────
  {
    slug: "prime-factors-exponents",
    title: "Prime Factors & Exponent Notation",
    strand: "Number",
    description:
      "Represent natural numbers in expanded form and as products of prime factors using exponent notation",
    lesson: {
      title: "Breaking Numbers Apart",
      objective: "Understand prime factorisation and write any whole number as a product of prime factors using exponent notation.",
      materials: [
        "Paper and pencil",
        "A calculator",
        "A handful of small objects such as coins or blocks for grouping",
      ],
      intro: {
        title: "What Are Prime Numbers?",
        script: "Let us start with a question: can you make a rectangle using exactly 7 tiles? Try it. What about 12 tiles? With 12 you can make several different rectangles. Numbers like 12 that can be arranged into multiple rectangles are called composite. Numbers like 7 that only make one skinny rectangle are called prime. Today we are going to pull composite numbers apart until every piece is prime.",
        action: "If you have coins or small blocks, have your child try to arrange 7 objects into rectangles, then 12 objects. Discuss why 7 only works as 1 x 7. List a few primes together on paper: 2, 3, 5, 7, 11, 13.",
      },
      mainActivity: {
        title: "Factor Trees and Exponents",
        script: "Let us break down 24 together. I will draw a factor tree. 24 splits into 4 and 6. Then 4 splits into 2 and 2, and 6 splits into 2 and 3. Our prime factors are 2, 2, 2, and 3. Because we have three 2s, we write that as 2 to the power of 3, then multiply by 3. So 24 equals 2 cubed times 3. Now you try 36 on your own and I will check your tree.",
        action: "Draw the factor tree for 24 on paper, talking through each branch. Show how repeated primes collapse into exponent notation. Have your child draw their own tree for 36 and check it gives 2 squared times 3 squared. Then try 48 together.",
      },
      wrapUp: {
        title: "Why Does This Matter?",
        script: "Can you think of why we might need to break numbers into prime factors? It turns out it helps us find the highest common factor of two numbers — really useful when simplifying fractions. Tell me in your own words: what is a prime number, and what does an exponent tell us?",
        action: "Have your child explain both concepts aloud. Ask them to quickly write the prime factorisation of 30 without a tree. Check the answer is 2 times 3 times 5.",
      },
    },
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
      {
        type: "sequence",
        title: "Powers of 2 and 3",
        instruction: "Fill in the missing values in each sequence of powers.",
        sequences: [
          { items: [2, 4, 8, 0, 32, 64], answer: [16] },
          { items: [3, 9, 27, 0, 243], answer: [81] },
          { items: [1, 2, 4, 8, 0, 32, 64, 128, 256], answer: [16] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Exponent Expressions",
        instruction: "Circle the correct comparison symbol (<, > or =).",
        questions: [
          { prompt: "2⁵ ○ 5²", options: ["2⁵ > 5²", "2⁵ < 5²", "2⁵ = 5²"] },
          { prompt: "3³ ○ 4²", options: ["3³ > 4²", "3³ < 4²", "3³ = 4²"] },
          { prompt: "2⁸ ○ 10²", options: ["2⁸ > 10²", "2⁸ < 10²", "2⁸ = 10²"] },
          { prompt: "6² ○ 2⁶", options: ["6² < 2⁶", "6² > 2⁶", "6² = 2⁶"] },
        ],
      },
      {
        type: "matching",
        title: "LCM Using Prime Factors",
        instruction: "Draw a line to match each pair of numbers to their lowest common multiple.",
        left: ["LCM of 4 and 6", "LCM of 6 and 9", "LCM of 8 and 12", "LCM of 15 and 20"],
        right: ["60", "18", "12", "24"],
      },
      {
        type: "open-response",
        title: "Prime Factorisation Word Problems",
        instruction: "Use prime factorisation to solve each problem.",
        prompts: [
          { text: "Buses on Route A leave every 12 minutes. Buses on Route B leave every 8 minutes. They both leave at 9:00 am. Using LCM, when is the next time they leave together?", type: "lines", lines: 3 },
          { text: "A school hall can be arranged in rows of 24 or rows of 36 with no seats left over. What is the smallest number of seats the hall could have? (Hint: use LCM.)", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Prime Factorisation at Home",
        instruction: "Look for numbers around you and practise prime factorisation.",
        suggestions: [
          "Pick any page number from a book and write its full prime factorisation.",
          "Find a number on a product label (e.g., weight in grams) and build its factor tree.",
          "Challenge a family member: give them a prime factorisation and have them guess the number.",
          "List all factors of 60 using its prime factorisation 2² × 3 × 5. How many factors does it have?",
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
    lesson: {
      title: "Squares, Areas and Roots",
      objective: "Understand what squaring a number means geometrically, recognise perfect squares, and find square roots of perfect squares.",
      materials: [
        "Paper and pencil",
        "A ruler",
        "Graph paper if available, otherwise plain paper",
      ],
      intro: {
        title: "Square Tiles",
        script: "Imagine you are tiling a square room. If each side of the room is 5 tiles long, how many tiles do you need in total? You need 5 rows of 5, which is 25. That is why we call 25 a perfect square — it can form a perfect square shape. The square root of 25 is 5 because 5 is the side length. Let us draw some squares and see the pattern.",
        action: "Have your child draw several squares on paper: 1x1, 2x2, 3x3, 4x4, 5x5. Count the units inside each. Record the results in a table: side length, then area (which is the side squared). This builds a reference chart they can use.",
      },
      mainActivity: {
        title: "Squaring and Rooting",
        script: "Squaring means multiplying a number by itself. So 7 squared is 7 times 7 equals 49. The square root goes the other way: if I tell you the area of a square is 49, you need to find the side length. What number times itself gives 49? That is 7. We write that as the square root of 49 equals 7. Now let us estimate: is the square root of 50 closer to 7 or 8?",
        action: "Work through squaring the numbers 1 to 12, having your child call them out from memory or compute them. Then practice going backwards: call out perfect squares and have them give the root. For estimation, bracket a non-perfect square between two known perfects: root 50 is between root 49 and root 64, so between 7 and 8.",
      },
      wrapUp: {
        title: "Squares in Real Life",
        script: "If a square piece of land has an area of 144 square metres, what is the length of each side? How did you work that out? Now tell me: what is the difference between 3 squared and the square root of 9?",
        action: "Have your child answer the land question aloud (answer: 12 m). Listen for whether they correctly reverse-engineer the root. If they confuse squaring with doubling, draw the square again to reinforce the geometric picture.",
      },
    },
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
      {
        type: "sorting",
        title: "Pythagorean Triples — Right Triangle or Not?",
        instruction: "A Pythagorean triple satisfies a² + b² = c². Sort each set of side lengths.",
        columns: ["Forms a right triangle", "Does not form a right triangle"],
        items: [
          { label: "3, 4, 5" },
          { label: "5, 12, 13" },
          { label: "6, 8, 10" },
          { label: "4, 5, 7" },
          { label: "8, 15, 17" },
          { label: "2, 3, 4" },
        ],
      },
      {
        type: "sequence",
        title: "Square Number Sequences",
        instruction: "Fill in the missing terms in each sequence involving square numbers.",
        sequences: [
          { items: [1, 4, 9, 16, 0, 36], answer: [25] },
          { items: [2, 5, 10, 17, 0, 37], answer: [26] },
          { items: [100, 81, 64, 0, 36, 25], answer: [49] },
        ],
      },
      {
        type: "open-response",
        title: "Square Numbers in Context",
        instruction: "Use your knowledge of squares and square roots to solve each problem.",
        prompts: [
          { text: "A square tile has a side length of 9 cm. What is the area of 12 of these tiles placed side by side in a row?", type: "lines", lines: 2 },
          { text: "A square vegetable patch has an area of 196 m². What is the length of its fence?", type: "lines", lines: 2 },
          { text: "Is √50 closer to 7 or 8? Explain how you know without a calculator.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "matching",
        title: "Square Root Estimation",
        instruction: "Draw a line to match each square root to its correct estimate range.",
        left: ["√30", "√75", "√110", "√200"],
        right: ["between 14 and 15", "between 5 and 6", "between 8 and 9", "between 10 and 11"],
      },
      {
        type: "home-activity",
        title: "Square Numbers in Real Life",
        instruction: "Explore square numbers in everyday situations.",
        suggestions: [
          "Find a square floor tile or wall tile. Measure its side and calculate its area.",
          "Count how many square tiles cover a part of your floor or bathroom wall.",
          "Draw a number line from 0 to 200 and mark all perfect squares up to 196.",
          "Challenge: without a calculator, estimate √150 to one decimal place. Then check with a calculator.",
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
    lesson: {
      title: "Integers Above and Below Zero",
      objective: "Understand negative integers in real-world contexts and solve addition and subtraction problems involving positive and negative integers.",
      materials: [
        "Paper and pencil",
        "A ruler or straight edge to draw a number line",
      ],
      intro: {
        title: "Temperature Check",
        script: "Have you ever heard a weather forecast say the temperature will be minus 5 degrees? That is below zero — colder than freezing. Negative numbers live to the left of zero on the number line. A bank balance of minus 10 dollars means you owe money. Let us draw a number line from negative 10 to positive 10 and place some real-world examples on it.",
        action: "Draw a number line together from -10 to 10, with 0 in the middle. Ask your child to mark: a temperature of -3, a depth of -7 m, a balance of +4, sea level at 0. Discuss what zero means in each situation.",
      },
      mainActivity: {
        title: "Adding and Subtracting on the Number Line",
        script: "To add, we move right. To subtract, we move left. Try starting at negative 3 and adding 8. You move 8 steps right and land on 5. Now try starting at 5 and subtracting 9. You move 9 steps left. Where do you land? Here is the tricky bit: subtracting a negative is the same as adding a positive. So 6 minus negative 2 is the same as 6 plus 2, which is 8.",
        action: "Work through at least 6 examples together on the number line, using a pencil to physically trace the movement. Start with adding positives, then subtracting positives, then subtracting negatives. Have your child predict the answer before tracing. Check: -4 + 7 = 3, -6 - 4 = -10, 5 - (-3) = 8.",
      },
      wrapUp: {
        title: "Real-World Checking",
        script: "The temperature was minus 6 degrees overnight. By midday it had risen 14 degrees. What is the midday temperature? Can you write that as an addition of integers and solve it without the number line?",
        action: "Have your child solve the temperature problem on paper. If they get it right without the line, ask them to try one more: a submarine at -80 m rises 35 m, what is its new depth? This mirrors the worksheet word problems.",
      },
    },
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
      {
        type: "circle-correct",
        title: "Multiplying Integers",
        instruction: "Remember: same signs give positive, different signs give negative. Circle the correct answer.",
        questions: [
          { prompt: "3 × (−4)", options: ["−12", "12", "−7"] },
          { prompt: "(−5) × (−2)", options: ["10", "−10", "−7"] },
          { prompt: "(−6) × 3", options: ["−18", "18", "−9"] },
          { prompt: "(−4) × (−4)", options: ["16", "−16", "−8"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Dividing Integers",
        instruction: "Apply the same sign rules. Circle the correct answer.",
        questions: [
          { prompt: "−20 ÷ 4", options: ["−5", "5", "−16"] },
          { prompt: "(−18) ÷ (−3)", options: ["6", "−6", "−15"] },
          { prompt: "15 ÷ (−5)", options: ["−3", "3", "−10"] },
          { prompt: "(−24) ÷ (−8)", options: ["3", "−3", "−16"] },
        ],
      },
      {
        type: "circle-correct",
        title: "BODMAS with Negative Numbers",
        instruction: "Use order of operations. Circle the correct answer.",
        questions: [
          { prompt: "3 + 2 × (−4)", options: ["−5", "−20", "5"] },
          { prompt: "(−3)² − 10", options: ["−1", "−19", "1"] },
          { prompt: "−2 × (5 − 8)", options: ["6", "−6", "−26"] },
          { prompt: "4 − (−3) × 2", options: ["10", "2", "−2"] },
        ],
      },
      {
        type: "matching",
        title: "Distance Between Integers",
        instruction: "The distance between two integers equals |a − b|. Match each pair to their distance apart.",
        left: ["−3 and 5", "−7 and −2", "4 and −6", "0 and −9"],
        right: ["5", "10", "9", "8"],
      },
      {
        type: "open-response",
        title: "Real-World Integer Problems",
        instruction: "Write a calculation and solve each problem.",
        prompts: [
          { text: "A diver is at −12 m. She descends a further 8 m. She then ascends 5 m. What is her final depth?", type: "lines", lines: 3 },
          { text: "A bank account starts with $50. Five equal withdrawals of $18 are made. What is the balance? Is this an overdraft?", type: "lines", lines: 3 },
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
    lesson: {
      title: "Operating with Fractions and Decimals",
      objective: "Add, subtract, multiply and convert between fractions and decimals to solve real-world problems.",
      materials: [
        "Paper and pencil",
        "A calculator for checking",
        "A measuring cup or ruler to show fractions concretely if needed",
      ],
      intro: {
        title: "The Recipe Problem",
        script: "Imagine a recipe calls for three quarters of a cup of sugar and you want to make one and a half times the recipe. How much sugar do you need? This is a real problem that involves multiplying fractions. Before we solve it, let us make sure we are confident with the four operations on fractions and decimals, because you use them all the time in cooking, shopping and building.",
        action: "Write 1/2, 1/4, 3/4, 1/5, and 2/5 on paper and ask your child to say the decimal equivalent of each from memory. Then verify with a calculator. This establishes the fraction-decimal link before computation begins.",
      },
      mainActivity: {
        title: "One Operation at a Time",
        script: "For adding fractions you need a common denominator. One half plus one quarter: change one half to two quarters, then add. Two quarters plus one quarter equals three quarters. For multiplying, you multiply straight across: two thirds times three quarters equals six twelfths, which simplifies to one half. For decimals, just line up the decimal points when adding, and count decimal places when multiplying.",
        action: "Work one example of each operation with your child, writing it out step by step. Use: 1/2 + 1/4 (addition), 5/6 - 1/3 (subtraction), 1/2 x 2/3 (multiplication), and 3.6 + 1.75 (decimal addition). For each, have your child explain the key rule in their own words before moving to the next.",
      },
      wrapUp: {
        title: "Solve the Recipe",
        script: "Now back to the recipe. Three quarters of a cup times one and a half. Let us write one and a half as three halves. Three quarters times three halves equals nine eighths, which is one and one eighth cups. Does that make sense — a bit more than one cup? Now you try: a jacket costs sixty four dollars and eighty cents and is reduced by one quarter. What is the new price?",
        action: "Have your child work through the jacket problem independently. Watch for errors in decimal subtraction. Answer: $64.80 x 0.25 = $16.20 discount, so new price is $48.60. Use the calculator to verify after they have written a working solution.",
      },
    },
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
      {
        type: "circle-correct",
        title: "Dividing Fractions",
        instruction: "Use the 'keep, change, flip' method: a ÷ b/c = a × c/b. Circle the correct answer.",
        questions: [
          { prompt: "1/2 ÷ 1/4", options: ["2", "1/8", "1/4"] },
          { prompt: "3/4 ÷ 1/2", options: ["3/2", "3/8", "1/2"] },
          { prompt: "2/3 ÷ 4", options: ["1/6", "8/3", "2/12"] },
          { prompt: "5/6 ÷ 5/12", options: ["2", "1/2", "25/72"] },
        ],
      },
      {
        type: "matching",
        title: "Mixed Numbers and Improper Fractions",
        instruction: "Draw a line to match each mixed number to its equivalent improper fraction.",
        left: ["1½", "2¼", "3⅓", "1⅝", "4½"],
        right: ["10/3", "9/2", "3/2", "9/4", "13/8"],
      },
      {
        type: "sorting",
        title: "Order on a Number Line",
        instruction: "Sort these fractions and decimals from smallest to largest.",
        columns: ["Smallest", "2nd", "3rd", "Largest"],
        items: [
          { label: "0.6" },
          { label: "3/5" },
          { label: "2/3" },
          { label: "0.7" },
        ],
      },
      {
        type: "circle-correct",
        title: "Decimal Multiplication",
        instruction: "Circle the correct product.",
        questions: [
          { prompt: "3.4 × 2.1", options: ["7.14", "6.14", "71.4"] },
          { prompt: "0.6 × 0.8", options: ["0.48", "4.8", "0.048"] },
          { prompt: "1.5 × 1.5", options: ["2.25", "2.5", "3"] },
          { prompt: "4.2 × 0.5", options: ["2.1", "21", "0.21"] },
        ],
      },
      {
        type: "open-response",
        title: "Fraction Division in Context",
        instruction: "Write a number sentence and solve.",
        prompts: [
          { text: "A length of rope is 5/6 of a metre. It is cut into pieces that are each 1/12 of a metre long. How many pieces are there?", type: "lines", lines: 3 },
          { text: "You have 2¾ litres of juice to pour into glasses that hold ¼ litre each. How many glasses can you fill?", type: "lines", lines: 3 },
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
    lesson: {
      title: "Ratios, Percentages and Money",
      objective: "Simplify ratios, share quantities in a given ratio, and calculate percentages in financial contexts including discounts and GST.",
      materials: [
        "Paper and pencil",
        "A calculator",
        "A supermarket catalogue or receipt if available",
      ],
      intro: {
        title: "Split the Pizza",
        script: "You and I are sharing a pizza, but I am more hungry so we split it in ratio 2 to 1. That means for every 2 slices I get, you get 1. If the pizza has 9 slices, I get 6 and you get 3. Ratios are about relative amounts. Percentages work the same way — they are just ratios out of 100. Twenty five percent means 25 out of every 100, or one quarter.",
        action: "Use 9 small objects (coins, blocks) to physically demonstrate the 2:1 split. Then ask: if there are 12 slices, how many each? Have your child work it out by finding the total parts (3), then dividing 12 by 3 to get one part (4), then scaling up.",
      },
      mainActivity: {
        title: "Percentages in Shops",
        script: "To find 25 percent of a number, divide by 4. To find 10 percent, divide by 10, and for 30 percent, find 10 percent then multiply by 3. Let us try: 25 percent of 80. Eighty divided by 4 equals 20. Now a trickier one: a shirt costs $40 and GST of 10 percent is added. We find 10 percent of 40, which is 4, so the final price is $44. For a 20 percent discount on a $25 book, find 20 percent of 25, which is 5, so the new price is $20.",
        action: "Work through the GST and discount examples with your child, then give them two more to try independently: 30 percent of $90, and a $350 bike discounted by 30 percent. Check their working, not just the answer. Ensure they can explain what percentage and ratio each word problem involves.",
      },
      wrapUp: {
        title: "Real-Life Scan",
        script: "Look at this receipt or catalogue. Can you find a percentage discount? Can you work out the actual saving in dollars? And here is a ratio challenge: if orange juice and water are mixed 2 to 3 and we use 400 mL of juice, how much water do we need?",
        action: "Use a real receipt or catalogue item if available. For the ratio question, guide your child to find one part first: one part of juice is 400 divided by 2 equals 200 mL. Water is 3 parts, so 600 mL. If no catalogue is available, invent a price and discount together.",
      },
    },
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
    lesson: {
      title: "Letters Standing in for Numbers",
      objective: "Write algebraic expressions to represent real-world situations, substitute values, and simplify by collecting like terms.",
      materials: [
        "Paper and pencil",
        "A calculator for checking substitution",
      ],
      intro: {
        title: "A Mobile Phone Plan",
        script: "Let us say a mobile plan costs $20 per month and $0.10 per text message. If you send different numbers of texts each month, the cost changes. Instead of calculating every possibility separately, we can write a formula. Let t be the number of texts. Then the monthly cost C is 20 plus 0.10 times t. That is algebra: using a letter to stand for a quantity that can change.",
        action: "Write the formula C = 20 + 0.10t on paper. Ask: what does C equal if t = 0? What if t = 50? Work through both by substituting. Then ask your child to reverse it: if C = $27, how many texts were sent?",
      },
      mainActivity: {
        title: "Writing and Evaluating Expressions",
        script: "To write an expression, you translate words into maths symbols. 'Five more than n' is n plus 5. 'Double x' is 2x. 'Three less than y' is y minus 3. To evaluate, you replace the letter with a number. If x equals 3 and we have 4x plus 2, we substitute: 4 times 3 plus 2 equals 14. To simplify, we collect like terms: 3x plus 2x equals 5x because both terms have x.",
        action: "Write 6 expressions in words and have your child write them in algebra. Then give 4 substitution problems and have them show each step. Finally, write 5 pairs of terms and ask which are like terms and which are not. Check for common confusion between 5n squared and 3n (unlike terms).",
      },
      wrapUp: {
        title: "Create Your Own",
        script: "I want you to write your own expression for this situation: you start with x books, buy 4 more, then give away 2. Write the expression and simplify it. Then evaluate it when x equals 10.",
        action: "Watch your child write x + 4 - 2 and simplify to x + 2. When x = 10, the answer is 12. If they struggle, prompt them to translate each phrase one at a time before combining. This directly mirrors the worksheet open-response questions.",
      },
    },
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
    lesson: {
      title: "Balancing the Scales",
      objective: "Solve one-step and two-step linear equations using inverse operations, maintaining balance on both sides.",
      materials: [
        "Paper and pencil",
        "A simple balance scale or two equal-sized containers and small objects if available",
      ],
      intro: {
        title: "The Equation as a Balance",
        script: "Think of an equation like a perfectly balanced set of scales. Whatever you do to one side, you must do to the other to keep it balanced. If the left side has a mystery number plus 5 and the right side shows 12, what is the mystery number? You take 5 away from both sides: the mystery number equals 7. The key is always doing the same thing to both sides.",
        action: "If you have a balance scale or two cups, place 12 small objects on the right side, and some objects plus a folded paper marked 'x' on the left. Physically remove 5 from both sides to reveal x = 7. If no scale is available, draw the balance and cross off objects on both sides as you subtract.",
      },
      mainActivity: {
        title: "Inverse Operations Step by Step",
        script: "For a one-step equation like 3n equals 24, the inverse of multiplying by 3 is dividing by 3. So n equals 24 divided by 3, which is 8. For a two-step equation like 2x plus 3 equals 11, I undo the addition first: subtract 3 from both sides to get 2x equals 8. Then divide both sides by 2 to get x equals 4. Always undo addition and subtraction before multiplication and division.",
        action: "Work through one one-step equation and one two-step equation in full, writing every step and labelling the inverse operation used. Then give your child four problems to solve independently. After each, have them substitute their answer back into the original equation to verify it is correct.",
      },
      wrapUp: {
        title: "From Words to Equation",
        script: "Mia thinks of a number, doubles it, and adds 3. The result is 19. Can you write that as an equation and solve it? Write the equation first, then solve step by step, then check by substituting your answer back in.",
        action: "Your child should write 2n + 3 = 19, then solve to get n = 8, then verify: 2 times 8 plus 3 equals 19. If they jump straight to the answer without writing the equation, ask them to show the equation step so the habit is established.",
      },
    },
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
    lesson: {
      title: "Input, Output and Patterns",
      objective: "Build tables of values from algebraic rules, identify patterns in how variables relate, and work backwards to find an unknown rule.",
      materials: [
        "Paper and pencil",
        "A ruler to draw neat tables",
        "A calculator for checking",
      ],
      intro: {
        title: "The Taxi Meter",
        script: "Imagine a taxi that charges $3 to get in and then $2 for every kilometre. After 1 km you pay $5. After 2 km you pay $7. After 3 km you pay $9. There is a pattern: each extra kilometre adds $2. We can write a rule: total cost C equals 3 plus 2 times the number of km. A table of values helps us see the pattern clearly and predict future values without computing one by one.",
        action: "Draw a two-column table labelled km (input) and Cost in dollars (output). Fill in rows for 0 through 5 km together. Discuss: what does the output do each time the input goes up by 1? Identify the constant increase of $2 and connect it to the coefficient in the rule.",
      },
      mainActivity: {
        title: "Building Tables from Rules",
        script: "For the rule y equals 2x plus 1, I substitute x equals 0, 1, 2, 3 to get y equals 1, 3, 5, 7. The y values go up by 2 each time because x is multiplied by 2. Now you build a table for y equals 3x minus 2 with x from 0 to 4. Then I will give you a table with some x and y values and you find the rule.",
        action: "Have your child complete the table for y = 3x - 2 independently, then check. Next, show a table where x is 1, 2, 3, 4 and y is 3, 6, 9, 12. Ask: what rule connects x to y? Guide them to try y = 3x first by testing one row, then verify with another. This is the reverse-engineering the worksheet tests.",
      },
      wrapUp: {
        title: "Growing or Shrinking?",
        script: "Look at the rule y equals 10 minus x. As x gets bigger, what happens to y? And for y equals 5, does y change at all as x changes? Now describe in your own words: what is a table of values for, and how do you find the rule from a table?",
        action: "Have your child complete both answers verbally, then write one sentence each. Listen for key ideas: the coefficient controls whether the pattern grows or shrinks, and a constant rule produces a flat table. Ask them to make up one rule themselves and build a 5-row table you then have to guess.",
      },
    },
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
    lesson: {
      title: "Area Without a Rectangle",
      objective: "Derive and apply the area formulas for triangles and parallelograms, and solve problems involving composite shapes.",
      materials: [
        "Paper and pencil",
        "Scissors",
        "A ruler",
      ],
      intro: {
        title: "Cut and Discover",
        script: "You already know that the area of a rectangle is base times height. What about a parallelogram? Let us cut one out and see. Draw a parallelogram on paper, cut it out, then cut a triangle off one end and stick it on the other end. It becomes a rectangle! So the area of a parallelogram is also base times height, where height is the perpendicular height, not the slanted side.",
        action: "Help your child draw and cut out a parallelogram, then make the cut-and-shift transformation. Measure the base and height of the resulting rectangle and calculate its area. Confirm it equals the original base times perpendicular height. Then do the same with a triangle: show that a triangle is half a rectangle, giving A = half times base times height.",
      },
      mainActivity: {
        title: "Using the Formulas",
        script: "For a triangle with base 6 cm and height 4 cm, the area is a half times 6 times 4, which equals 12 cm squared. Notice the height must be the perpendicular height — the straight-up-and-down distance from base to tip. For a parallelogram with base 7 cm and height 5 cm, area equals 7 times 5 equals 35 cm squared. Now you try: find the area of a triangle with base 10 m and height 7 m.",
        action: "Work through both examples on paper with labelled diagrams. Have your child try the triangle with base 10 and height 7 (answer: 35 m squared). Then practice finding a missing dimension: if a triangle has area 24 cm squared and base 8 cm, what is the height? Guide them to rearrange the formula: height equals 2 times area divided by base.",
      },
      wrapUp: {
        title: "Composite Challenge",
        script: "A shape is made from a rectangle that is 8 cm by 5 cm with a triangle on top. The triangle has the same base of 8 cm and a height of 3 cm. What is the total area? Break it into two parts and add them together.",
        action: "Have your child draw the composite shape and label the parts. They should calculate rectangle area (40 cm squared) plus triangle area (12 cm squared) to get 52 cm squared. Check they use the correct formula for each part and add the results rather than mixing the dimensions.",
      },
    },
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
    lesson: {
      title: "Filling Three-Dimensional Shapes",
      objective: "Calculate the volume of rectangular and triangular prisms using formulas, and connect volume in cubic centimetres to capacity in millilitres.",
      materials: [
        "Paper and pencil",
        "A small rectangular box such as a cereal box or tissue box",
        "A ruler",
        "A calculator",
      ],
      intro: {
        title: "How Much Does the Box Hold?",
        script: "Pick up that box. Volume tells us how much space is inside. If we stack 1-centimetre cubes to fill the bottom layer of the box, that gives us the base area. Then we repeat that layer for every centimetre of height. So volume equals length times width times height. Let us measure this box and calculate its volume.",
        action: "Measure the length, width and height of the box to the nearest centimetre. Have your child multiply the three numbers together. Explain that the unit is cubic centimetres because we are measuring in three dimensions. Then note: 1 cm cubed equals 1 mL, so the volume also tells you how many millilitres it can hold.",
      },
      mainActivity: {
        title: "Rectangular and Triangular Prisms",
        script: "For a rectangular prism it is length times width times height. For a triangular prism, the cross-section is a triangle, so we use the triangle area first: half times base times height. Then we multiply by the length of the prism. Try this one: a triangular prism has a triangular face with base 4 cm and height 3 cm, and the prism is 10 cm long. The triangle area is a half times 4 times 3 equals 6 cm squared. Volume equals 6 times 10 equals 60 cm cubed.",
        action: "Work through the triangular prism example with a clear diagram. Have your child label the triangular face separately, compute its area, then multiply by the length. Give two more problems to solve independently, one rectangular and one triangular. Check that they write the correct unit: cm cubed or m cubed.",
      },
      wrapUp: {
        title: "Fish Tank Check",
        script: "A fish tank is 60 cm long, 30 cm wide, and 40 cm high. What is its volume in cm cubed? And how many litres of water will it hold? Remember: 1000 cm cubed equals 1 litre.",
        action: "Have your child calculate 60 x 30 x 40 = 72,000 cm cubed, then divide by 1000 for 72 litres. If they make an arithmetic error, encourage calculator use for the multiplication step while ensuring they set up the formula correctly by hand.",
      },
    },
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
    lesson: {
      title: "Circles, Pi and Hidden Angles",
      objective: "Understand the relationships between radius, diameter and circumference using pi, and apply angle sum rules for triangles and straight lines.",
      materials: [
        "Paper and pencil",
        "A piece of string about 30 cm long",
        "A circular object such as a mug, tin or plate",
        "A ruler",
        "A protractor if available",
      ],
      intro: {
        title: "Measuring Around a Circle",
        script: "Find a circular object. Wrap the string around its edge and mark where it meets. That length is the circumference. Now measure the string and the diameter across the circle. Divide the circumference by the diameter. What do you get? No matter what circle you measure, the answer is always close to 3.14. That number is called pi. Every circle in the universe obeys this ratio.",
        action: "Help your child measure circumference with string and diameter with ruler. Divide to see pi emerge. Try two different circles for emphasis. Record: diameter, circumference, and C divided by d. Both should be close to 3.14.",
      },
      mainActivity: {
        title: "Circumference and Missing Angles",
        script: "Since pi times diameter equals circumference, if the diameter is 5 cm then circumference equals 3.14 times 5 which is 15.7 cm. Now for angles: all three angles in any triangle add up to 180 degrees. So if two angles are 60 and 70, the missing one is 180 minus 130 equals 50 degrees. Angles on a straight line also add to 180, and vertically opposite angles are equal.",
        action: "Work through two circumference calculations and two missing-angle problems. For the angles, draw clear diagrams and write the rule being used beside each calculation. Then give your child three to try independently: one circumference, one triangle angle, one supplementary angle on a straight line.",
      },
      wrapUp: {
        title: "Put It Together",
        script: "A circular running track has a diameter of 80 metres. How far do you run in one lap? And: a triangle has angles in ratio 1 to 2 to 3. What are the three angles? Hint: the angles must add to 180.",
        action: "For the track: C = 3.14 x 80 = 251.2 m. For the triangle: 6 parts total, each part = 30, so angles are 30, 60 and 90 degrees. Have your child show both worked solutions in writing before moving to the worksheet.",
      },
    },
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
    lesson: {
      title: "Shapes, Symmetry and Moving on a Grid",
      objective: "Classify polygons by properties such as equal sides and angles, and describe and perform reflections, rotations and translations using coordinates.",
      materials: [
        "Paper and pencil",
        "Graph paper or a hand-drawn coordinate grid",
        "A small mirror if available",
      ],
      intro: {
        title: "Sorting Shapes",
        script: "Let us talk about polygons. What makes a square different from a rhombus? They both have four equal sides, but the square also has four right angles. What makes a regular polygon special? All sides and all angles are equal. Look around the room — can you spot any polygons? Which ones look regular and which ones do not?",
        action: "List six polygons on paper: equilateral triangle, square, rectangle, rhombus, regular hexagon, scalene triangle. Have your child classify each as regular or irregular and give a reason. Discuss symmetry: ask how many lines of symmetry each has.",
      },
      mainActivity: {
        title: "Moving Points on a Coordinate Grid",
        script: "Draw a coordinate grid and plot the point (3, 2). A translation right 4 and up 2 gives the new point (7, 4) — we just add to the coordinates. A reflection in the y-axis flips the x-coordinate: (3, 2) becomes minus 3, 2. A rotation of 180 degrees about the origin flips both signs: (3, 2) becomes minus 3, minus 2. These are the three key transformations.",
        action: "Draw a grid from -5 to 5 on both axes. Plot a simple triangle. Perform each transformation step by step, having your child find the new coordinates and re-plot the shape. Use a mirror for the reflection step if available, placing it on the y-axis to show the image.",
      },
      wrapUp: {
        title: "Describe and Check",
        script: "A square has corners at (1,1), (3,1), (3,3) and (1,3). Translate it right 4 and up 2. Write the new coordinates. Then tell me: what transformation maps the point (2, 5) to minus 2, 5?",
        action: "Your child should write the new square coordinates as (5,3), (7,3), (7,5), (5,5). For the second question they should recognise it is a reflection in the y-axis. If they are unsure, have them check by plotting both points and looking for the mirror line.",
      },
    },
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
    lesson: {
      title: "Asking Good Questions with Data",
      objective: "Plan a statistical investigation, classify data types, choose appropriate displays and interpret results including identifying outliers.",
      materials: [
        "Paper and pencil",
        "A ruler for drawing graphs",
        "A calculator",
      ],
      intro: {
        title: "What Kind of Data Is It?",
        script: "Not all data is the same. If I ask your favourite sport, you give me a category — that is categorical data. If I ask how many siblings you have, I get a whole number — discrete numerical data. If I measure your height in centimetres, I can get any value including decimals — continuous numerical data. The type of data determines what graph you should draw.",
        action: "Read out 8 data examples and have your child classify each one: favourite sport (categorical), number of pets (discrete), temperature at noon (continuous), eye colour (categorical), time to run 100 m (continuous), number of siblings (discrete). Ask: which graph would suit each type? Bar chart, histogram, or something else?",
      },
      mainActivity: {
        title: "Reading and Interpreting Displays",
        script: "A stem-and-leaf plot organises numbers by their tens digit on the left and units digits on the right. Stem 4, leaves 2 5 8 means the values are 42, 45 and 48. We can quickly see the range, the highest and lowest scores, and how spread out the data is. An outlier is a value that sits far away from the rest — for example, if most scores are between 40 and 70, a score of 3 would be an outlier.",
        action: "Draw a stem-and-leaf plot together with the data from the worksheet: stems 4, 5, 6, 7. Fill in the leaves. Ask your child to state the highest score, the lowest score, the total number of data points, and how many scored 50 or above. Then show a simple data set with one outlier and ask them to spot it.",
      },
      wrapUp: {
        title: "Plan Your Own Investigation",
        script: "You are a researcher. Write one statistical question you could investigate using the people in this house or neighbourhood. What type of data would you collect? What graph would you draw? What conclusion might you reach?",
        action: "Have your child write a question, name the data type and a suitable graph, and predict one possible finding. This mirrors the worksheet open-response activity. If they choose a biased question, discuss together why it might not give useful data.",
      },
    },
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
    lesson: {
      title: "What Is Typical?",
      objective: "Calculate mean, median, mode and range, understand the effect of outliers on each measure, and choose the most appropriate measure for a given data set.",
      materials: [
        "Paper and pencil",
        "A calculator",
        "A set of 7 to 10 small cards or pieces of paper to write data values on",
      ],
      intro: {
        title: "Three Ways to Find the Middle",
        script: "Imagine 5 people earn these amounts per week: $200, $210, $220, $230, and $2000. The mean is the total divided by 5, which gives $572. But most people are earning around $210 to $230. The mean is not very representative here because of that one very high salary. The median, the middle value when we line them up in order, is $220, which is far more typical. This is why we have three measures of centre.",
        action: "Write the five salary values on cards and physically arrange them in order. Point to the median as the middle card. Calculate the mean with a calculator. Ask: which number better describes a typical salary here? Introduce the mode as the most common value, then note there is no mode in this set.",
      },
      mainActivity: {
        title: "Calculating All Four Measures",
        script: "Mean: add all values then divide by how many there are. Median: sort the values, then pick the middle one. If there are two middle values, average them. Mode: the value that appears most often — there can be more than one, or none. Range: the highest value minus the lowest. Let us work through the data set: 3, 5, 3, 7, 3, 5.",
        action: "Work through the data set 3, 5, 3, 7, 3, 5 together, calculating mean (26 divided by 6 = 4.33), median (4), mode (3), and range (4). Then give your child a fresh data set to work through independently: 15, 20, 25, 30, 10. Check each measure. Discuss: which measure is most appropriate here and why?",
      },
      wrapUp: {
        title: "Choosing the Right Measure",
        script: "If a suburb has mostly houses worth $400,000 to $500,000 but one mansion worth $10 million, which measure would you use to describe the typical house price and why? What about the most popular shoe size in a shop? What measure would you use then?",
        action: "House prices: median (outlier skews the mean). Shoe sizes: mode (categorical-like, looking for the most common). Have your child write a one-sentence explanation for each choice. This directly prepares them for the sorting and open-response questions on the worksheet.",
      },
    },
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
    lesson: {
      title: "How Likely Is It?",
      objective: "List sample spaces, calculate theoretical probabilities as fractions, find complementary probabilities, and understand why experimental results vary from theoretical predictions.",
      materials: [
        "Paper and pencil",
        "A coin",
        "A standard six-sided die",
      ],
      intro: {
        title: "Flipping and Predicting",
        script: "Flip this coin 10 times before we start and record heads or tails each time. How many heads did you get? Probably somewhere around 5, but maybe 3, maybe 7. The theoretical probability of heads is one half — that is what we expect in the long run. But in a short experiment, anything can happen. Probability is about what should happen over many, many trials, not what will happen in just one.",
        action: "Have your child flip a coin 10 times and record results. Count heads. Discuss: does not getting exactly 5 mean the coin is unfair? Introduce the idea that as the number of trials increases, the experimental result gets closer to the theoretical probability.",
      },
      mainActivity: {
        title: "Calculating Theoretical Probability",
        script: "Probability is the number of favourable outcomes divided by the total number of equally likely outcomes. Rolling a 3 on a standard die: there is 1 favourable outcome and 6 total outcomes, so the probability is one sixth. The complement is the probability of the event NOT happening. If the probability of rain is 0.3, then the probability of no rain is 1 minus 0.3 equals 0.7. The sample space for rolling a die is all six outcomes: 1, 2, 3, 4, 5, 6.",
        action: "Work through three examples: rolling a die, drawing from a bag of coloured counters, and a complementary probability. Have your child list the sample space for flipping two coins (HH, HT, TH, TT = 4 outcomes) and calculate the probability of getting exactly one head. Then try a complementary event with a spinner.",
      },
      wrapUp: {
        title: "Predict Then Test",
        script: "A bag has 4 red counters and 6 blue counters. What is the theoretical probability of picking red? If you picked a counter 50 times and replaced it each time, how many reds would you expect? Now roll the die 12 times and record results. Is every number showing up exactly twice? Why not?",
        action: "Have your child answer the bag question (4 out of 10, or 2 out of 5) and predict 50 x 0.4 = 20 reds. Then do the die-rolling experiment and compare results to the expected 2 of each number per 12 rolls. Discuss the variability. This directly prepares them for the worksheet design-an-experiment section.",
      },
    },
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
