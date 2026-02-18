import type { WorksheetItem } from "./worksheet-types";

export const year1MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Number Names to 120 ──────────────────────────────
  {
    slug: "number-names-to-120",
    title: "Number Names & Numerals to 120",
    strand: "Number",
    description:
      "Connect number names, numerals and quantities, and order numbers to at least 120",
    lesson: {
      title: "Numbers All the Way to 120",
      objective: "Read, write and sequence numbers from 1 to 120, connecting spoken names to written numerals.",
      materials: [
        "A piece of paper torn into small cards (or sticky notes)",
        "A pencil",
        "20 small objects — blocks, buttons, coins or pasta pieces",
        "An old calendar or page from a book that has numbers visible",
      ],
      intro: {
        title: "The Big Count",
        script: "I need your help with something. I am going to put objects in these boxes but I keep losing count around the big numbers. Can you count along with me out loud so I do not lose my place? Here we go...",
        action: "Count together out loud from 1, pointing to fingers or tapping the table for each number. Slow down around tricky spots — the teens (thirteen, fourteen) and the transition into the twenties. Let your child lead once they find the rhythm.",
      },
      mainActivity: {
        title: "Number Card Scramble",
        script: "I\'m going to write some numbers on these cards, and you\'re going to put them in order from smallest to biggest. Some of them might look tricky — like 12 and 21 — so look carefully at both digits. Which number is bigger?",
        action: "Write 12 numbers in the range 1–120 on scraps of paper — include some teens, some decades (30, 60, 90), and a few numbers above 100. Shuffle them and ask your child to arrange them in order. Talk through any that they find tricky, especially numbers like 19 vs 91.",
      },
      wrapUp: {
        title: "Tell Me the Number",
        script: "Can you show me what the number 47 looks like? What about 103? And can you tell me which is bigger — 89 or 98? How do you know? Tell me in your own words.",
        action: "After the child writes a few numbers, swap roles: child calls out a number and you write it. Then check each other. Ask: which numbers were hardest? Why do you think those ones are tricky?",
      },
      parentTip: "Numbers beyond 20 can feel overwhelming for children — and parents! Focus on the pattern: after 'twenty' comes twenty-one, twenty-two, just like after 'one' comes two, three. The 'decade words' (thirty, forty, fifty...) are the real hurdles — make a poster of them on the wall for reference.",
      extension: "Play 'Number Line Leap'. Tape a number line from 0 to 120 along a hallway using paper squares. Call out a number and challenge your child to hop to it. Ask 'What number is one more? Ten more?' as they land on each square.",
      resources: [
        { title: "Khan Academy – Counting to 120", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-place-value", description: "Year 1 place value and counting activities up to 120." },
        { title: "Maths is Fun – Counting", url: "https://www.mathsisfun.com/numbers/counting.html", description: "Visual and interactive counting practice up to large numbers." },
        { title: "NRICH – Number and Place Value", url: "https://nrich.maths.org/early-years", description: "Investigative number activities for early primary learners." },
      ],
    },
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
    nextSteps: ["tens-and-ones", "skip-counting"],
  },

  // ── WS 2: Tens and Ones ─────────────────────────────────────
  {
    slug: "tens-and-ones",
    title: "Tens and Ones",
    strand: "Number",
    description: "Partition two-digit numbers into tens and ones",
    lesson: {
      title: "Tens and Ones — Breaking Numbers Apart",
      objective: "Understand that two-digit numbers are made of groups of ten and leftover ones, and use this to read and build numbers.",
      materials: [
        "20 paddle pop sticks, straws, or pencils",
        "Rubber bands or string to bundle groups of ten",
        "A piece of paper divided into two columns labelled Tens and Ones",
        "A pencil",
      ],
      intro: {
        title: "Bundle the Tens",
        script: "Let\'s count out 10 sticks together — one, two... ten. Now we\'ll bundle them with a rubber band. That bundle is ONE ten. Can you grab another 10 sticks and make me another bundle? Good — now we have TWO tens. Two tens is twenty. Can you see how the number 2 in \'twenty\' comes from our two bundles?",
        action: "Lay out sticks for your child to count into groups of ten and bundle. Do 1–3 bundles together first. The physical bundling is the key experience — let your child do the counting and bundling.",
      },
      mainActivity: {
        title: "Make the Number",
        script: "I\'ll say a number — like thirty-four. Your job is to show me that number with sticks. How many bundles of ten do you need? How many singles? Place them in the right column on your paper.",
        action: "Call out two-digit numbers (start with multiples of ten, then add ones). Your child uses bundled sticks for tens and singles for ones. For each number, ask: \'How many tens? How many ones?\' then write it in the columns together.",
      },
      wrapUp: {
        title: "Read My Number",
        script: "Now it\'s your turn to quiz me! Make a number with the sticks and I\'ll try to guess what it is. Then swap — you look at my sticks and tell me the number. How many tens? How many ones? What\'s the whole number?",
        action: "Take turns building a number for the other person to read. Encourage your child to say the full sentence: \'Three tens and five ones makes thirty-five.\'",
      },
      parentTip: "Place value is one of the most important concepts in primary maths — if children truly understand tens and ones, all later arithmetic becomes logical. Use physical objects (bundles of 10 icy-pole sticks, groups of 10 coins) far more than abstract worksheets at this stage.",
      extension: "Build numbers with bundled straws. Take 10 straws, rubber-band them together as 'one ten'. Make a few bundles and some loose straws. Your child shows numbers by picking the right bundles and singles — for example, 34 = 3 bundles and 4 loose straws.",
      resources: [
        { title: "Khan Academy – Tens and Ones", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-place-value", description: "Interactive exercises on understanding place value with tens and ones." },
        { title: "Maths is Fun – Place Value", url: "https://www.mathsisfun.com/place-value.html", description: "Clear visual explanation of ones, tens and hundreds place value." },
        { title: "NRICH – Place Value Activities", url: "https://nrich.maths.org/early-years", description: "Hands-on place value games and investigations for Year 1." },
      ],
    },
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
    nextSteps: ["skip-counting", "addition-subtraction-to-20"],
  },

  // ── WS 3: Skip Counting ─────────────────────────────────────
  {
    slug: "skip-counting",
    title: "Skip Counting",
    strand: "Number",
    description:
      "Skip count in twos, fives or tens to at least 120",
    lesson: {
      title: "Counting in Leaps — 2s, 5s and 10s",
      objective: "Skip count forwards by 2s, 5s and 10s to at least 120, using rhythm and patterns to build fluency.",
      materials: [
        "A collection of socks (for counting in pairs)",
        "5 fingers on one hand — no materials needed",
        "A piece of paper and pencil to write number sequences",
        "Small coins or buttons — 30 to 40 pieces",
      ],
      intro: {
        title: "Sock Pairs",
        script: "Let\'s count these socks. But — instead of counting one by one — we\'re going to count in pairs. Two... four... six... each time I put down a pair. Listen to the pattern: two, four, six, eight, ten. Can you keep going? What comes after ten?",
        action: "Lay out 10 socks in pairs, placing each pair down as you say the number. Then put away the socks and repeat just using hands — tap both hands down for \'two\', tap again for \'four\'. Let your child take over the tapping.",
      },
      mainActivity: {
        title: "Three Counting Challenges",
        script: "Challenge one: count my coins in twos — grab two at a time. Challenge two: count to 50 in fives — use your fingers to feel when you\'ve counted five. Challenge three: let\'s count in tens as fast as we can. Ten, twenty, thirty... go!",
        action: "For the 2s challenge, put out 20 coins for your child to group into pairs and count. For 5s, clap five times slowly — one, two, three, four, five — then on that fifth clap say the number you have reached: five. Clap five more — on the tenth clap say ten. Keep going like that. For 10s, hold up ten fingers, then fold and hold up again. Write each sequence on paper together.",
      },
      wrapUp: {
        title: "Fill the Gap",
        script: "I\'m going to write a counting sequence with a gap, and you fill in the missing number. Ready? 10, 20, ___, 40. What\'s missing? What about 2, 4, ___, 8? Good — now you write one for me with a gap, and I\'ll try to figure it out.",
        action: "Write 3–4 incomplete sequences for your child to complete, one from each skip-count type. Then swap so they write a sequence for you.",
      },
      parentTip: "Skip counting is best learned through movement and song before written work. Count by 2s while jumping, by 5s while clapping, by 10s while taking big steps. Once the rhythm is in the body, the written pattern makes much more sense.",
      extension: "Play 'Skip Count Shopping'. Pretend your toy figures each need 2 biscuits. Line up 5 figures and count out the biscuits by 2s: 2, 4, 6, 8, 10. Then try groups of 5 or 10. Keep a running score on paper to see the skip-count sequence build.",
      resources: [
        { title: "Khan Academy – Skip Counting", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-place-value", description: "Year 1 skip counting exercises by 2s, 5s and 10s." },
        { title: "Maths is Fun – Skip Counting", url: "https://www.mathsisfun.com/numbers/skip-counting.html", description: "Visual introduction to skip counting with number patterns." },
        { title: "NRICH – Counting in Steps", url: "https://nrich.maths.org/early-years", description: "Investigative activities exploring counting patterns and skip counting." },
      ],
    },
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
    nextSteps: ["addition-subtraction-to-20"],
  },

  // ── WS 4: Addition & Subtraction to 20 ─────────────────────
  {
    slug: "addition-subtraction-to-20",
    title: "Addition & Subtraction to 20",
    strand: "Number",
    description:
      "Solve addition and subtraction problems with numbers to 20",
    lesson: {
      title: "Adding and Taking Away to 20",
      objective: "Use count-on and count-back strategies to solve addition and subtraction problems with totals to 20.",
      materials: [
        "20 small objects — blocks, coins, pasta, or buttons",
        "A piece of card or paper folded in half (to hide objects underneath)",
        "A pencil and piece of paper for recording",
      ],
      intro: {
        title: "The Hiding Game",
        script: "I\'ve got 7 blocks. Watch — I\'m hiding some under this card. Now I\'ve got 3 showing. How many are hiding? You don\'t need to count all the way from one — start from 3 and count up until you get to 7. Three... four, five, six, seven. How many did you count on?",
        action: "Put out 7 blocks. Slide some under a folded card while your child watches, leaving some visible. Ask how many are hidden. Repeat with different starting totals. Model \'count on\' by tapping each number and using fingers to track.",
      },
      mainActivity: {
        title: "Build It, Write It",
        script: "We\'re going to make some addition and subtraction sums using our blocks — and then write them down. Start with this: put out 8 blocks. Now add 5 more. Count them all up. What do we write? Eight plus five equals... Now take away 6. Thirteen take away six equals...",
        action: "Work through 4–5 examples together, using blocks first and then writing the number sentence. Encourage count-on for addition (start at the bigger number) and count-back for subtraction. Look for opportunities where your child already knows the answer without counting — celebrate this.",
      },
      wrapUp: {
        title: "Story Sums",
        script: "Let me tell you a story and you solve it. I had 9 apples. I ate 4. How many are left? Now you make up a story for me using adding or taking away, and I\'ll try to solve it. Use your blocks if it helps!",
        action: "Tell 2 addition and 2 subtraction stories in everyday contexts. Encourage your child to make up one of their own. Ask them to explain how they got the answer.",
      },
      parentTip: "At Year 1, children are moving from counting-all (counting every object from 1) to counting-on (starting from the larger number). If your child always starts from 1, model counting on: 'I already have 8 — I'll just count on 3 more: 9, 10, 11.' This is a big conceptual step; be patient.",
      extension: "Make a 'story maths' game. Tell a simple number story: 'There were 7 birds on the fence. 3 flew away. How many are left?' Your child acts it out with toy animals or drawings. Then let them make up their own story for you to solve.",
      resources: [
        { title: "Khan Academy – Addition and Subtraction to 20", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-add-subtract", description: "Year 1 addition and subtraction strategies and exercises up to 20." },
        { title: "Maths is Fun – Subtraction", url: "https://www.mathsisfun.com/numbers/subtraction.html", description: "Visual and interactive subtraction explanations for young learners." },
        { title: "NRICH – Addition and Subtraction", url: "https://nrich.maths.org/early-years", description: "Problem-solving activities building addition and subtraction fluency." },
      ],
    },
    activities: [
      // ─── Easy: Addition to 10 ───────────────────────────────────

      {
        type: "number-bonds",
        title: "Addition Bonds to 5",
        instruction: "Find the missing number to make each total.",
        bonds: [
          { total: 3, partA: 1, partB: null },
          { total: 4, partA: null, partB: 2 },
          { total: 5, partA: 3, partB: null },
          { total: 5, partA: null, partB: 4 },
          { total: 4, partA: 1, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Addition Bonds to 10",
        instruction: "Fill in the missing part to make 10.",
        bonds: [
          { total: 10, partA: 7, partB: null },
          { total: 10, partA: null, partB: 4 },
          { total: 10, partA: 2, partB: null },
          { total: 10, partA: null, partB: 9 },
          { total: 10, partA: 5, partB: null },
          { total: 10, partA: null, partB: 3 },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Add Stars",
        instruction:
          "Count the stars in each row. Write the number you see.",
        rows: [
          { object: "star", count: 3 },
          { object: "star", count: 5 },
          { object: "star", count: 8 },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Add Hearts",
        instruction:
          "Count the hearts in each row. Write the total.",
        rows: [
          { object: "heart", count: 2 },
          { object: "heart", count: 6 },
          { object: "heart", count: 8 },
        ],
      },
      {
        type: "matching",
        title: "Match the Sum to the Answer",
        instruction:
          "Draw a line from each addition to the correct answer.",
        left: ["2 + 3", "4 + 1", "3 + 4", "5 + 2", "1 + 6"],
        right: ["7", "5", "5", "7", "7"],
      },
      {
        type: "matching",
        title: "Addition Pairs",
        instruction:
          "Draw a line to match each sum to its answer.",
        left: ["1 + 8", "3 + 6", "2 + 7", "5 + 5", "4 + 4"],
        right: ["9", "10", "9", "8", "9"],
      },
      {
        type: "circle-correct",
        title: "Pick the Right Answer (to 10)",
        instruction: "Circle the correct answer for each addition.",
        questions: [
          { prompt: "3 + 2 = ?", options: ["4", "5", "6"] },
          { prompt: "4 + 4 = ?", options: ["7", "8", "9"] },
          { prompt: "6 + 3 = ?", options: ["8", "9", "10"] },
          { prompt: "5 + 5 = ?", options: ["9", "10", "11"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Addition to 10",
        instruction: "Circle the correct answer for each sum.",
        questions: [
          { prompt: "1 + 7 = ?", options: ["7", "8", "9"] },
          { prompt: "2 + 6 = ?", options: ["7", "8", "9"] },
          { prompt: "3 + 5 = ?", options: ["7", "8", "9"] },
          { prompt: "0 + 9 = ?", options: ["8", "9", "10"] },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames: Adding to 10",
        instruction:
          "Look at how many dots are filled. How many more do you need to make 10?",
        frames: [
          { filled: 3, total: 10 },
          { filled: 6, total: 10 },
          { filled: 8, total: 10 },
          { filled: 1, total: 10 },
        ],
      },
      {
        type: "sequence",
        title: "Count On to Add",
        instruction:
          "Start at the first number and count on. Fill in the missing answers.",
        sequences: [
          { items: [5, 6, 7, 0, 0, 10], answer: [8, 9] },
          { items: [3, 4, 0, 6, 0, 8], answer: [5, 7] },
          { items: [1, 2, 3, 0, 5, 0], answer: [4, 6] },
        ],
      },
      {
        type: "open-response",
        title: "Draw to Add",
        instruction:
          "Draw circles to help you solve each addition. Write the answer.",
        prompts: [
          { text: "3 + 4 = ___", type: "box" },
          { text: "5 + 2 = ___", type: "box" },
          { text: "6 + 4 = ___", type: "box" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: More Than 5 or Less Than 5?",
        instruction:
          "Sort each addition answer. Does it make more than 5 or less than 5?",
        columns: ["Less than 5", "More than 5"],
        items: [
          { label: "1 + 2" },
          { label: "3 + 4" },
          { label: "2 + 1" },
          { label: "4 + 3" },
          { label: "0 + 4" },
          { label: "5 + 3" },
        ],
      },

      // ─── Easy-Medium: Addition to 15 ────────────────────────────

      {
        type: "number-bonds",
        title: "Addition Bonds to 12",
        instruction: "Find the missing number to complete each addition.",
        bonds: [
          { total: 11, partA: 5, partB: null },
          { total: 12, partA: null, partB: 4 },
          { total: 11, partA: 8, partB: null },
          { total: 12, partA: null, partB: 7 },
          { total: 11, partA: 3, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Addition Bonds to 15",
        instruction: "Fill in the missing part to complete each sum.",
        bonds: [
          { total: 13, partA: 6, partB: null },
          { total: 14, partA: null, partB: 5 },
          { total: 15, partA: 8, partB: null },
          { total: 13, partA: null, partB: 9 },
          { total: 14, partA: 7, partB: null },
          { total: 15, partA: null, partB: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Answer (to 15)",
        instruction: "Circle the correct answer for each addition.",
        questions: [
          { prompt: "7 + 4 = ?", options: ["10", "11", "12"] },
          { prompt: "8 + 5 = ?", options: ["12", "13", "14"] },
          { prompt: "6 + 7 = ?", options: ["12", "13", "14"] },
          { prompt: "9 + 4 = ?", options: ["12", "13", "14"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Addition to 15",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "5 + 8 = ?", options: ["12", "13", "14"] },
          { prompt: "9 + 6 = ?", options: ["14", "15", "16"] },
          { prompt: "7 + 7 = ?", options: ["13", "14", "15"] },
          { prompt: "6 + 9 = ?", options: ["14", "15", "16"] },
        ],
      },
      {
        type: "matching",
        title: "Match Sums to 15",
        instruction:
          "Draw a line from each addition to the correct answer.",
        left: ["6 + 5", "7 + 6", "8 + 4", "9 + 5", "7 + 8"],
        right: ["11", "13", "12", "14", "15"],
      },
      {
        type: "count-objects",
        title: "Count the Apples — Addition to 15",
        instruction:
          "Count the apples in each row. Write the total.",
        rows: [
          { object: "apple", count: 11 },
          { object: "apple", count: 13 },
          { object: "apple", count: 15 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames: Making 11 to 15",
        instruction:
          "Fill in the ten frame first, then count the extras. Write the total.",
        frames: [
          { filled: 7, total: 12 },
          { filled: 9, total: 14 },
          { filled: 8, total: 13 },
          { filled: 6, total: 11 },
        ],
      },
      {
        type: "sequence",
        title: "Count On from 8",
        instruction:
          "Start at 8 and count on. Fill in the missing numbers.",
        sequences: [
          { items: [8, 9, 10, 0, 0, 13], answer: [11, 12] },
          { items: [8, 0, 10, 11, 0, 13], answer: [9, 12] },
          { items: [9, 10, 0, 12, 0, 14], answer: [11, 13] },
        ],
      },
      {
        type: "open-response",
        title: "Write the Sum",
        instruction:
          "Write a number sentence for each problem. Then write the answer.",
        prompts: [
          { text: "I have 7 flowers and pick 6 more. 7 + 6 = ___", type: "lines", lines: 1 },
          { text: "There are 9 birds and 5 join them. 9 + 5 = ___", type: "lines", lines: 1 },
          { text: "I eat 8 grapes then 4 more. 8 + 4 = ___", type: "lines", lines: 1 },
        ],
      },

      // ─── Medium: Addition to 20 (bridging through 10) ──────────

      {
        type: "number-bonds",
        title: "Addition Bonds to 18",
        instruction: "Find the missing number in each addition.",
        bonds: [
          { total: 16, partA: 9, partB: null },
          { total: 17, partA: null, partB: 8 },
          { total: 18, partA: 9, partB: null },
          { total: 16, partA: null, partB: 7 },
          { total: 17, partA: 8, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Addition Bonds to 20",
        instruction: "Fill in the missing part to make 20.",
        bonds: [
          { total: 20, partA: 11, partB: null },
          { total: 20, partA: null, partB: 8 },
          { total: 20, partA: 15, partB: null },
          { total: 20, partA: null, partB: 13 },
          { total: 20, partA: 6, partB: null },
          { total: 20, partA: null, partB: 17 },
        ],
      },
      {
        type: "ten-frame",
        title: "Bridge Through 10 — Addition",
        instruction:
          "Use the ten frame to help you add. Fill in the dots and count the total.",
        frames: [
          { filled: 8, total: 15 },
          { filled: 7, total: 13 },
          { filled: 9, total: 16 },
          { filled: 6, total: 14 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames: Making 16 to 20",
        instruction:
          "Fill up the first ten frame. Then count the extra dots for the second frame.",
        frames: [
          { filled: 9, total: 17 },
          { filled: 8, total: 18 },
          { filled: 7, total: 16 },
          { filled: 9, total: 20 },
        ],
      },
      {
        type: "circle-correct",
        title: "Choose the Answer (to 20)",
        instruction: "Circle the correct answer for each sum.",
        questions: [
          { prompt: "9 + 8 = ?", options: ["16", "17", "18"] },
          { prompt: "7 + 9 = ?", options: ["15", "16", "17"] },
          { prompt: "8 + 8 = ?", options: ["15", "16", "17"] },
          { prompt: "6 + 9 = ?", options: ["14", "15", "16"] },
          { prompt: "9 + 9 = ?", options: ["17", "18", "19"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Big Sums to 20",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "11 + 7 = ?", options: ["17", "18", "19"] },
          { prompt: "12 + 6 = ?", options: ["17", "18", "19"] },
          { prompt: "13 + 5 = ?", options: ["17", "18", "19"] },
          { prompt: "14 + 6 = ?", options: ["19", "20", "21"] },
        ],
      },
      {
        type: "matching",
        title: "Match Big Sums",
        instruction:
          "Draw a line from each addition to its answer.",
        left: ["9 + 7", "8 + 9", "11 + 5", "7 + 8", "12 + 8"],
        right: ["16", "17", "16", "15", "20"],
      },
      {
        type: "sequence",
        title: "Count On to 20",
        instruction:
          "Fill in the missing numbers as you count on.",
        sequences: [
          { items: [14, 15, 0, 17, 0, 19], answer: [16, 18] },
          { items: [11, 0, 13, 0, 15, 16], answer: [12, 14] },
          { items: [16, 17, 18, 0, 0], answer: [19, 20] },
        ],
      },
      {
        type: "open-response",
        title: "Show Your Working — Addition to 20",
        instruction:
          "Solve each addition. Show how you worked it out.",
        prompts: [
          { text: "8 + 7 = ___  (How did you work it out?)", type: "lines", lines: 2 },
          { text: "9 + 6 = ___  (Show your thinking!)", type: "lines", lines: 2 },
          { text: "7 + 9 = ___  (Draw or write to explain.)", type: "lines", lines: 2 },
        ],
      },

      // ─── Medium: Subtraction from 10 ───────────────────────────

      {
        type: "number-bonds",
        title: "Subtraction Bonds from 10",
        instruction:
          "Take away the part. Find the missing number.",
        bonds: [
          { total: 10, partA: 7, partB: null },
          { total: 10, partA: null, partB: 6 },
          { total: 10, partA: 3, partB: null },
          { total: 10, partA: null, partB: 8 },
          { total: 10, partA: 5, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Take Away from 5 to 10",
        instruction: "Find the missing number after subtracting.",
        bonds: [
          { total: 7, partA: 3, partB: null },
          { total: 8, partA: null, partB: 2 },
          { total: 9, partA: 4, partB: null },
          { total: 6, partA: null, partB: 1 },
          { total: 8, partA: 5, partB: null },
        ],
      },
      {
        type: "circle-correct",
        title: "Subtraction to 10",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "10 - 3 = ?", options: ["6", "7", "8"] },
          { prompt: "8 - 5 = ?", options: ["2", "3", "4"] },
          { prompt: "9 - 4 = ?", options: ["4", "5", "6"] },
          { prompt: "7 - 2 = ?", options: ["4", "5", "6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Subtraction to 10",
        instruction: "Circle the correct answer for each subtraction.",
        questions: [
          { prompt: "6 - 3 = ?", options: ["2", "3", "4"] },
          { prompt: "10 - 6 = ?", options: ["3", "4", "5"] },
          { prompt: "9 - 7 = ?", options: ["1", "2", "3"] },
          { prompt: "8 - 4 = ?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "matching",
        title: "Match Subtractions to 10",
        instruction:
          "Draw a line from each subtraction to the correct answer.",
        left: ["10 - 4", "9 - 3", "8 - 2", "7 - 1", "10 - 7"],
        right: ["6", "6", "6", "6", "3"],
      },
      {
        type: "ten-frame",
        title: "Ten Frame Take Away",
        instruction:
          "The ten frame shows how many you start with. Cross out dots to subtract.",
        frames: [
          { filled: 10, total: 10 },
          { filled: 8, total: 10 },
          { filled: 6, total: 10 },
          { filled: 9, total: 10 },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count",
        instruction:
          "Count the fish. Cross out 3 fish in each row and write how many are left.",
        rows: [
          { object: "fish", count: 7 },
          { object: "fish", count: 9 },
          { object: "fish", count: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Subtraction Stories (to 10)",
        instruction:
          "Read each story and write the subtraction number sentence.",
        prompts: [
          {
            text: "There are 8 butterflies. 3 fly away. How many are left?",
            type: "lines",
            lines: 2,
          },
          {
            text: "I have 10 pencils. I give 4 to my friend. How many do I have now?",
            type: "lines",
            lines: 2,
          },
          {
            text: "There are 6 dogs at the park. 2 go home. How many stay?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ─── Medium-Hard: Subtraction from 15 to 20 ────────────────

      {
        type: "number-bonds",
        title: "Subtraction Bonds from 15",
        instruction:
          "Find the missing number to complete each subtraction.",
        bonds: [
          { total: 15, partA: 8, partB: null },
          { total: 14, partA: null, partB: 5 },
          { total: 13, partA: 7, partB: null },
          { total: 12, partA: null, partB: 4 },
          { total: 15, partA: 9, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Subtraction Bonds from 20",
        instruction:
          "Find the missing number after subtracting.",
        bonds: [
          { total: 17, partA: 9, partB: null },
          { total: 20, partA: null, partB: 12 },
          { total: 18, partA: 9, partB: null },
          { total: 16, partA: null, partB: 7 },
          { total: 19, partA: 8, partB: null },
          { total: 20, partA: null, partB: 14 },
        ],
      },
      {
        type: "circle-correct",
        title: "Subtraction from 15",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "15 - 7 = ?", options: ["7", "8", "9"] },
          { prompt: "13 - 6 = ?", options: ["6", "7", "8"] },
          { prompt: "14 - 8 = ?", options: ["5", "6", "7"] },
          { prompt: "12 - 5 = ?", options: ["6", "7", "8"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Subtraction from 20",
        instruction: "Circle the correct answer for each subtraction.",
        questions: [
          { prompt: "20 - 7 = ?", options: ["12", "13", "14"] },
          { prompt: "18 - 9 = ?", options: ["8", "9", "10"] },
          { prompt: "17 - 8 = ?", options: ["8", "9", "10"] },
          { prompt: "16 - 9 = ?", options: ["6", "7", "8"] },
          { prompt: "19 - 5 = ?", options: ["13", "14", "15"] },
        ],
      },
      {
        type: "matching",
        title: "Match Subtractions to 20",
        instruction:
          "Draw a line from each subtraction to its answer.",
        left: ["20 - 8", "17 - 9", "15 - 6", "18 - 7", "16 - 8"],
        right: ["12", "8", "9", "11", "8"],
      },
      {
        type: "ten-frame",
        title: "Ten Frame Subtraction — Big Numbers",
        instruction:
          "Use the ten frames to help you subtract. Cross out dots and count what is left.",
        frames: [
          { filled: 10, total: 15 },
          { filled: 10, total: 18 },
          { filled: 10, total: 13 },
          { filled: 10, total: 17 },
        ],
      },
      {
        type: "sequence",
        title: "Count Back to Subtract",
        instruction:
          "Start at the big number and count back. Fill in the blanks.",
        sequences: [
          { items: [20, 19, 18, 0, 0, 15], answer: [17, 16] },
          { items: [17, 16, 0, 14, 0, 12], answer: [15, 13] },
          { items: [15, 0, 13, 12, 0, 10], answer: [14, 11] },
        ],
      },
      {
        type: "open-response",
        title: "Subtraction Word Problems (to 20)",
        instruction:
          "Read each problem. Write the number sentence and the answer.",
        prompts: [
          {
            text: "There are 17 birds on a fence. 9 fly away. How many are left?",
            type: "lines",
            lines: 2,
          },
          {
            text: "I had 20 stickers. I gave 8 to my friend. How many do I have now?",
            type: "lines",
            lines: 2,
          },
          {
            text: "There are 15 ducks in a pond. 7 swim away. How many stay?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "count-objects",
        title: "Subtract the Flowers",
        instruction:
          "Count the flowers. Cross out 6 in each row and write how many remain.",
        rows: [
          { object: "flower", count: 14 },
          { object: "flower", count: 11 },
          { object: "flower", count: 16 },
        ],
      },

      // ─── Hard: Mixed Addition & Subtraction ─────────────────────

      {
        type: "circle-correct",
        title: "Add or Subtract?",
        instruction: "Circle the correct answer for each problem.",
        questions: [
          { prompt: "12 + 5 = ?", options: ["16", "17", "18"] },
          { prompt: "14 - 6 = ?", options: ["7", "8", "9"] },
          { prompt: "9 + 8 = ?", options: ["16", "17", "18"] },
          { prompt: "20 - 11 = ?", options: ["8", "9", "10"] },
          { prompt: "7 + 7 = ?", options: ["13", "14", "15"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Mixed Practice",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "15 - 8 = ?", options: ["6", "7", "8"] },
          { prompt: "6 + 8 = ?", options: ["13", "14", "15"] },
          { prompt: "18 - 9 = ?", options: ["8", "9", "10"] },
          { prompt: "11 + 4 = ?", options: ["14", "15", "16"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Addition or Subtraction?",
        instruction:
          "Sort each number sentence into the correct column.",
        columns: ["Addition", "Subtraction"],
        items: [
          { label: "5 + 3 = 8" },
          { label: "10 - 4 = 6" },
          { label: "7 + 6 = 13" },
          { label: "15 - 9 = 6" },
          { label: "8 + 8 = 16" },
          { label: "20 - 5 = 15" },
        ],
      },
      {
        type: "matching",
        title: "Match Mixed Sums",
        instruction:
          "Draw a line from each problem to its answer.",
        left: ["8 + 9", "20 - 6", "15 - 7", "11 + 3", "17 - 9"],
        right: ["17", "14", "8", "14", "8"],
      },
      {
        type: "number-bonds",
        title: "Mixed Bonds",
        instruction:
          "Some are addition, some are subtraction. Find each missing number.",
        bonds: [
          { total: 16, partA: 9, partB: null },
          { total: 13, partA: null, partB: 5 },
          { total: 20, partA: 11, partB: null },
          { total: 15, partA: null, partB: 8 },
          { total: 18, partA: 9, partB: null },
          { total: 14, partA: null, partB: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Mixed Word Problems",
        instruction:
          "Read each problem. Write a number sentence and solve it.",
        prompts: [
          {
            text: "Sam has 8 apples. He picks 6 more. How many does he have now?",
            type: "lines",
            lines: 2,
          },
          {
            text: "There are 16 books on a shelf. Mia takes 7. How many are left?",
            type: "lines",
            lines: 2,
          },
          {
            text: "A farmer has 9 chickens. He gets 8 more. How many altogether?",
            type: "lines",
            lines: 2,
          },
          {
            text: "There are 20 balloons. 12 pop! How many are left?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "More Word Problems",
        instruction:
          "Write the number sentence and the answer for each story.",
        prompts: [
          {
            text: "Mia has 11 stickers. Her friend gives her 5 more. How many altogether?",
            type: "lines",
            lines: 2,
          },
          {
            text: "There are 19 children. 7 go inside. How many are still outside?",
            type: "lines",
            lines: 2,
          },
          {
            text: "A baker makes 6 cakes in the morning and 8 in the afternoon. How many cakes?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ─── Hard: Fact Families ────────────────────────────────────

      {
        type: "open-response",
        title: "Fact Families — Set A",
        instruction:
          "Use the three numbers to write 2 addition and 2 subtraction sentences.",
        prompts: [
          { text: "Numbers: 5, 8, 13", type: "lines", lines: 4 },
          { text: "Numbers: 7, 9, 16", type: "lines", lines: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Fact Families — Set B",
        instruction:
          "Write all four number sentences for each fact family.",
        prompts: [
          { text: "Numbers: 6, 8, 14", type: "lines", lines: 4 },
          { text: "Numbers: 9, 11, 20", type: "lines", lines: 4 },
        ],
      },
      {
        type: "matching",
        title: "Match the Fact Family",
        instruction:
          "Draw a line to match each addition to its related subtraction.",
        left: ["3 + 9 = 12", "7 + 8 = 15", "6 + 5 = 11", "4 + 9 = 13"],
        right: ["15 - 7 = 8", "12 - 9 = 3", "13 - 9 = 4", "11 - 5 = 6"],
      },
      {
        type: "number-bonds",
        title: "Fact Family Bonds",
        instruction:
          "Complete the missing number. Think about the fact family!",
        bonds: [
          { total: 14, partA: 6, partB: null },
          { total: 14, partA: null, partB: 6 },
          { total: 17, partA: 9, partB: null },
          { total: 17, partA: null, partB: 9 },
        ],
      },

      // ─── Challenge: Missing Numbers ─────────────────────────────

      {
        type: "circle-correct",
        title: "Find the Missing Number",
        instruction: "Which number goes in the box? Circle the correct answer.",
        questions: [
          { prompt: "□ + 5 = 12", options: ["6", "7", "8"] },
          { prompt: "9 + □ = 15", options: ["5", "6", "7"] },
          { prompt: "□ - 4 = 9", options: ["12", "13", "14"] },
          { prompt: "16 - □ = 8", options: ["7", "8", "9"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Missing Numbers",
        instruction: "Find the missing number. Circle the correct answer.",
        questions: [
          { prompt: "□ + 8 = 17", options: ["8", "9", "10"] },
          { prompt: "14 - □ = 6", options: ["7", "8", "9"] },
          { prompt: "□ + 7 = 20", options: ["12", "13", "14"] },
          { prompt: "□ - 9 = 5", options: ["13", "14", "15"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Missing Number Bonds",
        instruction:
          "Think carefully! Fill in the missing number for each one.",
        bonds: [
          { total: 18, partA: null, partB: 9 },
          { total: 15, partA: 7, partB: null },
          { total: 20, partA: null, partB: 6 },
          { total: 13, partA: 4, partB: null },
          { total: 19, partA: null, partB: 11 },
        ],
      },

      // ─── Challenge: True or False ───────────────────────────────

      {
        type: "sorting",
        title: "True or False? — Addition",
        instruction:
          "Is each number sentence true or false? Sort them into the correct column.",
        columns: ["True", "False"],
        items: [
          { label: "5 + 7 = 12" },
          { label: "8 + 6 = 15" },
          { label: "9 + 9 = 18" },
          { label: "7 + 4 = 12" },
          { label: "6 + 8 = 14" },
          { label: "3 + 9 = 11" },
        ],
      },
      {
        type: "sorting",
        title: "True or False? — Subtraction",
        instruction:
          "Sort each number sentence: is it true or false?",
        columns: ["True", "False"],
        items: [
          { label: "15 - 8 = 7" },
          { label: "20 - 9 = 10" },
          { label: "17 - 8 = 9" },
          { label: "14 - 6 = 9" },
          { label: "18 - 9 = 9" },
          { label: "13 - 7 = 5" },
        ],
      },
      {
        type: "sorting",
        title: "True or False? — Mixed",
        instruction: "Is each sentence true or false?",
        columns: ["True", "False"],
        items: [
          { label: "6 + 9 = 15" },
          { label: "20 - 12 = 9" },
          { label: "8 + 8 = 16" },
          { label: "17 - 9 = 7" },
          { label: "11 + 5 = 16" },
          { label: "14 - 7 = 7" },
        ],
      },

      // ─── Challenge: Number Riddles ──────────────────────────────

      {
        type: "open-response",
        title: "Number Riddles — Addition",
        instruction: "Solve each riddle. Write the answer.",
        prompts: [
          {
            text: "I am a number. When you add 6 to me, you get 14. What number am I?",
            type: "lines",
            lines: 1,
          },
          {
            text: "I am a number. When you add 9 to me, you get 18. What number am I?",
            type: "lines",
            lines: 1,
          },
          {
            text: "I am a number. Add me to 7 and you get 15. Who am I?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Number Riddles — Subtraction",
        instruction: "Solve each riddle. Write the answer.",
        prompts: [
          {
            text: "I am a number. Take 5 away from me and you get 8. What am I?",
            type: "lines",
            lines: 1,
          },
          {
            text: "I am a number. Subtract me from 20 and you get 11. Who am I?",
            type: "lines",
            lines: 1,
          },
          {
            text: "I am a number. Take away 7 and I become 6. What number am I?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Number Riddles — Tricky!",
        instruction: "Think hard and solve these riddles!",
        prompts: [
          {
            text: "I am bigger than 10 but smaller than 15. When you subtract 6 from me, you get 8. What am I?",
            type: "lines",
            lines: 1,
          },
          {
            text: "Add me to myself and you get 16. What number am I?",
            type: "lines",
            lines: 1,
          },
          {
            text: "I am less than 20. When you add 3 to me, you get a number with a 0 in it. What could I be?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ─── Challenge: Comparing Sums ──────────────────────────────

      {
        type: "compare-groups",
        title: "Which Group Has More?",
        instruction:
          "Look at each pair of groups. Circle the group that has more. Write how many more.",
        pairs: [
          { leftCount: 8, rightCount: 5, object: "apple", question: "How many more on the left?" },
          { leftCount: 6, rightCount: 9, object: "star", question: "How many more on the right?" },
          { leftCount: 12, rightCount: 7, object: "heart", question: "How many more on the left?" },
          { leftCount: 10, rightCount: 10, object: "ball", question: "Are they equal?" },
        ],
      },
      {
        type: "sorting",
        title: "Bigger or Smaller Than 10?",
        instruction:
          "Work out each answer. Sort it: is it bigger than 10 or smaller than 10?",
        columns: ["Smaller than 10", "Bigger than 10"],
        items: [
          { label: "5 + 3" },
          { label: "6 + 7" },
          { label: "15 - 8" },
          { label: "9 + 4" },
          { label: "20 - 9" },
          { label: "4 + 4" },
        ],
      },

      // ─── Challenge: Write Your Own ──────────────────────────────

      {
        type: "open-response",
        title: "Make Your Own Number Sentences",
        instruction:
          "Write your own addition and subtraction number sentences. Make sure each answer is between 0 and 20!",
        prompts: [
          { text: "Write an addition with an answer of 15:", type: "lines", lines: 1 },
          { text: "Write a subtraction with an answer of 7:", type: "lines", lines: 1 },
          { text: "Write an addition with an answer of 20:", type: "lines", lines: 1 },
          { text: "Write a subtraction with an answer of 3:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write a Word Problem",
        instruction:
          "Write your own word problem. Then write the number sentence and the answer.",
        prompts: [
          { text: "Write an addition word problem:", type: "lines", lines: 3 },
          { text: "Write a subtraction word problem:", type: "lines", lines: 3 },
        ],
      },
      {
        type: "open-response",
        title: "Doubles and Near Doubles",
        instruction:
          "Use doubles to help you solve these. Show your thinking!",
        prompts: [
          { text: "6 + 6 = ___    so 6 + 7 = ___", type: "lines", lines: 1 },
          { text: "8 + 8 = ___    so 8 + 9 = ___", type: "lines", lines: 1 },
          { text: "9 + 9 = ___    so 9 + 10 = ___", type: "lines", lines: 1 },
          { text: "7 + 7 = ___    so 7 + 8 = ___", type: "lines", lines: 1 },
        ],
      },

      // ─── Home Activities ────────────────────────────────────────

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
      {
        type: "home-activity",
        title: "Home Activity: Addition & Subtraction Games",
        instruction:
          "Play these fun games to practise your addition and subtraction!",
        suggestions: [
          "Play 'I Spy a Number': say 'I am thinking of a number. If you add 6, you get 13. What is it?'",
          "Use a deck of cards (remove face cards). Flip two cards and add or subtract them.",
          "Set up a toy shop with price tags to 20. Practise paying and getting change.",
          "Count steps as you walk. How many more steps to get to 20?",
          "Line up coins or buttons. Take some away and count how many are left.",
        ],
      },
    ],
    nextSteps: ["equal-sharing-grouping"],
  },

  // ── WS 5: Equal Sharing & Grouping ──────────────────────────
  {
    slug: "equal-sharing-grouping",
    title: "Equal Sharing & Grouping",
    strand: "Number",
    description:
      "Solve practical problems involving equal sharing and grouping",
    lesson: {
      title: "Fair Shares and Equal Groups",
      objective: "Share a collection equally between 2, 3 or 4 groups, and form equal groups to find how many altogether.",
      materials: [
        "20 small snack items or objects — grapes, crackers, blocks, buttons",
        "2–4 small bowls, cups or drawn circles on paper",
        "A pencil and paper",
      ],
      intro: {
        title: "Is It Fair?",
        script: "Imagine I had 6 grapes and two people wanted to share them fairly. Is 4 and 2 fair? No! For a share to be fair, everyone has to get the SAME amount. Let\'s deal them out like cards — one for you, one for me, one for you... See? Three each. That\'s a fair share.",
        action: "Put out 6 objects and two bowls. Deal out one at a time, alternating between bowls. Count each bowl. Repeat with 8 items and two bowls, then try an odd number (7) and discuss what happens when it won\'t share equally.",
      },
      mainActivity: {
        title: "Share and Group",
        script: "Your turn! Here are 12 items. Share them fairly between these 3 bowls. Deal them out. How many in each bowl? Good. Now let\'s try grouping the other way — put 4 items in each bowl. How many bowls did we fill? Sharing and grouping are two sides of the same idea!",
        action: "First do sharing (fixed groups, find how many each): 12 into 3, 10 into 2, 8 into 4. Then do grouping (fixed amount each group, find how many groups): make groups of 3 from 12, groups of 5 from 15. Write results as a simple sentence: \'12 shared among 3 = 4 each.\'",
      },
      wrapUp: {
        title: "Tell the Story",
        script: "Can you tell me in words what we just did? Use a story — like \'There were 12 biscuits shared between 3 children...\' How many did each child get? Can you think of another fair share story from real life?",
        action: "Ask your child to narrate one sharing and one grouping scenario in words. Prompt with: \'How did you know it was fair?\' and \'What would happen if we added one more item?\'",
      },
      parentTip: "Children often struggle to distinguish sharing (dealing out one-by-one) from grouping (making equal groups). Act out both separately with real objects: share 12 crackers onto 3 plates (sharing), then put 12 blocks into piles of 4 (grouping). Use the words 'each' and 'groups of' to reinforce the difference.",
      extension: "'Equal Teams' game: collect 20 small objects (buttons, pasta, blocks). Challenge your child to sort them into equal groups of 2, then 4, then 5. Each time ask: 'How many groups did we get?' Record the results in a simple table.",
      resources: [
        { title: "Khan Academy – Division Concepts", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-add-subtract", description: "Early division concepts through equal sharing and grouping for Year 1." },
        { title: "Maths is Fun – Division", url: "https://www.mathsisfun.com/numbers/division.html", description: "Introduction to division as sharing and grouping with clear visuals." },
        { title: "NRICH – Sharing and Grouping", url: "https://nrich.maths.org/early-years", description: "Investigative sharing and grouping tasks for primary learners." },
      ],
    },
    activities: [
      // ─── Easy: Share into 2 equal groups ───

      {
        type: "count-objects",
        title: "Share into 2 Groups",
        instruction:
          "Count the objects. Share them equally into 2 groups. How many in each group?",
        rows: [
          { object: "apple", count: 4 },
          { object: "star", count: 6 },
          { object: "heart", count: 8 },
          { object: "flower", count: 10 },
        ],
      },
      {
        type: "circle-correct",
        title: "Half of the Group",
        instruction:
          "If we share these equally between 2 people, how many does each person get? Circle the correct answer.",
        questions: [
          {
            prompt: "4 apples shared between 2 people = ?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "6 stars shared between 2 people = ?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "8 flowers shared between 2 people = ?",
            options: ["3 each", "4 each", "5 each"],
          },
          {
            prompt: "10 hearts shared between 2 people = ?",
            options: ["4 each", "5 each", "6 each"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Halves",
        instruction:
          "Draw a line to match each sharing problem to its answer.",
        left: [
          "4 shared into 2 groups",
          "6 shared into 2 groups",
          "8 shared into 2 groups",
          "10 shared into 2 groups",
        ],
        right: ["5", "2", "4", "3"],
      },
      {
        type: "open-response",
        title: "Draw 2 Equal Groups",
        instruction:
          "Draw circles to share the objects equally into 2 groups.",
        prompts: [
          { text: "Share 6 apples into 2 equal groups. Draw them!", type: "box" },
          { text: "Share 8 stars into 2 equal groups. Draw them!", type: "box" },
          { text: "Share 10 flowers into 2 equal groups. Draw them!", type: "box" },
        ],
      },
      {
        type: "circle-correct",
        title: "Sharing Between 2 Friends",
        instruction:
          "Two friends want to share fairly. Circle the correct answer.",
        questions: [
          {
            prompt: "Mia and Liam share 4 bananas. How many each?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "Ava and Jack share 6 grapes. How many each?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "Zoe and Sam share 8 strawberries. How many each?",
            options: ["3 each", "4 each", "5 each"],
          },
          {
            prompt: "Ella and Tom share 10 biscuits. How many each?",
            options: ["4 each", "5 each", "6 each"],
          },
        ],
      },
      {
        type: "count-objects",
        title: "Share Evenly into 2 Bowls",
        instruction:
          "Look at the objects. If you put them into 2 equal bowls, how many go in each bowl?",
        rows: [
          { object: "banana", count: 4 },
          { object: "grape", count: 6 },
          { object: "apple", count: 8 },
          { object: "flower", count: 10 },
        ],
      },

      // ─── Easy-Medium: Share into 3 groups ───

      {
        type: "circle-correct",
        title: "Sharing Among 3",
        instruction:
          "If we share these equally among 3 people, how many does each person get? Circle the correct answer.",
        questions: [
          {
            prompt: "6 apples shared among 3 people = ?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "9 stars shared among 3 people = ?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "12 flowers shared among 3 people = ?",
            options: ["3 each", "4 each", "5 each"],
          },
          {
            prompt: "15 hearts shared among 3 people = ?",
            options: ["4 each", "5 each", "6 each"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Sharing into 3",
        instruction:
          "Draw a line to match each sharing problem to its answer.",
        left: [
          "6 shared into 3 groups",
          "9 shared into 3 groups",
          "12 shared into 3 groups",
          "15 shared into 3 groups",
        ],
        right: ["4", "2", "5", "3"],
      },
      {
        type: "open-response",
        title: "Draw 3 Equal Groups",
        instruction:
          "Draw circles to share the objects equally into 3 groups.",
        prompts: [
          { text: "Share 6 stars into 3 equal groups. Draw them!", type: "box" },
          { text: "Share 9 hearts into 3 equal groups. Draw them!", type: "box" },
          { text: "Share 12 apples into 3 equal groups. Draw them!", type: "box" },
        ],
      },
      {
        type: "circle-correct",
        title: "Fair Sharing for 3 Friends",
        instruction:
          "Three friends want to share fairly. Circle the correct answer.",
        questions: [
          {
            prompt: "Ruby, Max and Lily share 6 biscuits. How many each?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "Noah, Isla and Archie share 9 grapes. How many each?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "Chloe, Leo and Sophie share 12 crayons. How many each?",
            options: ["3 each", "4 each", "5 each"],
          },
        ],
      },
      {
        type: "count-objects",
        title: "Share into 3 Plates",
        instruction:
          "Count the objects. Share them equally onto 3 plates. How many on each plate?",
        rows: [
          { object: "apple", count: 6 },
          { object: "banana", count: 9 },
          { object: "grape", count: 12 },
          { object: "star", count: 15 },
        ],
      },

      // ─── Easy-Medium: Share into 4 groups ───

      {
        type: "circle-correct",
        title: "Sharing Among 4",
        instruction:
          "If we share these equally among 4 people, how many does each person get? Circle the correct answer.",
        questions: [
          {
            prompt: "8 apples shared among 4 people = ?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "12 stars shared among 4 people = ?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "16 flowers shared among 4 people = ?",
            options: ["3 each", "4 each", "5 each"],
          },
          {
            prompt: "20 hearts shared among 4 people = ?",
            options: ["4 each", "5 each", "6 each"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Sharing into 4",
        instruction:
          "Draw a line to match each sharing problem to its answer.",
        left: [
          "8 shared into 4 groups",
          "12 shared into 4 groups",
          "16 shared into 4 groups",
          "20 shared into 4 groups",
        ],
        right: ["5", "2", "4", "3"],
      },
      {
        type: "open-response",
        title: "Draw 4 Equal Groups",
        instruction:
          "Draw circles to share the objects equally into 4 groups.",
        prompts: [
          { text: "Share 8 butterflies into 4 equal groups. Draw them!", type: "box" },
          { text: "Share 12 diamonds into 4 equal groups. Draw them!", type: "box" },
          { text: "Share 16 triangles into 4 equal groups. Draw them!", type: "box" },
        ],
      },
      {
        type: "count-objects",
        title: "Share Evenly into 4 Baskets",
        instruction:
          "Count the objects. Share them equally into 4 baskets. How many in each basket?",
        rows: [
          { object: "heart", count: 8 },
          { object: "flower", count: 12 },
          { object: "star", count: 16 },
          { object: "apple", count: 20 },
        ],
      },
      {
        type: "circle-correct",
        title: "4 Friends Sharing",
        instruction:
          "Four friends want to share fairly. Circle the correct answer.",
        questions: [
          {
            prompt: "Mia, Jack, Ruby and Leo share 8 pencils. How many each?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "Ava, Noah, Isla and Max share 12 stickers. How many each?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "Tom, Ella, Sam and Lily share 20 grapes. How many each?",
            options: ["4 each", "5 each", "6 each"],
          },
        ],
      },

      // ─── Medium: Share into 5 groups ───

      {
        type: "circle-correct",
        title: "Sharing Among 5",
        instruction:
          "If we share these equally among 5 people, how many does each person get? Circle the correct answer.",
        questions: [
          {
            prompt: "10 apples shared among 5 people = ?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "15 stars shared among 5 people = ?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "20 flowers shared among 5 people = ?",
            options: ["3 each", "4 each", "5 each"],
          },
          {
            prompt: "25 hearts shared among 5 people = ?",
            options: ["4 each", "5 each", "6 each"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Sharing into 5",
        instruction:
          "Draw a line to match each sharing problem to its answer.",
        left: [
          "10 shared into 5 groups",
          "15 shared into 5 groups",
          "20 shared into 5 groups",
          "25 shared into 5 groups",
        ],
        right: ["4", "2", "5", "3"],
      },
      {
        type: "open-response",
        title: "Draw 5 Equal Groups",
        instruction:
          "Draw circles to share the objects equally into 5 groups.",
        prompts: [
          { text: "Share 10 fish into 5 equal groups. Draw them!", type: "box" },
          { text: "Share 15 stars into 5 equal groups. Draw them!", type: "box" },
          { text: "Share 20 apples into 5 equal groups. Draw them!", type: "box" },
        ],
      },
      {
        type: "count-objects",
        title: "Share into 5 Bags",
        instruction:
          "Count the objects. Share them equally into 5 bags. How many in each bag?",
        rows: [
          { object: "diamond", count: 10 },
          { object: "butterfly", count: 15 },
          { object: "flower", count: 20 },
        ],
      },
      {
        type: "circle-correct",
        title: "5 Friends at a Party",
        instruction:
          "Five friends share treats at a party. Circle the correct answer.",
        questions: [
          {
            prompt: "10 lollies shared among 5 friends = ?",
            options: ["1 each", "2 each", "3 each"],
          },
          {
            prompt: "15 strawberries shared among 5 friends = ?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "20 crackers shared among 5 friends = ?",
            options: ["3 each", "4 each", "5 each"],
          },
        ],
      },

      // ─── Medium: How many in each group? ───

      {
        type: "circle-correct",
        title: "How Many in Each Group? (A)",
        instruction:
          "Work out how many are in each group. Circle the correct answer.",
        questions: [
          {
            prompt: "8 fish shared into 2 groups. How many in each group?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "12 apples shared into 3 groups. How many in each group?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "16 stars shared into 4 groups. How many in each group?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "20 flowers shared into 5 groups. How many in each group?",
            options: ["3", "4", "5"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many in Each Group? (B)",
        instruction:
          "Work out how many are in each group. Circle the correct answer.",
        questions: [
          {
            prompt: "6 bananas shared into 2 groups. How many in each group?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "9 grapes shared into 3 groups. How many in each group?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "20 hearts shared into 4 groups. How many in each group?",
            options: ["4", "5", "6"],
          },
          {
            prompt: "15 butterflies shared into 5 groups. How many in each group?",
            options: ["2", "3", "4"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Show How Many in Each Group",
        instruction:
          "Share the objects equally into the groups. Draw or write the answer.",
        prompts: [
          { text: "10 apples into 2 groups. How many in each group?", type: "box" },
          { text: "12 stars into 4 groups. How many in each group?", type: "box" },
          { text: "15 flowers into 3 groups. How many in each group?", type: "box" },
        ],
      },

      // ─── Medium: Grouping — How many groups of 2? ───

      {
        type: "count-objects",
        title: "Groups of 2",
        instruction:
          "Count the objects. How many groups of 2 can you make?",
        rows: [
          { object: "apple", count: 6 },
          { object: "star", count: 8 },
          { object: "heart", count: 10 },
          { object: "flower", count: 12 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Groups of 2?",
        instruction:
          "Circle the correct answer.",
        questions: [
          {
            prompt: "6 apples put into groups of 2. How many groups?",
            options: ["2 groups", "3 groups", "4 groups"],
          },
          {
            prompt: "8 stars put into groups of 2. How many groups?",
            options: ["3 groups", "4 groups", "5 groups"],
          },
          {
            prompt: "10 hearts put into groups of 2. How many groups?",
            options: ["4 groups", "5 groups", "6 groups"],
          },
          {
            prompt: "12 flowers put into groups of 2. How many groups?",
            options: ["5 groups", "6 groups", "7 groups"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Draw Groups of 2",
        instruction:
          "Draw circles around groups of 2. Write how many groups you made.",
        prompts: [
          { text: "Draw 8 stars. Circle groups of 2. How many groups?", type: "box" },
          { text: "Draw 10 apples. Circle groups of 2. How many groups?", type: "box" },
          { text: "Draw 12 hearts. Circle groups of 2. How many groups?", type: "box" },
        ],
      },

      // ─── Medium: Grouping — How many groups of 3? ───

      {
        type: "count-objects",
        title: "Groups of 3",
        instruction:
          "Count the objects. How many groups of 3 can you make?",
        rows: [
          { object: "fish", count: 6 },
          { object: "butterfly", count: 9 },
          { object: "diamond", count: 12 },
          { object: "triangle", count: 15 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Groups of 3?",
        instruction:
          "Circle the correct answer.",
        questions: [
          {
            prompt: "6 fish put into groups of 3. How many groups?",
            options: ["1 group", "2 groups", "3 groups"],
          },
          {
            prompt: "9 butterflies put into groups of 3. How many groups?",
            options: ["2 groups", "3 groups", "4 groups"],
          },
          {
            prompt: "12 diamonds put into groups of 3. How many groups?",
            options: ["3 groups", "4 groups", "5 groups"],
          },
          {
            prompt: "15 triangles put into groups of 3. How many groups?",
            options: ["4 groups", "5 groups", "6 groups"],
          },
        ],
      },

      // ─── Medium: Grouping — How many groups of 4? ───

      {
        type: "count-objects",
        title: "Groups of 4",
        instruction:
          "Count the objects. How many groups of 4 can you make?",
        rows: [
          { object: "star", count: 8 },
          { object: "heart", count: 12 },
          { object: "apple", count: 16 },
          { object: "flower", count: 20 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Groups of 4?",
        instruction:
          "Circle the correct answer.",
        questions: [
          {
            prompt: "8 stars put into groups of 4. How many groups?",
            options: ["1 group", "2 groups", "3 groups"],
          },
          {
            prompt: "12 hearts put into groups of 4. How many groups?",
            options: ["2 groups", "3 groups", "4 groups"],
          },
          {
            prompt: "16 apples put into groups of 4. How many groups?",
            options: ["3 groups", "4 groups", "5 groups"],
          },
          {
            prompt: "20 flowers put into groups of 4. How many groups?",
            options: ["4 groups", "5 groups", "6 groups"],
          },
        ],
      },

      // ─── Medium: Grouping — How many groups of 5? ───

      {
        type: "count-objects",
        title: "Groups of 5",
        instruction:
          "Count the objects. How many groups of 5 can you make?",
        rows: [
          { object: "banana", count: 10 },
          { object: "grape", count: 15 },
          { object: "fish", count: 20 },
          { object: "butterfly", count: 25 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Groups of 5?",
        instruction:
          "Circle the correct answer.",
        questions: [
          {
            prompt: "10 bananas put into groups of 5. How many groups?",
            options: ["1 group", "2 groups", "3 groups"],
          },
          {
            prompt: "15 grapes put into groups of 5. How many groups?",
            options: ["2 groups", "3 groups", "4 groups"],
          },
          {
            prompt: "20 fish put into groups of 5. How many groups?",
            options: ["3 groups", "4 groups", "5 groups"],
          },
          {
            prompt: "25 butterflies put into groups of 5. How many groups?",
            options: ["4 groups", "5 groups", "6 groups"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Draw Groups of 5",
        instruction:
          "Draw circles around groups of 5. Write how many groups you made.",
        prompts: [
          { text: "Draw 10 circles. Circle groups of 5. How many groups?", type: "box" },
          { text: "Draw 15 stars. Circle groups of 5. How many groups?", type: "box" },
          { text: "Draw 20 hearts. Circle groups of 5. How many groups?", type: "box" },
        ],
      },

      // ─── Medium: Mixed grouping practice ───

      {
        type: "matching",
        title: "Match Grouping Problems (A)",
        instruction:
          "Draw a line to match each grouping problem to its answer.",
        left: [
          "8 into groups of 2",
          "12 into groups of 3",
          "16 into groups of 4",
          "20 into groups of 5",
        ],
        right: ["4 groups", "4 groups", "4 groups", "4 groups"],
      },
      {
        type: "matching",
        title: "Match Grouping Problems (B)",
        instruction:
          "Draw a line to match each grouping problem to its answer.",
        left: [
          "6 into groups of 2",
          "9 into groups of 3",
          "20 into groups of 4",
          "15 into groups of 5",
        ],
        right: ["3 groups", "5 groups", "3 groups", "3 groups"],
      },
      {
        type: "circle-correct",
        title: "Grouping Mix-Up",
        instruction:
          "Circle the correct answer for each grouping problem.",
        questions: [
          {
            prompt: "10 into groups of 2 = ?",
            options: ["3 groups", "4 groups", "5 groups"],
          },
          {
            prompt: "12 into groups of 4 = ?",
            options: ["2 groups", "3 groups", "4 groups"],
          },
          {
            prompt: "15 into groups of 3 = ?",
            options: ["4 groups", "5 groups", "6 groups"],
          },
          {
            prompt: "20 into groups of 5 = ?",
            options: ["3 groups", "4 groups", "5 groups"],
          },
        ],
      },

      // ─── Medium-Hard: Mixed sharing and grouping problems ───

      {
        type: "circle-correct",
        title: "Sharing or Grouping? (A)",
        instruction:
          "Read each problem carefully. Circle the correct answer.",
        questions: [
          {
            prompt: "12 apples shared among 3 friends. How many each?",
            options: ["3 each", "4 each", "5 each"],
          },
          {
            prompt: "12 apples put into bags of 3. How many bags?",
            options: ["3 bags", "4 bags", "5 bags"],
          },
          {
            prompt: "10 flowers shared between 2 vases. How many in each?",
            options: ["4 each", "5 each", "6 each"],
          },
          {
            prompt: "10 flowers put into bunches of 5. How many bunches?",
            options: ["1 bunch", "2 bunches", "3 bunches"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Sharing or Grouping? (B)",
        instruction:
          "Read each problem carefully. Circle the correct answer.",
        questions: [
          {
            prompt: "15 stars shared among 5 children. How many each?",
            options: ["2 each", "3 each", "4 each"],
          },
          {
            prompt: "15 stars put into groups of 3. How many groups?",
            options: ["3 groups", "4 groups", "5 groups"],
          },
          {
            prompt: "8 grapes shared between 2 bowls. How many in each?",
            options: ["3 each", "4 each", "5 each"],
          },
          {
            prompt: "8 grapes put into groups of 4. How many groups?",
            options: ["1 group", "2 groups", "3 groups"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sharing or Grouping?",
        instruction:
          "Sort each problem. Is it a SHARING problem or a GROUPING problem?",
        columns: ["Sharing", "Grouping"],
        items: [
          { label: "6 lollies shared between 2 people" },
          { label: "12 put into bags of 4" },
          { label: "9 biscuits shared among 3 friends" },
          { label: "10 put into groups of 5" },
          { label: "8 apples shared among 4 people" },
          { label: "15 put into groups of 3" },
        ],
      },
      {
        type: "matching",
        title: "Match Mixed Problems",
        instruction:
          "Draw a line to match each problem to its answer.",
        left: [
          "12 shared among 4 people",
          "12 into groups of 3",
          "10 shared between 2 people",
          "10 into groups of 5",
        ],
        right: ["2 groups", "3 each", "5 each", "4 groups"],
      },
      {
        type: "open-response",
        title: "Solve Sharing and Grouping",
        instruction:
          "Solve each problem. Draw or write to show your thinking.",
        prompts: [
          { text: "18 flowers shared among 3 vases. How many in each vase?", type: "box" },
          { text: "18 flowers put into bunches of 6. How many bunches?", type: "box" },
          { text: "What do you notice about both problems?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare the Shares",
        instruction:
          "Look at each pair. Which sharing gives more to each person?",
        pairs: [
          {
            leftCount: 3,
            rightCount: 5,
            object: "apple",
            question: "6 apples shared among 2 people (left) or 10 apples shared among 2 people (right)?",
          },
          {
            leftCount: 4,
            rightCount: 3,
            object: "star",
            question: "12 stars shared among 3 (left) or 12 stars shared among 4 (right)?",
          },
          {
            leftCount: 2,
            rightCount: 5,
            object: "heart",
            question: "8 hearts shared among 4 (left) or 10 hearts shared among 2 (right)?",
          },
        ],
      },

      // ─── Hard: Word problems ───

      {
        type: "open-response",
        title: "Sharing Word Problems (A)",
        instruction:
          "Read each word problem. Draw a picture and write the answer.",
        prompts: [
          { text: "Mum has 12 strawberries. She shares them equally among 3 children. How many does each child get?", type: "box" },
          { text: "Dad baked 10 muffins. He puts them equally onto 2 plates. How many on each plate?", type: "box" },
          { text: "There are 8 crayons. 4 friends share them equally. How many does each friend get?", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Sharing Word Problems (B)",
        instruction:
          "Read each word problem. Draw a picture and write the answer.",
        prompts: [
          { text: "Grandma has 15 lollies. She shares them equally among 5 grandchildren. How many each?", type: "box" },
          { text: "There are 20 blocks. 4 children share them equally. How many does each child get?", type: "box" },
          { text: "A teacher has 18 pencils. She gives the same number to each of 3 tables. How many at each table?", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Grouping Word Problems (A)",
        instruction:
          "Read each word problem. Draw a picture and write the answer.",
        prompts: [
          { text: "There are 10 socks. You put them into pairs (groups of 2). How many pairs?", type: "box" },
          { text: "A baker has 12 cupcakes. She puts 4 in each box. How many boxes does she need?", type: "box" },
          { text: "There are 15 eggs. You put 5 in each carton. How many cartons?", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Grouping Word Problems (B)",
        instruction:
          "Read each word problem. Draw a picture and write the answer.",
        prompts: [
          { text: "There are 20 children. The teacher puts them into groups of 4. How many groups?", type: "box" },
          { text: "Mum has 9 biscuits. She puts 3 on each plate. How many plates does she use?", type: "box" },
          { text: "Dad plants 16 seeds. He puts 4 seeds in each pot. How many pots does he need?", type: "box" },
        ],
      },

      // ─── Hard: Drawing equal groups ───

      {
        type: "open-response",
        title: "Draw to Share Equally (A)",
        instruction:
          "Draw the objects, then circle equal groups to solve the problem.",
        prompts: [
          { text: "Draw 12 hearts. Share them into 2 equal groups by circling. How many in each group?", type: "box" },
          { text: "Draw 9 stars. Share them into 3 equal groups by circling. How many in each group?", type: "box" },
          { text: "Draw 16 dots. Share them into 4 equal groups by circling. How many in each group?", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw to Share Equally (B)",
        instruction:
          "Draw the objects, then circle equal groups to solve the problem.",
        prompts: [
          { text: "Draw 20 circles. Share them into 5 equal groups. How many in each group?", type: "box" },
          { text: "Draw 14 triangles. Share them into 2 equal groups. How many in each group?", type: "box" },
          { text: "Draw 18 squares. Share them into 3 equal groups. How many in each group?", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw Groups of a Size",
        instruction:
          "Draw the objects, then circle groups of the given size.",
        prompts: [
          { text: "Draw 12 apples. Circle groups of 3. How many groups did you make?", type: "box" },
          { text: "Draw 20 stars. Circle groups of 4. How many groups did you make?", type: "box" },
          { text: "Draw 15 flowers. Circle groups of 5. How many groups did you make?", type: "box" },
        ],
      },

      // ─── Hard: Remainders awareness ───

      {
        type: "circle-correct",
        title: "Can We Share Fairly?",
        instruction:
          "Can these be shared equally with nothing left over? Circle YES or NO.",
        questions: [
          {
            prompt: "7 apples shared between 2 people — fair share?",
            options: ["Yes", "No"],
          },
          {
            prompt: "8 stars shared between 2 people — fair share?",
            options: ["Yes", "No"],
          },
          {
            prompt: "9 flowers shared among 4 people — fair share?",
            options: ["Yes", "No"],
          },
          {
            prompt: "10 hearts shared among 5 people — fair share?",
            options: ["Yes", "No"],
          },
          {
            prompt: "11 bananas shared among 3 people — fair share?",
            options: ["Yes", "No"],
          },
        ],
      },
      {
        type: "open-response",
        title: "What Is Left Over?",
        instruction:
          "Try to share equally. Write how many each person gets and how many are left over.",
        prompts: [
          { text: "7 apples shared between 2 friends. Each gets ___ and ___ is left over.", type: "lines", lines: 1 },
          { text: "10 stars shared among 3 friends. Each gets ___ and ___ is left over.", type: "lines", lines: 1 },
          { text: "11 flowers shared among 4 friends. Each gets ___ and ___ are left over.", type: "lines", lines: 1 },
          { text: "13 hearts shared among 5 friends. Each gets ___ and ___ are left over.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd One Out — Leftovers",
        instruction:
          "Which number CANNOT be shared equally into the given groups with nothing left over? Circle it.",
        questions: [
          {
            prompt: "Shared into 2 equal groups:",
            options: ["6", "8", "9"],
          },
          {
            prompt: "Shared into 3 equal groups:",
            options: ["9", "10", "12"],
          },
          {
            prompt: "Shared into 5 equal groups:",
            options: ["10", "13", "15"],
          },
        ],
      },

      // ─── Challenge: Reasoning ───

      {
        type: "open-response",
        title: "Sharing Puzzles",
        instruction:
          "Think carefully and solve each puzzle. Write or draw to explain your thinking.",
        prompts: [
          { text: "I have 12 apples. I share them equally and each person gets 4. How many people are sharing?", type: "lines", lines: 2 },
          { text: "I have some stars. I share them into 3 groups and each group has 5. How many stars did I start with?", type: "lines", lines: 2 },
          { text: "I put flowers into groups of 4 and I made 5 groups. How many flowers did I have?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Grouping Puzzles",
        instruction:
          "Think carefully and solve each puzzle. Write or draw to explain your thinking.",
        prompts: [
          { text: "I have 18 grapes. I put them into groups of 3. How many groups?", type: "lines", lines: 2 },
          { text: "I have some biscuits. I put them into groups of 4 and got 3 groups. How many biscuits?", type: "lines", lines: 2 },
          { text: "I made 5 groups of 2. How many objects did I start with?", type: "lines", lines: 2 },
        ],
      },

      // ─── Challenge: True or false ───

      {
        type: "circle-correct",
        title: "True or False? Sharing (A)",
        instruction:
          "Is each statement true or false? Circle the correct answer.",
        questions: [
          {
            prompt: "10 shared between 2 people = 5 each",
            options: ["True", "False"],
          },
          {
            prompt: "9 shared among 3 people = 4 each",
            options: ["True", "False"],
          },
          {
            prompt: "12 shared among 4 people = 3 each",
            options: ["True", "False"],
          },
          {
            prompt: "15 shared among 5 people = 4 each",
            options: ["True", "False"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False? Grouping (B)",
        instruction:
          "Is each statement true or false? Circle the correct answer.",
        questions: [
          {
            prompt: "8 put into groups of 2 = 4 groups",
            options: ["True", "False"],
          },
          {
            prompt: "12 put into groups of 3 = 5 groups",
            options: ["True", "False"],
          },
          {
            prompt: "20 put into groups of 4 = 5 groups",
            options: ["True", "False"],
          },
          {
            prompt: "15 put into groups of 5 = 4 groups",
            options: ["True", "False"],
          },
        ],
      },

      // ─── Challenge: Real-world sharing ───

      {
        type: "open-response",
        title: "At the Shops",
        instruction:
          "Solve these real-world sharing problems. Draw or write to show your thinking.",
        prompts: [
          { text: "Mum buys 12 oranges. She puts the same number in each of 3 bags. How many oranges in each bag?", type: "box" },
          { text: "A pack has 10 biscuits. Two children share them equally. How many does each child get?", type: "box" },
          { text: "Dad has 20 sausages for a barbecue. He shares them equally among 4 people. How many each?", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "In the Classroom",
        instruction:
          "Solve these real-world sharing problems. Draw or write to show your thinking.",
        prompts: [
          { text: "The teacher has 16 coloured pencils. She shares them equally among 4 tables. How many at each table?", type: "box" },
          { text: "There are 15 books. The librarian puts 5 on each shelf. How many shelves does she use?", type: "box" },
          { text: "25 children line up. The teacher puts them into groups of 5 for sport. How many groups?", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "At the Park",
        instruction:
          "Solve these real-world sharing and grouping problems.",
        prompts: [
          { text: "8 children at the park want to play in 2 equal teams. How many on each team?", type: "lines", lines: 1 },
          { text: "12 sandwiches are shared equally among 3 families at a picnic. How many does each family get?", type: "lines", lines: 1 },
          { text: "There are 20 ducks at the pond. They swim in groups of 4. How many groups?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Real-World Choices",
        instruction:
          "Circle the correct answer for each real-world problem.",
        questions: [
          {
            prompt: "Nan bakes 18 scones for 3 grandchildren. How many each?",
            options: ["5 each", "6 each", "7 each"],
          },
          {
            prompt: "A box of 24 crayons shared among 4 children = ?",
            options: ["5 each", "6 each", "7 each"],
          },
          {
            prompt: "Pop has 10 fishing hooks. He puts them in groups of 2. How many groups?",
            options: ["4 groups", "5 groups", "6 groups"],
          },
          {
            prompt: "Mum cuts a pizza into 8 slices for 2 children. How many slices each?",
            options: ["3 each", "4 each", "5 each"],
          },
        ],
      },

      // ─── Challenge: Sequence patterns in sharing ───

      {
        type: "sequence",
        title: "Sharing Number Patterns",
        instruction:
          "Fill in the missing numbers. These patterns show equal sharing!",
        sequences: [
          { items: [2, 4, 6, 0, 0, 12], answer: [8, 10] },
          { items: [3, 6, 0, 12, 0, 18], answer: [9, 15] },
          { items: [5, 10, 15, 0, 0, 30], answer: [20, 25] },
          { items: [4, 8, 0, 16, 0, 24], answer: [12, 20] },
        ],
      },

      // ─── Challenge: Number bonds and sharing ───

      {
        type: "number-bonds",
        title: "Sharing Number Bonds (A)",
        instruction:
          "Complete the number bonds. The total is shared into 2 equal parts.",
        bonds: [
          { total: 6, partA: 3, partB: null },
          { total: 8, partA: null, partB: 4 },
          { total: 10, partA: 5, partB: null },
          { total: 12, partA: null, partB: 6 },
          { total: 14, partA: 7, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Sharing Number Bonds (B)",
        instruction:
          "Complete the number bonds. The total is shared into equal parts.",
        bonds: [
          { total: 9, partA: 3, partB: null },
          { total: 12, partA: null, partB: 4 },
          { total: 15, partA: 5, partB: null },
          { total: 20, partA: null, partB: 5 },
        ],
      },

      // ─── Challenge: Explain your thinking ───

      {
        type: "open-response",
        title: "Explain Your Sharing",
        instruction:
          "Solve each problem and explain how you worked it out.",
        prompts: [
          { text: "How would you share 12 grapes equally among 4 friends? Explain your method.", type: "lines", lines: 3 },
          { text: "What is the difference between sharing and grouping? Give an example of each.", type: "lines", lines: 3 },
          { text: "Can you always share things equally? Why or why not?", type: "lines", lines: 3 },
        ],
      },

      // ─── Home Activities ───

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
          "Share 8 cherry tomatoes equally among 4 plates.",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Grouping Around the House",
        instruction:
          "Find things at home to practise making equal groups!",
        suggestions: [
          "Put 12 socks into pairs (groups of 2). How many pairs?",
          "Line up 10 spoons. Make groups of 5. How many groups?",
          "Put toys into groups of 3. How many groups can you make?",
          "Help set the table — share cutlery equally among the family.",
          "Count your shoes. How many pairs can you make?",
        ],
      },
    ],
    nextSteps: ["skip-counting-patterns"],
  },

  // ── WS 6: Skip Counting & Repeating Patterns (Algebra) ─────
  {
    slug: "skip-counting-patterns",
    title: "Skip Counting & Repeating Patterns",
    strand: "Algebra",
    description:
      "Create skip counting and repeating patterns, identifying the repeating unit",
    lesson: {
      title: "Pattern Power — Repeating Units",
      objective: "Create and extend repeating patterns, identify the repeating unit, and connect AB-style patterns to skip counting sequences.",
      materials: [
        "Two types of small objects in two colours or shapes — e.g. blocks, buttons, coins, or leaves",
        "A strip of paper for laying out the pattern",
        "Pencil and paper",
      ],
      intro: {
        title: "Clap the Pattern",
        script: "Listen to this: clap, tap, clap, tap, clap, tap. What comes next? Now listen again — stomp, stomp, clap, stomp, stomp, clap. What\'s the bit that keeps repeating? That repeating bit is called the UNIT. Once you find the unit, you can predict what comes next forever!",
        action: "Clap two or three body-percussion patterns. Start simple (clap-tap) then try three-part (clap-clap-stomp). Ask your child to name the repeating unit and predict the next three actions.",
      },
      mainActivity: {
        title: "Build a Pattern, Find the Unit",
        script: "Use your two types of objects to build a pattern on this strip. The bit that keeps repeating — we call that the unit of the pattern. Make it so the same unit repeats at least four times. Now circle the part that repeats — that\'s your unit. Let\'s try making a different pattern where the unit has three parts instead of two.",
        action: "Let your child build their own AB pattern first, then an ABB or ABC pattern. Help them circle the repeating unit with a pencil. Then introduce a skip-count pattern: lay out 2, 4, 6, 8 in coins and ask what the \'jump\' is. Connect this to the idea of a repeating +2 unit.",
      },
      wrapUp: {
        title: "What\'s My Rule?",
        script: "I\'m going to start a pattern and you figure out my rule, then keep it going. Ready? Circle, square, circle, square... what\'s my unit? What comes next? Now swap — you make one and I\'ll guess your rule.",
        action: "Alternate being the pattern-maker. Each time the other person guesses the unit, they must continue the pattern for four more steps before you check. Finish with a number pattern to connect back to skip counting.",
      },
      parentTip: "Year 1 pattern work goes beyond 'what comes next' to understanding WHY — can your child explain the rule? Ask them to teach YOU the pattern. If they can explain it in words ('it goes red, blue, red, blue — the colours keep swapping'), they truly understand it.",
      extension: "Create a 'Pattern Museum'. Make three different patterns using household objects (coins, pasta shapes, coloured blocks). Label each with the pattern rule written by your child (or dictated to you). Display them and invite other family members to 'visit the museum' and guess each pattern rule.",
      resources: [
        { title: "Khan Academy – Patterns and Sequences", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-place-value", description: "Year 1 pattern recognition and extension activities." },
        { title: "NRICH – Pattern Investigations", url: "https://nrich.maths.org/early-years", description: "Open-ended pattern tasks encouraging mathematical thinking." },
        { title: "Maths is Fun – Patterns", url: "https://www.mathsisfun.com/numberpatterns.html", description: "Interactive number pattern exploration and explanations." },
      ],
    },
    activities: [
      // ─── Easy: 2-Element Repeating Patterns (AB, AB, AB) ───

      {
        type: "pattern",
        title: "AB Pattern: Stars and Hearts",
        instruction:
          "Look at the pattern. Draw the missing shapes to continue it.",
        rows: [
          {
            sequence: ["star", "heart", "star", "heart", "star", "heart", null, null],
            unitLength: 2,
          },
          {
            sequence: ["heart", "star", "heart", "star", null, null],
            unitLength: 2,
          },
          {
            sequence: ["star", "heart", "star", null, null, null],
            unitLength: 2,
          },
        ],
      },
      {
        type: "pattern",
        title: "AB Pattern: Circles and Squares",
        instruction:
          "Continue each pattern by drawing the next shapes.",
        rows: [
          {
            sequence: ["circle", "square", "circle", "square", "circle", null, null],
            unitLength: 2,
          },
          {
            sequence: ["square", "circle", "square", "circle", null, null],
            unitLength: 2,
          },
          {
            sequence: ["circle", "square", "circle", "square", "circle", "square", null, null],
            unitLength: 2,
          },
        ],
      },
      {
        type: "pattern",
        title: "AB Pattern: Apples and Fish",
        instruction:
          "What comes next? Draw the missing objects.",
        rows: [
          {
            sequence: ["apple", "fish", "apple", "fish", "apple", null, null],
            unitLength: 2,
          },
          {
            sequence: ["fish", "apple", "fish", "apple", null, null],
            unitLength: 2,
          },
          {
            sequence: ["apple", "fish", "apple", "fish", "apple", "fish", null, null],
            unitLength: 2,
          },
        ],
      },
      {
        type: "pattern",
        title: "AB Pattern: Flowers and Diamonds",
        instruction:
          "Look at the pattern carefully. Fill in the missing shapes.",
        rows: [
          {
            sequence: ["flower", "diamond", "flower", "diamond", null, null],
            unitLength: 2,
          },
          {
            sequence: ["diamond", "flower", "diamond", "flower", "diamond", null, null],
            unitLength: 2,
          },
          {
            sequence: ["flower", "diamond", "flower", null, null, null],
            unitLength: 2,
          },
          {
            sequence: ["diamond", "flower", "diamond", "flower", "diamond", "flower", null, null],
            unitLength: 2,
          },
        ],
      },
      {
        type: "pattern",
        title: "AB Pattern: Butterflies and Suns",
        instruction:
          "Continue these patterns. What comes next?",
        rows: [
          {
            sequence: ["butterfly", "sun", "butterfly", "sun", null, null],
            unitLength: 2,
          },
          {
            sequence: ["sun", "butterfly", "sun", "butterfly", "sun", null, null],
            unitLength: 2,
          },
          {
            sequence: ["butterfly", "sun", "butterfly", "sun", "butterfly", "sun", null, null],
            unitLength: 2,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (AB Patterns)",
        instruction:
          "Look at each pattern. Circle the shape that comes next.",
        questions: [
          {
            prompt: "star, heart, star, heart, star, ?",
            options: ["star", "heart", "diamond"],
          },
          {
            prompt: "circle, square, circle, square, ?",
            options: ["triangle", "circle", "square"],
          },
          {
            prompt: "apple, fish, apple, fish, apple, ?",
            options: ["apple", "fish", "star"],
          },
          {
            prompt: "flower, diamond, flower, diamond, flower, ?",
            options: ["flower", "diamond", "circle"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit (AB)",
        instruction:
          "What is the repeating unit in each pattern? Circle the correct answer.",
        questions: [
          {
            prompt: "Pattern: star, heart, star, heart, star, heart ...",
            options: ["star", "star, heart", "heart, star, heart"],
          },
          {
            prompt: "Pattern: circle, square, circle, square ...",
            options: ["circle, square", "circle", "square, circle, square"],
          },
          {
            prompt: "Pattern: sun, moon, sun, moon, sun, moon ...",
            options: ["sun, moon, sun", "moon, sun", "sun, moon"],
          },
          {
            prompt: "Pattern: apple, fish, apple, fish ...",
            options: ["apple, fish", "fish, apple, fish", "apple"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the AB Patterns",
        instruction:
          "Draw a line to match each pattern to its repeating unit.",
        left: [
          "star, heart, star, heart ...",
          "circle, triangle, circle, triangle ...",
          "flower, butterfly, flower, butterfly ...",
          "apple, banana, apple, banana ...",
        ],
        right: [
          "apple, banana",
          "star, heart",
          "flower, butterfly",
          "circle, triangle",
        ],
      },

      // ─── Easy-Medium: 3-Element Repeating Patterns (ABC, ABC) ───

      {
        type: "pattern",
        title: "ABC Pattern: Three Shapes",
        instruction:
          "These patterns use three different shapes. Draw the missing ones.",
        rows: [
          {
            sequence: ["circle", "square", "triangle", "circle", "square", "triangle", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["triangle", "circle", "square", "triangle", "circle", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["square", "triangle", "circle", "square", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "pattern",
        title: "ABC Pattern: Hearts, Stars and Flowers",
        instruction:
          "Look at each pattern carefully. Draw the next shapes.",
        rows: [
          {
            sequence: ["heart", "star", "flower", "heart", "star", "flower", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["star", "flower", "heart", "star", "flower", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["flower", "heart", "star", "flower", "heart", "star", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "pattern",
        title: "ABC Pattern: Animals and Objects",
        instruction:
          "Continue each pattern by filling in the blanks.",
        rows: [
          {
            sequence: ["cat", "dog", "bird", "cat", "dog", "bird", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["sun", "moon", "star", "sun", "moon", "star", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["pencil", "book", "cup", "pencil", "book", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "pattern",
        title: "ABC Pattern: More Practice",
        instruction:
          "What comes next? Fill in the missing shapes.",
        rows: [
          {
            sequence: ["apple", "banana", "grape", "apple", "banana", "grape", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["diamond", "flower", "butterfly", "diamond", "flower", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["tree", "sun", "flower", "tree", "sun", "flower", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["ball", "teddy", "car", "ball", "teddy", "car", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (ABC Patterns)",
        instruction:
          "Look at each pattern. Circle the shape that comes next.",
        questions: [
          {
            prompt: "circle, square, triangle, circle, square, triangle, circle, ?",
            options: ["circle", "square", "triangle"],
          },
          {
            prompt: "heart, star, flower, heart, star, ?",
            options: ["heart", "star", "flower"],
          },
          {
            prompt: "cat, dog, bird, cat, dog, bird, cat, dog, ?",
            options: ["cat", "dog", "bird"],
          },
          {
            prompt: "apple, banana, grape, apple, ?",
            options: ["grape", "banana", "apple"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit (ABC)",
        instruction:
          "What is the repeating unit in each pattern? Circle the correct answer.",
        questions: [
          {
            prompt: "Pattern: circle, square, triangle, circle, square, triangle ...",
            options: [
              "circle, square",
              "circle, square, triangle",
              "square, triangle",
            ],
          },
          {
            prompt: "Pattern: heart, star, flower, heart, star, flower ...",
            options: [
              "heart, star, flower",
              "heart, star",
              "star, flower, heart",
            ],
          },
          {
            prompt: "Pattern: sun, moon, star, sun, moon, star ...",
            options: ["sun, moon, star", "sun, moon", "moon, star"],
          },
          {
            prompt: "Pattern: cat, dog, bird, cat, dog, bird ...",
            options: [
              "cat, dog",
              "dog, bird, cat",
              "cat, dog, bird",
            ],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the ABC Patterns",
        instruction:
          "Draw a line to match each pattern to its repeating unit.",
        left: [
          "circle, square, triangle, circle ...",
          "heart, star, flower, heart ...",
          "sun, moon, star, sun ...",
          "apple, banana, grape, apple ...",
        ],
        right: [
          "sun, moon, star",
          "circle, square, triangle",
          "apple, banana, grape",
          "heart, star, flower",
        ],
      },

      // ─── Medium: Identify the Repeating Unit in Various Patterns ───

      {
        type: "pattern",
        title: "AAB Patterns",
        instruction:
          "These patterns have two of the same, then one different. Continue the pattern.",
        rows: [
          {
            sequence: ["heart", "heart", "star", "heart", "heart", "star", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["circle", "circle", "triangle", "circle", "circle", "triangle", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["apple", "apple", "fish", "apple", "apple", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "pattern",
        title: "ABB Patterns",
        instruction:
          "These patterns have one shape, then two of another. Continue the pattern.",
        rows: [
          {
            sequence: ["star", "flower", "flower", "star", "flower", "flower", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["diamond", "heart", "heart", "diamond", "heart", "heart", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["sun", "moon", "moon", "sun", "moon", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Name That Pattern Type",
        instruction:
          "Look at each pattern. Is it an AB, ABC, AAB or ABB pattern? Circle the correct answer.",
        questions: [
          {
            prompt: "star, heart, star, heart, star, heart ...",
            options: ["AB", "ABC", "AAB"],
          },
          {
            prompt: "circle, circle, triangle, circle, circle, triangle ...",
            options: ["AB", "ABB", "AAB"],
          },
          {
            prompt: "flower, sun, moon, flower, sun, moon ...",
            options: ["AB", "ABC", "ABB"],
          },
          {
            prompt: "diamond, heart, heart, diamond, heart, heart ...",
            options: ["AAB", "AB", "ABB"],
          },
          {
            prompt: "apple, fish, apple, fish ...",
            options: ["AB", "ABC", "AAB"],
          },
        ],
      },
      {
        type: "pattern",
        title: "Mixed Pattern Practice 1",
        instruction:
          "Each row has a different kind of pattern. Continue it!",
        rows: [
          {
            sequence: ["star", "star", "heart", "star", "star", "heart", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["circle", "triangle", "circle", "triangle", null, null],
            unitLength: 2,
          },
          {
            sequence: ["flower", "diamond", "butterfly", "flower", "diamond", "butterfly", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["cat", "bird", "bird", "cat", "bird", "bird", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "pattern",
        title: "Mixed Pattern Practice 2",
        instruction:
          "What comes next in each pattern?",
        rows: [
          {
            sequence: ["tree", "tree", "sun", "tree", "tree", "sun", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["ball", "teddy", "ball", "teddy", "ball", null, null],
            unitLength: 2,
          },
          {
            sequence: ["cup", "spoon", "cup", "spoon", null, null],
            unitLength: 2,
          },
          {
            sequence: ["banana", "grape", "grape", "banana", "grape", "grape", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit (Mixed)",
        instruction:
          "What is the repeating unit in each pattern? Circle the correct answer.",
        questions: [
          {
            prompt: "Pattern: star, star, heart, star, star, heart ...",
            options: ["star, heart", "star, star, heart", "star, star"],
          },
          {
            prompt: "Pattern: flower, sun, sun, flower, sun, sun ...",
            options: [
              "flower, sun",
              "sun, sun, flower",
              "flower, sun, sun",
            ],
          },
          {
            prompt: "Pattern: apple, banana, grape, apple, banana, grape ...",
            options: [
              "apple, banana",
              "apple, banana, grape",
              "banana, grape",
            ],
          },
          {
            prompt: "Pattern: cat, cat, dog, cat, cat, dog ...",
            options: [
              "cat, cat, dog",
              "cat, dog",
              "cat, cat",
            ],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Pattern to Type",
        instruction:
          "Draw a line to match each pattern to the correct pattern type.",
        left: [
          "star, heart, star, heart ...",
          "circle, circle, square, circle, circle, square ...",
          "apple, fish, grape, apple, fish, grape ...",
          "sun, moon, moon, sun, moon, moon ...",
        ],
        right: ["ABC", "ABB", "AB", "AAB"],
      },

      // ─── Medium: Skip Counting Patterns (Count by 2s, 3s, 4s, 5s, 10s) ───

      {
        type: "sequence",
        title: "Count by 2s",
        instruction:
          "Fill in the missing numbers. These patterns count by 2s.",
        sequences: [
          { items: [2, 4, 6, 0, 10, 0], answer: [8, 12] },
          { items: [0, 4, 0, 8, 10, 12], answer: [2, 6] },
          { items: [10, 12, 14, 0, 0, 20], answer: [16, 18] },
          { items: [20, 0, 24, 26, 0, 30], answer: [22, 28] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 2s — More Practice",
        instruction:
          "Keep counting by 2s! Write the missing numbers.",
        sequences: [
          { items: [6, 8, 0, 12, 14, 0], answer: [10, 16] },
          { items: [0, 16, 18, 0, 22, 24], answer: [14, 20] },
          { items: [30, 32, 0, 36, 0, 40], answer: [34, 38] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 5s",
        instruction:
          "Fill in the missing numbers. These patterns count by 5s.",
        sequences: [
          { items: [5, 10, 0, 20, 25, 0], answer: [15, 30] },
          { items: [0, 10, 15, 0, 25, 30], answer: [5, 20] },
          { items: [10, 15, 20, 0, 0, 35], answer: [25, 30] },
          { items: [30, 0, 40, 45, 0, 55], answer: [35, 50] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 5s — More Practice",
        instruction:
          "Keep skip counting by 5s. Write the missing numbers.",
        sequences: [
          { items: [15, 20, 25, 0, 35, 0], answer: [30, 40] },
          { items: [0, 50, 55, 60, 0, 70], answer: [45, 65] },
          { items: [40, 0, 50, 0, 60, 65], answer: [45, 55] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 10s",
        instruction:
          "Fill in the missing numbers. These patterns count by 10s.",
        sequences: [
          { items: [10, 20, 0, 40, 0, 60], answer: [30, 50] },
          { items: [0, 20, 30, 0, 50, 60], answer: [10, 40] },
          { items: [30, 40, 50, 0, 0, 80], answer: [60, 70] },
          { items: [50, 0, 70, 0, 90, 100], answer: [60, 80] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 3s",
        instruction:
          "Fill in the missing numbers. These patterns count by 3s.",
        sequences: [
          { items: [3, 6, 9, 0, 0, 18], answer: [12, 15] },
          { items: [0, 6, 9, 12, 0, 18], answer: [3, 15] },
          { items: [9, 12, 0, 18, 21, 0], answer: [15, 24] },
          { items: [12, 0, 18, 21, 0, 27], answer: [15, 24] },
        ],
      },
      {
        type: "sequence",
        title: "Count by 4s",
        instruction:
          "Fill in the missing numbers. These patterns count by 4s.",
        sequences: [
          { items: [4, 8, 0, 16, 0, 24], answer: [12, 20] },
          { items: [0, 8, 12, 0, 20, 24], answer: [4, 16] },
          { items: [8, 12, 16, 0, 0, 28], answer: [20, 24] },
          { items: [16, 20, 0, 28, 0, 36], answer: [24, 32] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Rule Does This Pattern Follow?",
        instruction:
          "Look at the number pattern. Circle the skip counting rule.",
        questions: [
          {
            prompt: "2, 4, 6, 8, 10, 12 ...",
            options: ["Count by 2s", "Count by 3s", "Count by 4s"],
          },
          {
            prompt: "5, 10, 15, 20, 25 ...",
            options: ["Count by 2s", "Count by 5s", "Count by 10s"],
          },
          {
            prompt: "3, 6, 9, 12, 15 ...",
            options: ["Count by 3s", "Count by 4s", "Count by 5s"],
          },
          {
            prompt: "10, 20, 30, 40, 50 ...",
            options: ["Count by 5s", "Count by 2s", "Count by 10s"],
          },
          {
            prompt: "4, 8, 12, 16, 20 ...",
            options: ["Count by 3s", "Count by 4s", "Count by 5s"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "What Number Comes Next?",
        instruction:
          "Look at the skip counting pattern. Circle the number that comes next.",
        questions: [
          {
            prompt: "2, 4, 6, 8, ?",
            options: ["9", "10", "12"],
          },
          {
            prompt: "5, 10, 15, 20, ?",
            options: ["22", "25", "30"],
          },
          {
            prompt: "3, 6, 9, 12, ?",
            options: ["13", "14", "15"],
          },
          {
            prompt: "10, 20, 30, 40, ?",
            options: ["45", "50", "55"],
          },
          {
            prompt: "4, 8, 12, 16, ?",
            options: ["18", "20", "22"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Skip Counting Rule",
        instruction:
          "Draw a line to match each number pattern to the correct counting rule.",
        left: [
          "2, 4, 6, 8, 10 ...",
          "5, 10, 15, 20 ...",
          "10, 20, 30, 40 ...",
          "3, 6, 9, 12 ...",
          "4, 8, 12, 16 ...",
        ],
        right: [
          "Count by 3s",
          "Count by 10s",
          "Count by 2s",
          "Count by 4s",
          "Count by 5s",
        ],
      },

      // ─── Medium-Hard: Mixed Pattern Types & Translating Between Representations ───

      {
        type: "pattern",
        title: "Translate the Pattern (Shapes to Shapes)",
        instruction:
          "Each row shows a pattern. The second row uses different shapes but follows the same rule. Fill in the blanks.",
        rows: [
          {
            sequence: ["star", "heart", "star", "heart", "star", "heart", null, null],
            unitLength: 2,
          },
          {
            sequence: ["circle", "square", "circle", "square", null, null],
            unitLength: 2,
          },
          {
            sequence: ["apple", "fish", "grape", "apple", "fish", "grape", null, null, null],
            unitLength: 3,
          },
          {
            sequence: ["sun", "moon", "tree", "sun", "moon", null, null, null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Same Pattern, Different Shapes",
        instruction:
          "Which pattern follows the same rule as the one shown?",
        questions: [
          {
            prompt: "Pattern: star, heart, star, heart, star, heart ...",
            options: [
              "circle, square, circle, square ...",
              "circle, circle, square ...",
              "circle, square, triangle ...",
            ],
          },
          {
            prompt: "Pattern: apple, apple, fish, apple, apple, fish ...",
            options: [
              "sun, moon, sun, moon ...",
              "sun, sun, moon, sun, sun, moon ...",
              "sun, moon, moon, sun ...",
            ],
          },
          {
            prompt: "Pattern: cat, dog, bird, cat, dog, bird ...",
            options: [
              "star, heart, star, heart ...",
              "star, heart, flower, star, heart, flower ...",
              "star, star, heart, star, star, heart ...",
            ],
          },
          {
            prompt: "Pattern: sun, moon, moon, sun, moon, moon ...",
            options: [
              "circle, triangle, triangle, circle, triangle, triangle ...",
              "circle, circle, triangle ...",
              "circle, triangle, circle, triangle ...",
            ],
          },
        ],
      },
      {
        type: "pattern",
        title: "Fill in the Middle",
        instruction:
          "Some shapes in the middle of the pattern are missing. Work out the pattern rule and fill them in.",
        rows: [
          {
            sequence: ["star", null, "star", "heart", "star", null, "star", "heart"],
            unitLength: 2,
          },
          {
            sequence: ["circle", "square", null, "circle", "square", "triangle", null, null, "triangle"],
            unitLength: 3,
          },
          {
            sequence: ["apple", null, "apple", "fish", null, "fish"],
            unitLength: 2,
          },
          {
            sequence: ["sun", "sun", null, "sun", "sun", "moon"],
            unitLength: 3,
          },
        ],
      },
      {
        type: "pattern",
        title: "Fill in the Middle — More Practice",
        instruction:
          "Some shapes in the pattern are missing. Use the pattern rule to work out what goes in each gap.",
        rows: [
          {
            sequence: ["heart", "star", null, "heart", null, "flower", "heart", "star", "flower"],
            unitLength: 3,
          },
          {
            sequence: ["cat", null, "cat", "dog", "cat", null],
            unitLength: 2,
          },
          {
            sequence: [null, "diamond", "flower", "butterfly", null, "flower", "butterfly"],
            unitLength: 3,
          },
          {
            sequence: ["tree", "tree", null, null, "tree", "sun"],
            unitLength: 3,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort Patterns by Type",
        instruction:
          "Read each pattern. Sort them into the correct column: AB patterns or ABC patterns.",
        columns: ["AB Pattern", "ABC Pattern"],
        items: [
          { label: "star, heart, star, heart ..." },
          { label: "circle, square, triangle, circle ..." },
          { label: "sun, moon, sun, moon ..." },
          { label: "apple, fish, grape, apple ..." },
          { label: "cat, dog, cat, dog ..." },
          { label: "ball, teddy, car, ball ..." },
        ],
      },
      {
        type: "sequence",
        title: "Mixed Skip Counting",
        instruction:
          "Each row counts by a different number. Work out the rule and fill in the missing numbers.",
        sequences: [
          { items: [2, 4, 0, 8, 0, 12], answer: [6, 10] },
          { items: [5, 0, 15, 20, 0, 30], answer: [10, 25] },
          { items: [3, 6, 0, 12, 15, 0], answer: [9, 18] },
          { items: [10, 0, 30, 40, 0, 60], answer: [20, 50] },
        ],
      },
      {
        type: "sequence",
        title: "Backwards Skip Counting",
        instruction:
          "These patterns count backwards! Fill in the missing numbers.",
        sequences: [
          { items: [20, 18, 16, 0, 12, 0], answer: [14, 10] },
          { items: [30, 25, 0, 15, 0, 5], answer: [20, 10] },
          { items: [100, 90, 80, 0, 0, 50], answer: [70, 60] },
          { items: [24, 0, 16, 12, 0, 4], answer: [20, 8] },
        ],
      },
      {
        type: "circle-correct",
        title: "Counting Forwards or Backwards?",
        instruction:
          "Look at each pattern. Is it counting forwards or backwards?",
        questions: [
          {
            prompt: "2, 4, 6, 8, 10 ...",
            options: ["Forwards", "Backwards"],
          },
          {
            prompt: "20, 15, 10, 5 ...",
            options: ["Forwards", "Backwards"],
          },
          {
            prompt: "30, 27, 24, 21 ...",
            options: ["Forwards", "Backwards"],
          },
          {
            prompt: "4, 8, 12, 16, 20 ...",
            options: ["Forwards", "Backwards"],
          },
        ],
      },

      // ─── Hard: Complex Units (AABB, ABBC), Create Own Patterns, Growing Awareness ───

      {
        type: "pattern",
        title: "AABB Patterns",
        instruction:
          "These patterns have two of each shape together. Continue the pattern.",
        rows: [
          {
            sequence: ["star", "star", "heart", "heart", "star", "star", "heart", "heart", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["circle", "circle", "square", "square", "circle", "circle", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["sun", "sun", "moon", "moon", "sun", "sun", null, null, null, null],
            unitLength: 4,
          },
        ],
      },
      {
        type: "pattern",
        title: "AABB Patterns — More Practice",
        instruction:
          "Keep going with AABB patterns. Fill in the missing shapes.",
        rows: [
          {
            sequence: ["apple", "apple", "fish", "fish", "apple", "apple", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["flower", "flower", "diamond", "diamond", "flower", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["cat", "cat", "dog", "dog", "cat", "cat", "dog", "dog", null, null, null, null],
            unitLength: 4,
          },
        ],
      },
      {
        type: "pattern",
        title: "ABBC Patterns",
        instruction:
          "These patterns have a tricky repeating unit. Look carefully and continue.",
        rows: [
          {
            sequence: ["star", "heart", "heart", "flower", "star", "heart", "heart", "flower", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["circle", "triangle", "triangle", "square", "circle", "triangle", "triangle", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["sun", "moon", "moon", "star", "sun", "moon", "moon", "star", null, null, null, null],
            unitLength: 4,
          },
        ],
      },
      {
        type: "pattern",
        title: "ABAC Patterns",
        instruction:
          "In these patterns, one shape appears twice with others in between. Continue the pattern.",
        rows: [
          {
            sequence: ["star", "heart", "star", "flower", "star", "heart", "star", "flower", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["circle", "square", "circle", "triangle", "circle", "square", "circle", null, null, null, null],
            unitLength: 4,
          },
          {
            sequence: ["apple", "fish", "apple", "grape", "apple", "fish", null, null, null, null],
            unitLength: 4,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit (Complex Patterns)",
        instruction:
          "What is the repeating unit? Circle the correct answer.",
        questions: [
          {
            prompt: "Pattern: star, star, heart, heart, star, star, heart, heart ...",
            options: [
              "star, heart",
              "star, star, heart, heart",
              "star, star, heart",
            ],
          },
          {
            prompt: "Pattern: circle, triangle, triangle, square, circle, triangle, triangle, square ...",
            options: [
              "circle, triangle, triangle, square",
              "circle, triangle, square",
              "circle, triangle, triangle",
            ],
          },
          {
            prompt: "Pattern: sun, moon, sun, star, sun, moon, sun, star ...",
            options: [
              "sun, moon, star",
              "sun, moon, sun, star",
              "sun, moon",
            ],
          },
          {
            prompt: "Pattern: apple, apple, fish, fish, apple, apple, fish, fish ...",
            options: [
              "apple, fish",
              "apple, apple, fish",
              "apple, apple, fish, fish",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Name That Complex Pattern",
        instruction:
          "What type of pattern is this? Circle the correct answer.",
        questions: [
          {
            prompt: "star, star, heart, heart, star, star, heart, heart ...",
            options: ["AB", "AAB", "AABB"],
          },
          {
            prompt: "circle, triangle, triangle, square, circle, triangle, triangle, square ...",
            options: ["ABC", "ABBC", "ABB"],
          },
          {
            prompt: "sun, moon, sun, star, sun, moon, sun, star ...",
            options: ["ABAC", "ABBC", "ABC"],
          },
          {
            prompt: "flower, flower, butterfly, butterfly, flower, flower, butterfly, butterfly ...",
            options: ["AABB", "ABAB", "ABB"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Complex Patterns to Type",
        instruction:
          "Draw a line to match each pattern to the correct pattern type.",
        left: [
          "star, star, heart, heart ...",
          "circle, triangle, triangle, square ...",
          "apple, fish, apple, grape ...",
          "sun, moon, moon, star ...",
        ],
        right: ["ABBC", "ABAC", "AABB", "ABBC"],
      },
      {
        type: "sequence",
        title: "Tricky Skip Counting",
        instruction:
          "These skip counting patterns are a bit harder. Find the rule and fill in the blanks.",
        sequences: [
          { items: [6, 9, 0, 15, 18, 0], answer: [12, 21] },
          { items: [8, 12, 16, 0, 0, 28], answer: [20, 24] },
          { items: [15, 20, 0, 30, 0, 40], answer: [25, 35] },
          { items: [0, 14, 21, 28, 0, 42], answer: [7, 35] },
        ],
      },
      {
        type: "sequence",
        title: "Growing Number Patterns",
        instruction:
          "These patterns grow! Each time, the gap gets bigger. Fill in the missing numbers.",
        sequences: [
          { items: [1, 2, 4, 0, 11, 0], answer: [7, 16] },
          { items: [1, 3, 6, 0, 15, 0], answer: [10, 21] },
          { items: [2, 4, 8, 0, 32, 0], answer: [16, 64] },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own AB Pattern",
        instruction:
          "Use the space below to draw your own repeating patterns.",
        prompts: [
          {
            text: "Draw an AB pattern using two shapes of your choice. Repeat it at least 3 times:",
            type: "box",
          },
          {
            text: "What is the repeating unit in your pattern?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own ABC Pattern",
        instruction:
          "Now try making patterns with three different shapes.",
        prompts: [
          {
            text: "Draw an ABC pattern. Repeat it at least 2 times:",
            type: "box",
          },
          {
            text: "What is the repeating unit?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Create a Complex Pattern",
        instruction:
          "Challenge yourself to make a harder pattern!",
        prompts: [
          {
            text: "Draw an AABB or ABBC pattern. Repeat it at least 2 times:",
            type: "box",
          },
          {
            text: "What type of pattern did you make (e.g. AABB, ABBC)?",
            type: "lines",
            lines: 1,
          },
          {
            text: "What is the repeating unit?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Create a Skip Counting Pattern",
        instruction:
          "Write your own skip counting patterns.",
        prompts: [
          {
            text: "Write a skip counting pattern that counts by 2s. Start from any number:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write a skip counting pattern that counts by 5s. Start from any number:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write a skip counting pattern that counts backwards by 10s:",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // ─── Challenge: Reasoning About Patterns, Odd-One-Out, Fixing Broken Patterns ───

      {
        type: "circle-correct",
        title: "Odd One Out — Shape Patterns",
        instruction:
          "One of these patterns does not follow the same rule as the others. Circle the odd one out.",
        questions: [
          {
            prompt: "Which pattern is NOT an AB pattern?",
            options: [
              "star, heart, star, heart ...",
              "circle, square, circle, square ...",
              "sun, sun, moon, sun, sun, moon ...",
            ],
          },
          {
            prompt: "Which pattern is NOT an ABC pattern?",
            options: [
              "apple, fish, grape, apple, fish, grape ...",
              "sun, moon, star, sun, moon, star ...",
              "heart, heart, star, heart, heart, star ...",
            ],
          },
          {
            prompt: "Which pattern has a different repeating unit length?",
            options: [
              "circle, triangle, circle, triangle ...",
              "star, heart, star, heart ...",
              "sun, moon, star, sun, moon, star ...",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd One Out — Number Patterns",
        instruction:
          "One of these number patterns does not follow the same rule. Circle the odd one out.",
        questions: [
          {
            prompt: "Which pattern does NOT count by 2s?",
            options: [
              "2, 4, 6, 8, 10",
              "4, 6, 8, 10, 12",
              "3, 6, 9, 12, 15",
            ],
          },
          {
            prompt: "Which pattern does NOT count by 5s?",
            options: [
              "5, 10, 15, 20, 25",
              "10, 15, 20, 25, 30",
              "4, 8, 12, 16, 20",
            ],
          },
          {
            prompt: "Which pattern does NOT count by 10s?",
            options: [
              "10, 20, 30, 40",
              "20, 30, 40, 50",
              "10, 15, 20, 25",
            ],
          },
        ],
      },
      {
        type: "pattern",
        title: "Fix the Broken Pattern 1",
        instruction:
          "Someone made a mistake in each pattern! One shape is wrong. Cross it out and draw the correct shape in the blank.",
        rows: [
          {
            sequence: ["star", "heart", "star", "star", "star", "heart", null],
            unitLength: 2,
          },
          {
            sequence: ["circle", "square", "triangle", "circle", "circle", "triangle", null],
            unitLength: 3,
          },
          {
            sequence: ["apple", "fish", "apple", "apple", "apple", "fish", null],
            unitLength: 2,
          },
        ],
      },
      {
        type: "pattern",
        title: "Fix the Broken Pattern 2",
        instruction:
          "There is a mistake in each row. Find the shape that does not belong, cross it out, and fill in the blank with the correct shape.",
        rows: [
          {
            sequence: ["sun", "moon", "moon", "sun", "sun", "moon", null],
            unitLength: 2,
          },
          {
            sequence: ["flower", "diamond", "butterfly", "flower", "flower", "butterfly", null],
            unitLength: 3,
          },
          {
            sequence: ["cat", "cat", "dog", "cat", "dog", "dog", null],
            unitLength: 3,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Shape Is Wrong?",
        instruction:
          "Each pattern has one mistake. Circle the shape that does not belong.",
        questions: [
          {
            prompt: "star, heart, star, FLOWER, star, heart — which is wrong?",
            options: ["star (1st)", "flower (4th)", "heart (6th)"],
          },
          {
            prompt: "circle, square, triangle, circle, CIRCLE, triangle — which is wrong?",
            options: ["circle (1st)", "circle (5th)", "triangle (6th)"],
          },
          {
            prompt: "apple, fish, apple, fish, apple, APPLE — which is wrong?",
            options: ["apple (1st)", "fish (4th)", "apple (6th)"],
          },
          {
            prompt: "sun, sun, moon, sun, MOON, moon — which is wrong?",
            options: ["sun (1st)", "moon (5th)", "moon (6th)"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Wrong?",
        instruction:
          "Each skip counting pattern has one mistake. Circle the number that does not belong.",
        questions: [
          {
            prompt: "2, 4, 6, 7, 10, 12",
            options: ["6", "7", "10"],
          },
          {
            prompt: "5, 10, 15, 25, 25, 30",
            options: ["15", "25 (4th)", "30"],
          },
          {
            prompt: "10, 20, 30, 35, 50, 60",
            options: ["30", "35", "50"],
          },
          {
            prompt: "3, 6, 9, 11, 15, 18",
            options: ["9", "11", "15"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Explain the Pattern",
        instruction:
          "Look at each pattern and explain the rule in your own words.",
        prompts: [
          {
            text: "Pattern: star, heart, star, heart, star, heart ... What is the rule?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Pattern: 5, 10, 15, 20, 25 ... What is the rule?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Pattern: circle, circle, square, circle, circle, square ... What is the rule?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Pattern Reasoning",
        instruction:
          "Answer these questions about patterns.",
        prompts: [
          {
            text: "If a pattern goes star, heart, star, heart ... what will the 10th shape be? Explain how you know:",
            type: "lines",
            lines: 3,
          },
          {
            text: "If you count by 5s starting at 5, will you ever say the number 23? Why or why not?",
            type: "lines",
            lines: 3,
          },
          {
            text: "How are these two patterns the same? star, heart, star, heart ... AND circle, square, circle, square ...",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Pattern Length",
        instruction:
          "Sort these patterns by the length of their repeating unit — short (2 shapes) or long (3 or more shapes).",
        columns: ["Short Unit (2)", "Long Unit (3+)"],
        items: [
          { label: "star, heart, star, heart ..." },
          { label: "circle, square, triangle, circle ..." },
          { label: "sun, moon, sun, moon ..." },
          { label: "apple, apple, fish, apple, apple, fish ..." },
          { label: "cat, dog, cat, dog ..." },
          { label: "star, star, heart, heart, star, star ..." },
        ],
      },
      {
        type: "matching",
        title: "Match the Pattern to Its Description",
        instruction:
          "Draw a line to match each pattern to the correct description.",
        left: [
          "star, heart, star, heart ...",
          "star, star, heart, star, star, heart ...",
          "star, star, heart, heart, star, star ...",
          "star, heart, heart, star, heart, heart ...",
        ],
        right: [
          "ABB — one then two the same",
          "AABB — two then two",
          "AB — one of each",
          "AAB — two the same then one",
        ],
      },
      {
        type: "open-response",
        title: "Pattern Detective",
        instruction:
          "Use your pattern skills to solve these puzzles.",
        prompts: [
          {
            text: "I am thinking of a pattern. The repeating unit has 3 shapes. The first and third shapes are the same. What type of pattern could this be? Draw an example:",
            type: "box",
          },
          {
            text: "A skip counting pattern starts at 4 and the next number is 8. What could the rule be? What are the next 4 numbers?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Sam says the pattern 'star, heart, heart, star, heart, heart' is an AB pattern. Is Sam correct? Explain why or why not:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "True or False — Patterns",
        instruction:
          "Read each statement. Write 'True' or 'False' and explain your answer.",
        prompts: [
          {
            text: "An AB pattern always uses exactly 2 different shapes. True or false?",
            type: "lines",
            lines: 2,
          },
          {
            text: "When you count by 5s, every number ends in 0 or 5. True or false?",
            type: "lines",
            lines: 2,
          },
          {
            text: "The pattern 'circle, square, circle, square' has a repeating unit of 3. True or false?",
            type: "lines",
            lines: 2,
          },
          {
            text: "If you count by 2s starting from 1, you get 1, 3, 5, 7 ... True or false?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ─── Home Activities ───

      {
        type: "home-activity",
        title: "Home Activity: Patterns Everywhere",
        instruction:
          "Find and make repeating patterns at home!",
        suggestions: [
          "Find a pattern on clothing, tiles or a blanket. What is the repeating unit?",
          "Make a pattern using spoons and forks: spoon, fork, spoon, fork ...",
          "Clap a rhythm pattern: clap-clap-stomp, clap-clap-stomp ...",
          "Use coloured blocks or LEGO to build a 3-colour repeating pattern.",
          "Look for patterns in nature — leaves, petals, bark. Draw one you find.",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Skip Counting Fun",
        instruction:
          "Practise skip counting with things around the house!",
        suggestions: [
          "Count your socks by 2s. How many pairs do you have?",
          "Put out groups of 5 objects (e.g. grapes or blocks). Count them by 5s.",
          "Count by 10s while jumping or clapping. How high can you go?",
          "Line up coins or buttons in groups of 3. Skip count to find the total.",
          "With a grown-up, count backwards by 2s from 20 to 0.",
        ],
      },
    ],
    nextSteps: ["compare-order-measures"],
  },

  // ── WS 7: Compare & Order Measures (Measurement) ────────────
  {
    slug: "compare-order-measures",
    title: "Compare & Order Measures",
    strand: "Measurement",
    description:
      "Compare and order objects and events by length, mass, capacity and duration",
    lesson: {
      title: "Longer, Heavier, More — Comparing and Ordering",
      objective: "Compare and order everyday objects by length, mass and capacity using direct comparison and the language of measurement.",
      materials: [
        "3–4 household objects of different lengths — spoon, pencil, book, TV remote",
        "2 containers of different sizes — a cup and a jug or bowl",
        "Water or dry rice for comparing capacity",
        "A plastic bag and some books to compare mass by hand",
      ],
      intro: {
        title: "Which Is Longer?",
        script: "Hold up your pencil and this spoon. Which one do you think is longer? How can we check? We need to line them up at the SAME end — put both ends together here at the edge of the table. Now look at the other end. Which sticks out further? That one is longer!",
        action: "Hold up two pencils misaligned so the shorter one looks longer. Ask: which is longer? Let your child guess. Then say: let us check properly. Align them at one end. Now what do we see? This is why we always have to line them up at the same end. Then place three objects next to each other with a common baseline. Ask your child to order them from shortest to longest. Introduce the words: longer, shorter, longest, shortest.",
      },
      mainActivity: {
        title: "Heavier and More",
        script: "Can you tell just by looking which bag is heavier? Let\'s feel it! Hold one in each hand — which pulls your hand down more? That one is heavier. Now for the containers — which one do you think holds more water? Let\'s pour the smaller one into the bigger one and see if it fits!",
        action: "First do mass: put different numbers of books in two bags and let your child hold one in each hand like a balance. Then do capacity: fill a small cup to the top, then pour it into a larger container and ask \'which holds more?\'. Use words: heavier, lighter, more, less, holds more, holds less.",
      },
      wrapUp: {
        title: "Ordering Three Things",
        script: "Let\'s grab three things from around the house and put them in order. Can you find the heaviest? The lightest? Now do it for length — line them up and order them. How do you know which comes first?",
        action: "Let your child choose 3 objects and order them by length, then by mass. Ask them to use the comparison words: \'This one is the longest, this is shorter, and this is the shortest.\'",
      },
      parentTip: "Ordering measurements is harder than comparing two objects because children must hold multiple comparisons in mind at once. Start with just 3 objects, then work up to 5. If your child gets confused, physically line them up side-by-side — visual ordering before abstract ordering every time.",
      extension: "Order the kitchen! Find 5 containers of different heights (jars, bottles, mugs). Ask your child to arrange them from shortest to tallest, then tallest to shortest. Photograph each arrangement. Now guess which holds the most water — test with a measuring jug to check!",
      resources: [
        { title: "Khan Academy – Measurement and Data", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-measurement", description: "Year 1 measurement concepts including comparing and ordering." },
        { title: "Maths is Fun – Comparing", url: "https://www.mathsisfun.com/measure/comparing.html", description: "Visual comparison and ordering of measurements for young learners." },
        { title: "NRICH – Measuring Activities", url: "https://nrich.maths.org/early-years", description: "Hands-on measurement and comparison investigations." },
      ],
    },
    activities: [
      // ── EASY: Compare Length (longer/shorter) with 2 objects ─────

      // 1
      {
        type: "circle-correct",
        title: "Which Is Longer?",
        instruction: "Look at each pair. Circle the one that is longer.",
        questions: [
          {
            prompt: "Which is longer?",
            options: ["pencil", "spoon"],
            optionIcons: ["pencil", "spoon"],
          },
          {
            prompt: "Which is longer?",
            options: ["book", "feather"],
            optionIcons: ["book", "feather"],
          },
          {
            prompt: "Which is longer?",
            options: ["banana", "spoon"],
            optionIcons: ["banana", "spoon"],
          },
        ],
      },

      // 2
      {
        type: "circle-correct",
        title: "Which Is Shorter?",
        instruction: "Look at each pair. Circle the one that is shorter.",
        questions: [
          {
            prompt: "Which is shorter?",
            options: ["pencil", "book"],
            optionIcons: ["pencil", "book"],
          },
          {
            prompt: "Which is shorter?",
            options: ["spoon", "bed"],
          },
          {
            prompt: "Which is shorter?",
            options: ["feather", "pencil"],
            optionIcons: ["feather", "pencil"],
          },
        ],
      },

      // 3
      {
        type: "circle-correct",
        title: "Longer or Shorter?",
        instruction: "Circle the correct answer for each question.",
        questions: [
          {
            prompt: "A pencil is ___ than a feather.",
            options: ["longer", "shorter"],
          },
          {
            prompt: "A spoon is ___ than a bed.",
            options: ["longer", "shorter"],
          },
          {
            prompt: "A banana is ___ than a book.",
            options: ["longer", "shorter"],
          },
          {
            prompt: "A car is ___ than a cup.",
            options: ["longer", "shorter"],
          },
        ],
      },

      // 4
      {
        type: "matching",
        title: "Match Longer and Shorter",
        instruction:
          "Draw a line to match each object to whether it is longer or shorter than your arm.",
        left: ["pencil", "bed", "spoon", "car"],
        right: ["shorter than my arm", "longer than my arm", "shorter than my arm", "longer than my arm"],
      },

      // 5
      {
        type: "circle-correct",
        title: "Longer or Shorter? (Round 2)",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Which is longer: a bus or a car?",
            options: ["bus", "car"],
          },
          {
            prompt: "Which is shorter: a pencil or a crayon?",
            options: ["pencil", "crayon"],
          },
          {
            prompt: "Which is longer: a snake or a worm?",
            options: ["snake", "worm"],
          },
          {
            prompt: "Which is shorter: your finger or your leg?",
            options: ["finger", "leg"],
          },
        ],
      },

      // 6
      {
        type: "sorting",
        title: "Sort: Longer or Shorter Than a Ruler?",
        instruction:
          "Sort these objects. Is each one longer or shorter than a ruler?",
        columns: ["shorter than a ruler", "longer than a ruler"],
        items: [
          { label: "feather", icon: "feather" },
          { label: "bed", icon: "bed" },
          { label: "spoon", icon: "spoon" },
          { label: "car", icon: "car" },
        ],
      },

      // 7
      {
        type: "open-response",
        title: "Draw Something Longer",
        instruction:
          "Draw or write the name of something that is longer than each object.",
        prompts: [
          { text: "Draw something longer than a pencil.", type: "box" },
          { text: "Draw something longer than your hand.", type: "box" },
          { text: "Draw something longer than a spoon.", type: "box" },
        ],
      },

      // ── EASY-MEDIUM: Order 3 items by length ────────────────────

      // 8
      {
        type: "sequence",
        title: "Shortest to Longest",
        instruction:
          "Put these items in order from shortest to longest. Write 1, 2, 3.",
        items: [
          { label: "feather", icon: "feather" },
          { label: "pencil", icon: "pencil" },
          { label: "book", icon: "book" },
        ],
      },

      // 9
      {
        type: "sequence",
        title: "Shortest to Longest (Round 2)",
        instruction:
          "Put these items in order from shortest to longest. Write 1, 2, 3.",
        items: [
          { label: "spoon", icon: "spoon" },
          { label: "banana", icon: "banana" },
          { label: "bed", icon: "bed" },
        ],
      },

      // 10
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

      // 11
      {
        type: "sorting",
        title: "Order by Length (Round 2)",
        instruction:
          "Sort these items from shortest to longest. Write 1 (shortest) to 4 (longest).",
        columns: ["shortest", "longest"],
        items: [
          { label: "cup", icon: "cup" },
          { label: "banana", icon: "banana" },
          { label: "car", icon: "car" },
          { label: "ball", icon: "ball" },
        ],
      },

      // 12
      {
        type: "circle-correct",
        title: "Pick the Shortest",
        instruction: "Circle the shortest item in each group.",
        questions: [
          {
            prompt: "Which is the shortest?",
            options: ["pencil", "feather", "book"],
            optionIcons: ["pencil", "feather", "book"],
          },
          {
            prompt: "Which is the shortest?",
            options: ["spoon", "banana", "bed"],
            optionIcons: ["spoon", "banana", "bed"],
          },
          {
            prompt: "Which is the shortest?",
            options: ["ball", "car", "cup"],
            optionIcons: ["ball", "car", "cup"],
          },
        ],
      },

      // 13
      {
        type: "circle-correct",
        title: "Pick the Longest",
        instruction: "Circle the longest item in each group.",
        questions: [
          {
            prompt: "Which is the longest?",
            options: ["spoon", "pencil", "book"],
            optionIcons: ["spoon", "pencil", "book"],
          },
          {
            prompt: "Which is the longest?",
            options: ["feather", "banana", "bed"],
            optionIcons: ["feather", "banana", "bed"],
          },
          {
            prompt: "Which is the longest?",
            options: ["cup", "ball", "car"],
            optionIcons: ["cup", "ball", "car"],
          },
        ],
      },

      // 14
      {
        type: "open-response",
        title: "Order 3 Things by Length",
        instruction:
          "Think of 3 things in your classroom. Write them in order from shortest to longest.",
        prompts: [
          { text: "1. Shortest:", type: "lines", lines: 1 },
          { text: "2. Middle:", type: "lines", lines: 1 },
          { text: "3. Longest:", type: "lines", lines: 1 },
        ],
      },

      // ── MEDIUM: Compare mass (heavier/lighter) ──────────────────

      // 15
      {
        type: "circle-correct",
        title: "Which Is Heavier?",
        instruction: "Circle the one that is heavier.",
        questions: [
          {
            prompt: "Which is heavier?",
            options: ["rock", "feather"],
            optionIcons: ["rock", "feather"],
          },
          {
            prompt: "Which is heavier?",
            options: ["book", "pencil"],
            optionIcons: ["book", "pencil"],
          },
          {
            prompt: "Which is heavier?",
            options: ["ball", "teddy"],
            optionIcons: ["ball", "teddy"],
          },
          {
            prompt: "Which is heavier?",
            options: ["cup", "car"],
            optionIcons: ["cup", "car"],
          },
        ],
      },

      // 16
      {
        type: "circle-correct",
        title: "Which Is Lighter?",
        instruction: "Circle the one that is lighter.",
        questions: [
          {
            prompt: "Which is lighter?",
            options: ["feather", "rock"],
            optionIcons: ["feather", "rock"],
          },
          {
            prompt: "Which is lighter?",
            options: ["pencil", "book"],
            optionIcons: ["pencil", "book"],
          },
          {
            prompt: "Which is lighter?",
            options: ["spoon", "bucket"],
            optionIcons: ["spoon", "bucket"],
          },
          {
            prompt: "Which is lighter?",
            options: ["ball", "house"],
            optionIcons: ["ball", "house"],
          },
        ],
      },

      // 17
      {
        type: "circle-correct",
        title: "Heavier or Lighter?",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "A rock is ___ than a feather.",
            options: ["heavier", "lighter"],
          },
          {
            prompt: "A pencil is ___ than a car.",
            options: ["heavier", "lighter"],
          },
          {
            prompt: "A book is ___ than a spoon.",
            options: ["heavier", "lighter"],
          },
          {
            prompt: "A teddy is ___ than a house.",
            options: ["heavier", "lighter"],
          },
        ],
      },

      // 18
      {
        type: "matching",
        title: "Match Heavier and Lighter",
        instruction:
          "Draw a line to match each object to whether it is heavier or lighter than a book.",
        left: ["feather", "rock", "pencil", "watermelon"],
        right: [
          "lighter than a book",
          "heavier than a book",
          "lighter than a book",
          "heavier than a book",
        ],
      },

      // 19
      {
        type: "sorting",
        title: "Sort: Heavier or Lighter Than an Apple?",
        instruction:
          "Sort these objects. Is each one heavier or lighter than an apple?",
        columns: ["lighter than an apple", "heavier than an apple"],
        items: [
          { label: "feather", icon: "feather" },
          { label: "book", icon: "book" },
          { label: "pencil", icon: "pencil" },
          { label: "watermelon", icon: "watermelon" },
          { label: "spoon", icon: "spoon" },
        ],
      },

      // 20
      {
        type: "circle-correct",
        title: "Heaviest in the Group",
        instruction: "Circle the heaviest object in each group.",
        questions: [
          {
            prompt: "Which is heaviest?",
            options: ["feather", "book", "pencil"],
            optionIcons: ["feather", "book", "pencil"],
          },
          {
            prompt: "Which is heaviest?",
            options: ["cup", "bucket", "spoon"],
            optionIcons: ["cup", "bucket", "spoon"],
          },
          {
            prompt: "Which is heaviest?",
            options: ["rock", "feather", "ball"],
            optionIcons: ["rock", "feather", "ball"],
          },
        ],
      },

      // 21
      {
        type: "circle-correct",
        title: "Lightest in the Group",
        instruction: "Circle the lightest object in each group.",
        questions: [
          {
            prompt: "Which is lightest?",
            options: ["rock", "feather", "apple"],
            optionIcons: ["rock", "feather", "apple"],
          },
          {
            prompt: "Which is lightest?",
            options: ["book", "pencil", "car"],
            optionIcons: ["book", "pencil", "car"],
          },
          {
            prompt: "Which is lightest?",
            options: ["teddy", "house", "ball"],
            optionIcons: ["teddy", "house", "ball"],
          },
        ],
      },

      // 22
      {
        type: "open-response",
        title: "Draw Something Heavier",
        instruction:
          "Draw or write the name of something that is heavier than each object.",
        prompts: [
          { text: "Draw something heavier than a pencil.", type: "box" },
          { text: "Draw something heavier than a cup.", type: "box" },
          { text: "Draw something heavier than a ball.", type: "box" },
        ],
      },

      // ── MEDIUM: Order items by mass ─────────────────────────────

      // 23
      {
        type: "sequence",
        title: "Lightest to Heaviest",
        instruction:
          "Put these items in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "feather", icon: "feather" },
          { label: "apple", icon: "apple" },
          { label: "rock", icon: "rock" },
        ],
      },

      // 24
      {
        type: "sequence",
        title: "Lightest to Heaviest (Round 2)",
        instruction:
          "Put these items in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "pencil", icon: "pencil" },
          { label: "book", icon: "book" },
          { label: "watermelon", icon: "watermelon" },
        ],
      },

      // 25
      {
        type: "sorting",
        title: "Order by Mass",
        instruction:
          "Sort these items from lightest to heaviest. Write 1 (lightest) to 4 (heaviest).",
        columns: ["lightest", "heaviest"],
        items: [
          { label: "feather", icon: "feather" },
          { label: "pencil", icon: "pencil" },
          { label: "book", icon: "book" },
          { label: "rock", icon: "rock" },
        ],
      },

      // 26
      {
        type: "sorting",
        title: "Order by Mass (Round 2)",
        instruction:
          "Sort these items from lightest to heaviest. Write 1 (lightest) to 4 (heaviest).",
        columns: ["lightest", "heaviest"],
        items: [
          { label: "spoon", icon: "spoon" },
          { label: "apple", icon: "apple" },
          { label: "teddy", icon: "teddy" },
          { label: "watermelon", icon: "watermelon" },
        ],
      },

      // 27
      {
        type: "sorting",
        title: "Order by Mass (Round 3)",
        instruction:
          "Sort these items from lightest to heaviest. Write 1 (lightest) to 5 (heaviest).",
        columns: ["lightest", "heaviest"],
        items: [
          { label: "feather", icon: "feather" },
          { label: "grape", icon: "grape" },
          { label: "apple", icon: "apple" },
          { label: "book", icon: "book" },
          { label: "bucket", icon: "bucket" },
        ],
      },

      // 28
      {
        type: "open-response",
        title: "Order 3 Things by Mass",
        instruction:
          "Think of 3 things in your kitchen. Write them in order from lightest to heaviest.",
        prompts: [
          { text: "1. Lightest:", type: "lines", lines: 1 },
          { text: "2. Middle:", type: "lines", lines: 1 },
          { text: "3. Heaviest:", type: "lines", lines: 1 },
        ],
      },

      // ── MEDIUM: Compare capacity (holds more/less) ──────────────

      // 29
      {
        type: "circle-correct",
        title: "Which Holds More?",
        instruction: "Circle the container that holds more water.",
        questions: [
          {
            prompt: "Which holds more water?",
            options: ["cup", "bucket"],
            optionIcons: ["cup", "bucket"],
          },
          {
            prompt: "Which holds more water?",
            options: ["spoon", "bottle"],
            optionIcons: ["spoon", "bottle"],
          },
          {
            prompt: "Which holds more water?",
            options: ["cup", "bottle"],
            optionIcons: ["cup", "bottle"],
          },
          {
            prompt: "Which holds more?",
            options: ["bucket", "cup"],
            optionIcons: ["bucket", "cup"],
          },
        ],
      },

      // 30
      {
        type: "circle-correct",
        title: "Which Holds Less?",
        instruction: "Circle the container that holds less.",
        questions: [
          {
            prompt: "Which holds less?",
            options: ["spoon", "bucket"],
            optionIcons: ["spoon", "bucket"],
          },
          {
            prompt: "Which holds less?",
            options: ["bottle", "cup"],
            optionIcons: ["bottle", "cup"],
          },
          {
            prompt: "Which holds less?",
            options: ["cup", "bucket"],
            optionIcons: ["cup", "bucket"],
          },
        ],
      },

      // 31
      {
        type: "circle-correct",
        title: "Holds More or Less?",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "A bucket holds ___ than a cup.",
            options: ["more", "less"],
          },
          {
            prompt: "A spoon holds ___ than a bottle.",
            options: ["more", "less"],
          },
          {
            prompt: "A cup holds ___ than a spoon.",
            options: ["more", "less"],
          },
          {
            prompt: "A bottle holds ___ than a bucket.",
            options: ["more", "less"],
          },
        ],
      },

      // 32
      {
        type: "matching",
        title: "Match Holds More or Less",
        instruction:
          "Draw a line to match each container to whether it holds more or less than a cup.",
        left: ["spoon", "bucket", "bottle", "teaspoon"],
        right: [
          "holds less than a cup",
          "holds more than a cup",
          "holds more than a cup",
          "holds less than a cup",
        ],
      },

      // 33
      {
        type: "sorting",
        title: "Sort: Holds More or Less Than a Bottle?",
        instruction:
          "Sort these containers. Does each hold more or less than a bottle?",
        columns: ["holds less than a bottle", "holds more than a bottle"],
        items: [
          { label: "spoon", icon: "spoon" },
          { label: "bucket", icon: "bucket" },
          { label: "cup", icon: "cup" },
        ],
      },

      // 34
      {
        type: "circle-correct",
        title: "Which Holds the Most?",
        instruction: "Circle the container that holds the most.",
        questions: [
          {
            prompt: "Which holds the most?",
            options: ["cup", "bucket", "spoon"],
            optionIcons: ["cup", "bucket", "spoon"],
          },
          {
            prompt: "Which holds the most?",
            options: ["bottle", "cup", "spoon"],
            optionIcons: ["bottle", "cup", "spoon"],
          },
          {
            prompt: "Which holds the most?",
            options: ["spoon", "bucket", "bottle"],
            optionIcons: ["spoon", "bucket", "bottle"],
          },
        ],
      },

      // 35
      {
        type: "circle-correct",
        title: "Which Holds the Least?",
        instruction: "Circle the container that holds the least.",
        questions: [
          {
            prompt: "Which holds the least?",
            options: ["cup", "bucket", "spoon"],
            optionIcons: ["cup", "bucket", "spoon"],
          },
          {
            prompt: "Which holds the least?",
            options: ["bottle", "cup", "bucket"],
            optionIcons: ["bottle", "cup", "bucket"],
          },
          {
            prompt: "Which holds the least?",
            options: ["spoon", "bottle", "cup"],
            optionIcons: ["spoon", "bottle", "cup"],
          },
        ],
      },

      // 36
      {
        type: "open-response",
        title: "Draw a Container",
        instruction:
          "Draw or write the name of a container that matches the description.",
        prompts: [
          { text: "Draw a container that holds MORE than a cup.", type: "box" },
          { text: "Draw a container that holds LESS than a bucket.", type: "box" },
          { text: "Draw the biggest container you can think of.", type: "box" },
        ],
      },

      // ── MEDIUM: Order containers by capacity ────────────────────

      // 37
      {
        type: "sequence",
        title: "Least to Most",
        instruction:
          "Put these containers in order from holds least to holds most. Write 1, 2, 3.",
        items: [
          { label: "spoon", icon: "spoon" },
          { label: "cup", icon: "cup" },
          { label: "bucket", icon: "bucket" },
        ],
      },

      // 38
      {
        type: "sequence",
        title: "Least to Most (Round 2)",
        instruction:
          "Put these containers in order from holds least to holds most. Write 1, 2, 3.",
        items: [
          { label: "spoon", icon: "spoon" },
          { label: "bottle", icon: "bottle" },
          { label: "bucket", icon: "bucket" },
        ],
      },

      // 39
      {
        type: "sorting",
        title: "Order by Capacity",
        instruction:
          "Sort these containers from holds least to holds most. Write 1 (least) to 4 (most).",
        columns: ["holds least", "holds most"],
        items: [
          { label: "teaspoon", icon: "spoon" },
          { label: "cup", icon: "cup" },
          { label: "bucket", icon: "bucket" },
          { label: "bottle", icon: "bottle" },
        ],
      },

      // 40
      {
        type: "sorting",
        title: "Order by Capacity (Round 2)",
        instruction:
          "Sort these containers from holds least to holds most. Write 1 (least) to 4 (most).",
        columns: ["holds least", "holds most"],
        items: [
          { label: "spoon", icon: "spoon" },
          { label: "cup", icon: "cup" },
          { label: "bottle", icon: "bottle" },
          { label: "bucket", icon: "bucket" },
        ],
      },

      // 41
      {
        type: "open-response",
        title: "Order 3 Containers",
        instruction:
          "Think of 3 containers at home. Write them in order from holds least to holds most.",
        prompts: [
          { text: "1. Holds least:", type: "lines", lines: 1 },
          { text: "2. Middle:", type: "lines", lines: 1 },
          { text: "3. Holds most:", type: "lines", lines: 1 },
        ],
      },

      // ── MEDIUM-HARD: Compare and order duration of events ───────

      // 42
      {
        type: "circle-correct",
        title: "Which Takes Longer?",
        instruction: "Circle the event that takes longer.",
        questions: [
          {
            prompt: "Which takes longer?",
            options: ["brushing your teeth", "eating dinner"],
          },
          {
            prompt: "Which takes longer?",
            options: ["clapping once", "singing a song"],
          },
          {
            prompt: "Which takes longer?",
            options: ["a school day", "a lunch break"],
          },
          {
            prompt: "Which takes longer?",
            options: ["blinking", "having a bath"],
          },
        ],
      },

      // 43
      {
        type: "circle-correct",
        title: "Which Is Quicker?",
        instruction: "Circle the event that is quicker.",
        questions: [
          {
            prompt: "Which is quicker?",
            options: ["clapping your hands", "eating breakfast"],
          },
          {
            prompt: "Which is quicker?",
            options: ["brushing your hair", "sleeping at night"],
          },
          {
            prompt: "Which is quicker?",
            options: ["blinking", "reading a book"],
          },
          {
            prompt: "Which is quicker?",
            options: ["tying your shoe", "watching a movie"],
          },
        ],
      },

      // 44
      {
        type: "circle-correct",
        title: "Longer or Shorter Time?",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Brushing your teeth takes a ___ time than sleeping.",
            options: ["longer", "shorter"],
          },
          {
            prompt: "A school day takes a ___ time than eating a snack.",
            options: ["longer", "shorter"],
          },
          {
            prompt: "Clapping once takes a ___ time than reading a book.",
            options: ["longer", "shorter"],
          },
          {
            prompt: "Having a bath takes a ___ time than blinking.",
            options: ["longer", "shorter"],
          },
        ],
      },

      // 45
      {
        type: "matching",
        title: "Match Events to Duration",
        instruction:
          "Draw a line to match each event to about how long it takes.",
        left: ["Brushing teeth", "Sleeping at night", "Clapping once", "Watching a movie"],
        right: ["a moment", "about 2 minutes", "about 8 hours", "about 2 hours"],
      },

      // 46
      {
        type: "matching",
        title: "Match Events to Duration (Round 2)",
        instruction:
          "Draw a line to match each event to about how long it takes.",
        left: ["Eating lunch", "A school day", "Blinking", "Having a bath"],
        right: ["about 20 minutes", "about 6 hours", "a moment", "about 15 minutes"],
      },

      // 47
      {
        type: "sequence",
        title: "Quickest to Longest",
        instruction:
          "Put these events in order from quickest to longest. Write 1, 2, 3.",
        items: [
          { label: "Blinking your eyes" },
          { label: "Eating lunch" },
          { label: "A school day" },
        ],
      },

      // 48
      {
        type: "sequence",
        title: "Quickest to Longest (Round 2)",
        instruction:
          "Put these events in order from quickest to longest. Write 1, 2, 3.",
        items: [
          { label: "Clapping once" },
          { label: "Brushing your teeth" },
          { label: "Sleeping at night" },
        ],
      },

      // 49
      {
        type: "sorting",
        title: "Order by Duration",
        instruction:
          "Put these events in order from quickest to longest. Write 1, 2, 3, 4.",
        columns: ["quickest", "longest"],
        items: [
          { label: "Blinking" },
          { label: "Tying your shoe" },
          { label: "Eating dinner" },
          { label: "A whole school day" },
        ],
      },

      // 50
      {
        type: "sorting",
        title: "Order by Duration (Round 2)",
        instruction:
          "Put these events in order from quickest to longest. Write 1, 2, 3, 4.",
        columns: ["quickest", "longest"],
        items: [
          { label: "Clapping once" },
          { label: "Singing a song" },
          { label: "Watching a movie" },
          { label: "A weekend" },
        ],
      },

      // 51
      {
        type: "sorting",
        title: "Sort: Quick or Slow Events",
        instruction:
          "Sort these events into quick (less than 1 minute) or slow (more than 1 minute).",
        columns: ["quick (under 1 minute)", "slow (over 1 minute)"],
        items: [
          { label: "Blinking" },
          { label: "Having a bath" },
          { label: "Clapping" },
          { label: "Reading a book" },
          { label: "Sneezing" },
        ],
      },

      // 52
      {
        type: "open-response",
        title: "Think About Time",
        instruction: "Write or draw your answers.",
        prompts: [
          {
            text: "Write something that takes a very short time (just a moment).",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write something that takes a long time (more than an hour).",
            type: "lines",
            lines: 1,
          },
          {
            text: "What takes longer: getting dressed or sleeping at night? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ── HARD: Mixed measurement comparisons ─────────────────────

      // 53
      {
        type: "circle-correct",
        title: "Mixed Comparisons: Length",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Which is the longest?",
            options: ["pencil", "car", "spoon"],
            optionIcons: ["pencil", "car", "spoon"],
          },
          {
            prompt: "Which is the shortest?",
            options: ["feather", "bed", "banana"],
            optionIcons: ["feather", "bed", "banana"],
          },
          {
            prompt: "Put in order from shortest to longest: spoon, book, car",
            options: ["spoon, book, car", "car, book, spoon", "book, spoon, car"],
          },
        ],
      },

      // 54
      {
        type: "circle-correct",
        title: "Mixed Comparisons: Mass",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Which is the heaviest?",
            options: ["feather", "watermelon", "pencil"],
            optionIcons: ["feather", "watermelon", "pencil"],
          },
          {
            prompt: "Which is the lightest?",
            options: ["rock", "book", "feather"],
            optionIcons: ["rock", "book", "feather"],
          },
          {
            prompt: "Put in order from lightest to heaviest: apple, feather, book",
            options: ["feather, apple, book", "book, apple, feather", "apple, feather, book"],
          },
        ],
      },

      // 55
      {
        type: "circle-correct",
        title: "Mixed Comparisons: Capacity",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Which holds the most?",
            options: ["spoon", "cup", "bucket"],
            optionIcons: ["spoon", "cup", "bucket"],
          },
          {
            prompt: "Which holds the least?",
            options: ["bottle", "bucket", "spoon"],
            optionIcons: ["bottle", "bucket", "spoon"],
          },
          {
            prompt: "Put in order from least to most: bucket, spoon, cup",
            options: ["spoon, cup, bucket", "bucket, cup, spoon", "cup, spoon, bucket"],
          },
        ],
      },

      // 56
      {
        type: "circle-correct",
        title: "Mixed Comparisons: Duration",
        instruction: "Circle the correct answer.",
        questions: [
          {
            prompt: "Which takes the longest?",
            options: ["blinking", "a school day", "brushing teeth"],
          },
          {
            prompt: "Which is the quickest?",
            options: ["sleeping", "clapping once", "eating lunch"],
          },
          {
            prompt: "Put in order from quickest to longest: eating lunch, blinking, a school day",
            options: [
              "blinking, eating lunch, a school day",
              "a school day, eating lunch, blinking",
              "eating lunch, blinking, a school day",
            ],
          },
        ],
      },

      // 57
      {
        type: "matching",
        title: "Match the Measurement Word",
        instruction:
          "Draw a line to match each question to the correct measurement word.",
        left: [
          "How tall is the tree?",
          "How heavy is the rock?",
          "How much water fits in the cup?",
          "How long does it take to brush teeth?",
        ],
        right: ["length", "mass", "capacity", "duration"],
      },

      // 58
      {
        type: "sorting",
        title: "Sort by Measurement Type",
        instruction:
          "Sort these questions. Is each about length, mass, capacity or duration?",
        columns: ["length", "mass", "capacity", "duration"],
        items: [
          { label: "Which is taller?" },
          { label: "Which is heavier?" },
          { label: "Which holds more?" },
          { label: "Which takes longer?" },
        ],
      },

      // 59
      {
        type: "matching",
        title: "Match Comparisons to Answers",
        instruction: "Draw a line to match each comparison to the answer.",
        left: [
          "Which is longer: a pencil or a car?",
          "Which is heavier: a feather or a rock?",
          "Which holds more: a spoon or a bucket?",
          "Which takes longer: blinking or sleeping?",
        ],
        right: ["car", "rock", "bucket", "sleeping"],
      },

      // 60
      {
        type: "sorting",
        title: "Mixed Sort: Biggest or Smallest?",
        instruction:
          "Sort these into the correct group based on the question.",
        columns: ["longest things", "heaviest things"],
        items: [
          { label: "car", icon: "car" },
          { label: "watermelon", icon: "watermelon" },
          { label: "bed", icon: "bed" },
          { label: "rock", icon: "rock" },
        ],
      },

      // ── CHALLENGE: Reasoning and real-world comparisons ─────────

      // 61
      {
        type: "open-response",
        title: "Explain Your Thinking: Length",
        instruction:
          "Answer each question. Explain your thinking in a sentence.",
        prompts: [
          {
            text: "Mia says a pencil is longer than a ruler. Is she correct? Why or why not?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Jack says his bed is shorter than his shoe. Is he correct? Why or why not?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Can you name something that is longer than your classroom?",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // 62
      {
        type: "open-response",
        title: "Explain Your Thinking: Mass",
        instruction:
          "Answer each question. Explain your thinking in a sentence.",
        prompts: [
          {
            text: "Sam says a feather is heavier than a book. Is he correct? Why or why not?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Lilly says a watermelon is lighter than a grape. Is she correct? Why or why not?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Name two things that are about the same mass (weight).",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // 63
      {
        type: "open-response",
        title: "Explain Your Thinking: Capacity",
        instruction:
          "Answer each question. Explain your thinking in a sentence.",
        prompts: [
          {
            text: "Tom says a spoon holds more water than a bucket. Is he correct? Why or why not?",
            type: "lines",
            lines: 2,
          },
          {
            text: "If you wanted to fill a swimming pool, would you use a cup or a bucket? Why?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Name something at home that holds a lot of water.",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // 64
      {
        type: "open-response",
        title: "Explain Your Thinking: Duration",
        instruction:
          "Answer each question. Explain your thinking in a sentence.",
        prompts: [
          {
            text: "Ava says brushing teeth takes longer than sleeping. Is she correct? Why or why not?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Does it take longer to walk to school or fly to another country? Why?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Name something you do every day that takes a short time.",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // 65
      {
        type: "open-response",
        title: "Real-World Challenge",
        instruction:
          "Think carefully and write or draw your answers.",
        prompts: [
          {
            text: "You have a pencil, a book and a bed. Put them in order from shortest to longest.",
            type: "lines",
            lines: 1,
          },
          {
            text: "You have a feather, an apple and a rock. Put them in order from lightest to heaviest.",
            type: "lines",
            lines: 1,
          },
          {
            text: "You have a spoon, a cup and a bucket. Put them in order from holds least to holds most.",
            type: "lines",
            lines: 1,
          },
          {
            text: "You do three things: blink, eat lunch, sleep at night. Put them in order from quickest to longest.",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // 66
      {
        type: "circle-correct",
        title: "Tricky Comparisons",
        instruction: "Think carefully! Circle the correct answer.",
        questions: [
          {
            prompt: "A big feather is ___ than a small rock.",
            options: ["heavier", "lighter"],
          },
          {
            prompt: "A tall cup holds ___ water than a short bucket.",
            options: ["more", "less"],
          },
          {
            prompt: "A long nap takes a ___ time than a whole school day.",
            options: ["longer", "shorter"],
          },
          {
            prompt: "Your arm is ___ than a bus.",
            options: ["longer", "shorter"],
          },
        ],
      },

      // 67
      {
        type: "open-response",
        title: "Measurement Detective",
        instruction:
          "Be a measurement detective! Write your answers.",
        prompts: [
          {
            text: "Name 3 things in your house that are longer than a book.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Name 3 things in your house that are heavier than a cup.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Name 2 containers that hold more than a glass of water.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Name 2 things you do that take less than 1 minute.",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // ── HOME ACTIVITIES ─────────────────────────────────────────

      // 68
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
          "Find the longest thing in your bedroom. Find the shortest thing too!",
        ],
      },

      // 69
      {
        type: "home-activity",
        title: "Home Activity: Kitchen Measurement Fun",
        instruction:
          "With a grown-up, explore measurement in the kitchen!",
        suggestions: [
          "Pick up a banana and an apple — which is heavier?",
          "Find 3 containers and put them in order from holds least to holds most.",
          "Which is longer: a fork or a spoon? Check by putting them side by side.",
          "What takes longer: making toast or boiling the kettle? Time them together!",
          "Fill a cup and a bowl with water — which holds more?",
        ],
      },
    ],
    nextSteps: ["informal-units-length"],
  },

  // ── WS 8: Informal Units — Length (Measurement) ─────────────
  {
    slug: "informal-units-length",
    title: "Measuring with Informal Units",
    strand: "Measurement",
    description:
      "Measure the length of shapes and objects using uniform informal units",
    lesson: {
      title: "How Long Is It? Measuring with Our Own Units",
      objective: "Measure the length of objects using a repeated informal unit (hand spans, blocks, paperclips), recording results as a number.",
      materials: [
        "10–15 paperclips or blocks of the same size",
        "A pencil",
        "A strip of paper or piece of string",
        "3–4 household objects to measure — book, shoe, water bottle, fork",
      ],
      intro: {
        title: "The Broken Ruler Problem",
        script: "Imagine our ruler broke! We can\'t use it. But we need to know how long things are. What could we use instead? What if we used paperclips? Let\'s try — I\'ll lay them along this pencil without gaps or overlaps. One, two, three, four... four paperclips long! The trick is: no gaps, no overlaps, and always use the SAME size unit.",
        action: "Model measuring a pencil with paperclips. Deliberately make a mistake first (leave a gap, then overlap) to show why those rules matter. Then measure correctly and record: \'The pencil is 4 paperclips long.\'",
      },
      mainActivity: {
        title: "Measure and Record",
        script: "Your turn! Measure this book with paperclips. Lay them along the edge — line them up carefully. Count them. How many paperclips long is it? Write it down. Now measure your shoe. Do you think it will need more or fewer paperclips than the book? Let\'s find out!",
        action: "Guide your child to measure 3–4 objects, recording each as \'___ paperclips long\'. After each measurement, ask: \'Was that more or fewer than you expected?\' Then order the objects from shortest to longest based on the numbers.",
      },
      wrapUp: {
        title: "Same Object, Different Unit",
        script: "What if we used blocks instead of paperclips? Do you think the number will be the same, bigger, or smaller? Let\'s test it! Measure the same book with blocks. The number changed — but the book didn\'t! Why does the number change?",
        action: "Measure one object with two different informal units and compare the results. Guide your child to explain that bigger units give smaller numbers. This is a key insight in measurement.",
      },
      parentTip: "Informal units are crucial because they show children WHY standard units were invented — if everyone uses different-sized feet, measurements don't agree! Let this frustration arise naturally: measure the table in your child's handspans, then yours. 'Why did we get different numbers?' is the key question.",
      extension: "Measure the house with footsteps. Choose a start and end point (e.g., front door to kitchen). Measure it in your child's footsteps, then yours. Record both numbers. Discuss why they differ and what would happen if everyone in the world used their own feet as a unit.",
      resources: [
        { title: "Khan Academy – Measuring Length", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-measurement", description: "Year 1 length measurement with informal and formal units." },
        { title: "Maths is Fun – Length", url: "https://www.mathsisfun.com/measure/length.html", description: "Introduction to measuring length with informal units and rulers." },
        { title: "NRICH – Length and Measurement", url: "https://nrich.maths.org/early-years", description: "Investigative tasks exploring informal measurement of length." },
      ],
    },
    activities: [
      // ── EASY: Count informal units along objects ───────────────

      // 1
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
      // 2
      {
        type: "count-objects",
        title: "Count the Blocks",
        instruction:
          "Count the blocks placed along each object. Write the number.",
        rows: [
          { object: "pencil", count: 4 },
          { object: "cup", count: 3 },
          { object: "banana", count: 2 },
          { object: "book", count: 6 },
        ],
      },
      // 3
      {
        type: "count-objects",
        title: "Count the Paper Clips",
        instruction:
          "Count the paper clips along each object. Write the number of paper clips.",
        rows: [
          { object: "spoon", count: 5 },
          { object: "pencil", count: 7 },
          { object: "banana", count: 4 },
        ],
      },
      // 4
      {
        type: "count-objects",
        title: "How Many Blocks Long?",
        instruction:
          "Look at the blocks along each object. Write how many blocks long it is.",
        rows: [
          { object: "book", count: 8 },
          { object: "cup", count: 2 },
          { object: "spoon", count: 3 },
          { object: "pencil", count: 5 },
        ],
      },
      // 5
      {
        type: "count-objects",
        title: "Measure with Cubes",
        instruction:
          "Count the cubes along each object. Write the total.",
        rows: [
          { object: "banana", count: 3 },
          { object: "bottle", count: 6 },
          { object: "spoon", count: 2 },
        ],
      },
      // 6
      {
        type: "circle-correct",
        title: "How Many Hand Spans?",
        instruction: "Circle the correct number of hand spans for each object.",
        questions: [
          {
            prompt: "The pencil is ___ hand spans long",
            options: ["2", "3", "5"],
          },
          {
            prompt: "The book is ___ hand spans long",
            options: ["4", "5", "8"],
          },
          {
            prompt: "The spoon is ___ hand spans long",
            options: ["1", "2", "4"],
          },
        ],
      },
      // 7
      {
        type: "circle-correct",
        title: "How Many Blocks?",
        instruction: "Circle the correct number of blocks for each object.",
        questions: [
          {
            prompt: "The banana is ___ blocks long",
            options: ["2", "3", "6"],
          },
          {
            prompt: "The bottle is ___ blocks long",
            options: ["4", "6", "9"],
          },
          {
            prompt: "The cup is ___ blocks long",
            options: ["1", "3", "5"],
          },
          {
            prompt: "The book is ___ blocks long",
            options: ["5", "7", "10"],
          },
        ],
      },
      // 8
      {
        type: "circle-correct",
        title: "How Many Paper Clips?",
        instruction: "Circle the correct number of paper clips for each object.",
        questions: [
          {
            prompt: "The pencil is ___ paper clips long",
            options: ["4", "7", "10"],
          },
          {
            prompt: "The spoon is ___ paper clips long",
            options: ["3", "5", "8"],
          },
          {
            prompt: "The crayon is ___ paper clips long",
            options: ["2", "4", "6"],
          },
        ],
      },
      // 9
      {
        type: "matching",
        title: "Match the Object to Its Length",
        instruction:
          "Draw a line to match each object to how many blocks long it is.",
        left: ["spoon", "pencil", "book", "banana"],
        right: ["3 blocks", "5 blocks", "8 blocks", "4 blocks"],
      },
      // 10
      {
        type: "matching",
        title: "Match Objects to Hand Spans",
        instruction:
          "Draw a line to match each object to how many hand spans long it is.",
        left: ["cup", "bed", "table", "pencil"],
        right: ["1 hand span", "8 hand spans", "5 hand spans", "2 hand spans"],
      },

      // ── EASY-MEDIUM: Measure with paper clips, compare 2 measurements ──

      // 11
      {
        type: "count-objects",
        title: "Paper Clip Measuring",
        instruction:
          "Count the paper clips along each object. Write the total number.",
        rows: [
          { object: "pencil", count: 6 },
          { object: "book", count: 9 },
          { object: "cup", count: 3 },
          { object: "spoon", count: 5 },
        ],
      },
      // 12
      {
        type: "circle-correct",
        title: "Which Is Longer?",
        instruction:
          "Look at the measurements. Circle the object that is longer.",
        questions: [
          {
            prompt: "The pencil is 6 blocks long. The spoon is 3 blocks long. Which is longer?",
            options: ["pencil", "spoon"],
          },
          {
            prompt: "The book is 8 paper clips long. The cup is 4 paper clips long. Which is longer?",
            options: ["book", "cup"],
          },
          {
            prompt: "The banana is 5 blocks long. The bottle is 7 blocks long. Which is longer?",
            options: ["banana", "bottle"],
          },
        ],
      },
      // 13
      {
        type: "circle-correct",
        title: "Which Is Shorter?",
        instruction:
          "Look at the measurements. Circle the object that is shorter.",
        questions: [
          {
            prompt: "The spoon is 4 paper clips long. The pencil is 7 paper clips long. Which is shorter?",
            options: ["spoon", "pencil"],
          },
          {
            prompt: "The cup is 3 blocks long. The book is 9 blocks long. Which is shorter?",
            options: ["cup", "book"],
          },
          {
            prompt: "The banana is 5 hand spans long. The bottle is 2 hand spans long. Which is shorter?",
            options: ["banana", "bottle"],
          },
          {
            prompt: "The bed is 10 hand spans long. The table is 6 hand spans long. Which is shorter?",
            options: ["bed", "table"],
          },
        ],
      },
      // 14
      {
        type: "compare-groups",
        title: "Compare Lengths in Blocks",
        instruction:
          "Look at the blocks along each pair of objects. Circle the group with more blocks.",
        pairs: [
          {
            leftCount: 5,
            rightCount: 3,
            object: "cube",
            question: "Which object used more blocks?",
          },
          {
            leftCount: 4,
            rightCount: 7,
            object: "cube",
            question: "Which object used more blocks?",
          },
          {
            leftCount: 6,
            rightCount: 6,
            object: "cube",
            question: "Which object used more blocks — or are they the same?",
          },
        ],
      },
      // 15
      {
        type: "compare-groups",
        title: "Compare Lengths in Paper Clips",
        instruction:
          "Look at the paper clips along each pair of objects. Circle the longer measurement.",
        pairs: [
          {
            leftCount: 8,
            rightCount: 5,
            object: "pencil",
            question: "Which is longer?",
          },
          {
            leftCount: 3,
            rightCount: 6,
            object: "pencil",
            question: "Which is longer?",
          },
          {
            leftCount: 4,
            rightCount: 4,
            object: "pencil",
            question: "Which is longer — or are they the same?",
          },
          {
            leftCount: 7,
            rightCount: 2,
            object: "pencil",
            question: "Which is longer?",
          },
        ],
      },
      // 16
      {
        type: "matching",
        title: "Match Measurements to Objects",
        instruction:
          "Draw a line to match each object to its length in paper clips.",
        left: ["eraser", "pencil", "ruler", "crayon"],
        right: ["2 paper clips", "7 paper clips", "10 paper clips", "4 paper clips"],
      },
      // 17
      {
        type: "circle-correct",
        title: "Longer or Shorter?",
        instruction: "Read each sentence. Circle the correct answer.",
        questions: [
          {
            prompt: "A pencil is 6 blocks long. A spoon is 3 blocks long. The pencil is ___ than the spoon.",
            options: ["longer", "shorter", "the same"],
          },
          {
            prompt: "A book is 9 paper clips long. A banana is 9 paper clips long. The book is ___ the banana.",
            options: ["longer than", "shorter than", "the same as"],
          },
          {
            prompt: "A cup is 2 hand spans long. A bottle is 5 hand spans long. The cup is ___ than the bottle.",
            options: ["longer", "shorter", "the same"],
          },
        ],
      },
      // 18
      {
        type: "sorting",
        title: "Sort by Length",
        instruction:
          "Sort these objects into the correct column based on their measurement.",
        columns: ["Shorter than 5 blocks", "5 blocks or longer"],
        items: [
          { label: "Spoon (3 blocks)" },
          { label: "Pencil (7 blocks)" },
          { label: "Cup (2 blocks)" },
          { label: "Book (5 blocks)" },
          { label: "Banana (4 blocks)" },
          { label: "Bottle (6 blocks)" },
        ],
      },
      // 19
      {
        type: "open-response",
        title: "Draw and Count Blocks",
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
          {
            text: "How many blocks long is your foot? Draw and count.",
            type: "box",
          },
        ],
      },
      // 20
      {
        type: "open-response",
        title: "Measure with Paper Clips",
        instruction:
          "Use paper clips (or draw them) to measure each object. Write the number.",
        prompts: [
          {
            text: "How many paper clips long is a spoon?",
            type: "lines",
            lines: 1,
          },
          {
            text: "How many paper clips long is a crayon?",
            type: "lines",
            lines: 1,
          },
          {
            text: "How many paper clips long is your shoe?",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // ── MEDIUM: Measure and record using different informal units ──

      // 21
      {
        type: "open-response",
        title: "Measure the Same Object with Different Units",
        instruction:
          "Measure the same object with two different units. Write what you find.",
        prompts: [
          {
            text: "Measure your pencil with blocks. How many blocks long is it?",
            type: "lines",
            lines: 1,
          },
          {
            text: "Now measure the same pencil with paper clips. How many paper clips long is it?",
            type: "lines",
            lines: 1,
          },
          {
            text: "Why are the numbers different?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 22
      {
        type: "open-response",
        title: "Measure with Hand Spans",
        instruction:
          "Use your hand spans to measure each item. Write the number.",
        prompts: [
          {
            text: "How many hand spans long is your desk?",
            type: "lines",
            lines: 1,
          },
          {
            text: "How many hand spans long is a book?",
            type: "lines",
            lines: 1,
          },
          {
            text: "How many hand spans long is a towel?",
            type: "lines",
            lines: 1,
          },
          {
            text: "Which was the longest? Which was the shortest?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 23
      {
        type: "open-response",
        title: "Measure with Spoons",
        instruction:
          "Use spoons to measure each item. Lay the spoons end to end and count them.",
        prompts: [
          {
            text: "How many spoons long is a book?",
            type: "lines",
            lines: 1,
          },
          {
            text: "How many spoons long is a placemat?",
            type: "lines",
            lines: 1,
          },
          {
            text: "How many spoons long is a tea towel?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      // 24
      {
        type: "circle-correct",
        title: "Which Unit Would You Use?",
        instruction:
          "Circle the best informal unit to measure each object.",
        questions: [
          {
            prompt: "To measure the length of a table, use ___",
            options: ["paper clips", "hand spans", "pencils"],
          },
          {
            prompt: "To measure the length of a pencil, use ___",
            options: ["paper clips", "hand spans", "beds"],
          },
          {
            prompt: "To measure the length of a room, use ___",
            options: ["paper clips", "foot steps", "spoons"],
          },
          {
            prompt: "To measure the length of an eraser, use ___",
            options: ["paper clips", "hand spans", "foot steps"],
          },
        ],
      },
      // 25
      {
        type: "matching",
        title: "Match the Unit to the Object",
        instruction:
          "Draw a line from each object to the best informal unit to measure it.",
        left: ["classroom", "pencil case", "shoe", "whiteboard"],
        right: ["foot steps", "paper clips", "blocks", "hand spans"],
      },
      // 26
      {
        type: "count-objects",
        title: "Count the Pencils",
        instruction:
          "Count the pencils laid end to end along each object. Write the number.",
        rows: [
          { object: "book", count: 2 },
          { object: "bed", count: 8 },
          { object: "bottle", count: 3 },
        ],
      },
      // 27
      {
        type: "open-response",
        title: "Record Your Measurements",
        instruction:
          "Measure each object with blocks. Fill in the table.",
        prompts: [
          {
            text: "My shoe is ___ blocks long.",
            type: "lines",
            lines: 1,
          },
          {
            text: "My hand is ___ blocks long.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A banana is ___ blocks long.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A spoon is ___ blocks long.",
            type: "lines",
            lines: 1,
          },
        ],
      },
      // 28
      {
        type: "sorting",
        title: "Sort by Measurement",
        instruction:
          "Sort these objects into the correct column based on their paper clip measurement.",
        columns: ["Fewer than 6 paper clips", "6 or more paper clips"],
        items: [
          { label: "Eraser (3 paper clips)" },
          { label: "Book (9 paper clips)" },
          { label: "Pencil (7 paper clips)" },
          { label: "Crayon (4 paper clips)" },
          { label: "Spoon (5 paper clips)" },
          { label: "Ruler (10 paper clips)" },
        ],
      },
      // 29
      {
        type: "circle-correct",
        title: "Same Object, Different Units",
        instruction:
          "A pencil was measured with blocks and paper clips. Circle the correct answers.",
        questions: [
          {
            prompt: "A pencil is 4 blocks long and 7 paper clips long. Why are the numbers different?",
            options: [
              "The pencil changed size",
              "Paper clips are smaller than blocks",
              "Someone counted wrong",
            ],
          },
          {
            prompt: "If you measure a book with big blocks and small blocks, which gives a bigger number?",
            options: [
              "Big blocks",
              "Small blocks",
              "Both the same",
            ],
          },
          {
            prompt: "A table is 6 hand spans long. If you used spoons instead, would the number be bigger or smaller?",
            options: [
              "Bigger — spoons are shorter",
              "Smaller — spoons are longer",
              "The same",
            ],
          },
        ],
      },
      // 30
      {
        type: "open-response",
        title: "Two Ways to Measure",
        instruction:
          "Measure each object with two different units. Write your answers.",
        prompts: [
          {
            text: "Measure a book with hand spans: ___ hand spans. Now with paper clips: ___ paper clips.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Measure a shoe with blocks: ___ blocks. Now with spoons: ___ spoons.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which unit gave the bigger number each time? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ── MEDIUM: Estimate first, then measure ──────────────────────

      // 31
      {
        type: "open-response",
        title: "Guess and Check — Blocks",
        instruction:
          "First guess how many blocks long each object is. Then measure with blocks and write the real answer.",
        prompts: [
          {
            text: "Your pencil — Guess: ___ blocks. Measured: ___ blocks.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A spoon — Guess: ___ blocks. Measured: ___ blocks.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Your shoe — Guess: ___ blocks. Measured: ___ blocks.",
            type: "lines",
            lines: 1,
          },
        ],
      },
      // 32
      {
        type: "open-response",
        title: "Guess and Check — Paper Clips",
        instruction:
          "Estimate how many paper clips long each object is, then measure to check.",
        prompts: [
          {
            text: "A crayon — Guess: ___ paper clips. Measured: ___ paper clips.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A fork — Guess: ___ paper clips. Measured: ___ paper clips.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A book — Guess: ___ paper clips. Measured: ___ paper clips.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Were your guesses close? Which one was closest?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 33
      {
        type: "open-response",
        title: "Guess and Check — Hand Spans",
        instruction:
          "Estimate how many hand spans long each object is. Then measure and write the real answer.",
        prompts: [
          {
            text: "Your desk — Guess: ___ hand spans. Measured: ___ hand spans.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A cushion — Guess: ___ hand spans. Measured: ___ hand spans.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A towel — Guess: ___ hand spans. Measured: ___ hand spans.",
            type: "lines",
            lines: 1,
          },
        ],
      },
      // 34
      {
        type: "circle-correct",
        title: "Best Estimate",
        instruction:
          "Circle the best estimate for each measurement.",
        questions: [
          {
            prompt: "About how many paper clips long is a pencil?",
            options: ["2", "7", "20"],
          },
          {
            prompt: "About how many hand spans long is a table?",
            options: ["2", "6", "50"],
          },
          {
            prompt: "About how many blocks long is a spoon?",
            options: ["3", "10", "25"],
          },
          {
            prompt: "About how many foot steps long is a room?",
            options: ["3", "12", "100"],
          },
        ],
      },
      // 35
      {
        type: "circle-correct",
        title: "Is the Estimate Reasonable?",
        instruction:
          "Read each estimate. Circle whether it is reasonable or not.",
        questions: [
          {
            prompt: "Sam says his pencil is 50 blocks long. Is this reasonable?",
            options: ["Yes", "No — that is too many"],
          },
          {
            prompt: "Mia says the table is 6 hand spans long. Is this reasonable?",
            options: ["Yes", "No — that is too few"],
          },
          {
            prompt: "Jack says his shoe is 1 paper clip long. Is this reasonable?",
            options: ["Yes", "No — that is too few"],
          },
          {
            prompt: "Lily says a crayon is 4 blocks long. Is this reasonable?",
            options: ["Yes", "No — that is too many"],
          },
        ],
      },
      // 36
      {
        type: "open-response",
        title: "Estimate, Measure, Compare",
        instruction:
          "Estimate first, then measure. Write if your estimate was too many, too few, or just right.",
        prompts: [
          {
            text: "A banana — Estimate: ___. Measured: ___. My estimate was ___.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A cup — Estimate: ___. Measured: ___. My estimate was ___.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A book — Estimate: ___. Measured: ___. My estimate was ___.",
            type: "lines",
            lines: 1,
          },
        ],
      },
      // 37
      {
        type: "open-response",
        title: "Estimate Then Measure — Foot Steps",
        instruction:
          "Estimate how many foot steps long each area is. Then walk and count.",
        prompts: [
          {
            text: "The hallway — Guess: ___ foot steps. Measured: ___ foot steps.",
            type: "lines",
            lines: 1,
          },
          {
            text: "The kitchen — Guess: ___ foot steps. Measured: ___ foot steps.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Your bedroom — Guess: ___ foot steps. Measured: ___ foot steps.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Which room was the longest?",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // ── MEDIUM-HARD: Why use same-sized units? Fair measurement ─────

      // 38
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
          {
            prompt: "Tom measured a table with big blocks and small blocks mixed together. Is this a good way to measure?",
            options: [
              "Yes — more blocks means more accurate",
              "No — you need to use the same-sized blocks",
              "It does not matter",
            ],
          },
        ],
      },
      // 39
      {
        type: "circle-correct",
        title: "Fair or Unfair Measurement?",
        instruction:
          "Read each sentence. Circle whether the measurement is fair or unfair.",
        questions: [
          {
            prompt: "Amy used 6 paper clips that were all the same size to measure a pencil.",
            options: ["Fair", "Unfair"],
          },
          {
            prompt: "Ben used 4 big blocks and 3 small blocks to measure a book.",
            options: ["Fair", "Unfair"],
          },
          {
            prompt: "Chloe used her hand span 5 times, keeping her fingers the same each time.",
            options: ["Fair", "Unfair"],
          },
          {
            prompt: "Dan left gaps between his paper clips when measuring.",
            options: ["Fair", "Unfair"],
          },
        ],
      },
      // 40
      {
        type: "open-response",
        title: "What Went Wrong?",
        instruction:
          "Read each story. Write what went wrong with the measurement.",
        prompts: [
          {
            text: "Zara measured a book with 3 big blocks and 2 small blocks. She said it was 5 blocks long. What went wrong?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Kai measured a table with paper clips but left spaces between them. He said it was 8 paper clips long. What went wrong?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Mia started measuring from the middle of the ruler instead of the end. What went wrong?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 41
      {
        type: "circle-correct",
        title: "Rules for Good Measuring",
        instruction: "Circle the correct answer for each measuring rule.",
        questions: [
          {
            prompt: "When measuring, where should you start placing your units?",
            options: [
              "In the middle",
              "At one end",
              "Anywhere you like",
            ],
          },
          {
            prompt: "Should you leave gaps between your measuring units?",
            options: [
              "Yes — it is easier",
              "No — place them end to end with no gaps",
              "It does not matter",
            ],
          },
          {
            prompt: "Should your measuring units overlap?",
            options: [
              "Yes — to be safe",
              "No — no gaps and no overlaps",
              "Only sometimes",
            ],
          },
        ],
      },
      // 42
      {
        type: "sorting",
        title: "Good Measuring or Not?",
        instruction:
          "Sort each statement into the correct column.",
        columns: ["Good measuring", "Not good measuring"],
        items: [
          { label: "Use the same-sized paper clips" },
          { label: "Leave big gaps between blocks" },
          { label: "Start measuring from one end" },
          { label: "Mix big and small blocks together" },
          { label: "Place units end to end with no gaps" },
          { label: "Start measuring from the middle" },
        ],
      },
      // 43
      {
        type: "open-response",
        title: "Explain Fair Measuring",
        instruction:
          "Answer each question in your own words.",
        prompts: [
          {
            text: "Why do we need to use the same-sized units when measuring?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What happens if we leave gaps between our measuring units?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Why should we start measuring from one end of the object?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 44
      {
        type: "circle-correct",
        title: "Who Measured Correctly?",
        instruction:
          "Read about how each child measured. Circle who did it correctly.",
        questions: [
          {
            prompt: "Alice placed paper clips end to end with no gaps from one end of the pencil to the other. Ben placed paper clips with big gaps. Who measured correctly?",
            options: ["Alice", "Ben"],
          },
          {
            prompt: "Cara used blocks that were all the same size. Dave used a mix of big and small blocks. Who measured correctly?",
            options: ["Cara", "Dave"],
          },
          {
            prompt: "Emma started measuring from one end of the book. Finn started from the middle. Who measured correctly?",
            options: ["Emma", "Finn"],
          },
        ],
      },

      // ── HARD: Compare lengths, order objects by measured length ─────

      // 45
      {
        type: "circle-correct",
        title: "Put in Order — Shortest to Longest",
        instruction:
          "Read the measurements. Circle which object is the shortest.",
        questions: [
          {
            prompt: "Pencil = 6 blocks, Spoon = 3 blocks, Book = 9 blocks. Which is shortest?",
            options: ["Pencil", "Spoon", "Book"],
          },
          {
            prompt: "Cup = 4 paper clips, Banana = 5 paper clips, Eraser = 2 paper clips. Which is shortest?",
            options: ["Cup", "Banana", "Eraser"],
          },
          {
            prompt: "Table = 8 hand spans, Chair = 5 hand spans, Shelf = 10 hand spans. Which is shortest?",
            options: ["Table", "Chair", "Shelf"],
          },
        ],
      },
      // 46
      {
        type: "circle-correct",
        title: "Put in Order — Longest to Shortest",
        instruction:
          "Read the measurements. Circle which object is the longest.",
        questions: [
          {
            prompt: "Crayon = 3 blocks, Ruler = 8 blocks, Pencil = 5 blocks. Which is longest?",
            options: ["Crayon", "Ruler", "Pencil"],
          },
          {
            prompt: "Fork = 6 paper clips, Spoon = 4 paper clips, Knife = 7 paper clips. Which is longest?",
            options: ["Fork", "Spoon", "Knife"],
          },
          {
            prompt: "Book = 7 hand spans, Cushion = 4 hand spans, Pillow = 5 hand spans. Which is longest?",
            options: ["Book", "Cushion", "Pillow"],
          },
        ],
      },
      // 47
      {
        type: "sequence",
        title: "Order from Shortest to Longest",
        instruction:
          "Write the numbers 1, 2, 3 to order these objects from shortest to longest. Spoon = 3 blocks, Book = 7 blocks, Pencil = 5 blocks.",
        items: [
          { label: "Spoon (3 blocks)" },
          { label: "Pencil (5 blocks)" },
          { label: "Book (7 blocks)" },
        ],
      },
      // 48
      {
        type: "sequence",
        title: "Order from Longest to Shortest",
        instruction:
          "Write the numbers 1, 2, 3 to order these objects from longest to shortest. Table = 10 hand spans, Chair = 4 hand spans, Desk = 7 hand spans.",
        items: [
          { label: "Table (10 hand spans)" },
          { label: "Desk (7 hand spans)" },
          { label: "Chair (4 hand spans)" },
        ],
      },
      // 49
      {
        type: "sequence",
        title: "Order Four Objects",
        instruction:
          "Write 1, 2, 3, 4 to order from shortest to longest. Eraser = 2 blocks, Book = 8 blocks, Pencil = 5 blocks, Crayon = 3 blocks.",
        items: [
          { label: "Eraser (2 blocks)" },
          { label: "Crayon (3 blocks)" },
          { label: "Pencil (5 blocks)" },
          { label: "Book (8 blocks)" },
        ],
      },
      // 50
      {
        type: "open-response",
        title: "Measure and Order",
        instruction:
          "Measure each object with blocks. Then write them in order from shortest to longest.",
        prompts: [
          {
            text: "A pencil = ___ blocks. A spoon = ___ blocks. A banana = ___ blocks.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write the objects in order from shortest to longest:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 51
      {
        type: "open-response",
        title: "Measure and Order — Paper Clips",
        instruction:
          "Measure each object with paper clips. Order them from longest to shortest.",
        prompts: [
          {
            text: "A fork = ___ paper clips. A crayon = ___ paper clips. A book = ___ paper clips.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write the objects in order from longest to shortest:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 52
      {
        type: "compare-groups",
        title: "Which Is Longest?",
        instruction:
          "Compare the block measurements. Circle the longer group.",
        pairs: [
          {
            leftCount: 6,
            rightCount: 9,
            object: "cube",
            question: "Pencil (6 blocks) or Book (9 blocks)?",
          },
          {
            leftCount: 5,
            rightCount: 3,
            object: "cube",
            question: "Banana (5 blocks) or Spoon (3 blocks)?",
          },
          {
            leftCount: 7,
            rightCount: 7,
            object: "cube",
            question: "Cup (7 blocks) or Bottle (7 blocks)?",
          },
        ],
      },
      // 53
      {
        type: "matching",
        title: "Match to the Correct Order",
        instruction:
          "Draw a line to match each set of objects to the correct order from shortest to longest.",
        left: [
          "Spoon 3, Pencil 6, Book 9",
          "Cup 4, Banana 5, Bottle 7",
          "Eraser 2, Crayon 4, Ruler 8",
        ],
        right: [
          "Spoon → Pencil → Book",
          "Cup → Banana → Bottle",
          "Eraser → Crayon → Ruler",
        ],
      },
      // 54
      {
        type: "sorting",
        title: "Sort Shortest to Longest",
        instruction:
          "Sort these objects into columns based on their block measurement.",
        columns: ["Short (1–4 blocks)", "Medium (5–7 blocks)", "Long (8+ blocks)"],
        items: [
          { label: "Eraser (2 blocks)" },
          { label: "Pencil (6 blocks)" },
          { label: "Ruler (10 blocks)" },
          { label: "Crayon (3 blocks)" },
          { label: "Book (9 blocks)" },
          { label: "Spoon (4 blocks)" },
        ],
      },
      // 55
      {
        type: "open-response",
        title: "Measure Five Objects",
        instruction:
          "Choose 5 objects. Measure each with blocks. Write them in order from shortest to longest.",
        prompts: [
          {
            text: "Object 1: ___ = ___ blocks",
            type: "lines",
            lines: 1,
          },
          {
            text: "Object 2: ___ = ___ blocks",
            type: "lines",
            lines: 1,
          },
          {
            text: "Object 3: ___ = ___ blocks",
            type: "lines",
            lines: 1,
          },
          {
            text: "Object 4: ___ = ___ blocks",
            type: "lines",
            lines: 1,
          },
          {
            text: "Object 5: ___ = ___ blocks",
            type: "lines",
            lines: 1,
          },
          {
            text: "Order from shortest to longest:",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ── CHALLENGE: Reasoning about measurement, choosing units ─────

      // 56
      {
        type: "circle-correct",
        title: "Choose the Best Unit",
        instruction:
          "Circle the best informal unit for measuring each object.",
        questions: [
          {
            prompt: "To measure the length of a playground, the best unit is ___",
            options: ["paper clips", "foot steps", "blocks"],
          },
          {
            prompt: "To measure the length of an eraser, the best unit is ___",
            options: ["foot steps", "paper clips", "hand spans"],
          },
          {
            prompt: "To measure the length of a swimming pool, the best unit is ___",
            options: ["paper clips", "spoons", "big steps"],
          },
          {
            prompt: "To measure the width of your hand, the best unit is ___",
            options: ["foot steps", "paper clips", "hand spans"],
          },
        ],
      },
      // 57
      {
        type: "open-response",
        title: "Why That Unit?",
        instruction:
          "Explain why you would choose each unit.",
        prompts: [
          {
            text: "Why would you use foot steps to measure a room instead of paper clips?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Why would you use paper clips to measure a pencil instead of hand spans?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Would you use blocks or foot steps to measure a crayon? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 58
      {
        type: "circle-correct",
        title: "Thinking About Units",
        instruction:
          "Read each problem. Circle the best answer.",
        questions: [
          {
            prompt: "You measure a table with hand spans and get 6. Your friend gets 8. Why might the answers be different?",
            options: [
              "The table changed size",
              "Your hand spans are different sizes",
              "Someone cheated",
            ],
          },
          {
            prompt: "If you use a bigger unit to measure, the number will be ___",
            options: ["bigger", "smaller", "the same"],
          },
          {
            prompt: "If you use a smaller unit to measure, the number will be ___",
            options: ["bigger", "smaller", "the same"],
          },
        ],
      },
      // 59
      {
        type: "open-response",
        title: "Measurement Puzzles",
        instruction:
          "Read each puzzle. Write your answer and explain your thinking.",
        prompts: [
          {
            text: "Tom says his desk is 4 hand spans long. Lily says it is 6 hand spans long. They both measured the same desk. How is this possible?",
            type: "lines",
            lines: 3,
          },
          {
            text: "A pencil is 7 paper clips long and 3 blocks long. Which unit is smaller — paper clips or blocks? How do you know?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 60
      {
        type: "circle-correct",
        title: "Bigger Unit, Smaller Number",
        instruction:
          "Read and circle the correct answer.",
        questions: [
          {
            prompt: "A book is 8 paper clips long and 3 hand spans long. Which unit is bigger?",
            options: ["Paper clips", "Hand spans"],
          },
          {
            prompt: "A table is 5 hand spans long and 15 paper clips long. Which unit is bigger?",
            options: ["Hand spans", "Paper clips"],
          },
          {
            prompt: "Using a bigger unit to measure gives a ___ number.",
            options: ["bigger", "smaller", "the same"],
          },
          {
            prompt: "Using a smaller unit to measure gives a ___ number.",
            options: ["bigger", "smaller", "the same"],
          },
        ],
      },
      // 61
      {
        type: "open-response",
        title: "Measurement Reasoning",
        instruction:
          "Think carefully and write your answers.",
        prompts: [
          {
            text: "You measured a path with foot steps and got 10. Your little sister got 14. Why is her number bigger?",
            type: "lines",
            lines: 3,
          },
          {
            text: "Your friend says 'I only need 3 blocks to measure my desk, so it must be short.' Do you agree? Why or why not?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      // 62
      {
        type: "sorting",
        title: "Sort: Small Objects or Large Objects?",
        instruction:
          "Sort these objects by whether you would use a small unit (paper clips) or a large unit (foot steps) to measure them.",
        columns: ["Measure with paper clips", "Measure with foot steps"],
        items: [
          { label: "Eraser" },
          { label: "Playground" },
          { label: "Pencil" },
          { label: "Hallway" },
          { label: "Crayon" },
          { label: "Garden path" },
        ],
      },
      // 63
      {
        type: "open-response",
        title: "Design a Measurement Challenge",
        instruction:
          "Write your own measurement questions for a friend to try.",
        prompts: [
          {
            text: "Write a question that asks someone to measure something with blocks.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Write a question that asks someone to measure something with hand spans.",
            type: "lines",
            lines: 2,
          },
          {
            text: "Write a question that asks someone to compare two measurements.",
            type: "lines",
            lines: 2,
          },
        ],
      },
      // 64
      {
        type: "circle-correct",
        title: "Tricky Measurement Questions",
        instruction:
          "Think hard! Circle the best answer.",
        questions: [
          {
            prompt: "Two children measure the same table. One gets 5, the other gets 10. What could explain this?",
            options: [
              "One used bigger units than the other",
              "The table grew",
              "Numbers do not matter",
            ],
          },
          {
            prompt: "You want to compare the length of two desks. What must you do?",
            options: [
              "Measure each desk with different units",
              "Measure both desks with the same unit",
              "Just guess which is longer",
            ],
          },
          {
            prompt: "Which measurement tells you more — '4 blocks long' or 'quite long'?",
            options: [
              "4 blocks long",
              "Quite long",
              "Both tell you the same thing",
            ],
          },
        ],
      },
      // 65
      {
        type: "open-response",
        title: "Reflect on Measuring",
        instruction:
          "Think about everything you have learned about measuring with informal units.",
        prompts: [
          {
            text: "What are 3 different things you can use as informal measuring units?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What are 2 rules you must follow for a fair measurement?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Why is measuring better than just guessing how long something is?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ── HOME ACTIVITIES ────────────────────────────────────────────

      // 66
      {
        type: "home-activity",
        title: "Home Activity: Measure at Home",
        instruction:
          "Measure things around your home using your hand spans!",
        suggestions: [
          "Measure the length of your bed in hand spans.",
          "How many hand spans wide is the dining table?",
          "Measure a door — is it more or less than 10 hand spans?",
          "Measure a window. How many hand spans wide is it?",
          "Try measuring the same thing with different units (hand spans vs spoons). Why are the numbers different?",
        ],
      },
      // 67
      {
        type: "home-activity",
        title: "Home Activity: Kitchen Measuring",
        instruction:
          "Use spoons, forks, or other kitchen items to measure things at home.",
        suggestions: [
          "How many spoons long is a placemat?",
          "Measure a chopping board with forks. How many forks long is it?",
          "Find 3 objects in the kitchen. Measure each with spoons and write down the numbers.",
          "Which is longer — the table or the bench? Measure both with the same unit to find out.",
          "Measure a tea towel with spoons. Then measure it with your hand spans. Are the numbers different? Why?",
        ],
      },
    ],
    nextSteps: ["classify-shapes"],
  },

  // ── WS 9: Classify Shapes (Space) ──────────────────────────
  {
    slug: "classify-shapes",
    title: "Classify Shapes",
    strand: "Space",
    description:
      "Make, compare and classify shapes and objects using obvious features",
    lesson: {
      title: "Shape Detectives — Sorting by What We See",
      objective: "Name, describe and classify 2D shapes and 3D objects using features like corners, sides, flat faces and curved surfaces.",
      materials: [
        "Everyday objects: tin can, cereal box, ball, book, coin, cracker",
        "Paper and pencil for tracing faces of 3D objects",
        "Scissors (optional) to cut out traced shapes",
      ],
      intro: {
        title: "The Shape Hunt",
        script: "Let\'s be shape detectives! I want you to look around the room and find something that has a circle on it. Found one? Now find something with a square face. Shapes are hiding everywhere! When we look closely, every object is made of shapes we can name.",
        action: "Give your child 60 seconds to find objects matching shapes you call out: circle, square, rectangle, triangle. Collect 4–5 objects on the table. Then ask: \'How are these two the same? How are they different?\'",
      },
      mainActivity: {
        title: "Faces and Features",
        script: "Let\'s look at this cereal box. It has flat faces — can you trace one on paper? What shape is that face? Now feel the tin can. Are ALL its surfaces flat? No! Some are curved. A shape with all flat faces is different from one with a curved surface. Let\'s sort our objects into two groups.",
        action: "Pick up the cereal box from your materials before you begin this phase. Trace the faces of 2–3 3D objects onto paper to create 2D shapes. Sort the objects into: \'all flat faces\' and \'has a curved surface\'. Then sort 2D shapes by number of sides (3 sides, 4 sides). Count sides and corners together.",
      },
      wrapUp: {
        title: "Describe My Shape",
        script: "I\'m thinking of a shape. It has 4 sides and 4 corners, and all sides are the same length. What am I thinking of? Now you describe a shape for me to guess — no peeking! Give me clues about sides, corners and whether it\'s flat or curved.",
        action: "Play 3–4 rounds of guess-the-shape using descriptions only. Prompt your child to use words: sides, corners, flat, curved, straight, round. Accept all correct shape names and encourage precise language.",
      },
      parentTip: "Year 1 children often want to name shapes only by memory (a square is always 'a square') rather than by properties. Push gently beyond the label: 'How do you know it's a rectangle? How many sides does it have? Are they straight?' This builds the geometric reasoning that will underpin all future geometry.",
      extension: "Make a 'Shape Detective' notebook. Fold paper into a small booklet. Each page is one shape. Your child draws the shape, writes its name (or you write it), and then finds and draws a real-world example of it from around the house or garden. Aim for 5 different shapes.",
      resources: [
        { title: "Khan Academy – Geometry", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-geometry", description: "Year 1 geometry covering 2D and 3D shape properties and classification." },
        { title: "Maths is Fun – Geometry", url: "https://www.mathsisfun.com/geometry/index.html", description: "Interactive geometry with clear shape definitions and visual examples." },
        { title: "NRICH – Shape and Space", url: "https://nrich.maths.org/early-years", description: "Creative geometry tasks for early primary learners." },
      ],
    },
    activities: [
      // ─── Easy: Identify Basic 2D Shapes (Circle, Square, Triangle) ───
      {
        type: "circle-correct",
        title: "Name That Shape!",
        instruction: "Look at each shape. Circle the correct name.",
        questions: [
          {
            prompt: "What is this shape?",
            options: ["circle", "square", "triangle"],
            optionIcons: ["circle", "square", "triangle"],
          },
          {
            prompt: "What is this shape?",
            options: ["triangle", "circle", "square"],
            optionIcons: ["triangle", "circle", "square"],
          },
          {
            prompt: "What is this shape?",
            options: ["square", "triangle", "circle"],
            optionIcons: ["square", "triangle", "circle"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Shape Am I?",
        instruction: "Read the clue and circle the correct shape.",
        questions: [
          {
            prompt: "I am round with no corners. What am I?",
            options: ["circle", "square", "triangle"],
            optionIcons: ["circle", "square", "triangle"],
          },
          {
            prompt: "I have 3 sides and 3 corners. What am I?",
            options: ["square", "triangle", "circle"],
            optionIcons: ["square", "triangle", "circle"],
          },
          {
            prompt: "I have 4 equal sides and 4 corners. What am I?",
            options: ["triangle", "circle", "square"],
            optionIcons: ["triangle", "circle", "square"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Shape Name",
        instruction: "Draw a line from each shape name to its picture.",
        left: ["circle", "square", "triangle"],
        right: ["△", "○", "□"],
      },
      {
        type: "circle-correct",
        title: "Find the Circle",
        instruction: "Circle every shape that is a circle.",
        questions: [
          {
            prompt: "Which of these is a circle?",
            options: ["circle", "square", "triangle"],
            optionIcons: ["circle", "square", "triangle"],
          },
          {
            prompt: "Which of these is a circle?",
            options: ["triangle", "diamond", "circle"],
            optionIcons: ["triangle", "diamond", "circle"],
          },
          {
            prompt: "Which of these is NOT a circle?",
            options: ["circle", "square", "circle"],
            optionIcons: ["circle", "square", "circle"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Triangle",
        instruction: "Circle every shape that is a triangle.",
        questions: [
          {
            prompt: "Which of these is a triangle?",
            options: ["circle", "triangle", "square"],
            optionIcons: ["circle", "triangle", "square"],
          },
          {
            prompt: "Which of these is a triangle?",
            options: ["triangle", "diamond", "circle"],
            optionIcons: ["triangle", "diamond", "circle"],
          },
          {
            prompt: "Which of these is NOT a triangle?",
            options: ["triangle", "square", "triangle"],
            optionIcons: ["triangle", "square", "triangle"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Square",
        instruction: "Circle every shape that is a square.",
        questions: [
          {
            prompt: "Which of these is a square?",
            options: ["square", "circle", "triangle"],
            optionIcons: ["square", "circle", "triangle"],
          },
          {
            prompt: "Which of these is a square?",
            options: ["triangle", "square", "diamond"],
            optionIcons: ["triangle", "square", "diamond"],
          },
          {
            prompt: "Which of these is NOT a square?",
            options: ["square", "circle", "square"],
            optionIcons: ["square", "circle", "square"],
          },
        ],
      },
      {
        type: "tally-chart",
        title: "Count the Basic Shapes",
        instruction:
          "Count each type of shape in the picture. Record the tally.",
        categories: [
          { label: "Circles", icon: "circle", count: 4 },
          { label: "Squares", icon: "square", count: 3 },
          { label: "Triangles", icon: "triangle", count: 5 },
        ],
      },

      // ─── Easy: Trace Basic Shapes ───
      {
        type: "shape-trace",
        title: "Trace a Circle",
        instruction:
          "Trace around each circle carefully. Try to keep your pencil on the line!",
        shapes: [
          { name: "circle", sides: 0 },
          { name: "circle", sides: 0 },
          { name: "circle", sides: 0 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace a Square",
        instruction:
          "Trace around each square. Count the sides as you go — 1, 2, 3, 4!",
        shapes: [
          { name: "square", sides: 4 },
          { name: "square", sides: 4 },
          { name: "square", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace a Triangle",
        instruction:
          "Trace around each triangle carefully. How many sides does it have?",
        shapes: [
          { name: "triangle", sides: 3 },
          { name: "triangle", sides: 3 },
          { name: "triangle", sides: 3 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace Circles, Squares and Triangles",
        instruction:
          "Trace each shape. Say its name out loud as you trace it!",
        shapes: [
          { name: "circle", sides: 0 },
          { name: "square", sides: 4 },
          { name: "triangle", sides: 3 },
          { name: "circle", sides: 0 },
          { name: "triangle", sides: 3 },
        ],
      },

      // ─── Easy–Medium: More 2D Shapes (Rectangle, Diamond) ───
      {
        type: "circle-correct",
        title: "Meet the Rectangle",
        instruction: "Circle the correct answer about rectangles.",
        questions: [
          {
            prompt: "A rectangle has how many sides?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "A rectangle has how many corners?",
            options: ["3", "4", "6"],
          },
          {
            prompt: "Which shape is a rectangle?",
            options: ["circle", "triangle", "square"],
            optionIcons: ["circle", "triangle", "square"],
          },
          {
            prompt: "How is a rectangle different from a square?",
            options: [
              "It has more sides",
              "It has 2 long sides and 2 short sides",
              "It has no corners",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Meet the Diamond",
        instruction: "Circle the correct answer about diamonds.",
        questions: [
          {
            prompt: "A diamond has how many sides?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "A diamond has how many corners?",
            options: ["3", "4", "6"],
          },
          {
            prompt: "Which shape is a diamond?",
            options: ["circle", "diamond", "triangle"],
            optionIcons: ["circle", "diamond", "triangle"],
          },
          {
            prompt: "A diamond looks like a square that has been...",
            options: ["stretched", "turned on its point", "squished flat"],
          },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace Rectangles and Diamonds",
        instruction:
          "Trace each shape. Count the sides as you trace.",
        shapes: [
          { name: "rectangle", sides: 4 },
          { name: "diamond", sides: 4 },
          { name: "rectangle", sides: 4 },
          { name: "diamond", sides: 4 },
        ],
      },
      {
        type: "matching",
        title: "Match Shapes to Their Names",
        instruction:
          "Draw a line from each shape name to the correct picture.",
        left: ["circle", "square", "triangle", "rectangle", "diamond"],
        right: ["◇", "△", "○", "▭", "□"],
      },
      {
        type: "circle-correct",
        title: "Rectangle or Square?",
        instruction: "Read each description. Circle the correct shape.",
        questions: [
          {
            prompt: "I have 4 equal sides. What am I?",
            options: ["rectangle", "square"],
            optionIcons: ["square", "square"],
          },
          {
            prompt: "I have 2 long sides and 2 short sides. What am I?",
            options: ["square", "rectangle"],
            optionIcons: ["square", "square"],
          },
          {
            prompt: "All my sides are the same length. What am I?",
            options: ["rectangle", "square"],
            optionIcons: ["square", "square"],
          },
          {
            prompt: "I look like a door. What am I?",
            options: ["square", "rectangle"],
            optionIcons: ["square", "square"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort: 3-Sided or 4-Sided?",
        instruction:
          "Sort each shape into the correct group.",
        columns: ["3 sides", "4 sides"],
        items: [
          { label: "triangle", icon: "triangle" },
          { label: "square", icon: "square" },
          { label: "rectangle", icon: "square" },
          { label: "diamond", icon: "diamond" },
          { label: "triangle", icon: "triangle" },
        ],
      },
      {
        type: "tally-chart",
        title: "Count Shapes — 5 Types",
        instruction:
          "Count each type of shape in the picture. Record the tally.",
        categories: [
          { label: "Circles", icon: "circle", count: 3 },
          { label: "Squares", icon: "square", count: 4 },
          { label: "Triangles", icon: "triangle", count: 5 },
          { label: "Diamonds", icon: "diamond", count: 2 },
        ],
      },

      // ─── Medium: Count Sides and Corners ───
      {
        type: "circle-correct",
        title: "How Many Sides?",
        instruction: "Count the sides of each shape. Circle the correct number.",
        questions: [
          {
            prompt: "How many sides does a triangle have?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "How many sides does a square have?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "How many sides does a circle have?",
            options: ["0", "1", "4"],
          },
          {
            prompt: "How many sides does a rectangle have?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "How many sides does a diamond have?",
            options: ["3", "4", "5"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Corners?",
        instruction: "Count the corners (vertices) of each shape. Circle the correct number.",
        questions: [
          {
            prompt: "How many corners does a triangle have?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "How many corners does a square have?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "How many corners does a circle have?",
            options: ["0", "1", "4"],
          },
          {
            prompt: "How many corners does a rectangle have?",
            options: ["3", "4", "6"],
          },
          {
            prompt: "How many corners does a diamond have?",
            options: ["3", "4", "5"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Shapes to Side Count",
        instruction:
          "Draw a line from each shape to the correct number of sides.",
        left: ["circle", "triangle", "square", "rectangle", "diamond"],
        right: ["4", "0", "3", "4", "4"],
      },
      {
        type: "matching",
        title: "Match Shapes to Corner Count",
        instruction:
          "Draw a line from each shape to the correct number of corners.",
        left: ["circle", "triangle", "square", "diamond"],
        right: ["4", "0", "4", "3"],
      },
      {
        type: "open-response",
        title: "Describe the Shape",
        instruction:
          "Look at each shape and write how many sides and corners it has.",
        prompts: [
          {
            text: "A triangle has ___ sides and ___ corners.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A square has ___ sides and ___ corners.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A circle has ___ sides and ___ corners.",
            type: "lines",
            lines: 1,
          },
          {
            text: "A rectangle has ___ sides and ___ corners.",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // ─── Medium: Pentagon and Hexagon ───
      {
        type: "circle-correct",
        title: "Meet the Pentagon",
        instruction: "Circle the correct answer about pentagons.",
        questions: [
          {
            prompt: "A pentagon has how many sides?",
            options: ["4", "5", "6"],
          },
          {
            prompt: "A pentagon has how many corners?",
            options: ["4", "5", "6"],
          },
          {
            prompt: "'Penta' means...",
            options: ["four", "five", "six"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Meet the Hexagon",
        instruction: "Circle the correct answer about hexagons.",
        questions: [
          {
            prompt: "A hexagon has how many sides?",
            options: ["5", "6", "7"],
          },
          {
            prompt: "A hexagon has how many corners?",
            options: ["5", "6", "7"],
          },
          {
            prompt: "'Hexa' means...",
            options: ["five", "six", "seven"],
          },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace Pentagons and Hexagons",
        instruction:
          "Trace each shape carefully. Count the sides as you go!",
        shapes: [
          { name: "pentagon", sides: 5 },
          { name: "hexagon", sides: 6 },
          { name: "pentagon", sides: 5 },
          { name: "hexagon", sides: 6 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace All 2D Shapes",
        instruction:
          "Trace each shape. Write the number of sides underneath.",
        shapes: [
          { name: "triangle", sides: 3 },
          { name: "square", sides: 4 },
          { name: "pentagon", sides: 5 },
          { name: "hexagon", sides: 6 },
          { name: "circle", sides: 0 },
        ],
      },
      {
        type: "circle-correct",
        title: "Name the Shape by Its Sides",
        instruction: "Read the clue and circle the correct shape name.",
        questions: [
          {
            prompt: "I have 5 sides and 5 corners. What am I?",
            options: ["hexagon", "pentagon", "rectangle"],
          },
          {
            prompt: "I have 6 sides and 6 corners. What am I?",
            options: ["pentagon", "hexagon", "diamond"],
          },
          {
            prompt: "I have 3 sides. What am I?",
            options: ["triangle", "pentagon", "square"],
          },
          {
            prompt: "I have 4 sides that are all the same length. What am I?",
            options: ["rectangle", "triangle", "square"],
          },
        ],
      },

      // ─── Medium: Sort Shapes by Number of Sides ───
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
        type: "sorting",
        title: "Sort: Corners or No Corners?",
        instruction:
          "Sort each shape. Does it have corners or not?",
        columns: ["Has corners", "No corners"],
        items: [
          { label: "triangle", icon: "triangle" },
          { label: "circle", icon: "circle" },
          { label: "square", icon: "square" },
          { label: "diamond", icon: "diamond" },
          { label: "circle", icon: "circle" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Straight Sides or Curved?",
        instruction:
          "Sort each shape by whether its sides are straight or curved.",
        columns: ["All straight sides", "Curved sides"],
        items: [
          { label: "triangle", icon: "triangle" },
          { label: "circle", icon: "circle" },
          { label: "square", icon: "square" },
          { label: "rectangle", icon: "square" },
          { label: "diamond", icon: "diamond" },
          { label: "circle", icon: "circle" },
        ],
      },
      {
        type: "matching",
        title: "Match Shape to Number of Sides",
        instruction:
          "Draw a line from each shape to its number of sides.",
        left: ["triangle", "square", "pentagon", "hexagon"],
        right: ["6", "3", "5", "4"],
      },
      {
        type: "tally-chart",
        title: "Shape Tally — All 2D Shapes",
        instruction:
          "Count each type of shape in the picture. Record the tally.",
        categories: [
          { label: "Triangles", icon: "triangle", count: 3 },
          { label: "Squares", icon: "square", count: 4 },
          { label: "Circles", icon: "circle", count: 6 },
          { label: "Diamonds", icon: "diamond", count: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "More or Fewer Sides?",
        instruction: "Circle the shape that has MORE sides.",
        questions: [
          {
            prompt: "Which has more sides: triangle or square?",
            options: ["triangle", "square"],
            optionIcons: ["triangle", "square"],
          },
          {
            prompt: "Which has more sides: pentagon or square?",
            options: ["square", "pentagon"],
          },
          {
            prompt: "Which has more sides: hexagon or triangle?",
            options: ["triangle", "hexagon"],
          },
          {
            prompt: "Which has fewer sides: pentagon or hexagon?",
            options: ["pentagon", "hexagon"],
          },
        ],
      },

      // ─── Medium–Hard: 3D Objects (Sphere, Cube, Cone, Cylinder) ───
      {
        type: "circle-correct",
        title: "Meet the Sphere",
        instruction: "Circle the correct answer about spheres.",
        questions: [
          {
            prompt: "A sphere is shaped like a...",
            options: ["ball", "box", "can"],
          },
          {
            prompt: "Can a sphere roll?",
            options: ["yes", "no"],
          },
          {
            prompt: "Does a sphere have flat faces?",
            options: ["yes", "no"],
          },
          {
            prompt: "Which of these is shaped like a sphere?",
            options: ["a tennis ball", "a cereal box", "a party hat"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Meet the Cube",
        instruction: "Circle the correct answer about cubes.",
        questions: [
          {
            prompt: "A cube is shaped like a...",
            options: ["ball", "box", "cone"],
          },
          {
            prompt: "How many flat faces does a cube have?",
            options: ["4", "6", "8"],
          },
          {
            prompt: "Can a cube roll easily?",
            options: ["yes", "no"],
          },
          {
            prompt: "Which of these is shaped like a cube?",
            options: ["a dice", "a ball", "a can of beans"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Meet the Cone",
        instruction: "Circle the correct answer about cones.",
        questions: [
          {
            prompt: "A cone has a flat circle on the bottom and a...",
            options: ["flat top", "pointy top", "round top"],
          },
          {
            prompt: "Which of these is shaped like a cone?",
            options: ["a party hat", "a dice", "a ball"],
          },
          {
            prompt: "How many flat faces does a cone have?",
            options: ["0", "1", "2"],
          },
          {
            prompt: "Can a cone roll?",
            options: ["yes, on its side", "no, never"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Meet the Cylinder",
        instruction: "Circle the correct answer about cylinders.",
        questions: [
          {
            prompt: "A cylinder is shaped like a...",
            options: ["ball", "box", "can"],
          },
          {
            prompt: "How many flat faces does a cylinder have?",
            options: ["0", "1", "2"],
          },
          {
            prompt: "Can a cylinder roll?",
            options: ["yes, on its side", "no, never"],
          },
          {
            prompt: "Which of these is shaped like a cylinder?",
            options: ["a can of soup", "a dice", "a party hat"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match 3D Objects to Real Things",
        instruction:
          "Draw a line from each 3D object name to something that looks like it.",
        left: ["sphere", "cube", "cone", "cylinder"],
        right: ["a can of beans", "a basketball", "a dice", "an ice cream cone"],
      },
      {
        type: "matching",
        title: "Match 3D Objects to Descriptions",
        instruction:
          "Draw a line from each 3D object to its description.",
        left: ["sphere", "cube", "cone", "cylinder"],
        right: [
          "Has 2 flat circle faces and can roll",
          "Completely round, no flat faces",
          "Has 6 flat square faces",
          "Has 1 flat face and a pointy top",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Can It Roll?",
        instruction:
          "Sort each 3D object by whether it can roll.",
        columns: ["Can roll", "Cannot roll easily"],
        items: [
          { label: "sphere" },
          { label: "cube", icon: "cube" },
          { label: "cone", icon: "cone" },
          { label: "cylinder", icon: "cylinder" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Flat Faces or No Flat Faces?",
        instruction:
          "Sort each 3D object by whether it has flat faces.",
        columns: ["Has flat faces", "No flat faces"],
        items: [
          { label: "sphere" },
          { label: "cube", icon: "cube" },
          { label: "cone", icon: "cone" },
          { label: "cylinder", icon: "cylinder" },
        ],
      },
      {
        type: "circle-correct",
        title: "Name That 3D Object!",
        instruction: "Read the clue and circle the correct 3D object.",
        questions: [
          {
            prompt: "I am round like a ball. What am I?",
            options: ["sphere", "cube", "cylinder"],
          },
          {
            prompt: "I have 6 square faces. What am I?",
            options: ["cone", "cube", "sphere"],
          },
          {
            prompt: "I have a pointy top and a flat bottom. What am I?",
            options: ["cylinder", "sphere", "cone"],
          },
          {
            prompt: "I look like a tin can. What am I?",
            options: ["cube", "cylinder", "cone"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "3D Objects in the Real World",
        instruction: "Circle the 3D object that matches each real thing.",
        questions: [
          {
            prompt: "A soccer ball is most like a...",
            options: ["cube", "sphere", "cylinder"],
          },
          {
            prompt: "A tissue box is most like a...",
            options: ["sphere", "cone", "cube"],
          },
          {
            prompt: "A witch's hat is most like a...",
            options: ["cone", "cube", "cylinder"],
          },
          {
            prompt: "A toilet roll is most like a...",
            options: ["sphere", "cylinder", "cone"],
          },
          {
            prompt: "A marble is most like a...",
            options: ["cube", "cone", "sphere"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Draw a 3D Object",
        instruction:
          "For each 3D object, draw something from real life that has the same shape.",
        prompts: [
          {
            text: "Draw something shaped like a sphere (ball shape):",
            type: "box",
          },
          {
            text: "Draw something shaped like a cube (box shape):",
            type: "box",
          },
          {
            text: "Draw something shaped like a cylinder (can shape):",
            type: "box",
          },
        ],
      },

      // ─── Hard: Compare 2D and 3D Shapes ───
      {
        type: "sorting",
        title: "Sort: 2D Shape or 3D Object?",
        instruction:
          "Sort each item. Is it a flat (2D) shape or a solid (3D) object?",
        columns: ["2D shape (flat)", "3D object (solid)"],
        items: [
          { label: "circle", icon: "circle" },
          { label: "sphere" },
          { label: "square", icon: "square" },
          { label: "cube", icon: "cube" },
          { label: "triangle", icon: "triangle" },
          { label: "cone", icon: "cone" },
        ],
      },
      {
        type: "matching",
        title: "Match 2D to 3D",
        instruction:
          "Draw a line from each 2D shape to the 3D object that has a similar face.",
        left: ["circle", "square", "triangle"],
        right: ["cube", "cone", "sphere"],
      },
      {
        type: "circle-correct",
        title: "2D or 3D?",
        instruction: "Is the shape flat (2D) or solid (3D)? Circle the correct answer.",
        questions: [
          {
            prompt: "A triangle drawn on paper is...",
            options: ["2D (flat)", "3D (solid)"],
          },
          {
            prompt: "A basketball is...",
            options: ["2D (flat)", "3D (solid)"],
          },
          {
            prompt: "A circle drawn on the board is...",
            options: ["2D (flat)", "3D (solid)"],
          },
          {
            prompt: "A dice you can hold is...",
            options: ["2D (flat)", "3D (solid)"],
          },
          {
            prompt: "A square cut from paper is...",
            options: ["2D (flat)", "3D (solid)"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which 2D Shape Is on This 3D Object?",
        instruction: "Circle the 2D shape you can see on each 3D object.",
        questions: [
          {
            prompt: "The flat face of a cylinder is a...",
            options: ["circle", "square", "triangle"],
            optionIcons: ["circle", "square", "triangle"],
          },
          {
            prompt: "Each face of a cube is a...",
            options: ["circle", "square", "triangle"],
            optionIcons: ["circle", "square", "triangle"],
          },
          {
            prompt: "The flat face of a cone is a...",
            options: ["square", "circle", "diamond"],
            optionIcons: ["square", "circle", "diamond"],
          },
        ],
      },

      // ─── Hard: Classify by Features (Curved/Straight Sides, Faces) ───
      {
        type: "sorting",
        title: "Sort: Curved Sides or Straight Sides?",
        instruction:
          "Sort each 2D shape by whether it has curved or straight sides.",
        columns: ["Curved sides", "Straight sides"],
        items: [
          { label: "circle", icon: "circle" },
          { label: "triangle", icon: "triangle" },
          { label: "square", icon: "square" },
          { label: "diamond", icon: "diamond" },
          { label: "circle", icon: "circle" },
          { label: "rectangle", icon: "square" },
        ],
      },
      {
        type: "circle-correct",
        title: "Curved or Straight?",
        instruction: "Does this shape have curved sides or straight sides? Circle the answer.",
        questions: [
          {
            prompt: "A circle has...",
            options: ["curved sides", "straight sides"],
          },
          {
            prompt: "A square has...",
            options: ["curved sides", "straight sides"],
          },
          {
            prompt: "A triangle has...",
            options: ["curved sides", "straight sides"],
          },
          {
            prompt: "A diamond has...",
            options: ["curved sides", "straight sides"],
          },
          {
            prompt: "A hexagon has...",
            options: ["curved sides", "straight sides"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Faces?",
        instruction: "Circle how many flat faces each 3D object has.",
        questions: [
          {
            prompt: "A cube has how many flat faces?",
            options: ["4", "6", "8"],
          },
          {
            prompt: "A cylinder has how many flat faces?",
            options: ["0", "1", "2"],
          },
          {
            prompt: "A cone has how many flat faces?",
            options: ["0", "1", "2"],
          },
          {
            prompt: "A sphere has how many flat faces?",
            options: ["0", "1", "2"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort 3D Objects by Number of Flat Faces",
        instruction:
          "Sort each 3D object into the correct group.",
        columns: ["0 flat faces", "1 flat face", "2 flat faces", "6 flat faces"],
        items: [
          { label: "sphere" },
          { label: "cone", icon: "cone" },
          { label: "cylinder", icon: "cylinder" },
          { label: "cube", icon: "cube" },
        ],
      },
      {
        type: "matching",
        title: "Match 3D Object to Number of Faces",
        instruction:
          "Draw a line from each 3D object to its number of flat faces.",
        left: ["sphere", "cone", "cylinder", "cube"],
        right: ["2", "6", "0", "1"],
      },
      {
        type: "sorting",
        title: "Sort 3D Objects: Can Stack or Cannot Stack?",
        instruction:
          "Some 3D objects can be stacked on top of each other. Sort them!",
        columns: ["Can be stacked", "Hard to stack"],
        items: [
          { label: "cube", icon: "cube" },
          { label: "sphere" },
          { label: "cylinder", icon: "cylinder" },
          { label: "cone", icon: "cone" },
        ],
      },

      // ─── Challenge: Reasoning About Shapes ───
      {
        type: "circle-correct",
        title: "Shape Riddles",
        instruction: "Solve each shape riddle. Circle the correct answer.",
        questions: [
          {
            prompt:
              "I have 4 sides but I am NOT a square. Two of my sides are longer than the other two. What am I?",
            options: ["triangle", "rectangle", "circle"],
          },
          {
            prompt:
              "I have no sides and no corners. I can roll forever. What am I?",
            options: ["square", "triangle", "circle"],
            optionIcons: ["square", "triangle", "circle"],
          },
          {
            prompt:
              "I am a 3D object. I look like a ball. What am I?",
            options: ["cube", "sphere", "cylinder"],
          },
          {
            prompt:
              "I have more sides than a square but fewer sides than a hexagon. What am I?",
            options: ["triangle", "pentagon", "circle"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "More Shape Riddles",
        instruction: "Solve each riddle. Circle the correct answer.",
        questions: [
          {
            prompt:
              "I am like a square that has been turned on its point. What am I?",
            options: ["triangle", "diamond", "rectangle"],
            optionIcons: ["triangle", "diamond", "square"],
          },
          {
            prompt:
              "I am a 3D object shaped like a tin can. What am I?",
            options: ["cone", "sphere", "cylinder"],
          },
          {
            prompt:
              "I have 6 flat square faces. You can find me at board game night. What am I?",
            options: ["sphere", "cube", "cone"],
          },
          {
            prompt:
              "I have 6 sides. Bees make their honeycomb cells in my shape. What am I?",
            options: ["pentagon", "hexagon", "diamond"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Describe the Shape",
        instruction:
          "Describe each shape using its features. Write about sides, corners and anything special.",
        prompts: [
          {
            text: "Describe a triangle:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Describe a circle:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Describe a hexagon:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Describe the 3D Object",
        instruction:
          "Describe each 3D object. Write about flat faces, curved surfaces and whether it can roll or stack.",
        prompts: [
          {
            text: "Describe a sphere:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Describe a cube:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Describe a cylinder:",
            type: "lines",
            lines: 2,
          },
          {
            text: "Describe a cone:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Shapes",
        instruction:
          "Write how these shapes are the same and how they are different.",
        prompts: [
          {
            text: "How are a square and a rectangle the same? How are they different?",
            type: "lines",
            lines: 3,
          },
          {
            text: "How are a circle and a sphere the same? How are they different?",
            type: "lines",
            lines: 3,
          },
          {
            text: "How are a cube and a square the same? How are they different?",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd One Out — 2D Shapes",
        instruction: "Which shape does NOT belong in the group? Circle it.",
        questions: [
          {
            prompt: "square, rectangle, diamond, circle — which is the odd one out?",
            options: ["square", "rectangle", "diamond", "circle"],
            optionIcons: ["square", "square", "diamond", "circle"],
          },
          {
            prompt: "triangle, pentagon, hexagon, circle — which is the odd one out?",
            options: ["triangle", "pentagon", "hexagon", "circle"],
          },
          {
            prompt: "square, rectangle, triangle, diamond — which is the odd one out?",
            options: ["square", "rectangle", "triangle", "diamond"],
            optionIcons: ["square", "square", "triangle", "diamond"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Odd One Out — 3D Objects",
        instruction: "Which 3D object does NOT belong? Circle the odd one out.",
        questions: [
          {
            prompt: "sphere, cube, cylinder, cone — which one has NO flat faces?",
            options: ["sphere", "cube", "cylinder", "cone"],
          },
          {
            prompt: "cube, cone, cylinder, sphere — which one has 6 flat faces?",
            options: ["cube", "cone", "cylinder", "sphere"],
          },
          {
            prompt: "sphere, cone, cylinder, cube — which one CANNOT roll?",
            options: ["sphere", "cone", "cylinder", "cube"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Shape Detective",
        instruction:
          "Answer each question. Think carefully about what you know about shapes!",
        prompts: [
          {
            text: "Name a 2D shape with no straight sides:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Name a 3D object that can roll AND has a flat face:",
            type: "lines",
            lines: 1,
          },
          {
            text: "What do a square, rectangle and diamond all have in common?",
            type: "lines",
            lines: 2,
          },
          {
            text: "If you traced around the bottom of a cylinder, what 2D shape would you draw?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Shape Feature",
        instruction:
          "Draw a line from each feature to the shape or object it describes.",
        left: [
          "Has exactly 3 corners",
          "Can roll in any direction",
          "Has 2 flat circle faces",
          "Has 6 equal sides",
        ],
        right: ["hexagon", "triangle", "cylinder", "sphere"],
      },
      {
        type: "tally-chart",
        title: "Shapes in Our Classroom",
        instruction:
          "Imagine looking around your classroom. Count how many of each shape you might see. Record the tally.",
        categories: [
          { label: "Circles", icon: "circle", count: 5 },
          { label: "Squares", icon: "square", count: 4 },
          { label: "Triangles", icon: "triangle", count: 2 },
          { label: "Rectangles", icon: "square", count: 7 },
        ],
      },
      {
        type: "tally-chart",
        title: "3D Objects Around Us",
        instruction:
          "Think about objects around you. Count how many match each 3D shape. Record the tally.",
        categories: [
          { label: "Spheres", icon: "circle", count: 3 },
          { label: "Cubes", icon: "cube", count: 4 },
          { label: "Cylinders", icon: "cylinder", count: 5 },
          { label: "Cones", icon: "cone", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Design Your Own Shape Picture",
        instruction:
          "Use only shapes to draw a picture! You could draw a house, a robot, an animal or anything you like.",
        prompts: [
          {
            text: "Draw your shape picture here:",
            type: "box",
          },
          {
            text: "List all the shapes you used in your picture:",
            type: "lines",
            lines: 3,
          },
          {
            text: "Which shape did you use the most? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ─── Home Activities ───
      {
        type: "home-activity",
        title: "Home Activity: Shape Hunt",
        instruction:
          "Go on a shape hunt around your home! Look for 2D shapes and 3D objects everywhere.",
        suggestions: [
          "Find something that is a rectangle. How many sides does it have?",
          "Can you find a circle in your kitchen? What about a sphere?",
          "Look for triangles — check roofs, signs and food!",
          "Find a cylinder in the pantry (like a tin can). How many flat faces does it have?",
          "Draw 5 shapes you found and write their names and how many sides each has.",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Shape Sort Challenge",
        instruction:
          "Collect objects from around the house and sort them by shape!",
        suggestions: [
          "Collect 10 objects. Sort them into groups: things that can roll and things that cannot.",
          "Find 3 objects shaped like a cube, 3 like a cylinder and 3 like a sphere.",
          "Look at the faces of a box. What 2D shape are the faces? Count them!",
          "Build a tower using only objects with flat faces. Why can't you use balls?",
          "Play 'I Spy a Shape' with someone — describe a shape and see if they can guess it!",
        ],
      },
    ],
    nextSteps: ["directions-in-space"],
  },

  // ── WS 10: Directions in Space ──────────────────────────────
  {
    slug: "directions-in-space",
    title: "Directions in Space",
    strand: "Space",
    description:
      "Give and follow directions to move people and objects within a space",
    lesson: {
      title: "This Way! — Following and Giving Directions",
      objective: "Use directional language (forward, backward, left, right, turn) to follow and give instructions for moving through a space.",
      materials: [
        "Open floor space — a hallway or lounge room works well",
        "4–6 household objects as landmarks — a chair, cushion, book, cup",
        "A blindfold or asking your child to close their eyes",
      ],
      intro: {
        title: "Left or Right?",
        script: "Put your right hand up — that\'s your writing hand. Now your left hand. Good. Now face me and point to MY right... tricky! When we face each other, our lefts and rights swap. That\'s why direction words are so important — we always mean YOUR left and right, the direction YOU are facing.",
        action: "Do 5 quick left-right checks: hold up left hand, point right, turn to face the wall and check again. Then walk two steps forward together, two steps back, turn left, turn right. Name each action as you do it.",
      },
      mainActivity: {
        title: "The Obstacle Course",
        script: "I\'m going to set up a little obstacle course with these objects, and then I\'ll give you directions to get through it — without looking! Then we swap. You have to give me really clear directions so I don\'t bump into anything. Ready? Close your eyes. Take two steps forward. Now turn right...",
        action: "Set up 4–6 objects in a line or L-shape on the floor. Guide your child with verbal directions: \'forward\', \'stop\', \'turn left\', \'take one step right\'. Then swap. If they struggle giving directions, prompt them: \'Which way do I need to turn to go around the chair?\'",
      },
      wrapUp: {
        title: "Map It",
        script: "Let\'s draw a simple map of our obstacle course from above — like a bird looking down. Here\'s the start, here are the objects. Can you draw arrows to show the path we took? Which direction does this arrow point?",
        action: "Child draws a simple bird's-eye view map. Prompt if needed: start by drawing a rectangle to represent the floor area, then mark where the table (or main piece of furniture) is, then mark where Teddy is. Label the position word beside Teddy.",
      },
      parentTip: "Giving and following directions is a skill many adults struggle with too — so don't worry if this lesson takes longer than expected! The key is that your child experiences both giving AND following instructions, because each perspective builds different spatial understanding.",
      extension: "Create a 'Treasure Map' of one room in your house. Draw it from above (a bird's eye view) together. Mark where a hidden toy is. Write 3–5 direction clues using left, right, forward, back. Swap maps and follow each other's directions to find the treasure.",
      resources: [
        { title: "Khan Academy – Spatial Reasoning", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-geometry", description: "Year 1 geometry and spatial direction activities." },
        { title: "Maths is Fun – Directions", url: "https://www.mathsisfun.com/geometry/direction.html", description: "Introduction to directions, turns and spatial language." },
        { title: "NRICH – Position and Direction", url: "https://nrich.maths.org/early-years", description: "Games and tasks building directional language and spatial thinking." },
      ],
    },
    activities: [
      // ─── Easy: Understand Forward, Backward, Left, Right ───

      {
        type: "matching",
        title: "Match Direction Words to Arrows",
        instruction:
          "Draw a line to match each direction word to the correct arrow.",
        left: ["forward", "backward", "left", "right"],
        right: ["↑", "↓", "←", "→"],
      },
      {
        type: "circle-correct",
        title: "Which Way? — Forward or Backward",
        instruction:
          "Read each sentence. Circle the correct direction word.",
        questions: [
          {
            prompt: "You walk towards the door. You are going…",
            options: ["forward", "backward"],
          },
          {
            prompt: "You step away from the door without turning around. You are going…",
            options: ["forward", "backward"],
          },
          {
            prompt: "A car drives ahead on the road. It goes…",
            options: ["forward", "backward"],
          },
          {
            prompt: "You reverse back to your seat. You go…",
            options: ["forward", "backward"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Way? — Left or Right",
        instruction:
          "Read each sentence. Circle the correct direction.",
        questions: [
          {
            prompt: "You write with your right hand. Your pencil is on your… side.",
            options: ["left", "right"],
          },
          {
            prompt: "Your heart is on the… side of your body.",
            options: ["left", "right"],
          },
          {
            prompt: "The arrow ← points to the…",
            options: ["left", "right"],
          },
          {
            prompt: "The arrow → points to the…",
            options: ["left", "right"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Arrow Directions",
        instruction:
          "Look at each arrow. Circle the direction it shows.",
        questions: [
          {
            prompt: "↑",
            options: ["forward", "backward", "left", "right"],
          },
          {
            prompt: "↓",
            options: ["forward", "backward", "left", "right"],
          },
          {
            prompt: "←",
            options: ["forward", "backward", "left", "right"],
          },
          {
            prompt: "→",
            options: ["forward", "backward", "left", "right"],
          },
        ],
      },
      {
        type: "matching",
        title: "Arrows to Words",
        instruction:
          "Match each arrow to the correct direction word.",
        left: ["↑", "↓", "←", "→"],
        right: ["right", "forward", "left", "backward"],
      },
      {
        type: "circle-correct",
        title: "Move the Teddy",
        instruction:
          "Teddy is facing the board. Circle the correct answer.",
        questions: [
          {
            prompt: "Teddy walks towards the board. Teddy goes…",
            options: ["forward", "backward"],
          },
          {
            prompt: "Teddy walks away from the board without turning. Teddy goes…",
            options: ["forward", "backward"],
          },
          {
            prompt: "Teddy slides to the side nearest the window. Teddy goes…",
            options: ["left", "right"],
          },
          {
            prompt: "Teddy slides the other way, towards the door. Teddy goes…",
            options: ["left", "right"],
          },
        ],
      },
      {
        type: "sorting",
        title: "Sort the Direction Words",
        instruction:
          "Sort these words into two groups: words that mean going forward or backward, and words that mean going left or right.",
        columns: ["Forward / Backward", "Left / Right"],
        items: [
          { label: "ahead", icon: "car" },
          { label: "reverse", icon: "car" },
          { label: "left", icon: "ball" },
          { label: "right", icon: "ball" },
          { label: "forward", icon: "car" },
          { label: "backward", icon: "car" },
        ],
      },
      {
        type: "circle-correct",
        title: "Classroom Directions",
        instruction:
          "You are sitting at your desk, facing the teacher. Circle the right answer.",
        questions: [
          {
            prompt: "To walk to the teacher, you go…",
            options: ["forward", "backward", "left"],
          },
          {
            prompt: "To walk to the back of the room, you go…",
            options: ["forward", "backward", "right"],
          },
          {
            prompt: "Your friend sits on your right side. To pass them a pencil, you reach to the…",
            options: ["left", "right", "forward"],
          },
          {
            prompt: "The bin is behind you. To walk to the bin, you go…",
            options: ["forward", "backward", "left"],
          },
        ],
      },

      {
        type: "circle-correct",
        title: "At Home Directions",
        instruction:
          "Think about being at home. Circle the correct direction.",
        questions: [
          {
            prompt: "You walk towards the front door to go outside. You go…",
            options: ["forward", "backward", "left"],
          },
          {
            prompt: "You back away from the hot oven. You step…",
            options: ["forward", "backward", "right"],
          },
          {
            prompt: "The bathroom is on the left side of the hallway. You turn…",
            options: ["left", "right", "backward"],
          },
          {
            prompt: "Your sister's room is on the right. To get there you go…",
            options: ["left", "right", "backward"],
          },
        ],
      },

      // ─── Easy: Match Direction Words to Arrows / Symbols ───

      {
        type: "matching",
        title: "Direction Words and Symbols",
        instruction:
          "Draw a line from each direction to the matching arrow symbol.",
        left: ["go forward", "go backward", "go left", "go right"],
        right: ["→", "↑", "↓", "←"],
      },
      {
        type: "circle-correct",
        title: "Which Arrow?",
        instruction:
          "Read the direction. Circle the correct arrow.",
        questions: [
          {
            prompt: "Go forward",
            options: ["↑", "↓", "←", "→"],
          },
          {
            prompt: "Go backward",
            options: ["↑", "↓", "←", "→"],
          },
          {
            prompt: "Turn left",
            options: ["↑", "↓", "←", "→"],
          },
          {
            prompt: "Turn right",
            options: ["↑", "↓", "←", "→"],
          },
          {
            prompt: "Step right",
            options: ["↑", "↓", "←", "→"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Actions to Arrows",
        instruction:
          "Match each action to the arrow that shows which way you move.",
        left: [
          "Walk to the front of the room",
          "Walk to the back of the room",
          "Slide to your left",
          "Slide to your right",
        ],
        right: ["←", "→", "↑", "↓"],
      },

      // ─── Easy–Medium: Follow Simple 2-Step Directions ───

      {
        type: "circle-correct",
        title: "Two-Step Directions (1)",
        instruction:
          "Imagine following these directions. Circle the correct answer.",
        questions: [
          {
            prompt: "Go forward 3 steps. Then go right 2 steps. How many steps in total?",
            options: ["3", "5", "6"],
          },
          {
            prompt: "Go forward 2 steps, then go left 1 step. Which way did you turn?",
            options: ["left", "right", "forward"],
          },
          {
            prompt: "Take 4 steps forward. Then take 1 step backward. How many steps forward are you from where you started?",
            options: ["3", "4", "5"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Two-Step Directions (2)",
        instruction:
          "Read each pair of directions. Circle what happens.",
        questions: [
          {
            prompt: "Walk forward 2 steps. Turn left. Which way are you now facing?",
            options: ["forward", "left", "right"],
          },
          {
            prompt: "Walk forward 1 step. Turn right. Which way are you now facing?",
            options: ["forward", "left", "right"],
          },
          {
            prompt: "Take 3 steps backward. Turn left. You turned to the…",
            options: ["left", "right", "back"],
          },
          {
            prompt: "Step right, then step forward. How many steps did you take?",
            options: ["1", "2", "3"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Directions to What Happens",
        instruction:
          "Draw a line to match each pair of directions to the result.",
        left: [
          "Forward 2, turn left",
          "Forward 3, turn right",
          "Backward 1, turn left",
          "Left 2, forward 1",
        ],
        right: [
          "You end up to the left and 1 step forward",
          "You face left after moving forward",
          "You face right after moving forward",
          "You face left after stepping back",
        ],
      },
      {
        type: "circle-correct",
        title: "Two-Step Directions (3)",
        instruction:
          "Think about each pair of moves. Circle the answer.",
        questions: [
          {
            prompt: "Step forward 2, step left 1. How many moves did you make?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "Turn right, walk forward 4. Which direction did you walk?",
            options: ["forward", "right", "left"],
          },
          {
            prompt: "Walk backward 3, turn right. Are you still facing the same way?",
            options: ["yes", "no"],
          },
          {
            prompt: "Step left 1, step right 1. Where are you now?",
            options: ["back where you started", "1 step to the left", "1 step to the right"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Order the Steps — To the Door",
        instruction:
          "Number these steps in the correct order to walk from your desk to the classroom door.",
        items: [
          { label: "Stand up from your desk" },
          { label: "Walk 4 steps forward" },
          { label: "Turn left" },
          { label: "Walk 2 steps forward to the door" },
        ],
      },
      {
        type: "sequence",
        title: "Order the Steps — To the Bookshelf",
        instruction:
          "Number these steps in the correct order to get from the mat to the bookshelf.",
        items: [
          { label: "Stand up on the mat" },
          { label: "Turn right" },
          { label: "Walk 3 steps forward" },
          { label: "You are at the bookshelf!" },
        ],
      },
      {
        type: "circle-correct",
        title: "Follow My Steps",
        instruction:
          "A robot follows instructions exactly. Circle what happens.",
        questions: [
          {
            prompt: "Robot: Go forward 2, go left 1. How many moves did Robot make?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "Robot: Go right 3, go forward 1. Robot is now… steps to the right of where it started.",
            options: ["1", "3", "4"],
          },
          {
            prompt: "Robot: Go backward 2, go left 2. Robot made… moves in total.",
            options: ["2", "4", "6"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Does the Ball End Up?",
        instruction:
          "Imagine rolling a ball. Circle the answer.",
        questions: [
          {
            prompt: "You roll the ball forward, then it bounces left. The ball went in… directions.",
            options: ["1", "2", "3"],
          },
          {
            prompt: "You kick the ball forward 5 steps, then it rolls backward 2 steps. The ball is… steps in front of you.",
            options: ["2", "3", "5"],
          },
          {
            prompt: "The ball rolls right 3 steps, then forward 1 step. It moved… times.",
            options: ["2", "3", "4"],
          },
        ],
      },

      // ─── Medium: Give Directions Using 3–4 Steps ───

      {
        type: "sequence",
        title: "Order the Steps — Playground",
        instruction:
          "Put these directions in order to walk from the classroom to the playground.",
        items: [
          { label: "Walk out the door" },
          { label: "Turn right" },
          { label: "Walk forward 10 steps" },
          { label: "Turn left" },
          { label: "Walk forward 5 steps to the playground" },
        ],
      },
      {
        type: "sequence",
        title: "Order the Steps — Kitchen at Home",
        instruction:
          "Put these directions in order to walk from your bedroom to the kitchen.",
        items: [
          { label: "Walk out of your bedroom" },
          { label: "Turn left" },
          { label: "Walk forward along the hallway" },
          { label: "Turn right into the kitchen" },
        ],
      },
      {
        type: "open-response",
        title: "Write 3-Step Directions",
        instruction:
          "Write 3 steps to tell someone how to get from one place to another in your classroom.",
        prompts: [
          {
            text: "Where are you starting? (e.g. your desk, the door, the mat)",
            type: "lines",
            lines: 1,
          },
          {
            text: "Where are you going? (e.g. the bin, the bookshelf, the teacher's desk)",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write your 3 direction steps. Use words like forward, backward, left, right, turn.",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "open-response",
        title: "Give Directions to a Friend",
        instruction:
          "Imagine your friend is standing at the classroom door. Write 4 steps to help them get to your desk.",
        prompts: [
          {
            text: "Step 1:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Step 2:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Step 3:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Step 4:",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Steps?",
        instruction:
          "Count the direction steps. Circle the answer.",
        questions: [
          {
            prompt: "Forward 2, turn left, forward 3, turn right. How many steps is that?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "Right 1, forward 4, left 2. How many direction steps?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "Forward 3, turn right, forward 2, turn left, forward 1. How many direction steps?",
            options: ["3", "5", "6"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Following 3-Step Directions",
        instruction:
          "You are facing the board. Follow the directions in your mind. Circle the answer.",
        questions: [
          {
            prompt: "Step forward, turn right, step forward. You are now… of where you started.",
            options: ["in front and to the right", "behind and to the left", "in the same spot"],
          },
          {
            prompt: "Turn left, step forward, turn right. Which way are you now facing?",
            options: ["the board (same as before)", "the left wall", "the right wall"],
          },
          {
            prompt: "Step forward 3, turn right, step forward 2. How many steps did you take in total?",
            options: ["3", "5", "6"],
          },
        ],
      },

      // ─── Medium: Position Words — Next to, Behind, In Front of, Between, Above, Below ───

      {
        type: "circle-correct",
        title: "Where Is It? — In Front and Behind",
        instruction:
          "Read each sentence. Circle the correct position word.",
        questions: [
          {
            prompt: "The teacher stands at the board. The children sit… the teacher.",
            options: ["in front of", "behind", "between"],
          },
          {
            prompt: "The dog hides on the other side of the couch. The dog is… the couch.",
            options: ["in front of", "behind", "next to"],
          },
          {
            prompt: "You are first in the line. Everyone else is… you.",
            options: ["in front of", "behind", "between"],
          },
          {
            prompt: "The car parks facing the shop. The shop is… the car.",
            options: ["in front of", "behind", "next to"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Is It? — Next to and Between",
        instruction:
          "Read each sentence. Circle the correct position word.",
        questions: [
          {
            prompt: "The pencil is on the left side of the book. The pencil is… the book.",
            options: ["next to", "behind", "between"],
          },
          {
            prompt: "The cup is placed with a spoon on the left and a plate on the right. The cup is… the spoon and the plate.",
            options: ["next to", "behind", "between"],
          },
          {
            prompt: "Your chair is right beside your desk. Your chair is… your desk.",
            options: ["next to", "between", "in front of"],
          },
          {
            prompt: "Tuesday comes after Monday and before Wednesday. Tuesday is… Monday and Wednesday.",
            options: ["next to", "between", "behind"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Is It? — Above and Below",
        instruction:
          "Read each sentence. Circle the correct position word.",
        questions: [
          {
            prompt: "The clock is on the wall, high up. The clock is… the door.",
            options: ["above", "below", "next to"],
          },
          {
            prompt: "Your shoes are under the bed. Your shoes are… the bed.",
            options: ["above", "below", "between"],
          },
          {
            prompt: "The bird flies over the tree. The bird is… the tree.",
            options: ["above", "below", "behind"],
          },
          {
            prompt: "The mat is on the floor. The table is… the mat.",
            options: ["above", "below", "next to"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match Position Words to Pictures",
        instruction:
          "Match each position word to the sentence that describes it.",
        left: ["behind", "in front of", "next to", "between"],
        right: [
          "The cat is on one side of the dog.",
          "The tree is on the other side of the house, hidden.",
          "The ball is where you can see it, facing you.",
          "The book is in the middle of the pencil and the cup.",
        ],
      },
      {
        type: "sorting",
        title: "Sort Position Words",
        instruction:
          "Sort these position words into two groups.",
        columns: ["Up / Down words", "Side / Middle words"],
        items: [
          { label: "above", icon: "sun" },
          { label: "below", icon: "moon" },
          { label: "next to", icon: "teddy" },
          { label: "between", icon: "teddy" },
          { label: "over", icon: "sun" },
          { label: "under", icon: "moon" },
        ],
      },
      {
        type: "circle-correct",
        title: "Classroom Positions",
        instruction:
          "Think about your classroom. Circle the best answer.",
        questions: [
          {
            prompt: "The board is usually… the teacher's desk.",
            options: ["behind", "in front of", "below"],
          },
          {
            prompt: "The clock is usually… the children's heads.",
            options: ["above", "below", "between"],
          },
          {
            prompt: "The rubbish bin is usually… the teacher's desk.",
            options: ["next to", "above", "between"],
          },
          {
            prompt: "Your pencil case sits… your desk.",
            options: ["on top of", "below", "behind"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Describe Where Things Are",
        instruction:
          "Look around the room. Use position words to describe where things are.",
        prompts: [
          {
            text: "What is in front of you?",
            type: "lines",
            lines: 1,
          },
          {
            text: "What is behind you?",
            type: "lines",
            lines: 1,
          },
          {
            text: "What is next to you on the left?",
            type: "lines",
            lines: 1,
          },
          {
            text: "What is above you?",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Is the Cat?",
        instruction:
          "The cat is moving around the house. Circle the correct position word.",
        questions: [
          {
            prompt: "The cat sits on the mat near the door. The cat is… the door.",
            options: ["next to", "above", "between"],
          },
          {
            prompt: "The cat hides under the bed. The cat is… the bed.",
            options: ["below", "above", "in front of"],
          },
          {
            prompt: "The cat climbs on top of the cupboard. The cat is… the cupboard.",
            options: ["above", "below", "behind"],
          },
          {
            prompt: "The cat squeezes into the gap between the couch and the wall. The cat is… the couch and the wall.",
            options: ["between", "next to", "behind"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Position",
        instruction:
          "Match each sentence to the correct position word.",
        left: [
          "The bird is on top of the house",
          "The dog is under the table",
          "The ball is beside the chair",
          "The toy is in the middle of two boxes",
        ],
        right: ["between", "above", "below", "next to"],
      },
      {
        type: "circle-correct",
        title: "Position Word Challenge",
        instruction:
          "Circle the correct position word for each sentence.",
        questions: [
          {
            prompt: "The fish swims… the water.",
            options: ["in", "above", "next to"],
          },
          {
            prompt: "The picture hangs… the fireplace.",
            options: ["above", "below", "between"],
          },
          {
            prompt: "Mum sits… Dad and me on the couch.",
            options: ["between", "next to", "behind"],
          },
          {
            prompt: "The welcome mat is… the front door.",
            options: ["in front of", "behind", "above"],
          },
        ],
      },

      // ─── Medium–Hard: Quarter Turns, Half Turns, Full Turns ───

      {
        type: "circle-correct",
        title: "What Is a Turn?",
        instruction:
          "Read about each type of turn. Circle the correct answer.",
        questions: [
          {
            prompt: "A quarter turn is like the hands on a clock moving from 12 to…",
            options: ["3", "6", "9"],
          },
          {
            prompt: "A half turn is like the hands on a clock moving from 12 to…",
            options: ["3", "6", "9"],
          },
          {
            prompt: "A full turn means you spin all the way around and face the… direction as before.",
            options: ["same", "opposite", "left"],
          },
          {
            prompt: "If you make two quarter turns, that is the same as one…",
            options: ["quarter turn", "half turn", "full turn"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Quarter Turn Practice",
        instruction:
          "You are facing the board. Circle which way you face after the turn.",
        questions: [
          {
            prompt: "Make a quarter turn to the right. You now face the…",
            options: ["right wall", "left wall", "back of the room"],
          },
          {
            prompt: "Make a quarter turn to the left. You now face the…",
            options: ["right wall", "left wall", "back of the room"],
          },
          {
            prompt: "Make a quarter turn to the right, then another quarter turn to the right. You now face the…",
            options: ["board", "back of the room", "right wall"],
          },
          {
            prompt: "Make a quarter turn to the left, then another quarter turn to the left. You now face the…",
            options: ["board", "back of the room", "left wall"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Half Turn Practice",
        instruction:
          "You are facing the window. Circle which way you face after the turn.",
        questions: [
          {
            prompt: "Make a half turn. You now face the…",
            options: ["window", "opposite wall", "left wall"],
          },
          {
            prompt: "Make another half turn. You now face the…",
            options: ["window", "opposite wall", "right wall"],
          },
          {
            prompt: "Make a half turn, then a quarter turn to the right. You now face the…",
            options: ["left wall", "right wall", "window"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Turn",
        instruction:
          "Match each turn to how far around you spin.",
        left: ["quarter turn", "half turn", "full turn", "three-quarter turn"],
        right: [
          "all the way around — face the same way",
          "a small turn — like 12 to 3 on a clock",
          "halfway around — face the opposite way",
          "most of the way around — like 12 to 9 on a clock",
        ],
      },
      {
        type: "sorting",
        title: "Sort the Turns",
        instruction:
          "Sort these descriptions into the correct type of turn.",
        columns: ["Quarter Turn", "Half Turn", "Full Turn"],
        items: [
          { label: "Spin all the way around", icon: "clock" },
          { label: "Face the opposite way", icon: "clock" },
          { label: "Turn to face the side", icon: "clock" },
          { label: "Like 12 to 3 on a clock", icon: "clock" },
          { label: "Like 12 to 6 on a clock", icon: "clock" },
          { label: "End up the same way", icon: "clock" },
        ],
      },
      {
        type: "circle-correct",
        title: "Turn and Face",
        instruction:
          "You are facing the door. Circle the answer.",
        questions: [
          {
            prompt: "Quarter turn right → you face the…",
            options: ["right wall", "left wall", "door"],
          },
          {
            prompt: "Half turn → you face…",
            options: ["the door", "away from the door", "the right wall"],
          },
          {
            prompt: "Full turn → you face…",
            options: ["the door", "away from the door", "the left wall"],
          },
          {
            prompt: "Quarter turn left → you face the…",
            options: ["left wall", "right wall", "door"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "How Much Did I Turn?",
        instruction:
          "Read each clue. Circle the type of turn.",
        questions: [
          {
            prompt: "I was facing north. Now I face south. I made a…",
            options: ["quarter turn", "half turn", "full turn"],
          },
          {
            prompt: "I was facing the TV. Now I face the side wall. I made a…",
            options: ["quarter turn", "half turn", "full turn"],
          },
          {
            prompt: "I spun around and I'm facing the same way. I made a…",
            options: ["quarter turn", "half turn", "full turn"],
          },
          {
            prompt: "I was facing Mum. Now I face the kitchen on my right. I made a…",
            options: ["quarter turn right", "half turn", "full turn"],
          },
        ],
      },

      {
        type: "open-response",
        title: "Draw the Turns",
        instruction:
          "For each turn, draw an arrow showing which way you would face. Start by facing up (↑).",
        prompts: [
          {
            text: "Quarter turn to the right → Draw an arrow showing which way you now face.",
            type: "box",
          },
          {
            text: "Half turn → Draw an arrow showing which way you now face.",
            type: "box",
          },
          {
            text: "Quarter turn to the left → Draw an arrow showing which way you now face.",
            type: "box",
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Clock Face Turns",
        instruction:
          "Think of a clock. The hand starts at 12 (pointing up). Circle the answer.",
        questions: [
          {
            prompt: "The hand moves from 12 to 3. That is a…",
            options: ["quarter turn", "half turn", "full turn"],
          },
          {
            prompt: "The hand moves from 12 to 9. That is a…",
            options: ["quarter turn", "three-quarter turn", "half turn"],
          },
          {
            prompt: "The hand moves from 12 all the way back to 12. That is a…",
            options: ["quarter turn", "half turn", "full turn"],
          },
          {
            prompt: "The hand moves from 3 to 9. That is a…",
            options: ["quarter turn", "half turn", "full turn"],
          },
        ],
      },

      // ─── Hard: Multi-Step Direction Sequences ───

      {
        type: "circle-correct",
        title: "Follow the Long Path (1)",
        instruction:
          "Imagine following these directions. Circle the correct answer.",
        questions: [
          {
            prompt: "Start facing forward. Step forward 2. Turn right. Step forward 3. Turn left. Step forward 1. How many steps did you take?",
            options: ["5", "6", "7"],
          },
          {
            prompt: "Start facing the board. Quarter turn right. Walk forward 4. Half turn. Walk forward 2. You are now… steps from where you turned.",
            options: ["2", "4", "6"],
          },
          {
            prompt: "Step forward 3. Turn left. Step forward 2. Turn left. Step forward 3. You are now facing…",
            options: ["the same way you started", "backward from where you started", "to the right"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Follow the Long Path (2)",
        instruction:
          "Read the directions carefully. Circle the answer.",
        questions: [
          {
            prompt: "Forward 1, right 1, forward 1, left 1, forward 1. How many steps altogether?",
            options: ["4", "5", "6"],
          },
          {
            prompt: "Forward 3, half turn, forward 3. Where are you now?",
            options: ["back where you started", "6 steps forward", "3 steps forward"],
          },
          {
            prompt: "Quarter turn right, forward 2, quarter turn right, forward 2, quarter turn right, forward 2, quarter turn right, forward 2. Where are you?",
            options: ["back where you started", "8 steps to the right", "far away"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Order the Steps — Library Trip",
        instruction:
          "Put these directions in order to walk from your classroom to the library.",
        items: [
          { label: "Walk out of the classroom door" },
          { label: "Turn right into the hallway" },
          { label: "Walk forward 20 steps" },
          { label: "Turn left at the drinking fountain" },
          { label: "Walk forward 10 steps" },
          { label: "The library is on your right" },
        ],
      },
      {
        type: "sequence",
        title: "Order the Steps — Obstacle Course",
        instruction:
          "Put these obstacle course directions in the right order.",
        items: [
          { label: "Start at the cone" },
          { label: "Walk forward 5 steps" },
          { label: "Turn left around the chair" },
          { label: "Crawl forward under the table" },
          { label: "Stand up and turn right" },
          { label: "Walk forward 3 steps to the finish line" },
        ],
      },

      // ─── Hard: Grid-Based Directions ───

      {
        type: "circle-correct",
        title: "Grid Directions (1)",
        instruction:
          "Imagine a grid with squares. You start in the bottom-left corner facing up (↑). Circle the answer.",
        questions: [
          {
            prompt: "Move forward 2 squares, turn right, move forward 1 square. How many squares did you move?",
            options: ["2", "3", "4"],
          },
          {
            prompt: "Move forward 3 squares, turn right, move forward 3 squares. What shape have you started to trace?",
            options: ["A triangle", "An L-shape", "A circle"],
          },
          {
            prompt: "Move forward 1, right 1, forward 1, right 1. You went in a… shape.",
            options: ["straight line", "zigzag", "circle"],
          },
          {
            prompt: "Move forward 4, turn left, move forward 2. Where are you compared to start?",
            options: ["4 up and 2 to the left", "6 squares forward", "2 squares to the right"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Grid Directions (2)",
        instruction:
          "You are on a grid. You start at the red dot facing up (↑). Circle the correct answer.",
        questions: [
          {
            prompt: "Forward 2, right 2, backward 2, left 2. What shape did you make?",
            options: ["square", "triangle", "line"],
          },
          {
            prompt: "Forward 3, right 1, backward 1, right 1, forward 1. How many squares did you visit (not counting start)?",
            options: ["5", "6", "7"],
          },
          {
            prompt: "Forward 1, quarter turn right, forward 1, quarter turn right, forward 1, quarter turn right, forward 1. Where do you end up?",
            options: ["where you started", "2 squares forward", "1 square to the right"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Draw the Path on a Grid",
        instruction:
          "Follow the directions and draw the path on the grid below.",
        prompts: [
          {
            text: "Start at the bottom-left corner. Go forward 3 squares. Turn right. Go forward 2 squares. Turn right. Go forward 3 squares. What shape did you draw? Write the shape name.",
            type: "lines",
            lines: 1,
          },
          {
            text: "Draw the path you followed on the grid.",
            type: "box",
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Grid Directions",
        instruction:
          "Write directions to move from one corner of a 4x4 grid to the opposite corner.",
        prompts: [
          {
            text: "Write step-by-step directions using forward, backward, left, right, and turn. Try to find the shortest path!",
            type: "lines",
            lines: 4,
          },
          {
            text: "How many steps was your path?",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // ─── Challenge: Write Own Directions, Reason About Turns and Facing ───

      {
        type: "open-response",
        title: "Direction Writing Challenge (1)",
        instruction:
          "Write directions to get from the school gate to your classroom. Use as many direction words as you can!",
        prompts: [
          {
            text: "Write at least 5 steps. Use words like: forward, backward, left, right, turn, quarter turn, half turn, next to, between.",
            type: "lines",
            lines: 6,
          },
          {
            text: "How many different direction words did you use? Write the number.",
            type: "lines",
            lines: 1,
          },
        ],
      },
      {
        type: "open-response",
        title: "Direction Writing Challenge (2)",
        instruction:
          "Write directions for a friend to walk from the classroom to the playground. Your friend has never been to your school before!",
        prompts: [
          {
            text: "Write clear, step-by-step directions. Remember to say how many steps and which way to turn.",
            type: "lines",
            lines: 6,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Turn Detective",
        instruction:
          "Think carefully about turns. Circle the correct answer.",
        questions: [
          {
            prompt: "If you make four quarter turns to the right, that is the same as…",
            options: ["one full turn", "one half turn", "three quarter turns"],
          },
          {
            prompt: "Two half turns is the same as…",
            options: ["one full turn", "one quarter turn", "one half turn"],
          },
          {
            prompt: "You face north. You make a quarter turn left. You now face…",
            options: ["west", "east", "south"],
          },
          {
            prompt: "You face the door. You make a three-quarter turn to the right. That is the same as a quarter turn to the…",
            options: ["left", "right", "back"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Tricky Turns",
        instruction:
          "These are tricky! Think carefully. Circle the correct answer.",
        questions: [
          {
            prompt: "I make a half turn. Then I make another half turn. I am now facing…",
            options: ["the same way I started", "the opposite way", "to my left"],
          },
          {
            prompt: "I make 3 quarter turns to the right. That is the same as 1 quarter turn to the…",
            options: ["right", "left", "forward"],
          },
          {
            prompt: "I face the window. I make a quarter turn right, then a half turn. I now face the…",
            options: ["left wall", "right wall", "window"],
          },
          {
            prompt: "I make a full turn, then a half turn. I am now facing…",
            options: ["the opposite way from start", "the same way", "to my right"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Explain the Turn",
        instruction:
          "Answer these questions in your own words.",
        prompts: [
          {
            text: "What is the difference between a quarter turn and a half turn?",
            type: "lines",
            lines: 2,
          },
          {
            text: "If you are lost, why is it important to know left and right?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Why do we need to give clear directions? What could go wrong if the directions are not clear?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Design a Treasure Map",
        instruction:
          "Design your own treasure map! Draw a simple map and write directions to find the treasure.",
        prompts: [
          {
            text: "Draw your treasure map here. Include a start point (marked with a star) and a treasure (marked with an X).",
            type: "box",
          },
          {
            text: "Write the directions to get from the star to the treasure. Use at least 5 direction words.",
            type: "lines",
            lines: 5,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Reverse Directions",
        instruction:
          "If you followed directions one way, what would you do to go back? Circle the answer.",
        questions: [
          {
            prompt: "You went forward 3 steps. To go back, you go… 3 steps.",
            options: ["forward", "backward", "left"],
          },
          {
            prompt: "You turned left. To undo that turn, you turn…",
            options: ["left", "right", "around"],
          },
          {
            prompt: "You went: forward 2, turn right, forward 1. To return, you go: backward 1, turn…, backward 2.",
            options: ["left", "right", "around"],
          },
          {
            prompt: "You made a half turn. To undo it, you make another…",
            options: ["quarter turn", "half turn", "full turn"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Giving Good Directions",
        instruction:
          "Which set of directions is clearest? Circle the best one.",
        questions: [
          {
            prompt: "How to get to the office:",
            options: [
              "Go that way and then turn",
              "Walk forward 10 steps, turn left, walk forward 5 steps",
              "Go over there",
            ],
          },
          {
            prompt: "How to find the book:",
            options: [
              "It is over there on the thing",
              "It is on the second shelf, next to the red folder",
              "Go find it yourself",
            ],
          },
          {
            prompt: "How to get to the park:",
            options: [
              "Walk forward to the corner, turn right, the park is on your left",
              "Just go straight",
              "Keep walking and you will find it",
            ],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Fix the Directions",
        instruction:
          "Something is wrong with each set of directions. Circle the mistake.",
        questions: [
          {
            prompt: "To get to the office: 'Walk forward 5 steps, turn up, walk forward 3 steps.' What is wrong?",
            options: ["'Turn up' is not a direction — it should be turn left or right", "Nothing is wrong", "There are too many steps"],
          },
          {
            prompt: "To get to the library: 'Turn left, turn left, turn left.' What is the problem?",
            options: ["There is no walking — only turning!", "Turning left is wrong", "It should be right"],
          },
          {
            prompt: "To get to the playground: 'Walk forward.' What is missing?",
            options: ["How many steps to walk", "The word please", "A turn"],
          },
        ],
      },
      {
        type: "sequence",
        title: "Reverse the Route",
        instruction:
          "The directions below go FROM the library TO the classroom. Number them in reverse order to go FROM the classroom TO the library.",
        items: [
          { label: "Turn left out of the classroom door" },
          { label: "Walk forward 8 steps" },
          { label: "Turn right" },
          { label: "Walk forward 5 steps into the library" },
        ],
      },
      {
        type: "circle-correct",
        title: "Left or Right? — Tricky!",
        instruction:
          "Think carefully about these tricky questions. Circle the answer.",
        questions: [
          {
            prompt: "You face a friend. Your friend raises their right hand. From YOUR view, their hand is on your…",
            options: ["left", "right"],
          },
          {
            prompt: "You face a mirror. You wave your right hand. The mirror shows the wave on the…",
            options: ["left side", "right side"],
          },
          {
            prompt: "You and your friend both face the board. You are on your friend's left. Your friend is on your…",
            options: ["right", "left"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Direction Word Roundup",
        instruction:
          "How many direction and position words can you remember? Write as many as you can!",
        prompts: [
          {
            text: "Write all the direction and position words you know. (Hint: think of forward, backward, left, right, turns, and position words like behind, above…)",
            type: "lines",
            lines: 4,
          },
          {
            text: "Pick 3 of your words and write a sentence using each one.",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "sorting",
        title: "Direction Words vs Position Words",
        instruction:
          "Sort these words. Direction words tell you how to MOVE. Position words tell you WHERE something IS.",
        columns: ["Direction Words (move)", "Position Words (where)"],
        items: [
          { label: "forward", icon: "car" },
          { label: "behind", icon: "teddy" },
          { label: "turn left", icon: "car" },
          { label: "next to", icon: "teddy" },
          { label: "backward", icon: "car" },
          { label: "between", icon: "teddy" },
          { label: "turn right", icon: "car" },
          { label: "above", icon: "teddy" },
        ],
      },
      {
        type: "open-response",
        title: "Real Life Directions",
        instruction:
          "Think about a time you needed to give or follow directions. Answer these questions.",
        prompts: [
          {
            text: "When have you needed to follow directions? (e.g. finding a room, playing a game, following a recipe)",
            type: "lines",
            lines: 2,
          },
          {
            text: "Write directions from your front door to your favourite room at home.",
            type: "lines",
            lines: 4,
          },
          {
            text: "What position words describe where your bed is in your room? (e.g. next to the wall, between the window and the door)",
            type: "lines",
            lines: 2,
          },
        ],
      },

      // ─── Home Activities ───

      {
        type: "home-activity",
        title: "Home Activity: Direction Treasure Hunt",
        instruction:
          "Play a direction game with someone at home!",
        suggestions: [
          "Hide a toy and write 3-step directions for someone to find it using forward, backward, left, and right.",
          "Play 'Robot': one person gives directions, the other follows them exactly — no peeking!",
          "Use masking tape to make a grid on the floor. Take turns giving directions to move across the grid.",
          "Give directions to walk from your bedroom to the kitchen using only direction words.",
          "Practise quarter turns, half turns, and full turns. Can you spin exactly a quarter turn with your eyes closed?",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Position Word Scavenger Hunt",
        instruction:
          "Go on a position word scavenger hunt around your home!",
        suggestions: [
          "Find something that is ABOVE the TV.",
          "Find something that is BEHIND the couch.",
          "Find something that is BETWEEN two other things.",
          "Find something that is NEXT TO your bed.",
          "Find something that is IN FRONT OF the fridge.",
          "Draw a map of your room and label items using position words: next to, between, above, below, behind, in front of.",
        ],
      },
    ],
    nextSteps: ["categorical-data-displays"],
  },

  // ── WS 11: Categorical Data Displays (Statistics) ───────────
  {
    slug: "categorical-data-displays",
    title: "Categorical Data Displays",
    strand: "Statistics",
    description:
      "Collect and record categorical data, create one-to-one displays, and compare data using frequencies",
    lesson: {
      title: "Our Data — Collecting, Tallying and Comparing",
      objective: "Collect real categorical data by asking a question, record it using tally marks, display it in a picture graph, and compare the groups.",
      materials: [
        "Paper and pencil",
        "A ruler or the edge of a book to draw straight lines",
        "5–10 small objects to sort into categories — e.g. a mixed bag of items from a junk drawer",
        "Family members or a few stuffed toys to survey",
      ],
      intro: {
        title: "The Sorting Question",
        script: "Let\'s think of a question we can ask that has a few different answers. How about — what is your favourite fruit? Apple, banana, or strawberry? We can ask everyone in our house and keep track of the answers. But we need a good way to record them — that\'s where tally marks come in!",
        action: "Demonstrate tally marks: draw four vertical lines and then cross with a diagonal for five. Practice making tallies for numbers 1–8 together. Explain that bundling in fives makes counting faster.",
      },
      mainActivity: {
        title: "Survey and Display",
        script: "Let\'s make a tally chart! Draw three rows — one for each answer choice. Now go and ask your question to whoever is home. For each answer, put a tally mark in the right row. Once we have all the answers, count up each row. Which answer got the most votes?",
        action: "Help your child rule up a simple tally chart with 2–3 categories. Conduct the survey together (ask family members or use stuffed toys as stand-ins). Count the tallies, then transfer the results into a simple picture graph by drawing one symbol per vote in rows.",
      },
      wrapUp: {
        title: "What Does the Data Tell Us?",
        script: "Now let us write down what we found out. Start your sentence like this: 'We found out that ___ was most popular, with ___ votes.' Can you finish it?",
        action: "Ask your child 3–4 questions about the data: most, least, how many more, total. Encourage them to point to the graph as they answer. Finish by asking them to write one sentence that describes what they found.",
      },
      parentTip: "The most common mistake with data displays is children drawing pictures instead of making a true graph where each item represents exactly one unit. Check that each item in their graph is the same size and counts for exactly one thing — this discipline sets up correct graph-reading for years to come.",
      extension: "Run a week-long 'Weather Tally'. Each morning your child looks outside, decides on the weather (sunny, cloudy, rainy, windy), and adds a tally mark to a chart on the fridge. At the end of the week, transfer the tallies to a bar graph and read the results together.",
      resources: [
        { title: "Khan Academy – Data and Graphs", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-measurement", description: "Year 1 data collection and simple graph display activities." },
        { title: "Maths is Fun – Data", url: "https://www.mathsisfun.com/data/index.html", description: "Introduction to collecting, tallying and displaying data in graphs." },
        { title: "NRICH – Data Handling", url: "https://nrich.maths.org/early-years", description: "Investigative data activities for early primary learners." },
      ],
    },
    activities: [
      // ─── Easy: Count and Tally ───
      {
        type: "tally-chart",
        title: "Tally the Stars and Hearts",
        instruction:
          "Count each type of object. Make a tally mark for each one you see.",
        categories: [
          { label: "Stars", icon: "star", count: 3 },
          { label: "Hearts", icon: "heart", count: 5 },
          { label: "Flowers", icon: "flower", count: 2 },
        ],
      },
      {
        type: "tally-chart",
        title: "Tally the Fruit",
        instruction:
          "Count the fruit in each group. Write tally marks to show how many.",
        categories: [
          { label: "Apples", icon: "apple", count: 4 },
          { label: "Bananas", icon: "banana", count: 6 },
          { label: "Grapes", icon: "grape", count: 3 },
        ],
      },
      {
        type: "tally-chart",
        title: "Tally the Animals",
        instruction:
          "How many of each animal can you see? Use tally marks to count them.",
        categories: [
          { label: "Cats", icon: "cat", count: 5 },
          { label: "Dogs", icon: "dog", count: 3 },
          { label: "Birds", icon: "bird", count: 4 },
        ],
      },
      {
        type: "tally-chart",
        title: "Tally the Shapes",
        instruction:
          "Count the shapes. Remember, a tally of 5 is four lines with a diagonal line through them!",
        categories: [
          { label: "Circles", icon: "circle", count: 6 },
          { label: "Squares", icon: "square", count: 4 },
          { label: "Triangles", icon: "triangle", count: 5 },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Record",
        instruction:
          "Count how many objects are in each row. Write the number in the box.",
        rows: [
          { object: "star", count: 4 },
          { object: "heart", count: 6 },
          { object: "flower", count: 3 },
          { object: "fish", count: 5 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Toys",
        instruction:
          "Count each type of toy carefully. Write the total next to each row.",
        rows: [
          { object: "ball", count: 5 },
          { object: "teddy", count: 3 },
          { object: "car", count: 7 },
          { object: "book", count: 4 },
        ],
      },
      {
        type: "tally-chart",
        title: "Tally Our Favourite Things",
        instruction:
          "Some children chose their favourite thing. Count the tally marks for each one.",
        categories: [
          { label: "Sun", icon: "sun", count: 4 },
          { label: "Moon", icon: "moon", count: 2 },
          { label: "Stars", icon: "star", count: 7 },
          { label: "Flowers", icon: "flower", count: 3 },
        ],
      },
      {
        type: "tally-chart",
        title: "Tally the Classroom Objects",
        instruction:
          "Count each type of object your teacher has put on the table. Make tally marks.",
        categories: [
          { label: "Pencils", icon: "pencil", count: 6 },
          { label: "Books", icon: "book", count: 4 },
          { label: "Cups", icon: "cup", count: 3 },
          { label: "Spoons", icon: "spoon", count: 5 },
        ],
      },

      // ─── Easy–Medium: Read Simple Picture Graphs ───
      {
        type: "picture-graph",
        title: "Favourite Fruit Picture Graph",
        instruction:
          "Look at the picture graph. Each picture stands for 1 child's vote. Answer the questions.",
        rows: [
          { label: "Apples", icon: "apple", count: 5 },
          { label: "Bananas", icon: "banana", count: 3 },
          { label: "Grapes", icon: "grape", count: 4 },
        ],
        questions: [
          "Which fruit got the most votes?",
          "Which fruit got the fewest votes?",
          "How many children voted altogether?",
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Animal Picture Graph",
        instruction:
          "This picture graph shows which animals children like best. Answer the questions.",
        rows: [
          { label: "Cats", icon: "cat", count: 6 },
          { label: "Dogs", icon: "dog", count: 4 },
          { label: "Birds", icon: "bird", count: 2 },
          { label: "Fish", icon: "fish", count: 5 },
        ],
        questions: [
          "Which animal is the most popular?",
          "Which animal is the least popular?",
          "How many children chose cats or dogs?",
          "How many children voted altogether?",
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Colour Picture Graph",
        instruction:
          "Each picture shows one child's favourite colour. Read the graph and answer below.",
        rows: [
          { label: "Red hearts", icon: "heart", count: 4 },
          { label: "Yellow stars", icon: "star", count: 7 },
          { label: "Blue diamonds", icon: "diamond", count: 3 },
          { label: "Green trees", icon: "tree", count: 5 },
        ],
        questions: [
          "Which colour is the most popular?",
          "Which colour is the least popular?",
          "How many children chose red or blue?",
        ],
      },
      {
        type: "circle-correct",
        title: "Reading the Fruit Graph",
        instruction:
          "Use the picture graph of favourite fruits to circle the correct answer.",
        questions: [
          {
            prompt: "How many children chose apples?",
            options: ["3", "5", "4"],
          },
          {
            prompt: "Which fruit had 3 votes?",
            options: ["Apples", "Bananas", "Grapes"],
          },
          {
            prompt: "How many children voted altogether?",
            options: ["10", "12", "15"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading the Animal Graph",
        instruction:
          "Look at the picture graph of favourite animals. Circle the right answer for each question.",
        questions: [
          {
            prompt: "How many more cats than birds?",
            options: ["2", "4", "6"],
          },
          {
            prompt: "How many children chose fish?",
            options: ["3", "5", "7"],
          },
          {
            prompt: "Which animal had 4 votes?",
            options: ["Cats", "Dogs", "Fish"],
          },
          {
            prompt: "How many children voted in total?",
            options: ["15", "17", "20"],
          },
        ],
      },
      {
        type: "picture-graph",
        title: "Shapes We Found",
        instruction:
          "We looked around the classroom and found these shapes. Read the graph and answer the questions.",
        rows: [
          { label: "Circles", icon: "circle", count: 6 },
          { label: "Squares", icon: "square", count: 4 },
          { label: "Triangles", icon: "triangle", count: 3 },
        ],
        questions: [
          "Which shape did we find the most?",
          "Which shape did we find the least?",
          "How many shapes did we find altogether?",
        ],
      },
      {
        type: "picture-graph",
        title: "Toys in the Toy Box",
        instruction:
          "We sorted the toys. Each picture shows 1 toy. Answer the questions.",
        rows: [
          { label: "Balls", icon: "ball", count: 5 },
          { label: "Teddies", icon: "teddy", count: 3 },
          { label: "Cars", icon: "car", count: 7 },
          { label: "Books", icon: "book", count: 2 },
        ],
        questions: [
          "Which toy do we have the most of?",
          "Which toy do we have the least of?",
          "How many balls and teddies altogether?",
          "How many more cars than books?",
        ],
      },

      // ─── Medium: Create Tally Charts from Data ───
      {
        type: "tally-chart",
        title: "Favourite Ice Cream Flavours",
        instruction:
          "These children told us their favourite ice cream. Make a tally chart: chocolate (5), vanilla (3), strawberry (6), mint (2).",
        categories: [
          { label: "Chocolate", icon: "circle", count: 5 },
          { label: "Vanilla", icon: "star", count: 3 },
          { label: "Strawberry", icon: "heart", count: 6 },
          { label: "Mint", icon: "diamond", count: 2 },
        ],
      },
      {
        type: "tally-chart",
        title: "Favourite Sports",
        instruction:
          "Ask your friends their favourite sport and make tally marks as they answer.",
        categories: [
          { label: "Soccer", icon: "ball", count: 7 },
          { label: "Swimming", icon: "fish", count: 4 },
          { label: "Running", icon: "star", count: 3 },
          { label: "Cycling", icon: "circle", count: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "How We Get to School",
        instruction:
          "Record how each child gets to school. One tally mark for each child.",
        categories: [
          { label: "Walk", icon: "tree", count: 8 },
          { label: "Car", icon: "car", count: 6 },
          { label: "Bus", icon: "house", count: 3 },
          { label: "Bike", icon: "circle", count: 4 },
        ],
      },
      {
        type: "tally-chart",
        title: "Pets at Home",
        instruction:
          "We asked our class what pets they have at home. Make a tally for each answer.",
        categories: [
          { label: "Dogs", icon: "dog", count: 7 },
          { label: "Cats", icon: "cat", count: 5 },
          { label: "Fish", icon: "fish", count: 3 },
          { label: "Birds", icon: "bird", count: 2 },
        ],
      },
      {
        type: "tally-chart",
        title: "Favourite Drinks",
        instruction:
          "Tally each child's favourite drink. Remember to cross at 5!",
        categories: [
          { label: "Water", icon: "cup", count: 6 },
          { label: "Juice", icon: "bottle", count: 8 },
          { label: "Milk", icon: "cup", count: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Make Your Own Tally Chart",
        instruction:
          "Choose a question to ask 5 friends. Record their answers as tally marks.",
        prompts: [
          {
            text: "What question will you ask?",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write each friend's name and answer:",
            type: "lines",
            lines: 5,
          },
          {
            text: "Now draw a tally chart in the box below:",
            type: "box",
          },
        ],
      },

      // ─── Medium: Sort Items into Categories ───
      {
        type: "sorting",
        title: "Sort the Animals and Fruit",
        instruction:
          "Sort these items into two groups: Animals and Fruit. Then count how many are in each group.",
        columns: ["Animals", "Fruit"],
        items: [
          { label: "cat", icon: "cat" },
          { label: "apple", icon: "apple" },
          { label: "dog", icon: "dog" },
          { label: "banana", icon: "banana" },
          { label: "bird", icon: "bird" },
          { label: "grape", icon: "grape" },
        ],
      },
      {
        type: "sorting",
        title: "Sort the Shapes",
        instruction:
          "Sort these shapes into groups. Count how many of each shape there are.",
        columns: ["Round shapes", "Shapes with corners"],
        items: [
          { label: "circle", icon: "circle" },
          { label: "triangle", icon: "triangle" },
          { label: "sphere", icon: "sphere" },
          { label: "square", icon: "square" },
          { label: "circle", icon: "circle" },
          { label: "diamond", icon: "diamond" },
        ],
      },
      {
        type: "sorting",
        title: "Sort Living and Non-Living",
        instruction:
          "Sort these into Living Things and Non-Living Things. How many are in each group?",
        columns: ["Living Things", "Non-Living Things"],
        items: [
          { label: "cat", icon: "cat" },
          { label: "car", icon: "car" },
          { label: "tree", icon: "tree" },
          { label: "book", icon: "book" },
          { label: "bird", icon: "bird" },
          { label: "cup", icon: "cup" },
          { label: "dog", icon: "dog" },
          { label: "pencil", icon: "pencil" },
        ],
      },
      {
        type: "sorting",
        title: "Sort into Three Groups",
        instruction:
          "Sort these items into three groups: Animals, Fruit, and Things in a House.",
        columns: ["Animals", "Fruit", "Things in a House"],
        items: [
          { label: "cat", icon: "cat" },
          { label: "apple", icon: "apple" },
          { label: "cup", icon: "cup" },
          { label: "dog", icon: "dog" },
          { label: "banana", icon: "banana" },
          { label: "spoon", icon: "spoon" },
          { label: "fish", icon: "fish" },
          { label: "grape", icon: "grape" },
          { label: "book", icon: "book" },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Where You Find Them",
        instruction:
          "Sort these into things you find Outdoors and things you find Indoors.",
        columns: ["Outdoors", "Indoors"],
        items: [
          { label: "tree", icon: "tree" },
          { label: "clock", icon: "clock" },
          { label: "sun", icon: "sun" },
          { label: "book", icon: "book" },
          { label: "bird", icon: "bird" },
          { label: "cup", icon: "cup" },
          { label: "flower", icon: "flower" },
          { label: "spoon", icon: "spoon" },
        ],
      },

      // ─── Medium: Matching ───
      {
        type: "matching",
        title: "Match the Tally to the Number",
        instruction:
          "Draw a line from each tally to the correct number.",
        left: ["IIII", "III", "IIII I", "II"],
        right: ["2", "4", "3", "6"],
      },
      {
        type: "matching",
        title: "Match the Category to Its Count",
        instruction:
          "We counted animals at the farm. Match each animal to the number we counted.",
        left: ["Dogs — IIII II", "Cats — III", "Birds — IIII", "Fish — IIII I"],
        right: ["3", "7", "4", "6"],
      },
      {
        type: "matching",
        title: "Match the Graph Question to the Answer",
        instruction:
          "Match each question about our favourite fruit graph to the correct answer.",
        left: [
          "Most popular fruit?",
          "Least popular fruit?",
          "How many chose apples?",
          "Total votes?",
        ],
        right: ["Grapes", "Bananas", "5", "15"],
      },

      // ─── Medium–Hard: Compare Data ───
      {
        type: "picture-graph",
        title: "Favourite Pets — Compare",
        instruction:
          "Look at the picture graph and answer questions about comparing the data.",
        rows: [
          { label: "Dogs", icon: "dog", count: 8 },
          { label: "Cats", icon: "cat", count: 5 },
          { label: "Fish", icon: "fish", count: 3 },
          { label: "Birds", icon: "bird", count: 4 },
        ],
        questions: [
          "How many more dogs than cats?",
          "How many fewer fish than dogs?",
          "How many pets altogether?",
          "Which two pets together make 8?",
        ],
      },
      {
        type: "circle-correct",
        title: "Compare: Favourite Fruits",
        instruction:
          "We asked 20 children about their favourite fruit: apples (7), bananas (4), grapes (6), watermelons (3). Circle the correct answer.",
        questions: [
          {
            prompt: "Which fruit was the most popular?",
            options: ["Apples", "Bananas", "Grapes"],
          },
          {
            prompt: "How many more apples than watermelons?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "How many children chose bananas or grapes?",
            options: ["8", "10", "12"],
          },
          {
            prompt: "Which fruit was chosen by the fewest children?",
            options: ["Bananas", "Grapes", "Watermelons"],
          },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare: Favourite Colours",
        instruction:
          "A class voted on favourite colours: red (6), blue (8), green (4), yellow (2). Circle the correct answer.",
        questions: [
          {
            prompt: "Which colour was most popular?",
            options: ["Red", "Blue", "Green"],
          },
          {
            prompt: "How many more blue than yellow?",
            options: ["4", "6", "8"],
          },
          {
            prompt: "How many children chose red or green?",
            options: ["8", "10", "12"],
          },
          {
            prompt: "How many children voted altogether?",
            options: ["18", "20", "22"],
          },
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Sports — Compare",
        instruction:
          "Read the picture graph about favourite sports and answer the comparison questions.",
        rows: [
          { label: "Soccer", icon: "ball", count: 9 },
          { label: "Swimming", icon: "fish", count: 5 },
          { label: "Running", icon: "star", count: 3 },
          { label: "Tennis", icon: "circle", count: 6 },
        ],
        questions: [
          "Which sport is the most popular?",
          "How many more children chose soccer than running?",
          "How many fewer children chose running than tennis?",
          "How many children chose swimming or tennis?",
          "How many children were asked altogether?",
        ],
      },
      {
        type: "circle-correct",
        title: "More, Less, or Equal?",
        instruction:
          "Our class has: 5 dogs, 5 cats, 3 birds, 7 fish. Circle the correct answer.",
        questions: [
          {
            prompt: "Do we have more dogs or cats?",
            options: ["More dogs", "More cats", "Same number"],
          },
          {
            prompt: "Which pet do we have the fewest of?",
            options: ["Dogs", "Birds", "Fish"],
          },
          {
            prompt: "How many more fish than birds?",
            options: ["3", "4", "5"],
          },
          {
            prompt: "How many pets altogether?",
            options: ["18", "20", "22"],
          },
        ],
      },
      {
        type: "picture-graph",
        title: "Snack Time — Compare",
        instruction:
          "We counted snacks in the lunchbox. Look at the graph and answer the questions.",
        rows: [
          { label: "Apples", icon: "apple", count: 4 },
          { label: "Bananas", icon: "banana", count: 6 },
          { label: "Grapes", icon: "grape", count: 3 },
          { label: "Watermelons", icon: "watermelon", count: 2 },
        ],
        questions: [
          "Which snack appears the most?",
          "Which snack appears the least?",
          "How many more bananas than watermelons?",
          "How many pieces of fruit altogether?",
        ],
      },
      {
        type: "tally-chart",
        title: "Tally and Compare — Favourite Seasons",
        instruction:
          "Make tally marks for each season. Then answer: Which season is most popular? Which is least popular?",
        categories: [
          { label: "Summer", icon: "sun", count: 8 },
          { label: "Autumn", icon: "tree", count: 4 },
          { label: "Winter", icon: "moon", count: 3 },
          { label: "Spring", icon: "flower", count: 6 },
        ],
      },

      // ─── Hard: Read Picture Graphs with Complex Questions ───
      {
        type: "picture-graph",
        title: "Playground Activities",
        instruction:
          "We watched what children played at lunch. Read the graph and answer all the questions.",
        rows: [
          { label: "Swings", icon: "star", count: 7 },
          { label: "Slide", icon: "diamond", count: 5 },
          { label: "Sandpit", icon: "circle", count: 4 },
          { label: "Climbing", icon: "triangle", count: 6 },
          { label: "Ball games", icon: "ball", count: 8 },
        ],
        questions: [
          "Which activity was the most popular?",
          "Which activity was the least popular?",
          "How many more children played ball games than sandpit?",
          "How many children played swings or slide?",
          "How many children were at the playground altogether?",
        ],
      },
      {
        type: "picture-graph",
        title: "Our Garden Bugs",
        instruction:
          "We counted bugs in the garden. Study the picture graph and answer the questions.",
        rows: [
          { label: "Butterflies", icon: "butterfly", count: 5 },
          { label: "Birds", icon: "bird", count: 3 },
          { label: "Cats", icon: "cat", count: 2 },
          { label: "Fish in pond", icon: "fish", count: 6 },
        ],
        questions: [
          "How many creatures did we find altogether?",
          "Which creature did we see the most?",
          "How many more fish than cats?",
          "If 2 more butterflies came, how many butterflies would there be?",
        ],
      },
      {
        type: "circle-correct",
        title: "Lunchbox Data Questions",
        instruction:
          "A class recorded their lunchbox items: sandwiches (9), fruit (7), yoghurt (4), crackers (5). Circle the correct answer.",
        questions: [
          {
            prompt: "How many more sandwiches than yoghurt?",
            options: ["3", "5", "7"],
          },
          {
            prompt: "How many items altogether?",
            options: ["23", "25", "27"],
          },
          {
            prompt: "If 3 more children brought fruit, how many would that be?",
            options: ["8", "9", "10"],
          },
          {
            prompt: "Which two items together equal 9?",
            options: [
              "Yoghurt and Crackers",
              "Fruit and Crackers",
              "Yoghurt and Fruit",
            ],
          },
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Drinks",
        instruction:
          "Read the picture graph about what children like to drink. Answer the questions below.",
        rows: [
          { label: "Water", icon: "cup", count: 8 },
          { label: "Juice", icon: "bottle", count: 6 },
          { label: "Milk", icon: "cup", count: 5 },
          { label: "Hot chocolate", icon: "cup", count: 3 },
        ],
        questions: [
          "Which drink is the most popular?",
          "How many more children chose water than hot chocolate?",
          "How many children chose juice or milk?",
          "How many children were surveyed altogether?",
          "Which two drinks together have the same number as water?",
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Shapes",
        instruction:
          "Children picked their favourite shape. Read the graph carefully.",
        rows: [
          { label: "Circle", icon: "circle", count: 7 },
          { label: "Square", icon: "square", count: 4 },
          { label: "Triangle", icon: "triangle", count: 6 },
          { label: "Diamond", icon: "diamond", count: 3 },
          { label: "Star", icon: "star", count: 8 },
        ],
        questions: [
          "Which shape is the most popular?",
          "Which shape is the least popular?",
          "How many more stars than diamonds?",
          "How many children chose circles or triangles?",
          "How many children voted altogether?",
        ],
      },
      {
        type: "circle-correct",
        title: "Transport Survey Questions",
        instruction:
          "We asked 24 children how they get to school: walk (8), car (7), bus (5), bike (4). Circle the correct answer.",
        questions: [
          {
            prompt: "How do most children get to school?",
            options: ["Walk", "Car", "Bus"],
          },
          {
            prompt: "How many children travel by car or bus?",
            options: ["10", "12", "14"],
          },
          {
            prompt: "How many more children walk than ride a bike?",
            options: ["2", "4", "6"],
          },
          {
            prompt: "How many children were surveyed?",
            options: ["20", "22", "24"],
          },
        ],
      },

      // ─── Hard: Multiple Displays About the Same Data ───
      {
        type: "tally-chart",
        title: "Favourite Ice Cream — Tally First",
        instruction:
          "Our class picked their favourite ice cream flavour. Make tally marks to record the data.",
        categories: [
          { label: "Chocolate", icon: "circle", count: 8 },
          { label: "Vanilla", icon: "star", count: 5 },
          { label: "Strawberry", icon: "heart", count: 6 },
          { label: "Mint", icon: "diamond", count: 3 },
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Ice Cream — Picture Graph",
        instruction:
          "Now use the same data to make a picture graph. Draw one picture for each vote.",
        rows: [
          { label: "Chocolate", icon: "circle", count: 8 },
          { label: "Vanilla", icon: "star", count: 5 },
          { label: "Strawberry", icon: "heart", count: 6 },
          { label: "Mint", icon: "diamond", count: 3 },
        ],
        questions: [
          "Which flavour is the most popular?",
          "Which flavour is the least popular?",
          "How many more children chose chocolate than mint?",
          "How many children chose vanilla or strawberry?",
        ],
      },
      {
        type: "tally-chart",
        title: "Weather This Week — Tally Chart",
        instruction:
          "We recorded the weather each day for 4 weeks. Make a tally chart.",
        categories: [
          { label: "Sunny", icon: "sun", count: 10 },
          { label: "Cloudy", icon: "moon", count: 6 },
          { label: "Rainy", icon: "diamond", count: 3 },
          { label: "Windy", icon: "tree", count: 5 },
        ],
      },
      {
        type: "picture-graph",
        title: "Weather This Week — Picture Graph",
        instruction:
          "Use the weather tally chart above to create a picture graph. Answer the questions.",
        rows: [
          { label: "Sunny", icon: "sun", count: 10 },
          { label: "Cloudy", icon: "moon", count: 6 },
          { label: "Rainy", icon: "diamond", count: 3 },
          { label: "Windy", icon: "tree", count: 5 },
        ],
        questions: [
          "What was the most common weather?",
          "How many more sunny days than rainy days?",
          "How many days were recorded altogether?",
          "Were there more cloudy days or windy days?",
        ],
      },
      {
        type: "circle-correct",
        title: "Weather Data Questions",
        instruction:
          "Use the weather data (sunny 10, cloudy 6, rainy 3, windy 5) to circle the correct answer.",
        questions: [
          {
            prompt: "How many days of weather were recorded?",
            options: ["20", "22", "24"],
          },
          {
            prompt: "How many more sunny days than windy days?",
            options: ["3", "5", "7"],
          },
          {
            prompt: "Which two types together equal 11?",
            options: [
              "Cloudy and Windy",
              "Sunny and Rainy",
              "Cloudy and Rainy",
            ],
          },
        ],
      },

      // ─── Hard: More Tally and Graph Practice ───
      {
        type: "tally-chart",
        title: "Books We Read This Month",
        instruction:
          "Record how many books each child read this month using tally marks.",
        categories: [
          { label: "Picture books", icon: "book", count: 9 },
          { label: "Story books", icon: "book", count: 6 },
          { label: "Fact books", icon: "pencil", count: 4 },
          { label: "Comic books", icon: "star", count: 7 },
        ],
      },
      {
        type: "picture-graph",
        title: "Books We Read — Picture Graph",
        instruction:
          "Turn the tally chart into a picture graph. Answer the questions.",
        rows: [
          { label: "Picture books", icon: "book", count: 9 },
          { label: "Story books", icon: "book", count: 6 },
          { label: "Fact books", icon: "pencil", count: 4 },
          { label: "Comic books", icon: "star", count: 7 },
        ],
        questions: [
          "Which type of book was read the most?",
          "How many more picture books than fact books?",
          "How many books were read altogether?",
          "Which two types together make 13?",
        ],
      },
      {
        type: "picture-graph",
        title: "Farm Animals",
        instruction:
          "Farmer Jane counted her animals. Read the graph and answer the questions.",
        rows: [
          { label: "Cows", icon: "dog", count: 6 },
          { label: "Chickens", icon: "bird", count: 10 },
          { label: "Horses", icon: "cat", count: 3 },
          { label: "Pigs", icon: "teddy", count: 5 },
        ],
        questions: [
          "Which animal does Farmer Jane have the most of?",
          "How many more chickens than horses?",
          "How many cows and pigs altogether?",
          "How many animals does Farmer Jane have in total?",
        ],
      },
      {
        type: "tally-chart",
        title: "Favourite Breakfast Foods",
        instruction:
          "We asked children what they had for breakfast. Tally the results.",
        categories: [
          { label: "Toast", icon: "square", count: 7 },
          { label: "Cereal", icon: "cup", count: 9 },
          { label: "Fruit", icon: "apple", count: 5 },
          { label: "Eggs", icon: "circle", count: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Breakfast Data Questions",
        instruction:
          "Use the breakfast data (toast 7, cereal 9, fruit 5, eggs 4) to answer these questions.",
        questions: [
          {
            prompt: "What was the most popular breakfast?",
            options: ["Toast", "Cereal", "Fruit"],
          },
          {
            prompt: "How many children had toast or eggs?",
            options: ["9", "11", "13"],
          },
          {
            prompt: "How many fewer children had eggs than cereal?",
            options: ["3", "5", "7"],
          },
          {
            prompt: "How many children were surveyed?",
            options: ["23", "25", "27"],
          },
        ],
      },

      // ─── Challenge: Conduct Surveys and Create Displays ───
      {
        type: "open-response",
        title: "Conduct a Colour Survey",
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
        type: "open-response",
        title: "Conduct an Animal Survey",
        instruction:
          "Ask 6 friends: 'What is your favourite animal?' Record their answers.",
        prompts: [
          {
            text: "Write each friend's name and their favourite animal:",
            type: "lines",
            lines: 6,
          },
          {
            text: "Make a tally chart of the results:",
            type: "box",
          },
          {
            text: "Which animal was chosen the most? Which was chosen the least?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Picture Graph",
        instruction:
          "Pick a topic, collect data from friends, and draw a picture graph.",
        prompts: [
          {
            text: "What topic did you choose? (e.g., favourite fruit, favourite sport)",
            type: "lines",
            lines: 1,
          },
          {
            text: "Write the names and answers of the people you asked:",
            type: "lines",
            lines: 6,
          },
          {
            text: "Draw your picture graph in the box below. Remember: one picture for each vote!",
            type: "box",
          },
          {
            text: "Write one thing you learned from your graph:",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Survey: Favourite Snack",
        instruction:
          "Ask 5 friends: 'What is your favourite snack?' Then make a tally chart and a picture graph.",
        prompts: [
          {
            text: "Write each friend's name and favourite snack:",
            type: "lines",
            lines: 5,
          },
          {
            text: "Tally chart:",
            type: "box",
          },
          {
            text: "Picture graph:",
            type: "box",
          },
          {
            text: "Which snack was the most popular?",
            type: "lines",
            lines: 1,
          },
        ],
      },

      // ─── Challenge: Reason About Data ───
      {
        type: "circle-correct",
        title: "What Can We Learn from Data?",
        instruction:
          "Think carefully about what the data tells us. Circle the best answer.",
        questions: [
          {
            prompt:
              "If 10 children chose dogs and 3 chose birds, can we say most children prefer dogs?",
            options: ["Yes", "No", "We need more data"],
          },
          {
            prompt:
              "If every child in the class chose a different fruit, what would the graph look like?",
            options: [
              "All bars the same height",
              "One tall bar",
              "Each bar would be 1",
            ],
          },
          {
            prompt:
              "If we asked more children, would the favourite fruit stay the same?",
            options: ["Definitely", "Maybe", "Definitely not"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Think About the Data",
        instruction:
          "Look at this data about favourite fruits: apples (8), bananas (5), grapes (3), watermelons (4). Answer the questions.",
        prompts: [
          {
            text: "Why do you think apples might be the most popular?",
            type: "lines",
            lines: 2,
          },
          {
            text: "If we asked 10 more children, do you think grapes might become the most popular? Why or why not?",
            type: "lines",
            lines: 2,
          },
          {
            text: "What other fruit would you add to the survey? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False — Data Statements",
        instruction:
          "Our class has: 7 dogs, 4 cats, 2 birds, 6 fish. Circle True or False for each statement.",
        questions: [
          {
            prompt: "Dogs are the most popular pet.",
            options: ["True", "False"],
          },
          {
            prompt: "There are more cats than fish.",
            options: ["True", "False"],
          },
          {
            prompt: "Birds and cats together equal fish.",
            options: ["True", "False"],
          },
          {
            prompt: "There are 19 pets altogether.",
            options: ["True", "False"],
          },
          {
            prompt: "Fish is the second most popular pet.",
            options: ["True", "False"],
          },
        ],
      },
      {
        type: "open-response",
        title: "Write Questions About a Graph",
        instruction:
          "Look at this data: favourite sports — soccer (9), swimming (5), running (3), cycling (6). Write 3 questions someone could answer using this data.",
        prompts: [
          {
            text: "Question 1:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Question 2:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Question 3:",
            type: "lines",
            lines: 1,
          },
          {
            text: "Now answer your own questions:",
            type: "lines",
            lines: 3,
          },
        ],
      },
      {
        type: "picture-graph",
        title: "Two Classes Compared",
        instruction:
          "Class 1A and Class 1B both voted on favourite fruit. This graph shows Class 1A. Answer the questions.",
        rows: [
          { label: "Apples", icon: "apple", count: 6 },
          { label: "Bananas", icon: "banana", count: 8 },
          { label: "Grapes", icon: "grape", count: 4 },
          { label: "Watermelons", icon: "watermelon", count: 5 },
        ],
        questions: [
          "Which fruit is most popular in Class 1A?",
          "If Class 1B chose apples (4), bananas (6), grapes (7), watermelons (3), which fruit is most popular in Class 1B?",
          "Which fruit is popular in both classes?",
          "How many children voted in Class 1A?",
        ],
      },
      {
        type: "circle-correct",
        title: "Predict and Check",
        instruction:
          "We surveyed 10 children about favourite pets. Dogs got 4 votes, cats got 3, fish got 2, birds got 1. Circle the best answer.",
        questions: [
          {
            prompt: "If we ask 10 more children, which pet will probably get the most votes?",
            options: ["Dogs", "Fish", "We cannot be sure"],
          },
          {
            prompt: "What would happen if we only asked children who have a cat at home?",
            options: [
              "Cats would probably get more votes",
              "Dogs would still win",
              "All pets would be equal",
            ],
          },
          {
            prompt: "Is it possible for birds to become the most popular if we ask more children?",
            options: ["Yes, it is possible", "No, never", "Only if we ask 100 children"],
          },
        ],
      },
      {
        type: "matching",
        title: "Match the Data Display to the Description",
        instruction:
          "Match each type of data display to what it shows.",
        left: [
          "Tally chart",
          "Picture graph",
          "List of names and answers",
          "Sorted groups",
        ],
        right: [
          "Uses marks to count",
          "Uses pictures in rows",
          "Shows raw survey data",
          "Items placed in categories",
        ],
      },
      {
        type: "open-response",
        title: "Design a Survey",
        instruction:
          "You want to find out what game your class likes to play at lunch. Plan your survey.",
        prompts: [
          {
            text: "Write the question you will ask:",
            type: "lines",
            lines: 1,
          },
          {
            text: "What choices will you give? (Write 3 or 4 choices)",
            type: "lines",
            lines: 4,
          },
          {
            text: "How many people will you ask?",
            type: "lines",
            lines: 1,
          },
          {
            text: "How will you record the data — tally chart or picture graph? Why?",
            type: "lines",
            lines: 2,
          },
        ],
      },
      {
        type: "open-response",
        title: "Interpret and Explain",
        instruction:
          "A picture graph shows: soccer (10), swimming (4), running (2), cycling (6). Explain what the data tells us.",
        prompts: [
          {
            text: "Which sport is the most popular? Why do you think that is?",
            type: "lines",
            lines: 2,
          },
          {
            text: "Which sport is the least popular? Can you think of a reason?",
            type: "lines",
            lines: 2,
          },
          {
            text: "If you were planning a sports day, which sport would you choose for most children? Explain your answer.",
            type: "lines",
            lines: 3,
          },
        ],
      },

      // ─── Home Activities ───
      {
        type: "home-activity",
        title: "Home Activity: Family Favourites Survey",
        instruction:
          "Conduct your own survey at home and create a data display!",
        suggestions: [
          "Ask everyone in your family: 'What is your favourite animal?' Record the answers using tally marks.",
          "Make a picture graph on paper showing the results — one picture for each answer.",
          "Which answer was the most popular? Which was the least popular?",
          "Try a second survey: 'What is your favourite dinner?' Make another tally chart.",
          "Bring your graphs to school to share with the class!",
        ],
      },
      {
        type: "home-activity",
        title: "Home Activity: Data Detective",
        instruction:
          "Be a data detective at home! Look for things to count, sort, and graph.",
        suggestions: [
          "Count the different types of shoes by the front door. Make a tally chart (e.g., sandals, sneakers, boots).",
          "Sort your toys into groups (e.g., soft toys, cars, blocks). Count how many in each group and make a picture graph.",
          "Look in the fruit bowl. Make a tally chart of each type of fruit.",
          "Ask 3 neighbours or friends: 'What is your favourite colour?' Add their answers to a tally chart.",
          "Draw a picture graph of something you counted. Write one question about your graph for someone else to answer.",
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
