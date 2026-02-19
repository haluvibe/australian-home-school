"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ── Types ──────────────────────────────────────────────────────────────────

type GameScreen = 'intro' | 'playing' | 'reveal' | 'result' | 'speedRound' | 'levelUp' | 'gameOver';

interface DotPattern {
  dots: { x: number; y: number }[];
  count: number;
  type: 'dice' | 'tenframe' | 'random' | 'finger';
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
  hue: number;
  type: 'sparkle' | 'burst' | 'streak' | 'electric';
}

interface FloatingScore {
  id: number;
  x: number;
  y: number;
  value: number;
  life: number;
}

interface BackgroundStar {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleOffset: number;
}

interface Sticker {
  emoji: string;
  name: string;
}

interface DotDashProps {
  onExit?: () => void;
}

// ── Constants ──────────────────────────────────────────────────────────────

const STICKERS: Sticker[] = [
  { emoji: '🦉', name: 'Owl' },
  { emoji: '🦊', name: 'Fox' },
  { emoji: '🐨', name: 'Koala' },
  { emoji: '🦜', name: 'Parrot' },
  { emoji: '🐙', name: 'Octopus' },
  { emoji: '🦋', name: 'Butterfly' },
  { emoji: '🐸', name: 'Frog' },
  { emoji: '🦄', name: 'Unicorn' },
  { emoji: '🐬', name: 'Dolphin' },
  { emoji: '🦎', name: 'Gecko' },
  { emoji: '🐢', name: 'Turtle' },
  { emoji: '🦩', name: 'Flamingo' },
];

const DOT_COLORS = [
  { fill: '#f43f5e', shadow: '#be123c' },  // rose
  { fill: '#8b5cf6', shadow: '#6d28d9' },  // violet
  { fill: '#3b82f6', shadow: '#1d4ed8' },  // blue
  { fill: '#10b981', shadow: '#059669' },  // emerald
  { fill: '#f59e0b', shadow: '#d97706' },  // amber
  { fill: '#ec4899', shadow: '#be185d' },  // pink
  { fill: '#06b6d4', shadow: '#0891b2' },  // cyan
  { fill: '#ef4444', shadow: '#dc2626' },  // red
];

const LIVES_MAX = 3;

// ── Dot Pattern Generators ─────────────────────────────────────────────────

function getDicePattern(count: number): { x: number; y: number }[] {
  // Normalized 0-1 positions for classic dice faces
  const layouts: Record<number, { x: number; y: number }[]> = {
    1: [{ x: 0.5, y: 0.5 }],
    2: [{ x: 0.25, y: 0.25 }, { x: 0.75, y: 0.75 }],
    3: [{ x: 0.25, y: 0.25 }, { x: 0.5, y: 0.5 }, { x: 0.75, y: 0.75 }],
    4: [{ x: 0.25, y: 0.25 }, { x: 0.75, y: 0.25 }, { x: 0.25, y: 0.75 }, { x: 0.75, y: 0.75 }],
    5: [{ x: 0.25, y: 0.25 }, { x: 0.75, y: 0.25 }, { x: 0.5, y: 0.5 }, { x: 0.25, y: 0.75 }, { x: 0.75, y: 0.75 }],
    6: [{ x: 0.25, y: 0.2 }, { x: 0.75, y: 0.2 }, { x: 0.25, y: 0.5 }, { x: 0.75, y: 0.5 }, { x: 0.25, y: 0.8 }, { x: 0.75, y: 0.8 }],
  };
  return layouts[count] || layouts[6];
}

function getTenFramePattern(count: number): { x: number; y: number }[] {
  // 2 rows x 5 columns, fill left to right, top to bottom
  const dots: { x: number; y: number }[] = [];
  for (let i = 0; i < Math.min(count, 10); i++) {
    const col = i % 5;
    const row = Math.floor(i / 5);
    dots.push({
      x: 0.12 + col * 0.19,
      y: 0.3 + row * 0.4,
    });
  }
  // Overflow beyond 10 goes into a small row below
  for (let i = 10; i < count; i++) {
    const col = (i - 10) % 5;
    dots.push({
      x: 0.12 + col * 0.19,
      y: 0.85,
    });
  }
  return dots;
}

function getRandomPattern(count: number): { x: number; y: number }[] {
  const dots: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    let x: number, y: number;
    let attempts = 0;
    do {
      x = 0.15 + Math.random() * 0.7;
      y = 0.15 + Math.random() * 0.7;
      attempts++;
    } while (
      attempts < 50 &&
      dots.some(d => Math.hypot(d.x - x, d.y - y) < 0.14)
    );
    dots.push({ x, y });
  }
  return dots;
}

function getFingerPattern(count: number): { x: number; y: number }[] {
  // Arrange dots like fingers on a hand — spread across top
  const dots: { x: number; y: number }[] = [];
  const maxInRow = Math.min(count, 5);
  const startX = 0.5 - (maxInRow - 1) * 0.1;
  for (let i = 0; i < maxInRow; i++) {
    dots.push({
      x: startX + i * 0.2,
      y: 0.35 + (i === 0 || i === 4 ? 0.08 : i === 2 ? -0.05 : 0),
    });
  }
  // Second hand for 6-10
  if (count > 5) {
    const remaining = count - 5;
    const startX2 = 0.5 - (remaining - 1) * 0.1;
    for (let i = 0; i < remaining; i++) {
      dots.push({
        x: startX2 + i * 0.2,
        y: 0.68 + (i === 0 || i === 4 ? 0.08 : i === 2 ? -0.05 : 0),
      });
    }
  }
  return dots;
}

