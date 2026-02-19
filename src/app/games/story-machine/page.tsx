import type { Metadata } from "next";
import StoryMachineGame from "@/components/games/StoryMachineGame";

export const metadata: Metadata = {
  title: "Story Machine — Creative Writing Factory",
  description: "Drag story building blocks into a magical Rube Goldberg machine to create sentences and short stories. A fun Year 1 English creative writing game.",
  keywords: ["story writing game", "creative writing game", "Year 1 English", "sentence building", "homeschool English game"],
  alternates: { canonical: "/games/story-machine" },
  openGraph: {
    title: "Story Machine | AI Native School",
    description: "A magical creative writing factory — drag characters, settings, actions, and feelings into the machine to build stories!",
    url: "/games/story-machine",
  },
};

export default function StoryMachinePage() {
  return <StoryMachineGame />;
}
