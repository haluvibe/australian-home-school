import type { Metadata } from "next";
import BubbleMathLabGame from "@/components/games/BubbleMathLabGame";

export const metadata: Metadata = {
  title: "Bubble Math Lab",
  description: "Drag number bubbles together to add them, split them in half, and rescue creatures by delivering the right total. A fun game for Foundation to Year 3 maths.",
  keywords: ["bubble math game", "addition game", "number bonds game", "homeschool maths game", "Foundation maths"],
  alternates: { canonical: "/games/bubble-math-lab" },
  openGraph: {
    title: "Bubble Math Lab | AI Native School",
    description: "An interactive maths game for Foundation to Year 3 — add, split, and rescue creatures with number bubbles.",
    url: "/games/bubble-math-lab",
  },
};

export default function BubbleMathLabPage() {
  return <BubbleMathLabGame />;
}
