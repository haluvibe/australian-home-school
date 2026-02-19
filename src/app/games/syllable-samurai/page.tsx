import type { Metadata } from "next";
import SyllableSamuraiGame from "@/components/games/SyllableSamuraiGame";

export const metadata: Metadata = {
  title: "Syllable Samurai",
  description: "A Fruit Ninja-style word slicing game where you slash words at their syllable break points. Learn to count and identify syllables in a fast-paced dojo setting.",
  keywords: ["syllable game", "phonics game", "word slicing game", "homeschool English", "Foundation English"],
  alternates: { canonical: "/games/syllable-samurai" },
  openGraph: {
    title: "Syllable Samurai | AI Native School",
    description: "Slash words at their syllable breaks in this Fruit Ninja-style English game for Foundation to Year 2.",
    url: "/games/syllable-samurai",
  },
};

export default function SyllableSamuraiPage() {
  return <SyllableSamuraiGame />;
}
