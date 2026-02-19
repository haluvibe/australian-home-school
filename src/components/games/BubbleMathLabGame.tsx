"use client";
import GameShell from "./GameShell";
import BubbleMathLab from "./BubbleMathLab";

export default function BubbleMathLabGame() {
  return (
    <GameShell gameName="Bubble Math Lab">
      {(onExit) => <BubbleMathLab onExit={onExit} />}
    </GameShell>
  );
}
