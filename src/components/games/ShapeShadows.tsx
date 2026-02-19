"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ============================================================
// SHAPE SHADOWS  --  Geometry Recognition Game
// Foundation / Year 1 Mathematics
// Curriculum: "Name, create and sort familiar shapes and give reasoning"
//             "Make, compare and classify shapes using obvious features"
// ============================================================

interface ShapeShadowsProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";

interface ShapeDef {
  name: string;
  sides: number;
  emoji: string;
  svgPath: string; // SVG path for the shape
  description: string; // e.g. "3 sides, 3 corners"
}

interface ShadowChallenge {
  shape: ShapeDef;
  rotation: number; // degrees
  scale: number;
  distortion: number; // 0-1 how much to stretch
  options: ShapeDef[];
}

interface ParticleEffect {
  id: number;
  x: number;
  y: number;
}

const SHAPES: ShapeDef[] = [
  {
    name: "Circle",
    sides: 0,
    emoji: "\u2B55",
    svgPath: "M 50 10 A 40 40 0 1 1 49.99 10 Z",
    description: "Round, no sides, no corners",
  },
  {
    name: "Triangle",
    sides: 3,
    emoji: "\uD83D\uDD3A",
    svgPath: "M 50 10 L 90 80 L 10 80 Z",
    description: "3 straight sides, 3 corners",
  },
  {
    name: "Square",
    sides: 4,
    emoji: "\uD83D\uDFE7",
    svgPath: "M 15 15 L 85 15 L 85 85 L 15 85 Z",
    description: "4 equal sides, 4 corners",
  },
  {
    name: "Rectangle",
    sides: 4,
    emoji: "\uD83D\uDFE9",
    svgPath: "M 10 25 L 90 25 L 90 75 L 10 75 Z",
    description: "4 sides, opposite sides equal, 4 corners",
  },
  {
    name: "Diamond",
    sides: 4,
    emoji: "\uD83D\uDD37",
    svgPath: "M 50 10 L 90 50 L 50 90 L 10 50 Z",
    description: "4 equal sides, tilted square",
  },
  {
    name: "Star",
    sides: 10,
    emoji: "\u2B50",
    svgPath:
      "M 50 5 L 61 35 L 95 35 L 68 55 L 79 90 L 50 70 L 21 90 L 32 55 L 5 35 L 39 35 Z",
    description: "5 points, 10 sides",
  },
  {
    name: "Heart",
    sides: 0,
    emoji: "\u2764\uFE0F",
    svgPath:
      "M 50 85 C 20 60 5 40 15 25 C 25 10 45 15 50 30 C 55 15 75 10 85 25 C 95 40 80 60 50 85 Z",
    description: "Curved shape, like two bumps and a point",
  },
  {
    name: "Hexagon",
    sides: 6,
    emoji: "\u2B22",
    svgPath: "M 50 10 L 87 30 L 87 70 L 50 90 L 13 70 L 13 30 Z",
    description: "6 sides, 6 corners",
  },
  {
    name: "Oval",
    sides: 0,
    emoji: "\uD83E\uDE78",
    svgPath: "M 50 15 A 35 20 0 1 1 49.99 15 Z",
    description: "Round like a stretched circle, no corners",
  },
  {
    name: "Pentagon",
    sides: 5,
    emoji: "\u2B1F",
    svgPath: "M 50 10 L 90 40 L 75 85 L 25 85 L 10 40 Z",
    description: "5 sides, 5 corners",
  },
];

// Difficulty tiers
const SHAPES_EASY = SHAPES.filter((s) =>
  ["Circle", "Triangle", "Square", "Rectangle"].includes(s.name)
);
const SHAPES_MEDIUM = SHAPES.filter((s) =>
  ["Circle", "Triangle", "Square", "Rectangle", "Diamond", "Star", "Heart"].includes(s.name)
);

