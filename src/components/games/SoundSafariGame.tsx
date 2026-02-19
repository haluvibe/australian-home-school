"use client";
import GameShell from "./GameShell";
import SoundSafari from "./SoundSafari";

export default function SoundSafariGame() {
  return (
    <GameShell gameName="Sound Safari">
      {(onExit) => <SoundSafari onExit={onExit} />}
    </GameShell>
  );
}
