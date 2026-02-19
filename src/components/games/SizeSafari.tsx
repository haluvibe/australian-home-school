"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ── Types ──────────────────────────────────────────────────────────────────

type ComparisonType = 'taller' | 'shorter' | 'longer' | 'heavier' | 'lighter' | 'holds-more';

interface SafariItem {
  emoji: string;
  name: string;
  /** Relative size value (used for comparison logic) */
  sizeValue: number;
  /** Visual scale multiplier for rendering */
  visualScale: number;
}

interface ComparisonPair {
  prompt: string;
  attribute: ComparisonType;
  left: SafariItem;
  right: SafariItem;
  /** Index of the correct answer: 0 = left, 1 = right */
  correctIndex: 0 | 1;
}

interface DustParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

interface CloudData {
  id: number;
  x: number;
  y: number;
  speed: number;
  scale: number;
  opacity: number;
}

interface BirdData {
  id: number;
  x: number;
  y: number;
  speed: number;
  wingPhase: number;
}

interface PolaroidPhoto {
  id: number;
  emoji: string;
  name: string;
  attribute: string;
  x: number;
  y: number;
  rotation: number;
}

interface GrassBladeData {
  x: number;
  phase: number;
  height: number;
  hue: number;
}

type GameScreen = 'intro' | 'playing' | 'result' | 'complete';

// ── Comparison data pools ──────────────────────────────────────────────────

const TALLER_PAIRS: [SafariItem, SafariItem][] = [
  [{ emoji: '🦒', name: 'Giraffe', sizeValue: 9, visualScale: 1.8 }, { emoji: '🐕', name: 'Dog', sizeValue: 2, visualScale: 0.8 }],
  [{ emoji: '🦘', name: 'Kangaroo', sizeValue: 7, visualScale: 1.5 }, { emoji: '🐨', name: 'Koala', sizeValue: 3, visualScale: 0.9 }],
  [{ emoji: '🌳', name: 'Tree', sizeValue: 10, visualScale: 1.9 }, { emoji: '🌿', name: 'Bush', sizeValue: 3, visualScale: 0.7 }],
  [{ emoji: '🏠', name: 'House', sizeValue: 8, visualScale: 1.6 }, { emoji: '🪑', name: 'Chair', sizeValue: 2, visualScale: 0.7 }],
  [{ emoji: '🦕', name: 'Dinosaur', sizeValue: 10, visualScale: 2.0 }, { emoji: '🐓', name: 'Chicken', sizeValue: 2, visualScale: 0.7 }],
  [{ emoji: '🐘', name: 'Elephant', sizeValue: 9, visualScale: 1.8 }, { emoji: '🐁', name: 'Mouse', sizeValue: 1, visualScale: 0.5 }],
  [{ emoji: '🏔️', name: 'Mountain', sizeValue: 10, visualScale: 2.0 }, { emoji: '⛺', name: 'Tent', sizeValue: 3, visualScale: 0.8 }],
];

const SHORTER_PAIRS: [SafariItem, SafariItem][] = [
  [{ emoji: '🐛', name: 'Caterpillar', sizeValue: 1, visualScale: 0.5 }, { emoji: '🦘', name: 'Kangaroo', sizeValue: 7, visualScale: 1.5 }],
  [{ emoji: '🍄', name: 'Mushroom', sizeValue: 2, visualScale: 0.6 }, { emoji: '🌻', name: 'Sunflower', sizeValue: 6, visualScale: 1.4 }],
  [{ emoji: '🐸', name: 'Frog', sizeValue: 2, visualScale: 0.6 }, { emoji: '🦩', name: 'Flamingo', sizeValue: 7, visualScale: 1.5 }],
  [{ emoji: '🪨', name: 'Pebble', sizeValue: 1, visualScale: 0.5 }, { emoji: '🪨', name: 'Boulder', sizeValue: 8, visualScale: 1.7 }],
  [{ emoji: '🐢', name: 'Turtle', sizeValue: 2, visualScale: 0.7 }, { emoji: '🦒', name: 'Giraffe', sizeValue: 10, visualScale: 1.9 }],
  [{ emoji: '🌱', name: 'Seedling', sizeValue: 1, visualScale: 0.4 }, { emoji: '🌳', name: 'Tree', sizeValue: 10, visualScale: 1.9 }],
];

const LONGER_PAIRS: [SafariItem, SafariItem][] = [
  [{ emoji: '🐍', name: 'Snake', sizeValue: 9, visualScale: 1.7 }, { emoji: '🦎', name: 'Lizard', sizeValue: 3, visualScale: 0.8 }],
  [{ emoji: '🌉', name: 'Bridge', sizeValue: 10, visualScale: 1.9 }, { emoji: '🛤️', name: 'Short Path', sizeValue: 3, visualScale: 0.7 }],
  [{ emoji: '🚂', name: 'Train', sizeValue: 9, visualScale: 1.8 }, { emoji: '🚗', name: 'Car', sizeValue: 3, visualScale: 0.8 }],
  [{ emoji: '🐊', name: 'Crocodile', sizeValue: 8, visualScale: 1.6 }, { emoji: '🐸', name: 'Frog', sizeValue: 2, visualScale: 0.6 }],
  [{ emoji: '🪵', name: 'Log', sizeValue: 7, visualScale: 1.4 }, { emoji: '🪶', name: 'Feather', sizeValue: 2, visualScale: 0.6 }],
  [{ emoji: '🐋', name: 'Whale', sizeValue: 10, visualScale: 2.0 }, { emoji: '🐟', name: 'Fish', sizeValue: 2, visualScale: 0.6 }],
];

const HEAVIER_PAIRS: [SafariItem, SafariItem][] = [
  [{ emoji: '🐘', name: 'Elephant', sizeValue: 10, visualScale: 1.9 }, { emoji: '🐦', name: 'Bird', sizeValue: 1, visualScale: 0.5 }],
  [{ emoji: '🪨', name: 'Boulder', sizeValue: 9, visualScale: 1.7 }, { emoji: '🪶', name: 'Feather', sizeValue: 1, visualScale: 0.4 }],
  [{ emoji: '🦛', name: 'Hippo', sizeValue: 9, visualScale: 1.8 }, { emoji: '🐧', name: 'Penguin', sizeValue: 3, visualScale: 0.8 }],
  [{ emoji: '🚛', name: 'Truck', sizeValue: 10, visualScale: 1.9 }, { emoji: '🛴', name: 'Scooter', sizeValue: 2, visualScale: 0.7 }],
  [{ emoji: '🐻', name: 'Bear', sizeValue: 8, visualScale: 1.6 }, { emoji: '🐿️', name: 'Squirrel', sizeValue: 1, visualScale: 0.5 }],
  [{ emoji: '🦏', name: 'Rhino', sizeValue: 9, visualScale: 1.8 }, { emoji: '🐇', name: 'Rabbit', sizeValue: 2, visualScale: 0.6 }],
];

