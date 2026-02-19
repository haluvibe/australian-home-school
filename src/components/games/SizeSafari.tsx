"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ── Types ──────────────────────────────────────────────────────────────────

type ComparisonType = 'taller' | 'shorter' | 'longer' | 'heavier' | 'lighter' | 'holds-more';

interface AnimalData {
  emoji: string;
  name: string;
  sizeValue: number;
  idleAnim: string;
}

interface ComparisonPair {
  prompt: string;
  attribute: ComparisonType;
  left: AnimalData;
  right: AnimalData;
  correctIndex: 0 | 1;
}

interface PhotoEntry {
  id: number;
  emoji: string;
  name: string;
  attribute: string;
  rotation: number;
  timestamp: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'dust' | 'sparkle' | 'lens' | 'star';
}

interface CloudData {
  id: number;
  x: number;
  y: number;
  speed: number;
  scale: number;
  opacity: number;
  layer: number;
}

type GameScreen = 'intro' | 'playing' | 'result' | 'bonus' | 'gameover' | 'complete';

// ── Animal Data Pools ──────────────────────────────────────────────────────

const TALLER_PAIRS: [AnimalData, AnimalData][] = [
  [{ emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }, { emoji: '🐨', name: 'Koala', sizeValue: 3, idleAnim: 'sway' }],
  [{ emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }, { emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }],
  [{ emoji: '🐊', name: 'Crocodile', sizeValue: 5, idleAnim: 'snap' }, { emoji: '🕷️', name: 'Spider', sizeValue: 1, idleAnim: 'scuttle' }],
  [{ emoji: '🦅', name: 'Eagle', sizeValue: 7, idleAnim: 'soar' }, { emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }],
  [{ emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }, { emoji: '🦆', name: 'Duck', sizeValue: 2, idleAnim: 'waddle' }],
  [{ emoji: '🦅', name: 'Eagle', sizeValue: 7, idleAnim: 'soar' }, { emoji: '🐨', name: 'Koala', sizeValue: 3, idleAnim: 'sway' }],
  [{ emoji: '🌳', name: 'Gum Tree', sizeValue: 10, idleAnim: 'sway' }, { emoji: '🌿', name: 'Bush', sizeValue: 3, idleAnim: 'sway' }],
];

const SHORTER_PAIRS: [AnimalData, AnimalData][] = [
  [{ emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }, { emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }],
  [{ emoji: '🕷️', name: 'Spider', sizeValue: 1, idleAnim: 'scuttle' }, { emoji: '🦅', name: 'Eagle', sizeValue: 7, idleAnim: 'soar' }],
  [{ emoji: '🐨', name: 'Koala', sizeValue: 3, idleAnim: 'sway' }, { emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }],
  [{ emoji: '🦆', name: 'Duck', sizeValue: 2, idleAnim: 'waddle' }, { emoji: '🐊', name: 'Crocodile', sizeValue: 6, idleAnim: 'snap' }],
  [{ emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }, { emoji: '🦎', name: 'Goanna', sizeValue: 5, idleAnim: 'crawl' }],
  [{ emoji: '🌱', name: 'Seedling', sizeValue: 1, idleAnim: 'sway' }, { emoji: '🌳', name: 'Gum Tree', sizeValue: 10, idleAnim: 'sway' }],
];

const LONGER_PAIRS: [AnimalData, AnimalData][] = [
  [{ emoji: '🐍', name: 'Snake', sizeValue: 9, idleAnim: 'slither' }, { emoji: '🦎', name: 'Goanna', sizeValue: 4, idleAnim: 'crawl' }],
  [{ emoji: '🐊', name: 'Crocodile', sizeValue: 8, idleAnim: 'snap' }, { emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }],
  [{ emoji: '🐍', name: 'Snake', sizeValue: 9, idleAnim: 'slither' }, { emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }],
  [{ emoji: '🐊', name: 'Crocodile', sizeValue: 8, idleAnim: 'snap' }, { emoji: '🐨', name: 'Koala', sizeValue: 3, idleAnim: 'sway' }],
  [{ emoji: '🦎', name: 'Goanna', sizeValue: 5, idleAnim: 'crawl' }, { emoji: '🕷️', name: 'Spider', sizeValue: 1, idleAnim: 'scuttle' }],
  [{ emoji: '🐍', name: 'Snake', sizeValue: 9, idleAnim: 'slither' }, { emoji: '🦆', name: 'Duck', sizeValue: 2, idleAnim: 'waddle' }],
];

const HEAVIER_PAIRS: [AnimalData, AnimalData][] = [
  [{ emoji: '🐊', name: 'Crocodile', sizeValue: 9, idleAnim: 'snap' }, { emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }],
  [{ emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }, { emoji: '🕷️', name: 'Spider', sizeValue: 1, idleAnim: 'scuttle' }],
  [{ emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }, { emoji: '🦆', name: 'Duck', sizeValue: 2, idleAnim: 'waddle' }],
  [{ emoji: '🐊', name: 'Crocodile', sizeValue: 9, idleAnim: 'snap' }, { emoji: '🐨', name: 'Koala', sizeValue: 3, idleAnim: 'sway' }],
  [{ emoji: '🦅', name: 'Eagle', sizeValue: 6, idleAnim: 'soar' }, { emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }],
];

const LIGHTER_PAIRS: [AnimalData, AnimalData][] = [
  [{ emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }, { emoji: '🐊', name: 'Crocodile', sizeValue: 9, idleAnim: 'snap' }],
  [{ emoji: '🕷️', name: 'Spider', sizeValue: 1, idleAnim: 'scuttle' }, { emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }],
  [{ emoji: '🦆', name: 'Duck', sizeValue: 2, idleAnim: 'waddle' }, { emoji: '🐊', name: 'Crocodile', sizeValue: 9, idleAnim: 'snap' }],
  [{ emoji: '🐨', name: 'Koala', sizeValue: 3, idleAnim: 'sway' }, { emoji: '🦘', name: 'Kangaroo', sizeValue: 8, idleAnim: 'bounce' }],
  [{ emoji: '🐸', name: 'Frog', sizeValue: 1, idleAnim: 'hop' }, { emoji: '🦅', name: 'Eagle', sizeValue: 6, idleAnim: 'soar' }],
];

const HOLDS_MORE_PAIRS: [AnimalData, AnimalData][] = [
  [{ emoji: '🪣', name: 'Bucket', sizeValue: 7, idleAnim: 'sway' }, { emoji: '🥤', name: 'Cup', sizeValue: 2, idleAnim: 'sway' }],
  [{ emoji: '🛁', name: 'Bathtub', sizeValue: 9, idleAnim: 'sway' }, { emoji: '🥣', name: 'Bowl', sizeValue: 3, idleAnim: 'sway' }],
  [{ emoji: '🏊', name: 'Pool', sizeValue: 10, idleAnim: 'sway' }, { emoji: '🫗', name: 'Glass', sizeValue: 2, idleAnim: 'sway' }],
  [{ emoji: '🧴', name: 'Bottle', sizeValue: 5, idleAnim: 'sway' }, { emoji: '🥄', name: 'Spoon', sizeValue: 1, idleAnim: 'sway' }],
];

const ATTRIBUTE_LABELS: Record<ComparisonType, string> = {
  'taller': 'TALLER',
  'shorter': 'SHORTER',
  'longer': 'LONGER',
  'heavier': 'HEAVIER',
  'lighter': 'LIGHTER',
  'holds-more': 'one that HOLDS MORE',
};

const BONUS_ANIMALS = [
  { emoji: '🦈', name: 'Great White Shark' },
  { emoji: '🦜', name: 'Rainbow Lorikeet' },
  { emoji: '🐋', name: 'Humpback Whale' },
  { emoji: '🦩', name: 'Flamingo' },
];

const CORRECT_MESSAGES = [
  "PERFECT SHOT!", "BRILLIANT!", "WHAT AN EYE!", "SAFARI STAR!",
  "INCREDIBLE!", "AMAZING SNAP!", "NAILED IT!", "PICTURE PERFECT!",
];

const WRONG_MESSAGES = [
  "NOT QUITE...", "WRONG ANIMAL!", "TRY AGAIN!", "OOPS!",
  "LOOK CLOSER!", "MISSED IT!",
];

// ── Helpers ────────────────────────────────────────────────────────────────

