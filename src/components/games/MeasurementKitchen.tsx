"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────

type MeasurementType = 'mass' | 'capacity' | 'length' | 'duration';
type GameScreen = 'intro' | 'playing' | 'demo' | 'complete' | 'levelComplete';
type Comparison = 'heavier' | 'lighter' | 'more' | 'less' | 'longer' | 'shorter' | 'longerTime' | 'quickerTime';

interface KitchenItem {
  name: string;
  emoji: string;
  value: number; // abstract measurement value for comparison
}

interface RoundData {
  type: MeasurementType;
  itemA: KitchenItem;
  itemB: KitchenItem;
  question: string;
  comparison: Comparison;
  correctAnswer: 'A' | 'B';
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
  maxLife: number;
  type: 'steam' | 'flour' | 'sparkle' | 'celebration';
}

interface RecipeIngredient {
  name: string;
  emoji: string;
  collected: boolean;
}

interface MeasurementKitchenProps {
  onExit?: () => void;
}

// ── Item pools ─────────────────────────────────────────────────────────────────

const MASS_ITEMS: KitchenItem[] = [
  { name: 'Watermelon', emoji: '🍉', value: 9 },
  { name: 'Pumpkin', emoji: '🎃', value: 8 },
  { name: 'Pineapple', emoji: '🍍', value: 7 },
  { name: 'Coconut', emoji: '🥥', value: 6 },
  { name: 'Apple', emoji: '🍎', value: 4 },
  { name: 'Orange', emoji: '🍊', value: 3.5 },
  { name: 'Lemon', emoji: '🍋', value: 2.5 },
  { name: 'Egg', emoji: '🥚', value: 1.5 },
  { name: 'Strawberry', emoji: '🍓', value: 0.8 },
  { name: 'Grape', emoji: '🍇', value: 0.5 },
  { name: 'Blueberry', emoji: '🫐', value: 0.2 },
  { name: 'Cherry', emoji: '🍒', value: 0.3 },
];

const CAPACITY_ITEMS: KitchenItem[] = [
  { name: 'Big Pot', emoji: '🍲', value: 10 },
  { name: 'Mixing Bowl', emoji: '🥣', value: 8 },
  { name: 'Jug', emoji: '🫗', value: 6 },
  { name: 'Mug', emoji: '☕', value: 4 },
  { name: 'Glass', emoji: '🥛', value: 3 },
  { name: 'Cup', emoji: '🍵', value: 2.5 },
  { name: 'Egg Cup', emoji: '🥤', value: 1.5 },
  { name: 'Spoon', emoji: '🥄', value: 0.5 },
  { name: 'Bottle', emoji: '🍶', value: 5 },
  { name: 'Bucket', emoji: '🪣', value: 9 },
];

const LENGTH_ITEMS: KitchenItem[] = [
  { name: 'Rolling Pin', emoji: '🪈', value: 9 },
  { name: 'Baguette', emoji: '🥖', value: 8 },
  { name: 'Cucumber', emoji: '🥒', value: 6 },
  { name: 'Carrot', emoji: '🥕', value: 5 },
  { name: 'Banana', emoji: '🍌', value: 4 },
  { name: 'Fork', emoji: '🍴', value: 3.5 },
  { name: 'Spoon', emoji: '🥄', value: 3 },
  { name: 'Cookie', emoji: '🍪', value: 1.5 },
  { name: 'Corn', emoji: '🌽', value: 5.5 },
  { name: 'Celery', emoji: '🥬', value: 7 },
];

const DURATION_ITEMS: KitchenItem[] = [
  { name: 'Bake a Cake', emoji: '🎂', value: 10 },
  { name: 'Roast Chicken', emoji: '🍗', value: 9 },
  { name: 'Cook Pasta', emoji: '🍝', value: 6 },
  { name: 'Boil an Egg', emoji: '🥚', value: 5 },
  { name: 'Make Toast', emoji: '🍞', value: 3 },
  { name: 'Heat Soup', emoji: '🍜', value: 4 },
  { name: 'Pop Popcorn', emoji: '🍿', value: 2 },
  { name: 'Melt Butter', emoji: '🧈', value: 1.5 },
  { name: 'Boil Water', emoji: '💧', value: 3.5 },
  { name: 'Make a Pizza', emoji: '🍕', value: 8 },
];

const RECIPE_SETS: RecipeIngredient[][] = [
  [
    { name: 'Flour', emoji: '🌾', collected: false },
    { name: 'Egg', emoji: '🥚', collected: false },
    { name: 'Milk', emoji: '🥛', collected: false },
    { name: 'Sugar', emoji: '🍬', collected: false },
  ],
  [
    { name: 'Tomato', emoji: '🍅', collected: false },
    { name: 'Cheese', emoji: '🧀', collected: false },
    { name: 'Dough', emoji: '🫓', collected: false },
    { name: 'Basil', emoji: '🌿', collected: false },
    { name: 'Olive Oil', emoji: '🫒', collected: false },
  ],
  [
    { name: 'Chocolate', emoji: '🍫', collected: false },
    { name: 'Cream', emoji: '🍦', collected: false },
    { name: 'Strawberry', emoji: '🍓', collected: false },
    { name: 'Cookie', emoji: '🍪', collected: false },
    { name: 'Sprinkles', emoji: '✨', collected: false },
    { name: 'Cherry', emoji: '🍒', collected: false },
  ],
];

const RECIPE_NAMES = ['Pancakes', 'Pizza', 'Sundae', 'Cupcakes', 'Soup', 'Pie'];

// ── Helpers ────────────────────────────────────────────────────────────────────

let particleIdCounter = 0;
const nextParticleId = (): number => ++particleIdCounter;

function pickTwo(items: KitchenItem[], minDiff: number): [KitchenItem, KitchenItem] {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  for (let i = 0; i < shuffled.length; i++) {
    for (let j = i + 1; j < shuffled.length; j++) {
      if (Math.abs(shuffled[i].value - shuffled[j].value) >= minDiff) {
        return Math.random() > 0.5
          ? [shuffled[i], shuffled[j]]
          : [shuffled[j], shuffled[i]];
      }
    }
  }
  return [shuffled[0], shuffled[1]];
}

