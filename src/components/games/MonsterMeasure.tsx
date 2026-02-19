"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────

interface MonsterDef {
  name: string;
  color: string;
  bodyGradient: string;
  eyeColor: string;
  shape: 'round' | 'tall' | 'wide' | 'blob';
  hornStyle: 'single' | 'double' | 'none' | 'antennae';
}

interface Monster {
  id: number;
  def: MonsterDef;
  measureValue: number; // the actual measurement value
  displaySize: number;  // visual size multiplier
  x: number;
  y: number;
  placed: boolean;
  platformIndex: number;
  wobbleOffset: number;
  blinkTimer: number;
  isBlinking: boolean;
  expression: 'idle' | 'surprised' | 'proud' | 'confused' | 'celebrating';
}

interface Platform {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  monsterId: number | null;
}

interface DragState {
  monsterId: number;
  offsetX: number;
  offsetY: number;
  originX: number;
  originY: number;
  originPlatformIndex: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  type: 'confetti' | 'sparkle' | 'measure';
  text?: string;
  rotation: number;
  rotationSpeed: number;
}

interface ComparisonAnim {
  active: boolean;
  platform1: number;
  platform2: number;
  progress: number;
  result: string;
}

type MeasureType = 'height' | 'length' | 'weight' | 'capacity';
type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameComplete';
type ChallengeMode = 'order' | 'compare';

interface LevelConfig {
  monsterCount: number;
  measureType: MeasureType;
  mode: ChallengeMode;
  difficultySpread: number; // how close the values are (lower = harder)
}

// ─── Constants ──────────────────────────────────────────────────────────────

const MONSTER_DEFS: MonsterDef[] = [
  { name: 'Blobby', color: '#7c3aed', bodyGradient: 'radial-gradient(circle at 35% 35%, #a78bfa, #7c3aed, #5b21b6)', eyeColor: '#fbbf24', shape: 'round', hornStyle: 'single' },
  { name: 'Sprout', color: '#10b981', bodyGradient: 'radial-gradient(circle at 35% 35%, #6ee7b7, #10b981, #047857)', eyeColor: '#f472b6', shape: 'tall', hornStyle: 'double' },
  { name: 'Fizz', color: '#f59e0b', bodyGradient: 'radial-gradient(circle at 35% 35%, #fcd34d, #f59e0b, #d97706)', eyeColor: '#60a5fa', shape: 'wide', hornStyle: 'antennae' },
  { name: 'Gloop', color: '#ef4444', bodyGradient: 'radial-gradient(circle at 35% 35%, #fca5a5, #ef4444, #b91c1c)', eyeColor: '#34d399', shape: 'blob', hornStyle: 'none' },
  { name: 'Munch', color: '#3b82f6', bodyGradient: 'radial-gradient(circle at 35% 35%, #93c5fd, #3b82f6, #1d4ed8)', eyeColor: '#fbbf24', shape: 'round', hornStyle: 'double' },
];

const MEASURE_LABELS: Record<MeasureType, { challenge: string; orderAsc: string; orderDesc: string; compareSmall: string; compareBig: string; unit: string }> = {
  height: { challenge: 'Order these monsters from SHORTEST to TALLEST!', orderAsc: 'shortest to tallest', orderDesc: 'tallest to shortest', compareSmall: 'shortest', compareBig: 'tallest', unit: 'hands' },
  length: { challenge: 'Order these monsters from SHORTEST to LONGEST!', orderAsc: 'shortest to longest', orderDesc: 'longest to shortest', compareSmall: 'shortest', compareBig: 'longest', unit: 'spans' },
  weight: { challenge: 'Order these monsters from LIGHTEST to HEAVIEST!', orderAsc: 'lightest to heaviest', orderDesc: 'heaviest to lightest', compareSmall: 'lightest', compareBig: 'heaviest', unit: 'blobs' },
  capacity: { challenge: 'Order these cups from LEAST to MOST!', orderAsc: 'least to most', orderDesc: 'most to least', compareSmall: 'least', compareBig: 'most', unit: 'gulps' },
};

const LEVEL_CONFIGS: LevelConfig[] = [
  { monsterCount: 2, measureType: 'height', mode: 'order', difficultySpread: 40 },
  { monsterCount: 3, measureType: 'height', mode: 'order', difficultySpread: 30 },
  { monsterCount: 3, measureType: 'length', mode: 'order', difficultySpread: 30 },
  { monsterCount: 3, measureType: 'weight', mode: 'order', difficultySpread: 25 },
  { monsterCount: 3, measureType: 'capacity', mode: 'compare', difficultySpread: 25 },
  { monsterCount: 4, measureType: 'height', mode: 'order', difficultySpread: 20 },
  { monsterCount: 4, measureType: 'length', mode: 'order', difficultySpread: 18 },
  { monsterCount: 4, measureType: 'weight', mode: 'order', difficultySpread: 15 },
  { monsterCount: 5, measureType: 'height', mode: 'order', difficultySpread: 12 },
  { monsterCount: 5, measureType: 'capacity', mode: 'order', difficultySpread: 10 },
];

let idCounter = 0;
const nextId = () => ++idCounter;

// ─── Component ──────────────────────────────────────────────────────────────

interface MonsterMeasureProps {
  onExit?: () => void;
}

