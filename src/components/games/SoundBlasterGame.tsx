"use client";
import GameShell from "./GameShell";
import SoundBlaster from "./SoundBlaster";

export default function SoundBlasterGame() {
  return (
    <GameShell gameName="Sound Blaster">
      {(onExit) => <SoundBlaster onExit={onExit} />}
    </GameShell>
  );
}
