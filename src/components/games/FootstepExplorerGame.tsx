"use client";
import GameShell from "./GameShell";
import FootstepExplorer from "./FootstepExplorer";

export default function FootstepExplorerGame() {
  return (
    <GameShell gameName="Footstep Explorer">
      {(onExit) => <FootstepExplorer onExit={onExit} />}
    </GameShell>
  );
}
