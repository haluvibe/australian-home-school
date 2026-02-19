import type { Metadata } from "next";
import StoryScrambleGame from "@/components/games/StoryScrambleGame";

export const metadata: Metadata = {
  title: "Story Scramble",
  description: "Drag scrambled story scene cards back into the correct narrative order on a timeline. A fun Foundation English game for comprehension and sequencing.",
  keywords: ["story sequencing game", "narrative order game", "comprehension game", "homeschool english game", "Foundation English"],
  alternates: { canonical: "/games/story-scramble" },
  openGraph: {
    title: "Story Scramble | AI Native School",
    description: "An interactive English game for Foundation — put scrambled story scenes back in the right order!",
    url: "/games/story-scramble",
  },
};

export default function StoryScramblePage() {
  return <StoryScrambleGame />;
}
