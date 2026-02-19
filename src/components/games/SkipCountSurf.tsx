"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ============================================================
// SKIP COUNT SURF  --  Skip Counting Rhythm Game
// Year 1 / Year 2 Mathematics
// Curriculum: "Skip count in twos, fives or tens to at least 120"
//             "Create skip counting and repeating patterns"
// ============================================================

interface SkipCountSurfProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";
type SkipType = 2 | 5 | 10;

interface Wave {
  id: number;
  number: number;
  x: number;
  y: number;
  isCorrect: boolean;
  hit: boolean;
  missed: boolean;
  speed: number;
}

interface SplashEffect {
  id: number;
  x: number;
  y: number;
  type: "correct" | "wrong" | "miss";
}

const SURFER_EMOJIS = ["\uD83C\uDFC4", "\uD83C\uDFC4\u200D\u2642\uFE0F", "\uD83C\uDFC4\u200D\u2640\uFE0F"];
const OCEAN_CRITTERS = ["\uD83D\uDC2C", "\uD83D\uDC22", "\uD83D\uDC19", "\uD83D\uDC20", "\uD83E\uDD80", "\uD83E\uDD88"];

let waveIdCounter = 0;
const nextWaveId = () => ++waveIdCounter;

export default function SkipCountSurf({ onExit }: SkipCountSurfProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [skipType, setSkipType] = useState<SkipType>(2);
  const [waves, setWaves] = useState<Wave[]>([]);
  const [nextExpected, setNextExpected] = useState(0);
  const [currentSequence, setCurrentSequence] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [neededCount, setNeededCount] = useState(8);
  const [splash, setSplash] = useState<SplashEffect | null>(null);
  const [surferX, setSurferX] = useState(50);
  const [comboCount, setComboCount] = useState(0);
  const [surferEmoji] = useState(
    SURFER_EMOJIS[Math.floor(Math.random() * SURFER_EMOJIS.length)]
  );
  const [showSequenceHint, setShowSequenceHint] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastTimeRef = useRef(0);

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 400, height: 600 };
  }, []);

  const getSkipTypeForLevel = useCallback((lvl: number): SkipType => {
    // Cycle through skip types, getting harder
    if (lvl <= 3) return 2;
    if (lvl <= 6) return 5;
    if (lvl <= 9) return 10;
    // After level 9, cycle
    const types: SkipType[] = [2, 5, 10];
    return types[(lvl - 1) % 3];
  }, []);

  const generateSequence = useCallback(
    (skip: SkipType, lvl: number): number[] => {
      const startFrom = lvl <= 3 ? 0 : Math.floor(Math.random() * 5) * skip;
      const length = Math.min(8 + Math.floor(lvl / 2), 15);
      const seq: number[] = [];
      for (let i = 0; i < length; i++) {
        seq.push(startFrom + skip * (i + 1));
      }
      return seq;
    },
    []
  );

  const spawnWave = useCallback(
    (correctNumber: number, skip: SkipType, lvl: number) => {
      const size = getContainerSize();
      const waveWidth = 80;
      const numWaves = Math.min(3 + Math.floor(lvl / 3), 6);

      const newWaves: Wave[] = [];
      const speed = 1 + lvl * 0.15;

      // Always include the correct number
      const correctX =
        waveWidth + Math.random() * (size.width - waveWidth * 2);
      newWaves.push({
        id: nextWaveId(),
        number: correctNumber,
        x: correctX,
        y: -60,
        isCorrect: true,
        hit: false,
        missed: false,
        speed,
      });

      // Add distractors (nearby numbers that are NOT in the skip pattern)
      for (let i = 0; i < numWaves - 1; i++) {
        let distractor: number;
        do {
          // Generate a nearby number that is NOT a multiple of skip
          const offset = Math.floor(Math.random() * skip * 3) + 1;
          distractor =
            correctNumber + (Math.random() > 0.5 ? offset : -offset);
          distractor = Math.max(1, distractor);
        } while (distractor % skip === 0 && distractor > 0);

        newWaves.push({
          id: nextWaveId(),
          number: distractor,
          x: waveWidth + Math.random() * (size.width - waveWidth * 2),
          y: -60 - Math.random() * 40,
          isCorrect: false,
          hit: false,
          missed: false,
          speed: speed + Math.random() * 0.3,
        });
      }

      setWaves((prev) => [...prev, ...newWaves]);
    },
    [getContainerSize]
  );

  const initLevel = useCallback(
    (lvl: number) => {
      const skip = getSkipTypeForLevel(lvl);
      const seq = generateSequence(skip, lvl);
      setSkipType(skip);
      setCurrentSequence(seq);
      setNextExpected(0);
      setCorrectCount(0);
      setNeededCount(seq.length);
      setWaves([]);
      setSplash(null);
      setComboCount(0);
      setShowSequenceHint(true);

      // Spawn first wave after a brief delay
      setTimeout(() => spawnWave(seq[0], skip, lvl), 800);
    },
    [getSkipTypeForLevel, generateSequence, spawnWave]
  );

  const startGame = () => {
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setScreen("playing");
    initLevel(newLevel);
  };

  const handleWaveTap = useCallback(
    (wave: Wave) => {
      if (screen !== "playing" || wave.hit || wave.missed) return;

      const expectedNumber = currentSequence[nextExpected];

      if (wave.number === expectedNumber) {
        // Correct!
        setScore((s) => s + 15 + comboCount * 5);
        setComboCount((c) => c + 1);
        setWaves((prev) =>
          prev.map((w) => (w.id === wave.id ? { ...w, hit: true } : w))
        );
        setSurferX(wave.x);
        setSplash({ id: Date.now(), x: wave.x, y: wave.y, type: "correct" });
        setTimeout(() => setSplash(null), 800);

        if (showSequenceHint) setShowSequenceHint(false);

        const newNext = nextExpected + 1;
        setNextExpected(newNext);
        const newCorrect = correctCount + 1;
        setCorrectCount(newCorrect);

        if (newCorrect >= neededCount) {
          // Level complete!
          setTimeout(() => setScreen("levelComplete"), 800);
        } else {
          // Spawn next wave
          setTimeout(
            () => spawnWave(currentSequence[newNext], skipType, level),
            600
          );
        }
      } else {
        // Wrong!
        setComboCount(0);
        setWaves((prev) =>
          prev.map((w) => (w.id === wave.id ? { ...w, missed: true } : w))
        );
        setSplash({ id: Date.now(), x: wave.x, y: wave.y, type: "wrong" });
        setTimeout(() => setSplash(null), 800);
        setLives((l) => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 500);
          }
          return newL;
        });
      }
    },
    [
      screen,
      currentSequence,
      nextExpected,
      comboCount,
      correctCount,
      neededCount,
      spawnWave,
      skipType,
      level,
      showSequenceHint,
    ]
  );

  // Animation loop
  useEffect(() => {
    if (screen !== "playing") {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;

      const size = getContainerSize();

      setWaves((prev) => {
        let anyMissed = false;
        const updated = prev
          .map((w) => {
            if (w.hit) return w;
            const newY = w.y + w.speed * delta;
            if (newY > size.height + 50 && w.isCorrect && !w.missed) {
              anyMissed = true;
              return { ...w, y: newY, missed: true };
            }
            return { ...w, y: newY };
          })
          .filter((w) => w.y < size.height + 100 || w.hit);

        if (anyMissed) {
          // Correct wave fell off screen
          setComboCount(0);
          setLives((l) => {
            const newL = l - 1;
            if (newL <= 0) {
              setTimeout(() => setScreen("gameOver"), 500);
            }
            return newL;
          });
          // Respawn
          const expected = currentSequence[nextExpected];
          if (expected !== undefined) {
            setTimeout(
              () => spawnWave(expected, skipType, level),
              800
            );
          }
        }

        return updated;
      });

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [
    screen,
    getContainerSize,
    currentSequence,
    nextExpected,
    spawnWave,
    skipType,
    level,
  ]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (spawnRef.current) clearInterval(spawnRef.current);
    };
  }, []);

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  const skipLabel =
    skipType === 2
      ? "Count by 2s"
      : skipType === 5
      ? "Count by 5s"
      : "Count by 10s";

  // Show recently completed part of the sequence
  const completedSequence = currentSequence.slice(
    Math.max(0, nextExpected - 3),
    nextExpected
  );
  const upcomingNumber = currentSequence[nextExpected];

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="sc-game">
        <style>{scStyles}</style>
        <div className="sc-intro">
          <div className="sc-intro-bg">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="sc-bg-wave"
                style={{ animationDelay: `${i * 0.5}s`, top: `${60 + i * 6}%` }}
              />
            ))}
            {OCEAN_CRITTERS.map((c, i) => (
              <div
                key={`c-${i}`}
                className="sc-bg-critter"
                style={{
                  left: `${10 + i * 16}%`,
                  bottom: `${5 + (i % 3) * 8}%`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {c}
              </div>
            ))}
          </div>
          <div className="sc-intro-content">
            <div className="sc-logo">
              <span className="sc-logo-wave">{"\uD83C\uDF0A"}</span>
              <h1>Skip Count Surf</h1>
              <span className="sc-logo-wave">{"\uD83C\uDFC4"}</span>
            </div>
            <p className="sc-tagline">Ride the waves of numbers!</p>
            <div className="sc-instructions-card">
              <h3>How to Surf</h3>
              <div className="sc-instruction">
                <div className="sc-instruction-visual">
                  <span className="sc-num-preview">2</span>
                  <span className="sc-num-preview">4</span>
                  <span className="sc-num-preview">6</span>
                  <span className="sc-num-preview active">8</span>
                  <span className="sc-num-preview dim">?</span>
                </div>
                <p>
                  Numbers float on <span className="sc-hl-blue">WAVES</span>
                </p>
              </div>
              <div className="sc-instruction">
                <div className="sc-instruction-visual">
                  <span className="sc-surfer-preview">{"\uD83C\uDFC4"}</span>
                  <span className="sc-arrow-icon">{"\u2192"}</span>
                  <span className="sc-num-preview correct">10</span>
                </div>
                <p>
                  <strong>TAP</strong> the next number in the{" "}
                  <span className="sc-hl-green">SKIP COUNT</span> pattern!
                </p>
              </div>
              <div className="sc-instruction">
                <div className="sc-instruction-visual">
                  <span className="sc-combo">{"\uD83D\uDD25"} x3</span>
                </div>
                <p>
                  Build a <span className="sc-hl-orange">COMBO</span> for bonus
                  points!
                </p>
              </div>
            </div>
            <button className="sc-start-btn" onClick={startGame}>
              {"\uD83C\uDF0A"} Catch the Waves! {"\uD83C\uDFC4"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="sc-game">
        <style>{scStyles}</style>
        <div className="sc-complete">
          <div className="sc-complete-content">
            <h1 className="sc-complete-title">
              {"\uD83C\uDF0A"} Gnarly Ride! Level {level} Done! {"\uD83C\uDFC4"}
            </h1>
            <div className="sc-sequence-display">
              {currentSequence.map((n, i) => (
                <span
                  key={i}
                  className="sc-seq-num"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {n}
                </span>
              ))}
            </div>
            <p style={{ color: "#38bdf8", fontSize: "1rem", marginBottom: "1.5rem" }}>
              {skipLabel} perfect!
            </p>
            <div className="sc-score-card">
              <div className="sc-score-item">
                <span className="sc-score-label">Score</span>
                <span className="sc-score-value">{score}</span>
              </div>
              <div className="sc-score-item">
                <span className="sc-score-label">Skip Type</span>
                <span className="sc-score-value">{skipLabel}</span>
              </div>
            </div>
            <div className="sc-complete-buttons">
              <button className="sc-next-btn" onClick={nextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button
                className="sc-menu-btn"
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
      <div className="sc-game">
        <style>{scStyles}</style>
        <div className="sc-complete">
          <div className="sc-complete-content">
            <h1 className="sc-complete-title">
              {"\uD83C\uDF0A"} Wipeout!
            </h1>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
              }}
            >
              You surfed {correctCount} waves on Level {level}
            </p>
            <div className="sc-score-card">
              <div className="sc-score-item">
                <span className="sc-score-label">Final Score</span>
                <span className="sc-score-value">{score}</span>
              </div>
            </div>
            <div className="sc-complete-buttons">
              <button className="sc-next-btn" onClick={startGame}>
                Paddle Back Out {"\uD83D\uDD04"}
              </button>
              <button
                className="sc-menu-btn"
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
    <div className="sc-game">
      <style>{scStyles}</style>
      <div className="sc-play">
        {/* Header */}
        <div className="sc-header">
          <div className="sc-header-left">
            <button
              className="sc-back-btn"
              onClick={() => (onExit ? onExit() : setScreen("intro"))}
            >
              {"\u2190"}
            </button>
            <div className="sc-level-badge">Level {level}</div>
            <div className="sc-skip-badge">{skipLabel}</div>
          </div>
          <div className="sc-header-center">
            <span className="sc-lives">{livesDisplay.join(" ")}</span>
            {comboCount >= 2 && (
              <span className="sc-combo-badge">
                {"\uD83D\uDD25"} x{comboCount}
              </span>
            )}
          </div>
          <div className="sc-header-right">
            <div className="sc-score-badge">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Sequence tracker */}
        <div className="sc-sequence-bar">
          {completedSequence.map((n, i) => (
            <span key={`done-${i}`} className="sc-seq-done">
              {n}
            </span>
          ))}
          {upcomingNumber !== undefined && (
            <span className="sc-seq-next">?</span>
          )}
          <span className="sc-progress-text">
            {correctCount} / {neededCount}
          </span>
        </div>

        {/* Ocean area */}
        <div className="sc-ocean" ref={containerRef}>
          {/* Background waves */}
          <div className="sc-ocean-bg">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="sc-bg-wave-play"
                style={{
                  bottom: `${i * 15}%`,
                  animationDelay: `${i * 0.8}s`,
                  opacity: 0.1 + i * 0.05,
                }}
              />
            ))}
          </div>

          {/* Waves with numbers */}
          {waves.map((wave) => (
            <button
              key={wave.id}
              className={`sc-wave ${wave.hit ? "sc-wave-hit" : ""} ${
                wave.missed ? "sc-wave-missed" : ""
              }`}
              style={{ left: wave.x, top: wave.y }}
              onClick={() => handleWaveTap(wave)}
              onTouchStart={(e) => {
                e.preventDefault();
                handleWaveTap(wave);
              }}
              disabled={wave.hit || wave.missed}
            >
              <div className="sc-wave-shape">{"\uD83C\uDF0A"}</div>
              <div className="sc-wave-number">{wave.number}</div>
            </button>
          ))}

          {/* Splash effect */}
          {splash && (
            <div
              className={`sc-splash sc-splash-${splash.type}`}
              style={{ left: splash.x, top: splash.y }}
            >
              {splash.type === "correct" ? "\uD83E\uDD19" : "\uD83D\uDCA6"}
            </div>
          )}

          {/* Surfer */}
          <div
            className="sc-surfer"
            style={{ left: surferX, transition: "left 0.5s ease" }}
          >
            {surferEmoji}
          </div>

          {/* Hint */}
          {showSequenceHint && upcomingNumber !== undefined && (
            <div className="sc-hint">
              Tap the wave with <strong>{upcomingNumber}</strong>!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const scStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .sc-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #0ea5e9 0%, #0284c7 30%, #0369a1 60%, #075985 100%);
  }

  .sc-intro, .sc-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .sc-intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .sc-bg-wave {
    position: absolute; left: -10%; right: -10%; height: 30px;
    background: rgba(255,255,255,0.1); border-radius: 50%;
    animation: scWaveRoll 4s ease-in-out infinite;
  }

  @keyframes scWaveRoll {
    0%, 100% { transform: translateX(-5%); }
    50% { transform: translateX(5%); }
  }

  .sc-bg-critter {
    position: absolute; font-size: 2rem; animation: scBob 3s ease-in-out infinite;
  }

  @keyframes scBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .sc-intro-content, .sc-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .sc-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .sc-logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem); font-weight: 900;
    background: linear-gradient(135deg, #ffffff, #bae6fd, #7dd3fc);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .sc-logo-wave { font-size: 2.5rem; animation: scWaveBounce 2s ease-in-out infinite; }

  @keyframes scWaveBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  .sc-tagline { color: #bae6fd; font-size: 1.2rem; margin-bottom: 2rem; }

  .sc-instructions-card {
    background: rgba(0,0,0,0.2); border: 2px solid rgba(186,230,253,0.3);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem; backdrop-filter: blur(10px);
  }

  .sc-instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1rem; }

  .sc-instruction { margin-bottom: 1.2rem; }
  .sc-instruction:last-child { margin-bottom: 0; }

  .sc-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.4rem; margin-bottom: 0.4rem;
  }

  .sc-num-preview {
    width: 32px; height: 32px; border-radius: 50%;
    background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 0.9rem;
  }

  .sc-num-preview.active { background: #4ade80; }
  .sc-num-preview.correct { background: #4ade80; box-shadow: 0 0 10px rgba(74,222,128,0.5); }
  .sc-num-preview.dim { opacity: 0.4; }
  .sc-surfer-preview { font-size: 1.8rem; }
  .sc-arrow-icon { color: rgba(255,255,255,0.5); }
  .sc-combo { color: #fb923c; font-weight: 800; font-size: 1.1rem; }
  .sc-instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .sc-hl-blue { color: #38bdf8; font-weight: 700; }
  .sc-hl-green { color: #4ade80; font-weight: 700; }
  .sc-hl-orange { color: #fb923c; font-weight: 700; }

  .sc-start-btn, .sc-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(14,165,233,0.4);
  }

  .sc-start-btn:hover, .sc-next-btn:hover {
    transform: translateY(-3px); box-shadow: 0 15px 50px rgba(14,165,233,0.5);
  }

  .sc-complete-title { font-size: clamp(1.6rem, 6vw, 2.3rem); color: white; margin-bottom: 1rem; }

  .sc-sequence-display {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem; margin-bottom: 0.8rem;
  }

  .sc-seq-num {
    padding: 0.3rem 0.6rem; background: rgba(74,222,128,0.3); border-radius: 8px;
    color: #4ade80; font-weight: 700; font-size: 0.9rem;
    animation: scSeqPop 0.5s ease forwards;
  }

  @keyframes scSeqPop {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .sc-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }
  .sc-score-item { display: flex; flex-direction: column; align-items: center; }
  .sc-score-label { font-size: 0.85rem; color: #7dd3fc; margin-bottom: 0.3rem; }
  .sc-score-value { font-size: 1.5rem; font-weight: 900; color: white; }

  .sc-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .sc-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .sc-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* Playing */
  .sc-play { height: 100%; display: flex; flex-direction: column; }

  .sc-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.3); z-index: 50;
    flex-wrap: wrap; gap: 0.3rem;
  }

  .sc-header-left, .sc-header-right { display: flex; align-items: center; gap: 0.5rem; }
  .sc-header-center { display: flex; align-items: center; gap: 0.5rem; }

  .sc-back-btn {
    width: 36px; height: 36px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 10px; color: white; font-size: 1.1rem;
    cursor: pointer;
  }

  .sc-level-badge {
    padding: 0.4rem 0.8rem; background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.85rem;
  }

  .sc-skip-badge {
    padding: 0.4rem 0.8rem; background: rgba(74,222,128,0.2);
    border-radius: 16px; font-weight: 700; color: #4ade80; font-size: 0.8rem;
  }

  .sc-lives { font-size: 1rem; }

  .sc-combo-badge {
    padding: 0.3rem 0.6rem; background: rgba(251,146,60,0.3);
    border-radius: 10px; font-size: 0.8rem; color: #fb923c; font-weight: 700;
  }

  .sc-score-badge {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.4rem 0.8rem; background: rgba(251,191,36,0.2);
    border-radius: 16px; color: #fbbf24; font-weight: 700; font-size: 0.85rem;
  }

  .sc-sequence-bar {
    display: flex; align-items: center; justify-content: center; gap: 0.4rem;
    padding: 0.5rem; background: rgba(0,0,0,0.2);
  }

  .sc-seq-done {
    padding: 0.2rem 0.5rem; background: rgba(74,222,128,0.3); border-radius: 6px;
    color: #4ade80; font-weight: 700; font-size: 0.85rem;
  }

  .sc-seq-next {
    padding: 0.2rem 0.5rem; background: rgba(250,204,21,0.3); border-radius: 6px;
    color: #facc15; font-weight: 700; font-size: 0.85rem;
    animation: scNextPulse 1s ease-in-out infinite;
  }

  @keyframes scNextPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .sc-progress-text { color: #64748b; font-size: 0.75rem; margin-left: 0.5rem; }

  /* Ocean */
  .sc-ocean { flex: 1; position: relative; overflow: hidden; touch-action: none; }

  .sc-ocean-bg { position: absolute; inset: 0; pointer-events: none; }

  .sc-bg-wave-play {
    position: absolute; left: -10%; right: -10%; height: 40%;
    background: rgba(255,255,255,0.08); border-radius: 50%;
    animation: scWaveRoll 5s ease-in-out infinite;
  }

  .sc-wave {
    position: absolute; transform: translate(-50%, -50%);
    display: flex; flex-direction: column; align-items: center;
    cursor: pointer; border: none; background: none;
    transition: transform 0.15s ease;
    font-family: 'Nunito', sans-serif; z-index: 10;
    padding: 0;
  }

  .sc-wave:hover:not(:disabled) { transform: translate(-50%, -50%) scale(1.1); }
  .sc-wave:active:not(:disabled) { transform: translate(-50%, -50%) scale(0.95); }

  .sc-wave-shape { font-size: 2.5rem; line-height: 1; }

  .sc-wave-number {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    font-size: 1.4rem; font-weight: 900; color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
    min-width: 40px; text-align: center;
  }

  .sc-wave-hit {
    animation: scWaveHit 0.5s ease forwards;
  }

  @keyframes scWaveHit {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(1.3); opacity: 0; }
  }

  .sc-wave-missed {
    opacity: 0.3; pointer-events: none;
  }

  .sc-splash {
    position: absolute; transform: translate(-50%, -50%);
    font-size: 2.5rem; pointer-events: none; z-index: 50;
    animation: scSplashAnim 0.8s ease forwards;
  }

  @keyframes scSplashAnim {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    30% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -100%) scale(1); opacity: 0; }
  }

  .sc-surfer {
    position: absolute; bottom: 30px; font-size: 3rem;
    transform: translateX(-50%); pointer-events: none; z-index: 20;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }

  .sc-hint {
    position: absolute; bottom: 100px; left: 50%; transform: translateX(-50%);
    padding: 0.6rem 1.2rem; background: rgba(0,0,0,0.6); border-radius: 12px;
    color: #facc15; font-size: 0.9rem; white-space: nowrap;
    animation: scHintFade 2s ease-in-out infinite;
  }

  @keyframes scHintFade {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @media (max-width: 600px) {
    .sc-wave-shape { font-size: 2rem; }
    .sc-wave-number { font-size: 1.2rem; }
    .sc-surfer { font-size: 2.5rem; }
    .sc-header { padding: 0.4rem 0.6rem; }
  }
`;
