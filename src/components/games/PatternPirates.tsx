"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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
  pattern: PatternSymbol[];
  displayed: (PatternSymbol | null)[];
  blanks: number[];
  currentBlank: number;
  options: PatternSymbol[];
}

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  brightness: number;
  phase: number;
}

interface WavePt {
  x: number;
  baseY: number;
  amplitude: number;
  frequency: number;
  phase: number;
}

interface Debris {
  x: number;
  y: number;
  emoji: string;
  speed: number;
  bobPhase: number;
  bobAmp: number;
  rotation: number;
  rotSpeed: number;
  scale: number;
}

interface GemParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  emoji: string;
  life: number;
  maxLife: number;
  rotation: number;
  rotSpeed: number;
  scale: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
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

const GEM_EMOJIS = ["\uD83D\uDC8E", "\uD83E\uDE99", "\u2B50", "\uD83D\uDD31", "\uD83D\uDD11"];
const DEBRIS_EMOJIS = ["\uD83E\uDEA3", "\uD83D\uDEE2\uFE0F", "\uD83E\uDEB5", "\u2693"];

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
  const [filledCell, setFilledCell] = useState<number | null>(null);
  const [wrongCell, setWrongCell] = useState<number | null>(null);
  const [chestOpen, setChestOpen] = useState(false);
  const [gemParticles, setGemParticles] = useState<GemParticle[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [smokePuffs, setSmokePuffs] = useState<{ id: number; x: number; y: number }[]>([]);
  const [scrollUnfurl, setScrollUnfurl] = useState(false);
  const [introShipX, setIntroShipX] = useState(-15);

  // Ambient animation state
  const starsRef = useRef<Star[]>([]);
  const wavePtsRef = useRef<WavePt[]>([]);
  const debrisRef = useRef<Debris[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleIdRef = useRef(0);

  // Initialize ambient world
  const initAmbient = useCallback(() => {
    const stars: Star[] = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 55,
        size: 0.5 + Math.random() * 2,
        speed: 0.3 + Math.random() * 0.7,
        brightness: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
      });
    }
    starsRef.current = stars;

    const wavePts: WavePt[] = [];
    for (let i = 0; i <= 30; i++) {
      wavePts.push({
        x: (i / 30) * 100,
        baseY: 78 + Math.random() * 3,
        amplitude: 1.5 + Math.random() * 2,
        frequency: 0.8 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      });
    }
    wavePtsRef.current = wavePts;

    const debris: Debris[] = [];
    for (let i = 0; i < 5; i++) {
      debris.push({
        x: Math.random() * 110 - 5,
        y: 80 + Math.random() * 8,
        emoji: DEBRIS_EMOJIS[Math.floor(Math.random() * DEBRIS_EMOJIS.length)],
        speed: 0.1 + Math.random() * 0.2,
        bobPhase: Math.random() * Math.PI * 2,
        bobAmp: 0.3 + Math.random() * 0.8,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 0.5,
        scale: 0.6 + Math.random() * 0.5,
      });
    }
    debrisRef.current = debris;
  }, []);

  // Ambient animation loop using canvas for stars/waves
  useEffect(() => {
    initAmbient();

    const animate = (timestamp: number) => {
      const dt = timestamp - timeRef.current;
      timeRef.current = timestamp;
      const time = timestamp / 1000;

      const canvas = canvasRef.current;
      if (!canvas) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Draw stars
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

        // Glow
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(sx, sy, r * 3, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 3);
          grad.addColorStop(0, `rgba(255, 248, 220, ${alpha * 0.3})`);
          grad.addColorStop(1, "rgba(255, 248, 220, 0)");
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      // Draw moon
      const moonX = w * 0.82;
      const moonY = h * 0.12;
      const moonR = Math.min(w, h) * 0.06;
      const moonGrad = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR * 4);
      moonGrad.addColorStop(0, "rgba(255, 248, 220, 0.15)");
      moonGrad.addColorStop(0.3, "rgba(255, 248, 220, 0.05)");
      moonGrad.addColorStop(1, "rgba(255, 248, 220, 0)");
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR * 4, 0, Math.PI * 2);
      ctx.fillStyle = moonGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
      const moonFill = ctx.createRadialGradient(moonX - moonR * 0.3, moonY - moonR * 0.3, 0, moonX, moonY, moonR);
      moonFill.addColorStop(0, "rgba(255, 252, 240, 0.95)");
      moonFill.addColorStop(1, "rgba(255, 240, 200, 0.8)");
      ctx.fillStyle = moonFill;
      ctx.fill();

      // Draw water surface
      const waveBaseY = h * 0.78;
      ctx.beginPath();
      ctx.moveTo(0, h);

      for (let x = 0; x <= w; x += 3) {
        const xp = x / w;
        let y = waveBaseY;
        y += Math.sin(xp * 8 + time * 0.8) * 4;
        y += Math.sin(xp * 12 + time * 1.2 + 1) * 2;
        y += Math.sin(xp * 4 + time * 0.5 + 2) * 6;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();

      const waterGrad = ctx.createLinearGradient(0, waveBaseY, 0, h);
      waterGrad.addColorStop(0, "rgba(15, 40, 80, 0.85)");
      waterGrad.addColorStop(0.3, "rgba(10, 30, 70, 0.9)");
      waterGrad.addColorStop(1, "rgba(5, 15, 40, 0.95)");
      ctx.fillStyle = waterGrad;
      ctx.fill();

      // Water surface highlight
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const xp = x / w;
        let y = waveBaseY;
        y += Math.sin(xp * 8 + time * 0.8) * 4;
        y += Math.sin(xp * 12 + time * 1.2 + 1) * 2;
        y += Math.sin(xp * 4 + time * 0.5 + 2) * 6;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(150, 200, 255, 0.15)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Second wave layer
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const xp = x / w;
        let y = waveBaseY + 12;
        y += Math.sin(xp * 6 + time * 0.6 + 3) * 3;
        y += Math.sin(xp * 10 + time * 1.0 + 0.5) * 2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(100, 180, 255, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Moon reflection on water
      const refX = moonX;
      const refStartY = waveBaseY + 5;
      for (let i = 0; i < 8; i++) {
        const ry = refStartY + i * 8;
        const width = 15 + Math.sin(time * 0.7 + i * 0.5) * 8;
        const alpha = 0.12 - i * 0.012;
        ctx.beginPath();
        ctx.ellipse(refX + Math.sin(time * 0.4 + i) * 3, ry, width, 1.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 220, ${alpha})`;
        ctx.fill();
      }

      // Fog layers
      for (let layer = 0; layer < 3; layer++) {
        const fogY = waveBaseY - 20 + layer * 15;
        const fogAlpha = 0.03 + layer * 0.01;
        const fogGrad = ctx.createLinearGradient(0, fogY - 20, 0, fogY + 20);
        fogGrad.addColorStop(0, "rgba(100, 150, 200, 0)");
        fogGrad.addColorStop(0.5, `rgba(100, 150, 200, ${fogAlpha})`);
        fogGrad.addColorStop(1, "rgba(100, 150, 200, 0)");
        ctx.fillStyle = fogGrad;
        ctx.fillRect(0, fogY - 20, w, 40);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [initAmbient]);

  // Resize canvas to container
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

  // Intro ship animation
  useEffect(() => {
    if (screen !== "intro") return;
    setIntroShipX(-15);
    let frame: number;
    const startTime = performance.now();
    const animateShip = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      // Sail from left to center over 3 seconds
      const progress = Math.min(elapsed / 3, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setIntroShipX(-15 + eased * 55);
      if (progress < 1) {
        frame = requestAnimationFrame(animateShip);
      }
    };
    frame = requestAnimationFrame(animateShip);
    return () => cancelAnimationFrame(frame);
  }, [screen]);

  // Gem particle animation
  useEffect(() => {
    if (gemParticles.length === 0) return;
    let frame: number;
    const animate = () => {
      setGemParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15,
            life: p.life - 1,
            rotation: p.rotation + p.rotSpeed,
          }))
          .filter((p) => p.life > 0)
      );
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [gemParticles.length > 0]);

  // Sparkle animation
  useEffect(() => {
    if (sparkles.length === 0) return;
    let frame: number;
    const animate = () => {
      setSparkles((prev) =>
        prev
          .map((s) => ({ ...s, y: s.y + s.vy, life: s.life - 1 }))
          .filter((s) => s.life > 0)
      );
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [sparkles.length > 0]);

  const spawnGemBurst = useCallback((cx: number, cy: number) => {
    const particles: GemParticle[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.5;
      const speed = 3 + Math.random() * 5;
      particles.push({
        id: ++particleIdRef.current,
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        emoji: GEM_EMOJIS[Math.floor(Math.random() * GEM_EMOJIS.length)],
        life: 40 + Math.floor(Math.random() * 20),
        maxLife: 60,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 15,
        scale: 0.5 + Math.random() * 0.8,
      });
    }
    setGemParticles((prev) => [...prev, ...particles]);
  }, []);

  const spawnSparkles = useCallback((cx: number, cy: number, count = 8) => {
    const s: Sparkle[] = [];
    for (let i = 0; i < count; i++) {
      s.push({
        id: ++particleIdRef.current,
        x: cx + (Math.random() - 0.5) * 60,
        y: cy + (Math.random() - 0.5) * 20,
        vy: -(0.5 + Math.random() * 2),
        life: 30 + Math.floor(Math.random() * 20),
        maxLife: 50,
        size: 8 + Math.random() * 14,
      });
    }
    setSparkles((prev) => [...prev, ...s]);
  }, []);

  const spawnSmoke = useCallback((cx: number, cy: number) => {
    const puffs = [];
    for (let i = 0; i < 5; i++) {
      puffs.push({ id: ++particleIdRef.current, x: cx + (Math.random() - 0.5) * 40, y: cy + (Math.random() - 0.5) * 20 });
    }
    setSmokePuffs(puffs);
    setTimeout(() => setSmokePuffs([]), 800);
  }, []);

  const generateChallenge = useCallback(
    (lvl: number): PatternChallenge => {
      const symbolSet = ALL_SYMBOL_SETS[lvl % ALL_SYMBOL_SETS.length];
      const unitLength = Math.min(2 + Math.floor(lvl / 3), 4);
      const shuffled = [...symbolSet].sort(() => Math.random() - 0.5);
      const pattern = shuffled.slice(0, unitLength);
      const reps = Math.min(3 + Math.floor(lvl / 4), 5);
      const fullSequence: PatternSymbol[] = [];
      for (let r = 0; r < reps; r++) {
        for (const sym of pattern) {
          fullSequence.push(sym);
        }
      }

      const numBlanks = Math.min(1 + Math.floor(lvl / 3), 4);
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

      const displayed: (PatternSymbol | null)[] = fullSequence.map((sym, i) =>
        blanks.includes(i) ? null : sym
      );

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

      return { pattern, displayed, blanks, currentBlank: 0, options };
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
      setFilledCell(null);
      setWrongCell(null);
      setChestOpen(false);
      setGemParticles([]);
      setSparkles([]);
      setSmokePuffs([]);
      setScrollUnfurl(false);

      const ch = generateChallenge(lvl);
      setChallenge(ch);

      // Trigger scroll unfurl animation
      setTimeout(() => setScrollUnfurl(true), 100);
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
        setFilledCell(blankIdx);
        setTimeout(() => setFilledCell(null), 600);
        spawnSparkles(50, 50, 6);

        const nextBlank = challenge.currentBlank + 1;

        if (nextBlank >= challenge.blanks.length) {
          // Pattern complete!
          setScore((s) => s + 25 * level);
          setTreasureCount((t) => t + 1);
          setShowResult("correct");
          setShowPatternUnit(true);
          setChestOpen(true);
          spawnGemBurst(50, 40);

          const newCompleted = patternsCompleted + 1;
          setPatternsCompleted(newCompleted);

          setChallenge((prev) =>
            prev ? { ...prev, displayed: newDisplayed, currentBlank: nextBlank } : null
          );

          setTimeout(() => {
            setChestOpen(false);
            if (newCompleted >= patternsNeeded) {
              setScreen("levelComplete");
            } else {
              setShowResult(null);
              setShowPatternUnit(false);
              setScrollUnfurl(false);
              const ch = generateChallenge(level);
              setChallenge(ch);
              setTimeout(() => setScrollUnfurl(true), 100);
            }
          }, 1800);
        } else {
          setChallenge({
            ...challenge,
            displayed: newDisplayed,
            currentBlank: nextBlank,
          });
        }
      } else {
        // Wrong!
        setWrongCell(blankIdx);
        setShakeScreen(true);
        spawnSmoke(50, 50);
        setTimeout(() => {
          setShakeScreen(false);
          setWrongCell(null);
        }, 500);
        setLives((l) => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 600);
          }
          return newL;
        });
      }
    },
    [challenge, showResult, level, patternsCompleted, patternsNeeded, generateChallenge, spawnGemBurst, spawnSparkles, spawnSmoke]
  );

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  // Shared ocean background used across all screens
  const OceanBg = (
    <div className="pp-ocean-bg" ref={containerRef}>
      <canvas ref={canvasRef} className="pp-canvas" />
      {/* Ship silhouette */}
      <div className="pp-ship-silhouette">
        <div className="pp-ship-body">
          <span className="pp-ship-emoji">{"\u26F5"}</span>
        </div>
      </div>
      {/* Floating debris */}
      {debrisRef.current.map((d, i) => (
        <div
          key={i}
          className="pp-debris"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            transform: `scale(${d.scale})`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        >
          {d.emoji}
        </div>
      ))}
      {/* Lantern glow */}
      <div className="pp-lantern-glow" />
    </div>
  );

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="pp-game">
        <style>{ppStyles}</style>
        {OceanBg}
        <div className="pp-intro">
          <div className="pp-intro-content">
            {/* Animated ship sailing in */}
            <div
              className="pp-intro-ship"
              style={{ left: `${introShipX}%` }}
            >
              <span className="pp-big-ship">{"\u26F5"}</span>
            </div>
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
                  <span className="pp-coin-cell">{"\uD83D\uDD34"}</span>
                  <span className="pp-coin-cell">{"\uD83D\uDD35"}</span>
                  <span className="pp-coin-cell">{"\uD83D\uDD34"}</span>
                  <span className="pp-coin-cell">{"\uD83D\uDD35"}</span>
                  <span className="pp-coin-cell blank">?</span>
                </div>
                <p>
                  Spot the <span className="pp-hl-gold">REPEATING PATTERN</span>
                </p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-coin-cell blank">?</span>
                  <span className="pp-arrow">{"\u2192"}</span>
                  <span className="pp-coin-cell">{"\uD83D\uDD34"}</span>
                </div>
                <p>
                  <strong>TAP</strong> the right symbol to{" "}
                  <span className="pp-hl-green">FILL</span> the gaps!
                </p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-treasure-icons">{"\uD83D\uDC8E"}{"\uD83E\uDE99"}{"\uD83D\uDD11"}</span>
                </div>
                <p>
                  Complete patterns to unlock{" "}
                  <span className="pp-hl-gold">TREASURE!</span>
                </p>
              </div>
            </div>
            <button className="pp-start-btn" onClick={startGame}>
              <span className="pp-btn-icon">{"\u2693"}</span>
              Set Sail!
              <span className="pp-btn-icon">{"\u2693"}</span>
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
        {OceanBg}
        <div className="pp-complete">
          <div className="pp-complete-content">
            <div className="pp-treasure-island">
              <span className="pp-island-emoji">{"\uD83C\uDFDD\uFE0F"}</span>
            </div>
            <h1 className="pp-complete-title">
              {"\uD83C\uDFF4\u200D\u2620\uFE0F"} Treasure Found! {"\uD83D\uDC8E"}
            </h1>
            <p className="pp-complete-subtitle">Level {level} Complete!</p>
            <div className="pp-treasure-chest-area">
              <div className="pp-big-chest open">
                <span className="pp-chest-emoji">{"\uD83E\uDDF0"}</span>
              </div>
              <div className="pp-treasure-display">
                {Array.from({ length: Math.min(treasureCount, 12) }, (_, i) => (
                  <span
                    key={i}
                    className="pp-treasure-piece"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    {GEM_EMOJIS[i % GEM_EMOJIS.length]}
                  </span>
                ))}
              </div>
            </div>
            <div className="pp-score-card">
              <div className="pp-score-item">
                <span className="pp-score-label">Score</span>
                <span className="pp-score-value">{score}</span>
              </div>
              <div className="pp-score-item">
                <span className="pp-score-label">Treasure</span>
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
        {OceanBg}
        <div className="pp-complete">
          <div className="pp-complete-content">
            <div className="pp-sunk-ship">
              <span className="pp-sunk-emoji">{"\u26F5"}</span>
            </div>
            <h1 className="pp-complete-title">
              {"\u2693"} Ship Sunk!
            </h1>
            <p className="pp-complete-subtitle">
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
      {OceanBg}
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
            <div className="pp-level-badge">
              {"\u2693"} Level {level}
            </div>
          </div>
          <div className="pp-header-center">
            <span className="pp-lives">{livesDisplay.join(" ")}</span>
          </div>
          <div className="pp-header-right">
            <div className="pp-treasure-badge">
              {"\uD83E\uDDF0"} {treasureCount}
            </div>
            <div className="pp-score-badge-play">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="pp-progress-bar">
          <div className="pp-progress-fill" style={{ width: `${(patternsCompleted / patternsNeeded) * 100}%` }} />
          <span className="pp-progress-text">
            {patternsCompleted} / {patternsNeeded} maps decoded
          </span>
        </div>

        {/* Treasure chest indicator */}
        <div className={`pp-chest-indicator ${chestOpen ? "open" : ""}`}>
          <span className="pp-chest-icon">{chestOpen ? "\uD83E\uDDF0" : "\uD83E\uDDF0"}</span>
          {chestOpen && <div className="pp-chest-rays" />}
        </div>

        {/* Gem particles */}
        {gemParticles.map((p) => (
          <div
            key={p.id}
            className="pp-gem-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              transform: `rotate(${p.rotation}deg) scale(${p.scale * (p.life / p.maxLife)})`,
              opacity: p.life / p.maxLife,
            }}
          >
            {p.emoji}
          </div>
        ))}

        {/* Sparkles */}
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="pp-sparkle"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontSize: `${s.size}px`,
              opacity: s.life / s.maxLife,
            }}
          >
            {"\u2728"}
          </div>
        ))}

        {/* Smoke puffs */}
        {smokePuffs.map((p) => (
          <div
            key={p.id}
            className="pp-smoke-puff"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          />
        ))}

        {/* Main pattern area */}
        {challenge && (
          <div className="pp-pattern-area">
            {/* Treasure map / scroll */}
            <div className={`pp-scroll ${scrollUnfurl ? "unfurled" : ""}`}>
              <div className="pp-scroll-top-rod" />
              <div className="pp-scroll-body">
                <div className="pp-scroll-header">
                  <span className="pp-map-x">{"\u2620\uFE0F"}</span>
                  <span className="pp-map-title">Decode the Map</span>
                  <span className="pp-map-x">{"\u2620\uFE0F"}</span>
                </div>

                {/* Pattern display as golden coins */}
                <div className="pp-pattern-strip">
                  {challenge.displayed.map((sym, i) => {
                    const isBlank = sym === null;
                    const isCurrentBlank =
                      isBlank && challenge.blanks[challenge.currentBlank] === i;
                    const isFutureBlank = isBlank && !isCurrentBlank;
                    const isFilled = filledCell === i;
                    const isWrong = wrongCell === i;

                    return (
                      <div
                        key={i}
                        className={`pp-coin ${isBlank ? "blank" : "filled"} ${
                          isCurrentBlank ? "active" : ""
                        } ${isFutureBlank ? "future" : ""} ${
                          isFilled ? "just-filled" : ""
                        } ${isWrong ? "wrong" : ""} ${
                          showResult === "correct" ? "all-correct" : ""
                        }`}
                      >
                        <div className="pp-coin-inner">
                          {sym ? (
                            <span className="pp-coin-emoji">{sym.emoji}</span>
                          ) : (
                            <span className="pp-coin-question">?</span>
                          )}
                        </div>
                        {isFilled && <div className="pp-coin-flash" />}
                      </div>
                    );
                  })}
                </div>

                {/* Pattern unit reveal */}
                {showPatternUnit && challenge.pattern && (
                  <div className="pp-unit-reveal">
                    <span className="pp-unit-label">{"\uD83D\uDD04"} Repeating unit:</span>
                    <div className="pp-unit-symbols">
                      {challenge.pattern.map((sym, i) => (
                        <span key={i} className="pp-unit-sym">{sym.emoji}</span>
                      ))}
                    </div>
                    <div className="pp-unit-arrows">
                      {challenge.pattern.map((_, i) => (
                        <span key={i} className="pp-unit-arrow">{"\u2191"}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="pp-scroll-bottom-rod" />
            </div>

            {/* Options as treasure items */}
            <div className="pp-options">
              <p className="pp-options-label">{"\uD83E\uDE99"} Choose the missing piece:</p>
              <div className="pp-options-grid">
                {challenge.options.map((opt) => (
                  <button
                    key={opt.emoji}
                    className="pp-option-btn"
                    onClick={() => handleOptionTap(opt)}
                    disabled={showResult !== null}
                  >
                    <div className="pp-option-crate">
                      <span className="pp-option-emoji">{opt.emoji}</span>
                    </div>
                    <span className="pp-option-name">{opt.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Result overlay */}
            {showResult === "correct" && (
              <div className="pp-result-correct">
                <div className="pp-result-burst" />
                <span className="pp-result-text">{"\uD83C\uDF89"} Treasure Unlocked! {"\uD83D\uDC8E"}</span>
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
    position: relative;
    background: linear-gradient(180deg, #030818 0%, #0a1628 30%, #0c1e3a 60%, #0a1628 100%);
  }

  /* ==================== OCEAN BACKGROUND ==================== */

  .pp-ocean-bg {
    position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
  }

  .pp-canvas {
    position: absolute; inset: 0; width: 100%; height: 100%;
  }

  .pp-ship-silhouette {
    position: absolute; bottom: 18%; left: 12%;
    animation: ppShipRock 4s ease-in-out infinite;
    transform-origin: center bottom;
    opacity: 0.25;
    filter: brightness(0.3);
  }

  .pp-ship-emoji { font-size: clamp(2.5rem, 6vw, 4rem); }

  @keyframes ppShipRock {
    0%, 100% { transform: rotate(-2deg) translateY(0px); }
    25% { transform: rotate(1deg) translateY(-3px); }
    50% { transform: rotate(-1deg) translateY(2px); }
    75% { transform: rotate(2deg) translateY(-2px); }
  }

  .pp-debris {
    position: absolute; font-size: 1.2rem; opacity: 0.2;
    animation: ppDebrisFloat 5s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes ppDebrisFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-4px) rotate(3deg); }
    50% { transform: translateY(2px) rotate(-2deg); }
    75% { transform: translateY(-2px) rotate(1deg); }
  }

  .pp-lantern-glow {
    position: absolute; top: 5%; left: 50%; transform: translateX(-50%);
    width: 80%; height: 50%;
    background: radial-gradient(ellipse at 50% 20%,
      rgba(251, 191, 36, 0.04) 0%,
      rgba(251, 191, 36, 0.01) 40%,
      transparent 70%
    );
    pointer-events: none;
    animation: ppLanternFlicker 3s ease-in-out infinite;
  }

  @keyframes ppLanternFlicker {
    0%, 100% { opacity: 0.8; }
    30% { opacity: 1; }
    50% { opacity: 0.7; }
    70% { opacity: 0.95; }
  }

  /* ==================== INTRO SCREEN ==================== */

  .pp-intro {
    position: relative; z-index: 10;
    height: 100%; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .pp-intro-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .pp-intro-ship {
    position: absolute; top: 10%;
    transition: left 0.1s linear;
    font-size: 1rem;
    animation: ppIntroShipBob 3s ease-in-out infinite;
    z-index: 5;
  }

  .pp-big-ship { font-size: clamp(3rem, 8vw, 5rem); filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.3)); }

  @keyframes ppIntroShipBob {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-8px) rotate(2deg); }
  }

  .pp-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .pp-logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem); font-weight: 900;
    background: linear-gradient(135deg, #fde68a, #fbbf24, #d97706);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    text-shadow: none;
    filter: drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3));
  }

  .pp-logo-icon { font-size: 2.5rem; animation: ppBounce 2s ease-in-out infinite; }
  .pp-logo-icon:last-child { animation-delay: 0.3s; }

  @keyframes ppBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  .pp-tagline { color: #fde68a; font-size: 1.1rem; margin-bottom: 2rem; text-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }

  .pp-instructions-card {
    background: rgba(15, 25, 50, 0.7);
    border: 2px solid rgba(251, 191, 36, 0.25);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(251, 191, 36, 0.1);
  }

  .pp-instructions-card h3 {
    color: #fde68a; font-size: 1.2rem; margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.2);
  }

  .pp-instruction { margin-bottom: 1.2rem; }
  .pp-instruction:last-child { margin-bottom: 0; }

  .pp-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.4rem; margin-bottom: 0.4rem;
  }

  .pp-coin-cell {
    width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fde68a, #d97706);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3);
  }

  .pp-coin-cell.blank {
    background: rgba(251, 191, 36, 0.15);
    border: 2px dashed rgba(251, 191, 36, 0.5);
    color: #fbbf24; font-weight: 700; font-size: 1rem;
    box-shadow: 0 0 12px rgba(251, 191, 36, 0.15);
  }

  .pp-arrow { color: #64748b; font-size: 1.2rem; }
  .pp-treasure-icons { font-size: 1.5rem; letter-spacing: 0.3rem; }
  .pp-instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .pp-hl-gold { color: #fbbf24; font-weight: 700; }
  .pp-hl-green { color: #4ade80; font-weight: 700; }

  .pp-start-btn, .pp-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: #1e1b4b;
    background: linear-gradient(135deg, #fde68a, #fbbf24, #d97706);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1);
  }

  .pp-start-btn:hover, .pp-next-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px rgba(251, 191, 36, 0.4), 0 0 80px rgba(251, 191, 36, 0.15);
  }

  .pp-start-btn:active, .pp-next-btn:active { transform: scale(0.97); }

  .pp-btn-icon { font-size: 1.2rem; }

  /* ==================== COMPLETE SCREEN ==================== */

  .pp-complete {
    position: relative; z-index: 10;
    height: 100%; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .pp-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .pp-treasure-island { margin-bottom: 0.5rem; }
  .pp-island-emoji { font-size: 4rem; animation: ppIslandBounce 2s ease-in-out infinite; display: inline-block; }

  @keyframes ppIslandBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .pp-complete-title {
    font-size: clamp(1.6rem, 6vw, 2.3rem); color: white; margin-bottom: 0.3rem;
    text-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
  }

  .pp-complete-subtitle {
    color: #fde68a; font-size: 1.1rem; margin-bottom: 1.5rem;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.2);
  }

  .pp-treasure-chest-area { margin-bottom: 1.5rem; }

  .pp-big-chest { margin-bottom: 0.5rem; }
  .pp-big-chest.open .pp-chest-emoji {
    font-size: 3rem; display: inline-block;
    animation: ppChestBounce 1s ease-in-out infinite;
  }

  @keyframes ppChestBounce {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(-3deg); }
    50% { transform: scale(1) rotate(0deg); }
    75% { transform: scale(1.1) rotate(3deg); }
  }

  .pp-treasure-display {
    display: flex; justify-content: center; gap: 0.3rem; flex-wrap: wrap;
  }

  .pp-treasure-piece {
    font-size: 1.8rem; display: inline-block;
    animation: ppTreasureFly 0.6s ease-out both;
  }

  @keyframes ppTreasureFly {
    0% { transform: translateY(30px) scale(0) rotate(-180deg); opacity: 0; }
    60% { transform: translateY(-10px) scale(1.2) rotate(10deg); opacity: 1; }
    100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
  }

  .pp-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }

  .pp-score-item {
    display: flex; flex-direction: column; align-items: center;
    background: rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 0.8rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .pp-score-label { font-size: 0.85rem; color: #94a3b8; margin-bottom: 0.3rem; }
  .pp-score-value {
    font-size: 2rem; font-weight: 900; color: white;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
  }

  .pp-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .pp-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .pp-menu-btn:hover { border-color: rgba(255, 255, 255, 0.4); color: white; background: rgba(255, 255, 255, 0.1); }

  .pp-sunk-ship { margin-bottom: 1rem; }
  .pp-sunk-emoji {
    font-size: 3.5rem; display: inline-block;
    animation: ppSinkShip 2s ease-in-out infinite;
    filter: hue-rotate(180deg) brightness(0.7);
  }

  @keyframes ppSinkShip {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(10px) rotate(5deg); }
  }

  /* ==================== PLAYING SCREEN ==================== */

  .pp-play {
    position: relative; z-index: 10;
    height: 100%; display: flex; flex-direction: column; overflow-y: auto;
  }

  .pp-play.pp-shake { animation: ppShake 0.5s ease; }

  @keyframes ppShake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-8px) rotate(-0.5deg); }
    30% { transform: translateX(8px) rotate(0.5deg); }
    50% { transform: translateX(-6px) rotate(-0.3deg); }
    70% { transform: translateX(6px) rotate(0.3deg); }
    90% { transform: translateX(-3px); }
  }

  .pp-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem;
    background: linear-gradient(180deg, rgba(5, 10, 30, 0.8) 0%, rgba(5, 10, 30, 0.4) 100%);
    border-bottom: 1px solid rgba(251, 191, 36, 0.1);
    z-index: 50;
  }

  .pp-header-left, .pp-header-right { display: flex; align-items: center; gap: 0.5rem; }
  .pp-header-center { display: flex; align-items: center; gap: 0.5rem; }

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

  .pp-lives { font-size: 1rem; }

  .pp-treasure-badge, .pp-score-badge-play {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.4rem 0.8rem; border-radius: 16px;
    font-weight: 700; font-size: 0.85rem;
  }

  .pp-treasure-badge {
    background: rgba(168, 85, 247, 0.15);
    border: 1px solid rgba(168, 85, 247, 0.3);
    color: #c4b5fd;
  }

  .pp-score-badge-play {
    background: rgba(251, 191, 36, 0.15);
    border: 1px solid rgba(251, 191, 36, 0.3);
    color: #fde68a;
  }

  /* Progress bar */
  .pp-progress-bar {
    position: relative; margin: 0.4rem 1rem; height: 22px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 11px; overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .pp-progress-fill {
    position: absolute; left: 0; top: 0; bottom: 0;
    background: linear-gradient(90deg, #d97706, #fbbf24, #fde68a);
    border-radius: 11px;
    transition: width 0.5s ease;
    box-shadow: 0 0 12px rgba(251, 191, 36, 0.3);
  }

  .pp-progress-text {
    position: relative; z-index: 2; display: flex; align-items: center; justify-content: center;
    height: 100%; font-size: 0.7rem; font-weight: 700; color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  /* Chest indicator */
  .pp-chest-indicator {
    text-align: center; padding: 0.3rem; position: relative;
  }

  .pp-chest-icon { font-size: 1.8rem; display: inline-block; transition: transform 0.3s ease; }

  .pp-chest-indicator.open .pp-chest-icon {
    animation: ppChestOpenPop 0.6s ease;
  }

  .pp-chest-rays {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 120px; height: 120px; border-radius: 50%;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%);
    animation: ppRaysPulse 0.8s ease-out forwards;
    pointer-events: none;
  }

  @keyframes ppChestOpenPop {
    0% { transform: scale(1); }
    30% { transform: scale(1.4) rotate(-10deg); }
    60% { transform: scale(1.1) rotate(5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  @keyframes ppRaysPulse {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  }

  /* Gem particles */
  .pp-gem-particle {
    position: absolute; font-size: 1.3rem; pointer-events: none; z-index: 100;
  }

  /* Sparkles */
  .pp-sparkle {
    position: absolute; pointer-events: none; z-index: 100;
  }

  /* Smoke puffs */
  .pp-smoke-puff {
    position: absolute; width: 40px; height: 40px; border-radius: 50%;
    background: radial-gradient(circle, rgba(100, 100, 100, 0.6) 0%, transparent 70%);
    pointer-events: none; z-index: 100;
    animation: ppSmokeExpand 0.8s ease-out forwards;
  }

  @keyframes ppSmokeExpand {
    0% { transform: scale(0.3); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
  }

  /* ==================== SCROLL / TREASURE MAP ==================== */

  .pp-pattern-area {
    flex: 1; display: flex; flex-direction: column; padding: 0.5rem 1rem 1rem;
    gap: 0.8rem; justify-content: center;
  }

  .pp-scroll {
    transform: scaleY(0);
    transform-origin: top center;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .pp-scroll.unfurled { transform: scaleY(1); }

  .pp-scroll-top-rod, .pp-scroll-bottom-rod {
    height: 8px; margin: 0 1rem;
    background: linear-gradient(180deg, #8B6914, #d4a543, #8B6914);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .pp-scroll-body {
    background: linear-gradient(135deg, #f5e6c8 0%, #e8d5a8 30%, #f0dbb8 50%, #e0c898 80%, #d4b880 100%);
    margin: 0 1.5rem; padding: 1rem;
    border-left: 3px solid rgba(139, 105, 20, 0.3);
    border-right: 3px solid rgba(139, 105, 20, 0.3);
    position: relative;
    box-shadow: inset 0 0 30px rgba(139, 105, 20, 0.15);
  }

  /* Burnt edge effect */
  .pp-scroll-body::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background:
      radial-gradient(ellipse at 0% 0%, rgba(100, 60, 10, 0.2) 0%, transparent 40%),
      radial-gradient(ellipse at 100% 0%, rgba(100, 60, 10, 0.15) 0%, transparent 35%),
      radial-gradient(ellipse at 100% 100%, rgba(100, 60, 10, 0.2) 0%, transparent 40%),
      radial-gradient(ellipse at 0% 100%, rgba(100, 60, 10, 0.15) 0%, transparent 35%);
    pointer-events: none;
  }

  .pp-scroll-header {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .pp-map-x { font-size: 1.2rem; }
  .pp-map-title { font-size: 0.9rem; font-weight: 800; color: #5c3d10; letter-spacing: 0.05em; }

  /* ==================== PATTERN COINS ==================== */

  .pp-pattern-strip {
    display: flex; justify-content: center; gap: 0.4rem; flex-wrap: wrap;
    padding: 0.5rem;
  }

  .pp-coin {
    width: 52px; height: 52px; border-radius: 50%; position: relative;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s ease;
  }

  .pp-coin-inner {
    width: 100%; height: 100%; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    position: relative; z-index: 2;
  }

  .pp-coin.filled .pp-coin-inner {
    background: radial-gradient(circle at 35% 35%, #fde68a 0%, #d4a543 50%, #b8860b 100%);
    box-shadow:
      0 3px 8px rgba(0, 0, 0, 0.3),
      inset 0 1px 3px rgba(255, 255, 255, 0.4),
      inset 0 -2px 4px rgba(0, 0, 0, 0.15),
      0 0 12px rgba(251, 191, 36, 0.2);
    border: 2px solid rgba(184, 134, 11, 0.5);
  }

  .pp-coin.blank .pp-coin-inner {
    background: rgba(139, 105, 20, 0.15);
    border: 3px dashed rgba(139, 105, 20, 0.4);
  }

  .pp-coin.active .pp-coin-inner {
    border-color: #d97706;
    background: rgba(251, 191, 36, 0.2);
    animation: ppActivePulse 1.2s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.15);
  }

  @keyframes ppActivePulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(251, 191, 36, 0.4); }
    50% { transform: scale(1.08); box-shadow: 0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.2); }
  }

  .pp-coin.future .pp-coin-inner { opacity: 0.4; }

  .pp-coin.just-filled {
    animation: ppCoinFlip 0.5s ease;
  }

  @keyframes ppCoinFlip {
    0% { transform: rotateY(0deg) scale(1); }
    50% { transform: rotateY(90deg) scale(1.2); }
    100% { transform: rotateY(0deg) scale(1); }
  }

  .pp-coin-flash {
    position: absolute; inset: -8px; border-radius: 50%;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, transparent 70%);
    animation: ppFlashOut 0.6s ease-out forwards;
    pointer-events: none; z-index: 1;
  }

  @keyframes ppFlashOut {
    0% { transform: scale(0.5); opacity: 1; }
    100% { transform: scale(2.5); opacity: 0; }
  }

  .pp-coin.wrong .pp-coin-inner {
    animation: ppWrongShake 0.4s ease;
    border-color: #ef4444;
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.5);
  }

  @keyframes ppWrongShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }

  .pp-coin.all-correct .pp-coin-inner {
    box-shadow: 0 0 15px rgba(74, 222, 128, 0.4), 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  .pp-coin-emoji { font-size: 1.5rem; }

  .pp-coin-question {
    font-size: 1.3rem; font-weight: 900; color: #8B6914;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  /* ==================== PATTERN UNIT REVEAL ==================== */

  .pp-unit-reveal {
    display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
    padding: 0.5rem 1rem; margin-top: 0.5rem;
    background: rgba(74, 222, 128, 0.1);
    border: 1px solid rgba(74, 222, 128, 0.2);
    border-radius: 12px;
    animation: ppUnitFade 0.4s ease;
  }

  @keyframes ppUnitFade {
    from { opacity: 0; transform: translateY(8px) scaleY(0.8); }
    to { opacity: 1; transform: translateY(0) scaleY(1); }
  }

  .pp-unit-label { color: #4ade80; font-size: 0.8rem; font-weight: 600; }
  .pp-unit-symbols { display: flex; gap: 0.4rem; }
  .pp-unit-sym {
    font-size: 1.3rem;
    animation: ppUnitSymPop 0.3s ease both;
  }
  .pp-unit-sym:nth-child(2) { animation-delay: 0.1s; }
  .pp-unit-sym:nth-child(3) { animation-delay: 0.2s; }
  .pp-unit-sym:nth-child(4) { animation-delay: 0.3s; }

  @keyframes ppUnitSymPop {
    0% { transform: scale(0); }
    60% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .pp-unit-arrows { display: flex; gap: 0.4rem; }
  .pp-unit-arrow {
    color: #4ade80; font-size: 0.8rem; font-weight: 800;
    animation: ppArrowBounce 0.8s ease-in-out infinite;
  }
  .pp-unit-arrow:nth-child(2) { animation-delay: 0.15s; }
  .pp-unit-arrow:nth-child(3) { animation-delay: 0.3s; }
  .pp-unit-arrow:nth-child(4) { animation-delay: 0.45s; }

  @keyframes ppArrowBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  /* ==================== OPTIONS / TREASURE ITEMS ==================== */

  .pp-options { text-align: center; }
  .pp-options-label { color: #cbd5e1; font-size: 0.85rem; margin-bottom: 0.6rem; }

  .pp-options-grid {
    display: flex; justify-content: center; gap: 0.6rem; flex-wrap: wrap;
  }

  .pp-option-btn {
    display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
    padding: 0.6rem 0.8rem;
    background: rgba(15, 25, 50, 0.6);
    border: 2px solid rgba(251, 191, 36, 0.2);
    border-radius: 16px;
    cursor: pointer; transition: all 0.25s ease;
    font-family: 'Nunito', sans-serif; min-width: 72px;
    backdrop-filter: blur(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .pp-option-crate {
    width: 48px; height: 48px; border-radius: 12px;
    background: linear-gradient(180deg, rgba(139, 105, 20, 0.3) 0%, rgba(100, 70, 10, 0.4) 100%);
    border: 2px solid rgba(139, 105, 20, 0.4);
    display: flex; align-items: center; justify-content: center;
    position: relative;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  /* Plank texture lines on crate */
  .pp-option-crate::before {
    content: '';
    position: absolute; inset: 2px;
    border-radius: 10px;
    background:
      linear-gradient(0deg, transparent 45%, rgba(139, 105, 20, 0.15) 45%, rgba(139, 105, 20, 0.15) 55%, transparent 55%);
    pointer-events: none;
  }

  .pp-option-btn:hover:not(:disabled) {
    border-color: #fbbf24;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(251, 191, 36, 0.2);
  }

  .pp-option-btn:hover:not(:disabled) .pp-option-crate {
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.15);
    border-color: rgba(251, 191, 36, 0.6);
  }

  .pp-option-btn:active:not(:disabled) { transform: scale(0.95); }
  .pp-option-btn:disabled { opacity: 0.5; cursor: default; }

  .pp-option-emoji { font-size: 1.6rem; }
  .pp-option-name { font-size: 0.65rem; color: #94a3b8; font-weight: 600; }

  /* ==================== RESULT OVERLAYS ==================== */

  .pp-result-correct {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    pointer-events: none; z-index: 200;
  }

  .pp-result-burst {
    position: absolute;
    width: 200px; height: 200px; border-radius: 50%;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, transparent 70%);
    animation: ppBurstExpand 0.8s ease-out forwards;
  }

  @keyframes ppBurstExpand {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(5); opacity: 0; }
  }

  .pp-result-text {
    position: relative; z-index: 5;
    padding: 0.8rem 1.8rem;
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.9), rgba(217, 119, 6, 0.9));
    border-radius: 30px;
    font-size: 1.2rem; font-weight: 900; color: #1e1b4b;
    box-shadow: 0 10px 40px rgba(251, 191, 36, 0.5), 0 0 60px rgba(251, 191, 36, 0.2);
    animation: ppResultPop 0.5s ease;
  }

  @keyframes ppResultPop {
    0% { transform: scale(0) rotate(-10deg); opacity: 0; }
    60% { transform: scale(1.2) rotate(3deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  /* ==================== RESPONSIVE ==================== */

  @media (max-width: 600px) {
    .pp-coin { width: 42px; height: 42px; }
    .pp-coin-emoji { font-size: 1.2rem; }
    .pp-coin-question { font-size: 1rem; }
    .pp-option-btn { padding: 0.5rem 0.6rem; min-width: 60px; }
    .pp-option-crate { width: 40px; height: 40px; }
    .pp-option-emoji { font-size: 1.3rem; }
    .pp-scroll-body { padding: 0.8rem 0.5rem; margin: 0 0.5rem; }
    .pp-scroll-top-rod, .pp-scroll-bottom-rod { margin: 0 0.5rem; }
    .pp-header-center { display: none; }
    .pp-pattern-strip { gap: 0.3rem; }
    .pp-intro-ship { display: none; }
  }

  @media (max-width: 400px) {
    .pp-coin { width: 36px; height: 36px; }
    .pp-coin-emoji { font-size: 1rem; }
    .pp-option-crate { width: 36px; height: 36px; }
    .pp-option-emoji { font-size: 1.1rem; }
  }
`;
