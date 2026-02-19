import type { Metadata } from "next";
import HopAndRhymeGame from "@/components/games/HopAndRhymeGame";

export const metadata: Metadata = {
  title: "Hop & Rhyme — Rhyming Platformer",
  description: "Help a frog hop between floating platforms to find words that rhyme! A fun platformer for Foundation English — covering -at, -og, -un, -an, -ig, -op, -ed and -ug word families.",
  keywords: ["rhyming", "phonics", "CVC words", "foundation", "platformer", "literacy", "word families"],
  alternates: { canonical: "/games/hop-and-rhyme" },
  openGraph: {
    title: "Hop & Rhyme — Rhyming Platformer",
    description: "Jump the frog to the rhyming word platform! Foundation English phonics game.",
    type: "website",
  },
};

export default function HopAndRhymePage() {
  return <HopAndRhymeGame />;
}
