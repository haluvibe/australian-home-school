"use client";
import GameShell from "./GameShell";
import PhonicsBlaster from "./PhonicsBlaster";

export default function PhonicsBlasterGame() {
  return (
    <GameShell gameName="Phonics Blaster">
      {(onExit) => <PhonicsBlaster onExit={onExit} />}
    </GameShell>
  );
}
