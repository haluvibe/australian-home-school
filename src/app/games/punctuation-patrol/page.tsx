import type { Metadata } from "next";
import PunctuationPatrolGame from "@/components/games/PunctuationPatrolGame";

export const metadata: Metadata = {
  title: "Punctuation Patrol",
  description: "Drag the correct punctuation mark to fix sentences driving across the screen! Learn full stops, question marks, and exclamation marks in this Year 1 English game.",
  keywords: ["punctuation game", "full stops game", "question marks game", "exclamation marks game", "Year 1 English", "grammar game", "homeschool English"],
  alternates: { canonical: "/games/punctuation-patrol" },
  openGraph: {
    title: "Punctuation Patrol | AI Native School",
    description: "A drag-and-drop punctuation game for Year 1 English — fix sentences before they drive off the screen!",
    url: "/games/punctuation-patrol",
  },
};

export default function PunctuationPatrolPage() {
  return <PunctuationPatrolGame />;
}