const CURTAIN_COLORS = [
  "linear-gradient(135deg, #7c3aed, #a855f7)",
  "linear-gradient(135deg, #2563eb, #3b82f6)",
  "linear-gradient(135deg, #dc2626, #ef4444)",
  "linear-gradient(135deg, #059669, #10b981)",
  "linear-gradient(135deg, #d97706, #f59e0b)",
];

let challengeIdCounter = 0;
const nextChallengeId = () => ++challengeIdCounter;

export default function ShapeShadows({ onExit }: ShapeShadowsProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [challenge, setChallenge] = useState<ShadowChallenge | null>(null);
  const [shapesCompleted, setShapesCompleted] = useState(0);
  const [shapesNeeded, setShapesNeeded] = useState(5);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerMax, setTimerMax] = useState(10);
  const [showDescription, setShowDescription] = useState(false);
  const [particle, setParticle] = useState<ParticleEffect | null>(null);
  const [curtainColor, setCurtainColor] = useState(CURTAIN_COLORS[0]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getShapePool = useCallback((lvl: number): ShapeDef[] => {
    if (lvl <= 3) return SHAPES_EASY;
    if (lvl <= 6) return SHAPES_MEDIUM;
    return SHAPES;
  }, []);

  const generateChallenge = useCallback(
    (lvl: number): ShadowChallenge => {
      const pool = getShapePool(lvl);
      const shape = pool[Math.floor(Math.random() * pool.length)];

      // Pick options (always include correct answer)
      const otherShapes = pool.filter((s) => s.name !== shape.name);
      const numOptions = Math.min(lvl <= 2 ? 3 : 4, pool.length);
      const shuffled = otherShapes.sort(() => Math.random() - 0.5);
      const options = [shape, ...shuffled.slice(0, numOptions - 1)].sort(
        () => Math.random() - 0.5
      );

      return {
        shape,
        rotation: lvl >= 3 ? Math.floor(Math.random() * 360) : 0,
        scale: 0.8 + Math.random() * 0.4,
        distortion: lvl >= 5 ? Math.random() * 0.15 : 0,
        options,
      };
    },
    [getShapePool]
  );

  const startTimer = useCallback(
    (lvl: number) => {
      const maxTime = Math.max(5, 12 - lvl);
      setTimerMax(maxTime);
      setTimer(maxTime);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0.1) {
            // Time's up
            return 0;
          }
          return prev - 0.1;
        });
      }, 100);
    },
    []
  );

  const initLevel = useCallback(
    (lvl: number) => {
      const needed = Math.min(5 + Math.floor(lvl / 2), 10);
      setShapesNeeded(needed);
      setShapesCompleted(0);
      setShowResult(null);
      setShowDescription(false);
      setCurtainColor(
        CURTAIN_COLORS[Math.floor(Math.random() * CURTAIN_COLORS.length)]
      );

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

  // Timer reaching zero
  useEffect(() => {
    if (screen !== "playing" || !challenge) return;
    if (timer <= 0) {
      // Time's up = wrong answer
      if (timerRef.current) clearInterval(timerRef.current);
      setShowResult("wrong");
      setStreak(0);
      setLives((l) => {
        const newL = l - 1;
        if (newL <= 0) {
          setTimeout(() => setScreen("gameOver"), 1200);
        }
        return newL;
      });
      setShowDescription(true);
      setTimeout(() => {
        if (lives > 1) advanceToNext();
      }, 1500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const advanceToNext = useCallback(() => {
    const newCompleted = shapesCompleted + 1;
    setShapesCompleted(newCompleted);

    if (newCompleted >= shapesNeeded) {
      if (timerRef.current) clearInterval(timerRef.current);
      setTimeout(() => setScreen("levelComplete"), 400);
    } else {
      setShowResult(null);
      setShowDescription(false);
      setCurtainColor(
        CURTAIN_COLORS[Math.floor(Math.random() * CURTAIN_COLORS.length)]
      );
      const ch = generateChallenge(level);
      setChallenge(ch);
      startTimer(level);
    }
  }, [shapesCompleted, shapesNeeded, generateChallenge, level, startTimer]);

  const handleAnswer = useCallback(
    (selected: ShapeDef) => {
      if (showResult || !challenge) return;
      if (timerRef.current) clearInterval(timerRef.current);

      if (selected.name === challenge.shape.name) {
        // Correct!
        const timeBonus = Math.floor(timer * 5);
        const streakBonus = streak * 5;
        setScore((s) => s + 20 + timeBonus + streakBonus);
        setShowResult("correct");
        const newStreak = streak + 1;
        setStreak(newStreak);
        if (newStreak > bestStreak) setBestStreak(newStreak);
        setParticle({ id: Date.now(), x: 50, y: 50 });
        setTimeout(() => setParticle(null), 800);
        setShowDescription(true);
        setTimeout(() => advanceToNext(), 1200);
      } else {
        // Wrong
        setShowResult("wrong");
        setStreak(0);
        setShowDescription(true);
        setLives((l) => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 1200);
          }
          return newL;
        });
        setTimeout(() => {
          if (lives > 1) advanceToNext();
        }, 1500);
      }
    },
    [showResult, challenge, timer, streak, bestStreak, lives, advanceToNext]
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

  const timerPercent = timerMax > 0 ? (timer / timerMax) * 100 : 0;
  const timerColor =
    timerPercent > 60 ? "#4ade80" : timerPercent > 30 ? "#facc15" : "#ef4444";

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="ss-game">
        <style>{ssStyles}</style>
        <div className="ss-intro">
          <div className="ss-intro-content">
            <div className="ss-stage-curtains">
              <div className="ss-curtain-left" />
              <div className="ss-curtain-right" />
            </div>
            <div className="ss-logo">
              <h1>Shape Shadows</h1>
              <p className="ss-subtitle">The Shadow Puppet Theatre</p>
            </div>
            <div className="ss-instructions-card">
              <h3>How to Play</h3>
              <div className="ss-instruction">
                <div className="ss-instruction-icon">
                  {"\uD83D\uDD76\uFE0F"}
                </div>
                <p>
                  A mystery <span className="ss-hl-purple">SHADOW</span>{" "}
                  appears on stage
                </p>
              </div>
              <div className="ss-instruction">
                <div className="ss-instruction-icon">
                  {"\uD83E\uDD14"}
                </div>
                <p>
                  Figure out which{" "}
                  <span className="ss-hl-blue">SHAPE</span> is casting the
                  shadow
                </p>
              </div>
              <div className="ss-instruction">
                <div className="ss-instruction-icon">
                  {"\u23F1\uFE0F"}
                </div>
                <p>
                  Be quick! The shadow{" "}
                  <span className="ss-hl-red">FADES</span> away!
                </p>
              </div>
              <div className="ss-instruction">
                <div className="ss-instruction-icon">{"\uD83D\uDD25"}</div>
                <p>
                  Build a <span className="ss-hl-orange">STREAK</span> for
                  bonus points!
                </p>
              </div>
            </div>
            <button className="ss-start-btn" onClick={startGame}>
              {"\uD83C\uDFAD"} Open the Curtains! {"\uD83C\uDFAD"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="ss-game">
        <style>{ssStyles}</style>
        <div className="ss-complete">
          <div className="ss-complete-content">
            <h1 className="ss-complete-title">
              {"\uD83C\uDF1F"} Level {level} Complete! {"\uD83C\uDF1F"}
            </h1>
            <div className="ss-shapes-parade">
              {SHAPES_EASY.map((s, i) => (
                <span
                  key={s.name}
                  className="ss-parade-shape"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {s.emoji}
                </span>
              ))}
            </div>
            <div className="ss-score-card">
              <div className="ss-score-item">
                <span className="ss-score-label">Score</span>
                <span className="ss-score-value">{score}</span>
              </div>
              <div className="ss-score-item">
                <span className="ss-score-label">Best Streak</span>
                <span className="ss-score-value">{bestStreak}</span>
              </div>
            </div>
            <div className="ss-complete-buttons">
              <button className="ss-next-btn" onClick={nextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button
                className="ss-menu-btn"
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
      <div className="ss-game">
        <style>{ssStyles}</style>
        <div className="ss-complete">
          <div className="ss-complete-content">
            <h1 className="ss-complete-title">
              {"\uD83C\uDFAD"} The curtain falls!
            </h1>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
              }}
            >
              You identified {shapesCompleted} shapes and reached Level {level}
            </p>
            <div className="ss-score-card">
              <div className="ss-score-item">
                <span className="ss-score-label">Final Score</span>
                <span className="ss-score-value">{score}</span>
              </div>
              <div className="ss-score-item">
                <span className="ss-score-label">Best Streak</span>
                <span className="ss-score-value">{bestStreak}</span>
              </div>
            </div>
            <div className="ss-complete-buttons">
              <button className="ss-next-btn" onClick={startGame}>
                Try Again {"\uD83D\uDD04"}
              </button>
              <button
                className="ss-menu-btn"
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
    <div className="ss-game">
      <style>{ssStyles}</style>
      <div className="ss-play">
        {/* Header */}
        <div className="ss-header">
          <div className="ss-header-left">
            <button
              className="ss-back-btn"
              onClick={() => (onExit ? onExit() : setScreen("intro"))}
            >
              {"\u2190"}
            </button>
            <div className="ss-level-badge">Level {level}</div>
          </div>
          <div className="ss-header-center">
            <span className="ss-lives">{livesDisplay.join(" ")}</span>
            {streak >= 2 && (
              <span className="ss-streak-badge">
                {"\uD83D\uDD25"} {streak}
              </span>
            )}
          </div>
          <div className="ss-header-right">
            <div className="ss-score-badge">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Timer bar */}
        <div className="ss-timer-bar">
          <div
            className="ss-timer-fill"
            style={{
              width: `${timerPercent}%`,
              background: timerColor,
            }}
          />
        </div>

        {/* Progress */}
        <div className="ss-progress">
          {shapesCompleted} / {shapesNeeded} shapes
        </div>

        {/* Shadow Stage */}
        {challenge && (
          <div className="ss-stage" style={{ background: curtainColor }}>
            <div className="ss-stage-inner">
              {/* Shadow shape */}
              <div
                className={`ss-shadow-container ${
                  showResult === "correct"
                    ? "ss-correct-reveal"
                    : showResult === "wrong"
                    ? "ss-wrong-reveal"
                    : ""
                }`}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="ss-shadow-svg"
                  style={{
                    transform: `rotate(${challenge.rotation}deg) scale(${challenge.scale}) scaleX(${1 + challenge.distortion})`,
                  }}
                >
                  <path
                    d={challenge.shape.svgPath}
                    fill={showResult === "correct" ? "#4ade80" : showResult === "wrong" ? "#ef4444" : "#1a1a2e"}
                    stroke="none"
                    filter={showResult ? "none" : "url(#shadow-blur)"}
                  />
                  <defs>
                    <filter id="shadow-blur">
                      <feGaussianBlur stdDeviation="2" />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Description on reveal */}
              {showDescription && (
                <div className="ss-shape-description">
                  <strong>{challenge.shape.name}</strong>
                  <br />
                  {challenge.shape.description}
                </div>
              )}

              {/* Particle effect */}
              {particle && (
                <div className="ss-particles">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="ss-particle"
                      style={{
                        transform: `rotate(${i * 45}deg) translateY(-60px)`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    >
                      {"\u2728"}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Result overlay */}
            {showResult && (
              <div
                className={`ss-result-overlay ${
                  showResult === "correct" ? "ss-result-correct" : "ss-result-wrong"
                }`}
              >
                {showResult === "correct" ? "\u2705" : "\u274C"}
              </div>
            )}
          </div>
        )}

        {/* Answer options */}
        {challenge && (
          <div className="ss-options">
            {challenge.options.map((opt) => (
              <button
                key={opt.name}
                className={`ss-option ${
                  showResult && opt.name === challenge.shape.name
                    ? "ss-option-correct"
                    : ""
                }`}
                onClick={() => handleAnswer(opt)}
                disabled={showResult !== null}
              >
                <span className="ss-option-emoji">{opt.emoji}</span>
                <span className="ss-option-name">{opt.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const ssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .ss-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  }

  .ss-intro, .ss-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ss-intro-content, .ss-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .ss-stage-curtains { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

  .ss-curtain-left, .ss-curtain-right {
    position: absolute; top: 0; bottom: 0; width: 15%;
    background: linear-gradient(90deg, #7c3aed, transparent);
    opacity: 0.3;
  }

  .ss-curtain-left { left: 0; }
  .ss-curtain-right { right: 0; background: linear-gradient(-90deg, #7c3aed, transparent); }

  .ss-logo h1 {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #a855f7, #818cf8, #38bdf8);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .ss-subtitle { color: #818cf8; font-size: 1.1rem; margin-bottom: 2rem; }

  .ss-instructions-card {
    background: rgba(0,0,0,0.3); border: 2px solid rgba(168,85,247,0.3);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem; backdrop-filter: blur(10px);
  }

  .ss-instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1rem; }

  .ss-instruction {
    display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
  }
  .ss-instruction:last-child { margin-bottom: 0; }
  .ss-instruction-icon { font-size: 1.5rem; flex-shrink: 0; }
  .ss-instruction p { color: #cbd5e1; font-size: 0.95rem; text-align: left; }
  .ss-hl-purple { color: #a855f7; font-weight: 700; }
  .ss-hl-blue { color: #38bdf8; font-weight: 700; }
  .ss-hl-red { color: #ef4444; font-weight: 700; }
  .ss-hl-orange { color: #fb923c; font-weight: 700; }

  .ss-start-btn, .ss-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(168,85,247,0.4);
  }

  .ss-start-btn:hover, .ss-next-btn:hover {
    transform: translateY(-3px); box-shadow: 0 15px 50px rgba(168,85,247,0.5);
  }

  .ss-complete-title { font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 1.5rem; }

  .ss-shapes-parade {
    display: flex; justify-content: center; gap: 0.8rem; margin-bottom: 1.5rem;
  }

  .ss-parade-shape {
    font-size: 2rem; animation: ssParadeBounce 1s ease infinite;
  }

  @keyframes ssParadeBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(10deg); }
  }

  .ss-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }
  .ss-score-item { display: flex; flex-direction: column; align-items: center; }
  .ss-score-label { font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem; }
  .ss-score-value { font-size: 2rem; font-weight: 900; color: white; }

  .ss-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .ss-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .ss-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* Playing */
  .ss-play { height: 100%; display: flex; flex-direction: column; }

  .ss-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.8rem 1rem; background: rgba(0,0,0,0.4); z-index: 50;
  }

  .ss-header-left, .ss-header-right { display: flex; align-items: center; gap: 0.8rem; }
  .ss-header-center { display: flex; align-items: center; gap: 0.8rem; }

  .ss-back-btn {
    width: 40px; height: 40px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 12px; color: white; font-size: 1.2rem;
    cursor: pointer; transition: all 0.2s ease;
  }
  .ss-back-btn:hover { background: rgba(255,255,255,0.2); }

  .ss-level-badge {
    padding: 0.5rem 1rem; background: linear-gradient(135deg, #a855f7, #7c3aed);
    border-radius: 20px; font-weight: 700; color: white; font-size: 0.9rem;
  }

  .ss-lives { font-size: 1.2rem; }

  .ss-streak-badge {
    padding: 0.3rem 0.8rem; background: rgba(251,146,60,0.3);
    border-radius: 12px; font-size: 0.85rem; color: #fb923c; font-weight: 700;
  }

  .ss-score-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem; background: rgba(251,191,36,0.2);
    border-radius: 20px; color: #fbbf24; font-weight: 700; font-size: 0.9rem;
  }

  .ss-timer-bar {
    height: 6px; background: rgba(255,255,255,0.1); overflow: hidden;
  }

  .ss-timer-fill {
    height: 100%; transition: width 0.1s linear; border-radius: 0 3px 3px 0;
  }

  .ss-progress { text-align: center; padding: 0.4rem; font-size: 0.8rem; color: #64748b; }

  .ss-stage {
    flex: 1; display: flex; align-items: center; justify-content: center;
    position: relative; border-radius: 0; min-height: 200px;
    overflow: hidden;
  }

  .ss-stage-inner {
    position: relative; display: flex; flex-direction: column; align-items: center;
    justify-content: center; z-index: 5;
  }

  .ss-shadow-container {
    width: 160px; height: 160px;
    transition: all 0.5s ease;
  }

  .ss-shadow-svg { width: 100%; height: 100%; }

  .ss-correct-reveal { animation: ssRevealCorrect 0.5s ease forwards; }

  @keyframes ssRevealCorrect {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .ss-wrong-reveal { animation: ssRevealWrong 0.4s ease; }

  @keyframes ssRevealWrong {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }

  .ss-shape-description {
    margin-top: 1rem; padding: 0.6rem 1.2rem; background: rgba(0,0,0,0.5);
    border-radius: 12px; color: white; font-size: 0.9rem;
    text-align: center; animation: ssDescFade 0.3s ease;
  }

  @keyframes ssDescFade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .ss-result-overlay {
    position: absolute; top: 10px; right: 10px;
    font-size: 2rem; animation: ssResultPop 0.3s ease;
  }

  @keyframes ssResultPop {
    0% { transform: scale(0); }
    70% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .ss-particles {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    pointer-events: none;
  }

  .ss-particle {
    position: absolute; font-size: 1.2rem;
    animation: ssParticleBurst 0.8s ease forwards;
  }

  @keyframes ssParticleBurst {
    0% { opacity: 1; transform: rotate(var(--r, 0deg)) translateY(0); }
    100% { opacity: 0; transform: rotate(var(--r, 0deg)) translateY(-80px); }
  }

  /* Options */
  .ss-options {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem; padding: 1rem; background: rgba(0,0,0,0.3);
  }

  .ss-option {
    display: flex; align-items: center; gap: 0.8rem;
    padding: 0.8rem 1rem; background: rgba(255,255,255,0.08);
    border: 2px solid rgba(255,255,255,0.15); border-radius: 16px;
    cursor: pointer; transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif;
  }

  .ss-option:hover:not(:disabled) {
    background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.3);
    transform: scale(1.03);
  }

  .ss-option:active:not(:disabled) { transform: scale(0.97); }

  .ss-option:disabled { opacity: 0.6; cursor: default; }

  .ss-option-correct {
    border-color: #4ade80 !important; background: rgba(74,222,128,0.2) !important;
  }

  .ss-option-emoji { font-size: 1.8rem; }
  .ss-option-name { font-size: 1rem; font-weight: 700; color: white; }

  @media (max-width: 600px) {
    .ss-shadow-container { width: 120px; height: 120px; }
    .ss-options { gap: 0.5rem; padding: 0.8rem; }
    .ss-option { padding: 0.6rem 0.8rem; }
    .ss-option-emoji { font-size: 1.4rem; }
    .ss-option-name { font-size: 0.9rem; }
  }
`;