function generateRound(level: number, forcedType?: MeasurementType): RoundData {
  const types: MeasurementType[] = ['mass', 'capacity', 'length', 'duration'];
  const type = forcedType || types[Math.floor(Math.random() * types.length)];

  // Difficulty scaling: lower minDiff at higher levels
  const minDiff = level <= 3 ? 3 : level <= 6 ? 1.5 : 0.5;

  let itemA: KitchenItem, itemB: KitchenItem;
  let question: string;
  let comparison: Comparison;

  switch (type) {
    case 'mass': {
      [itemA, itemB] = pickTwo(MASS_ITEMS, minDiff);
      const askHeavier = Math.random() > 0.3;
      if (askHeavier) {
        question = 'Which is HEAVIER?';
        comparison = 'heavier';
      } else {
        question = 'Which is LIGHTER?';
        comparison = 'lighter';
      }
      break;
    }
    case 'capacity': {
      [itemA, itemB] = pickTwo(CAPACITY_ITEMS, minDiff);
      const askMore = Math.random() > 0.3;
      if (askMore) {
        question = 'Which holds MORE?';
        comparison = 'more';
      } else {
        question = 'Which holds LESS?';
        comparison = 'less';
      }
      break;
    }
    case 'length': {
      [itemA, itemB] = pickTwo(LENGTH_ITEMS, minDiff);
      const askLonger = Math.random() > 0.3;
      if (askLonger) {
        question = 'Which is LONGER?';
        comparison = 'longer';
      } else {
        question = 'Which is SHORTER?';
        comparison = 'shorter';
      }
      break;
    }
    case 'duration': {
      [itemA, itemB] = pickTwo(DURATION_ITEMS, minDiff);
      const askLongerTime = Math.random() > 0.3;
      if (askLongerTime) {
        question = 'Which takes LONGER?';
        comparison = 'longerTime';
      } else {
        question = 'Which is QUICKER?';
        comparison = 'quickerTime';
      }
      break;
    }
  }

  const wantsHigher = ['heavier', 'more', 'longer', 'longerTime'].includes(comparison);
  const correctAnswer: 'A' | 'B' = wantsHigher
    ? (itemA.value >= itemB.value ? 'A' : 'B')
    : (itemA.value <= itemB.value ? 'A' : 'B');

  return { type, itemA, itemB, question, comparison, correctAnswer };
}

function getMeasurementLabel(type: MeasurementType): string {
  switch (type) {
    case 'mass': return 'Mass';
    case 'capacity': return 'Capacity';
    case 'length': return 'Length';
    case 'duration': return 'Duration';
  }
}

