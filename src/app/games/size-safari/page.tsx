import type { Metadata } from "next";
import GamePageClient from "@/components/games/GamePageClient";

export const metadata: Metadata = {
  title: "Size Safari",
  description: "Snap photos of the taller, shorter, longer, or heavier animal on your Australian safari. A direct comparison game for Foundation Mathematics.",
  keywords: ["comparison game", "taller shorter longer", "direct comparison", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/size-safari" },
  openGraph: {
    title: "Size Safari | AI Native School",
    description: "A direct comparison game for Foundation — photograph the taller, shorter, or heavier animal on safari!",
    url: "/games/size-safari",
  },
};

export default function SizeSafariPage() {
  return <GamePageClient gameId="size-safari" />;
}
