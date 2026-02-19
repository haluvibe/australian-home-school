import type { Metadata } from "next";
import LetterLandGame from "@/components/games/LetterLandGame";

export const metadata: Metadata = {
  title: "Letter Land",
  description: "A platformer adventure where you collect lowercase keys to free uppercase letters from cages! Jump across platforms, stomp enemies, and defeat bosses across 4 worlds.",
  keywords: ["letter recognition game", "alphabet platformer", "uppercase lowercase game", "homeschool English game", "Foundation English"],
  alternates: { canonical: "/games/letter-land" },
  openGraph: {
    title: "Letter Land | AI Native School",
    description: "A platformer adventure matching uppercase and lowercase letters across 4 themed worlds.",
    url: "/games/letter-land",
  },
};

export default function LetterLandPage() {
  return <LetterLandGame />;
}
