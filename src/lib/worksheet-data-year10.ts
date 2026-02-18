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
      {
        type: "open-response",
        title: "Logarithms — Basic Evaluation",
        instruction: "Evaluate each logarithm and explain your reasoning.",
        prompts: [
          { text: "Evaluate: (a) log₂(8)  (b) log₃(81)  (c) log₁₀(10000)  (d) log₅(125). Show the exponential equation that matches each.", type: "lines", lines: 5 },
          { text: "Evaluate: (a) log₂(1/4)  (b) log₁₀(0.001)  (c) log₃(1). Explain why logarithms of fractions less than 1 give negative results.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "matching",
        title: "Logarithm to Exponential Form",
        instruction: "Draw a line from each logarithmic statement to its equivalent exponential form.",
        left: ["log₂(16) = 4", "log₁₀(1000) = 3", "log₃(9) = 2", "log₅(25) = 2", "log₂(0.5) = −1"],
        right: ["5² = 25", "2⁴ = 16", "2⁻¹ = 0.5", "3² = 9", "10³ = 1000"],
      },
      {
        type: "circle-correct",
        title: "Logarithm Laws — Which Law?",
        instruction: "Circle the logarithm law used in each step.",
        questions: [
          { prompt: "log(6) = log(2) + log(3)", options: ["Product law: log(ab) = log(a) + log(b)", "Quotient law: log(a/b) = log(a) − log(b)", "Power law: log(aⁿ) = n·log(a)"] },
          { prompt: "log(50) = log(100) − log(2)", options: ["Quotient law: log(a/b) = log(a) − log(b)", "Product law", "Power law"] },
          { prompt: "log(8) = 3·log(2)", options: ["Power law: log(aⁿ) = n·log(a)", "Product law", "Quotient law"] },
          { prompt: "log(1) = 0 for any valid base", options: ["log(1) = 0 because b⁰ = 1 for any b", "log(1) = 1 because b¹ = 1", "log(1) is undefined"] },
        ],
      },
      {
        type: "sorting",
        title: "Classify: Exact or Approximate Logarithm",
        instruction: "Sort each logarithm value: Exact Integer or Approximate Decimal.",
        columns: ["Exact Integer", "Approximate Decimal"],
        items: [
          { label: "log₂(32) = 5" },
          { label: "log₁₀(7) ≈ 0.845" },
          { label: "log₃(27) = 3" },
          { label: "log₂(10) ≈ 3.322" },
          { label: "log₅(625) = 4" },
          { label: "log₁₀(50) ≈ 1.699" },
          { label: "log₁₀(100) = 2" },
          { label: "ln(e²) = 2" },
        ],
      },
      {
        type: "open-response",
        title: "Scientific Notation — Operations",
        instruction: "Perform calculations in scientific notation and express answers correctly.",
        prompts: [
          { text: "Calculate (3.0 × 10⁴) × (2.5 × 10³). Express your answer in correct scientific notation and standard form.", type: "lines", lines: 4 },
          { text: "Calculate (9.6 × 10⁸) ÷ (3.2 × 10⁵). Express your answer in correct scientific notation.", type: "lines", lines: 3 },
          { text: "Add: (4.5 × 10⁶) + (2.3 × 10⁵). Why must you adjust exponents before adding? Show the working.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Error Bounds — Upper and Lower",
        instruction: "Circle the correct upper and lower bounds for each measurement.",
        questions: [
          { prompt: "A length measured as 7.4 cm (to 1 dp). The bounds are:", options: ["Lower: 7.35 cm, Upper: 7.45 cm", "Lower: 7.3 cm, Upper: 7.5 cm", "Lower: 7.0 cm, Upper: 7.9 cm"] },
          { prompt: "A mass rounded to 3 kg. The bounds are:", options: ["Lower: 2.5 kg, Upper: 3.5 kg", "Lower: 2 kg, Upper: 4 kg", "Lower: 2.9 kg, Upper: 3.1 kg"] },
          { prompt: "A time of 12 s rounded to the nearest second. The bounds are:", options: ["Lower: 11.5 s, Upper: 12.5 s", "Lower: 11 s, Upper: 13 s", "Lower: 11.9 s, Upper: 12.1 s"] },
        ],
      },
      {
        type: "open-response",
        title: "Logarithmic Scale Design Challenge",
        instruction: "Apply logarithmic thinking to a novel context.",
        prompts: [
          { text: "Design a 'Speed Scale' for vehicles (bicycle to rocket). Choose 5 speeds ranging from ~5 km/h to ~40,000 km/h. Create a log₁₀ scale and mark each vehicle. What is the advantage of this scale over a linear one?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sequence",
        title: "Logarithmic Scale Values — Order",
        instruction: "Put these values in order from smallest to largest.",
        sequences: [
          { items: [4, 1, 6, 2, 9, 3], answer: [1, 2, 3, 4, 6, 9] },
          { items: [-2, -5, 0, 3, -1, 2], answer: [-5, -2, -1, 0, 2, 3] },
        ],
      },
      {
        type: "open-response",
        title: "Compound Approximation Errors",
        instruction: "Analyse how small approximation errors compound in multi-step problems.",
        prompts: [
          { text: "A student estimates the volume of a sphere using r ≈ 5 cm instead of the true 5.2 cm. Calculate the volume using both values (V = 4/3 × π × r³). What is the absolute error? What is the percentage error?", type: "lines", lines: 5 },
          { text: "If you use g ≈ 10 m/s² instead of 9.8 m/s² in physics calculations, what is the percentage error? For a projectile with initial velocity 20 m/s, compare the range using each value: R = v²/g.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "Logarithm Laws — Simplify",
        instruction: "Draw a line from each logarithm expression to its simplified form.",
        left: ["log₂(4) + log₂(8)", "log₁₀(1000) − log₁₀(10)", "3 × log₂(4)", "log₅(1)", "log₃(3⁷)"],
        right: ["7", "0", "6", "2", "5"],
      },
      {
        type: "home-activity",
        title: "Sound Levels Survey",
        instruction: "Measure and compare real sound levels using the decibel scale.",
        suggestions: [
          "Download a free sound level meter app. Measure dB levels in 5 different locations (quiet room, outside, kitchen, TV, road). Calculate how many times more intense the loudest is compared to the quietest using 10^((dB₁−dB₂)/10).",
          "Record the sounds in your house over 10 minutes. Make a tally of time spent above 70 dB (busy street level). Research what sustained exposure to those levels means for hearing health.",
          "Research: what dB level does a smoke alarm produce? A normal conversation? A classroom? Create a personal 'sound diary' for one school day.",
        ],
      },
      {
        type: "open-response",
        title: "Interpreting Logarithmic Graphs",
        instruction: "Read and interpret a graph drawn on a logarithmic scale.",
        prompts: [
          { text: "A graph of bacterial growth is plotted with time (hours) on the x-axis and number of bacteria on a log₁₀ y-axis. At t=0 the value is 2 (meaning 100 bacteria). At t=4 the value is 5 (meaning 100,000 bacteria). Calculate the growth rate per hour and express the population as an exponential function.", type: "lines", lines: 5 },
          { text: "On a log₁₀ scale, the distance between the marks for 10 and 100 equals the distance between 100 and 1,000. Explain why this is the case in terms of what the scale is actually measuring.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "tally-chart",
        title: "Scientific Notation Practice Errors",
        instruction: "Tally common errors students make with scientific notation.",
        categories: [
          { label: "Coefficient not between 1–10", icon: "pencil", count: 6 },
          { label: "Wrong sign on exponent", icon: "star", count: 9 },
          { label: "Arithmetic error on exponent", icon: "book", count: 4 },
          { label: "Forgot to adjust coefficient", icon: "circle", count: 7 },
          { label: "Confused multiply vs divide", icon: "diamond", count: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Orders of Magnitude — Estimation",
        instruction: "Use orders of magnitude to make rough estimates.",
        prompts: [
          { text: "Estimate the number of heartbeats in an average human lifetime. Show your assumptions and reasoning, expressing your final answer in scientific notation.", type: "lines", lines: 5 },
          { text: "Estimate the number of words in all the books in a typical school library. State your assumptions clearly and express your answer to the nearest order of magnitude.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Significant Figures — Count Correctly",
        instruction: "Circle the number of significant figures in each value.",
        questions: [
          { prompt: "0.00420", options: ["3", "5", "6"] },
          { prompt: "1.050 × 10⁴", options: ["4", "5", "6"] },
          { prompt: "3700 (measured to nearest 100)", options: ["2", "3", "4"] },
          { prompt: "0.0306", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "open-response",
        title: "Real-World Logarithm Application",
        instruction: "Apply logarithm properties to solve a real-world problem.",
        prompts: [
          { text: "The Richter magnitude M = log₁₀(A/A₀). If one earthquake has amplitude 500 times the reference, calculate M. If a second has amplitude 50,000 times the reference, calculate its M. How many times stronger is the second earthquake in terms of amplitude?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "home-activity",
        title: "Accuracy in Everyday Measurement",
        instruction: "Investigate how measurement precision affects everyday decisions.",
        suggestions: [
          "Measure the same object (e.g. a book or door) using a ruler to the nearest cm, then to the nearest mm. Calculate the area or volume using each measurement. How much does the extra precision change the result?",
          "When cooking, many recipes say '1 cup' of flour. Weigh out what you think is 1 cup, then look up the exact mass (approx. 125 g). Calculate your percentage error.",
          "Find an example of significant figures in a science or maths textbook. Identify: (a) how many significant figures are in the input data, and (b) how many should be in the answer.",
        ],
      },
      {
        type: "sorting",
        title: "Classify the Error Type",
        instruction: "Sort each error: Rounding Error, Truncation Error, or Measurement Error.",
        columns: ["Rounding Error", "Truncation Error", "Measurement Error"],
        items: [
          { label: "Using π ≈ 3.14 in a calculation" },
          { label: "A ruler can only read to the nearest mm" },
          { label: "A computer drops digits beyond 8 decimal places" },
          { label: "Cutting off a decimal after 2 places without rounding" },
          { label: "A scale fluctuates ±0.5 g" },
          { label: "Reporting 2.347 as 2.35" },
        ],
      },
      {
        type: "sequence",
        title: "Significant Figure Rules — Order of Steps",
        instruction: "Put the steps in order for reporting a calculation result to the correct number of significant figures.",
        items: [
          { label: "Identify the input with the fewest significant figures" },
          { label: "Perform the full calculation without rounding intermediate steps" },
          { label: "Count significant figures in the answer" },
          { label: "Round the final answer to match the least precise input" },
          { label: "Write the answer with appropriate units" },
        ],
      },
      {
        type: "open-response",
        title: "Fermi Estimation — Orders of Magnitude",
        instruction: "Use order-of-magnitude reasoning to estimate large quantities.",
        prompts: [
          { text: "How many piano tuners are in Melbourne? Break this into: population, fraction who own pianos, how often pianos are tuned, how many pianos a tuner can tune per year. Show all steps and give your answer as an order of magnitude.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "pH Values to Substance",
        instruction: "Draw a line from each substance to its approximate pH value.",
        left: ["Battery acid", "Lemon juice", "Pure water", "Bleach", "Baking soda solution"],
        right: ["pH 7", "pH 0–1", "pH 2–3", "pH 8–9", "pH 12–13"],
      },
      {
        type: "circle-correct",
        title: "Using Logarithms to Solve Exponential Equations",
        instruction: "Circle the correct method or answer for each equation.",
        questions: [
          { prompt: "To solve 10ˣ = 500, take:", options: ["log₁₀ of both sides: x = log₁₀(500) ≈ 2.699", "ln of both sides: x = ln(500)", "Square root of both sides"] },
          { prompt: "log₁₀(x) = 2.5 means x =", options: ["10^2.5 ≈ 316.2", "2.5 × 10", "10 ÷ 2.5"] },
          { prompt: "log₂(x) = 6 means x =", options: ["2⁶ = 64", "6² = 36", "6 × 2 = 12"] },
        ],
      },
      {
        type: "open-response",
        title: "Logarithm Change of Base",
        instruction: "Apply the change of base formula log_b(x) = log(x) / log(b).",
        prompts: [
          { text: "Calculate log₇(100) using the change of base formula and a calculator. Show your working.", type: "lines", lines: 4 },
          { text: "Use the change of base formula to explain why log₁₀(x) and ln(x) are simply multiples of each other (they differ by the constant factor log₁₀(e) ≈ 0.4343).", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sorting",
        title: "Logarithm Applications — Field",
        instruction: "Sort each application of logarithms into the correct field.",
        columns: ["Science & Medicine", "Finance & Economics", "Engineering & Technology"],
        items: [
          { label: "pH scale in chemistry" },
          { label: "Compound interest calculations" },
          { label: "Decibel scale in acoustics" },
          { label: "Earthquake Richter scale" },
          { label: "Stellar magnitude in astronomy" },
          { label: "Signal-to-noise ratio in electronics" },
          { label: "Carbon dating in archaeology" },
          { label: "Music: frequency ratios between notes" },
        ],
      },
      {
        type: "open-response",
        title: "Scientific Notation in Astronomy",
        instruction: "Apply scientific notation to astronomical distances and scales.",
        prompts: [
          { text: "The distance from Earth to Alpha Centauri is about 4.13 × 10¹³ km. Light travels at 3.0 × 10⁵ km/s. Calculate how many seconds light takes to reach Alpha Centauri. Convert to years (1 year ≈ 3.15 × 10⁷ s). What does this tell you about the distances involved?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Logarithm Evaluation — Mental Math",
        instruction: "Evaluate each logarithm without a calculator.",
        questions: [
          { prompt: "log₁₀(10,000,000)", options: ["7", "70", "0.7"] },
          { prompt: "log₂(1/8)", options: ["−3", "3", "−0.125"] },
          { prompt: "log₁₆(4)", options: ["1/2", "2", "4"] },
          { prompt: "log₁₀(0.0001)", options: ["−4", "4", "−0.0001"] },
        ],
      },
      {
        type: "open-response",
        title: "Logarithmic Thinking — Growth Rate",
        instruction: "Use logarithms to find when exponential processes reach a target.",
        prompts: [
          { text: "A city's population grows at 3% per year. Currently 500,000 people. Using P = 500,000 × 1.03ⁿ and taking log₁₀ of both sides, find when the population reaches 1,000,000. (Hint: log₁₀(2) ≈ 0.301, log₁₀(1.03) ≈ 0.0128)", type: "lines", lines: 6 },
        ],
      },
      {
        type: "home-activity",
        title: "Approximation Errors in Navigation",
        instruction: "Explore how small measurement errors compound in navigation.",
        suggestions: [
          "Research the 'dead reckoning' navigation method used historically on ships. If a ship's speed is estimated with 2% error and direction with 1° error, how far off-course could the ship be after 500 km? Use trigonometry and proportion to estimate.",
          "Look up how GPS satellites achieve their accuracy. What happens to positional error if the satellite clock is out by 1 microsecond? (Hint: light travels 300 m in 1 microsecond.)",
          "Research the Mars Climate Orbiter crash of 1999 (caused by a units error: metric vs imperial). Calculate how large the navigation error was and what small measurement mistake caused it.",
        ],
      },
      {
        type: "open-response",
        title: "Richter Scale — Deep Dive",
        instruction: "Apply logarithmic reasoning to compare earthquake energies in depth.",
        prompts: [
          { text: "The energy E (in joules) released by an earthquake of magnitude M is approximated by log₁₀(E) = 4.8 + 1.5M.\n(a) Find the energy of an M = 5 earthquake.\n(b) Find the energy of an M = 7 earthquake.\n(c) How many times more energy does M = 7 release than M = 5?\n(d) Explain why the energy ratio grows so fast compared to the magnitude difference.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "tally-chart",
        title: "Logarithm Practice — Types of Problems",
        instruction: "Tally the types of logarithm problems you solve in a practice session.",
        categories: [
          { label: "Evaluating simple logarithms", icon: "pencil", count: 8 },
          { label: "Applying logarithm laws", icon: "book", count: 6 },
          { label: "Solving exponential equations using logs", icon: "star", count: 5 },
          { label: "Real-world log scale problems", icon: "diamond", count: 4 },
          { label: "Change of base calculations", icon: "circle", count: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Approximation vs Exact — When Does It Matter?",
        instruction: "Analyse when exact values are needed vs approximations.",
        prompts: [
          { text: "A structural engineer calculates the load-bearing capacity of a beam as exactly 12,450 kg. A colleague rounds this to 12,000 kg for convenience. Discuss: (a) In what contexts is this rounding acceptable? (b) In what contexts could it be dangerous? (c) What is the percentage error?", type: "lines", lines: 6 },
          { text: "In mathematics, we often use exact surd values (e.g. √2 = 1.41421356...). Explain why a computer programmer might prefer an approximation like 1.4142 and when this creates problems in software (e.g. comparing floating-point numbers for equality).", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sequence",
        title: "Solving 10ˣ = N Using Logarithms — Steps",
        instruction: "Put the steps in the correct order for solving 10ˣ = N.",
        items: [
          { label: "Write the equation: 10ˣ = N" },
          { label: "Take log₁₀ of both sides: log₁₀(10ˣ) = log₁₀(N)" },
          { label: "Apply the power law: x · log₁₀(10) = log₁₀(N)" },
          { label: "Since log₁₀(10) = 1, simplify: x = log₁₀(N)" },
          { label: "Use a calculator to evaluate log₁₀(N)" },
          { label: "Verify by checking: 10^(your answer) ≈ N" },
        ],
      },
      {
        type: "open-response",
        title: "Natural Logarithm — Introduction",
        instruction: "Introduce the natural logarithm ln(x) and its connection to e.",
        prompts: [
          { text: "The number e ≈ 2.71828 is the base of natural logarithms. Calculate: (a) ln(e) — the answer should be 1. (b) ln(e²). (c) ln(e⁻³). (d) e^(ln 5). Explain the pattern: what is the relationship between eˣ and ln(x)?", type: "lines", lines: 6 },
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
      {
        type: "open-response",
        title: "Exponential Function — Key Features",
        instruction: "Identify and explain key features of an exponential function.",
        prompts: [
          { text: "For f(x) = 3 × 2ˣ, state: (a) the y-intercept, (b) whether it is growth or decay, (c) the horizontal asymptote, (d) the value when x = 4, (e) the value of x when f(x) = 96.", type: "lines", lines: 5 },
          { text: "For f(x) = 500 × 0.8ˣ, state: (a) the initial value, (b) the decay factor, (c) the percentage decrease per step, (d) the value when x = 3, (e) when f(x) first drops below 100.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Compound Interest — Identify Variables",
        instruction: "For each problem, circle the correct value.",
        questions: [
          { prompt: "A = P(1 + r)ⁿ with P = $4,000, r = 0.06, n = 5. What is A?", options: ["$5,352.90", "$5,200", "$4,240"] },
          { prompt: "A = $6,050, P = $5,000, n = 2. What annual rate r was used?", options: ["10%", "5%", "21%"] },
          { prompt: "$2,000 grows to $2,662.00 at 10% per year. How many years?", options: ["3 years", "2 years", "4 years"] },
          { prompt: "P = $10,000, r = 5% p.a., compounded monthly. The monthly rate is:", options: ["0.4167%", "5%", "0.05%"] },
        ],
      },
      {
        type: "matching",
        title: "Financial Vocabulary — Growth and Decay",
        instruction: "Draw a line from each financial term to its correct definition.",
        left: ["Principal", "Compound interest", "Depreciation", "Appreciation", "Growth factor"],
        right: [
          "The multiplier applied each period (e.g. 1.07 for 7% growth)",
          "The original amount invested or borrowed",
          "Interest calculated on principal plus accumulated interest",
          "Decrease in value over time (e.g. car losing value)",
          "Increase in value over time (e.g. property price rise)",
        ],
      },
      {
        type: "sorting",
        title: "Linear vs Exponential vs Quadratic",
        instruction: "Sort each function into the correct type.",
        columns: ["Linear", "Quadratic", "Exponential"],
        items: [
          { label: "y = 2x + 7" },
          { label: "y = 3 × 1.5ˣ" },
          { label: "y = x² − 4x + 3" },
          { label: "y = −5x + 20" },
          { label: "y = 2ˣ" },
          { label: "y = −x² + 9" },
          { label: "y = 1000 × 0.9ⁿ" },
          { label: "y = 4x" },
        ],
      },
      {
        type: "open-response",
        title: "Half-Life Problems",
        instruction: "Apply exponential decay to radioactive half-life scenarios.",
        prompts: [
          { text: "A radioactive isotope has a half-life of 6 hours. Starting with 800 mg:\n(a) Write the decay function A(t) where t is in 6-hour periods.\n(b) How much remains after 24 hours? After 48 hours?\n(c) How long until less than 10 mg remains?", type: "lines", lines: 6 },
          { text: "Carbon-14 has a half-life of 5,730 years. An ancient artefact contains 25% of the original carbon-14. How old is the artefact?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sequence",
        title: "Compound Interest — Sequence of Values",
        instruction: "Complete the sequence of account balances.",
        sequences: [
          { items: [1000, 1100, 1210, 0, 0], answer: [1000, 1100, 1210, 1331, 1464] },
          { items: [5000, 5250, 5513, 0, 0], answer: [5000, 5250, 5513, 5788, 6078] },
        ],
      },
      {
        type: "circle-correct",
        title: "Doubling Time",
        instruction: "Use the rule of 70 (doubling time ≈ 70 ÷ percentage rate) to answer each question.",
        questions: [
          { prompt: "At 7% annual growth, money doubles in approximately:", options: ["10 years", "7 years", "14 years"] },
          { prompt: "At 2% annual growth, a population doubles in approximately:", options: ["35 years", "20 years", "70 years"] },
          { prompt: "A city growing at 3.5% per year doubles in approximately:", options: ["20 years", "35 years", "10 years"] },
          { prompt: "An investment doubling in 14 years has an approximate annual growth rate of:", options: ["5%", "7%", "14%"] },
        ],
      },
      {
        type: "open-response",
        title: "Comparing Growth Models",
        instruction: "Compare linear and exponential growth for the same starting value.",
        prompts: [
          { text: "Company A grows by $500 per year (linear). Company B grows by 8% per year (exponential). Both start with $5,000 revenue. Complete a table showing revenue for years 1–5, then determine in which year Company B overtakes Company A.", type: "box" },
          { text: "Sketch or describe the graphs of both companies over 10 years. At what point does the exponential curve become dramatically different from the linear one? Why?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "Decay Factor to Percentage Decrease",
        instruction: "Draw a line from each decay factor to the correct percentage decrease per period.",
        left: ["0.95", "0.80", "0.75", "0.50", "0.99"],
        right: ["20% decrease", "1% decrease", "50% decrease", "5% decrease", "25% decrease"],
      },
      {
        type: "open-response",
        title: "Depreciation — Real Asset",
        instruction: "Apply exponential decay to model vehicle depreciation.",
        prompts: [
          { text: "A car costs $32,000 new and depreciates at 18% per year.\n(a) Write the depreciation function V(n).\n(b) Find the value after 3 years. After 7 years.\n(c) When does the car first become worth less than $10,000?\n(d) Calculate the total decrease in value over the first 5 years.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "circle-correct",
        title: "Real-World Growth Rate Identification",
        instruction: "Circle the correct growth/decay rate for each real-world scenario.",
        questions: [
          { prompt: "Australia's population grows at roughly 1.6% per year. The growth factor is:", options: ["1.016", "1.16", "0.984"] },
          { prompt: "A phone loses 30% of its value each year. The decay factor is:", options: ["0.70", "0.30", "1.30"] },
          { prompt: "Inflation at 3.5% per year means prices grow by factor:", options: ["1.035", "3.5", "0.035"] },
          { prompt: "A drug clears 25% from the bloodstream per hour. After 2 hours, the fraction remaining is:", options: ["0.75² = 0.5625", "0.50", "1.5 (invalid)"] },
        ],
      },
      {
        type: "open-response",
        title: "Spreadsheet Modelling",
        instruction: "Design a spreadsheet to model compound growth or decay.",
        prompts: [
          { text: "Describe how you would set up a spreadsheet to model $20,000 invested at 6.5% compound interest for 20 years. What columns would you create? What formula would go in the balance column? What would the final balance be?", type: "lines", lines: 6 },
          { text: "Using the same spreadsheet, add a column for 'simple interest' at the same rate. At which year does compound interest produce $5,000 more than simple interest?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "sorting",
        title: "Which Model Fits?",
        instruction: "Sort each description: which function type best models it?",
        columns: ["Linear", "Exponential", "Neither (Quadratic)"],
        items: [
          { label: "Height of a ball thrown upward over time" },
          { label: "Temperature drops 2°C every hour in a fridge" },
          { label: "Bacteria doubling every 30 minutes" },
          { label: "Cost of hiring a plumber: $80 call-out + $50/hour" },
          { label: "Spread of a viral social media post" },
          { label: "Area of a square as its side increases" },
          { label: "Savings earning compound interest annually" },
          { label: "Distance walked at constant speed" },
        ],
      },
      {
        type: "home-activity",
        title: "Compound Interest Research",
        instruction: "Explore real compound interest products available in Australia.",
        suggestions: [
          "Look up the current interest rates on Australian savings accounts. If you deposited $5,000, how much would you have after 10 years? Compare two different banks using A = P(1 + r)ⁿ.",
          "Research what a 'term deposit' is. Find a current term deposit rate and calculate the total return on a $10,000 deposit for 1, 2, and 5 years. Compare to a savings account.",
          "Interview a family member about saving or investing. Ask what interest rate their savings earn and whether it compounds monthly, quarterly, or annually. Calculate the effective annual rate.",
        ],
      },
      {
        type: "open-response",
        title: "The Power of Time in Investing",
        instruction: "Explore the effect of time on compound growth.",
        prompts: [
          { text: "Person A invests $5,000 at age 20 at 7% annual compound interest. Person B invests $10,000 at age 40 at the same rate. Both retire at age 65. Who has more money? Show all calculations.", type: "lines", lines: 7 },
          { text: "Explain in your own words why starting to invest early is so important. Use the concept of exponential growth to justify your answer.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Growth vs Decay Examples from Research",
        instruction: "Record examples of growth and decay you find in one week of reading news or textbooks.",
        categories: [
          { label: "Economic growth examples", icon: "star", count: 3 },
          { label: "Population growth examples", icon: "house", count: 4 },
          { label: "Radioactive/medical decay", icon: "diamond", count: 2 },
          { label: "Depreciation examples", icon: "car", count: 3 },
          { label: "Environmental/ecology examples", icon: "tree", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Exponential Decay — Drug Dosage",
        instruction: "Model drug concentration in the bloodstream using exponential decay.",
        prompts: [
          { text: "A painkiller is eliminated at 20% per hour. A patient takes 400 mg at 8 am.\n(a) Write the function C(t) for concentration after t hours.\n(b) Find the concentration at noon, at 6 pm, and at midnight.\n(c) A second dose of 400 mg is taken at 8 pm. What is the total concentration just after the second dose?\n(d) Why is it important for doctors to know the half-life of a drug?", type: "lines", lines: 8 },
        ],
      },
      {
        type: "circle-correct",
        title: "Exponential Equations — Solve by Inspection",
        instruction: "Circle the value of x that solves each equation.",
        questions: [
          { prompt: "2ˣ = 32", options: ["5", "4", "6"] },
          { prompt: "3ˣ = 81", options: ["4", "3", "5"] },
          { prompt: "10ˣ = 0.001", options: ["−3", "3", "−0.001"] },
          { prompt: "5ˣ = 1", options: ["0", "1", "5"] },
          { prompt: "(1/2)ˣ = 8", options: ["−3", "3", "−8"] },
        ],
      },
      {
        type: "open-response",
        title: "Inflation and Purchasing Power",
        instruction: "Apply exponential growth to model inflation.",
        prompts: [
          { text: "Inflation averages 2.5% per year. A coffee costs $5.00 today.\n(a) Write the price function P(n) after n years.\n(b) What will the coffee cost in 10 years? In 30 years?\n(c) How many years until the price doubles? (Use the rule of 70.)\n(d) If your salary also grows at 2.5% per year from $60,000, what will it be in 10 years?", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Continuous vs Discrete Growth",
        instruction: "Draw a line from each scenario to whether it is best modelled by continuous or discrete exponential growth.",
        left: [
          "Interest compounded daily (essentially continuous)",
          "Bacteria doubling every fixed time period",
          "Population census taken every 5 years",
          "Radioactive decay (atoms decay at any moment)",
          "Monthly rent increasing by 3% each January",
        ],
        right: [
          "Discrete growth model (fixed time step)",
          "Continuous growth model (e^rt)",
          "Discrete growth (once per year step)",
          "Continuous decay (always occurring)",
          "Continuous growth (daily = nearly continuous)",
        ],
      },
      {
        type: "circle-correct",
        title: "Interpret a Growth Function Graph",
        instruction: "Circle the correct interpretation for each feature of an exponential graph.",
        questions: [
          { prompt: "The y-intercept of y = 3 × 2ˣ is:", options: ["(0, 3) — the initial value", "(0, 2) — the base", "(0, 6) — 3 × 2"] },
          { prompt: "The horizontal asymptote of y = 500 × 0.9ˣ is:", options: ["y = 0 (never actually reaches 0)", "y = 500 (the starting value)", "y = 0.9 (the decay factor)"] },
          { prompt: "The graph of y = 4 × 3ˣ is steeper than y = 2 × 3ˣ because:", options: ["It has a larger initial value (4 vs 2), not a different growth rate", "It has a larger base", "It grows more slowly"] },
        ],
      },
      {
        type: "open-response",
        title: "Logarithms and Exponential Equations in Finance",
        instruction: "Use logarithms to solve financial equations with unknown time.",
        prompts: [
          { text: "How long does it take for an investment to triple at 6% compound interest per year?\nUsing A = P(1.06)ⁿ = 3P, divide both sides by P to get 1.06ⁿ = 3.\nTake log₁₀ of both sides: n × log(1.06) = log(3).\nSolve for n. Show all steps.", type: "lines", lines: 6 },
          { text: "A car depreciates at 15% per year. Its initial value is $25,000. After how many years will it be worth less than $5,000? Set up the equation and solve using logarithms.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sorting",
        title: "Simple vs Compound Interest Features",
        instruction: "Sort each statement: True of Simple Interest Only, Compound Interest Only, or Both.",
        columns: ["Simple Interest Only", "Compound Interest Only", "Both"],
        items: [
          { label: "Interest is calculated on the original principal only" },
          { label: "Interest is calculated on the growing balance" },
          { label: "Can be used for savings accounts and loans" },
          { label: "Produces a linear (straight line) graph over time" },
          { label: "Produces an exponential curve over time" },
          { label: "Total interest earned increases as time passes" },
        ],
      },
      {
        type: "open-response",
        title: "Continuous Compounding and Euler's Number",
        instruction: "Explore the mathematical limit of compound interest.",
        prompts: [
          { text: "When interest is compounded n times per year, the formula is A = P(1 + r/n)^(nt). Calculate the value of $1 invested at 100% interest for 1 year when compounded: (a) annually (n=1), (b) monthly (n=12), (c) daily (n=365), (d) each minute (n=525,600). What number does the result approach? This is Euler's number e ≈ 2.71828.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "open-response",
        title: "Superannuation — Long-Term Compound Growth",
        instruction: "Apply exponential growth to Australian superannuation.",
        prompts: [
          { text: "Australia requires employers to contribute 11% of a worker's salary to superannuation. If a person earns $60,000/year and their super earns 7% p.a. compound:\n(a) How much is contributed each year? ($60,000 × 0.11 = ?)\n(b) Assuming contributions are invested at the start of each year, use the geometric series sum to estimate the total after 40 years of work.\n(c) Compare this to simply saving the same amount without compounding.", type: "lines", lines: 8 },
        ],
      },
      {
        type: "circle-correct",
        title: "Exponential vs Linear — Which Grows Faster?",
        instruction: "Circle the correct answer about comparing growth rates.",
        questions: [
          { prompt: "In the long run, y = 1,000,000x (linear) vs y = 2ˣ (exponential). Which is larger for very big x?", options: ["The exponential y = 2ˣ eventually overtakes the linear", "The linear function is always larger", "They grow at the same rate eventually"] },
          { prompt: "The function y = 10x and y = 1.01ˣ. For x = 1,000, which is larger?", options: ["y = 1.01^1000 ≈ 20,959 (exponential wins)", "y = 10 × 1000 = 10,000 (linear wins)", "They are equal at x = 1,000"] },
          { prompt: "For small values of x (x = 1 to 5), which grows faster: y = 100x or y = 2ˣ?", options: ["The linear y = 100x is larger for small x", "The exponential y = 2ˣ is always larger", "They are always equal"] },
        ],
      },
      {
        type: "sequence",
        title: "Steps for Modelling Exponential Growth from Data",
        instruction: "Put the steps in order for fitting an exponential model to data.",
        items: [
          { label: "Identify two data points (x₁, y₁) and (x₂, y₂) from the dataset" },
          { label: "Write equations: y₁ = a·bˣ¹ and y₂ = a·bˣ²" },
          { label: "Divide to eliminate a: y₂/y₁ = b^(x₂−x₁)" },
          { label: "Solve for b (the growth/decay factor)" },
          { label: "Substitute b back to find a (the initial value)" },
          { label: "Write the model and test it against other data points" },
        ],
      },
      {
        type: "open-response",
        title: "Logistic Growth — When Exponential Models Break Down",
        instruction: "Explore the limits of exponential growth models.",
        prompts: [
          { text: "Bacteria in a petri dish initially double every 30 minutes. After a few hours, the growth slows as nutrients run out. (a) Sketch what you would expect the population graph to look like over 24 hours. (b) Explain why an exponential model works at first but eventually fails. (c) What type of curve (S-shaped or logistic) better describes the full picture?", type: "lines", lines: 7 },
        ],
      },
      {
        type: "tally-chart",
        title: "Types of Exponential Problems Practised",
        instruction: "Tally the types of exponential problems you solve in a practice session.",
        categories: [
          { label: "Compound interest calculations", icon: "star", count: 7 },
          { label: "Depreciation problems", icon: "car", count: 5 },
          { label: "Population growth problems", icon: "tree", count: 4 },
          { label: "Half-life / radioactive decay", icon: "diamond", count: 4 },
          { label: "Drug concentration problems", icon: "book", count: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Superannuation and Investment Research",
        instruction: "Research real investment and superannuation options in Australia.",
        suggestions: [
          "Visit the MoneySmart website (moneysmart.gov.au). Use their superannuation calculator to see how a 15-year-old today might grow their superannuation by retirement at age 67. Try different contribution and return rate assumptions.",
          "Research the 'rule of 72' (another version of the rule of 70). Verify it by testing: at 8% growth, does money double in 72/8 = 9 years? Use the compound interest formula to check.",
          "Find the 10-year average return of the Australian stock market (ASX 200). Use this rate to calculate what $10,000 invested today would be worth in 30 years. Compare to keeping the money in a savings account.",
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
      {
        type: "open-response",
        title: "Substitution Method — Step by Step",
        instruction: "Solve each pair of simultaneous equations using the substitution method.",
        prompts: [
          { text: "Solve: y = 2x − 1 and 3x + y = 14. Show all steps: substitute, simplify, solve for x, then find y. Verify by substituting back.", type: "lines", lines: 6 },
          { text: "Solve: y = 4 − x and 2x − y = 2. Show all steps and verify your solution.", type: "lines", lines: 5 },
          { text: "Solve: x = 3y + 5 and 2x − y = 15. Show all steps and verify.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Check a Solution — Simultaneous Equations",
        instruction: "Circle whether each given solution is correct or incorrect.",
        questions: [
          { prompt: "x + y = 7 and x − y = 3. Solution: x = 5, y = 2", options: ["Correct", "Incorrect"] },
          { prompt: "2x + y = 10 and x + 3y = 15. Solution: x = 3, y = 4", options: ["Correct", "Incorrect"] },
          { prompt: "y = 2x + 1 and y = x + 5. Solution: x = 4, y = 9", options: ["Correct", "Incorrect"] },
          { prompt: "3x − 2y = 4 and x + y = 7. Solution: x = 2, y = 5", options: ["Incorrect — check: 3(2)−2(5)=−4 not 4", "Correct"] },
        ],
      },
      {
        type: "matching",
        title: "Word Problem to Equation Pair",
        instruction: "Draw a line from each word problem to the pair of equations that models it.",
        left: [
          "Two numbers sum to 20 and differ by 6",
          "Two books cost $38 total; one costs $8 more than the other",
          "A rectangle has perimeter 36 cm and length 5 cm more than width",
          "3 adults and 2 children pay $56; adult ticket costs twice a child's",
        ],
        right: [
          "a + c = 38; a = c + 8",
          "2a + 2c = 56; a = 2c",
          "x + y = 20; x − y = 6",
          "2(l + w) = 36; l = w + 5",
        ],
      },
      {
        type: "open-response",
        title: "Elimination Method",
        instruction: "Solve each pair using the elimination method.",
        prompts: [
          { text: "Solve: 3x + 2y = 16 and 3x − y = 7. Subtract equations to eliminate x, then solve. Verify.", type: "lines", lines: 5 },
          { text: "Solve: 2x + 5y = 23 and 4x + 5y = 31. Subtract to eliminate 5y, find x, then y. Verify.", type: "lines", lines: 5 },
          { text: "Solve: 3x + 4y = 25 and 2x + 3y = 18. Multiply to make coefficients match before eliminating.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sorting",
        title: "One, Zero, or Infinite Solutions?",
        instruction: "Sort each pair of simultaneous equations.",
        columns: ["One Solution", "No Solution", "Infinite Solutions"],
        items: [
          { label: "y = 2x + 1 and y = 2x + 5 (parallel lines)" },
          { label: "y = 3x − 2 and y = x + 4" },
          { label: "2x + y = 6 and 4x + 2y = 12 (same line)" },
          { label: "y = x and y = −x" },
          { label: "3x − y = 1 and 6x − 2y = 2 (same line)" },
          { label: "x + y = 5 and x − y = 1" },
        ],
      },
      {
        type: "open-response",
        title: "Linear Inequalities — Solve and Interpret",
        instruction: "Solve and interpret linear inequalities.",
        prompts: [
          { text: "Solve 3x − 5 > 7 and represent the solution on a number line. Explain what the open/closed circle means.", type: "lines", lines: 4 },
          { text: "Solve −2x + 3 ≤ 11. Show all algebraic steps. What is the key rule for multiplying or dividing by a negative number?", type: "lines", lines: 4 },
          { text: "Solve 2 ≤ 3x + 5 < 14 (compound inequality). Write the solution as an interval.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inequality Direction — Which Way?",
        instruction: "Circle the correct inequality symbol after the transformation.",
        questions: [
          { prompt: "Starting with x < 5: multiply both sides by −2:", options: ["x > −10 (flip the inequality)", "x < −10 (keep same)", "x > 10"] },
          { prompt: "Starting with −3x ≥ 12: divide both sides by −3:", options: ["x ≤ −4 (flip the inequality)", "x ≥ −4 (keep same)", "x ≤ 4"] },
          { prompt: "Starting with x + 7 > 3: subtract 7:", options: ["x > −4 (no flip needed)", "x < −4", "x > 10"] },
          { prompt: "Starting with 4x < −8: divide both sides by 4:", options: ["x < −2 (no flip — dividing by positive)", "x > −2", "x < 2"] },
        ],
      },
      {
        type: "open-response",
        title: "Simultaneous Equations — Real World",
        instruction: "Set up and solve simultaneous equations for real-world problems.",
        prompts: [
          { text: "A cinema charges $15 for adults and $9 for children. 200 people attend and total takings are $2,220. How many adults and children attended? Define variables, write equations, solve, and verify.", type: "lines", lines: 7 },
          { text: "A small business sells handmade mugs for $25 and plates for $18. In one day they sell 30 items and take in $654. How many of each did they sell?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sequence",
        title: "Elimination Method Steps — Order Them",
        instruction: "Put the steps for elimination method in the correct order.",
        items: [
          { label: "Choose which variable to eliminate" },
          { label: "Multiply one or both equations to match coefficients" },
          { label: "Add or subtract the equations to eliminate one variable" },
          { label: "Solve the resulting single-variable equation" },
          { label: "Substitute back to find the other variable" },
          { label: "Check the solution in both original equations" },
        ],
      },
      {
        type: "matching",
        title: "Inequality Solution to Graph Description",
        instruction: "Draw a line from each inequality solution to its correct number-line description.",
        left: ["x > 3", "x ≤ −2", "−1 < x ≤ 4", "x ≥ 0", "x < 7"],
        right: [
          "Open circle at 3, arrow pointing right",
          "Open circle at −1, closed circle at 4, region between",
          "Closed circle at 0, arrow pointing right",
          "Closed circle at −2, arrow pointing left",
          "Open circle at 7, arrow pointing left",
        ],
      },
      {
        type: "open-response",
        title: "Break-Even Analysis",
        instruction: "Use simultaneous equations to find a business break-even point.",
        prompts: [
          { text: "A candle-making business has fixed costs of $300 per month and variable costs of $4 per candle. They sell candles for $12 each.\n(a) Write equations for total cost C and total revenue R in terms of quantity q.\n(b) Set C = R and solve to find the break-even quantity.\n(c) How much profit do they make if they sell 60 candles in a month?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sorting",
        title: "Algebraic vs Graphical Method",
        instruction: "Sort each situation: better solved Algebraically or Graphically.",
        columns: ["Algebraic Method", "Graphical Method"],
        items: [
          { label: "Need an exact answer quickly" },
          { label: "Want to see where equations intersect visually" },
          { label: "Equations have large or decimal coefficients" },
          { label: "Checking for parallel or coincident lines" },
          { label: "Need to communicate the solution to a non-mathematician" },
          { label: "System has non-integer solutions" },
        ],
      },
      {
        type: "open-response",
        title: "Compound Inequalities in Context",
        instruction: "Solve and interpret compound inequalities in real-world contexts.",
        prompts: [
          { text: "A company needs between 50 and 120 items manufactured today (inclusive). If the machine produces x items per hour and runs for 8 hours, write and solve a compound inequality to find the required rate x.", type: "lines", lines: 5 },
          { text: "Temperature for a chemistry experiment must be between 15°C and 25°C. The thermostat reads T = 2h + 11 where h is hours since start. For which values of h is the temperature in the safe range?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Methods Used to Solve Simultaneous Equations",
        instruction: "Tally which method was used across 30 practice problems.",
        categories: [
          { label: "Substitution method", icon: "pencil", count: 11 },
          { label: "Elimination method", icon: "book", count: 13 },
          { label: "Graphical method", icon: "star", count: 4 },
          { label: "Technology/CAS", icon: "diamond", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Interpret Solutions — Simultaneous Equations",
        instruction: "Circle the correct interpretation of each solution.",
        prompts: [
          { text: "Cost: C = 50 + 20n, Revenue: R = 35n. Solving gives n = 10. Explain what this means in context — what has happened at n = 10, and what does profit look like before and after that point?", type: "lines", lines: 5 },
          { text: "Two trains leave stations 300 km apart, travelling toward each other. One travels at 80 km/h, the other at 100 km/h. Write equations for position over time and solve to find when and where they meet.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Linear Inequalities — Two Variables",
        instruction: "Describe the solution region for a linear inequality in two variables.",
        prompts: [
          { text: "For y > 2x − 3, describe: (a) the boundary line, (b) whether the line is solid or dashed, (c) which side is shaded. Test the point (0, 0) to confirm.", type: "lines", lines: 5 },
          { text: "For y ≤ −x + 5 and y ≥ x − 1, describe the region that satisfies both inequalities. Find two points in this region and verify they satisfy both inequalities.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Solutions of Simultaneous Equations — Graphical Meaning",
        instruction: "Circle the correct graphical meaning for each type of solution.",
        questions: [
          { prompt: "One solution (x, y): the two lines", options: ["Intersect at exactly one point", "Are parallel", "Are the same line"] },
          { prompt: "No solution: the two lines", options: ["Are parallel (same gradient, different y-intercepts)", "Intersect at one point", "Are the same line"] },
          { prompt: "Infinite solutions: the two lines", options: ["Are coincident (the same line — one is a multiple of the other)", "Are perpendicular", "Intersect at two points"] },
        ],
      },
      {
        type: "open-response",
        title: "Mixture Problems — Simultaneous Equations",
        instruction: "Use simultaneous equations to solve mixture problems.",
        prompts: [
          { text: "A chemist needs to make 10 litres of a 30% acid solution by mixing a 20% acid solution with a 50% acid solution.\n(a) Let x = litres of 20% solution, y = litres of 50% solution. Write two equations.\n(b) Solve the system and find the exact quantities needed.\n(c) Verify your answer by checking that the total acid content is correct.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "sorting",
        title: "Classify the System — Solution Type",
        instruction: "Sort each system of equations: Consistent (one solution), Inconsistent (no solution), or Dependent (infinite solutions).",
        columns: ["Consistent — One Solution", "Inconsistent — No Solution", "Dependent — Infinite Solutions"],
        items: [
          { label: "y = 3x + 1 and y = 3x − 5" },
          { label: "y = 2x + 3 and y = x + 5" },
          { label: "2x + 4y = 8 and x + 2y = 4" },
          { label: "3x − y = 4 and 6x − 2y = 9" },
          { label: "x + y = 7 and 2x − y = 2" },
          { label: "y = x and y = −x + 10" },
        ],
      },
      {
        type: "open-response",
        title: "Linear Programming Introduction",
        instruction: "Use systems of inequalities to model a simple linear programming problem.",
        prompts: [
          { text: "A bakery makes muffins (profit $3 each) and cakes (profit $7 each). Constraints:\n• Total items ≤ 50 per day\n• At least 10 muffins must be made\n• At least 5 cakes must be made\nLet m = muffins, c = cakes. Write the constraint inequalities. Find the corner points of the feasible region. Determine how many of each to maximise profit.", type: "lines", lines: 9 },
        ],
      },
      {
        type: "matching",
        title: "Simultaneous Equations — Applications to Areas",
        instruction: "Draw a line from each type of simultaneous equation problem to its application area.",
        left: [
          "Finding where supply and demand curves intersect",
          "Calculating where two runners meet on a track",
          "Finding the mixture of two solutions with different concentrations",
          "Determining break-even for a business",
          "Solving circuit equations using Kirchhoff's laws",
        ],
        right: [
          "Physics — electrical circuits",
          "Business — cost and revenue analysis",
          "Economics — market equilibrium",
          "Sport — distance-rate-time problems",
          "Chemistry — mixture problems",
        ],
      },
      {
        type: "open-response",
        title: "Distance-Rate-Time — Simultaneous Equations",
        instruction: "Model distance-rate-time problems using simultaneous equations.",
        prompts: [
          { text: "Two cyclists start from opposite ends of an 80 km trail at the same time. Cyclist A rides at 20 km/h and Cyclist B at 12 km/h. Set up two equations for their positions and find when and where they meet.", type: "lines", lines: 6 },
          { text: "A boat travels 60 km upstream in 5 hours and returns in 3 hours. Find the speed of the boat in still water and the speed of the current. (Hint: upstream speed = boat speed − current, downstream = boat speed + current)", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Inequality Word Problems — Set Up Correctly",
        instruction: "Circle the inequality that correctly models each situation.",
        questions: [
          { prompt: "A student needs at least 60% to pass. Their test score is s:", options: ["s ≥ 60", "s > 60", "s ≤ 60"] },
          { prompt: "A lift can carry at most 12 people. The number n of people in the lift:", options: ["n ≤ 12", "n < 12", "n ≥ 12"] },
          { prompt: "A temperature must remain below 25°C. Temperature T:", options: ["T < 25", "T ≤ 25", "T > 25"] },
          { prompt: "To qualify, a runner must finish in less than 45 minutes. Time t:", options: ["t < 45", "t ≤ 45", "t > 45"] },
        ],
      },
      {
        type: "home-activity",
        title: "Simultaneous Equations — Real Data",
        instruction: "Find and solve a real simultaneous equations problem from your life.",
        suggestions: [
          "Compare the costs of two mobile phone plans. Plan A charges $30/month + $0.10/text, Plan B charges $45/month with unlimited texts. Set up and solve the simultaneous equations to find at which number of texts both plans cost the same.",
          "Visit two different stores (or their websites) and find two items sold at both. Note the prices. If you could buy x units of item 1 and y units of item 2 with a fixed budget from each store, set up simultaneous equations to find how many you could buy.",
          "Research electricity plans in your state. If Plan A charges 30c/kWh with a $1/day supply charge, and Plan B charges 25c/kWh with a $1.50/day supply charge, find the daily usage at which the costs are equal.",
        ],
      },
      {
        type: "open-response",
        title: "Verify Simultaneous Equation Solutions",
        instruction: "Verify solutions by substituting back into both original equations.",
        prompts: [
          { text: "A student claims the solution to: 5x + 2y = 19 and 3x − y = 8 is x = 3, y = 2.\n(a) Substitute into both equations and check if the solution is correct.\n(b) If it is wrong, find the correct solution using either substitution or elimination.\n(c) Explain what 'checking a solution' means mathematically.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "tally-chart",
        title: "Equation Types Encountered in Algebra",
        instruction: "Tally the types of equations you encounter in a week of maths study.",
        categories: [
          { label: "Linear equations (one variable)", icon: "pencil", count: 8 },
          { label: "Linear equations (two variables — simultaneous)", icon: "book", count: 6 },
          { label: "Linear inequalities", icon: "star", count: 4 },
          { label: "Quadratic equations", icon: "diamond", count: 5 },
          { label: "Exponential equations", icon: "circle", count: 3 },
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
      {
        type: "open-response",
        title: "Quadratic Functions — Key Features",
        instruction: "Identify and explain all key features of a quadratic function.",
        prompts: [
          { text: "For f(x) = x² − 6x + 8: (a) Find x-intercepts by factoring. (b) Find y-intercept. (c) Find the axis of symmetry. (d) Find the vertex. (e) State the minimum value.", type: "lines", lines: 7 },
          { text: "For g(x) = −2x² + 8x − 6: (a) State whether parabola opens up or down. (b) Find axis of symmetry. (c) Find vertex. (d) Find x-intercepts. (e) State maximum value.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Function Vocabulary",
        instruction: "Draw a line from each function term to its correct definition.",
        left: ["Domain", "Range", "x-intercept", "y-intercept", "Axis of symmetry"],
        right: [
          "The value of y when x = 0",
          "The vertical line through the vertex of a parabola",
          "The set of all possible output (y) values",
          "The value(s) of x when y = 0",
          "The set of all allowable input (x) values",
        ],
      },
      {
        type: "circle-correct",
        title: "Parabola Features — Identify from Equation",
        instruction: "Circle the correct answer for each feature.",
        questions: [
          { prompt: "f(x) = 3(x − 2)² + 5 — vertex is at:", options: ["(2, 5)", "(−2, 5)", "(2, −5)"] },
          { prompt: "f(x) = −(x + 3)² + 7 — the parabola:", options: ["Opens downward, vertex at (−3, 7)", "Opens upward, vertex at (3, 7)", "Opens downward, vertex at (3, −7)"] },
          { prompt: "f(x) = 2x² − 4x + 1 — axis of symmetry is:", options: ["x = 1", "x = 2", "x = −1"] },
          { prompt: "f(x) = x² + 6x + 9 — discriminant is:", options: ["0 (one repeated root)", "Positive (two roots)", "Negative (no real roots)"] },
        ],
      },
      {
        type: "sorting",
        title: "Function vs Not a Function",
        instruction: "Sort each relation: Function or Not a Function.",
        columns: ["Function", "Not a Function"],
        items: [
          { label: "y = x² (each x gives one y)" },
          { label: "x = y² (two y values for each x > 0)" },
          { label: "y = 3x + 1 (straight line)" },
          { label: "A circle: x² + y² = 25" },
          { label: "y = |x| (absolute value)" },
          { label: "y = sin(x)" },
          { label: "{(1,2), (2,3), (1,4)} (x = 1 maps to two outputs)" },
          { label: "y = √x (for x ≥ 0)" },
        ],
      },
      {
        type: "open-response",
        title: "The Discriminant — Nature of Roots",
        instruction: "Use the discriminant to determine the nature of roots without solving.",
        prompts: [
          { text: "For each quadratic, calculate b² − 4ac and state whether there are 0, 1, or 2 real roots:\n(a) x² + 5x + 6 = 0\n(b) x² + 4x + 4 = 0\n(c) x² + x + 3 = 0\n(d) 2x² − 3x − 5 = 0", type: "lines", lines: 7 },
        ],
      },
      {
        type: "sequence",
        title: "Steps for Solving a Quadratic by Factoring",
        instruction: "Put the steps in the correct order.",
        items: [
          { label: "Write the equation in standard form: ax² + bx + c = 0" },
          { label: "Look for factors: find two numbers that multiply to ac and add to b" },
          { label: "Rewrite the middle term using those factors" },
          { label: "Factor by grouping or use the factored form" },
          { label: "Set each factor equal to zero" },
          { label: "Solve each resulting linear equation" },
          { label: "Check both solutions in the original equation" },
        ],
      },
      {
        type: "open-response",
        title: "Quadratic Formula",
        instruction: "Apply the quadratic formula to solve equations that do not factorise easily.",
        prompts: [
          { text: "Solve using the quadratic formula: 2x² − 5x − 3 = 0. State the values of a, b, c. Calculate the discriminant. Find both solutions. Verify by substitution.", type: "lines", lines: 7 },
          { text: "Solve: x² + 3x − 1 = 0. Express solutions in surd form and as decimals correct to 2 decimal places.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "Quadratic Roots to Equation Form",
        instruction: "Draw a line from each pair of roots to the factored form of the quadratic.",
        left: ["x = 3 and x = −2", "x = 0 and x = 5", "x = −4 and x = −1", "x = 1 (repeated)", "x = ½ and x = −3"],
        right: [
          "(x − ½)(x + 3) = 0",
          "(x − 1)² = 0",
          "(x − 3)(x + 2) = 0",
          "x(x − 5) = 0",
          "(x + 4)(x + 1) = 0",
        ],
      },
      {
        type: "open-response",
        title: "Completing the Square",
        instruction: "Use completing the square to rewrite quadratics in vertex form.",
        prompts: [
          { text: "Rewrite f(x) = x² − 8x + 5 in the form (x − h)² + k by completing the square. State the vertex and axis of symmetry.", type: "lines", lines: 5 },
          { text: "Rewrite f(x) = 2x² + 12x + 7 in vertex form. (Hint: first factor out 2 from the x² and x terms.) State the vertex.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Transformations of Parabolas",
        instruction: "Circle the correct description of each transformation.",
        questions: [
          { prompt: "y = x² shifted to y = x² + 3 means:", options: ["Vertical shift up 3 units", "Vertical shift down 3 units", "Horizontal shift right 3 units"] },
          { prompt: "y = x² shifted to y = (x − 4)² means:", options: ["Horizontal shift right 4 units", "Horizontal shift left 4 units", "Vertical shift up 4 units"] },
          { prompt: "y = x² changed to y = −x² means:", options: ["Reflection in the x-axis (flips upside down)", "Reflection in the y-axis", "Vertical stretch"] },
          { prompt: "y = x² changed to y = 3x² means:", options: ["Vertical stretch by factor 3 (narrower)", "Horizontal stretch (wider)", "Shift up 3"] },
        ],
      },
      {
        type: "open-response",
        title: "Conjectures in Algebra — Testing and Proving",
        instruction: "Formulate, test, and attempt to prove algebraic conjectures.",
        prompts: [
          { text: "Conjecture: 'The sum of any two consecutive integers is always odd.' Test with 3 examples. Then prove it algebraically using n and n+1.", type: "lines", lines: 5 },
          { text: "Conjecture: 'The product of any two consecutive even integers is divisible by 8.' Test with 3 examples. Prove algebraically using 2n and 2(n+1).", type: "lines", lines: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Functions in Context — Projectile Motion",
        instruction: "Apply quadratic functions to model projectile motion.",
        prompts: [
          { text: "A ball is thrown upward from a height of 2 m with height h(t) = −5t² + 20t + 2 (h in metres, t in seconds).\n(a) What is the initial height?\n(b) Find the maximum height and when it occurs.\n(c) When does the ball hit the ground? (Solve h(t) = 0)\n(d) What is the height after 3 seconds?", type: "lines", lines: 8 },
        ],
      },
      {
        type: "sorting",
        title: "Classify the Relationship — Function Type",
        instruction: "Sort each context into the type of function that models it best.",
        columns: ["Linear (y = mx + b)", "Quadratic (y = ax² + bx + c)", "Exponential (y = abˣ)"],
        items: [
          { label: "Height of a ball thrown upward over time" },
          { label: "Saving $50 per week from zero" },
          { label: "Compound interest on a savings account" },
          { label: "Area of a square room as its side length increases" },
          { label: "Temperature dropping by equal amounts per hour" },
          { label: "Bacterial population doubling every hour" },
          { label: "Distance fallen by an object under gravity (d = ½gt²)" },
          { label: "Cost of a taxi: $3 flag-fall + $2.50/km" },
        ],
      },
      {
        type: "home-activity",
        title: "Quadratic Functions — Real World",
        instruction: "Find quadratic functions in real-world settings.",
        suggestions: [
          "Throw a ball straight up and catch it. Measure the time in the air. Using h = −5t² + vt, estimate the initial velocity v. What is the maximum height reached?",
          "Research the path of a basketball free throw. Estimate the launch angle and initial speed. Sketch the parabolic path and identify the vertex.",
          "Find a bridge arch or architectural arch. Measure or estimate its dimensions and write a quadratic equation that models the arch.",
        ],
      },
      {
        type: "open-response",
        title: "Polynomial Degree and End Behaviour",
        instruction: "Analyse the end behaviour of polynomial functions.",
        prompts: [
          { text: "For f(x) = x³ − 3x² + 2x: (a) What is the degree? (b) As x → +∞, what does f(x) do? (c) As x → −∞, what does f(x) do? (d) Find x-intercepts by factoring.", type: "lines", lines: 6 },
          { text: "Compare the end behaviour of y = x² and y = x³. Explain why even-degree polynomials have 'matching' ends while odd-degree polynomials have 'opposite' ends.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Types of Quadratic Solutions",
        instruction: "Tally the type of solution found for each quadratic in a set of 25 problems.",
        categories: [
          { label: "Two distinct real roots", icon: "star", count: 14 },
          { label: "One repeated root", icon: "circle", count: 4 },
          { label: "No real roots (complex)", icon: "diamond", count: 7 },
        ],
      },
      {
        type: "open-response",
        title: "Inverse Functions — Introduction",
        instruction: "Explore the concept of inverse functions.",
        prompts: [
          { text: "For f(x) = 2x + 3: (a) Find f⁻¹(x) by swapping x and y and solving for y. (b) Verify that f(f⁻¹(x)) = x and f⁻¹(f(x)) = x. (c) What is the graphical relationship between f and f⁻¹?", type: "lines", lines: 6 },
          { text: "Explain why f(x) = x² (for all real x) does not have an inverse function, but f(x) = x² for x ≥ 0 does. What is the inverse of the restricted version?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Function from Its Graph Description",
        instruction: "Circle the function type that matches each description.",
        questions: [
          { prompt: "A U-shaped curve with vertex at the origin, symmetrical about the y-axis", options: ["Quadratic: y = x²", "Linear: y = x", "Absolute value: y = |x|"] },
          { prompt: "A curve that passes through (0,1) and increases very steeply as x increases", options: ["Exponential: y = 2ˣ", "Quadratic: y = x²", "Linear: y = 2x"] },
          { prompt: "A straight line with negative gradient, crossing both axes", options: ["Linear: y = −2x + 4", "Quadratic: y = −x²", "Constant: y = 4"] },
          { prompt: "A curve shaped like an upside-down U, with a maximum turning point", options: ["Quadratic: y = −x² + 4", "Exponential decay", "Linear with negative slope"] },
        ],
      },
      {
        type: "open-response",
        title: "Conjecture About Even and Odd Functions",
        instruction: "Investigate symmetry properties of functions.",
        prompts: [
          { text: "Define what it means for a function to be 'even'. Give two examples.", type: "lines", lines: 4 },
          { text: "Define what it means for a function to be 'odd'. Give two examples.", type: "lines", lines: 4 },
          { text: "Is f(x) = x² + 3 even, odd, or neither? Justify using algebra.", type: "lines", lines: 4 },
          { text: "Is f(x) = x³ − x even, odd, or neither? Show working.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "matching",
        title: "Match Function to Its Graph Feature",
        instruction: "Draw a line from each function to the graph feature that best describes it.",
        left: ["y = x²", "y = 2ˣ", "y = 1/x", "y = √x", "y = |x|", "y = x³"],
        right: ["V-shaped, vertex at origin", "Passes through (0,1), always positive", "Parabola opening upward", "Defined only for x ≥ 0", "Rotational symmetry about origin", "Hyperbola with two branches"],
      },
      {
        type: "sorting",
        title: "Classify Functions by Type",
        instruction: "Sort each function into the correct category: Linear, Quadratic, Exponential, or Other.",
        columns: ["Linear", "Quadratic", "Exponential", "Other"],
        items: [
          { label: "y = 3x − 7" },
          { label: "y = x² + 2x − 1" },
          { label: "y = 5 × 2ˣ" },
          { label: "y = 1/x" },
          { label: "y = −4x + 9" },
          { label: "y = (x + 3)²" },
          { label: "y = 0.5ˣ" },
          { label: "y = √(x + 1)" },
        ],
      },
      {
        type: "open-response",
        title: "Investigating Translations of Parabolas",
        instruction: "Explore how changing constants shifts the graph of y = x².",
        prompts: [
          { text: "Describe how the graph of y = x² + k differs from y = x² for positive k.", type: "lines", lines: 3 },
          { text: "Describe how y = (x − h)² differs from y = x².", type: "lines", lines: 3 },
          { text: "Write the equation of a parabola with vertex at (3, −2) and opening upward.", type: "lines", lines: 2 },
          { text: "Sketch the graph of y = (x − 1)² + 4 and label the vertex and axis of symmetry.", type: "box" },
        ],
      },
      {
        type: "sequence",
        title: "Function Values — Continue the Pattern",
        instruction: "Complete each table of function values.",
        sequences: [
          { items: [1, 4, 9, 16, 25], answer: [36, 49] },
          { items: [2, 4, 8, 16, 32], answer: [64, 128] },
          { items: [0, 1, 4, 9, 16], answer: [25, 36] },
          { items: [3, 6, 9, 12, 15], answer: [18, 21] },
        ],
      },
      {
        type: "open-response",
        title: "Domain and Range Exploration",
        instruction: "Determine the domain and range for each function.",
        prompts: [
          { text: "State the domain and range of f(x) = x². Is any real number excluded?", type: "lines", lines: 3 },
          { text: "State the domain and range of f(x) = √x. Why is the domain restricted?", type: "lines", lines: 3 },
          { text: "State the domain and range of f(x) = 1/x. Which value of x is excluded and why?", type: "lines", lines: 3 },
          { text: "Create a function whose domain is all real numbers but whose range is only positive numbers.", type: "lines", lines: 2 },
        ],
      },
      {
        type: "tally-chart",
        title: "Types of Functions Encountered",
        instruction: "Tally how many of each function type you have studied this week.",
        categories: [
          { label: "Linear", icon: "pencil", count: 5 },
          { label: "Quadratic", icon: "square", count: 6 },
          { label: "Exponential", icon: "star", count: 3 },
          { label: "Hyperbolic", icon: "circle", count: 2 },
          { label: "Square root", icon: "triangle", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Relations vs Functions",
        instruction: "Determine whether each relation is also a function and justify your answer.",
        prompts: [
          { text: "Is {(1,2),(2,3),(3,4)} a function? Explain using the definition.", type: "lines", lines: 3 },
          { text: "Is {(1,2),(1,3),(2,4)} a function? What rule does it violate?", type: "lines", lines: 3 },
          { text: "Explain the vertical line test and why it works.", type: "lines", lines: 3 },
          { text: "Give an example of a relation that is NOT a function. Draw its graph.", type: "box" },
        ],
      },
      {
        type: "circle-correct",
        title: "Function Notation — Evaluate Correctly",
        instruction: "Circle the correct value of the function.",
        questions: [
          { prompt: "If f(x) = 2x + 3, then f(4) =", options: ["11", "8", "14", "7"] },
          { prompt: "If g(x) = x² − 1, then g(−3) =", options: ["8", "10", "−8", "−10"] },
          { prompt: "If h(x) = 3x − 5, then h(0) =", options: ["−5", "0", "5", "−3"] },
          { prompt: "If f(x) = x² + x, then f(2) =", options: ["6", "4", "8", "2"] },
        ],
      },
      {
        type: "open-response",
        title: "Composite and Inverse Functions",
        instruction: "Explore how functions can be combined and reversed.",
        prompts: [
          { text: "If f(x) = 2x and g(x) = x + 3, find f(g(x)) and g(f(x)).", type: "lines", lines: 5 },
          { text: "Are f(g(x)) and g(f(x)) the same? What does this tell you about composition?", type: "lines", lines: 3 },
          { text: "Find the inverse of f(x) = 3x − 6. Show all steps.", type: "lines", lines: 4 },
          { text: "Check your inverse by computing f(f⁻¹(x)). What should you get?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Functions in Everyday Technology",
        instruction: "Explore where mathematical functions appear in technology around you.",
        suggestions: [
          "Find a graph on your phone's screen time or health app. Identify the type of function it resembles.",
          "Look at a population graph for Australia. Is the growth linear, quadratic, or exponential? Justify.",
          "Open a spreadsheet and enter the formula =A1^2 for x = 1..10. Plot the result and describe the shape.",
          "Research how GPS uses mathematical functions to calculate your position. Write a short paragraph.",
          "Ask a family member what functions or graphs they use in their job. Report back to your class.",
        ],
      },
      {
        type: "open-response",
        title: "Piecewise Functions",
        instruction: "Interpret and create piecewise-defined functions.",
        prompts: [
          { text: "A taxi charges $3 flag fall plus $2/km. Write a function for the fare for x km.", type: "lines", lines: 3 },
          { text: "A phone plan charges $0.10/min for the first 100 minutes, then $0.05/min after. Write a piecewise function for cost.", type: "lines", lines: 4 },
          { text: "Evaluate your phone plan function at 80 minutes and at 150 minutes.", type: "lines", lines: 3 },
          { text: "Draw a graph of the phone plan function for 0 ≤ x ≤ 200.", type: "box" },
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
      {
        type: "open-response",
        title: "Surface Area of Composite Solids",
        instruction: "Calculate the surface area of composite 3D shapes.",
        prompts: [
          { text: "A cylinder (radius 4 cm, height 10 cm) has a hemisphere (radius 4 cm) placed on top. Calculate the total surface area. Note: the circular face where they join is internal, so exclude it from both shapes.", type: "lines", lines: 6 },
          { text: "A rectangular prism (15 cm × 8 cm × 6 cm) has a square pyramid (base 8 cm × 6 cm, slant height 7 cm) on top. Find the external surface area. Which faces are hidden by the join?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "matching",
        title: "3D Shape to Surface Area Formula",
        instruction: "Draw a line from each 3D shape to its surface area formula.",
        left: ["Sphere", "Cylinder (closed)", "Cone (including base)", "Rectangular prism", "Triangular prism"],
        right: [
          "2lw + 2lh + 2wh",
          "πr² + πrl (where l = slant height)",
          "4πr²",
          "2πr² + 2πrh",
          "2 × triangle area + 3 × rectangle areas",
        ],
      },
      {
        type: "circle-correct",
        title: "Calculate Volume — Which Formula?",
        instruction: "Circle the correct formula for calculating volume of each shape.",
        questions: [
          { prompt: "Volume of a cylinder", options: ["V = πr²h", "V = (4/3)πr³", "V = (1/3)πr²h"] },
          { prompt: "Volume of a cone", options: ["V = (1/3)πr²h", "V = πr²h", "V = (1/2)πr²h"] },
          { prompt: "Volume of a sphere", options: ["V = (4/3)πr³", "V = πr³", "V = (2/3)πr³"] },
          { prompt: "Volume of a pyramid", options: ["V = (1/3) × base area × height", "V = base area × height", "V = (1/2) × base area × height"] },
        ],
      },
      {
        type: "open-response",
        title: "Volume of Composite Solids",
        instruction: "Calculate volumes of composite 3D shapes.",
        prompts: [
          { text: "An ice cream cone has: a cone of radius 3 cm and height 12 cm, with a hemisphere of radius 3 cm on top. Find the total volume in cm³ to 2 decimal places.", type: "lines", lines: 5 },
          { text: "A swimming pool has a rectangular section (20 m × 10 m × 2 m deep) and a semicircular end section (radius 5 m, depth 2 m). Calculate the total volume of water the pool can hold. Convert to litres (1 m³ = 1,000 L).", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sorting",
        title: "Units — Area vs Volume",
        instruction: "Sort each unit: Area Unit or Volume Unit.",
        columns: ["Area Unit", "Volume Unit"],
        items: [
          { label: "cm²" },
          { label: "m³" },
          { label: "mm²" },
          { label: "cm³" },
          { label: "hectare (ha)" },
          { label: "litre (L)" },
          { label: "km²" },
          { label: "mL" },
        ],
      },
      {
        type: "circle-correct",
        title: "Surface Area Calculations — Check the Answer",
        instruction: "Circle the correct surface area for each shape.",
        questions: [
          { prompt: "Sphere with radius 5 cm. SA = 4πr²:", options: ["≈ 314.2 cm²", "≈ 523.6 cm²", "≈ 157.1 cm²"] },
          { prompt: "Closed cylinder, radius 3 cm, height 8 cm. SA = 2πr² + 2πrh:", options: ["≈ 207.3 cm²", "≈ 150.8 cm²", "≈ 414.7 cm²"] },
          { prompt: "Cone (including base), radius 6 cm, slant height 10 cm. SA = πr² + πrl:", options: ["≈ 301.6 cm²", "≈ 188.5 cm²", "≈ 376.8 cm²"] },
        ],
      },
      {
        type: "open-response",
        title: "Optimisation — Minimising Surface Area",
        instruction: "Explore how to minimise material used for a given volume.",
        prompts: [
          { text: "A cylindrical can must hold exactly 500 cm³ of liquid. Express the surface area S in terms of radius r only (eliminate h using V = πr²h = 500). For r = 3, 4, 5, 6 cm, calculate the total surface area each time. Which radius gives the minimum surface area?", type: "box" },
          { text: "For a cylinder with fixed volume, why is the optimal shape (minimum surface area) the one where height = 2 × radius? Explain the real-world significance for packaging design.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sequence",
        title: "Steps for Finding Surface Area of a Composite Solid",
        instruction: "Put the steps in the correct order.",
        items: [
          { label: "Identify all individual shapes that make up the composite solid" },
          { label: "Identify which faces are shared/hidden at the join" },
          { label: "Calculate the surface area of each individual shape (all faces)" },
          { label: "Subtract the areas of the hidden/joined faces" },
          { label: "Add remaining areas together for total external surface area" },
          { label: "Check units are consistent throughout" },
        ],
      },
      {
        type: "open-response",
        title: "Scale Factor and Volume",
        instruction: "Explore the relationship between scale factor and volume.",
        prompts: [
          { text: "A model car is built at 1:20 scale. The original car has a volume of 8,000,000 cm³. What is the volume of the model? Explain why you cube the scale factor.", type: "lines", lines: 5 },
          { text: "A tank is scaled up by a factor of 3 in all dimensions. By what factor does: (a) the surface area increase? (b) the volume increase? State the general rule for scale factor k.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "3D Shape to Real-World Object",
        instruction: "Draw a line from each 3D shape to a real-world object it models.",
        left: ["Cylinder", "Cone", "Rectangular prism", "Sphere", "Triangular prism"],
        right: [
          "A Toblerone chocolate box",
          "A globe of the Earth",
          "A traffic cone",
          "A soup can",
          "A brick",
        ],
      },
      {
        type: "open-response",
        title: "Area and Volume — Unit Conversions",
        instruction: "Convert between units for area and volume.",
        prompts: [
          { text: "Convert each: (a) 3.5 m² to cm²  (b) 450 cm³ to mL  (c) 2.4 m³ to litres  (d) 12,500 cm² to m²  (e) 0.008 m³ to cm³. Show all conversion factors used.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Composite Volume — Add or Subtract?",
        instruction: "Circle whether you ADD or SUBTRACT volumes for each composite solid.",
        questions: [
          { prompt: "A rectangular block with a cylindrical hole drilled through it", options: ["Subtract the cylinder's volume from the prism's volume", "Add the volumes together", "Use only the prism's volume"] },
          { prompt: "A cone placed on top of a cylinder (like a rocket shape)", options: ["Add the cone and cylinder volumes", "Subtract the cone from the cylinder", "Ignore the cone"] },
          { prompt: "A hemispherical bowl (solid hemisphere minus inner hemisphere)", options: ["Subtract the inner hemisphere from the outer hemisphere volume", "Add both hemispheres", "Use only outer sphere volume"] },
        ],
      },
      {
        type: "home-activity",
        title: "Surface Area in the Kitchen",
        instruction: "Measure and calculate surface areas of real containers at home.",
        suggestions: [
          "Choose 3 tins from the pantry (e.g., soup, beans, tomatoes). Measure radius and height. Calculate the surface area of each. If the metal costs $0.002 per cm², estimate the material cost of each tin.",
          "Compare a cylindrical cup and a rectangular juice box that hold the same volume. Calculate the surface area of each. Which uses less material?",
          "Design your own container to hold exactly 1 litre (1,000 cm³). Choose any shape. Calculate its surface area. Try two different shapes and compare which uses less material.",
        ],
      },
      {
        type: "open-response",
        title: "Archimedes' Principle — Volume by Displacement",
        instruction: "Connect geometry to real measurement methods.",
        prompts: [
          { text: "A rock is placed in a rectangular tub of water (30 cm × 20 cm base). The water level rises by 0.4 cm. Calculate the volume of the rock in cm³. If the rock has a mass of 120 g, find its density in g/cm³.", type: "lines", lines: 5 },
          { text: "Explain why Archimedes' water displacement method works for measuring the volume of irregular objects but not for measuring the volume of a porous sponge (which absorbs water).", type: "lines", lines: 4 },
        ],
      },
      {
        type: "sorting",
        title: "Effect of Doubling a Dimension",
        instruction: "Sort each statement: True or False when only one dimension of a cylinder is doubled.",
        columns: ["True", "False"],
        items: [
          { label: "Doubling the radius doubles the volume" },
          { label: "Doubling the radius quadruples the volume (V = πr²h, so r² is affected)" },
          { label: "Doubling the height doubles the volume" },
          { label: "Doubling both radius and height multiplies volume by 8" },
          { label: "Doubling the radius doubles the curved surface area 2πrh" },
        ],
      },
      {
        type: "tally-chart",
        title: "Errors in Surface Area Calculations",
        instruction: "Tally the types of errors students made in a surface area assignment.",
        categories: [
          { label: "Wrong formula used", icon: "pencil", count: 7 },
          { label: "Forgot to exclude hidden faces", icon: "diamond", count: 9 },
          { label: "Unit conversion error", icon: "star", count: 5 },
          { label: "Arithmetic error", icon: "circle", count: 6 },
          { label: "Used diameter instead of radius", icon: "book", count: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Packaging Design Challenge",
        instruction: "Apply surface area and volume to a real design problem.",
        prompts: [
          { text: "A company sells 500 mL of juice. They can package it as: (a) a cylinder, (b) a rectangular prism with a square base. For each shape, find dimensions that minimise surface area. Compare the minimum surface areas and suggest which design is better.", type: "lines", lines: 9 },
        ],
      },
      {
        type: "matching",
        title: "Volume Formulas — Match the Shape",
        instruction: "Draw a line from each 3D shape to its correct volume formula.",
        left: ["Sphere", "Cylinder", "Cone", "Rectangular prism", "Triangular prism", "Square pyramid"],
        right: ["V = lwh", "V = πr²h", "V = ⅓πr²h", "V = 4/3 πr³", "V = ½bhl", "V = ⅓l²h"],
      },
      {
        type: "open-response",
        title: "Surface Area of Composite Solids",
        instruction: "Calculate the surface area of shapes made from two or more basic solids.",
        prompts: [
          { text: "A cylinder (r = 5 cm, h = 10 cm) has a hemisphere on top. Find total surface area, noting the joining circle is internal.", type: "lines", lines: 6 },
          { text: "A rectangular prism (l=8, w=4, h=3 cm) has a triangular prism on top (base 4, height 2 cm). Find the total external surface area.", type: "lines", lines: 6 },
          { text: "Explain why composite surface area is not simply the sum of the individual surface areas.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Units of Volume — Choose Correctly",
        instruction: "Circle the most appropriate unit for each measurement.",
        questions: [
          { prompt: "Volume of a swimming pool", options: ["kL", "mL", "cm³"] },
          { prompt: "Volume of a grain of rice", options: ["mm³", "L", "m³"] },
          { prompt: "Volume of water in a 600 mL bottle", options: ["600 cm³", "600 m³", "600 mm³"] },
          { prompt: "Volume of a shipping container", options: ["m³", "cm³", "mL"] },
        ],
      },
      {
        type: "sorting",
        title: "Surface Area or Volume?",
        instruction: "Sort each problem into whether you need Surface Area or Volume to solve it.",
        columns: ["Surface Area", "Volume"],
        items: [
          { label: "How much paint to cover a sphere?" },
          { label: "How much water fits in a tank?" },
          { label: "How much cardboard to make a box?" },
          { label: "How much soil fills a garden bed?" },
          { label: "How much foil wraps a cylinder?" },
          { label: "How much air fills a room?" },
          { label: "How much fabric covers a pillow?" },
          { label: "How many litres fit in a drum?" },
        ],
      },
      {
        type: "open-response",
        title: "Volume and Capacity Conversions",
        instruction: "Convert between units and solve capacity problems.",
        prompts: [
          { text: "Convert 2.5 m³ to litres. (1 m³ = 1000 L)", type: "lines", lines: 2 },
          { text: "A fish tank is 60 cm × 30 cm × 40 cm. Find its volume in cm³ and capacity in litres.", type: "lines", lines: 4 },
          { text: "A cone has radius 7 cm and height 15 cm. Find its volume to 2 decimal places.", type: "lines", lines: 4 },
          { text: "A factory fills cylindrical cans (r = 4 cm, h = 12 cm). How many cans does 10 L fill?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Formula Errors in Surface Area Problems",
        instruction: "Tally common mistakes made when calculating surface area.",
        categories: [
          { label: "Wrong formula selected", icon: "pencil", count: 5 },
          { label: "Forgot to double the base", icon: "square", count: 4 },
          { label: "Used diameter not radius", icon: "circle", count: 7 },
          { label: "Incorrect unit conversion", icon: "book", count: 3 },
          { label: "Added internal faces", icon: "triangle", count: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Spheres and Hemispheres",
        instruction: "Apply sphere formulas to solve these problems.",
        prompts: [
          { text: "Find the surface area of a sphere with radius 6 cm. Give your answer in terms of π and as a decimal.", type: "lines", lines: 4 },
          { text: "Find the volume of a hemisphere with diameter 10 cm.", type: "lines", lines: 4 },
          { text: "A sphere and a cube have the same surface area. Which has the greater volume? Test with numbers.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "home-activity",
        title: "Surface Area and Volume at Home",
        instruction: "Investigate surface area and volume using objects around your home.",
        suggestions: [
          "Find a tin can in your kitchen. Measure its radius and height, then calculate its surface area and volume.",
          "Compare two different-shaped containers that hold the same volume. Measure both and verify they hold the same amount.",
          "Design a box to hold 12 tennis balls in a 2×2×3 grid. What are the minimum dimensions? Calculate surface area.",
          "Research the surface-area-to-volume ratio and find out why it matters for cells, buildings, and packaging.",
          "Take photos of five 3D composite objects at home. Sketch and label each one.",
        ],
      },
      {
        type: "open-response",
        title: "Optimisation — Minimising Surface Area",
        instruction: "Investigate how shape affects efficiency.",
        prompts: [
          { text: "A cylindrical can must hold exactly 1 litre (1000 cm³). Write an expression for total surface area in terms of radius r only.", type: "lines", lines: 5 },
          { text: "Use trial and error to find the radius that minimises surface area. What is the optimal height?", type: "lines", lines: 5 },
          { text: "Why do aerosol cans and oil drums not follow the optimal proportions? Give two practical reasons.", type: "lines", lines: 3 },
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
      {
        type: "open-response",
        title: "Trigonometric Ratios — Define and Apply",
        instruction: "Define and apply sin, cos, and tan to right triangles.",
        prompts: [
          { text: "In a right triangle with hypotenuse 13 cm, one leg 5 cm, and other leg 12 cm, find:\n(a) sin, cos, tan of the smallest acute angle\n(b) sin, cos, tan of the largest acute angle\n(c) The angle values in degrees using inverse trig", type: "lines", lines: 7 },
          { text: "In a right triangle with one angle of 35° and hypotenuse 20 cm, find the lengths of both legs correct to 2 decimal places. Show which ratio you used and why.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "Trigonometric Ratio Definitions",
        instruction: "Draw a line from each trig ratio to its definition (relative to angle θ in a right triangle).",
        left: ["sin θ", "cos θ", "tan θ", "sin θ / cos θ", "1 / tan θ"],
        right: [
          "Adjacent ÷ Hypotenuse",
          "tan θ",
          "Adjacent ÷ Opposite",
          "Opposite ÷ Hypotenuse",
          "Opposite ÷ Adjacent",
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Missing Side — Correct Setup",
        instruction: "Circle the correct trigonometric equation to find the missing side x.",
        questions: [
          { prompt: "Angle = 40°, hypotenuse = 15 cm, find opposite side x:", options: ["x = 15 sin 40°", "x = 15 cos 40°", "x = 15 tan 40°"] },
          { prompt: "Angle = 55°, adjacent = 8 cm, find opposite side x:", options: ["x = 8 tan 55°", "x = 8 sin 55°", "x = 8 / sin 55°"] },
          { prompt: "Angle = 28°, adjacent = 12 cm, find hypotenuse x:", options: ["x = 12 / cos 28°", "x = 12 cos 28°", "x = 12 / sin 28°"] },
          { prompt: "Angle = 62°, hypotenuse = 25 cm, find adjacent side x:", options: ["x = 25 cos 62°", "x = 25 sin 62°", "x = 25 / cos 62°"] },
        ],
      },
      {
        type: "open-response",
        title: "Angles of Elevation and Depression",
        instruction: "Apply trigonometry to angles of elevation and depression.",
        prompts: [
          { text: "A person stands 40 m from the base of a building. They look up at the top at an angle of elevation of 52°. How tall is the building? Draw a diagram before calculating.", type: "lines", lines: 5 },
          { text: "A lighthouse is 60 m tall. The keeper sees a boat at an angle of depression of 18°. How far is the boat from the base of the lighthouse? Explain why the angle of depression equals the alternate angle of elevation.", type: "lines", lines: 5 },
          { text: "An aeroplane at altitude 3000 m starts descending at an angle of depression of 6°. Over what horizontal distance does it descend before reaching the runway? Give the answer in km.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "sorting",
        title: "Classify: Pythagoras or Trigonometry?",
        instruction: "Sort each problem: solved using Pythagoras' theorem or trigonometry (or both).",
        columns: ["Pythagoras Only", "Trigonometry Only", "Both Needed"],
        items: [
          { label: "Find the hypotenuse given two legs" },
          { label: "Find an angle given two sides" },
          { label: "Find a side given an angle and another side" },
          { label: "Find a missing leg given the hypotenuse and other leg" },
          { label: "Verify a set of three numbers is a Pythagorean triple" },
          { label: "Find all sides of a right triangle given one side and one acute angle" },
        ],
      },
      {
        type: "circle-correct",
        title: "Special Triangles — Exact Values",
        instruction: "Circle the exact trigonometric value for each ratio.",
        questions: [
          { prompt: "sin 30°", options: ["1/2", "√3/2", "1/√2"] },
          { prompt: "cos 60°", options: ["1/2", "√3/2", "√3"] },
          { prompt: "tan 45°", options: ["1", "√3", "1/√2"] },
          { prompt: "sin 60°", options: ["√3/2", "1/2", "1"] },
          { prompt: "cos 30°", options: ["√3/2", "1/2", "√3"] },
          { prompt: "tan 60°", options: ["√3", "1/√3", "1"] },
        ],
      },
      {
        type: "open-response",
        title: "Three-Dimensional Trigonometry",
        instruction: "Apply Pythagoras and trigonometry to 3D problems.",
        prompts: [
          { text: "A room is 8 m long, 5 m wide, and 3 m high. Calculate:\n(a) The diagonal of the floor.\n(b) The space diagonal from one corner of the floor to the opposite corner of the ceiling.\n(c) The angle the space diagonal makes with the floor.", type: "lines", lines: 7 },
          { text: "A vertical pole is 10 m tall. A wire is attached from the top to a point on level ground. The wire makes an angle of 65° with the ground. Find the length of the wire and the horizontal distance from the base to where the wire is anchored.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "Pythagorean Triples",
        instruction: "Draw a line from each set of three numbers to the statement that correctly describes it.",
        left: ["(3, 4, 5)", "(5, 12, 13)", "(8, 15, 17)", "(7, 24, 25)", "(6, 8, 10)"],
        right: [
          "Pythagorean triple (multiple of 3,4,5)",
          "Pythagorean triple: 7² + 24² = 25²",
          "Pythagorean triple: 3² + 4² = 5²",
          "Pythagorean triple: 5² + 12² = 13²",
          "Pythagorean triple: 8² + 15² = 17²",
        ],
      },
      {
        type: "open-response",
        title: "Bearings and Trigonometry",
        instruction: "Solve navigation problems using bearings and trigonometry.",
        prompts: [
          { text: "A ship sails 50 km on a bearing of 060° (N60°E). How far North and how far East of the starting point is the ship? Draw a diagram. Use sin and cos of 60°.", type: "lines", lines: 5 },
          { text: "From a point P, town A is 80 km due North. Town B is 60 km due East of P. Calculate:\n(a) The straight-line distance from A to B.\n(b) The bearing of B from A (measured clockwise from North).", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sequence",
        title: "Steps to Solve a Trigonometry Problem",
        instruction: "Put the steps in the correct order.",
        items: [
          { label: "Draw a clear diagram and label all known values" },
          { label: "Identify which sides are involved: opposite, adjacent, hypotenuse" },
          { label: "Choose the appropriate trig ratio (SOH CAH TOA)" },
          { label: "Write the equation with the unknown on one side" },
          { label: "Solve for the unknown side or angle" },
          { label: "Check the answer is reasonable (e.g. hypotenuse is longest)" },
        ],
      },
      {
        type: "open-response",
        title: "The Sine Rule — Introduction",
        instruction: "Apply the sine rule to non-right triangles.",
        prompts: [
          { text: "In triangle ABC: angle A = 40°, angle B = 75°, side a = 12 cm (opposite to A). Use the sine rule (a/sin A = b/sin B) to find side b. Then find angle C and side c.", type: "lines", lines: 6 },
          { text: "Explain when you would use the sine rule rather than standard right-triangle trigonometry. What must be true about the triangle?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "The Cosine Rule — Introduction",
        instruction: "Apply the cosine rule to find missing sides and angles.",
        prompts: [
          { text: "In triangle ABC: a = 8 cm, b = 11 cm, C = 60°. Use the cosine rule (c² = a² + b² − 2ab cos C) to find side c.", type: "lines", lines: 5 },
          { text: "In triangle ABC: a = 5 cm, b = 7 cm, c = 9 cm. Use the cosine rule in rearranged form to find angle C (cos C = (a² + b² − c²) / 2ab).", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Rule to Use?",
        instruction: "Circle the most appropriate rule for each triangle problem.",
        questions: [
          { prompt: "Triangle with one right angle — find a side given an angle and another side", options: ["SOH CAH TOA (right-triangle trig)", "Sine rule", "Cosine rule"] },
          { prompt: "Triangle with two sides and the included angle — find the third side", options: ["Cosine rule", "Sine rule", "Pythagoras"] },
          { prompt: "Triangle with two angles and one side — find another side", options: ["Sine rule", "Cosine rule", "Pythagoras"] },
          { prompt: "Triangle with all three sides — find an angle", options: ["Cosine rule (rearranged)", "Sine rule", "SOH CAH TOA"] },
        ],
      },
      {
        type: "home-activity",
        title: "Trigonometry in Your Environment",
        instruction: "Find and measure real-world angles using trigonometry.",
        suggestions: [
          "Use a protractor and ruler to measure the angle of elevation of the top of a building or tree. Measure the horizontal distance. Calculate the height using tan(angle).",
          "Look up a map of your town. Find two landmarks. Using a scaled map, measure the distance and calculate the bearing from one to the other.",
          "Stand at the base of a hill or ramp. Estimate the angle of the slope using a phone's inclinometer app. Measure the horizontal distance. Calculate the vertical height gained when walking up.",
        ],
      },
      {
        type: "sorting",
        title: "Trigonometry Applications — Field",
        instruction: "Sort each application into its field.",
        columns: ["Engineering/Construction", "Navigation", "Science/Astronomy"],
        items: [
          { label: "Calculating the height of a bridge tower" },
          { label: "Finding the bearing of a ship from a lighthouse" },
          { label: "Measuring the distance to a star using parallax" },
          { label: "Setting the angle of a roof rafter" },
          { label: "Calculating the altitude of the Sun at noon" },
          { label: "Designing the slope of a wheelchair ramp (1:14 ratio)" },
        ],
      },
      {
        type: "tally-chart",
        title: "Trigonometry Methods Used in a Problem Set",
        instruction: "Record how often each method was used across 40 problems.",
        categories: [
          { label: "SOH CAH TOA (right triangle)", icon: "triangle", count: 18 },
          { label: "Pythagoras' theorem", icon: "square", count: 10 },
          { label: "Sine rule", icon: "diamond", count: 7 },
          { label: "Cosine rule", icon: "star", count: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Area of a Non-Right Triangle",
        instruction: "Apply the trigonometric area formula.",
        prompts: [
          { text: "The area of any triangle can be found using: Area = ½ab sin C, where a and b are two sides and C is the included angle. For triangle with a = 9 cm, b = 14 cm, C = 70°: calculate the area. Verify by also finding the height using sin C and applying ½ × base × height.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "matching",
        title: "Trig Ratios — Match to Definition",
        instruction: "Draw a line from each trigonometric ratio to its definition.",
        left: ["sin θ", "cos θ", "tan θ", "cosec θ", "sec θ", "cot θ"],
        right: ["adjacent / hypotenuse", "1 / sin θ", "opposite / hypotenuse", "adjacent / opposite", "1 / cos θ", "opposite / adjacent"],
      },
      {
        type: "open-response",
        title: "Angles of Elevation and Depression",
        instruction: "Solve practical problems involving angles of elevation and depression.",
        prompts: [
          { text: "From the top of a 40 m cliff, the angle of depression to a boat is 25°. How far is the boat from the base of the cliff?", type: "lines", lines: 5 },
          { text: "A person stands 80 m from a building and measures the angle of elevation to the top as 52°. Find the height of the building.", type: "lines", lines: 4 },
          { text: "Explain the difference between angle of elevation and angle of depression with a diagram.", type: "box" },
        ],
      },
      {
        type: "circle-correct",
        title: "Exact Trigonometric Values",
        instruction: "Circle the correct exact value.",
        questions: [
          { prompt: "sin 30°", options: ["½", "√3/2", "1/√2"] },
          { prompt: "cos 60°", options: ["½", "√3/2", "0"] },
          { prompt: "tan 45°", options: ["1", "√3", "1/√3"] },
          { prompt: "sin 90°", options: ["1", "0", "√2/2"] },
          { prompt: "cos 0°", options: ["1", "0", "½"] },
        ],
      },
      {
        type: "sorting",
        title: "Which Trig Rule to Use?",
        instruction: "Sort each problem into which rule is most appropriate.",
        columns: ["SOH CAH TOA", "Sine Rule", "Cosine Rule"],
        items: [
          { label: "Right triangle: find the hypotenuse" },
          { label: "Two angles and one side given" },
          { label: "Three sides given, find an angle" },
          { label: "Right triangle: find an acute angle" },
          { label: "Two sides and included angle given" },
          { label: "Ambiguous case — two possible triangles" },
        ],
      },
      {
        type: "open-response",
        title: "Bearings and Navigation",
        instruction: "Apply trigonometry to navigation problems using bearings.",
        prompts: [
          { text: "A ship travels 50 km on a bearing of 060°T, then 80 km on a bearing of 150°T. Draw a diagram and find the direct distance back to the start.", type: "lines", lines: 6 },
          { text: "A plane flies 200 km due north then 120 km due east. Find the bearing of its final position from the starting point.", type: "lines", lines: 5 },
          { text: "Explain how bearings are measured and why they always have three digits.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tally-chart",
        title: "Trig Problem Types Practised",
        instruction: "Tally each type of trigonometry problem you solved this week.",
        categories: [
          { label: "Right-angled trig", icon: "triangle", count: 8 },
          { label: "Sine rule", icon: "star", count: 5 },
          { label: "Cosine rule", icon: "diamond", count: 4 },
          { label: "Bearing problems", icon: "circle", count: 3 },
          { label: "Area of triangle", icon: "square", count: 3 },
        ],
      },
      {
        type: "open-response",
        title: "3D Trigonometry Problems",
        instruction: "Apply trigonometry to three-dimensional scenarios.",
        prompts: [
          { text: "A 5 m ladder leans against a wall, making a 72° angle with the ground. How high up the wall does it reach?", type: "lines", lines: 4 },
          { text: "A rectangular room is 8 m long, 5 m wide and 3 m high. Find the length of the space diagonal (corner to corner).", type: "lines", lines: 5 },
          { text: "A cone has base radius 6 cm and slant height 10 cm. Find the vertical height and the half-angle at the apex.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "home-activity",
        title: "Trigonometry in Architecture and Nature",
        instruction: "Find trigonometry in the world around you.",
        suggestions: [
          "Measure the angle of inclination of a ramp, staircase, or driveway at your home using a protractor or phone app. Calculate the horizontal and vertical distances.",
          "Research how ancient Egyptians used trigonometry to build the pyramids. Write a brief summary.",
          "Look at a satellite image of your neighbourhood. Estimate the angle of a road on a hill using rise over run.",
          "Use a clinometer (or phone app) to measure the height of a tall tree or building near your home. Show all calculations.",
          "Draw a triangle representing a roof pitch (e.g. 30° angle). Calculate what materials would be needed for a 10 m wide house.",
        ],
      },
      {
        type: "open-response",
        title: "Unit Circle Introduction",
        instruction: "Begin exploring how trigonometry extends beyond right angles.",
        prompts: [
          { text: "Draw a unit circle (radius 1) and mark the angles 0°, 90°, 180°, 270°, 360°.", type: "box" },
          { text: "For a point on the unit circle at angle θ, the coordinates are (cos θ, sin θ). Use this to find cos 90° and sin 180°.", type: "lines", lines: 4 },
          { text: "In which quadrant is sin negative and cos positive? Explain.", type: "lines", lines: 3 },
          { text: "Use the unit circle to explain why sin²θ + cos²θ = 1 for any angle.", type: "lines", lines: 4 },
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
      {
        type: "open-response",
        title: "Percentage Error — Calculate and Interpret",
        instruction: "Calculate and interpret percentage error in measurement contexts.",
        prompts: [
          { text: "A student measures a desk as 1.42 m long. The true length is 1.45 m. Calculate:\n(a) Absolute error = |measured − true|\n(b) Relative error = absolute error ÷ true value\n(c) Percentage error = relative error × 100\n(d) Is this level of error acceptable for furniture? For precision engineering?", type: "lines", lines: 6 },
          { text: "A thermometer reads 36.2°C. The true temperature is 37.1°C. Calculate the percentage error. For medical purposes, is this acceptable?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "matching",
        title: "Measurement Terms — Definitions",
        instruction: "Draw a line from each measurement term to its correct definition.",
        left: ["Absolute error", "Relative error", "Percentage error", "Accuracy", "Precision"],
        right: [
          "How close measurements are to each other (repeatability)",
          "|Measured value − True value|",
          "How close a measurement is to the true value",
          "Absolute error ÷ True value",
          "(Absolute error ÷ True value) × 100%",
        ],
      },
      {
        type: "circle-correct",
        title: "Direct vs Inverse Proportion",
        instruction: "Circle whether each relationship is direct or inverse proportion.",
        questions: [
          { prompt: "The faster you drive, the less time to travel a fixed distance", options: ["Inverse proportion (speed × time = constant)", "Direct proportion", "Neither"] },
          { prompt: "The more workers on a job, the less time to complete it", options: ["Inverse proportion (workers × time = constant)", "Direct proportion", "Linear relationship"] },
          { prompt: "The further you drive, the more petrol you use", options: ["Direct proportion (petrol ∝ distance)", "Inverse proportion", "Neither"] },
          { prompt: "The longer a candle burns, the shorter it gets", options: ["Direct proportion (length decreases at constant rate)", "Inverse proportion", "Neither"] },
        ],
      },
      {
        type: "open-response",
        title: "Direct Proportion — Find the Constant",
        instruction: "Identify the constant of proportionality in real-world direct proportion relationships.",
        prompts: [
          { text: "A car uses 7.5 L of fuel per 100 km. (a) Is fuel consumption directly proportional to distance? (b) Write the equation F = kd and find k (in L/km). (c) How much fuel for a 420 km trip? (d) How far can you travel on a full 55 L tank?", type: "lines", lines: 6 },
          { text: "A metal wire stretches directly proportional to the force applied (Hooke's Law). When 20 N is applied, the wire stretches 4 mm. (a) Find the constant k (in mm/N). (b) How much does it stretch under 35 N? (c) What force causes 10 mm stretch?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sorting",
        title: "Classify the Proportion Type",
        instruction: "Sort each equation: Direct Proportion, Inverse Proportion, or Neither.",
        columns: ["Direct Proportion (y = kx)", "Inverse Proportion (y = k/x)", "Neither"],
        items: [
          { label: "y = 5x" },
          { label: "y = 12/x" },
          { label: "y = x² + 3" },
          { label: "xy = 24" },
          { label: "y = 3x − 2" },
          { label: "y = 0.8x" },
          { label: "y = x + 7" },
          { label: "y = 100/x²" },
        ],
      },
      {
        type: "circle-correct",
        title: "Compound Proportion",
        instruction: "Circle the correct answer for each compound proportion problem.",
        questions: [
          { prompt: "4 workers take 6 days. How long for 8 workers (same total work)?", options: ["3 days", "12 days", "6 days"] },
          { prompt: "A tap fills a tank in 3 hours. Two identical taps take:", options: ["1.5 hours", "6 hours", "3 hours"] },
          { prompt: "If 5 people eat 30 meals in 6 days, how many meals do 8 people eat in the same time?", options: ["48 meals", "24 meals", "38 meals"] },
          { prompt: "A job takes 12 workers 5 days. How many workers to finish in 3 days?", options: ["20 workers", "7.2 workers", "9 workers"] },
        ],
      },
      {
        type: "open-response",
        title: "Error Propagation in Multi-Step Calculations",
        instruction: "Investigate how errors compound through calculations.",
        prompts: [
          { text: "A rectangle is measured as 8.4 cm × 5.3 cm (each to 1 dp). The actual dimensions are 8.43 cm × 5.27 cm. Calculate:\n(a) Area using measured values\n(b) Area using actual values\n(c) Absolute error in area\n(d) Percentage error in area. Compare this to the percentage error in the individual measurements.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "open-response",
        title: "Proportion — Scale Drawings",
        instruction: "Apply proportion to interpret and create scale drawings.",
        prompts: [
          { text: "A floor plan uses a scale of 1:100. On the plan, the lounge room is 5.2 cm × 3.8 cm. Find the actual dimensions of the room in metres. What is the actual floor area?", type: "lines", lines: 4 },
          { text: "An architect wants to draw a room that is actually 7.5 m × 4.2 m on a plan with scale 1:50. What dimensions should be drawn on the plan in cm?", type: "lines", lines: 4 },
          { text: "A map has scale 1:250,000. The measured distance between two towns on the map is 6.8 cm. What is the real distance in km?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "matching",
        title: "Scale Notation",
        instruction: "Draw a line from each scale to its correct meaning.",
        left: ["1:100", "1:50,000", "1:10", "1:1,000,000", "5:1"],
        right: [
          "1 cm on drawing = 200 km in reality (topographic map)",
          "1 cm on drawing = 10 cm in reality (enlarged model)",
          "5 cm on drawing = 1 cm in reality (enlarged diagram)",
          "1 cm on drawing = 1 m in reality (floor plan)",
          "1 cm on drawing = 500 m in reality (street map)",
        ],
      },
      {
        type: "circle-correct",
        title: "Bounds of Accuracy",
        instruction: "Circle the correct upper and lower bounds for each measurement.",
        questions: [
          { prompt: "Distance measured as 240 m (to nearest 10 m). Bounds:", options: ["235 m ≤ d < 245 m", "230 m ≤ d < 250 m", "239 m ≤ d < 241 m"] },
          { prompt: "Mass 3.6 kg (to 1 dp). Bounds:", options: ["3.55 kg ≤ m < 3.65 kg", "3.5 kg ≤ m < 3.7 kg", "3.59 kg ≤ m < 3.61 kg"] },
          { prompt: "Time 15 s (to nearest second). Bounds:", options: ["14.5 s ≤ t < 15.5 s", "14 s ≤ t < 16 s", "14.9 s ≤ t < 15.1 s"] },
        ],
      },
      {
        type: "open-response",
        title: "Inverse Proportion — Applications",
        instruction: "Model and solve inverse proportion problems.",
        prompts: [
          { text: "The brightness of a light source follows the inverse square law: E = k/d². If E = 80 lux at d = 2 m, find:\n(a) The constant k.\n(b) The illuminance at d = 4 m.\n(c) At what distance is E = 5 lux?", type: "lines", lines: 6 },
          { text: "The pressure of a fixed amount of gas is inversely proportional to its volume (Boyle's Law: PV = k). If pressure is 120 kPa at volume 5 L, find: (a) k, (b) pressure when volume is 3 L, (c) volume when pressure is 200 kPa.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "home-activity",
        title: "Proportion in Cooking and Recipes",
        instruction: "Explore proportion in everyday cooking.",
        suggestions: [
          "Find a recipe that serves 4 people. Scale it up to serve 7 people. Identify which ingredients scale directly and which might not (e.g. spices, baking powder).",
          "Make a simple recipe (e.g. pancakes or biscuits) and deliberately measure one ingredient incorrectly by 20%. Record what happens. Calculate the percentage error in the final product.",
          "Research 'baker's percentages' — how bakers express all ingredients as a percentage of the flour weight. Try writing a bread recipe using baker's percentages.",
        ],
      },
      {
        type: "sorting",
        title: "Identify the Type of Variation",
        instruction: "Sort each situation into the correct type of variation.",
        columns: ["y ∝ x (Direct)", "y ∝ 1/x (Inverse)", "y ∝ x² (Square)"],
        items: [
          { label: "Kinetic energy of an object at various speeds: KE = ½mv²" },
          { label: "Time to travel a fixed distance at various speeds" },
          { label: "Area of a circle as radius increases: A = πr²" },
          { label: "Cost of petrol as litres purchased increases" },
          { label: "Pressure of a gas as volume increases (constant temperature)" },
          { label: "Distance fallen by an object under gravity: d = ½gt²" },
        ],
      },
      {
        type: "open-response",
        title: "Significant Figures in Measurement",
        instruction: "Apply significant figure rules to multi-step calculations.",
        prompts: [
          { text: "A cylinder has measured radius 4.5 cm and height 12.3 cm. Calculate the volume using the full calculator value, then round appropriately. How many significant figures should the final answer have? Why?", type: "lines", lines: 5 },
          { text: "A student calculates speed = distance ÷ time = 142.7 m ÷ 8.5 s. The measurements have 4 and 2 significant figures respectively. What should the final answer be? Explain the rule.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "tally-chart",
        title: "Sources of Measurement Error",
        instruction: "After conducting a measurement lab, tally each type of error observed.",
        categories: [
          { label: "Human parallax error", icon: "clock", count: 8 },
          { label: "Instrument calibration error", icon: "diamond", count: 3 },
          { label: "Environmental interference", icon: "sun", count: 5 },
          { label: "Random reading variation", icon: "star", count: 9 },
          { label: "Zero error on instrument", icon: "circle", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Proportional Reasoning — Design Problem",
        instruction: "Apply proportional reasoning to a design or engineering problem.",
        prompts: [
          { text: "A gear system has a driving gear with 24 teeth meshing with a driven gear of 36 teeth. (a) What is the gear ratio? (b) If the driving gear rotates at 200 rpm, how fast does the driven gear rotate? (c) If the load requires 50 Nm of torque, what torque must the motor provide? (Torques are inversely proportional to gear ratio.)", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Error Terminology — Match the Definition",
        instruction: "Draw a line from each error term to its correct definition.",
        left: ["Absolute error", "Relative error", "Percentage error", "Truncation error", "Rounding error", "Systematic error"],
        right: ["Error from cutting off digits", "Consistent bias in one direction", "Difference between measured and true value", "(Absolute error / True value) × 100", "Error from rounding to fewer decimal places", "Absolute error divided by true value"],
      },
      {
        type: "open-response",
        title: "Significant Figures in Science",
        instruction: "Apply significant figure rules to scientific measurements.",
        prompts: [
          { text: "Explain what 'significant figures' means and state the rules for counting them.", type: "lines", lines: 4 },
          { text: "Round each value to 3 significant figures: (a) 3.14159 (b) 0.002847 (c) 12,345 (d) 1.005", type: "lines", lines: 4 },
          { text: "A measurement is recorded as 3.70 m. Why is the trailing zero important?", type: "lines", lines: 3 },
          { text: "When adding 1.2 m + 3.45 m + 0.8 m, how many decimal places should your answer have? Explain.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Direct or Inverse Proportion?",
        instruction: "Circle whether the relationship is direct or inverse proportion.",
        questions: [
          { prompt: "Speed and time for a fixed distance", options: ["Inverse", "Direct", "Neither"] },
          { prompt: "Number of workers and time to complete a job", options: ["Inverse", "Direct", "Neither"] },
          { prompt: "Distance travelled and fuel used", options: ["Direct", "Inverse", "Neither"] },
          { prompt: "Price per item and number of items bought for a fixed budget", options: ["Inverse", "Direct", "Neither"] },
          { prompt: "Side length and area of a square", options: ["Neither (square)", "Direct", "Inverse"] },
        ],
      },
      {
        type: "sorting",
        title: "Classify Measurement Errors",
        instruction: "Sort each scenario into the type of error it represents.",
        columns: ["Rounding Error", "Systematic Error", "Random Error"],
        items: [
          { label: "A scale always reads 0.2 kg too heavy" },
          { label: "π approximated as 3.14" },
          { label: "Slightly different readings each time you measure the same rope" },
          { label: "A thermometer that always reads 1° too high" },
          { label: "Recording 2.34 as 2.3 m" },
          { label: "Wind causing variation in shot-put distances" },
        ],
      },
      {
        type: "open-response",
        title: "Propagation of Errors",
        instruction: "Investigate how errors compound through calculations.",
        prompts: [
          { text: "A rectangle is measured as 5.2 ± 0.1 cm by 8.4 ± 0.1 cm. Find the range of possible areas. What is the maximum absolute error in the area?", type: "lines", lines: 5 },
          { text: "If each of 10 measurements has a maximum error of 2 mm, what is the maximum total error when you add all 10 measurements?", type: "lines", lines: 3 },
          { text: "A scale is accurate to ±0.5 kg. How does repeated use affect trust in the combined weight of 5 items? Explain.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "tally-chart",
        title: "Types of Measurement Errors Found",
        instruction: "Tally each type of measurement error identified in your class exercises.",
        categories: [
          { label: "Rounding error", icon: "pencil", count: 6 },
          { label: "Systematic error", icon: "square", count: 3 },
          { label: "Random error", icon: "circle", count: 5 },
          { label: "Unit conversion error", icon: "book", count: 4 },
          { label: "Sig fig error", icon: "triangle", count: 7 },
        ],
      },
      {
        type: "open-response",
        title: "Scale Drawings and Maps",
        instruction: "Apply ratio and proportion to scale drawings.",
        prompts: [
          { text: "A map has a scale of 1:50,000. Two towns are 8.5 cm apart on the map. What is the real distance in km?", type: "lines", lines: 3 },
          { text: "A building is 25 m tall. You want to draw it at a scale of 1:200. What height should it be on your drawing?", type: "lines", lines: 3 },
          { text: "You draw a floor plan at 1:100. The living room is drawn as 4.2 cm × 3.6 cm. What are the real dimensions?", type: "lines", lines: 3 },
          { text: "Create a simple scale drawing of your bedroom using an appropriate scale. Label the scale and all dimensions.", type: "box" },
        ],
      },
      {
        type: "home-activity",
        title: "Measurement and Proportion Around the Home",
        instruction: "Apply measurement and proportion to everyday home tasks.",
        suggestions: [
          "Measure the dimensions of a room in your house. Calculate the floor area and the amount of flooring or paint needed (with 10% extra for waste).",
          "Find a recipe that serves 4 people. Scale it up to serve 11 people, showing all proportion calculations.",
          "Research the 'tolerance' used in a manufacturing process (e.g. car parts, electronics). Write about why tolerance matters.",
          "Measure your arm span and height. Calculate the ratio. Is it close to 1:1? Research da Vinci's 'Vitruvian Man' proportions.",
          "Find a map of your local area. Identify the scale and calculate the real-world distance between two landmarks.",
        ],
      },
      {
        type: "open-response",
        title: "Direct Proportion — Equations and Graphs",
        instruction: "Write and interpret direct proportion relationships.",
        prompts: [
          { text: "A car uses 8 L of fuel per 100 km. Write an equation for fuel used (F) in terms of distance (d). How much fuel for 340 km?", type: "lines", lines: 4 },
          { text: "The graph of a direct proportion is a straight line through the origin. Explain why this is so.", type: "lines", lines: 3 },
          { text: "If y is directly proportional to x and y = 15 when x = 3, find y when x = 8.", type: "lines", lines: 3 },
          { text: "If y is inversely proportional to x and y = 12 when x = 4, find y when x = 6.", type: "lines", lines: 3 },
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
      {
        type: "open-response",
        title: "Circle Theorems — State and Apply",
        instruction: "State and apply circle theorems to find unknown angles.",
        prompts: [
          { text: "In a circle with centre O, chord AB subtends an angle of 50° at the centre. (a) What angle does AB subtend at any point on the major arc? (b) What angle does AB subtend at any point on the minor arc? State the theorems used.", type: "lines", lines: 5 },
          { text: "ABCD is a cyclic quadrilateral. Angle A = 110°, angle B = 75°. Find angles C and D. State the theorem used.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "matching",
        title: "Circle Theorem Names",
        instruction: "Draw a line from each circle theorem to its statement.",
        left: [
          "Angle at centre theorem",
          "Angles in the same segment",
          "Angle in a semicircle",
          "Cyclic quadrilateral theorem",
          "Tangent-radius theorem",
        ],
        right: [
          "Opposite angles of a cyclic quadrilateral sum to 180°",
          "A tangent to a circle is perpendicular to the radius at the point of contact",
          "The angle subtended at the centre is twice the angle at the circumference",
          "Angles subtended by the same arc are equal",
          "An angle subtended by a diameter is always 90°",
        ],
      },
      {
        type: "circle-correct",
        title: "Apply Circle Theorems — Find the Angle",
        instruction: "Circle the correct missing angle.",
        questions: [
          { prompt: "Arc AB subtends 80° at the centre. The angle at the circumference on the major arc is:", options: ["40°", "80°", "160°"] },
          { prompt: "A diameter PQ subtends angle at point R on the circle. Angle PRQ =", options: ["90°", "180°", "45°"] },
          { prompt: "Cyclic quadrilateral with one angle of 115°. The opposite angle is:", options: ["65°", "115°", "70°"] },
          { prompt: "Tangent to circle at point T. Radius OT. Angle between tangent and radius =", options: ["90°", "180°", "45°"] },
        ],
      },
      {
        type: "sorting",
        title: "Classify: Congruent or Similar?",
        instruction: "Sort each statement about two triangles: Congruent, Similar, or Not Necessarily Either.",
        columns: ["Congruent", "Similar", "Not Necessarily Either"],
        items: [
          { label: "Same three side lengths (SSS)" },
          { label: "Same three angles (AAA)" },
          { label: "Same side ratios and corresponding angles equal (SAS similarity)" },
          { label: "Two sides and included angle equal (SAS)" },
          { label: "Two angles and a non-included side equal (AAS)" },
          { label: "All sides doubled in the same ratio" },
          { label: "Two sides equal but no information on angles" },
          { label: "Right angle, hypotenuse and one leg equal (RHS)" },
        ],
      },
      {
        type: "open-response",
        title: "Geometric Proof — Parallel Lines",
        instruction: "Write a structured geometric proof using parallel line theorems.",
        prompts: [
          { text: "Prove: If AB ∥ CD and a transversal crosses both, then co-interior (same-side interior) angles are supplementary.\n\nWrite the proof as a series of statements with reasons, using: alternate angles, corresponding angles, angles on a straight line.", type: "lines", lines: 8 },
          { text: "In a triangle ABC, prove that the exterior angle at C equals the sum of the two non-adjacent interior angles (angles A and B). Show a clear diagram and justify each step with a geometric reason.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Congruence Conditions",
        instruction: "Draw a line from each congruence condition abbreviation to its full name.",
        left: ["SSS", "SAS", "AAS", "RHS", "ASA"],
        right: [
          "Right angle, Hypotenuse, Side",
          "Angle, Side, Angle",
          "Angle, Angle, Side",
          "Side, Angle, Side",
          "Side, Side, Side",
        ],
      },
      {
        type: "open-response",
        title: "Similar Triangles — Find Missing Lengths",
        instruction: "Use similar triangles to find unknown lengths.",
        prompts: [
          { text: "Triangle PQR is similar to triangle STU. PQ = 6 cm, QR = 9 cm, ST = 4 cm. Find SU. Also find the ratio of the areas of the two triangles.", type: "lines", lines: 5 },
          { text: "A building casts a shadow of 18 m. At the same time, a 2 m vertical post casts a shadow of 1.5 m. Using similar triangles, calculate the height of the building.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Geometric Theorem",
        instruction: "Circle the theorem that justifies each statement.",
        questions: [
          { prompt: "In triangle ABC, angle A + angle B + angle C = 180°", options: ["Angle sum in a triangle", "Exterior angle theorem", "Pythagoras' theorem"] },
          { prompt: "AB ∥ CD; angles ACD and CAB are equal", options: ["Alternate angles (Z-angles)", "Co-interior angles", "Corresponding angles"] },
          { prompt: "All angles of an equilateral triangle equal 60°", options: ["Equilateral triangle property + angle sum", "Exterior angle theorem", "Base angles of isosceles triangle"] },
          { prompt: "In rhombus ABCD, the diagonals bisect each other at right angles", options: ["Property of a rhombus", "Property of any parallelogram", "Property of a rectangle only"] },
        ],
      },
      {
        type: "open-response",
        title: "Deductive Reasoning — Quadrilateral Properties",
        instruction: "Prove properties of quadrilaterals using deductive reasoning.",
        prompts: [
          { text: "Prove that the opposite angles of a parallelogram are equal. (Hint: use alternate interior angles and the definition of a parallelogram.)", type: "lines", lines: 6 },
          { text: "ABCD is a parallelogram. Prove that the diagonals bisect each other. (Hint: show triangles AOB and COD are congruent, where O is the intersection of the diagonals.)", type: "lines", lines: 7 },
        ],
      },
      {
        type: "sequence",
        title: "Steps for Writing a Geometric Proof",
        instruction: "Put the steps in the correct order for writing a formal geometric proof.",
        items: [
          { label: "State what is given (known information)" },
          { label: "State what is to be proved" },
          { label: "Draw and label a clear diagram" },
          { label: "Write a sequence of logical statements, each supported by a reason" },
          { label: "Each reason should cite a theorem, property, or given information" },
          { label: "Conclude with a QED or 'as required' statement" },
        ],
      },
      {
        type: "open-response",
        title: "Angle Properties — Polygons",
        instruction: "Apply angle sum formulas to polygons.",
        prompts: [
          { text: "Derive the formula for the interior angle sum of a polygon with n sides. (Hint: divide into triangles from one vertex.) Use this to find the angle sum of a hexagon, octagon, and decagon.", type: "lines", lines: 6 },
          { text: "A regular polygon has each interior angle measuring 156°. How many sides does it have? Show your method using the interior angle formula: interior angle = (n−2) × 180° ÷ n.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sorting",
        title: "Types of Reasoning",
        instruction: "Sort each example: Deductive Reasoning or Inductive Reasoning.",
        columns: ["Deductive Reasoning", "Inductive Reasoning"],
        items: [
          { label: "All squares have 4 equal sides. ABCD is a square. Therefore ABCD has 4 equal sides." },
          { label: "I've seen 20 swans and they were all white. I conclude all swans are white." },
          { label: "Angle sum of a triangle is 180°. Angle A = 70°, Angle B = 60°. Therefore Angle C = 50°." },
          { label: "The pattern 1, 4, 9, 16 suggests the next term is 25." },
          { label: "Pythagoras' theorem states a² + b² = c². These sides are given. Therefore the hypotenuse can be found." },
          { label: "Every time I eat sushi I feel sick. I conclude sushi makes me sick." },
        ],
      },
      {
        type: "home-activity",
        title: "Geometry in Architecture",
        instruction: "Find geometric theorems in real-world structures.",
        suggestions: [
          "Photograph or sketch a building, bridge, or roof structure near you. Identify at least 3 geometric shapes. Explain which geometric properties make each structure strong or aesthetically pleasing.",
          "Research 'geodesic domes' (like the Epcot sphere). Explain how triangles are used to create a curved dome shape and why triangles are structurally superior to squares in this application.",
          "Find a tiled floor or wall pattern. Identify which regular polygons tessellate and explain why (using interior angle sums).",
        ],
      },
      {
        type: "open-response",
        title: "Exterior Angle Theorem",
        instruction: "Apply and prove the exterior angle theorem.",
        prompts: [
          { text: "In triangle ABC, the exterior angle at vertex C is 130°. The interior angle at A is 55°. Find all angles in the triangle. Verify using both the exterior angle theorem and the angle sum theorem.", type: "lines", lines: 5 },
          { text: "Prove the exterior angle theorem: 'An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.' Use the angle sum of a triangle and angles on a straight line as your reasons.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "tally-chart",
        title: "Geometric Theorems Used in Proof Problems",
        instruction: "Record how often each theorem was used across a set of 30 proof problems.",
        categories: [
          { label: "Angle sum in triangle", icon: "triangle", count: 12 },
          { label: "Parallel line theorems", icon: "square", count: 9 },
          { label: "Circle theorems", icon: "circle", count: 5 },
          { label: "Congruence conditions", icon: "diamond", count: 4 },
        ],
      },
      {
        type: "matching",
        title: "Congruence Conditions — Match the Abbreviation",
        instruction: "Draw a line from each congruence abbreviation to what it stands for.",
        left: ["SSS", "SAS", "AAS", "RHS", "ASA"],
        right: ["Right angle, hypotenuse, one side equal", "Two angles and the included side", "Three pairs of equal sides", "Two sides and the included angle", "Two angles and any corresponding side"],
      },
      {
        type: "open-response",
        title: "Two-Column Geometric Proofs",
        instruction: "Write a formal two-column proof for each geometric statement.",
        prompts: [
          { text: "Prove that the base angles of an isosceles triangle are equal. Use a two-column format with statements and reasons.", type: "lines", lines: 8 },
          { text: "Prove that the sum of interior angles of a quadrilateral is 360°. (Hint: divide into two triangles.)", type: "lines", lines: 6 },
          { text: "Prove that opposite angles in a parallelogram are equal.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Geometric Theorem",
        instruction: "Circle the theorem that justifies each statement.",
        questions: [
          { prompt: "Angles on a straight line sum to 180°", options: ["Supplementary angles", "Vertically opposite", "Co-interior angles"] },
          { prompt: "If two parallel lines are cut by a transversal, alternate angles are equal", options: ["Alternate angles", "Co-interior angles", "Corresponding angles"] },
          { prompt: "The exterior angle of a triangle equals the sum of the two non-adjacent interior angles", options: ["Exterior angle theorem", "Angle sum theorem", "Base angle theorem"] },
          { prompt: "In a circle, the angle at the centre is twice the angle at the circumference subtended by the same arc", options: ["Centre angle theorem", "Tangent-chord theorem", "Cyclic quadrilateral theorem"] },
        ],
      },
      {
        type: "sorting",
        title: "Classify as Postulate, Theorem, or Definition",
        instruction: "Sort each geometric statement into the correct category.",
        columns: ["Postulate (assumed true)", "Theorem (must be proved)", "Definition (meaning)"],
        items: [
          { label: "Through two points, exactly one line can be drawn" },
          { label: "The angles of a triangle sum to 180°" },
          { label: "A right angle measures exactly 90°" },
          { label: "The Pythagorean theorem: a² + b² = c²" },
          { label: "A point has no dimension" },
          { label: "Opposite sides of a parallelogram are equal" },
        ],
      },
      {
        type: "open-response",
        title: "Similar Triangles — Writing Proofs",
        instruction: "Use similarity conditions (AA, SAS, SSS) to prove triangles are similar.",
        prompts: [
          { text: "Two triangles share an angle of 60°. In one triangle, the sides enclosing 60° are 6 cm and 9 cm. In the other, they are 4 cm and 6 cm. Prove they are similar and find the ratio of their areas.", type: "lines", lines: 6 },
          { text: "In a right triangle, the altitude from the right angle to the hypotenuse creates two smaller triangles. Prove they are each similar to the original triangle.", type: "lines", lines: 6 },
          { text: "Explain the difference between congruence and similarity in your own words.", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Circle Theorems in Action",
        instruction: "Apply circle theorems to find unknown angles and justify with reasons.",
        prompts: [
          { text: "An angle at the circumference is 35°, subtended by an arc. What is the angle at the centre subtended by the same arc? Name the theorem.", type: "lines", lines: 3 },
          { text: "ABCD is a cyclic quadrilateral with angle A = 110°. Find angle C. State the theorem used.", type: "lines", lines: 3 },
          { text: "A tangent touches a circle at point T. A chord from T makes an angle of 48° with the tangent. Find the angle in the alternate segment. Name the theorem.", type: "lines", lines: 3 },
          { text: "Prove that angles in the same segment of a circle are equal.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "home-activity",
        title: "Deductive Reasoning Beyond Geometry",
        instruction: "Practise logical reasoning in everyday and other academic contexts.",
        suggestions: [
          "Find an argument in a news article. Identify the premises and conclusion. Is it deductively valid? Write a brief analysis.",
          "Research Euclid's Elements — the first mathematical text to use rigorous deductive proofs. Write about one proposition and its proof.",
          "Create your own two-column proof for a geometric fact not covered in class. Present it to a family member.",
          "Play a logic puzzle game (e.g. Sudoku, nonograms) and write about how deductive reasoning helps solve it.",
          "Look for geometric shapes in architecture near you. Identify theorems that explain why the shapes are structurally sound.",
        ],
      },
      {
        type: "open-response",
        title: "Constructing Your Own Proof",
        instruction: "Create a chain of reasoning from given information to a conclusion.",
        prompts: [
          { text: "Given: Triangle ABC with AB = AC. M is the midpoint of BC. Prove: AM is perpendicular to BC. List all steps and reasons.", type: "lines", lines: 8 },
          { text: "Given: PQRS is a parallelogram. Prove: The diagonals bisect each other. Draw a diagram and write a full proof.", type: "lines", lines: 8 },
          { text: "Reflect: What is the most common mistake students make when writing geometric proofs? How can you avoid it?", type: "lines", lines: 3 },
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
      {
        type: "open-response",
        title: "Graph Theory Vocabulary",
        instruction: "Define and apply key graph theory vocabulary.",
        prompts: [
          { text: "For a network with 6 vertices and 9 edges, state:\n(a) What is meant by the 'degree' of a vertex?\n(b) What does Euler's handshaking lemma state? Verify it for this network.\n(c) What is the difference between a path, a trail, and a walk in a graph?", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Network Theory Terms — Definitions",
        instruction: "Draw a line from each graph theory term to its correct definition.",
        left: ["Vertex (node)", "Edge (arc)", "Degree of a vertex", "Connected graph", "Weighted graph"],
        right: [
          "A graph where every edge has a numerical value (e.g. distance, cost)",
          "The number of edges meeting at that vertex",
          "A graph where there is a path between every pair of vertices",
          "A point in the network",
          "A connection between two vertices",
        ],
      },
      {
        type: "circle-correct",
        title: "Eulerian Paths and Circuits",
        instruction: "Circle the correct answer about Eulerian paths and circuits.",
        questions: [
          { prompt: "An Eulerian circuit exists in a graph if and only if:", options: ["Every vertex has even degree", "Every vertex has odd degree", "The graph has exactly 2 odd-degree vertices"] },
          { prompt: "An Eulerian path (but not circuit) exists when:", options: ["Exactly 2 vertices have odd degree", "All vertices have even degree", "All vertices have odd degree"] },
          { prompt: "A graph has vertices with degrees 3, 3, 4, 4, 2. It:", options: ["Has an Eulerian path (two odd-degree vertices)", "Has an Eulerian circuit", "Has neither (more than 2 odd-degree vertices)"] },
          { prompt: "The Königsberg Bridge problem showed that the original layout had:", options: ["4 vertices with odd degree — no Euler path exists", "2 vertices with odd degree — Euler path exists", "All even-degree vertices — Euler circuit exists"] },
        ],
      },
      {
        type: "open-response",
        title: "Shortest Path — Dijkstra's Algorithm",
        instruction: "Apply Dijkstra's algorithm to find the shortest path.",
        prompts: [
          { text: "In a network of towns A–F, the edge weights represent travel time in minutes:\nA–B: 10, A–C: 15, B–D: 12, B–C: 5, C–E: 20, D–E: 8, D–F: 15, E–F: 10.\n\nFind the shortest path from A to F using Dijkstra's method. Show the table of visited vertices and distances at each step.", type: "box" },
        ],
      },
      {
        type: "sorting",
        title: "Connected vs Disconnected Graphs",
        instruction: "Sort each description: Connected Graph or Disconnected Graph.",
        columns: ["Connected Graph", "Disconnected Graph"],
        items: [
          { label: "All cities in a road network can be reached from any starting city" },
          { label: "Two groups of friends with no connections between groups (social network)" },
          { label: "An internet network where every device can communicate with every other" },
          { label: "An island that has no bridge or ferry to the mainland" },
          { label: "A family tree where all members trace to common ancestors" },
          { label: "A power grid with an isolated suburb" },
        ],
      },
      {
        type: "open-response",
        title: "Minimum Spanning Trees",
        instruction: "Find minimum spanning trees using Kruskal's algorithm.",
        prompts: [
          { text: "A telecommunications company needs to connect 5 buildings with fibre cable. Possible connections and costs (in $1,000): A–B: 3, A–C: 5, B–C: 4, B–D: 6, C–D: 2, C–E: 8, D–E: 4.\n\nUse Kruskal's algorithm (add edges in order of weight, skip if it creates a cycle) to find the minimum spanning tree. What is the total minimum cost?", type: "lines", lines: 7 },
        ],
      },
      {
        type: "circle-correct",
        title: "Hamiltonian Paths and Circuits",
        instruction: "Circle the correct answer about Hamiltonian paths and circuits.",
        questions: [
          { prompt: "A Hamiltonian circuit:", options: ["Visits every vertex exactly once and returns to the start", "Traverses every edge exactly once", "Takes the shortest possible route"] },
          { prompt: "The Travelling Salesman Problem (TSP) seeks:", options: ["The shortest Hamiltonian circuit visiting all cities", "The shortest Eulerian path", "The minimum spanning tree"] },
          { prompt: "Unlike Eulerian circuits, determining if a Hamiltonian circuit exists is:", options: ["Computationally very hard (NP-complete)", "Always easy to determine", "Solved using the handshaking lemma"] },
        ],
      },
      {
        type: "open-response",
        title: "Network Applications — Project Planning",
        instruction: "Apply network analysis to project scheduling.",
        prompts: [
          { text: "A building project has tasks with dependencies:\n• A (2 days): clear site\n• B (3 days): lay foundation — depends on A\n• C (1 day): order materials — can start with A\n• D (4 days): framing — depends on B and C\n• E (2 days): roofing — depends on D\n\nDraw the network diagram. Find the critical path (longest path from start to finish). What is the minimum project duration?", type: "box" },
        ],
      },
      {
        type: "matching",
        title: "Algorithm Name to Purpose",
        instruction: "Draw a line from each algorithm to its purpose in network analysis.",
        left: ["Dijkstra's algorithm", "Kruskal's algorithm", "Prim's algorithm", "Breadth-first search", "Depth-first search"],
        right: [
          "Find the minimum spanning tree by adding cheapest edges (no cycles)",
          "Explore as far as possible along each branch before backtracking",
          "Find the shortest path from one vertex to all others in a weighted graph",
          "Explore all neighbours at current depth before moving deeper",
          "Find the minimum spanning tree by growing from a starting vertex",
        ],
      },
      {
        type: "open-response",
        title: "Directed vs Undirected Graphs",
        instruction: "Compare directed (digraphs) and undirected graphs.",
        prompts: [
          { text: "Explain the difference between a directed and undirected graph. Give one real-world example of each. In what type of network is direction important? Why?", type: "lines", lines: 5 },
          { text: "Draw and describe a directed graph for: 'Stephanie follows Alice on social media, Alice follows Ben, Ben follows Stephanie, and Alice follows Cara.' Who has the most followers? Who follows the most people?", type: "lines", lines: 6 },
        ],
      },
      {
        type: "sorting",
        title: "Real-World Networks — Type Classification",
        instruction: "Sort each real-world network: Transport Network, Social Network, Communication Network, or Utility Network.",
        columns: ["Transport", "Social", "Communication", "Utility"],
        items: [
          { label: "The Melbourne tram network" },
          { label: "Instagram follower connections" },
          { label: "The internet's router connections" },
          { label: "Australia's electricity grid" },
          { label: "Flight routes between airports" },
          { label: "A LinkedIn professional network" },
          { label: "Mobile phone towers" },
          { label: "Natural gas pipelines" },
        ],
      },
      {
        type: "home-activity",
        title: "Map Your Local Network",
        instruction: "Create and analyse a real network from your local area.",
        suggestions: [
          "Draw a simplified road network of your suburb. Include 6–10 intersections as vertices and roads as edges. Estimate distances from Google Maps. Find the shortest route from your home to school using Dijkstra's method.",
          "Create a 'friend network' graph for your household or extended family. Determine the degree of each person. Is the network connected? Who has the highest degree?",
          "Research the concept of 'Six Degrees of Separation.' Test it informally by trying to connect yourself to a famous person through a chain of real acquaintances. How many steps does it take?",
        ],
      },
      {
        type: "open-response",
        title: "Graph Matrices — Adjacency Matrix",
        instruction: "Represent a graph using an adjacency matrix.",
        prompts: [
          { text: "A graph has 4 vertices: A, B, C, D. Edges: A–B, A–C, B–C, B–D, C–D. Write the 4×4 adjacency matrix for this undirected graph. What does the sum of each row represent? What does squaring the adjacency matrix tell you?", type: "box" },
        ],
      },
      {
        type: "tally-chart",
        title: "Network Applications Researched",
        instruction: "Tally the number of different network applications you research in one week.",
        categories: [
          { label: "Transport and logistics networks", icon: "car", count: 4 },
          { label: "Social media networks", icon: "star", count: 3 },
          { label: "Computer/internet networks", icon: "book", count: 3 },
          { label: "Biological networks (food webs, neurons)", icon: "tree", count: 2 },
          { label: "Utility networks (power, water)", icon: "house", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Degree Sequence and Euler's Theorem",
        instruction: "Use degree sequences to determine properties of a graph.",
        prompts: [
          { text: "A graph has degree sequence (2, 3, 3, 4, 4, 6). (a) How many vertices does it have? (b) Using the handshaking lemma, how many edges does it have? (c) Does it have an Eulerian path? An Eulerian circuit? Justify your answer.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Bipartite Graphs",
        instruction: "Circle the correct answer about bipartite graphs.",
        questions: [
          { prompt: "A bipartite graph has vertices split into two groups where:", options: ["Edges only connect vertices from different groups", "Edges only connect vertices within the same group", "All vertices have the same degree"] },
          { prompt: "A common real-world example of a bipartite graph is:", options: ["Job applicants and job positions (each applicant can apply for each position)", "A circular road network", "A balanced binary tree"] },
          { prompt: "Every bipartite graph:", options: ["Contains no odd-length cycles", "Contains no cycles at all", "Must have equal numbers of vertices in each group"] },
        ],
      },
      {
        type: "matching",
        title: "Network Vocabulary — Match the Term",
        instruction: "Draw a line from each network term to its correct definition.",
        left: ["Vertex", "Edge", "Degree", "Path", "Cycle", "Connected graph"],
        right: ["A closed path starting and ending at the same vertex", "Number of edges meeting at a vertex", "A node or point in a graph", "Every vertex can be reached from every other vertex", "A link between two vertices", "A sequence of vertices connected by edges"],
      },
      {
        type: "open-response",
        title: "Euler Paths and Circuits",
        instruction: "Apply Euler's theorems to real network problems.",
        prompts: [
          { text: "State Euler's theorem for the existence of an Euler circuit (a path that uses every edge exactly once and returns to the start).", type: "lines", lines: 3 },
          { text: "Draw a network with 5 vertices. Determine whether an Euler path or circuit exists. Justify your answer.", type: "box" },
          { text: "A town has 6 bridges connecting land masses. Apply Euler's theorem to determine if it is possible to cross all bridges exactly once. Show your working.", type: "lines", lines: 5 },
          { text: "Research the Königsberg Bridge Problem. Write a short paragraph about how Euler solved it and its significance.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "sorting",
        title: "Classify Network Problems",
        instruction: "Sort each problem into the type of network problem it represents.",
        columns: ["Shortest path", "Minimum spanning tree", "Euler path/circuit", "Hamiltonian path"],
        items: [
          { label: "Finding the cheapest way to connect all cities with cable" },
          { label: "GPS finding the fastest route between two suburbs" },
          { label: "A postman delivering to every street without repetition" },
          { label: "A salesperson visiting every city exactly once" },
          { label: "Linking all computers in a school with minimal wire" },
          { label: "Emergency vehicle finding quickest hospital route" },
        ],
      },
      {
        type: "open-response",
        title: "Minimum Spanning Trees",
        instruction: "Apply Kruskal's or Prim's algorithm to find minimum spanning trees.",
        prompts: [
          { text: "Explain what a spanning tree is and why 'minimum' spanning trees are useful in network design.", type: "lines", lines: 4 },
          { text: "A network has 5 cities with these connections and distances (in km): A–B: 4, A–C: 7, B–C: 3, B–D: 5, C–D: 2, D–E: 6, C–E: 8. Apply Kruskal's algorithm to find the minimum spanning tree. Show each step.", type: "lines", lines: 8 },
          { text: "What is the total length of your minimum spanning tree? How much distance is saved compared to connecting all cities in a chain?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tally-chart",
        title: "Network Problem Types Solved",
        instruction: "Tally each type of network problem you solved during this unit.",
        categories: [
          { label: "Shortest path", icon: "pencil", count: 6 },
          { label: "Euler path/circuit", icon: "circle", count: 4 },
          { label: "Minimum spanning tree", icon: "tree", count: 5 },
          { label: "Hamiltonian path", icon: "diamond", count: 3 },
          { label: "Graph coloring", icon: "star", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Adjacency Matrices",
        instruction: "Represent and interpret networks using adjacency matrices.",
        prompts: [
          { text: "Draw a simple graph with 4 vertices (A, B, C, D) with edges AB, BC, CD, and AD. Write its adjacency matrix.", type: "box" },
          { text: "What does the entry in row i, column j of an adjacency matrix tell you about the graph?", type: "lines", lines: 3 },
          { text: "If the adjacency matrix is symmetric, what does this tell you about the graph?", type: "lines", lines: 3 },
          { text: "For a weighted graph (e.g. road distances), how would you modify the adjacency matrix? Give an example.", type: "lines", lines: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Properties of Special Graphs",
        instruction: "Circle the correct answer about each special type of graph.",
        questions: [
          { prompt: "A complete graph with 5 vertices (K₅) has how many edges?", options: ["10", "5", "20", "15"] },
          { prompt: "A tree with 8 vertices has how many edges?", options: ["7", "8", "9", "6"] },
          { prompt: "Which graph type has exactly two possible vertex colourings?", options: ["Bipartite graph", "Complete graph", "Planar graph", "Regular graph"] },
          { prompt: "Euler's formula for connected planar graphs is:", options: ["V − E + F = 2", "V + E − F = 2", "V − E − F = 0", "V + E + F = 4"] },
        ],
      },
      {
        type: "home-activity",
        title: "Networks in Real Life",
        instruction: "Explore how network mathematics applies in technology, transport, and society.",
        suggestions: [
          "Draw a network diagram of the suburbs connected by train lines in your nearest city. Identify hubs (high-degree vertices).",
          "Research how the internet is structured as a network. Write a paragraph about redundancy and why it matters for reliability.",
          "Map the social connections in your household or class (who knows whom). Identify the most 'connected' person.",
          "Investigate how Google Maps or Apple Maps uses shortest-path algorithms. Write a brief summary of Dijkstra's algorithm.",
          "Research the 'six degrees of separation' idea. Conduct a small experiment by seeing how many steps connect you to a famous Australian.",
        ],
      },
      {
        type: "open-response",
        title: "Travelling Salesman Problem",
        instruction: "Explore one of the most famous unsolved problems in computer science.",
        prompts: [
          { text: "Describe the Travelling Salesman Problem (TSP) in your own words.", type: "lines", lines: 3 },
          { text: "For 4 cities A, B, C, D with distances AB=10, AC=15, AD=20, BC=12, BD=8, CD=18, find the shortest round trip visiting all cities. List all possible routes and their total distances.", type: "lines", lines: 8 },
          { text: "Explain why TSP becomes computationally hard as the number of cities grows. How many routes are there for n cities?", type: "lines", lines: 4 },
          { text: "Research one approximation algorithm used to solve TSP in practice. Describe how it works.", type: "lines", lines: 4 },
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
      {
        type: "open-response",
        title: "Correlation — Describe and Classify",
        instruction: "Describe scatter plot correlations accurately.",
        prompts: [
          { text: "For each pair of variables, state whether you would expect a positive correlation, negative correlation, or no correlation, and give a brief reason:\n(a) Study hours and exam score\n(b) Temperature and hot chocolate sales\n(c) Shoe size and intelligence\n(d) Height and weight of adults\n(e) Daily exercise and resting heart rate", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Scatter Plot Description to Correlation Type",
        instruction: "Draw a line from each scatter plot description to the correct correlation type.",
        left: [
          "Points cluster tightly from bottom-left to top-right",
          "Points are randomly scattered with no pattern",
          "Points cluster loosely from top-left to bottom-right",
          "Points curve upward steeply then level off",
          "Points cluster very tightly along a nearly perfect line (upward)",
        ],
        right: [
          "No correlation",
          "Non-linear relationship",
          "Strong positive linear correlation",
          "Weak negative linear correlation",
          "Moderate positive linear correlation",
        ],
      },
      {
        type: "open-response",
        title: "Line of Best Fit — Equation and Interpretation",
        instruction: "Find and interpret the equation of a line of best fit.",
        prompts: [
          { text: "A scatter plot shows study hours (x) and exam scores (y) for 10 students. The line of best fit passes through (2, 55) and (8, 85). Find:\n(a) The gradient (m) of the line of best fit.\n(b) The y-intercept.\n(c) The equation of the line.\n(d) Predict the score for a student who studies 5 hours.\n(e) Explain what the gradient means in context.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "circle-correct",
        title: "Correlation Coefficient r — Interpret",
        instruction: "Circle the correct interpretation of each correlation coefficient.",
        questions: [
          { prompt: "r = 0.92 means:", options: ["Strong positive linear correlation", "Weak positive linear correlation", "Strong negative linear correlation"] },
          { prompt: "r = −0.15 means:", options: ["Weak or no negative linear correlation", "Strong negative linear correlation", "Perfect negative correlation"] },
          { prompt: "r = 0 means:", options: ["No linear relationship (but could have non-linear)", "Perfect correlation", "Exactly half strong and half weak"] },
          { prompt: "r = −0.85 means:", options: ["Strong negative linear correlation", "Weak negative correlation", "No relationship"] },
        ],
      },
      {
        type: "sorting",
        title: "Causation vs Correlation",
        instruction: "Sort each example: Correlation implies Causation (likely), or Correlation does NOT imply Causation.",
        columns: ["Likely Causal", "Correlation but NOT Causation"],
        items: [
          { label: "Higher cigarette smoking rates → higher rates of lung cancer" },
          { label: "Ice cream sales and drowning rates both peak in summer" },
          { label: "More study hours → better exam scores" },
          { label: "Number of Nicolas Cage films per year correlates with pool drowning deaths" },
          { label: "Higher alcohol consumption → increased liver disease risk" },
          { label: "Countries with more TVs per capita have higher life expectancy (wealth confound)" },
        ],
      },
      {
        type: "open-response",
        title: "Residuals and Goodness of Fit",
        instruction: "Calculate and interpret residuals from a line of best fit.",
        prompts: [
          { text: "Using the model: Exam score = 5 × (study hours) + 45, calculate the residual for each student:\n(a) Studied 3 hrs, scored 62\n(b) Studied 6 hrs, scored 72\n(c) Studied 9 hrs, scored 92\n\nFor each, state whether the line overestimates or underestimates the actual score. What does a pattern of large residuals suggest about the model?", type: "lines", lines: 7 },
        ],
      },
      {
        type: "open-response",
        title: "Extrapolation — When to Be Careful",
        instruction: "Critique the use of extrapolation beyond the data range.",
        prompts: [
          { text: "A model for plant height over time gives h = 1.5t + 3 (h in cm, t in weeks) based on data from weeks 1–8. A student uses this to predict the height at week 52. (a) What prediction does the model give? (b) Explain why this prediction is likely unreliable. (c) What factors might limit the plant's actual growth?", type: "lines", lines: 5 },
          { text: "Explain the difference between interpolation and extrapolation. Which is more reliable and why? Give an example of each using a scatter plot context.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Scatter Plot Correlations in a Research Study",
        instruction: "Record correlation types observed across 20 variable pairs in a dataset.",
        categories: [
          { label: "Strong positive correlation (r > 0.7)", icon: "star", count: 5 },
          { label: "Moderate positive correlation (0.3 < r ≤ 0.7)", icon: "circle", count: 6 },
          { label: "Weak/no correlation (−0.3 ≤ r ≤ 0.3)", icon: "square", count: 4 },
          { label: "Moderate negative correlation (−0.7 ≤ r < −0.3)", icon: "diamond", count: 3 },
          { label: "Strong negative correlation (r < −0.7)", icon: "triangle", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Two-Way Tables — Bivariate Categorical Data",
        instruction: "Construct and analyse a two-way frequency table.",
        prompts: [
          { text: "100 students were surveyed about sport preferences and gender:\n• 60 are female: 25 prefer netball, 20 prefer swimming, 15 prefer soccer\n• 40 are male: 5 prefer netball, 10 prefer swimming, 25 prefer soccer\n\n(a) Construct the two-way table.\n(b) What percentage of females prefer swimming?\n(c) What percentage of soccer players are male?\n(d) Is there an association between gender and sport preference? Justify.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Outliers in Bivariate Data",
        instruction: "Identify and analyse outliers in scatter plots.",
        prompts: [
          { text: "Explain what an outlier means in the context of bivariate data. How does an outlier differ from a point that is merely an extreme value on one axis? Describe how outliers can affect the line of best fit and the correlation coefficient r.", type: "lines", lines: 5 },
          { text: "In a scatter plot of shoe size vs reading level for 30 children aged 5–15, there is a strong positive correlation (r = 0.82). Does this mean bigger feet cause better reading? Identify the confounding variable and explain how it creates a spurious correlation.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sorting",
        title: "Scatter Plot Variables — Independent vs Dependent",
        instruction: "Sort each variable: which is the independent variable (x-axis) and which is dependent (y-axis)?",
        columns: ["Independent Variable (x)", "Dependent Variable (y)"],
        items: [
          { label: "Hours of sunlight per day" },
          { label: "Crop yield per hectare" },
          { label: "Advertising spend ($)" },
          { label: "Monthly sales revenue ($)" },
          { label: "Daily temperature (°C)" },
          { label: "Number of beach visitors" },
          { label: "Years of experience" },
          { label: "Annual salary" },
        ],
      },
      {
        type: "home-activity",
        title: "Collect Your Own Bivariate Data",
        instruction: "Design and conduct a data collection activity to investigate bivariate relationships.",
        suggestions: [
          "Measure your reaction time (use an online reaction time test) 10 times at different times of day (morning, afternoon, evening). Record time-of-day and reaction time. Create a scatter plot and describe any pattern you see.",
          "Record the outside temperature and the number of people wearing jackets when you go out for 7 different days. Create a scatter plot. Is there a negative correlation?",
          "Survey at least 15 people on two numerical variables (e.g. hours of sleep vs energy rating out of 10). Plot the scatter graph and calculate the correlation coefficient using a spreadsheet.",
        ],
      },
      {
        type: "open-response",
        title: "Pearson's Correlation Coefficient — Calculation",
        instruction: "Calculate and interpret Pearson's correlation coefficient.",
        prompts: [
          { text: "For the 5 data points: (1,2), (2,4), (3,5), (4,4), (5,7):\n(a) Calculate the mean of x and the mean of y.\n(b) Calculate Σ(x − x̄)(y − ȳ), Σ(x − x̄)², and Σ(y − ȳ)².\n(c) Use r = Σ(x−x̄)(y−ȳ) / √[Σ(x−x̄)² × Σ(y−ȳ)²] to find r.\n(d) Interpret the value of r you found.", type: "box" },
        ],
      },
      {
        type: "sequence",
        title: "Steps to Draw a Line of Best Fit",
        instruction: "Put the steps in the correct order for drawing a line of best fit by eye.",
        items: [
          { label: "Plot all data points on a clearly labelled scatter graph" },
          { label: "Identify the overall trend (positive, negative, no correlation)" },
          { label: "Draw a straight line that best represents the trend" },
          { label: "Ensure approximately equal numbers of points above and below the line" },
          { label: "Make sure the line passes through or near the mean point (x̄, ȳ)" },
          { label: "Select two points on the line (not data points) to calculate the equation" },
        ],
      },
      {
        type: "open-response",
        title: "Critique a Statistical Claim",
        instruction: "Critically evaluate a statistical claim involving correlation.",
        prompts: [
          { text: "A newspaper headline reads: 'Research shows children who eat breakfast score higher on tests — proof that breakfast improves brain function.' Critically evaluate this claim. Identify: (a) what type of study this might be, (b) at least two confounding variables, (c) why correlation does not prove causation, (d) what type of study would be needed to establish causation.", type: "lines", lines: 7 },
        ],
      },
      {
        type: "matching",
        title: "Correlation Strength — Match the Description",
        instruction: "Draw a line from each correlation coefficient to its description.",
        left: ["r = 1.0", "r = 0.8", "r = 0.3", "r = 0", "r = −0.7", "r = −1.0"],
        right: ["Moderate negative correlation", "Perfect positive correlation", "No linear correlation", "Strong positive correlation", "Weak positive correlation", "Perfect negative correlation"],
      },
      {
        type: "open-response",
        title: "Least Squares Regression Line",
        instruction: "Understand and apply the line of best fit equation.",
        prompts: [
          { text: "Explain what the least squares regression line minimises. Why is it called 'least squares'?", type: "lines", lines: 3 },
          { text: "The regression line for study hours (x) vs test score (y) is ŷ = 42 + 8x. Interpret the slope and y-intercept in context.", type: "lines", lines: 4 },
          { text: "Predict the test score for a student who studies 6 hours. Is this interpolation or extrapolation?", type: "lines", lines: 3 },
          { text: "Predict the score for a student who studies 15 hours. Why should this prediction be treated with caution?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Correlation or Causation?",
        instruction: "Sort each claim as showing genuine causation or merely correlation.",
        columns: ["Likely causation", "Correlation only"],
        items: [
          { label: "Smoking and lung cancer" },
          { label: "Ice cream sales and drowning rates" },
          { label: "Exercise and improved cardiovascular health" },
          { label: "Number of TVs owned and life expectancy" },
          { label: "Vaccination and reduced disease incidence" },
          { label: "Shoe size and reading ability in children" },
        ],
      },
      {
        type: "open-response",
        title: "Collecting and Graphing Bivariate Data",
        instruction: "Design and carry out a small bivariate data investigation.",
        prompts: [
          { text: "Choose two variables you believe might be correlated (e.g. temperature and ice cream sales, hours of sleep and concentration). State a hypothesis about their relationship.", type: "lines", lines: 3 },
          { text: "Describe how you would collect data for your two variables. How many data points would you collect? What controls would you apply?", type: "lines", lines: 4 },
          { text: "Sketch the shape of the scatter plot you would expect to see if your hypothesis is correct.", type: "box" },
          { text: "How would you calculate r for your data? What value of r would support your hypothesis?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "tally-chart",
        title: "Scatter Plot Patterns Identified",
        instruction: "Tally each type of correlation pattern observed in the scatter plots you studied.",
        categories: [
          { label: "Strong positive", icon: "star", count: 5 },
          { label: "Weak positive", icon: "circle", count: 4 },
          { label: "Strong negative", icon: "triangle", count: 3 },
          { label: "Weak negative", icon: "diamond", count: 3 },
          { label: "No correlation", icon: "square", count: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Correct Interpretation",
        instruction: "Circle the best interpretation of each statistical statement.",
        questions: [
          { prompt: "r = 0.85 between height and shoe size means:", options: ["Height causes larger shoe size", "There is a strong positive linear association", "Knowing height exactly predicts shoe size"] },
          { prompt: "The slope of the regression line is 2.5. This means:", options: ["For each 1-unit increase in x, y increases by 2.5 on average", "x is 2.5 times y", "When x = 0, y = 2.5"] },
          { prompt: "An outlier in a scatter plot:", options: ["Can strongly affect the regression line", "Should always be deleted", "Proves the data is wrong"] },
          { prompt: "Extrapolation beyond the data range is unreliable because:", options: ["The linear pattern may not continue outside the data range", "The formula changes outside the range", "We run out of decimal places"] },
        ],
      },
      {
        type: "open-response",
        title: "Residuals and Model Quality",
        instruction: "Assess how well a regression model fits the data.",
        prompts: [
          { text: "Define a residual in the context of regression analysis.", type: "lines", lines: 2 },
          { text: "A student scores 68 on a test. The regression model predicts 74. Calculate and interpret the residual.", type: "lines", lines: 3 },
          { text: "If residuals are randomly scattered above and below the regression line, what does this suggest about the model?", type: "lines", lines: 3 },
          { text: "If residuals show a curved pattern, what does this suggest? What model might be better?", type: "lines", lines: 3 },
        ],
      },
      {
        type: "home-activity",
        title: "Bivariate Data Investigation at Home",
        instruction: "Design and conduct a small bivariate data study using household data.",
        suggestions: [
          "Collect data on two variables for at least 10 observations (e.g. temperature vs electricity bill for 10 months). Draw a scatter plot and estimate the correlation.",
          "Research a real Australian dataset (e.g. ABS website). Find two related variables and describe their correlation.",
          "Look at a health or fitness app on your phone or family member's phone. Find two variables that are tracked and describe any pattern you see.",
          "Research Simpson's Paradox — a situation where a trend appears in groups of data but disappears or reverses when groups are combined. Write a short summary.",
          "Find a scatter plot in a scientific journal or newspaper. Write three observations about the data shown, including the direction, strength, and any outliers.",
        ],
      },
      {
        type: "open-response",
        title: "Non-Linear Relationships in Data",
        instruction: "Recognise when a linear model is not appropriate.",
        prompts: [
          { text: "Sketch scatter plots showing: (a) a linear relationship, (b) a curved (quadratic) relationship, (c) no relationship. Label each.", type: "box" },
          { text: "Population data for a city over 10 years shows exponential growth. Why would a linear regression model be inappropriate here?", type: "lines", lines: 3 },
          { text: "What transformations (e.g. log, square root) could linearise an exponential relationship in data? Explain how you would apply them.", type: "lines", lines: 4 },
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
      {
        type: "open-response",
        title: "Misleading Statistics — Identify and Critique",
        instruction: "Identify and explain how statistics can be misleading.",
        prompts: [
          { text: "A shampoo advertisement claims: 'In a study of 50 people, 90% noticed reduced hair fall.' Identify at least 3 reasons this statistic might be misleading or unreliable.", type: "lines", lines: 5 },
          { text: "A newspaper reports: 'Hospital admissions rose by 50% during the long weekend.' The actual numbers were 6 admissions on a normal day and 9 on the long weekend. Explain why this is technically correct but potentially misleading.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "matching",
        title: "Statistical Bias Types",
        instruction: "Draw a line from each bias type to its correct description.",
        left: ["Sampling bias", "Confirmation bias", "Response bias", "Publication bias", "Leading question bias"],
        right: [
          "Surveys that phrase questions to lead respondents toward a particular answer",
          "Only reporting studies that show significant results, not null results",
          "When the sample does not represent the target population",
          "Respondents give answers they think the interviewer wants to hear",
          "Seeking or interpreting information that confirms existing beliefs",
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Misleading Graph Technique",
        instruction: "Circle the technique used to mislead in each graph description.",
        questions: [
          { prompt: "A bar chart where the y-axis starts at 95 instead of 0, making a small difference look huge:", options: ["Truncated axis", "Cherry-picking data", "Reversed axis"] },
          { prompt: "A line graph that shows data for only the past 3 months of a 10-year period where the trend favours the claim:", options: ["Cherry-picking data", "Misleading scale", "Wrong chart type"] },
          { prompt: "A 3D pie chart where the front slice appears much larger than its true proportion:", options: ["3D distortion/perspective", "Truncated axis", "Lack of labels"] },
          { prompt: "Comparing two bar charts with different y-axis scales placed side by side:", options: ["Inconsistent scales", "Cherry-picked data", "Reversed axis"] },
        ],
      },
      {
        type: "open-response",
        title: "Mean, Median, Mode — Which to Use?",
        instruction: "Choose and justify the appropriate measure of centre for each context.",
        prompts: [
          { text: "Household incomes in a suburb: $45,000; $52,000; $48,000; $51,000; $1,200,000. Calculate the mean, median, and mode. Which best represents a 'typical' household income? Why does the millionaire distort the mean?", type: "lines", lines: 6 },
          { text: "A shoe shop records sizes sold in one day: 8, 9, 9, 9, 10, 10, 11, 12, 13. Which measure of centre is most useful for the shop manager deciding which sizes to reorder? Why?", type: "lines", lines: 4 },
        ],
      },
      {
        type: "sorting",
        title: "Sample vs Population",
        instruction: "Sort each situation: describes a Sample or a Population.",
        columns: ["Sample", "Population"],
        items: [
          { label: "Testing 200 batteries from a production run of 50,000" },
          { label: "Recording the height of every student at a school for a study" },
          { label: "Surveying 1,000 voters to estimate election results for all voters" },
          { label: "Measuring the blood pressure of all patients in a clinic on one day" },
          { label: "Polling 500 teenagers about their music preferences" },
          { label: "Counting the exact number of goals scored in every AFL game in a season" },
        ],
      },
      {
        type: "open-response",
        title: "Sampling Methods — Compare and Evaluate",
        instruction: "Compare different sampling methods and their limitations.",
        prompts: [
          { text: "A researcher wants to estimate the average screen time of Year 10 students in Australia. Compare three sampling methods: (a) simple random sample, (b) stratified sample (by state), (c) convenience sample (asking students at the local library). For each, describe how the sample would be selected and identify a potential source of bias.", type: "lines", lines: 8 },
        ],
      },
      {
        type: "circle-correct",
        title: "Standard Deviation — Interpretation",
        instruction: "Circle the correct interpretation of standard deviation for each scenario.",
        questions: [
          { prompt: "Test scores: Mean = 70, SD = 3. This means:", options: ["Most scores are clustered closely around 70", "Most scores are spread far from 70", "The highest score is 73"] },
          { prompt: "Two classes: Class A has SD = 2, Class B has SD = 12 (both have mean 65). Which is more consistent?", options: ["Class A (smaller SD = less spread)", "Class B (larger SD = more consistent)", "Both are equally consistent"] },
          { prompt: "On a normal distribution, approximately 68% of data falls within:", options: ["1 standard deviation of the mean", "2 standard deviations of the mean", "3 standard deviations of the mean"] },
        ],
      },
      {
        type: "open-response",
        title: "Box Plots — Construct and Compare",
        instruction: "Construct box plots and use them for comparison.",
        prompts: [
          { text: "For the data set: 12, 15, 18, 21, 22, 23, 25, 28, 30, 35, 42\n(a) Find the median, Q1, Q3, minimum, and maximum.\n(b) Calculate the IQR.\n(c) Identify any outliers using: value < Q1 − 1.5×IQR or value > Q3 + 1.5×IQR.\n(d) Describe the shape of the distribution.", type: "lines", lines: 8 },
        ],
      },
      {
        type: "matching",
        title: "Graph Type to Best Use",
        instruction: "Draw a line from each graph type to its best statistical use.",
        left: ["Box plot", "Scatter plot", "Histogram", "Bar chart", "Pie chart"],
        right: [
          "Compare two categorical variables or show part-to-whole",
          "Show bivariate data and correlation between two numerical variables",
          "Compare distributions of numerical data (median, spread, outliers)",
          "Show the distribution and shape of continuous numerical data",
          "Compare counts or frequencies across categories",
        ],
      },
      {
        type: "open-response",
        title: "Statistical Reports — Evaluate and Rewrite",
        instruction: "Critically read and improve a flawed statistical report.",
        prompts: [
          { text: "A health department report states: '75% of people who ate our new supplement felt healthier.' The study involved 20 volunteers who self-reported their health. Identify at least 4 flaws in this study (sample size, self-report, no control group, etc.). Suggest how each flaw could be corrected for a more valid study.", type: "lines", lines: 8 },
        ],
      },
      {
        type: "home-activity",
        title: "Media Statistical Analysis",
        instruction: "Critically analyse statistics used in Australian media.",
        suggestions: [
          "Find a news article that uses a statistic to support a claim (e.g. about health, crime, economy). Identify: the statistic used, the source, the sample size if given, and any potential bias or missing context. Write a one-paragraph critical evaluation.",
          "Watch a political advertisement or read a political press release. Identify every statistical claim made. Look up the original source (if provided) and check whether the statistics are being used accurately and in context.",
          "Compare how two different Australian newspapers report the same statistic or survey result. Do they emphasise different aspects? Do they use different chart types or scales?",
        ],
      },
      {
        type: "open-response",
        title: "Skewness and Data Distribution",
        instruction: "Describe and interpret skewed distributions.",
        prompts: [
          { text: "Explain the difference between a positively skewed and negatively skewed distribution. For each type, state: (a) the shape of the histogram, (b) which measure (mean or median) is larger, (c) give a real-world example of data with that skew.", type: "lines", lines: 6 },
          { text: "House prices in a suburb have mean $850,000 and median $720,000. (a) Is the distribution positively or negatively skewed? (b) Which measure better represents the 'typical' house price? (c) What kind of data point would cause this skew?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sorting",
        title: "Classify: Good Sampling Practice vs Poor Sampling Practice",
        instruction: "Sort each practice into Good or Poor sampling practice.",
        columns: ["Good Practice", "Poor Practice"],
        items: [
          { label: "Using a random number generator to select participants" },
          { label: "Surveying only your own friend group about social media habits" },
          { label: "Stratifying a sample by age and gender to match the population" },
          { label: "Asking leading questions in a survey ('Don't you agree that...')" },
          { label: "Using a large enough sample to reduce chance variation" },
          { label: "Voluntary response survey on a political website" },
        ],
      },
      {
        type: "tally-chart",
        title: "Types of Statistical Errors Found in Media",
        instruction: "Tally each type of statistical error you find while reviewing 20 news articles or reports.",
        categories: [
          { label: "Misleading graph (truncated axis, 3D)", icon: "diamond", count: 5 },
          { label: "Small or biased sample", icon: "star", count: 6 },
          { label: "Confusing correlation with causation", icon: "book", count: 4 },
          { label: "Missing context or baseline", icon: "circle", count: 3 },
          { label: "Cherry-picked data range", icon: "pencil", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Interquartile Range and Outliers",
        instruction: "Use IQR to identify and reason about outliers.",
        prompts: [
          { text: "A data set of daily step counts has Q1 = 5,200, Q3 = 10,800. (a) Calculate the IQR. (b) Calculate the outlier boundaries (Q1 − 1.5×IQR and Q3 + 1.5×IQR). (c) A value of 25,000 steps is recorded. Is it an outlier? Should it be excluded from the analysis? Justify your answer.", type: "lines", lines: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Statistical Literacy — True or False",
        instruction: "Circle True or False for each statement about statistical practice.",
        questions: [
          { prompt: "A larger sample size always eliminates bias", options: ["False — a biased sampling method stays biased even with large samples", "True — more data always reduces all errors"] },
          { prompt: "A statistically significant result means the result is practically important", options: ["False — significance depends on sample size; a tiny effect can be significant with a huge sample", "True — statistical significance equals real-world importance"] },
          { prompt: "The median is always a better measure of centre than the mean", options: ["False — the mean is better for symmetric distributions without outliers", "True — the median is always better"] },
          { prompt: "A survey with 100% response rate guarantees unbiased results", options: ["False — bias can come from question wording, sample selection, and other sources", "True — 100% response eliminates bias"] },
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
      {
        type: "open-response",
        title: "Probability Basics — Review and Extension",
        instruction: "Review fundamental probability concepts and extend to Year 10 contexts.",
        prompts: [
          { text: "A bag contains 5 red, 3 blue, and 2 green marbles. A marble is drawn at random. Calculate:\n(a) P(red)\n(b) P(not green)\n(c) P(red or blue)\n(d) Two marbles are drawn without replacement. P(both red)\n(e) P(first red, second blue)", type: "lines", lines: 6 },
        ],
      },
      {
        type: "matching",
        title: "Probability Notation",
        instruction: "Draw a line from each probability notation to its meaning.",
        left: ["P(A)", "P(A')", "P(A ∩ B)", "P(A ∪ B)", "P(A | B)"],
        right: [
          "Probability that both A and B occur",
          "Probability that at least one of A or B occurs",
          "Probability of event A occurring",
          "Probability of A given that B has already occurred",
          "Probability that A does NOT occur (complement)",
        ],
      },
      {
        type: "circle-correct",
        title: "Mutually Exclusive Events",
        instruction: "Circle the correct answer about mutually exclusive events.",
        questions: [
          { prompt: "Events A and B are mutually exclusive. P(A ∪ B) =", options: ["P(A) + P(B)", "P(A) + P(B) − P(A ∩ B)", "P(A) × P(B)"] },
          { prompt: "Rolling a 3 and rolling a 5 on a single die are:", options: ["Mutually exclusive (can't both happen)", "Not mutually exclusive", "Independent events"] },
          { prompt: "If P(A) = 0.4, P(B) = 0.3 and A, B are mutually exclusive, P(A ∪ B) =", options: ["0.7", "0.12", "0.58"] },
          { prompt: "Getting a head and getting a tail on a single coin flip are:", options: ["Mutually exclusive AND exhaustive", "Independent", "Not mutually exclusive"] },
        ],
      },
      {
        type: "open-response",
        title: "Tree Diagrams — Multi-Stage Events",
        instruction: "Use a tree diagram to calculate compound probabilities.",
        prompts: [
          { text: "A box has 4 red and 6 blue balls. Two balls are drawn without replacement.\n(a) Draw a complete probability tree diagram.\n(b) Calculate P(both red).\n(c) Calculate P(exactly one of each colour).\n(d) Calculate P(at least one blue).\n(e) Verify that all branch probabilities at the second stage sum to 1.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Conditional Probability — Bayes' Thinking",
        instruction: "Apply conditional probability reasoning to real-world contexts.",
        prompts: [
          { text: "A disease affects 1% of a population. A test for the disease is 95% accurate for those who have it, and 90% accurate for those who don't (10% false positive rate).\n\nIn a group of 1,000 people:\n(a) How many have the disease?\n(b) Of those, how many test positive?\n(c) Of those without the disease, how many test positive?\n(d) If a person tests positive, what is the probability they actually have the disease?\n(e) Explain why this result surprises most people.", type: "box" },
        ],
      },
      {
        type: "sorting",
        title: "Independent vs Dependent Events",
        instruction: "Sort each pair of events: Independent or Dependent.",
        columns: ["Independent Events", "Dependent Events"],
        items: [
          { label: "Flipping a coin twice" },
          { label: "Drawing two cards from a deck without replacement" },
          { label: "Rolling two dice simultaneously" },
          { label: "Selecting two raffle tickets from the same pool without replacement" },
          { label: "The weather today and yesterday's lottery result" },
          { label: "Drawing a marble, then drawing another without replacing the first" },
        ],
      },
      {
        type: "open-response",
        title: "Venn Diagrams — Two Events",
        instruction: "Use Venn diagrams to organise probability calculations.",
        prompts: [
          { text: "In a class of 30 students: 18 study French, 14 study Spanish, 6 study both.\n(a) Draw a Venn diagram.\n(b) How many study French only? Spanish only? Neither?\n(c) Find P(French | Spanish) — given a student studies Spanish, what is the probability they also study French?\n(d) Are studying French and studying Spanish independent events? Show mathematically.", type: "box" },
        ],
      },
      {
        type: "circle-correct",
        title: "Sample Space and Complementary Events",
        instruction: "Circle the correct use of the complement rule.",
        questions: [
          { prompt: "P(at least one head in 3 flips) = 1 − P(no heads). P(no heads) =", options: ["(1/2)³ = 1/8, so P(at least one) = 7/8", "(1/2)² = 1/4, so P = 3/4", "3/4"] },
          { prompt: "P(at least one 6 in two dice rolls) = 1 − P(no 6). P(no 6 in two rolls) =", options: ["(5/6)² = 25/36, so P(at least one 6) = 11/36", "(1/6)² = 1/36", "(5/6) = 5/6"] },
          { prompt: "P(not red) when P(red) = 0.35 is:", options: ["0.65", "1.35", "0.35"] },
        ],
      },
      {
        type: "open-response",
        title: "Expected Value",
        instruction: "Calculate and interpret expected value in probability contexts.",
        prompts: [
          { text: "A game costs $5 to play. You roll a die: if you roll a 6, you win $20; if you roll a 5, you win $10; otherwise you win nothing.\n(a) Calculate the expected winnings from one game.\n(b) Calculate the expected profit/loss per game (including the $5 cost).\n(c) Is this a fair game? Would you play it? Justify mathematically.", type: "lines", lines: 7 },
          { text: "An insurance company charges $300/year for a policy. They estimate a 2% chance of paying out $8,000 and a 0.5% chance of paying out $50,000 in any given year. Calculate the company's expected profit per policy per year.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "sequence",
        title: "Steps to Solve a Conditional Probability Problem",
        instruction: "Put the steps in the correct order.",
        items: [
          { label: "Identify the condition (the given event B)" },
          { label: "Restrict the sample space to only the outcomes where B has occurred" },
          { label: "Count or calculate the probability of A within this restricted space" },
          { label: "Apply the formula: P(A|B) = P(A ∩ B) / P(B)" },
          { label: "Verify: P(A|B) should be between 0 and 1" },
          { label: "Interpret the result in the context of the problem" },
        ],
      },
      {
        type: "matching",
        title: "Probability Rules — Formula to Name",
        instruction: "Draw a line from each probability formula to its correct name.",
        left: [
          "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
          "P(A ∩ B) = P(A) × P(B|A)",
          "P(A|B) = P(A ∩ B) / P(B)",
          "P(A) + P(A') = 1",
          "P(A ∩ B) = P(A) × P(B) [if independent]",
        ],
        right: [
          "Complement rule",
          "General addition rule",
          "Multiplication rule for independent events",
          "Conditional probability formula",
          "General multiplication rule",
        ],
      },
      {
        type: "open-response",
        title: "Simulations in Probability",
        instruction: "Design and interpret probability simulations.",
        prompts: [
          { text: "Describe how you would use a random number generator to simulate 1,000 trials of drawing 2 cards (with replacement) and counting how often both cards are the same suit. What result would you expect theoretically? [P(same suit) = 4 × (13/52)² = 4 × (1/4)² = 1/4]", type: "lines", lines: 5 },
          { text: "Explain why simulations are useful in probability, especially for complex events where the theoretical calculation is difficult. Give an example of a probability problem (e.g. the birthday problem) where simulation is practical but exact calculation is complex.", type: "lines", lines: 5 },
        ],
      },
      {
        type: "open-response",
        title: "Two-Way Tables and Conditional Probability",
        instruction: "Extract conditional probabilities from two-way tables.",
        prompts: [
          { text: "A survey of 500 people asked whether they exercise regularly and whether they have high blood pressure:\n\n|                  | High BP | Normal BP | Total |\n|------------------|---------|-----------|-------|\n| Exercises        |   20    |   230     |  250  |\n| Does not exercise|   80    |   170     |  250  |\n| Total            |  100    |   400     |  500  |\n\n(a) P(high BP | exercises)\n(b) P(high BP | does not exercise)\n(c) P(exercises | high BP)\n(d) Are exercise and blood pressure independent? Show mathematically.", type: "box" },
        ],
      },
      {
        type: "home-activity",
        title: "Probability in Games and Gambling",
        instruction: "Investigate probability in everyday games.",
        suggestions: [
          "Research the probability of winning in a common card or board game (e.g. Blackjack, Snakes and Ladders, Monopoly). Calculate at least one key probability and explain how it affects strategy.",
          "Explore the Australian lottery (e.g. Lotto). Find the probability of winning the jackpot. Calculate the expected value of a ticket if the jackpot is $5 million and a ticket costs $1.35. Is playing the lottery a good financial decision?",
          "Play 30 rounds of a simple coin/dice game with a family member. Record results. Calculate experimental probability. Compare to theoretical probability. Discuss why they may differ.",
        ],
      },
      {
        type: "open-response",
        title: "Permutations and Combinations — Introduction",
        instruction: "Apply counting principles to probability problems.",
        prompts: [
          { text: "How many different 3-letter arrangements can be made from the letters A, B, C, D, E (no repeats)? Explain the difference between a permutation (order matters) and a combination (order doesn't matter). Calculate how many 3-letter combinations (not arrangements) can be chosen.", type: "lines", lines: 6 },
          { text: "A committee of 3 people is chosen from a group of 8. Using combinations (C(8,3) = 8!/(3!×5!)), calculate the number of possible committees. What is the probability that two specific people (Ali and Ben) are both on the committee?", type: "lines", lines: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Probability Values — Possible or Impossible?",
        instruction: "Circle whether each probability value is Possible or Impossible.",
        questions: [
          { prompt: "P(A) = 1.2", options: ["Impossible — probability cannot exceed 1", "Possible", "Possible only in conditional probability"] },
          { prompt: "P(A) = 0", options: ["Possible — means the event cannot occur", "Impossible", "Possible only for infinite sample spaces"] },
          { prompt: "P(A) + P(A') = 1.5", options: ["Impossible — complement rule requires they sum to exactly 1", "Possible if events overlap", "Possible"] },
          { prompt: "P(A|B) = 0.7 when P(A) = 0.3", options: ["Possible — conditional probability can be higher than unconditional", "Impossible", "Possible only if A and B are independent"] },
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