function getMeasurementIcon(type: MeasurementType): string {
  switch (type) {
    case 'mass': return '⚖️';
    case 'capacity': return '🫗';
    case 'length': return '📏';
    case 'duration': return '⏱️';
  }
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeasurementKitchen({ onExit }: MeasurementKitchenProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [round, setRound] = useState<RoundData | null>(null);
  const [roundIndex, setRoundIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [recipe, setRecipe] = useState<RecipeIngredient[]>([]);
  const [recipeName, setRecipeName] = useState<string>('Pancakes');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shakeScreen, setShakeScreen] = useState<boolean>(false);

  // Animation state for demonstrations
  const [scaleAngle, setScaleAngle] = useState<number>(0);
  const [scaleTargetAngle, setScaleTargetAngle] = useState<number>(0);
  const [liquidFillA, setLiquidFillA] = useState<number>(0);
  const [liquidFillB, setLiquidFillB] = useState<number>(0);
  const [rulerExtendA, setRulerExtendA] = useState<number>(0);
  const [rulerExtendB, setRulerExtendB] = useState<number>(0);
  const [clockAngleA, setClockAngleA] = useState<number>(0);
  const [clockAngleB, setClockAngleB] = useState<number>(0);
  const [demoPhase, setDemoPhase] = useState<number>(0);
  const [introFloat, setIntroFloat] = useState<number>(0);

  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Particle system ────────────────────────────────────────────────────────

  const spawnParticles = useCallback((type: Particle['type'], x: number, y: number, count: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const life = 60 + Math.random() * 120;
      newParticles.push({
        id: nextParticleId(),
        x: x + (Math.random() - 0.5) * 60,
        y: y + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 2,
        vy: type === 'steam' ? -(0.5 + Math.random() * 1.5) : (Math.random() - 0.5) * 3,
        size: type === 'sparkle' ? 3 + Math.random() * 5 : type === 'celebration' ? 4 + Math.random() * 8 : 2 + Math.random() * 4,
        opacity: 0.6 + Math.random() * 0.4,
        life,
        maxLife: life,
        type,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ── Level initialization ───────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    const recipeSet = RECIPE_SETS[(lvl - 1) % RECIPE_SETS.length];
    const name = RECIPE_NAMES[(lvl - 1) % RECIPE_NAMES.length];
    setRecipe(recipeSet.map(r => ({ ...r, collected: false })));
    setRecipeName(name);
    setRoundIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setDemoPhase(0);

    // For levels 1-3, force a single measurement type
    const types: MeasurementType[] = ['mass', 'capacity', 'length', 'duration'];
    const forcedType = lvl <= 3 ? types[(lvl - 1) % types.length] : undefined;
    setRound(generateRound(lvl, forcedType));
  }, []);

  const startGame = useCallback(() => {
    setLevel(1);
    setScore(0);
    setStreak(0);
    setGameScreen('playing');
    initLevel(1);
  }, [initLevel]);

  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameScreen('playing');
    initLevel(newLevel);
  }, [level, initLevel]);

  // ── Answer handling ────────────────────────────────────────────────────────

  const handleAnswer = useCallback((answer: 'A' | 'B') => {
    if (selectedAnswer !== null || !round) return;
    setSelectedAnswer(answer);
    const correct = answer === round.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 10 + streak * 5);
      setStreak(prev => prev + 1);
      // Collect next recipe ingredient
      setRecipe(prev => {
        const next = [...prev];
        const uncollected = next.findIndex(r => !r.collected);
        if (uncollected >= 0) next[uncollected] = { ...next[uncollected], collected: true };
        return next;
      });
      spawnParticles('celebration', 400, 300, 15);
    } else {
      setStreak(0);
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 500);
    }

    // Start demonstration phase
    setGameScreen('demo');
    setDemoPhase(1);

    // Reset demo animation values
    setScaleAngle(0);
    setScaleTargetAngle(0);
    setLiquidFillA(0);
    setLiquidFillB(0);
    setRulerExtendA(0);
    setRulerExtendB(0);
    setClockAngleA(0);
    setClockAngleB(0);
  }, [selectedAnswer, round, streak, spawnParticles]);

  const advanceRound = useCallback(() => {
    if (!round) return;

    // Check if recipe is complete
    const allCollected = recipe.every(r => r.collected);
    if (allCollected) {
      setGameScreen('levelComplete');
      spawnParticles('celebration', 400, 300, 30);
      return;
    }

    const newIndex = roundIndex + 1;
    setRoundIndex(newIndex);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setDemoPhase(0);
    setGameScreen('playing');

    // For levels 1-3, force a single type per level
    const types: MeasurementType[] = ['mass', 'capacity', 'length', 'duration'];
    const forcedType = level <= 3 ? types[(level - 1) % types.length] : undefined;
    setRound(generateRound(level, forcedType));
  }, [round, roundIndex, recipe, level, spawnParticles]);

  // ── Animation loop ─────────────────────────────────────────────────────────

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min((timestamp - lastTimeRef.current) / 16.67, 3);
      lastTimeRef.current = timestamp;

      // Intro float animation
      if (gameScreen === 'intro') {
        setIntroFloat(prev => prev + 0.02 * dt);
      }

      // Update particles
      setParticles(prev => {
        if (prev.length === 0) return prev;
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx * dt,
            y: p.y + p.vy * dt,
            life: p.life - dt,
            opacity: Math.max(0, (p.life / p.maxLife) * p.opacity),
          }))
          .filter(p => p.life > 0);
        return updated;
      });

      // Demo animations
      if (gameScreen === 'demo' && round && demoPhase > 0) {
        const valA = round.itemA.value;
        const valB = round.itemB.value;

        switch (round.type) {
          case 'mass': {
            // Balance scale tips toward heavier side
            const target = valA > valB ? -18 : valA < valB ? 18 : 0;
            setScaleTargetAngle(target);
            setScaleAngle(prev => {
              const diff = target - prev;
              // Spring physics: wobble then settle
              const spring = 0.06;
              const damping = 0.92;
              const velocity = diff * spring;
              return prev + velocity * dt * damping + Math.sin(timestamp * 0.008) * Math.max(0, 3 - demoPhase * 0.5);
            });
            break;
          }
          case 'capacity': {
            // Fill containers at rate proportional to value
            const maxFill = 0.95;
            const fillRate = 0.012;
            setLiquidFillA(prev => Math.min(maxFill, prev + fillRate * (valA / 10) * dt));
            setLiquidFillB(prev => Math.min(maxFill, prev + fillRate * (valB / 10) * dt));
            break;
          }
          case 'length': {
            // Extend rulers proportional to value
            const extendRate = 0.015;
            setRulerExtendA(prev => Math.min(1, prev + extendRate * (valA / 10) * dt));
            setRulerExtendB(prev => Math.min(1, prev + extendRate * (valB / 10) * dt));
            break;
          }
          case 'duration': {
            // Clock hands sweep proportional to value
            const clockRate = 2.0;
            setClockAngleA(prev => Math.min(360 * (valA / 10), prev + clockRate * (valA / 10) * dt));
            setClockAngleB(prev => Math.min(360 * (valB / 10), prev + clockRate * (valB / 10) * dt));
            break;
          }
        }

        setDemoPhase(prev => prev + 0.02 * dt);
      }

      // Background steam particles when playing
      if ((gameScreen === 'playing' || gameScreen === 'demo') && Math.random() < 0.03) {
        setParticles(prev => {
          if (prev.length > 60) return prev;
          const life = 80 + Math.random() * 80;
          return [...prev, {
            id: nextParticleId(),
            x: 50 + Math.random() * 100,
            y: 350 + Math.random() * 50,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -(0.3 + Math.random() * 0.8),
            size: 3 + Math.random() * 6,
            opacity: 0.15 + Math.random() * 0.15,
            life,
            maxLife: life,
            type: 'steam' as const,
          }];
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameScreen, round, demoPhase]);

  // ── Render helpers ─────────────────────────────────────────────────────────

  const renderBalanceScale = () => {
    if (!round) return null;
    const angle = scaleAngle;

    return (
      <div className="mk-demo-visual">
        <svg viewBox="0 0 400 280" className="mk-scale-svg">
          {/* Base */}
          <rect x="175" y="240" width="50" height="20" rx="4" fill="#8B6914" />
          <rect x="190" y="140" width="20" height="100" rx="3" fill="#A67C1E" />
          {/* Fulcrum triangle */}
          <polygon points="200,125 185,140 215,140" fill="#C4951A" />

          {/* Beam */}
          <g transform={`rotate(${angle}, 200, 125)`}>
            <rect x="40" y="120" width="320" height="10" rx="5" fill="#D4A530" />

            {/* Left pan */}
            <g>
              {/* Chains */}
              <line x1="80" y1="130" x2="60" y2="170" stroke="#A67C1E" strokeWidth="2" />
              <line x1="80" y1="130" x2="100" y2="170" stroke="#A67C1E" strokeWidth="2" />
              {/* Pan */}
              <ellipse cx="80" cy="178" rx="40" ry="10" fill="#B8860B" />
              <ellipse cx="80" cy="175" rx="40" ry="10" fill="#DAA520" />
              {/* Item emoji positioned above pan */}
              <text x="80" y="165" textAnchor="middle" fontSize="36" dominantBaseline="central">
                {round.itemA.emoji}
              </text>
            </g>

            {/* Right pan */}
            <g>
              <line x1="320" y1="130" x2="300" y2="170" stroke="#A67C1E" strokeWidth="2" />
              <line x1="320" y1="130" x2="340" y2="170" stroke="#A67C1E" strokeWidth="2" />
              <ellipse cx="320" cy="178" rx="40" ry="10" fill="#B8860B" />
              <ellipse cx="320" cy="175" rx="40" ry="10" fill="#DAA520" />
              <text x="320" y="165" textAnchor="middle" fontSize="36" dominantBaseline="central">
                {round.itemB.emoji}
              </text>
            </g>
          </g>
        </svg>
      </div>
    );
  };

  const renderLiquidContainers = () => {
    if (!round) return null;
    const waveOffset = Date.now() * 0.003;

    return (
      <div className="mk-demo-visual mk-liquid-demo">
        <div className="mk-liquid-pair">
          {/* Container A */}
          <div className="mk-container-wrap">
            <svg viewBox="0 0 120 160" className="mk-container-svg">
              {/* Glass outline */}
              <path d="M25,20 L15,140 Q15,150 30,150 L90,150 Q105,150 105,140 L95,20 Z"
                fill="rgba(200,230,255,0.15)" stroke="rgba(200,230,255,0.4)" strokeWidth="2" />
              {/* Liquid fill */}
              <clipPath id="containerClipA">
                <path d="M25,20 L15,140 Q15,150 30,150 L90,150 Q105,150 105,140 L95,20 Z" />
              </clipPath>
              <g clipPath="url(#containerClipA)">
                <rect x="10" y={150 - liquidFillA * 130} width="110" height={liquidFillA * 130 + 5}
                  fill="url(#liquidGradA)" />
                {/* Wave surface */}
                <path
                  d={`M10,${150 - liquidFillA * 130} Q35,${148 - liquidFillA * 130 + Math.sin(waveOffset) * 4} 60,${150 - liquidFillA * 130} Q85,${148 - liquidFillA * 130 - Math.sin(waveOffset) * 4} 110,${150 - liquidFillA * 130}`}
                  fill="rgba(100,180,255,0.3)" />
                {/* Bubbles */}
                {liquidFillA > 0.1 && <>
                  <circle cx={40 + Math.sin(waveOffset * 2) * 5} cy={150 - liquidFillA * 60} r="3" fill="rgba(255,255,255,0.3)" />
                  <circle cx={70 + Math.cos(waveOffset * 1.5) * 8} cy={150 - liquidFillA * 80} r="2" fill="rgba(255,255,255,0.25)" />
                  <circle cx={55 + Math.sin(waveOffset * 3) * 4} cy={150 - liquidFillA * 40} r="2.5" fill="rgba(255,255,255,0.2)" />
                </>}
              </g>
              <defs>
                <linearGradient id="liquidGradA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              {/* Shine */}
              <path d="M30,25 L28,100" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="mk-container-label">{round.itemA.emoji} {round.itemA.name}</div>
          </div>

          {/* Container B */}
          <div className="mk-container-wrap">
            <svg viewBox="0 0 120 160" className="mk-container-svg">
              <path d="M25,20 L15,140 Q15,150 30,150 L90,150 Q105,150 105,140 L95,20 Z"
                fill="rgba(200,230,255,0.15)" stroke="rgba(200,230,255,0.4)" strokeWidth="2" />
              <clipPath id="containerClipB">
                <path d="M25,20 L15,140 Q15,150 30,150 L90,150 Q105,150 105,140 L95,20 Z" />
              </clipPath>
              <g clipPath="url(#containerClipB)">
                <rect x="10" y={150 - liquidFillB * 130} width="110" height={liquidFillB * 130 + 5}
                  fill="url(#liquidGradB)" />
                <path
                  d={`M10,${150 - liquidFillB * 130} Q35,${148 - liquidFillB * 130 - Math.sin(waveOffset + 1) * 4} 60,${150 - liquidFillB * 130} Q85,${148 - liquidFillB * 130 + Math.sin(waveOffset + 1) * 4} 110,${150 - liquidFillB * 130}`}
                  fill="rgba(255,180,100,0.3)" />
                {liquidFillB > 0.1 && <>
                  <circle cx={45 + Math.sin(waveOffset * 2 + 1) * 5} cy={150 - liquidFillB * 60} r="3" fill="rgba(255,255,255,0.3)" />
                  <circle cx={75 + Math.cos(waveOffset * 1.5 + 1) * 8} cy={150 - liquidFillB * 80} r="2" fill="rgba(255,255,255,0.25)" />
                </>}
              </g>
              <defs>
                <linearGradient id="liquidGradB" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
              <path d="M30,25 L28,100" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="mk-container-label">{round.itemB.emoji} {round.itemB.name}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderRulerMeasure = () => {
    if (!round) return null;
    const maxWidth = 280;
    const widthA = rulerExtendA * maxWidth * (round.itemA.value / 10);
    const widthB = rulerExtendB * maxWidth * (round.itemB.value / 10);

    return (
      <div className="mk-demo-visual mk-ruler-demo">
        <svg viewBox="0 0 400 220" className="mk-ruler-svg">
          {/* Ruler background */}
          <rect x="50" y="30" width="320" height="25" rx="3" fill="#F5DEB3" stroke="#D2B48C" strokeWidth="1" />
          {/* Tick marks */}
          {Array.from({ length: 17 }).map((_, i) => (
            <g key={i}>
              <line x1={50 + i * 20} y1="30" x2={50 + i * 20} y2={i % 5 === 0 ? 55 : 45} stroke="#8B7355" strokeWidth={i % 5 === 0 ? 1.5 : 0.8} />
              {i % 5 === 0 && <text x={50 + i * 20} y="68" textAnchor="middle" fontSize="10" fill="#8B7355">{i}</text>}
            </g>
          ))}

          {/* Item A bar */}
          <g>
            <text x="25" y="115" textAnchor="middle" fontSize="28">{round.itemA.emoji}</text>
            <rect x="50" y="100" width={widthA} height="20" rx="6" fill="url(#barGradA)" opacity="0.9">
              <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite" />
            </rect>
            {widthA > 10 && (
              <text x={55 + widthA} y="115" fontSize="12" fontWeight="bold" fill="#3B82F6">
                {round.itemA.name}
              </text>
            )}
          </g>

          {/* Item B bar */}
          <g>
            <text x="25" y="165" textAnchor="middle" fontSize="28">{round.itemB.emoji}</text>
            <rect x="50" y="150" width={widthB} height="20" rx="6" fill="url(#barGradB)" opacity="0.9">
              <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </rect>
            {widthB > 10 && (
              <text x={55 + widthB} y="165" fontSize="12" fontWeight="bold" fill="#F97316">
                {round.itemB.name}
              </text>
            )}
          </g>

          <defs>
            <linearGradient id="barGradA" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="barGradB" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  const renderClockTimer = () => {
    if (!round) return null;

    const renderClock = (angle: number, color: string, item: KitchenItem) => (
      <div className="mk-clock-wrap">
        <svg viewBox="0 0 120 120" className="mk-clock-svg">
          {/* Clock face */}
          <circle cx="60" cy="60" r="55" fill="#1e293b" stroke={color} strokeWidth="3" />
          <circle cx="60" cy="60" r="50" fill="#0f172a" />
          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * Math.PI / 180;
            const x1 = 60 + Math.cos(a) * 42;
            const y1 = 60 + Math.sin(a) * 42;
            const x2 = 60 + Math.cos(a) * 48;
            const y2 = 60 + Math.sin(a) * 48;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748b" strokeWidth={i % 3 === 0 ? 2.5 : 1} />;
          })}
          {/* Sweep arc to show elapsed time */}
          {angle > 0 && (() => {
            const startA = -90;
            const endA = startA + angle;
            const rad1 = (startA * Math.PI) / 180;
            const rad2 = (endA * Math.PI) / 180;
            const x1 = 60 + Math.cos(rad1) * 38;
            const y1 = 60 + Math.sin(rad1) * 38;
            const x2 = 60 + Math.cos(rad2) * 38;
            const y2 = 60 + Math.sin(rad2) * 38;
            const largeArc = angle > 180 ? 1 : 0;
            return (
              <path
                d={`M60,60 L${x1},${y1} A38,38 0 ${largeArc},1 ${x2},${y2} Z`}
                fill={color}
                opacity="0.2"
              />
            );
          })()}
          {/* Hand */}
          {(() => {
            const handAngle = (angle - 90) * Math.PI / 180;
            const hx = 60 + Math.cos(handAngle) * 38;
            const hy = 60 + Math.sin(handAngle) * 38;
            return <line x1="60" y1="60" x2={hx} y2={hy} stroke={color} strokeWidth="3" strokeLinecap="round" />;
          })()}
          {/* Center dot */}
          <circle cx="60" cy="60" r="4" fill={color} />
        </svg>
        <div className="mk-clock-label" style={{ color }}>{item.emoji} {item.name}</div>
      </div>
    );

    return (
      <div className="mk-demo-visual mk-clock-demo">
        <div className="mk-clock-pair">
          {renderClock(clockAngleA, '#60A5FA', round.itemA)}
          {renderClock(clockAngleB, '#FB923C', round.itemB)}
        </div>
      </div>
    );
  };

  const renderDemoVisual = () => {
    if (!round) return null;
    switch (round.type) {
      case 'mass': return renderBalanceScale();
      case 'capacity': return renderLiquidContainers();
      case 'length': return renderRulerMeasure();
      case 'duration': return renderClockTimer();
    }
  };

  // ── Screen renders ─────────────────────────────────────────────────────────

  if (gameScreen === 'intro') {
    const floatY = Math.sin(introFloat) * 8;
    const floatY2 = Math.sin(introFloat * 1.3 + 1) * 6;
    const floatY3 = Math.sin(introFloat * 0.8 + 2) * 10;

    return (
      <div className="mk-root">
        <style>{styles}</style>
        <div className="mk-intro">
          <div className="mk-intro-bg">
            {/* Animated steam wisps */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="mk-steam-wisp" style={{
                left: `${10 + Math.random() * 80}%`,
                bottom: `${Math.random() * 30}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                opacity: 0.1 + Math.random() * 0.15,
              }} />
            ))}
            {/* Floating kitchen items */}
            <div className="mk-float-item" style={{ left: '10%', top: '15%', transform: `translateY(${floatY}px)` }}>🍳</div>
            <div className="mk-float-item" style={{ left: '85%', top: '20%', transform: `translateY(${floatY2}px)` }}>🧁</div>
            <div className="mk-float-item" style={{ left: '75%', top: '70%', transform: `translateY(${floatY3}px)` }}>🥄</div>
            <div className="mk-float-item" style={{ left: '15%', top: '75%', transform: `translateY(${floatY2}px)` }}>⚖️</div>
            <div className="mk-float-item" style={{ left: '50%', top: '80%', transform: `translateY(${floatY}px)` }}>📏</div>
            <div className="mk-float-item" style={{ left: '90%', top: '50%', transform: `translateY(${floatY3}px)` }}>⏱️</div>
          </div>
          <div className="mk-intro-content">
            <div className="mk-logo-row">
              <span className="mk-logo-icon" style={{ transform: `translateY(${floatY}px)` }}>👨‍🍳</span>
              <h1 className="mk-title">Measurement Kitchen</h1>
              <span className="mk-logo-icon" style={{ transform: `translateY(${floatY2}px)` }}>🍰</span>
            </div>
            <p className="mk-tagline">Compare, Measure & Cook!</p>
            <div className="mk-instructions-card">
              <h3>How to Play</h3>
              <div className="mk-instruction">
                <div className="mk-inst-icons">
                  <span>⚖️</span><span>🫗</span><span>📏</span><span>⏱️</span>
                </div>
                <p>Compare items by <span className="mk-hl mass">mass</span>, <span className="mk-hl capacity">capacity</span>, <span className="mk-hl length">length</span> and <span className="mk-hl duration">duration</span></p>
              </div>
              <div className="mk-instruction">
                <div className="mk-inst-icons">
                  <span>🍉</span><span className="mk-vs">vs</span><span>🍇</span>
                </div>
                <p><strong>Tap</strong> the correct answer to each measurement question!</p>
              </div>
              <div className="mk-instruction">
                <div className="mk-inst-icons">
                  <span>🥚</span><span>🥛</span><span>🌾</span><span className="mk-arrow-icon">→</span><span>🎂</span>
                </div>
                <p>Collect ingredients to <span className="mk-hl recipe">complete a recipe</span> each level!</p>
              </div>
            </div>
            <button className="mk-start-btn" onClick={startGame}>
              <span>🍳</span>
              Start Cooking
              <span>🍳</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameScreen === 'levelComplete') {
    return (
      <div className="mk-root">
        <style>{styles}</style>
        <div className="mk-level-complete">
          <div className="mk-complete-bg">
            {recipe.map((item, i) => (
              <div key={i} className="mk-float-celebrate" style={{ left: `${15 + i * 16}%`, animationDelay: `${i * 0.2}s` }}>
                {item.emoji}
              </div>
            ))}
          </div>
          <div className="mk-complete-content">
            <h1 className="mk-complete-title">Level {level} Complete!</h1>
            <div className="mk-recipe-done">
              <div className="mk-recipe-done-icon">🎂</div>
              <p className="mk-recipe-done-text">You made {recipeName}!</p>
              <div className="mk-recipe-done-items">
                {recipe.map((item, i) => (
                  <span key={i} className="mk-recipe-done-emoji">{item.emoji}</span>
                ))}
              </div>
            </div>
            <div className="mk-score-card">
              <div className="mk-score-item">
                <span className="mk-score-label">Score</span>
                <span className="mk-score-value">{score}</span>
              </div>
              <div className="mk-score-item">
                <span className="mk-score-label">Best Streak</span>
                <span className="mk-score-value">{streak}</span>
              </div>
            </div>
            <div className="mk-complete-buttons">
              <button className="mk-next-btn" onClick={nextLevel}>Level {level + 1} →</button>
              <button className="mk-menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playing / Demo screens
  return (
    <div className="mk-root" ref={containerRef}>
      <style>{styles}</style>
      <div className={`mk-game ${shakeScreen ? 'mk-shake' : ''}`}>
        {/* Header */}
        <div className="mk-header">
          <div className="mk-header-left">
            <button className="mk-back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>←</button>
            <div className="mk-level-badge">Level {level}</div>
          </div>
          <div className="mk-header-center">
            {round && (
              <div className="mk-type-badge">
                <span>{getMeasurementIcon(round.type)}</span>
                <span>{getMeasurementLabel(round.type)}</span>
              </div>
            )}
          </div>
          <div className="mk-header-right">
            <div className="mk-score-badge">
              <span className="mk-star">⭐</span>
              <span>{score}</span>
            </div>
            {streak > 1 && (
              <div className="mk-streak-badge">
                🔥 {streak}
              </div>
            )}
          </div>
        </div>

        {/* Recipe progress */}
        <div className="mk-recipe-bar">
          <div className="mk-recipe-label">📋 {recipeName}:</div>
          <div className="mk-recipe-items">
            {recipe.map((item, i) => (
              <div key={i} className={`mk-recipe-slot ${item.collected ? 'mk-collected' : ''}`}>
                <span className="mk-recipe-emoji">{item.emoji}</span>
                {item.collected && <span className="mk-recipe-check">✓</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Main game area */}
        <div className="mk-game-area">
          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} className={`mk-particle mk-particle-${p.type}`} style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity * (p.life / p.maxLife),
            }} />
          ))}

          {/* Kitchen background decorations */}
          <div className="mk-kitchen-bg">
            <div className="mk-shelf" />
            <div className="mk-pot">🍲</div>
          </div>

          {round && gameScreen === 'playing' && (
            <>
              {/* Question */}
              <div className="mk-question-area">
                <div className="mk-question-bubble">
                  <span className="mk-question-chef">👨‍🍳</span>
                  <div className="mk-question-text">{round.question}</div>
                </div>
              </div>

              {/* Two item choices */}
              <div className="mk-choices">
                <button
                  className={`mk-choice mk-choice-a ${selectedAnswer === 'A' ? (isCorrect ? 'mk-correct' : 'mk-wrong') : ''}`}
                  onClick={() => handleAnswer('A')}
                  disabled={selectedAnswer !== null}
                >
                  <div className="mk-choice-emoji">{round.itemA.emoji}</div>
                  <div className="mk-choice-name">{round.itemA.name}</div>
                  <div className="mk-choice-glow" />
                </button>

                <div className="mk-vs-divider">
                  <span className="mk-vs-text">VS</span>
                </div>

                <button
                  className={`mk-choice mk-choice-b ${selectedAnswer === 'B' ? (isCorrect ? 'mk-correct' : 'mk-wrong') : ''}`}
                  onClick={() => handleAnswer('B')}
                  disabled={selectedAnswer !== null}
                >
                  <div className="mk-choice-emoji">{round.itemB.emoji}</div>
                  <div className="mk-choice-name">{round.itemB.name}</div>
                  <div className="mk-choice-glow" />
                </button>
              </div>
            </>
          )}

          {round && gameScreen === 'demo' && (
            <div className="mk-demo-area">
              {/* Result banner */}
              <div className={`mk-result-banner ${isCorrect ? 'mk-result-correct' : 'mk-result-wrong'}`}>
                <span className="mk-result-icon">{isCorrect ? '🎉' : '😅'}</span>
                <span className="mk-result-text">{isCorrect ? 'Correct!' : 'Not quite!'}</span>
              </div>

              {/* Animated demonstration */}
              {renderDemoVisual()}

              {/* Explanation */}
              <div className="mk-explanation">
                {(() => {
                  const winner = round.itemA.value > round.itemB.value ? round.itemA : round.itemB;
                  const loser = round.itemA.value > round.itemB.value ? round.itemB : round.itemA;
                  switch (round.type) {
                    case 'mass':
                      return <p>{winner.emoji} <strong>{winner.name}</strong> is heavier than {loser.emoji} {loser.name}</p>;
                    case 'capacity':
                      return <p>{winner.emoji} <strong>{winner.name}</strong> holds more than {loser.emoji} {loser.name}</p>;
                    case 'length':
                      return <p>{winner.emoji} <strong>{winner.name}</strong> is longer than {loser.emoji} {loser.name}</p>;
                    case 'duration':
                      return <p>{winner.emoji} <strong>{winner.name}</strong> takes longer than {loser.emoji} {loser.name}</p>;
                  }
                })()}
              </div>

              {/* Continue button */}
              <button className="mk-continue-btn" onClick={advanceRound}>
                {recipe.every(r => r.collected) ? 'See Results →' : 'Next Question →'}
              </button>
            </div>
          )}
        </div>

        {/* Bottom hints */}
        <div className="mk-bottom-bar">
          <div className="mk-hint-row">
            <span className="mk-hint">⚖️ Mass</span>
            <span className="mk-hint">🫗 Capacity</span>
            <span className="mk-hint">📏 Length</span>
            <span className="mk-hint">⏱️ Duration</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .mk-root {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #3E2723 0%, #4E342E 30%, #5D4037 60%, #6D4C41 100%);
  }

  /* ── Kitchen background texture ───────────────────────────────────────── */

  .mk-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 39px,
        rgba(255,255,255,0.03) 39px,
        rgba(255,255,255,0.03) 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 39px,
        rgba(255,255,255,0.03) 39px,
        rgba(255,255,255,0.03) 40px
      );
    pointer-events: none;
    z-index: 0;
  }

  /* ── Intro screen ─────────────────────────────────────────────────────── */

  .mk-intro {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .mk-intro-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .mk-steam-wisp {
    position: absolute;
    width: 40px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%);
    animation: mkSteamFloat 8s ease-in-out infinite;
    filter: blur(8px);
  }

  @keyframes mkSteamFloat {
    0% { transform: translateY(0) scale(1); opacity: 0; }
    20% { opacity: 0.3; }
    50% { transform: translateY(-80px) scale(1.5); opacity: 0.2; }
    100% { transform: translateY(-160px) scale(2); opacity: 0; }
  }

  .mk-float-item {
    position: absolute;
    font-size: 2.5rem;
    opacity: 0.3;
    transition: transform 0.3s ease;
    pointer-events: none;
  }

  .mk-intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
  }

  .mk-logo-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .mk-logo-icon {
    font-size: 2.5rem;
    transition: transform 0.3s ease;
  }

  .mk-title {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FFCC02, #FF9800, #FF5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mk-tagline {
    color: #BCAAA4;
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }

  .mk-instructions-card {
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(12px);
  }

  .mk-instructions-card h3 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .mk-instruction {
    margin-bottom: 1.2rem;
  }

  .mk-instruction:last-child { margin-bottom: 0; }

  .mk-inst-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }

  .mk-vs {
    font-size: 0.9rem;
    font-weight: 800;
    color: #FF9800;
  }

  .mk-arrow-icon {
    font-size: 1.2rem;
    color: #BCAAA4;
  }

  .mk-instruction p {
    color: #D7CCC8;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .mk-hl {
    font-weight: 700;
  }
  .mk-hl.mass { color: #FFC107; }
  .mk-hl.capacity { color: #29B6F6; }
  .mk-hl.length { color: #66BB6A; }
  .mk-hl.duration { color: #EF5350; }
  .mk-hl.recipe { color: #FF9800; }

  .mk-start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #FF9800, #F44336);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(244,67,54,0.4);
  }

  .mk-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(244,67,54,0.5);
  }

  /* ── Game screen ──────────────────────────────────────────────────────── */

  .mk-game {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.05s ease;
  }

  .mk-shake {
    animation: mkShake 0.4s ease;
  }

  @keyframes mkShake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-6px); }
    30% { transform: translateX(6px); }
    50% { transform: translateX(-4px); }
    70% { transform: translateX(4px); }
    90% { transform: translateX(-2px); }
  }

  /* Header */
  .mk-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1rem;
    background: rgba(0,0,0,0.5);
    z-index: 50;
    backdrop-filter: blur(8px);
  }

  .mk-header-left, .mk-header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .mk-back-btn {
    width: 38px;
    height: 38px;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .mk-back-btn:hover { background: rgba(255,255,255,0.2); }

  .mk-level-badge {
    padding: 0.4rem 0.9rem;
    background: linear-gradient(135deg, #FF9800, #F44336);
    border-radius: 20px;
    font-weight: 700;
    color: white;
    font-size: 0.9rem;
  }

  .mk-type-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1rem;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    color: white;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .mk-score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.9rem;
    background: rgba(251,191,36,0.2);
    border-radius: 20px;
    color: #FBBF24;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .mk-streak-badge {
    padding: 0.4rem 0.8rem;
    background: rgba(239,83,80,0.25);
    border-radius: 20px;
    color: #EF5350;
    font-weight: 700;
    font-size: 0.85rem;
    animation: mkPulse 1s ease-in-out infinite;
  }

  @keyframes mkPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  /* Recipe bar */
  .mk-recipe-bar {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 1rem;
    background: rgba(0,0,0,0.3);
    overflow-x: auto;
  }

  .mk-recipe-label {
    color: #BCAAA4;
    font-weight: 700;
    font-size: 0.85rem;
    white-space: nowrap;
  }

  .mk-recipe-items {
    display: flex;
    gap: 0.5rem;
  }

  .mk-recipe-slot {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    transition: all 0.4s ease;
  }

  .mk-recipe-slot.mk-collected {
    background: rgba(76,175,80,0.2);
    border-color: #4CAF50;
  }

  .mk-recipe-emoji {
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }

  .mk-collected .mk-recipe-emoji {
    transform: scale(1.1);
  }

  .mk-recipe-check {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 16px;
    height: 16px;
    background: #4CAF50;
    border-radius: 50%;
    color: white;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
  }

  /* Game area */
  .mk-game-area {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0.5rem;
  }

  /* Kitchen background decorations */
  .mk-kitchen-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .mk-shelf {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(180deg, #5D4037 0%, #795548 100%);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  .mk-pot {
    position: absolute;
    bottom: 10px;
    left: 20px;
    font-size: 2.5rem;
    opacity: 0.2;
  }

  /* Particles */
  .mk-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }

  .mk-particle-steam {
    background: radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%);
    filter: blur(3px);
  }

  .mk-particle-flour {
    background: radial-gradient(circle, rgba(255,248,225,0.6), transparent 70%);
  }

  .mk-particle-sparkle {
    background: radial-gradient(circle, rgba(255,215,0,0.8), transparent 60%);
  }

  .mk-particle-celebration {
    border-radius: 2px;
    animation: mkConfettiFall 1s ease forwards;
  }

  .mk-particle-celebration:nth-child(odd) { background: #FF9800; }
  .mk-particle-celebration:nth-child(even) { background: #4CAF50; }
  .mk-particle-celebration:nth-child(3n) { background: #2196F3; }
  .mk-particle-celebration:nth-child(4n) { background: #E91E63; }

  @keyframes mkConfettiFall {
    0% { transform: rotate(0deg) scale(1); }
    100% { transform: rotate(360deg) scale(0); }
  }

  /* Question area */
  .mk-question-area {
    position: relative;
    z-index: 10;
    margin-bottom: 1.5rem;
  }

  .mk-question-bubble {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.5rem;
    background: rgba(255,255,255,0.08);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 24px;
    backdrop-filter: blur(12px);
    animation: mkQuestionBounce 2s ease-in-out infinite;
  }

  @keyframes mkQuestionBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .mk-question-chef {
    font-size: 2rem;
  }

  .mk-question-text {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
    font-weight: 800;
    color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  /* Choices */
  .mk-choices {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
  }

  .mk-choice {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    padding: 1.5rem 1rem;
    background: rgba(255,255,255,0.07);
    border: 3px solid rgba(255,255,255,0.15);
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    font-family: 'Nunito', sans-serif;
    color: white;
  }

  .mk-choice:hover:not(:disabled) {
    transform: translateY(-4px) scale(1.03);
    border-color: rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.12);
  }

  .mk-choice:active:not(:disabled) {
    transform: scale(0.97);
  }

  .mk-choice:disabled {
    cursor: default;
  }

  .mk-choice-a:hover:not(:disabled) .mk-choice-glow {
    opacity: 1;
    background: radial-gradient(circle, rgba(96,165,250,0.15), transparent 70%);
  }

  .mk-choice-b:hover:not(:disabled) .mk-choice-glow {
    opacity: 1;
    background: radial-gradient(circle, rgba(251,146,60,0.15), transparent 70%);
  }

  .mk-choice-glow {
    position: absolute;
    inset: -20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .mk-choice.mk-correct {
    border-color: #4CAF50 !important;
    background: rgba(76,175,80,0.2) !important;
    animation: mkCorrectPop 0.5s ease;
  }

  @keyframes mkCorrectPop {
    0% { transform: scale(1); }
    30% { transform: scale(1.08); }
    60% { transform: scale(0.97); }
    100% { transform: scale(1); }
  }

  .mk-choice.mk-wrong {
    border-color: #EF5350 !important;
    background: rgba(239,83,80,0.2) !important;
    animation: mkWrongWobble 0.5s ease;
  }

  @keyframes mkWrongWobble {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  .mk-choice-emoji {
    font-size: clamp(3rem, 10vw, 4.5rem);
    transition: transform 0.3s ease;
    animation: mkItemIdle 3s ease-in-out infinite;
  }

  @keyframes mkItemIdle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .mk-choice-name {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    font-weight: 700;
    color: #D7CCC8;
  }

  .mk-vs-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .mk-vs-text {
    font-size: 1.2rem;
    font-weight: 900;
    color: #FF9800;
    text-shadow: 0 0 20px rgba(255,152,0,0.4);
    animation: mkVsBounce 1.5s ease-in-out infinite;
  }

  @keyframes mkVsBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }

  /* Demo area */
  .mk-demo-area {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    max-width: 500px;
    animation: mkDemoFadeIn 0.5s ease;
  }

  @keyframes mkDemoFadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .mk-result-banner {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1.5rem;
    border-radius: 30px;
    animation: mkBannerPop 0.4s ease;
  }

  @keyframes mkBannerPop {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); opacity: 1; }
  }

  .mk-result-correct {
    background: linear-gradient(135deg, rgba(76,175,80,0.3), rgba(129,199,132,0.2));
    border: 2px solid #4CAF50;
  }

  .mk-result-wrong {
    background: linear-gradient(135deg, rgba(239,83,80,0.3), rgba(229,115,115,0.2));
    border: 2px solid #EF5350;
  }

  .mk-result-icon { font-size: 1.5rem; }
  .mk-result-text { font-size: 1.2rem; font-weight: 800; color: white; }

  /* Demo visuals */
  .mk-demo-visual {
    width: 100%;
    max-width: 440px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 160px;
  }

  .mk-scale-svg {
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  /* Liquid demo */
  .mk-liquid-demo { padding: 0 1rem; }

  .mk-liquid-pair {
    display: flex;
    gap: 2rem;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
  }

  .mk-container-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  .mk-container-svg {
    width: 100px;
    height: 140px;
  }

  .mk-container-label {
    font-size: 0.8rem;
    font-weight: 700;
    color: #D7CCC8;
    text-align: center;
  }

  /* Ruler demo */
  .mk-ruler-demo { padding: 0 0.5rem; }

  .mk-ruler-svg {
    width: 100%;
    max-width: 420px;
    height: auto;
  }

  /* Clock demo */
  .mk-clock-demo { padding: 0 1rem; }

  .mk-clock-pair {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .mk-clock-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  .mk-clock-svg {
    width: 100px;
    height: 100px;
  }

  .mk-clock-label {
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
  }

  /* Explanation */
  .mk-explanation {
    padding: 0.6rem 1.2rem;
    background: rgba(255,255,255,0.06);
    border-radius: 16px;
    text-align: center;
  }

  .mk-explanation p {
    color: #D7CCC8;
    font-size: 1rem;
    line-height: 1.5;
  }

  .mk-explanation strong {
    color: white;
  }

  /* Continue button */
  .mk-continue-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #FF9800, #F44336);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(244,67,54,0.35);
  }

  .mk-continue-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(244,67,54,0.45);
  }

  /* Bottom bar */
  .mk-bottom-bar {
    padding: 0.6rem;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
  }

  .mk-hint-row {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    font-size: 0.75rem;
    color: #8D6E63;
  }

  .mk-hint {
    opacity: 0.7;
  }

  /* ── Level complete screen ────────────────────────────────────────────── */

  .mk-level-complete {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .mk-complete-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .mk-float-celebrate {
    position: absolute;
    top: 15%;
    font-size: 3.5rem;
    animation: mkCelebFloat 3s ease-in-out infinite;
  }

  @keyframes mkCelebFloat {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-25px) rotate(5deg); }
  }

  .mk-complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 500px;
  }

  .mk-complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: white;
    margin-bottom: 1.5rem;
  }

  .mk-recipe-done {
    margin-bottom: 1.5rem;
  }

  .mk-recipe-done-icon {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    animation: mkRecipeBounce 1s ease infinite;
  }

  @keyframes mkRecipeBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.05); }
  }

  .mk-recipe-done-text {
    color: #FFCC02;
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: 0.8rem;
  }

  .mk-recipe-done-items {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
  }

  .mk-recipe-done-emoji {
    font-size: 2rem;
    animation: mkIngredientPop 0.6s ease;
  }

  .mk-recipe-done-emoji:nth-child(2) { animation-delay: 0.1s; }
  .mk-recipe-done-emoji:nth-child(3) { animation-delay: 0.2s; }
  .mk-recipe-done-emoji:nth-child(4) { animation-delay: 0.3s; }
  .mk-recipe-done-emoji:nth-child(5) { animation-delay: 0.4s; }
  .mk-recipe-done-emoji:nth-child(6) { animation-delay: 0.5s; }

  @keyframes mkIngredientPop {
    0% { transform: scale(0) rotate(-20deg); }
    60% { transform: scale(1.2) rotate(5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .mk-score-card {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .mk-score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mk-score-label {
    font-size: 0.85rem;
    color: #8D6E63;
    margin-bottom: 0.3rem;
  }

  .mk-score-value {
    font-size: 2rem;
    font-weight: 900;
    color: white;
  }

  .mk-complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .mk-next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #FF9800, #F44336);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(244,67,54,0.4);
  }

  .mk-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(244,67,54,0.5);
  }

  .mk-menu-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #BCAAA4;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .mk-menu-btn:hover {
    border-color: rgba(255,255,255,0.4);
    color: white;
  }

  /* ── Responsive ───────────────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .mk-choices {
      flex-direction: column;
      gap: 0.8rem;
    }

    .mk-vs-divider {
      margin: -0.3rem 0;
    }

    .mk-choice {
      padding: 1rem 0.8rem;
    }

    .mk-choice-emoji {
      font-size: 3rem;
    }

    .mk-question-text {
      font-size: 1.1rem;
    }

    .mk-hint-row {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .mk-header-center {
      display: none;
    }

    .mk-liquid-pair, .mk-clock-pair {
      gap: 1rem;
    }

    .mk-container-svg {
      width: 80px;
      height: 110px;
    }

    .mk-clock-svg {
      width: 80px;
      height: 80px;
    }

    .mk-recipe-bar {
      padding: 0.5rem 0.8rem;
      gap: 0.5rem;
    }

    .mk-recipe-slot {
      width: 34px;
      height: 34px;
    }

    .mk-recipe-emoji {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 380px) {
    .mk-choice-emoji {
      font-size: 2.5rem;
    }

    .mk-choice-name {
      font-size: 0.8rem;
    }

    .mk-container-svg {
      width: 65px;
      height: 90px;
    }

    .mk-clock-svg {
      width: 65px;
      height: 65px;
    }
  }
`;
