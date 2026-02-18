import type { WorksheetItem } from "./worksheet-types";

export const foundationMathsWorksheets: WorksheetItem[] = [
  // 1. Number names 0-20
  {
    slug: "number-names-0-20",
    title: "Number Names & Numerals 0–20",
    strand: "Number",
    description: "Connect number names, numerals and their position in sequence from 0 to 20",
    learningGuide: {
      concept: "We are moving from counting to 5, all the way to 20. The 'Teen' numbers are the hardest because they don't follow a simple pattern.",
      activation:
        "The Ten-Frame Flash! Draw a grid of 10 boxes. Fill it with spoons/counters. Then place 3 outside. Say 'Ten and three... Thirteen!' Do this for 11-19.",
      check: "Can they count to 20 without skipping '15'? Do they know that '14' is a 1 and a 4?",
    },
    lesson: {
      title: "Let's Count to 20!",
      objective: "Connect spoken number names to written numerals from 0 to 20, with extra focus on the tricky teen numbers.",
      materials: [
        "20 small objects (spoons, blocks, or coins)",
        "A strip of paper with 20 boxes drawn on it",
        "Number cards 0–20 (write numbers on scraps of paper)",
      ],
      intro: {
        title: "The Number Path",
        script: "Let's go on a number adventure! We're going to count all the way to 20 today. Can you help me? We'll put one object in each box as we count — ready? One, two, three... let's go!",
        action: "Lay out the paper strip. Count aloud together while placing one object in each box. Point to each object as you say the number. When you reach 10, pause: 'We made it to 10! Now we keep going to 20.'",
      },
      mainActivity: {
        title: "Flip the Card",
        script: "Now I'll show you a number card. Can you tell me what number it is? If you get it right, it goes face-up. We'll keep working on any we're not sure of yet — that's how we learn!",
        action: "Shuffle the 0–20 cards. Hold each up one at a time. When a teen number appears, say: 'This tricky one is thirteen — a one and a three. Can you say it? Thir-teen.' Spend extra time on 11–19. Group the teen numbers together and notice: 'They all end in -teen!'",
      },
      wrapUp: {
        title: "Write It From Memory",
        script: "You're amazing at this! Now let's see if we can write some numbers from memory. I'll say a number, and you write it as big and bold as you can. Let's start with an easy one: write 3. Now write 7. Now the big one — write 14!",
        action: "Call out 5–6 numbers for the child to write. Begin with 1–5, then 6–10, then attempt one or two teen numbers. Celebrate every correct digit, even if the whole number needs more practice.",
      },
    },
    activities: [
      // --- EASY: Trace & recognise 0-5 ---
      {
        type: "number-trace",
        title: "Trace Numbers 0–5",
        instruction: "Use your pencil to trace over each dotted number. Say the number out loud!",
        parentTip: "Watch for pencil grip. 'Nip, flip, and grip' is a good phrase to help them hold it correctly.",
        numbers: [0, 1, 2, 3, 4, 5],
      },
      {
        type: "count-objects",
        title: "Count the Stars",
        instruction: "Count the stars in each row. Write the number in the box.",
        rows: [
          { object: "star", count: 1 },
          { object: "star", count: 2 },
          { object: "star", count: 3 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Balls",
        instruction: "Count the balls in each row. Write the number in the box.",
        rows: [
          { object: "ball", count: 2 },
          { object: "ball", count: 4 },
          { object: "ball", count: 5 },
        ],
      },
      {
        type: "matching",
        title: "Match the Number to the Word",
        instruction: "Draw a line from each number to the matching word.",
        left: ["1", "2", "3"],
        right: ["three", "one", "two"],
      },
      {
        type: "circle-correct",
        title: "Which Number Is This?",
        instruction: "Look at the group of objects. Circle the correct number.",
        questions: [
          { prompt: "How many stars?", promptIcon: "star", promptCount: 2, options: ["1", "2", "3"] },
          { prompt: "How many stars?", promptIcon: "star", promptCount: 5, options: ["3", "5", "4"] },
          { prompt: "How many stars?", promptIcon: "star", promptCount: 0, options: ["0", "1", "2"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Hearts",
        instruction: "How many hearts are in each row? Write the number.",
        rows: [
          { object: "heart", count: 4 },
          { object: "heart", count: 5 },
          { object: "heart", count: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers 1–5",
        instruction: "Draw a line to match each number word to its numeral.",
        left: ["four", "five", "one", "two", "three"],
        right: ["2", "4", "3", "1", "5"],
      },
      {
        type: "ten-frame",
        title: "Ten Frames 0–5",
        instruction: "Look at each ten frame. Count the filled circles and write the number.",
        frames: [
          { filled: 1, total: 5 },
          { filled: 3, total: 5 },
          { filled: 5, total: 5 },
          { filled: 0, total: 5 },
        ],
      },
      {
        type: "matching",
        title: "Match Words to Numbers (0–5)",
        instruction: "Draw a line from each word to the correct number.",
        left: ["zero", "four", "five", "one", "three"],
        right: ["5", "0", "1", "3", "4"],
      },
      {
        type: "circle-correct",
        title: "How Many Can You See?",
        instruction: "Look at each group of objects. Circle the correct number.",
        questions: [
          { prompt: "How many cats?", promptIcon: "cat", promptCount: 3, options: ["2", "3", "4"] },
          { prompt: "How many dogs?", promptIcon: "dog", promptCount: 4, options: ["4", "5", "3"] },
          { prompt: "How many birds?", promptIcon: "bird", promptCount: 2, options: ["1", "0", "2"] },
        ],
      },
      // --- EASY: Trace & recognise 6-10 ---
      {
        type: "number-trace",
        title: "Trace Numbers 6–10",
        instruction: "Trace over each dotted number carefully. Try to stay on the lines!",
        parentTip: "6 and 9 are often confused. Remind them: '6 curls at the bottom, 9 curls at the top'.",
        numbers: [6, 7, 8, 9, 10],
      },
      {
        type: "count-objects",
        title: "Count the Apples",
        instruction: "Count the apples in each row. Write the total in the box.",
        rows: [
          { object: "apple", count: 6 },
          { object: "apple", count: 8 },
          { object: "apple", count: 7 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Trees",
        instruction: "Count the trees in each row. Write the total in the box.",
        rows: [
          { object: "tree", count: 7 },
          { object: "tree", count: 9 },
          { object: "tree", count: 10 },
        ],
      },

      {
        type: "circle-correct",
        title: "Pick the Right Number",
        instruction: "Circle the number that matches each word.",
        questions: [
          { prompt: "six", options: ["5", "6", "7"] },
          { prompt: "nine", options: ["8", "10", "9"] },
          { prompt: "seven", options: ["7", "6", "8"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Fish",
        instruction: "Count the fish. Write the total.",
        rows: [
          { object: "fish", count: 9 },
          { object: "fish", count: 10 },
          { object: "fish", count: 6 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames 6–10",
        instruction: "Look at each ten frame. Count the filled circles and write the number.",
        frames: [
          { filled: 6, total: 10 },
          { filled: 8, total: 10 },
          { filled: 10, total: 10 },
          { filled: 7, total: 10 },
        ],
      },
      {
        type: "circle-correct",
        title: "Count and Choose (6–10)",
        instruction: "Count the objects and circle the correct number.",
        questions: [
          { prompt: "How many bananas?", promptIcon: "banana", promptCount: 7, options: ["6", "7", "8"] },
          { prompt: "How many pencils?", promptIcon: "pencil", promptCount: 9, options: ["8", "9", "10"] },
          { prompt: "How many cups?", promptIcon: "cup", promptCount: 6, options: ["5", "6", "7"] },
        ],
      },
      // --- MEDIUM: Sequences & ordering 0-10 ---
      {
        type: "circle-correct",
        title: "What Comes Next? (0–10)",
        instruction: "Circle the number that comes next.",
        questions: [
          { prompt: "1, 2, 3, ___", options: ["4", "5", "2"] },
          { prompt: "5, 6, 7, ___", options: ["9", "8", "6"] },
          { prompt: "8, 9, 10, ___", options: ["11", "12", "7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Number Is Missing?",
        instruction: "A number is hiding! Circle the missing number.",
        questions: [
          { prompt: "1, 2, ___, 4, 5", options: ["6", "3", "0"] },
          { prompt: "3, 4, ___, 6, 7", options: ["5", "8", "2"] },
          { prompt: "7, ___, 9, 10", options: ["6", "11", "8"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Before? (0–10)",
        instruction: "Circle the number that comes just before.",
        questions: [
          { prompt: "___, 3, 4, 5", options: ["1", "2", "6"] },
          { prompt: "___, 7, 8, 9", options: ["5", "6", "10"] },
          { prompt: "___, 1, 2, 3", options: ["4", "0", "5"] },
        ],
      },
      {
        type: "matching",
        title: "Match Numbers 6–10",
        instruction: "Draw a line to match each word to its number.",
        left: ["six", "eight", "ten", "seven", "nine"],
        right: ["7", "10", "6", "9", "8"],
      },
      {
        type: "count-objects",
        title: "Count the Butterflies",
        instruction: "Count each group of butterflies carefully. Write the number.",
        rows: [
          { object: "butterfly", count: 5 },
          { object: "butterfly", count: 8 },
          { object: "butterfly", count: 10 },
          { object: "butterfly", count: 3 },
        ],
      },
      {
        type: "sequence",
        title: "Put the Numbers in Order",
        instruction: "Write 1st, 2nd, 3rd, 4th to put these numbers from smallest to biggest.",
        items: [
          { label: "5" },
          { label: "2" },
          { label: "9" },
          { label: "1" },
        ],
      },
      {
        type: "sequence",
        title: "Order From Biggest to Smallest",
        instruction: "Write 1st, 2nd, 3rd, 4th to put these numbers from biggest to smallest.",
        items: [
          { label: "3" },
          { label: "10" },
          { label: "7" },
          { label: "1" },
        ],
      },
      {
        type: "open-response",
        title: "Fill in the Number Line (0–10)",
        instruction: "Some numbers are missing from the number line. Write the missing numbers.",
        prompts: [
          { text: "0, 1, ___, 3, ___, 5, ___, 7, ___, 9, ___", type: "lines", lines: 1 },
        ],
      },
      // --- MEDIUM: Trace & recognise 11-15 ---
      {
        type: "number-trace",
        title: "Trace Numbers 11–15",
        instruction: "These are the teen numbers! Trace each one carefully.",
        parentTip: "Teens are tricky! 'Thirteen' sounds like 'Three', but 'Eleven' and 'Twelve' are special words. Practice these three the most.",
        numbers: [11, 12, 13, 14, 15],
      },
      {
        type: "count-objects",
        title: "Count the Flowers",
        instruction: "Count the flowers in each row. Write the total.",
        rows: [
          { object: "flower", count: 11 },
          { object: "flower", count: 13 },
          { object: "flower", count: 12 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Teddies",
        instruction: "Count the teddies in each row. Write the total.",
        rows: [
          { object: "teddy", count: 12 },
          { object: "teddy", count: 14 },
          { object: "teddy", count: 15 },
        ],
      },
      {
        type: "matching",
        title: "Match Teen Numbers",
        instruction: "Draw a line from each word to the correct numeral.",
        left: ["eleven", "thirteen", "fifteen", "twelve", "fourteen"],
        right: ["15", "11", "14", "13", "12"],
      },
      {
        type: "circle-correct",
        title: "Which Teen Number?",
        instruction: "Circle the correct number for each word.",
        questions: [
          { prompt: "twelve", options: ["11", "12", "20"] },
          { prompt: "fourteen", options: ["4", "40", "14"] },
          { prompt: "eleven", options: ["11", "1", "10"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Teen Number or Not?",
        instruction: "Circle the number that IS a teen number.",
        questions: [
          { prompt: "Which is a teen number?", options: ["8", "13", "20"] },
          { prompt: "Which is a teen number?", options: ["15", "5", "50"] },
          { prompt: "Which is NOT a teen number?", options: ["11", "7", "14"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Diamonds",
        instruction: "Count the diamonds. Write how many there are.",
        rows: [
          { object: "diamond", count: 14 },
          { object: "diamond", count: 11 },
          { object: "diamond", count: 15 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (11–15)",
        instruction: "Circle the number that comes next in the sequence.",
        questions: [
          { prompt: "10, 11, 12, ___", options: ["13", "14", "10"] },
          { prompt: "12, 13, 14, ___", options: ["16", "15", "11"] },
          { prompt: "11, 12, ___, 14", options: ["15", "10", "13"] },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames — Teen Numbers",
        instruction: "Each picture shows a full ten frame plus extra dots. Count all the dots and write the number.",
        frames: [
          { filled: 11, total: 20 },
          { filled: 13, total: 20 },
          { filled: 15, total: 20 },
        ],
      },
      // --- HARDER: Trace & recognise 16-20 ---
      {
        type: "number-trace",
        title: "Trace Numbers 16–20",
        instruction: "Nearly there! Trace these big numbers.",
        numbers: [16, 17, 18, 19, 20],
      },
      {
        type: "count-objects",
        title: "Count the Big Groups",
        instruction: "Count each group of hearts carefully. Write the total.",
        rows: [
          { object: "heart", count: 16 },
          { object: "heart", count: 18 },
          { object: "heart", count: 20 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Grapes",
        instruction: "Count each group of grapes carefully. Write the total.",
        rows: [
          { object: "grape", count: 17 },
          { object: "grape", count: 19 },
          { object: "grape", count: 16 },
        ],
      },
      {
        type: "matching",
        title: "Match Big Numbers",
        instruction: "Draw a line from each word to its number.",
        left: ["sixteen", "eighteen", "twenty", "seventeen", "nineteen"],
        right: ["20", "17", "16", "19", "18"],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (Teen Numbers)",
        instruction: "Circle the number that comes next in each sequence.",
        questions: [
          { prompt: "11, 12, 13, ___", options: ["14", "15", "10"] },
          { prompt: "15, 16, 17, ___", options: ["19", "18", "15"] },
          { prompt: "17, 18, 19, ___", options: ["20", "21", "16"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Missing Teen Numbers",
        instruction: "Which number is missing from each sequence?",
        questions: [
          { prompt: "11, ___, 13, 14", options: ["10", "12", "15"] },
          { prompt: "16, 17, ___, 19", options: ["15", "18", "20"] },
          { prompt: "14, 15, ___, 17", options: ["13", "16", "18"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Pick the Right Big Number",
        instruction: "Circle the number that matches each word.",
        questions: [
          { prompt: "sixteen", options: ["6", "16", "60"] },
          { prompt: "nineteen", options: ["9", "90", "19"] },
          { prompt: "twenty", options: ["12", "20", "2"] },
          { prompt: "eighteen", options: ["80", "8", "18"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Suns",
        instruction: "Count each group of suns. Write the total.",
        rows: [
          { object: "sun", count: 18 },
          { object: "sun", count: 20 },
          { object: "sun", count: 16 },
        ],
      },
      {
        type: "sequence",
        title: "Order the Big Numbers",
        instruction: "Write 1st, 2nd, 3rd, 4th to put these numbers from smallest to biggest.",
        items: [
          { label: "19" },
          { label: "16" },
          { label: "20" },
          { label: "17" },
        ],
      },
      // --- CHALLENGE: Full range 0-20 ---
      {
        type: "count-objects",
        title: "Count the Stars — Big Numbers!",
        instruction: "Count very carefully! Write the total.",
        rows: [
          { object: "star", count: 17 },
          { object: "star", count: 19 },
          { object: "star", count: 15 },
          { object: "star", count: 20 },
        ],
      },
      {
        type: "matching",
        title: "Number Words Challenge",
        instruction: "Match each number word to the correct numeral. Think carefully!",
        left: ["zero", "ten", "fifteen", "twenty", "eight"],
        right: ["15", "0", "20", "8", "10"],
      },
      {
        type: "matching",
        title: "Mixed Number Match",
        instruction: "Match each number word to the correct numeral.",
        left: ["three", "thirteen", "seven", "seventeen", "eleven"],
        right: ["17", "7", "11", "3", "13"],
      },
      {
        type: "circle-correct",
        title: "What Comes Before?",
        instruction: "Circle the number that comes BEFORE each number.",
        questions: [
          { prompt: "___ comes before 5", options: ["6", "4", "3"] },
          { prompt: "___ comes before 10", options: ["8", "11", "9"] },
          { prompt: "___ comes before 20", options: ["18", "19", "21"] },
          { prompt: "___ comes before 13", options: ["14", "12", "11"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes After?",
        instruction: "Circle the number that comes AFTER each number.",
        questions: [
          { prompt: "What comes after 7?", options: ["6", "8", "9"] },
          { prompt: "What comes after 14?", options: ["13", "16", "15"] },
          { prompt: "What comes after 19?", options: ["20", "18", "21"] },
          { prompt: "What comes after 0?", options: ["2", "1", "10"] },
        ],
      },
      {
        type: "sequence",
        title: "Order These Numbers",
        instruction: "Put these numbers in order from smallest to biggest. Write 1st, 2nd, 3rd, 4th, 5th.",
        items: [
          { label: "12" },
          { label: "3" },
          { label: "20" },
          { label: "8" },
          { label: "15" },
        ],
      },
      {
        type: "circle-correct",
        title: "Number Names Super Quiz",
        instruction: "Circle the correct answer for each question.",
        questions: [
          { prompt: "How do you write the number 'seventeen'?", options: ["7", "17", "70"] },
          { prompt: "What number comes between 14 and 16?", options: ["13", "17", "15"] },
          { prompt: "Which is the biggest number?", options: ["12", "20", "18"] },
          { prompt: "Which number means 'none'?", options: ["1", "0", "10"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Tricky Number Pairs",
        instruction: "Some numbers look or sound alike. Circle the correct answer.",
        questions: [
          { prompt: "Which is 'thirteen' (not 'thirty')?", options: ["30", "13", "3"] },
          { prompt: "Which is 'fifteen' (not 'fifty')?", options: ["50", "5", "15"] },
          { prompt: "Which is 'twelve' (not 'twenty')?", options: ["20", "12", "2"] },
          { prompt: "Which is 'fourteen' (not 'forty')?", options: ["14", "40", "4"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Less Than 10 or More Than 10?",
        instruction: "Sort each number into the correct column.",
        columns: ["Less than 10", "More than 10"],
        items: [
          { label: "3" },
          { label: "15" },
          { label: "8" },
          { label: "18" },
          { label: "6" },
          { label: "12" },
        ],
      },
      // --- Improvement: Zero focus ---
      {
        type: "circle-correct",
        title: "All About Zero",
        instruction: "Zero means 'none' or 'nothing'. Circle the correct answer.",
        questions: [
          { prompt: "How many elephants are in your lunchbox right now?", options: ["0", "1", "2"] },
          { prompt: "You have 3 lollies and eat them all. How many are left?", options: ["0", "1", "3"] },
          { prompt: "Which picture shows zero stars? (A) two stars (B) nothing (C) one star", options: ["A", "B", "C"] },
          { prompt: "What number comes just before 1?", options: ["2", "0", "10"] },
        ],
      },
      // --- Improvement: Free-writing practice ---
      {
        type: "open-response",
        title: "Write Numbers from Memory",
        instruction: "Without looking at any numbers, try to write the numerals. Take your time!",
        prompts: [
          { text: "Write the numbers 0 to 5 in order:", type: "lines", lines: 1 },
          { text: "Write the numbers 6 to 10 in order:", type: "lines", lines: 1 },
          { text: "Write the numbers 11 to 15 in order:", type: "lines", lines: 1 },
          { text: "Write the numbers 16 to 20 in order:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Number Word",
        instruction: "Can you write the word for each number? Have a go!",
        prompts: [
          { text: "3 = _______________", type: "lines", lines: 1 },
          { text: "7 = _______________", type: "lines", lines: 1 },
          { text: "10 = _______________", type: "lines", lines: 1 },
          { text: "15 = _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Write the Numeral",
        instruction: "Read each word and write the matching number.",
        prompts: [
          { text: "five = ___", type: "lines", lines: 1 },
          { text: "twelve = ___", type: "lines", lines: 1 },
          { text: "nineteen = ___", type: "lines", lines: 1 },
          { text: "twenty = ___", type: "lines", lines: 1 },
          { text: "zero = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Count Backwards!",
        instruction: "Can you write the numbers counting backwards? Give it a try!",
        prompts: [
          { text: "Write the numbers from 5 down to 0:", type: "lines", lines: 1 },
          { text: "Write the numbers from 10 down to 5:", type: "lines", lines: 1 },
          { text: "Write the numbers from 20 down to 15:", type: "lines", lines: 1 },
        ],
      },
      // --- Additional activities ---
      {
        type: "picture-graph",
        title: "Favourite Number Graph",
        instruction: "This graph shows how many children chose each as their favourite number. Answer the questions.",
        rows: [
          { label: "One", icon: "star", count: 3 },
          { label: "Five", icon: "star", count: 5 },
          { label: "Ten", icon: "star", count: 7 },
          { label: "Twenty", icon: "star", count: 4 },
        ],
        questions: [
          "Which number was chosen most often?",
          "How many more chose Ten than One?",
          "How many children were asked in total?",
        ],
      },
      {
        type: "tally-chart",
        title: "Tally the Teen Numbers",
        instruction: "Practise making tally marks for each number. Write the total.",
        categories: [
          { label: "Eleven (11)", icon: "star", count: 11 },
          { label: "Thirteen (13)", icon: "heart", count: 13 },
          { label: "Fifteen (15)", icon: "flower", count: 15 },
        ],
      },
      {
        type: "sequence",
        title: "Order These Numbers",
        instruction: "Write 1st to 5th to put the numbers in order from smallest to largest.",
        items: [
          { label: "14" },
          { label: "7" },
          { label: "20" },
          { label: "1" },
          { label: "11" },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frames: Big Numbers",
        instruction: "Count the filled dots in each double ten frame. Write the number.",
        frames: [
          { filled: 14, total: 20 },
          { filled: 17, total: 20 },
          { filled: 12, total: 20 },
          { filled: 19, total: 20 },
        ],
      },
      {
        type: "open-response",
        title: "Skip Count by Twos",
        instruction: "Fill in the missing numbers when counting by 2s.",
        prompts: [
          { text: "0, 2, ___, 6, ___, 10, ___, 14, ___, 18, 20", type: "lines", lines: 1 },
          { text: "1, 3, ___, 7, ___, 11, ___, 15, ___, 19", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Single or Double Digit?",
        instruction: "Sort each number into the correct column.",
        columns: ["Single digit (0–9)", "Double digit (10–20)"],
        items: [
          { label: "4" },
          { label: "13" },
          { label: "9" },
          { label: "17" },
          { label: "0" },
          { label: "20" },
        ],
      },
      {
        type: "circle-correct",
        title: "More or Less Than 10?",
        instruction: "Circle the correct answer for each number.",
        questions: [
          { prompt: "Is 7 more or less than 10?", options: ["More", "Less", "Equal"] },
          { prompt: "Is 15 more or less than 10?", options: ["More", "Less", "Equal"] },
          { prompt: "Is 10 more or less than 10?", options: ["More", "Less", "Equal"] },
          { prompt: "Is 3 more or less than 10?", options: ["More", "Less", "Equal"] },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare the Numbers",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 8, rightCount: 12, object: "star", question: "Which is more: 8 or 12?" },
          { leftCount: 15, rightCount: 9, object: "heart", question: "Which is more: 15 or 9?" },
          { leftCount: 20, rightCount: 14, object: "apple", question: "Which is more: 20 or 14?" },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 10",
        instruction: "Fill in the missing number in each bond.",
        bonds: [
          { total: 10, partA: 7, partB: null },
          { total: 10, partA: null, partB: 3 },
          { total: 10, partA: 5, partB: null },
          { total: 10, partA: null, partB: 8 },
        ],
      },
      {
        type: "open-response",
        title: "Spot the Pattern",
        instruction: "Look at these number patterns. Fill in the blanks.",
        prompts: [
          { text: "5, 10, 15, ___, ___", type: "lines", lines: 1 },
          { text: "20, 18, 16, ___, ___", type: "lines", lines: 1 },
          { text: "0, 2, 4, 6, ___, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Smallest and Largest",
        instruction: "Circle the correct answer for each question.",
        questions: [
          { prompt: "Which is the smallest: 12, 7, 19?", options: ["12", "7", "19"] },
          { prompt: "Which is the largest: 4, 11, 20?", options: ["4", "11", "20"] },
          { prompt: "Which is between 8 and 10?", options: ["7", "9", "11"] },
          { prompt: "Which is between 16 and 18?", options: ["15", "17", "19"] },
        ],
      },
      {
        type: "open-response",
        title: "My Number Story",
        instruction: "Write a short number story using numbers up to 20.",
        prompts: [
          { text: "I had ___ toys. I got ___ more. Now I have ___.", type: "lines", lines: 1 },
          { text: "There were ___ birds on a fence. ___ flew away. Now there are ___.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Ordinal Numbers",
        instruction: "Ordinal numbers tell us the position of something. Circle the correct answer.",
        questions: [
          { prompt: "The 1st person in a line is at the...", options: ["back", "front", "middle"] },
          { prompt: "If you are 3rd, how many people are ahead of you?", options: ["1", "2", "3"] },
          { prompt: "Which ordinal number comes after 4th?", options: ["3rd", "5th", "6th"] },
          { prompt: "How do we say '2nd' in words?", options: ["Second", "Two", "Twice"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Moons",
        instruction: "Count each group of moons carefully. Write the total.",
        rows: [
          { object: "moon", count: 8 },
          { object: "moon", count: 13 },
          { object: "moon", count: 17 },
          { object: "moon", count: 20 },
        ],
      },
      {
        type: "circle-correct",
        title: "Between Two Numbers",
        instruction: "Circle the number that comes BETWEEN the two given numbers.",
        questions: [
          { prompt: "Between 4 and 6", options: ["3", "5", "7"] },
          { prompt: "Between 9 and 11", options: ["8", "10", "12"] },
          { prompt: "Between 16 and 18", options: ["15", "17", "19"] },
          { prompt: "Between 0 and 2", options: ["1", "3", "4"] },
        ],
      },
      {
        type: "open-response",
        title: "Odd and Even Numbers",
        instruction: "Even numbers end in 0, 2, 4, 6, or 8. Odd numbers end in 1, 3, 5, 7, or 9.",
        prompts: [
          { text: "Write 5 even numbers between 0 and 20:", type: "lines", lines: 1 },
          { text: "Write 5 odd numbers between 0 and 20:", type: "lines", lines: 1 },
          { text: "Is 14 odd or even? How do you know?", type: "lines", lines: 1 },
        ],
      },
      {
        type: "compare-groups",
        title: "More, Fewer, or Equal? (Big Numbers)",
        instruction: "Compare each pair of numbers.",
        pairs: [
          { leftCount: 11, rightCount: 14, object: "flower", question: "Which is more: 11 or 14?" },
          { leftCount: 18, rightCount: 12, object: "fish", question: "Which is more: 18 or 12?" },
          { leftCount: 16, rightCount: 16, object: "diamond", question: "Are 16 and 16 equal?" },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 20",
        instruction: "Fill in the missing part of each bond.",
        bonds: [
          { total: 20, partA: 12, partB: null },
          { total: 20, partA: null, partB: 7 },
          { total: 20, partA: 15, partB: null },
          { total: 20, partA: null, partB: 9 },
        ],
      },
      {
        type: "open-response",
        title: "Count and Write",
        instruction: "Count the items listed. Write the numeral and the number word.",
        prompts: [
          { text: "Days in two weeks: numeral ___ word _______________", type: "lines", lines: 1 },
          { text: "Fingers on two hands: numeral ___ word _______________", type: "lines", lines: 1 },
          { text: "Toes on two feet: numeral ___ word _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "picture-graph",
        title: "Number Word Letter Count",
        instruction: "This graph shows how many letters are in each number word. Answer the questions.",
        rows: [
          { label: "one (3)", icon: "star", count: 3 },
          { label: "four (4)", icon: "star", count: 4 },
          { label: "seven (5)", icon: "star", count: 5 },
          { label: "eleven (6)", icon: "star", count: 6 },
        ],
        questions: [
          "Which number word is the longest?",
          "Which number word is the shortest?",
          "How many letters do seven and eleven have together?",
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Practise number names with these fun activities.",
        suggestions: [
          "Go on a number hunt around your house — find numbers on clocks, ovens, remote controls, and letterboxes. Read each number out loud.",
          "Play 'What comes next?' — a parent says a number and the child says the next one in the sequence.",
          "Write numbers 0–20 on cards and play snap, matching the numeral to the number word.",
          "Count objects around the house (shoes by the door, spoons in the drawer) and write the numeral on a whiteboard.",
          "Play 'Count backwards' — start from 20 and count down to 0 together. Try it while going down the stairs!",
          "Write the numbers 0–20 in chalk on the driveway and hop along them while saying each number.",
        ],
      },
    ],
  },

  // 2. Subitising and counting
  {
    slug: "subitising-counting",
    title: "Subitising & Counting",
    strand: "Number",
    description: "Use subitising and counting strategies to quantify collections",
    lesson: {
      title: "Quick Look — How Many?",
      objective: "Instantly recognise small quantities without counting one by one, and use smart counting strategies for bigger groups.",
      materials: [
        "A regular dice",
        "Dot cards (draw 1–6 dots in different arrangements on index cards or scraps of paper)",
        "15–20 small objects (blocks, coins, grapes)",
      ],
      intro: {
        title: "The Flash Game",
        script: "I'm going to show you something for just one second — so eyes ready! How many dots did you see? Don't count them — just look and trust what your brain says. That's a special skill called subitising!",
        action: "Hold up a dot card for 1 second then turn it face-down. Ask 'How many?' Let your child answer, then reveal the card to check. Start with 1–3 dots arranged simply (like a dice face). Build up to 4 and 5. Celebrate when they 'just know' without counting.",
      },
      mainActivity: {
        title: "Make Your Own Dot Card",
        script: "Let's roll the dice! Whatever number comes up, you draw that many dots on a card — but here's the challenge: arrange them so someone could see the number quickly without counting. Can you make it easy for your brain?",
        action: "Take turns rolling the dice. Your child draws dots for the number that comes up, then you draw the same number a different way. Compare: 'Which arrangement is easier to see at a glance?' Discuss why some arrangements (like a dice pattern) are easier to read than random dots.",
      },
      wrapUp: {
        title: "Count On From 10",
        script: "Now let's count a bigger group. I'll put out a pile of objects — your job is to make a group of 10 first, then count the rest. Ready? Group your 10... now count on: ten, eleven, twelve...",
        action: "Put out 13–17 objects. Help your child group exactly 10 and set them aside. Then count on from 10 together, touching each remaining object. This bridges subitising (knowing 10 instantly) with counting on.",
      },
    },
    activities: [
      // --- EASY: Subitise tiny groups 1-3 (10 activities) ---
      {
        type: "count-objects",
        title: "How Many Stars?",
        instruction: "Look at the stars. Write how many in the box.",
        rows: [
          { object: "star", count: 1 },
          { object: "star", count: 2 },
          { object: "star", count: 3 },
        ],
      },
      {
        type: "count-objects",
        title: "How Many Apples?",
        instruction: "Look at the apples. Write how many in the box.",
        rows: [
          { object: "apple", count: 2 },
          { object: "apple", count: 1 },
          { object: "apple", count: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick! How Many?",
        instruction: "Look at the picture quickly. Circle the right number.",
        questions: [
          { prompt: "A group of 1 apple", options: ["1", "2", "3"] },
          { prompt: "A group of 3 apples", options: ["2", "3", "4"] },
          { prompt: "A group of 2 apples", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "count-objects",
        title: "How Many Hearts?",
        instruction: "Count the hearts. Write the number.",
        rows: [
          { object: "heart", count: 2 },
          { object: "heart", count: 3 },
          { object: "heart", count: 1 },
        ],
      },
      {
        type: "count-objects",
        title: "How Many Circles?",
        instruction: "Look at the circles. Write how many you see.",
        rows: [
          { object: "circle", count: 3 },
          { object: "circle", count: 1 },
          { object: "circle", count: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Subitise! Quick Eyes!",
        instruction: "Try to see the number right away without counting one by one. Circle the right number.",
        questions: [
          { prompt: "A group of 2 fish", options: ["1", "2", "3"] },
          { prompt: "A group of 1 fish", options: ["1", "2", "3"] },
          { prompt: "A group of 3 fish", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "matching",
        title: "Match Groups to Numbers",
        instruction: "Draw a line from each group to the correct number.",
        left: ["●", "● ●", "● ● ●"],
        right: ["3", "1", "2"],
      },
      {
        type: "count-objects",
        title: "Count the Fish",
        instruction: "How many fish? Write the number in the box.",
        rows: [
          { object: "fish", count: 3 },
          { object: "fish", count: 1 },
          { object: "fish", count: 2 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Triangles",
        instruction: "How many triangles do you see? Write the number.",
        rows: [
          { object: "triangle", count: 1 },
          { object: "triangle", count: 3 },
          { object: "triangle", count: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Do You See?",
        instruction: "Look at the group and circle the correct number.",
        questions: [
          { prompt: "A group of 3 stars", options: ["2", "3", "4"] },
          { prompt: "A group of 2 hearts", options: ["1", "2", "3"] },
          { prompt: "A group of 1 flower", options: ["1", "2", "3"] },
        ],
      },
      // --- EASY: Subitise groups of 4-5 (10 activities) ---
      {
        type: "count-objects",
        title: "Count the Apples",
        instruction: "Count the apples in each row. Write the total.",
        rows: [
          { object: "apple", count: 4 },
          { object: "apple", count: 5 },
          { object: "apple", count: 3 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Squares",
        instruction: "Count the squares in each row. Write the total.",
        rows: [
          { object: "square", count: 5 },
          { object: "square", count: 3 },
          { object: "square", count: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Subitise! How Many Do You See?",
        instruction: "Try to see the number WITHOUT counting one by one. Circle your answer.",
        questions: [
          { prompt: "A group of 4 stars", options: ["3", "4", "5"] },
          { prompt: "A group of 5 stars", options: ["4", "5", "6"] },
          { prompt: "A group of 3 stars", options: ["2", "4", "3"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Flowers",
        instruction: "Count each group of flowers. Write the number.",
        rows: [
          { object: "flower", count: 5 },
          { object: "flower", count: 4 },
          { object: "flower", count: 2 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Butterflies",
        instruction: "Count each group of butterflies. Write the number.",
        rows: [
          { object: "butterfly", count: 4 },
          { object: "butterfly", count: 5 },
          { object: "butterfly", count: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Look — How Many?",
        instruction: "Try to see the total without counting one by one. Circle your answer.",
        questions: [
          { prompt: "A group of 5 hearts", options: ["4", "5", "6"] },
          { prompt: "A group of 4 diamonds", options: ["3", "4", "5"] },
          { prompt: "A group of 3 flowers", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "matching",
        title: "Match Groups 1-5",
        instruction: "Draw a line from each group to the matching number.",
        left: ["● ●", "● ● ● ●", "● ● ● ● ●", "●", "● ● ●"],
        right: ["5", "1", "2", "3", "4"],
      },
      {
        type: "count-objects",
        title: "Count the Dogs",
        instruction: "How many dogs do you see? Write the number.",
        rows: [
          { object: "dog", count: 5 },
          { object: "dog", count: 4 },
          { object: "dog", count: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Fingers?",
        instruction: "If you hold up this many fingers, which number is it?",
        questions: [
          { prompt: "One whole hand", options: ["4", "5", "6"] },
          { prompt: "Three fingers", options: ["2", "3", "4"] },
          { prompt: "One finger", options: ["0", "1", "2"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Balls",
        instruction: "Count the balls. Write the number in the box.",
        rows: [
          { object: "ball", count: 4 },
          { object: "ball", count: 2 },
          { object: "ball", count: 5 },
        ],
      },
      // --- BRIDGE: Ten-frame introduction (3 activities) ---
      {
        type: "ten-frame",
        title: "Meet the Ten Frame!",
        instruction: "A ten frame is a box with 10 spaces (2 rows of 5). Count the filled circles and write the number.",
        frames: [
          { filled: 2 },
          { filled: 3 },
          { filled: 1 },
        ],
      },
      {
        type: "ten-frame",
        title: "Using a Ten Frame",
        instruction: "Count the filled circles in each ten frame. Write the number.",
        frames: [
          { filled: 5 },
          { filled: 4 },
          { filled: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Ten Frame Quick Check",
        instruction: "A ten frame has 10 spaces. Look at how many are filled and circle the correct number.",
        questions: [
          { prompt: "A ten frame with 3 dots filled", options: ["2", "3", "4"] },
          { prompt: "A ten frame with 5 dots filled (one full row)", options: ["4", "5", "6"] },
          { prompt: "A ten frame with 4 dots filled", options: ["3", "4", "5"] },
        ],
      },

      // --- MEDIUM: Count groups of 6-8 (10 activities) ---
      {
        type: "count-objects",
        title: "Count the Butterflies",
        instruction: "Count the butterflies carefully. Write the total.",
        rows: [
          { object: "butterfly", count: 6 },
          { object: "butterfly", count: 7 },
          { object: "butterfly", count: 5 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Cats",
        instruction: "Count each group of cats. Write the total.",
        rows: [
          { object: "cat", count: 7 },
          { object: "cat", count: 6 },
          { object: "cat", count: 8 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Diamonds",
        instruction: "Touch each diamond as you count. Write the total.",
        rows: [
          { object: "diamond", count: 8 },
          { object: "diamond", count: 6 },
          { object: "diamond", count: 7 },
        ],
      },
      {
        type: "circle-correct",
        title: "Pick the Right Number",
        instruction: "Count the objects. Circle the correct total.",
        questions: [
          { prompt: "A group of 6 fish", options: ["5", "6", "7"] },
          { prompt: "A group of 8 fish", options: ["7", "8", "9"] },
          { prompt: "A group of 7 fish", options: ["6", "7", "8"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Hearts",
        instruction: "How many hearts are there? Write the number.",
        rows: [
          { object: "heart", count: 7 },
          { object: "heart", count: 8 },
          { object: "heart", count: 6 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Birds",
        instruction: "Count each group of birds carefully. Write the total.",
        rows: [
          { object: "bird", count: 6 },
          { object: "bird", count: 8 },
          { object: "bird", count: 7 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Objects?",
        instruction: "Count carefully and circle the correct number.",
        questions: [
          { prompt: "A group of 7 stars", options: ["6", "7", "8"] },
          { prompt: "A group of 6 hearts", options: ["5", "6", "7"] },
          { prompt: "A group of 8 apples", options: ["7", "8", "9"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Trees",
        instruction: "Count the trees in each row. Write the number.",
        rows: [
          { object: "tree", count: 8 },
          { object: "tree", count: 7 },
          { object: "tree", count: 6 },
        ],
      },
      {
        type: "matching",
        title: "Match Groups to Numbers (Big!)",
        instruction: "Draw a line to match each dot group to its number.",
        left: ["● ● ● ● ●", "● ● ● ● ● ● ●", "● ● ● ● ● ●", "● ● ● ● ● ● ● ●"],
        right: ["8", "5", "7", "6"],
      },
      {
        type: "ten-frame",
        title: "Ten Frame: 6, 7, and 8",
        instruction: "Count the filled circles in each ten frame. Write the number.",
        frames: [
          { filled: 6 },
          { filled: 7 },
          { filled: 8 },
        ],
      },
      // --- MEDIUM: Count groups of 9-12 (10 activities) ---
      {
        type: "count-objects",
        title: "Count the Stars",
        instruction: "Count each group carefully. Write the total.",
        rows: [
          { object: "star", count: 9 },
          { object: "star", count: 10 },
          { object: "star", count: 8 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Elephants",
        instruction: "Count the elephants in each row. Write the total.",
        rows: [
          { object: "elephant", count: 10 },
          { object: "elephant", count: 9 },
          { object: "elephant", count: 11 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many? (Getting Bigger!)",
        instruction: "Count carefully and circle the right number.",
        questions: [
          { prompt: "A group of 9 flowers", options: ["8", "9", "10"] },
          { prompt: "A group of 10 flowers", options: ["9", "10", "11"] },
          { prompt: "A group of 11 flowers", options: ["10", "11", "12"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Apples",
        instruction: "These are bigger groups! Count carefully.",
        rows: [
          { object: "apple", count: 11 },
          { object: "apple", count: 9 },
          { object: "apple", count: 12 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Pencils",
        instruction: "Count each group of pencils. Write the total.",
        rows: [
          { object: "pencil", count: 9 },
          { object: "pencil", count: 12 },
          { object: "pencil", count: 10 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Fish",
        instruction: "Point to each fish as you count. Write the total.",
        rows: [
          { object: "fish", count: 10 },
          { object: "fish", count: 12 },
          { object: "fish", count: 11 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Matches?",
        instruction: "Count the group. Circle the matching number.",
        questions: [
          { prompt: "A group of 10 stars", options: ["9", "10", "11"] },
          { prompt: "A group of 12 stars", options: ["11", "12", "13"] },
          { prompt: "A group of 9 stars", options: ["8", "9", "10"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Cups",
        instruction: "Count each group of cups carefully. Write the number.",
        rows: [
          { object: "cup", count: 11 },
          { object: "cup", count: 10 },
          { object: "cup", count: 12 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frame: 9, 10, 11, 12",
        instruction: "Count the filled circles in each ten frame. Write the number.",
        frames: [
          { filled: 9 },
          { filled: 10 },
          { filled: 8 },
        ],
      },
      {
        type: "matching",
        title: "Match Groups 9-12",
        instruction: "Draw a line from each group description to the correct number.",
        left: ["A group of 9 dots", "A group of 11 dots", "A group of 10 dots", "A group of 12 dots"],
        right: ["11", "9", "12", "10"],
      },
      // --- HARDER: Count groups of 13-16 (10 activities) ---
      {
        type: "count-objects",
        title: "Count the Flowers — Teen Numbers!",
        instruction: "Count the flowers. Remember your teen numbers!",
        rows: [
          { object: "flower", count: 13 },
          { object: "flower", count: 15 },
          { object: "flower", count: 14 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Bananas",
        instruction: "Count each group of bananas. These are teen numbers!",
        rows: [
          { object: "banana", count: 14 },
          { object: "banana", count: 13 },
          { object: "banana", count: 15 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Hearts",
        instruction: "Count slowly and carefully. Write the total.",
        rows: [
          { object: "heart", count: 14 },
          { object: "heart", count: 16 },
          { object: "heart", count: 13 },
        ],
      },
      {
        type: "circle-correct",
        title: "Big Group Challenge",
        instruction: "Count the objects. Circle the correct total.",
        questions: [
          { prompt: "A group of 13 butterflies", options: ["12", "13", "14"] },
          { prompt: "A group of 15 butterflies", options: ["14", "15", "16"] },
          { prompt: "A group of 14 butterflies", options: ["13", "14", "15"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Books",
        instruction: "Count the books carefully. Write the total.",
        rows: [
          { object: "book", count: 15 },
          { object: "book", count: 13 },
          { object: "book", count: 16 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Diamonds",
        instruction: "Try counting in groups of 5 to help!",
        rows: [
          { object: "diamond", count: 15 },
          { object: "diamond", count: 13 },
          { object: "diamond", count: 16 },
        ],
      },
      {
        type: "circle-correct",
        title: "Teen Number Check",
        instruction: "Count carefully and circle the right answer.",
        questions: [
          { prompt: "A group of 16 stars", options: ["15", "16", "17"] },
          { prompt: "A group of 14 apples", options: ["13", "14", "15"] },
          { prompt: "A group of 13 hearts", options: ["12", "13", "14"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Suns",
        instruction: "Count each group of suns. Write the total.",
        rows: [
          { object: "sun", count: 16 },
          { object: "sun", count: 14 },
          { object: "sun", count: 15 },
        ],
      },
      {
        type: "matching",
        title: "Match Big Groups",
        instruction: "Count each group and match it to the correct number.",
        left: ["13 stars", "15 stars", "10 stars", "16 stars"],
        right: ["15", "10", "16", "13"],
      },
      {
        type: "count-objects",
        title: "Count the Cars",
        instruction: "Point to each car as you count. Write the total.",
        rows: [
          { object: "car", count: 13 },
          { object: "car", count: 16 },
          { object: "car", count: 14 },
        ],
      },
      // --- CHALLENGE: Count groups of 17-20 (10 activities) ---
      {
        type: "count-objects",
        title: "Count the Stars — Nearly 20!",
        instruction: "These are big groups! Count very carefully.",
        rows: [
          { object: "star", count: 17 },
          { object: "star", count: 18 },
          { object: "star", count: 20 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Butterflies — Super Challenge!",
        instruction: "Point to each one as you count. Write the total.",
        rows: [
          { object: "butterfly", count: 19 },
          { object: "butterfly", count: 17 },
          { object: "butterfly", count: 20 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Flowers — Big Numbers!",
        instruction: "Count slowly and carefully. Write the total.",
        rows: [
          { object: "flower", count: 18 },
          { object: "flower", count: 20 },
          { object: "flower", count: 17 },
        ],
      },
      {
        type: "circle-correct",
        title: "Counting Super Quiz",
        instruction: "Answer each question by circling the right number.",
        questions: [
          { prompt: "What number comes after 17?", options: ["16", "18", "19"] },
          { prompt: "If you have 15 apples and get 2 more, how many?", options: ["16", "17", "18"] },
          { prompt: "How many fingers on 4 hands?", options: ["15", "20", "10"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Hearts — The Big Challenge!",
        instruction: "Count each group. Try counting in groups of 5!",
        rows: [
          { object: "heart", count: 20 },
          { object: "heart", count: 18 },
          { object: "heart", count: 19 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Big Groups?",
        instruction: "Count the objects. Circle the correct total.",
        questions: [
          { prompt: "A group of 17 diamonds", options: ["16", "17", "18"] },
          { prompt: "A group of 19 fish", options: ["18", "19", "20"] },
          { prompt: "A group of 18 apples", options: ["17", "18", "19"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Teddies",
        instruction: "Count each group of teddies. Write the total.",
        rows: [
          { object: "teddy", count: 17 },
          { object: "teddy", count: 19 },
          { object: "teddy", count: 18 },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Spoons — Last Stretch!",
        instruction: "Almost at 20! Count carefully and write the total.",
        rows: [
          { object: "spoon", count: 20 },
          { object: "spoon", count: 17 },
          { object: "spoon", count: 19 },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has More?",
        instruction: "Count both groups. Circle the group that has MORE.",
        pairs: [
          { leftCount: 8, rightCount: 5, object: "star", question: "Which has more?" },
          { leftCount: 6, rightCount: 9, object: "heart", question: "Which has more?" },
          { leftCount: 10, rightCount: 10, object: "apple", question: "Which has more? Or are they equal?" },
        ],
      },
      {
        type: "circle-correct",
        title: "Subitising & Counting Master Quiz",
        instruction: "Answer these tricky questions!",
        questions: [
          { prompt: "If you see 5 dots instantly, that is called...", options: ["counting", "subitising", "adding"] },
          { prompt: "What is the quickest way to know there are 3 objects?", options: ["Count 1, 2, 3", "Just see it!", "Guess"] },
          { prompt: "Which is bigger: 14 or 17?", options: ["14", "17", "They are equal"] },
          { prompt: "How many is two groups of 10?", options: ["10", "15", "20"] },
        ],
      },
      // --- Improvement: Ten-frame activities ---
      {
        type: "ten-frame",
        title: "Ten-Frame: How Many Dots?",
        instruction: "Look at each ten-frame. Count the dots and write the number in the box. Try to see the number without counting one by one!",
        frames: [
          { filled: 3 },
          { filled: 5 },
          { filled: 2 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten-Frame: A Little More",
        instruction: "Count the filled circles. Write the number you see.",
        frames: [
          { filled: 4 },
          { filled: 1 },
          { filled: 5 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten-Frame: Bigger Numbers",
        instruction: "These ten-frames have more dots. Write the number you see.",
        frames: [
          { filled: 7 },
          { filled: 9 },
          { filled: 6 },
          { filled: 10 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten-Frame: How Many Empty?",
        instruction: "Count the EMPTY squares in each ten-frame. Write how many are empty.",
        frames: [
          { filled: 8 },
          { filled: 4 },
          { filled: 6 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten-Frame: Quick Look!",
        instruction: "Look at each ten-frame for just a moment. Can you tell how many WITHOUT counting? This is subitising!",
        frames: [
          { filled: 5 },
          { filled: 3 },
          { filled: 8 },
          { filled: 10 },
        ],
      },
      // --- Improvement: Dice pattern recognition ---
      {
        type: "circle-correct",
        title: "Dice Dot Patterns",
        instruction: "A dice has dot patterns. Can you recognise them WITHOUT counting? Circle the number.",
        questions: [
          { prompt: "How many dots?", promptIcon: "dice-1", options: ["1", "2", "3"] },
          { prompt: "How many dots?", promptIcon: "dice-2", options: ["1", "2", "3"] },
          { prompt: "How many dots?", promptIcon: "dice-3", options: ["2", "3", "4"] },
          { prompt: "How many dots?", promptIcon: "dice-4", options: ["3", "4", "5"] },
          { prompt: "How many dots?", promptIcon: "dice-5", options: ["4", "5", "6"] },
          { prompt: "How many dots?", promptIcon: "dice-6", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "matching",
        title: "Match Dice to Numbers",
        instruction: "Draw a line to match each dice face to the correct number.",
        leftItems: [
          { label: "Dice", objects: ["dice-1"] },
          { label: "Dice", objects: ["dice-3"] },
          { label: "Dice", objects: ["dice-5"] },
          { label: "Dice", objects: ["dice-6"] },
        ],
        rightItems: [
          { label: "5", objects: [] },
          { label: "3", objects: [] },
          { label: "1", objects: [] },
          { label: "6", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "Two Dice — How Many Altogether?",
        instruction: "Imagine rolling two dice. Add the dots together. Circle the total.",
        questions: [
          { prompt: "You roll a 1 and a 2. How many altogether?", options: ["2", "3", "4"] },
          { prompt: "You roll a 3 and a 3. How many altogether?", options: ["5", "6", "7"] },
          { prompt: "You roll a 4 and a 2. How many altogether?", options: ["5", "6", "7"] },
          { prompt: "You roll a 5 and a 1. How many altogether?", options: ["5", "6", "7"] },
        ],
      },
      // --- Improvement: Conceptual subitising (see groups within groups) ---
      {
        type: "circle-correct",
        title: "Groups Within Groups",
        instruction: "Sometimes you can see small groups inside a big group. This helps you count faster!",
        questions: [
          { prompt: "You see a group of 3 stars and a group of 2 stars. How many altogether?", options: ["4", "5", "6"] },
          { prompt: "You see a full ten-frame (10) and 3 more. How many altogether?", options: ["12", "13", "14"] },
          { prompt: "You see two groups of 5 dots. How many altogether?", options: ["8", "10", "12"] },
          { prompt: "You see a group of 4 and a group of 4. How many altogether?", options: ["6", "8", "10"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Groups Within Groups",
        instruction: "Can you see the small groups inside the big group? Add them together!",
        questions: [
          { prompt: "You see a group of 2 fish and a group of 3 fish. How many altogether?", options: ["4", "5", "6"] },
          { prompt: "You see a group of 5 and a group of 5. How many altogether?", options: ["8", "10", "12"] },
          { prompt: "You see a group of 4 hearts and a group of 3 hearts. How many altogether?", options: ["6", "7", "8"] },
          { prompt: "You see a full ten-frame (10) and 5 more. How many altogether?", options: ["14", "15", "16"] },
        ],
      },
      // --- Improvement: Open-ended drawing ---
      {
        type: "open-response",
        title: "Draw a Ten-Frame",
        instruction: "Draw your own ten-frame (a rectangle split into 10 boxes — 2 rows of 5). Then fill in dots.",
        prompts: [
          { text: "Draw a ten-frame showing 4:", type: "box" },
          { text: "Draw a ten-frame showing 7:", type: "box" },
          { text: "Draw a ten-frame showing 10:", type: "box" },
        ],
      },
      // --- Additional activities ---
      {
        type: "picture-graph",
        title: "Objects Counted Today",
        instruction: "This graph shows how many of each object a class counted. Answer the questions.",
        rows: [
          { label: "Stars", icon: "star", count: 6 },
          { label: "Apples", icon: "apple", count: 4 },
          { label: "Fish", icon: "fish", count: 8 },
          { label: "Hearts", icon: "heart", count: 5 },
        ],
        questions: [
          "How many objects were counted altogether?",
          "Which object had the most counted?",
          "How many more fish than apples were counted?",
        ],
      },
      {
        type: "tally-chart",
        title: "Tally Dot Counts",
        instruction: "Count the objects and record using tally marks. Write the total.",
        categories: [
          { label: "Stars", icon: "star", count: 4 },
          { label: "Hearts", icon: "heart", count: 7 },
          { label: "Fish", icon: "fish", count: 6 },
          { label: "Flowers", icon: "flower", count: 9 },
        ],
      },
      {
        type: "open-response",
        title: "What Is Subitising?",
        instruction: "Write your own explanation of subitising in your own words.",
        prompts: [
          { text: "Subitising means: _______________", type: "lines", lines: 2 },
          { text: "A number I can subitise easily is: ___", type: "lines", lines: 1 },
          { text: "Draw a dot pattern that is easy to subitise:", type: "box" },
        ],
      },
      {
        type: "sequence",
        title: "Order the Dot Counts",
        instruction: "Write 1st to 5th to put these dot counts in order from smallest to largest.",
        items: [
          { label: "7 dots" },
          { label: "3 dots" },
          { label: "12 dots" },
          { label: "5 dots" },
          { label: "9 dots" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Can You Subitise It?",
        instruction: "Sort these numbers. Which ones can most people recognise at a glance without counting?",
        columns: ["Easy to subitise (1–5)", "Need to count (6–20)"],
        items: [
          { label: "2" },
          { label: "8" },
          { label: "4" },
          { label: "15" },
          { label: "1" },
          { label: "11" },
        ],
      },
      {
        type: "open-response",
        title: "Draw Dot Patterns",
        instruction: "Draw a neat dot pattern for each number that someone could subitise quickly.",
        prompts: [
          { text: "Draw a pattern for 4:", type: "box" },
          { text: "Draw a pattern for 6:", type: "box" },
          { text: "Draw a pattern for 3:", type: "box" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Dot Group Has More?",
        instruction: "Look at each pair of dot groups. Circle which has MORE.",
        pairs: [
          { leftCount: 4, rightCount: 7, object: "circle", question: "Which group has more dots?" },
          { leftCount: 9, rightCount: 6, object: "star", question: "Which group has more dots?" },
          { leftCount: 5, rightCount: 5, object: "heart", question: "Are the groups equal?" },
        ],
      },
      {
        type: "number-bonds",
        title: "Subitising Number Bonds",
        instruction: "Use dot groups to find each missing part.",
        bonds: [
          { total: 5, partA: 3, partB: null },
          { total: 7, partA: null, partB: 4 },
          { total: 6, partA: 2, partB: null },
          { total: 8, partA: null, partB: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Subitising with Fingers",
        instruction: "Imagine holding up fingers. Circle the number you would see.",
        questions: [
          { prompt: "Both thumbs up", options: ["1", "2", "3"] },
          { prompt: "All fingers on one hand plus 2 on the other", options: ["6", "7", "8"] },
          { prompt: "Three fingers on each hand", options: ["5", "6", "7"] },
          { prompt: "All fingers on both hands", options: ["9", "10", "11"] },
        ],
      },
      {
        type: "matching",
        title: "Match Dot Patterns to Numbers",
        instruction: "Draw a line from each dot description to the correct number.",
        left: ["Two rows of 5 dots", "One row of 3 dots", "A square of 4 dots", "Three rows of 2 dots"],
        right: ["6", "4", "3", "10"],
      },
      {
        type: "count-objects",
        title: "Count the Buckets",
        instruction: "Count each group of buckets. Write the total.",
        rows: [
          { object: "bucket", count: 5 },
          { object: "bucket", count: 9 },
          { object: "bucket", count: 14 },
          { object: "bucket", count: 18 },
        ],
      },
      {
        type: "open-response",
        title: "Prove You Can Subitise",
        instruction: "Roll a dice 5 times. Each time, write the number WITHOUT counting the dots.",
        prompts: [
          { text: "Roll 1: ___ | Roll 2: ___ | Roll 3: ___ | Roll 4: ___ | Roll 5: ___", type: "lines", lines: 1 },
          { text: "Which numbers were easiest to recognise? Why?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Count On From a Number",
        instruction: "Start from the given number and count on. Circle the answer.",
        questions: [
          { prompt: "Start at 8, count on 2. You reach...", options: ["9", "10", "11"] },
          { prompt: "Start at 12, count on 3. You reach...", options: ["14", "15", "16"] },
          { prompt: "Start at 6, count on 4. You reach...", options: ["9", "10", "11"] },
          { prompt: "Start at 15, count on 2. You reach...", options: ["16", "17", "18"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: More Than 5 or Not?",
        instruction: "Sort these counts into the correct group.",
        columns: ["5 or fewer", "More than 5"],
        items: [
          { label: "3 dots" },
          { label: "8 dots" },
          { label: "5 dots" },
          { label: "12 dots" },
          { label: "1 dot" },
          { label: "7 dots" },
        ],
      },
      {
        type: "open-response",
        title: "Count Backwards",
        instruction: "Practise counting backwards. Fill in the missing numbers.",
        prompts: [
          { text: "10, 9, ___, 7, ___, 5, ___, 3, ___, 1, 0", type: "lines", lines: 1 },
          { text: "20, ___, 18, ___, 16, ___, 14, ___, 12, ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick Subitise Quiz",
        instruction: "Answer as fast as you can without counting one by one.",
        questions: [
          { prompt: "Dice showing 3 dots plus dice showing 2 dots — total?", options: ["4", "5", "6"] },
          { prompt: "A group of 5 and a group of 5 — total?", options: ["8", "10", "12"] },
          { prompt: "Two groups of 4 dots — total?", options: ["6", "8", "10"] },
          { prompt: "If you subitise a group as 6, how many dots?", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "compare-groups",
        title: "Bigger or Smaller Group?",
        instruction: "Look at each pair. Decide which group has MORE and circle it.",
        pairs: [
          { leftCount: 13, rightCount: 17, object: "star", question: "Which is more: 13 or 17?" },
          { leftCount: 7, rightCount: 3, object: "apple", question: "Which is more: 7 or 3?" },
          { leftCount: 10, rightCount: 10, object: "heart", question: "Are these groups equal?" },
        ],
      },
      {
        type: "open-response",
        title: "Describe What You See",
        instruction: "Look at a group of objects. Write how you counted them.",
        prompts: [
          { text: "I saw ___ objects. I counted them by: _______________", type: "lines", lines: 1 },
          { text: "The fastest way to count a group of 10 is: _______________", type: "lines", lines: 2 },
          { text: "Subitising is useful because: _______________", type: "lines", lines: 2 },
        ],
      },
      {
        type: "number-bonds",
        title: "Dot Group Bonds",
        instruction: "Two groups of dots are combined. Fill in the missing total or part.",
        bonds: [
          { total: 10, partA: 6, partB: null },
          { total: 9, partA: null, partB: 4 },
          { total: 8, partA: 3, partB: null },
          { total: 7, partA: null, partB: 2 },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Build subitising skills with these quick, fun activities.",
        suggestions: [
          "Make a ten-frame from an egg carton (cut to 10 holes) and use pom poms or buttons as counters. Flash different amounts and ask 'how many?'",
          "Play dice games! Roll a dice and say the number as fast as you can without counting the dots.",
          "Put small groups of objects (1-5) on a plate. Cover them, flash for 2 seconds, then cover again. How many did you see?",
          "Play 'Fingers Flash' — hold up some fingers quickly, then hide. Your child says how many they saw.",
          "Collect groups of small toys (e.g. 7 cars, 12 blocks) and practise counting them together every day. Repetition builds confidence!",
        ],
      },
    ],
  },

  // 3. Compare collections
  {
    slug: "compare-collections",
    title: "Compare Collections",
    strand: "Number",
    description: "Compare the size of collections to at least 20",
    lesson: {
      title: "More, Fewer or the Same?",
      objective: "Compare two groups of objects and describe which has more, fewer, or whether they are the same.",
      materials: [
        "Two sets of small objects in two different colours (e.g. 10 red buttons and 10 blue buttons)",
        "Two plates or pieces of paper as sorting areas",
      ],
      intro: {
        title: "Two Teams",
        script: "I have two teams! The red team and the blue team. Who has more players? Let's find out — I'll put one on each team's plate at a time. One for red, one for blue, one for red, one for blue...",
        action: "Place objects on two plates alternately. Make the groups noticeably different first (e.g. 4 vs 9). Ask: 'Which plate has more? How can you tell?' Let your child guess before counting. Then count each group to confirm.",
      },
      mainActivity: {
        title: "Line Them Up",
        script: "Here's a brilliant trick for comparing — line them up in two rows, matching each one up! One here, one there, one here, one there. Now which row has some left over? That group has more! And the shorter row? Fewer!",
        action: "Practice one-to-one matching in two rows. Try equal groups (same amount) so they discover 'the same'. Try groups that differ by just 1 so they have to look carefully. Use the words: more, fewer, the same, equal. Let your child create their own groups to compare.",
      },
      wrapUp: {
        title: "Tell Me the Story",
        script: "Now YOU set it up! Put some on each plate — make sure one plate has more and one has fewer. Then tell me about it: 'The red plate has ___ and the blue plate has ___, so the red plate has MORE.'",
        action: "Your child creates unequal groups and narrates the comparison. Prompt with: 'How do you know which has more?' Any valid strategy is great — counting, lining up, or just looking.",
      },
    },
    activities: [
      // --- EASY: Comparing tiny groups (1–5) ---
      {
        type: "compare-groups",
        title: "Which Group Has More? (Tiny Groups)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 2, rightCount: 1, object: "star", question: "Which group has more stars?" },
          { leftCount: 1, rightCount: 3, object: "apple", question: "Which group has more apples?" },
          { leftCount: 3, rightCount: 2, object: "heart", question: "Which group has more hearts?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has More? (Tiny Groups 2)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 4, rightCount: 2, object: "fish", question: "Which group has more fish?" },
          { leftCount: 1, rightCount: 5, object: "butterfly", question: "Which group has more butterflies?" },
          { leftCount: 3, rightCount: 4, object: "flower", question: "Which group has more flowers?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Tiny Groups)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 3, rightCount: 1, object: "fish", question: "Which group has fewer fish?" },
          { leftCount: 2, rightCount: 4, object: "flower", question: "Which group has fewer flowers?" },
          { leftCount: 5, rightCount: 3, object: "butterfly", question: "Which group has fewer butterflies?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Tiny Groups 2)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 4, rightCount: 1, object: "diamond", question: "Which group has fewer diamonds?" },
          { leftCount: 5, rightCount: 2, object: "star", question: "Which group has fewer stars?" },
          { leftCount: 3, rightCount: 5, object: "apple", question: "Which group has fewer apples?" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Stars",
        instruction: "Count each group of stars. Write the number. Then circle the group with MORE.",
        groups: [
          { objects: Array(2).fill("star"), label: "Group A" },
          { objects: Array(4).fill("star"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Flowers",
        instruction: "Count each group of flowers. Write the number. Then circle the group with MORE.",
        groups: [
          { objects: Array(1).fill("flower"), label: "Group A" },
          { objects: Array(3).fill("flower"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Hearts",
        instruction: "Count each group of hearts. Write the number. Then circle the group with FEWER.",
        groups: [
          { objects: Array(5).fill("heart"), label: "Group A" },
          { objects: Array(3).fill("heart"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Fish",
        instruction: "Count each group of fish. Write the number. Then circle the group with FEWER.",
        groups: [
          { objects: Array(4).fill("fish"), label: "Group A" },
          { objects: Array(2).fill("fish"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "More or Fewer?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "2 apples and 4 apples — which is more?", options: ["2", "4"] },
          { prompt: "5 stars and 3 stars — which is fewer?", options: ["5", "3"] },
          { prompt: "1 fish and 1 fish — the groups are...", options: ["more", "fewer", "equal"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More or Fewer? (Practice 2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3 hearts and 5 hearts — which is more?", options: ["3", "5"] },
          { prompt: "4 flowers and 2 flowers — which is fewer?", options: ["4", "2"] },
          { prompt: "3 diamonds and 3 diamonds — the groups are...", options: ["more", "fewer", "equal"] },
        ],
      },
      {
        type: "compare-groups",
        title: "Same or Different?",
        instruction: "Look at each pair. Are they the SAME number or DIFFERENT? Circle 'same' or 'different'.",
        pairs: [
          { leftCount: 3, rightCount: 3, object: "diamond", question: "Same or different?" },
          { leftCount: 2, rightCount: 5, object: "star", question: "Same or different?" },
          { leftCount: 4, rightCount: 4, object: "flower", question: "Same or different?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Same or Different? (Practice 2)",
        instruction: "Look at each pair. Are they the SAME number or DIFFERENT? Circle 'same' or 'different'.",
        pairs: [
          { leftCount: 1, rightCount: 1, object: "apple", question: "Same or different?" },
          { leftCount: 5, rightCount: 3, object: "heart", question: "Same or different?" },
          { leftCount: 2, rightCount: 2, object: "fish", question: "Same or different?" },
        ],
      },
      {
        type: "matching",
        title: "Match Groups That Are Equal",
        instruction: "Draw a line to match the groups that have the SAME number.",
        leftItems: [
          { label: "2 stars", objects: Array(2).fill("star") },
          { label: "4 hearts", objects: Array(4).fill("heart") },
          { label: "3 fish", objects: Array(3).fill("fish") },
        ],
        rightItems: [
          { label: "3 apples", objects: Array(3).fill("apple") },
          { label: "2 flowers", objects: Array(2).fill("flower") },
          { label: "4 diamonds", objects: Array(4).fill("diamond") },
        ],
      },
      {
        type: "matching",
        title: "Match Groups That Are Equal (Practice 2)",
        instruction: "Draw a line to match the groups that have the SAME number.",
        leftItems: [
          { label: "5 butterflies", objects: Array(5).fill("butterfly") },
          { label: "1 diamond", objects: Array(1).fill("diamond") },
          { label: "3 flowers", objects: Array(3).fill("flower") },
        ],
        rightItems: [
          { label: "3 hearts", objects: Array(3).fill("heart") },
          { label: "5 fish", objects: Array(5).fill("fish") },
          { label: "1 star", objects: Array(1).fill("star") },
        ],
      },
      {
        type: "count-objects",
        title: "Which Basket Has More Apples?",
        instruction: "Count the apples in each basket. Write the number. Circle the basket with MORE apples.",
        groups: [
          { objects: Array(3).fill("apple"), label: "Basket A" },
          { objects: Array(5).fill("apple"), label: "Basket B" },
        ],
      },
      {
        type: "count-objects",
        title: "Which Box Has Fewer Diamonds?",
        instruction: "Count the diamonds in each box. Write the number. Circle the box with FEWER diamonds.",
        groups: [
          { objects: Array(4).fill("diamond"), label: "Box A" },
          { objects: Array(1).fill("diamond"), label: "Box B" },
        ],
      },

      // --- MEDIUM: Comparing groups (1–10) ---
      {
        type: "compare-groups",
        title: "Which Group Has More? (Up to 10)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 5, rightCount: 8, object: "star", question: "Which group has more stars?" },
          { leftCount: 7, rightCount: 4, object: "apple", question: "Which group has more apples?" },
          { leftCount: 6, rightCount: 9, object: "fish", question: "Which group has more fish?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has More? (Up to 10, Practice 2)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 3, rightCount: 7, object: "diamond", question: "Which group has more diamonds?" },
          { leftCount: 9, rightCount: 6, object: "butterfly", question: "Which group has more butterflies?" },
          { leftCount: 4, rightCount: 10, object: "heart", question: "Which group has more hearts?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Up to 10)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 8, rightCount: 6, object: "heart", question: "Which group has fewer hearts?" },
          { leftCount: 3, rightCount: 7, object: "butterfly", question: "Which group has fewer butterflies?" },
          { leftCount: 10, rightCount: 5, object: "flower", question: "Which group has fewer flowers?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Up to 10, Practice 2)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 9, rightCount: 4, object: "star", question: "Which group has fewer stars?" },
          { leftCount: 2, rightCount: 6, object: "apple", question: "Which group has fewer apples?" },
          { leftCount: 7, rightCount: 10, object: "diamond", question: "Which group has fewer diamonds?" },
        ],
      },
      {
        type: "circle-correct",
        title: "More, Fewer, or Equal?",
        instruction: "Read each sentence. Circle the correct answer.",
        questions: [
          { prompt: "6 stars and 6 hearts — the groups are...", options: ["more", "fewer", "equal"] },
          { prompt: "4 fish and 9 fish — 4 is...", options: ["more", "fewer", "equal"] },
          { prompt: "10 apples and 7 apples — 10 is...", options: ["more", "fewer", "equal"] },
          { prompt: "8 flowers and 8 flowers — the groups are...", options: ["more", "fewer", "equal"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More, Fewer, or Equal? (Practice 2)",
        instruction: "Read each sentence. Circle the correct answer.",
        questions: [
          { prompt: "5 diamonds and 5 diamonds — the groups are...", options: ["more", "fewer", "equal"] },
          { prompt: "3 butterflies and 8 butterflies — 3 is...", options: ["more", "fewer", "equal"] },
          { prompt: "9 stars and 6 stars — 9 is...", options: ["more", "fewer", "equal"] },
          { prompt: "7 hearts and 7 hearts — the groups are...", options: ["more", "fewer", "equal"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Flowers",
        instruction: "Count the flowers in each garden. Write the number. Circle the garden with MORE flowers.",
        groups: [
          { objects: Array(7).fill("flower"), label: "Garden A" },
          { objects: Array(4).fill("flower"), label: "Garden B" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Diamonds",
        instruction: "Count the diamonds in each box. Write the number. Circle the box with MORE diamonds.",
        groups: [
          { objects: Array(3).fill("diamond"), label: "Box A" },
          { objects: Array(8).fill("diamond"), label: "Box B" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Fish",
        instruction: "Count the fish in each pond. Write the number. Circle the pond with FEWER fish.",
        groups: [
          { objects: Array(6).fill("fish"), label: "Pond A" },
          { objects: Array(9).fill("fish"), label: "Pond B" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Butterflies",
        instruction: "Count the butterflies in each garden. Write the number. Circle the garden with FEWER butterflies.",
        groups: [
          { objects: Array(10).fill("butterfly"), label: "Garden A" },
          { objects: Array(5).fill("butterfly"), label: "Garden B" },
        ],
      },
      {
        type: "matching",
        title: "Match More to Fewer",
        instruction: "Draw a line from each group on the left to the group on the right that has FEWER.",
        leftItems: [
          { label: "8 stars", objects: Array(8).fill("star") },
          { label: "6 hearts", objects: Array(6).fill("heart") },
          { label: "10 apples", objects: Array(10).fill("apple") },
        ],
        rightItems: [
          { label: "3 hearts", objects: Array(3).fill("heart") },
          { label: "5 stars", objects: Array(5).fill("star") },
          { label: "7 apples", objects: Array(7).fill("apple") },
        ],
      },
      {
        type: "matching",
        title: "Match Equal Groups (Up to 10)",
        instruction: "Draw a line to match the groups that have the SAME number.",
        leftItems: [
          { label: "6 fish", objects: Array(6).fill("fish") },
          { label: "9 diamonds", objects: Array(9).fill("diamond") },
          { label: "7 flowers", objects: Array(7).fill("flower") },
        ],
        rightItems: [
          { label: "7 butterflies", objects: Array(7).fill("butterfly") },
          { label: "6 apples", objects: Array(6).fill("apple") },
          { label: "9 stars", objects: Array(9).fill("star") },
        ],
      },
      {
        type: "compare-groups",
        title: "Biggest Group",
        instruction: "Look at all three groups. Circle the group that has the MOST.",
        pairs: [
          { leftCount: 4, rightCount: 9, object: "star", question: "Which has the most?" },
          { leftCount: 7, rightCount: 3, object: "diamond", question: "Which has the most?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Smallest Group",
        instruction: "Look at each pair. Circle the group that has the LEAST.",
        pairs: [
          { leftCount: 8, rightCount: 2, object: "flower", question: "Which has the least?" },
          { leftCount: 5, rightCount: 10, object: "fish", question: "Which has the least?" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Bigger?",
        instruction: "Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["3", "8"] },
          { prompt: "Which is bigger?", options: ["10", "6"] },
          { prompt: "Which is bigger?", options: ["5", "9"] },
          { prompt: "Which is bigger?", options: ["7", "2"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Bigger? (Practice 2)",
        instruction: "Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["4", "6"] },
          { prompt: "Which is bigger?", options: ["1", "9"] },
          { prompt: "Which is bigger?", options: ["8", "3"] },
          { prompt: "Which is bigger?", options: ["2", "10"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Smaller?",
        instruction: "Circle the smaller number.",
        questions: [
          { prompt: "Which is smaller?", options: ["4", "7"] },
          { prompt: "Which is smaller?", options: ["10", "1"] },
          { prompt: "Which is smaller?", options: ["6", "3"] },
          { prompt: "Which is smaller?", options: ["8", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Smaller? (Practice 2)",
        instruction: "Circle the smaller number.",
        questions: [
          { prompt: "Which is smaller?", options: ["9", "2"] },
          { prompt: "Which is smaller?", options: ["5", "7"] },
          { prompt: "Which is smaller?", options: ["1", "4"] },
          { prompt: "Which is smaller?", options: ["10", "3"] },
        ],
      },
      {
        type: "count-objects",
        title: "Three Groups of Butterflies",
        instruction: "Count the butterflies in each group. Write the numbers. Circle the group with the MOST.",
        groups: [
          { objects: Array(5).fill("butterfly"), label: "Group A" },
          { objects: Array(8).fill("butterfly"), label: "Group B" },
          { objects: Array(3).fill("butterfly"), label: "Group C" },
        ],
      },
      {
        type: "count-objects",
        title: "Three Groups of Hearts",
        instruction: "Count the hearts in each group. Write the numbers. Circle the group with the FEWEST.",
        groups: [
          { objects: Array(9).fill("heart"), label: "Group A" },
          { objects: Array(4).fill("heart"), label: "Group B" },
          { objects: Array(7).fill("heart"), label: "Group C" },
        ],
      },

      // --- HARDER: Comparing bigger groups (up to 16) ---
      {
        type: "compare-groups",
        title: "Which Group Has More? (Bigger Numbers)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 11, rightCount: 8, object: "star", question: "Which group has more stars?" },
          { leftCount: 9, rightCount: 14, object: "heart", question: "Which group has more hearts?" },
          { leftCount: 12, rightCount: 15, object: "apple", question: "Which group has more apples?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has More? (Bigger Numbers 2)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 8, rightCount: 13, object: "flower", question: "Which group has more flowers?" },
          { leftCount: 15, rightCount: 10, object: "butterfly", question: "Which group has more butterflies?" },
          { leftCount: 11, rightCount: 16, object: "diamond", question: "Which group has more diamonds?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Bigger Numbers)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 13, rightCount: 10, object: "fish", question: "Which group has fewer fish?" },
          { leftCount: 7, rightCount: 12, object: "flower", question: "Which group has fewer flowers?" },
          { leftCount: 16, rightCount: 11, object: "diamond", question: "Which group has fewer diamonds?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Bigger Numbers 2)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 14, rightCount: 9, object: "star", question: "Which group has fewer stars?" },
          { leftCount: 10, rightCount: 15, object: "apple", question: "Which group has fewer apples?" },
          { leftCount: 12, rightCount: 8, object: "heart", question: "Which group has fewer hearts?" },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Big Numbers",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "11 or 15 — which is more?", options: ["11", "15"] },
          { prompt: "14 or 9 — which is fewer?", options: ["14", "9"] },
          { prompt: "12 and 12 — they are...", options: ["more", "fewer", "equal"] },
          { prompt: "16 or 13 — which is more?", options: ["16", "13"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Big Numbers (Practice 2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "10 or 14 — which is more?", options: ["10", "14"] },
          { prompt: "15 or 8 — which is fewer?", options: ["15", "8"] },
          { prompt: "13 and 13 — they are...", options: ["more", "fewer", "equal"] },
          { prompt: "9 or 16 — which is more?", options: ["9", "16"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Big Number Is Bigger?",
        instruction: "Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["11", "14"] },
          { prompt: "Which is bigger?", options: ["16", "9"] },
          { prompt: "Which is bigger?", options: ["8", "13"] },
          { prompt: "Which is bigger?", options: ["15", "12"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Big Number Is Smaller?",
        instruction: "Circle the smaller number.",
        questions: [
          { prompt: "Which is smaller?", options: ["13", "10"] },
          { prompt: "Which is smaller?", options: ["8", "16"] },
          { prompt: "Which is smaller?", options: ["14", "11"] },
          { prompt: "Which is smaller?", options: ["9", "15"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Stars (Bigger Groups)",
        instruction: "Count the stars in each group. Write the number. Circle the group with MORE.",
        groups: [
          { objects: Array(11).fill("star"), label: "Group A" },
          { objects: Array(14).fill("star"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Count and Compare Flowers (Bigger Groups)",
        instruction: "Count the flowers in each group. Write the number. Circle the group with MORE.",
        groups: [
          { objects: Array(9).fill("flower"), label: "Group A" },
          { objects: Array(13).fill("flower"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Three Big Groups",
        instruction: "Count each group. Write the numbers. Circle the group with the FEWEST.",
        groups: [
          { objects: Array(10).fill("heart"), label: "Group A" },
          { objects: Array(6).fill("heart"), label: "Group B" },
          { objects: Array(13).fill("heart"), label: "Group C" },
        ],
      },
      {
        type: "count-objects",
        title: "Three Big Groups of Fish",
        instruction: "Count each group. Write the numbers. Circle the group with the MOST.",
        groups: [
          { objects: Array(8).fill("fish"), label: "Group A" },
          { objects: Array(15).fill("fish"), label: "Group B" },
          { objects: Array(11).fill("fish"), label: "Group C" },
        ],
      },
      {
        type: "matching",
        title: "Match Bigger to Smaller",
        instruction: "Draw a line from each bigger group to its matching smaller group.",
        leftItems: [
          { label: "14 stars", objects: Array(14).fill("star") },
          { label: "11 fish", objects: Array(11).fill("fish") },
          { label: "16 flowers", objects: Array(16).fill("flower") },
        ],
        rightItems: [
          { label: "9 fish", objects: Array(9).fill("fish") },
          { label: "12 flowers", objects: Array(12).fill("flower") },
          { label: "8 stars", objects: Array(8).fill("star") },
        ],
      },
      {
        type: "matching",
        title: "Match Equal Big Groups",
        instruction: "Draw a line to match the groups that have the SAME number.",
        leftItems: [
          { label: "12 hearts", objects: Array(12).fill("heart") },
          { label: "15 diamonds", objects: Array(15).fill("diamond") },
          { label: "10 apples", objects: Array(10).fill("apple") },
        ],
        rightItems: [
          { label: "10 butterflies", objects: Array(10).fill("butterfly") },
          { label: "12 stars", objects: Array(12).fill("star") },
          { label: "15 fish", objects: Array(15).fill("fish") },
        ],
      },

      // --- CHALLENGE: Comparing up to 20, ordering, reasoning ---
      {
        type: "compare-groups",
        title: "Which Group Has More? (Up to 20)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 17, rightCount: 13, object: "star", question: "Which group has more stars?" },
          { leftCount: 14, rightCount: 19, object: "apple", question: "Which group has more apples?" },
          { leftCount: 20, rightCount: 16, object: "butterfly", question: "Which group has more butterflies?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has More? (Up to 20, Practice 2)",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 12, rightCount: 18, object: "heart", question: "Which group has more hearts?" },
          { leftCount: 19, rightCount: 15, object: "fish", question: "Which group has more fish?" },
          { leftCount: 16, rightCount: 20, object: "flower", question: "Which group has more flowers?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Up to 20)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 18, rightCount: 12, object: "heart", question: "Which group has fewer hearts?" },
          { leftCount: 15, rightCount: 20, object: "diamond", question: "Which group has fewer diamonds?" },
          { leftCount: 11, rightCount: 17, object: "fish", question: "Which group has fewer fish?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer? (Up to 20, Practice 2)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 20, rightCount: 14, object: "star", question: "Which group has fewer stars?" },
          { leftCount: 13, rightCount: 19, object: "butterfly", question: "Which group has fewer butterflies?" },
          { leftCount: 16, rightCount: 11, object: "apple", question: "Which group has fewer apples?" },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Numbers to 20",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "18 or 13 — which is more?", options: ["18", "13"] },
          { prompt: "20 or 15 — which is fewer?", options: ["20", "15"] },
          { prompt: "17 or 17 — they are...", options: ["more", "fewer", "equal"] },
          { prompt: "11 or 19 — which is more?", options: ["11", "19"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Numbers to 20 (Practice 2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "14 or 20 — which is more?", options: ["14", "20"] },
          { prompt: "19 or 12 — which is fewer?", options: ["19", "12"] },
          { prompt: "16 or 16 — they are...", options: ["more", "fewer", "equal"] },
          { prompt: "13 or 18 — which is more?", options: ["13", "18"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Big Number Is Bigger? (Up to 20)",
        instruction: "Circle the bigger number.",
        questions: [
          { prompt: "Which is bigger?", options: ["14", "19"] },
          { prompt: "Which is bigger?", options: ["20", "11"] },
          { prompt: "Which is bigger?", options: ["13", "17"] },
          { prompt: "Which is bigger?", options: ["18", "15"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Big Number Is Smaller? (Up to 20)",
        instruction: "Circle the smaller number.",
        questions: [
          { prompt: "Which is smaller?", options: ["16", "12"] },
          { prompt: "Which is smaller?", options: ["11", "20"] },
          { prompt: "Which is smaller?", options: ["19", "14"] },
          { prompt: "Which is smaller?", options: ["13", "17"] },
        ],
      },
      {
        type: "sequence",
        title: "Order from Smallest to Biggest",
        instruction: "Write these numbers in order from smallest to biggest.",
        sequences: [
          { items: [5, 2, 8], answer: [2, 5, 8] },
          { items: [12, 7, 15], answer: [7, 12, 15] },
          { items: [20, 3, 11], answer: [3, 11, 20] },
        ],
      },
      {
        type: "sequence",
        title: "Order from Smallest to Biggest (Practice 2)",
        instruction: "Write these numbers in order from smallest to biggest.",
        sequences: [
          { items: [9, 1, 6], answer: [1, 6, 9] },
          { items: [14, 10, 18], answer: [10, 14, 18] },
          { items: [17, 5, 13], answer: [5, 13, 17] },
        ],
      },
      {
        type: "sequence",
        title: "Order from Biggest to Smallest",
        instruction: "Write these numbers in order from biggest to smallest.",
        sequences: [
          { items: [4, 9, 1], answer: [9, 4, 1] },
          { items: [16, 8, 19], answer: [19, 16, 8] },
          { items: [13, 20, 6], answer: [20, 13, 6] },
        ],
      },
      {
        type: "sequence",
        title: "Order from Biggest to Smallest (Practice 2)",
        instruction: "Write these numbers in order from biggest to smallest.",
        sequences: [
          { items: [7, 3, 10], answer: [10, 7, 3] },
          { items: [18, 11, 15], answer: [18, 15, 11] },
          { items: [20, 9, 14], answer: [20, 14, 9] },
        ],
      },
      // --- Improvement: "As many as" language ---
      {
        type: "circle-correct",
        title: "As Many As",
        instruction: "'As many as' means the same number. Circle the correct answer.",
        questions: [
          { prompt: "5 stars and 5 hearts — does the star group have as many as the heart group?", options: ["Yes", "No"] },
          { prompt: "3 apples and 7 apples — does the first group have as many as the second?", options: ["Yes", "No"] },
          { prompt: "8 fish and 8 fish — the groups have ___ each other.", options: ["More than", "Fewer than", "As many as"] },
          { prompt: "12 flowers and 9 flowers — the first group has ___ the second.", options: ["More than", "Fewer than", "As many as"] },
        ],
      },
      {
        type: "circle-correct",
        title: "As Many As (Practice 2)",
        instruction: "'As many as' means the same number. Circle the correct answer.",
        questions: [
          { prompt: "6 diamonds and 6 stars — does the diamond group have as many as the star group?", options: ["Yes", "No"] },
          { prompt: "10 butterflies and 4 butterflies — does the first group have as many as the second?", options: ["Yes", "No"] },
          { prompt: "7 hearts and 7 hearts — the groups have ___ each other.", options: ["More than", "Fewer than", "As many as"] },
          { prompt: "9 fish and 14 fish — the first group has ___ the second.", options: ["More than", "Fewer than", "As many as"] },
        ],
      },
      {
        type: "compare-groups",
        title: "As Many As — Visual",
        instruction: "Look at each pair. Do they have AS MANY AS each other? Circle 'yes' or 'no'.",
        pairs: [
          { leftCount: 4, rightCount: 4, object: "apple", question: "As many as each other?" },
          { leftCount: 6, rightCount: 3, object: "star", question: "As many as each other?" },
          { leftCount: 5, rightCount: 5, object: "heart", question: "As many as each other?" },
        ],
      },
      // --- Improvement: Draw to create equal groups ---
      {
        type: "open-response",
        title: "Draw to Make Equal",
        instruction: "Draw more objects so that both groups have the same number (as many as each other).",
        prompts: [
          { text: "Group A has 5 stars. Group B has 3 stars. Draw more stars in Group B so both groups are equal:", type: "box" },
          { text: "Group A has 4 hearts. Group B has 7 hearts. Draw more hearts in Group A so both groups are equal:", type: "box" },
          { text: "Make both groups have 6. Group A has 6 fish. Draw 6 fish for Group B:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw to Make Equal (Practice 2)",
        instruction: "Draw more objects so that both groups have the same number (as many as each other).",
        prompts: [
          { text: "Group A has 3 apples. Group B has 6 apples. Draw more apples in Group A so both groups are equal:", type: "box" },
          { text: "Group A has 8 diamonds. Group B has 5 diamonds. Draw more diamonds in Group B so both groups are equal:", type: "box" },
          { text: "Make both groups have 4. Group A has 4 flowers. Draw 4 flowers for Group B:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw More or Fewer",
        instruction: "Follow the instructions to draw the right number of objects.",
        prompts: [
          { text: "Draw a group that has MORE than 5 stars:", type: "box" },
          { text: "Draw a group that has FEWER than 4 hearts:", type: "box" },
          { text: "Draw two groups that have AS MANY AS each other:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw More or Fewer (Practice 2)",
        instruction: "Follow the instructions to draw the right number of objects.",
        prompts: [
          { text: "Draw a group that has MORE than 3 fish:", type: "box" },
          { text: "Draw a group that has FEWER than 7 apples:", type: "box" },
          { text: "Draw a group of 6 butterflies, then draw another group with FEWER butterflies:", type: "box" },
        ],
      },
      // --- Additional activities ---
      {
        type: "picture-graph",
        title: "Comparing Favourite Fruits",
        instruction: "This graph shows how many children chose each fruit. Answer the questions.",
        rows: [
          { label: "Apple", icon: "apple", count: 6 },
          { label: "Banana", icon: "banana", count: 4 },
          { label: "Grapes", icon: "grape", count: 8 },
          { label: "Watermelon", icon: "watermelon", count: 3 },
        ],
        questions: [
          "Which fruit was chosen most often?",
          "Which fruit was chosen least often?",
          "How many more chose grapes than bananas?",
        ],
      },
      {
        type: "tally-chart",
        title: "Tally Collections",
        instruction: "Count the objects in each group using tally marks. Write the total.",
        categories: [
          { label: "Stars", icon: "star", count: 9 },
          { label: "Hearts", icon: "heart", count: 6 },
          { label: "Fish", icon: "fish", count: 11 },
          { label: "Flowers", icon: "flower", count: 7 },
        ],
      },
      {
        type: "open-response",
        title: "Comparison Words",
        instruction: "Write what each comparison word means in your own words.",
        prompts: [
          { text: "More than means: _______________", type: "lines", lines: 1 },
          { text: "Fewer than means: _______________", type: "lines", lines: 1 },
          { text: "Equal to means: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sequence",
        title: "Order Groups by Size",
        instruction: "Write 1st to 5th to order these groups from smallest to largest.",
        items: [
          { label: "8 fish" },
          { label: "3 fish" },
          { label: "15 fish" },
          { label: "11 fish" },
          { label: "6 fish" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Fewer or More Than 10?",
        instruction: "Sort each group into the correct column.",
        columns: ["Fewer than 10", "10 or more"],
        items: [
          { label: "7 stars" },
          { label: "14 hearts" },
          { label: "9 apples" },
          { label: "12 fish" },
          { label: "4 flowers" },
          { label: "10 butterflies" },
        ],
      },
      {
        type: "open-response",
        title: "Write a Comparison Sentence",
        instruction: "Look at each pair and write a sentence using more than, fewer than, or equal to.",
        prompts: [
          { text: "5 apples and 8 apples: _______________", type: "lines", lines: 1 },
          { text: "7 stars and 7 stars: _______________", type: "lines", lines: 1 },
          { text: "12 flowers and 9 flowers: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Teen Number Groups",
        instruction: "Compare each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 11, rightCount: 15, object: "star", question: "Which is more: 11 or 15?" },
          { leftCount: 18, rightCount: 13, object: "apple", question: "Which is more: 18 or 13?" },
          { leftCount: 16, rightCount: 16, object: "heart", question: "Are these equal?" },
        ],
      },
      {
        type: "number-bonds",
        title: "Two Groups Combined",
        instruction: "Two groups are joined into one total. Fill in the missing number.",
        bonds: [
          { total: 10, partA: 4, partB: null },
          { total: 12, partA: null, partB: 5 },
          { total: 9, partA: 3, partB: null },
          { total: 11, partA: null, partB: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Comparison Symbols",
        instruction: "Circle the correct symbol or word to compare each pair of numbers.",
        questions: [
          { prompt: "6 ___ 9 (which symbol fits?)", options: ["<", ">", "="] },
          { prompt: "15 ___ 12 (which symbol fits?)", options: ["<", ">", "="] },
          { prompt: "8 ___ 8 (which symbol fits?)", options: ["<", ">", "="] },
          { prompt: "3 ___ 7 (which symbol fits?)", options: ["<", ">", "="] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False?",
        instruction: "Read each statement. Circle True or False.",
        questions: [
          { prompt: "7 is more than 5", options: ["True", "False"] },
          { prompt: "12 is fewer than 9", options: ["True", "False"] },
          { prompt: "14 is equal to 14", options: ["True", "False"] },
          { prompt: "0 is more than 1", options: ["True", "False"] },
        ],
      },
      {
        type: "matching",
        title: "Match Comparison Sentences",
        instruction: "Draw a line to match each pair to the correct comparison.",
        left: ["4 and 4", "3 and 7", "10 and 6", "8 and 11"],
        right: ["8 is fewer", "10 is more", "3 is fewer", "they are equal"],
      },
      {
        type: "ten-frame",
        title: "Ten Frame Comparison",
        instruction: "Count each ten frame. Write the numbers and decide which has more.",
        frames: [
          { filled: 6, total: 10 },
          { filled: 9, total: 10 },
          { filled: 4, total: 10 },
          { filled: 10, total: 10 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Number Is Bigger?",
        instruction: "Circle the bigger number in each pair.",
        questions: [
          { prompt: "13 or 9", options: ["13", "9"] },
          { prompt: "17 or 20", options: ["17", "20"] },
          { prompt: "11 or 8", options: ["11", "8"] },
          { prompt: "6 or 6", options: ["6", "6", "equal"] },
        ],
      },
      {
        type: "open-response",
        title: "One More, One Less",
        instruction: "Write the number that is one more and one less than each number.",
        prompts: [
          { text: "One less than 8: ___ | One more than 8: ___", type: "lines", lines: 1 },
          { text: "One less than 15: ___ | One more than 15: ___", type: "lines", lines: 1 },
          { text: "One less than 20: ___ | One more than 20: ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "picture-graph",
        title: "Class Pet Vote",
        instruction: "Children voted for a class pet. Look at the graph and answer the questions.",
        rows: [
          { label: "Cat", icon: "cat", count: 7 },
          { label: "Dog", icon: "dog", count: 9 },
          { label: "Fish", icon: "fish", count: 4 },
          { label: "Bird", icon: "bird", count: 5 },
        ],
        questions: [
          "Which pet got the most votes?",
          "Which pet got the fewest votes?",
          "How many children voted in total?",
        ],
      },
      {
        type: "compare-groups",
        title: "Compare to 10",
        instruction: "Compare each number to 10. Is it more, fewer, or equal?",
        pairs: [
          { leftCount: 7, rightCount: 10, object: "flower", question: "Is 7 more or fewer than 10?" },
          { leftCount: 13, rightCount: 10, object: "star", question: "Is 13 more or fewer than 10?" },
          { leftCount: 10, rightCount: 10, object: "apple", question: "Is 10 equal to 10?" },
        ],
      },
      {
        type: "open-response",
        title: "Explain Your Thinking",
        instruction: "Answer these questions using full sentences.",
        prompts: [
          { text: "How do you know if two groups are equal?", type: "lines", lines: 2 },
          { text: "Is 15 more or fewer than 20? How do you know?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "number-bonds",
        title: "Comparison Bonds",
        instruction: "Find the missing part so the total is correct.",
        bonds: [
          { total: 15, partA: 8, partB: null },
          { total: 20, partA: null, partB: 11 },
          { total: 13, partA: 7, partB: null },
          { total: 17, partA: null, partB: 9 },
        ],
      },
      {
        type: "sequence",
        title: "Order Numbers from Smallest to Largest",
        instruction: "Write 1st, 2nd, 3rd, 4th, 5th to order these numbers.",
        items: [
          { label: "19" },
          { label: "4" },
          { label: "12" },
          { label: "7" },
          { label: "20" },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Practise comparing with real objects around the house.",
        suggestions: [
          "Line up two groups of toys or snacks side by side. Ask: 'Which group has more? Which has fewer? How do you know?'",
          "Give your child two handfuls of pasta. Ask them to count each and tell you which has more, fewer, or if they are equal.",
          "Play 'Make it equal' — put 7 blocks in a row, then ask your child to make another row with as many as the first.",
          "At the supermarket, compare items: 'There are 6 bananas and 4 apples. Which do we have more of?'",
          "Use pairs of socks to practise comparing. Put different numbers in two piles and ask which pile has more or fewer.",
          "At dinner time, compare plates: 'You have 5 peas and I have 8. Who has more? Who has fewer?'",
        ],
      },
    ],
  },

  // 4. Partition and combine
  {
    slug: "partition-combine",
    title: "Partition & Combine",
    strand: "Number",
    description: "Partition and combine collections up to 10 in different ways",
    lesson: {
      title: "Split It and Join It!",
      objective: "Break a number into two parts in lots of different ways, then put the parts back together.",
      materials: [
        "10 small objects (grapes, blocks, coins — anything you have)",
        "2 small bowls or cups",
        "Paper and pencil for recording",
      ],
      intro: {
        title: "The Sharing Trick",
        script: "I have 5 grapes and two bowls. I need to share them between the bowls — but I don't have to share them equally! Let's try: I'll put 1 here and 4 there. Is that still 5? Let's count to check! Now let's try a different way...",
        action: "Place 5 objects and distribute them between two bowls (1 and 4). Count both bowls together, then write '1 and 4 makes 5' on paper. Rearrange to 2 and 3, then 0 and 5. Each time, write the combination down. Ask: 'How many different ways can we split 5?'",
      },
      mainActivity: {
        title: "How Many Ways?",
        script: "Let's try with 6! Every time we find a new way to split 6, we'll write it down. How many different ways can we find? I bet there are more than you think!",
        action: "Give your child 6 objects and two bowls. Explore all the splits together (0+6, 1+5, 2+4, 3+3 and their reverses). Record each one. Then try with 7 or 8 if they're keen. Look at the list together — what do you notice?",
      },
      wrapUp: {
        title: "Put It Back Together",
        script: "Now let's combine! I'll put 3 in one bowl and 2 in another. Before we tip them out — can you guess how many altogether? Then let's check by counting!",
        action: "Set up two bowls with different amounts. Your child predicts the total, then tips them together and counts. Do this 3–4 times. Emphasise the language: 'We split it apart to explore, then joined it back together to find the total.'",
      },
    },
    activities: [
      // =============================================
      // --- EASY: Number bonds to 5 ---
      // =============================================
      {
        type: "number-bonds",
        title: "Number Bonds to 3",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 3, partA: 1, partB: null },
          { total: 3, partA: null, partB: 1 },
          { total: 3, partA: 2, partB: null },
          { total: 3, partA: 0, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 3",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 3, partA: null, partB: 2 },
          { total: 3, partA: 3, partB: null },
          { total: 3, partA: null, partB: 0 },
          { total: 3, partA: null, partB: 3 },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 4",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 4, partA: 1, partB: null },
          { total: 4, partA: null, partB: 2 },
          { total: 4, partA: 3, partB: null },
          { total: 4, partA: 0, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 4",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 4, partA: null, partB: 3 },
          { total: 4, partA: 2, partB: null },
          { total: 4, partA: null, partB: 0 },
          { total: 4, partA: 4, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 5",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 5, partA: 1, partB: null },
          { total: 5, partA: null, partB: 3 },
          { total: 5, partA: 4, partB: null },
          { total: 5, partA: 2, partB: null },
          { total: 5, partA: null, partB: 0 },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 5",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 5, partA: null, partB: 4 },
          { total: 5, partA: 3, partB: null },
          { total: 5, partA: null, partB: 2 },
          { total: 5, partA: 0, partB: null },
          { total: 5, partA: 5, partB: null },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Stars",
        instruction: "Count the stars in each part. Write how many in each part and the total.",
        groups: [
          { objects: Array(2).fill("star"), label: "Part A" },
          { objects: Array(1).fill("star"), label: "Part B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Hearts",
        instruction: "Count the hearts in each part. Write how many in each part and the total.",
        groups: [
          { objects: Array(3).fill("heart"), label: "Part A" },
          { objects: Array(2).fill("heart"), label: "Part B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Apples",
        instruction: "Count the apples in each part. Write how many in each part and the total.",
        groups: [
          { objects: Array(1).fill("apple"), label: "Part A" },
          { objects: Array(2).fill("apple"), label: "Part B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Fish",
        instruction: "Count the fish in each part. Write how many in each part and the total.",
        groups: [
          { objects: Array(4).fill("fish"), label: "Part A" },
          { objects: Array(1).fill("fish"), label: "Part B" },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many More to Make 4?",
        instruction: "Circle the number that completes each sentence.",
        questions: [
          { prompt: "I have 1 ball. I need ___ more to make 4.", options: ["2", "3", "4"] },
          { prompt: "I have 2 cups. I need ___ more to make 4.", options: ["1", "2", "3"] },
          { prompt: "I have 3 books. I need ___ more to make 4.", options: ["0", "1", "2"] },
          { prompt: "I have 0 pencils. I need ___ more to make 4.", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many More to Make 5?",
        instruction: "Circle the number that completes each sentence.",
        questions: [
          { prompt: "I have 1 star. I need ___ more to make 5.", options: ["3", "4", "2"] },
          { prompt: "I have 3 apples. I need ___ more to make 5.", options: ["1", "2", "3"] },
          { prompt: "I have 4 fish. I need ___ more to make 5.", options: ["0", "1", "2"] },
          { prompt: "I have 0 flowers. I need ___ more to make 5.", options: ["4", "5", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many More to Make 5? (Again)",
        instruction: "Circle the number that completes each sentence.",
        questions: [
          { prompt: "I have 2 butterflies. I need ___ more to make 5.", options: ["2", "3", "4"] },
          { prompt: "I have 5 diamonds. I need ___ more to make 5.", options: ["0", "1", "2"] },
          { prompt: "I have 1 flower. I need ___ more to make 5.", options: ["3", "4", "5"] },
          { prompt: "I have 4 hearts. I need ___ more to make 5.", options: ["0", "1", "2"] },
        ],
      },
      {
        type: "matching",
        title: "Match Parts That Make 4",
        instruction: "Draw a line to match the numbers that add up to 4.",
        leftItems: [
          { label: "1", objects: Array(1).fill("apple") },
          { label: "2", objects: Array(2).fill("apple") },
          { label: "0", objects: [] },
          { label: "4", objects: Array(4).fill("apple") },
        ],
        rightItems: [
          { label: "2", objects: Array(2).fill("fish") },
          { label: "4", objects: Array(4).fill("fish") },
          { label: "3", objects: Array(3).fill("fish") },
          { label: "0", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match Parts That Make 5",
        instruction: "Draw a line to match the numbers that add up to 5.",
        leftItems: [
          { label: "1", objects: Array(1).fill("star") },
          { label: "3", objects: Array(3).fill("star") },
          { label: "0", objects: [] },
          { label: "4", objects: Array(4).fill("star") },
        ],
        rightItems: [
          { label: "2", objects: Array(2).fill("heart") },
          { label: "5", objects: Array(5).fill("heart") },
          { label: "4", objects: Array(4).fill("heart") },
          { label: "1", objects: Array(1).fill("heart") },
        ],
      },
      {
        type: "count-objects",
        title: "Two Groups Make 4",
        instruction: "Count the objects in each group. Together they make 4!",
        groups: [
          { objects: Array(1).fill("apple"), label: "Group A" },
          { objects: Array(3).fill("apple"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Two Groups Make 5",
        instruction: "Count the objects in each group. Together they make 5!",
        groups: [
          { objects: Array(2).fill("flower"), label: "Group A" },
          { objects: Array(3).fill("flower"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Two Groups Make 3",
        instruction: "Count the objects in each group. Together they make 3!",
        groups: [
          { objects: Array(1).fill("banana"), label: "Group A" },
          { objects: Array(2).fill("banana"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Pair Makes 4?",
        instruction: "Circle the pair of numbers that add up to 4.",
        questions: [
          { prompt: "Which pair makes 4?", options: ["1 and 3", "1 and 2", "1 and 4"] },
          { prompt: "Which pair makes 4?", options: ["2 and 3", "2 and 2", "2 and 1"] },
          { prompt: "Which pair makes 4?", options: ["0 and 3", "0 and 4", "0 and 5"] },
          { prompt: "Which pair makes 4?", options: ["3 and 2", "3 and 1", "3 and 0"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Pair Makes 5?",
        instruction: "Circle the pair of numbers that add up to 5.",
        questions: [
          { prompt: "Which pair makes 5?", options: ["2 and 3", "2 and 2", "2 and 4"] },
          { prompt: "Which pair makes 5?", options: ["4 and 2", "4 and 1", "4 and 0"] },
          { prompt: "Which pair makes 5?", options: ["1 and 4", "1 and 3", "1 and 5"] },
          { prompt: "Which pair makes 5?", options: ["0 and 5", "0 and 4", "0 and 3"] },
        ],
      },

      // =============================================
      // --- MEDIUM: Number bonds to 7 ---
      // =============================================
      {
        type: "number-bonds",
        title: "Number Bonds to 6",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 6, partA: 2, partB: null },
          { total: 6, partA: null, partB: 1 },
          { total: 6, partA: 4, partB: null },
          { total: 6, partA: null, partB: 3 },
          { total: 6, partA: 0, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 6",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 6, partA: null, partB: 4 },
          { total: 6, partA: 5, partB: null },
          { total: 6, partA: null, partB: 0 },
          { total: 6, partA: 1, partB: null },
          { total: 6, partA: 6, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 7",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 7, partA: 3, partB: null },
          { total: 7, partA: null, partB: 2 },
          { total: 7, partA: 5, partB: null },
          { total: 7, partA: null, partB: 6 },
          { total: 7, partA: 4, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 7",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 7, partA: null, partB: 4 },
          { total: 7, partA: 1, partB: null },
          { total: 7, partA: null, partB: 0 },
          { total: 7, partA: 7, partB: null },
          { total: 7, partA: null, partB: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Part-Part-Whole to 6",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "2 + ___ = 6", options: ["3", "4", "5"] },
          { prompt: "___ + 5 = 6", options: ["0", "1", "2"] },
          { prompt: "3 + ___ = 6", options: ["2", "3", "4"] },
          { prompt: "___ + 4 = 6", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Part-Part-Whole to 6",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "1 + ___ = 6", options: ["4", "5", "6"] },
          { prompt: "___ + 0 = 6", options: ["5", "6", "7"] },
          { prompt: "6 + ___ = 6", options: ["0", "1", "2"] },
          { prompt: "___ + 3 = 6", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Part-Part-Whole to 7",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "3 + ___ = 7", options: ["3", "4", "5"] },
          { prompt: "___ + 6 = 7", options: ["0", "1", "2"] },
          { prompt: "5 + ___ = 7", options: ["1", "2", "3"] },
          { prompt: "___ + 2 = 7", options: ["4", "5", "6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Part-Part-Whole to 7",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "1 + ___ = 7", options: ["5", "6", "7"] },
          { prompt: "___ + 4 = 7", options: ["2", "3", "4"] },
          { prompt: "7 + ___ = 7", options: ["0", "1", "2"] },
          { prompt: "___ + 3 = 7", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "matching",
        title: "Match Parts That Make 6",
        instruction: "Draw a line to match the numbers that add up to 6.",
        leftItems: [
          { label: "1", objects: Array(1).fill("circle") },
          { label: "3", objects: Array(3).fill("circle") },
          { label: "5", objects: Array(5).fill("circle") },
          { label: "0", objects: [] },
        ],
        rightItems: [
          { label: "3", objects: Array(3).fill("square") },
          { label: "6", objects: Array(6).fill("square") },
          { label: "5", objects: Array(5).fill("square") },
          { label: "1", objects: Array(1).fill("square") },
        ],
      },
      {
        type: "matching",
        title: "Match Parts That Make 7",
        instruction: "Draw a line to match the numbers that add up to 7.",
        leftItems: [
          { label: "2", objects: Array(2).fill("fish") },
          { label: "4", objects: Array(4).fill("fish") },
          { label: "6", objects: Array(6).fill("fish") },
        ],
        rightItems: [
          { label: "1", objects: Array(1).fill("butterfly") },
          { label: "3", objects: Array(3).fill("butterfly") },
          { label: "5", objects: Array(5).fill("butterfly") },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Flowers into Two Groups",
        instruction: "Here are 6 flowers. Draw a line to split them into two groups. Write how many in each group.",
        groups: [
          { objects: Array(4).fill("flower"), label: "Part A" },
          { objects: Array(2).fill("flower"), label: "Part B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Circles into Two Groups",
        instruction: "Here are 6 circles split into two groups. Count each group.",
        groups: [
          { objects: Array(3).fill("circle"), label: "Part A" },
          { objects: Array(3).fill("circle"), label: "Part B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Diamonds into Two Groups",
        instruction: "Here are 7 diamonds. They are split into two groups. Count each group.",
        groups: [
          { objects: Array(5).fill("diamond"), label: "Part A" },
          { objects: Array(2).fill("diamond"), label: "Part B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Triangles into Two Groups",
        instruction: "Here are 7 triangles split into two groups. Count each group.",
        groups: [
          { objects: Array(3).fill("triangle"), label: "Part A" },
          { objects: Array(4).fill("triangle"), label: "Part B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Ways to Make 6",
        instruction: "Which of these makes 6? Circle the correct pair.",
        questions: [
          { prompt: "Which pair makes 6?", options: ["2 and 4", "2 and 3", "1 and 3"] },
          { prompt: "Which pair makes 6?", options: ["5 and 2", "5 and 1", "4 and 4"] },
          { prompt: "Which pair makes 6?", options: ["3 and 3", "4 and 1", "2 and 2"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Ways to Make 7",
        instruction: "Which of these makes 7? Circle the correct pair.",
        questions: [
          { prompt: "Which pair makes 7?", options: ["3 and 4", "3 and 3", "2 and 4"] },
          { prompt: "Which pair makes 7?", options: ["6 and 2", "6 and 1", "5 and 3"] },
          { prompt: "Which pair makes 7?", options: ["5 and 2", "4 and 2", "1 and 5"] },
        ],
      },

      // =============================================
      // --- HARDER: Number bonds to 9 ---
      // =============================================
      {
        type: "number-bonds",
        title: "Number Bonds to 8",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 8, partA: 3, partB: null },
          { total: 8, partA: null, partB: 2 },
          { total: 8, partA: 5, partB: null },
          { total: 8, partA: null, partB: 7 },
          { total: 8, partA: 4, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 8",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 8, partA: null, partB: 4 },
          { total: 8, partA: 1, partB: null },
          { total: 8, partA: null, partB: 0 },
          { total: 8, partA: 6, partB: null },
          { total: 8, partA: null, partB: 5 },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 9",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 9, partA: 4, partB: null },
          { total: 9, partA: null, partB: 3 },
          { total: 9, partA: 7, partB: null },
          { total: 9, partA: null, partB: 8 },
          { total: 9, partA: 6, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 9",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 9, partA: null, partB: 5 },
          { total: 9, partA: 2, partB: null },
          { total: 9, partA: null, partB: 9 },
          { total: 9, partA: 0, partB: null },
          { total: 9, partA: null, partB: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Part-Part-Whole to 8",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "3 + ___ = 8", options: ["4", "5", "6"] },
          { prompt: "___ + 6 = 8", options: ["1", "2", "3"] },
          { prompt: "7 + ___ = 8", options: ["0", "1", "2"] },
          { prompt: "___ + 4 = 8", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Part-Part-Whole to 8",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "1 + ___ = 8", options: ["6", "7", "8"] },
          { prompt: "___ + 5 = 8", options: ["2", "3", "4"] },
          { prompt: "8 + ___ = 8", options: ["0", "1", "2"] },
          { prompt: "___ + 2 = 8", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Part-Part-Whole to 9",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "5 + ___ = 9", options: ["3", "4", "5"] },
          { prompt: "___ + 7 = 9", options: ["1", "2", "3"] },
          { prompt: "6 + ___ = 9", options: ["2", "3", "4"] },
          { prompt: "___ + 1 = 9", options: ["7", "8", "9"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Part-Part-Whole to 9",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "3 + ___ = 9", options: ["5", "6", "7"] },
          { prompt: "___ + 8 = 9", options: ["0", "1", "2"] },
          { prompt: "4 + ___ = 9", options: ["4", "5", "6"] },
          { prompt: "___ + 0 = 9", options: ["8", "9", "10"] },
        ],
      },
      {
        type: "matching",
        title: "Match Parts That Make 8",
        instruction: "Draw a line to match the numbers that add up to 8.",
        leftItems: [
          { label: "2", objects: Array(2).fill("sun") },
          { label: "5", objects: Array(5).fill("sun") },
          { label: "6", objects: Array(6).fill("sun") },
          { label: "0", objects: [] },
        ],
        rightItems: [
          { label: "3", objects: Array(3).fill("moon") },
          { label: "2", objects: Array(2).fill("moon") },
          { label: "8", objects: Array(8).fill("moon") },
          { label: "6", objects: Array(6).fill("moon") },
        ],
      },
      {
        type: "matching",
        title: "Match Parts That Make 9",
        instruction: "Draw a line to match the numbers that add up to 9.",
        leftItems: [
          { label: "3", objects: Array(3).fill("apple") },
          { label: "5", objects: Array(5).fill("apple") },
          { label: "7", objects: Array(7).fill("apple") },
        ],
        rightItems: [
          { label: "4", objects: Array(4).fill("diamond") },
          { label: "2", objects: Array(2).fill("diamond") },
          { label: "6", objects: Array(6).fill("diamond") },
        ],
      },
      {
        type: "count-objects",
        title: "Two Groups Make 8",
        instruction: "Count the objects in each group. Together they make 8!",
        groups: [
          { objects: Array(5).fill("star"), label: "Group A" },
          { objects: Array(3).fill("star"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Two Groups Make 8 (Different Way)",
        instruction: "Count the objects in each group. Together they make 8!",
        groups: [
          { objects: Array(6).fill("ball"), label: "Group A" },
          { objects: Array(2).fill("ball"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Two Groups Make 9",
        instruction: "Count the objects in each group. Together they make 9!",
        groups: [
          { objects: Array(6).fill("butterfly"), label: "Group A" },
          { objects: Array(3).fill("butterfly"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Two Groups Make 9 (Different Way)",
        instruction: "Count the objects in each group. Together they make 9!",
        groups: [
          { objects: Array(5).fill("tree"), label: "Group A" },
          { objects: Array(4).fill("tree"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Ways to Make 8",
        instruction: "Which of these makes 8? Circle the correct pair.",
        questions: [
          { prompt: "Which pair makes 8?", options: ["3 and 5", "3 and 4", "3 and 6"] },
          { prompt: "Which pair makes 8?", options: ["6 and 3", "6 and 2", "6 and 1"] },
          { prompt: "Which pair makes 8?", options: ["4 and 4", "4 and 3", "4 and 5"] },
          { prompt: "Which pair makes 8?", options: ["7 and 2", "7 and 1", "7 and 0"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Ways to Make 9",
        instruction: "Which of these makes 9? Circle the correct pair.",
        questions: [
          { prompt: "Which pair makes 9?", options: ["4 and 5", "4 and 4", "4 and 6"] },
          { prompt: "Which pair makes 9?", options: ["7 and 3", "7 and 2", "7 and 1"] },
          { prompt: "Which pair makes 9?", options: ["8 and 1", "8 and 2", "8 and 0"] },
          { prompt: "Which pair makes 9?", options: ["6 and 3", "6 and 2", "6 and 4"] },
        ],
      },
      {
        type: "matching",
        title: "More Pairs That Make 8",
        instruction: "Draw a line to match the numbers that add up to 8.",
        leftItems: [
          { label: "1", objects: Array(1).fill("heart") },
          { label: "4", objects: Array(4).fill("heart") },
          { label: "3", objects: Array(3).fill("heart") },
        ],
        rightItems: [
          { label: "4", objects: Array(4).fill("flower") },
          { label: "5", objects: Array(5).fill("flower") },
          { label: "7", objects: Array(7).fill("flower") },
        ],
      },
      {
        type: "matching",
        title: "More Pairs That Make 9",
        instruction: "Draw a line to match the numbers that add up to 9.",
        leftItems: [
          { label: "1", objects: Array(1).fill("star") },
          { label: "4", objects: Array(4).fill("star") },
          { label: "8", objects: Array(8).fill("star") },
          { label: "6", objects: Array(6).fill("star") },
        ],
        rightItems: [
          { label: "5", objects: Array(5).fill("circle") },
          { label: "1", objects: Array(1).fill("circle") },
          { label: "8", objects: Array(8).fill("circle") },
          { label: "3", objects: Array(3).fill("circle") },
        ],
      },

      // =============================================
      // --- CHALLENGE: Number bonds to 10, multiple ways ---
      // =============================================
      {
        type: "number-bonds",
        title: "Number Bonds to 10",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 10, partA: 3, partB: null },
          { total: 10, partA: null, partB: 5 },
          { total: 10, partA: 8, partB: null },
          { total: 10, partA: null, partB: 9 },
          { total: 10, partA: 6, partB: null },
          { total: 10, partA: null, partB: 4 },
        ],
      },
      {
        type: "number-bonds",
        title: "More Number Bonds to 10",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 10, partA: 1, partB: null },
          { total: 10, partA: null, partB: 7 },
          { total: 10, partA: 0, partB: null },
          { total: 10, partA: null, partB: 2 },
          { total: 10, partA: 5, partB: null },
          { total: 10, partA: null, partB: 10 },
        ],
      },
      {
        type: "matching",
        title: "Ways to Make 10",
        instruction: "Draw a line to match pairs that make 10 together.",
        leftItems: [
          { label: "1", objects: Array(1).fill("heart") },
          { label: "3", objects: Array(3).fill("heart") },
          { label: "5", objects: Array(5).fill("heart") },
          { label: "2", objects: Array(2).fill("heart") },
        ],
        rightItems: [
          { label: "5", objects: Array(5).fill("flower") },
          { label: "8", objects: Array(8).fill("flower") },
          { label: "9", objects: Array(9).fill("flower") },
          { label: "7", objects: Array(7).fill("flower") },
        ],
      },
      {
        type: "matching",
        title: "More Ways to Make 10",
        instruction: "Draw a line to match pairs that make 10 together.",
        leftItems: [
          { label: "4", objects: Array(4).fill("star") },
          { label: "0", objects: [] },
          { label: "6", objects: Array(6).fill("star") },
          { label: "7", objects: Array(7).fill("star") },
        ],
        rightItems: [
          { label: "4", objects: Array(4).fill("diamond") },
          { label: "10", objects: Array(10).fill("diamond") },
          { label: "6", objects: Array(6).fill("diamond") },
          { label: "3", objects: Array(3).fill("diamond") },
        ],
      },
      {
        type: "circle-correct",
        title: "Part-Part-Whole to 10",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "4 + ___ = 10", options: ["5", "6", "7"] },
          { prompt: "___ + 3 = 10", options: ["6", "7", "8"] },
          { prompt: "9 + ___ = 10", options: ["0", "1", "2"] },
          { prompt: "___ + 5 = 10", options: ["4", "5", "6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Part-Part-Whole to 10",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "2 + ___ = 10", options: ["7", "8", "9"] },
          { prompt: "___ + 1 = 10", options: ["8", "9", "10"] },
          { prompt: "6 + ___ = 10", options: ["3", "4", "5"] },
          { prompt: "___ + 8 = 10", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Pair Makes 10?",
        instruction: "Circle the pair of numbers that add up to 10.",
        questions: [
          { prompt: "Which pair makes 10?", options: ["6 and 4", "6 and 3", "6 and 5"] },
          { prompt: "Which pair makes 10?", options: ["8 and 3", "8 and 1", "8 and 2"] },
          { prompt: "Which pair makes 10?", options: ["7 and 4", "7 and 2", "7 and 3"] },
          { prompt: "Which pair makes 10?", options: ["5 and 5", "5 and 4", "5 and 6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Pairs That Make 10",
        instruction: "Circle the pair of numbers that add up to 10.",
        questions: [
          { prompt: "Which pair makes 10?", options: ["9 and 1", "9 and 2", "9 and 0"] },
          { prompt: "Which pair makes 10?", options: ["3 and 8", "3 and 7", "3 and 6"] },
          { prompt: "Which pair makes 10?", options: ["2 and 8", "2 and 7", "2 and 9"] },
          { prompt: "Which pair makes 10?", options: ["4 and 6", "4 and 5", "4 and 7"] },
        ],
      },
      {
        type: "count-objects",
        title: "Split 10 Stars Two Ways",
        instruction: "Here are 10 stars split into two groups. Count each group and write the numbers.",
        groups: [
          { objects: Array(7).fill("star"), label: "Group A" },
          { objects: Array(3).fill("star"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split 10 Hearts Two Ways",
        instruction: "Here are 10 hearts split into two groups. Count each group and write the numbers.",
        groups: [
          { objects: Array(4).fill("heart"), label: "Group A" },
          { objects: Array(6).fill("heart"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split 10 Fish Two Ways",
        instruction: "Here are 10 fish split into two groups. Count each group and write the numbers.",
        groups: [
          { objects: Array(8).fill("fish"), label: "Group A" },
          { objects: Array(2).fill("fish"), label: "Group B" },
        ],
      },
      {
        type: "number-bonds",
        title: "Mixed Number Bonds Challenge",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 6, partA: null, partB: 4 },
          { total: 8, partA: 5, partB: null },
          { total: 10, partA: null, partB: 7 },
          { total: 9, partA: 2, partB: null },
          { total: 7, partA: null, partB: 1 },
          { total: 10, partA: 0, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Mixed Number Bonds",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 7, partA: 5, partB: null },
          { total: 9, partA: null, partB: 6 },
          { total: 10, partA: 4, partB: null },
          { total: 8, partA: null, partB: 3 },
          { total: 6, partA: 1, partB: null },
          { total: 10, partA: null, partB: 10 },
        ],
      },
      {
        type: "count-objects",
        title: "Split 10 Apples Two Ways",
        instruction: "Here are 10 apples split into two groups. Count each group and write the numbers.",
        groups: [
          { objects: Array(5).fill("apple"), label: "Group A" },
          { objects: Array(5).fill("apple"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Split 10 Butterflies Two Ways",
        instruction: "Here are 10 butterflies split into two groups. Count each group and write the numbers.",
        groups: [
          { objects: Array(9).fill("butterfly"), label: "Group A" },
          { objects: Array(1).fill("butterfly"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Tricky Part-Part-Whole to 10",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "10 + ___ = 10", options: ["0", "1", "10"] },
          { prompt: "___ + 6 = 10", options: ["3", "4", "5"] },
          { prompt: "7 + ___ = 10", options: ["2", "3", "4"] },
          { prompt: "___ + 0 = 10", options: ["9", "10", "0"] },
        ],
      },
      {
        type: "number-bonds",
        title: "All Number Bonds to 10 Challenge",
        instruction: "Fill in the missing number to complete each bond. Can you get them all right?",
        bonds: [
          { total: 10, partA: 2, partB: null },
          { total: 10, partA: null, partB: 3 },
          { total: 10, partA: 7, partB: null },
          { total: 10, partA: null, partB: 6 },
          { total: 10, partA: 9, partB: null },
          { total: 10, partA: null, partB: 1 },
        ],
      },

      // =============================================
      // --- Improvement: Open-ended "show all ways" ---
      // =============================================
      {
        type: "open-response",
        title: "All the Ways to Make 5",
        instruction: "How many different ways can you split 5 into two parts? Write as many as you can find!",
        prompts: [
          { text: "5 = ___ and ___", type: "lines", lines: 1 },
          { text: "5 = ___ and ___", type: "lines", lines: 1 },
          { text: "5 = ___ and ___", type: "lines", lines: 1 },
          { text: "5 = ___ and ___", type: "lines", lines: 1 },
          { text: "How many ways did you find? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "All the Ways to Make 6",
        instruction: "How many different ways can you split 6 into two parts? Write as many as you can find!",
        prompts: [
          { text: "6 = ___ and ___", type: "lines", lines: 1 },
          { text: "6 = ___ and ___", type: "lines", lines: 1 },
          { text: "6 = ___ and ___", type: "lines", lines: 1 },
          { text: "6 = ___ and ___", type: "lines", lines: 1 },
          { text: "How many ways did you find? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "All the Ways to Make 8",
        instruction: "How many different ways can you split 8 into two parts? Write as many as you can find!",
        prompts: [
          { text: "8 = ___ and ___", type: "lines", lines: 1 },
          { text: "8 = ___ and ___", type: "lines", lines: 1 },
          { text: "8 = ___ and ___", type: "lines", lines: 1 },
          { text: "8 = ___ and ___", type: "lines", lines: 1 },
          { text: "8 = ___ and ___", type: "lines", lines: 1 },
          { text: "How many ways did you find? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "All the Ways to Make 10",
        instruction: "10 is a very important number! Write all the ways you can split 10 into two parts.",
        prompts: [
          { text: "10 = ___ and ___     10 = ___ and ___", type: "lines", lines: 1 },
          { text: "10 = ___ and ___     10 = ___ and ___", type: "lines", lines: 1 },
          { text: "10 = ___ and ___     10 = ___ and ___", type: "lines", lines: 1 },
          { text: "Did you find all 11 ways? (Hint: don't forget 0 + 10 and 10 + 0!)", type: "lines", lines: 1 },
        ],
      },
      // --- Improvement: Draw to show partitioning ---
      {
        type: "open-response",
        title: "Draw to Split 5",
        instruction: "Draw circles to show the number 5 split into two parts. There is no wrong answer!",
        prompts: [
          { text: "Split 5 into two groups (draw circles in two groups):", type: "box" },
          { text: "Now split 5 a DIFFERENT way:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw to Split 6",
        instruction: "Draw circles to show the number 6 split into two parts. There is no wrong answer!",
        prompts: [
          { text: "Split 6 into two groups (draw circles in two groups):", type: "box" },
          { text: "Now split 6 a DIFFERENT way:", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Draw to Split 8",
        instruction: "Draw circles to show the number 8 split into two parts. Can you find more than one way?",
        prompts: [
          { text: "Split 8 into two groups (draw circles in two groups):", type: "box" },
          { text: "Now split 8 a DIFFERENT way:", type: "box" },
        ],
      },
      // --- Additional activities ---
      {
        type: "picture-graph",
        title: "Ways to Make 8",
        instruction: "This graph shows how many children found each way to make 8. Answer the questions.",
        rows: [
          { label: "4 + 4", icon: "star", count: 5 },
          { label: "5 + 3", icon: "heart", count: 4 },
          { label: "6 + 2", icon: "apple", count: 6 },
          { label: "7 + 1", icon: "fish", count: 3 },
        ],
        questions: [
          "Which way to make 8 was most popular?",
          "Which way had the fewest children?",
          "How many children used 4+4 or 6+2 altogether?",
        ],
      },
      {
        type: "tally-chart",
        title: "Number Bonds Found",
        instruction: "Count how many bonds each child found. Record with tallies and write the total.",
        categories: [
          { label: "Bonds to 5", icon: "star", count: 6 },
          { label: "Bonds to 7", icon: "heart", count: 8 },
          { label: "Bonds to 10", icon: "apple", count: 11 },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 6",
        instruction: "Fill in the missing number to complete each bond to 6.",
        bonds: [
          { total: 6, partA: 4, partB: null },
          { total: 6, partA: null, partB: 1 },
          { total: 6, partA: 3, partB: null },
          { total: 6, partA: null, partB: 5 },
        ],
      },
      {
        type: "number-bonds",
        title: "Number Bonds to 8",
        instruction: "Fill in the missing number to complete each bond to 8.",
        bonds: [
          { total: 8, partA: 6, partB: null },
          { total: 8, partA: null, partB: 2 },
          { total: 8, partA: 4, partB: null },
          { total: 8, partA: null, partB: 7 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frame Partitioning",
        instruction: "Count the filled dots. How many are empty? These two parts make the total.",
        frames: [
          { filled: 6, total: 10 },
          { filled: 4, total: 10 },
          { filled: 8, total: 10 },
          { filled: 3, total: 10 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Bonds Are Correct?",
        instruction: "Check each number bond. Circle Correct or Wrong.",
        questions: [
          { prompt: "3 + 7 = 10", options: ["Correct", "Wrong"] },
          { prompt: "4 + 5 = 8", options: ["Correct", "Wrong"] },
          { prompt: "6 + 4 = 10", options: ["Correct", "Wrong"] },
          { prompt: "2 + 6 = 9", options: ["Correct", "Wrong"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Number Bonds",
        instruction: "Draw a line to match each part to its missing part to make 10.",
        left: ["3", "7", "1", "5"],
        right: ["9", "3", "5", "7"],
      },
      {
        type: "open-response",
        title: "All the Ways to Make 7",
        instruction: "Write all the ways you can make 7 using two numbers.",
        prompts: [
          { text: "___ + ___ = 7", type: "lines", lines: 1 },
          { text: "___ + ___ = 7", type: "lines", lines: 1 },
          { text: "___ + ___ = 7", type: "lines", lines: 1 },
          { text: "___ + ___ = 7", type: "lines", lines: 1 },
          { text: "How many ways did you find? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Parts of 5 or Parts of 10?",
        instruction: "Sort each number sentence into the correct group.",
        columns: ["Makes 5", "Makes 10"],
        items: [
          { label: "3 + 2" },
          { label: "7 + 3" },
          { label: "4 + 1" },
          { label: "8 + 2" },
          { label: "0 + 5" },
          { label: "6 + 4" },
        ],
      },
      {
        type: "count-objects",
        title: "Split the Objects",
        instruction: "Count the total objects. Think: if I take some away, how many are left?",
        rows: [
          { object: "star", count: 7 },
          { object: "apple", count: 9 },
          { object: "heart", count: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Number Bond Story",
        instruction: "Write a short story that matches a number bond.",
        prompts: [
          { text: "Bond: 4 + 6 = 10. Story: _______________", type: "lines", lines: 2 },
          { text: "Bond: 3 + 5 = 8. Story: _______________", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Partition and Combine Quiz",
        instruction: "Circle the correct answer for each question.",
        questions: [
          { prompt: "If I have 10 and take away 4, how many are left?", options: ["5", "6", "7"] },
          { prompt: "What goes with 8 to make 10?", options: ["1", "2", "3"] },
          { prompt: "Combine 3 and 7. What is the total?", options: ["9", "10", "11"] },
          { prompt: "Split 9 into 5 and what?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Bond Has More?",
        instruction: "Look at the totals. Circle which bond has a larger total.",
        pairs: [
          { leftCount: 8, rightCount: 6, object: "star", question: "8 total or 6 total — which is more?" },
          { leftCount: 5, rightCount: 10, object: "heart", question: "5 total or 10 total — which is more?" },
          { leftCount: 7, rightCount: 7, object: "apple", question: "Are 7 and 7 equal?" },
        ],
      },
      {
        type: "sequence",
        title: "Order the Bonds to 10",
        instruction: "Write 1st, 2nd, 3rd, 4th to order these bonds to 10 from smallest first part to largest.",
        items: [
          { label: "2 + 8 = 10" },
          { label: "7 + 3 = 10" },
          { label: "1 + 9 = 10" },
          { label: "5 + 5 = 10" },
        ],
      },
      {
        type: "number-bonds",
        title: "Missing Number Bonds Challenge",
        instruction: "Fill in the missing total. These bonds are trickier!",
        bonds: [
          { total: 10, partA: 4, partB: 6 },
          { total: 10, partA: 7, partB: 3 },
          { total: 9, partA: null, partB: 5 },
          { total: 10, partA: null, partB: 6 },
        ],
      },
      {
        type: "open-response",
        title: "Explain Number Bonds",
        instruction: "Answer in your own words.",
        prompts: [
          { text: "A number bond shows: _______________", type: "lines", lines: 1 },
          { text: "Draw a number bond for 6:", type: "box" },
          { text: "Why is it useful to know all the bonds to 10? _______________", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "All the Ways to Make 9",
        instruction: "Write every way you can split 9 into two parts.",
        prompts: [
          { text: "0 + ___ = 9", type: "lines", lines: 1 },
          { text: "1 + ___ = 9", type: "lines", lines: 1 },
          { text: "2 + ___ = 9", type: "lines", lines: 1 },
          { text: "3 + ___ = 9", type: "lines", lines: 1 },
          { text: "4 + ___ = 9", type: "lines", lines: 1 },
        ],
      },
      {
        type: "picture-graph",
        title: "Number Bonds to 10 Quiz Results",
        instruction: "This graph shows how many children got each bond right. Answer the questions.",
        rows: [
          { label: "1 + 9", icon: "star", count: 9 },
          { label: "3 + 7", icon: "heart", count: 7 },
          { label: "5 + 5", icon: "apple", count: 10 },
          { label: "8 + 2", icon: "fish", count: 8 },
        ],
        questions: [
          "Which bond did the most children get right?",
          "Which bond did the fewest children get right?",
          "How many children answered 1+9 and 8+2 correctly altogether?",
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Use real objects to explore how numbers can be split apart and put back together.",
        suggestions: [
          "Get 10 buttons, blocks, or snacks. Ask your child to split them into two groups as many different ways as they can.",
          "Play 'Shake and Spill' -- put 7 two-colour counters (or coins) in a cup, shake and tip out. How many heads? How many tails? That is a number bond!",
          "Use a muffin tin with 10 holes. Put small objects in some holes. 'How many are filled? How many are empty? Together that makes 10!'",
          "At dinner, share out items: '10 peas -- 6 for you, how many for me?'",
          "Hide some toys under a cloth: 'There are 8 altogether, but you can only see 3. How many are hiding?'",
        ],
      },
    ],
  },

  // 5. Add, subtract, share
  {
    slug: "add-subtract-share",
    title: "Adding, Subtracting & Sharing",
    strand: "Number",
    description: "Represent adding to, taking away from, and equal sharing with collections to at least 10",
    lesson: {
      title: "Add, Take Away and Share!",
      objective: "Act out adding to a group, taking away from a group, and sharing objects equally between two or three people.",
      materials: [
        "10–12 small objects (grapes, blocks, coins — whatever is handy)",
        "3–4 small plates or cups",
      ],
      intro: {
        title: "Maths Story Time",
        script: "I'm going to tell you a maths story, and I need you to act it out with these objects. Ready? There were 4 birds sitting on a fence. Then 3 more birds flew in and joined them. How many birds are on the fence now? Can you show me?",
        action: "Your child places 4 objects, then adds 3 more one at a time while you narrate. Count together. Then tell a 'taking away' story: '7 birds on a fence... oh no, 2 flew away! How many are left?' Your child removes 2 and counts what remains.",
      },
      mainActivity: {
        title: "Fair Shares",
        script: "Now let's try sharing! I have 8 strawberries and I need to share them between 2 people so each person gets EXACTLY the same — completely fair. Can you deal them out, one at a time — one for you, one for me?",
        action: "Distribute 8 objects across 2 plates one at a time ('one for you, one for me'). Count each plate — is it fair? Try 6 between 2, then 9 between 3 plates. If there's a leftover, discuss: 'Is that fair? What do we do with it?'",
      },
      wrapUp: {
        title: "Your Turn to Tell a Story",
        script: "Now YOU make up a maths story for me! It can be about adding, taking away, or sharing. I'll act it out with the objects — so make sure your story is clear!",
        action: "Your child invents simple stories. Act them out with objects. Encourage mathematical language: more, fewer, total, equal, left over, share. Swap roles if they enjoy it.",
      },
    },
    activities: [
      // --- EASY: Adding tiny numbers (totals to 5) ---
      {
        type: "count-objects",
        title: "Add the Stars Together",
        instruction: "Count the stars in each group. Write the total when you put them together.",
        groups: [
          { objects: Array(1).fill("star"), label: "Group A" },
          { objects: Array(2).fill("star"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Add the Circles Together",
        instruction: "Count the circles in each group. How many altogether?",
        groups: [
          { objects: Array(1).fill("circle"), label: "Group A" },
          { objects: Array(1).fill("circle"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Add the Hearts Together",
        instruction: "Count the hearts in each group. How many altogether?",
        groups: [
          { objects: Array(2).fill("heart"), label: "Group A" },
          { objects: Array(2).fill("heart"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Add the Balls Together",
        instruction: "Count the balls in each group. Write the total.",
        groups: [
          { objects: Array(2).fill("ball"), label: "Group A" },
          { objects: Array(1).fill("ball"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Simple Adding",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "1 apple and 1 more apple = ___", options: ["1", "2", "3"] },
          { prompt: "2 stars and 1 more star = ___", options: ["2", "3", "4"] },
          { prompt: "1 fish and 2 more fish = ___", options: ["2", "3", "4"] },
          { prompt: "2 hearts and 2 more hearts = ___", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Simple Adding",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "1 banana and 1 more banana = ___", options: ["1", "2", "3"] },
          { prompt: "1 teddy and 3 more teddies = ___", options: ["3", "4", "5"] },
          { prompt: "2 birds and 2 more birds = ___", options: ["3", "4", "5"] },
          { prompt: "3 balls and 1 more ball = ___", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "count-objects",
        title: "Add the Apples Together",
        instruction: "Put both groups together. How many apples altogether?",
        groups: [
          { objects: Array(3).fill("apple"), label: "Group A" },
          { objects: Array(2).fill("apple"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Add the Butterflies Together",
        instruction: "Put both groups together. How many butterflies altogether?",
        groups: [
          { objects: Array(1).fill("butterfly"), label: "Group A" },
          { objects: Array(4).fill("butterfly"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Easy Take Away",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3 stars, take away 1 = ___", options: ["1", "2", "3"] },
          { prompt: "4 apples, take away 2 = ___", options: ["1", "2", "3"] },
          { prompt: "5 hearts, take away 1 = ___", options: ["3", "4", "5"] },
          { prompt: "3 fish, take away 2 = ___", options: ["0", "1", "2"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Easy Take Away",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "2 cats, take away 1 = ___", options: ["0", "1", "2"] },
          { prompt: "4 birds, take away 1 = ___", options: ["2", "3", "4"] },
          { prompt: "5 bananas, take away 2 = ___", options: ["2", "3", "4"] },
          { prompt: "3 balls, take away 3 = ___", options: ["0", "1", "2"] },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count",
        instruction: "There are 4 flowers. Cross out 1. How many are left?",
        rows: [
          { object: "flower", count: 4 },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count — Triangles",
        instruction: "There are 5 triangles. Cross out 2. How many are left?",
        rows: [
          { object: "triangle", count: 5 },
        ],
      },
      {
        type: "number-bonds",
        title: "Adding Bonds to 5",
        instruction: "Fill in the missing number. The two parts add up to the total.",
        bonds: [
          { total: 3, partA: 1, partB: null },
          { total: 4, partA: 2, partB: null },
          { total: 5, partA: 3, partB: null },
          { total: 5, partA: 1, partB: null },
        ],
      },
      {
        type: "number-bonds",
        title: "More Bonds to 5",
        instruction: "Fill in the missing number. The two parts add up to the total.",
        bonds: [
          { total: 4, partA: 1, partB: null },
          { total: 5, partA: 2, partB: null },
          { total: 3, partA: null, partB: 2 },
          { total: 4, partA: null, partB: 3 },
        ],
      },
      {
        type: "matching",
        title: "Match the Addition",
        instruction: "Draw a line to match each addition to its answer.",
        leftItems: [
          { label: "1 + 1", objects: [] },
          { label: "2 + 1", objects: [] },
          { label: "1 + 3", objects: [] },
          { label: "2 + 3", objects: [] },
        ],
        rightItems: [
          { label: "4", objects: Array(4).fill("diamond") },
          { label: "3", objects: Array(3).fill("diamond") },
          { label: "5", objects: Array(5).fill("diamond") },
          { label: "2", objects: Array(2).fill("diamond") },
        ],
      },
      {
        type: "matching",
        title: "Match the Take Away",
        instruction: "Draw a line to match each take away to its answer.",
        leftItems: [
          { label: "5 − 1", objects: [] },
          { label: "4 − 2", objects: [] },
          { label: "3 − 2", objects: [] },
          { label: "5 − 2", objects: [] },
        ],
        rightItems: [
          { label: "4", objects: Array(4).fill("circle") },
          { label: "2", objects: Array(2).fill("circle") },
          { label: "1", objects: Array(1).fill("circle") },
          { label: "3", objects: Array(3).fill("circle") },
        ],
      },

      // --- BRIDGE: Adding to 6 ---
      {
        type: "count-objects",
        title: "Picture Addition — Flowers",
        instruction: "Count both groups of flowers. Write the total.",
        groups: [
          { objects: Array(3).fill("flower"), label: "Group A" },
          { objects: Array(3).fill("flower"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition — Diamonds",
        instruction: "Count both groups. How many diamonds altogether?",
        groups: [
          { objects: Array(4).fill("diamond"), label: "Group A" },
          { objects: Array(2).fill("diamond"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition — Teddies",
        instruction: "Count both groups of teddies. Write the total.",
        groups: [
          { objects: Array(5).fill("teddy"), label: "Group A" },
          { objects: Array(1).fill("teddy"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Add Up to 6",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "2 + 4 = ___", options: ["5", "6", "7"] },
          { prompt: "3 + 3 = ___", options: ["5", "6", "7"] },
          { prompt: "5 + 1 = ___", options: ["5", "6", "7"] },
          { prompt: "4 + 2 = ___", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Take Away from 6",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "6 trees, take away 1 = ___", options: ["4", "5", "6"] },
          { prompt: "6 suns, take away 3 = ___", options: ["2", "3", "4"] },
          { prompt: "6 cups, take away 4 = ___", options: ["1", "2", "3"] },
          { prompt: "5 books, take away 2 = ___", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count — Grapes",
        instruction: "There are 6 grapes. Cross out 2. How many are left?",
        rows: [
          { object: "grape", count: 6 },
        ],
      },
      {
        type: "number-bonds",
        title: "Adding Bonds to 6",
        instruction: "Fill in the missing number. The two parts add up to 6.",
        bonds: [
          { total: 6, partA: 3, partB: null },
          { total: 6, partA: 1, partB: null },
          { total: 6, partA: 4, partB: null },
          { total: 6, partA: 2, partB: null },
        ],
      },

      // --- MEDIUM: Adding and subtracting to 7 ---
      {
        type: "count-objects",
        title: "Picture Addition — Stars",
        instruction: "Count both groups of stars. Write the total.",
        groups: [
          { objects: Array(4).fill("star"), label: "Group A" },
          { objects: Array(3).fill("star"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition — Fish",
        instruction: "How many fish altogether?",
        groups: [
          { objects: Array(5).fill("fish"), label: "Group A" },
          { objects: Array(2).fill("fish"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition — Cats",
        instruction: "How many cats altogether?",
        groups: [
          { objects: Array(3).fill("cat"), label: "Group A" },
          { objects: Array(4).fill("cat"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Add Up to 7",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "3 + 4 = ___", options: ["6", "7", "8"] },
          { prompt: "5 + 2 = ___", options: ["6", "7", "8"] },
          { prompt: "6 + 1 = ___", options: ["6", "7", "8"] },
          { prompt: "4 + 2 = ___", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Adding to 7",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "1 + 6 = ___", options: ["5", "6", "7"] },
          { prompt: "2 + 5 = ___", options: ["6", "7", "8"] },
          { prompt: "4 + 3 = ___", options: ["6", "7", "8"] },
          { prompt: "3 + 3 = ___", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Take Away (Up to 7)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "6 butterflies, take away 2 = ___", options: ["3", "4", "5"] },
          { prompt: "7 stars, take away 3 = ___", options: ["3", "4", "5"] },
          { prompt: "5 apples, take away 4 = ___", options: ["1", "2", "3"] },
          { prompt: "7 diamonds, take away 1 = ___", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Take Away (Up to 7)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "7 bananas, take away 4 = ___", options: ["2", "3", "4"] },
          { prompt: "6 pencils, take away 3 = ___", options: ["2", "3", "4"] },
          { prompt: "7 grapes, take away 5 = ___", options: ["1", "2", "3"] },
          { prompt: "5 teddies, take away 3 = ___", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count — Hearts",
        instruction: "There are 7 hearts. Cross out 3. How many are left?",
        rows: [
          { object: "heart", count: 7 },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count — Dogs",
        instruction: "There are 6 dogs. Cross out 4. How many are left?",
        rows: [
          { object: "dog", count: 6 },
        ],
      },
      {
        type: "number-bonds",
        title: "Adding Bonds to 7",
        instruction: "Fill in the missing number.",
        bonds: [
          { total: 6, partA: 3, partB: null },
          { total: 7, partA: 4, partB: null },
          { total: 6, partA: null, partB: 5 },
          { total: 7, partA: null, partB: 2 },
        ],
      },
      {
        type: "number-bonds",
        title: "More Bonds to 7",
        instruction: "Fill in the missing number.",
        bonds: [
          { total: 7, partA: 3, partB: null },
          { total: 7, partA: 6, partB: null },
          { total: 7, partA: null, partB: 1 },
          { total: 6, partA: null, partB: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match the Subtraction",
        instruction: "Draw a line to match each subtraction to its answer.",
        leftItems: [
          { label: "7 − 6", objects: [] },
          { label: "5 − 2", objects: [] },
          { label: "6 − 2", objects: [] },
          { label: "8 − 3", objects: [] },
        ],
        rightItems: [
          { label: "1", objects: Array(1).fill("heart") },
          { label: "3", objects: Array(3).fill("heart") },
          { label: "4", objects: Array(4).fill("heart") },
          { label: "5", objects: Array(5).fill("heart") },
        ],
      },
      {
        type: "circle-correct",
        title: "Share Between 2",
        instruction: "Share these equally between 2 friends. How many does each friend get?",
        questions: [
          { prompt: "4 apples shared between 2 = ___", options: ["1", "2", "3"] },
          { prompt: "6 stars shared between 2 = ___", options: ["2", "3", "4"] },
          { prompt: "2 fish shared between 2 = ___", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Sharing Between 2",
        instruction: "Share these equally between 2 friends. How many does each friend get?",
        questions: [
          { prompt: "2 bananas shared between 2 = ___", options: ["1", "2", "3"] },
          { prompt: "4 teddies shared between 2 = ___", options: ["1", "2", "3"] },
          { prompt: "6 grapes shared between 2 = ___", options: ["2", "3", "4"] },
        ],
      },

      // --- HARDER: Adding and subtracting to 10 ---
      {
        type: "count-objects",
        title: "Picture Addition — Butterflies",
        instruction: "Count both groups. How many butterflies altogether?",
        groups: [
          { objects: Array(6).fill("butterfly"), label: "Group A" },
          { objects: Array(4).fill("butterfly"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition — Birds",
        instruction: "Count both groups. How many birds altogether?",
        groups: [
          { objects: Array(5).fill("bird"), label: "Group A" },
          { objects: Array(3).fill("bird"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition — Flowers",
        instruction: "Put both groups of flowers together. Write the total.",
        groups: [
          { objects: Array(5).fill("flower"), label: "Group A" },
          { objects: Array(5).fill("flower"), label: "Group B" },
        ],
      },
      {
        type: "count-objects",
        title: "Picture Addition — Squares",
        instruction: "Count both groups of squares. How many altogether?",
        groups: [
          { objects: Array(7).fill("square"), label: "Group A" },
          { objects: Array(3).fill("square"), label: "Group B" },
        ],
      },
      {
        type: "circle-correct",
        title: "Add Up to 10",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "6 + 4 = ___", options: ["9", "10", "11"] },
          { prompt: "8 + 2 = ___", options: ["9", "10", "11"] },
          { prompt: "7 + 3 = ___", options: ["9", "10", "11"] },
          { prompt: "5 + 4 = ___", options: ["8", "9", "10"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Adding to 10",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "4 + 4 = ___", options: ["7", "8", "9"] },
          { prompt: "6 + 3 = ___", options: ["8", "9", "10"] },
          { prompt: "3 + 5 = ___", options: ["7", "8", "9"] },
          { prompt: "9 + 1 = ___", options: ["9", "10", "11"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Take Away (Up to 10)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "8 stars, take away 3 = ___", options: ["4", "5", "6"] },
          { prompt: "10 apples, take away 4 = ___", options: ["5", "6", "7"] },
          { prompt: "9 hearts, take away 5 = ___", options: ["3", "4", "5"] },
          { prompt: "10 fish, take away 7 = ___", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Take Away (Up to 10)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "9 butterflies, take away 3 = ___", options: ["5", "6", "7"] },
          { prompt: "8 flowers, take away 5 = ___", options: ["2", "3", "4"] },
          { prompt: "10 triangles, take away 2 = ___", options: ["7", "8", "9"] },
          { prompt: "7 cats, take away 4 = ___", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count — Stars",
        instruction: "There are 9 stars. Cross out 4. How many are left?",
        rows: [
          { object: "star", count: 9 },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count — Bananas",
        instruction: "There are 8 bananas. Cross out 5. How many are left?",
        rows: [
          { object: "banana", count: 8 },
        ],
      },
      {
        type: "count-objects",
        title: "Cross Out and Count — Pencils",
        instruction: "There are 10 pencils. Cross out 6. How many are left?",
        rows: [
          { object: "pencil", count: 10 },
        ],
      },
      {
        type: "number-bonds",
        title: "Adding and Subtracting Bonds to 10",
        instruction: "Fill in the missing number.",
        bonds: [
          { total: 9, partA: 5, partB: null },
          { total: 10, partA: null, partB: 3 },
          { total: 8, partA: 6, partB: null },
          { total: 10, partA: null, partB: 8 },
          { total: 9, partA: null, partB: 6 },
        ],
      },
      {
        type: "number-bonds",
        title: "More Bonds to 10",
        instruction: "Fill in the missing number.",
        bonds: [
          { total: 10, partA: 5, partB: null },
          { total: 8, partA: null, partB: 3 },
          { total: 9, partA: 7, partB: null },
          { total: 10, partA: null, partB: 6 },
          { total: 8, partA: null, partB: 4 },
        ],
      },
      {
        type: "matching",
        title: "Match Additions to 10",
        instruction: "Draw a line to match each addition to its answer.",
        leftItems: [
          { label: "6 + 3", objects: [] },
          { label: "5 + 5", objects: [] },
          { label: "7 + 1", objects: [] },
        ],
        rightItems: [
          { label: "10", objects: Array(10).fill("star") },
          { label: "8", objects: Array(8).fill("star") },
          { label: "9", objects: Array(9).fill("star") },
        ],
      },
      {
        type: "matching",
        title: "Match Subtractions from 10",
        instruction: "Draw a line to match each subtraction to its answer.",
        leftItems: [
          { label: "10 − 3", objects: [] },
          { label: "9 − 5", objects: [] },
          { label: "8 − 2", objects: [] },
          { label: "10 − 7", objects: [] },
        ],
        rightItems: [
          { label: "6", objects: Array(6).fill("butterfly") },
          { label: "3", objects: Array(3).fill("butterfly") },
          { label: "4", objects: Array(4).fill("butterfly") },
          { label: "7", objects: Array(7).fill("butterfly") },
        ],
      },

      // --- CHALLENGE: Sharing equally, mixed problems ---
      {
        type: "circle-correct",
        title: "Equal Sharing",
        instruction: "Share these equally between 2 friends. How many does each friend get?",
        questions: [
          { prompt: "8 diamonds shared between 2 = ___", options: ["3", "4", "5"] },
          { prompt: "10 flowers shared between 2 = ___", options: ["4", "5", "6"] },
          { prompt: "6 butterflies shared between 2 = ___", options: ["2", "3", "4"] },
          { prompt: "10 stars shared between 2 = ___", options: ["4", "5", "6"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Equal Sharing Bonds",
        instruction: "Share equally into 2 groups. Fill in the missing numbers.",
        bonds: [
          { total: 4, partA: 2, partB: null },
          { total: 6, partA: 3, partB: null },
          { total: 8, partA: 4, partB: null },
          { total: 10, partA: 5, partB: null },
        ],
      },
      {
        type: "circle-correct",
        title: "Add or Take Away?",
        instruction: "Read each story. Circle the correct answer.",
        questions: [
          { prompt: "Sam has 3 apples. Mum gives him 4 more. How many now?", options: ["6", "7", "8"] },
          { prompt: "Lily has 8 stars. She gives 3 to her friend. How many left?", options: ["4", "5", "6"] },
          { prompt: "There are 5 fish. 5 more swim over. How many now?", options: ["8", "9", "10"] },
          { prompt: "There are 9 flowers. 6 blow away. How many left?", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Story Problems",
        instruction: "Read each story. Circle the correct answer.",
        questions: [
          { prompt: "Ben has 4 balls. Dad gives him 3 more. How many now?", options: ["6", "7", "8"] },
          { prompt: "There are 10 birds on a tree. 4 fly away. How many left?", options: ["5", "6", "7"] },
          { prompt: "Mia has 2 cats. She gets 6 more. How many now?", options: ["7", "8", "9"] },
          { prompt: "There are 7 grapes. You eat 5. How many left?", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Mixed Challenge",
        instruction: "Circle the correct answer for each problem.",
        questions: [
          { prompt: "4 + 5 = ___", options: ["8", "9", "10"] },
          { prompt: "10 − 6 = ___", options: ["3", "4", "5"] },
          { prompt: "7 + 3 = ___", options: ["9", "10", "11"] },
          { prompt: "9 − 4 = ___", options: ["4", "5", "6"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Mixed Challenge",
        instruction: "Circle the correct answer for each problem.",
        questions: [
          { prompt: "3 + 6 = ___", options: ["8", "9", "10"] },
          { prompt: "8 − 5 = ___", options: ["2", "3", "4"] },
          { prompt: "2 + 8 = ___", options: ["9", "10", "11"] },
          { prompt: "10 − 3 = ___", options: ["6", "7", "8"] },
        ],
      },
      {
        type: "count-objects",
        title: "Share 10 Apples Equally",
        instruction: "Share 10 apples equally into 2 baskets. Draw them and write how many in each.",
        groups: [
          { objects: Array(5).fill("apple"), label: "Basket A" },
          { objects: Array(5).fill("apple"), label: "Basket B" },
        ],
      },
      {
        type: "count-objects",
        title: "Share 8 Stars Equally",
        instruction: "Share 8 stars equally into 2 groups. Write how many in each.",
        groups: [
          { objects: Array(4).fill("star"), label: "Group A" },
          { objects: Array(4).fill("star"), label: "Group B" },
        ],
      },
      {
        type: "matching",
        title: "Story Problems Match",
        instruction: "Draw a line to match each story to the correct number sentence.",
        leftItems: [
          { label: "3 + 2", objects: [] },
          { label: "8 − 5", objects: [] },
          { label: "6 + 4", objects: [] },
          { label: "10 − 3", objects: [] },
        ],
        rightItems: [
          { label: "7", objects: Array(7).fill("flower") },
          { label: "5", objects: Array(5).fill("flower") },
          { label: "3", objects: Array(3).fill("flower") },
          { label: "10", objects: Array(10).fill("flower") },
        ],
      },
      // --- Improvement: Equal sharing by 3 and 5 ---
      {
        type: "circle-correct",
        title: "Share Between 3 Friends",
        instruction: "Share these equally between 3 friends. How many does each friend get?",
        questions: [
          { prompt: "6 apples shared between 3 friends = ___ each", options: ["1", "2", "3"] },
          { prompt: "9 stars shared between 3 friends = ___ each", options: ["2", "3", "4"] },
          { prompt: "3 fish shared between 3 friends = ___ each", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Share Between 5 Friends",
        instruction: "Share these equally between 5 friends. How many does each friend get?",
        questions: [
          { prompt: "5 lollies shared between 5 friends = ___ each", options: ["1", "2", "3"] },
          { prompt: "10 stickers shared between 5 friends = ___ each", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Sharing Bonds — 3 Groups",
        instruction: "If you share the total equally into 3 groups, fill in how many in each group.",
        bonds: [
          { total: 3, partA: 1, partB: null },
          { total: 6, partA: 2, partB: null },
          { total: 9, partA: 3, partB: null },
        ],
      },
      {
        type: "open-response",
        title: "Draw to Share Equally",
        instruction: "Draw circles to show how you would share the objects equally.",
        prompts: [
          { text: "Share 6 strawberries between 3 plates (draw 3 circles for plates, then share the strawberries):", type: "box" },
          { text: "Share 8 lollies between 2 children:", type: "box" },
          { text: "Share 10 biscuits between 5 friends:", type: "box" },
        ],
      },
      // --- Improvement: Represent — draw and write number sentences ---
      {
        type: "open-response",
        title: "Draw and Write the Number Sentence",
        instruction: "Read each story. Draw a picture to show what happens. Then write the number sentence.",
        prompts: [
          { text: "Tom has 3 apples. Mum gives him 4 more. Draw it. Number sentence: ___ + ___ = ___", type: "box" },
          { text: "There are 7 birds on a fence. 2 fly away. Draw it. Number sentence: ___ − ___ = ___", type: "box" },
          { text: "9 lollies shared equally between 3 friends. Draw it. Each friend gets: ___", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "More Draw and Write",
        instruction: "Read each story. Draw a picture to show what happens. Then write the number sentence.",
        prompts: [
          { text: "There are 4 cats. 5 more cats come. Draw it. Number sentence: ___ + ___ = ___", type: "box" },
          { text: "Ben has 10 grapes. He eats 4. Draw it. Number sentence: ___ − ___ = ___", type: "box" },
          { text: "6 balls shared equally between 2 children. Draw it. Each child gets: ___", type: "box" },
        ],
      },
      // --- Improvement: More cross-out (take away from) activities ---
      {
        type: "count-objects",
        title: "Cross Out to Take Away",
        instruction: "Cross out the number shown, then count how many are left.",
        rows: [
          { object: "star", count: 8 },
          { object: "apple", count: 10 },
          { object: "heart", count: 6 },
        ],
      },
      {
        type: "count-objects",
        title: "More Cross Out to Take Away",
        instruction: "Cross out the number shown, then count how many are left.",
        rows: [
          { object: "fish", count: 7 },
          { object: "flower", count: 9 },
          { object: "butterfly", count: 5 },
        ],
      },
      // --- Additional activities ---
      {
        type: "picture-graph",
        title: "How Many Were Added?",
        instruction: "This graph shows how many objects each child added to their collection. Answer the questions.",
        rows: [
          { label: "Mia", icon: "star", count: 4 },
          { label: "Leo", icon: "star", count: 7 },
          { label: "Zoe", icon: "star", count: 3 },
          { label: "Sam", icon: "star", count: 5 },
        ],
        questions: [
          "Who added the most objects?",
          "Who added the fewest objects?",
          "How many did Mia and Zoe add altogether?",
        ],
      },
      {
        type: "tally-chart",
        title: "Tally Additions",
        instruction: "Record each addition result using tally marks. Write the total.",
        categories: [
          { label: "3 + 4", icon: "star", count: 7 },
          { label: "2 + 6", icon: "heart", count: 8 },
          { label: "5 + 3", icon: "apple", count: 8 },
          { label: "1 + 9", icon: "fish", count: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Write Addition Stories",
        instruction: "Write a number story for each addition.",
        prompts: [
          { text: "3 + 5 = ___: Write a story: _______________", type: "lines", lines: 2 },
          { text: "7 + 2 = ___: Write a story: _______________", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Addition Quiz",
        instruction: "Circle the correct answer for each addition.",
        questions: [
          { prompt: "4 + 3 = ?", options: ["6", "7", "8"] },
          { prompt: "5 + 5 = ?", options: ["9", "10", "11"] },
          { prompt: "6 + 2 = ?", options: ["7", "8", "9"] },
          { prompt: "3 + 7 = ?", options: ["9", "10", "11"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Subtraction Quiz",
        instruction: "Circle the correct answer for each subtraction.",
        questions: [
          { prompt: "8 - 3 = ?", options: ["4", "5", "6"] },
          { prompt: "10 - 4 = ?", options: ["5", "6", "7"] },
          { prompt: "7 - 2 = ?", options: ["4", "5", "6"] },
          { prompt: "9 - 5 = ?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "matching",
        title: "Match Addition to Its Answer",
        instruction: "Draw a line from each addition to its correct answer.",
        left: ["2 + 3", "4 + 4", "5 + 2", "1 + 8"],
        right: ["8", "5", "7", "9"],
      },
      {
        type: "matching",
        title: "Match Subtraction to Its Answer",
        instruction: "Draw a line from each subtraction to its correct answer.",
        left: ["10 - 3", "8 - 5", "6 - 2", "9 - 4"],
        right: ["4", "3", "5", "7"],
      },
      {
        type: "number-bonds",
        title: "Addition Number Bonds to 8",
        instruction: "Fill in the missing number in each bond.",
        bonds: [
          { total: 8, partA: 5, partB: null },
          { total: 8, partA: null, partB: 2 },
          { total: 8, partA: 6, partB: null },
          { total: 8, partA: null, partB: 1 },
        ],
      },
      {
        type: "ten-frame",
        title: "Adding on a Ten Frame",
        instruction: "Start with the number already shown in the ten frame. How many altogether after adding more?",
        frames: [
          { filled: 7, total: 10 },
          { filled: 5, total: 10 },
          { filled: 8, total: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Solve the Story Problems",
        instruction: "Read each story. Write a number sentence and solve it.",
        prompts: [
          { text: "There were 6 birds on a branch. 3 more landed. How many now? ___ + ___ = ___", type: "lines", lines: 1 },
          { text: "A jar had 10 lollies. A child ate 4. How many left? ___ - ___ = ___", type: "lines", lines: 1 },
          { text: "I had 5 books. I got 4 more. How many now? ___ + ___ = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "count-objects",
        title: "Count Before Subtracting",
        instruction: "Count the objects in each row. Then cross out 3 and write how many are left.",
        rows: [
          { object: "star", count: 8 },
          { object: "apple", count: 6 },
          { object: "heart", count: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Sharing Equally",
        instruction: "Share these objects equally between the number of people given. Write how many each person gets.",
        prompts: [
          { text: "10 apples shared between 2 people: ___ each", type: "lines", lines: 1 },
          { text: "8 stars shared between 2 children: ___ each", type: "lines", lines: 1 },
          { text: "6 fish shared between 2 bowls: ___ each", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Sharing Quiz",
        instruction: "Circle the correct answer for each sharing question.",
        questions: [
          { prompt: "Share 6 apples between 2 children. Each gets:", options: ["2", "3", "4"] },
          { prompt: "Share 10 stars between 2 groups. Each gets:", options: ["4", "5", "6"] },
          { prompt: "Share 8 fish between 2 bowls. Each bowl gets:", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "sequence",
        title: "Put Addition Facts in Order",
        instruction: "Write 1st, 2nd, 3rd, 4th to order these sums from smallest to largest.",
        items: [
          { label: "3 + 5 = 8" },
          { label: "1 + 2 = 3" },
          { label: "4 + 6 = 10" },
          { label: "2 + 4 = 6" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Addition or Subtraction?",
        instruction: "Sort each number sentence into the correct column.",
        columns: ["Addition (+)", "Subtraction (-)"],
        items: [
          { label: "3 + 4 = 7" },
          { label: "9 - 2 = 7" },
          { label: "5 + 5 = 10" },
          { label: "8 - 3 = 5" },
          { label: "2 + 7 = 9" },
          { label: "6 - 1 = 5" },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Addition Results",
        instruction: "Work out each sum. Circle the one that gives MORE.",
        pairs: [
          { leftCount: 7, rightCount: 5, object: "star", question: "3+4 versus 2+3 — which is more?" },
          { leftCount: 9, rightCount: 6, object: "apple", question: "5+4 versus 3+3 — which is more?" },
          { leftCount: 8, rightCount: 8, object: "heart", question: "4+4 versus 6+2 — are they equal?" },
        ],
      },
      {
        type: "open-response",
        title: "Write Your Own Sums",
        instruction: "Make up your own addition and subtraction sentences. Write the answer.",
        prompts: [
          { text: "___ + ___ = ___", type: "lines", lines: 1 },
          { text: "___ + ___ = ___", type: "lines", lines: 1 },
          { text: "___ - ___ = ___", type: "lines", lines: 1 },
          { text: "___ - ___ = ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Think About Addition and Subtraction",
        instruction: "Answer these questions in your own words.",
        prompts: [
          { text: "Addition means: _______________", type: "lines", lines: 1 },
          { text: "Subtraction means: _______________", type: "lines", lines: 1 },
          { text: "When do we share equally? Give an example: _______________", type: "lines", lines: 2 },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Use real situations to practise adding, taking away, and sharing.",
        suggestions: [
          "At snack time, share food equally: '12 grapes between 3 people — how many each?' Let your child do the sharing.",
          "Play shop — add up prices of two items: '3 cents and 4 cents makes how much?'",
          "Use building blocks: 'You have 8. Give me 3. How many do you have left?' Physically hand them over.",
          "Write your own story problems together and draw pictures to solve them.",
        ],
      },
    ],
  },

  // 6. Repeating patterns
  {
    slug: "repeating-patterns",
    title: "Repeating Patterns",
    strand: "Algebra",
    description: "Copy and continue repeating patterns",
    lesson: {
      title: "What Comes Next?",
      objective: "Spot the repeating unit in a pattern, then copy, continue and create patterns of your own.",
      materials: [
        "Coloured blocks, buttons, or coins (at least 2 colours, 5 of each)",
        "Coloured pencils and paper",
      ],
      intro: {
        title: "Spot the Pattern",
        script: "Watch what I'm making... red, blue, red, blue, red... What do you notice? What do you think comes next? That's right — it keeps repeating! That's called a pattern. The part that repeats is the secret ingredient.",
        action: "Lay out a clear red-blue-red-blue pattern using objects. Point to each item and say it aloud. Pause before the 4th item and ask your child what comes next. Then try an ABB pattern (red-blue-blue-red-blue-blue) and ask what comes next again.",
      },
      mainActivity: {
        title: "Copy It and Keep Going",
        script: "I'll make a pattern and you copy it exactly. Once you've copied it, add three more to keep it going. The trick is figuring out the bit that repeats — that's the pattern's 'secret unit'.",
        action: "Create a pattern with 2–3 full repeats. Your child copies it, then extends it by 3 more. Ask: 'What is the bit that keeps repeating?' Try patterns with 3 elements (ABC) once they're confident with AB and ABB.",
      },
      wrapUp: {
        title: "Create Your Own",
        script: "Now it's your turn to be the pattern maker! Design your own — you can use the objects, draw it, or even use claps and stamps. Draw it on paper so we remember it. Then I'll try to continue it!",
        action: "Your child creates and draws their own pattern. You attempt to continue it (and deliberately make a mistake if you think they'll catch it!). Ask: 'What was the repeating part?' Let them correct you.",
      },
    },
    activities: [
      // --- EASY: AB patterns (unit length 2) ---
      {
        type: "pattern",
        title: "Continue the Star-Heart Pattern",
        instruction: "Look at the pattern. Draw what comes next in the empty boxes.",
        rows: [
          { sequence: ["star", "heart", "star", "heart", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Continue the Apple-Fish Pattern",
        instruction: "What comes next? Draw the objects in the empty boxes.",
        rows: [
          { sequence: ["apple", "fish", "apple", "fish", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Continue the Flower-Butterfly Pattern",
        instruction: "Keep the pattern going! Fill in the empty boxes.",
        rows: [
          { sequence: ["flower", "butterfly", "flower", "butterfly", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Continue the Circle-Square Pattern",
        instruction: "Look at the shapes. Draw what comes next.",
        rows: [
          { sequence: ["circle", "square", "circle", "square", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Continue the Sun-Moon Pattern",
        instruction: "Day and night! What comes next in the pattern?",
        rows: [
          { sequence: ["sun", "moon", "sun", "moon", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Continue the Cat-Dog Pattern",
        instruction: "Fill in the empty boxes to keep the pattern going.",
        rows: [
          { sequence: ["cat", "dog", "cat", "dog", null, null], unitLength: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (AB Patterns)",
        instruction: "Circle what comes next in each pattern.",
        questions: [
          { prompt: "Star, Heart, Star, Heart, Star, ___", options: ["Star", "Heart"] },
          { prompt: "Apple, Fish, Apple, Fish, ___", options: ["Apple", "Fish"] },
          { prompt: "Diamond, Flower, Diamond, Flower, ___", options: ["Diamond", "Flower"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (More AB Patterns)",
        instruction: "Circle the object that comes next.",
        questions: [
          { prompt: "Sun, Moon, Sun, Moon, Sun, ___", options: ["Sun", "Moon"] },
          { prompt: "Cat, Dog, Cat, Dog, ___", options: ["Cat", "Dog"] },
          { prompt: "Ball, Teddy, Ball, Teddy, Ball, ___", options: ["Ball", "Teddy"] },
        ],
      },
      {
        type: "pattern",
        title: "Copy the Pattern",
        instruction: "Look at the pattern on top. Copy it exactly in the empty boxes below.",
        rows: [
          { sequence: ["star", "diamond", "star", "diamond", null, null, null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Copy the Tree-Flower Pattern",
        instruction: "Look carefully and copy the pattern in the empty boxes.",
        rows: [
          { sequence: ["tree", "flower", "tree", "flower", null, null, null, null], unitLength: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match the Pattern to What Comes Next",
        instruction: "Draw a line to match each pattern to the object that comes next.",
        leftItems: [
          { label: "Star, Heart, Star, Heart, ___", objects: ["star", "heart", "star", "heart"] },
          { label: "Fish, Apple, Fish, Apple, ___", objects: ["fish", "apple", "fish", "apple"] },
          { label: "Flower, Diamond, Flower, Diamond, ___", objects: ["flower", "diamond", "flower", "diamond"] },
        ],
        rightItems: [
          { label: "Fish", objects: ["fish"] },
          { label: "Star", objects: ["star"] },
          { label: "Flower", objects: ["flower"] },
        ],
      },
      {
        type: "matching",
        title: "Match These Patterns Too",
        instruction: "Draw a line from each pattern to the object that comes next.",
        leftItems: [
          { label: "Cat, Dog, Cat, Dog, ___", objects: ["cat", "dog", "cat", "dog"] },
          { label: "Sun, Moon, Sun, Moon, ___", objects: ["sun", "moon", "sun", "moon"] },
          { label: "Ball, Cup, Ball, Cup, ___", objects: ["ball", "cup", "ball", "cup"] },
        ],
        rightItems: [
          { label: "Sun", objects: ["sun"] },
          { label: "Ball", objects: ["ball"] },
          { label: "Cat", objects: ["cat"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is the Repeating Part?",
        instruction: "Circle the part that repeats over and over.",
        questions: [
          { prompt: "Star, Heart, Star, Heart — what repeats?", options: ["Star, Heart", "Star, Star", "Heart"] },
          { prompt: "Apple, Fish, Apple, Fish — what repeats?", options: ["Apple", "Apple, Fish", "Fish, Apple, Fish"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Part (More Practice)",
        instruction: "Circle the group of objects that repeats.",
        questions: [
          { prompt: "Sun, Moon, Sun, Moon — what repeats?", options: ["Sun, Moon", "Sun, Sun", "Moon"] },
          { prompt: "Tree, Flower, Tree, Flower — what repeats?", options: ["Tree", "Tree, Flower", "Flower, Tree, Flower"] },
        ],
      },
      {
        type: "pattern",
        title: "Two AB Patterns",
        instruction: "Continue both patterns. Fill in the empty boxes.",
        rows: [
          { sequence: ["heart", "star", "heart", "star", null, null], unitLength: 2 },
          { sequence: ["circle", "triangle", "circle", "triangle", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Two More AB Patterns",
        instruction: "Keep both patterns going. Fill in the empty boxes.",
        rows: [
          { sequence: ["banana", "apple", "banana", "apple", null, null], unitLength: 2 },
          { sequence: ["bird", "fish", "bird", "fish", null, null], unitLength: 2 },
        ],
      },

      // --- MEDIUM: AAB and ABB patterns (unit length 3) ---
      {
        type: "pattern",
        title: "Star-Star-Heart Pattern",
        instruction: "This pattern has two stars then one heart. Continue the pattern.",
        rows: [
          { sequence: ["star", "star", "heart", "star", "star", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Apple-Apple-Fish Pattern",
        instruction: "Continue the pattern. Fill in the empty boxes.",
        rows: [
          { sequence: ["apple", "apple", "fish", "apple", "apple", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Sun-Sun-Moon Pattern",
        instruction: "Two suns and then a moon. Continue the pattern.",
        rows: [
          { sequence: ["sun", "sun", "moon", "sun", "sun", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Cat-Cat-Bird Pattern",
        instruction: "Look carefully — two cats then one bird. Fill in the empty boxes.",
        rows: [
          { sequence: ["cat", "cat", "bird", "cat", "cat", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Flower-Butterfly-Butterfly Pattern",
        instruction: "What comes next? Fill in the empty boxes.",
        rows: [
          { sequence: ["flower", "butterfly", "butterfly", "flower", "butterfly", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Ball-Cup-Cup Pattern",
        instruction: "One ball then two cups. Continue this pattern.",
        rows: [
          { sequence: ["ball", "cup", "cup", "ball", "cup", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Tree-Flower-Flower Pattern",
        instruction: "One tree and then two flowers. Keep the pattern going!",
        rows: [
          { sequence: ["tree", "flower", "flower", "tree", "flower", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (Longer Patterns)",
        instruction: "Circle what comes next in each pattern.",
        questions: [
          { prompt: "Star, Star, Heart, Star, Star, ___", options: ["Star", "Heart"] },
          { prompt: "Apple, Fish, Fish, Apple, Fish, ___", options: ["Apple", "Fish"] },
          { prompt: "Diamond, Diamond, Flower, Diamond, Diamond, ___", options: ["Diamond", "Flower"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (Even More Practice)",
        instruction: "Circle the object that should come next.",
        questions: [
          { prompt: "Sun, Sun, Moon, Sun, Sun, ___", options: ["Sun", "Moon"] },
          { prompt: "Cat, Cat, Bird, Cat, Cat, ___", options: ["Cat", "Bird"] },
          { prompt: "Ball, Cup, Cup, Ball, Cup, ___", options: ["Ball", "Cup"] },
        ],
      },
      {
        type: "pattern",
        title: "Two Longer Patterns",
        instruction: "Continue both patterns.",
        rows: [
          { sequence: ["heart", "heart", "diamond", "heart", "heart", null, null, null], unitLength: 3 },
          { sequence: ["fish", "star", "star", "fish", "star", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Two More Longer Patterns",
        instruction: "Fill in the empty boxes to continue both patterns.",
        rows: [
          { sequence: ["banana", "banana", "grape", "banana", "banana", null, null, null], unitLength: 3 },
          { sequence: ["dog", "cat", "cat", "dog", "cat", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit (Longer)",
        instruction: "Circle the part that repeats.",
        questions: [
          { prompt: "Star, Star, Heart, Star, Star, Heart — what repeats?", options: ["Star, Heart", "Star, Star, Heart", "Star, Star"] },
          { prompt: "Apple, Fish, Fish, Apple, Fish, Fish — what repeats?", options: ["Apple, Fish, Fish", "Apple, Fish", "Fish, Fish"] },
          { prompt: "Heart, Heart, Star, Heart, Heart, Star — what repeats?", options: ["Heart, Star", "Heart, Heart, Star", "Heart, Heart"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit (Extra Practice)",
        instruction: "Which part of the pattern keeps repeating?",
        questions: [
          { prompt: "Sun, Sun, Moon, Sun, Sun, Moon — what repeats?", options: ["Sun, Moon", "Sun, Sun, Moon", "Sun, Sun"] },
          { prompt: "Tree, Flower, Flower, Tree, Flower, Flower — what repeats?", options: ["Tree, Flower, Flower", "Tree, Flower", "Flower, Flower"] },
          { prompt: "Ball, Ball, Cup, Ball, Ball, Cup — what repeats?", options: ["Ball, Cup", "Ball, Ball, Cup", "Ball, Ball"] },
        ],
      },
      {
        type: "matching",
        title: "Match Patterns to Their Repeating Unit",
        instruction: "Draw a line to match each pattern to the part that repeats.",
        leftItems: [
          { label: "Star, Star, Heart, Star, Star, Heart", objects: ["star", "star", "heart"] },
          { label: "Fish, Apple, Fish, Apple", objects: ["fish", "apple"] },
          { label: "Diamond, Flower, Flower, Diamond, Flower, Flower", objects: ["diamond", "flower", "flower"] },
        ],
        rightItems: [
          { label: "Fish, Apple", objects: ["fish", "apple"] },
          { label: "Star, Star, Heart", objects: ["star", "star", "heart"] },
          { label: "Diamond, Flower, Flower", objects: ["diamond", "flower", "flower"] },
        ],
      },
      {
        type: "matching",
        title: "Match More Patterns to Their Repeating Unit",
        instruction: "Draw a line from each pattern to the group that repeats.",
        leftItems: [
          { label: "Sun, Sun, Moon, Sun, Sun, Moon", objects: ["sun", "sun", "moon"] },
          { label: "Cat, Dog, Cat, Dog", objects: ["cat", "dog"] },
          { label: "Ball, Cup, Cup, Ball, Cup, Cup", objects: ["ball", "cup", "cup"] },
        ],
        rightItems: [
          { label: "Cat, Dog", objects: ["cat", "dog"] },
          { label: "Sun, Sun, Moon", objects: ["sun", "sun", "moon"] },
          { label: "Ball, Cup, Cup", objects: ["ball", "cup", "cup"] },
        ],
      },

      // --- HARDER: ABC patterns (unit length 3) and spotting errors ---
      {
        type: "pattern",
        title: "Three-Object Pattern",
        instruction: "This pattern uses three different objects. Continue the pattern.",
        rows: [
          { sequence: ["star", "heart", "apple", "star", "heart", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Shape Pattern",
        instruction: "Continue the shape pattern. Fill in the empty boxes.",
        rows: [
          { sequence: ["circle", "square", "triangle", "circle", "square", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Fish-Flower-Diamond Pattern",
        instruction: "Keep the pattern going!",
        rows: [
          { sequence: ["fish", "flower", "diamond", "fish", "flower", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Sun-Tree-Bird Pattern",
        instruction: "Three different objects in a row. Continue the pattern.",
        rows: [
          { sequence: ["sun", "tree", "bird", "sun", "tree", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Cat-Ball-Cup Pattern",
        instruction: "What comes next? Fill in the empty boxes.",
        rows: [
          { sequence: ["cat", "ball", "cup", "cat", "ball", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Banana-Apple-Grape Pattern",
        instruction: "Three fruits in a pattern! Fill in the empty boxes.",
        rows: [
          { sequence: ["banana", "apple", "grape", "banana", "apple", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (ABC Patterns)",
        instruction: "Circle what comes next.",
        questions: [
          { prompt: "Star, Heart, Apple, Star, Heart, ___", options: ["Star", "Heart", "Apple"] },
          { prompt: "Circle, Square, Triangle, Circle, ___", options: ["Circle", "Square", "Triangle"] },
          { prompt: "Fish, Flower, Diamond, Fish, Flower, Diamond, Fish, ___", options: ["Fish", "Flower", "Diamond"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next? (More ABC Patterns)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Sun, Tree, Bird, Sun, Tree, ___", options: ["Sun", "Tree", "Bird"] },
          { prompt: "Cat, Ball, Cup, Cat, ___", options: ["Cat", "Ball", "Cup"] },
          { prompt: "Banana, Apple, Grape, Banana, Apple, Grape, Banana, ___", options: ["Banana", "Apple", "Grape"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot the Mistake!",
        instruction: "One of these patterns has a mistake. Circle which one is WRONG.",
        questions: [
          { prompt: "Star, Heart, Star, Heart, Star, Star — is this correct?", options: ["Yes", "No — the last one should be Heart"] },
          { prompt: "Apple, Apple, Fish, Apple, Fish, Fish — is this correct?", options: ["Yes", "No — it should be Apple, Apple, Fish"] },
          { prompt: "Circle, Square, Circle, Square, Circle, Square — is this correct?", options: ["Yes, it is correct", "No, it has a mistake"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Spot More Mistakes!",
        instruction: "Look carefully. Is each pattern correct or does it have a mistake?",
        questions: [
          { prompt: "Sun, Moon, Sun, Moon, Sun, Sun — is this correct?", options: ["Yes", "No — the last one should be Moon"] },
          { prompt: "Cat, Dog, Cat, Dog, Cat, Dog — is this correct?", options: ["Yes, it is correct", "No, it has a mistake"] },
          { prompt: "Ball, Ball, Cup, Ball, Cup, Cup — is this correct?", options: ["Yes", "No — it should be Ball, Ball, Cup"] },
        ],
      },
      {
        type: "pattern",
        title: "Two ABC Patterns",
        instruction: "Continue both patterns.",
        rows: [
          { sequence: ["butterfly", "star", "heart", "butterfly", "star", null, null, null], unitLength: 3 },
          { sequence: ["apple", "diamond", "flower", "apple", "diamond", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Two More ABC Patterns",
        instruction: "Fill in the empty boxes to continue both patterns.",
        rows: [
          { sequence: ["sun", "moon", "star", "sun", "moon", null, null, null], unitLength: 3 },
          { sequence: ["cat", "bird", "fish", "cat", "bird", null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "matching",
        title: "Match ABC Patterns to What Comes Next",
        instruction: "Draw a line from each pattern to the object that comes next.",
        leftItems: [
          { label: "Star, Heart, Apple, Star, Heart, ___", objects: ["star", "heart", "apple", "star", "heart"] },
          { label: "Sun, Tree, Bird, Sun, ___", objects: ["sun", "tree", "bird", "sun"] },
          { label: "Cat, Ball, Cup, Cat, Ball, ___", objects: ["cat", "ball", "cup", "cat", "ball"] },
        ],
        rightItems: [
          { label: "Tree", objects: ["tree"] },
          { label: "Cup", objects: ["cup"] },
          { label: "Apple", objects: ["apple"] },
        ],
      },

      // --- CHALLENGE: Create patterns, mixed, longer sequences ---
      {
        type: "pattern",
        title: "Create an AB Pattern",
        instruction: "Choose two objects and create your own AB pattern. Draw it in the boxes.",
        rows: [
          { sequence: [null, null, null, null, null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Create Another AB Pattern",
        instruction: "Pick two different objects this time and make a new AB pattern.",
        rows: [
          { sequence: [null, null, null, null, null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Create an AAB Pattern",
        instruction: "Choose objects and create an AAB pattern (two same, one different). Draw it.",
        rows: [
          { sequence: [null, null, null, null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Create an ABB Pattern",
        instruction: "Make an ABB pattern (one object, then two of another). Draw it in the boxes.",
        rows: [
          { sequence: [null, null, null, null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Create an ABC Pattern",
        instruction: "Use three different objects to create an ABC pattern.",
        rows: [
          { sequence: [null, null, null, null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Create Another ABC Pattern",
        instruction: "Pick three new objects and make a different ABC pattern.",
        rows: [
          { sequence: [null, null, null, null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Pattern Detective",
        instruction: "Look at each pattern. Circle what the repeating unit is.",
        questions: [
          { prompt: "Heart, Star, Star, Heart, Star, Star — the unit is:", options: ["Heart, Star", "Heart, Star, Star", "Star, Star"] },
          { prompt: "Fish, Fish, Fish, Apple, Fish, Fish, Fish, Apple — the unit is:", options: ["Fish, Apple", "Fish, Fish, Fish, Apple", "Fish, Fish, Fish"] },
          { prompt: "Flower, Diamond, Flower, Diamond — the unit is:", options: ["Flower, Diamond", "Flower", "Diamond, Flower, Diamond"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Pattern Detective (Round 2)",
        instruction: "Look carefully at each pattern. Circle what the repeating unit is.",
        questions: [
          { prompt: "Dog, Cat, Cat, Dog, Cat, Cat — the unit is:", options: ["Dog, Cat", "Dog, Cat, Cat", "Cat, Cat"] },
          { prompt: "Sun, Moon, Star, Sun, Moon, Star — the unit is:", options: ["Sun, Moon", "Sun, Moon, Star", "Moon, Star"] },
          { prompt: "Ball, Ball, Teddy, Ball, Ball, Teddy — the unit is:", options: ["Ball, Teddy", "Ball, Ball, Teddy", "Ball, Ball"] },
        ],
      },
      {
        type: "pattern",
        title: "Long Pattern Challenge",
        instruction: "Continue each pattern to fill all the boxes.",
        rows: [
          { sequence: ["star", "heart", "star", "heart", null, null, null, null], unitLength: 2 },
          { sequence: ["apple", "apple", "fish", "apple", "apple", null, null, null, null], unitLength: 3 },
          { sequence: ["circle", "square", "triangle", "circle", null, null, null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "Long Pattern Challenge (Part 2)",
        instruction: "Continue each pattern to fill all the boxes.",
        rows: [
          { sequence: ["sun", "moon", "sun", "moon", null, null, null, null], unitLength: 2 },
          { sequence: ["cat", "cat", "bird", "cat", "cat", null, null, null, null], unitLength: 3 },
          { sequence: ["banana", "apple", "grape", "banana", null, null, null, null, null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Mixed Pattern Quiz",
        instruction: "Answer each question about patterns.",
        questions: [
          { prompt: "How many objects are in the repeating unit of: Star, Heart, Star, Heart?", options: ["1", "2", "3"] },
          { prompt: "How many objects are in the repeating unit of: Apple, Apple, Fish, Apple, Apple, Fish?", options: ["2", "3", "4"] },
          { prompt: "If the pattern is Star, Heart, Apple and it repeats 4 times, how many objects total?", options: ["9", "12", "15"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Mixed Pattern Quiz (Part 2)",
        instruction: "Answer each question about patterns.",
        questions: [
          { prompt: "How many objects are in the repeating unit of: Cat, Dog, Cat, Dog?", options: ["1", "2", "3"] },
          { prompt: "How many objects are in the repeating unit of: Sun, Moon, Star, Sun, Moon, Star?", options: ["2", "3", "4"] },
          { prompt: "If the pattern is Fish, Ball and it repeats 5 times, how many objects total?", options: ["8", "10", "12"] },
        ],
      },
      // --- Improvement: Non-visual pattern awareness ---
      {
        type: "circle-correct",
        title: "Patterns Are Everywhere!",
        instruction: "Patterns are not just pictures — they can be sounds, actions, or colours too! Circle the correct answer.",
        questions: [
          { prompt: "Clap, stomp, clap, stomp, clap, ___ — what comes next?", options: ["Clap", "Stomp"] },
          { prompt: "Red, blue, red, blue, red, ___ — what colour comes next?", options: ["Red", "Blue", "Green"] },
          { prompt: "Loud, quiet, loud, quiet — what type of pattern is this?", options: ["AB pattern", "ABC pattern", "AAB pattern"] },
          { prompt: "Big, big, small, big, big, small — what type of pattern is this?", options: ["AB pattern", "AAB pattern", "ABC pattern"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Patterns All Around Us",
        instruction: "Think about patterns you can hear, feel, or see. Circle the correct answer.",
        questions: [
          { prompt: "Hop, skip, hop, skip, hop, ___ — what comes next?", options: ["Hop", "Skip"] },
          { prompt: "Green, yellow, green, yellow, ___ — what colour comes next?", options: ["Green", "Yellow", "Blue"] },
          { prompt: "Fast, fast, slow, fast, fast, slow — what type of pattern is this?", options: ["AB pattern", "AAB pattern", "ABC pattern"] },
          { prompt: "Tap, clap, snap, tap, clap, snap — what type of pattern is this?", options: ["AB pattern", "AAB pattern", "ABC pattern"] },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Pattern",
        instruction: "Invent your own pattern! You can use shapes, colours, letters, or anything you like.",
        prompts: [
          { text: "Create an AB pattern (two things repeating):", type: "lines", lines: 1 },
          { text: "Create an AAB pattern (two same, one different):", type: "lines", lines: 1 },
          { text: "Create an ABC pattern (three different things):", type: "lines", lines: 1 },
          { text: "Create your OWN pattern — any type you like!:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Describe These Patterns",
        instruction: "Write about what you see in these patterns.",
        prompts: [
          { text: "Describe a pattern you see on your clothes today:", type: "lines", lines: 1 },
          { text: "Describe a pattern you could make with sounds:", type: "lines", lines: 1 },
          { text: "Describe a pattern you could make with body movements:", type: "lines", lines: 1 },
        ],
      },
      // --- Additional activities ---
      {
        type: "pattern",
        title: "Continue the Cat-Dog Pattern",
        instruction: "Look at the pattern. Draw what comes next in the empty boxes.",
        rows: [
          { sequence: ["cat", "dog", "cat", "dog", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "Continue the Tree-Moon Pattern",
        instruction: "Keep the AB pattern going! Fill in the empty boxes.",
        rows: [
          { sequence: ["tree", "moon", "tree", "moon", null, null], unitLength: 2 },
        ],
      },
      {
        type: "pattern",
        title: "ABC Pattern — Three Objects",
        instruction: "This is an ABC pattern with three different objects. Continue it.",
        rows: [
          { sequence: ["star", "heart", "apple", "star", "heart", null], unitLength: 3 },
        ],
      },
      {
        type: "pattern",
        title: "ABC Pattern — Continue It",
        instruction: "Three objects repeat. Draw what goes in the empty boxes.",
        rows: [
          { sequence: ["fish", "flower", "diamond", "fish", null, null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Is the Pattern Unit?",
        instruction: "The unit of a pattern is the part that repeats. Circle the unit for each pattern.",
        questions: [
          { prompt: "Star, heart, star, heart, star, heart — the unit is:", options: ["star", "heart", "star, heart"] },
          { prompt: "Apple, fish, apple, fish — the unit is:", options: ["apple, fish", "apple", "fish"] },
          { prompt: "Circle, square, triangle, circle, square, triangle — the unit is:", options: ["circle", "square, triangle", "circle, square, triangle"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: AB or ABC Pattern?",
        instruction: "Look at each pattern. Sort it into the correct column.",
        columns: ["AB Pattern (2 in unit)", "ABC Pattern (3 in unit)"],
        items: [
          { label: "Star, heart, star, heart" },
          { label: "Cat, dog, fish, cat, dog, fish" },
          { label: "Apple, banana, apple, banana" },
          { label: "Sun, moon, star, sun, moon, star" },
          { label: "Red, blue, red, blue" },
          { label: "Clap, stomp, jump, clap, stomp, jump" },
        ],
      },
      {
        type: "pattern",
        title: "AABB Pattern",
        instruction: "This pattern has two of each before changing. Continue it.",
        rows: [
          { sequence: ["star", "star", "heart", "heart", null, null], unitLength: 4 },
        ],
      },
      {
        type: "open-response",
        title: "Create Your Own Pattern",
        instruction: "Make up your own repeating pattern using objects or shapes. Draw it and describe it.",
        prompts: [
          { text: "Draw your pattern here:", type: "box" },
          { text: "My pattern unit is: _______________", type: "lines", lines: 1 },
          { text: "How many times does the unit repeat? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes Next in the Pattern?",
        instruction: "Look at the pattern. Circle what comes next.",
        questions: [
          { prompt: "Star, circle, star, circle, star, ___", options: ["star", "circle", "heart"] },
          { prompt: "Apple, apple, banana, apple, apple, ___", options: ["apple", "banana", "orange"] },
          { prompt: "Cat, dog, fish, cat, dog, ___", options: ["cat", "fish", "bird"] },
          { prompt: "Red, blue, green, red, blue, ___", options: ["blue", "green", "red"] },
        ],
      },
      {
        type: "open-response",
        title: "Find a Pattern",
        instruction: "Look at a piece of clothing or a floor tile near you. Describe or draw the pattern you see.",
        prompts: [
          { text: "Draw the pattern you found:", type: "box" },
          { text: "Describe the pattern unit: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Pattern to Its Unit",
        instruction: "Draw a line to match each pattern to its repeating unit.",
        left: ["star, heart, star, heart", "cat, dog, fish, cat, dog, fish", "circle, circle, square, circle, circle, square"],
        right: ["cat, dog, fish", "circle, circle, square", "star, heart"],
      },
      {
        type: "pattern",
        title: "Number Pattern — Continue It",
        instruction: "This pattern uses numbers. Fill in the missing numbers.",
        rows: [
          { sequence: ["star", "star", null, "star", "star", null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Error in the Pattern",
        instruction: "One object in each pattern is wrong. Circle the mistake.",
        questions: [
          { prompt: "Star, heart, STAR, heart, star, heart — which is wrong?", options: ["First star", "Third star (STAR)", "Last heart"] },
          { prompt: "Apple, fish, apple, APPLE, apple, fish — which is wrong?", options: ["First apple", "Fourth apple (APPLE)", "Last fish"] },
          { prompt: "Cat, dog, cat, FISH, cat, dog — which is wrong?", options: ["First cat", "FISH", "Last dog"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Pattern Units",
        instruction: "Count how many times the unit repeats in each pattern. Write the total.",
        rows: [
          { object: "star", count: 3 },
          { object: "heart", count: 3 },
          { object: "flower", count: 4 },
        ],
      },
      {
        type: "sequence",
        title: "Order the Pattern Steps",
        instruction: "Write 1st, 2nd, 3rd, 4th to show the correct order for creating a pattern.",
        items: [
          { label: "Repeat the unit over and over" },
          { label: "Check the pattern continues correctly" },
          { label: "Choose your objects" },
          { label: "Decide on the unit (how many objects repeat)" },
        ],
      },
      {
        type: "tally-chart",
        title: "Count Objects in the Pattern",
        instruction: "Count how many of each object appear in this long pattern: star, heart, star, heart, star, heart, star, heart, star, heart.",
        categories: [
          { label: "Stars", icon: "star", count: 5 },
          { label: "Hearts", icon: "heart", count: 5 },
          { label: "Flowers", icon: "flower", count: 0 },
        ],
      },
      {
        type: "picture-graph",
        title: "Pattern Object Count",
        instruction: "This graph shows how many of each object appear in a long pattern. Answer the questions.",
        rows: [
          { label: "Stars", icon: "star", count: 4 },
          { label: "Hearts", icon: "heart", count: 4 },
          { label: "Apples", icon: "apple", count: 4 },
        ],
        questions: [
          "How many objects are in this pattern altogether?",
          "What type of pattern is this (AB, ABC)?",
          "How many times does the unit repeat?",
        ],
      },
      {
        type: "open-response",
        title: "Sound Patterns",
        instruction: "Write a pattern using sounds or movements you can make with your body.",
        prompts: [
          { text: "My sound pattern: _______________", type: "lines", lines: 1 },
          { text: "The unit is: _______________", type: "lines", lines: 1 },
          { text: "Clap it out 3 times and ask someone to continue it!", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Patterns at Home",
        instruction: "Patterns appear in many places. Write about or draw patterns you find at home.",
        prompts: [
          { text: "A pattern I found at home: _______________", type: "lines", lines: 1 },
          { text: "Where I found it: _______________", type: "lines", lines: 1 },
          { text: "Draw it:", type: "box" },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Patterns are everywhere once you start looking!",
        suggestions: [
          "Make sound patterns: clap-clap-stomp, clap-clap-stomp. Can your child continue it? Can they make their own?",
          "Use coloured pegs, beads, or LEGO bricks to make visual patterns on a string or in a line.",
          "Go on a pattern hunt — look at floor tiles, fences, fabric, and wrapping paper. What repeating patterns can you spot?",
          "Make a body movement pattern: jump-spin-jump-spin. Take turns creating patterns for each other to copy.",
          "At dinner time, arrange food in patterns on the plate — carrot, pea, carrot, pea. Let your child continue the pattern.",
          "Use stickers or stamps to create patterns on paper. Start a pattern and ask your child to keep it going.",
        ],
      },
    ],
  },

  // 7. Mass, capacity, length, duration
  {
    slug: "mass-capacity-length-duration",
    title: "Mass, Capacity, Length & Duration",
    strand: "Measurement",
    description: "Identify the attributes of mass, capacity, length and duration",
    lesson: {
      title: "Heavy, Full, Long and Quick",
      objective: "Notice and describe four measurement ideas: how heavy something is (mass), how much it holds (capacity), how long it is (length), and how long something takes (duration).",
      materials: [
        "Two objects with clearly different weights (e.g. a book and a feather or tissue)",
        "Two containers of noticeably different sizes",
        "A pencil and a long stick or ruler",
        "A timer or clock with a second hand",
      ],
      intro: {
        title: "What Are We Measuring?",
        script: "Today we're going to be measurement detectives! There are four things we can measure — hold this book in one hand and this feather in the other. What do you notice? One is heavier. That's measuring MASS.",
        action: "Work through each attribute one at a time with a concrete example. Mass: hold two objects. Capacity: look at two containers — which holds more? Length: hold up the pencil and a long stick side by side. Duration: clap slowly 10 times — was that a long time or a short time? Introduce the words: mass, capacity, length, duration.",
      },
      mainActivity: {
        title: "Measurement Hunt",
        script: "Let's explore the house! I'll call out a measurement type, and you find two things to compare. Ready? Find me something heavy and something light!",
        action: "Take turns calling out an attribute. Your child finds two items and compares them using words: heavier/lighter, holds more/holds less, longer/shorter, takes longer/quicker. You model the language first, then encourage your child to use it.",
      },
      wrapUp: {
        title: "Name That Attribute",
        script: "I'm going to describe something — your job is to tell me which measurement word fits. 'This bag is so heavy!' What am I measuring? 'The bottle is full to the top!' What about that one?",
        action: "Read 4–6 descriptions using the four attributes. Your child names which attribute you're talking about: mass, capacity, length or duration. Extend by asking: 'How would you compare it to something else?'",
      },
    },
    activities: [
      // --- EASY: Introducing mass (heavy/light) ---
      {
        type: "sorting",
        title: "Heavy or Light?",
        instruction: "Sort each item into the correct column. Is it heavy or light?",
        columns: ["Heavy", "Light"],
        items: [
          { label: "Feather", icon: "feather" },
          { label: "Car", icon: "car" },
          { label: "Leaf" },
          { label: "Elephant", icon: "elephant" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Rock", icon: "rock" },
        ],
      },
      {
        type: "sorting",
        title: "Heavy or Light? (Set 2)",
        instruction: "Sort each item into the correct column. Is it heavy or light?",
        columns: ["Heavy", "Light"],
        items: [
          { label: "Horse", icon: "horse" },
          { label: "Pencil", icon: "pencil" },
          { label: "Ball", icon: "ball" },
          { label: "House", icon: "house" },
          { label: "Ant", icon: "ant" },
          { label: "Book", icon: "book" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Heavier?",
        instruction: "Circle the heavier item.",
        questions: [
          { prompt: "A cat or a mouse?", optionIcons: ["cat", "mouse"], options: ["Cat", "Mouse"] },
          { prompt: "A book or a feather?", optionIcons: ["book", "feather"], options: ["Book", "Feather"] },
          { prompt: "A bike or a truck?", options: ["Bike", "Truck"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Heavier? (Set 2)",
        instruction: "Circle the heavier item.",
        questions: [
          { prompt: "A horse or a dog?", optionIcons: ["horse", "dog"], options: ["Horse", "Dog"] },
          { prompt: "A rock or a butterfly?", optionIcons: ["rock", "butterfly"], options: ["Rock", "Butterfly"] },
          { prompt: "A banana or a watermelon?", optionIcons: ["banana", "watermelon"], options: ["Banana", "Watermelon"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Lighter?",
        instruction: "Circle the lighter item.",
        questions: [
          { prompt: "A brick or a balloon?", options: ["Brick", "Balloon"] },
          { prompt: "A dog or an ant?", optionIcons: ["dog", "ant"], options: ["Dog", "Ant"] },
          { prompt: "A pillow or a table?", options: ["Pillow", "Table"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Lighter? (Set 2)",
        instruction: "Circle the lighter item.",
        questions: [
          { prompt: "A grape or a watermelon?", optionIcons: ["grape", "watermelon"], options: ["Grape", "Watermelon"] },
          { prompt: "A feather or a rock?", optionIcons: ["feather", "rock"], options: ["Feather", "Rock"] },
          { prompt: "A spoon or a car?", optionIcons: ["spoon", "car"], options: ["Spoon", "Car"] },
        ],
      },

      // --- EASY: Introducing capacity (full/empty) ---
      {
        type: "sorting",
        title: "Full or Empty?",
        instruction: "Sort each item into the correct column.",
        columns: ["Full", "Empty"],
        items: [
          { label: "Glass of water", icon: "cup" },
          { label: "Empty cup", icon: "cup" },
          { label: "Bucket of sand", icon: "bucket" },
          { label: "Empty lunchbox" },
          { label: "Full bathtub" },
          { label: "Empty bottle", icon: "bottle" },
        ],
      },
      {
        type: "sorting",
        title: "Full or Empty? (Set 2)",
        instruction: "Sort each item into the correct column.",
        columns: ["Full", "Empty"],
        items: [
          { label: "Bottle of juice", icon: "bottle" },
          { label: "Empty bucket", icon: "bucket" },
          { label: "Cup of tea", icon: "cup" },
          { label: "Empty fish tank" },
          { label: "Full water bottle", icon: "bottle" },
          { label: "Empty glass", icon: "cup" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds More?",
        instruction: "Circle the container that holds MORE.",
        questions: [
          { prompt: "A cup or a bucket?", optionIcons: ["cup", "bucket"], options: ["Cup", "Bucket"] },
          { prompt: "A spoon or a bowl?", options: ["Spoon", "Bowl"] },
          { prompt: "A swimming pool or a bathtub?", options: ["Swimming pool", "Bathtub"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds More? (Set 2)",
        instruction: "Circle the container that holds MORE.",
        questions: [
          { prompt: "A bottle or a fish tank?", optionIcons: ["bottle"], options: ["Bottle", "Fish tank"] },
          { prompt: "A cup or a bucket?", optionIcons: ["cup", "bucket"], options: ["Cup", "Bucket"] },
          { prompt: "A sink or a puddle?", options: ["Sink", "Puddle"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds Less?",
        instruction: "Circle the container that holds LESS.",
        questions: [
          { prompt: "A teacup or a jug?", options: ["Teacup", "Jug"] },
          { prompt: "An egg cup or a mug?", options: ["Egg cup", "Mug"] },
          { prompt: "A thimble or a glass?", options: ["Thimble", "Glass"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds Less? (Set 2)",
        instruction: "Circle the container that holds LESS.",
        questions: [
          { prompt: "A spoon or a bucket?", optionIcons: ["spoon", "bucket"], options: ["Spoon", "Bucket"] },
          { prompt: "A cup or a swimming pool?", optionIcons: ["cup"], options: ["Cup", "Swimming pool"] },
          { prompt: "A bottle or a bath?", optionIcons: ["bottle"], options: ["Bottle", "Bath"] },
        ],
      },

      // --- EASY: Introducing length (long/short) ---
      {
        type: "circle-correct",
        title: "Long or Short?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "A bus is ___", options: ["Long", "Short"] },
          { prompt: "A pencil is ___", promptIcon: "pencil", options: ["Long", "Short"] },
          { prompt: "A train is ___", options: ["Long", "Short"] },
          { prompt: "An ant is ___", promptIcon: "ant", options: ["Long", "Short"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Long or Short? (Set 2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "A snake is ___", promptIcon: "snake", options: ["Long", "Short"] },
          { prompt: "A jump rope is ___", options: ["Long", "Short"] },
          { prompt: "A giraffe's neck is ___", options: ["Long", "Short"] },
          { prompt: "A mouse's tail is ___", promptIcon: "mouse", options: ["Long", "Short"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Longer?",
        instruction: "Circle the longer item.",
        questions: [
          { prompt: "A snake or a worm?", optionIcons: ["snake"], options: ["Snake", "Worm"] },
          { prompt: "A ruler or a rubber?", options: ["Ruler", "Rubber"] },
          { prompt: "A scarf or a sock?", options: ["Scarf", "Sock"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Longer? (Set 2)",
        instruction: "Circle the longer item.",
        questions: [
          { prompt: "A pencil or a crayon?", optionIcons: ["pencil"], options: ["Pencil", "Crayon"] },
          { prompt: "A river or a puddle?", options: ["River", "Puddle"] },
          { prompt: "A rope or a ribbon?", options: ["Rope", "Ribbon"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Shorter?",
        instruction: "Circle the shorter item.",
        questions: [
          { prompt: "A tree or a flower?", optionIcons: ["tree", "flower"], options: ["Tree", "Flower"] },
          { prompt: "A pencil or a stick?", optionIcons: ["pencil"], options: ["Pencil", "Stick"] },
          { prompt: "A car or a bus?", optionIcons: ["car"], options: ["Car", "Bus"] },
        ],
      },

      // --- MEDIUM: Introducing duration (quick/slow, long time/short time) ---
      {
        type: "circle-correct",
        title: "Quick or Slow?",
        instruction: "Circle whether each thing takes a long time or a short time.",
        questions: [
          { prompt: "Clapping your hands takes a ___", options: ["Long time", "Short time"] },
          { prompt: "Growing a tree takes a ___", options: ["Long time", "Short time"] },
          { prompt: "Blinking your eyes takes a ___", options: ["Long time", "Short time"] },
          { prompt: "Baking a cake takes a ___", options: ["Long time", "Short time"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Quick or Slow? (Set 2)",
        instruction: "Circle whether each thing takes a long time or a short time.",
        questions: [
          { prompt: "Counting to ten takes a ___", options: ["Long time", "Short time"] },
          { prompt: "Going on a holiday takes a ___", options: ["Long time", "Short time"] },
          { prompt: "Snapping your fingers takes a ___", options: ["Long time", "Short time"] },
          { prompt: "Painting a house takes a ___", options: ["Long time", "Short time"] },
        ],
      },
      {
        type: "sorting",
        title: "Quick or Takes a Long Time?",
        instruction: "Sort each activity into the correct column.",
        columns: ["Quick", "Takes a Long Time"],
        items: [
          { label: "Sneezing" },
          { label: "Reading a book" },
          { label: "Jumping once" },
          { label: "Building a sandcastle" },
          { label: "Waving hello" },
          { label: "Cooking dinner" },
        ],
      },
      {
        type: "sorting",
        title: "Quick or Takes a Long Time? (Set 2)",
        instruction: "Sort each activity into the correct column.",
        columns: ["Quick", "Takes a Long Time"],
        items: [
          { label: "Clicking your fingers" },
          { label: "Growing a plant" },
          { label: "Catching a ball", icon: "ball" },
          { label: "Watching a movie" },
          { label: "Opening a door" },
          { label: "Driving to the beach" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Takes Longer?",
        instruction: "Circle the activity that takes LONGER.",
        questions: [
          { prompt: "Eating lunch or eating one chip?", options: ["Eating lunch", "Eating one chip"] },
          { prompt: "Walking to school or tying your shoe?", options: ["Walking to school", "Tying your shoe"] },
          { prompt: "Brushing your teeth or having a bath?", options: ["Brushing teeth", "Having a bath"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Takes Longer? (Set 2)",
        instruction: "Circle the activity that takes LONGER.",
        questions: [
          { prompt: "Reading a page or reading a whole book?", options: ["Reading a page", "Reading a whole book"] },
          { prompt: "Hopping once or running a race?", options: ["Hopping once", "Running a race"] },
          { prompt: "Saying your name or singing a song?", options: ["Saying your name", "Singing a song"] },
        ],
      },

      // --- BRIDGE: Introducing "in between" before 3-category sorting ---
      {
        type: "circle-correct",
        title: "Heavy, Light, or In Between?",
        instruction: "Some things are not heavy and not light -- they are in between! Circle the best answer.",
        questions: [
          { prompt: "A watermelon is ___", promptIcon: "watermelon", options: ["Heavy", "In between", "Light"] },
          { prompt: "A feather is ___", promptIcon: "feather", options: ["Heavy", "In between", "Light"] },
          { prompt: "A book is ___", promptIcon: "book", options: ["Heavy", "In between", "Light"] },
          { prompt: "A car is ___", promptIcon: "car", options: ["Heavy", "In between", "Light"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Heavy, Light, or In Between? (Set 2)",
        instruction: "Some things are not heavy and not light -- they are in between! Circle the best answer.",
        questions: [
          { prompt: "A banana is ___", promptIcon: "banana", options: ["Heavy", "In between", "Light"] },
          { prompt: "An elephant is ___", promptIcon: "elephant", options: ["Heavy", "In between", "Light"] },
          { prompt: "A ball is ___", promptIcon: "ball", options: ["Heavy", "In between", "Light"] },
          { prompt: "A butterfly is ___", promptIcon: "butterfly", options: ["Heavy", "In between", "Light"] },
        ],
      },

      // --- MEDIUM: Comparing mass ---
      {
        type: "sorting",
        title: "Sort by Mass: Heavy, Medium, Light",
        instruction: "Sort each item into the correct column.",
        columns: ["Heavy", "Medium", "Light"],
        items: [
          { label: "Horse", icon: "horse" },
          { label: "Apple", icon: "apple" },
          { label: "Coin" },
          { label: "Chair" },
          { label: "Pencil", icon: "pencil" },
          { label: "Washing machine" },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Mass: Heavy, Medium, Light (Set 2)",
        instruction: "Sort each item into the correct column.",
        columns: ["Heavy", "Medium", "Light"],
        items: [
          { label: "Elephant", icon: "elephant" },
          { label: "Book", icon: "book" },
          { label: "Feather", icon: "feather" },
          { label: "Dog", icon: "dog" },
          { label: "Grape", icon: "grape" },
          { label: "Car", icon: "car" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Mass",
        instruction: "Put these in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "Elephant", icon: "elephant" },
          { label: "Cat", icon: "cat" },
          { label: "Mouse", icon: "mouse" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Mass (Set 2)",
        instruction: "Put these in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "Horse", icon: "horse" },
          { label: "Dog", icon: "dog" },
          { label: "Ant", icon: "ant" },
        ],
      },

      // --- MEDIUM: Comparing capacity ---
      {
        type: "sorting",
        title: "Holds a Lot or Holds a Little?",
        instruction: "Sort each container.",
        columns: ["Holds a Lot", "Holds a Little"],
        items: [
          { label: "Swimming pool" },
          { label: "Teaspoon" },
          { label: "Fish tank" },
          { label: "Egg cup" },
          { label: "Washing machine" },
          { label: "Thimble" },
        ],
      },
      {
        type: "sorting",
        title: "Holds a Lot or Holds a Little? (Set 2)",
        instruction: "Sort each container.",
        columns: ["Holds a Lot", "Holds a Little"],
        items: [
          { label: "Bathtub" },
          { label: "Bottle cap" },
          { label: "Water tank" },
          { label: "Spoon", icon: "spoon" },
          { label: "Bucket", icon: "bucket" },
          { label: "Egg cup" },
        ],
      },
      {
        type: "sequence",
        title: "Order by How Much They Hold",
        instruction: "Put these in order from holds the least to holds the most. Write 1, 2, 3.",
        items: [
          { label: "Bucket", icon: "bucket" },
          { label: "Cup", icon: "cup" },
          { label: "Spoon", icon: "spoon" },
        ],
      },
      {
        type: "sequence",
        title: "Order by How Much They Hold (Set 2)",
        instruction: "Put these in order from holds the least to holds the most. Write 1, 2, 3.",
        items: [
          { label: "Swimming pool" },
          { label: "Bathtub" },
          { label: "Bottle", icon: "bottle" },
        ],
      },

      // --- MEDIUM: Comparing length ---
      {
        type: "sorting",
        title: "Tall or Short?",
        instruction: "Sort each thing into the correct column.",
        columns: ["Tall", "Short"],
        items: [
          { label: "Giraffe", icon: "giraffe" },
          { label: "Mouse", icon: "mouse" },
          { label: "Tree", icon: "tree" },
          { label: "Flower", icon: "flower" },
          { label: "Building", icon: "house" },
          { label: "Cup", icon: "cup" },
        ],
      },
      {
        type: "sorting",
        title: "Tall or Short? (Set 2)",
        instruction: "Sort each thing into the correct column.",
        columns: ["Tall", "Short"],
        items: [
          { label: "Elephant", icon: "elephant" },
          { label: "Ant", icon: "ant" },
          { label: "Horse", icon: "horse" },
          { label: "Cat", icon: "cat" },
          { label: "Sun", icon: "sun" },
          { label: "Pencil", icon: "pencil" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Height",
        instruction: "Put these in order from shortest to tallest. Write 1, 2, 3.",
        items: [
          { label: "Ant", icon: "ant" },
          { label: "Child" },
          { label: "House", icon: "house" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Height (Set 2)",
        instruction: "Put these in order from shortest to tallest. Write 1, 2, 3.",
        items: [
          { label: "Flower", icon: "flower" },
          { label: "Tree", icon: "tree" },
          { label: "Mouse", icon: "mouse" },
        ],
      },

      // --- HARDER: Mixed measurement ---
      {
        type: "circle-correct",
        title: "What Are We Measuring?",
        instruction: "Circle what kind of measurement each question is about.",
        questions: [
          { prompt: "How heavy is the bag?", options: ["Mass", "Length", "Capacity"] },
          { prompt: "How tall is the tree?", options: ["Mass", "Length", "Capacity"] },
          { prompt: "How much water fits in the jug?", options: ["Mass", "Length", "Capacity"] },
          { prompt: "How long does it take to walk to school?", options: ["Mass", "Duration", "Length"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Are We Measuring? (Set 2)",
        instruction: "Circle what kind of measurement each question is about.",
        questions: [
          { prompt: "How much does the cat weigh?", options: ["Mass", "Length", "Duration"] },
          { prompt: "How long is the snake?", options: ["Mass", "Length", "Capacity"] },
          { prompt: "How much milk fits in the bottle?", options: ["Mass", "Length", "Capacity"] },
          { prompt: "How long does it take to eat dinner?", options: ["Mass", "Duration", "Capacity"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Measurement Word",
        instruction: "Draw a line to match each question to the right measurement word.",
        leftItems: [
          { label: "How heavy?", objects: [] },
          { label: "How long?", objects: [] },
          { label: "How much does it hold?", objects: [] },
          { label: "How much time?", objects: [] },
        ],
        rightItems: [
          { label: "Duration", objects: [] },
          { label: "Capacity", objects: [] },
          { label: "Mass", objects: [] },
          { label: "Length", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match the Example to the Measurement",
        instruction: "Draw a line to match each example to the type of measurement.",
        leftItems: [
          { label: "Weighing a bag of apples", objects: [] },
          { label: "Measuring how far you can jump", objects: [] },
          { label: "Filling a bucket with water", objects: [] },
          { label: "Timing a race", objects: [] },
        ],
        rightItems: [
          { label: "Duration", objects: [] },
          { label: "Mass", objects: [] },
          { label: "Length", objects: [] },
          { label: "Capacity", objects: [] },
        ],
      },
      {
        type: "sorting",
        title: "Sort the Words",
        instruction: "Sort each word into the measurement type it describes.",
        columns: ["Mass", "Length", "Capacity"],
        items: [
          { label: "Heavy" },
          { label: "Tall" },
          { label: "Full" },
          { label: "Light" },
          { label: "Short" },
          { label: "Empty" },
        ],
      },
      {
        type: "sorting",
        title: "Sort the Words (Set 2)",
        instruction: "Sort each word into the measurement type it describes.",
        columns: ["Mass", "Capacity", "Duration"],
        items: [
          { label: "Weigh" },
          { label: "Pour" },
          { label: "Quick" },
          { label: "Hefty" },
          { label: "Fill" },
          { label: "Slow" },
        ],
      },

      // --- HARDER: Ordering three items ---
      {
        type: "sequence",
        title: "Heaviest to Lightest",
        instruction: "Put these in order from heaviest to lightest. Write 1, 2, 3.",
        items: [
          { label: "Feather", icon: "feather" },
          { label: "Brick", icon: "rock" },
          { label: "Apple", icon: "apple" },
        ],
      },
      {
        type: "sequence",
        title: "Heaviest to Lightest (Set 2)",
        instruction: "Put these in order from heaviest to lightest. Write 1, 2, 3.",
        items: [
          { label: "Car", icon: "car" },
          { label: "Book", icon: "book" },
          { label: "Grape", icon: "grape" },
        ],
      },
      {
        type: "sequence",
        title: "Longest to Shortest",
        instruction: "Put these in order from longest to shortest. Write 1, 2, 3.",
        items: [
          { label: "Pencil", icon: "pencil" },
          { label: "Bus", icon: "car" },
          { label: "Your finger" },
        ],
      },
      {
        type: "sequence",
        title: "Longest to Shortest (Set 2)",
        instruction: "Put these in order from longest to shortest. Write 1, 2, 3.",
        items: [
          { label: "Snake", icon: "snake" },
          { label: "Worm" },
          { label: "Train" },
        ],
      },
      {
        type: "sequence",
        title: "Takes the Longest to the Quickest",
        instruction: "Put these in order from takes the longest to the quickest. Write 1, 2, 3.",
        items: [
          { label: "Clapping once" },
          { label: "Eating dinner" },
          { label: "Sleeping all night" },
        ],
      },
      {
        type: "sequence",
        title: "Takes the Longest to the Quickest (Set 2)",
        instruction: "Put these in order from takes the longest to the quickest. Write 1, 2, 3.",
        items: [
          { label: "Blinking your eyes" },
          { label: "Reading a book" },
          { label: "Going on a holiday" },
        ],
      },

      // --- CHALLENGE: Real-world reasoning ---
      {
        type: "circle-correct",
        title: "Measurement Thinking",
        instruction: "Circle the best answer.",
        questions: [
          { prompt: "To find out how heavy a watermelon is, I would use a ___", promptIcon: "watermelon", options: ["Ruler", "Scales", "Cup"] },
          { prompt: "To find out how long a table is, I would use a ___", options: ["Ruler", "Scales", "Clock"] },
          { prompt: "To find out how much a bottle holds, I would ___", promptIcon: "bottle", options: ["Weigh it", "Fill it with water", "Measure it with a ruler"] },
          { prompt: "To find out how long it takes to run, I would use a ___", options: ["Ruler", "Scales", "Clock"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Measurement Thinking (Set 2)",
        instruction: "Circle the best answer.",
        questions: [
          { prompt: "To find out how heavy a bag of apples is, I would use ___", promptIcon: "apple", options: ["A ruler", "Scales", "A jug"] },
          { prompt: "To find out how tall my friend is, I would use a ___", options: ["Clock", "Scales", "Measuring tape"] },
          { prompt: "To find out how much a bucket holds, I would ___", promptIcon: "bucket", options: ["Put it on scales", "Fill it with water", "Use a ruler"] },
          { prompt: "To find out how long a song lasts, I would use a ___", options: ["Ruler", "Measuring tape", "Clock"] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False?",
        instruction: "Circle True or False for each statement.",
        questions: [
          { prompt: "A feather is heavier than a horse.", promptIcon: "feather", options: ["True", "False"] },
          { prompt: "A bucket holds more water than a cup.", promptIcon: "bucket", options: ["True", "False"] },
          { prompt: "A pencil is longer than a train.", promptIcon: "pencil", options: ["True", "False"] },
          { prompt: "Brushing your teeth takes longer than sleeping all night.", options: ["True", "False"] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False? (Set 2)",
        instruction: "Circle True or False for each statement.",
        questions: [
          { prompt: "An elephant is lighter than a mouse.", promptIcon: "elephant", options: ["True", "False"] },
          { prompt: "A spoon holds more water than a swimming pool.", promptIcon: "spoon", options: ["True", "False"] },
          { prompt: "A snake is longer than a worm.", promptIcon: "snake", options: ["True", "False"] },
          { prompt: "Clapping once takes longer than cooking dinner.", options: ["True", "False"] },
        ],
      },
      {
        type: "sorting",
        title: "Big Measurement Sort",
        instruction: "Sort each item into the correct column.",
        columns: ["Heavy", "Light", "Long", "Short"],
        items: [
          { label: "Elephant", icon: "elephant" },
          { label: "Ant", icon: "ant" },
          { label: "River" },
          { label: "Coin" },
          { label: "Train" },
          { label: "Marble" },
          { label: "Feather", icon: "feather" },
          { label: "Highway" },
        ],
      },
      {
        type: "sorting",
        title: "Big Measurement Sort (Set 2)",
        instruction: "Sort each item into the correct column.",
        columns: ["Heavy", "Light", "Holds a Lot", "Holds a Little"],
        items: [
          { label: "Car", icon: "car" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Swimming pool" },
          { label: "Thimble" },
          { label: "Horse", icon: "horse" },
          { label: "Grape", icon: "grape" },
          { label: "Bathtub" },
          { label: "Egg cup" },
        ],
      },
      {
        type: "circle-correct",
        title: "Mixed Measurement Challenge",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which is heavier: a bag of flour or a bag of feathers the same size?", options: ["Flour", "Feathers", "They weigh the same"] },
          { prompt: "Which holds more: a bath or a sink?", options: ["Bath", "Sink"] },
          { prompt: "Which takes longer: a TV show or a movie?", options: ["TV show", "Movie"] },
          { prompt: "Which is taller: a door or a window?", options: ["Door", "Window"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Mixed Measurement Challenge (Set 2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Which is heavier: a rock or a leaf?", optionIcons: ["rock"], options: ["Rock", "Leaf"] },
          { prompt: "Which holds more: a glass or a fish tank?", options: ["Glass", "Fish tank"] },
          { prompt: "Which takes longer: sneezing or sleeping?", options: ["Sneezing", "Sleeping"] },
          { prompt: "Which is longer: a pencil or a broomstick?", promptIcon: "pencil", options: ["Pencil", "Broomstick"] },
        ],
      },

      // --- Improvement: Define the attributes ---
      {
        type: "matching",
        title: "What Does Each Measurement Word Mean?",
        instruction: "Draw a line to match each measurement type to what it means.",
        leftItems: [
          { label: "Mass", objects: [] },
          { label: "Length", objects: [] },
          { label: "Capacity", objects: [] },
          { label: "Duration", objects: [] },
        ],
        rightItems: [
          { label: "How much time something takes", objects: [] },
          { label: "How heavy something is", objects: [] },
          { label: "How long or tall something is", objects: [] },
          { label: "How much something can hold", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match the Tool to the Measurement",
        instruction: "Draw a line to match each tool to what it measures.",
        leftItems: [
          { label: "Scales", objects: [] },
          { label: "Ruler", objects: [] },
          { label: "Measuring jug", objects: [] },
          { label: "Clock", objects: [] },
        ],
        rightItems: [
          { label: "Duration", objects: [] },
          { label: "Mass", objects: [] },
          { label: "Capacity", objects: [] },
          { label: "Length", objects: [] },
        ],
      },
      {
        type: "open-response",
        title: "Explain in Your Own Words",
        instruction: "Try to explain what each measurement word means. There is no wrong answer!",
        prompts: [
          { text: "Mass means:", type: "lines", lines: 1 },
          { text: "Capacity means:", type: "lines", lines: 1 },
          { text: "Length means:", type: "lines", lines: 1 },
          { text: "Duration means:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Give an Example",
        instruction: "Write one example for each type of measurement. There is no wrong answer!",
        prompts: [
          { text: "Something heavy:", type: "lines", lines: 1 },
          { text: "Something that holds a lot:", type: "lines", lines: 1 },
          { text: "Something very long:", type: "lines", lines: 1 },
          { text: "Something that takes a long time:", type: "lines", lines: 1 },
        ],
      },

      // --- Additional activities ---
      {
        type: "circle-correct",
        title: "Mass: Heavy or Light?",
        instruction: "Circle the object that is HEAVIER in each pair.",
        questions: [
          { prompt: "A feather or a rock?", options: ["Feather", "Rock", "Same"] },
          { prompt: "An elephant or a butterfly?", options: ["Elephant", "Butterfly", "Same"] },
          { prompt: "A book or a pencil?", options: ["Book", "Pencil", "Same"] },
          { prompt: "A car or a bicycle?", options: ["Car", "Bicycle", "Same"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Light or Heavy?",
        instruction: "Think about the real weight of each object. Sort it into the correct group.",
        columns: ["Light", "Heavy"],
        items: [
          { label: "Feather", icon: "feather" },
          { label: "Elephant", icon: "elephant" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Car", icon: "car" },
          { label: "Apple", icon: "apple" },
          { label: "Rock", icon: "rock" },
        ],
      },
      {
        type: "circle-correct",
        title: "Capacity: Full or Empty?",
        instruction: "Circle the correct answer for each capacity question.",
        questions: [
          { prompt: "A full glass has ___ water than an empty glass.", options: ["less", "more", "the same"] },
          { prompt: "If a jug holds 10 cups of water, it has a ___ capacity than a thimble.", options: ["smaller", "larger", "same"] },
          { prompt: "Which holds MORE water: a bathtub or a teacup?", options: ["Bathtub", "Teacup", "Same"] },
        ],
      },
      {
        type: "open-response",
        title: "Measure With Footsteps",
        instruction: "Walk heel-to-toe across a room. Count your footsteps.",
        prompts: [
          { text: "The kitchen is ___ footsteps long.", type: "lines", lines: 1 },
          { text: "My bedroom is ___ footsteps long.", type: "lines", lines: 1 },
          { text: "Which room is longer? _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "matching",
        title: "Match Measurement to the Right Tool",
        instruction: "Draw a line to match what you want to measure to the best way to measure it.",
        left: ["How heavy something is", "How long something is", "How much a container holds", "How long something takes"],
        right: ["Fill with cups of water", "Walk along it counting steps", "Use a clock or watch", "Hold it and feel if it is heavier"],
      },
      {
        type: "tally-chart",
        title: "Measuring With Blocks",
        instruction: "Objects were measured with stacking blocks. Count the tally marks and write the height.",
        categories: [
          { label: "Teddy", icon: "teddy", count: 9 },
          { label: "Cup", icon: "cup", count: 5 },
          { label: "Book", icon: "book", count: 12 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Longer?",
        instruction: "Circle the object that is LONGER in each pair.",
        questions: [
          { prompt: "A pencil or a ruler?", options: ["Pencil", "Ruler", "Same"] },
          { prompt: "A finger or an arm?", options: ["Finger", "Arm", "Same"] },
          { prompt: "A house or a car?", options: ["House", "Car", "Same"] },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Measurements",
        instruction: "Look at each pair of measurements. Circle which one is MORE.",
        pairs: [
          { leftCount: 5, rightCount: 8, object: "pencil", question: "5 blocks or 8 blocks — which is longer?" },
          { leftCount: 12, rightCount: 7, object: "cup", question: "12 cups or 7 cups — which holds more?" },
          { leftCount: 3, rightCount: 3, object: "book", question: "3 steps or 3 steps — are they equal?" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Quick or Slow?",
        instruction: "Sort each activity based on how long it takes.",
        columns: ["Quick (seconds)", "Slow (minutes or hours)"],
        items: [
          { label: "Clap once" },
          { label: "Cook a meal" },
          { label: "Blink" },
          { label: "Grow a tree" },
          { label: "Drink water" },
          { label: "Build a house" },
        ],
      },
      {
        type: "open-response",
        title: "Measuring Mass at Home",
        instruction: "Hold one object in each hand. Feel which is heavier. Record what you find.",
        prompts: [
          { text: "Object A: _____ | Object B: _____", type: "lines", lines: 1 },
          { text: "Which feels heavier? _______________", type: "lines", lines: 1 },
          { text: "Try with two more objects: _____ and _____. The heavier one is: _____", type: "lines", lines: 1 },
        ],
      },
      {
        type: "picture-graph",
        title: "Heights Measured in Blocks",
        instruction: "These objects were measured in blocks. Answer the questions.",
        rows: [
          { label: "Teddy", icon: "teddy", count: 6 },
          { label: "Cup", icon: "cup", count: 4 },
          { label: "Bottle", icon: "bottle", count: 8 },
          { label: "Book", icon: "book", count: 5 },
        ],
        questions: [
          "Which object is tallest?",
          "Which object is shortest?",
          "How many blocks taller is the bottle than the cup?",
        ],
      },
      {
        type: "sequence",
        title: "Order by Length",
        instruction: "Write 1st, 2nd, 3rd, 4th to order these from shortest to longest.",
        items: [
          { label: "6 blocks long" },
          { label: "2 blocks long" },
          { label: "10 blocks long" },
          { label: "4 blocks long" },
        ],
      },
      {
        type: "number-bonds",
        title: "Measurement Number Bonds",
        instruction: "Two measurements are combined. Fill in the missing number.",
        bonds: [
          { total: 10, partA: 4, partB: null },
          { total: 8, partA: null, partB: 5 },
          { total: 12, partA: 7, partB: null },
          { total: 9, partA: null, partB: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Measurement Words Quiz",
        instruction: "Circle the correct answer for each measurement question.",
        questions: [
          { prompt: "Mass tells us how ___ something is.", options: ["long", "heavy", "full"] },
          { prompt: "Capacity tells us how much a container can ___.", options: ["weigh", "hold", "measure"] },
          { prompt: "Length tells us how ___ something is.", options: ["long", "heavy", "full"] },
          { prompt: "Duration tells us how long something ___.", options: ["weighs", "holds", "takes"] },
        ],
      },
      {
        type: "ten-frame",
        title: "Units of Measurement",
        instruction: "Each dot represents one unit. Count the dots and write how many units.",
        frames: [
          { filled: 5, total: 10 },
          { filled: 8, total: 10 },
          { filled: 3, total: 10 },
          { filled: 10, total: 10 },
        ],
      },
      {
        type: "open-response",
        title: "My Measuring Discoveries",
        instruction: "Write something you discovered about measuring today.",
        prompts: [
          { text: "Something I measured: _______________", type: "lines", lines: 1 },
          { text: "How I measured it: _______________", type: "lines", lines: 1 },
          { text: "What I found out: _______________", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Fill in the Measurement Words",
        instruction: "Choose the correct word: longer, shorter, heavier, lighter, more, less.",
        prompts: [
          { text: "A whale is _______________ than a fish.", type: "lines", lines: 1 },
          { text: "A feather is _______________ than a rock.", type: "lines", lines: 1 },
          { text: "A bathtub holds _______________ water than a cup.", type: "lines", lines: 1 },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Measurement comes alive with hands-on exploring!",
        suggestions: [
          "Hold two different objects -- one in each hand. Which feels heavier? That's comparing mass!",
          "Fill a cup with water. Pour it into a bowl. Which container holds more? That's exploring capacity!",
          "Lie string along different objects (your arm, a book, the table). Cut the string to match. Compare the strings -- that's measuring length!",
          "Time how long it takes to brush your teeth versus tying your shoes. Which takes longer? That's duration!",
        ],
      },
    ],
  },

  // 8. Direct comparison
  {
    slug: "direct-comparison",
    title: "Direct Comparison",
    strand: "Measurement",
    description: "Use direct comparison to compare objects and events",
    lesson: {
      title: "Which One Is Longer? Let's Check!",
      objective: "Compare two objects side by side to find which is longer, taller or heavier — and explain how you know.",
      materials: [
        "5–6 objects of different sizes around the house (pencils, books, cups, toys)",
        "A flat table surface for lining things up",
      ],
      intro: {
        title: "The Tricky Mistake",
        script: "Look — I have two pencils. Is this one longer? It looks longer, right? But wait — I need to line them up at the SAME end to be sure. Watch... aha! Now which is longer? We have to compare them directly — that's direct comparison!",
        action: "Show two pencils misaligned so the shorter one appears longer. Then align them at one end. Discuss how we can only know for sure when we compare directly. Repeat with two books (height) and two objects of different weight (pick them up).",
      },
      mainActivity: {
        title: "The Comparison Challenge",
        script: "I'll pick two things, and you tell me which is longer, taller or heavier — and HOW you know. Remember, you have to compare them directly: side by side or in your hands.",
        action: "Present pairs of objects. Your child compares and uses the words: longer, shorter, taller, heavier, lighter. Ask for reasoning: 'I know because when I lined them up...' Once they're confident with two objects, try ordering three objects from shortest to longest.",
      },
      wrapUp: {
        title: "Order Three Things",
        script: "Can you put these three things in order from shortest to longest? Take your time — line them all up carefully and check before you decide!",
        action: "Provide 3 objects of different lengths. Your child orders them. Repeat with height. Ask: 'How did you decide the order?' Praise the method — lining up, comparing one pair at a time — not just the answer.",
      },
    },
    activities: [
      // =============================================
      // --- EASY: Comparing length (longer/shorter) ---
      // =============================================
      {
        type: "circle-correct",
        title: "Which Is Longer? (1)",
        instruction: "Circle the LONGER item in each pair.",
        questions: [
          { prompt: "A pencil or a crayon?", optionIcons: ["pencil"], options: ["Pencil", "Crayon"] },
          { prompt: "A shoe or a sock?", options: ["Shoe", "Sock"] },
          { prompt: "Your arm or your hand?", options: ["Arm", "Hand"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Longer? (2)",
        instruction: "Circle the LONGER item in each pair.",
        questions: [
          { prompt: "A train or a car?", optionIcons: ["car"], options: ["Train", "Car"] },
          { prompt: "A skipping rope or a belt?", options: ["Skipping rope", "Belt"] },
          { prompt: "A garden hose or a straw?", options: ["Garden hose", "Straw"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Shorter? (1)",
        instruction: "Circle the SHORTER item in each pair.",
        questions: [
          { prompt: "A bus or a car?", optionIcons: ["car"], options: ["Bus", "Car"] },
          { prompt: "A worm or a snake?", optionIcons: ["snake"], options: ["Worm", "Snake"] },
          { prompt: "A spoon or a broom?", optionIcons: ["spoon"], options: ["Spoon", "Broom"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Shorter? (2)",
        instruction: "Circle the SHORTER item in each pair.",
        questions: [
          { prompt: "A pencil or a ruler?", optionIcons: ["pencil"], options: ["Pencil", "Ruler"] },
          { prompt: "A finger or a leg?", options: ["Finger", "Leg"] },
          { prompt: "A paper clip or a baseball bat?", options: ["Paper clip", "Baseball bat"] },
        ],
      },
      {
        type: "sorting",
        title: "Long or Short? (1)",
        instruction: "Sort each item into the correct column.",
        columns: ["Long", "Short"],
        items: [
          { label: "Train" },
          { label: "Button" },
          { label: "River" },
          { label: "Ladybug" },
          { label: "Skipping rope" },
          { label: "Paper clip" },
        ],
      },
      {
        type: "sorting",
        title: "Long or Short? (2)",
        instruction: "Sort each item into the correct column.",
        columns: ["Long", "Short"],
        items: [
          { label: "Snake", icon: "snake" },
          { label: "Ant", icon: "ant" },
          { label: "Garden hose" },
          { label: "Coin" },
          { label: "Scarf" },
          { label: "Rubber band" },
        ],
      },

      // =============================================
      // --- EASY: Comparing height (taller/shorter) ---
      // =============================================
      {
        type: "circle-correct",
        title: "Which Is Taller? (1)",
        instruction: "Circle the TALLER one.",
        questions: [
          { prompt: "A tree or a flower?", optionIcons: ["tree", "flower"], options: ["Tree", "Flower"] },
          { prompt: "A giraffe or a dog?", optionIcons: ["giraffe", "dog"], options: ["Giraffe", "Dog"] },
          { prompt: "A house or a kennel?", optionIcons: ["house"], options: ["House", "Kennel"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Taller? (2)",
        instruction: "Circle the TALLER one.",
        questions: [
          { prompt: "A lamp post or a fire hydrant?", options: ["Lamp post", "Fire hydrant"] },
          { prompt: "An elephant or a mouse?", optionIcons: ["elephant", "mouse"], options: ["Elephant", "Mouse"] },
          { prompt: "A basketball hoop or a table?", options: ["Basketball hoop", "Table"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Shorter (Height)? (1)",
        instruction: "Circle the one that is NOT as tall.",
        questions: [
          { prompt: "A cat or a horse?", optionIcons: ["cat", "horse"], options: ["Cat", "Horse"] },
          { prompt: "A cup or a bottle?", optionIcons: ["cup", "bottle"], options: ["Cup", "Bottle"] },
          { prompt: "A child or a dad?", options: ["Child", "Dad"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Shorter (Height)? (2)",
        instruction: "Circle the one that is NOT as tall.",
        questions: [
          { prompt: "A mushroom or a sunflower?", options: ["Mushroom", "Sunflower"] },
          { prompt: "A bird or a giraffe?", optionIcons: ["bird", "giraffe"], options: ["Bird", "Giraffe"] },
          { prompt: "A teddy bear or a wardrobe?", optionIcons: ["teddy"], options: ["Teddy bear", "Wardrobe"] },
        ],
      },
      {
        type: "sorting",
        title: "Tall or Short?",
        instruction: "Sort each thing into the correct column.",
        columns: ["Tall", "Short"],
        items: [
          { label: "Giraffe", icon: "giraffe" },
          { label: "Ant", icon: "ant" },
          { label: "Tree", icon: "tree" },
          { label: "Flower", icon: "flower" },
          { label: "House", icon: "house" },
          { label: "Mouse", icon: "mouse" },
        ],
      },

      // =============================================
      // --- EASY: Comparing mass (heavier/lighter) ---
      // =============================================
      {
        type: "circle-correct",
        title: "Which Is Heavier? (1)",
        instruction: "Circle the HEAVIER item in each pair.",
        questions: [
          { prompt: "A watermelon or a grape?", optionIcons: ["watermelon", "grape"], options: ["Watermelon", "Grape"] },
          { prompt: "A brick or a sponge?", options: ["Brick", "Sponge"] },
          { prompt: "A dog or an ant?", optionIcons: ["dog", "ant"], options: ["Dog", "Ant"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Heavier? (2)",
        instruction: "Circle the HEAVIER item in each pair.",
        questions: [
          { prompt: "A horse or a cat?", optionIcons: ["horse", "cat"], options: ["Horse", "Cat"] },
          { prompt: "A bag of sand or a tissue?", options: ["Bag of sand", "Tissue"] },
          { prompt: "A rock or a leaf?", optionIcons: ["rock"], options: ["Rock", "Leaf"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Lighter? (1)",
        instruction: "Circle the LIGHTER item in each pair.",
        questions: [
          { prompt: "A balloon or a bowling ball?", options: ["Balloon", "Bowling ball"] },
          { prompt: "A leaf or a book?", optionIcons: ["book"], options: ["Leaf", "Book"] },
          { prompt: "A feather or an egg?", optionIcons: ["feather"], options: ["Feather", "Egg"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Lighter? (2)",
        instruction: "Circle the LIGHTER item in each pair.",
        questions: [
          { prompt: "A butterfly or a rock?", optionIcons: ["butterfly", "rock"], options: ["Butterfly", "Rock"] },
          { prompt: "A cotton ball or a banana?", optionIcons: ["banana"], options: ["Cotton ball", "Banana"] },
          { prompt: "A piece of paper or a cup of water?", optionIcons: ["cup"], options: ["Piece of paper", "Cup of water"] },
        ],
      },
      {
        type: "sorting",
        title: "Heavy or Light? (1)",
        instruction: "Sort each item into the correct column.",
        columns: ["Heavy", "Light"],
        items: [
          { label: "Bag of rice" },
          { label: "Cotton ball" },
          { label: "Rock", icon: "rock" },
          { label: "Tissue" },
          { label: "Backpack full of books", icon: "book" },
          { label: "Petal", icon: "flower" },
        ],
      },
      {
        type: "sorting",
        title: "Heavy or Light? (2)",
        instruction: "Sort each item into the correct column.",
        columns: ["Heavy", "Light"],
        items: [
          { label: "Elephant", icon: "elephant" },
          { label: "Feather", icon: "feather" },
          { label: "Watermelon", icon: "watermelon" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Horse", icon: "horse" },
          { label: "Grape", icon: "grape" },
        ],
      },

      // =============================================
      // --- MEDIUM: Comparing capacity (holds more/less) ---
      // =============================================
      {
        type: "circle-correct",
        title: "Which Holds More? (1)",
        instruction: "Circle the container that HOLDS MORE.",
        questions: [
          { prompt: "A bucket or a cup?", optionIcons: ["bucket", "cup"], options: ["Bucket", "Cup"] },
          { prompt: "A bath or a sink?", options: ["Bath", "Sink"] },
          { prompt: "A swimming pool or a paddling pool?", options: ["Swimming pool", "Paddling pool"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds More? (2)",
        instruction: "Circle the container that HOLDS MORE.",
        questions: [
          { prompt: "A fish tank or a glass?", options: ["Fish tank", "Glass"] },
          { prompt: "A wheelbarrow or a spoon?", optionIcons: ["spoon"], options: ["Wheelbarrow", "Spoon"] },
          { prompt: "A water bottle or a thimble?", optionIcons: ["bottle"], options: ["Water bottle", "Thimble"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds Less? (1)",
        instruction: "Circle the container that HOLDS LESS.",
        questions: [
          { prompt: "A mug or a jug?", options: ["Mug", "Jug"] },
          { prompt: "A teaspoon or a bowl?", options: ["Teaspoon", "Bowl"] },
          { prompt: "A thimble or a glass?", options: ["Thimble", "Glass"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds Less? (2)",
        instruction: "Circle the container that HOLDS LESS.",
        questions: [
          { prompt: "An egg cup or a bucket?", optionIcons: ["bucket"], options: ["Egg cup", "Bucket"] },
          { prompt: "A cup or a bathtub?", optionIcons: ["cup"], options: ["Cup", "Bathtub"] },
          { prompt: "A bottle cap or a pot?", options: ["Bottle cap", "Pot"] },
        ],
      },
      {
        type: "sorting",
        title: "Holds More or Holds Less?",
        instruction: "Sort each container into the correct column.",
        columns: ["Holds More", "Holds Less"],
        items: [
          { label: "Swimming pool" },
          { label: "Teaspoon", icon: "spoon" },
          { label: "Bucket", icon: "bucket" },
          { label: "Egg cup" },
          { label: "Bathtub" },
          { label: "Thimble" },
        ],
      },

      // =============================================
      // --- MEDIUM: Comparing duration ---
      // =============================================
      {
        type: "circle-correct",
        title: "Which Takes Longer? (1)",
        instruction: "Circle the activity that takes LONGER.",
        questions: [
          { prompt: "Brushing your teeth or having a shower?", options: ["Brushing teeth", "Having a shower"] },
          { prompt: "Blinking or reading a book?", options: ["Blinking", "Reading a book"] },
          { prompt: "Eating one biscuit or cooking a meal?", options: ["Eating one biscuit", "Cooking a meal"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Takes Longer? (2)",
        instruction: "Circle the activity that takes LONGER.",
        questions: [
          { prompt: "Writing your name or writing a story?", options: ["Writing your name", "Writing a story"] },
          { prompt: "Counting to 5 or counting to 100?", options: ["Counting to 5", "Counting to 100"] },
          { prompt: "Tying your shoes or building a sandcastle?", options: ["Tying your shoes", "Building a sandcastle"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Quicker? (1)",
        instruction: "Circle the activity that is QUICKER.",
        questions: [
          { prompt: "Clapping once or singing a song?", options: ["Clapping once", "Singing a song"] },
          { prompt: "Jumping once or running a race?", options: ["Jumping once", "Running a race"] },
          { prompt: "Sneezing or watching a movie?", options: ["Sneezing", "Watching a movie"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Quicker? (2)",
        instruction: "Circle the activity that is QUICKER.",
        questions: [
          { prompt: "Waving hello or painting a picture?", options: ["Waving hello", "Painting a picture"] },
          { prompt: "Taking one step or walking to school?", options: ["Taking one step", "Walking to school"] },
          { prompt: "Drinking a sip of water or eating a whole meal?", options: ["Drinking a sip", "Eating a whole meal"] },
        ],
      },
      {
        type: "sorting",
        title: "Quick or Slow?",
        instruction: "Sort each activity into the correct column.",
        columns: ["Quick", "Takes a Long Time"],
        items: [
          { label: "Clapping once" },
          { label: "Baking a cake" },
          { label: "Sneezing" },
          { label: "Reading a whole book" },
          { label: "Blinking" },
          { label: "Growing a plant" },
        ],
      },

      // =============================================
      // --- MEDIUM: Ordering by direct comparison ---
      // =============================================
      {
        type: "sequence",
        title: "Order by Length: Shortest to Longest (1)",
        instruction: "Put these in order from shortest to longest. Write 1, 2, 3.",
        items: [
          { label: "Caterpillar" },
          { label: "Snake", icon: "snake" },
          { label: "Worm" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Length: Shortest to Longest (2)",
        instruction: "Put these in order from shortest to longest. Write 1, 2, 3.",
        items: [
          { label: "Paper clip" },
          { label: "Pencil", icon: "pencil" },
          { label: "Cricket bat" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Height: Shortest to Tallest (1)",
        instruction: "Put these in order from shortest to tallest. Write 1, 2, 3.",
        items: [
          { label: "Sunflower", icon: "flower" },
          { label: "Grass" },
          { label: "Tree", icon: "tree" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Height: Shortest to Tallest (2)",
        instruction: "Put these in order from shortest to tallest. Write 1, 2, 3.",
        items: [
          { label: "Ant", icon: "ant" },
          { label: "Dog", icon: "dog" },
          { label: "Elephant", icon: "elephant" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Mass: Lightest to Heaviest (1)",
        instruction: "Put these in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "Coin" },
          { label: "Bag of potatoes" },
          { label: "Apple", icon: "apple" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Mass: Lightest to Heaviest (2)",
        instruction: "Put these in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "Feather", icon: "feather" },
          { label: "Book", icon: "book" },
          { label: "Watermelon", icon: "watermelon" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Capacity: Least to Most",
        instruction: "Put these in order from holds the least to holds the most. Write 1, 2, 3.",
        items: [
          { label: "Spoon", icon: "spoon" },
          { label: "Cup", icon: "cup" },
          { label: "Bucket", icon: "bucket" },
        ],
      },

      // =============================================
      // --- HARDER: Mixed comparisons ---
      // =============================================
      {
        type: "matching",
        title: "Match the Comparison (1)",
        instruction: "Draw a line to match each pair to the correct comparison word.",
        leftItems: [
          { label: "Bus and bicycle", objects: [] },
          { label: "Elephant and mouse", objects: [] },
          { label: "Bucket and teacup", objects: [] },
        ],
        rightItems: [
          { label: "Bus is longer", objects: [] },
          { label: "Bucket holds more", objects: [] },
          { label: "Elephant is heavier", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match the Comparison (2)",
        instruction: "Draw a line to match each pair to the correct comparison word.",
        leftItems: [
          { label: "Giraffe and dog", objects: [] },
          { label: "Watermelon and grape", objects: [] },
          { label: "Bath and cup", objects: [] },
        ],
        rightItems: [
          { label: "Giraffe is taller", objects: [] },
          { label: "Bath holds more", objects: [] },
          { label: "Watermelon is heavier", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Two Things (1)",
        instruction: "Circle the correct comparison.",
        questions: [
          { prompt: "A giraffe and a cat -- the giraffe is ___", options: ["Taller", "Shorter", "Lighter"] },
          { prompt: "A marble and a basketball -- the marble is ___", options: ["Bigger", "Smaller", "Heavier"] },
          { prompt: "A truck and a scooter -- the truck is ___", options: ["Lighter", "Shorter", "Heavier"] },
          { prompt: "A lake and a puddle -- the lake holds ___", options: ["Less", "More", "The same"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Two Things (2)",
        instruction: "Circle the correct comparison.",
        questions: [
          { prompt: "A horse and a bird -- the horse is ___", options: ["Lighter", "Heavier", "Shorter"] },
          { prompt: "A snake and a caterpillar -- the snake is ___", options: ["Shorter", "Longer", "Lighter"] },
          { prompt: "A swimming pool and a bucket -- the pool holds ___", options: ["Less", "The same", "More"] },
          { prompt: "A tree and a bush -- the tree is ___", options: ["Shorter", "Taller", "Lighter"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Size: Smallest to Biggest (1)",
        instruction: "Write 1 for smallest, 2 for middle, 3 for biggest.",
        columns: ["Smallest (1)", "Middle (2)", "Biggest (3)"],
        items: [
          { label: "Mouse", icon: "mouse" },
          { label: "Cat", icon: "cat" },
          { label: "Elephant", icon: "elephant" },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Size: Smallest to Biggest (2)",
        instruction: "Write 1 for smallest, 2 for middle, 3 for biggest.",
        columns: ["Smallest (1)", "Middle (2)", "Biggest (3)"],
        items: [
          { label: "Ant", icon: "ant" },
          { label: "Bird", icon: "bird" },
          { label: "Horse", icon: "horse" },
        ],
      },

      // =============================================
      // --- HARDER: Comparing with reasoning ---
      // =============================================
      {
        type: "circle-correct",
        title: "How Would You Compare? (1)",
        instruction: "Circle the BEST way to compare each pair.",
        questions: [
          { prompt: "Two pieces of string -- I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two rocks -- I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two bottles -- I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two sticks -- I would compare their ___", options: ["Length", "Mass", "Capacity"] },
        ],
      },
      {
        type: "circle-correct",
        title: "How Would You Compare? (2)",
        instruction: "Circle the BEST way to compare each pair.",
        questions: [
          { prompt: "Two ribbons -- I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two bags of fruit -- I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two buckets -- I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two buildings -- I would compare their ___", options: ["Height", "Mass", "Capacity"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Same or Different? (1)",
        instruction: "Could these two things be the same? Circle the best answer.",
        questions: [
          { prompt: "Can two pencils be the same length?", options: ["Yes", "No"] },
          { prompt: "Can two bags weigh the same?", options: ["Yes", "No"] },
          { prompt: "Can a big box be lighter than a small box?", options: ["Yes", "No"] },
          { prompt: "Can a short bottle hold more than a tall bottle?", options: ["Yes", "No"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Same or Different? (2)",
        instruction: "Could these two things be the same? Circle the best answer.",
        questions: [
          { prompt: "Can two cups hold the same amount of water?", options: ["Yes", "No"] },
          { prompt: "Can a small rock be heavier than a big pillow?", options: ["Yes", "No"] },
          { prompt: "Can two children be the same height?", options: ["Yes", "No"] },
          { prompt: "Can a thin book be longer than a thick book?", options: ["Yes", "No"] },
        ],
      },

      // =============================================
      // --- CHALLENGE: Ordering 4 items, tricky comparisons ---
      // =============================================
      {
        type: "sequence",
        title: "Order 4 Animals by Size",
        instruction: "Put these in order from smallest to biggest. Write 1, 2, 3, 4.",
        items: [
          { label: "Ant", icon: "ant" },
          { label: "Cat", icon: "cat" },
          { label: "Horse", icon: "horse" },
          { label: "Mouse", icon: "mouse" },
        ],
      },
      {
        type: "sequence",
        title: "Order 4 Animals by Height",
        instruction: "Put these in order from shortest to tallest. Write 1, 2, 3, 4.",
        items: [
          { label: "Mouse", icon: "mouse" },
          { label: "Dog", icon: "dog" },
          { label: "Horse", icon: "horse" },
          { label: "Giraffe", icon: "giraffe" },
        ],
      },
      {
        type: "sequence",
        title: "Order 4 Things by Length",
        instruction: "Put these in order from shortest to longest. Write 1, 2, 3, 4.",
        items: [
          { label: "Your thumb" },
          { label: "A bus" },
          { label: "A ruler" },
          { label: "A football field" },
        ],
      },
      {
        type: "sequence",
        title: "Order 4 Things by Mass",
        instruction: "Put these in order from lightest to heaviest. Write 1, 2, 3, 4.",
        items: [
          { label: "Feather", icon: "feather" },
          { label: "Apple", icon: "apple" },
          { label: "Dog", icon: "dog" },
          { label: "Elephant", icon: "elephant" },
        ],
      },
      {
        type: "sequence",
        title: "Order 4 Containers by Capacity",
        instruction: "Put these in order from holds the least to holds the most. Write 1, 2, 3, 4.",
        items: [
          { label: "Teaspoon", icon: "spoon" },
          { label: "Bucket", icon: "bucket" },
          { label: "Cup", icon: "cup" },
          { label: "Swimming pool" },
        ],
      },
      {
        type: "sequence",
        title: "Order 4 Activities by Duration",
        instruction: "Put these in order from quickest to longest. Write 1, 2, 3, 4.",
        items: [
          { label: "Clapping once" },
          { label: "Brushing your teeth" },
          { label: "Watching a movie" },
          { label: "Sleeping all night" },
        ],
      },
      {
        type: "circle-correct",
        title: "Tricky Comparisons (1)",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "A big balloon or a small rock -- which is heavier?", options: ["Big balloon", "Small rock"] },
          { prompt: "A tall thin glass or a short wide bowl -- which might hold more?", options: ["The glass", "The bowl", "Hard to tell without checking"] },
          { prompt: "A long piece of string or a short stick -- which is heavier?", options: ["The string", "The stick", "You need to compare them to know"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Tricky Comparisons (2)",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "A big fluffy pillow or a small stone -- which is heavier?", options: ["Big pillow", "Small stone", "You need to compare them to know"] },
          { prompt: "A tall narrow bottle or a short wide bucket -- which holds more?", options: ["The bottle", "The bucket", "Hard to tell without checking"] },
          { prompt: "A long thin leaf or a short thick book -- which is heavier?", options: ["The leaf", "The book"] },
        ],
      },
      {
        type: "matching",
        title: "Match Objects to Comparisons (1)",
        instruction: "Draw a line to match each statement to the correct pair.",
        leftItems: [
          { label: "The ___ is taller", objects: [] },
          { label: "The ___ is heavier", objects: [] },
          { label: "The ___ holds more", objects: [] },
          { label: "The ___ is longer", objects: [] },
        ],
        rightItems: [
          { label: "Train vs car", objects: [] },
          { label: "Giraffe vs rabbit", objects: [] },
          { label: "Bath vs cup", objects: [] },
          { label: "Bowling ball vs tennis ball", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match Objects to Comparisons (2)",
        instruction: "Draw a line to match each statement to the correct pair.",
        leftItems: [
          { label: "The ___ is shorter", objects: [] },
          { label: "The ___ is lighter", objects: [] },
          { label: "The ___ holds less", objects: [] },
          { label: "The ___ is quicker", objects: [] },
        ],
        rightItems: [
          { label: "Clapping vs cooking dinner", objects: [] },
          { label: "Ant vs dog", objects: [] },
          { label: "Feather vs rock", objects: [] },
          { label: "Teaspoon vs bucket", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "Direct Comparison Challenge (1)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "To compare which ribbon is longer, you should ___", options: ["Hold them next to each other", "Weigh them", "Put water in them"] },
          { prompt: "To compare which box is heavier, you should ___", options: ["Measure them with a ruler", "Hold one in each hand", "Fill them with water"] },
          { prompt: "To compare which cup holds more, you should ___", options: ["Put them side by side", "Weigh them", "Fill one and pour into the other"] },
          { prompt: "To compare which is taller, two friends should ___", options: ["Stand back to back", "Sit down", "Hold hands"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Direct Comparison Challenge (2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "To compare which stick is longer, you should ___", options: ["Line them up end to end", "Put them in water", "Weigh them"] },
          { prompt: "To compare which bag is heavier, you should ___", options: ["Put them side by side", "Hold one in each hand", "Measure them"] },
          { prompt: "To compare which jug holds more, you should ___", options: ["Stand them next to each other", "Weigh them", "Fill one and pour into the other"] },
          { prompt: "To compare which pencil is shorter, you should ___", options: ["Weigh them", "Line them up side by side", "Fill them with water"] },
        ],
      },

      // =============================================
      // --- Improvement: Comparing events explicitly ---
      // =============================================
      {
        type: "circle-correct",
        title: "Comparing Events (1)",
        instruction: "Events are things that happen. We can compare how long events take!",
        questions: [
          { prompt: "Which EVENT takes longer: brushing your teeth or sleeping all night?", options: ["Brushing teeth", "Sleeping all night"] },
          { prompt: "Which EVENT is quicker: eating one grape or eating a whole dinner?", options: ["Eating one grape", "Eating dinner"] },
          { prompt: "Which EVENT takes longer: walking to the letterbox or driving to the shops?", options: ["Walking to letterbox", "Driving to shops"] },
          { prompt: "Put these EVENTS in order from quickest to longest: clapping once, reading a book, cooking dinner.", options: ["Clap, book, cooking", "Cooking, book, clap", "Book, clap, cooking"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Comparing Events (2)",
        instruction: "Think about how long each event takes. Circle the right answer.",
        questions: [
          { prompt: "Which EVENT takes longer: washing your hands or having a bath?", options: ["Washing hands", "Having a bath"] },
          { prompt: "Which EVENT is quicker: opening a door or painting a fence?", options: ["Opening a door", "Painting a fence"] },
          { prompt: "Which EVENT takes longer: eating one apple or growing an apple tree?", options: ["Eating one apple", "Growing an apple tree"] },
          { prompt: "Put these EVENTS in order from quickest to longest: yawning, eating lunch, going on a holiday.", options: ["Yawn, lunch, holiday", "Holiday, yawn, lunch", "Lunch, holiday, yawn"] },
        ],
      },

      // =============================================
      // --- Improvement: Open-ended comparison reasoning ---
      // =============================================
      {
        type: "open-response",
        title: "How Would You Compare? (1)",
        instruction: "For each pair, write HOW you would compare them. What would you do?",
        prompts: [
          { text: "Two sticks -- how would you find which is longer?", type: "lines", lines: 2 },
          { text: "Two bags -- how would you find which is heavier?", type: "lines", lines: 2 },
          { text: "Two jugs -- how would you find which holds more water?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "How Would You Compare? (2)",
        instruction: "For each pair, write HOW you would compare them. What would you do?",
        prompts: [
          { text: "Two ribbons -- how would you find which is longer?", type: "lines", lines: 2 },
          { text: "Two rocks -- how would you find which is heavier?", type: "lines", lines: 2 },
          { text: "Two cups -- how would you find which holds more?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Draw and Compare",
        instruction: "Draw two things and write which one is bigger, longer, or heavier.",
        prompts: [
          { text: "Draw a tall thing and a short thing. Write which is taller.", type: "lines", lines: 3 },
          { text: "Draw a heavy thing and a light thing. Write which is heavier.", type: "lines", lines: 3 },
        ],
      },

      // =============================================
      // --- Additional activities ---
      // =============================================
      {
        type: "circle-correct",
        title: "Longer or Shorter?",
        instruction: "Circle the correct comparison for each pair.",
        questions: [
          { prompt: "A pencil and a ruler — which is usually longer?", options: ["Pencil", "Ruler", "Same"] },
          { prompt: "Your arm and your finger — which is shorter?", options: ["Arm", "Finger", "Same"] },
          { prompt: "A bed and a pillow — which is longer?", options: ["Bed", "Pillow", "Same"] },
          { prompt: "A house and a car — which is taller?", options: ["House", "Car", "Same"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Heavier or Lighter?",
        instruction: "Think about the real weight. Sort each object into the correct column.",
        columns: ["Heavier", "Lighter"],
        items: [
          { label: "Feather", icon: "feather" },
          { label: "Rock", icon: "rock" },
          { label: "Elephant", icon: "elephant" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Car", icon: "car" },
          { label: "Apple", icon: "apple" },
        ],
      },
      {
        type: "matching",
        title: "Match Measurement Words",
        instruction: "Draw a line to match each measurement word to its opposite.",
        left: ["heavier", "longer", "taller", "more"],
        right: ["shorter in height", "fewer", "lighter", "shorter in length"],
      },
      {
        type: "open-response",
        title: "Measure Using Your Hand",
        instruction: "Use your hand span to measure objects. A hand span is the width of your outstretched hand.",
        prompts: [
          { text: "My book is ___ hand spans wide.", type: "lines", lines: 1 },
          { text: "My table is ___ hand spans wide.", type: "lines", lines: 1 },
          { text: "Which is wider, the book or the table? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Full Is the Container?",
        instruction: "Circle the correct word to describe each container.",
        questions: [
          { prompt: "A glass filled to the top with water is:", options: ["empty", "full", "half full"] },
          { prompt: "A jar with just a little water is:", options: ["full", "nearly empty", "overflowing"] },
          { prompt: "A bucket with water halfway up is:", options: ["full", "empty", "half full"] },
          { prompt: "A completely empty cup is:", options: ["full", "empty", "half full"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Holds More or Fewer?",
        instruction: "Think about how much each container holds. Sort into the correct column.",
        columns: ["Holds a lot", "Holds a little"],
        items: [
          { label: "Bathtub" },
          { label: "Teaspoon" },
          { label: "Swimming pool" },
          { label: "Thimble" },
          { label: "Bucket", icon: "bucket" },
          { label: "Cup", icon: "cup" },
        ],
      },
      {
        type: "open-response",
        title: "Compare Two Objects",
        instruction: "Choose two objects from your home and compare them. Write what you find.",
        prompts: [
          { text: "Object 1: _______________ Object 2: _______________", type: "lines", lines: 1 },
          { text: "Which is longer? _______________", type: "lines", lines: 1 },
          { text: "Which is heavier? _______________", type: "lines", lines: 1 },
          { text: "How did you compare them? _______________", type: "lines", lines: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Direct Comparison Quiz",
        instruction: "Circle the correct answer for each question about direct comparison.",
        questions: [
          { prompt: "Direct comparison means...", options: ["Guessing which is bigger", "Putting things side by side to compare", "Using a ruler to measure"] },
          { prompt: "To compare two lengths, you should...", options: ["Hold one object in each hand", "Line up the objects at one end and see which goes further", "Guess which is longer"] },
          { prompt: "Which two objects are the easiest to compare directly?", options: ["Two pencils", "A mountain and a pea", "The sun and the moon"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Measuring With Blocks",
        instruction: "These objects were measured using blocks. Count the tally marks and write how many blocks long each one is.",
        categories: [
          { label: "Pencil", icon: "pencil", count: 8 },
          { label: "Book", icon: "book", count: 12 },
          { label: "Spoon", icon: "spoon", count: 6 },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Lengths",
        instruction: "Look at each pair of lengths. Circle the one that is longer.",
        pairs: [
          { leftCount: 4, rightCount: 7, object: "pencil", question: "4 blocks or 7 blocks — which is longer?" },
          { leftCount: 10, rightCount: 5, object: "book", question: "10 blocks or 5 blocks — which is longer?" },
          { leftCount: 6, rightCount: 6, object: "spoon", question: "Are 6 blocks and 6 blocks the same?" },
        ],
      },
      {
        type: "picture-graph",
        title: "Lengths Measured With Counters",
        instruction: "This graph shows how many counters long each object is. Answer the questions.",
        rows: [
          { label: "Pencil", icon: "pencil", count: 7 },
          { label: "Crayon", icon: "pencil", count: 5 },
          { label: "Spoon", icon: "spoon", count: 6 },
          { label: "Fork", icon: "spoon", count: 8 },
        ],
        questions: [
          "Which object is the longest?",
          "Which object is the shortest?",
          "How much longer is the fork than the crayon?",
        ],
      },
      {
        type: "open-response",
        title: "Order Three Objects",
        instruction: "Find 3 objects at home and measure each with blocks or your hand spans. Record and order them.",
        prompts: [
          { text: "Object 1: _______________ Length: ___", type: "lines", lines: 1 },
          { text: "Object 2: _______________ Length: ___", type: "lines", lines: 1 },
          { text: "Object 3: _______________ Length: ___", type: "lines", lines: 1 },
          { text: "Order from shortest to longest: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sequence",
        title: "Order Objects by Length",
        instruction: "Write 1st, 2nd, 3rd, 4th to order these objects from shortest to longest.",
        items: [
          { label: "7 blocks long" },
          { label: "3 blocks long" },
          { label: "12 blocks long" },
          { label: "5 blocks long" },
        ],
      },
      {
        type: "number-bonds",
        title: "Comparing Number Bonds",
        instruction: "The total length is split between two sections. Fill in the missing part.",
        bonds: [
          { total: 10, partA: 6, partB: null },
          { total: 8, partA: null, partB: 3 },
          { total: 12, partA: 7, partB: null },
          { total: 9, partA: null, partB: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Container Holds More?",
        instruction: "Circle the container that holds MORE water.",
        questions: [
          { prompt: "A teacup or a swimming pool?", options: ["Teacup", "Swimming pool", "Same"] },
          { prompt: "A bottle or a bathtub?", options: ["Bottle", "Bathtub", "Same"] },
          { prompt: "A soup bowl or a spoon?", options: ["Soup bowl", "Spoon", "Same"] },
        ],
      },
      {
        type: "ten-frame",
        title: "Measure With Ten Frames",
        instruction: "Each ten frame represents units of length. Count the filled units and write the number.",
        frames: [
          { filled: 7, total: 10 },
          { filled: 4, total: 10 },
          { filled: 10, total: 10 },
          { filled: 5, total: 10 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Tall or Short?",
        instruction: "Think about the real height of each thing. Sort it into the correct column.",
        columns: ["Tall", "Short"],
        items: [
          { label: "Giraffe", icon: "giraffe" },
          { label: "Ant", icon: "ant" },
          { label: "House", icon: "house" },
          { label: "Apple", icon: "apple" },
          { label: "Tree", icon: "tree" },
          { label: "Mouse", icon: "mouse" },
        ],
      },
      {
        type: "open-response",
        title: "Tallest in the Family",
        instruction: "Think about the people in your family. Answer these comparison questions.",
        prompts: [
          { text: "The tallest person in my family is: _______________", type: "lines", lines: 1 },
          { text: "The shortest person in my family is: _______________", type: "lines", lines: 1 },
          { text: "How do you know who is tallest? _______________", type: "lines", lines: 2 },
        ],
      },
      // =============================================
      // --- Try This at Home ---
      // =============================================
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Direct comparison means putting things next to each other to compare. Try these!",
        suggestions: [
          "Find two shoes in the house. Put them heel-to-heel. Which is longer? That's direct comparison of length!",
          "Hold an apple in one hand and a banana in the other. Which feels heavier? That's direct comparison of mass!",
          "Get two different cups. Fill one with water and pour it into the other. Does it overflow or not fill up? That's comparing capacity!",
          "Time yourself doing two activities (star jumps vs hopping). Which took longer? That's comparing duration!",
          "Line up three toys from shortest to tallest. You just ordered by height!",
          "Find the heaviest and lightest thing in your pencil case. How did you decide?",
        ],
      },
    ],
  },

  // 9. Time of day
  {
    slug: "time-of-day",
    title: "Time of Day",
    strand: "Measurement",
    description: "Sequence and connect familiar events to the time of day",
    lesson: {
      title: "Morning, Afternoon, Evening, Night",
      objective: "Put everyday events in the right order and connect them to the part of the day they happen in.",
      materials: [
        "4 sheets of paper labelled: Morning, Afternoon, Evening, Night",
        "Paper strips or cards to write or draw daily events on",
        "Pencils or markers",
      ],
      intro: {
        title: "Tell Me Your Day",
        script: "I want to hear all about your day! What was the very first thing you did when you woke up? And then what? Let's build your whole day out on the floor, in order — morning first, then afternoon, then evening, then night.",
        action: "As your child describes their day, write or draw each event on a separate strip of paper. Lay them out in sequence. Ask questions to establish order: 'Did you eat breakfast before or after you got dressed?' Help them see the natural flow of the day.",
      },
      mainActivity: {
        title: "Sort the Day",
        script: "Here are some things people do every day — let's sort them into the right part of the day. Where does 'eating breakfast' go? What about 'going to bed'? And 'playing outside after lunch'?",
        action: "Write or draw 8–10 daily events on separate strips: brush teeth, eat lunch, watch TV, go to bed, wake up, play outside, have dinner, have a bath. Your child sorts them under the Morning, Afternoon, Evening and Night labels. Some events may fit in more than one — that's a great discussion to have!",
      },
      wrapUp: {
        title: "My Day in Four Drawings",
        script: "Let's make a mini book about your day! You'll draw one thing you do in the morning, one in the afternoon, one in the evening, and one at night. Then we'll read it together.",
        action: "Your child draws one event per time of day. Label each drawing together. Lay them in sequence and 'read' the book back: 'In the morning you... then in the afternoon...' This is a great keepsake too!",
      },
    },
    activities: [
      // --- EASY: Morning activities ---
      {
        type: "circle-correct",
        title: "What Do We Do in the Morning?",
        instruction: "Circle the things you do in the MORNING.",
        questions: [
          { prompt: "Wake up", options: ["Morning", "Night"] },
          { prompt: "Eat breakfast", options: ["Morning", "Night"] },
          { prompt: "Put on pyjamas", options: ["Morning", "Night"] },
          { prompt: "Get dressed for school", options: ["Morning", "Night"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Morning Activities",
        instruction: "Circle the things you do in the MORNING.",
        questions: [
          { prompt: "Brush your teeth after waking up", options: ["Morning", "Night"] },
          { prompt: "Pack your school bag", options: ["Morning", "Night"] },
          { prompt: "See the sun come up", options: ["Morning", "Night"] },
          { prompt: "Read a bedtime story", options: ["Morning", "Night"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Do We Do at Night?",
        instruction: "Circle the things you do at NIGHT.",
        questions: [
          { prompt: "Go to sleep", options: ["Morning", "Night"] },
          { prompt: "Eat breakfast", options: ["Morning", "Night"] },
          { prompt: "Brush teeth before bed", options: ["Morning", "Night"] },
          { prompt: "Read a bedtime story", options: ["Morning", "Night"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Night Activities",
        instruction: "Circle the things you do at NIGHT.",
        questions: [
          { prompt: "Look at the stars", options: ["Morning", "Night"] },
          { prompt: "Get dressed for school", options: ["Morning", "Night"] },
          { prompt: "Turn off the light", options: ["Morning", "Night"] },
          { prompt: "Cuddle your teddy in bed", options: ["Morning", "Night"] },
        ],
      },
      {
        type: "sorting",
        title: "Morning or Night?",
        instruction: "Sort each activity. Does it happen in the morning or at night?",
        columns: ["Morning", "Night"],
        items: [
          { label: "Wake up", icon: "sun" },
          { label: "Go to sleep", icon: "moon" },
          { label: "Eat breakfast", icon: "sun" },
          { label: "Put on pyjamas", icon: "moon" },
          { label: "Brush teeth (morning)", icon: "sun" },
          { label: "Read a bedtime story", icon: "moon" },
        ],
      },
      {
        type: "sorting",
        title: "Morning or Night? (Part 2)",
        instruction: "Sort each activity. Does it happen in the morning or at night?",
        columns: ["Morning", "Night"],
        items: [
          { label: "See the sunrise", icon: "sun" },
          { label: "Turn off the light", icon: "moon" },
          { label: "Pack school bag", icon: "sun" },
          { label: "Dream while sleeping", icon: "moon" },
          { label: "Open the curtains", icon: "sun" },
          { label: "Close the curtains", icon: "moon" },
        ],
      },
      {
        type: "sequence",
        title: "Morning Routine",
        instruction: "Put these morning activities in order. Write 1, 2, 3.",
        items: [
          { label: "Eat breakfast" },
          { label: "Wake up" },
          { label: "Get dressed" },
        ],
      },
      {
        type: "sequence",
        title: "Getting Ready for School",
        instruction: "Put these morning activities in order. Write 1, 2, 3.",
        items: [
          { label: "Walk to school" },
          { label: "Brush your teeth" },
          { label: "Pack your bag" },
        ],
      },
      {
        type: "sorting",
        title: "Sort Morning and Night",
        instruction: "Sort each activity into the correct column — Morning or Night.",
        columns: ["Morning", "Night"],
        items: [
          { label: "See the sunrise" },
          { label: "Put on pyjamas" },
          { label: "Eat cereal" },
          { label: "Close the curtains" },
        ],
      },

      // --- EASY: Introducing afternoon ---
      {
        type: "circle-correct",
        title: "Morning, Afternoon, or Night?",
        instruction: "Circle when each activity usually happens.",
        questions: [
          { prompt: "Eat lunch", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Watch the sunset", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Wake up", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "See the stars", options: ["Morning", "Afternoon", "Night"] },
        ],
      },
      {
        type: "circle-correct",
        title: "When Does This Happen?",
        instruction: "Circle when each activity usually happens.",
        questions: [
          { prompt: "Play at the park after school", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Eat toast and eggs", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Have an afternoon nap", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Put on pyjamas", options: ["Morning", "Afternoon", "Night"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Time of Day Quiz",
        instruction: "Circle when each activity usually happens.",
        questions: [
          { prompt: "Have afternoon tea", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Brush teeth before bed", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Eat breakfast", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Do homework after school", options: ["Morning", "Afternoon", "Night"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Morning, Afternoon, or Night?",
        instruction: "Sort each activity into the correct time of day.",
        columns: ["Morning", "Afternoon", "Night"],
        items: [
          { label: "Eat breakfast" },
          { label: "Go to sleep" },
          { label: "Eat lunch" },
          { label: "Afternoon snack" },
          { label: "Wake up" },
          { label: "Brush teeth (bedtime)" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: When Does It Happen?",
        instruction: "Sort each activity into the correct time of day.",
        columns: ["Morning", "Afternoon", "Night"],
        items: [
          { label: "Play after school" },
          { label: "See the sunrise" },
          { label: "Read a bedtime story" },
          { label: "Have afternoon tea" },
          { label: "Get dressed for school" },
          { label: "Look at the stars" },
        ],
      },
      {
        type: "matching",
        title: "Match Activity to Time of Day",
        instruction: "Draw a line to match each activity to when it happens.",
        leftItems: [
          { label: "Breakfast", objects: [] },
          { label: "Lunch", objects: [] },
          { label: "Dinner", objects: [] },
          { label: "Bedtime story", objects: [] },
        ],
        rightItems: [
          { label: "Night", objects: [] },
          { label: "Morning", objects: [] },
          { label: "Evening", objects: [] },
          { label: "Middle of the day", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match What You See to the Time",
        instruction: "Draw a line to match what you see outside to the time of day.",
        leftItems: [
          { label: "Bright sunshine", objects: [] },
          { label: "Stars in the sky", objects: [] },
          { label: "Sun going down", objects: [] },
          { label: "Dew on the grass", objects: [] },
        ],
        rightItems: [
          { label: "Evening", objects: [] },
          { label: "Night", objects: [] },
          { label: "Middle of the day", objects: [] },
          { label: "Early morning", objects: [] },
        ],
      },
      {
        type: "sequence",
        title: "Meals in Order",
        instruction: "Put these meals in the order they happen. Write 1, 2, 3.",
        items: [
          { label: "Dinner" },
          { label: "Breakfast" },
          { label: "Lunch" },
        ],
      },
      {
        type: "sequence",
        title: "Snacks and Meals in Order",
        instruction: "Put these in the order they happen during the day. Write 1, 2, 3, 4.",
        items: [
          { label: "Afternoon tea" },
          { label: "Breakfast" },
          { label: "Dinner" },
          { label: "Lunch" },
        ],
      },

      // --- MEDIUM: Sequencing daily events ---
      {
        type: "sequence",
        title: "Put the Day in Order",
        instruction: "Number these events 1 to 4 in the order they happen.",
        items: [
          { label: "Eat dinner" },
          { label: "Wake up" },
          { label: "Go to school" },
          { label: "Go to bed" },
        ],
      },
      {
        type: "sequence",
        title: "A School Day in Order",
        instruction: "Number these events 1 to 4 in the order they happen.",
        items: [
          { label: "Eat lunch at school" },
          { label: "Walk to school" },
          { label: "Come home" },
          { label: "Eat breakfast" },
        ],
      },
      {
        type: "sequence",
        title: "After School Routine",
        instruction: "Put these after-school activities in order. Write 1, 2, 3.",
        items: [
          { label: "Have a snack" },
          { label: "Walk home from school" },
          { label: "Play outside" },
        ],
      },
      {
        type: "sequence",
        title: "Getting Home from School",
        instruction: "Put these activities in order. Write 1, 2, 3.",
        items: [
          { label: "Take off your shoes" },
          { label: "Walk in the front door" },
          { label: "Put your bag away" },
        ],
      },
      {
        type: "sequence",
        title: "Bedtime Routine",
        instruction: "Put these bedtime activities in order. Write 1, 2, 3, 4.",
        items: [
          { label: "Fall asleep" },
          { label: "Put on pyjamas" },
          { label: "Brush teeth" },
          { label: "Read a story" },
        ],
      },
      {
        type: "sequence",
        title: "Getting Ready for Bed",
        instruction: "Put these bedtime activities in order. Write 1, 2, 3, 4.",
        items: [
          { label: "Close your eyes" },
          { label: "Have a bath" },
          { label: "Say goodnight" },
          { label: "Get into bed" },
        ],
      },
      {
        type: "circle-correct",
        title: "What Happens First?",
        instruction: "Circle the activity that happens FIRST.",
        questions: [
          { prompt: "Eat dinner or eat breakfast?", options: ["Eat dinner", "Eat breakfast"] },
          { prompt: "Go to bed or go to school?", options: ["Go to bed", "Go to school"] },
          { prompt: "Eat lunch or wake up?", options: ["Eat lunch", "Wake up"] },
          { prompt: "Afternoon play or morning lessons?", options: ["Afternoon play", "Morning lessons"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Comes First?",
        instruction: "Circle the activity that happens FIRST.",
        questions: [
          { prompt: "Have a bath or eat breakfast?", options: ["Have a bath", "Eat breakfast"] },
          { prompt: "Afternoon tea or lunch?", options: ["Afternoon tea", "Lunch"] },
          { prompt: "Wake up or brush your teeth?", options: ["Wake up", "Brush your teeth"] },
          { prompt: "Go to sleep or put on pyjamas?", options: ["Go to sleep", "Put on pyjamas"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Happens Next?",
        instruction: "Circle what usually happens NEXT.",
        questions: [
          { prompt: "After you wake up, you ___", options: ["Go to sleep", "Get dressed", "Eat dinner"] },
          { prompt: "After school, you ___", options: ["Wake up", "Go home", "Eat breakfast"] },
          { prompt: "After dinner, you ___", options: ["Eat lunch", "Have a bath", "Go to school"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Comes After?",
        instruction: "Circle what usually happens NEXT.",
        questions: [
          { prompt: "After you eat lunch, you ___", options: ["Go to sleep", "Play or rest", "Eat breakfast"] },
          { prompt: "After you brush your teeth at night, you ___", options: ["Go to school", "Go to bed", "Eat lunch"] },
          { prompt: "After you put on your shoes, you ___", options: ["Go to bed", "Have a bath", "Go outside"] },
          { prompt: "After you have a bath, you ___", options: ["Eat breakfast", "Wake up", "Put on pyjamas"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Before School or After School?",
        instruction: "Sort each activity. Does it happen before school or after school?",
        columns: ["Before School", "After School"],
        items: [
          { label: "Eat breakfast", icon: "sun" },
          { label: "Do homework", icon: "book" },
          { label: "Pack your bag", icon: "sun" },
          { label: "Play outside", icon: "ball" },
          { label: "Get dressed", icon: "sun" },
          { label: "Have afternoon tea", icon: "cup" },
        ],
      },

      // --- MEDIUM: Days of the week ---
      {
        type: "sequence",
        title: "Days of the Week",
        instruction: "Put these days in the correct order. Write 1, 2, 3, 4.",
        items: [
          { label: "Wednesday" },
          { label: "Monday" },
          { label: "Thursday" },
          { label: "Tuesday" },
        ],
      },
      {
        type: "sequence",
        title: "More Days of the Week",
        instruction: "Put these days in the correct order. Write 1, 2, 3, 4.",
        items: [
          { label: "Saturday" },
          { label: "Thursday" },
          { label: "Friday" },
          { label: "Sunday" },
        ],
      },
      {
        type: "sequence",
        title: "All Seven Days",
        instruction: "Put all seven days of the week in order. Write 1 to 7.",
        items: [
          { label: "Friday" },
          { label: "Tuesday" },
          { label: "Sunday" },
          { label: "Wednesday" },
          { label: "Monday" },
          { label: "Saturday" },
          { label: "Thursday" },
        ],
      },
      {
        type: "circle-correct",
        title: "What Day Comes Next?",
        instruction: "Circle the day that comes NEXT.",
        questions: [
          { prompt: "After Monday comes ___", options: ["Sunday", "Tuesday", "Wednesday"] },
          { prompt: "After Friday comes ___", options: ["Thursday", "Saturday", "Sunday"] },
          { prompt: "After Wednesday comes ___", options: ["Tuesday", "Thursday", "Friday"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Day Comes Next? (Part 2)",
        instruction: "Circle the day that comes NEXT.",
        questions: [
          { prompt: "After Sunday comes ___", options: ["Saturday", "Monday", "Tuesday"] },
          { prompt: "After Tuesday comes ___", options: ["Monday", "Wednesday", "Thursday"] },
          { prompt: "After Thursday comes ___", options: ["Wednesday", "Friday", "Saturday"] },
          { prompt: "After Saturday comes ___", options: ["Friday", "Sunday", "Monday"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Weekday or Weekend?",
        instruction: "Circle whether each day is a weekday or a weekend day.",
        questions: [
          { prompt: "Saturday", options: ["Weekday", "Weekend"] },
          { prompt: "Tuesday", options: ["Weekday", "Weekend"] },
          { prompt: "Sunday", options: ["Weekday", "Weekend"] },
          { prompt: "Friday", options: ["Weekday", "Weekend"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Weekday or Weekend? (Part 2)",
        instruction: "Circle whether each day is a weekday or a weekend day.",
        questions: [
          { prompt: "Monday", options: ["Weekday", "Weekend"] },
          { prompt: "Wednesday", options: ["Weekday", "Weekend"] },
          { prompt: "Thursday", options: ["Weekday", "Weekend"] },
          { prompt: "Sunday", options: ["Weekday", "Weekend"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Weekday or Weekend?",
        instruction: "Sort each day. Is it a weekday or a weekend day?",
        columns: ["Weekday", "Weekend"],
        items: [
          { label: "Monday" },
          { label: "Saturday" },
          { label: "Wednesday" },
          { label: "Sunday" },
          { label: "Friday" },
          { label: "Tuesday" },
        ],
      },

      // --- HARDER: Before and after, time language ---
      {
        type: "circle-correct",
        title: "Before or After?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Breakfast happens ___ lunch.", options: ["Before", "After"] },
          { prompt: "Dinner happens ___ lunch.", options: ["Before", "After"] },
          { prompt: "Bedtime happens ___ dinner.", options: ["Before", "After"] },
          { prompt: "Waking up happens ___ going to school.", options: ["Before", "After"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Before or After? (Part 2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "Lunch happens ___ breakfast.", options: ["Before", "After"] },
          { prompt: "Morning tea happens ___ lunch.", options: ["Before", "After"] },
          { prompt: "Getting dressed happens ___ having a bath at night.", options: ["Before", "After"] },
          { prompt: "Afternoon play happens ___ school lessons.", options: ["Before", "After"] },
        ],
      },
      {
        type: "matching",
        title: "Match Before and After",
        instruction: "Draw a line to match each event to what happens right AFTER it.",
        leftItems: [
          { label: "Wake up", objects: [] },
          { label: "Eat lunch", objects: [] },
          { label: "Have a bath", objects: [] },
        ],
        rightItems: [
          { label: "Put on pyjamas", objects: [] },
          { label: "Get dressed", objects: [] },
          { label: "Afternoon play", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "What Happens Before?",
        instruction: "Draw a line to match each event to what happens right BEFORE it.",
        leftItems: [
          { label: "Eat breakfast", objects: [] },
          { label: "Go to bed", objects: [] },
          { label: "Go to school", objects: [] },
          { label: "Eat lunch", objects: [] },
        ],
        rightItems: [
          { label: "Morning lessons", objects: [] },
          { label: "Wake up", objects: [] },
          { label: "Brush teeth and pyjamas", objects: [] },
          { label: "Get dressed and pack bag", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "Time Words",
        instruction: "Circle the best time word for each sentence.",
        questions: [
          { prompt: "We eat breakfast in the ___", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "The sun goes down in the ___", options: ["Morning", "Evening", "Midnight"] },
          { prompt: "We see stars at ___", options: ["Lunchtime", "Morning", "Night"] },
          { prompt: "School starts in the ___", options: ["Morning", "Night", "Evening"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Time Words",
        instruction: "Circle the best time word for each sentence.",
        questions: [
          { prompt: "We eat dinner in the ___", options: ["Morning", "Afternoon", "Evening"] },
          { prompt: "The birds start singing in the ___", options: ["Morning", "Night", "Midnight"] },
          { prompt: "We play sport in the ___", options: ["Night", "Afternoon", "Midnight"] },
          { prompt: "It gets dark in the ___", options: ["Morning", "Afternoon", "Evening"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort the Time Words",
        instruction: "Sort each word or phrase into when it describes.",
        columns: ["Earlier in the Day", "Later in the Day"],
        items: [
          { label: "Morning", icon: "sun" },
          { label: "Evening", icon: "moon" },
          { label: "Sunrise", icon: "sun" },
          { label: "Sunset", icon: "moon" },
          { label: "Midday", icon: "sun" },
          { label: "Midnight", icon: "moon" },
        ],
      },

      // --- HARDER: Yesterday, today, tomorrow ---
      {
        type: "circle-correct",
        title: "Yesterday, Today, or Tomorrow?",
        instruction: "Circle the correct time word.",
        questions: [
          { prompt: "The day before today is called ___", options: ["Yesterday", "Today", "Tomorrow"] },
          { prompt: "The day after today is called ___", options: ["Yesterday", "Today", "Tomorrow"] },
          { prompt: "Right now is called ___", options: ["Yesterday", "Today", "Tomorrow"] },
        ],
      },
      {
        type: "circle-correct",
        title: "When Did It Happen?",
        instruction: "Circle whether each thing happened yesterday, today, or will happen tomorrow.",
        questions: [
          { prompt: "I will go to the park after I sleep tonight.", options: ["Yesterday", "Today", "Tomorrow"] },
          { prompt: "I ate breakfast this morning.", options: ["Yesterday", "Today", "Tomorrow"] },
          { prompt: "I went swimming the day before today.", options: ["Yesterday", "Today", "Tomorrow"] },
        ],
      },
      {
        type: "circle-correct",
        title: "When Will It Happen?",
        instruction: "Circle whether each thing happened yesterday, is happening today, or will happen tomorrow.",
        questions: [
          { prompt: "I played at the park the day before today.", options: ["Yesterday", "Today", "Tomorrow"] },
          { prompt: "I am eating lunch right now.", options: ["Yesterday", "Today", "Tomorrow"] },
          { prompt: "I will visit Grandma after I sleep tonight.", options: ["Yesterday", "Today", "Tomorrow"] },
          { prompt: "I read a book the day before today.", options: ["Yesterday", "Today", "Tomorrow"] },
        ],
      },
      {
        type: "sequence",
        title: "Yesterday, Today, Tomorrow",
        instruction: "Put these time words in order from the past to the future. Write 1, 2, 3.",
        items: [
          { label: "Tomorrow" },
          { label: "Yesterday" },
          { label: "Today" },
        ],
      },
      {
        type: "matching",
        title: "Match the Time Words",
        instruction: "Draw a line to match each description to the correct time word.",
        leftItems: [
          { label: "The day before today", objects: [] },
          { label: "Right now", objects: [] },
          { label: "The day after today", objects: [] },
        ],
        rightItems: [
          { label: "Tomorrow", objects: [] },
          { label: "Yesterday", objects: [] },
          { label: "Today", objects: [] },
        ],
      },

      // --- CHALLENGE: Full day sequencing, seasons ---
      {
        type: "sequence",
        title: "A Full Day -- Start to Finish",
        instruction: "Put these in order from the start of the day to the end. Write 1 to 6.",
        items: [
          { label: "Eat dinner" },
          { label: "Wake up" },
          { label: "Eat lunch" },
          { label: "Go to bed" },
          { label: "Go to school" },
          { label: "Eat breakfast" },
        ],
      },
      {
        type: "sequence",
        title: "A Weekend Day -- Start to Finish",
        instruction: "Put these in order from the start of the day to the end. Write 1 to 5.",
        items: [
          { label: "Have lunch" },
          { label: "Play in the morning" },
          { label: "Go to bed" },
          { label: "Wake up" },
          { label: "Eat dinner" },
        ],
      },
      {
        type: "sorting",
        title: "Light Outside or Dark Outside?",
        instruction: "Sort each time. Is it usually light or dark outside?",
        columns: ["Light Outside", "Dark Outside"],
        items: [
          { label: "Lunchtime", icon: "sun" },
          { label: "Midnight", icon: "moon" },
          { label: "Morning tea", icon: "sun" },
          { label: "Bedtime", icon: "moon" },
          { label: "After school", icon: "sun" },
          { label: "Very early morning (3am)", icon: "moon" },
        ],
      },
      {
        type: "sorting",
        title: "Light or Dark? (Part 2)",
        instruction: "Sort each time. Is it usually light or dark outside?",
        columns: ["Light Outside", "Dark Outside"],
        items: [
          { label: "Breakfast time", icon: "sun" },
          { label: "When you dream", icon: "moon" },
          { label: "Afternoon play", icon: "sun" },
          { label: "Dinner time (winter)", icon: "moon" },
          { label: "Walking to school", icon: "sun" },
          { label: "Looking at the stars", icon: "moon" },
        ],
      },
      {
        type: "circle-correct",
        title: "Seasons of the Year",
        instruction: "Circle the correct answer about seasons.",
        questions: [
          { prompt: "How many seasons are there in a year?", options: ["2", "4", "7"] },
          { prompt: "Which season is the hottest in Australia?", options: ["Winter", "Summer", "Autumn"] },
          { prompt: "Which season is the coldest in Australia?", options: ["Summer", "Spring", "Winter"] },
          { prompt: "After autumn comes ___", options: ["Summer", "Winter", "Spring"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More About Seasons",
        instruction: "Circle the correct answer about seasons.",
        questions: [
          { prompt: "After winter comes ___", options: ["Autumn", "Spring", "Summer"] },
          { prompt: "After summer comes ___", options: ["Autumn", "Winter", "Spring"] },
          { prompt: "After spring comes ___", options: ["Winter", "Autumn", "Summer"] },
          { prompt: "Leaves fall off trees in ___", options: ["Spring", "Autumn", "Summer"] },
        ],
      },
      {
        type: "sequence",
        title: "Seasons in Order",
        instruction: "Put the Australian seasons in order starting from the hottest. Write 1, 2, 3, 4.",
        items: [
          { label: "Winter" },
          { label: "Summer" },
          { label: "Autumn" },
          { label: "Spring" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Hot Season or Cold Season?",
        instruction: "Sort each thing into the season it goes with.",
        columns: ["Summer (Hot)", "Winter (Cold)"],
        items: [
          { label: "Swimming at the beach", icon: "sun" },
          { label: "Wearing a warm jacket", icon: "moon" },
          { label: "Eating ice cream outside", icon: "sun" },
          { label: "Sitting by the heater", icon: "moon" },
          { label: "Long sunny days", icon: "sun" },
          { label: "Short cold days", icon: "moon" },
        ],
      },
      {
        type: "circle-correct",
        title: "Time Challenge",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "How many days are in a week?", options: ["5", "7", "10"] },
          { prompt: "What meal do we eat in the evening?", options: ["Breakfast", "Lunch", "Dinner"] },
          { prompt: "If today is Tuesday, what day was yesterday?", options: ["Monday", "Wednesday", "Sunday"] },
          { prompt: "If today is Friday, what day is tomorrow?", options: ["Thursday", "Saturday", "Sunday"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Time Challenge (Part 2)",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "How many months are in a year?", options: ["7", "10", "12"] },
          { prompt: "If today is Sunday, what day is tomorrow?", options: ["Saturday", "Monday", "Tuesday"] },
          { prompt: "If today is Wednesday, what day was yesterday?", options: ["Thursday", "Tuesday", "Monday"] },
          { prompt: "Which comes first: afternoon or morning?", options: ["Afternoon", "Morning", "Evening"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Time Facts",
        instruction: "Draw a line to match each question to its answer.",
        leftItems: [
          { label: "Days in a week?", objects: [] },
          { label: "Meals in a day?", objects: [] },
          { label: "Seasons in a year?", objects: [] },
          { label: "The sun rises in the ___?", objects: [] },
        ],
        rightItems: [
          { label: "Morning", objects: [] },
          { label: "4", objects: [] },
          { label: "3", objects: [] },
          { label: "7", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match More Time Facts",
        instruction: "Draw a line to match each question to its answer.",
        leftItems: [
          { label: "Months in a year?", objects: [] },
          { label: "Days on the weekend?", objects: [] },
          { label: "The sun sets in the ___?", objects: [] },
          { label: "Weekdays in a week?", objects: [] },
        ],
        rightItems: [
          { label: "5", objects: [] },
          { label: "Evening", objects: [] },
          { label: "2", objects: [] },
          { label: "12", objects: [] },
        ],
      },
      // --- Improvement: Connect events TO times of day ---
      {
        type: "open-response",
        title: "Why Does It Happen Then?",
        instruction: "Write WHY each activity happens at that time of day.",
        prompts: [
          { text: "We eat breakfast in the morning because:", type: "lines", lines: 2 },
          { text: "We go to sleep at night because:", type: "lines", lines: 2 },
          { text: "We eat lunch in the middle of the day because:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "My Day",
        instruction: "Write or draw 3 things YOU do at each time of day.",
        prompts: [
          { text: "In the morning, I:", type: "lines", lines: 2 },
          { text: "In the afternoon, I:", type: "lines", lines: 2 },
          { text: "At night, I:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "My Favourite Time of Day",
        instruction: "Think about your favourite time of day and write about it.",
        prompts: [
          { text: "My favourite time of day is:", type: "lines", lines: 1 },
          { text: "I like this time because:", type: "lines", lines: 2 },
          { text: "Something I do at this time is:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "What Comes Next?",
        instruction: "Write what you think happens NEXT after each activity.",
        prompts: [
          { text: "After I wake up, the next thing I do is:", type: "lines", lines: 2 },
          { text: "After I eat dinner, the next thing I do is:", type: "lines", lines: 2 },
          { text: "After school finishes, the next thing I do is:", type: "lines", lines: 2 },
        ],
      },
      // --- Additional activities ---
      {
        type: "circle-correct",
        title: "Morning, Afternoon, or Night?",
        instruction: "Circle the best time of day for each activity.",
        questions: [
          { prompt: "Eating breakfast", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Watching the stars", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Eating lunch", options: ["Morning", "Afternoon", "Night"] },
          { prompt: "Going to bed", options: ["Morning", "Afternoon", "Night"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Morning or Evening?",
        instruction: "Sort each activity into the correct column.",
        columns: ["Morning", "Evening"],
        items: [
          { label: "Wake up" },
          { label: "Brush teeth before bed" },
          { label: "Eat breakfast" },
          { label: "Read a bedtime story" },
          { label: "Get dressed for the day" },
          { label: "Say goodnight" },
        ],
      },
      {
        type: "sequence",
        title: "Order the Daily Routine",
        instruction: "Write 1st, 2nd, 3rd, 4th, 5th to put these activities in the correct daily order.",
        items: [
          { label: "Eat lunch" },
          { label: "Wake up" },
          { label: "Go to sleep" },
          { label: "Eat dinner" },
          { label: "Eat breakfast" },
        ],
      },
      {
        type: "matching",
        title: "Match the Activity to the Time",
        instruction: "Draw a line to match each activity to the correct time of day.",
        left: ["Sunrise", "Lunchtime", "Dinnertime", "Bedtime"],
        right: ["Night", "Midday", "Evening", "Early morning"],
      },
      {
        type: "picture-graph",
        title: "When Do We Do Activities?",
        instruction: "This graph shows when children do their favourite activities. Answer the questions.",
        rows: [
          { label: "Morning", icon: "sun", count: 6 },
          { label: "Afternoon", icon: "star", count: 8 },
          { label: "Night", icon: "moon", count: 4 },
        ],
        questions: [
          "When do most children do their favourite activities?",
          "When do the fewest children do activities?",
          "How many children were asked altogether?",
        ],
      },
      {
        type: "tally-chart",
        title: "Record Your Daily Activities",
        instruction: "Put a tally mark next to each time of day when you do something active. Write the total at the end of the day.",
        categories: [
          { label: "Morning", icon: "sun", count: 3 },
          { label: "Afternoon", icon: "star", count: 5 },
          { label: "Night", icon: "moon", count: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Days of the Week",
        instruction: "Write the days of the week in order.",
        prompts: [
          { text: "1st: ___ 2nd: ___ 3rd: ___ 4th: ___", type: "lines", lines: 1 },
          { text: "5th: ___ 6th: ___ 7th: ___", type: "lines", lines: 1 },
          { text: "Which day comes after Wednesday? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Days of the Week Quiz",
        instruction: "Circle the correct answer for each question.",
        questions: [
          { prompt: "Which day comes after Monday?", options: ["Sunday", "Tuesday", "Wednesday"] },
          { prompt: "How many days are in one week?", options: ["5", "6", "7"] },
          { prompt: "Which days are the weekend?", options: ["Monday and Tuesday", "Saturday and Sunday", "Friday and Monday"] },
          { prompt: "Which day comes before Friday?", options: ["Thursday", "Saturday", "Wednesday"] },
        ],
      },
      {
        type: "open-response",
        title: "Months of the Year",
        instruction: "Write the answers to these questions about months.",
        prompts: [
          { text: "How many months are in a year? ___", type: "lines", lines: 1 },
          { text: "What month is your birthday? ___", type: "lines", lines: 1 },
          { text: "Write the first 3 months of the year:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Long Does It Take?",
        instruction: "Circle the activity that takes LONGER.",
        questions: [
          { prompt: "Which takes longer: blinking once or sleeping all night?", options: ["Blinking", "Sleeping"] },
          { prompt: "Which takes longer: eating breakfast or brushing teeth?", options: ["Eating breakfast", "Brushing teeth"] },
          { prompt: "Which takes longer: one school day or one week?", options: ["One school day", "One week"] },
        ],
      },
      {
        type: "matching",
        title: "Match Time Words",
        instruction: "Draw a line to match each time word to its meaning.",
        left: ["Yesterday", "Today", "Tomorrow", "Now"],
        right: ["The day after today", "The day before today", "The current day", "At this moment"],
      },
      {
        type: "open-response",
        title: "Yesterday, Today, Tomorrow",
        instruction: "Think about your week and fill in the blanks.",
        prompts: [
          { text: "Today is: _______________", type: "lines", lines: 1 },
          { text: "Yesterday was: _______________", type: "lines", lines: 1 },
          { text: "Tomorrow will be: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Short Time or Long Time?",
        instruction: "Sort each activity based on how long it takes.",
        columns: ["Short time (seconds/minutes)", "Long time (hours/days)"],
        items: [
          { label: "Clap your hands once" },
          { label: "Sleep through the night" },
          { label: "Sneeze" },
          { label: "Grow a plant from seed" },
          { label: "Eat breakfast" },
          { label: "Travel to another country" },
        ],
      },
      {
        type: "circle-correct",
        title: "Seasons Quiz",
        instruction: "Circle the correct answer for each question about seasons.",
        questions: [
          { prompt: "How many seasons are there in a year?", options: ["2", "4", "6"] },
          { prompt: "Which season is usually the hottest?", options: ["Winter", "Autumn", "Summer"] },
          { prompt: "Which season comes after winter?", options: ["Autumn", "Spring", "Summer"] },
          { prompt: "In which season do many trees lose their leaves?", options: ["Spring", "Autumn", "Summer"] },
        ],
      },
      {
        type: "open-response",
        title: "My Favourite Time of Day",
        instruction: "Write about your favourite time of day and what you do then.",
        prompts: [
          { text: "My favourite time of day is: _______________", type: "lines", lines: 1 },
          { text: "At this time I like to: _______________", type: "lines", lines: 2 },
          { text: "I like it because: _______________", type: "lines", lines: 2 },
        ],
      },
      {
        type: "number-bonds",
        title: "Time Number Bonds",
        instruction: "Part of a day is spent on two activities. Fill in the missing number of hours.",
        bonds: [
          { total: 8, partA: 5, partB: null },
          { total: 10, partA: null, partB: 4 },
          { total: 6, partA: 3, partB: null },
          { total: 9, partA: null, partB: 7 },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Time Spent",
        instruction: "Compare how long each activity takes. Circle the one that takes MORE time.",
        pairs: [
          { leftCount: 2, rightCount: 5, object: "clock", question: "2 hours or 5 hours — which is longer?" },
          { leftCount: 8, rightCount: 3, object: "sun", question: "8 hours or 3 hours — which is longer?" },
          { leftCount: 6, rightCount: 6, object: "moon", question: "Are 6 hours and 6 hours equal?" },
        ],
      },
      {
        type: "ten-frame",
        title: "Hours in a Day",
        instruction: "Use ten frames to represent hours. Count the filled circles and write the number of hours.",
        frames: [
          { filled: 8, total: 10 },
          { filled: 6, total: 10 },
          { filled: 10, total: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Plan Your Perfect Day",
        instruction: "Write what you would do at each time of day if you could choose anything.",
        prompts: [
          { text: "Morning: _______________", type: "lines", lines: 1 },
          { text: "Afternoon: _______________", type: "lines", lines: 1 },
          { text: "Evening: _______________", type: "lines", lines: 1 },
          { text: "Night: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Before or After?",
        instruction: "Circle the correct answer about the order of events.",
        questions: [
          { prompt: "Does breakfast come before or after waking up?", options: ["Before", "After"] },
          { prompt: "Does dinner come before or after lunch?", options: ["Before", "After"] },
          { prompt: "Does Monday come before or after Tuesday?", options: ["Before", "After"] },
          { prompt: "Does night come before or after morning?", options: ["Before", "After"] },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Help your child understand how daily events connect to times of day.",
        suggestions: [
          "Make a visual daily timetable together -- draw or stick pictures of activities in morning, afternoon, and night columns.",
          "Throughout the day, narrate the time: 'It is morning, so we eat breakfast. It is the afternoon, so we have a rest.'",
          "Before bed, ask your child to retell their day in order: 'First I woke up, then I had breakfast, then...'",
          "Play 'When do we...?' -- name an activity and your child says the time of day it happens.",
          "Use a calendar to practise days of the week. Ask 'What day is it today? What day was yesterday? What day is tomorrow?'",
          "Talk about seasons when the weather changes. Ask 'What season are we in? What do we wear in this season?'",
        ],
      },
    ],
  },

  // 10. Familiar shapes
  {
    slug: "familiar-shapes",
    title: "Familiar Shapes",
    strand: "Space",
    description: "Name, create and sort familiar shapes and give reasoning",
    lesson: {
      title: "Circles, Squares, Triangles and Rectangles",
      objective: "Name and describe familiar 2D shapes by their properties — the number of sides and corners.",
      materials: [
        "Cut-out shapes (draw and cut out a circle, square, triangle and rectangle — two of each)",
        "Objects from around the house with those shapes",
        "Paper and pencil for drawing",
      ],
      intro: {
        title: "Shape Hunt",
        script: "Shapes are everywhere — we just have to look! Can you find something in this room that's shaped like a circle? What about a square? Let's look around together. When you spot one, tell me: how do you KNOW it's that shape?",
        action: "Walk around together identifying shapes in everyday objects (clock = circle, book = rectangle, roof of a drawing = triangle, tile = square). For each one found, ask: 'How do you know it's a _____?' Begin guiding them toward counting sides and corners.",
      },
      mainActivity: {
        title: "Count the Sides and Corners",
        script: "Here's the secret to knowing any shape — count its sides and corners! A triangle has 3 sides and 3 corners. Let's count together: one side, two sides, three sides. One corner, two corners, three corners. Now YOU try with the square!",
        action: "Place each cut-out shape on the table. Your child counts sides and corners while you record: circle (0 sides, 0 corners), triangle (3, 3), square (4, 4), rectangle (4, 4). Discuss: 'A square and a rectangle both have 4 sides — so what's different?' (A square has equal sides; a rectangle has two longer and two shorter.)",
      },
      wrapUp: {
        title: "Draw a Shape Picture",
        script: "Here's a fun challenge: draw a picture using ONLY circles, squares, triangles and rectangles. It could be a house, a robot, a face — anything! As you draw each bit, tell me which shape you're using.",
        action: "Your child draws a picture built from the four shapes. Ask them to name each shape as they add it. Count how many of each shape are in their finished picture.",
      },
    },
    activities: [
      // --- EASY: Learning shape names ---
      {
        type: "shape-trace",
        title: "Trace a Circle",
        instruction: "Trace over the dotted circle. A circle is round with no sides!",
        shapes: [
          { name: "Circle", sides: 0 },
          { name: "Circle", sides: 0 },
          { name: "Circle", sides: 0 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace More Circles",
        instruction: "Keep practising! Trace these circles carefully.",
        shapes: [
          { name: "Circle", sides: 0 },
          { name: "Circle", sides: 0 },
          { name: "Circle", sides: 0 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace a Square",
        instruction: "Trace over the dotted square. A square has 4 equal sides!",
        shapes: [
          { name: "Square", sides: 4 },
          { name: "Square", sides: 4 },
          { name: "Square", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace More Squares",
        instruction: "Keep practising! Trace these squares carefully. Try to make each side straight.",
        shapes: [
          { name: "Square", sides: 4 },
          { name: "Square", sides: 4 },
          { name: "Square", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace a Triangle",
        instruction: "Trace over the dotted triangle. A triangle has 3 sides!",
        shapes: [
          { name: "Triangle", sides: 3 },
          { name: "Triangle", sides: 3 },
          { name: "Triangle", sides: 3 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace More Triangles",
        instruction: "Keep practising! Trace these triangles carefully. Count the 3 sides as you go.",
        shapes: [
          { name: "Triangle", sides: 3 },
          { name: "Triangle", sides: 3 },
          { name: "Triangle", sides: 3 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace a Rectangle",
        instruction: "Trace over the dotted rectangle. A rectangle has 4 sides — 2 long and 2 short!",
        shapes: [
          { name: "Rectangle", sides: 4 },
          { name: "Rectangle", sides: 4 },
          { name: "Rectangle", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace More Rectangles",
        instruction: "Keep practising! Trace these rectangles carefully. Notice the 2 long sides and 2 short sides.",
        shapes: [
          { name: "Rectangle", sides: 4 },
          { name: "Rectangle", sides: 4 },
          { name: "Rectangle", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace a Diamond",
        instruction: "Trace over the dotted diamond. A diamond has 4 sides that look like a tilted square!",
        shapes: [
          { name: "Diamond", sides: 4 },
          { name: "Diamond", sides: 4 },
          { name: "Diamond", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace More Diamonds",
        instruction: "Keep practising! Trace these diamonds carefully. A diamond is like a square standing on one corner.",
        shapes: [
          { name: "Diamond", sides: 4 },
          { name: "Diamond", sides: 4 },
          { name: "Diamond", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace All Five Shapes",
        instruction: "Trace over each dotted shape. Write its name below.",
        shapes: [
          { name: "Circle", sides: 0 },
          { name: "Square", sides: 4 },
          { name: "Triangle", sides: 3 },
          { name: "Rectangle", sides: 4 },
          { name: "Diamond", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Trace Each Shape Again",
        instruction: "Practise makes perfect! Trace each shape one more time.",
        shapes: [
          { name: "Triangle", sides: 3 },
          { name: "Diamond", sides: 4 },
          { name: "Circle", sides: 0 },
          { name: "Rectangle", sides: 4 },
          { name: "Square", sides: 4 },
        ],
      },
      {
        type: "matching",
        title: "Match Shape to Name",
        instruction: "Draw a line to match each shape to its name.",
        leftItems: [
          { label: "▲", objects: ["triangle"] },
          { label: "●", objects: ["circle"] },
          { label: "■", objects: ["square"] },
          { label: "◆", objects: ["diamond"] },
        ],
        rightItems: [
          { label: "Circle", objects: [] },
          { label: "Diamond", objects: [] },
          { label: "Triangle", objects: [] },
          { label: "Square", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match More Shapes to Names",
        instruction: "Draw a line to match each shape to its correct name.",
        leftItems: [
          { label: "Circle", objects: ["circle"] },
          { label: "Rectangle", objects: [] },
          { label: "Diamond", objects: ["diamond"] },
          { label: "Triangle", objects: ["triangle"] },
        ],
        rightItems: [
          { label: "▲ Triangle", objects: [] },
          { label: "● Circle", objects: [] },
          { label: "▬ Rectangle", objects: [] },
          { label: "◆ Diamond", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "Name That Shape!",
        instruction: "Circle the correct name for each shape.",
        questions: [
          { prompt: "This shape is a ___", promptIcon: "circle", options: ["Square", "Circle", "Triangle"] },
          { prompt: "This shape is a ___", promptIcon: "square", options: ["Rectangle", "Circle", "Square"] },
          { prompt: "This shape is a ___", promptIcon: "triangle", options: ["Triangle", "Diamond", "Square"] },
          { prompt: "This shape is a ___", promptIcon: "diamond", options: ["Circle", "Triangle", "Diamond"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Name That Shape Again!",
        instruction: "Keep practising! Circle the correct name for each shape.",
        questions: [
          { prompt: "What is the name of this shape?", promptIcon: "triangle", options: ["Circle", "Triangle", "Rectangle"] },
          { prompt: "What is the name of this shape?", promptIcon: "circle", options: ["Diamond", "Square", "Circle"] },
          { prompt: "What is the name of this shape?", promptIcon: "diamond", options: ["Diamond", "Triangle", "Circle"] },
          { prompt: "What is the name of this shape?", promptIcon: "square", options: ["Square", "Triangle", "Diamond"] },
        ],
      },

      // --- BRIDGE: Introducing sides ---
      {
        type: "circle-correct",
        title: "Does It Have Sides?",
        instruction: "Sides are the straight lines that make a shape. Does this shape have straight sides?",
        questions: [
          { prompt: "Circle", promptIcon: "circle", options: ["Yes, it has sides", "No sides (it is round)"] },
          { prompt: "Square", promptIcon: "square", options: ["Yes, it has sides", "No sides (it is round)"] },
          { prompt: "Triangle", promptIcon: "triangle", options: ["Yes, it has sides", "No sides (it is round)"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Sides or No Sides?",
        instruction: "Remember, sides are the straight lines of a shape. Does this shape have straight sides?",
        questions: [
          { prompt: "Diamond", promptIcon: "diamond", options: ["Yes, it has sides", "No sides (it is round)"] },
          { prompt: "Rectangle", options: ["Yes, it has sides", "No sides (it is round)"] },
          { prompt: "Circle", promptIcon: "circle", options: ["Yes, it has sides", "No sides (it is round)"] },
          { prompt: "Triangle", promptIcon: "triangle", options: ["Yes, it has sides", "No sides (it is round)"] },
        ],
      },

      // --- MEDIUM: Counting sides and corners ---
      {
        type: "circle-correct",
        title: "Count the Sides",
        instruction: "How many sides does each shape have?",
        questions: [
          { prompt: "Triangle", promptIcon: "triangle", options: ["2", "3", "4"] },
          { prompt: "Square", promptIcon: "square", options: ["3", "4", "5"] },
          { prompt: "Circle", promptIcon: "circle", options: ["0", "1", "2"] },
          { prompt: "Rectangle", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Count the Sides Again",
        instruction: "How many sides does each shape have? Count carefully!",
        questions: [
          { prompt: "Diamond", promptIcon: "diamond", options: ["3", "4", "5"] },
          { prompt: "Circle", promptIcon: "circle", options: ["0", "2", "4"] },
          { prompt: "Triangle", promptIcon: "triangle", options: ["2", "3", "4"] },
          { prompt: "Square", promptIcon: "square", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Count the Corners",
        instruction: "How many corners (points) does each shape have?",
        questions: [
          { prompt: "Triangle", promptIcon: "triangle", options: ["2", "3", "4"] },
          { prompt: "Square", promptIcon: "square", options: ["3", "4", "5"] },
          { prompt: "Circle", promptIcon: "circle", options: ["0", "1", "2"] },
          { prompt: "Diamond", promptIcon: "diamond", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Count the Corners Again",
        instruction: "Corners are the pointy parts where two sides meet. How many corners?",
        questions: [
          { prompt: "Rectangle", options: ["3", "4", "5"] },
          { prompt: "Circle", promptIcon: "circle", options: ["0", "1", "3"] },
          { prompt: "Diamond", promptIcon: "diamond", options: ["2", "3", "4"] },
          { prompt: "Triangle", promptIcon: "triangle", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "matching",
        title: "Match Shape to Number of Sides",
        instruction: "Draw a line to match each shape to how many sides it has.",
        leftItems: [
          { label: "Circle", objects: ["circle"] },
          { label: "Triangle", objects: ["triangle"] },
          { label: "Square", objects: ["square"] },
        ],
        rightItems: [
          { label: "3 sides", objects: [] },
          { label: "4 sides", objects: [] },
          { label: "0 sides", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match Shape to Number of Corners",
        instruction: "Draw a line to match each shape to how many corners it has.",
        leftItems: [
          { label: "Star", objects: ["star"] },
          { label: "Circle", objects: ["circle"] },
          { label: "Triangle", objects: ["triangle"] },
          { label: "Diamond", objects: ["diamond"] },
        ],
        rightItems: [
          { label: "0 corners", objects: [] },
          { label: "3 corners", objects: [] },
          { label: "4 corners", objects: [] },
          { label: "5 corners", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False: Shape Facts",
        instruction: "Circle True or False.",
        questions: [
          { prompt: "A triangle has 3 sides.", options: ["True", "False"] },
          { prompt: "A circle has 4 corners.", options: ["True", "False"] },
          { prompt: "A square has 4 equal sides.", options: ["True", "False"] },
          { prompt: "A rectangle has 3 sides.", options: ["True", "False"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More True or False: Shape Facts",
        instruction: "Circle True or False.",
        questions: [
          { prompt: "A diamond has 4 sides.", options: ["True", "False"] },
          { prompt: "A circle has 0 corners.", options: ["True", "False"] },
          { prompt: "A triangle has 4 corners.", options: ["True", "False"] },
          { prompt: "A rectangle has 4 sides.", options: ["True", "False"] },
          { prompt: "A square is round.", options: ["True", "False"] },
        ],
      },

      // --- MEDIUM: Sorting shapes ---
      {
        type: "sorting",
        title: "Sort: Has Straight Sides or Is Round",
        instruction: "Sort each shape into the correct column.",
        columns: ["Straight Sides", "Round (No Sides)"],
        items: [
          { label: "Circle", icon: "circle" },
          { label: "Triangle", icon: "triangle" },
          { label: "Square", icon: "square" },
          { label: "Rectangle" },
          { label: "Diamond", icon: "diamond" },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Number of Sides",
        instruction: "Sort each shape by how many sides it has.",
        columns: ["0 Sides", "3 Sides", "4 Sides"],
        items: [
          { label: "Circle", icon: "circle" },
          { label: "Triangle", icon: "triangle" },
          { label: "Square", icon: "square" },
          { label: "Rectangle" },
          { label: "Diamond", icon: "diamond" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: 3 Corners or 4 Corners?",
        instruction: "Sort each shape by how many corners it has.",
        columns: ["0 Corners", "3 Corners", "4 Corners"],
        items: [
          { label: "Triangle", icon: "triangle" },
          { label: "Square", icon: "square" },
          { label: "Circle", icon: "circle" },
          { label: "Diamond", icon: "diamond" },
          { label: "Rectangle" },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Shape Am I?",
        instruction: "Read the clues. Circle the correct shape.",
        questions: [
          { prompt: "I have 3 sides and 3 corners. I am a ___", options: ["Square", "Triangle", "Circle"] },
          { prompt: "I am round with no sides. I am a ___", options: ["Diamond", "Circle", "Rectangle"] },
          { prompt: "I have 4 equal sides and 4 corners. I am a ___", options: ["Triangle", "Rectangle", "Square"] },
          { prompt: "I have 4 sides — 2 long and 2 short. I am a ___", options: ["Square", "Rectangle", "Diamond"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Shape Clues",
        instruction: "Read the clues. Circle the correct shape.",
        questions: [
          { prompt: "I have 4 sides and look like a tilted square. I am a ___", options: ["Circle", "Diamond", "Triangle"] },
          { prompt: "I have no corners and no sides. I am a ___", options: ["Square", "Triangle", "Circle"] },
          { prompt: "I have 4 corners and all my sides are the same length. I am a ___", options: ["Rectangle", "Square", "Triangle"] },
          { prompt: "I have 3 corners. I am a ___", options: ["Diamond", "Circle", "Triangle"] },
        ],
      },

      // --- HARDER: Shapes in real life ---
      {
        type: "matching",
        title: "Shapes in Real Life",
        instruction: "Draw a line to match each real-life thing to its shape.",
        leftItems: [
          { label: "Clock face", objects: [] },
          { label: "Window", objects: [] },
          { label: "Slice of pizza", objects: [] },
          { label: "Kite", objects: [] },
        ],
        rightItems: [
          { label: "Triangle", objects: ["triangle"] },
          { label: "Circle", objects: ["circle"] },
          { label: "Diamond", objects: ["diamond"] },
          { label: "Rectangle", objects: ["square"] },
        ],
      },
      {
        type: "matching",
        title: "More Real-Life Shapes",
        instruction: "Draw a line to match each real-life thing to its shape.",
        leftItems: [
          { label: "Plate", objects: [] },
          { label: "Envelope", objects: [] },
          { label: "Road sign (Give Way)", objects: [] },
          { label: "Tile on the floor", objects: [] },
        ],
        rightItems: [
          { label: "Square", objects: ["square"] },
          { label: "Circle", objects: ["circle"] },
          { label: "Rectangle", objects: [] },
          { label: "Triangle", objects: ["triangle"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Shape Is It?",
        instruction: "Circle the shape that matches each thing in real life.",
        questions: [
          { prompt: "A wheel is shaped like a ___", options: ["Square", "Circle", "Triangle"] },
          { prompt: "A door is shaped like a ___", options: ["Triangle", "Circle", "Rectangle"] },
          { prompt: "A sandwich cut in half diagonally is a ___", options: ["Circle", "Triangle", "Square"] },
          { prompt: "A dice face is shaped like a ___", options: ["Square", "Circle", "Triangle"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Real-Life Shape Questions",
        instruction: "Circle the shape that matches each thing in real life.",
        questions: [
          { prompt: "A coin is shaped like a ___", options: ["Triangle", "Circle", "Square"] },
          { prompt: "A picture frame is shaped like a ___", options: ["Circle", "Triangle", "Rectangle"] },
          { prompt: "A slice of watermelon is shaped like a ___", options: ["Triangle", "Square", "Circle"] },
          { prompt: "A window pane is shaped like a ___", options: ["Circle", "Square", "Triangle"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort Real Things by Shape",
        instruction: "Sort each real-life thing into the correct shape column.",
        columns: ["Circle", "Square/Rectangle", "Triangle"],
        items: [
          { label: "Coin" },
          { label: "Book" },
          { label: "Roof of a house" },
          { label: "Pizza" },
          { label: "Television" },
          { label: "Yield sign" },
        ],
      },
      {
        type: "sorting",
        title: "Sort More Real Things by Shape",
        instruction: "Sort each real-life thing into the correct shape column.",
        columns: ["Circle", "Square/Rectangle", "Triangle"],
        items: [
          { label: "Clock face" },
          { label: "Napkin" },
          { label: "Sandwich cut diagonally" },
          { label: "Frisbee" },
          { label: "Tablet screen" },
          { label: "Coat hanger" },
        ],
      },

      // --- HARDER: Comparing shapes ---
      {
        type: "circle-correct",
        title: "Same or Different?",
        instruction: "Are these two shapes the same or different?",
        questions: [
          { prompt: "A square and a rectangle — are they the same shape?", options: ["Yes, the same", "No, different"] },
          { prompt: "A big circle and a small circle — are they the same shape?", options: ["Yes, the same shape", "No, different shapes"] },
          { prompt: "A triangle and a diamond — are they the same?", options: ["Yes, the same", "No, different"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Same Shape or Different Shape?",
        instruction: "Think about the shape, not the size or colour. Are they the same or different?",
        questions: [
          { prompt: "A big square and a small square — same shape?", options: ["Yes, the same shape", "No, different shapes"] },
          { prompt: "A tall triangle and a short triangle — same shape?", options: ["Yes, the same shape", "No, different shapes"] },
          { prompt: "A circle and a diamond — same shape?", options: ["Yes, the same", "No, different"] },
          { prompt: "A diamond and a square — same shape?", options: ["Yes, the same", "No, different"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Is Different?",
        instruction: "Circle what is DIFFERENT about these shapes.",
        questions: [
          { prompt: "A square and a rectangle both have 4 sides. What is different?", options: ["Number of corners", "The side lengths", "They are the same"] },
          { prompt: "A big triangle and a small triangle. What is different?", options: ["Number of sides", "The size", "The shape name"] },
          { prompt: "A circle and a square. What is different?", options: ["One has sides, one doesn't", "They are the same", "Both have 4 sides"] },
        ],
      },
      {
        type: "circle-correct",
        title: "How Are They Different?",
        instruction: "Circle what is DIFFERENT about these shapes.",
        questions: [
          { prompt: "A triangle has 3 sides. A square has 4 sides. What is different?", options: ["The number of sides", "The colour", "Nothing"] },
          { prompt: "A circle and a triangle. What is different?", options: ["Both are round", "One is round, one has sides", "They are the same"] },
          { prompt: "A rectangle and a diamond both have 4 sides. What is different?", options: ["Number of sides", "The shape of the sides and corners", "Nothing is different"] },
        ],
      },

      // --- CHALLENGE: Creating and describing shapes ---
      {
        type: "shape-trace",
        title: "Draw Your Own Shapes",
        instruction: "In each box, draw the shape named. Make them big and clear!",
        shapes: [
          { name: "Circle", sides: 0 },
          { name: "Triangle", sides: 3 },
          { name: "Square", sides: 4 },
          { name: "Rectangle", sides: 4 },
          { name: "Diamond", sides: 4 },
        ],
      },
      {
        type: "shape-trace",
        title: "Draw These Shapes from Memory",
        instruction: "Without looking at examples, draw each shape from memory. Think about the sides and corners!",
        shapes: [
          { name: "Square", sides: 4 },
          { name: "Circle", sides: 0 },
          { name: "Diamond", sides: 4 },
          { name: "Triangle", sides: 3 },
          { name: "Rectangle", sides: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Shape Riddles",
        instruction: "Solve each shape riddle. Circle the answer.",
        questions: [
          { prompt: "I have fewer sides than a square but more than a circle. What am I?", options: ["Triangle", "Rectangle", "Diamond"] },
          { prompt: "I look like a square but I'm tilted on my side. What am I?", options: ["Triangle", "Circle", "Diamond"] },
          { prompt: "I have the same number of sides as a square, but my sides are not all equal. What am I?", options: ["Rectangle", "Triangle", "Circle"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Shape Riddles",
        instruction: "Solve each shape riddle. Circle the answer.",
        questions: [
          { prompt: "I have no corners and I can roll. What am I?", options: ["Square", "Triangle", "Circle"] },
          { prompt: "I have 4 equal sides but I am not tilted. What am I?", options: ["Diamond", "Square", "Triangle"] },
          { prompt: "I have the fewest sides of any shape with straight edges. What am I?", options: ["Triangle", "Square", "Rectangle"] },
          { prompt: "I have 4 corners and 2 of my sides are longer than the other 2. What am I?", options: ["Square", "Circle", "Rectangle"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Shape Challenge",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "How many triangles can you make from a square cut diagonally?", options: ["1", "2", "4"] },
          { prompt: "If you cut a rectangle in half, what shapes could you get?", options: ["Two squares", "Two rectangles", "Both are possible"] },
          { prompt: "Which shape can roll?", options: ["Square", "Triangle", "Circle"] },
          { prompt: "Which shape is the strongest for building?", options: ["Circle", "Triangle", "Diamond"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Shape Challenges",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "Which shape has the most corners: triangle, square, or circle?", options: ["Triangle", "Square", "Circle"] },
          { prompt: "If you fold a square in half, what shape do you get?", options: ["Triangle", "Rectangle", "Circle"] },
          { prompt: "Which shape has NO straight lines?", options: ["Square", "Diamond", "Circle"] },
          { prompt: "A rectangle and a square both have 4 sides. What makes a square special?", options: ["All sides equal", "It is bigger", "It has more corners"] },
        ],
      },
      {
        type: "matching",
        title: "Shape Properties Match",
        instruction: "Draw a line to match each description to the correct shape.",
        leftItems: [
          { label: "No sides, no corners", objects: [] },
          { label: "3 sides, 3 corners", objects: [] },
          { label: "4 equal sides, 4 corners", objects: [] },
          { label: "4 sides (2 long, 2 short)", objects: [] },
        ],
        rightItems: [
          { label: "Rectangle", objects: [] },
          { label: "Circle", objects: [] },
          { label: "Square", objects: [] },
          { label: "Triangle", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "More Shape Properties Match",
        instruction: "Draw a line to match each description to the correct shape.",
        leftItems: [
          { label: "4 sides, looks like a tilted square", objects: [] },
          { label: "Round, can roll", objects: [] },
          { label: "3 straight sides", objects: [] },
          { label: "4 sides, all the same length, sits flat", objects: [] },
        ],
        rightItems: [
          { label: "Square", objects: ["square"] },
          { label: "Diamond", objects: ["diamond"] },
          { label: "Circle", objects: ["circle"] },
          { label: "Triangle", objects: ["triangle"] },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Shapes Can You See?",
        instruction: "A house drawing has a square body, a triangle roof, a rectangle door, and 2 circle windows. How many of each?",
        questions: [
          { prompt: "How many squares?", options: ["1", "2", "3"] },
          { prompt: "How many triangles?", options: ["0", "1", "2"] },
          { prompt: "How many rectangles?", options: ["1", "2", "3"] },
          { prompt: "How many circles?", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Count the Shapes in the Picture",
        instruction: "A robot is made from: a square head, a rectangle body, 2 rectangle arms, 2 rectangle legs, and 2 circle eyes. How many of each?",
        questions: [
          { prompt: "How many squares?", options: ["1", "2", "3"] },
          { prompt: "How many rectangles?", options: ["3", "5", "6"] },
          { prompt: "How many circles?", options: ["1", "2", "4"] },
          { prompt: "How many shapes in total?", options: ["6", "8", "10"] },
        ],
      },

      // --- BRIDGE: Flat vs solid shapes ---
      {
        type: "circle-correct",
        title: "Flat or Solid?",
        instruction: "Flat shapes are like drawings on paper. Solid shapes are like real things you can hold. Circle the answer.",
        questions: [
          { prompt: "A drawing of a circle is ___", options: ["Flat", "Solid"] },
          { prompt: "A ball you can hold is ___", options: ["Flat", "Solid"] },
          { prompt: "A square on paper is ___", options: ["Flat", "Solid"] },
          { prompt: "A box you can pick up is ___", options: ["Flat", "Solid"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Flat or Solid?",
        instruction: "Is it flat (like a drawing) or solid (like something you can pick up and hold)?",
        questions: [
          { prompt: "A triangle drawn on paper is ___", options: ["Flat", "Solid"] },
          { prompt: "A tin can from the cupboard is ___", options: ["Flat", "Solid"] },
          { prompt: "A rectangle on a poster is ___", options: ["Flat", "Solid"] },
          { prompt: "A party hat you can wear is ___", options: ["Flat", "Solid"] },
        ],
      },

      // --- HARDER: 3D shapes ---
      {
        type: "circle-correct",
        title: "3D Shapes: Sphere, Cube, Cone, Cylinder",
        instruction: "3D shapes are solid — you can hold them! Circle the correct name.",
        questions: [
          { prompt: "A ball is shaped like a ___", promptIcon: "sphere", options: ["Sphere", "Cube", "Cylinder"] },
          { prompt: "A dice/box is shaped like a ___", promptIcon: "cube", options: ["Sphere", "Cube", "Cone"] },
          { prompt: "An ice cream cone is shaped like a ___", promptIcon: "cone", options: ["Cylinder", "Sphere", "Cone"] },
          { prompt: "A tin of beans is shaped like a ___", promptIcon: "cylinder", options: ["Cube", "Cylinder", "Cone"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Name That 3D Shape!",
        instruction: "Circle the correct name for each 3D shape.",
        questions: [
          { prompt: "This shape is round like a ball.", promptIcon: "sphere", options: ["Cone", "Sphere", "Cylinder"] },
          { prompt: "This shape has flat square faces.", promptIcon: "cube", options: ["Cube", "Sphere", "Cone"] },
          { prompt: "This shape has a point at the top.", promptIcon: "cone", options: ["Cube", "Cylinder", "Cone"] },
          { prompt: "This shape is like a can.", promptIcon: "cylinder", options: ["Sphere", "Cylinder", "Cube"] },
        ],
      },
      {
        type: "matching",
        title: "Match 3D Shapes to Real Things",
        instruction: "Draw a line to match each 3D shape to something in real life.",
        leftItems: [
          { label: "Sphere (ball shape)", objects: ["sphere"] },
          { label: "Cube (box shape)", objects: ["cube"] },
          { label: "Cylinder (can shape)", objects: ["cylinder"] },
          { label: "Cone (pointed shape)", objects: ["cone"] },
        ],
        rightItems: [
          { label: "Party hat", objects: [] },
          { label: "Tennis ball", objects: [] },
          { label: "Tissue box", objects: [] },
          { label: "Drink bottle", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match More 3D Shapes to Real Things",
        instruction: "Draw a line to match each 3D shape to something in real life.",
        leftItems: [
          { label: "Sphere", objects: ["sphere"] },
          { label: "Cube", objects: ["cube"] },
          { label: "Cylinder", objects: ["cylinder"] },
          { label: "Cone", objects: ["cone"] },
        ],
        rightItems: [
          { label: "Orange (fruit)", objects: [] },
          { label: "Ice cream cone", objects: [] },
          { label: "Building block", objects: [] },
          { label: "Toilet paper roll", objects: [] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Flat (2D) or Solid (3D)?",
        instruction: "Sort each shape. Is it flat (you can draw it) or solid (you can hold it)?",
        columns: ["Flat (2D)", "Solid (3D)"],
        items: [
          { label: "Circle", icon: "circle" },
          { label: "Sphere", icon: "sphere" },
          { label: "Square", icon: "square" },
          { label: "Cube", icon: "cube" },
          { label: "Triangle", icon: "triangle" },
          { label: "Cone", icon: "cone" },
          { label: "Rectangle" },
          { label: "Cylinder", icon: "cylinder" },
        ],
      },
      {
        type: "sorting",
        title: "Sort More Shapes: Flat or Solid?",
        instruction: "Sort each shape. Is it flat (2D) or solid (3D)?",
        columns: ["Flat (2D)", "Solid (3D)"],
        items: [
          { label: "Diamond", icon: "diamond" },
          { label: "Cone", icon: "cone" },
          { label: "Triangle", icon: "triangle" },
          { label: "Sphere", icon: "sphere" },
          { label: "Rectangle" },
          { label: "Cube", icon: "cube" },
        ],
      },
      {
        type: "circle-correct",
        title: "3D Shape Properties",
        instruction: "Circle the correct answer about 3D shapes.",
        questions: [
          { prompt: "Which 3D shape can roll?", optionIcons: ["cube", "sphere"], options: ["Cube", "Sphere", "Both"] },
          { prompt: "Which 3D shape has flat faces that are all squares?", optionIcons: ["sphere", "cube", "cone"], options: ["Sphere", "Cube", "Cone"] },
          { prompt: "Which 3D shape has a point at the top?", optionIcons: ["cylinder", "sphere", "cone"], options: ["Cylinder", "Sphere", "Cone"] },
          { prompt: "Which 3D shape has two flat circle faces?", optionIcons: ["cylinder", "cube", "cone"], options: ["Cylinder", "Cube", "Cone"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More 3D Shape Properties",
        instruction: "Circle the correct answer about 3D shapes.",
        questions: [
          { prompt: "Which 3D shape cannot roll at all?", optionIcons: ["cube", "sphere", "cylinder"], options: ["Cube", "Sphere", "Cylinder"] },
          { prompt: "Which 3D shape looks the same from every direction?", optionIcons: ["cube", "cone", "sphere"], options: ["Cube", "Cone", "Sphere"] },
          { prompt: "Which 3D shape has both a flat face and a point?", optionIcons: ["sphere", "cone", "cube"], options: ["Sphere", "Cone", "Cube"] },
          { prompt: "Which 3D shape can slide but not roll?", optionIcons: ["sphere", "cube", "cylinder"], options: ["Sphere", "Cube", "Cylinder"] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False: 3D Shape Facts",
        instruction: "Circle True or False.",
        questions: [
          { prompt: "A sphere has no flat faces.", options: ["True", "False"] },
          { prompt: "A cube has 6 flat faces.", options: ["True", "False"] },
          { prompt: "A cone can roll.", options: ["True", "False"] },
          { prompt: "A cylinder has 2 flat circle faces.", options: ["True", "False"] },
        ],
      },

      // --- Improvement: Give reasoning ---
      {
        type: "open-response",
        title: "Explain WHY It's That Shape",
        instruction: "Name the shape and explain HOW you know. For example: 'It is a triangle because it has 3 sides and 3 corners.'",
        prompts: [
          { text: "A stop sign is an octagon because:", type: "lines", lines: 2 },
          { text: "A clock face is a circle because:", type: "lines", lines: 2 },
          { text: "A slice of pizza is a triangle because:", type: "lines", lines: 2 },
          { text: "A book cover is a rectangle because:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Draw and Describe",
        instruction: "Draw each shape. Then write how many sides and corners it has.",
        prompts: [
          { text: "Draw a triangle. It has ___ sides and ___ corners.", type: "box" },
          { text: "Draw a rectangle. It has ___ sides and ___ corners.", type: "box" },
          { text: "Draw a shape with NO sides and NO corners. It is called a ___.", type: "box" },
        ],
      },
      {
        type: "open-response",
        title: "Describe the Shape",
        instruction: "Write about each shape. How many sides and corners does it have? What does it look like?",
        prompts: [
          { text: "A square has ___ sides and ___ corners. It looks like:", type: "lines", lines: 2 },
          { text: "A diamond has ___ sides and ___ corners. It looks like:", type: "lines", lines: 2 },
          { text: "What is the difference between a square and a rectangle?", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Shape Hunt Journal",
        instruction: "Think about shapes you see every day. Write or draw your answers.",
        prompts: [
          { text: "Name 3 things at home that are shaped like a circle:", type: "lines", lines: 2 },
          { text: "Name 3 things at home that are shaped like a rectangle:", type: "lines", lines: 2 },
          { text: "Name something you have seen that is shaped like a sphere (3D ball shape):", type: "lines", lines: 2 },
        ],
      },

      // --- Additional activities ---
      {
        type: "shape-trace",
        title: "Trace the Basic Shapes",
        instruction: "Trace over each shape carefully. Say the name of each shape as you trace it.",
        shapes: [
          { name: "Square", sides: 4 },
          { name: "Triangle", sides: 3 },
          { name: "Rectangle", sides: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many Sides?",
        instruction: "Circle the correct number of sides for each shape.",
        questions: [
          { prompt: "A triangle has ___ sides.", options: ["2", "3", "4"] },
          { prompt: "A square has ___ sides.", options: ["3", "4", "5"] },
          { prompt: "A circle has ___ sides.", options: ["0", "1", "2"] },
          { prompt: "A rectangle has ___ sides.", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Curved or Straight Sides?",
        instruction: "Sort these shapes into the correct column.",
        columns: ["Curved sides", "Straight sides"],
        items: [
          { label: "Circle", icon: "circle" },
          { label: "Triangle", icon: "triangle" },
          { label: "Square", icon: "square" },
          { label: "Diamond", icon: "diamond" },
          { label: "Star", icon: "star" },
        ],
      },
      {
        type: "matching",
        title: "Match the Shape to Its Description",
        instruction: "Draw a line from each shape name to its description.",
        left: ["Circle", "Triangle", "Square", "Rectangle"],
        right: ["4 equal sides", "0 sides, perfectly round", "2 long and 2 short sides", "3 sides and 3 corners"],
      },
      {
        type: "circle-correct",
        title: "Shape Riddles",
        instruction: "Read each riddle and circle the correct shape name.",
        questions: [
          { prompt: "I have 3 sides and 3 corners. What am I?", options: ["Square", "Triangle", "Circle"] },
          { prompt: "I have 4 equal sides and 4 corners. What am I?", options: ["Rectangle", "Triangle", "Square"] },
          { prompt: "I have no corners and no sides. What am I?", options: ["Diamond", "Circle", "Hexagon"] },
          { prompt: "I have 4 sides but they are not all equal. What am I?", options: ["Square", "Circle", "Rectangle"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Shapes",
        instruction: "Count the shapes in each row. Write the total.",
        rows: [
          { object: "circle", count: 5 },
          { object: "triangle", count: 4 },
          { object: "square", count: 6 },
          { object: "diamond", count: 3 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: 2D or 3D Shapes?",
        instruction: "Sort these shapes into flat (2D) or solid (3D).",
        columns: ["Flat (2D)", "Solid (3D)"],
        items: [
          { label: "Circle" },
          { label: "Sphere", icon: "sphere" },
          { label: "Square" },
          { label: "Cube", icon: "cube" },
          { label: "Triangle" },
          { label: "Cone", icon: "cone" },
        ],
      },
      {
        type: "circle-correct",
        title: "3D Shape Names",
        instruction: "Circle the correct name for each 3D shape.",
        questions: [
          { prompt: "A ball is shaped like a...", options: ["cube", "sphere", "cylinder"] },
          { prompt: "A dice is shaped like a...", options: ["cone", "sphere", "cube"] },
          { prompt: "A tin can is shaped like a...", options: ["cylinder", "cube", "sphere"] },
          { prompt: "An ice cream cone is shaped like a...", options: ["sphere", "cylinder", "cone"] },
        ],
      },
      {
        type: "open-response",
        title: "Shapes in My World",
        instruction: "Look around you and find objects that match each shape. Write them.",
        prompts: [
          { text: "Something shaped like a circle: _______________", type: "lines", lines: 1 },
          { text: "Something shaped like a square: _______________", type: "lines", lines: 1 },
          { text: "Something shaped like a triangle: _______________", type: "lines", lines: 1 },
          { text: "Something shaped like a rectangle: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "pattern",
        title: "Shape Pattern — Continue It",
        instruction: "Look at the shape pattern. Draw what comes next in the empty boxes.",
        rows: [
          { sequence: ["circle", "triangle", "circle", "triangle", null, null], unitLength: 2 },
          { sequence: ["square", "diamond", "square", "diamond", null, null], unitLength: 2 },
        ],
      },
      {
        type: "matching",
        title: "Match 3D Shapes to Real Objects",
        instruction: "Draw a line to match each 3D shape to a real-world object.",
        left: ["Sphere", "Cube", "Cylinder", "Cone"],
        right: ["Dice", "Party hat", "Tennis ball", "Tin of soup"],
      },
      {
        type: "open-response",
        title: "Design a Shape Picture",
        instruction: "Use circles, squares, triangles, and rectangles to draw a picture. Label each shape you used.",
        prompts: [
          { text: "Draw your picture using shapes:", type: "box" },
          { text: "I used these shapes: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Corners and Sides Challenge",
        instruction: "Answer these questions about shape properties.",
        questions: [
          { prompt: "Which shape has the most sides of these: circle, triangle, square?", options: ["Circle", "Triangle", "Square"] },
          { prompt: "A shape with 3 corners also has how many sides?", options: ["2", "3", "4"] },
          { prompt: "Which TWO shapes both have 4 sides?", options: ["Triangle and circle", "Square and rectangle", "Circle and triangle"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Count Shapes in the Room",
        instruction: "Look around the room. Count each type of shape and write the total.",
        categories: [
          { label: "Circles", icon: "circle", count: 4 },
          { label: "Squares", icon: "square", count: 6 },
          { label: "Triangles", icon: "triangle", count: 3 },
          { label: "Rectangles", icon: "diamond", count: 5 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Has Corners or No Corners?",
        instruction: "Sort each shape into the correct column.",
        columns: ["Has corners", "No corners"],
        items: [
          { label: "Triangle", icon: "triangle" },
          { label: "Circle", icon: "circle" },
          { label: "Square", icon: "square" },
          { label: "Diamond", icon: "diamond" },
          { label: "Star", icon: "star" },
        ],
      },
      {
        type: "number-bonds",
        title: "Shapes Number Bonds",
        instruction: "Shapes were sorted into two groups. Fill in the missing number.",
        bonds: [
          { total: 10, partA: 6, partB: null },
          { total: 8, partA: null, partB: 3 },
          { total: 7, partA: 4, partB: null },
          { total: 9, partA: null, partB: 5 },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Shape Counts",
        instruction: "Look at each pair of shape groups. Circle the group with MORE shapes.",
        pairs: [
          { leftCount: 4, rightCount: 7, object: "circle", question: "Which group has more circles?" },
          { leftCount: 6, rightCount: 3, object: "triangle", question: "Which group has more triangles?" },
          { leftCount: 5, rightCount: 5, object: "square", question: "Are these groups equal?" },
        ],
      },
      {
        type: "sequence",
        title: "Order Shapes by Number of Sides",
        instruction: "Write 1st, 2nd, 3rd, 4th to order these shapes from fewest sides to most sides.",
        items: [
          { label: "Square (4 sides)" },
          { label: "Circle (0 sides)" },
          { label: "Hexagon (6 sides)" },
          { label: "Triangle (3 sides)" },
        ],
      },
      {
        type: "open-response",
        title: "Shapes in Nature",
        instruction: "Nature is full of shapes! Think and write your answers.",
        prompts: [
          { text: "A shape I see in nature that is like a circle: _______________", type: "lines", lines: 1 },
          { text: "A shape I see in nature that is like a triangle: _______________", type: "lines", lines: 1 },
          { text: "A shape that is hard to find in nature: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "picture-graph",
        title: "Shape Tally Results",
        instruction: "After a shape hunt, children recorded their results. Answer the questions.",
        rows: [
          { label: "Circles found", icon: "circle", count: 7 },
          { label: "Squares found", icon: "square", count: 5 },
          { label: "Triangles found", icon: "triangle", count: 3 },
          { label: "Rectangles found", icon: "diamond", count: 8 },
        ],
        questions: [
          "Which shape was found the most?",
          "Which shape was found the least?",
          "How many shapes were found altogether?",
        ],
      },
      {
        type: "ten-frame",
        title: "Count Shapes on a Page",
        instruction: "These ten frames show how many of each shape appeared on a page. Count and write the total.",
        frames: [
          { filled: 6, total: 10 },
          { filled: 4, total: 10 },
          { filled: 9, total: 10 },
        ],
      },
      {
        type: "open-response",
        title: "Describe a Shape to a Friend",
        instruction: "Describe a shape using only clues about its sides and corners. Do not say its name!",
        prompts: [
          { text: "My shape has ___ sides and ___ corners.", type: "lines", lines: 1 },
          { text: "Clue 1: _______________", type: "lines", lines: 1 },
          { text: "Clue 2: _______________", type: "lines", lines: 1 },
          { text: "The shape is: _______________", type: "lines", lines: 1 },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Shapes are everywhere! Explore them with your hands and eyes.",
        suggestions: [
          "Go on a shape hunt — find circles, squares, triangles, and rectangles around the house. Take photos or draw what you find!",
          "Find 3D shapes in the kitchen: a ball (sphere), a cereal box (rectangular prism), a can (cylinder), an ice cream cone (cone).",
          "Make shapes with playdough, sticks, or pipe cleaners. How many sides? How many corners?",
          "Play 'Guess My Shape' — describe a shape using sides and corners, and your child guesses what it is.",
        ],
      },
    ],
  },

  // 11. Position and location
  {
    slug: "position-location",
    title: "Position & Location",
    strand: "Space",
    description: "Describe the position and location of objects in relation to other objects and people",
    lesson: {
      title: "Where Is It?",
      objective: "Use position words to describe exactly where things are — and give and follow positional instructions.",
      materials: [
        "A small stuffed toy or favourite object to act as 'Teddy'",
        "Boxes, chairs and everyday furniture to position Teddy around",
        "Paper and pencil",
      ],
      intro: {
        title: "Teddy's Hiding Spots",
        script: "Teddy loves to play hide and describe! I'm going to put Teddy somewhere, and I want you to tell me exactly where Teddy is — not just 'over there', but using special words: ON, UNDER, BESIDE, IN FRONT OF, BEHIND, INSIDE. Ready?",
        action: "Place the toy in different positions around the room (on the table, under the chair, beside the box, behind the door, inside a bag). After each position, your child describes it in a full sentence: 'Teddy is UNDER the table.' If they're unsure, say the sentence together.",
      },
      mainActivity: {
        title: "You're the Director!",
        script: "Now YOU'RE in charge! Tell me exactly where to put Teddy, using your position words. I'll follow your instructions exactly — so be very precise, because I'm going to listen carefully!",
        action: "Your child gives verbal instructions. Follow them literally — if they say 'put Teddy there', ask 'Where is there? Can you use a position word?' Then swap — you give instructions for your child to follow. Make it silly: 'Put Teddy on top of YOUR head!'",
      },
      wrapUp: {
        title: "Draw a Map",
        script: "Let's draw a simple map of our table and show where Teddy is. Draw the table, draw Teddy, and write the word that tells us where Teddy is. Is Teddy ON the table? Or UNDER it?",
        action: "Your child draws a simple diagram showing Teddy's position relative to one or two objects. Help them write the position word next to Teddy. This gently introduces spatial representation — a big concept!",
      },
    },
    activities: [
      // --- EASY: On, under, in (1 of 2) ---
      {
        type: "circle-correct",
        title: "On, Under, or In?",
        instruction: "Circle the correct position word.",
        questions: [
          { prompt: "The cat is sitting ___ the chair.", promptIcon: "cat", options: ["On", "Under", "In"] },
          { prompt: "The shoes are ___ the bed.", options: ["On", "Under", "In"] },
          { prompt: "The toys are ___ the box.", promptIcon: "teddy", options: ["On", "Under", "In"] },
          { prompt: "The book is ___ the table.", promptIcon: "book", options: ["On", "Under", "In"] },
        ],
      },
      {
        type: "circle-correct",
        title: "On, Under, or In? (2)",
        instruction: "Circle the correct position word.",
        questions: [
          { prompt: "The bird is sitting ___ the branch.", promptIcon: "bird", options: ["On", "Under", "In"] },
          { prompt: "The ball is ___ the couch.", promptIcon: "ball", options: ["On", "Under", "In"] },
          { prompt: "The fish is swimming ___ the water.", promptIcon: "fish", options: ["On", "Under", "In"] },
          { prompt: "The cup is ___ the shelf.", promptIcon: "cup", options: ["On", "Under", "In"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Position",
        instruction: "Draw a line to match each picture to the correct position word.",
        leftItems: [
          { label: "Bird on a branch", objects: [] },
          { label: "Cat under a bed", objects: [] },
          { label: "Ball in a box", objects: [] },
        ],
        rightItems: [
          { label: "In", objects: [] },
          { label: "On", objects: [] },
          { label: "Under", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match the Position (2)",
        instruction: "Draw a line to match each picture to the correct position word.",
        leftItems: [
          { label: "Apple on the plate", objects: [] },
          { label: "Dog under the table", objects: [] },
          { label: "Pencil in the cup", objects: [] },
        ],
        rightItems: [
          { label: "In", objects: [] },
          { label: "On", objects: [] },
          { label: "Under", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Is the Star?",
        instruction: "Circle where the star is.",
        questions: [
          { prompt: "The star is ___ the cup.", promptIcon: "star", options: ["On top of", "Under", "Inside"] },
          { prompt: "The star is ___ the table.", promptIcon: "star", options: ["On top of", "Under", "Next to"] },
          { prompt: "The star is ___ the hat.", promptIcon: "star", options: ["On top of", "Inside", "Behind"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Is the Heart?",
        instruction: "Circle where the heart is.",
        questions: [
          { prompt: "The heart is ___ the pillow.", promptIcon: "heart", options: ["On top of", "Under", "Inside"] },
          { prompt: "The heart is ___ the chair.", promptIcon: "heart", options: ["On top of", "Under", "Beside"] },
          { prompt: "The heart is ___ the bag.", promptIcon: "heart", options: ["On top of", "Inside", "Behind"] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False: Position",
        instruction: "If the cat is ON the chair, circle True or False.",
        questions: [
          { prompt: "The cat is under the chair.", options: ["True", "False"] },
          { prompt: "The cat is on top of the chair.", options: ["True", "False"] },
          { prompt: "The cat is inside the chair.", options: ["True", "False"] },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False: Position (2)",
        instruction: "If the dog is UNDER the table, circle True or False.",
        questions: [
          { prompt: "The dog is on top of the table.", promptIcon: "dog", options: ["True", "False"] },
          { prompt: "The dog is under the table.", promptIcon: "dog", options: ["True", "False"] },
          { prompt: "The dog is beside the table.", promptIcon: "dog", options: ["True", "False"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: On or In?",
        instruction: "Sort each thing. Is it usually ON something or IN something?",
        columns: ["On", "In"],
        items: [
          { label: "A hat ___ your head" },
          { label: "Juice ___ a cup", icon: "cup" },
          { label: "A bird ___ a branch", icon: "bird" },
          { label: "Fish ___ a pond", icon: "fish" },
          { label: "A book ___ a table", icon: "book" },
          { label: "Toys ___ a box", icon: "teddy" },
        ],
      },

      // --- EASY: Next to, beside, between (1 of 2) ---
      {
        type: "circle-correct",
        title: "Next To and Beside",
        instruction: "Circle the correct word.",
        questions: [
          { prompt: "The dog is ___ the child.", promptIcon: "dog", options: ["Beside", "Under", "On top of"] },
          { prompt: "The apple is ___ the banana.", promptIcon: "apple", options: ["Inside", "Next to", "Under"] },
          { prompt: "Mum is sitting ___ Dad.", options: ["Under", "Beside", "On top of"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Next To and Beside (2)",
        instruction: "Circle the correct word.",
        questions: [
          { prompt: "The tree is ___ the house.", promptIcon: "tree", options: ["Next to", "Under", "Inside"] },
          { prompt: "The pencil is ___ the book.", promptIcon: "pencil", options: ["On top of", "Beside", "Under"] },
          { prompt: "The cat is sitting ___ the dog.", promptIcon: "cat", options: ["Inside", "Under", "Next to"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Between",
        instruction: "Circle what is BETWEEN the other two things.",
        questions: [
          { prompt: "Star, Heart, Apple -- what is between the star and the apple?", options: ["Star", "Heart", "Apple"] },
          { prompt: "Cat, Dog, Bird -- what is between the cat and the bird?", options: ["Cat", "Dog", "Bird"] },
          { prompt: "Red, Blue, Green -- what is between red and green?", options: ["Red", "Blue", "Green"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Between (2)",
        instruction: "Circle what is BETWEEN the other two things.",
        questions: [
          { prompt: "Sun, Moon, Star -- what is between the sun and the star?", options: ["Sun", "Moon", "Star"] },
          { prompt: "Fish, Flower, Butterfly -- what is between the fish and the butterfly?", options: ["Fish", "Flower", "Butterfly"] },
          { prompt: "Apple, Banana, Grape -- what is between the apple and the grape?", options: ["Apple", "Banana", "Grape"] },
        ],
      },
      {
        type: "matching",
        title: "Match Position Words",
        instruction: "Draw a line to match each sentence to the correct position word.",
        leftItems: [
          { label: "The cat sits ___ the dog", objects: [] },
          { label: "The hat is ___ the head", objects: [] },
          { label: "The mouse is ___ the table", objects: [] },
          { label: "The apple is ___ the bowl", objects: [] },
        ],
        rightItems: [
          { label: "In", objects: [] },
          { label: "On top of", objects: [] },
          { label: "Under", objects: [] },
          { label: "Beside", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match Position Words (2)",
        instruction: "Draw a line to match each sentence to the correct position word.",
        leftItems: [
          { label: "The bird sits ___ the tree and the fence", objects: [] },
          { label: "The flower is ___ the pot", objects: [] },
          { label: "The ball is ___ the bed", objects: [] },
          { label: "The star is ___ the book", objects: [] },
        ],
        rightItems: [
          { label: "In", objects: [] },
          { label: "On top of", objects: [] },
          { label: "Under", objects: [] },
          { label: "Between", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "On, In, Under, or Beside?",
        instruction: "Circle the correct position word for each sentence.",
        questions: [
          { prompt: "The spoon is ___ the drawer.", promptIcon: "spoon", options: ["On", "In", "Under", "Beside"] },
          { prompt: "The clock is ___ the wall.", promptIcon: "clock", options: ["On", "In", "Under", "Beside"] },
          { prompt: "The elephant stands ___ the tree.", promptIcon: "elephant", options: ["On", "In", "Under", "Beside"] },
          { prompt: "The mouse hides ___ the cup.", promptIcon: "mouse", options: ["On", "In", "Under", "Beside"] },
        ],
      },

      // --- MEDIUM: In front of, behind, above, below (1 of 2) ---
      {
        type: "circle-correct",
        title: "In Front or Behind?",
        instruction: "Circle the correct word.",
        questions: [
          { prompt: "The teacher is standing ___ the class.", options: ["In front of", "Behind", "Under"] },
          { prompt: "The child is hiding ___ the tree.", options: ["In front of", "Behind", "On top of"] },
          { prompt: "The car is parked ___ the house.", options: ["In front of", "Behind", "Inside"] },
        ],
      },
      {
        type: "circle-correct",
        title: "In Front or Behind? (2)",
        instruction: "Circle the correct word.",
        questions: [
          { prompt: "The dog is walking ___ its owner.", promptIcon: "dog", options: ["In front of", "Behind", "Under"] },
          { prompt: "The sun is ___ the clouds.", promptIcon: "sun", options: ["In front of", "Behind", "Under"] },
          { prompt: "Dad is standing ___ the door.", options: ["In front of", "Behind", "On top of"] },
          { prompt: "The cat is hiding ___ the curtain.", promptIcon: "cat", options: ["In front of", "Behind", "Above"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Above or Below?",
        instruction: "Circle the correct word.",
        questions: [
          { prompt: "The clouds are ___ us.", options: ["Above", "Below", "Beside"] },
          { prompt: "The ground is ___ our feet.", options: ["Above", "Below", "Behind"] },
          { prompt: "The bird is flying ___ the tree.", promptIcon: "bird", options: ["Above", "Below", "Inside"] },
          { prompt: "The fish swims ___ the water.", promptIcon: "fish", options: ["Above", "Below", "In front of"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Above or Below? (2)",
        instruction: "Circle the correct word.",
        questions: [
          { prompt: "The moon is ___ the rooftop.", promptIcon: "moon", options: ["Above", "Below", "Beside"] },
          { prompt: "The roots of a tree are ___ the ground.", promptIcon: "tree", options: ["Above", "Below", "In front of"] },
          { prompt: "The stars shine ___ us at night.", promptIcon: "star", options: ["Above", "Below", "Behind"] },
          { prompt: "The ant walks ___ the leaf.", promptIcon: "ant", options: ["Above", "Below", "Inside"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Above or Below?",
        instruction: "Sort each thing. Is it usually ABOVE us or BELOW us?",
        columns: ["Above Us", "Below Us"],
        items: [
          { label: "Sun", icon: "sun" },
          { label: "Grass" },
          { label: "Stars", icon: "star" },
          { label: "Floor" },
          { label: "Clouds" },
          { label: "Ants on the ground", icon: "ant" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: In Front or Behind?",
        instruction: "You are facing the TV. Sort each thing. Is it IN FRONT of you or BEHIND you?",
        columns: ["In Front of Me", "Behind Me"],
        items: [
          { label: "The TV" },
          { label: "The wall behind you" },
          { label: "Your toes" },
          { label: "Your back" },
          { label: "The screen" },
          { label: "The couch you sit on" },
        ],
      },
      {
        type: "circle-correct",
        title: "All the Position Words",
        instruction: "Circle the best position word for each sentence.",
        questions: [
          { prompt: "The picture hangs ___ the fireplace.", options: ["Above", "Under", "Beside"] },
          { prompt: "The rug is ___ the table.", options: ["On top of", "Under", "Behind"] },
          { prompt: "The lamp is ___ the couch.", options: ["Under", "Next to", "In front of"] },
          { prompt: "The dog sleeps ___ the door.", options: ["Above", "In front of", "On top of"] },
        ],
      },
      {
        type: "circle-correct",
        title: "All the Position Words (2)",
        instruction: "Circle the best position word for each sentence.",
        questions: [
          { prompt: "The cat hides ___ the bookshelf.", promptIcon: "cat", options: ["Behind", "Above", "On top of"] },
          { prompt: "The flower grows ___ the fence.", promptIcon: "flower", options: ["Next to", "Under", "On top of"] },
          { prompt: "The moon shines ___ the house.", promptIcon: "moon", options: ["Above", "Under", "Beside"] },
          { prompt: "The shoes are ___ the bed.", options: ["Above", "In front of", "Under"] },
        ],
      },
      {
        type: "matching",
        title: "Match: In Front, Behind, Above, Below",
        instruction: "Draw a line to match each sentence to the correct position word.",
        leftItems: [
          { label: "The bird flies high up", objects: [] },
          { label: "The worm is in the dirt", objects: [] },
          { label: "You can see the teacher at the board", objects: [] },
          { label: "Something is hiding at the back", objects: [] },
        ],
        rightItems: [
          { label: "Above", objects: [] },
          { label: "Below", objects: [] },
          { label: "In front of", objects: [] },
          { label: "Behind", objects: [] },
        ],
      },

      // --- MEDIUM: Left and right (1 of 2) ---
      {
        type: "circle-correct",
        title: "Left or Right?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "You write with your ___ hand (if right-handed).", options: ["Left", "Right"] },
          { prompt: "Your heart is on your ___ side.", options: ["Left", "Right"] },
          { prompt: "Hold up both hands. Your thumb points out on your ___ hand to make an L.", options: ["Left", "Right"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Left or Right? (2)",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "When you read a book, you start on the ___ side of the page.", options: ["Left", "Right"] },
          { prompt: "On a clock, the number 9 is on the ___ side.", options: ["Left", "Right"] },
          { prompt: "On a clock, the number 3 is on the ___ side.", options: ["Left", "Right"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Is on the Left? What Is on the Right?",
        instruction: "Star is on the LEFT. Heart is in the MIDDLE. Apple is on the RIGHT. Answer the questions.",
        questions: [
          { prompt: "What is on the left?", options: ["Star", "Heart", "Apple"] },
          { prompt: "What is on the right?", options: ["Star", "Heart", "Apple"] },
          { prompt: "What is in the middle?", options: ["Star", "Heart", "Apple"] },
        ],
      },
      {
        type: "circle-correct",
        title: "What Is on the Left? What Is on the Right? (2)",
        instruction: "Dog is on the LEFT. Cat is in the MIDDLE. Bird is on the RIGHT. Answer the questions.",
        questions: [
          { prompt: "What is on the left?", options: ["Dog", "Cat", "Bird"] },
          { prompt: "What is on the right?", options: ["Dog", "Cat", "Bird"] },
          { prompt: "What is in the middle?", options: ["Dog", "Cat", "Bird"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Left, Right, or Middle?",
        instruction: "Fish, Flower, Diamond, Butterfly, Star -- they are in a line. Answer the questions.",
        questions: [
          { prompt: "What is on the far left?", options: ["Fish", "Diamond", "Star"] },
          { prompt: "What is on the far right?", options: ["Fish", "Diamond", "Star"] },
          { prompt: "What is in the middle?", options: ["Flower", "Diamond", "Butterfly"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Left, Right, or Middle? (2)",
        instruction: "Apple, Sun, Heart, Moon, Tree -- they are in a line. Answer the questions.",
        questions: [
          { prompt: "What is on the far left?", options: ["Apple", "Heart", "Tree"] },
          { prompt: "What is on the far right?", options: ["Apple", "Heart", "Tree"] },
          { prompt: "What is in the middle?", options: ["Sun", "Heart", "Moon"] },
          { prompt: "What is to the right of the heart?", options: ["Sun", "Moon", "Apple"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Left Side or Right Side?",
        instruction: "You are facing a shelf. A teddy is in the middle. Sort the items by which side they are on.",
        columns: ["Left of the Teddy", "Right of the Teddy"],
        items: [
          { label: "Book (far left)", icon: "book" },
          { label: "Cup (near left)", icon: "cup" },
          { label: "Ball (near right)", icon: "ball" },
          { label: "Star (far right)", icon: "star" },
        ],
      },

      // --- BRIDGE: Simple one-step directions ---
      {
        type: "circle-correct",
        title: "One-Step Directions",
        instruction: "Follow the simple direction. Circle the answer.",
        questions: [
          { prompt: "Look UP. What do you see?", options: ["The ceiling", "The floor", "Your shoes"] },
          { prompt: "Turn to your RIGHT. What might you see?", options: ["The wall or a friend", "Your feet", "The sky"] },
          { prompt: "Reach DOWN. What can you touch?", options: ["The ceiling", "The floor", "The clouds"] },
        ],
      },
      {
        type: "circle-correct",
        title: "One-Step Directions (2)",
        instruction: "Follow the simple direction. Circle the answer.",
        questions: [
          { prompt: "Look BEHIND you. What do you see?", options: ["What is in front of you", "What is above you", "What is at your back"] },
          { prompt: "Point to your LEFT. What side is that?", options: ["The same side as your right hand", "The side that makes an L shape", "The side with your tummy"] },
          { prompt: "Put your hand UNDER the table. Where is your hand now?", options: ["On the table", "Below the table", "Above the table"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Direction to What You Do",
        instruction: "Draw a line to match each direction to what you would do.",
        leftItems: [
          { label: "Look up", objects: [] },
          { label: "Look down", objects: [] },
          { label: "Look behind you", objects: [] },
          { label: "Look to your left", objects: [] },
        ],
        rightItems: [
          { label: "Turn your head to one side", objects: [] },
          { label: "Tilt your head to the ceiling", objects: [] },
          { label: "Turn your whole body around", objects: [] },
          { label: "Tilt your head to the floor", objects: [] },
        ],
      },

      // --- HARDER: Giving directions (1 of 2) ---
      {
        type: "circle-correct",
        title: "Follow the Directions",
        instruction: "Circle what you would find if you follow the direction.",
        questions: [
          { prompt: "Star, Heart, Apple are in a line. Start at the Star. Move right. What do you find?", options: ["Heart", "Apple", "Star"] },
          { prompt: "Start at the door. Go forward. You are now ___.", options: ["Inside the room", "Behind the door", "On the roof"] },
          { prompt: "Face the window. Turn around. You are now facing the ___.", options: ["Window", "Wall behind you", "Floor"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Follow the Directions (2)",
        instruction: "Circle what you would find if you follow the direction.",
        questions: [
          { prompt: "Cat, Dog, Bird are in a line. Start at the Bird. Move left. What do you find?", options: ["Cat", "Dog", "Bird"] },
          { prompt: "You are at the front of the class. Walk to the back. You are now ___ the class.", options: ["In front of", "Behind", "Above"] },
          { prompt: "Face the door. Turn to your left. You are now facing the ___.", options: ["Door", "Wall to the left", "Floor"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Would You Go?",
        instruction: "Circle the best direction.",
        questions: [
          { prompt: "To get something from a high shelf, you reach ___.", options: ["Up", "Down", "Left"] },
          { prompt: "To pick up something on the floor, you reach ___.", options: ["Up", "Down", "Behind"] },
          { prompt: "To open a door on your right, you reach to the ___.", options: ["Left", "Right", "Up"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Would You Go? (2)",
        instruction: "Circle the best direction.",
        questions: [
          { prompt: "To see a plane in the sky, you look ___.", options: ["Up", "Down", "Left"] },
          { prompt: "To find your shoes on the floor, you look ___.", options: ["Up", "Down", "Behind"] },
          { prompt: "To wave to a friend across the room, you look to the ___.", options: ["Up", "Down", "Side"] },
          { prompt: "To find something you dropped behind you, you turn ___.", options: ["Up", "Down", "Around"] },
        ],
      },
      {
        type: "matching",
        title: "Match Direction to Action",
        instruction: "Draw a line to match each direction to what happens.",
        leftItems: [
          { label: "Go up", objects: [] },
          { label: "Go down", objects: [] },
          { label: "Go forward", objects: [] },
          { label: "Turn around", objects: [] },
        ],
        rightItems: [
          { label: "Face the other way", objects: [] },
          { label: "Climb higher", objects: [] },
          { label: "Walk straight ahead", objects: [] },
          { label: "Move lower", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Match Direction to Action (2)",
        instruction: "Draw a line to match each direction to what happens.",
        leftItems: [
          { label: "Move left", objects: [] },
          { label: "Move right", objects: [] },
          { label: "Step backward", objects: [] },
          { label: "Step forward", objects: [] },
        ],
        rightItems: [
          { label: "Go to the side of your right hand", objects: [] },
          { label: "Go to the side of your left hand", objects: [] },
          { label: "Walk straight ahead", objects: [] },
          { label: "Walk away from where you face", objects: [] },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Path",
        instruction: "Put these directions in order to get from the door to the desk. Write 1, 2, 3.",
        items: [
          { label: "Walk forward 5 steps" },
          { label: "Turn left" },
          { label: "Walk forward 2 steps to the desk" },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Path (2)",
        instruction: "Put these directions in order to get from the gate to the sandpit. Write 1, 2, 3, 4.",
        items: [
          { label: "Walk forward through the gate" },
          { label: "Turn right" },
          { label: "Walk past the slide" },
          { label: "Stop at the sandpit" },
        ],
      },

      // --- HARDER: Describing positions (1 of 2) ---
      {
        type: "circle-correct",
        title: "Describe the Position",
        instruction: "A teddy is ON the shelf. A book is NEXT TO the teddy. A ball is UNDER the shelf. Circle the correct answer.",
        questions: [
          { prompt: "Where is the teddy?", promptIcon: "teddy", options: ["On the shelf", "Under the shelf", "Next to the ball"] },
          { prompt: "Where is the ball?", promptIcon: "ball", options: ["On the shelf", "Under the shelf", "Next to the teddy"] },
          { prompt: "What is next to the teddy?", promptIcon: "book", options: ["The ball", "The shelf", "The book"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Describe the Position (2)",
        instruction: "A clock is ON the wall. A cup is BELOW the clock on the table. A cat is UNDER the table. Circle the correct answer.",
        questions: [
          { prompt: "Where is the clock?", promptIcon: "clock", options: ["On the wall", "Under the table", "Next to the cup"] },
          { prompt: "Where is the cup?", promptIcon: "cup", options: ["On the wall", "Below the clock on the table", "Under the table"] },
          { prompt: "Where is the cat?", promptIcon: "cat", options: ["On the wall", "On the table", "Under the table"] },
          { prompt: "What is above the cup?", options: ["The cat", "The clock", "The table"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Opposite Positions",
        instruction: "Circle the OPPOSITE position word.",
        questions: [
          { prompt: "The opposite of UP is ___.", options: ["Down", "Left", "Behind"] },
          { prompt: "The opposite of IN FRONT OF is ___.", options: ["Above", "Behind", "Under"] },
          { prompt: "The opposite of LEFT is ___.", options: ["Up", "Down", "Right"] },
          { prompt: "The opposite of ABOVE is ___.", options: ["Below", "Beside", "Behind"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Opposite Positions (2)",
        instruction: "Circle the OPPOSITE position word.",
        questions: [
          { prompt: "The opposite of INSIDE is ___.", options: ["Outside", "Above", "Beside"] },
          { prompt: "The opposite of ON TOP OF is ___.", options: ["Below", "Beside", "In front of"] },
          { prompt: "The opposite of NEAR is ___.", options: ["Close", "Far", "Above"] },
          { prompt: "The opposite of BEHIND is ___.", options: ["Under", "Above", "In front of"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Opposites",
        instruction: "Draw a line to match each position word to its opposite.",
        leftItems: [
          { label: "Up", objects: [] },
          { label: "Left", objects: [] },
          { label: "In front of", objects: [] },
          { label: "Inside", objects: [] },
        ],
        rightItems: [
          { label: "Outside", objects: [] },
          { label: "Down", objects: [] },
          { label: "Behind", objects: [] },
          { label: "Right", objects: [] },
        ],
      },

      // --- CHALLENGE: Complex positions, maps ---
      {
        type: "circle-correct",
        title: "Two Clues",
        instruction: "Use both clues to work out where the object is.",
        questions: [
          { prompt: "It is ABOVE the table AND to the LEFT. Where is it?", options: ["On the top left", "Under the table", "To the right"] },
          { prompt: "It is BEHIND the chair AND on the floor. Where is it?", options: ["On top of the chair", "On the floor behind the chair", "Inside the chair"] },
          { prompt: "It is BETWEEN the cup and the plate AND on the table. Where is it?", options: ["Under the table", "On the table, in the middle", "Behind the plate"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Two Clues (2)",
        instruction: "Use both clues to work out where the object is.",
        questions: [
          { prompt: "It is BELOW the shelf AND to the RIGHT. Where is it?", options: ["On the bottom right", "On top of the shelf", "To the left"] },
          { prompt: "It is IN FRONT OF the couch AND on the floor. Where is it?", options: ["On the floor in front of the couch", "Behind the couch", "On the couch"] },
          { prompt: "It is BESIDE the door AND above the floor. Where is it?", options: ["Under the floor", "On the wall next to the door", "Behind the door on the floor"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort All the Position Words",
        instruction: "Sort these words into the correct group.",
        columns: ["Up/Down Words", "Side Words", "Front/Back Words"],
        items: [
          { label: "Above" },
          { label: "Left" },
          { label: "Behind" },
          { label: "Below" },
          { label: "Right" },
          { label: "In front of" },
        ],
      },
      {
        type: "sorting",
        title: "Sort Position Words (2)",
        instruction: "Sort these words into the correct group.",
        columns: ["On/In Words", "Direction Words"],
        items: [
          { label: "On top of" },
          { label: "Forward" },
          { label: "Inside" },
          { label: "Backward" },
          { label: "Under" },
          { label: "Left" },
          { label: "In" },
          { label: "Right" },
        ],
      },
      {
        type: "circle-correct",
        title: "Position Challenge",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "If a bird is above you and a worm is below you, you are ___.", options: ["In the middle", "On top", "Underground"] },
          { prompt: "If you walk forward then turn around and walk forward, you end up ___.", options: ["Where you started", "Far away", "Turned around"] },
          { prompt: "The opposite of 'inside' is ___.", options: ["Outside", "Under", "Above"] },
          { prompt: "If the ball is behind you, you need to ___ to see it.", options: ["Look up", "Turn around", "Look down"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Position Challenge (2)",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "If you face north and turn to your right, you face ___.", options: ["East", "West", "South"] },
          { prompt: "If a tree is to your left and a fence is to your right, you are ___ the tree and fence.", options: ["On top of", "Between", "Under"] },
          { prompt: "If you put a ball behind a box and then walk behind the box, the ball is now ___ you.", options: ["Behind", "In front of", "Above"] },
          { prompt: "If something is below you and to your right, it is on the ___ .", options: ["Bottom right", "Top left", "Top right"] },
        ],
      },
      {
        type: "matching",
        title: "Position Words Review",
        instruction: "Draw a line to match each position word to its meaning.",
        leftItems: [
          { label: "Beside", objects: [] },
          { label: "Beneath", objects: [] },
          { label: "Above", objects: [] },
          { label: "Between", objects: [] },
        ],
        rightItems: [
          { label: "In the middle of two things", objects: [] },
          { label: "Higher up", objects: [] },
          { label: "Next to", objects: [] },
          { label: "Under", objects: [] },
        ],
      },
      {
        type: "matching",
        title: "Position Words Review (2)",
        instruction: "Draw a line to match each position word to its meaning.",
        leftItems: [
          { label: "In front of", objects: [] },
          { label: "Behind", objects: [] },
          { label: "On top of", objects: [] },
          { label: "Inside", objects: [] },
        ],
        rightItems: [
          { label: "Sitting on something", objects: [] },
          { label: "At the back of something", objects: [] },
          { label: "Facing something", objects: [] },
          { label: "Within something", objects: [] },
        ],
      },
      {
        type: "circle-correct",
        title: "Tricky Positions",
        instruction: "Read carefully and circle the best answer.",
        questions: [
          { prompt: "The book is on the table. The pencil is on the book. The pencil is also ___ the table.", options: ["Under", "Above", "Behind"] },
          { prompt: "The cat is under the bed. The rug is under the bed too. The cat is ___ the rug.", options: ["On", "Under", "Beside"] },
          { prompt: "You are between two trees. Both trees are ___ you.", options: ["Behind", "In front of", "Beside"] },
        ],
      },

      // --- Improvement: First-person spatial language ("in relation to people") ---
      {
        type: "circle-correct",
        title: "Where Am I?",
        instruction: "Imagine YOU are in these places. Circle the correct answer about YOUR position.",
        questions: [
          { prompt: "You are standing behind a chair. The chair is ___ you.", options: ["Behind", "In front of", "Above"] },
          { prompt: "You are sitting under a tree. The tree is ___ you.", options: ["Under", "Above", "Behind"] },
          { prompt: "You are standing between two friends. You are in the ___.", options: ["Front", "Middle", "Back"] },
          { prompt: "You are lying on your bed. The bed is ___ you.", options: ["Above", "Below", "Beside"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Where Am I? (2)",
        instruction: "Imagine YOU are in these places. Circle the correct answer about YOUR position.",
        questions: [
          { prompt: "You are sitting on the floor. The table is ___ you.", options: ["Below", "Above", "Under"] },
          { prompt: "You are hiding behind the door. The door is ___ you.", options: ["Behind", "In front of", "Under"] },
          { prompt: "You are standing next to a tree. The tree is ___ you.", options: ["On top of", "Beside", "Under"] },
          { prompt: "You are inside a tent. The tent is ___ you.", options: ["Under", "Behind", "Around"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Your Body Position Words",
        instruction: "Use position words to describe parts of your body.",
        questions: [
          { prompt: "Your head is ___ your shoulders.", options: ["Above", "Below", "Behind"] },
          { prompt: "Your feet are ___ your legs.", options: ["Above", "Below", "In front of"] },
          { prompt: "Your ears are ___ your head.", options: ["On the sides of", "Under", "In front of"] },
          { prompt: "Your nose is ___ your eyes and your mouth.", options: ["Behind", "Between", "Under"] },
        ],
      },
      {
        type: "open-response",
        title: "Describe Where YOU Are",
        instruction: "Look around the room you are in right now. Write about your position using position words.",
        prompts: [
          { text: "I am sitting ___ the table.", type: "lines", lines: 1 },
          { text: "The door is ___ me.", type: "lines", lines: 1 },
          { text: "The floor is ___ me.", type: "lines", lines: 1 },
          { text: "Something that is beside me is:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Describe Your Bedroom",
        instruction: "Think about your bedroom. Use position words to describe where things are.",
        prompts: [
          { text: "My bed is:", type: "lines", lines: 2 },
          { text: "My toys are:", type: "lines", lines: 2 },
          { text: "The window is:", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Describe the Kitchen",
        instruction: "Think about your kitchen. Use position words to describe where things are.",
        prompts: [
          { text: "The fridge is:", type: "lines", lines: 2 },
          { text: "The cups are:", type: "lines", lines: 2 },
          { text: "The table is:", type: "lines", lines: 2 },
        ],
      },
      // --- Additional activities ---
      {
        type: "circle-correct",
        title: "Where Is the Cat?",
        instruction: "Read the description. Circle the correct position word.",
        questions: [
          { prompt: "The cat is sitting on top of the box.", options: ["above", "below", "beside"] },
          { prompt: "The ball rolled under the table.", options: ["over", "under", "beside"] },
          { prompt: "The bird is in front of the house.", options: ["behind", "in front of", "next to"] },
          { prompt: "The book is beside the lamp.", options: ["above", "below", "beside"] },
        ],
      },
      {
        type: "matching",
        title: "Match Position Words to Meanings",
        instruction: "Draw a line to match each position word to what it means.",
        left: ["above", "below", "beside", "behind"],
        right: ["next to", "higher up", "at the back", "lower down"],
      },
      {
        type: "sorting",
        title: "Sort: Up High or Down Low?",
        instruction: "Think about where these things usually are. Sort them into the correct column.",
        columns: ["Up high", "Down low"],
        items: [
          { label: "Birds flying", icon: "bird" },
          { label: "Ants on ground", icon: "ant" },
          { label: "Sun in sky", icon: "sun" },
          { label: "Roots of tree", icon: "tree" },
          { label: "Moon at night", icon: "moon" },
          { label: "Shoes on floor" },
        ],
      },
      {
        type: "circle-correct",
        title: "Give the Directions",
        instruction: "Circle the best direction word to complete each sentence.",
        questions: [
          { prompt: "Walk ___ from the table to get to the door.", options: ["away from", "into", "onto"] },
          { prompt: "Turn ___ at the corner to go the other way.", options: ["left or right", "up", "under"] },
          { prompt: "The dog went ___ the tunnel.", options: ["above", "through", "beside"] },
        ],
      },
      {
        type: "open-response",
        title: "Describe a Path",
        instruction: "Imagine walking from your bedroom to the kitchen. Describe the path using position words.",
        prompts: [
          { text: "First I walk _______________", type: "lines", lines: 1 },
          { text: "Then I go _______________", type: "lines", lines: 1 },
          { text: "Finally I arrive _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Left or Right?",
        instruction: "Circle the correct answer for each question.",
        questions: [
          { prompt: "If you face a door and it is on your LEFT side, which hand is closest to it?", options: ["Right hand", "Left hand", "Both hands"] },
          { prompt: "You are walking and turn RIGHT. Which way do you now face?", options: ["Backwards", "A new direction to the right", "Straight ahead still"] },
          { prompt: "Your friend stands to your RIGHT. To them, are you on their left or right?", options: ["Their left", "Their right", "Their front"] },
        ],
      },
      {
        type: "open-response",
        title: "Draw a Simple Map",
        instruction: "Draw a simple map of your bedroom. Use position words to label where things are.",
        prompts: [
          { text: "Draw and label your bedroom map:", type: "box" },
          { text: "Write one sentence about where your bed is:", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sequence",
        title: "Follow the Path in Order",
        instruction: "Number these steps 1st, 2nd, 3rd, 4th to describe a path from the front door to the kitchen.",
        items: [
          { label: "Turn right" },
          { label: "Walk through the hall" },
          { label: "Open the front door" },
          { label: "Arrive at the kitchen" },
        ],
      },
      {
        type: "count-objects",
        title: "How Many Objects on the Shelf?",
        instruction: "Count each row of shelf objects. Write the total.",
        rows: [
          { object: "book", count: 4 },
          { object: "cup", count: 3 },
          { object: "ball", count: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Position Word Quiz",
        instruction: "Circle the best position word for each picture description.",
        questions: [
          { prompt: "The apple is ___ the table (on the surface).", options: ["under", "on", "above"] },
          { prompt: "The fish is ___ the water (inside).", options: ["in", "on", "above"] },
          { prompt: "The dog is ___ the cat (right next to it).", options: ["between", "beside", "behind"] },
          { prompt: "The ball is ___ the two boxes (in the gap).", options: ["above", "beside", "between"] },
        ],
      },
      {
        type: "open-response",
        title: "Treasure Hunt Clues",
        instruction: "Write 3 position clue sentences to help someone find a hidden toy teddy in your home.",
        prompts: [
          { text: "Clue 1: The teddy is _______________", type: "lines", lines: 1 },
          { text: "Clue 2: It is not _______________, it is _______________", type: "lines", lines: 1 },
          { text: "Clue 3: Look _______________ the _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Inside or Outside?",
        instruction: "Sort these items into the correct column.",
        columns: ["Usually inside", "Usually outside"],
        items: [
          { label: "Sofa" },
          { label: "Tree", icon: "tree" },
          { label: "Bed" },
          { label: "Car", icon: "car" },
          { label: "Clock", icon: "clock" },
          { label: "Bird", icon: "bird" },
        ],
      },
      {
        type: "matching",
        title: "Match the Opposite Position Words",
        instruction: "Draw a line to match each word to its opposite.",
        left: ["above", "left", "in front", "inside"],
        right: ["outside", "below", "right", "behind"],
      },
      {
        type: "circle-correct",
        title: "First, Next, Last",
        instruction: "Use ordinal words to answer each question.",
        questions: [
          { prompt: "In a race, the winner comes...", options: ["last", "first", "middle"] },
          { prompt: "The 3rd person in line is...", options: ["First", "Second", "Third"] },
          { prompt: "If you are 2nd, you came ___ the first person.", options: ["before", "after", "beside"] },
        ],
      },
      {
        type: "open-response",
        title: "Where Is the Teddy?",
        instruction: "A teddy is on a shelf above a box, beside a book, and below a lamp. Write where it is.",
        prompts: [
          { text: "The teddy is _______________ the box.", type: "lines", lines: 1 },
          { text: "The teddy is _______________ the book.", type: "lines", lines: 1 },
          { text: "The teddy is _______________ the lamp.", type: "lines", lines: 1 },
        ],
      },
      {
        type: "picture-graph",
        title: "Where Are the Toys?",
        instruction: "This graph shows where toys were found in the classroom. Answer the questions.",
        rows: [
          { label: "On the shelf", icon: "book", count: 5 },
          { label: "On the floor", icon: "ball", count: 3 },
          { label: "In the box", icon: "teddy", count: 4 },
          { label: "On the table", icon: "car", count: 2 },
        ],
        questions: [
          "Where were the most toys found?",
          "Where were the fewest toys found?",
          "How many toys were on the shelf or table altogether?",
        ],
      },
      {
        type: "number-bonds",
        title: "Position Number Bonds",
        instruction: "Some toys were sorted into two locations. Fill in the missing numbers.",
        bonds: [
          { total: 8, partA: 5, partB: null },
          { total: 10, partA: null, partB: 4 },
          { total: 6, partA: 2, partB: null },
          { total: 9, partA: null, partB: 3 },
        ],
      },
      {
        type: "ten-frame",
        title: "Count the Objects on the Shelf",
        instruction: "These ten frames show how many objects are on each shelf. Write the number.",
        frames: [
          { filled: 5, total: 10 },
          { filled: 8, total: 10 },
          { filled: 3, total: 10 },
        ],
      },
      {
        type: "circle-correct",
        title: "Follow the Instructions",
        instruction: "Read each instruction carefully. Circle what you should do.",
        questions: [
          { prompt: "Put the book ON the table. Where does the book go?", options: ["Under the table", "On top of the table", "Behind the table"] },
          { prompt: "Stand BEHIND your chair. Where are you?", options: ["In front of the chair", "At the back of the chair", "On the chair"] },
          { prompt: "Place the cup BETWEEN the two plates. Where is the cup?", options: ["Next to both plates", "In the middle of the two plates", "Above the plates"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Count Toys by Location",
        instruction: "Count the tally marks showing where toys were found. Write the total.",
        categories: [
          { label: "On shelf", icon: "book", count: 5 },
          { label: "Under bed", icon: "teddy", count: 3 },
          { label: "In box", icon: "ball", count: 7 },
        ],
      },
      {
        type: "open-response",
        title: "Describe the Playground",
        instruction: "Imagine a playground with a slide, swings, and a sandpit. Describe where each thing is.",
        prompts: [
          { text: "The slide is _______________", type: "lines", lines: 1 },
          { text: "The swings are _______________", type: "lines", lines: 1 },
          { text: "The sandpit is _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Location Counts",
        instruction: "Look at each pair of location counts. Circle the group with MORE.",
        pairs: [
          { leftCount: 6, rightCount: 4, object: "book", question: "Which location has more books?" },
          { leftCount: 3, rightCount: 8, object: "ball", question: "Which location has more balls?" },
          { leftCount: 5, rightCount: 5, object: "teddy", question: "Are these locations equal?" },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Position and location are best learnt by moving your body!",
        suggestions: [
          "Play Simon Says with position words: 'Simon says stand BEHIND the chair', 'Simon says put your hands ABOVE your head', 'Simon says sit UNDER the table.'",
          "Hide a toy and give position clues: 'It is ON something, NEXT TO a book, ABOVE the floor.' Can your child find it?",
          "Set up an obstacle course: 'Go OVER the cushion, UNDER the table, AROUND the chair, and BETWEEN the two boxes.'",
          "Describe where things are in photos or picture books together, using as many position words as you can.",
        ],
      },
    ],
  },

  // 12. Collect, sort, compare data
  {
    slug: "collect-sort-data",
    title: "Collect, Sort & Compare Data",
    strand: "Statistics",
    description: "Collect, sort and compare data in response to questions in familiar contexts",
    lesson: {
      title: "Let's Sort, Count and Find Out!",
      objective: "Ask a question, collect data by sorting objects, and compare the groups to answer the question.",
      materials: [
        "A bag of mixed objects — anything works: buttons of different colours, a mix of toy animals and cars, or mixed coins",
        "Paper and pencil",
        "Labels or sticky notes for the categories",
      ],
      intro: {
        title: "Start With a Question",
        script: "Data starts with a question — something we're curious about! Look at this bag of mixed things. What question could we ask? I wonder... do we have more red ones or blue ones? That's what we're going to find out!",
        action: "Tip out the mixed objects together and look at them. Help your child frame a comparison question about the collection (e.g. 'More animals or more cars?'). This is the most important step — show that maths begins with curiosity.",
      },
      mainActivity: {
        title: "Sort, Count and Record",
        script: "Let's sort everything into groups to answer our question. All the red ones here, all the blue ones there. Now count each group and write the number down. Which group has more?",
        action: "Your child sorts the objects into two (or three) categories. Count each group together and write the number. Draw a simple picture graph on paper — one column per category, draw or tally each object. Compare the columns: 'Which column is taller? That group has more!'",
      },
      wrapUp: {
        title: "Answer Our Question",
        script: "Remember the question we asked at the start? Now we can answer it! We found out there are ___ red ones and ___ blue ones — so we have MORE ___. And we KNOW that because we sorted and counted!",
        action: "Your child states the answer to the original question using the data. Ask one or two follow-ups: 'How many more does the bigger group have? How many are there altogether?' Celebrate: 'That's real data science — you collected information and used it to answer a question!'",
      },
    },
    activities: [
      // --- EASY: Sorting into groups ---
      {
        type: "sorting",
        title: "Sort: Animals or Not Animals?",
        instruction: "Sort each thing into the correct column.",
        columns: ["Animals", "Not Animals"],
        items: [
          { label: "Fish", icon: "fish" },
          { label: "Star", icon: "star" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Apple", icon: "apple" },
          { label: "Flower", icon: "flower" },
          { label: "Heart", icon: "heart" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Living or Not Living?",
        instruction: "Sort each thing into the correct column.",
        columns: ["Living Things", "Not Living Things"],
        items: [
          { label: "Cat", icon: "cat" },
          { label: "Rock", icon: "rock" },
          { label: "Bird", icon: "bird" },
          { label: "Cup", icon: "cup" },
          { label: "Tree", icon: "tree" },
          { label: "Ball", icon: "ball" },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Colour",
        instruction: "Sort each thing into the correct colour group.",
        columns: ["Red Things", "Yellow Things", "Blue Things"],
        items: [
          { label: "Apple", icon: "apple" },
          { label: "Sun", icon: "sun" },
          { label: "Sky" },
          { label: "Strawberry" },
          { label: "Banana", icon: "banana" },
          { label: "Ocean" },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Where You Find It",
        instruction: "Sort each thing into the correct column.",
        columns: ["Inside the House", "Outside the House"],
        items: [
          { label: "Bed", icon: "bed" },
          { label: "Tree", icon: "tree" },
          { label: "Cup", icon: "cup" },
          { label: "Sun", icon: "sun" },
          { label: "Spoon", icon: "spoon" },
          { label: "Bird", icon: "bird" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Big or Small?",
        instruction: "Sort each animal into the correct column.",
        columns: ["Big Animals", "Small Animals"],
        items: [
          { label: "Elephant", icon: "elephant" },
          { label: "Ant", icon: "ant" },
          { label: "Horse", icon: "horse" },
          { label: "Mouse", icon: "mouse" },
          { label: "Whale" },
          { label: "Ladybug" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Flies or Does Not Fly?",
        instruction: "Sort each animal into the correct column.",
        columns: ["Can Fly", "Cannot Fly"],
        items: [
          { label: "Bird", icon: "bird" },
          { label: "Dog", icon: "dog" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Fish", icon: "fish" },
          { label: "Elephant", icon: "elephant" },
          { label: "Ant", icon: "ant" },
        ],
      },
      {
        type: "circle-correct",
        title: "How Many in Each Group?",
        instruction: "Look at: Star, Heart, Star, Apple, Star, Heart. Count each type.",
        questions: [
          { prompt: "How many stars?", options: ["2", "3", "4"] },
          { prompt: "How many hearts?", options: ["1", "2", "3"] },
          { prompt: "How many apples?", options: ["0", "1", "2"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Count the Objects",
        instruction: "Look at: Fish, Fish, Flower, Fish, Flower, Star. Count each type.",
        questions: [
          { prompt: "How many fish?", options: ["2", "3", "4"] },
          { prompt: "How many flowers?", options: ["1", "2", "3"] },
          { prompt: "How many stars?", options: ["0", "1", "2"] },
        ],
      },

      // --- EASY: Tally charts ---
      {
        type: "tally-chart",
        title: "Count and Tally -- Stars and Hearts",
        instruction: "Count each type. Make a tally mark for each one. Write the total.",
        categories: [
          { label: "Stars", icon: "star", count: 3 },
          { label: "Hearts", icon: "heart", count: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Count and Tally -- Fish and Flowers",
        instruction: "Count each type. Make a tally mark for each one. Write the total.",
        categories: [
          { label: "Fish", icon: "fish", count: 4 },
          { label: "Flowers", icon: "flower", count: 2 },
        ],
      },
      {
        type: "tally-chart",
        title: "Count and Tally -- Four Objects",
        instruction: "Count each type of object. Make tally marks and write the total.",
        categories: [
          { label: "Stars", icon: "star", count: 4 },
          { label: "Hearts", icon: "heart", count: 3 },
          { label: "Fish", icon: "fish", count: 5 },
          { label: "Flowers", icon: "flower", count: 2 },
        ],
      },
      {
        type: "tally-chart",
        title: "Count and Tally -- Animals",
        instruction: "Count each type of animal. Make tally marks and write the total.",
        categories: [
          { label: "Dogs", icon: "dog", count: 3 },
          { label: "Cats", icon: "cat", count: 5 },
          { label: "Birds", icon: "bird", count: 2 },
          { label: "Fish", icon: "fish", count: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Read the Tally Chart",
        instruction: "Stars: 4, Hearts: 3, Fish: 5, Flowers: 2. Answer the questions.",
        questions: [
          { prompt: "Which has the MOST?", options: ["Stars", "Hearts", "Fish", "Flowers"] },
          { prompt: "Which has the FEWEST?", options: ["Stars", "Hearts", "Fish", "Flowers"] },
          { prompt: "How many stars and hearts together?", options: ["5", "7", "8"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Tally Questions",
        instruction: "Stars: 4, Hearts: 3, Fish: 5, Flowers: 2. Answer the questions.",
        questions: [
          { prompt: "How many objects altogether?", options: ["12", "14", "16"] },
          { prompt: "How many more fish than flowers?", options: ["2", "3", "4"] },
          { prompt: "Are there more stars or hearts?", options: ["Stars", "Hearts", "Same"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Animal Tally Questions",
        instruction: "Dogs: 3, Cats: 5, Birds: 2, Fish: 4. Answer the questions.",
        questions: [
          { prompt: "How many animals altogether?", options: ["12", "14", "16"] },
          { prompt: "How many more cats than birds?", options: ["2", "3", "4"] },
          { prompt: "Are there more dogs or fish?", options: ["Dogs", "Fish", "Same"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Count and Tally -- Shapes",
        instruction: "Count each shape. Make a tally mark for each one. Write the total.",
        categories: [
          { label: "Circles", icon: "circle", count: 4 },
          { label: "Squares", icon: "square", count: 6 },
          { label: "Triangles", icon: "triangle", count: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Shape Tally Questions",
        instruction: "Circles: 4, Squares: 6, Triangles: 3. Answer the questions.",
        questions: [
          { prompt: "Which shape has the MOST?", options: ["Circles", "Squares", "Triangles"] },
          { prompt: "Which shape has the FEWEST?", options: ["Circles", "Squares", "Triangles"] },
          { prompt: "How many shapes altogether?", options: ["11", "13", "15"] },
        ],
      },

      // --- MEDIUM: Collecting data ---
      {
        type: "tally-chart",
        title: "Favourite Fruits",
        instruction: "Ask 4 friends their favourite fruit. Make a tally mark for each answer.",
        categories: [
          { label: "Apple", icon: "apple", count: 0 },
          { label: "Banana", icon: "banana", count: 0 },
          { label: "Strawberry", icon: "heart", count: 0 },
        ],
      },
      {
        type: "tally-chart",
        title: "Favourite Animals",
        instruction: "Ask 4 friends their favourite animal. Make a tally mark for each answer.",
        categories: [
          { label: "Dog", icon: "dog", count: 0 },
          { label: "Cat", icon: "cat", count: 0 },
          { label: "Fish", icon: "fish", count: 0 },
          { label: "Bird", icon: "bird", count: 0 },
        ],
      },
      {
        type: "tally-chart",
        title: "Count the Shapes",
        instruction: "Count each shape. Make tally marks and write the total.",
        categories: [
          { label: "Circles", icon: "circle", count: 6 },
          { label: "Squares", icon: "square", count: 4 },
          { label: "Triangles", icon: "triangle", count: 3 },
          { label: "Diamonds", icon: "diamond", count: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Count the Toys",
        instruction: "Count each toy. Make tally marks and write the total.",
        categories: [
          { label: "Balls", icon: "ball", count: 5 },
          { label: "Teddies", icon: "teddy", count: 3 },
          { label: "Cars", icon: "car", count: 7 },
          { label: "Books", icon: "book", count: 4 },
        ],
      },
      {
        type: "circle-correct",
        title: "Read the Shape Tally",
        instruction: "Circles: 6, Squares: 4, Triangles: 3, Diamonds: 5. Answer the questions.",
        questions: [
          { prompt: "Which shape is there the most of?", options: ["Circles", "Squares", "Triangles", "Diamonds"] },
          { prompt: "Which shape is there the fewest of?", options: ["Circles", "Squares", "Triangles", "Diamonds"] },
          { prompt: "How many shapes altogether?", options: ["16", "18", "20"] },
          { prompt: "How many more circles than triangles?", options: ["2", "3", "4"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Read the Toy Tally",
        instruction: "Balls: 5, Teddies: 3, Cars: 7, Books: 4. Answer the questions.",
        questions: [
          { prompt: "Which toy is there the most of?", options: ["Balls", "Teddies", "Cars", "Books"] },
          { prompt: "Which toy is there the fewest of?", options: ["Balls", "Teddies", "Cars", "Books"] },
          { prompt: "How many toys altogether?", options: ["17", "19", "21"] },
          { prompt: "How many more cars than teddies?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort Into Three Groups",
        instruction: "Sort these items into the correct groups.",
        columns: ["Fruit", "Animals", "Shapes"],
        items: [
          { label: "Apple", icon: "apple" },
          { label: "Fish", icon: "fish" },
          { label: "Star", icon: "star" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Diamond", icon: "diamond" },
          { label: "Flower", icon: "flower" },
        ],
      },

      // --- MEDIUM: Comparing data ---
      {
        type: "circle-correct",
        title: "Compare Two Groups",
        instruction: "Group A has 7 stars. Group B has 4 stars. Answer the questions.",
        questions: [
          { prompt: "Which group has more?", options: ["Group A", "Group B", "Same"] },
          { prompt: "How many more does Group A have?", options: ["2", "3", "4"] },
          { prompt: "How many altogether?", options: ["10", "11", "12"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Compare Two More Groups",
        instruction: "Group A has 5 hearts. Group B has 9 hearts. Answer the questions.",
        questions: [
          { prompt: "Which group has more?", options: ["Group A", "Group B", "Same"] },
          { prompt: "How many more does Group B have?", options: ["3", "4", "5"] },
          { prompt: "How many altogether?", options: ["12", "14", "16"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Pets in Our Class",
        instruction: "Here are the pets children in the class have. Make tally marks and write the total.",
        categories: [
          { label: "Dogs", icon: "dog", count: 8 },
          { label: "Cats", icon: "cat", count: 6 },
          { label: "Fish", icon: "fish", count: 4 },
          { label: "Birds", icon: "bird", count: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Pets Questions",
        instruction: "Dogs: 8, Cats: 6, Fish: 4, Birds: 2. Answer the questions.",
        questions: [
          { prompt: "What is the most popular pet?", options: ["Dogs", "Cats", "Fish", "Birds"] },
          { prompt: "What is the least popular pet?", options: ["Dogs", "Cats", "Fish", "Birds"] },
          { prompt: "How many children have dogs or cats?", options: ["12", "14", "16"] },
          { prompt: "How many more dogs than birds?", options: ["4", "6", "8"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Favourite Drinks",
        instruction: "Here are the favourite drinks chosen by children. Make tally marks and write the total.",
        categories: [
          { label: "Water", icon: "bottle", count: 7 },
          { label: "Juice", icon: "cup", count: 5 },
          { label: "Milk", icon: "bottle", count: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Favourite Drinks Questions",
        instruction: "Water: 7, Juice: 5, Milk: 3. Answer the questions.",
        questions: [
          { prompt: "What is the most popular drink?", options: ["Water", "Juice", "Milk"] },
          { prompt: "What is the least popular drink?", options: ["Water", "Juice", "Milk"] },
          { prompt: "How many children were asked?", options: ["13", "15", "17"] },
          { prompt: "How many more chose water than milk?", options: ["3", "4", "5"] },
        ],
      },

      // --- HARDER: Yes/No surveys ---
      {
        type: "tally-chart",
        title: "Yes or No Survey: Do You Like Ice Cream?",
        instruction: "Ask 6 friends: Do you like ice cream? Tally the Yes and No answers.",
        categories: [
          { label: "Yes", icon: "star", count: 0 },
          { label: "No", icon: "heart", count: 0 },
        ],
      },
      {
        type: "tally-chart",
        title: "Yes or No Survey: Do You Like Swimming?",
        instruction: "Ask 6 friends: Do you like swimming? Tally the Yes and No answers.",
        categories: [
          { label: "Yes", icon: "star", count: 0 },
          { label: "No", icon: "heart", count: 0 },
        ],
      },
      {
        type: "circle-correct",
        title: "Survey Results: Ice Cream",
        instruction: "5 children said Yes, 3 children said No. Answer the questions.",
        questions: [
          { prompt: "How many children were asked?", options: ["5", "8", "10"] },
          { prompt: "Did more children say Yes or No?", options: ["Yes", "No", "Same"] },
          { prompt: "How many more said Yes than No?", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Survey Results: Swimming",
        instruction: "7 children said Yes, 3 children said No. Answer the questions.",
        questions: [
          { prompt: "How many children were asked?", options: ["7", "10", "12"] },
          { prompt: "Did more children say Yes or No?", options: ["Yes", "No", "Same"] },
          { prompt: "How many more said Yes than No?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Survey Results: Favourite Season",
        instruction: "6 children said Summer, 2 said Winter, 4 said Autumn. Answer the questions.",
        questions: [
          { prompt: "How many children were asked?", options: ["10", "12", "14"] },
          { prompt: "Which season was the most popular?", options: ["Summer", "Winter", "Autumn"] },
          { prompt: "How many more chose summer than winter?", options: ["2", "4", "6"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort Foods: Healthy or Treat?",
        instruction: "Sort each food into the correct column.",
        columns: ["Healthy Food", "Treat Food"],
        items: [
          { label: "Apple", icon: "apple" },
          { label: "Lollipop" },
          { label: "Carrot" },
          { label: "Chocolate" },
          { label: "Banana", icon: "banana" },
          { label: "Chips" },
        ],
      },
      {
        type: "sorting",
        title: "Sort Animals: Legs or No Legs?",
        instruction: "Sort each animal into the correct column.",
        columns: ["Has Legs", "No Legs"],
        items: [
          { label: "Dog", icon: "dog" },
          { label: "Snake", icon: "snake" },
          { label: "Cat", icon: "cat" },
          { label: "Fish", icon: "fish" },
          { label: "Horse", icon: "horse" },
          { label: "Bird", icon: "bird" },
        ],
      },

      // --- HARDER: Reading data displays ---
      {
        type: "picture-graph",
        title: "How We Get to School -- Picture Graph",
        instruction: "Each picture means 1 child. Count the pictures and answer the questions.",
        rows: [
          { label: "Walked", icon: "star", count: 5 },
          { label: "Drove", icon: "car", count: 3 },
          { label: "Bus", icon: "car", count: 2 },
        ],
        questions: [
          "How many children walked? ___",
          "How many children took the bus? ___",
          "How many children altogether? ___",
          "What was the most common way to get to school? ___",
        ],
      },
      {
        type: "circle-correct",
        title: "Reading a Picture Graph",
        instruction: "Each star = 1 child. Walked to school: 5 stars. Drove: 3 stars. Bus: 2 stars.",
        questions: [
          { prompt: "How many children walked?", options: ["3", "5", "7"] },
          { prompt: "How many children took the bus?", options: ["2", "3", "5"] },
          { prompt: "How many children altogether?", options: ["8", "10", "12"] },
          { prompt: "What was the most common way to get to school?", options: ["Walked", "Drove", "Bus"] },
        ],
      },
      {
        type: "picture-graph",
        title: "Playground Games -- Picture Graph",
        instruction: "Each picture means 1 child chose that game. Count the pictures and answer the questions.",
        rows: [
          { label: "Tag", icon: "star", count: 6 },
          { label: "Hide and Seek", icon: "heart", count: 4 },
          { label: "Ball Games", icon: "ball", count: 7 },
          { label: "Climbing", icon: "tree", count: 3 },
        ],
        questions: [
          "How many children chose tag? ___",
          "How many children chose ball games? ___",
          "Which game is the most popular? ___",
          "Which game is the least popular? ___",
          "How many more chose ball games than climbing? ___",
          "How many children were asked altogether? ___",
        ],
      },
      {
        type: "circle-correct",
        title: "Playground Games Questions",
        instruction: "Tag: 6, Hide and Seek: 4, Ball Games: 7, Climbing: 3. Answer the questions.",
        questions: [
          { prompt: "Which game is the most popular?", options: ["Tag", "Hide and Seek", "Ball Games", "Climbing"] },
          { prompt: "Which game is the least popular?", options: ["Tag", "Hide and Seek", "Ball Games", "Climbing"] },
          { prompt: "How many children chose tag or hide and seek?", options: ["8", "10", "12"] },
          { prompt: "How many more chose ball games than climbing?", options: ["3", "4", "5"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Weather This Week",
        instruction: "This week the weather was: Sunny, Sunny, Rainy, Sunny, Cloudy. Tally each type.",
        categories: [
          { label: "Sunny", icon: "sun", count: 3 },
          { label: "Rainy", icon: "diamond", count: 1 },
          { label: "Cloudy", icon: "circle", count: 1 },
        ],
      },
      {
        type: "tally-chart",
        title: "Weather Last Week",
        instruction: "Last week the weather was: Rainy, Sunny, Rainy, Rainy, Cloudy, Sunny, Rainy. Tally each type.",
        categories: [
          { label: "Sunny", icon: "sun", count: 2 },
          { label: "Rainy", icon: "diamond", count: 4 },
          { label: "Cloudy", icon: "circle", count: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Weather Questions -- This Week",
        instruction: "Sunny: 3 days, Rainy: 1 day, Cloudy: 1 day. Answer the questions.",
        questions: [
          { prompt: "What was the most common weather?", options: ["Sunny", "Rainy", "Cloudy"] },
          { prompt: "How many days of data?", options: ["3", "5", "7"] },
          { prompt: "Were there more sunny days or rainy days?", options: ["Sunny", "Rainy", "Same"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Weather Questions -- Last Week",
        instruction: "Sunny: 2 days, Rainy: 4 days, Cloudy: 1 day. Answer the questions.",
        questions: [
          { prompt: "What was the most common weather?", options: ["Sunny", "Rainy", "Cloudy"] },
          { prompt: "How many days of data?", options: ["5", "7", "9"] },
          { prompt: "How many more rainy days than sunny days?", options: ["1", "2", "3"] },
        ],
      },
      {
        type: "picture-graph",
        title: "Lunchbox Items -- Picture Graph",
        instruction: "Each picture means 1 child brought that item. Count the pictures and answer the questions.",
        rows: [
          { label: "Sandwich", icon: "square", count: 8 },
          { label: "Fruit", icon: "apple", count: 6 },
          { label: "Biscuit", icon: "circle", count: 3 },
          { label: "Yoghurt", icon: "cup", count: 5 },
        ],
        questions: [
          "How many children brought a sandwich? ___",
          "How many children brought fruit? ___",
          "Which item was brought the most? ___",
          "Which item was brought the least? ___",
          "How many more brought sandwiches than biscuits? ___",
          "How many children were counted altogether? ___",
        ],
      },
      {
        type: "circle-correct",
        title: "Lunchbox Items Questions",
        instruction: "Sandwich: 8, Fruit: 6, Biscuit: 3, Yoghurt: 5. Answer the questions.",
        questions: [
          { prompt: "Which item did the most children bring?", options: ["Sandwich", "Fruit", "Biscuit", "Yoghurt"] },
          { prompt: "Which item did the fewest children bring?", options: ["Sandwich", "Fruit", "Biscuit", "Yoghurt"] },
          { prompt: "How many children brought fruit or yoghurt?", options: ["9", "11", "13"] },
          { prompt: "How many more brought sandwiches than yoghurt?", options: ["2", "3", "4"] },
        ],
      },

      // --- CHALLENGE: Asking questions about data ---
      {
        type: "circle-correct",
        title: "What Question Could We Ask?",
        instruction: "We want to sort the class into groups. Circle the BEST question to ask.",
        questions: [
          { prompt: "To find out favourite colours, we should ask:", options: ["What is your favourite colour?", "Do you like red?", "How old are you?"] },
          { prompt: "To find out how children get to school, we should ask:", options: ["Do you like school?", "How do you get to school?", "What is your name?"] },
          { prompt: "To find out favourite animals, we should ask:", options: ["Do you have a pet?", "What is your favourite animal?", "How many legs do cats have?"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Questions About Data",
        instruction: "Circle the BEST question to ask to collect useful data.",
        questions: [
          { prompt: "To find out favourite sports, we should ask:", options: ["What is your favourite sport?", "Do you like running?", "How tall are you?"] },
          { prompt: "To find out what people eat for breakfast, we should ask:", options: ["Do you like cereal?", "What did you eat for breakfast today?", "What time do you wake up?"] },
          { prompt: "To find out favourite seasons, we should ask:", options: ["What is your favourite season?", "Is it cold today?", "Do you like rain?"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Favourite Colours",
        instruction: "Red: 6, Blue: 8, Green: 4, Yellow: 2. Make tally marks and write totals.",
        categories: [
          { label: "Red", icon: "heart", count: 6 },
          { label: "Blue", icon: "diamond", count: 8 },
          { label: "Green", icon: "flower", count: 4 },
          { label: "Yellow", icon: "star", count: 2 },
        ],
      },
      {
        type: "circle-correct",
        title: "Favourite Colours Questions",
        instruction: "Red: 6, Blue: 8, Green: 4, Yellow: 2. Answer the questions.",
        questions: [
          { prompt: "What is the most popular colour?", options: ["Red", "Blue", "Green", "Yellow"] },
          { prompt: "What is the least popular colour?", options: ["Red", "Blue", "Green", "Yellow"] },
          { prompt: "How many children chose red or blue?", options: ["12", "14", "16"] },
          { prompt: "How many more chose blue than yellow?", options: ["4", "6", "8"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Favourite Seasons",
        instruction: "Summer: 9, Winter: 3, Autumn: 4, Spring: 6. Make tally marks and write totals.",
        categories: [
          { label: "Summer", icon: "sun", count: 9 },
          { label: "Winter", icon: "diamond", count: 3 },
          { label: "Autumn", icon: "flower", count: 4 },
          { label: "Spring", icon: "butterfly", count: 6 },
        ],
      },
      {
        type: "circle-correct",
        title: "Favourite Seasons Questions",
        instruction: "Summer: 9, Winter: 3, Autumn: 4, Spring: 6. Answer the questions.",
        questions: [
          { prompt: "What is the most popular season?", options: ["Summer", "Winter", "Autumn", "Spring"] },
          { prompt: "What is the least popular season?", options: ["Summer", "Winter", "Autumn", "Spring"] },
          { prompt: "How many children chose summer or spring?", options: ["13", "15", "17"] },
          { prompt: "How many more chose summer than winter?", options: ["4", "6", "8"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Data Challenge",
        instruction: "Think carefully about data! Circle the best answer.",
        questions: [
          { prompt: "Why do we collect data?", options: ["To answer questions", "To draw pictures", "To count to 100"] },
          { prompt: "What is a tally mark?", options: ["A type of counting mark", "A type of shape", "A colour"] },
          { prompt: "If 10 children were asked and 6 said Yes, how many said No?", options: ["3", "4", "6"] },
          { prompt: "Which is the best way to show how many of each fruit people like?", options: ["A tally chart", "A story", "A song"] },
        ],
      },
      {
        type: "circle-correct",
        title: "More Data Challenges",
        instruction: "Think carefully about data! Circle the best answer.",
        questions: [
          { prompt: "What is a picture graph?", options: ["A chart that uses pictures to show data", "A drawing of your pet", "A type of story"] },
          { prompt: "If 12 children were asked and 5 said Yes, how many said No?", options: ["5", "7", "12"] },
          { prompt: "Which is the best way to compare two groups?", options: ["Count each group and compare the numbers", "Just guess which is bigger", "Pick your favourite"] },
          { prompt: "What should you do before collecting data?", options: ["Think of a good question to ask", "Draw a picture", "Count to 20"] },
        ],
      },
      // --- Improvement: More data collection (hands-on) ---
      {
        type: "open-response",
        title: "Collect Your Own Data!",
        instruction: "Go and find out! Ask people or look around your home to collect this data.",
        prompts: [
          { text: "Ask 5 people: What is your favourite fruit? Write their answers here:", type: "lines", lines: 3 },
          { text: "Which fruit was chosen the most? ___", type: "lines", lines: 1 },
          { text: "Which fruit was chosen the least? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Count Things in Your Home",
        instruction: "Walk around your home and count these things. Write the numbers.",
        prompts: [
          { text: "How many doors? ___", type: "lines", lines: 1 },
          { text: "How many windows? ___", type: "lines", lines: 1 },
          { text: "How many chairs? ___", type: "lines", lines: 1 },
          { text: "Which did you find the most of? ___", type: "lines", lines: 1 },
          { text: "Which did you find the fewest of? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "tally-chart",
        title: "Survey: How Do You Get to School?",
        instruction: "Ask friends or family: How do children get to school? Make a tally for each answer.",
        categories: [
          { label: "Walk", icon: "star", count: 0 },
          { label: "Car", icon: "car", count: 0 },
          { label: "Bus", icon: "car", count: 0 },
          { label: "Bike", icon: "flower", count: 0 },
        ],
      },
      {
        type: "tally-chart",
        title: "Survey: What Is Your Favourite Toy?",
        instruction: "Ask friends or family: What is your favourite toy? Make a tally for each answer.",
        categories: [
          { label: "Ball", icon: "ball", count: 0 },
          { label: "Teddy", icon: "teddy", count: 0 },
          { label: "Car", icon: "car", count: 0 },
          { label: "Book", icon: "book", count: 0 },
        ],
      },
      // --- Improvement: Picture graph ---
      {
        type: "picture-graph",
        title: "Favourite Fruits Picture Graph",
        instruction: "Each picture means 1 child chose that fruit. Count the pictures and answer the questions.",
        rows: [
          { label: "Apples", icon: "apple", count: 6 },
          { label: "Bananas", icon: "banana", count: 3 },
          { label: "Strawberries", icon: "heart", count: 8 },
          { label: "Oranges", icon: "star", count: 2 },
        ],
        questions: [
          "How many children chose apples? ___",
          "How many children chose strawberries? ___",
          "Which fruit is the most popular? ___",
          "Which fruit is the least popular? ___",
          "How many more chose strawberries than bananas? ___",
          "How many children were asked altogether? ___",
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Animals Picture Graph",
        instruction: "Each picture means 1 child chose that animal. Count the pictures and answer the questions.",
        rows: [
          { label: "Dogs", icon: "dog", count: 7 },
          { label: "Cats", icon: "cat", count: 5 },
          { label: "Birds", icon: "bird", count: 3 },
          { label: "Fish", icon: "fish", count: 4 },
        ],
        questions: [
          "How many children chose dogs? ___",
          "How many children chose cats? ___",
          "Which animal is the most popular? ___",
          "Which animal is the least popular? ___",
          "How many more chose dogs than birds? ___",
          "How many children were asked altogether? ___",
        ],
      },
      // --- Improvement: "What does data tell us?" reasoning ---
      {
        type: "circle-correct",
        title: "What Can We Learn from Data?",
        instruction: "Think about what the data tells us. Circle the best answer.",
        questions: [
          { prompt: "If most children walk to school, what does that tell us?", options: ["The school is probably close by", "Nobody drives cars", "Walking is faster"] },
          { prompt: "If 8 children like strawberries and only 2 like oranges, we can say:", options: ["Strawberries are more popular", "Oranges taste bad", "Everyone likes strawberries"] },
          { prompt: "If it was sunny 5 days and rainy 2 days, we can say:", options: ["It was a mostly sunny week", "It never rains", "The sun is better"] },
        ],
      },
      {
        type: "open-response",
        title: "Think About Data",
        instruction: "Answer these questions about collecting and using data.",
        prompts: [
          { text: "Why is it useful to collect data? (What can we learn?)", type: "lines", lines: 2 },
          { text: "Think of a question you could ask your friends to collect data:", type: "lines", lines: 2 },
          { text: "How would you show the answers? (e.g., tally chart, picture graph)", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Plan Your Own Survey",
        instruction: "Think of a survey you could do. Plan it out below.",
        prompts: [
          { text: "What question would you ask? ___", type: "lines", lines: 2 },
          { text: "Who would you ask? (e.g., family, friends, classmates) ___", type: "lines", lines: 1 },
          { text: "How many people would you ask? ___", type: "lines", lines: 1 },
          { text: "What answers do you think you might get? ___", type: "lines", lines: 2 },
        ],
      },
      // --- Additional activities ---
      {
        type: "tally-chart",
        title: "Tally the Fruit",
        instruction: "Each tally mark stands for one piece of fruit. Count the tallies and write the total.",
        categories: [
          { label: "Apple", icon: "apple", count: 4 },
          { label: "Banana", icon: "banana", count: 3 },
          { label: "Grape", icon: "grape", count: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Tally the Animals",
        instruction: "Count the tally marks. Write the total for each animal.",
        categories: [
          { label: "Cat", icon: "cat", count: 2 },
          { label: "Dog", icon: "dog", count: 6 },
          { label: "Bird", icon: "bird", count: 4 },
          { label: "Fish", icon: "fish", count: 3 },
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Shapes",
        instruction: "This graph shows children's favourite shapes. Answer the questions below.",
        rows: [
          { label: "Circle", icon: "circle", count: 5 },
          { label: "Star", icon: "star", count: 3 },
          { label: "Triangle", icon: "triangle", count: 4 },
          { label: "Heart", icon: "heart", count: 2 },
        ],
        questions: [
          "Which shape is the most popular?",
          "Which shape has the fewest votes?",
          "How many more children prefer circles than hearts?",
        ],
      },
      {
        type: "picture-graph",
        title: "Pets at Home",
        instruction: "This graph shows what pets children have at home. Answer the questions.",
        rows: [
          { label: "Dog", icon: "dog", count: 6 },
          { label: "Cat", icon: "cat", count: 4 },
          { label: "Fish", icon: "fish", count: 3 },
          { label: "Bird", icon: "bird", count: 2 },
        ],
        questions: [
          "How many children have a dog?",
          "Which pet do the fewest children have?",
          "How many children were asked in total?",
        ],
      },
      {
        type: "sorting",
        title: "Sort: Living or Not Living?",
        instruction: "Sort each item into the correct column.",
        columns: ["Living", "Not Living"],
        items: [
          { label: "Cat", icon: "cat" },
          { label: "Rock", icon: "rock" },
          { label: "Tree", icon: "tree" },
          { label: "Car", icon: "car" },
          { label: "Fish", icon: "fish" },
          { label: "Book", icon: "book" },
        ],
      },
      {
        type: "sorting",
        title: "Sort: Big or Small?",
        instruction: "Think about the real size of each object. Sort it into the correct group.",
        columns: ["Big", "Small"],
        items: [
          { label: "House", icon: "house" },
          { label: "Ant", icon: "ant" },
          { label: "Car", icon: "car" },
          { label: "Apple", icon: "apple" },
          { label: "Elephant", icon: "elephant" },
          { label: "Butterfly", icon: "butterfly" },
        ],
      },
      {
        type: "circle-correct",
        title: "Reading a Tally Chart",
        instruction: "Use what you know about tally marks to answer each question.",
        questions: [
          { prompt: "If there are 4 tally marks, how many does that equal?", options: ["3", "4", "5"] },
          { prompt: "Five tallies are written as 4 marks and 1 diagonal cross. How many is that?", options: ["4", "5", "6"] },
          { prompt: "Which is easier to count quickly — 10 individual marks or 2 groups of 5?", options: ["10 marks", "2 groups of 5", "They are the same"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Tally to the Number",
        instruction: "Draw a line from each tally group to the correct number.",
        left: ["| | |", "| | | |", "||||", "| |"],
        right: ["4", "2", "5", "3"],
      },
      {
        type: "open-response",
        title: "Collect Your Own Data",
        instruction: "Ask 5 people in your family a question. Record their answers using tally marks.",
        prompts: [
          { text: "My question: _______________", type: "lines", lines: 1 },
          { text: "Record answers using tally marks:", type: "box" },
          { text: "The most popular answer was: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Shows the Data Best?",
        instruction: "Circle the best answer for each question about displaying data.",
        questions: [
          { prompt: "You want to show how many cats, dogs, and fish friends have. Which is best?", options: ["A list of names", "A picture graph", "A number sentence"] },
          { prompt: "You collected 20 answers. The easiest way to count them is:", options: ["Tally marks in groups of 5", "Write each answer again", "Draw each person"] },
          { prompt: "A picture graph shows each item with:", options: ["A number only", "A picture for each one", "Words only"] },
        ],
      },
      {
        type: "count-objects",
        title: "Count the Data Objects",
        instruction: "Count the objects in each row. These represent data collected about favourite things.",
        rows: [
          { object: "star", count: 7 },
          { object: "heart", count: 4 },
          { object: "flower", count: 6 },
        ],
      },
      {
        type: "ten-frame",
        title: "Ten Frame Data",
        instruction: "Each ten frame shows how many children chose a favourite colour. Count and write the total.",
        frames: [
          { filled: 7, total: 10 },
          { filled: 4, total: 10 },
          { filled: 9, total: 10 },
        ],
      },
      {
        type: "sequence",
        title: "Order Data from Least to Most",
        instruction: "Write 1st, 2nd, 3rd, 4th to order these amounts from least to most.",
        items: [
          { label: "5 votes" },
          { label: "2 votes" },
          { label: "8 votes" },
          { label: "3 votes" },
        ],
      },
      {
        type: "open-response",
        title: "Write About a Graph",
        instruction: "Imagine a picture graph shows: 6 children like dogs, 3 like cats, 4 like fish. Answer the questions.",
        prompts: [
          { text: "Which animal is most popular? ___", type: "lines", lines: 1 },
          { text: "Which animal is least popular? ___", type: "lines", lines: 1 },
          { text: "How many more children like dogs than cats? ___", type: "lines", lines: 1 },
          { text: "How many children were asked altogether? ___", type: "lines", lines: 1 },
        ],
      },
      {
        type: "compare-groups",
        title: "Compare Data Groups",
        instruction: "Look at each pair of data amounts. Circle the group with MORE.",
        pairs: [
          { leftCount: 7, rightCount: 4, object: "star", question: "Which group got more votes?" },
          { leftCount: 3, rightCount: 8, object: "heart", question: "Which group got more votes?" },
          { leftCount: 5, rightCount: 5, object: "flower", question: "Are these groups equal?" },
        ],
      },
      {
        type: "number-bonds",
        title: "Data Number Bonds",
        instruction: "Use these bonds to work out the totals from data collected.",
        bonds: [
          { total: 10, partA: 6, partB: null },
          { total: 9, partA: null, partB: 4 },
          { total: 7, partA: 3, partB: null },
          { total: 8, partA: null, partB: 5 },
        ],
      },
      {
        type: "circle-correct",
        title: "Data Words Quiz",
        instruction: "Circle the correct meaning for each data word.",
        questions: [
          { prompt: "What does 'most popular' mean?", options: ["The least chosen", "The most chosen", "The middle amount"] },
          { prompt: "What does 'least popular' mean?", options: ["The most chosen", "The fewest chose it", "Everyone chose it"] },
          { prompt: "If two things have the same count, they are...", options: ["different", "equal", "more"] },
        ],
      },
      {
        type: "tally-chart",
        title: "Tally the Weather",
        instruction: "Count the tally marks for each type of weather recorded last week. Write the total.",
        categories: [
          { label: "Sunny", icon: "sun", count: 4 },
          { label: "Cloudy", icon: "moon", count: 2 },
          { label: "Rainy", icon: "tree", count: 1 },
        ],
      },
      {
        type: "open-response",
        title: "Make Your Own Survey",
        instruction: "Create your own survey question. Ask 4 people and record results.",
        prompts: [
          { text: "My question: _______________", type: "lines", lines: 1 },
          { text: "Choice A: ___ votes | Choice B: ___ votes | Choice C: ___ votes", type: "lines", lines: 1 },
          { text: "The winner is: _______________", type: "lines", lines: 1 },
        ],
      },
      {
        type: "picture-graph",
        title: "Favourite Colours",
        instruction: "This graph shows how many children chose each colour. Answer the questions.",
        rows: [
          { label: "Red", icon: "heart", count: 4 },
          { label: "Blue", icon: "circle", count: 6 },
          { label: "Yellow", icon: "star", count: 3 },
          { label: "Green", icon: "tree", count: 5 },
        ],
        questions: [
          "Which colour was chosen most?",
          "How many more chose blue than yellow?",
          "How many children were asked altogether?",
        ],
      },
      {
        type: "matching",
        title: "Match Data Questions to Answers",
        instruction: "Draw a line to match each data question to the correct answer.",
        left: ["Which is most?", "Which is fewest?", "Are they equal?", "How many altogether?"],
        right: ["Add all the counts", "The smallest count", "When counts are the same", "The biggest count"],
      },
      {
        type: "circle-correct",
        title: "Using Graphs to Answer Questions",
        instruction: "A graph shows: stars = 5, hearts = 3, flowers = 7. Circle the correct answer.",
        questions: [
          { prompt: "Which category has the most?", options: ["Stars", "Hearts", "Flowers"] },
          { prompt: "Which category has the fewest?", options: ["Stars", "Hearts", "Flowers"] },
          { prompt: "How many stars and hearts altogether?", options: ["7", "8", "10"] },
          { prompt: "How many more flowers than hearts?", options: ["3", "4", "5"] },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Data is all about asking questions and finding out answers!",
        suggestions: [
          "Run a family survey: 'What is everyone's favourite dinner?' Make a tally chart together and discuss the results.",
          "Count the colours of cars that pass your house in 10 minutes. Sort them and find which colour is most common.",
          "Make a picture graph using stickers or stamps -- each sticker represents one person's answer to your question.",
          "Look at the weather each day for a week. Record sunny/rainy/cloudy on a chart. At the end, discuss: 'What was the most common weather this week?'",
          "Sort your toys into groups (soft toys, cars, building blocks, etc.) and count how many are in each group. Which group has the most?",
          "Ask family members their favourite animal and make a tally chart. Draw a picture graph to show the results.",
        ],
      },
    ],
  },
];

export function getFoundationWorksheet(slug: string): WorksheetItem | undefined {
  return foundationMathsWorksheets.find((w) => w.slug === slug);
}