export default function MonsterMeasure({ onExit }: MonsterMeasureProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [comparison, setComparison] = useState<ComparisonAnim>({ active: false, platform1: -1, platform2: -1, progress: 0, result: '' });
  const [shakeWrong, setShakeWrong] = useState(false);
  const [challengeText, setChallengeText] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');
  const [starsEarned, setStarsEarned] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [introAnimPhase, setIntroAnimPhase] = useState(0);
  const [measureType, setMeasureType] = useState<MeasureType>('height');
  const [levelConfig, setLevelConfig] = useState<LevelConfig>(LEVEL_CONFIGS[0]);

  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const particleFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const comparisonTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const monstersRef = useRef(monsters);
  const platformsRef = useRef(platforms);

  useEffect(() => { monstersRef.current = monsters; }, [monsters]);
  useEffect(() => { platformsRef.current = platforms; }, [platforms]);

  // ─── Utility ────────────────────────────────────────────────────────────

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 800, height: 600 };
  }, []);

  const spawnParticles = useCallback((x: number, y: number, count: number, type: 'confetti' | 'sparkle' | 'measure', text?: string) => {
    const colors = ['#fbbf24', '#f472b6', '#34d399', '#60a5fa', '#a78bfa', '#fb923c'];
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 1.5 + Math.random() * 3;
      newParticles.push({
        id: nextId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'confetti' ? 2 : 0),
        life: 1,
        maxLife: 60 + Math.random() * 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: type === 'confetti' ? 6 + Math.random() * 6 : type === 'measure' ? 14 : 3 + Math.random() * 4,
        type,
        text: type === 'measure' ? text : undefined,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ─── Level Init ─────────────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    const config = LEVEL_CONFIGS[Math.min(lvl - 1, LEVEL_CONFIGS.length - 1)];
    setLevelConfig(config);
    setMeasureType(config.measureType);
    setAttempts(0);
    setShakeWrong(false);
    setShowHint(false);
    setComparison({ active: false, platform1: -1, platform2: -1, progress: 0, result: '' });

    const size = getContainerSize();
    const count = config.monsterCount;

    // Generate measurement values with configured spread
    const baseValue = 30;
    const values: number[] = [];
    for (let i = 0; i < count; i++) {
      values.push(baseValue + i * config.difficultySpread + Math.floor(Math.random() * Math.max(5, config.difficultySpread * 0.3)));
    }
    // Shuffle values for monster assignment
    const shuffledValues = [...values].sort(() => Math.random() - 0.5);

    // Create monsters in the waiting area
    const waitingAreaY = size.height - 130;
    const monsterSpacing = Math.min(130, (size.width - 60) / count);
    const startX = (size.width - monsterSpacing * (count - 1)) / 2;

    const newMonsters: Monster[] = shuffledValues.map((val, i) => ({
      id: nextId(),
      def: MONSTER_DEFS[i % MONSTER_DEFS.length],
      measureValue: val,
      displaySize: 0.6 + (val / 150) * 0.8,
      x: startX + i * monsterSpacing,
      y: waitingAreaY,
      placed: false,
      platformIndex: -1,
      wobbleOffset: Math.random() * Math.PI * 2,
      blinkTimer: 60 + Math.floor(Math.random() * 120),
      isBlinking: false,
      expression: 'idle' as const,
    }));

    // Create platforms
    const platformWidth = Math.min(120, (size.width - 40) / count - 16);
    const platformHeight = 16;
    const platformY = size.height * 0.42;
    const totalPlatformWidth = count * platformWidth + (count - 1) * 16;
    const platformStartX = (size.width - totalPlatformWidth) / 2;

    const ordinalLabels = ['1st', '2nd', '3rd', '4th', '5th'];

    const newPlatforms: Platform[] = Array.from({ length: count }, (_, i) => ({
      index: i,
      x: platformStartX + i * (platformWidth + 16),
      y: platformY,
      width: platformWidth,
      height: platformHeight,
      label: config.mode === 'order' ? ordinalLabels[i] : (i === 0 ? MEASURE_LABELS[config.measureType].compareSmall : MEASURE_LABELS[config.measureType].compareBig),
      monsterId: null,
    }));

    if (config.mode === 'order') {
      setChallengeText(MEASURE_LABELS[config.measureType].challenge);
    } else {
      setChallengeText(`Which monster is the ${MEASURE_LABELS[config.measureType].compareBig}?`);
    }

    setMonsters(newMonsters);
    setPlatforms(newPlatforms);
  }, [getContainerSize]);

  // ─── Idle Animations (Wobble + Blink) ───────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'playing') {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      lastTimeRef.current = timestamp;

      setMonsters(prev => prev.map(m => {
        let blinkTimer = m.blinkTimer - 1;
        let isBlinking = m.isBlinking;
        if (blinkTimer <= 0) {
          if (isBlinking) {
            isBlinking = false;
            blinkTimer = 80 + Math.floor(Math.random() * 160);
          } else {
            isBlinking = true;
            blinkTimer = 8;
          }
        }
        return {
          ...m,
          wobbleOffset: m.wobbleOffset + 0.03,
          blinkTimer,
          isBlinking,
        };
      }));

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, [gameScreen]);

  // ─── Particle System ────────────────────────────────────────────────────

  useEffect(() => {
    if (particles.length === 0) {
      if (particleFrameRef.current) cancelAnimationFrame(particleFrameRef.current);
      return;
    }

    const updateParticles = () => {
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.05,
          life: p.life - (1 / p.maxLife),
          rotation: p.rotation + p.rotationSpeed,
        })).filter(p => p.life > 0);
        return updated;
      });
      particleFrameRef.current = requestAnimationFrame(updateParticles);
    };

    particleFrameRef.current = requestAnimationFrame(updateParticles);
    return () => { if (particleFrameRef.current) cancelAnimationFrame(particleFrameRef.current); };
  }, [particles.length > 0]);

  // ─── Check Answer ───────────────────────────────────────────────────────

  const checkAnswer = useCallback(() => {
    const currentPlatforms = platformsRef.current;
    const currentMonsters = monstersRef.current;

    // Check if all platforms have monsters
    const allPlaced = currentPlatforms.every(p => p.monsterId !== null);
    if (!allPlaced) return;

    // Get the placed monsters in platform order
    const placedOrder = currentPlatforms.map(p => currentMonsters.find(m => m.id === p.monsterId)!);
    if (placedOrder.some(m => !m)) return;

    const config = LEVEL_CONFIGS[Math.min(level - 1, LEVEL_CONFIGS.length - 1)];

    let isCorrect = false;
    if (config.mode === 'order') {
      // Check ascending order
      isCorrect = placedOrder.every((m, i) => i === 0 || m.measureValue >= placedOrder[i - 1].measureValue);
    } else {
      // Compare mode: check the biggest is on the right platform
      const biggest = Math.max(...currentMonsters.map(m => m.measureValue));
      isCorrect = placedOrder[placedOrder.length - 1].measureValue === biggest;
    }

    if (isCorrect) {
      // Play comparison animation
      setComparison({ active: true, platform1: 0, platform2: 1, progress: 0, result: '' });

      // Set all monsters to celebrating
      setMonsters(prev => prev.map(m => ({ ...m, expression: 'celebrating' as const })));

      const size = getContainerSize();

      // Build comparison facts
      const facts: string[] = [];
      for (let i = 1; i < placedOrder.length; i++) {
        const diff = placedOrder[i].measureValue - placedOrder[i - 1].measureValue;
        const label = MEASURE_LABELS[config.measureType];
        facts.push(`${placedOrder[i].def.name} is bigger than ${placedOrder[i - 1].def.name} by ${diff} ${label.unit}!`);
      }

      // Spawn celebration particles
      for (let i = 0; i < placedOrder.length; i++) {
        setTimeout(() => {
          const m = placedOrder[i];
          if (m) {
            spawnParticles(m.x, m.y - 60, 20, 'confetti');
          }
        }, i * 300);
      }

      // Show measurement facts floating up
      setTimeout(() => {
        facts.forEach((fact, i) => {
          setTimeout(() => {
            spawnParticles(size.width / 2, size.height * 0.3, 5, 'measure', fact);
          }, i * 500);
        });
      }, 800);

      // Calculate stars
      const newAttempts = attempts;
      let stars = 3;
      if (newAttempts >= 2) stars = 2;
      if (newAttempts >= 4) stars = 1;
      setStarsEarned(stars);

      // Score
      const levelBonus = level * 50;
      const starBonus = stars * 100;
      setScore(prev => prev + levelBonus + starBonus);

      // Advance
      setTimeout(() => {
        if (level >= 10) {
          setGameScreen('gameComplete');
        } else {
          setGameScreen('levelComplete');
        }
      }, 2500);
    } else {
      // Wrong answer
      setAttempts(prev => prev + 1);
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 600);

      // Monsters look confused
      setMonsters(prev => prev.map(m => m.placed ? { ...m, expression: 'confused' as const } : m));
      setTimeout(() => {
        setMonsters(prev => prev.map(m => ({ ...m, expression: 'idle' as const })));
      }, 1500);

      // Show hint after 2 wrong attempts
      if (attempts >= 1) {
        const sorted = [...currentMonsters].sort((a, b) => a.measureValue - b.measureValue);
        const smallestName = sorted[0].def.name;
        const biggestName = sorted[sorted.length - 1].def.name;
        setHintText(`Hint: Look carefully! ${smallestName} is the smallest and ${biggestName} is the biggest.`);
        setShowHint(true);
        setTimeout(() => setShowHint(false), 4000);
      }
    }
  }, [level, attempts, getContainerSize, spawnParticles]);

  // ─── Drag Handling ──────────────────────────────────────────────────────

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, monster: Monster) => {
    e.preventDefault();
    e.stopPropagation();
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    setDragState({
      monsterId: monster.id,
      offsetX: clientX - rect.left - monster.x,
      offsetY: clientY - rect.top - monster.y,
      originX: monster.x,
      originY: monster.y,
      originPlatformIndex: monster.platformIndex,
    });

    // If removing from a platform, clear it
    if (monster.platformIndex >= 0) {
      setPlatforms(prev => prev.map(p => p.monsterId === monster.id ? { ...p, monsterId: null } : p));
      setMonsters(prev => prev.map(m => m.id === monster.id ? { ...m, placed: false, platformIndex: -1, expression: 'surprised' as const } : m));
    } else {
      setMonsters(prev => prev.map(m => m.id === monster.id ? { ...m, expression: 'surprised' as const } : m));
    }
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragState || !containerRef.current) return;
    e.preventDefault();

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(40, Math.min(rect.width - 40, clientX - rect.left - dragState.offsetX));
    const newY = Math.max(40, Math.min(rect.height - 40, clientY - rect.top - dragState.offsetY));

    setMonsters(prev => prev.map(m =>
      m.id === dragState.monsterId ? { ...m, x: newX, y: newY } : m
    ));
  }, [dragState]);

  const handleDragEnd = useCallback(() => {
    if (!dragState) return;

    const monster = monstersRef.current.find(m => m.id === dragState.monsterId);
    if (!monster) { setDragState(null); return; }

    // Check if dropped on a platform
    let droppedOnPlatform = false;
    const currentPlatforms = platformsRef.current;

    for (const platform of currentPlatforms) {
      const px = platform.x + platform.width / 2;
      const py = platform.y;
      const dx = monster.x - px;
      const dy = monster.y - py;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < platform.width * 0.8) {
        if (platform.monsterId === null) {
          // Place monster on platform
          const snapX = platform.x + platform.width / 2;
          const snapY = platform.y - 40;

          setPlatforms(prev => prev.map(p => p.index === platform.index ? { ...p, monsterId: monster.id } : p));
          setMonsters(prev => prev.map(m =>
            m.id === monster.id ? { ...m, x: snapX, y: snapY, placed: true, platformIndex: platform.index, expression: 'proud' as const } : m
          ));
          droppedOnPlatform = true;

          // Delayed expression reset
          setTimeout(() => {
            setMonsters(prev => prev.map(m =>
              m.id === monster.id ? { ...m, expression: 'idle' as const } : m
            ));
          }, 800);

          // Check if adjacent monsters exist for comparison animation
          setTimeout(() => {
            checkAnswer();
          }, 400);
          break;
        } else if (platform.monsterId !== monster.id) {
          // Swap with existing monster
          const existingMonsterId = platform.monsterId;
          const existingMonster = monstersRef.current.find(m => m.id === existingMonsterId);

          if (existingMonster) {
            // If original drag came from a platform, put existing monster there
            if (dragState.originPlatformIndex >= 0) {
              const origPlatform = currentPlatforms.find(p => p.index === dragState.originPlatformIndex);
              if (origPlatform) {
                const origSnapX = origPlatform.x + origPlatform.width / 2;
                const origSnapY = origPlatform.y - 40;

                setPlatforms(prev => prev.map(p => {
                  if (p.index === platform.index) return { ...p, monsterId: monster.id };
                  if (p.index === dragState.originPlatformIndex) return { ...p, monsterId: existingMonsterId };
                  return p;
                }));
                setMonsters(prev => prev.map(m => {
                  if (m.id === monster.id) return { ...m, x: platform.x + platform.width / 2, y: platform.y - 40, placed: true, platformIndex: platform.index, expression: 'surprised' as const };
                  if (m.id === existingMonsterId) return { ...m, x: origSnapX, y: origSnapY, placed: true, platformIndex: dragState.originPlatformIndex, expression: 'surprised' as const };
                  return m;
                }));
              }
            } else {
              // Send existing monster back to waiting area
              const size = getContainerSize();
              const waitingY = size.height - 130;
              setPlatforms(prev => prev.map(p => p.index === platform.index ? { ...p, monsterId: monster.id } : p));
              setMonsters(prev => prev.map(m => {
                if (m.id === monster.id) return { ...m, x: platform.x + platform.width / 2, y: platform.y - 40, placed: true, platformIndex: platform.index, expression: 'proud' as const };
                if (m.id === existingMonsterId) return { ...m, x: dragState.originX, y: waitingY, placed: false, platformIndex: -1, expression: 'confused' as const };
                return m;
              }));
            }

            droppedOnPlatform = true;

            setTimeout(() => {
              setMonsters(prev => prev.map(m => ({ ...m, expression: 'idle' as const })));
            }, 800);

            setTimeout(() => {
              checkAnswer();
            }, 400);
            break;
          }
        }
      }
    }

    if (!droppedOnPlatform) {
      // Return to origin or waiting area
      const size = getContainerSize();
      if (dragState.originPlatformIndex >= 0) {
        // Return to original platform
        const origPlatform = currentPlatforms.find(p => p.index === dragState.originPlatformIndex);
        if (origPlatform) {
          setPlatforms(prev => prev.map(p => p.index === dragState.originPlatformIndex ? { ...p, monsterId: monster.id } : p));
          setMonsters(prev => prev.map(m =>
            m.id === monster.id ? {
              ...m,
              x: origPlatform.x + origPlatform.width / 2,
              y: origPlatform.y - 40,
              placed: true,
              platformIndex: dragState.originPlatformIndex,
              expression: 'idle' as const
            } : m
          ));
        }
      } else {
        setMonsters(prev => prev.map(m =>
          m.id === monster.id ? { ...m, x: dragState.originX, y: size.height - 130, expression: 'idle' as const } : m
        ));
      }
    }

    setDragState(null);
  }, [dragState, getContainerSize, checkAnswer]);

  // ─── Drag Event Listeners ───────────────────────────────────────────────

  useEffect(() => {
    if (!dragState) return;
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
  }, [dragState, handleDragMove, handleDragEnd]);

  // ─── Intro Animation ───────────────────────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'intro') return;
    const t1 = setTimeout(() => setIntroAnimPhase(1), 300);
    const t2 = setTimeout(() => setIntroAnimPhase(2), 800);
    const t3 = setTimeout(() => setIntroAnimPhase(3), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [gameScreen]);

  // Cleanup comparison timer
  useEffect(() => {
    return () => { if (comparisonTimerRef.current) clearTimeout(comparisonTimerRef.current); };
  }, []);

  // ─── Game Actions ───────────────────────────────────────────────────────

  const startGame = () => {
    setGameScreen('playing');
    setLevel(1);
    setScore(0);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameScreen('playing');
    initLevel(newLevel);
  };

  const goToMenu = () => {
    if (onExit) onExit();
    else setGameScreen('intro');
  };

  // ─── Monster Renderer ──────────────────────────────────────────────────

  const renderMonster = (monster: Monster, isDragging: boolean) => {
    const { def, displaySize, isBlinking, expression, measureValue } = monster;
    const baseSize = 100;
    let scaleX = displaySize;
    let scaleY = displaySize;

    // Adjust shape based on measurement type
    if (measureType === 'height') {
      scaleY = displaySize * 1.2;
      scaleX = displaySize * 0.85;
    } else if (measureType === 'length') {
      scaleX = displaySize * 1.3;
      scaleY = displaySize * 0.8;
    } else if (measureType === 'weight') {
      scaleX = displaySize * 1.1;
      scaleY = displaySize * 1.0;
    } else if (measureType === 'capacity') {
      scaleX = displaySize * 0.9;
      scaleY = displaySize * 1.1;
    }

    const w = baseSize * scaleX;
    const h = baseSize * scaleY;

    // Expression states
    let mouthPath = 'M -8 8 Q 0 14 8 8'; // smile
    let eyeYOffset = 0;
    let eyeScale = 1;
    if (expression === 'surprised') { mouthPath = 'M -5 10 Q 0 18 5 10 Q 0 16 -5 10'; eyeScale = 1.3; }
    if (expression === 'proud') { mouthPath = 'M -10 6 Q 0 16 10 6'; eyeYOffset = -2; }
    if (expression === 'confused') { mouthPath = 'M -6 12 Q 0 8 6 12'; eyeYOffset = 2; }
    if (expression === 'celebrating') { mouthPath = 'M -12 4 Q 0 20 12 4'; eyeScale = 0.8; }

    return (
      <div className="monster-body-wrap" style={{ width: w, height: h }}>
        <svg viewBox="-55 -55 110 110" width={w} height={h} className="monster-svg">
          {/* Body */}
          {def.shape === 'round' && (
            <ellipse cx="0" cy="5" rx="38" ry="36" fill={def.color} className="monster-body-shape" />
          )}
          {def.shape === 'tall' && (
            <ellipse cx="0" cy="0" rx="30" ry="42" fill={def.color} className="monster-body-shape" />
          )}
          {def.shape === 'wide' && (
            <ellipse cx="0" cy="5" rx="42" ry="30" fill={def.color} className="monster-body-shape" />
          )}
          {def.shape === 'blob' && (
            <path d="M -35 10 Q -40 -20 -15 -35 Q 5 -45 25 -30 Q 42 -15 38 10 Q 35 35 10 38 Q -15 40 -30 30 Z" fill={def.color} className="monster-body-shape" />
          )}

          {/* Body highlight */}
          <ellipse cx="-10" cy="-12" rx="18" ry="14" fill="rgba(255,255,255,0.15)" />

          {/* Horns */}
          {def.hornStyle === 'single' && (
            <path d="M 0 -36 L -6 -50 L 6 -50 Z" fill={def.color} stroke="rgba(0,0,0,0.15)" strokeWidth="1" className="monster-horn" />
          )}
          {def.hornStyle === 'double' && (
            <>
              <path d="M -15 -32 L -22 -50 L -8 -44 Z" fill={def.color} stroke="rgba(0,0,0,0.15)" strokeWidth="1" className="monster-horn" />
              <path d="M 15 -32 L 22 -50 L 8 -44 Z" fill={def.color} stroke="rgba(0,0,0,0.15)" strokeWidth="1" className="monster-horn horn-right" />
            </>
          )}
          {def.hornStyle === 'antennae' && (
            <>
              <line x1="-12" y1="-32" x2="-20" y2="-52" stroke={def.color} strokeWidth="3" strokeLinecap="round" className="monster-antenna" />
              <circle cx="-20" cy="-52" r="5" fill={def.eyeColor} className="monster-antenna-tip" />
              <line x1="12" y1="-32" x2="20" y2="-52" stroke={def.color} strokeWidth="3" strokeLinecap="round" className="monster-antenna antenna-right" />
              <circle cx="20" cy="-52" r="5" fill={def.eyeColor} className="monster-antenna-tip" />
            </>
          )}

          {/* Eyes */}
          <g transform={`translate(0, ${eyeYOffset}) scale(${eyeScale})`}>
            {/* Left eye */}
            <ellipse cx="-13" cy="-8" rx="10" ry={isBlinking ? 1.5 : 10} fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            {!isBlinking && <circle cx="-11" cy="-6" r="5" fill="#1a1a2e" />}
            {!isBlinking && <circle cx="-9.5" cy="-8" r="2" fill="white" />}
            {/* Right eye */}
            <ellipse cx="13" cy="-8" rx="10" ry={isBlinking ? 1.5 : 10} fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            {!isBlinking && <circle cx="15" cy="-6" r="5" fill="#1a1a2e" />}
            {!isBlinking && <circle cx="16.5" cy="-8" r="2" fill="white" />}
          </g>

          {/* Mouth */}
          <path d={mouthPath} fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cheeks */}
          <circle cx="-25" cy="4" r="6" fill={def.eyeColor} opacity="0.3" />
          <circle cx="25" cy="4" r="6" fill={def.eyeColor} opacity="0.3" />

          {/* Feet */}
          <ellipse cx="-15" cy="36" rx="10" ry="5" fill={def.color} opacity="0.8" />
          <ellipse cx="15" cy="36" rx="10" ry="5" fill={def.color} opacity="0.8" />

          {/* Capacity cup */}
          {measureType === 'capacity' && (
            <g transform="translate(30, -5)">
              <path d="M -8 -12 L -6 12 Q 0 16 6 12 L 8 -12 Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <rect x="-6" y={12 - (measureValue / 10)} width="12" height={(measureValue / 10)} rx="2" fill={def.eyeColor} opacity="0.7" />
            </g>
          )}

          {/* Weight indicator */}
          {measureType === 'weight' && (
            <text x="0" y="26" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontWeight="bold">{measureValue}</text>
          )}
        </svg>

        {/* Name tag */}
        <div className="monster-nametag" style={{ background: def.color }}>
          {def.name}
        </div>
      </div>
    );
  };

  // ─── Render: Intro ──────────────────────────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="monster-measure">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="bg-shape" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 15 + Math.random() * 35,
                height: 15 + Math.random() * 35,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                background: ['rgba(124,58,237,0.15)', 'rgba(16,185,129,0.15)', 'rgba(245,158,11,0.15)', 'rgba(239,68,68,0.15)', 'rgba(59,130,246,0.15)'][i % 5],
              }} />
            ))}
          </div>

          <div className="intro-content">
            <div className="logo-area">
              <div className={`intro-monster m1 ${introAnimPhase >= 1 ? 'entered' : ''}`}>
                <svg viewBox="-50 -50 100 100" width="80" height="80">
                  <ellipse cx="0" cy="5" rx="35" ry="32" fill="#7c3aed" />
                  <ellipse cx="-10" cy="-12" rx="16" ry="12" fill="rgba(255,255,255,0.15)" />
                  <ellipse cx="-12" cy="-6" rx="9" ry="9" fill="white" />
                  <circle cx="-10" cy="-4" r="4.5" fill="#1a1a2e" />
                  <circle cx="-8.5" cy="-6" r="1.8" fill="white" />
                  <ellipse cx="12" cy="-6" rx="9" ry="9" fill="white" />
                  <circle cx="14" cy="-4" r="4.5" fill="#1a1a2e" />
                  <circle cx="15.5" cy="-6" r="1.8" fill="white" />
                  <path d="M -8 8 Q 0 16 8 8" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 0 -32 L -5 -46 L 5 -46 Z" fill="#7c3aed" />
                </svg>
              </div>
              <h1 className={`game-title ${introAnimPhase >= 2 ? 'entered' : ''}`}>Monster Measure</h1>
              <div className={`intro-monster m2 ${introAnimPhase >= 1 ? 'entered' : ''}`}>
                <svg viewBox="-50 -50 100 100" width="80" height="80">
                  <ellipse cx="0" cy="0" rx="28" ry="38" fill="#10b981" />
                  <ellipse cx="-8" cy="-12" rx="14" ry="10" fill="rgba(255,255,255,0.15)" />
                  <ellipse cx="-10" cy="-10" rx="8" ry="8" fill="white" />
                  <circle cx="-8" cy="-8" r="4" fill="#1a1a2e" />
                  <circle cx="-6.5" cy="-10" r="1.5" fill="white" />
                  <ellipse cx="10" cy="-10" rx="8" ry="8" fill="white" />
                  <circle cx="12" cy="-8" r="4" fill="#1a1a2e" />
                  <circle cx="13.5" cy="-10" r="1.5" fill="white" />
                  <path d="M -6 6 Q 0 14 6 6" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M -12 -34 L -18 -48 L -6 -42 Z" fill="#10b981" />
                  <path d="M 12 -34 L 18 -48 L 6 -42 Z" fill="#10b981" />
                </svg>
              </div>
            </div>

            <p className={`tagline ${introAnimPhase >= 2 ? 'entered' : ''}`}>Compare, Order &amp; Measure!</p>

            <div className={`instructions-card ${introAnimPhase >= 3 ? 'entered' : ''}`}>
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <div className="mini-monster" style={{ background: '#7c3aed', height: 30 }} />
                  <span className="compare-arrow">{'<'}</span>
                  <div className="mini-monster" style={{ background: '#10b981', height: 42 }} />
                  <span className="compare-arrow">{'<'}</span>
                  <div className="mini-monster" style={{ background: '#f59e0b', height: 54 }} />
                </div>
                <p><strong>COMPARE</strong> monsters by <span className="hl-height">height</span>, <span className="hl-length">length</span>, <span className="hl-weight">weight</span> &amp; <span className="hl-capacity">capacity</span></p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="drag-icon">👆</span>
                  <span className="drag-arrow">→</span>
                  <div className="mini-platform">1st</div>
                  <div className="mini-platform">2nd</div>
                  <div className="mini-platform">3rd</div>
                </div>
                <p><strong>DRAG</strong> monsters onto platforms in the <span className="hl-order">correct order</span>!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="star-icons">⭐⭐⭐</span>
                </div>
                <p>Earn <strong>stars</strong> for getting it right on the <span className="hl-first">first try</span>!</p>
              </div>
            </div>

            <button className={`start-btn ${introAnimPhase >= 3 ? 'entered' : ''}`} onClick={startGame}>
              <span className="btn-icon">📏</span>
              Start Measuring!
              <span className="btn-icon">📐</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Level Complete ─────────────────────────────────────────────

  if (gameScreen === 'levelComplete') {
    return (
      <div className="monster-measure">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {monsters.map((m, i) => (
              <div key={m.id} className="floating-monster" style={{ left: `${10 + i * 22}%`, animationDelay: `${i * 0.3}s` }}>
                <svg viewBox="-50 -50 100 100" width="70" height="70">
                  <ellipse cx="0" cy="5" rx="35" ry="32" fill={m.def.color} />
                  <ellipse cx="-12" cy="-6" rx="9" ry="9" fill="white" />
                  <circle cx="-10" cy="-4" r="4.5" fill="#1a1a2e" />
                  <ellipse cx="12" cy="-6" rx="9" ry="9" fill="white" />
                  <circle cx="14" cy="-4" r="4.5" fill="#1a1a2e" />
                  <path d="M -10 6 Q 0 18 10 6" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Level {level} Complete!</h1>
            <div className="stars-display">
              {[1, 2, 3].map(s => (
                <span key={s} className={`star ${s <= starsEarned ? 'earned' : ''}`} style={{ animationDelay: `${s * 0.2}s` }}>⭐</span>
              ))}
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Measurement</span>
                <span className="score-value score-type">{measureType}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={nextLevel}>Level {level + 1} →</button>
              <button className="menu-btn" onClick={goToMenu}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Game Complete ──────────────────────────────────────────────

  if (gameScreen === 'gameComplete') {
    return (
      <div className="monster-measure">
        <style>{styles}</style>
        <div className="complete-screen game-complete">
          <div className="complete-bg">
            {MONSTER_DEFS.map((def, i) => (
              <div key={i} className="floating-monster" style={{ left: `${5 + i * 20}%`, animationDelay: `${i * 0.25}s` }}>
                <svg viewBox="-50 -50 100 100" width="80" height="80">
                  <ellipse cx="0" cy="5" rx="35" ry="32" fill={def.color} />
                  <ellipse cx="-12" cy="-6" rx="9" ry="9" fill="white" />
                  <circle cx="-10" cy="-4" r="4.5" fill="#1a1a2e" />
                  <ellipse cx="12" cy="-6" rx="9" ry="9" fill="white" />
                  <circle cx="14" cy="-4" r="4.5" fill="#1a1a2e" />
                  <path d="M -12 4 Q 0 20 12 4" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">You&apos;re a Measurement Master!</h1>
            <div className="trophy-area">🏆</div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Final Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Levels</span>
                <span className="score-value">10 / 10</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={startGame}>Play Again</button>
              <button className="menu-btn" onClick={goToMenu}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Playing ────────────────────────────────────────────────────

  return (
    <div className="monster-measure">
      <style>{styles}</style>
      <div className="game-screen">
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={goToMenu}>←</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="measure-badge">
              <span className="measure-icon">{measureType === 'height' ? '📏' : measureType === 'length' ? '📐' : measureType === 'weight' ? '⚖️' : '🥤'}</span>
              <span className="measure-name">{measureType}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Challenge text */}
        <div className="challenge-bar">
          <p className="challenge-text">{challengeText}</p>
        </div>

        {/* Game area */}
        <div className={`game-area ${shakeWrong ? 'shake' : ''}`} ref={containerRef}>
          {/* Lab background decorations */}
          <div className="lab-bg">
            <div className="lab-wall" />
            <div className="lab-floor" />
            <div className="lab-poster poster-1">
              <span>📏</span>
              <small>Measure</small>
            </div>
            <div className="lab-poster poster-2">
              <span>⚖️</span>
              <small>Compare</small>
            </div>
            <div className="lab-ruler" />
          </div>

          {/* Platforms */}
          {platforms.map(platform => (
            <div
              key={platform.index}
              className={`platform ${platform.monsterId !== null ? 'occupied' : ''}`}
              style={{
                left: platform.x,
                top: platform.y,
                width: platform.width,
                height: platform.height,
              }}
            >
              <div className="platform-surface" />
              <div className="platform-label">{platform.label}</div>
              <div className="platform-glow" />

              {/* Comparison arrows between adjacent platforms */}
              {platform.index < platforms.length - 1 && platform.monsterId !== null && platforms[platform.index + 1]?.monsterId !== null && (
                <div className="comparison-tape">
                  <div className="tape-line" />
                  <div className="tape-arrow">→</div>
                </div>
              )}
            </div>
          ))}

          {/* Waiting area */}
          <div className="waiting-area">
            <div className="waiting-label">Drag monsters to the platforms!</div>
          </div>

          {/* Monsters */}
          {monsters.map(monster => {
            const isDragging = dragState?.monsterId === monster.id;
            const wobble = Math.sin(monster.wobbleOffset) * 3;
            const celebrateY = monster.expression === 'celebrating' ? Math.sin(monster.wobbleOffset * 3) * 8 : 0;

            return (
              <div
                key={monster.id}
                className={`monster ${isDragging ? 'dragging' : ''} ${monster.placed ? 'placed' : ''} ${monster.expression === 'celebrating' ? 'celebrating' : ''}`}
                style={{
                  left: monster.x,
                  top: monster.y + (isDragging ? 0 : wobble + celebrateY),
                  zIndex: isDragging ? 200 : monster.placed ? 50 : 100,
                }}
                onMouseDown={(e) => handleDragStart(e, monster)}
                onTouchStart={(e) => handleDragStart(e, monster)}
              >
                {renderMonster(monster, isDragging)}
              </div>
            );
          })}

          {/* Particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className={`particle particle-${p.type}`}
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                opacity: p.life,
                transform: `rotate(${p.rotation}deg)`,
                background: p.type === 'measure' ? 'none' : p.color,
                color: p.type === 'measure' ? '#fff' : undefined,
                fontSize: p.type === 'measure' ? '11px' : undefined,
              }}
            >
              {p.type === 'measure' && p.text && (
                <span className="particle-text">{p.text}</span>
              )}
            </div>
          ))}

          {/* Hint overlay */}
          {showHint && (
            <div className="hint-overlay">
              <div className="hint-bubble">
                <span className="hint-icon">💡</span>
                <p>{hintText}</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">👆 Drag monsters to platforms</span>
            <span className="hint-type">{measureType === 'height' ? '📏 Compare heights' : measureType === 'length' ? '📐 Compare lengths' : measureType === 'weight' ? '⚖️ Compare weights' : '🥤 Compare capacity'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Styles ─────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .monster-measure {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 40%, #ecfdf5 100%);
  }

  /* ─── Intro Screen ───────────────────────────────────────────── */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #ede9fe 0%, #f0f9ff 50%, #ecfdf5 100%);
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .bg-shape {
    position: absolute;
    border-radius: 40% 60% 50% 50%;
    animation: floatShape 7s ease-in-out infinite;
  }

  @keyframes floatShape {
    0%, 100% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.4; }
    33% { transform: translateY(-20px) rotate(60deg) scale(1.15); opacity: 0.6; }
    66% { transform: translateY(-10px) rotate(120deg) scale(0.95); opacity: 0.5; }
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
  }

  .logo-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .intro-monster {
    opacity: 0;
    transform: translateY(40px) scale(0.5);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .intro-monster.entered {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .intro-monster.m1 { animation: monsterBob 2.5s ease-in-out infinite; }
  .intro-monster.m2 { animation: monsterBob 2.5s ease-in-out 0.5s infinite; }

  @keyframes monsterBob {
    0%, 100% { transform: translateY(0) rotate(-3deg); }
    50% { transform: translateY(-12px) rotate(3deg); }
  }

  .intro-monster.m1.entered { animation: monsterBob 2.5s ease-in-out infinite; }
  .intro-monster.m2.entered { animation: monsterBob 2.5s ease-in-out 0.5s infinite; }

  .game-title {
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #7c3aed, #10b981, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.1s;
  }

  .game-title.entered { opacity: 1; transform: translateY(0); }

  .tagline {
    color: #64748b;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 600;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.5s ease 0.2s;
  }

  .tagline.entered { opacity: 1; transform: translateY(0); }

  .instructions-card {
    background: rgba(255,255,255,0.8);
    border: 2px solid rgba(124,58,237,0.15);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease 0.3s;
    box-shadow: 0 8px 32px rgba(124,58,237,0.08);
  }

  .instructions-card.entered { opacity: 1; transform: translateY(0); }

  .instructions-card h3 {
    color: #334155;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .instruction { margin-bottom: 1.2rem; }
  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.5rem;
    min-height: 60px;
  }

  .mini-monster {
    width: 24px;
    border-radius: 40% 40% 45% 45%;
    transition: height 0.3s ease;
  }

  .compare-arrow { color: #94a3b8; font-size: 1.3rem; font-weight: 700; margin-bottom: 4px; }

  .drag-icon { font-size: 1.8rem; }
  .drag-arrow { color: #94a3b8; font-size: 1.2rem; }

  .mini-platform {
    padding: 0.3rem 0.6rem;
    background: linear-gradient(135deg, #a78bfa, #818cf8);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
  }

  .star-icons { font-size: 2rem; letter-spacing: 0.3rem; }

  .instruction p { color: #475569; font-size: 0.9rem; }

  .hl-height { color: #7c3aed; font-weight: 700; }
  .hl-length { color: #10b981; font-weight: 700; }
  .hl-weight { color: #ef4444; font-weight: 700; }
  .hl-capacity { color: #3b82f6; font-weight: 700; }
  .hl-order { color: #f59e0b; font-weight: 700; }
  .hl-first { color: #10b981; font-weight: 700; }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #7c3aed, #10b981);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(124,58,237,0.3);
    opacity: 0;
    transform: translateY(20px);
  }

  .start-btn.entered { opacity: 1; transform: translateY(0); transition: all 0.5s ease 0.4s, box-shadow 0.3s ease, transform 0.3s ease; }

  .start-btn:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 15px 50px rgba(124,58,237,0.45);
  }

  .btn-icon { font-size: 1.4rem; }

  /* ─── Complete Screen ────────────────────────────────────────── */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #ecfdf5 0%, #f0f9ff 50%, #ede9fe 100%);
  }

  .complete-screen.game-complete {
    background: linear-gradient(180deg, #fef3c7 0%, #fce7f3 50%, #ede9fe 100%);
  }

  .complete-bg { position: absolute; inset: 0; overflow: hidden; }

  .floating-monster {
    position: absolute;
    top: 15%;
    animation: floatMonster 3s ease-in-out infinite;
  }

  @keyframes floatMonster {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 500px;
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: #1e293b;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stars-display {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .star {
    font-size: 3rem;
    opacity: 0.2;
    transform: scale(0.5);
    animation: none;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .star.earned {
    opacity: 1;
    transform: scale(1);
    animation: starPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, starGlow 2s ease-in-out infinite 0.5s;
  }

  @keyframes starPop {
    0% { transform: scale(0); opacity: 0; }
    70% { transform: scale(1.3); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes starGlow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
  }

  .trophy-area {
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: trophyBounce 1.5s ease-in-out infinite;
  }

  @keyframes trophyBounce {
    0%, 100% { transform: translateY(0) rotate(-3deg); }
    50% { transform: translateY(-15px) rotate(3deg); }
  }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background: rgba(255,255,255,0.6);
    border-radius: 20px;
    border: 2px solid rgba(124,58,237,0.1);
  }

  .score-item { display: flex; flex-direction: column; align-items: center; }
  .score-label { font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem; }
  .score-value { font-size: 2rem; font-weight: 900; color: #1e293b; }
  .score-type { font-size: 1.4rem; text-transform: capitalize; }

  .complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #7c3aed, #10b981);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(124,58,237,0.3);
  }

  .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(124,58,237,0.45);
  }

  .menu-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #64748b;
    background: transparent;
    border: 2px solid rgba(100,116,139,0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: #7c3aed; color: #7c3aed; }

  /* ─── Game Screen ────────────────────────────────────────────── */

  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    background: rgba(255,255,255,0.9);
    border-bottom: 2px solid rgba(124,58,237,0.1);
    z-index: 50;
    backdrop-filter: blur(8px);
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.6rem; }

  .back-btn {
    width: 38px;
    height: 38px;
    background: rgba(124,58,237,0.1);
    border: none;
    border-radius: 12px;
    color: #7c3aed;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 700;
  }

  .back-btn:hover { background: rgba(124,58,237,0.2); }

  .level-badge {
    padding: 0.4rem 1rem;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    border-radius: 20px;
    font-weight: 700;
    color: white;
    font-size: 0.9rem;
  }

  .measure-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1rem;
    background: rgba(16,185,129,0.1);
    border-radius: 20px;
    border: 1px solid rgba(16,185,129,0.2);
  }

  .measure-icon { font-size: 1.1rem; }
  .measure-name { color: #047857; font-weight: 700; font-size: 0.85rem; text-transform: capitalize; }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 1rem;
    background: rgba(251,191,36,0.15);
    border-radius: 20px;
    color: #b45309;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  .challenge-bar {
    padding: 0.6rem 1rem;
    background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(16,185,129,0.08));
    text-align: center;
    border-bottom: 1px solid rgba(124,58,237,0.08);
  }

  .challenge-text {
    color: #334155;
    font-size: 1rem;
    font-weight: 800;
    animation: challengePulse 3s ease-in-out infinite;
  }

  @keyframes challengePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }

  .game-area {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
    min-height: 0;
  }

  .game-area.shake {
    animation: shakeWrong 0.5s ease-in-out;
  }

  @keyframes shakeWrong {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-8px); }
    30% { transform: translateX(8px); }
    45% { transform: translateX(-6px); }
    60% { transform: translateX(6px); }
    75% { transform: translateX(-3px); }
    90% { transform: translateX(3px); }
  }

  /* ─── Lab Background ─────────────────────────────────────────── */

  .lab-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .lab-wall {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60%;
    background:
      linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
    border-bottom: 3px solid #e2e8f0;
  }

  .lab-floor {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background:
      repeating-linear-gradient(
        90deg,
        #e2e8f0 0px,
        #e2e8f0 1px,
        transparent 1px,
        transparent 50px
      ),
      repeating-linear-gradient(
        0deg,
        #e2e8f0 0px,
        #e2e8f0 1px,
        transparent 1px,
        transparent 50px
      ),
      linear-gradient(180deg, #eef2ff 0%, #e0e7ff 100%);
  }

  .lab-poster {
    position: absolute;
    top: 8%;
    width: 50px;
    height: 65px;
    background: rgba(255,255,255,0.9);
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .lab-poster span { font-size: 1.4rem; }
  .lab-poster small { font-size: 0.55rem; color: #94a3b8; font-weight: 700; }
  .poster-1 { left: 6%; }
  .poster-2 { right: 6%; }

  .lab-ruler {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 45%;
    background: repeating-linear-gradient(
      180deg,
      #fbbf24 0px,
      #fbbf24 8px,
      #f59e0b 8px,
      #f59e0b 10px,
      transparent 10px,
      transparent 20px
    );
    border-radius: 2px;
    opacity: 0.3;
  }

  /* ─── Platforms ──────────────────────────────────────────────── */

  .platform {
    position: absolute;
    transform: translate(0, 0);
    z-index: 20;
  }

  .platform-surface {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #a78bfa, #7c3aed);
    border-radius: 8px 8px 12px 12px;
    box-shadow:
      0 4px 12px rgba(124,58,237,0.3),
      0 2px 4px rgba(124,58,237,0.2),
      inset 0 2px 0 rgba(255,255,255,0.2);
    transition: all 0.3s ease;
  }

  .platform.occupied .platform-surface {
    background: linear-gradient(180deg, #6ee7b7, #10b981);
    box-shadow:
      0 4px 12px rgba(16,185,129,0.3),
      0 2px 4px rgba(16,185,129,0.2),
      inset 0 2px 0 rgba(255,255,255,0.2);
  }

  .platform-label {
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    font-weight: 800;
    color: #7c3aed;
    background: rgba(255,255,255,0.9);
    padding: 2px 10px;
    border-radius: 10px;
    white-space: nowrap;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }

  .platform-glow {
    position: absolute;
    inset: -15px;
    border: 2px dashed rgba(124,58,237,0.2);
    border-radius: 16px;
    pointer-events: none;
    animation: platformPulse 2s ease-in-out infinite;
  }

  .platform.occupied .platform-glow {
    border-color: rgba(16,185,129,0.3);
  }

  @keyframes platformPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.03); }
  }

  .comparison-tape {
    position: absolute;
    right: -24px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    z-index: 25;
  }

  .tape-line {
    width: 16px;
    height: 3px;
    background: #fbbf24;
    border-radius: 2px;
    animation: tapeExtend 0.4s ease-out forwards;
  }

  @keyframes tapeExtend {
    0% { width: 0; }
    100% { width: 16px; }
  }

  .tape-arrow {
    color: #fbbf24;
    font-size: 0.8rem;
    font-weight: 900;
    animation: arrowBounce 1s ease-in-out infinite;
  }

  @keyframes arrowBounce {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(3px); }
  }

  /* ─── Waiting Area ───────────────────────────────────────────── */

  .waiting-area {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 180px;
    background: linear-gradient(180deg, transparent, rgba(124,58,237,0.04) 30%, rgba(124,58,237,0.08));
    border-top: 2px dashed rgba(124,58,237,0.15);
    pointer-events: none;
    z-index: 5;
  }

  .waiting-label {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    font-weight: 700;
    color: #94a3b8;
    white-space: nowrap;
  }

  /* ─── Monsters ───────────────────────────────────────────────── */

  .monster {
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: grab;
    z-index: 100;
    transition: filter 0.2s ease;
  }

  .monster:hover {
    filter: brightness(1.08);
  }

  .monster.dragging {
    cursor: grabbing;
    z-index: 200 !important;
    filter: brightness(1.1) drop-shadow(0 8px 20px rgba(0,0,0,0.2));
    transform: translate(-50%, -50%) scale(1.1);
  }

  .monster.placed {
    z-index: 50;
  }

  .monster.celebrating {
    animation: monsterCelebrate 0.5s ease-in-out infinite;
  }

  @keyframes monsterCelebrate {
    0%, 100% { transform: translate(-50%, -50%) rotate(-5deg); }
    50% { transform: translate(-50%, -50%) rotate(5deg); }
  }

  .monster-body-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .monster-svg {
    overflow: visible;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }

  .monster-body-shape {
    transition: all 0.3s ease;
  }

  .monster-horn {
    animation: hornWiggle 3s ease-in-out infinite;
    transform-origin: center bottom;
  }

  .monster-horn.horn-right {
    animation-delay: 0.3s;
  }

  @keyframes hornWiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    75% { transform: rotate(5deg); }
  }

  .monster-antenna {
    animation: antennaWave 2s ease-in-out infinite;
    transform-origin: center bottom;
  }

  .monster-antenna.antenna-right {
    animation-delay: 0.4s;
  }

  @keyframes antennaWave {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(8deg); }
  }

  .monster-antenna-tip {
    animation: antennaTipGlow 1.5s ease-in-out infinite;
  }

  @keyframes antennaTipGlow {
    0%, 100% { opacity: 0.7; r: 5; }
    50% { opacity: 1; r: 6; }
  }

  .monster-nametag {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1px 8px;
    border-radius: 8px;
    font-size: 0.6rem;
    font-weight: 800;
    color: white;
    white-space: nowrap;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
  }

  /* ─── Particles ──────────────────────────────────────────────── */

  .particle {
    position: absolute;
    transform-origin: center;
    pointer-events: none;
    z-index: 300;
  }

  .particle-confetti {
    border-radius: 2px;
  }

  .particle-sparkle {
    border-radius: 50%;
    box-shadow: 0 0 4px currentColor;
  }

  .particle-measure {
    background: none !important;
    width: auto !important;
    height: auto !important;
  }

  .particle-text {
    background: rgba(124,58,237,0.9);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 700;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }

  /* ─── Hint Overlay ───────────────────────────────────────────── */

  .hint-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 250;
  }

  .hint-bubble {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 1.5rem;
    background: rgba(255,255,255,0.95);
    border: 2px solid #fbbf24;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(251,191,36,0.2);
    animation: hintBounce 1.5s ease-in-out infinite;
    max-width: 90%;
  }

  @keyframes hintBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  .hint-icon { font-size: 1.5rem; }
  .hint-bubble p { color: #334155; font-size: 0.85rem; font-weight: 600; }

  /* ─── Bottom Bar ─────────────────────────────────────────────── */

  .bottom-bar {
    padding: 0.6rem;
    background: rgba(255,255,255,0.9);
    border-top: 2px solid rgba(124,58,237,0.08);
    text-align: center;
    backdrop-filter: blur(8px);
  }

  .hint-text {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .hint-drag { color: #7c3aed; }
  .hint-type { color: #10b981; }

  /* ─── Responsive ─────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .game-header { padding: 0.4rem 0.8rem; }
    .header-center { display: none; }
    .challenge-text { font-size: 0.85rem; }
    .lab-poster { display: none; }
    .hint-text { flex-direction: column; gap: 0.2rem; }
    .platform-label { font-size: 0.65rem; }
    .waiting-label { font-size: 0.65rem; }
    .instruction p { font-size: 0.8rem; }
    .monster-nametag { font-size: 0.5rem; }
  }
`;
