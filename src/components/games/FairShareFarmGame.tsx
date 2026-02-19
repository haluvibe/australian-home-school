"use client";
import GameShell from "./GameShell";
import FairShareFarm from "./FairShareFarm";

export default function FairShareFarmGame() {
  return (
    <GameShell gameName="Fair Share Farm">
      {(onExit) => <FairShareFarm onExit={onExit} />}
    </GameShell>
  );
}
