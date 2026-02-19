import type { Metadata } from "next";
import PetSurveyGame from "@/components/games/PetSurveyGame";

export const metadata: Metadata = {
  title: "Pet Survey",
  description: "Collect survey data, build picture graphs, and answer questions about your data. A fun Year 1 maths game for learning statistics and data representation.",
  keywords: ["data game", "picture graph game", "survey game", "Year 1 maths", "statistics game", "homeschool maths game"],
  alternates: { canonical: "/games/pet-survey" },
  openGraph: {
    title: "Pet Survey | AI Native School",
    description: "An interactive data and graphing game for Year 1 — collect survey answers, build picture graphs, and analyse your data.",
    url: "/games/pet-survey",
  },
};

export default function PetSurveyPage() {
  return <PetSurveyGame />;
}
