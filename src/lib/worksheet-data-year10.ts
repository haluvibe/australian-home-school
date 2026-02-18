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
      // --- EASY: Foundations of measurement error & proportion ---
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
        type: "matching",
        title: "Measurement Tool & Precision",
        instruction:
          "Draw a line from each measuring tool to the level of precision it typically provides.",
        left: [
          "30 cm plastic ruler",
          "Vernier caliper",
          "Micrometer screw gauge",
          "Kitchen scales",
          "Laboratory balance",
        ],
        right: [
          "±0.5 mm",
          "±0.05 mm",
          "±0.005 mm",
          "±1 g",
          "±0.01 g",
        ],
      },
      {
        type: "circle-correct",
        title: "Identify Absolute Error",
        instruction:
          "Circle the correct absolute error for each measurement.",
        questions: [
          {
            prompt: "True value = 25.0 cm, Measured value = 25.3 cm",
            options: ["0.3 cm", "0.03 cm", "3 cm"],
          },
          {
            prompt: "True value = 100 g, Measured value = 98.5 g",
            options: ["1.5 g", "15 g", "0.15 g"],
          },
          {
            prompt: "True value = 50.0 mL, Measured value = 50.8 mL",
            options: ["0.8 mL", "8 mL", "0.08 mL"],
          },
          {
            prompt: "True value = 3.60 s, Measured value = 3.55 s",
            options: ["0.05 s", "0.5 s", "5 s"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Calculate Percentage Error",
        instruction:
          "Circle the correct percentage error. Use: percentage error = (absolute error ÷ true value) × 100%.",
        questions: [
          {
            prompt: "Absolute error = 0.5 cm, True value = 10.0 cm",
            options: ["5%", "0.5%", "50%"],
          },
          {
            prompt: "Absolute error = 2 g, True value = 250 g",
            options: ["0.8%", "8%", "0.08%"],
          },
          {
            prompt: "Absolute error = 0.3 s, True value = 15.0 s",
            options: ["2%", "0.2%", "20%"],
          },
          {
            prompt: "Absolute error = 1.5 mL, True value = 50 mL",
            options: ["3%", "0.3%", "30%"],
          },
        ],
      },
      {
        type: "matching",
        title: "Scenario & Best Measuring Tool",
        instruction:
          "Draw a line from each scenario to the most appropriate measuring tool.",
        left: [
          "Diameter of a coin",
          "Volume of water in a beaker",
          "Mass of a chemical sample (0.01 g precision needed)",
          "Length of a garden bed",
          "Thickness of a wire",
        ],
        right: [
          "Vernier caliper",
          "Measuring cylinder",
          "Laboratory balance",
          "Tape measure",
          "Micrometer screw gauge",
        ],
      },
      {
        type: "circle-correct",
        title: "Significant Figures",
        instruction:
          "Circle the correct number of significant figures in each measurement.",
        questions: [
          {
            prompt: "0.00340 kg",
            options: ["3 significant figures", "5 significant figures", "6 significant figures"],
          },
          {
            prompt: "12,500 m (trailing zeros not significant)",
            options: ["3 significant figures", "5 significant figures", "4 significant figures"],
          },
          {
            prompt: "6.020 × 10³ mL",
            options: ["4 significant figures", "3 significant figures", "1 significant figure"],
          },
          {
            prompt: "0.105 s",
            options: ["3 significant figures", "4 significant figures", "2 significant figures"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Reasonable vs Unreasonable Precision",
        instruction:
          "Sort each measurement into the correct column: Reasonable Precision or Unreasonable Precision.",
        columns: ["Reasonable Precision", "Unreasonable Precision"],
        items: [
          { label: "Height of a door: 2.04 m" },
          { label: "Distance to the shops: 1.23456 km" },
          { label: "Mass of a bag of flour: 1.0 kg" },
          { label: "Length of a pencil: 17.34821 cm" },
          { label: "Water in a swimming pool: 50,000 L" },
          { label: "Temperature of a room: 22.347219°C" },
          { label: "Diameter of a bolt: 8.02 mm" },
          { label: "Distance between cities: 347.00000 km" },
        ],
      },
      {
        type: "circle-correct",
        title: "Upper and Lower Bounds",
        instruction:
          "Circle the correct upper and lower bounds for each measurement.",
        questions: [
          {
            prompt: "A length is 24 cm, measured to the nearest cm. The lower and upper bounds are:",
            options: ["23.5 cm and 24.5 cm", "23 cm and 25 cm", "24.0 cm and 24.9 cm"],
          },
          {
            prompt: "A mass is 3.5 kg, measured to the nearest 0.1 kg. The lower and upper bounds are:",
            options: ["3.45 kg and 3.55 kg", "3.0 kg and 4.0 kg", "3.4 kg and 3.6 kg"],
          },
          {
            prompt: "A time is 12.0 s, measured to the nearest 0.1 s. The lower and upper bounds are:",
            options: ["11.95 s and 12.05 s", "11.5 s and 12.5 s", "11.9 s and 12.1 s"],
          },
          {
            prompt: "A distance is 200 m, measured to the nearest 10 m. The lower and upper bounds are:",
            options: ["195 m and 205 m", "190 m and 210 m", "199 m and 201 m"],
          },
        ],
      },

      // --- MEDIUM: Error propagation, scaling & proportion ---
      {
        type: "circle-correct",
        title: "Error Propagation in Addition",
        instruction:
          "When adding or subtracting measurements, absolute errors add. Circle the correct combined error.",
        questions: [
          {
            prompt: "Length A = 12.0 cm ± 0.2 cm, Length B = 8.0 cm ± 0.3 cm. Total length error is:",
            options: ["±0.5 cm", "±0.1 cm", "±0.25 cm"],
          },
          {
            prompt: "Mass of container = 150 g ± 2 g, Mass of contents = 340 g ± 3 g. Total mass error is:",
            options: ["±5 g", "±2.5 g", "±1 g"],
          },
          {
            prompt: "Distance A = 4.5 km ± 0.1 km, Distance B = 3.2 km ± 0.1 km. Total distance error is:",
            options: ["±0.2 km", "±0.1 km", "±0.05 km"],
          },
          {
            prompt: "Time 1 = 6.2 s ± 0.05 s, Time 2 = 3.8 s ± 0.05 s. Difference in time has error:",
            options: ["±0.1 s", "±0.05 s", "±0.025 s"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Error Propagation in Multiplication",
        instruction:
          "When multiplying or dividing, percentage errors add. Circle the correct combined percentage error.",
        questions: [
          {
            prompt: "Length = 20 cm ± 2% and Width = 10 cm ± 3%. The percentage error in the area is:",
            options: ["5%", "6%", "2.5%"],
          },
          {
            prompt: "Speed = distance ÷ time. Distance has 4% error, time has 1% error. Speed percentage error is:",
            options: ["5%", "3%", "4%"],
          },
          {
            prompt: "Density = mass ÷ volume. Mass has 1% error, volume has 2% error. Density percentage error is:",
            options: ["3%", "2%", "0.5%"],
          },
          {
            prompt: "Force = mass × acceleration. Mass has 2% error, acceleration has 3% error. Force percentage error is:",
            options: ["5%", "6%", "1%"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Error in Area Calculations",
        instruction:
          "Circle the correct answer for each area-related error problem.",
        questions: [
          {
            prompt: "A rectangle is 8.0 cm ± 0.1 cm by 5.0 cm ± 0.1 cm. The percentage error in the area is approximately:",
            options: ["3.25%", "2%", "1.25%"],
          },
          {
            prompt: "A square has side 12.0 cm ± 0.2 cm. The percentage error in its area is approximately:",
            options: ["3.3%", "1.7%", "0.8%"],
          },
          {
            prompt: "A circle has radius 7.0 cm ± 0.1 cm. The percentage error in its area is approximately:",
            options: ["2.9%", "1.4%", "0.7%"],
          },
          {
            prompt: "A triangle has base 10.0 cm ± 0.2 cm and height 6.0 cm ± 0.1 cm. The percentage error in its area is approximately:",
            options: ["3.7%", "1.5%", "5%"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Error in Volume Calculations",
        instruction:
          "Circle the correct answer for each volume-related error problem.",
        questions: [
          {
            prompt: "A cube has side 10 cm ± 0.1 cm (1% error). The percentage error in its volume is approximately:",
            options: ["3%", "1%", "0.1%"],
          },
          {
            prompt: "A cuboid is 5.0 cm ± 1% by 4.0 cm ± 2% by 3.0 cm ± 1%. The percentage error in its volume is approximately:",
            options: ["4%", "2%", "1.3%"],
          },
          {
            prompt: "A cylinder has radius 3.0 cm ± 2% and height 10.0 cm ± 1%. The percentage error in its volume is approximately:",
            options: ["5%", "3%", "2%"],
          },
          {
            prompt: "A sphere has radius 6.0 cm ± 0.5%. The percentage error in its volume is approximately:",
            options: ["1.5%", "0.5%", "3%"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Steps to Calculate Percentage Error",
        instruction:
          "Put the steps for calculating percentage error in the correct order.",
        items: [
          { label: "Identify the measured value and the true (accepted) value" },
          { label: "Calculate the absolute error: |measured value − true value|" },
          { label: "Divide the absolute error by the true value" },
          { label: "Multiply the result by 100 to convert to a percentage" },
          { label: "State the percentage error with appropriate significant figures" },
          { label: "Consider whether the error is acceptable for the context" },
        ],
      },
      {
        type: "matching",
        title: "Map Scale & Real Distance",
        instruction:
          "Draw a line from each map measurement to the correct real-world distance.",
        left: [
          "4 cm on a 1:25,000 map",
          "6 cm on a 1:50,000 map",
          "2.5 cm on a 1:100,000 map",
          "10 cm on a 1:10,000 map",
          "3 cm on a 1:200,000 map",
        ],
        right: [
          "1 km",
          "3 km",
          "2.5 km",
          "1 km",
          "6 km",
        ],
      },
      {
        type: "circle-correct",
        title: "Scale Drawing Calculations",
        instruction:
          "Circle the correct answer for each scale drawing problem.",
        questions: [
          {
            prompt: "A room is 6 m long. On a 1:50 scale drawing, the length should be:",
            options: ["12 cm", "120 cm", "1.2 cm"],
          },
          {
            prompt: "On a 1:200 plan, a wall measures 3.5 cm. The real length of the wall is:",
            options: ["7 m", "70 m", "0.7 m"],
          },
          {
            prompt: "A model car is built at 1:24 scale. If the model is 18 cm long, the real car is:",
            options: ["4.32 m", "43.2 m", "0.432 m"],
          },
          {
            prompt: "An architect's plan uses 1:100 scale. A garden measuring 15 m by 8 m appears on the plan as:",
            options: ["15 cm by 8 cm", "1.5 cm by 0.8 cm", "150 cm by 80 cm"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Direct Proportion Problems",
        instruction:
          "Circle the correct answer for each proportion problem.",
        questions: [
          {
            prompt: "If 5 kg of apples cost $12, then 8 kg of apples cost:",
            options: ["$19.20", "$15.00", "$20.00"],
          },
          {
            prompt: "A car uses 7 L of fuel per 100 km. For a 350 km trip, the fuel needed is:",
            options: ["24.5 L", "50 L", "21 L"],
          },
          {
            prompt: "A recipe for 4 people uses 300 g of flour. For 10 people, the flour needed is:",
            options: ["750 g", "600 g", "1,200 g"],
          },
          {
            prompt: "A tap fills a 60 L tank in 20 minutes. At the same rate, it fills a 90 L tank in:",
            options: ["30 minutes", "45 minutes", "40 minutes"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Inverse Proportion Problems",
        instruction:
          "Circle the correct answer for each inverse proportion problem.",
        questions: [
          {
            prompt: "6 workers can complete a job in 10 days. How long would 4 workers take?",
            options: ["15 days", "12 days", "8 days"],
          },
          {
            prompt: "A car travelling at 80 km/h takes 3 hours for a journey. At 60 km/h, the journey takes:",
            options: ["4 hours", "3.5 hours", "2.25 hours"],
          },
          {
            prompt: "12 pipes fill a pool in 6 hours. To fill it in 4 hours, the number of pipes needed is:",
            options: ["18", "8", "24"],
          },
          {
            prompt: "A gear with 40 teeth turning at 120 rpm drives a gear with 60 teeth. The driven gear turns at:",
            options: ["80 rpm", "180 rpm", "100 rpm"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Direct vs Inverse Proportion",
        instruction:
          "Sort each scenario into the correct column: Direct Proportion or Inverse Proportion.",
        columns: ["Direct Proportion", "Inverse Proportion"],
        items: [
          { label: "More workers → less time to finish a job" },
          { label: "More hours worked → more wages earned" },
          { label: "Higher speed → less travel time for same distance" },
          { label: "More items purchased → higher total cost" },
          { label: "Wider pipe → less time to fill a tank" },
          { label: "Longer side of a rectangle → larger area (width fixed)" },
          { label: "More people sharing a pizza → smaller slice each" },
          { label: "Greater distance → more fuel used (same car)" },
        ],
      },

      // --- HARD: Applied problems & extended reasoning ---
      {
        type: "open-response",
        title: "Map Measurement with Error Propagation",
        instruction:
          "Show all working and state your answer with its error range.",
        prompts: [
          {
            text: "A map has scale 1:25,000. You measure a lake's length on the map as 8.4 cm ± 0.2 cm. Calculate the real length of the lake and the range of possible actual lengths due to the measurement error.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response",
        title: "Cube Volume with Percentage Error",
        instruction:
          "Show all working. Explain your reasoning clearly.",
        prompts: [
          {
            text: "You measure a cube's side as 5.0 cm ± 0.1 cm. (a) Calculate the volume of the cube. (b) Calculate the percentage error in the side measurement. (c) Calculate the percentage error in the volume. (d) Explain why the percentage error in the volume (about 6%) is three times the percentage error in the side measurement (2%).",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Reducing Measurement Error",
        instruction:
          "Describe a practical method and explain the mathematics behind it.",
        prompts: [
          {
            text: "Design a method to measure the thickness of a single sheet of paper as accurately as possible, given that a ruler only measures to the nearest millimetre. Explain how your method reduces the percentage error in the measurement.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response",
        title: "Scaling Problem — Model to Real Life",
        instruction:
          "Show all working for each part.",
        prompts: [
          {
            text: "An architect builds a 1:150 scale model of a building. (a) The model is 24 cm tall. How tall is the real building in metres? (b) A window on the model is 0.8 cm wide. What is the real window width in metres? (c) The floor area on the model is 32 cm². What is the real floor area in m²? (Hint: area scales by the square of the scale factor.)",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Measuring Methods",
        instruction:
          "Evaluate the two methods and justify which is more accurate.",
        prompts: [
          {
            text: "Two students measure the length of a corridor. Student A uses a 30 cm ruler (±0.5 mm) and measures in 10 segments. Student B uses a 5 m tape measure (±2 mm) and measures in 2 segments. (a) What is the maximum total error for each student? (b) Which student's method is more accurate and why? (c) Suggest how Student A could reduce their total error.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Measurement Properties",
        instruction:
          "Circle True or False for each statement about measurement and error.",
        questions: [
          {
            prompt: "Doubling all measurements in a rectangle doubles the area.",
            options: ["False — it quadruples the area", "True"],
          },
          {
            prompt: "Percentage error is always positive.",
            options: ["True", "False"],
          },
          {
            prompt: "When multiplying two measurements, you add the absolute errors.",
            options: ["False — you add the percentage errors", "True"],
          },
          {
            prompt: "Using a more precise instrument always eliminates measurement error.",
            options: ["False — it reduces but does not eliminate error", "True"],
          },
          {
            prompt: "If a cube's side has 2% error, the volume has 6% error.",
            options: ["True", "False"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Proportion Problem",
        instruction:
          "Read the problem carefully, show all working, and give your answer in context.",
        prompts: [
          {
            text: "A school needs to mix cordial for sports day. The ratio of cordial concentrate to water is 1:4. (a) How much concentrate is needed for 15 litres of drink? (b) If they have 2 litres of concentrate, how many litres of drink can they make? (c) 120 students each need 250 mL. How much concentrate is needed in total?",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Error in Indirect Measurement",
        instruction:
          "Show all working and discuss the sources of error.",
        prompts: [
          {
            text: "To find the height of a tree, you stand 20 m from its base (measured ± 0.5 m) and use a clinometer to measure the angle of elevation as 35° ± 1°. Using height = distance × tan(angle): (a) Calculate the estimated height. (b) Calculate the height using the upper bounds (20.5 m and 36°) and lower bounds (19.5 m and 34°). (c) What is the range of possible heights? (Hint: tan 34° ≈ 0.6745, tan 35° ≈ 0.7002, tan 36° ≈ 0.7265.)",
            type: "lines",
            lines: 8,
          },
        ],
      },

      // --- HOME: Hands-on investigation ---
      {
        type: "home-activity",
        title: "Measurement Precision Experiment",
        instruction: "Investigate how measurement technique affects accuracy and precision.",
        suggestions: [
          "Choose an object at home (e.g. a book or table). Measure its length 10 times with a ruler, recording each result to the nearest millimetre. Calculate the mean, range, and percentage variation. What does this tell you about measurement uncertainty?",
          "Now measure the same object using a different method (e.g. a tape measure or string and ruler). Compare the two sets of results — which method was more precise? Which do you think was more accurate? Explain your reasoning.",
          "Measure the dimensions of a room to calculate its area. Then estimate the percentage error if each measurement is off by 1 cm. How does the room size affect the percentage error?",
        ],
      },
      {
        type: "home-activity",
        title: "Map and Scaling Investigation",
        instruction: "Explore proportional reasoning and scale in the real world.",
        suggestions: [
          "Find a map of your local area (printed or online). Use the scale to estimate the straight-line distance from your home to three different locations. Then check with a mapping app — how close were your estimates?",
          "Choose a small object (e.g. a toy car or figurine). Measure its dimensions and calculate the scale factor compared to the real object. If the real car is 4.5 m long and the model is 18 cm, what is the scale ratio?",
          "Draw a scale plan of your bedroom using a scale of 1:20. Include the positions of furniture. Calculate the real area of your room from your drawing and compare it to a direct measurement.",
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
      // --- EASY: Theorem identification & basic angle problems ---
      {
        type: "matching",
        title: "Theorem Name → Description",
        instruction:
          "Draw a line from each theorem to its correct description.",
        left: [
          "Angle sum of a triangle",
          "Exterior angle theorem",
          "Vertically opposite angles",
          "Angles on a straight line",
          "Angle sum of a quadrilateral",
        ],
        right: [
          "Interior angles add to 180°",
          "Equals the sum of the two non-adjacent interior angles",
          "Vertically opposite angles are equal",
          "Adjacent angles on a straight line sum to 180°",
          "Interior angles add to 360°",
        ],
      },
      {
        type: "circle-correct",
        title: "Angle Sum of a Triangle",
        instruction:
          "Circle the correct missing angle in each triangle.",
        questions: [
          {
            prompt: "Triangle with angles 50° and 70°. The third angle is:",
            options: ["60°", "80°", "110°"],
          },
          {
            prompt: "Triangle with angles 90° and 35°. The third angle is:",
            options: ["45°", "55°", "65°"],
          },
          {
            prompt: "Triangle with angles 120° and 25°. The third angle is:",
            options: ["35°", "45°", "215°"],
          },
          {
            prompt: "Equilateral triangle. Each angle is:",
            options: ["45°", "60°", "90°"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Angles on a Straight Line",
        instruction:
          "Circle the correct missing angle on each straight line.",
        questions: [
          {
            prompt: "One angle is 110°. The adjacent angle is:",
            options: ["70°", "80°", "110°"],
          },
          {
            prompt: "One angle is 45°. The adjacent angle is:",
            options: ["45°", "135°", "145°"],
          },
          {
            prompt: "Two equal angles on a straight line. Each is:",
            options: ["60°", "90°", "180°"],
          },
          {
            prompt: "Three angles on a straight line: 60°, 80°, and x. x is:",
            options: ["20°", "40°", "60°"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Vertically Opposite Angles",
        instruction:
          "Two straight lines cross. Circle the correct answer.",
        questions: [
          {
            prompt: "One angle is 72°. The vertically opposite angle is:",
            options: ["72°", "108°", "144°"],
          },
          {
            prompt: "One angle is 135°. The vertically opposite angle is:",
            options: ["45°", "90°", "135°"],
          },
          {
            prompt: "One angle is 90°. The adjacent angle is:",
            options: ["45°", "90°", "180°"],
          },
          {
            prompt: "One angle is 58°. The adjacent angle (not vertically opposite) is:",
            options: ["58°", "122°", "302°"],
          },
        ],
      },
      {
        type: "matching",
        title: "Angle Relationship → Rule Name",
        instruction:
          "Draw a line from each angle relationship to its rule.",
        left: [
          "Alternate angles (Z-angles)",
          "Co-interior angles (C-angles)",
          "Corresponding angles (F-angles)",
          "Vertically opposite angles",
          "Supplementary angles",
        ],
        right: [
          "Are equal (parallel lines)",
          "Sum to 180° (parallel lines)",
          "Are equal (parallel lines, same side)",
          "Are equal (two intersecting lines)",
          "Sum to 180° (straight line)",
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
          { label: "The diagonal creates two triangles whose angles together make up the quadrilateral's angles" },
        ],
      },
      {
        type: "circle-correct",
        title: "Co-interior Angles (Parallel Lines)",
        instruction:
          "Parallel lines are cut by a transversal. Circle the correct co-interior angle.",
        questions: [
          {
            prompt: "One co-interior angle is 65°. The other is:",
            options: ["65°", "115°", "125°"],
          },
          {
            prompt: "One co-interior angle is 110°. The other is:",
            options: ["70°", "80°", "110°"],
          },
          {
            prompt: "One co-interior angle is 90°. The other is:",
            options: ["45°", "90°", "180°"],
          },
          {
            prompt: "One co-interior angle is 138°. The other is:",
            options: ["42°", "48°", "138°"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Alternate Angles (Parallel Lines)",
        instruction:
          "Parallel lines are cut by a transversal. Circle the correct alternate angle.",
        questions: [
          {
            prompt: "One alternate angle is 55°. The other alternate angle is:",
            options: ["55°", "125°", "135°"],
          },
          {
            prompt: "One alternate angle is 128°. The other alternate angle is:",
            options: ["52°", "62°", "128°"],
          },
          {
            prompt: "A transversal crosses two parallel lines. One angle is 73°. The corresponding angle is:",
            options: ["73°", "107°", "117°"],
          },
          {
            prompt: "One alternate angle is x and the co-interior angle on the same side is 140°. x equals:",
            options: ["40°", "50°", "140°"],
          },
        ],
      },

      // --- MEDIUM: Polygon angles, proofs & congruence ---
      {
        type: "circle-correct",
        title: "Exterior Angle Theorem",
        instruction:
          "Use the exterior angle theorem to circle the correct answer.",
        questions: [
          {
            prompt: "The two non-adjacent interior angles are 45° and 65°. The exterior angle is:",
            options: ["90°", "110°", "120°"],
          },
          {
            prompt: "The exterior angle is 130° and one non-adjacent interior angle is 80°. The other is:",
            options: ["40°", "50°", "60°"],
          },
          {
            prompt: "The exterior angle is 144° and the two non-adjacent interior angles are equal. Each is:",
            options: ["36°", "72°", "108°"],
          },
          {
            prompt: "In an isosceles triangle, the exterior angle at the apex is 100°. Each base angle is:",
            options: ["40°", "50°", "80°"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Interior Angles of Regular Polygons",
        instruction:
          "Circle the correct interior angle for each regular polygon. Use: interior angle = (n − 2) × 180° ÷ n.",
        questions: [
          {
            prompt: "Equilateral triangle (3 sides):",
            options: ["60°", "90°", "120°"],
          },
          {
            prompt: "Square (4 sides):",
            options: ["60°", "90°", "120°"],
          },
          {
            prompt: "Regular pentagon (5 sides):",
            options: ["100°", "108°", "120°"],
          },
          {
            prompt: "Regular hexagon (6 sides):",
            options: ["108°", "120°", "135°"],
          },
          {
            prompt: "Regular octagon (8 sides):",
            options: ["120°", "135°", "144°"],
          },
          {
            prompt: "Regular decagon (10 sides):",
            options: ["140°", "144°", "150°"],
          },
        ],
      },
      {
        type: "matching",
        title: "Regular Polygon → Interior Angle",
        instruction:
          "Draw a line from each regular polygon to its interior angle measure.",
        left: [
          "Equilateral triangle",
          "Square",
          "Regular pentagon",
          "Regular hexagon",
          "Regular octagon",
          "Regular decagon",
        ],
        right: [
          "60°",
          "90°",
          "108°",
          "120°",
          "135°",
          "144°",
        ],
      },
      {
        type: "circle-correct",
        title: "Angle Sum of Polygons",
        instruction:
          "Circle the correct angle sum for each polygon. Use: angle sum = (n − 2) × 180°.",
        questions: [
          {
            prompt: "Triangle (3 sides):",
            options: ["180°", "270°", "360°"],
          },
          {
            prompt: "Quadrilateral (4 sides):",
            options: ["180°", "360°", "540°"],
          },
          {
            prompt: "Pentagon (5 sides):",
            options: ["360°", "540°", "720°"],
          },
          {
            prompt: "Hexagon (6 sides):",
            options: ["540°", "720°", "900°"],
          },
          {
            prompt: "Heptagon (7 sides):",
            options: ["720°", "900°", "1080°"],
          },
          {
            prompt: "Octagon (8 sides):",
            options: ["900°", "1080°", "1260°"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Proof: Quadrilateral Angles Sum to 360°",
        instruction:
          "Put these proof steps in the correct order to prove that the interior angles of any quadrilateral sum to 360°.",
        items: [
          { label: "Let ABCD be any quadrilateral." },
          { label: "Draw diagonal AC, dividing the quadrilateral into triangles ABC and ACD." },
          { label: "The angle sum of triangle ABC is 180° (angle sum of a triangle)." },
          { label: "The angle sum of triangle ACD is 180° (angle sum of a triangle)." },
          { label: "The angles of the two triangles together make up all four interior angles of ABCD." },
          { label: "Therefore the angle sum of quadrilateral ABCD = 180° + 180° = 360°. □" },
        ],
      },
      {
        type: "sequence",
        title: "Proof: Exterior Angles of Any Convex Polygon Sum to 360°",
        instruction:
          "Put these proof steps in the correct order.",
        items: [
          { label: "Let the convex polygon have n sides, so it has n interior angles." },
          { label: "At each vertex, the interior angle + exterior angle = 180° (angles on a straight line)." },
          { label: "Summing over all n vertices: sum of interior angles + sum of exterior angles = n × 180°." },
          { label: "The interior angle sum of an n-sided polygon is (n − 2) × 180°." },
          { label: "Substituting: (n − 2) × 180° + sum of exterior angles = n × 180°." },
          { label: "Sum of exterior angles = n × 180° − (n − 2) × 180° = 2 × 180° = 360°. □" },
        ],
      },
      {
        type: "circle-correct",
        title: "Valid vs Invalid Reasoning",
        instruction:
          "Circle whether each piece of reasoning is VALID or INVALID.",
        questions: [
          {
            prompt: "'Two angles in a triangle are 60° each, so it must be equilateral.'",
            options: ["Valid — third angle is also 60°", "Invalid — sides could differ"],
          },
          {
            prompt: "'All squares are rectangles, so all rectangles are squares.'",
            options: ["Valid — they are equivalent", "Invalid — converse is not necessarily true"],
          },
          {
            prompt: "'Angles in a triangle sum to 180°, so a right-angled triangle has two acute angles.'",
            options: ["Valid — the other two must sum to 90°", "Invalid — one could be obtuse"],
          },
          {
            prompt: "'Alternate angles are equal, so these two lines must be parallel.'",
            options: ["Valid — this is the converse of the alternate angle theorem", "Invalid — alternate angles only apply to parallel lines"],
          },
          {
            prompt: "'A polygon has interior angle sum 720°, so it has 6 sides.'",
            options: ["Valid — (n−2)×180° = 720° gives n = 6", "Invalid — could have more sides"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Congruence Conditions",
        instruction:
          "Circle the correct congruence condition that justifies each pair of triangles being congruent.",
        questions: [
          {
            prompt: "Three pairs of equal sides are known:",
            options: ["SSS", "SAS", "ASA", "RHS"],
          },
          {
            prompt: "Two sides and the included angle are equal:",
            options: ["SSS", "SAS", "ASA", "RHS"],
          },
          {
            prompt: "Two angles and the included side are equal:",
            options: ["SSS", "SAS", "ASA", "RHS"],
          },
          {
            prompt: "Both triangles are right-angled, with equal hypotenuse and one equal side:",
            options: ["SSS", "SAS", "ASA", "RHS"],
          },
          {
            prompt: "Two sides and a non-included angle are equal (ambiguous case):",
            options: ["SSS — always congruent", "SAS — always congruent", "Not necessarily congruent (SSA is not a valid condition)", "RHS — always congruent"],
          },
        ],
      },
      {
        type: "matching",
        title: "Congruence Condition → Description",
        instruction:
          "Draw a line from each congruence condition to its description.",
        left: [
          "SSS",
          "SAS",
          "ASA",
          "AAS",
          "RHS",
        ],
        right: [
          "Three pairs of corresponding sides are equal",
          "Two sides and the included angle are equal",
          "Two angles and the included side are equal",
          "Two angles and a non-included side are equal",
          "Right angle, hypotenuse, and one other side are equal",
        ],
      },
      {
        type: "sorting",
        title: "Sufficient vs Insufficient for Congruence",
        instruction:
          "Sort each set of information: is it Sufficient or Insufficient to prove two triangles are congruent?",
        columns: ["Sufficient", "Insufficient"],
        items: [
          { label: "Three pairs of equal sides (SSS)" },
          { label: "Three pairs of equal angles (AAA)" },
          { label: "Two sides and the included angle (SAS)" },
          { label: "Two sides and a non-included angle (SSA)" },
          { label: "Two angles and the included side (ASA)" },
          { label: "One side and one angle only" },
          { label: "Right angle, hypotenuse, and one side (RHS)" },
          { label: "Two angles and a non-included side (AAS)" },
        ],
      },

      // --- HARD: Proofs, multi-step problems & applications ---
      {
        type: "open-response",
        title: "Prove the Pentagon Angle Sum",
        instruction:
          "Write a step-by-step deductive proof.",
        prompts: [
          {
            text: "Prove that the interior angle sum of any pentagon is 540°. (Hint: from one vertex, draw diagonals to divide the pentagon into triangles. How many triangles are formed?)",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "open-response",
        title: "Exterior Angle Theorem — Find the Angles",
        instruction:
          "Show your deductive reasoning, stating the theorem used at each step.",
        prompts: [
          {
            text: "In triangle PQR, the exterior angle at R is 140°. If angle P = 55°, find angle Q and angle PRQ.",
            type: "lines",
            lines: 6,
          },
          {
            text: "In triangle XYZ, the exterior angle at Z is 126°. The interior angles at X and Y are in the ratio 2 : 5. Find all three interior angles.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response",
        title: "Isosceles Triangle Proof",
        instruction:
          "Use deductive reasoning and congruence to construct a proof.",
        prompts: [
          {
            text: "Prove that the base angles of an isosceles triangle are equal. (Hint: let triangle ABC have AB = AC. Draw the angle bisector from A to BC, meeting BC at M. Show triangles ABM and ACM are congruent.)",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Multi-Step Parallel Lines Problem",
        instruction:
          "Find all unknown angles, showing your reasoning and stating each theorem used.",
        prompts: [
          {
            text: "Two parallel lines are cut by two transversals. At one intersection, the angle is 52°. At the other intersection on the same parallel line, the angle between the two transversals is 74°. Find all remaining angles at both intersections and the angle where the two transversals meet between the parallel lines. State each theorem you use.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Interior Angle Formula Proof",
        instruction:
          "Prove the general formula for interior angles of a regular polygon.",
        prompts: [
          {
            text: "Prove that each interior angle of a regular n-sided polygon is (n − 2) × 180° ÷ n. Start from the fact that from one vertex you can draw (n − 3) diagonals, creating (n − 2) triangles.",
            type: "lines",
            lines: 8,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Geometric Properties",
        instruction:
          "Circle TRUE or FALSE for each statement.",
        questions: [
          {
            prompt: "The exterior angles of any convex polygon sum to 360°.",
            options: ["True", "False"],
          },
          {
            prompt: "All equilateral triangles are similar to each other.",
            options: ["True", "False"],
          },
          {
            prompt: "If two triangles have all three angles equal (AAA), they must be congruent.",
            options: ["True — same shape means same size", "False — they are similar but not necessarily congruent"],
          },
          {
            prompt: "A regular polygon with interior angle 140° has 9 sides.",
            options: ["True — (n−2)×180°÷n = 140° gives n = 9", "False — it gives a different value of n"],
          },
          {
            prompt: "The angle sum of a polygon with 12 sides is 1800°.",
            options: ["True — (12−2)×180° = 1800°", "False — the sum is different"],
          },
          {
            prompt: "Co-interior angles between parallel lines are equal.",
            options: ["True", "False — they are supplementary (sum to 180°)"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Construct a Proof for a Diagram",
        instruction:
          "Write a deductive proof for the following geometric scenario.",
        prompts: [
          {
            text: "In quadrilateral ABCD, AB is parallel to DC and AD is parallel to BC (i.e. ABCD is a parallelogram). Prove that opposite angles are equal — that is, prove angle A = angle C and angle B = angle D. (Hint: draw a diagonal and use alternate angles.)",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Deductive Reasoning",
        instruction:
          "Apply geometric theorems to real-world structures.",
        prompts: [
          {
            text: "A bridge truss is made of equilateral triangles. Explain why this shape is structurally strong by discussing the properties of equilateral triangles (angle measures, rigidity). If a truss section has 6 equilateral triangles meeting at a central point, verify that the angles at that point sum to 360°.",
            type: "lines",
            lines: 8,
          },
          {
            text: "An architect designs a building with a regular octagonal floor plan. Calculate the interior angle at each corner. If they want to add a straight corridor from one corner to the opposite corner, how many sides does the corridor cross? Explain your reasoning.",
            type: "lines",
            lines: 8,
          },
        ],
      },

      // --- HOME: Real-world exploration ---
      {
        type: "home-activity",
        title: "Geometry in the Built Environment",
        instruction: "Explore geometric reasoning in structures around you.",
        suggestions: [
          "Walk around your neighbourhood and photograph or sketch five different polygon shapes in buildings, signs and structures. For each, state the polygon name, number of sides, and calculate the expected interior angle sum.",
          "Find a roof structure or bridge that uses triangles. Estimate the angles in each triangle and check they sum to approximately 180°. Why do engineers prefer triangles for load-bearing structures?",
          "Find a tiled floor, wall or pavement. Identify the shapes used in the tessellation. At each vertex where tiles meet, measure or estimate the angles and verify they sum to 360°.",
        ],
      },
      {
        type: "home-activity",
        title: "Tessellation Investigation",
        instruction: "Investigate which regular polygons tessellate and why.",
        suggestions: [
          "Try to tessellate (tile a flat surface with no gaps or overlaps) using only equilateral triangles, then only squares, then only regular hexagons. Which ones work? For each, explain why by calculating how many polygons meet at a vertex and verifying the angles sum to 360°.",
          "Explain why regular pentagons (interior angle 108°) do not tessellate on their own. What happens when you try to fit them together at a vertex?",
          "Research a semi-regular tessellation that uses two different regular polygon types. Sketch the pattern and verify the angle sum at each vertex is 360°.",
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
      // ─── EASY ───────────────────────────────────────────────────

      // E1 — matching: network term → definition
      {
        type: "matching",
        title: "Network Vocabulary",
        instruction:
          "Draw a line from each network term to its correct definition.",
        left: [
          "Vertex (node)",
          "Edge",
          "Degree of a vertex",
          "Path",
          "Circuit",
          "Connected graph",
        ],
        right: [
          "A route that starts and ends at the same vertex without repeating edges",
          "The number of edges that meet at a vertex",
          "A graph where every pair of vertices is joined by at least one path",
          "A line or link connecting two vertices",
          "A point in a network where edges meet",
          "A route from one vertex to another without repeating edges",
        ],
      },

      // E2 — circle-correct: degree of a vertex
      {
        type: "circle-correct",
        title: "Degree of a Vertex",
        instruction:
          "Circle the correct degree for the described vertex.",
        questions: [
          {
            prompt: "Vertex A is connected to vertices B, C, and D by one edge each",
            options: ["3", "2", "4"],
          },
          {
            prompt: "Vertex P has edges to Q, R, S, T, and also a loop back to itself",
            options: ["6 (a loop counts as 2)", "5", "4"],
          },
          {
            prompt: "Vertex X is connected to Y by two separate edges, and to Z by one edge",
            options: ["3", "2", "4"],
          },
          {
            prompt: "An isolated vertex with no edges",
            options: ["0", "1", "undefined"],
          },
        ],
      },

      // E3 — circle-correct: count vertices and edges
      {
        type: "circle-correct",
        title: "Counting Vertices & Edges",
        instruction:
          "Circle the correct count of vertices and edges for each network description.",
        questions: [
          {
            prompt: "A triangle (three points connected in a cycle)",
            options: ["3 vertices, 3 edges", "3 vertices, 6 edges", "6 vertices, 3 edges"],
          },
          {
            prompt: "A square (four points connected in a cycle)",
            options: ["4 vertices, 4 edges", "4 vertices, 8 edges", "8 vertices, 4 edges"],
          },
          {
            prompt: "A square with both diagonals drawn",
            options: ["4 vertices, 6 edges", "4 vertices, 4 edges", "6 vertices, 6 edges"],
          },
          {
            prompt: "Five cities where every pair is directly connected by a road",
            options: ["5 vertices, 10 edges", "5 vertices, 5 edges", "10 vertices, 5 edges"],
          },
        ],
      },

      // E4 — matching: real-world situation → network type
      {
        type: "matching",
        title: "Real-World Networks",
        instruction:
          "Match each real-world situation to the type of network it best represents.",
        left: [
          "Road map between towns with distances",
          "One-way street system",
          "Facebook friendships",
          "Web pages with hyperlinks",
          "Water pipe network with flow capacities",
        ],
        right: [
          "Directed graph (digraph)",
          "Undirected weighted graph",
          "Undirected unweighted graph",
          "Directed graph (digraph)",
          "Weighted directed graph",
        ],
      },

      // E5 — sorting: connected vs disconnected graphs
      {
        type: "sorting",
        title: "Connected or Disconnected?",
        instruction:
          "Sort each graph description into Connected or Disconnected.",
        columns: ["Connected", "Disconnected"],
        items: [
          { label: "A triangle with all 3 vertices joined" },
          { label: "Four vertices forming a square" },
          { label: "Vertices A–B–C in a line, plus vertex D with no edges" },
          { label: "Two separate triangles that share no vertices" },
          { label: "A star shape: one central vertex joined to 5 outer vertices" },
          { label: "Vertices P–Q connected, and vertices R–S connected, but no edge between the two pairs" },
        ],
      },

      // E6 — circle-correct: identify paths vs circuits
      {
        type: "circle-correct",
        title: "Path or Circuit?",
        instruction:
          "Circle whether each route is a Path (starts and ends at different vertices), a Circuit (starts and ends at the same vertex), or Neither. Assume no edge is repeated unless stated.",
        questions: [
          {
            prompt: "A → B → C → D",
            options: ["Path", "Circuit", "Neither"],
          },
          {
            prompt: "A → B → C → D → A",
            options: ["Circuit", "Path", "Neither"],
          },
          {
            prompt: "P → Q → R → Q → S (edge Q–R is used twice)",
            options: ["Neither — an edge is repeated", "Path", "Circuit"],
          },
          {
            prompt: "X → Y → Z → X",
            options: ["Circuit", "Path", "Neither"],
          },
        ],
      },

      // E7 — circle-correct: is this a tree?
      {
        type: "circle-correct",
        title: "Is It a Tree?",
        instruction:
          "A tree is a connected graph with no circuits. Circle whether each description is a tree.",
        questions: [
          {
            prompt: "A graph with 4 vertices and 3 edges that is connected and has no circuits",
            options: ["Yes — it is a tree", "No — not a tree"],
          },
          {
            prompt: "A triangle (3 vertices, 3 edges)",
            options: ["No — it contains a circuit", "Yes — it is a tree"],
          },
          {
            prompt: "A graph with 5 vertices and 4 edges that is connected",
            options: ["Yes — it is a tree (n vertices, n − 1 edges, connected)", "No — not a tree"],
          },
          {
            prompt: "Two separate edges (A–B and C–D) with no connection between them",
            options: ["No — it is not connected", "Yes — it is a tree"],
          },
        ],
      },

      // E8 — sorting: planar vs non-planar descriptions
      {
        type: "sorting",
        title: "Planar or Non-Planar?",
        instruction:
          "A planar graph can be drawn on a flat surface with no edges crossing. Sort each graph.",
        columns: ["Planar", "Non-Planar"],
        items: [
          { label: "A triangle (K₃)" },
          { label: "A square with one diagonal" },
          { label: "The complete graph on 5 vertices (K₅) — every vertex connected to every other" },
          { label: "A tree with 6 vertices" },
          { label: "The complete bipartite graph K₃,₃ — 3 houses each connected to 3 utilities" },
          { label: "A single cycle of 8 vertices" },
        ],
      },

      // ─── MEDIUM ─────────────────────────────────────────────────

      // M1 — circle-correct: Euler path possible?
      {
        type: "circle-correct",
        title: "Euler Path Possible?",
        instruction:
          "An Euler path uses every edge exactly once. It exists when a connected graph has exactly 0 or 2 vertices of odd degree. Circle the correct answer.",
        questions: [
          {
            prompt: "Vertex degrees: 2, 2, 2, 2 (a square)",
            options: ["Yes — Euler circuit exists (0 odd-degree vertices)", "Yes — Euler path only", "No — impossible"],
          },
          {
            prompt: "Vertex degrees: 3, 3, 2, 2",
            options: ["Yes — Euler path exists (exactly 2 odd-degree vertices)", "No — impossible", "Yes — Euler circuit exists"],
          },
          {
            prompt: "Vertex degrees: 1, 1, 2, 2, 2",
            options: ["Yes — Euler path exists (exactly 2 odd-degree vertices)", "Yes — Euler circuit exists", "No — impossible"],
          },
          {
            prompt: "Vertex degrees: 3, 3, 3, 1",
            options: ["No — 4 odd-degree vertices", "Yes — Euler path exists", "Yes — Euler circuit exists"],
          },
        ],
      },

      // M2 — circle-correct: Euler circuit possible?
      {
        type: "circle-correct",
        title: "Euler Circuit Possible?",
        instruction:
          "An Euler circuit uses every edge exactly once and returns to the start. It exists when every vertex has even degree and the graph is connected. Circle the correct answer.",
        questions: [
          {
            prompt: "Vertex degrees: 4, 2, 4, 2",
            options: ["Yes — Euler circuit exists (all even degrees)", "Yes — Euler path only", "No — impossible"],
          },
          {
            prompt: "Vertex degrees: 2, 2, 2 (a triangle)",
            options: ["Yes — Euler circuit exists (all even degrees)", "No — impossible", "Yes — Euler path only"],
          },
          {
            prompt: "Vertex degrees: 3, 3, 2, 2, 2",
            options: ["No — Euler circuit impossible (has 2 odd-degree vertices; Euler path exists instead)", "Yes — Euler circuit exists", "No — neither path nor circuit"],
          },
          {
            prompt: "Vertex degrees: 4, 4, 4, 4",
            options: ["Yes — Euler circuit exists (all even degrees)", "No — impossible", "Yes — Euler path only"],
          },
        ],
      },

      // M3 — circle-correct: count odd/even degree vertices
      {
        type: "circle-correct",
        title: "Odd & Even Degree Vertices",
        instruction:
          "Count the number of odd-degree and even-degree vertices in each graph. Circle the correct count.",
        questions: [
          {
            prompt: "A triangle: vertex degrees 2, 2, 2",
            options: ["0 odd, 3 even", "3 odd, 0 even", "1 odd, 2 even"],
          },
          {
            prompt: "A square with one diagonal: vertex degrees 3, 3, 2, 2",
            options: ["2 odd, 2 even", "4 odd, 0 even", "0 odd, 4 even"],
          },
          {
            prompt: "K₄ (complete graph on 4 vertices): vertex degrees 3, 3, 3, 3",
            options: ["4 odd, 0 even", "0 odd, 4 even", "2 odd, 2 even"],
          },
          {
            prompt: "A path graph P₅ (5 vertices in a line): vertex degrees 1, 2, 2, 2, 1",
            options: ["2 odd, 3 even", "0 odd, 5 even", "5 odd, 0 even"],
          },
        ],
      },

      // M4 — sequence: Dijkstra's shortest-path algorithm
      {
        type: "sequence",
        title: "Shortest Path Algorithm",
        instruction:
          "Put the steps of Dijkstra's shortest-path algorithm in the correct order.",
        items: [
          { label: "Set the distance to the start vertex as 0, and all others as infinity" },
          { label: "Mark the start vertex as 'current'" },
          { label: "For the current vertex, calculate the tentative distance to each unvisited neighbour" },
          { label: "If a tentative distance is less than the previously recorded distance, update it" },
          { label: "Mark the current vertex as 'visited' (it will not be checked again)" },
          { label: "Select the unvisited vertex with the smallest tentative distance as the new current vertex" },
          { label: "Repeat steps 3–6 until the destination vertex is marked as visited" },
          { label: "Read off the shortest distance and trace back the path" },
        ],
      },

      // M5 — sequence: algorithm for finding Euler path
      {
        type: "sequence",
        title: "Finding an Euler Path",
        instruction:
          "Put the steps in order to find an Euler path in a connected graph with exactly 2 odd-degree vertices.",
        items: [
          { label: "Check that the graph is connected" },
          { label: "Find all vertex degrees and confirm exactly 0 or 2 are odd" },
          { label: "If 2 odd-degree vertices exist, start at one of them" },
          { label: "Travel along edges, choosing a bridge only when no other option exists" },
          { label: "Cross off each edge as you use it" },
          { label: "Continue until all edges have been traversed" },
          { label: "You should finish at the other odd-degree vertex (for a path) or back at the start (for a circuit)" },
        ],
      },

      // M6 — matching: graph property → Euler path/circuit/neither
      {
        type: "matching",
        title: "Euler Classification",
        instruction:
          "Match each set of vertex degrees to whether the connected graph has an Euler circuit, Euler path (not circuit), or neither.",
        left: [
          "Degrees: 2, 2, 2, 2",
          "Degrees: 3, 3, 2, 2",
          "Degrees: 3, 3, 3, 3",
          "Degrees: 4, 4, 2, 2, 2",
          "Degrees: 1, 1, 2",
        ],
        right: [
          "Euler path (not circuit) — exactly 2 odd-degree vertices",
          "Euler circuit — all vertices have even degree",
          "Neither — 4 odd-degree vertices",
          "Euler circuit — all vertices have even degree",
          "Euler path (not circuit) — exactly 2 odd-degree vertices",
        ],
      },

      // M7 — circle-correct: Hamiltonian path questions
      {
        type: "circle-correct",
        title: "Hamiltonian Paths",
        instruction:
          "A Hamiltonian path visits every vertex exactly once. Circle the correct answer for each question.",
        questions: [
          {
            prompt: "Does a complete graph K₅ (5 vertices, every pair connected) have a Hamiltonian path?",
            options: ["Yes — you can visit all 5 vertices in sequence", "No — some vertices must be revisited"],
          },
          {
            prompt: "A path graph P₄ (4 vertices in a line: A–B–C–D). Does a Hamiltonian path exist?",
            options: ["Yes — A → B → C → D visits every vertex exactly once", "No — impossible"],
          },
          {
            prompt: "True or false: Every graph with a Hamiltonian circuit also has a Hamiltonian path.",
            options: ["True — removing the last edge of the circuit gives a Hamiltonian path", "False — they are unrelated"],
          },
          {
            prompt: "True or false: Every graph with an Euler circuit also has a Hamiltonian circuit.",
            options: ["False — Euler and Hamiltonian conditions are independent", "True — Euler implies Hamiltonian"],
          },
        ],
      },

      // M8 — circle-correct: minimum spanning tree concepts
      {
        type: "circle-correct",
        title: "Minimum Spanning Trees",
        instruction:
          "A minimum spanning tree (MST) connects all vertices with the smallest total edge weight and no circuits. Circle the correct answer.",
        questions: [
          {
            prompt: "A connected graph has 6 vertices. How many edges does its spanning tree have?",
            options: ["5", "6", "4"],
          },
          {
            prompt: "In Prim's algorithm, at each step you add:",
            options: ["The cheapest edge connecting a vertex in the tree to a vertex not yet in the tree", "The globally cheapest edge remaining", "Any edge to an unvisited vertex"],
          },
          {
            prompt: "In Kruskal's algorithm, at each step you add:",
            options: ["The cheapest remaining edge that does not form a circuit", "The cheapest edge from the current vertex", "Any edge to an unvisited vertex"],
          },
          {
            prompt: "A graph has 8 vertices. Can its MST contain a circuit?",
            options: ["No — a spanning tree never contains a circuit", "Yes — if it reduces total weight", "Only if the graph is planar"],
          },
        ],
      },

      // M9 — matching: vertex degrees → Euler possibility
      {
        type: "matching",
        title: "Vertex Degrees & Euler Paths",
        instruction:
          "Match each scenario to the correct conclusion. Remember: 0 odd-degree vertices → Euler circuit; 2 odd-degree vertices → Euler path; any other count → neither. The graph must also be connected.",
        left: [
          "0 odd-degree vertices, graph is connected",
          "2 odd-degree vertices, graph is connected",
          "4 odd-degree vertices, graph is connected",
          "0 odd-degree vertices, graph is disconnected",
          "2 odd-degree vertices, graph is disconnected",
        ],
        right: [
          "Neither Euler path nor circuit (disconnected)",
          "Euler circuit exists",
          "Euler path exists (but not a circuit)",
          "Neither Euler path nor circuit (too many odd-degree vertices)",
          "Neither Euler path nor circuit (disconnected)",
        ],
      },

      // M10 — sorting: weighted edges — shortest vs longest path
      {
        type: "sorting",
        title: "Shortest vs Longest Path",
        instruction:
          "A network has vertices A, B, C, D, E with weighted edges: A–B = 3, A–C = 7, B–C = 2, B–D = 5, C–D = 1, C–E = 4, D–E = 6. Sort each route from A to E into Short (total ≤ 10) or Long (total > 10).",
        columns: ["Short (≤ 10)", "Long (> 10)"],
        items: [
          { label: "A → B → C → E (3 + 2 + 4 = 9)" },
          { label: "A → B → C → D → E (3 + 2 + 1 + 6 = 12)" },
          { label: "A → C → E (7 + 4 = 11)" },
          { label: "A → B → D → E (3 + 5 + 6 = 14)" },
          { label: "A → C → D → E (7 + 1 + 6 = 14)" },
          { label: "A → B → C, then back? No — only count simple paths above" },
        ],
      },

      // ─── HARD ───────────────────────────────────────────────────

      // H1 — open-response: draw network and find shortest path
      {
        type: "open-response",
        title: "Shortest Route Problem",
        instruction:
          "Draw the network and find the shortest route.",
        prompts: [
          {
            text: "Six towns A–F are connected by roads with these distances (km): A–B = 4, A–C = 2, B–C = 1, B–D = 5, C–D = 8, C–E = 10, D–E = 2, D–F = 6, E–F = 3. (a) Draw the weighted network. (b) Find the shortest route from A to F. Show your working by listing all reasonable paths and their total distances. (Hint: consider A → C → B → D → E → F = 2 + 1 + 5 + 2 + 3 = 13 km — can you find a shorter one?)",
            type: "box",
          },
        ],
      },

      // H2 — open-response: delivery driver Euler path problem
      {
        type: "open-response",
        title: "Delivery Driver – Euler Path",
        instruction:
          "Solve this Euler path problem. Show all working.",
        prompts: [
          {
            text: "A postal worker must walk along every street in a small neighbourhood exactly once. The streets form a network with vertices A, B, C, D, E and edges: A–B, A–C, A–D, B–C, B–D, C–D, D–E. (a) Write down the degree of each vertex. (b) How many vertices have odd degree? (c) Explain whether an Euler path or Euler circuit exists. (d) If an Euler path exists, find one and write out the route.",
            type: "lines",
            lines: 12,
          },
        ],
      },

      // H3 — open-response: Königsberg bridge problem
      {
        type: "open-response",
        title: "The Königsberg Bridge Problem",
        instruction:
          "Investigate the famous problem that started graph theory.",
        prompts: [
          {
            text: "The city of Königsberg had 4 land masses (A, B, C, D) connected by 7 bridges: A–B (2 bridges), A–C (2 bridges), A–D (1 bridge), B–D (1 bridge), C–D (1 bridge). (a) Draw a network with vertices for land masses and edges for bridges. (b) Write down the degree of each vertex. (c) How many odd-degree vertices are there? (d) Explain why it is impossible to walk across each bridge exactly once. (e) What is the minimum number of bridges you would need to add or remove to make an Euler circuit possible?",
            type: "lines",
            lines: 14,
          },
        ],
      },

      // H4 — open-response: design a road network (MST)
      {
        type: "open-response",
        title: "Design a Road Network",
        instruction:
          "Design and analyse a road network using minimum spanning trees.",
        prompts: [
          {
            text: "A developer is planning roads between 6 new housing estates (V₁ to V₆). The possible roads and costs (in $000s) are: V₁–V₂ = 120, V₁–V₃ = 200, V₂–V₃ = 80, V₂–V₄ = 150, V₃–V₄ = 90, V₃–V₅ = 110, V₄–V₅ = 70, V₄–V₆ = 130, V₅–V₆ = 100. (a) Draw the weighted network. (b) Use Kruskal's algorithm to find the minimum spanning tree: list edges in ascending weight order and select each if it doesn't form a circuit. Show each step. (c) What is the total cost of the minimum spanning tree? (d) How many edges does the MST have? Explain why this equals n − 1 = 5.",
            type: "lines",
            lines: 14,
          },
        ],
      },

      // H5 — open-response: social network analysis
      {
        type: "open-response",
        title: "Social Network Analysis",
        instruction:
          "Model and analyse a social network.",
        prompts: [
          {
            text: "In a class of 7 students (A–G), the following friendships exist: A–B, A–C, A–D, B–C, B–E, C–D, C–F, D–G, E–F, F–G. (a) Draw the friendship network. (b) Find the degree of each vertex. Which student has the most connections? (c) Is the network connected? Justify your answer. (d) Can you find a Hamiltonian path (visiting every student exactly once)? Write one out. (e) The sum of all vertex degrees should equal twice the number of edges. Verify this for the network.",
            type: "lines",
            lines: 12,
          },
        ],
      },

      // H6 — circle-correct: true/false about network properties
      {
        type: "circle-correct",
        title: "True or False: Network Properties",
        instruction:
          "Circle True or False for each statement about networks.",
        questions: [
          {
            prompt: "The sum of all vertex degrees in any graph equals twice the number of edges.",
            options: ["True", "False"],
          },
          {
            prompt: "A connected graph with n vertices and n − 1 edges must be a tree.",
            options: ["True", "False"],
          },
          {
            prompt: "Every Euler circuit is also an Euler path.",
            options: ["True — a circuit is a special case of a path that returns to the start", "False"],
          },
          {
            prompt: "A graph can have exactly 1 vertex of odd degree.",
            options: ["False — the number of odd-degree vertices is always even (Handshaking Lemma)", "True"],
          },
          {
            prompt: "A tree with 10 vertices has exactly 9 edges.",
            options: ["True", "False"],
          },
          {
            prompt: "If a connected graph has all vertices of even degree, it must have an Euler circuit.",
            options: ["True", "False"],
          },
        ],
      },

      // H7 — open-response: minimum spanning tree problem
      {
        type: "open-response",
        title: "Minimum Spanning Tree – Cable Network",
        instruction:
          "Find the minimum spanning tree for a cable network.",
        prompts: [
          {
            text: "An internet provider needs to connect 5 buildings (A–E) using the least cable. Available connections and cable lengths (m): A–B = 50, A–C = 80, A–D = 120, B–C = 40, B–D = 70, B–E = 90, C–D = 60, C–E = 55, D–E = 45. (a) Draw the weighted graph. (b) Apply Kruskal's algorithm: list edges in weight order (B–C 40, D–E 45, A–B 50, C–E 55, C–D 60, B–D 70, A–C 80, B–E 90, A–D 120), and select each if it doesn't create a circuit. Show each step. (c) Draw the MST and state its total cable length. (d) How many edges were selected? Explain why this equals n − 1 = 4.",
            type: "lines",
            lines: 14,
          },
        ],
      },

      // H8 — open-response: critical path analysis
      {
        type: "open-response",
        title: "Critical Path Analysis",
        instruction:
          "Apply network analysis to a simple project.",
        prompts: [
          {
            text: "A student project has these tasks and durations: A (2 days, no prerequisites), B (3 days, no prerequisites), C (4 days, requires A), D (2 days, requires A and B), E (3 days, requires C), F (1 day, requires D and E). (a) Draw an activity network (directed graph) showing task dependencies. (b) Find the earliest start time for each task. (c) What is the minimum total project duration? (d) Identify the critical path — the longest path through the network. Verify by checking all paths: A → C → E → F = 2 + 4 + 3 + 1 = 10 days; A → D → F = 2 + 2 + 1 = 5 days; B → D → F = 3 + 2 + 1 = 6 days. The critical path is A → C → E → F = 10 days.",
            type: "lines",
            lines: 14,
          },
        ],
      },

      // ─── HOME ───────────────────────────────────────────────────

      // HOME 1 — home room network
      {
        type: "home-activity",
        title: "Home Room Network",
        instruction: "Create and analyse a network of your home.",
        suggestions: [
          "Draw a floor plan of your home. Represent each room (including hallways and outdoors) as a vertex, and each doorway or opening as an edge.",
          "Write down the degree of each vertex. Which room has the most connections?",
          "Is your home network connected? (Can you reach every room from every other room?)",
          "Determine whether an Euler path exists — can you walk through every doorway exactly once? Check by counting odd-degree vertices.",
          "If an Euler path is possible, find one and record the route. If not, explain which doorways you would need to add or remove.",
        ],
      },

      // HOME 2 — transport network analysis
      {
        type: "home-activity",
        title: "Transport Network Investigation",
        instruction: "Analyse a real transport network in your area.",
        suggestions: [
          "Find a local bus, train, or cycling route map. Identify 8–12 stops or stations as vertices and the routes connecting them as edges.",
          "Draw the transport network. Label each edge with the approximate travel time (in minutes) between stops.",
          "Calculate the degree of each vertex. Which station is the busiest hub?",
          "Using your weighted network, find the shortest travel-time route between two stations that are not directly connected.",
          "Does an Euler path or circuit exist in your transport network? Explain your reasoning using vertex degrees.",
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
      // --- EASY: Correlation basics & variable identification ---
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
        type: "circle-correct",
        title: "Positive or Negative Correlation",
        instruction:
          "Circle the correct correlation direction for each scenario.",
        questions: [
          {
            prompt: "As temperature increases, ice cream sales increase. This is:",
            options: ["Positive correlation", "Negative correlation", "No correlation"],
          },
          {
            prompt: "As the age of a car increases, its resale value decreases. This is:",
            options: ["Negative correlation", "Positive correlation", "No correlation"],
          },
          {
            prompt: "As altitude increases, air temperature generally decreases. This is:",
            options: ["Negative correlation", "Positive correlation", "No correlation"],
          },
          {
            prompt: "As hours of study increase, exam marks tend to increase. This is:",
            options: ["Positive correlation", "Negative correlation", "No correlation"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Strong or Weak Correlation",
        instruction:
          "Circle whether each description suggests a strong or weak correlation.",
        questions: [
          {
            prompt: "Data points cluster very tightly around an upward-sloping line:",
            options: ["Strong correlation", "Weak correlation", "No correlation"],
          },
          {
            prompt: "Data points are widely scattered but show a slight downward trend:",
            options: ["Weak correlation", "Strong correlation", "No correlation"],
          },
          {
            prompt: "Almost every increase in x leads to a predictable decrease in y:",
            options: ["Strong correlation", "Weak correlation", "No correlation"],
          },
          {
            prompt: "Points form a rough cloud with only a vague upward drift:",
            options: ["Weak correlation", "Strong correlation", "No correlation"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Classify the Correlation Strength",
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
          { label: "Rainfall vs umbrella sales" },
        ],
      },
      {
        type: "matching",
        title: "Variable Pairs & Expected Correlation",
        instruction:
          "Draw a line from each variable pair to the expected correlation direction.",
        left: [
          "Hours of exercise per week & fitness level",
          "Number of cigarettes smoked & lung capacity",
          "Shoe size & IQ",
          "Advertising spend & product sales",
          "Distance from equator & average temperature",
        ],
        right: [
          "No correlation expected",
          "Positive — more exercise, higher fitness",
          "Negative — more cigarettes, lower lung capacity",
          "Positive — more advertising, more sales",
          "Negative — further from equator, lower temperature",
        ],
      },
      {
        type: "circle-correct",
        title: "Independent vs Dependent Variable",
        instruction:
          "Circle the correct identification of the independent variable (the one we control or expect to influence the other).",
        questions: [
          {
            prompt: "Investigating how study time affects exam results. The independent variable is:",
            options: ["Study time (hours)", "Exam result (%)", "Student name"],
          },
          {
            prompt: "Testing whether temperature affects plant growth. The independent variable is:",
            options: ["Temperature (°C)", "Plant height (cm)", "Type of soil"],
          },
          {
            prompt: "Exploring the link between age and reaction time. The independent variable is:",
            options: ["Age (years)", "Reaction time (ms)", "Number of trials"],
          },
          {
            prompt: "Does distance from school affect travel time? The independent variable is:",
            options: ["Distance from school (km)", "Travel time (minutes)", "Mode of transport"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading Scatter Plot Axes",
        instruction:
          "Circle the correct answer about what each axis represents on a scatter plot.",
        questions: [
          {
            prompt: "The horizontal axis (x-axis) of a scatter plot typically shows:",
            options: ["The independent variable", "The dependent variable", "The frequency"],
          },
          {
            prompt: "The vertical axis (y-axis) of a scatter plot typically shows:",
            options: ["The dependent variable", "The independent variable", "The sample size"],
          },
          {
            prompt: "On a scatter plot of 'Hours of sunlight vs Plant growth', the x-axis should show:",
            options: ["Hours of sunlight", "Plant growth (cm)", "Number of plants"],
          },
          {
            prompt: "Each point on a scatter plot represents:",
            options: ["One data pair (one observation of both variables)", "The average of all data", "A single variable measurement"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Categorical vs Numerical Bivariate Data",
        instruction:
          "Sort each variable pair into the correct column: both variables are numerical (suitable for a scatter plot) or at least one is categorical (not suitable for a scatter plot).",
        columns: ["Both Numerical (scatter plot)", "Includes Categorical (not scatter plot)"],
        items: [
          { label: "Height (cm) vs Weight (kg)" },
          { label: "Favourite sport vs Gender" },
          { label: "Temperature (°C) vs Rainfall (mm)" },
          { label: "Eye colour vs Hair colour" },
          { label: "Age (years) vs Reaction time (ms)" },
          { label: "Brand of phone vs Satisfaction rating (1–5)" },
          { label: "Hours of screen time vs Hours of sleep" },
          { label: "State of residence vs Annual income ($)" },
        ],
      },

      // --- MEDIUM: Line of best fit, predictions & interpretation ---
      {
        type: "circle-correct",
        title: "Line of Best Fit Properties",
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
            prompt: "A line of best fit is most useful when:",
            options: [
              "There is a clear linear trend in the data",
              "The data points form a curved pattern",
              "There is no correlation between the variables",
            ],
          },
          {
            prompt: "If the data has no correlation, a line of best fit:",
            options: [
              "Is not meaningful and should not be drawn",
              "Should still be drawn through the middle",
              "Will always be perfectly horizontal",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Interpolation vs Extrapolation",
        instruction:
          "Circle the correct answer about using a line of best fit for predictions.",
        questions: [
          {
            prompt: "Using a line of best fit to predict a value within the range of the collected data is called:",
            options: ["Interpolation", "Extrapolation", "Correlation"],
          },
          {
            prompt: "Using a line of best fit to predict a value beyond the range of the collected data is called:",
            options: ["Extrapolation", "Interpolation", "Regression"],
          },
          {
            prompt: "Which type of prediction is generally more reliable?",
            options: [
              "Interpolation, because the trend is supported by nearby data",
              "Extrapolation, because it extends the known pattern",
              "Both are equally reliable",
            ],
          },
          {
            prompt: "Data was collected for students who studied between 1 and 6 hours. Predicting the mark of a student who studied 12 hours is:",
            options: [
              "Extrapolation and may be unreliable",
              "Interpolation and is reliable",
              "Not possible with a line of best fit",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Correlation vs Causation",
        instruction:
          "Circle the correct answer about the difference between correlation and causation.",
        questions: [
          {
            prompt: "Correlation means:",
            options: [
              "Two variables tend to change together in a predictable pattern",
              "One variable directly causes the other to change",
              "The variables are always related by a formula",
            ],
          },
          {
            prompt: "Causation means:",
            options: [
              "A change in one variable directly produces a change in the other",
              "Two variables happen to change at the same time",
              "The correlation coefficient is close to 1",
            ],
          },
          {
            prompt: "Ice cream sales and drowning rates both increase in summer. This is an example of:",
            options: [
              "Correlation without causation — a third variable (hot weather) drives both",
              "Causation — ice cream causes drowning",
              "No correlation at all",
            ],
          },
          {
            prompt: "A randomised controlled experiment can help establish:",
            options: ["Causation", "Only correlation", "Neither correlation nor causation"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Identifying Outliers",
        instruction:
          "Circle the correct answer about outliers in scatter plots.",
        questions: [
          {
            prompt: "An outlier on a scatter plot is:",
            options: [
              "A data point that lies far from the overall pattern of the other points",
              "The point closest to the line of best fit",
              "Any point on the x-axis",
            ],
          },
          {
            prompt: "What effect can an outlier have on a line of best fit?",
            options: [
              "It can pull the line toward itself, making the fit less accurate for the rest of the data",
              "It has no effect on the line of best fit",
              "It always improves the accuracy of the line",
            ],
          },
          {
            prompt: "Before removing an outlier, you should:",
            options: [
              "Investigate whether it is a data entry error or a genuine unusual observation",
              "Always remove it because outliers are mistakes",
              "Ignore it completely",
            ],
          },
          {
            prompt: "A student recorded the heights and weights of 20 classmates. One point is far from all others. The best first step is:",
            options: [
              "Check whether the data was recorded correctly for that student",
              "Delete the point immediately",
              "Draw the line of best fit through it",
            ],
          },
        ],
      },
      {
        type: "sequence",
        title: "Steps in a Bivariate Investigation",
        instruction:
          "Put the steps for conducting a bivariate data investigation in the correct order.",
        items: [
          { label: "Formulate a question about the relationship between two numerical variables" },
          { label: "Plan data collection: decide on sample size, method, and how to record both variables" },
          { label: "Collect the data systematically, recording paired values" },
          { label: "Organise the data in a table of ordered pairs" },
          { label: "Construct a scatter plot with the independent variable on the x-axis" },
          { label: "Describe the association: direction, form, and strength" },
          { label: "Draw a line of best fit if the trend is approximately linear" },
          { label: "Use the line to make predictions (interpolation) and draw conclusions" },
        ],
      },
      {
        type: "matching",
        title: "Scatter Plot Pattern Match",
        instruction:
          "Draw a line from each scatter plot description to its correlation type.",
        left: [
          "Points rise steeply from left to right in a tight band",
          "Points fall gradually from left to right with wide scatter",
          "Points form a random cloud with no trend",
          "Points fall steeply from left to right in a tight band",
          "Points rise gradually from left to right with wide scatter",
        ],
        right: [
          "Strong positive correlation",
          "Weak negative correlation",
          "No correlation",
          "Strong negative correlation",
          "Weak positive correlation",
        ],
      },
      {
        type: "circle-correct",
        title: "Predict Using a Line of Best Fit",
        instruction:
          "Use the described line of best fit to circle the best prediction.",
        questions: [
          {
            prompt: "A line of best fit for 'Hours studied (x) vs Exam mark (y)' passes through (2, 50) and (6, 80). Predict the mark for 4 hours of study:",
            options: ["65", "55", "75"],
          },
          {
            prompt: "Using the same line, predict the mark for 5 hours of study:",
            options: ["72.5", "60", "80"],
          },
          {
            prompt: "The line of best fit for 'Temperature (x) vs Hot drinks sold (y)' passes through (10°C, 60) and (30°C, 20). Predict sales at 20°C:",
            options: ["40", "50", "30"],
          },
          {
            prompt: "Using the same line, would you trust a prediction for sales at 50°C?",
            options: [
              "No — 50°C is far outside the data range (extrapolation)",
              "Yes — the line can be extended indefinitely",
              "Yes — as long as we use the equation",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Interpreting r-values",
        instruction:
          "The correlation coefficient (r) measures the strength and direction of a linear association. Circle the correct interpretation.",
        questions: [
          {
            prompt: "An r-value of +0.95 indicates:",
            options: ["Strong positive linear correlation", "Weak positive correlation", "No correlation"],
          },
          {
            prompt: "An r-value of −0.82 indicates:",
            options: ["Strong negative linear correlation", "Weak negative correlation", "Strong positive correlation"],
          },
          {
            prompt: "An r-value of +0.15 indicates:",
            options: ["Weak positive correlation (close to no linear relationship)", "Strong positive correlation", "Perfect correlation"],
          },
          {
            prompt: "An r-value of 0 indicates:",
            options: [
              "No linear correlation (but a non-linear relationship may still exist)",
              "A perfect negative correlation",
              "The data has no variability",
            ],
          },
          {
            prompt: "An r-value of −1 indicates:",
            options: [
              "A perfect negative linear correlation — all points lie exactly on a downward line",
              "No correlation",
              "A weak negative correlation",
            ],
          },
        ],
      },
      {
        type: "sorting",
        title: "Valid vs Invalid Conclusions",
        instruction:
          "Sort each conclusion into the correct column: Valid or Invalid based on scatter plot data.",
        columns: ["Valid Conclusion", "Invalid Conclusion"],
        items: [
          { label: "There is a positive association between hours studied and exam marks" },
          { label: "Studying more hours causes higher exam marks" },
          { label: "As temperature increases, hot drink sales tend to decrease" },
          { label: "Hot weather causes people to stop drinking hot drinks entirely" },
          { label: "There appears to be no linear relationship between shoe size and IQ" },
          { label: "Countries that eat more chocolate win more Nobel Prizes, so chocolate makes people smarter" },
          { label: "The data suggests a strong negative correlation between car age and resale value" },
          { label: "Since ice cream sales and sunburn rates are correlated, eating ice cream causes sunburn" },
        ],
      },
      {
        type: "circle-correct",
        title: "Confounding (Third) Variables",
        instruction:
          "Circle the most likely confounding variable that could explain the observed correlation.",
        questions: [
          {
            prompt: "Correlation: cities with more fire stations have more crime. The confounding variable is likely:",
            options: ["City population size", "Number of firefighters", "Colour of fire trucks"],
          },
          {
            prompt: "Correlation: children who eat breakfast score higher on tests. A possible confounding variable is:",
            options: [
              "Overall family socioeconomic status and home support",
              "The brand of cereal eaten",
              "The colour of the breakfast bowl",
            ],
          },
          {
            prompt: "Correlation: people who sleep more tend to weigh less. A confounding variable could be:",
            options: [
              "Overall health habits (exercise, diet, stress levels)",
              "Pillow type",
              "Bedroom wall colour",
            ],
          },
          {
            prompt: "Correlation: countries with higher chocolate consumption per capita have more Nobel Prize winners. The confounding variable is likely:",
            options: [
              "National wealth and investment in education and research",
              "Type of chocolate preferred",
              "Average temperature of the country",
            ],
          },
        ],
      },

      // --- HARD: Extended response & critical analysis ---
      {
        type: "open-response",
        title: "Design a Bivariate Investigation",
        instruction:
          "Design a detailed bivariate data investigation.",
        prompts: [
          {
            text: "Design a statistical investigation to test whether there is a relationship between the number of hours people exercise per week and their resting heart rate. In your response, describe: (a) the variables and which is independent/dependent, (b) how you would collect data (sample size, method, potential bias), (c) what you would expect the scatter plot to look like and what correlation you predict, (d) how you would draw and use a line of best fit, and (e) whether finding a correlation would prove that exercise causes a lower resting heart rate. Explain your reasoning.",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse a Dataset",
        instruction:
          "Analyse the following bivariate dataset and describe the association.",
        prompts: [
          {
            text: "A teacher recorded the number of hours each student spent on their phone per day and their average test score:\n\nPhone hours: 1, 2, 2, 3, 3, 4, 4, 5, 6, 7\nTest score:   88, 82, 85, 75, 78, 70, 65, 60, 55, 50\n\n(a) What type of correlation does this data suggest? (b) Estimate the strength of the correlation (strong, moderate, or weak). (c) If you drew a line of best fit, would its gradient be positive or negative? (d) Predict the test score for a student who uses their phone for 3.5 hours per day. (e) Would it be appropriate to predict the score for a student who uses their phone for 15 hours per day? Why or why not?",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Correlation vs Causation Explained",
        instruction:
          "Explain the difference between correlation and causation using examples.",
        prompts: [
          {
            text: "Using your own examples, explain the difference between correlation and causation. Include: (a) one example where two variables are correlated AND one causes the other, (b) one example where two variables are correlated but neither causes the other (identify the confounding variable), and (c) an explanation of why scientists use controlled experiments rather than observational studies to establish causation.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Critique a Study's Conclusions",
        instruction:
          "Read the study summary and critique its conclusions.",
        prompts: [
          {
            text: "A newspaper reports: 'A study of 500 adults found that people who drink more coffee tend to live longer. Researchers concluded that coffee extends your lifespan.' Critique this conclusion by addressing: (a) Does correlation prove causation here? (b) What confounding variables might explain this relationship? (c) What type of study would be needed to establish whether coffee actually extends lifespan? (d) How might the sample or data collection method affect the reliability of the findings?",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Scatter Plots",
        instruction:
          "Compare two bivariate datasets and their scatter plots.",
        prompts: [
          {
            text: "Two investigations were conducted at a school:\n\nInvestigation A — Hours of sleep vs Reaction time (ms):\nSleep: 5, 6, 6, 7, 7, 8, 8, 9, 9, 10\nReaction: 420, 380, 400, 340, 350, 300, 310, 270, 280, 250\n\nInvestigation B — Hours of TV vs Reaction time (ms):\nTV: 1, 2, 2, 3, 3, 4, 5, 5, 6, 7\nReaction: 310, 280, 350, 300, 370, 320, 290, 340, 360, 300\n\n(a) Describe the correlation you would expect in each investigation. (b) Which investigation would likely show a stronger correlation? Explain why. (c) For the investigation with the stronger correlation, describe what the line of best fit would look like. (d) Can either investigation prove causation? Why or why not?",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Statistics Concepts",
        instruction:
          "Circle TRUE or FALSE for each statement about bivariate data and scatter plots.",
        questions: [
          {
            prompt: "A correlation coefficient (r) can have a value of 1.5.",
            options: ["FALSE — r always lies between −1 and +1", "TRUE"],
          },
          {
            prompt: "A scatter plot can only show positive correlations.",
            options: ["FALSE — scatter plots can show positive, negative, or no correlation", "TRUE"],
          },
          {
            prompt: "If r = 0, there is definitely no relationship between the variables.",
            options: ["FALSE — r = 0 means no linear relationship, but a non-linear relationship may exist", "TRUE"],
          },
          {
            prompt: "Interpolation is more reliable than extrapolation.",
            options: ["TRUE — interpolation predicts within the data range where the trend is supported", "FALSE"],
          },
          {
            prompt: "An outlier should always be removed from a dataset.",
            options: ["FALSE — outliers should be investigated before deciding whether to keep or remove them", "TRUE"],
          },
          {
            prompt: "The independent variable is placed on the x-axis of a scatter plot.",
            options: ["TRUE", "FALSE"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Collect Data and Predict",
        instruction:
          "Plan a real data collection and make predictions.",
        prompts: [
          {
            text: "You want to investigate whether there is a relationship between the distance students live from school and the time it takes them to travel to school. (a) Which variable is independent and which is dependent? (b) Describe how you would collect data from at least 15 students. (c) What type of correlation do you predict? Explain your reasoning. (d) Sketch what you think the scatter plot might look like (describe it in words). (e) Identify one potential source of bias in your data collection and how you would minimise it.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Identify Confounding Variables",
        instruction:
          "Identify and explain confounding variables in real-world correlations.",
        prompts: [
          {
            text: "For each of the following correlations, identify at least one confounding variable and explain how it could account for the observed relationship:\n\n(a) Students who eat breakfast tend to get better grades.\n(b) Countries with more televisions per household have longer life expectancies.\n(c) People who own more books tend to earn higher salaries.\n(d) Suburbs with more parks have lower rates of obesity.\n\nFor one of these examples, describe how you could design a study to test whether the relationship is causal rather than just a correlation.",
            type: "lines",
            lines: 12,
          },
        ],
      },

      // --- HOME: Real-world data collection ---
      {
        type: "home-activity",
        title: "Collect Bivariate Data at Home",
        instruction: "Collect your own bivariate data and create a scatter plot.",
        suggestions: [
          "Record the temperature and the number of people at a local park over several days. Create a scatter plot — is there a correlation?",
          "Survey family members: compare their height with their arm span. Plot the data and describe the association.",
          "Track your screen time and hours of sleep for a week. Create a scatter plot and describe any pattern you observe.",
          "Measure the length and width of 10 different leaves from the same type of tree. Plot the data and describe the association.",
        ],
      },
      {
        type: "home-activity",
        title: "Find Correlations in Daily Life",
        instruction: "Look for examples of correlation (and possible causation) in your everyday life and in the media.",
        suggestions: [
          "Find a news article that claims one thing causes another. Identify whether the evidence shows correlation or causation. What confounding variables might be involved?",
          "Over a week, record two variables you think might be related (e.g., time spent outdoors vs mood rating 1–10). Create a scatter plot and describe what you find.",
          "Look at the nutrition labels on 10 food items. Plot sugar content vs calorie count. Is there a correlation? Is it what you expected?",
          "Ask five people to estimate how far they live from the nearest shop (in km) and how often they visit per week. Plot the data and describe any pattern.",
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
      // ─── EASY ─────────────────────────────────────────────────────
      {
        type: "sorting",
        title: "Misleading vs Fair Graph Techniques",
        instruction:
          "Sort each data presentation technique into the correct column: Misleading or Fair.",
        columns: ["Misleading", "Fair"],
        items: [
          { label: "Bar chart with a y-axis starting at 0" },
          { label: "Bar chart with a y-axis starting at 95" },
          { label: "Pie chart where slices add to 100%" },
          { label: "3D pie chart that distorts slice sizes" },
          { label: "Graph with evenly spaced time intervals" },
          { label: "Graph with uneven time intervals on the x-axis" },
          { label: "Survey results noting the sample size was 1 000" },
          { label: "Survey headline with no sample size mentioned" },
          { label: "Cherry-picked data points to support a claim" },
          { label: "Using a pictograph where each icon represents a different amount" },
        ],
      },
      {
        type: "matching",
        title: "Misleading Technique → Why It's Problematic",
        instruction:
          "Draw a line from each misleading technique to the reason it distorts data.",
        left: [
          "Truncated y-axis",
          "3D pie chart",
          "Cherry-picked time frame",
          "Unlabelled axes",
          "Dual y-axes with different scales",
        ],
        right: [
          "Makes small differences look dramatic",
          "Distorts the relative size of slices due to perspective",
          "Hides the overall trend by showing only favourable data",
          "The reader cannot tell what the graph actually measures",
          "Makes two unrelated variables appear to move together",
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Problem — Graphs",
        instruction:
          "Circle the main problem with each graph description.",
        questions: [
          {
            prompt: "A bar chart comparing company profits starts its y-axis at $9.5 million instead of $0.",
            options: [
              "The truncated axis exaggerates the differences between bars",
              "Bar charts should never show money",
              "There is no problem — this is standard practice",
            ],
          },
          {
            prompt: "A pie chart has five slices that add up to 120%.",
            options: [
              "Pie chart percentages must total 100%; these slices overlap or are incorrect",
              "Pie charts always add to more than 100%",
              "The chart just needs a bigger circle",
            ],
          },
          {
            prompt: "A line graph of 'yearly rainfall' uses data from only January to March.",
            options: [
              "Three months is not a full year — the graph cherry-picks a seasonal period",
              "Rainfall can only be measured annually",
              "Line graphs should not be used for rainfall data",
            ],
          },
          {
            prompt: "A pictograph uses one icon = 10 units in the first row but one icon = 50 units in the second row.",
            options: [
              "Inconsistent icon scales make the comparison meaningless",
              "Pictographs are always accurate",
              "The second row is just more important",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Sample Size & Representativeness",
        instruction:
          "Circle the BEST critique of each survey's sampling method.",
        questions: [
          {
            prompt: "A toothpaste brand surveys 5 dentists and claims '4 out of 5 dentists recommend our product.'",
            options: [
              "The sample size is far too small to generalise",
              "Dentists always agree with brands",
              "5 is a perfect sample size for dentists",
            ],
          },
          {
            prompt: "A political poll interviews 2 000 people, all from one suburb in Sydney.",
            options: [
              "The sample is not representative of the whole country — it's geographically biased",
              "2 000 people is always a good sample",
              "Sydney is the capital, so it represents everyone",
            ],
          },
          {
            prompt: "An online survey asks visitors to a fitness website whether they exercise daily.",
            options: [
              "The sample is biased — people on a fitness website are more likely to exercise",
              "Online surveys are always reliable",
              "Everyone who visits a fitness website exercises daily",
            ],
          },
          {
            prompt: "A school surveys every student in Years 7–12 about canteen food preferences.",
            options: [
              "This is a reasonable census of the school — the results apply to this school's students",
              "You can never trust surveys done in schools",
              "Only Year 12 opinions matter",
            ],
          },
        ],
      },
      {
        type: "sorting",
        title: "Biased vs Unbiased Sampling Methods",
        instruction:
          "Sort each sampling method into the correct column: Biased or Unbiased.",
        columns: ["Biased", "Unbiased"],
        items: [
          { label: "Randomly selecting names from the full electoral roll" },
          { label: "Surveying only people who volunteer to respond" },
          { label: "Selecting every 10th person from a complete class list" },
          { label: "Asking only your friends for their opinions" },
          { label: "Stratified random sample across age groups and regions" },
          { label: "Surveying shoppers at one luxury store" },
          { label: "Phone poll using randomly generated landline numbers only" },
          { label: "Posting a poll on a partisan political Facebook page" },
        ],
      },
      {
        type: "circle-correct",
        title: "Mean, Median, or Mode — Which Is Best?",
        instruction:
          "Circle the BEST measure of centre for each data set.",
        questions: [
          {
            prompt: "House prices in a suburb: $450k, $470k, $480k, $490k, $3.2 million",
            options: [
              "Median — the extreme outlier ($3.2 m) would inflate the mean",
              "Mean — it uses every value",
              "Mode — it is the most common measure",
            ],
          },
          {
            prompt: "Shoe sizes sold in a shop last week: 8, 9, 9, 9, 10, 10, 11",
            options: [
              "Mode — the shop needs to know the most popular size to restock",
              "Mean — the average shoe size is most useful",
              "Median — it splits the data in half",
            ],
          },
          {
            prompt: "Test scores evenly spread from 55 to 95 with no outliers",
            options: [
              "Mean — the data is symmetric with no outliers, so mean and median are similar and the mean uses all values",
              "Mode — the most common score matters most",
              "None — you cannot summarise test scores",
            ],
          },
          {
            prompt: "Annual salaries at a startup: $60k, $62k, $65k, $65k, $900k (CEO)",
            options: [
              "Median — the CEO's salary is an extreme outlier that skews the mean",
              "Mean — it accounts for the CEO",
              "Mode — $65k appears twice",
            ],
          },
        ],
      },
      {
        type: "matching",
        title: "Measure of Centre → When to Use It",
        instruction:
          "Draw a line from each measure of centre to the scenario where it is most appropriate.",
        left: [
          "Mean",
          "Median",
          "Mode",
          "Mean after removing outliers",
          "Weighted mean",
        ],
        right: [
          "Symmetric data with no extreme outliers",
          "Data with outliers or a skewed distribution",
          "Finding the most frequently occurring category",
          "Data set with one or two obvious anomalies you can justify excluding",
          "Combining averages from groups of different sizes (e.g. exam components worth different percentages)",
        ],
      },
      {
        type: "circle-correct",
        title: "Who Was Asked? — Identify the Audience",
        instruction:
          "Circle the statement that correctly identifies a problem with who was surveyed.",
        questions: [
          {
            prompt: "A car magazine survey finds that 90% of people think cars are better than public transport.",
            options: [
              "The readers of a car magazine are biased towards cars",
              "90% is too high to be real",
              "Magazines cannot conduct surveys",
            ],
          },
          {
            prompt: "A soft-drink company surveys teenagers at a music festival about their favourite drinks.",
            options: [
              "Festival-goers are not representative of all teenagers, and the setting may bias answers toward soft drinks",
              "Teenagers always prefer soft drinks",
              "The sample is perfectly representative",
            ],
          },
          {
            prompt: "A government health survey randomly selects 5 000 households across all states and territories.",
            options: [
              "This is a well-designed sample — random selection across regions reduces bias",
              "Government surveys are always biased",
              "5 000 households is too small for a country",
            ],
          },
        ],
      },

      // ─── MEDIUM ───────────────────────────────────────────────────
      {
        type: "circle-correct",
        title: "Valid Conclusions from Survey Data",
        instruction:
          "Circle the VALID conclusion that can be drawn from each scenario.",
        questions: [
          {
            prompt: "A survey of 50 students at a private school found that 80% prefer organic food. Headline: 'Most Australians prefer organic food.'",
            options: [
              "Invalid — the sample is not representative of all Australians",
              "Valid — 80% is a large majority",
              "Valid — students are a good sample of the population",
            ],
          },
          {
            prompt: "A nationwide random survey of 10 000 adults finds that 62% support renewable energy. Margin of error: ±2%.",
            options: [
              "Valid — a large random sample with a stated margin of error supports the conclusion that a majority of adults support renewable energy",
              "Invalid — you need to survey everyone",
              "Invalid — margins of error mean the results are unreliable",
            ],
          },
          {
            prompt: "A company surveys its own employees and finds 95% are satisfied. Headline: 'Workers love their jobs.'",
            options: [
              "Invalid — employees may feel pressured to give positive responses, and one company does not represent all workers",
              "Valid — 95% is nearly everyone",
              "Valid — employees know best about their own jobs",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify Confounding Variables",
        instruction:
          "Circle the most likely confounding variable in each scenario.",
        questions: [
          {
            prompt: "A study finds that children who eat breakfast score higher on maths tests.",
            options: [
              "Household income — families who can afford breakfast may also provide more educational support",
              "Breakfast directly improves maths ability",
              "Children who eat breakfast are naturally smarter",
            ],
          },
          {
            prompt: "Towns with more police officers have higher crime rates.",
            options: [
              "Population size — larger towns have both more police and more crime",
              "Police cause crime",
              "Crime data must be wrong",
            ],
          },
          {
            prompt: "People who own more books tend to live longer.",
            options: [
              "Socioeconomic status — wealthier people can afford both books and better healthcare",
              "Reading books extends your lifespan",
              "There is no connection at all",
            ],
          },
          {
            prompt: "Countries that consume more chocolate win more Nobel Prizes.",
            options: [
              "Wealth and education levels — richer countries can afford both chocolate and research funding",
              "Chocolate makes people smarter",
              "Nobel Prize winners eat more chocolate to celebrate",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Correlation vs Causation in Media Claims",
        instruction:
          "Circle the correct interpretation of each media claim.",
        questions: [
          {
            prompt: "A graph shows ice cream sales and drowning rates both increase in summer.",
            options: [
              "Both are caused by a third variable (hot weather) — correlation does not mean causation",
              "Ice cream sales cause drownings",
              "We should ban ice cream to prevent drownings",
            ],
          },
          {
            prompt: "'Countries that spend more on education have higher GDP.'",
            options: [
              "There is a correlation, but wealthier countries can afford to spend more on both — the direction of causation is unclear",
              "Spending on education directly causes GDP growth",
              "GDP has nothing to do with education",
            ],
          },
          {
            prompt: "'People who sleep with their shoes on are more likely to wake up with a headache.'",
            options: [
              "A confounding variable (such as alcohol consumption) likely causes both behaviours",
              "Sleeping with shoes on causes headaches",
              "This proves shoes are bad for your health",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Misleading Percentages",
        instruction:
          "Circle the correct response to each percentage claim.",
        questions: [
          {
            prompt: "An ad claims: 'Our cereal has 50% less sugar!' But it was reduced from 2 g per serve to 1 g per serve.",
            options: [
              "The percentage is technically correct but the absolute reduction is tiny — only 1 gram",
              "50% less is always a big deal",
              "The claim is false because 1 g is still sugar",
            ],
          },
          {
            prompt: "A headline states: 'Disease X cases doubled!' Cases went from 2 to 4 in a city of 1 million.",
            options: [
              "The percentage increase (100%) sounds alarming, but the absolute numbers are extremely small and statistically insignificant",
              "Doubling is always dangerous",
              "The headline is completely accurate and not misleading at all",
            ],
          },
          {
            prompt: "A politician says unemployment dropped from 5.0% to 4.8% and calls it 'a massive improvement.'",
            options: [
              "A 0.2 percentage point drop may be within the margin of error and is a modest change, not 'massive'",
              "Any decrease in unemployment is massive",
              "Unemployment statistics are never accurate",
            ],
          },
          {
            prompt: "A supplement company claims their product 'triples your chance of recovery' — from 1% to 3%.",
            options: [
              "The relative increase is large (200%), but the absolute increase is only 2 percentage points — still a 97% chance of not recovering",
              "Tripling your chance is always significant",
              "The product must be very effective",
            ],
          },
        ],
      },
      {
        type: "sequence",
        title: "Steps to Evaluate a Statistical Claim",
        instruction:
          "Put the steps for critically evaluating a statistical claim into the correct order.",
        items: [
          { label: "Read the claim and identify the specific statistic being used" },
          { label: "Ask: Who collected the data and do they have a vested interest?" },
          { label: "Check the sample — how large is it and is it representative?" },
          { label: "Identify whether correlation or causation is being claimed" },
          { label: "Look for confounding variables that could explain the result" },
          { label: "Check whether absolute or relative numbers are being used (and which is more informative)" },
          { label: "Consider what information is missing (margin of error, time period, comparison group)" },
          { label: "Form your own conclusion based on the evidence, not just the headline" },
        ],
      },
      {
        type: "matching",
        title: "Logical Fallacy → Example",
        instruction:
          "Draw a line from each logical fallacy to its correct example.",
        left: [
          "Cherry-picking",
          "False cause",
          "Hasty generalisation",
          "Appeal to authority",
          "Straw man",
        ],
        right: [
          "Showing only the three months where sales rose and hiding the nine months where they fell",
          "Claiming that a rooster crowing causes the sun to rise because it happens every morning",
          "Concluding all teenagers are reckless drivers after seeing one accident involving a teen",
          "Claiming a statistic is true because a celebrity endorses it, despite no scientific backing",
          "Exaggerating an opponent's argument to make it easier to attack (e.g. 'You want to cut the budget? So you want children to starve?')",
        ],
      },
      {
        type: "circle-correct",
        title: "Headline vs Reality",
        instruction:
          "Circle the response that best describes the gap between the headline and the actual data.",
        questions: [
          {
            prompt: "Headline: 'Teen Screen Time SKYROCKETS!' Data: Average daily screen time for teens rose from 6.8 hours to 7.1 hours over 2 years.",
            options: [
              "The headline is sensationalised — a 0.3-hour increase over 2 years is modest, not a 'skyrocket'",
              "Any increase in screen time is a crisis",
              "The headline is accurate because the number went up",
            ],
          },
          {
            prompt: "Headline: 'MAJORITY of residents oppose the new park.' Survey: 52% opposed, 48% supported, margin of error ±4%.",
            options: [
              "The result is within the margin of error, so there may be no real majority either way",
              "52% is a clear majority",
              "Margins of error can be ignored",
            ],
          },
          {
            prompt: "Headline: 'Miracle Fruit Cuts Cancer Risk by 50%!' Study: Participants who ate the fruit daily for 10 years had a 0.02% cancer rate vs 0.04% in the control group.",
            options: [
              "The relative reduction is 50%, but the absolute risk was already tiny — the benefit is minimal in practice",
              "50% is a huge reduction, so everyone should eat the fruit",
              "The study proves the fruit cures cancer",
            ],
          },
        ],
      },
      {
        type: "sorting",
        title: "Questions to Ask About a Statistic",
        instruction:
          "Sort each item into the correct column: Important Question to Ask or Not Particularly Relevant.",
        columns: ["Important Question to Ask", "Not Particularly Relevant"],
        items: [
          { label: "How large was the sample?" },
          { label: "What colour was the graph?" },
          { label: "Who funded or commissioned the study?" },
          { label: "Was the sample randomly selected?" },
          { label: "What font was used in the report?" },
          { label: "What is the margin of error?" },
          { label: "Were confounding variables controlled for?" },
          { label: "Is the percentage a relative change or an absolute change?" },
          { label: "What was the time period of the study?" },
          { label: "How many pages is the report?" },
        ],
      },
      {
        type: "circle-correct",
        title: "Effect of Outliers on Mean vs Median",
        instruction:
          "Circle the correct statement about how outliers affect each measure.",
        questions: [
          {
            prompt: "Data set: 12, 14, 15, 16, 17, 98. What happens to the mean vs the median?",
            options: [
              "The outlier (98) pulls the mean up significantly, but the median stays near 15.5",
              "Both the mean and median are equally affected",
              "The median is more affected than the mean",
            ],
          },
          {
            prompt: "A company reports the 'average salary' is $120 000. Which is most likely true?",
            options: [
              "A few executives earning very high salaries have inflated the mean — the median salary is probably much lower",
              "Most employees earn close to $120 000",
              "The mean and median are the same in any salary data",
            ],
          },
          {
            prompt: "If you remove the single highest value from a data set, which measure changes more?",
            options: [
              "The mean — because it uses every value in its calculation",
              "The median — because it depends on the middle value",
              "Neither changes — they are both resistant to change",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Absolute vs Relative Change",
        instruction:
          "Circle the response that correctly interprets each claim using absolute and relative change.",
        questions: [
          {
            prompt: "A charity says donations rose 200% — from $50 to $150.",
            options: [
              "The relative increase is large (200%), but the absolute increase is only $100 — context matters",
              "200% always means a huge amount of money",
              "This claim is false because $150 is not 200% of $50",
            ],
          },
          {
            prompt: "A headline says 'Shark attacks up 50%!' Last year: 2 attacks. This year: 3 attacks.",
            options: [
              "The relative change (50%) sounds alarming, but the absolute change is just 1 extra attack — the risk remains extremely low",
              "A 50% increase in shark attacks is a major public safety crisis",
              "Shark attack statistics are always unreliable",
            ],
          },
          {
            prompt: "A drug reduces heart attack risk by 25%. The control group had a 4% risk; the drug group had a 3% risk.",
            options: [
              "The relative risk reduction is 25%, but the absolute reduction is only 1 percentage point — 100 people would need to take the drug to prevent 1 heart attack",
              "25% risk reduction means the drug prevents a quarter of all heart attacks globally",
              "A 1 percentage point difference proves the drug does not work",
            ],
          },
        ],
      },

      // ─── HARD ─────────────────────────────────────────────────────
      {
        type: "open-response",
        title: "Critique a Truncated Y-Axis Bar Chart",
        instruction:
          "Analyse the following scenario and write a detailed critique.",
        prompts: [
          {
            text: "A news headline states: 'Crime has DOUBLED!' The bar chart shows crime incidents going from 498 to 512, but the y-axis starts at 490. Explain: (a) why the truncated y-axis makes the increase look much larger than it is, (b) what the actual percentage increase is, (c) how the graph should be presented fairly, and (d) why a reader who only glances at the chart might be misled.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Evaluate a Media Claim About Violent Crime",
        instruction:
          "Critically evaluate the following media claim.",
        prompts: [
          {
            text: "A social media post claims: 'Australia is getting more dangerous — violent crime rose 8% last year!' List at least 5 questions you would ask before accepting or rejecting this claim. Consider: sample and data source, definition of 'violent crime', population growth, historical trends, and whether reporting rates have changed.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Analyse a Misleading Advertisement Statistic",
        instruction:
          "Write a critical analysis of the following advertisement.",
        prompts: [
          {
            text: "A weight-loss supplement ad claims: '95% of users lost weight in just 4 weeks!' In small print, the study had 20 participants, was funded by the supplement company, had no control group, and 'weight loss' was defined as losing at least 100 grams. Write a critical analysis covering: (a) why the sample size is a problem, (b) why the funding source matters, (c) why a control group is needed, and (d) why the definition of 'weight loss' is misleading.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two News Sources Reporting the Same Data",
        instruction:
          "Analyse how the same data can be framed differently.",
        prompts: [
          {
            text: "Two news outlets report on the same employment data. Source A headline: 'Economy booming — 50 000 new jobs created!' Source B headline: 'Job crisis deepens — unemployment still above 5%.' Both are citing the same government report. Explain: (a) how each source selected different aspects of the data to support its narrative, (b) what additional context a reader would need, (c) which framing (if either) is more honest, and (d) how you would write a balanced headline.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Design a Fair Survey",
        instruction:
          "Apply your knowledge of sampling and bias to design an unbiased survey.",
        prompts: [
          {
            text: "You want to find out whether students in your state support later school start times. Design a fair survey by describing: (a) your target population and sample size, (b) your sampling method and why it reduces bias, (c) at least 3 unbiased survey questions (avoid leading questions), (d) how you would report the results honestly, including margin of error and limitations.",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Statistical Literacy",
        instruction:
          "Circle TRUE or FALSE for each statement.",
        questions: [
          {
            prompt: "A correlation of 0.95 between two variables proves that one causes the other.",
            options: [
              "FALSE — correlation measures association, not causation, no matter how strong",
              "TRUE — a high correlation always means causation",
            ],
          },
          {
            prompt: "If a graph's y-axis starts at a value other than 0, it is always misleading.",
            options: [
              "FALSE — sometimes starting above 0 is appropriate (e.g. showing small changes in temperature), but it should be clearly labelled",
              "TRUE — the y-axis must always start at 0",
            ],
          },
          {
            prompt: "A larger sample size generally gives more reliable results.",
            options: [
              "TRUE — larger samples reduce the effect of random variation, assuming the sampling method is unbiased",
              "FALSE — sample size does not matter if the questions are good",
            ],
          },
          {
            prompt: "The median is always a better measure of centre than the mean.",
            options: [
              "FALSE — the best measure depends on the data; the mean is preferred for symmetric data without outliers",
              "TRUE — the median is always more accurate",
            ],
          },
          {
            prompt: "If a study is funded by a company with a financial interest in the results, the findings should be treated with extra scrutiny.",
            options: [
              "TRUE — funding sources can create conflicts of interest, and the methodology should be examined carefully",
              "FALSE — who funds a study has no effect on its validity",
            ],
          },
        ],
      },
      {
        type: "open-response",
        title: "Rewrite a Misleading Headline",
        instruction:
          "Rewrite each misleading headline to be accurate and fair.",
        prompts: [
          {
            text: "Misleading headline: 'DEADLY new disease sweeps the nation — cases up 300%!' Reality: Cases rose from 3 to 12 nationwide (population 26 million), the disease is rarely fatal, and the increase is partly due to improved testing. Rewrite the headline to be accurate, then explain in 2–3 sentences why the original was misleading.",
            type: "lines",
            lines: 6,
          },
          {
            text: "Misleading headline: 'Students today are the worst readers in history!' Reality: Average reading scores dropped by 2 points on a 500-point scale compared to 10 years ago, while participation in the assessment increased by 15% (including more students with learning difficulties). Rewrite the headline to be accurate, then explain why the original was misleading.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "open-response",
        title: "Why 'Average' Can Be Misleading",
        instruction:
          "Explain how the word 'average' can be used to mislead.",
        prompts: [
          {
            text: "A real estate agent says: 'The average home in this suburb sold for $1.2 million last year.' There were 10 sales: nine homes sold for between $600k and $750k, and one waterfront mansion sold for $6 million. (a) Calculate the approximate mean and median sale prices. (b) Explain why the agent chose to report the mean. (c) Which measure would be more useful for a buyer looking at typical homes in the suburb? (d) How could the agent present the data honestly?",
            type: "lines",
            lines: 10,
          },
        ],
      },

      // ─── HOME ─────────────────────────────────────────────────────
      {
        type: "home-activity",
        title: "Media Literacy Challenge",
        instruction: "Critically examine statistics used in the media.",
        suggestions: [
          "Find a graph or statistic in a news article, advertisement, or social media post. Identify at least 3 potential sources of bias or misleading presentation (e.g. truncated axis, small sample, missing context). Write down how you would improve the presentation.",
          "Watch a news segment that uses statistics. Record: the claim, the evidence given, and any missing information (sample size, methodology, who funded the research, margin of error). Rate the claim's reliability out of 10 and justify your rating.",
          "Compare how two different news sources report on the same statistic (e.g. employment, housing prices, crime rates). Note the differences in framing, headline language, and which data each source chose to highlight or omit.",
        ],
      },
      {
        type: "home-activity",
        title: "Create Your Own Fair Infographic",
        instruction:
          "Apply what you have learned to create an honest, well-designed infographic.",
        suggestions: [
          "Choose a topic you care about (sport, environment, music, gaming, etc.) and find real data from a reliable source (ABS, government report, reputable news outlet).",
          "Create a hand-drawn or digital infographic that presents the data fairly: use a y-axis starting at 0 (or clearly label it if not), include sample sizes and sources, use consistent scales, and avoid cherry-picking.",
          "Write a short paragraph underneath your infographic explaining the design choices you made and why they help the reader understand the data honestly.",
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
      // --- EASY: Foundations of probability language & basic calculations ---
      {
        type: "matching",
        title: "Probability Type Match",
        instruction:
          "Draw a line from each probability type to its description.",
        left: [
          "Simple probability",
          "Compound event (independent)",
          "Compound event (dependent)",
          "Conditional probability",
        ],
        right: [
          "The probability of a single outcome occurring",
          "Two or more events where one outcome does not affect the other",
          "Two or more events where one outcome changes the likelihood of the other",
          "The probability of an event occurring given that another event has already occurred",
        ],
      },
      {
        type: "circle-correct",
        title: "Independent vs Dependent Events",
        instruction:
          "Circle whether each pair of events is independent or dependent.",
        questions: [
          {
            prompt: "Flipping a coin and rolling a die",
            options: ["Independent", "Dependent"],
          },
          {
            prompt: "Drawing two cards from a deck without replacement",
            options: ["Dependent", "Independent"],
          },
          {
            prompt: "The weather today and whether you carry an umbrella",
            options: ["Dependent", "Independent"],
          },
          {
            prompt: "Rolling a die twice",
            options: ["Independent", "Dependent"],
          },
          {
            prompt: "Choosing a team captain, then choosing a vice-captain from the remaining players",
            options: ["Dependent", "Independent"],
          },
          {
            prompt: "Spinning a spinner and flipping a coin",
            options: ["Independent", "Dependent"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Basic Single-Event Probabilities",
        instruction:
          "Circle the correct probability for each event.",
        questions: [
          {
            prompt: "P(rolling a 4 on a standard die)",
            options: ["1/6", "1/4", "4/6"],
          },
          {
            prompt: "P(drawing a heart from a standard 52-card deck)",
            options: ["13/52 = 1/4", "4/52 = 1/13", "1/2"],
          },
          {
            prompt: "P(flipping heads on a fair coin)",
            options: ["1/2", "1/3", "1/4"],
          },
          {
            prompt: "P(rolling an even number on a standard die)",
            options: ["3/6 = 1/2", "2/6 = 1/3", "4/6 = 2/3"],
          },
        ],
      },
      {
        type: "matching",
        title: "Probability Notation Match",
        instruction:
          "Draw a line from each notation to its meaning.",
        left: [
          "P(A|B)",
          "P(A ∩ B)",
          "P(A ∪ B)",
          "P(A')",
          "P(A) × P(B)",
        ],
        right: [
          "Probability of A given that B has occurred",
          "Probability of both A and B occurring",
          "Probability of A or B (or both) occurring",
          "Probability of A not occurring",
          "P(A and B) when A and B are independent",
        ],
      },
      {
        type: "sorting",
        title: "Independent vs Dependent Pairs",
        instruction:
          "Sort each event pair into Independent or Dependent.",
        columns: ["Independent", "Dependent"],
        items: [
          { label: "Tossing two separate coins" },
          { label: "Drawing 2 marbles from a bag without replacement" },
          { label: "Rolling a die, then spinning a spinner" },
          { label: "Picking a card, not replacing it, then picking another" },
          { label: "Two different students' test scores (no copying)" },
          { label: "Choosing a sock, then choosing another sock from the same drawer" },
          { label: "Flipping a coin 5 times (each flip)" },
          { label: "Rain today and rain tomorrow in the same city" },
        ],
      },
      {
        type: "circle-correct",
        title: "Sample Space Size",
        instruction:
          "Circle the correct total number of outcomes in each sample space.",
        questions: [
          {
            prompt: "Rolling two standard dice",
            options: ["36", "12", "6"],
          },
          {
            prompt: "Flipping two coins",
            options: ["4", "2", "3"],
          },
          {
            prompt: "Flipping three coins",
            options: ["8", "6", "3"],
          },
          {
            prompt: "Rolling a die and flipping a coin",
            options: ["12", "8", "7"],
          },
          {
            prompt: "Drawing 1 card from a standard deck then flipping a coin",
            options: ["104", "54", "52"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Complementary Events: P(A') = 1 − P(A)",
        instruction:
          "Circle the correct complementary probability.",
        questions: [
          {
            prompt: "P(rolling a 6) = 1/6, so P(not rolling a 6) =",
            options: ["5/6", "1/6", "6/6"],
          },
          {
            prompt: "P(rain) = 0.3, so P(no rain) =",
            options: ["0.7", "0.3", "1.3"],
          },
          {
            prompt: "P(drawing a spade) = 1/4, so P(not a spade) =",
            options: ["3/4", "1/4", "1/2"],
          },
          {
            prompt: "P(winning a raffle) = 0.02, so P(not winning) =",
            options: ["0.98", "0.02", "0.50"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "'At Least One' Using the Complement",
        instruction:
          "Circle the correct probability. Hint: P(at least one) = 1 − P(none).",
        questions: [
          {
            prompt: "P(at least one head in 2 coin flips). P(no heads) = (1/2)² = 1/4, so P(at least one head) =",
            options: ["3/4", "1/4", "1/2"],
          },
          {
            prompt: "P(at least one 6 in 2 dice rolls). P(no 6) = (5/6)² = 25/36, so P(at least one 6) =",
            options: ["11/36", "1/36", "25/36"],
          },
          {
            prompt: "P(at least one red marble when drawing 2 with replacement from a bag of 3 red and 7 blue). P(no red) = (7/10)² = 49/100, so P(at least one red) =",
            options: ["51/100", "49/100", "9/100"],
          },
        ],
      },

      // --- MEDIUM: Tree diagrams, two-way tables & compound calculations ---
      {
        type: "circle-correct",
        title: "Tree Diagram — Marbles Without Replacement",
        instruction:
          "A bag contains 3 red and 2 blue marbles. Two are drawn without replacement. Circle the correct probability for each outcome.",
        questions: [
          {
            prompt: "P(Red first) =",
            options: ["3/5", "2/5", "1/2"],
          },
          {
            prompt: "P(Blue second | Red first) =",
            options: ["2/4 = 1/2", "2/5", "3/4"],
          },
          {
            prompt: "P(Red then Blue) =",
            options: ["3/5 × 2/4 = 6/20 = 3/10", "3/5 × 2/5 = 6/25", "1/2 × 1/2 = 1/4"],
          },
          {
            prompt: "P(Both same colour) = P(RR) + P(BB) =",
            options: [
              "(3/5 × 2/4) + (2/5 × 1/4) = 6/20 + 2/20 = 8/20 = 2/5",
              "(3/5)² + (2/5)² = 9/25 + 4/25 = 13/25",
              "1/2",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading a Two-Way Table",
        instruction:
          "Use the two-way table below. 200 students were surveyed about sport and music.\n\n|              | Plays Sport | No Sport | Total |\n|--------------|-------------|----------|-------|\n| Plays Music  |     45      |    30    |  75   |\n| No Music     |     80      |    45    | 125   |\n| Total        |    125      |    75    | 200   |\n\nCircle the correct answer.",
        questions: [
          {
            prompt: "P(plays sport) =",
            options: ["125/200 = 5/8", "80/200 = 2/5", "45/200"],
          },
          {
            prompt: "P(plays music and plays sport) =",
            options: ["45/200 = 9/40", "75/200", "125/200"],
          },
          {
            prompt: "P(plays music | plays sport) =",
            options: ["45/125 = 9/25", "45/200", "75/125"],
          },
          {
            prompt: "P(plays sport | plays music) =",
            options: ["45/75 = 3/5", "45/200", "125/200"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "P(A and B) for Independent Events",
        instruction:
          "For independent events, P(A and B) = P(A) × P(B). Circle the correct answer.",
        questions: [
          {
            prompt: "P(heads on coin 1 AND heads on coin 2) =",
            options: ["1/2 × 1/2 = 1/4", "1/2 + 1/2 = 1", "1/2"],
          },
          {
            prompt: "P(rolling a 3 AND then rolling a 5) on two dice =",
            options: ["1/6 × 1/6 = 1/36", "2/6 = 1/3", "1/6 + 1/6 = 2/6"],
          },
          {
            prompt: "A spinner has P(red) = 0.4. Two independent spins. P(red both times) =",
            options: ["0.4 × 0.4 = 0.16", "0.4 + 0.4 = 0.8", "0.4"],
          },
          {
            prompt: "P(rain on Monday) = 0.3, P(rain on Tuesday, independent) = 0.5. P(rain both days) =",
            options: ["0.3 × 0.5 = 0.15", "0.3 + 0.5 = 0.8", "0.5 − 0.3 = 0.2"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "P(A and B) for Dependent Events",
        instruction:
          "For dependent events, P(A and B) = P(A) × P(B|A). Circle the correct answer.",
        questions: [
          {
            prompt: "A bag has 4 red and 6 blue marbles. P(red first, then red second without replacement) =",
            options: ["4/10 × 3/9 = 12/90 = 2/15", "4/10 × 4/10 = 16/100", "(4/10)² = 4/25"],
          },
          {
            prompt: "A deck has 52 cards. P(Ace first, then Ace second without replacement) =",
            options: ["4/52 × 3/51 = 12/2652 = 1/221", "4/52 × 4/52 = 1/169", "4/52 + 3/51"],
          },
          {
            prompt: "A jar has 5 green and 3 yellow sweets. P(green then yellow, without replacement) =",
            options: ["5/8 × 3/7 = 15/56", "5/8 × 3/8 = 15/64", "3/8 × 5/7 = 15/56"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Steps to Calculate Using the Complement",
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
        type: "sequence",
        title: "Steps to Complete a Two-Way Table",
        instruction:
          "Put the steps in order to complete a two-way table and find a conditional probability.",
        items: [
          { label: "Write in the known values from the problem" },
          { label: "Use row and column totals to find missing cells (total − known = unknown)" },
          { label: "Check that all rows and columns add to their totals" },
          { label: "Identify the condition — this tells you which row or column to focus on" },
          { label: "Divide the target cell by the row or column total for the condition" },
        ],
      },
      {
        type: "matching",
        title: "Scenario → Calculation Method",
        instruction:
          "Draw a line from each probability scenario to the correct calculation method.",
        left: [
          "P(at least one 6 in four rolls of a die)",
          "P(two aces in a row from a deck, no replacement)",
          "P(heads and rolling a 3, coin and die)",
          "P(rain tomorrow given it rained today)",
          "P(red or blue marble from a bag of 3 red, 4 blue, 2 green)",
        ],
        right: [
          "1 − P(no 6 in four rolls) = 1 − (5/6)⁴",
          "P(1st ace) × P(2nd ace | 1st ace) = 4/52 × 3/51",
          "P(heads) × P(3) = 1/2 × 1/6 (independent)",
          "Use conditional probability: P(rain tomorrow | rain today)",
          "P(red) + P(blue) = 3/9 + 4/9 = 7/9 (mutually exclusive)",
        ],
      },
      {
        type: "circle-correct",
        title: "Conditional Probability from a Two-Way Table",
        instruction:
          "120 Year 10 students were surveyed.\n\n|              | Likes Maths | Doesn't Like Maths | Total |\n|--------------|-------------|--------------------|-------|\n| Likes Science|     35      |        15          |  50   |\n| No Science   |     20      |        50          |  70   |\n| Total        |     55      |        65          | 120   |\n\nCircle the correct answer.",
        questions: [
          {
            prompt: "P(likes maths | likes science) =",
            options: ["35/50 = 7/10", "35/120", "55/120"],
          },
          {
            prompt: "P(likes science | likes maths) =",
            options: ["35/55 = 7/11", "35/120", "50/120"],
          },
          {
            prompt: "P(doesn't like maths | doesn't like science) =",
            options: ["50/70 = 5/7", "50/120", "65/120"],
          },
          {
            prompt: "Are 'likes maths' and 'likes science' independent? Check: does P(maths | science) = P(maths)?",
            options: [
              "No: P(maths | science) = 7/10 ≠ P(maths) = 55/120 ≈ 0.458",
              "Yes: both are about school subjects",
              "Cannot be determined",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "With Replacement vs Without Replacement",
        instruction:
          "A bag contains 6 red and 4 blue marbles. Circle the correct probability for each scenario.",
        questions: [
          {
            prompt: "P(red then red) WITH replacement =",
            options: ["6/10 × 6/10 = 36/100 = 9/25", "6/10 × 5/9 = 30/90 = 1/3", "6/10 × 6/9"],
          },
          {
            prompt: "P(red then red) WITHOUT replacement =",
            options: ["6/10 × 5/9 = 30/90 = 1/3", "6/10 × 6/10 = 9/25", "6/10 × 6/9 = 36/90"],
          },
          {
            prompt: "P(blue then red) WITH replacement =",
            options: ["4/10 × 6/10 = 24/100 = 6/25", "4/10 × 6/9 = 24/90", "4/10 × 5/9"],
          },
          {
            prompt: "P(blue then red) WITHOUT replacement =",
            options: ["4/10 × 6/9 = 24/90 = 4/15", "4/10 × 6/10 = 6/25", "4/10 × 5/9 = 20/90"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Tree Diagram Rules",
        instruction:
          "Circle the correct statement about tree diagrams.",
        questions: [
          {
            prompt: "To find the probability of a specific path through a tree diagram, you:",
            options: ["Multiply the probabilities along the branches", "Add the probabilities along the branches", "Subtract the probabilities"],
          },
          {
            prompt: "To find the probability of multiple different outcomes (e.g., P(one red and one blue in any order)), you:",
            options: ["Add the probabilities of each path that gives that outcome", "Multiply the probabilities of each path", "Choose the largest probability"],
          },
          {
            prompt: "The probabilities on all branches from a single node must:",
            options: ["Add to 1", "Multiply to 1", "Be equal"],
          },
          {
            prompt: "In a 'without replacement' tree diagram, the denominators on the second set of branches are:",
            options: ["One less than the first set", "The same as the first set", "Always halved"],
          },
        ],
      },

      // --- HARD: Extended problems & deeper reasoning ---
      {
        type: "open-response",
        title: "Medical Test: False Positive Problem",
        instruction:
          "Use a two-way table to solve this real-world conditional probability problem.",
        prompts: [
          {
            text: "A medical test is 95% accurate (correctly identifies a condition when present) and has a 3% false positive rate (positive result when condition is absent). If 1 in 100 people have the condition, complete a two-way table for 10,000 people:\n\n• 100 people have the condition → 95 test positive (true positive), 5 test negative (false negative)\n• 9,900 don't have it → 297 test positive (false positive), 9,603 test negative (true negative)\n\n(a) Calculate P(has condition | tests positive) = 95 / (95 + 297). Show your working.\n(b) Why is this result surprising? Explain in plain language why a positive test doesn't mean you're likely to have the condition.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Design a Profitable Carnival Game",
        instruction:
          "Apply compound probability to design and analyse a game of chance.",
        prompts: [
          {
            text: "Design a simple carnival game using two spins of a spinner (or two draws from a bag). The game costs $2 to play.\n\n(a) Describe your game and its rules.\n(b) List all possible outcomes and their probabilities.\n(c) Assign prizes to each outcome.\n(d) Calculate the expected value for the player per game.\n(e) Show that the game operator makes a profit on average.\n(f) Explain why the game still feels fun and winnable despite being profitable for the operator.",
            type: "lines",
            lines: 12,
          },
        ],
      },
      {
        type: "open-response",
        title: "The Monty Hall Problem",
        instruction:
          "Analyse this famous probability puzzle using conditional reasoning.",
        prompts: [
          {
            text: "In a game show, there are 3 doors. Behind one is a car; behind the other two are goats. You pick a door. The host (who knows where the car is) opens a different door to reveal a goat, then asks if you want to switch.\n\n(a) What is P(car behind your original door)? What is P(car behind one of the other two doors)?\n(b) After the host opens a goat door, what is P(car behind the remaining door)?\n(c) Should you switch? Explain why switching gives you a 2/3 chance of winning.\n(d) Many people believe it's 50/50. Explain clearly why that intuition is wrong.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Weather Probability — Dependent Events",
        instruction:
          "Solve a compound probability problem involving dependent events.",
        prompts: [
          {
            text: "In a certain city, the probability of rain on any given day is 0.3. However, if it rained the previous day, the probability of rain increases to 0.5.\n\n(a) Draw a tree diagram for two consecutive days (Day 1 and Day 2).\n(b) Calculate P(rain on both days) = P(rain Day 1) × P(rain Day 2 | rain Day 1) = 0.3 × 0.5. Show your working.\n(c) Calculate P(rain on exactly one of the two days). Consider both paths: rain-then-dry and dry-then-rain.\n(d) Calculate P(no rain on either day) = P(dry Day 1) × P(dry Day 2 | dry Day 1) = 0.7 × 0.7. Verify that all four outcome probabilities sum to 1.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Quality Control — Two Machines",
        instruction:
          "Apply conditional probability to a manufacturing scenario.",
        prompts: [
          {
            text: "A factory has two machines. Machine A produces 60% of all items and has a 4% defect rate. Machine B produces 40% of items and has a 6% defect rate.\n\n(a) Complete a two-way table for 1,000 items:\n• Machine A: 600 items → 24 defective, 576 good\n• Machine B: 400 items → 24 defective, 376 good\n\n(b) What is the overall defect rate? (48/1000 = 4.8%)\n(c) If an item is found to be defective, what is the probability it came from Machine A? Calculate P(Machine A | defective) = 24/48 = 1/2.\n(d) Is P(defective | Machine A) the same as P(Machine A | defective)? Explain why or why not.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Probability Properties",
        instruction:
          "Circle True or False for each statement about probability.",
        questions: [
          {
            prompt: "P(A|B) is always equal to P(B|A)",
            options: ["False", "True"],
          },
          {
            prompt: "If A and B are independent, then P(A|B) = P(A)",
            options: ["True", "False"],
          },
          {
            prompt: "P(A ∪ B) = P(A) + P(B) is always true",
            options: ["False — only true if A and B are mutually exclusive", "True"],
          },
          {
            prompt: "P(A ∩ B) ≤ P(A) and P(A ∩ B) ≤ P(B)",
            options: ["True", "False"],
          },
          {
            prompt: "The probability of any event is between 0 and 1 inclusive",
            options: ["True", "False"],
          },
          {
            prompt: "For dependent events: P(A and B) = P(A) × P(B)",
            options: ["False — this formula only works for independent events", "True"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Sports Probability — Best-of-3 Series",
        instruction:
          "Calculate compound probabilities for a sports scenario.",
        prompts: [
          {
            text: "Team A has a 0.6 probability of winning any individual game against Team B (assume games are independent).\n\n(a) In a best-of-3 series (first to 2 wins), list all possible sequences of outcomes (e.g., AA, ABA, BAA, ABB, BAB, BB).\n(b) Calculate the probability of each sequence.\n  • P(AA) = 0.6 × 0.6 = 0.36\n  • P(ABA) = 0.6 × 0.4 × 0.6 = 0.144\n  • P(BAA) = 0.4 × 0.6 × 0.6 = 0.144\n  • P(ABB) = 0.6 × 0.4 × 0.4 = 0.096\n  • P(BAB) = 0.4 × 0.6 × 0.4 = 0.096\n  • P(BB) = 0.4 × 0.4 = 0.16\n(c) P(Team A wins series) = 0.36 + 0.144 + 0.144 = 0.648. Verify P(Team B wins) = 0.352 and check they sum to 1.\n(d) Is Team A's series advantage (0.648) larger or smaller than their single-game advantage (0.6)? Explain why.",
            type: "lines",
            lines: 10,
          },
        ],
      },
      {
        type: "open-response",
        title: "Why P(A|B) ≠ P(B|A)",
        instruction:
          "Explain a key concept in conditional probability with a clear example.",
        prompts: [
          {
            text: "Using this data about 200 people:\n\n|              | Left-handed | Right-handed | Total |\n|--------------|-------------|--------------|-------|\n| Plays guitar |      8      |      32      |  40   |\n| No guitar    |     12      |     148      | 160   |\n| Total        |     20      |     180      | 200   |\n\n(a) Calculate P(left-handed | plays guitar) = 8/40 = 1/5 = 0.2\n(b) Calculate P(plays guitar | left-handed) = 8/20 = 2/5 = 0.4\n(c) These are clearly different! Explain in your own words why P(A|B) ≠ P(B|A) in general.\n(d) Give a real-life example where confusing P(A|B) with P(B|A) could lead to a wrong conclusion.",
            type: "lines",
            lines: 8,
          },
        ],
      },

      // --- HOME: Hands-on experiments & real-world exploration ---
      {
        type: "home-activity",
        title: "Probability Experiments at Home",
        instruction: "Explore conditional and compound probability with hands-on experiments.",
        suggestions: [
          "Card experiment: Draw 2 cards without replacement from a standard deck, 30 times. Record how often both are the same suit. Compare your result to the theoretical probability: P(same suit) = 13/52 × 12/51 × 4 suits = 4/17 ≈ 0.235.",
          "Monty Hall experiment: Use 3 cups and a small object. Have a family member play the host. Do 30 rounds: always switch for 15 rounds, always stay for 15 rounds. Record your wins for each strategy. Does your data support the theoretical 2/3 win rate for switching?",
          "Dice experiment: Roll two dice 50 times. Record how often you get at least one 6. Compare to the theoretical P(at least one 6) = 1 − (5/6)² = 11/36 ≈ 0.306. Discuss why your experimental result might differ from the theory.",
        ],
      },
      {
        type: "home-activity",
        title: "Real-World Conditional Probability",
        instruction: "Find and analyse conditional probability in everyday life.",
        suggestions: [
          "Research a real-world example of conditional probability (e.g., medical testing accuracy, weather forecasting, spam email filtering). Explain what the 'condition' is and why P(A|B) ≠ P(B|A) matters in that context.",
          "Create a two-way table using data from your family or class (e.g., favourite subject vs favourite sport, pet owners vs birth month). Calculate at least two conditional probabilities from your table and explain what they mean.",
          "Find a news article that mentions a probability or statistic. Identify whether it involves simple, compound, or conditional probability. Explain whether the article interprets the probability correctly.",
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
