import englishData from "../../curriculum/english/english-curriculum-data.json";
import mathematicsData from "../../curriculum/mathematics/mathematics-curriculum-data.json";

export interface StrandItem {
  description: string;
  example?: string;
  khanAcademyUrl?: string;
  worksheetSlug?: string;
}

export interface StrandObjectives {
  strand: string;
  items: (string | StrandItem)[];
}

export interface YearLevelData {
  yearLevel: string;
  description?: string;
  objectives?: StrandObjectives[];
  achievementStandard: string;
  strands: string[];
}

export interface SubjectData {
  subject: string;
  slug: string;
  years: YearLevelData[];
  downloadUrl: string;
}

export const subjects: SubjectData[] = [
  {
    subject: "English",
    slug: "english",
    years: englishData as YearLevelData[],
    downloadUrl:
      "https://www.australiancurriculum.edu.au/downloads/learning-areas#accordion-9869db6018-item-6689c0bc06",
  },
  {
    subject: "Mathematics",
    slug: "mathematics",
    years: mathematicsData as YearLevelData[],
    downloadUrl:
      "https://www.australiancurriculum.edu.au/downloads/learning-areas#accordion-9869db6018-item-7860571ccc",
  },
];

export const primaryYears = [
  "Foundation",
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
];

export const secondaryYears = [
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
];
