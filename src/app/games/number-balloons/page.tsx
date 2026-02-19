import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Number Balloons",
  description: "Pop matching balloon pairs to learn number names, numerals, and quantities from 0 to 20. A fun number recognition game for Foundation Mathematics.",
  keywords: ["number names game", "number recognition", "numerals 0-20", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/number-balloons" },
  openGraph: {
    title: "Number Balloons | AI Native School",
    description: "A number recognition game for Foundation — match numerals, words, and quantities by popping balloons!",
    url: "/games/number-balloons",
  },
};

export default function NumberBalloonsPage() {
  return <GamePageClient gameId="number-balloons" />;
}
