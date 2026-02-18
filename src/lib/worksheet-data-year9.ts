import type { WorksheetItem } from "./worksheet-types";

export const year9MathsWorksheets: WorksheetItem[] = [
  // ── WS 1: Rational and Irrational Numbers
  {
    slug: "rational-irrational-numbers",
    title: "Rational & Irrational Numbers",
    strand: "Number",
    description: "Classify numbers as rational or irrational, estimate surds and use irrational numbers such as sqrt(2) and pi to solve problems.",
    activities: [
      {
        type: "sorting",
        title: "Rational or Irrational?",
        instruction: "Sort each number into the correct column.",
        columns: ["Rational", "Irrational"],
        items: [
          { label: "1/2" },
