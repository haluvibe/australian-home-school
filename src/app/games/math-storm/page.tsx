import type { Metadata } from "next";
import GameShell from "@/components/games/GameShell";
import MathStorm from "@/components/games/MathStorm";

export const metadata: Metadata = {
  title: "MathStorm: Number Squadron",
  description: "A vertical scrolling shooter where your weapons are maths operations. Blast enemies with addition, subtraction, multiplication, and division.",
  keywords: ["maths game", "shooter game", "multiplication game", "homeschool maths", "Year 2 maths", "Year 6 maths"],
  alternates: { canonical: "/games/math-storm" },
  openGraph: {
    title: "MathStorm: Number Squadron | AI Native School",
    description: "A vertical scrolling shooter where your weapons are maths operations — for Year 2 to Year 6.",
    url: "/games/math-storm",
  },
};

export default function MathStormPage() {
  return (
    <GameShell gameName="MathStorm: Number Squadron">
      {(onExit) => <MathStorm onExit={onExit} />}
    </GameShell>
  );
}
