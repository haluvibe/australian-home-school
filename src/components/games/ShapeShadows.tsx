"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type React from "react";

// ============================================================
// SHAPE SHADOWS  --  Geometry Recognition Game (Drag & Drop)
// Foundation / Year 1 Mathematics
// Curriculum: "Name, create and sort familiar shapes and give reasoning"
//             "Make, compare and classify shapes using obvious features"
// ============================================================

interface ShapeShadowsProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameComplete";

interface ShapeDef {
  name: string;
  sides: number;
  corners: number;
  cssShape: string; // CSS class suffix for rendering
  color1: string;
  color2: string;
  description: string;
}

interface LevelChallenge {
  targetShape: ShapeDef;
  options: ShapeDef[];
  rotation: number;
}

interface DragState {
  shapeIndex: number;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  offsetX: number;
  offsetY: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  color: string;
  rotation: number;
  rotSpeed: number;
}

interface DustMote {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  delay: number;
}

const SHAPES: ShapeDef[] = [
  { name: "Circle", sides: 0, corners: 0, cssShape: "circle", color1: "#38bdf8", color2: "#0284c7", description: "Round, no sides, no corners" },
  { name: "Square", sides: 4, corners: 4, cssShape: "square", color1: "#fb923c", color2: "#ea580c", description: "4 equal sides, 4 corners" },
  { name: "Triangle", sides: 3, corners: 3, cssShape: "triangle", color1: "#f472b6", color2: "#db2777", description: "3 straight sides, 3 corners" },
  { name: "Rectangle", sides: 4, corners: 4, cssShape: "rectangle", color1: "#4ade80", color2: "#16a34a", description: "4 sides, opposite sides equal, 4 corners" },
  { name: "Oval", sides: 0, corners: 0, cssShape: "oval", color1: "#2dd4bf", color2: "#0d9488", description: "Stretched circle, no corners" },
  { name: "Diamond", sides: 4, corners: 4, cssShape: "diamond", color1: "#818cf8", color2: "#6366f1", description: "4 equal sides, tilted square, 4 corners" },
  { name: "Hexagon", sides: 6, corners: 6, cssShape: "hexagon", color1: "#a78bfa", color2: "#7c3aed", description: "6 sides, 6 corners" },
  { name: "Pentagon", sides: 5, corners: 5, cssShape: "pentagon", color1: "#e879f9", color2: "#c026d3", description: "5 sides, 5 corners" },
  { name: "Star", sides: 10, corners: 5, cssShape: "star", color1: "#fbbf24", color2: "#d97706", description: "5 points, 10 sides" },
];

// Progressive difficulty pools
const LEVEL_POOLS: ShapeDef[][] = [
  SHAPES.filter(s => ["Circle", "Square", "Triangle"].includes(s.name)),                    // L1
  SHAPES.filter(s => ["Circle", "Square", "Triangle"].includes(s.name)),                    // L2
  SHAPES.filter(s => ["Circle", "Square", "Triangle", "Rectangle"].includes(s.name)),       // L3
  SHAPES.filter(s => ["Circle", "Square", "Triangle", "Rectangle", "Oval"].includes(s.name)), // L4
  SHAPES.filter(s => ["Circle", "Square", "Triangle", "Rectangle", "Oval", "Diamond"].includes(s.name)), // L5
  SHAPES.filter(s => ["Circle", "Square", "Triangle", "Rectangle", "Diamond", "Hexagon"].includes(s.name)), // L6
  SHAPES.filter(s => ["Circle", "Square", "Triangle", "Rectangle", "Diamond", "Hexagon", "Pentagon"].includes(s.name)), // L7
  SHAPES.filter(s => ["Square", "Triangle", "Rectangle", "Diamond", "Hexagon", "Pentagon", "Star"].includes(s.name)), // L8
  SHAPES, // L9
  SHAPES, // L10
];

const BRAVO_MESSAGES = ["Bravo!", "Magnificent!", "Encore!", "Stunning!", "Wonderful!", "Spectacular!", "Brilliant!", "Dazzling!"];
const CONFETTI_COLORS = ["#fbbf24", "#f472b6", "#38bdf8", "#4ade80", "#a855f7", "#fb923c", "#f43f5e", "#818cf8", "#2dd4bf", "#e879f9"];
const TOTAL_LEVELS = 10;
const SHAPES_PER_LEVEL = 5;

let particleId = 0;

