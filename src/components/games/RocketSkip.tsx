"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Physics constants
const FRICTION = 0.985;
const BOUNCE = 0.6;
const FUEL_CELLS_PER_LAUNCH = 6;

interface FuelCell {
  id: number;
  value: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
}

interface DraggedCell extends FuelCell {
  offsetX: number;
  offsetY: number;
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
  type: 'spark' | 'smoke' | 'star' | 'exhaust';
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface LevelConfig {
  skipBy: number;
  startFrom: number;
  label: string;
}

type GameScreen = 'intro' | 'playing' | 'launching' | 'complete';

const LEVEL_CONFIGS: LevelConfig[] = [
  { skipBy: 2, startFrom: 0, label: 'Count by 2s' },
  { skipBy: 5, startFrom: 0, label: 'Count by 5s' },
  { skipBy: 10, startFrom: 0, label: 'Count by 10s' },
  { skipBy: 3, startFrom: 0, label: 'Count by 3s' },
  { skipBy: 2, startFrom: 0, label: 'Mixed: 2s' },
  { skipBy: 5, startFrom: 0, label: 'Mixed: 5s' },
  { skipBy: 5, startFrom: 35, label: 'Count by 5s from 35' },
  { skipBy: 2, startFrom: 48, label: 'Count by 2s from 48' },
  { skipBy: 10, startFrom: 30, label: 'Count by 10s from 30' },
];

let cellIdCounter = 0;
const getNewId = (): number => ++cellIdCounter;

interface RocketSkipProps {
  onExit?: () => void;
}

export default function RocketSkip({ onExit }: RocketSkipProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [fuelCells, setFuelCells] = useState<FuelCell[]>([]);
  const [sequence, setSequence] = useState<number[]>([]);
  const [filledCount, setFilledCount] = useState<number>(0);
  const [fuelLevel, setFuelLevel] = useState<number>(0);
  const [draggedCell, setDraggedCell] = useState<DraggedCell | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 80 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      opacity: 0.3 + Math.random() * 0.7,
      twinkleSpeed: 2 + Math.random() * 4,
      twinkleOffset: Math.random() * Math.PI * 2,
    }))
  );
  const [rocketShake, setRocketShake] = useState<boolean>(false);
  const [wrongEffect, setWrongEffect] = useState<{ id: number; x: number; y: number } | null>(null);
  const [correctEffect, setCorrectEffect] = useState<{ id: number; x: number; y: number; value: number } | null>(null);
  const [launchPhase, setLaunchPhase] = useState<number>(0);
  const [nearFuelPort, setNearFuelPort] = useState<boolean>(false);
  const [introAnim, setIntroAnim] = useState<number>(0);
  const [levelStartTime, setLevelStartTime] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const particleIdRef = useRef<number>(0);

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 600 };
  }, []);

  const getLevelConfig = useCallback((lvl: number): LevelConfig => {
    return LEVEL_CONFIGS[Math.min(lvl - 1, LEVEL_CONFIGS.length - 1)];
  }, []);

  const generateSequence = useCallback((lvl: number): number[] => {
    const config = getLevelConfig(lvl);
    const seq: number[] = [];
    let current = config.startFrom;
    for (let i = 0; i < FUEL_CELLS_PER_LAUNCH + 2; i++) {
      current += config.skipBy;
      seq.push(current);
    }
    return seq;
  }, [getLevelConfig]);

  const createFuelCell = useCallback((value: number, x?: number, y?: number): FuelCell => {
    const size = getContainerSize();
    const rocketZoneLeft = size.width / 2 - 130;
    const rocketZoneRight = size.width / 2 + 130;
    const rocketZoneTop = size.height - 320;

    let cellX: number;
    let cellY: number;

    if (x !== undefined && y !== undefined) {
      cellX = x;
      cellY = y;
    } else {
      // Place cells avoiding the rocket zone
      const side = Math.random() < 0.5 ? 'left' : 'right';
      if (side === 'left') {
        cellX = 50 + Math.random() * (rocketZoneLeft - 100);
      } else {
        cellX = rocketZoneRight + 50 + Math.random() * (size.width - rocketZoneRight - 100);
      }
      cellY = 80 + Math.random() * (size.height - 250);
    }

    return {
      id: getNewId(),
      value,
      x: cellX,
      y: cellY,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: 40,
      hue: value % 2 === 0 ? 200 + (value * 7) % 60 : 280 + (value * 11) % 60,
    };
  }, [getContainerSize]);

  const spawnParticles = useCallback((x: number, y: number, count: number, type: Particle['type'], hue = 30) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = type === 'smoke' ? 1 + Math.random() * 2 : 3 + Math.random() * 5;
      newParticles.push({
        id: ++particleIdRef.current,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'smoke' ? 2 : 0),
        life: type === 'smoke' ? 60 + Math.random() * 40 : 20 + Math.random() * 30,
        maxLife: type === 'smoke' ? 80 : 40,
        size: type === 'smoke' ? 8 + Math.random() * 15 : 3 + Math.random() * 5,
        hue,
        type,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const initLevel = useCallback((lvl: number) => {
    const seq = generateSequence(lvl);
    setSequence(seq);
    setFilledCount(0);
    setFuelLevel(0);
    setCombo(0);
    setDraggedCell(null);
    setNearFuelPort(false);
    setRocketShake(false);
    setWrongEffect(null);
    setCorrectEffect(null);
    setLaunchPhase(0);
    setParticles([]);
    setLevelStartTime(Date.now());

    // Create fuel cells: correct answers + distractors
    const neededValues = seq.slice(0, FUEL_CELLS_PER_LAUNCH);
    const allCells: FuelCell[] = [];

    for (const val of neededValues) {
      allCells.push(createFuelCell(val));
    }

    // Add distractors
    const config = getLevelConfig(lvl);
    const distractorCount = Math.min(3 + Math.floor(lvl / 2), 6);
    for (let i = 0; i < distractorCount; i++) {
      let distractor: number;
      do {
        const offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
        distractor = neededValues[Math.floor(Math.random() * neededValues.length)] + offset * (config.skipBy > 3 ? 1 : config.skipBy);
        if (distractor <= 0) distractor = Math.abs(distractor) + config.skipBy;
      } while (neededValues.includes(distractor) || distractor <= 0);
      allCells.push(createFuelCell(distractor));
    }

    setFuelCells(allCells);
  }, [generateSequence, createFuelCell, getLevelConfig]);

  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setMaxCombo(0);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // Intro animation
  useEffect(() => {
    if (gameState !== 'intro') return;
    const timer1 = setTimeout(() => setIntroAnim(1), 300);
    const timer2 = setTimeout(() => setIntroAnim(2), 800);
    const timer3 = setTimeout(() => setIntroAnim(3), 1300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [gameState]);

  // Physics loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const updatePhysics = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 2);
      lastTimeRef.current = timestamp;
      const size = getContainerSize();

      setFuelCells(prev => prev.map(cell => {
        if (draggedCell?.id === cell.id) return cell;
        let { x, y, vx, vy, radius } = cell;
        x += vx * delta;
        y += vy * delta;
        vx *= FRICTION;
        vy *= FRICTION;
        const minX = radius;
        const maxX = size.width - radius;
        const minY = radius + 60;
        const maxY = size.height - radius - 10;
        if (x < minX) { x = minX; vx = Math.abs(vx) * BOUNCE; }
        if (x > maxX) { x = maxX; vx = -Math.abs(vx) * BOUNCE; }
        if (y < minY) { y = minY; vy = Math.abs(vy) * BOUNCE; }
        if (y > maxY) { y = maxY; vy = -Math.abs(vy) * BOUNCE; }
        vx += (Math.random() - 0.5) * 0.08;
        vy += (Math.random() - 0.5) * 0.08;
        return { ...cell, x, y, vx, vy };
      }));

      // Update particles
      setParticles(prev => prev
        .map(p => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta,
          vy: p.vy + (p.type === 'smoke' ? -0.05 : 0.1) * delta,
          life: p.life - delta,
          size: p.type === 'smoke' ? p.size + 0.2 * delta : p.size * 0.97,
        }))
        .filter(p => p.life > 0)
      );

      animationRef.current = requestAnimationFrame(updatePhysics);
    };

    animationRef.current = requestAnimationFrame(updatePhysics);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameState, draggedCell, getContainerSize]);

  // Launch animation sequence
  useEffect(() => {
    if (gameState !== 'launching') return;
    const size = getContainerSize();
    const rocketX = size.width / 2;
    const rocketBase = size.height - 60;

    // Smoke at base
    const smokeInterval = setInterval(() => {
      spawnParticles(rocketX + (Math.random() - 0.5) * 80, rocketBase, 5, 'smoke', 0);
    }, 100);

    // Exhaust flames
    const exhaustInterval = setInterval(() => {
      spawnParticles(rocketX + (Math.random() - 0.5) * 30, rocketBase + 20, 3, 'exhaust', 20);
    }, 50);

    const t1 = setTimeout(() => setLaunchPhase(1), 200);
    const t2 = setTimeout(() => setLaunchPhase(2), 800);
    const t3 = setTimeout(() => setLaunchPhase(3), 1500);
    const t4 = setTimeout(() => setLaunchPhase(4), 2500);
    const t5 = setTimeout(() => {
      clearInterval(smokeInterval);
      clearInterval(exhaustInterval);
      setGameState('complete');
    }, 4000);

    return () => {
      clearInterval(smokeInterval);
      clearInterval(exhaustInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [gameState, getContainerSize, spawnParticles]);

  // Update particle physics during launch
  useEffect(() => {
    if (gameState !== 'launching') return;
    const interval = setInterval(() => {
      setParticles(prev => prev
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + (p.type === 'smoke' ? -0.1 : 0.05),
          life: p.life - 1,
          size: p.type === 'smoke' ? p.size + 0.3 : p.size * 0.96,
        }))
        .filter(p => p.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, [gameState]);

  const getFuelPortPosition = useCallback(() => {
    const size = getContainerSize();
    return {
      x: size.width / 2,
      y: size.height - 200,
    };
  }, [getContainerSize]);

  const isNearFuelPort = useCallback((cellX: number, cellY: number): boolean => {
    const port = getFuelPortPosition();
    const dx = cellX - port.x;
    const dy = cellY - port.y;
    return Math.sqrt(dx * dx + dy * dy) < 90;
  }, [getFuelPortPosition]);

  const handleCorrectFuel = useCallback((cell: FuelCell) => {
    const port = getFuelPortPosition();
    const newFilledCount = filledCount + 1;
    const newCombo = combo + 1;
    const timeBonus = Math.max(0, 500 - Math.floor((Date.now() - levelStartTime) / 100));
    const comboMultiplier = Math.min(newCombo, 5);
    const points = (100 + timeBonus) * comboMultiplier;

    setCorrectEffect({ id: Date.now(), x: port.x, y: port.y, value: points });
    setTimeout(() => setCorrectEffect(null), 800);

    setScore(s => s + points);
    setCombo(newCombo);
    setMaxCombo(prev => Math.max(prev, newCombo));
    setFilledCount(newFilledCount);
    setFuelLevel(newFilledCount / FUEL_CELLS_PER_LAUNCH);
    setFuelCells(prev => prev.filter(c => c.id !== cell.id));
    setRocketShake(true);
    setTimeout(() => setRocketShake(false), 400);

    spawnParticles(port.x, port.y, 12, 'spark', 120);

    if (newFilledCount >= FUEL_CELLS_PER_LAUNCH) {
      setTimeout(() => {
        setGameState('launching');
      }, 600);
    }
  }, [filledCount, combo, levelStartTime, getFuelPortPosition, spawnParticles]);

  const handleWrongFuel = useCallback((cell: FuelCell) => {
    setWrongEffect({ id: Date.now(), x: cell.x, y: cell.y });
    setTimeout(() => setWrongEffect(null), 600);
    setCombo(0);
    spawnParticles(cell.x, cell.y, 8, 'spark', 0);

    setFuelCells(prev => prev.map(c =>
      c.id === cell.id
        ? { ...c, vx: (Math.random() - 0.5) * 8, vy: -3 - Math.random() * 4 }
        : c
    ));
  }, [spawnParticles]);

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    cell: FuelCell
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDraggedCell({
      ...cell,
      offsetX: clientX - rect.left - cell.x,
      offsetY: clientY - rect.top - cell.y,
    });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!draggedCell || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(40, Math.min(rect.width - 40, clientX - rect.left - draggedCell.offsetX));
    const newY = Math.max(40, Math.min(rect.height - 40, clientY - rect.top - draggedCell.offsetY));

    setNearFuelPort(isNearFuelPort(newX, newY));

    setFuelCells(prev => prev.map(c =>
      c.id === draggedCell.id ? { ...c, x: newX, y: newY, vx: 0, vy: 0 } : c
    ));
  }, [draggedCell, isNearFuelPort]);

  const handleDragEnd = useCallback(() => {
    if (!draggedCell) return;
    const cell = fuelCells.find(c => c.id === draggedCell.id);
    if (!cell) { setDraggedCell(null); setNearFuelPort(false); return; }

    if (isNearFuelPort(cell.x, cell.y)) {
      const expectedValue = sequence[filledCount];
      if (cell.value === expectedValue) {
        handleCorrectFuel(cell);
      } else {
        handleWrongFuel(cell);
      }
    }

    setDraggedCell(null);
    setNearFuelPort(false);
  }, [draggedCell, fuelCells, isNearFuelPort, sequence, filledCount, handleCorrectFuel, handleWrongFuel]);

  // Drag event listeners
  useEffect(() => {
    if (!draggedCell) return;
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
  }, [draggedCell, handleDragMove, handleDragEnd]);

  // Idle exhaust particles during gameplay
  useEffect(() => {
    if (gameState !== 'playing') return;
    const interval = setInterval(() => {
      const size = getContainerSize();
      const intensity = Math.max(1, Math.floor(fuelLevel * 4));
      for (let i = 0; i < intensity; i++) {
        setParticles(prev => {
          if (prev.length > 60) return prev;
          return [...prev, {
            id: ++particleIdRef.current,
            x: size.width / 2 + (Math.random() - 0.5) * (10 + fuelLevel * 30),
            y: size.height - 55,
            vx: (Math.random() - 0.5) * (1 + fuelLevel * 2),
            vy: 2 + Math.random() * 2 + fuelLevel * 3,
            life: 15 + Math.random() * 15,
            maxLife: 30,
            size: 3 + Math.random() * 4 + fuelLevel * 4,
            hue: 20 + Math.random() * 30,
            type: 'exhaust' as const,
          }];
        });
      }
    }, 150);
    return () => clearInterval(interval);
  }, [gameState, fuelLevel, getContainerSize]);

  const config = getLevelConfig(level);
  const visibleSequence = sequence.slice(0, filledCount + 1);
  const startNum = config.startFrom;

  // ==================== INTRO SCREEN ====================
  if (gameState === 'intro') {
    return (
      <div className="rocket-skip">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="star-field">
            {stars.map((star, i) => (
              <div key={i} className="star" style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                animationDuration: `${star.twinkleSpeed}s`,
                animationDelay: `${star.twinkleOffset}s`,
              }} />
            ))}
          </div>
          <div className="nebula nebula-1" />
          <div className="nebula nebula-2" />
          <div className="intro-content">
            <div className={`intro-rocket ${introAnim >= 1 ? 'visible' : ''}`}>
              <div className="intro-rocket-body">
                <div className="rocket-nose" />
                <div className="rocket-body-main">
                  <div className="rocket-window" />
                  <div className="rocket-stripe" />
                </div>
                <div className="rocket-fins">
                  <div className="rocket-fin rocket-fin-left" />
                  <div className="rocket-fin rocket-fin-right" />
                </div>
                <div className="intro-flame" />
              </div>
            </div>
            <h1 className={`game-title ${introAnim >= 2 ? 'visible' : ''}`}>Rocket Skip</h1>
            <p className={`tagline ${introAnim >= 2 ? 'visible' : ''}`}>Skip Count to Launch!</p>
            <div className={`instructions-card ${introAnim >= 3 ? 'visible' : ''}`}>
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="seq-num">2</span>
                  <span className="seq-arrow">,</span>
                  <span className="seq-num">4</span>
                  <span className="seq-arrow">,</span>
                  <span className="seq-num">6</span>
                  <span className="seq-arrow">,</span>
                  <span className="seq-num mystery">?</span>
                </div>
                <p>Follow the <span className="hl-pattern">skip counting pattern</span></p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-cell">8</span>
                  <span className="drag-arrow">→</span>
                  <span className="mini-rocket-icon">🚀</span>
                </div>
                <p><strong>DRAG</strong> the correct fuel cell to the <span className="hl-rocket">rocket</span></p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="fuel-bar-mini">
                    <span className="fuel-fill-mini" />
                  </span>
                  <span className="blast-text">BLAST OFF!</span>
                </div>
                <p>Fill the fuel tank to <span className="hl-launch">launch into space!</span></p>
              </div>
            </div>
            <button className={`start-btn ${introAnim >= 3 ? 'visible' : ''}`} onClick={startGame}>
              <span className="btn-icon">🚀</span>
              Start Mission
              <span className="btn-icon">⭐</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==================== COMPLETE SCREEN ====================
  if (gameState === 'complete') {
    const speedBonus = Math.max(0, 3000 - Math.floor((Date.now() - levelStartTime) / 10));
    const comboBonus = maxCombo * 200;
    const totalBonus = speedBonus + comboBonus;

    return (
      <div className="rocket-skip">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="star-field">
            {stars.map((star, i) => (
              <div key={i} className="star" style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                animationDuration: `${star.twinkleSpeed}s`,
                animationDelay: `${star.twinkleOffset}s`,
              }} />
            ))}
          </div>
          <div className="nebula nebula-1" />
          <div className="nebula nebula-3" />
          <div className="complete-planets">
            <div className="planet planet-1" />
            <div className="planet planet-2" />
            <div className="planet planet-3" />
          </div>
          <div className="complete-content">
            <div className="complete-rocket-fly" />
            <h1 className="complete-title">Level {level} Complete!</h1>
            <p className="complete-pattern">
              {config.label}: {startNum}, {sequence.slice(0, FUEL_CELLS_PER_LAUNCH).join(', ')}
            </p>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Speed Bonus</span>
                <span className="score-value bonus">+{speedBonus}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Best Combo</span>
                <span className="score-value combo-val">x{maxCombo}</span>
              </div>
              <div className="score-item total">
                <span className="score-label">Total</span>
                <span className="score-value total-val">{score + totalBonus}</span>
              </div>
            </div>
            <div className="complete-buttons">
              {level < 9 && (
                <button className="next-btn" onClick={nextLevel}>
                  Level {level + 1}: {getLevelConfig(level + 1).label} →
                </button>
              )}
              {level >= 9 && (
                <button className="next-btn" onClick={() => { setLevel(1); startGame(); }}>
                  Play Again 🚀
                </button>
              )}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================== LAUNCH SCREEN ====================
  if (gameState === 'launching') {
    return (
      <div className="rocket-skip">
        <style>{styles}</style>
        <div className={`launch-screen phase-${launchPhase}`}>
          <div className="star-field star-field-launch">
            {stars.map((star, i) => (
              <div key={i} className="star star-launch" style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                animationDuration: `${star.twinkleSpeed}s`,
                animationDelay: `${star.twinkleOffset}s`,
              }} />
            ))}
          </div>
          <div className="launch-clouds">
            <div className="cloud cloud-1" />
            <div className="cloud cloud-2" />
            <div className="cloud cloud-3" />
          </div>
          <div className="launch-rocket-wrapper">
            <div className="launch-rocket">
              <div className="rocket-nose" />
              <div className="rocket-body-main">
                <div className="rocket-window" />
                <div className="rocket-stripe" />
              </div>
              <div className="rocket-fins">
                <div className="rocket-fin rocket-fin-left" />
                <div className="rocket-fin rocket-fin-right" />
              </div>
              <div className="launch-mega-flame" />
            </div>
          </div>
          <div className="launch-smoke-layer">
            {particles.filter(p => p.type === 'smoke').map(p => (
              <div key={p.id} className="smoke-particle" style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                opacity: p.life / p.maxLife * 0.6,
              }} />
            ))}
          </div>
          <div className="launch-text">
            {launchPhase >= 1 && <span className="countdown-num">3</span>}
            {launchPhase >= 2 && <span className="countdown-num">2</span>}
            {launchPhase >= 3 && <span className="countdown-num">1</span>}
            {launchPhase >= 4 && <span className="blastoff-text">BLAST OFF!</span>}
          </div>
        </div>
      </div>
    );
  }

  // ==================== PLAYING SCREEN ====================
  return (
    <div className="rocket-skip">
      <style>{styles}</style>
      <div className="game-screen">
        <div className="star-field">
          {stars.map((star, i) => (
            <div key={i} className="star" style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              animationDuration: `${star.twinkleSpeed}s`,
              animationDelay: `${star.twinkleOffset}s`,
            }} />
          ))}
        </div>
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />

        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
            <div className="pattern-label">{config.label}</div>
          </div>
          <div className="header-right">
            {combo >= 2 && (
              <div className="combo-badge">
                <span className="combo-fire">🔥</span>
                <span>x{combo}</span>
              </div>
            )}
            <div className="score-badge">
              <span className="score-icon">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Sequence display */}
        <div className="sequence-bar">
          <div className="sequence-label">Pattern:</div>
          <div className="sequence-numbers">
            <span className="seq-start">{startNum}</span>
            {visibleSequence.map((num, i) => {
              const isFilled = i < filledCount;
              const isCurrent = i === filledCount;
              return (
                <span key={i} className="seq-sep">,
                  <span className={`seq-val ${isFilled ? 'filled' : ''} ${isCurrent ? 'current' : ''}`}>
                    {isFilled ? num : '?'}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Game area */}
        <div className="game-area" ref={containerRef}>
          {/* Fuel gauge */}
          <div className="fuel-gauge">
            <div className="fuel-gauge-label">FUEL</div>
            <div className="fuel-gauge-tube">
              <div className="fuel-gauge-liquid" style={{ height: `${fuelLevel * 100}%` }}>
                <div className="fuel-bubble fuel-bubble-1" />
                <div className="fuel-bubble fuel-bubble-2" />
                <div className="fuel-bubble fuel-bubble-3" />
              </div>
              {Array.from({ length: FUEL_CELLS_PER_LAUNCH }).map((_, i) => (
                <div key={i} className="fuel-gauge-mark" style={{ bottom: `${((i + 1) / FUEL_CELLS_PER_LAUNCH) * 100}%` }} />
              ))}
            </div>
            <div className="fuel-gauge-count">{filledCount}/{FUEL_CELLS_PER_LAUNCH}</div>
          </div>

          {/* Rocket */}
          <div className={`rocket-assembly ${rocketShake ? 'shaking' : ''}`}>
            <div className="rocket-main">
              <div className="rocket-nose" />
              <div className="rocket-body-main">
                <div className="rocket-window" />
                <div className="rocket-stripe" />
              </div>
              <div className="rocket-fins">
                <div className="rocket-fin rocket-fin-left" />
                <div className="rocket-fin rocket-fin-right" />
              </div>
              <div className={`rocket-flame flame-level-${Math.min(Math.floor(fuelLevel * 5), 5)}`} />
            </div>
            <div className={`fuel-port ${nearFuelPort ? 'active' : ''}`}>
              <div className="fuel-port-glow" />
              <div className="fuel-port-ring" />
            </div>
            <div className="launch-pad" />
          </div>

          {/* Fuel cells */}
          {fuelCells.map(cell => {
            const isDragging = draggedCell?.id === cell.id;
            return (
              <div
                key={cell.id}
                className={`fuel-cell ${isDragging ? 'dragging' : ''}`}
                style={{
                  left: cell.x,
                  top: cell.y,
                  width: cell.radius * 2,
                  height: cell.radius * 2,
                  '--cell-hue': cell.hue,
                } as React.CSSProperties}
                onMouseDown={(e) => handleDragStart(e, cell)}
                onTouchStart={(e) => handleDragStart(e, cell)}
              >
                <div className="cell-shine" />
                <div className="cell-value">{cell.value}</div>
                <div className="cell-glow" />
              </div>
            );
          })}

          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} className={`particle particle-${p.type}`} style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.life / p.maxLife,
              backgroundColor: p.type === 'smoke'
                ? `rgba(180,180,180,${p.life / p.maxLife * 0.5})`
                : p.type === 'exhaust'
                  ? `hsl(${p.hue}, 100%, ${50 + (p.life / p.maxLife) * 30}%)`
                  : `hsl(${p.hue}, 100%, 60%)`,
            }} />
          ))}

          {/* Effects */}
          {correctEffect && (
            <div key={correctEffect.id} className="correct-effect" style={{ left: correctEffect.x, top: correctEffect.y }}>
              <div className="correct-text">+{correctEffect.value}</div>
              <div className="correct-burst" />
            </div>
          )}
          {wrongEffect && (
            <div key={wrongEffect.id} className="wrong-effect" style={{ left: wrongEffect.x, top: wrongEffect.y }}>
              <div className="wrong-text">✗</div>
              <div className="wrong-burst" />
            </div>
          )}

          {/* Connection line when dragging near port */}
          {draggedCell && nearFuelPort && (() => {
            const port = getFuelPortPosition();
            const cell = fuelCells.find(c => c.id === draggedCell.id);
            if (!cell) return null;
            return (
              <svg className="connection-line">
                <defs>
                  <linearGradient id="fuelLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <line
                  x1={cell.x} y1={cell.y}
                  x2={port.x} y2={port.y}
                  stroke="url(#fuelLineGrad)"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  opacity="0.7"
                />
              </svg>
            );
          })()}
        </div>

        {/* Bottom hint */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">🎯 Drag the next number in the pattern to the rocket</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== STYLES ====================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .rocket-skip {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #020817 0%, #0c1445 40%, #1a1060 70%, #0f0a2e 100%);
    position: relative;
  }

  /* ========== STAR FIELD ========== */
  .star-field {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle 3s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.4); }
  }

  /* ========== NEBULA ========== */
  .nebula {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(60px);
    z-index: 0;
  }

  .nebula-1 {
    width: 300px; height: 300px;
    top: 10%; left: -5%;
    background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%);
    animation: nebulaDrift 20s ease-in-out infinite;
  }

  .nebula-2 {
    width: 250px; height: 250px;
    top: 60%; right: -5%;
    background: radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%);
    animation: nebulaDrift 25s ease-in-out infinite reverse;
  }

  .nebula-3 {
    width: 200px; height: 200px;
    top: 30%; right: 20%;
    background: radial-gradient(circle, rgba(248,113,113,0.12) 0%, transparent 70%);
    animation: nebulaDrift 18s ease-in-out infinite;
  }

  @keyframes nebulaDrift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -15px) scale(1.1); }
    66% { transform: translate(-15px, 10px) scale(0.95); }
  }

  /* ========== INTRO SCREEN ========== */
  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 500px;
  }

  .intro-rocket {
    opacity: 0;
    transform: translateY(60px);
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    margin-bottom: 1rem;
  }

  .intro-rocket.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .intro-rocket-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: introHover 3s ease-in-out infinite;
  }

  @keyframes introHover {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .intro-flame {
    width: 30px;
    height: 40px;
    background: radial-gradient(ellipse at top, #fbbf24 0%, #f97316 40%, #ef4444 70%, transparent 100%);
    border-radius: 0 0 50% 50%;
    animation: introFlicker 0.15s ease-in-out infinite alternate;
    margin-top: -2px;
  }

  @keyframes introFlicker {
    0% { transform: scaleX(0.9) scaleY(0.95); opacity: 0.9; }
    100% { transform: scaleX(1.1) scaleY(1.05); opacity: 1; }
  }

  .game-title {
    font-size: clamp(2rem, 8vw, 3.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, #f97316, #fbbf24, #f97316);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: titleShimmer 3s ease-in-out infinite;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .game-title.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes titleShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .tagline {
    color: #94a3b8;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.1s;
  }

  .tagline.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .instructions-card {
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .instructions-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .instructions-card h3 {
    color: white;
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
    gap: 0.3rem;
    margin-bottom: 0.4rem;
  }

  .seq-num {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f97316, #fbbf24);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white;
    font-size: 1rem;
  }

  .seq-num.mystery {
    background: linear-gradient(135deg, #8b5cf6, #c084fc);
    animation: mysteryPulse 1.5s ease-in-out infinite;
  }

  @keyframes mysteryPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
    50% { transform: scale(1.1); box-shadow: 0 0 20px 5px rgba(139,92,246,0.3); }
  }

  .seq-arrow { color: #64748b; font-size: 1.2rem; }

  .mini-cell {
    width: 42px; height: 42px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6, #2563eb);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white;
    font-size: 1.1rem;
    box-shadow: 0 4px 15px rgba(59,130,246,0.4);
  }

  .drag-arrow { color: #4ade80; font-size: 1.5rem; }
  .mini-rocket-icon { font-size: 2rem; }

  .fuel-bar-mini {
    width: 60px; height: 14px;
    background: rgba(255,255,255,0.1);
    border-radius: 7px;
    border: 2px solid rgba(255,255,255,0.2);
    overflow: hidden;
    display: inline-block;
  }

  .fuel-fill-mini {
    display: block;
    width: 80%;
    height: 100%;
    background: linear-gradient(90deg, #22c55e, #4ade80);
    border-radius: 5px;
    animation: fillPulse 2s ease-in-out infinite;
  }

  @keyframes fillPulse {
    0%, 100% { width: 30%; }
    50% { width: 90%; }
  }

  .blast-text {
    color: #f97316;
    font-weight: 900;
    font-size: 0.9rem;
    animation: blastPulse 1s ease-in-out infinite;
  }

  @keyframes blastPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .instruction p { color: #cbd5e1; font-size: 0.9rem; }
  .hl-pattern { color: #fbbf24; font-weight: 700; }
  .hl-rocket { color: #f97316; font-weight: 700; }
  .hl-launch { color: #4ade80; font-weight: 700; }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(249,115,22,0.4);
    opacity: 0;
    transform: translateY(20px);
  }

  .start-btn.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s ease, box-shadow 0.3s ease, transform 0.3s ease;
  }

  .start-btn:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 15px 50px rgba(249,115,22,0.5);
  }

  .btn-icon { font-size: 1.5rem; }

  /* ========== ROCKET PARTS (shared) ========== */
  .rocket-nose {
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 45px solid #e2e8f0;
    position: relative;
  }

  .rocket-nose::after {
    content: '';
    position: absolute;
    top: 15px;
    left: -15px;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%);
    border-radius: 0 0 50% 50%;
  }

  .rocket-body-main {
    width: 50px;
    height: 80px;
    background: linear-gradient(90deg, #94a3b8 0%, #e2e8f0 30%, #f8fafc 50%, #e2e8f0 70%, #94a3b8 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .rocket-window {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #93c5fd, #3b82f6, #1e3a8a);
    border: 2px solid #cbd5e1;
    box-shadow: 0 0 10px rgba(59,130,246,0.5), inset 0 0 5px rgba(255,255,255,0.3);
    margin-bottom: 8px;
  }

  .rocket-stripe {
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #dc2626, #ef4444, #dc2626);
  }

  .rocket-fins {
    display: flex;
    justify-content: space-between;
    width: 90px;
    margin-top: -5px;
    position: relative;
  }

  .rocket-fin {
    width: 20px;
    height: 35px;
    background: linear-gradient(180deg, #ef4444, #dc2626);
  }

  .rocket-fin-left {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }

  .rocket-fin-right {
    clip-path: polygon(0 0, 100% 100%, 0 100%);
  }

  /* ========== GAME SCREEN ========== */
  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    background: rgba(0,0,0,0.5);
    z-index: 50;
    position: relative;
  }

  .header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .back-btn {
    width: 38px; height: 38px;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(255,255,255,0.2); }

  .level-badge {
    padding: 0.4rem 0.9rem;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border-radius: 20px;
    font-weight: 700;
    color: white;
    font-size: 0.9rem;
  }

  .pattern-label {
    padding: 0.4rem 0.8rem;
    background: rgba(255,255,255,0.08);
    border-radius: 15px;
    color: #94a3b8;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .combo-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(239,68,68,0.3);
    border: 1px solid rgba(239,68,68,0.5);
    border-radius: 20px;
    color: #fca5a5;
    font-weight: 800;
    font-size: 0.9rem;
    animation: comboPulse 0.5s ease-in-out infinite;
  }

  @keyframes comboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .combo-fire { font-size: 1rem; }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    background: rgba(251,191,36,0.2);
    border-radius: 20px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  /* ========== SEQUENCE BAR ========== */
  .sequence-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.6rem 1rem;
    background: rgba(0,0,0,0.3);
    position: relative;
    z-index: 20;
    flex-wrap: wrap;
  }

  .sequence-label {
    color: #64748b;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .sequence-numbers {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .seq-start {
    color: #94a3b8;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .seq-sep {
    color: #475569;
    font-size: 1rem;
  }

  .seq-val {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    border-radius: 16px;
    font-weight: 800;
    font-size: 1rem;
    color: #475569;
    background: rgba(255,255,255,0.05);
    transition: all 0.3s ease;
  }

  .seq-val.filled {
    color: #4ade80;
    background: rgba(74,222,128,0.15);
    border: 1px solid rgba(74,222,128,0.3);
  }

  .seq-val.current {
    color: #fbbf24;
    background: rgba(251,191,36,0.15);
    border: 2px solid rgba(251,191,36,0.5);
    animation: currentPulse 1.2s ease-in-out infinite;
  }

  @keyframes currentPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0.3); }
    50% { box-shadow: 0 0 15px 5px rgba(251,191,36,0.2); }
  }

  /* ========== GAME AREA ========== */
  .game-area {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
    z-index: 5;
  }

  /* ========== FUEL GAUGE ========== */
  .fuel-gauge {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    z-index: 30;
  }

  .fuel-gauge-label {
    color: #94a3b8;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .fuel-gauge-tube {
    width: 28px;
    height: 160px;
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 14px;
    position: relative;
    overflow: hidden;
  }

  .fuel-gauge-liquid {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, #22c55e 0%, #4ade80 50%, #86efac 100%);
    border-radius: 0 0 12px 12px;
    transition: height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    overflow: hidden;
  }

  .fuel-bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    animation: fuelBubbleRise 2s ease-in-out infinite;
  }

  .fuel-bubble-1 {
    width: 5px; height: 5px;
    left: 4px; bottom: 10%;
    animation-delay: 0s;
  }

  .fuel-bubble-2 {
    width: 3px; height: 3px;
    left: 12px; bottom: 30%;
    animation-delay: 0.7s;
  }

  .fuel-bubble-3 {
    width: 4px; height: 4px;
    left: 8px; bottom: 55%;
    animation-delay: 1.3s;
  }

  @keyframes fuelBubbleRise {
    0%, 100% { transform: translateY(0); opacity: 0.3; }
    50% { transform: translateY(-10px); opacity: 0.8; }
  }

  .fuel-gauge-mark {
    position: absolute;
    left: 3px;
    right: 3px;
    height: 1px;
    background: rgba(255,255,255,0.15);
  }

  .fuel-gauge-count {
    color: #4ade80;
    font-size: 0.75rem;
    font-weight: 800;
  }

  /* ========== ROCKET ASSEMBLY ========== */
  .rocket-assembly {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 15;
  }

  .rocket-assembly.shaking {
    animation: rocketShake 0.4s ease-in-out;
  }

  @keyframes rocketShake {
    0%, 100% { transform: translateX(-50%) translateX(0); }
    20% { transform: translateX(-50%) translateX(-4px) rotate(-1deg); }
    40% { transform: translateX(-50%) translateX(4px) rotate(1deg); }
    60% { transform: translateX(-50%) translateX(-3px) rotate(-0.5deg); }
    80% { transform: translateX(-50%) translateX(2px) rotate(0.5deg); }
  }

  .rocket-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(0 0 15px rgba(249,115,22,0.3));
  }

  .rocket-flame {
    width: 20px;
    height: 10px;
    border-radius: 0 0 50% 50%;
    margin-top: -5px;
    transition: all 0.3s ease;
  }

  .rocket-flame.flame-level-0 {
    width: 16px;
    height: 12px;
    background: radial-gradient(ellipse at top, #fbbf24 0%, #f97316 60%, transparent 100%);
    animation: flameFlicker 0.2s ease-in-out infinite alternate;
  }

  .rocket-flame.flame-level-1 {
    width: 22px;
    height: 25px;
    background: radial-gradient(ellipse at top, #fef3c7 0%, #fbbf24 30%, #f97316 60%, #ef4444 80%, transparent 100%);
    animation: flameFlicker 0.15s ease-in-out infinite alternate;
  }

  .rocket-flame.flame-level-2 {
    width: 28px;
    height: 40px;
    background: radial-gradient(ellipse at top, #fef3c7 0%, #fbbf24 25%, #f97316 50%, #ef4444 75%, transparent 100%);
    animation: flameFlicker 0.12s ease-in-out infinite alternate;
    box-shadow: 0 10px 20px rgba(249,115,22,0.4);
  }

  .rocket-flame.flame-level-3 {
    width: 32px;
    height: 55px;
    background: radial-gradient(ellipse at top, white 0%, #fef3c7 15%, #fbbf24 30%, #f97316 50%, #ef4444 70%, #dc2626 85%, transparent 100%);
    animation: flameFlicker 0.1s ease-in-out infinite alternate;
    box-shadow: 0 15px 30px rgba(249,115,22,0.5);
  }

  .rocket-flame.flame-level-4 {
    width: 36px;
    height: 70px;
    background: radial-gradient(ellipse at top, white 0%, #fef3c7 10%, #fbbf24 25%, #f97316 45%, #ef4444 65%, #dc2626 80%, #991b1b 90%, transparent 100%);
    animation: flameFlicker 0.08s ease-in-out infinite alternate;
    box-shadow: 0 20px 40px rgba(249,115,22,0.6), 0 10px 20px rgba(239,68,68,0.4);
  }

  .rocket-flame.flame-level-5 {
    width: 42px;
    height: 90px;
    background: radial-gradient(ellipse at top, white 0%, #fef3c7 8%, #fbbf24 20%, #f97316 40%, #ef4444 55%, #dc2626 70%, #991b1b 85%, transparent 100%);
    animation: flameFlicker 0.06s ease-in-out infinite alternate, flameSway 0.3s ease-in-out infinite alternate;
    box-shadow: 0 25px 50px rgba(249,115,22,0.7), 0 15px 30px rgba(239,68,68,0.5), 0 5px 15px rgba(220,38,38,0.3);
  }

  @keyframes flameFlicker {
    0% { transform: scaleX(0.9) scaleY(0.95); }
    100% { transform: scaleX(1.1) scaleY(1.05); }
  }

  @keyframes flameSway {
    0% { transform: scaleX(0.85) skewX(-2deg); }
    100% { transform: scaleX(1.15) skewX(2deg); }
  }

  /* ========== FUEL PORT ========== */
  .fuel-port {
    position: relative;
    width: 60px;
    height: 24px;
    margin-top: -30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }

  .fuel-port-ring {
    width: 50px;
    height: 18px;
    border: 2px solid rgba(74,222,128,0.3);
    border-radius: 25px;
    transition: all 0.3s ease;
  }

  .fuel-port-glow {
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, transparent 30%, transparent 100%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .fuel-port.active .fuel-port-ring {
    border-color: #4ade80;
    box-shadow: 0 0 20px rgba(74,222,128,0.5);
    animation: portPulse 0.8s ease-in-out infinite;
  }

  .fuel-port.active .fuel-port-glow {
    opacity: 1;
    background: radial-gradient(circle, rgba(74,222,128,0.3) 0%, transparent 70%);
  }

  @keyframes portPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(74,222,128,0.4); }
    50% { transform: scale(1.1); box-shadow: 0 0 30px rgba(74,222,128,0.7); }
  }

  /* ========== LAUNCH PAD ========== */
  .launch-pad {
    width: 120px;
    height: 12px;
    background: linear-gradient(90deg, #475569, #64748b, #475569);
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    margin-top: -5px;
  }

  /* ========== FUEL CELLS ========== */
  .fuel-cell {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
      hsl(var(--cell-hue), 80%, 70%) 0%,
      hsl(var(--cell-hue), 70%, 50%) 50%,
      hsl(var(--cell-hue), 60%, 35%) 100%);
    box-shadow:
      0 8px 25px hsla(var(--cell-hue), 70%, 50%, 0.4),
      inset 0 -8px 15px hsla(var(--cell-hue), 80%, 25%, 0.3);
    cursor: grab;
    transition: box-shadow 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .fuel-cell:hover {
    z-index: 20;
    box-shadow:
      0 12px 35px hsla(var(--cell-hue), 70%, 50%, 0.6),
      inset 0 -8px 15px hsla(var(--cell-hue), 80%, 25%, 0.3);
  }

  .fuel-cell.dragging {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2);
    z-index: 100;
    box-shadow:
      0 15px 40px hsla(var(--cell-hue), 70%, 50%, 0.7),
      0 0 25px hsla(var(--cell-hue), 90%, 60%, 0.4),
      inset 0 -8px 15px hsla(var(--cell-hue), 80%, 25%, 0.3);
  }

  .cell-shine {
    position: absolute;
    top: 12%;
    left: 18%;
    width: 35%;
    height: 25%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%);
    border-radius: 50%;
  }

  .cell-value {
    font-size: 1.4rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    z-index: 2;
  }

  .cell-glow {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.15);
    animation: cellGlow 3s ease-in-out infinite;
  }

  @keyframes cellGlow {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.05); opacity: 1; }
  }

  /* ========== PARTICLES ========== */
  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 25;
    transform: translate(-50%, -50%);
  }

  .particle-spark {
    box-shadow: 0 0 6px currentColor;
  }

  .particle-smoke {
    border-radius: 50%;
    filter: blur(3px);
  }

  .particle-exhaust {
    box-shadow: 0 0 8px currentColor;
    filter: blur(1px);
  }

  /* ========== EFFECTS ========== */
  .correct-effect {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 200;
    animation: correctPop 0.8s ease forwards;
  }

  @keyframes correctPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(1); opacity: 0; }
  }

  .correct-text {
    font-size: 1.5rem;
    font-weight: 900;
    color: #4ade80;
    text-shadow: 0 0 15px rgba(74,222,128,0.8);
    white-space: nowrap;
  }

  .correct-burst {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 3px solid #4ade80;
    border-radius: 50%;
    animation: burstOut 0.6s ease forwards;
  }

  @keyframes burstOut {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
  }

  .wrong-effect {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 200;
    animation: wrongShake 0.6s ease forwards;
  }

  @keyframes wrongShake {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    10% { transform: translate(-45%, -50%) scale(1.2); }
    20% { transform: translate(-55%, -50%) scale(1.2); }
    30% { transform: translate(-48%, -50%) scale(1.1); }
    40% { transform: translate(-52%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
  }

  .wrong-text {
    font-size: 2.5rem;
    font-weight: 900;
    color: #ef4444;
    text-shadow: 0 0 15px rgba(239,68,68,0.8);
  }

  .wrong-burst {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border: 3px solid #ef4444;
    border-radius: 50%;
    animation: burstOut 0.5s ease forwards;
  }

  .connection-line {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 5;
    width: 100%;
    height: 100%;
  }

  /* ========== BOTTOM BAR ========== */
  .bottom-bar {
    padding: 0.6rem;
    background: rgba(0,0,0,0.5);
    text-align: center;
    position: relative;
    z-index: 20;
  }

  .hint-text {
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
  }

  .hint-drag { color: #94a3b8; }

  /* ========== LAUNCH SCREEN ========== */
  .launch-screen {
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .star-field-launch .star-launch {
    animation: twinkle 3s ease-in-out infinite;
  }

  .launch-screen.phase-3 .star-field-launch .star-launch,
  .launch-screen.phase-4 .star-field-launch .star-launch {
    animation: starStreak 0.5s linear infinite;
  }

  @keyframes starStreak {
    0% { transform: translateY(0) scaleY(1); }
    100% { transform: translateY(50px) scaleY(3); opacity: 0; }
  }

  .launch-clouds {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    pointer-events: none;
    z-index: 5;
  }

  .cloud {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    filter: blur(20px);
  }

  .cloud-1 {
    width: 200px; height: 80px;
    bottom: 10%; left: 10%;
    animation: cloudDrift 8s ease-in-out infinite;
  }

  .cloud-2 {
    width: 250px; height: 100px;
    bottom: 20%; right: 5%;
    animation: cloudDrift 10s ease-in-out infinite reverse;
  }

  .cloud-3 {
    width: 180px; height: 60px;
    bottom: 5%; left: 40%;
    animation: cloudDrift 6s ease-in-out infinite;
  }

  .launch-screen.phase-2 .cloud,
  .launch-screen.phase-3 .cloud,
  .launch-screen.phase-4 .cloud {
    animation: cloudRush 1.5s ease-in forwards;
  }

  @keyframes cloudDrift {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(20px); }
  }

  @keyframes cloudRush {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(200px) scale(1.5); opacity: 0; }
  }

  .launch-rocket-wrapper {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    transition: all 0.8s ease;
  }

  .launch-screen.phase-0 .launch-rocket-wrapper {
    bottom: 10%;
  }

  .launch-screen.phase-1 .launch-rocket-wrapper {
    bottom: 10%;
    animation: prelaunchShake 0.3s ease-in-out infinite;
  }

  .launch-screen.phase-2 .launch-rocket-wrapper {
    bottom: 15%;
    animation: prelaunchShake 0.2s ease-in-out infinite;
  }

  .launch-screen.phase-3 .launch-rocket-wrapper {
    bottom: 40%;
    transition: bottom 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .launch-screen.phase-4 .launch-rocket-wrapper {
    bottom: 120%;
    transition: bottom 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes prelaunchShake {
    0%, 100% { transform: translateX(-50%) translateX(0); }
    25% { transform: translateX(-50%) translateX(-3px); }
    75% { transform: translateX(-50%) translateX(3px); }
  }

  .launch-rocket {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(1.5);
  }

  .launch-mega-flame {
    width: 50px;
    height: 120px;
    background: radial-gradient(ellipse at top, white 0%, #fef3c7 10%, #fbbf24 25%, #f97316 45%, #ef4444 60%, #dc2626 75%, transparent 100%);
    border-radius: 0 0 50% 50%;
    margin-top: -5px;
    animation: megaFlame 0.08s ease-in-out infinite alternate;
    box-shadow: 0 30px 60px rgba(249,115,22,0.8), 0 15px 30px rgba(239,68,68,0.6);
  }

  .launch-screen.phase-3 .launch-mega-flame,
  .launch-screen.phase-4 .launch-mega-flame {
    height: 180px;
    width: 60px;
    box-shadow: 0 50px 80px rgba(249,115,22,0.9), 0 25px 40px rgba(239,68,68,0.7), 0 10px 20px rgba(220,38,38,0.5);
  }

  @keyframes megaFlame {
    0% { transform: scaleX(0.85) scaleY(0.9); }
    100% { transform: scaleX(1.15) scaleY(1.1); }
  }

  .launch-smoke-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 8;
  }

  .smoke-particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(180,180,180,0.4);
    filter: blur(4px);
    transform: translate(-50%, -50%);
  }

  .launch-screen.phase-1,
  .launch-screen.phase-2 {
    animation: cameraShake 0.15s ease-in-out infinite;
  }

  .launch-screen.phase-3 {
    animation: cameraShake 0.1s ease-in-out infinite;
  }

  @keyframes cameraShake {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(-2px, 1px); }
    50% { transform: translate(2px, -1px); }
    75% { transform: translate(-1px, 2px); }
  }

  .launch-text {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .countdown-num {
    font-size: 3rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 0 30px rgba(255,255,255,0.5);
    animation: countIn 0.5s ease forwards;
  }

  @keyframes countIn {
    0% { transform: scale(2); opacity: 0; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 0.6; }
  }

  .blastoff-text {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f97316, #ef4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: blastoffAnim 1s ease forwards;
    text-shadow: none;
  }

  @keyframes blastoffAnim {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  /* ========== COMPLETE SCREEN ========== */
  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .complete-planets {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .planet {
    position: absolute;
    border-radius: 50%;
  }

  .planet-1 {
    width: 80px; height: 80px;
    top: 15%; left: 10%;
    background: radial-gradient(circle at 35% 35%, #fbbf24, #f97316, #92400e);
    box-shadow: 0 0 25px rgba(249,115,22,0.3);
    animation: planetFloat 15s ease-in-out infinite;
  }

  .planet-2 {
    width: 50px; height: 50px;
    top: 25%; right: 15%;
    background: radial-gradient(circle at 35% 35%, #93c5fd, #3b82f6, #1e3a8a);
    box-shadow: 0 0 20px rgba(59,130,246,0.3);
    animation: planetFloat 20s ease-in-out infinite reverse;
  }

  .planet-3 {
    width: 120px; height: 120px;
    bottom: 20%; right: 5%;
    background: radial-gradient(circle at 35% 35%, #d8b4fe, #a855f7, #581c87);
    box-shadow: 0 0 30px rgba(168,85,247,0.3);
    animation: planetFloat 25s ease-in-out infinite;
  }

  .planet-3::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -15%;
    width: 130%;
    height: 20px;
    border: 2px solid rgba(216,180,254,0.3);
    border-radius: 50%;
    transform: rotate(-15deg);
  }

  @keyframes planetFloat {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(10px, -8px); }
    66% { transform: translate(-8px, 5px); }
  }

  .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 450px;
  }

  .complete-rocket-fly {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='80' font-size='80'%3E🚀%3C/text%3E%3C/svg%3E") center/contain no-repeat;
    animation: rocketOrbit 4s linear infinite;
  }

  @keyframes rocketOrbit {
    0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: white;
    margin-bottom: 0.5rem;
    animation: completeIn 0.6s ease forwards;
  }

  @keyframes completeIn {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .complete-pattern {
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .score-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .score-item.total {
    grid-column: span 2;
    padding-top: 0.8rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  .score-label {
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .score-value {
    font-size: 1.5rem;
    font-weight: 900;
    color: white;
  }

  .score-value.bonus { color: #4ade80; }
  .score-value.combo-val { color: #f97316; }
  .score-value.total-val { font-size: 2rem; color: #fbbf24; }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(249,115,22,0.4);
  }

  .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(249,115,22,0.5);
  }

  .menu-btn {
    padding: 0.7rem 1.8rem;
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

  .menu-btn:hover {
    border-color: rgba(255,255,255,0.4);
    color: white;
  }

  /* ========== RESPONSIVE ========== */
  @media (max-width: 600px) {
    .sequence-bar {
      padding: 0.4rem 0.6rem;
      gap: 0.3rem;
    }

    .seq-val {
      min-width: 26px;
      height: 26px;
      font-size: 0.85rem;
    }

    .fuel-gauge {
      left: 6px;
    }

    .fuel-gauge-tube {
      width: 22px;
      height: 120px;
    }

    .pattern-label { display: none; }

    .hint-text { font-size: 0.7rem; }

    .rocket-assembly {
      transform: translateX(-50%) scale(0.85);
    }

    .score-card {
      gap: 0.5rem;
      padding: 0.8rem;
    }

    .score-value { font-size: 1.2rem; }
    .score-value.total-val { font-size: 1.5rem; }
  }
`;
