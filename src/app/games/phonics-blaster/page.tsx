import type { Metadata } from "next";
import PhonicsBlasterGame from "@/components/games/PhonicsBlasterGame";

export const metadata: Metadata = {
  title: "Phonics Blaster",
  description: "A space shooter where you switch between blend and digraph weapons — SH, CH, TH, BL — to complete word fragments! Battle across 6 worlds with boss fights.",
  keywords: ["phonics game", "blends and digraphs game", "space shooter phonics", "homeschool English game", "Year 1 phonics"],
  alternates: { canonical: "/games/phonics-blaster" },
  openGraph: {
    title: "Phonics Blaster | AI Native School",
    description: "A space shooter where kids use blend and digraph weapons to complete words across 6 themed worlds.",
    url: "/games/phonics-blaster",
  },
};

export default function PhonicsBlasterPage() {
  return <PhonicsBlasterGame />;
}
