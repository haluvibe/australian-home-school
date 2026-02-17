import type { WorksheetItem } from "./worksheet-types";

export const foundationMathsWorksheets: WorksheetItem[] = [
  // 1. Number names 0-20
  {
    slug: "number-names-0-20",
    title: "Number Names & Numerals 0–20",
    strand: "Number",
    description: "Connect number names, numerals and their position in sequence from 0 to 20",
    activities: [
      // --- EASY: Trace & recognise 0-5 ---
      {
        type: "number-trace",
        title: "Trace Numbers 0–5",
        instruction: "Use your pencil to trace over each dotted number. Say the number out loud!",
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
          { prompt: "How many? ⭐⭐", options: ["1", "2", "3"] },
          { prompt: "How many? ⭐⭐⭐⭐", options: ["3", "5", "4"] },
          { prompt: "How many? ⭐", options: ["0", "1", "2"] },
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
      // --- EASY: Trace & recognise 6-10 ---
      {
        type: "number-trace",
        title: "Trace Numbers 6–10",
        instruction: "Trace over each dotted number carefully. Try to stay on the lines!",
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
        type: "matching",
        title: "Match Numbers 1–5",
        instruction: "Draw a line to match each number word to its numeral.",
        left: ["four", "five", "one", "two", "three"],
        right: ["2", "4", "3", "1", "5"],
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
      // --- MEDIUM: Trace & recognise 11-15 ---
      {
        type: "number-trace",
        title: "Trace Numbers 11–15",
        instruction: "These are the teen numbers! Trace each one carefully.",
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
        type: "count-objects",
        title: "Count the Diamonds",
        instruction: "Count the diamonds. Write how many there are.",
        rows: [
          { object: "diamond", count: 14 },
          { object: "diamond", count: 11 },
          { object: "diamond", count: 15 },
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
    ],
  },

  // 2. Subitising and counting
  {
    slug: "subitising-counting",
    title: "Subitising & Counting",
    strand: "Number",
    description: "Use subitising and counting strategies to quantify collections",
    activities: [
      // --- EASY: Subitise tiny groups 1-3 ---
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
        type: "circle-correct",
        title: "Quick! How Many?",
        instruction: "Look at the picture quickly. Circle the right number.",
        questions: [
          { prompt: "🍎", options: ["1", "2", "3"] },
          { prompt: "🍎🍎🍎", options: ["2", "3", "4"] },
          { prompt: "🍎🍎", options: ["1", "2", "3"] },
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
      // --- EASY: Subitise groups of 4-5 ---
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
        type: "circle-correct",
        title: "Subitise! How Many Do You See?",
        instruction: "Try to see the number WITHOUT counting one by one. Circle your answer.",
        questions: [
          { prompt: "⭐⭐⭐⭐", options: ["3", "4", "5"] },
          { prompt: "⭐⭐⭐⭐⭐", options: ["4", "5", "6"] },
          { prompt: "⭐⭐⭐", options: ["2", "4", "3"] },
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
        type: "matching",
        title: "Match Groups 1–5",
        instruction: "Draw a line from each group to the matching number.",
        left: ["● ●", "● ● ● ●", "● ● ● ● ●", "●", "● ● ●"],
        right: ["5", "1", "2", "3", "4"],
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
      // --- MEDIUM: Count groups of 6-8 ---
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
          { prompt: "🐟🐟🐟🐟🐟🐟", options: ["5", "6", "7"] },
          { prompt: "🐟🐟🐟🐟🐟🐟🐟🐟", options: ["7", "8", "9"] },
          { prompt: "🐟🐟🐟🐟🐟🐟🐟", options: ["6", "7", "8"] },
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
        type: "matching",
        title: "Match Groups to Numbers (Big!)",
        instruction: "Draw a line to match each dot group to its number.",
        left: ["● ● ● ● ●", "● ● ● ● ● ● ●", "● ● ● ● ● ●", "● ● ● ● ● ● ● ●"],
        right: ["8", "5", "7", "6"],
      },
      // --- MEDIUM: Count groups of 9-12 ---
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
        type: "circle-correct",
        title: "How Many? (Getting Bigger!)",
        instruction: "Count carefully and circle the right number.",
        questions: [
          { prompt: "🌸🌸🌸🌸🌸🌸🌸🌸🌸", options: ["8", "9", "10"] },
          { prompt: "🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸", options: ["9", "10", "11"] },
          { prompt: "🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸", options: ["10", "11", "12"] },
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
          { prompt: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐", options: ["9", "10", "11"] },
          { prompt: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐", options: ["11", "12", "13"] },
          { prompt: "⭐⭐⭐⭐⭐⭐⭐⭐⭐", options: ["8", "9", "10"] },
        ],
      },
      // --- HARDER: Count groups of 13-16 ---
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
          { prompt: "🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋", options: ["12", "13", "14"] },
          { prompt: "🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋", options: ["14", "15", "16"] },
          { prompt: "🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋", options: ["13", "14", "15"] },
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
        type: "matching",
        title: "Match Big Groups",
        instruction: "Count each group and match it to the correct number.",
        left: ["13 stars", "15 stars", "10 stars", "16 stars"],
        right: ["15", "10", "16", "13"],
      },
      // --- CHALLENGE: Count groups of 17-20 ---
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
    ],
  },

  // 3. Compare collections
  {
    slug: "compare-collections",
    title: "Compare Collections",
    strand: "Number",
    description: "Compare the size of collections to at least 20",
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
        title: "Which Group Has Fewer? (Tiny Groups)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 3, rightCount: 1, object: "fish", question: "Which group has fewer fish?" },
          { leftCount: 2, rightCount: 4, object: "flower", question: "Which group has fewer flowers?" },
          { leftCount: 5, rightCount: 3, object: "butterfly", question: "Which group has fewer butterflies?" },
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
        title: "Count and Compare Hearts",
        instruction: "Count each group of hearts. Write the number. Then circle the group with FEWER.",
        groups: [
          { objects: Array(5).fill("heart"), label: "Group A" },
          { objects: Array(3).fill("heart"), label: "Group B" },
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
        type: "count-objects",
        title: "Which Basket Has More Apples?",
        instruction: "Count the apples in each basket. Write the number. Circle the basket with MORE apples.",
        groups: [
          { objects: Array(3).fill("apple"), label: "Basket A" },
          { objects: Array(5).fill("apple"), label: "Basket B" },
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
        title: "Which Group Has Fewer? (Up to 10)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 8, rightCount: 6, object: "heart", question: "Which group has fewer hearts?" },
          { leftCount: 3, rightCount: 7, object: "butterfly", question: "Which group has fewer butterflies?" },
          { leftCount: 10, rightCount: 5, object: "flower", question: "Which group has fewer flowers?" },
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
        title: "Count and Compare Fish",
        instruction: "Count the fish in each pond. Write the number. Circle the pond with FEWER fish.",
        groups: [
          { objects: Array(6).fill("fish"), label: "Pond A" },
          { objects: Array(9).fill("fish"), label: "Pond B" },
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
        type: "compare-groups",
        title: "Biggest Group",
        instruction: "Look at all three groups. Circle the group that has the MOST.",
        pairs: [
          { leftCount: 4, rightCount: 9, object: "star", question: "Which has the most?" },
          { leftCount: 7, rightCount: 3, object: "diamond", question: "Which has the most?" },
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
        type: "count-objects",
        title: "Three Groups of Butterflies",
        instruction: "Count the butterflies in each group. Write the numbers. Circle the group with the MOST.",
        groups: [
          { objects: Array(5).fill("butterfly"), label: "Group A" },
          { objects: Array(8).fill("butterfly"), label: "Group B" },
          { objects: Array(3).fill("butterfly"), label: "Group C" },
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
        title: "Which Group Has Fewer? (Bigger Numbers)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 13, rightCount: 10, object: "fish", question: "Which group has fewer fish?" },
          { leftCount: 7, rightCount: 12, object: "flower", question: "Which group has fewer flowers?" },
          { leftCount: 16, rightCount: 11, object: "diamond", question: "Which group has fewer diamonds?" },
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
        title: "Three Big Groups",
        instruction: "Count each group. Write the numbers. Circle the group with the FEWEST.",
        groups: [
          { objects: Array(10).fill("heart"), label: "Group A" },
          { objects: Array(6).fill("heart"), label: "Group B" },
          { objects: Array(13).fill("heart"), label: "Group C" },
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
        title: "Which Group Has Fewer? (Up to 20)",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 18, rightCount: 12, object: "heart", question: "Which group has fewer hearts?" },
          { leftCount: 15, rightCount: 20, object: "diamond", question: "Which group has fewer diamonds?" },
          { leftCount: 11, rightCount: 17, object: "fish", question: "Which group has fewer fish?" },
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
        title: "Order from Biggest to Smallest",
        instruction: "Write these numbers in order from biggest to smallest.",
        sequences: [
          { items: [4, 9, 1], answer: [9, 4, 1] },
          { items: [16, 8, 19], answer: [19, 16, 8] },
          { items: [13, 20, 6], answer: [20, 13, 6] },
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
    activities: [
      // --- EASY: Number bonds to 5 ---
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

      // --- MEDIUM: Number bonds to 7 ---
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
        title: "Split the Diamonds into Two Groups",
        instruction: "Here are 7 diamonds. They are split into two groups. Count each group.",
        groups: [
          { objects: Array(5).fill("diamond"), label: "Part A" },
          { objects: Array(2).fill("diamond"), label: "Part B" },
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

      // --- HARDER: Number bonds to 9 ---
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
        title: "Two Groups Make 9",
        instruction: "Count the objects in each group. Together they make 9!",
        groups: [
          { objects: Array(6).fill("butterfly"), label: "Group A" },
          { objects: Array(3).fill("butterfly"), label: "Group B" },
        ],
      },

      // --- CHALLENGE: Number bonds to 10, multiple ways ---
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
        type: "count-objects",
        title: "Split 10 Stars Two Ways",
        instruction: "Here are 10 stars split into two groups. Count each group and write the numbers.",
        groups: [
          { objects: Array(7).fill("star"), label: "Group A" },
          { objects: Array(3).fill("star"), label: "Group B" },
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
    ],
  },

  // 5. Add, subtract, share
  {
    slug: "add-subtract-share",
    title: "Adding, Subtracting & Sharing",
    strand: "Number",
    description: "Represent adding to, taking away from, and equal sharing with collections to at least 10",
    activities: [
      {
        type: "count-objects",
        title: "Picture Addition",
        instruction: "Count all the objects in each row. Write the total.",
        rows: [
          { object: "star", count: 3 },
          { object: "apple", count: 6 },
          { object: "heart", count: 8 },
        ],
      },
      {
        type: "circle-correct",
        title: "Take Away",
        instruction: "Solve each subtraction problem.",
        questions: [
          { prompt: "5 apples, take away 2 = ___", options: ["3", "2", "4"] },
          { prompt: "8 stars, take away 3 = ___", options: ["6", "4", "5"] },
          { prompt: "10 fish, take away 4 = ___", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "number-bonds",
        title: "Equal Sharing",
        instruction: "Share equally! If you have the total, how many does each group get?",
        bonds: [
          { total: 6, partA: null, partB: null },
          { total: 8, partA: null, partB: null },
          { total: 10, partA: null, partB: null },
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
    activities: [
      {
        type: "pattern",
        title: "Continue the Pattern",
        instruction: "Look at the pattern. Draw what comes next in the empty boxes.",
        rows: [
          { sequence: ["star", "heart", "star", "heart", "star", null, null], unitLength: 2 },
          { sequence: ["apple", "apple", "fish", "apple", "apple", null, null], unitLength: 3 },
          { sequence: ["circle", "square", "triangle", "circle", "square", null, null], unitLength: 3 },
        ],
      },
      {
        type: "circle-correct",
        title: "Find the Repeating Unit",
        instruction: "What part of the pattern repeats? Circle the answer.",
        questions: [
          { prompt: "🔴🔵🔴🔵🔴🔵 — the repeating unit is:", options: ["🔴🔵", "🔴🔵🔴", "🔴"] },
          { prompt: "⭐🌙⭐🌙⭐🌙 — the repeating unit is:", options: ["⭐", "⭐🌙", "🌙⭐🌙"] },
          { prompt: "🟢🟢🔴🟢🟢🔴 — the repeating unit is:", options: ["🟢🔴", "🟢🟢🔴", "🟢"] },
        ],
      },
      {
        type: "pattern",
        title: "Create Your Own Pattern",
        instruction: "Create a pattern using these shapes. Draw it in the boxes.",
        rows: [
          { sequence: [null, null, null, null, null, null, null], unitLength: 2 },
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
    activities: [
      {
        type: "sorting",
        title: "Heavy or Light?",
        instruction: "Sort each item into the correct column.",
        columns: ["Heavy", "Light"],
        items: [
          { label: "Feather" },
          { label: "Car" },
          { label: "Book" },
          { label: "Leaf" },
          { label: "Table" },
          { label: "Pencil" },
        ],
      },
      {
        type: "sorting",
        title: "Full or Empty?",
        instruction: "Sort each item into the correct column.",
        columns: ["Full", "Empty"],
        items: [
          { label: "Glass of water" },
          { label: "Empty box" },
          { label: "Bucket of sand" },
          { label: "Empty cup" },
        ],
      },
      {
        type: "circle-correct",
        title: "Long or Short?",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "A bus is ___", options: ["long", "short"] },
          { prompt: "A pencil is ___", options: ["long", "short"] },
          { prompt: "A train is ___", options: ["long", "short"] },
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
    activities: [
      {
        type: "circle-correct",
        title: "Longer or Shorter?",
        instruction: "Circle the correct answer for each pair.",
        questions: [
          { prompt: "A ruler or a paperclip — which is LONGER?", options: ["ruler", "paperclip"] },
          { prompt: "A crayon or a bus — which is SHORTER?", options: ["crayon", "bus"] },
          { prompt: "Your arm or your finger — which is LONGER?", options: ["arm", "finger"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Heavier or Lighter?",
        instruction: "Circle the HEAVIER item in each pair.",
        questions: [
          { prompt: "A watermelon or a grape?", options: ["watermelon", "grape"] },
          { prompt: "A brick or a sponge?", options: ["brick", "sponge"] },
          { prompt: "A dog or an ant?", options: ["dog", "ant"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Size",
        instruction: "Write 1 for smallest, 2 for middle, 3 for biggest.",
        columns: ["Smallest (1)", "Middle (2)", "Biggest (3)"],
        items: [
          { label: "Mouse" },
          { label: "Cat" },
          { label: "Elephant" },
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
    activities: [
      {
        type: "sorting",
        title: "Morning, Afternoon, or Night?",
        instruction: "Sort each activity into the correct time of day.",
        columns: ["Morning", "Afternoon", "Night"],
        items: [
          { label: "Eat breakfast" },
          { label: "Go to sleep" },
          { label: "Eat lunch" },
          { label: "Brush teeth (bedtime)" },
          { label: "Wake up" },
          { label: "Afternoon snack" },
        ],
      },
      {
        type: "sequence",
        title: "Put in Order",
        instruction: "Number these events 1 to 4 in the order they happen during the day.",
        items: [
          { label: "Eat dinner" },
          { label: "Wake up" },
          { label: "Go to school" },
          { label: "Go to bed" },
        ],
      },
      {
        type: "matching",
        title: "Match Activity to Time",
        instruction: "Draw a line to match each activity with when it usually happens.",
        left: ["Breakfast", "Lunch", "Dinner", "Brushing teeth"],
        right: ["Night", "Morning", "Midday", "Evening"],
      },
    ],
  },

  // 10. Familiar shapes
  {
    slug: "familiar-shapes",
    title: "Familiar Shapes",
    strand: "Space",
    description: "Name, create and sort familiar shapes and give reasoning",
    activities: [
      {
        type: "shape-trace",
        title: "Trace the Shapes",
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
        type: "matching",
        title: "Match Shape to Name",
        instruction: "Draw a line to match each shape to its name.",
        left: ["▲", "●", "■", "◆"],
        right: ["Circle", "Diamond", "Triangle", "Square"],
      },
      {
        type: "circle-correct",
        title: "Count the Sides",
        instruction: "How many sides does each shape have?",
        questions: [
          { prompt: "Triangle", options: ["2", "3", "4"] },
          { prompt: "Square", options: ["3", "4", "5"] },
          { prompt: "Circle", options: ["0", "1", "2"] },
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
    activities: [
      {
        type: "circle-correct",
        title: "Where Is It?",
        instruction: "Read each description. Circle the correct position word.",
        questions: [
          { prompt: "The cat is ___ the table", options: ["under", "inside", "behind"] },
          { prompt: "The bird is ___ the tree", options: ["on top of", "under", "beside"] },
          { prompt: "The ball is ___ the box", options: ["next to", "inside", "above"] },
        ],
      },
      {
        type: "matching",
        title: "Match Position Words",
        instruction: "Draw a line to match the picture description to the correct word.",
        left: ["A bird on a branch", "A cat under a bed", "A ball in a box", "A dog beside a child"],
        right: ["inside", "beside", "on top of", "under"],
      },
      {
        type: "circle-correct",
        title: "Left or Right?",
        instruction: "Think about which side. Circle the answer.",
        questions: [
          { prompt: "You write with your ___ hand (if right-handed)", options: ["left", "right"] },
          { prompt: "Your heart is on your ___ side", options: ["left", "right"] },
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
    activities: [
      {
        type: "tally-chart",
        title: "Count and Tally",
        instruction: "Count each type of object. Make a tally mark for each one, then write the total.",
        categories: [
          { label: "Stars", icon: "star", count: 4 },
          { label: "Hearts", icon: "heart", count: 3 },
          { label: "Fish", icon: "fish", count: 5 },
          { label: "Flowers", icon: "flower", count: 2 },
        ],
      },
      {
        type: "sorting",
        title: "Sort Into Groups",
        instruction: "Sort these items into the correct groups.",
        columns: ["Fruit", "Animals", "Shapes"],
        items: [
          { label: "Apple", icon: "apple" },
          { label: "Fish", icon: "fish" },
          { label: "Star", icon: "star" },
          { label: "Butterfly", icon: "butterfly" },
          { label: "Heart", icon: "heart" },
          { label: "Flower", icon: "flower" },
        ],
      },
      {
        type: "circle-correct",
        title: "Answer the Questions",
        instruction: "Use your tally chart from Activity 1 to answer these questions.",
        questions: [
          { prompt: "Which item has the MOST?", options: ["Stars", "Hearts", "Fish", "Flowers"] },
          { prompt: "Which item has the FEWEST?", options: ["Stars", "Hearts", "Fish", "Flowers"] },
          { prompt: "How many stars and hearts together?", options: ["5", "7", "8"] },
        ],
      },
    ],
  },
];

export function getFoundationWorksheet(slug: string): WorksheetItem | undefined {
  return foundationMathsWorksheets.find((w) => w.slug === slug);
}
