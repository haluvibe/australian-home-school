import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Critter Compare",
  description: "Compare groups of Australian animals to learn greater than, less than, and equal. A number comparison game for Foundation Mathematics.",
  keywords: ["comparison game", "greater than less than", "counting game", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/critter-compare" },
  openGraph: {
    title: "Critter Compare | AI Native School",
    description: "A number comparison game for Foundation — count Australian critters and compare groups!",
    url: "/games/critter-compare",
  },
};

export default function CritterComparePage() {
  return <GamePageClient gameId="critter-compare" />;
}
