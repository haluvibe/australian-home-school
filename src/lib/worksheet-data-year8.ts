import type { WorksheetItem } from "./worksheet-types";

export const year8MathsWorksheets: WorksheetItem[] = [
  // WS 1: Irrational Numbers and Decimals
  {
    slug: "irrational-numbers-decimals",
    title: "Irrational Numbers & Decimal Types",
    strand: "Number",
    description: "Recognise irrational numbers and distinguish between terminating and recurring decimals.",
    activities: [
      {
        type: "sorting",
        title: "Terminating or Recurring?",
        instruction: "Sort each decimal into the correct column. Terminating decimals stop; recurring decimals repeat forever.",
        columns: ["Terminating", "Recurring"],
        items: [
          { label: "0.25" },
          { label: "0.333..." },
          { label: "1.75" },
          { label: "0.142857..." },
          { label: "3.5" },
          { label: "0.6666..." },
          { label: "2.125" },
          { label: "0.090909..." },
        ],
      },
      {
        type: "circle-correct",
        title: "Identify the Decimal Type",
        instruction: "Circle the correct type for each decimal.",
        questions: [
          { prompt: "0.5", options: ["Terminating", "Recurring", "Irrational"] },
          { prompt: "0.3333... (1/3)", options: ["Terminating", "Recurring", "Irrational"] },
          { prompt: "sqrt(2) = 1.41421356...", options: ["Terminating", "Recurring", "Irrational"] },
          { prompt: "0.625", options: ["Terminating", "Recurring", "Irrational"] },
          { prompt: "pi = 3.14159...", options: ["Terminating", "Recurring", "Irrational"] },
        ],
      },
      {
        type: "matching",
        title: "Match the Fraction to Its Decimal",
        instruction: "Draw a line to match each fraction to its decimal expansion.",
        left: ["1/4", "1/3", "1/8", "2/3", "1/6"],
        right: ["0.1666...", "0.6666...", "0.125", "0.3333...", "0.25"],
      },
      {
        type: "sorting",
        title: "Rational or Irrational?",
        instruction: "Sort each number. Rational numbers can be written as a fraction; irrational numbers cannot.",
        columns: ["Rational", "Irrational"],
        items: [
          { label: "sqrt(9)" },
          { label: "sqrt(5)" },
          { label: "pi" },
          { label: "2.75" },
          { label: "sqrt(16)" },
          { label: "sqrt(7)" },
          { label: "0.333..." },
          { label: "sqrt(2)" },
        ],
      },
      {
        type: "circle-correct",
        title: "True or False: Irrational Numbers",
        instruction: "Circle True or False for each statement.",
        questions: [
          { prompt: "Every square root is irrational.", options: ["True", "False"] },
          { prompt: "pi is an irrational number.", options: ["True", "False"] },
          { prompt: "0.5 is a rational number.", options: ["True", "False"] },
          { prompt: "sqrt(4) is irrational because it involves a square root.", options: ["True", "False"] },
        ],
      },
      {
        type: "open-response",
        title: "Convert Fractions to Decimals",
        instruction: "Divide to convert each fraction to a decimal. State whether it terminates or recurs.",
        prompts: [
          { text: "3/4 = ___ (terminating / recurring)", type: "lines", lines: 2 },
          { text: "5/9 = ___ (terminating / recurring)", type: "lines", lines: 2 },
          { text: "7/8 = ___ (terminating / recurring)", type: "lines", lines: 2 },
          { text: "4/11 = ___ (terminating / recurring)", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Approximate Irrational Numbers",
        instruction: "Use estimation to give each irrational number correct to 2 decimal places.",
        prompts: [
          { text: "sqrt(3) is approximately ___", type: "lines", lines: 2 },
          { text: "sqrt(10) is approximately ___", type: "lines", lines: 2 },
          { text: "sqrt(20) is approximately ___", type: "lines", lines: 2 },
          { text: "Between which two whole numbers does sqrt(50) lie? ___ < sqrt(50) < ___", type: "lines", lines: 2 },
        ],
      },
      {
        type: "open-response",
        title: "Explain Your Thinking",
        instruction: "Answer each question in one or two sentences using correct mathematical language.",
        prompts: [
          { text: "Explain why sqrt(9) is rational but sqrt(11) is irrational.", type: "box" },
          { text: "A student says 1/7 is irrational because the decimal goes on forever. Are they correct? Explain.", type: "box" },
        ],
      },
    ],
  },