function generatePattern(count: number, level: number): DotPattern {
  let type: DotPattern['type'];
  let dots: { x: number; y: number }[];

  if (level <= 2 && count <= 6) {
    type = 'dice';
    dots = getDicePattern(count);
  } else if (level >= 5 && count <= 12) {
    const roll = Math.random();
    if (roll < 0.4) {
      type = 'tenframe';
      dots = getTenFramePattern(count);
    } else if (roll < 0.7) {
      type = 'random';
      dots = getRandomPattern(count);
    } else {
      type = 'finger';
      dots = getFingerPattern(count);
    }
  } else if (level >= 3) {
    const roll = Math.random();
    if (roll < 0.3 && count <= 6) {
      type = 'dice';
      dots = getDicePattern(count);
    } else if (roll < 0.6) {
      type = 'finger';
      dots = getFingerPattern(count);
    } else {
      type = 'random';
      dots = getRandomPattern(count);
    }
  } else {
    type = 'dice';
    dots = count <= 6 ? getDicePattern(count) : getRandomPattern(count);
  }

  return { dots, count, type };
}

function getFlashDuration(level: number, isSpeedRound: boolean): number {
  if (isSpeedRound) return Math.max(600, 1600 - level * 100);
  if (level <= 2) return 2000;
  if (level <= 4) return 1500;
  if (level <= 6) return 1100;
  return Math.max(700, 1000 - (level - 7) * 50);
}

function getMaxQuantity(level: number): number {
  if (level <= 2) return 5;
  if (level <= 4) return 8;
  if (level <= 6) return 10;
  return 12;
}

