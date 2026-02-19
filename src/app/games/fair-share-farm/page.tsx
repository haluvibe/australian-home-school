import type { Metadata } from "next";
import FairShareFarmGame from "@/components/games/FairShareFarmGame";

export const metadata: Metadata = {
  title: "Fair Share Farm",
  description: "Drag food to animal troughs to share equally! Learn division, equal sharing, remainders, and grouping in this fun farm game for Year 1 Maths.",
  keywords: ["division game", "equal sharing game", "fair share game", "homeschool maths game", "Year 1 maths", "grouping game"],
  alternates: { canonical: "/games/fair-share-farm" },
  openGraph: {
    title: "Fair Share Farm | AI Native School",
    description: "An interactive maths game for Year 1 — share food equally between farm animals and learn early division concepts.",
    url: "/games/fair-share-farm",
  },
};

export default function FairShareFarmPage() {
  return <FairShareFarmGame />;
}
