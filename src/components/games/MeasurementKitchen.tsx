"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────

type MeasurementType = 'mass' | 'capacity' | 'length' | 'speed';
type GameScreen = 'intro' | 'playing' | 'result' | 'levelComplete';

interface KitchenItem {
  name: string;
  emoji: string;
  value: number;
}

interface Challenge {
  type: MeasurementType;
  itemA: KitchenItem;
  itemB: KitchenItem;
  question: string;
  correctAnswer: 'A' | 'B';
}

interface ScalePhysics {
  angle: number;
  velocity: number;
  targetAngle: number;
  settled: boolean;
  itemAPlaced: boolean;
  itemBPlaced: boolean;
  itemADropY: number;
  itemBDropY: number;
}

interface LiquidPhysics {
  fillA: number;
  fillB: number;
  pouringA: boolean;
  pouringB: boolean;
  waveA: number;
  waveB: number;
  donePouring: boolean;
}

interface LengthPhysics {
  wormPosA: number;
  wormPosB: number;
  wormDone: boolean;
  wormBounceA: number;
  wormBounceB: number;
}

interface SpeedPhysics {
  posA: number;
  posB: number;
  raceStarted: boolean;
  raceFinished: boolean;
  winnerDeclared: boolean;
  finishTimeA: number;
  finishTimeB: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  type: 'steam' | 'sparkle' | 'food' | 'confetti' | 'flour';
  rotation: number;
  rotSpeed: number;
  emoji?: string;
}

interface MeasurementKitchenProps {
  onExit?: () => void;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const MASS_ITEMS: KitchenItem[] = [
  { name: 'Watermelon', emoji: '🍉', value: 10 },
  { name: 'Pumpkin', emoji: '🎃', value: 9 },
  { name: 'Pineapple', emoji: '🍍', value: 7 },
  { name: 'Coconut', emoji: '🥥', value: 6 },
  { name: 'Apple', emoji: '🍎', value: 4 },
  { name: 'Orange', emoji: '🍊', value: 3.5 },
  { name: 'Lemon', emoji: '🍋', value: 2.5 },
  { name: 'Egg', emoji: '🥚', value: 1.5 },
  { name: 'Strawberry', emoji: '🍓', value: 0.8 },
  { name: 'Grape', emoji: '🍇', value: 0.5 },
  { name: 'Cherry', emoji: '🍒', value: 0.3 },
  { name: 'Blueberry', emoji: '🫐', value: 0.2 },
];

const CAPACITY_ITEMS: KitchenItem[] = [
  { name: 'Big Pot', emoji: '🍲', value: 10 },
  { name: 'Mixing Bowl', emoji: '🥣', value: 8 },
  { name: 'Bucket', emoji: '🪣', value: 9 },
  { name: 'Jug', emoji: '🫗', value: 6 },
  { name: 'Bottle', emoji: '🍶', value: 5 },
  { name: 'Mug', emoji: '☕', value: 4 },
  { name: 'Glass', emoji: '🥛', value: 3 },
  { name: 'Cup', emoji: '🍵', value: 2.5 },
  { name: 'Egg Cup', emoji: '🥤', value: 1.5 },
  { name: 'Spoon', emoji: '🥄', value: 0.5 },
];

const LENGTH_ITEMS: KitchenItem[] = [
  { name: 'Baguette', emoji: '🥖', value: 9 },
  { name: 'Celery', emoji: '🥬', value: 7.5 },
  { name: 'Cucumber', emoji: '🥒', value: 6 },
  { name: 'Corn', emoji: '🌽', value: 5.5 },
  { name: 'Carrot', emoji: '🥕', value: 5 },
  { name: 'Banana', emoji: '🍌', value: 4 },
  { name: 'Fork', emoji: '🍴', value: 3.5 },
  { name: 'Spoon', emoji: '🥄', value: 3 },
  { name: 'Cookie', emoji: '🍪', value: 1.5 },
  { name: 'Olive', emoji: '🫒', value: 1 },
];

const SPEED_ITEMS: KitchenItem[] = [
  { name: 'Popcorn', emoji: '🍿', value: 9 },
  { name: 'Melt Butter', emoji: '🧈', value: 8 },
  { name: 'Toast Bread', emoji: '🍞', value: 7 },
  { name: 'Heat Soup', emoji: '🍜', value: 5 },
  { name: 'Boil Egg', emoji: '🥚', value: 4 },
  { name: 'Cook Pasta', emoji: '🍝', value: 3 },
  { name: 'Bake a Pie', emoji: '🥧', value: 2 },
  { name: 'Roast Chicken', emoji: '🍗', value: 1.5 },
  { name: 'Bake Cake', emoji: '🎂', value: 1 },
];

const CHEF_RANKS = [
  'Dishwasher', 'Sous Chef', 'Line Cook', 'Chef', 'Head Chef',
  'Executive Chef', 'Master Chef', 'Iron Chef', 'Legendary Chef', 'Kitchen God'
];

const RECIPE_NAMES = [
  'Pancakes', 'Pizza', 'Chocolate Cake', 'Cookie Platter', 'Rainbow Smoothie',
  'Sushi Roll', 'Ice Cream Sundae', 'Apple Pie', 'Pasta Primavera', 'Chef\'s Special'
];

const RECIPE_EMOJIS = ['🥞', '🍕', '🎂', '🍪', '🥤', '🍣', '🍨', '🥧', '🍝', '🌟'];

const FOOD_EMOJIS = ['🍕', '🌮', '🍔', '🍟', '🧁', '🍩', '🍰', '🥐', '🍪', '🧇', '🥞', '🍫'];

// ── Helpers ────────────────────────────────────────────────────────────────────

let particleId = 0;
const nextId = () => ++particleId;

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

function generateChallenge(level: number, forceType?: MeasurementType): Challenge {
  const types: MeasurementType[] = ['mass', 'capacity', 'length', 'speed'];
  const type = forceType || types[Math.floor(Math.random() * types.length)];
  const minDiff = level <= 3 ? 3 : level <= 6 ? 1.5 : 0.5;

  let itemA: KitchenItem, itemB: KitchenItem;
  let question: string;
  let correctAnswer: 'A' | 'B';

  switch (type) {
    case 'mass': {
      [itemA, itemB] = pickTwo(MASS_ITEMS, minDiff);
      const askHeavier = Math.random() > 0.3;
      question = askHeavier ? 'Which is HEAVIER?' : 'Which is LIGHTER?';
      correctAnswer = askHeavier
        ? (itemA.value >= itemB.value ? 'A' : 'B')
        : (itemA.value <= itemB.value ? 'A' : 'B');
      break;
    }
    case 'capacity': {
      [itemA, itemB] = pickTwo(CAPACITY_ITEMS, minDiff);
      const askMore = Math.random() > 0.3;
      question = askMore ? 'Which holds MORE?' : 'Which holds LESS?';
      correctAnswer = askMore
        ? (itemA.value >= itemB.value ? 'A' : 'B')
        : (itemA.value <= itemB.value ? 'A' : 'B');
      break;
    }
    case 'length': {
      [itemA, itemB] = pickTwo(LENGTH_ITEMS, minDiff);
      const askLonger = Math.random() > 0.3;
      question = askLonger ? 'Which is LONGER?' : 'Which is SHORTER?';
      correctAnswer = askLonger
        ? (itemA.value >= itemB.value ? 'A' : 'B')
        : (itemA.value <= itemB.value ? 'A' : 'B');
      break;
    }
    case 'speed': {
      [itemA, itemB] = pickTwo(SPEED_ITEMS, minDiff);
      const askFaster = Math.random() > 0.3;
      question = askFaster ? 'Which is QUICKER to cook?' : 'Which takes LONGER to cook?';
      correctAnswer = askFaster
        ? (itemA.value >= itemB.value ? 'A' : 'B')
        : (itemA.value <= itemB.value ? 'A' : 'B');
      break;
    }
  }

  return { type, itemA, itemB, question, correctAnswer };
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeasurementKitchen({ onExit }: MeasurementKitchenProps = {}) {
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [stars, setStars] = useState(3);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [chefExpression, setChefExpression] = useState('😊');
  const [introFloat, setIntroFloat] = useState(0);

  // Physics states
  const [scalePhysics, setScalePhysics] = useState<ScalePhysics>({
    angle: 0, velocity: 0, targetAngle: 0, settled: false,
    itemAPlaced: false, itemBPlaced: false, itemADropY: -80, itemBDropY: -80,
  });
  const [liquidPhysics, setLiquidPhysics] = useState<LiquidPhysics>({
    fillA: 0, fillB: 0, pouringA: false, pouringB: false,
    waveA: 0, waveB: 0, donePouring: false,
  });
  const [lengthPhysics, setLengthPhysics] = useState<LengthPhysics>({
    wormPosA: 0, wormPosB: 0, wormDone: false, wormBounceA: 0, wormBounceB: 0,
  });
  const [speedPhysics, setSpeedPhysics] = useState<SpeedPhysics>({
    posA: 0, posB: 0, raceStarted: false, raceFinished: false,
    winnerDeclared: false, finishTimeA: 0, finishTimeB: 0,
  });

  const [demoTimer, setDemoTimer] = useState(0);
  const [canAnswer, setCanAnswer] = useState(false);

  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Particle system ────────────────────────────────────────────────────────

  const spawnParticles = useCallback((
    type: Particle['type'], x: number, y: number, count: number,
    opts?: { colors?: string[]; emojis?: string[]; spread?: number; speed?: number }
  ) => {
    const newP: Particle[] = [];
    const colors = opts?.colors || ['#FFD700', '#FF6B35', '#FF4444', '#4CAF50', '#2196F3'];
    const spread = opts?.spread || 80;
    const speed = opts?.speed || 3;
    for (let i = 0; i < count; i++) {
      const life = 60 + Math.random() * 100;
      newP.push({
        id: nextId(),
        x: x + (Math.random() - 0.5) * spread,
        y: y + (Math.random() - 0.5) * spread * 0.5,
        vx: (Math.random() - 0.5) * speed,
        vy: type === 'steam' ? -(0.5 + Math.random() * 1.5)
          : type === 'confetti' ? -(1 + Math.random() * 4)
          : (Math.random() - 0.5) * speed,
        size: type === 'sparkle' ? 2 + Math.random() * 4
          : type === 'confetti' ? 4 + Math.random() * 6
          : type === 'food' ? 16 + Math.random() * 12
          : 3 + Math.random() * 5,
        life,
        maxLife: life,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        emoji: opts?.emojis ? opts.emojis[Math.floor(Math.random() * opts.emojis.length)] : undefined,
      });
    }
    setParticles(prev => [...prev, ...newP]);
  }, []);

  // ── Level initialization ───────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    setChallengeIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowResult(false);
    setCanAnswer(false);
    setDemoTimer(0);
    setChefExpression('😊');

    const types: MeasurementType[] = ['mass', 'capacity', 'length', 'speed'];
    const forceType = lvl <= 4 ? types[(lvl - 1) % types.length] : undefined;
    const ch = generateChallenge(lvl, forceType);
    setChallenge(ch);

    // Reset physics
    setScalePhysics({
      angle: 0, velocity: 0, targetAngle: 0, settled: false,
      itemAPlaced: false, itemBPlaced: false, itemADropY: -80, itemBDropY: -80,
    });
    setLiquidPhysics({
      fillA: 0, fillB: 0, pouringA: false, pouringB: false,
      waveA: 0, waveB: 0, donePouring: false,
    });
    setLengthPhysics({
      wormPosA: 0, wormPosB: 0, wormDone: false, wormBounceA: 0, wormBounceB: 0,
    });
    setSpeedPhysics({
      posA: 0, posB: 0, raceStarted: false, raceFinished: false,
      winnerDeclared: false, finishTimeA: 0, finishTimeB: 0,
    });
  }, []);

