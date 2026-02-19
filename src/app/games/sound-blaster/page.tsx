import type { Metadata } from "next";
import SoundBlasterGame from "@/components/games/SoundBlasterGame";

export const metadata: Metadata = {
  title: "Sound Blaster",
  description: "A platformer where you load beginning letter sounds into a blaster to collect matching objects! Jump across platforms, defeat wrong-letter monsters, and battle bosses across 4 themed worlds.",
  keywords: ["phonics game", "beginning sounds game", "letter sounds platformer", "homeschool English game", "Foundation phonics"],
  alternates: { canonical: "/games/sound-blaster" },
  openGraph: {
    title: "Sound Blaster | AI Native School",
    description: "A platformer adventure matching beginning letter sounds to objects across 4 themed worlds.",
    url: "/games/sound-blaster",
  },
};

export default function SoundBlasterPage() {
  return <SoundBlasterGame />;
}
