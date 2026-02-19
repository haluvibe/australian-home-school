"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

/*
  ⚡ DOT DASH: LIGHTNING REFLEXES SUBITISING GAME ⚡

  A WarioWare-style rapid-fire micro-challenge game.
  Dots FLASH on screen in recognizable patterns.
  Player DRAGS the correct number orb to the target zone.
  Combo system, power-ups, boss rounds, and cosmic visual spectacle.

  Learning: Subitising (instantly recognising quantities without counting)
  Target: Foundation Maths
*/

// =============== TYPES ===============

interface DotDashProps {
  onExit?: () => void;
}

type GameScreen = 'intro' | 'playing' | 'gameover';

type Phase = 'flash' | 'fade' | 'answer' | 'result' | 'boss-intro' | 'boss-flash' | 'boss-answer' | 'boss-result';

type PowerUpType = 'slowtime' | 'double' | 'shield';

interface DotPos {
  x: number;
  y: number;
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
  type: 'spark' | 'confetti' | 'lightning' | 'shockwave' | 'star' | 'trail';
}

interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
  life: number;
  size: number;
}

interface PowerUp {
  id: number;
  type: PowerUpType;
  x: number;
  y: number;
  life: number;
}

interface BgStar {
  x: number;
  y: number;
  size: number;
  speed: number;
  brightness: number;
  twinklePhase: number;
}

interface DragState {
  orbValue: number;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  active: boolean;
}

// =============== CONSTANTS ===============

const LIVES_MAX = 3;
const ROUNDS_PER_BOSS = 10;
const BOSS_SEQUENCE_LENGTH = 3;
const TARGET_ZONE_Y_PERCENT = 25; // % from top where target zone sits

const STREAK_NAMES: Record<number, { name: string; color: string }> = {
  3: { name: 'LIGHTNING STREAK!', color: '#fbbf24' },
  5: { name: 'THUNDER STREAK!', color: '#f97316' },
  10: { name: 'SUPERNOVA!', color: '#ec4899' },
  15: { name: 'COSMIC FURY!', color: '#a855f7' },
  20: { name: 'GODLIKE!', color: '#ef4444' },
};

function getStreakName(streak: number): { name: string; color: string } | null {
  const thresholds = [20, 15, 10, 5, 3];
  for (const t of thresholds) {
    if (streak >= t) return STREAK_NAMES[t];
  }
  return null;
}

const POWERUP_INFO: Record<PowerUpType, { symbol: string; label: string; color: string }> = {
  slowtime: { symbol: '🕐', label: 'SLOW TIME', color: '#38bdf8' },
  double: { symbol: '✕2', label: 'DOUBLE PTS', color: '#fbbf24' },
  shield: { symbol: '🛡️', label: 'SHIELD', color: '#4ade80' },
};

const ORB_COLORS = [
  { bg: 'linear-gradient(135deg, #ff6b9d, #c44569)', glow: 'rgba(255,107,157,0.6)', hue: 340 },
  { bg: 'linear-gradient(135deg, #ffa726, #fb8c00)', glow: 'rgba(255,167,38,0.6)', hue: 35 },
  { bg: 'linear-gradient(135deg, #66bb6a, #43a047)', glow: 'rgba(102,187,106,0.6)', hue: 120 },
  { bg: 'linear-gradient(135deg, #42a5f5, #1e88e5)', glow: 'rgba(66,165,245,0.6)', hue: 210 },
  { bg: 'linear-gradient(135deg, #ab47bc, #8e24aa)', glow: 'rgba(171,71,188,0.6)', hue: 290 },
  { bg: 'linear-gradient(135deg, #ef5350, #e53935)', glow: 'rgba(239,83,80,0.6)', hue: 0 },
  { bg: 'linear-gradient(135deg, #26c6da, #00acc1)', glow: 'rgba(38,198,218,0.6)', hue: 185 },
  { bg: 'linear-gradient(135deg, #ffca28, #ffa000)', glow: 'rgba(255,202,40,0.6)', hue: 45 },
  { bg: 'linear-gradient(135deg, #ec407a, #d81b60)', glow: 'rgba(236,64,122,0.6)', hue: 330 },
  { bg: 'linear-gradient(135deg, #7e57c2, #5e35b1)', glow: 'rgba(126,87,194,0.6)', hue: 260 },
];

// =============== PATTERN GENERATORS ===============

function getDicePattern(count: number): DotPos[] {
  const layouts: Record<number, DotPos[]> = {
    1: [{ x: 0.5, y: 0.5 }],
    2: [{ x: 0.3, y: 0.3 }, { x: 0.7, y: 0.7 }],
    3: [{ x: 0.3, y: 0.3 }, { x: 0.5, y: 0.5 }, { x: 0.7, y: 0.7 }],
    4: [{ x: 0.3, y: 0.3 }, { x: 0.7, y: 0.3 }, { x: 0.3, y: 0.7 }, { x: 0.7, y: 0.7 }],
    5: [{ x: 0.3, y: 0.3 }, { x: 0.7, y: 0.3 }, { x: 0.5, y: 0.5 }, { x: 0.3, y: 0.7 }, { x: 0.7, y: 0.7 }],
    6: [{ x: 0.3, y: 0.25 }, { x: 0.7, y: 0.25 }, { x: 0.3, y: 0.5 }, { x: 0.7, y: 0.5 }, { x: 0.3, y: 0.75 }, { x: 0.7, y: 0.75 }],
  };
  return layouts[Math.min(count, 6)] || layouts[6];
}

function getDominoPattern(count: number): DotPos[] {
  if (count <= 6) return getDicePattern(count);
  // Two groups for 7-10
  const left = Math.ceil(count / 2);
  const right = count - left;
  const dots: DotPos[] = [];
  const leftDots = getDicePattern(left);
  const rightDots = getDicePattern(right);
  for (const d of leftDots) dots.push({ x: d.x * 0.45 + 0.02, y: d.y });
  for (const d of rightDots) dots.push({ x: d.x * 0.45 + 0.53, y: d.y });
  return dots;
}

function getScatterPattern(count: number): DotPos[] {
  const dots: DotPos[] = [];
  for (let i = 0; i < count; i++) {
    let x: number, y: number, attempts = 0;
    do {
      x = 0.15 + Math.random() * 0.7;
      y = 0.15 + Math.random() * 0.7;
      attempts++;
    } while (attempts < 80 && dots.some(d => Math.hypot(d.x - x, d.y - y) < 0.13));
    dots.push({ x, y });
  }
  return dots;
}

function generateDots(count: number, level: number): DotPos[] {
  if (count <= 6 && level <= 3) return getDicePattern(count);
  if (count <= 6) {
    const r = Math.random();
    if (r < 0.5) return getDicePattern(count);
    return getScatterPattern(count);
  }
  if (count <= 10) {
    const r = Math.random();
    if (r < 0.4) return getDominoPattern(count);
    return getScatterPattern(count);
  }
  return getScatterPattern(count);
}

function getFlashDuration(level: number, slowTime: boolean): number {
  const base = level <= 2 ? 2000 : level <= 4 ? 1500 : level <= 6 ? 1000 : level <= 8 ? 700 : 500;
  return slowTime ? base * 1.8 : base;
}

function getMaxQuantity(level: number): number {
  if (level <= 2) return 5;
  if (level <= 4) return 7;
  if (level <= 6) return 10;
  if (level <= 8) return 15;
  return 20;
}

function getMinQuantity(level: number): number {
  if (level <= 2) return 1;
  if (level <= 4) return 2;
  if (level <= 6) return 3;
  return 4;
}