  const startGame = useCallback(() => {
    setLevel(1);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setStars(3);
    setScreen('playing');
    initLevel(1);
  }, [initLevel]);

  const nextLevel = useCallback(() => {
    const nl = level + 1;
    setLevel(nl);
    setStars(3);
    setScreen('playing');
    initLevel(nl);
  }, [level, initLevel]);

  // ── Answer handling ────────────────────────────────────────────────────────

  const handleAnswer = useCallback((answer: 'A' | 'B') => {
    if (selectedAnswer !== null || !challenge || !canAnswer) return;
    setSelectedAnswer(answer);
    const correct = answer === challenge.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      const comboBonus = combo * 5;
      setScore(prev => prev + 20 + comboBonus);
      setCombo(prev => {
        const nc = prev + 1;
        setMaxCombo(mc => Math.max(mc, nc));
        return nc;
      });
      setChefExpression('🥳');
      // Celebration explosion
      const cx = typeof window !== 'undefined' ? window.innerWidth / 2 : 400;
      spawnParticles('confetti', cx, 200, 25, {
        colors: ['#FFD700', '#FF6B35', '#4CAF50', '#E91E63', '#2196F3', '#FF9800'],
        speed: 5,
        spread: 200,
      });
      spawnParticles('food', cx, 200, 8, {
        emojis: FOOD_EMOJIS,
        speed: 4,
        spread: 300,
      });
      spawnParticles('sparkle', cx, 150, 15, {
        colors: ['#FFD700', '#FFF', '#FFEB3B'],
        speed: 3,
        spread: 250,
      });
    } else {
      setStars(prev => Math.max(0, prev - 1));
      setCombo(0);
      setChefExpression('😅');
      // Flour poof
      const cx = typeof window !== 'undefined' ? window.innerWidth / 2 : 400;
      spawnParticles('flour', cx, 300, 20, {
        colors: ['#FFF8E1', '#FFECB3', '#FFF3E0', '#E0E0E0'],
        speed: 2,
        spread: 120,
      });
    }

    // Advance after delay
    setTimeout(() => {
      const nextIdx = challengeIndex + 1;
      if (nextIdx >= 5) {
        setScreen('levelComplete');
        return;
      }
      setChallengeIndex(nextIdx);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowResult(false);
      setCanAnswer(false);
      setDemoTimer(0);
      setChefExpression('😊');

      const types: MeasurementType[] = ['mass', 'capacity', 'length', 'speed'];
      const forceType = level <= 4 ? types[(level - 1) % types.length] : undefined;
      const ch = generateChallenge(level, forceType);
      setChallenge(ch);

      // Reset physics for next challenge
      setScalePhysics({
        angle: 0, velocity: 0, targetAngle: 0, settled: false,
        itemAPlaced: false, itemBPlaced: false, itemADropY: -80, itemBDropY: -80,
      });
      setLiquidPhysics({
        fillA: 0, fillB: 0, pouringA: false, pouringB: false,
        waveA: 0, waveB: 0, donePouring: false,
      });
      setLengthPhysics({
        wormPosA: 0, wormPosB: 0, wormDone: false, wormBounceA: 0, wormBounceB: 0,
      });
      setSpeedPhysics({
        posA: 0, posB: 0, raceStarted: false, raceFinished: false,
        winnerDeclared: false, finishTimeA: 0, finishTimeB: 0,
      });
    }, 2200);
  }, [selectedAnswer, challenge, canAnswer, combo, challengeIndex, level, spawnParticles]);

  // ── Animation loop ─────────────────────────────────────────────────────────

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min((timestamp - lastTimeRef.current) / 16.67, 3);
      lastTimeRef.current = timestamp;

      // Intro floating
      if (screen === 'intro') {
        setIntroFloat(prev => prev + 0.025 * dt);
      }

      // Update particles
      setParticles(prev => {
        if (prev.length === 0) return prev;
        return prev
          .map(p => ({
            ...p,
            x: p.x + p.vx * dt,
            y: p.y + p.vy * dt + (p.type === 'confetti' ? 0.15 * dt : 0),
            vy: p.vy + (p.type === 'confetti' ? 0.08 * dt : p.type === 'food' ? 0.12 * dt : 0),
            life: p.life - dt,
            rotation: p.rotation + p.rotSpeed * dt,
          }))
          .filter(p => p.life > 0);
      });

      // Ambient steam
      if ((screen === 'playing' || screen === 'result') && Math.random() < 0.025) {
        setParticles(prev => {
          if (prev.length > 80) return prev;
          const life = 80 + Math.random() * 80;
          return [...prev, {
            id: nextId(),
            x: 30 + Math.random() * 70,
            y: (typeof window !== 'undefined' ? window.innerHeight : 600) * 0.7 + Math.random() * 60,
            vx: (Math.random() - 0.5) * 0.3,
            vy: -(0.3 + Math.random() * 0.6),
            size: 4 + Math.random() * 8,
            life, maxLife: life,
            color: 'rgba(255,255,255,0.12)',
            type: 'steam' as const,
            rotation: 0,
            rotSpeed: 0,
          }];
        });
      }

      // Physics for each challenge type during playing
      if (screen === 'playing' && challenge && !showResult) {
        setDemoTimer(prev => {
          const newT = prev + dt;

          switch (challenge.type) {
            case 'mass': {
              setScalePhysics(sp => {
                let { angle, velocity, targetAngle, settled, itemAPlaced, itemBPlaced, itemADropY, itemBDropY } = sp;

                // Drop items onto scale with timing
                if (newT > 20 && !itemAPlaced) {
                  itemADropY = Math.min(itemADropY + 4 * dt, 0);
                  if (itemADropY >= 0) {
                    itemAPlaced = true;
                    // Set partial target (only A placed)
                    targetAngle = -12;
                    velocity = 3;
                  }
                }
                if (newT > 55 && !itemBPlaced) {
                  itemBDropY = Math.min(itemBDropY + 4 * dt, 0);
                  if (itemBDropY >= 0) {
                    itemBPlaced = true;
                    // Now both placed, set final target
                    const diff = challenge.itemA.value - challenge.itemB.value;
                    targetAngle = Math.max(-22, Math.min(22, -diff * 3));
                    velocity = 4;
                  }
                }

                // Spring physics for scale beam
                if (itemAPlaced || itemBPlaced) {
                  const spring = 0.035;
                  const damping = 0.94;
                  const force = (targetAngle - angle) * spring;
                  velocity = (velocity + force * dt) * damping;
                  angle += velocity * dt;

                  if (Math.abs(velocity) < 0.05 && Math.abs(angle - targetAngle) < 0.3) {
                    settled = true;
                  }
                }

                // Enable answer after scale settles
                if (settled && itemAPlaced && itemBPlaced && newT > 90) {
                  setCanAnswer(true);
                }

                return { angle, velocity, targetAngle, settled, itemAPlaced, itemBPlaced, itemADropY, itemBDropY };
              });
              break;
            }

            case 'capacity': {
              setLiquidPhysics(lp => {
                let { fillA, fillB, pouringA, pouringB, waveA, waveB, donePouring } = lp;

                // Start pouring at different times
                if (newT > 20) pouringA = true;
                if (newT > 30) pouringB = true;

                const fillRate = 0.006;
                const maxFillA = challenge.itemA.value / 10;
                const maxFillB = challenge.itemB.value / 10;

                if (pouringA && fillA < maxFillA) {
                  fillA = Math.min(maxFillA, fillA + fillRate * dt);
                  waveA += 0.15 * dt;
                }
                if (pouringB && fillB < maxFillB) {
                  fillB = Math.min(maxFillB, fillB + fillRate * dt);
                  waveB += 0.12 * dt;
                }

                if (fillA >= maxFillA - 0.01 && fillB >= maxFillB - 0.01 && !donePouring) {
                  donePouring = true;
                }

                if (donePouring && newT > 100) {
                  setCanAnswer(true);
                }

                return { fillA, fillB, pouringA, pouringB, waveA, waveB, donePouring };
              });
              break;
            }

            case 'length': {
              setLengthPhysics(lp => {
                let { wormPosA, wormPosB, wormDone, wormBounceA, wormBounceB } = lp;

                const maxA = challenge.itemA.value / 10;
                const maxB = challenge.itemB.value / 10;
                const speed = 0.008;

                if (newT > 15) {
                  wormPosA = Math.min(maxA, wormPosA + speed * dt);
                  wormBounceA += 0.2 * dt;
                }
                if (newT > 15) {
                  wormPosB = Math.min(maxB, wormPosB + speed * dt);
                  wormBounceB += 0.18 * dt;
                }

                if (wormPosA >= maxA - 0.01 && wormPosB >= maxB - 0.01 && !wormDone) {
                  wormDone = true;
                }

                if (wormDone && newT > 90) {
                  setCanAnswer(true);
                }

                return { wormPosA, wormPosB, wormDone, wormBounceA, wormBounceB };
              });
              break;
            }

            case 'speed': {
              setSpeedPhysics(sp => {
                let { posA, posB, raceStarted, raceFinished, winnerDeclared, finishTimeA, finishTimeB } = sp;

                if (newT > 30 && !raceStarted) {
                  raceStarted = true;
                }

                if (raceStarted && !raceFinished) {
                  // Speed = value (higher = finishes faster)
                  const speedA = challenge.itemA.value * 0.009;
                  const speedB = challenge.itemB.value * 0.009;
                  posA = Math.min(1, posA + speedA * dt);
                  posB = Math.min(1, posB + speedB * dt);

                  if (posA >= 1 && finishTimeA === 0) finishTimeA = newT;
                  if (posB >= 1 && finishTimeB === 0) finishTimeB = newT;

                  if (posA >= 1 && posB >= 1 && !winnerDeclared) {
                    raceFinished = true;
                    winnerDeclared = true;
                  }
                }

                if (raceFinished && newT > 120) {
                  setCanAnswer(true);
                }

                return { posA, posB, raceStarted, raceFinished, winnerDeclared, finishTimeA, finishTimeB };
              });
              break;
            }
          }

          return newT;
        });
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [screen, challenge, showResult]);

  // ── Render: Intro ──────────────────────────────────────────────────────────

  if (screen === 'intro') {
    const fY = Math.sin(introFloat) * 10;
    const fY2 = Math.sin(introFloat * 1.3 + 1) * 8;
    const fY3 = Math.sin(introFloat * 0.7 + 2) * 12;

    return (
      <div className="mk">
        <style>{styles}</style>
        <div className="mk-intro">
          <div className="mk-intro-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="mk-steam" style={{
                left: `${5 + Math.random() * 90}%`,
                bottom: `${Math.random() * 25}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }} />
            ))}
            <div className="mk-float-bg" style={{ left: '8%', top: '12%', transform: `translateY(${fY}px)` }}>⚖️</div>
            <div className="mk-float-bg" style={{ left: '88%', top: '18%', transform: `translateY(${fY2}px)` }}>🫗</div>
            <div className="mk-float-bg" style={{ left: '78%', top: '72%', transform: `translateY(${fY3}px)` }}>📏</div>
            <div className="mk-float-bg" style={{ left: '12%', top: '68%', transform: `translateY(${fY2}px)` }}>🏃</div>
            <div className="mk-float-bg" style={{ left: '50%', top: '82%', transform: `translateY(${fY}px)` }}>🍳</div>
            <div className="mk-float-bg" style={{ left: '35%', top: '10%', transform: `translateY(${fY3}px)` }}>🧁</div>
          </div>
          <div className="mk-intro-content">
            <div className="mk-logo">
              <span className="mk-logo-chef" style={{ transform: `translateY(${fY}px)` }}>👨‍🍳</span>
              <h1 className="mk-title">Measurement Kitchen</h1>
              <span className="mk-logo-chef" style={{ transform: `translateY(${fY2}px)` }}>🍰</span>
            </div>
            <p className="mk-subtitle">A Physics Cooking Adventure!</p>

            <div className="mk-how">
              <h3>How to Play</h3>
              <div className="mk-how-item">
                <div className="mk-how-icons"><span>⚖️</span></div>
                <p>Watch the <strong className="mk-hl-mass">balance scale</strong> tip to find the heavier item!</p>
              </div>
              <div className="mk-how-item">
                <div className="mk-how-icons"><span>🫗</span></div>
                <p>Watch water <strong className="mk-hl-cap">pour into containers</strong> to compare capacity!</p>
              </div>
              <div className="mk-how-item">
                <div className="mk-how-icons"><span>🐛</span></div>
                <p>A measuring worm <strong className="mk-hl-len">stretches along</strong> items to compare length!</p>
              </div>
              <div className="mk-how-item">
                <div className="mk-how-icons"><span>🏃</span></div>
                <p>Watch items <strong className="mk-hl-spd">race</strong> to see which cooks faster!</p>
              </div>
            </div>

            <button className="mk-start-btn" onClick={startGame}>
              <span>🍳</span>
              Start Cooking!
              <span>🔥</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Level Complete ─────────────────────────────────────────────────

  if (screen === 'levelComplete') {
    const rankIdx = Math.min(level - 1, CHEF_RANKS.length - 1);
    const recipeName = RECIPE_NAMES[(level - 1) % RECIPE_NAMES.length];
    const recipeEmoji = RECIPE_EMOJIS[(level - 1) % RECIPE_EMOJIS.length];

    return (
      <div className="mk">
        <style>{styles}</style>
        <div className="mk-complete">
          <div className="mk-complete-decor">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="mk-complete-float" style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.2}s`,
              }}>
                {FOOD_EMOJIS[i % FOOD_EMOJIS.length]}
              </div>
            ))}
          </div>
          <div className="mk-complete-inner">
            <div className="mk-complete-banner">Recipe Complete!</div>
            <div className="mk-complete-dish">{recipeEmoji}</div>
            <div className="mk-complete-recipe">You made {recipeName}!</div>

            <div className="mk-complete-stars">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`mk-complete-star ${i < stars ? 'mk-star-earned' : 'mk-star-empty'}`}>
                  {i < stars ? '⭐' : '☆'}
                </span>
              ))}
            </div>

            <div className="mk-complete-stats">
              <div className="mk-stat">
                <span className="mk-stat-label">Score</span>
                <span className="mk-stat-value">{score}</span>
              </div>
              <div className="mk-stat">
                <span className="mk-stat-label">Best Combo</span>
                <span className="mk-stat-value">{maxCombo}x</span>
              </div>
              <div className="mk-stat">
                <span className="mk-stat-label">Chef Rank</span>
                <span className="mk-stat-value mk-rank">{CHEF_RANKS[rankIdx]}</span>
              </div>
            </div>

            <div className="mk-complete-btns">
              <button className="mk-next-btn" onClick={nextLevel}>
                Next Recipe: {RECIPE_NAMES[level % RECIPE_NAMES.length]} →
              </button>
              <button className="mk-exit-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Playing ────────────────────────────────────────────────────────

  const renderMassChallenge = () => {
    if (!challenge) return null;
    const { angle, itemAPlaced, itemBPlaced, itemADropY, itemBDropY } = scalePhysics;

    return (
      <div className="mk-visual mk-mass-visual">
        <svg viewBox="0 0 500 320" className="mk-scale-svg" preserveAspectRatio="xMidYMid meet">
          {/* Base - ornate wooden stand */}
          <defs>
            <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C49A3C" />
              <stop offset="50%" stopColor="#8B6914" />
              <stop offset="100%" stopColor="#6B4E0A" />
            </linearGradient>
            <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8C547" />
              <stop offset="40%" stopColor="#D4A530" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="panGradA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8C547" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="panGradB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#8B6914" />
            </linearGradient>
            <radialGradient id="woodGrain" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
            </radialGradient>
            <filter id="scaleShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.3)" />
            </filter>
          </defs>

          {/* Base platform */}
          <rect x="190" y="275" width="120" height="20" rx="5" fill="url(#baseGrad)" filter="url(#scaleShadow)" />
          <rect x="190" y="275" width="120" height="20" rx="5" fill="url(#woodGrain)" />
          {/* Ornamental base details */}
          <circle cx="210" cy="285" r="3" fill="#6B4E0A" opacity="0.5" />
          <circle cx="290" cy="285" r="3" fill="#6B4E0A" opacity="0.5" />

          {/* Pillar */}
          <rect x="240" y="165" width="20" height="112" rx="4" fill="url(#baseGrad)" />
          <rect x="244" y="170" width="3" height="100" rx="1" fill="rgba(255,255,255,0.08)" />

          {/* Fulcrum - ornate triangle */}
          <polygon points="250,148 232,168 268,168" fill="#D4A530" stroke="#B8860B" strokeWidth="1.5" />
          <circle cx="250" cy="158" r="4" fill="#E8C547" stroke="#B8860B" strokeWidth="1" />

          {/* Beam group - rotates based on physics */}
          <g transform={`rotate(${angle}, 250, 150)`}>
            {/* Main beam */}
            <rect x="60" y="143" width="380" height="14" rx="7" fill="url(#beamGrad)" filter="url(#scaleShadow)" />
            {/* Beam highlight */}
            <rect x="65" y="145" width="370" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
            {/* Beam ornamental dots */}
            <circle cx="100" cy="150" r="3" fill="#6B4E0A" opacity="0.4" />
            <circle cx="400" cy="150" r="3" fill="#6B4E0A" opacity="0.4" />

            {/* Left chain links */}
            <line x1="110" y1="157" x2="90" y2="195" stroke="#C49A3C" strokeWidth="2.5" />
            <line x1="110" y1="157" x2="130" y2="195" stroke="#C49A3C" strokeWidth="2.5" />
            <circle cx="110" cy="157" r="3" fill="#DAA520" />
            <circle cx="90" cy="195" r="2.5" fill="#DAA520" />
            <circle cx="130" cy="195" r="2.5" fill="#DAA520" />

            {/* Left pan */}
            <ellipse cx="110" cy="210" rx="50" ry="12" fill="url(#panGradB)" />
            <ellipse cx="110" cy="205" rx="50" ry="12" fill="url(#panGradA)" />
            <ellipse cx="110" cy="205" rx="45" ry="9" fill="rgba(139,105,20,0.6)" />
            {/* Highlight on pan */}
            <ellipse cx="95" cy="202" rx="15" ry="4" fill="rgba(255,255,255,0.1)" />

            {/* Item A on left pan */}
            <text x="110" y={195 + itemADropY} textAnchor="middle" fontSize="42" dominantBaseline="central"
              opacity={itemAPlaced ? 1 : Math.max(0, 1 + itemADropY / 80)}>
              {challenge.itemA.emoji}
            </text>

            {/* Right chain links */}
            <line x1="390" y1="157" x2="370" y2="195" stroke="#C49A3C" strokeWidth="2.5" />
            <line x1="390" y1="157" x2="410" y2="195" stroke="#C49A3C" strokeWidth="2.5" />
            <circle cx="390" cy="157" r="3" fill="#DAA520" />
            <circle cx="370" cy="195" r="2.5" fill="#DAA520" />
            <circle cx="410" cy="195" r="2.5" fill="#DAA520" />

            {/* Right pan */}
            <ellipse cx="390" cy="210" rx="50" ry="12" fill="url(#panGradB)" />
            <ellipse cx="390" cy="205" rx="50" ry="12" fill="url(#panGradA)" />
            <ellipse cx="390" cy="205" rx="45" ry="9" fill="rgba(139,105,20,0.6)" />
            <ellipse cx="375" cy="202" rx="15" ry="4" fill="rgba(255,255,255,0.1)" />

            {/* Item B on right pan */}
            <text x="390" y={195 + itemBDropY} textAnchor="middle" fontSize="42" dominantBaseline="central"
              opacity={itemBPlaced ? 1 : Math.max(0, 1 + itemBDropY / 80)}>
              {challenge.itemB.emoji}
            </text>
          </g>

          {/* Labels below */}
          <text x="110" y="305" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#D7CCC8" fontFamily="Nunito, sans-serif">
            {challenge.itemA.name}
          </text>
          <text x="390" y="305" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#D7CCC8" fontFamily="Nunito, sans-serif">
            {challenge.itemB.name}
          </text>
        </svg>
      </div>
    );
  };

  const renderCapacityChallenge = () => {
    if (!challenge) return null;
    const { fillA, fillB, waveA, waveB, pouringA, pouringB } = liquidPhysics;

    return (
      <div className="mk-visual mk-cap-visual">
        <div className="mk-cap-pair">
          {/* Faucet */}
          <div className="mk-faucet">
            <svg viewBox="0 0 300 40" className="mk-faucet-svg">
              <rect x="0" y="10" width="300" height="12" rx="6" fill="#888" />
              <rect x="0" y="10" width="300" height="5" rx="3" fill="#aaa" />
              {/* Left drip */}
              {pouringA && (
                <g>
                  <rect x="72" y="22" width="6" height="18" rx="3" fill="#60A5FA" opacity="0.7">
                    <animate attributeName="height" values="14;20;14" dur="0.8s" repeatCount="indefinite" />
                  </rect>
                  <circle cx="75" cy="42" r="3" fill="#60A5FA" opacity="0.5">
                    <animate attributeName="cy" values="38;48;38" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="0.6s" repeatCount="indefinite" />
                  </circle>
                </g>
              )}
              {/* Right drip */}
              {pouringB && (
                <g>
                  <rect x="222" y="22" width="6" height="18" rx="3" fill="#FB923C" opacity="0.7">
                    <animate attributeName="height" values="14;20;14" dur="0.7s" repeatCount="indefinite" />
                  </rect>
                  <circle cx="225" cy="42" r="3" fill="#FB923C" opacity="0.5">
                    <animate attributeName="cy" values="38;48;38" dur="0.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="0.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              )}
            </svg>
          </div>

          {/* Container A */}
          <div className="mk-container-col">
            <svg viewBox="0 0 140 180" className="mk-container-svg">
              <defs>
                <clipPath id="clipA">
                  <path d="M30,15 L18,155 Q18,170 35,170 L105,170 Q122,170 122,155 L110,15 Z" />
                </clipPath>
                <linearGradient id="liqA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              {/* Glass */}
              <path d="M30,15 L18,155 Q18,170 35,170 L105,170 Q122,170 122,155 L110,15 Z"
                fill="rgba(200,230,255,0.1)" stroke="rgba(200,230,255,0.35)" strokeWidth="2" />
              {/* Liquid */}
              <g clipPath="url(#clipA)">
                <rect x="10" y={170 - fillA * 155} width="130" height={fillA * 155 + 5} fill="url(#liqA)" opacity="0.85" />
                {/* Wave surface */}
                <path
                  d={`M10,${170 - fillA * 155} Q40,${168 - fillA * 155 + Math.sin(waveA) * 5} 70,${170 - fillA * 155} Q100,${168 - fillA * 155 - Math.sin(waveA) * 5} 130,${170 - fillA * 155}`}
                  fill="rgba(100,180,255,0.35)"
                />
                {/* Bubbles */}
                {fillA > 0.05 && <>
                  <circle cx={45 + Math.sin(waveA * 2) * 6} cy={170 - fillA * 70} r="3" fill="rgba(255,255,255,0.3)">
                    <animate attributeName="cy" values={`${170 - fillA * 70};${170 - fillA * 90};${170 - fillA * 70}`} dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={80 + Math.cos(waveA * 1.5) * 8} cy={170 - fillA * 90} r="2" fill="rgba(255,255,255,0.25)">
                    <animate attributeName="cy" values={`${170 - fillA * 90};${170 - fillA * 110};${170 - fillA * 90}`} dur="1.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={60 + Math.sin(waveA * 3) * 4} cy={170 - fillA * 50} r="2.5" fill="rgba(255,255,255,0.2)" />
                </>}
              </g>
              {/* Glass shine */}
              <path d="M35,20 L33,120" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="mk-cap-label">{challenge.itemA.emoji} {challenge.itemA.name}</div>
          </div>

          {/* Container B */}
          <div className="mk-container-col">
            <svg viewBox="0 0 140 180" className="mk-container-svg">
              <defs>
                <clipPath id="clipB">
                  <path d="M30,15 L18,155 Q18,170 35,170 L105,170 Q122,170 122,155 L110,15 Z" />
                </clipPath>
                <linearGradient id="liqB" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
              <path d="M30,15 L18,155 Q18,170 35,170 L105,170 Q122,170 122,155 L110,15 Z"
                fill="rgba(200,230,255,0.1)" stroke="rgba(200,230,255,0.35)" strokeWidth="2" />
              <g clipPath="url(#clipB)">
                <rect x="10" y={170 - fillB * 155} width="130" height={fillB * 155 + 5} fill="url(#liqB)" opacity="0.85" />
                <path
                  d={`M10,${170 - fillB * 155} Q40,${168 - fillB * 155 - Math.sin(waveB + 1) * 5} 70,${170 - fillB * 155} Q100,${168 - fillB * 155 + Math.sin(waveB + 1) * 5} 130,${170 - fillB * 155}`}
                  fill="rgba(255,180,100,0.35)"
                />
                {fillB > 0.05 && <>
                  <circle cx={50 + Math.sin(waveB * 2 + 1) * 6} cy={170 - fillB * 70} r="3" fill="rgba(255,255,255,0.3)">
                    <animate attributeName="cy" values={`${170 - fillB * 70};${170 - fillB * 90};${170 - fillB * 70}`} dur="1.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={85 + Math.cos(waveB * 1.5 + 1) * 8} cy={170 - fillB * 90} r="2" fill="rgba(255,255,255,0.25)" />
                </>}
              </g>
              <path d="M35,20 L33,120" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="mk-cap-label">{challenge.itemB.emoji} {challenge.itemB.name}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderLengthChallenge = () => {
    if (!challenge) return null;
    const { wormPosA, wormPosB, wormBounceA, wormBounceB } = lengthPhysics;
    const maxBarWidth = 280;
    const barA = wormPosA * maxBarWidth;
    const barB = wormPosB * maxBarWidth;

    return (
      <div className="mk-visual mk-len-visual">
        <svg viewBox="0 0 420 260" className="mk-len-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="rulerGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF3E0" />
              <stop offset="100%" stopColor="#D7CCC8" />
            </linearGradient>
            <linearGradient id="barA" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="barB" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>

          {/* Ruler */}
          <rect x="50" y="15" width="340" height="30" rx="4" fill="url(#rulerGrad)" stroke="#BCAAA4" strokeWidth="1" />
          {Array.from({ length: 18 }).map((_, i) => (
            <g key={i}>
              <line x1={50 + i * 20} y1="15" x2={50 + i * 20} y2={i % 5 === 0 ? 45 : 35}
                stroke="#8D6E63" strokeWidth={i % 5 === 0 ? 1.5 : 0.7} />
              {i % 5 === 0 && (
                <text x={50 + i * 20} y="58" textAnchor="middle" fontSize="10" fill="#8D6E63" fontFamily="Nunito, sans-serif">
                  {i}
                </text>
              )}
            </g>
          ))}

          {/* Item A row */}
          <text x="25" y="110" textAnchor="middle" fontSize="32" dominantBaseline="central">
            {challenge.itemA.emoji}
          </text>
          {/* Bar A */}
          <rect x="50" y="95" width={barA} height="24" rx="8" fill="url(#barA)" opacity="0.9" />
          {barA > 5 && (
            <rect x="50" y="95" width={barA} height="8" rx="4" fill="rgba(255,255,255,0.15)" />
          )}
          {/* Worm A at end of bar */}
          {wormPosA > 0 && (
            <text x={55 + barA} y={110 + Math.sin(wormBounceA * 6) * 3} fontSize="20" dominantBaseline="central">
              🐛
            </text>
          )}
          <text x={70 + barA} y="85" fontSize="11" fontWeight="bold" fill="#60A5FA" fontFamily="Nunito, sans-serif">
            {challenge.itemA.name}
          </text>

          {/* Item B row */}
          <text x="25" y="180" textAnchor="middle" fontSize="32" dominantBaseline="central">
            {challenge.itemB.emoji}
          </text>
          {/* Bar B */}
          <rect x="50" y="165" width={barB} height="24" rx="8" fill="url(#barB)" opacity="0.9" />
          {barB > 5 && (
            <rect x="50" y="165" width={barB} height="8" rx="4" fill="rgba(255,255,255,0.15)" />
          )}
          {/* Worm B */}
          {wormPosB > 0 && (
            <text x={55 + barB} y={180 + Math.sin(wormBounceB * 6) * 3} fontSize="20" dominantBaseline="central">
              🐛
            </text>
          )}
          <text x={70 + barB} y="155" fontSize="11" fontWeight="bold" fill="#F97316" fontFamily="Nunito, sans-serif">
            {challenge.itemB.name}
          </text>
        </svg>
      </div>
    );
  };

  const renderSpeedChallenge = () => {
    if (!challenge) return null;
    const { posA, posB, raceStarted, raceFinished } = speedPhysics;

    return (
      <div className="mk-visual mk-speed-visual">
        <svg viewBox="0 0 420 220" className="mk-speed-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="trackGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
          </defs>

          {/* Track A */}
          <rect x="30" y="40" width="360" height="55" rx="10" fill="url(#trackGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          {/* Lane markings */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`a${i}`} x1={70 + i * 45} y1="67" x2={80 + i * 45} y2="67"
              stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4,4" />
          ))}
          {/* Finish line A */}
          <rect x="378" y="42" width="10" height="51" rx="2" fill="rgba(255,255,255,0.1)" />
          <text x="383" y="67" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.3)" fontFamily="Nunito, sans-serif">
            🏁
          </text>
          {/* Racer A */}
          <text x={40 + posA * 330} y="72" fontSize="36" dominantBaseline="central" textAnchor="middle">
            {challenge.itemA.emoji}
          </text>
          {/* Speed lines A */}
          {raceStarted && posA < 1 && <>
            <line x1={25 + posA * 330} y1="60" x2={15 + posA * 330} y2="60"
              stroke="rgba(96,165,250,0.3)" strokeWidth="2" />
            <line x1={25 + posA * 330} y1="75" x2={10 + posA * 330} y2="75"
              stroke="rgba(96,165,250,0.2)" strokeWidth="1.5" />
          </>}
          {/* Name A */}
          <text x={40 + posA * 330} y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#60A5FA" fontFamily="Nunito, sans-serif">
            {challenge.itemA.name}
          </text>

          {/* Track B */}
          <rect x="30" y="125" width="360" height="55" rx="10" fill="url(#trackGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`b${i}`} x1={70 + i * 45} y1="152" x2={80 + i * 45} y2="152"
              stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4,4" />
          ))}
          <rect x="378" y="127" width="10" height="51" rx="2" fill="rgba(255,255,255,0.1)" />
          <text x="383" y="152" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.3)" fontFamily="Nunito, sans-serif">
            🏁
          </text>
          {/* Racer B */}
          <text x={40 + posB * 330} y="157" fontSize="36" dominantBaseline="central" textAnchor="middle">
            {challenge.itemB.emoji}
          </text>
          {raceStarted && posB < 1 && <>
            <line x1={25 + posB * 330} y1="145" x2={15 + posB * 330} y2="145"
              stroke="rgba(251,146,60,0.3)" strokeWidth="2" />
            <line x1={25 + posB * 330} y1="160" x2={10 + posB * 330} y2="160"
              stroke="rgba(251,146,60,0.2)" strokeWidth="1.5" />
          </>}
          <text x={40 + posB * 330} y="123" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FB923C" fontFamily="Nunito, sans-serif">
            {challenge.itemB.name}
          </text>

          {/* Start / Finish text */}
          {!raceStarted && (
            <text x="210" y="200" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FBBF24" fontFamily="Nunito, sans-serif"
              opacity={Math.abs(Math.sin(demoTimer * 0.08))}>
              Ready... Set...
            </text>
          )}
          {raceStarted && !raceFinished && (
            <text x="210" y="200" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#4CAF50" fontFamily="Nunito, sans-serif">
              GO! 🏃
            </text>
          )}
          {raceFinished && (
            <text x="210" y="205" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFD700" fontFamily="Nunito, sans-serif">
              Race Complete! 🏆
            </text>
          )}
        </svg>
      </div>
    );
  };

  const renderChallengeVisual = () => {
    if (!challenge) return null;
    switch (challenge.type) {
      case 'mass': return renderMassChallenge();
      case 'capacity': return renderCapacityChallenge();
      case 'length': return renderLengthChallenge();
      case 'speed': return renderSpeedChallenge();
    }
  };

  const getTypeIcon = (type: MeasurementType) => {
    switch (type) {
      case 'mass': return '⚖️';
      case 'capacity': return '🫗';
      case 'length': return '📏';
      case 'speed': return '🏃';
    }
  };

  const getTypeLabel = (type: MeasurementType) => {
    switch (type) {
      case 'mass': return 'Mass';
      case 'capacity': return 'Capacity';
      case 'length': return 'Length';
      case 'speed': return 'Speed';
    }
  };

  return (
    <div className="mk" ref={containerRef}>
      <style>{styles}</style>
      <div className="mk-game">
        {/* Header */}
        <div className="mk-hdr">
          <div className="mk-hdr-left">
            <button className="mk-back" onClick={() => onExit ? onExit() : setScreen('intro')}>←</button>
            <div className="mk-lvl">Recipe {level}</div>
          </div>
          <div className="mk-hdr-mid">
            {challenge && (
              <div className="mk-type-pill">
                <span>{getTypeIcon(challenge.type)}</span>
                <span>{getTypeLabel(challenge.type)}</span>
              </div>
            )}
          </div>
          <div className="mk-hdr-right">
            <div className="mk-score-pill">⭐ {score}</div>
            {combo > 1 && <div className="mk-combo-pill">🔥 {combo}x</div>}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mk-progress">
          <div className="mk-progress-label">
            📋 {RECIPE_NAMES[(level - 1) % RECIPE_NAMES.length]}:
          </div>
          <div className="mk-dots">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`mk-dot ${i < challengeIndex ? 'mk-dot-done' : i === challengeIndex ? 'mk-dot-active' : ''}`}>
                {i < challengeIndex ? '✓' : i + 1}
              </div>
            ))}
          </div>
          <div className="mk-stars-row">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="mk-star-mini">{i < stars ? '⭐' : '☆'}</span>
            ))}
          </div>
        </div>

        {/* Main area */}
        <div className="mk-main">
          {/* Particles */}
          {particles.map(p => (
            <div key={p.id}
              className={`mk-p mk-p-${p.type}`}
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                opacity: (p.life / p.maxLife),
                transform: `rotate(${p.rotation}deg)`,
                background: p.emoji ? 'none' : undefined,
                fontSize: p.emoji ? p.size : undefined,
                color: p.color,
              }}
            >
              {p.emoji || ''}
            </div>
          ))}

          {/* Kitchen BG */}
          <div className="mk-kitchen">
            <div className="mk-counter" />
            <div className="mk-tiles" />
          </div>

          {challenge && (
            <>
              {/* Chef + Question */}
              <div className="mk-question-row">
                <div className="mk-chef-bubble">
                  <span className="mk-chef">{chefExpression}</span>
                  <div className="mk-q-text">{challenge.question}</div>
                </div>
              </div>

              {/* Visual demo */}
              {renderChallengeVisual()}

              {/* Answer buttons */}
              <div className={`mk-answers ${canAnswer ? 'mk-answers-ready' : 'mk-answers-waiting'}`}>
                <button
                  className={`mk-ans mk-ans-a ${selectedAnswer === 'A' ? (isCorrect ? 'mk-ans-right' : 'mk-ans-wrong') : ''} ${selectedAnswer === 'B' && isCorrect ? '' : selectedAnswer === 'B' && !isCorrect ? 'mk-ans-reveal' : ''}`}
                  onClick={() => handleAnswer('A')}
                  disabled={!canAnswer || selectedAnswer !== null}
                >
                  <div className="mk-ans-emoji">{challenge.itemA.emoji}</div>
                  <div className="mk-ans-name">{challenge.itemA.name}</div>
                  {!canAnswer && <div className="mk-ans-lock">⏳</div>}
                  <div className="mk-ans-glow" />
                </button>

                <div className="mk-vs">
                  <span className="mk-vs-txt">VS</span>
                </div>

                <button
                  className={`mk-ans mk-ans-b ${selectedAnswer === 'B' ? (isCorrect ? 'mk-ans-right' : 'mk-ans-wrong') : ''} ${selectedAnswer === 'A' && isCorrect ? '' : selectedAnswer === 'A' && !isCorrect ? 'mk-ans-reveal' : ''}`}
                  onClick={() => handleAnswer('B')}
                  disabled={!canAnswer || selectedAnswer !== null}
                >
                  <div className="mk-ans-emoji">{challenge.itemB.emoji}</div>
                  <div className="mk-ans-name">{challenge.itemB.name}</div>
                  {!canAnswer && <div className="mk-ans-lock">⏳</div>}
                  <div className="mk-ans-glow" />
                </button>
              </div>

              {/* Result overlay */}
              {showResult && (
                <div className={`mk-result-pop ${isCorrect ? 'mk-pop-right' : 'mk-pop-wrong'}`}>
                  <span className="mk-result-emoji">{isCorrect ? '🎉' : '💨'}</span>
                  <span className="mk-result-word">{isCorrect ? 'Delicious!' : 'Oops!'}</span>
                  {isCorrect && combo > 1 && <span className="mk-result-combo">🔥 {combo}x Combo!</span>}
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom */}
        <div className="mk-bottom">
          <span className="mk-bottom-hint">
            {!canAnswer ? 'Watch the demo...' : 'Tap your answer!'}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .mk {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #3E2723 0%, #4E342E 30%, #5D4037 60%, #6D4C41 100%);
    position: relative;
  }

  /* Tile texture overlay */
  .mk::before {
    content: '';
    position: absolute; inset: 0;
    background:
      repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px);
    pointer-events: none; z-index: 0;
  }

  /* ── Intro ────────────────────────────────────────────────────────────── */

  .mk-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .mk-intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .mk-steam {
    position: absolute;
    width: 50px; height: 70px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%);
    animation: mkSteamUp 8s ease-in-out infinite;
    filter: blur(10px);
  }

  @keyframes mkSteamUp {
    0% { transform: translateY(0) scale(1); opacity: 0; }
    15% { opacity: 0.25; }
    50% { transform: translateY(-100px) scale(1.6); opacity: 0.15; }
    100% { transform: translateY(-200px) scale(2.2); opacity: 0; }
  }

  .mk-float-bg {
    position: absolute; font-size: 2.5rem; opacity: 0.25;
    transition: transform 0.3s ease; pointer-events: none;
  }

  .mk-intro-content {
    position: relative; z-index: 10; text-align: center;
    padding: 1.5rem; max-width: 520px;
  }

  .mk-logo {
    display: flex; align-items: center; justify-content: center;
    gap: 0.8rem; margin-bottom: 0.3rem;
  }

  .mk-logo-chef { font-size: 2.5rem; transition: transform 0.3s ease; }

  .mk-title {
    font-size: clamp(1.6rem, 6vw, 2.6rem); font-weight: 900;
    background: linear-gradient(135deg, #FFCC02, #FF9800, #FF5722);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mk-subtitle { color: #BCAAA4; font-size: 1.1rem; margin-bottom: 1.5rem; }

  .mk-how {
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 20px; padding: 1.2rem; margin-bottom: 1.8rem;
    backdrop-filter: blur(10px);
  }

  .mk-how h3 { color: white; font-size: 1.1rem; margin-bottom: 1rem; }

  .mk-how-item {
    display: flex; align-items: center; gap: 0.8rem;
    margin-bottom: 0.8rem; text-align: left;
  }
  .mk-how-item:last-child { margin-bottom: 0; }

  .mk-how-icons { font-size: 1.6rem; flex-shrink: 0; width: 40px; text-align: center; }

  .mk-how-item p { color: #D7CCC8; font-size: 0.9rem; line-height: 1.4; }

  .mk-hl-mass { color: #FFC107; font-weight: 700; }
  .mk-hl-cap { color: #29B6F6; font-weight: 700; }
  .mk-hl-len { color: #66BB6A; font-weight: 700; }
  .mk-hl-spd { color: #EF5350; font-weight: 700; }

  .mk-start-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #FF9800, #F44336);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(244,67,54,0.4);
    animation: mkBtnPulse 2s ease-in-out infinite;
  }

  @keyframes mkBtnPulse {
    0%, 100% { box-shadow: 0 8px 30px rgba(244,67,54,0.4); }
    50% { box-shadow: 0 12px 45px rgba(244,67,54,0.6); }
  }

  .mk-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 50px rgba(244,67,54,0.55);
  }

  /* ── Game screen ──────────────────────────────────────────────────────── */

  .mk-game {
    height: 100%; display: flex; flex-direction: column;
    position: relative; z-index: 1;
  }

  .mk-hdr {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.5);
    z-index: 50; backdrop-filter: blur(8px); flex-shrink: 0;
  }

  .mk-hdr-left, .mk-hdr-right { display: flex; align-items: center; gap: 0.5rem; }

  .mk-back {
    width: 36px; height: 36px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 10px; color: white; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease;
  }
  .mk-back:hover { background: rgba(255,255,255,0.2); }

  .mk-lvl {
    padding: 0.35rem 0.8rem;
    background: linear-gradient(135deg, #FF9800, #F44336);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.85rem;
  }

  .mk-type-pill {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.35rem 0.8rem; background: rgba(255,255,255,0.1);
    border-radius: 16px; color: white; font-weight: 600; font-size: 0.8rem;
  }

  .mk-score-pill {
    padding: 0.35rem 0.8rem;
    background: rgba(251,191,36,0.2);
    border-radius: 16px; color: #FBBF24; font-weight: 700; font-size: 0.85rem;
  }

  .mk-combo-pill {
    padding: 0.35rem 0.7rem;
    background: rgba(239,83,80,0.25);
    border-radius: 16px; color: #EF5350; font-weight: 700; font-size: 0.8rem;
    animation: mkComboPop 0.5s ease;
  }

  @keyframes mkComboPop {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); opacity: 1; }
  }

  /* Progress bar */
  .mk-progress {
    display: flex; align-items: center; gap: 0.6rem;
    padding: 0.5rem 0.8rem; background: rgba(0,0,0,0.3);
    flex-shrink: 0; overflow-x: auto;
  }

  .mk-progress-label {
    color: #BCAAA4; font-weight: 700; font-size: 0.8rem; white-space: nowrap;
  }

  .mk-dots { display: flex; gap: 0.4rem; }

  .mk-dot {
    width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.12);
    border-radius: 8px; font-size: 0.7rem; font-weight: 700;
    color: rgba(255,255,255,0.3); transition: all 0.3s ease;
  }

  .mk-dot-done {
    background: rgba(76,175,80,0.2); border-color: #4CAF50;
    color: #4CAF50;
  }

  .mk-dot-active {
    background: rgba(255,152,0,0.2); border-color: #FF9800;
    color: #FF9800; animation: mkDotPulse 1.5s ease-in-out infinite;
  }

  @keyframes mkDotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .mk-stars-row { display: flex; gap: 0.15rem; margin-left: auto; }
  .mk-star-mini { font-size: 0.9rem; }

  /* Main game area */
  .mk-main {
    flex: 1; position: relative; display: flex; flex-direction: column;
    align-items: center; justify-content: flex-start;
    overflow: hidden; padding: 0.3rem 0.5rem;
    min-height: 0;
  }

  /* Kitchen background */
  .mk-kitchen { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

  .mk-counter {
    position: absolute; bottom: 0; left: 0; right: 0; height: 40%;
    background: linear-gradient(180deg,
      rgba(121,85,72,0.15) 0%,
      rgba(93,64,55,0.25) 60%,
      rgba(62,39,35,0.4) 100%);
    border-top: 2px solid rgba(255,255,255,0.05);
  }

  .mk-tiles {
    position: absolute; top: 0; left: 0; right: 0; height: 30%;
    background:
      repeating-linear-gradient(0deg,
        transparent, transparent 24px,
        rgba(255,255,255,0.015) 24px, rgba(255,255,255,0.015) 25px),
      repeating-linear-gradient(90deg,
        transparent, transparent 24px,
        rgba(255,255,255,0.015) 24px, rgba(255,255,255,0.015) 25px);
  }

  /* Particles */
  .mk-p {
    position: absolute; pointer-events: none; z-index: 2;
  }

  .mk-p-steam {
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%);
    filter: blur(4px);
  }

  .mk-p-sparkle {
    border-radius: 50%;
    background: radial-gradient(circle, currentColor 0%, transparent 70%);
    filter: blur(1px);
  }

  .mk-p-confetti {
    border-radius: 2px;
    background: currentColor;
  }

  .mk-p-flour {
    border-radius: 50%;
    background: radial-gradient(circle, currentColor 0%, transparent 70%);
    filter: blur(5px);
  }

  .mk-p-food {
    display: flex; align-items: center; justify-content: center;
    background: none !important;
    filter: none;
  }

  /* Question area */
  .mk-question-row {
    position: relative; z-index: 10; width: 100%; text-align: center;
    margin-bottom: 0.3rem; flex-shrink: 0;
  }

  .mk-chef-bubble {
    display: inline-flex; align-items: center; gap: 0.6rem;
    padding: 0.5rem 1.2rem;
    background: rgba(255,255,255,0.08);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 20px; backdrop-filter: blur(10px);
    animation: mkChefBob 2.5s ease-in-out infinite;
  }

  @keyframes mkChefBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .mk-chef { font-size: 1.8rem; }

  .mk-q-text {
    font-size: clamp(1rem, 3.5vw, 1.4rem); font-weight: 800;
    color: white; text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  /* Visual area */
  .mk-visual {
    position: relative; z-index: 5; width: 100%;
    display: flex; align-items: center; justify-content: center;
    flex: 1; min-height: 0;
  }

  .mk-scale-svg { width: 100%; max-width: 500px; height: auto; max-height: 100%; }

  .mk-cap-visual { flex-direction: column; }

  .mk-faucet { width: 100%; max-width: 320px; }
  .mk-faucet-svg { width: 100%; height: auto; }

  .mk-cap-pair {
    display: flex; gap: 1.5rem; align-items: flex-end; justify-content: center;
  }

  .mk-container-col {
    display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
  }

  .mk-container-svg { width: 110px; height: 150px; }

  .mk-cap-label {
    font-size: 0.75rem; font-weight: 700; color: #D7CCC8; text-align: center;
  }

  .mk-len-visual { }
  .mk-len-svg { width: 100%; max-width: 440px; height: auto; max-height: 100%; }

  .mk-speed-visual { }
  .mk-speed-svg { width: 100%; max-width: 440px; height: auto; max-height: 100%; }

  /* Answer buttons */
  .mk-answers {
    position: relative; z-index: 10;
    display: flex; align-items: center; justify-content: center;
    gap: 0.6rem; width: 100%; max-width: 500px;
    transition: all 0.5s ease; flex-shrink: 0;
    padding: 0.3rem 0;
  }

  .mk-answers-waiting { opacity: 0.5; filter: grayscale(0.5); }
  .mk-answers-ready {
    opacity: 1; filter: none;
    animation: mkAnswersReady 0.5s ease;
  }

  @keyframes mkAnswersReady {
    0% { transform: scale(0.95); opacity: 0.5; }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); opacity: 1; }
  }

  .mk-ans {
    flex: 1; position: relative; display: flex; flex-direction: column;
    align-items: center; gap: 0.3rem;
    padding: 0.8rem 0.5rem;
    background: rgba(255,255,255,0.07);
    border: 3px solid rgba(255,255,255,0.15);
    border-radius: 20px; cursor: pointer;
    transition: all 0.3s ease; overflow: hidden;
    font-family: 'Nunito', sans-serif; color: white;
  }

  .mk-ans:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.02);
    border-color: rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.12);
  }

  .mk-ans:active:not(:disabled) { transform: scale(0.96); }
  .mk-ans:disabled { cursor: default; }

  .mk-ans-emoji {
    font-size: clamp(2.2rem, 8vw, 3.5rem);
    transition: transform 0.3s ease;
  }

  .mk-ans-name {
    font-size: clamp(0.75rem, 2.5vw, 0.95rem);
    font-weight: 700; color: #D7CCC8;
  }

  .mk-ans-lock {
    position: absolute; top: 4px; right: 6px;
    font-size: 0.8rem; opacity: 0.5;
  }

  .mk-ans-glow {
    position: absolute; inset: -20px;
    opacity: 0; transition: opacity 0.3s ease; pointer-events: none;
  }

  .mk-ans-a:hover:not(:disabled) .mk-ans-glow {
    opacity: 1;
    background: radial-gradient(circle, rgba(96,165,250,0.12), transparent 70%);
  }

  .mk-ans-b:hover:not(:disabled) .mk-ans-glow {
    opacity: 1;
    background: radial-gradient(circle, rgba(251,146,60,0.12), transparent 70%);
  }

  .mk-ans-right {
    border-color: #4CAF50 !important;
    background: rgba(76,175,80,0.25) !important;
    animation: mkCorrect 0.5s ease;
  }

  @keyframes mkCorrect {
    0% { transform: scale(1); }
    25% { transform: scale(1.08); }
    50% { transform: scale(0.97); }
    100% { transform: scale(1); }
  }

  .mk-ans-wrong {
    border-color: #EF5350 !important;
    background: rgba(239,83,80,0.25) !important;
    animation: mkWrong 0.5s ease;
  }

  @keyframes mkWrong {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-8px); }
    30% { transform: translateX(8px); }
    45% { transform: translateX(-5px); }
    60% { transform: translateX(5px); }
    75% { transform: translateX(-2px); }
  }

  .mk-ans-reveal {
    border-color: #4CAF50 !important;
    background: rgba(76,175,80,0.15) !important;
  }

  .mk-vs {
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }

  .mk-vs-txt {
    font-size: 1rem; font-weight: 900; color: #FF9800;
    text-shadow: 0 0 16px rgba(255,152,0,0.4);
    animation: mkVsBeat 1.5s ease-in-out infinite;
  }

  @keyframes mkVsBeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }

  /* Result popup */
  .mk-result-pop {
    position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);
    z-index: 100;
    display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
    padding: 1rem 2rem; border-radius: 24px;
    animation: mkResultPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes mkResultPop {
    0% { transform: translate(-50%, -50%) scale(0) rotate(-10deg); opacity: 0; }
    60% { transform: translate(-50%, -50%) scale(1.15) rotate(2deg); }
    100% { transform: translate(-50%, -50%) scale(1) rotate(0); opacity: 1; }
  }

  .mk-pop-right {
    background: linear-gradient(135deg, rgba(76,175,80,0.9), rgba(56,142,60,0.9));
    border: 3px solid #81C784;
    box-shadow: 0 12px 40px rgba(76,175,80,0.5);
  }

  .mk-pop-wrong {
    background: linear-gradient(135deg, rgba(141,110,99,0.9), rgba(93,64,55,0.9));
    border: 3px solid #A1887F;
    box-shadow: 0 12px 40px rgba(93,64,55,0.5);
  }

  .mk-result-emoji { font-size: 2.5rem; }
  .mk-result-word { font-size: 1.4rem; font-weight: 900; color: white; }
  .mk-result-combo {
    font-size: 1rem; font-weight: 800; color: #FFD700;
    animation: mkComboFlash 0.5s ease;
  }

  @keyframes mkComboFlash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Bottom bar */
  .mk-bottom {
    padding: 0.5rem; background: rgba(0,0,0,0.4);
    text-align: center; backdrop-filter: blur(4px); flex-shrink: 0;
  }

  .mk-bottom-hint { font-size: 0.8rem; color: #8D6E63; font-weight: 600; }

  /* ── Level complete ─────────────────────────────────────────────────── */

  .mk-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .mk-complete-decor { position: absolute; inset: 0; overflow: hidden; }

  .mk-complete-float {
    position: absolute; top: 12%; font-size: 3rem;
    animation: mkFloatCeleb 3s ease-in-out infinite;
  }

  @keyframes mkFloatCeleb {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-25px) rotate(5deg); }
  }

  .mk-complete-inner {
    position: relative; z-index: 10; text-align: center;
    padding: 1.5rem; max-width: 450px;
  }

  .mk-complete-banner {
    font-size: clamp(1.6rem, 5vw, 2.2rem); font-weight: 900;
    color: white; margin-bottom: 1rem;
    animation: mkBannerIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes mkBannerIn {
    0% { transform: scale(0) rotate(-5deg); opacity: 0; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
  }

  .mk-complete-dish {
    font-size: 5rem; margin-bottom: 0.5rem;
    animation: mkDishBounce 1s ease infinite;
  }

  @keyframes mkDishBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.05); }
  }

  .mk-complete-recipe {
    font-size: 1.2rem; font-weight: 800; color: #FFCC02; margin-bottom: 1.2rem;
  }

  .mk-complete-stars {
    display: flex; justify-content: center; gap: 0.6rem; margin-bottom: 1.5rem;
  }

  .mk-complete-star { font-size: 2.5rem; }

  .mk-star-earned {
    animation: mkStarPop 0.5s ease;
  }
  .mk-star-earned:nth-child(2) { animation-delay: 0.15s; }
  .mk-star-earned:nth-child(3) { animation-delay: 0.3s; }

  @keyframes mkStarPop {
    0% { transform: scale(0) rotate(-30deg); }
    60% { transform: scale(1.3) rotate(10deg); }
    100% { transform: scale(1) rotate(0); }
  }

  .mk-star-empty { opacity: 0.3; font-size: 2.5rem; color: #8D6E63; }

  .mk-complete-stats {
    display: flex; justify-content: center; gap: 1.5rem;
    margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .mk-stat { display: flex; flex-direction: column; align-items: center; }
  .mk-stat-label { font-size: 0.8rem; color: #8D6E63; margin-bottom: 0.2rem; }
  .mk-stat-value { font-size: 1.5rem; font-weight: 900; color: white; }
  .mk-rank { font-size: 1rem; color: #FFD700; }

  .mk-complete-btns {
    display: flex; flex-direction: column; gap: 0.8rem; align-items: center;
  }

  .mk-next-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.9rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.1rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #FF9800, #F44336);
    border: none; border-radius: 40px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(244,67,54,0.4);
  }

  .mk-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 45px rgba(244,67,54,0.55);
  }

  .mk-exit-btn {
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: #BCAAA4;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .mk-exit-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* ── Responsive ─────────────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .mk-answers { flex-direction: column; gap: 0.4rem; }
    .mk-vs { margin: -0.2rem 0; }
    .mk-ans { padding: 0.6rem 0.5rem; flex-direction: row; gap: 0.5rem; }
    .mk-ans-emoji { font-size: 2.2rem; }
    .mk-hdr-mid { display: none; }
    .mk-cap-pair { gap: 0.8rem; }
    .mk-container-svg { width: 85px; height: 120px; }
    .mk-progress { padding: 0.4rem 0.6rem; gap: 0.4rem; }
    .mk-dot { width: 26px; height: 26px; font-size: 0.6rem; }
    .mk-main { padding: 0.2rem 0.3rem; }
    .mk-chef-bubble { padding: 0.4rem 0.8rem; }
    .mk-chef { font-size: 1.4rem; }
    .mk-q-text { font-size: 1rem; }
  }

  @media (max-width: 380px) {
    .mk-ans-emoji { font-size: 1.8rem; }
    .mk-ans-name { font-size: 0.7rem; }
    .mk-container-svg { width: 70px; height: 100px; }
    .mk-scale-svg { max-width: 340px; }
    .mk-len-svg, .mk-speed-svg { max-width: 320px; }
  }

  @media (max-height: 600px) {
    .mk-question-row { margin-bottom: 0.1rem; }
    .mk-progress { padding: 0.3rem 0.6rem; }
    .mk-dot { width: 24px; height: 24px; }
    .mk-chef-bubble { padding: 0.3rem 0.6rem; }
    .mk-answers { padding: 0.1rem 0; }
    .mk-ans { padding: 0.4rem; }
  }
`;