const LIGHTER_PAIRS: [SafariItem, SafariItem][] = [
  [{ emoji: '🪶', name: 'Feather', sizeValue: 1, visualScale: 0.4 }, { emoji: '🧱', name: 'Brick', sizeValue: 8, visualScale: 1.5 }],
  [{ emoji: '🎈', name: 'Balloon', sizeValue: 1, visualScale: 0.5 }, { emoji: '🎳', name: 'Bowling Ball', sizeValue: 8, visualScale: 1.5 }],
  [{ emoji: '🐁', name: 'Mouse', sizeValue: 1, visualScale: 0.4 }, { emoji: '🐄', name: 'Cow', sizeValue: 9, visualScale: 1.8 }],
  [{ emoji: '🍃', name: 'Leaf', sizeValue: 1, visualScale: 0.4 }, { emoji: '🪵', name: 'Log', sizeValue: 7, visualScale: 1.4 }],
  [{ emoji: '🦗', name: 'Cricket', sizeValue: 1, visualScale: 0.3 }, { emoji: '🐊', name: 'Crocodile', sizeValue: 9, visualScale: 1.7 }],
];

const HOLDS_MORE_PAIRS: [SafariItem, SafariItem][] = [
  [{ emoji: '🪣', name: 'Bucket', sizeValue: 7, visualScale: 1.4 }, { emoji: '🥤', name: 'Cup', sizeValue: 2, visualScale: 0.7 }],
  [{ emoji: '🛁', name: 'Bathtub', sizeValue: 9, visualScale: 1.7 }, { emoji: '🥣', name: 'Bowl', sizeValue: 3, visualScale: 0.8 }],
  [{ emoji: '🏊', name: 'Pool', sizeValue: 10, visualScale: 1.9 }, { emoji: '🫗', name: 'Glass', sizeValue: 2, visualScale: 0.6 }],
  [{ emoji: '🚰', name: 'Tank', sizeValue: 9, visualScale: 1.7 }, { emoji: '🫖', name: 'Teapot', sizeValue: 3, visualScale: 0.8 }],
  [{ emoji: '🧴', name: 'Bottle', sizeValue: 5, visualScale: 1.1 }, { emoji: '🥄', name: 'Spoon', sizeValue: 1, visualScale: 0.4 }],
  [{ emoji: '🏖️', name: 'Lake', sizeValue: 10, visualScale: 1.9 }, { emoji: '💧', name: 'Puddle', sizeValue: 1, visualScale: 0.5 }],
];

const ATTRIBUTE_LABELS: Record<ComparisonType, string> = {
  'taller': 'TALLER',
  'shorter': 'SHORTER',
  'longer': 'LONGER',
  'heavier': 'HEAVIER',
  'lighter': 'LIGHTER',
  'holds-more': 'one that HOLDS MORE',
};

const SAFARI_GUIDE_CORRECT = [
  "Great shot!",
  "Perfect capture!",
  "You're a natural!",
  "What an eye!",
  "Brilliant photo!",
  "Safari star!",
  "Amazing snap!",
  "Nailed it!",
];

const SAFARI_GUIDE_WRONG = [
  "Hmm, not quite...",
  "Try again next time!",
  "Close, look carefully!",
  "Oops, wrong one!",
  "Take another look!",
];

// ── Helper functions ───────────────────────────────────────────────────────

let idCounter = 0;
const nextId = (): number => ++idCounter;

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateComparison(level: number, usedPrompts: Set<string>): ComparisonPair {
  // Determine which attribute pools are available at this level
  let pools: { type: ComparisonType; pairs: [SafariItem, SafariItem][] }[];

  if (level <= 2) {
    pools = [
      { type: 'taller', pairs: TALLER_PAIRS },
      { type: 'shorter', pairs: SHORTER_PAIRS },
      { type: 'longer', pairs: LONGER_PAIRS },
    ];
  } else if (level <= 5) {
    pools = [
      { type: 'taller', pairs: TALLER_PAIRS },
      { type: 'shorter', pairs: SHORTER_PAIRS },
      { type: 'longer', pairs: LONGER_PAIRS },
      { type: 'heavier', pairs: HEAVIER_PAIRS },
      { type: 'lighter', pairs: LIGHTER_PAIRS },
    ];
  } else {
    pools = [
      { type: 'taller', pairs: TALLER_PAIRS },
      { type: 'shorter', pairs: SHORTER_PAIRS },
      { type: 'longer', pairs: LONGER_PAIRS },
      { type: 'heavier', pairs: HEAVIER_PAIRS },
      { type: 'lighter', pairs: LIGHTER_PAIRS },
      { type: 'holds-more', pairs: HOLDS_MORE_PAIRS },
    ];
  }

  // Try to pick a unique comparison
  let attempts = 0;
  let pool: { type: ComparisonType; pairs: [SafariItem, SafariItem][] };
  let pair: [SafariItem, SafariItem];
  let key: string;

  do {
    pool = pickRandom(pools);
    pair = pickRandom(pool.pairs);
    key = `${pool.type}-${pair[0].name}-${pair[1].name}`;
    attempts++;
  } while (usedPrompts.has(key) && attempts < 30);

  usedPrompts.add(key);

  // The first item in the pair is always the "correct" answer for the attribute type
  // Randomly place it left or right
  const correctGoesLeft = Math.random() > 0.5;
  const left = correctGoesLeft ? { ...pair[0] } : { ...pair[1] };
  const right = correctGoesLeft ? { ...pair[1] } : { ...pair[0] };

  // At higher levels, make visual differences less extreme
  if (level >= 5) {
    const diff = Math.abs(left.visualScale - right.visualScale);
    if (diff > 0.6) {
      const mid = (left.visualScale + right.visualScale) / 2;
      left.visualScale = mid + (left.visualScale > right.visualScale ? 0.25 : -0.25);
      right.visualScale = mid + (right.visualScale > left.visualScale ? 0.25 : -0.25);
    }
  }

  const label = ATTRIBUTE_LABELS[pool.type];
  const prompt = `Tap the ${label} one!`;

  return {
    prompt,
    attribute: pool.type,
    left,
    right,
    correctIndex: correctGoesLeft ? 0 : 1,
  };
}

// ── Component ──────────────────────────────────────────────────────────────

interface SizeSafariProps {
  onExit?: () => void;
}

