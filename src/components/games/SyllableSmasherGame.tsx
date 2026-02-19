"use client";
import GameShell from "./GameShell";
import SyllableSmasher from "./SyllableSmasher";

export default function SyllableSmasherGame() {
  return (
    <GameShell gameName="Syllable Smasher">
      {(onExit) => <SyllableSmasher onExit={onExit} />}
    </GameShell>
  );
}
