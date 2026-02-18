import type { WorksheetItem } from "./worksheet-types";

export const year10MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Approximations & Logarithmic Scales ────────────────
  {
    slug: "approximations-logarithmic-scales",
    title: "Approximations & Logarithmic Scales",
    strand: "Number",
    description:
      "Recognise the effect of approximations in repeated calculations and interpret logarithmic scales for small or large quantities",
    activities: [
      // --- EASY: Scientific notation & conversions ---
      {
        type: "matching",
        title: "Scientific Notation — Large Numbers",
        instruction: "Draw a line from each number in scientific notation to its standard form.",
        left: ["3.2 × 10⁴", "1.0 × 10⁶", "4.78 × 10²", "7.5 × 10³", "2.1 × 10⁵"],
        right: ["478", "32,000", "1,000,000", "7,500", "210,000"],
      },
      {
        type: "matching",
        title: "Scientific Notation — Small Numbers",
        instruction: "Draw a line from each number in scientific notation to its standard form.",
        left: ["6.5 × 10⁻³", "9.1 × 10⁻⁵", "3.0 × 10⁻¹", "1.2 × 10⁻⁶", "8.0 × 10⁻²"],
        right: ["0.0065", "0.3", "0.000091", "0.0000012", "0.08"],
      },
      {
        type: "circle-correct",
        title: "Convert to Scientific Notation",
        instruction: "Circle the correct scientific notation for each number.",
        questions: [
          { prompt: "45,000", options: ["4.5 × 10⁴", "45 × 10³", "0.45 × 10⁵"] },
          { prompt: "0.0072", options: ["7.2 × 10⁻³", "72 × 10⁻⁴", "0.72 × 10⁻²"] },
          { prompt: "6,300,000", options: ["6.3 × 10⁶", "63 × 10⁵", "6.3 × 10⁷"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Powers of 10",
        instruction: "Circle the correct value for each power of 10.",
        questions: [
          { prompt: "10³", options: ["1,000", "100", "10,000"] },
          { prompt: "10⁻²", options: ["0.01", "0.001", "0.1"] },
          { prompt: "10⁰", options: ["1", "0", "10"] },
          { prompt: "10⁻⁴", options: ["0.0001", "0.001", "0.00001"] },
        ],
      },
      {
        type: "sorting",
        title: "Order of Magnitude",
        instruction: "Sort each quantity by its order of magnitude: Small (10⁻⁶ or less), Medium (10⁻⁵ to 10⁵), or Large (10⁶ or more).",
        columns: ["Small (≤ 10⁻⁶)", "Medium (10⁻⁵ to 10⁵)", "Large (≥ 10⁶)"],
        items: [
          { label: "Diameter of an atom (~10⁻¹⁰ m)" },
          { label: "Height of a person (~2 m)" },
          { label: "Distance to the Moon (~4 × 10⁸ m)" },
          { label: "Width of a bacterium (~10⁻⁶ m)" },
          { label: "Length of a football field (~100 m)" },
          { label: "Mass of Earth (~6 × 10²⁴ kg)" },
          { label: "Thickness of a cell membrane (~10⁻⁸ m)" },
          { label: "Population of Australia (~2.6 × 10⁷)" },
          { label: "Speed of light (~3 × 10⁸ m/s)" },
        ],
      },
      {
        type: "matching",
        title: "Match Quantity to Estimate",
        instruction: "Draw a line from each quantity to its approximate order of magnitude.",
        left: ["Grains of sand on a beach", "Cells in a human body", "Stars in the Milky Way", "Atoms in a grain of salt", "Seconds in a year"],
        right: ["~10¹⁸", "~10¹⁴", "~3 × 10⁷", "~10¹¹", "~10¹⁹"],
      },
      {
        type: "circle-correct",
        title: "Reasonable Estimates — Everyday",
        instruction: "Circle the most reasonable estimate for each quantity.",
        questions: [
          { prompt: "Mass of a car", options: ["~1.5 × 10³ kg", "~1.5 × 10¹ kg", "~1.5 × 10⁵ kg"] },
          { prompt: "Height of Mt Everest", options: ["~8.8 × 10³ m", "~8.8 × 10⁵ m", "~8.8 × 10¹ m"] },
          { prompt: "Diameter of a coin", options: ["~2 × 10⁻² m", "~2 × 10⁻⁴ m", "~2 × 10⁰ m"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Reasonable Estimates — Science",
        instruction: "Circle the most reasonable estimate for each scientific quantity.",
        questions: [
          { prompt: "Distance from Earth to the Sun", options: ["1.5 × 10⁸ km", "1.5 × 10⁶ km", "1.5 × 10¹⁰ km"] },
          { prompt: "Mass of a grain of sand", options: ["5 × 10⁻⁵ g", "5 × 10⁻² g", "5 × 10² g"] },
          { prompt: "Width of a human hair", options: ["7 × 10⁻⁵ m", "7 × 10⁻² m", "7 × 10⁻⁸ m"] },
        ],
      },
      // --- MEDIUM: Rounding & approximation effects ---
      {
        type: "circle-correct",
        title: "Which Rounding Is Best?",
        instruction: "Circle the most appropriate level of rounding for each scenario.",
        questions: [
          { prompt: "Estimating how many seats in a stadium", options: ["Nearest 1,000", "Nearest 1", "Nearest 100,000"] },
          { prompt: "Dosage of medicine for a patient", options: ["Nearest 0.1 mL", "Nearest 100 mL", "Nearest 10 mL"] },
          { prompt: "National population for a news report", options: ["Nearest million", "Nearest person", "Nearest billion"] },
          { prompt: "Cutting timber for a bookshelf", options: ["Nearest mm", "Nearest m", "Nearest cm"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Rounding Errors — Single Calculation",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "π rounded to 2 decimal places is 3.14. The true value starts 3.14159. The absolute error of rounding is approximately:", options: ["0.00159", "0.01", "0.1"] },
          { prompt: "If you round 2.745 to 2 decimal places, you get:", options: ["2.75 (round up)", "2.74 (round down)", "2.7 (round to 1 dp)"] },
          { prompt: "The percentage error when using 3.14 for π is approximately:", options: ["0.05%", "0.5%", "5%"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Accumulated Rounding Errors",
        instruction: "Circle the correct statement about how rounding errors behave.",
        questions: [
          { prompt: "When you multiply a rounded number by itself many times, the error:", options: ["Grows with each multiplication", "Stays the same", "Gets smaller"] },
          { prompt: "Using π ≈ 3.14 vs π ≈ 3.14159 for the area of a circle with r = 1:", options: ["Gives a small difference, but it grows for larger r", "Makes no practical difference", "Always gives exactly the same answer"] },
          { prompt: "In financial calculations, rounding to the nearest cent after each step instead of at the end:", options: ["Can accumulate significant errors over many transactions", "Makes no difference at all", "Always results in the same total"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Rounding Strategy",
        instruction: "Draw a line from each scenario to the best rounding strategy.",
        left: ["Calculating compound interest over 30 years", "Estimating a restaurant bill", "Measuring for a precision engineering part", "Reporting school exam averages"],
        right: ["Round only at the final step", "Round to the nearest dollar", "Use maximum decimal precision available", "Round to 1 decimal place"],
      },
      {
        type: "open-response",
        title: "Rounding Error Investigation",
        instruction: "Investigate how rounding affects repeated calculations.",
        prompts: [
          { text: "Calculate 1.1⁵ using (a) the exact value 1.1, and (b) the rounded value 1. What is the difference? Now try 1.1¹⁰. Explain what happens to the error as the power increases.", type: "lines", lines: 5 },
          { text: "A bank calculates daily interest at 0.0137% (≈ 5% annual). Compare the result of rounding to 2 decimal places each day vs rounding only at the end of the year, starting with $10,000. Which gives a more accurate result?", type: "lines", lines: 5 },
        ],
      },
      // --- MEDIUM: Logarithmic scales ---
      {
        type: "matching",
        title: "Logarithmic Scales in Real Life",
        instruction: "Draw a line from each logarithmic scale to what it measures.",
        left: ["Richter scale", "Decibel (dB) scale", "pH scale", "Stellar magnitude", "Beaufort scale"],
        right: ["Acidity/alkalinity", "Sound intensity", "Earthquake magnitude", "Wind speed (quasi-log)", "Star brightness"],
      },
      {
        type: "circle-correct",
        title: "Richter Scale Questions",
        instruction: "Circle the correct answer about the Richter scale.",
        questions: [
          { prompt: "Each whole number increase on the Richter scale means the amplitude is:", options: ["10× larger", "2× larger", "100× larger"] },
          { prompt: "Each whole number increase means roughly how much more energy?", options: ["~31.6× more", "~10× more", "~100× more"] },
          { prompt: "A magnitude 7 earthquake has how many times more amplitude than magnitude 5?", options: ["100× (10²)", "20× (10×2)", "1000× (10³)"] },
          { prompt: "A magnitude 8 earthquake releases how many times more energy than magnitude 6?", options: ["~1000× (31.6²)", "~100× (10²)", "~63× (31.6×2)"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Decibel Scale Questions",
        instruction: "Circle the correct answer about the decibel scale.",
        questions: [
          { prompt: "An increase of 10 dB means sound intensity is:", options: ["10× greater", "2× greater", "100× greater"] },
          { prompt: "A whisper is ~30 dB and a vacuum cleaner is ~70 dB. The vacuum is how many times more intense?", options: ["10,000× (10⁴)", "40× (70−30)", "4× (70÷30 ≈ 2.3)"] },
          { prompt: "A sound at 80 dB compared to 60 dB is:", options: ["100× more intense", "20× more intense", "4× more intense"] },
        ],
      },
      {
        type: "circle-correct",
        title: "pH Scale Questions",
        instruction: "Circle the correct answer about the pH scale.",
        questions: [
          { prompt: "Each pH unit represents a factor of:", options: ["10× in hydrogen ion concentration", "2× in hydrogen ion concentration", "100× in hydrogen ion concentration"] },
          { prompt: "A solution with pH 3 is how many times more acidic than pH 5?", options: ["100× (10²)", "2× (5−3)", "10× (one step)"] },
          { prompt: "Pure water has pH 7. Lemon juice has pH 2. The juice is:", options: ["100,000× more acidic", "5× more acidic", "3.5× more acidic"] },
        ],
      },
      {
        type: "sorting",
        title: "Linear vs Logarithmic Relationships",
        instruction: "Sort each relationship: Linear Scale or Logarithmic Scale.",
        columns: ["Linear Scale", "Logarithmic Scale"],
        items: [
          { label: "Distance on a road map" },
          { label: "Richter earthquake scale" },
          { label: "Thermometer markings" },
          { label: "Sound decibel levels" },
          { label: "pH of solutions" },
          { label: "Ruler measurements" },
          { label: "Stellar magnitude" },
          { label: "Kitchen measuring cup" },
        ],
      },
      // --- HARD: Application & reasoning ---
      {
        type: "open-response",
        title: "Comparing Earthquakes",
        instruction: "Use the Richter scale to compare earthquakes. Show your reasoning.",
        prompts: [
          { text: "The 2011 Christchurch earthquake was magnitude 6.2 and the 2011 Tōhoku (Japan) earthquake was magnitude 9.1. How many times more amplitude did the Japan earthquake have? How many times more energy? Show your calculations.", type: "lines", lines: 6 },
          { text: "If a magnitude 4 earthquake is barely felt, explain why a magnitude 6 earthquake (only 2 more on the scale) can cause major damage. Use the energy multiplier to support your explanation.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Decibel Problem Solving",
        instruction: "Apply your understanding of the decibel scale.",
        prompts: [
          { text: "A conversation is 60 dB. A rock concert is 110 dB. How many times more intense is the concert than a conversation? If prolonged exposure above 85 dB causes hearing damage, how many times more intense is the damage threshold than normal conversation?", type: "lines", lines: 6 },
          { text: "Two speakers each produce 70 dB. When both play together, the combined level is about 73 dB, NOT 140 dB. Explain why doubling the number of identical sound sources only adds about 3 dB.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Approximation in Repeated Calculations",
        instruction: "Investigate how approximation errors compound.",
        prompts: [
          { text: "A calculator shows π as 3.14. Another uses 3.14159265. Calculate π¹⁰ using each value. What is the absolute and percentage difference? Explain why repeated multiplication amplifies small initial errors.", type: "lines", lines: 6 },
          { text: "A GPS has a 3-metre accuracy for each position fix. If a bushwalker takes 50 position readings on a hike, explain why the total distance error could be much more than 3 m. Under what conditions would errors cancel out vs accumulate?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Logarithmic Scale",
        instruction: "Design a logarithmic scale for a real-world phenomenon.",
        prompts: [
          { text: "Social media posts can get anywhere from 1 view to 1 billion views. Design a 'Virality Scale' from 1 to 10 where each level represents 10× more views. Define each level (1 = 1–10 views, etc.) and give an example of what type of post might reach each level.", type: "lines", lines: 8 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Logarithmic Scales",
        instruction: "Circle TRUE or FALSE for each statement.",
        questions: [
          { prompt: "On a logarithmic scale, equal distances represent equal ratios", options: ["TRUE", "FALSE"] },
          { prompt: "A magnitude 8 earthquake is twice as strong as magnitude 4", options: ["TRUE", "FALSE"] },
          { prompt: "The difference between pH 3 and pH 4 represents the same factor as between pH 8 and pH 9", options: ["TRUE", "FALSE"] },
          { prompt: "Logarithmic scales are useful when data spans many orders of magnitude", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "open-response",
        title: "Significant Figures & Precision",
        instruction: "Explain the role of significant figures in maintaining appropriate precision.",
        prompts: [
          { text: "A student measures a rectangle as 12.3 cm × 4.56 cm and reports the area as 56.088 cm². Explain why this answer implies false precision. What should the answer be, and why?", type: "lines", lines: 5 },
          { text: "Explain the difference between accuracy and precision using an example. Why is it misleading to report a very precise answer from inaccurate measurements?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "home-activity",
        title: "Logarithmic Scales in Daily Life",
        instruction: "Explore logarithmic scales you encounter in everyday life.",
        suggestions: [
          "Find the decibel levels of 5 common sounds (whisper, conversation, lawnmower, concert, jet engine). Calculate how many times more intense each is than the quietest.",
          "Look up the pH of common household substances (lemon juice, water, soap, bleach). Calculate the hydrogen ion concentration factor between each.",
          "Research the Richter scale magnitudes of 3 famous Australian earthquakes. Calculate the energy differences between them.",
        ],
      },
      {
        type: "home-activity",
        title: "Approximation Error Experiment",
        instruction: "Test how rounding affects calculations in practice.",
        suggestions: [
          "Using a calculator, compute (1 + 0.001)¹⁰⁰⁰ with full precision, then try rounding 1.001 to 1.00 first. How different are the results? This models how tiny interest rates compound.",
          "Measure a square tile to the nearest cm, then to the nearest mm. Calculate the area both ways. How much does the extra precision matter?",
          "Find an online compound interest calculator. Compare results when the rate is entered as 5% vs 5.00% vs 4.99%. How much difference does the small rounding make over 30 years?",
        ],
      },
    ],
  },

  // ── WS 2: Growth & Decay Functions ────────────────────────────
  {
    slug: "growth-decay-functions",
    title: "Growth & Decay Functions",
    strand: "Algebra",
    description:
      "Solve problems involving growth and decay using linear, quadratic and exponential functions in financial and applied contexts",
    activities: [
      // --- EASY: Recognise growth vs decay ---
      {
        type: "sorting",
        title: "Growth vs Decay — Equations",
        instruction: "Sort each function into the correct column: Growth or Decay.",
        columns: ["Growth", "Decay"],
        items: [
          { label: "P = 2000 × 1.08ⁿ" },
          { label: "V = 15000 × 0.82ⁿ" },
          { label: "y = 3ˣ" },
          { label: "A = 500 × 0.95ⁿ" },
          { label: "N = 100 × 1.12ⁿ" },
          { label: "M = 800 × 0.5ⁿ" },
          { label: "C = 1200 × 0.97ⁿ" },
          { label: "y = 10 × 2ⁿ" },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Growth Factor",
        instruction: "Circle the growth or decay factor in each function.",
        questions: [
          { prompt: "A = 5000 × 1.06ⁿ — the growth factor is:", options: ["1.06", "5000", "6"] },
          { prompt: "V = 20000 × 0.85ⁿ — the decay factor is:", options: ["0.85", "20000", "0.15"] },
          { prompt: "P = 300 × 1.15ⁿ — the percentage growth rate is:", options: ["15%", "1.15%", "115%"] },
          { prompt: "M = 1000 × 0.92ⁿ — the percentage decrease per step is:", options: ["8%", "92%", "0.08%"] },
        ],
      },
      {
        type: "matching",
        title: "Percentage to Growth Factor",
        instruction: "Draw a line from each percentage change to the corresponding growth/decay factor.",
        left: ["5% increase", "12% decrease", "3% increase", "20% decrease", "8.5% increase"],
        right: ["1.03", "1.085", "0.88", "0.80", "1.05"],
      },
      {
        type: "circle-correct",
        title: "Starting Value",
        instruction: "Circle the starting value (initial amount) in each function.",
        questions: [
          { prompt: "A = 5000 × 1.06ⁿ", options: ["5000", "1.06", "A"] },
          { prompt: "P = 250 × 0.9ⁿ", options: ["250", "0.9", "P"] },
          { prompt: "y = 3 × 2ˣ", options: ["3", "2", "y"] },
        ],
      },
      {
        type: "sorting",
        title: "Growth vs Decay — Real World",
        instruction: "Sort each scenario: Growth or Decay?",
        columns: ["Growth", "Decay"],
        items: [
          { label: "House prices increasing 7% per year" },
          { label: "A new car losing 15% of its value each year" },
          { label: "Bacteria doubling every hour" },
          { label: "Radioactive material with a half-life of 5 years" },
          { label: "A savings account earning 4% interest" },
          { label: "Ice cream melting at a steady rate on a hot day" },
          { label: "A viral video getting 50% more views each day" },
          { label: "Medicine concentration decreasing 25% per hour" },
        ],
      },
      // --- EASY: Graph descriptions ---
      {
        type: "matching",
        title: "Equation to Graph Description",
        instruction: "Draw a line from each equation to the description of its graph behaviour.",
        left: ["y = 2ˣ", "y = 500 × 0.85ⁿ", "y = 3x + 10", "y = 1000 × 1.05ⁿ", "y = −x² + 16"],
        right: ["Straight line increasing steadily", "Curve that doubles repeatedly", "Decreases by 15% each step", "5% compound growth from 1000", "Parabola opening downward, max at 16"],
      },
      {
        type: "circle-correct",
        title: "What Does the Graph Look Like?",
        instruction: "Circle the correct description of each function's graph.",
        questions: [
          { prompt: "y = 2ˣ starts at y = 1 and:", options: ["Curves upward, getting steeper", "Goes in a straight line upward", "Curves upward then comes back down"] },
          { prompt: "y = 100 × 0.5ⁿ starts at 100 and:", options: ["Halves each step, approaching but never reaching 0", "Decreases in a straight line to 0", "Oscillates up and down"] },
          { prompt: "y = 3x + 5 is:", options: ["A straight line with gradient 3", "An exponential curve", "A parabola"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Key Features of Exponential Graphs",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "All graphs of y = aˣ (where a > 0) pass through:", options: ["(0, 1)", "(1, 0)", "(0, 0)"] },
          { prompt: "For exponential decay (0 < a < 1), as x → ∞, y approaches:", options: ["0", "−∞", "1"] },
          { prompt: "The graph of y = 2ˣ has a horizontal asymptote at:", options: ["y = 0", "y = 1", "x = 0"] },
        ],
      },
      // --- MEDIUM: Compound interest ---
      {
        type: "sequence",
        title: "Compound Interest Steps",
        instruction: "Put the steps for calculating compound interest in the correct order.",
        items: [
          { label: "Identify the principal (P), rate (r), and time period (n)" },
          { label: "Convert the percentage rate to a decimal: r ÷ 100" },
          { label: "Calculate the growth factor: (1 + r)" },
          { label: "Raise the growth factor to the power of n: (1 + r)ⁿ" },
          { label: "Multiply by the principal: A = P × (1 + r)ⁿ" },
          { label: "Subtract the principal to find interest earned: I = A − P" },
        ],
      },
      {
        type: "circle-correct",
        title: "Compound Interest Calculations",
        instruction: "Circle the correct answer for each compound interest problem.",
        questions: [
          { prompt: "$1,000 at 10% for 2 years compounded annually:", options: ["$1,210", "$1,200", "$1,100"] },
          { prompt: "$5,000 at 6% for 3 years compounded annually:", options: ["$5,955.08", "$5,900", "$6,000"] },
          { prompt: "$2,000 at 5% for 1 year compounded annually:", options: ["$2,100", "$2,050", "$2,500"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Simple vs Compound Interest",
        instruction: "Circle the correct comparison.",
        questions: [
          { prompt: "$10,000 at 8% simple interest for 5 years earns:", options: ["$4,000", "$4,693.28", "$14,000"] },
          { prompt: "$10,000 at 8% compound interest for 5 years grows to:", options: ["$14,693.28", "$14,000", "$18,000"] },
          { prompt: "The difference between compound and simple interest after 5 years is:", options: ["$693.28", "$0", "$4,000"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Formula",
        instruction: "Draw a line from each description to its formula.",
        left: ["Compound interest (annual)", "Simple interest", "Depreciation (declining balance)", "Exponential growth (general)", "Doubling time (rule of 72)"],
        right: ["I = P × r × t", "A = P × (1 + r)ⁿ", "V = P × (1 − r)ⁿ", "y = a × bˣ", "t ≈ 72 ÷ r%"],
      },
      // --- MEDIUM: Depreciation ---
      {
        type: "circle-correct",
        title: "Car Depreciation",
        instruction: "A car is bought for $40,000 and depreciates at 20% per year. Circle the correct answer.",
        questions: [
          { prompt: "Value after 1 year:", options: ["$32,000", "$36,000", "$20,000"] },
          { prompt: "Value after 2 years:", options: ["$25,600", "$24,000", "$16,000"] },
          { prompt: "Value after 3 years:", options: ["$20,480", "$20,000", "$12,000"] },
          { prompt: "The depreciation function is:", options: ["V = 40000 × 0.8ⁿ", "V = 40000 × 0.2ⁿ", "V = 40000 − 8000n"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Depreciation vs Straight Line",
        instruction: "Circle the correct answer about depreciation methods.",
        questions: [
          { prompt: "Declining balance depreciation (20% per year) means the amount lost each year:", options: ["Decreases over time", "Stays the same", "Increases over time"] },
          { prompt: "Straight-line depreciation (same amount each year) is modelled by:", options: ["A linear function", "An exponential function", "A quadratic function"] },
          { prompt: "After many years, declining balance depreciation means the asset value approaches:", options: ["$0 but never quite reaches it", "Exactly $0", "A negative value"] },
        ],
      },
      // --- MEDIUM: Rule of 72 and doubling ---
      {
        type: "circle-correct",
        title: "Rule of 72",
        instruction: "Use the rule of 72 (doubling time ≈ 72 ÷ rate%) to answer each question.",
        questions: [
          { prompt: "At 6% annual growth, an investment doubles in approximately:", options: ["12 years", "6 years", "72 years"] },
          { prompt: "At 9% annual growth, doubling takes approximately:", options: ["8 years", "9 years", "72 years"] },
          { prompt: "To double your money in 4 years, you need a rate of approximately:", options: ["18%", "4%", "72%"] },
          { prompt: "At 3% inflation, prices double in approximately:", options: ["24 years", "3 years", "36 years"] },
        ],
      },
      // --- HARD: Modelling & problem solving ---
      {
        type: "open-response",
        title: "Write the Function",
        instruction: "Write an appropriate function for each scenario.",
        prompts: [
          { text: "A car worth $35,000 depreciates by 18% per year. Write a function V(n) for its value after n years.", type: "lines", lines: 3 },
          { text: "A town's population is 12,000 and grows at 2.5% per year. Write a function P(n) for the population after n years.", type: "lines", lines: 3 },
          { text: "A cup of coffee at 90°C cools toward room temperature (22°C). The temperature difference halves every 10 minutes. Write a function T(t) for the temperature after t minutes.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Car Depreciation Problem",
        instruction: "Solve the following depreciation problem. Show all working.",
        prompts: [
          { text: "A car worth $35,000 depreciates by 18% per year. Calculate its value after 4 years. Is it worth more or less than half the original price? After how many years will it first be worth less than $10,000?", type: "lines", lines: 8 },
        ],
      },
      {
        type: "open-response",
        title: "Investment Doubling",
        instruction: "Solve the following investment problem. Show all working.",
        prompts: [
          { text: "You invest $2,000 at 6% per annum compounded annually. Use the rule of 72 to estimate how many years until the investment doubles. Then verify using the compound interest formula A = P(1 + r)ⁿ by calculating A for your estimated year.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Growth Models",
        instruction: "Compare different growth models for the same scenario.",
        prompts: [
          { text: "A small business earns $50,000 in its first year. Model A assumes revenue grows by $5,000 per year (linear). Model B assumes revenue grows by 8% per year (exponential). Calculate revenue for years 1–5 under each model. In which year does Model B first exceed Model A? Which model is more realistic for a growing business, and why?", type: "lines", lines: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Half-Life Problem",
        instruction: "Apply exponential decay to radioactive half-life.",
        prompts: [
          { text: "A 100 g sample of a radioactive substance has a half-life of 3 years. Write a decay function M(t). Calculate the mass remaining after 9 years. After how many years will less than 1 g remain?", type: "lines", lines: 8 },
        ],
      },
      {
        type: "open-response",
        title: "Population Modelling",
        instruction: "Model population growth with exponential functions.",
        prompts: [
          { text: "Australia's population was approximately 20 million in 2004 and 26 million in 2024. Assuming exponential growth, calculate the annual growth rate. Use your model to predict the population in 2034. What assumptions does your model make?", type: "lines", lines: 8 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Growth & Decay",
        instruction: "Circle TRUE or FALSE.",
        questions: [
          { prompt: "Exponential growth means the same amount is added each period", options: ["TRUE", "FALSE"] },
          { prompt: "A decay factor of 0.85 means a 15% decrease each period", options: ["TRUE", "FALSE"] },
          { prompt: "Compound interest always gives more than simple interest for the same rate and time", options: ["TRUE", "FALSE"] },
          { prompt: "An exponential function can have a negative base", options: ["TRUE", "FALSE"] },
        ],
      },
      {
        type: "home-activity",
        title: "Financial Growth Investigation",
        instruction: "Investigate real-world financial growth and decay.",
        suggestions: [
          "Research the current interest rates at two different banks. Calculate how much $5,000 would grow to after 5 years at each rate. Which bank gives the better return?",
          "Track the depreciation of a family car: find its original purchase price and current value, then calculate the average annual depreciation rate.",
          "Use an online compound interest calculator to explore how changing the rate by 1% affects the result over 10, 20, and 30 years.",
        ],
      },
      {
        type: "home-activity",
        title: "Growth & Decay in Nature",
        instruction: "Find examples of growth and decay in the natural world.",
        suggestions: [
          "Research how bacteria populations grow. If one bacterium doubles every 20 minutes, how many would there be after 8 hours? Why doesn't this actually happen in practice?",
          "Look up Australia's population over the last 20 years. Plot the data points. Does it follow linear or exponential growth? Estimate the population in 2035.",
          "Research the half-life of caffeine in the human body (~5 hours). If you drink a coffee with 100 mg of caffeine at 3 pm, how much remains at bedtime (10 pm)?",
        ],
      },
    ],
  },

  // ── WS 3: Simultaneous Equations & Linear Inequalities ────────
  {
    slug: "simultaneous-equations-inequalities",
    title: "Simultaneous Equations & Linear Inequalities",
    strand: "Algebra",
    description:
      "Solve simultaneous linear equations and linear inequalities in 2 variables graphically and algebraically",
    activities: [
      // --- EASY: Foundations & terminology ---
      {
        type: "matching",
        title: "Equation Pairs to Solutions — Simple",
        instruction:
          "Draw a line from each pair of simultaneous equations to its solution (x, y).",
        left: [
          "y = x + 1 and y = 3",
          "y = 2x and y = 6",
          "x + y = 5 and y = 1",
          "y = x − 2 and y = 0",
          "y = 3x − 1 and y = 5",
        ],
        right: [
          "(2, 3)",
          "(3, 6)",
          "(4, 1)",
          "(2, 0)",
          "(2, 5)",
        ],
      },
      {
        type: "circle-correct",
        title: "Substitution or Elimination?",
        instruction:
          "For each pair of equations, circle the most efficient method to solve them.",
        questions: [
          {
            prompt: "y = 3x + 1 and 2x + y = 11",
            options: ["Substitution (y is already isolated)", "Elimination", "Graphing only"],
          },
          {
            prompt: "2x + 3y = 12 and 2x − y = 4",
            options: ["Elimination (subtract to remove x)", "Substitution", "Trial and error"],
          },
          {
            prompt: "y = x − 5 and y = 2x + 1",
            options: ["Substitution (both have y isolated)", "Elimination", "Neither method works"],
          },
          {
            prompt: "3x + 2y = 14 and 5x − 2y = 10",
            options: ["Elimination (add to remove y)", "Substitution", "Cannot be solved"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Variables",
        instruction:
          "For each word problem, circle the correct choice of variables.",
        questions: [
          {
            prompt: "Adult tickets cost $15 and child tickets cost $10. A group buys some of each.",
            options: ["Let a = number of adult tickets, c = number of child tickets", "Let a = price of adult tickets, c = price of child tickets", "Let x = total tickets, y = total cost"],
          },
          {
            prompt: "A shop sells pens and notebooks. You know the total items and total cost.",
            options: ["Let p = number of pens, n = number of notebooks", "Let p = price of pens, n = price of notebooks", "Let x = pens + notebooks, y = money spent"],
          },
          {
            prompt: "Two friends have a combined age of 30 and one is 4 years older.",
            options: ["Let a = age of friend 1, b = age of friend 2", "Let x = combined age, y = difference", "Let a = 30, b = 4"],
          },
        ],
      },
      {
        type: "matching",
        title: "Method Name to Description",
        instruction:
          "Draw a line from each solving method to its description.",
        left: [
          "Substitution method",
          "Elimination method",
          "Graphical method",
          "Trial and improvement",
          "Matrix method",
        ],
        right: [
          "Add or subtract equations to remove one variable",
          "Plot both equations and find the intersection point",
          "Replace one variable with an expression from the other equation",
          "Guess values and refine until both equations are satisfied",
          "Use arrays of coefficients to solve (studied in higher maths)",
        ],
      },
      {
        type: "sorting",
        title: "Consistent vs Inconsistent Systems",
        instruction:
          "Sort each system of equations: Consistent (has a solution) or Inconsistent (no solution).",
        columns: ["Consistent (has solution)", "Inconsistent (no solution)"],
        items: [
          { label: "y = 2x + 3 and y = 2x − 1" },
          { label: "y = x + 4 and y = −x + 2" },
          { label: "3x + y = 7 and 6x + 2y = 14" },
          { label: "x + y = 5 and x + y = 8" },
          { label: "2x − y = 1 and x + y = 5" },
          { label: "4x + 2y = 10 and 2x + y = 3" },
          { label: "y = 3x and y = −2x + 10" },
          { label: "y = 5x + 2 and y = 5x + 7" },
        ],
      },
      {
        type: "circle-correct",
        title: "Does the Point Satisfy Both Equations?",
        instruction:
          "Circle YES if the given point satisfies both equations, or NO if it does not.",
        questions: [
          {
            prompt: "Point (3, 5): y = 2x − 1 and x + y = 8",
            options: ["YES (5 = 2(3)−1 = 5 ✓ and 3+5 = 8 ✓)", "NO"],
          },
          {
            prompt: "Point (1, 4): y = 3x + 2 and 2x + y = 7",
            options: ["NO (4 = 3(1)+2 = 5 ✗)", "YES"],
          },
          {
            prompt: "Point (2, 1): x − y = 1 and 3x + 2y = 8",
            options: ["YES (2−1 = 1 ✓ and 3(2)+2(1) = 8 ✓)", "NO"],
          },
          {
            prompt: "Point (4, 3): y = x − 1 and y = 2x − 6",
            options: ["NO (3 = 4−1 = 3 ✓ but 3 = 2(4)−6 = 2 ✗)", "YES"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Number of Solutions",
        instruction:
          "Circle the correct number of solutions for each system of equations.",
        questions: [
          {
            prompt: "y = 2x + 3 and y = −x + 6 (different gradients)",
            options: ["Exactly one solution", "No solutions", "Infinitely many solutions"],
          },
          {
            prompt: "y = 3x + 1 and y = 3x − 4 (same gradient, different intercept)",
            options: ["No solutions (parallel lines)", "Exactly one solution", "Infinitely many solutions"],
          },
          {
            prompt: "2x + 4y = 8 and x + 2y = 4 (one is a multiple of the other)",
            options: ["Infinitely many solutions (same line)", "Exactly one solution", "No solutions"],
          },
          {
            prompt: "y = −x + 5 and y = x − 1 (different gradients)",
            options: ["Exactly one solution", "No solutions", "Infinitely many solutions"],
          },
        ],
      },
      {
        type: "matching",
        title: "Graph Description to Number of Solutions",
        instruction:
          "Draw a line from each graph description to the number of solutions the system has.",
        left: [
          "Two lines that cross at one point",
          "Two parallel lines that never meet",
          "Two lines that lie on top of each other",
          "A steep line and a flat line crossing",
          "Two lines with the same y-intercept but different gradients",
        ],
        right: [
          "Exactly one solution",
          "No solutions",
          "Infinitely many solutions",
          "Exactly one solution",
          "Exactly one solution (at the y-intercept)",
        ],
      },
      // --- MEDIUM: Solving techniques ---
      {
        type: "circle-correct",
        title: "Correct Substitution Step",
        instruction:
          "For each equation pair, circle the correct substitution step.",
        questions: [
          {
            prompt: "y = 3x + 2 and y = x + 8 → Set equal:",
            options: ["3x + 2 = x + 8", "3x + 2 = 3x + 8", "x + 8 = 3(x + 2)"],
          },
          {
            prompt: "y = 4x − 3 and 2x + y = 9 → Substitute y:",
            options: ["2x + (4x − 3) = 9", "2x + 4x − 3 = 9y", "2(4x − 3) + y = 9"],
          },
          {
            prompt: "x = 2y + 1 and 3x − y = 8 → Substitute x:",
            options: ["3(2y + 1) − y = 8", "3x − (2y + 1) = 8", "2y + 1 − y = 8"],
          },
          {
            prompt: "y = x − 5 and y = −2x + 7 → Set equal:",
            options: ["x − 5 = −2x + 7", "x − 5 = 2x + 7", "−2x + 7 = x + 5"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Correct Elimination Step",
        instruction:
          "For each pair of equations, circle the correct elimination step.",
        questions: [
          {
            prompt: "2x + y = 10 and x − y = 2 → Add equations:",
            options: ["3x = 12", "3x + 2y = 12", "x = 8"],
          },
          {
            prompt: "x + 2y = 7 and 3x + 2y = 13 → Subtract first from second:",
            options: ["2x = 6", "4x + 4y = 20", "2x + 4y = 20"],
          },
          {
            prompt: "3x + 4y = 18 and 3x − 2y = 6 → Subtract second from first:",
            options: ["6y = 12", "6x + 2y = 24", "0 = 12"],
          },
          {
            prompt: "5x + 3y = 21 and 2x + 3y = 12 → Subtract second from first:",
            options: ["3x = 9", "7x + 6y = 33", "3x + 6y = 9"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Solve by Substitution — Step by Step",
        instruction:
          "Put the steps in the correct order to solve: y = 2x − 1 and y = −x + 5",
        items: [
          { label: "Set the two expressions for y equal: 2x − 1 = −x + 5" },
          { label: "Add x to both sides: 3x − 1 = 5" },
          { label: "Add 1 to both sides: 3x = 6" },
          { label: "Divide by 3: x = 2" },
          { label: "Substitute x = 2 into y = 2x − 1: y = 2(2) − 1 = 3" },
          { label: "Solution: (2, 3) — verify in second equation: 3 = −2 + 5 = 3 ✓" },
        ],
      },
      {
        type: "sequence",
        title: "Solve by Elimination — Step by Step",
        instruction:
          "Put the steps in the correct order to solve: 3x + 2y = 16 and x − 2y = 0",
        items: [
          { label: "Notice the y-coefficients are +2y and −2y (opposites)" },
          { label: "Add the two equations: 3x + 2y + x − 2y = 16 + 0" },
          { label: "Simplify: 4x = 16" },
          { label: "Divide by 4: x = 4" },
          { label: "Substitute x = 4 into x − 2y = 0: 4 − 2y = 0, so y = 2" },
          { label: "Solution: (4, 2) — verify in first equation: 3(4) + 2(2) = 16 ✓" },
        ],
      },
      {
        type: "circle-correct",
        title: "Solve and Find x",
        instruction:
          "Circle the correct value of x for each system.",
        questions: [
          {
            prompt: "x + y = 10 and x − y = 4 → Add equations: 2x = 14, so x =",
            options: ["7", "5", "14"],
          },
          {
            prompt: "y = x + 3 and y = 2x − 1 → Set equal: x + 3 = 2x − 1, so x =",
            options: ["4", "2", "−4"],
          },
          {
            prompt: "2x + 3y = 19 and 2x + y = 11 → Subtract: 2y = 8, y = 4, so 2x + 4 = 11, x =",
            options: ["3.5", "4", "7"],
          },
          {
            prompt: "3x − y = 7 and x + y = 5 → Add: 4x = 12, so x =",
            options: ["3", "4", "12"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find y After Finding x",
        instruction:
          "Given the value of x, circle the correct value of y.",
        questions: [
          {
            prompt: "x = 7 in x + y = 10:",
            options: ["y = 3", "y = 7", "y = 17"],
          },
          {
            prompt: "x = 4 in y = x + 3:",
            options: ["y = 7", "y = 1", "y = 12"],
          },
          {
            prompt: "x = 3.5 in 2x + y = 11:",
            options: ["y = 4", "y = 7", "y = 3.5"],
          },
          {
            prompt: "x = 3 in x + y = 5:",
            options: ["y = 2", "y = 3", "y = 8"],
          },
        ],
      },
      {
        type: "matching",
        title: "Word Problem to Equation Pair",
        instruction:
          "Draw a line from each word problem to the correct pair of simultaneous equations.",
        left: [
          "6 items total, adults $12, children $8, spent $56",
          "Sum of two numbers is 20, difference is 6",
          "2 pizzas + 3 drinks = $33, 1 pizza + 3 drinks = $21",
          "Perimeter 28 cm, length is 4 more than width",
          "5 kg apples + 3 kg bananas = $27, 2 kg apples + 3 kg bananas = $18",
        ],
        right: [
          "a + c = 6 and 12a + 8c = 56",
          "x + y = 20 and x − y = 6",
          "2p + 3d = 33 and p + 3d = 21",
          "2l + 2w = 28 and l = w + 4",
          "5a + 3b = 27 and 2a + 3b = 18",
        ],
      },
      {
        type: "circle-correct",
        title: "Linear Inequality Notation",
        instruction:
          "Circle the correct inequality that represents each statement.",
        questions: [
          {
            prompt: "x is greater than or equal to 3",
            options: ["x ≥ 3", "x > 3", "x ≤ 3"],
          },
          {
            prompt: "y is less than 2x + 1",
            options: ["y < 2x + 1", "y ≤ 2x + 1", "y > 2x + 1"],
          },
          {
            prompt: "The sum of x and y is at most 10",
            options: ["x + y ≤ 10", "x + y < 10", "x + y ≥ 10"],
          },
          {
            prompt: "x is strictly between −2 and 5",
            options: ["−2 < x < 5", "−2 ≤ x ≤ 5", "x < −2 or x > 5"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Side of the Line to Shade?",
        instruction:
          "For each inequality, circle the correct region to shade on a graph.",
        questions: [
          {
            prompt: "y < x + 3",
            options: ["Below the line y = x + 3", "Above the line y = x + 3", "On the line y = x + 3"],
          },
          {
            prompt: "y ≥ −2x + 4",
            options: ["Above the line (including the line)", "Below the line (including the line)", "Only on the line"],
          },
          {
            prompt: "x + y > 6",
            options: ["Above the line x + y = 6", "Below the line x + y = 6", "On the line x + y = 6"],
          },
          {
            prompt: "y ≤ 3 (horizontal line)",
            options: ["Below and including y = 3", "Above and including y = 3", "Only the line y = 3"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Points Inside vs Outside the Region",
        instruction:
          "The feasible region is defined by y ≤ x + 4 and y ≥ 0 and x ≥ 0. Sort each point: Inside or Outside the region.",
        columns: ["Inside the region", "Outside the region"],
        items: [
          { label: "(0, 0): 0 ≤ 0+4 ✓, 0 ≥ 0 ✓, 0 ≥ 0 ✓" },
          { label: "(2, 5): 5 ≤ 2+4 = 6 ✓, 5 ≥ 0 ✓, 2 ≥ 0 ✓" },
          { label: "(1, 7): 7 ≤ 1+4 = 5 ✗" },
          { label: "(3, 3): 3 ≤ 3+4 = 7 ✓, 3 ≥ 0 ✓, 3 ≥ 0 ✓" },
          { label: "(−1, 2): x ≥ 0 ✗" },
          { label: "(4, 4): 4 ≤ 4+4 = 8 ✓, 4 ≥ 0 ✓, 4 ≥ 0 ✓" },
          { label: "(0, 5): 5 ≤ 0+4 = 4 ✗" },
          { label: "(5, 1): 1 ≤ 5+4 = 9 ✓, 1 ≥ 0 ✓, 5 ≥ 0 ✓" },
        ],
      },
      // --- HARD: Algebraic solving & word problems ---
      {
        type: "open-response",
        title: "Solve Algebraically — System 1",
        instruction:
          "Solve the following system of simultaneous equations. Show all working and verify your answer.",
        prompts: [
          {
            text: "Solve: 3x + 2y = 16 and 5x − 2y = 8. Use an appropriate method (substitution or elimination). Show every step and check your answer by substituting back into both equations.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Solve Algebraically — System 2",
        instruction:
          "Solve the following system of simultaneous equations. Show all working and verify your answer.",
        prompts: [
          {
            text: "Solve: 2x + 5y = 21 and 3x − 2y = 4. (Hint: you may need to multiply one or both equations before eliminating.) Show every step and check your answer.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Word Problem — Ticket Prices",
        instruction:
          "Write simultaneous equations for the problem, then solve. Show all working.",
        prompts: [
          {
            text: "Movie tickets cost $12 for adults and $8 for children. A family bought 6 tickets for $56. Let a = number of adult tickets and c = number of child tickets. Write two equations, solve the system, and state how many of each ticket type were purchased.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Word Problem — Phone Plans",
        instruction:
          "Write simultaneous equations for the problem, then solve. Show all working.",
        prompts: [
          {
            text: "A phone plan charges a monthly fee (f) plus a per-gigabyte rate (g). Using 5 GB costs $35 total, and using 12 GB costs $56 total. Write two equations, solve for f and g, and find the cost of using 20 GB in a month.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Graph Two Inequalities",
        instruction:
          "Graph the following system of linear inequalities and describe the feasible region.",
        prompts: [
          {
            text: "On a set of axes, graph the region satisfying: y ≤ 2x + 4, y ≥ −x + 1, and x ≥ 0. Label the boundary lines, shade the feasible region, and find the coordinates of the vertices (corner points) of the region.",
            type: "box",
          },
          {
            text: "Describe the shape of the feasible region and explain how you determined which side of each line to shade.",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Equations from a Word Problem",
        instruction:
          "Translate the following situation into a system of equations. You do NOT need to solve — just define variables and write the equations.",
        prompts: [
          {
            text: "A bakery sells cupcakes for $4 each and slices of cake for $6 each. On Saturday they sold 45 items for a total of $210. Define appropriate variables and write two simultaneous equations that model this situation.",
            type: "lines",
            lines: 5,
          },
          {
            text: "A farmer has chickens and cows. In total there are 30 animals and 86 legs. Define appropriate variables and write two simultaneous equations that model this situation.",
            type: "lines",
            lines: 5,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Simultaneous Equations & Inequalities",
        instruction:
          "Circle TRUE or FALSE for each statement.",
        questions: [
          {
            prompt: "Two linear equations with different gradients always have exactly one solution",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "If two lines have the same gradient and same y-intercept, they have no solutions",
            options: ["FALSE (they have infinitely many — they are the same line)", "TRUE"],
          },
          {
            prompt: "The solution to a system of two linear equations is always a point (x, y)",
            options: ["FALSE (it could be no solution or infinitely many)", "TRUE"],
          },
          {
            prompt: "When graphing y < 3x + 1, the boundary line should be dashed (not solid)",
            options: ["TRUE (strict inequality means points on the line are not included)", "FALSE"],
          },
          {
            prompt: "Multiplying both sides of an inequality by a negative number reverses the inequality sign",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Word Problem",
        instruction:
          "Design your own simultaneous equations word problem.",
        prompts: [
          {
            text: "Write a real-world word problem that can be modelled by a system of two simultaneous linear equations. Then provide the equations and solve your own problem, showing all working. Make sure the solution gives whole-number answers.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      // --- HOME: Real-world exploration ---
      {
        type: "home-activity",
        title: "Equations in Everyday Life",
        instruction: "Find real-world situations that involve simultaneous equations.",
        suggestions: [
          "Compare two mobile phone plans with different monthly fees and per-minute rates. Set up simultaneous equations and find the number of minutes where both plans cost the same.",
          "At a cafe, price two different breakfast combos (e.g. 2 coffees + 1 muffin = $14, 1 coffee + 2 muffins = $13). Write equations and figure out the individual prices.",
          "Research two gym memberships with different joining fees and monthly rates. Set up equations and calculate the number of months at which they break even.",
        ],
      },
      {
        type: "home-activity",
        title: "Graphical Exploration",
        instruction: "Explore simultaneous equations and inequalities graphically.",
        suggestions: [
          "Use a free graphing tool (like Desmos) to graph two linear equations simultaneously. Observe where the lines intersect and verify the solution algebraically.",
          "Graph the inequalities y ≤ x + 3 and y ≥ −x + 1 in Desmos. Describe the shape and size of the shaded region. What happens if you change the constants?",
          "Create a system of two parallel lines in Desmos (same gradient, different y-intercept). Explain why the system has no solution by observing the graph.",
        ],
      },
    ],
  },

  // ── WS 4: Conjectures with Functions & Relations ──────────────
  {
    slug: "conjectures-functions-relations",
    title: "Conjectures with Functions & Relations",
    strand: "Algebra",
    description:
      "Make and test conjectures involving functions and relations using digital tools and algebraic reasoning",
    activities: [
      // --- EASY: Classify and identify function types ---
      {
        type: "sorting",
        title: "Classify the Function Type",
        instruction:
          "Sort each function into the correct column: Linear, Quadratic, or Exponential.",
        columns: ["Linear", "Quadratic", "Exponential"],
        items: [
          { label: "y = 3x − 7" },
          { label: "y = x² + 4x − 5" },
          { label: "y = 2ˣ" },
          { label: "y = −½x + 3" },
          { label: "y = −2x² + 9" },
          { label: "y = 5 × 3ˣ" },
          { label: "y = (x − 1)(x + 3)" },
          { label: "y = 100 × 0.9ˣ" },
          { label: "y = 6x" },
        ],
      },
      {
        type: "matching",
        title: "Function Type to General Form",
        instruction:
          "Draw a line from each function type to its general form.",
        left: [
          "Linear",
          "Quadratic (standard form)",
          "Quadratic (turning point form)",
          "Exponential growth",
          "Exponential decay",
        ],
        right: [
          "y = mx + c",
          "y = ax² + bx + c",
          "y = a(x − h)² + k",
          "y = a × bˣ where b > 1",
          "y = a × bˣ where 0 < b < 1",
        ],
      },
      {
        type: "circle-correct",
        title: "Linear, Quadratic, or Exponential Table?",
        instruction:
          "Look at the pattern in each table of values. Circle the correct function type.",
        questions: [
          {
            prompt: "x: 0, 1, 2, 3, 4 → y: 3, 5, 7, 9, 11 (constant first difference of +2)",
            options: ["Linear", "Quadratic", "Exponential"],
          },
          {
            prompt: "x: 0, 1, 2, 3, 4 → y: 1, 4, 9, 16, 25 (first differences: 3, 5, 7, 9 — constant second difference of +2)",
            options: ["Quadratic", "Linear", "Exponential"],
          },
          {
            prompt: "x: 0, 1, 2, 3, 4 → y: 2, 6, 18, 54, 162 (each value is ×3)",
            options: ["Exponential", "Linear", "Quadratic"],
          },
          {
            prompt: "x: 0, 1, 2, 3, 4 → y: 0, 1, 4, 9, 16 (first differences: 1, 3, 5, 7 — constant second difference of +2)",
            options: ["Quadratic", "Linear", "Exponential"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the y-intercept",
        instruction:
          "Circle the y-intercept (the value of y when x = 0) for each function.",
        questions: [
          {
            prompt: "y = 2x + 7",
            options: ["7", "2", "0"],
          },
          {
            prompt: "y = x² − 3x + 5",
            options: ["5", "−3", "0"],
          },
          {
            prompt: "y = 4 × 2ˣ",
            options: ["4", "2", "1"],
          },
          {
            prompt: "y = (x − 2)(x + 3)",
            options: ["−6", "−2", "3"],
          },
          {
            prompt: "y = −3x² + 12",
            options: ["12", "−3", "0"],
          },
        ],
      },
      {
        type: "matching",
        title: "Graph Shape to Function Type",
        instruction:
          "Draw a line from each graph description to the function type that produces it.",
        left: [
          "A straight line with constant slope",
          "A U-shaped curve (parabola) opening upward",
          "A curve that rises slowly then very steeply",
          "An ∩-shaped curve (parabola) opening downward",
          "A curve that starts high and approaches zero",
        ],
        right: [
          "Linear (positive gradient)",
          "Quadratic with a > 0",
          "Exponential growth",
          "Quadratic with a < 0",
          "Exponential decay",
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Gradient",
        instruction:
          "For each linear function, circle the gradient (slope).",
        questions: [
          {
            prompt: "y = 5x − 3",
            options: ["5", "−3", "−5"],
          },
          {
            prompt: "y = −2x + 8",
            options: ["−2", "8", "2"],
          },
          {
            prompt: "2y = 6x + 10 (rewrite as y = 3x + 5)",
            options: ["3", "6", "5"],
          },
          {
            prompt: "y = ¾x − 1",
            options: ["¾", "−1", "−¾"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Function or Not-a-Function?",
        instruction:
          "Sort each relation: Function or Not a Function. (A function assigns exactly one y-value to each x-value.)",
        columns: ["Function", "Not a Function"],
        items: [
          { label: "y = 2x + 1" },
          { label: "x² + y² = 25 (a circle)" },
          { label: "y = x²" },
          { label: "x = y² (horizontal parabola)" },
          { label: "y = 3ˣ" },
          { label: "y = ±√x" },
          { label: "y = |x|" },
          { label: "x = 4 (vertical line)" },
        ],
      },
      {
        type: "circle-correct",
        title: "Evaluate Functions",
        instruction:
          "Circle the correct value of each function at the given x-value.",
        questions: [
          {
            prompt: "f(x) = 2x − 3; find f(4)",
            options: ["5", "11", "−5"],
          },
          {
            prompt: "g(x) = x² + 1; find g(−3)",
            options: ["10", "−8", "7"],
          },
          {
            prompt: "h(x) = 3 × 2ˣ; find h(3)",
            options: ["24", "18", "12"],
          },
          {
            prompt: "f(x) = (x − 1)(x + 5); find f(0)",
            options: ["−5", "5", "−1"],
          },
          {
            prompt: "g(x) = −x² + 4x; find g(2)",
            options: ["4", "0", "8"],
          },
        ],
      },
      // --- MEDIUM: Conjectures and properties ---
      {
        type: "circle-correct",
        title: "True or False — Quadratic Conjectures",
        instruction:
          "Circle TRUE or FALSE for each conjecture about quadratic functions.",
        questions: [
          {
            prompt: "All quadratic functions have exactly two x-intercepts",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "The graph of y = ax² + bx + c is always a parabola",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "If a > 0 in y = ax² + bx + c, the parabola opens upward",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "The vertex of y = x² + bx + c is always on the y-axis",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "A quadratic function can have at most one axis of symmetry",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Exponential Conjectures",
        instruction:
          "Circle TRUE or FALSE for each conjecture about exponential functions.",
        questions: [
          {
            prompt: "The graph of y = aˣ (where a > 1) always passes through (0, 1)",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "An exponential function can produce negative y-values when a > 0",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "The graph of y = 2ˣ has a horizontal asymptote at y = 0",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "Exponential decay (0 < b < 1) means y eventually becomes negative",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "Multiplying by a constant (e.g. y = 5 × 2ˣ) changes the y-intercept but not the growth rate",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Linear Conjectures",
        instruction:
          "Circle TRUE or FALSE for each conjecture about linear functions.",
        questions: [
          {
            prompt: "A linear function can have a maximum or minimum value",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "If two linear functions have the same gradient, they never intersect (assuming different y-intercepts)",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "A horizontal line (y = c) is a linear function with gradient 0",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "Every straight line can be written in the form y = mx + c",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "The gradient of a linear function tells you the rate of change of y with respect to x",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "matching",
        title: "Transformation to Effect on Graph",
        instruction:
          "Draw a line from each transformation to its effect on the graph of y = x².",
        left: [
          "y = x² + 3",
          "y = (x − 4)²",
          "y = −x²",
          "y = 2x²",
          "y = (x + 1)² − 5",
        ],
        right: [
          "Shift up 3 units",
          "Shift right 4 units",
          "Reflect in the x-axis (flip upside down)",
          "Narrower (steeper) parabola",
          "Shift left 1 unit and down 5 units",
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Vertex",
        instruction:
          "Circle the correct vertex (turning point) for each quadratic in turning point form y = a(x − h)² + k, where vertex = (h, k).",
        questions: [
          {
            prompt: "y = (x − 3)² + 2",
            options: ["(3, 2)", "(−3, 2)", "(3, −2)"],
          },
          {
            prompt: "y = −(x + 1)² + 7",
            options: ["(−1, 7)", "(1, 7)", "(−1, −7)"],
          },
          {
            prompt: "y = 2(x − 5)² − 4",
            options: ["(5, −4)", "(−5, −4)", "(5, 4)"],
          },
          {
            prompt: "y = −3(x + 2)²",
            options: ["(−2, 0)", "(2, 0)", "(0, −2)"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Axis of Symmetry",
        instruction:
          "The axis of symmetry of y = ax² + bx + c is x = −b/(2a). Circle the correct axis of symmetry.",
        questions: [
          {
            prompt: "y = x² − 6x + 8 (a = 1, b = −6)",
            options: ["x = 3", "x = −3", "x = 6"],
          },
          {
            prompt: "y = 2x² + 8x + 1 (a = 2, b = 8)",
            options: ["x = −2", "x = 2", "x = −4"],
          },
          {
            prompt: "y = −x² + 4x − 3 (a = −1, b = 4)",
            options: ["x = 2", "x = −2", "x = 4"],
          },
          {
            prompt: "y = 3x² − 12x + 7 (a = 3, b = −12)",
            options: ["x = 2", "x = −2", "x = 4"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Steps to Find the Vertex of y = x² + 4x − 5",
        instruction:
          "Put the steps in the correct order to find the vertex of the parabola y = x² + 4x − 5.",
        items: [
          { label: "Identify a = 1, b = 4, c = −5" },
          { label: "Find the axis of symmetry: x = −b/(2a) = −4/(2×1) = −2" },
          { label: "Substitute x = −2 into the equation: y = (−2)² + 4(−2) − 5" },
          { label: "Calculate: y = 4 − 8 − 5 = −9" },
          { label: "The vertex is (−2, −9)" },
          { label: "Since a = 1 > 0, the vertex is a minimum point" },
        ],
      },
      {
        type: "circle-correct",
        title: "Number of x-intercepts from the Discriminant",
        instruction:
          "The discriminant is Δ = b² − 4ac. If Δ > 0: two x-intercepts. If Δ = 0: one x-intercept. If Δ < 0: no x-intercepts. Circle the correct number.",
        questions: [
          {
            prompt: "y = x² − 4x + 3 → Δ = (−4)² − 4(1)(3) = 16 − 12 = 4",
            options: ["Two x-intercepts (Δ > 0)", "One x-intercept (Δ = 0)", "No x-intercepts (Δ < 0)"],
          },
          {
            prompt: "y = x² + 6x + 9 → Δ = 6² − 4(1)(9) = 36 − 36 = 0",
            options: ["One x-intercept (Δ = 0)", "Two x-intercepts (Δ > 0)", "No x-intercepts (Δ < 0)"],
          },
          {
            prompt: "y = 2x² + x + 3 → Δ = 1² − 4(2)(3) = 1 − 24 = −23",
            options: ["No x-intercepts (Δ < 0)", "One x-intercept (Δ = 0)", "Two x-intercepts (Δ > 0)"],
          },
          {
            prompt: "y = x² − 5x + 2 → Δ = (−5)² − 4(1)(2) = 25 − 8 = 17",
            options: ["Two x-intercepts (Δ > 0)", "One x-intercept (Δ = 0)", "No x-intercepts (Δ < 0)"],
          },
        ],
      },
      {
        type: "matching",
        title: "Discriminant Value to Number of Solutions",
        instruction:
          "Draw a line from each discriminant result to the number of real solutions for the quadratic equation.",
        left: [
          "Δ = 25",
          "Δ = 0",
          "Δ = −16",
          "Δ = 1",
          "Δ = −3",
        ],
        right: [
          "Two distinct real solutions",
          "One repeated real solution",
          "No real solutions",
          "Two distinct real solutions",
          "No real solutions",
        ],
      },
      {
        type: "sorting",
        title: "Parabola Opens Up or Down?",
        instruction:
          "Sort each quadratic function: Opens Upward (a > 0) or Opens Downward (a < 0).",
        columns: ["Opens Upward (minimum)", "Opens Downward (maximum)"],
        items: [
          { label: "y = x² + 3x + 1" },
          { label: "y = −x² + 6x − 8" },
          { label: "y = 2x² − 4x + 7" },
          { label: "y = −3x² + 2" },
          { label: "y = ½x² − x" },
          { label: "y = −(x − 4)² + 10" },
          { label: "y = 4x² + 1" },
          { label: "y = −0.5x² + 3x" },
        ],
      },
      // --- HARD: Investigation and reasoning ---
      {
        type: "open-response",
        title: "Investigate: Coefficient of x² and Parabola Width",
        instruction:
          "Investigate the following conjecture. Show your reasoning with examples.",
        prompts: [
          {
            text: "Conjecture: 'When you increase the coefficient of x² in y = ax², the parabola gets narrower.' Test this by comparing y = x², y = 2x², y = 5x², and y = ½x². For each, calculate y when x = 1, 2, and 3. What happens to the y-values as 'a' increases? Explain why a larger 'a' makes the parabola narrower.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Investigate: When Does Exponential Overtake Linear?",
        instruction:
          "Test the conjecture and show your working.",
        prompts: [
          {
            text: "Conjecture: 'An exponential function will always eventually exceed a linear function.' Test with y = 2ˣ and y = 100x. Calculate both functions for x = 0, 1, 2, 5, 7, 8, 10, and 15. For what values of x is the linear function greater? At approximately what x-value does the exponential overtake? Explain why this must always happen eventually.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Find and Verify x-intercepts",
        instruction:
          "Find the x-intercepts of each quadratic and verify your answer.",
        prompts: [
          {
            text: "Find the x-intercepts of y = x² − 2x − 15 by factorising. Then verify by substituting each x-intercept back into the equation. Also find the vertex and sketch a rough graph labelling the intercepts and vertex.",
            type: "lines",
            lines: 8,
          },
          {
            text: "Find the x-intercepts of y = 2x² + 5x − 3 by factorising or using the quadratic formula. Verify your solutions. How does the discriminant confirm the number of intercepts?",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Functions for Same Output",
        instruction:
          "Find where two functions produce the same y-value.",
        prompts: [
          {
            text: "For what value(s) of x do f(x) = x² − 3 and g(x) = 2x + 1 give the same output? Set them equal and solve: x² − 3 = 2x + 1. Verify your solutions by substituting into both functions. What does this represent graphically?",
            type: "lines",
            lines: 6,
          },
          {
            text: "A linear function f(x) = 50 + 10x and a quadratic function g(x) = x² model two different situations. Find where they intersect. For what x-values is the linear function greater? When does the quadratic overtake?",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response",
        title: "Investigate Translations",
        instruction:
          "Explore how translations affect a function's graph.",
        prompts: [
          {
            text: "Starting with y = x², investigate what happens when you replace x with (x − h). Compare y = x², y = (x − 3)², and y = (x + 2)². For each, find the vertex and y-intercept. State your conjecture about how the value of h affects the graph's position.",
            type: "lines",
            lines: 6,
          },
          {
            text: "Starting with y = x², investigate what happens when you add k. Compare y = x², y = x² + 4, and y = x² − 3. For each, find the vertex. Then combine both: describe the graph of y = (x − 1)² + 6 without plotting it.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Domain and Range",
        instruction:
          "Circle TRUE or FALSE for each statement about function domains and ranges.",
        questions: [
          {
            prompt: "The domain of y = x² is all real numbers",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "The range of y = x² is y ≥ 0",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "The domain of y = 2ˣ is x ≥ 0 only",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "The range of y = −x² + 5 is y ≤ 5",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "The range of y = 3ˣ includes negative numbers",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "The range of a linear function y = mx + c (where m ≠ 0) is all real numbers",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Create a Conjecture and Test It",
        instruction:
          "Make your own conjecture about functions and test it systematically.",
        prompts: [
          {
            text: "Create a conjecture about the relationship between the sign of 'a' and the direction a parabola opens, AND the number of x-intercepts based on the vertex's position. For example: 'If a > 0 and the vertex is below the x-axis, then...' State your conjecture clearly, test it with at least 3 specific quadratics, and explain whether your conjecture holds or needs revision.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Function Modelling",
        instruction:
          "Apply function knowledge to a real-world scenario.",
        prompts: [
          {
            text: "A cricket ball is hit into the air. Its height (in metres) after t seconds is modelled by h(t) = −5t² + 20t + 1.5. Find: (a) the initial height when hit, (b) the maximum height and when it occurs, (c) when the ball returns to ground level (h = 0). Explain what each part of the equation represents in context.",
            type: "lines",
            lines: 10,
          },
          {
            text: "A company's profit (in thousands of dollars) is modelled by P(x) = −2x² + 24x − 40, where x is the price of the product in dollars. Find the price that maximises profit, the maximum profit, and the price range where the company makes a positive profit. What does the vertex represent in this context?",
            type: "lines",
            lines: 8,
          },
        ],
      },
      // --- HOME: Technology and real-world exploration ---
      {
        type: "home-activity",
        title: "Graphing with Technology",
        instruction:
          "Use a graphing tool (such as Desmos, GeoGebra, or a graphing calculator) to explore functions.",
        suggestions: [
          "Graph y = ax² for a = −3, −1, −0.5, 0.5, 1, 3. Make a conjecture about how the value of 'a' affects the parabola's shape and direction. Test with one more value of 'a' to verify.",
          "Graph y = (x − h)² + k for different values of h and k. Explain how to move a parabola to any position on the coordinate plane.",
          "Graph y = 2ˣ, y = 3ˣ, and y = 10ˣ on the same axes. Also graph y = 0.5ˣ and y = 0.1ˣ. Make a conjecture about how the base affects the steepness and whether the function grows or decays.",
        ],
      },
      {
        type: "home-activity",
        title: "Real-World Data and Function Fitting",
        instruction:
          "Collect or research real data and decide which type of function best models it.",
        suggestions: [
          "Collect data on the temperature at different times of day (e.g. 6 am, 9 am, 12 pm, 3 pm, 6 pm, 9 pm). Plot the points. Does the pattern look linear, quadratic, or something else? Justify your choice.",
          "Research Australia's population over the last 50 years (e.g. every 10 years). Plot the data. Test whether a linear or exponential model fits better by comparing predictions.",
          "Drop a ball from different heights and measure the bounce height. Plot drop height vs bounce height. Is the relationship linear? Find an approximate equation for the line of best fit.",
        ],
      },
    ],
  },

  // ── WS 5: Surface Area & Volume of Composites ────────────────
  {
    slug: "surface-area-volume-composites",
    title: "Surface Area & Volume of Composites",
    strand: "Measurement",
    description:
      "Solve problems involving surface area and volume of composite objects by decomposing them into known shapes",
    activities: [
      // --- EASY: Identify shapes, formulas and units ---
      {
        type: "matching",
        title: "3D Shape → Volume Formula",
        instruction:
          "Draw a line from each 3D shape to its volume formula.",
        left: [
          "Rectangular prism",
          "Cylinder",
          "Cone",
          "Sphere",
          "Triangular prism",
        ],
        right: [
          "V = ⁴⁄₃πr³",
          "V = l × w × h",
          "V = πr²h",
          "V = ½ × b × h × l",
          "V = ⅓πr²h",
        ],
      },
      {
        type: "matching",
        title: "3D Shape → Surface Area Formula",
        instruction:
          "Draw a line from each 3D shape to its total surface area formula.",
        left: [
          "Cube (side s)",
          "Cylinder (radius r, height h)",
          "Sphere (radius r)",
          "Rectangular prism (l, w, h)",
          "Cone (radius r, slant height l)",
        ],
        right: [
          "SA = 2(lw + lh + wh)",
          "SA = 6s²",
          "SA = 4πr²",
          "SA = 2πr² + 2πrh",
          "SA = πr² + πrl",
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Shape from a Description",
        instruction: "Circle the 3D shape that matches each description.",
        questions: [
          {
            prompt: "A solid with two parallel circular faces and a curved surface connecting them",
            options: ["Cylinder", "Cone", "Sphere"],
          },
          {
            prompt: "A solid with one circular base and a curved surface tapering to a point",
            options: ["Cone", "Cylinder", "Hemisphere"],
          },
          {
            prompt: "A solid where every point on the surface is the same distance from the centre",
            options: ["Sphere", "Cylinder", "Cube"],
          },
          {
            prompt: "A solid with two identical triangular faces and three rectangular faces",
            options: ["Triangular prism", "Rectangular prism", "Pyramid"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Units for Volume vs Surface Area",
        instruction: "Circle the correct unit for each measurement.",
        questions: [
          {
            prompt: "Volume of a water tank measured in metres",
            options: ["m³", "m²", "m"],
          },
          {
            prompt: "Surface area of a box measured in centimetres",
            options: ["cm²", "cm³", "cm"],
          },
          {
            prompt: "Volume of a medicine capsule measured in millimetres",
            options: ["mm³", "mm²", "mm"],
          },
          {
            prompt: "Area of fabric needed to cover a sphere, measured in metres",
            options: ["m²", "m³", "m"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Prisms vs Pyramids vs Curved Solids",
        instruction:
          "Sort each 3D shape into the correct column: Prism, Pyramid, or Curved Solid.",
        columns: ["Prism", "Pyramid", "Curved Solid"],
        items: [
          { label: "Rectangular prism" },
          { label: "Cylinder" },
          { label: "Square pyramid" },
          { label: "Triangular prism" },
          { label: "Cone" },
          { label: "Sphere" },
          { label: "Hexagonal prism" },
          { label: "Triangular pyramid (tetrahedron)" },
          { label: "Hemisphere" },
        ],
      },
      {
        type: "circle-correct",
        title: "Volume of a Rectangular Prism",
        instruction: "Circle the correct volume for each rectangular prism.",
        questions: [
          {
            prompt: "l = 6 cm, w = 4 cm, h = 3 cm",
            options: ["72 cm³", "48 cm³", "36 cm³"],
          },
          {
            prompt: "l = 10 m, w = 5 m, h = 2 m",
            options: ["100 m³", "50 m³", "200 m³"],
          },
          {
            prompt: "l = 8 cm, w = 8 cm, h = 8 cm (a cube)",
            options: ["512 cm³", "384 cm³", "64 cm³"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Volume of a Cylinder",
        instruction: "Circle the correct volume for each cylinder. Leave answers in terms of π where shown.",
        questions: [
          {
            prompt: "r = 5 cm, h = 10 cm",
            options: ["250π cm³", "500π cm³", "100π cm³"],
          },
          {
            prompt: "r = 3 cm, h = 7 cm",
            options: ["63π cm³", "21π cm³", "42π cm³"],
          },
          {
            prompt: "r = 10 m, h = 4 m",
            options: ["400π m³", "40π m³", "200π m³"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Surface Area of a Cube",
        instruction: "A cube has 6 identical square faces. SA = 6s². Circle the correct surface area.",
        questions: [
          {
            prompt: "Side length = 4 cm",
            options: ["96 cm²", "64 cm²", "48 cm²"],
          },
          {
            prompt: "Side length = 5 cm",
            options: ["150 cm²", "125 cm²", "75 cm²"],
          },
          {
            prompt: "Side length = 10 m",
            options: ["600 m²", "1000 m²", "360 m²"],
          },
        ],
      },
      // --- MEDIUM: Individual solid calculations and composites intro ---
      {
        type: "circle-correct",
        title: "Volume of a Cone",
        instruction: "V = ⅓πr²h. Circle the correct volume for each cone.",
        questions: [
          {
            prompt: "r = 3 cm, h = 12 cm",
            options: ["36π cm³", "108π cm³", "12π cm³"],
          },
          {
            prompt: "r = 6 cm, h = 9 cm",
            options: ["108π cm³", "324π cm³", "54π cm³"],
          },
          {
            prompt: "r = 5 m, h = 15 m",
            options: ["125π m³", "375π m³", "75π m³"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Volume of a Sphere",
        instruction: "V = ⁴⁄₃πr³. Circle the correct volume for each sphere.",
        questions: [
          {
            prompt: "r = 6 cm",
            options: ["288π cm³", "144π cm³", "864π cm³"],
          },
          {
            prompt: "r = 3 cm",
            options: ["36π cm³", "108π cm³", "27π cm³"],
          },
          {
            prompt: "r = 10 m",
            options: ["⁴⁰⁰⁰⁄₃ π m³ ≈ 4189 m³", "4000π m³", "400π m³"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Surface Area of a Cylinder",
        instruction: "SA = 2πr² + 2πrh (two circular ends + curved surface). Circle the correct surface area.",
        questions: [
          {
            prompt: "r = 5 cm, h = 10 cm",
            options: ["150π cm²", "100π cm²", "250π cm²"],
          },
          {
            prompt: "r = 3 cm, h = 8 cm",
            options: ["66π cm²", "48π cm²", "30π cm²"],
          },
          {
            prompt: "r = 4 m, h = 6 m",
            options: ["80π m²", "64π m²", "48π m²"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Volume of a Triangular Prism",
        instruction: "V = ½ × base × height of triangle × length. Circle the correct volume.",
        questions: [
          {
            prompt: "Triangle: base = 6 cm, height = 4 cm; prism length = 10 cm",
            options: ["120 cm³", "240 cm³", "60 cm³"],
          },
          {
            prompt: "Triangle: base = 8 m, height = 3 m; prism length = 5 m",
            options: ["60 m³", "120 m³", "40 m³"],
          },
          {
            prompt: "Triangle: base = 10 cm, height = 12 cm; prism length = 15 cm",
            options: ["900 cm³", "1800 cm³", "450 cm³"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Volume of a Hemisphere",
        instruction: "A hemisphere is half a sphere. V = ⅔πr³. Circle the correct volume.",
        questions: [
          {
            prompt: "r = 6 cm",
            options: ["144π cm³", "288π cm³", "72π cm³"],
          },
          {
            prompt: "r = 3 cm",
            options: ["18π cm³", "36π cm³", "9π cm³"],
          },
          {
            prompt: "r = 10 m",
            options: ["⅔ × 1000π = ²⁰⁰⁰⁄₃ π m³ ≈ 2094 m³", "2000π m³", "500π m³"],
          },
        ],
      },
      {
        type: "matching",
        title: "Composite Solid → Component Shapes",
        instruction:
          "Draw a line from each composite solid to the shapes that make it up.",
        left: [
          "A silo (cylinder with dome on top)",
          "A sharpened pencil",
          "An ice cream in a cone",
          "A capsule (medicine pill shape)",
          "A house-shaped solid (box with triangular roof)",
        ],
        right: [
          "Rectangular prism + triangular prism",
          "Cylinder + hemisphere",
          "Cylinder + cone",
          "Hemisphere + cone",
          "Two hemispheres + cylinder",
        ],
      },
      {
        type: "sequence",
        title: "Steps: Volume of Cylinder + Hemisphere",
        instruction:
          "Put the steps in order to find the volume of a silo (cylinder with a hemisphere on top), where r = 3 m and cylinder height = 8 m.",
        items: [
          { label: "Identify the two component shapes: cylinder + hemisphere" },
          { label: "Calculate cylinder volume: V = π × 3² × 8 = 72π m³" },
          { label: "Calculate hemisphere volume: V = ⅔ × π × 3³ = 18π m³" },
          { label: "Add the two volumes: 72π + 18π = 90π m³" },
          { label: "Calculate: 90π ≈ 282.7 m³" },
        ],
      },
      {
        type: "sequence",
        title: "Steps: SA of a Composite Solid",
        instruction:
          "Put the steps in order to find the total surface area of a cylinder (r = 4 cm, h = 10 cm) with a hemisphere (r = 4 cm) on top.",
        items: [
          { label: "Identify exposed surfaces: cylinder curved side + bottom circle + hemisphere curved surface" },
          { label: "Note: the join between cylinder and hemisphere is internal — do NOT include the top circle of the cylinder or the flat face of the hemisphere" },
          { label: "Cylinder curved surface: 2π × 4 × 10 = 80π cm²" },
          { label: "Cylinder bottom circle: π × 4² = 16π cm²" },
          { label: "Hemisphere curved surface: 2π × 4² = 32π cm²" },
          { label: "Total SA = 80π + 16π + 32π = 128π ≈ 402.1 cm²" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Formula for Each Component?",
        instruction: "A composite solid is made of a cone sitting on top of a cylinder, both with radius r. Circle the correct formula for each part.",
        questions: [
          {
            prompt: "Volume of the cylinder component (radius r, height h₁)",
            options: ["πr²h₁", "⅓πr²h₁", "2πrh₁"],
          },
          {
            prompt: "Volume of the cone component (radius r, height h₂)",
            options: ["⅓πr²h₂", "πr²h₂", "½πr²h₂"],
          },
          {
            prompt: "Curved surface area of the cylinder",
            options: ["2πrh₁", "πr²h₁", "2πr² + 2πrh₁"],
          },
          {
            prompt: "Curved surface area of the cone (slant height l)",
            options: ["πrl", "πr²l", "⅓πrl"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Volume of a Two-Part Composite",
        instruction: "Calculate the total volume of each composite solid. Circle the correct answer.",
        questions: [
          {
            prompt: "A cylinder (r = 4 cm, h = 10 cm) with a hemisphere (r = 4 cm) on top. V = πr²h + ⅔πr³",
            options: ["160π + 128π/3 = 608π/3 ≈ 636.7 cm³", "160π + 128π = 288π cm³", "160π + 64π = 224π cm³"],
          },
          {
            prompt: "A rectangular prism (5 × 5 × 8 cm) with a square pyramid (base 5 × 5, height 6 cm) on top. V = lwh + ⅓ × l × w × h₂",
            options: ["200 + 50 = 250 cm³", "200 + 150 = 350 cm³", "200 + 100 = 300 cm³"],
          },
          {
            prompt: "A cone (r = 3 cm, h = 10 cm) with a hemisphere (r = 3 cm) on top. V = ⅓πr²h + ⅔πr³",
            options: ["30π + 18π = 48π ≈ 150.8 cm³", "30π + 36π = 66π cm³", "90π + 18π = 108π cm³"],
          },
        ],
      },
      // --- HARD: Full calculation problems and reasoning ---
      {
        type: "open-response",
        title: "Water Tank — Cylinder + Cone Roof",
        instruction:
          "Calculate the total volume and surface area of a water tank. Show all working.",
        prompts: [
          {
            text: "A water tank is made from a cylinder with a cone-shaped roof. The cylinder has radius 2 m and height 3 m. The cone has the same radius and a height of 1 m.\n\n(a) Calculate the volume of the cylindrical part: V = πr²h\n(b) Calculate the volume of the cone roof: V = ⅓πr²h\n(c) Find the total volume of the tank.\n(d) Calculate the slant height of the cone: l = √(r² + h²)\n(e) Calculate the total external surface area (exclude the base): curved cylinder + curved cone + base circle of cone is internal.\n\nHint: Cylinder curved SA = 2πrh, Cone curved SA = πrl, Cylinder base = πr².",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "open-response",
        title: "Design a Container for a Specific Volume",
        instruction:
          "Design a container and verify it holds the required volume.",
        prompts: [
          {
            text: "A juice company wants a bottle that holds exactly 600 mL (600 cm³). The bottle is shaped as a cylinder with a hemisphere dome on top (same radius). Choose a radius r, then calculate the cylinder height h needed so the total volume equals 600 cm³.\n\nUse: V_total = πr²h + ⅔πr³ = 600\nSolve for h: h = (600 − ⅔πr³) ÷ (πr²)\n\nTry r = 4 cm. Show all working and check your answer.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Surface Areas — Same Volume, Different Shapes",
        instruction:
          "Investigate which shape uses the least material for a given volume.",
        prompts: [
          {
            text: "Three containers each hold a volume of 1000 cm³.\n\n(a) A cube: Find the side length s where s³ = 1000, then calculate SA = 6s².\n(b) A cylinder with height equal to diameter (h = 2r): Find r where πr²(2r) = 1000, then calculate SA = 2πr² + 2πr(2r) = 6πr².\n(c) A sphere: Find r where ⁴⁄₃πr³ = 1000, then calculate SA = 4πr².\n\nWhich shape has the smallest surface area? What does this tell us about efficient packaging?",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "open-response",
        title: "Swimming Pool — Rectangular + Semicircular End",
        instruction:
          "Calculate the volume of a swimming pool with a composite cross-section.",
        prompts: [
          {
            text: "A swimming pool is 25 m long with a uniform depth of 2 m. The main section is a 25 m × 10 m rectangle. At one end, there is a semicircular extension with diameter 10 m (radius 5 m), also 2 m deep.\n\n(a) Calculate the volume of the rectangular section: V = 25 × 10 × 2\n(b) Calculate the volume of the semicircular section: V = ½ × π × 5² × 2\n(c) Find the total volume of the pool.\n(d) If 1 m³ = 1000 litres, how many litres does the pool hold?",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Calculate Paint Needed for a Room",
        instruction:
          "Use surface area to calculate how much paint is needed.",
        prompts: [
          {
            text: "A room is 5 m long, 4 m wide and 2.7 m high. It has:\n• 1 door (0.9 m × 2.1 m)\n• 2 windows, each 1.2 m × 1.0 m\n\n(a) Calculate the total wall area: 2 × (5 × 2.7) + 2 × (4 × 2.7)\n(b) Subtract the door and windows.\n(c) Add the ceiling area: 5 × 4\n(d) If one litre of paint covers 12 m², how many litres are needed? (Round up to a whole number.)",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Ice Cream Cone + Hemisphere Scoop",
        instruction:
          "Calculate the total volume of an ice cream cone with a scoop on top.",
        prompts: [
          {
            text: "An ice cream cone has radius 3 cm and height 10 cm. A hemispherical scoop of ice cream (radius 3 cm) sits on top.\n\n(a) Calculate the volume of the cone: V = ⅓πr²h = ⅓ × π × 9 × 10\n(b) Calculate the volume of the hemisphere: V = ⅔πr³ = ⅔ × π × 27\n(c) Find the total volume.\n(d) If the ice cream melts and runs into the cone, will the cone overflow? Compare the hemisphere volume to the empty space in the cone above the ice cream line.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — SA and Volume Relationships",
        instruction: "Circle TRUE or FALSE for each statement.",
        questions: [
          {
            prompt: "Doubling every dimension of a solid multiplies its volume by 8",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "Doubling every dimension of a solid multiplies its surface area by 4",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "A sphere has the smallest surface area of any shape for a given volume",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "If two solids have the same volume, they must have the same surface area",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "When you join two solids, the composite's total SA is less than the sum of the individual SAs (because the joined faces are hidden)",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "Volume scales with the cube of the linear dimension (×k³), while SA scales with the square (×k²)",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Optimisation — Least Material for a Given Volume",
        instruction:
          "Investigate which composite design uses the least material.",
        prompts: [
          {
            text: "A storage container must hold 500 cm³. Compare two designs:\n\nDesign A: A cylinder (r = 4 cm) with height chosen to give V = 500 cm³.\n→ h = 500 ÷ (π × 16). Calculate h, then find the total SA = 2πr² + 2πrh.\n\nDesign B: A cylinder (r = 4 cm) topped with a hemisphere (r = 4 cm), with cylinder height chosen so total V = 500 cm³.\n→ V_hemi = ⅔π(64) = 128π/3. Cylinder V = 500 − 128π/3. Calculate h, then find total SA (cylinder curved + bottom circle + hemisphere curved).\n\nWhich design uses less material? Why might the hemisphere design be more efficient?",
            type: "lines",
            lines: 14,
          },
        ],
      },
      // --- HOME: Hands-on activities ---
      {
        type: "home-activity",
        title: "Measure Household Objects",
        instruction: "Find composite 3D shapes around your home and calculate their volume and surface area.",
        suggestions: [
          "Find a drink bottle or thermos. Sketch it as a combination of simple shapes (cylinder + dome, etc.). Measure the dimensions and calculate its approximate volume. Compare with the stated capacity on the label.",
          "Measure a saucepan (cylinder) with its lid (could be a hemisphere or flattened dome). Calculate the total volume the pan can hold.",
          "Find a tin can. Measure its radius and height, then calculate both the volume (πr²h) and the total surface area (2πr² + 2πrh). Compare your calculated volume with the volume printed on the label.",
        ],
      },
      {
        type: "home-activity",
        title: "Composite Shapes in Architecture",
        instruction: "Explore how composite solids are used in buildings and structures around you.",
        suggestions: [
          "Look at buildings in your neighbourhood. Sketch one that uses composite shapes (e.g. a rectangular building with a triangular or domed roof). Estimate the dimensions and calculate the approximate volume.",
          "Measure a room in your home. If you wanted to paint the walls and ceiling, calculate the total surface area (subtracting windows and doors). Estimate how many litres of paint you would need if 1 litre covers 12 m².",
          "Find a structure with curved and flat surfaces (e.g. a letterbox, water tank, or garden feature). Identify the component shapes, estimate dimensions, and calculate the total volume.",
        ],
      },
    ],
  },

  // ── WS 6: Pythagoras' Theorem & Trigonometry ──────────────────
  {
    slug: "pythagoras-trigonometry",
    title: "Pythagoras' Theorem & Trigonometry",
    strand: "Measurement",
    description:
      "Apply Pythagoras' theorem and trigonometry to solve practical problems involving right-angled triangles",
    activities: [
      // --- EASY: Trig ratio definitions & Pythagoras basics ---
      {
        type: "matching",
        title: "Trig Ratio Definitions (SOH CAH TOA)",
        instruction:
          "Draw a line from each trigonometric ratio to its definition relative to angle θ in a right-angled triangle.",
        left: [
          "sin θ",
          "cos θ",
          "tan θ",
          "SOH",
          "CAH",
          "TOA",
        ],
        right: [
          "Opposite ÷ Hypotenuse",
          "Adjacent ÷ Hypotenuse",
          "Opposite ÷ Adjacent",
          "Sin = Opposite ÷ Hypotenuse",
          "Cos = Adjacent ÷ Hypotenuse",
          "Tan = Opposite ÷ Adjacent",
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Sides",
        instruction:
          "For a right-angled triangle with the right angle at C and given angle θ at A, circle the correct label for each side.",
        questions: [
          {
            prompt: "The side opposite angle A is:",
            options: ["BC (opposite)", "AC (adjacent)", "AB (hypotenuse)"],
          },
          {
            prompt: "The side adjacent to angle A (not the hypotenuse) is:",
            options: ["AC (adjacent)", "BC (opposite)", "AB (hypotenuse)"],
          },
          {
            prompt: "The longest side, opposite the right angle, is:",
            options: ["AB (hypotenuse)", "BC (opposite)", "AC (adjacent)"],
          },
          {
            prompt: "If you change the reference angle to B, the side BC becomes:",
            options: ["The adjacent side", "The opposite side", "The hypotenuse"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Ratio to Use?",
        instruction:
          "For each pair of known/wanted sides, circle the correct trig ratio to use.",
        questions: [
          {
            prompt: "You know the opposite and hypotenuse. Use:",
            options: ["sin θ", "cos θ", "tan θ"],
          },
          {
            prompt: "You know the adjacent and hypotenuse. Use:",
            options: ["cos θ", "sin θ", "tan θ"],
          },
          {
            prompt: "You know the opposite and adjacent. Use:",
            options: ["tan θ", "sin θ", "cos θ"],
          },
          {
            prompt: "You want to find the hypotenuse and know the opposite side and the angle. Use:",
            options: ["sin θ (then rearrange)", "cos θ (then rearrange)", "tan θ (then rearrange)"],
          },
        ],
      },
      {
        type: "matching",
        title: "Special Angles — Exact Values",
        instruction:
          "Draw a line from each trigonometric expression to its exact value.",
        left: [
          "sin 30°",
          "cos 30°",
          "tan 45°",
          "sin 60°",
          "cos 60°",
          "sin 45°",
        ],
        right: [
          "½",
          "√3 ÷ 2",
          "1",
          "√3 ÷ 2",
          "½",
          "√2 ÷ 2",
        ],
      },
      {
        type: "circle-correct",
        title: "Pythagoras' Theorem Formula",
        instruction:
          "Circle the correct statement of Pythagoras' theorem and related facts.",
        questions: [
          {
            prompt: "Pythagoras' theorem states:",
            options: ["c² = a² + b²", "c = a + b", "c² = a² − b²"],
          },
          {
            prompt: "Pythagoras' theorem applies to:",
            options: ["Right-angled triangles only", "All triangles", "Equilateral triangles only"],
          },
          {
            prompt: "In c² = a² + b², the letter c always represents:",
            options: ["The hypotenuse (longest side)", "Any side of the triangle", "The shortest side"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Hypotenuse — Simple Cases",
        instruction:
          "Circle the correct length of the hypotenuse for each right-angled triangle.",
        questions: [
          {
            prompt: "Legs: 3 and 4. Hypotenuse = ?",
            options: ["5", "7", "√7"],
          },
          {
            prompt: "Legs: 5 and 12. Hypotenuse = ?",
            options: ["13", "17", "√17"],
          },
          {
            prompt: "Legs: 8 and 15. Hypotenuse = ?",
            options: ["17", "23", "√23"],
          },
          {
            prompt: "Legs: 6 and 8. Hypotenuse = ?",
            options: ["10", "14", "√14"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find a Shorter Side — Simple Cases",
        instruction:
          "Circle the correct length of the missing shorter side.",
        questions: [
          {
            prompt: "Hypotenuse = 13, one leg = 5. Other leg = ?",
            options: ["12", "8", "√18"],
          },
          {
            prompt: "Hypotenuse = 10, one leg = 6. Other leg = ?",
            options: ["8", "4", "√16"],
          },
          {
            prompt: "Hypotenuse = 25, one leg = 7. Other leg = ?",
            options: ["24", "18", "√32"],
          },
          {
            prompt: "Hypotenuse = 15, one leg = 9. Other leg = ?",
            options: ["12", "6", "√24"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Pythagorean Triples vs Non-Triples",
        instruction:
          "Sort each set of three numbers: is it a Pythagorean triple (a² + b² = c²) or not?",
        columns: ["Pythagorean Triple", "Not a Triple"],
        items: [
          { label: "3, 4, 5" },
          { label: "5, 12, 13" },
          { label: "4, 5, 6" },
          { label: "8, 15, 17" },
          { label: "7, 24, 25" },
          { label: "6, 8, 11" },
          { label: "9, 12, 15" },
          { label: "10, 15, 20" },
        ],
      },
      // --- MEDIUM: Applying trig and Pythagoras to problems ---
      {
        type: "circle-correct",
        title: "Trig Equation Setup — Height Problems",
        instruction:
          "Circle the correct trig equation to find the unknown height h.",
        questions: [
          {
            prompt: "Find the height of a tree if you stand 20 m away and the angle of elevation is 35°",
            options: ["h = 20 × tan 35°", "h = 20 × sin 35°", "h = 20 ÷ tan 35°"],
          },
          {
            prompt: "A kite string is 80 m long at an angle of 55° to the ground. The kite's height is:",
            options: ["h = 80 × sin 55°", "h = 80 × cos 55°", "h = 80 × tan 55°"],
          },
          {
            prompt: "From the top of a 30 m cliff, the angle of depression to a boat is 40°. The horizontal distance to the boat is:",
            options: ["d = 30 ÷ tan 40°", "d = 30 × tan 40°", "d = 30 × sin 40°"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Trig Equation Setup — Ladder Problems",
        instruction:
          "A ladder of known length leans against a wall. Circle the correct equation.",
        questions: [
          {
            prompt: "A 5 m ladder makes a 70° angle with the ground. How high up the wall does it reach?",
            options: ["h = 5 × sin 70°", "h = 5 × cos 70°", "h = 5 × tan 70°"],
          },
          {
            prompt: "A 6 m ladder reaches 5.5 m up a wall. The angle with the ground is:",
            options: ["θ = sin⁻¹(5.5 ÷ 6)", "θ = cos⁻¹(5.5 ÷ 6)", "θ = tan⁻¹(5.5 ÷ 6)"],
          },
          {
            prompt: "A ladder makes a 65° angle with the ground and its base is 1.2 m from the wall. The ladder length is:",
            options: ["L = 1.2 ÷ cos 65°", "L = 1.2 × cos 65°", "L = 1.2 ÷ sin 65°"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Hypotenuse Using Trig",
        instruction:
          "Circle the correct calculation for the hypotenuse.",
        questions: [
          {
            prompt: "Opposite = 7, angle = 30°. Hypotenuse = ?",
            options: ["7 ÷ sin 30° = 14", "7 × sin 30° = 3.5", "7 ÷ cos 30° ≈ 8.08"],
          },
          {
            prompt: "Adjacent = 10, angle = 45°. Hypotenuse = ?",
            options: ["10 ÷ cos 45° ≈ 14.14", "10 × cos 45° ≈ 7.07", "10 ÷ sin 45° ≈ 14.14"],
          },
          {
            prompt: "Opposite = 12, angle = 60°. Hypotenuse = ?",
            options: ["12 ÷ sin 60° ≈ 13.86", "12 × sin 60° ≈ 10.39", "12 ÷ tan 60° ≈ 6.93"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Opposite Side Using Trig",
        instruction:
          "Circle the correct calculation for the opposite side.",
        questions: [
          {
            prompt: "Hypotenuse = 20, angle = 35°. Opposite = ?",
            options: ["20 × sin 35° ≈ 11.47", "20 × cos 35° ≈ 16.38", "20 × tan 35° ≈ 14.00"],
          },
          {
            prompt: "Adjacent = 15, angle = 50°. Opposite = ?",
            options: ["15 × tan 50° ≈ 17.87", "15 × sin 50° ≈ 11.49", "15 ÷ tan 50° ≈ 12.59"],
          },
          {
            prompt: "Hypotenuse = 9, angle = 60°. Opposite = ?",
            options: ["9 × sin 60° ≈ 7.79", "9 × cos 60° = 4.5", "9 × tan 60° ≈ 15.59"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Adjacent Side Using Trig",
        instruction:
          "Circle the correct calculation for the adjacent side.",
        questions: [
          {
            prompt: "Hypotenuse = 18, angle = 40°. Adjacent = ?",
            options: ["18 × cos 40° ≈ 13.79", "18 × sin 40° ≈ 11.57", "18 × tan 40° ≈ 15.10"],
          },
          {
            prompt: "Opposite = 11, angle = 55°. Adjacent = ?",
            options: ["11 ÷ tan 55° ≈ 7.70", "11 × tan 55° ≈ 15.71", "11 × cos 55° ≈ 6.31"],
          },
          {
            prompt: "Hypotenuse = 25, angle = 30°. Adjacent = ?",
            options: ["25 × cos 30° ≈ 21.65", "25 × sin 30° = 12.5", "25 ÷ cos 30° ≈ 28.87"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find an Angle Using Inverse Trig",
        instruction:
          "Circle the correct angle (to the nearest degree) for each triangle.",
        questions: [
          {
            prompt: "Opposite = 5, hypotenuse = 10. Angle = ?",
            options: ["sin⁻¹(0.5) = 30°", "cos⁻¹(0.5) = 60°", "tan⁻¹(0.5) ≈ 27°"],
          },
          {
            prompt: "Adjacent = 4, hypotenuse = 8. Angle = ?",
            options: ["cos⁻¹(0.5) = 60°", "sin⁻¹(0.5) = 30°", "tan⁻¹(0.5) ≈ 27°"],
          },
          {
            prompt: "Opposite = 7, adjacent = 7. Angle = ?",
            options: ["tan⁻¹(1) = 45°", "sin⁻¹(1) = 90°", "cos⁻¹(1) = 0°"],
          },
          {
            prompt: "Opposite = 6, adjacent = 10. Angle = ?",
            options: ["tan⁻¹(0.6) ≈ 31°", "sin⁻¹(0.6) ≈ 37°", "cos⁻¹(0.6) ≈ 53°"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Multi-Step Trig — River Crossing",
        instruction:
          "Put the steps in order to find the distance across a river using trigonometry.",
        items: [
          { label: "Stand at point A on one bank and identify point B directly across" },
          { label: "Walk 50 m along the bank to point C" },
          { label: "Measure the angle ACB = 62°" },
          { label: "Identify: opposite = AB (river width), adjacent = AC = 50 m" },
          { label: "Use tan 62° = AB ÷ 50" },
          { label: "Calculate: AB = 50 × tan 62° ≈ 94.1 m" },
        ],
      },
      {
        type: "sequence",
        title: "Pythagoras in 3D — Diagonal of a Box",
        instruction:
          "Put the steps in order to find the space diagonal of a box with length 3 m, width 4 m, and height 12 m.",
        items: [
          { label: "Identify the three dimensions: l = 3, w = 4, h = 12" },
          { label: "Find the base diagonal using Pythagoras: d₁ = √(3² + 4²) = √(9 + 16) = √25 = 5" },
          { label: "The space diagonal forms a right triangle with d₁ and h" },
          { label: "Apply Pythagoras again: D = √(d₁² + h²) = √(5² + 12²)" },
          { label: "Calculate: D = √(25 + 144) = √169 = 13 m" },
        ],
      },
      {
        type: "matching",
        title: "Scenario to Trig Ratio",
        instruction:
          "Draw a line from each scenario to the trig ratio you would use to solve it.",
        left: [
          "Height of a cliff, standing a known distance away (angle of elevation given)",
          "Length of a ramp, knowing the height and angle",
          "Distance along the ground from a lighthouse (angle of depression and height given)",
          "Height reached by a ladder of known length at a known angle",
          "Angle of a roof, knowing the rise and run",
        ],
        right: [
          "tan (opp ÷ adj → height ÷ distance)",
          "sin (opp ÷ hyp → height ÷ ramp, rearranged)",
          "tan (opp ÷ adj → height ÷ distance, rearranged)",
          "sin (opp ÷ hyp → height ÷ ladder)",
          "tan⁻¹ (opp ÷ adj → rise ÷ run)",
        ],
      },
      {
        type: "circle-correct",
        title: "Angle of Elevation vs Depression",
        instruction:
          "Circle the correct statement about angles of elevation and depression.",
        questions: [
          {
            prompt: "The angle of elevation is measured:",
            options: ["From the horizontal UP to the line of sight", "From the vertical down to the line of sight", "From the ground to the object"],
          },
          {
            prompt: "The angle of depression is measured:",
            options: ["From the horizontal DOWN to the line of sight", "From the vertical up to the line of sight", "From the object to the ground"],
          },
          {
            prompt: "If the angle of elevation from A to B is 35°, the angle of depression from B to A is:",
            options: ["35° (they are equal — alternate angles)", "55° (complementary)", "145° (supplementary)"],
          },
          {
            prompt: "From the top of a 50 m tower, the angle of depression to a car is 25°. The horizontal distance to the car is:",
            options: ["50 ÷ tan 25° ≈ 107.2 m", "50 × tan 25° ≈ 23.3 m", "50 × sin 25° ≈ 21.1 m"],
          },
        ],
      },
      // --- HARD: Application, multi-step & open-response ---
      {
        type: "open-response",
        title: "Flagpole Shadow Problem",
        instruction:
          "Solve this practical problem. Draw a diagram and show all working.",
        prompts: [
          {
            text: "A 12 m flagpole casts a shadow 7 m long. (a) Calculate the angle of elevation of the sun. (b) Later in the day, the angle of elevation drops to 30°. Calculate the new shadow length. (c) At what angle of elevation would the shadow be exactly the same length as the flagpole?",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Ship Bearing and Distance",
        instruction:
          "Solve this navigation problem. Draw a diagram and show all working.",
        prompts: [
          {
            text: "A ship sails 15 km due east, then 20 km due north. (a) Calculate the direct distance from the starting point to the ship's final position. (b) Calculate the bearing of the ship from its starting point. (c) If the ship then sailed directly back to the start, on what bearing would it travel?",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Building Height from Two Positions",
        instruction:
          "Solve this surveying problem. Draw a diagram and show all working.",
        prompts: [
          {
            text: "From point A, the angle of elevation to the top of a building is 40°. You walk 30 m closer to the building to point B, where the angle of elevation is now 55°. Let h be the height of the building and d be the horizontal distance from B to the building. Set up two equations: h = (d + 30) × tan 40° and h = d × tan 55°. Solve for d and hence find h.",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "open-response",
        title: "Area of a Triangle Using Trigonometry",
        instruction:
          "Use the formula Area = ½ab sin C to solve these problems. Show all working.",
        prompts: [
          {
            text: "A triangle has two sides of length 8 cm and 11 cm with an included angle of 50°. Calculate the area of the triangle using the formula Area = ½ × a × b × sin C.",
            type: "lines",
            lines: 5,
          },
          {
            text: "A triangular garden has sides of 6 m and 9 m with an included angle of 120°. Calculate the area. (Hint: sin 120° = sin 60° = √3 ÷ 2 ≈ 0.866.)",
            type: "lines",
            lines: 5,
          },
        ],
      },
      {
        type: "open-response",
        title: "3D Pythagoras — Space Diagonal",
        instruction:
          "Apply Pythagoras' theorem in three dimensions. Show all working.",
        prompts: [
          {
            text: "A room is 5 m long, 4 m wide, and 3 m high. (a) Calculate the length of the diagonal across the floor. (b) Calculate the space diagonal (from one bottom corner to the opposite top corner). (c) A spider at one bottom corner wants to walk to the opposite top corner along the walls. If it goes across the floor and then up the wall, what is the shortest path along the surfaces? (Hint: 'unfold' two walls.)",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "open-response",
        title: "Navigation and Bearing Problem",
        instruction:
          "Solve this navigation problem using trigonometry. Show all working.",
        prompts: [
          {
            text: "A bushwalker leaves camp and walks 4 km on a bearing of 060°, then 3 km on a bearing of 150°. (a) How far east and north is the walker from camp after the first leg? (Use: east = 4 sin 60° ≈ 3.46 km, north = 4 cos 60° = 2 km.) (b) How far east and south does the second leg take the walker? (Use: east = 3 sin 30° = 1.5 km, south = 3 cos 30° ≈ 2.60 km.) (c) Calculate the walker's final position relative to camp and the direct distance back.",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Pythagoras & Trig Properties",
        instruction:
          "Circle TRUE or FALSE for each statement.",
        questions: [
          {
            prompt: "In a right-angled triangle, the hypotenuse is always the longest side",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "sin θ can be greater than 1 for angles in a right triangle",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "tan 45° = 1 because the opposite and adjacent sides are equal",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "Pythagoras' theorem works for all triangles, not just right-angled ones",
            options: ["FALSE", "TRUE"],
          },
          {
            prompt: "As an angle increases from 0° to 90°, sin θ increases from 0 to 1",
            options: ["TRUE", "FALSE"],
          },
          {
            prompt: "The angle of elevation from A to B equals the angle of depression from B to A",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Surveying Problem — Multiple Triangles",
        instruction:
          "Solve this multi-step surveying problem. Draw a diagram and show all working.",
        prompts: [
          {
            text: "A surveyor needs to find the distance between two points, P and Q, on opposite sides of a lake. She stands at point R, which is 120 m from P and 85 m from Q. She measures angle PRQ = 72°. Using the cosine rule (c² = a² + b² − 2ab cos C), calculate the distance PQ. Then calculate the area of triangle PRQ using the formula Area = ½ × a × b × sin C.",
            type: "lines",
            lines: 12,
          },
        ],
      },
      // --- HOME: Practical activities ---
      {
        type: "home-activity",
        title: "Measure Heights Using Trigonometry",
        instruction:
          "Use trigonometry to measure the height of tall objects around your home or neighbourhood.",
        suggestions: [
          "Use a protractor app (clinometer) on a phone to measure the angle of elevation to the top of a tall tree, building, or flagpole. Measure your distance from the base, then use h = d × tan θ to calculate the height. Remember to add your eye height!",
          "On a sunny day, measure your own height and shadow length to find the sun's angle of elevation (tan θ = height ÷ shadow). Then measure the shadow of a tall object and use the same angle to calculate its height.",
          "Stand at two different distances from a tall object and measure the angle of elevation each time. Use the two-position method from the worksheet to calculate the height without knowing the base distance.",
        ],
      },
      {
        type: "home-activity",
        title: "Verify Pythagoras with Household Objects",
        instruction:
          "Test Pythagoras' theorem using real measurements at home.",
        suggestions: [
          "Measure the length, width, and diagonal of a rectangular table, door, or TV screen. Check whether diagonal² ≈ length² + width². How close is your result?",
          "Cut a piece of string to exactly 12 units (e.g. 60 cm marked at every 5 cm). Form a 3-4-5 triangle with the string. Verify that the angle opposite the longest side is 90° using a set square or the corner of a book.",
          "Measure the three dimensions of a shoebox (length, width, height). Calculate the space diagonal using D = √(l² + w² + h²). Then measure the actual diagonal with a tape measure and compare.",
        ],
      },
    ],
  },

  // ── WS 7: Measurement Errors & Proportion ─────────────────────
  {
    slug: "measurement-errors-proportion",
    title: "Measurement Errors & Proportion",
    strand: "Measurement",
    description:
      "Identify the impact of measurement errors on accuracy and solve practical problems involving proportion and scaling",
    activities: [
      {
        type: "sorting",
        title: "Absolute vs Relative Error",
        instruction:
          "Sort each statement into the correct column: Absolute Error or Relative Error.",
        columns: ["Absolute Error", "Relative Error"],
        items: [
          { label: "The measurement was 2 mm too long" },
          { label: "The error was 0.5% of the true value" },
          { label: "The thermometer reads 1.5°C higher than actual" },
          { label: "The weighing scale is off by 3% for all readings" },
          { label: "A ruler measurement has ±0.5 mm uncertainty" },
          { label: "The percentage error in the volume was 4.2%" },
          { label: "The measured length was 15.3 cm instead of 15.0 cm" },
          { label: "The time measurement has a 2% margin of error" },
        ],
      },
      {
        type: "circle-correct",
        title: "Reasonable Precision",
        instruction:
          "Circle the most appropriate level of precision for each measurement scenario.",
        questions: [
          {
            prompt: "Measuring the length of a football field",
            options: ["to the nearest metre", "to the nearest millimetre", "to the nearest kilometre"],
          },
          {
            prompt: "Measuring ingredients for a chemistry experiment",
            options: ["to the nearest 0.1 g", "to the nearest kg", "to the nearest 100 g"],
          },
          {
            prompt: "Measuring the distance between two cities on a map (scale 1:100,000)",
            options: ["to the nearest km", "to the nearest metre", "to the nearest 100 km"],
          },
          {
            prompt: "A cube has side measured as 10 cm ± 0.1 cm. The percentage error in its volume is approximately:",
            options: ["3%", "1%", "0.1%"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Design an Experiment",
        instruction:
          "Consider measurement errors and proportion in the following scenarios.",
        prompts: [
          {
            text: "A map has scale 1:25,000. You measure a lake's length on the map as 8.4 cm ± 0.2 cm. Calculate the real length of the lake and the range of possible actual lengths due to the measurement error.",
            type: "lines",
            lines: 6,
          },
          {
            text: "You measure a cube's side as 5.0 cm ± 0.1 cm. Calculate the volume and explain why the percentage error in the volume (about 6%) is much larger than the percentage error in the side measurement (2%). What general rule applies?",
            type: "lines",
            lines: 8,
          },
          {
            text: "Design a method to measure the thickness of a single sheet of paper as accurately as possible, given that a ruler only measures to the nearest millimetre. Explain how your method reduces the impact of measurement error.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Measurement & Scaling at Home",
        instruction: "Explore measurement errors and proportional reasoning in everyday life.",
        suggestions: [
          "Measure the same object 10 times with a ruler and record each result. Calculate the mean, range, and percentage variation. What does this tell you about measurement uncertainty?",
          "Find a map of your local area. Use the scale to estimate the distance from your home to school or a local landmark. Then check with a mapping app — how close was your estimate?",
          "Measure the dimensions of a room to calculate its area. Then estimate the percentage error if each measurement is off by 1 cm.",
        ],
      },
    ],
  },

  // ── WS 8: Deductive Reasoning & Geometric Theorems ────────────
  {
    slug: "deductive-reasoning-geometric-theorems",
    title: "Deductive Reasoning & Geometric Theorems",
    strand: "Space",
    description:
      "Use deductive reasoning, theorems and algorithms to solve spatial problems and construct geometric proofs",
    activities: [
      {
        type: "matching",
        title: "Theorem Match",
        instruction:
          "Draw a line from each theorem to its description.",
        left: [
          "Angle sum of a triangle",
          "Exterior angle theorem",
          "Opposite angles (vertically)",
          "Angle sum of a quadrilateral",
          "Angles on a straight line",
        ],
        right: [
          "Vertically opposite angles are equal",
          "Interior angles add to 360°",
          "Interior angles add to 180°",
          "Adjacent angles sum to 180°",
          "Equals the sum of the two non-adjacent interior angles",
        ],
      },
      {
        type: "sorting",
        title: "Given Information vs Conclusions",
        instruction:
          "For the proof that 'angles in a quadrilateral sum to 360°', sort each statement: is it Given Information or a Conclusion?",
        columns: ["Given Information", "Conclusion"],
        items: [
          { label: "A quadrilateral has 4 sides" },
          { label: "A diagonal divides it into two triangles" },
          { label: "Angles in a triangle sum to 180°" },
          { label: "The quadrilateral contains 2 × 180° = 360° of angles" },
          { label: "Therefore angles in a quadrilateral sum to 360°" },
          { label: "The diagonal creates two triangles that share no angles" },
        ],
      },
      {
        type: "circle-correct",
        title: "Valid Proof Steps",
        instruction:
          "Circle the VALID reasoning in each scenario.",
        questions: [
          {
            prompt: "In triangle ABC, angle A = 50° and angle B = 70°. Therefore angle C equals:",
            options: ["60° (angles in a triangle sum to 180°)", "70° (isosceles triangle)", "110° (exterior angle)"],
          },
          {
            prompt: "Two parallel lines cut by a transversal create alternate angles that are:",
            options: ["Equal", "Supplementary (sum to 180°)", "Complementary (sum to 90°)"],
          },
          {
            prompt: "An exterior angle of a triangle is 130°. The two non-adjacent interior angles could be:",
            options: ["80° and 50°", "130° and 50°", "65° and 65° only"],
          },
          {
            prompt: "In a regular hexagon, each interior angle measures:",
            options: ["120°", "135°", "144°"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Construct a Proof",
        instruction:
          "Write a step-by-step deductive proof for each geometric statement.",
        prompts: [
          {
            text: "Prove that the angle sum of any pentagon is 540°. (Hint: divide the pentagon into triangles using diagonals from one vertex.)",
            type: "lines",
            lines: 8,
          },
          {
            text: "In triangle PQR, the exterior angle at R is 140°. If angle P = 55°, find angle Q and angle R. Show your deductive reasoning, stating the theorem used at each step.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Geometry Around You",
        instruction: "Apply geometric reasoning to structures and shapes in your environment.",
        suggestions: [
          "Find a tiled floor or wall with a tessellation pattern. Identify the shapes used and verify that the angles meeting at each vertex sum to 360°.",
          "Look at the roof structure of a building. Identify any triangles and estimate the angles. Do they sum to approximately 180°?",
          "Find a regular polygon in architecture (hexagonal tiles, octagonal signs). Calculate what each interior angle should be and verify with a protractor or estimation.",
        ],
      },
    ],
  },

  // ── WS 9: Networks, Paths & Connectedness ─────────────────────
  {
    slug: "networks-paths-connectedness",
    title: "Networks, Paths & Connectedness",
    strand: "Space",
    description:
      "Interpret networks used to represent practical situations and describe connectedness, paths and circuits",
    activities: [
      {
        type: "matching",
        title: "Network Terms",
        instruction:
          "Draw a line from each network term to its definition.",
        left: [
          "Vertex (node)",
          "Edge",
          "Degree of a vertex",
          "Euler path",
          "Connected graph",
        ],
        right: [
          "A path that uses every edge exactly once",
          "The number of edges meeting at a vertex",
          "There is a path between every pair of vertices",
          "A line connecting two vertices",
          "A point where edges meet",
        ],
      },
      {
        type: "circle-correct",
        title: "Euler Path Possible?",
        instruction:
          "For each network description, circle whether an Euler path is possible. (An Euler path exists if a graph has exactly 0 or 2 vertices of odd degree.)",
        questions: [
          {
            prompt: "A triangle (3 vertices, each degree 2)",
            options: ["Yes — Euler circuit exists", "No — impossible", "Yes — Euler path but not circuit"],
          },
          {
            prompt: "A graph with vertices of degree: 3, 3, 2, 2",
            options: ["Yes — Euler path (start/end at odd vertices)", "No — impossible", "Yes — Euler circuit exists"],
          },
          {
            prompt: "A graph with vertices of degree: 3, 3, 3, 3",
            options: ["No — four odd-degree vertices", "Yes — Euler circuit", "Yes — Euler path"],
          },
          {
            prompt: "A square with one diagonal (vertices of degree: 3, 3, 2, 2)",
            options: ["Yes — Euler path exists", "No — impossible", "Yes — Euler circuit exists"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Trace the Shortest Path",
        instruction:
          "Put the steps in order to find the shortest path in a weighted network using common sense (greedy approach).",
        items: [
          { label: "Identify the start and end vertices" },
          { label: "List all possible paths between start and end" },
          { label: "For each path, add up the weights (distances) of all edges" },
          { label: "Compare the total weights" },
          { label: "Select the path with the smallest total weight" },
          { label: "Verify by checking if any shortcut exists" },
        ],
      },
      {
        type: "open-response",
        title: "Model a Real Network",
        instruction:
          "Create a network model for a real-world situation.",
        prompts: [
          {
            text: "Draw a network representing 5 houses (A–E) connected by paths with these distances: A–B = 3 km, A–C = 5 km, B–C = 2 km, B–D = 4 km, C–D = 3 km, C–E = 6 km, D–E = 2 km. Find the shortest route from A to E.",
            type: "box",
          },
          {
            text: "A delivery driver must visit 4 locations and return to base. Draw a network to represent this situation. Can the driver find a route that travels each road exactly once? Explain using Euler path theory.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Networks in Daily Life",
        instruction: "Identify and analyse networks in the world around you.",
        suggestions: [
          "Draw a network map of your home — rooms are vertices, doorways are edges. Is the network connected? Can you walk through every doorway exactly once?",
          "Look at a local bus or train route map. Identify vertices (stops) and edges (routes). Which stop has the highest degree?",
          "Map out your social network of close friends and family. Who is connected to whom? Is the network fully connected?",
        ],
      },
    ],
  },

  // ── WS 10: Bivariate Data & Scatter Plots ─────────────────────
  {
    slug: "bivariate-data-scatter-plots",
    title: "Bivariate Data & Scatter Plots",
    strand: "Statistics",
    description:
      "Plan and conduct statistical investigations involving bivariate data, representing distributions with scatter plots",
    activities: [
      {
        type: "matching",
        title: "Correlation Type Match",
        instruction:
          "Draw a line from each correlation type to its description.",
        left: [
          "Strong positive",
          "Weak positive",
          "Strong negative",
          "No correlation",
          "Weak negative",
        ],
        right: [
          "Points scattered randomly with no pattern",
          "Points cluster tightly along an upward line",
          "Points loosely trend upward with much scatter",
          "Points cluster tightly along a downward line",
          "Points loosely trend downward with much scatter",
        ],
      },
      {
        type: "sorting",
        title: "Classify the Correlation",
        instruction:
          "Sort each scenario into the correct column: Strong, Weak, or No Correlation.",
        columns: ["Strong Correlation", "Weak Correlation", "No Correlation"],
        items: [
          { label: "Height vs shoe size" },
          { label: "Hours of study vs exam mark" },
          { label: "Shoe size vs favourite colour" },
          { label: "Temperature vs ice cream sales" },
          { label: "Age of car vs car value" },
          { label: "Number of pets vs maths score" },
          { label: "Distance driven vs fuel used" },
          { label: "Hours of sleep vs number of siblings" },
        ],
      },
      {
        type: "circle-correct",
        title: "Best Line of Fit",
        instruction:
          "Circle the correct statement about lines of best fit.",
        questions: [
          {
            prompt: "A line of best fit should:",
            options: [
              "Pass through or near as many points as possible with roughly equal points above and below",
              "Connect the first and last data points",
              "Pass through every data point",
            ],
          },
          {
            prompt: "If a scatter plot shows a strong negative correlation, the line of best fit:",
            options: ["Slopes downward from left to right", "Slopes upward from left to right", "Is horizontal"],
          },
          {
            prompt: "Using a line of best fit to predict values far outside the data range is called:",
            options: ["Extrapolation (and is unreliable)", "Interpolation (and is reliable)", "Correlation (and is valid)"],
          },
          {
            prompt: "Correlation does NOT prove:",
            options: ["Causation", "Association", "A pattern in the data"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Collect and Analyse Data",
        instruction:
          "Design a bivariate data investigation.",
        prompts: [
          {
            text: "Design a statistical investigation to test whether there is a relationship between the number of hours people exercise per week and their resting heart rate. Describe: (a) how you would collect data, (b) what you would expect the scatter plot to look like, (c) what type of correlation you predict, and (d) whether correlation would prove that exercise causes lower heart rate.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Data Investigation at Home",
        instruction: "Collect your own bivariate data and analyse it.",
        suggestions: [
          "Record the temperature and the number of people at a local park over several days. Create a scatter plot — is there a correlation?",
          "Survey family members: compare their height with their arm span. Plot the data and describe the association.",
          "Track your screen time and hours of sleep for a week. Create a scatter plot and describe any pattern you observe.",
        ],
      },
    ],
  },

  // ── WS 11: Media Bias & Statistical Analysis ──────────────────
  {
    slug: "media-bias-statistical-analysis",
    title: "Media Bias & Statistical Analysis",
    strand: "Statistics",
    description:
      "Analyse inferences and conclusions in the media, identifying potential sources of bias and misleading representations",
    activities: [
      {
        type: "sorting",
        title: "Misleading vs Fair Representations",
        instruction:
          "Sort each data presentation technique into the correct column: Misleading or Fair.",
        columns: ["Misleading", "Fair"],
        items: [
          { label: "Bar chart with a y-axis starting at 0" },
          { label: "Bar chart with a y-axis starting at 95" },
          { label: "Pie chart where slices add to 100%" },
          { label: "3D pie chart that distorts slice sizes" },
          { label: "Graph with evenly spaced time intervals" },
          { label: "Graph with uneven time intervals on x-axis" },
          { label: "Survey results noting the sample size was 1000" },
          { label: "Survey headline with no sample size mentioned" },
          { label: "Cherry-picked data points to support a claim" },
        ],
      },
      {
        type: "circle-correct",
        title: "Valid Conclusions",
        instruction:
          "Circle the VALID conclusion that can be drawn from each scenario.",
        questions: [
          {
            prompt: "A survey of 50 students at a private school found that 80% prefer organic food. Headline: 'Most Australians prefer organic food.'",
            options: [
              "Invalid — the sample is not representative of all Australians",
              "Valid — 80% is a large majority",
              "Valid — students are a good sample",
            ],
          },
          {
            prompt: "A graph shows ice cream sales and drowning rates both increase in summer.",
            options: [
              "Both are caused by a third variable (hot weather), not by each other",
              "Ice cream sales cause drownings",
              "We should ban ice cream to prevent drownings",
            ],
          },
          {
            prompt: "A company reports: 'Our product is preferred by 3 out of 4 dentists' based on a survey of 4 dentists.",
            options: [
              "The sample size is too small to be meaningful",
              "The claim is statistically valid",
              "75% of all dentists prefer this product",
            ],
          },
          {
            prompt: "A news article states average income rose 15%, but the median income fell 2%.",
            options: [
              "A few very high earners likely raised the average while most people earned less",
              "Everyone earned more money",
              "The statistics must be wrong",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Critique a Media Graph",
        instruction:
          "Analyse the following media claims critically.",
        prompts: [
          {
            text: "A news headline states: 'Crime has DOUBLED!' The bar chart shows crime incidents going from 498 to 512, but the y-axis starts at 490. Explain at least 3 ways this graph is misleading and describe how it should be presented fairly.",
            type: "lines",
            lines: 8,
          },
          {
            text: "A social media post claims: 'Australia is getting more dangerous — violent crime rose 8% last year!' Research question: what additional information would you need to evaluate this claim? List at least 4 questions you would ask before accepting or rejecting it.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Media Literacy Challenge",
        instruction: "Critically examine statistics used in the media.",
        suggestions: [
          "Find a graph or statistic in a news article or advertisement. Identify at least 2 potential sources of bias or misleading presentation. How would you improve it?",
          "Watch a news segment that uses statistics. Write down the claim, the evidence, and any information that is missing (sample size, methodology, etc.).",
          "Compare how two different news sources report on the same statistic (e.g. employment, housing prices). Note the differences in framing.",
        ],
      },
    ],
  },

  // ── WS 12: Conditional Probability & Compound Events ──────────
  {
    slug: "conditional-probability-compound-events",
    title: "Conditional Probability & Compound Events",
    strand: "Probability",
    description:
      "Apply conditional probability to solve problems involving compound events, using tree diagrams and two-way tables",
    activities: [
      {
        type: "matching",
        title: "Probability Type Match",
        instruction:
          "Draw a line from each scenario to the correct probability type.",
        left: [
          "P(rain tomorrow)",
          "P(drawing a red card then a black card without replacement)",
          "P(rolling 6 given the roll is even)",
          "P(heads and tails in two flips)",
          "P(passing given studied 3+ hours)",
        ],
        right: [
          "Compound event (dependent)",
          "Simple probability",
          "Conditional probability",
          "Compound event (independent)",
          "Conditional probability",
        ],
      },
      {
        type: "circle-correct",
        title: "Correct Tree Diagram Paths",
        instruction:
          "A bag contains 3 red and 2 blue marbles. Two are drawn without replacement. Circle the correct probability for each outcome.",
        questions: [
          {
            prompt: "P(Red first) =",
            options: ["3/5", "2/5", "1/2"],
          },
          {
            prompt: "P(Blue second | Red first) =",
            options: ["2/4", "2/5", "3/4"],
          },
          {
            prompt: "P(Red then Blue) =",
            options: ["3/5 × 2/4 = 6/20", "3/5 × 2/5 = 6/25", "1/2 × 1/2 = 1/4"],
          },
          {
            prompt: "P(Both same colour) =",
            options: [
              "P(RR) + P(BB) = 6/20 + 2/20 = 8/20",
              "P(RR) + P(BB) = 9/25 + 4/25 = 13/25",
              "1/2",
            ],
          },
        ],
      },
      {
        type: "sequence",
        title: "Calculate Compound Probability",
        instruction:
          "Put the steps in order to find P(at least one head in 3 coin flips).",
        items: [
          { label: "Identify the complement: P(no heads) = P(all tails)" },
          { label: "Calculate P(tails on one flip) = 1/2" },
          { label: "Since flips are independent: P(all tails) = (1/2)³ = 1/8" },
          { label: "Use complement rule: P(at least one head) = 1 − P(all tails)" },
          { label: "Calculate: P(at least one head) = 1 − 1/8 = 7/8" },
        ],
      },
      {
        type: "open-response",
        title: "Design a Game of Chance",
        instruction:
          "Apply conditional probability to design and analyse a game.",
        prompts: [
          {
            text: "A medical test is 95% accurate (correctly identifies a condition when present) and has a 3% false positive rate. If 1 in 100 people have the condition, complete a two-way table for 10,000 people and calculate: (a) P(has condition | tests positive), (b) Why is this result surprising? Explain in plain language.",
            type: "lines",
            lines: 10,
          },
          {
            text: "Design a simple carnival game using two spins of a spinner (or two draws from a bag). Set the prizes so the game operator makes a profit on average. Show the probability calculations that prove the game is profitable. The game should still be fun and feel winnable!",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Probability Experiments",
        instruction: "Explore conditional probability with hands-on experiments.",
        suggestions: [
          "Use a deck of cards. Draw 2 cards without replacement, 20 times. Record how often you get 2 of the same suit. Compare your experimental result with the theoretical probability.",
          "Play the Monty Hall problem: use 3 cups and a coin. Play 30 rounds — 15 always switching, 15 always staying. Compare your win rates. Do the results match the theory?",
          "Roll two dice 36 times and record the sums. Create a frequency table and compare it to the theoretical probability distribution.",
        ],
      },
    ],
  },
];

export function getYear10Worksheet(
  slug: string
): WorksheetItem | undefined {
  return year10MathsWorksheets.find((w) => w.slug === slug);
}
