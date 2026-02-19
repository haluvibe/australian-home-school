"use client";

import GameShell from "@/components/games/GameShell";
import BubbleMathLab from "@/components/games/BubbleMathLab";
import WordWorm from "@/components/games/WordWorm";
import ShapeShadows from "@/components/games/ShapeShadows";
import SkipCountSurf from "@/components/games/SkipCountSurf";
import PatternPirates from "@/components/games/PatternPirates";
import CritterCompare from "@/components/games/CritterCompare";
import NumberBalloons from "@/components/games/NumberBalloons";
import DotDash from "@/components/games/DotDash";
import MeasurementKitchen from "@/components/games/MeasurementKitchen";
import SizeSafari from "@/components/games/SizeSafari";
import ClockworkCastle from "@/components/games/ClockworkCastle";
import PositionPlayground from "@/components/games/PositionPlayground";
import DataDetective from "@/components/games/DataDetective";

type GameId =
  | "bubble-math-lab"
  | "word-worm"
  | "shape-shadows"
  | "skip-count-surf"
  | "pattern-pirates"
  | "critter-compare"
  | "number-balloons"
  | "dot-dash"
  | "measurement-kitchen"
  | "size-safari"
  | "clockwork-castle"
  | "position-playground"
  | "data-detective";

const GAME_NAMES: Record<GameId, string> = {
  "bubble-math-lab": "Bubble Math Lab",
  "word-worm": "Word Worm",
  "shape-shadows": "Shape Shadows",
  "skip-count-surf": "Skip Count Surf",
  "pattern-pirates": "Pattern Pirates",
  "critter-compare": "Critter Compare",
  "number-balloons": "Number Balloons",
  "dot-dash": "Dot Dash",
  "measurement-kitchen": "Measurement Kitchen",
  "size-safari": "Size Safari",
  "clockwork-castle": "Clockwork Castle",
  "position-playground": "Position Playground",
  "data-detective": "Data Detective",
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
    case "number-balloons":
      return <NumberBalloons onExit={onExit} />;
    case "dot-dash":
      return <DotDash onExit={onExit} />;
    case "measurement-kitchen":
      return <MeasurementKitchen onExit={onExit} />;
    case "size-safari":
      return <SizeSafari onExit={onExit} />;
    case "clockwork-castle":
      return <ClockworkCastle onExit={onExit} />;
    case "position-playground":
      return <PositionPlayground onExit={onExit} />;
    case "data-detective":
      return <DataDetective onExit={onExit} />;
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
