"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// Number words lookup
const NUMBER_WORDS: Record<number, string> = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
  16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
};

// Balloon color palette (HSL hues)
const BALLOON_HUES = [0, 25, 45, 120, 180, 210, 260, 300, 330, 350, 15, 55, 90, 150, 195, 240, 275, 315, 340, 30, 70];

// Dot shapes for quantity balloons
const DOT_LAYOUTS: Record<number, { cols: number; size: number }> = {
  0: { cols: 1, size: 6 }, 1: { cols: 1, size: 8 }, 2: { cols: 2, size: 7 },
  3: { cols: 3, size: 6 }, 4: { cols: 2, size: 6 }, 5: { cols: 3, size: 5 },
  6: { cols: 3, size: 5 }, 7: { cols: 4, size: 4 }, 8: { cols: 4, size: 4 },
  9: { cols: 3, size: 4 }, 10: { cols: 4, size: 4 }, 11: { cols: 4, size: 3 },
  12: { cols: 4, size: 3 }, 13: { cols: 4, size: 3 }, 14: { cols: 4, size: 3 },
  15: { cols: 4, size: 3 }, 16: { cols: 4, size: 3 }, 17: { cols: 5, size: 3 },
  18: { cols: 5, size: 3 }, 19: { cols: 5, size: 3 }, 20: { cols: 5, size: 3 },
};

type BalloonType = 'numeral' | 'word' | 'dots';

interface Balloon {
  id: number;
  value: number;
  type: BalloonType;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  rotation: number;
  rotationSpeed: number;
  wobblePhase: number;
  wobbleSpeed: number;
  wobbleAmount: number;
  spawnTime: number;
  popping: boolean;
  popTime: number;
  selected: boolean;
  matchId: number | null; // id of the balloon this should match with
}

interface PopParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  life: number;
  maxLife: number;
  type: 'confetti' | 'spark' | 'ring';
  rotation: number;
  rotationSpeed: number;
}

interface Cloud {
  id: number;
  x: number;
  y: number;
  scale: number;
  speed: number;
  opacity: number;
}

interface Bird {
  id: number;
  x: number;
  y: number;
  speed: number;
  wingPhase: number;
  wingSpeed: number;
  scale: number;
}

interface ScreenShake {
  active: boolean;
  intensity: number;
  startTime: number;
  duration: number;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameOver';

interface NumberBalloonsProps {
  onExit?: () => void;
}

let balloonIdCounter = 0;
const getNewId = (): number => ++balloonIdCounter;

export default function NumberBalloons({ onExit }: NumberBalloonsProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [matchesMade, setMatchesMade] = useState(0);
  const [matchesNeeded, setMatchesNeeded] = useState(0);
  const [selectedBalloon, setSelectedBalloon] = useState<Balloon | null>(null);
  const [wrongMatch, setWrongMatch] = useState(false);
  const [comboText, setComboText] = useState<{ text: string; x: number; y: number; id: number } | null>(null);

  const balloonsRef = useRef<Balloon[]>([]);
  const particlesRef = useRef<PopParticle[]>([]);
  const cloudsRef = useRef<Cloud[]>([]);
  const birdsRef = useRef<Bird[]>([]);
  const shakeRef = useRef<ScreenShake>({ active: false, intensity: 0, startTime: 0, duration: 0 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const gameStateRef = useRef(gameState);
  const levelRef = useRef(level);
  const scoreRef = useRef(score);
  const livesRef = useRef(lives);
  const comboRef = useRef(combo);
  const matchesMadeRef = useRef(matchesMade);
  const matchesNeededRef = useRef(matchesNeeded);
  const selectedBalloonRef = useRef<Balloon | null>(null);
  const pairCounterRef = useRef(0);
  const containerSizeRef = useRef({ width: 800, height: 600 });

  // Sync refs with state
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);
  useEffect(() => { levelRef.current = level; }, [level]);
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { comboRef.current = combo; }, [combo]);
  useEffect(() => { matchesMadeRef.current = matchesMade; }, [matchesMade]);
  useEffect(() => { matchesNeededRef.current = matchesNeeded; }, [matchesNeeded]);
  useEffect(() => { selectedBalloonRef.current = selectedBalloon; }, [selectedBalloon]);

  // Get the number range for the current level
  const getNumberRange = useCallback((lvl: number): [number, number] => {
    if (lvl <= 3) return [0, 10];
    if (lvl <= 6) return [0, 15];
    return [0, 20];
  }, []);

  // Get max simultaneous balloons for current level
  const getMaxBalloons = useCallback((lvl: number): number => {
    return Math.min(4 + Math.floor(lvl * 0.8), 12);
  }, []);

  // Get balloon float speed for current level
  const getFloatSpeed = useCallback((lvl: number): number => {
    return 0.3 + lvl * 0.08;
  }, []);

  // Get spawn interval (ms) for current level
  const getSpawnInterval = useCallback((lvl: number): number => {
    return Math.max(1800 - lvl * 100, 800);
  }, []);

  // Get matches needed for current level
  const getLevelMatches = useCallback((lvl: number): number => {
    return Math.min(4 + Math.floor(lvl * 1.2), 12);
  }, []);

  // Pick the type pairing for a balloon pair
  const pickPairTypes = useCallback((lvl: number): [BalloonType, BalloonType] => {
    // Levels 1-2: only numeral <-> word
    // Levels 3-4: numeral <-> word or numeral <-> dots
    // Levels 5+: any combination
    if (lvl <= 2) return ['numeral', 'word'];
    if (lvl <= 4) {
      return Math.random() < 0.5 ? ['numeral', 'word'] : ['numeral', 'dots'];
    }
    const r = Math.random();
    if (r < 0.4) return ['numeral', 'word'];
    if (r < 0.8) return ['numeral', 'dots'];
    return ['word', 'dots'];
  }, []);

  // Create a balloon pair
  const spawnPair = useCallback((lvl: number): Balloon[] => {
    const [minNum, maxNum] = getNumberRange(lvl);
    const value = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
    const [typeA, typeB] = pickPairTypes(lvl);
    const hue = BALLOON_HUES[value % BALLOON_HUES.length];
    const size = containerSizeRef.current;
    const pairId = ++pairCounterRef.current;

    const baseRadius = 38;
    const wordRadius = typeA === 'word' || typeB === 'word' ? 44 : baseRadius;
    const dotsRadius = 42;

    const getRadius = (type: BalloonType) => {
      if (type === 'word') return wordRadius;
      if (type === 'dots') return dotsRadius;
      return baseRadius;
    };

    const floatSpeed = getFloatSpeed(lvl);
    const makeOne = (type: BalloonType, xBias: number): Balloon => {
      const radius = getRadius(type);
      return {
        id: getNewId(),
        value,
        type,
        x: radius + Math.random() * (size.width - radius * 2) * xBias + (size.width * (1 - xBias) * (1 - xBias)),
        y: size.height + radius + Math.random() * 60,
        vx: 0,
        vy: -(floatSpeed + Math.random() * floatSpeed * 0.6),
        radius,
        hue: hue + (type === 'word' ? 30 : type === 'dots' ? -30 : 0),
        rotation: (Math.random() - 0.5) * 8,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 1.5 + Math.random() * 1.5,
        wobbleAmount: 0.3 + Math.random() * 0.5,
        spawnTime: Date.now(),
        popping: false,
        popTime: 0,
        selected: false,
        matchId: pairId,
      };
    };

    // Spawn balloons on different sides to spread them out
    const a = makeOne(typeA, 0.5);
    const b = makeOne(typeB, 0.5);
    // Offset spawns slightly in time by offsetting y
    b.y += 30 + Math.random() * 80;
    // Give them the same matchId (pair id) but we link them via value + different types
    return [a, b];
  }, [getNumberRange, pickPairTypes, getFloatSpeed]);

  // Initialize clouds
  const initClouds = useCallback((): Cloud[] => {
    const clouds: Cloud[] = [];
    for (let i = 0; i < 6; i++) {
      clouds.push({
        id: i,
        x: Math.random() * containerSizeRef.current.width,
        y: 30 + Math.random() * containerSizeRef.current.height * 0.35,
        scale: 0.5 + Math.random() * 1.0,
        speed: 0.1 + Math.random() * 0.2,
        opacity: 0.15 + Math.random() * 0.2,
      });
    }
    return clouds;
  }, []);

  // Initialize birds
  const initBirds = useCallback((): Bird[] => {
    const birds: Bird[] = [];
    for (let i = 0; i < 3; i++) {
      birds.push({
        id: i,
        x: Math.random() * containerSizeRef.current.width,
        y: 40 + Math.random() * 120,
        speed: 0.3 + Math.random() * 0.4,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: 3 + Math.random() * 2,
        scale: 0.4 + Math.random() * 0.3,
      });
    }
    return birds;
  }, []);

  // Create pop particles
  const createPopParticles = useCallback((x: number, y: number, hue: number, count: number): PopParticle[] => {
    const particles: PopParticle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 5;
      const type: PopParticle['type'] = i < count * 0.4 ? 'confetti' : i < count * 0.7 ? 'spark' : 'ring';
      particles.push({
        id: getNewId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: type === 'confetti' ? 4 + Math.random() * 6 : type === 'spark' ? 2 + Math.random() * 3 : 15 + Math.random() * 10,
        hue: hue + (Math.random() - 0.5) * 40,
        life: 1.0,
        maxLife: 0.6 + Math.random() * 0.5,
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
      });
    }
    return particles;
  }, []);

