"use client";

import { useState, useEffect, useCallback } from "react";

// ============================================================
// PATTERN PIRATES  --  Repeating Pattern Game
// Foundation / Year 1 Mathematics
// Curriculum: "Copy and continue repeating patterns"
//             "Create skip counting and repeating patterns,
//              identifying the repeating unit"
// ============================================================

interface PatternPiratesProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";

interface PatternSymbol {
  emoji: string;
  name: string;
  color: string;
}

interface PatternChallenge {
  pattern: PatternSymbol[]; // the repeating unit
  displayed: (PatternSymbol | null)[]; // what's shown (null = blank to fill)
  blanks: number[]; // indices that are blank
  currentBlank: number; // which blank we're on
  options: PatternSymbol[]; // what player can choose from
}

// Symbol sets grouped by theme
const PIRATE_FLAGS: PatternSymbol[] = [
  { emoji: "\uD83C\uDFF4\u200D\u2620\uFE0F", name: "Pirate Flag", color: "#1a1a2e" },
  { emoji: "\u2693", name: "Anchor", color: "#3b82f6" },
  { emoji: "\uD83E\uDE99", name: "Coin", color: "#f59e0b" },
  { emoji: "\uD83D\uDC8E", name: "Gem", color: "#a855f7" },
  { emoji: "\u2694\uFE0F", name: "Swords", color: "#ef4444" },
  { emoji: "\uD83D\uDC19", name: "Octopus", color: "#ec4899" },
];

const TREASURE_ITEMS: PatternSymbol[] = [
  { emoji: "\uD83D\uDD31", name: "Trident", color: "#06b6d4" },
  { emoji: "\uD83E\uDEF7", name: "Shell", color: "#f472b6" },
  { emoji: "\u2B50", name: "Star", color: "#fbbf24" },
  { emoji: "\uD83D\uDD11", name: "Key", color: "#a3a3a3" },
  { emoji: "\uD83D\uDC0D", name: "Parrot", color: "#22c55e" },
  { emoji: "\uD83C\uDF0A", name: "Wave", color: "#38bdf8" },
];

const SHAPE_SYMBOLS: PatternSymbol[] = [
  { emoji: "\uD83D\uDD34", name: "Red Circle", color: "#ef4444" },
  { emoji: "\uD83D\uDD35", name: "Blue Circle", color: "#3b82f6" },
  { emoji: "\uD83D\uDFE2", name: "Green Circle", color: "#22c55e" },
  { emoji: "\uD83D\uDFE1", name: "Yellow Circle", color: "#eab308" },
  { emoji: "\uD83D\uDFE3", name: "Purple Circle", color: "#a855f7" },
  { emoji: "\uD83D\uDFE0", name: "Orange Circle", color: "#f97316" },
];

const ALL_SYMBOL_SETS = [PIRATE_FLAGS, TREASURE_ITEMS, SHAPE_SYMBOLS];

