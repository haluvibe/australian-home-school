"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Direction constants
const DIR_UP = 0;
const DIR_RIGHT = 1;
const DIR_DOWN = 2;
const DIR_DELTAS: [number, number][] = [[0, -1], [1, 0], [0, 1], [-1, 0]];

interface CommandCard {
  id: number;
  type: 'forward' | 'left' | 'right' | 'forward2';
  label: string;
  icon: string;
}

interface QueuedCommand {
  id: number;
  card: CommandCard;
  slotIndex: number;
}

interface StarPos {
  col: number;
  row: number;
  collected: boolean;
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
}

interface GridParticle {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
  speed: number;
  color: string;
}

interface LevelDef {
  gridSize: number;
  walls: [number, number][];
  start: [number, number];
  startDir: number;
  stars: [number, number][];
  hint?: string;
}

type GameScreen = 'intro' | 'playing' | 'complete';

let cmdIdCounter = 0;
const getNewCmdId = (): number => ++cmdIdCounter;

// seeded random for deterministic mazes
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const LEVELS: LevelDef[] = [
  // Level 1: straight path (just forward)
  {
    gridSize: 5,
    walls: [[1,0],[2,0],[3,0],[4,0],[0,1],[1,1],[2,1],[3,1],[4,1],[1,2],[2,2],[3,2],[4,2],[0,3],[1,3],[2,3],[3,3],[4,3],[0,4],[1,4],[2,4],[3,4]],
    start: [0, 0],
    startDir: DIR_DOWN,
    stars: [[0, 2]],
    hint: 'Use Forward cards to move the robot down!',
  },
  // Level 2: one turn
  {
    gridSize: 5,
    walls: [[2,0],[3,0],[4,0],[2,1],[3,1],[4,1],[0,2],[2,2],[3,2],[4,2],[0,3],[1,3],[2,3],[3,3],[4,3],[0,4],[1,4],[2,4],[3,4],[4,4]],
    start: [0, 0],
    startDir: DIR_DOWN,
    stars: [[1, 2]],
    hint: 'Go forward, turn, then go forward again!',
  },
  // Level 3: L-shape path
  {
    gridSize: 5,
    walls: [[2,0],[3,0],[4,0],[2,1],[3,1],[4,1],[2,2],[3,2],[4,2],[0,3],[1,3],[2,3],[4,3],[0,4],[1,4],[2,4],[4,4]],
    start: [0, 0],
    startDir: DIR_DOWN,
    stars: [[3, 4]],
    hint: 'Navigate the L-shaped path!',
  },
  // Level 4: zigzag
  {
    gridSize: 6,
    walls: [[2,0],[3,0],[4,0],[5,0],[0,1],[2,1],[3,1],[4,1],[5,1],[0,2],[1,2],[3,2],[4,2],[5,2],[0,3],[1,3],[3,3],[5,3],[0,4],[1,4],[3,4],[4,4],[0,5],[1,5],[2,5],[3,5],[4,5]],
    start: [0, 0],
    startDir: DIR_RIGHT,
    stars: [[5, 5]],
    hint: 'Follow the zigzag path carefully!',
  },
  // Level 5: spiral in
  {
    gridSize: 6,
    walls: [[2,0],[3,0],[4,0],[5,0],[0,1],[2,1],[5,1],[0,2],[2,2],[3,2],[5,2],[0,3],[4,3],[5,3],[0,4],[1,4],[2,4],[3,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],
    start: [0, 0],
    startDir: DIR_RIGHT,
    stars: [[4, 2]],
  },
  // Level 6: two stars
  {
    gridSize: 6,
    walls: [[3,0],[4,0],[5,0],[0,1],[3,1],[5,1],[0,2],[1,2],[3,2],[5,2],[5,3],[0,4],[1,4],[2,4],[3,4],[5,4],[0,5],[1,5],[2,5],[3,5],[4,5]],
    start: [0, 0],
    startDir: DIR_DOWN,
    stars: [[2, 3], [5, 5]],
  },
  // Level 7: corridor maze
  {
    gridSize: 7,
    walls: [[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[2,1],[4,1],[6,1],[0,2],[2,2],[4,2],[6,2],[0,3],[2,3],[4,3],[6,3],[0,4],[2,4],[4,4],[0,5],[2,5],[4,5],[5,5],[6,5],[0,6],[1,6],[2,6],[4,6],[5,6],[6,6]],
    start: [0, 0],
    startDir: DIR_RIGHT,
    stars: [[3, 6]],
  },
  // Level 8: open with obstacles, two stars
  {
    gridSize: 7,
    walls: [[2,1],[4,1],[6,1],[1,2],[3,2],[5,2],[0,3],[2,3],[4,3],[6,3],[1,4],[3,4],[5,4],[2,5],[4,5],[6,5],[0,6],[1,6],[3,6],[5,6],[6,6]],
    start: [0, 0],
    startDir: DIR_RIGHT,
    stars: [[6, 0], [2, 6]],
  },
  // Level 9: tight maze
  {
    gridSize: 8,
    walls: [[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[0,1],[2,1],[4,1],[6,1],[7,1],[0,2],[2,2],[4,2],[6,2],[0,3],[2,3],[3,3],[4,3],[6,3],[7,3],[0,4],[6,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[6,5],[7,5],[0,6],[4,6],[6,6],[7,6],[0,7],[1,7],[2,7],[3,7],[4,7],[6,7],[7,7]],
    start: [0, 0],
    startDir: DIR_DOWN,
    stars: [[5, 7]],
  },
  // Level 10: grand maze with 3 stars
  {
    gridSize: 8,
    walls: [[3,0],[5,0],[7,0],[1,1],[3,1],[5,1],[7,1],[1,2],[3,2],[7,2],[1,3],[5,3],[6,3],[7,3],[1,4],[2,4],[3,4],[5,4],[0,5],[3,5],[5,5],[7,5],[0,6],[1,6],[3,6],[5,6],[7,6],[0,7],[1,7],[3,7],[5,7]],
    start: [0, 0],
    startDir: DIR_RIGHT,
    stars: [[4, 0], [7, 4], [7, 7]],
  },
];

const AVAILABLE_COMMANDS: CommandCard[] = [
  { id: 1, type: 'forward', label: 'Forward', icon: '↑' },
  { id: 2, type: 'left', label: 'Turn Left', icon: '↰' },
  { id: 3, type: 'right', label: 'Turn Right', icon: '↱' },
  { id: 4, type: 'forward2', label: 'Forward 2', icon: '⇈' },
];

interface RobotNavigatorProps {
  onExit?: () => void;
}

export default function RobotNavigator({ onExit }: RobotNavigatorProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [commandQueue, setCommandQueue] = useState<QueuedCommand[]>([]);
  const [robotCol, setRobotCol] = useState<number>(0);
  const [robotRow, setRobotRow] = useState<number>(0);
  const [robotDir, setRobotDir] = useState<number>(DIR_UP);
  const [stars, setStars] = useState<StarPos[]>([]);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executingIndex, setExecutingIndex] = useState<number>(-1);
  const [bonkAnimation, setBonkAnimation] = useState<boolean>(false);
  const [missionComplete, setMissionComplete] = useState<boolean>(false);
  const [dazed, setDazed] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [gridParticles, setGridParticles] = useState<GridParticle[]>([]);
  const [robotMoving, setRobotMoving] = useState<boolean>(false);
  const [robotTurning, setRobotTurning] = useState<boolean>(false);
  const [totalStarsCollected, setTotalStarsCollected] = useState<number>(0);
  const [commandsUsed, setCommandsUsed] = useState<number>(0);
  const [draggedCardType, setDraggedCardType] = useState<CommandCard | null>(null);
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);
  const [dragFromQueue, setDragFromQueue] = useState<number | null>(null);
  const [introPhase, setIntroPhase] = useState<number>(0);
  const [starCollectAnim, setStarCollectAnim] = useState<{ col: number; row: number } | null>(null);
  const [showHint, setShowHint] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const particleAnimRef = useRef<number | null>(null);
  const gridParticleRef = useRef<number | null>(null);
  const maxQueueSize = 12;

  // Intro boot-up animation
  useEffect(() => {
    if (gameState !== 'intro') return;
    const t1 = setTimeout(() => setIntroPhase(1), 500);
    const t2 = setTimeout(() => setIntroPhase(2), 1200);
    const t3 = setTimeout(() => setIntroPhase(3), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [gameState]);

  const getLevelDef = useCallback((lvl: number): LevelDef => {
    if (lvl <= LEVELS.length) return LEVELS[lvl - 1];
    // Procedural levels beyond 10
    const rand = seededRandom(lvl * 42 + 7);
    const gridSize = Math.min(6 + Math.floor(lvl / 3), 10);
    const walls: [number, number][] = [];
    const wallDensity = 0.3 + Math.min(lvl * 0.02, 0.2);
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (r === 0 && c === 0) continue;
        if (r === gridSize - 1 && c === gridSize - 1) continue;
        if (rand() < wallDensity) {
          walls.push([c, r]);
        }
      }
    }
    const numStars = Math.min(1 + Math.floor(lvl / 4), 3);
    const starPositions: [number, number][] = [];
    starPositions.push([gridSize - 1, gridSize - 1]);
    for (let i = 1; i < numStars; i++) {
      let sc: number, sr: number;
      do {
        sc = Math.floor(rand() * gridSize);
        sr = Math.floor(rand() * gridSize);
      } while (
        (sc === 0 && sr === 0) ||
        walls.some(([wc, wr]) => wc === sc && wr === sr) ||
        starPositions.some(([pc, pr]) => pc === sc && pr === sr)
      );
      starPositions.push([sc, sr]);
    }
    // Remove walls from star positions
    for (const [sc, sr] of starPositions) {
      const idx = walls.findIndex(([wc, wr]) => wc === sc && wr === sr);
      if (idx !== -1) walls.splice(idx, 1);
    }
    return {
      gridSize,
      walls,
      start: [0, 0],
      startDir: DIR_RIGHT,
      stars: starPositions,
    };
  }, []);

  const isWall = useCallback((col: number, row: number, levelDef: LevelDef): boolean => {
    return levelDef.walls.some(([wc, wr]) => wc === col && wr === row);
  }, []);

  const isInBounds = useCallback((col: number, row: number, levelDef: LevelDef): boolean => {
    return col >= 0 && col < levelDef.gridSize && row >= 0 && row < levelDef.gridSize;
  }, []);

  const initLevel = useCallback((lvl: number): void => {
    const def = getLevelDef(lvl);
    setRobotCol(def.start[0]);
    setRobotRow(def.start[1]);
    setRobotDir(def.startDir);
    setStars(def.stars.map(([c, r]) => ({ col: c, row: r, collected: false })));
    setCommandQueue([]);
    setIsExecuting(false);
    setExecutingIndex(-1);
    setBonkAnimation(false);
    setMissionComplete(false);
    setDazed(false);
    setRobotMoving(false);
    setRobotTurning(false);
    setTotalStarsCollected(0);
    setCommandsUsed(0);
    setStarCollectAnim(null);
    setShowHint(true);
    setParticles([]);
  }, [getLevelDef]);

  const startGame = (): void => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    initLevel(1);
  };

  const nextLevel = (): void => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // Spawn grid electricity particles
  useEffect(() => {
    if (gameState !== 'playing' && gameState !== 'intro') return;
    let particleId = 0;
    const spawnInterval = setInterval(() => {
      setGridParticles(prev => {
        if (prev.length > 8) return prev;
        const def = getLevelDef(level);
        const gs = def.gridSize;
        const isHorizontal = Math.random() > 0.5;
        const p: GridParticle = {
          id: particleId++,
          x1: isHorizontal ? 0 : Math.floor(Math.random() * gs),
          y1: isHorizontal ? Math.floor(Math.random() * gs) : 0,
          x2: isHorizontal ? gs - 1 : Math.floor(Math.random() * gs),
          y2: isHorizontal ? Math.floor(Math.random() * gs) : gs - 1,
          progress: 0,
          speed: 0.005 + Math.random() * 0.01,
          color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
        };
        return [...prev, p];
      });
    }, 2000);
    const animFrame = () => {
      setGridParticles(prev =>
        prev
          .map(p => ({ ...p, progress: p.progress + p.speed }))
          .filter(p => p.progress <= 1)
      );
      gridParticleRef.current = requestAnimationFrame(animFrame);
    };
    gridParticleRef.current = requestAnimationFrame(animFrame);
    return () => {
      clearInterval(spawnInterval);
      if (gridParticleRef.current) cancelAnimationFrame(gridParticleRef.current);
    };
  }, [gameState, level, getLevelDef]);

  // Particle system
  useEffect(() => {
    if (particles.length === 0) {
      if (particleAnimRef.current) cancelAnimationFrame(particleAnimRef.current);
      return;
    }
    const animate = () => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15,
            life: p.life - 1,
          }))
          .filter(p => p.life > 0)
      );
      particleAnimRef.current = requestAnimationFrame(animate);
    };
    particleAnimRef.current = requestAnimationFrame(animate);
    return () => { if (particleAnimRef.current) cancelAnimationFrame(particleAnimRef.current); };
  }, [particles.length > 0]);

  const spawnParticles = useCallback((cx: number, cy: number, color: string, count: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 2 + Math.random() * 4;
      newParticles.push({
        id: Date.now() + i,
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 30 + Math.floor(Math.random() * 20),
        maxLife: 50,
        color,
        size: 3 + Math.random() * 5,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const addCommandToQueue = useCallback((card: CommandCard) => {
    if (isExecuting) return;
    setCommandQueue(prev => {
      if (prev.length >= maxQueueSize) return prev;
      return [...prev, { id: getNewCmdId(), card, slotIndex: prev.length }];
    });
    setShowHint(false);
  }, [isExecuting]);

  const removeCommandFromQueue = useCallback((queueId: number) => {
    if (isExecuting) return;
    setCommandQueue(prev => prev.filter(q => q.id !== queueId).map((q, i) => ({ ...q, slotIndex: i })));
  }, [isExecuting]);

  const clearQueue = useCallback(() => {
    if (isExecuting) return;
    setCommandQueue([]);
  }, [isExecuting]);

  // Execute command sequence
  const executeCommands = useCallback(async () => {
    if (commandQueue.length === 0 || isExecuting) return;
    setIsExecuting(true);
    setDazed(false);
    setBonkAnimation(false);
    setCommandsUsed(commandQueue.length);
    const def = getLevelDef(level);

    let col = def.start[0];
    let row = def.start[1];
    let dir = def.startDir;
    // Reset robot position
    setRobotCol(col);
    setRobotRow(row);
    setRobotDir(dir);
    setStars(def.stars.map(([c, r]) => ({ col: c, row: r, collected: false })));
    setTotalStarsCollected(0);

    await new Promise(r => setTimeout(r, 300));

    let starsCollected = 0;
    let hitWall = false;

    for (let i = 0; i < commandQueue.length; i++) {
      if (hitWall) break;
      const cmd = commandQueue[i];
      setExecutingIndex(i);

      if (cmd.card.type === 'forward' || cmd.card.type === 'forward2') {
        const steps = cmd.card.type === 'forward2' ? 2 : 1;
        for (let s = 0; s < steps; s++) {
          const [dc, dr] = DIR_DELTAS[dir];
          const newCol = col + dc;
          const newRow = row + dr;
          if (!isInBounds(newCol, newRow, def) || isWall(newCol, newRow, def)) {
            // BONK!
            hitWall = true;
            setBonkAnimation(true);
            setDazed(true);
            // Calculate bonk position for particles
            const gridEl = containerRef.current?.querySelector('.maze-grid') as HTMLElement;
            if (gridEl) {
              const cellSize = gridEl.offsetWidth / def.gridSize;
              const px = col * cellSize + cellSize / 2;
              const py = row * cellSize + cellSize / 2;
              spawnParticles(px, py, '#ff6644', 15);
            }
            await new Promise(r => setTimeout(r, 800));
            setBonkAnimation(false);
            break;
          }
          col = newCol;
          row = newRow;
          setRobotMoving(true);
          setRobotCol(col);
          setRobotRow(row);
          await new Promise(r => setTimeout(r, 400));
          setRobotMoving(false);

          // Check star collection
          const starIdx = def.stars.findIndex(([sc, sr]) => {
            return sc === col && sr === row;
          });
          if (starIdx !== -1) {
            setStarCollectAnim({ col, row });
            setStars(prev => prev.map((st) =>
              st.col === col && st.row === row && !st.collected ? { ...st, collected: true } : st
            ));
            starsCollected++;
            setTotalStarsCollected(starsCollected);
            // Star particles
            const gridEl = containerRef.current?.querySelector('.maze-grid') as HTMLElement;
            if (gridEl) {
              const cellSize = gridEl.offsetWidth / def.gridSize;
              const px = col * cellSize + cellSize / 2;
              const py = row * cellSize + cellSize / 2;
              spawnParticles(px, py, '#ffd700', 20);
            }
            await new Promise(r => setTimeout(r, 300));
            setStarCollectAnim(null);
          }
          await new Promise(r => setTimeout(r, 100));
        }
      } else if (cmd.card.type === 'left') {
        dir = (dir + 3) % 4; // turn left = counter-clockwise
        setRobotTurning(true);
        setRobotDir(dir);
        await new Promise(r => setTimeout(r, 400));
        setRobotTurning(false);
      } else if (cmd.card.type === 'right') {
        dir = (dir + 1) % 4; // turn right = clockwise
        setRobotTurning(true);
        setRobotDir(dir);
        await new Promise(r => setTimeout(r, 400));
        setRobotTurning(false);
      }

      await new Promise(r => setTimeout(r, 100));
    }

    setExecutingIndex(-1);

    // Check mission complete
    const allCollected = starsCollected === def.stars.length;
    if (allCollected && !hitWall) {
      // Calculate efficiency bonus
      const efficiencyBonus = Math.max(0, (maxQueueSize - commandQueue.length)) * 10;
      const starPoints = starsCollected * 100;
      setScore(prev => prev + starPoints + efficiencyBonus);
      setMissionComplete(true);
      // Celebration particles
      const gridEl = containerRef.current?.querySelector('.maze-grid') as HTMLElement;
      if (gridEl) {
        const cellSize = gridEl.offsetWidth / def.gridSize;
        const px = col * cellSize + cellSize / 2;
        const py = row * cellSize + cellSize / 2;
        spawnParticles(px, py, '#00ff88', 30);
        setTimeout(() => spawnParticles(px - 30, py - 30, '#ffdd00', 20), 200);
        setTimeout(() => spawnParticles(px + 30, py + 30, '#00ddff', 20), 400);
      }
      setTimeout(() => setGameState('complete'), 2500);
    } else if (!hitWall) {
      // Finished commands but didnt collect all stars
      setDazed(true);
      setTimeout(() => setDazed(false), 1500);
    }

    setIsExecuting(false);
  }, [commandQueue, isExecuting, level, getLevelDef, isInBounds, isWall, spawnParticles]);

  const resetRobot = useCallback(() => {
    const def = getLevelDef(level);
    setRobotCol(def.start[0]);
    setRobotRow(def.start[1]);
    setRobotDir(def.startDir);
    setStars(def.stars.map(([c, r]) => ({ col: c, row: r, collected: false })));
    setDazed(false);
    setBonkAnimation(false);
    setMissionComplete(false);
    setTotalStarsCollected(0);
    setIsExecuting(false);
    setExecutingIndex(-1);
  }, [level, getLevelDef]);

  // Drag handling for command cards
  const handleCardDragStart = (e: React.MouseEvent | React.TouchEvent, card: CommandCard, fromQueueId?: number) => {
    if (isExecuting) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDraggedCardType(card);
    setDragPos({ x: clientX, y: clientY });
    if (fromQueueId !== undefined) {
      setDragFromQueue(fromQueueId);
    } else {
      setDragFromQueue(null);
    }
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!draggedCardType) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragPos({ x: clientX, y: clientY });
  }, [draggedCardType]);

  const handleDragEnd = useCallback((e: MouseEvent | TouchEvent) => {
    if (!draggedCardType) return;
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const clientY = 'changedTouches' in e ? e.changedTouches[0].clientY : e.clientY;

    // Check if dropped on command queue area
    const queueEl = containerRef.current?.querySelector('.command-queue') as HTMLElement;
    if (queueEl) {
      const rect = queueEl.getBoundingClientRect();
      const inQueue = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;

      if (inQueue) {
        if (dragFromQueue === null) {
          // Adding from tray
          addCommandToQueue(draggedCardType);
        }
        // If dragging from queue to queue, do nothing (just repositioning, keep it)
      } else {
        if (dragFromQueue !== null) {
          // Removing from queue by dragging out
          removeCommandFromQueue(dragFromQueue);
        }
      }
    } else if (dragFromQueue === null) {
      // Queue not found, just add
      addCommandToQueue(draggedCardType);
    }

    setDraggedCardType(null);
    setDragPos(null);
    setDragFromQueue(null);
  }, [draggedCardType, dragFromQueue, addCommandToQueue, removeCommandFromQueue]);

  // Drag event listeners
  useEffect(() => {
    if (!draggedCardType) return;
    const moveHandler = (e: MouseEvent | TouchEvent): void => handleDragMove(e);
    const endHandler = (e: MouseEvent | TouchEvent): void => handleDragEnd(e);
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
  }, [draggedCardType, handleDragMove, handleDragEnd]);

  const levelDef = getLevelDef(level);
  const gridSize = levelDef.gridSize;
  const rotationDeg = robotDir * 90;

  // Efficiency rating
  const getEfficiencyStars = (used: number, lvl: number): number => {
    if (used <= 3) return 3;
    if (used <= 6) return 2;
    return 1;
  };

  // INTRO SCREEN
  if (gameState === 'intro') {
    return (
      <div className="robot-nav">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            <div className="grid-bg-lines">
              {[...Array(12)].map((_, i) => (
                <div key={`h${i}`} className="grid-line horizontal" style={{ top: `${(i + 1) * 8}%`, animationDelay: `${i * 0.3}s` }} />
              ))}
              {[...Array(12)].map((_, i) => (
                <div key={`v${i}`} className="grid-line vertical" style={{ left: `${(i + 1) * 8}%`, animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <div className="circuit-dots">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="circuit-dot" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                }} />
              ))}
            </div>
          </div>
          <div className="intro-content">
            <div className="robot-intro-container">
              <div className={`robot-intro ${introPhase >= 1 ? 'powered' : ''}`}>
                <div className="robot-antenna">
                  <div className="antenna-ball" />
                  <div className="antenna-stick" />
                </div>
                <div className="robot-head-intro">
                  <div className={`robot-eye-intro left ${introPhase >= 2 ? 'on' : ''}`} />
                  <div className={`robot-eye-intro right ${introPhase >= 2 ? 'on' : ''}`} />
                </div>
                <div className="robot-body-intro">
                  <div className="robot-chest-light" />
                </div>
              </div>
            </div>
            <h1 className={`title ${introPhase >= 3 ? 'show' : ''}`}>Robot Navigator</h1>
            <p className={`tagline ${introPhase >= 3 ? 'show' : ''}`}>Program your robot to collect the stars!</p>
            <div className={`instructions-card ${introPhase >= 3 ? 'show' : ''}`}>
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="cmd-mini forward">↑</span>
                  <span className="cmd-mini turn-l">↰</span>
                  <span className="cmd-mini turn-r">↱</span>
                </div>
                <p>Drag <strong>command cards</strong> into the queue</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="go-mini">GO</span>
                  <span className="arrow-icon">→</span>
                  <span className="robot-mini">🤖</span>
                </div>
                <p>Press <strong>GO</strong> and watch the robot move!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="star-mini">⭐</span>
                  <span className="equals-icon">=</span>
                  <span className="points-mini">100pts</span>
                </div>
                <p>Collect all <strong>stars</strong> to complete the mission!</p>
              </div>
            </div>
            <button className={`start-btn ${introPhase >= 3 ? 'show' : ''}`} onClick={startGame}>
              <span className="btn-icon">⚡</span>
              Initialize Robot
              <span className="btn-icon">⚡</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // COMPLETE SCREEN
  if (gameState === 'complete') {
    const effStars = getEfficiencyStars(commandsUsed, level);
    return (
      <div className="robot-nav">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            <div className="grid-bg-lines">
              {[...Array(12)].map((_, i) => (
                <div key={`h${i}`} className="grid-line horizontal" style={{ top: `${(i + 1) * 8}%` }} />
              ))}
              {[...Array(12)].map((_, i) => (
                <div key={`v${i}`} className="grid-line vertical" style={{ left: `${(i + 1) * 8}%` }} />
              ))}
            </div>
            <div className="celebration-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="celebration-particle" style={{
                  left: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  background: ['#00ff88', '#ffdd00', '#00ddff', '#ff44aa'][i % 4],
                }} />
              ))}
            </div>
          </div>
          <div className="complete-content">
            <div className="robot-dance">
              <div className="robot-complete">
                <div className="robot-antenna dance">
                  <div className="antenna-ball" />
                  <div className="antenna-stick" />
                </div>
                <div className="robot-head-intro">
                  <div className="robot-eye-intro left on happy" />
                  <div className="robot-eye-intro right on happy" />
                </div>
                <div className="robot-body-intro">
                  <div className="robot-chest-light success" />
                </div>
              </div>
            </div>
            <h1 className="complete-title">MISSION COMPLETE!</h1>
            <p className="complete-subtitle">Level {level} cleared!</p>
            <div className="efficiency-rating">
              <p className="efficiency-label">Efficiency Rating</p>
              <div className="efficiency-stars">
                {[1, 2, 3].map(s => (
                  <span key={s} className={`eff-star ${s <= effStars ? 'earned' : ''}`}>★</span>
                ))}
              </div>
              <p className="commands-used">{commandsUsed} commands used</p>
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Stars Collected</span>
                <span className="score-value">{totalStarsCollected}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={nextLevel}>Level {level + 1} →</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PLAYING SCREEN
  return (
    <div className="robot-nav">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="star-progress">
              <span className="star-icon">⭐</span>
              <span className="star-text">
                {stars.filter(s => s.collected).length} / {stars.length}
              </span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">🏆</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Maze Grid */}
        <div className="maze-area">
          <div className="maze-grid" style={{ '--grid-size': gridSize } as React.CSSProperties}>
            {/* Grid glow lines */}
            <div className="grid-glow-overlay">
              {[...Array(gridSize + 1)].map((_, i) => (
                <div key={`gh${i}`} className="glow-line horizontal" style={{ top: `${(i / gridSize) * 100}%` }} />
              ))}
              {[...Array(gridSize + 1)].map((_, i) => (
                <div key={`gv${i}`} className="glow-line vertical" style={{ left: `${(i / gridSize) * 100}%` }} />
              ))}
            </div>

            {/* Grid cells */}
            {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
              const col = idx % gridSize;
              const row = Math.floor(idx / gridSize);
              const wall = isWall(col, row, levelDef);
              const isStart = col === levelDef.start[0] && row === levelDef.start[1];
              const star = stars.find(s => s.col === col && s.row === row);
              const isStarCell = !!star;
              const isStarCollected = star?.collected;
              const isStarCollecting = starCollectAnim?.col === col && starCollectAnim?.row === row;

              return (
                <div
                  key={idx}
                  className={`grid-cell ${wall ? 'wall' : 'path'} ${isStart ? 'start' : ''}`}
                  style={{
                    gridColumn: col + 1,
                    gridRow: row + 1,
                  }}
                >
                  {wall && <div className="wall-pattern" />}
                  {isStart && !wall && <div className="start-marker">S</div>}
                  {isStarCell && !isStarCollected && (
                    <div className={`star-cell ${isStarCollecting ? 'collecting' : ''}`}>
                      <div className="star-glow" />
                      <span className="star-emoji">⭐</span>
                    </div>
                  )}
                  {isStarCell && isStarCollected && (
                    <div className="star-collected-marker">✓</div>
                  )}
                </div>
              );
            })}

            {/* Grid electricity particles */}
            {gridParticles.map(gp => {
              const x = (gp.x1 + (gp.x2 - gp.x1) * gp.progress) / gridSize * 100;
              const y = (gp.y1 + (gp.y2 - gp.y1) * gp.progress) / gridSize * 100;
              return (
                <div
                  key={gp.id}
                  className="electricity-particle"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    background: gp.color,
                    boxShadow: `0 0 6px ${gp.color}, 0 0 12px ${gp.color}`,
                  }}
                />
              );
            })}

            {/* Robot */}
            <div
              className={`robot ${robotMoving ? 'moving' : ''} ${robotTurning ? 'turning' : ''} ${bonkAnimation ? 'bonk' : ''} ${dazed ? 'dazed' : ''} ${missionComplete ? 'celebrating' : ''}`}
              style={{
                '--robot-col': robotCol,
                '--robot-row': robotRow,
                '--robot-rot': `${rotationDeg}deg`,
              } as React.CSSProperties}
            >
              <div className="robot-antenna-game">
                <div className="antenna-ball-game" />
                <div className="antenna-stick-game" />
              </div>
              <div className="robot-head">
                <div className={`robot-eye left ${dazed ? 'dazed-eye' : ''}`}>
                  <div className="eye-pupil" />
                </div>
                <div className={`robot-eye right ${dazed ? 'dazed-eye' : ''}`}>
                  <div className="eye-pupil" />
                </div>
              </div>
              <div className="robot-body-game">
                <div className="robot-chest" />
              </div>
              <div className="robot-tracks">
                <div className={`track left ${robotMoving ? 'rolling' : ''}`} />
                <div className={`track right ${robotMoving ? 'rolling' : ''}`} />
              </div>
              {dazed && (
                <div className="dazed-stars">
                  <span className="dazed-star">✦</span>
                  <span className="dazed-star d2">✦</span>
                  <span className="dazed-star d3">✦</span>
                </div>
              )}
              {missionComplete && (
                <div className="robot-happy">
                  <span className="happy-text">!</span>
                </div>
              )}
            </div>

            {/* Burst particles */}
            {particles.map(p => (
              <div
                key={p.id}
                className="burst-particle"
                style={{
                  left: p.x,
                  top: p.y,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  opacity: p.life / p.maxLife,
                  boxShadow: `0 0 ${p.size}px ${p.color}`,
                }}
              />
            ))}
          </div>

          {/* Mission Complete Overlay */}
          {missionComplete && (
            <div className="mission-overlay">
              <div className="mission-text">MISSION COMPLETE!</div>
            </div>
          )}

          {/* Hint */}
          {showHint && levelDef.hint && !isExecuting && (
            <div className="hint-bubble">
              <span className="hint-icon">💡</span>
              <span className="hint-text-content">{levelDef.hint}</span>
              <button className="hint-close" onClick={() => setShowHint(false)}>✕</button>
            </div>
          )}
        </div>

        {/* Command Queue */}
        <div className="command-section">
          <div className="queue-label">Command Queue</div>
          <div className="command-queue">
            {commandQueue.map((qCmd, i) => (
              <div
                key={qCmd.id}
                className={`queued-card ${qCmd.card.type} ${executingIndex === i ? 'executing' : ''} ${executingIndex > i ? 'done' : ''}`}
                onMouseDown={(e) => handleCardDragStart(e, qCmd.card, qCmd.id)}
                onTouchStart={(e) => handleCardDragStart(e, qCmd.card, qCmd.id)}
              >
                <span className="queued-icon">{qCmd.card.icon}</span>
                <span className="queued-label">{qCmd.card.label}</span>
              </div>
            ))}
            {commandQueue.length < maxQueueSize && !isExecuting && (
              <div className="queue-slot-empty">
                <span className="slot-plus">+</span>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="controls-row">
            <button
              className={`go-btn ${isExecuting ? 'disabled' : ''} ${commandQueue.length === 0 ? 'disabled' : ''}`}
              onClick={executeCommands}
              disabled={isExecuting || commandQueue.length === 0}
            >
              <span className="go-icon">▶</span>
              GO
            </button>
            <button
              className={`reset-btn ${isExecuting ? 'disabled' : ''}`}
              onClick={resetRobot}
              disabled={isExecuting}
            >
              ↻ Reset
            </button>
            <button
              className={`clear-btn ${isExecuting ? 'disabled' : ''}`}
              onClick={clearQueue}
              disabled={isExecuting}
            >
              ✕ Clear
            </button>
          </div>

          {/* Command Card Tray */}
          <div className="card-tray">
            {AVAILABLE_COMMANDS.map(card => (
              <div
                key={card.id}
                className={`command-card ${card.type} ${isExecuting ? 'disabled' : ''}`}
                onMouseDown={(e) => handleCardDragStart(e, card)}
                onTouchStart={(e) => handleCardDragStart(e, card)}
                onClick={() => !isExecuting && addCommandToQueue(card)}
              >
                <span className="card-icon">{card.icon}</span>
                <span className="card-label">{card.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Drag ghost */}
        {draggedCardType && dragPos && (
          <div
            className={`drag-ghost ${draggedCardType.type}`}
            style={{ left: dragPos.x, top: dragPos.y }}
          >
            <span className="ghost-icon">{draggedCardType.icon}</span>
            <span className="ghost-label">{draggedCardType.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .robot-nav {
    width: 100%;
    height: 100%;
    font-family: 'Rajdhani', sans-serif;
    overflow: hidden;
    background: #0a0a1a;
  }

  /* ============= INTRO ============= */
  .intro-screen, .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-bg, .complete-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .grid-bg-lines {
    position: absolute;
    inset: 0;
  }

  .grid-line {
    position: absolute;
    background: rgba(0, 255, 255, 0.06);
  }

  .grid-line.horizontal {
    left: 0; right: 0; height: 1px;
    animation: gridLinePulse 4s ease-in-out infinite;
  }

  .grid-line.vertical {
    top: 0; bottom: 0; width: 1px;
    animation: gridLinePulse 4s ease-in-out infinite;
  }

  @keyframes gridLinePulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }

  .circuit-dots {
    position: absolute;
    inset: 0;
  }

  .circuit-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00ffff;
    animation: dotBlink 3s ease-in-out infinite;
  }

  @keyframes dotBlink {
    0%, 100% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }

  .intro-content, .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 500px;
    width: 100%;
  }

  .robot-intro-container {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .robot-intro, .robot-complete {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.3;
    transform: scale(0.8);
    transition: all 0.8s ease;
  }

  .robot-intro.powered {
    opacity: 1;
    transform: scale(1);
  }

  .robot-complete {
    opacity: 1;
    transform: scale(1);
    animation: robotDance 0.6s ease-in-out infinite;
  }

  @keyframes robotDance {
    0%, 100% { transform: scale(1) rotate(-5deg); }
    50% { transform: scale(1.05) rotate(5deg); }
  }

  .robot-antenna, .robot-antenna.dance {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -2px;
  }

  .robot-antenna.dance {
    animation: antennaBounce 0.4s ease-in-out infinite;
  }

  @keyframes antennaBounce {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  .antenna-ball {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #ff4444, #cc0000);
    box-shadow: 0 0 10px #ff4444, 0 0 20px rgba(255, 68, 68, 0.5);
    animation: antennaPulse 1.5s ease-in-out infinite;
  }

  @keyframes antennaPulse {
    0%, 100% { box-shadow: 0 0 10px #ff4444, 0 0 20px rgba(255, 68, 68, 0.3); }
    50% { box-shadow: 0 0 15px #ff6666, 0 0 30px rgba(255, 68, 68, 0.6); }
  }

  .antenna-stick {
    width: 3px;
    height: 14px;
    background: linear-gradient(to bottom, #888, #666);
    border-radius: 1px;
  }

  .robot-head-intro {
    width: 70px;
    height: 45px;
    background: linear-gradient(180deg, #5a6a7a 0%, #3a4a5a 50%, #2a3a4a 100%);
    border-radius: 14px 14px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    border: 2px solid #6a7a8a;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.1);
    position: relative;
  }

  .robot-eye-intro {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #1a1a2e;
    border: 2px solid #444;
    transition: all 0.5s ease;
  }

  .robot-eye-intro.on {
    background: radial-gradient(circle at 40% 40%, #00ffff, #0088aa);
    border-color: #00cccc;
    box-shadow: 0 0 10px #00ffff, 0 0 20px rgba(0, 255, 255, 0.4);
  }

  .robot-eye-intro.happy {
    background: radial-gradient(circle at 40% 40%, #00ff88, #00aa44);
    border-color: #00cc66;
    box-shadow: 0 0 10px #00ff88, 0 0 20px rgba(0, 255, 136, 0.4);
  }

  .robot-body-intro {
    width: 60px;
    height: 40px;
    background: linear-gradient(180deg, #4a5a6a 0%, #3a4a5a 100%);
    border-radius: 6px 6px 10px 10px;
    border: 2px solid #5a6a7a;
    margin-top: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  .robot-chest-light {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle, #0066ff, #003388);
    box-shadow: 0 0 8px #0066ff;
    animation: chestPulse 2s ease-in-out infinite;
  }

  .robot-chest-light.success {
    background: radial-gradient(circle, #00ff88, #00aa44);
    box-shadow: 0 0 12px #00ff88;
  }

  @keyframes chestPulse {
    0%, 100% { opacity: 0.6; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  .title {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(1.8rem, 7vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #00ffff, #0088ff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.3rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
  }

  .title.show { opacity: 1; transform: translateY(0); }

  .tagline {
    color: #6a8a9a;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease 0.2s;
  }

  .tagline.show { opacity: 1; transform: translateY(0); }

  .instructions-card {
    background: rgba(0, 255, 255, 0.03);
    border: 1px solid rgba(0, 255, 255, 0.15);
    border-radius: 16px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease 0.3s;
  }

  .instructions-card.show { opacity: 1; transform: translateY(0); }

  .instructions-card h3 {
    font-family: 'Orbitron', sans-serif;
    color: #00ffff;
    font-size: 1rem;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  .instruction {
    margin-bottom: 1rem;
  }

  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.4rem;
  }

  .cmd-mini {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
  }

  .cmd-mini.forward {
    background: linear-gradient(135deg, #00cc88, #009966);
    border: 2px solid #00ffaa;
  }

  .cmd-mini.turn-l {
    background: linear-gradient(135deg, #ff8844, #cc6622);
    border: 2px solid #ffaa66;
  }

  .cmd-mini.turn-r {
    background: linear-gradient(135deg, #4488ff, #2266cc);
    border: 2px solid #66aaff;
  }

  .go-mini {
    background: linear-gradient(135deg, #00ff88, #00cc66);
    color: white;
    font-family: 'Orbitron', sans-serif;
    font-weight: 800;
    font-size: 0.8rem;
    padding: 6px 12px;
    border-radius: 20px;
  }

  .arrow-icon { color: #666; font-size: 1.2rem; }
  .robot-mini { font-size: 1.8rem; }
  .star-mini { font-size: 1.8rem; }
  .equals-icon { color: #666; font-size: 1.2rem; }
  .points-mini { color: #ffd700; font-family: 'Orbitron', sans-serif; font-weight: 700; font-size: 0.9rem; }

  .instruction p { color: #8aa; font-size: 0.9rem; }
  .instruction strong { color: #cee; }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, #00cc88, #0088ff);
    border: 2px solid rgba(0, 255, 255, 0.3);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(0, 204, 136, 0.3), 0 0 20px rgba(0, 255, 255, 0.1);
    opacity: 0;
    transform: translateY(20px);
  }

  .start-btn.show, .next-btn { opacity: 1; transform: translateY(0); }
  .next-btn { opacity: 1; transform: translateY(0); }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 204, 136, 0.5), 0 0 30px rgba(0, 255, 255, 0.2);
  }

  .btn-icon { font-size: 1.3rem; }

  /* ============= COMPLETE ============= */
  .celebration-particles {
    position: absolute;
    inset: 0;
  }

  .celebration-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    bottom: -10px;
    animation: particleRise 3s ease-out infinite;
  }

  @keyframes particleRise {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100vh) scale(0); opacity: 0; }
  }

  .robot-dance {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  .complete-title {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(1.6rem, 6vw, 2.4rem);
    font-weight: 900;
    color: #00ff88;
    text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
    margin-bottom: 0.3rem;
    animation: titleGlow 1.5s ease-in-out infinite;
  }

  @keyframes titleGlow {
    0%, 100% { text-shadow: 0 0 20px rgba(0, 255, 136, 0.3); }
    50% { text-shadow: 0 0 30px rgba(0, 255, 136, 0.6), 0 0 50px rgba(0, 255, 136, 0.2); }
  }

  .complete-subtitle {
    color: #6a8a9a;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .efficiency-rating {
    margin-bottom: 1.5rem;
  }

  .efficiency-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.8rem;
    color: #6a8a9a;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  .efficiency-stars {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 0.3rem;
  }

  .eff-star {
    font-size: 2.2rem;
    color: #333;
    transition: all 0.5s ease;
  }

  .eff-star.earned {
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    animation: starEarn 0.5s ease backwards;
  }

  .eff-star.earned:nth-child(2) { animation-delay: 0.2s; }
  .eff-star.earned:nth-child(3) { animation-delay: 0.4s; }

  @keyframes starEarn {
    0% { transform: scale(0) rotate(-180deg); }
    60% { transform: scale(1.3) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .commands-used { color: #6a8a9a; font-size: 0.9rem; }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .score-item { display: flex; flex-direction: column; align-items: center; }
  .score-label { font-size: 0.8rem; color: #5a7a8a; margin-bottom: 0.3rem; }
  .score-value { font-family: 'Orbitron', sans-serif; font-size: 1.8rem; font-weight: 900; color: #00ffff; }

  .complete-buttons { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }

  .menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #6a8a9a;
    background: transparent;
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: rgba(0, 255, 255, 0.5); color: #aaccdd; }

  /* ============= GAME SCREEN ============= */
  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background: linear-gradient(180deg, #080818 0%, #0a0a2a 50%, #080818 100%);
  }

  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: rgba(0, 20, 40, 0.8);
    border-bottom: 1px solid rgba(0, 255, 255, 0.1);
    z-index: 50;
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.6rem; }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(0, 255, 255, 0.08);
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 10px;
    color: #00cccc;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(0, 255, 255, 0.15); }

  .level-badge {
    padding: 0.4rem 0.9rem;
    background: linear-gradient(135deg, rgba(0, 204, 136, 0.2), rgba(0, 136, 255, 0.2));
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 20px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    color: #00ffcc;
    letter-spacing: 1px;
  }

  .star-progress {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    background: rgba(255, 215, 0, 0.08);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 20px;
  }

  .star-icon { font-size: 1.1rem; }
  .star-text { color: #ffd700; font-weight: 600; font-size: 0.9rem; }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    background: rgba(0, 255, 255, 0.08);
    border: 1px solid rgba(0, 255, 255, 0.15);
    border-radius: 20px;
    color: #00ffcc;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
  }

  .score-icon { font-size: 1rem; }

  /* ============= MAZE ============= */
  .maze-area {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    position: relative;
    min-height: 0;
  }

  .maze-grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-size), 1fr);
    grid-template-rows: repeat(var(--grid-size), 1fr);
    width: min(100%, 55vh);
    height: min(100%, 55vh);
    aspect-ratio: 1;
    position: relative;
    border: 2px solid rgba(0, 255, 255, 0.2);
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.05), inset 0 0 20px rgba(0, 255, 255, 0.02);
  }

  .grid-glow-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }

  .glow-line {
    position: absolute;
  }

  .glow-line.horizontal {
    left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.12), transparent);
  }

  .glow-line.vertical {
    top: 0; bottom: 0; width: 1px;
    background: linear-gradient(180deg, transparent, rgba(0, 255, 255, 0.12), transparent);
  }

  .grid-cell {
    position: relative;
    border: 1px solid rgba(0, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .grid-cell.path {
    background: rgba(0, 20, 40, 0.3);
  }

  .grid-cell.wall {
    background: linear-gradient(135deg, #1a1a2e, #12122a);
  }

  .wall-pattern {
    position: absolute;
    inset: 2px;
    border-radius: 3px;
    background:
      repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255, 0, 100, 0.06) 4px, rgba(255, 0, 100, 0.06) 5px),
      linear-gradient(135deg, rgba(30, 10, 40, 0.8), rgba(20, 5, 30, 0.9));
    border: 1px solid rgba(255, 0, 100, 0.15);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .grid-cell.start {
    background: rgba(0, 204, 136, 0.08);
  }

  .start-marker {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.6rem;
    color: rgba(0, 204, 136, 0.4);
    font-weight: 700;
    position: absolute;
    bottom: 2px;
    right: 4px;
  }

  /* Star */
  .star-cell {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }

  .star-glow {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.4), transparent);
    animation: starGlow 2s ease-in-out infinite;
  }

  @keyframes starGlow {
    0%, 100% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1.3); opacity: 1; }
  }

  .star-emoji {
    font-size: clamp(1rem, 3vw, 1.6rem);
    animation: starFloat 2s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.5));
    position: relative;
    z-index: 2;
  }

  @keyframes starFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-3px) rotate(10deg); }
  }

  .star-cell.collecting .star-emoji {
    animation: starCollect 0.5s ease forwards;
  }

  @keyframes starCollect {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.8) rotate(180deg); opacity: 0.8; }
    100% { transform: scale(0) rotate(360deg); opacity: 0; }
  }

  .star-collected-marker {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.7rem;
    color: rgba(0, 255, 136, 0.3);
    font-weight: 700;
  }

  /* Electricity particles */
  .electricity-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 3;
    transform: translate(-50%, -50%);
  }

  /* ============= ROBOT ============= */
  .robot {
    position: absolute;
    z-index: 20;
    width: calc(100% / var(--grid-size));
    height: calc(100% / var(--grid-size));
    left: calc(var(--robot-col) * (100% / var(--grid-size)));
    top: calc(var(--robot-row) * (100% / var(--grid-size)));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.35s ease-in-out, top 0.35s ease-in-out;
    filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.3));
  }

  .robot.turning {
    transition: left 0.35s ease-in-out, top 0.35s ease-in-out;
  }

  .robot.bonk {
    animation: bonkShake 0.5s ease;
  }

  @keyframes bonkShake {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-6px, -3px); }
    20% { transform: translate(6px, 2px); }
    30% { transform: translate(-4px, 4px); }
    40% { transform: translate(4px, -2px); }
    50% { transform: translate(-3px, 3px); }
    60% { transform: translate(3px, -1px); }
    70% { transform: translate(-2px, 2px); }
    80% { transform: translate(2px, -1px); }
    90% { transform: translate(-1px, 1px); }
  }

  .robot.celebrating {
    animation: robotCelebrate 0.4s ease-in-out infinite;
  }

  @keyframes robotCelebrate {
    0%, 100% { transform: scale(1) rotate(-3deg); }
    50% { transform: scale(1.1) rotate(3deg); }
  }

  .robot-antenna-game {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -1px;
    transform: rotate(var(--robot-rot));
    transition: transform 0.35s ease-in-out;
  }

  .antenna-ball-game {
    width: clamp(5px, 1.5vw, 8px);
    height: clamp(5px, 1.5vw, 8px);
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #ff4444, #cc0000);
    box-shadow: 0 0 6px #ff4444;
  }

  .antenna-stick-game {
    width: 2px;
    height: clamp(4px, 1vw, 8px);
    background: #888;
  }

  .robot-head {
    width: clamp(28px, 8vw, 50px);
    height: clamp(18px, 5vw, 30px);
    background: linear-gradient(180deg, #5a6a7a 0%, #3a4a5a 50%, #2a3a4a 100%);
    border-radius: 8px 8px 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(4px, 1.5vw, 10px);
    border: 1.5px solid #6a7a8a;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.1);
    position: relative;
    transform: rotate(var(--robot-rot));
    transition: transform 0.35s ease-in-out;
  }

  .robot-eye {
    width: clamp(7px, 2vw, 12px);
    height: clamp(7px, 2vw, 12px);
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #00ffff, #0088aa);
    border: 1.5px solid #00cccc;
    box-shadow: 0 0 6px #00ffff, 0 0 12px rgba(0, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
  }

  .robot-eye.dazed-eye {
    background: radial-gradient(circle, #ff6644, #cc3311);
    border-color: #ff4422;
    box-shadow: 0 0 6px #ff6644;
    animation: eyeFlicker 0.3s ease-in-out infinite;
  }

  @keyframes eyeFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .eye-pupil {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 25%;
    left: 30%;
  }

  .robot-body-game {
    width: clamp(22px, 6vw, 38px);
    height: clamp(14px, 4vw, 24px);
    background: linear-gradient(180deg, #4a5a6a 0%, #3a4a5a 100%);
    border-radius: 3px 3px 6px 6px;
    border: 1.5px solid #5a6a7a;
    margin-top: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    transform: rotate(var(--robot-rot));
    transition: transform 0.35s ease-in-out;
  }

  .robot-chest {
    width: clamp(6px, 1.5vw, 10px);
    height: clamp(6px, 1.5vw, 10px);
    border-radius: 50%;
    background: radial-gradient(circle, #0088ff, #004488);
    box-shadow: 0 0 6px #0088ff;
    animation: chestPulse 2s ease-in-out infinite;
  }

  .robot-tracks {
    display: flex;
    gap: clamp(8px, 2.5vw, 16px);
    margin-top: -1px;
    transform: rotate(var(--robot-rot));
    transition: transform 0.35s ease-in-out;
  }

  .track {
    width: clamp(6px, 1.8vw, 10px);
    height: clamp(4px, 1vw, 6px);
    background: linear-gradient(90deg, #333, #555, #333);
    border-radius: 2px;
    border: 1px solid #444;
  }

  .track.rolling {
    animation: trackRoll 0.2s linear infinite;
  }

  @keyframes trackRoll {
    0% { background-position: 0 0; }
    100% { background-position: 10px 0; }
  }

  /* Dazed stars */
  .dazed-stars {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 3px;
    animation: dazedOrbit 1s linear infinite;
    z-index: 25;
  }

  .dazed-star {
    font-size: 0.8rem;
    color: #ffdd00;
    text-shadow: 0 0 4px #ffdd00;
  }

  .dazed-star.d2 { animation: dazedBob 0.5s ease-in-out infinite; }
  .dazed-star.d3 { animation: dazedBob 0.5s ease-in-out infinite 0.25s; }

  @keyframes dazedOrbit {
    0% { transform: translateX(-50%) rotate(0deg); }
    100% { transform: translateX(-50%) rotate(360deg); }
  }

  @keyframes dazedBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .robot-happy {
    position: absolute;
    top: -16px;
    right: -4px;
    z-index: 25;
  }

  .happy-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    color: #00ff88;
    text-shadow: 0 0 8px #00ff88;
    animation: happyBounce 0.4s ease-in-out infinite;
  }

  @keyframes happyBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.2); }
  }

  /* Burst particles */
  .burst-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 30;
    transform: translate(-50%, -50%);
  }

  /* Mission Complete Overlay */
  .mission-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 40;
    animation: overlayFade 0.5s ease;
    border-radius: 8px;
  }

  @keyframes overlayFade {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .mission-text {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(1.2rem, 4vw, 2rem);
    font-weight: 900;
    color: #00ff88;
    text-shadow: 0 0 20px rgba(0, 255, 136, 0.6), 0 0 40px rgba(0, 255, 136, 0.3);
    animation: missionPulse 0.8s ease-in-out infinite;
  }

  @keyframes missionPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  /* Hint bubble */
  .hint-bubble {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 20, 40, 0.9);
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 12px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 35;
    max-width: 90%;
    animation: hintSlide 0.5s ease;
  }

  @keyframes hintSlide {
    0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
    100% { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  .hint-icon { font-size: 1.1rem; }
  .hint-text-content { color: #8aaa; font-size: 0.85rem; }
  .hint-close {
    background: none;
    border: none;
    color: #5a7a8a;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 2px 6px;
  }

  /* ============= COMMAND SECTION ============= */
  .command-section {
    background: rgba(0, 10, 25, 0.95);
    border-top: 1px solid rgba(0, 255, 255, 0.12);
    padding: 0.5rem 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    z-index: 45;
  }

  .queue-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 0.6rem;
    color: rgba(0, 255, 255, 0.4);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .command-queue {
    display: flex;
    gap: 0.3rem;
    min-height: 44px;
    padding: 0.3rem;
    background: rgba(0, 255, 255, 0.03);
    border: 1px solid rgba(0, 255, 255, 0.1);
    border-radius: 10px;
    overflow-x: auto;
    align-items: center;
    -webkit-overflow-scrolling: touch;
  }

  .queued-card {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    cursor: grab;
    transition: all 0.2s ease;
    border: 1.5px solid transparent;
  }

  .queued-card.forward, .queued-card.forward2 {
    background: linear-gradient(135deg, rgba(0, 204, 136, 0.3), rgba(0, 153, 102, 0.3));
    border-color: rgba(0, 204, 136, 0.4);
  }

  .queued-card.left {
    background: linear-gradient(135deg, rgba(255, 136, 68, 0.3), rgba(204, 102, 34, 0.3));
    border-color: rgba(255, 136, 68, 0.4);
  }

  .queued-card.right {
    background: linear-gradient(135deg, rgba(68, 136, 255, 0.3), rgba(34, 102, 204, 0.3));
    border-color: rgba(68, 136, 255, 0.4);
  }

  .queued-card.executing {
    animation: cardExecute 0.5s ease-in-out;
    box-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
    border-color: #00ffff;
  }

  @keyframes cardExecute {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .queued-card.done {
    opacity: 0.4;
  }

  .queued-icon { font-size: 1rem; }
  .queued-label { font-size: 0.65rem; }

  .queue-slot-empty {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border: 1.5px dashed rgba(0, 255, 255, 0.15);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: slotPulse 2s ease-in-out infinite;
  }

  @keyframes slotPulse {
    0%, 100% { border-color: rgba(0, 255, 255, 0.1); }
    50% { border-color: rgba(0, 255, 255, 0.25); }
  }

  .slot-plus { color: rgba(0, 255, 255, 0.2); font-size: 1rem; }

  /* Controls */
  .controls-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  .go-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1.5rem;
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #00cc66, #00aa44);
    border: 2px solid rgba(0, 255, 136, 0.4);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 204, 102, 0.3), 0 0 15px rgba(0, 255, 136, 0.1);
    animation: goPulse 2s ease-in-out infinite;
  }

  .go-btn:hover:not(.disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 204, 102, 0.5), 0 0 25px rgba(0, 255, 136, 0.2);
  }

  @keyframes goPulse {
    0%, 100% { box-shadow: 0 4px 20px rgba(0, 204, 102, 0.3), 0 0 15px rgba(0, 255, 136, 0.1); }
    50% { box-shadow: 0 4px 25px rgba(0, 204, 102, 0.5), 0 0 25px rgba(0, 255, 136, 0.2); }
  }

  .go-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    animation: none;
  }

  .go-icon { font-size: 0.9rem; }

  .reset-btn, .clear-btn {
    padding: 0.4rem 0.9rem;
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: #6a8a9a;
    background: rgba(0, 255, 255, 0.05);
    border: 1px solid rgba(0, 255, 255, 0.15);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .reset-btn:hover:not(.disabled), .clear-btn:hover:not(.disabled) {
    background: rgba(0, 255, 255, 0.1);
    color: #aaccdd;
  }

  .reset-btn.disabled, .clear-btn.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* Card tray */
  .card-tray {
    display: flex;
    gap: 0.4rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .command-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    padding: 0.5rem 0.7rem;
    border-radius: 12px;
    cursor: grab;
    transition: all 0.2s ease;
    min-width: 60px;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
  }

  .command-card::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .command-card.forward {
    background: linear-gradient(135deg, #00cc88, #009966);
    border-color: rgba(0, 255, 170, 0.4);
    box-shadow: 0 4px 12px rgba(0, 204, 136, 0.3);
  }

  .command-card.forward2 {
    background: linear-gradient(135deg, #00aa77, #008855);
    border-color: rgba(0, 204, 136, 0.4);
    box-shadow: 0 4px 12px rgba(0, 170, 119, 0.3);
  }

  .command-card.left {
    background: linear-gradient(135deg, #ff8844, #cc6622);
    border-color: rgba(255, 170, 102, 0.4);
    box-shadow: 0 4px 12px rgba(255, 136, 68, 0.3);
  }

  .command-card.right {
    background: linear-gradient(135deg, #4488ff, #2266cc);
    border-color: rgba(102, 170, 255, 0.4);
    box-shadow: 0 4px 12px rgba(68, 136, 255, 0.3);
  }

  .command-card:hover:not(.disabled) {
    transform: translateY(-3px) scale(1.05);
  }

  .command-card:active:not(.disabled) {
    transform: translateY(0) scale(0.98);
  }

  .command-card.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .card-icon {
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
  }

  .card-label {
    font-size: 0.6rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    white-space: nowrap;
  }

  /* Drag ghost */
  .drag-ghost {
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    pointer-events: none;
    opacity: 0.9;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  }

  .drag-ghost.forward, .drag-ghost.forward2 {
    background: linear-gradient(135deg, #00cc88, #009966);
    border: 2px solid #00ffaa;
  }

  .drag-ghost.left {
    background: linear-gradient(135deg, #ff8844, #cc6622);
    border: 2px solid #ffaa66;
  }

  .drag-ghost.right {
    background: linear-gradient(135deg, #4488ff, #2266cc);
    border: 2px solid #66aaff;
  }

  .ghost-icon { font-size: 1.2rem; color: white; }
  .ghost-label { font-size: 0.75rem; color: white; font-weight: 600; }

  /* ============= RESPONSIVE ============= */
  @media (max-width: 600px) {
    .maze-grid {
      width: min(100%, 48vh);
      height: min(100%, 48vh);
    }

    .header-center { display: none; }

    .command-card {
      min-width: 52px;
      padding: 0.4rem 0.5rem;
    }

    .card-icon { font-size: 1.1rem; }
    .card-label { font-size: 0.55rem; }

    .go-btn { padding: 0.4rem 1.2rem; font-size: 0.9rem; }

    .command-section { padding: 0.4rem 0.5rem; gap: 0.3rem; }

    .controls-row { gap: 0.3rem; }

    .queued-card { padding: 0.2rem 0.4rem; }
    .queued-icon { font-size: 0.85rem; }
    .queued-label { font-size: 0.55rem; }
  }

  @media (max-height: 700px) {
    .maze-area { padding: 0.4rem; }
    .command-section { padding: 0.3rem 0.5rem; gap: 0.25rem; }
    .command-queue { min-height: 36px; }
    .controls-row { gap: 0.3rem; }
    .go-btn { padding: 0.35rem 1rem; font-size: 0.85rem; }
  }
`;