export default function SizeSafari({ onExit }: SizeSafariProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [comparison, setComparison] = useState<ComparisonPair | null>(null);
  const [answered, setAnswered] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [guideMessage, setGuideMessage] = useState('');
  const [album, setAlbum] = useState<PolaroidPhoto[]>([]);
  const [showAlbum, setShowAlbum] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showViewfinder, setShowViewfinder] = useState(false);
  const [viewfinderSide, setViewfinderSide] = useState<0 | 1>(0);
  const [showMeasureBar, setShowMeasureBar] = useState(false);
  const [dustParticles, setDustParticles] = useState<DustParticle[]>([]);
  const [clouds, setClouds] = useState<CloudData[]>([]);
  const [birds, setBirds] = useState<BirdData[]>([]);
  const [grassBlades] = useState<GrassBladeData[]>(() =>
    Array.from({ length: 60 }, (_, i) => ({
      x: (i / 60) * 100 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
      height: 20 + Math.random() * 30,
      hue: 80 + Math.random() * 40,
    }))
  );
  const [timer, setTimer] = useState<number | null>(null);
  const [timerMax, setTimerMax] = useState(0);
  const [flyingPhoto, setFlyingPhoto] = useState<{ emoji: string; startX: number } | null>(null);
  const [itemBounce, setItemBounce] = useState<[number, number]>([0, 0]);
  const [shakeWrong, setShakeWrong] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const usedPromptsRef = useRef<Set<string>>(new Set());
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const roundsPerLevel = 5;

  // ── Background animation loop ─────────────────────────────────────────

  useEffect(() => {
    // Initialize clouds
    setClouds(
      Array.from({ length: 5 }, (_, i) => ({
        id: nextId(),
        x: Math.random() * 120 - 10,
        y: 5 + Math.random() * 25,
        speed: 0.3 + Math.random() * 0.5,
        scale: 0.6 + Math.random() * 0.8,
        opacity: 0.3 + Math.random() * 0.4,
      }))
    );
    // Initialize birds
    setBirds(
      Array.from({ length: 3 }, () => ({
        id: nextId(),
        x: Math.random() * 110 - 5,
        y: 8 + Math.random() * 20,
        speed: 0.8 + Math.random() * 0.6,
        wingPhase: Math.random() * Math.PI * 2,
      }))
    );
  }, []);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;

      // Animate clouds
      setClouds(prev =>
        prev.map(c => {
          let nx = c.x + c.speed * delta * 0.05;
          if (nx > 110) nx = -15;
          return { ...c, x: nx };
        })
      );

      // Animate birds
      setBirds(prev =>
        prev.map(b => {
          let nx = b.x + b.speed * delta * 0.08;
          if (nx > 110) nx = -8;
          return { ...b, x: nx, wingPhase: b.wingPhase + 0.15 * delta };
        })
      );

      // Animate dust
      setDustParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx * delta,
            y: p.y + p.vy * delta,
            life: p.life - delta,
            opacity: Math.max(0, (p.life / p.maxLife) * 0.6),
          }))
          .filter(p => p.life > 0)
      );

      // Animate item idle bounce
      setItemBounce(prev => [
        Math.sin(timestamp * 0.002) * 4,
        Math.sin(timestamp * 0.002 + 1.5) * 4,
      ]);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // ── Dust burst effect ─────────────────────────────────────────────────

  const spawnDust = useCallback((x: number, y: number, count = 8) => {
    const newParticles: DustParticle[] = Array.from({ length: count }, () => ({
      id: nextId(),
      x,
      y,
      vx: (Math.random() - 0.5) * 3,
      vy: -Math.random() * 2 - 0.5,
      life: 30 + Math.random() * 30,
      maxLife: 60,
      size: 3 + Math.random() * 5,
      opacity: 0.5,
    }));
    setDustParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ── Timer logic ────────────────────────────────────────────────────────

  useEffect(() => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (timer === null || timer <= 0 || answered !== null) return;

    timerIntervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev === null) return null;
        if (prev <= 1) {
          // Time's up, treat as wrong
          handleAnswer(-1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, answered]);

  // ── Game logic ─────────────────────────────────────────────────────────

  const startGame = useCallback(() => {
    setLevel(1);
    setRound(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setAlbum([]);
    setShowAlbum(false);
    usedPromptsRef.current = new Set();
    setGameScreen('playing');
    nextRound(1, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextRound = useCallback((lvl: number, rnd: number) => {
    const comp = generateComparison(lvl, usedPromptsRef.current);
    setComparison(comp);
    setAnswered(null);
    setIsCorrect(null);
    setShowFlash(false);
    setShowViewfinder(false);
    setShowMeasureBar(false);
    setFlyingPhoto(null);
    setShakeWrong(false);
    setGuideMessage('');

    // Timer for levels 4+
    if (lvl >= 4) {
      const time = lvl >= 7 ? 6 : lvl >= 5 ? 8 : 10;
      setTimer(time);
      setTimerMax(time);
    } else {
      setTimer(null);
      setTimerMax(0);
    }

    // Spawn dust when animals appear
    setTimeout(() => {
      spawnDust(30, 75, 6);
      spawnDust(70, 75, 6);
    }, 200);
  }, [spawnDust]);

  const handleAnswer = useCallback((chosenIndex: number) => {
    if (answered !== null || !comparison) return;
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    const correct = chosenIndex === comparison.correctIndex;
    setAnswered(chosenIndex);
    setIsCorrect(correct);

    if (correct) {
      setGuideMessage(pickRandom(SAFARI_GUIDE_CORRECT));
      setScore(prev => prev + (level >= 7 ? 30 : level >= 4 ? 20 : 10) + streak * 5);
      setStreak(prev => {
        const ns = prev + 1;
        setBestStreak(b => Math.max(b, ns));
        return ns;
      });

      // Camera viewfinder + flash animation
      setViewfinderSide(comparison.correctIndex as 0 | 1);
      setShowViewfinder(true);
      setTimeout(() => {
        setShowFlash(true);
        setTimeout(() => setShowFlash(false), 300);
      }, 400);

      // Flying photo to album
      const correctItem = comparison.correctIndex === 0 ? comparison.left : comparison.right;
      setTimeout(() => {
        setFlyingPhoto({
          emoji: correctItem.emoji,
          startX: comparison.correctIndex === 0 ? 25 : 75,
        });
      }, 700);

      // Add to album
      setTimeout(() => {
        setAlbum(prev => [
          ...prev,
          {
            id: nextId(),
            emoji: correctItem.emoji,
            name: correctItem.name,
            attribute: comparison.attribute,
            x: Math.random() * 60 + 20,
            y: Math.random() * 60 + 20,
            rotation: (Math.random() - 0.5) * 20,
          },
        ]);
        setFlyingPhoto(null);
      }, 1200);

      // Show measure bar
      setTimeout(() => setShowMeasureBar(true), 500);

    } else {
      setGuideMessage(pickRandom(SAFARI_GUIDE_WRONG));
      setStreak(0);
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);
    }

    // Move to result briefly, then next round or level complete
    setTimeout(() => {
      setGameScreen('result');
    }, correct ? 1800 : 1200);
  }, [answered, comparison, level, streak]);

  const advanceFromResult = useCallback(() => {
    const nextRoundNum = round + 1;

    if (nextRoundNum >= roundsPerLevel) {
      // Level complete
      const nextLvl = level + 1;
      setLevel(nextLvl);
      setRound(0);
      setGameScreen('complete');
    } else {
      setRound(nextRoundNum);
      setGameScreen('playing');
      nextRound(level, nextRoundNum);
    }
  }, [round, level, nextRound]);

  const startNextLevel = useCallback(() => {
    setGameScreen('playing');
    nextRound(level, 0);
  }, [level, nextRound]);

  // ── Render: Intro Screen ──────────────────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="size-safari" ref={containerRef}>
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="safari-sky" />
          <div className="safari-mountains" />
          <div className="safari-ground" />

          {/* Animated clouds */}
          {clouds.map(c => (
            <div
              key={c.id}
              className="cloud"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                transform: `scale(${c.scale})`,
                opacity: c.opacity,
              }}
            />
          ))}

          {/* Birds */}
          {birds.map(b => (
            <div
              key={b.id}
              className="bird"
              style={{
                left: `${b.x}%`,
                top: `${b.y}%`,
              }}
            >
              <span style={{ display: 'inline-block', transform: `scaleY(${Math.sin(b.wingPhase) * 0.4 + 0.6})` }}>
                &#x1F426;
              </span>
            </div>
          ))}

          {/* Safari jeep animation */}
          <div className="jeep-container">
            <span className="jeep-emoji">🚙</span>
            <div className="jeep-dust" />
          </div>

          {/* Peeking animals */}
          <div className="peek-animal peek-left">🦘</div>
          <div className="peek-animal peek-right">🐨</div>

          <div className="intro-content">
            <div className="intro-logo">
              <span className="binoculars">🔭</span>
              <h1>Size Safari</h1>
              <span className="binoculars flip">📷</span>
            </div>
            <p className="intro-tagline">An Australian Outback Adventure!</p>

            <div className="instructions-glass">
              <h3>How to Play</h3>
              <div className="instruction-row">
                <div className="instruction-icons">
                  <span className="instr-big">🦒</span>
                  <span className="instr-vs">vs</span>
                  <span className="instr-small">🐕</span>
                </div>
                <p>Two things appear side by side</p>
              </div>
              <div className="instruction-row">
                <div className="instruction-icons">
                  <span className="instr-prompt">Tap the TALLER one!</span>
                </div>
                <p>Read the question and <strong>tap</strong> the correct one</p>
              </div>
              <div className="instruction-row">
                <div className="instruction-icons">
                  <span className="instr-camera">📸</span>
                  <span className="instr-arrow">&rarr;</span>
                  <span className="instr-album">📖</span>
                </div>
                <p>Correct snaps fill your <strong>safari album</strong>!</p>
              </div>
            </div>

            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🦁</span>
              Start Safari
              <span className="btn-icon">🦁</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Level Complete Screen ─────────────────────────────────────

  if (gameScreen === 'complete') {
    return (
      <div className="size-safari" ref={containerRef}>
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="safari-sky" />
          <div className="safari-mountains" />
          <div className="safari-ground" />

          {clouds.map(c => (
            <div key={c.id} className="cloud" style={{ left: `${c.x}%`, top: `${c.y}%`, transform: `scale(${c.scale})`, opacity: c.opacity }} />
          ))}

          <div className="complete-content">
            <h1 className="complete-title">Level {level - 1} Complete!</h1>

            <div className="complete-album">
              <div className="album-cover">
                <span className="album-icon">📖</span>
                <span className="album-count">{album.length} Photos</span>
              </div>
              <div className="album-photos">
                {album.slice(-5).map(photo => (
                  <div
                    key={photo.id}
                    className="album-polaroid"
                    style={{ transform: `rotate(${photo.rotation}deg)` }}
                  >
                    <span className="polaroid-emoji">{photo.emoji}</span>
                    <span className="polaroid-label">{photo.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="complete-stats">
              <div className="stat-box">
                <span className="stat-value">{score}</span>
                <span className="stat-label">Score</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">{bestStreak}</span>
                <span className="stat-label">Best Streak</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">{album.length}</span>
                <span className="stat-label">Photos</span>
              </div>
            </div>

            <div className="complete-buttons">
              <button className="next-btn" onClick={startNextLevel}>
                Level {level} &rarr;
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Result Screen (brief feedback) ────────────────────────────

  if (gameScreen === 'result') {
    const correctItem = comparison
      ? comparison.correctIndex === 0
        ? comparison.left
        : comparison.right
      : null;

    return (
      <div className="size-safari" ref={containerRef}>
        <style>{styles}</style>
        <div className="result-screen">
          <div className="safari-sky" />
          <div className="safari-mountains" />
          <div className="safari-ground" />

          {clouds.map(c => (
            <div key={c.id} className="cloud" style={{ left: `${c.x}%`, top: `${c.y}%`, transform: `scale(${c.scale})`, opacity: c.opacity }} />
          ))}

          <div className="result-content">
            <div className={`result-badge ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? '📸' : '❌'}
            </div>
            <h2 className={`result-text ${isCorrect ? 'correct' : 'wrong'}`}>
              {guideMessage}
            </h2>
            {correctItem && (
              <div className="result-answer">
                <span className="result-emoji">{correctItem.emoji}</span>
                <span className="result-name">
                  The {correctItem.name} is the {comparison?.attribute === 'holds-more' ? 'one that holds more' : `${comparison?.attribute} one`}
                </span>
              </div>
            )}
            {isCorrect && streak > 2 && (
              <div className="streak-badge golden">
                {streak} Streak!
              </div>
            )}
            <button className="continue-btn" onClick={advanceFromResult}>
              {round + 1 >= roundsPerLevel ? 'See Results' : 'Next'}
              <span> &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Playing Screen ────────────────────────────────────────────

  return (
    <div className="size-safari" ref={containerRef}>
      <style>{styles}</style>
      <div className="game-screen">
        {/* Sky + environment */}
        <div className="safari-sky" />
        <div className="safari-mountains" />
        <div className="safari-ground" />

        {/* Animated clouds */}
        {clouds.map(c => (
          <div key={c.id} className="cloud" style={{ left: `${c.x}%`, top: `${c.y}%`, transform: `scale(${c.scale})`, opacity: c.opacity }} />
        ))}

        {/* Animated birds */}
        {birds.map(b => (
          <div key={b.id} className="bird" style={{ left: `${b.x}%`, top: `${b.y}%` }}>
            <span style={{ display: 'inline-block', transform: `scaleY(${Math.sin(b.wingPhase) * 0.4 + 0.6})` }}>
              &#x1F426;
            </span>
          </div>
        ))}

        {/* Grass blades */}
        <div className="grass-container">
          {grassBlades.map((blade, i) => (
            <div
              key={i}
              className="grass-blade"
              style={{
                left: `${blade.x}%`,
                height: blade.height,
                backgroundColor: `hsl(${blade.hue}, 45%, 35%)`,
                animationDelay: `${(blade.phase / (Math.PI * 2)) * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Dust particles */}
        {dustParticles.map(p => (
          <div
            key={p.id}
            className="dust-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}

        {/* HUD */}
        <div className="game-hud">
          <div className="hud-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
              &larr;
            </button>
            <div className="level-pill">Level {level}</div>
          </div>
          <div className="hud-center">
            <div className="round-dots">
              {Array.from({ length: roundsPerLevel }, (_, i) => (
                <div key={i} className={`dot ${i < round ? 'done' : i === round ? 'current' : ''}`} />
              ))}
            </div>
          </div>
          <div className="hud-right">
            {streak >= 3 && (
              <div className="streak-pill golden-lens">
                <span className="streak-icon">🔥</span>{streak}
              </div>
            )}
            <button className="album-btn" onClick={() => setShowAlbum(!showAlbum)}>
              📖 <span className="album-count-badge">{album.length}</span>
            </button>
            <div className="score-pill">
              <span className="star-icon">&#11088;</span>{score}
            </div>
          </div>
        </div>

        {/* Timer bar */}
        {timer !== null && timerMax > 0 && (
          <div className="timer-bar-track">
            <div
              className={`timer-bar-fill ${timer <= 3 ? 'urgent' : ''}`}
              style={{ width: `${(timer / timerMax) * 100}%` }}
            />
          </div>
        )}

        {/* Prompt */}
        {comparison && (
          <div className="prompt-banner">
            <span className="prompt-text">{comparison.prompt}</span>
          </div>
        )}

        {/* Comparison area */}
        {comparison && (
          <div className={`comparison-area ${shakeWrong ? 'shake' : ''}`}>
            {/* Left item */}
            <button
              className={`safari-item left ${answered === 0 ? (isCorrect ? 'correct-chosen' : 'wrong-chosen') : ''} ${answered !== null && comparison.correctIndex === 0 && answered !== 0 ? 'was-correct' : ''}`}
              onClick={() => handleAnswer(0)}
              disabled={answered !== null}
              style={{ transform: `translateY(${itemBounce[0]}px)` }}
            >
              {showViewfinder && viewfinderSide === 0 && <div className="viewfinder" />}
              <div className="item-shadow" />
              <span
                className="item-emoji"
                style={{ fontSize: `${Math.max(3, comparison.left.visualScale * 3)}rem` }}
              >
                {comparison.left.emoji}
              </span>
              <span className="item-name">{comparison.left.name}</span>
            </button>

            {/* VS divider */}
            <div className="vs-divider">
              <span className="vs-text">VS</span>
            </div>

            {/* Right item */}
            <button
              className={`safari-item right ${answered === 1 ? (isCorrect ? 'correct-chosen' : 'wrong-chosen') : ''} ${answered !== null && comparison.correctIndex === 1 && answered !== 1 ? 'was-correct' : ''}`}
              onClick={() => handleAnswer(1)}
              disabled={answered !== null}
              style={{ transform: `translateY(${itemBounce[1]}px)` }}
            >
              {showViewfinder && viewfinderSide === 1 && <div className="viewfinder" />}
              <div className="item-shadow" />
              <span
                className="item-emoji"
                style={{ fontSize: `${Math.max(3, comparison.right.visualScale * 3)}rem` }}
              >
                {comparison.right.emoji}
              </span>
              <span className="item-name">{comparison.right.name}</span>
            </button>
          </div>
        )}

        {/* Measure bar comparison visualization */}
        {showMeasureBar && comparison && (
          <div className="measure-bar-area">
            <div className="measure-row">
              <span className="measure-label">{comparison.left.name}</span>
              <div className="measure-track">
                <div
                  className="measure-fill left-fill"
                  style={{ width: `${(comparison.left.sizeValue / 10) * 100}%` }}
                />
              </div>
            </div>
            <div className="measure-row">
              <span className="measure-label">{comparison.right.name}</span>
              <div className="measure-track">
                <div
                  className="measure-fill right-fill"
                  style={{ width: `${(comparison.right.sizeValue / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Camera flash overlay */}
        {showFlash && <div className="flash-overlay" />}

        {/* Flying polaroid to album */}
        {flyingPhoto && (
          <div
            className="flying-polaroid"
            style={{ '--start-x': `${flyingPhoto.startX}%` } as React.CSSProperties}
          >
            <span className="flying-emoji">{flyingPhoto.emoji}</span>
          </div>
        )}

        {/* Safari guide message */}
        {guideMessage && answered !== null && (
          <div className={`guide-bubble ${isCorrect ? 'correct' : 'wrong'}`}>
            <span className="guide-avatar">🧑‍🌾</span>
            <span className="guide-text">{guideMessage}</span>
          </div>
        )}

        {/* Album overlay */}
        {showAlbum && (
          <div className="album-overlay" onClick={() => setShowAlbum(false)}>
            <div className="album-panel" onClick={(e) => e.stopPropagation()}>
              <h3>Safari Album</h3>
              <div className="album-grid">
                {album.length === 0 ? (
                  <p className="album-empty">No photos yet! Start snapping!</p>
                ) : (
                  album.map(photo => (
                    <div
                      key={photo.id}
                      className="album-polaroid mini"
                      style={{ transform: `rotate(${photo.rotation}deg)` }}
                    >
                      <span className="polaroid-emoji">{photo.emoji}</span>
                      <span className="polaroid-label">{photo.name}</span>
                    </div>
                  ))
                )}
              </div>
              <button className="close-album-btn" onClick={() => setShowAlbum(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .size-safari {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    position: relative;
    background: #1a0f05;
  }

  /* ── Environment layers ─────────────────────────────────────── */

  .safari-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      #1a0a2e 0%,
      #2d1b69 8%,
      #e67e22 25%,
      #f39c12 35%,
      #f5b041 42%,
      #fad7a0 52%,
      #87ceeb 70%,
      #5dade2 100%
    );
    z-index: 0;
  }

  .safari-mountains {
    position: absolute;
    bottom: 18%;
    left: 0;
    right: 0;
    height: 30%;
    background:
      linear-gradient(135deg, transparent 33%, #5d4037 33%, #5d4037 40%, transparent 40%),
      linear-gradient(225deg, transparent 33%, #4e342e 33%, #4e342e 42%, transparent 42%),
      linear-gradient(165deg, transparent 40%, #6d4c41 40%, #6d4c41 50%, transparent 50%);
    z-index: 1;
    opacity: 0.4;
  }

  .safari-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 22%;
    background: linear-gradient(
      180deg,
      #8d6e43 0%,
      #a67c52 20%,
      #c4a265 50%,
      #d4b577 80%,
      #c9a860 100%
    );
    z-index: 2;
  }

  .safari-ground::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg,
      #6b8e23, #556b2f, #6b8e23, #556b2f, #6b8e23, #556b2f
    );
    z-index: 3;
  }

  /* ── Clouds ─────────────────────────────────────────────────── */

  .cloud {
    position: absolute;
    width: 80px;
    height: 35px;
    background: white;
    border-radius: 35px;
    z-index: 3;
    pointer-events: none;
  }

  .cloud::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 15px;
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
  }

  .cloud::after {
    content: '';
    position: absolute;
    top: -8px;
    right: 12px;
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 50%;
  }

  /* ── Birds ──────────────────────────────────────────────────── */

  .bird {
    position: absolute;
    font-size: 0.9rem;
    z-index: 4;
    pointer-events: none;
    filter: brightness(0) opacity(0.4);
  }

  /* ── Grass ──────────────────────────────────────────────────── */

  .grass-container {
    position: absolute;
    bottom: 18%;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 5;
    pointer-events: none;
    overflow: hidden;
  }

  .grass-blade {
    position: absolute;
    bottom: 0;
    width: 3px;
    border-radius: 2px 2px 0 0;
    transform-origin: bottom center;
    animation: swayGrass 3s ease-in-out infinite;
  }

  @keyframes swayGrass {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  /* ── Dust particles ─────────────────────────────────────────── */

  .dust-particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(210, 180, 140, 0.7);
    pointer-events: none;
    z-index: 6;
  }

  /* ── Intro Screen ──────────────────────────────────────────── */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .jeep-container {
    position: absolute;
    bottom: 12%;
    z-index: 10;
    animation: driveJeep 8s ease-in-out infinite;
  }

  @keyframes driveJeep {
    0% { left: -15%; }
    40% { left: 42%; }
    60% { left: 42%; }
    100% { left: 115%; }
  }

  .jeep-emoji {
    font-size: 3rem;
    display: block;
    transform: scaleX(-1);
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }

  .jeep-dust {
    position: absolute;
    bottom: -4px;
    left: -20px;
    width: 40px;
    height: 12px;
    background: radial-gradient(ellipse, rgba(210,180,140,0.6) 0%, transparent 70%);
    animation: dustPuff 0.5s ease-out infinite;
  }

  @keyframes dustPuff {
    0% { transform: scaleX(1); opacity: 0.6; }
    100% { transform: scaleX(2); opacity: 0; }
  }

  .peek-animal {
    position: absolute;
    bottom: 15%;
    font-size: 3.5rem;
    z-index: 8;
    animation: peekBounce 2s ease-in-out infinite;
  }

  .peek-left { left: 5%; animation-delay: 0s; }
  .peek-right { right: 5%; animation-delay: 0.5s; }

  @keyframes peekBounce {
    0%, 100% { transform: translateY(30%) rotate(-5deg); }
    50% { transform: translateY(0%) rotate(5deg); }
  }

  .intro-content {
    position: relative;
    z-index: 20;
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

  .intro-logo h1 {
    font-size: clamp(2rem, 8vw, 3.2rem);
    font-weight: 900;
    background: linear-gradient(135deg, #f39c12, #e67e22, #d35400, #e74c3c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }

  .binoculars {
    font-size: 2.2rem;
    animation: binBounce 2s ease-in-out infinite;
  }

  .binoculars.flip { transform: scaleX(-1); animation-delay: 0.3s; }

  @keyframes binBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(8deg); }
  }

  .binoculars.flip {
    animation-name: binBounceFlip;
  }

  @keyframes binBounceFlip {
    0%, 100% { transform: scaleX(-1) translateY(0) rotate(0deg); }
    50% { transform: scaleX(-1) translateY(-8px) rotate(-8deg); }
  }

  .intro-tagline {
    color: rgba(255,255,255,0.85);
    font-size: 1.15rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }

  .instructions-glass {
    background: rgba(0,0,0,0.35);
    border: 1.5px solid rgba(255,255,255,0.15);
    border-radius: 20px;
    padding: 1.2rem 1.5rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .instructions-glass h3 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .instruction-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.3rem;
  }

  .instruction-row:last-child { margin-bottom: 0; }

  .instruction-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .instr-big { font-size: 2rem; }
  .instr-small { font-size: 1.2rem; }
  .instr-vs {
    font-size: 0.8rem;
    color: #f39c12;
    font-weight: 800;
    padding: 0.2rem 0.5rem;
    border: 2px solid #f39c12;
    border-radius: 50%;
  }

  .instr-prompt {
    font-size: 0.85rem;
    font-weight: 700;
    color: #f5b041;
    background: rgba(243,156,18,0.15);
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
  }

  .instr-camera { font-size: 1.5rem; }
  .instr-arrow { color: #f39c12; font-size: 1.2rem; }
  .instr-album { font-size: 1.5rem; }

  .instruction-row p {
    color: rgba(255,255,255,0.75);
    font-size: 0.85rem;
  }

  .instruction-row p strong {
    color: #f5b041;
  }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(230,126,34,0.5);
  }

  .start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(230,126,34,0.6);
  }

  .btn-icon { font-size: 1.4rem; }

  /* ── Game HUD ──────────────────────────────────────────────── */

  .game-screen {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .game-hud {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
    z-index: 50;
  }

  .hud-left, .hud-right { display: flex; align-items: center; gap: 0.5rem; }
  .hud-center { display: flex; align-items: center; }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.15);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back-btn:hover { background: rgba(255,255,255,0.25); }

  .level-pill {
    padding: 0.35rem 0.8rem;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border-radius: 20px;
    font-weight: 700;
    color: white;
    font-size: 0.85rem;
  }

  .round-dots {
    display: flex;
    gap: 6px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    transition: all 0.3s;
  }

  .dot.done { background: #2ecc71; }
  .dot.current {
    background: #f39c12;
    box-shadow: 0 0 8px rgba(243,156,18,0.6);
    animation: dotPulse 1s ease-in-out infinite;
  }

  @keyframes dotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
  }

  .streak-pill {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 0.7rem;
    border-radius: 20px;
    font-weight: 800;
    font-size: 0.85rem;
    color: white;
  }

  .streak-pill.golden-lens {
    background: linear-gradient(135deg, #f1c40f, #e67e22);
    box-shadow: 0 0 15px rgba(241,196,15,0.5);
    animation: goldenPulse 1.5s ease-in-out infinite;
  }

  @keyframes goldenPulse {
    0%, 100% { box-shadow: 0 0 15px rgba(241,196,15,0.3); }
    50% { box-shadow: 0 0 25px rgba(241,196,15,0.7); }
  }

  .streak-icon { font-size: 0.9rem; }

  .album-btn {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.3rem 0.6rem;
    background: rgba(255,255,255,0.15);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 0.9rem;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    transition: background 0.2s;
  }

  .album-btn:hover { background: rgba(255,255,255,0.25); }

  .album-count-badge {
    background: #e67e22;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    font-weight: 800;
  }

  .score-pill {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.35rem 0.8rem;
    background: rgba(241,196,15,0.2);
    border-radius: 20px;
    color: #f1c40f;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .star-icon { font-size: 0.9rem; }

  /* ── Timer bar ─────────────────────────────────────────────── */

  .timer-bar-track {
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    height: 5px;
    background: rgba(0,0,0,0.3);
    z-index: 50;
  }

  .timer-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #2ecc71, #27ae60);
    transition: width 1s linear;
    border-radius: 0 3px 3px 0;
  }

  .timer-bar-fill.urgent {
    background: linear-gradient(90deg, #e74c3c, #c0392b);
    animation: timerFlash 0.5s ease-in-out infinite;
  }

  @keyframes timerFlash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  /* ── Prompt banner ─────────────────────────────────────────── */

  .prompt-banner {
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    animation: promptDrop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes promptDrop {
    0% { transform: translateX(-50%) translateY(-30px) scale(0.8); opacity: 0; }
    100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
  }

  .prompt-text {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background: rgba(0,0,0,0.6);
    border: 2px solid #f39c12;
    border-radius: 30px;
    color: white;
    font-size: clamp(1rem, 3.5vw, 1.3rem);
    font-weight: 800;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  /* ── Comparison area ───────────────────────────────────────── */

  .comparison-area {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.5rem, 3vw, 2rem);
    padding: 0 1rem;
    z-index: 20;
  }

  .comparison-area.shake {
    animation: shakeAnim 0.4s ease-in-out;
  }

  @keyframes shakeAnim {
    0%, 100% { transform: translateY(-50%) translateX(0); }
    20% { transform: translateY(-50%) translateX(-12px); }
    40% { transform: translateY(-50%) translateX(12px); }
    60% { transform: translateY(-50%) translateX(-8px); }
    80% { transform: translateY(-50%) translateX(8px); }
  }

  .safari-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: clamp(130px, 35vw, 220px);
    height: clamp(160px, 40vw, 260px);
    background: rgba(255,255,255,0.08);
    border: 3px solid rgba(255,255,255,0.2);
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.25s ease;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    font-family: 'Nunito', sans-serif;
    padding: 1rem;
    animation: itemAppear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes itemAppear {
    0% { transform: scale(0) translateY(40px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }

  .safari-item.left { animation-delay: 0.05s; }
  .safari-item.right { animation-delay: 0.15s; }

  .safari-item:hover:not(:disabled) {
    border-color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.14);
    transform: scale(1.05);
  }

  .safari-item:active:not(:disabled) {
    transform: scale(0.95);
  }

  .safari-item:disabled {
    cursor: default;
  }

  .safari-item.correct-chosen {
    border-color: #2ecc71;
    background: rgba(46,204,113,0.2);
    box-shadow: 0 0 30px rgba(46,204,113,0.4);
  }

  .safari-item.wrong-chosen {
    border-color: #e74c3c;
    background: rgba(231,76,60,0.2);
    box-shadow: 0 0 30px rgba(231,76,60,0.3);
  }

  .safari-item.was-correct {
    border-color: #2ecc71;
    animation: correctHint 0.8s ease-in-out 0.3s;
  }

  @keyframes correctHint {
    0%, 100% { border-color: #2ecc71; }
    50% { border-color: #2ecc71; box-shadow: 0 0 25px rgba(46,204,113,0.5); }
  }

  .item-shadow {
    position: absolute;
    bottom: 12px;
    width: 70%;
    height: 10px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%);
    border-radius: 50%;
  }

  .item-emoji {
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    transition: font-size 0.3s ease;
    line-height: 1;
  }

  .item-name {
    position: relative;
    z-index: 2;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }

  /* ── Viewfinder ────────────────────────────────────────────── */

  .viewfinder {
    position: absolute;
    inset: -6px;
    border: 3px solid rgba(255,255,255,0.9);
    border-radius: 28px;
    z-index: 30;
    animation: viewfinderFocus 0.4s ease-out;
  }

  .viewfinder::before,
  .viewfinder::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.7);
  }

  .viewfinder::before {
    top: 50%;
    left: 8px;
    right: 8px;
    height: 1px;
  }

  .viewfinder::after {
    left: 50%;
    top: 8px;
    bottom: 8px;
    width: 1px;
  }

  @keyframes viewfinderFocus {
    0% { transform: scale(1.3); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  /* ── VS divider ────────────────────────────────────────────── */

  .vs-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 25;
  }

  .vs-text {
    font-size: 1.2rem;
    font-weight: 900;
    color: #f39c12;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
    padding: 0.4rem 0.7rem;
    border: 2.5px solid #f39c12;
    border-radius: 50%;
    background: rgba(0,0,0,0.4);
  }

  /* ── Camera flash ──────────────────────────────────────────── */

  .flash-overlay {
    position: absolute;
    inset: 0;
    background: white;
    z-index: 100;
    animation: flashAnim 0.3s ease-out forwards;
    pointer-events: none;
  }

  @keyframes flashAnim {
    0% { opacity: 0.95; }
    100% { opacity: 0; }
  }

  /* ── Flying polaroid ───────────────────────────────────────── */

  .flying-polaroid {
    position: absolute;
    z-index: 90;
    animation: flyToAlbum 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    pointer-events: none;
  }

  @keyframes flyToAlbum {
    0% {
      top: 50%;
      left: var(--start-x);
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
    100% {
      top: 0%;
      left: 85%;
      transform: translate(-50%, -50%) scale(0.3) rotate(15deg);
      opacity: 0.6;
    }
  }

  .flying-emoji {
    font-size: 2.5rem;
    background: white;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    display: inline-block;
  }

  /* ── Measure bar ───────────────────────────────────────────── */

  .measure-bar-area {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(250px, 70%, 450px);
    z-index: 30;
    display: flex;
    flex-direction: column;
    gap: 8px;
    animation: measureSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes measureSlideUp {
    0% { transform: translateX(-50%) translateY(30px); opacity: 0; }
    100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  }

  .measure-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .measure-label {
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    width: 70px;
    text-align: right;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    flex-shrink: 0;
  }

  .measure-track {
    flex: 1;
    height: 14px;
    background: rgba(0,0,0,0.3);
    border-radius: 7px;
    overflow: hidden;
  }

  .measure-fill {
    height: 100%;
    border-radius: 7px;
    animation: measureGrow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .measure-fill.left-fill {
    background: linear-gradient(90deg, #e67e22, #f39c12);
  }

  .measure-fill.right-fill {
    background: linear-gradient(90deg, #3498db, #2980b9);
  }

  @keyframes measureGrow {
    0% { width: 0 !important; }
  }

  /* ── Safari guide bubble ───────────────────────────────────── */

  .guide-bubble {
    position: absolute;
    bottom: 26%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1.2rem;
    border-radius: 24px;
    z-index: 60;
    animation: guideAppear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    white-space: nowrap;
  }

  .guide-bubble.correct {
    background: rgba(46,204,113,0.25);
    border: 2px solid rgba(46,204,113,0.5);
  }

  .guide-bubble.wrong {
    background: rgba(231,76,60,0.25);
    border: 2px solid rgba(231,76,60,0.5);
  }

  @keyframes guideAppear {
    0% { transform: translateX(-50%) scale(0.5) translateY(20px); opacity: 0; }
    100% { transform: translateX(-50%) scale(1) translateY(0); opacity: 1; }
  }

  .guide-avatar { font-size: 1.5rem; }

  .guide-text {
    color: white;
    font-weight: 700;
    font-size: 1rem;
    text-shadow: 0 1px 3px rgba(0,0,0,0.4);
  }

  /* ── Album overlay ─────────────────────────────────────────── */

  .album-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .album-panel {
    background: rgba(30,20,10,0.9);
    border: 2px solid rgba(243,156,18,0.3);
    border-radius: 24px;
    padding: 1.5rem;
    max-width: 400px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .album-panel h3 {
    color: #f39c12;
    font-size: 1.3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1rem;
  }

  .album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 0.8rem;
    margin-bottom: 1rem;
  }

  .album-empty {
    color: rgba(255,255,255,0.4);
    font-size: 0.9rem;
    text-align: center;
    grid-column: 1 / -1;
    padding: 2rem 0;
  }

  .album-polaroid, .album-polaroid.mini {
    background: white;
    border-radius: 4px;
    padding: 6px 6px 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
  }

  .album-polaroid:hover {
    transform: scale(1.1) !important;
    z-index: 10;
  }

  .polaroid-emoji { font-size: 2rem; }

  .polaroid-label {
    font-size: 0.55rem;
    font-weight: 700;
    color: #333;
    margin-top: 2px;
    text-align: center;
  }

  .close-album-btn {
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: white;
    background: rgba(255,255,255,0.15);
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .close-album-btn:hover { background: rgba(255,255,255,0.25); }

  /* ── Result Screen ─────────────────────────────────────────── */

  .result-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .result-content {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    animation: resultPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes resultPop {
    0% { transform: scale(0.7); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .result-badge {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
  }

  .result-badge.correct {
    background: rgba(46,204,113,0.2);
    border: 3px solid #2ecc71;
    animation: badgePulse 1s ease-in-out infinite;
  }

  .result-badge.wrong {
    background: rgba(231,76,60,0.2);
    border: 3px solid #e74c3c;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(46,204,113,0.3); }
    50% { box-shadow: 0 0 0 15px rgba(46,204,113,0); }
  }

  .result-text {
    font-size: 1.5rem;
    font-weight: 800;
    text-shadow: 0 2px 6px rgba(0,0,0,0.4);
  }

  .result-text.correct { color: #2ecc71; }
  .result-text.wrong { color: #e74c3c; }

  .result-answer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .result-emoji { font-size: 3rem; }

  .result-name {
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .streak-badge {
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-weight: 800;
    font-size: 1rem;
    color: white;
  }

  .streak-badge.golden {
    background: linear-gradient(135deg, #f1c40f, #e67e22);
    box-shadow: 0 0 20px rgba(241,196,15,0.5);
    animation: streakGlow 1s ease-in-out infinite;
  }

  @keyframes streakGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(241,196,15,0.3); }
    50% { box-shadow: 0 0 35px rgba(241,196,15,0.7); }
  }

  .continue-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.7rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(230,126,34,0.4);
    margin-top: 0.5rem;
  }

  .continue-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(230,126,34,0.5);
  }

  /* ── Complete Screen ───────────────────────────────────────── */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .complete-content {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 1.5rem;
    max-width: 420px;
    animation: completePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes completePop {
    0% { transform: scale(0.6); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.4rem);
    font-weight: 900;
    color: #f39c12;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    margin-bottom: 1.2rem;
  }

  .complete-album {
    margin-bottom: 1.5rem;
  }

  .album-cover {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .album-icon { font-size: 2rem; }

  .album-count {
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    font-weight: 700;
  }

  .album-photos {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .complete-stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .stat-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem 1rem;
    background: rgba(255,255,255,0.08);
    border-radius: 16px;
    border: 1.5px solid rgba(255,255,255,0.1);
  }

  .stat-value {
    font-size: 1.8rem;
    font-weight: 900;
    color: white;
  }

  .stat-label {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.5);
    font-weight: 600;
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
    gap: 0.5rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(230,126,34,0.4);
  }

  .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(230,126,34,0.6);
  }

  .menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: rgba(255,255,255,0.6);
    background: transparent;
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .menu-btn:hover {
    border-color: rgba(255,255,255,0.4);
    color: white;
  }

  /* ── Mobile responsive ─────────────────────────────────────── */

  @media (max-width: 600px) {
    .game-hud { padding: 0.4rem 0.5rem; }
    .hud-center { display: none; }
    .prompt-text { font-size: 0.9rem; padding: 0.5rem 1rem; }
    .safari-item { width: clamp(110px, 38vw, 160px); height: clamp(140px, 42vw, 200px); }
    .item-name { font-size: 0.75rem; }
    .guide-bubble { font-size: 0.85rem; padding: 0.5rem 0.8rem; }
    .measure-label { width: 55px; font-size: 0.65rem; }
    .instructions-glass { padding: 1rem; }
    .instruction-row p { font-size: 0.8rem; }
    .album-grid { grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); }
  }

  @media (max-width: 380px) {
    .safari-item { width: 42vw; height: 48vw; padding: 0.6rem; }
    .vs-text { font-size: 0.9rem; padding: 0.3rem 0.5rem; }
    .level-pill { font-size: 0.75rem; }
    .score-pill { font-size: 0.75rem; }
  }
`;
