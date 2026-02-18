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
  | "butterfly"
  | "cat"
  | "dog"
  | "mouse"
  | "elephant"
  | "bird"
  | "ant"
  | "giraffe"
  | "horse"
  | "snake"
  | "sun"
  | "moon"
  | "tree"
  | "pencil"
  | "cup"
  | "book"
  | "car"
  | "house"
  | "ball"
  | "teddy"
  | "clock"
  | "bucket"
  | "bed"
  | "feather"
  | "rock"
  | "banana"
  | "spoon"
  | "bottle"
  | "watermelon"
  | "grape"
  | "sphere"
  | "cube"
  | "cone"
  | "cylinder"
  | "dice-1"
  | "dice-2"
  | "dice-3"
  | "dice-4"
  | "dice-5"
  | "dice-6";

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
  rows?: { object: ObjectName; count: number }[];
  groups?: { objects: ObjectName[]; label: string }[];
}

export interface MatchingData {
  type: "matching";
  title: string;
  instruction: string;
  left?: string[];
  right?: string[];
  leftItems?: { label: string; objects: ObjectName[] }[];
  rightItems?: { label: string; objects: ObjectName[] }[];
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
  questions: {
    prompt: string;
    promptIcon?: ObjectName;
    promptCount?: number;
    options: string[];
    optionIcons?: ObjectName[];
  }[];
}

export interface PictureGraphData {
  type: "picture-graph";
  title: string;
  instruction: string;
  rows: { label: string; icon: ObjectName; count: number }[];
  questions: string[];
}

export interface SequenceData {
  type: "sequence";
  title: string;
  instruction: string;
  items?: { label: string; icon?: ObjectName }[];
  sequences?: { items: number[]; answer: number[] }[];
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

export interface TenFrameData {
  type: "ten-frame";
  title: string;
  instruction: string;
  frames: { filled: number; total?: number }[];
}

export interface OpenResponseData {
  type: "open-response";
  title: string;
  instruction: string;
  prompts: { text: string; type?: "lines" | "box"; lines?: number }[];
}

export interface HomeActivityData {
  type: "home-activity";
  title: string;
  instruction: string;
  suggestions: string[];
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
  | TallyChartData
  | TenFrameData
  | OpenResponseData
  | HomeActivityData
  | PictureGraphData;

export interface WorksheetItem {
  slug: string;
  title: string;
  strand: string;
  description: string;
  activities: ActivityData[];
}
