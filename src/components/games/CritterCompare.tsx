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

interface CritterPos {
  x: number;
  y: number;
  delay: number;
  size: number;
  wobble: number;
  flip: boolean;
}

interface CritterGroup {
  emoji: string;
  name: string;
  count: number;
  positions: CritterPos[];
}

interface CompareChallenge {
  left: CritterGroup;
  right: CritterGroup;
  mode: CompareMode;
  correctAnswer: "left" | "right" | "equal";
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
  maxLife: number;
}

interface StarBurst {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  opacity: number;
  hue: number;
}

// Australian animals with animation hints
const AUSSIE_CRITTERS = [
  { emoji: "\uD83E\uDD98", name: "Kangaroo", anim: "hop" },
  { emoji: "\uD83D\uDC28", name: "Koala", anim: "sway" },
  { emoji: "\uD83E\uDD86", name: "Duck", anim: "waddle" },
  { emoji: "\uD83D\uDC0A", name: "Croc", anim: "snap" },
  { emoji: "\uD83E\uDD9C", name: "Parrot", anim: "flap" },
  { emoji: "\uD83D\uDC22", name: "Turtle", anim: "crawl" },
  { emoji: "\uD83D\uDC1B", name: "Bug", anim: "wiggle" },
  { emoji: "\uD83E\uDD8B", name: "Butterfly", anim: "flutter" },
  { emoji: "\uD83D\uDC0C", name: "Snail", anim: "crawl" },
  { emoji: "\uD83D\uDC1D", name: "Bee", anim: "buzz" },
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

let dustIdCounter = 0;

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
  const [selectedGroup, setSelectedGroup] = useState<"left" | "right" | null>(null);
  const [symbolAnim, setSymbolAnim] = useState(false);
  const [celebrationParticles, setCelebrationParticles] = useState<DustParticle[]>([]);
  const [starBursts, setStarBursts] = useState<StarBurst[]>([]);
  const [countAnim, setCountAnim] = useState({ left: 0, right: 0 });
  const [introAnimPhase, setIntroAnimPhase] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const dustParticlesRef = useRef<DustParticle[]>([]);
  const cloudOffsetRef = useRef(0);
  const grassTimeRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Ambient animation loop for outback atmosphere
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    // Seed ambient dust
    if (dustParticlesRef.current.length === 0) {
      for (let i = 0; i < 40; i++) {
        dustParticlesRef.current.push({
          id: ++dustIdCounter,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.3) * 0.4,
          vy: -Math.random() * 0.2 - 0.05,
          size: 1 + Math.random() * 2.5,
          opacity: 0.1 + Math.random() * 0.3,
          life: Math.random() * 500,
          maxLife: 400 + Math.random() * 400,
        });
      }
    }

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Day/night tint overlay based on level
      const nightFactor = Math.min((level - 1) / 10, 0.5);
      if (nightFactor > 0) {
        ctx.fillStyle = `rgba(20, 10, 40, ${nightFactor * 0.3})`;
        ctx.fillRect(0, 0, W, H);
      }

      // Distant hills
      drawHills(ctx, W, H);

      // Heat shimmer at horizon
      drawHeatShimmer(ctx, W, H);

      // Eucalyptus silhouettes
      drawTrees(ctx, W, H);

      // Ground with grass tufts
      drawGround(ctx, W, H);

      // Floating dust particles
      drawDustParticles(ctx, W, H);

      // Animated clouds
      drawClouds(ctx, W, H);

      cloudOffsetRef.current += 0.15;
      grassTimeRef.current += 0.02;

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  const drawHills = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    // Far hills
    ctx.beginPath();
    ctx.moveTo(0, H * 0.55);
    for (let x = 0; x <= W; x += 2) {
      const y = H * 0.55 + Math.sin(x * 0.004) * 25 + Math.sin(x * 0.008 + 1) * 15;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
    ctx.fillStyle = "rgba(120, 60, 30, 0.25)";
    ctx.fill();

    // Uluru-like rock formation
    ctx.beginPath();
    const rockX = W * 0.7;
    const rockW = W * 0.12;
    const rockH = H * 0.08;
    const rockY = H * 0.52;
    ctx.moveTo(rockX - rockW, rockY + rockH);
    ctx.quadraticCurveTo(rockX - rockW * 0.8, rockY - rockH * 0.3, rockX - rockW * 0.3, rockY - rockH);
    ctx.quadraticCurveTo(rockX, rockY - rockH * 1.2, rockX + rockW * 0.3, rockY - rockH);
    ctx.quadraticCurveTo(rockX + rockW * 0.8, rockY - rockH * 0.3, rockX + rockW, rockY + rockH);
    ctx.closePath();
    ctx.fillStyle = "rgba(180, 80, 30, 0.3)";
    ctx.fill();

    // Near hills
    ctx.beginPath();
    ctx.moveTo(0, H * 0.65);
    for (let x = 0; x <= W; x += 2) {
      const y = H * 0.65 + Math.sin(x * 0.006 + 2) * 20 + Math.sin(x * 0.012 + 3) * 10;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
    ctx.fillStyle = "rgba(100, 50, 20, 0.3)";
    ctx.fill();
  };

  const drawHeatShimmer = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const shimmerY = H * 0.56;
    const time = Date.now() * 0.001;
    ctx.save();
    ctx.globalAlpha = 0.06;
    for (let x = 0; x < W; x += 3) {
      const offset = Math.sin(x * 0.02 + time * 2) * 3 + Math.sin(x * 0.01 + time * 1.5) * 2;
      ctx.fillStyle = "rgba(255, 200, 100, 0.8)";
      ctx.fillRect(x, shimmerY + offset, 3, 2);
    }
    ctx.restore();
  };

  const drawTrees = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const time = grassTimeRef.current;
    const treePositions = [
      { x: W * 0.03, y: H * 0.62, scale: 0.8 },
      { x: W * 0.93, y: H * 0.6, scale: 0.9 },
      { x: W * 0.08, y: H * 0.68, scale: 0.6 },
      { x: W * 0.95, y: H * 0.66, scale: 0.7 },
    ];

    treePositions.forEach(({ x, y, scale }) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      // Trunk
      ctx.fillStyle = "rgba(60, 30, 15, 0.6)";
      ctx.fillRect(-3, -60, 6, 70);

      // Branches with sway
      const sway = Math.sin(time + x * 0.01) * 3;
      ctx.fillStyle = "rgba(40, 70, 30, 0.5)";

      // Left branch cluster
      ctx.beginPath();
      ctx.ellipse(-18 + sway, -55, 22, 14, -0.3, 0, Math.PI * 2);
      ctx.fill();

      // Right branch cluster
      ctx.beginPath();
      ctx.ellipse(15 + sway * 0.7, -62, 20, 12, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Top cluster
      ctx.beginPath();
      ctx.ellipse(sway * 0.5, -72, 16, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Droopy leaves
      ctx.strokeStyle = "rgba(40, 70, 30, 0.4)";
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 5; i++) {
        const lx = -20 + i * 10 + sway * (0.5 + i * 0.1);
        const ly = -50 - i * 5;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.quadraticCurveTo(lx + 5, ly + 15, lx - 3 + sway, ly + 25);
        ctx.stroke();
      }

      ctx.restore();
    });
  };

  const drawGround = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const groundY = H * 0.78;
    const time = grassTimeRef.current;

    // Red dirt base
    const grd = ctx.createLinearGradient(0, groundY, 0, H);
    grd.addColorStop(0, "rgba(140, 65, 25, 0.35)");
    grd.addColorStop(0.5, "rgba(120, 55, 20, 0.4)");
    grd.addColorStop(1, "rgba(80, 40, 15, 0.5)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, groundY, W, H - groundY);

    // Dirt texture dots
    ctx.fillStyle = "rgba(100, 50, 20, 0.15)";
    for (let i = 0; i < 60; i++) {
      const dx = (i * 137.5) % W;
      const dy = groundY + 5 + ((i * 73.3) % (H - groundY - 10));
      ctx.beginPath();
      ctx.arc(dx, dy, 1 + (i % 3), 0, Math.PI * 2);
      ctx.fill();
    }

    // Grass tufts
    ctx.strokeStyle = "rgba(80, 120, 40, 0.4)";
    ctx.lineWidth = 1.5;
    const grassPositions = [];
    for (let i = 0; i < 25; i++) {
      grassPositions.push({
        x: (i * W) / 25 + ((i * 47) % 30),
        y: groundY - 2 + ((i * 31) % 8),
      });
    }

    grassPositions.forEach(({ x, y }) => {
      const sway = Math.sin(time * 1.5 + x * 0.01) * 3;
      for (let b = -2; b <= 2; b++) {
        ctx.beginPath();
        ctx.moveTo(x + b * 2, y);
        ctx.quadraticCurveTo(
          x + b * 3 + sway,
          y - 8,
          x + b * 4 + sway * 1.5,
          y - 12 - Math.abs(b) * 2
        );
        ctx.stroke();
      }
    });
  };

  const drawDustParticles = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    dustParticlesRef.current.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life += 1;

      // Fade in and out
      const lifeRatio = p.life / p.maxLife;
      let alpha = p.opacity;
      if (lifeRatio < 0.1) alpha *= lifeRatio / 0.1;
      if (lifeRatio > 0.8) alpha *= (1 - lifeRatio) / 0.2;

      // Wrap around
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10 || p.life > p.maxLife) {
        p.y = H * 0.6 + Math.random() * H * 0.4;
        p.x = Math.random() * W;
        p.life = 0;
        p.maxLife = 400 + Math.random() * 400;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210, 170, 120, ${alpha})`;
      ctx.fill();
    });
  };

  const drawClouds = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const offset = cloudOffsetRef.current;
    ctx.save();
    ctx.globalAlpha = 0.12;

    const clouds = [
      { x: 0.15, y: 0.08, w: 80, h: 25 },
      { x: 0.45, y: 0.12, w: 100, h: 30 },
      { x: 0.75, y: 0.06, w: 70, h: 20 },
      { x: 0.3, y: 0.18, w: 55, h: 18 },
    ];

    clouds.forEach((cloud) => {
      const cx = ((cloud.x * W + offset * (0.5 + cloud.y)) % (W + 200)) - 100;
      const cy = cloud.y * H;

      ctx.fillStyle = "rgba(255, 240, 220, 0.8)";
      ctx.beginPath();
      ctx.ellipse(cx, cy, cloud.w, cloud.h, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx - cloud.w * 0.4, cy + 5, cloud.w * 0.6, cloud.h * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx + cloud.w * 0.35, cy + 3, cloud.w * 0.5, cloud.h * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  };

  // Celebration dust burst
  const spawnCelebration = useCallback((side: "left" | "right" | "center", isCorrect: boolean) => {
    const baseX = side === "left" ? 25 : side === "right" ? 75 : 50;
    const particles: DustParticle[] = [];
    const count = isCorrect ? 30 : 15;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
      const speed = 1 + Math.random() * 3;
      particles.push({
        id: ++dustIdCounter,
        x: baseX,
        y: 50,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2 + Math.random() * 4,
        opacity: isCorrect ? 0.8 : 0.5,
        life: 0,
        maxLife: 60 + Math.random() * 40,
      });
    }
    setCelebrationParticles(particles);
    setTimeout(() => setCelebrationParticles([]), 1500);

    if (isCorrect) {
      const stars: StarBurst[] = [];
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        stars.push({
          id: ++dustIdCounter,
          x: baseX,
          y: 45,
          angle,
          speed: 2 + Math.random() * 2,
          size: 8 + Math.random() * 12,
          opacity: 1,
          hue: 40 + Math.random() * 30,
        });
      }
      setStarBursts(stars);
      setTimeout(() => setStarBursts([]), 1200);
    }
  }, []);

  // Count animation
  const animateCount = useCallback((leftTarget: number, rightTarget: number) => {
    setCountAnim({ left: 0, right: 0 });
    const maxCount = Math.max(leftTarget, rightTarget);
    const duration = Math.min(maxCount * 80, 800);
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCountAnim({
        left: Math.round(eased * leftTarget),
        right: Math.round(eased * rightTarget),
      });
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  const generatePositions = useCallback(
    (count: number): CritterPos[] => {
      const positions: CritterPos[] = [];
      // Natural cluster layout with varied sizing
      const cols = Math.ceil(Math.sqrt(count * 1.5));
      const cellW = 75 / cols;
      const cellH = 70 / Math.ceil(count / cols);

      for (let i = 0; i < count; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        // Add randomness for natural clustering
        const jitterX = (Math.random() - 0.5) * cellW * 0.7;
        const jitterY = (Math.random() - 0.5) * cellH * 0.5;
        positions.push({
          x: 12 + col * cellW + cellW * 0.5 + jitterX,
          y: 8 + row * cellH + cellH * 0.5 + jitterY,
          delay: i * 0.07 + Math.random() * 0.05,
          size: 0.8 + Math.random() * 0.4,
          wobble: Math.random() * Math.PI * 2,
          flip: Math.random() > 0.5,
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

      const shuffled = [...AUSSIE_CRITTERS].sort(() => Math.random() - 0.5);
      const leftCritter = shuffled[0];
      const rightCritter = shuffled[1];

      const modes: CompareMode[] =
        lvl <= 2 ? ["more", "fewer"] : ["more", "fewer", "equal"];
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
    if (lvl < 3) {
      setTimerMax(0);
      setTimer(0);
      return;
    }
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
      setSelectedGroup(null);
      setSymbolAnim(false);
      setCelebrationParticles([]);
      setStarBursts([]);

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
      setTimeout(() => setScreen("levelComplete"), 600);
    } else {
      setTimeout(() => {
        setShowResult(null);
        setShowCounts(false);
        setSelectedGroup(null);
        setSymbolAnim(false);
        const ch = generateChallenge(level);
        setChallenge(ch);
        startTimer(level);
      }, 1500);
    }
  }, [comparesCompleted, comparesNeeded, generateChallenge, level, startTimer]);

  // Timer reaching zero
  useEffect(() => {
    if (screen !== "playing" || !challenge || timerMax === 0) return;
    if (timer <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      setShowResult("wrong");
      setShowCounts(true);
      if (challenge) {
        animateCount(challenge.left.count, challenge.right.count);
      }
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 500);
      spawnCelebration("center", false);
      setStreak(0);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const handleAnswer = useCallback(
    (answer: "left" | "right" | "equal") => {
      if (showResult || !challenge) return;
      if (timerRef.current) clearInterval(timerRef.current);

      setSelectedGroup(answer === "equal" ? null : answer);
      setShowCounts(true);
      animateCount(challenge.left.count, challenge.right.count);

      setTimeout(() => setSymbolAnim(true), 400);

      if (answer === challenge.correctAnswer) {
        const timeBonus = timerMax > 0 ? Math.floor(timer * 3) : 0;
        const streakBonus = streak * 3;
        setScore((s) => s + 15 + timeBonus + streakBonus);
        setShowResult("correct");
        const newStreak = streak + 1;
        setStreak(newStreak);
        if (newStreak > bestStreak) setBestStreak(newStreak);

        const celebSide = challenge.correctAnswer === "equal" ? "center" : challenge.correctAnswer;
        spawnCelebration(celebSide, true);
        advanceToNext();
      } else {
        setShowResult("wrong");
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 500);
        setStreak(0);
        spawnCelebration("center", false);
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
    [showResult, challenge, timer, timerMax, streak, bestStreak, lives, advanceToNext, animateCount, spawnCelebration]
  );

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Intro animation phases
  useEffect(() => {
    if (screen !== "intro") return;
    const t1 = setTimeout(() => setIntroAnimPhase(1), 300);
    const t2 = setTimeout(() => setIntroAnimPhase(2), 800);
    const t3 = setTimeout(() => setIntroAnimPhase(3), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [screen]);

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  const timerPercent = timerMax > 0 ? (timer / timerMax) * 100 : 100;

  const getComparisonSymbol = () => {
    if (!challenge) return "=";
    if (challenge.left.count > challenge.right.count) return ">";
    if (challenge.left.count < challenge.right.count) return "<";
    return "=";
  };

  // Sun position based on timer (sinks as timer runs out)
  const sunY = timerMax > 0 ? 8 + (100 - timerPercent) * 0.25 : 12;

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="cc-game" ref={containerRef}>
        <style>{ccStyles}</style>
        <canvas ref={canvasRef} className="cc-ambient-canvas" />
        <div className="cc-intro">
          <div className="cc-intro-bg">
            {/* Parade of critters walking across */}
            {AUSSIE_CRITTERS.slice(0, 8).map((c, i) => (
              <div
                key={i}
                className="cc-bg-critter-parade"
                style={{
                  animationDelay: `${i * 1.2}s`,
                  bottom: `${12 + (i % 3) * 6}%`,
                  animationDuration: `${10 + i * 0.5}s`,
                }}
              >
                {c.emoji}
              </div>
            ))}
            {/* Animated sunset clouds */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`cloud-${i}`}
                className="cc-intro-cloud"
                style={{
                  top: `${5 + i * 7}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${18 + i * 4}s`,
                  opacity: 0.15 + i * 0.03,
                }}
              />
            ))}
            {/* Boomerang decorations */}
            <div className="cc-boomerang cc-boomerang-1">
              <svg viewBox="0 0 60 40" width="60" height="40">
                <path d="M5,35 Q10,5 30,8 Q50,10 55,30" stroke="rgba(200,150,80,0.3)" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="cc-boomerang cc-boomerang-2">
              <svg viewBox="0 0 60 40" width="50" height="33">
                <path d="M5,35 Q10,5 30,8 Q50,10 55,30" stroke="rgba(200,150,80,0.25)" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className={`cc-intro-content ${introAnimPhase >= 1 ? "cc-intro-visible" : ""}`}>
            <div className="cc-logo">
              <span className="cc-logo-icon">{"\uD83E\uDD98"}</span>
              <h1>Critter Compare</h1>
              <span className="cc-logo-icon">{"\uD83D\uDC28"}</span>
            </div>
            <p className="cc-tagline">Count the critters in the Australian outback!</p>
            <div className={`cc-instructions-card ${introAnimPhase >= 2 ? "cc-card-visible" : ""}`}>
              <h3>How to Play</h3>
              <div className="cc-instruction">
                <div className="cc-instruction-visual">
                  <span className="cc-mini-group-box">
                    <span className="cc-mini-critter">{"\uD83E\uDD98"}</span>
                    <span className="cc-mini-critter">{"\uD83E\uDD98"}</span>
                    <span className="cc-mini-critter">{"\uD83E\uDD98"}</span>
                  </span>
                  <span className="cc-vs-intro">vs</span>
                  <span className="cc-mini-group-box">
                    <span className="cc-mini-critter">{"\uD83D\uDC28"}</span>
                    <span className="cc-mini-critter">{"\uD83D\uDC28"}</span>
                  </span>
                </div>
                <p>
                  Two groups of <span className="cc-hl-green">CRITTERS</span> appear
                  in paddocks!
                </p>
              </div>
              <div className="cc-instruction">
                <div className="cc-instruction-visual">
                  <span className="cc-wooden-sign-mini">
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
                  <span className="cc-symbol-preview">{">"}</span>
                  <span className="cc-symbol-preview">{"<"}</span>
                  <span className="cc-symbol-preview">{"="}</span>
                </div>
                <p>
                  Learn <span className="cc-hl-blue">GREATER THAN</span>,{" "}
                  <span className="cc-hl-blue">LESS THAN</span>, and{" "}
                  <span className="cc-hl-blue">EQUAL</span>!
                </p>
              </div>
            </div>
            <button className={`cc-start-btn ${introAnimPhase >= 3 ? "cc-btn-visible" : ""}`} onClick={startGame}>
              <span className="cc-btn-hat">{"\uD83E\uDEB6"}</span>
              Start Counting!
              <span className="cc-btn-hat">{"\uD83E\uDD98"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="cc-game" ref={containerRef}>
        <style>{ccStyles}</style>
        <canvas ref={canvasRef} className="cc-ambient-canvas" />
        <div className="cc-complete">
          <div className="cc-complete-bg">
            {/* Golden star shower */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="cc-falling-star"
                style={{
                  left: `${5 + Math.random() * 90}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                {"\u2B50"}
              </div>
            ))}
          </div>
          <div className="cc-complete-content">
            <h1 className="cc-complete-title">
              {"\uD83C\uDF1F"} Level {level} Complete! {"\uD83E\uDD98"}
            </h1>
            <div className="cc-critter-parade-complete">
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
      <div className="cc-game" ref={containerRef}>
        <style>{ccStyles}</style>
        <canvas ref={canvasRef} className="cc-ambient-canvas" />
        <div className="cc-complete">
          <div className="cc-complete-content">
            <h1 className="cc-complete-title cc-gameover-title">
              {"\uD83D\uDE22"} The critters ran away!
            </h1>
            <div className="cc-gameover-critters">
              {AUSSIE_CRITTERS.slice(0, 4).map((c, i) => (
                <span
                  key={i}
                  className="cc-scatter-critter"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {c.emoji}
                </span>
              ))}
            </div>
            <p className="cc-gameover-subtitle">
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
    <div className="cc-game" ref={containerRef}>
      <style>{ccStyles}</style>
      <canvas ref={canvasRef} className="cc-ambient-canvas" />

      {/* Sun indicator (timer visual) */}
      <div
        className="cc-sun"
        style={{
          top: `${sunY}%`,
          opacity: timerMax > 0 ? 0.7 + (timerPercent / 100) * 0.3 : 0.9,
          filter: `hue-rotate(${timerPercent < 30 ? 20 : 0}deg)`,
        }}
      >
        <div className="cc-sun-core" />
        <div className="cc-sun-glow" />
        <div className="cc-sun-rays" />
      </div>

      <div className={`cc-play ${shakeScreen ? "cc-shake" : ""}`}>
        {/* Header */}
        <div className="cc-header">
          <div className="cc-header-left">
            <button
              className="cc-back-btn"
              onClick={() => {
                if (timerRef.current) clearInterval(timerRef.current);
                onExit ? onExit() : setScreen("intro");
              }}
            >
              {"\u2190"}
            </button>
            <div className="cc-level-badge">Level {level}</div>
          </div>
          <div className="cc-header-center">
            <span className="cc-lives">{livesDisplay.join(" ")}</span>
            {streak >= 2 && (
              <span className={`cc-streak-badge ${streak >= 5 ? "cc-streak-fire" : ""}`}>
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

        {/* Timer bar */}
        {timerMax > 0 && (
          <div className="cc-timer-bar">
            <div
              className={`cc-timer-fill ${timerPercent < 30 ? "cc-timer-danger" : timerPercent < 60 ? "cc-timer-warn" : ""}`}
              style={{ width: `${timerPercent}%` }}
            />
          </div>
        )}

        {/* Progress */}
        <div className="cc-progress">
          <div className="cc-progress-dots">
            {Array.from({ length: comparesNeeded }, (_, i) => (
              <div
                key={i}
                className={`cc-progress-dot ${i < comparesCompleted ? "cc-dot-done" : i === comparesCompleted ? "cc-dot-current" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Question prompt - wooden sign style */}
        {challenge && (
          <div className="cc-prompt-sign">
            <div className="cc-sign-post cc-sign-post-left" />
            <div className="cc-sign-board">
              <span className="cc-prompt-emoji">{MODE_EMOJIS[challenge.mode]}</span>
              <span className="cc-prompt-text">{MODE_PROMPTS[challenge.mode]}</span>
            </div>
            <div className="cc-sign-post cc-sign-post-right" />
          </div>
        )}

        {/* Comparison area */}
        {challenge && (
          <div className="cc-compare-area">
            {/* Left paddock */}
            <button
              className={`cc-paddock ${
                showResult && challenge.correctAnswer === "left"
                  ? "cc-paddock-correct"
                  : showResult && challenge.correctAnswer !== "left" && challenge.correctAnswer !== "equal"
                    ? "cc-paddock-wrong"
                    : ""
              } ${selectedGroup === "left" ? "cc-paddock-selected" : ""}`}
              onClick={() => handleAnswer("left")}
              disabled={showResult !== null}
            >
              <div className="cc-fence-top" />
              <div className="cc-paddock-ground" />
              <div className="cc-paddock-critters">
                {challenge.left.positions.map((pos, i) => (
                  <div
                    key={i}
                    className={`cc-critter ${
                      showResult === "correct" && challenge.correctAnswer === "left"
                        ? "cc-critter-celebrate"
                        : showResult === "wrong" && challenge.correctAnswer !== "left"
                          ? "cc-critter-sad"
                          : ""
                    }`}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      animationDelay: `${pos.delay}s`,
                      ["--wobble" as string]: `${pos.wobble}rad`,
                      ["--critter-size" as string]: pos.size,
                      transform: `scale(${pos.size})${pos.flip ? " scaleX(-1)" : ""}`,
                    }}
                  >
                    {challenge.left.emoji}
                  </div>
                ))}
              </div>
              {showCounts && (
                <div className={`cc-count-badge ${showResult === "correct" && challenge.correctAnswer === "left" ? "cc-count-correct" : ""}`}>
                  {countAnim.left}
                </div>
              )}
              <div className="cc-paddock-label">{challenge.left.name}s</div>
              <div className="cc-fence-posts" />
            </button>

            {/* Center VS / Symbol area */}
            <div className="cc-center-column">
              {!showCounts ? (
                <div className="cc-vs-badge">
                  <span className="cc-vs-text">VS</span>
                </div>
              ) : symbolAnim ? (
                <div className={`cc-symbol-fly-in ${showResult === "correct" ? "cc-symbol-correct" : "cc-symbol-wrong"}`}>
                  <span className="cc-comparison-symbol">{getComparisonSymbol()}</span>
                </div>
              ) : (
                <div className="cc-vs-badge cc-vs-counting">
                  <span className="cc-counting-dots">...</span>
                </div>
              )}

              {/* Result indicator */}
              {showResult && (
                <div className={`cc-result-indicator ${showResult}`}>
                  {showResult === "correct" ? "\u2705" : "\u274C"}
                </div>
              )}
            </div>

            {/* Right paddock */}
            <button
              className={`cc-paddock ${
                showResult && challenge.correctAnswer === "right"
                  ? "cc-paddock-correct"
                  : showResult && challenge.correctAnswer !== "right" && challenge.correctAnswer !== "equal"
                    ? "cc-paddock-wrong"
                    : ""
              } ${selectedGroup === "right" ? "cc-paddock-selected" : ""}`}
              onClick={() => handleAnswer("right")}
              disabled={showResult !== null}
            >
              <div className="cc-fence-top" />
              <div className="cc-paddock-ground" />
              <div className="cc-paddock-critters">
                {challenge.right.positions.map((pos, i) => (
                  <div
                    key={i}
                    className={`cc-critter ${
                      showResult === "correct" && challenge.correctAnswer === "right"
                        ? "cc-critter-celebrate"
                        : showResult === "wrong" && challenge.correctAnswer !== "right"
                          ? "cc-critter-sad"
                          : ""
                    }`}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      animationDelay: `${pos.delay}s`,
                      ["--wobble" as string]: `${pos.wobble}rad`,
                      ["--critter-size" as string]: pos.size,
                      transform: `scale(${pos.size})${pos.flip ? " scaleX(-1)" : ""}`,
                    }}
                  >
                    {challenge.right.emoji}
                  </div>
                ))}
              </div>
              {showCounts && (
                <div className={`cc-count-badge ${showResult === "correct" && challenge.correctAnswer === "right" ? "cc-count-correct" : ""}`}>
                  {countAnim.right}
                </div>
              )}
              <div className="cc-paddock-label">{challenge.right.name}s</div>
              <div className="cc-fence-posts" />
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
                  : showResult && challenge.correctAnswer !== "equal"
                    ? "cc-equal-wrong"
                    : ""
              }`}
              onClick={() => handleAnswer("equal")}
              disabled={showResult !== null}
            >
              {"\u2696\uFE0F"} They are EQUAL!
            </button>
          </div>
        )}

        {/* Symbol reveal row */}
        {showCounts && challenge && symbolAnim && (
          <div className="cc-symbol-reveal">
            <span className={`cc-reveal-num ${challenge.correctAnswer === "left" && showResult === "correct" ? "cc-num-winner" : ""}`}>
              {countAnim.left}
            </span>
            <span className={`cc-reveal-symbol ${showResult === "correct" ? "cc-symbol-glow-correct" : "cc-symbol-glow-wrong"}`}>
              {getComparisonSymbol()}
            </span>
            <span className={`cc-reveal-num ${challenge.correctAnswer === "right" && showResult === "correct" ? "cc-num-winner" : ""}`}>
              {countAnim.right}
            </span>
          </div>
        )}

        {/* Celebration particles overlay */}
        {celebrationParticles.length > 0 && (
          <div className="cc-celebration-overlay">
            {celebrationParticles.map((p) => (
              <div
                key={p.id}
                className={`cc-dust-particle ${p.opacity > 0.6 ? "cc-dust-bright" : ""}`}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  ["--dx" as string]: `${p.vx * 40}px`,
                  ["--dy" as string]: `${p.vy * 40}px`,
                  width: p.size,
                  height: p.size,
                }}
              />
            ))}
          </div>
        )}

        {/* Star bursts */}
        {starBursts.length > 0 && (
          <div className="cc-celebration-overlay">
            {starBursts.map((s) => (
              <div
                key={s.id}
                className="cc-star-burst"
                style={{
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  ["--sx" as string]: `${Math.cos(s.angle) * s.speed * 50}px`,
                  ["--sy" as string]: `${Math.sin(s.angle) * s.speed * 50}px`,
                  fontSize: s.size,
                }}
              >
                {"\u2B50"}
              </div>
            ))}
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
    position: relative;
    background: linear-gradient(
      180deg,
      #1a0a2e 0%,
      #3d1155 4%,
      #c0392b 8%,
      #e74c3c 14%,
      #f39c12 22%,
      #f5b041 30%,
      #fad7a0 38%,
      #fdebd0 44%,
      #d4a76a 52%,
      #c08040 60%,
      #a0602a 68%,
      #8b5020 74%,
      #704018 80%,
      #3d5c1e 88%,
      #2d4a15 94%,
      #1a3008 100%
    );
  }

  .cc-ambient-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  /* ============ SUN ============ */
  .cc-sun {
    position: absolute;
    right: 12%;
    z-index: 2;
    width: 60px;
    height: 60px;
    transition: top 0.5s ease, opacity 0.5s ease;
    pointer-events: none;
  }

  .cc-sun-core {
    position: absolute;
    inset: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #fff8e0 0%, #ffd700 40%, #ff8c00 100%);
    box-shadow: 0 0 30px rgba(255, 200, 0, 0.6), 0 0 60px rgba(255, 150, 0, 0.3);
  }

  .cc-sun-glow {
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,200,50,0.3) 0%, transparent 70%);
    animation: ccSunPulse 4s ease-in-out infinite;
  }

  .cc-sun-rays {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg, rgba(255,200,50,0.15) 10deg, transparent 20deg,
      transparent 30deg, rgba(255,200,50,0.12) 40deg, transparent 50deg,
      transparent 60deg, rgba(255,200,50,0.15) 70deg, transparent 80deg,
      transparent 90deg, rgba(255,200,50,0.12) 100deg, transparent 110deg,
      transparent 120deg, rgba(255,200,50,0.15) 130deg, transparent 140deg,
      transparent 150deg, rgba(255,200,50,0.12) 160deg, transparent 170deg,
      transparent 180deg, rgba(255,200,50,0.15) 190deg, transparent 200deg,
      transparent 210deg, rgba(255,200,50,0.12) 220deg, transparent 230deg,
      transparent 240deg, rgba(255,200,50,0.15) 250deg, transparent 260deg,
      transparent 270deg, rgba(255,200,50,0.12) 280deg, transparent 290deg,
      transparent 300deg, rgba(255,200,50,0.15) 310deg, transparent 320deg,
      transparent 330deg, rgba(255,200,50,0.12) 340deg, transparent 350deg,
      transparent 360deg
    );
    animation: ccSunRaysSpin 30s linear infinite;
  }

  @keyframes ccSunPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  @keyframes ccSunRaysSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* ============ INTRO ============ */
  .cc-intro, .cc-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden; z-index: 5;
  }

  .cc-intro-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .cc-bg-critter-parade {
    position: absolute;
    font-size: 2.5rem;
    animation: ccParadeWalk linear infinite;
    opacity: 0.25;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }

  @keyframes ccParadeWalk {
    0% { left: -10%; transform: translateY(0); }
    10% { transform: translateY(-8px); }
    20% { transform: translateY(0); }
    30% { transform: translateY(-8px); }
    40% { transform: translateY(0); }
    50% { left: 50%; transform: translateY(-8px); }
    60% { transform: translateY(0); }
    70% { transform: translateY(-8px); }
    80% { transform: translateY(0); }
    90% { transform: translateY(-8px); }
    100% { left: 110%; transform: translateY(0); }
  }

  .cc-intro-cloud {
    position: absolute;
    width: 200px;
    height: 50px;
    background: radial-gradient(ellipse, rgba(255,240,220,0.4) 0%, transparent 70%);
    border-radius: 50%;
    animation: ccCloudDrift linear infinite;
  }

  @keyframes ccCloudDrift {
    0% { left: -15%; }
    100% { left: 115%; }
  }

  .cc-boomerang {
    position: absolute;
    opacity: 0.3;
    pointer-events: none;
  }

  .cc-boomerang-1 {
    top: 12%;
    left: 8%;
    animation: ccBoomerangSpin 8s linear infinite;
  }

  .cc-boomerang-2 {
    bottom: 25%;
    right: 10%;
    animation: ccBoomerangSpin 10s linear infinite reverse;
  }

  @keyframes ccBoomerangSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .cc-intro-content, .cc-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 1.5rem; max-width: 480px;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cc-intro-content.cc-intro-visible {
    transform: translateY(0);
    opacity: 1;
  }

  .cc-complete-content {
    transform: translateY(0);
    opacity: 1;
  }

  .cc-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .cc-logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem); font-weight: 900;
    background: linear-gradient(135deg, #ffd700, #ff8c00, #ff6347);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    text-shadow: none;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }

  .cc-logo-icon { font-size: 2.5rem; animation: ccLogoHop 2s ease-in-out infinite; }
  .cc-logo-icon:last-child { animation-delay: 0.4s; }

  @keyframes ccLogoHop {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    30% { transform: translateY(-14px) rotate(-5deg); }
    50% { transform: translateY(-18px) rotate(3deg); }
    70% { transform: translateY(-10px) rotate(-2deg); }
  }

  .cc-tagline { color: #fde68a; font-size: 1.05rem; margin-bottom: 1.8rem; text-shadow: 0 1px 3px rgba(0,0,0,0.3); }

  .cc-instructions-card {
    background: rgba(0,0,0,0.25);
    border: 2px solid rgba(200,150,80,0.4);
    border-radius: 20px;
    padding: 1.3rem;
    margin-bottom: 1.8rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05);
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
  }

  .cc-instructions-card.cc-card-visible {
    transform: translateY(0);
    opacity: 1;
  }

  .cc-instructions-card h3 { color: #fde68a; font-size: 1.1rem; margin-bottom: 1rem; }

  .cc-instruction { margin-bottom: 1rem; }
  .cc-instruction:last-child { margin-bottom: 0; }

  .cc-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.6rem; margin-bottom: 0.4rem;
  }

  .cc-mini-group-box {
    display: inline-flex; gap: 2px;
    padding: 4px 8px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 10px;
  }

  .cc-mini-critter { font-size: 1.3rem; }
  .cc-vs-intro { color: #c08040; font-weight: 900; font-size: 0.85rem; }

  .cc-wooden-sign-mini {
    display: inline-block;
    padding: 4px 12px;
    background: linear-gradient(180deg, #a0703c 0%, #8b5e34 50%, #7a5230 100%);
    border: 2px solid #6b4226;
    border-radius: 6px;
    color: #fde68a;
    font-weight: 700;
    font-size: 0.85rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .cc-symbol-preview {
    display: inline-flex; align-items: center; justify-content: center;
    width: 36px; height: 36px;
    background: linear-gradient(135deg, rgba(255,200,50,0.3), rgba(255,150,0,0.3));
    border: 2px solid rgba(255,200,50,0.5);
    border-radius: 50%;
    color: #ffd700; font-weight: 900; font-size: 1.3rem;
    text-shadow: 0 1px 3px rgba(0,0,0,0.4);
  }

  .cc-instruction p { color: #e8d8c0; font-size: 0.9rem; }
  .cc-hl-green { color: #86efac; font-weight: 700; }
  .cc-hl-yellow { color: #fde68a; font-weight: 700; }
  .cc-hl-blue { color: #93c5fd; font-weight: 700; }

  .cc-start-btn, .cc-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 0.9rem 2.2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.15rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: 3px solid #a04000;
    border-radius: 50px; cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 6px 20px rgba(211,84,0,0.4), 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);
    transform: translateY(30px);
    opacity: 0;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  }

  .cc-start-btn.cc-btn-visible, .cc-next-btn {
    transform: translateY(0);
    opacity: 1;
  }

  .cc-start-btn:hover, .cc-next-btn:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 30px rgba(211,84,0,0.5), 0 4px 8px rgba(0,0,0,0.2);
  }

  .cc-start-btn:active, .cc-next-btn:active {
    transform: translateY(1px) scale(0.98);
  }

  .cc-btn-hat { font-size: 1.3rem; }

  /* ============ LEVEL COMPLETE ============ */
  .cc-complete-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1; }

  .cc-falling-star {
    position: absolute;
    top: -20px;
    font-size: 1.2rem;
    animation: ccFallStar linear infinite;
    filter: drop-shadow(0 0 6px rgba(255,200,0,0.5));
  }

  @keyframes ccFallStar {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .cc-complete-title {
    font-size: clamp(1.5rem, 5vw, 2.2rem); color: white; margin-bottom: 1rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
    animation: ccTitleBounce 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes ccTitleBounce {
    0% { transform: scale(0.5); opacity: 0; }
    60% { transform: scale(1.08); }
    100% { transform: scale(1); opacity: 1; }
  }

  .cc-critter-parade-complete {
    display: flex; justify-content: center; gap: 0.6rem; margin-bottom: 1.5rem;
  }

  .cc-parade-critter {
    font-size: 2.5rem;
    animation: ccCritterHop 0.7s ease infinite;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }

  @keyframes ccCritterHop {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-12px) rotate(-5deg); }
    50% { transform: translateY(-16px) rotate(3deg); }
    75% { transform: translateY(-8px) rotate(-2deg); }
  }

  .cc-gameover-title { color: #fca5a5; }

  .cc-gameover-critters {
    display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem;
  }

  .cc-scatter-critter {
    font-size: 2.2rem;
    animation: ccScatter 2s ease-in-out infinite;
  }

  @keyframes ccScatter {
    0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
    25% { transform: translateX(-8px) translateY(-4px) rotate(-10deg); }
    50% { transform: translateX(6px) translateY(-6px) rotate(5deg); }
    75% { transform: translateX(-4px) translateY(-2px) rotate(-3deg); }
  }

  .cc-gameover-subtitle {
    color: #d4a88a; font-size: 1rem; margin-bottom: 1.5rem;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  .cc-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 1.8rem; flex-wrap: wrap;
  }
  .cc-score-item { display: flex; flex-direction: column; align-items: center; }
  .cc-score-label { font-size: 0.85rem; color: #fde68a; margin-bottom: 0.3rem; }
  .cc-score-value {
    font-size: 2rem; font-weight: 900; color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .cc-complete-buttons { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }

  .cc-menu-btn {
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: #d4a88a;
    background: transparent; border: 2px solid rgba(200,150,80,0.3);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .cc-menu-btn:hover { border-color: rgba(200,150,80,0.6); color: #fde68a; }

  /* ============ PLAYING ============ */
  .cc-play {
    height: 100%; display: flex; flex-direction: column;
    position: relative; z-index: 5;
  }

  .cc-play.cc-shake { animation: ccShake 0.5s ease; }

  @keyframes ccShake {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    15% { transform: translateX(-6px) rotate(-0.5deg); }
    30% { transform: translateX(6px) rotate(0.5deg); }
    45% { transform: translateX(-5px) rotate(-0.3deg); }
    60% { transform: translateX(5px) rotate(0.3deg); }
    75% { transform: translateX(-3px); }
    90% { transform: translateX(2px); }
  }

  .cc-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.5rem 0.7rem;
    background: linear-gradient(180deg, rgba(60,30,10,0.6) 0%, rgba(60,30,10,0.3) 100%);
    border-bottom: 1px solid rgba(200,150,80,0.2);
    z-index: 50;
  }

  .cc-header-left, .cc-header-right { display: flex; align-items: center; gap: 0.5rem; }
  .cc-header-center { display: flex; align-items: center; gap: 0.5rem; }

  .cc-back-btn {
    width: 36px; height: 36px;
    background: rgba(200,150,80,0.15);
    border: 1px solid rgba(200,150,80,0.3);
    border-radius: 10px; color: #fde68a; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease;
  }

  .cc-back-btn:hover { background: rgba(200,150,80,0.3); }

  .cc-level-badge {
    padding: 0.35rem 0.7rem;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: 1px solid #a04000;
    border-radius: 14px; font-weight: 700; color: white; font-size: 0.8rem;
    box-shadow: 0 2px 6px rgba(211,84,0,0.3);
  }

  .cc-lives { font-size: 0.9rem; }

  .cc-streak-badge {
    padding: 0.25rem 0.5rem;
    background: rgba(251,146,60,0.25);
    border: 1px solid rgba(251,146,60,0.4);
    border-radius: 10px; font-size: 0.75rem; color: #fb923c; font-weight: 700;
    animation: ccStreakPulse 0.6s ease;
  }

  .cc-streak-fire {
    background: rgba(239,68,68,0.25);
    border-color: rgba(239,68,68,0.5);
    color: #fca5a5;
    animation: ccStreakPulse 0.4s ease, ccStreakGlow 1s ease-in-out infinite;
  }

  @keyframes ccStreakPulse {
    0% { transform: scale(0.5); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  @keyframes ccStreakGlow {
    0%, 100% { box-shadow: 0 0 8px rgba(239,68,68,0.3); }
    50% { box-shadow: 0 0 16px rgba(239,68,68,0.6); }
  }

  .cc-score-badge {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.35rem 0.7rem;
    background: rgba(255,200,50,0.15);
    border: 1px solid rgba(255,200,50,0.3);
    border-radius: 14px; color: #ffd700; font-weight: 700; font-size: 0.8rem;
  }

  /* Timer */
  .cc-timer-bar {
    height: 5px;
    background: rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
  }

  .cc-timer-fill {
    height: 100%;
    background: linear-gradient(90deg, #86efac, #4ade80);
    transition: width 0.1s linear;
    border-radius: 0 3px 3px 0;
    box-shadow: 0 0 8px rgba(74,222,128,0.4);
  }

  .cc-timer-warn {
    background: linear-gradient(90deg, #fde68a, #facc15) !important;
    box-shadow: 0 0 8px rgba(250,204,21,0.4) !important;
  }

  .cc-timer-danger {
    background: linear-gradient(90deg, #fca5a5, #ef4444) !important;
    box-shadow: 0 0 8px rgba(239,68,68,0.4) !important;
    animation: ccTimerPulse 0.5s ease-in-out infinite;
  }

  @keyframes ccTimerPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  /* Progress dots */
  .cc-progress {
    text-align: center; padding: 0.4rem 0.5rem;
  }

  .cc-progress-dots {
    display: flex; justify-content: center; gap: 4px; flex-wrap: wrap;
  }

  .cc-progress-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(200,150,80,0.2);
    border: 1px solid rgba(200,150,80,0.3);
    transition: all 0.3s ease;
  }

  .cc-dot-done {
    background: #4ade80;
    border-color: #22c55e;
    box-shadow: 0 0 4px rgba(74,222,128,0.4);
  }

  .cc-dot-current {
    background: #fbbf24;
    border-color: #f59e0b;
    box-shadow: 0 0 6px rgba(251,191,36,0.5);
    animation: ccDotPulse 1s ease-in-out infinite;
  }

  @keyframes ccDotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.4); }
  }

  /* Prompt - wooden sign */
  .cc-prompt-sign {
    display: flex; align-items: flex-end; justify-content: center;
    padding: 0.3rem 1rem 0;
    animation: ccSignDrop 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes ccSignDrop {
    0% { transform: translateY(-30px) rotate(-3deg); opacity: 0; }
    60% { transform: translateY(3px) rotate(1deg); }
    100% { transform: translateY(0) rotate(0deg); opacity: 1; }
  }

  .cc-sign-post {
    width: 6px; height: 18px;
    background: linear-gradient(180deg, #7a5230, #5c3d20);
    border-radius: 2px;
  }

  .cc-sign-board {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.5rem 1.2rem;
    background: linear-gradient(180deg, #b8834a 0%, #9a6b3a 30%, #8a5e32 70%, #7a5230 100%);
    border: 2px solid #5c3d20;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.1);
    position: relative;
  }

  .cc-sign-board::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 5px;
    pointer-events: none;
  }

  .cc-prompt-emoji {
    font-size: 1.2rem;
    animation: ccPromptEmojiBounce 1.5s ease-in-out infinite;
  }

  @keyframes ccPromptEmojiBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .cc-prompt-text {
    font-size: 1rem; font-weight: 800; color: #fef3c7;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }

  /* ============ COMPARE AREA ============ */
  .cc-compare-area {
    flex: 1; display: flex; gap: 0; padding: 0.4rem;
    align-items: stretch; min-height: 180px;
  }

  /* Paddock containers */
  .cc-paddock {
    flex: 1; position: relative;
    background:
      linear-gradient(180deg, rgba(120,80,30,0.15) 0%, rgba(100,65,20,0.25) 60%, rgba(80,50,15,0.35) 100%);
    border: 3px solid rgba(140,100,50,0.35);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    font-family: 'Nunito', sans-serif;
    display: flex; flex-direction: column;
    box-shadow: inset 0 -4px 12px rgba(0,0,0,0.15);
  }

  .cc-paddock:hover:not(:disabled) {
    border-color: rgba(200,150,80,0.6);
    background:
      linear-gradient(180deg, rgba(140,100,40,0.2) 0%, rgba(120,80,30,0.3) 60%, rgba(100,65,20,0.4) 100%);
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(200,150,80,0.15), inset 0 -4px 12px rgba(0,0,0,0.15);
  }

  .cc-paddock:active:not(:disabled) { transform: scale(0.98); }
  .cc-paddock:disabled { cursor: default; }

  .cc-paddock-correct {
    border-color: #4ade80 !important;
    background: rgba(74,222,128,0.12) !important;
    box-shadow: 0 0 25px rgba(74,222,128,0.2), inset 0 0 20px rgba(74,222,128,0.08) !important;
  }

  .cc-paddock-wrong {
    border-color: rgba(239,68,68,0.4) !important;
    opacity: 0.5;
  }

  .cc-paddock-selected {
    border-color: rgba(251,191,36,0.6);
    box-shadow: 0 0 20px rgba(251,191,36,0.2);
  }

  /* Fence decoration */
  .cc-fence-top {
    height: 4px;
    background: repeating-linear-gradient(
      90deg,
      rgba(140,100,50,0.4) 0px,
      rgba(140,100,50,0.4) 8px,
      transparent 8px,
      transparent 12px
    );
  }

  .cc-fence-posts {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    pointer-events: none;
    background:
      linear-gradient(90deg, rgba(100,70,30,0.15) 0px, transparent 3px) left/3px 100% no-repeat,
      linear-gradient(90deg, transparent calc(100% - 3px), rgba(100,70,30,0.15) 100%) right/3px 100% no-repeat;
  }

  .cc-paddock-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25%;
    background: linear-gradient(180deg, transparent, rgba(80,50,15,0.2));
    pointer-events: none;
  }

  .cc-paddock-critters {
    flex: 1; position: relative; min-height: 100px;
  }

  /* Critter animations */
  .cc-critter {
    position: absolute;
    font-size: clamp(1.1rem, 3vw, 1.7rem);
    animation: ccCritterAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3));
    transition: filter 0.3s ease;
  }

  @keyframes ccCritterAppear {
    0% { transform: scale(0) translateY(20px); opacity: 0; }
    50% { transform: scale(1.2) translateY(-5px); }
    70% { transform: scale(0.9) translateY(2px); }
    100% { transform: scale(var(--critter-size, 1)) translateY(0); opacity: 1; }
  }

  .cc-critter::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    width: 70%;
    height: 3px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Idle animations vary by delay to look natural */
  .cc-paddock:not(:disabled) .cc-critter {
    animation: ccCritterAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1) both, ccCritterIdle 2s ease-in-out infinite 0.6s;
  }

  @keyframes ccCritterIdle {
    0%, 100% { transform: scale(var(--critter-size, 1)) translateY(0) rotate(0deg); }
    20% { transform: scale(var(--critter-size, 1)) translateY(-4px) rotate(-2deg); }
    40% { transform: scale(var(--critter-size, 1)) translateY(-7px) rotate(1deg); }
    60% { transform: scale(var(--critter-size, 1)) translateY(-3px) rotate(-1deg); }
    80% { transform: scale(var(--critter-size, 1)) translateY(-1px) rotate(0.5deg); }
  }

  /* Celebration hop */
  .cc-critter-celebrate {
    animation: ccCritterCelebrate 0.4s ease infinite !important;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(74,222,128,0.4)) !important;
  }

  @keyframes ccCritterCelebrate {
    0%, 100% { transform: scale(var(--critter-size, 1)) translateY(0) rotate(0deg); }
    25% { transform: scale(calc(var(--critter-size, 1) * 1.15)) translateY(-14px) rotate(-8deg); }
    50% { transform: scale(var(--critter-size, 1)) translateY(-18px) rotate(6deg); }
    75% { transform: scale(calc(var(--critter-size, 1) * 1.1)) translateY(-8px) rotate(-3deg); }
  }

  /* Sad scatter */
  .cc-critter-sad {
    animation: ccCritterSad 0.6s ease both !important;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3)) brightness(0.7) !important;
  }

  @keyframes ccCritterSad {
    0% { transform: scale(var(--critter-size, 1)); }
    20% { transform: scale(calc(var(--critter-size, 1) * 0.8)) rotate(-10deg); }
    40% { transform: scale(calc(var(--critter-size, 1) * 0.85)) rotate(8deg) translateX(5px); }
    60% { transform: scale(calc(var(--critter-size, 1) * 0.8)) rotate(-5deg) translateX(-4px); }
    80% { transform: scale(calc(var(--critter-size, 1) * 0.9)) rotate(2deg); }
    100% { transform: scale(calc(var(--critter-size, 1) * 0.85)) translateY(3px); }
  }

  /* Count badge */
  .cc-count-badge {
    position: absolute; top: 8px; right: 8px;
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(0,0,0,0.65);
    border: 2px solid rgba(255,255,255,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.15rem; font-weight: 900; color: white;
    animation: ccCountRoll 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    backdrop-filter: blur(4px);
    z-index: 10;
  }

  .cc-count-correct {
    background: rgba(74,222,128,0.3) !important;
    border-color: #4ade80 !important;
    color: #86efac !important;
    box-shadow: 0 0 12px rgba(74,222,128,0.3) !important;
  }

  @keyframes ccCountRoll {
    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
    60% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .cc-paddock-label {
    text-align: center; padding: 0.25rem; font-size: 0.7rem;
    color: rgba(253,232,168,0.6); font-weight: 600;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  /* Center column */
  .cc-center-column {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    width: 50px; gap: 0.5rem; flex-shrink: 0;
  }

  .cc-vs-badge {
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(200,150,80,0.2);
    border: 2px solid rgba(200,150,80,0.3);
    display: flex; align-items: center; justify-content: center;
  }

  .cc-vs-text {
    font-size: 0.8rem; font-weight: 900; color: #c08040;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  }

  .cc-vs-counting {
    animation: ccVsCountPulse 0.6s ease-in-out infinite;
  }

  .cc-counting-dots {
    color: #fde68a; font-weight: 900; font-size: 0.9rem;
    animation: ccDotsAnim 1s steps(3) infinite;
  }

  @keyframes ccVsCountPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @keyframes ccDotsAnim {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }

  /* Flying symbol */
  .cc-symbol-fly-in {
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    animation: ccSymbolFlyIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cc-symbol-correct {
    background: rgba(74,222,128,0.25);
    border: 2px solid rgba(74,222,128,0.5);
    box-shadow: 0 0 15px rgba(74,222,128,0.3);
  }

  .cc-symbol-wrong {
    background: rgba(239,68,68,0.2);
    border: 2px solid rgba(239,68,68,0.4);
    box-shadow: 0 0 15px rgba(239,68,68,0.2);
  }

  @keyframes ccSymbolFlyIn {
    0% { transform: scale(0) translateY(-40px) rotate(-180deg); opacity: 0; }
    60% { transform: scale(1.3) translateY(5px) rotate(10deg); }
    80% { transform: scale(0.9) translateY(-2px) rotate(-3deg); }
    100% { transform: scale(1) translateY(0) rotate(0deg); opacity: 1; }
  }

  .cc-comparison-symbol {
    font-size: 1.4rem; font-weight: 900; color: #ffd700;
    text-shadow: 0 1px 3px rgba(0,0,0,0.4);
  }

  .cc-result-indicator {
    font-size: 1.5rem;
    animation: ccResultPop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
  }

  .cc-result-indicator.correct {
    animation: ccResultPop 0.4s cubic-bezier(0.16, 1, 0.3, 1), ccResultGlow 1s ease-in-out infinite 0.4s;
  }

  @keyframes ccResultPop {
    0% { transform: scale(0); }
    60% { transform: scale(1.4); }
    100% { transform: scale(1); }
  }

  @keyframes ccResultGlow {
    0%, 100% { filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3)); }
    50% { filter: drop-shadow(0 2px 12px rgba(74,222,128,0.6)); }
  }

  /* Equal button */
  .cc-equal-area {
    padding: 0.3rem 0.8rem;
  }

  .cc-equal-btn {
    width: 100%; padding: 0.7rem;
    background: linear-gradient(180deg, rgba(200,150,80,0.12) 0%, rgba(200,150,80,0.06) 100%);
    border: 2px solid rgba(200,150,80,0.3);
    border-radius: 14px; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 800; color: #fde68a;
    cursor: pointer; transition: all 0.25s ease;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  }

  .cc-equal-btn:hover:not(:disabled) {
    border-color: rgba(251,191,36,0.6);
    background: rgba(251,191,36,0.15);
    box-shadow: 0 0 15px rgba(251,191,36,0.15);
    transform: translateY(-2px);
  }

  .cc-equal-btn:active:not(:disabled) { transform: translateY(1px); }
  .cc-equal-btn:disabled { opacity: 0.6; cursor: default; }

  .cc-equal-correct {
    border-color: #4ade80 !important;
    background: rgba(74,222,128,0.15) !important;
    color: #86efac !important;
    box-shadow: 0 0 15px rgba(74,222,128,0.2) !important;
  }

  .cc-equal-wrong {
    border-color: rgba(239,68,68,0.4) !important;
    opacity: 0.5;
  }

  /* Symbol reveal row */
  .cc-symbol-reveal {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem;
    padding: 0.5rem;
    animation: ccRevealSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes ccRevealSlide {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .cc-reveal-num {
    font-size: 1.6rem; font-weight: 900; color: rgba(255,255,255,0.8);
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
  }

  .cc-num-winner {
    color: #86efac !important;
    text-shadow: 0 0 10px rgba(74,222,128,0.4), 0 2px 4px rgba(0,0,0,0.3) !important;
    transform: scale(1.15);
  }

  .cc-reveal-symbol {
    font-size: 2.2rem; font-weight: 900;
    color: #ffd700;
    animation: ccSymbolEntry 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    text-shadow: 0 2px 6px rgba(0,0,0,0.4);
  }

  .cc-symbol-glow-correct {
    filter: drop-shadow(0 0 8px rgba(74,222,128,0.5));
    color: #86efac;
  }

  .cc-symbol-glow-wrong {
    filter: drop-shadow(0 0 8px rgba(239,68,68,0.4));
    color: #fca5a5;
  }

  @keyframes ccSymbolEntry {
    0% { transform: scale(0) rotate(-360deg); }
    50% { transform: scale(1.5) rotate(15deg); }
    70% { transform: scale(0.85) rotate(-5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  /* ============ CELEBRATION EFFECTS ============ */
  .cc-celebration-overlay {
    position: absolute; inset: 0; pointer-events: none; z-index: 100;
    overflow: hidden;
  }

  .cc-dust-particle {
    position: absolute; border-radius: 50%;
    background: rgba(210, 170, 100, 0.7);
    animation: ccDustBurst 1.2s ease-out forwards;
  }

  .cc-dust-bright {
    background: rgba(255, 200, 80, 0.8);
    box-shadow: 0 0 4px rgba(255, 200, 80, 0.4);
  }

  @keyframes ccDustBurst {
    0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
    100% { transform: translate(var(--dx, 20px), var(--dy, -20px)) scale(0); opacity: 0; }
  }

  .cc-star-burst {
    position: absolute;
    animation: ccStarFly 1s ease-out forwards;
    filter: drop-shadow(0 0 4px rgba(255,200,0,0.5));
  }

  @keyframes ccStarFly {
    0% { transform: translate(0, 0) scale(0) rotate(0deg); opacity: 1; }
    30% { transform: translate(calc(var(--sx) * 0.5), calc(var(--sy) * 0.5)) scale(1.2) rotate(180deg); opacity: 1; }
    100% { transform: translate(var(--sx), var(--sy)) scale(0.3) rotate(720deg); opacity: 0; }
  }

  /* ============ RESPONSIVE ============ */
  @media (max-width: 600px) {
    .cc-critter { font-size: 1rem !important; }
    .cc-compare-area { padding: 0.2rem; }
    .cc-paddock { border-radius: 12px; }
    .cc-prompt-text { font-size: 0.85rem; }
    .cc-center-column { width: 36px; }
    .cc-symbol-fly-in { width: 32px; height: 32px; }
    .cc-comparison-symbol { font-size: 1.1rem; }
    .cc-header-center .cc-lives { font-size: 0.8rem; }
    .cc-sun { width: 40px; height: 40px; right: 8%; }
  }

  @media (max-width: 380px) {
    .cc-prompt-sign { padding: 0.2rem 0.5rem 0; }
    .cc-sign-board { padding: 0.3rem 0.8rem; }
    .cc-progress-dot { width: 6px; height: 6px; }
  }
`;
