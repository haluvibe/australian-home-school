"use client";

import GameShell from "@/components/games/GameShell";
import BubbleMathLab from "@/components/games/BubbleMathLab";
import WordWorm from "@/components/games/WordWorm";
import ShapeShadows from "@/components/games/ShapeShadows";
import SkipCountSurf from "@/components/games/SkipCountSurf";
import PatternPirates from "@/components/games/PatternPirates";
import CritterCompare from "@/components/games/CritterCompare";

type GameId =
  | "bubble-math-lab"
  | "word-worm"
  | "shape-shadows"
  | "skip-count-surf"
  | "pattern-pirates"
  | "critter-compare";

const GAME_NAMES: Record<GameId, string> = {
  "bubble-math-lab": "Bubble Math Lab",
  "word-worm": "Word Worm",
  "shape-shadows": "Shape Shadows",
  "skip-count-surf": "Skip Count Surf",
  "pattern-pirates": "Pattern Pirates",
  "critter-compare": "Critter Compare",
};

function GameComponent({ gameId, onExit }: { gameId: GameId; onExit: () => void }) {
  switch (gameId) {
    case "bubble-math-lab":
      return <BubbleMathLab onExit={onExit} />;
    case "word-worm":
      return <WordWorm onExit={onExit} />;
    case "shape-shadows":
      return <ShapeShadows onExit={onExit} />;
    case "skip-count-surf":
      return <SkipCountSurf onExit={onExit} />;
    case "pattern-pirates":
      return <PatternPirates onExit={onExit} />;
    case "critter-compare":
      return <CritterCompare onExit={onExit} />;
  }
}

interface GamePageClientProps {
  gameId: GameId;
}

export default function GamePageClient({ gameId }: GamePageClientProps) {
  return (
    <GameShell gameName={GAME_NAMES[gameId]}>
      {(onExit) => <GameComponent gameId={gameId} onExit={onExit} />}
    </GameShell>
  );
}
