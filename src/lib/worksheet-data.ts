import type { WorksheetItem } from "./worksheet-types";

export const foundationMathsWorksheets: WorksheetItem[] = [
  // 1. Number names 0-20
  {
    slug: "number-names-0-20",
    title: "Number Names & Numerals 0–20",
    strand: "Number",
    description: "Connect number names, numerals and their position in sequence from 0 to 20",
    activities: [
      {
        type: "number-trace",
        title: "Trace the Numbers",
        instruction: "Trace over each dotted number carefully.",
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        type: "matching",
        title: "Match Words to Numbers",
        instruction: "Draw a line from each word to its matching numeral.",
        left: ["three", "seven", "twelve", "fifteen", "twenty"],
        right: ["20", "7", "3", "15", "12"],
      },
      {
        type: "circle-correct",
        title: "What Comes Next?",
        instruction: "Circle the number that comes next in the sequence.",
        questions: [
          { prompt: "3, 4, 5, ___", options: ["6", "7", "4"] },
          { prompt: "10, 11, 12, ___", options: ["14", "10", "13"] },
          { prompt: "17, 18, 19, ___", options: ["20", "16", "21"] },
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
      {
        type: "count-objects",
        title: "Count and Write",
        instruction: "Count the objects in each row. Write the total in the box.",
        rows: [
          { object: "star", count: 3 },
          { object: "apple", count: 5 },
          { object: "heart", count: 7 },
          { object: "fish", count: 4 },
        ],
      },
      {
        type: "matching",
        title: "Match Dots to Numbers",
        instruction: "Draw a line to match each dot pattern to the correct numeral.",
        left: ["●", "● ●", "● ● ●", "● ● ● ●", "● ● ● ● ●"],
        right: ["3", "5", "1", "4", "2"],
      },
      {
        type: "circle-correct",
        title: "How Many Do You See?",
        instruction: "Look quickly! Circle how many you think there are.",
        questions: [
          { prompt: "⭐⭐⭐", options: ["2", "3", "4"] },
          { prompt: "⭐⭐⭐⭐⭐", options: ["4", "6", "5"] },
          { prompt: "⭐⭐", options: ["2", "3", "1"] },
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
      {
        type: "compare-groups",
        title: "Which Group Has More?",
        instruction: "Look at each pair. Circle the group that has MORE.",
        pairs: [
          { leftCount: 5, rightCount: 3, object: "star", question: "Which group has more stars?" },
          { leftCount: 4, rightCount: 7, object: "apple", question: "Which group has more apples?" },
          { leftCount: 8, rightCount: 6, object: "heart", question: "Which group has more hearts?" },
        ],
      },
      {
        type: "compare-groups",
        title: "Which Group Has Fewer?",
        instruction: "Look at each pair. Circle the group that has FEWER.",
        pairs: [
          { leftCount: 6, rightCount: 9, object: "fish", question: "Which group has fewer fish?" },
          { leftCount: 5, rightCount: 2, object: "flower", question: "Which group has fewer flowers?" },
        ],
      },
      {
        type: "circle-correct",
        title: "More, Fewer, or Equal?",
        instruction: "Circle the correct word for each pair.",
        questions: [
          { prompt: "3 stars and 3 hearts — the groups are...", options: ["more", "fewer", "equal"] },
          { prompt: "5 fish and 8 fish — 5 is...", options: ["more", "fewer", "equal"] },
          { prompt: "10 apples and 7 apples — 10 is...", options: ["more", "fewer", "equal"] },
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
      {
        type: "number-bonds",
        title: "Number Bonds",
        instruction: "Fill in the missing number to complete each bond.",
        bonds: [
          { total: 5, partA: 2, partB: null },
          { total: 7, partA: null, partB: 4 },
          { total: 10, partA: 6, partB: null },
          { total: 8, partA: null, partB: 5 },
          { total: 6, partA: 1, partB: null },
        ],
      },
      {
        type: "matching",
        title: "Ways to Make 10",
        instruction: "Draw a line to match pairs that make 10 together.",
        left: ["1", "3", "5", "2", "4"],
        right: ["5", "8", "9", "6", "7"],
      },
      {
        type: "circle-correct",
        title: "Part-Part-Whole",
        instruction: "Circle the number that completes each equation.",
        questions: [
          { prompt: "3 + ___ = 7", options: ["5", "4", "3"] },
          { prompt: "___ + 6 = 9", options: ["2", "4", "3"] },
          { prompt: "4 + ___ = 10", options: ["5", "6", "7"] },
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
