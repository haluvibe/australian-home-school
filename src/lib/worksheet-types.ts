export type ObjectName =
  | "star"
  | "apple"
  | "fish"
  | "heart"
  | "flower"
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "butterfly";

export interface NumberTraceData {
  type: "number-trace";
  title: string;
  instruction: string;
  numbers: number[];
}

export interface CountObjectsData {
  type: "count-objects";
  title: string;
  instruction: string;
  rows: { object: ObjectName; count: number }[];
}

export interface MatchingData {
  type: "matching";
  title: string;
  instruction: string;
  left: string[];
  right: string[];
}

export interface CompareGroupsData {
  type: "compare-groups";
  title: string;
  instruction: string;
  pairs: { leftCount: number; rightCount: number; object: ObjectName; question: string }[];
}

export interface NumberBondsData {
  type: "number-bonds";
  title: string;
  instruction: string;
  bonds: { total: number; partA: number | null; partB: number | null }[];
}

export interface PatternData {
  type: "pattern";
  title: string;
  instruction: string;
  rows: { sequence: (ObjectName | null)[]; unitLength: number }[];
}

export interface SortingData {
  type: "sorting";
  title: string;
  instruction: string;
  columns: string[];
  items: { label: string; icon?: ObjectName }[];
}

export interface CircleCorrectData {
  type: "circle-correct";
  title: string;
  instruction: string;
  questions: { prompt: string; options: string[]; }[];
}

export interface SequenceData {
  type: "sequence";
  title: string;
  instruction: string;
  items: { label: string; icon?: ObjectName }[];
}

export interface ShapeTraceData {
  type: "shape-trace";
  title: string;
  instruction: string;
  shapes: { name: string; sides: number }[];
}

export interface TallyChartData {
  type: "tally-chart";
  title: string;
  instruction: string;
  categories: { label: string; icon: ObjectName; count: number }[];
}

export type ActivityData =
  | NumberTraceData
  | CountObjectsData
  | MatchingData
  | CompareGroupsData
  | NumberBondsData
  | PatternData
  | SortingData
  | CircleCorrectData
  | SequenceData
  | ShapeTraceData
  | TallyChartData;

export interface WorksheetItem {
  slug: string;
  title: string;
  strand: string;
  description: string;
  activities: ActivityData[];
}
