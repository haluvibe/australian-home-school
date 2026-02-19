"use client";
import GameShell from "./GameShell";
import PlaceValueBakery from "./PlaceValueBakery";

export default function PlaceValueBakeryGame() {
  return (
    <GameShell gameName="Place Value Bakery">
      {(onExit) => <PlaceValueBakery onExit={onExit} />}
    </GameShell>
  );
}
