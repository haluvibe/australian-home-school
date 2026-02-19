import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Data Detective",
  description: "Collect, sort, and graph specimens in a backyard detective adventure. A data and statistics game for Foundation Mathematics.",
  keywords: ["data game", "sorting game", "picture graphs", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/data-detective" },
  openGraph: {
    title: "Data Detective | AI Native School",
    description: "A data collection game for Foundation — collect bugs, sort them, build graphs, and answer questions!",
    url: "/games/data-detective",
  },
};

export default function DataDetectivePage() {
  return <GamePageClient gameId="data-detective" />;
}
