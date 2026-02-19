import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Dot Dash",
  description: "Flash dot patterns appear briefly — can you instantly recognise the quantity? A fast-paced subitising game for Foundation Mathematics.",
  keywords: ["subitising game", "counting game", "dot patterns", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/dot-dash" },
  openGraph: {
    title: "Dot Dash | AI Native School",
    description: "A subitising game for Foundation — see dot patterns and instantly recognise the quantity!",
    url: "/games/dot-dash",
  },
};

export default function DotDashPage() {
  return <GamePageClient gameId="dot-dash" />;
}
