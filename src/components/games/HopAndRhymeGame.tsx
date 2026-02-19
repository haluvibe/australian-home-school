"use client";
import GameShell from "./GameShell";
import HopAndRhyme from "./HopAndRhyme";

export default function HopAndRhymeGame() {
  return (
    <GameShell gameName="Hop & Rhyme">
      {(onExit) => <HopAndRhyme onExit={onExit} />}
    </GameShell>
  );
}
