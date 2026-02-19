import type { Metadata } from "next";
import SyllableSmasherGame from "@/components/games/SyllableSmasherGame";

export const metadata: Metadata = {
  title: "Syllable Smasher",
  description: "Smash words at the correct syllable break points with a mighty hammer! Progress through Wood, Stone, Metal, and Crystal materials in this dojo-themed phonics game.",
  keywords: ["syllable game", "phonics game", "word breaking game", "homeschool English game", "syllable counting"],
  alternates: { canonical: "/games/syllable-smasher" },
  openGraph: {
    title: "Syllable Smasher | AI Native School",
    description: "A dojo-themed syllable breaking game — smash words at the right break points to progress through 4 material tiers.",
    url: "/games/syllable-smasher",
  },
};

export default function SyllableSmasherPage() {
  return <SyllableSmasherGame />;
}
