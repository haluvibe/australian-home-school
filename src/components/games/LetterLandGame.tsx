"use client";
import GameShell from "./GameShell";
import LetterLand from "./LetterLand";

export default function LetterLandGame() {
  return (
    <GameShell gameName="Letter Land">
      {(onExit) => <LetterLand onExit={onExit} />}
    </GameShell>
  );
}
