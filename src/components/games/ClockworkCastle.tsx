"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ══════════════════════════════════════════════════════════════════
// CLOCKWORK CASTLE - Time-of-Day Tower Management Game
// You're the castle CLOCKKEEPER! Drag activity cards to the correct
// time slot on the clock wheel. Watch the castle transform between
// morning, afternoon, evening, and night. Funny chaos on mistakes!
// ══════════════════════════════════════════════════════════════════

type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night';
type GameScreen = 'intro' | 'playing' | 'dayComplete' | 'gameComplete';

interface Activity {
  id: number;
  emoji: string;
  label: string;
  correctPeriod: TimePeriod;
  character: string;
  funnyFail: string;
}

interface ActivityCard extends Activity {
  x: number;
  y: number;
  sourceX: number;
  sourceY: number;
  placed: boolean;
  animOffset: number;
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
  type: 'gear' | 'sparkle' | 'firework' | 'firefly' | 'star' | 'smoke' | 'confetti';
}

interface CastleCharacter {
  id: string;
  emoji: string;
  name: string;
  x: number;
  y: number;
  mood: 'idle' | 'happy' | 'confused' | 'sleeping';
  bounceOffset: number;
}

interface DayResult {
  day: number;
  correct: number;
  total: number;
  stars: number;
}

// ── Constants ──────────────────────────────────────────────────

const PERIODS: TimePeriod[] = ['morning', 'afternoon', 'evening', 'night'];

const PERIOD_CONFIG: Record<TimePeriod, {
  label: string; emoji: string; hour: number;
  skyTop: string; skyMid: string; skyBot: string;
  castleBase: string; castleAccent: string; castleRoof: string;
  ambient: string; windowGlow: string;
}> = {
  morning: {
    label: 'Morning', emoji: '\u2600\uFE0F', hour: 8,
    skyTop: '#4A90D9', skyMid: '#87CEEB', skyBot: '#FFE4B5',
    castleBase: '#C4A46C', castleAccent: '#D4B87C', castleRoof: '#8B4513',
    ambient: 'rgba(255,220,100,0.15)', windowGlow: 'rgba(255,255,200,0.3)',
  },
  afternoon: {
    label: 'Afternoon', emoji: '\u2600\uFE0F', hour: 14,
    skyTop: '#1E90FF', skyMid: '#4FC3F7', skyBot: '#B3E5FC',
    castleBase: '#D4B87C', castleAccent: '#E4C88C', castleRoof: '#A0522D',
    ambient: 'rgba(255,255,255,0.08)', windowGlow: 'rgba(200,200,255,0.2)',
  },
  evening: {
    label: 'Evening', emoji: '\uD83C\uDF07', hour: 18,
    skyTop: '#2D1B69', skyMid: '#C0392B', skyBot: '#F39C12',
    castleBase: '#8B6D4A', castleAccent: '#A07A52', castleRoof: '#5C3317',
    ambient: 'rgba(255,120,50,0.2)', windowGlow: 'rgba(255,180,50,0.7)',
  },
  night: {
    label: 'Night', emoji: '\uD83C\uDF19', hour: 21,
    skyTop: '#0B0B2B', skyMid: '#121244', skyBot: '#1A1A5E',
    castleBase: '#1E1E48', castleAccent: '#2A2A58', castleRoof: '#0D0D2A',
    ambient: 'rgba(100,100,255,0.08)', windowGlow: 'rgba(255,215,0,0.8)',
  },
};

const CHARACTERS: CastleCharacter[] = [
  { id: 'knight', emoji: '\u2694\uFE0F', name: 'Sir Clank', x: 22, y: 72, mood: 'idle', bounceOffset: 0 },
  { id: 'princess', emoji: '\uD83D\uDC51', name: 'Princess Luna', x: 50, y: 68, mood: 'idle', bounceOffset: 1.2 },
  { id: 'chef', emoji: '\uD83D\uDC68\u200D\uD83C\uDF73', name: 'Chef Pepper', x: 35, y: 76, mood: 'idle', bounceOffset: 2.4 },
  { id: 'wizard', emoji: '\uD83E\uDDD9', name: 'Wizard Tick', x: 65, y: 72, mood: 'idle', bounceOffset: 3.6 },
  { id: 'dragon', emoji: '\uD83D\uDC09', name: 'Ember', x: 78, y: 76, mood: 'idle', bounceOffset: 0.8 },
];

// Activity pools per period with character and funny fail text
const ACTIVITY_POOL: Activity[] = [
  // Morning
  { id: 1, emoji: '\uD83E\uDEA5', label: 'Brush Teeth', correctPeriod: 'morning', character: 'knight', funnyFail: 'Sir Clank brushes his helmet instead!' },
  { id: 2, emoji: '\uD83E\uDD63', label: 'Eat Breakfast', correctPeriod: 'morning', character: 'chef', funnyFail: 'Chef Pepper serves midnight toast!' },
  { id: 3, emoji: '\uD83C\uDF1E', label: 'Open Curtains', correctPeriod: 'morning', character: 'princess', funnyFail: 'Luna opens curtains to the moon!' },
  { id: 4, emoji: '\uD83D\uDC13', label: 'Feed Chickens', correctPeriod: 'morning', character: 'wizard', funnyFail: 'The chickens are fast asleep!' },
  { id: 5, emoji: '\uD83C\uDF3B', label: 'Water Flowers', correctPeriod: 'morning', character: 'dragon', funnyFail: 'Ember accidentally burns the flowers!' },
  // Afternoon
  { id: 6, emoji: '\u2694\uFE0F', label: 'Sword Training', correctPeriod: 'afternoon', character: 'knight', funnyFail: 'Sir Clank fights his own shadow at night!' },
  { id: 7, emoji: '\u26BD', label: 'Play in Courtyard', correctPeriod: 'afternoon', character: 'princess', funnyFail: 'Too dark to find the ball!' },
  { id: 8, emoji: '\uD83C\uDF72', label: 'Cook Lunch', correctPeriod: 'afternoon', character: 'chef', funnyFail: 'Chef Pepper burns the midnight soup!' },
  { id: 9, emoji: '\uD83D\uDCDA', label: 'Study Spells', correctPeriod: 'afternoon', character: 'wizard', funnyFail: 'Wizard falls asleep on the book!' },
  { id: 10, emoji: '\uD83D\uDC09', label: 'Dragon Flying', correctPeriod: 'afternoon', character: 'dragon', funnyFail: 'Ember crashes into a dark tower!' },
  // Evening
  { id: 11, emoji: '\uD83C\uDF5D', label: 'Feast Dinner', correctPeriod: 'evening', character: 'chef', funnyFail: 'The kitchen is empty at dawn!' },
  { id: 12, emoji: '\uD83C\uDFB6', label: 'Castle Concert', correctPeriod: 'evening', character: 'princess', funnyFail: 'Everyone is busy working!' },
  { id: 13, emoji: '\uD83D\uDD6F\uFE0F', label: 'Light Torches', correctPeriod: 'evening', character: 'knight', funnyFail: 'The sun is too bright for torches!' },
  { id: 14, emoji: '\uD83E\uDDEA', label: 'Mix Potions', correctPeriod: 'evening', character: 'wizard', funnyFail: 'The potions explode in the daylight!' },
  { id: 15, emoji: '\uD83D\uDD25', label: 'Warm by Fire', correctPeriod: 'evening', character: 'dragon', funnyFail: 'Ember is already too hot in the sun!' },
  // Night
  { id: 16, emoji: '\uD83D\uDE34', label: 'Go to Sleep', correctPeriod: 'night', character: 'knight', funnyFail: 'Sir Clank sleepwalks to training!' },
  { id: 17, emoji: '\uD83C\uDF1F', label: 'Count Stars', correctPeriod: 'night', character: 'princess', funnyFail: 'No stars visible in daylight!' },
  { id: 18, emoji: '\uD83D\uDCD6', label: 'Bedtime Story', correctPeriod: 'night', character: 'wizard', funnyFail: 'Nobody is in bed yet!' },
  { id: 19, emoji: '\uD83C\uDF19', label: 'Moon Gazing', correctPeriod: 'night', character: 'dragon', funnyFail: 'Ember stares at the empty sky!' },
  { id: 20, emoji: '\uD83E\uDDF8', label: 'Tuck in Teddy', correctPeriod: 'night', character: 'princess', funnyFail: 'Teddy wants to play, not sleep!' },
];

let particleId = 0;
const nextParticleId = () => ++particleId;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

// ── Level generation ──────────────────────────────────────────

