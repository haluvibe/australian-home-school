"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type React from "react";

// ============================================================
// PATTERN PIRATES  --  Repeating Pattern Game (DRAG Edition)
// Foundation / Year 1 Mathematics
// Curriculum: "Copy and continue repeating patterns"
//             "Create skip counting and repeating patterns,
//              identifying the repeating unit"
// ============================================================

interface PatternPiratesProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameComplete";

// Gem definitions — rendered with CSS gradients, no emojis
interface GemDef {
  id: string;
  name: string;
  baseColor: string;
  lightColor: string;
  darkColor: string;
  glowColor: string;
  borderRadius: string; // shape variant
}

const GEM_DEFS: GemDef[] = [
  { id: "red",    name: "Ruby",     baseColor: "#e11d48", lightColor: "#fda4af", darkColor: "#9f1239", glowColor: "rgba(225,29,72,0.6)",  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" },
  { id: "blue",   name: "Sapphire", baseColor: "#2563eb", lightColor: "#93c5fd", darkColor: "#1e3a8a", glowColor: "rgba(37,99,235,0.6)",  borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%" },
  { id: "green",  name: "Emerald",  baseColor: "#16a34a", lightColor: "#86efac", darkColor: "#14532d", glowColor: "rgba(22,163,74,0.6)",  borderRadius: "45% 55% 55% 45% / 55% 45% 55% 45%" },
  { id: "gold",   name: "Topaz",    baseColor: "#d97706", lightColor: "#fde68a", darkColor: "#92400e", glowColor: "rgba(217,119,6,0.6)",  borderRadius: "50% 50% 45% 55% / 60% 40% 60% 40%" },
  { id: "purple", name: "Amethyst", baseColor: "#9333ea", lightColor: "#d8b4fe", darkColor: "#581c87", glowColor: "rgba(147,51,234,0.6)", borderRadius: "55% 45% 50% 50% / 50% 50% 50% 50%" },
  { id: "silver", name: "Diamond",  baseColor: "#94a3b8", lightColor: "#f1f5f9", darkColor: "#475569", glowColor: "rgba(148,163,184,0.6)", borderRadius: "50%" },
];

// Pattern types by difficulty
type PatternType = "AB" | "ABB" | "ABC" | "AABB" | "ABCD";

interface PatternLevel {
  patternType: PatternType;
  unit: GemDef[];
  sequence: GemDef[];
  blanks: number[];
  options: GemDef[];
}

interface DragState {
  gemId: string;
  originIndex: number; // index in options tray
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
  life: number;
  maxLife: number;
  type: "coin" | "sparkle" | "ray";
  rotation: number;
  rotSpeed: number;
  scale: number;
  hue: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  phase: number;
  speed: number;
}

let particleCounter = 0;

export default function PatternPirates({ onExit }: PatternPiratesProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<PatternLevel | null>(null);
  const [filledSlots, setFilledSlots] = useState<Record<number, GemDef>>({});
  const [currentBlankIndex, setCurrentBlankIndex] = useState(0);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [chestOpen, setChestOpen] = useState(false);
  const [wrongShake, setWrongShake] = useState(false);
  const [lockFlash, setLockFlash] = useState(false);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const [levelStars, setLevelStars] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef = useRef(0);
  const dropZoneRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const gemTrayRef = useRef<HTMLDivElement | null>(null);

  // Initialize background stars
  useEffect(() => {
    const stars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 50,
        size: 0.5 + Math.random() * 2.5,
        brightness: 0.2 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.8,
      });
    }
    starsRef.current = stars;
  }, []);

  // Canvas background animation: stars, moon, ocean, palm trees
  useEffect(() => {
    const animate = (timestamp: number) => {
      const time = timestamp / 1000;
      timeRef.current = timestamp;
      const canvas = canvasRef.current;
      if (!canvas) { animFrameRef.current = requestAnimationFrame(animate); return; }
      const ctx = canvas.getContext("2d");
      if (!ctx) { animFrameRef.current = requestAnimationFrame(animate); return; }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Stars
      for (const star of starsRef.current) {
        const twinkle = Math.sin(time * star.speed + star.phase) * 0.5 + 0.5;
        const alpha = star.brightness * (0.3 + twinkle * 0.7);
        const sx = (star.x / 100) * w;
        const sy = (star.y / 100) * h;
        const r = star.size * (0.8 + twinkle * 0.4);
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 220, ${alpha})`;
        ctx.fill();
        if (star.size > 1.5) {
          const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 3);
          grad.addColorStop(0, `rgba(255, 248, 220, ${alpha * 0.25})`);
          grad.addColorStop(1, "rgba(255, 248, 220, 0)");
          ctx.beginPath();
          ctx.arc(sx, sy, r * 3, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      // Moon
      const moonX = w * 0.85;
      const moonY = h * 0.1;
      const moonR = Math.min(w, h) * 0.055;
      const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR * 5);
      moonGlow.addColorStop(0, "rgba(255, 248, 220, 0.12)");
      moonGlow.addColorStop(0.4, "rgba(255, 248, 220, 0.04)");
      moonGlow.addColorStop(1, "rgba(255, 248, 220, 0)");
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR * 5, 0, Math.PI * 2);
      ctx.fillStyle = moonGlow;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
      const moonFill = ctx.createRadialGradient(moonX - moonR * 0.3, moonY - moonR * 0.3, 0, moonX, moonY, moonR);
      moonFill.addColorStop(0, "rgba(255, 252, 240, 0.95)");
      moonFill.addColorStop(1, "rgba(255, 240, 200, 0.75)");
      ctx.fillStyle = moonFill;
      ctx.fill();

      // Palm tree silhouettes (left side)
      drawPalmTree(ctx, w * 0.05, h * 0.62, h * 0.22, time, 0);
      drawPalmTree(ctx, w * 0.12, h * 0.65, h * 0.18, time, 0.5);
      // Right side
      drawPalmTree(ctx, w * 0.88, h * 0.63, h * 0.2, time, 1.0);
      drawPalmTree(ctx, w * 0.95, h * 0.66, h * 0.16, time, 1.5);

      // Ocean waves
      const waveBaseY = h * 0.72;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const xp = x / w;
        let y = waveBaseY;
        y += Math.sin(xp * 8 + time * 0.7) * 5;
        y += Math.sin(xp * 13 + time * 1.1 + 1) * 3;
        y += Math.sin(xp * 4 + time * 0.4 + 2) * 7;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      const waterGrad = ctx.createLinearGradient(0, waveBaseY, 0, h);
      waterGrad.addColorStop(0, "rgba(10, 35, 75, 0.85)");
      waterGrad.addColorStop(0.4, "rgba(8, 25, 60, 0.92)");
      waterGrad.addColorStop(1, "rgba(4, 12, 35, 0.97)");
      ctx.fillStyle = waterGrad;
      ctx.fill();

      // Wave surface highlight
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const xp = x / w;
        let y = waveBaseY;
        y += Math.sin(xp * 8 + time * 0.7) * 5;
        y += Math.sin(xp * 13 + time * 1.1 + 1) * 3;
        y += Math.sin(xp * 4 + time * 0.4 + 2) * 7;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(130, 200, 255, 0.12)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Second wave
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const xp = x / w;
        let y = waveBaseY + 15;
        y += Math.sin(xp * 6 + time * 0.5 + 3) * 4;
        y += Math.sin(xp * 11 + time * 0.9 + 0.5) * 2;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(100, 180, 255, 0.07)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Moon reflection
      for (let i = 0; i < 10; i++) {
        const ry = waveBaseY + 8 + i * 7;
        const rw = 12 + Math.sin(time * 0.6 + i * 0.4) * 8;
        const alpha = 0.1 - i * 0.009;
        ctx.beginPath();
        ctx.ellipse(moonX + Math.sin(time * 0.35 + i) * 4, ry, rw, 1.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 220, ${Math.max(0, alpha)})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, []);

  // Canvas resize
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Particle physics loop
  useEffect(() => {
    if (particles.length === 0) return;
    let frame: number;
    const tick = () => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + (p.type === "coin" ? 0.18 : p.type === "sparkle" ? -0.02 : 0),
          life: p.life - 1,
          rotation: p.rotation + p.rotSpeed,
          scale: p.scale * (p.type === "ray" ? 1.02 : 1),
        })).filter(p => p.life > 0)
      );
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [particles.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  function drawPalmTree(ctx: CanvasRenderingContext2D, baseX: number, baseY: number, trunkH: number, time: number, phaseOffset: number) {
    const sway = Math.sin(time * 0.5 + phaseOffset) * 3;
    const topX = baseX + sway;
    const topY = baseY - trunkH;
    // Trunk
    ctx.beginPath();
    ctx.moveTo(baseX - 4, baseY);
    ctx.quadraticCurveTo(baseX + sway * 0.5 - 3, baseY - trunkH * 0.5, topX - 3, topY);
    ctx.lineTo(topX + 3, topY);
    ctx.quadraticCurveTo(baseX + sway * 0.5 + 3, baseY - trunkH * 0.5, baseX + 4, baseY);
    ctx.closePath();
    ctx.fillStyle = "rgba(20, 15, 10, 0.7)";
    ctx.fill();
    // Fronds
    const frondCount = 5;
    for (let i = 0; i < frondCount; i++) {
      const angle = ((i / frondCount) * Math.PI * 1.5) - Math.PI * 0.75;
      const frondSway = Math.sin(time * 0.7 + phaseOffset + i * 0.8) * 5;
      const frondLen = trunkH * 0.6 + Math.sin(i * 1.2) * 10;
      const endX = topX + Math.cos(angle) * frondLen + frondSway;
      const endY = topY + Math.sin(angle) * frondLen * 0.5 + Math.abs(Math.cos(angle)) * 15;
      const cpX = topX + Math.cos(angle) * frondLen * 0.5 + frondSway * 0.5;
      const cpY = topY + Math.sin(angle) * frondLen * 0.2 - 10;
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.quadraticCurveTo(cpX, cpY, endX, endY);
      ctx.strokeStyle = "rgba(15, 30, 15, 0.65)";
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  }

  // Generate a level
  const generateLevel = useCallback((lvl: number): PatternLevel => {
    const patternTypes: PatternType[] = ["AB", "AB", "ABB", "ABC", "ABB", "ABC", "AABB", "AABB", "ABCD", "ABCD"];
    const pType = patternTypes[Math.min(lvl - 1, patternTypes.length - 1)];

    const shuffled = [...GEM_DEFS].sort(() => Math.random() - 0.5);
    let unit: GemDef[];
    let reps: number;

    switch (pType) {
      case "AB":   unit = shuffled.slice(0, 2); reps = 3; break;
      case "ABB":  unit = [shuffled[0], shuffled[1], shuffled[1]]; reps = 2; break;
      case "ABC":  unit = shuffled.slice(0, 3); reps = 2; break;
      case "AABB": unit = [shuffled[0], shuffled[0], shuffled[1], shuffled[1]]; reps = 2; break;
      case "ABCD": unit = shuffled.slice(0, 4); reps = 2; break;
      default:     unit = shuffled.slice(0, 2); reps = 3;
    }

    const sequence: GemDef[] = [];
    for (let r = 0; r < reps; r++) {
      for (const g of unit) sequence.push(g);
    }

    // Determine blank positions (in the last repetition, 1-2 blanks)
    const unitLen = unit.length;
    const numBlanks = lvl <= 3 ? 1 : Math.min(2, unitLen);
    const lastRepStart = sequence.length - unitLen;
    const possiblePositions: number[] = [];
    for (let i = lastRepStart; i < sequence.length; i++) possiblePositions.push(i);
    const shuffledPos = possiblePositions.sort(() => Math.random() - 0.5);
    const blanks = shuffledPos.slice(0, numBlanks).sort((a, b) => a - b);

    // Build options: correct answers + distractors
    const correctGems = blanks.map(b => sequence[b]);
    const correctIds = new Set(correctGems.map(g => g.id));
    const distractors = GEM_DEFS.filter(g => !correctIds.has(g.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(3, GEM_DEFS.length - correctIds.size));

    const uniqueMap = new Map<string, GemDef>();
    for (const g of [...correctGems, ...distractors]) uniqueMap.set(g.id, g);
    const options = [...uniqueMap.values()].sort(() => Math.random() - 0.5);

    return { patternType: pType, unit, sequence, blanks, options };
  }, []);

  const initLevel = useCallback((lvl: number) => {
    const patternLevel = generateLevel(lvl);
    setCurrentLevel(patternLevel);
    setFilledSlots({});
    setCurrentBlankIndex(0);
    setChestOpen(false);
    setWrongShake(false);
    setLockFlash(false);
    setShowResult(null);
    setMistakes(0);
    setParticles([]);
    dropZoneRefs.current = {};
  }, [generateLevel]);

  const startGame = () => {
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setCompletedLevels([]);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLvl = level + 1;
    setLevel(newLvl);
    setScreen("playing");
    initLevel(newLvl);
  };

  // Spawn celebration particles
  const spawnCelebration = useCallback((cx: number, cy: number) => {
    const newParticles: Particle[] = [];
    // Gold coins
    for (let i = 0; i < 15; i++) {
      const angle = (Math.PI * 2 * i) / 15 + (Math.random() - 0.5) * 0.5;
      const speed = 3 + Math.random() * 6;
      newParticles.push({
        id: ++particleCounter,
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5,
        life: 50 + Math.floor(Math.random() * 30),
        maxLife: 80,
        type: "coin",
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 20,
        scale: 0.6 + Math.random() * 0.6,
        hue: 35 + Math.random() * 20,
      });
    }
    // Sparkles
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: ++particleCounter,
        x: cx + (Math.random() - 0.5) * 120,
        y: cy + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 2,
        vy: -(1 + Math.random() * 3),
        life: 30 + Math.floor(Math.random() * 30),
        maxLife: 60,
        type: "sparkle",
        rotation: 0,
        rotSpeed: 0,
        scale: 0.5 + Math.random() * 1,
        hue: Math.random() * 60,
      });
    }
    // Light rays
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      newParticles.push({
        id: ++particleCounter,
        x: cx, y: cy,
        vx: Math.cos(angle) * 1.5,
        vy: Math.sin(angle) * 1.5,
        life: 25,
        maxLife: 25,
        type: "ray",
        rotation: (angle * 180) / Math.PI,
        rotSpeed: 0,
        scale: 1,
        hue: 45,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Handle correct gem placement
  const handleCorrectPlacement = useCallback((blankPos: number, gem: GemDef) => {
    setFilledSlots(prev => ({ ...prev, [blankPos]: gem }));
    const nextIdx = currentBlankIndex + 1;

    if (!currentLevel) return;

    if (nextIdx >= currentLevel.blanks.length) {
      // Level complete!
      const stars = mistakes === 0 ? 3 : mistakes === 1 ? 2 : 1;
      setLevelStars(stars);
      setScore(s => s + 50 * level * stars);
      setChestOpen(true);
      setShowResult("correct");

      // Get chest position for particles
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        spawnCelebration(rect.width / 2, rect.height * 0.35);
      }

      setCompletedLevels(prev => [...prev, level]);

      setTimeout(() => {
        if (level >= 10) {
          setScreen("gameComplete");
        } else {
          setScreen("levelComplete");
        }
      }, 2200);
    } else {
      setCurrentBlankIndex(nextIdx);
    }
  }, [currentBlankIndex, currentLevel, level, mistakes, spawnCelebration]);

  // Handle wrong gem placement
  const handleWrongPlacement = useCallback(() => {
    setWrongShake(true);
    setLockFlash(true);
    setMistakes(m => m + 1);
    setTimeout(() => { setWrongShake(false); setLockFlash(false); }, 600);
  }, []);

  // Drag handlers
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    gem: GemDef,
    optionIndex: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setDragState({
      gemId: gem.id,
      originIndex: optionIndex,
      startX: x,
      startY: y,
      currentX: x,
      currentY: y,
      offsetX: 0,
      offsetY: 0,
    });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragState || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setDragState(prev => prev ? { ...prev, currentX: x, currentY: y } : null);
  }, [dragState]);

  const handleDragEnd = useCallback(() => {
    if (!dragState || !currentLevel || !containerRef.current) {
      setDragState(null);
      return;
    }

    const currentBlankPos = currentLevel.blanks[currentBlankIndex];
    const dropZone = dropZoneRefs.current[currentBlankPos];
    const container = containerRef.current;

    if (dropZone && container) {
      const containerRect = container.getBoundingClientRect();
      const dropRect = dropZone.getBoundingClientRect();
      const dropCenterX = dropRect.left + dropRect.width / 2 - containerRect.left;
      const dropCenterY = dropRect.top + dropRect.height / 2 - containerRect.top;
      const dx = dragState.currentX - dropCenterX;
      const dy = dragState.currentY - dropCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 70) {
        // Dropped on target
        const draggedGem = GEM_DEFS.find(g => g.id === dragState.gemId);
        const correctGem = currentLevel.sequence[currentBlankPos];
        if (draggedGem && draggedGem.id === correctGem.id) {
          handleCorrectPlacement(currentBlankPos, draggedGem);
        } else {
          handleWrongPlacement();
        }
        setDragState(null);
        return;
      }
    }

    // Dropped outside target - bounce back
    setDragState(null);
  }, [dragState, currentLevel, currentBlankIndex, handleCorrectPlacement, handleWrongPlacement]);

  // Drag event listeners
  useEffect(() => {
    if (!dragState) return;
    const move = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const end = () => handleDragEnd();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [dragState, handleDragMove, handleDragEnd]);

  // Render a CSS gem
  const renderGem = (gem: GemDef, size: number, isDragging = false, extraClass = "") => (
    <div
      className={`pp-gem ${isDragging ? "dragging" : ""} ${extraClass}`}
      style={{
        width: size,
        height: size,
        borderRadius: gem.borderRadius,
        background: `radial-gradient(circle at 35% 30%, ${gem.lightColor} 0%, ${gem.baseColor} 45%, ${gem.darkColor} 100%)`,
        boxShadow: `0 6px 20px ${gem.glowColor}, inset 0 -6px 15px ${gem.darkColor}40, inset 0 2px 8px ${gem.lightColor}80`,
        "--gem-glow": gem.glowColor,
      } as React.CSSProperties}
    >
      <div className="pp-gem-shine" />
      <div className="pp-gem-facet" />
    </div>
  );

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="pp-game" ref={containerRef}>
        <style>{ppStyles}</style>
        <canvas ref={canvasRef} className="pp-canvas" />
        <div className="pp-intro">
          <div className="pp-intro-content">
            <div className="pp-intro-chest">
              <div className="pp-chest-large">
                <div className="pp-chest-lid" />
                <div className="pp-chest-body-box" />
                <div className="pp-chest-lock-deco" />
              </div>
              <div className="pp-intro-gems">
                {GEM_DEFS.slice(0, 4).map((gem, i) => (
                  <div key={gem.id} className="pp-intro-gem" style={{ animationDelay: `${i * 0.2}s` }}>
                    {renderGem(gem, 40)}
                  </div>
                ))}
              </div>
            </div>
            <div className="pp-logo">
              <h1>Pattern Pirates</h1>
            </div>
            <p className="pp-tagline">Crack the Pattern, Unlock the Treasure!</p>
            <div className="pp-instructions-card">
              <h3>How to Play</h3>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  {renderGem(GEM_DEFS[0], 32)}
                  {renderGem(GEM_DEFS[1], 32)}
                  {renderGem(GEM_DEFS[0], 32)}
                  {renderGem(GEM_DEFS[1], 32)}
                  <div className="pp-blank-preview">?</div>
                </div>
                <p>Spot the <span className="pp-hl-gold">REPEATING PATTERN</span></p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  {renderGem(GEM_DEFS[0], 32)}
                  <span className="pp-drag-arrow">DRAG</span>
                  <div className="pp-blank-preview filled">
                    <div className="pp-blank-fill" />
                  </div>
                </div>
                <p><strong>DRAG</strong> the correct gem to <span className="pp-hl-green">FILL</span> the gap!</p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <div className="pp-mini-chest" />
                  <span className="pp-burst-icon">TREASURE</span>
                </div>
                <p>Unlock the <span className="pp-hl-gold">TREASURE CHEST!</span></p>
              </div>
            </div>
            <button className="pp-start-btn" onClick={startGame}>
              Set Sail!
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="pp-game" ref={containerRef}>
        <style>{ppStyles}</style>
        <canvas ref={canvasRef} className="pp-canvas" />
        <div className="pp-complete">
          <div className="pp-complete-content">
            <div className="pp-chest-celebration">
              <div className="pp-chest-large open">
                <div className="pp-chest-lid" />
                <div className="pp-chest-body-box" />
                <div className="pp-chest-glow-rays" />
              </div>
            </div>
            <h1 className="pp-complete-title">Treasure Unlocked!</h1>
            <p className="pp-complete-subtitle">Level {level} Complete</p>
            <div className="pp-stars-display">
              {[1, 2, 3].map(s => (
                <div key={s} className={`pp-star ${s <= levelStars ? "earned" : "empty"}`} style={{ animationDelay: `${s * 0.2}s` }}>
                  <div className="pp-star-shape" />
                </div>
              ))}
            </div>
            <div className="pp-score-card">
              <div className="pp-score-item">
                <span className="pp-score-label">Score</span>
                <span className="pp-score-value">{score}</span>
              </div>
              <div className="pp-score-item">
                <span className="pp-score-label">Level Stars</span>
                <span className="pp-score-value">{levelStars}/3</span>
              </div>
            </div>
            <div className="pp-complete-buttons">
              <button className="pp-next-btn" onClick={nextLevel}>
                Level {level + 1}
              </button>
              <button className="pp-menu-btn" onClick={() => (onExit ? onExit() : setScreen("intro"))}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== GAME COMPLETE =====================
  if (screen === "gameComplete") {
    const totalStars = completedLevels.length * 2 + levelStars; // approximate
    return (
      <div className="pp-game" ref={containerRef}>
        <style>{ppStyles}</style>
        <canvas ref={canvasRef} className="pp-canvas" />
        <div className="pp-complete">
          <div className="pp-complete-content">
            <div className="pp-crown-area">
              <div className="pp-crown" />
            </div>
            <h1 className="pp-complete-title">Master Pirate!</h1>
            <p className="pp-complete-subtitle">All 10 Levels Complete!</p>
            <div className="pp-final-gems">
              {GEM_DEFS.map((gem, i) => (
                <div key={gem.id} className="pp-final-gem" style={{ animationDelay: `${i * 0.15}s` }}>
                  {renderGem(gem, 50)}
                </div>
              ))}
            </div>
            <div className="pp-score-card">
              <div className="pp-score-item">
                <span className="pp-score-label">Final Score</span>
                <span className="pp-score-value">{score}</span>
              </div>
              <div className="pp-score-item">
                <span className="pp-score-label">Total Stars</span>
                <span className="pp-score-value">{totalStars}</span>
              </div>
            </div>
            <div className="pp-complete-buttons">
              <button className="pp-next-btn" onClick={startGame}>
                Play Again
              </button>
              <button className="pp-menu-btn" onClick={() => (onExit ? onExit() : setScreen("intro"))}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PLAYING =====================
  if (!currentLevel) return null;

  const currentBlankPos = currentLevel.blanks[currentBlankIndex] ?? -1;
  const draggedGemDef = dragState ? GEM_DEFS.find(g => g.id === dragState.gemId) : null;

  return (
    <div className="pp-game" ref={containerRef}>
      <style>{ppStyles}</style>
      <canvas ref={canvasRef} className="pp-canvas" />
      <div className={`pp-play ${wrongShake ? "pp-shake" : ""}`}>
        {/* Header */}
        <div className="pp-header">
          <div className="pp-header-left">
            <button className="pp-back-btn" onClick={() => (onExit ? onExit() : setScreen("intro"))}>
              &larr;
            </button>
            <div className="pp-level-badge">Level {level}</div>
          </div>
          <div className="pp-header-center">
            <div className="pp-pattern-label">{currentLevel.patternType} Pattern</div>
          </div>
          <div className="pp-header-right">
            <div className="pp-score-badge-play">{score}</div>
          </div>
        </div>

        {/* Island + Chest Area */}
        <div className="pp-island-area">
          <div className="pp-island-ground" />
          <div className="pp-island-palm left">
            <div className="pp-palm-trunk" />
            <div className="pp-palm-fronds" />
          </div>
          <div className="pp-island-palm right">
            <div className="pp-palm-trunk" />
            <div className="pp-palm-fronds" />
          </div>

          {/* Treasure Chest */}
          <div className={`pp-game-chest ${chestOpen ? "open" : ""} ${lockFlash ? "lock-flash" : ""}`}>
            <div className="pp-chest-lid" />
            <div className="pp-chest-body-box" />
            <div className="pp-chest-lock-plate">
              <div className="pp-lock-keyhole" />
            </div>
            {chestOpen && <div className="pp-chest-glow-rays" />}
            {chestOpen && <div className="pp-chest-light-beam" />}
          </div>

          {/* Pattern Chain around chest */}
          <div className="pp-pattern-chain">
            <div className="pp-chain-line" />
            <div className="pp-pattern-gems">
              {currentLevel.sequence.map((gem, i) => {
                const isBlank = currentLevel.blanks.includes(i);
                const isCurrent = i === currentBlankPos;
                const isFilled = filledSlots[i] !== undefined;
                const filledGem = filledSlots[i];
                const showResult_ = showResult === "correct";

                return (
                  <div
                    key={i}
                    className={`pp-chain-slot ${isBlank && !isFilled ? "blank" : "filled"} ${isCurrent && !isFilled ? "active" : ""} ${showResult_ ? "all-correct" : ""}`}
                    ref={el => { if (isBlank && !isFilled) dropZoneRefs.current[i] = el; }}
                  >
                    {!isBlank && renderGem(gem, 52)}
                    {isBlank && isFilled && filledGem && renderGem(filledGem, 52, false, "just-placed")}
                    {isBlank && !isFilled && (
                      <div className={`pp-empty-slot ${isCurrent ? "pulse" : ""}`}>
                        <span className="pp-slot-question">?</span>
                      </div>
                    )}
                    {isBlank && !isFilled && isCurrent && <div className="pp-drop-indicator" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gem Tray */}
        <div className="pp-gem-tray" ref={gemTrayRef}>
          <p className="pp-tray-label">Drag the correct gem:</p>
          <div className="pp-tray-gems">
            {currentLevel.options.map((gem, i) => {
              const isBeingDragged = dragState?.gemId === gem.id;
              return (
                <div
                  key={gem.id}
                  className={`pp-tray-gem ${isBeingDragged ? "dragging-source" : ""}`}
                  onMouseDown={(e) => handleDragStart(e, gem, i)}
                  onTouchStart={(e) => handleDragStart(e, gem, i)}
                >
                  {renderGem(gem, 70)}
                  <span className="pp-gem-name">{gem.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dragged gem overlay */}
        {dragState && draggedGemDef && (
          <div
            className="pp-drag-ghost"
            style={{
              left: dragState.currentX,
              top: dragState.currentY,
            }}
          >
            {renderGem(draggedGemDef, 80, true)}
          </div>
        )}

        {/* Particles */}
        {particles.map(p => (
          <div
            key={p.id}
            className={`pp-particle pp-particle-${p.type}`}
            style={{
              left: p.x,
              top: p.y,
              transform: `rotate(${p.rotation}deg) scale(${p.scale * (p.life / p.maxLife)})`,
              opacity: p.life / p.maxLife,
            }}
          />
        ))}

        {/* Result overlay */}
        {showResult === "correct" && (
          <div className="pp-result-overlay">
            <div className="pp-result-burst" />
            <span className="pp-result-text">Treasure Unlocked!</span>
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
    position: relative;
    background: linear-gradient(180deg, #020715 0%, #071428 30%, #0a1e3a 55%, #051020 100%);
  }

  .pp-canvas {
    position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;
  }

  /* ==================== GEM RENDERING ==================== */

  .pp-gem {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: grab;
    flex-shrink: 0;
  }

  .pp-gem:hover {
    transform: scale(1.08);
  }

  .pp-gem.dragging {
    cursor: grabbing;
    transform: scale(1.2);
    filter: brightness(1.2);
    z-index: 1000;
  }

  .pp-gem-shine {
    position: absolute;
    top: 12%;
    left: 18%;
    width: 35%;
    height: 22%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 50%, transparent 80%);
    border-radius: 50%;
    pointer-events: none;
  }

  .pp-gem-facet {
    position: absolute;
    bottom: 18%;
    right: 15%;
    width: 20%;
    height: 15%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.25) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .pp-gem.just-placed {
    animation: ppGemPlace 0.5s ease;
  }

  @keyframes ppGemPlace {
    0% { transform: scale(0.3) rotate(-30deg); opacity: 0; }
    50% { transform: scale(1.25) rotate(5deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  /* ==================== INTRO ==================== */

  .pp-intro {
    position: relative; z-index: 10;
    height: 100%; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .pp-intro-content {
    position: relative; z-index: 10; text-align: center;
    padding: 1.5rem; max-width: 480px; width: 100%;
  }

  .pp-intro-chest {
    margin-bottom: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pp-intro-gems {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
    margin-top: -10px;
    position: relative;
    z-index: 5;
  }

  .pp-intro-gem {
    animation: ppIntroGemFloat 3s ease-in-out infinite;
  }

  @keyframes ppIntroGemFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* ==================== TREASURE CHEST (CSS) ==================== */

  .pp-chest-large {
    width: 180px;
    height: 130px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ppChestIdle 4s ease-in-out infinite;
  }

  @keyframes ppChestIdle {
    0%, 100% { transform: rotate(-0.5deg); }
    50% { transform: rotate(0.5deg); }
  }

  .pp-chest-lid {
    width: 100%;
    height: 40%;
    background: linear-gradient(180deg, #c67a28 0%, #a05a15 30%, #8b4513 60%, #6d3410 100%);
    border-radius: 12px 12px 0 0;
    position: relative;
    z-index: 2;
    box-shadow: inset 0 2px 4px rgba(255, 200, 100, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease;
    transform-origin: center bottom;
  }

  .pp-chest-lid::before {
    content: '';
    position: absolute;
    top: 4px; left: 8px; right: 8px; height: 3px;
    background: linear-gradient(90deg, transparent, rgba(255, 200, 100, 0.4), transparent);
    border-radius: 2px;
  }

  .pp-chest-lid::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    height: 6px;
    background: linear-gradient(90deg,
      #b8860b 0%, #daa520 15%, #b8860b 30%, #daa520 50%, #b8860b 70%, #daa520 85%, #b8860b 100%);
    border-radius: 3px;
    transform: translateY(-50%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  .pp-chest-large.open .pp-chest-lid {
    transform: rotateX(-110deg) translateY(-10px);
  }

  .pp-chest-body-box {
    width: 100%;
    flex: 1;
    background: linear-gradient(180deg, #8b4513 0%, #6d3410 40%, #5a2a0c 100%);
    border-radius: 0 0 8px 8px;
    position: relative;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.4), 0 8px 25px rgba(0, 0, 0, 0.5);
  }

  .pp-chest-body-box::before {
    content: '';
    position: absolute;
    bottom: 6px; left: 5%; right: 5%; height: 6px;
    background: linear-gradient(90deg,
      #b8860b 0%, #daa520 15%, #b8860b 30%, #daa520 50%, #b8860b 70%, #daa520 85%, #b8860b 100%);
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  .pp-chest-body-box::after {
    content: '';
    position: absolute;
    top: 3px; left: 3px; right: 3px; bottom: 3px;
    border: 1px solid rgba(255, 200, 100, 0.08);
    border-radius: 0 0 6px 6px;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 18px,
      rgba(0, 0, 0, 0.08) 18px,
      rgba(0, 0, 0, 0.08) 20px
    );
    pointer-events: none;
  }

  .pp-chest-lock-deco {
    position: absolute;
    bottom: 42%;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 22px;
    background: radial-gradient(circle at 50% 40%, #fde68a, #b8860b);
    border-radius: 6px;
    z-index: 5;
    box-shadow: 0 2px 8px rgba(184, 134, 11, 0.5);
  }

  .pp-chest-lock-deco::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 6px;
    height: 8px;
    background: #5a2a0c;
    border-radius: 0 0 3px 3px;
  }

  .pp-chest-glow-rays {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, rgba(255, 215, 0, 0.15) 40%, transparent 70%);
    animation: ppGlowPulse 1.5s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }

  @keyframes ppGlowPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
  }

  .pp-chest-light-beam {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 100px;
    background: linear-gradient(180deg, rgba(255, 215, 0, 0.6) 0%, transparent 100%);
    clip-path: polygon(30% 100%, 70% 100%, 100% 0%, 0% 0%);
    animation: ppBeamShimmer 2s ease-in-out infinite;
    pointer-events: none;
    z-index: 3;
  }

  @keyframes ppBeamShimmer {
    0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(1); }
    50% { opacity: 1; transform: translateX(-50%) scaleX(1.3); }
  }

  .pp-chest-lock-plate {
    position: absolute;
    bottom: 38%;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 26px;
    background: radial-gradient(circle at 50% 40%, #fde68a, #b8860b);
    border-radius: 6px;
    z-index: 5;
    box-shadow: 0 2px 8px rgba(184, 134, 11, 0.5);
    transition: all 0.3s ease;
  }

  .pp-lock-keyhole {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 8px;
    height: 10px;
    background: #5a2a0c;
    border-radius: 50% 50% 2px 2px;
  }

  .pp-game-chest.lock-flash .pp-chest-lock-plate {
    background: radial-gradient(circle at 50% 40%, #fca5a5, #ef4444);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
  }

  /* ==================== LOGO ==================== */

  .pp-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .pp-logo h1 {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #fde68a, #fbbf24, #d97706);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    filter: drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3));
  }

  .pp-tagline {
    color: #fde68a; font-size: 1.05rem; margin-bottom: 1.5rem;
    text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  }

  /* ==================== INSTRUCTIONS CARD ==================== */

  .pp-instructions-card {
    background: rgba(10, 20, 45, 0.75);
    border: 2px solid rgba(251, 191, 36, 0.2);
    border-radius: 24px; padding: 1.2rem; margin-bottom: 1.5rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(251, 191, 36, 0.08);
  }

  .pp-instructions-card h3 {
    color: #fde68a; font-size: 1.1rem; margin-bottom: 1rem;
  }

  .pp-instruction { margin-bottom: 1rem; }
  .pp-instruction:last-child { margin-bottom: 0; }

  .pp-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.4rem;
  }

  .pp-blank-preview {
    width: 32px; height: 32px; border-radius: 50%;
    border: 3px dashed rgba(251, 191, 36, 0.5);
    display: flex; align-items: center; justify-content: center;
    color: #fbbf24; font-weight: 800; font-size: 0.9rem;
    background: rgba(251, 191, 36, 0.08);
  }

  .pp-blank-preview.filled {
    border-style: solid;
    border-color: #4ade80;
    background: rgba(74, 222, 128, 0.15);
  }

  .pp-blank-fill {
    width: 16px; height: 16px; border-radius: 50%;
    background: linear-gradient(135deg, #e11d48, #9f1239);
  }

  .pp-drag-arrow {
    color: #fbbf24; font-weight: 900; font-size: 0.75rem;
    background: rgba(251, 191, 36, 0.15);
    padding: 0.2rem 0.5rem; border-radius: 8px;
    animation: ppDragPulse 1.5s ease-in-out infinite;
  }

  @keyframes ppDragPulse {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(6px); }
  }

  .pp-mini-chest {
    width: 36px; height: 28px;
    background: linear-gradient(180deg, #a05a15, #6d3410);
    border-radius: 4px 4px 3px 3px;
    position: relative;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  }

  .pp-mini-chest::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 40%;
    background: linear-gradient(180deg, #c67a28, #8b4513);
    border-radius: 4px 4px 0 0;
  }

  .pp-burst-icon {
    color: #fbbf24; font-weight: 900; font-size: 0.75rem;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
  }

  .pp-instruction p { color: #cbd5e1; font-size: 0.9rem; }
  .pp-hl-gold { color: #fbbf24; font-weight: 700; }
  .pp-hl-green { color: #4ade80; font-weight: 700; }

  /* ==================== START / NEXT BUTTONS ==================== */

  .pp-start-btn, .pp-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: #1e1b4b;
    background: linear-gradient(135deg, #fde68a, #fbbf24, #d97706);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(251, 191, 36, 0.3), 0 0 50px rgba(251, 191, 36, 0.08);
    position: relative;
    overflow: hidden;
  }

  .pp-start-btn::before, .pp-next-btn::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%);
    animation: ppBtnShine 3s ease-in-out infinite;
  }

  @keyframes ppBtnShine {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
  }

  .pp-start-btn:hover, .pp-next-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 40px rgba(251, 191, 36, 0.4), 0 0 70px rgba(251, 191, 36, 0.12);
  }

  .pp-start-btn:active, .pp-next-btn:active { transform: scale(0.97); }

  .pp-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .pp-menu-btn:hover { border-color: rgba(255, 255, 255, 0.35); color: white; background: rgba(255, 255, 255, 0.08); }

  /* ==================== COMPLETE SCREENS ==================== */

  .pp-complete {
    position: relative; z-index: 10;
    height: 100%; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .pp-complete-content {
    position: relative; z-index: 10; text-align: center;
    padding: 1.5rem; max-width: 480px; width: 100%;
  }

  .pp-chest-celebration {
    margin-bottom: 1rem;
    position: relative;
    display: flex; justify-content: center;
  }

  .pp-complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem); font-weight: 900; color: white;
    margin-bottom: 0.3rem;
    text-shadow: 0 0 30px rgba(251, 191, 36, 0.4);
    animation: ppTitleGlow 2s ease-in-out infinite;
  }

  @keyframes ppTitleGlow {
    0%, 100% { text-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
    50% { text-shadow: 0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.2); }
  }

  .pp-complete-subtitle {
    color: #fde68a; font-size: 1.1rem; margin-bottom: 1.5rem;
  }

  /* ==================== STARS ==================== */

  .pp-stars-display {
    display: flex; justify-content: center; gap: 1rem; margin-bottom: 1.5rem;
  }

  .pp-star {
    width: 50px; height: 50px;
    animation: ppStarPop 0.5s ease both;
  }

  .pp-star-shape {
    width: 100%; height: 100%;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    transition: all 0.3s ease;
  }

  .pp-star.earned .pp-star-shape {
    background: linear-gradient(135deg, #fde68a, #fbbf24, #d97706);
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
    animation: ppStarShine 2s ease-in-out infinite;
  }

  .pp-star.empty .pp-star-shape {
    background: rgba(255, 255, 255, 0.1);
  }

  @keyframes ppStarPop {
    0% { transform: scale(0) rotate(-45deg); opacity: 0; }
    60% { transform: scale(1.3) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  @keyframes ppStarShine {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
  }

  .pp-score-card {
    display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .pp-score-item {
    display: flex; flex-direction: column; align-items: center;
    background: rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 0.8rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .pp-score-label { font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.2rem; }
  .pp-score-value {
    font-size: 1.8rem; font-weight: 900; color: white;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
  }

  .pp-complete-buttons { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }

  /* Crown for game complete */
  .pp-crown-area { margin-bottom: 1rem; }
  .pp-crown {
    width: 80px; height: 60px; margin: 0 auto;
    background: linear-gradient(180deg, #fde68a 0%, #d97706 100%);
    clip-path: polygon(0% 100%, 10% 30%, 25% 70%, 40% 0%, 50% 50%, 60% 0%, 75% 70%, 90% 30%, 100% 100%);
    animation: ppCrownBounce 2s ease-in-out infinite;
    filter: drop-shadow(0 4px 12px rgba(251, 191, 36, 0.5));
  }

  @keyframes ppCrownBounce {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-8px) rotate(2deg); }
  }

  .pp-final-gems {
    display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .pp-final-gem {
    animation: ppFinalGemPop 0.6s ease both;
  }

  @keyframes ppFinalGemPop {
    0% { transform: scale(0) translateY(20px); opacity: 0; }
    60% { transform: scale(1.2) translateY(-5px); opacity: 1; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }

  /* ==================== PLAYING SCREEN ==================== */

  .pp-play {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column;
    overflow: hidden;
  }

  .pp-play.pp-shake { animation: ppShake 0.5s ease; }

  @keyframes ppShake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-8px) rotate(-0.5deg); }
    30% { transform: translateX(8px) rotate(0.5deg); }
    50% { transform: translateX(-6px); }
    70% { transform: translateX(6px); }
    90% { transform: translateX(-3px); }
  }

  /* Header */
  .pp-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem;
    background: linear-gradient(180deg, rgba(5, 10, 30, 0.85) 0%, rgba(5, 10, 30, 0.4) 100%);
    border-bottom: 1px solid rgba(251, 191, 36, 0.1);
    z-index: 50;
  }

  .pp-header-left, .pp-header-right { display: flex; align-items: center; gap: 0.5rem; }
  .pp-header-center { display: flex; align-items: center; }

  .pp-back-btn {
    width: 36px; height: 36px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px; color: white; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease;
  }

  .pp-back-btn:hover { background: rgba(255, 255, 255, 0.15); }

  .pp-level-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(217, 119, 6, 0.2));
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: 16px; font-weight: 700; color: #fde68a; font-size: 0.85rem;
  }

  .pp-pattern-label {
    padding: 0.3rem 0.7rem;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #94a3b8; font-size: 0.75rem; font-weight: 600;
  }

  .pp-score-badge-play {
    padding: 0.4rem 0.8rem;
    background: rgba(251, 191, 36, 0.15);
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: 16px; font-weight: 700; color: #fde68a; font-size: 0.85rem;
  }

  /* ==================== ISLAND AREA ==================== */

  .pp-island-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0.5rem;
    min-height: 0;
  }

  .pp-island-ground {
    position: absolute;
    bottom: -5%;
    left: 10%;
    right: 10%;
    height: 40%;
    background: radial-gradient(ellipse at 50% 90%, rgba(194, 165, 105, 0.12) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .pp-island-palm {
    position: absolute;
    bottom: 30%;
    width: 40px;
    height: 80px;
    pointer-events: none;
  }

  .pp-island-palm.left { left: 5%; }
  .pp-island-palm.right { right: 5%; }

  .pp-palm-trunk {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 60px;
    background: linear-gradient(180deg, #5a3a1a, #3d2510);
    border-radius: 3px;
  }

  .pp-palm-fronds {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 30px;
    background: radial-gradient(ellipse at 50% 100%, rgba(34, 90, 34, 0.6) 0%, transparent 70%);
    border-radius: 50%;
    animation: ppFrondSway 4s ease-in-out infinite;
  }

  .pp-island-palm.right .pp-palm-fronds { animation-delay: 0.7s; }

  @keyframes ppFrondSway {
    0%, 100% { transform: translateX(-50%) rotate(-3deg); }
    50% { transform: translateX(-50%) rotate(3deg); }
  }

  /* ==================== GAME CHEST ==================== */

  .pp-game-chest {
    width: 200px;
    height: 145px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.8rem;
    z-index: 5;
    animation: ppChestBob 5s ease-in-out infinite;
  }

  @keyframes ppChestBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .pp-game-chest.open .pp-chest-lid {
    transform: rotateX(-110deg) translateY(-10px);
  }

  /* ==================== PATTERN CHAIN ==================== */

  .pp-pattern-chain {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3rem;
    z-index: 10;
  }

  .pp-chain-line {
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    height: 4px;
    background: linear-gradient(90deg,
      transparent 0%,
      #b8860b 5%,
      #daa520 15%,
      #b8860b 25%,
      #daa520 35%,
      #b8860b 45%,
      #daa520 55%,
      #b8860b 65%,
      #daa520 75%,
      #b8860b 85%,
      #daa520 95%,
      transparent 100%);
    border-radius: 2px;
    transform: translateY(-50%);
    box-shadow: 0 1px 4px rgba(184, 134, 11, 0.4);
    z-index: 0;
  }

  .pp-pattern-gems {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
  }

  .pp-chain-slot {
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
  }

  .pp-chain-slot.all-correct .pp-gem {
    animation: ppAllCorrectBounce 0.6s ease;
  }

  @keyframes ppAllCorrectBounce {
    0% { transform: scale(1); }
    40% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .pp-empty-slot {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 3px dashed rgba(251, 191, 36, 0.4);
    background: rgba(251, 191, 36, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .pp-empty-slot.pulse {
    border-color: #fbbf24;
    background: rgba(251, 191, 36, 0.12);
    animation: ppSlotPulse 1.2s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  }

  @keyframes ppSlotPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(251, 191, 36, 0.2); }
    50% { transform: scale(1.08); box-shadow: 0 0 30px rgba(251, 191, 36, 0.5); }
  }

  .pp-slot-question {
    font-size: 1.4rem; font-weight: 900; color: #fbbf24;
    text-shadow: 0 0 8px rgba(251, 191, 36, 0.3);
  }

  .pp-drop-indicator {
    position: absolute;
    inset: -6px;
    border: 2px solid rgba(251, 191, 36, 0.4);
    border-radius: 50%;
    animation: ppDropRing 1.5s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes ppDropRing {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  /* ==================== GEM TRAY ==================== */

  .pp-gem-tray {
    padding: 0.8rem;
    background: linear-gradient(0deg, rgba(5, 10, 30, 0.9) 0%, rgba(5, 10, 30, 0.5) 100%);
    border-top: 1px solid rgba(251, 191, 36, 0.1);
    text-align: center;
    z-index: 40;
  }

  .pp-tray-label {
    color: #94a3b8; font-size: 0.8rem; margin-bottom: 0.5rem; font-weight: 600;
  }

  .pp-tray-gems {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .pp-tray-gem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.04);
    border: 2px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    cursor: grab;
    transition: all 0.25s ease;
    touch-action: none;
  }

  .pp-tray-gem:hover {
    border-color: rgba(251, 191, 36, 0.4);
    background: rgba(251, 191, 36, 0.06);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .pp-tray-gem:active {
    cursor: grabbing;
    transform: scale(0.95);
  }

  .pp-tray-gem.dragging-source {
    opacity: 0.3;
    transform: scale(0.9);
  }

  .pp-gem-name {
    font-size: 0.65rem; color: #64748b; font-weight: 600;
  }

  /* ==================== DRAG GHOST ==================== */

  .pp-drag-ghost {
    position: absolute;
    z-index: 500;
    pointer-events: none;
    transform: translate(-50%, -50%);
    filter: brightness(1.15);
    animation: ppDragAppear 0.15s ease;
  }

  @keyframes ppDragAppear {
    from { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  /* ==================== PARTICLES ==================== */

  .pp-particle {
    position: absolute;
    pointer-events: none;
    z-index: 200;
  }

  .pp-particle-coin {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #fde68a, #d97706);
    box-shadow: 0 2px 6px rgba(217, 119, 6, 0.5);
  }

  .pp-particle-sparkle {
    width: 8px;
    height: 8px;
    background: radial-gradient(circle, #fff 0%, #fde68a 50%, transparent 100%);
    border-radius: 50%;
  }

  .pp-particle-ray {
    width: 40px;
    height: 4px;
    background: linear-gradient(90deg, rgba(255, 215, 0, 0.8), transparent);
    border-radius: 2px;
    transform-origin: left center;
  }

  /* ==================== RESULT OVERLAY ==================== */

  .pp-result-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    pointer-events: none; z-index: 300;
  }

  .pp-result-burst {
    position: absolute;
    width: 200px; height: 200px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, transparent 70%);
    animation: ppResultBurst 1s ease-out forwards;
  }

  @keyframes ppResultBurst {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(5); opacity: 0; }
  }

  .pp-result-text {
    position: relative; z-index: 5;
    padding: 0.8rem 1.8rem;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.95), rgba(217, 119, 6, 0.95));
    border-radius: 30px;
    font-size: 1.3rem; font-weight: 900; color: #1e1b4b;
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.5), 0 0 60px rgba(255, 215, 0, 0.2);
    animation: ppResultTextPop 0.5s ease;
  }

  @keyframes ppResultTextPop {
    0% { transform: scale(0) rotate(-10deg); opacity: 0; }
    60% { transform: scale(1.2) rotate(3deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  /* ==================== RESPONSIVE ==================== */

  @media (max-width: 600px) {
    .pp-chain-slot { width: 48px; height: 48px; }
    .pp-empty-slot { width: 42px; height: 42px; }
    .pp-slot-question { font-size: 1.1rem; }
    .pp-game-chest { width: 160px; height: 120px; }
    .pp-tray-gems { gap: 0.6rem; }
    .pp-tray-gem { padding: 0.4rem; }
    .pp-pattern-gems { gap: 0.2rem; }
    .pp-header-center { display: none; }
    .pp-gem-name { display: none; }
    .pp-island-palm { display: none; }
  }

  @media (max-width: 400px) {
    .pp-chain-slot { width: 40px; height: 40px; }
    .pp-empty-slot { width: 36px; height: 36px; }
    .pp-game-chest { width: 130px; height: 100px; }
  }

  @media (max-height: 600px) {
    .pp-game-chest { width: 140px; height: 100px; margin-bottom: 0.4rem; }
    .pp-chest-large { width: 140px; height: 100px; }
    .pp-island-area { padding: 0; }
    .pp-gem-tray { padding: 0.5rem; }
  }
`;