function generateOptions(correct: number, level: number): number[] {
  const numOptions = level >= 5 ? 4 : 3;
  const options = new Set<number>([correct]);
  const max = getMaxQuantity(level);

  while (options.size < numOptions) {
    // Nearby distractors
    let distractor: number;
    if (Math.random() < 0.6) {
      distractor = correct + (Math.random() < 0.5 ? 1 : -1) * (1 + Math.floor(Math.random() * 2));
    } else {
      distractor = 1 + Math.floor(Math.random() * max);
    }
    if (distractor >= 1 && distractor <= max && distractor !== correct) {
      options.add(distractor);
    }
  }

  // Shuffle
  const arr = Array.from(options);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Particle counter ───────────────────────────────────────────────────────

let particleIdCounter = 0;
const nextParticleId = () => ++particleIdCounter;
let floatScoreId = 0;
const nextFloatId = () => ++floatScoreId;

// ── Main Component ─────────────────────────────────────────────────────────

export default function DotDash({ onExit }: DotDashProps = {}) {
  // Game state
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(LIVES_MAX);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [round, setRound] = useState(0);
  const [roundsInLevel, setRoundsInLevel] = useState(0);
  const [isSpeedRound, setIsSpeedRound] = useState(false);
  const [speedRoundCount, setSpeedRoundCount] = useState(0);

  // Current challenge state
  const [pattern, setPattern] = useState<DotPattern | null>(null);
  const [options, setOptions] = useState<number[]>([]);
  const [showDots, setShowDots] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [sticker, setSticker] = useState<Sticker | null>(null);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [timerProgress, setTimerProgress] = useState(1);
  const [dotsRevealed, setDotsRevealed] = useState(0);
  const [shakeCard, setShakeCard] = useState(false);

  // Particles and effects
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingScores, setFloatingScores] = useState<FloatingScore[]>([]);
  const [backgroundStars] = useState<BackgroundStar[]>(() =>
    Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      speed: 0.2 + Math.random() * 0.5,
      opacity: 0.2 + Math.random() * 0.6,
      twinkleOffset: Math.random() * Math.PI * 2,
    }))
  );

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const answerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeStartRef = useRef(0);
  const flashDurationRef = useRef(2000);
  const answerDurationRef = useRef(5000);
  const lastFrameRef = useRef(0);
  const collectionsUsedRef = useRef<number[]>([]);
  const startNewRoundRef = useRef<() => void>(() => {});

  // ── Particle system ────────────────────────────────────────────────────

  const spawnParticles = useCallback((x: number, y: number, count: number, hue: number, type: Particle['type'] = 'sparkle') => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = type === 'burst' ? 3 + Math.random() * 5 : 1 + Math.random() * 3;
      newParticles.push({
        id: nextParticleId(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: type === 'electric' ? 0.5 + Math.random() * 0.3 : 0.8 + Math.random() * 0.5,
        size: type === 'electric' ? 2 + Math.random() * 3 : 3 + Math.random() * 5,
        hue,
        type,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const spawnFloatingScore = useCallback((x: number, y: number, value: number) => {
    setFloatingScores(prev => [...prev, {
      id: nextFloatId(),
      x,
      y,
      value,
      life: 1,
    }]);
  }, []);

  // ── Animation loop ─────────────────────────────────────────────────────

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastFrameRef.current) lastFrameRef.current = timestamp;
      const dt = Math.min((timestamp - lastFrameRef.current) / 1000, 0.05);
      lastFrameRef.current = timestamp;

      // Update particles
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.1,
          vx: p.vx * 0.98,
          life: p.life - dt / p.maxLife,
        })).filter(p => p.life > 0);
        return updated.length === prev.length && updated.every((p, i) => p.life === prev[i].life) ? prev : updated;
      });

      // Update floating scores
      setFloatingScores(prev => {
        const updated = prev.map(f => ({
          ...f,
          y: f.y - 1.5,
          life: f.life - dt * 1.2,
        })).filter(f => f.life > 0);
        return updated;
      });

      // Update timer during playing phase (flash countdown) and reveal phase (answer countdown)
      if ((screen === 'playing' || screen === 'reveal') && timeStartRef.current > 0) {
        const elapsed = timestamp - timeStartRef.current;
        const duration = screen === 'playing' ? flashDurationRef.current : answerDurationRef.current;
        const remaining = Math.max(0, 1 - elapsed / duration);
        setTimerProgress(remaining);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [screen]);

  // ── Game flow ──────────────────────────────────────────────────────────

  const revealDotsOneByOne = useCallback(() => {
    if (!pattern) return;
    let i = 0;
    setShowDots(true);
    const interval = setInterval(() => {
      i++;
      setDotsRevealed(i);
      if (i >= pattern.count) {
        clearInterval(interval);
        setTimeout(() => {
          setLives(currentLives => {
            if (currentLives > 0) {
              startNewRoundRef.current();
            }
            return currentLives;
          });
        }, 1500);
      }
    }, 300);
  }, [pattern]);

  const handleTimeout = useCallback(() => {
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);
    setIsCorrect(false);
    setShakeCard(true);
    setStreak(0);
    setLives(prev => {
      const newLives = prev - 1;
      if (newLives <= 0) {
        setTimeout(() => setScreen('gameOver'), 2000);
      }
      return newLives;
    });
    // Show counting animation
    revealDotsOneByOne();
  }, [revealDotsOneByOne]);

  const startNewRound = useCallback(() => {
    // Clear any pending timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);

    const maxQ = getMaxQuantity(level);
    let count: number;
    // Avoid repeating last 3 numbers
    let attempts = 0;
    do {
      count = 1 + Math.floor(Math.random() * maxQ);
      attempts++;
    } while (collectionsUsedRef.current.includes(count) && attempts < 20);
    collectionsUsedRef.current.push(count);
    if (collectionsUsedRef.current.length > 3) collectionsUsedRef.current.shift();

    const newPattern = generatePattern(count, level);
    const newOptions = generateOptions(count, level);
    const flashMs = getFlashDuration(level, isSpeedRound);
    flashDurationRef.current = flashMs;

    setPattern(newPattern);
    setOptions(newOptions);
    setCorrectAnswer(count);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setSticker(null);
    setCardFlipped(false);
    setShowDots(true);
    setTimerProgress(1);
    setDotsRevealed(0);
    setShakeCard(false);

    // Flash phase -> reveal phase (hide dots, show options)
    timeStartRef.current = performance.now();
    setScreen('playing');

    const answerTime = isSpeedRound ? 3000 : 5000;
    answerDurationRef.current = answerTime;

    timerRef.current = setTimeout(() => {
      setShowDots(false);
      setScreen('reveal');
      timeStartRef.current = performance.now();
      setTimerProgress(1);

      // Answer timer — time to respond
      answerTimerRef.current = setTimeout(() => {
        // Timeout — treat as wrong
        handleTimeout();
      }, answerTime);
    }, flashMs);
  }, [level, isSpeedRound, handleTimeout]);

  // Keep ref in sync
  useEffect(() => {
    startNewRoundRef.current = startNewRound;
  }, [startNewRound]);

  const handleAnswer = useCallback((answer: number) => {
    if (selectedAnswer !== null || screen !== 'reveal') return;
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);

    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      // Points: base + streak bonus + speed bonus
      const streakBonus = streak * 5;
      const speedBonus = Math.round(timerProgress * 20);
      const levelBonus = level * 2;
      const roundPoints = 10 + streakBonus + speedBonus + levelBonus;
      setScore(prev => prev + roundPoints);
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
      setRound(prev => prev + 1);
      setRoundsInLevel(prev => prev + 1);

      if (isSpeedRound) {
        setSpeedRoundCount(prev => prev + 1);
      }

      // Pick a random sticker
      const stickerIndex = Math.floor(Math.random() * STICKERS.length);
      setSticker(STICKERS[stickerIndex]);

      // Flip card to reveal sticker
      setCardFlipped(true);

      // Spawn celebration particles
      spawnParticles(50, 50, 20, 120, 'burst');
      spawnFloatingScore(50, 40, roundPoints);

      // Electric streak effects for big streaks
      if (streak >= 2) {
        spawnParticles(50, 50, 10, 50, 'electric');
      }

      // Move to next round after celebration
      setTimeout(() => {
        const roundsNeeded = 5;
        if (isSpeedRound && speedRoundCount + 1 >= roundsNeeded) {
          // End speed round
          setIsSpeedRound(false);
          setSpeedRoundCount(0);
          setLevel(prev => prev + 1);
          setRoundsInLevel(0);
          setScreen('levelUp');
        } else if (!isSpeedRound && roundsInLevel + 1 >= 5) {
          // Check if speed round should trigger (every 3 levels)
          if ((level) % 3 === 0) {
            setRoundsInLevel(0);
            setScreen('speedRound');
          } else {
            setLevel(prev => prev + 1);
            setRoundsInLevel(0);
            setScreen('levelUp');
          }
        } else {
          startNewRoundRef.current();
        }
      }, 1800);
    } else {
      // Wrong answer
      setShakeCard(true);
      setStreak(0);
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => setScreen('gameOver'), 2500);
        }
        return newLives;
      });

      // Red burst
      spawnParticles(50, 50, 12, 0, 'burst');

      // Show the correct answer with counting
      revealDotsOneByOne();
    }
  }, [selectedAnswer, screen, correctAnswer, streak, bestStreak, timerProgress, level, isSpeedRound,
    speedRoundCount, roundsInLevel, spawnParticles, spawnFloatingScore, revealDotsOneByOne, lives]);

  const startGame = useCallback(() => {
    setLevel(1);
    setScore(0);
    setLives(LIVES_MAX);
    setStreak(0);
    setBestStreak(0);
    setRound(0);
    setRoundsInLevel(0);
    setIsSpeedRound(false);
    setSpeedRoundCount(0);
    collectionsUsedRef.current = [];
    setScreen('playing');
    // Defer so state has flushed before startNewRound reads it
    setTimeout(() => startNewRoundRef.current(), 0);
  }, []);

  const startSpeedRound = useCallback(() => {
    setIsSpeedRound(true);
    setSpeedRoundCount(0);
    setRoundsInLevel(0);
    setTimeout(() => startNewRoundRef.current(), 0);
  }, []);

  const continueAfterLevelUp = useCallback(() => {
    collectionsUsedRef.current = [];
    setTimeout(() => startNewRoundRef.current(), 0);
  }, []);

  const goToMenu = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);
    if (onExit) {
      onExit();
    } else {
      setScreen('intro');
    }
  }, [onExit]);

  // ── Cleanup timers on unmount ──────────────────────────────────────────

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (answerTimerRef.current) clearTimeout(answerTimerRef.current);
    };
  }, []);

  // ── Render helpers ─────────────────────────────────────────────────────

  const renderBackgroundStars = () => (
    <div className="dd-bg-stars">
      {backgroundStars.map((star, i) => (
        <div
          key={i}
          className="dd-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.twinkleOffset}s`,
            animationDuration: `${2 + star.speed * 3}s`,
          }}
        />
      ))}
    </div>
  );

  const renderParticles = () => (
    <div className="dd-particles">
      {particles.map(p => (
        <div
          key={p.id}
          className={`dd-particle dd-particle-${p.type}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.life,
            '--p-hue': p.hue,
            transform: `scale(${p.life})`,
          } as React.CSSProperties}
        />
      ))}
      {floatingScores.map(f => (
        <div
          key={f.id}
          className="dd-floating-score"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            opacity: f.life,
            transform: `scale(${0.5 + f.life * 0.5})`,
          }}
        >
          +{f.value}
        </div>
      ))}
    </div>
  );

  const renderLives = () => (
    <div className="dd-lives">
      {Array.from({ length: LIVES_MAX }, (_, i) => (
        <div key={i} className={`dd-life ${i < lives ? 'dd-life-active' : 'dd-life-lost'}`}>
          {i < lives ? '⚡' : '💔'}
        </div>
      ))}
    </div>
  );

  const renderStreak = () => {
    if (streak < 2) return null;
    return (
      <div className={`dd-streak ${streak >= 5 ? 'dd-streak-fire' : ''} ${streak >= 8 ? 'dd-streak-legendary' : ''}`}>
        <span className="dd-streak-bolt">⚡</span>
        <span className="dd-streak-count">{streak}x</span>
        <span className="dd-streak-label">STREAK</span>
        {streak >= 5 && <div className="dd-streak-glow" />}
      </div>
    );
  };

  const renderCard = () => {
    if (!pattern) return null;

    const dotColor = DOT_COLORS[correctAnswer % DOT_COLORS.length];

    return (
      <div className={`dd-card-wrapper ${shakeCard ? 'dd-shake' : ''}`}>
        <div className={`dd-card ${cardFlipped ? 'dd-card-flipped' : ''}`}>
          {/* Front — dots */}
          <div className="dd-card-face dd-card-front">
            {/* Ten-frame grid lines */}
            {pattern.type === 'tenframe' && (
              <div className="dd-tenframe-grid">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="dd-tenframe-cell" />
                ))}
              </div>
            )}

            {/* Dots */}
            {pattern.dots.map((dot, i) => {
              const isRevealing = isCorrect === false && dotsRevealed > 0;
              const isVisible = showDots || (isRevealing && i < dotsRevealed);
              return (
                <div
                  key={i}
                  className={`dd-dot ${isVisible ? 'dd-dot-visible' : 'dd-dot-hidden'}`}
                  style={{
                    left: `${dot.x * 100}%`,
                    top: `${dot.y * 100}%`,
                    animationDelay: `${i * 0.05}s`,
                    '--dot-fill': dotColor.fill,
                    '--dot-shadow': dotColor.shadow,
                  } as React.CSSProperties}
                >
                  {isRevealing && i < dotsRevealed && (
                    <span className="dd-dot-number">{i + 1}</span>
                  )}
                </div>
              );
            })}

            {/* Pattern type indicator */}
            <div className="dd-pattern-badge">
              {pattern.type === 'dice' && '🎲'}
              {pattern.type === 'tenframe' && '🔟'}
              {pattern.type === 'random' && '✨'}
              {pattern.type === 'finger' && '🖐️'}
            </div>
          </div>

          {/* Back — sticker reveal */}
          <div className="dd-card-face dd-card-back">
            {sticker && (
              <div className="dd-sticker-reveal">
                <div className="dd-sticker-emoji">{sticker.emoji}</div>
                <div className="dd-sticker-name">{sticker.name}</div>
                <div className="dd-sticker-sparkles">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="dd-sticker-spark"
                      style={{
                        '--spark-angle': `${i * 45}deg`,
                        '--spark-delay': `${i * 0.05}s`,
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderTimer = () => {
    if (screen !== 'reveal' && screen !== 'playing') return null;

    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - timerProgress);
    const timerColor = timerProgress > 0.5 ? '#4ade80' : timerProgress > 0.25 ? '#fbbf24' : '#ef4444';
    const isPulsing = timerProgress < 0.3;

    return (
      <div className={`dd-timer ${isPulsing ? 'dd-timer-pulse' : ''}`}>
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={timerColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 36 36)"
            style={{ transition: 'stroke 0.3s ease' }}
          />
        </svg>
        <div className="dd-timer-icon" style={{ color: timerColor }}>
          {screen === 'playing' ? '👁️' : '🤔'}
        </div>
      </div>
    );
  };

  const renderOptions = () => {
    if (screen !== 'reveal' || options.length === 0) return null;

    return (
      <div className="dd-options">
        {options.map((opt) => {
          let optClass = 'dd-option';
          if (selectedAnswer !== null) {
            if (opt === correctAnswer) optClass += ' dd-option-correct';
            else if (opt === selectedAnswer) optClass += ' dd-option-wrong';
            else optClass += ' dd-option-dim';
          }
          return (
            <button
              key={opt}
              className={optClass}
              onClick={() => handleAnswer(opt)}
              disabled={selectedAnswer !== null}
            >
              {opt}
            </button>
          );
        })}
      </div>
    );
  };

  // ── Screens ────────────────────────────────────────────────────────────

  if (screen === 'intro') {
    return (
      <div className="dd-root">
        <style>{styles}</style>
        <div className="dd-intro">
          {renderBackgroundStars()}
          <div className="dd-intro-decorations">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="dd-floating-card"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <div className="dd-mini-dots">
                  {getDicePattern(1 + (i % 6)).map((d, j) => (
                    <div
                      key={j}
                      className="dd-mini-dot"
                      style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="dd-intro-content">
            <div className="dd-logo">
              <span className="dd-logo-icon dd-logo-brain">🧠</span>
              <h1>Dot Dash</h1>
              <span className="dd-logo-icon dd-logo-bolt">⚡</span>
            </div>
            <p className="dd-tagline">See It. Know It. Instant!</p>

            <div className="dd-instructions-card">
              <h3>How to Play</h3>
              <div className="dd-instruction">
                <div className="dd-instruction-visual">
                  <div className="dd-mini-flashcard">
                    <div className="dd-mini-dot-group">
                      {getDicePattern(4).map((d, i) => (
                        <div key={i} className="dd-mini-dot" style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%` }} />
                      ))}
                    </div>
                  </div>
                  <span className="dd-instruction-arrow">→</span>
                  <span className="dd-instruction-icon">👁️</span>
                </div>
                <p>Dot patterns <span className="dd-hl dd-hl-flash">FLASH</span> on the card — look quickly!</p>
              </div>
              <div className="dd-instruction">
                <div className="dd-instruction-visual">
                  <span className="dd-mini-btn">3</span>
                  <span className="dd-mini-btn dd-mini-btn-correct">4</span>
                  <span className="dd-mini-btn">5</span>
                </div>
                <p>Tap the <span className="dd-hl dd-hl-correct">CORRECT</span> number of dots!</p>
              </div>
              <div className="dd-instruction">
                <div className="dd-instruction-visual">
                  <span className="dd-instruction-icon">⚡</span>
                  <span className="dd-instruction-icon">⚡</span>
                  <span className="dd-instruction-icon">⚡</span>
                </div>
                <p>Build a <span className="dd-hl dd-hl-streak">LIGHTNING STREAK</span> for bonus points!</p>
              </div>
            </div>

            <button className="dd-start-btn" onClick={startGame}>
              <span className="dd-btn-icon">⚡</span>
              Start Subitising
              <span className="dd-btn-icon">⚡</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'speedRound') {
    return (
      <div className="dd-root">
        <style>{styles}</style>
        <div className="dd-speed-intro">
          {renderBackgroundStars()}
          <div className="dd-speed-bg-pulse" />
          <div className="dd-speed-content">
            <div className="dd-speed-bolt">⚡</div>
            <h1 className="dd-speed-title">SPEED ROUND</h1>
            <p className="dd-speed-sub">Quick-fire flashes for bonus points!</p>
            <p className="dd-speed-detail">5 rapid rounds — think fast!</p>
            <button className="dd-start-btn dd-speed-go" onClick={startSpeedRound}>
              GO!
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'levelUp') {
    return (
      <div className="dd-root">
        <style>{styles}</style>
        <div className="dd-levelup">
          {renderBackgroundStars()}
          <div className="dd-levelup-content">
            <div className="dd-levelup-stars">
              {['⭐', '🌟', '⭐'].map((s, i) => (
                <span key={i} className="dd-levelup-star" style={{ animationDelay: `${i * 0.2}s` }}>{s}</span>
              ))}
            </div>
            <h1 className="dd-levelup-title">Level {level}!</h1>
            <div className="dd-levelup-stats">
              <div className="dd-stat">
                <span className="dd-stat-label">Score</span>
                <span className="dd-stat-value">{score}</span>
              </div>
              <div className="dd-stat">
                <span className="dd-stat-label">Best Streak</span>
                <span className="dd-stat-value">⚡{bestStreak}x</span>
              </div>
            </div>
            <div className="dd-levelup-info">
              {level <= 2 && <p>Quantities 1-5 with familiar dice patterns</p>}
              {level > 2 && level <= 4 && <p>Quantities up to 8 with mixed patterns</p>}
              {level > 4 && level <= 6 && <p>Quantities up to 10 — ten-frame patterns appear!</p>}
              {level > 6 && <p>Quantities up to 12 — very fast flashes!</p>}
            </div>
            <button className="dd-start-btn" onClick={continueAfterLevelUp}>
              Continue
            </button>
            <button className="dd-menu-btn" onClick={goToMenu}>Main Menu</button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameOver') {
    return (
      <div className="dd-root">
        <style>{styles}</style>
        <div className="dd-gameover">
          {renderBackgroundStars()}
          <div className="dd-gameover-content">
            <div className="dd-gameover-emoji">🧠</div>
            <h1 className="dd-gameover-title">Great Effort!</h1>
            <p className="dd-gameover-sub">Your subitising skills are growing!</p>
            <div className="dd-gameover-stats">
              <div className="dd-stat">
                <span className="dd-stat-label">Final Score</span>
                <span className="dd-stat-value dd-stat-big">{score}</span>
              </div>
              <div className="dd-stat">
                <span className="dd-stat-label">Level Reached</span>
                <span className="dd-stat-value">{level}</span>
              </div>
              <div className="dd-stat">
                <span className="dd-stat-label">Rounds Won</span>
                <span className="dd-stat-value">{round}</span>
              </div>
              <div className="dd-stat">
                <span className="dd-stat-label">Best Streak</span>
                <span className="dd-stat-value">⚡{bestStreak}x</span>
              </div>
            </div>
            <button className="dd-start-btn" onClick={startGame}>
              <span className="dd-btn-icon">🔄</span>
              Play Again
              <span className="dd-btn-icon">⚡</span>
            </button>
            <button className="dd-menu-btn" onClick={goToMenu}>Main Menu</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Playing / Reveal screens ───────────────────────────────────────────

  return (
    <div className="dd-root" ref={containerRef}>
      <style>{styles}</style>
      <div className={`dd-game ${isSpeedRound ? 'dd-game-speed' : ''}`}>
        {renderBackgroundStars()}
        {isSpeedRound && <div className="dd-speed-border" />}
        {renderParticles()}

        {/* Header */}
        <div className="dd-header">
          <div className="dd-header-left">
            <button className="dd-back-btn" onClick={goToMenu}>{'←'}</button>
            <div className="dd-level-badge">
              {isSpeedRound && <span className="dd-speed-indicator">⚡</span>}
              Level {level}
            </div>
          </div>
          <div className="dd-header-center">
            {renderLives()}
          </div>
          <div className="dd-header-right">
            <div className="dd-score-badge">
              <span className="dd-score-icon">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Streak indicator */}
        {renderStreak()}

        {/* Main content */}
        <div className="dd-main">
          {renderTimer()}
          {renderCard()}

          {/* Phase label */}
          <div className="dd-phase-label">
            {screen === 'playing' && showDots && (
              <span className="dd-phase-look">
                <span className="dd-eye-icon">👁️</span> Look at the dots!
              </span>
            )}
            {screen === 'reveal' && selectedAnswer === null && (
              <span className="dd-phase-answer">How many dots?</span>
            )}
            {isCorrect === true && (
              <span className="dd-phase-correct">Correct! ⚡</span>
            )}
            {isCorrect === false && (
              <span className="dd-phase-wrong">
                The answer is {correctAnswer}
              </span>
            )}
          </div>

          {renderOptions()}
        </div>

        {/* Bottom bar */}
        <div className="dd-bottom-bar">
          <span className="dd-round-counter">Round {round + 1}</span>
          {isSpeedRound && (
            <span className="dd-speed-counter">Speed: {speedRoundCount + 1}/5</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .dd-root {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(160deg, #1a0a2e 0%, #16213e 40%, #0f3460 80%, #1a1a40 100%);
  }

  /* ── Background stars ── */

  .dd-bg-stars { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }

  .dd-star {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
    animation: ddTwinkle 3s ease-in-out infinite;
  }

  @keyframes ddTwinkle {
    0%, 100% { opacity: 0.2; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  /* ── Particles ── */

  .dd-particles { position: absolute; inset: 0; pointer-events: none; z-index: 100; }

  .dd-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform-origin: center;
  }

  .dd-particle-sparkle {
    background: radial-gradient(circle, hsl(var(--p-hue), 100%, 75%) 0%, transparent 70%);
    box-shadow: 0 0 6px hsl(var(--p-hue), 100%, 60%);
  }

  .dd-particle-burst {
    background: radial-gradient(circle, hsl(var(--p-hue), 100%, 80%) 0%, hsl(var(--p-hue), 80%, 50%) 100%);
    box-shadow: 0 0 10px hsl(var(--p-hue), 100%, 60%);
  }

  .dd-particle-electric {
    background: #fef08a;
    box-shadow: 0 0 8px #fef08a, 0 0 16px #facc15;
    border-radius: 1px;
  }

  .dd-particle-streak {
    background: linear-gradient(90deg, hsl(var(--p-hue), 100%, 70%), transparent);
    border-radius: 2px;
    width: 12px !important;
    height: 2px !important;
  }

  .dd-floating-score {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
    font-weight: 900;
    color: #4ade80;
    text-shadow: 0 0 10px rgba(74, 222, 128, 0.6), 0 2px 4px rgba(0,0,0,0.3);
    pointer-events: none;
  }

  /* ── Intro screen ── */

  .dd-intro, .dd-speed-intro, .dd-levelup, .dd-gameover {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .dd-intro-decorations { position: absolute; inset: 0; pointer-events: none; z-index: 1; }

  .dd-floating-card {
    position: absolute;
    width: 60px;
    height: 70px;
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    animation: ddFloatCard 4s ease-in-out infinite;
    backdrop-filter: blur(4px);
  }

  @keyframes ddFloatCard {
    0%, 100% { transform: translateY(0) rotate(-3deg); }
    50% { transform: translateY(-20px) rotate(3deg); }
  }

  .dd-mini-dots {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .dd-mini-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    transform: translate(-50%, -50%);
  }

  .dd-intro-content, .dd-speed-content, .dd-levelup-content, .dd-gameover-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 500px;
  }

  .dd-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .dd-logo h1 {
    font-size: clamp(2.2rem, 8vw, 3.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f59e0b, #ef4444, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .dd-logo-icon {
    font-size: 2.5rem;
    display: inline-block;
  }

  .dd-logo-brain { animation: ddBrainPulse 2s ease-in-out infinite; }
  .dd-logo-bolt { animation: ddBoltFlash 1.5s ease-in-out infinite; }

  @keyframes ddBrainPulse {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.15) rotate(-5deg); }
  }

  @keyframes ddBoltFlash {
    0%, 100% { transform: translateY(0) scale(1); filter: brightness(1); }
    50% { transform: translateY(-8px) scale(1.2); filter: brightness(1.5); }
  }

  .dd-tagline {
    color: #94a3b8;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  .dd-instructions-card {
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .dd-instructions-card h3 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .dd-instruction { margin-bottom: 1.5rem; }
  .dd-instruction:last-child { margin-bottom: 0; }

  .dd-instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .dd-mini-flashcard {
    position: relative;
    width: 50px;
    height: 60px;
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 8px;
  }

  .dd-mini-dot-group {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .dd-instruction-arrow { color: #64748b; font-size: 1.3rem; }
  .dd-instruction-icon { font-size: 1.8rem; }

  .dd-mini-btn {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white;
    font-size: 1.1rem;
  }

  .dd-mini-btn-correct {
    background: rgba(74, 222, 128, 0.3);
    border-color: #4ade80;
    color: #4ade80;
  }

  .dd-instruction p { color: #cbd5e1; font-size: 0.95rem; }

  .dd-hl { font-weight: 800; }
  .dd-hl-flash { color: #fbbf24; }
  .dd-hl-correct { color: #4ade80; }
  .dd-hl-streak { color: #f59e0b; }

  .dd-start-btn, .dd-speed-go {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(245, 158, 11, 0.4);
  }

  .dd-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(245, 158, 11, 0.5);
  }

  .dd-btn-icon { font-size: 1.4rem; }

  /* ── Speed round intro ── */

  .dd-speed-bg-pulse {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.15) 0%, transparent 70%);
    animation: ddSpeedPulse 1s ease-in-out infinite;
  }

  @keyframes ddSpeedPulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.1); opacity: 1; }
  }

  .dd-speed-bolt {
    font-size: 5rem;
    animation: ddBoltFlash 0.8s ease-in-out infinite;
    margin-bottom: 1rem;
  }

  .dd-speed-title {
    font-size: clamp(2rem, 8vw, 3rem);
    font-weight: 900;
    color: #fbbf24;
    text-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
  }

  .dd-speed-sub {
    color: #f59e0b;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .dd-speed-detail {
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .dd-speed-go {
    font-size: 1.8rem;
    padding: 1rem 3rem;
    animation: ddSpeedGoPulse 1.2s ease-in-out infinite;
  }

  @keyframes ddSpeedGoPulse {
    0%, 100% { box-shadow: 0 10px 40px rgba(245, 158, 11, 0.4); }
    50% { box-shadow: 0 10px 60px rgba(245, 158, 11, 0.8); transform: scale(1.05); }
  }

  /* ── Level up ── */

  .dd-levelup-stars {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .dd-levelup-star {
    font-size: 3rem;
    animation: ddStarPop 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
  }

  @keyframes ddStarPop {
    0% { transform: scale(0) rotate(-30deg); opacity: 0; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .dd-levelup-title {
    font-size: clamp(2rem, 7vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  .dd-levelup-stats, .dd-gameover-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .dd-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dd-stat-label {
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .dd-stat-value {
    font-size: 1.8rem;
    font-weight: 900;
    color: white;
  }

  .dd-stat-big { font-size: 2.5rem; color: #fbbf24; }

  .dd-levelup-info {
    margin-bottom: 2rem;
  }

  .dd-levelup-info p {
    color: #94a3b8;
    font-size: 0.95rem;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 0.8rem 1.2rem;
    display: inline-block;
  }

  .dd-menu-btn {
    display: block;
    margin: 1rem auto 0;
    padding: 0.7rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #94a3b8;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .dd-menu-btn:hover { border-color: rgba(255,255,255,0.3); color: white; }

  /* ── Game over ── */

  .dd-gameover-emoji {
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: ddBrainPulse 2s ease-in-out infinite;
  }

  .dd-gameover-title {
    font-size: clamp(2rem, 7vw, 2.8rem);
    font-weight: 900;
    color: white;
    margin-bottom: 0.5rem;
  }

  .dd-gameover-sub {
    color: #94a3b8;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .dd-gameover-stats {
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* ── Game screen ── */

  .dd-game {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .dd-game-speed {
    background: linear-gradient(160deg, #2d1b00 0%, #1a0a00 40%, #0f0600 100%);
  }

  .dd-speed-border {
    position: absolute;
    inset: 0;
    border: 3px solid transparent;
    border-image: linear-gradient(90deg, #f59e0b, #ef4444, #f59e0b) 1;
    animation: ddSpeedBorder 1s linear infinite;
    pointer-events: none;
    z-index: 50;
  }

  @keyframes ddSpeedBorder {
    0% { opacity: 0.4; }
    50% { opacity: 1; }
    100% { opacity: 0.4; }
  }

  /* ── Header ── */

  .dd-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    background: rgba(0,0,0,0.4);
    z-index: 50;
    position: relative;
  }

  .dd-header-left, .dd-header-right { display: flex; align-items: center; gap: 0.8rem; }
  .dd-header-center { display: flex; align-items: center; }

  .dd-back-btn {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dd-back-btn:hover { background: rgba(255,255,255,0.2); }

  .dd-level-badge {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    border-radius: 20px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .dd-speed-indicator {
    animation: ddBoltFlash 0.6s ease-in-out infinite;
  }

  .dd-lives {
    display: flex;
    gap: 0.3rem;
  }

  .dd-life {
    font-size: 1.4rem;
    transition: all 0.3s ease;
  }

  .dd-life-active { animation: ddLifePulse 2s ease-in-out infinite; }
  .dd-life-lost { opacity: 0.3; filter: grayscale(1); transform: scale(0.8); }

  @keyframes ddLifePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .dd-score-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    background: rgba(251,191,36,0.2);
    border-radius: 20px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 1rem;
  }

  .dd-score-icon { font-size: 1.1rem; }

  /* ── Streak ── */

  .dd-streak {
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 60;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 1rem;
    background: rgba(245, 158, 11, 0.2);
    border: 2px solid rgba(245, 158, 11, 0.4);
    border-radius: 20px;
    animation: ddStreakPulse 1s ease-in-out infinite;
  }

  .dd-streak-fire {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.6);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
  }

  .dd-streak-legendary {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3));
    border-color: rgba(168, 85, 247, 0.6);
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
  }

  @keyframes ddStreakPulse {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.05); }
  }

  .dd-streak-bolt { font-size: 1.2rem; animation: ddBoltFlash 0.8s ease-in-out infinite; }

  .dd-streak-count {
    font-size: 1.1rem;
    font-weight: 900;
    color: #fbbf24;
  }

  .dd-streak-fire .dd-streak-count { color: #ef4444; }
  .dd-streak-legendary .dd-streak-count { color: #c084fc; }

  .dd-streak-label {
    font-size: 0.7rem;
    font-weight: 700;
    color: #f59e0b;
    letter-spacing: 0.1em;
  }

  .dd-streak-glow {
    position: absolute;
    inset: -5px;
    border-radius: 25px;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.2), transparent);
    animation: ddStreakGlow 1s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes ddStreakGlow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.15); }
  }

  /* ── Main area ── */

  .dd-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 1rem;
    position: relative;
    z-index: 10;
  }

  /* ── Timer ── */

  .dd-timer {
    position: relative;
    width: 72px;
    height: 72px;
  }

  .dd-timer-pulse {
    animation: ddTimerPulse 0.5s ease-in-out infinite;
  }

  @keyframes ddTimerPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .dd-timer-icon {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  /* ── Card ── */

  .dd-card-wrapper {
    perspective: 800px;
    width: min(300px, 80vw);
    height: min(340px, 50vh);
  }

  .dd-shake {
    animation: ddShake 0.5s ease-in-out;
  }

  @keyframes ddShake {
    0%, 100% { transform: translateX(0); }
    10%, 50%, 90% { transform: translateX(-8px); }
    30%, 70% { transform: translateX(8px); }
  }

  .dd-card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dd-card-flipped {
    transform: rotateY(180deg);
  }

  .dd-card-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 24px;
    overflow: hidden;
  }

  .dd-card-front {
    background: linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%);
    border: 3px solid rgba(255,255,255,0.15);
    box-shadow:
      0 20px 60px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
  }

  .dd-card-back {
    background: linear-gradient(145deg, #4ade80 0%, #22c55e 50%, #16a34a 100%);
    border: 3px solid rgba(255,255,255,0.3);
    box-shadow: 0 20px 60px rgba(74, 222, 128, 0.3);
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── Ten-frame grid ── */

  .dd-tenframe-grid {
    position: absolute;
    inset: 15%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 4px;
    pointer-events: none;
  }

  .dd-tenframe-cell {
    border: 2px solid rgba(255,255,255,0.08);
    border-radius: 6px;
  }

  /* ── Dots ── */

  .dd-dot {
    position: absolute;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .dd-dot-visible {
    background: radial-gradient(circle at 35% 30%,
      color-mix(in srgb, var(--dot-fill) 100%, white 30%) 0%,
      var(--dot-fill) 50%,
      var(--dot-shadow) 100%);
    box-shadow:
      0 4px 12px rgba(0,0,0,0.3),
      0 0 20px color-mix(in srgb, var(--dot-fill) 60%, transparent),
      inset 0 -3px 6px rgba(0,0,0,0.2),
      inset 0 2px 4px rgba(255,255,255,0.3);
    animation: ddDotPop 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  .dd-dot-hidden {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
    background: transparent;
    box-shadow: none;
  }

  @keyframes ddDotPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    60% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  .dd-dot-number {
    font-size: 0.85rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }

  .dd-pattern-badge {
    position: absolute;
    bottom: 8px;
    right: 10px;
    font-size: 1.2rem;
    opacity: 0.4;
  }

  /* ── Sticker reveal ── */

  .dd-sticker-reveal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .dd-sticker-emoji {
    font-size: 5rem;
    animation: ddStickerBounce 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
  }

  @keyframes ddStickerBounce {
    0% { transform: scale(0) rotate(-20deg); }
    60% { transform: scale(1.3) rotate(5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .dd-sticker-name {
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    margin-top: 0.5rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .dd-sticker-sparkles {
    position: absolute;
    inset: -30px;
  }

  .dd-sticker-spark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    animation: ddSparkFly 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
    animation-delay: var(--spark-delay);
    box-shadow: 0 0 8px rgba(255,255,255,0.8);
  }

  @keyframes ddSparkFly {
    0% { transform: translate(-50%, -50%) rotate(var(--spark-angle)) translateY(0) scale(0); opacity: 0; }
    50% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--spark-angle)) translateY(-50px) scale(1); }
    100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--spark-angle)) translateY(-70px) scale(0); }
  }

  /* ── Phase label ── */

  .dd-phase-label {
    font-size: 1.2rem;
    font-weight: 700;
    min-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dd-phase-look {
    color: #fbbf24;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: ddLookPulse 0.8s ease-in-out infinite;
  }

  @keyframes ddLookPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  .dd-eye-icon { font-size: 1.5rem; }

  .dd-phase-answer {
    color: #94a3b8;
    animation: ddFadeIn 0.3s ease;
  }

  .dd-phase-correct {
    color: #4ade80;
    font-size: 1.4rem;
    animation: ddCorrectPop 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
  }

  @keyframes ddCorrectPop {
    0% { transform: scale(0.5); opacity: 0; }
    60% { transform: scale(1.2); }
    100% { transform: scale(1); opacity: 1; }
  }

  .dd-phase-wrong {
    color: #ef4444;
    animation: ddFadeIn 0.3s ease;
  }

  @keyframes ddFadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* ── Options ── */

  .dd-options {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: ddFadeIn 0.4s ease both;
  }

  .dd-option {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    background: rgba(255,255,255,0.08);
    border: 3px solid rgba(255,255,255,0.2);
    color: white;
    font-family: 'Nunito', sans-serif;
    font-size: 1.8rem;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
  }

  .dd-option:hover:not(:disabled) {
    background: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.4);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  }

  .dd-option:active:not(:disabled) {
    transform: translateY(0);
  }

  .dd-option-correct {
    background: rgba(74, 222, 128, 0.3) !important;
    border-color: #4ade80 !important;
    color: #4ade80 !important;
    box-shadow: 0 0 20px rgba(74, 222, 128, 0.4) !important;
    animation: ddOptionCorrect 0.5s ease;
  }

  @keyframes ddOptionCorrect {
    0% { transform: scale(1); }
    30% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }

  .dd-option-wrong {
    background: rgba(239, 68, 68, 0.3) !important;
    border-color: #ef4444 !important;
    color: #ef4444 !important;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.4) !important;
    animation: ddShake 0.4s ease;
  }

  .dd-option-dim {
    opacity: 0.3;
  }

  /* ── Bottom bar ── */

  .dd-bottom-bar {
    padding: 0.8rem;
    background: rgba(0,0,0,0.4);
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 2rem;
    z-index: 50;
    position: relative;
  }

  .dd-round-counter {
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 600;
  }

  .dd-speed-counter {
    font-size: 0.85rem;
    color: #f59e0b;
    font-weight: 700;
  }

  /* ── Responsive ── */

  @media (max-width: 600px) {
    .dd-card-wrapper {
      width: min(260px, 75vw);
      height: min(290px, 42vh);
    }

    .dd-dot {
      width: 32px;
      height: 32px;
    }

    .dd-option {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
      border-radius: 16px;
    }

    .dd-timer {
      width: 56px;
      height: 56px;
    }

    .dd-timer svg {
      width: 56px;
      height: 56px;
    }

    .dd-timer-icon { font-size: 1.2rem; }

    .dd-phase-label { font-size: 1rem; }

    .dd-header-center { display: none; }

    .dd-streak {
      top: auto;
      bottom: 55px;
      padding: 0.2rem 0.7rem;
    }

    .dd-streak-count { font-size: 0.9rem; }
    .dd-streak-label { font-size: 0.6rem; }
  }

  @media (max-width: 400px) {
    .dd-card-wrapper {
      width: min(220px, 70vw);
      height: min(250px, 38vh);
    }

    .dd-dot {
      width: 26px;
      height: 26px;
    }

    .dd-option {
      width: 52px;
      height: 52px;
      font-size: 1.3rem;
    }
  }

  @media (min-height: 800px) {
    .dd-main { gap: 1.5rem; }
  }
`;
