import type { Metadata } from "next";
import SoundSafariGame from "@/components/games/SoundSafariGame";

export const metadata: Metadata = {
  title: "Sound Safari",
  description: "Read instructions carefully and carry them out by dragging objects around a safari scene. A fun Year 1 English game for listening, following instructions, and spatial language.",
  keywords: ["listening game", "following instructions game", "Year 1 English", "spatial language", "homeschool English game"],
  alternates: { canonical: "/games/sound-safari" },
  openGraph: {
    title: "Sound Safari | AI Native School",
    description: "An interactive English game for Year 1 — read instructions, drag objects, and explore a lush safari scene.",
    url: "/games/sound-safari",
  },
};

export default function SoundSafariPage() {
  return <SoundSafariGame />;
}
