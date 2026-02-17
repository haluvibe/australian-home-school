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
          { prompt: "How many stars?", promptIcon: "star", options: ["1", "2", "3"] },
          { prompt: "How many stars?", promptIcon: "star", options: ["3", "5", "4"] },
          { prompt: "How many stars?", promptIcon: "star", options: ["0", "1", "2"] },
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
      // --- Improvement: Zero focus ---
      {
        type: "circle-correct",
        title: "All About Zero",
        instruction: "Zero means 'none' or 'nothing'. Circle the correct answer.",
        questions: [
          { prompt: "How many elephants are in your lunchbox right now?", options: ["0", "1", "2"] },
          { prompt: "You have 3 lollies and eat them all. How many are left?", options: ["0", "1", "3"] },
          { prompt: "Which picture shows zero stars? (A) ⭐⭐ (B) nothing (C) ⭐", options: ["A", "B", "C"] },
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
      // --- BRIDGE: Ten-frame introduction ---
      {
        type: "ten-frame",
        title: "Using a Ten Frame",
        instruction: "A ten frame helps us count. Count the filled circles and write the number.",
        frames: [
          { filled: 5 },
          { filled: 4 },
          { filled: 6 },
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
          { prompt: "⚀ (one dot in the middle)", options: ["1", "2", "3"] },
          { prompt: "⚁ (two dots, one top-right, one bottom-left)", options: ["1", "2", "3"] },
          { prompt: "⚂ (three dots in a diagonal line)", options: ["2", "3", "4"] },
          { prompt: "⚃ (four dots, one in each corner)", options: ["3", "4", "5"] },
          { prompt: "⚄ (five dots, four corners and one middle)", options: ["4", "5", "6"] },
          { prompt: "⚅ (six dots, three on each side)", options: ["5", "6", "7"] },
        ],
      },
      {
        type: "matching",
        title: "Match Dice to Numbers",
        instruction: "Draw a line to match each dice face to the correct number.",
        left: ["⚀", "⚂", "⚄", "⚅"],
        right: ["5", "3", "1", "6"],
      },
      {
        type: "circle-correct",
        title: "Two Dice — How Many Altogether?",
        instruction: "Imagine rolling two dice. Can you add the dot patterns together? Circle the total.",
        questions: [
          { prompt: "⚀ and ⚁ (1 and 2)", options: ["2", "3", "4"] },
          { prompt: "⚂ and ⚂ (3 and 3)", options: ["5", "6", "7"] },
          { prompt: "⚃ and ⚁ (4 and 2)", options: ["5", "6", "7"] },
          { prompt: "⚄ and ⚀ (5 and 1)", options: ["5", "6", "7"] },
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
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Build subitising skills with these quick, fun activities.",
        suggestions: [
          "Make a ten-frame from an egg carton (cut to 10 holes) and use pom poms or buttons as counters. Flash different amounts and ask 'how many?'",
          "Play dice games! Roll a dice and say the number as fast as you can without counting the dots.",
          "Put small groups of objects (1–5) on a plate. Cover them, flash for 2 seconds, then cover again. How many did you see?",
          "Play 'Fingers Flash' — hold up some fingers quickly, then hide. Your child says how many they saw.",
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
      // --- Improvement: Draw to create equal groups ---
      {
        type: "open-response",
        title: "Draw to Make Equal",
        instruction: "Draw more objects so that both groups have the same number (as many as each other).",
        prompts: [
          { text: "Group A has 5 stars ⭐⭐⭐⭐⭐. Group B has 3 stars ⭐⭐⭐. Draw more stars in Group B:", type: "box" },
          { text: "Group A has 4 hearts ❤️❤️❤️❤️. Group B has 7 hearts. Draw more hearts in Group A:", type: "box" },
          { text: "Make both groups have 6. Group A has 6 fish. Draw 6 fish for Group B:", type: "box" },
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
      // --- Improvement: Open-ended "show all ways" ---
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
        title: "Draw to Split",
        instruction: "Draw circles to show each number split into two parts. There is no wrong answer!",
        prompts: [
          { text: "Split 6 into two groups (draw circles in two groups):", type: "box" },
          { text: "Now split 6 a DIFFERENT way:", type: "box" },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Use real objects to explore how numbers can be split apart and put back together.",
        suggestions: [
          "Get 10 buttons, blocks, or snacks. Ask your child to split them into two groups as many different ways as they can.",
          "Play 'Shake and Spill' — put 7 two-colour counters (or coins) in a cup, shake and tip out. How many heads? How many tails? That's a number bond!",
          "Use a muffin tin with 10 holes. Put small objects in some holes. 'How many are filled? How many are empty? Together that makes 10!'",
          "At dinner, share out items: '10 peas — 6 for you, how many for me?'",
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
        title: "Add the Hearts Together",
        instruction: "Count the hearts in each group. How many altogether?",
        groups: [
          { objects: Array(2).fill("heart"), label: "Group A" },
          { objects: Array(2).fill("heart"), label: "Group B" },
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
        type: "count-objects",
        title: "Add the Apples Together",
        instruction: "Put both groups together. How many apples altogether?",
        groups: [
          { objects: Array(3).fill("apple"), label: "Group A" },
          { objects: Array(2).fill("apple"), label: "Group B" },
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
        type: "count-objects",
        title: "Cross Out and Count",
        instruction: "There are 4 flowers. Cross out 1. How many are left?",
        rows: [
          { object: "flower", count: 4 },
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
        type: "count-objects",
        title: "Cross Out and Count — Hearts",
        instruction: "There are 7 hearts. Cross out 3. How many are left?",
        rows: [
          { object: "heart", count: 7 },
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
        type: "matching",
        title: "Match the Subtraction",
        instruction: "Draw a line to match each subtraction to its answer.",
        leftItems: [
          { label: "5 − 2", objects: [] },
          { label: "6 − 3", objects: [] },
          { label: "7 − 6", objects: [] },
          { label: "7 − 4", objects: [] },
        ],
        rightItems: [
          { label: "3", objects: Array(3).fill("heart") },
          { label: "1", objects: Array(1).fill("heart") },
          { label: "3", objects: Array(3).fill("heart") },
          { label: "3", objects: Array(3).fill("heart") },
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
        title: "Picture Addition — Flowers",
        instruction: "Put both groups of flowers together. Write the total.",
        groups: [
          { objects: Array(5).fill("flower"), label: "Group A" },
          { objects: Array(5).fill("flower"), label: "Group B" },
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
        type: "count-objects",
        title: "Cross Out and Count — Stars",
        instruction: "There are 9 stars. Cross out 4. How many are left?",
        rows: [
          { object: "star", count: 9 },
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
          { total: 4, partA: null, partB: null },
          { total: 6, partA: null, partB: null },
          { total: 8, partA: null, partB: null },
          { total: 10, partA: null, partB: null },
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
        type: "count-objects",
        title: "Share 10 Apples Equally",
        instruction: "Share 10 apples equally into 2 baskets. Draw them and write how many in each.",
        groups: [
          { objects: Array(5).fill("apple"), label: "Basket A" },
          { objects: Array(5).fill("apple"), label: "Basket B" },
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
        type: "pattern",
        title: "Copy the Pattern",
        instruction: "Look at the pattern on top. Copy it exactly in the empty boxes below.",
        rows: [
          { sequence: ["star", "diamond", "star", "diamond", null, null, null, null], unitLength: 2 },
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
        type: "circle-correct",
        title: "Which Is the Repeating Part?",
        instruction: "Circle the part that repeats over and over.",
        questions: [
          { prompt: "Star, Heart, Star, Heart — what repeats?", options: ["Star, Heart", "Star, Star", "Heart"] },
          { prompt: "Apple, Fish, Apple, Fish — what repeats?", options: ["Apple", "Apple, Fish", "Fish, Apple, Fish"] },
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
        title: "Flower-Butterfly-Butterfly Pattern",
        instruction: "What comes next? Fill in the empty boxes.",
        rows: [
          { sequence: ["flower", "butterfly", "butterfly", "flower", "butterfly", null, null, null], unitLength: 3 },
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
        type: "pattern",
        title: "Two Longer Patterns",
        instruction: "Continue both patterns.",
        rows: [
          { sequence: ["heart", "heart", "diamond", "heart", "heart", null, null, null], unitLength: 3 },
          { sequence: ["fish", "star", "star", "fish", "star", null, null, null], unitLength: 3 },
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
        title: "Spot the Mistake!",
        instruction: "One of these patterns has a mistake. Circle which one is WRONG.",
        questions: [
          { prompt: "Star, Heart, Star, Heart, Star, Star — is this correct?", options: ["Yes", "No — the last one should be Heart"] },
          { prompt: "Apple, Apple, Fish, Apple, Fish, Fish — is this correct?", options: ["Yes", "No — it should be Apple, Apple, Fish"] },
          { prompt: "Circle, Square, Circle, Square, Circle, Square — is this correct?", options: ["Yes, it is correct", "No, it has a mistake"] },
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
        title: "Create an AAB Pattern",
        instruction: "Choose objects and create an AAB pattern (two same, one different). Draw it.",
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
        type: "circle-correct",
        title: "Mixed Pattern Quiz",
        instruction: "Answer each question about patterns.",
        questions: [
          { prompt: "How many objects are in the repeating unit of: Star, Heart, Star, Heart?", options: ["1", "2", "3"] },
          { prompt: "How many objects are in the repeating unit of: Apple, Apple, Fish, Apple, Apple, Fish?", options: ["2", "3", "4"] },
          { prompt: "If the pattern is Star, Heart, Apple and it repeats 4 times, how many objects total?", options: ["9", "12", "15"] },
        ],
      },
      // --- Improvement: Non-visual pattern awareness ---
      {
        type: "circle-correct",
        title: "Patterns Are Everywhere!",
        instruction: "Patterns aren't just pictures — they can be sounds, actions, or colours too! Circle the correct answer.",
        questions: [
          { prompt: "Clap, stomp, clap, stomp, clap, ___ — what comes next?", options: ["Clap", "Stomp"] },
          { prompt: "Red, blue, red, blue, red, ___ — what colour comes next?", options: ["Red", "Blue", "Green"] },
          { prompt: "Loud, quiet, loud, quiet — what type of pattern is this?", options: ["AB pattern", "ABC pattern", "AAB pattern"] },
          { prompt: "Big, big, small, big, big, small — what type of pattern is this?", options: ["AB pattern", "AAB pattern", "ABC pattern"] },
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
        title: "Which Is Lighter?",
        instruction: "Circle the lighter item.",
        questions: [
          { prompt: "A brick or a balloon?", options: ["Brick", "Balloon"] },
          { prompt: "A dog or an ant?", optionIcons: ["dog", "ant"], options: ["Dog", "Ant"] },
          { prompt: "A pillow or a table?", options: ["Pillow", "Table"] },
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
        title: "Which Holds Less?",
        instruction: "Circle the container that holds LESS.",
        questions: [
          { prompt: "A teacup or a jug?", options: ["Teacup", "Jug"] },
          { prompt: "An egg cup or a mug?", options: ["Egg cup", "Mug"] },
          { prompt: "A thimble or a glass?", options: ["Thimble", "Glass"] },
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
        title: "Which Is Longer?",
        instruction: "Circle the longer item.",
        questions: [
          { prompt: "A snake or a worm?", optionIcons: ["snake"], options: ["Snake", "Worm"] },
          { prompt: "A ruler or a rubber?", options: ["Ruler", "Rubber"] },
          { prompt: "A scarf or a sock?", options: ["Scarf", "Sock"] },
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
        type: "circle-correct",
        title: "Which Takes Longer?",
        instruction: "Circle the activity that takes LONGER.",
        questions: [
          { prompt: "Eating lunch or eating one chip?", options: ["Eating lunch", "Eating one chip"] },
          { prompt: "Walking to school or tying your shoe?", options: ["Walking to school", "Tying your shoe"] },
          { prompt: "Brushing your teeth or having a bath?", options: ["Brushing teeth", "Having a bath"] },
        ],
      },

      // --- BRIDGE: Introducing "in between" before 3-category sorting ---
      {
        type: "circle-correct",
        title: "Heavy, Light, or In Between?",
        instruction: "Some things are not heavy and not light — they are in between! Circle the best answer.",
        questions: [
          { prompt: "A watermelon is ___", promptIcon: "watermelon", options: ["Heavy", "In between", "Light"] },
          { prompt: "A feather is ___", promptIcon: "feather", options: ["Heavy", "In between", "Light"] },
          { prompt: "A book is ___", promptIcon: "book", options: ["Heavy", "In between", "Light"] },
          { prompt: "A car is ___", promptIcon: "car", options: ["Heavy", "In between", "Light"] },
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
        type: "sequence",
        title: "Order by Mass",
        instruction: "Put these in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "Elephant", icon: "elephant" },
          { label: "Cat", icon: "cat" },
          { label: "Mouse", icon: "mouse" },
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
        type: "sequence",
        title: "Order by How Much They Hold",
        instruction: "Put these in order from holds the least to holds the most. Write 1, 2, 3.",
        items: [
          { label: "Bucket", icon: "bucket" },
          { label: "Cup", icon: "cup" },
          { label: "Spoon", icon: "spoon" },
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
        type: "sequence",
        title: "Order by Height",
        instruction: "Put these in order from shortest to tallest. Write 1, 2, 3.",
        items: [
          { label: "Ant", icon: "ant" },
          { label: "Child" },
          { label: "House", icon: "house" },
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
        title: "Takes the Longest to the Quickest",
        instruction: "Put these in order from takes the longest to the quickest. Write 1, 2, 3.",
        items: [
          { label: "Clapping once" },
          { label: "Eating dinner" },
          { label: "Sleeping all night" },
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
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Measurement comes alive with hands-on exploring!",
        suggestions: [
          "Hold two different objects — one in each hand. Which feels heavier? That's comparing mass!",
          "Fill a cup with water. Pour it into a bowl. Which container holds more? That's exploring capacity!",
          "Lie string along different objects (your arm, a book, the table). Cut the string to match. Compare the strings — that's measuring length!",
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
    activities: [
      // --- EASY: Comparing length (longer/shorter) ---
      {
        type: "circle-correct",
        title: "Which Is Longer?",
        instruction: "Circle the LONGER item in each pair.",
        questions: [
          { prompt: "A pencil or a crayon?", optionIcons: ["pencil"], options: ["Pencil", "Crayon"] },
          { prompt: "A shoe or a sock?", options: ["Shoe", "Sock"] },
          { prompt: "Your arm or your hand?", options: ["Arm", "Hand"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Shorter?",
        instruction: "Circle the SHORTER item in each pair.",
        questions: [
          { prompt: "A bus or a car?", optionIcons: ["car"], options: ["Bus", "Car"] },
          { prompt: "A worm or a snake?", optionIcons: ["snake"], options: ["Worm", "Snake"] },
          { prompt: "A spoon or a broom?", optionIcons: ["spoon"], options: ["Spoon", "Broom"] },
        ],
      },
      {
        type: "sorting",
        title: "Long or Short?",
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

      // --- EASY: Comparing height (taller/shorter) ---
      {
        type: "circle-correct",
        title: "Which Is Taller?",
        instruction: "Circle the TALLER one.",
        questions: [
          { prompt: "A tree or a flower?", optionIcons: ["tree", "flower"], options: ["Tree", "Flower"] },
          { prompt: "A giraffe or a dog?", optionIcons: ["giraffe", "dog"], options: ["Giraffe", "Dog"] },
          { prompt: "A house or a kennel?", optionIcons: ["house"], options: ["House", "Kennel"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Shorter (Height)?",
        instruction: "Circle the one that is NOT as tall.",
        questions: [
          { prompt: "A cat or a horse?", optionIcons: ["cat", "horse"], options: ["Cat", "Horse"] },
          { prompt: "A cup or a bottle?", optionIcons: ["cup", "bottle"], options: ["Cup", "Bottle"] },
          { prompt: "A child or a dad?", options: ["Child", "Dad"] },
        ],
      },

      // --- EASY: Comparing mass (heavier/lighter) ---
      {
        type: "circle-correct",
        title: "Which Is Heavier?",
        instruction: "Circle the HEAVIER item in each pair.",
        questions: [
          { prompt: "A watermelon or a grape?", optionIcons: ["watermelon", "grape"], options: ["Watermelon", "Grape"] },
          { prompt: "A brick or a sponge?", options: ["Brick", "Sponge"] },
          { prompt: "A dog or an ant?", optionIcons: ["dog", "ant"], options: ["Dog", "Ant"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Lighter?",
        instruction: "Circle the LIGHTER item in each pair.",
        questions: [
          { prompt: "A balloon or a bowling ball?", options: ["Balloon", "Bowling ball"] },
          { prompt: "A leaf or a book?", optionIcons: ["book"], options: ["Leaf", "Book"] },
          { prompt: "A feather or an egg?", optionIcons: ["feather"], options: ["Feather", "Egg"] },
        ],
      },
      {
        type: "sorting",
        title: "Heavy or Light?",
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

      // --- MEDIUM: Comparing capacity (holds more/less) ---
      {
        type: "circle-correct",
        title: "Which Holds More?",
        instruction: "Circle the container that HOLDS MORE.",
        questions: [
          { prompt: "A bucket or a cup?", optionIcons: ["bucket", "cup"], options: ["Bucket", "Cup"] },
          { prompt: "A bath or a sink?", options: ["Bath", "Sink"] },
          { prompt: "A swimming pool or a paddling pool?", options: ["Swimming pool", "Paddling pool"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Holds Less?",
        instruction: "Circle the container that HOLDS LESS.",
        questions: [
          { prompt: "A mug or a jug?", options: ["Mug", "Jug"] },
          { prompt: "A teaspoon or a bowl?", options: ["Teaspoon", "Bowl"] },
          { prompt: "A thimble or a glass?", options: ["Thimble", "Glass"] },
        ],
      },

      // --- MEDIUM: Comparing duration ---
      {
        type: "circle-correct",
        title: "Which Takes Longer?",
        instruction: "Circle the activity that takes LONGER.",
        questions: [
          { prompt: "Brushing your teeth or having a shower?", options: ["Brushing teeth", "Having a shower"] },
          { prompt: "Blinking or reading a book?", options: ["Blinking", "Reading a book"] },
          { prompt: "Eating one biscuit or cooking a meal?", options: ["Eating one biscuit", "Cooking a meal"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Which Is Quicker?",
        instruction: "Circle the activity that is QUICKER.",
        questions: [
          { prompt: "Clapping once or singing a song?", options: ["Clapping once", "Singing a song"] },
          { prompt: "Jumping once or running a race?", options: ["Jumping once", "Running a race"] },
          { prompt: "Sneezing or watching a movie?", options: ["Sneezing", "Watching a movie"] },
        ],
      },

      // --- MEDIUM: Ordering by direct comparison ---
      {
        type: "sequence",
        title: "Order by Length: Shortest to Longest",
        instruction: "Put these in order from shortest to longest. Write 1, 2, 3.",
        items: [
          { label: "Caterpillar" },
          { label: "Snake", icon: "snake" },
          { label: "Worm" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Height: Shortest to Tallest",
        instruction: "Put these in order from shortest to tallest. Write 1, 2, 3.",
        items: [
          { label: "Sunflower", icon: "flower" },
          { label: "Grass" },
          { label: "Tree", icon: "tree" },
        ],
      },
      {
        type: "sequence",
        title: "Order by Mass: Lightest to Heaviest",
        instruction: "Put these in order from lightest to heaviest. Write 1, 2, 3.",
        items: [
          { label: "Coin" },
          { label: "Bag of potatoes" },
          { label: "Apple", icon: "apple" },
        ],
      },

      // --- HARDER: Mixed comparisons ---
      {
        type: "matching",
        title: "Match the Comparison",
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
        type: "circle-correct",
        title: "Compare Two Things",
        instruction: "Circle the correct comparison.",
        questions: [
          { prompt: "A giraffe and a cat — the giraffe is ___", options: ["Taller", "Shorter", "Lighter"] },
          { prompt: "A marble and a basketball — the marble is ___", options: ["Bigger", "Smaller", "Heavier"] },
          { prompt: "A truck and a scooter — the truck is ___", options: ["Lighter", "Shorter", "Heavier"] },
          { prompt: "A lake and a puddle — the lake holds ___", options: ["Less", "More", "The same"] },
        ],
      },
      {
        type: "sorting",
        title: "Sort by Size: Smallest to Biggest",
        instruction: "Write 1 for smallest, 2 for middle, 3 for biggest.",
        columns: ["Smallest (1)", "Middle (2)", "Biggest (3)"],
        items: [
          { label: "Mouse", icon: "mouse" },
          { label: "Cat", icon: "cat" },
          { label: "Elephant", icon: "elephant" },
        ],
      },

      // --- HARDER: Comparing with reasoning ---
      {
        type: "circle-correct",
        title: "How Would You Compare?",
        instruction: "Circle the BEST way to compare each pair.",
        questions: [
          { prompt: "Two pieces of string — I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two rocks — I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two bottles — I would compare their ___", options: ["Length", "Mass", "Capacity"] },
          { prompt: "Two sticks — I would compare their ___", options: ["Length", "Mass", "Capacity"] },
        ],
      },
      {
        type: "circle-correct",
        title: "Same or Different?",
        instruction: "Could these two things be the same? Circle the best answer.",
        questions: [
          { prompt: "Can two pencils be the same length?", options: ["Yes", "No"] },
          { prompt: "Can two bags weigh the same?", options: ["Yes", "No"] },
          { prompt: "Can a big box be lighter than a small box?", options: ["Yes", "No"] },
          { prompt: "Can a short bottle hold more than a tall bottle?", options: ["Yes", "No"] },
        ],
      },

      // --- CHALLENGE: Ordering 4 items, tricky comparisons ---
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
        type: "circle-correct",
        title: "Tricky Comparisons",
        instruction: "Think carefully! Circle the best answer.",
        questions: [
          { prompt: "A big balloon or a small rock — which is heavier?", options: ["Big balloon", "Small rock"] },
          { prompt: "A tall thin glass or a short wide bowl — which might hold more?", options: ["The glass", "The bowl", "Hard to tell without checking"] },
          { prompt: "A long piece of string or a short stick — which is heavier?", options: ["The string", "The stick", "You need to compare them to know"] },
        ],
      },
      {
        type: "matching",
        title: "Match Objects to Comparisons",
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
        type: "circle-correct",
        title: "Direct Comparison Challenge",
        instruction: "Circle the correct answer.",
        questions: [
          { prompt: "To compare which ribbon is longer, you should ___", options: ["Hold them next to each other", "Weigh them", "Put water in them"] },
          { prompt: "To compare which box is heavier, you should ___", options: ["Measure them with a ruler", "Hold one in each hand", "Fill them with water"] },
          { prompt: "To compare which cup holds more, you should ___", options: ["Put them side by side", "Weigh them", "Fill one and pour into the other"] },
          { prompt: "To compare which is taller, two friends should ___", options: ["Stand back to back", "Sit down", "Hold hands"] },
        ],
      },
      // --- Improvement: Comparing events explicitly ---
      {
        type: "circle-correct",
        title: "Comparing Events",
        instruction: "Events are things that happen. We can compare how long events take!",
        questions: [
          { prompt: "Which EVENT takes longer: brushing your teeth or sleeping all night?", options: ["Brushing teeth", "Sleeping all night"] },
          { prompt: "Which EVENT is quicker: eating one grape or eating a whole dinner?", options: ["Eating one grape", "Eating dinner"] },
          { prompt: "Which EVENT takes longer: walking to the letterbox or driving to the shops?", options: ["Walking to letterbox", "Driving to shops"] },
          { prompt: "Put these EVENTS in order from quickest to longest: clapping once, reading a book, cooking dinner.", options: ["Clap, book, cooking", "Cooking, book, clap", "Book, clap, cooking"] },
        ],
      },
      // --- Improvement: Open-ended comparison reasoning ---
      {
        type: "open-response",
        title: "How Would You Compare?",
        instruction: "For each pair, write HOW you would compare them. What would you do?",
        prompts: [
          { text: "Two sticks — how would you find which is longer?", type: "lines", lines: 2 },
          { text: "Two bags — how would you find which is heavier?", type: "lines", lines: 2 },
          { text: "Two jugs — how would you find which holds more water?", type: "lines", lines: 2 },
        ],
      },
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Direct comparison means putting things next to each other to compare. Try these!",
        suggestions: [
          "Find two shoes in the house. Put them heel-to-heel. Which is longer? That's direct comparison of length!",
          "Hold an apple in one hand and a banana in the other. Which feels heavier? That's direct comparison of mass!",
          "Get two different cups. Fill one with water and pour it into the other. Does it overflow or not fill up? That's comparing capacity!",
          "Time yourself doing two activities (star jumps vs hopping). Which took longer? That's comparing duration!",
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
        type: "sequence",
        title: "Morning Routine",
        instruction: "Put these morning activities in order. Write 1, 2, 3.",
        items: [
          { label: "Eat breakfast" },
          { label: "Wake up" },
          { label: "Get dressed" },
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
        type: "sequence",
        title: "Meals in Order",
        instruction: "Put these meals in the order they happen. Write 1, 2, 3.",
        items: [
          { label: "Dinner" },
          { label: "Breakfast" },
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
        title: "What Happens Next?",
        instruction: "Circle what usually happens NEXT.",
        questions: [
          { prompt: "After you wake up, you ___", options: ["Go to sleep", "Get dressed", "Eat dinner"] },
          { prompt: "After school, you ___", options: ["Wake up", "Go home", "Eat breakfast"] },
          { prompt: "After dinner, you ___", options: ["Eat lunch", "Have a bath", "Go to school"] },
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
        title: "Weekday or Weekend?",
        instruction: "Circle whether each day is a weekday or a weekend day.",
        questions: [
          { prompt: "Saturday", options: ["Weekday", "Weekend"] },
          { prompt: "Tuesday", options: ["Weekday", "Weekend"] },
          { prompt: "Sunday", options: ["Weekday", "Weekend"] },
          { prompt: "Friday", options: ["Weekday", "Weekend"] },
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

      // --- CHALLENGE: Full day sequencing, seasons ---
      {
        type: "sequence",
        title: "A Full Day — Start to Finish",
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
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Help your child understand how daily events connect to times of day.",
        suggestions: [
          "Make a visual daily timetable together — draw or stick pictures of activities in morning, afternoon, and night columns.",
          "Throughout the day, narrate the time: 'It's morning, so we eat breakfast. It's the afternoon, so we have a rest.'",
          "Before bed, ask your child to retell their day in order: 'First I woke up, then I had breakfast, then...'",
          "Play 'When do we...?' — name an activity and your child says the time of day it happens.",
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
        title: "What Is Different?",
        instruction: "Circle what is DIFFERENT about these shapes.",
        questions: [
          { prompt: "A square and a rectangle both have 4 sides. What is different?", options: ["Number of corners", "The side lengths", "They are the same"] },
          { prompt: "A big triangle and a small triangle. What is different?", options: ["Number of sides", "The size", "The shape name"] },
          { prompt: "A circle and a square. What is different?", options: ["One has sides, one doesn't", "They are the same", "Both have 4 sides"] },
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
    activities: [
      // --- EASY: On, under, in ---
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
        title: "True or False: Position",
        instruction: "If the cat is ON the chair, circle True or False.",
        questions: [
          { prompt: "The cat is under the chair.", options: ["True", "False"] },
          { prompt: "The cat is on top of the chair.", options: ["True", "False"] },
          { prompt: "The cat is inside the chair.", options: ["True", "False"] },
        ],
      },

      // --- EASY: Next to, beside, between ---
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
        title: "Between",
        instruction: "Circle what is BETWEEN the other two things.",
        questions: [
          { prompt: "Star, Heart, Apple — what is between the star and the apple?", options: ["Star", "Heart", "Apple"] },
          { prompt: "Cat, Dog, Bird — what is between the cat and the bird?", options: ["Cat", "Dog", "Bird"] },
          { prompt: "Red, Blue, Green — what is between red and green?", options: ["Red", "Blue", "Green"] },
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

      // --- MEDIUM: In front of, behind, above, below ---
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

      // --- MEDIUM: Left and right ---
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
        title: "Left, Right, or Middle?",
        instruction: "Fish, Flower, Diamond, Butterfly, Star — they are in a line. Answer the questions.",
        questions: [
          { prompt: "What is on the far left?", options: ["Fish", "Diamond", "Star"] },
          { prompt: "What is on the far right?", options: ["Fish", "Diamond", "Star"] },
          { prompt: "What is in the middle?", options: ["Flower", "Diamond", "Butterfly"] },
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

      // --- HARDER: Giving directions ---
      {
        type: "circle-correct",
        title: "Follow the Directions",
        instruction: "Circle what you would find if you follow the direction.",
        questions: [
          { prompt: "Start at the Star. Move right. What do you find?", options: ["Heart (if heart is to the right)", "Nothing", "Apple"] },
          { prompt: "Start at the door. Go forward. You are now ___.", options: ["Inside the room", "Behind the door", "On the roof"] },
          { prompt: "Face the window. Turn around. You are now facing the ___.", options: ["Window", "Wall behind you", "Floor"] },
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
        type: "sequence",
        title: "Follow the Path",
        instruction: "Put these directions in order to get from the door to the desk. Write 1, 2, 3.",
        items: [
          { label: "Walk forward 5 steps" },
          { label: "Turn left" },
          { label: "Walk forward 2 steps to the desk" },
        ],
      },

      // --- HARDER: Describing positions ---
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
        title: "Opposite Positions",
        instruction: "Circle the OPPOSITE position word.",
        questions: [
          { prompt: "The opposite of UP is ___.", options: ["Down", "Left", "Behind"] },
          { prompt: "The opposite of IN FRONT OF is ___.", options: ["Above", "Behind", "Under"] },
          { prompt: "The opposite of LEFT is ___.", options: ["Up", "Down", "Right"] },
          { prompt: "The opposite of ABOVE is ___.", options: ["Below", "Beside", "Behind"] },
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
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Position and location are best learnt by moving your body!",
        suggestions: [
          "Play Simon Says with position words: 'Simon says stand BEHIND the chair', 'Simon says put your hands ABOVE your head', 'Simon says sit UNDER the table.'",
          "Hide a toy and give position clues: 'It's ON something, NEXT TO a book, ABOVE the floor.' Can your child find it?",
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
        type: "circle-correct",
        title: "How Many in Each Group?",
        instruction: "Look at: Star, Heart, Star, Apple, Star, Heart. Count each type.",
        questions: [
          { prompt: "How many stars?", options: ["2", "3", "4"] },
          { prompt: "How many hearts?", options: ["1", "2", "3"] },
          { prompt: "How many apples?", options: ["0", "1", "2"] },
        ],
      },

      // --- EASY: Tally charts ---
      {
        type: "tally-chart",
        title: "Count and Tally — Stars and Hearts",
        instruction: "Count each type. Make a tally mark for each one. Write the total.",
        categories: [
          { label: "Stars", icon: "star", count: 3 },
          { label: "Hearts", icon: "heart", count: 5 },
        ],
      },
      {
        type: "tally-chart",
        title: "Count and Tally — Four Objects",
        instruction: "Count each type of object. Make tally marks and write the total.",
        categories: [
          { label: "Stars", icon: "star", count: 4 },
          { label: "Hearts", icon: "heart", count: 3 },
          { label: "Fish", icon: "fish", count: 5 },
          { label: "Flowers", icon: "flower", count: 2 },
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
        type: "circle-correct",
        title: "Survey Results",
        instruction: "5 children said Yes, 3 children said No. Answer the questions.",
        questions: [
          { prompt: "How many children were asked?", options: ["5", "8", "10"] },
          { prompt: "Did more children say Yes or No?", options: ["Yes", "No", "Same"] },
          { prompt: "How many more said Yes than No?", options: ["1", "2", "3"] },
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

      // --- HARDER: Reading data displays ---
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
        type: "circle-correct",
        title: "Weather Questions",
        instruction: "Sunny: 3 days, Rainy: 1 day, Cloudy: 1 day. Answer the questions.",
        questions: [
          { prompt: "What was the most common weather?", options: ["Sunny", "Rainy", "Cloudy"] },
          { prompt: "How many days of data?", options: ["3", "5", "7"] },
          { prompt: "Were there more sunny days or rainy days?", options: ["Sunny", "Rainy", "Same"] },
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
      // --- Try This at Home ---
      {
        type: "home-activity",
        title: "Try This at Home!",
        instruction: "Data is all about asking questions and finding out answers!",
        suggestions: [
          "Run a family survey: 'What is everyone's favourite dinner?' Make a tally chart together and discuss the results.",
          "Count the colours of cars that pass your house in 10 minutes. Sort them and find which colour is most common.",
          "Make a picture graph using stickers or stamps — each sticker represents one person's answer to your question.",
          "Look at the weather each day for a week. Record sunny/rainy/cloudy on a chart. At the end, discuss: 'What was the most common weather this week?'",
        ],
      },
    ],
  },
];

export function getFoundationWorksheet(slug: string): WorksheetItem | undefined {
  return foundationMathsWorksheets.find((w) => w.slug === slug);
}
