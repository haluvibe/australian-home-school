"use client";
import GameShell from "./GameShell";
import PunctuationPatrol from "./PunctuationPatrol";

export default function PunctuationPatrolGame() {
  return (
    <GameShell gameName="Punctuation Patrol">
      {(onExit) => <PunctuationPatrol onExit={onExit} />}
    </GameShell>
  );
}
