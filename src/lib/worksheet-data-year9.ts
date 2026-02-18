import type { WorksheetItem } from "./worksheet-types";

export const year9MathsWorksheets: WorksheetItem[] = [
  {
    slug: "rational-irrational-numbers",
    title: "Rational & Irrational Numbers",
    strand: "Number",
    description:
      "Classify numbers as rational or irrational, estimate surds and use irrational numbers such as sqrt(2) and pi to solve problems.",
    lesson: {
      title: "Rational and Irrational Numbers",
      objective: "Classify numbers as rational or irrational, simplify surds by finding perfect-square factors, and estimate the size of a surd without a calculator.",
      materials: [
        "Paper and pencil",
        "Calculator (for checking only, not for estimation tasks)",
        "Ruler (to draw a number line)",
      ],
      intro: {
        title: "What Is a Surd?",
        script: "You already know that the square root of 9 is 3 — a nice whole number. But what about the square root of 5? When you press it on a calculator you get 2.2360679... and those digits never stop and never repeat. That is a surd — a square root that gives an irrational number. A rational number is any number you can write as a fraction. An irrational number cannot be written as any fraction, ever. Surds are one family of irrational numbers; pi is another. Today we are going to get comfortable working with surds: simplifying them, estimating them, and using them to solve problems.",
        action: "Write on paper: Rational: 1/2, 0.75, -3, sqrt(9)=3. Irrational: sqrt(2), sqrt(5), pi, sqrt(7). Ask your child to use a calculator to evaluate sqrt(4), sqrt(9), sqrt(16), sqrt(25) — these are perfect squares, so they give whole numbers and are rational. Then sqrt(2), sqrt(3), sqrt(5) — these do not terminate or repeat, so they are irrational.",
      },
      mainActivity: {
        title: "Simplifying Surds and Estimating",
        script: "To simplify a surd, look for the largest perfect-square factor inside. For sqrt of 18: 18 equals 9 times 2. So sqrt of 18 equals sqrt of 9 times sqrt of 2 equals 3 times sqrt of 2. We write that as 3 root 2. To estimate a surd without a calculator, think about which two perfect squares it sits between. For sqrt of 20: 16 is 4 squared and 25 is 5 squared. So sqrt of 20 is between 4 and 5. Since 20 is closer to 25, it is closer to 5 — roughly 4.5. Now you simplify: sqrt of 50. And estimate: sqrt of 30.",
        action: "Work through: sqrt(18) = 3 sqrt(2) as above. Then child works sqrt(50): 50 = 25 x 2, so sqrt(50) = 5 sqrt(2). For estimation: sqrt(30) is between sqrt(25)=5 and sqrt(36)=6. Closer to 5.5. Check with calculator. Practise two more: simplify sqrt(72) and estimate sqrt(90).",
      },
      wrapUp: {
        title: "Real-World Surd",
        script: "A square paddock has an area of 50 square metres. What is the exact length of one side? Write it as a simplified surd.",
        action: "Child writes: side = sqrt(50) = 5 sqrt(2) metres. Ask them to explain why this cannot be written as a fraction. If they can also estimate 5 sqrt(2) is approximately 5 x 1.41 = 7.07 metres, they are well-prepared for the worksheet.",
      },
    },
    activities: [
      {
        type: "sorting",
        title: "Rational or Irrational?",
        instruction: "Sort each number into the correct column.",
        columns: ["Rational","Irrational"],
        items: [
          {"label":"1/2"},
          {"label":"sqrt(2)"},
          {"label":"0.75"},
          {"label":"pi"},
          {"label":"-3"},
          {"label":"sqrt(9)=3"},
          {"label":"0.333..."},
          {"label":"sqrt(5)"},
          {"label":"e=2.718..."},
          {"label":"3/4"},
        ],
      },
      {
        type: "matching",
        title: "Surd Approximations",
        instruction: "Draw a line from each surd to its best decimal approximation (to 2 decimal places).",
        left: ["sqrt(2)","sqrt(3)","sqrt(5)","sqrt(7)","sqrt(10)"],
        right: ["1.41","1.73","2.24","2.65","3.16"],
      },
      {
        type: "circle-correct",
        title: "Classify the Number",
        instruction: "Circle the correct classification for each number.",
        questions: [
          { prompt: "0.666...", options: ["Rational","Irrational","Neither"] },
          { prompt: "sqrt(16)", options: ["Rational","Irrational","Both"] },
          { prompt: "sqrt(11)", options: ["Rational","Irrational","Integer"] },
          { prompt: "pi / pi", options: ["Rational","Irrational","Undefined"] },
        ],
      },
      {
        type: "open-response",
        title: "Simplifying Surds",
        instruction: "Simplify each surd by finding the largest perfect-square factor. Example: sqrt(12) = sqrt(4x3) = 2sqrt(3)",
        prompts: [
          { text: "sqrt(18) = ", type: "lines", lines: 2 },
          { text: "sqrt(50) = ", type: "lines", lines: 2 },
          { text: "sqrt(72) = ", type: "lines", lines: 2 },
          { text: "sqrt(200) = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Estimating Surds",
        instruction: "Without a calculator, circle the two consecutive integers that each surd lies between.",
        questions: [
          { prompt: "sqrt(20)", options: ["3 and 4","4 and 5","5 and 6"] },
          { prompt: "sqrt(50)", options: ["6 and 7","7 and 8","8 and 9"] },
          { prompt: "sqrt(90)", options: ["8 and 9","9 and 10","10 and 11"] },
          { prompt: "sqrt(150)", options: ["11 and 12","12 and 13","13 and 14"] },
        ],
      },
      {
        type: "open-response",
        title: "Circle Problems with Pi",
        instruction: "Use pi approx 3.14 to solve these problems. Show all working.",
        prompts: [
          { text: "A circle has a radius of 7 cm. Calculate its circumference (C = 2 pi r).", type: "lines", lines: 3 },
          { text: "A circle has a diameter of 10 cm. Calculate its area (A = pi r squared).", type: "lines", lines: 3 },
          { text: "A pizza has a circumference of 62.8 cm. What is its radius?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Ordering Surds",
        instruction: "Order these surds from smallest to largest. Use: sqrt(2) approx 1.41, sqrt(3) approx 1.73, sqrt(5) approx 2.24, sqrt(8) approx 2.83.",
        prompts: [
          { text: "Write sqrt(8), sqrt(2), sqrt(5), sqrt(3) in order from smallest to largest:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Surds Challenge",
        instruction: "Answer these questions using your knowledge of irrational numbers.",
        prompts: [
          { text: "A square paddock has an area of 50 m squared. What is the exact length of one side? Write as a simplified surd.", type: "lines", lines: 3 },
          { text: "Explain in your own words why sqrt(2) is irrational.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Simplifying Surds -- Adding and Subtracting",
        instruction: "Simplify by collecting like surds. Example: 3 sqrt(2) + 5 sqrt(2) = 8 sqrt(2).",
        prompts: [
          { text: "3 sqrt(5) + 2 sqrt(5) = ", type: "lines", lines: 2 },
          { text: "7 sqrt(3) - 4 sqrt(3) = ", type: "lines", lines: 2 },
          { text: "sqrt(8) + sqrt(2) = (Hint: simplify sqrt(8) first)", type: "lines", lines: 3 },
          { text: "sqrt(50) - sqrt(18) = (Hint: simplify both surds first)", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Multiplying Surds",
        instruction: "Use sqrt(a) x sqrt(b) = sqrt(ab) to simplify each product. Simplify fully.",
        prompts: [
          { text: "sqrt(3) x sqrt(3) = ", type: "lines", lines: 2 },
          { text: "sqrt(2) x sqrt(8) = ", type: "lines", lines: 2 },
          { text: "3 sqrt(5) x 2 sqrt(5) = ", type: "lines", lines: 2 },
          { text: "sqrt(6) x sqrt(6) = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Real Number Classification",
        instruction: "Sort each number into the MOST specific category it belongs to. (Every natural number is also an integer, rational, and real -- place it in 'Natural Numbers'.)",
        columns: ["Natural Numbers","Integers (not natural)","Rationals (not integer)","Irrationals"],
        items: [
          {"label":"5"},
          {"label":"-4"},
          {"label":"2/3"},
          {"label":"sqrt(7)"},
          {"label":"0"},
          {"label":"-1/2"},
          {"label":"pi"},
          {"label":"sqrt(25)"},
        ],
      },
      {
        type: "circle-correct",
        title: "Which Simplification Is Correct?",
        instruction: "Circle the correct simplified form of each surd.",
        questions: [
          { prompt: "sqrt(8)", options: ["2 sqrt(2)","4 sqrt(2)","sqrt(4) + sqrt(4)"] },
          { prompt: "sqrt(75)", options: ["5 sqrt(3)","3 sqrt(5)","25 sqrt(3)"] },
          { prompt: "sqrt(12)", options: ["2 sqrt(3)","3 sqrt(2)","6 sqrt(2)"] },
          { prompt: "sqrt(45)", options: ["3 sqrt(5)","5 sqrt(3)","9 sqrt(5)"] },
        ],
      },
      {
        type: "home-activity",
        title: "Surds and Irrational Numbers at Home",
        instruction: "Explore irrational numbers in everyday life.",
        suggestions: [
          "Measure the diagonal of a square tile using a ruler. Calculate what the exact diagonal should be using surds. How close is your measurement?",
          "Look up the first 20 decimal places of pi online. Explain to a family member why pi is irrational and how it differs from 22/7.",
          "Use a calculator to check that sqrt(2) x sqrt(2) = 2 exactly. Now try: is sqrt(2) + sqrt(3) equal to sqrt(5)? Why or why not?",
        ],
      },
    ],
  },

  {
    slug: "scientific-notation",
    title: "Scientific Notation",
    strand: "Number",
    description:
      "Express very large and very small numbers in scientific notation and convert between standard and scientific form.",
    lesson: {
      title: "Scientific Notation",
      objective: "Write very large and very small numbers in scientific notation (a times 10 to the n, where 1 is less than or equal to a and a is less than 10), and multiply and divide numbers in scientific notation.",
      materials: [
        "Paper and pencil",
        "Calculator",
      ],
      intro: {
        title: "When Numbers Get Ridiculous",
        script: "The distance from Earth to the nearest star other than the Sun is 40,208,000,000,000 kilometres. Writing that out every time is impractical, and it is easy to miscount the zeros. Scientists invented a shorthand: instead of writing all those zeros, they write 4.0208 times 10 to the power of 13. This tells you: take 4.0208 and move the decimal point 13 places to the right. The same trick works for tiny numbers like the diameter of a hydrogen atom: 0.000000000106 metres is written as 1.06 times 10 to the power of negative 11. Today we learn to convert numbers into this scientific notation and back.",
        action: "Write 4,500 on paper. Ask: how many times do we multiply by 10 to get from 4.5 to 4500? (Three times, so 4.5 x 10^3.) Then write 0.0045 and ask: how many times do we divide by 10? (Three times, so 4.5 x 10^-3.) The key rule: the number in front must be at least 1 and less than 10.",
      },
      mainActivity: {
        title: "Converting Both Ways",
        script: "To convert to scientific notation: move the decimal point until you have a number between 1 and 10. Count how many places you moved. If you moved left (for a big number), the exponent is positive. If you moved right (for a small number), the exponent is negative. Example: 300,000,000 metres per second. Move the decimal 8 places left to get 3.0. So it is 3.0 times 10 to the 8. To convert back: 6.022 times 10 to the 23 — move the decimal 23 places right. For calculating: multiply the front numbers, then add the exponents. So 3 times 10 to the 4, times 2 times 10 to the 3, equals 6 times 10 to the 7. Now you convert: 0.00007 metres.",
        action: "Child works: 0.00007 = 7 x 10^-5. Then try the reverse: write 9.46 x 10^15 as a standard number (move decimal 15 places right). For calculations, try: (4 x 10^3) x (2 x 10^4) = 8 x 10^7. Check with calculator. Also show a division: (8 x 10^6) / (4 x 10^2) = 2 x 10^4.",
      },
      wrapUp: {
        title: "Speed of Light",
        script: "Light travels at 3 times 10 to the 8 metres per second. The distance from Earth to the Sun is 1.5 times 10 to the 11 metres. How many seconds does it take for light to travel from the Sun to Earth? Show me your calculation in scientific notation.",
        action: "Child calculates: time = distance / speed = (1.5 x 10^11) / (3 x 10^8) = 0.5 x 10^3 = 5 x 10^2 = 500 seconds. If they struggle with the division, show them: 1.5 / 3 = 0.5, then 10^11 / 10^8 = 10^3, then rewrite 0.5 x 10^3 as 5 x 10^2. This confirms they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Large Numbers in Scientific Notation",
        instruction: "Draw a line matching each number in standard form to its scientific notation.",
        left: ["45,000","3,200,000","810,000,000","60,000","1,700,000"],
        right: ["4.5 x 10^4","3.2 x 10^6","8.1 x 10^8","6.0 x 10^4","1.7 x 10^6"],
      },
      {
        type: "matching",
        title: "Small Numbers in Scientific Notation",
        instruction: "Draw a line matching each decimal to its scientific notation.",
        left: ["0.0045","0.00000072","0.083","0.00031","0.000000009"],
        right: ["4.5 x 10^-3","7.2 x 10^-7","8.3 x 10^-2","3.1 x 10^-4","9.0 x 10^-9"],
      },
      {
        type: "circle-correct",
        title: "Is It Scientific Notation?",
        instruction: "Circle YES if the number is correctly written in scientific notation, or NO if it is not.",
        questions: [
          { prompt: "4.5 x 10^3", options: ["YES","NO"] },
          { prompt: "45 x 10^2", options: ["YES","NO"] },
          { prompt: "0.9 x 10^5", options: ["YES","NO"] },
          { prompt: "1.0 x 10^-3", options: ["YES","NO"] },
          { prompt: "12.3 x 10^6", options: ["YES","NO"] },
        ],
      },
      {
        type: "open-response",
        title: "Converting to Scientific Notation",
        instruction: "Write each number in scientific notation. Remember: a x 10^n where 1 <= a < 10.",
        prompts: [
          { text: "Earth's mass: 5,970,000,000,000,000,000,000,000 kg", type: "lines", lines: 2 },
          { text: "Width of a human hair: 0.00007 m", type: "lines", lines: 2 },
          { text: "Speed of light: 300,000,000 m/s", type: "lines", lines: 2 },
          { text: "Diameter of a hydrogen atom: 0.000000000106 m", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Converting from Scientific Notation",
        instruction: "Write each number in standard (decimal) form.",
        prompts: [
          { text: "6.022 x 10^23 (Avogadro number)", type: "lines", lines: 2 },
          { text: "1.6 x 10^-19 (charge of an electron in coulombs)", type: "lines", lines: 2 },
          { text: "9.46 x 10^15 (one light-year in metres)", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Calculating with Scientific Notation",
        instruction: "Solve these calculations. Write your answer in scientific notation.",
        prompts: [
          { text: "(3 x 10^4) x (2 x 10^3) = ", type: "lines", lines: 2 },
          { text: "(8 x 10^6) / (4 x 10^2) = ", type: "lines", lines: 2 },
          { text: "(5 x 10^-3) x (4 x 10^-2) = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Order from Smallest to Largest",
        instruction: "Sort these numbers from smallest (1st) to largest (5th).",
        columns: ["1st (smallest)","2nd","3rd","4th","5th (largest)"],
        items: [
          {"label":"3.2 x 10^4"},
          {"label":"5.0 x 10^-2"},
          {"label":"7.1 x 10^6"},
          {"label":"2.8 x 10^4"},
          {"label":"9.9 x 10^-5"},
        ],
      },
      {
        type: "open-response",
        title: "Real-World Application",
        instruction: "Use scientific notation to answer this question.",
        prompts: [
          { text: "The distance from Earth to the Sun is 1.5 x 10^11 metres. Light travels at 3 x 10^8 m/s. How many seconds does it take for light to travel from the Sun to Earth? Show your working.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Multiplying Numbers in Scientific Notation",
        instruction: "Multiply the following numbers. Multiply the front numbers and add the exponents. Write answers in correct scientific notation.",
        prompts: [
          { text: "(2 x 10^4) x (3 x 10^5) = ", type: "lines", lines: 3 },
          { text: "(1.5 x 10^3) x (4 x 10^2) = ", type: "lines", lines: 3 },
          { text: "(6 x 10^-2) x (5 x 10^-4) = ", type: "lines", lines: 3 },
          { text: "(2.5 x 10^6) x (4 x 10^3) = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Dividing Numbers in Scientific Notation",
        instruction: "Divide the following numbers. Divide the front numbers and subtract the exponents. Write answers in correct scientific notation.",
        prompts: [
          { text: "(9 x 10^8) / (3 x 10^5) = ", type: "lines", lines: 3 },
          { text: "(6 x 10^6) / (2 x 10^-2) = ", type: "lines", lines: 3 },
          { text: "(7.5 x 10^9) / (2.5 x 10^4) = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Adding Numbers in Scientific Notation",
        instruction: "To add numbers in scientific notation, first convert them to the same power of 10, then add the front numbers. Example: 3 x 10^4 + 2 x 10^3 = 30 x 10^3 + 2 x 10^3 = 32 x 10^3 = 3.2 x 10^4.",
        prompts: [
          { text: "5 x 10^5 + 3 x 10^4 = ", type: "lines", lines: 4 },
          { text: "2.4 x 10^6 + 6 x 10^5 = ", type: "lines", lines: 4 },
          { text: "8 x 10^-3 + 4 x 10^-4 = ", type: "lines", lines: 4 },
        ],
      },
      {
        type: "matching",
        title: "Scientific Notation in Context",
        instruction: "Draw a line matching each scientific fact to its value in scientific notation.",
        left: ["Mass of Earth (kg)","Diameter of a red blood cell (m)","Number of seconds in a year (approx)","Charge of an electron (coulombs)"],
        right: ["6.0 x 10^24","8.0 x 10^-6","3.15 x 10^7","1.6 x 10^-19"],
      },
      {
        type: "circle-correct",
        title: "Correct Scientific Notation After Calculation",
        instruction: "A student calculates and gets the answers below. Circle YES if they correctly expressed the answer in scientific notation, NO if they need to adjust.",
        questions: [
          { prompt: "Answer: 0.5 x 10^4", options: ["YES -- correct","NO -- should be 5 x 10^3"] },
          { prompt: "Answer: 12 x 10^5", options: ["YES -- correct","NO -- should be 1.2 x 10^6"] },
          { prompt: "Answer: 7.8 x 10^-2", options: ["YES -- correct","NO -- should be 78 x 10^-3"] },
        ],
      },
      {
        type: "home-activity",
        title: "Scientific Notation in the Real World",
        instruction: "Explore large and small numbers in everyday science.",
        suggestions: [
          "Find three large scientific measurements (e.g. distances in space, national debt) and write them in scientific notation.",
          "Look up the size of a virus (in nanometres or metres) and write it in scientific notation. How does it compare to the diameter of a human hair?",
          "Use a calculator to compute (6.022 x 10^23) x (1.6 x 10^-19). Describe what these two numbers represent in science.",
        ],
      },
    ],
  },

  {
    slug: "exponent-laws",
    title: "Exponent Laws",
    strand: "Number",
    description:
      "Apply the product, quotient, power of a power and zero index laws to numerical and algebraic expressions.",
    lesson: {
      title: "Exponent Laws with Negative and Zero Indices",
      objective: "Apply the product law, quotient law, power of a power law, zero index law, and negative index law to simplify numerical and algebraic expressions.",
      materials: [
        "Paper and pencil",
        "Calculator (for checking only)",
      ],
      intro: {
        title: "What Does a Negative Power Mean?",
        script: "You already know 2 to the 3 means 2 times 2 times 2 equals 8. But what does 2 to the negative 3 mean? Think about what happens as we count down the powers: 2 to the 3 is 8, 2 to the 2 is 4, 2 to the 1 is 2, 2 to the 0 is 1 (because dividing by 2 each time). One more step: 2 to the negative 1 is one half. 2 to the negative 2 is one quarter. So a negative exponent means take the reciprocal. 2 to the negative 3 equals 1 over 2 cubed, which is 1 over 8. And anything to the power zero equals 1 — because you have divided by that base as many times as you multiplied.",
        action: "Write on paper: 2^3 = 8, 2^2 = 4, 2^1 = 2, 2^0 = 1, 2^-1 = 1/2, 2^-2 = 1/4, 2^-3 = 1/8. Draw a downward arrow and write 'divide by 2 each step'. Confirm that a^-n = 1/a^n. Write the general rule and a few examples.",
      },
      mainActivity: {
        title: "All Five Laws",
        script: "Let me write all five laws and do an example of each. Product law: x cubed times x to the 5 equals x to the 8 — add the exponents. Quotient law: x to the 7 divided by x to the 3 equals x to the 4 — subtract the exponents. Power of a power: open bracket x squared close bracket to the 4 equals x to the 8 — multiply the exponents. Zero index: x to the 0 equals 1. Negative index: x to the negative 2 equals 1 over x squared. Now you simplify: m to the 5 times m to the 3. Then n to the 9 divided by n to the 4. Then open bracket p squared close bracket to the 4. Then 3 to the negative 2.",
        action: "Write all five laws with examples on paper. Child works the four practice problems: m^8, n^5, p^8, and 3^-2 = 1/9. For the more complex ones, try: 3x^2 times 4x^3 (multiply coefficients, add exponents: 12x^5) and (2a^3)^2 (square the 2, double the exponent: 4a^6). Emphasise: the exponent law applies to the variable; coefficients follow normal arithmetic.",
      },
      wrapUp: {
        title: "Mixed Simplification",
        script: "Simplify this: (3x squared y) times (2x cubed y to the 4). Tell me what you multiply first, then how you handle the exponents.",
        action: "Child works: 3 x 2 = 6 (coefficients), x^2 x x^3 = x^5 (add exponents), y x y^4 = y^5. Answer: 6x^5 y^5. If they hesitate on the coefficients, remind them: coefficients are just numbers, they multiply normally. Once they can handle a multi-variable expression fluently, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Name That Law",
        instruction: "Draw a line from each example to the exponent law it demonstrates.",
        left: ["a^3 x a^4 = a^7","a^6 / a^2 = a^4","(a^3)^2 = a^6","a^0 = 1","a^-2 = 1/a^2"],
        right: ["Product law","Quotient law","Power of a power law","Zero index law","Negative index law"],
      },
      {
        type: "circle-correct",
        title: "Apply the Product Law",
        instruction: "Circle the correct simplified form for each expression (a^m x a^n = a^(m+n)).",
        questions: [
          { prompt: "x^3 x x^5", options: ["x^8","x^15","x^2"] },
          { prompt: "2^3 x 2^4", options: ["2^12","2^7","4^7"] },
          { prompt: "y^2 x y x y^3", options: ["y^6","y^5","y^7"] },
          { prompt: "3^2 x 3^3", options: ["9^5","3^6","3^5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Apply the Quotient Law",
        instruction: "Circle the correct simplified form (a^m / a^n = a^(m-n)).",
        questions: [
          { prompt: "x^7 / x^3", options: ["x^4","x^10","x^21"] },
          { prompt: "2^5 / 2^2", options: ["2^3","2^10","1^3"] },
          { prompt: "a^8 / a^8", options: ["a^0 = 1","a^64","a^16"] },
        ],
      },
      {
        type: "open-response",
        title: "Simplify Using Index Laws",
        instruction: "Simplify each expression. Show the law you are using.",
        prompts: [
          { text: "m^5 x m^3 = ", type: "lines", lines: 2 },
          { text: "n^9 / n^4 = ", type: "lines", lines: 2 },
          { text: "(p^2)^4 = ", type: "lines", lines: 2 },
          { text: "3x^2 x 4x^3 = ", type: "lines", lines: 2 },
          { text: "(2a^3)^2 = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Negative and Zero Indices",
        instruction: "Evaluate or simplify. Write fractions where necessary.",
        prompts: [
          { text: "5^0 = ", type: "lines", lines: 1 },
          { text: "3^-2 = ", type: "lines", lines: 2 },
          { text: "2^-3 = ", type: "lines", lines: 2 },
          { text: "x^-1 written as a fraction:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Group by Index Law Used",
        instruction: "Sort each expression into the correct column according to the law needed.",
        columns: ["Product Law","Quotient Law","Power of Power"],
        items: [
          {"label":"a^4 x a^2"},
          {"label":"(b^3)^5"},
          {"label":"c^6 / c^2"},
          {"label":"d^2 x d^7"},
          {"label":"(e^4)^3"},
          {"label":"f^8 / f^3"},
        ],
      },
      {
        type: "open-response",
        title: "Mixed Index Law Challenge",
        instruction: "Simplify each expression fully. Show all steps.",
        prompts: [
          { text: "(3x^2 y)(2x^3 y^4) = ", type: "lines", lines: 3 },
          { text: "12a^6 b^4 / (4a^2 b) = ", type: "lines", lines: 3 },
          { text: "(2m^3)^3 / m^5 = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Index Laws in the Real World",
        instruction: "Try these index law investigations at home.",
        suggestions: [
          "Research how computer storage (bytes, kilobytes, megabytes, gigabytes) uses powers of 2. Write each unit as an index expression.",
          "Create your own set of 3 simplify-me questions using the product law, then swap with a family member to solve.",
          "Write the current year as a product of prime factors using index notation.",
        ],
      },
      {
        type: "open-response",
        title: "Index Laws with Variables -- Product and Quotient",
        instruction: "Apply the product and quotient laws to these variable expressions. Show the law you use.",
        prompts: [
          { text: "x^3 x x^5 = ", type: "lines", lines: 2 },
          { text: "y^8 / y^3 = ", type: "lines", lines: 2 },
          { text: "a^4 x a^-2 = ", type: "lines", lines: 2 },
          { text: "b^5 / b^-1 = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Negative Exponents with Variables",
        instruction: "Write each expression without negative exponents (as a fraction).",
        prompts: [
          { text: "x^-3 = ", type: "lines", lines: 1 },
          { text: "3y^-2 = ", type: "lines", lines: 2 },
          { text: "a^-1 b^2 = ", type: "lines", lines: 2 },
          { text: "(2x)^-2 = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Fractional Bases",
        instruction: "Evaluate each expression. Write as a fraction or decimal.",
        prompts: [
          { text: "(1/2)^3 = ", type: "lines", lines: 2 },
          { text: "(3/4)^2 = ", type: "lines", lines: 2 },
          { text: "(2/3)^3 = ", type: "lines", lines: 2 },
          { text: "(1/5)^2 = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Comparing Exponential Expressions",
        instruction: "Without a calculator, circle the greater expression in each pair.",
        questions: [
          { prompt: "2^10 or 10^2?", options: ["2^10 is greater","10^2 is greater","They are equal"] },
          { prompt: "3^-1 or 3^0?", options: ["3^-1 is greater","3^0 is greater","They are equal"] },
          { prompt: "(1/2)^2 or (1/3)^2?", options: ["(1/2)^2 is greater","(1/3)^2 is greater","They are equal"] },
          { prompt: "5^2 or 2^5?", options: ["5^2 is greater","2^5 is greater","They are equal"] },
        ],
      },
      {
        type: "sequence",
        title: "Continuing Exponential Sequences",
        instruction: "Find the next two terms in each sequence. Use index laws to explain the pattern.",
        sequences: [
          { items: [2, 4, 8, 16], answer: [32, 64] },
          { items: [81, 27, 9, 3], answer: [1, 0.333] },
          { items: [1, 5, 25, 125], answer: [625, 3125] },
        ],
      },
    ],
  },

  {
    slug: "expand-binomial-products",
    title: "Expanding Binomial Products",
    strand: "Algebra",
    description:
      "Use the distributive law (FOIL) to expand products of two binomial expressions, including difference of two squares and perfect squares.",
    lesson: {
      title: "Expanding Binomial Products",
      objective: "Use FOIL and the distributive law to expand products of two brackets, and recognise the patterns for perfect squares and difference of two squares.",
      materials: [
        "Paper and pencil",
        "Ruler (to draw an area model if helpful)",
      ],
      intro: {
        title: "An Area Model",
        script: "Imagine a rectangle with width (x plus 3) and length (x plus 4). The area must equal length times width. Draw the rectangle and cut it into four smaller pieces: one x by x piece (area x squared), one x by 4 piece (area 4x), one 3 by x piece (area 3x), and one 3 by 4 piece (area 12). Adding them: x squared plus 4x plus 3x plus 12, which simplifies to x squared plus 7x plus 12. This is exactly what we get when we expand (x plus 3) times (x plus 4) using the FOIL method: First, Outer, Inner, Last.",
        action: "Draw the rectangle on paper with labelled dimensions (x+3) and (x+4). Shade four sub-rectangles and label their areas. Write the expansion alongside: (x+3)(x+4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12. Label each term: First (x times x), Outer (x times 4), Inner (3 times x), Last (3 times 4).",
      },
      mainActivity: {
        title: "FOIL and Special Cases",
        script: "Let me do one more general expansion, then show you two important patterns. Expand (x minus 4) times (x plus 2): First is x squared, Outer is 2x, Inner is negative 4x, Last is negative 8. Collect like terms: x squared minus 2x minus 8. Now the patterns. Perfect square: (x plus 3) squared means (x plus 3) times (x plus 3). Using FOIL: x squared plus 3x plus 3x plus 9 equals x squared plus 6x plus 9. Notice the pattern: square the first, double the product, square the last. Difference of two squares: (x plus 5) times (x minus 5). The outer and inner terms cancel: x squared minus 25. Once you know these patterns, you can expand faster. Now you expand: (x plus 2) times (x minus 9).",
        action: "Child expands (x+2)(x-9): x^2 - 9x + 2x - 18 = x^2 - 7x - 18. Then try: expand (x+5)^2 using the perfect square pattern (answer: x^2 + 10x + 25) and (x+6)(x-6) using difference of two squares (answer: x^2 - 36). Check all three and confirm they used the correct pattern for the last two.",
      },
      wrapUp: {
        title: "Spot the Pattern",
        script: "I will give you three expressions. Without doing full FOIL, can you identify which is a perfect square and which is difference of two squares, and write the answer directly? Open bracket x plus 10 close bracket squared. Then (x plus 7) times (x minus 7). Then (x minus 4) times (x plus 2).",
        action: "Child should answer: (x+10)^2 = x^2 + 20x + 100 (perfect square), (x+7)(x-7) = x^2 - 49 (difference of squares), (x-4)(x+2) = x^2 - 2x - 8 (general FOIL). Once they can identify the pattern first, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Match the Expansion",
        instruction: "Draw a line from each binomial product to its expanded form.",
        left: ["(x + 2)(x + 3)","(x + 4)(x - 1)","(x - 3)(x - 2)","(x + 5)(x - 5)","(x + 3)^2"],
        right: ["x^2 + 5x + 6","x^2 + 3x - 4","x^2 - 5x + 6","x^2 - 25","x^2 + 6x + 9"],
      },
      {
        type: "circle-correct",
        title: "Identify the Correct Expansion",
        instruction: "Circle the correct expansion for each binomial product.",
        questions: [
          { prompt: "(x + 3)(x + 5)", options: ["x^2 + 8x + 15","x^2 + 15x + 8","x^2 + 8x + 8"] },
          { prompt: "(x - 4)(x + 2)", options: ["x^2 + 2x - 8","x^2 - 2x - 8","x^2 - 6x - 8"] },
          { prompt: "(x - 6)(x - 1)", options: ["x^2 - 5x + 6","x^2 - 7x + 6","x^2 + 7x - 6"] },
          { prompt: "(2x + 1)(x + 3)", options: ["2x^2 + 7x + 3","2x^2 + 6x + 3","3x^2 + 7x + 3"] },
        ],
      },
      {
        type: "open-response",
        title: "Expand Using FOIL",
        instruction: "Expand each product using FOIL (First, Outer, Inner, Last). Show all four terms before collecting like terms.",
        prompts: [
          { text: "(x + 4)(x + 7) = ", type: "lines", lines: 3 },
          { text: "(x + 2)(x - 9) = ", type: "lines", lines: 3 },
          { text: "(x - 5)(x - 3) = ", type: "lines", lines: 3 },
          { text: "(x - 8)(x + 8) = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Perfect Squares",
        instruction: "Expand these perfect square expressions. Use the identity (a + b)^2 = a^2 + 2ab + b^2.",
        prompts: [
          { text: "(x + 5)^2 = ", type: "lines", lines: 3 },
          { text: "(x - 4)^2 = ", type: "lines", lines: 3 },
          { text: "(x + 10)^2 = ", type: "lines", lines: 3 },
          { text: "(2x + 3)^2 = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Difference of Two Squares",
        instruction: "Expand these using (a + b)(a - b) = a^2 - b^2.",
        prompts: [
          { text: "(x + 6)(x - 6) = ", type: "lines", lines: 2 },
          { text: "(x + 9)(x - 9) = ", type: "lines", lines: 2 },
          { text: "(2x + 5)(2x - 5) = ", type: "lines", lines: 2 },
          { text: "(3x + 4)(3x - 4) = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Mixed Expansion Challenge",
        instruction: "Expand and simplify each expression fully.",
        prompts: [
          { text: "(x + 3)(x - 3) + x^2 = ", type: "lines", lines: 3 },
          { text: "2(x + 1)(x + 4) = ", type: "lines", lines: 3 },
          { text: "(x + 2)^2 - (x - 2)^2 = ", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Geometric Area Model",
        instruction: "A rectangle has side lengths (x + 4) cm and (x + 3) cm.",
        prompts: [
          { text: "Write an expression for the area as a binomial product.", type: "lines", lines: 2 },
          { text: "Expand your expression to find the area as a trinomial.", type: "lines", lines: 3 },
          { text: "If x = 5, what is the area of the rectangle in cm squared?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Binomial Expansion in Design",
        instruction: "Try these real-world expansion activities at home.",
        suggestions: [
          "Draw a square with side length (x + 3) on grid paper. Shade the four regions that match (x + 3)^2 = x^2 + 6x + 9.",
          "Ask a family member to choose a two-digit number. Use difference of two squares to mentally calculate: e.g. 19 x 21 = (20-1)(20+1) = 399.",
        ],
      },
      {
        type: "open-response",
        title: "FOIL Method Practice",
        instruction: "Use FOIL to expand each product. Label each step: F (First), O (Outer), I (Inner), L (Last).",
        prompts: [
          { text: "(x + 6)(x + 2): F = ___, O = ___, I = ___, L = ___, Answer = ", type: "lines", lines: 3 },
          { text: "(x - 3)(x + 7): F = ___, O = ___, I = ___, L = ___, Answer = ", type: "lines", lines: 3 },
          { text: "(2x + 4)(x - 5): F = ___, O = ___, I = ___, L = ___, Answer = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Expanding (a + b)^2",
        instruction: "Use the identity (a + b)^2 = a^2 + 2ab + b^2 to expand. State a and b for each.",
        prompts: [
          { text: "(x + 7)^2: a = ___, b = ___, expansion = ", type: "lines", lines: 2 },
          { text: "(x + 12)^2: a = ___, b = ___, expansion = ", type: "lines", lines: 2 },
          { text: "(3x + 2)^2: a = ___, b = ___, expansion = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Expanding (a - b)^2",
        instruction: "Use the identity (a - b)^2 = a^2 - 2ab + b^2 to expand.",
        prompts: [
          { text: "(x - 7)^2 = ", type: "lines", lines: 2 },
          { text: "(x - 11)^2 = ", type: "lines", lines: 2 },
          { text: "(2x - 5)^2 = ", type: "lines", lines: 2 },
          { text: "(4x - 3)^2 = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "matching",
        title: "Difference of Two Squares Pattern",
        instruction: "Draw a line matching each product of the form (a + b)(a - b) to its expanded form a^2 - b^2.",
        left: ["(x + 4)(x - 4)","(x + 11)(x - 11)","(2x + 7)(2x - 7)","(5x + 1)(5x - 1)"],
        right: ["x^2 - 16","x^2 - 121","4x^2 - 49","25x^2 - 1"],
      },
      {
        type: "open-response",
        title: "Mixed Binomial Expansion with Negatives",
        instruction: "Expand and simplify, taking care with negative signs.",
        prompts: [
          { text: "(x - 4)(x - 9) = ", type: "lines", lines: 3 },
          { text: "(-x + 3)(x + 3) = ", type: "lines", lines: 3 },
          { text: "(x - 8)^2 = ", type: "lines", lines: 3 },
          { text: "(3 - x)(3 + x) = ", type: "lines", lines: 2 },
        ],
      },
    ],
  },

  {
    slug: "factorise-monic-quadratics",
    title: "Factorising Monic Quadratic Expressions",
    strand: "Algebra",
    description:
      "Factorise monic quadratic expressions of the form x^2 + bx + c by finding two integers that multiply to c and add to b.",
    lesson: {
      title: "Factorising Monic Quadratic Expressions",
      objective: "Factorise quadratic expressions of the form x squared plus bx plus c by finding two integers that multiply to c and add to b.",
      materials: [
        "Paper and pencil",
      ],
      intro: {
        title: "Reversing the Expansion",
        script: "Last session we expanded (x plus 3) times (x plus 4) and got x squared plus 7x plus 12. Today we do that in reverse — we start with x squared plus 7x plus 12 and try to find the two brackets. This is called factorising. It is like working out what two numbers were multiplied together to make something. The trick: we need two numbers that multiply to give 12 (the last number) AND add to give 7 (the middle number). Think of factor pairs of 12: 1 and 12, 2 and 6, 3 and 4. Which pair adds to 7? Three and four! So x squared plus 7x plus 12 equals (x plus 3) times (x plus 4).",
        action: "Write x^2 + 7x + 12 on paper. List factor pairs of 12: (1, 12), (2, 6), (3, 4). Ask which pair adds to 7. Draw an arrow from (3, 4) to the answer: (x + 3)(x + 4). Verify by expanding: x^2 + 4x + 3x + 12 = x^2 + 7x + 12. Confirmed.",
      },
      mainActivity: {
        title: "Handling Signs",
        script: "Signs are the trickiest part. For x squared minus 5x plus 6: we need two numbers that multiply to positive 6 but add to negative 5. Both numbers must be negative! Factor pairs of positive 6: (-1, -6) — sum is -7. (-2, -3) — sum is -5. Yes! So the answer is (x minus 2) times (x minus 3). For x squared plus 3x minus 10: multiply to negative 10, add to positive 3. One positive, one negative: try (5, -2) — multiply to -10, add to 3. Yes! So (x plus 5) times (x minus 2). The rule: if c is positive, signs in the brackets are the same; if c is negative, signs are different. Now you factorise: x squared plus 8x plus 15.",
        action: "Child works x^2 + 8x + 15: factor pairs of 15 adding to 8 are 3 and 5. Answer: (x+3)(x+5). Verify by expanding. Then try x^2 - 9x + 18: both negative, multiply to 18, add to -9: (-3, -6). Answer: (x-3)(x-6). Check. Then x^2 + 3x - 18: different signs, multiply to -18, add to 3: (6, -3). Answer: (x+6)(x-3). Check.",
      },
      wrapUp: {
        title: "Solve a Quadratic",
        script: "If x squared plus 5x plus 4 equals zero, factorise the left side. What values of x make the expression equal to zero?",
        action: "Child factorises: (x+1)(x+4) = 0. Explains: if (x+1) = 0 then x = -1; if (x+4) = 0 then x = -4. These are the two solutions. Introduce the zero product property: if two things multiply to zero, at least one of them must be zero. Once they can find both solutions, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Find the Factor Pair",
        instruction: "Draw a line from each quadratic to its factorised form.",
        left: ["x^2 + 7x + 12","x^2 + 5x + 6","x^2 - 7x + 10","x^2 - x - 12","x^2 + x - 6"],
        right: ["(x + 3)(x + 4)","(x + 2)(x + 3)","(x - 2)(x - 5)","(x - 4)(x + 3)","(x - 2)(x + 3)"],
      },
      {
        type: "open-response",
        title: "Factor Pairs Table",
        instruction: "Find two integers that multiply to give c and add to give b, then write the factorised form.",
        prompts: [
          { text: "x^2 + 8x + 15: factors of 15 that add to 8 -> factorised form:", type: "lines", lines: 2 },
          { text: "x^2 + 2x - 8: factors of -8 that add to 2 -> factorised form:", type: "lines", lines: 2 },
          { text: "x^2 - 9x + 18: factors of 18 that add to -9 -> factorised form:", type: "lines", lines: 2 },
          { text: "x^2 - 4x - 21: factors of -21 that add to -4 -> factorised form:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Check the Factorisation",
        instruction: "Circle the correct factorised form. Expand your chosen option to verify.",
        questions: [
          { prompt: "x^2 + 6x + 8", options: ["(x + 2)(x + 4)","(x + 1)(x + 8)","(x + 3)(x + 3)"] },
          { prompt: "x^2 - 5x - 14", options: ["(x - 7)(x + 2)","(x + 7)(x - 2)","(x - 7)(x - 2)"] },
          { prompt: "x^2 - 10x + 25", options: ["(x - 5)(x - 5)","(x + 5)(x - 5)","(x - 5)(x + 5)"] },
        ],
      },
      {
        type: "open-response",
        title: "Factorise These Quadratics",
        instruction: "Factorise each expression fully. Check by expanding.",
        prompts: [
          { text: "x^2 + 11x + 28 = ", type: "lines", lines: 3 },
          { text: "x^2 - 6x + 9 = ", type: "lines", lines: 3 },
          { text: "x^2 + 3x - 18 = ", type: "lines", lines: 3 },
          { text: "x^2 - 13x + 42 = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Difference of Two Squares -- Factorised",
        instruction: "Factorise each expression using a^2 - b^2 = (a + b)(a - b).",
        prompts: [
          { text: "x^2 - 49 = ", type: "lines", lines: 2 },
          { text: "x^2 - 100 = ", type: "lines", lines: 2 },
          { text: "x^2 - 36 = ", type: "lines", lines: 2 },
          { text: "4x^2 - 9 = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Identify the Error",
        instruction: "Each factorisation below contains a mistake. Find and correct it.",
        prompts: [
          { text: "Student wrote: x^2 + 7x + 10 = (x + 5)(x + 3). What is wrong? Correct factorisation:", type: "lines", lines: 3 },
          { text: "Student wrote: x^2 - 4x - 12 = (x - 6)(x + 2). What is wrong? Correct factorisation:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Solving by Factorising",
        instruction: "Solve each equation by factorising, then use the zero product property.",
        prompts: [
          { text: "x^2 + 5x + 4 = 0 -> solutions: x = ___, x = ___", type: "lines", lines: 3 },
          { text: "x^2 - 7x + 6 = 0 -> solutions: x = ___, x = ___", type: "lines", lines: 3 },
          { text: "x^2 - x - 20 = 0 -> solutions: x = ___, x = ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problem: Area",
        instruction: "Solve this real-world problem using factorisation.",
        prompts: [
          { text: "A rectangular garden has area (x^2 + 8x + 15) m^2. If one side is (x + 3) m, what is the length of the other side? Show all working.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Finding Factor Pairs That Add and Multiply",
        instruction: "Find two integers p and q such that p x q = c and p + q = b for each quadratic x^2 + bx + c.",
        prompts: [
          { text: "x^2 + 9x + 20: Find p and q so that p x q = 20 and p + q = 9. p = ___, q = ___", type: "lines", lines: 2 },
          { text: "x^2 - 3x - 18: Find p and q so that p x q = -18 and p + q = -3. p = ___, q = ___", type: "lines", lines: 2 },
          { text: "x^2 - 10x + 24: Find p and q so that p x q = 24 and p + q = -10. p = ___, q = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Factorising Quadratics with a Negative Constant",
        instruction: "When c is negative, one factor is positive and one is negative. Factorise each expression.",
        prompts: [
          { text: "x^2 + 5x - 6 = ", type: "lines", lines: 3 },
          { text: "x^2 - 2x - 15 = ", type: "lines", lines: 3 },
          { text: "x^2 + x - 12 = ", type: "lines", lines: 3 },
          { text: "x^2 - 3x - 40 = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Difference of Two Squares -- Factorising",
        instruction: "Recognise and factorise each expression using a^2 - b^2 = (a + b)(a - b).",
        prompts: [
          { text: "x^2 - 64 = ", type: "lines", lines: 2 },
          { text: "x^2 - 81 = ", type: "lines", lines: 2 },
          { text: "9x^2 - 16 = ", type: "lines", lines: 2 },
          { text: "25x^2 - 4 = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Check Factorisation by Expanding Back",
        instruction: "For each factorised form, expand back to verify it matches the original expression.",
        prompts: [
          { text: "Claim: x^2 - 7x + 12 = (x - 3)(x - 4). Verify by expanding (x - 3)(x - 4):", type: "lines", lines: 3 },
          { text: "Claim: x^2 + 2x - 24 = (x + 6)(x - 4). Verify by expanding:", type: "lines", lines: 3 },
          { text: "Claim: x^2 - 25 = (x + 5)(x - 5). Verify by expanding:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Sign Error",
        instruction: "Circle the correct factorisation for each quadratic.",
        questions: [
          { prompt: "x^2 - 8x + 15", options: ["(x - 3)(x - 5)","(x + 3)(x - 5)","(x - 3)(x + 5)"] },
          { prompt: "x^2 + 4x - 12", options: ["(x + 6)(x - 2)","(x - 6)(x + 2)","(x + 4)(x - 3)"] },
          { prompt: "x^2 - 16", options: ["(x + 4)(x - 4)","(x - 4)(x - 4)","(x + 4)(x + 4)"] },
        ],
      },
    ],
  },

  {
    slug: "solve-quadratic-equations",
    title: "Solving Monic Quadratic Equations",
    strand: "Algebra",
    description:
      "Solve monic quadratic equations with integer roots algebraically by factorising and applying the zero product property.",
    lesson: {
      title: "Solving Monic Quadratic Equations",
      objective: "Solve quadratic equations by factorising and applying the zero product property, including equations that need rearranging first.",
      materials: [
        "Paper and pencil",
        "Calculator (for verifying solutions only)",
      ],
      intro: {
        title: "Two Solutions from One Equation",
        script: "Linear equations like 2x plus 3 equals 11 have exactly one solution. But quadratic equations — ones with x squared — can have two solutions. Here is why: if x squared equals 9, then x could be 3 (because 3 times 3 is 9) OR x could be negative 3 (because negative 3 times negative 3 is also 9). That gives two answers! The key method for solving quadratics is: factorise the left side, set each factor equal to zero, and solve each mini-equation. This works because if two things multiply to make zero, at least one of them MUST be zero.",
        action: "Write on paper: x^2 - 9 = 0. Factorise: (x+3)(x-3) = 0. Set each bracket to zero: x + 3 = 0 gives x = -3; x - 3 = 0 gives x = 3. Verify both: (-3)^2 - 9 = 0. (3)^2 - 9 = 0. Both work! This zero product property is the core of the method.",
      },
      mainActivity: {
        title: "Factorising to Solve",
        script: "Let me solve x squared minus 5x plus 6 equals 0 step by step. First, factorise: I need two numbers that multiply to 6 and add to -5. That is -2 and -3. So (x minus 2) times (x minus 3) equals 0. Apply zero product property: x minus 2 equals 0 gives x equals 2; x minus 3 equals 0 gives x equals 3. Check: put x equals 2 into the original — 4 minus 10 plus 6 equals 0. Correct. Sometimes the equation is not in the right form. For x squared equals 7x minus 10, rearrange first: x squared minus 7x plus 10 equals 0. Then factorise: (x minus 2) times (x minus 5) equals 0. Solutions: x equals 2 or x equals 5. Your turn: solve x squared plus 9x plus 20 equals 0.",
        action: "Child works: find factors of 20 adding to 9: 4 and 5. Factorise: (x+4)(x+5) = 0. Solutions: x = -4 or x = -5. Verify both. Then try: x^2 = 7x - 10 (rearrange to x^2 - 7x + 10 = 0, factorise to (x-2)(x-5) = 0, solutions x = 2 or x = 5). Verify both solutions each time.",
      },
      wrapUp: {
        title: "Word Problem",
        script: "The product of two consecutive integers is 56. If the smaller integer is n, then n times (n plus 1) equals 56. Expand that, rearrange to equal zero, factorise, and find both integers.",
        action: "Child writes: n(n+1) = 56, n^2 + n = 56, n^2 + n - 56 = 0. Factorise: (n+8)(n-7) = 0. Solutions: n = -8 or n = 7. Since we want consecutive integers, n = 7 gives 7 and 8 (check: 7 x 8 = 56). Once they can set up and solve from a word problem, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Solutions to Quadratics",
        instruction: "Draw a line from each equation to its pair of solutions.",
        left: ["x^2 - 5x + 6 = 0","x^2 + 7x + 12 = 0","x^2 - x - 12 = 0","x^2 - 9 = 0","x^2 - 6x = 0"],
        right: ["x = 2 or x = 3","x = -3 or x = -4","x = 4 or x = -3","x = 3 or x = -3","x = 0 or x = 6"],
      },
      {
        type: "circle-correct",
        title: "Check the Solution",
        instruction: "Circle the correct solution(s) for each equation.",
        questions: [
          { prompt: "x^2 - 10x + 21 = 0", options: ["x = 3 or x = 7","x = -3 or x = -7","x = 3 or x = -7"] },
          { prompt: "x^2 + 2x - 15 = 0", options: ["x = 5 or x = -3","x = -5 or x = 3","x = 5 or x = 3"] },
          { prompt: "x^2 - 16 = 0", options: ["x = 4 or x = -4","x = 4 only","x = 8 or x = -8"] },
        ],
      },
      {
        type: "open-response",
        title: "Solve by Factorising",
        instruction: "Solve each quadratic equation by factorising. Show all steps.",
        prompts: [
          { text: "x^2 + 9x + 20 = 0", type: "lines", lines: 4 },
          { text: "x^2 - 8x + 15 = 0", type: "lines", lines: 4 },
          { text: "x^2 + 3x - 28 = 0", type: "lines", lines: 4 },
          { text: "x^2 - 11x + 30 = 0", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Rearrange then Solve",
        instruction: "Rearrange each equation into the form x^2 + bx + c = 0 before factorising.",
        prompts: [
          { text: "x^2 + 4x = 12", type: "lines", lines: 4 },
          { text: "x^2 = 7x - 10", type: "lines", lines: 4 },
          { text: "x^2 - 5x = -6", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Verify Your Solutions",
        instruction: "Substitute each solution back into the original equation to verify.",
        prompts: [
          { text: "For x^2 - 7x + 12 = 0, you found x = 3 and x = 4. Verify both solutions:", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Problem Solving with Quadratics",
        instruction: "Set up and solve a quadratic equation for each problem.",
        prompts: [
          { text: "The product of two consecutive integers is 56. Let the smaller integer be n. Write and solve the quadratic equation to find both integers.", type: "lines", lines: 5 },
          { text: "A square has its length increased by 3 cm and its width decreased by 1 cm, giving an area of 40 cm^2. Let the original side length be x cm. Write and solve an equation to find x.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Graphical Connection",
        instruction: "Connect your algebra to the graph.",
        prompts: [
          { text: "If x^2 - 3x - 10 = 0 has solutions x = 5 and x = -2, what are the x-intercepts of the parabola y = x^2 - 3x - 10? Explain your reasoning.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Quadratic Equations at Home",
        instruction: "Investigate quadratics in everyday contexts.",
        suggestions: [
          "Look up how quadratic equations describe projectile motion (e.g. a ball thrown in the air). Write one example equation and describe what each variable represents.",
          "Create a number puzzle: I am thinking of two numbers. They multiply to 24 and add to 11. Give it to a family member and show how factorising solves it.",
        ],
      },
      {
        type: "open-response",
        title: "Null Factor Law Practice",
        instruction: "Use the null factor law: if A x B = 0, then A = 0 or B = 0. Find all solutions.",
        prompts: [
          { text: "(x + 1)(x - 6) = 0 -> x = ___ or x = ___", type: "lines", lines: 2 },
          { text: "(2x - 4)(x + 3) = 0 -> x = ___ or x = ___", type: "lines", lines: 2 },
          { text: "x(x - 9) = 0 -> x = ___ or x = ___", type: "lines", lines: 2 },
          { text: "(x - 5)^2 = 0 -> x = ___ (explain why there is only one solution)", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Checking Solutions by Substitution",
        instruction: "Substitute each claimed solution back into the equation to verify it is correct.",
        prompts: [
          { text: "Equation: x^2 - 6x + 8 = 0. Check x = 2: LHS = ___. Check x = 4: LHS = ___.", type: "lines", lines: 4 },
          { text: "Equation: x^2 + x - 12 = 0. Check x = 3: LHS = ___. Check x = -4: LHS = ___.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Forming Quadratics from Given Roots",
        instruction: "If x = p and x = q are the roots of a quadratic, then the equation is (x - p)(x - q) = 0. Write the quadratic equation for each pair of roots.",
        prompts: [
          { text: "Roots: x = 3 and x = 5. Equation: ", type: "lines", lines: 3 },
          { text: "Roots: x = -2 and x = 7. Equation: ", type: "lines", lines: 3 },
          { text: "Roots: x = -4 and x = -1. Equation: ", type: "lines", lines: 3 },
          { text: "Root: x = 6 (double root). Equation: ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems Leading to Quadratics",
        instruction: "Write a quadratic equation for each problem, solve it, and check your answer makes sense.",
        prompts: [
          { text: "A rectangle has a length 3 cm greater than its width. Its area is 40 cm^2. Let the width = x. Find the dimensions.", type: "lines", lines: 5 },
          { text: "The sum of a number and its square is 42. Find the number.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Solutions?",
        instruction: "Decide how many real solutions each equation has, without solving fully.",
        questions: [
          { prompt: "x^2 - 9 = 0", options: ["No solutions","One solution","Two solutions"] },
          { prompt: "x^2 + 4 = 0", options: ["No real solutions","One solution","Two solutions"] },
          { prompt: "(x - 3)^2 = 0", options: ["No solutions","One solution (x = 3)","Two solutions"] },
          { prompt: "x^2 - 5x + 6 = 0", options: ["No solutions","One solution","Two solutions"] },
        ],
      },
    ],
  },

  {
    slug: "distance-gradient-midpoint",
    title: "Distance, Gradient & Midpoint",
    strand: "Algebra",
    description:
      "Find the distance between two points, the gradient of a line segment, and the midpoint of a line segment on the Cartesian plane.",
    lesson: {
      title: "Distance, Gradient and Midpoint",
      objective: "Use the gradient formula, midpoint formula, and distance formula to describe line segments on the Cartesian plane.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Graph paper or lined paper to make a grid",
        "Calculator",
      ],
      intro: {
        title: "Walking Between Two Points",
        script: "Imagine two towns on a map. Town A is at grid position (1, 2) and Town B is at position (7, 10). Three questions: how steep is the road between them (gradient), what is the exact halfway point (midpoint), and how far apart are they in a straight line (distance)? Gradient is a measure of steepness: how much you go up for every step you go right. Midpoint is simply the average of both coordinates. Distance uses Pythagoras because the straight line between two points is the hypotenuse of a right triangle.",
        action: "Draw a coordinate grid on paper. Plot A(1, 2) and B(7, 10). Draw the horizontal step (6 units right) and vertical step (8 units up). Ask: what is the rise over run? (8/6 = 4/3.) Mark the midpoint as ((1+7)/2, (2+10)/2) = (4, 6). The hypotenuse is the distance: sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10.",
      },
      mainActivity: {
        title: "Three Formulas",
        script: "Let me write all three formulas. Gradient: m equals y2 minus y1 divided by x2 minus x1. Midpoint: M equals the bracket of x1 plus x2 divided by 2, y1 plus y2 divided by 2 close bracket. Distance: d equals the square root of open bracket x2 minus x1 close bracket squared plus open bracket y2 minus y1 close bracket squared. Now apply them all to A(2, 4) and B(8, 10). Gradient: (10 - 4) divided by (8 - 2) equals 1. Midpoint: (5, 7). Distance: sqrt of 36 plus 36 equals sqrt of 72 equals 6 root 2. Now you do the same for P(0, 5) and Q(4, 1).",
        action: "Child works: gradient = (1-5)/(4-0) = -1; midpoint = (2, 3); distance = sqrt(16+16) = sqrt(32) = 4 sqrt(2). Check each formula. Common errors: subtracting coordinates in the wrong order for gradient (remind them: as long as they are consistent, either order works, as long as they subtract the same point from the other in both numerator and denominator).",
      },
      wrapUp: {
        title: "Tell Me What Each Number Means",
        script: "For the segment from A(1, 3) to B(5, 3), calculate the gradient, midpoint, and distance. Then tell me: what is special about this line based on the gradient you found?",
        action: "Child works: gradient = (3-3)/(5-1) = 0 (horizontal line), midpoint = (3, 3), distance = 4. Child should recognise that gradient = 0 means a horizontal line. Once they can interpret each result geometrically, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Match the Formula",
        instruction: "Draw a line from each concept to its correct formula.",
        left: ["Distance between two points","Midpoint of a segment","Gradient of a line"],
        right: ["d = sqrt[(x2-x1)^2 + (y2-y1)^2]","M = ((x1+x2)/2, (y1+y2)/2)","m = (y2 - y1) / (x2 - x1)"],
      },
      {
        type: "open-response",
        title: "Calculate the Gradient",
        instruction: "Use m = (y2 - y1) / (x2 - x1) to find the gradient of each line segment.",
        prompts: [
          { text: "A(1, 2) and B(3, 6):", type: "lines", lines: 3 },
          { text: "P(0, 5) and Q(4, 1):", type: "lines", lines: 3 },
          { text: "C(-2, 3) and D(4, 3):", type: "lines", lines: 3 },
          { text: "E(2, -1) and F(2, 7):", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Positive, Negative, Zero or Undefined?",
        instruction: "Circle the correct type of gradient for each line description.",
        questions: [
          { prompt: "A line going up from left to right", options: ["Positive","Negative","Zero","Undefined"] },
          { prompt: "A horizontal line", options: ["Positive","Negative","Zero","Undefined"] },
          { prompt: "A vertical line", options: ["Positive","Negative","Zero","Undefined"] },
          { prompt: "A line going down from left to right", options: ["Positive","Negative","Zero","Undefined"] },
        ],
      },
      {
        type: "open-response",
        title: "Calculate the Midpoint",
        instruction: "Find the midpoint of each segment using M = ((x1+x2)/2, (y1+y2)/2).",
        prompts: [
          { text: "A(2, 4) and B(8, 10):", type: "lines", lines: 3 },
          { text: "P(-3, 1) and Q(5, 7):", type: "lines", lines: 3 },
          { text: "C(0, 0) and D(6, -4):", type: "lines", lines: 3 },
          { text: "E(-5, -2) and F(3, 6):", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Calculate the Distance",
        instruction: "Use d = sqrt[(x2-x1)^2 + (y2-y1)^2] to find the exact distance.",
        prompts: [
          { text: "A(0, 0) and B(3, 4):", type: "lines", lines: 3 },
          { text: "P(1, 1) and Q(4, 5):", type: "lines", lines: 3 },
          { text: "C(-1, 2) and D(5, 10):", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Mixed Practice",
        instruction: "For the segment joining A(-2, 1) and B(4, 9), find each value.",
        prompts: [
          { text: "Gradient of AB:", type: "lines", lines: 3 },
          { text: "Midpoint of AB:", type: "lines", lines: 3 },
          { text: "Length of AB (exact surd form):", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Application: Map Coordinates",
        instruction: "A town map uses a grid. Answer the questions below.",
        prompts: [
          { text: "Town Hall is at (2, 3) and the Library is at (10, 9). Find the straight-line distance (leave as a surd if needed).", type: "lines", lines: 4 },
          { text: "A new bus stop will be placed at the midpoint between Town Hall and the Library. What are the coordinates of the bus stop?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Collinear Points Challenge",
        instruction: "Three points are collinear if the gradient between any two pairs is equal.",
        prompts: [
          { text: "Show whether A(1, 2), B(3, 6) and C(5, 10) are collinear by calculating gradients of AB and BC.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Gradient of Vertical and Horizontal Lines",
        instruction: "Calculate the gradient of each segment and describe the type of line.",
        prompts: [
          { text: "A(2, 5) and B(8, 5): gradient = ___, type of line = ", type: "lines", lines: 3 },
          { text: "P(3, 1) and Q(3, 9): gradient = ___, type of line = ", type: "lines", lines: 3 },
          { text: "Explain why the gradient of a vertical line is undefined.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Midpoint Formula Application",
        instruction: "Use the midpoint formula to solve each problem.",
        prompts: [
          { text: "The midpoint of AB is M(4, 7). Point A is at (2, 3). Find the coordinates of point B.", type: "lines", lines: 4 },
          { text: "A bridge is built between two points on opposite banks of a river: (10, 20) and (30, 40). At what coordinates is the midpoint of the bridge?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Distance Formula Word Problems",
        instruction: "Set up coordinates and use the distance formula to solve.",
        prompts: [
          { text: "Two friends live at positions A(3, 4) and B(9, 12) on a map grid where 1 unit = 1 km. How far apart do they live?", type: "lines", lines: 4 },
          { text: "Three cities are at P(0, 0), Q(6, 8) and R(6, 0). Find the perimeter of the triangle PQR.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identifying Gradient Properties",
        instruction: "Circle the correct statement about each pair of lines.",
        questions: [
          { prompt: "Line 1 has gradient 2. Line 2 has gradient 2.", options: ["The lines are parallel","The lines are perpendicular","The lines cross at the origin"] },
          { prompt: "A horizontal line has gradient:", options: ["0","Undefined","1"] },
          { prompt: "A vertical line has gradient:", options: ["0","Undefined","Infinity"] },
        ],
      },
      {
        type: "open-response",
        title: "All Three Measures -- Mixed Practice",
        instruction: "For each pair of points, calculate the gradient, midpoint and exact distance.",
        prompts: [
          { text: "A(0, 0) and B(5, 12): gradient = ___, midpoint = ___, distance = ___", type: "lines", lines: 4 },
          { text: "P(-3, 4) and Q(5, -2): gradient = ___, midpoint = ___, distance = ___", type: "lines", lines: 5 },
        ],
      },
    ],
  },

  {
    slug: "graphing-quadratic-functions",
    title: "Graphing Quadratic Functions",
    strand: "Algebra",
    description:
      "Sketch parabolas of the form y = ax^2 + bx + c, identify the vertex, axis of symmetry, and x- and y-intercepts.",
    lesson: {
      title: "Graphing Quadratic Functions",
      objective: "Identify the vertex, axis of symmetry, and intercepts of a parabola, and sketch its graph by plotting key points.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Graph paper or lined paper for a grid",
        "Calculator",
      ],
      intro: {
        title: "The Path of a Ball",
        script: "Have you ever watched a ball being thrown and noticed the curved path it takes? That path is a parabola — the shape of a quadratic function. Fireworks, satellite dishes, and suspension bridges all use parabolic shapes. The equation looks like y equals ax squared plus bx plus c, and the graph is always a U-shape or an upside-down U-shape depending on whether a is positive or negative. Today we are going to learn to identify the key features of a parabola and sketch one without needing to plot lots of points.",
        action: "Draw a simple parabola on paper — a smooth U-shape. Label the vertex (the turning point at the bottom), the axis of symmetry (the vertical line through the vertex), the x-intercepts (where it crosses the horizontal axis), and the y-intercept (where it crosses the vertical axis). Explain: the axis of symmetry is a mirror line — the parabola looks the same on both sides.",
      },
      mainActivity: {
        title: "Key Features Step by Step",
        script: "For y equals x squared minus 4: the y-intercept is when x equals 0, so y equals negative 4. The x-intercepts are when y equals 0: x squared equals 4, so x equals 2 or x equals negative 2. The vertex is at the midpoint of the x-intercepts: (0, -4). The axis of symmetry is x equals 0. Now for a harder one: y equals x squared minus 6x plus 8. First factorise: (x minus 2)(x minus 4). X-intercepts at x equals 2 and x equals 4. Axis of symmetry is halfway: x equals 3. Vertex y-value: substitute x equals 3: y equals 9 minus 18 plus 8 equals negative 1. Vertex is at (3, -1). Y-intercept: substitute x equals 0: y equals 8. Now you identify the features of y equals x squared plus 2x minus 3.",
        action: "Child works: factorise (x+3)(x-1), x-intercepts at x = -3 and x = 1, axis of symmetry x = -1, vertex: y = 1 - 2 - 3 = -4, vertex at (-1, -4), y-intercept at (0, -3). Have them sketch the parabola using these five key points. Check the sketch looks like a U-shape with the correct vertex and intercepts.",
      },
      wrapUp: {
        title: "The Projectile",
        script: "A ball is thrown upward and its height in metres after t seconds is h equals negative 5t squared plus 20t. What is the maximum height? And when does the ball hit the ground? Tell me your strategy before you calculate.",
        action: "Child identifies: x-intercepts (ground hits) when h = 0: -5t^2 + 20t = 0, -5t(t - 4) = 0, so t = 0 or t = 4. Maximum at t = 2 (midpoint), h = -5(4) + 20(2) = -20 + 40 = 20 m. Once they can find the vertex and intercepts of a real-world parabola, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Key Features Vocabulary",
        instruction: "Draw a line from each term to its correct description.",
        left: ["Vertex","Axis of symmetry","x-intercept(s)","y-intercept","Parabola"],
        right: ["The turning point -- highest or lowest point on the parabola","The vertical line passing through the vertex","The point(s) where the parabola crosses the x-axis","The value of y when x = 0","The U-shaped curve formed by a quadratic function"],
      },
      {
        type: "open-response",
        title: "Table of Values for y = x^2 - 4",
        instruction: "Complete the table of values for y = x^2 - 4.",
        prompts: [
          { text: "x = -3: y = ___\nx = -2: y = ___\nx = -1: y = ___\nx = 0:  y = ___\nx = 1:  y = ___\nx = 2:  y = ___\nx = 3:  y = ___", type: "lines", lines: 8 },
        ],
      },
      {
        type: "open-response",
        title: "Identify Key Features from the Rule",
        instruction: "For each parabola, state the y-intercept, x-intercepts and vertex.",
        prompts: [
          { text: "y = x^2 - 4:\nY-intercept: ___  X-intercepts: ___  Vertex: ___", type: "lines", lines: 4 },
          { text: "y = x^2 - 6x + 8:\nFactorise: ___  X-intercepts: ___  Axis of symmetry: x = ___  Vertex: ___", type: "lines", lines: 5 },
          { text: "y = x^2 + 2x - 3:\nFactorise: ___  X-intercepts: ___  Axis of symmetry: x = ___  Vertex: ___", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Features of y = x^2",
        instruction: "Circle the correct answer for each question about the basic parabola y = x^2.",
        questions: [
          { prompt: "The vertex of y = x^2 is at:", options: ["(0, 0)","(1, 0)","(0, 1)"] },
          { prompt: "The parabola y = x^2 opens:", options: ["Upward","Downward","Sideways"] },
          { prompt: "The axis of symmetry of y = x^2 is:", options: ["x = 0","y = 0","x = 1"] },
          { prompt: "For y = -x^2, the parabola:", options: ["Opens downward","Opens upward","Is a straight line"] },
        ],
      },
      {
        type: "open-response",
        title: "Effects of Parameter Variation",
        instruction: "Compare each parabola to y = x^2 and describe how it has changed.",
        prompts: [
          { text: "y = 2x^2:", type: "lines", lines: 2 },
          { text: "y = x^2 + 3:", type: "lines", lines: 2 },
          { text: "y = (x - 4)^2:", type: "lines", lines: 2 },
          { text: "y = -x^2:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Sketching Parabolas",
        instruction: "Sketch each parabola. Label the vertex, axis of symmetry and intercepts.",
        prompts: [
          { text: "y = x^2 - 9 (Hint: x-intercepts at x = +/-3, vertex at (0, -9))", type: "box" },
          { text: "y = x^2 + 4x + 3 (Hint: factorise first)", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Quadratic Word Problem",
        instruction: "Use a quadratic function to solve this problem.",
        prompts: [
          { text: "A ball is thrown upward and its height (in metres) after t seconds is h = -5t^2 + 20t. Find the maximum height and the time when the ball hits the ground. Show all working.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Identifying Vertex and Axis of Symmetry from a Graph",
        instruction: "Read the key features from each parabola description and record them.",
        prompts: [
          { text: "A parabola passes through (-4, 0) and (2, 0) and has its vertex between them. State the axis of symmetry (x = ___) and find the vertex x-coordinate.", type: "lines", lines: 3 },
          { text: "A parabola has axis of symmetry x = 3 and passes through (3, -5). State the vertex:", type: "lines", lines: 2 },
          { text: "For y = x^2 - 8x + 7, find the x-intercepts by factorising, then find the axis of symmetry and vertex.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Effect of Changing Coefficient a",
        instruction: "Circle the correct description for each change to the coefficient a in y = ax^2.",
        questions: [
          { prompt: "Compared to y = x^2, the parabola y = 3x^2 is:", options: ["Narrower than y = x^2","Wider than y = x^2","The same width"] },
          { prompt: "Compared to y = x^2, the parabola y = 0.5x^2 is:", options: ["Narrower than y = x^2","Wider than y = x^2","Reflected"] },
          { prompt: "Compared to y = x^2, the parabola y = -2x^2:", options: ["Opens upward, narrower","Opens downward, narrower","Opens upward, wider"] },
          { prompt: "A larger value of a (e.g. a = 5 vs a = 1) makes the parabola:", options: ["Narrower","Wider","Shift up"] },
        ],
      },
      {
        type: "open-response",
        title: "Effect of Changing c -- Vertical Shift",
        instruction: "Compare each parabola to y = x^2 and describe the transformation.",
        prompts: [
          { text: "y = x^2 + 5 compared to y = x^2: vertex moves from (0, 0) to ___. The parabola shifts ___.", type: "lines", lines: 2 },
          { text: "y = x^2 - 3 compared to y = x^2: vertex moves to ___. The parabola shifts ___.", type: "lines", lines: 2 },
          { text: "Write a rule: changing c in y = x^2 + c causes the parabola to:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Sketching Parabolas from Tables of Values",
        instruction: "Complete the table of values and sketch the parabola. Label the vertex and axis of symmetry.",
        prompts: [
          { text: "y = x^2 + 2x - 8\nx = -4: y = ___\nx = -3: y = ___\nx = -1: y = ___\nx = 0: y = ___\nx = 1: y = ___\nx = 2: y = ___\nSketch and label vertex:", type: "box" },
        ],
      },
      {
        type: "sorting",
        title: "Match Parabola to Its Features",
        instruction: "Sort each equation into the correct column based on whether its vertex is at the origin, above the x-axis, or below the x-axis.",
        columns: ["Vertex at origin (0, 0)","Vertex above x-axis","Vertex below x-axis"],
        items: [
          {"label":"y = x^2"},
          {"label":"y = x^2 + 4"},
          {"label":"y = x^2 - 9"},
          {"label":"y = -x^2"},
          {"label":"y = x^2 + 1"},
          {"label":"y = x^2 - 5"},
        ],
      },
      {
        type: "home-activity",
        title: "Parabolas Around the Home",
        instruction: "Spot and investigate parabolic shapes in everyday life.",
        suggestions: [
          "Throw a ball across the room and photograph its path. Sketch the parabola and estimate where the vertex (highest point) is.",
          "Research how satellite dish shapes use parabolas. Draw a diagram showing how a signal reflects off the dish to a single focal point.",
          "Using graphing software or a graphics calculator, plot y = x^2, y = 2x^2 and y = 0.5x^2 on the same axes. Write two observations about how a affects the shape.",
        ],
      },
    ],
  },

  {
    slug: "trig-ratios-right-triangles",
    title: "Trigonometric Ratios in Right Triangles",
    strand: "Measurement",
    description:
      "Apply sin, cos and tan ratios to find unknown sides and angles in right-angled triangles, and use Pythagoras theorem as a prerequisite.",
    lesson: {
      title: "Trigonometric Ratios in Right Triangles",
      objective: "Use SOH CAH TOA to find unknown sides and angles in right-angled triangles, and apply inverse trig functions to find angles.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "Scientific calculator (with sin, cos, tan, and inverse functions)",
      ],
      intro: {
        title: "What Is the Angle of That Ramp?",
        script: "A wheelchair ramp rises 1 metre over a horizontal run of 6 metres. What angle does it make with the ground? Pythagoras can find a missing side but it cannot find an angle. For that we need trigonometry — the study of ratios in right-angled triangles. There are three ratios, and we remember them using the word SOH CAH TOA. Sin of an angle equals Opposite over Hypotenuse. Cos equals Adjacent over Hypotenuse. Tan equals Opposite over Adjacent. The adjacent side is next to the angle; the opposite side is across from it; the hypotenuse is always the longest side, across from the right angle.",
        action: "Draw a right-angled triangle on paper. Label the right angle, and choose one other angle to call theta. Label the three sides: hypotenuse (always opposite the right angle), opposite (across from theta), and adjacent (next to theta, not the hypotenuse). Write SOH CAH TOA in large letters. Practice labelling by drawing two or three more triangles with the angle in different positions.",
      },
      mainActivity: {
        title: "Finding Sides and Angles",
        script: "To find a missing side: write the ratio that involves your known angle, your known side, and your unknown side. For example: angle 30 degrees, hypotenuse 10 cm, find the opposite side. Use SOH: sin 30 = opposite over 10. Opposite = 10 times sin 30 = 10 times 0.5 = 5 cm. To find a missing angle: take the ratio of two known sides, then use the inverse function. Opposite is 6, hypotenuse is 12: sin theta = 6/12 = 0.5, so theta = sin inverse of 0.5 = 30 degrees. I will do one of each and then you do one of each. Your turn: find the opposite side when the angle is 45 degrees and the adjacent is 8 cm.",
        action: "For finding a side: child uses tan 45 = opposite/8, so opposite = 8 x tan 45 = 8 x 1 = 8 cm. For finding an angle: give opposite = 9, adjacent = 9, child calculates tan theta = 1, theta = tan inverse(1) = 45 degrees. Check both on the calculator. Make sure the child knows to use the degree mode on the calculator, not radians.",
      },
      wrapUp: {
        title: "The Ladder Problem",
        script: "A 6 metre ladder leans against a wall and makes a 60 degree angle with the ground. How high up the wall does it reach? Draw a diagram first, label the sides, then choose the correct trig ratio.",
        action: "Child draws the triangle: ladder is the hypotenuse (6 m), angle with ground is 60 degrees, unknown is the height (opposite). SOH: sin 60 = opposite/6, opposite = 6 x sin 60 = 6 x 0.866 = 5.20 m (to 2 decimal places). If they cannot label the diagram correctly, practise identifying opposite and adjacent for one more example before starting the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Label the Sides",
        instruction: "Draw a line matching each side label to its correct description, relative to angle theta.",
        left: ["Hypotenuse","Opposite","Adjacent"],
        right: ["The longest side -- always across from the right angle","The side across from angle theta","The side next to angle theta (not the hypotenuse)"],
      },
      {
        type: "matching",
        title: "SOH CAH TOA",
        instruction: "Draw a line from each trig ratio to its definition.",
        left: ["sin theta","cos theta","tan theta"],
        right: ["Opposite / Hypotenuse","Adjacent / Hypotenuse","Opposite / Adjacent"],
      },
      {
        type: "circle-correct",
        title: "Which Ratio to Use?",
        instruction: "Circle the correct trig ratio to use in each situation.",
        questions: [
          { prompt: "You know the opposite and hypotenuse and want to find angle theta.", options: ["sin theta","cos theta","tan theta"] },
          { prompt: "You know the adjacent side and want to find the hypotenuse. You also know angle theta.", options: ["sin theta","cos theta","tan theta"] },
          { prompt: "You know the opposite and adjacent sides and want to find angle theta.", options: ["sin theta","cos theta","tan theta"] },
        ],
      },
      {
        type: "open-response",
        title: "Exact Trig Values",
        instruction: "Complete the table of exact trigonometric values.",
        prompts: [
          { text: "sin 30 deg = ___  cos 30 deg = ___  tan 30 deg = ___\nsin 45 deg = ___  cos 45 deg = ___  tan 45 deg = ___\nsin 60 deg = ___  cos 60 deg = ___  tan 60 deg = ___", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Unknown Side",
        instruction: "Use a trig ratio to find the unknown side length (to 2 decimal places).",
        prompts: [
          { text: "In triangle ABC, angle A = 30 deg, hypotenuse = 10 cm. Find the opposite side.", type: "lines", lines: 4 },
          { text: "In triangle PQR, angle P = 45 deg, adjacent PQ = 8 cm. Find the hypotenuse PR.", type: "lines", lines: 4 },
          { text: "In triangle XYZ, angle X = 60 deg, adjacent XY = 5 cm. Find the opposite side YZ.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Find the Unknown Angle",
        instruction: "Use inverse trig (sin^-1, cos^-1 or tan^-1) to find the unknown angle (to the nearest degree).",
        prompts: [
          { text: "Opposite = 6 cm, Hypotenuse = 12 cm -> use sin^-1:", type: "lines", lines: 3 },
          { text: "Adjacent = 7 cm, Hypotenuse = 14 cm -> use cos^-1:", type: "lines", lines: 3 },
          { text: "Opposite = 9 cm, Adjacent = 9 cm -> use tan^-1:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Trig Problems",
        instruction: "Draw a diagram and use trigonometry to solve each problem.",
        prompts: [
          { text: "A ladder 6 m long leans against a wall making a 60 deg angle with the ground. How high up the wall does it reach? (To 2 decimal places.)", type: "lines", lines: 5 },
          { text: "From the top of a 15 m cliff, the angle of depression to a boat is 30 deg. How far from the base of the cliff is the boat?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Pythagoras Theorem Warm-Up",
        instruction: "Use a^2 + b^2 = c^2 to find the missing side (exact answers).",
        prompts: [
          { text: "a = 3, b = 4: c = ", type: "lines", lines: 2 },
          { text: "a = 5, c = 13: b = ", type: "lines", lines: 2 },
          { text: "a = 7, b = 24: c = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "matching",
        title: "Exact Trig Values -- 30, 45 and 60 Degrees",
        instruction: "Draw a line matching each trigonometric expression to its exact value.",
        left: ["sin 30 deg","cos 60 deg","tan 45 deg","sin 60 deg","cos 30 deg"],
        right: ["1/2","1/2","1","sqrt(3)/2","sqrt(3)/2"],
      },
      {
        type: "open-response",
        title: "Finding Angles Using Inverse Trigonometry",
        instruction: "Use sin^-1, cos^-1 or tan^-1 on your calculator to find angle theta (to the nearest degree).",
        prompts: [
          { text: "sin theta = 0.707. theta = ", type: "lines", lines: 2 },
          { text: "cos theta = 0.5. theta = ", type: "lines", lines: 2 },
          { text: "tan theta = 1.732. theta = ", type: "lines", lines: 2 },
          { text: "In a right triangle, opposite = 8 cm, hypotenuse = 16 cm. Find angle theta.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Angle of Elevation and Depression Problems",
        instruction: "Draw a diagram for each problem, label the angle, then use trigonometry to solve.",
        prompts: [
          { text: "From a point 30 m from the base of a building, the angle of elevation to the roof is 50 deg. How tall is the building? (To 2 decimal places.)", type: "lines", lines: 5 },
          { text: "An aeroplane at 2000 m altitude spots a runway at an angle of depression of 10 deg. How far is the plane horizontally from the runway?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choosing Which Trig Ratio to Use",
        instruction: "Circle the correct ratio to use in each scenario. Assume angle theta is known.",
        questions: [
          { prompt: "Known: hypotenuse and adjacent. Find: theta.", options: ["sin^-1","cos^-1","tan^-1"] },
          { prompt: "Known: angle theta and adjacent. Find: opposite.", options: ["sin theta","cos theta","tan theta"] },
          { prompt: "Known: angle theta and hypotenuse. Find: adjacent.", options: ["sin theta","cos theta","tan theta"] },
          { prompt: "Known: opposite and adjacent. Find: theta.", options: ["sin^-1","cos^-1","tan^-1"] },
        ],
      },
      {
        type: "open-response",
        title: "Bearings and Trig -- Challenge",
        instruction: "Solve this navigation problem using trigonometry.",
        prompts: [
          { text: "A ship travels 50 km due East, then 30 km due North. Draw a diagram. Calculate the straight-line distance from the starting point to the final position, and the angle from North (bearing) at which the ship finished.", type: "lines", lines: 6 },
        ],
      },
    ],
  },

  {
    slug: "surface-area-volume-prisms-cylinders",
    title: "Surface Area & Volume of Prisms and Cylinders",
    strand: "Measurement",
    description:
      "Calculate the surface area and volume of right prisms and cylinders, and solve practical problems involving these measures.",
    lesson: {
      title: "Surface Area and Volume of Prisms and Cylinders",
      objective: "Calculate the volume of rectangular prisms, triangular prisms, and cylinders, and find the total surface area by adding the areas of all faces.",
      materials: [
        "Paper and pencil",
        "Calculator",
        "A tin can from the kitchen (for the cylinder exploration)",
        "A rectangular box if available",
        "Ruler",
      ],
      intro: {
        title: "Wrapping a Tin Can",
        script: "Have you ever wrapped a present? Surface area is exactly that — the total area of all the outside surfaces of a 3D object. Grab that tin can. It has three surfaces: the circular top, the circular bottom, and the curved label that wraps around the side. If you unrolled the label, it would be a rectangle. Its width is the circumference of the circle, its height is the height of the can. So total surface area equals 2 times pi r squared (the two circles) plus 2 pi r h (the curved label). Volume is different — it is the space inside, and for cylinders it is pi r squared times h.",
        action: "Measure the tin can together: radius and height. Calculate the volume (pi x r^2 x h) and the total surface area (2 pi r^2 + 2 pi r h). Let the child use a calculator and write the steps. Also point out: the curved surface area alone is 2 pi r h (as on a tin can label).",
      },
      mainActivity: {
        title: "Prisms and Cylinders",
        script: "For a rectangular prism, volume is length times width times height, and surface area is 2 times (length times width, plus length times height, plus width times height) — that is the formula for the six rectangular faces. For a triangular prism, the volume is the cross-section area (one half base times height) times length. The surface area has five faces: two triangles plus three rectangles. Let me find the volume and surface area of a rectangular box that is 6 cm by 4 cm by 3 cm. Volume: 6 times 4 times 3 equals 72 cubic centimetres. Surface area: 2 times (24 plus 18 plus 12) equals 2 times 54 equals 108 square centimetres. Now you find the volume of a cylinder with radius 4 cm and height 10 cm.",
        action: "Child calculates: V = pi x 16 x 10 = 502.4 cm cubed (using pi approx 3.14). Then try surface area of the same cylinder: 2 x pi x 16 + 2 x pi x 4 x 10 = 100.48 + 251.2 = 351.68 cm squared. Check calculations. Emphasise: for surface area, always list all the faces first and count them.",
      },
      wrapUp: {
        title: "Which Holds More?",
        script: "Container A is a cylinder with radius 5 cm and height 8 cm. Container B is a cube with side 8 cm. Which holds more water? Calculate both volumes and tell me the difference.",
        action: "Child calculates: Cylinder V = pi x 25 x 8 = 628 cm cubed. Cube V = 8 x 8 x 8 = 512 cm cubed. Cylinder holds more by 116 cm cubed (roughly). Once they can compare and communicate their reasoning clearly, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Volume Formulae",
        instruction: "Draw a line from each solid to its volume formula.",
        left: ["Rectangular prism","Triangular prism","Cylinder"],
        right: ["V = l x w x h","V = (1/2) x b x h x l","V = pi x r^2 x h"],
      },
      {
        type: "circle-correct",
        title: "Choose the Correct Formula",
        instruction: "Circle the correct formula for each surface area calculation.",
        questions: [
          { prompt: "Total surface area of a cube with side length s", options: ["6s^2","4s^2","s^3"] },
          { prompt: "Curved surface area of a cylinder", options: ["2 pi r h","pi r^2 h","2 pi r^2"] },
          { prompt: "Total surface area of a cylinder", options: ["2 pi r^2 + 2 pi r h","pi r^2 + 2 pi r h","4 pi r^2"] },
        ],
      },
      {
        type: "open-response",
        title: "Volume of Rectangular Prisms",
        instruction: "Calculate the volume of each rectangular prism.",
        prompts: [
          { text: "l = 8 cm, w = 5 cm, h = 3 cm: V = ", type: "lines", lines: 2 },
          { text: "l = 12 m, w = 4 m, h = 2.5 m: V = ", type: "lines", lines: 2 },
          { text: "A cube with side 7 cm: V = ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Volume of Cylinders",
        instruction: "Calculate the volume of each cylinder. Use pi approx 3.14. Round to 2 decimal places.",
        prompts: [
          { text: "r = 4 cm, h = 10 cm: V = ", type: "lines", lines: 3 },
          { text: "Diameter = 6 m, h = 5 m: V = ", type: "lines", lines: 3 },
          { text: "r = 2.5 cm, h = 8 cm: V = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Surface Area of Rectangular Prisms",
        instruction: "Calculate the total surface area using SA = 2(lw + lh + wh).",
        prompts: [
          { text: "l = 6 cm, w = 4 cm, h = 3 cm: SA = ", type: "lines", lines: 3 },
          { text: "l = 10 m, w = 5 m, h = 2 m: SA = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Surface Area of Cylinders",
        instruction: "Calculate total surface area: SA = 2 pi r^2 + 2 pi r h. Use pi approx 3.14.",
        prompts: [
          { text: "r = 3 cm, h = 7 cm: SA = ", type: "lines", lines: 3 },
          { text: "r = 5 m, h = 12 m: SA = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Practical Problems",
        instruction: "Apply surface area and volume to solve these problems.",
        prompts: [
          { text: "A rectangular fish tank is 60 cm long, 30 cm wide and 40 cm tall. What volume of water (in litres) does it hold? (1 litre = 1000 cm^3)", type: "lines", lines: 4 },
          { text: "A cylindrical can has radius 4 cm and height 11 cm. A label wraps around the curved surface only. What is the area of the label? Use pi approx 3.14.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Challenge: Which Container Holds More?",
        instruction: "Compare volumes and decide which holds more. Show all calculations.",
        prompts: [
          { text: "Container A: cylinder, r = 5 cm, h = 8 cm. Container B: rectangular prism, 8 x 8 x 8 cm. Which holds more? By how much?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Surface Area of a Cylinder",
        instruction: "Calculate the total surface area of each cylinder using SA = 2 pi r^2 + 2 pi r h. Use pi approx 3.14.",
        prompts: [
          { text: "A tin can: r = 4 cm, h = 12 cm. Curved surface area = ___, Two circular ends = ___, Total SA = ___", type: "lines", lines: 4 },
          { text: "A storage drum: r = 0.5 m, h = 1.2 m. Total SA = ", type: "lines", lines: 4 },
          { text: "A pipe (open at both ends, no circular faces): r = 3 cm, h = 50 cm. Curved surface area only = ", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Volume of a Cone",
        instruction: "Use V = (1/3) pi r^2 h to find the volume of each cone. Use pi approx 3.14.",
        prompts: [
          { text: "r = 3 cm, h = 9 cm: V = ", type: "lines", lines: 3 },
          { text: "r = 5 m, h = 12 m: V = ", type: "lines", lines: 3 },
          { text: "An ice-cream cone has r = 2 cm and h = 10 cm. What is its volume? (Round to 1 decimal place.)", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Volumes",
        instruction: "Calculate the volume of each solid and compare them. Show all working.",
        prompts: [
          { text: "Cone A: r = 6 cm, h = 10 cm. Cylinder B: r = 6 cm, h = 10 cm. How many times does Cone A fit inside Cylinder B?", type: "lines", lines: 5 },
          { text: "Which has more volume: a cube with side 6 cm, or a cylinder with r = 3 cm and h = 8 cm? By how much?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Unit Conversions: cm^3 to Litres",
        instruction: "Convert each volume. Remember: 1 L = 1000 cm^3 and 1 mL = 1 cm^3.",
        prompts: [
          { text: "5000 cm^3 = ___ litres", type: "lines", lines: 1 },
          { text: "2.5 litres = ___ cm^3", type: "lines", lines: 1 },
          { text: "A tank holds 72,000 cm^3 of water. How many litres is this? If water costs $0.002 per litre, what does a full tank cost?", type: "lines", lines: 4 },
          { text: "A cylinder has r = 10 cm and h = 30 cm. Calculate its volume in cm^3 and then convert to litres.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "matching",
        title: "Solid Shapes and Their Formulae",
        instruction: "Draw a line from each solid to the correct volume formula.",
        left: ["Cube with side s","Triangular prism","Cylinder","Cone","Rectangular prism"],
        right: ["s^3","(1/2) b h l","pi r^2 h","(1/3) pi r^2 h","l x w x h"],
      },
    ],
  },

  {
    slug: "similarity-scale-enlargement",
    title: "Similarity, Scale & Enlargement",
    strand: "Space",
    description:
      "Solve problems involving ratio, similarity and scale in 2D situations, and apply the enlargement transformation to shapes and objects.",
    lesson: {
      title: "Similarity, Scale and Enlargement",
      objective: "Identify similar figures, calculate scale factors, find unknown sides using proportions, and apply enlargements using coordinate geometry.",
      materials: [
        "Paper and pencil",
        "Ruler",
        "A road map or local street map (physical or printed)",
      ],
      intro: {
        title: "Maps Are All About Scale",
        script: "Every map is a scaled-down version of a real place. If a map has a scale of 1 to 50,000, then 1 centimetre on the map represents 50,000 centimetres — or 500 metres — in real life. All the proportions are preserved exactly. Two shapes are similar when they have the same angles and their sides are all in the same ratio. That ratio is the scale factor. A scale factor of 3 means every length is 3 times bigger. A scale factor of one half means every length is halved. The angles in similar shapes always stay the same.",
        action: "If you have a map, find the scale bar. Measure the distance between two landmarks on the map with a ruler, then use the scale to calculate the real distance. Alternatively, draw two similar rectangles: one 2 x 3 cm and one 4 x 6 cm. Ask: what is the scale factor? (2.) Are the angles the same? (Yes, all rectangles have 90 degree angles.) Are the sides in the same ratio? (Yes, 2/4 = 3/6 = 1/2.)",
      },
      mainActivity: {
        title: "Scale Factors and Proportions",
        script: "In two similar triangles, all corresponding sides are in the same ratio. If Triangle A has sides 3, 4, 5 centimetres and Triangle B has the corresponding hypotenuse as 15 centimetres, the scale factor is 15 divided by 5 equals 3. So the other sides are 3 times 3 equals 9 and 4 times 3 equals 12. For enlargements on a coordinate grid, multiply every coordinate by the scale factor from the centre of enlargement. If the centre is the origin and the scale factor is 2, point (3, 4) maps to (6, 8). Now you find the scale factor and the missing side: Rectangle A is 4 cm by 6 cm, Rectangle B has one side of 10 cm. What is the scale factor and the missing side?",
        action: "Child works: scale factor = 10/4 = 2.5. Missing side = 6 x 2.5 = 15 cm. Then try an enlargement: Triangle has vertices at (1, 1), (3, 1), (3, 4). Enlarge by scale factor 2 from the origin. New vertices: (2, 2), (6, 2), (6, 8). Check by plotting both triangles on a grid.",
      },
      wrapUp: {
        title: "Shadow and Proportion",
        script: "A person who is 1.8 metres tall casts a shadow 2.4 metres long. At the same time, a tree casts a shadow 16 metres long. How tall is the tree? Set up a proportion and solve.",
        action: "Child writes: 1.8 / 2.4 = h / 16, so h = 1.8 x 16 / 2.4 = 28.8 / 2.4 = 12 metres. Discuss why this works: the two triangles (person plus shadow, tree plus shadow) are similar because the sun angle is the same. Once they can set up and solve the proportion, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Similarity Vocabulary",
        instruction: "Draw a line from each term to its correct definition.",
        left: ["Similar figures","Scale factor","Corresponding sides","Congruent figures","Enlargement"],
        right: ["Figures with the same shape but different size -- equal angles, proportional sides","The ratio by which all lengths are multiplied","Sides in the same relative position in similar figures","Figures with the same shape AND the same size","A transformation that increases or decreases a figure by a constant ratio"],
      },
      {
        type: "circle-correct",
        title: "Identify Similar Triangles",
        instruction: "Circle YES if the triangles could be similar, or NO if they cannot.",
        questions: [
          { prompt: "Triangle A: angles 40, 60, 80 deg. Triangle B: angles 40, 60, 80 deg.", options: ["YES -- similar (AA)","NO -- not similar"] },
          { prompt: "Triangle A: angles 30, 60, 90 deg. Triangle B: angles 45, 45, 90 deg.", options: ["YES -- similar","NO -- not similar"] },
          { prompt: "Triangle A: angles 50, 70, 60 deg. Triangle B: angles 50, 70, 60 deg.", options: ["YES -- similar (AA)","NO -- not similar"] },
        ],
      },
      {
        type: "open-response",
        title: "Find the Scale Factor",
        instruction: "Calculate the scale factor and the unknown length in each pair of similar figures.",
        prompts: [
          { text: "Rectangle A: 4 cm x 6 cm. Rectangle B: 10 cm x ___. Scale factor (A to B) = ___. Missing length = ___", type: "lines", lines: 3 },
          { text: "Triangle A: sides 3 cm, 4 cm, 5 cm. Triangle B: hypotenuse = 15 cm. Scale factor = ___. Other sides = ___, ___", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Using Scale to Find Measurements",
        instruction: "Use the given scale to answer each question.",
        prompts: [
          { text: "A map has a scale of 1 : 50,000. Two towns are 6 cm apart on the map. What is the real distance in kilometres?", type: "lines", lines: 3 },
          { text: "A model car is built to a scale of 1 : 20. The model is 22 cm long. What is the real length in metres?", type: "lines", lines: 3 },
          { text: "A house plan has a scale of 1 : 100. A room is 4.5 cm long on the plan. What is the real length in metres?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Enlargement on a Grid",
        instruction: "Apply the given scale factor (centre at the origin) and write the new vertices.",
        prompts: [
          { text: "Triangle A has vertices at (1, 1), (3, 1) and (3, 4). Enlarge by scale factor 2. New vertices:", type: "lines", lines: 3 },
          { text: "Rectangle B has vertices at (2, 2), (6, 2), (6, 4), (2, 4). Reduce by scale factor 1/2. New vertices:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Finding Unknown Sides Using Proportion",
        instruction: "Use ratios of corresponding sides to find the unknown length.",
        prompts: [
          { text: "Two similar triangles. Triangle 1: base = 4, height = 6. Triangle 2: base = 10. Find the height.", type: "lines", lines: 3 },
          { text: "Two similar pentagons. Pentagon 1: perimeter = 20 cm, one side = 5 cm. Pentagon 2: corresponding side = 8 cm. Find the perimeter of Pentagon 2.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Shadow and Height Problem",
        instruction: "Use similar triangles to solve this real-world problem.",
        prompts: [
          { text: "A 1.8 m tall person casts a shadow 2.4 m long. At the same time, a tree casts a shadow 16 m long. How tall is the tree? Show your working using a proportion.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "home-activity",
        title: "Similarity in the Real World",
        instruction: "Explore similarity around your home.",
        suggestions: [
          "Find an object at home (e.g. a photo). Measure it and draw a scaled-down version on paper using a scale of 1 : 5.",
          "Look at a map of your local area. Use the scale bar to calculate the real distance between two places you know.",
          "Use a measuring tape, a stick and shadow measurements to estimate the height of a tall tree using similar triangles.",
        ],
      },
      {
        type: "open-response",
        title: "Scale Factor for Area and Volume",
        instruction: "When a shape is enlarged by scale factor k, its area is multiplied by k^2 and its volume by k^3. Use this to solve each problem.",
        prompts: [
          { text: "A square has side 4 cm and area 16 cm^2. It is enlarged by scale factor 3. New side = ___, New area = ___, Check: 16 x 3^2 = ___", type: "lines", lines: 3 },
          { text: "A cube has volume 8 cm^3. It is enlarged by scale factor 2. New volume = ___", type: "lines", lines: 3 },
          { text: "Two similar rectangles have a scale factor of 5 (length to length). If the smaller has area 6 cm^2, what is the area of the larger?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Map Reading with Scale",
        instruction: "Use the given map scale to answer each question.",
        prompts: [
          { text: "Scale: 1 : 25,000. Two towns are 8 cm apart on the map. What is the real distance in metres? In kilometres?", type: "lines", lines: 3 },
          { text: "Scale: 1 : 200 (architect's plan). A room on the plan is 3.5 cm x 2 cm. What are the real dimensions in metres?", type: "lines", lines: 3 },
          { text: "Two cities are 240 km apart in real life. A map shows them 6 cm apart. Write the map's scale in the form 1 : n.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Similar Triangles -- Proof Conditions",
        instruction: "Two triangles are similar if they satisfy AA (Angle-Angle), SAS (Side-Angle-Side) or SSS (Side-Side-Side) similarity conditions. For each pair, state which condition applies (if any).",
        prompts: [
          { text: "Triangle A: angles 40 deg, 70 deg, 70 deg. Triangle B: angles 40 deg, 70 deg, 70 deg. Condition: ", type: "lines", lines: 2 },
          { text: "Triangle A: sides 4, 6, 8. Triangle B: sides 6, 9, 12. Condition: ", type: "lines", lines: 3 },
          { text: "Triangle A: sides 3 and 5, included angle 60 deg. Triangle B: sides 6 and 10, included angle 60 deg. Condition: ", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Enlargement on a Coordinate Grid",
        instruction: "Enlarge each shape from the given centre of enlargement by the scale factor shown. Write the new coordinates.",
        prompts: [
          { text: "Triangle with vertices A(1, 1), B(3, 1), C(2, 3). Scale factor 2, centre at origin. New vertices: A' = ___, B' = ___, C' = ___", type: "lines", lines: 3 },
          { text: "Rectangle with vertices P(2, 2), Q(4, 2), R(4, 6), S(2, 6). Scale factor 1/2, centre at origin. New vertices: P' = ___, Q' = ___, R' = ___, S' = ___", type: "lines", lines: 3 },
        ],
      },
    ],
  },

  {
    slug: "compound-events-probability",
    title: "Compound Events & Probability",
    strand: "Probability",
    description:
      "Determine the sample space for compound events, list outcomes using tables and tree diagrams, and assign probabilities to combined events.",
    lesson: {
      title: "Compound Events and Probability",
      objective: "List sample spaces for compound events using tables and tree diagrams, calculate probabilities of combined events, and apply the complementary event rule.",
      materials: [
        "Paper and pencil",
        "One coin",
        "One six-sided die",
      ],
      intro: {
        title: "How Many Ways?",
        script: "Flip a coin and roll a die at the same time. How many different outcomes are possible? The coin has 2 outcomes, the die has 6. Because each coin outcome can pair with each die outcome, there are 2 times 6 equals 12 outcomes total. This is called a compound event — two or more simple events happening together. Today we will list all outcomes systematically so we do not miss any, and then use those lists to calculate probabilities accurately. The complementary rule is also very handy: the probability of something NOT happening is 1 minus the probability of it happening.",
        action: "Actually flip a coin and roll a die a few times together. Record the outcomes. Then draw a systematic two-way table: rows for H and T, columns for 1 through 6. Fill in all 12 cells. Highlight: P(heads and even number) = 3/12 = 1/4.",
      },
      mainActivity: {
        title: "Tables, Tree Diagrams, and the Complement",
        script: "A tree diagram is another way to list all outcomes. For the coin-and-die experiment: draw 2 branches from the start (H or T), then 6 branches from each coin outcome for the die. Count the branch ends: 12. Now for a two-stage experiment without replacement, the branches change. A bag has one Red and one Blue marble. Draw one, then draw another without replacing. First draw: Red or Blue, each probability one half. If Red was drawn first, the second draw is Blue with probability 1 (only one marble left). If Blue was drawn first, the second draw is Red with probability 1. So the outcomes are (R, B) and (B, R) — no same-colour outcome is possible. For complementary events: P(not getting a 6) = 1 minus 1/6 = 5/6. Now you draw a tree diagram for a spinner with Red, Blue, Green spun twice.",
        action: "Child draws: 3 branches from start (R, B, G), then 3 more from each (R, B, G), giving 9 outcomes. Ask: P(Red then Blue) = 1/9. P(matching colours) = P(RR) + P(BB) + P(GG) = 3/9 = 1/3. P(not matching) = 1 - 1/3 = 2/3 (using complementary rule). Check they understand NOT means complementary.",
      },
      wrapUp: {
        title: "The Dice Problem",
        script: "Two 6-sided dice are rolled. Without drawing a full 36-outcome table, can you tell me: what is the probability that both dice show the same number? Use reasoning, not listing.",
        action: "Child reasons: for any result on the first die (6 possibilities), only 1 of the 6 second-die outcomes matches. So P(same) = 6/36 = 1/6. Alternatively, P(not same) = 5/6. If they do list all 36, that is fine too — guide them to see the pattern. Once they can work with both methods, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Probability Vocabulary",
        instruction: "Draw a line from each term to its correct meaning.",
        left: ["Sample space","Compound event","Complementary event","Theoretical probability","Experimental probability"],
        right: ["The set of all possible outcomes","An event consisting of two or more simple events","The event NOT occurring: P(not A) = 1 - P(A)","Favourable outcomes / total outcomes (equally likely)","Frequency of an event / total number of trials"],
      },
      {
        type: "open-response",
        title: "List the Sample Space",
        instruction: "Write out all possible outcomes for each compound experiment.",
        prompts: [
          { text: "A coin is tossed and a 6-sided die is rolled. List all outcomes in the form (H, 1), (H, 2), ...", type: "lines", lines: 4 },
          { text: "Two coins are tossed at the same time. List all outcomes.", type: "lines", lines: 3 },
          { text: "A spinner with sections Red, Blue, Green is spun and a coin is tossed. List all outcomes.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Two-Way Table",
        instruction: "A fair coin is tossed and a 4-sided die (1, 2, 3, 4) is rolled. Complete the table and answer the questions.",
        prompts: [
          { text: "H row: (H,1) (H,2) (H,3) (H,4)\nT row: ___ ___ ___ ___\nTotal outcomes = ___", type: "lines", lines: 4 },
          { text: "How many outcomes include an even number? ___\nP(Heads and even number) = ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Tree Diagrams",
        instruction: "Draw a tree diagram for the experiment below, then answer the probability questions.",
        prompts: [
          { text: "A bag contains one red (R) and one blue (B) marble. One marble is drawn and NOT replaced. Then a second marble is drawn. Draw the tree diagram and list all outcomes.", type: "box" },
          { text: "P(Red then Blue) = ___\nP(Both the same colour) = ___\nP(At least one Blue) = ___", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Calculate the Probability",
        instruction: "Two 6-sided dice are rolled. Circle the correct probability for each event.",
        questions: [
          { prompt: "P(total = 12)", options: ["1/36","2/36","1/6"] },
          { prompt: "P(total = 7)", options: ["4/36","5/36","6/36"] },
          { prompt: "P(both dice show the same number)", options: ["6/36","12/36","1/12"] },
        ],
      },
      {
        type: "open-response",
        title: "Complementary Probability",
        instruction: "Use P(A complement) = 1 - P(A) to find the probability of each complementary event.",
        prompts: [
          { text: "P(rolling a 6 on one die) = 1/6. What is P(NOT rolling a 6)?", type: "lines", lines: 2 },
          { text: "When tossing two coins, P(two heads) = 1/4. What is P(NOT two heads)?", type: "lines", lines: 2 },
          { text: "P(winning a raffle) = 3/100. What is P(not winning)?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Probability Challenge",
        instruction: "Answer this multi-step probability problem.",
        prompts: [
          { text: "A bag contains 3 red, 2 blue and 1 yellow marble. One marble is drawn and NOT replaced. Then a second marble is drawn.\n(a) Draw a tree diagram or table showing all outcomes.\n(b) Find P(both marbles are red).\n(c) Find P(first red, second blue).", type: "lines", lines: 8 },
        ],
      },
      {
        type: "home-activity",
        title: "Design a Probability Experiment",
        instruction: "Design and carry out a compound probability experiment at home.",
        suggestions: [
          "Using two coins, toss them 20 times. Record how often you get two heads. Compare your experimental probability to the theoretical probability of 1/4.",
          "Make a simple spinner from cardboard with 3 equal sections (Red, Blue, Green). Spin it and roll a die 30 times. Which combined outcome occurred most often?",
          "Play a board game with a family member and keep track of dice totals. After 20 rolls, compare your experimental frequencies to the theoretical probabilities.",
        ],
      },
      {
        type: "open-response",
        title: "Conditional Probability P(A given B)",
        instruction: "Conditional probability P(A|B) means the probability of A occurring GIVEN that B has already occurred. P(A|B) = P(A and B) / P(B). Use this to solve each question.",
        prompts: [
          { text: "A card is drawn from a standard 52-card deck. Given it is a heart, what is the probability it is also an ace? P(ace | heart) = ", type: "lines", lines: 3 },
          { text: "In a class of 30 students, 18 play sport and 12 play music. 6 students play both. Given a student plays sport, what is the probability they also play music?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Venn Diagrams for Two Overlapping Events",
        instruction: "Draw a Venn diagram and use it to find probabilities.",
        prompts: [
          { text: "In a group of 40 students: 25 like football, 20 like cricket, and 10 like both. Draw a Venn diagram showing the groups. How many like neither sport?", type: "box" },
          { text: "From the Venn diagram above: P(football only) = ___. P(cricket only) = ___. P(both) = ___.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Addition Rule: P(A or B)",
        instruction: "Use P(A or B) = P(A) + P(B) - P(A and B) to solve each problem.",
        prompts: [
          { text: "P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Find P(A or B).", type: "lines", lines: 3 },
          { text: "In a group of 50 people, 30 drink coffee, 20 drink tea, and 10 drink both. Find P(a randomly chosen person drinks coffee or tea).", type: "lines", lines: 4 },
          { text: "If P(A) = 3/8, P(B) = 1/4 and the events are mutually exclusive (cannot both occur), find P(A or B).", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Expected Value Concept",
        instruction: "The expected value (expected outcome) for a probability experiment is calculated by multiplying each outcome by its probability and adding the results.",
        prompts: [
          { text: "A game pays $10 if you roll a 6 on a die, and $0 otherwise. What is the expected payout per roll? (Hint: Expected value = 10 x P(6) + 0 x P(not 6))", type: "lines", lines: 3 },
          { text: "A spinner has sections: win $5 (P = 0.2), win $2 (P = 0.5), lose $1 (P = 0.3). What is the expected value per spin? Is this game worth playing?", type: "lines", lines: 4 },
        ],
      },
    ],
  },

  {
    slug: "comparing-data-sets",
    title: "Comparing & Analysing Data Sets",
    strand: "Statistics",
    description:
      "Compare distributions of multiple numerical data sets using summary statistics, shape and outliers, and evaluate how sampling techniques affect conclusions.",
    lesson: {
      title: "Comparing and Analysing Data Sets",
      objective: "Calculate and compare mean, median, mode, range and IQR for two data sets, identify outliers and their effect, and recognise distribution shape from summary statistics.",
      materials: [
        "Paper and pencil",
        "Calculator",
      ],
      intro: {
        title: "Is the Mean Always Fair?",
        script: "Imagine two Year 9 classes sit the same maths test. Class A results: 55, 60, 62, 65, 68, 70, 72, 75, 78, 80. Class B results: 40, 42, 45, 65, 67, 70, 72, 75, 90, 95. Both classes have the same mean of 68.5. But do they perform the same? No! Class B is much more spread out. This is why we need more than just the mean to compare data. The range tells us total spread, the interquartile range (IQR) tells us where the middle 50% of data sits, and the shape of the distribution tells us if most scores are high, low, or in the middle.",
        action: "Write both data sets on paper. Calculate the mean for each (they are both 68.5). Then find the range: Class A is 25, Class B is 55. Ask: which class performed more consistently? (Class A, smaller range.) Introduce the idea that the mean alone is misleading here.",
      },
      mainActivity: {
        title: "Five Measures and Distribution Shape",
        script: "I want you to calculate the mean, median, mode, range, and IQR for this data set: 72, 85, 91, 68, 85, 77, 90, 62, 85, 74. First sort it: 62, 68, 72, 74, 77, 85, 85, 85, 90, 91. Mean: add all values and divide by 10. Median: average the 5th and 6th values. Mode: the most common value. Range: maximum minus minimum. For IQR: find Q1 (median of lower half) and Q3 (median of upper half), then IQR equals Q3 minus Q1. Distribution shape: if mean is greater than median, the data is positively skewed (long tail to the right); if mean is less than median, negatively skewed; if equal, roughly symmetric.",
        action: "Work through the calculation together: sorted data: 62, 68, 72, 74, 77, 85, 85, 85, 90, 91. Sum = 789. Mean = 78.9. Median = (77+85)/2 = 81. Mode = 85. Range = 29. Q1 = median of 62, 68, 72, 74, 77 = 72. Q3 = median of 85, 85, 85, 90, 91 = 85. IQR = 13. Since mean (78.9) < median (81), data is slightly negatively skewed. Then check for outliers: if any value is far from the rest, it pulls the mean but not the median.",
      },
      wrapUp: {
        title: "Which Statistic Matters?",
        script: "Here is a data set with an outlier: 12, 14, 15, 13, 16, 14, 15, 47, 13, 14. Find the mean with and without the outlier. Which measure, mean or median, gives a better picture of a typical value in this data set? Why?",
        action: "Child calculates: mean with outlier = 173/10 = 17.3. Mean without outlier = 126/9 = 14. Median = 14 (middle value, unaffected). Child should explain: the median is more resistant to outliers and gives a better picture of a typical value here. Once they can articulate this comparison clearly, they are ready for the worksheet.",
      },
    },
    activities: [
      {
        type: "matching",
        title: "Summary Statistics Vocabulary",
        instruction: "Draw a line from each measure to its correct definition.",
        left: ["Mean","Median","Mode","Range","Interquartile range (IQR)"],
        right: ["The sum of all values divided by the number of values","The middle value when data is arranged in order","The most frequently occurring value","The difference between the maximum and minimum values","The difference between the upper and lower quartiles"],
      },
      {
        type: "open-response",
        title: "Calculate Summary Statistics",
        instruction: "Calculate the mean, median, mode and range for each data set.",
        prompts: [
          { text: "Test scores: 72, 85, 91, 68, 85, 77, 90, 62, 85, 74\nMean = ___  Median = ___  Mode = ___  Range = ___", type: "lines", lines: 5 },
          { text: "Daily temperatures (deg C): 18, 22, 25, 30, 22, 19, 21, 28, 22, 25\nMean = ___  Median = ___  Mode = ___  Range = ___", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Two Data Sets",
        instruction: "Use the statistics provided to compare two classes.",
        prompts: [
          { text: "Class A: Mean = 72, Median = 74, Range = 40, IQR = 18\nClass B: Mean = 71, Median = 73, Range = 20, IQR = 10\nWhich class performed more consistently? Justify using the statistics.", type: "lines", lines: 4 },
          { text: "Which statistic (mean or median) is more useful when comparing these classes? Explain why.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Shape of a Distribution",
        instruction: "Sort each description into the correct distribution shape column.",
        columns: ["Symmetric / Normal","Positively Skewed","Negatively Skewed"],
        items: [
          {"label":"Mean > Median > Mode"},
          {"label":"Mean approx Median approx Mode"},
          {"label":"Mode > Median > Mean"},
          {"label":"Long tail to the right"},
          {"label":"Long tail to the left"},
          {"label":"Bell-shaped curve"},
        ],
      },
      {
        type: "open-response",
        title: "Identifying Outliers",
        instruction: "An outlier is a data value far from the rest of the data.",
        prompts: [
          { text: "Data: 12, 14, 15, 13, 16, 14, 15, 47, 13, 14\nIdentify the outlier: ___\nMean WITH outlier = ___  Mean WITHOUT outlier = ___", type: "lines", lines: 4 },
          { text: "How does the outlier affect the mean? Which measure (mean or median) is more resistant to outliers? Explain.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Back-to-Back Stem-and-Leaf Plot",
        instruction: "Interpret the back-to-back stem-and-leaf plot showing sprint times (seconds) for two athletes.",
        prompts: [
          { text: "Athlete A | Stem | Athlete B\n  9 8 7  |  11  | 2 3 5\n6 5 3 2  |  12  | 1 4 7\n    4 1  |  13  | 0 3\n\nMedian for Athlete A = ___  Median for Athlete B = ___\nWho is the faster athlete overall? Justify your answer.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Sampling and Conclusions",
        instruction: "Read each scenario and answer the questions.",
        prompts: [
          { text: "A school surveys 20 students near the tuck shop at lunch about their favourite food. The results are used to plan the canteen menu for all 800 students. Describe TWO problems with this sampling method.", type: "lines", lines: 4 },
          { text: "A news headline says 8 out of 10 dentists recommend Brand X toothpaste. What question would you ask before trusting this statistic?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Real Data Investigation",
        instruction: "Collect and analyse your own data.",
        suggestions: [
          "Record the daily maximum temperature in your area for 10 days. Calculate the mean, median, mode and range. Does the distribution appear symmetric or skewed?",
          "Compare two types of cereal using nutritional labels (sugar per 100 g). Use statistics to decide which is healthier.",
          "Survey 10 family members or friends: How many hours of screen time did you have yesterday? Compare two groups (e.g. under 18 vs adults) using a back-to-back stem-and-leaf plot.",
        ],
      },
      {
        type: "open-response",
        title: "Back-to-Back Stem-and-Leaf Plots -- Building One",
        instruction: "Create a back-to-back stem-and-leaf plot to display both data sets on the same diagram.",
        prompts: [
          { text: "Class A scores: 52, 67, 71, 73, 75, 78, 82, 85, 88, 91\nClass B scores: 44, 58, 63, 67, 70, 72, 79, 83, 86, 90\nDraw the back-to-back stem-and-leaf plot using stems 4, 5, 6, 7, 8, 9:", type: "box" },
          { text: "Compare the two classes: which has the higher median? Which is more spread out?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Five-Number Summary",
        instruction: "Calculate the five-number summary (minimum, Q1, median, Q3, maximum) for each data set.",
        prompts: [
          { text: "Data: 5, 8, 10, 12, 14, 16, 18, 22, 24, 30\nMin = ___  Q1 = ___  Median = ___  Q3 = ___  Max = ___", type: "lines", lines: 4 },
          { text: "Data: 31, 35, 40, 42, 44, 48, 50, 53, 58, 60\nMin = ___  Q1 = ___  Median = ___  Q3 = ___  Max = ___", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "IQR and Outlier Detection",
        instruction: "Use the IQR rule: a value is an outlier if it is below Q1 - 1.5 x IQR or above Q3 + 1.5 x IQR.",
        prompts: [
          { text: "Data set: 10, 12, 14, 15, 16, 18, 20, 22, 55\nQ1 = 12.5, Q3 = 21, IQR = 8.5\nLower fence = Q1 - 1.5 x IQR = ___\nUpper fence = Q3 + 1.5 x IQR = ___\nIs 55 an outlier? ___", type: "lines", lines: 5 },
          { text: "Explain how you would report a data set to someone if there is one outlier: should you include it or remove it? Give a reason for each choice.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Spread Using Standard Deviation Concept",
        instruction: "Standard deviation measures how spread out values are from the mean. A low standard deviation means values are clustered closely; a high standard deviation means they are spread out.",
        prompts: [
          { text: "Data A: 48, 50, 50, 51, 51 (mean = 50). Data B: 30, 40, 50, 60, 70 (mean = 50). Which data set has the higher standard deviation? Explain without calculating.", type: "lines", lines: 3 },
          { text: "Two athletes run 100 m five times each. Athlete X times (seconds): 12.1, 12.0, 11.9, 12.2, 12.0. Athlete Y times: 11.5, 12.8, 11.9, 13.1, 11.7. Which athlete is more consistent? Justify using spread.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choosing the Best Summary Statistic",
        instruction: "Circle the most appropriate measure for each situation.",
        questions: [
          { prompt: "A data set contains one very large outlier. The best measure of centre is:", options: ["Mean","Median","Mode"] },
          { prompt: "To measure spread that is not affected by extreme values, use:", options: ["Range","IQR","Standard deviation"] },
          { prompt: "To find the most common shoe size sold in a store, use:", options: ["Mean","Median","Mode"] },
          { prompt: "To compare how spread out two data sets are overall, use:", options: ["Range or IQR","Median","Mean"] },
        ],
      },
    ],
  },

];

export function getYear9Worksheet(slug: string): WorksheetItem | undefined {
  return year9MathsWorksheets.find((w) => w.slug === slug);
}