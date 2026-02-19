import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Measurement Kitchen",
  description: "Help the chef by comparing mass, capacity, length, and duration in this kitchen-themed measurement game for Foundation Mathematics.",
  keywords: ["measurement game", "mass capacity length", "comparing sizes", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/measurement-kitchen" },
  openGraph: {
    title: "Measurement Kitchen | AI Native School",
    description: "A measurement game for Foundation — compare heavier, lighter, longer, shorter in the kitchen!",
    url: "/games/measurement-kitchen",
  },
};

export default function MeasurementKitchenPage() {
  return <GamePageClient gameId="measurement-kitchen" />;
}
