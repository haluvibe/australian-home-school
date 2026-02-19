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
  svgPath: string;
  description: string;
  color: string;
}

interface ShadowChallenge {
  shape: ShapeDef;
  rotation: number;
  scale: number;
  distortion: number;
  options: ShapeDef[];
}

interface DustParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  color: string;
  life: number;
}

interface ShatterPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  opacity: number;
  life: number;
  path: string;
}

const SHAPES: ShapeDef[] = [
  {
    name: "Circle",
    sides: 0,
    emoji: "\u2B55",
    svgPath: "M 50 10 A 40 40 0 1 1 49.99 10 Z",
    description: "Round, no sides, no corners",
    color: "#38bdf8",
  },
  {
    name: "Triangle",
    sides: 3,
    emoji: "\uD83D\uDD3A",
    svgPath: "M 50 10 L 90 80 L 10 80 Z",
    description: "3 straight sides, 3 corners",
    color: "#f472b6",
  },
  {
    name: "Square",
    sides: 4,
    emoji: "\uD83D\uDFE7",
    svgPath: "M 15 15 L 85 15 L 85 85 L 15 85 Z",
    description: "4 equal sides, 4 corners",
    color: "#fb923c",
  },
  {
    name: "Rectangle",
    sides: 4,
    emoji: "\uD83D\uDFE9",
    svgPath: "M 10 25 L 90 25 L 90 75 L 10 75 Z",
    description: "4 sides, opposite sides equal, 4 corners",
    color: "#4ade80",
  },
  {
    name: "Diamond",
    sides: 4,
    emoji: "\uD83D\uDD37",
    svgPath: "M 50 10 L 90 50 L 50 90 L 10 50 Z",
    description: "4 equal sides, tilted square",
    color: "#818cf8",
  },
  {
    name: "Star",
    sides: 10,
    emoji: "\u2B50",
    svgPath:
      "M 50 5 L 61 35 L 95 35 L 68 55 L 79 90 L 50 70 L 21 90 L 32 55 L 5 35 L 39 35 Z",
    description: "5 points, 10 sides",
    color: "#fbbf24",
  },
  {
    name: "Heart",
    sides: 0,
    emoji: "\u2764\uFE0F",
    svgPath:
      "M 50 85 C 20 60 5 40 15 25 C 25 10 45 15 50 30 C 55 15 75 10 85 25 C 95 40 80 60 50 85 Z",
    description: "Curved shape, like two bumps and a point",
    color: "#f43f5e",
  },
  {
    name: "Hexagon",
    sides: 6,
    emoji: "\u2B22",
    svgPath: "M 50 10 L 87 30 L 87 70 L 50 90 L 13 70 L 13 30 Z",
    description: "6 sides, 6 corners",
    color: "#a78bfa",
  },
  {
    name: "Oval",
    sides: 0,
    emoji: "\uD83E\uDE78",
    svgPath: "M 50 15 A 35 20 0 1 1 49.99 15 Z",
    description: "Round like a stretched circle, no corners",
    color: "#2dd4bf",
  },
  {
    name: "Pentagon",
    sides: 5,
    emoji: "\u2B1F",
    svgPath: "M 50 10 L 90 40 L 75 85 L 25 85 L 10 40 Z",
    description: "5 sides, 5 corners",
    color: "#e879f9",
  },
];

// Difficulty tiers
const SHAPES_EASY = SHAPES.filter((s) =>
  ["Circle", "Triangle", "Square", "Rectangle"].includes(s.name)
);
const SHAPES_MEDIUM = SHAPES.filter((s) =>
  ["Circle", "Triangle", "Square", "Rectangle", "Diamond", "Star", "Heart"].includes(s.name)
);

