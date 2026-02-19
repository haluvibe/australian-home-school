"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ============================================================
// CRITTER COMPARE  --  Number Comparison Game
// Foundation Mathematics
// Curriculum: "Compare the size of collections to at least 20"
//             "Use subitising and counting strategies to
//              quantify collections"
// ============================================================

interface CritterCompareProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";
type CompareMode = "more" | "fewer" | "equal";

interface CritterGroup {
  emoji: string;
  name: string;
  count: number;
  positions: { x: number; y: number; delay: number }[];
}

interface CompareChallenge {
  left: CritterGroup;
  right: CritterGroup;
  mode: CompareMode;
  correctAnswer: "left" | "right" | "equal";
}

// Australian animals
const AUSSIE_CRITTERS = [
  { emoji: "\uD83E\uDD98", name: "Kangaroo" },
  { emoji: "\uD83D\uDC28", name: "Koala" },
  { emoji: "\uD83E\uDD86", name: "Duck" },
  { emoji: "\uD83D\uDC0A", name: "Croc" },
  { emoji: "\uD83E\uDD9C", name: "Parrot" },
  { emoji: "\uD83D\uDC22", name: "Turtle" },
  { emoji: "\uD83D\uDC1B", name: "Bug" },
  { emoji: "\uD83E\uDD8B", name: "Butterfly" },
  { emoji: "\uD83D\uDC0C", name: "Snail" },
  { emoji: "\uD83D\uDC1D", name: "Bee" },
];

const MODE_PROMPTS: Record<CompareMode, string> = {
  more: "Which group has MORE?",
  fewer: "Which group has FEWER?",
  equal: "Are the groups EQUAL?",
};

const MODE_EMOJIS: Record<CompareMode, string> = {
  more: "\u2B06\uFE0F",
  fewer: "\u2B07\uFE0F",
  equal: "\u2696\uFE0F",
};

