"use client";
import GameShell from "./GameShell";
import SightWordSprint from "./SightWordSprint";

export default function SightWordSprintGame() {
  return (
    <GameShell gameName="Sight Word Sprint">
      {(onExit) => <SightWordSprint onExit={onExit} />}
    </GameShell>
  );
}
