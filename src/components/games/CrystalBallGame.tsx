"use client";
import GameShell from "./GameShell";
import CrystalBall from "./CrystalBall";

export default function CrystalBallGame() {
  return (
    <GameShell gameName="Crystal Ball">
      {(onExit) => <CrystalBall onExit={onExit} />}
    </GameShell>
  );
}
