import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Position Playground",
  description: "Learn spatial language — above, below, next to, between, left, right — by finding and placing objects in a colourful playground. A position game for Foundation Mathematics.",
  keywords: ["position game", "spatial language", "above below left right", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/position-playground" },
  openGraph: {
    title: "Position Playground | AI Native School",
    description: "A position and location game for Foundation — learn above, below, next to, and between!",
    url: "/games/position-playground",
  },
};

export default function PositionPlaygroundPage() {
  return <GamePageClient gameId="position-playground" />;
}
