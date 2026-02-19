"use client";
import GameShell from "./GameShell";
import WordPainter from "./WordPainter";

export default function WordPainterGame() {
  return (
    <GameShell gameName="Word Painter">
      {(onExit) => <WordPainter onExit={onExit} />}
    </GameShell>
  );
}
