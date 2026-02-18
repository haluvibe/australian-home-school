import type { WorksheetItem } from "./worksheet-types";

export const year6MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Integers on the Number Line & Cartesian Plane ───
  {
    slug: "integers-number-line-cartesian",
    title: "Integers on the Number Line & Cartesian Plane",
    strand: "Number",
    description:
      "Use integers to represent points on a number line and in the Cartesian plane",
    activities: [
      // ─── Easy: Integers on a number line ───
      {
        type: "sequence",
        title: "Count Through Zero",
        instruction: "Fill in the missing numbers on the number line.",
        sequences: [
          { items: [-3, -2, 0, 0, 1], answer: [-1] },
          { items: [-5, 0, -3, -2, -1], answer: [-4] },
          { items: [0, -1, 0, 1, 2], answer: [0] },
        ],
      },
      {
        type: "sequence",
        title: "Count Backwards Through Zero",
        instruction: "Fill in the missing numbers as you count backwards.",
        sequences: [
          { items: [3, 2, 1, 0, 0], answer: [-1] },
          { items: [1, 0, -1, 0, -3], answer: [-2] },
          { items: [5, 3, 1, 0, -3], answer: [-1] },
        ],
      },
      {
        type: "matching",
        title: "Match Integers to Descriptions",
        instruction: "Draw a line to match each description to its integer.",
        left: ["3 below zero", "5 above zero", "7 below zero", "zero"],
        right: ["0", "-7", "5", "-3"],
      },
      {
        type: "matching",
        title: "Match Temperatures to Integers",
        instruction: "Draw a line to match each temperature description to its integer.",
        left: ["4 degrees below zero", "10 above zero", "2 below zero", "at freezing point"],
        right: ["0", "-2", "10", "-4"],
      },
      {
        type: "circle-correct",
        title: "Is It Positive or Negative?",
        instruction: "Circle whether each integer is positive or negative.",
        questions: [
          { prompt: "-8", options: ["Positive", "Negative"] },
          { prompt: "12", options: ["Positive", "Negative"] },
          { prompt: "-1", options: ["Positive", "Negative"] },
          { prompt: "0", options: ["Neither", "Positive", "Negative"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Order Integers",
        instruction: "Circle the correct order from smallest to largest.",
        questions: [
          { prompt: "-4, 2, -1", options: ["-4, -1, 2", "2, -1, -4", "-1, -4, 2"] },
          { prompt: "3, -5, 0", options: ["-5, 0, 3", "0, 3, -5", "3, 0, -5"] },
          { prompt: "-2, -6, 1", options: ["-6, -2, 1", "-2, -6, 1", "1, -2, -6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Order These Integers",
        instruction: "Circle the correct order from smallest to largest.",
        questions: [
          { prompt: "5, -3, -7", options: ["-7, -3, 5", "5, -3, -7", "-3, -7, 5"] },
          { prompt: "-1, -8, 4", options: ["-8, -1, 4", "-1, -8, 4", "4, -1, -8"] },
          { prompt: "0, -10, 6", options: ["-10, 0, 6", "0, -10, 6", "6, 0, -10"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Positive or Negative?",
        instruction: "Sort each integer into the correct column.",
        columns: ["Negative", "Zero", "Positive"],
        items: [
          { label: "-3" },
          { label: "7" },
          { label: "0" },
          { label: "-11" },
          { label: "4" },
          { label: "-1" },
          { label: "15" },
          { label: "-20" },
        ],
      },
      {
        type: "number-bonds",
        title: "Integer Pairs That Make Zero",
        instruction: "Each pair of integers adds to zero. Find the missing partner.",
        bonds: [
          { total: 0, partA: 5, partB: null },
          { total: 0, partA: -3, partB: null },
          { total: 0, partA: null, partB: -8 },
          { total: 0, partA: 12, partB: null },
          { total: 0, partA: null, partB: 7 },
          { total: 0, partA: -15, partB: null },
        ],
      },
      {
        type: "open-response",
        title: "Number Line: Place the Integer",
        instruction: "Write the integer that belongs at each position on the number line.",
        prompts: [
          { text: "The integer exactly halfway between -4 and -2: ___", type: "lines", lines: 1 },
          { text: "The integer exactly halfway between -1 and 3: ___", type: "lines", lines: 1 },
          { text: "The integer 3 steps to the left of 1: ___", type: "lines", lines: 1 },
          { text: "The integer 5 steps to the right of -7: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sequence",
        title: "Skip Counting with Integers",
        instruction: "Fill in the missing numbers in each skip-counting pattern.",
        sequences: [
          { items: [-10, -8, -6, 0, -2], answer: [-4] },
          { items: [-15, -10, 0, 0, 5], answer: [-5] },
          { items: [6, 4, 2, 0, 0], answer: [-2] },
        ],
      },
      // ─── Medium: Comparing integers ───
      {
        type: "circle-correct",
        title: "Which Integer Is Greater?",
        instruction: "Circle the greater integer in each pair.",
        questions: [
          { prompt: "Which is greater?", options: ["-3", "2"] },
          { prompt: "Which is greater?", options: ["-1", "-5"] },
          { prompt: "Which is greater?", options: ["0", "-4"] },
          { prompt: "Which is greater?", options: ["-7", "-2"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Integer Is Smaller?",
        instruction: "Circle the smaller integer in each pair.",
        questions: [
          { prompt: "Which is smaller?", options: ["-6", "1"] },
          { prompt: "Which is smaller?", options: ["-3", "-9"] },
          { prompt: "Which is smaller?", options: ["0", "5"] },
          { prompt: "Which is smaller?", options: ["-4", "-1"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare with < or >",
        instruction: "Circle the correct symbol to compare the integers.",
        questions: [
          { prompt: "-3 ___ 2", options: ["<", ">"] },
          { prompt: "5 ___ -5", options: ["<", ">"] },
          { prompt: "-8 ___ -3", options: ["<", ">"] },
          { prompt: "0 ___ -1", options: ["<", ">"] },
          { prompt: "-12 ___ -15", options: ["<", ">"] },
        ],
      },
      {
        type: "open-response",
        title: "Order from Smallest to Largest",
        instruction: "Write these integers in order from smallest to largest.",
        prompts: [
          { text: "4, -2, 0, -5, 3 → ___", type: "lines", lines: 1 },
          { text: "-8, -1, 7, -3, 5 → ___", type: "lines", lines: 1 },
          { text: "10, -10, 0, -5, 5 → ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Integers Between",
        instruction: "List all the integers between the two given numbers.",
        prompts: [
          { text: "Integers between -3 and 3: ___", type: "lines", lines: 1 },
          { text: "Integers between -5 and 0: ___", type: "lines", lines: 1 },
          { text: "Integers between -2 and 4: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match the Opposite Integer",
        instruction: "Draw a line to match each integer to its opposite.",
        left: ["-6", "3", "-9", "14", "-20"],
        right: ["20", "9", "-14", "6", "-3"],
      },
      {
        type: "sequence",
        title: "Descending Integer Patterns",
        instruction: "Fill in the missing numbers in the descending pattern.",
        sequences: [
          { items: [4, 2, 0, 0, -4], answer: [-2] },
          { items: [10, 5, 0, 0, -10], answer: [-5] },
          { items: [3, 0, -3, 0, -9], answer: [-6] },
        ],
      },
      // ─── Medium: Cartesian plane ───
      {
        type: "open-response",
        title: "Plot Points on the Cartesian Plane",
        instruction: "Write the coordinates for each point described below.",
        prompts: [
          { text: "A point 3 units right and 2 units up from the origin: ( ___ , ___ )", type: "lines", lines: 1 },
          { text: "A point 4 units left and 1 unit down from the origin: ( ___ , ___ )", type: "lines", lines: 1 },
          { text: "A point at the origin: ( ___ , ___ )", type: "lines", lines: 1 },
          { text: "A point 2 units right and 5 units down from the origin: ( ___ , ___ )", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Name the Coordinates",
        instruction: "Write the coordinates for each described location on a Cartesian plane.",
        prompts: [
          { text: "6 units left and 3 units up: ( ___ , ___ )", type: "lines", lines: 1 },
          { text: "5 units right and 5 units down: ( ___ , ___ )", type: "lines", lines: 1 },
          { text: "On the y-axis, 4 units above the origin: ( ___ , ___ )", type: "lines", lines: 1 },
          { text: "On the x-axis, 7 units to the left: ( ___ , ___ )", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Quadrant?",
        instruction: "Circle the quadrant where each point belongs.",
        questions: [
          { prompt: "(3, -2)", options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"] },
          { prompt: "(-5, 1)", options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"] },
          { prompt: "(-3, -4)", options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"] },
          { prompt: "(7, 8)", options: ["Quadrant 1", "Quadrant 2", "Quadrant 3", "Quadrant 4"] },
        ],
      },
      {
        type: "matching",
        title: "Match Point to Quadrant",
        instruction: "Draw a line to match each point to its quadrant.",
        left: ["(4, 5)", "(-2, 3)", "(-6, -1)", "(1, -7)"],
        right: ["Quadrant 4", "Quadrant 1", "Quadrant 3", "Quadrant 2"],
      },
      {
        type: "sorting",
        title: "Sort Points by Quadrant",
        instruction: "Sort each ordered pair into the correct quadrant.",
        columns: ["Quadrant 1 (+, +)", "Quadrant 2 (−, +)", "Quadrant 3 (−, −)", "Quadrant 4 (+, −)"],
        items: [
          { label: "(2, 6)" },
          { label: "(-4, 3)" },
          { label: "(-5, -2)" },
          { label: "(8, -1)" },
          { label: "(1, 9)" },
          { label: "(-7, -4)" },
        ],
      },
      // ─── Hard: Negative integers in context ───
      {
        type: "sorting",
        title: "Sort the Temperatures",
        instruction: "Sort these temperatures into the correct column.",
        columns: ["Below Freezing (< 0°C)", "Freezing or Above (≥ 0°C)"],
        items: [
          { label: "-5°C" },
          { label: "3°C" },
          { label: "0°C" },
          { label: "-12°C" },
          { label: "7°C" },
          { label: "-1°C" },
        ],
      },
      {
        type: "open-response",
        title: "Integer Word Problems",
        instruction: "Solve each problem using integers.",
        prompts: [
          { text: "The temperature was 3°C in the morning and dropped 8 degrees by midnight. What was the midnight temperature?", type: "lines", lines: 1 },
          { text: "A submarine is at -50 metres. It rises 20 metres. What is its new depth?", type: "lines", lines: 1 },
          { text: "A lift starts on floor 2 and goes down 5 floors. What floor is it on?", type: "lines", lines: 1 },
          { text: "The temperature rose from -6°C to 4°C. How many degrees did it rise?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Real-Life Integers",
        instruction: "Write the integer that represents each situation.",
        prompts: [
          { text: "A loss of $15: ___", type: "lines", lines: 1 },
          { text: "12 metres above sea level: ___", type: "lines", lines: 1 },
          { text: "A temperature of 8 degrees below zero: ___", type: "lines", lines: 1 },
          { text: "Gaining 25 points in a game: ___", type: "lines", lines: 1 },
          { text: "Underground car park level 3: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Temperature Challenge",
        instruction: "Circle the correct answer for each temperature question.",
        questions: [
          { prompt: "Which is colder: -3°C or -8°C?", options: ["-3°C", "-8°C"] },
          { prompt: "Which is warmer: -1°C or 0°C?", options: ["-1°C", "0°C"] },
          { prompt: "It is -4°C. The temperature rises 7°. What is it now?", options: ["-11°C", "3°C", "11°C"] },
          { prompt: "It is 2°C. The temperature drops 9°. What is it now?", options: ["-7°C", "-11°C", "7°C"] },
        ],
      },
      {
        type: "open-response",
        title: "Cartesian Plane Shapes",
        instruction: "Plot these points on a Cartesian plane and name the shape they make.",
        prompts: [
          { text: "Points: (1, 1), (1, -1), (-1, -1), (-1, 1). Shape: ___", type: "lines", lines: 1 },
          { text: "Points: (0, 3), (3, 0), (0, -3), (-3, 0). Shape: ___", type: "lines", lines: 1 },
          { text: "A rectangle has corners at (2, 4) and (-2, -4). What are the other two corners?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Distance Between Points",
        instruction: "Calculate the distance between each pair of points on a number line.",
        prompts: [
          { text: "Distance between -3 and 5 on the number line: ___", type: "lines", lines: 1 },
          { text: "Distance between -7 and -2 on the number line: ___", type: "lines", lines: 1 },
          { text: "Distance between -4 and 4 on the number line: ___", type: "lines", lines: 1 },
          { text: "Distance between 0 and -9 on the number line: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Integers Around Us",
        instruction: "Find integers in real life!",
        suggestions: [
          "Check the weather forecast — are any temperatures below zero? Write them as negative integers.",
          "Look at a thermometer. Mark where 0°C is. Count down from 0 to find negative numbers.",
          "Draw a number line from -10 to 10 and mark five integers of your choice.",
          "Find examples of negative numbers in real life (e.g. underground car park levels, temperatures).",
          "Draw a Cartesian plane and plot your family members' ages as coordinates (e.g. Mum = (1, 42), Dad = (2, 45)).",
        ],
      },
    ],
  },

  // ── WS 2: Prime, Composite & Square Numbers ──────────────
  {
    slug: "prime-composite-square-numbers",
    title: "Prime, Composite & Square Numbers",
    strand: "Number",
    description:
      "Solve problems using properties of prime, composite and square numbers",
    activities: [
      // ─── Easy: Identify prime and composite ───
      {
        type: "sorting",
        title: "Sort: Prime or Composite?",
        instruction: "Sort each number into the correct column. Remember: a prime number has exactly 2 factors (1 and itself).",
        columns: ["Prime", "Composite"],
        items: [
          { label: "7" },
          { label: "12" },
          { label: "3" },
          { label: "15" },
          { label: "11" },
          { label: "20" },
          { label: "2" },
          { label: "9" },
        ],
      },
      {
        type: "sorting",
        title: "Sort More Numbers: Prime or Composite?",
        instruction: "Sort each number. Is it prime or composite?",
        columns: ["Prime", "Composite"],
        items: [
          { label: "17" },
          { label: "24" },
          { label: "5" },
          { label: "18" },
          { label: "29" },
          { label: "35" },
          { label: "13" },
          { label: "27" },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Prime Number",
        instruction: "Circle the prime number in each group.",
        questions: [
          { prompt: "Which is prime?", options: ["4", "9", "11"] },
          { prompt: "Which is prime?", options: ["15", "21", "23"] },
          { prompt: "Which is prime?", options: ["27", "29", "33"] },
          { prompt: "Which is prime?", options: ["37", "36", "38"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Prime",
        instruction: "Circle the prime number in each group.",
        questions: [
          { prompt: "Which is prime?", options: ["25", "31", "35"] },
          { prompt: "Which is prime?", options: ["39", "41", "42"] },
          { prompt: "Which is prime?", options: ["49", "51", "47"] },
          { prompt: "Which is prime?", options: ["56", "57", "53"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Composite Number",
        instruction: "Circle the composite number in each group.",
        questions: [
          { prompt: "Which is composite?", options: ["2", "3", "4"] },
          { prompt: "Which is composite?", options: ["11", "13", "15"] },
          { prompt: "Which is composite?", options: ["17", "19", "21"] },
          { prompt: "Which is composite?", options: ["23", "29", "30"] },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers to Factor Counts",
        instruction: "Draw a line to match each number to how many factors it has.",
        left: ["7", "12", "1", "16", "11"],
        right: ["1 factor", "2 factors", "2 factors", "5 factors", "6 factors"],
      },
      {
        type: "open-response",
        title: "List the Factors",
        instruction: "List all the factors of each number. Then say if it is prime or composite.",
        prompts: [
          { text: "Factors of 18: ___\nPrime or Composite? ___", type: "lines", lines: 2 },
          { text: "Factors of 23: ___\nPrime or Composite? ___", type: "lines", lines: 2 },
          { text: "Factors of 36: ___\nPrime or Composite? ___", type: "lines", lines: 2 },
          { text: "Factors of 29: ___\nPrime or Composite? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Write All the Primes",
        instruction: "Write all the prime numbers in each range.",
        prompts: [
          { text: "Prime numbers between 1 and 20: ___", type: "lines", lines: 1 },
          { text: "Prime numbers between 20 and 40: ___", type: "lines", lines: 1 },
          { text: "Prime numbers between 40 and 60: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Is 1 Prime or Composite?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "The number 1 is:", options: ["Prime", "Composite", "Neither"] },
          { prompt: "The number 2 is:", options: ["Prime", "Composite", "Neither"] },
          { prompt: "The number 0 is:", options: ["Prime", "Composite", "Neither"] },
        ],
      },
      // ─── Medium: Square numbers ───
      {
        type: "matching",
        title: "Match Square Numbers",
        instruction: "Draw a line to match each multiplication to its square number.",
        left: ["1 × 1", "4 × 4", "7 × 7", "10 × 10"],
        right: ["49", "100", "1", "16"],
      },
      {
        type: "matching",
        title: "Match More Square Numbers",
        instruction: "Draw a line to match each multiplication to its square number.",
        left: ["2 × 2", "5 × 5", "8 × 8", "12 × 12"],
        right: ["64", "4", "144", "25"],
      },
      {
        type: "sequence",
        title: "Square Number Sequence",
        instruction: "Fill in the missing square numbers.",
        sequences: [
          { items: [1, 4, 9, 0, 25], answer: [16] },
          { items: [36, 0, 64, 81, 100], answer: [49] },
          { items: [0, 4, 9, 16, 0], answer: [1, 25] },
        ],
      },
      {
        type: "sequence",
        title: "More Square Numbers",
        instruction: "Fill in the missing square numbers in the sequence.",
        sequences: [
          { items: [100, 0, 144, 169, 196], answer: [121] },
          { items: [0, 25, 36, 0, 64], answer: [16, 49] },
          { items: [1, 0, 9, 0, 25, 36], answer: [4, 16] },
        ],
      },
      {
        type: "open-response",
        title: "Find the Square Root",
        instruction: "Write the square root of each number. The first one is done for you: √25 = 5.",
        prompts: [
          { text: "√36 = ___", type: "lines", lines: 1 },
          { text: "√64 = ___", type: "lines", lines: 1 },
          { text: "√81 = ___", type: "lines", lines: 1 },
          { text: "√144 = ___", type: "lines", lines: 1 },
          { text: "√100 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Square Roots",
        instruction: "Write the square root of each number.",
        prompts: [
          { text: "√1 = ___", type: "lines", lines: 1 },
          { text: "√4 = ___", type: "lines", lines: 1 },
          { text: "√9 = ___", type: "lines", lines: 1 },
          { text: "√16 = ___", type: "lines", lines: 1 },
          { text: "√49 = ___", type: "lines", lines: 1 },
          { text: "√121 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Is It a Square Number?",
        instruction: "Circle YES or NO for each number.",
        questions: [
          { prompt: "Is 25 a square number?", options: ["YES", "NO"] },
          { prompt: "Is 30 a square number?", options: ["YES", "NO"] },
          { prompt: "Is 49 a square number?", options: ["YES", "NO"] },
          { prompt: "Is 50 a square number?", options: ["YES", "NO"] },
          { prompt: "Is 64 a square number?", options: ["YES", "NO"] },
          { prompt: "Is 72 a square number?", options: ["YES", "NO"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Square or Not Square?",
        instruction: "Sort each number into the correct column.",
        columns: ["Square Number", "Not a Square Number"],
        items: [
          { label: "16" },
          { label: "20" },
          { label: "36" },
          { label: "45" },
          { label: "81" },
          { label: "100" },
          { label: "75" },
          { label: "144" },
        ],
      },
      {
        type: "open-response",
        title: "Square Number Calculations",
        instruction: "Calculate each square number.",
        prompts: [
          { text: "6² = ___", type: "lines", lines: 1 },
          { text: "9² = ___", type: "lines", lines: 1 },
          { text: "11² = ___", type: "lines", lines: 1 },
          { text: "15² = ___", type: "lines", lines: 1 },
          { text: "20² = ___", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Combining concepts ───
      {
        type: "sorting",
        title: "Sort: Prime, Composite or Square?",
        instruction: "Sort each number. Some numbers may fit more than one category — choose the best fit.",
        columns: ["Prime", "Composite (not square)", "Square Number"],
        items: [
          { label: "7" },
          { label: "16" },
          { label: "18" },
          { label: "25" },
          { label: "31" },
          { label: "36" },
          { label: "43" },
          { label: "42" },
        ],
      },
      {
        type: "circle-correct",
        title: "Prime, Composite or Square?",
        instruction: "Circle the correct classification for each number.",
        questions: [
          { prompt: "49 is:", options: ["Prime", "Composite (not square)", "Square number"] },
          { prompt: "37 is:", options: ["Prime", "Composite (not square)", "Square number"] },
          { prompt: "24 is:", options: ["Prime", "Composite (not square)", "Square number"] },
          { prompt: "64 is:", options: ["Prime", "Composite (not square)", "Square number"] },
        ],
      },
      {
        type: "open-response",
        title: "Number Properties Investigation",
        instruction: "Answer each question about number properties.",
        prompts: [
          { text: "Name a number that is both square and odd: ___", type: "lines", lines: 1 },
          { text: "Name a number that is both composite and even (but not square): ___", type: "lines", lines: 1 },
          { text: "What is the smallest prime number? ___", type: "lines", lines: 1 },
          { text: "Name two consecutive composite numbers: ___ and ___", type: "lines", lines: 1 },
        ],
      },
      // ─── Hard: Problem solving ───
      {
        type: "circle-correct",
        title: "True or False? Number Properties",
        instruction: "Circle TRUE or FALSE for each statement.",
        questions: [
          { prompt: "All even numbers are composite", options: ["TRUE", "FALSE"] },
          { prompt: "1 is a prime number", options: ["TRUE", "FALSE"] },
          { prompt: "Every square number has an odd number of factors", options: ["TRUE", "FALSE"] },
          { prompt: "The number 2 is the only even prime number", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More True or False",
        instruction: "Circle TRUE or FALSE for each statement.",
        questions: [
          { prompt: "All odd numbers are prime", options: ["TRUE", "FALSE"] },
          { prompt: "The sum of two prime numbers is always even", options: ["TRUE", "FALSE"] },
          { prompt: "Every square number is composite", options: ["TRUE", "FALSE"] },
          { prompt: "There are more composite numbers than prime numbers between 1 and 50", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "open-response",
        title: "Prime Factor Trees",
        instruction: "Write each number as a product of its prime factors.",
        prompts: [
          { text: "30 = ___ × ___ × ___", type: "lines", lines: 1 },
          { text: "24 = ___ × ___ × ___ × ___", type: "lines", lines: 1 },
          { text: "45 = ___ × ___ × ___", type: "lines", lines: 1 },
          { text: "60 = ___ × ___ × ___ × ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Number Puzzles",
        instruction: "Solve each puzzle about prime, composite and square numbers.",
        prompts: [
          { text: "I am a square number between 30 and 50. What am I? ___", type: "lines", lines: 1 },
          { text: "I am a prime number between 40 and 50. What am I? (There are two answers.) ___", type: "lines", lines: 1 },
          { text: "I am a square number and also an even number less than 20. What could I be? ___", type: "lines", lines: 1 },
          { text: "I am the sum of the first four square numbers (1 + 4 + 9 + 16). Am I prime or composite? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Explain Your Thinking",
        instruction: "Answer each question and explain your reasoning.",
        prompts: [
          { text: "Why is 1 not considered a prime number?", type: "lines", lines: 2 },
          { text: "Why is 2 the only even prime number?", type: "lines", lines: 2 },
          { text: "Can a square number also be prime? Explain why or why not.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Number Detective",
        instruction: "Explore prime, composite and square numbers at home!",
        suggestions: [
          "Write all prime numbers between 1 and 50. How many did you find?",
          "Use tiles or counters to prove that 16 is a square number by arranging them in a perfect square.",
          "Find a composite number and list all of its factors.",
          "Challenge someone at home: give them a number and ask if it is prime, composite, or square.",
          "Make a prime number sieve (Sieve of Eratosthenes) on a 1-100 grid.",
        ],
      },
    ],
  },

  // ── WS 3: Fractions — Order, Add & Subtract ──────────────
  {
    slug: "order-add-subtract-fractions",
    title: "Fractions — Order, Add & Subtract",
    strand: "Number",
    description:
      "Order common fractions; add and subtract fractions with related denominators",
    activities: [
      // ─── Easy: Ordering fractions ───
      {
        type: "circle-correct",
        title: "Which Fraction Is Larger?",
        instruction: "Circle the larger fraction in each pair.",
        questions: [
          { prompt: "Which is larger?", options: ["1/3", "1/2"] },
          { prompt: "Which is larger?", options: ["2/5", "3/5"] },
          { prompt: "Which is larger?", options: ["3/4", "2/3"] },
          { prompt: "Which is larger?", options: ["1/6", "1/4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare More Fractions",
        instruction: "Circle the larger fraction in each pair.",
        questions: [
          { prompt: "Which is larger?", options: ["2/3", "3/4"] },
          { prompt: "Which is larger?", options: ["5/8", "1/2"] },
          { prompt: "Which is larger?", options: ["2/5", "1/3"] },
          { prompt: "Which is larger?", options: ["7/10", "3/5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Fraction Is Smaller?",
        instruction: "Circle the smaller fraction in each pair.",
        questions: [
          { prompt: "Which is smaller?", options: ["1/4", "1/3"] },
          { prompt: "Which is smaller?", options: ["2/5", "3/10"] },
          { prompt: "Which is smaller?", options: ["5/6", "4/5"] },
          { prompt: "Which is smaller?", options: ["1/8", "1/6"] },
        ],
      },
      {
        type: "matching",
        title: "Match Equivalent Fractions",
        instruction: "Draw a line to match each fraction to its equivalent.",
        left: ["1/2", "2/4", "3/6", "1/3"],
        right: ["2/6", "3/6", "1/2", "2/4"],
      },
      {
        type: "matching",
        title: "More Equivalent Fractions",
        instruction: "Draw a line to match each fraction to its equivalent.",
        left: ["2/3", "3/4", "4/5", "1/5"],
        right: ["2/10", "8/10", "6/8", "4/6"],
      },
      {
        type: "open-response",
        title: "Simplify These Fractions",
        instruction: "Write each fraction in its simplest form.",
        prompts: [
          { text: "4/8 = ___", type: "lines", lines: 1 },
          { text: "6/9 = ___", type: "lines", lines: 1 },
          { text: "10/15 = ___", type: "lines", lines: 1 },
          { text: "8/12 = ___", type: "lines", lines: 1 },
          { text: "5/20 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Order Fractions (Smallest to Largest)",
        instruction: "Write the fractions in order from smallest to largest.",
        prompts: [
          { text: "1/2, 1/4, 3/4 → ___", type: "lines", lines: 1 },
          { text: "2/3, 1/6, 1/2 → ___", type: "lines", lines: 1 },
          { text: "3/8, 1/4, 5/8 → ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Greater or Less Than 1/2?",
        instruction: "Sort each fraction into the correct column.",
        columns: ["Less than 1/2", "Equal to 1/2", "Greater than 1/2"],
        items: [
          { label: "1/3" },
          { label: "3/4" },
          { label: "2/4" },
          { label: "5/8" },
          { label: "1/5" },
          { label: "4/6" },
          { label: "3/6" },
          { label: "2/8" },
        ],
      },
      {
        type: "circle-correct",
        title: "Equivalent or Not?",
        instruction: "Circle YES if the fractions are equivalent, or NO if they are not.",
        questions: [
          { prompt: "2/4 and 1/2", options: ["YES", "NO"] },
          { prompt: "3/5 and 2/3", options: ["YES", "NO"] },
          { prompt: "4/6 and 2/3", options: ["YES", "NO"] },
          { prompt: "1/4 and 3/8", options: ["YES", "NO"] },
        ],
      },
      {
        type: "open-response",
        title: "Find the Equivalent Fraction",
        instruction: "Fill in the missing number to make equivalent fractions.",
        prompts: [
          { text: "1/3 = ___/6", type: "lines", lines: 1 },
          { text: "2/5 = ___/10", type: "lines", lines: 1 },
          { text: "3/4 = 6/___", type: "lines", lines: 1 },
          { text: "1/2 = ___/8", type: "lines", lines: 1 },
          { text: "5/6 = 10/___", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Adding fractions ───
      {
        type: "open-response",
        title: "Add Fractions with Same Denominators",
        instruction: "Add these fractions. Simplify your answer if possible.",
        prompts: [
          { text: "1/6 + 3/6 = ___", type: "lines", lines: 1 },
          { text: "2/8 + 3/8 = ___", type: "lines", lines: 1 },
          { text: "1/5 + 2/5 = ___", type: "lines", lines: 1 },
          { text: "3/10 + 4/10 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Add More Same Denominators",
        instruction: "Add these fractions. Simplify if you can.",
        prompts: [
          { text: "2/7 + 3/7 = ___", type: "lines", lines: 1 },
          { text: "1/4 + 2/4 = ___", type: "lines", lines: 1 },
          { text: "4/9 + 2/9 = ___", type: "lines", lines: 1 },
          { text: "5/12 + 3/12 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Fraction Addition",
        instruction: "Circle the correct answer for each addition.",
        questions: [
          { prompt: "1/5 + 3/5 = ?", options: ["3/5", "4/5", "4/10"] },
          { prompt: "2/6 + 3/6 = ?", options: ["5/6", "5/12", "6/6"] },
          { prompt: "1/4 + 1/4 = ?", options: ["2/8", "1/2", "2/4"] },
          { prompt: "3/8 + 2/8 = ?", options: ["5/16", "5/8", "1/2"] },
        ],
      },
      {
        type: "open-response",
        title: "Add Fractions with Related Denominators",
        instruction: "Find a common denominator, then add. Example: 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
        prompts: [
          { text: "1/3 + 1/6 = ___", type: "lines", lines: 1 },
          { text: "1/2 + 1/6 = ___", type: "lines", lines: 1 },
          { text: "2/3 + 1/6 = ___", type: "lines", lines: 1 },
          { text: "1/4 + 1/2 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Related Denominator Addition",
        instruction: "Find a common denominator, then add.",
        prompts: [
          { text: "1/3 + 1/9 = ___", type: "lines", lines: 1 },
          { text: "3/4 + 1/8 = ___", type: "lines", lines: 1 },
          { text: "2/5 + 3/10 = ___", type: "lines", lines: 1 },
          { text: "1/2 + 3/8 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Addition to Answer",
        instruction: "Draw a line to match each fraction addition to its answer.",
        left: ["1/2 + 1/4", "1/3 + 1/6", "2/5 + 1/10", "1/4 + 1/8"],
        right: ["3/8", "3/4", "1/2", "1/2"],
      },
      // ─── Medium: Subtracting fractions (same denominators) ───
      {
        type: "open-response",
        title: "Subtract Fractions with Same Denominators",
        instruction: "Subtract these fractions. Simplify if possible.",
        prompts: [
          { text: "5/6 − 2/6 = ___", type: "lines", lines: 1 },
          { text: "7/8 − 3/8 = ___", type: "lines", lines: 1 },
          { text: "4/5 − 1/5 = ___", type: "lines", lines: 1 },
          { text: "9/10 − 3/10 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Fraction Subtraction",
        instruction: "Circle the correct answer for each subtraction.",
        questions: [
          { prompt: "3/4 − 1/4 = ?", options: ["2/4", "1/2", "Both are correct"] },
          { prompt: "5/6 − 1/6 = ?", options: ["4/6", "2/3", "Both are correct"] },
          { prompt: "7/10 − 3/10 = ?", options: ["4/10", "2/5", "Both are correct"] },
          { prompt: "4/8 − 1/8 = ?", options: ["3/8", "1/4", "3/16"] },
        ],
      },
      // ─── Hard: Subtracting fractions with related denominators ───
      {
        type: "open-response",
        title: "Subtract Fractions with Related Denominators",
        instruction: "Find a common denominator, then subtract. Show your working.",
        prompts: [
          { text: "3/4 − 1/2 = ___", type: "lines", lines: 1 },
          { text: "5/6 − 1/3 = ___", type: "lines", lines: 1 },
          { text: "7/8 − 1/4 = ___", type: "lines", lines: 1 },
          { text: "2/3 − 1/6 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Related Denominator Subtraction",
        instruction: "Find a common denominator, then subtract.",
        prompts: [
          { text: "4/5 − 3/10 = ___", type: "lines", lines: 1 },
          { text: "5/6 − 1/2 = ___", type: "lines", lines: 1 },
          { text: "7/8 − 3/4 = ___", type: "lines", lines: 1 },
          { text: "2/3 − 1/9 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Check the Answer",
        instruction: "Circle the correct answer for each fraction problem.",
        questions: [
          { prompt: "1/2 + 1/4 = ?", options: ["2/4", "3/4", "2/6"] },
          { prompt: "2/3 − 1/6 = ?", options: ["1/6", "3/6", "1/3"] },
          { prompt: "3/4 − 1/2 = ?", options: ["2/4", "1/4", "1/2"] },
          { prompt: "1/3 + 2/6 = ?", options: ["3/6", "2/3", "3/9"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Answer Checks",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3/4 + 1/8 = ?", options: ["4/8", "7/8", "4/12"] },
          { prompt: "5/6 − 2/3 = ?", options: ["1/6", "3/6", "1/3"] },
          { prompt: "1/2 + 2/5 = ?", options: ["3/7", "9/10", "3/10"] },
          { prompt: "7/10 − 1/5 = ?", options: ["6/10", "1/2", "Both are correct"] },
        ],
      },
      {
        type: "open-response",
        title: "Fraction Word Problems",
        instruction: "Solve each word problem involving fractions.",
        prompts: [
          { text: "Sam ate 1/4 of a pizza. His sister ate 1/2 of the same pizza. How much did they eat altogether?", type: "lines", lines: 1 },
          { text: "A jug was 5/6 full. Mum used 1/3 of the jug. How much is left?", type: "lines", lines: 1 },
          { text: "You walked 3/8 of a km to the shop and 1/4 of a km to the park. How far did you walk in total?", type: "lines", lines: 2 },
          { text: "A ribbon is 7/10 of a metre long. You cut off 2/5 of a metre. How much is left?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Mixed Addition and Subtraction",
        instruction: "Solve each problem. Simplify your answer.",
        prompts: [
          { text: "1/2 + 1/4 − 1/8 = ___", type: "lines", lines: 1 },
          { text: "2/3 − 1/6 + 1/6 = ___", type: "lines", lines: 1 },
          { text: "3/4 − 1/2 + 1/8 = ___", type: "lines", lines: 1 },
          { text: "5/6 − 1/3 − 1/6 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Explain Your Method",
        instruction: "Show your full working for each problem. Explain your steps.",
        prompts: [
          { text: "Calculate 2/3 + 1/4. Show all steps.", type: "lines", lines: 3 },
          { text: "Calculate 5/6 − 3/8. Show all steps.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Fraction Kitchen",
        instruction: "Explore fractions using cooking and everyday items!",
        suggestions: [
          "Use a measuring cup: fill it 1/3 full, then add another 1/6. How full is it now?",
          "Cut a piece of paper into 6 equal parts. Colour 1/2 of them. How many sixths did you colour?",
          "Find a recipe and halve all the fraction amounts.",
          "Order these fractions from smallest to largest: 1/2, 1/3, 2/3, 1/6, 5/6.",
          "Use a ruler marked in eighths. Measure five objects and record their lengths as fractions.",
        ],
      },
    ],
  },

  // ── WS 4: Four Operations with Decimals ───────────────────
  {
    slug: "four-operations-decimals",
    title: "Four Operations with Decimals",
    strand: "Number",
    description:
      "Use all 4 operations with decimals",
    activities: [
      // ─── Easy: Adding decimals ───
      {
        type: "open-response",
        title: "Add Decimals",
        instruction: "Add these decimal numbers. Line up the decimal points!",
        prompts: [
          { text: "3.5 + 2.4 = ___", type: "lines", lines: 1 },
          { text: "7.8 + 1.6 = ___", type: "lines", lines: 1 },
          { text: "12.35 + 4.25 = ___", type: "lines", lines: 1 },
          { text: "0.75 + 0.50 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Decimal Addition",
        instruction: "Add these decimals carefully.",
        prompts: [
          { text: "4.6 + 3.9 = ___", type: "lines", lines: 1 },
          { text: "15.25 + 8.75 = ___", type: "lines", lines: 1 },
          { text: "0.8 + 0.35 = ___", type: "lines", lines: 1 },
          { text: "22.5 + 7.55 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Decimal Addition",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "2.5 + 3.5 = ?", options: ["5.0", "6.0", "5.10"] },
          { prompt: "0.7 + 0.8 = ?", options: ["0.15", "1.5", "15"] },
          { prompt: "4.25 + 1.75 = ?", options: ["5.00", "6.00", "5.100"] },
          { prompt: "10.6 + 3.4 = ?", options: ["13.0", "14.0", "13.10"] },
        ],
      },
      // ─── Easy: Subtracting decimals ───
      {
        type: "open-response",
        title: "Subtract Decimals",
        instruction: "Subtract these decimal numbers carefully.",
        prompts: [
          { text: "8.6 − 3.2 = ___", type: "lines", lines: 1 },
          { text: "15.4 − 7.8 = ___", type: "lines", lines: 1 },
          { text: "10.00 − 4.35 = ___", type: "lines", lines: 1 },
          { text: "6.50 − 2.75 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Decimal Subtraction",
        instruction: "Subtract these decimals. Remember to line up the decimal points.",
        prompts: [
          { text: "9.2 − 4.7 = ___", type: "lines", lines: 1 },
          { text: "20.00 − 8.65 = ___", type: "lines", lines: 1 },
          { text: "5.3 − 2.85 = ___", type: "lines", lines: 1 },
          { text: "14.50 − 6.75 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Decimal Subtraction",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "7.5 − 2.5 = ?", options: ["4.0", "5.0", "10.0"] },
          { prompt: "10.0 − 3.6 = ?", options: ["7.4", "6.4", "7.6"] },
          { prompt: "5.25 − 1.25 = ?", options: ["4.00", "3.00", "6.50"] },
          { prompt: "8.1 − 0.9 = ?", options: ["7.2", "8.0", "7.8"] },
        ],
      },
      {
        type: "matching",
        title: "Match Decimal Sums and Differences",
        instruction: "Draw a line to match each calculation to its answer.",
        left: ["3.6 + 2.4", "10.0 − 3.5", "4.75 + 1.25", "8.2 − 5.8"],
        right: ["2.4", "6", "6.5", "6.0"],
      },
      {
        type: "number-bonds",
        title: "Decimal Bonds to 10",
        instruction: "Find the missing decimal that makes each pair add to 10.",
        bonds: [
          { total: 10, partA: 3, partB: null },
          { total: 10, partA: 6, partB: null },
          { total: 10, partA: null, partB: 2 },
          { total: 10, partA: 8, partB: null },
          { total: 10, partA: null, partB: 5 },
          { total: 10, partA: 1, partB: null },
        ],
      },
      {
        type: "open-response",
        title: "Decimal Bonds to 1",
        instruction: "Find the decimal that makes each pair add to 1.",
        prompts: [
          { text: "0.3 + ___ = 1", type: "lines", lines: 1 },
          { text: "0.75 + ___ = 1", type: "lines", lines: 1 },
          { text: "0.45 + ___ = 1", type: "lines", lines: 1 },
          { text: "0.08 + ___ = 1", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Multiplying decimals ───
      {
        type: "open-response",
        title: "Multiply Decimals by Whole Numbers",
        instruction: "Multiply these decimal numbers.",
        prompts: [
          { text: "2.5 × 4 = ___", type: "lines", lines: 1 },
          { text: "3.2 × 5 = ___", type: "lines", lines: 1 },
          { text: "6.5 × 3 = ___", type: "lines", lines: 1 },
          { text: "0.8 × 7 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Multiply Decimals by Decimals",
        instruction: "Multiply these decimal numbers. Count the decimal places in your answer.",
        prompts: [
          { text: "1.5 × 0.4 = ___", type: "lines", lines: 1 },
          { text: "12.5 × 0.2 = ___", type: "lines", lines: 1 },
          { text: "3.5 × 0.6 = ___", type: "lines", lines: 1 },
          { text: "2.4 × 1.5 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Estimate the Product",
        instruction: "Circle the best estimate for each multiplication.",
        questions: [
          { prompt: "4.9 × 3 ≈ ?", options: ["12", "15", "18"] },
          { prompt: "6.1 × 5 ≈ ?", options: ["25", "30", "35"] },
          { prompt: "2.8 × 7 ≈ ?", options: ["14", "21", "28"] },
          { prompt: "0.5 × 8 ≈ ?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Estimates",
        instruction: "Circle the best estimate for each calculation.",
        questions: [
          { prompt: "9.8 × 2 ≈ ?", options: ["18", "20", "22"] },
          { prompt: "3.1 × 4 ≈ ?", options: ["10", "12", "14"] },
          { prompt: "7.2 × 6 ≈ ?", options: ["36", "42", "48"] },
          { prompt: "1.9 × 9 ≈ ?", options: ["15", "18", "21"] },
        ],
      },
      {
        type: "open-response",
        title: "Multiply by 10, 100, 1000",
        instruction: "Multiply each decimal by the given power of 10.",
        prompts: [
          { text: "3.45 × 10 = ___", type: "lines", lines: 1 },
          { text: "0.72 × 100 = ___", type: "lines", lines: 1 },
          { text: "1.5 × 1000 = ___", type: "lines", lines: 1 },
          { text: "0.006 × 100 = ___", type: "lines", lines: 1 },
        ],
      },
      // ─── Hard: Dividing decimals ───
      {
        type: "open-response",
        title: "Divide Decimals by Whole Numbers",
        instruction: "Divide these decimal numbers.",
        prompts: [
          { text: "8.4 ÷ 2 = ___", type: "lines", lines: 1 },
          { text: "15.6 ÷ 4 = ___", type: "lines", lines: 1 },
          { text: "9.3 ÷ 3 = ___", type: "lines", lines: 1 },
          { text: "24.5 ÷ 5 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Divide Decimals by Decimals",
        instruction: "Divide these decimal numbers.",
        prompts: [
          { text: "7.2 ÷ 0.8 = ___", type: "lines", lines: 1 },
          { text: "10.5 ÷ 0.5 = ___", type: "lines", lines: 1 },
          { text: "6.3 ÷ 0.9 = ___", type: "lines", lines: 1 },
          { text: "4.8 ÷ 0.4 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Divide by 10, 100, 1000",
        instruction: "Divide each number by the given power of 10.",
        prompts: [
          { text: "45.6 ÷ 10 = ___", type: "lines", lines: 1 },
          { text: "230 ÷ 100 = ___", type: "lines", lines: 1 },
          { text: "8,500 ÷ 1000 = ___", type: "lines", lines: 1 },
          { text: "7.2 ÷ 10 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Operations to Answers",
        instruction: "Draw a line to match each calculation to its answer.",
        left: ["3.6 + 2.4", "10.0 − 3.5", "2.5 × 4", "9.6 ÷ 3"],
        right: ["3.2", "10", "6", "6.5"],
      },
      {
        type: "circle-correct",
        title: "Choose the Operation",
        instruction: "Circle the operation needed to solve each problem.",
        questions: [
          { prompt: "You buy 3 items at $4.50 each. Total cost?", options: ["Addition", "Multiplication", "Division"] },
          { prompt: "You share $15.60 equally among 4 people.", options: ["Subtraction", "Multiplication", "Division"] },
          { prompt: "You have $20 and spend $8.75.", options: ["Subtraction", "Addition", "Division"] },
          { prompt: "You earn $12.50 per hour for 6 hours.", options: ["Addition", "Multiplication", "Division"] },
        ],
      },
      {
        type: "open-response",
        title: "Decimal Word Problems",
        instruction: "Solve each word problem. Show your working.",
        prompts: [
          { text: "A book costs $14.95. You pay with a $20 note. How much change do you receive?", type: "lines", lines: 2 },
          { text: "You buy 3 pencils at $1.35 each. What is the total cost?", type: "lines", lines: 2 },
          { text: "A 2.5 kg bag of oranges costs $6.25. What is the price per kilogram?", type: "lines", lines: 2 },
          { text: "You walk 1.8 km in the morning and 2.45 km in the afternoon. How far did you walk?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Mixed Operations Challenge",
        instruction: "Use the correct operation to solve each problem.",
        prompts: [
          { text: "3.5 × 4 + 2.6 = ___", type: "lines", lines: 1 },
          { text: "20 − 3 × 4.5 = ___", type: "lines", lines: 1 },
          { text: "15.6 ÷ 3 + 2.8 = ___", type: "lines", lines: 1 },
          { text: "8.4 ÷ 2 − 1.5 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Decimal Shopping",
        instruction: "Practise decimal operations with real-life prices!",
        suggestions: [
          "Find 3 items in a catalogue. Add their prices together using decimal addition.",
          "If something costs $12.50 and you pay with a $20 note, how much change do you get?",
          "If 1 kg of apples costs $3.50, how much would 2.5 kg cost?",
          "Share $15.60 equally between 4 people. How much does each person get?",
          "Calculate the total cost of your family's grocery shop using decimal addition.",
        ],
      },
    ],
  },

  // ── WS 5: Decimal Metric Connections ──────────────────────
  {
    slug: "decimal-metric-connections",
    title: "Decimal Metric Connections",
    strand: "Number",
    description:
      "Connect decimal representations of measurements to the metric system",
    activities: [
      // ─── Easy: Length conversions ───
      {
        type: "matching",
        title: "Match Length Measurements",
        instruction: "Draw a line to match each measurement to its equivalent.",
        left: ["1.5 km", "0.25 m", "2.3 cm", "0.5 km"],
        right: ["500 m", "23 mm", "1,500 m", "25 cm"],
      },
      {
        type: "open-response",
        title: "Convert Lengths",
        instruction: "Convert each measurement. Remember: 1 km = 1,000 m, 1 m = 100 cm, 1 cm = 10 mm.",
        prompts: [
          { text: "2.5 km = ___ m", type: "lines", lines: 1 },
          { text: "0.75 m = ___ cm", type: "lines", lines: 1 },
          { text: "3.4 cm = ___ mm", type: "lines", lines: 1 },
          { text: "1,250 m = ___ km", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Length Conversions",
        instruction: "Convert each measurement.",
        prompts: [
          { text: "0.35 km = ___ m", type: "lines", lines: 1 },
          { text: "4.8 m = ___ cm", type: "lines", lines: 1 },
          { text: "65 mm = ___ cm", type: "lines", lines: 1 },
          { text: "3,750 m = ___ km", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Length Check",
        instruction: "Circle the correct conversion.",
        questions: [
          { prompt: "3.2 km = ?", options: ["320 m", "3,200 m", "32,000 m"] },
          { prompt: "0.45 m = ?", options: ["4.5 cm", "45 cm", "450 cm"] },
          { prompt: "1.8 cm = ?", options: ["0.18 mm", "18 mm", "180 mm"] },
          { prompt: "5,000 m = ?", options: ["0.5 km", "5 km", "50 km"] },
        ],
      },
      {
        type: "matching",
        title: "Match Equivalent Lengths",
        instruction: "Draw a line to match equivalent measurements.",
        left: ["0.1 km", "0.01 m", "0.5 m", "1.25 km"],
        right: ["50 cm", "100 m", "1 mm (approx)", "1,250 m"],
      },
      // ─── Medium: Mass conversions ───
      {
        type: "open-response",
        title: "Convert Mass",
        instruction: "Convert each measurement. Remember: 1 kg = 1,000 g.",
        prompts: [
          { text: "3.5 kg = ___ g", type: "lines", lines: 1 },
          { text: "0.25 kg = ___ g", type: "lines", lines: 1 },
          { text: "4,750 g = ___ kg", type: "lines", lines: 1 },
          { text: "500 g = ___ kg", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Mass Conversions",
        instruction: "Convert each measurement.",
        prompts: [
          { text: "1.75 kg = ___ g", type: "lines", lines: 1 },
          { text: "0.6 kg = ___ g", type: "lines", lines: 1 },
          { text: "2,250 g = ___ kg", type: "lines", lines: 1 },
          { text: "850 g = ___ kg", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Mass Check",
        instruction: "Circle the correct conversion.",
        questions: [
          { prompt: "2.5 kg = ?", options: ["250 g", "2,500 g", "25,000 g"] },
          { prompt: "750 g = ?", options: ["0.75 kg", "7.5 kg", "75 kg"] },
          { prompt: "0.1 kg = ?", options: ["10 g", "100 g", "1,000 g"] },
          { prompt: "3,200 g = ?", options: ["0.32 kg", "3.2 kg", "32 kg"] },
        ],
      },
      // ─── Medium: Capacity conversions ───
      {
        type: "open-response",
        title: "Convert Capacity",
        instruction: "Convert each measurement. Remember: 1 L = 1,000 mL.",
        prompts: [
          { text: "2.75 L = ___ mL", type: "lines", lines: 1 },
          { text: "0.5 L = ___ mL", type: "lines", lines: 1 },
          { text: "3,250 mL = ___ L", type: "lines", lines: 1 },
          { text: "750 mL = ___ L", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Capacity Conversions",
        instruction: "Convert each measurement.",
        prompts: [
          { text: "1.2 L = ___ mL", type: "lines", lines: 1 },
          { text: "0.35 L = ___ mL", type: "lines", lines: 1 },
          { text: "4,500 mL = ___ L", type: "lines", lines: 1 },
          { text: "125 mL = ___ L", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Capacity Equivalents",
        instruction: "Draw a line to match equivalent measurements.",
        left: ["0.5 L", "1.5 L", "0.25 L", "2 L"],
        right: ["250 mL", "500 mL", "2,000 mL", "1,500 mL"],
      },
      {
        type: "circle-correct",
        title: "Quick Capacity Check",
        instruction: "Circle the correct conversion.",
        questions: [
          { prompt: "1.8 L = ?", options: ["180 mL", "1,800 mL", "18,000 mL"] },
          { prompt: "450 mL = ?", options: ["0.045 L", "0.45 L", "4.5 L"] },
          { prompt: "0.75 L = ?", options: ["75 mL", "750 mL", "7,500 mL"] },
          { prompt: "6,000 mL = ?", options: ["0.6 L", "6 L", "60 L"] },
        ],
      },
      // ─── Hard: Mixed problems ───
      {
        type: "circle-correct",
        title: "Which Is More?",
        instruction: "Circle the larger measurement in each pair.",
        questions: [
          { prompt: "Which is more?", options: ["1.5 kg", "1,450 g"] },
          { prompt: "Which is more?", options: ["2.3 L", "2,350 mL"] },
          { prompt: "Which is more?", options: ["0.8 km", "850 m"] },
          { prompt: "Which is more?", options: ["450 cm", "4.6 m"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare More Measurements",
        instruction: "Circle the larger measurement in each pair.",
        questions: [
          { prompt: "Which is more?", options: ["3.25 kg", "3,200 g"] },
          { prompt: "Which is more?", options: ["0.9 L", "950 mL"] },
          { prompt: "Which is more?", options: ["1.45 m", "150 cm"] },
          { prompt: "Which is more?", options: ["2,750 m", "2.8 km"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Measurement Type",
        instruction: "Sort each unit into the correct category.",
        columns: ["Length", "Mass", "Capacity"],
        items: [
          { label: "kilometres" },
          { label: "grams" },
          { label: "millilitres" },
          { label: "centimetres" },
          { label: "kilograms" },
          { label: "litres" },
        ],
      },
      {
        type: "open-response",
        title: "Metric Word Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A water bottle holds 0.75 L. You drink 350 mL. How many millilitres are left?", type: "lines", lines: 2 },
          { text: "A bag of flour weighs 2.5 kg. You use 800 g. How many grams are left?", type: "lines", lines: 2 },
          { text: "You run 1.2 km in the morning and 850 m in the afternoon. How many metres did you run in total?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Mixed Conversion Challenge",
        instruction: "Convert each measurement to the unit shown.",
        prompts: [
          { text: "3 km 450 m = ___ m", type: "lines", lines: 1 },
          { text: "2 kg 350 g = ___ g", type: "lines", lines: 1 },
          { text: "5 L 750 mL = ___ mL", type: "lines", lines: 1 },
          { text: "4,250 g = ___ kg ___ g", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Explain the Connection",
        instruction: "Answer each question about the decimal-metric connection.",
        prompts: [
          { text: "Why does the metric system use decimals? Explain in your own words.", type: "lines", lines: 2 },
          { text: "Explain why 0.5 km, 500 m and 50,000 cm are all the same length.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Measure at Home",
        instruction: "Explore metric measurements around your home!",
        suggestions: [
          "Weigh 3 items in the kitchen. Write each mass in both grams and kilograms.",
          "Measure the length of your bedroom in metres. Convert it to centimetres.",
          "Check a drink bottle. How many millilitres does it hold? Convert to litres.",
          "Estimate the distance from your front door to the letterbox in metres, then convert to kilometres.",
          "Find five packaged foods and convert their masses between grams and kilograms.",
        ],
      },
    ],
  },

  // ── WS 6: Fraction, Decimal or Percentage of a Quantity ───
  {
    slug: "fraction-decimal-percentage-quantity",
    title: "Fraction, Decimal or Percentage of a Quantity",
    strand: "Number",
    description:
      "Find a fraction, decimal or percentage of a quantity",
    activities: [
      // ─── Easy: Fractions of a quantity ───
      {
        type: "open-response",
        title: "Find a Fraction of a Number",
        instruction: "Calculate each fraction of the given quantity.",
        prompts: [
          { text: "1/2 of 40 = ___", type: "lines", lines: 1 },
          { text: "1/4 of 60 = ___", type: "lines", lines: 1 },
          { text: "1/3 of 36 = ___", type: "lines", lines: 1 },
          { text: "3/4 of 80 = ___", type: "lines", lines: 1 },
          { text: "2/5 of 50 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Fractions of Quantities",
        instruction: "Calculate each fraction of the given quantity.",
        prompts: [
          { text: "1/5 of 45 = ___", type: "lines", lines: 1 },
          { text: "2/3 of 90 = ___", type: "lines", lines: 1 },
          { text: "3/8 of 64 = ___", type: "lines", lines: 1 },
          { text: "5/6 of 42 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Fraction Check",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "1/4 of 100 = ?", options: ["20", "25", "40"] },
          { prompt: "1/3 of 27 = ?", options: ["3", "9", "18"] },
          { prompt: "2/5 of 30 = ?", options: ["6", "10", "12"] },
          { prompt: "3/4 of 48 = ?", options: ["12", "24", "36"] },
        ],
      },
      {
        type: "matching",
        title: "Match Fractions, Decimals & Percentages",
        instruction: "Draw a line to match each fraction to its decimal and percentage.",
        left: ["1/2", "1/4", "3/4", "1/5"],
        right: ["0.25 = 25%", "0.5 = 50%", "0.2 = 20%", "0.75 = 75%"],
      },
      {
        type: "matching",
        title: "More FDP Matches",
        instruction: "Draw a line to match each fraction to its decimal and percentage.",
        left: ["1/10", "3/10", "1/3", "2/5"],
        right: ["0.4 = 40%", "0.1 = 10%", "0.333... ≈ 33.3%", "0.3 = 30%"],
      },
      {
        type: "sorting",
        title: "Sort: Fraction, Decimal or Percentage Form?",
        instruction: "Sort each representation into its correct form.",
        columns: ["Fraction", "Decimal", "Percentage"],
        items: [
          { label: "3/4" },
          { label: "0.6" },
          { label: "45%" },
          { label: "1/8" },
          { label: "0.25" },
          { label: "80%" },
        ],
      },
      {
        type: "open-response",
        title: "Convert Between Forms",
        instruction: "Write each value in all three forms: fraction, decimal and percentage.",
        prompts: [
          { text: "1/2 = ___ (decimal) = ___% ", type: "lines", lines: 1 },
          { text: "0.75 = ___ (fraction) = ___%", type: "lines", lines: 1 },
          { text: "20% = ___ (fraction) = ___ (decimal)", type: "lines", lines: 1 },
          { text: "3/5 = ___ (decimal) = ___%", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Percentages of quantities ───
      {
        type: "open-response",
        title: "Find the Percentage",
        instruction: "Calculate each percentage of the given quantity.",
        prompts: [
          { text: "10% of 80 = ___", type: "lines", lines: 1 },
          { text: "25% of 120 = ___", type: "lines", lines: 1 },
          { text: "50% of 90 = ___", type: "lines", lines: 1 },
          { text: "20% of 150 = ___", type: "lines", lines: 1 },
          { text: "75% of 200 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Percentage Calculations",
        instruction: "Calculate each percentage.",
        prompts: [
          { text: "30% of 60 = ___", type: "lines", lines: 1 },
          { text: "15% of 80 = ___", type: "lines", lines: 1 },
          { text: "5% of 200 = ___", type: "lines", lines: 1 },
          { text: "40% of 250 = ___", type: "lines", lines: 1 },
          { text: "60% of 45 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Percentage Check",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "30% of $60 = ?", options: ["$15", "$18", "$20"] },
          { prompt: "15% of $80 = ?", options: ["$10", "$12", "$15"] },
          { prompt: "40% of $50 = ?", options: ["$15", "$20", "$25"] },
          { prompt: "5% of $200 = ?", options: ["$5", "$10", "$15"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Percentage Questions",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "90% of 50 = ?", options: ["40", "45", "50"] },
          { prompt: "35% of 200 = ?", options: ["60", "70", "80"] },
          { prompt: "12% of 300 = ?", options: ["24", "36", "48"] },
          { prompt: "80% of 125 = ?", options: ["100", "110", "120"] },
        ],
      },
      {
        type: "open-response",
        title: "Percentage Strategies",
        instruction: "Use the 10% strategy: find 10% first, then use it to find other percentages.",
        prompts: [
          { text: "10% of 70 = ___. So 20% of 70 = ___. So 5% of 70 = ___.", type: "lines", lines: 1 },
          { text: "10% of 120 = ___. So 30% of 120 = ___. So 15% of 120 = ___.", type: "lines", lines: 1 },
          { text: "10% of 250 = ___. So 40% of 250 = ___. So 45% of 250 = ___.", type: "lines", lines: 1 },
        ],
      },
      // ─── Hard: Decimal of a quantity ───
      {
        type: "open-response",
        title: "Decimals of a Quantity",
        instruction: "Calculate each decimal of the given quantity.",
        prompts: [
          { text: "0.5 of 120 = ___", type: "lines", lines: 1 },
          { text: "0.25 of 80 = ___", type: "lines", lines: 1 },
          { text: "0.1 of 350 = ___", type: "lines", lines: 1 },
          { text: "0.75 of 60 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Decimal Quantities",
        instruction: "Calculate each decimal of the given quantity.",
        prompts: [
          { text: "0.4 of 200 = ___", type: "lines", lines: 1 },
          { text: "0.15 of 60 = ___", type: "lines", lines: 1 },
          { text: "0.3 of 150 = ___", type: "lines", lines: 1 },
          { text: "0.8 of 45 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Equivalent Calculations",
        instruction: "Draw a line to match each calculation to an equivalent one.",
        left: ["50% of 80", "1/4 of 120", "0.1 of 300", "3/5 of 50"],
        right: ["30", "0.5 × 80", "30", "0.25 × 120"],
      },
      {
        type: "open-response",
        title: "FDP Word Problems",
        instruction: "Solve each word problem.",
        prompts: [
          { text: "There are 30 students in a class. 40% are boys. How many boys are there?", type: "lines", lines: 1 },
          { text: "A shirt costs $45. It is 20% off. What is the discount? What is the sale price?", type: "lines", lines: 2 },
          { text: "You scored 3/4 on a test out of 80 marks. How many marks did you score?", type: "lines", lines: 1 },
          { text: "A farmer has 120 sheep. 0.25 of them are lambs. How many lambs are there?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Mixed FDP Problems",
        instruction: "Solve each problem using fractions, decimals or percentages.",
        prompts: [
          { text: "Which is more: 30% of 80 or 1/4 of 100? Show your working.", type: "lines", lines: 2 },
          { text: "A class has 25 students. 3/5 walk to school and 20% ride bikes. How many use other transport?", type: "lines", lines: 2 },
          { text: "A 600 mL bottle is 75% full. How many millilitres are in it?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Percentage Spotter",
        instruction: "Find percentages in real life!",
        suggestions: [
          "Find a sale sign at a shop or online. Calculate how much you would save on a $50 item.",
          "Work out 10% of your pocket money. Now work out 25% and 50%.",
          "If you ate 3/4 of a pizza with 8 slices, what percentage did you eat?",
          "Look at a nutrition label. What fraction of your daily calcium does a glass of milk provide?",
          "Find 3 different discount signs and calculate the actual saving on a $100 item.",
        ],
      },
    ],
  },

  // ── WS 7: Financial Problems & Percentages ────────────────
  {
    slug: "financial-problems-percentages",
    title: "Financial Problems & Percentages",
    strand: "Number",
    description:
      "Solve financial and practical problems involving percentages and rational numbers",
    activities: [
      // ─── Easy: Simple discounts ───
      {
        type: "open-response",
        title: "Calculate the Discount",
        instruction: "Find how much you save and the sale price.",
        prompts: [
          { text: "A $40 shirt is 25% off. Discount = $___ . Sale price = $___ .", type: "lines", lines: 1 },
          { text: "A $60 game is 10% off. Discount = $___ . Sale price = $___ .", type: "lines", lines: 1 },
          { text: "A $80 pair of shoes is 50% off. Discount = $___ . Sale price = $___ .", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Discount Calculations",
        instruction: "Find the discount and sale price for each item.",
        prompts: [
          { text: "A $120 jacket is 30% off. Discount = $___ . Sale price = $___ .", type: "lines", lines: 1 },
          { text: "A $25 book is 20% off. Discount = $___ . Sale price = $___ .", type: "lines", lines: 1 },
          { text: "A $90 backpack is 15% off. Discount = $___ . Sale price = $___ .", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Best Buy",
        instruction: "Circle the better deal.",
        questions: [
          { prompt: "Which saves more on a $100 item?", options: ["20% off", "Save $15"] },
          { prompt: "Which saves more on a $50 item?", options: ["10% off", "Save $6"] },
          { prompt: "Which saves more on a $80 item?", options: ["25% off", "Save $18"] },
          { prompt: "Which saves more on a $200 item?", options: ["15% off", "Save $25"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Best Buys",
        instruction: "Circle the better deal.",
        questions: [
          { prompt: "Which is cheaper for a $60 item?", options: ["30% off", "Save $20"] },
          { prompt: "Which saves more on $150?", options: ["10% off", "Save $12"] },
          { prompt: "Which is cheaper for $40?", options: ["50% off", "Save $18"] },
          { prompt: "Which is cheaper for $250?", options: ["20% off", "Save $45"] },
        ],
      },
      {
        type: "matching",
        title: "Match Discount to Saving",
        instruction: "Draw a line to match each discount to the amount saved.",
        left: ["10% off $50", "25% off $80", "50% off $30", "20% off $45"],
        right: ["$9", "$5", "$15", "$20"],
      },
      {
        type: "open-response",
        title: "Calculate Change",
        instruction: "Work out the change from each purchase.",
        prompts: [
          { text: "You buy items totalling $23.50 and pay with $30. Change = $___", type: "lines", lines: 1 },
          { text: "You buy items totalling $47.85 and pay with $50. Change = $___", type: "lines", lines: 1 },
          { text: "You buy items totalling $8.75 and pay with $20. Change = $___", type: "lines", lines: 1 },
          { text: "You buy items totalling $156.30 and pay with $200. Change = $___", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Profit and GST ───
      {
        type: "open-response",
        title: "GST Calculations (10%)",
        instruction: "In Australia, GST is 10%. Find the GST and total price.",
        prompts: [
          { text: "Item costs $45. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
          { text: "Item costs $120. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
          { text: "Item costs $85. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
          { text: "Item costs $250. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More GST Problems",
        instruction: "Calculate the GST (10%) and total for each item.",
        prompts: [
          { text: "Item costs $32. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
          { text: "Item costs $175. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
          { text: "Item costs $68.50. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
          { text: "Item costs $499. GST = $___ . Total = $___ .", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "GST Quick Check",
        instruction: "Circle the correct total price including 10% GST.",
        questions: [
          { prompt: "Item: $50 + GST = ?", options: ["$55", "$60", "$65"] },
          { prompt: "Item: $200 + GST = ?", options: ["$210", "$220", "$240"] },
          { prompt: "Item: $35 + GST = ?", options: ["$38", "$38.50", "$45"] },
          { prompt: "Item: $99 + GST = ?", options: ["$108.90", "$109", "$109.90"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Problem to the Answer",
        instruction: "Draw a line to match each problem to its answer.",
        left: ["20% of $150", "15% of $80", "10% of $90", "25% of $200"],
        right: ["$9", "$50", "$30", "$12"],
      },
      {
        type: "open-response",
        title: "Profit and Loss",
        instruction: "Calculate the profit or loss for each situation.",
        prompts: [
          { text: "Bought for $15, sold for $22. Profit = $___", type: "lines", lines: 1 },
          { text: "Bought for $50, sold for $35. Loss = $___", type: "lines", lines: 1 },
          { text: "Bought for $8, sold for $12. Profit as a percentage of cost = ___%", type: "lines", lines: 2 },
          { text: "Bought for $100, sold at 30% profit. Selling price = $___", type: "lines", lines: 1 },
        ],
      },
      // ─── Hard: Multi-step problems ───
      {
        type: "open-response",
        title: "Real-World Money Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "You save 20% of your $35 pocket money each week. How much do you save in 4 weeks?", type: "lines", lines: 2 },
          { text: "A bike costs $250. It is on sale for 30% off. How much do you pay?", type: "lines", lines: 2 },
          { text: "You earn $12.50 per hour. You work for 6 hours. How much do you earn before and after 10% tax?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "More Money Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A family's electricity bill is $180. They reduce usage by 15%. What is the new bill?", type: "lines", lines: 2 },
          { text: "You buy a $24 item with 10% GST added, then get a 25% discount on the total. What do you pay?", type: "lines", lines: 2 },
          { text: "You have $50 to spend. You buy 3 items at $12.50 each. How much is left?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Budget Challenge",
        instruction: "Plan a budget for the scenario described.",
        prompts: [
          { text: "You have $200 for a party. Allocate: Food 40%, Decorations 25%, Activities 35%. How much for each?", type: "lines", lines: 2 },
          { text: "If food ends up costing 10% more than budgeted, how much extra do you need?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Financial Reasoning",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "A $100 item goes up 10%, then the new price drops 10%. Final price?", options: ["$99", "$100", "$101"] },
          { prompt: "Which is more: 20% of $60 or 15% of $80?", options: ["20% of $60", "15% of $80", "They are equal"] },
          { prompt: "You save $15 on a $75 item. What percentage discount is that?", options: ["15%", "20%", "25%"] },
          { prompt: "An item costs $44 including 10% GST. What was the price before GST?", options: ["$39.60", "$40", "$43"] },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Budget Planner",
        instruction: "Practise money skills at home!",
        suggestions: [
          "Look at a shop catalogue. Pick 3 items and calculate a 20% discount on each.",
          "Plan a pretend birthday party with a $100 budget. How would you split the money between food (40%), decorations (25%) and activities (35%)?",
          "Check a restaurant menu. If you add a 10% tip, what would a meal cost?",
          "Compare two shops selling the same item at different discounts. Which is cheaper?",
          "Calculate GST on 5 items from a catalogue and find the total cost including GST.",
        ],
      },
    ],
  },

  // ── WS 8: Unknown Values & Combined Operations ───────────
  {
    slug: "unknown-values-combined-operations",
    title: "Unknown Values & Combined Operations",
    strand: "Algebra",
    description:
      "Find unknown values in equations involving combinations of arithmetic operations",
    activities: [
      // ─── Easy: One-step unknowns ───
      {
        type: "open-response",
        title: "Find the Missing Number (Addition)",
        instruction: "Write the number that makes each equation true.",
        prompts: [
          { text: "___ + 15 = 27", type: "lines", lines: 1 },
          { text: "___ + 34 = 50", type: "lines", lines: 1 },
          { text: "23 + ___ = 41", type: "lines", lines: 1 },
          { text: "___ + 48 = 75", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Missing Number (Subtraction)",
        instruction: "Write the number that makes each equation true.",
        prompts: [
          { text: "36 − ___ = 19", type: "lines", lines: 1 },
          { text: "50 − ___ = 28", type: "lines", lines: 1 },
          { text: "___ − 14 = 33", type: "lines", lines: 1 },
          { text: "72 − ___ = 45", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Missing Number (Multiplication)",
        instruction: "Write the number that makes each equation true.",
        prompts: [
          { text: "___ × 6 = 42", type: "lines", lines: 1 },
          { text: "___ × 8 = 56", type: "lines", lines: 1 },
          { text: "9 × ___ = 63", type: "lines", lines: 1 },
          { text: "___ × 12 = 84", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Missing Number (Division)",
        instruction: "Write the number that makes each equation true.",
        prompts: [
          { text: "56 ÷ ___ = 8", type: "lines", lines: 1 },
          { text: "___ ÷ 5 = 9", type: "lines", lines: 1 },
          { text: "72 ÷ ___ = 6", type: "lines", lines: 1 },
          { text: "___ ÷ 7 = 11", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Pick the Missing Number",
        instruction: "Circle the value that makes each equation true.",
        questions: [
          { prompt: "___ + 18 = 35", options: ["13", "17", "23"] },
          { prompt: "42 − ___ = 15", options: ["27", "33", "57"] },
          { prompt: "___ × 7 = 49", options: ["6", "7", "8"] },
          { prompt: "60 ÷ ___ = 12", options: ["4", "5", "6"] },
        ],
      },
      {
        type: "matching",
        title: "Match Equations to Unknowns",
        instruction: "Draw a line to match each equation to the value of the unknown.",
        left: ["___ + 8 = 23", "45 − ___ = 28", "___ × 9 = 72", "63 ÷ ___ = 7"],
        right: ["9", "15", "8", "17"],
      },
      {
        type: "matching",
        title: "More Equation Matching",
        instruction: "Draw a line to match each equation to its answer.",
        left: ["___ + 25 = 40", "80 − ___ = 55", "___ × 4 = 52", "96 ÷ ___ = 8"],
        right: ["12", "15", "25", "13"],
      },
      {
        type: "open-response",
        title: "Write the Equation",
        instruction: "Write an equation for each word problem, using ___ for the unknown. Then solve it.",
        prompts: [
          { text: "I think of a number and add 12. The answer is 31. Equation: ___. The number is ___.", type: "lines", lines: 1 },
          { text: "I think of a number and multiply by 5. The answer is 45. Equation: ___. The number is ___.", type: "lines", lines: 1 },
          { text: "I think of a number and subtract 18. The answer is 24. Equation: ___. The number is ___.", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Two-step equations ───
      {
        type: "open-response",
        title: "Two-Step Equations",
        instruction: "Find the unknown value. Work backwards! Example: 3 × ___ + 5 = 20 → 3 × ___ = 15 → ___ = 5.",
        prompts: [
          { text: "4 × ___ + 3 = 19. The unknown is ___.", type: "lines", lines: 1 },
          { text: "5 × ___ − 7 = 18. The unknown is ___.", type: "lines", lines: 1 },
          { text: "2 × ___ + 10 = 24. The unknown is ___.", type: "lines", lines: 1 },
          { text: "6 × ___ − 4 = 32. The unknown is ___.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Two-Step Equations",
        instruction: "Find the unknown value. Show your working.",
        prompts: [
          { text: "3 × ___ + 8 = 29. The unknown is ___.", type: "lines", lines: 1 },
          { text: "___ × 7 − 10 = 25. The unknown is ___.", type: "lines", lines: 1 },
          { text: "8 × ___ + 6 = 46. The unknown is ___.", type: "lines", lines: 1 },
          { text: "___ ÷ 4 + 3 = 8. The unknown is ___.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Value Makes It True?",
        instruction: "Circle the value that makes the equation true.",
        questions: [
          { prompt: "3 × ___ + 2 = 14", options: ["3", "4", "5"] },
          { prompt: "24 ÷ ___ − 1 = 5", options: ["3", "4", "6"] },
          { prompt: "___ × 7 − 3 = 25", options: ["3", "4", "5"] },
          { prompt: "5 × ___ + 8 = 33", options: ["4", "5", "6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Two-Step Choices",
        instruction: "Circle the value that makes the equation true.",
        questions: [
          { prompt: "2 × ___ + 9 = 21", options: ["5", "6", "7"] },
          { prompt: "___ × 8 − 12 = 20", options: ["3", "4", "5"] },
          { prompt: "10 × ___ + 5 = 75", options: ["6", "7", "8"] },
          { prompt: "36 ÷ ___ + 2 = 8", options: ["4", "6", "9"] },
        ],
      },
      {
        type: "open-response",
        title: "Two-Step Word Problems",
        instruction: "Write an equation and solve each problem.",
        prompts: [
          { text: "I think of a number, double it and add 7. The answer is 23. What is the number?", type: "lines", lines: 2 },
          { text: "I think of a number, multiply by 5 and subtract 3. The answer is 32. What is the number?", type: "lines", lines: 2 },
          { text: "I think of a number, divide by 3 and add 4. The answer is 9. What is the number?", type: "lines", lines: 2 },
        ],
      },
      // ─── Hard: Order of operations ───
      {
        type: "open-response",
        title: "Order of Operations",
        instruction: "Calculate each expression using the correct order of operations (multiplication/division before addition/subtraction).",
        prompts: [
          { text: "3 + 4 × 5 = ___", type: "lines", lines: 1 },
          { text: "20 − 3 × 4 = ___", type: "lines", lines: 1 },
          { text: "6 × 3 + 8 ÷ 2 = ___", type: "lines", lines: 1 },
          { text: "15 − 2 × 3 + 4 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Order of Operations",
        instruction: "Calculate each expression. Remember: brackets first, then × and ÷, then + and −.",
        prompts: [
          { text: "(3 + 4) × 5 = ___", type: "lines", lines: 1 },
          { text: "24 ÷ (8 − 2) = ___", type: "lines", lines: 1 },
          { text: "2 × (10 + 5) − 6 = ___", type: "lines", lines: 1 },
          { text: "(18 − 6) ÷ 3 + 7 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Order of Operations Check",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "8 + 2 × 3 = ?", options: ["14", "30", "24"] },
          { prompt: "(8 + 2) × 3 = ?", options: ["14", "30", "24"] },
          { prompt: "12 ÷ 4 + 2 = ?", options: ["2", "5", "6"] },
          { prompt: "12 ÷ (4 + 2) = ?", options: ["2", "5", "6"] },
        ],
      },
      {
        type: "open-response",
        title: "Add Brackets to Make It True",
        instruction: "Insert brackets to make each equation true.",
        prompts: [
          { text: "2 + 3 × 4 = 20   (add brackets): ___", type: "lines", lines: 1 },
          { text: "10 − 2 × 3 = 24   (add brackets): ___", type: "lines", lines: 1 },
          { text: "6 + 8 ÷ 2 = 7   (add brackets): ___", type: "lines", lines: 1 },
          { text: "5 × 3 + 7 = 50   (add brackets): ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge Equations",
        instruction: "Find the unknown and explain your reasoning.",
        prompts: [
          { text: "(2 × ___) + (3 × ___) = 25, where both blanks are the same number. The number is ___.", type: "lines", lines: 2 },
          { text: "(___ + 3) × 4 = 28. The unknown is ___.", type: "lines", lines: 1 },
          { text: "100 − (___ × ___) = 51, where both blanks are the same number. The number is ___.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Equation Detective",
        instruction: "Create and solve equations at home!",
        suggestions: [
          "Think of a number, double it, add 6. The answer is 22. What was the number? Write the equation.",
          "Make up 3 two-step equations for a family member to solve.",
          "Use playing cards: flip 3 cards and try to make an equation using +, −, × or ÷.",
          "Write a word problem that involves finding an unknown value.",
          "Create a 'guess my rule' game with a family member using input-output tables.",
        ],
      },
    ],
  },

  // ── WS 9: Rules for Growing Patterns ──────────────────────
  {
    slug: "rules-growing-patterns",
    title: "Rules for Growing Patterns",
    strand: "Algebra",
    description:
      "Identify and explain rules used to create growing patterns",
    activities: [
      // ─── Easy: Number patterns ───
      {
        type: "sequence",
        title: "Continue the Addition Pattern",
        instruction: "Find the rule and fill in the missing numbers.",
        sequences: [
          { items: [3, 6, 9, 0, 15], answer: [12] },
          { items: [5, 10, 0, 20, 25], answer: [15] },
          { items: [4, 8, 12, 0, 20], answer: [16] },
        ],
      },
      {
        type: "sequence",
        title: "Continue the Multiplication Pattern",
        instruction: "Find the rule and fill in the missing numbers.",
        sequences: [
          { items: [2, 6, 0, 54, 162], answer: [18] },
          { items: [1, 3, 9, 0, 81], answer: [27] },
          { items: [2, 4, 8, 0, 32], answer: [16] },
        ],
      },
      {
        type: "sequence",
        title: "Subtraction Patterns",
        instruction: "Fill in the missing numbers in each decreasing pattern.",
        sequences: [
          { items: [100, 90, 80, 0, 60], answer: [70] },
          { items: [50, 45, 0, 35, 30], answer: [40] },
          { items: [200, 175, 150, 0, 100], answer: [125] },
        ],
      },
      {
        type: "matching",
        title: "Match the Pattern to the Rule",
        instruction: "Draw a line to match each pattern to its rule.",
        left: ["2, 4, 8, 16, ...", "1, 4, 7, 10, ...", "5, 10, 15, 20, ...", "3, 9, 27, 81, ..."],
        right: ["Multiply by 3", "Add 5", "Multiply by 2", "Add 3"],
      },
      {
        type: "matching",
        title: "Match More Patterns to Rules",
        instruction: "Draw a line to match each pattern to its rule.",
        left: ["100, 90, 80, 70, ...", "1, 2, 4, 8, ...", "7, 14, 21, 28, ...", "1000, 500, 250, 125, ..."],
        right: ["Divide by 2", "Add 7", "Subtract 10", "Double"],
      },
      {
        type: "circle-correct",
        title: "What Is the Rule?",
        instruction: "Circle the rule for each pattern.",
        questions: [
          { prompt: "4, 7, 10, 13, 16, ...", options: ["Add 2", "Add 3", "Add 4"] },
          { prompt: "2, 6, 18, 54, ...", options: ["Add 4", "Multiply by 2", "Multiply by 3"] },
          { prompt: "80, 70, 60, 50, ...", options: ["Subtract 5", "Subtract 10", "Divide by 2"] },
          { prompt: "1, 4, 16, 64, ...", options: ["Multiply by 4", "Add 3", "Multiply by 2"] },
        ],
      },
      {
        type: "open-response",
        title: "Write the Next Three Numbers",
        instruction: "Identify the rule and write the next 3 numbers in each pattern.",
        prompts: [
          { text: "6, 11, 16, 21, ___, ___, ___. Rule: ___", type: "lines", lines: 1 },
          { text: "3, 6, 12, 24, ___, ___, ___. Rule: ___", type: "lines", lines: 1 },
          { text: "500, 450, 400, 350, ___, ___, ___. Rule: ___", type: "lines", lines: 1 },
          { text: "1, 5, 25, 125, ___, ___, ___. Rule: ___", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Finding rules ───
      {
        type: "open-response",
        title: "Describe the Rule",
        instruction: "Look at each pattern. Write the rule and find the next two numbers.",
        prompts: [
          { text: "4, 8, 12, 16, 20, ___, ___\nRule: ___", type: "lines", lines: 2 },
          { text: "1, 3, 9, 27, 81, ___, ___\nRule: ___", type: "lines", lines: 2 },
          { text: "100, 90, 80, 70, 60, ___, ___\nRule: ___", type: "lines", lines: 2 },
          { text: "2, 5, 8, 11, 14, ___, ___\nRule: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Describe More Rules",
        instruction: "Write the rule and find the next two numbers.",
        prompts: [
          { text: "7, 14, 28, 56, ___, ___\nRule: ___", type: "lines", lines: 2 },
          { text: "1000, 800, 600, 400, ___, ___\nRule: ___", type: "lines", lines: 2 },
          { text: "3, 5, 9, 15, 23, ___, ___\nRule: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next?",
        instruction: "Circle the next number in each pattern.",
        questions: [
          { prompt: "1, 2, 4, 8, 16, ?", options: ["20", "24", "32"] },
          { prompt: "50, 45, 40, 35, ?", options: ["25", "30", "20"] },
          { prompt: "3, 6, 12, 24, ?", options: ["36", "48", "30"] },
          { prompt: "7, 11, 15, 19, ?", options: ["22", "23", "25"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Next Numbers",
        instruction: "Circle the next number in each pattern.",
        questions: [
          { prompt: "5, 8, 11, 14, ?", options: ["16", "17", "18"] },
          { prompt: "2, 10, 50, 250, ?", options: ["500", "1000", "1250"] },
          { prompt: "1000, 900, 800, 700, ?", options: ["500", "600", "650"] },
          { prompt: "1, 4, 9, 16, ?", options: ["20", "24", "25"] },
        ],
      },
      {
        type: "open-response",
        title: "Input-Output Tables",
        instruction: "Complete each input-output table and write the rule.",
        prompts: [
          { text: "Input: 1→4, 2→7, 3→10, 4→?, 5→?\nRule: ___", type: "lines", lines: 2 },
          { text: "Input: 1→3, 2→6, 3→12, 4→?, 5→?\nRule: ___", type: "lines", lines: 2 },
          { text: "Input: 2→5, 4→9, 6→13, 8→?, 10→?\nRule: ___", type: "lines", lines: 2 },
        ],
      },
      // ─── Hard: Visual growing patterns ───
      {
        type: "open-response",
        title: "Growing Shape Patterns",
        instruction: "A pattern grows like this: Step 1 = 1 square, Step 2 = 3 squares, Step 3 = 5 squares. Answer the questions.",
        prompts: [
          { text: "How many squares at Step 4? ___", type: "lines", lines: 1 },
          { text: "How many squares at Step 5? ___", type: "lines", lines: 1 },
          { text: "What is the rule? ___", type: "lines", lines: 1 },
          { text: "How many squares at Step 10? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Another Growing Pattern",
        instruction: "A pattern grows: Step 1 = 4 dots, Step 2 = 7 dots, Step 3 = 10 dots.",
        prompts: [
          { text: "How many dots at Step 4? ___", type: "lines", lines: 1 },
          { text: "How many dots at Step 6? ___", type: "lines", lines: 1 },
          { text: "Write a rule to find the number of dots for any step: ___", type: "lines", lines: 1 },
          { text: "How many dots at Step 20? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Growing Pattern",
        instruction: "Design your own growing pattern.",
        prompts: [
          { text: "My rule: ___\nStep 1: ___ Step 2: ___ Step 3: ___ Step 4: ___ Step 5: ___", type: "lines", lines: 2 },
          { text: "How many at Step 10? ___\nHow did you work it out? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Two-Step Rule Patterns",
        instruction: "Some patterns use a two-step rule (e.g. multiply by 2 then add 1).",
        prompts: [
          { text: "Pattern: 1, 3, 7, 15, 31, ___. Rule: ___", type: "lines", lines: 2 },
          { text: "Pattern: 2, 5, 11, 23, 47, ___. Rule: ___", type: "lines", lines: 2 },
          { text: "Pattern: 0, 1, 4, 13, 40, ___. Rule: ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Pattern Creator",
        instruction: "Create your own growing patterns!",
        suggestions: [
          "Use blocks or counters to build a growing pattern. Draw each step.",
          "Make a pattern that starts at 2 and doubles each time. How big does it get after 8 steps?",
          "Create a decreasing pattern that starts at 1,000 and subtracts 75 each time.",
          "Find a growing pattern in nature (e.g. petals on flowers, spirals in shells).",
          "Challenge a family member with a pattern and see if they can find the rule.",
        ],
      },
    ],
  },

  // ── WS 10: Algorithms to Generate Sets ────────────────────
  {
    slug: "algorithms-generate-sets",
    title: "Algorithms to Generate Sets",
    strand: "Algebra",
    description:
      "Create and use algorithms to generate sets of numbers using a rule",
    activities: [
      // ─── Easy: Follow the algorithm ───
      {
        type: "open-response",
        title: "Follow the Algorithm",
        instruction: "Follow each algorithm to generate the first 5 numbers.",
        prompts: [
          { text: "Start at 3, add 4 each time: 3, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Start at 100, subtract 7 each time: 100, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Start at 2, multiply by 2 each time: 2, ___, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Algorithms to Follow",
        instruction: "Follow each algorithm to generate the first 5 numbers.",
        prompts: [
          { text: "Start at 1, add 6 each time: 1, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Start at 500, subtract 50 each time: 500, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Start at 1, multiply by 3 each time: 1, ___, ___, ___, ___", type: "lines", lines: 1 },
          { text: "Start at 1000, divide by 2 each time: 1000, ___, ___, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sequence",
        title: "Complete the Algorithm Output",
        instruction: "Fill in the missing numbers generated by the algorithm.",
        sequences: [
          { items: [5, 10, 15, 0, 25], answer: [20] },
          { items: [1, 3, 0, 15, 31], answer: [7] },
          { items: [64, 32, 0, 8, 4], answer: [16] },
        ],
      },
      {
        type: "sequence",
        title: "More Algorithm Outputs",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [7, 14, 21, 0, 35], answer: [28] },
          { items: [2, 6, 18, 0, 162], answer: [54] },
          { items: [1000, 0, 100, 10, 1], answer: [0] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Algorithm?",
        instruction: "Circle the algorithm that generates each set.",
        questions: [
          { prompt: "{5, 10, 15, 20, 25}", options: ["Start at 5, add 5", "Start at 5, multiply by 2", "Start at 5, add 10"] },
          { prompt: "{2, 4, 8, 16, 32}", options: ["Start at 2, add 2", "Start at 2, multiply by 2", "Start at 2, multiply by 4"] },
          { prompt: "{100, 80, 60, 40, 20}", options: ["Subtract 10", "Subtract 20", "Divide by 2"] },
        ],
      },
      {
        type: "matching",
        title: "Match Algorithm to First 4 Numbers",
        instruction: "Draw a line to match each algorithm to its output.",
        left: ["Start at 4, add 3", "Start at 1, double", "Start at 50, subtract 8", "Start at 3, multiply by 3"],
        right: ["3, 9, 27, 81", "4, 7, 10, 13", "50, 42, 34, 26", "1, 2, 4, 8"],
      },
      // ─── Medium: Identify the algorithm ───
      {
        type: "matching",
        title: "Match the Set to the Algorithm",
        instruction: "Draw a line to match each set of numbers to the algorithm that generated it.",
        left: ["{4, 8, 12, 16, 20}", "{1, 3, 7, 15, 31}", "{1000, 100, 10, 1}", "{2, 5, 11, 23, 47}"],
        right: ["Double and add 1", "Start at 4, add 4", "Divide by 10", "Double and add 1"],
      },
      {
        type: "open-response",
        title: "Write the Algorithm",
        instruction: "Look at each set of numbers and write the algorithm (rule) used to generate them.",
        prompts: [
          { text: "Set: {6, 12, 18, 24, 30}\nAlgorithm: ___", type: "lines", lines: 1 },
          { text: "Set: {1, 4, 13, 40, 121}\nAlgorithm: ___", type: "lines", lines: 1 },
          { text: "Set: {500, 450, 400, 350, 300}\nAlgorithm: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write More Algorithms",
        instruction: "Identify the algorithm for each set.",
        prompts: [
          { text: "Set: {3, 7, 15, 31, 63}\nAlgorithm: ___", type: "lines", lines: 1 },
          { text: "Set: {10, 25, 55, 115, 235}\nAlgorithm: ___", type: "lines", lines: 1 },
          { text: "Set: {256, 128, 64, 32, 16}\nAlgorithm: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Two-Step Algorithm Check",
        instruction: "Circle the correct next number for each two-step algorithm.",
        questions: [
          { prompt: "Double then add 1: 1, 3, 7, 15, ?", options: ["30", "31", "32"] },
          { prompt: "Triple then subtract 1: 1, 2, 5, 14, ?", options: ["39", "41", "43"] },
          { prompt: "Add 3 then multiply by 2: 1, 8, 22, ?", options: ["44", "50", "68"] },
        ],
      },
      {
        type: "open-response",
        title: "Flowchart Algorithm",
        instruction: "Follow this flowchart algorithm: Start → Input a number → Multiply by 2 → Add 3 → Output. Complete the table.",
        prompts: [
          { text: "Input 1 → Output ___", type: "lines", lines: 1 },
          { text: "Input 4 → Output ___", type: "lines", lines: 1 },
          { text: "Input 7 → Output ___", type: "lines", lines: 1 },
          { text: "Input 10 → Output ___", type: "lines", lines: 1 },
          { text: "Output is 25 → Input was ___", type: "lines", lines: 1 },
        ],
      },
      // ─── Hard: Create your own ───
      {
        type: "open-response",
        title: "Create Your Own Algorithm",
        instruction: "Design your own algorithm and generate the first 6 numbers.",
        prompts: [
          { text: "Algorithm: Start at ___, then ___ each time.\nNumbers: ___, ___, ___, ___, ___, ___", type: "lines", lines: 2 },
          { text: "Algorithm: Start at ___, then ___ each time.\nNumbers: ___, ___, ___, ___, ___, ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Create a Two-Step Algorithm",
        instruction: "Design a two-step algorithm and generate the first 5 numbers.",
        prompts: [
          { text: "Algorithm: Start at ___, then ___ and then ___ each time.\nNumbers: ___, ___, ___, ___, ___", type: "lines", lines: 2 },
          { text: "Give this algorithm to a partner. Can they find your rule?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Algorithm Comparison",
        instruction: "Compare two algorithms and answer the questions.",
        prompts: [
          { text: "Algorithm A: Start at 1, add 5. Algorithm B: Start at 2, add 3.\nWhich algorithm reaches 20 first? Show the first 8 numbers of each.", type: "lines", lines: 3 },
          { text: "Will Algorithm A and Algorithm B ever produce the same number? If so, when?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Algorithm Challenge",
        instruction: "Create algorithms at home!",
        suggestions: [
          "Write an algorithm that generates your times tables (e.g. start at 0, add 7 each time for the 7s).",
          "Create a 'doubling' algorithm starting from 1. How quickly does it get past 1,000?",
          "Give a family member a set of numbers and challenge them to find the algorithm.",
          "Write an algorithm that uses two operations (e.g. multiply by 2 then subtract 1).",
          "Use a spreadsheet to test your algorithms and generate 20 numbers instantly.",
        ],
      },
    ],
  },

  // ── WS 11: Interpret and Use Timetables ───────────────────
  {
    slug: "timetables-interpret",
    title: "Interpret and Use Timetables",
    strand: "Measurement",
    description:
      "Interpret and use timetables",
    activities: [
      // ─── Easy: Reading a timetable ───
      {
        type: "open-response",
        title: "Read the Bus Timetable",
        instruction: "Use this bus timetable to answer the questions.\nStop A: 8:00, 8:30, 9:00, 9:30\nStop B: 8:12, 8:42, 9:12, 9:42\nStop C: 8:25, 8:55, 9:25, 9:55\nStop D: 8:40, 9:10, 9:40, 10:10",
        prompts: [
          { text: "How long does it take to get from Stop A to Stop D? ___", type: "lines", lines: 1 },
          { text: "If you arrive at Stop B at 8:45, when is the next bus? ___", type: "lines", lines: 1 },
          { text: "How often do buses leave Stop A? ___", type: "lines", lines: 1 },
          { text: "How long does it take from Stop B to Stop C? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Bus Timetable Questions",
        instruction: "Use the bus timetable above to answer these questions.",
        questions: [
          { prompt: "The 9:00 bus from Stop A arrives at Stop D at?", options: ["9:30", "9:40", "9:50"] },
          { prompt: "How many buses go from A to D before 10:00?", options: ["3", "4", "5"] },
          { prompt: "The journey from A to C takes?", options: ["20 min", "25 min", "30 min"] },
        ],
      },
      {
        type: "open-response",
        title: "Read the Train Timetable",
        instruction: "Use this train timetable to answer the questions.\nCentral: 7:15, 7:45, 8:15, 8:45\nTown Hall: 7:22, 7:52, 8:22, 8:52\nMuseum: 7:30, 8:00, 8:30, 9:00\nCircular Quay: 7:35, 8:05, 8:35, 9:05",
        prompts: [
          { text: "How long does the train take from Central to Circular Quay? ___", type: "lines", lines: 1 },
          { text: "You need to be at Museum by 8:15. Which train should you catch from Central? ___", type: "lines", lines: 1 },
          { text: "How long between each train? ___", type: "lines", lines: 1 },
          { text: "If you miss the 7:45 from Central, when is the next train? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Train Timetable Questions",
        instruction: "Use the train timetable to answer.",
        questions: [
          { prompt: "The 8:15 train from Central reaches Town Hall at?", options: ["8:20", "8:22", "8:25"] },
          { prompt: "Journey from Town Hall to Circular Quay takes?", options: ["10 min", "13 min", "15 min"] },
          { prompt: "How many trains leave Central between 7:00 and 9:00?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "matching",
        title: "Match Journey to Duration",
        instruction: "Draw a line to match each journey to its duration.",
        left: ["Central to Town Hall", "Central to Museum", "Town Hall to Museum", "Central to Circular Quay"],
        right: ["20 min", "7 min", "15 min", "8 min"],
      },
      {
        type: "open-response",
        title: "Calculate Elapsed Time",
        instruction: "Calculate the time between each pair of events.",
        prompts: [
          { text: "From 8:15 to 9:40 = ___ hours ___ minutes", type: "lines", lines: 1 },
          { text: "From 7:45 to 10:20 = ___ hours ___ minutes", type: "lines", lines: 1 },
          { text: "From 11:30 AM to 2:15 PM = ___ hours ___ minutes", type: "lines", lines: 1 },
          { text: "From 6:50 AM to 8:25 AM = ___ hours ___ minutes", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: School timetable ───
      {
        type: "open-response",
        title: "Plan Your School Day",
        instruction: "A school day runs from 9:00 to 3:15. Each lesson is 50 minutes with a 10-minute break between lessons. Lunch is 45 minutes.",
        prompts: [
          { text: "Lesson 1 starts at 9:00. When does it end? ___", type: "lines", lines: 1 },
          { text: "Lesson 2 starts at ___. When does it end? ___", type: "lines", lines: 1 },
          { text: "If lunch starts at 12:30, when does it finish? ___", type: "lines", lines: 1 },
          { text: "How many 50-minute lessons can fit in the school day (excluding lunch)? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Weekend Activity Timetable",
        instruction: "Plan a timetable for a Saturday.",
        prompts: [
          { text: "Swimming lesson: 9:00 AM to 10:15 AM. Duration: ___", type: "lines", lines: 1 },
          { text: "Lunch at noon for 1 hour. Piano at 2:30 PM for 45 minutes. Free time between lunch and piano: ___", type: "lines", lines: 1 },
          { text: "If you have homework that takes 40 minutes, when could you fit it in? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Elapsed Time Quick Check",
        instruction: "Circle the correct elapsed time.",
        questions: [
          { prompt: "From 3:45 PM to 5:20 PM = ?", options: ["1 hr 25 min", "1 hr 35 min", "2 hr 25 min"] },
          { prompt: "From 10:50 AM to 1:15 PM = ?", options: ["2 hr 15 min", "2 hr 25 min", "3 hr 25 min"] },
          { prompt: "From 7:30 AM to 11:10 AM = ?", options: ["3 hr 20 min", "3 hr 40 min", "4 hr 40 min"] },
        ],
      },
      // ─── Hard: 24-hour time ───
      {
        type: "matching",
        title: "Match 12-Hour to 24-Hour Time",
        instruction: "Draw a line to match each 12-hour time to its 24-hour equivalent.",
        left: ["3:45 PM", "8:15 AM", "11:30 PM", "12:00 PM"],
        right: ["12:00", "23:30", "08:15", "15:45"],
      },
      {
        type: "matching",
        title: "More Time Matching",
        instruction: "Draw a line to match each 12-hour time to its 24-hour equivalent.",
        left: ["6:30 AM", "1:15 PM", "9:45 PM", "12:00 AM"],
        right: ["00:00", "21:45", "06:30", "13:15"],
      },
      {
        type: "open-response",
        title: "Convert Times",
        instruction: "Convert each time.",
        prompts: [
          { text: "2:30 PM = ___ (24-hour)", type: "lines", lines: 1 },
          { text: "18:45 = ___ (12-hour)", type: "lines", lines: 1 },
          { text: "7:15 AM = ___ (24-hour)", type: "lines", lines: 1 },
          { text: "21:00 = ___ (12-hour)", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Time Conversions",
        instruction: "Convert each time.",
        prompts: [
          { text: "4:45 PM = ___ (24-hour)", type: "lines", lines: 1 },
          { text: "00:30 = ___ (12-hour)", type: "lines", lines: 1 },
          { text: "11:20 PM = ___ (24-hour)", type: "lines", lines: 1 },
          { text: "14:10 = ___ (12-hour)", type: "lines", lines: 1 },
          { text: "12:00 AM = ___ (24-hour)", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "24-Hour Time Quick Check",
        instruction: "Circle the correct 24-hour time.",
        questions: [
          { prompt: "5:30 PM = ?", options: ["05:30", "15:30", "17:30"] },
          { prompt: "10:15 AM = ?", options: ["10:15", "22:15", "12:15"] },
          { prompt: "8:00 PM = ?", options: ["08:00", "18:00", "20:00"] },
          { prompt: "12:45 AM = ?", options: ["00:45", "12:45", "24:45"] },
        ],
      },
      {
        type: "open-response",
        title: "Timetable Word Problems",
        instruction: "Solve each timetable problem.",
        prompts: [
          { text: "A flight departs at 14:30 and lands at 17:45. How long is the flight?", type: "lines", lines: 1 },
          { text: "A TV show starts at 19:00 and goes for 1 hour 45 minutes. When does it finish?", type: "lines", lines: 1 },
          { text: "You need to catch a bus at 08:15. It takes 20 minutes to walk to the bus stop. When must you leave?", type: "lines", lines: 1 },
          { text: "A movie starts at 6:50 PM and runs for 2 hours 15 minutes. What time does it finish in 24-hour time?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Time Zones Challenge",
        instruction: "Perth is 3 hours behind Sydney. Answer each question.",
        prompts: [
          { text: "If it is 2:00 PM in Sydney, what time is it in Perth? ___", type: "lines", lines: 1 },
          { text: "A TV show airs at 8:00 PM Sydney time. When should people in Perth tune in? ___", type: "lines", lines: 1 },
          { text: "A flight from Perth departs at 09:00 Perth time and takes 5 hours. What time does it arrive in Sydney (Sydney time)? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Timetable Planner",
        instruction: "Work with timetables in real life!",
        suggestions: [
          "Look up a local bus or train timetable. Plan a trip and work out how long it takes.",
          "Create a timetable for your weekend activities.",
          "Find the TV guide and plan your viewing schedule for an evening.",
          "Convert all the times in your daily routine from 12-hour to 24-hour time.",
          "Plan a holiday itinerary with departure and arrival times in 24-hour format.",
        ],
      },
    ],
  },

  // ── WS 12: Convert Length, Mass & Capacity ────────────────
  {
    slug: "convert-length-mass-capacity",
    title: "Convert Length, Mass & Capacity",
    strand: "Measurement",
    description:
      "Convert between common units of length, mass and capacity",
    activities: [
      // ─── Easy: Length conversions ───
      {
        type: "open-response",
        title: "Convert Lengths",
        instruction: "Convert between units. Remember: 1 km = 1,000 m, 1 m = 100 cm, 1 cm = 10 mm.",
        prompts: [
          { text: "3 km = ___ m", type: "lines", lines: 1 },
          { text: "450 cm = ___ m", type: "lines", lines: 1 },
          { text: "2.5 m = ___ cm", type: "lines", lines: 1 },
          { text: "85 mm = ___ cm", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Length Conversions",
        instruction: "Convert each measurement.",
        prompts: [
          { text: "7.2 km = ___ m", type: "lines", lines: 1 },
          { text: "350 cm = ___ m", type: "lines", lines: 1 },
          { text: "1.8 m = ___ cm", type: "lines", lines: 1 },
          { text: "42 mm = ___ cm", type: "lines", lines: 1 },
          { text: "6,500 m = ___ km", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Longer?",
        instruction: "Circle the longer measurement.",
        questions: [
          { prompt: "Which is longer?", options: ["350 cm", "3.6 m"] },
          { prompt: "Which is longer?", options: ["1.2 km", "1,150 m"] },
          { prompt: "Which is longer?", options: ["45 mm", "4.2 cm"] },
          { prompt: "Which is longer?", options: ["6,500 m", "6.4 km"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Length Comparisons",
        instruction: "Circle the longer measurement.",
        questions: [
          { prompt: "Which is longer?", options: ["2.8 m", "275 cm"] },
          { prompt: "Which is longer?", options: ["0.5 km", "550 m"] },
          { prompt: "Which is longer?", options: ["90 mm", "8.5 cm"] },
          { prompt: "Which is longer?", options: ["1,800 m", "1.75 km"] },
        ],
      },
      {
        type: "matching",
        title: "Match Length Equivalents",
        instruction: "Draw a line to match equivalent measurements.",
        left: ["2 km", "150 cm", "35 mm", "0.75 m"],
        right: ["75 cm", "3.5 cm", "1.5 m", "2,000 m"],
      },
      // ─── Medium: Mass conversions ───
      {
        type: "open-response",
        title: "Convert Mass",
        instruction: "Convert between units. Remember: 1 kg = 1,000 g, 1 tonne = 1,000 kg.",
        prompts: [
          { text: "4.2 kg = ___ g", type: "lines", lines: 1 },
          { text: "3,750 g = ___ kg", type: "lines", lines: 1 },
          { text: "0.5 tonne = ___ kg", type: "lines", lines: 1 },
          { text: "2,500 kg = ___ tonnes", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Mass Conversions",
        instruction: "Convert each measurement.",
        prompts: [
          { text: "6.8 kg = ___ g", type: "lines", lines: 1 },
          { text: "1,250 g = ___ kg", type: "lines", lines: 1 },
          { text: "0.25 tonne = ___ kg", type: "lines", lines: 1 },
          { text: "7,500 kg = ___ tonnes", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Heavier?",
        instruction: "Circle the heavier measurement.",
        questions: [
          { prompt: "Which is heavier?", options: ["3.5 kg", "3,400 g"] },
          { prompt: "Which is heavier?", options: ["0.8 tonne", "850 kg"] },
          { prompt: "Which is heavier?", options: ["1,200 g", "1.15 kg"] },
          { prompt: "Which is heavier?", options: ["2.5 tonnes", "2,600 kg"] },
        ],
      },
      {
        type: "matching",
        title: "Match Mass Equivalents",
        instruction: "Draw a line to match equivalent measurements.",
        left: ["5 kg", "0.5 tonne", "250 g", "3.25 kg"],
        right: ["3,250 g", "5,000 g", "500 kg", "0.25 kg"],
      },
      // ─── Medium: Capacity conversions ───
      {
        type: "open-response",
        title: "Convert Capacity",
        instruction: "Convert between units. Remember: 1 L = 1,000 mL, 1 kL = 1,000 L.",
        prompts: [
          { text: "3.5 L = ___ mL", type: "lines", lines: 1 },
          { text: "6,250 mL = ___ L", type: "lines", lines: 1 },
          { text: "0.75 kL = ___ L", type: "lines", lines: 1 },
          { text: "4,000 L = ___ kL", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Capacity Conversions",
        instruction: "Convert each measurement.",
        prompts: [
          { text: "2.8 L = ___ mL", type: "lines", lines: 1 },
          { text: "450 mL = ___ L", type: "lines", lines: 1 },
          { text: "1.5 kL = ___ L", type: "lines", lines: 1 },
          { text: "8,000 L = ___ kL", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds More?",
        instruction: "Circle the larger capacity.",
        questions: [
          { prompt: "Which holds more?", options: ["2.5 L", "2,400 mL"] },
          { prompt: "Which holds more?", options: ["0.75 kL", "800 L"] },
          { prompt: "Which holds more?", options: ["1,500 mL", "1.6 L"] },
          { prompt: "Which holds more?", options: ["3 kL", "2,950 L"] },
        ],
      },
      // ─── Hard: Mixed problems ───
      {
        type: "sorting",
        title: "Sort by Unit Type",
        instruction: "Sort each unit into the correct measurement type.",
        columns: ["Length", "Mass", "Capacity"],
        items: [
          { label: "kilometres" },
          { label: "grams" },
          { label: "litres" },
          { label: "millimetres" },
          { label: "tonnes" },
          { label: "millilitres" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Reasonable Measurements",
        instruction: "Sort each measurement into whether it is a reasonable estimate or not.",
        columns: ["Reasonable", "Not Reasonable"],
        items: [
          { label: "A car weighs 1.5 tonnes" },
          { label: "A pencil is 3 m long" },
          { label: "A bucket holds 10 L" },
          { label: "An apple weighs 5 kg" },
          { label: "A door is 2 m tall" },
          { label: "A glass holds 250 mL" },
        ],
      },
      {
        type: "open-response",
        title: "Measurement Word Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A recipe needs 1.5 kg of flour. You have 800 g. How many more grams do you need?", type: "lines", lines: 2 },
          { text: "A pool holds 25 kL of water. How many litres is that?", type: "lines", lines: 1 },
          { text: "A ribbon is 3.2 m long. You cut off 85 cm. How many centimetres are left?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "More Word Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "You mix 750 mL of juice with 1.5 L of water. How many millilitres of liquid do you have?", type: "lines", lines: 2 },
          { text: "A truck can carry 3 tonnes. It already has 1,800 kg loaded. How many more kilograms can it carry?", type: "lines", lines: 2 },
          { text: "You need 4 pieces of string, each 65 cm long. How many metres of string do you need in total?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Multi-Step Conversions",
        instruction: "Convert each mixed measurement to a single unit.",
        prompts: [
          { text: "2 km 350 m = ___ m", type: "lines", lines: 1 },
          { text: "4 kg 750 g = ___ g", type: "lines", lines: 1 },
          { text: "3 L 200 mL = ___ mL", type: "lines", lines: 1 },
          { text: "1 tonne 500 kg = ___ kg", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Kitchen Conversions",
        instruction: "Practise converting measurements at home!",
        suggestions: [
          "Find 5 food packages. Convert each mass from grams to kilograms (or vice versa).",
          "Measure the length of 3 rooms in your house in metres, then convert to centimetres.",
          "Fill a jug with water. How many 250 mL cups does it take to fill a 1 L bottle?",
          "Estimate the mass of 3 objects in grams, then check with kitchen scales.",
          "Find the total capacity of all the drink bottles in your house.",
        ],
      },
    ],
  },

  // ── WS 13: Area of a Rectangle ────────────────────────────
  {
    slug: "area-rectangle-formula",
    title: "Area of a Rectangle",
    strand: "Measurement",
    description:
      "Use the formula for the area of a rectangle to solve problems",
    activities: [
      // ─── Easy: Understanding area ───
      {
        type: "open-response",
        title: "Calculate the Area",
        instruction: "Use the formula: Area = length × width. Include the correct unit (cm² or m²).",
        prompts: [
          { text: "Length = 5 cm, Width = 3 cm. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 8 m, Width = 4 m. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 10 cm, Width = 6 cm. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 12 m, Width = 7 m. Area = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Area Calculations",
        instruction: "Calculate the area of each rectangle.",
        prompts: [
          { text: "Length = 9 cm, Width = 5 cm. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 15 m, Width = 3 m. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 7 cm, Width = 7 cm. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 20 m, Width = 8 m. Area = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Dimensions to Areas",
        instruction: "Draw a line to match each rectangle to its area.",
        left: ["6 cm × 4 cm", "9 m × 3 m", "5 cm × 5 cm", "8 m × 2 m"],
        right: ["16 m²", "25 cm²", "24 cm²", "27 m²"],
      },
      {
        type: "circle-correct",
        title: "Quick Area Check",
        instruction: "Circle the correct area for each rectangle.",
        questions: [
          { prompt: "4 cm × 6 cm = ?", options: ["20 cm²", "24 cm²", "10 cm²"] },
          { prompt: "11 m × 3 m = ?", options: ["14 m²", "33 m²", "30 m²"] },
          { prompt: "5 cm × 8 cm = ?", options: ["13 cm²", "35 cm²", "40 cm²"] },
          { prompt: "10 m × 10 m = ?", options: ["20 m²", "40 m²", "100 m²"] },
        ],
      },
      {
        type: "open-response",
        title: "Area with Decimal Dimensions",
        instruction: "Calculate the area. Use decimals.",
        prompts: [
          { text: "Length = 3.5 cm, Width = 2 cm. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 4.5 m, Width = 6 m. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 2.5 cm, Width = 2.5 cm. Area = ___", type: "lines", lines: 1 },
          { text: "Length = 10.5 m, Width = 4 m. Area = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Area or Perimeter?",
        instruction: "Sort each description. Does it describe area or perimeter?",
        columns: ["Area (space inside)", "Perimeter (distance around)"],
        items: [
          { label: "Painting a wall" },
          { label: "Fencing a garden" },
          { label: "Laying carpet" },
          { label: "Putting a border on a photo" },
          { label: "Tiling a floor" },
          { label: "Walking around a park" },
        ],
      },
      // ─── Medium: Finding missing dimensions ───
      {
        type: "open-response",
        title: "Find the Missing Dimension",
        instruction: "Use the area formula to find the missing length or width.",
        prompts: [
          { text: "Area = 36 cm², Length = 9 cm. Width = ___", type: "lines", lines: 1 },
          { text: "Area = 48 m², Width = 6 m. Length = ___", type: "lines", lines: 1 },
          { text: "Area = 100 cm², Length = 10 cm. Width = ___", type: "lines", lines: 1 },
          { text: "Area = 72 m², Width = 8 m. Length = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Missing Dimensions",
        instruction: "Find the missing side length.",
        prompts: [
          { text: "Area = 63 cm², Length = 7 cm. Width = ___", type: "lines", lines: 1 },
          { text: "Area = 120 m², Width = 10 m. Length = ___", type: "lines", lines: 1 },
          { text: "Area = 56 cm², Length = 14 cm. Width = ___", type: "lines", lines: 1 },
          { text: "Area = 200 m², Width = 25 m. Length = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Rectangle Has the Largest Area?",
        instruction: "Calculate the area of each rectangle and circle the largest.",
        questions: [
          { prompt: "Largest area?", options: ["7 cm × 5 cm", "6 cm × 6 cm", "8 cm × 4 cm"] },
          { prompt: "Largest area?", options: ["3 m × 12 m", "5 m × 8 m", "10 m × 4 m"] },
          { prompt: "Largest area?", options: ["9 cm × 3 cm", "4 cm × 7 cm", "6 cm × 5 cm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Same Area, Different Shapes",
        instruction: "Which pairs of dimensions give the same area?",
        questions: [
          { prompt: "Same area as 4 × 6?", options: ["3 × 8", "2 × 10", "5 × 5"] },
          { prompt: "Same area as 5 × 12?", options: ["6 × 10", "4 × 15", "Both are correct"] },
          { prompt: "Same area as 3 × 9?", options: ["6 × 4", "1 × 27", "Both are correct"] },
        ],
      },
      {
        type: "open-response",
        title: "Draw Rectangles with Given Areas",
        instruction: "List all possible whole-number dimensions for each area.",
        prompts: [
          { text: "Area = 24 cm². Possible dimensions: ___", type: "lines", lines: 2 },
          { text: "Area = 36 cm². Possible dimensions: ___", type: "lines", lines: 2 },
          { text: "Area = 18 cm². Possible dimensions: ___", type: "lines", lines: 2 },
        ],
      },
      // ─── Hard: Word problems ───
      {
        type: "open-response",
        title: "Area Word Problems",
        instruction: "Solve each problem using the area formula. Show your working.",
        prompts: [
          { text: "A garden bed is 4.5 m long and 2 m wide. What is its area?", type: "lines", lines: 2 },
          { text: "A classroom floor is 120 m². If the room is 10 m long, how wide is it?", type: "lines", lines: 2 },
          { text: "You want to tile a 3 m × 4 m bathroom with tiles that are 0.5 m × 0.5 m. How many tiles do you need?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "More Area Word Problems",
        instruction: "Solve each problem. Show your working.",
        prompts: [
          { text: "A rectangular field is 50 m long and 30 m wide. What is its area in square metres?", type: "lines", lines: 2 },
          { text: "You need to buy turf for a lawn that is 8 m × 6 m. Turf costs $12 per m². What is the total cost?", type: "lines", lines: 2 },
          { text: "A poster is 60 cm × 40 cm. A frame costs 5 cents per cm². How much does it cost to frame?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Composite Shape Areas",
        instruction: "Break each shape into rectangles and find the total area.",
        prompts: [
          { text: "An L-shaped room: one part is 5 m × 3 m, the other is 4 m × 2 m. Total area = ___", type: "lines", lines: 2 },
          { text: "A T-shaped garden: the top is 6 m × 2 m, the stem is 2 m × 4 m. Total area = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Area Explorer",
        instruction: "Measure and calculate areas at home!",
        suggestions: [
          "Measure the length and width of your bedroom. Calculate its area in square metres.",
          "Find a rectangular book cover. Measure its dimensions and calculate the area in cm².",
          "Estimate the area of a table top, then measure to check.",
          "Draw 3 different rectangles that all have an area of 24 cm².",
          "Calculate the total floor area of your home by measuring each room.",
        ],
      },
    ],
  },

  // ── WS 14: Angle Properties ───────────────────────────────
  {
    slug: "angle-properties",
    title: "Angle Properties",
    strand: "Measurement",
    description:
      "Use angle properties to solve problems",
    activities: [
      // ─── Easy: Types of angles ───
      {
        type: "sorting",
        title: "Sort the Angles",
        instruction: "Sort each angle into the correct type.",
        columns: ["Acute (< 90°)", "Right (= 90°)", "Obtuse (> 90°)"],
        items: [
          { label: "45°" },
          { label: "90°" },
          { label: "120°" },
          { label: "30°" },
          { label: "150°" },
          { label: "75°" },
        ],
      },
      {
        type: "sorting",
        title: "Sort More Angles",
        instruction: "Sort each angle into the correct type.",
        columns: ["Acute", "Right", "Obtuse", "Straight"],
        items: [
          { label: "15°" },
          { label: "90°" },
          { label: "135°" },
          { label: "180°" },
          { label: "60°" },
          { label: "110°" },
          { label: "89°" },
          { label: "91°" },
        ],
      },
      {
        type: "matching",
        title: "Match Angle Types",
        instruction: "Draw a line to match each angle to its type.",
        left: ["35°", "90°", "135°", "180°"],
        right: ["Straight angle", "Obtuse angle", "Right angle", "Acute angle"],
      },
      {
        type: "circle-correct",
        title: "Name the Angle Type",
        instruction: "Circle the type for each angle.",
        questions: [
          { prompt: "72° is:", options: ["Acute", "Right", "Obtuse"] },
          { prompt: "145° is:", options: ["Acute", "Right", "Obtuse"] },
          { prompt: "90° is:", options: ["Acute", "Right", "Obtuse"] },
          { prompt: "88° is:", options: ["Acute", "Right", "Obtuse"] },
          { prompt: "180° is:", options: ["Obtuse", "Straight", "Reflex"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Angle Classification",
        instruction: "Circle the correct classification.",
        questions: [
          { prompt: "An angle of 200° is:", options: ["Obtuse", "Straight", "Reflex"] },
          { prompt: "An angle of 0° is:", options: ["Zero angle", "Acute", "Right"] },
          { prompt: "An angle of 360° is:", options: ["Full turn", "Straight", "Reflex"] },
          { prompt: "An angle between 180° and 360° is:", options: ["Obtuse", "Reflex", "Straight"] },
        ],
      },
      {
        type: "open-response",
        title: "Estimate the Angle",
        instruction: "Estimate the size of each angle described.",
        prompts: [
          { text: "A quarter turn = ___°", type: "lines", lines: 1 },
          { text: "A half turn = ___°", type: "lines", lines: 1 },
          { text: "A full turn = ___°", type: "lines", lines: 1 },
          { text: "A three-quarter turn = ___°", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Angles on a line and at a point ───
      {
        type: "open-response",
        title: "Angles on a Straight Line",
        instruction: "Angles on a straight line add up to 180°. Find the missing angle.",
        prompts: [
          { text: "One angle is 110°. The other angle = ___°", type: "lines", lines: 1 },
          { text: "One angle is 45°. The other angle = ___°", type: "lines", lines: 1 },
          { text: "One angle is 90°. The other angle = ___°", type: "lines", lines: 1 },
          { text: "One angle is 63°. The other angle = ___°", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "More Angles on a Line",
        instruction: "Find the missing angle on each straight line.",
        prompts: [
          { text: "Angles are 35° and 85° and ___°. They add to 180°.", type: "lines", lines: 1 },
          { text: "Angles are 70° and ___°. They add to 180°.", type: "lines", lines: 1 },
          { text: "Angles are 42° and 58° and ___°. They add to 180°.", type: "lines", lines: 1 },
          { text: "Angles are 125° and ___°. They add to 180°.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Angles at a Point",
        instruction: "Angles around a point add up to 360°. Find the missing angle.",
        prompts: [
          { text: "Three angles: 90°, 120°, 80°. Missing angle = ___°", type: "lines", lines: 1 },
          { text: "Two angles: 150° and 150°. Missing angle = ___°", type: "lines", lines: 1 },
          { text: "Four angles: 90°, 90°, 90° and ___°", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Missing Angle",
        instruction: "Circle the correct missing angle.",
        questions: [
          { prompt: "Triangle: 60°, 80°, ?° (angles sum to 180°)", options: ["30°", "40°", "50°"] },
          { prompt: "Triangle: 90°, 35°, ?°", options: ["45°", "55°", "65°"] },
          { prompt: "Straight line: 125° and ?°", options: ["45°", "55°", "65°"] },
          { prompt: "Triangle: 70°, 70°, ?°", options: ["30°", "40°", "50°"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Missing Angles",
        instruction: "Circle the correct missing angle.",
        questions: [
          { prompt: "Triangle: 45°, 45°, ?°", options: ["80°", "90°", "100°"] },
          { prompt: "Triangle: 30°, 60°, ?°", options: ["80°", "90°", "100°"] },
          { prompt: "Straight line: 72° and ?°", options: ["98°", "108°", "118°"] },
          { prompt: "Triangle: 55°, 65°, ?°", options: ["50°", "60°", "70°"] },
        ],
      },
      {
        type: "open-response",
        title: "Angles in Triangles",
        instruction: "Find the missing angle in each triangle.",
        prompts: [
          { text: "Angles: 50° and 65°. Third angle = ___°", type: "lines", lines: 1 },
          { text: "Angles: 30° and 120°. Third angle = ___°", type: "lines", lines: 1 },
          { text: "Angles: 72° and 72°. Third angle = ___°", type: "lines", lines: 1 },
          { text: "An equilateral triangle has all angles equal. Each angle = ___°", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Triangle Type to Angles",
        instruction: "Draw a line to match each triangle type to its angle properties.",
        left: ["Equilateral", "Right-angled", "Isosceles", "Scalene"],
        right: ["Two equal angles", "All different angles", "All 60°", "One 90° angle"],
      },
      // ─── Hard: Multi-step angle problems ───
      {
        type: "open-response",
        title: "Angle Problem Solving",
        instruction: "Use angle properties to solve these problems. Show your working.",
        prompts: [
          { text: "A triangle has angles of 50° and 65°. What is the third angle?", type: "lines", lines: 2 },
          { text: "Two angles on a straight line are equal. What is each angle?", type: "lines", lines: 1 },
          { text: "A right angle is split into two angles. One is 38°. What is the other?", type: "lines", lines: 1 },
          { text: "The angles of a triangle are in the pattern: x, 2x, 3x. Find each angle.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "More Angle Problem Solving",
        instruction: "Solve each angle problem.",
        prompts: [
          { text: "Two angles on a straight line are in the ratio 1:3. Find both angles.", type: "lines", lines: 2 },
          { text: "A quadrilateral has angles of 80°, 100° and 95°. What is the fourth angle? (Angles in a quadrilateral = 360°)", type: "lines", lines: 2 },
          { text: "An isosceles triangle has a base angle of 55°. What are the other two angles?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False: Angle Facts",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "A triangle can have two right angles", options: ["TRUE", "FALSE"] },
          { prompt: "An obtuse triangle has one angle greater than 90°", options: ["TRUE", "FALSE"] },
          { prompt: "The sum of angles in a quadrilateral is 360°", options: ["TRUE", "FALSE"] },
          { prompt: "A right angle is exactly 90°", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Angle Hunter",
        instruction: "Find and measure angles at home!",
        suggestions: [
          "Find 5 angles around your home. Classify each as acute, right, or obtuse.",
          "Open a book to different widths. Estimate the angle, then check with a protractor.",
          "Look at clock hands at different times. What angle do they make at 3:00? At 10:00?",
          "Draw a triangle, measure all three angles with a protractor, and check they add up to 180°.",
          "Find all the right angles in your kitchen.",
        ],
      },
    ],
  },

  // ── WS 15: Parallel Cross-Sections of Right Prisms ───────
  {
    slug: "parallel-cross-sections",
    title: "Parallel Cross-Sections of Right Prisms",
    strand: "Space",
    description:
      "Identify the parallel cross-section for right prisms",
    activities: [
      // ─── Easy: Identifying prisms ───
      {
        type: "matching",
        title: "Match Prism to Cross-Section Shape",
        instruction: "Draw a line to match each prism to the shape of its parallel cross-section.",
        left: ["Triangular prism", "Rectangular prism", "Pentagonal prism", "Hexagonal prism"],
        right: ["Hexagon", "Rectangle", "Triangle", "Pentagon"],
      },
      {
        type: "circle-correct",
        title: "Name the Cross-Section",
        instruction: "Circle the shape you would see if you sliced each prism parallel to its base.",
        questions: [
          { prompt: "Triangular prism", options: ["Triangle", "Rectangle", "Circle"] },
          { prompt: "Rectangular prism (box)", options: ["Triangle", "Rectangle", "Square"] },
          { prompt: "Hexagonal prism", options: ["Pentagon", "Hexagon", "Octagon"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Cross-Sections",
        instruction: "Circle the correct cross-section shape.",
        questions: [
          { prompt: "Cylinder", options: ["Rectangle", "Circle", "Oval"] },
          { prompt: "Cube", options: ["Triangle", "Circle", "Square"] },
          { prompt: "Pentagonal prism", options: ["Pentagon", "Hexagon", "Rectangle"] },
          { prompt: "Octagonal prism", options: ["Hexagon", "Octagon", "Circle"] },
        ],
      },
      {
        type: "matching",
        title: "Match Shape to Prism",
        instruction: "Draw a line to match each cross-section shape to its prism.",
        left: ["Circle", "Square", "Triangle", "Hexagon"],
        right: ["Hexagonal prism", "Triangular prism", "Cylinder", "Cube"],
      },
      {
        type: "sorting",
        title: "Sort: Prisms and Non-Prisms",
        instruction: "Sort each 3D shape into the correct column.",
        columns: ["Prism", "Not a Prism"],
        items: [
          { label: "Triangular prism" },
          { label: "Sphere" },
          { label: "Rectangular prism" },
          { label: "Cone" },
          { label: "Hexagonal prism" },
          { label: "Pyramid" },
        ],
      },
      {
        type: "open-response",
        title: "Name the Prism",
        instruction: "If the cross-section is the given shape, name the prism.",
        prompts: [
          { text: "Cross-section is a triangle → ___ prism", type: "lines", lines: 1 },
          { text: "Cross-section is a circle → ___", type: "lines", lines: 1 },
          { text: "Cross-section is a rectangle → ___ prism", type: "lines", lines: 1 },
          { text: "Cross-section is a pentagon → ___ prism", type: "lines", lines: 1 },
        ],
      },
      // ─── Medium: Properties of cross-sections ───
      {
        type: "circle-correct",
        title: "True or False? Cross-Sections",
        instruction: "Circle TRUE or FALSE for each statement.",
        questions: [
          { prompt: "Every parallel cross-section of a prism is the same shape", options: ["TRUE", "FALSE"] },
          { prompt: "A cylinder has a circular cross-section", options: ["TRUE", "FALSE"] },
          { prompt: "A triangular prism has a rectangular cross-section", options: ["TRUE", "FALSE"] },
          { prompt: "All cross-sections of a rectangular prism are congruent rectangles", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More True or False",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "A cone has a uniform cross-section", options: ["TRUE", "FALSE"] },
          { prompt: "All prisms have uniform cross-sections", options: ["TRUE", "FALSE"] },
          { prompt: "A sphere has a circular cross-section", options: ["TRUE", "FALSE"] },
          { prompt: "The cross-section of a cube is always a square", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "open-response",
        title: "Describe the Cross-Section",
        instruction: "For each shape, describe what you would see if you sliced it parallel to the base.",
        prompts: [
          { text: "A cube sliced parallel to its base: ___", type: "lines", lines: 1 },
          { text: "A triangular prism sliced parallel to its triangular face: ___", type: "lines", lines: 1 },
          { text: "A cylinder sliced parallel to its circular base: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Cross-Section Properties",
        instruction: "Answer each question about cross-sections.",
        prompts: [
          { text: "How many faces does a triangular prism have? ___", type: "lines", lines: 1 },
          { text: "What shape are the two parallel faces of a hexagonal prism? ___", type: "lines", lines: 1 },
          { text: "If you slice a rectangular prism at any height parallel to the base, what shape do you always get? ___", type: "lines", lines: 1 },
          { text: "Why does a cone not have a uniform cross-section? ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match Prism to Number of Faces",
        instruction: "Draw a line to match each prism to its number of faces.",
        left: ["Triangular prism", "Rectangular prism", "Pentagonal prism", "Hexagonal prism"],
        right: ["7", "5", "6", "8"],
      },
      // ─── Hard: Drawing and reasoning ───
      {
        type: "open-response",
        title: "Draw the Cross-Section",
        instruction: "Draw the shape of the parallel cross-section for each prism.",
        prompts: [
          { text: "A pentagonal prism (draw the cross-section)", type: "box" },
          { text: "An octagonal prism (draw the cross-section)", type: "box" },
          { text: "A right prism with an L-shaped base (draw the cross-section)", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Cross-Section Reasoning",
        instruction: "Answer each question with a full explanation.",
        prompts: [
          { text: "Explain the difference between a cross-section of a prism and a cross-section of a pyramid.", type: "lines", lines: 3 },
          { text: "A prism has a cross-section with 6 sides. How many faces does the prism have in total?", type: "lines", lines: 2 },
          { text: "Can a prism have a circular cross-section? Explain.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Cross-Sections",
        instruction: "Identify the cross-section shape for each real-world object.",
        prompts: [
          { text: "A Toblerone box: ___", type: "lines", lines: 1 },
          { text: "A pencil (hexagonal): ___", type: "lines", lines: 1 },
          { text: "A log: ___", type: "lines", lines: 1 },
          { text: "A shipping container: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Slice It!",
        instruction: "Explore cross-sections with everyday objects!",
        suggestions: [
          "Slice a block of cheese parallel to one face. What shape do you see?",
          "Look at a box (cereal box, tissue box). What shape would each slice be?",
          "Find objects shaped like prisms around your home. Name the cross-section of each.",
          "Use playdough to make a triangular prism, then slice it to see the cross-section.",
          "Look at different shaped pencils. What cross-section does each have?",
        ],
      },
    ],
  },