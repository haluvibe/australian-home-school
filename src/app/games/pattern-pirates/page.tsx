import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Pattern Pirates",
  description: "Crack repeating pattern codes to unlock pirate treasure. A pattern recognition game for Foundation to Year 1 Mathematics.",
  keywords: ["pattern game", "repeating patterns", "algebra game", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/pattern-pirates" },
  openGraph: {
    title: "Pattern Pirates | AI Native School",
    description: "A pattern recognition game for Foundation to Year 1 — decode the patterns to find pirate treasure!",
    url: "/games/pattern-pirates",
  },
};

export default function PatternPiratesPage() {
  return <GamePageClient gameId="pattern-pirates" />;
}