function generateOptions(correct: number, level: number): number[] {
  const numOptions = level >= 6 ? 6 : level >= 3 ? 5 : 4;
  const options = new Set<number>([correct]);
  const maxQ = getMaxQuantity(level);
  const minQ = getMinQuantity(level);

  while (options.size < numOptions) {
    let distractor: number;
    if (Math.random() < 0.6) {
      const off = Math.random() < 0.5 ? 1 : -1;
      distractor = correct + off * (1 + Math.floor(Math.random() * 2));
    } else {
      distractor = minQ + Math.floor(Math.random() * (maxQ - minQ + 1));
    }
    if (distractor >= 1 && distractor <= maxQ && distractor !== correct) {
      options.add(distractor);
    }
  }

  const arr = Array.from(options);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =============== ID COUNTER ===============

let _idCounter = 0;
const nextId = () => ++_idCounter;

// =============== MAIN COMPONENT ===============

export default function DotDash({ onExit }: DotDashProps = {}) {
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [phase, setPhase] = useState<Phase>('flash');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(LIVES_MAX);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [combo, setCombo] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [totalRounds, setTotalRounds] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [roundsInLevel, setRoundsInLevel] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Current challenge
  const [dots, setDots] = useState<DotPos[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [options, setOptions] = useState<number[]>([]);
  const [showDots, setShowDots] = useState(false);
  const [flashIntensity, setFlashIntensity] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shakeScreen, setShakeScreen] = useState(false);

  // Boss round
  const [isBossRound, setIsBossRound] = useState(false);
  const [bossSequence, setBossSequence] = useState<number[]>([]);
  const [bossCurrentIndex, setBossCurrentIndex] = useState(0);
  const [bossAnswered, setBossAnswered] = useState<number[]>([]);

  // Power-ups
  const [activePowerUps, setActivePowerUps] = useState<PowerUp[]>([]);
  const [hasSlowTime, setHasSlowTime] = useState(false);
  const [hasDoublePoints, setHasDoublePoints] = useState(false);
  const [hasShield, setHasShield] = useState(false);

  // Drag state
  const [drag, setDrag] = useState<DragState | null>(null);

  // Visual effects
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [streakAnnouncement, setStreakAnnouncement] = useState<string | null>(null);
  const [streakAnnouncementColor, setStreakAnnouncementColor] = useState('#fbbf24');
  const [comboFlash, setComboFlash] = useState(false);
  const [targetZonePulse, setTargetZonePulse] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(0);
  const [timerProgress, setTimerProgress] = useState(1);

  const [bgStars] = useState<BgStar[]>(() =>
    Array.from({ length: 80 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 3,
      speed: 0.1 + Math.random() * 0.4,
      brightness: 0.15 + Math.random() * 0.7,
      twinklePhase: Math.random() * Math.PI * 2,
    }))
  );

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const playAreaRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastFrameRef = useRef(0);
  const phaseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const answerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flashStartRef = useRef(0);
  const answerStartRef = useRef(0);
  const answerDurationRef = useRef(5000);
  const startNewRoundRef = useRef<() => void>(() => {});
  const recentCountsRef = useRef<number[]>([]);

  // =============== PARTICLE SYSTEM ===============

  const spawnParticles = useCallback((cx: number, cy: number, count: number, hue: number, type: Particle['type'] = 'spark') => {
    const newP: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const speed = type === 'shockwave' ? 0.5 : type === 'lightning' ? 4 + Math.random() * 6 : 2 + Math.random() * 5;
      newP.push({
        id: nextId(),
        x: cx, y: cy,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
        vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: type === 'shockwave' ? 0.6 : type === 'lightning' ? 0.3 + Math.random() * 0.2 : 0.5 + Math.random() * 0.5,
        size: type === 'shockwave' ? 40 : type === 'lightning' ? 2 + Math.random() * 3 : type === 'confetti' ? 4 + Math.random() * 4 : 2 + Math.random() * 4,
        hue: type === 'confetti' ? Math.random() * 360 : hue,
        type,
      });
    }
    setParticles(prev => [...prev, ...newP]);
  }, []);

  const spawnFloatingText = useCallback((x: number, y: number, text: string, color: string, size = 1.2) => {
    setFloatingTexts(prev => [...prev, { id: nextId(), x, y, text, color, life: 1, size }]);
  }, []);

  // =============== ANIMATION LOOP ===============

  useEffect(() => {
    const animate = (ts: number) => {
      if (!lastFrameRef.current) lastFrameRef.current = ts;
      const dt = Math.min((ts - lastFrameRef.current) / 1000, 0.05);
      lastFrameRef.current = ts;

      setParticles(prev => {
        if (prev.length === 0) return prev;
        const updated = prev.map(p => ({
          ...p,
          x: p.type === 'shockwave' ? p.x : p.x + p.vx,
          y: p.type === 'shockwave' ? p.y : p.y + p.vy + 0.3,
          vx: p.vx * 0.96,
          vy: p.vy * 0.96,
          life: p.life - dt / p.maxLife,
          size: p.type === 'shockwave' ? p.size + 3 : p.size,
        })).filter(p => p.life > 0);
        return updated;
      });

      setFloatingTexts(prev => {
        if (prev.length === 0) return prev;
        return prev.map(f => ({
          ...f,
          y: f.y - 1.2,
          life: f.life - dt * 1.5,
        })).filter(f => f.life > 0);
      });

      // Timer progress during answer phase
      if ((phase === 'answer' || phase === 'boss-answer') && answerStartRef.current > 0) {
        const elapsed = ts - answerStartRef.current;
        const remaining = Math.max(0, 1 - elapsed / answerDurationRef.current);
        setTimerProgress(remaining);
      }

      // Flash intensity fade
      setFlashIntensity(prev => Math.max(0, prev - dt * 3));

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [phase]);

  // =============== GAME FLOW ===============

  const triggerPowerUp = useCallback(() => {
    // Random chance to spawn a power-up (15% chance after round 5)
    if (totalRounds < 5 || Math.random() > 0.15) return;
    const types: PowerUpType[] = ['slowtime', 'double', 'shield'];
    const type = types[Math.floor(Math.random() * types.length)];
    const x = 20 + Math.random() * 60;
    const y = 40 + Math.random() * 20;
    setActivePowerUps(prev => [...prev, { id: nextId(), type, x, y, life: 5 }]);
  }, [totalRounds]);

  const startBossRound = useCallback((lvl: number) => {
    const seqLen = Math.min(BOSS_SEQUENCE_LENGTH + Math.floor(lvl / 4), 5);
    const maxQ = getMaxQuantity(lvl);
    const minQ = getMinQuantity(lvl);
    const seq: number[] = [];
    for (let i = 0; i < seqLen; i++) {
      seq.push(minQ + Math.floor(Math.random() * (maxQ - minQ + 1)));
    }
    setBossSequence(seq);
    setBossCurrentIndex(0);
    setBossAnswered([]);
    setIsBossRound(true);
    setPhase('boss-intro');

    setTimeout(() => {
      // Show first pattern
      showBossPattern(seq, 0, lvl);
    }, 2000);
  }, []);

  const showBossPattern = useCallback((seq: number[], idx: number, lvl: number) => {
    if (idx >= seq.length) {
      // All shown, now answer phase
      setPhase('boss-answer');
      setOptions(generateOptions(seq[0], lvl));
      setBossCurrentIndex(0);
      answerStartRef.current = performance.now();
      answerDurationRef.current = 8000;
      setTimerProgress(1);
      return;
    }

    const count = seq[idx];
    const newDots = generateDots(count, lvl);
    setDots(newDots);
    setCorrectAnswer(count);
    setShowDots(true);
    setFlashIntensity(1);
    setPhase('boss-flash');

    const flashMs = getFlashDuration(lvl, false) * 0.7;
    setTimeout(() => {
      setShowDots(false);
      setTimeout(() => {
        showBossPattern(seq, idx + 1, lvl);
      }, 400);
    }, flashMs);
  }, []);

  const startNewRound = useCallback(() => {
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);

    // Check for boss round
    if (totalRounds > 0 && totalRounds % ROUNDS_PER_BOSS === 0 && !isBossRound) {
      startBossRound(level);
      return;
    }

    setIsBossRound(false);
    setBossSequence([]);
    setBossCurrentIndex(0);
    setBossAnswered([]);

    // Remove expired power-ups
    setActivePowerUps(prev => prev.filter(p => p.life > 0));

    const maxQ = getMaxQuantity(level);
    const minQ = getMinQuantity(level);
    let count: number;
    let attempts = 0;
    do {
      count = minQ + Math.floor(Math.random() * (maxQ - minQ + 1));
      attempts++;
    } while (recentCountsRef.current.includes(count) && attempts < 30);
    recentCountsRef.current.push(count);
    if (recentCountsRef.current.length > 4) recentCountsRef.current.shift();

    const newDots = generateDots(count, level);
    const newOptions = generateOptions(count, level);
    const flashMs = getFlashDuration(level, hasSlowTime);

    setDots(newDots);
    setCorrectAnswer(count);
    setOptions(newOptions);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowDots(true);
    setFlashIntensity(1);
    setDrag(null);
    setShakeScreen(false);
    setTargetZonePulse(false);
    setPhase('flash');
    flashStartRef.current = performance.now();

    // Flash -> fade -> answer
    phaseTimerRef.current = setTimeout(() => {
      setPhase('fade');
      setShowDots(false);

      setTimeout(() => {
        setPhase('answer');
        answerStartRef.current = performance.now();
        const answerTime = hasSlowTime ? 7000 : 5000;
        answerDurationRef.current = answerTime;
        setTimerProgress(1);

        answerTimerRef.current = setTimeout(() => {
          handleTimeout();
        }, answerTime);
      }, 300);
    }, flashMs);

    triggerPowerUp();
  }, [level, hasSlowTime, totalRounds, isBossRound, startBossRound, triggerPowerUp]);

  useEffect(() => {
    startNewRoundRef.current = startNewRound;
  }, [startNewRound]);

  const handleTimeout = useCallback(() => {
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);
    if (hasShield) {
      setHasShield(false);
      spawnFloatingText(50, 50, 'SHIELD USED!', '#4ade80', 1.4);
      spawnParticles(50, 50, 12, 120, 'spark');
      setTimeout(() => startNewRoundRef.current(), 1000);
      return;
    }
    setIsCorrect(false);
    setShakeScreen(true);
    setStreak(0);
    setCombo(0);
    setMultiplier(1);
    setLives(prev => {
      const newLives = prev - 1;
      if (newLives <= 0) {
        setTimeout(() => {
          setScore(s => {
            setHighScore(h => Math.max(h, s));
            return s;
          });
          setScreen('gameover');
        }, 1500);
      }
      return newLives;
    });
    spawnParticles(50, 50, 15, 0, 'spark');
    setPhase('result');
    setShowDots(true); // Show correct answer
    setTimeout(() => {
      setLives(currentLives => {
        if (currentLives > 0) {
          startNewRoundRef.current();
        }
        return currentLives;
      });
    }, 2000);
  }, [hasShield, spawnParticles, spawnFloatingText]);

  const collectPowerUp = useCallback((pu: PowerUp) => {
    setActivePowerUps(prev => prev.filter(p => p.id !== pu.id));
    const info = POWERUP_INFO[pu.type];
    spawnFloatingText(pu.x, pu.y, info.label, info.color, 1.3);
    spawnParticles(pu.x, pu.y, 15, pu.type === 'slowtime' ? 200 : pu.type === 'double' ? 45 : 120, 'confetti');

    if (pu.type === 'slowtime') setHasSlowTime(true);
    else if (pu.type === 'double') setHasDoublePoints(true);
    else if (pu.type === 'shield') setHasShield(true);

    setTimeout(() => {
      if (pu.type === 'slowtime') setHasSlowTime(false);
      else if (pu.type === 'double') setHasDoublePoints(false);
    }, 15000);
  }, [spawnParticles, spawnFloatingText]);

  const handleAnswer = useCallback((answer: number) => {
    if (selectedAnswer !== null) return;
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);

    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      const streakVal = streak + 1;
      const comboVal = combo + 1;
      const mult = Math.min(1 + Math.floor(streakVal / 3) * 0.5, 5);
      const speedBonus = Math.round(timerProgress * 30);
      const levelBonus = level * 3;
      const basePoints = 10 + speedBonus + levelBonus;
      const totalPoints = Math.round(basePoints * mult * (hasDoublePoints ? 2 : 1));

      setScore(prev => prev + totalPoints);
      setStreak(streakVal);
      setCombo(comboVal);
      setMultiplier(mult);
      setTotalRounds(prev => prev + 1);
      setTotalCorrect(prev => prev + 1);
      setRoundsInLevel(prev => prev + 1);
      if (streakVal > bestStreak) setBestStreak(streakVal);
      setEnergyLevel(prev => Math.min(prev + 0.1, 1));

      // Visual effects
      spawnParticles(50, 30, 25, 120, 'confetti');
      spawnParticles(50, 30, 8, 45, 'spark');
      spawnFloatingText(50, 35, `+${totalPoints}`, '#4ade80', 1.6);

      if (mult > 1) {
        spawnFloatingText(50, 42, `${mult}x MULTIPLIER`, '#fbbf24', 1);
      }

      // Streak announcement
      const streakInfo = getStreakName(streakVal);
      if (streakInfo && (streakVal === 3 || streakVal === 5 || streakVal === 10 || streakVal === 15 || streakVal === 20)) {
        setStreakAnnouncement(streakInfo.name);
        setStreakAnnouncementColor(streakInfo.color);
        spawnParticles(50, 50, 30, streakVal >= 10 ? 300 : 50, 'lightning');
        spawnParticles(50, 50, 4, 50, 'shockwave');
        setComboFlash(true);
        setTimeout(() => setComboFlash(false), 600);
        setTimeout(() => setStreakAnnouncement(null), 2000);
      }

      setTargetZonePulse(true);
      setTimeout(() => setTargetZonePulse(false), 500);

      setPhase('result');

      // Level up check
      const roundsNeeded = level <= 2 ? 5 : level <= 5 ? 7 : 8;
      setTimeout(() => {
        if (roundsInLevel + 1 >= roundsNeeded) {
          setLevel(prev => prev + 1);
          setRoundsInLevel(0);
          recentCountsRef.current = [];
          spawnFloatingText(50, 50, `LEVEL ${level + 1}!`, '#fbbf24', 2);
          spawnParticles(50, 50, 40, 45, 'confetti');
          spawnParticles(50, 50, 6, 45, 'shockwave');
        }
        startNewRoundRef.current();
      }, 1200);

    } else {
      // Wrong
      if (hasShield) {
        setHasShield(false);
        spawnFloatingText(50, 50, 'SHIELD SAVED YOU!', '#4ade80', 1.4);
        spawnParticles(50, 50, 12, 120, 'star');
        setPhase('result');
        setShowDots(true);
        setTimeout(() => startNewRoundRef.current(), 1500);
        return;
      }

      setShakeScreen(true);
      setStreak(0);
      setCombo(0);
      setMultiplier(1);
      setEnergyLevel(prev => Math.max(0, prev - 0.3));
      setTotalRounds(prev => prev + 1);
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => {
            setScore(s => {
              setHighScore(h => Math.max(h, s));
              return s;
            });
            setScreen('gameover');
          }, 2000);
        }
        return newLives;
      });

      spawnParticles(50, 50, 20, 0, 'spark');
      spawnFloatingText(50, 40, `It was ${correctAnswer}`, '#ef4444', 1.2);
      setPhase('result');
      setShowDots(true);

      setTimeout(() => {
        setLives(currentLives => {
          if (currentLives > 0) startNewRoundRef.current();
          return currentLives;
        });
      }, 2000);
    }
  }, [selectedAnswer, correctAnswer, streak, combo, level, timerProgress, hasDoublePoints, hasShield,
    bestStreak, roundsInLevel, spawnParticles, spawnFloatingText]);

  // Boss answer handler
  const handleBossAnswer = useCallback((answer: number) => {
    if (!isBossRound || phase !== 'boss-answer') return;

    const expected = bossSequence[bossCurrentIndex];
    if (answer === expected) {
      const newAnswered = [...bossAnswered, answer];
      setBossAnswered(newAnswered);
      spawnParticles(50, 50, 15, 120, 'confetti');
      spawnFloatingText(50, 40, 'CORRECT!', '#4ade80', 1.4);

      if (newAnswered.length >= bossSequence.length) {
        // Boss defeated!
        const bossBonus = 100 * level;
        setScore(prev => prev + bossBonus);
        spawnParticles(50, 50, 50, 45, 'confetti');
        spawnParticles(50, 50, 8, 290, 'shockwave');
        spawnParticles(50, 50, 30, 300, 'lightning');
        spawnFloatingText(50, 30, `BOSS DEFEATED! +${bossBonus}`, '#fbbf24', 1.8);
        setStreakAnnouncement('BOSS DEFEATED!');
        setStreakAnnouncementColor('#fbbf24');
        setTimeout(() => setStreakAnnouncement(null), 3000);

        setIsBossRound(false);
        setTotalRounds(prev => prev + 1);
        setTotalCorrect(prev => prev + 1);
        setTimeout(() => startNewRoundRef.current(), 2500);
      } else {
        // Next in sequence
        const nextIdx = bossCurrentIndex + 1;
        setBossCurrentIndex(nextIdx);
        setOptions(generateOptions(bossSequence[nextIdx], level));
      }
    } else {
      // Boss wrong answer
      if (hasShield) {
        setHasShield(false);
        spawnFloatingText(50, 50, 'SHIELD!', '#4ade80', 1.3);
        return;
      }
      setShakeScreen(true);
      setStreak(0);
      setCombo(0);
      setMultiplier(1);
      spawnParticles(50, 50, 20, 0, 'spark');
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => {
            setScore(s => { setHighScore(h => Math.max(h, s)); return s; });
            setScreen('gameover');
          }, 2000);
        }
        return newLives;
      });
      setIsBossRound(false);
      setTotalRounds(prev => prev + 1);
      setTimeout(() => {
        setLives(cl => { if (cl > 0) startNewRoundRef.current(); return cl; });
      }, 2000);
    }
  }, [isBossRound, phase, bossSequence, bossCurrentIndex, bossAnswered, level, hasShield, spawnParticles, spawnFloatingText]);

  // =============== DRAG HANDLING ===============

  const getRelativePos = useCallback((clientX: number, clientY: number) => {
    if (!playAreaRef.current) return { x: 0, y: 0 };
    const rect = playAreaRef.current.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    };
  }, []);

  const handleDragStart = useCallback((value: number, clientX: number, clientY: number) => {
    if (phase !== 'answer' && phase !== 'boss-answer') return;
    const pos = getRelativePos(clientX, clientY);
    setDrag({
      orbValue: value,
      startX: pos.x,
      startY: pos.y,
      currentX: pos.x,
      currentY: pos.y,
      active: true,
    });
  }, [phase, getRelativePos]);

  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!drag || !drag.active) return;
    const pos = getRelativePos(clientX, clientY);
    setDrag(prev => prev ? { ...prev, currentX: pos.x, currentY: pos.y } : null);
  }, [drag, getRelativePos]);

  const handleDragEnd = useCallback(() => {
    if (!drag || !drag.active) return;

    // Check if dragged to target zone (top 30% of play area)
    if (drag.currentY < TARGET_ZONE_Y_PERCENT + 10) {
      // Dropped in target zone - submit answer
      if (isBossRound && phase === 'boss-answer') {
        handleBossAnswer(drag.orbValue);
      } else if (phase === 'answer') {
        handleAnswer(drag.orbValue);
      }
    }

    // Check if dragged over a power-up
    for (const pu of activePowerUps) {
      const dx = drag.currentX - pu.x;
      const dy = drag.currentY - pu.y;
      if (Math.sqrt(dx * dx + dy * dy) < 8) {
        collectPowerUp(pu);
        break;
      }
    }

    setDrag(null);
  }, [drag, phase, isBossRound, handleAnswer, handleBossAnswer, activePowerUps, collectPowerUp]);

  // Touch/mouse event listeners for drag
  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      handleDragMove(clientX, clientY);
    };
    const onEnd = () => handleDragEnd();

    if (drag?.active) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
      return () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onEnd);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onEnd);
      };
    }
  }, [drag, handleDragMove, handleDragEnd]);

  // =============== GAME START ===============

  const startGame = useCallback(() => {
    setScreen('playing');
    setLevel(1);
    setScore(0);
    setLives(LIVES_MAX);
    setStreak(0);
    setBestStreak(0);
    setCombo(0);
    setMultiplier(1);
    setTotalRounds(0);
    setTotalCorrect(0);
    setRoundsInLevel(0);
    setIsBossRound(false);
    setActivePowerUps([]);
    setHasSlowTime(false);
    setHasDoublePoints(false);
    setHasShield(false);
    setEnergyLevel(0);
    setStreakAnnouncement(null);
    recentCountsRef.current = [];
    setTimeout(() => startNewRoundRef.current(), 500);
  }, []);

  const goToMenu = useCallback(() => {
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
    if (answerTimerRef.current) clearTimeout(answerTimerRef.current);
    if (onExit) onExit();
    else setScreen('intro');
  }, [onExit]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
      if (answerTimerRef.current) clearTimeout(answerTimerRef.current);
    };
  }, []);

  // =============== RENDER ===============

  const renderBgStars = () => (
    <div className="dd-bg-stars">
      {bgStars.map((star, i) => (
        <div key={i} className="dd-star" style={{
          left: `${star.x}%`, top: `${star.y}%`,
          width: star.size, height: star.size,
          opacity: star.brightness,
          animationDelay: `${star.twinklePhase}s`,
          animationDuration: `${3 + star.speed * 5}s`,
        }} />
      ))}
    </div>
  );

  const renderParticles = () => (
    <div className="dd-particles">
      {particles.map(p => (
        <div key={p.id} className={`dd-particle dd-p-${p.type}`} style={{
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          opacity: p.life * p.life,
          '--p-hue': p.hue,
          transform: `scale(${p.type === 'shockwave' ? 1 : p.life})`,
        } as React.CSSProperties} />
      ))}
      {floatingTexts.map(f => (
        <div key={f.id} className="dd-float-text" style={{
          left: `${f.x}%`, top: `${f.y}%`,
          opacity: f.life,
          fontSize: `${f.size}rem`,
          color: f.color,
          transform: `translate(-50%, -50%) scale(${0.5 + f.life * 0.5})`,
        }}>{f.text}</div>
      ))}
    </div>
  );

  // ---- INTRO SCREEN ----
  if (screen === 'intro') {
    return (
      <div className="dd-root">
        <style>{styles}</style>
        <div className="dd-intro">
          {renderBgStars()}
          <div className="dd-nebula dd-nebula-1" />
          <div className="dd-nebula dd-nebula-2" />

          <div className="dd-intro-orbs">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="dd-intro-orb" style={{
                left: `${15 + n * 14}%`,
                top: `${30 + (n % 2 === 0 ? -8 : 8)}%`,
                animationDelay: `${n * 0.3}s`,
                background: ORB_COLORS[n % ORB_COLORS.length].bg,
                boxShadow: `0 0 30px ${ORB_COLORS[n % ORB_COLORS.length].glow}, 0 0 60px ${ORB_COLORS[n % ORB_COLORS.length].glow}`,
              }}>
                <div className="dd-orb-shine" />
                <span className="dd-orb-num">{n}</span>
              </div>
            ))}
          </div>

          <div className="dd-intro-content">
            <div className="dd-logo-area">
              <div className="dd-logo-flash">⚡</div>
              <h1 className="dd-title">DOT DASH</h1>
              <div className="dd-logo-flash dd-logo-flash-r">⚡</div>
            </div>
            <p className="dd-tagline">Lightning Reflexes Subitising</p>

            <div className="dd-how-to-play">
              <h3>How to Play</h3>
              <div className="dd-how-step">
                <span className="dd-step-icon">💥</span>
                <p>Dots <strong>FLASH</strong> on screen in a burst of light</p>
              </div>
              <div className="dd-how-step">
                <span className="dd-step-icon">🧠</span>
                <p>Instantly <strong>RECOGNISE</strong> how many dots you saw</p>
              </div>
              <div className="dd-how-step">
                <span className="dd-step-icon">👆</span>
                <p><strong>DRAG</strong> the correct number orb to the target zone</p>
              </div>
              <div className="dd-how-step">
                <span className="dd-step-icon">⚡</span>
                <p>Build <strong>COMBOS</strong> for massive score multipliers!</p>
              </div>
            </div>

            <button className="dd-start-btn" onClick={startGame}>
              <span className="dd-btn-flash">⚡</span>
              START GAME
              <span className="dd-btn-flash">⚡</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- GAME OVER SCREEN ----
  if (screen === 'gameover') {
    return (
      <div className="dd-root">
        <style>{styles}</style>
        <div className="dd-gameover">
          {renderBgStars()}
          <div className="dd-nebula dd-nebula-1" />
          <div className="dd-go-content">
            <div className="dd-go-icon">🧠</div>
            <h1 className="dd-go-title">MISSION COMPLETE</h1>
            <p className="dd-go-sub">Your subitising powers are growing!</p>

            <div className="dd-go-stats">
              <div className="dd-go-stat dd-go-stat-big">
                <span className="dd-go-stat-label">SCORE</span>
                <span className="dd-go-stat-val dd-go-score">{score}</span>
              </div>
              <div className="dd-go-stat">
                <span className="dd-go-stat-label">LEVEL</span>
                <span className="dd-go-stat-val">{level}</span>
              </div>
              <div className="dd-go-stat">
                <span className="dd-go-stat-label">CORRECT</span>
                <span className="dd-go-stat-val">{totalCorrect}/{totalRounds}</span>
              </div>
              <div className="dd-go-stat">
                <span className="dd-go-stat-label">BEST STREAK</span>
                <span className="dd-go-stat-val">⚡{bestStreak}</span>
              </div>
              {highScore > 0 && (
                <div className="dd-go-stat">
                  <span className="dd-go-stat-label">HIGH SCORE</span>
                  <span className="dd-go-stat-val dd-go-high">{highScore}</span>
                </div>
              )}
            </div>

            <button className="dd-start-btn" onClick={startGame}>
              <span className="dd-btn-flash">🔄</span>
              PLAY AGAIN
              <span className="dd-btn-flash">⚡</span>
            </button>
            <button className="dd-menu-btn" onClick={goToMenu}>Main Menu</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- MAIN GAME SCREEN ----
  const isFlashing = phase === 'flash' || phase === 'boss-flash';
  const isAnswering = phase === 'answer' || phase === 'boss-answer';
  const isResult = phase === 'result' || phase === 'boss-result';
  const streakInfo = getStreakName(streak);

  return (
    <div className="dd-root" ref={containerRef}>
      <style>{styles}</style>
      <div className={`dd-game ${shakeScreen ? 'dd-screen-shake' : ''} ${comboFlash ? 'dd-combo-flash' : ''}`}>
        {renderBgStars()}
        <div className="dd-nebula dd-nebula-1" />

        {/* Flash overlay */}
        {flashIntensity > 0 && (
          <div className="dd-flash-overlay" style={{ opacity: flashIntensity * 0.7 }} />
        )}

        {/* Energy border based on streak */}
        {streak >= 3 && (
          <div className="dd-energy-border" style={{
            '--e-color': streakInfo?.color || '#fbbf24',
            '--e-intensity': Math.min(streak / 10, 1),
          } as React.CSSProperties} />
        )}

        {renderParticles()}

        {/* HUD */}
        <div className="dd-hud">
          <div className="dd-hud-left">
            <button className="dd-back-btn" onClick={goToMenu}>{'←'}</button>
            <div className="dd-level-badge">
              {isBossRound && <span className="dd-boss-indicator">👑</span>}
              LVL {level}
            </div>
          </div>
          <div className="dd-hud-center">
            <div className="dd-lives-row">
              {Array.from({ length: LIVES_MAX }, (_, i) => (
                <div key={i} className={`dd-heart ${i < lives ? 'dd-heart-on' : 'dd-heart-off'}`}>
                  {i < lives ? '❤️' : '🖤'}
                </div>
              ))}
            </div>
          </div>
          <div className="dd-hud-right">
            <div className="dd-score-display">
              <span className="dd-score-star">⭐</span>
              <span className="dd-score-num">{score}</span>
            </div>
          </div>
        </div>

        {/* Streak / Multiplier bar */}
        {streak >= 2 && (
          <div className="dd-streak-bar" style={{ '--streak-color': streakInfo?.color || '#fbbf24' } as React.CSSProperties}>
            <span className="dd-streak-bolt">⚡</span>
            <span className="dd-streak-num">{streak}x</span>
            <span className="dd-streak-label">{streakInfo?.name || 'STREAK'}</span>
            {multiplier > 1 && <span className="dd-mult-badge">{multiplier}x PTS</span>}
          </div>
        )}

        {/* Streak announcement */}
        {streakAnnouncement && (
          <div className="dd-streak-announce" style={{ color: streakAnnouncementColor }}>
            {streakAnnouncement}
          </div>
        )}

        {/* Boss intro */}
        {phase === 'boss-intro' && (
          <div className="dd-boss-intro">
            <div className="dd-boss-crown">👑</div>
            <h2 className="dd-boss-title">BOSS ROUND!</h2>
            <p className="dd-boss-sub">Remember the sequence of {bossSequence.length} patterns!</p>
          </div>
        )}

        {/* Main play area */}
        <div className="dd-play-area" ref={playAreaRef}>
          {/* Target zone */}
          <div className={`dd-target-zone ${targetZonePulse ? 'dd-tz-pulse' : ''} ${isAnswering && drag ? 'dd-tz-active' : ''}`}>
            <div className="dd-tz-ring" />
            <div className="dd-tz-ring dd-tz-ring-2" />
            <span className="dd-tz-label">
              {isAnswering ? 'DROP HERE' : phase === 'flash' || phase === 'boss-flash' ? 'LOOK!' : ''}
            </span>
            {/* Boss sequence progress */}
            {isBossRound && phase === 'boss-answer' && (
              <div className="dd-boss-progress">
                {bossSequence.map((_, i) => (
                  <div key={i} className={`dd-boss-dot ${i < bossAnswered.length ? 'dd-boss-dot-done' : i === bossCurrentIndex ? 'dd-boss-dot-current' : ''}`} />
                ))}
              </div>
            )}
          </div>

          {/* Dot display area */}
          <div className="dd-dot-area">
            {dots.map((dot, i) => (
              <div
                key={i}
                className={`dd-dot ${showDots ? 'dd-dot-show' : 'dd-dot-hide'} ${isResult && isCorrect === false ? 'dd-dot-reveal' : ''}`}
                style={{
                  left: `${dot.x * 100}%`,
                  top: `${dot.y * 100}%`,
                  animationDelay: `${i * 0.03}s`,
                  '--dot-hue': (correctAnswer * 30 + 180) % 360,
                } as React.CSSProperties}
              >
                <div className="dd-dot-glow" />
                <div className="dd-dot-core" />
                {isResult && isCorrect === false && (
                  <span className="dd-dot-count">{i + 1}</span>
                )}
              </div>
            ))}
          </div>

          {/* Timer arc */}
          {isAnswering && (
            <div className="dd-timer-wrap">
              <svg className="dd-timer-svg" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                <circle
                  cx="40" cy="40" r="34" fill="none"
                  stroke={timerProgress > 0.5 ? '#4ade80' : timerProgress > 0.25 ? '#fbbf24' : '#ef4444'}
                  strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - timerProgress)}`}
                  transform="rotate(-90 40 40)"
                />
              </svg>
              <span className="dd-timer-icon">{isFlashing ? '👁️' : '🤔'}</span>
            </div>
          )}

          {/* Phase text */}
          <div className="dd-phase-text">
            {isFlashing && <span className="dd-pt-flash">⚡ LOOK! ⚡</span>}
            {phase === 'fade' && <span className="dd-pt-fade">How many dots?</span>}
            {isAnswering && !drag && selectedAnswer === null && <span className="dd-pt-answer">DRAG the number up!</span>}
            {isResult && isCorrect && <span className="dd-pt-correct">⚡ CORRECT! ⚡</span>}
            {isResult && isCorrect === false && <span className="dd-pt-wrong">The answer was {correctAnswer}</span>}
          </div>

          {/* Power-ups floating in play area */}
          {activePowerUps.map(pu => (
            <div
              key={pu.id}
              className="dd-powerup"
              style={{ left: `${pu.x}%`, top: `${pu.y}%`, '--pu-color': POWERUP_INFO[pu.type].color } as React.CSSProperties}
              onClick={() => collectPowerUp(pu)}
            >
              <div className="dd-pu-glow" />
              <span className="dd-pu-icon">{POWERUP_INFO[pu.type].symbol}</span>
            </div>
          ))}

          {/* Active powerup indicators */}
          <div className="dd-active-pus">
            {hasSlowTime && <div className="dd-apu" style={{ background: 'rgba(56,189,248,0.3)', borderColor: '#38bdf8' }}>🕐</div>}
            {hasDoublePoints && <div className="dd-apu" style={{ background: 'rgba(251,191,36,0.3)', borderColor: '#fbbf24' }}>x2</div>}
            {hasShield && <div className="dd-apu" style={{ background: 'rgba(74,222,128,0.3)', borderColor: '#4ade80' }}>🛡️</div>}
          </div>

          {/* Dragging orb ghost */}
          {drag && drag.active && (
            <div className="dd-drag-ghost" style={{
              left: `${drag.currentX}%`,
              top: `${drag.currentY}%`,
              background: ORB_COLORS[(drag.orbValue - 1) % ORB_COLORS.length].bg,
              boxShadow: `0 0 30px ${ORB_COLORS[(drag.orbValue - 1) % ORB_COLORS.length].glow}, 0 0 60px ${ORB_COLORS[(drag.orbValue - 1) % ORB_COLORS.length].glow}`,
            }}>
              <div className="dd-orb-shine" />
              <span className="dd-drag-num">{drag.orbValue}</span>
            </div>
          )}

          {/* Drag trail */}
          {drag && drag.active && drag.currentY < TARGET_ZONE_Y_PERCENT + 15 && (
            <div className="dd-drag-trail" style={{
              left: `${drag.currentX}%`,
              top: `${drag.currentY + 5}%`,
              height: `${Math.max(0, 85 - drag.currentY)}%`,
            }} />
          )}
        </div>

        {/* Number orbs row */}
        <div className={`dd-orbs-row ${isAnswering ? 'dd-orbs-show' : 'dd-orbs-hide'}`}>
          {options.map((opt) => {
            const orbColor = ORB_COLORS[(opt - 1) % ORB_COLORS.length];
            const isSelected = selectedAnswer === opt;
            const isCorrectOpt = isResult && opt === correctAnswer;
            const isWrongOpt = isResult && selectedAnswer === opt && !isCorrect;
            const isDimmed = isResult && selectedAnswer !== null && opt !== correctAnswer && opt !== selectedAnswer;

            return (
              <div
                key={opt}
                className={`dd-orb ${isSelected ? 'dd-orb-selected' : ''} ${isCorrectOpt ? 'dd-orb-correct' : ''} ${isWrongOpt ? 'dd-orb-wrong' : ''} ${isDimmed ? 'dd-orb-dim' : ''}`}
                style={{
                  background: orbColor.bg,
                  boxShadow: `0 8px 25px ${orbColor.glow}, inset 0 -8px 15px rgba(0,0,0,0.2)`,
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (selectedAnswer !== null) return;
                  handleDragStart(opt, e.clientX, e.clientY);
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  if (selectedAnswer !== null) return;
                  handleDragStart(opt, e.touches[0].clientX, e.touches[0].clientY);
                }}
                onClick={() => {
                  if (selectedAnswer !== null) return;
                  // Fallback: tap to answer
                  if (isBossRound && phase === 'boss-answer') handleBossAnswer(opt);
                  else if (phase === 'answer') handleAnswer(opt);
                }}
              >
                <div className="dd-orb-shine" />
                <div className="dd-orb-inner-glow" />
                <span className="dd-orb-num">{opt}</span>
                {isCorrectOpt && <div className="dd-orb-ring-correct" />}
                {isWrongOpt && <div className="dd-orb-ring-wrong" />}
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="dd-bottom">
          <span className="dd-round-info">Round {totalRounds + 1}</span>
          {isBossRound && <span className="dd-boss-tag">👑 BOSS</span>}
          <span className="dd-hint">Drag orb up to answer</span>
        </div>
      </div>
    </div>
  );
}

// =============== STYLES ===============

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .dd-root {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #050816;
  }

  /* ===== BACKGROUND ===== */

  .dd-bg-stars { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }

  .dd-star {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(200,220,255,0.3) 40%, transparent 70%);
    animation: ddTwinkle 4s ease-in-out infinite;
  }

  @keyframes ddTwinkle {
    0%, 100% { opacity: 0.15; transform: scale(0.7); }
    50% { opacity: 1; transform: scale(1.3); }
  }

  .dd-nebula {
    position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
    filter: blur(80px);
  }

  .dd-nebula-1 {
    width: 400px; height: 400px; top: -100px; right: -100px;
    background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.06) 50%, transparent 70%);
    animation: ddNebulaFloat 20s ease-in-out infinite;
  }

  .dd-nebula-2 {
    width: 350px; height: 350px; bottom: -80px; left: -80px;
    background: radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(239,68,68,0.05) 50%, transparent 70%);
    animation: ddNebulaFloat 25s ease-in-out infinite reverse;
  }

  @keyframes ddNebulaFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -20px) scale(1.1); }
    66% { transform: translate(-20px, 30px) scale(0.95); }
  }

  /* ===== PARTICLES ===== */

  .dd-particles { position: absolute; inset: 0; pointer-events: none; z-index: 200; overflow: hidden; }

  .dd-particle { position: absolute; border-radius: 50%; pointer-events: none; }

  .dd-p-spark {
    background: radial-gradient(circle, hsl(var(--p-hue), 100%, 80%) 0%, hsl(var(--p-hue), 90%, 50%) 100%);
    box-shadow: 0 0 8px hsl(var(--p-hue), 100%, 60%);
  }

  .dd-p-confetti {
    background: hsl(var(--p-hue), 90%, 65%);
    border-radius: 2px;
    box-shadow: 0 0 6px hsl(var(--p-hue), 100%, 70%);
  }

  .dd-p-lightning {
    background: #fef08a;
    box-shadow: 0 0 12px #fef08a, 0 0 24px #facc15, 0 0 40px rgba(250,204,21,0.3);
    border-radius: 1px;
  }

  .dd-p-shockwave {
    background: transparent;
    border: 3px solid hsl(var(--p-hue), 80%, 60%);
    box-shadow: 0 0 20px hsl(var(--p-hue), 80%, 60%), inset 0 0 20px hsl(var(--p-hue), 80%, 60%);
    border-radius: 50%;
    transform-origin: center;
  }

  .dd-p-star {
    background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,215,0,0.5) 50%, transparent 100%);
    box-shadow: 0 0 10px rgba(255,215,0,0.5);
  }

  .dd-p-trail {
    background: linear-gradient(90deg, hsl(var(--p-hue), 100%, 70%), transparent);
    border-radius: 2px;
    width: 15px !important; height: 2px !important;
  }

  .dd-float-text {
    position: absolute; transform: translate(-50%, -50%);
    font-weight: 900; pointer-events: none;
    text-shadow: 0 0 15px currentColor, 0 2px 8px rgba(0,0,0,0.5);
    white-space: nowrap;
  }

  /* ===== FLASH OVERLAY ===== */

  .dd-flash-overlay {
    position: absolute; inset: 0; z-index: 150;
    background: radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(200,220,255,0.4) 40%, transparent 70%);
    pointer-events: none;
    animation: ddFlashPulse 0.3s ease-out;
  }

  @keyframes ddFlashPulse {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(1.2); opacity: 0; }
  }

  /* ===== ENERGY BORDER ===== */

  .dd-energy-border {
    position: absolute; inset: 0; z-index: 100; pointer-events: none;
    border: 3px solid var(--e-color);
    box-shadow: inset 0 0 30px color-mix(in srgb, var(--e-color) 30%, transparent),
                0 0 20px color-mix(in srgb, var(--e-color) 20%, transparent);
    opacity: var(--e-intensity);
    animation: ddEnergyPulse 1.5s ease-in-out infinite;
  }

  @keyframes ddEnergyPulse {
    0%, 100% { opacity: calc(var(--e-intensity) * 0.5); }
    50% { opacity: var(--e-intensity); }
  }

  /* ===== SCREEN SHAKE ===== */

  .dd-screen-shake { animation: ddScreenShake 0.5s ease-in-out; }

  @keyframes ddScreenShake {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    10% { transform: translate(-6px, 3px) rotate(-1deg); }
    20% { transform: translate(5px, -4px) rotate(1deg); }
    30% { transform: translate(-4px, 5px) rotate(-0.5deg); }
    40% { transform: translate(3px, -2px) rotate(0.5deg); }
    50% { transform: translate(-3px, 3px); }
    60% { transform: translate(2px, -2px); }
    70% { transform: translate(-1px, 1px); }
  }

  .dd-combo-flash { animation: ddComboFlash 0.6s ease-out; }

  @keyframes ddComboFlash {
    0% { filter: brightness(1.8) saturate(1.5); }
    100% { filter: brightness(1) saturate(1); }
  }

  /* ===== INTRO ===== */

  .dd-intro, .dd-gameover {
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .dd-intro-orbs { position: absolute; inset: 0; pointer-events: none; z-index: 1; }

  .dd-intro-orb {
    position: absolute; width: 70px; height: 70px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    animation: ddIntroOrbFloat 4s ease-in-out infinite;
  }

  @keyframes ddIntroOrbFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-25px) scale(1.08); }
  }

  .dd-intro-content, .dd-go-content {
    position: relative; z-index: 10; text-align: center;
    padding: 1.5rem; max-width: 480px; width: 100%;
  }

  .dd-logo-area {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .dd-logo-flash {
    font-size: 2.5rem;
    animation: ddBoltPulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(251,191,36,0.6));
  }

  .dd-logo-flash-r { animation-delay: 0.3s; }

  @keyframes ddBoltPulse {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-8px) scale(1.2); opacity: 1; }
  }

  .dd-title {
    font-size: clamp(2.5rem, 10vw, 4rem); font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f59e0b, #ef4444, #ec4899, #a855f7);
    background-size: 200% 100%;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ddTitleShimmer 4s ease-in-out infinite;
    letter-spacing: 0.05em;
    text-shadow: none;
  }

  @keyframes ddTitleShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .dd-tagline {
    color: #94a3b8; font-size: 1.1rem; font-weight: 600;
    margin-bottom: 1.5rem; letter-spacing: 0.15em; text-transform: uppercase;
  }

  .dd-how-to-play {
    background: rgba(255,255,255,0.04);
    border: 2px solid rgba(255,255,255,0.08);
    border-radius: 24px; padding: 1.3rem;
    margin-bottom: 1.5rem; backdrop-filter: blur(10px);
  }

  .dd-how-to-play h3 {
    color: white; font-size: 1.1rem; margin-bottom: 1rem; letter-spacing: 0.05em;
  }

  .dd-how-step {
    display: flex; align-items: center; gap: 0.8rem;
    margin-bottom: 0.8rem; text-align: left;
  }

  .dd-how-step:last-child { margin-bottom: 0; }

  .dd-step-icon { font-size: 1.6rem; min-width: 2rem; text-align: center; }

  .dd-how-step p { color: #cbd5e1; font-size: 0.9rem; line-height: 1.3; }
  .dd-how-step strong { color: #fbbf24; }

  .dd-start-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 900; color: white;
    background: linear-gradient(135deg, #f59e0b, #ef4444, #ec4899);
    background-size: 200% 100%;
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(239,68,68,0.4);
    letter-spacing: 0.08em;
    animation: ddBtnShimmer 3s ease-in-out infinite;
  }

  @keyframes ddBtnShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .dd-start-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px rgba(239,68,68,0.5);
  }

  .dd-start-btn:active { transform: translateY(0) scale(0.98); }

  .dd-btn-flash { font-size: 1.3rem; }

  .dd-menu-btn {
    display: block; margin: 1rem auto 0;
    padding: 0.7rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: #64748b;
    background: transparent; border: 2px solid rgba(255,255,255,0.1);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .dd-menu-btn:hover { border-color: rgba(255,255,255,0.3); color: #94a3b8; }

  /* ===== GAME OVER ===== */

  .dd-go-icon { font-size: 5rem; margin-bottom: 0.5rem; animation: ddGoBrain 2s ease-in-out infinite; }

  @keyframes ddGoBrain {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(-5deg); }
    75% { transform: scale(1.1) rotate(5deg); }
  }

  .dd-go-title {
    font-size: clamp(1.8rem, 7vw, 2.5rem); font-weight: 900; color: white;
    margin-bottom: 0.3rem; letter-spacing: 0.05em;
  }

  .dd-go-sub { color: #94a3b8; font-size: 1rem; margin-bottom: 1.5rem; }

  .dd-go-stats {
    display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .dd-go-stat {
    display: flex; flex-direction: column; align-items: center;
    padding: 0.6rem; background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
  }

  .dd-go-stat-big { grid-column: 1 / -1; padding: 1rem; }

  .dd-go-stat-label { font-size: 0.7rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.2rem; }
  .dd-go-stat-val { font-size: 1.6rem; font-weight: 900; color: white; }
  .dd-go-score { font-size: 2.5rem; color: #fbbf24; text-shadow: 0 0 20px rgba(251,191,36,0.4); }
  .dd-go-high { color: #a855f7; }

  /* ===== MAIN GAME ===== */

  .dd-game {
    height: 100%; display: flex; flex-direction: column;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #050816 0%, #0a1628 30%, #0d1f3c 60%, #050816 100%);
  }

  /* ===== HUD ===== */

  .dd-hud {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.5);
    z-index: 50; position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .dd-hud-left, .dd-hud-right { display: flex; align-items: center; gap: 0.6rem; }
  .dd-hud-center { display: flex; align-items: center; }

  .dd-back-btn {
    width: 36px; height: 36px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px; color: white; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease;
    display: flex; align-items: center; justify-content: center;
  }

  .dd-back-btn:hover { background: rgba(255,255,255,0.15); }

  .dd-level-badge {
    padding: 0.35rem 0.8rem;
    background: linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3));
    border: 1px solid rgba(139,92,246,0.3);
    border-radius: 16px; font-weight: 800; color: #c4b5fd;
    font-size: 0.85rem; display: flex; align-items: center; gap: 0.3rem;
  }

  .dd-boss-indicator { animation: ddBoltPulse 0.8s ease-in-out infinite; }

  .dd-lives-row { display: flex; gap: 0.2rem; }

  .dd-heart { font-size: 1.3rem; transition: all 0.3s ease; }
  .dd-heart-on { animation: ddHeartBeat 2s ease-in-out infinite; }
  .dd-heart-off { opacity: 0.25; filter: grayscale(1); transform: scale(0.75); }

  @keyframes ddHeartBeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .dd-score-display {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.35rem 0.8rem;
    background: rgba(251,191,36,0.15); border: 1px solid rgba(251,191,36,0.2);
    border-radius: 16px; font-weight: 800; color: #fbbf24; font-size: 0.95rem;
  }

  .dd-score-star { font-size: 1rem; }
  .dd-score-num { min-width: 2rem; text-align: right; }

  /* ===== STREAK BAR ===== */

  .dd-streak-bar {
    position: absolute; top: 52px; left: 50%; transform: translateX(-50%);
    z-index: 60; display: flex; align-items: center; gap: 0.4rem;
    padding: 0.25rem 1rem;
    background: rgba(0,0,0,0.6);
    border: 2px solid var(--streak-color);
    border-radius: 20px;
    box-shadow: 0 0 15px color-mix(in srgb, var(--streak-color) 40%, transparent);
    animation: ddStreakPulse 1s ease-in-out infinite;
  }

  @keyframes ddStreakPulse {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.04); }
  }

  .dd-streak-bolt { animation: ddBoltPulse 0.6s ease-in-out infinite; font-size: 1rem; }
  .dd-streak-num { font-weight: 900; color: var(--streak-color); font-size: 1rem; }
  .dd-streak-label { font-size: 0.65rem; font-weight: 700; color: var(--streak-color); letter-spacing: 0.1em; text-transform: uppercase; }

  .dd-mult-badge {
    padding: 0.1rem 0.5rem; background: rgba(251,191,36,0.2);
    border: 1px solid rgba(251,191,36,0.3); border-radius: 10px;
    font-size: 0.65rem; font-weight: 800; color: #fbbf24;
  }

  /* ===== STREAK ANNOUNCEMENT ===== */

  .dd-streak-announce {
    position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%);
    z-index: 300; font-size: clamp(1.8rem, 6vw, 3rem); font-weight: 900;
    text-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 4px 8px rgba(0,0,0,0.5);
    animation: ddStreakAnnounce 2s ease-out forwards;
    white-space: nowrap; letter-spacing: 0.08em;
  }

  @keyframes ddStreakAnnounce {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
    15% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    30% { transform: translate(-50%, -50%) scale(1); }
    80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -60%) scale(1.1); opacity: 0; }
  }

  /* ===== BOSS INTRO ===== */

  .dd-boss-intro {
    position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);
    z-index: 250; text-align: center;
    animation: ddBossIntro 2s ease-out;
  }

  @keyframes ddBossIntro {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
    40% { transform: translate(-50%, -50%) scale(1); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  .dd-boss-crown { font-size: 4rem; animation: ddBoltPulse 1s ease-in-out infinite; margin-bottom: 0.5rem; }

  .dd-boss-title {
    font-size: 2.2rem; font-weight: 900; color: #fbbf24;
    text-shadow: 0 0 20px rgba(251,191,36,0.5); letter-spacing: 0.1em;
    margin-bottom: 0.3rem;
  }

  .dd-boss-sub { color: #94a3b8; font-size: 1rem; }

  /* ===== PLAY AREA ===== */

  .dd-play-area {
    flex: 1; position: relative; overflow: hidden;
    touch-action: none; z-index: 10;
  }

  /* ===== TARGET ZONE ===== */

  .dd-target-zone {
    position: absolute; top: 5%; left: 50%; transform: translateX(-50%);
    width: 180px; height: 60px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    z-index: 20;
  }

  .dd-tz-ring {
    position: absolute; inset: -5px;
    border: 2px dashed rgba(255,255,255,0.12);
    border-radius: 20px;
    animation: ddTzSpin 12s linear infinite;
  }

  .dd-tz-ring-2 {
    inset: -12px;
    border-color: rgba(255,255,255,0.06);
    animation-direction: reverse;
    animation-duration: 18s;
  }

  @keyframes ddTzSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .dd-tz-active .dd-tz-ring {
    border-color: rgba(74,222,128,0.5);
    box-shadow: 0 0 20px rgba(74,222,128,0.2);
  }

  .dd-tz-pulse .dd-tz-ring {
    animation: ddTzPulseRing 0.5s ease-out;
  }

  @keyframes ddTzPulseRing {
    0% { transform: scale(1); border-color: rgba(74,222,128,0.8); }
    100% { transform: scale(1.5); border-color: transparent; }
  }

  .dd-tz-label {
    font-size: 0.8rem; font-weight: 700; color: rgba(255,255,255,0.3);
    letter-spacing: 0.15em; text-transform: uppercase;
  }

  .dd-tz-active .dd-tz-label { color: #4ade80; }

  .dd-boss-progress {
    display: flex; gap: 0.4rem; margin-top: 0.3rem;
  }

  .dd-boss-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.3s ease;
  }

  .dd-boss-dot-done { background: #4ade80; border-color: #4ade80; box-shadow: 0 0 8px rgba(74,222,128,0.5); }
  .dd-boss-dot-current { background: #fbbf24; border-color: #fbbf24; box-shadow: 0 0 8px rgba(251,191,36,0.5); animation: ddBossDotPulse 0.8s ease-in-out infinite; }

  @keyframes ddBossDotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
  }

  /* ===== DOT DISPLAY ===== */

  .dd-dot-area {
    position: absolute;
    top: 15%; left: 10%; width: 80%; height: 50%;
    z-index: 15;
  }

  .dd-dot {
    position: absolute; width: 36px; height: 36px;
    transform: translate(-50%, -50%);
    display: flex; align-items: center; justify-content: center;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .dd-dot-show { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  .dd-dot-hide { opacity: 0; transform: translate(-50%, -50%) scale(0.2); }

  .dd-dot-show .dd-dot-core {
    animation: ddDotAppear 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  @keyframes ddDotAppear {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
  }

  .dd-dot-glow {
    position: absolute; inset: -12px; border-radius: 50%;
    background: radial-gradient(circle,
      hsla(var(--dot-hue), 90%, 65%, 0.5) 0%,
      hsla(var(--dot-hue), 80%, 50%, 0.15) 50%,
      transparent 70%);
    animation: ddDotGlow 1.5s ease-in-out infinite;
  }

  @keyframes ddDotGlow {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  .dd-dot-core {
    width: 100%; height: 100%; border-radius: 50%;
    background: radial-gradient(circle at 35% 30%,
      hsla(var(--dot-hue), 90%, 85%, 1) 0%,
      hsla(var(--dot-hue), 85%, 60%, 1) 40%,
      hsla(var(--dot-hue), 80%, 45%, 1) 100%);
    box-shadow:
      0 0 15px hsla(var(--dot-hue), 90%, 60%, 0.6),
      0 0 30px hsla(var(--dot-hue), 80%, 50%, 0.3),
      inset 0 -4px 8px hsla(var(--dot-hue), 90%, 30%, 0.3),
      inset 0 2px 4px rgba(255,255,255,0.4);
  }

  .dd-dot-reveal .dd-dot-core {
    animation: ddDotReveal 0.3s ease both;
  }

  @keyframes ddDotReveal {
    0% { transform: scale(0.5); opacity: 0.3; }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); opacity: 1; }
  }

  .dd-dot-count {
    position: absolute; font-size: 0.75rem; font-weight: 900;
    color: white; text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    z-index: 5;
  }

  /* ===== TIMER ===== */

  .dd-timer-wrap {
    position: absolute; top: 8%; right: 8%;
    width: 52px; height: 52px; z-index: 30;
  }

  .dd-timer-svg { width: 100%; height: 100%; }

  .dd-timer-icon {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem;
  }

  /* ===== PHASE TEXT ===== */

  .dd-phase-text {
    position: absolute; bottom: 8%; left: 50%; transform: translateX(-50%);
    z-index: 30; text-align: center;
    font-size: 1.1rem; font-weight: 700;
  }

  .dd-pt-flash {
    color: #fbbf24; animation: ddFlashText 0.6s ease-in-out infinite;
    font-size: 1.3rem;
  }

  @keyframes ddFlashText {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
  }

  .dd-pt-fade { color: #94a3b8; animation: ddFadeIn 0.3s ease; }

  .dd-pt-answer {
    color: #c4b5fd;
    animation: ddAnswerBounce 1.5s ease-in-out infinite;
  }

  @keyframes ddAnswerBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .dd-pt-correct {
    color: #4ade80; font-size: 1.4rem;
    animation: ddCorrectPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    text-shadow: 0 0 15px rgba(74,222,128,0.5);
  }

  @keyframes ddCorrectPop {
    0% { transform: scale(0.3); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .dd-pt-wrong {
    color: #ef4444;
    animation: ddFadeIn 0.3s ease;
  }

  @keyframes ddFadeIn {
    0% { opacity: 0; transform: translateY(8px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* ===== POWER-UPS ===== */

  .dd-powerup {
    position: absolute; width: 44px; height: 44px;
    transform: translate(-50%, -50%); z-index: 25; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    animation: ddPuFloat 2s ease-in-out infinite;
  }

  @keyframes ddPuFloat {
    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
    50% { transform: translate(-50%, -50%) translateY(-8px); }
  }

  .dd-pu-glow {
    position: absolute; inset: -10px; border-radius: 50%;
    background: radial-gradient(circle, color-mix(in srgb, var(--pu-color) 30%, transparent) 0%, transparent 70%);
    animation: ddPuGlowPulse 1.5s ease-in-out infinite;
  }

  @keyframes ddPuGlowPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.3); opacity: 1; }
  }

  .dd-pu-icon {
    font-size: 1.6rem; z-index: 2;
    filter: drop-shadow(0 0 6px var(--pu-color));
  }

  .dd-active-pus {
    position: absolute; top: 8%; left: 8%; z-index: 30;
    display: flex; flex-direction: column; gap: 0.3rem;
  }

  .dd-apu {
    width: 32px; height: 32px; border-radius: 10px;
    border: 2px solid; display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem; font-weight: 800; color: white;
    animation: ddApuPulse 2s ease-in-out infinite;
  }

  @keyframes ddApuPulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }

  /* ===== DRAG GHOST ===== */

  .dd-drag-ghost {
    position: absolute; width: 76px; height: 76px;
    border-radius: 50%; transform: translate(-50%, -50%);
    display: flex; align-items: center; justify-content: center;
    z-index: 500; pointer-events: none;
    animation: ddDragPulse 0.5s ease-in-out infinite;
    transition: none;
  }

  @keyframes ddDragPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.06); }
  }

  .dd-drag-num {
    font-size: 2rem; font-weight: 900; color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5); z-index: 2;
  }

  .dd-drag-trail {
    position: absolute; width: 3px; transform: translateX(-50%);
    background: linear-gradient(180deg, rgba(255,255,255,0.3), transparent);
    pointer-events: none; z-index: 400; border-radius: 2px;
  }

  /* ===== NUMBER ORBS ROW ===== */

  .dd-orbs-row {
    display: flex; justify-content: center; gap: 0.6rem;
    padding: 0.8rem 1rem; flex-wrap: wrap;
    background: rgba(0,0,0,0.6);
    border-top: 1px solid rgba(255,255,255,0.05);
    z-index: 50; position: relative;
    transition: all 0.3s ease;
  }

  .dd-orbs-show { opacity: 1; transform: translateY(0); }
  .dd-orbs-hide { opacity: 0; transform: translateY(20px); pointer-events: none; }

  .dd-orb {
    width: 64px; height: 64px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: grab; position: relative; touch-action: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .dd-orb:hover {
    transform: translateY(-4px) scale(1.08);
  }

  .dd-orb:active { cursor: grabbing; transform: scale(0.95); }

  .dd-orb-shine {
    position: absolute; top: 12%; left: 22%; width: 35%; height: 25%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }

  .dd-orb-inner-glow {
    position: absolute; inset: 3px; border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(255,255,255,0.15) 0%, transparent 60%);
    pointer-events: none;
  }

  .dd-orb-num {
    font-size: 1.7rem; font-weight: 900; color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,0.4); z-index: 2;
    pointer-events: none;
  }

  .dd-orb-selected { transform: scale(0.9); opacity: 0.6; pointer-events: none; }

  .dd-orb-correct {
    transform: scale(1.15) !important; opacity: 1 !important;
    box-shadow: 0 0 30px rgba(74,222,128,0.7), 0 0 60px rgba(74,222,128,0.3) !important;
    animation: ddOrbCorrect 0.5s ease;
  }

  @keyframes ddOrbCorrect {
    0% { transform: scale(1); }
    40% { transform: scale(1.25); }
    100% { transform: scale(1.15); }
  }

  .dd-orb-ring-correct {
    position: absolute; inset: -6px; border: 3px solid #4ade80; border-radius: 50%;
    animation: ddOrbRingPulse 0.8s ease-in-out infinite;
  }

  @keyframes ddOrbRingPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.15); opacity: 0.5; }
  }

  .dd-orb-wrong {
    box-shadow: 0 0 25px rgba(239,68,68,0.6), 0 0 50px rgba(239,68,68,0.2) !important;
    animation: ddOrbWrong 0.4s ease;
  }

  @keyframes ddOrbWrong {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  .dd-orb-ring-wrong {
    position: absolute; inset: -6px; border: 3px solid #ef4444; border-radius: 50%;
  }

  .dd-orb-dim { opacity: 0.2; transform: scale(0.85); pointer-events: none; }

  /* ===== BOTTOM BAR ===== */

  .dd-bottom {
    padding: 0.5rem 1rem;
    background: rgba(0,0,0,0.5);
    display: flex; justify-content: center; align-items: center; gap: 1.5rem;
    z-index: 50; position: relative;
    border-top: 1px solid rgba(255,255,255,0.03);
  }

  .dd-round-info { font-size: 0.8rem; color: #475569; font-weight: 600; }
  .dd-boss-tag { font-size: 0.8rem; color: #fbbf24; font-weight: 700; }
  .dd-hint { font-size: 0.75rem; color: #334155; font-weight: 600; }

  /* ===== RESPONSIVE ===== */

  @media (max-width: 600px) {
    .dd-orb { width: 54px; height: 54px; }
    .dd-orb-num { font-size: 1.4rem; }
    .dd-orbs-row { gap: 0.4rem; padding: 0.6rem; }
    .dd-drag-ghost { width: 64px; height: 64px; }
    .dd-drag-num { font-size: 1.6rem; }
    .dd-dot { width: 30px; height: 30px; }
    .dd-dot-glow { inset: -8px; }
    .dd-hud-center { display: none; }
    .dd-streak-bar { top: 48px; padding: 0.2rem 0.7rem; }
    .dd-streak-num { font-size: 0.85rem; }
    .dd-streak-label { font-size: 0.55rem; }
    .dd-timer-wrap { width: 42px; height: 42px; }
    .dd-timer-icon { font-size: 1rem; }
    .dd-phase-text { font-size: 0.95rem; }
    .dd-target-zone { width: 140px; height: 48px; }
    .dd-tz-label { font-size: 0.7rem; }
  }

  @media (max-width: 400px) {
    .dd-orb { width: 46px; height: 46px; }
    .dd-orb-num { font-size: 1.2rem; }
    .dd-dot { width: 24px; height: 24px; }
    .dd-dot-glow { inset: -6px; }
    .dd-drag-ghost { width: 54px; height: 54px; }
    .dd-drag-num { font-size: 1.3rem; }
  }

  @media (min-height: 800px) {
    .dd-dot-area { height: 55%; }
    .dd-dot { width: 40px; height: 40px; }
    .dd-dot-glow { inset: -14px; }
  }
`;
