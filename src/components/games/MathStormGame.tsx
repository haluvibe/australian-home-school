"use client";
import GameShell from "./GameShell";
import MathStorm from "./MathStorm";

export default function MathStormGame() {
  return (
    <GameShell gameName="MathStorm: Number Squadron">
      {(onExit) => <MathStorm onExit={onExit} />}
    </GameShell>
  );
}