const CONFETTI_COLORS = [
  "#fbbf24", "#f472b6", "#38bdf8", "#4ade80", "#a855f7",
  "#fb923c", "#f43f5e", "#818cf8", "#2dd4bf", "#e879f9",
];

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
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [shadowRevealed, setShadowRevealed] = useState(false);
  const [spotlightIntensity, setSpotlightIntensity] = useState(1);
  const [screenShake, setScreenShake] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  // Particle systems
  const [dustParticles, setDustParticles] = useState<DustParticle[]>([]);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [shatterPieces, setShatterPieces] = useState<ShatterPiece[]>([]);

  // Animation refs
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dustAnimRef = useRef<number | null>(null);
  const confettiAnimRef = useRef<number | null>(null);
  const shatterAnimRef = useRef<number | null>(null);
  const spotlightAngleRef = useRef(0);
  const spotlightAnimRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  // Spotlight animation loop
  useEffect(() => {
    const animateSpotlight = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;
      spotlightAngleRef.current += delta * 15; // slow orbit
      spotlightAnimRef.current = requestAnimationFrame(animateSpotlight);
    };
    spotlightAnimRef.current = requestAnimationFrame(animateSpotlight);
    return () => {
      if (spotlightAnimRef.current) cancelAnimationFrame(spotlightAnimRef.current);
    };
  }, []);

  // Dust particle system - floating motes in the spotlight
  useEffect(() => {
    if (screen !== "playing") {
      setDustParticles([]);
      if (dustAnimRef.current) cancelAnimationFrame(dustAnimRef.current);
      return;
    }

    let dustId = 0;
    const spawnInterval = setInterval(() => {
      setDustParticles((prev) => {
        if (prev.length > 30) return prev;
        const newP: DustParticle = {
          id: dustId++,
          x: 30 + Math.random() * 40,
          y: 10 + Math.random() * 60,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -0.1 - Math.random() * 0.2,
          size: 1 + Math.random() * 3,
          opacity: 0.2 + Math.random() * 0.5,
          life: 3 + Math.random() * 4,
        };
        return [...prev, newP];
      });
    }, 200);

    const animateDust = () => {
      setDustParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * 0.1,
            y: p.y + p.vy * 0.1,
            vx: p.vx + (Math.random() - 0.5) * 0.05,
            opacity: p.opacity * 0.998,
            life: p.life - 0.016,
          }))
          .filter((p) => p.life > 0 && p.opacity > 0.01)
      );
      dustAnimRef.current = requestAnimationFrame(animateDust);
    };
    dustAnimRef.current = requestAnimationFrame(animateDust);

    return () => {
      clearInterval(spawnInterval);
      if (dustAnimRef.current) cancelAnimationFrame(dustAnimRef.current);
    };
  }, [screen]);

  // Confetti animation loop
  useEffect(() => {
    if (confetti.length === 0) {
      if (confettiAnimRef.current) cancelAnimationFrame(confettiAnimRef.current);
      return;
    }
    const animate = () => {
      setConfetti((prev) =>
        prev
          .map((c) => ({
            ...c,
            x: c.x + c.vx,
            y: c.y + c.vy,
            vy: c.vy + 0.15,
            rotation: c.rotation + c.rotSpeed,
            life: c.life - 0.016,
          }))
          .filter((c) => c.life > 0 && c.y < 120)
      );
      confettiAnimRef.current = requestAnimationFrame(animate);
    };
    confettiAnimRef.current = requestAnimationFrame(animate);
    return () => {
      if (confettiAnimRef.current) cancelAnimationFrame(confettiAnimRef.current);
    };
  }, [confetti.length > 0]);

  // Shatter animation loop
  useEffect(() => {
    if (shatterPieces.length === 0) {
      if (shatterAnimRef.current) cancelAnimationFrame(shatterAnimRef.current);
      return;
    }
    const animate = () => {
      setShatterPieces((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.2,
            rotation: p.rotation + p.rotSpeed,
            opacity: p.opacity * 0.97,
            life: p.life - 0.016,
          }))
          .filter((p) => p.life > 0 && p.opacity > 0.01)
      );
      shatterAnimRef.current = requestAnimationFrame(animate);
    };
    shatterAnimRef.current = requestAnimationFrame(animate);
    return () => {
      if (shatterAnimRef.current) cancelAnimationFrame(shatterAnimRef.current);
    };
  }, [shatterPieces.length > 0]);

  const spawnConfetti = useCallback(() => {
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 40; i++) {
      pieces.push({
        id: i,
        x: 40 + Math.random() * 20,
        y: 20 + Math.random() * 20,
        vx: (Math.random() - 0.5) * 6,
        vy: -3 - Math.random() * 5,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 15,
        size: 4 + Math.random() * 8,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        life: 3 + Math.random() * 2,
      });
    }
    setConfetti(pieces);
  }, []);

  const spawnShatter = useCallback((shapePath: string) => {
    const pieces: ShatterPiece[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      pieces.push({
        id: i,
        x: 50 + Math.cos(angle) * 5,
        y: 50 + Math.sin(angle) * 5,
        vx: Math.cos(angle) * (2 + Math.random() * 3),
        vy: Math.sin(angle) * (2 + Math.random() * 3) - 1,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 20,
        size: 8 + Math.random() * 15,
        opacity: 1,
        life: 1.5 + Math.random(),
        path: shapePath,
      });
    }
    setShatterPieces(pieces);
  }, []);

  const getShapePool = useCallback((lvl: number): ShapeDef[] => {
    if (lvl <= 3) return SHAPES_EASY;
    if (lvl <= 6) return SHAPES_MEDIUM;
    return SHAPES;
  }, []);

  const generateChallenge = useCallback(
    (lvl: number): ShadowChallenge => {
      const pool = getShapePool(lvl);
      const shape = pool[Math.floor(Math.random() * pool.length)];
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

  const startTimer = useCallback((lvl: number) => {
    const maxTime = Math.max(5, 12 - lvl);
    setTimerMax(maxTime);
    setTimer(maxTime);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0.1) return 0;
        return prev - 0.1;
      });
    }, 100);
  }, []);

  const initLevel = useCallback(
    (lvl: number) => {
      const needed = Math.min(5 + Math.floor(lvl / 2), 10);
      setShapesNeeded(needed);
      setShapesCompleted(0);
      setShowResult(null);
      setShowDescription(false);
      setShadowRevealed(false);
      setSpotlightIntensity(1);
      setConfetti([]);
      setShatterPieces([]);
      setSelectedOption(null);

      const ch = generateChallenge(lvl);
      setChallenge(ch);

      // Dramatic shadow reveal
      setTimeout(() => setShadowRevealed(true), 300);
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
    setCurtainOpen(true);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setScreen("playing");
    initLevel(newLevel);
  };

  const advanceToNext = useCallback(() => {
    const newCompleted = shapesCompleted + 1;
    setShapesCompleted(newCompleted);

    if (newCompleted >= shapesNeeded) {
      if (timerRef.current) clearInterval(timerRef.current);
      setTimeout(() => setScreen("levelComplete"), 400);
    } else {
      setShowResult(null);
      setShowDescription(false);
      setShadowRevealed(false);
      setSelectedOption(null);
      setSpotlightIntensity(1);
      const ch = generateChallenge(level);
      setChallenge(ch);
      setTimeout(() => setShadowRevealed(true), 300);
      startTimer(level);
    }
  }, [shapesCompleted, shapesNeeded, generateChallenge, level, startTimer]);

  // Timer reaching zero
  useEffect(() => {
    if (screen !== "playing" || !challenge) return;
    if (timer <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      setShowResult("wrong");
      setStreak(0);
      setScreenShake(true);
      setTimeout(() => setScreenShake(false), 500);
      spawnShatter(challenge.shape.svgPath);
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

  // Spotlight pulsing when timer is low
  useEffect(() => {
    if (screen !== "playing") return;
    const timerPercent = timerMax > 0 ? (timer / timerMax) * 100 : 0;
    if (timerPercent < 30 && timerPercent > 0) {
      setSpotlightIntensity(0.6 + Math.sin(Date.now() * 0.01) * 0.4);
    }
  }, [timer, timerMax, screen]);

  const handleAnswer = useCallback(
    (selected: ShapeDef) => {
      if (showResult || !challenge) return;
      if (timerRef.current) clearInterval(timerRef.current);
      setSelectedOption(selected.name);

      if (selected.name === challenge.shape.name) {
        const timeBonus = Math.floor(timer * 5);
        const streakBonus = streak * 5;
        setScore((s) => s + 20 + timeBonus + streakBonus);
        setShowResult("correct");
        const newStreak = streak + 1;
        setStreak(newStreak);
        if (newStreak > bestStreak) setBestStreak(newStreak);
        setSpotlightIntensity(2);
        spawnConfetti();
        setShowDescription(true);
        setTimeout(() => advanceToNext(), 1500);
      } else {
        setShowResult("wrong");
        setStreak(0);
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 500);
        spawnShatter(challenge.shape.svgPath);
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
    [showResult, challenge, timer, streak, bestStreak, lives, advanceToNext, spawnConfetti, spawnShatter]
  );

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (dustAnimRef.current) cancelAnimationFrame(dustAnimRef.current);
      if (confettiAnimRef.current) cancelAnimationFrame(confettiAnimRef.current);
      if (shatterAnimRef.current) cancelAnimationFrame(shatterAnimRef.current);
      if (spotlightAnimRef.current) cancelAnimationFrame(spotlightAnimRef.current);
    };
  }, []);

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );
  const timerPercent = timerMax > 0 ? (timer / timerMax) * 100 : 0;
  const timerUrgent = timerPercent < 30 && timerPercent > 0;

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="ss-game">
        <style>{ssStyles}</style>
        <div className="ss-intro">
          {/* Floating shape silhouettes */}
          <div className="ss-intro-shapes-bg">
            {SHAPES.map((s, i) => (
              <div
                key={s.name}
                className="ss-floating-silhouette"
                style={{
                  left: `${8 + (i % 5) * 20}%`,
                  top: `${10 + Math.floor(i / 5) * 40}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${6 + (i % 3) * 2}s`,
                }}
              >
                <svg viewBox="0 0 100 100" width="60" height="60">
                  <path d={s.svgPath} fill="rgba(168,85,247,0.08)" />
                </svg>
              </div>
            ))}
          </div>

          {/* Animated curtains */}
          <div className="ss-intro-curtain-left" />
          <div className="ss-intro-curtain-right" />

          {/* Spotlight beams */}
          <div className="ss-intro-spotlight ss-spotlight-1" />
          <div className="ss-intro-spotlight ss-spotlight-2" />

          <div className="ss-intro-content">
            {/* Theatrical masks */}
            <div className="ss-theatre-masks">
              <span className="ss-mask ss-mask-left">🎭</span>
              <span className="ss-mask ss-mask-right">🎭</span>
            </div>

            <div className="ss-logo">
              <h1>Shape Shadows</h1>
              <p className="ss-subtitle">The Shadow Puppet Theatre</p>
            </div>

            <div className="ss-instructions-card">
              <div className="ss-card-glow" />
              <h3>How to Play</h3>
              <div className="ss-instruction">
                <div className="ss-instruction-icon-wrap">
                  <svg viewBox="0 0 100 100" width="32" height="32">
                    <path d="M 50 10 L 90 80 L 10 80 Z" fill="rgba(0,0,0,0.8)" filter="url(#intro-blur)" />
                    <defs><filter id="intro-blur"><feGaussianBlur stdDeviation="2" /></filter></defs>
                  </svg>
                </div>
                <p>
                  A mystery <span className="ss-hl-purple">SHADOW</span> appears on stage
                </p>
              </div>
              <div className="ss-instruction">
                <div className="ss-instruction-icon-wrap">🔍</div>
                <p>
                  Figure out which <span className="ss-hl-blue">SHAPE</span> is casting the shadow
                </p>
              </div>
              <div className="ss-instruction">
                <div className="ss-instruction-icon-wrap">⏱️</div>
                <p>
                  Be quick! The shadow <span className="ss-hl-red">FADES</span> away!
                </p>
              </div>
              <div className="ss-instruction">
                <div className="ss-instruction-icon-wrap">🔥</div>
                <p>
                  Build a <span className="ss-hl-orange">STREAK</span> for bonus points!
                </p>
              </div>
            </div>

            <button className="ss-start-btn" onClick={startGame}>
              <span className="ss-btn-glow" />
              🎭 Open the Curtains! 🎭
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
          {/* Standing ovation background */}
          <div className="ss-ovation-bg">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="ss-ovation-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                }}
              >
                ⭐
              </div>
            ))}
            {/* Applause bursts */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`clap-${i}`}
                className="ss-clap-burst"
                style={{
                  left: `${15 + i * 14}%`,
                  bottom: `${10 + (i % 2) * 8}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                👏
              </div>
            ))}
          </div>

          {/* Spotlight beams on stage */}
          <div className="ss-complete-spotlights">
            <div className="ss-complete-spot ss-complete-spot-1" />
            <div className="ss-complete-spot ss-complete-spot-2" />
            <div className="ss-complete-spot ss-complete-spot-3" />
          </div>

          <div className="ss-complete-content">
            <h1 className="ss-complete-title">
              🌟 Level {level} Complete! 🌟
            </h1>

            {/* Shapes taking a bow */}
            <div className="ss-shapes-parade">
              {getShapePool(level).slice(0, 6).map((s, i) => (
                <div
                  key={s.name}
                  className="ss-parade-shape-wrap"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <svg viewBox="0 0 100 100" width="48" height="48" className="ss-parade-svg">
                    <path d={s.svgPath} fill={s.color} />
                  </svg>
                </div>
              ))}
            </div>

            <div className="ss-score-card">
              <div className="ss-score-item">
                <span className="ss-score-label">Score</span>
                <span className="ss-score-value">{score}</span>
              </div>
              <div className="ss-score-item">
                <span className="ss-score-label">Best Streak</span>
                <span className="ss-score-value ss-streak-glow">
                  🔥 {bestStreak}
                </span>
              </div>
              <div className="ss-score-item">
                <span className="ss-score-label">Lives Left</span>
                <span className="ss-score-value">{livesDisplay.join(" ")}</span>
              </div>
            </div>

            <div className="ss-complete-buttons">
              <button className="ss-next-btn" onClick={nextLevel}>
                <span className="ss-btn-glow" />
                Level {level + 1} →
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
        <div className="ss-complete ss-game-over-screen">
          <div className="ss-curtain-close-left" />
          <div className="ss-curtain-close-right" />

          <div className="ss-complete-content">
            <h1 className="ss-complete-title ss-game-over-title">
              🎭 The curtain falls!
            </h1>
            <p className="ss-game-over-subtitle">
              You identified {shapesCompleted} shapes and reached Level {level}
            </p>
            <div className="ss-score-card">
              <div className="ss-score-item">
                <span className="ss-score-label">Final Score</span>
                <span className="ss-score-value">{score}</span>
              </div>
              <div className="ss-score-item">
                <span className="ss-score-label">Best Streak</span>
                <span className="ss-score-value">🔥 {bestStreak}</span>
              </div>
            </div>
            <div className="ss-complete-buttons">
              <button className="ss-next-btn" onClick={startGame}>
                <span className="ss-btn-glow" />
                Try Again 🔄
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
      <div className={`ss-play ${screenShake ? "ss-shake" : ""}`}>
        {/* Theatre background layers */}
        <div className="ss-theatre-bg">
          {/* Velvet curtain texture sides */}
          <div className="ss-side-curtain ss-side-curtain-l" />
          <div className="ss-side-curtain ss-side-curtain-r" />
          {/* Stage floor */}
          <div className="ss-stage-floor" />
          {/* Side lighting */}
          <div className="ss-side-light ss-side-light-l" />
          <div className="ss-side-light ss-side-light-r" />
        </div>

        {/* Header */}
        <div className="ss-header">
          <div className="ss-header-left">
            <button
              className="ss-back-btn"
              onClick={() => {
                if (timerRef.current) clearInterval(timerRef.current);
                onExit ? onExit() : setScreen("intro");
              }}
            >
              ←
            </button>
            <div className="ss-level-badge">Level {level}</div>
          </div>
          <div className="ss-header-center">
            <span className="ss-lives">{livesDisplay.join(" ")}</span>
            {streak >= 2 && (
              <span className={`ss-streak-badge ${streak >= 5 ? "ss-streak-fire" : ""}`}>
                🔥 {streak}
              </span>
            )}
          </div>
          <div className="ss-header-right">
            <div className="ss-score-badge">⭐ {score}</div>
          </div>
        </div>

        {/* Timer bar */}
        <div className={`ss-timer-bar ${timerUrgent ? "ss-timer-urgent" : ""}`}>
          <div
            className={`ss-timer-fill ${timerUrgent ? "ss-timer-pulse" : ""}`}
            style={{
              width: `${timerPercent}%`,
              background: timerPercent > 60
                ? "linear-gradient(90deg, #4ade80, #22c55e)"
                : timerPercent > 30
                ? "linear-gradient(90deg, #facc15, #eab308)"
                : "linear-gradient(90deg, #ef4444, #dc2626)",
            }}
          />
        </div>

        {/* Progress */}
        <div className="ss-progress">
          <div className="ss-progress-dots">
            {Array.from({ length: shapesNeeded }, (_, i) => (
              <div
                key={i}
                className={`ss-progress-dot ${
                  i < shapesCompleted ? "ss-dot-done" : i === shapesCompleted ? "ss-dot-current" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Shadow Stage */}
        {challenge && (
          <div className="ss-stage">
            {/* Spotlight cone */}
            <div
              className="ss-spotlight-cone"
              style={{ opacity: spotlightIntensity * 0.6 }}
            />
            {/* Spotlight glow on shape */}
            <div
              className="ss-spotlight-glow"
              style={{
                opacity: spotlightIntensity * 0.4,
                transform: `scale(${0.8 + spotlightIntensity * 0.3})`,
              }}
            />

            {/* Dust particles in spotlight */}
            {dustParticles.map((p) => (
              <div
                key={p.id}
                className="ss-dust"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  opacity: p.opacity,
                }}
              />
            ))}

            <div className="ss-stage-inner">
              {/* Shadow shape */}
              <div
                className={`ss-shadow-container ${
                  shadowRevealed ? "ss-shadow-revealed" : "ss-shadow-hidden"
                } ${
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
                  <defs>
                    <filter id="shadow-blur-deep">
                      <feGaussianBlur stdDeviation="1.5" />
                    </filter>
                    <filter id="shadow-glow">
                      <feGaussianBlur stdDeviation="4" result="glow" />
                      <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <radialGradient id="shadow-fill" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0a0a1a" />
                      <stop offset="100%" stopColor="#1a1a3e" />
                    </radialGradient>
                    <radialGradient id="correct-fill" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor={challenge.shape.color} />
                      <stop offset="100%" stopColor={challenge.shape.color + "99"} />
                    </radialGradient>
                  </defs>
                  {/* Shadow edge glow */}
                  {showResult !== "correct" && showResult !== "wrong" && (
                    <path
                      d={challenge.shape.svgPath}
                      fill="none"
                      stroke="rgba(168,85,247,0.15)"
                      strokeWidth="3"
                      filter="url(#shadow-glow)"
                      className="ss-shadow-edge"
                    />
                  )}
                  {/* Main shadow shape */}
                  <path
                    d={challenge.shape.svgPath}
                    fill={
                      showResult === "correct"
                        ? `url(#correct-fill)`
                        : showResult === "wrong"
                        ? "#ef4444"
                        : "url(#shadow-fill)"
                    }
                    stroke={
                      showResult === "correct"
                        ? challenge.shape.color
                        : showResult === "wrong"
                        ? "#fca5a5"
                        : "none"
                    }
                    strokeWidth={showResult ? "2" : "0"}
                    filter={showResult ? "none" : "url(#shadow-blur-deep)"}
                    className={showResult === "correct" ? "ss-shape-colorize" : ""}
                  />
                  {/* Specular highlight on reveal */}
                  {showResult === "correct" && (
                    <path
                      d={challenge.shape.svgPath}
                      fill="rgba(255,255,255,0.15)"
                      transform="translate(0, -5) scale(0.85) translate(7.5, 0)"
                      className="ss-specular"
                    />
                  )}
                </svg>

                {/* Breathing animation on shadow edge */}
                {!showResult && (
                  <div className="ss-shadow-breath" />
                )}
              </div>

              {/* Confetti particles */}
              {confetti.map((c) => (
                <div
                  key={c.id}
                  className="ss-confetti-piece"
                  style={{
                    left: `${c.x}%`,
                    top: `${c.y}%`,
                    width: c.size,
                    height: c.size * 0.6,
                    backgroundColor: c.color,
                    transform: `rotate(${c.rotation}deg)`,
                    opacity: c.life > 1 ? 1 : c.life,
                  }}
                />
              ))}

              {/* Shatter pieces */}
              {shatterPieces.map((p) => (
                <div
                  key={p.id}
                  className="ss-shatter-piece"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    transform: `rotate(${p.rotation}deg)`,
                    opacity: p.opacity,
                  }}
                />
              ))}

              {/* Description placard */}
              {showDescription && challenge && (
                <div className="ss-description-placard">
                  <div className="ss-placard-inner">
                    <div className="ss-placard-name">
                      <svg viewBox="0 0 100 100" width="24" height="24" style={{ marginRight: 8 }}>
                        <path d={challenge.shape.svgPath} fill={challenge.shape.color} />
                      </svg>
                      {challenge.shape.name}
                    </div>
                    <div className="ss-placard-desc">{challenge.shape.description}</div>
                  </div>
                </div>
              )}

              {/* Result indicator */}
              {showResult && (
                <div
                  className={`ss-result-badge ${
                    showResult === "correct" ? "ss-result-correct" : "ss-result-wrong"
                  }`}
                >
                  {showResult === "correct" ? "✨ Correct!" : "✕ Not quite!"}
                </div>
              )}
            </div>

            {/* Red flash overlay for wrong answers */}
            {showResult === "wrong" && (
              <div className="ss-red-flash" />
            )}
          </div>
        )}

        {/* Answer options */}
        {challenge && (
          <div className="ss-options-area">
            <div className={`ss-options ${streak >= 3 ? "ss-options-streak" : ""}`}>
              {challenge.options.map((opt) => {
                const isCorrectAnswer = showResult && opt.name === challenge.shape.name;
                const isWrongChoice =
                  showResult === "wrong" && selectedOption === opt.name;
                const isHovered = hoveredOption === opt.name;

                return (
                  <button
                    key={opt.name}
                    className={`ss-option ${
                      isCorrectAnswer ? "ss-option-correct" : ""
                    } ${isWrongChoice ? "ss-option-wrong" : ""} ${
                      isHovered && !showResult ? "ss-option-hovered" : ""
                    }`}
                    onClick={() => handleAnswer(opt)}
                    onMouseEnter={() => setHoveredOption(opt.name)}
                    onMouseLeave={() => setHoveredOption(null)}
                    disabled={showResult !== null}
                  >
                    <div className="ss-option-shape-preview">
                      <svg viewBox="0 0 100 100" width="36" height="36">
                        <path d={opt.svgPath} fill={opt.color} opacity="0.9" />
                      </svg>
                    </div>
                    <span className="ss-option-name">{opt.name}</span>
                    {isCorrectAnswer && (
                      <span className="ss-option-check">✓</span>
                    )}
                    {isWrongChoice && (
                      <span className="ss-option-x">✕</span>
                    )}
                    <div className="ss-option-glow" />
                    {streak >= 3 && !showResult && (
                      <div className="ss-option-fire-border" />
                    )}
                  </button>
                );
              })}
            </div>
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
    background: #0a0a12;
  }

  /* ============= SCREEN SHAKE ============= */
  @keyframes ssShake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-6px) rotate(-0.5deg); }
    30% { transform: translateX(5px) rotate(0.5deg); }
    50% { transform: translateX(-4px); }
    70% { transform: translateX(3px); }
    90% { transform: translateX(-2px); }
  }
  .ss-shake { animation: ssShake 0.5s ease; }

  /* ============= INTRO SCREEN ============= */
  .ss-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(88,28,135,0.15) 0%, transparent 70%),
      linear-gradient(180deg, #0a0a12 0%, #1a0a2e 40%, #12061e 100%);
  }

  /* Floating silhouettes */
  .ss-intro-shapes-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .ss-floating-silhouette {
    position: absolute;
    animation: ssFloatSilhouette 8s ease-in-out infinite;
    opacity: 0.6;
  }
  @keyframes ssFloatSilhouette {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
    50% { transform: translateY(-25px) rotate(8deg); opacity: 0.7; }
  }

  /* Curtains */
  .ss-intro-curtain-left, .ss-intro-curtain-right {
    position: absolute; top: 0; bottom: 0; width: 18%; z-index: 2;
    pointer-events: none;
  }
  .ss-intro-curtain-left {
    left: 0;
    background:
      linear-gradient(90deg,
        rgba(88,28,135,0.6) 0%,
        rgba(88,28,135,0.3) 40%,
        rgba(88,28,135,0.1) 70%,
        transparent 100%
      );
    border-right: 1px solid rgba(168,85,247,0.1);
  }
  .ss-intro-curtain-right {
    right: 0;
    background:
      linear-gradient(-90deg,
        rgba(88,28,135,0.6) 0%,
        rgba(88,28,135,0.3) 40%,
        rgba(88,28,135,0.1) 70%,
        transparent 100%
      );
    border-left: 1px solid rgba(168,85,247,0.1);
  }

  /* Spotlight beams */
  .ss-intro-spotlight {
    position: absolute; width: 200px; height: 500px;
    pointer-events: none; z-index: 1;
  }
  .ss-spotlight-1 {
    left: 30%; top: -100px;
    background: linear-gradient(180deg, rgba(251,191,36,0.12) 0%, transparent 80%);
    transform: rotate(-8deg);
    animation: ssSpotSway1 6s ease-in-out infinite;
  }
  .ss-spotlight-2 {
    right: 25%; top: -100px;
    background: linear-gradient(180deg, rgba(168,85,247,0.1) 0%, transparent 80%);
    transform: rotate(8deg);
    animation: ssSpotSway2 7s ease-in-out infinite;
  }
  @keyframes ssSpotSway1 {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(-3deg); }
  }
  @keyframes ssSpotSway2 {
    0%, 100% { transform: rotate(8deg); }
    50% { transform: rotate(3deg); }
  }

  .ss-intro-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  /* Theatre masks */
  .ss-theatre-masks {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 0.5rem;
  }
  .ss-mask {
    font-size: 2.5rem; display: inline-block;
    animation: ssMaskFloat 3s ease-in-out infinite;
  }
  .ss-mask-left { animation-delay: 0s; }
  .ss-mask-right { animation-delay: 0.5s; transform: scaleX(-1); }
  @keyframes ssMaskFloat {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }
  .ss-mask-right {
    animation-name: ssMaskFloatR;
  }
  @keyframes ssMaskFloatR {
    0%, 100% { transform: scaleX(-1) translateY(0) rotate(-5deg); }
    50% { transform: scaleX(-1) translateY(-8px) rotate(5deg); }
  }

  .ss-logo h1 {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #a855f7, #818cf8);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    text-shadow: none;
    animation: ssLogoGlow 3s ease-in-out infinite alternate;
  }
  @keyframes ssLogoGlow {
    0% { filter: brightness(1); }
    100% { filter: brightness(1.2); }
  }

  .ss-subtitle {
    color: #a78bfa; font-size: 1.1rem; margin-bottom: 2rem;
    letter-spacing: 0.05em;
  }

  /* Glass-morphism instructions card */
  .ss-instructions-card {
    position: relative; overflow: hidden;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(168,85,247,0.2);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem;
    backdrop-filter: blur(20px);
    box-shadow:
      0 8px 32px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(255,255,255,0.05);
  }
  .ss-card-glow {
    position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at 50% 80%, rgba(168,85,247,0.06) 0%, transparent 50%);
    pointer-events: none;
    animation: ssCardGlowPulse 4s ease-in-out infinite;
  }
  @keyframes ssCardGlowPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  .ss-instructions-card h3 {
    color: white; font-size: 1.2rem; margin-bottom: 1rem;
    position: relative; z-index: 1;
  }

  .ss-instruction {
    display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
    position: relative; z-index: 1;
  }
  .ss-instruction:last-child { margin-bottom: 0; }
  .ss-instruction-icon-wrap {
    flex-shrink: 0; width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.06);
    border-radius: 12px; font-size: 1.3rem;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .ss-instruction p { color: #cbd5e1; font-size: 0.95rem; text-align: left; }
  .ss-hl-purple { color: #a855f7; font-weight: 700; }
  .ss-hl-blue { color: #38bdf8; font-weight: 700; }
  .ss-hl-red { color: #ef4444; font-weight: 700; }
  .ss-hl-orange { color: #fb923c; font-weight: 700; }

  .ss-start-btn, .ss-next-btn {
    position: relative; overflow: hidden;
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow:
      0 10px 40px rgba(168,85,247,0.4),
      0 0 0 1px rgba(168,85,247,0.3);
  }
  .ss-btn-glow {
    position: absolute; inset: -2px; border-radius: 52px;
    background: linear-gradient(135deg, rgba(168,85,247,0.5), rgba(124,58,237,0.5));
    filter: blur(8px); opacity: 0; transition: opacity 0.3s;
    pointer-events: none;
  }
  .ss-start-btn:hover, .ss-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(168,85,247,0.5), 0 0 0 1px rgba(168,85,247,0.4);
  }
  .ss-start-btn:hover .ss-btn-glow, .ss-next-btn:hover .ss-btn-glow { opacity: 1; }

  /* ============= LEVEL COMPLETE ============= */
  .ss-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background:
      radial-gradient(ellipse at 50% 60%, rgba(168,85,247,0.15) 0%, transparent 60%),
      linear-gradient(180deg, #0a0a12 0%, #1a0a2e 60%, #12061e 100%);
  }

  .ss-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .ss-complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 1.5rem;
    animation: ssCompleteGlow 2s ease-in-out infinite alternate;
  }
  @keyframes ssCompleteGlow {
    0% { text-shadow: 0 0 20px rgba(168,85,247,0.3); }
    100% { text-shadow: 0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(251,191,36,0.2); }
  }

  /* Standing ovation */
  .ss-ovation-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .ss-ovation-star {
    position: absolute; font-size: 1.5rem;
    animation: ssStarTwinkle 2s ease-in-out infinite;
  }
  @keyframes ssStarTwinkle {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  .ss-clap-burst {
    position: absolute; font-size: 2rem;
    animation: ssClapBurst 1.5s ease-in-out infinite;
  }
  @keyframes ssClapBurst {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.3) translateY(-10px); opacity: 1; }
  }

  /* Spotlights on complete */
  .ss-complete-spotlights { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .ss-complete-spot {
    position: absolute; width: 150px; height: 400px; top: -50px;
  }
  .ss-complete-spot-1 {
    left: 20%;
    background: linear-gradient(180deg, rgba(251,191,36,0.1) 0%, transparent 70%);
    transform: rotate(-10deg);
    animation: ssSpotSway1 5s ease-in-out infinite;
  }
  .ss-complete-spot-2 {
    left: 45%;
    background: linear-gradient(180deg, rgba(168,85,247,0.1) 0%, transparent 70%);
    animation: ssSpotSway2 6s ease-in-out infinite;
  }
  .ss-complete-spot-3 {
    right: 15%;
    background: linear-gradient(180deg, rgba(56,189,248,0.08) 0%, transparent 70%);
    transform: rotate(10deg);
    animation: ssSpotSway1 7s ease-in-out infinite;
  }

  /* Shapes taking a bow */
  .ss-shapes-parade {
    display: flex; justify-content: center; gap: 0.8rem; margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .ss-parade-shape-wrap {
    animation: ssBow 2s ease-in-out infinite;
  }
  .ss-parade-svg {
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }
  @keyframes ssBow {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-12px) rotate(-5deg); }
    50% { transform: translateY(5px) rotate(0deg); }
    75% { transform: translateY(-8px) rotate(5deg); }
  }

  .ss-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }
  .ss-score-item { display: flex; flex-direction: column; align-items: center; }
  .ss-score-label { font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem; }
  .ss-score-value { font-size: 2rem; font-weight: 900; color: white; }
  .ss-streak-glow { color: #fb923c; text-shadow: 0 0 15px rgba(251,146,60,0.5); }

  .ss-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .ss-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .ss-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* ============= GAME OVER ============= */
  .ss-game-over-screen {
    background:
      radial-gradient(ellipse at 50% 50%, rgba(127,29,29,0.1) 0%, transparent 60%),
      linear-gradient(180deg, #0a0a12 0%, #1a0a1e 60%, #0a0812 100%) !important;
  }
  .ss-game-over-title { color: #f1f5f9 !important; }
  .ss-game-over-subtitle {
    color: #94a3b8; font-size: 1.1rem; margin-bottom: 1.5rem;
  }
  .ss-curtain-close-left, .ss-curtain-close-right {
    position: absolute; top: 0; bottom: 0; width: 35%; z-index: 2;
    pointer-events: none;
    animation: ssCurtainClose 1s ease-out forwards;
  }
  .ss-curtain-close-left {
    left: 0;
    background:
      linear-gradient(90deg,
        rgba(60,10,30,0.8) 0%, rgba(60,10,30,0.4) 60%, transparent 100%
      );
  }
  .ss-curtain-close-right {
    right: 0;
    background:
      linear-gradient(-90deg,
        rgba(60,10,30,0.8) 0%, rgba(60,10,30,0.4) 60%, transparent 100%
      );
  }
  @keyframes ssCurtainClose {
    0% { width: 5%; }
    100% { width: 35%; }
  }

  /* ============= PLAYING SCREEN ============= */
  .ss-play {
    height: 100%; display: flex; flex-direction: column; position: relative;
  }

  /* Theatre background */
  .ss-theatre-bg {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background:
      radial-gradient(ellipse at 50% 35%, rgba(30,10,50,0.8) 0%, transparent 60%),
      linear-gradient(180deg, #0a0a12 0%, #10081e 50%, #0c0a14 100%);
  }

  /* Velvet curtain sides */
  .ss-side-curtain {
    position: absolute; top: 0; bottom: 0; width: 8%; z-index: 1;
  }
  .ss-side-curtain-l {
    left: 0;
    background:
      linear-gradient(90deg,
        rgba(88,20,50,0.5) 0%,
        rgba(88,20,50,0.25) 30%,
        rgba(88,20,50,0.15) 50%,
        rgba(88,20,50,0.05) 70%,
        transparent 100%
      );
    border-right: 1px solid rgba(200,50,80,0.05);
  }
  .ss-side-curtain-r {
    right: 0;
    background:
      linear-gradient(-90deg,
        rgba(88,20,50,0.5) 0%,
        rgba(88,20,50,0.25) 30%,
        rgba(88,20,50,0.15) 50%,
        rgba(88,20,50,0.05) 70%,
        transparent 100%
      );
    border-left: 1px solid rgba(200,50,80,0.05);
  }

  /* Stage floor */
  .ss-stage-floor {
    position: absolute; bottom: 0; left: 0; right: 0; height: 20%;
    background:
      linear-gradient(180deg,
        transparent 0%,
        rgba(60,30,10,0.15) 30%,
        rgba(60,30,10,0.3) 60%,
        rgba(40,20,5,0.5) 100%
      );
    border-top: 1px solid rgba(139,90,43,0.1);
  }
  .ss-stage-floor::before {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 40px,
      rgba(139,90,43,0.04) 40px,
      rgba(139,90,43,0.04) 41px
    );
  }

  /* Side lighting */
  .ss-side-light {
    position: absolute; top: 10%; width: 80px; height: 60%;
    pointer-events: none;
  }
  .ss-side-light-l {
    left: 0;
    background: radial-gradient(ellipse at 0% 50%, rgba(251,191,36,0.05) 0%, transparent 70%);
  }
  .ss-side-light-r {
    right: 0;
    background: radial-gradient(ellipse at 100% 50%, rgba(251,191,36,0.05) 0%, transparent 70%);
  }

  /* Header */
  .ss-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.8rem 1rem;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
    z-index: 50; position: relative;
    border-bottom: 1px solid rgba(168,85,247,0.1);
  }
  .ss-header-left, .ss-header-right { display: flex; align-items: center; gap: 0.8rem; }
  .ss-header-center { display: flex; align-items: center; gap: 0.8rem; }

  .ss-back-btn {
    width: 40px; height: 40px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px; color: white; font-size: 1.2rem;
    cursor: pointer; transition: all 0.2s ease;
  }
  .ss-back-btn:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.2);
  }

  .ss-level-badge {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    border-radius: 20px; font-weight: 700; color: white; font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(168,85,247,0.3);
  }

  .ss-lives { font-size: 1.2rem; }

  .ss-streak-badge {
    padding: 0.3rem 0.8rem;
    background: rgba(251,146,60,0.15);
    border: 1px solid rgba(251,146,60,0.3);
    border-radius: 12px; font-size: 0.85rem; color: #fb923c; font-weight: 700;
    animation: ssStreakPulse 1s ease-in-out infinite;
  }
  .ss-streak-fire {
    background: rgba(239,68,68,0.15);
    border-color: rgba(239,68,68,0.3);
    color: #f97316;
    box-shadow: 0 0 15px rgba(239,68,68,0.2);
    animation: ssStreakFire 0.5s ease-in-out infinite;
  }
  @keyframes ssStreakPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes ssStreakFire {
    0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(239,68,68,0.2); }
    50% { transform: scale(1.1); box-shadow: 0 0 25px rgba(239,68,68,0.4); }
  }

  .ss-score-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem;
    background: rgba(251,191,36,0.1);
    border: 1px solid rgba(251,191,36,0.2);
    border-radius: 20px; color: #fbbf24; font-weight: 700; font-size: 0.9rem;
  }

  /* Timer bar */
  .ss-timer-bar {
    height: 5px;
    background: rgba(255,255,255,0.05);
    overflow: hidden; position: relative; z-index: 50;
  }
  .ss-timer-urgent { animation: ssTimerFlash 0.5s ease-in-out infinite; }
  @keyframes ssTimerFlash {
    0%, 100% { background: rgba(255,255,255,0.05); }
    50% { background: rgba(239,68,68,0.1); }
  }
  .ss-timer-fill {
    height: 100%; transition: width 0.1s linear; border-radius: 0 3px 3px 0;
    box-shadow: 0 0 10px rgba(74,222,128,0.3);
  }
  .ss-timer-pulse {
    animation: ssTimerPulse 0.5s ease-in-out infinite;
  }
  @keyframes ssTimerPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(239,68,68,0.3); }
    50% { opacity: 0.7; box-shadow: 0 0 20px rgba(239,68,68,0.6); }
  }

  /* Progress dots */
  .ss-progress {
    text-align: center; padding: 0.5rem 1rem;
    position: relative; z-index: 50;
  }
  .ss-progress-dots {
    display: flex; justify-content: center; gap: 6px;
  }
  .ss-progress-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    transition: all 0.3s ease;
  }
  .ss-dot-done {
    background: #a855f7;
    border-color: #a855f7;
    box-shadow: 0 0 8px rgba(168,85,247,0.4);
  }
  .ss-dot-current {
    background: rgba(168,85,247,0.4);
    border-color: #a855f7;
    animation: ssDotPulse 1s ease-in-out infinite;
  }
  @keyframes ssDotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
  }

  /* ============= STAGE ============= */
  .ss-stage {
    flex: 1; display: flex; align-items: center; justify-content: center;
    position: relative; min-height: 200px; overflow: hidden;
    z-index: 1;
  }

  /* Spotlight cone from top */
  .ss-spotlight-cone {
    position: absolute;
    top: -20px; left: 50%; width: 300px; height: 100%;
    transform: translateX(-50%);
    background: linear-gradient(
      180deg,
      rgba(251,191,36,0.08) 0%,
      rgba(251,191,36,0.04) 20%,
      rgba(251,191,36,0.02) 50%,
      transparent 80%
    );
    clip-path: polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%);
    pointer-events: none;
    transition: opacity 0.3s;
  }

  /* Spotlight glow on shape area */
  .ss-spotlight-glow {
    position: absolute;
    top: 30%; left: 50%; width: 250px; height: 250px;
    transform: translate(-50%, -30%);
    background: radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 60%);
    pointer-events: none;
    transition: all 0.5s ease;
  }

  /* Dust motes */
  .ss-dust {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle, rgba(251,191,36,0.6), rgba(255,255,255,0.3));
    pointer-events: none; z-index: 3;
  }

  .ss-stage-inner {
    position: relative; display: flex; flex-direction: column; align-items: center;
    justify-content: center; z-index: 5;
  }

  /* Shadow container */
  .ss-shadow-container {
    width: 160px; height: 160px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));
  }

  .ss-shadow-hidden {
    opacity: 0; transform: scale(0.3);
  }
  .ss-shadow-revealed {
    opacity: 1; transform: scale(1);
    animation: ssShadowAppear 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes ssShadowAppear {
    0% { opacity: 0; transform: scale(0.3); filter: blur(10px) drop-shadow(0 0 20px rgba(0,0,0,0.5)); }
    60% { opacity: 1; transform: scale(1.05); filter: blur(0px) drop-shadow(0 0 30px rgba(0,0,0,0.5)); }
    100% { opacity: 1; transform: scale(1); filter: blur(0px) drop-shadow(0 0 20px rgba(0,0,0,0.5)); }
  }

  .ss-shadow-svg { width: 100%; height: 100%; }

  /* Shadow breathing edge */
  .ss-shadow-edge {
    animation: ssShadowBreathe 3s ease-in-out infinite;
  }
  @keyframes ssShadowBreathe {
    0%, 100% { stroke-width: 2; opacity: 0.1; }
    50% { stroke-width: 4; opacity: 0.25; }
  }

  .ss-shadow-breath {
    position: absolute; inset: -10px; border-radius: 50%;
    border: 2px solid rgba(168,85,247,0.08);
    animation: ssBreathRing 3s ease-in-out infinite;
    pointer-events: none;
  }
  @keyframes ssBreathRing {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.6; }
  }

  /* Correct reveal - theatrical flourish */
  .ss-correct-reveal {
    animation: ssCorrectFlourish 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
    filter: drop-shadow(0 0 30px rgba(168,85,247,0.5)) !important;
  }
  @keyframes ssCorrectFlourish {
    0% { transform: scale(1); }
    30% { transform: scale(1.25) rotate(5deg); }
    60% { transform: scale(0.95) rotate(-3deg); }
    100% { transform: scale(1.1) rotate(0deg); }
  }
  .ss-shape-colorize {
    transition: fill 0.3s ease;
  }
  .ss-specular {
    animation: ssSpecularFade 1s ease forwards;
  }
  @keyframes ssSpecularFade {
    0% { opacity: 0; }
    30% { opacity: 0.25; }
    100% { opacity: 0.15; }
  }

  /* Wrong reveal - shatter effect */
  .ss-wrong-reveal {
    animation: ssWrongShatter 0.5s ease forwards !important;
  }
  @keyframes ssWrongShatter {
    0% { transform: scale(1); opacity: 1; }
    20% { transform: scale(1.05); }
    40% { transform: translateX(-6px) rotate(-2deg); }
    60% { transform: translateX(6px) rotate(2deg); }
    80% { transform: scale(0.95); opacity: 0.7; }
    100% { transform: scale(0.9); opacity: 0.5; }
  }

  /* Red flash overlay */
  .ss-red-flash {
    position: absolute; inset: 0;
    background: radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(239,68,68,0.1) 60%, transparent 80%);
    animation: ssRedFlash 0.5s ease forwards;
    pointer-events: none; z-index: 20;
  }
  @keyframes ssRedFlash {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  /* Confetti pieces */
  .ss-confetti-piece {
    position: absolute; border-radius: 2px;
    pointer-events: none; z-index: 15;
  }

  /* Shatter pieces */
  .ss-shatter-piece {
    position: absolute; pointer-events: none; z-index: 15;
    background: linear-gradient(135deg, #1a1a2e, #0a0a1a);
    clip-path: polygon(
      ${Math.random() * 40}% 0%,
      100% ${Math.random() * 40}%,
      ${60 + Math.random() * 40}% 100%,
      0% ${60 + Math.random() * 40}%
    );
    border: 1px solid rgba(168,85,247,0.2);
  }

  /* Description placard */
  .ss-description-placard {
    margin-top: 1rem;
    animation: ssPlacardSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes ssPlacardSlide {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .ss-placard-inner {
    padding: 0.8rem 1.5rem;
    background: rgba(0,0,0,0.6);
    border: 1px solid rgba(168,85,247,0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }
  .ss-placard-name {
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; font-weight: 800; color: white; margin-bottom: 0.3rem;
  }
  .ss-placard-desc {
    font-size: 0.85rem; color: #a78bfa;
  }

  /* Result badge */
  .ss-result-badge {
    position: absolute; top: -40px;
    padding: 0.5rem 1.5rem; border-radius: 30px;
    font-size: 1.1rem; font-weight: 800;
    animation: ssResultBadgePop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    z-index: 20;
  }
  .ss-result-correct {
    background: linear-gradient(135deg, rgba(74,222,128,0.2), rgba(74,222,128,0.1));
    border: 1px solid rgba(74,222,128,0.4);
    color: #4ade80;
    box-shadow: 0 0 20px rgba(74,222,128,0.2);
  }
  .ss-result-wrong {
    background: linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.1));
    border: 1px solid rgba(239,68,68,0.4);
    color: #ef4444;
    box-shadow: 0 0 20px rgba(239,68,68,0.2);
  }
  @keyframes ssResultBadgePop {
    0% { opacity: 0; transform: scale(0) translateY(10px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }

  /* ============= OPTIONS ============= */
  .ss-options-area {
    position: relative; z-index: 50;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.5) 100%);
    padding: 0.8rem 1rem 1rem;
  }
  .ss-options {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 0.7rem; max-width: 500px; margin: 0 auto;
  }

  .ss-option {
    position: relative; overflow: hidden;
    display: flex; align-items: center; gap: 0.8rem;
    padding: 0.7rem 1rem;
    background: rgba(255,255,255,0.04);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    cursor: pointer; transition: all 0.25s ease;
    font-family: 'Nunito', sans-serif;
  }
  .ss-option-glow {
    position: absolute; inset: -1px; border-radius: 17px;
    opacity: 0; transition: opacity 0.25s;
    pointer-events: none;
    background: linear-gradient(135deg, rgba(168,85,247,0.15), rgba(56,189,248,0.1));
  }
  .ss-option:hover:not(:disabled) .ss-option-glow { opacity: 1; }
  .ss-option:hover:not(:disabled) {
    background: rgba(255,255,255,0.08);
    border-color: rgba(168,85,247,0.4);
    transform: scale(1.03);
    box-shadow: 0 4px 20px rgba(168,85,247,0.15);
  }
  .ss-option:active:not(:disabled) { transform: scale(0.97); }
  .ss-option:disabled { opacity: 0.6; cursor: default; }

  .ss-option-hovered {
    border-color: rgba(168,85,247,0.3) !important;
  }

  .ss-option-shape-preview {
    flex-shrink: 0; width: 42px; height: 42px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.04);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .ss-option-name { font-size: 1rem; font-weight: 700; color: white; flex: 1; text-align: left; }

  .ss-option-correct {
    border-color: #4ade80 !important;
    background: rgba(74,222,128,0.12) !important;
    box-shadow: 0 0 20px rgba(74,222,128,0.2) !important;
    animation: ssOptionCorrectPulse 0.5s ease;
  }
  @keyframes ssOptionCorrectPulse {
    0% { transform: scale(1); }
    30% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .ss-option-wrong {
    border-color: #ef4444 !important;
    background: rgba(239,68,68,0.12) !important;
    box-shadow: 0 0 15px rgba(239,68,68,0.15) !important;
    animation: ssOptionWrongShake 0.4s ease;
  }
  @keyframes ssOptionWrongShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-4px); }
    40% { transform: translateX(4px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
  }

  .ss-option-check {
    font-size: 1.3rem; color: #4ade80; font-weight: 900;
    animation: ssCheckPop 0.3s ease;
  }
  .ss-option-x {
    font-size: 1.3rem; color: #ef4444; font-weight: 900;
    animation: ssCheckPop 0.3s ease;
  }
  @keyframes ssCheckPop {
    0% { transform: scale(0); }
    70% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  /* Fire border for streaks */
  .ss-option-fire-border {
    position: absolute; inset: -2px; border-radius: 18px;
    pointer-events: none;
    border: 2px solid transparent;
    background: linear-gradient(135deg, rgba(251,146,60,0.3), rgba(239,68,68,0.2), rgba(251,146,60,0.3)) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: ssFireBorder 1s ease-in-out infinite;
  }
  @keyframes ssFireBorder {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  .ss-options-streak .ss-option:not(:disabled) {
    box-shadow: 0 2px 10px rgba(251,146,60,0.1);
  }

  /* ============= RESPONSIVE ============= */
  @media (max-width: 600px) {
    .ss-shadow-container { width: 120px; height: 120px; }
    .ss-options { gap: 0.5rem; }
    .ss-option { padding: 0.5rem 0.8rem; gap: 0.5rem; }
    .ss-option-shape-preview { width: 34px; height: 34px; }
    .ss-option-shape-preview svg { width: 28px; height: 28px; }
    .ss-option-name { font-size: 0.9rem; }
    .ss-header-center { flex-wrap: nowrap; }
    .ss-intro-curtain-left, .ss-intro-curtain-right { width: 10%; }
    .ss-theatre-masks { gap: 1rem; margin-bottom: 0.3rem; }
    .ss-mask { font-size: 2rem; }
    .ss-parade-svg { width: 36px; height: 36px; }
    .ss-spotlight-cone { width: 200px; }
    .ss-progress { padding: 0.3rem 0.5rem; }
    .ss-progress-dot { width: 8px; height: 8px; }
  }

  @media (max-width: 400px) {
    .ss-shadow-container { width: 100px; height: 100px; }
    .ss-options { grid-template-columns: repeat(2, 1fr); gap: 0.4rem; }
    .ss-option { padding: 0.4rem 0.6rem; border-radius: 12px; }
    .ss-option-shape-preview { width: 28px; height: 28px; border-radius: 8px; }
    .ss-option-shape-preview svg { width: 22px; height: 22px; }
    .ss-option-name { font-size: 0.8rem; }
  }
`;