export default function CritterCompare({ onExit }: CritterCompareProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [challenge, setChallenge] = useState<CompareChallenge | null>(null);
  const [comparesCompleted, setComparesCompleted] = useState(0);
  const [comparesNeeded, setComparesNeeded] = useState(6);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showCounts, setShowCounts] = useState(false);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerMax, setTimerMax] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const generatePositions = useCallback(
    (count: number): { x: number; y: number; delay: number }[] => {
      const positions: { x: number; y: number; delay: number }[] = [];
      // Grid-like layout with some randomness
      const cols = Math.ceil(Math.sqrt(count));
      const cellW = 80 / cols;
      const cellH = 80 / Math.ceil(count / cols);

      for (let i = 0; i < count; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        positions.push({
          x: 10 + col * cellW + Math.random() * cellW * 0.5,
          y: 10 + row * cellH + Math.random() * cellH * 0.4,
          delay: i * 0.08,
        });
      }
      return positions;
    },
    []
  );

  const generateChallenge = useCallback(
    (lvl: number): CompareChallenge => {
      const maxCount = Math.min(5 + lvl * 2, 20);
      const minCount = Math.max(1, Math.floor(lvl / 2));

      // Pick critters
      const shuffled = [...AUSSIE_CRITTERS].sort(() => Math.random() - 0.5);
      const leftCritter = shuffled[0];
      const rightCritter = shuffled[1];

      // Pick mode
      const modes: CompareMode[] =
        lvl <= 2
          ? ["more", "fewer"]
          : ["more", "fewer", "equal"];
      const mode = modes[Math.floor(Math.random() * modes.length)];

      let leftCount: number;
      let rightCount: number;

      if (mode === "equal") {
        leftCount = minCount + Math.floor(Math.random() * (maxCount - minCount));
        rightCount = leftCount;
      } else {
        leftCount = minCount + Math.floor(Math.random() * (maxCount - minCount));
        do {
          rightCount = minCount + Math.floor(Math.random() * (maxCount - minCount));
        } while (rightCount === leftCount);
      }

      let correctAnswer: "left" | "right" | "equal";
      if (mode === "equal") {
        correctAnswer = "equal";
      } else if (mode === "more") {
        correctAnswer = leftCount > rightCount ? "left" : "right";
      } else {
        correctAnswer = leftCount < rightCount ? "left" : "right";
      }

      return {
        left: {
          emoji: leftCritter.emoji,
          name: leftCritter.name,
          count: leftCount,
          positions: generatePositions(leftCount),
        },
        right: {
          emoji: rightCritter.emoji,
          name: rightCritter.name,
          count: rightCount,
          positions: generatePositions(rightCount),
        },
        mode,
        correctAnswer,
      };
    },
    [generatePositions]
  );

  const startTimer = useCallback((lvl: number) => {
    if (lvl < 3) return; // No timer for first 2 levels
    const maxTime = Math.max(5, 15 - lvl);
    setTimerMax(maxTime);
    setTimer(maxTime);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((prev) => Math.max(0, prev - 0.1));
    }, 100);
  }, []);

  const initLevel = useCallback(
    (lvl: number) => {
      const needed = Math.min(6 + Math.floor(lvl / 2), 12);
      setComparesNeeded(needed);
      setComparesCompleted(0);
      setShowResult(null);
      setShowCounts(false);
      setShakeScreen(false);

      const ch = generateChallenge(lvl);
      setChallenge(ch);
      startTimer(lvl);
    },
    [generateChallenge, startTimer]
  );

  const startGame = () => {
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    setStreak(0);
    setBestStreak(0);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setScreen("playing");
    initLevel(newLevel);
  };

  const advanceToNext = useCallback(() => {
    const newCompleted = comparesCompleted + 1;
    setComparesCompleted(newCompleted);

    if (newCompleted >= comparesNeeded) {
      if (timerRef.current) clearInterval(timerRef.current);
      setTimeout(() => setScreen("levelComplete"), 400);
    } else {
      setTimeout(() => {
        setShowResult(null);
        setShowCounts(false);
        const ch = generateChallenge(level);
        setChallenge(ch);
        startTimer(level);
      }, 1200);
    }
  }, [comparesCompleted, comparesNeeded, generateChallenge, level, startTimer]);

  // Timer reaching zero
  useEffect(() => {
    if (screen !== "playing" || !challenge || timerMax === 0) return;
    if (timer <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      setShowResult("wrong");
      setShowCounts(true);
      setStreak(0);
      setLives((l) => {
        const newL = l - 1;
        if (newL <= 0) {
          setTimeout(() => setScreen("gameOver"), 1200);
          return newL;
        }
        return newL;
      });
      setTimeout(() => {
        if (lives > 1) advanceToNext();
      }, 1500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const handleAnswer = useCallback(
    (answer: "left" | "right" | "equal") => {
      if (showResult || !challenge) return;
      if (timerRef.current) clearInterval(timerRef.current);

      setShowCounts(true);

      if (answer === challenge.correctAnswer) {
        // Correct!
        const timeBonus = timerMax > 0 ? Math.floor(timer * 3) : 0;
        const streakBonus = streak * 3;
        setScore((s) => s + 15 + timeBonus + streakBonus);
        setShowResult("correct");
        const newStreak = streak + 1;
        setStreak(newStreak);
        if (newStreak > bestStreak) setBestStreak(newStreak);
        advanceToNext();
      } else {
        // Wrong
        setShowResult("wrong");
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 400);
        setStreak(0);
        setLives((l) => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 1200);
            return newL;
          }
          return newL;
        });
        setTimeout(() => {
          if (lives > 1) advanceToNext();
        }, 1500);
      }
    },
    [showResult, challenge, timer, timerMax, streak, bestStreak, lives, advanceToNext]
  );

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  const timerPercent = timerMax > 0 ? (timer / timerMax) * 100 : 100;
  const timerColor =
    timerPercent > 60 ? "#4ade80" : timerPercent > 30 ? "#facc15" : "#ef4444";

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="cc-game">
        <style>{ccStyles}</style>
        <div className="cc-intro">
          <div className="cc-intro-bg">
            {AUSSIE_CRITTERS.slice(0, 6).map((c, i) => (
              <div
                key={i}
                className="cc-bg-critter"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {c.emoji}
              </div>
            ))}
          </div>
          <div className="cc-intro-content">
            <div className="cc-logo">
              <span className="cc-logo-icon">{"\uD83E\uDD98"}</span>
              <h1>Critter Compare</h1>
              <span className="cc-logo-icon">{"\uD83D\uDC28"}</span>
            </div>
            <p className="cc-tagline">Who has more? Count the critters!</p>
            <div className="cc-instructions-card">
              <h3>How to Play</h3>
              <div className="cc-instruction">
                <div className="cc-instruction-visual">
                  <span className="cc-mini-group">
                    {"\uD83E\uDD98"}{"\uD83E\uDD98"}{"\uD83E\uDD98"}
                  </span>
                  <span className="cc-vs">vs</span>
                  <span className="cc-mini-group">
                    {"\uD83D\uDC28"}{"\uD83D\uDC28"}
                  </span>
                </div>
                <p>
                  Two groups of <span className="cc-hl-green">CRITTERS</span>{" "}
                  appear!
                </p>
              </div>
              <div className="cc-instruction">
                <div className="cc-instruction-visual">
                  <span className="cc-prompt-preview">
                    {"\u2B06\uFE0F"} Which has MORE?
                  </span>
                </div>
                <p>
                  <strong>TAP</strong> the group that answers the{" "}
                  <span className="cc-hl-yellow">QUESTION</span>!
                </p>
              </div>
              <div className="cc-instruction">
                <div className="cc-instruction-visual">
                  <span className="cc-symbols-preview">
                    {">"} {"<"} {"="}
                  </span>
                </div>
                <p>
                  Learn <span className="cc-hl-blue">GREATER THAN</span>,{" "}
                  <span className="cc-hl-blue">LESS THAN</span>, and{" "}
                  <span className="cc-hl-blue">EQUAL</span>!
                </p>
              </div>
            </div>
            <button className="cc-start-btn" onClick={startGame}>
              {"\uD83E\uDD98"} Start Counting! {"\uD83D\uDC28"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="cc-game">
        <style>{ccStyles}</style>
        <div className="cc-complete">
          <div className="cc-complete-content">
            <h1 className="cc-complete-title">
              {"\uD83C\uDF1F"} Level {level} Complete! {"\uD83E\uDD98"}
            </h1>
            <div className="cc-critter-parade">
              {AUSSIE_CRITTERS.slice(0, 5).map((c, i) => (
                <span
                  key={i}
                  className="cc-parade-critter"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {c.emoji}
                </span>
              ))}
            </div>
            <div className="cc-score-card">
              <div className="cc-score-item">
                <span className="cc-score-label">Score</span>
                <span className="cc-score-value">{score}</span>
              </div>
              <div className="cc-score-item">
                <span className="cc-score-label">Best Streak</span>
                <span className="cc-score-value">{bestStreak}</span>
              </div>
            </div>
            <div className="cc-complete-buttons">
              <button className="cc-next-btn" onClick={nextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button
                className="cc-menu-btn"
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
      <div className="cc-game">
        <style>{ccStyles}</style>
        <div className="cc-complete">
          <div className="cc-complete-content">
            <h1 className="cc-complete-title">
              {"\uD83D\uDE22"} The critters ran away!
            </h1>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
              }}
            >
              You compared {comparesCompleted} groups on Level {level}
            </p>
            <div className="cc-score-card">
              <div className="cc-score-item">
                <span className="cc-score-label">Final Score</span>
                <span className="cc-score-value">{score}</span>
              </div>
              <div className="cc-score-item">
                <span className="cc-score-label">Best Streak</span>
                <span className="cc-score-value">{bestStreak}</span>
              </div>
            </div>
            <div className="cc-complete-buttons">
              <button className="cc-next-btn" onClick={startGame}>
                Try Again {"\uD83D\uDD04"}
              </button>
              <button
                className="cc-menu-btn"
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
    <div className="cc-game">
      <style>{ccStyles}</style>
      <div className={`cc-play ${shakeScreen ? "cc-shake" : ""}`}>
        {/* Header */}
        <div className="cc-header">
          <div className="cc-header-left">
            <button
              className="cc-back-btn"
              onClick={() => (onExit ? onExit() : setScreen("intro"))}
            >
              {"\u2190"}
            </button>
            <div className="cc-level-badge">Level {level}</div>
          </div>
          <div className="cc-header-center">
            <span className="cc-lives">{livesDisplay.join(" ")}</span>
            {streak >= 2 && (
              <span className="cc-streak-badge">
                {"\uD83D\uDD25"} {streak}
              </span>
            )}
          </div>
          <div className="cc-header-right">
            <div className="cc-score-badge">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Timer */}
        {timerMax > 0 && (
          <div className="cc-timer-bar">
            <div
              className="cc-timer-fill"
              style={{ width: `${timerPercent}%`, background: timerColor }}
            />
          </div>
        )}

        {/* Progress */}
        <div className="cc-progress">
          {comparesCompleted} / {comparesNeeded} comparisons
        </div>

        {/* Question prompt */}
        {challenge && (
          <div className="cc-prompt">
            <span className="cc-prompt-emoji">{MODE_EMOJIS[challenge.mode]}</span>
            <span className="cc-prompt-text">{MODE_PROMPTS[challenge.mode]}</span>
          </div>
        )}

        {/* Comparison area */}
        {challenge && (
          <div className="cc-compare-area">
            {/* Left group */}
            <button
              className={`cc-group ${
                showResult && challenge.correctAnswer === "left"
                  ? "cc-group-correct"
                  : showResult && challenge.correctAnswer !== "left"
                  ? "cc-group-faded"
                  : ""
              }`}
              onClick={() => handleAnswer("left")}
              disabled={showResult !== null}
            >
              <div className="cc-group-critters">
                {challenge.left.positions.map((pos, i) => (
                  <div
                    key={i}
                    className="cc-critter"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      animationDelay: `${pos.delay}s`,
                    }}
                  >
                    {challenge.left.emoji}
                  </div>
                ))}
              </div>
              {showCounts && (
                <div className="cc-count-badge">{challenge.left.count}</div>
              )}
              <div className="cc-group-name">{challenge.left.name}s</div>
            </button>

            {/* VS */}
            <div className="cc-vs-badge">
              {showResult === "correct" ? (
                <span className="cc-vs-result correct">{"\u2705"}</span>
              ) : showResult === "wrong" ? (
                <span className="cc-vs-result wrong">{"\u274C"}</span>
              ) : (
                <span>VS</span>
              )}
            </div>

            {/* Right group */}
            <button
              className={`cc-group ${
                showResult && challenge.correctAnswer === "right"
                  ? "cc-group-correct"
                  : showResult && challenge.correctAnswer !== "right"
                  ? "cc-group-faded"
                  : ""
              }`}
              onClick={() => handleAnswer("right")}
              disabled={showResult !== null}
            >
              <div className="cc-group-critters">
                {challenge.right.positions.map((pos, i) => (
                  <div
                    key={i}
                    className="cc-critter"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      animationDelay: `${pos.delay}s`,
                    }}
                  >
                    {challenge.right.emoji}
                  </div>
                ))}
              </div>
              {showCounts && (
                <div className="cc-count-badge">{challenge.right.count}</div>
              )}
              <div className="cc-group-name">{challenge.right.name}s</div>
            </button>
          </div>
        )}

        {/* Equal button (only for equal mode) */}
        {challenge && challenge.mode === "equal" && (
          <div className="cc-equal-area">
            <button
              className={`cc-equal-btn ${
                showResult && challenge.correctAnswer === "equal"
                  ? "cc-equal-correct"
                  : ""
              }`}
              onClick={() => handleAnswer("equal")}
              disabled={showResult !== null}
            >
              {"\u2696\uFE0F"} They are EQUAL!
            </button>
          </div>
        )}

        {/* Comparison symbol reveal */}
        {showCounts && challenge && (
          <div className="cc-symbol-reveal">
            <span className="cc-reveal-num">{challenge.left.count}</span>
            <span className="cc-reveal-symbol">
              {challenge.left.count > challenge.right.count
                ? ">"
                : challenge.left.count < challenge.right.count
                ? "<"
                : "="}
            </span>
            <span className="cc-reveal-num">{challenge.right.count}</span>
          </div>
        )}
      </div>
    </div>
  );
}

const ccStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .cc-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #f97316 0%, #ea580c 10%, #c2410c 20%, #78350f 40%, #451a03 60%, #365314 80%, #1a2e05 100%);
  }

  .cc-intro, .cc-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .cc-intro-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .cc-bg-critter {
    position: absolute; font-size: 2.5rem; opacity: 0.2;
    animation: ccBgBounce 3s ease-in-out infinite;
  }

  @keyframes ccBgBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  .cc-intro-content, .cc-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .cc-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .cc-logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem); font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #4ade80, #38bdf8);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .cc-logo-icon { font-size: 2.5rem; animation: ccLogoBounce 2s ease-in-out infinite; }
  .cc-logo-icon:last-child { animation-delay: 0.3s; }

  @keyframes ccLogoBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .cc-tagline { color: #fde68a; font-size: 1.1rem; margin-bottom: 2rem; }

  .cc-instructions-card {
    background: rgba(0,0,0,0.3); border: 2px solid rgba(253,224,71,0.3);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem; backdrop-filter: blur(10px);
  }

  .cc-instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1rem; }

  .cc-instruction { margin-bottom: 1.2rem; }
  .cc-instruction:last-child { margin-bottom: 0; }

  .cc-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.4rem;
  }

  .cc-mini-group { font-size: 1.5rem; }
  .cc-vs { color: #64748b; font-weight: 800; font-size: 0.9rem; }
  .cc-prompt-preview { color: #fbbf24; font-weight: 700; font-size: 0.95rem; }
  .cc-symbols-preview { color: #38bdf8; font-weight: 900; font-size: 1.5rem; letter-spacing: 0.5rem; }
  .cc-instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .cc-hl-green { color: #4ade80; font-weight: 700; }
  .cc-hl-yellow { color: #fbbf24; font-weight: 700; }
  .cc-hl-blue { color: #38bdf8; font-weight: 700; }

  .cc-start-btn, .cc-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #f97316, #ea580c);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(249,115,22,0.4);
  }

  .cc-start-btn:hover, .cc-next-btn:hover {
    transform: translateY(-3px); box-shadow: 0 15px 50px rgba(249,115,22,0.5);
  }

  .cc-complete-title { font-size: clamp(1.6rem, 6vw, 2.3rem); color: white; margin-bottom: 1rem; }

  .cc-critter-parade {
    display: flex; justify-content: center; gap: 0.8rem; margin-bottom: 1.5rem;
  }

  .cc-parade-critter {
    font-size: 2.5rem; animation: ccParadeBounce 0.8s ease infinite;
  }

  @keyframes ccParadeBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .cc-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }
  .cc-score-item { display: flex; flex-direction: column; align-items: center; }
  .cc-score-label { font-size: 0.85rem; color: #fde68a; margin-bottom: 0.3rem; }
  .cc-score-value { font-size: 2rem; font-weight: 900; color: white; }

  .cc-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .cc-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .cc-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* Playing */
  .cc-play { height: 100%; display: flex; flex-direction: column; overflow-y: auto; }

  .cc-play.cc-shake { animation: ccShake 0.4s ease; }

  @keyframes ccShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }

  .cc-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.4); z-index: 50;
  }

  .cc-header-left, .cc-header-right { display: flex; align-items: center; gap: 0.5rem; }
  .cc-header-center { display: flex; align-items: center; gap: 0.5rem; }

  .cc-back-btn {
    width: 36px; height: 36px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 10px; color: white; font-size: 1.1rem;
    cursor: pointer;
  }

  .cc-level-badge {
    padding: 0.4rem 0.8rem; background: linear-gradient(135deg, #f97316, #ea580c);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.85rem;
  }

  .cc-lives { font-size: 1rem; }

  .cc-streak-badge {
    padding: 0.3rem 0.6rem; background: rgba(251,146,60,0.3);
    border-radius: 10px; font-size: 0.8rem; color: #fb923c; font-weight: 700;
  }

  .cc-score-badge {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.4rem 0.8rem; background: rgba(251,191,36,0.2);
    border-radius: 16px; color: #fbbf24; font-weight: 700; font-size: 0.85rem;
  }

  .cc-timer-bar { height: 5px; background: rgba(255,255,255,0.1); }
  .cc-timer-fill { height: 100%; transition: width 0.1s linear; border-radius: 0 3px 3px 0; }

  .cc-progress { text-align: center; padding: 0.3rem; font-size: 0.8rem; color: #fde68a; }

  .cc-prompt {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    padding: 0.6rem; background: rgba(0,0,0,0.3);
  }

  .cc-prompt-emoji { font-size: 1.3rem; }
  .cc-prompt-text { font-size: 1.1rem; font-weight: 800; color: white; }

  /* Compare area */
  .cc-compare-area {
    flex: 1; display: flex; gap: 0.5rem; padding: 0.5rem;
    align-items: stretch; min-height: 200px;
  }

  .cc-group {
    flex: 1; position: relative;
    background: rgba(255,255,255,0.08); border: 3px solid rgba(255,255,255,0.15);
    border-radius: 20px; cursor: pointer; transition: all 0.2s ease;
    overflow: hidden; font-family: 'Nunito', sans-serif;
    display: flex; flex-direction: column;
  }

  .cc-group:hover:not(:disabled) {
    border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.12);
    transform: scale(1.02);
  }

  .cc-group:active:not(:disabled) { transform: scale(0.98); }
  .cc-group:disabled { cursor: default; }

  .cc-group-correct { border-color: #4ade80 !important; background: rgba(74,222,128,0.15) !important; }
  .cc-group-faded { opacity: 0.5; }

  .cc-group-critters {
    flex: 1; position: relative; min-height: 120px;
  }

  .cc-critter {
    position: absolute; font-size: clamp(1.2rem, 3vw, 1.8rem);
    animation: ccCritterPop 0.4s ease forwards;
  }

  @keyframes ccCritterPop {
    0% { transform: scale(0); opacity: 0; }
    70% { transform: scale(1.15); }
    100% { transform: scale(1); opacity: 1; }
  }

  .cc-count-badge {
    position: absolute; top: 8px; right: 8px;
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; font-weight: 900; color: white;
    animation: ccCountPop 0.3s ease;
  }

  @keyframes ccCountPop {
    0% { transform: scale(0); }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .cc-group-name {
    text-align: center; padding: 0.3rem; font-size: 0.75rem;
    color: rgba(255,255,255,0.6); font-weight: 600;
  }

  .cc-vs-badge {
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem; font-weight: 900; color: #fbbf24;
    min-width: 40px;
  }

  .cc-vs-result { font-size: 1.5rem; animation: ccVsResultPop 0.3s ease; }

  @keyframes ccVsResultPop {
    0% { transform: scale(0); }
    70% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .cc-equal-area {
    padding: 0.5rem 1rem;
  }

  .cc-equal-btn {
    width: 100%; padding: 0.8rem;
    background: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.2);
    border-radius: 16px; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 800; color: white;
    cursor: pointer; transition: all 0.2s ease;
  }

  .cc-equal-btn:hover:not(:disabled) {
    border-color: #fbbf24; background: rgba(251,191,36,0.15);
  }

  .cc-equal-btn:disabled { opacity: 0.6; cursor: default; }
  .cc-equal-correct { border-color: #4ade80 !important; background: rgba(74,222,128,0.15) !important; }

  .cc-symbol-reveal {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem;
    padding: 0.8rem; animation: ccRevealFade 0.3s ease;
  }

  @keyframes ccRevealFade {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .cc-reveal-num { font-size: 1.5rem; font-weight: 900; color: white; }

  .cc-reveal-symbol {
    font-size: 2rem; font-weight: 900; color: #fbbf24;
    animation: ccSymbolBounce 0.5s ease;
  }

  @keyframes ccSymbolBounce {
    0% { transform: scale(0); }
    60% { transform: scale(1.4); }
    100% { transform: scale(1); }
  }

  @media (max-width: 600px) {
    .cc-critter { font-size: 1.1rem !important; }
    .cc-compare-area { padding: 0.3rem; gap: 0.3rem; }
    .cc-group { border-radius: 14px; }
  }
`;
