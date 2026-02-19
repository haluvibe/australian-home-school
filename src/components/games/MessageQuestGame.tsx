"use client";
import GameShell from "./GameShell";
import MessageQuest from "./MessageQuest";

export default function MessageQuestGame() {
  return (
    <GameShell gameName="Message Quest">
      {(onExit) => <MessageQuest onExit={onExit} />}
    </GameShell>
  );
}