export default function PatternPirates({ onExit }: PatternPiratesProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [challenge, setChallenge] = useState<PatternChallenge | null>(null);
  const [patternsCompleted, setPatternsCompleted] = useState(0);
  const [patternsNeeded, setPatternsNeeded] = useState(4);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [treasureCount, setTreasureCount] = useState(0);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [showPatternUnit, setShowPatternUnit] = useState(false);

  const generateChallenge = useCallback(
    (lvl: number): PatternChallenge => {
      // Choose symbol set based on level variety
      const symbolSet = ALL_SYMBOL_SETS[lvl % ALL_SYMBOL_SETS.length];

      // Pattern unit length: 2 for easy, up to 4 for hard
      const unitLength = Math.min(2 + Math.floor(lvl / 3), 4);

      // Pick random symbols for the repeating unit
      const shuffled = [...symbolSet].sort(() => Math.random() - 0.5);
      const pattern = shuffled.slice(0, unitLength);

      // How many repetitions to show
      const reps = Math.min(3 + Math.floor(lvl / 4), 5);
      const fullSequence: PatternSymbol[] = [];
      for (let r = 0; r < reps; r++) {
        for (const sym of pattern) {
          fullSequence.push(sym);
        }
      }

      // Number of blanks: 1-2 for easy levels, more for harder
      const numBlanks = Math.min(1 + Math.floor(lvl / 3), 4);

      // Place blanks in the latter half of the sequence (not the first unit ideally)
      const startIdx = Math.max(unitLength, Math.floor(fullSequence.length / 2));
      const possiblePositions: number[] = [];
      for (let i = startIdx; i < fullSequence.length; i++) {
        possiblePositions.push(i);
      }

      const blanks: number[] = [];
      const shuffledPositions = possiblePositions.sort(() => Math.random() - 0.5);
      for (let i = 0; i < Math.min(numBlanks, shuffledPositions.length); i++) {
        blanks.push(shuffledPositions[i]);
      }
      blanks.sort((a, b) => a - b);

      // Create displayed array with nulls for blanks
      const displayed: (PatternSymbol | null)[] = fullSequence.map((sym, i) =>
        blanks.includes(i) ? null : sym
      );

      // Options: include the correct answers + distractors
      const correctAnswers = blanks.map((b) => fullSequence[b]);
      const allSymbols = symbolSet.filter(
        (s) => !correctAnswers.some((c) => c.emoji === s.emoji)
      );
      const distractors = allSymbols
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(3, allSymbols.length));

      const options = [
        ...new Map(
          [...correctAnswers, ...distractors].map((s) => [s.emoji, s])
        ).values(),
      ].sort(() => Math.random() - 0.5);

      return {
        pattern,
        displayed,
        blanks,
        currentBlank: 0,
        options,
      };
    },
    []
  );

  const initLevel = useCallback(
    (lvl: number) => {
      const needed = Math.min(4 + Math.floor(lvl / 2), 8);
      setPatternsNeeded(needed);
      setPatternsCompleted(0);
      setShowResult(null);
      setShakeScreen(false);
      setShowPatternUnit(false);

      const ch = generateChallenge(lvl);
      setChallenge(ch);
    },
    [generateChallenge]
  );

  const startGame = () => {
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    setTreasureCount(0);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setScreen("playing");
    initLevel(newLevel);
  };

  const handleOptionTap = useCallback(
    (option: PatternSymbol) => {
      if (!challenge || showResult) return;

      const blankIdx = challenge.blanks[challenge.currentBlank];
      const correctSymbol = challenge.pattern[blankIdx % challenge.pattern.length];

      if (option.emoji === correctSymbol.emoji) {
        // Correct!
        const newDisplayed = [...challenge.displayed];
        newDisplayed[blankIdx] = option;

        const nextBlank = challenge.currentBlank + 1;

        if (nextBlank >= challenge.blanks.length) {
          // Pattern complete!
          setScore((s) => s + 25 * level);
          setTreasureCount((t) => t + 1);
          setShowResult("correct");
          setShowPatternUnit(true);

          const newCompleted = patternsCompleted + 1;
          setPatternsCompleted(newCompleted);

          setTimeout(() => {
            if (newCompleted >= patternsNeeded) {
              setScreen("levelComplete");
            } else {
              setShowResult(null);
              setShowPatternUnit(false);
              const ch = generateChallenge(level);
              setChallenge(ch);
            }
          }, 1500);
        } else {
          setChallenge({
            ...challenge,
            displayed: newDisplayed,
            currentBlank: nextBlank,
          });
        }

        setChallenge((prev) =>
          prev
            ? {
                ...prev,
                displayed: newDisplayed,
                currentBlank: nextBlank,
              }
            : null
        );
      } else {
        // Wrong!
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 400);
        setLives((l) => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 500);
          }
          return newL;
        });
      }
    },
    [challenge, showResult, level, patternsCompleted, patternsNeeded, generateChallenge]
  );

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="pp-game">
        <style>{ppStyles}</style>
        <div className="pp-intro">
          <div className="pp-intro-bg">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="pp-bg-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                {"\u2728"}
              </div>
            ))}
          </div>
          <div className="pp-intro-content">
            <div className="pp-logo">
              <span className="pp-logo-icon">{"\u2620\uFE0F"}</span>
              <h1>Pattern Pirates</h1>
              <span className="pp-logo-icon">{"\uD83C\uDFF4\u200D\u2620\uFE0F"}</span>
            </div>
            <p className="pp-tagline">Crack the code, find the treasure!</p>
            <div className="pp-instructions-card">
              <h3>How to Plunder</h3>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-sym">{"\uD83D\uDD34"}</span>
                  <span className="pp-sym">{"\uD83D\uDD35"}</span>
                  <span className="pp-sym">{"\uD83D\uDD34"}</span>
                  <span className="pp-sym">{"\uD83D\uDD35"}</span>
                  <span className="pp-sym blank">?</span>
                </div>
                <p>
                  Spot the <span className="pp-hl-gold">REPEATING PATTERN</span>
                </p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-sym blank">?</span>
                  <span className="pp-arrow">{"\u2192"}</span>
                  <span className="pp-sym">{"\uD83D\uDD34"}</span>
                </div>
                <p>
                  <strong>TAP</strong> the right symbol to{" "}
                  <span className="pp-hl-green">FILL</span> the gaps!
                </p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-treasure-icon">{"\uD83D\uDC8E"}{"\uD83E\uDE99"}{"\uD83D\uDD11"}</span>
                </div>
                <p>
                  Complete patterns to unlock{" "}
                  <span className="pp-hl-gold">TREASURE!</span>
                </p>
              </div>
            </div>
            <button className="pp-start-btn" onClick={startGame}>
              {"\u2693"} Set Sail! {"\u2693"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="pp-game">
        <style>{ppStyles}</style>
        <div className="pp-complete">
          <div className="pp-complete-content">
            <h1 className="pp-complete-title">
              {"\uD83C\uDFF4\u200D\u2620\uFE0F"} Treasure Found! Level {level}! {"\uD83D\uDC8E"}
            </h1>
            <div className="pp-treasure-display">
              {Array.from({ length: Math.min(treasureCount, 10) }, (_, i) => (
                <span
                  key={i}
                  className="pp-treasure-piece"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {["\uD83D\uDC8E", "\uD83E\uDE99", "\uD83D\uDD11", "\u2B50"][i % 4]}
                </span>
              ))}
            </div>
            <div className="pp-score-card">
              <div className="pp-score-item">
                <span className="pp-score-label">Score</span>
                <span className="pp-score-value">{score}</span>
              </div>
              <div className="pp-score-item">
                <span className="pp-score-label">Treasure Collected</span>
                <span className="pp-score-value">{treasureCount}</span>
              </div>
            </div>
            <div className="pp-complete-buttons">
              <button className="pp-next-btn" onClick={nextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button
                className="pp-menu-btn"
                onClick={() => (onExit ? onExit() : setScreen("intro"))}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== GAME OVER =====================
  if (screen === "gameOver") {
    return (
      <div className="pp-game">
        <style>{ppStyles}</style>
        <div className="pp-complete">
          <div className="pp-complete-content">
            <h1 className="pp-complete-title">
              {"\u2693"} Ship sunk!
            </h1>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
              }}
            >
              You completed {patternsCompleted} patterns on Level {level}
            </p>
            <div className="pp-score-card">
              <div className="pp-score-item">
                <span className="pp-score-label">Final Score</span>
                <span className="pp-score-value">{score}</span>
              </div>
              <div className="pp-score-item">
                <span className="pp-score-label">Treasure Found</span>
                <span className="pp-score-value">{treasureCount}</span>
              </div>
            </div>
            <div className="pp-complete-buttons">
              <button className="pp-next-btn" onClick={startGame}>
                Set Sail Again {"\uD83D\uDD04"}
              </button>
              <button
                className="pp-menu-btn"
                onClick={() => (onExit ? onExit() : setScreen("intro"))}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PLAYING =====================
  return (
    <div className="pp-game">
      <style>{ppStyles}</style>
      <div className={`pp-play ${shakeScreen ? "pp-shake" : ""}`}>
        {/* Header */}
        <div className="pp-header">
          <div className="pp-header-left">
            <button
              className="pp-back-btn"
              onClick={() => (onExit ? onExit() : setScreen("intro"))}
            >
              {"\u2190"}
            </button>
            <div className="pp-level-badge">Level {level}</div>
          </div>
          <div className="pp-header-center">
            <span className="pp-lives">{livesDisplay.join(" ")}</span>
          </div>
          <div className="pp-header-right">
            <div className="pp-score-badge">
              {"\uD83D\uDC8E"} {treasureCount}
            </div>
            <div className="pp-score-badge gold">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="pp-progress">
          {patternsCompleted} / {patternsNeeded} patterns
        </div>

        {/* Main pattern area */}
        {challenge && (
          <div className="pp-pattern-area">
            {/* The pirate ship / treasure chest context */}
            <div className="pp-scene">
              <div className="pp-ship">{"\uD83C\uDFF4\u200D\u2620\uFE0F"}</div>
              <div className="pp-map-label">Decode the pattern to unlock the chest!</div>
            </div>

            {/* Pattern display */}
            <div className="pp-pattern-strip">
              {challenge.displayed.map((sym, i) => {
                const isBlank = sym === null;
                const isCurrentBlank =
                  isBlank && challenge.blanks[challenge.currentBlank] === i;
                const isFutureBlank =
                  isBlank && !isCurrentBlank;

                return (
                  <div
                    key={i}
                    className={`pp-pattern-cell ${isBlank ? "blank" : "filled"} ${
                      isCurrentBlank ? "active" : ""
                    } ${isFutureBlank ? "future" : ""} ${
                      showResult === "correct" ? "pp-cell-correct" : ""
                    }`}
                  >
                    {sym ? (
                      <span className="pp-cell-emoji">{sym.emoji}</span>
                    ) : (
                      <span className="pp-cell-question">?</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pattern unit reveal */}
            {showPatternUnit && challenge.pattern && (
              <div className="pp-unit-reveal">
                <span className="pp-unit-label">Repeating unit:</span>
                <div className="pp-unit-symbols">
                  {challenge.pattern.map((sym, i) => (
                    <span key={i} className="pp-unit-sym">
                      {sym.emoji}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Options */}
            <div className="pp-options">
              <p className="pp-options-label">Choose the next piece:</p>
              <div className="pp-options-grid">
                {challenge.options.map((opt) => (
                  <button
                    key={opt.emoji}
                    className="pp-option-btn"
                    onClick={() => handleOptionTap(opt)}
                    disabled={showResult !== null}
                  >
                    <span className="pp-option-emoji">{opt.emoji}</span>
                    <span className="pp-option-name">{opt.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Result overlay */}
            {showResult === "correct" && (
              <div className="pp-result-correct">
                {"\uD83C\uDF89"} Pattern Complete! {"\uD83D\uDC8E"}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const ppStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .pp-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
  }

  .pp-intro, .pp-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .pp-intro-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .pp-bg-star {
    position: absolute; font-size: 1.2rem; animation: ppStarTwinkle 3s ease-in-out infinite;
  }

  @keyframes ppStarTwinkle {
    0%, 100% { opacity: 0.2; transform: scale(0.8); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }

  .pp-intro-content, .pp-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .pp-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .pp-logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem); font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .pp-logo-icon { font-size: 2.5rem; animation: ppBounce 2s ease-in-out infinite; }

  @keyframes ppBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  .pp-tagline { color: #fbbf24; font-size: 1.1rem; margin-bottom: 2rem; }

  .pp-instructions-card {
    background: rgba(0,0,0,0.3); border: 2px solid rgba(251,191,36,0.3);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem; backdrop-filter: blur(10px);
  }

  .pp-instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1rem; }

  .pp-instruction { margin-bottom: 1.2rem; }
  .pp-instruction:last-child { margin-bottom: 0; }

  .pp-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.4rem; margin-bottom: 0.4rem;
  }

  .pp-sym {
    width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; border-radius: 8px; background: rgba(255,255,255,0.1);
  }

  .pp-sym.blank {
    border: 2px dashed rgba(251,191,36,0.5); color: #fbbf24; font-weight: 700; font-size: 1rem;
  }

  .pp-arrow { color: #64748b; font-size: 1.2rem; }
  .pp-treasure-icon { font-size: 1.5rem; }
  .pp-instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .pp-hl-gold { color: #fbbf24; font-weight: 700; }
  .pp-hl-green { color: #4ade80; font-weight: 700; }

  .pp-start-btn, .pp-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: #1e1b4b;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(251,191,36,0.4);
  }

  .pp-start-btn:hover, .pp-next-btn:hover {
    transform: translateY(-3px); box-shadow: 0 15px 50px rgba(251,191,36,0.5);
  }

  .pp-complete-title { font-size: clamp(1.6rem, 6vw, 2.3rem); color: white; margin-bottom: 1rem; }

  .pp-treasure-display {
    display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .pp-treasure-piece {
    font-size: 2rem; animation: ppTreasureBounce 0.8s ease infinite;
  }

  @keyframes ppTreasureBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(10deg); }
  }

  .pp-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }
  .pp-score-item { display: flex; flex-direction: column; align-items: center; }
  .pp-score-label { font-size: 0.85rem; color: #a5b4fc; margin-bottom: 0.3rem; }
  .pp-score-value { font-size: 2rem; font-weight: 900; color: white; }

  .pp-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .pp-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .pp-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* Playing */
  .pp-play { height: 100%; display: flex; flex-direction: column; overflow-y: auto; }

  .pp-play.pp-shake { animation: ppShake 0.4s ease; }

  @keyframes ppShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-6px); }
    75% { transform: translateX(6px); }
  }

  .pp-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.4); z-index: 50;
  }

  .pp-header-left, .pp-header-right { display: flex; align-items: center; gap: 0.5rem; }
  .pp-header-center { display: flex; align-items: center; gap: 0.5rem; }

  .pp-back-btn {
    width: 36px; height: 36px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 10px; color: white; font-size: 1.1rem;
    cursor: pointer;
  }

  .pp-level-badge {
    padding: 0.4rem 0.8rem; background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 16px; font-weight: 700; color: #1e1b4b; font-size: 0.85rem;
  }

  .pp-lives { font-size: 1rem; }

  .pp-score-badge {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.4rem 0.8rem; background: rgba(168,85,247,0.2);
    border-radius: 16px; color: #a855f7; font-weight: 700; font-size: 0.85rem;
  }

  .pp-score-badge.gold { background: rgba(251,191,36,0.2); color: #fbbf24; }

  .pp-progress { text-align: center; padding: 0.4rem; font-size: 0.8rem; color: #a5b4fc; }

  .pp-pattern-area {
    flex: 1; display: flex; flex-direction: column; padding: 1rem;
    gap: 1rem; justify-content: center;
  }

  .pp-scene { text-align: center; }
  .pp-ship { font-size: 2.5rem; margin-bottom: 0.3rem; }
  .pp-map-label { color: #a5b4fc; font-size: 0.85rem; }

  .pp-pattern-strip {
    display: flex; justify-content: center; gap: 0.4rem; flex-wrap: wrap;
    padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 20px;
  }

  .pp-pattern-cell {
    width: 52px; height: 52px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s ease;
  }

  .pp-pattern-cell.filled {
    background: rgba(255,255,255,0.1);
  }

  .pp-pattern-cell.blank {
    border: 3px dashed rgba(255,255,255,0.2);
  }

  .pp-pattern-cell.active {
    border-color: #fbbf24; animation: ppCellPulse 1s ease-in-out infinite;
    background: rgba(251,191,36,0.1);
  }

  .pp-pattern-cell.future { opacity: 0.5; }

  .pp-pattern-cell.pp-cell-correct {
    background: rgba(74,222,128,0.2); border-color: #4ade80;
  }

  @keyframes ppCellPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  .pp-cell-emoji { font-size: 1.6rem; }
  .pp-cell-question { font-size: 1.2rem; font-weight: 800; color: #fbbf24; }

  .pp-unit-reveal {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    padding: 0.5rem 1rem; background: rgba(74,222,128,0.15); border-radius: 12px;
    animation: ppUnitFade 0.3s ease;
  }

  @keyframes ppUnitFade {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .pp-unit-label { color: #4ade80; font-size: 0.85rem; font-weight: 600; }
  .pp-unit-symbols { display: flex; gap: 0.3rem; }
  .pp-unit-sym { font-size: 1.3rem; }

  .pp-options { text-align: center; }
  .pp-options-label { color: #a5b4fc; font-size: 0.85rem; margin-bottom: 0.5rem; }

  .pp-options-grid {
    display: flex; justify-content: center; gap: 0.6rem; flex-wrap: wrap;
  }

  .pp-option-btn {
    display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
    padding: 0.8rem 1rem; background: rgba(255,255,255,0.08);
    border: 2px solid rgba(255,255,255,0.15); border-radius: 16px;
    cursor: pointer; transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif; min-width: 70px;
  }

  .pp-option-btn:hover:not(:disabled) {
    background: rgba(255,255,255,0.15); border-color: #fbbf24;
    transform: scale(1.05);
  }

  .pp-option-btn:active:not(:disabled) { transform: scale(0.95); }
  .pp-option-btn:disabled { opacity: 0.6; cursor: default; }

  .pp-option-emoji { font-size: 1.8rem; }
  .pp-option-name { font-size: 0.7rem; color: #94a3b8; }

  .pp-result-correct {
    text-align: center; padding: 1rem;
    font-size: 1.2rem; font-weight: 800; color: #4ade80;
    animation: ppResultPop 0.5s ease;
  }

  @keyframes ppResultPop {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  @media (max-width: 600px) {
    .pp-pattern-cell { width: 42px; height: 42px; }
    .pp-cell-emoji { font-size: 1.3rem; }
    .pp-option-btn { padding: 0.6rem 0.8rem; min-width: 60px; }
    .pp-option-emoji { font-size: 1.4rem; }
  }
`;
