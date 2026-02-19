import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Word Worm",
  description: "Tap falling letters in the right order to spell CVC words and grow your worm. A fun phonics game for Foundation to Year 1 English.",
  keywords: ["spelling game", "CVC words game", "phonics game", "homeschool English game", "Foundation English"],
  alternates: { canonical: "/games/word-worm" },
  openGraph: {
    title: "Word Worm | AI Native School",
    description: "A spelling game for Foundation to Year 1 — catch letters to build words and grow the worm!",
    url: "/games/word-worm",
  },
};

export default function WordWormPage() {
  return <GamePageClient gameId="word-worm" />;
}