function generateDay(day: number): { activities: Activity[]; periods: TimePeriod[] } {
  if (day <= 2) {
    // Easy: 2 periods, 4 activities
    const periods: TimePeriod[] = day === 1 ? ['morning', 'night'] : ['morning', 'evening'];
    const pool = ACTIVITY_POOL.filter(a => periods.includes(a.correctPeriod));
    return { activities: shuffle(pickRandom(pool, 4)), periods };
  }
  if (day <= 5) {
    // Medium: 3 periods, 4-5 activities
    const periods: TimePeriod[] = day <= 3
      ? ['morning', 'afternoon', 'night']
      : ['morning', 'afternoon', 'evening'];
    const count = day <= 3 ? 4 : 5;
    const pool = ACTIVITY_POOL.filter(a => periods.includes(a.correctPeriod));
    return { activities: shuffle(pickRandom(pool, count)), periods };
  }
  // Hard: all 4 periods, 5-6 activities
  const count = day <= 7 ? 5 : 6;
  return { activities: shuffle(pickRandom(ACTIVITY_POOL, count)), periods: PERIODS };
}

// ── Component ──────────────────────────────────────────────────

interface ClockworkCastleProps {
  onExit?: () => void;
}

export default function ClockworkCastle({ onExit }: ClockworkCastleProps = {}) {
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [day, setDay] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState<TimePeriod>('morning');
  const [targetPeriod, setTargetPeriod] = useState<TimePeriod>('morning');
  const [periodTransition, setPeriodTransition] = useState(0); // 0-1 lerp
  const [activities, setActivities] = useState<ActivityCard[]>([]);
  const [availablePeriods, setAvailablePeriods] = useState<TimePeriod[]>(['morning', 'night']);
  const [clockAngle, setClockAngle] = useState(0);
  const [clockTargetAngle, setClockTargetAngle] = useState(240); // 8 o'clock
  const [particles, setParticles] = useState<Particle[]>([]);
  const [characters, setCharacters] = useState<CastleCharacter[]>(CHARACTERS.map(c => ({ ...c })));
  const [draggedCard, setDraggedCard] = useState<{ id: number; offsetX: number; offsetY: number } | null>(null);
  const [highlightedSlot, setHighlightedSlot] = useState<TimePeriod | null>(null);
  const [feedbackText, setFeedbackText] = useState<{ text: string; type: 'correct' | 'wrong' | 'perfect' | 'info'; id: number } | null>(null);
  const [funnyFailText, setFunnyFailText] = useState<string | null>(null);
  const [dayResults, setDayResults] = useState<DayResult[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalActivities, setTotalActivities] = useState(0);
  const [shakeIntensity, setShakeIntensity] = useState(0);
  const [introPhase, setIntroPhase] = useState(0);
  const [perfectDay, setPerfectDay] = useState(false);
  const [showClockPulse, setShowClockPulse] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const slotRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // ── Animation loop ─────────────────────────────────────────

  useEffect(() => {
    let lastTs = 0;
    const animate = (ts: number) => {
      const dt = lastTs ? Math.min((ts - lastTs) / 16.667, 3) : 1;
      lastTs = ts;
      timeRef.current = ts / 1000;

      // Smooth clock rotation
      setClockAngle(prev => {
        const diff = clockTargetAngle - prev;
        if (Math.abs(diff) < 0.3) return clockTargetAngle;
        return prev + diff * 0.06 * dt;
      });

      // Period transition
      setPeriodTransition(prev => {
        if (prev < 1) return Math.min(1, prev + 0.02 * dt);
        return prev;
      });

      // Update particles
      setParticles(prev => prev
        .map(p => ({
          ...p,
          x: p.x + p.vx * dt,
          y: p.y + p.vy * dt,
          vy: p.type === 'smoke' ? p.vy - 0.015 * dt : p.type === 'firefly' ? p.vy + Math.sin(ts * 0.003 + p.id) * 0.03 : p.vy + 0.02 * dt,
          vx: p.type === 'firefly' ? p.vx + Math.cos(ts * 0.002 + p.id * 2) * 0.02 : p.vx * 0.99,
          life: p.life - dt,
        }))
        .filter(p => p.life > 0)
      );

      // Decay shake
      setShakeIntensity(prev => prev > 0.1 ? prev * 0.92 : 0);

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [clockTargetAngle]);

  // ── Firefly spawner for night ─────────────────────────────

  useEffect(() => {
    if (screen !== 'playing' || currentPeriod !== 'night') return;
    const interval = setInterval(() => {
      setParticles(prev => [...prev, {
        id: nextParticleId(),
        x: 10 + Math.random() * 80,
        y: 20 + Math.random() * 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        life: 80 + Math.random() * 60,
        maxLife: 140,
        size: 2 + Math.random() * 2,
        hue: 55 + Math.random() * 10,
        type: 'firefly',
      }]);
    }, 800);
    return () => clearInterval(interval);
  }, [screen, currentPeriod]);

  // ── Chimney smoke ─────────────────────────────────────────

  useEffect(() => {
    if (screen !== 'playing') return;
    const interval = setInterval(() => {
      const count = currentPeriod === 'evening' || currentPeriod === 'night' ? 4 : 2;
      setParticles(prev => [
        ...prev,
        ...Array.from({ length: count }, () => ({
          id: nextParticleId(),
          x: 70 + (Math.random() - 0.5) * 2,
          y: 22 + Math.random() * 3,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -0.15 - Math.random() * 0.3,
          life: 50 + Math.random() * 40,
          maxLife: 90,
          size: 3 + Math.random() * 4,
          hue: 0,
          type: 'smoke' as const,
        })),
      ]);
    }, 1500);
    return () => clearInterval(interval);
  }, [screen, currentPeriod]);

  // ── Intro phases ──────────────────────────────────────────

  useEffect(() => {
    if (screen !== 'intro') return;
    const t1 = setTimeout(() => setIntroPhase(1), 200);
    const t2 = setTimeout(() => setIntroPhase(2), 700);
    const t3 = setTimeout(() => setIntroPhase(3), 1200);
    const t4 = setTimeout(() => setIntroPhase(4), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [screen]);

  // ── Spawn particles ───────────────────────────────────────

  const spawnGears = useCallback((cx: number, cy: number, count = 8) => {
    setParticles(prev => [...prev, ...Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;
      return {
        id: nextParticleId(), x: cx, y: cy,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: 30 + Math.random() * 20, maxLife: 50,
        size: 3 + Math.random() * 4, hue: 35 + Math.random() * 15, type: 'gear' as const,
      };
    })]);
  }, []);

  const spawnSparkles = useCallback((cx: number, cy: number, count = 15) => {
    setParticles(prev => [...prev, ...Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 3;
      return {
        id: nextParticleId(), x: cx + (Math.random() - 0.5) * 30, y: cy + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 1,
        life: 25 + Math.random() * 25, maxLife: 50,
        size: 2 + Math.random() * 3, hue: 45 + Math.random() * 20, type: 'sparkle' as const,
      };
    })]);
  }, []);

  const spawnFireworks = useCallback((cx: number, cy: number) => {
    const colors = [0, 30, 50, 120, 200, 280, 340];
    for (let burst = 0; burst < 3; burst++) {
      const bx = cx + (Math.random() - 0.5) * 40;
      const by = cy + (Math.random() - 0.5) * 20;
      const hue = colors[Math.floor(Math.random() * colors.length)];
      setTimeout(() => {
        setParticles(prev => [...prev, ...Array.from({ length: 20 }, (_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const speed = 1.5 + Math.random() * 2.5;
          return {
            id: nextParticleId(), x: bx, y: by,
            vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
            life: 35 + Math.random() * 25, maxLife: 60,
            size: 2 + Math.random() * 3, hue: hue + Math.random() * 30, type: 'firework' as const,
          };
        })]);
      }, burst * 200);
    }
  }, []);

  const spawnConfetti = useCallback((cx: number, cy: number) => {
    setParticles(prev => [...prev, ...Array.from({ length: 30 }, () => ({
      id: nextParticleId(),
      x: cx + (Math.random() - 0.5) * 60, y: cy,
      vx: (Math.random() - 0.5) * 4, vy: -2 - Math.random() * 3,
      life: 60 + Math.random() * 40, maxLife: 100,
      size: 3 + Math.random() * 4, hue: Math.random() * 360, type: 'confetti' as const,
    }))]);
  }, []);

  // ── Day init ──────────────────────────────────────────────

  const initDay = useCallback((dayNum: number) => {
    const { activities: acts, periods } = generateDay(dayNum);
    setAvailablePeriods(periods);
    setCorrectCount(0);
    setTotalActivities(acts.length);
    setPerfectDay(false);
    setFeedbackText(null);
    setFunnyFailText(null);
    setHighlightedSlot(null);
    setDraggedCard(null);
    setCombo(0);
    setParticles([]);
    setShakeIntensity(0);
    setShowClockPulse(false);

    // Create activity cards positioned at bottom
    const cards: ActivityCard[] = acts.map((a, i) => ({
      ...a,
      x: 8 + (i % 3) * 32 + Math.random() * 5,
      y: 82 + Math.floor(i / 3) * 9,
      sourceX: 8 + (i % 3) * 32,
      sourceY: 82 + Math.floor(i / 3) * 9,
      placed: false,
      animOffset: i * 0.15,
    }));
    setActivities(cards);

    // Reset characters to idle
    setCharacters(CHARACTERS.map(c => ({ ...c, mood: 'idle' })));

    // Set initial time
    const firstPeriod = periods[0];
    setCurrentPeriod(firstPeriod);
    setTargetPeriod(firstPeriod);
    const angle = PERIOD_CONFIG[firstPeriod].hour * 30;
    setClockAngle(angle);
    setClockTargetAngle(angle);
    setPeriodTransition(1);
  }, []);

  // ── Game start ────────────────────────────────────────────

  const startGame = () => {
    setScreen('playing');
    setDay(1);
    setScore(0);
    setMaxCombo(0);
    setDayResults([]);
    initDay(1);
  };

  const nextDay = () => {
    if (day >= 10) {
      setScreen('gameComplete');
      return;
    }
    const newDay = day + 1;
    setDay(newDay);
    setScreen('playing');
    initDay(newDay);
  };

  // ── Get slot position (percentages) ───────────────────────

  const getSlotCenter = useCallback((period: TimePeriod): { x: number; y: number } => {
    const el = slotRefs.current[period];
    const container = containerRef.current;
    if (el && container) {
      const cr = container.getBoundingClientRect();
      const sr = el.getBoundingClientRect();
      return {
        x: ((sr.left + sr.width / 2 - cr.left) / cr.width) * 100,
        y: ((sr.top + sr.height / 2 - cr.top) / cr.height) * 100,
      };
    }
    // Fallback positions around the clock
    const idx = availablePeriods.indexOf(period);
    const angle = (idx / availablePeriods.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + Math.cos(angle) * 20, y: 38 + Math.sin(angle) * 15 };
  }, [availablePeriods]);

  // ── Check which slot a card is over ───────────────────────

  const getSlotAtPosition = useCallback((px: number, py: number): TimePeriod | null => {
    const container = containerRef.current;
    if (!container) return null;
    const cr = container.getBoundingClientRect();
    const absX = cr.left + (px / 100) * cr.width;
    const absY = cr.top + (py / 100) * cr.height;

    for (const period of availablePeriods) {
      const el = slotRefs.current[period];
      if (!el) continue;
      const sr = el.getBoundingClientRect();
      // Generous hit area
      const pad = 20;
      if (absX >= sr.left - pad && absX <= sr.right + pad && absY >= sr.top - pad && absY <= sr.bottom + pad) {
        return period;
      }
    }
    return null;
  }, [availablePeriods]);

  // ── Handle correct placement ──────────────────────────────

  const handleCorrect = useCallback((card: ActivityCard, period: TimePeriod) => {
    const newCombo = combo + 1;
    const points = 100 + newCombo * 25;
    setScore(prev => prev + points);
    setCombo(newCombo);
    setMaxCombo(prev => Math.max(prev, newCombo));

    // Update character mood
    setCharacters(prev => prev.map(c =>
      c.id === card.character ? { ...c, mood: 'happy' as const } : c
    ));
    setTimeout(() => {
      setCharacters(prev => prev.map(c =>
        c.id === card.character ? { ...c, mood: 'idle' as const } : c
      ));
    }, 1500);

    // Feedback
    setFeedbackText({ text: newCombo > 1 ? `+${points} COMBO x${newCombo}!` : `+${points} Correct!`, type: newCombo >= 3 ? 'perfect' : 'correct', id: Date.now() });
    setTimeout(() => setFeedbackText(null), 1200);

    // Clock tick effect
    setShowClockPulse(true);
    setTimeout(() => setShowClockPulse(false), 400);

    // Particles at the slot
    const slotPos = getSlotCenter(period);
    spawnSparkles(slotPos.x, slotPos.y, 12);
    spawnGears(50, 28, 6);

    // Mark card as placed
    const newCorrect = correctCount + 1;
    setCorrectCount(newCorrect);
    setActivities(prev => prev.map(a =>
      a.id === card.id ? { ...a, placed: true } : a
    ));

    // Advance time period to the next one that has remaining activities
    const remaining = activities.filter(a => a.id !== card.id && !a.placed);
    if (remaining.length > 0) {
      // Find the period of the next activity (in chronological order)
      const periodOrder = ['morning', 'afternoon', 'evening', 'night'] as TimePeriod[];
      const nextPeriods = remaining.map(a => a.correctPeriod);
      const nextPeriod = periodOrder.find(p => nextPeriods.includes(p)) || currentPeriod;
      if (nextPeriod !== currentPeriod) {
        setTargetPeriod(nextPeriod);
        setCurrentPeriod(nextPeriod);
        setClockTargetAngle(PERIOD_CONFIG[nextPeriod].hour * 30);
        setPeriodTransition(0);
      }
    }

    // Check day complete
    if (newCorrect >= totalActivities) {
      const allCorrectNoMistakes = newCombo >= totalActivities;
      setPerfectDay(allCorrectNoMistakes);
      setTimeout(() => {
        spawnFireworks(50, 30);
        spawnConfetti(50, 20);
        const stars = allCorrectNoMistakes ? 3 : newCorrect >= totalActivities * 0.8 ? 2 : 1;
        setDayResults(prev => [...prev, { day, correct: newCorrect, total: totalActivities, stars }]);
        setFeedbackText({
          text: allCorrectNoMistakes ? 'PERFECT DAY!' : 'Day Complete!',
          type: allCorrectNoMistakes ? 'perfect' : 'correct',
          id: Date.now(),
        });
        setTimeout(() => setScreen('dayComplete'), 1500);
      }, 300);
    }
  }, [combo, correctCount, totalActivities, activities, currentPeriod, day, getSlotCenter, spawnSparkles, spawnGears, spawnFireworks, spawnConfetti]);

  // ── Handle wrong placement ────────────────────────────────

  const handleWrong = useCallback((card: ActivityCard) => {
    setCombo(0);
    setShakeIntensity(6);

    // Funny fail
    setFunnyFailText(card.funnyFail);
    setTimeout(() => setFunnyFailText(null), 2000);

    // Character confused
    setCharacters(prev => prev.map(c =>
      c.id === card.character ? { ...c, mood: 'confused' as const } : c
    ));
    setTimeout(() => {
      setCharacters(prev => prev.map(c =>
        c.id === card.character ? { ...c, mood: 'idle' as const } : c
      ));
    }, 1800);

    // Feedback
    setFeedbackText({ text: 'Wrong time!', type: 'wrong', id: Date.now() });
    setTimeout(() => setFeedbackText(null), 1200);

    // Snap card back
    setActivities(prev => prev.map(a =>
      a.id === card.id ? { ...a, x: a.sourceX, y: a.sourceY } : a
    ));

    // Jiggle clock backward briefly
    setClockAngle(prev => prev - 30);
    setTimeout(() => setClockAngle(clockTargetAngle), 400);
  }, [clockTargetAngle]);

  // ── Drag handling ─────────────────────────────────────────

  const handleDragStart = (
    e: React.MouseEvent | React.TouchEvent,
    card: ActivityCard
  ) => {
    if (card.placed) return;
    e.preventDefault();
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;
    const cr = container.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const pctX = ((clientX - cr.left) / cr.width) * 100;
    const pctY = ((clientY - cr.top) / cr.height) * 100;
    setDraggedCard({ id: card.id, offsetX: pctX - card.x, offsetY: pctY - card.y });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!draggedCard || !containerRef.current) return;
    e.preventDefault();
    const cr = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const pctX = Math.max(0, Math.min(95, ((clientX - cr.left) / cr.width) * 100 - draggedCard.offsetX));
    const pctY = Math.max(0, Math.min(95, ((clientY - cr.top) / cr.height) * 100 - draggedCard.offsetY));

    setActivities(prev => prev.map(a =>
      a.id === draggedCard.id ? { ...a, x: pctX, y: pctY } : a
    ));

    // Highlight nearest slot
    const slot = getSlotAtPosition(pctX + 5, pctY + 3);
    setHighlightedSlot(slot);
  }, [draggedCard, getSlotAtPosition]);

  const handleDragEnd = useCallback(() => {
    if (!draggedCard) return;
    const card = activities.find(a => a.id === draggedCard.id);
    if (!card) { setDraggedCard(null); return; }

    const slot = getSlotAtPosition(card.x + 5, card.y + 3);
    if (slot) {
      if (slot === card.correctPeriod) {
        handleCorrect(card, slot);
      } else {
        handleWrong(card);
      }
    } else {
      // Snap back
      setActivities(prev => prev.map(a =>
        a.id === card.id ? { ...a, x: a.sourceX, y: a.sourceY } : a
      ));
    }

    setDraggedCard(null);
    setHighlightedSlot(null);
  }, [draggedCard, activities, getSlotAtPosition, handleCorrect, handleWrong]);

  // ── Window event listeners for drag ───────────────────────

  useEffect(() => {
    if (!draggedCard) return;
    const move = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const end = () => handleDragEnd();
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', end);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', end);
    };
  }, [draggedCard, handleDragMove, handleDragEnd]);

  // ── Derived state ─────────────────────────────────────────

  const pc = PERIOD_CONFIG[currentPeriod];
  const isNight = currentPeriod === 'night';
  const isEvening = currentPeriod === 'evening';
  const showStars = isNight || isEvening;
  const placedCount = activities.filter(a => a.placed).length;
  const unplacedActivities = activities.filter(a => !a.placed);
  const dayStars = dayResults.length > 0 ? dayResults[dayResults.length - 1]?.stars || 0 : 0;
  const totalStars = dayResults.reduce((sum, d) => sum + d.stars, 0);

  // ── Render: Intro ─────────────────────────────────────────

  if (screen === 'intro') {
    return (
      <div className="cc-root">
        <style>{styles}</style>
        <div className="cc-intro">
          <div className="cc-intro-sky">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="cc-twinkle-star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                width: 1 + Math.random() * 2.5,
                height: 1 + Math.random() * 2.5,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1.5 + Math.random() * 3}s`,
                opacity: introPhase >= 1 ? 0.8 : 0,
                transition: `opacity ${0.4 + Math.random()}s ease`,
              }} />
            ))}
          </div>

          {/* Castle silhouette rising from fog */}
          <div className="cc-intro-castle" style={{
            opacity: introPhase >= 2 ? 1 : 0,
            transform: introPhase >= 2 ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
          }}>
            <svg viewBox="0 0 400 220" className="cc-castle-intro-svg">
              {/* Ground hill */}
              <ellipse cx="200" cy="220" rx="250" ry="50" fill="#0D1E33" />
              {/* Main tower */}
              <rect x="165" y="40" width="70" height="150" fill="#1A1A3E" />
              <polygon points="158,40 200,2 242,40" fill="#1E1E48" />
              {/* Left tower */}
              <rect x="95" y="75" width="55" height="115" fill="#15153A" />
              <polygon points="88,75 122,42 157,75" fill="#1A1A46" />
              {/* Right tower */}
              <rect x="250" y="75" width="55" height="115" fill="#15153A" />
              <polygon points="243,75 277,42 312,75" fill="#1A1A46" />
              {/* Outer walls */}
              <rect x="55" y="110" width="40" height="80" fill="#121236" />
              <rect x="305" y="110" width="40" height="80" fill="#121236" />
              {/* Battlements */}
              {[0,1,2,3].map(i => (
                <rect key={`bl${i}`} x={50 + i * 14} y={102} width={8} height={14} fill="#121236" />
              ))}
              {[0,1,2,3].map(i => (
                <rect key={`br${i}`} x={302 + i * 14} y={102} width={8} height={14} fill="#121236" />
              ))}
              {/* Windows glowing */}
              {[[183, 65], [207, 65], [183, 100], [207, 100], [112, 95], [272, 95]].map(([wx, wy], i) => (
                <g key={`iw${i}`}>
                  <rect x={wx - 2} y={wy - 2} width={18} height={22} rx={9} fill="#FFD700" opacity={0.15}>
                    <animate attributeName="opacity" values="0.1;0.25;0.1" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                  </rect>
                  <rect x={wx} y={wy} width={14} height={18} rx={7} fill="#FFD700" opacity={0.7}>
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                  </rect>
                </g>
              ))}
              {/* Door */}
              <rect x="185" y="150" width="30" height="40" rx={15} fill="#0D0D2A" />
              {/* Big clock face */}
              <circle cx="200" cy="28" r="18" fill="#F5F5DC" stroke="#B8860B" strokeWidth="2.5" />
              {[12,3,6,9].map(n => {
                const a = ((n % 12) / 12) * 360 - 90;
                const r = (a * Math.PI) / 180;
                return <text key={n} x={200 + Math.cos(r) * 13} y={28 + Math.sin(r) * 13} textAnchor="middle" dominantBaseline="central" fill="#333" fontSize="5.5" fontWeight="bold">{n}</text>;
              })}
              <line x1="200" y1="28" x2="200" y2="16" stroke="#333" strokeWidth="2.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 200 28" to="360 200 28" dur="10s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="28" x2="210" y2="28" stroke="#555" strokeWidth="1.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 200 28" to="360 200 28" dur="60s" repeatCount="indefinite" />
              </line>
              <circle cx="200" cy="28" r="2" fill="#B8860B" />
              {/* Flag */}
              <line x1="200" y1="2" x2="200" y2="-15" stroke="#888" strokeWidth="1.5" />
              <polygon points="200,-15 220,-10 200,-5" fill="#C41E3A">
                <animate attributeName="points" values="200,-15 220,-10 200,-5;200,-15 218,-11 200,-6;200,-15 220,-10 200,-5" dur="1.5s" repeatCount="indefinite" />
              </polygon>
              {/* Characters at gate */}
              <text x="170" y="186" fontSize="14" textAnchor="middle">{introPhase >= 3 ? '\u2694\uFE0F' : ''}</text>
              <text x="200" y="146" fontSize="12" textAnchor="middle">{introPhase >= 3 ? '\uD83D\uDC51' : ''}</text>
              <text x="230" y="186" fontSize="14" textAnchor="middle">{introPhase >= 3 ? '\uD83E\uDDD9' : ''}</text>
            </svg>
            {/* Fog effect */}
            <div className="cc-intro-fog" />
          </div>

          <div className="cc-intro-content" style={{
            opacity: introPhase >= 4 ? 1 : 0,
            transform: introPhase >= 4 ? 'translateY(0)' : 'translateY(25px)',
          }}>
            <div className="cc-logo">
              <span className="cc-logo-gear">\u2699\uFE0F</span>
              <h1>Clockwork Castle</h1>
              <span className="cc-logo-gear cc-logo-gear-2">\uD83C\uDFF0</span>
            </div>
            <p className="cc-tagline">You are the Castle Clockkeeper!</p>

            <div className="cc-intro-card">
              <h3>How to Play</h3>
              <div className="cc-rule">
                <div className="cc-rule-visual">
                  <span className="cc-rule-emoji">\uD83E\uDD63</span>
                  <span className="cc-rule-arrow">\u2192</span>
                  <span className="cc-rule-slot cc-slot-morning">\u2600\uFE0F Morning</span>
                </div>
                <p><strong>DRAG</strong> activity cards to the right <strong>time of day</strong></p>
              </div>
              <div className="cc-rule">
                <div className="cc-rule-visual">
                  <span className="cc-rule-emoji">\uD83C\uDFF0</span>
                  <span className="cc-rule-arrow">\u2728</span>
                  <span className="cc-rule-emoji">\uD83C\uDF19</span>
                </div>
                <p>Watch the castle <strong>transform</strong> from day to night!</p>
              </div>
              <div className="cc-rule">
                <div className="cc-rule-visual">
                  <span className="cc-rule-emoji">\uD83D\uDE02</span>
                  <span className="cc-rule-arrow">\u2190</span>
                  <span className="cc-rule-emoji">\u274C</span>
                </div>
                <p>Wrong time? Funny <strong>chaos</strong> in the castle!</p>
              </div>
            </div>

            <button className="cc-start-btn" onClick={startGame}>
              <span>\u2699\uFE0F</span>
              Start Clockkeeping
              <span>\u2728</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Day Complete ──────────────────────────────────

  if (screen === 'dayComplete') {
    const lastResult = dayResults[dayResults.length - 1];
    const starCount = lastResult?.stars || 0;
    return (
      <div className="cc-root">
        <style>{styles}</style>
        <div className="cc-day-complete">
          <div className="cc-dc-sky">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="cc-twinkle-star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                width: 1 + Math.random() * 2,
                height: 1 + Math.random() * 2,
                animationDelay: `${Math.random() * 3}s`,
              }} />
            ))}
          </div>
          <div className="cc-dc-content">
            <h1 className="cc-dc-title">
              {perfectDay ? '\u2728 PERFECT DAY! \u2728' : `Day ${day} Complete!`}
            </h1>
            <div className="cc-dc-castle">\uD83C\uDFF0</div>
            <div className="cc-dc-stars">
              {[1, 2, 3].map(s => (
                <span key={s} className={`cc-dc-star ${s <= starCount ? 'cc-star-earned' : 'cc-star-empty'}`}
                  style={{ animationDelay: `${s * 0.2}s` }}>
                  {s <= starCount ? '\u2B50' : '\u2606'}
                </span>
              ))}
            </div>
            <div className="cc-dc-stats">
              <div className="cc-dc-stat">
                <span className="cc-dc-val">{score}</span>
                <span className="cc-dc-label">Score</span>
              </div>
              <div className="cc-dc-stat">
                <span className="cc-dc-val">{maxCombo}x</span>
                <span className="cc-dc-label">Best Combo</span>
              </div>
              <div className="cc-dc-stat">
                <span className="cc-dc-val">{lastResult?.correct || 0}/{lastResult?.total || 0}</span>
                <span className="cc-dc-label">Activities</span>
              </div>
            </div>
            <div className="cc-dc-buttons">
              <button className="cc-next-btn" onClick={nextDay}>
                {day >= 10 ? 'See Results' : `Day ${day + 1} \u2192`}
              </button>
              <button className="cc-menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Game Complete ─────────────────────────────────

  if (screen === 'gameComplete') {
    return (
      <div className="cc-root">
        <style>{styles}</style>
        <div className="cc-game-complete">
          <div className="cc-gc-bg">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="cc-gc-burst" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 50}%`,
                animationDelay: `${i * 0.25}s`,
                '--burst-hue': Math.random() * 360,
              } as React.CSSProperties} />
            ))}
          </div>
          <div className="cc-gc-content">
            <h1 className="cc-gc-title">\uD83C\uDFF0 Master Clockkeeper! \uD83C\uDFF0</h1>
            <div className="cc-gc-badge">
              <span className="cc-gc-stars">{'\u2B50'.repeat(Math.min(totalStars, 30))}</span>
              <span className="cc-gc-total-stars">{totalStars} / 30 Stars</span>
            </div>
            <div className="cc-gc-final-score">
              <span className="cc-gc-score-num">{score}</span>
              <span className="cc-gc-score-label">Total Score</span>
            </div>
            <div className="cc-gc-days">
              {dayResults.map((dr, i) => (
                <div key={i} className="cc-gc-day">
                  <span className="cc-gc-day-num">Day {dr.day}</span>
                  <span className="cc-gc-day-stars">{'\u2B50'.repeat(dr.stars)}{'\u2606'.repeat(3 - dr.stars)}</span>
                </div>
              ))}
            </div>
            <div className="cc-gc-buttons">
              <button className="cc-start-btn" onClick={startGame}>Play Again</button>
              <button className="cc-menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Playing ───────────────────────────────────────

  return (
    <div className="cc-root" ref={containerRef}>
      <style>{styles}</style>
      <div
        className={`cc-game ${shakeIntensity > 0 ? 'cc-shake' : ''}`}
        style={{
          '--sky-top': pc.skyTop,
          '--sky-mid': pc.skyMid,
          '--sky-bot': pc.skyBot,
          '--castle-base': pc.castleBase,
          '--castle-accent': pc.castleAccent,
          '--castle-roof': pc.castleRoof,
          '--ambient': pc.ambient,
          '--window-glow': pc.windowGlow,
          '--shake-x': `${(Math.random() - 0.5) * shakeIntensity}px`,
          '--shake-y': `${(Math.random() - 0.5) * shakeIntensity}px`,
        } as React.CSSProperties}
      >
        {/* Sky background with smooth transition */}
        <div className="cc-sky" />

        {/* Sun */}
        {(currentPeriod === 'morning' || currentPeriod === 'afternoon') && (
          <div className={`cc-celestial cc-sun ${currentPeriod === 'morning' ? 'cc-sun-low' : 'cc-sun-high'}`}>
            <div className="cc-sun-rays" />
            <div className="cc-sun-core" />
          </div>
        )}

        {/* Sunset */}
        {isEvening && (
          <div className="cc-celestial cc-sun cc-sun-setting">
            <div className="cc-sun-rays cc-sunset-rays" />
            <div className="cc-sun-core cc-sunset-core" />
          </div>
        )}

        {/* Moon */}
        {isNight && (
          <div className="cc-celestial cc-moon">
            <div className="cc-moon-glow" />
            <div className="cc-moon-core">
              <div className="cc-crater cc-c1" />
              <div className="cc-crater cc-c2" />
              <div className="cc-crater cc-c3" />
            </div>
          </div>
        )}

        {/* Stars */}
        {showStars && Array.from({ length: 60 }, (_, i) => (
          <div key={`gs${i}`} className="cc-game-star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 35}%`,
            width: 1 + Math.random() * 2.5,
            height: 1 + Math.random() * 2.5,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${1.5 + Math.random() * 2.5}s`,
          }} />
        ))}

        {/* Clouds (daytime only) */}
        {!isNight && !isEvening && (
          <>
            <div className="cc-cloud cc-cloud-1" />
            <div className="cc-cloud cc-cloud-2" />
            <div className="cc-cloud cc-cloud-3" />
          </>
        )}

        {/* ── CASTLE ── */}
        <svg viewBox="0 0 400 240" className="cc-castle-svg">
          {/* Ground */}
          <ellipse cx="200" cy="240" rx="260" ry="55" fill={isNight ? '#0A1628' : isEvening ? '#2D4A28' : '#4A7A3F'} />
          <ellipse cx="200" cy="240" rx="230" ry="45" fill={isNight ? '#0D1E33' : isEvening ? '#3A5E32' : '#5C9A4E'} />
          {/* Path to door */}
          <ellipse cx="200" cy="240" rx="30" ry="10" fill={isNight ? '#1A2840' : isEvening ? '#6B5D3D' : '#C4A46C'} />

          {/* Castle walls */}
          <rect x="135" y="85" width="130" height="120" rx="3" fill="var(--castle-base)" />
          {/* Main tower */}
          <rect x="170" y="30" width="60" height="175" rx="2" fill="var(--castle-accent)" />
          <polygon points="163,30 200,-2 237,30" fill="var(--castle-roof)" />
          {/* Left tower */}
          <rect x="90" y="68" width="55" height="137" rx="2" fill="var(--castle-base)" />
          <polygon points="83,68 117,35 153,68" fill="var(--castle-roof)" />
          {/* Right tower */}
          <rect x="255" y="68" width="55" height="137" rx="2" fill="var(--castle-base)" />
          <polygon points="248,68 282,35 318,68" fill="var(--castle-roof)" />

          {/* Outer walls */}
          <rect x="50" y="115" width="42" height="90" rx="2" fill="var(--castle-base)" />
          <rect x="308" y="115" width="42" height="90" rx="2" fill="var(--castle-base)" />

          {/* Battlements */}
          {[0,1,2,3].map(i => <rect key={`bl${i}`} x={45 + i * 14} y={107} width={9} height={14} fill="var(--castle-base)" />)}
          {[0,1,2,3].map(i => <rect key={`br${i}`} x={304 + i * 14} y={107} width={9} height={14} fill="var(--castle-base)" />)}
          {[0,1,2].map(i => <rect key={`bm${i}`} x={135 + i * 15} y={78} width={8} height={12} fill="var(--castle-accent)" />)}
          {[0,1,2].map(i => <rect key={`bm2${i}`} x={243 + i * 15} y={78} width={8} height={12} fill="var(--castle-accent)" />)}

          {/* Windows - glow at night/evening */}
          {[[108, 90], [130, 90], [108, 120], [130, 120], [182, 55], [210, 55], [182, 90], [210, 90], [270, 90], [292, 90], [270, 120], [292, 120]].map(([wx, wy], i) => (
            <g key={`w${i}`}>
              {(isNight || isEvening) && (
                <rect x={wx - 4} y={wy - 4} width={22} height={26} rx={11} fill="var(--window-glow)" opacity={0.3}>
                  <animate attributeName="opacity" values="0.15;0.35;0.15" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                </rect>
              )}
              <rect x={wx} y={wy} width={14} height={18} rx={7}
                fill={(isNight || isEvening) ? 'var(--window-glow)' : (currentPeriod === 'morning' ? '#6B4226' : '#5C3317')}
                opacity={(isNight || isEvening) ? 0.85 : 1}>
                {(isNight || isEvening) && (
                  <animate attributeName="opacity" values="0.6;0.95;0.6" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                )}
              </rect>
            </g>
          ))}

          {/* Door */}
          <rect x="187" y="158" width="26" height="42" rx={13} fill={isNight ? '#0D0D2A' : '#3D2B15'} />
          <circle cx="207" cy="179" r="2" fill="#B8860B" />

          {/* CLOCK FACE - Large, prominent */}
          <g className={showClockPulse ? 'cc-clock-pulse' : ''}>
            <circle cx="200" cy="16" r="20" fill="#F5F5DC" stroke="#B8860B" strokeWidth="3" />
            <circle cx="200" cy="16" r="18" fill="none" stroke="#D4A017" strokeWidth="0.5" />
            {/* Hour markers */}
            {Array.from({ length: 12 }, (_, i) => {
              const a = ((i / 12) * 360 - 90) * Math.PI / 180;
              const inner = i % 3 === 0 ? 13 : 15;
              return <line key={`hm${i}`} x1={200 + Math.cos(a) * inner} y1={16 + Math.sin(a) * inner} x2={200 + Math.cos(a) * 16.5} y2={16 + Math.sin(a) * 16.5} stroke="#666" strokeWidth={i % 3 === 0 ? 1.5 : 0.5} />;
            })}
            {/* Numbers */}
            {[12, 3, 6, 9].map(n => {
              const a = ((n % 12) / 12) * 360 - 90;
              const r = (a * Math.PI) / 180;
              return <text key={`cn${n}`} x={200 + Math.cos(r) * 12} y={16 + Math.sin(r) * 12} textAnchor="middle" dominantBaseline="central" fill="#333" fontSize="5" fontWeight="bold">{n}</text>;
            })}
            {/* Hour hand */}
            <line x1="200" y1="16" x2={200 + Math.cos(((clockAngle - 90) * Math.PI) / 180) * 10} y2={16 + Math.sin(((clockAngle - 90) * Math.PI) / 180) * 10} stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
            {/* Minute hand */}
            <line x1="200" y1="16" x2={200 + Math.cos(((clockAngle * 12 - 90) * Math.PI) / 180) * 14} y2={16 + Math.sin(((clockAngle * 12 - 90) * Math.PI) / 180) * 14} stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="200" cy="16" r="2" fill="#B8860B" />
          </g>

          {/* Gear decorations on towers */}
          <circle cx="117" cy="52" r="7" fill="none" stroke={isNight ? '#2A2A58' : '#8B7355'} strokeWidth="1.5" strokeDasharray="2 2">
            <animateTransform attributeName="transform" type="rotate" from="0 117 52" to="360 117 52" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="282" cy="52" r="7" fill="none" stroke={isNight ? '#2A2A58' : '#8B7355'} strokeWidth="1.5" strokeDasharray="2 2">
            <animateTransform attributeName="transform" type="rotate" from="360 282 52" to="0 282 52" dur="10s" repeatCount="indefinite" />
          </circle>

          {/* Chimney */}
          <rect x="258" y="24" width="14" height="22" rx="2" fill="var(--castle-roof)" />

          {/* Flag */}
          <line x1="200" y1="-2" x2="200" y2="-20" stroke="#888" strokeWidth="1.5" />
          <polygon points="200,-20 222,-14 200,-8" fill="#C41E3A">
            <animate attributeName="points" values="200,-20 222,-14 200,-8;200,-20 220,-15 200,-9;200,-20 222,-14 200,-8" dur="1.5s" repeatCount="indefinite" />
          </polygon>

          {/* Characters */}
          {characters.map(char => {
            const bounce = Math.sin(timeRef.current * 2 + char.bounceOffset) * (char.mood === 'happy' ? 4 : 1.5);
            const wobble = char.mood === 'confused' ? Math.sin(timeRef.current * 8) * 3 : 0;
            const sleeping = char.mood === 'sleeping';
            return (
              <g key={char.id} transform={`translate(${char.x * 4}, ${char.y * 2.4 + bounce})`}>
                <text fontSize="18" textAnchor="middle" dominantBaseline="central"
                  transform={`rotate(${wobble})`}
                  opacity={sleeping ? 0.5 : 1}>
                  {char.emoji}
                </text>
                {char.mood === 'happy' && (
                  <text fontSize="8" textAnchor="middle" y="-14" opacity={0.9}>
                    \u2728
                  </text>
                )}
                {char.mood === 'confused' && (
                  <text fontSize="10" textAnchor="middle" y="-16" opacity={0.9}>
                    \u2753
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Ambient overlay */}
        <div className="cc-ambient" />

        {/* Particles */}
        <div className="cc-particles">
          {particles.map(p => (
            <div key={p.id} className={`cc-particle cc-p-${p.type}`} style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: Math.min(1, p.life / (p.maxLife * 0.3)),
              '--p-hue': p.hue,
              transform: p.type === 'gear' ? `rotate(${timeRef.current * 200 + p.id * 45}deg)` : undefined,
            } as React.CSSProperties} />
          ))}
        </div>

        {/* ── HUD ── */}
        <div className="cc-hud">
          <div className="cc-hud-left">
            <button className="cc-back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>\u2190</button>
            <div className="cc-day-badge">Day {day}/10</div>
          </div>
          <div className="cc-hud-center">
            {combo > 1 && (
              <div className="cc-combo-badge" key={combo}>
                <span className="cc-combo-fire">\uD83D\uDD25</span>
                <span>x{combo}</span>
              </div>
            )}
            <div className="cc-progress-mini">
              {placedCount}/{totalActivities}
            </div>
          </div>
          <div className="cc-hud-right">
            <div className="cc-score-badge">
              <span>\u2B50</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* ── TIME SLOT ZONES ── */}
        <div className="cc-slots">
          {availablePeriods.map(period => {
            const cfg = PERIOD_CONFIG[period];
            const isHighlighted = highlightedSlot === period;
            return (
              <div
                key={period}
                ref={(el) => { slotRefs.current[period] = el; }}
                className={`cc-slot cc-slot-${period} ${isHighlighted ? 'cc-slot-highlight' : ''}`}
              >
                <span className="cc-slot-emoji">{cfg.emoji}</span>
                <span className="cc-slot-label">{cfg.label}</span>
                {isHighlighted && <div className="cc-slot-glow" />}
              </div>
            );
          })}
        </div>

        {/* ── ACTIVITY CARDS ── */}
        {activities.map(card => {
          if (card.placed) return null;
          const isDragging = draggedCard?.id === card.id;
          return (
            <div
              key={card.id}
              className={`cc-activity-card ${isDragging ? 'cc-card-dragging' : ''}`}
              style={{
                left: `${card.x}%`,
                top: `${card.y}%`,
                animationDelay: `${card.animOffset}s`,
                zIndex: isDragging ? 200 : 50,
              }}
              onMouseDown={(e) => handleDragStart(e, card)}
              onTouchStart={(e) => handleDragStart(e, card)}
            >
              <div className="cc-card-emoji">{card.emoji}</div>
              <div className="cc-card-label">{card.label}</div>
              <div className="cc-card-char">{CHARACTERS.find(c => c.id === card.character)?.emoji}</div>
            </div>
          );
        })}

        {/* ── Feedback overlays ── */}
        {feedbackText && (
          <div className={`cc-feedback cc-feedback-${feedbackText.type}`} key={feedbackText.id}>
            <div className="cc-feedback-text">{feedbackText.text}</div>
          </div>
        )}

        {funnyFailText && (
          <div className="cc-funny-fail" key={funnyFailText}>
            <div className="cc-funny-text">{funnyFailText}</div>
          </div>
        )}

        {/* ── Bottom hint bar ── */}
        <div className="cc-bottom-bar">
          <span className="cc-hint">\u2699\uFE0F Drag activities to the correct time of day</span>
          {unplacedActivities.length > 0 && (
            <span className="cc-remaining">{unplacedActivities.length} remaining</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
// STYLES
// ══════════════════════════════════════════════════════════════════

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .cc-root {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #0B0B2B;
  }

  /* ═══════ INTRO ═══════ */

  .cc-intro {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0B0B2B 0%, #1A1A4E 40%, #2D1B69 70%, #1A0A3E 100%);
  }

  .cc-intro-sky {
    position: absolute; inset: 0; pointer-events: none;
  }

  .cc-twinkle-star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: ccTwinkle 2s ease-in-out infinite alternate;
  }

  @keyframes ccTwinkle {
    0% { opacity: 0.15; transform: scale(0.7); }
    100% { opacity: 1; transform: scale(1.3); }
  }

  .cc-intro-castle {
    position: absolute;
    bottom: 5%;
    width: 70%;
    max-width: 420px;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    filter: drop-shadow(0 0 40px rgba(255, 215, 0, 0.12));
    z-index: 2;
  }

  .cc-castle-intro-svg {
    width: 100%; height: auto; overflow: visible;
  }

  .cc-intro-fog {
    position: absolute;
    bottom: -5%;
    left: -10%;
    right: -10%;
    height: 60%;
    background: linear-gradient(to top, rgba(26, 10, 62, 0.95) 0%, rgba(26, 10, 62, 0.5) 40%, transparent 100%);
    pointer-events: none;
  }

  .cc-intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.2rem;
    max-width: 460px;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cc-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .cc-logo h1 {
    font-size: clamp(1.8rem, 6vw, 2.6rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FFD700, #FFB347, #FF6B35, #FFD700);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ccShimmer 3s ease-in-out infinite;
  }

  @keyframes ccShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .cc-logo-gear {
    font-size: 2rem;
    animation: ccGearSpin 6s linear infinite;
  }

  .cc-logo-gear-2 {
    animation: ccGearBounce 2.5s ease-in-out infinite;
  }

  @keyframes ccGearSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes ccGearBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .cc-tagline {
    color: #B8A9D4;
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
  }

  .cc-intro-card {
    background: rgba(255, 255, 255, 0.06);
    border: 2px solid rgba(255, 215, 0, 0.15);
    border-radius: 20px;
    padding: 1rem 1.2rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
  }

  .cc-intro-card h3 {
    color: #FFD700;
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  .cc-rule {
    margin-bottom: 0.8rem;
  }

  .cc-rule:last-child { margin-bottom: 0; }

  .cc-rule-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
  }

  .cc-rule-emoji { font-size: 1.6rem; }
  .cc-rule-arrow { color: #64748b; font-size: 1.1rem; }

  .cc-rule-slot {
    padding: 0.25rem 0.6rem;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
  }

  .cc-slot-morning { background: linear-gradient(135deg, #FF9A56, #FF6B35); }

  .cc-rule p {
    color: #C8BFE0;
    font-size: 0.85rem;
  }

  .cc-start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.9rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: #1A0A3E;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
  }

  .cc-start-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px rgba(255, 215, 0, 0.45);
  }

  .cc-start-btn:active { transform: translateY(0) scale(0.98); }

  /* ═══════ DAY COMPLETE ═══════ */

  .cc-day-complete, .cc-game-complete {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0B0B2B 0%, #1A1A4E 100%);
  }

  .cc-dc-sky { position: absolute; inset: 0; pointer-events: none; }

  .cc-dc-content, .cc-gc-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 440px;
    animation: ccFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes ccFadeUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .cc-dc-title, .cc-gc-title {
    font-size: clamp(1.6rem, 5vw, 2.2rem);
    font-weight: 900;
    color: white;
    margin-bottom: 0.8rem;
    text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  }

  .cc-dc-castle {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    animation: ccGearBounce 2s ease-in-out infinite;
  }

  .cc-dc-stars {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .cc-dc-star {
    font-size: 2.5rem;
    animation: ccStarPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  .cc-star-empty { opacity: 0.3; filter: grayscale(1); }

  @keyframes ccStarPop {
    0% { transform: scale(0) rotate(-45deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .cc-dc-stats {
    display: flex;
    justify-content: center;
    gap: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .cc-dc-stat { display: flex; flex-direction: column; align-items: center; }
  .cc-dc-val { font-size: 1.8rem; font-weight: 900; color: #FFD700; }
  .cc-dc-label { font-size: 0.75rem; color: #8B7FC7; }

  .cc-dc-buttons, .cc-gc-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  .cc-next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: #1A0A3E;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
  }

  .cc-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(255, 215, 0, 0.45);
  }

  .cc-menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #8B7FC7;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cc-menu-btn:hover { border-color: rgba(255, 255, 255, 0.3); color: white; }

  /* ═══════ GAME COMPLETE ═══════ */

  .cc-gc-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

  .cc-gc-burst {
    position: absolute;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: hsl(var(--burst-hue), 80%, 60%);
    animation: ccBurst 1.8s ease-out infinite;
  }

  @keyframes ccBurst {
    0% { transform: scale(0); opacity: 1; box-shadow: 0 0 20px hsl(var(--burst-hue), 80%, 60%); }
    50% { transform: scale(8); opacity: 0.5; }
    100% { transform: scale(14); opacity: 0; }
  }

  .cc-gc-badge { margin-bottom: 1rem; }
  .cc-gc-stars { font-size: 1.2rem; letter-spacing: 2px; display: block; margin-bottom: 0.3rem; }
  .cc-gc-total-stars { color: #FFD700; font-weight: 800; font-size: 1.1rem; }

  .cc-gc-final-score { margin-bottom: 1.2rem; }
  .cc-gc-score-num { font-size: 3rem; font-weight: 900; color: #FFD700; display: block; }
  .cc-gc-score-label { font-size: 0.8rem; color: #8B7FC7; }

  .cc-gc-days {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .cc-gc-day {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3rem 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    font-size: 0.65rem;
    color: #B8A9D4;
  }

  .cc-gc-day-stars { font-size: 0.7rem; }

  /* ═══════ GAME SCREEN ═══════ */

  .cc-game {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    touch-action: none;
  }

  .cc-game.cc-shake {
    animation: ccShake 0.4s ease-out;
  }

  @keyframes ccShake {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-4px, 2px); }
    20% { transform: translate(4px, -2px); }
    30% { transform: translate(-3px, 3px); }
    40% { transform: translate(3px, -1px); }
    50% { transform: translate(-2px, 1px); }
  }

  /* Sky */
  .cc-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 45%, var(--sky-bot) 100%);
    transition: all 2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  /* Celestial bodies */
  .cc-celestial {
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }

  .cc-sun { right: 12%; }
  .cc-sun-low { top: 18%; }
  .cc-sun-high { top: 5%; }
  .cc-sun-setting { top: 28%; right: 8%; }

  .cc-sun-rays {
    width: 90px; height: 90px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 220, 50, 0.4) 0%, transparent 70%);
    animation: ccSunPulse 3s ease-in-out infinite;
  }

  @keyframes ccSunPulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  .cc-sun-core {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 38px; height: 38px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #FFF8DC, #FFD700, #FFA500);
    box-shadow: 0 0 35px rgba(255, 215, 0, 0.6);
  }

  .cc-sunset-rays { background: radial-gradient(circle, rgba(255, 100, 50, 0.4) 0%, transparent 70%); }
  .cc-sunset-core {
    background: radial-gradient(circle at 30% 30%, #FF8C00, #FF4500, #CC3300);
    box-shadow: 0 0 45px rgba(255, 69, 0, 0.5);
  }

  .cc-moon { right: 16%; top: 6%; }

  .cc-moon-glow {
    width: 75px; height: 75px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 200, 255, 0.2) 0%, transparent 70%);
    animation: ccMoonPulse 4s ease-in-out infinite;
  }

  @keyframes ccMoonPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  .cc-moon-core {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 32px; height: 32px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #F5F5F0, #E8E8D8, #D4D4C0);
    box-shadow: 0 0 30px rgba(200, 200, 255, 0.4);
  }

  .cc-crater {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.08);
  }

  .cc-c1 { top: 38%; left: 40%; width: 8px; height: 8px; }
  .cc-c2 { top: 55%; left: 58%; width: 5px; height: 5px; }
  .cc-c3 { top: 32%; left: 62%; width: 4px; height: 4px; }

  /* Stars */
  .cc-game-star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: ccTwinkle 2s ease-in-out infinite alternate;
    z-index: 1;
  }

  /* Clouds */
  .cc-cloud {
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    filter: blur(2px);
  }

  .cc-cloud::before, .cc-cloud::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
  }

  .cc-cloud-1 { width: 55px; height: 18px; top: 10%; animation: ccCloudDrift 28s linear infinite; }
  .cc-cloud-1::before { width: 28px; height: 26px; top: -13px; left: 8px; }
  .cc-cloud-1::after { width: 22px; height: 20px; top: -7px; left: 28px; }

  .cc-cloud-2 { width: 48px; height: 14px; top: 16%; animation: ccCloudDrift 35s linear infinite; animation-delay: -12s; }
  .cc-cloud-2::before { width: 24px; height: 22px; top: -11px; left: 6px; }
  .cc-cloud-2::after { width: 18px; height: 16px; top: -5px; left: 26px; }

  .cc-cloud-3 { width: 42px; height: 12px; top: 22%; animation: ccCloudDrift 42s linear infinite; animation-delay: -22s; }
  .cc-cloud-3::before { width: 20px; height: 18px; top: -9px; left: 6px; }
  .cc-cloud-3::after { width: 16px; height: 14px; top: -4px; left: 22px; }

  @keyframes ccCloudDrift {
    0% { left: -12%; }
    100% { left: 110%; }
  }

  /* Castle SVG */
  .cc-castle-svg {
    position: absolute;
    bottom: 18%;
    left: 50%;
    transform: translateX(-50%);
    width: 88%;
    max-width: 520px;
    height: auto;
    overflow: visible;
    z-index: 3;
    filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3));
    transition: filter 2s ease;
  }

  /* Clock pulse on correct */
  .cc-clock-pulse {
    animation: ccClockTick 0.4s ease;
  }

  @keyframes ccClockTick {
    0% { transform: scale(1); }
    30% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }

  /* Ambient overlay */
  .cc-ambient {
    position: absolute;
    inset: 0;
    background: var(--ambient);
    pointer-events: none;
    z-index: 4;
    transition: background 2s ease;
  }

  /* Particles */
  .cc-particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 15;
  }

  .cc-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .cc-p-gear {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(184, 134, 11, 0.5);
  }

  .cc-p-sparkle {
    background: radial-gradient(circle, #FFD700, #FFA500);
    box-shadow: 0 0 6px rgba(255, 215, 0, 0.7);
  }

  .cc-p-firework {
    background: radial-gradient(circle, hsl(var(--p-hue), 90%, 70%), hsl(var(--p-hue), 80%, 50%));
    box-shadow: 0 0 5px hsl(var(--p-hue), 90%, 60%);
  }

  .cc-p-firefly {
    background: radial-gradient(circle, rgba(255, 255, 100, 0.9), rgba(200, 200, 50, 0.3));
    box-shadow: 0 0 8px rgba(255, 255, 100, 0.5);
    animation: ccFireflyGlow 1.5s ease-in-out infinite alternate;
  }

  @keyframes ccFireflyGlow {
    0% { box-shadow: 0 0 4px rgba(255, 255, 100, 0.3); }
    100% { box-shadow: 0 0 12px rgba(255, 255, 100, 0.7); }
  }

  .cc-p-smoke {
    background: radial-gradient(circle, rgba(150, 150, 150, 0.35), rgba(100, 100, 100, 0.08));
  }

  .cc-p-confetti {
    background: hsl(var(--p-hue), 85%, 60%);
    border-radius: 1px;
    width: 4px !important;
    height: 8px !important;
  }

  /* ═══════ HUD ═══════ */

  .cc-hud {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.7rem;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(8px);
    z-index: 40;
    position: relative;
  }

  .cc-hud-left, .cc-hud-right { display: flex; align-items: center; gap: 0.5rem; }
  .cc-hud-center { display: flex; align-items: center; gap: 0.6rem; }

  .cc-back-btn {
    width: 34px; height: 34px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cc-back-btn:hover { background: rgba(255, 255, 255, 0.2); }

  .cc-day-badge {
    padding: 0.35rem 0.8rem;
    background: linear-gradient(135deg, #6A5ACD, #9370DB);
    border-radius: 14px;
    font-weight: 700;
    font-size: 0.8rem;
    color: white;
  }

  .cc-combo-badge {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.3rem 0.7rem;
    background: linear-gradient(135deg, rgba(255, 165, 0, 0.3), rgba(255, 69, 0, 0.3));
    border: 1px solid rgba(255, 165, 0, 0.4);
    border-radius: 14px;
    color: #FFA500;
    font-weight: 800;
    font-size: 0.8rem;
    animation: ccComboPop 0.3s ease;
  }

  @keyframes ccComboPop {
    0% { transform: scale(0.7); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .cc-combo-fire { font-size: 0.85rem; }

  .cc-progress-mini {
    padding: 0.3rem 0.6rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: white;
    font-weight: 600;
    font-size: 0.75rem;
  }

  .cc-score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.35rem 0.7rem;
    background: rgba(255, 215, 0, 0.15);
    border-radius: 14px;
    color: #FFD700;
    font-weight: 800;
    font-size: 0.8rem;
  }

  /* ═══════ TIME SLOTS ═══════ */

  .cc-slots {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 0.6rem;
    z-index: 20;
    pointer-events: auto;
  }

  .cc-slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    padding: 0.5rem 0.7rem;
    border-radius: 14px;
    border: 2.5px dashed rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(6px);
    transition: all 0.3s ease;
    min-width: 68px;
    position: relative;
  }

  .cc-slot-morning { border-color: rgba(255, 165, 0, 0.35); }
  .cc-slot-afternoon { border-color: rgba(30, 144, 255, 0.35); }
  .cc-slot-evening { border-color: rgba(147, 112, 219, 0.35); }
  .cc-slot-night { border-color: rgba(70, 50, 150, 0.35); }

  .cc-slot-highlight {
    transform: scale(1.12);
    border-style: solid;
    border-width: 3px;
  }

  .cc-slot-highlight.cc-slot-morning { border-color: #FFA500; background: rgba(255, 165, 0, 0.2); box-shadow: 0 0 20px rgba(255, 165, 0, 0.3); }
  .cc-slot-highlight.cc-slot-afternoon { border-color: #1E90FF; background: rgba(30, 144, 255, 0.2); box-shadow: 0 0 20px rgba(30, 144, 255, 0.3); }
  .cc-slot-highlight.cc-slot-evening { border-color: #9370DB; background: rgba(147, 112, 219, 0.2); box-shadow: 0 0 20px rgba(147, 112, 219, 0.3); }
  .cc-slot-highlight.cc-slot-night { border-color: #6A5ACD; background: rgba(106, 90, 205, 0.2); box-shadow: 0 0 20px rgba(106, 90, 205, 0.3); }

  .cc-slot-glow {
    position: absolute;
    inset: -12px;
    border-radius: 22px;
    animation: ccSlotPulse 0.8s ease-in-out infinite;
    pointer-events: none;
  }

  .cc-slot-highlight.cc-slot-morning .cc-slot-glow { background: radial-gradient(circle, rgba(255, 165, 0, 0.3), transparent); }
  .cc-slot-highlight.cc-slot-afternoon .cc-slot-glow { background: radial-gradient(circle, rgba(30, 144, 255, 0.3), transparent); }
  .cc-slot-highlight.cc-slot-evening .cc-slot-glow { background: radial-gradient(circle, rgba(147, 112, 219, 0.3), transparent); }
  .cc-slot-highlight.cc-slot-night .cc-slot-glow { background: radial-gradient(circle, rgba(106, 90, 205, 0.3), transparent); }

  @keyframes ccSlotPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  .cc-slot-emoji { font-size: 1.5rem; }
  .cc-slot-label { font-size: 0.6rem; font-weight: 700; color: white; text-transform: uppercase; letter-spacing: 0.5px; }

  /* ═══════ ACTIVITY CARDS ═══════ */

  .cc-activity-card {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    padding: 0.4rem 0.6rem;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.25);
    border-radius: 14px;
    backdrop-filter: blur(6px);
    cursor: grab;
    z-index: 50;
    transition: box-shadow 0.2s ease;
    animation: ccCardAppear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    min-width: 80px;
    touch-action: none;
  }

  @keyframes ccCardAppear {
    0% { transform: scale(0.5) translateY(15px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }

  .cc-activity-card:hover {
    border-color: rgba(255, 215, 0, 0.5);
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
  }

  .cc-card-dragging {
    cursor: grabbing;
    transform: scale(1.1) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.3) !important;
    border-color: #FFD700 !important;
    background: rgba(255, 255, 255, 0.15) !important;
    z-index: 200 !important;
  }

  .cc-card-emoji { font-size: 1.6rem; }
  .cc-card-label { font-size: 0.6rem; font-weight: 700; color: white; white-space: nowrap; }
  .cc-card-char { font-size: 0.8rem; opacity: 0.7; }

  /* ═══════ FEEDBACK ═══════ */

  .cc-feedback {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    pointer-events: none;
    animation: ccFeedbackPop 1.2s ease forwards;
  }

  @keyframes ccFeedbackPop {
    0% { transform: translateX(-50%) scale(0); opacity: 0; }
    15% { transform: translateX(-50%) scale(1.3); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(-50%) scale(1) translateY(-20px); opacity: 0; }
  }

  .cc-feedback-text {
    padding: 0.6rem 1.4rem;
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight: 900;
    white-space: nowrap;
  }

  .cc-feedback-correct .cc-feedback-text {
    background: linear-gradient(135deg, #4ade80, #22c55e);
    color: white;
    box-shadow: 0 8px 25px rgba(74, 222, 128, 0.4);
  }

  .cc-feedback-wrong .cc-feedback-text {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
  }

  .cc-feedback-perfect .cc-feedback-text {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #1A0A3E;
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5);
    animation: ccPerfectGlow 0.5s ease-in-out infinite alternate;
  }

  @keyframes ccPerfectGlow {
    0% { box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5); }
    100% { box-shadow: 0 8px 40px rgba(255, 215, 0, 0.8); }
  }

  .cc-feedback-info .cc-feedback-text {
    background: linear-gradient(135deg, #6A5ACD, #9370DB);
    color: white;
    box-shadow: 0 8px 25px rgba(106, 90, 205, 0.4);
  }

  /* Funny fail text */
  .cc-funny-fail {
    position: absolute;
    bottom: 22%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    pointer-events: none;
    animation: ccFunnySlide 2s ease forwards;
  }

  @keyframes ccFunnySlide {
    0% { transform: translateX(-50%) translateY(20px); opacity: 0; }
    15% { transform: translateX(-50%) translateY(0); opacity: 1; }
    75% { opacity: 1; }
    100% { transform: translateX(-50%) translateY(-10px); opacity: 0; }
  }

  .cc-funny-text {
    padding: 0.5rem 1.2rem;
    background: rgba(0, 0, 0, 0.75);
    border: 2px solid rgba(255, 165, 0, 0.3);
    border-radius: 16px;
    color: #FFB347;
    font-size: 0.85rem;
    font-weight: 700;
    max-width: 280px;
    text-align: center;
    backdrop-filter: blur(6px);
  }

  /* ═══════ BOTTOM BAR ═══════ */

  .cc-bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.8rem;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(6px);
    z-index: 40;
  }

  .cc-hint {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.35);
  }

  .cc-remaining {
    font-size: 0.7rem;
    color: rgba(255, 215, 0, 0.5);
    font-weight: 600;
  }

  /* ═══════ RESPONSIVE ═══════ */

  @media (max-width: 600px) {
    .cc-slots {
      gap: 0.4rem;
      top: 44%;
    }

    .cc-slot {
      padding: 0.35rem 0.5rem;
      min-width: 56px;
    }

    .cc-slot-emoji { font-size: 1.2rem; }
    .cc-slot-label { font-size: 0.5rem; }

    .cc-activity-card {
      padding: 0.3rem 0.5rem;
      min-width: 68px;
    }

    .cc-card-emoji { font-size: 1.3rem; }
    .cc-card-label { font-size: 0.55rem; }

    .cc-castle-svg {
      width: 95%;
      bottom: 20%;
    }

    .cc-hud-center { display: none; }

    .cc-feedback-text { font-size: 1rem; padding: 0.5rem 1rem; }

    .cc-funny-text { font-size: 0.75rem; max-width: 240px; }

    .cc-intro-castle { width: 85%; bottom: 3%; }
  }

  @media (max-width: 380px) {
    .cc-slots { gap: 0.25rem; }
    .cc-slot { padding: 0.25rem 0.35rem; min-width: 48px; }
    .cc-slot-emoji { font-size: 1rem; }
  }
`;