let _id = 0;
const nextId = () => ++_id;

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateComparison(roundNum: number, usedKeys: Set<string>): ComparisonPair {
  let pools: { type: ComparisonType; pairs: [AnimalData, AnimalData][] }[];

  if (roundNum <= 4) {
    pools = [
      { type: 'taller', pairs: TALLER_PAIRS },
      { type: 'shorter', pairs: SHORTER_PAIRS },
      { type: 'longer', pairs: LONGER_PAIRS },
    ];
  } else if (roundNum <= 10) {
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

  let pool: { type: ComparisonType; pairs: [AnimalData, AnimalData][] };
  let pair: [AnimalData, AnimalData];
  let key: string;
  let attempts = 0;

  do {
    pool = pickRandom(pools);
    pair = pickRandom(pool.pairs);
    key = `${pool.type}-${pair[0].name}-${pair[1].name}`;
    attempts++;
  } while (usedKeys.has(key) && attempts < 30);
  usedKeys.add(key);

  const correctGoesLeft = Math.random() > 0.5;
  const left = correctGoesLeft ? { ...pair[0] } : { ...pair[1] };
  const right = correctGoesLeft ? { ...pair[1] } : { ...pair[0] };

  const label = ATTRIBUTE_LABELS[pool.type];

  return {
    prompt: `SNAP the ${label} one!`,
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
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [comparison, setComparison] = useState<ComparisonPair | null>(null);
  const [answered, setAnswered] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const [album, setAlbum] = useState<PhotoEntry[]>([]);
  const [showAlbum, setShowAlbum] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [viewfinderSide, setViewfinderSide] = useState<0 | 1 | null>(null);
  const [timer, setTimer] = useState(8);
  const [timerMax, setTimerMax] = useState(8);
  const [timerRunning, setTimerRunning] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clouds, setClouds] = useState<CloudData[]>([]);
  const [flyingPhoto, setFlyingPhoto] = useState<{ emoji: string; side: number } | null>(null);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [bonusAnimal, setBonusAnimal] = useState<{ emoji: string; name: string } | null>(null);
  const [bonusTimer, setBonusTimer] = useState(0);
  const [bonusSnapped, setBonusSnapped] = useState(false);
  const [jeepBounce, setJeepBounce] = useState(0);
  const [animalEnter, setAnimalEnter] = useState(false);
  const [scorePopup, setScorePopup] = useState<{ value: number; id: number } | null>(null);
  const [showMeasure, setShowMeasure] = useState(false);
  const [landscapeOffset, setLandscapeOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const usedKeysRef = useRef<Set<string>>(new Set());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalRounds = 18;

  // ── Initialize clouds ─────────────────────────────────────────────────
  useEffect(() => {
    const newClouds: CloudData[] = [];
    for (let layer = 0; layer < 3; layer++) {
      for (let i = 0; i < 3; i++) {
        newClouds.push({
          id: nextId(),
          x: Math.random() * 120 - 10,
          y: 3 + layer * 8 + Math.random() * 6,
          speed: 0.15 + layer * 0.1 + Math.random() * 0.1,
          scale: 0.5 + layer * 0.3 + Math.random() * 0.3,
          opacity: 0.25 + layer * 0.1 + Math.random() * 0.15,
          layer,
        });
      }
    }
    setClouds(newClouds);
  }, []);

  // ── Main animation loop ───────────────────────────────────────────────
  useEffect(() => {
    const animate = (ts: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const dt = Math.min((ts - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = ts;

      setClouds(prev => prev.map(c => {
        let nx = c.x + c.speed * dt * 0.04;
        if (nx > 115) nx = -15;
        return { ...c, x: nx };
      }));

      setParticles(prev => prev
        .map(p => ({
          ...p,
          x: p.x + p.vx * dt,
          y: p.y + p.vy * dt,
          vy: p.type === 'sparkle' ? p.vy + 0.02 * dt : p.vy,
          life: p.life - dt,
        }))
        .filter(p => p.life > 0)
      );

      setJeepBounce(Math.sin(ts * 0.004) * 2);
      setLandscapeOffset(prev => (prev + 0.015 * dt) % 100);

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  // ── Particle spawners ─────────────────────────────────────────────────
  const spawnDust = useCallback((x: number, y: number, count = 10) => {
    const newP: Particle[] = Array.from({ length: count }, () => ({
      id: nextId(), x, y,
      vx: (Math.random() - 0.5) * 2.5,
      vy: -Math.random() * 1.5 - 0.5,
      life: 40 + Math.random() * 30, maxLife: 70,
      size: 3 + Math.random() * 6,
      color: `hsla(${30 + Math.random() * 20}, 60%, ${60 + Math.random() * 20}%, 0.6)`,
      type: 'dust' as const,
    }));
    setParticles(prev => [...prev, ...newP]);
  }, []);

  const spawnSparkles = useCallback((x: number, y: number, count = 15) => {
    const newP: Particle[] = Array.from({ length: count }, () => ({
      id: nextId(), x, y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4 - 1,
      life: 30 + Math.random() * 25, maxLife: 55,
      size: 2 + Math.random() * 4,
      color: `hsla(${40 + Math.random() * 30}, 100%, ${70 + Math.random() * 20}%, 0.9)`,
      type: 'sparkle' as const,
    }));
    setParticles(prev => [...prev, ...newP]);
  }, []);

  const spawnLensFlare = useCallback((x: number, y: number) => {
    const newP: Particle[] = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      return {
        id: nextId(), x, y,
        vx: Math.cos(angle) * 3,
        vy: Math.sin(angle) * 3,
        life: 20 + Math.random() * 10, maxLife: 30,
        size: 3 + Math.random() * 3,
        color: `hsla(${50 + Math.random() * 20}, 100%, 85%, 0.8)`,
        type: 'lens' as const,
      };
    });
    setParticles(prev => [...prev, ...newP]);
  }, []);

  const spawnStars = useCallback((x: number, y: number, count = 6) => {
    const newP: Particle[] = Array.from({ length: count }, () => ({
      id: nextId(), x, y,
      vx: (Math.random() - 0.5) * 3,
      vy: -Math.random() * 2.5 - 1,
      life: 35 + Math.random() * 20, maxLife: 55,
      size: 6 + Math.random() * 6,
      color: '#ffd700',
      type: 'star' as const,
    }));
    setParticles(prev => [...prev, ...newP]);
  }, []);

  // ── Timer logic ───────────────────────────────────────────────────────
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!timerRunning || timer <= 0) return;

    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          setTimerRunning(false);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerRunning, timer]);

  // ── Game logic ────────────────────────────────────────────────────────
  const handleTimeout = useCallback(() => {
    if (answered !== null) return;
    setAnswered(-1);
    setIsCorrect(false);
    setMessage('TOO SLOW!');
    setCombo(0);
    setLives(prev => {
      const nl = prev - 1;
      if (nl <= 0) {
        setTimeout(() => setScreen('gameover'), 1200);
      } else {
        setTimeout(() => {
          setScreen('result');
        }, 1200);
      }
      return nl;
    });
    setShakeScreen(true);
    setTimeout(() => setShakeScreen(false), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered]);

  const startGame = useCallback(() => {
    setRound(0);
    setScore(0);
    setCombo(0);
    setLives(3);
    setAlbum([]);
    setShowAlbum(false);
    usedKeysRef.current = new Set();
    setScreen('playing');
    launchRound(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const launchRound = useCallback((rnd: number) => {
    const comp = generateComparison(rnd, usedKeysRef.current);
    setComparison(comp);
    setAnswered(null);
    setIsCorrect(null);
    setMessage('');
    setShowFlash(false);
    setViewfinderSide(null);
    setFlyingPhoto(null);
    setShakeScreen(false);
    setScorePopup(null);
    setShowMeasure(false);
    setAnimalEnter(false);

    const tMax = rnd < 4 ? 10 : rnd < 8 ? 8 : rnd < 12 ? 7 : 6;
    setTimer(tMax);
    setTimerMax(tMax);

    // Stagger animal entrance
    setTimeout(() => {
      setAnimalEnter(true);
      spawnDust(28, 72, 8);
      spawnDust(72, 72, 8);
    }, 150);

    setTimeout(() => setTimerRunning(true), 400);
  }, [spawnDust]);

  const handleAnswer = useCallback((chosenIndex: number) => {
    if (answered !== null || !comparison) return;
    setTimerRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);

    const correct = chosenIndex === comparison.correctIndex;
    setAnswered(chosenIndex);
    setIsCorrect(correct);

    if (correct) {
      const comboBonus = combo * 10;
      const timeBonus = Math.floor(timer * 5);
      const roundPoints = 50 + comboBonus + timeBonus;
      setScore(prev => prev + roundPoints);
      setCombo(prev => prev + 1);
      setMessage(pickRandom(CORRECT_MESSAGES));

      setScorePopup({ value: roundPoints, id: nextId() });
      setTimeout(() => setScorePopup(null), 1200);

      // Viewfinder + flash sequence
      setViewfinderSide(comparison.correctIndex as 0 | 1);
      setTimeout(() => {
        setShowFlash(true);
        spawnLensFlare(comparison.correctIndex === 0 ? 30 : 70, 55);
        setTimeout(() => setShowFlash(false), 250);
      }, 350);

      // Show measure bars
      setTimeout(() => setShowMeasure(true), 500);

      // Sparkles on correct animal
      const cx = comparison.correctIndex === 0 ? 28 : 72;
      setTimeout(() => spawnSparkles(cx, 50, 18), 400);
      setTimeout(() => spawnStars(cx, 45, 8), 600);

      // Flying photo
      const correctItem = comparison.correctIndex === 0 ? comparison.left : comparison.right;
      setTimeout(() => {
        setFlyingPhoto({ emoji: correctItem.emoji, side: comparison.correctIndex });
      }, 700);

      // Add to album
      setTimeout(() => {
        setAlbum(prev => [...prev, {
          id: nextId(),
          emoji: correctItem.emoji,
          name: correctItem.name,
          attribute: comparison.attribute,
          rotation: (Math.random() - 0.5) * 16,
          timestamp: Date.now(),
        }]);
        setFlyingPhoto(null);
      }, 1200);

      setTimeout(() => {
        const nextRound = round + 1;
        // Bonus round every 5 correct photos
        if (album.length > 0 && (album.length + 1) % 5 === 0) {
          setScreen('bonus');
          const bonus = pickRandom(BONUS_ANIMALS);
          setBonusAnimal(bonus);
          setBonusTimer(4);
          setBonusSnapped(false);
        } else if (nextRound >= totalRounds) {
          setScreen('complete');
        } else {
          setScreen('result');
        }
      }, 1600);
    } else {
      setMessage(pickRandom(WRONG_MESSAGES));
      setCombo(0);
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 500);
      setLives(prev => {
        const nl = prev - 1;
        if (nl <= 0) {
          setTimeout(() => setScreen('gameover'), 1200);
        } else {
          setTimeout(() => setScreen('result'), 1200);
        }
        return nl;
      });
    }
  }, [answered, comparison, combo, timer, round, album, spawnLensFlare, spawnSparkles, spawnStars]);

  const advanceFromResult = useCallback(() => {
    const nextRound = round + 1;
    if (nextRound >= totalRounds) {
      setScreen('complete');
    } else {
      setRound(nextRound);
      setScreen('playing');
      launchRound(nextRound);
    }
  }, [round, launchRound]);

  // ── Bonus round logic ─────────────────────────────────────────────────
  useEffect(() => {
    if (screen !== 'bonus' || bonusSnapped) return;
    const iv = setInterval(() => {
      setBonusTimer(prev => {
        if (prev <= 1) {
          clearInterval(iv);
          setTimeout(() => {
            const nextRound = round + 1;
            if (nextRound >= totalRounds) {
              setScreen('complete');
            } else {
              setRound(nextRound);
              setScreen('playing');
              launchRound(nextRound);
            }
          }, 800);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [screen, bonusSnapped, round, launchRound]);

  const handleBonusSnap = useCallback(() => {
    if (bonusSnapped || bonusTimer <= 0) return;
    setBonusSnapped(true);
    const bonusPts = bonusTimer * 50;
    setScore(prev => prev + bonusPts);
    setShowFlash(true);
    spawnSparkles(50, 45, 25);
    spawnStars(50, 40, 10);
    setScorePopup({ value: bonusPts, id: nextId() });
    setTimeout(() => {
      setShowFlash(false);
      setScorePopup(null);
    }, 400);

    if (bonusAnimal) {
      setAlbum(prev => [...prev, {
        id: nextId(),
        emoji: bonusAnimal.emoji,
        name: bonusAnimal.name,
        attribute: 'rare',
        rotation: (Math.random() - 0.5) * 12,
        timestamp: Date.now(),
      }]);
    }

    setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound >= totalRounds) {
        setScreen('complete');
      } else {
        setRound(nextRound);
        setScreen('playing');
        launchRound(nextRound);
      }
    }, 1200);
  }, [bonusSnapped, bonusTimer, bonusAnimal, round, launchRound, spawnSparkles, spawnStars]);

  // ── Shared background renderer ────────────────────────────────────────
  const renderBackground = () => (
    <>
      <div className="ss-sky" />
      <div className="ss-sun" />
      <div className="ss-mountains-far" style={{ backgroundPositionX: `${-landscapeOffset * 0.3}%` }} />
      <div className="ss-mountains-mid" style={{ backgroundPositionX: `${-landscapeOffset * 0.6}%` }} />
      <div className="ss-ground" />
      <div className="ss-ground-detail" style={{ backgroundPositionX: `${-landscapeOffset * 2}%` }} />
      {clouds.map(c => (
        <div key={c.id} className={`ss-cloud layer-${c.layer}`}
          style={{ left: `${c.x}%`, top: `${c.y}%`, transform: `scale(${c.scale})`, opacity: c.opacity }} />
      ))}
    </>
  );

  const renderParticles = () => (
    <>
      {particles.map(p => {
        const alpha = Math.max(0, p.life / p.maxLife);
        if (p.type === 'star') {
          return (
            <div key={p.id} className="ss-particle-star"
              style={{ left: `${p.x}%`, top: `${p.y}%`, opacity: alpha, fontSize: p.size }}>
              &#11088;
            </div>
          );
        }
        return (
          <div key={p.id} className={`ss-particle ss-particle-${p.type}`}
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.size * alpha, height: p.size * alpha,
              opacity: alpha, background: p.color,
            }} />
        );
      })}
    </>
  );

  const renderJeep = () => (
    <div className="ss-jeep" style={{ transform: `translateY(${jeepBounce}px)` }}>
      <div className="ss-jeep-dust-left" />
      <span className="ss-jeep-body">🚙</span>
      <div className="ss-jeep-dust-right" />
    </div>
  );

  const renderLives = () => (
    <div className="ss-lives">
      {Array.from({ length: 3 }, (_, i) => (
        <span key={i} className={`ss-life ${i < lives ? 'active' : 'lost'}`}>
          {i < lives ? '📷' : '💔'}
        </span>
      ))}
    </div>
  );

  // ── INTRO SCREEN ──────────────────────────────────────────────────────
  if (screen === 'intro') {
    return (
      <div className="ss-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="ss-intro">
          {renderBackground()}
          <div className="ss-intro-animals">
            <div className="ss-peek-animal ss-peek-left">🦘</div>
            <div className="ss-peek-animal ss-peek-right">🐨</div>
            <div className="ss-peek-animal ss-peek-top">🦅</div>
          </div>
          {renderJeep()}
          <div className="ss-intro-content">
            <div className="ss-logo">
              <span className="ss-logo-icon">📷</span>
              <h1>Size Safari</h1>
              <span className="ss-logo-icon ss-logo-flip">🔭</span>
            </div>
            <p className="ss-tagline">Australian Outback Photography Adventure!</p>
            <div className="ss-instructions">
              <h3>How to Play</h3>
              <div className="ss-instr-row">
                <div className="ss-instr-visual">
                  <span className="ss-instr-big">🦘</span>
                  <span className="ss-instr-vs">VS</span>
                  <span className="ss-instr-small">🐸</span>
                </div>
                <p>Two animals appear in the outback</p>
              </div>
              <div className="ss-instr-row">
                <div className="ss-instr-visual">
                  <span className="ss-instr-prompt">SNAP the TALLER one!</span>
                </div>
                <p>Read the challenge and <strong>photograph</strong> the right one!</p>
              </div>
              <div className="ss-instr-row">
                <div className="ss-instr-visual">
                  <span className="ss-instr-icon">📸</span>
                  <span className="ss-instr-arrow">&#8594;</span>
                  <span className="ss-instr-icon">📖</span>
                </div>
                <p>Fill your <strong>safari album</strong> before they run away!</p>
              </div>
            </div>
            <button className="ss-start-btn" onClick={startGame}>
              <span>🦁</span> Start Safari <span>🦁</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── GAME OVER SCREEN ──────────────────────────────────────────────────
  if (screen === 'gameover') {
    return (
      <div className="ss-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="ss-gameover">
          {renderBackground()}
          <div className="ss-gameover-content">
            <div className="ss-gameover-badge">📷</div>
            <h1>Safari Over!</h1>
            <p className="ss-gameover-sub">Your camera ran out of film!</p>
            <div className="ss-gameover-stats">
              <div className="ss-stat">
                <span className="ss-stat-val">{score}</span>
                <span className="ss-stat-lbl">Score</span>
              </div>
              <div className="ss-stat">
                <span className="ss-stat-val">{album.length}</span>
                <span className="ss-stat-lbl">Photos</span>
              </div>
              <div className="ss-stat">
                <span className="ss-stat-val">{round}</span>
                <span className="ss-stat-lbl">Rounds</span>
              </div>
            </div>
            {album.length > 0 && (
              <div className="ss-gameover-album">
                {album.slice(-6).map(p => (
                  <div key={p.id} className="ss-mini-polaroid" style={{ transform: `rotate(${p.rotation}deg)` }}>
                    <span>{p.emoji}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="ss-gameover-btns">
              <button className="ss-primary-btn" onClick={startGame}>Try Again</button>
              <button className="ss-secondary-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── COMPLETE SCREEN ───────────────────────────────────────────────────
  if (screen === 'complete') {
    return (
      <div className="ss-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="ss-complete">
          {renderBackground()}
          <div className="ss-complete-content">
            <div className="ss-complete-celebration">&#127881; &#127881; &#127881;</div>
            <h1>Safari Complete!</h1>
            <p className="ss-complete-sub">What an incredible adventure!</p>
            <div className="ss-complete-stats">
              <div className="ss-stat gold">
                <span className="ss-stat-val">{score}</span>
                <span className="ss-stat-lbl">Final Score</span>
              </div>
              <div className="ss-stat">
                <span className="ss-stat-val">{album.length}</span>
                <span className="ss-stat-lbl">Photos</span>
              </div>
              <div className="ss-stat">
                <span className="ss-stat-val">{lives}</span>
                <span className="ss-stat-lbl">Lives Left</span>
              </div>
            </div>
            <div className="ss-complete-album">
              <h3>Your Safari Album</h3>
              <div className="ss-album-grid">
                {album.map(p => (
                  <div key={p.id} className="ss-album-polaroid" style={{ transform: `rotate(${p.rotation}deg)` }}>
                    <span className="ss-pol-emoji">{p.emoji}</span>
                    <span className="ss-pol-name">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ss-complete-btns">
              <button className="ss-primary-btn" onClick={startGame}>Play Again</button>
              <button className="ss-secondary-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── BONUS ROUND SCREEN ────────────────────────────────────────────────
  if (screen === 'bonus' && bonusAnimal) {
    return (
      <div className="ss-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="ss-bonus">
          {renderBackground()}
          {renderParticles()}
          {showFlash && <div className="ss-flash" />}
          <div className="ss-bonus-content">
            <div className="ss-bonus-badge">RARE SIGHTING!</div>
            <div className={`ss-bonus-animal ${bonusSnapped ? 'snapped' : ''}`}>
              <span className="ss-bonus-emoji">{bonusAnimal.emoji}</span>
              <span className="ss-bonus-name">{bonusAnimal.name}</span>
            </div>
            {!bonusSnapped && (
              <>
                <div className="ss-bonus-timer">
                  <div className="ss-bonus-timer-fill" style={{ width: `${(bonusTimer / 4) * 100}%` }} />
                </div>
                <button className="ss-shutter-btn" onClick={handleBonusSnap}>
                  <span className="ss-shutter-inner" />
                </button>
                <p className="ss-bonus-hint">TAP to snap!</p>
              </>
            )}
            {bonusSnapped && scorePopup && (
              <div className="ss-score-fly">+{scorePopup.value}</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── RESULT SCREEN ─────────────────────────────────────────────────────
  if (screen === 'result') {
    const correctItem = comparison
      ? comparison.correctIndex === 0 ? comparison.left : comparison.right
      : null;

    return (
      <div className="ss-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="ss-result">
          {renderBackground()}
          <div className="ss-result-content">
            <div className={`ss-result-badge ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? '📸' : '❌'}
            </div>
            <h2 className={`ss-result-msg ${isCorrect ? 'correct' : 'wrong'}`}>
              {message}
            </h2>
            {correctItem && (
              <div className="ss-result-answer">
                <span className="ss-result-emoji">{correctItem.emoji}</span>
                <span className="ss-result-explain">
                  The {correctItem.name} is the {comparison?.attribute === 'holds-more' ? 'one that holds more' : `${comparison?.attribute} one`}
                </span>
              </div>
            )}
            {isCorrect && combo > 2 && (
              <div className="ss-combo-badge">{combo} COMBO!</div>
            )}
            {renderLives()}
            <button className="ss-continue-btn" onClick={advanceFromResult}>
              {round + 1 >= totalRounds ? 'See Results' : 'Next'} &#8594;
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── PLAYING SCREEN ────────────────────────────────────────────────────
  return (
    <div className="ss-root" ref={containerRef}>
      <style>{styles}</style>
      <div className={`ss-game ${shakeScreen ? 'ss-shake' : ''}`}>
        {renderBackground()}
        {renderParticles()}

        {/* HUD */}
        <div className="ss-hud">
          <div className="ss-hud-left">
            <button className="ss-back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>&#8592;</button>
            <div className="ss-round-pill">
              {round + 1}/{totalRounds}
            </div>
          </div>
          <div className="ss-hud-center">
            {renderLives()}
          </div>
          <div className="ss-hud-right">
            {combo >= 2 && (
              <div className="ss-combo-pill">
                <span>&#128293;</span>{combo}x
              </div>
            )}
            <button className="ss-album-btn" onClick={() => setShowAlbum(!showAlbum)}>
              &#128214; <span className="ss-album-count">{album.length}</span>
            </button>
            <div className="ss-score-pill">
              &#11088; {score}
            </div>
          </div>
        </div>

        {/* Timer bar */}
        <div className="ss-timer-track">
          <div
            className={`ss-timer-fill ${timer <= 3 ? 'urgent' : ''}`}
            style={{ width: `${(timer / timerMax) * 100}%` }}
          />
          <span className="ss-timer-text">{timer}s</span>
        </div>

        {/* Prompt banner */}
        {comparison && (
          <div className="ss-prompt-banner" key={round}>
            <div className="ss-prompt-camera">&#128247;</div>
            <span className="ss-prompt-text">{comparison.prompt}</span>
          </div>
        )}

        {/* Comparison area */}
        {comparison && (
          <div className="ss-arena">
            {/* Left animal */}
            <button
              className={`ss-animal-card left ${animalEnter ? 'entered' : ''} ${answered === 0 ? (isCorrect ? 'correct-snap' : 'wrong-snap') : ''} ${answered !== null && comparison.correctIndex === 0 && answered !== 0 ? 'was-correct' : ''}`}
              onClick={() => handleAnswer(0)}
              disabled={answered !== null}
            >
              {viewfinderSide === 0 && <div className="ss-viewfinder" />}
              <div className="ss-animal-shadow" />
              <span className={`ss-animal-emoji anim-${comparison.left.idleAnim}`}>
                {comparison.left.emoji}
              </span>
              <span className="ss-animal-name">{comparison.left.name}</span>
            </button>

            {/* VS */}
            <div className="ss-vs">
              <span>VS</span>
            </div>

            {/* Right animal */}
            <button
              className={`ss-animal-card right ${animalEnter ? 'entered' : ''} ${answered === 1 ? (isCorrect ? 'correct-snap' : 'wrong-snap') : ''} ${answered !== null && comparison.correctIndex === 1 && answered !== 1 ? 'was-correct' : ''}`}
              onClick={() => handleAnswer(1)}
              disabled={answered !== null}
            >
              {viewfinderSide === 1 && <div className="ss-viewfinder" />}
              <div className="ss-animal-shadow" />
              <span className={`ss-animal-emoji anim-${comparison.right.idleAnim}`}>
                {comparison.right.emoji}
              </span>
              <span className="ss-animal-name">{comparison.right.name}</span>
            </button>
          </div>
        )}

        {/* Measure bars */}
        {showMeasure && comparison && (
          <div className="ss-measure-area">
            <div className="ss-measure-row">
              <span className="ss-measure-label">{comparison.left.name}</span>
              <div className="ss-measure-track">
                <div className="ss-measure-fill left" style={{ width: `${(comparison.left.sizeValue / 10) * 100}%` }} />
              </div>
            </div>
            <div className="ss-measure-row">
              <span className="ss-measure-label">{comparison.right.name}</span>
              <div className="ss-measure-track">
                <div className="ss-measure-fill right" style={{ width: `${(comparison.right.sizeValue / 10) * 100}%` }} />
              </div>
            </div>
          </div>
        )}

        {/* Jeep */}
        {renderJeep()}

        {/* Camera flash */}
        {showFlash && <div className="ss-flash" />}

        {/* Flying polaroid */}
        {flyingPhoto && (
          <div className="ss-flying-photo" style={{ '--fly-start': flyingPhoto.side === 0 ? '25%' : '75%' } as React.CSSProperties}>
            <span>{flyingPhoto.emoji}</span>
          </div>
        )}

        {/* Score popup */}
        {scorePopup && (
          <div key={scorePopup.id} className="ss-score-fly">+{scorePopup.value}</div>
        )}

        {/* Guide message */}
        {message && answered !== null && (
          <div className={`ss-guide ${isCorrect ? 'correct' : 'wrong'}`}>
            <span className="ss-guide-avatar">&#129523;</span>
            <span className="ss-guide-msg">{message}</span>
          </div>
        )}

        {/* Album overlay */}
        {showAlbum && (
          <div className="ss-album-overlay" onClick={() => setShowAlbum(false)}>
            <div className="ss-album-panel" onClick={e => e.stopPropagation()}>
              <h3>&#128214; Safari Album</h3>
              <div className="ss-album-grid">
                {album.length === 0 ? (
                  <p className="ss-album-empty">No photos yet! Start snapping!</p>
                ) : album.map(p => (
                  <div key={p.id} className="ss-album-polaroid" style={{ transform: `rotate(${p.rotation}deg)` }}>
                    <span className="ss-pol-emoji">{p.emoji}</span>
                    <span className="ss-pol-name">{p.name}</span>
                  </div>
                ))}
              </div>
              <button className="ss-secondary-btn" onClick={() => setShowAlbum(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .ss-root {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    position: relative;
    background: #1a0f05;
  }

  /* ═══ ENVIRONMENT ═══ */

  .ss-sky {
    position: absolute; inset: 0;
    background: linear-gradient(180deg,
      #1a0a2e 0%, #2d1b69 6%, #7b2d8e 12%, #c0392b 18%,
      #e67e22 26%, #f39c12 34%, #f5b041 42%,
      #fdebd0 55%, #87ceeb 72%, #5dade2 100%);
    z-index: 0;
  }

  .ss-sun {
    position: absolute;
    top: 16%; left: 50%;
    width: 60px; height: 60px;
    transform: translateX(-50%);
    background: radial-gradient(circle, #fff9c4 0%, #ffd54f 30%, #ff8f00 60%, transparent 72%);
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 60px 20px rgba(255,213,79,0.4), 0 0 120px 40px rgba(255,143,0,0.2);
    animation: sunPulse 4s ease-in-out infinite;
  }

  @keyframes sunPulse {
    0%, 100% { box-shadow: 0 0 60px 20px rgba(255,213,79,0.4), 0 0 120px 40px rgba(255,143,0,0.2); }
    50% { box-shadow: 0 0 80px 30px rgba(255,213,79,0.5), 0 0 150px 50px rgba(255,143,0,0.25); }
  }

  .ss-mountains-far {
    position: absolute; bottom: 26%; left: -10%; right: -10%; height: 22%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpolygon points='0,200 100,60 200,180 350,30 500,160 600,50 750,170 900,20 1050,150 1200,80 1200,200' fill='%234a3728' opacity='0.5'/%3E%3C/svg%3E") repeat-x;
    background-size: 100% 100%;
    z-index: 1;
    opacity: 0.6;
  }

  .ss-mountains-mid {
    position: absolute; bottom: 20%; left: -10%; right: -10%; height: 20%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 180'%3E%3Cpolygon points='0,180 80,50 180,140 300,20 420,130 550,40 680,120 800,30 920,110 1000,60 1000,180' fill='%235d4037' opacity='0.6'/%3E%3C/svg%3E") repeat-x;
    background-size: 100% 100%;
    z-index: 2;
  }

  .ss-ground {
    position: absolute; bottom: 0; left: 0; right: 0; height: 24%;
    background: linear-gradient(180deg, #8d6e43 0%, #a67c52 20%, #c4a265 50%, #d4b577 80%, #c9a860 100%);
    z-index: 3;
  }

  .ss-ground::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 8px;
    background: linear-gradient(90deg, #6b8e23, #556b2f, #6b8e23, #8fbc8f, #6b8e23, #556b2f, #6b8e23);
    background-size: 200% 100%;
    z-index: 4;
  }

  .ss-ground-detail {
    position: absolute; bottom: 0; left: 0; right: 0; height: 24%;
    background: repeating-linear-gradient(90deg,
      transparent 0px, transparent 40px,
      rgba(139,119,80,0.2) 40px, rgba(139,119,80,0.2) 42px);
    z-index: 4;
    pointer-events: none;
  }

  /* ═══ CLOUDS ═══ */

  .ss-cloud {
    position: absolute;
    width: 80px; height: 30px;
    background: rgba(255,255,255,0.9);
    border-radius: 30px;
    z-index: 5;
    pointer-events: none;
  }
  .ss-cloud::before {
    content: ''; position: absolute; top: -12px; left: 14px;
    width: 30px; height: 30px; background: rgba(255,255,255,0.9); border-radius: 50%;
  }
  .ss-cloud::after {
    content: ''; position: absolute; top: -7px; right: 12px;
    width: 22px; height: 22px; background: rgba(255,255,255,0.9); border-radius: 50%;
  }
  .ss-cloud.layer-0 { filter: blur(1px); }
  .ss-cloud.layer-2 { filter: blur(0.3px); }

  /* ═══ PARTICLES ═══ */

  .ss-particle {
    position: absolute; border-radius: 50%; pointer-events: none; z-index: 60;
    transform: translate(-50%, -50%);
  }
  .ss-particle-dust { filter: blur(1px); }
  .ss-particle-sparkle { border-radius: 2px; transform: translate(-50%, -50%) rotate(45deg); }
  .ss-particle-lens { filter: blur(2px); }
  .ss-particle-star {
    position: absolute; pointer-events: none; z-index: 60;
    transform: translate(-50%, -50%);
    animation: starTwinkle 0.5s ease-in-out infinite alternate;
  }

  @keyframes starTwinkle {
    0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    100% { transform: translate(-50%, -50%) scale(1.2) rotate(20deg); }
  }

  /* ═══ JEEP ═══ */

  .ss-jeep {
    position: absolute; bottom: 4%; left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    display: flex; align-items: center;
    animation: jeepDrive 0.3s ease-in-out infinite alternate;
  }

  @keyframes jeepDrive {
    0% { transform: translateX(-50%) rotate(-0.3deg); }
    100% { transform: translateX(-50%) rotate(0.3deg); }
  }

  .ss-jeep-body {
    font-size: 3.5rem;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
    display: block;
    transform: scaleX(-1);
  }

  .ss-jeep-dust-left, .ss-jeep-dust-right {
    position: absolute; bottom: 0; width: 30px; height: 10px;
    background: radial-gradient(ellipse, rgba(210,180,140,0.5) 0%, transparent 70%);
    animation: dustPuff 0.6s ease-out infinite;
  }
  .ss-jeep-dust-left { left: -20px; }
  .ss-jeep-dust-right { right: -20px; animation-delay: 0.3s; }

  @keyframes dustPuff {
    0% { transform: scaleX(0.8); opacity: 0.5; }
    100% { transform: scaleX(2.5); opacity: 0; }
  }

  /* ═══ LIVES ═══ */

  .ss-lives {
    display: flex; gap: 4px; align-items: center;
  }
  .ss-life {
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }
  .ss-life.lost {
    opacity: 0.4;
    filter: grayscale(1);
    animation: lifeLost 0.5s ease;
  }
  @keyframes lifeLost {
    0% { transform: scale(1.3); }
    50% { transform: scale(0.8); }
    100% { transform: scale(1); }
  }

  /* ═══ INTRO SCREEN ═══ */

  .ss-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ss-intro-animals { position: absolute; inset: 0; z-index: 10; pointer-events: none; }

  .ss-peek-animal {
    position: absolute; font-size: 4rem;
    animation: peekIn 3s ease-in-out infinite;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));
  }
  .ss-peek-left { bottom: 18%; left: 3%; animation-delay: 0s; }
  .ss-peek-right { bottom: 18%; right: 3%; animation-delay: 0.8s; }
  .ss-peek-top { top: 15%; right: 15%; font-size: 3rem; animation-delay: 1.5s; animation-name: peekSoar; }

  @keyframes peekIn {
    0%, 100% { transform: translateY(40%) rotate(-5deg); }
    50% { transform: translateY(0%) rotate(5deg); }
  }

  @keyframes peekSoar {
    0%, 100% { transform: translateY(0) rotate(-3deg) scale(1); }
    50% { transform: translateY(-15px) rotate(3deg) scale(1.1); }
  }

  .ss-intro-content {
    position: relative; z-index: 20; text-align: center;
    padding: 1.5rem; max-width: 480px;
  }

  .ss-logo {
    display: flex; align-items: center; justify-content: center;
    gap: 0.7rem; margin-bottom: 0.3rem;
  }
  .ss-logo h1 {
    font-size: clamp(2rem, 8vw, 3.2rem);
    font-weight: 900;
    background: linear-gradient(135deg, #f39c12, #e67e22, #d35400, #e74c3c);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.4));
  }
  .ss-logo-icon {
    font-size: 2.2rem;
    animation: iconBounce 2s ease-in-out infinite;
  }
  .ss-logo-flip { animation-delay: 0.4s; }

  @keyframes iconBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(10deg); }
  }

  .ss-tagline {
    color: rgba(255,255,255,0.85); font-size: 1.1rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 6px rgba(0,0,0,0.6);
  }

  .ss-instructions {
    background: rgba(0,0,0,0.4); border: 1.5px solid rgba(255,255,255,0.15);
    border-radius: 20px; padding: 1.2rem 1.5rem; margin-bottom: 1.5rem;
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  }
  .ss-instructions h3 { color: white; font-size: 1.1rem; margin-bottom: 1rem; }

  .ss-instr-row {
    display: flex; flex-direction: column; align-items: center;
    margin-bottom: 0.8rem; gap: 0.2rem;
  }
  .ss-instr-row:last-child { margin-bottom: 0; }
  .ss-instr-visual { display: flex; align-items: center; gap: 0.5rem; }
  .ss-instr-big { font-size: 2rem; }
  .ss-instr-small { font-size: 1.2rem; }
  .ss-instr-vs {
    font-size: 0.7rem; color: #f39c12; font-weight: 900;
    padding: 0.2rem 0.4rem; border: 2px solid #f39c12; border-radius: 50%;
  }
  .ss-instr-prompt {
    font-size: 0.8rem; font-weight: 700; color: #f5b041;
    background: rgba(243,156,18,0.15); padding: 0.25rem 0.7rem; border-radius: 10px;
  }
  .ss-instr-icon { font-size: 1.4rem; }
  .ss-instr-arrow { color: #f39c12; font-size: 1.1rem; }
  .ss-instr-row p { color: rgba(255,255,255,0.7); font-size: 0.82rem; }
  .ss-instr-row p strong { color: #f5b041; }

  .ss-start-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 0.9rem 2.2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(230,126,34,0.5);
    animation: btnPulse 2s ease-in-out infinite;
  }
  .ss-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(230,126,34,0.65);
  }

  @keyframes btnPulse {
    0%, 100% { box-shadow: 0 8px 30px rgba(230,126,34,0.5); }
    50% { box-shadow: 0 8px 40px rgba(230,126,34,0.7); }
  }

  /* ═══ GAME HUD ═══ */

  .ss-game {
    height: 100%; position: relative; overflow: hidden;
  }

  .ss-game.ss-shake { animation: screenShake 0.4s ease-in-out; }

  @keyframes screenShake {
    0%, 100% { transform: translate(0); }
    15% { transform: translate(-8px, 4px); }
    30% { transform: translate(8px, -4px); }
    45% { transform: translate(-6px, 2px); }
    60% { transform: translate(6px, -2px); }
    75% { transform: translate(-3px, 1px); }
  }

  .ss-hud {
    position: absolute; top: 0; left: 0; right: 0;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.5rem 0.7rem;
    background: linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%);
    z-index: 50;
  }
  .ss-hud-left, .ss-hud-right { display: flex; align-items: center; gap: 0.4rem; }
  .ss-hud-center { display: flex; align-items: center; }

  .ss-back-btn {
    width: 34px; height: 34px;
    background: rgba(255,255,255,0.15); border: none; border-radius: 10px;
    color: white; font-size: 1rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .ss-back-btn:hover { background: rgba(255,255,255,0.25); }

  .ss-round-pill {
    padding: 0.3rem 0.7rem;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.8rem;
  }

  .ss-combo-pill {
    display: flex; align-items: center; gap: 0.2rem;
    padding: 0.25rem 0.6rem;
    background: linear-gradient(135deg, #f1c40f, #e67e22);
    border-radius: 16px; font-weight: 800; color: white; font-size: 0.8rem;
    box-shadow: 0 0 12px rgba(241,196,15,0.5);
    animation: comboPulse 0.8s ease-in-out infinite;
  }

  @keyframes comboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .ss-album-btn {
    display: flex; align-items: center; gap: 0.2rem;
    padding: 0.25rem 0.5rem;
    background: rgba(255,255,255,0.15); border: none; border-radius: 10px;
    color: white; font-size: 0.85rem; cursor: pointer;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    transition: background 0.2s;
  }
  .ss-album-btn:hover { background: rgba(255,255,255,0.25); }
  .ss-album-count {
    background: #e67e22; border-radius: 50%;
    width: 18px; height: 18px;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 0.6rem; font-weight: 800;
  }

  .ss-score-pill {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.3rem 0.7rem;
    background: rgba(241,196,15,0.2); border-radius: 16px;
    color: #f1c40f; font-weight: 700; font-size: 0.8rem;
  }

  /* ═══ TIMER ═══ */

  .ss-timer-track {
    position: absolute; top: 48px; left: 0; right: 0; height: 6px;
    background: rgba(0,0,0,0.35); z-index: 50;
    display: flex; align-items: center;
  }
  .ss-timer-fill {
    height: 100%;
    background: linear-gradient(90deg, #2ecc71, #27ae60);
    transition: width 1s linear; border-radius: 0 3px 3px 0;
    position: relative;
  }
  .ss-timer-fill.urgent {
    background: linear-gradient(90deg, #e74c3c, #c0392b);
    animation: timerUrgent 0.5s ease-in-out infinite;
  }
  .ss-timer-text {
    position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
    color: rgba(255,255,255,0.7); font-size: 0.6rem; font-weight: 800;
    z-index: 51;
  }

  @keyframes timerUrgent {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* ═══ PROMPT ═══ */

  .ss-prompt-banner {
    position: absolute; top: 62px; left: 50%;
    transform: translateX(-50%); z-index: 40;
    display: flex; align-items: center; gap: 0.5rem;
    animation: promptBounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes promptBounceIn {
    0% { transform: translateX(-50%) translateY(-30px) scale(0.7); opacity: 0; }
    100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
  }

  .ss-prompt-camera {
    font-size: 1.3rem;
    animation: cameraBob 1s ease-in-out infinite;
  }

  @keyframes cameraBob {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  .ss-prompt-text {
    display: inline-block; padding: 0.5rem 1.3rem;
    background: rgba(0,0,0,0.65); border: 2px solid #f39c12;
    border-radius: 30px; color: white;
    font-size: clamp(0.9rem, 3.5vw, 1.2rem); font-weight: 800;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    animation: promptGlow 2s ease-in-out infinite;
  }

  @keyframes promptGlow {
    0%, 100% { box-shadow: 0 0 10px rgba(243,156,18,0.3); }
    50% { box-shadow: 0 0 20px rgba(243,156,18,0.6); }
  }

  /* ═══ ARENA / ANIMAL CARDS ═══ */

  .ss-arena {
    position: absolute; top: 50%; left: 0; right: 0;
    transform: translateY(-55%);
    display: flex; align-items: center; justify-content: center;
    gap: clamp(0.5rem, 3vw, 1.5rem);
    padding: 0 0.8rem; z-index: 20;
  }

  .ss-animal-card {
    position: relative; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    width: clamp(130px, 36vw, 200px); height: clamp(170px, 44vw, 260px);
    background: rgba(255,255,255,0.08);
    border: 3px solid rgba(255,255,255,0.2);
    border-radius: 24px; cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    font-family: 'Nunito', sans-serif; padding: 0.8rem;
    transform: translateY(60px) scale(0.7);
    opacity: 0;
  }

  .ss-animal-card.entered {
    transform: translateY(0) scale(1); opacity: 1;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .ss-animal-card.left.entered { transition-delay: 0.05s; }
  .ss-animal-card.right.entered { transition-delay: 0.15s; }

  .ss-animal-card:hover:not(:disabled) {
    border-color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.14);
    transform: scale(1.06);
  }
  .ss-animal-card:active:not(:disabled) { transform: scale(0.95); }
  .ss-animal-card:disabled { cursor: default; }

  .ss-animal-card.correct-snap {
    border-color: #2ecc71;
    background: rgba(46,204,113,0.25);
    box-shadow: 0 0 35px rgba(46,204,113,0.5);
    animation: correctPulse 0.6s ease;
  }

  @keyframes correctPulse {
    0% { transform: scale(1); }
    30% { transform: scale(1.08); }
    60% { transform: scale(0.98); }
    100% { transform: scale(1); }
  }

  .ss-animal-card.wrong-snap {
    border-color: #e74c3c;
    background: rgba(231,76,60,0.25);
    box-shadow: 0 0 30px rgba(231,76,60,0.4);
    animation: wrongShake 0.5s ease;
  }

  @keyframes wrongShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-10px) rotate(-2deg); }
    40% { transform: translateX(10px) rotate(2deg); }
    60% { transform: translateX(-6px) rotate(-1deg); }
    80% { transform: translateX(6px) rotate(1deg); }
  }

  .ss-animal-card.was-correct {
    border-color: #2ecc71;
    box-shadow: 0 0 20px rgba(46,204,113,0.3);
    animation: hintCorrect 1s ease-in-out 0.4s;
  }

  @keyframes hintCorrect {
    0%, 100% { box-shadow: 0 0 20px rgba(46,204,113,0.3); }
    50% { box-shadow: 0 0 40px rgba(46,204,113,0.6); }
  }

  .ss-animal-shadow {
    position: absolute; bottom: 10px; width: 70%; height: 10px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, transparent 70%);
    border-radius: 50%;
  }

  .ss-animal-emoji {
    font-size: clamp(3.5rem, 12vw, 6rem);
    line-height: 1;
    filter: drop-shadow(0 6px 12px rgba(0,0,0,0.3));
    z-index: 2; position: relative;
  }

  .ss-animal-name {
    margin-top: 0.4rem; font-size: 0.85rem; font-weight: 700;
    color: white; text-shadow: 0 1px 4px rgba(0,0,0,0.6);
    z-index: 2; position: relative;
  }

  /* Animal idle animations */
  .anim-bounce { animation: animalBounce 1s ease-in-out infinite; }
  .anim-sway { animation: animalSway 2.5s ease-in-out infinite; }
  .anim-hop { animation: animalHop 0.8s ease-in-out infinite; }
  .anim-snap { animation: animalSnap 2s ease-in-out infinite; }
  .anim-slither { animation: animalSlither 1.5s ease-in-out infinite; }
  .anim-soar { animation: animalSoar 2s ease-in-out infinite; }
  .anim-waddle { animation: animalWaddle 1.2s ease-in-out infinite; }
  .anim-scuttle { animation: animalScuttle 0.6s ease-in-out infinite; }
  .anim-crawl { animation: animalCrawl 1.8s ease-in-out infinite; }

  @keyframes animalBounce {
    0%, 100% { transform: translateY(0) scaleY(1); }
    40% { transform: translateY(-12px) scaleY(1.05); }
    60% { transform: translateY(-10px) scaleY(1.02); }
  }

  @keyframes animalSway {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  @keyframes animalHop {
    0%, 100% { transform: translateY(0) scaleX(1); }
    30% { transform: translateY(3px) scaleX(1.1) scaleY(0.9); }
    50% { transform: translateY(-15px) scaleX(0.95) scaleY(1.05); }
  }

  @keyframes animalSnap {
    0%, 80%, 100% { transform: scaleX(1); }
    85% { transform: scaleX(1.08); }
    90% { transform: scaleX(0.95); }
  }

  @keyframes animalSlither {
    0%, 100% { transform: translateX(0) skewX(0deg); }
    25% { transform: translateX(4px) skewX(3deg); }
    75% { transform: translateX(-4px) skewX(-3deg); }
  }

  @keyframes animalSoar {
    0%, 100% { transform: translateY(0) rotate(-2deg) scale(1); }
    50% { transform: translateY(-10px) rotate(2deg) scale(1.05); }
  }

  @keyframes animalWaddle {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    25% { transform: rotate(-4deg) translateY(-2px); }
    75% { transform: rotate(4deg) translateY(-2px); }
  }

  @keyframes animalScuttle {
    0%, 100% { transform: translateX(0) scaleY(1); }
    25% { transform: translateX(-3px) scaleY(0.95); }
    75% { transform: translateX(3px) scaleY(0.95); }
  }

  @keyframes animalCrawl {
    0%, 100% { transform: translateX(0) scaleX(1); }
    50% { transform: translateX(4px) scaleX(1.03); }
  }

  /* ═══ VIEWFINDER ═══ */

  .ss-viewfinder {
    position: absolute; inset: -8px;
    border: 3px solid rgba(46,204,113,0.9);
    border-radius: 28px; z-index: 30;
    animation: viewfinderZoom 0.4s ease-out;
  }
  .ss-viewfinder::before, .ss-viewfinder::after {
    content: ''; position: absolute; background: rgba(46,204,113,0.6);
  }
  .ss-viewfinder::before { top: 50%; left: 10px; right: 10px; height: 1.5px; }
  .ss-viewfinder::after { left: 50%; top: 10px; bottom: 10px; width: 1.5px; }

  @keyframes viewfinderZoom {
    0% { transform: scale(1.4); opacity: 0; border-color: rgba(255,255,255,0.5); }
    60% { border-color: rgba(46,204,113,0.9); }
    100% { transform: scale(1); opacity: 1; }
  }

  /* ═══ VS ═══ */

  .ss-vs {
    display: flex; align-items: center; justify-content: center; z-index: 25;
  }
  .ss-vs span {
    font-size: 1.1rem; font-weight: 900; color: #f39c12;
    text-shadow: 0 2px 6px rgba(0,0,0,0.6);
    padding: 0.35rem 0.6rem; border: 2.5px solid #f39c12;
    border-radius: 50%; background: rgba(0,0,0,0.5);
    animation: vsPulse 1.5s ease-in-out infinite;
  }

  @keyframes vsPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* ═══ MEASURE BARS ═══ */

  .ss-measure-area {
    position: absolute; bottom: 14%; left: 50%; transform: translateX(-50%);
    width: clamp(240px, 65%, 420px);
    z-index: 30; display: flex; flex-direction: column; gap: 6px;
    animation: measureSlide 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes measureSlide {
    0% { transform: translateX(-50%) translateY(20px); opacity: 0; }
    100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  }

  .ss-measure-row { display: flex; align-items: center; gap: 6px; }
  .ss-measure-label {
    color: white; font-size: 0.7rem; font-weight: 700;
    width: 65px; text-align: right; text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    flex-shrink: 0;
  }
  .ss-measure-track {
    flex: 1; height: 12px; background: rgba(0,0,0,0.35);
    border-radius: 6px; overflow: hidden;
  }
  .ss-measure-fill {
    height: 100%; border-radius: 6px;
    animation: measureGrow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .ss-measure-fill.left { background: linear-gradient(90deg, #e67e22, #f39c12); }
  .ss-measure-fill.right { background: linear-gradient(90deg, #3498db, #2980b9); }

  @keyframes measureGrow { 0% { width: 0 !important; } }

  /* ═══ CAMERA FLASH ═══ */

  .ss-flash {
    position: absolute; inset: 0; background: white;
    z-index: 100; pointer-events: none;
    animation: flashBurst 0.25s ease-out forwards;
  }

  @keyframes flashBurst {
    0% { opacity: 0.95; }
    40% { opacity: 0.6; }
    100% { opacity: 0; }
  }

  /* ═══ FLYING PHOTO ═══ */

  .ss-flying-photo {
    position: absolute; z-index: 90; pointer-events: none;
    animation: photoFly 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    background: white; padding: 6px; border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }
  .ss-flying-photo span { font-size: 2.2rem; display: block; }

  @keyframes photoFly {
    0% { top: 48%; left: var(--fly-start); transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
    100% { top: 2%; left: 82%; transform: translate(-50%, -50%) scale(0.3) rotate(12deg); opacity: 0.5; }
  }

  /* ═══ SCORE POPUP ═══ */

  .ss-score-fly {
    position: absolute; top: 38%; left: 50%;
    transform: translateX(-50%);
    font-size: 2rem; font-weight: 900; color: #ffd700;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6), 0 0 20px rgba(255,215,0,0.5);
    z-index: 95; pointer-events: none;
    animation: scoreFlyUp 1.2s ease-out forwards;
  }

  @keyframes scoreFlyUp {
    0% { transform: translateX(-50%) translateY(0) scale(0.5); opacity: 0; }
    20% { transform: translateX(-50%) translateY(-10px) scale(1.2); opacity: 1; }
    100% { transform: translateX(-50%) translateY(-60px) scale(0.8); opacity: 0; }
  }

  /* ═══ GUIDE ═══ */

  .ss-guide {
    position: absolute; bottom: 28%; left: 50%;
    transform: translateX(-50%);
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.5rem 1rem; border-radius: 24px;
    z-index: 60; white-space: nowrap;
    animation: guideSlide 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  }
  .ss-guide.correct { background: rgba(46,204,113,0.3); border: 2px solid rgba(46,204,113,0.5); }
  .ss-guide.wrong { background: rgba(231,76,60,0.3); border: 2px solid rgba(231,76,60,0.5); }

  @keyframes guideSlide {
    0% { transform: translateX(-50%) scale(0.5) translateY(15px); opacity: 0; }
    100% { transform: translateX(-50%) scale(1) translateY(0); opacity: 1; }
  }

  .ss-guide-avatar { font-size: 1.4rem; }
  .ss-guide-msg { color: white; font-weight: 700; font-size: 0.95rem; text-shadow: 0 1px 3px rgba(0,0,0,0.4); }

  /* ═══ ALBUM OVERLAY ═══ */

  .ss-album-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.65); z-index: 200;
    display: flex; align-items: center; justify-content: center;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }

  .ss-album-panel {
    background: rgba(30,20,10,0.92); border: 2px solid rgba(243,156,18,0.3);
    border-radius: 24px; padding: 1.3rem; max-width: 400px; width: 90%;
    max-height: 80vh; overflow-y: auto;
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  }
  .ss-album-panel h3 {
    color: #f39c12; font-size: 1.2rem; font-weight: 800;
    text-align: center; margin-bottom: 1rem;
  }

  .ss-album-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
    gap: 0.7rem; margin-bottom: 1rem;
  }

  .ss-album-empty {
    color: rgba(255,255,255,0.35); font-size: 0.85rem;
    text-align: center; grid-column: 1 / -1; padding: 2rem 0;
  }

  .ss-album-polaroid, .ss-mini-polaroid {
    background: white; border-radius: 4px;
    padding: 5px 5px 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    display: flex; flex-direction: column; align-items: center;
    transition: transform 0.2s;
  }
  .ss-album-polaroid:hover { transform: scale(1.1) !important; z-index: 10; }
  .ss-pol-emoji { font-size: 1.8rem; }
  .ss-pol-name { font-size: 0.5rem; font-weight: 700; color: #333; margin-top: 2px; text-align: center; }

  .ss-mini-polaroid {
    padding: 4px 4px 12px;
  }
  .ss-mini-polaroid span { font-size: 1.5rem; }

  /* ═══ RESULT SCREEN ═══ */

  .ss-result, .ss-gameover, .ss-complete, .ss-bonus {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ss-result-content, .ss-gameover-content, .ss-complete-content, .ss-bonus-content {
    position: relative; z-index: 20; text-align: center;
    padding: 1.5rem; display: flex; flex-direction: column;
    align-items: center; gap: 0.7rem; max-width: 420px;
    animation: contentPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes contentPop {
    0% { transform: scale(0.7); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .ss-result-badge {
    width: 75px; height: 75px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.2rem;
  }
  .ss-result-badge.correct {
    background: rgba(46,204,113,0.2); border: 3px solid #2ecc71;
    animation: badgePulse 1s ease-in-out infinite;
  }
  .ss-result-badge.wrong {
    background: rgba(231,76,60,0.2); border: 3px solid #e74c3c;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(46,204,113,0.3); }
    50% { box-shadow: 0 0 0 12px rgba(46,204,113,0); }
  }

  .ss-result-msg {
    font-size: 1.4rem; font-weight: 800;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
  }
  .ss-result-msg.correct { color: #2ecc71; }
  .ss-result-msg.wrong { color: #e74c3c; }

  .ss-result-answer {
    display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
  }
  .ss-result-emoji { font-size: 2.8rem; }
  .ss-result-explain { color: rgba(255,255,255,0.65); font-size: 0.85rem; font-weight: 600; }

  .ss-combo-badge {
    padding: 0.35rem 1rem; border-radius: 20px;
    font-weight: 800; font-size: 1rem; color: white;
    background: linear-gradient(135deg, #f1c40f, #e67e22);
    box-shadow: 0 0 20px rgba(241,196,15,0.5);
    animation: comboBadgeGlow 1s ease-in-out infinite;
  }

  @keyframes comboBadgeGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(241,196,15,0.3); }
    50% { box-shadow: 0 0 35px rgba(241,196,15,0.7); }
  }

  .ss-continue-btn {
    display: inline-flex; align-items: center; gap: 0.3rem;
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 1.05rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: none; border-radius: 30px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(230,126,34,0.4);
    margin-top: 0.3rem;
  }
  .ss-continue-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(230,126,34,0.5);
  }

  /* ═══ GAME OVER ═══ */

  .ss-gameover-badge {
    font-size: 4rem; margin-bottom: 0.3rem;
    animation: gameoverBadge 2s ease-in-out infinite;
    filter: grayscale(0.6);
  }

  @keyframes gameoverBadge {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  .ss-gameover h1, .ss-complete h1 {
    font-size: clamp(1.8rem, 6vw, 2.4rem);
    font-weight: 900; color: #f39c12;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }
  .ss-gameover-sub, .ss-complete-sub {
    color: rgba(255,255,255,0.6); font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .ss-gameover-stats, .ss-complete-stats {
    display: flex; justify-content: center; gap: 1.2rem; margin-bottom: 1rem;
  }

  .ss-stat {
    display: flex; flex-direction: column; align-items: center;
    padding: 0.5rem 0.8rem;
    background: rgba(255,255,255,0.08); border-radius: 14px;
    border: 1.5px solid rgba(255,255,255,0.1);
  }
  .ss-stat.gold {
    border-color: rgba(241,196,15,0.4);
    background: rgba(241,196,15,0.1);
  }
  .ss-stat-val { font-size: 1.6rem; font-weight: 900; color: white; }
  .ss-stat-lbl { font-size: 0.65rem; color: rgba(255,255,255,0.5); font-weight: 600; }

  .ss-gameover-album {
    display: flex; justify-content: center; gap: 0.5rem;
    flex-wrap: wrap; margin-bottom: 1rem;
  }

  .ss-gameover-btns, .ss-complete-btns {
    display: flex; flex-direction: column; gap: 0.7rem; align-items: center;
  }

  .ss-primary-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.1rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #e67e22, #d35400);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(230,126,34,0.4);
  }
  .ss-primary-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(230,126,34,0.6);
  }

  .ss-secondary-btn {
    padding: 0.6rem 1.5rem; font-family: 'Nunito', sans-serif;
    font-size: 0.9rem; font-weight: 700;
    color: rgba(255,255,255,0.6); background: transparent;
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s;
  }
  .ss-secondary-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* ═══ COMPLETE ═══ */

  .ss-complete-celebration {
    font-size: 2.5rem;
    animation: celebBounce 0.8s ease-in-out infinite;
  }

  @keyframes celebBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.1); }
  }

  .ss-complete-album {
    margin-bottom: 1rem; width: 100%;
  }
  .ss-complete-album h3 {
    color: #f39c12; font-size: 1rem; font-weight: 800;
    margin-bottom: 0.6rem;
  }

  /* ═══ BONUS ROUND ═══ */

  .ss-bonus-badge {
    font-size: 1.3rem; font-weight: 900;
    color: #ffd700; text-shadow: 0 0 15px rgba(255,215,0,0.6);
    padding: 0.4rem 1.5rem;
    background: rgba(0,0,0,0.5);
    border: 2px solid #ffd700; border-radius: 30px;
    animation: rarePulse 1s ease-in-out infinite;
  }

  @keyframes rarePulse {
    0%, 100% { box-shadow: 0 0 15px rgba(255,215,0,0.3); transform: scale(1); }
    50% { box-shadow: 0 0 30px rgba(255,215,0,0.6); transform: scale(1.05); }
  }

  .ss-bonus-animal {
    display: flex; flex-direction: column; align-items: center;
    animation: bonusAnimalEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .ss-bonus-animal.snapped { animation: snapped 0.4s ease; }

  @keyframes bonusAnimalEntry {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  @keyframes snapped {
    0% { transform: scale(1); }
    30% { transform: scale(1.15); }
    60% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }

  .ss-bonus-emoji {
    font-size: 7rem;
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4));
    animation: bonusBob 1.5s ease-in-out infinite;
  }

  @keyframes bonusBob {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-12px) rotate(2deg); }
  }

  .ss-bonus-name {
    font-size: 1.2rem; font-weight: 800; color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
    margin-top: 0.5rem;
  }

  .ss-bonus-timer {
    width: clamp(150px, 50%, 250px); height: 8px;
    background: rgba(0,0,0,0.4); border-radius: 4px;
    overflow: hidden; margin-top: 0.5rem;
  }
  .ss-bonus-timer-fill {
    height: 100%; background: linear-gradient(90deg, #ffd700, #f39c12);
    border-radius: 4px; transition: width 1s linear;
  }

  .ss-shutter-btn {
    width: 70px; height: 70px; border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 4px solid white;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    margin-top: 1rem; transition: all 0.2s;
    animation: shutterPulse 1s ease-in-out infinite;
  }
  .ss-shutter-btn:hover { background: rgba(255,255,255,0.3); transform: scale(1.1); }
  .ss-shutter-btn:active { transform: scale(0.9); }

  .ss-shutter-inner {
    width: 52px; height: 52px; border-radius: 50%;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    box-shadow: 0 0 15px rgba(231,76,60,0.5);
  }

  @keyframes shutterPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
    50% { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
  }

  .ss-bonus-hint {
    color: rgba(255,255,255,0.6); font-size: 0.85rem; font-weight: 700;
    margin-top: 0.3rem;
    animation: hintBlink 1s ease-in-out infinite;
  }

  @keyframes hintBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* ═══ MOBILE RESPONSIVE ═══ */

  @media (max-width: 600px) {
    .ss-hud { padding: 0.35rem 0.4rem; }
    .ss-hud-center { display: none; }
    .ss-prompt-text { font-size: 0.85rem; padding: 0.4rem 0.9rem; }
    .ss-animal-card { width: clamp(110px, 40vw, 160px); height: clamp(150px, 46vw, 200px); }
    .ss-animal-emoji { font-size: clamp(3rem, 10vw, 4.5rem); }
    .ss-animal-name { font-size: 0.7rem; }
    .ss-guide { font-size: 0.8rem; padding: 0.4rem 0.7rem; }
    .ss-measure-label { width: 50px; font-size: 0.6rem; }
    .ss-album-grid { grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); }
    .ss-peek-animal { font-size: 3rem; }
    .ss-jeep-body { font-size: 2.5rem; }
    .ss-bonus-emoji { font-size: 5rem; }
  }

  @media (max-width: 380px) {
    .ss-animal-card { width: 42vw; height: 48vw; padding: 0.5rem; }
    .ss-vs span { font-size: 0.85rem; padding: 0.25rem 0.4rem; }
    .ss-round-pill { font-size: 0.7rem; }
    .ss-score-pill { font-size: 0.7rem; }
  }
`;
