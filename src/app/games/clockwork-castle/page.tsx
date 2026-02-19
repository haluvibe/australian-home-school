import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Clockwork Castle",
  description: "Help castle characters get through their day by matching activities to morning, afternoon, evening, and night. A time-of-day game for Foundation Mathematics.",
  keywords: ["time game", "time of day", "daily routine", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/clockwork-castle" },
  openGraph: {
    title: "Clockwork Castle | AI Native School",
    description: "A time-of-day game for Foundation — match daily activities to the right time in a fairy-tale castle!",
    url: "/games/clockwork-castle",
  },
};

export default function ClockworkCastlePage() {
  return <GamePageClient gameId="clockwork-castle" />;
}
