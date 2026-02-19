"use client";
import GameShell from "./GameShell";
import StoryMachine from "./StoryMachine";

export default function StoryMachineGame() {
  return (
    <GameShell gameName="Story Machine">
      {(onExit) => <StoryMachine onExit={onExit} />}
    </GameShell>
  );
}
