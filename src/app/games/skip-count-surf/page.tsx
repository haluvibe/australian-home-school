import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Skip Count Surf",
  description: "Ride waves of numbers by tapping the next number in skip counting sequences. Count by 2s, 5s, and 10s in this surfing maths game.",
  keywords: ["skip counting game", "counting by 2s 5s 10s", "number patterns game", "homeschool maths game", "Year 1 maths"],
  alternates: { canonical: "/games/skip-count-surf" },
  openGraph: {
    title: "Skip Count Surf | AI Native School",
    description: "A skip counting game for Year 1-2 — surf the waves by hitting the right numbers!",
    url: "/games/skip-count-surf",
  },
};

export default function SkipCountSurfPage() {
  return <GamePageClient gameId="skip-count-surf" />;
}
