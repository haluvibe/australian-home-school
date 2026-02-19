"use client";
import GameShell from "./GameShell";
import ShapeSorterFactory from "./ShapeSorterFactory";

export default function ShapeSorterFactoryGame() {
  return (
    <GameShell gameName="Shape Sorter Factory">
      {(onExit) => <ShapeSorterFactory onExit={onExit} />}
    </GameShell>
  );
}
