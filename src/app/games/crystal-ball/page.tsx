import type { Metadata } from "next";
import CrystalBallGame from "@/components/games/CrystalBallGame";

export const metadata: Metadata = {
  title: "Crystal Ball — Story Prediction Game",
  description: "Read a story beginning in a magical crystal ball, then predict what happens next by dragging your chosen ending to complete the vision. A reading comprehension game for Year 1 English.",
  keywords: ["story prediction game", "reading comprehension", "Year 1 English", "homeschool reading game", "inferencing game"],
  alternates: { canonical: "/games/crystal-ball" },
  openGraph: {
    title: "Crystal Ball — Story Prediction Game | AI Native School",
    description: "A magical reading comprehension game — predict story endings by dragging crystal balls. Year 1 English.",
    url: "/games/crystal-ball",
  },
};

export default function CrystalBallPage() {
  return <CrystalBallGame />;
}