  // Trigger screen shake
  const triggerShake = useCallback((intensity: number, duration: number) => {
    shakeRef.current = { active: true, intensity, startTime: Date.now(), duration };
  }, []);

  // Start a new level
  const initLevel = useCallback((lvl: number) => {
    balloonsRef.current = [];
    particlesRef.current = [];
    spawnTimerRef.current = 0;
    pairCounterRef.current = 0;
    selectedBalloonRef.current = null;
    setSelectedBalloon(null);
    setMatchesMade(0);
    setCombo(0);
    setWrongMatch(false);
    setComboText(null);
    const needed = getLevelMatches(lvl);
    setMatchesNeeded(needed);
    matchesNeededRef.current = needed;
    matchesMadeRef.current = 0;

    // Spawn initial pairs
    const initialPairs = Math.min(2 + Math.floor(lvl * 0.3), 4);
    const initialBalloons: Balloon[] = [];
    for (let i = 0; i < initialPairs; i++) {
      const pair = spawnPair(lvl);
      // Stagger vertical positions
      pair[0].y = containerSizeRef.current.height * (0.5 + i * 0.15);
      pair[1].y = containerSizeRef.current.height * (0.6 + i * 0.15);
      initialBalloons.push(...pair);
    }
    balloonsRef.current = initialBalloons;
  }, [getLevelMatches, spawnPair]);

