"use client";
import GameShell from "./GameShell";
import SyllableSamurai from "./SyllableSamurai";

export default function SyllableSamuraiGame() {
  return (
    <GameShell gameName="Syllable Samurai">
      {(onExit) => <SyllableSamurai onExit={onExit} />}
    </GameShell>
  );
}
