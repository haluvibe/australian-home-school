"use client";
import GameShell from "./GameShell";
import StoryScramble from "./StoryScramble";

export default function StoryScrambleGame() {
  return (
    <GameShell gameName="Story Scramble">
      {(onExit) => <StoryScramble onExit={onExit} />}
    </GameShell>
  );
}
