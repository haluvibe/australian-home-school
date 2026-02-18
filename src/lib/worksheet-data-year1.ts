import type { WorksheetItem } from "./worksheet-types";

export const year1MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Number Names to 120 ──────────────────────────────
  {
    slug: "number-names-to-120",
    title: "Number Names & Numerals to 120",
    strand: "Number",
    description:
      "Connect number names, numerals and quantities, and order numbers to at least 120",
    activities: [
      // ─── Easy: Numbers 10–50 ───
      {
        type: "number-trace",
        title: "Trace Numbers 10 to 20",
        instruction: "Trace each number carefully. Say the number out loud as you write it!",
        numbers: [10, 11, 12, 13, 14, 15],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 16 to 20",
        instruction: "Keep going! Trace these numbers and say each one.",
        numbers: [16, 17, 18, 19, 20],
      },
      {
        type: "count-objects",
        title: "Count the Stars",
        instruction: "Count how many stars are in each row. Write the number.",
        rows: [
          { object: "star", count: 11 },
          { object: "star", count: 14 },
          { object: "star", count: 17 },
          { object: "star", count: 20 },
        ],
      },
      {
        type: "matching",
        title: "Match Teen Number Words",
        instruction: "Draw a line from each number word to its numeral.",
        left: ["eleven", "fourteen", "seventeen", "twenty"],
        right: ["20", "14", "11", "17"],
      },
      {
        type: "circle-correct",
        title: "Which Number Is It?",
        instruction: "Read the number word and circle the correct numeral.",
        questions: [
          { prompt: "thirteen", options: ["12", "13", "31"] },
          { prompt: "fifteen", options: ["50", "5", "15"] },
          { prompt: "eighteen", options: ["18", "80", "8"] },
          { prompt: "twelve", options: ["20", "12", "21"] },
        ],
      },
      {
        type: "sequence",
        title: "Count from 10",
        instruction: "Fill in the missing numbers. Count on from 10!",
        sequences: [
          { items: [10, 11, 0, 13, 14], answer: [12] },
          { items: [15, 0, 17, 18, 0], answer: [16, 19] },
          { items: [0, 12, 13, 0, 15], answer: [11, 14] },
        ],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 21 to 30",
        instruction: "Now we go past 20! Trace each number and say it.",
        numbers: [21, 23, 25, 27, 29, 30],
      },
      {
        type: "count-objects",
        title: "Count the Hearts",
        instruction: "Count the hearts in each row. Write the total.",
        rows: [
          { object: "heart", count: 22 },
          { object: "heart", count: 26 },
          { object: "heart", count: 30 },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers 20–30",
        instruction: "Draw a line to match each word to its number.",
        left: ["twenty-one", "twenty-five", "twenty-eight", "thirty"],
        right: ["28", "30", "21", "25"],
      },
      {
        type: "circle-correct",
        title: "Before and After (10–30)",
        instruction: "Circle the number that comes just before or just after.",
        questions: [
          { prompt: "Which comes just after 19?", options: ["18", "20", "21"] },
          { prompt: "Which comes just before 25?", options: ["24", "26", "23"] },
          { prompt: "Which comes just after 29?", options: ["28", "30", "31"] },
          { prompt: "Which comes just before 17?", options: ["15", "16", "18"] },
        ],
      },
      {
        type: "sequence",
        title: "Count Through the 20s",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [20, 21, 0, 23, 24], answer: [22] },
          { items: [25, 0, 27, 0, 29], answer: [26, 28] },
          { items: [0, 22, 23, 24, 0], answer: [21, 25] },
        ],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 31 to 40",
        instruction: "Trace these numbers from the 30s and 40!",
        numbers: [31, 34, 36, 38, 40],
      },
      {
        type: "circle-correct",
        title: "Read the Number Word (20–40)",
        instruction: "Circle the correct numeral for each word.",
        questions: [
          { prompt: "thirty-two", options: ["23", "32", "33"] },
          { prompt: "twenty-seven", options: ["27", "72", "37"] },
          { prompt: "thirty-nine", options: ["39", "93", "29"] },
          { prompt: "forty", options: ["14", "44", "40"] },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers 30–50",
        instruction: "Match each number word to the right numeral.",
        left: ["thirty-three", "forty-one", "forty-seven", "fifty"],
        right: ["50", "33", "47", "41"],
      },
      {
        type: "sequence",
        title: "Count Through the 30s and 40s",
        instruction: "Write the missing numbers.",
        sequences: [
          { items: [34, 35, 0, 37, 38], answer: [36] },
          { items: [41, 0, 43, 44, 0], answer: [42, 45] },
          { items: [0, 47, 48, 0, 50], answer: [46, 49] },
        ],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 41 to 50",
        instruction: "Trace the 40s! Say each number as you write.",
        numbers: [41, 43, 45, 48, 50],
      },
      {
        type: "circle-correct",
        title: "Before and After (30–50)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which comes just before 40?", options: ["39", "41", "38"] },
          { prompt: "Which comes just after 45?", options: ["44", "46", "47"] },
          { prompt: "Which comes just before 33?", options: ["32", "34", "31"] },
          { prompt: "Which comes just after 50?", options: ["49", "51", "52"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Apples",
        instruction: "Count all the apples in each row. Write the number.",
        rows: [
          { object: "apple", count: 35 },
          { object: "apple", count: 42 },
          { object: "apple", count: 48 },
        ],
      },
      // ─── Medium: Numbers 50–100 ───
      {
        type: "number-trace",
        title: "Trace Numbers 51 to 60",
        instruction: "Now we are past 50! Trace carefully.",
        numbers: [51, 54, 57, 60],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 61 to 70",
        instruction: "Keep going through the 60s!",
        numbers: [61, 63, 66, 68, 70],
      },
      {
        type: "matching",
        title: "Match Numbers 50–70",
        instruction: "Draw a line to match each word to its numeral.",
        left: ["fifty-five", "sixty-two", "sixty-eight", "seventy"],
        right: ["70", "55", "62", "68"],
      },
      {
        type: "circle-correct",
        title: "Which Number Word? (50–70)",
        instruction: "Circle the correct word for each number.",
        questions: [
          { prompt: "56", options: ["fifty-six", "sixty-five", "fifty-five"] },
          { prompt: "63", options: ["thirty-six", "sixty-three", "sixty-six"] },
          { prompt: "70", options: ["seventeen", "seven", "seventy"] },
        ],
      },
      {
        type: "sequence",
        title: "Count Through the 50s and 60s",
        instruction: "Write the missing numbers.",
        sequences: [
          { items: [53, 54, 0, 56, 57], answer: [55] },
          { items: [60, 0, 62, 63, 0], answer: [61, 64] },
          { items: [0, 66, 67, 0, 69], answer: [65, 68] },
        ],
      },
      {
        type: "circle-correct",
        title: "Before and After (50–70)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which comes just before 60?", options: ["58", "59", "61"] },
          { prompt: "Which comes just after 65?", options: ["64", "66", "67"] },
          { prompt: "Which comes just before 52?", options: ["50", "51", "53"] },
          { prompt: "Which comes just after 70?", options: ["69", "71", "72"] },
        ],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 71 to 80",
        instruction: "Trace through the 70s!",
        numbers: [71, 74, 76, 79, 80],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 81 to 90",
        instruction: "Now the 80s! Trace each one.",
        numbers: [81, 84, 87, 90],
      },
      {
        type: "matching",
        title: "Match Numbers 70–90",
        instruction: "Draw a line to match words to numerals.",
        left: ["seventy-three", "eighty-one", "eighty-nine", "ninety"],
        right: ["90", "73", "89", "81"],
      },
      {
        type: "sequence",
        title: "Count Through the 70s and 80s",
        instruction: "Fill in the missing numbers.",
        sequences: [
          { items: [73, 74, 0, 76, 0], answer: [75, 77] },
          { items: [0, 82, 83, 0, 85], answer: [81, 84] },
          { items: [86, 0, 88, 89, 0], answer: [87, 90] },
        ],
      },
      {
        type: "circle-correct",
        title: "Read the Number Word (70–90)",
        instruction: "Circle the correct numeral.",
        questions: [
          { prompt: "seventy-five", options: ["57", "75", "85"] },
          { prompt: "eighty-two", options: ["82", "28", "92"] },
          { prompt: "eighty-eight", options: ["88", "80", "78"] },
          { prompt: "ninety", options: ["19", "9", "90"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Before and After (70–90)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which comes just before 80?", options: ["78", "79", "81"] },
          { prompt: "Which comes just after 85?", options: ["84", "86", "87"] },
          { prompt: "Which comes just before 90?", options: ["89", "91", "88"] },
          { prompt: "Which comes just after 77?", options: ["76", "78", "79"] },
        ],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 91 to 100",
        instruction: "Almost to 100! Trace these big numbers.",
        numbers: [91, 94, 97, 99, 100],
      },
      {
        type: "matching",
        title: "Match Numbers 90–100",
        instruction: "Match each word to the correct numeral.",
        left: ["ninety-one", "ninety-five", "ninety-nine", "one hundred"],
        right: ["100", "91", "99", "95"],
      },
      {
        type: "sequence",
        title: "Count to 100",
        instruction: "Fill in the missing numbers to reach 100!",
        sequences: [
          { items: [91, 0, 93, 94, 0], answer: [92, 95] },
          { items: [0, 97, 98, 0, 100], answer: [96, 99] },
          { items: [90, 0, 0, 93, 94], answer: [91, 92] },
        ],
      },
      {
        type: "circle-correct",
        title: "Before and After (90–100)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which comes just before 100?", options: ["98", "99", "101"] },
          { prompt: "Which comes just after 93?", options: ["92", "94", "95"] },
          { prompt: "Which comes just before 96?", options: ["95", "97", "94"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count Big Groups of Fish",
        instruction: "Count all the fish. Write the total number.",
        rows: [
          { object: "fish", count: 55 },
          { object: "fish", count: 72 },
          { object: "fish", count: 88 },
        ],
      },
      // ─── Medium-Hard: Ordering & Comparing ───
      {
        type: "sorting",
        title: "Order Numbers Smallest to Biggest (to 50)",
        instruction: "Put these numbers in order from smallest to biggest.",
        columns: ["smallest", "biggest"],
        items: [
          { label: "38" },
          { label: "15" },
          { label: "42" },
          { label: "7" },
          { label: "29" },
        ],
      },
      {
        type: "sorting",
        title: "Order Numbers Smallest to Biggest (to 100)",
        instruction: "Put these numbers in order from smallest to biggest.",
        columns: ["smallest", "biggest"],
        items: [
          { label: "67" },
          { label: "34" },
          { label: "91" },
          { label: "12" },
          { label: "55" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Bigger?",
        instruction: "Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["34", "43"] },
          { prompt: "Which is bigger?", options: ["67", "76"] },
          { prompt: "Which is bigger?", options: ["55", "50"] },
          { prompt: "Which is bigger?", options: ["89", "98"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Smaller?",
        instruction: "Circle the smaller number.",
        questions: [
          { prompt: "Which is smaller?", options: ["28", "82"] },
          { prompt: "Which is smaller?", options: ["45", "54"] },
          { prompt: "Which is smaller?", options: ["71", "17"] },
          { prompt: "Which is smaller?", options: ["63", "36"] },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Groups of Objects",
        instruction: "Count each group and circle the group that has more.",
        pairs: [
          { leftCount: 15, rightCount: 21, object: "star", question: "Which group has more?" },
          { leftCount: 30, rightCount: 28, object: "heart", question: "Which group has more?" },
          { leftCount: 19, rightCount: 19, object: "flower", question: "Which group has more?" },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers to Words (Mixed)",
        instruction: "Draw a line to match each numeral to its word.",
        left: ["36", "58", "74", "91"],
        right: ["seventy-four", "thirty-six", "ninety-one", "fifty-eight"],
      },
      {
        type: "sequence",
        title: "Count Backwards from 50",
        instruction: "Fill in the missing numbers counting backwards.",
        sequences: [
          { items: [50, 49, 0, 47, 46], answer: [48] },
          { items: [43, 0, 41, 40, 0], answer: [42, 39] },
          { items: [0, 36, 35, 0, 33], answer: [37, 34] },
        ],
      },
      {
        type: "sequence",
        title: "Count Backwards from 100",
        instruction: "Fill in the missing numbers counting backwards.",
        sequences: [
          { items: [100, 99, 0, 97, 96], answer: [98] },
          { items: [85, 0, 83, 82, 0], answer: [84, 81] },
          { items: [0, 72, 71, 0, 69], answer: [73, 70] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Between?",
        instruction: "Circle the number that goes between the two given numbers.",
        questions: [
          { prompt: "What comes between 45 and 47?", options: ["44", "46", "48"] },
          { prompt: "What comes between 68 and 70?", options: ["67", "69", "71"] },
          { prompt: "What comes between 99 and 101?", options: ["98", "100", "102"] },
          { prompt: "What comes between 53 and 55?", options: ["52", "54", "56"] },
        ],
      },
      // ─── Hard: Numbers 100–120 ───
      {
        type: "number-trace",
        title: "Trace Numbers 100 to 110",
        instruction: "We are past 100! Trace these numbers carefully.",
        numbers: [100, 102, 105, 108, 110],
      },
      {
        type: "number-trace",
        title: "Trace Numbers 111 to 120",
        instruction: "All the way to 120! Trace and say each number.",
        numbers: [111, 113, 115, 118, 120],
      },
      {
        type: "sequence",
        title: "Count from 100 to 110",
        instruction: "Fill in the missing numbers past 100.",
        sequences: [
          { items: [100, 101, 0, 103, 0], answer: [102, 104] },
          { items: [105, 0, 107, 108, 0], answer: [106, 109] },
          { items: [0, 101, 102, 0, 104], answer: [100, 103] },
        ],
      },
      {
        type: "sequence",
        title: "Count from 110 to 120",
        instruction: "Keep going all the way to 120!",
        sequences: [
          { items: [110, 111, 0, 113, 114], answer: [112] },
          { items: [115, 0, 117, 0, 119], answer: [116, 118] },
          { items: [0, 117, 118, 119, 0], answer: [116, 120] },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers 100–120",
        instruction: "Match each word to the correct numeral.",
        left: ["one hundred and three", "one hundred and ten", "one hundred and fifteen", "one hundred and twenty"],
        right: ["120", "103", "115", "110"],
      },
      {
        type: "circle-correct",
        title: "Before and After (100–120)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which comes just after 109?", options: ["108", "110", "111"] },
          { prompt: "Which comes just before 115?", options: ["114", "116", "113"] },
          { prompt: "Which comes just after 119?", options: ["118", "120", "121"] },
          { prompt: "Which comes just before 101?", options: ["99", "100", "102"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Between? (100–120)",
        instruction: "Circle the number that goes between.",
        questions: [
          { prompt: "Between 104 and 106?", options: ["103", "105", "107"] },
          { prompt: "Between 111 and 113?", options: ["110", "112", "114"] },
          { prompt: "Between 117 and 119?", options: ["116", "118", "120"] },
        ],
      },
      {
        type: "sorting",
        title: "Order Numbers to 120",
        instruction: "Put these numbers in order from smallest to biggest.",
        columns: ["smallest", "biggest"],
        items: [
          { label: "105" },
          { label: "88" },
          { label: "120" },
          { label: "47" },
          { label: "99" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Bigger? (to 120)",
        instruction: "Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["99", "101"] },
          { prompt: "Which is bigger?", options: ["110", "109"] },
          { prompt: "Which is bigger?", options: ["115", "120"] },
          { prompt: "Which is bigger?", options: ["78", "108"] },
        ],
      },
      {
        type: "sequence",
        title: "Count Backwards from 120",
        instruction: "Fill in the missing numbers counting backwards.",
        sequences: [
          { items: [120, 119, 0, 117, 116], answer: [118] },
          { items: [112, 0, 110, 109, 0], answer: [111, 108] },
          { items: [0, 105, 104, 0, 102], answer: [106, 103] },
        ],
      },
      // ─── Challenge: Mixed & Reasoning ───
      {
        type: "matching",
        title: "Match Words to Numbers (Big Mix)",
        instruction: "Draw lines to match. These go all the way to 120!",
        left: ["forty-four", "seventy-seven", "one hundred and six", "one hundred and eighteen"],
        right: ["118", "44", "106", "77"],
      },
      {
        type: "circle-correct",
        title: "True or False?",
        instruction: "Is the statement true or false? Circle your answer.",
        questions: [
          { prompt: "52 comes after 53", options: ["True", "False"] },
          { prompt: "99 comes before 100", options: ["True", "False"] },
          { prompt: "110 is bigger than 101", options: ["True", "False"] },
          { prompt: "The number after 119 is 200", options: ["True", "False"] },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number",
        instruction: "Write each number as a numeral (e.g. forty-two = 42).",
        prompts: [
          { text: "sixty-five = ___", type: "lines", lines: 1 },
          { text: "eighty-three = ___", type: "lines", lines: 1 },
          { text: "one hundred and eleven = ___", type: "lines", lines: 1 },
          { text: "one hundred and twenty = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number Word",
        instruction: "Write each number as words (e.g. 42 = forty-two).",
        prompts: [
          { text: "37 = ___", type: "lines", lines: 1 },
          { text: "56 = ___", type: "lines", lines: 1 },
          { text: "94 = ___", type: "lines", lines: 1 },
          { text: "108 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Order Numbers Biggest to Smallest",
        instruction: "This time, order from BIGGEST to smallest!",
        columns: ["biggest", "smallest"],
        items: [
          { label: "31" },
          { label: "103" },
          { label: "67" },
          { label: "89" },
          { label: "120" },
        ],
      },
      {
        type: "sequence",
        title: "Mystery Number Sequences",
        instruction: "What number is missing? Think carefully!",
        sequences: [
          { items: [10, 20, 30, 0, 50], answer: [40] },
          { items: [25, 0, 27, 28, 29], answer: [26] },
          { items: [98, 99, 0, 101, 102], answer: [100] },
          { items: [115, 116, 117, 0, 119], answer: [118] },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd One Out",
        instruction: "Circle the number that does NOT belong in the counting pattern.",
        questions: [
          { prompt: "Counting by 1s: 45, 46, 48, 47", options: ["45", "48", "47"] },
          { prompt: "Counting by 1s: 99, 100, 102, 101", options: ["99", "102", "101"] },
          { prompt: "Which number is NOT between 50 and 60?", options: ["55", "58", "61"] },
        ],
      },
      {
        type: "open-response",
        title: "Number Riddles",
        instruction: "Read each clue and write the mystery number.",
        prompts: [
          { text: "I come after 49 and before 51. What number am I?", type: "lines", lines: 1 },
          { text: "I have a 7 in the tens place and a 3 in the ones place. What number am I?", type: "lines", lines: 1 },
          { text: "I am 1 more than 99. What number am I?", type: "lines", lines: 1 },
          { text: "I am 1 less than 120. What number am I?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Number Hunt",
        instruction: "Look for numbers around your home and neighbourhood!",
        suggestions: [
          "Check the microwave clock — what numbers do you see?",
          "Look at house numbers on your street. Which is the biggest?",
          "Find a number on a food packet. Can you read it?",
          "Write down 5 numbers you found and put them in order from smallest to biggest.",
          "Can you find a number bigger than 100?",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Number Line Walk",
        instruction: "Make a number line on the ground and practise counting!",
        suggestions: [
          "Use chalk to write numbers 1 to 30 on the driveway. Walk along and say each number.",
          "Point to a number — can you say what comes before and after it?",
          "Jump to number 15. Now jump to 22. Which number is bigger?",
          "Try writing numbers from 90 to 120. Can you say each one?",
        ],
      },
    ],
  },

  // ── WS 2: Tens and Ones ─────────────────────────────────────
  {
    slug: "tens-and-ones",
    title: "Tens and Ones",
    strand: "Number",
    description: "Partition two-digit numbers into tens and ones",
    activities: [
      // ─── Easy: Tens and Ones to 30 ───
      {
        type: "count-objects",
        title: "Count the Tens and Ones (to 20)",
        instruction: "Count the groups of ten and the single ones. Write the total number.",
        rows: [
          { object: "square", count: 12 },
          { object: "square", count: 15 },
          { object: "square", count: 18 },
          { object: "square", count: 20 },
        ],
      },
      {
        type: "number-bonds",
        title: "Split into Tens and Ones (Teens)",
        instruction: "Split each number into tens and ones. Example: 14 = 10 + 4.",
        bonds: [
          { total: 12, partA: 10, partB: null },
          { total: 15, partA: null, partB: 5 },
          { total: 17, partA: 10, partB: null },
          { total: 19, partA: null, partB: 9 },
          { total: 11, partA: 10, partB: null },
          { total: 16, partA: null, partB: 6 },
        ],
      },
      {
        type: "matching",
        title: "Match Tens & Ones (Teens)",
        instruction: "Draw a line to match each description to the correct number.",
        left: ["1 ten 3 ones", "1 ten 7 ones", "1 ten 1 one", "1 ten 9 ones"],
        right: ["19", "11", "13", "17"],
      },
      {
        type: "circle-correct",
        title: "Which Shows the Number? (Teens)",
        instruction: "Circle the correct tens-and-ones description.",
        questions: [
          { prompt: "Which shows 14?", options: ["1 ten 4 ones", "4 tens 1 one", "10 + 40"] },
          { prompt: "Which shows 18?", options: ["8 tens 1 one", "1 ten 8 ones", "80 + 1"] },
          { prompt: "Which shows 11?", options: ["1 ten 1 one", "11 tens 0 ones", "0 tens 11 ones"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Tens and Ones (20–30)",
        instruction: "Count the groups of ten and single ones. Write the total.",
        rows: [
          { object: "circle", count: 21 },
          { object: "circle", count: 25 },
          { object: "circle", count: 28 },
          { object: "circle", count: 30 },
        ],
      },
      {
        type: "number-bonds",
        title: "Split into Tens and Ones (20s)",
        instruction: "Split each number. Example: 24 = 20 + 4.",
        bonds: [
          { total: 22, partA: 20, partB: null },
          { total: 26, partA: null, partB: 6 },
          { total: 29, partA: 20, partB: null },
          { total: 23, partA: null, partB: 3 },
          { total: 30, partA: 30, partB: null },
          { total: 27, partA: null, partB: 7 },
        ],
      },
      {
        type: "matching",
        title: "Match Tens & Ones (20s)",
        instruction: "Draw a line to match.",
        left: ["2 tens 1 one", "2 tens 5 ones", "2 tens 8 ones", "3 tens 0 ones"],
        right: ["28", "30", "21", "25"],
      },
      {
        type: "circle-correct",
        title: "How Many Tens? How Many Ones? (to 30)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "How many tens in 24?", options: ["2", "4", "24"] },
          { prompt: "How many ones in 17?", options: ["1", "7", "17"] },
          { prompt: "How many tens in 30?", options: ["0", "3", "30"] },
          { prompt: "How many ones in 20?", options: ["0", "2", "20"] },
        ],
      },
      {
        type: "open-response",
        title: "Draw Tens and Ones (to 30)",
        instruction: "Draw sticks for tens (|) and dots for ones (.) in the box.",
        prompts: [
          { text: "Show 13 using tens and ones.", type: "box" },
          { text: "Show 25 using tens and ones.", type: "box" },
          { text: "Show 30 using tens and ones.", type: "box" },
        ],
      },
      // ─── Medium: Tens and Ones to 60 ───
      {
        type: "count-objects",
        title: "Count the Tens and Ones (30–50)",
        instruction: "Count the groups of ten and single ones. Write the total.",
        rows: [
          { object: "star", count: 34 },
          { object: "star", count: 42 },
          { object: "star", count: 47 },
          { object: "star", count: 50 },
        ],
      },
      {
        type: "number-bonds",
        title: "Split into Tens and Ones (30s–40s)",
        instruction: "Split each number into tens and ones.",
        bonds: [
          { total: 36, partA: 30, partB: null },
          { total: 41, partA: null, partB: 1 },
          { total: 38, partA: 30, partB: null },
          { total: 45, partA: null, partB: 5 },
          { total: 33, partA: 30, partB: null },
          { total: 49, partA: null, partB: 9 },
        ],
      },
      {
        type: "matching",
        title: "Match Tens & Ones (30–50)",
        instruction: "Draw a line to match each description to the correct number.",
        left: ["3 tens 6 ones", "4 tens 2 ones", "4 tens 7 ones", "5 tens 0 ones"],
        right: ["47", "50", "36", "42"],
      },
      {
        type: "circle-correct",
        title: "Which Shows the Number? (30–50)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which shows 35?", options: ["3 tens 5 ones", "5 tens 3 ones", "30 + 50"] },
          { prompt: "Which shows 48?", options: ["8 tens 4 ones", "4 tens 8 ones", "40 + 80"] },
          { prompt: "Which shows 50?", options: ["5 tens 0 ones", "0 tens 5 ones", "50 tens"] },
          { prompt: "Which shows 41?", options: ["4 tens 1 one", "1 ten 4 ones", "14"] },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Tens? How Many Ones? (30–50)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "How many tens in 43?", options: ["3", "4", "43"] },
          { prompt: "How many ones in 37?", options: ["3", "7", "37"] },
          { prompt: "How many tens in 50?", options: ["0", "5", "50"] },
          { prompt: "How many ones in 40?", options: ["0", "4", "40"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Split into Tens and Ones (50s)",
        instruction: "Split each number into tens and ones.",
        bonds: [
          { total: 52, partA: 50, partB: null },
          { total: 57, partA: null, partB: 7 },
          { total: 55, partA: 50, partB: null },
          { total: 59, partA: null, partB: 9 },
          { total: 51, partA: 50, partB: null },
          { total: 54, partA: null, partB: 4 },
        ],
      },
      {
        type: "matching",
        title: "Match Tens & Ones (50–60)",
        instruction: "Draw a line to match.",
        left: ["5 tens 3 ones", "5 tens 8 ones", "6 tens 0 ones", "5 tens 1 one"],
        right: ["60", "51", "53", "58"],
      },
      {
        type: "open-response",
        title: "Draw Tens and Ones (30–60)",
        instruction: "Draw sticks for tens and dots for ones in the box.",
        prompts: [
          { text: "Show 34 using tens and ones.", type: "box" },
          { text: "Show 47 using tens and ones.", type: "box" },
          { text: "Show 56 using tens and ones.", type: "box" },
        ],
      },
      // ─── Medium-Hard: Tens and Ones to 99 ───
      {
        type: "count-objects",
        title: "Count the Tens and Ones (60–80)",
        instruction: "Count the groups of ten and single ones. Write the total.",
        rows: [
          { object: "heart", count: 63 },
          { object: "heart", count: 71 },
          { object: "heart", count: 78 },
          { object: "heart", count: 80 },
        ],
      },
      {
        type: "number-bonds",
        title: "Split into Tens and Ones (60s–70s)",
        instruction: "Split each number into tens and ones.",
        bonds: [
          { total: 64, partA: 60, partB: null },
          { total: 73, partA: null, partB: 3 },
          { total: 68, partA: 60, partB: null },
          { total: 75, partA: null, partB: 5 },
          { total: 61, partA: 60, partB: null },
          { total: 79, partA: null, partB: 9 },
        ],
      },
      {
        type: "matching",
        title: "Match Tens & Ones (60–80)",
        instruction: "Draw a line to match.",
        left: ["6 tens 5 ones", "7 tens 2 ones", "7 tens 8 ones", "8 tens 0 ones"],
        right: ["78", "80", "65", "72"],
      },
      {
        type: "circle-correct",
        title: "Which Shows the Number? (60–80)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which shows 67?", options: ["6 tens 7 ones", "7 tens 6 ones", "60 + 70"] },
          { prompt: "Which shows 74?", options: ["4 tens 7 ones", "7 tens 4 ones", "47"] },
          { prompt: "Which shows 80?", options: ["8 tens 0 ones", "0 tens 8 ones", "80 tens"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Split into Tens and Ones (80s–90s)",
        instruction: "Split each number into tens and ones.",
        bonds: [
          { total: 82, partA: 80, partB: null },
          { total: 91, partA: null, partB: 1 },
          { total: 87, partA: 80, partB: null },
          { total: 95, partA: null, partB: 5 },
          { total: 89, partA: 80, partB: null },
          { total: 99, partA: null, partB: 9 },
        ],
      },
      {
        type: "matching",
        title: "Match Tens & Ones (80–99)",
        instruction: "Draw a line to match.",
        left: ["8 tens 3 ones", "9 tens 2 ones", "9 tens 7 ones", "8 tens 6 ones"],
        right: ["97", "86", "83", "92"],
      },
      {
        type: "circle-correct",
        title: "How Many Tens? How Many Ones? (60–99)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "How many tens in 73?", options: ["3", "7", "73"] },
          { prompt: "How many ones in 86?", options: ["8", "6", "86"] },
          { prompt: "How many tens in 99?", options: ["9", "99", "0"] },
          { prompt: "How many ones in 60?", options: ["6", "0", "60"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Shows the Number? (80–99)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which shows 84?", options: ["8 tens 4 ones", "4 tens 8 ones", "48"] },
          { prompt: "Which shows 93?", options: ["3 tens 9 ones", "9 tens 3 ones", "39"] },
          { prompt: "Which shows 90?", options: ["9 tens 0 ones", "0 tens 9 ones", "90 tens"] },
          { prompt: "Which shows 99?", options: ["9 tens 9 ones", "99 tens 0 ones", "9 + 9"] },
        ],
      },
      {
        type: "open-response",
        title: "Draw Tens and Ones (60–99)",
        instruction: "Draw sticks for tens and dots for ones in the box.",
        prompts: [
          { text: "Show 62 using tens and ones.", type: "box" },
          { text: "Show 75 using tens and ones.", type: "box" },
          { text: "Show 88 using tens and ones.", type: "box" },
          { text: "Show 99 using tens and ones.", type: "box" },
        ],
      },
      // ─── Hard: Comparing & Reasoning ───
      {
        type: "circle-correct",
        title: "Same Tens, Different Ones",
        instruction: "Both numbers have the same tens digit. Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["34", "37"] },
          { prompt: "Which is bigger?", options: ["52", "58"] },
          { prompt: "Which is bigger?", options: ["71", "79"] },
          { prompt: "Which is bigger?", options: ["93", "90"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Different Tens, Same Ones",
        instruction: "Both numbers have the same ones digit. Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["25", "45"] },
          { prompt: "Which is bigger?", options: ["63", "83"] },
          { prompt: "Which is bigger?", options: ["17", "97"] },
          { prompt: "Which is bigger?", options: ["52", "32"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Tens Digit",
        instruction: "Sort these numbers into groups based on their tens digit.",
        columns: ["3 tens", "5 tens", "7 tens"],
        items: [
          { label: "34" },
          { label: "52" },
          { label: "71" },
          { label: "37" },
          { label: "55" },
          { label: "78" },
          { label: "31" },
          { label: "59" },
          { label: "73" },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers to Expanded Form",
        instruction: "Draw a line to match each number to its expanded form.",
        left: ["46", "83", "27", "65"],
        right: ["20 + 7", "60 + 5", "40 + 6", "80 + 3"],
      },
      {
        type: "number-bonds",
        title: "Expanded Form Bonds",
        instruction: "Write the expanded form. Example: 56 = 50 + 6.",
        bonds: [
          { total: 43, partA: 40, partB: null },
          { total: 67, partA: null, partB: 7 },
          { total: 81, partA: 80, partB: null },
          { total: 29, partA: null, partB: 9 },
          { total: 55, partA: 50, partB: null },
          { total: 94, partA: null, partB: 4 },
        ],
      },
      {
        type: "open-response",
        title: "What Number Am I?",
        instruction: "Read each clue about tens and ones. Write the number.",
        prompts: [
          { text: "I have 3 tens and 5 ones. What number am I?", type: "lines", lines: 1 },
          { text: "I have 7 tens and 0 ones. What number am I?", type: "lines", lines: 1 },
          { text: "I have 4 tens and 9 ones. What number am I?", type: "lines", lines: 1 },
          { text: "I have 9 tens and 2 ones. What number am I?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Tens and Ones",
        instruction: "Is the statement true or false?",
        questions: [
          { prompt: "The number 46 has 4 tens and 6 ones", options: ["True", "False"] },
          { prompt: "The number 70 has 7 ones and 0 tens", options: ["True", "False"] },
          { prompt: "52 and 25 have the same tens digit", options: ["True", "False"] },
          { prompt: "38 is bigger than 83", options: ["True", "False"] },
        ],
      },
      {
        type: "open-response",
        title: "Build the Number",
        instruction: "Write the number for each description.",
        prompts: [
          { text: "5 tens and 2 ones = ___", type: "lines", lines: 1 },
          { text: "8 tens and 0 ones = ___", type: "lines", lines: 1 },
          { text: "30 + 7 = ___", type: "lines", lines: 1 },
          { text: "90 + 4 = ___", type: "lines", lines: 1 },
          { text: "60 + 0 = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "One More Ten, One More One",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "34 + 10 = ?", options: ["35", "44", "24"] },
          { prompt: "56 + 1 = ?", options: ["66", "57", "46"] },
          { prompt: "72 + 10 = ?", options: ["73", "82", "62"] },
          { prompt: "88 + 1 = ?", options: ["89", "98", "78"] },
        ],
      },
      {
        type: "circle-correct",
        title: "One Less Ten, One Less One",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "45 - 10 = ?", options: ["35", "44", "55"] },
          { prompt: "63 - 1 = ?", options: ["53", "62", "64"] },
          { prompt: "80 - 10 = ?", options: ["70", "79", "90"] },
          { prompt: "97 - 1 = ?", options: ["87", "96", "98"] },
        ],
      },
      {
        type: "open-response",
        title: "Tens and Ones Riddles",
        instruction: "Solve each riddle and write the number.",
        prompts: [
          { text: "My tens digit is 6 and my ones digit is 3. What number am I?", type: "lines", lines: 1 },
          { text: "I am 10 more than 45. What number am I?", type: "lines", lines: 1 },
          { text: "I have the same number of tens as ones, and I am bigger than 30 but smaller than 40. What number am I?", type: "lines", lines: 1 },
          { text: "My tens digit is one more than my ones digit. I am between 50 and 60. What number am I?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Straw Bundles",
        instruction: "Use straws, sticks or pencils to practise making tens and ones at home.",
        suggestions: [
          "Bundle 10 straws together with a rubber band to make one 'ten'.",
          "Make the number 27: 2 bundles of ten and 7 loose straws.",
          "Ask someone to say a number and you build it with your bundles!",
          "Try numbers up to 99. How many bundles do you need?",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Place Value Card Game",
        instruction: "Make number cards and play a place value game!",
        suggestions: [
          "Write digits 0–9 on small cards. Pick two cards and make the biggest two-digit number you can.",
          "Now make the smallest two-digit number with the same cards.",
          "Say how many tens and how many ones your number has.",
          "Take turns with a family member — who can make the bigger number?",
        ],
      },
    ],
  },

  // ── WS 3: Skip Counting ─────────────────────────────────────
  {
    slug: "skip-counting",
    title: "Skip Counting",
    strand: "Number",
    description:
      "Skip count in twos, fives or tens to at least 120",
    activities: [
      // ─── Easy: Count by 2s (to 20) ───
      {
        type: "number-trace",
        title: "Trace the 2s Pattern",
        instruction: "Trace each number. These are the numbers we say when we skip count by 2s!",
        numbers: [2, 4, 6, 8, 10],
      },
      {
        type: "sequence",
        title: "Skip Count by 2s to 20",
        instruction: "Fill in the missing numbers. Count by 2s!",
        sequences: [
          { items: [2, 0, 6, 8, 0], answer: [4, 10] },
          { items: [0, 4, 6, 0, 10], answer: [2, 8] },
          { items: [12, 14, 0, 18, 0], answer: [16, 20] },
        ],
      },
      {
        type: "count-objects",
        title: "Count Pairs of Shoes",
        instruction: "Each pair of shoes is 2. Skip count by 2s to find the total.",
        rows: [
          { object: "star", count: 4 },
          { object: "star", count: 8 },
          { object: "star", count: 12 },
          { object: "star", count: 16 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (2s to 20)",
        instruction: "We are counting by 2s. Circle the number that comes next.",
        questions: [
          { prompt: "2, 4, 6, 8, ?", options: ["9", "10", "11"] },
          { prompt: "10, 12, 14, ?", options: ["15", "16", "17"] },
          { prompt: "6, 8, 10, 12, ?", options: ["13", "14", "15"] },
          { prompt: "14, 16, 18, ?", options: ["19", "20", "21"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Skip Count (2s)",
        instruction: "Draw a line to match each start number to the correct next number when counting by 2s.",
        left: ["2", "6", "10", "16"],
        right: ["18", "4", "8", "12"],
      },
      {
        type: "pattern",
        title: "Counting by 2s Pattern",
        instruction: "Each row shows groups of 2. Draw the next objects to continue the pattern.",
        rows: [
          {
            sequence: ["star", "star", null, "star", "star", null, "star", "star", null],
            unitLength: 3,
          },
          {
            sequence: ["heart", "heart", null, "heart", "heart", null, "heart", "heart", null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "sequence",
        title: "More Skip Counting by 2s (to 20)",
        instruction: "Fill in all the missing numbers. Count by 2s!",
        sequences: [
          { items: [2, 4, 0, 0, 10], answer: [6, 8] },
          { items: [0, 14, 0, 18, 20], answer: [12, 16] },
          { items: [4, 0, 8, 0, 12], answer: [6, 10] },
        ],
      },
      {
        type: "circle-correct",
        title: "Is It in the 2s Pattern?",
        instruction: "When we count by 2s, we say 2, 4, 6, 8, 10... Circle YES or NO.",
        questions: [
          { prompt: "Is 7 in the 2s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 14 in the 2s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 11 in the 2s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 20 in the 2s skip counting pattern?", options: ["Yes", "No"] },
        ],
      },
      // ─── Easy–Medium: Count by 2s (to 40) ───
      {
        type: "number-trace",
        title: "Trace 2s from 20 to 40",
        instruction: "Trace these numbers. They are part of the skip count by 2s pattern!",
        numbers: [22, 24, 26, 28, 30],
      },
      {
        type: "sequence",
        title: "Skip Count by 2s (20 to 40)",
        instruction: "Fill in the missing numbers. Keep counting by 2s!",
        sequences: [
          { items: [20, 22, 0, 26, 0, 30], answer: [24, 28] },
          { items: [0, 32, 34, 0, 38, 40], answer: [30, 36] },
          { items: [22, 0, 26, 28, 0, 32], answer: [24, 30] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (2s, 20–40)",
        instruction: "We are counting by 2s. Circle what comes next.",
        questions: [
          { prompt: "22, 24, 26, ?", options: ["27", "28", "30"] },
          { prompt: "30, 32, 34, ?", options: ["35", "36", "38"] },
          { prompt: "26, 28, 30, 32, ?", options: ["33", "34", "35"] },
          { prompt: "36, 38, 40, ?", options: ["41", "42", "43"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count Groups of 2 Apples",
        instruction: "Count by 2s to find the total number of apples.",
        rows: [
          { object: "apple", count: 20 },
          { object: "apple", count: 28 },
          { object: "apple", count: 36 },
          { object: "apple", count: 40 },
        ],
      },
      {
        type: "sequence",
        title: "Long 2s Sequence (2 to 40)",
        instruction: "Fill in the missing numbers in this big skip count by 2s!",
        sequences: [
          { items: [2, 0, 6, 8, 0, 12], answer: [4, 10] },
          { items: [14, 16, 0, 20, 22, 0], answer: [18, 24] },
          { items: [0, 28, 30, 0, 34, 36], answer: [26, 32] },
          { items: [34, 0, 38, 0, 42, 44], answer: [36, 40] },
        ],
      },
      // ─── Medium: Count by 5s (to 50) ───
      {
        type: "number-trace",
        title: "Trace the 5s Pattern",
        instruction: "Trace each number. These are the numbers we say when we count by 5s!",
        numbers: [5, 10, 15, 20, 25],
      },
      {
        type: "sequence",
        title: "Skip Count by 5s to 50",
        instruction: "Fill in the missing numbers. Count by 5s!",
        sequences: [
          { items: [5, 10, 0, 20, 0, 30], answer: [15, 25] },
          { items: [0, 10, 15, 0, 25], answer: [5, 20] },
          { items: [30, 0, 40, 45, 0], answer: [35, 50] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (5s to 50)",
        instruction: "We are counting by 5s. Circle what comes next.",
        questions: [
          { prompt: "5, 10, 15, ?", options: ["16", "20", "25"] },
          { prompt: "20, 25, 30, ?", options: ["31", "35", "40"] },
          { prompt: "35, 40, 45, ?", options: ["46", "50", "55"] },
          { prompt: "10, 15, 20, 25, ?", options: ["26", "28", "30"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Coins by 5s",
        instruction: "Each group has 5 coins. Skip count by 5s to find the total.",
        rows: [
          { object: "circle", count: 15 },
          { object: "circle", count: 25 },
          { object: "circle", count: 35 },
          { object: "circle", count: 50 },
        ],
      },
      {
        type: "matching",
        title: "Match the 5s Count",
        instruction: "Draw a line to match each number to the next number when counting by 5s.",
        left: ["5", "15", "30", "45"],
        right: ["50", "10", "20", "35"],
      },
      {
        type: "pattern",
        title: "Groups of 5 Pattern",
        instruction: "Each row shows groups of 5. Draw the next objects to continue the pattern.",
        rows: [
          {
            sequence: [
              "apple", "apple", "apple", "apple", "apple", null,
              "apple", "apple", "apple", "apple", "apple", null,
            ],
            unitLength: 6,
          },
          {
            sequence: [
              "fish", "fish", "fish", "fish", "fish", null,
              "fish", "fish", "fish", "fish", "fish", null,
            ],
            unitLength: 6,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Is It in the 5s Pattern?",
        instruction: "When we count by 5s we say 5, 10, 15, 20... Circle YES or NO.",
        questions: [
          { prompt: "Is 12 in the 5s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 35 in the 5s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 22 in the 5s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 50 in the 5s skip counting pattern?", options: ["Yes", "No"] },
        ],
      },
      {
        type: "sequence",
        title: "More Skip Counting by 5s (to 50)",
        instruction: "Fill in the missing numbers. Count by 5s!",
        sequences: [
          { items: [5, 0, 15, 0, 25], answer: [10, 20] },
          { items: [0, 35, 0, 45, 50], answer: [30, 40] },
          { items: [10, 15, 0, 25, 0, 35], answer: [20, 30] },
        ],
      },
      // ─── Medium: Count by 5s (to 100) ───
      {
        type: "number-trace",
        title: "Trace 5s from 50 to 100",
        instruction: "Trace these bigger numbers in the 5s pattern!",
        numbers: [55, 60, 65, 70, 75],
      },
      {
        type: "sequence",
        title: "Skip Count by 5s (50 to 100)",
        instruction: "Fill in the missing numbers. Count by 5s past 50!",
        sequences: [
          { items: [50, 55, 0, 65, 0, 75], answer: [60, 70] },
          { items: [0, 80, 85, 0, 95, 100], answer: [75, 90] },
          { items: [60, 0, 70, 75, 0, 85], answer: [65, 80] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (5s, 50–100)",
        instruction: "We are counting by 5s. Circle what comes next.",
        questions: [
          { prompt: "55, 60, 65, ?", options: ["66", "70", "75"] },
          { prompt: "75, 80, 85, ?", options: ["86", "90", "95"] },
          { prompt: "80, 85, 90, 95, ?", options: ["96", "99", "100"] },
          { prompt: "60, 65, 70, ?", options: ["71", "72", "75"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count Big Groups by 5s",
        instruction: "Each row has objects in groups of 5. Skip count to find the total.",
        rows: [
          { object: "flower", count: 55 },
          { object: "flower", count: 70 },
          { object: "flower", count: 85 },
          { object: "flower", count: 100 },
        ],
      },
      {
        type: "sequence",
        title: "Long 5s Sequence (5 to 100)",
        instruction: "Fill in the missing numbers in this big skip count by 5s!",
        sequences: [
          { items: [5, 10, 0, 20, 25, 0], answer: [15, 30] },
          { items: [35, 0, 45, 50, 0, 60], answer: [40, 55] },
          { items: [0, 70, 75, 0, 85, 90], answer: [65, 80] },
          { items: [80, 85, 0, 0, 100], answer: [90, 95] },
        ],
      },
      // ─── Medium: Count by 10s (to 120) ───
      {
        type: "number-trace",
        title: "Trace the 10s Pattern",
        instruction: "Trace each number. These are the numbers we say when we count by 10s!",
        numbers: [10, 20, 30, 40, 50, 60],
      },
      {
        type: "sequence",
        title: "Skip Count by 10s to 120",
        instruction: "Fill in the missing numbers. Count by 10s!",
        sequences: [
          { items: [10, 20, 0, 40, 0, 60], answer: [30, 50] },
          { items: [0, 80, 90, 0, 110, 120], answer: [70, 100] },
          { items: [30, 0, 50, 60, 0, 80], answer: [40, 70] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (10s to 120)",
        instruction: "We are counting by 10s. Circle what comes next.",
        questions: [
          { prompt: "10, 20, 30, ?", options: ["35", "40", "50"] },
          { prompt: "50, 60, 70, ?", options: ["75", "80", "90"] },
          { prompt: "80, 90, 100, ?", options: ["101", "110", "120"] },
          { prompt: "100, 110, ?", options: ["111", "115", "120"] },
        ],
      },
      {
        type: "number-trace",
        title: "Trace 10s from 70 to 120",
        instruction: "Keep going! Trace these big 10s numbers.",
        numbers: [70, 80, 90, 100, 110, 120],
      },
      {
        type: "count-objects",
        title: "Count Groups of 10 Fish",
        instruction: "Each row has fish in groups of 10. Skip count by 10s to find the total.",
        rows: [
          { object: "fish", count: 30 },
          { object: "fish", count: 60 },
          { object: "fish", count: 90 },
          { object: "fish", count: 120 },
        ],
      },
      {
        type: "matching",
        title: "Match the 10s Count",
        instruction: "Draw a line to match each number to the next number when counting by 10s.",
        left: ["10", "40", "70", "100"],
        right: ["110", "20", "50", "80"],
      },
      {
        type: "circle-correct",
        title: "Is It in the 10s Pattern?",
        instruction: "When we count by 10s we say 10, 20, 30, 40... Circle YES or NO.",
        questions: [
          { prompt: "Is 15 in the 10s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 80 in the 10s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 55 in the 10s skip counting pattern?", options: ["Yes", "No"] },
          { prompt: "Is 120 in the 10s skip counting pattern?", options: ["Yes", "No"] },
        ],
      },
      {
        type: "sequence",
        title: "More Skip Counting by 10s",
        instruction: "Fill in the missing numbers. Count by 10s!",
        sequences: [
          { items: [10, 0, 30, 0, 50, 60], answer: [20, 40] },
          { items: [0, 40, 50, 0, 70, 80], answer: [30, 60] },
          { items: [60, 70, 0, 90, 0, 110], answer: [80, 100] },
          { items: [0, 100, 110, 0], answer: [90, 120] },
        ],
      },
      // ─── Medium: Comparing 2s, 5s and 10s ───
      {
        type: "sorting",
        title: "Sort Into Skip Count Families",
        instruction: "Sort these numbers. Does each number appear when we count by 2s, 5s or 10s? Some might fit in more than one group!",
        columns: ["Count by 2s", "Count by 5s", "Count by 10s"],
        items: [
          { label: "6" },
          { label: "15" },
          { label: "20" },
          { label: "14" },
          { label: "50" },
          { label: "35" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Skip Count? (2s, 5s or 10s)",
        instruction: "Circle which skip count pattern each number belongs to. Some numbers fit more than one!",
        questions: [
          { prompt: "30 is in the pattern for counting by...", options: ["2s only", "5s only", "2s, 5s and 10s"] },
          { prompt: "14 is in the pattern for counting by...", options: ["2s only", "5s only", "10s only"] },
          { prompt: "25 is in the pattern for counting by...", options: ["2s only", "5s only", "10s only"] },
          { prompt: "60 is in the pattern for counting by...", options: ["5s only", "10s only", "2s, 5s and 10s"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Skip Count Rule",
        instruction: "Draw a line to match each counting sequence to the correct skip count rule.",
        left: ["2, 4, 6, 8, 10", "5, 10, 15, 20, 25", "10, 20, 30, 40, 50", "20, 22, 24, 26, 28"],
        right: ["count by 10s", "count by 2s (from 20)", "count by 5s", "count by 2s"],
      },
      {
        type: "sequence",
        title: "Mixed Skip Counting",
        instruction: "Look at the pattern and fill in the missing numbers. Think about which skip count it is!",
        sequences: [
          { items: [4, 6, 0, 10, 12, 0], answer: [8, 14] },
          { items: [15, 20, 0, 30, 0], answer: [25, 35] },
          { items: [40, 0, 60, 70, 0], answer: [50, 80] },
          { items: [0, 18, 20, 22, 0], answer: [16, 24] },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd One Out — Skip Counting",
        instruction: "One number does NOT belong in the skip counting pattern. Circle it!",
        questions: [
          { prompt: "Counting by 2s: 4, 6, 7, 8, 10", options: ["4", "7", "10"] },
          { prompt: "Counting by 5s: 10, 15, 18, 20, 25", options: ["15", "18", "20"] },
          { prompt: "Counting by 10s: 20, 30, 35, 40, 50", options: ["20", "35", "50"] },
          { prompt: "Counting by 2s: 12, 14, 16, 19, 20", options: ["14", "19", "20"] },
        ],
      },
      // ─── Medium-Hard: Identifying patterns ───
      {
        type: "open-response",
        title: "What Is the Rule?",
        instruction: "Look at each list of numbers. Write the skip counting rule (by 2s, by 5s, or by 10s).",
        prompts: [
          { text: "6, 8, 10, 12, 14 — The rule is: count by ___", type: "lines", lines: 1 },
          { text: "25, 30, 35, 40, 45 — The rule is: count by ___", type: "lines", lines: 1 },
          { text: "50, 60, 70, 80, 90 — The rule is: count by ___", type: "lines", lines: 1 },
          { text: "30, 32, 34, 36, 38 — The rule is: count by ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "pattern",
        title: "Skip Count Object Patterns",
        instruction: "Each row shows a skip counting pattern using objects. Draw the missing objects to continue it.",
        rows: [
          {
            sequence: ["star", "star", null, "star", "star", null, "star", "star", null],
            unitLength: 3,
          },
          {
            sequence: [
              "flower", "flower", "flower", "flower", "flower", null,
              "flower", "flower", "flower", "flower", "flower", null,
            ],
            unitLength: 6,
          },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count From Different Starts (2s)",
        instruction: "These patterns count by 2s but start at different numbers. Fill in the gaps!",
        sequences: [
          { items: [1, 3, 0, 7, 0], answer: [5, 9] },
          { items: [3, 5, 7, 0, 11, 0], answer: [9, 13] },
          { items: [0, 7, 9, 11, 0], answer: [5, 13] },
        ],
      },
      {
        type: "circle-correct",
        title: "Skip Count by 2s — Even or Odd Start?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "When we start at 2 and count by 2s, the numbers are all...", options: ["odd", "even", "mixed"] },
          { prompt: "When we start at 1 and count by 2s (1, 3, 5...), the numbers are all...", options: ["odd", "even", "mixed"] },
          { prompt: "Which is an even number?", options: ["7", "12", "15"] },
          { prompt: "Which is an odd number?", options: ["8", "14", "9"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Skip Count Jumps by 2",
        instruction: "Each bond shows a number and a jump of 2. What do you land on?",
        bonds: [
          { total: 10, partA: 8, partB: null },
          { total: 16, partA: 14, partB: null },
          { total: 24, partA: null, partB: 2 },
          { total: 32, partA: null, partB: 2 },
          { total: 40, partA: 38, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Skip Count Jumps by 5",
        instruction: "Each bond shows a number and a jump of 5. What do you land on?",
        bonds: [
          { total: 15, partA: 10, partB: null },
          { total: 35, partA: 30, partB: null },
          { total: 60, partA: null, partB: 5 },
          { total: 85, partA: null, partB: 5 },
          { total: 100, partA: 95, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Skip Count Jumps by 10",
        instruction: "Each bond shows a number and a jump of 10. What do you land on?",
        bonds: [
          { total: 30, partA: 20, partB: null },
          { total: 70, partA: 60, partB: null },
          { total: 100, partA: null, partB: 10 },
          { total: 120, partA: null, partB: 10 },
          { total: 50, partA: 40, partB: null },
        ],
      },
      // ─── Hard: Skip Counting Backwards ───
      {
        type: "sequence",
        title: "Skip Count Backwards by 2s",
        instruction: "Fill in the missing numbers. Count backwards by 2s!",
        sequences: [
          { items: [20, 18, 0, 14, 0], answer: [16, 12] },
          { items: [0, 28, 26, 0, 22], answer: [30, 24] },
          { items: [40, 0, 36, 34, 0], answer: [38, 32] },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count Backwards by 5s",
        instruction: "Fill in the missing numbers. Count backwards by 5s!",
        sequences: [
          { items: [50, 45, 0, 35, 0], answer: [40, 30] },
          { items: [0, 90, 85, 0, 75], answer: [95, 80] },
          { items: [100, 0, 90, 85, 0], answer: [95, 80] },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count Backwards by 10s",
        instruction: "Fill in the missing numbers. Count backwards by 10s!",
        sequences: [
          { items: [120, 110, 0, 90, 0], answer: [100, 80] },
          { items: [0, 60, 50, 0, 30], answer: [70, 40] },
          { items: [100, 0, 80, 70, 0], answer: [90, 60] },
        ],
      },
      {
        type: "circle-correct",
        title: "Backwards Skip Count — What Comes Next?",
        instruction: "We are counting backwards. Circle what comes next.",
        questions: [
          { prompt: "16, 14, 12, ?", options: ["11", "10", "8"] },
          { prompt: "45, 40, 35, ?", options: ["25", "30", "34"] },
          { prompt: "90, 80, 70, ?", options: ["65", "60", "50"] },
          { prompt: "30, 28, 26, ?", options: ["25", "24", "22"] },
        ],
      },
      // ─── Hard: Fill-in-the-gap reasoning ───
      {
        type: "sequence",
        title: "Mystery Skip Count — Find the Pattern",
        instruction: "Work out which skip count is being used (2s, 5s or 10s), then fill in the gaps!",
        sequences: [
          { items: [10, 20, 0, 40, 50, 0], answer: [30, 60] },
          { items: [6, 8, 0, 12, 0, 16], answer: [10, 14] },
          { items: [25, 30, 35, 0, 0, 50], answer: [40, 45] },
          { items: [0, 50, 0, 70, 80], answer: [40, 60] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Skip Counting",
        instruction: "Read each statement. Is it true or false? Circle your answer.",
        questions: [
          { prompt: "When we count by 2s, we always land on even numbers", options: ["True", "False"] },
          { prompt: "When we count by 5s, the numbers always end in 0 or 5", options: ["True", "False"] },
          { prompt: "When we count by 10s, the numbers always end in 0", options: ["True", "False"] },
          { prompt: "15 is in the skip count by 2s pattern", options: ["True", "False"] },
        ],
      },
      {
        type: "open-response",
        title: "Skip Count Challenge",
        instruction: "Write out the full skip counting sequence. Fill in every number!",
        prompts: [
          { text: "Count by 2s from 2 to 20: 2, ___, ___, ___, ___, ___, ___, ___, ___, 20", type: "lines", lines: 1 },
          { text: "Count by 5s from 5 to 50: 5, ___, ___, ___, ___, ___, ___, ___, ___, 50", type: "lines", lines: 1 },
          { text: "Count by 10s from 10 to 120: 10, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, 120", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Count by 2s, 5s or 10s?",
        instruction: "Sort each number sequence into the correct skip count group.",
        columns: ["Count by 2s", "Count by 5s", "Count by 10s"],
        items: [
          { label: "4, 6, 8, 10" },
          { label: "15, 20, 25, 30" },
          { label: "30, 40, 50, 60" },
          { label: "22, 24, 26, 28" },
          { label: "55, 60, 65, 70" },
          { label: "80, 90, 100, 110" },
        ],
      },
      // ─── Hard: Real-world applications ───
      {
        type: "open-response",
        title: "Skip Counting Word Problems",
        instruction: "Read each problem. Use skip counting to find the answer!",
        prompts: [
          { text: "A spider has 2 legs on each side. If there are 5 spiders, how many legs altogether? (Count by 2s five times, then double it — or just count by 10!)", type: "lines", lines: 2 },
          { text: "You have 7 bags with 5 lollies in each bag. Count by 5s to find the total.", type: "lines", lines: 2 },
          { text: "There are 4 rows of chairs with 10 chairs in each row. Count by 10s to find the total.", type: "lines", lines: 2 },
          { text: "You put 2 socks in each drawer. You have 8 drawers. How many socks altogether?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Real Life Skip Counting",
        instruction: "Circle the best way to count these things.",
        questions: [
          { prompt: "Counting pairs of shoes is best done by counting by...", options: ["1s", "2s", "10s"] },
          { prompt: "Counting 5-cent coins is best done by counting by...", options: ["2s", "5s", "10s"] },
          { prompt: "Counting bundles of 10 pencils is best done by counting by...", options: ["2s", "5s", "10s"] },
          { prompt: "Counting eyes on people in a room is best done by counting by...", options: ["2s", "5s", "10s"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Party Items",
        instruction: "Use skip counting to count each row quickly!",
        rows: [
          { object: "ball", count: 10 },
          { object: "star", count: 20 },
          { object: "heart", count: 30 },
          { object: "flower", count: 40 },
        ],
      },
      {
        type: "matching",
        title: "Match Skip Count to Total",
        instruction: "Draw a line to match each skip counting description to the correct total.",
        left: ["6 groups of 2", "4 groups of 5", "3 groups of 10", "8 groups of 2"],
        right: ["20", "16", "12", "30"],
      },
      {
        type: "open-response",
        title: "Draw and Skip Count",
        instruction: "Draw the objects, then skip count to find the total.",
        prompts: [
          { text: "Draw 5 groups of 2 stars. Skip count by 2s to find the total: ___", type: "box" },
          { text: "Draw 3 groups of 5 circles. Skip count by 5s to find the total: ___", type: "box" },
          { text: "Draw 4 groups of 10 dots. Skip count by 10s to find the total: ___", type: "box" },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count on a Number Line (2s)",
        instruction: "Imagine hopping along a number line by 2s. Fill in where you land!",
        sequences: [
          { items: [0, 2, 0, 6, 0, 10], answer: [4, 8] },
          { items: [10, 0, 14, 0, 18, 20], answer: [12, 16] },
          { items: [20, 22, 0, 0, 28, 30], answer: [24, 26] },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count on a Number Line (5s)",
        instruction: "Imagine hopping along a number line by 5s. Fill in where you land!",
        sequences: [
          { items: [0, 5, 0, 15, 0, 25], answer: [10, 20] },
          { items: [25, 0, 35, 0, 45, 50], answer: [30, 40] },
          { items: [50, 55, 0, 0, 70, 75], answer: [60, 65] },
        ],
      },
      {
        type: "sequence",
        title: "Skip Count on a Number Line (10s)",
        instruction: "Imagine hopping along a number line by 10s. Fill in where you land!",
        sequences: [
          { items: [0, 10, 0, 30, 0, 50], answer: [20, 40] },
          { items: [50, 0, 70, 0, 90, 100], answer: [60, 80] },
          { items: [80, 90, 0, 0, 120], answer: [100, 110] },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has More? (Skip Count to Check)",
        instruction: "Count each group using skip counting. Circle the group that has more.",
        pairs: [
          { leftCount: 10, rightCount: 14, object: "apple", question: "Which group has more? Use skip counting by 2s to check." },
          { leftCount: 15, rightCount: 20, object: "star", question: "Which group has more? Use skip counting by 5s to check." },
          { leftCount: 30, rightCount: 20, object: "heart", question: "Which group has more? Use skip counting by 10s to check." },
        ],
      },
      {
        type: "circle-correct",
        title: "Skip Count Quiz",
        instruction: "Show what you have learnt! Circle the correct answer.",
        questions: [
          { prompt: "What is the 5th number when counting by 2s?", options: ["8", "10", "12"] },
          { prompt: "What is the 4th number when counting by 5s?", options: ["15", "20", "25"] },
          { prompt: "What is the 6th number when counting by 10s?", options: ["50", "60", "70"] },
          { prompt: "Count by 5s: 75, 80, 85, ?", options: ["86", "90", "95"] },
        ],
      },
      {
        type: "open-response",
        title: "Skip Counting Riddles",
        instruction: "Read each clue and write the answer.",
        prompts: [
          { text: "I am counting by 2s. I said 12, then 14. What do I say next?", type: "lines", lines: 1 },
          { text: "I am counting by 5s. I said 40, then 45. What did I say before 40?", type: "lines", lines: 1 },
          { text: "I am counting by 10s backwards. I said 80, then 70. What do I say next?", type: "lines", lines: 1 },
          { text: "I am counting by 2s backwards. I said 18, then 16. What number did I start from if I said 3 numbers before 18?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames for Skip Counting",
        instruction: "Each ten frame shows a group of 10. Count the frames by 10s!",
        frames: [
          { filled: 10, total: 10 },
          { filled: 10, total: 10 },
          { filled: 10, total: 10 },
          { filled: 10, total: 10 },
          { filled: 10, total: 10 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames — Count by 5s",
        instruction: "Each ten frame is half filled (5 dots). Count by 5s to find the total!",
        frames: [
          { filled: 5, total: 10 },
          { filled: 5, total: 10 },
          { filled: 5, total: 10 },
          { filled: 5, total: 10 },
          { filled: 5, total: 10 },
          { filled: 5, total: 10 },
        ],
      },
      // ─── Home Activities ───
      {
        type: "home-activity",
        title: "Home Activity: Skip Count Objects",
        instruction: "Practise skip counting with objects you find at home!",
        suggestions: [
          "Put your shoes in a line and count by 2s (each pair = 2).",
          "Use 5-cent coins and count by 5s to find the total.",
          "Count your fingers by 10s: 10, 20, 30... How far can you go?",
          "Skip count by 2s to 40 while jumping on the spot!",
          "Count the wheels on toy cars by 2s (each side has 2 wheels).",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Skip Counting Songs & Games",
        instruction: "Make skip counting fun with these activities!",
        suggestions: [
          "Sing a skip counting song! Count by 2s to 20 in a funny voice.",
          "Clap every time you say a number when counting by 5s to 100.",
          "Play 'Buzz': take turns counting — say 'buzz' on every 10th number (10, 20, 30...).",
          "Write skip counting numbers on the footpath with chalk and hop along them!",
          "Count stairs by 2s as you walk up and down.",
        ],
      },
    ],
  },

  // ── WS 4: Addition & Subtraction to 20 ─────────────────────
  {
    slug: "addition-subtraction-to-20",
    title: "Addition & Subtraction to 20",
    strand: "Number",
    description:
      "Solve addition and subtraction problems with numbers to 20",
    activities: [
      {
        type: "number-bonds",
        title: "Addition Bonds",
        instruction:
          "Find the missing number to complete each addition.",
        bonds: [
          { total: 13, partA: 8, partB: null },
          { total: 12, partA: null, partB: 5 },
          { total: 15, partA: 9, partB: null },
          { total: 17, partA: null, partB: 8 },
          { total: 11, partA: 6, partB: null },
          { total: 20, partA: null, partB: 11 },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition",
        instruction:
          "Count the stars in each group. Write the total.",
        rows: [
          { object: "star", count: 9 },
          { object: "star", count: 4 },
          { object: "star", count: 13 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Answer",
        instruction: "Circle the correct answer for each sum.",
        questions: [
          { prompt: "13 + 5 = ?", options: ["17", "18", "19"] },
          { prompt: "8 + 9 = ?", options: ["16", "17", "18"] },
          { prompt: "14 - 6 = ?", options: ["7", "8", "9"] },
          { prompt: "20 - 7 = ?", options: ["12", "13", "14"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Subtraction Bonds",
        instruction:
          "Find the missing number to complete each subtraction.",
        bonds: [
          { total: 17, partA: 9, partB: null },
          { total: 15, partA: null, partB: 8 },
          { total: 20, partA: 12, partB: null },
          { total: 14, partA: null, partB: 6 },
          { total: 16, partA: 9, partB: null },
          { total: 19, partA: null, partB: 11 },
        ],
      },
      {
        type: "ten-frame",
        title: "Bridge Through 10",
        instruction:
          "Use the ten frames to help you add. Fill in dots, then count the total.",
        frames: [
          { filled: 8, total: 15 },
          { filled: 7, total: 13 },
          { filled: 9, total: 16 },
        ],
      },
      {
        type: "open-response",
        title: "Word Problems",
        instruction:
          "Read each problem and write a number sentence to solve it.",
        prompts: [
          {
            text: "Sam has 8 apples. He picks 6 more. How many does he have now?",
            type: "lines",
            lines: 2,
          },
          {
            text: "There are 17 birds on a fence. 9 fly away. How many are left?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Mia has 11 stickers. Her friend gives her 5 more. How many altogether?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Everyday Addition & Subtraction",
        instruction:
          "Practise adding and subtracting with things around the house!",
        suggestions: [
          "Put some grapes on a plate. Eat a few — how many are left?",
          "Count your toys. Borrow some from a sibling and count the total.",
          "Roll two dice and add the numbers together. Can you get to 20?",
          "Make up your own word problems for a family member to solve.",
        ],
      },
    ],
  },

  // ── WS 5: Equal Sharing & Grouping ──────────────────────────
  {
    slug: "equal-sharing-grouping",
    title: "Equal Sharing & Grouping",
    strand: "Number",
    description:
      "Solve practical problems involving equal sharing and grouping",
    activities: [
      {
        type: "count-objects",
        title: "Share into Equal Groups",
        instruction:
          "Look at the objects. Share them equally into the number of groups shown. How many in each group?",
        rows: [
          { object: "apple", count: 12 },
          { object: "star", count: 10 },
          { object: "heart", count: 15 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Right Share",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "6 shared equally between 2 people = ?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "12 shared equally among 4 people = ?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "10 shared equally among 5 people = ?",
            options: ["2 each", "3 each", "5 each"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Sharing Problems",
        instruction:
          "Draw a line to match each sharing problem to its answer.",
        left: [
          "10 shared into 5 groups",
          "8 shared into 2 groups",
          "15 shared into 3 groups",
          "20 shared into 4 groups",
        ],
        right: ["4", "5", "2", "5"],
      },
      {
        type: "open-response",
        title: "Draw Equal Groups",
        instruction:
          "Draw circles to share the objects equally into groups.",
        prompts: [
          { text: "Share 15 stars into 5 equal groups. Draw them!", type: "box" },
          { text: "Share 18 hearts into 3 equal groups. Draw them!", type: "box" },
        ],
      },
      {
        type: "count-objects",
        title: "How Many Groups?",
        instruction:
          "How many groups of the given size can you make? Count and write the answer.",
        rows: [
          { object: "flower", count: 20 },
          { object: "flower", count: 16 },
          { object: "flower", count: 12 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Sharing Snacks",
        instruction:
          "Practise equal sharing with real objects at home!",
        suggestions: [
          "Share 12 crackers equally between 3 people. How many each?",
          "Put 10 grapes into 2 equal bowls. How many in each?",
          "Can you share 9 strawberries equally among 3 people?",
          "Try sharing 15 blocks into groups of 5. How many groups?",
        ],
      },
    ],
  },

  // ── WS 6: Skip Counting & Repeating Patterns (Algebra) ─────
  {
    slug: "skip-counting-patterns",
    title: "Skip Counting & Repeating Patterns",
    strand: "Algebra",
    description:
      "Create skip counting and repeating patterns, identifying the repeating unit",
    activities: [
      {
        type: "pattern",
        title: "Continue the Pattern",
        instruction:
          "Look at each pattern. Draw the next objects to continue it.",
        rows: [
          {
            sequence: ["circle", "square", "triangle", "circle", "square", "triangle", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["heart", "heart", "star", "heart", "heart", "star", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["apple", "fish", "apple", "fish", null, null],
            unitLength: 2,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit",
        instruction:
          "What is the repeating unit in each pattern? Circle the correct answer.",
        questions: [
          {
            prompt: "Pattern: circle, square, circle, square, circle, square ...",
            options: ["circle", "circle, square", "square, circle, square"],
          },
          {
            prompt: "Pattern: red, red, blue, red, red, blue ...",
            options: ["red, blue", "red, red, blue", "red, red"],
          },
          {
            prompt: "Pattern: star, heart, heart, star, heart, heart ...",
            options: [
              "star, heart",
              "star, heart, heart",
              "heart, heart, star",
            ],
          },
        ],
      },
      {
        type: "sequence",
        title: "Skip Counting Patterns",
        instruction:
          "Fill in the missing numbers in these counting patterns.",
        sequences: [
          { items: [3, 6, 9, 0, 0, 18], answer: [12, 15] },
          { items: [4, 8, 0, 16, 0, 24], answer: [12, 20] },
          { items: [10, 20, 30, 0, 50, 0], answer: [40, 60] },
        ],
      },
      {
        type: "pattern",
        title: "What Comes Next?",
        instruction:
          "Look at each pattern and draw the next two objects.",
        rows: [
          {
            sequence: ["diamond", "diamond", "flower", "diamond", "diamond", "flower", null, null],
            unitLength: 3,
          },
          {
            sequence: [
              "butterfly", "star", "star", "butterfly", "star", "star", null, null, null,
            ],
            unitLength: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Pattern",
        instruction:
          "Create your own repeating pattern using shapes or pictures. Write or draw the repeating unit underneath.",
        prompts: [
          {
            text: "Draw a repeating pattern with 2 different shapes:",
            type: "box",
          },
          {
            text: "Draw a repeating pattern with 3 different shapes:",
            type: "box",
          },
          {
            text: "What is the repeating unit in your pattern? Write it here:",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Patterns Everywhere",
        instruction:
          "Find and make repeating patterns at home!",
        suggestions: [
          "Find a pattern on clothing, tiles or a blanket. What is the repeating unit?",
          "Make a pattern using spoons and forks: spoon, fork, spoon, fork...",
          "Clap a rhythm pattern: clap-clap-stomp, clap-clap-stomp...",
          "Use coloured blocks or LEGO to build a 3-colour repeating pattern.",
        ],
      },
    ],
  },

  // ── WS 7: Compare & Order Measures (Measurement) ────────────
  {
    slug: "compare-order-measures",
    title: "Compare & Order Measures",
    strand: "Measurement",
    description:
      "Compare and order objects and events by length, mass, capacity and duration",
    activities: [
      {
        type: "sorting",
        title: "Order by Length",
        instruction:
          "Sort these items from shortest to longest. Write 1 (shortest) to 4 (longest).",
        columns: ["shortest", "longest"],
        items: [
          { label: "pencil", icon: "pencil" },
          { label: "spoon", icon: "spoon" },
          { label: "book", icon: "book" },
          { label: "feather", icon: "feather" },
        ],
      },
      {
        type: "circle-correct",
        title: "Heaviest and Lightest",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Which is heaviest?",
            options: ["feather", "book", "pencil"],
            optionIcons: ["feather", "book", "pencil"],
          },
          {
            prompt: "Which holds the most water?",
            options: ["cup", "bucket", "spoon"],
            optionIcons: ["cup", "bucket", "spoon"],
          },
          {
            prompt: "Which is lightest?",
            options: ["rock", "feather", "ball"],
            optionIcons: ["rock", "feather", "ball"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Order by Duration",
        instruction:
          "Put these events in order from quickest to longest. Write 1, 2, 3.",
        columns: ["quickest", "longest"],
        items: [
          { label: "Blinking your eyes" },
          { label: "Eating lunch" },
          { label: "A school day" },
        ],
      },
      {
        type: "matching",
        title: "Match to Duration",
        instruction:
          "Draw a line to match each event to how long it takes.",
        left: ["Brushing teeth", "Sleeping at night", "Clapping once", "Watching a movie"],
        right: ["a moment", "2 minutes", "8 hours", "2 hours"],
      },
      {
        type: "sorting",
        title: "Order by Capacity",
        instruction:
          "Sort these containers from least to most water they can hold.",
        columns: ["holds least", "holds most"],
        items: [
          { label: "teaspoon", icon: "spoon" },
          { label: "cup", icon: "cup" },
          { label: "bucket", icon: "bucket" },
          { label: "bottle", icon: "bottle" },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Measure & Compare",
        instruction:
          "Find things at home to compare and put in order!",
        suggestions: [
          "Find 3 objects and put them in order from shortest to longest.",
          "Hold two things — which is heavier? Which is lighter?",
          "Pour water into different cups — which holds the most?",
          "What takes longer: tying your shoe or counting to 10?",
        ],
      },
    ],
  },

  // ── WS 8: Informal Units — Length (Measurement) ─────────────
  {
    slug: "informal-units-length",
    title: "Measuring with Informal Units",
    strand: "Measurement",
    description:
      "Measure the length of shapes and objects using uniform informal units",
    activities: [
      {
        type: "count-objects",
        title: "Count the Hand Spans",
        instruction:
          "Count the hand-span pictures along each object. Write how many hand spans long it is.",
        rows: [
          { object: "pencil", count: 3 },
          { object: "book", count: 5 },
          { object: "spoon", count: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Long Is It?",
        instruction: "Circle the correct measurement.",
        questions: [
          {
            prompt: "The pencil is ___ paper clips long",
            options: ["4", "6", "8"],
          },
          {
            prompt: "The book is ___ blocks long",
            options: ["3", "5", "7"],
          },
          {
            prompt: "The table is ___ hand spans long",
            options: ["6", "10", "15"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Measure and Record",
        instruction:
          "Draw blocks along each object to measure it. Write the number of blocks.",
        prompts: [
          {
            text: "How many blocks long is your pencil? Draw and count.",
            type: "box",
          },
          {
            text: "How many blocks long is your hand? Draw and count.",
            type: "box",
          },
        ],
      },
      {
        type: "matching",
        title: "Match Objects to Measurements",
        instruction:
          "Draw a line to match each object to its length in paper clips.",
        left: ["eraser", "pencil", "ruler", "crayon"],
        right: ["2 paper clips", "6 paper clips", "10 paper clips", "4 paper clips"],
      },
      {
        type: "circle-correct",
        title: "Why Use the Same Unit?",
        instruction: "Think about measurement and circle the best answer.",
        questions: [
          {
            prompt: "Why should we use the same-sized unit when measuring?",
            options: [
              "So it looks pretty",
              "So the measurement is fair and accurate",
              "Because the teacher said so",
            ],
          },
          {
            prompt: "Which would give the most accurate measurement?",
            options: [
              "Using different-sized blocks",
              "Using blocks that are all the same size",
              "Guessing the length",
            ],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Measure at Home",
        instruction:
          "Measure 3 things at home using your hand spans!",
        suggestions: [
          "Measure the length of your bed in hand spans.",
          "How many hand spans wide is the dining table?",
          "Measure a door — is it more or less than 10 hand spans?",
          "Try measuring the same thing with different units (hand spans vs spoons). Why are the numbers different?",
        ],
      },
    ],
  },

  // ── WS 9: Classify Shapes (Space) ──────────────────────────
  {
    slug: "classify-shapes",
    title: "Classify Shapes",
    strand: "Space",
    description:
      "Make, compare and classify shapes and objects using obvious features",
    activities: [
      {
        type: "sorting",
        title: "Sort by Number of Sides",
        instruction:
          "Sort each shape into the correct group by counting its sides.",
        columns: ["3 sides", "4 sides", "5 or more sides"],
        items: [
          { label: "triangle", icon: "triangle" },
          { label: "square", icon: "square" },
          { label: "rectangle", icon: "square" },
          { label: "diamond", icon: "diamond" },
          { label: "pentagon" },
          { label: "hexagon" },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify Shapes",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Which shape has 4 sides and 4 corners?",
            options: ["triangle", "square", "circle"],
            optionIcons: ["triangle", "square", "circle"],
          },
          {
            prompt: "Which shape has 3 sides?",
            options: ["square", "circle", "triangle"],
            optionIcons: ["square", "circle", "triangle"],
          },
          {
            prompt: "Which shape has no corners?",
            options: ["triangle", "diamond", "circle"],
            optionIcons: ["triangle", "diamond", "circle"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Shapes to Properties",
        instruction:
          "Draw a line from each description to the matching shape name.",
        left: [
          "3 straight sides",
          "4 equal sides, 4 corners",
          "0 sides, 0 corners",
          "4 sides (2 long, 2 short)",
        ],
        right: ["rectangle", "circle", "square", "triangle"],
      },
      {
        type: "shape-trace",
        title: "Trace and Label Shapes",
        instruction:
          "Trace each shape carefully. Write its name underneath.",
        shapes: [
          { name: "pentagon", sides: 5 },
          { name: "hexagon", sides: 6 },
          { name: "rectangle", sides: 4 },
          { name: "triangle", sides: 3 },
        ],
      },
      {
        type: "tally-chart",
        title: "Count the Shapes",
        instruction:
          "Count each type of shape in the picture. Record the tally.",
        categories: [
          { label: "Triangles", icon: "triangle", count: 4 },
          { label: "Squares", icon: "square", count: 3 },
          { label: "Circles", icon: "circle", count: 5 },
          { label: "Diamonds", icon: "diamond", count: 2 },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Shape Hunt",
        instruction:
          "Find and name shapes around the house!",
        suggestions: [
          "Find something that is a rectangle. How many sides does it have?",
          "Can you find a circle in your kitchen?",
          "Look for triangles — check roofs, signs and food!",
          "Draw 3 shapes you found and write how many sides each has.",
        ],
      },
    ],
  },

  // ── WS 10: Directions in Space ──────────────────────────────
  {
    slug: "directions-in-space",
    title: "Directions in Space",
    strand: "Space",
    description:
      "Give and follow directions to move people and objects within a space",
    activities: [
      {
        type: "circle-correct",
        title: "Follow the Directions",
        instruction:
          "Imagine following each set of directions. Circle the correct answer.",
        questions: [
          {
            prompt: "Take 2 steps forward, then turn left. Which way are you facing?",
            options: ["forward", "left", "right"],
          },
          {
            prompt: "Turn around (half turn). If you were facing the door, now you face the...",
            options: ["door", "window (opposite wall)", "ceiling"],
          },
          {
            prompt: "Take 1 step back and turn right. Which way do you move next?",
            options: ["left", "backwards", "right"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Directions to Arrows",
        instruction:
          "Draw a line to match each direction word to the correct symbol.",
        left: ["forward", "backward", "turn left", "turn right"],
        right: ["\u2191", "\u2190", "\u2193", "\u2192"],
      },
      {
        type: "sequence",
        title: "Put Steps in Order",
        instruction:
          "Number these direction steps in the correct order to get from the door to the desk.",
        items: [
          { label: "Walk 3 steps forward" },
          { label: "Turn left" },
          { label: "Walk 2 steps forward" },
          { label: "You are at the desk!" },
        ],
      },
      {
        type: "open-response",
        title: "Write Directions",
        instruction:
          "Look at the simple map below. Write directions to get from the star to the house.",
        prompts: [
          {
            text: "Write step-by-step directions from the star to the house. Use words like forward, turn left, turn right.",
            type: "lines",
            lines: 4,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Way Am I Facing?",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "I face the window. I turn right. Now I face the...",
            options: ["window", "door (right wall)", "bookshelf (left wall)"],
          },
          {
            prompt: "I face the board. I make a quarter turn left. Now I face the...",
            options: ["board", "right wall", "left wall"],
          },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Direction Treasure Hunt",
        instruction:
          "Play a direction game with someone at home!",
        suggestions: [
          "Hide a toy and write 3-step directions for someone to find it.",
          "Give directions to walk from your bedroom to the kitchen.",
          "Play 'robot': one person gives directions, the other follows exactly.",
          "Use 'forward', 'backward', 'turn left' and 'turn right' to guide someone through a room.",
        ],
      },
    ],
  },

  // ── WS 11: Categorical Data Displays (Statistics) ───────────
  {
    slug: "categorical-data-displays",
    title: "Categorical Data Displays",
    strand: "Statistics",
    description:
      "Collect and record categorical data, create one-to-one displays, and compare data using frequencies",
    activities: [
      {
        type: "tally-chart",
        title: "Count and Tally",
        instruction:
          "Count each type of object in the picture. Use tally marks to record your count.",
        categories: [
          { label: "Stars", icon: "star", count: 6 },
          { label: "Hearts", icon: "heart", count: 4 },
          { label: "Flowers", icon: "flower", count: 7 },
          { label: "Fish", icon: "fish", count: 3 },
        ],
      },
      {
        type: "picture-graph",
        title: "Read the Picture Graph",
        instruction:
          "Look at the picture graph and answer the questions below.",
        rows: [
          { label: "Apples", icon: "apple", count: 5 },
          { label: "Bananas", icon: "banana", count: 3 },
          { label: "Grapes", icon: "grape", count: 7 },
          { label: "Watermelons", icon: "watermelon", count: 2 },
        ],
        questions: [
          "Which fruit has the most?",
          "Which fruit has the least?",
          "How many more grapes than bananas?",
          "How many apples and bananas altogether?",
        ],
      },
      {
        type: "circle-correct",
        title: "Compare the Data",
        instruction:
          "Use the tally chart above to answer these questions. Circle the correct answer.",
        questions: [
          {
            prompt: "Which category has the most?",
            options: ["Stars", "Hearts", "Flowers", "Fish"],
          },
          {
            prompt: "How many more stars than fish?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "Which two categories together make 10?",
            options: [
              "Stars and Hearts",
              "Stars and Fish",
              "Hearts and Flowers",
            ],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort Before Counting",
        instruction:
          "Sort these items into categories first, then count how many in each group.",
        columns: ["Animals", "Fruits", "Shapes"],
        items: [
          { label: "cat", icon: "cat" },
          { label: "apple", icon: "apple" },
          { label: "triangle", icon: "triangle" },
          { label: "dog", icon: "dog" },
          { label: "banana", icon: "banana" },
          { label: "circle", icon: "circle" },
          { label: "bird", icon: "bird" },
          { label: "grape", icon: "grape" },
          { label: "square", icon: "square" },
        ],
      },
      {
        type: "open-response",
        title: "Conduct a Survey",
        instruction:
          "Survey 5 people: 'What is your favourite colour?' Write their answers and make a tally chart.",
        prompts: [
          {
            text: "Write each person's name and their favourite colour:",
            type: "lines",
            lines: 5,
          },
          {
            text: "Now make a tally chart showing how many chose each colour:",
            type: "box",
          },
          {
            text: "Which colour was the most popular?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Family Survey",
        instruction:
          "Conduct your own survey at home and make a picture graph!",
        suggestions: [
          "Ask your family: 'What is your favourite animal?' Record the answers.",
          "Draw a picture graph showing the results — one picture for each answer.",
          "Which answer was most popular? Which was least popular?",
          "Try another question: 'What is your favourite breakfast food?'",
        ],
      },
    ],
  },
];

export function getYear1Worksheet(
  slug: string
): WorksheetItem | undefined {
  return year1MathsWorksheets.find((w) => w.slug === slug);
}
