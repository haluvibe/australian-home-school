import type { Metadata } from "next";
import WordPainterGame from "@/components/games/WordPainterGame";

export const metadata: Metadata = {
  title: "Word Painter",
  description: "Drag describing words onto objects to paint and transform a scene. Learn adjectives, colours, sizes, and textures through creative play. Foundation English.",
  keywords: ["word painter game", "adjectives game", "describing words game", "English homeschool game", "Foundation English", "vocabulary game"],
  alternates: { canonical: "/games/word-painter" },
  openGraph: {
    title: "Word Painter | AI Native School",
    description: "A creative describing-words game for Foundation English — drag colour, size, and action words onto objects to paint magical scenes.",
    url: "/games/word-painter",
  },
};

export default function WordPainterPage() {
  return <WordPainterGame />;
}
