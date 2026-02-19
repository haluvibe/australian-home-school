import type { Metadata } from "next";
import SightWordSprintGame from "@/components/games/SightWordSprintGame";

export const metadata: Metadata = {
  title: "Sight Word Sprint",
  description: "An endless runner platformer where you jump to collect matching sight words, duck under obstacles, and build combos across Forest, City, and Space zones.",
  keywords: ["sight words game", "reading game", "phonics game", "homeschool english", "Year 1 english", "high frequency words"],
  alternates: { canonical: "/games/sight-word-sprint" },
  openGraph: {
    title: "Sight Word Sprint | AI Native School",
    description: "An endless runner platformer for learning sight words — for Foundation to Year 1.",
    url: "/games/sight-word-sprint",
  },
};

export default function SightWordSprintPage() {
  return <SightWordSprintGame />;
}
