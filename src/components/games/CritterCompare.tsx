"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ============================================================
// CRITTER COMPARE  --  Drag-the-Symbol Comparison Game
// Foundation / Year 1 Mathematics
// "Compare groups: more than, fewer than, equal to"
// ============================================================

interface CritterCompareProps {
  onExit?: () => void;
}

type GameScreen = 'intro' | 'playing' | 'complete';
type ComparisonSymbol = '>' | '<' | '=';

interface AnimalEntry {
  emoji: string;
  name: string;
}

const AUSSIE_ANIMALS: AnimalEntry[] = [
  { emoji: '🦘', name: 'Kangaroo' },
  { emoji: '🐨', name: 'Koala' },
  { emoji: '🦙', name: 'Llama' },
  { emoji: '🦎', name: 'Lizard' },
  { emoji: '🐊', name: 'Croc' },
];

interface AnimalInPaddock {
  id: number;
  emoji: string;
  x: number;
  y: number;
  enterDelay: number;
  entered: boolean;
  bouncePhase: number;
  bounceSpeed: number;
  flip: boolean;
}

interface DragState {
  symbol: ComparisonSymbol;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  offsetX: number;
  offsetY: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

interface LeafParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  opacity: number;
  hue: number;
}

interface DustPuff {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  born: number;
}

interface RoundData {
  leftCount: number;
  rightCount: number;
  leftAnimal: AnimalEntry;
  rightAnimal: AnimalEntry;
  correctSymbol: ComparisonSymbol;
  leftAnimals: AnimalInPaddock[];
  rightAnimals: AnimalInPaddock[];
}

interface GameStats {
  correct: number;
  wrong: number;
  totalRounds: number;
  bestStreak: number;
}

let idCounter = 0;
const nextId = (): number => ++idCounter;

const TOTAL_ROUNDS = 12;

function generateAnimalPositions(count: number, paddockW: number, paddockH: number, emoji: string): AnimalInPaddock[] {
  const animals: AnimalInPaddock[] = [];
  const margin = 20;
  const cellSize = 70;
  const cols = Math.max(1, Math.floor((paddockW - margin * 2) / cellSize));

  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const baseX = margin + col * cellSize + cellSize / 2;
    const baseY = margin + 15 + row * cellSize + cellSize / 2;
    animals.push({
      id: nextId(),
      emoji,
      x: baseX + (Math.random() - 0.5) * 20,
      y: Math.min(baseY + (Math.random() - 0.5) * 15, paddockH - 30),
      enterDelay: i * 180 + Math.random() * 100,
      entered: false,
      bouncePhase: Math.random() * Math.PI * 2,
      bounceSpeed: 0.8 + Math.random() * 0.6,
      flip: Math.random() > 0.5,
    });
  }
  return animals;
}

function generateRound(roundNum: number): RoundData {
  const difficulty = Math.min(Math.floor(roundNum / 4), 2);
  let maxCount: number;
  let equalChance: number;

  if (difficulty === 0) {
    maxCount = 5;
    equalChance = 0.2;
  } else if (difficulty === 1) {
    maxCount = 7;
    equalChance = 0.25;
  } else {
    maxCount = 10;
    equalChance = 0.3;
  }

  const isEqual = Math.random() < equalChance;
  let leftCount: number;
  let rightCount: number;

  if (isEqual) {
    leftCount = 1 + Math.floor(Math.random() * maxCount);
    rightCount = leftCount;
  } else {
    leftCount = 1 + Math.floor(Math.random() * maxCount);
    do {
      rightCount = 1 + Math.floor(Math.random() * maxCount);
    } while (rightCount === leftCount);
  }

  const correctSymbol: ComparisonSymbol = leftCount > rightCount ? '>' : leftCount < rightCount ? '<' : '=';

  // Pick two different animals
  const shuffled = [...AUSSIE_ANIMALS].sort(() => Math.random() - 0.5);
  const leftAnimal = shuffled[0];
  const rightAnimal = shuffled[1];

  const paddockW = 260;
  const paddockH = 280;

  return {
    leftCount,
    rightCount,
    leftAnimal,
    rightAnimal,
    correctSymbol,
    leftAnimals: generateAnimalPositions(leftCount, paddockW, paddockH, leftAnimal.emoji),
    rightAnimals: generateAnimalPositions(rightCount, paddockW, paddockH, rightAnimal.emoji),
  };
}

