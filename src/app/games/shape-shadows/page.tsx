import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Shape Shadows",
  description: "Identify mystery shapes from their shadows in this geometry recognition game. Perfect for Foundation to Year 1 students learning about shapes.",
  keywords: ["shapes game", "geometry game", "shape recognition", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/shape-shadows" },
  openGraph: {
    title: "Shape Shadows | AI Native School",
    description: "A geometry game for Foundation to Year 1 — identify shapes from their mysterious shadows!",
    url: "/games/shape-shadows",
  },
};

export default function ShapeShadowsPage() {
  return <GamePageClient gameId="shape-shadows" />;
}
