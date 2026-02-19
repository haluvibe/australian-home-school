"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Game constants
const DROP_DISTANCE = 70;
const TROUGH_WIDTH = 120;

interface Animal {
  emoji: string;
  name: string;
  sound: string;
  foodEmoji: string;
}

const ANIMALS: Animal[] = [
  { emoji: '🐔', name: 'Chicken', sound: 'Cluck!', foodEmoji: '🌽' },
  { emoji: '🐷', name: 'Pig', sound: 'Oink!', foodEmoji: '🍎' },
  { emoji: '🐮', name: 'Cow', sound: 'Moo!', foodEmoji: '🥕' },
  { emoji: '🐑', name: 'Sheep', sound: 'Baa!', foodEmoji: '🥬' },
];

interface FoodItem {
  id: number;
  emoji: string;
  x: number;
  y: number;
  inPile: boolean;
  assignedTo: number | null; // pen index
  inLeftovers: boolean;
}

interface AnimalPen {
  id: number;
  animal: Animal;
  count: number;
  state: 'idle' | 'eating' | 'happy' | 'sad' | 'guilty';
  speechBubble: string | null;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  type: 'heart' | 'crumb' | 'confetti' | 'star';
  emoji: string;
  size: number;
}

interface Cloud {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

interface LevelConfig {
  numAnimals: number;
  totalFood: number;
  mode: 'sharing' | 'grouping';
  groupSize?: number;
  hasRemainder: boolean;
}

type GameScreen = 'intro' | 'playing' | 'checking' | 'result' | 'complete';

const LEVELS: LevelConfig[] = [
  { numAnimals: 2, totalFood: 6, mode: 'sharing', hasRemainder: false },
  { numAnimals: 2, totalFood: 8, mode: 'sharing', hasRemainder: false },
  { numAnimals: 3, totalFood: 9, mode: 'sharing', hasRemainder: false },
  { numAnimals: 3, totalFood: 12, mode: 'sharing', hasRemainder: false },
  { numAnimals: 4, totalFood: 8, mode: 'sharing', hasRemainder: false },
  { numAnimals: 4, totalFood: 16, mode: 'sharing', hasRemainder: false },
  { numAnimals: 3, totalFood: 7, mode: 'sharing', hasRemainder: true },
  { numAnimals: 4, totalFood: 10, mode: 'sharing', hasRemainder: true },
  { numAnimals: 3, totalFood: 12, mode: 'grouping', groupSize: 3, hasRemainder: false },
  { numAnimals: 4, totalFood: 15, mode: 'grouping', groupSize: 4, hasRemainder: true },
];

let itemIdCounter = 0;
const getNewId = (): number => ++itemIdCounter;

let particleIdCounter = 0;
const getParticleId = (): number => ++particleIdCounter;

interface FairShareFarmProps {
  onExit?: () => void;
}

export default function FairShareFarm({ onExit }: FairShareFarmProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [pens, setPens] = useState<AnimalPen[]>([]);
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clouds] = useState<Cloud[]>(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 5 + Math.random() * 15,
      speed: 0.3 + Math.random() * 0.4,
      size: 60 + Math.random() * 40,
      opacity: 0.5 + Math.random() * 0.3,
    }))
  );
  const [draggedFood, setDraggedFood] = useState<{
    id: number;
    offsetX: number;
    offsetY: number;
    currentX: number;
    currentY: number;
  } | null>(null);
  const [nearbyPen, setNearbyPen] = useState<number | null>(null);
  const [showCheck, setShowCheck] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<string>('');
  const [isFair, setIsFair] = useState<boolean>(false);
  const [firstTryBonus, setFirstTryBonus] = useState<boolean>(true);
  const [levelConfig, setLevelConfig] = useState<LevelConfig>(LEVELS[0]);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [groupingGroups, setGroupingGroups] = useState<number[][]>([]);
  const [currentGroupItems, setCurrentGroupItems] = useState<number[]>([]);
  const [nearLeftovers, setNearLeftovers] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const pensRef = useRef<HTMLDivElement>(null);
  const penElementsRef = useRef<Record<number, HTMLDivElement>>({});
  const leftoversRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const speechTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const getContainerRect = useCallback(() => {
    if (containerRef.current) {
      return containerRef.current.getBoundingClientRect();
    }
    return { left: 0, top: 0, width: 800, height: 600 };
  }, []);

  const spawnParticles = useCallback((x: number, y: number, type: Particle['type'], count: number) => {
    const newParticles: Particle[] = [];
    const emojis: Record<Particle['type'], string[]> = {
      heart: ['❤️', '💕', '💖'],
      crumb: ['·', '•', '∙'],
      confetti: ['🎉', '🎊', '⭐', '✨', '🌟'],
      star: ['⭐', '🌟', '✨'],
    };
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: getParticleId(),
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 6,
        vy: -2 - Math.random() * 4,
        life: 1,
        maxLife: 0.8 + Math.random() * 0.6,
        type,
        emoji: emojis[type][Math.floor(Math.random() * emojis[type].length)],
        size: type === 'crumb' ? 8 + Math.random() * 6 : 16 + Math.random() * 12,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const setAnimalState = useCallback((penIndex: number, state: AnimalPen['state'], speech?: string) => {
    setPens(prev => prev.map((p, i) =>
      i === penIndex ? { ...p, state, speechBubble: speech || null } : p
    ));
    if (speech) {
      const timeout = setTimeout(() => {
        setPens(prev => prev.map((p, i) =>
          i === penIndex ? { ...p, speechBubble: null } : p
        ));
      }, 1500);
      speechTimeoutsRef.current.push(timeout);
    }
  }, []);

  const getPenPosition = useCallback((penIndex: number): { x: number; y: number } => {
    const el = penElementsRef.current[penIndex];
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const penRect = el.getBoundingClientRect();
      return {
        x: penRect.left + penRect.width / 2 - containerRect.left,
        y: penRect.top + penRect.height / 2 - containerRect.top,
      };
    }
    return { x: 0, y: 0 };
  }, []);

  const getLeftoversPosition = useCallback((): { x: number; y: number } => {
    if (leftoversRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const leftRect = leftoversRef.current.getBoundingClientRect();
      return {
        x: leftRect.left + leftRect.width / 2 - containerRect.left,
        y: leftRect.top + leftRect.height / 2 - containerRect.top,
      };
    }
    return { x: 0, y: 0 };
  }, []);

  const initLevel = useCallback((lvl: number) => {
    const config = LEVELS[Math.min(lvl - 1, LEVELS.length - 1)];
    setLevelConfig(config);
    setShowCheck(false);
    setResultMessage('');
    setIsFair(false);
    setFirstTryBonus(true);
    setDraggedFood(null);
    setNearbyPen(null);
    setNearLeftovers(false);
    setParticles([]);
    setGroupingGroups([]);
    setCurrentGroupItems([]);
    penElementsRef.current = {};
    speechTimeoutsRef.current.forEach(t => clearTimeout(t));
    speechTimeoutsRef.current = [];

    // Select animals for this level
    const shuffled = [...ANIMALS].sort(() => Math.random() - 0.5);
    const selectedAnimals = shuffled.slice(0, config.numAnimals);
    const foodEmoji = selectedAnimals[0].foodEmoji;

    // Create pens
    const newPens: AnimalPen[] = selectedAnimals.map((animal, i) => ({
      id: i,
      animal,
      count: 0,
      state: 'idle' as const,
      speechBubble: null,
    }));

    // Create food pile
    const newFood: FoodItem[] = [];
    for (let i = 0; i < config.totalFood; i++) {
      newFood.push({
        id: getNewId(),
        emoji: foodEmoji,
        x: 0,
        y: 0,
        inPile: true,
        assignedTo: null,
        inLeftovers: false,
      });
    }

    setPens(newPens);
    setFoodItems(newFood);
  }, []);

  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setTotalStars(0);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    if (newLevel > 10) {
      setGameState('complete');
      return;
    }
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // Particle physics
  useEffect(() => {
    if (particles.length === 0) return;

    const updateParticles = () => {
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.15,
          life: p.life - (1 / 60) / p.maxLife,
        })).filter(p => p.life > 0);
        return updated;
      });
      animationRef.current = requestAnimationFrame(updateParticles);
    };

    animationRef.current = requestAnimationFrame(updateParticles);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [particles.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // Check if all food is distributed
  useEffect(() => {
    if (gameState !== 'playing') return;
    const allDistributed = foodItems.every(f => !f.inPile);
    if (allDistributed && foodItems.length > 0) {
      setShowCheck(true);
    } else {
      setShowCheck(false);
    }
  }, [foodItems, gameState]);

  // Compare animals' share counts for emotional reactions
  useEffect(() => {
    if (gameState !== 'playing') return;
    const counts = pens.map(p => p.count);
    const maxCount = Math.max(...counts, 0);
    const minCount = Math.min(...counts.filter(() => true), Infinity);

    if (maxCount === 0) return;

    pens.forEach((pen, i) => {
      if (pen.state === 'eating') return; // Don't interrupt eating animation
      if (counts[i] < maxCount && counts[i] > 0 && maxCount - minCount > 1) {
        setAnimalState(i, 'sad');
      } else if (counts[i] > minCount && maxCount - minCount > 1) {
        setAnimalState(i, 'guilty');
      } else if (counts[i] > 0) {
        // Only go idle if not in a special state
        setPens(prev => prev.map((p, idx) =>
          idx === i && p.state !== 'eating' && p.state !== 'happy' ? { ...p, state: 'idle' } : p
        ));
      }
    });
  }, [pens.map(p => p.count).join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheck = useCallback(() => {
    const config = levelConfig;

    if (config.mode === 'grouping') {
      // Check if items are in correct group sizes
      const targetSize = config.groupSize || 3;
      const leftoversCount = foodItems.filter(f => f.inLeftovers).length;
      const groupedCount = foodItems.filter(f => f.assignedTo !== null && !f.inLeftovers).length;
      const numGroups = groupingGroups.length;
      const allCorrectSize = groupingGroups.every(g => g.length === targetSize);
      const expectedGroups = Math.floor(config.totalFood / targetSize);
      const expectedLeftovers = config.totalFood % targetSize;

      if (allCorrectSize && numGroups === expectedGroups && leftoversCount === expectedLeftovers) {
        setIsFair(true);
        setResultMessage(`Perfect grouping! ${numGroups} groups of ${targetSize}${expectedLeftovers > 0 ? ` with ${expectedLeftovers} leftover` : ''}!`);
        const pts = 100 + (firstTryBonus ? 50 : 0);
        setScore(s => s + pts);
        setTotalStars(s => s + (firstTryBonus ? 3 : 2));
        pens.forEach((_, i) => setAnimalState(i, 'happy', 'Yay!'));

        // Confetti
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            spawnParticles(
              100 + Math.random() * 600,
              100 + Math.random() * 200,
              'confetti', 8
            );
          }, i * 200);
        }
        setGameState('result');
      } else {
        setIsFair(false);
        setFirstTryBonus(false);
        setResultMessage(`Not quite! Try to make groups of ${targetSize}.`);
        setGameState('result');
      }
      return;
    }

    // Sharing mode check
    const counts = pens.map(p => p.count);
    const leftoversCount = foodItems.filter(f => f.inLeftovers).length;
    const maxCount = Math.max(...counts);
    const minCount = Math.min(...counts);

    if (config.hasRemainder) {
      // With remainders: counts should differ by at most 1, leftovers should be remainder
      const expectedEach = Math.floor(config.totalFood / config.numAnimals);
      const expectedRemainder = config.totalFood % config.numAnimals;
      const allCorrect = counts.every(c => c === expectedEach) && leftoversCount === expectedRemainder;

      if (allCorrect) {
        setIsFair(true);
        setResultMessage(`FAIR SHARE! ${expectedEach} each with ${expectedRemainder} leftover!`);
        const pts = 100 + (firstTryBonus ? 50 : 0);
        setScore(s => s + pts);
        setTotalStars(s => s + (firstTryBonus ? 3 : 2));
        pens.forEach((_, i) => setAnimalState(i, 'happy', 'Yay!'));

        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            spawnParticles(
              100 + Math.random() * 600,
              100 + Math.random() * 200,
              'confetti', 8
            );
          }, i * 200);
        }
        setGameState('result');
      } else {
        setIsFair(false);
        setFirstTryBonus(false);
        if (leftoversCount === 0 && maxCount - minCount <= 1) {
          setResultMessage(`Almost! ${expectedRemainder} should go in the leftovers basket.`);
        } else {
          setResultMessage('Not quite equal! Try to share more fairly.');
        }
        pens.forEach((pen, i) => {
          if (counts[i] < maxCount) setAnimalState(i, 'sad');
          if (counts[i] > minCount) setAnimalState(i, 'guilty');
        });
        setGameState('result');
      }
    } else {
      // No remainders: all counts must be equal
      if (maxCount === minCount && leftoversCount === 0) {
        setIsFair(true);
        setResultMessage(`FAIR SHARE! ${maxCount} each!`);
        const pts = 100 + (firstTryBonus ? 50 : 0);
        setScore(s => s + pts);
        setTotalStars(s => s + (firstTryBonus ? 3 : 2));
        pens.forEach((_, i) => setAnimalState(i, 'happy', 'Yay!'));

        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            spawnParticles(
              100 + Math.random() * 600,
              100 + Math.random() * 200,
              'confetti', 8
            );
          }, i * 200);
        }
        setGameState('result');
      } else {
        setIsFair(false);
        setFirstTryBonus(false);
        if (leftoversCount > 0) {
          setResultMessage('All food should go to the animals! None left over.');
        } else {
          setResultMessage('Not quite equal! Try to share more fairly.');
        }
        pens.forEach((pen, i) => {
          if (counts[i] < maxCount) setAnimalState(i, 'sad');
          if (counts[i] > minCount) setAnimalState(i, 'guilty');
        });
        setGameState('result');
      }
    }
  }, [levelConfig, pens, foodItems, firstTryBonus, spawnParticles, setAnimalState, groupingGroups]);

  const handleRedistribute = () => {
    // Return all food to pile
    setFoodItems(prev => prev.map(f => ({
      ...f,
      inPile: true,
      assignedTo: null,
      inLeftovers: false,
    })));
    setPens(prev => prev.map(p => ({ ...p, count: 0, state: 'idle', speechBubble: null })));
    setGroupingGroups([]);
    setCurrentGroupItems([]);
    setGameState('playing');
    setShowCheck(false);
  };

  const findNearestPen = useCallback((x: number, y: number): number | null => {
    let closest: number | null = null;
    let closestDist = DROP_DISTANCE + TROUGH_WIDTH / 2;

    pens.forEach((_, i) => {
      const pos = getPenPosition(i);
      const dx = x - pos.x;
      const dy = y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    return closest;
  }, [pens, getPenPosition]);

  const isNearLeftovers = useCallback((x: number, y: number): boolean => {
    if (!levelConfig.hasRemainder) return false;
    const pos = getLeftoversPosition();
    const dx = x - pos.x;
    const dy = y - pos.y;
    return Math.sqrt(dx * dx + dy * dy) < DROP_DISTANCE + 40;
  }, [levelConfig.hasRemainder, getLeftoversPosition]);

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    food: FoodItem
  ): void => {
    if (gameState !== 'playing') return;
    e.preventDefault();
    e.stopPropagation();
    const rect = getContainerRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    // If food was assigned to a pen, remove it
    if (food.assignedTo !== null) {
      const penIdx = food.assignedTo;
      setPens(prev => prev.map((p, i) =>
        i === penIdx ? { ...p, count: p.count - 1 } : p
      ));
    }
    if (food.inLeftovers) {
      // Remove from leftovers
    }

    setFoodItems(prev => prev.map(f =>
      f.id === food.id ? { ...f, inPile: false, assignedTo: null, inLeftovers: false } : f
    ));

    setDraggedFood({
      id: food.id,
      offsetX: 0,
      offsetY: 0,
      currentX: clientX - rect.left,
      currentY: clientY - rect.top,
    });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent): void => {
    if (!draggedFood || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(20, Math.min(rect.width - 20, clientX - rect.left));
    const newY = Math.max(20, Math.min(rect.height - 20, clientY - rect.top));

    setDraggedFood(prev => prev ? { ...prev, currentX: newX, currentY: newY } : null);

    // Check proximity to pens
    const nearest = findNearestPen(newX, newY);
    setNearbyPen(nearest);
    setNearLeftovers(isNearLeftovers(newX, newY));
  }, [draggedFood, findNearestPen, isNearLeftovers]);

  const handleDragEnd = useCallback((): void => {
    if (!draggedFood) return;

    const { currentX, currentY } = draggedFood;

    // Check if near a pen
    const nearest = findNearestPen(currentX, currentY);
    if (nearest !== null) {
      // Drop food into pen
      setFoodItems(prev => prev.map(f =>
        f.id === draggedFood.id ? { ...f, assignedTo: nearest, inPile: false, inLeftovers: false } : f
      ));
      setPens(prev => prev.map((p, i) =>
        i === nearest ? { ...p, count: p.count + 1 } : p
      ));

      // Animal eating reaction
      setAnimalState(nearest, 'eating', pens[nearest]?.animal.sound || 'Yum!');
      const penPos = getPenPosition(nearest);
      spawnParticles(penPos.x, penPos.y - 30, 'crumb', 4);

      setTimeout(() => {
        setPens(prev => prev.map((p, i) =>
          i === nearest && p.state === 'eating' ? { ...p, state: 'idle' } : p
        ));
      }, 800);
    } else if (isNearLeftovers(currentX, currentY)) {
      // Drop into leftovers
      setFoodItems(prev => prev.map(f =>
        f.id === draggedFood.id ? { ...f, inLeftovers: true, inPile: false, assignedTo: null } : f
      ));
    } else {
      // Return to pile
      setFoodItems(prev => prev.map(f =>
        f.id === draggedFood.id ? { ...f, inPile: true, assignedTo: null, inLeftovers: false } : f
      ));
    }

    setDraggedFood(null);
    setNearbyPen(null);
    setNearLeftovers(false);
  }, [draggedFood, findNearestPen, isNearLeftovers, pens, getPenPosition, spawnParticles, setAnimalState]);

  // Drag event listeners
  useEffect(() => {
    if (!draggedFood) return;
    const moveHandler = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const endHandler = () => handleDragEnd();
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', endHandler);
    window.addEventListener('touchmove', moveHandler, { passive: false });
    window.addEventListener('touchend', endHandler);
    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', endHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('touchend', endHandler);
    };
  }, [draggedFood, handleDragMove, handleDragEnd]);

  // Cleanup speech timeouts
  useEffect(() => {
    return () => {
      speechTimeoutsRef.current.forEach(t => clearTimeout(t));
    };
  }, []);

  const pileItems = foodItems.filter(f => f.inPile);
  const leftoverItems = foodItems.filter(f => f.inLeftovers);

  // INTRO SCREEN
  if (gameState === 'intro') {
    return (
      <div className="farm-game">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-sky">
            {clouds.map(c => (
              <div key={c.id} className="cloud" style={{
                left: `${c.x}%`, top: `${c.y}%`,
                width: c.size, height: c.size * 0.5,
                opacity: c.opacity,
                animationDuration: `${80 / c.speed}s`,
              }} />
            ))}
            <div className="intro-sun" />
          </div>
          <div className="intro-ground" />
          <div className="intro-fence" />
          <div className="intro-barn" />
          <div className="intro-content">
            <div className="logo">
              <span className="logo-animal">🐮</span>
              <h1>Fair Share Farm</h1>
              <span className="logo-animal flip">🐷</span>
            </div>
            <p className="tagline">Share the food fairly between the animals!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="food-icon">🥕</span>
                  <span className="arrow">→</span>
                  <span className="trough-icon">🐔</span>
                  <span className="trough-icon">🐷</span>
                </div>
                <p><strong>DRAG</strong> food to animal troughs to <span className="highlight share">SHARE</span> equally!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="food-icon">🥕</span>
                  <span className="food-icon">🥕</span>
                  <span className="equals">=</span>
                  <span className="food-icon">🥕</span>
                  <span className="food-icon">🥕</span>
                </div>
                <p>Each animal must get the <span className="highlight fair">SAME</span> amount!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="food-icon">🥕</span>
                  <span className="arrow">→</span>
                  <span className="basket-icon">🧺</span>
                </div>
                <p>Sometimes there are <span className="highlight leftover">LEFTOVERS</span> — put them in the basket!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🌾</span>
              Start Farming!
              <span className="btn-icon">🌾</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // COMPLETE SCREEN (all 10 levels done)
  if (gameState === 'complete') {
    return (
      <div className="farm-game">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-sky">
            <div className="intro-sun" />
            {ANIMALS.map((a, i) => (
              <div key={i} className="floating-animal" style={{ left: `${15 + i * 20}%`, animationDelay: `${i * 0.4}s` }}>
                {a.emoji}
              </div>
            ))}
          </div>
          <div className="intro-ground" />
          <div className="complete-content">
            <h1 className="complete-title">Farm Champion!</h1>
            <div className="star-display">
              {Array.from({ length: Math.min(totalStars, 30) }, (_, i) => (
                <span key={i} className="big-star" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
              ))}
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Stars Earned</span>
                <span className="score-value">{totalStars}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Levels Done</span>
                <span className="score-value">10</span>
              </div>
            </div>
            <div className="complete-animals">
              {ANIMALS.map((a, i) => (
                <span key={i} className="rescued-emoji">{a.emoji}</span>
              ))}
            </div>
            <p className="complete-msg">All animals are well fed and happy!</p>
            <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
              Back to Farm Gate
            </button>
          </div>
        </div>
      </div>
    );
  }

  // RESULT SCREEN
  if (gameState === 'result') {
    return (
      <div className="farm-game">
        <style>{styles}</style>
        <div className="result-screen">
          <div className="result-sky">
            {clouds.map(c => (
              <div key={c.id} className="cloud" style={{
                left: `${c.x}%`, top: `${c.y}%`,
                width: c.size, height: c.size * 0.5,
                opacity: c.opacity,
                animationDuration: `${80 / c.speed}s`,
              }} />
            ))}
          </div>
          <div className="intro-ground" />
          <div className="result-content">
            {isFair ? (
              <>
                <h1 className="result-title fair">FAIR SHARE!</h1>
                <div className="result-animals">
                  {pens.map((pen, i) => (
                    <div key={i} className="result-animal happy-bounce">
                      <span className="result-emoji">{pen.animal.emoji}</span>
                      <span className="result-count">{pen.count}</span>
                    </div>
                  ))}
                  {leftoverItems.length > 0 && (
                    <div className="result-animal">
                      <span className="result-emoji">🧺</span>
                      <span className="result-count">{leftoverItems.length}</span>
                    </div>
                  )}
                </div>
                <p className="result-msg">{resultMessage}</p>
                <div className="star-reward">
                  {Array.from({ length: firstTryBonus ? 3 : 2 }, (_, i) => (
                    <span key={i} className="reward-star" style={{ animationDelay: `${i * 0.2}s` }}>⭐</span>
                  ))}
                </div>
                {/* confetti particles */}
                <div className="confetti-container">
                  {particles.map(p => (
                    <div key={p.id} className="particle" style={{
                      left: p.x, top: p.y, fontSize: p.size,
                      opacity: p.life,
                    }}>{p.emoji}</div>
                  ))}
                </div>
                <button className="next-btn" onClick={nextLevel}>
                  {level >= 10 ? 'See Results!' : `Level ${level + 1} →`}
                </button>
              </>
            ) : (
              <>
                <h1 className="result-title unfair">Not Quite Fair...</h1>
                <div className="result-animals">
                  {pens.map((pen, i) => (
                    <div key={i} className={`result-animal ${pen.state === 'sad' ? 'sad-droop' : pen.state === 'guilty' ? 'guilty-look' : ''}`}>
                      <span className="result-emoji">{pen.animal.emoji}</span>
                      <span className="result-count">{pen.count}</span>
                    </div>
                  ))}
                  {leftoverItems.length > 0 && (
                    <div className="result-animal">
                      <span className="result-emoji">🧺</span>
                      <span className="result-count">{leftoverItems.length}</span>
                    </div>
                  )}
                </div>
                <p className="result-msg">{resultMessage}</p>
                <button className="retry-btn" onClick={handleRedistribute}>
                  Try Again!
                </button>
              </>
            )}
            <button className="menu-btn small" onClick={() => onExit ? onExit() : setGameState('intro')}>
              Back to Farm Gate
            </button>
          </div>
        </div>
      </div>
    );
  }

  // PLAYING SCREEN
  return (
    <div className="farm-game">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Sky background */}
        <div className="sky-bg">
          <div className="sun-glow" />
          {clouds.map(c => (
            <div key={c.id} className="cloud" style={{
              left: `${c.x}%`, top: `${c.y}%`,
              width: c.size, height: c.size * 0.5,
              opacity: c.opacity,
              animationDuration: `${80 / c.speed}s`,
            }} />
          ))}
          {/* Background chickens pecking */}
          <div className="bg-chicken" style={{ left: '8%', bottom: '42%' }}>🐤</div>
          <div className="bg-chicken delay" style={{ left: '92%', bottom: '44%' }}>🐤</div>
        </div>

        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="food-progress">
              <span className="progress-icon">{foodItems[0]?.emoji || '🥕'}</span>
              <span className="progress-text">{pileItems.length} left</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Mode indicator */}
        <div className="mode-indicator">
          {levelConfig.mode === 'sharing' ? (
            <span>Share {levelConfig.totalFood} {foodItems[0]?.emoji || '🥕'} equally between {levelConfig.numAnimals} animals{levelConfig.hasRemainder ? ' (leftovers go in the basket!)' : ''}</span>
          ) : (
            <span>Group {levelConfig.totalFood} {foodItems[0]?.emoji || '🥕'} into sets of {levelConfig.groupSize}{levelConfig.hasRemainder ? ' (leftovers go in the basket!)' : ''}</span>
          )}
        </div>

        {/* Ground layer */}
        <div className="ground-layer" />

        {/* Food pile area */}
        <div className="food-pile-area">
          <div className="pile-label">Food Pile</div>
          <div className="food-pile">
            {pileItems.map((food, i) => (
              <div
                key={food.id}
                className="food-item in-pile"
                style={{
                  left: `${20 + (i % 6) * 14}%`,
                  top: `${10 + Math.floor(i / 6) * 35}%`,
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseDown={(e) => handleDragStart(e, food)}
                onTouchStart={(e) => handleDragStart(e, food)}
              >
                <span className="food-emoji">{food.emoji}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Animal pens */}
        <div className="pens-row" ref={pensRef}>
          {pens.map((pen, i) => {
            const penFoods = foodItems.filter(f => f.assignedTo === i);
            return (
              <div
                key={pen.id}
                ref={el => { if (el) penElementsRef.current[i] = el; }}
                className={`animal-pen ${nearbyPen === i ? 'highlight' : ''}`}
              >
                {/* Speech bubble */}
                {pen.speechBubble && (
                  <div className="speech-bubble">
                    <span>{pen.speechBubble}</span>
                  </div>
                )}

                {/* Animal */}
                <div className={`animal ${pen.state}`}>
                  <span className="animal-emoji">{pen.animal.emoji}</span>
                </div>

                {/* Trough */}
                <div className="trough">
                  <div className="trough-inner">
                    {penFoods.map((food, fi) => (
                      <div
                        key={food.id}
                        className="food-in-trough"
                        style={{ left: `${10 + (fi % 4) * 22}%` }}
                        onMouseDown={(e) => handleDragStart(e, food)}
                        onTouchStart={(e) => handleDragStart(e, food)}
                      >
                        <span className="food-emoji small">{food.emoji}</span>
                      </div>
                    ))}
                  </div>
                  <div className="trough-count">{pen.count}</div>
                </div>

                {/* Name label */}
                <div className="pen-name">{pen.animal.name}</div>
              </div>
            );
          })}

          {/* Leftovers basket */}
          {levelConfig.hasRemainder && (
            <div
              ref={leftoversRef}
              className={`leftovers-basket ${nearLeftovers ? 'highlight' : ''}`}
            >
              <div className="basket-emoji">🧺</div>
              <div className="basket-label">Leftovers</div>
              <div className="basket-items">
                {leftoverItems.map((food) => (
                  <div
                    key={food.id}
                    className="food-in-basket"
                    onMouseDown={(e) => handleDragStart(e, food)}
                    onTouchStart={(e) => handleDragStart(e, food)}
                  >
                    <span className="food-emoji small">{food.emoji}</span>
                  </div>
                ))}
              </div>
              <div className="basket-count">{leftoverItems.length}</div>
            </div>
          )}
        </div>

        {/* Dragged food overlay */}
        {draggedFood && (
          <div className="dragged-food" style={{
            left: draggedFood.currentX,
            top: draggedFood.currentY,
          }}>
            <span className="food-emoji dragging">{foodItems.find(f => f.id === draggedFood.id)?.emoji || '🥕'}</span>
          </div>
        )}

        {/* Particles */}
        {particles.map(p => (
          <div key={p.id} className="particle" style={{
            left: p.x, top: p.y, fontSize: p.size, opacity: p.life,
          }}>{p.emoji}</div>
        ))}

        {/* Check button */}
        {showCheck && (
          <div className="check-area">
            <button className="check-btn" onClick={handleCheck}>
              Check! ✓
            </button>
          </div>
        )}

        {/* Bottom bar */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">👆 Drag food to troughs</span>
            <span className="hint-fair">⚖️ Share equally!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .farm-game {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #87CEEB;
  }

  /* ===== SKY & BACKGROUND ===== */
  .sky-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #5BB5E8 0%, #87CEEB 40%, #A8D8EA 60%);
    z-index: 0;
    overflow: hidden;
  }

  .sun-glow {
    position: absolute;
    top: 15px;
    right: 60px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, #FFE066 0%, #FFD700 40%, rgba(255,215,0,0) 70%);
    box-shadow: 0 0 60px 30px rgba(255,215,0,0.3), 0 0 120px 60px rgba(255,215,0,0.15);
    animation: sunPulse 4s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes sunPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 60px 30px rgba(255,215,0,0.3), 0 0 120px 60px rgba(255,215,0,0.15); }
    50% { transform: scale(1.08); box-shadow: 0 0 80px 40px rgba(255,215,0,0.4), 0 0 150px 75px rgba(255,215,0,0.2); }
  }

  .cloud {
    position: absolute;
    background: white;
    border-radius: 50px;
    animation: cloudDrift linear infinite;
    z-index: 1;
  }

  .cloud::before, .cloud::after {
    content: '';
    position: absolute;
    background: white;
    border-radius: 50%;
  }

  .cloud::before {
    width: 60%;
    height: 120%;
    top: -40%;
    left: 20%;
  }

  .cloud::after {
    width: 40%;
    height: 90%;
    top: -30%;
    left: 50%;
  }

  @keyframes cloudDrift {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(100vw + 100px)); }
  }

  .bg-chicken {
    position: absolute;
    font-size: 1.6rem;
    animation: chickenPeck 1.5s ease-in-out infinite;
    z-index: 2;
  }

  .bg-chicken.delay {
    animation-delay: 0.7s;
  }

  @keyframes chickenPeck {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    30% { transform: translateY(5px) rotate(15deg); }
    60% { transform: translateY(0) rotate(0deg); }
  }

  .ground-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background: linear-gradient(180deg, #7EC850 0%, #6AB840 20%, #5DA835 50%, #4E9A2D 100%);
    z-index: 1;
    border-top: 4px solid #4E7A2D;
  }

  .ground-layer::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    height: 16px;
    background: repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(78,122,45,0.3) 20px, rgba(78,122,45,0.3) 22px);
  }

  /* ===== INTRO SCREEN ===== */
  .intro-screen, .complete-screen, .result-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-sky, .complete-sky, .result-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #5BB5E8 0%, #87CEEB 50%, #A8D8EA 70%);
    overflow: hidden;
  }

  .intro-sun {
    position: absolute;
    top: 20px;
    right: 80px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: radial-gradient(circle, #FFE066 0%, #FFD700 50%, rgba(255,215,0,0) 70%);
    box-shadow: 0 0 80px 40px rgba(255,215,0,0.3);
    animation: sunRise 3s ease-out forwards, sunPulse 4s ease-in-out 3s infinite;
  }

  @keyframes sunRise {
    0% { transform: translateY(80px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .intro-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(180deg, #7EC850 0%, #6AB840 30%, #5DA835 100%);
    z-index: 2;
    border-top: 4px solid #4E7A2D;
  }

  .intro-fence {
    position: absolute;
    bottom: 38%;
    left: 5%;
    right: 5%;
    height: 50px;
    z-index: 3;
    background: repeating-linear-gradient(90deg,
      #8B6914 0px, #8B6914 8px, transparent 8px, transparent 50px
    );
  }

  .intro-fence::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 6px;
    background: #A07828;
    box-shadow: 0 20px 0 #A07828;
  }

  .intro-barn {
    position: absolute;
    bottom: 38%;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 90px;
    background: linear-gradient(180deg, #C0392B 0%, #A93226 100%);
    z-index: 3;
    border-radius: 4px;
  }

  .intro-barn::before {
    content: '';
    position: absolute;
    top: -40px;
    left: -10px;
    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 45px solid #922B21;
  }

  .intro-barn::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 35px;
    height: 50px;
    background: #5D1A14;
    border-radius: 4px 4px 0 0;
  }

  .intro-content, .complete-content, .result-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 500px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem);
    font-weight: 900;
    color: #5D3A1A;
    text-shadow: 0 3px 6px rgba(0,0,0,0.15), 0 0 20px rgba(255,215,0,0.3);
  }

  .logo-animal {
    font-size: 2.8rem;
    animation: animalBounce 2s ease-in-out infinite;
  }

  .logo-animal.flip {
    animation-delay: 0.3s;
    transform: scaleX(-1);
  }

  @keyframes animalBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .tagline {
    color: #5D3A1A;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-shadow: 0 1px 3px rgba(255,255,255,0.5);
  }

  .instructions-card {
    background: rgba(255,255,255,0.85);
    border: 3px solid #A07828;
    border-radius: 20px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }

  .instructions-card h3 {
    color: #5D3A1A;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .instruction {
    margin-bottom: 1rem;
  }

  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
  }

  .food-icon { font-size: 1.8rem; }
  .arrow { color: #8B6914; font-size: 1.4rem; font-weight: 900; }
  .equals { color: #8B6914; font-size: 1.4rem; font-weight: 900; }
  .trough-icon { font-size: 2rem; }
  .basket-icon { font-size: 2rem; }
  .instruction p { color: #5D3A1A; font-size: 0.9rem; }
  .highlight { font-weight: 800; }
  .highlight.share { color: #27AE60; }
  .highlight.fair { color: #2980B9; }
  .highlight.leftover { color: #D35400; }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #27AE60, #2ECC71);
    border: 3px solid #1E8449;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(39,174,96,0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(39,174,96,0.5);
  }

  .btn-icon { font-size: 1.4rem; }

  /* ===== GAME HEADER ===== */
  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: rgba(93,58,26,0.85);
    z-index: 50;
    position: relative;
    border-bottom: 3px solid #8B6914;
  }

  .header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(255,255,255,0.25); }

  .level-badge {
    padding: 0.4rem 0.9rem;
    background: linear-gradient(135deg, #D35400, #E67E22);
    border-radius: 18px;
    font-weight: 700;
    color: white;
    font-size: 0.9rem;
  }

  .food-progress {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    background: rgba(255,255,255,0.15);
    border-radius: 18px;
  }

  .progress-icon { font-size: 1.1rem; }
  .progress-text { color: white; font-weight: 600; font-size: 0.85rem; }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(251,191,36,0.25);
    border-radius: 18px;
    color: #FFD700;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  /* ===== MODE INDICATOR ===== */
  .mode-indicator {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.9);
    font-size: 0.85rem;
    font-weight: 700;
    color: #5D3A1A;
    border-bottom: 2px solid #A07828;
  }

  /* ===== FOOD PILE ===== */
  .food-pile-area {
    position: relative;
    z-index: 10;
    height: 25%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3rem 1rem;
  }

  .pile-label {
    font-size: 0.8rem;
    font-weight: 700;
    color: #5D3A1A;
    background: rgba(255,255,255,0.7);
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    margin-bottom: 0.3rem;
  }

  .food-pile {
    position: relative;
    width: 100%;
    max-width: 420px;
    flex: 1;
    min-height: 60px;
  }

  .food-item {
    position: absolute;
    cursor: grab;
    z-index: 15;
    transition: transform 0.15s ease;
    touch-action: none;
  }

  .food-item:hover {
    transform: scale(1.15);
    z-index: 20;
  }

  .food-item.in-pile {
    animation: foodBob 2s ease-in-out infinite;
  }

  @keyframes foodBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .food-emoji {
    font-size: 2.4rem;
    display: block;
    filter: drop-shadow(0 3px 4px rgba(0,0,0,0.25));
  }

  .food-emoji.small {
    font-size: 1.4rem;
  }

  .food-emoji.dragging {
    font-size: 2.8rem;
    filter: drop-shadow(0 8px 12px rgba(0,0,0,0.35));
  }

  /* ===== ANIMAL PENS ===== */
  .pens-row {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.6rem;
    padding: 0.5rem;
    flex: 1;
    min-height: 160px;
    flex-wrap: wrap;
  }

  .animal-pen {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: all 0.3s ease;
    min-width: 100px;
    max-width: 140px;
    flex: 1;
  }

  .animal-pen.highlight .trough {
    border-color: #27AE60;
    box-shadow: 0 0 20px rgba(39,174,96,0.5), 0 4px 12px rgba(0,0,0,0.2);
  }

  .animal-pen.highlight .trough::before {
    opacity: 1;
  }

  /* Speech bubble */
  .speech-bubble {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border: 2px solid #5D3A1A;
    border-radius: 16px;
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
    font-weight: 800;
    color: #5D3A1A;
    z-index: 30;
    animation: speechPop 0.3s ease;
    white-space: nowrap;
  }

  .speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid white;
  }

  @keyframes speechPop {
    0% { transform: translateX(-50%) scale(0); }
    60% { transform: translateX(-50%) scale(1.2); }
    100% { transform: translateX(-50%) scale(1); }
  }

  /* Animal */
  .animal {
    font-size: 0; /* reset for emoji sizing */
    margin-bottom: 0.2rem;
    z-index: 15;
  }

  .animal-emoji {
    font-size: 4rem;
    display: block;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
  }

  .animal.idle .animal-emoji {
    animation: animalBreathe 3s ease-in-out infinite;
  }

  @keyframes animalBreathe {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.04); }
  }

  .animal.eating .animal-emoji {
    animation: animalChomp 0.3s ease-in-out 3;
  }

  @keyframes animalChomp {
    0%, 100% { transform: scaleY(1) rotate(0deg); }
    25% { transform: scaleY(0.9) rotate(-5deg); }
    50% { transform: scaleY(1.05) rotate(0deg); }
    75% { transform: scaleY(0.9) rotate(5deg); }
  }

  .animal.happy .animal-emoji {
    animation: animalHappy 0.5s ease-in-out infinite;
  }

  @keyframes animalHappy {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-12px) rotate(-5deg); }
    75% { transform: translateY(-12px) rotate(5deg); }
  }

  .animal.sad .animal-emoji {
    animation: animalSad 2s ease-in-out infinite;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)) brightness(0.85);
  }

  @keyframes animalSad {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(4px) rotate(-3deg); }
  }

  .animal.guilty .animal-emoji {
    animation: animalGuilty 1.5s ease-in-out infinite;
  }

  @keyframes animalGuilty {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-8deg); }
    75% { transform: rotate(8deg); }
  }

  /* Trough */
  .trough {
    width: 100%;
    max-width: 120px;
    height: 44px;
    background: linear-gradient(180deg, #C8A96E 0%, #A07828 40%, #8B6914 100%);
    border: 3px solid #6B4F1D;
    border-radius: 6px 6px 10px 10px;
    position: relative;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2);
    transition: all 0.3s ease;
  }

  .trough::before {
    content: '';
    position: absolute;
    inset: -12px;
    border: 3px dashed rgba(39,174,96,0.4);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .trough-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 4px;
  }

  .food-in-trough {
    position: relative;
    cursor: grab;
    touch-action: none;
    flex-shrink: 0;
  }

  .trough-count {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 26px;
    height: 26px;
    background: linear-gradient(135deg, #E67E22, #D35400);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 900;
    color: white;
    border: 2px solid white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    z-index: 20;
  }

  .pen-name {
    font-size: 0.7rem;
    font-weight: 700;
    color: #5D3A1A;
    margin-top: 0.2rem;
    background: rgba(255,255,255,0.6);
    padding: 0.1rem 0.4rem;
    border-radius: 8px;
  }

  /* ===== LEFTOVERS BASKET ===== */
  .leftovers-basket {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 80px;
    padding: 0.5rem;
    border: 3px dashed #D35400;
    border-radius: 16px;
    background: rgba(211,84,0,0.1);
    transition: all 0.3s ease;
    position: relative;
  }

  .leftovers-basket.highlight {
    border-color: #27AE60;
    background: rgba(39,174,96,0.15);
    box-shadow: 0 0 20px rgba(39,174,96,0.4);
  }

  .basket-emoji { font-size: 2.4rem; }
  .basket-label { font-size: 0.7rem; font-weight: 700; color: #D35400; }

  .basket-items {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    justify-content: center;
    max-width: 80px;
  }

  .food-in-basket {
    cursor: grab;
    touch-action: none;
  }

  .basket-count {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    background: #D35400;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 900;
    color: white;
    border: 2px solid white;
  }

  /* ===== DRAGGED FOOD ===== */
  .dragged-food {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 200;
    pointer-events: none;
    animation: dragPulse 0.5s ease-in-out infinite;
  }

  @keyframes dragPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
  }

  /* ===== PARTICLES ===== */
  .particle {
    position: absolute;
    pointer-events: none;
    z-index: 150;
    transform: translate(-50%, -50%);
  }

  /* ===== CHECK BUTTON ===== */
  .check-area {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }

  .check-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    color: white;
    background: linear-gradient(135deg, #27AE60, #2ECC71);
    border: 3px solid #1E8449;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(39,174,96,0.5);
    animation: checkBounce 1s ease-in-out infinite;
    transition: transform 0.2s;
  }

  .check-btn:hover {
    transform: scale(1.05);
  }

  @keyframes checkBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  /* ===== BOTTOM BAR ===== */
  .bottom-bar {
    position: relative;
    z-index: 10;
    padding: 0.5rem;
    background: rgba(93,58,26,0.85);
    text-align: center;
    border-top: 3px solid #8B6914;
  }

  .hint-text {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .hint-drag { color: #A8D8EA; }
  .hint-fair { color: #FFD700; }

  /* ===== RESULT SCREEN ===== */
  .result-title {
    font-size: clamp(1.6rem, 6vw, 2.4rem);
    font-weight: 900;
    margin-bottom: 1rem;
    text-shadow: 0 3px 8px rgba(0,0,0,0.15);
  }

  .result-title.fair {
    color: #27AE60;
    animation: fairPulse 1s ease-in-out infinite;
  }

  @keyframes fairPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .result-title.unfair {
    color: #D35400;
  }

  .result-animals {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .result-animal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.8);
    border-radius: 16px;
    padding: 0.8rem;
    min-width: 70px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .result-emoji { font-size: 2.5rem; }

  .result-count {
    font-size: 1.5rem;
    font-weight: 900;
    color: #5D3A1A;
  }

  .result-animal.happy-bounce {
    animation: resultBounce 0.8s ease-in-out infinite;
  }

  @keyframes resultBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .result-animal.sad-droop {
    animation: resultSad 2s ease-in-out infinite;
    filter: brightness(0.9);
  }

  @keyframes resultSad {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(5px); }
  }

  .result-animal.guilty-look {
    animation: resultGuilty 1.5s ease-in-out infinite;
  }

  @keyframes resultGuilty {
    0%, 100% { transform: rotate(0); }
    25% { transform: rotate(-5deg); }
    75% { transform: rotate(5deg); }
  }

  .result-msg {
    font-size: 1.1rem;
    font-weight: 700;
    color: #5D3A1A;
    margin-bottom: 1.2rem;
    background: rgba(255,255,255,0.7);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    display: inline-block;
  }

  .star-reward {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }

  .reward-star {
    font-size: 2.5rem;
    animation: starPop 0.5s ease-out backwards;
  }

  @keyframes starPop {
    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
    60% { transform: scale(1.3) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .confetti-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 200;
  }

  .retry-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #E67E22, #D35400);
    border: 3px solid #A04000;
    border-radius: 50px;
    cursor: pointer;
    margin-bottom: 0.8rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 16px rgba(211,84,0,0.4);
  }

  .retry-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(211,84,0,0.5);
  }

  .menu-btn {
    padding: 0.6rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #5D3A1A;
    background: rgba(255,255,255,0.6);
    border: 2px solid #A07828;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: block;
    margin: 0 auto;
  }

  .menu-btn:hover {
    background: rgba(255,255,255,0.9);
  }

  .menu-btn.small {
    margin-top: 0.6rem;
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  /* ===== COMPLETE SCREEN ===== */
  .floating-animal {
    position: absolute;
    top: 15%;
    font-size: 4rem;
    animation: floatAnimal 3s ease-in-out infinite;
    z-index: 5;
  }

  @keyframes floatAnimal {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .complete-title {
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 900;
    color: #5D3A1A;
    text-shadow: 0 3px 8px rgba(0,0,0,0.1), 0 0 30px rgba(255,215,0,0.3);
    margin-bottom: 1rem;
  }

  .star-display {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 1rem;
  }

  .big-star {
    font-size: 1.5rem;
    animation: starFloat 2s ease-in-out infinite;
  }

  @keyframes starFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(10deg); }
  }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.2rem;
    flex-wrap: wrap;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.7);
    border-radius: 16px;
    padding: 0.6rem 1rem;
  }

  .score-label {
    font-size: 0.75rem;
    color: #8B6914;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .score-value {
    font-size: 1.8rem;
    font-weight: 900;
    color: #5D3A1A;
  }

  .complete-animals {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .rescued-emoji {
    font-size: 2.5rem;
    animation: rescuedBounce 1s ease infinite;
  }

  .rescued-emoji:nth-child(2) { animation-delay: 0.15s; }
  .rescued-emoji:nth-child(3) { animation-delay: 0.3s; }
  .rescued-emoji:nth-child(4) { animation-delay: 0.45s; }

  @keyframes rescuedBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .complete-msg {
    color: #5D3A1A;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }

  /* ===== GAME SCREEN LAYOUT ===== */
  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    touch-action: none;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 600px) {
    .pens-row { gap: 0.4rem; padding: 0.3rem; }
    .animal-pen { min-width: 75px; }
    .animal-emoji { font-size: 3rem; }
    .trough { height: 36px; max-width: 95px; }
    .trough-count { width: 22px; height: 22px; font-size: 0.7rem; }
    .food-emoji { font-size: 2rem; }
    .food-emoji.small { font-size: 1.1rem; }
    .food-emoji.dragging { font-size: 2.4rem; }
    .hint-text { flex-direction: column; gap: 0.2rem; }
    .mode-indicator { font-size: 0.75rem; padding: 0.4rem; }
    .header-center { display: none; }
    .result-animals { gap: 0.6rem; }
    .result-emoji { font-size: 2rem; }
  }

  @media (max-width: 380px) {
    .animal-emoji { font-size: 2.5rem; }
    .animal-pen { min-width: 60px; }
    .trough { max-width: 75px; height: 30px; }
  }
`;