export default function CritterCompare({ onExit }: CritterCompareProps) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [round, setRound] = useState<RoundData | null>(null);
  const [roundNum, setRoundNum] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [stats, setStats] = useState<GameStats>({ correct: 0, wrong: 0, totalRounds: 0, bestStreak: 0 });
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [equationDisplay, setEquationDisplay] = useState<string | null>(null);
  const [shakeSymbol, setShakeSymbol] = useState<ComparisonSymbol | null>(null);
  const [celebrationParticles, setCelebrationParticles] = useState<Particle[]>([]);
  const [dustPuffs, setDustPuffs] = useState<DustPuff[]>([]);
  const [leaves, setLeaves] = useState<LeafParticle[]>([]);
  const [animalsEntered, setAnimalsEntered] = useState(false);
  const [paddockGlow, setPaddockGlow] = useState<'none' | 'correct' | 'wrong'>('none');
  const [joyJump, setJoyJump] = useState(false);
  const [introPhase, setIntroPhase] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const symbolRefs = useRef<Record<string, HTMLDivElement | null>>({ '<': null, '=': null, '>': null });
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const roundStartTimeRef = useRef(0);

  // Floating leaves ambient effect
  useEffect(() => {
    const initialLeaves: LeafParticle[] = [];
    for (let i = 0; i < 8; i++) {
      initialLeaves.push({
        id: nextId(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: 0.02 + Math.random() * 0.04,
        vy: 0.01 + Math.random() * 0.03,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2,
        size: 8 + Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.25,
        hue: 80 + Math.random() * 40,
      });
    }
    setLeaves(initialLeaves);
  }, []);

  // Leaf animation loop
  useEffect(() => {
    const updateLeaves = () => {
      setLeaves(prev => prev.map(leaf => {
        let { x, y, rotation } = leaf;
        x += leaf.vx;
        y += leaf.vy + Math.sin(timeRef.current * 0.5 + leaf.id) * 0.01;
        rotation += leaf.rotSpeed;
        if (x > 105) x = -5;
        if (y > 105) { y = -5; x = Math.random() * 100; }
        return { ...leaf, x, y, rotation };
      }));
      timeRef.current += 0.016;
      animRef.current = requestAnimationFrame(updateLeaves);
    };
    animRef.current = requestAnimationFrame(updateLeaves);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  // Dust puff cleanup
  useEffect(() => {
    if (dustPuffs.length === 0) return;
    const timeout = setTimeout(() => {
      setDustPuffs(prev => prev.filter(p => Date.now() - p.born < 800));
    }, 900);
    return () => clearTimeout(timeout);
  }, [dustPuffs]);

  // Celebration particle cleanup
  useEffect(() => {
    if (celebrationParticles.length === 0) return;
    const interval = setInterval(() => {
      setCelebrationParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.15,
          life: p.life + 1,
          opacity: Math.max(0, p.opacity - 0.02),
        })).filter(p => p.life < p.maxLife && p.opacity > 0);
        if (updated.length === 0) clearInterval(interval);
        return updated;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [celebrationParticles.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // Animal entrance animation
  useEffect(() => {
    if (!round || animalsEntered) return;
    const maxDelay = Math.max(
      ...round.leftAnimals.map(a => a.enterDelay),
      ...round.rightAnimals.map(a => a.enterDelay)
    );
    const timers: ReturnType<typeof setTimeout>[] = [];

    [...round.leftAnimals, ...round.rightAnimals].forEach(animal => {
      const t = setTimeout(() => {
        setRound(prev => {
          if (!prev) return prev;
          const updateList = (list: AnimalInPaddock[]) =>
            list.map(a => a.id === animal.id ? { ...a, entered: true } : a);
          // Create dust puff
          setDustPuffs(dp => [...dp, {
            id: nextId(),
            x: animal.x,
            y: animal.y,
            size: 15 + Math.random() * 10,
            opacity: 0.6,
            born: Date.now(),
          }]);
          return {
            ...prev,
            leftAnimals: updateList(prev.leftAnimals),
            rightAnimals: updateList(prev.rightAnimals),
          };
        });
      }, animal.enterDelay);
      timers.push(t);
    });

    const finalTimer = setTimeout(() => setAnimalsEntered(true), maxDelay + 200);
    timers.push(finalTimer);

    return () => timers.forEach(clearTimeout);
  }, [round?.leftAnimals[0]?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const spawnCelebration = useCallback((centerX: number, centerY: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      const angle = (Math.PI * 2 * i) / 40 + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 6;
      particles.push({
        id: nextId(),
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 4 + Math.random() * 8,
        opacity: 1,
        hue: Math.random() * 360,
        life: 0,
        maxLife: 40 + Math.random() * 30,
      });
    }
    setCelebrationParticles(particles);
  }, []);

  const startNewRound = useCallback((num: number) => {
    const newRound = generateRound(num);
    setRound(newRound);
    setFeedback(null);
    setEquationDisplay(null);
    setPaddockGlow('none');
    setJoyJump(false);
    setAnimalsEntered(false);
    setShakeSymbol(null);
    setDragState(null);
    setDustPuffs([]);
    setCelebrationParticles([]);
    roundStartTimeRef.current = Date.now();
  }, []);

  const startGame = () => {
    setGameScreen('playing');
    setScore(0);
    setStreak(0);
    setRoundNum(1);
    setStats({ correct: 0, wrong: 0, totalRounds: 0, bestStreak: 0 });
    startNewRound(1);
  };

  const handleAnswer = useCallback((symbol: ComparisonSymbol) => {
    if (!round || feedback) return;

    if (symbol === round.correctSymbol) {
      // Correct!
      const streakBonus = streak >= 3 ? 20 : streak >= 2 ? 10 : 0;
      const timeBonus = Math.max(0, Math.floor((10000 - (Date.now() - roundStartTimeRef.current)) / 1000)) * 5;
      const points = 50 + streakBonus + timeBonus;
      setScore(s => s + points);
      setStreak(s => s + 1);
      setStats(prev => ({
        ...prev,
        correct: prev.correct + 1,
        totalRounds: prev.totalRounds + 1,
        bestStreak: Math.max(prev.bestStreak, streak + 1),
      }));
      setFeedback('correct');
      setPaddockGlow('correct');
      setJoyJump(true);
      setEquationDisplay(`${round.leftCount} ${round.correctSymbol} ${round.rightCount}`);

      // Spawn celebration
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        spawnCelebration(rect.width / 2, rect.height / 2);
      }

      // Next round after delay
      setTimeout(() => {
        if (roundNum >= TOTAL_ROUNDS) {
          setStats(prev => ({
            ...prev,
            bestStreak: Math.max(prev.bestStreak, streak + 1),
          }));
          setGameScreen('complete');
        } else {
          const next = roundNum + 1;
          setRoundNum(next);
          startNewRound(next);
        }
      }, 2200);
    } else {
      // Wrong
      setStreak(0);
      setStats(prev => ({
        ...prev,
        wrong: prev.wrong + 1,
        totalRounds: prev.totalRounds + 1,
      }));
      setFeedback('wrong');
      setPaddockGlow('wrong');
      setShakeSymbol(symbol);

      setTimeout(() => {
        setFeedback(null);
        setPaddockGlow('none');
        setShakeSymbol(null);
      }, 1200);
    }
  }, [round, feedback, streak, roundNum, spawnCelebration, startNewRound]);

  // Drag handlers
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    symbol: ComparisonSymbol
  ) => {
    if (feedback) return;
    e.preventDefault();
    e.stopPropagation();

    const el = symbolRefs.current[symbol];
    if (!el || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const centerX = elRect.left + elRect.width / 2 - containerRect.left;
    const centerY = elRect.top + elRect.height / 2 - containerRect.top;

    setDragState({
      symbol,
      startX: centerX,
      startY: centerY,
      currentX: centerX,
      currentY: centerY,
      offsetX: clientX - containerRect.left - centerX,
      offsetY: clientY - containerRect.top - centerY,
    });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragState || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = clientX - rect.left - dragState.offsetX;
    const newY = clientY - rect.top - dragState.offsetY;
    setDragState(prev => prev ? { ...prev, currentX: newX, currentY: newY } : null);
  }, [dragState]);

  const handleDragEnd = useCallback(() => {
    if (!dragState || !dropZoneRef.current || !containerRef.current) {
      setDragState(null);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const dzRect = dropZoneRef.current.getBoundingClientRect();
    const dzCenterX = dzRect.left + dzRect.width / 2 - containerRect.left;
    const dzCenterY = dzRect.top + dzRect.height / 2 - containerRect.top;
    const dx = dragState.currentX - dzCenterX;
    const dy = dragState.currentY - dzCenterY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 80) {
      handleAnswer(dragState.symbol);
    }

    setDragState(null);
  }, [dragState, handleAnswer]);

  // Global drag listeners
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

  // Intro animation
  useEffect(() => {
    if (gameScreen !== 'intro') return;
    const timers = [
      setTimeout(() => setIntroPhase(1), 300),
      setTimeout(() => setIntroPhase(2), 800),
      setTimeout(() => setIntroPhase(3), 1300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [gameScreen]);

  const accuracy = stats.totalRounds > 0 ? Math.round((stats.correct / stats.totalRounds) * 100) : 0;

  // INTRO SCREEN
  if (gameScreen === 'intro') {
    return (
      <div className="critter-compare">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {/* Sunset sky gradient is in CSS */}
            <div className="intro-ground" />
            <div className="intro-silhouette tree1" />
            <div className="intro-silhouette tree2" />
            <div className="intro-silhouette tree3" />
            {/* Floating clouds */}
            <div className="intro-cloud cloud1" />
            <div className="intro-cloud cloud2" />
            <div className="intro-cloud cloud3" />
            {/* Ambient leaves */}
            {leaves.map(leaf => (
              <div key={leaf.id} className="ambient-leaf" style={{
                left: `${leaf.x}%`,
                top: `${leaf.y}%`,
                width: leaf.size,
                height: leaf.size,
                opacity: leaf.opacity,
                transform: `rotate(${leaf.rotation}deg)`,
                background: `hsl(${leaf.hue}, 50%, 35%)`,
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className={`intro-title ${introPhase >= 1 ? 'visible' : ''}`}>
              <div className="intro-critters">
                <span className="intro-emoji bounce-1">🦘</span>
                <span className="intro-emoji bounce-2">🐨</span>
                <span className="intro-emoji bounce-3">🐊</span>
              </div>
              <h1>Critter Compare</h1>
              <p className="intro-subtitle">Australian Outback Adventure</p>
            </div>

            <div className={`intro-instructions ${introPhase >= 2 ? 'visible' : ''}`}>
              <div className="instruction-row">
                <div className="instruction-visual">
                  <span className="mini-paddock">🦘🦘🦘</span>
                  <span className="symbol-preview">&gt;</span>
                  <span className="mini-paddock">🐨🐨</span>
                </div>
                <p><strong>DRAG</strong> the right symbol: <span className="sym-highlight">&gt;</span> <span className="sym-highlight">&lt;</span> <span className="sym-highlight">=</span></p>
              </div>
              <div className="instruction-row">
                <div className="instruction-visual">
                  <span className="mini-paddock">🦎🦎</span>
                  <span className="symbol-preview">=</span>
                  <span className="mini-paddock">🐊🐊</span>
                </div>
                <p>Compare the groups in each <span className="paddock-word">paddock</span></p>
              </div>
            </div>

            <button className={`start-btn ${introPhase >= 3 ? 'visible' : ''}`} onClick={startGame}>
              <span className="btn-icon">🌅</span>
              Start Adventure
              <span className="btn-icon">🦘</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // GAME COMPLETE SCREEN
  if (gameScreen === 'complete') {
    return (
      <div className="critter-compare">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {AUSSIE_ANIMALS.map((animal, i) => (
              <div key={animal.name} className="floating-animal" style={{
                left: `${10 + i * 18}%`,
                animationDelay: `${i * 0.4}s`,
              }}>
                {animal.emoji}
              </div>
            ))}
            {/* Stars */}
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bg-star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: 2 + Math.random() * 4,
                height: 2 + Math.random() * 4,
              }} />
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Adventure Complete!</h1>
            <div className="complete-stats">
              <div className="stat-card">
                <span className="stat-icon">🎯</span>
                <span className="stat-value">{accuracy}%</span>
                <span className="stat-label">Accuracy</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">⭐</span>
                <span className="stat-value">{score}</span>
                <span className="stat-label">Score</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">🔥</span>
                <span className="stat-value">{stats.bestStreak}</span>
                <span className="stat-label">Best Streak</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">✅</span>
                <span className="stat-value">{stats.correct}/{stats.totalRounds}</span>
                <span className="stat-label">Correct</span>
              </div>
            </div>
            <div className="complete-rating">
              {accuracy >= 90 ? '🌟🌟🌟 Outstanding!' :
               accuracy >= 70 ? '🌟🌟 Great Job!' :
               accuracy >= 50 ? '🌟 Good Try!' : 'Keep Practising!'}
            </div>
            <div className="complete-buttons">
              <button className="start-btn visible" onClick={startGame}>
                <span className="btn-icon">🔄</span>
                Play Again
                <span className="btn-icon">🦘</span>
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PLAYING SCREEN
  if (!round) return null;

  const getSymbolTransform = (sym: ComparisonSymbol): React.CSSProperties => {
    if (dragState && dragState.symbol === sym) {
      return {
        position: 'absolute' as const,
        left: dragState.currentX,
        top: dragState.currentY,
        transform: 'translate(-50%, -50%) scale(1.2)',
        zIndex: 200,
        cursor: 'grabbing',
        transition: 'none',
      };
    }
    if (shakeSymbol === sym) {
      return { animation: 'symbolShake 0.4s ease-in-out' };
    }
    return {};
  };

  const isSymbolBeingDragged = (sym: ComparisonSymbol): boolean =>
    dragState?.symbol === sym;

  const isOverDropZone = (): boolean => {
    if (!dragState || !dropZoneRef.current || !containerRef.current) return false;
    const containerRect = containerRef.current.getBoundingClientRect();
    const dzRect = dropZoneRef.current.getBoundingClientRect();
    const dzCenterX = dzRect.left + dzRect.width / 2 - containerRect.left;
    const dzCenterY = dzRect.top + dzRect.height / 2 - containerRect.top;
    const dx = dragState.currentX - dzCenterX;
    const dy = dragState.currentY - dzCenterY;
    return Math.sqrt(dx * dx + dy * dy) < 80;
  };

  return (
    <div className="critter-compare" ref={containerRef}>
      <style>{styles}</style>
      <div className="game-screen">
        {/* Outback background layers */}
        <div className="game-bg">
          <div className="sky-layer" />
          <div className="sun-orb" />
          <div className="hills-far" />
          <div className="hills-near" />
          <div className="ground-layer" />
          <div className="tree-sil left-tree" />
          <div className="tree-sil right-tree" />
          {/* Ambient leaves */}
          {leaves.map(leaf => (
            <div key={leaf.id} className="ambient-leaf" style={{
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
              width: leaf.size,
              height: leaf.size,
              opacity: leaf.opacity,
              transform: `rotate(${leaf.rotation}deg)`,
              background: `hsl(${leaf.hue}, 50%, 35%)`,
            }} />
          ))}
          {/* Floating clouds */}
          <div className="game-cloud gc1" />
          <div className="game-cloud gc2" />
        </div>

        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>&#8592;</button>
            <div className="round-badge">Round {roundNum}/{TOTAL_ROUNDS}</div>
          </div>
          <div className="header-center">
            <div className="prompt-badge">
              {feedback === 'correct' ? '✅ Correct!' :
               feedback === 'wrong' ? '❌ Try Again!' :
               'Drag the right symbol!'}
            </div>
          </div>
          <div className="header-right">
            <div className="streak-badge" style={{ opacity: streak > 0 ? 1 : 0.4 }}>
              <span className="streak-icon">🔥</span>
              <span>{streak}</span>
            </div>
            <div className="score-badge">
              <span className="score-icon">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Main game area */}
        <div className="game-area">
          {/* Left Paddock */}
          <div className={`paddock left-paddock ${paddockGlow === 'correct' ? 'glow-correct' : ''} ${paddockGlow === 'wrong' ? 'glow-wrong' : ''}`}>
            <div className="fence-top" />
            <div className="fence-left" />
            <div className="fence-right" />
            <div className="fence-bottom" />
            <div className="fence-post fp1" />
            <div className="fence-post fp2" />
            <div className="fence-post fp3" />
            <div className="fence-post fp4" />
            <div className="paddock-ground" />
            <div className="paddock-label">{round.leftAnimal.name}s</div>
            <div className="animals-container">
              {round.leftAnimals.map(animal => (
                <div
                  key={animal.id}
                  className={`animal ${animal.entered ? 'entered' : ''} ${joyJump && feedback === 'correct' ? 'joy-jump' : ''}`}
                  style={{
                    left: animal.x,
                    top: animal.y,
                    animationDelay: `${animal.bouncePhase * 200}ms`,
                    transform: `scaleX(${animal.flip ? -1 : 1})`,
                  }}
                >
                  <span className="animal-emoji">{animal.emoji}</span>
                </div>
              ))}
              {/* Dust puffs in left paddock */}
              {dustPuffs.filter((_, i) => i < round.leftCount).map(puff => (
                <div key={puff.id} className="dust-puff" style={{
                  left: puff.x,
                  top: puff.y,
                  width: puff.size * 2,
                  height: puff.size * 2,
                }} />
              ))}
            </div>
            {(feedback === 'correct' || animalsEntered) && (
              <div className="count-display">{round.leftCount}</div>
            )}
          </div>

          {/* Center: Drop Zone & Symbols */}
          <div className="center-column">
            {/* Equation display on correct answer */}
            {equationDisplay && (
              <div className="equation-display">
                <span className="eq-text">{equationDisplay}</span>
              </div>
            )}

            {/* Drop Zone */}
            <div
              ref={dropZoneRef}
              className={`drop-zone ${dragState ? 'active' : ''} ${isOverDropZone() ? 'hover' : ''} ${feedback === 'correct' ? 'correct' : ''}`}
            >
              {feedback === 'correct' ? (
                <span className="drop-symbol placed">{round.correctSymbol}</span>
              ) : (
                <span className="drop-hint">?</span>
              )}
            </div>

            {/* Symbol buttons */}
            <div className="symbols-tray">
              {(['<', '=', '>'] as ComparisonSymbol[]).map(sym => (
                <div
                  key={sym}
                  ref={el => { symbolRefs.current[sym] = el; }}
                  className={`symbol-token ${isSymbolBeingDragged(sym) ? 'dragging' : ''} ${feedback ? 'disabled' : ''}`}
                  style={getSymbolTransform(sym)}
                  onMouseDown={(e) => handleDragStart(e, sym)}
                  onTouchStart={(e) => handleDragStart(e, sym)}
                >
                  <div className="symbol-shine" />
                  <span className="symbol-text">{sym}</span>
                  <div className="symbol-glow" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Paddock */}
          <div className={`paddock right-paddock ${paddockGlow === 'correct' ? 'glow-correct' : ''} ${paddockGlow === 'wrong' ? 'glow-wrong' : ''}`}>
            <div className="fence-top" />
            <div className="fence-left" />
            <div className="fence-right" />
            <div className="fence-bottom" />
            <div className="fence-post fp1" />
            <div className="fence-post fp2" />
            <div className="fence-post fp3" />
            <div className="fence-post fp4" />
            <div className="paddock-ground" />
            <div className="paddock-label">{round.rightAnimal.name}s</div>
            <div className="animals-container">
              {round.rightAnimals.map(animal => (
                <div
                  key={animal.id}
                  className={`animal ${animal.entered ? 'entered' : ''} ${joyJump && feedback === 'correct' ? 'joy-jump' : ''}`}
                  style={{
                    left: animal.x,
                    top: animal.y,
                    animationDelay: `${animal.bouncePhase * 200}ms`,
                    transform: `scaleX(${animal.flip ? -1 : 1})`,
                  }}
                >
                  <span className="animal-emoji">{animal.emoji}</span>
                </div>
              ))}
            </div>
            {(feedback === 'correct' || animalsEntered) && (
              <div className="count-display">{round.rightCount}</div>
            )}
          </div>
        </div>

        {/* Celebration particles */}
        {celebrationParticles.map(p => (
          <div key={p.id} className="celebration-particle" style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background: `hsl(${p.hue}, 80%, 60%)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }} />
        ))}

        {/* Bottom hint bar */}
        <div className="bottom-bar">
          <span className="hint-text">Drag a symbol to the centre</span>
          <div className="progress-dots">
            {[...Array(TOTAL_ROUNDS)].map((_, i) => (
              <div key={i} className={`dot ${i < roundNum - 1 ? 'completed' : ''} ${i === roundNum - 1 ? 'current' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// STYLES — All CSS-in-JS, no Tailwind
// ============================================================

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .critter-compare {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #1a0a00;
    position: relative;
  }

  /* ═══════════════════════════════════════
     INTRO SCREEN
     ═══════════════════════════════════════ */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      #1a0533 0%,
      #4a1942 15%,
      #c2442d 35%,
      #e8832a 50%,
      #f5b041 60%,
      #d4a056 70%,
      #8b4513 80%,
      #5c2e0e 100%
    );
    overflow: hidden;
  }

  .intro-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(180deg, #8b4513 0%, #6b3410 40%, #4a2308 100%);
    border-top: 2px solid rgba(210, 150, 80, 0.3);
  }

  .intro-silhouette {
    position: absolute;
    bottom: 28%;
    background: rgba(30, 15, 5, 0.7);
  }

  .intro-silhouette.tree1 {
    left: 5%;
    width: 8px;
    height: 120px;
    border-radius: 3px;
  }
  .intro-silhouette.tree1::before {
    content: '';
    position: absolute;
    top: -30px;
    left: -25px;
    width: 60px;
    height: 50px;
    background: rgba(30, 50, 20, 0.6);
    border-radius: 50%;
  }
  .intro-silhouette.tree1::after {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40px;
    height: 35px;
    background: rgba(30, 50, 20, 0.5);
    border-radius: 50%;
  }

  .intro-silhouette.tree2 {
    right: 8%;
    width: 6px;
    height: 100px;
    border-radius: 3px;
  }
  .intro-silhouette.tree2::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -20px;
    width: 50px;
    height: 40px;
    background: rgba(30, 50, 20, 0.6);
    border-radius: 50%;
  }

  .intro-silhouette.tree3 {
    left: 15%;
    width: 5px;
    height: 70px;
    border-radius: 2px;
  }
  .intro-silhouette.tree3::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -15px;
    width: 35px;
    height: 30px;
    background: rgba(30, 50, 20, 0.5);
    border-radius: 50%;
  }

  .intro-cloud {
    position: absolute;
    background: rgba(255, 200, 150, 0.15);
    border-radius: 50%;
    filter: blur(8px);
  }

  .intro-cloud.cloud1 {
    top: 8%;
    left: 10%;
    width: 120px;
    height: 40px;
    animation: cloudDrift 25s linear infinite;
  }
  .intro-cloud.cloud2 {
    top: 14%;
    left: 60%;
    width: 90px;
    height: 30px;
    animation: cloudDrift 30s linear infinite;
    animation-delay: -10s;
  }
  .intro-cloud.cloud3 {
    top: 5%;
    left: 35%;
    width: 100px;
    height: 35px;
    animation: cloudDrift 22s linear infinite;
    animation-delay: -5s;
  }

  @keyframes cloudDrift {
    0% { transform: translateX(-30px); }
    100% { transform: translateX(30px); }
  }

  .ambient-leaf {
    position: absolute;
    border-radius: 0 50% 50% 50%;
    pointer-events: none;
    z-index: 5;
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 520px;
  }

  .intro-title {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .intro-title.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .intro-critters {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .intro-emoji {
    font-size: 3.5rem;
    display: inline-block;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
  }

  .bounce-1 { animation: introBounce 2s ease-in-out infinite; }
  .bounce-2 { animation: introBounce 2s ease-in-out infinite 0.3s; }
  .bounce-3 { animation: introBounce 2s ease-in-out infinite 0.6s; }

  @keyframes introBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-15px) rotate(-5deg); }
    75% { transform: translateY(5px) rotate(3deg); }
  }

  .intro-title h1 {
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #ffd700, #ff8c00, #ff6347);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3));
    margin-bottom: 0.3rem;
  }

  .intro-subtitle {
    color: rgba(255, 220, 180, 0.8);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .intro-instructions {
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 180, 100, 0.2);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }
  .intro-instructions.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .instruction-row {
    margin-bottom: 1.2rem;
  }
  .instruction-row:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .mini-paddock {
    font-size: 1.5rem;
    padding: 0.3rem 0.6rem;
    background: rgba(139, 69, 19, 0.4);
    border: 2px solid rgba(210, 150, 80, 0.5);
    border-radius: 8px;
  }

  .symbol-preview {
    width: 40px;
    height: 40px;
    background: radial-gradient(circle at 35% 35%, #ffd700, #e8832a, #c2442d);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 900;
    color: white;
    box-shadow: 0 4px 15px rgba(232, 131, 42, 0.5);
  }

  .instruction-row p {
    color: rgba(255, 220, 180, 0.85);
    font-size: 0.95rem;
  }

  .sym-highlight {
    color: #ffd700;
    font-weight: 800;
    font-size: 1.1rem;
  }

  .paddock-word {
    color: #8bc34a;
    font-weight: 700;
  }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #e8832a, #c2442d);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(232, 131, 42, 0.5);
    opacity: 0;
    transform: translateY(20px);
  }
  .start-btn.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(232, 131, 42, 0.6);
  }
  .start-btn:active {
    transform: translateY(0) scale(0.97);
  }

  .btn-icon { font-size: 1.5rem; }

  /* ═══════════════════════════════════════
     COMPLETE SCREEN
     ═══════════════════════════════════════ */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .complete-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #0a001a 0%, #1a0533 30%, #2d1b4e 60%, #1a0a00 100%);
    overflow: hidden;
  }

  .floating-animal {
    position: absolute;
    top: 15%;
    font-size: 4rem;
    animation: floatAnimal 3s ease-in-out infinite;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
  }

  @keyframes floatAnimal {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  .bg-star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: twinkle 2s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }

  .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 550px;
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, #ffd700, #ff8c00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
    animation: titlePulse 2s ease-in-out infinite;
  }

  @keyframes titlePulse {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
  }

  .complete-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.08);
    border: 2px solid rgba(255, 180, 100, 0.2);
    border-radius: 20px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    animation: statSlide 0.6s ease backwards;
  }
  .stat-card:nth-child(1) { animation-delay: 0.1s; }
  .stat-card:nth-child(2) { animation-delay: 0.2s; }
  .stat-card:nth-child(3) { animation-delay: 0.3s; }
  .stat-card:nth-child(4) { animation-delay: 0.4s; }

  @keyframes statSlide {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .stat-icon { font-size: 1.8rem; }
  .stat-value { font-size: 1.8rem; font-weight: 900; color: white; }
  .stat-label { font-size: 0.8rem; color: rgba(255, 200, 150, 0.6); }

  .complete-rating {
    font-size: 1.3rem;
    font-weight: 800;
    color: #ffd700;
    margin-bottom: 2rem;
    animation: ratingBounce 1s ease-in-out infinite;
  }

  @keyframes ratingBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .menu-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(255, 200, 150, 0.7);
    background: transparent;
    border: 2px solid rgba(255, 180, 100, 0.25);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .menu-btn:hover {
    border-color: rgba(255, 180, 100, 0.5);
    color: white;
  }

  /* ═══════════════════════════════════════
     GAME SCREEN
     ═══════════════════════════════════════ */

  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  /* Background layers */
  .game-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .sky-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      #2d1b4e 0%,
      #6b2fa0 10%,
      #c2442d 30%,
      #e8832a 45%,
      #f5b041 55%,
      #e8c170 65%,
      #d4a056 75%,
      #8b4513 85%,
      #5c2e0e 100%
    );
  }

  .sun-orb {
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #fff7e0, #ffd700, #ff8c00, transparent);
    box-shadow: 0 0 60px 20px rgba(255, 200, 50, 0.3), 0 0 120px 60px rgba(255, 140, 0, 0.15);
    animation: sunPulse 4s ease-in-out infinite;
  }

  @keyframes sunPulse {
    0%, 100% { box-shadow: 0 0 60px 20px rgba(255,200,50,0.3), 0 0 120px 60px rgba(255,140,0,0.15); }
    50% { box-shadow: 0 0 80px 30px rgba(255,200,50,0.4), 0 0 150px 80px rgba(255,140,0,0.2); }
  }

  .hills-far {
    position: absolute;
    bottom: 35%;
    left: 0;
    right: 0;
    height: 80px;
    background:
      radial-gradient(ellipse 200px 60px at 20% 100%, rgba(120,60,30,0.5) 0%, transparent 70%),
      radial-gradient(ellipse 300px 70px at 50% 100%, rgba(100,50,25,0.4) 0%, transparent 70%),
      radial-gradient(ellipse 180px 50px at 80% 100%, rgba(140,70,35,0.5) 0%, transparent 70%);
  }

  .hills-near {
    position: absolute;
    bottom: 28%;
    left: 0;
    right: 0;
    height: 60px;
    background:
      radial-gradient(ellipse 250px 55px at 30% 100%, rgba(139,69,19,0.6) 0%, transparent 70%),
      radial-gradient(ellipse 200px 50px at 70% 100%, rgba(160,80,30,0.5) 0%, transparent 70%);
  }

  .ground-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 32%;
    background: linear-gradient(180deg, #8b4513 0%, #6b3410 40%, #4a2308 100%);
    border-top: 2px solid rgba(210, 150, 80, 0.2);
  }

  .tree-sil {
    position: absolute;
    bottom: 30%;
    width: 6px;
    height: 80px;
    background: rgba(30, 15, 5, 0.6);
    border-radius: 2px;
  }
  .tree-sil::before {
    content: '';
    position: absolute;
    background: rgba(25, 50, 15, 0.5);
    border-radius: 50%;
  }
  .tree-sil::after {
    content: '';
    position: absolute;
    background: rgba(25, 50, 15, 0.4);
    border-radius: 50%;
  }
  .tree-sil.left-tree {
    left: 3%;
  }
  .tree-sil.left-tree::before {
    top: -25px;
    left: -22px;
    width: 50px;
    height: 40px;
    animation: treeSway 5s ease-in-out infinite;
  }
  .tree-sil.left-tree::after {
    top: -10px;
    left: -12px;
    width: 30px;
    height: 25px;
    animation: treeSway 5s ease-in-out infinite 0.5s;
  }
  .tree-sil.right-tree {
    right: 3%;
  }
  .tree-sil.right-tree::before {
    top: -20px;
    left: -18px;
    width: 45px;
    height: 35px;
    animation: treeSway 6s ease-in-out infinite 1s;
  }
  .tree-sil.right-tree::after {
    top: -8px;
    left: -10px;
    width: 28px;
    height: 22px;
    animation: treeSway 6s ease-in-out infinite 1.5s;
  }

  @keyframes treeSway {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    50% { transform: translateX(4px) rotate(2deg); }
  }

  .game-cloud {
    position: absolute;
    background: rgba(255, 200, 150, 0.1);
    border-radius: 50%;
    filter: blur(6px);
  }
  .game-cloud.gc1 {
    top: 6%;
    left: 15%;
    width: 100px;
    height: 30px;
    animation: cloudDrift 20s linear infinite;
  }
  .game-cloud.gc2 {
    top: 10%;
    right: 20%;
    width: 80px;
    height: 25px;
    animation: cloudDrift 28s linear infinite;
    animation-delay: -8s;
  }

  /* Header */
  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 50;
    position: relative;
  }

  .header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .back-btn {
    width: 38px;
    height: 38px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
  }
  .back-btn:hover { background: rgba(255,255,255,0.2); }

  .round-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #e8832a, #c2442d);
    border-radius: 20px;
    font-weight: 700;
    color: white;
    font-size: 0.85rem;
  }

  .header-center { flex: 1; text-align: center; }

  .prompt-badge {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    animation: promptPulse 2s ease-in-out infinite;
  }

  @keyframes promptPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }

  .streak-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.7rem;
    background: rgba(255, 100, 0, 0.2);
    border-radius: 20px;
    color: #ff8c00;
    font-weight: 700;
    font-size: 0.85rem;
    transition: opacity 0.3s ease;
  }
  .streak-icon { font-size: 1rem; }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.7rem;
    background: rgba(255, 215, 0, 0.2);
    border-radius: 20px;
    color: #ffd700;
    font-weight: 700;
    font-size: 0.85rem;
  }
  .score-icon { font-size: 1rem; }

  /* ═══════════════════════════════════════
     GAME AREA — Paddocks & Center
     ═══════════════════════════════════════ */

  .game-area {
    flex: 1;
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 0;
    padding: 0.8rem;
    position: relative;
    z-index: 10;
    touch-action: none;
    overflow: visible;
    min-height: 0;
  }

  /* Paddock */
  .paddock {
    position: relative;
    flex: 1;
    max-width: 280px;
    min-width: 160px;
    background: rgba(139, 90, 43, 0.25);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
  }

  .paddock.glow-correct {
    box-shadow: 0 0 30px rgba(76, 175, 80, 0.6), inset 0 0 20px rgba(76, 175, 80, 0.2);
    border-color: #4caf50;
  }

  .paddock.glow-wrong {
    box-shadow: 0 0 20px rgba(244, 67, 54, 0.4), inset 0 0 15px rgba(244, 67, 54, 0.15);
    animation: paddockShake 0.4s ease-in-out;
  }

  @keyframes paddockShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  /* Fence rendering */
  .fence-top, .fence-bottom {
    position: absolute;
    left: 0;
    right: 0;
    height: 6px;
    z-index: 15;
  }
  .fence-top {
    top: 0;
    background: linear-gradient(90deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
  .fence-top::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    opacity: 0.6;
  }
  .fence-bottom {
    bottom: 0;
    background: linear-gradient(90deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    box-shadow: 0 -2px 4px rgba(0,0,0,0.3);
  }
  .fence-bottom::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    opacity: 0.6;
  }

  .fence-left, .fence-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 6px;
    z-index: 15;
  }
  .fence-left {
    left: 0;
    background: linear-gradient(180deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    box-shadow: 2px 0 4px rgba(0,0,0,0.3);
  }
  .fence-left::after {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    opacity: 0.6;
  }
  .fence-right {
    right: 0;
    background: linear-gradient(180deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    box-shadow: -2px 0 4px rgba(0,0,0,0.3);
  }
  .fence-right::after {
    content: '';
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #8b6914, #c9a04a, #a07830, #c9a04a, #8b6914);
    opacity: 0.6;
  }

  /* Fence posts */
  .fence-post {
    position: absolute;
    width: 10px;
    height: 100%;
    background: linear-gradient(90deg, #6b4a14, #8b6914, #6b4a14);
    z-index: 16;
    border-radius: 2px;
    box-shadow: 2px 0 4px rgba(0,0,0,0.2);
  }
  .fence-post::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -3px;
    width: 16px;
    height: 10px;
    background: linear-gradient(180deg, #a07830, #8b6914);
    border-radius: 4px 4px 0 0;
  }
  .fence-post.fp1 { left: 0; }
  .fence-post.fp2 { left: calc(50% - 5px); }
  .fence-post.fp3 { right: 0; }
  .fence-post.fp4 { left: calc(25% - 5px); }

  .paddock-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(139, 90, 43, 0.1) 0%,
      rgba(139, 90, 43, 0.2) 50%,
      rgba(120, 70, 30, 0.35) 100%
    );
    z-index: 1;
  }

  .paddock-label {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255, 220, 180, 0.7);
    z-index: 20;
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .animals-container {
    position: relative;
    flex: 1;
    z-index: 10;
    overflow: visible;
  }

  /* Animals */
  .animal {
    position: absolute;
    transform-origin: bottom center;
    opacity: 0;
    transform: scale(0) translateY(30px);
    transition: none;
  }
  .animal.entered {
    opacity: 1;
    transform: scale(1) translateY(0);
    animation: animalEnter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
               animalIdle 3s ease-in-out infinite 0.5s;
  }

  @keyframes animalEnter {
    0% { opacity: 0; transform: scale(0) translateY(40px); }
    60% { opacity: 1; transform: scale(1.2) translateY(-10px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }

  @keyframes animalIdle {
    0%, 100% { transform: scale(1) translateY(0); }
    30% { transform: scale(1.03) translateY(-4px); }
    60% { transform: scale(0.98) translateY(2px); }
  }

  .animal.joy-jump {
    animation: joyJump 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite !important;
  }

  @keyframes joyJump {
    0%, 100% { transform: scale(1) translateY(0) rotate(0deg); }
    25% { transform: scale(1.1) translateY(-20px) rotate(-8deg); }
    50% { transform: scale(0.95) translateY(0) rotate(0deg); }
    75% { transform: scale(1.1) translateY(-15px) rotate(8deg); }
  }

  .animal-emoji {
    font-size: 50px;
    display: block;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    line-height: 1;
  }

  .dust-puff {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(180,140,80,0.6) 0%, rgba(180,140,80,0) 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    animation: dustPuffAnim 0.8s ease-out forwards;
    z-index: 5;
  }

  @keyframes dustPuffAnim {
    0% { transform: translate(-50%,-50%) scale(0.3); opacity: 0.7; }
    100% { transform: translate(-50%,-50%) scale(2.5); opacity: 0; }
  }

  .count-display {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.8rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    z-index: 25;
    background: rgba(0,0,0,0.4);
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    animation: countPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes countPop {
    0% { transform: translateX(-50%) scale(0); }
    100% { transform: translateX(-50%) scale(1); }
  }

  /* ═══════════════════════════════════════
     CENTER COLUMN — Symbols & Drop Zone
     ═══════════════════════════════════════ */

  .center-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 0.5rem;
    min-width: 100px;
    z-index: 30;
  }

  .equation-display {
    animation: eqPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes eqPop {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .eq-text {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background: linear-gradient(135deg, #4caf50, #2e7d32);
    border-radius: 20px;
    font-size: 1.6rem;
    font-weight: 900;
    color: white;
    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.5);
    white-space: nowrap;
  }

  /* Drop Zone */
  .drop-zone {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px dashed rgba(255, 200, 100, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .drop-zone.active {
    border-color: rgba(255, 200, 100, 0.6);
    background: rgba(255, 180, 100, 0.1);
    animation: dropZonePulse 1s ease-in-out infinite;
  }

  .drop-zone.hover {
    border-color: #ffd700;
    background: rgba(255, 215, 0, 0.2);
    transform: scale(1.15);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
  }

  .drop-zone.correct {
    border-style: solid;
    border-color: #4caf50;
    background: rgba(76, 175, 80, 0.3);
    box-shadow: 0 0 25px rgba(76, 175, 80, 0.5);
  }

  @keyframes dropZonePulse {
    0%, 100% { box-shadow: 0 0 10px rgba(255,200,100,0.2); }
    50% { box-shadow: 0 0 25px rgba(255,200,100,0.4); }
  }

  .drop-hint {
    font-size: 2rem;
    font-weight: 900;
    color: rgba(255, 200, 100, 0.3);
  }

  .drop-symbol {
    font-size: 2.2rem;
    font-weight: 900;
    color: white;
  }
  .drop-symbol.placed {
    animation: symbolPlace 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes symbolPlace {
    0% { transform: scale(0) rotate(-180deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  /* Symbols tray */
  .symbols-tray {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }

  .symbol-token {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%,
      #ffd700 0%,
      #e8832a 40%,
      #c2442d 80%,
      #a0331d 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    position: relative;
    box-shadow:
      0 8px 25px rgba(232, 131, 42, 0.5),
      inset 0 -6px 15px rgba(0, 0, 0, 0.2),
      inset 0 2px 8px rgba(255, 255, 255, 0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    z-index: 20;
    animation: symbolFloat 3s ease-in-out infinite;
  }
  .symbol-token:nth-child(1) { animation-delay: 0s; }
  .symbol-token:nth-child(2) { animation-delay: 1s; }
  .symbol-token:nth-child(3) { animation-delay: 2s; }

  @keyframes symbolFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .symbol-token:hover {
    transform: translateY(-4px) scale(1.08);
    box-shadow:
      0 12px 35px rgba(232, 131, 42, 0.6),
      inset 0 -6px 15px rgba(0, 0, 0, 0.2),
      inset 0 2px 8px rgba(255, 255, 255, 0.2);
  }

  .symbol-token.dragging {
    cursor: grabbing;
    animation: none;
    box-shadow:
      0 20px 50px rgba(232, 131, 42, 0.7),
      0 0 40px rgba(255, 215, 0, 0.4),
      inset 0 -6px 15px rgba(0, 0, 0, 0.2);
  }

  .symbol-token.disabled {
    opacity: 0.4;
    pointer-events: none;
    animation: none;
  }

  .symbol-shine {
    position: absolute;
    top: 12%;
    left: 18%;
    width: 35%;
    height: 25%;
    background: radial-gradient(ellipse, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .symbol-text {
    font-size: 1.8rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 2;
    pointer-events: none;
  }

  .symbol-glow {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%);
    pointer-events: none;
    animation: symbolGlowPulse 2s ease-in-out infinite;
  }

  @keyframes symbolGlowPulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  @keyframes symbolShake {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    15% { transform: translateX(-10px) rotate(-5deg); }
    30% { transform: translateX(10px) rotate(5deg); }
    45% { transform: translateX(-8px) rotate(-3deg); }
    60% { transform: translateX(8px) rotate(3deg); }
    75% { transform: translateX(-4px) rotate(-1deg); }
    90% { transform: translateX(4px) rotate(1deg); }
  }

  /* Celebration particles */
  .celebration-particle {
    position: absolute;
    pointer-events: none;
    z-index: 100;
    box-shadow: 0 0 6px currentColor;
  }

  /* Bottom bar */
  .bottom-bar {
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 50;
  }

  .hint-text {
    font-size: 0.8rem;
    color: rgba(255, 200, 150, 0.5);
    font-weight: 600;
  }

  .progress-dots {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    transition: all 0.3s ease;
  }
  .dot.completed {
    background: #4caf50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
  }
  .dot.current {
    background: #ffd700;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
    animation: dotPulse 1s ease-in-out infinite;
  }

  @keyframes dotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.4); }
  }

  /* ═══════════════════════════════════════
     RESPONSIVE
     ═══════════════════════════════════════ */

  @media (max-width: 650px) {
    .game-area {
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem;
    }

    .paddock {
      max-width: 100%;
      min-width: unset;
      width: 100%;
      max-height: 35%;
    }

    .center-column {
      flex-direction: row;
      gap: 0.6rem;
      min-width: unset;
      padding: 0.3rem;
    }

    .symbol-token {
      width: 52px;
      height: 52px;
    }
    .symbol-text { font-size: 1.4rem; }

    .drop-zone {
      width: 60px;
      height: 60px;
    }
    .drop-hint { font-size: 1.5rem; }

    .animal-emoji { font-size: 38px; }

    .count-display { font-size: 1.3rem; }

    .equation-display .eq-text { font-size: 1.2rem; padding: 0.4rem 0.8rem; }

    .header-center { display: none; }

    .progress-dots { gap: 3px; }
    .dot { width: 6px; height: 6px; }
  }

  @media (max-width: 400px) {
    .animal-emoji { font-size: 30px; }
    .symbol-token { width: 44px; height: 44px; }
    .symbol-text { font-size: 1.2rem; }
  }

  @media (min-width: 900px) {
    .animal-emoji { font-size: 60px; }
    .symbol-token { width: 75px; height: 75px; }
    .symbol-text { font-size: 2.2rem; }
    .drop-zone { width: 90px; height: 90px; }
    .drop-hint { font-size: 2.5rem; }
  }
`;
