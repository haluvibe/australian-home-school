"use client";
import GameShell from "./GameShell";
import PetSurvey from "./PetSurvey";

export default function PetSurveyGame() {
  return (
    <GameShell gameName="Pet Survey">
      {(onExit) => <PetSurvey onExit={onExit} />}
    </GameShell>
  );
}