export default function ShapeShadows({ onExit }: ShapeShadowsProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [challenge, setChallenge] = useState<LevelChallenge | null>(null);
  const [shapesCompleted, setShapesCompleted] = useState(0);
  const [dragging, setDragging] = useState<DragState | null>(null);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [bravoText, setBravoText] = useState("");
  const [revealedShape, setRevealedShape] = useState<ShapeDef | null>(null);
  const [nearShadow, setNearShadow] = useState(false);
  const [wrongShake, setWrongShake] = useState<number | null>(null); // index of bouncing-back shape
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [levelStars, setLevelStars] = useState(0);
  const [levelTime, setLevelTime] = useState(0);
  const [levelMistakes, setLevelMistakes] = useState(0);
  const [screenShake, setScreenShake] = useState(false);

  // Particle states
  const [confetti, setConfetti] = useState<Particle[]>([]);
  const [dustMotes, setDustMotes] = useState<DustMote[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const shelfRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const dustAnimRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const levelStartTime = useRef(0);
  const challengeMistakes = useRef(0);
  const gameStateRef = useRef({ score: 0, shapesCompleted: 0, level: 1, levelMistakes: 0 });

  // Keep ref in sync
  useEffect(() => {
    gameStateRef.current = { score, shapesCompleted, level, levelMistakes };
  }, [score, shapesCompleted, level, levelMistakes]);

  // ===== CHALLENGE GENERATION =====
  const generateChallenge = useCallback((lvl: number): LevelChallenge => {
    const pool = LEVEL_POOLS[Math.min(lvl - 1, LEVEL_POOLS.length - 1)];
    const target = pool[Math.floor(Math.random() * pool.length)];
    const others = pool.filter(s => s.name !== target.name);
    const numOptions = lvl <= 2 ? 3 : 4;
    const shuffledOthers = [...others].sort(() => Math.random() - 0.5);
    const options = [target, ...shuffledOthers.slice(0, numOptions - 1)].sort(() => Math.random() - 0.5);
    const rotation = lvl >= 4 ? Math.floor(Math.random() * 4) * 90 : 0;
    return { targetShape: target, options, rotation };
  }, []);

  // ===== CONFETTI =====
  const spawnConfetti = useCallback((cx: number, cy: number) => {
    const pieces: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 8;
      pieces.push({
        id: particleId++,
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: 5 + Math.random() * 8,
        opacity: 1,
        life: 2 + Math.random() * 1.5,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 20,
      });
    }
    setConfetti(pieces);
  }, []);

  // ===== SPARKLES =====
  const spawnSparkles = useCallback((cx: number, cy: number) => {
    const sparks: Sparkle[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const dist = 40 + Math.random() * 60;
      sparks.push({
        id: particleId++,
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        size: 6 + Math.random() * 10,
        opacity: 1,
        life: 1 + Math.random() * 0.5,
        delay: i * 0.05,
      });
    }
    setSparkles(sparks);
    setTimeout(() => setSparkles([]), 2000);
  }, []);

  // ===== CONFETTI PHYSICS =====
  useEffect(() => {
    if (confetti.length === 0) return;
    const animate = () => {
      setConfetti(prev => {
        const next = prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.25,
          vx: p.vx * 0.99,
          rotation: p.rotation + p.rotSpeed,
          life: p.life - 0.016,
          opacity: p.life < 0.5 ? p.life * 2 : 1,
        })).filter(p => p.life > 0);
        if (next.length === 0) return [];
        return next;
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [confetti.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // ===== DUST MOTES =====
  useEffect(() => {
    if (screen !== "playing") {
      setDustMotes([]);
      if (dustAnimRef.current) cancelAnimationFrame(dustAnimRef.current);
      return;
    }
    let dustId = 0;
    const spawnInterval = setInterval(() => {
      setDustMotes(prev => {
        if (prev.length > 25) return prev;
        return [...prev, {
          id: dustId++,
          x: 30 + Math.random() * 40,
          y: 5 + Math.random() * 50,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -0.05 - Math.random() * 0.15,
          size: 1 + Math.random() * 3,
          opacity: 0.15 + Math.random() * 0.35,
          life: 4 + Math.random() * 4,
        }];
      });
    }, 250);
    const animateDust = () => {
      setDustMotes(prev => prev
        .map(p => ({
          ...p,
          x: p.x + p.vx * 0.1,
          y: p.y + p.vy * 0.1,
          vx: p.vx + (Math.random() - 0.5) * 0.03,
          opacity: p.opacity * 0.998,
          life: p.life - 0.016,
        }))
        .filter(p => p.life > 0 && p.opacity > 0.01)
      );
      dustAnimRef.current = requestAnimationFrame(animateDust);
    };
    dustAnimRef.current = requestAnimationFrame(animateDust);
    return () => {
      clearInterval(spawnInterval);
      if (dustAnimRef.current) cancelAnimationFrame(dustAnimRef.current);
    };
  }, [screen]);

  // ===== INIT CHALLENGE =====
  const nextChallenge = useCallback((lvl: number) => {
    setShowResult(null);
    setRevealedShape(null);
    setNearShadow(false);
    setWrongShake(null);
    setBravoText("");
    setConfetti([]);
    setSparkles([]);
    challengeMistakes.current = 0;
    const ch = generateChallenge(lvl);
    setChallenge(ch);
  }, [generateChallenge]);

  // ===== START GAME =====
  const startGame = useCallback(() => {
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setShapesCompleted(0);
    setLevelMistakes(0);
    setCurtainsOpen(true);
    levelStartTime.current = Date.now();
    nextChallenge(1);
  }, [nextChallenge]);

  // ===== LEVEL COMPLETE =====
  const finishLevel = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const elapsed = (Date.now() - levelStartTime.current) / 1000;
    setLevelTime(Math.round(elapsed));
    // Star rating: 3 stars = fast + no mistakes, 2 = decent, 1 = completed
    let stars = 1;
    const mistakeCount = gameStateRef.current.levelMistakes;
    if (mistakeCount === 0 && elapsed < SHAPES_PER_LEVEL * 6) stars = 3;
    else if (mistakeCount <= 2 && elapsed < SHAPES_PER_LEVEL * 10) stars = 2;
    setLevelStars(stars);
    setTimeout(() => setScreen("levelComplete"), 800);
  }, []);

  // ===== HANDLE CORRECT =====
  const handleCorrectMatch = useCallback(() => {
    if (!challenge || !containerRef.current || !shadowRef.current) return;
    setShowResult("correct");
    setRevealedShape(challenge.targetShape);
    setBravoText(BRAVO_MESSAGES[Math.floor(Math.random() * BRAVO_MESSAGES.length)]);
    setScore(s => s + 100);
    // Confetti from shadow center
    const rect = containerRef.current.getBoundingClientRect();
    const shadowRect = shadowRef.current.getBoundingClientRect();
    const cx = shadowRect.left + shadowRect.width / 2 - rect.left;
    const cy = shadowRect.top + shadowRect.height / 2 - rect.top;
    spawnConfetti(cx, cy);
    spawnSparkles(cx, cy);

    const completed = gameStateRef.current.shapesCompleted + 1;
    setShapesCompleted(completed);
    if (completed >= SHAPES_PER_LEVEL) {
      setTimeout(() => finishLevel(), 1800);
    } else {
      setTimeout(() => nextChallenge(gameStateRef.current.level), 2000);
    }
  }, [challenge, spawnConfetti, spawnSparkles, nextChallenge, finishLevel]);

  // ===== HANDLE WRONG =====
  const handleWrongDrop = useCallback((shapeIndex: number) => {
    setWrongShake(shapeIndex);
    setScreenShake(true);
    setLevelMistakes(m => m + 1);
    challengeMistakes.current += 1;
    setTimeout(() => {
      setWrongShake(null);
      setScreenShake(false);
    }, 600);
  }, []);

  // ===== CHECK PROXIMITY TO SHADOW =====
  const checkProximity = useCallback((dragX: number, dragY: number): boolean => {
    if (!shadowRef.current || !containerRef.current) return false;
    const containerRect = containerRef.current.getBoundingClientRect();
    const shadowRect = shadowRef.current.getBoundingClientRect();
    const shadowCX = shadowRect.left + shadowRect.width / 2 - containerRect.left;
    const shadowCY = shadowRect.top + shadowRect.height / 2 - containerRect.top;
    const dx = dragX - shadowCX;
    const dy = dragY - shadowCY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist < 120;
  }, []);

  // ===== DRAG HANDLERS =====
  const handleDragStart = useCallback((
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    if (showResult) return;
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const target = e.currentTarget.getBoundingClientRect();
    setDragging({
      shapeIndex: index,
      startX: target.left + target.width / 2 - rect.left,
      startY: target.top + target.height / 2 - rect.top,
      currentX: clientX - rect.left,
      currentY: clientY - rect.top,
      offsetX: clientX - (target.left + target.width / 2),
      offsetY: clientY - (target.top + target.height / 2),
    });
  }, [showResult]);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragging || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const newX = clientX - rect.left - dragging.offsetX;
    const newY = clientY - rect.top - dragging.offsetY;
    setDragging(prev => prev ? { ...prev, currentX: newX, currentY: newY } : null);
    setNearShadow(checkProximity(newX, newY));
  }, [dragging, checkProximity]);

  const handleDragEnd = useCallback(() => {
    if (!dragging || !challenge) return;
    const isNear = checkProximity(dragging.currentX, dragging.currentY);
    if (isNear) {
      const draggedShape = challenge.options[dragging.shapeIndex];
      if (draggedShape.name === challenge.targetShape.name) {
        handleCorrectMatch();
      } else {
        handleWrongDrop(dragging.shapeIndex);
      }
    }
    setDragging(null);
    setNearShadow(false);
  }, [dragging, challenge, checkProximity, handleCorrectMatch, handleWrongDrop]);

  // ===== WINDOW DRAG LISTENERS =====
  useEffect(() => {
    if (!dragging) return;
    const moveHandler = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const endHandler = () => handleDragEnd();
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", endHandler);
    window.addEventListener("touchmove", moveHandler, { passive: false });
    window.addEventListener("touchend", endHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", endHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", endHandler);
    };
  }, [dragging, handleDragMove, handleDragEnd]);

  // ===== NEXT LEVEL =====
  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    if (newLevel > TOTAL_LEVELS) {
      setScreen("gameComplete");
      return;
    }
    setLevel(newLevel);
    setShapesCompleted(0);
    setLevelMistakes(0);
    setScreen("playing");
    levelStartTime.current = Date.now();
    nextChallenge(newLevel);
  }, [level, nextChallenge]);

  // ===== CLEANUP =====
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (dustAnimRef.current) cancelAnimationFrame(dustAnimRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Helper: render a CSS shape
  const renderCSSShape = (shape: ShapeDef, size: number, isShadow: boolean, isRevealed: boolean) => {
    const cls = isShadow
      ? `ss-shape ss-shape-${shape.cssShape} ss-shape-shadow${isRevealed ? " ss-shape-revealed" : ""}`
      : `ss-shape ss-shape-${shape.cssShape} ss-shape-colored`;
    return (
      <div
        className={cls}
        style={{
          width: size,
          height: shape.cssShape === "rectangle" || shape.cssShape === "oval" ? size * 0.65 : size,
          "--shape-color1": isRevealed || !isShadow ? shape.color1 : "#0a0a1a",
          "--shape-color2": isRevealed || !isShadow ? shape.color2 : "#1a1a3e",
        } as React.CSSProperties}
      >
        {(!isShadow || isRevealed) && <div className="ss-shape-shine" />}
      </div>
    );
  };

  // ==================== INTRO ====================
  if (screen === "intro") {
    return (
      <div className="ss-game">
        <style>{ssStyles}</style>
        <div className="ss-intro">
          <div className="ss-intro-bg">
            {SHAPES.map((s, i) => (
              <div key={s.name} className={`ss-intro-float ss-intro-float-${s.cssShape}`} style={{
                left: `${8 + (i % 5) * 20}%`,
                top: `${12 + Math.floor(i / 5) * 35}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + (i % 3) * 2}s`,
                "--shape-color1": s.color1,
                "--shape-color2": s.color2,
              } as React.CSSProperties}>
                <div className={`ss-shape ss-shape-${s.cssShape} ss-shape-colored`} style={{
                  width: 50, height: s.cssShape === "rectangle" || s.cssShape === "oval" ? 32 : 50,
                  "--shape-color1": s.color1, "--shape-color2": s.color2, opacity: 0.12,
                } as React.CSSProperties} />
              </div>
            ))}
          </div>
          <div className="ss-intro-curtain ss-intro-curtain-l" />
          <div className="ss-intro-curtain ss-intro-curtain-r" />
          <div className="ss-intro-spot ss-intro-spot-1" />
          <div className="ss-intro-spot ss-intro-spot-2" />
          <div className="ss-intro-content">
            <div className="ss-masks">
              <span className="ss-mask ss-mask-l">🎭</span>
              <span className="ss-mask ss-mask-r">🎭</span>
            </div>
            <h1 className="ss-title">Shape Shadows</h1>
            <p className="ss-subtitle">The Shadow Puppet Theatre</p>
            <div className="ss-intro-card">
              <div className="ss-intro-card-glow" />
              <h3>How to Play</h3>
              <div className="ss-intro-step">
                <div className="ss-intro-step-icon">👀</div>
                <p>A mystery <span className="ss-hl-purple">SHADOW</span> appears on stage</p>
              </div>
              <div className="ss-intro-step">
                <div className="ss-intro-step-icon">👆</div>
                <p><span className="ss-hl-gold">DRAG</span> the matching shape up to the shadow</p>
              </div>
              <div className="ss-intro-step">
                <div className="ss-intro-step-icon">✨</div>
                <p>Watch the shape <span className="ss-hl-blue">REVEAL</span> in glorious colour!</p>
              </div>
              <div className="ss-intro-step">
                <div className="ss-intro-step-icon">🌟</div>
                <p>Learn shape <span className="ss-hl-green">NAMES</span> and properties!</p>
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

  // ==================== LEVEL COMPLETE ====================
  if (screen === "levelComplete") {
    const stars = levelStars;
    return (
      <div className="ss-game">
        <style>{ssStyles}</style>
        <div className="ss-level-complete">
          <div className="ss-lc-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="ss-lc-star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
              }}>⭐</div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`c-${i}`} className="ss-lc-clap" style={{
                left: `${12 + i * 15}%`,
                bottom: `${8 + (i % 2) * 10}%`,
                animationDelay: `${i * 0.3}s`,
              }}>👏</div>
            ))}
          </div>
          <div className="ss-lc-spots">
            <div className="ss-lc-spot ss-lc-spot-1" />
            <div className="ss-lc-spot ss-lc-spot-2" />
            <div className="ss-lc-spot ss-lc-spot-3" />
          </div>
          <div className="ss-lc-content">
            <h1 className="ss-lc-title">🌟 Level {level} Complete! 🌟</h1>
            <div className="ss-lc-stars">
              {[1, 2, 3].map(s => (
                <span key={s} className={`ss-lc-star-icon ${s <= stars ? "ss-star-earned" : "ss-star-empty"}`}
                  style={{ animationDelay: `${s * 0.2}s` }}>
                  {s <= stars ? "⭐" : "☆"}
                </span>
              ))}
            </div>
            <div className="ss-lc-shapes-parade">
              {LEVEL_POOLS[Math.min(level - 1, LEVEL_POOLS.length - 1)].slice(0, 6).map((s, i) => (
                <div key={s.name} className="ss-lc-parade-item" style={{ animationDelay: `${i * 0.15}s` }}>
                  {renderCSSShape(s, 48, false, false)}
                </div>
              ))}
            </div>
            <div className="ss-lc-stats">
              <div className="ss-lc-stat">
                <span className="ss-lc-stat-label">Score</span>
                <span className="ss-lc-stat-value">{score}</span>
              </div>
              <div className="ss-lc-stat">
                <span className="ss-lc-stat-label">Time</span>
                <span className="ss-lc-stat-value">{levelTime}s</span>
              </div>
              <div className="ss-lc-stat">
                <span className="ss-lc-stat-label">Mistakes</span>
                <span className="ss-lc-stat-value">{levelMistakes}</span>
              </div>
            </div>
            <div className="ss-lc-buttons">
              <button className="ss-next-btn" onClick={nextLevel}>
                <span className="ss-btn-glow" />
                {level >= TOTAL_LEVELS ? "See Results →" : `Level ${level + 1} →`}
              </button>
              <button className="ss-menu-btn" onClick={() => onExit ? onExit() : setScreen("intro")}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================== GAME COMPLETE ====================
  if (screen === "gameComplete") {
    return (
      <div className="ss-game">
        <style>{ssStyles}</style>
        <div className="ss-game-complete">
          <div className="ss-gc-bg">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="ss-gc-confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              }} />
            ))}
          </div>
          <div className="ss-gc-curtain-l" />
          <div className="ss-gc-curtain-r" />
          <div className="ss-gc-content">
            <h1 className="ss-gc-title">🏆 Standing Ovation! 🏆</h1>
            <p className="ss-gc-sub">You completed all {TOTAL_LEVELS} levels!</p>
            <div className="ss-gc-shapes">
              {SHAPES.map((s, i) => (
                <div key={s.name} className="ss-gc-shape-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  {renderCSSShape(s, 40, false, false)}
                  <span className="ss-gc-shape-name">{s.name}</span>
                </div>
              ))}
            </div>
            <div className="ss-gc-final-score">
              <span className="ss-gc-score-label">Final Score</span>
              <span className="ss-gc-score-num">{score}</span>
            </div>
            <div className="ss-gc-buttons">
              <button className="ss-next-btn" onClick={startGame}>
                <span className="ss-btn-glow" />
                Play Again 🔄
              </button>
              <button className="ss-menu-btn" onClick={() => onExit ? onExit() : setScreen("intro")}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================== PLAYING ====================
  return (
    <div className="ss-game">
      <style>{ssStyles}</style>
      <div className={`ss-play ${screenShake ? "ss-shake" : ""}`} ref={containerRef}>
        {/* Theatre background */}
        <div className="ss-theatre-bg">
          <div className={`ss-curtain-side ss-curtain-l ${curtainsOpen ? "ss-curtain-open" : ""}`} />
          <div className={`ss-curtain-side ss-curtain-r ${curtainsOpen ? "ss-curtain-open" : ""}`} />
          <div className="ss-stage-floor" />
          <div className="ss-stage-light ss-stage-light-l" />
          <div className="ss-stage-light ss-stage-light-r" />
          <div className="ss-valance" />
        </div>

        {/* Header */}
        <div className="ss-header">
          <div className="ss-header-left">
            <button className="ss-back-btn" onClick={() => { onExit ? onExit() : setScreen("intro"); }}>←</button>
            <div className="ss-level-badge">Level {level}</div>
          </div>
          <div className="ss-header-center">
            <div className="ss-progress-pips">
              {Array.from({ length: SHAPES_PER_LEVEL }, (_, i) => (
                <div key={i} className={`ss-pip ${i < shapesCompleted ? "ss-pip-done" : i === shapesCompleted ? "ss-pip-current" : ""}`} />
              ))}
            </div>
          </div>
          <div className="ss-header-right">
            <div className="ss-score-display">⭐ {score}</div>
          </div>
        </div>

        {/* Stage area */}
        {challenge && (
          <div className="ss-stage">
            {/* Spotlight cone */}
            <div className="ss-spotlight-cone" />
            <div className="ss-spotlight-glow" />

            {/* Dust motes */}
            {dustMotes.map(p => (
              <div key={p.id} className="ss-dust" style={{
                left: `${p.x}%`, top: `${p.y}%`,
                width: p.size, height: p.size, opacity: p.opacity,
              }} />
            ))}

            {/* Shadow target */}
            <div className={`ss-shadow-area ${nearShadow && !showResult ? "ss-shadow-near" : ""} ${showResult === "correct" ? "ss-shadow-correct" : ""} ${showResult === "wrong" ? "ss-shadow-wrong" : ""}`} ref={shadowRef}>
              <div className="ss-shadow-ring" />
              <div className="ss-shadow-shape" style={{ transform: `rotate(${challenge.rotation}deg)` }}>
                {renderCSSShape(challenge.targetShape, 200, true, showResult === "correct")}
              </div>
              {!showResult && <div className="ss-shadow-pulse" />}

              {/* Bravo text */}
              {showResult === "correct" && bravoText && (
                <div className="ss-bravo">{bravoText}</div>
              )}

              {/* Shape name & properties on reveal */}
              {revealedShape && (
                <div className="ss-reveal-info">
                  <div className="ss-reveal-name">{revealedShape.name}</div>
                  <div className="ss-reveal-desc">{revealedShape.description}</div>
                  {revealedShape.sides > 0 && (
                    <div className="ss-reveal-props">
                      {revealedShape.sides} sides, {revealedShape.corners} corners
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Confetti */}
            {confetti.map(p => (
              <div key={p.id} className="ss-confetti" style={{
                left: p.x, top: p.y,
                width: p.size, height: p.size * 0.6,
                backgroundColor: p.color,
                transform: `rotate(${p.rotation}deg)`,
                opacity: p.opacity,
              }} />
            ))}

            {/* Sparkles */}
            {sparkles.map(s => (
              <div key={s.id} className="ss-sparkle" style={{
                left: s.x, top: s.y,
                width: s.size, height: s.size,
                animationDelay: `${s.delay}s`,
              }} />
            ))}
          </div>
        )}

        {/* Shelf of shapes */}
        {challenge && (
          <div className="ss-shelf" ref={shelfRef}>
            <div className="ss-shelf-label">Drag a shape to the shadow</div>
            <div className="ss-shelf-shapes">
              {challenge.options.map((opt, i) => {
                const isDragging = dragging?.shapeIndex === i;
                const isBouncingBack = wrongShake === i;
                let style: React.CSSProperties = {};
                if (isDragging && containerRef.current) {
                  style = {
                    position: "fixed" as const,
                    left: dragging!.currentX + containerRef.current.getBoundingClientRect().left - 60,
                    top: dragging!.currentY + containerRef.current.getBoundingClientRect().top - 60,
                    zIndex: 1000,
                    pointerEvents: "none" as const,
                    transition: "none",
                  };
                }
                return (
                  <div
                    key={`${opt.name}-${i}`}
                    className={`ss-shelf-item ${isDragging ? "ss-shelf-dragging" : ""} ${isBouncingBack ? "ss-shelf-bounce" : ""} ${showResult ? "ss-shelf-disabled" : ""}`}
                    style={style}
                    onMouseDown={(e) => handleDragStart(e, i)}
                    onTouchStart={(e) => handleDragStart(e, i)}
                  >
                    {renderCSSShape(opt, 120, false, false)}
                    <span className="ss-shelf-name">{opt.name}</span>
                  </div>
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
    background: #070710;
  }

  /* ============= SHAPES via CSS ============= */
  .ss-shape {
    position: relative;
    display: flex; align-items: center; justify-content: center;
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  /* Circle */
  .ss-shape-circle {
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2));
    box-shadow: 0 8px 30px rgba(0,0,0,0.4), inset 0 -8px 20px rgba(0,0,0,0.2);
  }

  /* Square */
  .ss-shape-square {
    border-radius: 12%;
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2));
    box-shadow: 0 8px 30px rgba(0,0,0,0.4), inset 0 -8px 20px rgba(0,0,0,0.2);
  }

  /* Triangle */
  .ss-shape-triangle {
    background: none !important;
    box-shadow: none !important;
    width: 0 !important; height: 0 !important;
    border-left-style: solid; border-right-style: solid; border-bottom-style: solid;
    border-left-color: transparent; border-right-color: transparent;
    border-bottom-color: var(--shape-color1);
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
  }
  .ss-shape-shadow.ss-shape-triangle {
    border-bottom-color: var(--shape-color1);
  }

  /* Rectangle */
  .ss-shape-rectangle {
    border-radius: 8%;
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2));
    box-shadow: 0 8px 30px rgba(0,0,0,0.4), inset 0 -8px 20px rgba(0,0,0,0.2);
  }

  /* Oval */
  .ss-shape-oval {
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2));
    box-shadow: 0 8px 30px rgba(0,0,0,0.4), inset 0 -8px 20px rgba(0,0,0,0.2);
  }

  /* Diamond */
  .ss-shape-diamond {
    border-radius: 12%;
    transform: rotate(45deg);
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2));
    box-shadow: 0 8px 30px rgba(0,0,0,0.4), inset 0 -8px 20px rgba(0,0,0,0.2);
  }

  /* Hexagon */
  .ss-shape-hexagon {
    background: none !important;
    box-shadow: none !important;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2)) !important;
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
  }

  /* Pentagon */
  .ss-shape-pentagon {
    background: none !important;
    box-shadow: none !important;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2)) !important;
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
  }

  /* Star */
  .ss-shape-star {
    background: none !important;
    box-shadow: none !important;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background: radial-gradient(circle at 35% 30%, var(--shape-color1), var(--shape-color2)) !important;
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
  }

  /* Triangle sizing overrides */
  .ss-shelf-item .ss-shape-triangle {
    border-left-width: 60px; border-right-width: 60px; border-bottom-width: 104px;
  }
  .ss-shadow-shape .ss-shape-triangle {
    border-left-width: 100px; border-right-width: 100px; border-bottom-width: 173px;
  }
  .ss-lc-parade-item .ss-shape-triangle,
  .ss-gc-shape-item .ss-shape-triangle {
    border-left-width: 24px; border-right-width: 24px; border-bottom-width: 42px;
  }
  .ss-intro-float .ss-shape-triangle {
    border-left-width: 25px; border-right-width: 25px; border-bottom-width: 43px;
  }

  /* Shadow appearance */
  .ss-shape-shadow {
    filter: blur(1.5px) drop-shadow(0 0 25px rgba(0,0,0,0.8));
  }
  .ss-shape-shadow.ss-shape-triangle {
    filter: blur(1px) drop-shadow(0 0 25px rgba(0,0,0,0.8));
  }
  .ss-shape-revealed {
    filter: none !important;
    animation: ssShapeReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Shine highlight on shapes */
  .ss-shape-shine {
    position: absolute; top: 12%; left: 18%; width: 35%; height: 25%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }
  .ss-shape-triangle .ss-shape-shine {
    display: none;
  }

  /* Colored shapes glow */
  .ss-shape-colored {
    filter: drop-shadow(0 0 12px rgba(255,255,255,0.15));
  }
  .ss-shape-colored:hover {
    filter: drop-shadow(0 0 20px rgba(255,255,255,0.25));
  }

  /* ============= KEYFRAME ANIMATIONS ============= */
  @keyframes ssShapeReveal {
    0% { filter: blur(1.5px); transform: scale(1); }
    30% { filter: blur(0px); transform: scale(1.15); }
    60% { transform: scale(0.95); }
    100% { filter: none; transform: scale(1.05); }
  }

  @keyframes ssShake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-5px) rotate(-0.5deg); }
    30% { transform: translateX(4px) rotate(0.5deg); }
    50% { transform: translateX(-3px); }
    70% { transform: translateX(2px); }
    90% { transform: translateX(-1px); }
  }
  .ss-shake { animation: ssShake 0.5s ease; }

  @keyframes ssBounceBack {
    0% { transform: translateY(0) scale(1); }
    20% { transform: translateY(-15px) scale(0.9); }
    40% { transform: translateY(8px) scale(1.05); }
    60% { transform: translateY(-4px) scale(0.98); }
    80% { transform: translateY(2px) scale(1.01); }
    100% { transform: translateY(0) scale(1); }
  }
  .ss-shelf-bounce { animation: ssBounceBack 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97); }

  @keyframes ssFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes ssMaskBob {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  @keyframes ssMaskBobR {
    0%, 100% { transform: scaleX(-1) translateY(0) rotate(-5deg); }
    50% { transform: scaleX(-1) translateY(-8px) rotate(5deg); }
  }

  @keyframes ssPulseRing {
    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.6; border-color: rgba(168,85,247,0.3); }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; border-color: rgba(168,85,247,0.6); }
    100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.6; border-color: rgba(168,85,247,0.3); }
  }

  @keyframes ssPulseRingNear {
    0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.6; border-color: rgba(74,222,128,0.4); }
    50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; border-color: rgba(74,222,128,0.8); }
    100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.6; border-color: rgba(74,222,128,0.4); }
  }

  @keyframes ssSpotSway1 {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(-4deg); }
  }

  @keyframes ssSpotSway2 {
    0%, 100% { transform: rotate(10deg); }
    50% { transform: rotate(4deg); }
  }

  @keyframes ssStarTwinkle {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  @keyframes ssClapBurst {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.3) translateY(-10px); opacity: 1; }
  }

  @keyframes ssBow {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(-5deg); }
    50% { transform: translateY(4px); }
    75% { transform: translateY(-6px) rotate(5deg); }
  }

  @keyframes ssStarEarned {
    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
    50% { transform: scale(1.3) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  @keyframes ssBravoAppear {
    0% { transform: translateY(10px) scale(0); opacity: 0; }
    40% { transform: translateY(-5px) scale(1.2); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
  }

  @keyframes ssRevealInfoSlide {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes ssCurtainOpenL {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  @keyframes ssCurtainOpenR {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
  }

  @keyframes ssSparkle {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
    100% { transform: scale(0) rotate(360deg); opacity: 0; }
  }

  @keyframes ssPipPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.4); }
  }

  @keyframes ssConfettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  @keyframes ssLogoShimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes ssValanceSway {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.03); }
  }

  @keyframes ssDragFloat {
    0%, 100% { transform: scale(1.1); }
    50% { transform: scale(1.15); }
  }

  @keyframes ssShadowBreathe {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.95); }
    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
  }

  @keyframes ssGlowPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* ============= INTRO SCREEN ============= */
  .ss-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(88,28,135,0.18) 0%, transparent 70%),
      linear-gradient(180deg, #070710 0%, #1a0a2e 40%, #0e0518 100%);
  }

  .ss-intro-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .ss-intro-float {
    position: absolute;
    animation: ssFloat 7s ease-in-out infinite;
    opacity: 0.8;
  }

  .ss-intro-curtain {
    position: absolute; top: 0; bottom: 0; width: 16%; z-index: 2; pointer-events: none;
  }
  .ss-intro-curtain-l {
    left: 0;
    background: linear-gradient(90deg, rgba(88,28,135,0.5) 0%, rgba(88,28,135,0.2) 40%, transparent 100%);
    border-right: 1px solid rgba(168,85,247,0.08);
  }
  .ss-intro-curtain-r {
    right: 0;
    background: linear-gradient(-90deg, rgba(88,28,135,0.5) 0%, rgba(88,28,135,0.2) 40%, transparent 100%);
    border-left: 1px solid rgba(168,85,247,0.08);
  }

  .ss-intro-spot {
    position: absolute; width: 180px; height: 500px; pointer-events: none; z-index: 1;
  }
  .ss-intro-spot-1 {
    left: 28%; top: -100px;
    background: linear-gradient(180deg, rgba(251,191,36,0.1) 0%, transparent 80%);
    transform: rotate(-8deg); animation: ssSpotSway1 6s ease-in-out infinite;
  }
  .ss-intro-spot-2 {
    right: 22%; top: -100px;
    background: linear-gradient(180deg, rgba(168,85,247,0.08) 0%, transparent 80%);
    transform: rotate(8deg); animation: ssSpotSway2 7s ease-in-out infinite;
  }

  .ss-intro-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .ss-masks { display: flex; justify-content: center; gap: 2rem; margin-bottom: 0.5rem; }
  .ss-mask { font-size: 2.5rem; display: inline-block; }
  .ss-mask-l { animation: ssMaskBob 3s ease-in-out infinite; }
  .ss-mask-r { animation: ssMaskBobR 3s ease-in-out infinite 0.5s; }

  .ss-title {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #a855f7, #818cf8, #fbbf24);
    background-size: 200% 200%;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: ssLogoShimmer 4s ease infinite;
  }

  .ss-subtitle {
    color: #a78bfa; font-size: 1.1rem; margin-bottom: 2rem; letter-spacing: 0.05em;
  }

  .ss-intro-card {
    position: relative; overflow: hidden;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(168,85,247,0.2);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem;
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
  }
  .ss-intro-card-glow {
    position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at 50% 80%, rgba(168,85,247,0.06) 0%, transparent 50%);
    pointer-events: none; animation: ssGlowPulse 4s ease-in-out infinite;
  }
  .ss-intro-card h3 {
    color: white; font-size: 1.2rem; margin-bottom: 1rem; position: relative; z-index: 1;
  }
  .ss-intro-step {
    display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
    position: relative; z-index: 1;
  }
  .ss-intro-step:last-child { margin-bottom: 0; }
  .ss-intro-step-icon {
    flex-shrink: 0; width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.06); border-radius: 12px; font-size: 1.3rem;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .ss-intro-step p { color: #cbd5e1; font-size: 0.95rem; text-align: left; }
  .ss-hl-purple { color: #a855f7; font-weight: 700; }
  .ss-hl-gold { color: #fbbf24; font-weight: 700; }
  .ss-hl-blue { color: #38bdf8; font-weight: 700; }
  .ss-hl-green { color: #4ade80; font-weight: 700; }

  .ss-start-btn, .ss-next-btn {
    position: relative; overflow: hidden;
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(168,85,247,0.4), 0 0 0 1px rgba(168,85,247,0.3);
  }
  .ss-btn-glow {
    position: absolute; inset: -2px; border-radius: 52px;
    background: linear-gradient(135deg, rgba(168,85,247,0.5), rgba(124,58,237,0.5));
    filter: blur(8px); opacity: 0; transition: opacity 0.3s; pointer-events: none;
  }
  .ss-start-btn:hover, .ss-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(168,85,247,0.5), 0 0 0 1px rgba(168,85,247,0.4);
  }
  .ss-start-btn:hover .ss-btn-glow, .ss-next-btn:hover .ss-btn-glow { opacity: 1; }

  .ss-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .ss-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* ============= LEVEL COMPLETE ============= */
  .ss-level-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background:
      radial-gradient(ellipse at 50% 60%, rgba(168,85,247,0.15) 0%, transparent 60%),
      linear-gradient(180deg, #070710 0%, #1a0a2e 60%, #0e0518 100%);
  }

  .ss-lc-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .ss-lc-star { position: absolute; font-size: 1.5rem; animation: ssStarTwinkle 2s ease-in-out infinite; }
  .ss-lc-clap { position: absolute; font-size: 2rem; animation: ssClapBurst 1.5s ease-in-out infinite; }

  .ss-lc-spots { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .ss-lc-spot { position: absolute; width: 140px; height: 400px; top: -50px; }
  .ss-lc-spot-1 { left: 20%; background: linear-gradient(180deg, rgba(251,191,36,0.08) 0%, transparent 70%); transform: rotate(-10deg); animation: ssSpotSway1 5s ease-in-out infinite; }
  .ss-lc-spot-2 { left: 45%; background: linear-gradient(180deg, rgba(168,85,247,0.08) 0%, transparent 70%); animation: ssSpotSway2 6s ease-in-out infinite; }
  .ss-lc-spot-3 { right: 15%; background: linear-gradient(180deg, rgba(56,189,248,0.06) 0%, transparent 70%); transform: rotate(10deg); animation: ssSpotSway1 7s ease-in-out infinite; }

  .ss-lc-content { position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px; }

  .ss-lc-title { font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 1rem; }

  .ss-lc-stars { display: flex; justify-content: center; gap: 1rem; margin-bottom: 1.5rem; }
  .ss-lc-star-icon { font-size: 2.5rem; display: inline-block; }
  .ss-star-earned { animation: ssStarEarned 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .ss-star-empty { color: #334155; font-size: 2.5rem; }

  .ss-lc-shapes-parade { display: flex; justify-content: center; gap: 0.8rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .ss-lc-parade-item { animation: ssBow 2s ease-in-out infinite; }

  .ss-lc-stats { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .ss-lc-stat { display: flex; flex-direction: column; align-items: center; }
  .ss-lc-stat-label { font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem; }
  .ss-lc-stat-value { font-size: 2rem; font-weight: 900; color: white; }

  .ss-lc-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  /* ============= GAME COMPLETE ============= */
  .ss-game-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background:
      radial-gradient(ellipse at 50% 40%, rgba(251,191,36,0.1) 0%, transparent 60%),
      linear-gradient(180deg, #070710 0%, #1a0a2e 60%, #0e0518 100%);
  }

  .ss-gc-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .ss-gc-confetti {
    position: absolute; width: 8px; height: 5px; border-radius: 2px;
    top: -10px;
    animation: ssConfettiFall 5s linear infinite;
  }

  .ss-gc-curtain-l, .ss-gc-curtain-r {
    position: absolute; top: 0; bottom: 0; width: 12%; z-index: 2; pointer-events: none;
  }
  .ss-gc-curtain-l {
    left: 0;
    background: linear-gradient(90deg, rgba(88,28,135,0.4) 0%, transparent 100%);
  }
  .ss-gc-curtain-r {
    right: 0;
    background: linear-gradient(-90deg, rgba(88,28,135,0.4) 0%, transparent 100%);
  }

  .ss-gc-content { position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 520px; }
  .ss-gc-title { font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 0.5rem; }
  .ss-gc-sub { color: #a78bfa; font-size: 1.1rem; margin-bottom: 1.5rem; }

  .ss-gc-shapes {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 0.8rem; margin-bottom: 1.5rem;
  }
  .ss-gc-shape-item {
    display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
    animation: ssBow 3s ease-in-out infinite;
  }
  .ss-gc-shape-name { font-size: 0.7rem; color: #94a3b8; font-weight: 600; }

  .ss-gc-final-score { margin-bottom: 1.5rem; }
  .ss-gc-score-label { display: block; font-size: 0.9rem; color: #64748b; margin-bottom: 0.3rem; }
  .ss-gc-score-num { font-size: 3rem; font-weight: 900; color: white; }

  .ss-gc-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  /* ============= PLAYING SCREEN ============= */
  .ss-play {
    height: 100%; display: flex; flex-direction: column; position: relative;
  }

  /* Theatre background */
  .ss-theatre-bg {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(30,10,50,0.8) 0%, transparent 60%),
      linear-gradient(180deg, #070710 0%, #10081e 50%, #0c0a14 100%);
  }

  /* Curtain sides with opening animation */
  .ss-curtain-side {
    position: absolute; top: 0; bottom: 0; width: 50%; z-index: 1;
    transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .ss-curtain-l {
    left: 0;
    background:
      linear-gradient(90deg,
        rgba(88,20,50,0.6) 0%, rgba(88,20,50,0.3) 30%,
        rgba(88,20,50,0.15) 50%, rgba(88,20,50,0.05) 70%, transparent 100%);
    transform-origin: left center;
  }
  .ss-curtain-r {
    right: 0;
    background:
      linear-gradient(-90deg,
        rgba(88,20,50,0.6) 0%, rgba(88,20,50,0.3) 30%,
        rgba(88,20,50,0.15) 50%, rgba(88,20,50,0.05) 70%, transparent 100%);
    transform-origin: right center;
  }
  .ss-curtain-l.ss-curtain-open { animation: ssCurtainOpenL 1.2s ease forwards; }
  .ss-curtain-r.ss-curtain-open { animation: ssCurtainOpenR 1.2s ease forwards; }

  /* Stage floor */
  .ss-stage-floor {
    position: absolute; bottom: 0; left: 0; right: 0; height: 35%;
    background:
      linear-gradient(180deg, transparent 0%, rgba(50,25,8,0.12) 20%, rgba(50,25,8,0.25) 50%, rgba(35,18,5,0.45) 100%);
    border-top: 1px solid rgba(139,90,43,0.08);
  }
  .ss-stage-floor::before {
    content: ''; position: absolute; inset: 0;
    background: repeating-linear-gradient(90deg, transparent 0px, transparent 50px, rgba(139,90,43,0.03) 50px, rgba(139,90,43,0.03) 51px);
  }

  /* Side lighting */
  .ss-stage-light {
    position: absolute; top: 10%; width: 60px; height: 50%; pointer-events: none;
  }
  .ss-stage-light-l { left: 0; background: radial-gradient(ellipse at 0% 50%, rgba(251,191,36,0.04) 0%, transparent 70%); }
  .ss-stage-light-r { right: 0; background: radial-gradient(ellipse at 100% 50%, rgba(251,191,36,0.04) 0%, transparent 70%); }

  /* Valance (top curtain drape) */
  .ss-valance {
    position: absolute; top: 0; left: 0; right: 0; height: 12px;
    background: linear-gradient(180deg, rgba(88,20,50,0.5) 0%, rgba(88,20,50,0.2) 60%, transparent 100%);
    z-index: 2;
    animation: ssValanceSway 5s ease-in-out infinite;
    transform-origin: top center;
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
  .ss-header-center { display: flex; align-items: center; gap: 0.5rem; }

  .ss-back-btn {
    width: 40px; height: 40px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px; color: white; font-size: 1.2rem;
    cursor: pointer; transition: all 0.2s ease;
  }
  .ss-back-btn:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.2); }

  .ss-level-badge {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    border-radius: 20px; font-weight: 700; color: white; font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(168,85,247,0.3);
  }

  .ss-progress-pips { display: flex; gap: 6px; }
  .ss-pip {
    width: 10px; height: 10px; border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    transition: all 0.3s ease;
  }
  .ss-pip-done {
    background: #a855f7; border-color: #a855f7;
    box-shadow: 0 0 8px rgba(168,85,247,0.4);
  }
  .ss-pip-current {
    background: rgba(168,85,247,0.4); border-color: #a855f7;
    animation: ssPipPulse 1s ease-in-out infinite;
  }

  .ss-score-display {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem;
    background: rgba(251,191,36,0.1);
    border: 1px solid rgba(251,191,36,0.2);
    border-radius: 20px; color: #fbbf24; font-weight: 700; font-size: 0.9rem;
  }

  /* ============= STAGE AREA ============= */
  .ss-stage {
    flex: 1; display: flex; flex-direction: column; align-items: center;
    justify-content: center; position: relative; overflow: hidden; z-index: 1;
    min-height: 250px; touch-action: none;
  }

  /* Spotlight cone */
  .ss-spotlight-cone {
    position: absolute;
    top: -20px; left: 50%; width: 280px; height: 100%;
    transform: translateX(-50%);
    background: linear-gradient(180deg,
      rgba(251,191,36,0.07) 0%,
      rgba(251,191,36,0.03) 25%,
      rgba(251,191,36,0.015) 50%,
      transparent 80%
    );
    clip-path: polygon(40% 0%, 60% 0%, 82% 100%, 18% 100%);
    pointer-events: none;
  }

  .ss-spotlight-glow {
    position: absolute;
    top: 25%; left: 50%; width: 300px; height: 300px;
    transform: translate(-50%, -20%);
    background: radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  /* Dust motes */
  .ss-dust {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle, rgba(251,191,36,0.6), rgba(255,255,255,0.3));
    pointer-events: none; z-index: 3;
  }

  /* Shadow target area */
  .ss-shadow-area {
    position: relative;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    width: 260px; height: 260px;
    z-index: 5;
  }

  .ss-shadow-ring {
    position: absolute; top: 50%; left: 50%;
    width: 240px; height: 240px;
    border: 2px dashed rgba(168,85,247,0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ssPulseRing 3s ease-in-out infinite;
    pointer-events: none;
  }

  .ss-shadow-near .ss-shadow-ring {
    border-color: rgba(74,222,128,0.5);
    animation: ssPulseRingNear 1s ease-in-out infinite;
  }

  .ss-shadow-correct .ss-shadow-ring {
    border-color: rgba(74,222,128,0.8);
    animation: none;
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
    transition: all 0.5s ease;
  }

  .ss-shadow-wrong .ss-shadow-ring {
    border-color: rgba(239,68,68,0.6);
  }

  .ss-shadow-shape {
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .ss-shadow-pulse {
    position: absolute; top: 50%; left: 50%;
    width: 220px; height: 220px; border-radius: 50%;
    background: radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%);
    animation: ssShadowBreathe 3s ease-in-out infinite;
    pointer-events: none;
  }

  .ss-shadow-near .ss-shadow-pulse {
    background: radial-gradient(circle, rgba(74,222,128,0.1) 0%, transparent 70%);
  }

  /* Bravo text */
  .ss-bravo {
    position: absolute; top: -50px;
    font-size: 1.8rem; font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f472b6, #a855f7);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: ssBravoAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    white-space: nowrap;
  }

  /* Reveal info */
  .ss-reveal-info {
    position: absolute; bottom: -80px;
    text-align: center;
    animation: ssRevealInfoSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0.3s;
    opacity: 0;
    padding: 0.7rem 1.5rem;
    background: rgba(0,0,0,0.6);
    border: 1px solid rgba(168,85,247,0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
  }
  .ss-reveal-name {
    font-size: 1.2rem; font-weight: 800; color: white; margin-bottom: 0.2rem;
  }
  .ss-reveal-desc {
    font-size: 0.85rem; color: #a78bfa;
  }
  .ss-reveal-props {
    font-size: 0.8rem; color: #94a3b8; margin-top: 0.2rem;
    padding-top: 0.2rem; border-top: 1px solid rgba(255,255,255,0.08);
  }

  /* Confetti pieces */
  .ss-confetti {
    position: absolute; border-radius: 2px;
    pointer-events: none; z-index: 100;
  }

  /* Sparkles */
  .ss-sparkle {
    position: absolute; pointer-events: none; z-index: 100;
    background: radial-gradient(circle, #fbbf24 0%, transparent 70%);
    border-radius: 50%;
    animation: ssSparkle 0.8s ease forwards;
  }

  /* ============= SHELF (Shape options) ============= */
  .ss-shelf {
    position: relative; z-index: 50;
    background:
      linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0.6) 100%);
    padding: 0.6rem 1rem 1.2rem;
    border-top: 1px solid rgba(139,90,43,0.15);
  }

  .ss-shelf-label {
    text-align: center; color: #64748b; font-size: 0.8rem; margin-bottom: 0.6rem;
    font-weight: 600;
  }

  .ss-shelf-shapes {
    display: flex; justify-content: center; gap: 0.8rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0.3rem;
  }

  .ss-shelf-item {
    display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
    padding: 0.6rem;
    background: rgba(255,255,255,0.04);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    cursor: grab;
    transition: all 0.25s ease;
    touch-action: none;
    min-width: 130px;
  }
  .ss-shelf-item:hover:not(.ss-shelf-disabled):not(.ss-shelf-dragging) {
    background: rgba(255,255,255,0.08);
    border-color: rgba(168,85,247,0.4);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(168,85,247,0.2);
  }
  .ss-shelf-item:active:not(.ss-shelf-disabled) {
    cursor: grabbing;
  }

  .ss-shelf-dragging {
    opacity: 0.9;
    cursor: grabbing !important;
    border-color: rgba(168,85,247,0.6) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(168,85,247,0.3) !important;
    border-radius: 20px;
    background: rgba(20,10,40,0.9) !important;
    animation: ssDragFloat 0.6s ease-in-out infinite;
    z-index: 1000 !important;
  }

  .ss-shelf-disabled {
    opacity: 0.4; pointer-events: none;
  }

  .ss-shelf-name {
    font-size: 0.85rem; font-weight: 700; color: #cbd5e1;
  }

  /* ============= RESPONSIVE ============= */
  @media (max-width: 600px) {
    .ss-shadow-area { width: 200px; height: 200px; }
    .ss-shadow-ring { width: 190px; height: 190px; }
    .ss-shadow-pulse { width: 180px; height: 180px; }

    .ss-shadow-shape .ss-shape { transform: scale(0.75); }
    .ss-shadow-shape .ss-shape-triangle {
      border-left-width: 75px; border-right-width: 75px; border-bottom-width: 130px;
    }
    .ss-shadow-shape .ss-shape-diamond { transform: rotate(45deg) scale(0.75); }

    .ss-shelf-shapes { gap: 0.5rem; }
    .ss-shelf-item { padding: 0.4rem; min-width: 100px; border-radius: 14px; }
    .ss-shelf-item .ss-shape { transform: scale(0.7); }
    .ss-shelf-item .ss-shape-triangle {
      border-left-width: 42px; border-right-width: 42px; border-bottom-width: 73px;
    }
    .ss-shelf-item .ss-shape-diamond { transform: rotate(45deg) scale(0.7); }
    .ss-shelf-name { font-size: 0.75rem; }

    .ss-bravo { font-size: 1.4rem; top: -40px; }
    .ss-reveal-info { bottom: -65px; padding: 0.5rem 1rem; }
    .ss-reveal-name { font-size: 1rem; }

    .ss-intro-curtain { width: 10%; }
    .ss-masks { gap: 1rem; }
    .ss-mask { font-size: 2rem; }
  }

  @media (max-width: 400px) {
    .ss-shadow-area { width: 170px; height: 170px; }
    .ss-shadow-ring { width: 160px; height: 160px; }
    .ss-shadow-pulse { width: 150px; height: 150px; }

    .ss-shadow-shape .ss-shape { transform: scale(0.6); }
    .ss-shadow-shape .ss-shape-triangle {
      border-left-width: 60px; border-right-width: 60px; border-bottom-width: 104px;
    }
    .ss-shadow-shape .ss-shape-diamond { transform: rotate(45deg) scale(0.6); }

    .ss-shelf-item { min-width: 85px; padding: 0.3rem; }
    .ss-shelf-item .ss-shape { transform: scale(0.55); }
    .ss-shelf-item .ss-shape-triangle {
      border-left-width: 33px; border-right-width: 33px; border-bottom-width: 57px;
    }
    .ss-shelf-item .ss-shape-diamond { transform: rotate(45deg) scale(0.55); }
    .ss-shelf-name { font-size: 0.7rem; }

    .ss-shelf-shapes { gap: 0.3rem; }
    .ss-stage { min-height: 200px; }

    .ss-header-center { display: none; }
  }
`;