  // Start the game
  const startGame = useCallback(() => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setLives(5);
    setCombo(0);
    setMaxCombo(0);
    setMatchesMade(0);
    livesRef.current = 5;
    scoreRef.current = 0;
    comboRef.current = 0;
    levelRef.current = 1;
    cloudsRef.current = initClouds();
    birdsRef.current = initBirds();
    initLevel(1);
  }, [initLevel, initClouds, initBirds]);

  // Next level
  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    setLevel(newLevel);
    levelRef.current = newLevel;
    setGameState('playing');
    initLevel(newLevel);
  }, [level, initLevel]);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = rect.width * dpr;
        canvasRef.current.height = rect.height * dpr;
        canvasRef.current.style.width = `${rect.width}px`;
        canvasRef.current.style.height = `${rect.height}px`;
        containerSizeRef.current = { width: rect.width, height: rect.height };

        const ctx = canvasRef.current.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [gameState]);

  // Draw a cloud
  const drawCloud = useCallback((ctx: CanvasRenderingContext2D, cloud: Cloud) => {
    ctx.save();
    ctx.globalAlpha = cloud.opacity;
    ctx.fillStyle = '#ffffff';
    const s = cloud.scale;
    const cx = cloud.x;
    const cy = cloud.y;

    // Cloud made of overlapping circles
    ctx.beginPath();
    ctx.arc(cx, cy, 20 * s, 0, Math.PI * 2);
    ctx.arc(cx + 18 * s, cy - 5 * s, 16 * s, 0, Math.PI * 2);
    ctx.arc(cx - 16 * s, cy + 2 * s, 14 * s, 0, Math.PI * 2);
    ctx.arc(cx + 8 * s, cy + 8 * s, 12 * s, 0, Math.PI * 2);
    ctx.arc(cx - 8 * s, cy - 8 * s, 15 * s, 0, Math.PI * 2);
    ctx.arc(cx + 25 * s, cy + 5 * s, 13 * s, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }, []);

  // Draw a bird
  const drawBird = useCallback((ctx: CanvasRenderingContext2D, bird: Bird, time: number) => {
    ctx.save();
    ctx.translate(bird.x, bird.y);
    ctx.scale(bird.scale, bird.scale);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';

    const wingY = Math.sin(time * bird.wingSpeed + bird.wingPhase) * 6;

    // Left wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-6, wingY - 3, -12, wingY);
    ctx.stroke();

    // Right wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(6, wingY - 3, 12, wingY);
    ctx.stroke();

    ctx.restore();
  }, []);

  // Draw dots pattern inside balloon
  const drawDots = useCallback((ctx: CanvasRenderingContext2D, value: number, cx: number, cy: number, radius: number) => {
    if (value === 0) return;
    const layout = DOT_LAYOUTS[value] || { cols: 5, size: 3 };
    const cols = layout.cols;
    const rows = Math.ceil(value / cols);
    const dotSize = layout.size;
    const spacing = dotSize * 2.4;
    const totalW = (cols - 1) * spacing;
    const totalH = (rows - 1) * spacing;
    const startX = cx - totalW / 2;
    const startY = cy - totalH / 2;

    let count = 0;
    for (let r = 0; r < rows && count < value; r++) {
      const rowCols = Math.min(cols, value - count);
      const rowOffset = (cols - rowCols) * spacing / 2;
      for (let c = 0; c < rowCols && count < value; c++) {
        const dx = startX + rowOffset + c * spacing;
        const dy = startY + r * spacing;

        ctx.beginPath();
        ctx.arc(dx, dy, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.15)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        count++;
      }
    }
  }, []);

  // Draw a balloon
  const drawBalloon = useCallback((ctx: CanvasRenderingContext2D, balloon: Balloon, time: number) => {
    const { x, y, radius, hue, rotation, type, value, selected, popping, popTime } = balloon;

    // Pop animation
    let popScale = 1;
    let popAlpha = 1;
    if (popping) {
      const elapsed = (Date.now() - popTime) / 400;
      if (elapsed > 1) return; // fully popped
      popScale = 1 + elapsed * 0.8;
      popAlpha = 1 - elapsed;
    }

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation + Math.sin(time * 2 + balloon.wobblePhase) * 3) * Math.PI / 180);
    ctx.scale(popScale, popScale);
    ctx.globalAlpha = popAlpha;

    // String
    if (!popping) {
      ctx.beginPath();
      ctx.moveTo(0, radius);
      const stringLen = 25;
      const wobble = Math.sin(time * 1.5 + balloon.wobblePhase) * 4;
      ctx.quadraticCurveTo(wobble, radius + stringLen / 2, wobble * 0.5, radius + stringLen);
      ctx.strokeStyle = `hsla(${hue}, 40%, 40%, 0.5)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Knot
      ctx.beginPath();
      ctx.arc(0, radius + 2, 3, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${hue}, 60%, 35%)`;
      ctx.fill();
    }

    // Balloon body - gradient
    const grad = ctx.createRadialGradient(-radius * 0.25, -radius * 0.25, radius * 0.1, 0, 0, radius);
    grad.addColorStop(0, `hsla(${hue}, 85%, 75%, 0.95)`);
    grad.addColorStop(0.4, `hsla(${hue}, 80%, 60%, 0.95)`);
    grad.addColorStop(0.8, `hsla(${hue}, 70%, 48%, 0.95)`);
    grad.addColorStop(1, `hsla(${hue}, 65%, 38%, 0.95)`);

    // Slightly oval shape (taller than wide)
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * 0.92, radius, 0, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Glossy highlight
    ctx.beginPath();
    ctx.ellipse(-radius * 0.2, -radius * 0.3, radius * 0.25, radius * 0.18, -0.4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.fill();

    // Secondary highlight
    ctx.beginPath();
    ctx.ellipse(-radius * 0.1, -radius * 0.55, radius * 0.12, radius * 0.08, -0.3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fill();

    // Selection glow
    if (selected && !popping) {
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.92 + 6, radius + 6, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(50, 100%, 70%, ${0.6 + Math.sin(time * 5) * 0.3})`;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Outer pulsing ring
      const pulseR = radius + 10 + Math.sin(time * 4) * 5;
      ctx.beginPath();
      ctx.ellipse(0, 0, pulseR * 0.92, pulseR, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(50, 100%, 70%, ${0.3 + Math.sin(time * 4) * 0.15})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Content
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (type === 'numeral') {
      ctx.font = `900 ${radius * 0.9}px 'Nunito', sans-serif`;
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillText(String(value), 2, 3);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetY = 2;
      ctx.fillText(String(value), 0, 0);
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    } else if (type === 'word') {
      const word = NUMBER_WORDS[value] || String(value);
      const fontSize = word.length > 7 ? radius * 0.38 : word.length > 5 ? radius * 0.42 : radius * 0.5;
      ctx.font = `800 ${fontSize}px 'Nunito', sans-serif`;
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillText(word, 1, 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.shadowBlur = 2;
      ctx.shadowOffsetY = 1;
      ctx.fillText(word, 0, 0);
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    } else {
      // dots
      drawDots(ctx, value, 0, 0, radius);
    }

    ctx.restore();
  }, [drawDots]);

  // Draw particles
  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, p: PopParticle) => {
    ctx.save();
    ctx.globalAlpha = p.life;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI / 180);

    if (p.type === 'confetti') {
      ctx.fillStyle = `hsl(${p.hue}, 80%, 60%)`;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    } else if (p.type === 'spark') {
      ctx.fillStyle = `hsl(${p.hue}, 90%, 80%)`;
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // ring
      ctx.strokeStyle = `hsl(${p.hue}, 80%, 70%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, p.size * (1 - p.life + 0.3), 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }, []);

  // Draw sun with rays
  const drawSun = useCallback((ctx: CanvasRenderingContext2D, time: number, width: number) => {
    const sunX = width - 70;
    const sunY = 60;
    const sunR = 30;

    // Rays
    ctx.save();
    ctx.translate(sunX, sunY);
    ctx.rotate(time * 0.2);
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i;
      const rayLen = 18 + Math.sin(time * 2 + i) * 5;
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * (sunR + 4), Math.sin(angle) * (sunR + 4));
      ctx.lineTo(Math.cos(angle) * (sunR + rayLen), Math.sin(angle) * (sunR + rayLen));
      ctx.strokeStyle = 'rgba(251,191,36,0.4)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
    ctx.restore();

    // Sun body
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR);
    sunGrad.addColorStop(0, 'rgba(253,224,71,0.9)');
    sunGrad.addColorStop(0.6, 'rgba(251,191,36,0.7)');
    sunGrad.addColorStop(1, 'rgba(245,158,11,0.3)');
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
    ctx.fillStyle = sunGrad;
    ctx.fill();

    // Sun glow
    const glowGrad = ctx.createRadialGradient(sunX, sunY, sunR, sunX, sunY, sunR * 3);
    glowGrad.addColorStop(0, 'rgba(253,224,71,0.15)');
    glowGrad.addColorStop(1, 'rgba(253,224,71,0)');
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR * 3, 0, Math.PI * 2);
    ctx.fillStyle = glowGrad;
    ctx.fill();
  }, []);

  // Draw background
  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, '#87CEEB');
    skyGrad.addColorStop(0.3, '#B0E0F0');
    skyGrad.addColorStop(0.6, '#D4F0FC');
    skyGrad.addColorStop(1, '#F0F9FF');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // Sun
    drawSun(ctx, time, width);

    // Clouds
    for (const cloud of cloudsRef.current) {
      drawCloud(ctx, cloud);
    }

    // Birds
    for (const bird of birdsRef.current) {
      drawBird(ctx, bird, time);
    }

    // Ground (gentle green hill)
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.quadraticCurveTo(width * 0.25, height - 30, width * 0.5, height - 15);
    ctx.quadraticCurveTo(width * 0.75, height, width, height - 20);
    ctx.lineTo(width, height);
    ctx.closePath();
    const groundGrad = ctx.createLinearGradient(0, height - 30, 0, height);
    groundGrad.addColorStop(0, '#86efac');
    groundGrad.addColorStop(1, '#4ade80');
    ctx.fillStyle = groundGrad;
    ctx.fill();
  }, [drawCloud, drawBird, drawSun]);

  // Draw HUD
  const drawHUD = useCallback((ctx: CanvasRenderingContext2D, width: number) => {
    const lvl = levelRef.current;
    const sc = scoreRef.current;
    const lv = livesRef.current;
    const cb = comboRef.current;
    const mm = matchesMadeRef.current;
    const mn = matchesNeededRef.current;

    // Top bar background
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, 52);

    // Level badge
    ctx.font = '700 14px "Nunito", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    // Level pill
    const lvlText = `Level ${lvl}`;
    const lvlW = ctx.measureText(lvlText).width + 20;
    ctx.beginPath();
    ctx.roundRect(12, 12, lvlW, 28, 14);
    ctx.fillStyle = 'rgba(59,130,246,0.8)';
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText(lvlText, 22, 26);

    // Score
    ctx.textAlign = 'right';
    const scoreText = `${sc}`;
    ctx.font = '800 16px "Nunito", sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(scoreText, width - 16, 26);
    ctx.font = '600 10px "Nunito", sans-serif';
    ctx.fillStyle = 'rgba(251,191,36,0.7)';
    ctx.fillText('SCORE', width - 16, 14);

    // Lives (hearts)
    ctx.textAlign = 'center';
    ctx.font = '16px sans-serif';
    const heartsStr = '';
    const heartsTotalW = lv * 22;
    const heartsStartX = width / 2 - heartsTotalW / 2;
    for (let i = 0; i < 5; i++) {
      ctx.globalAlpha = i < lv ? 1 : 0.2;
      ctx.fillText(i < lv ? '\u2764\uFE0F' : '\u{1F5A4}', heartsStartX + i * 22 + 10, 20);
    }
    ctx.globalAlpha = 1;

    // Match progress bar
    const barW = Math.min(width * 0.4, 200);
    const barH = 8;
    const barX = width / 2 - barW / 2;
    const barY = 36;
    ctx.beginPath();
    ctx.roundRect(barX, barY, barW, barH, 4);
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fill();

    const progress = mn > 0 ? mm / mn : 0;
    if (progress > 0) {
      ctx.beginPath();
      ctx.roundRect(barX, barY, barW * Math.min(progress, 1), barH, 4);
      ctx.fillStyle = '#4ade80';
      ctx.fill();
    }

    ctx.font = '600 9px "Nunito", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.textAlign = 'center';
    ctx.fillText(`${mm} / ${mn} matches`, width / 2, barY + barH + 10);

    // Combo display
    if (cb >= 2) {
      ctx.font = `800 ${14 + cb * 2}px "Nunito", sans-serif`;
      const comboGrad = ctx.createLinearGradient(width / 2 - 40, 0, width / 2 + 40, 0);
      comboGrad.addColorStop(0, '#f97316');
      comboGrad.addColorStop(0.5, '#fbbf24');
      comboGrad.addColorStop(1, '#f97316');
      ctx.fillStyle = comboGrad;
      ctx.textAlign = 'center';

      // Fire effect at high combos
      if (cb >= 4) {
        ctx.shadowColor = '#f97316';
        ctx.shadowBlur = 15;
      }
      // Positioned just below the top bar
      // Not drawn here -- using DOM overlay for combo text
      ctx.shadowBlur = 0;
    }
  }, []);

  // Handle balloon tap/click
  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (gameStateRef.current !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const mx = clientX - rect.left;
    const my = clientY - rect.top;

    // Find clicked balloon
    let clicked: Balloon | null = null;
    for (const b of balloonsRef.current) {
      if (b.popping) continue;
      const dx = mx - b.x;
      const dy = my - b.y;
      if (Math.sqrt(dx * dx + dy * dy) < b.radius + 5) {
        clicked = b;
        break;
      }
    }

    if (!clicked) {
      // Deselect if clicking empty space
      if (selectedBalloonRef.current) {
        balloonsRef.current = balloonsRef.current.map(b => ({ ...b, selected: false }));
        setSelectedBalloon(null);
        selectedBalloonRef.current = null;
      }
      return;
    }

    const sel = selectedBalloonRef.current;

    if (!sel) {
      // First selection
      clicked.selected = true;
      balloonsRef.current = balloonsRef.current.map(b =>
        b.id === clicked!.id ? { ...b, selected: true } : b
      );
      setSelectedBalloon(clicked);
      selectedBalloonRef.current = clicked;
    } else if (sel.id === clicked.id) {
      // Tapped same balloon -- deselect
      balloonsRef.current = balloonsRef.current.map(b => ({ ...b, selected: false }));
      setSelectedBalloon(null);
      selectedBalloonRef.current = null;
    } else {
      // Second selection -- check for match
      const isMatch = sel.value === clicked.value && sel.type !== clicked.type;

      if (isMatch) {
        // MATCH! Pop both balloons
        const midX = (sel.x + clicked.x) / 2;
        const midY = (sel.y + clicked.y) / 2;

        // Mark as popping
        balloonsRef.current = balloonsRef.current.map(b => {
          if (b.id === sel.id || b.id === clicked!.id) {
            return { ...b, popping: true, popTime: Date.now(), selected: false };
          }
          return { ...b, selected: false };
        });

        // Create pop particles
        particlesRef.current = [
          ...particlesRef.current,
          ...createPopParticles(sel.x, sel.y, sel.hue, 15),
          ...createPopParticles(clicked.x, clicked.y, clicked.hue, 15),
          ...createPopParticles(midX, midY, 50, 8), // gold confetti
        ];

        // Update score with combo multiplier
        const newCombo = comboRef.current + 1;
        const multiplier = Math.min(newCombo, 5);
        const points = 100 * multiplier;
        setCombo(newCombo);
        comboRef.current = newCombo;
        if (newCombo > maxCombo) setMaxCombo(newCombo);
        setScore(prev => prev + points);
        scoreRef.current += points;

        // Combo text
        if (newCombo >= 2) {
          setComboText({
            text: newCombo >= 5 ? `${multiplier}x INCREDIBLE!` : newCombo >= 4 ? `${multiplier}x AMAZING!` : newCombo >= 3 ? `${multiplier}x GREAT!` : `${multiplier}x COMBO!`,
            x: midX,
            y: midY - 40,
            id: Date.now(),
          });
          setTimeout(() => setComboText(null), 1200);
        }

        // Update matches
        const newMM = matchesMadeRef.current + 1;
        setMatchesMade(newMM);
        matchesMadeRef.current = newMM;

        // Remove popped balloons after animation
        setTimeout(() => {
          balloonsRef.current = balloonsRef.current.filter(
            b => b.id !== sel.id && b.id !== clicked!.id
          );
        }, 400);

        // Check level complete
        if (newMM >= matchesNeededRef.current) {
          setTimeout(() => {
            setGameState('levelComplete');
          }, 600);
        }

        setSelectedBalloon(null);
        selectedBalloonRef.current = null;
      } else {
        // WRONG MATCH
        setWrongMatch(true);
        triggerShake(4, 300);
        setCombo(0);
        comboRef.current = 0;
        setLives(prev => {
          const newLives = prev - 1;
          livesRef.current = newLives;
          if (newLives <= 0) {
            setTimeout(() => setGameState('gameOver'), 500);
          }
          return newLives;
        });

        // Flash and deselect
        setTimeout(() => {
          setWrongMatch(false);
          balloonsRef.current = balloonsRef.current.map(b => ({ ...b, selected: false }));
        }, 400);

        setSelectedBalloon(null);
        selectedBalloonRef.current = null;
      }
    }
  }, [createPopParticles, triggerShake, maxCombo]);

  // Main animation loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    lastTimeRef.current = 0;
    spawnTimerRef.current = 0;

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = timestamp - lastTimeRef.current;
      const delta = Math.min(rawDelta, 50) / 16.67; // normalize to ~60fps
      lastTimeRef.current = timestamp;

      const time = timestamp / 1000;
      const size = containerSizeRef.current;
      const canvas = canvasRef.current;
      if (!canvas) { animationRef.current = requestAnimationFrame(update); return; }
      const ctx = canvas.getContext('2d');
      if (!ctx) { animationRef.current = requestAnimationFrame(update); return; }

      // Reset transform for this frame
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Screen shake
      let shakeX = 0;
      let shakeY = 0;
      if (shakeRef.current.active) {
        const elapsed = Date.now() - shakeRef.current.startTime;
        if (elapsed > shakeRef.current.duration) {
          shakeRef.current.active = false;
        } else {
          const progress = elapsed / shakeRef.current.duration;
          const decay = 1 - progress;
          shakeX = (Math.random() - 0.5) * shakeRef.current.intensity * decay * 2;
          shakeY = (Math.random() - 0.5) * shakeRef.current.intensity * decay * 2;
        }
      }

      ctx.save();
      ctx.translate(shakeX, shakeY);

      // Draw background
      drawBackground(ctx, size.width, size.height, time);

      // Update clouds
      for (const cloud of cloudsRef.current) {
        cloud.x += cloud.speed * delta;
        if (cloud.x > size.width + 60) {
          cloud.x = -60;
          cloud.y = 30 + Math.random() * size.height * 0.3;
        }
      }

      // Update birds
      for (const bird of birdsRef.current) {
        bird.x += bird.speed * delta;
        if (bird.x > size.width + 30) {
          bird.x = -30;
          bird.y = 40 + Math.random() * 120;
        }
      }

      // Update balloons
      const lvl = levelRef.current;
      const floatSpeed = 0.3 + lvl * 0.08;

      for (const balloon of balloonsRef.current) {
        if (balloon.popping) continue;

        // Float upward
        balloon.y += balloon.vy * delta;

        // Lateral wobble (sine wave)
        balloon.wobblePhase += balloon.wobbleSpeed * delta * 0.02;
        balloon.x += Math.sin(balloon.wobblePhase) * balloon.wobbleAmount * delta;

        // Slight rotation
        balloon.rotation += balloon.rotationSpeed * delta;

        // Gentle random lateral drift
        balloon.vx += (Math.random() - 0.5) * 0.02 * delta;
        balloon.x += balloon.vx * delta;
        balloon.vx *= 0.99;

        // Keep horizontal bounds
        if (balloon.x < balloon.radius) {
          balloon.x = balloon.radius;
          balloon.vx = Math.abs(balloon.vx);
        }
        if (balloon.x > size.width - balloon.radius) {
          balloon.x = size.width - balloon.radius;
          balloon.vx = -Math.abs(balloon.vx);
        }
      }

      // Check for balloons that floated off the top
      const escaped = balloonsRef.current.filter(b => !b.popping && b.y < -b.radius - 30);
      if (escaped.length > 0) {
        // Remove escaped balloons
        const escapedIds = new Set(escaped.map(b => b.id));
        balloonsRef.current = balloonsRef.current.filter(b => !escapedIds.has(b.id));

        // Lose a life for each escaped balloon (but cap at one life per frame)
        if (escaped.length > 0) {
          setLives(prev => {
            const newLives = Math.max(0, prev - 1);
            livesRef.current = newLives;
            if (newLives <= 0) {
              setTimeout(() => setGameState('gameOver'), 300);
            }
            return newLives;
          });
        }
      }

      // Spawn new pairs
      spawnTimerRef.current += rawDelta;
      const spawnInterval = getSpawnInterval(lvl);
      const maxBalloons = getMaxBalloons(lvl);

      if (spawnTimerRef.current >= spawnInterval &&
          balloonsRef.current.filter(b => !b.popping).length < maxBalloons &&
          matchesMadeRef.current < matchesNeededRef.current) {
        spawnTimerRef.current = 0;
        const pair = spawnPair(lvl);
        balloonsRef.current = [...balloonsRef.current, ...pair];
      }

      // Draw balloons (sorted by y so higher ones are behind)
      const sortedBalloons = [...balloonsRef.current].sort((a, b) => a.y - b.y);
      for (const balloon of sortedBalloons) {
        drawBalloon(ctx, balloon, time);
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.vy += 0.15 * delta; // gravity
        p.rotation += p.rotationSpeed * delta;
        p.life -= (1 / (p.maxLife * 60)) * delta;
        if (p.life <= 0) return false;
        drawParticle(ctx, p);
        return true;
      });

      // Wrong match red flash overlay
      if (shakeRef.current.active) {
        const elapsed = Date.now() - shakeRef.current.startTime;
        const progress = elapsed / shakeRef.current.duration;
        ctx.fillStyle = `rgba(239, 68, 68, ${0.15 * (1 - progress)})`;
        ctx.fillRect(0, 0, size.width, size.height);
      }

      // Draw HUD on top
      drawHUD(ctx, size.width);

      ctx.restore();

      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameState, drawBackground, drawBalloon, drawParticle, drawHUD, spawnPair, getSpawnInterval, getMaxBalloons, getFloatSpeed]);

  // Prevent default touch behavior on the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handler = (e: TouchEvent) => e.preventDefault();
    canvas.addEventListener('touchstart', handler, { passive: false });
    canvas.addEventListener('touchmove', handler, { passive: false });
    return () => {
      canvas.removeEventListener('touchstart', handler);
      canvas.removeEventListener('touchmove', handler);
    };
  }, [gameState]);

  // ---- RENDER ----

  if (gameState === 'intro') {
    return (
      <div className="number-balloons">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-sky">
            {/* Floating decorative balloons */}
            {[...Array(14)].map((_, i) => (
              <div key={i} className="deco-balloon" style={{
                left: `${5 + (i * 7) % 90}%`,
                bottom: `${-10 - Math.random() * 20}%`,
                '--deco-hue': BALLOON_HUES[i % BALLOON_HUES.length],
                '--deco-delay': `${i * 0.6}s`,
                '--deco-duration': `${8 + Math.random() * 6}s`,
                '--deco-wobble': `${3 + Math.random() * 4}s`,
                '--deco-size': `${30 + Math.random() * 25}px`,
              } as React.CSSProperties} />
            ))}
            {/* Clouds */}
            {[...Array(5)].map((_, i) => (
              <div key={`cloud-${i}`} className="intro-cloud" style={{
                top: `${10 + i * 12}%`,
                left: `${-20 + i * 25}%`,
                '--cloud-speed': `${20 + i * 8}s`,
                '--cloud-scale': 0.6 + i * 0.15,
              } as React.CSSProperties} />
            ))}
            {/* Sun */}
            <div className="intro-sun">
              <div className="sun-rays" />
              <div className="sun-body" />
            </div>
          </div>

          <div className="intro-content">
            <div className="intro-logo">
              <span className="logo-emoji">🎈</span>
              <h1 className="intro-title">Number Balloons</h1>
              <span className="logo-emoji flip">🎈</span>
            </div>
            <p className="intro-tagline">Match numbers, words &amp; dots!</p>

            <div className="intro-card">
              <h3 className="card-heading">How to Play</h3>
              <div className="intro-instruction">
                <div className="inst-visual">
                  <span className="inst-balloon numeral">7</span>
                  <span className="inst-arrow">+</span>
                  <span className="inst-balloon word">seven</span>
                  <span className="inst-result">= POP!</span>
                </div>
                <p><strong>TAP</strong> two balloons with the <span className="hl match">same number</span></p>
              </div>
              <div className="intro-instruction">
                <div className="inst-visual">
                  <span className="inst-balloon numeral sm">5</span>
                  <span className="inst-arrow">=</span>
                  <span className="inst-balloon dots-demo">
                    <span className="demo-dot" /><span className="demo-dot" /><span className="demo-dot" />
                    <span className="demo-dot" /><span className="demo-dot" />
                  </span>
                </div>
                <p>Match <span className="hl types">numerals, words &amp; dot groups</span></p>
              </div>
              <div className="intro-instruction">
                <div className="inst-visual">
                  <span className="inst-combo">3x COMBO!</span>
                </div>
                <p><strong>Consecutive</strong> matches build your <span className="hl combo">score multiplier</span></p>
              </div>
            </div>

            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🎈</span>
              Start Playing
              <span className="btn-icon">🎈</span>
            </button>
            {onExit && (
              <button className="back-link" onClick={onExit}>
                ← Back to games
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'levelComplete') {
    const stars = combo >= 3 ? 3 : combo >= 1 ? 2 : matchesMade >= matchesNeeded ? 1 : 0;
    return (
      <div className="number-balloons">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-sky">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                '--conf-hue': Math.random() * 360,
                '--conf-delay': `${Math.random() * 2}s`,
                '--conf-duration': `${2 + Math.random() * 3}s`,
                '--conf-drift': `${(Math.random() - 0.5) * 100}px`,
              } as React.CSSProperties} />
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Level {level} Complete!</h1>
            <div className="stars-row">
              {[1, 2, 3].map(i => (
                <span key={i} className={`star ${i <= stars + 1 ? 'earned' : 'empty'}`}
                  style={{ '--star-delay': `${i * 0.2}s` } as React.CSSProperties}>
                  {i <= stars + 1 ? '\u2B50' : '\u2606'}
                </span>
              ))}
            </div>
            <div className="complete-stats">
              <div className="stat-item">
                <span className="stat-label">Score</span>
                <span className="stat-value">{score}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Matches</span>
                <span className="stat-value">{matchesMade}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Best Combo</span>
                <span className="stat-value">{maxCombo}x</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Lives Left</span>
                <span className="stat-value">{lives}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={nextLevel}>
                Level {level + 1} →
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="number-balloons">
        <style>{styles}</style>
        <div className="gameover-screen">
          <div className="gameover-content">
            <span className="gameover-emoji">😢</span>
            <h1 className="gameover-title">Game Over</h1>
            <p className="gameover-sub">You reached Level {level}</p>
            <div className="complete-stats">
              <div className="stat-item">
                <span className="stat-label">Final Score</span>
                <span className="stat-value">{score}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Matches Made</span>
                <span className="stat-value">{matchesMade}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Best Combo</span>
                <span className="stat-value">{maxCombo}x</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={startGame}>
                Try Again
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playing state
  return (
    <div className="number-balloons" ref={containerRef}>
      <style>{styles}</style>
      <div className="game-canvas-wrap">
        <canvas
          ref={canvasRef}
          className="game-canvas"
          onClick={handleCanvasClick}
          onTouchStart={handleCanvasClick}
        />
        {/* Combo text overlay */}
        {comboText && (
          <div
            key={comboText.id}
            className="combo-popup"
            style={{ left: comboText.x, top: comboText.y }}
          >
            {comboText.text}
          </div>
        )}
        {/* Wrong match flash overlay */}
        {wrongMatch && <div className="wrong-flash" />}
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .number-balloons {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #87CEEB;
    position: relative;
  }

  /* ───────── INTRO SCREEN ───────── */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0F0 40%, #D4F0FC 70%, #F0F9FF 100%);
    overflow: hidden;
  }

  /* Decorative floating balloons */
  .deco-balloon {
    position: absolute;
    width: var(--deco-size);
    height: calc(var(--deco-size) * 1.15);
    border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
    background: radial-gradient(
      circle at 35% 30%,
      hsla(var(--deco-hue), 85%, 75%, 0.9),
      hsla(var(--deco-hue), 75%, 55%, 0.9) 50%,
      hsla(var(--deco-hue), 65%, 40%, 0.9)
    );
    animation:
      decoFloat var(--deco-duration) ease-in-out var(--deco-delay) infinite,
      decoWobble var(--deco-wobble) ease-in-out var(--deco-delay) infinite;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }

  .deco-balloon::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 22%;
    width: 28%;
    height: 18%;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
  }

  .deco-balloon::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5px;
    height: 15px;
    background: rgba(0,0,0,0.2);
  }

  @keyframes decoFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(calc(-100vh - 100px)); }
    50.1%, 100% { transform: translateY(0); }
  }

  @keyframes decoWobble {
    0%, 100% { margin-left: 0; }
    25% { margin-left: 15px; }
    75% { margin-left: -15px; }
  }

  /* Intro clouds */
  .intro-cloud {
    position: absolute;
    width: calc(80px * var(--cloud-scale));
    height: calc(30px * var(--cloud-scale));
    background: rgba(255,255,255,0.5);
    border-radius: 50px;
    animation: cloudDrift var(--cloud-speed) linear infinite;
  }

  .intro-cloud::before,
  .intro-cloud::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
  }

  .intro-cloud::before {
    width: calc(40px * var(--cloud-scale));
    height: calc(40px * var(--cloud-scale));
    top: calc(-18px * var(--cloud-scale));
    left: calc(15px * var(--cloud-scale));
  }

  .intro-cloud::after {
    width: calc(30px * var(--cloud-scale));
    height: calc(30px * var(--cloud-scale));
    top: calc(-10px * var(--cloud-scale));
    left: calc(40px * var(--cloud-scale));
  }

  @keyframes cloudDrift {
    0% { transform: translateX(-120px); }
    100% { transform: translateX(calc(100vw + 120px)); }
  }

  /* Intro sun */
  .intro-sun {
    position: absolute;
    top: 40px;
    right: 60px;
  }

  .sun-body {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #fde047, #f59e0b);
    box-shadow: 0 0 40px rgba(253,224,71,0.5), 0 0 80px rgba(251,191,36,0.2);
  }

  .sun-rays {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    background: conic-gradient(
      from 0deg,
      transparent 0deg, rgba(253,224,71,0.2) 10deg, transparent 20deg,
      transparent 30deg, rgba(253,224,71,0.2) 40deg, transparent 50deg,
      transparent 60deg, rgba(253,224,71,0.2) 70deg, transparent 80deg,
      transparent 90deg, rgba(253,224,71,0.2) 100deg, transparent 110deg,
      transparent 120deg, rgba(253,224,71,0.2) 130deg, transparent 140deg,
      transparent 150deg, rgba(253,224,71,0.2) 160deg, transparent 170deg,
      transparent 180deg, rgba(253,224,71,0.2) 190deg, transparent 200deg,
      transparent 210deg, rgba(253,224,71,0.2) 220deg, transparent 230deg,
      transparent 240deg, rgba(253,224,71,0.2) 250deg, transparent 260deg,
      transparent 270deg, rgba(253,224,71,0.2) 280deg, transparent 290deg,
      transparent 300deg, rgba(253,224,71,0.2) 310deg, transparent 320deg,
      transparent 330deg, rgba(253,224,71,0.2) 340deg, transparent 350deg,
      transparent 360deg
    );
    border-radius: 50%;
    animation: spinSlow 30s linear infinite;
  }

  @keyframes spinSlow {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 480px;
  }

  .intro-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .logo-emoji {
    font-size: 2.5rem;
    animation: logoBob 2s ease-in-out infinite;
  }

  .logo-emoji.flip {
    transform: scaleX(-1);
    animation: logoBob 2s ease-in-out 0.3s infinite;
  }

  @keyframes logoBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .intro-title {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rainbowShift 4s ease infinite;
  }

  @keyframes rainbowShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .intro-tagline {
    color: #475569;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .intro-card {
    background: rgba(255,255,255,0.7);
    border: 2px solid rgba(255,255,255,0.8);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 1.8rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  }

  .card-heading {
    color: #1e293b;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    font-weight: 800;
  }

  .intro-instruction {
    margin-bottom: 1.2rem;
  }

  .intro-instruction:last-child { margin-bottom: 0; }

  .inst-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .inst-balloon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 800;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }

  .inst-balloon.numeral {
    width: 40px;
    height: 46px;
    border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
    background: radial-gradient(circle at 35% 30%, #60a5fa, #3b82f6 60%, #2563eb);
    font-size: 1.2rem;
  }

  .inst-balloon.numeral.sm {
    width: 36px;
    height: 42px;
    font-size: 1rem;
  }

  .inst-balloon.word {
    width: auto;
    padding: 4px 14px;
    height: 40px;
    border-radius: 20px / 22px;
    background: radial-gradient(circle at 35% 30%, #f472b6, #ec4899 60%, #db2777);
    font-size: 0.85rem;
  }

  .inst-balloon.dots-demo {
    width: 44px;
    height: 50px;
    border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
    background: radial-gradient(circle at 35% 30%, #4ade80, #22c55e 60%, #16a34a);
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 8px;
  }

  .demo-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    display: block;
  }

  .inst-arrow {
    color: #64748b;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .inst-result {
    font-size: 0.9rem;
    font-weight: 800;
    color: #f59e0b;
  }

  .inst-combo {
    font-size: 1rem;
    font-weight: 900;
    background: linear-gradient(90deg, #f97316, #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .intro-instruction p {
    color: #475569;
    font-size: 0.9rem;
  }

  .hl { font-weight: 700; }
  .hl.match { color: #3b82f6; }
  .hl.types { color: #8b5cf6; }
  .hl.combo { color: #f97316; }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(59,130,246,0.4);
  }

  .start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(59,130,246,0.5);
  }

  .start-btn:active {
    transform: translateY(-1px);
  }

  .btn-icon { font-size: 1.3rem; }

  .back-link {
    display: block;
    margin-top: 1rem;
    background: none;
    border: none;
    color: #64748b;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: color 0.2s;
  }

  .back-link:hover { color: #334155; }

  /* ───────── GAME CANVAS ───────── */

  .game-canvas-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .game-canvas {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    touch-action: none;
  }

  .combo-popup {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-weight: 900;
    background: linear-gradient(90deg, #f97316, #fbbf24, #f97316);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: comboPopIn 1.2s ease forwards, rainbowShift 1s ease infinite;
    text-shadow: none;
    z-index: 100;
    white-space: nowrap;
    filter: drop-shadow(0 2px 8px rgba(249,115,22,0.6));
  }

  @keyframes comboPopIn {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
    40% { transform: translate(-50%, -50%) scale(1.0); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(0.8); opacity: 0; }
  }

  .wrong-flash {
    position: absolute;
    inset: 0;
    background: rgba(239, 68, 68, 0.2);
    pointer-events: none;
    animation: wrongFlash 0.4s ease forwards;
    z-index: 90;
  }

  @keyframes wrongFlash {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  /* ───────── LEVEL COMPLETE SCREEN ───────── */

  .complete-screen, .gameover-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .complete-screen {
    background: linear-gradient(180deg, #87CEEB 0%, #D4F0FC 50%, #F0F9FF 100%);
  }

  .gameover-screen {
    background: linear-gradient(180deg, #1e293b 0%, #334155 50%, #1e293b 100%);
  }

  .complete-sky {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .confetti-piece {
    position: absolute;
    top: -10px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: hsl(var(--conf-hue), 80%, 60%);
    animation: confettiFall var(--conf-duration) ease-in var(--conf-delay) infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) translateX(var(--conf-drift)) rotate(720deg); opacity: 0.3; }
  }

  .complete-content, .gameover-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 450px;
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .gameover-emoji {
    font-size: 4rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  .gameover-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: #f87171;
    margin-bottom: 0.5rem;
  }

  .gameover-sub {
    color: #94a3b8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .stars-row {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .star {
    font-size: 3rem;
    animation: starPop 0.5s ease var(--star-delay) both;
  }

  .star.empty {
    opacity: 0.2;
    filter: grayscale(1);
    animation: none;
  }

  @keyframes starPop {
    0% { transform: scale(0) rotate(-30deg); opacity: 0; }
    60% { transform: scale(1.3) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .complete-stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.2rem;
    font-weight: 600;
  }

  .gameover-screen .stat-label {
    color: #94a3b8;
  }

  .stat-value {
    font-size: 1.8rem;
    font-weight: 900;
    color: #1e293b;
  }

  .gameover-screen .stat-value {
    color: #f1f5f9;
  }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(59,130,246,0.3);
  }

  .next-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(59,130,246,0.4);
  }

  .menu-btn {
    padding: 0.7rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #64748b;
    background: transparent;
    border: 2px solid rgba(100,116,139,0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .gameover-screen .menu-btn {
    color: #94a3b8;
    border-color: rgba(148,163,184,0.3);
  }

  .menu-btn:hover {
    border-color: rgba(100,116,139,0.6);
    color: #334155;
  }

  .gameover-screen .menu-btn:hover {
    border-color: rgba(148,163,184,0.6);
    color: #e2e8f0;
  }

  /* ───────── RESPONSIVE ───────── */

  @media (max-width: 600px) {
    .intro-card {
      padding: 1rem;
      margin-bottom: 1.2rem;
    }

    .inst-balloon.numeral { width: 34px; height: 40px; font-size: 1rem; }
    .inst-balloon.word { padding: 3px 10px; height: 34px; font-size: 0.75rem; }
    .inst-balloon.dots-demo { width: 38px; height: 44px; }

    .intro-tagline { font-size: 0.95rem; margin-bottom: 1rem; }

    .complete-stats { gap: 1rem; }
    .stat-value { font-size: 1.5rem; }
  }

  @media (max-height: 500px) {
    .intro-content { padding: 0.8rem; }
    .intro-card { padding: 0.8rem; margin-bottom: 1rem; }
    .intro-instruction { margin-bottom: 0.6rem; }
    .intro-logo { margin-bottom: 0; }
    .intro-tagline { margin-bottom: 0.8rem; font-size: 0.9rem; }
    .logo-emoji { font-size: 1.8rem; }
  }
`;
