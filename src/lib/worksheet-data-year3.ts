import type { WorksheetItem } from "./worksheet-types";

export const year3MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Numbers Beyond 10,000 ──────────────────────────
  {
    slug: "numbers-beyond-10000",
    title: "Numbers Beyond 10,000",
    strand: "Number",
    description:
      "Order and represent natural numbers beyond 10,000",
    activities: [
      // ─── Easy (~30 activities) ───
      {
        type: "number-trace",
        title: "Trace Four-Digit Numbers",
        instruction: "Trace each number carefully. Say the number out loud as you write it!",
        numbers: [1000, 2500, 3750, 5000, 7500, 8000],
      },
      {
        type: "number-trace",
        title: "Trace More Four-Digit Numbers",
        instruction: "Trace these numbers. Can you read each one?",
        numbers: [1234, 2468, 3690, 4567, 6789],
      },
      {
        type: "sequence",
        title: "Count by 1,000s",
        instruction: "Fill in the missing numbers. Count by thousands!",
        sequences: [
          { items: [1000, 2000, 0, 4000, 5000], answer: [3000] },
          { items: [5000, 0, 7000, 8000, 0], answer: [6000, 9000] },
          { items: [0, 3000, 4000, 0, 6000], answer: [2000, 5000] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 1,000s — Different Starts",
        instruction: "Keep counting by thousands!",
        sequences: [
          { items: [3000, 4000, 0, 6000, 0], answer: [5000, 7000] },
          { items: [0, 2000, 3000, 0, 5000], answer: [1000, 4000] },
          { items: [6000, 0, 8000, 0, 10000], answer: [7000, 9000] },
        ],
      },
      {
        type: "matching",
        title: "Match Number Words to Numerals",
        instruction: "Draw a line from each number word to its numeral.",
        left: ["three thousand five hundred", "eight thousand two hundred", "five thousand and sixty", "ten thousand"],
        right: ["10000", "3500", "5060", "8200"],
      },
      {
        type: "matching",
        title: "Match More Number Words",
        instruction: "Draw a line from each number word to its numeral.",
        left: ["six thousand four hundred", "two thousand and nine", "nine thousand seven hundred", "four thousand three hundred fifty"],
        right: ["4350", "6400", "9700", "2009"],
      },
      {
        type: "circle-correct",
        title: "Read the Number",
        instruction: "Circle the correct way to read each number.",
        questions: [
          { prompt: "4500", options: ["four thousand five hundred", "forty-five hundred", "four hundred fifty"] },
          { prompt: "7030", options: ["seven hundred thirty", "seven thousand and thirty", "seventy thousand three"] },
          { prompt: "6008", options: ["six thousand and eight", "six hundred and eight", "sixty thousand eight"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Read These Numbers Too",
        instruction: "Circle the correct way to say each number.",
        questions: [
          { prompt: "3200", options: ["three thousand two hundred", "thirty-two hundred", "three hundred twenty"] },
          { prompt: "9001", options: ["nine thousand and one", "nine hundred one", "ninety thousand one"] },
          { prompt: "5500", options: ["five thousand five hundred", "fifty-five hundred", "five hundred fifty"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Groups of Thousands",
        instruction: "Each star represents 1,000. Count the stars and write the total.",
        rows: [
          { object: "star", count: 3 },
          { object: "star", count: 5 },
          { object: "star", count: 7 },
          { object: "star", count: 9 },
        ],
      },
      {
        type: "count-objects",
        title: "Count More Thousands",
        instruction: "Each apple represents 1,000. Count the apples and write the total.",
        rows: [
          { object: "apple", count: 4 },
          { object: "apple", count: 6 },
          { object: "apple", count: 8 },
          { object: "apple", count: 10 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Bigger?",
        instruction: "Circle the bigger number in each pair.",
        questions: [
          { prompt: "Which is bigger?", options: ["2500", "2050"] },
          { prompt: "Which is bigger?", options: ["4100", "4010"] },
          { prompt: "Which is bigger?", options: ["6300", "6030"] },
          { prompt: "Which is bigger?", options: ["8700", "8070"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Smaller?",
        instruction: "Circle the smaller number in each pair.",
        questions: [
          { prompt: "Which is smaller?", options: ["1200", "1020"] },
          { prompt: "Which is smaller?", options: ["3450", "3540"] },
          { prompt: "Which is smaller?", options: ["5600", "5060"] },
          { prompt: "Which is smaller?", options: ["7890", "7980"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Place Value: Thousands and Hundreds",
        instruction: "Split each number into thousands and the rest. Example: 3500 = 3000 + 500.",
        bonds: [
          { total: 2500, partA: 2000, partB: null },
          { total: 4300, partA: null, partB: 300 },
          { total: 6100, partA: 6000, partB: null },
          { total: 7800, partA: null, partB: 800 },
          { total: 5600, partA: 5000, partB: null },
          { total: 9200, partA: null, partB: 200 },
        ],
      },
      {
        type: "number-bonds",
        title: "More Place Value Practice",
        instruction: "Split each number into thousands and the rest.",
        bonds: [
          { total: 1700, partA: 1000, partB: null },
          { total: 3400, partA: null, partB: 400 },
          { total: 5900, partA: 5000, partB: null },
          { total: 8100, partA: null, partB: 100 },
          { total: 4600, partA: 4000, partB: null },
          { total: 6500, partA: null, partB: 500 },
        ],
      },
      {
        type: "matching",
        title: "Match Expanded Form",
        instruction: "Draw a line to match each number to its expanded form.",
        left: ["5280", "3046", "7100", "2915"],
        right: ["7000 + 100", "2000 + 900 + 10 + 5", "5000 + 200 + 80", "3000 + 40 + 6"],
      },
      {
        type: "sequence",
        title: "Count by 500s",
        instruction: "Fill in the missing numbers. Count by five hundreds!",
        sequences: [
          { items: [500, 1000, 0, 2000, 2500], answer: [1500] },
          { items: [3000, 0, 4000, 4500, 0], answer: [3500, 5000] },
          { items: [0, 1500, 2000, 0, 3000], answer: [1000, 2500] },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number",
        instruction: "Write each number word as a numeral.",
        prompts: [
          { text: "Two thousand four hundred = ___", type: "lines", lines: 1 },
          { text: "Six thousand and fifty = ___", type: "lines", lines: 1 },
          { text: "Nine thousand nine hundred = ___", type: "lines", lines: 1 },
          { text: "Four thousand three hundred twenty-one = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write More Numbers",
        instruction: "Write each number word as a numeral.",
        prompts: [
          { text: "Seven thousand = ___", type: "lines", lines: 1 },
          { text: "One thousand eight hundred = ___", type: "lines", lines: 1 },
          { text: "Five thousand and five = ___", type: "lines", lines: 1 },
          { text: "Three thousand six hundred ninety = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Less Than or Greater Than 5,000",
        instruction: "Sort each number into the correct column.",
        columns: ["Less than 5,000", "Greater than 5,000"],
        items: [
          { label: "3,200" },
          { label: "6,800" },
          { label: "4,999" },
          { label: "5,001" },
          { label: "2,750" },
          { label: "8,400" },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd or Even?",
        instruction: "Circle whether each number is odd or even.",
        questions: [
          { prompt: "4,500", options: ["Odd", "Even"] },
          { prompt: "3,271", options: ["Odd", "Even"] },
          { prompt: "6,048", options: ["Odd", "Even"] },
          { prompt: "8,133", options: ["Odd", "Even"] },
        ],
      },
      // ─── Medium (~25 activities) ───
      {
        type: "number-trace",
        title: "Trace Numbers Near 10,000",
        instruction: "Trace these larger numbers. Say each one as you write.",
        numbers: [8250, 9130, 9500, 9999, 10000],
      },
      {
        type: "circle-correct",
        title: "Which Is the Largest?",
        instruction: "Circle the largest number in each group.",
        questions: [
          { prompt: "Which is the largest?", options: ["3275", "3725", "3572"] },
          { prompt: "Which is the largest?", options: ["8910", "8190", "8901"] },
          { prompt: "Which is the largest?", options: ["5432", "5423", "5342"] },
          { prompt: "Which is the largest?", options: ["7089", "7908", "7890"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is the Smallest?",
        instruction: "Circle the smallest number in each group.",
        questions: [
          { prompt: "Which is the smallest?", options: ["4052", "4520", "4025"] },
          { prompt: "Which is the smallest?", options: ["7098", "7908", "7089"] },
          { prompt: "Which is the smallest?", options: ["6201", "6210", "6012"] },
          { prompt: "Which is the smallest?", options: ["3987", "3789", "3978"] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 100s Beyond 1,000",
        instruction: "Fill in the missing numbers. Count by hundreds!",
        sequences: [
          { items: [2100, 2200, 0, 2400, 2500], answer: [2300] },
          { items: [4500, 0, 4700, 4800, 0], answer: [4600, 4900] },
          { items: [0, 7200, 7300, 0, 7500], answer: [7100, 7400] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 100s — More Practice",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [3600, 3700, 0, 3900, 4000], answer: [3800] },
          { items: [8100, 0, 8300, 8400, 0], answer: [8200, 8500] },
          { items: [0, 5800, 5900, 0, 6100], answer: [5700, 6000] },
        ],
      },
      {
        type: "circle-correct",
        title: "Order Three Numbers",
        instruction: "Which list shows the numbers from smallest to largest?",
        questions: [
          { prompt: "4500, 4050, 4250", options: ["4050, 4250, 4500", "4500, 4250, 4050", "4250, 4050, 4500"] },
          { prompt: "6800, 6080, 6008", options: ["6008, 6080, 6800", "6800, 6080, 6008", "6080, 6008, 6800"] },
          { prompt: "9100, 9010, 9110", options: ["9010, 9100, 9110", "9110, 9100, 9010", "9100, 9010, 9110"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Place Value to 10,000",
        instruction: "Split each number into its parts.",
        bonds: [
          { total: 5830, partA: 5000, partB: null },
          { total: 7260, partA: null, partB: 260 },
          { total: 9450, partA: 9000, partB: null },
          { total: 8170, partA: null, partB: 170 },
          { total: 6540, partA: 6000, partB: null },
          { total: 3890, partA: null, partB: 890 },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers to Number Lines",
        instruction: "Draw a line to match each number to where it belongs.",
        left: ["2500", "5000", "7500", "10000"],
        right: ["Three quarters of the way to 10,000", "Halfway to 10,000", "All the way to 10,000", "A quarter of the way to 10,000"],
      },
      {
        type: "circle-correct",
        title: "Round to the Nearest 1,000",
        instruction: "Circle the nearest thousand for each number.",
        questions: [
          { prompt: "3,200 rounds to...", options: ["3,000", "4,000", "2,000"] },
          { prompt: "6,800 rounds to...", options: ["6,000", "7,000", "8,000"] },
          { prompt: "4,500 rounds to...", options: ["4,000", "5,000", "4,500"] },
          { prompt: "8,150 rounds to...", options: ["8,000", "9,000", "7,000"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Round More Numbers",
        instruction: "Circle the nearest thousand.",
        questions: [
          { prompt: "1,900 rounds to...", options: ["1,000", "2,000", "3,000"] },
          { prompt: "5,499 rounds to...", options: ["5,000", "6,000", "4,000"] },
          { prompt: "7,501 rounds to...", options: ["7,000", "8,000", "9,000"] },
          { prompt: "2,250 rounds to...", options: ["2,000", "3,000", "1,000"] },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number Word",
        instruction: "Write each numeral as a number word.",
        prompts: [
          { text: "4,730 = ___", type: "lines", lines: 1 },
          { text: "8,015 = ___", type: "lines", lines: 1 },
          { text: "6,200 = ___", type: "lines", lines: 1 },
          { text: "9,999 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Expanded Form — Medium",
        instruction: "Draw a line to match each number to its expanded form.",
        left: ["4,608", "7,350", "2,091", "8,500"],
        right: ["2000 + 90 + 1", "8000 + 500", "4000 + 600 + 8", "7000 + 300 + 50"],
      },
      {
        type: "open-response",
        title: "1,000 More and 1,000 Less",
        instruction: "Write the number that is 1,000 more and 1,000 less.",
        prompts: [
          { text: "1,000 more than 4,500 = ___", type: "lines", lines: 1 },
          { text: "1,000 less than 7,200 = ___", type: "lines", lines: 1 },
          { text: "1,000 more than 8,999 = ___", type: "lines", lines: 1 },
          { text: "1,000 less than 3,100 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort Numbers Smallest to Largest",
        instruction: "Write 1st to 6th to sort these from smallest to largest.",
        columns: ["Smallest to Largest"],
        items: [
          { label: "8,400" },
          { label: "2,100" },
          { label: "5,700" },
          { label: "9,300" },
          { label: "1,600" },
          { label: "6,050" },
        ],
      },
      // ─── Hard (~20 activities) ───
      {
        type: "number-trace",
        title: "Trace Numbers Beyond 10,000",
        instruction: "Trace these five-digit numbers carefully!",
        numbers: [10500, 12000, 15750, 18000, 20000],
      },
      {
        type: "number-trace",
        title: "Trace More Five-Digit Numbers",
        instruction: "Keep practising! Trace these large numbers.",
        numbers: [11250, 13500, 16000, 19500, 25000],
      },
      {
        type: "sequence",
        title: "Count by 1,000s Beyond 10,000",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [10000, 11000, 0, 13000, 14000], answer: [12000] },
          { items: [15000, 0, 17000, 18000, 0], answer: [16000, 19000] },
          { items: [0, 12000, 13000, 0, 15000], answer: [11000, 14000] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 2,500s",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [2500, 5000, 0, 10000, 12500], answer: [7500] },
          { items: [5000, 0, 10000, 12500, 0], answer: [7500, 15000] },
          { items: [0, 7500, 10000, 0, 15000], answer: [5000, 12500] },
        ],
      },
      {
        type: "circle-correct",
        title: "Order Three Numbers (Beyond 10,000)",
        instruction: "Which list shows the numbers from smallest to largest?",
        questions: [
          { prompt: "12500, 10800, 11200", options: ["10800, 11200, 12500", "12500, 11200, 10800", "11200, 10800, 12500"] },
          { prompt: "15000, 14950, 15100", options: ["14950, 15000, 15100", "15100, 15000, 14950", "15000, 14950, 15100"] },
          { prompt: "20000, 18500, 19250", options: ["18500, 19250, 20000", "20000, 19250, 18500", "19250, 18500, 20000"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Five-Digit Numbers",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which is bigger: 14,200 or 14,020?", options: ["14,200", "14,020"] },
          { prompt: "Which is smaller: 18,900 or 19,800?", options: ["18,900", "19,800"] },
          { prompt: "Which is bigger: 20,000 or 19,999?", options: ["20,000", "19,999"] },
          { prompt: "Which is smaller: 11,500 or 11,050?", options: ["11,500", "11,050"] },
        ],
      },
      {
        type: "matching",
        title: "Match Big Numbers to Words",
        instruction: "Draw a line to match each numeral to its word form.",
        left: ["12,500", "15,000", "18,300", "20,000"],
        right: ["fifteen thousand", "twenty thousand", "twelve thousand five hundred", "eighteen thousand three hundred"],
      },
      {
        type: "number-bonds",
        title: "Place Value Beyond 10,000",
        instruction: "Split each number into ten-thousands and the rest.",
        bonds: [
          { total: 13500, partA: 10000, partB: null },
          { total: 16200, partA: null, partB: 6200 },
          { total: 18750, partA: 10000, partB: null },
          { total: 14080, partA: null, partB: 4080 },
          { total: 19900, partA: 10000, partB: null },
          { total: 11350, partA: null, partB: 1350 },
        ],
      },
      {
        type: "open-response",
        title: "Place on the Number Line",
        instruction: "Write the number that belongs in each position.",
        prompts: [
          { text: "Halfway between 8,000 and 10,000 = ___", type: "lines", lines: 1 },
          { text: "Halfway between 10,000 and 20,000 = ___", type: "lines", lines: 1 },
          { text: "Halfway between 5,000 and 15,000 = ___", type: "lines", lines: 1 },
          { text: "Just before 10,000 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Order from Smallest to Largest",
        instruction: "Write these numbers in order from smallest to largest.",
        prompts: [
          { text: "15,000    12,500    18,000    11,000\nOrder: ___", type: "lines", lines: 1 },
          { text: "9,999    10,001    10,000    9,900\nOrder: ___", type: "lines", lines: 1 },
          { text: "20,000    15,500    17,250    13,800\nOrder: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Big Number Challenge",
        instruction: "Answer each question about big numbers.",
        prompts: [
          { text: "What is 1,000 more than 9,500? ___", type: "lines", lines: 1 },
          { text: "What is 1,000 less than 15,000? ___", type: "lines", lines: 1 },
          { text: "What is 100 more than 9,950? ___", type: "lines", lines: 1 },
          { text: "Write three numbers between 10,000 and 20,000: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Big Numbers",
        instruction: "Circle True or False for each statement.",
        questions: [
          { prompt: "10,000 is bigger than 9,999", options: ["True", "False"] },
          { prompt: "15,000 is halfway between 10,000 and 20,000", options: ["True", "False"] },
          { prompt: "20,000 has five digits", options: ["True", "False"] },
          { prompt: "11,000 is one thousand more than 10,000", options: ["True", "False"] },
        ],
      },
      {
        type: "open-response",
        title: "Write Numbers in Words — Hard",
        instruction: "Write each numeral in words.",
        prompts: [
          { text: "12,450 = ___", type: "lines", lines: 1 },
          { text: "17,008 = ___", type: "lines", lines: 1 },
          { text: "20,000 = ___", type: "lines", lines: 1 },
          { text: "15,555 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Number Puzzles",
        instruction: "Solve each puzzle.",
        prompts: [
          { text: "I am a five-digit number. My digits add up to 5. I am 10,000 + 4,000 + 1,000. What am I? ___", type: "lines", lines: 1 },
          { text: "I am between 11,000 and 12,000. My tens digit is 5. My ones digit is 0. I could be: ___", type: "lines", lines: 1 },
          { text: "Write the largest four-digit number you can: ___", type: "lines", lines: 1 },
          { text: "Write the smallest five-digit number you can: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Big Number Hunt",
        instruction: "Find big numbers all around you!",
        suggestions: [
          "Look for numbers beyond 10,000 in newspapers or on the internet. Write down 5 that you find.",
          "Check how far it is to a nearby town in metres. Is it more than 10,000?",
          "Write the numbers from 10,000 to 20,000 counting by 1,000s.",
          "Find a five-digit number on a food packet or a receipt. Read it to someone.",
        ],
      },
    ],
  },
];

export function getYear3Worksheet(
  slug: string
): WorksheetItem | undefined {
  return year3MathsWorksheets.find((w) => w.slug === slug);
}
