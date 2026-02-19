"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Physics constants
const GRAVITY = 0.35;
const THROW_MULTIPLIER = 1.8;
const BEAM_SPRING = 0.08;
const BEAM_DAMPING = 0.92;
const PETAL_COUNT = 12;
const SPARK_COUNT = 16;
const TARGET_Y_RATIO = 0.22;
const BEAM_Y_RATIO = 0.52;
const RACK_Y_RATIO = 0.85;

interface Equation {
  display: string;
  answer: number;
  leftBlocks: number;
  rightBlocks: number;
  operation: '+' | '-';
  fullEquation: string;
}

interface Shuriken {
  id: number;
  value: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  state: 'rack' | 'dragging' | 'flying' | 'hit' | 'miss' | 'shatter';
  rackIndex: number;
  trail: { x: number; y: number; age: number }[];
  hasFireTrail: boolean;
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
  color: string;
  type: 'spark' | 'celebration' | 'shatter' | 'petal';
  rotation: number;
  rotationSpeed: number;
}

interface DragState {
  shurikenId: number;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  velocityHistory: { x: number; y: number; t: number }[];
}

interface BeamState {
  angle: number;
  angularVelocity: number;
  targetAngle: number;
  leftWeight: number;
  rightWeight: number;
}

interface ContainerSize {
  width: number;
  height: number;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameOver';
type NinjaRank = 'Apprentice' | 'Genin' | 'Chunin' | 'Jonin' | 'Master' | 'Grandmaster';

const NINJA_RANKS: { rank: NinjaRank; minScore: number; emoji: string }[] = [
  { rank: 'Apprentice', minScore: 0, emoji: '🥋' },
  { rank: 'Genin', minScore: 200, emoji: '🗡️' },
  { rank: 'Chunin', minScore: 500, emoji: '⚔️' },
  { rank: 'Jonin', minScore: 1000, emoji: '🏯' },
  { rank: 'Master', minScore: 2000, emoji: '🐉' },
  { rank: 'Grandmaster', minScore: 4000, emoji: '👑' },
];

let idCounter = 0;
const nextId = (): number => ++idCounter;

function generateEquation(level: number): Equation {
  let a: number, b: number, answer: number, op: '+' | '-', display: string, full: string;
  let leftBlocks: number, rightBlocks: number;

  const rand = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));
  const variation = Math.random();

  if (level <= 2) {
    // Addition to 10
    const total = rand(3, 10);
    a = rand(1, total - 1);
    b = total - a;
    answer = b;
    op = '+';
    display = `${a} + ? = ${total}`;
    full = `${a} + ${b} = ${total}`;
    leftBlocks = a;
    rightBlocks = total;
  } else if (level <= 4) {
    // Addition to 15
    const total = rand(6, 15);
    a = rand(1, total - 1);
    b = total - a;
    answer = b;
    op = '+';
    display = `${a} + ? = ${total}`;
    full = `${a} + ${b} = ${total}`;
    leftBlocks = a;
    rightBlocks = total;
  } else if (level <= 6) {
    // Subtraction from 10-15
    if (variation < 0.5) {
      a = rand(6, 15);
      b = rand(1, a - 1);
      answer = a - b;
      op = '-';
      display = `${a} - ? = ${answer}`;
      full = `${a} - ${b} = ${answer}`;
      leftBlocks = answer;
      rightBlocks = a;
    } else {
      const total = rand(6, 15);
      a = rand(1, total - 1);
      b = total - a;
      answer = b;
      op = '+';
      display = `${a} + ? = ${total}`;
      full = `${a} + ${b} = ${total}`;
      leftBlocks = a;
      rightBlocks = total;
    }
  } else {
    // Mixed to 20, missing numbers
    if (variation < 0.3) {
      // Missing first number: ? + b = total
      const total = rand(8, 20);
      b = rand(1, total - 1);
      a = total - b;
      answer = a;
      op = '+';
      display = `? + ${b} = ${total}`;
      full = `${a} + ${b} = ${total}`;
      leftBlocks = b;
      rightBlocks = total;
    } else if (variation < 0.6) {
      // Subtraction from up to 20
      a = rand(8, 20);
      b = rand(1, a - 1);
      answer = a - b;
      op = '-';
      display = `${a} - ? = ${answer}`;
      full = `${a} - ${b} = ${answer}`;
      leftBlocks = answer;
      rightBlocks = a;
    } else {
      // Addition to 20
      const total = rand(8, 20);
      a = rand(1, total - 1);
      b = total - a;
      answer = b;
      op = '+';
      display = `${a} + ? = ${total}`;
      full = `${a} + ${b} = ${total}`;
      leftBlocks = a;
      rightBlocks = total;
    }
  }

  return { display, answer, leftBlocks, rightBlocks, operation: op, fullEquation: full };
}

function generateRackNumbers(answer: number, count: number): number[] {
  const numbers = new Set<number>();
  numbers.add(answer);

  // Add close distractors
  if (answer > 1) numbers.add(answer - 1);
  if (answer < 20) numbers.add(answer + 1);
  if (answer > 2) numbers.add(answer - 2);
  if (answer < 19) numbers.add(answer + 2);

  // Fill remaining with random 1-20
  while (numbers.size < count) {
    numbers.add(1 + Math.floor(Math.random() * 20));
  }

  // Shuffle
  const arr = Array.from(numbers).slice(0, count);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

interface NumberNinjaProps {
  onExit?: () => void;
}

export default function NumberNinja({ onExit }: NumberNinjaProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [combo, setCombo] = useState<number>(0);
  const [equationIndex, setEquationIndex] = useState<number>(0);
  const [equation, setEquation] = useState<Equation | null>(null);
  const [shuriken, setShuriken] = useState<Shuriken[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [beam, setBeam] = useState<BeamState>({ angle: 0, angularVelocity: 0, targetAngle: -15, leftWeight: 0, rightWeight: 0 });
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [showEquation, setShowEquation] = useState<string | null>(null);
  const [ninjaReaction, setNinjaReaction] = useState<string>('🧘');
  const [petals, setPetals] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number; drift: number }[]>([]);
  const [correctHit, setCorrectHit] = useState<boolean>(false);
  const [wrongHit, setWrongHit] = useState<boolean>(false);
  const [levelScore, setLevelScore] = useState<number>(0);
  const [levelAccuracy, setLevelAccuracy] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const beamRef = useRef<BeamState>(beam);
  const shurikenRef = useRef<Shuriken[]>(shuriken);
  const particlesRef = useRef<Particle[]>(particles);
  const equationRef = useRef<Equation | null>(equation);
  const comboRef = useRef<number>(combo);
  const scoreRef = useRef<number>(score);
  const livesRef = useRef<number>(lives);

  useEffect(() => { beamRef.current = beam; }, [beam]);
  useEffect(() => { shurikenRef.current = shuriken; }, [shuriken]);
  useEffect(() => { particlesRef.current = particles; }, [particles]);
  useEffect(() => { equationRef.current = equation; }, [equation]);
  useEffect(() => { comboRef.current = combo; }, [combo]);
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { livesRef.current = lives; }, [lives]);

  const getContainerSize = useCallback((): ContainerSize => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 800, height: 600 };
  }, []);

  const getNinjaRank = useCallback((): { rank: NinjaRank; emoji: string } => {
    let current = NINJA_RANKS[0];
    for (const r of NINJA_RANKS) {
      if (score >= r.minScore) current = r;
    }
    return { rank: current.rank, emoji: current.emoji };
  }, [score]);

  const spawnParticles = useCallback((x: number, y: number, type: 'spark' | 'celebration' | 'shatter', count: number) => {
    const newParticles: Particle[] = [];
    const colors = type === 'spark'
      ? ['#FFD700', '#FFA500', '#FF6B35', '#FFFFFF', '#FFEC8B']
      : type === 'celebration'
        ? ['#FF6B9D', '#C084FC', '#38BDF8', '#4ADE80', '#FBBF24', '#FF6B35']
        : ['#8B8B8B', '#A0A0A0', '#6B6B6B', '#9CA3AF'];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = type === 'spark' ? 3 + Math.random() * 6 : type === 'celebration' ? 2 + Math.random() * 5 : 1 + Math.random() * 4;
      newParticles.push({
        id: nextId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'celebration' ? 3 : 0),
        life: 1,
        maxLife: 0.6 + Math.random() * 0.6,
        size: type === 'spark' ? 3 + Math.random() * 5 : type === 'celebration' ? 4 + Math.random() * 6 : 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const initPetals = useCallback(() => {
    const size = getContainerSize();
    const newPetals = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      newPetals.push({
        id: nextId(),
        x: Math.random() * size.width,
        y: -20 - Math.random() * size.height,
        size: 8 + Math.random() * 12,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 8,
        drift: (Math.random() - 0.5) * 100,
      });
    }
    setPetals(newPetals);
  }, [getContainerSize]);

  const setupEquation = useCallback((lvl: number, eqIdx: number) => {
    const eq = generateEquation(lvl);
    setEquation(eq);
    setShowEquation(null);
    setCorrectHit(false);
    setWrongHit(false);

    const size = getContainerSize();
    const rackNumbers = generateRackNumbers(eq.answer, Math.min(6 + Math.floor(lvl / 2), 10));
    const rackWidth = size.width - 60;
    const spacing = rackWidth / (rackNumbers.length + 1);

    const newShuriken: Shuriken[] = rackNumbers.map((val, i) => ({
      id: nextId(),
      value: val,
      x: 30 + spacing * (i + 1),
      y: size.height * RACK_Y_RATIO,
      vx: 0,
      vy: 0,
      rotation: 0,
      rotationSpeed: 0,
      state: 'rack' as const,
      rackIndex: i,
      trail: [],
      hasFireTrail: false,
    }));

    setShuriken(newShuriken);

    // Set beam tilt based on equation imbalance
    const diff = eq.rightBlocks - eq.leftBlocks;
    const tiltAngle = Math.max(-25, Math.min(25, -diff * 3));
    setBeam(prev => ({
      ...prev,
      targetAngle: tiltAngle,
      leftWeight: eq.leftBlocks,
      rightWeight: eq.rightBlocks,
    }));
  }, [getContainerSize]);

  const startGame = useCallback(() => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setLives(3);
    setCombo(0);
    setEquationIndex(0);
    setLevelScore(0);
    setLevelAccuracy({ correct: 0, total: 0 });
    initPetals();
    setupEquation(1, 0);
  }, [initPetals, setupEquation]);

  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setEquationIndex(0);
    setLevelScore(0);
    setLevelAccuracy({ correct: 0, total: 0 });
    setGameState('playing');
    setupEquation(newLevel, 0);
  }, [level, setupEquation]);

  const advanceEquation = useCallback(() => {
    const nextEqIdx = equationIndex + 1;
    if (nextEqIdx >= 5) {
      // Level complete
      setTimeout(() => setGameState('levelComplete'), 1200);
    } else {
      setEquationIndex(nextEqIdx);
      setTimeout(() => setupEquation(level, nextEqIdx), 1500);
    }
  }, [equationIndex, level, setupEquation]);

  const handleCorrectAnswer = useCallback((shurikenObj: Shuriken) => {
    const eq = equationRef.current;
    if (!eq) return;

    const size = getContainerSize();
    const targetX = size.width * 0.5;
    const targetY = size.height * TARGET_Y_RATIO;

    // Spark impact
    spawnParticles(targetX, targetY, 'spark', SPARK_COUNT);

    // Celebration particles
    setTimeout(() => {
      spawnParticles(targetX, targetY - 30, 'celebration', 20);
    }, 300);

    setCorrectHit(true);
    setShowEquation(eq.fullEquation);
    setNinjaReaction('🥷');
    setTimeout(() => setNinjaReaction('🧘'), 2000);

    // Update beam to level (balanced)
    setBeam(prev => ({
      ...prev,
      targetAngle: 0,
      angularVelocity: prev.angle > 0 ? -3 : 3,
      leftWeight: eq.rightBlocks,
      rightWeight: eq.rightBlocks,
    }));

    // Scoring
    const newCombo = comboRef.current + 1;
    setCombo(newCombo);
    const multiplier = Math.min(newCombo, 5);
    const points = 50 * multiplier;
    setScore(s => s + points);
    setLevelScore(s => s + points);
    setLevelAccuracy(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));

    // Mark shuriken as hit
    setShuriken(prev => prev.map(s =>
      s.id === shurikenObj.id ? { ...s, state: 'hit' as const, vx: 0, vy: 0 } : s
    ));

    advanceEquation();
  }, [getContainerSize, spawnParticles, advanceEquation]);

  const handleWrongAnswer = useCallback((shurikenObj: Shuriken) => {
    setWrongHit(true);
    setTimeout(() => setWrongHit(false), 800);
    setNinjaReaction('😤');
    setTimeout(() => setNinjaReaction('🧘'), 1500);

    spawnParticles(shurikenObj.x, shurikenObj.y, 'shatter', 10);

    setCombo(0);
    setLives(prev => {
      const next = prev - 1;
      if (next <= 0) {
        setTimeout(() => setGameState('gameOver'), 800);
      }
      return next;
    });
    setLevelAccuracy(prev => ({ ...prev, total: prev.total + 1 }));

    // Shatter animation
    setShuriken(prev => prev.map(s =>
      s.id === shurikenObj.id ? { ...s, state: 'shatter' as const } : s
    ));

    // Remove shattered shuriken after animation
    setTimeout(() => {
      setShuriken(prev => prev.filter(s => s.id !== shurikenObj.id));
    }, 600);
  }, [spawnParticles]);

  // Main physics loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;

      const size = getContainerSize();
      const targetY = size.height * TARGET_Y_RATIO;
      const targetX = size.width * 0.5;

      // Update beam spring physics
      setBeam(prev => {
        const springForce = (prev.targetAngle - prev.angle) * BEAM_SPRING;
        let newVelocity = (prev.angularVelocity + springForce) * BEAM_DAMPING;
        let newAngle = prev.angle + newVelocity * dt;

        // Clamp
        if (Math.abs(newAngle) > 30) {
          newAngle = Math.sign(newAngle) * 30;
          newVelocity *= -0.3;
        }

        return { ...prev, angle: newAngle, angularVelocity: newVelocity };
      });

      // Update flying shuriken
      setShuriken(prev => {
        let changed = false;
        const updated = prev.map(s => {
          if (s.state !== 'flying') return s;
          changed = true;

          let { x, y, vx, vy, rotation, rotationSpeed, trail } = s;
          vx *= 0.998;
          vy += GRAVITY * dt;
          x += vx * dt;
          y += vy * dt;
          rotation += rotationSpeed * dt;

          // Update trail
          const newTrail = [{ x, y, age: 0 }, ...trail.map(t => ({ ...t, age: t.age + 1 }))].filter(t => t.age < 12);

          // Check if it hit the target zone
          const dx = x - targetX;
          const dy = y - targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            const eq = equationRef.current;
            if (eq && s.value === eq.answer) {
              handleCorrectAnswer({ ...s, x, y, vx, vy, rotation, rotationSpeed, trail: newTrail });
              return { ...s, x, y, vx: 0, vy: 0, rotation, rotationSpeed: 0, state: 'hit' as const, trail: newTrail };
            } else {
              handleWrongAnswer({ ...s, x, y, vx, vy, rotation, rotationSpeed, trail: newTrail });
              return { ...s, x, y, vx, vy, rotation, rotationSpeed, state: 'shatter' as const, trail: newTrail };
            }
          }

          // Off screen
          if (y > size.height + 50 || x < -100 || x > size.width + 100 || y < -200) {
            handleWrongAnswer({ ...s, x, y, vx, vy, rotation, rotationSpeed, trail: newTrail });
            return { ...s, state: 'miss' as const, trail: newTrail };
          }

          return { ...s, x, y, vx, vy, rotation, rotationSpeed, trail: newTrail };
        });

        return changed ? updated : prev;
      });

      // Update particles
      setParticles(prev => {
        if (prev.length === 0) return prev;
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx * dt,
            y: p.y + p.vy * dt + (p.type === 'celebration' ? 0.1 * dt : 0),
            vy: p.vy + 0.15 * dt,
            life: p.life - (dt * 0.03) / p.maxLife,
            rotation: p.rotation + p.rotationSpeed * dt,
          }))
          .filter(p => p.life > 0);
        return updated;
      });

      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameState, getContainerSize, handleCorrectAnswer, handleWrongAnswer]);

  // Drag handlers
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent, s: Shuriken) => {
    if (s.state !== 'rack') return;
    e.preventDefault();
    e.stopPropagation();

    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setDragState({
      shurikenId: s.id,
      startX: x,
      startY: y,
      currentX: x,
      currentY: y,
      velocityHistory: [{ x, y, t: Date.now() }],
    });

    setShuriken(prev => prev.map(sh =>
      sh.id === s.id ? { ...sh, state: 'dragging' as const, x, y } : sh
    ));
  }, []);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragState || !containerRef.current) return;
    e.preventDefault();

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));

    const now = Date.now();
    const history = [...dragState.velocityHistory, { x, y, t: now }].slice(-8);

    setDragState(prev => prev ? { ...prev, currentX: x, currentY: y, velocityHistory: history } : null);
    setShuriken(prev => prev.map(s =>
      s.id === dragState.shurikenId ? { ...s, x, y } : s
    ));
  }, [dragState]);

  const handleDragEnd = useCallback(() => {
    if (!dragState) return;

    const history = dragState.velocityHistory;
    let vx = 0, vy = 0;

    if (history.length >= 2) {
      const recent = history.slice(-4);
      const first = recent[0];
      const last = recent[recent.length - 1];
      const dt = Math.max(1, last.t - first.t);
      vx = ((last.x - first.x) / dt) * 16 * THROW_MULTIPLIER;
      vy = ((last.y - first.y) / dt) * 16 * THROW_MULTIPLIER;
    }

    const speed = Math.sqrt(vx * vx + vy * vy);
    const size = getContainerSize();
    const rackY = size.height * RACK_Y_RATIO;

    if (speed < 2 || vy > -1) {
      // Not a throw - return to rack
      setShuriken(prev => prev.map(s => {
        if (s.id !== dragState.shurikenId) return s;
        const rackWidth = size.width - 60;
        const count = prev.filter(sh => sh.state === 'rack' || sh.id === s.id).length;
        const spacing = rackWidth / (count + 1);
        return { ...s, state: 'rack' as const, x: 30 + spacing * (s.rackIndex + 1), y: rackY, vx: 0, vy: 0 };
      }));
    } else {
      // Throw!
      const hasFireTrail = comboRef.current >= 2;
      setShuriken(prev => prev.map(s =>
        s.id === dragState.shurikenId
          ? { ...s, state: 'flying' as const, vx, vy, rotationSpeed: speed * 0.5, hasFireTrail, trail: [] }
          : s
      ));
    }

    setDragState(null);
  }, [dragState, getContainerSize]);

  // Window event listeners for drag
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

  // Trajectory preview
  const getTrajectoryPoints = useCallback((): { x: number; y: number }[] => {
    if (!dragState) return [];
    const history = dragState.velocityHistory;
    if (history.length < 2) return [];

    const recent = history.slice(-4);
    const first = recent[0];
    const last = recent[recent.length - 1];
    const dt = Math.max(1, last.t - first.t);
    const vx = ((last.x - first.x) / dt) * 16 * THROW_MULTIPLIER;
    const vy = ((last.y - first.y) / dt) * 16 * THROW_MULTIPLIER;

    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed < 2 || vy > -1) return [];

    const points: { x: number; y: number }[] = [];
    let px = dragState.currentX;
    let py = dragState.currentY;
    let pvx = vx;
    let pvy = vy;

    for (let i = 0; i < 25; i++) {
      pvy += GRAVITY;
      px += pvx;
      py += pvy;
      if (i % 2 === 0) points.push({ x: px, y: py });
      if (py < -50) break;
    }
    return points;
  }, [dragState]);

  const rankInfo = getNinjaRank();
  const size = getContainerSize();
  const beamCenterX = size.width / 2;
  const beamCenterY = size.height * BEAM_Y_RATIO;
  const beamWidth = Math.min(size.width * 0.7, 400);
  const trajectoryPoints = dragState ? getTrajectoryPoints() : [];

  // --- INTRO SCREEN ---
  if (gameState === 'intro') {
    return (
      <div className="number-ninja">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="dojo-bg">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-petal" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }} />
            ))}
            <div className="pagoda-silhouette" />
            <div className="bamboo-left" />
            <div className="bamboo-right" />
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-star">🌟</span>
              <h1>Number Ninja</h1>
              <span className="logo-star flip">🌟</span>
            </div>
            <p className="tagline">Master the Art of Numbers!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-beam">⚖️</span>
                  <span className="eq-text">7 + ? = 12</span>
                </div>
                <p>Solve the <span className="highlight eq-hl">equation</span> on the balance beam!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-shuriken">✦</span>
                  <span className="throw-arrow">↗</span>
                  <span className="mini-target">🎯</span>
                </div>
                <p><strong>DRAG & THROW</strong> the correct number <span className="highlight throw-hl">shuriken</span>!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="combo-icon">🔥</span>
                  <span className="combo-text">x3 COMBO</span>
                </div>
                <p>Chain correct answers for <span className="highlight combo-hl">power combos</span>!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">⚔️</span>
              Enter the Dojo
              <span className="btn-icon">⚔️</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- GAME OVER SCREEN ---
  if (gameState === 'gameOver') {
    return (
      <div className="number-ninja">
        <style>{styles}</style>
        <div className="gameover-screen">
          <div className="dojo-bg">
            <div className="pagoda-silhouette" />
          </div>
          <div className="gameover-content">
            <div className="gameover-ninja">😵</div>
            <h1 className="gameover-title">Training Over!</h1>
            <div className="final-stats">
              <div className="stat-scroll">
                <span className="stat-label">Final Score</span>
                <span className="stat-value">{score}</span>
              </div>
              <div className="stat-scroll">
                <span className="stat-label">Ninja Rank</span>
                <span className="stat-value">{rankInfo.emoji} {rankInfo.rank}</span>
              </div>
              <div className="stat-scroll">
                <span className="stat-label">Level Reached</span>
                <span className="stat-value">{level}</span>
              </div>
            </div>
            <div className="gameover-buttons">
              <button className="start-btn" onClick={startGame}>
                <span className="btn-icon">🔄</span>
                Try Again
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- LEVEL COMPLETE SCREEN ---
  if (gameState === 'levelComplete') {
    const accuracy = levelAccuracy.total > 0 ? Math.round((levelAccuracy.correct / levelAccuracy.total) * 100) : 0;
    const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
    return (
      <div className="number-ninja">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="dojo-bg">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-petal" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }} />
            ))}
            <div className="pagoda-silhouette" />
          </div>
          <div className="complete-content">
            <div className="level-complete-ninja">🥷</div>
            <h1 className="complete-title">Level {level} Complete!</h1>
            <div className="stars-row">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`star ${i < stars ? 'earned' : 'empty'}`} style={{ animationDelay: `${i * 0.2}s` }}>
                  {i < stars ? '⭐' : '☆'}
                </span>
              ))}
            </div>
            <div className="complete-stats">
              <div className="stat-scroll">
                <span className="stat-label">Level Score</span>
                <span className="stat-value">{levelScore}</span>
              </div>
              <div className="stat-scroll">
                <span className="stat-label">Accuracy</span>
                <span className="stat-value">{accuracy}%</span>
              </div>
              <div className="stat-scroll">
                <span className="stat-label">Rank</span>
                <span className="stat-value">{rankInfo.emoji} {rankInfo.rank}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="start-btn" onClick={nextLevel}>
                Level {level + 1} →
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- PLAYING SCREEN ---
  return (
    <div className="number-ninja">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Dojo Background */}
        <div className="dojo-bg-play">
          <div className="pagoda-silhouette-play" />
          <div className="bamboo-left-play" />
          <div className="bamboo-right-play" />
          <div className="moon" />
          {petals.map(p => (
            <div key={p.id} className="falling-petal" style={{
              left: p.x,
              '--drift': `${p.drift}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              width: p.size,
              height: p.size,
            } as React.CSSProperties} />
          ))}
        </div>

        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="lives-display">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`heart ${i < lives ? 'alive' : 'dead'}`}>
                  {i < lives ? '❤️' : '🖤'}
                </span>
              ))}
            </div>
          </div>
          <div className="header-right">
            <div className="score-scroll">
              <span className="score-icon">⭐</span>
              <span className="score-num">{score}</span>
            </div>
            {combo >= 2 && (
              <div className="combo-badge">
                <span className="combo-fire">🔥</span>
                <span className="combo-count">x{combo}</span>
              </div>
            )}
          </div>
        </div>

        {/* Rank display */}
        <div className="rank-display">
          <span className="rank-emoji">{rankInfo.emoji}</span>
          <span className="rank-text">{rankInfo.rank}</span>
        </div>

        {/* Equation display */}
        {equation && (
          <div className={`equation-display ${correctHit ? 'correct' : ''} ${wrongHit ? 'wrong' : ''}`}>
            <div className="equation-scroll">
              <span className="equation-text">{showEquation || equation.display}</span>
            </div>
          </div>
        )}

        {/* Ninja character */}
        <div className="ninja-character" style={{
          left: size.width * 0.08,
          top: size.height * BEAM_Y_RATIO - 80,
        }}>
          <span className="ninja-emoji">{ninjaReaction}</span>
        </div>

        {/* Target area */}
        <div className="target-zone" style={{
          left: beamCenterX - 45,
          top: size.height * TARGET_Y_RATIO - 45,
        }}>
          <div className="target-ring outer" />
          <div className="target-ring middle" />
          <div className="target-ring inner" />
          <div className="target-center">🎯</div>
        </div>

        {/* Balance beam */}
        <div className="beam-pivot" style={{ left: beamCenterX - 12, top: beamCenterY }}>
          <div className="pivot-triangle" />
        </div>

        <div className="beam-arm" style={{
          left: beamCenterX - beamWidth / 2,
          top: beamCenterY - 8,
          width: beamWidth,
          transform: `rotate(${beam.angle}deg)`,
          transformOrigin: '50% 50%',
        }}>
          <div className="beam-wood" />
          <div className="beam-left-plate">
            <div className="plate-blocks">
              {equation && [...Array(Math.min(equation.leftBlocks, 10))].map((_, i) => (
                <div key={i} className="block" style={{ animationDelay: `${i * 0.05}s` }} />
              ))}
              {equation && equation.leftBlocks > 10 && (
                <div className="block-count">{equation.leftBlocks}</div>
              )}
            </div>
          </div>
          <div className="beam-right-plate">
            <div className="plate-blocks">
              {equation && [...Array(Math.min(equation.rightBlocks, 10))].map((_, i) => (
                <div key={i} className="block gold" style={{ animationDelay: `${i * 0.05}s` }} />
              ))}
              {equation && equation.rightBlocks > 10 && (
                <div className="block-count">{equation.rightBlocks}</div>
              )}
            </div>
          </div>
        </div>

        {/* Beam support post */}
        <div className="beam-post" style={{
          left: beamCenterX - 6,
          top: beamCenterY + 20,
          height: size.height * 0.18,
        }} />

        {/* Trajectory preview */}
        {trajectoryPoints.length > 0 && (
          <svg className="trajectory-svg">
            {trajectoryPoints.map((pt, i) => (
              <circle
                key={i}
                cx={pt.x}
                cy={pt.y}
                r={Math.max(1, 3 - i * 0.1)}
                fill={`rgba(255,255,255,${0.6 - i * 0.02})`}
              />
            ))}
          </svg>
        )}

        {/* Shuriken */}
        {shuriken.map(s => {
          if (s.state === 'hit' || s.state === 'miss') return null;
          const isDragging = s.state === 'dragging';
          const isFlying = s.state === 'flying';
          const isShatter = s.state === 'shatter';

          return (
            <div key={s.id}>
              {/* Fire trail */}
              {isFlying && s.hasFireTrail && s.trail.map((t, i) => (
                <div key={i} className="fire-trail" style={{
                  left: t.x,
                  top: t.y,
                  opacity: 1 - t.age / 12,
                  transform: `translate(-50%, -50%) scale(${1 - t.age / 15})`,
                }} />
              ))}
              {/* Normal trail */}
              {isFlying && !s.hasFireTrail && s.trail.map((t, i) => (
                <div key={i} className="shuriken-trail" style={{
                  left: t.x,
                  top: t.y,
                  opacity: 0.5 - t.age / 24,
                  transform: `translate(-50%, -50%) scale(${0.6 - t.age / 30})`,
                }} />
              ))}
              <div
                className={`shuriken ${isDragging ? 'dragging' : ''} ${isFlying ? 'flying' : ''} ${isShatter ? 'shatter' : ''} ${s.state === 'rack' ? 'rack' : ''}`}
                style={{
                  left: s.x,
                  top: s.y,
                  transform: `translate(-50%, -50%) rotate(${s.rotation}deg) ${isDragging ? 'scale(1.2)' : ''} ${isShatter ? 'scale(0)' : ''}`,
                }}
                onMouseDown={(e) => handleDragStart(e, s)}
                onTouchStart={(e) => handleDragStart(e, s)}
              >
                <div className="shuriken-body">
                  <div className="shuriken-blade b1" />
                  <div className="shuriken-blade b2" />
                  <div className="shuriken-blade b3" />
                  <div className="shuriken-blade b4" />
                  <div className="shuriken-center">
                    <span className="shuriken-number">{s.value}</span>
                  </div>
                </div>
                {isDragging && <div className="drag-glow" />}
              </div>
            </div>
          );
        })}

        {/* Impact effects */}
        {correctHit && (
          <div className="impact-ring" style={{
            left: beamCenterX,
            top: size.height * TARGET_Y_RATIO,
          }} />
        )}

        {/* Particles */}
        {particles.map(p => (
          <div key={p.id} className={`particle particle-${p.type}`} style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.life,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
          }} />
        ))}

        {/* Equation progress */}
        <div className="progress-row">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`progress-dot ${i < equationIndex ? 'done' : i === equationIndex ? 'current' : ''}`} />
          ))}
        </div>

        {/* Bottom hint */}
        <div className="bottom-hint">
          <span className="hint-text">🥷 Drag a shuriken and flick upward to throw!</span>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .number-ninja {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #0a0a1a;
  }

  /* ===== INTRO SCREEN ===== */
  .intro-screen, .complete-screen, .gameover-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .dojo-bg, .dojo-bg-play {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: linear-gradient(180deg, #0d1117 0%, #161b22 30%, #1a1e2e 60%, #0d1117 100%);
  }

  .bg-petal {
    position: absolute;
    width: 14px;
    height: 14px;
    background: radial-gradient(ellipse, #ffb7c5 0%, #ff8da1 60%, transparent 100%);
    border-radius: 50% 0 50% 0;
    animation: petalDrift 10s ease-in-out infinite;
    opacity: 0.6;
  }

  @keyframes petalDrift {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10% { opacity: 0.7; }
    90% { opacity: 0.7; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .pagoda-silhouette {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 180px;
    background:
      linear-gradient(135deg, transparent 40%, #1a1e2e 40%, #1a1e2e 60%, transparent 60%) 50% 0 / 120px 30px no-repeat,
      linear-gradient(135deg, transparent 35%, #171b28 35%, #171b28 65%, transparent 65%) 50% 25px / 100px 30px no-repeat,
      linear-gradient(135deg, transparent 30%, #141822 30%, #141822 70%, transparent 70%) 50% 50px / 80px 30px no-repeat,
      linear-gradient(to bottom, #141822, #0d1117) 50% 75px / 50px 105px no-repeat;
    background-position-x: center;
    opacity: 0.4;
  }

  .bamboo-left, .bamboo-right, .bamboo-left-play, .bamboo-right-play {
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 60%;
    background: repeating-linear-gradient(to bottom, #2d4a2e 0px, #2d4a2e 40px, #1e351f 40px, #1e351f 42px);
    opacity: 0.3;
  }

  .bamboo-left, .bamboo-left-play { left: 8%; }
  .bamboo-right, .bamboo-right-play { right: 8%; }

  .bamboo-left::after, .bamboo-right::after,
  .bamboo-left-play::after, .bamboo-right-play::after {
    content: '';
    position: absolute;
    top: 10%;
    width: 30px;
    height: 3px;
    background: #2d4a2e;
    border-radius: 3px;
    transform: rotate(-30deg);
  }

  .bamboo-left::after, .bamboo-left-play::after { left: 3px; transform: rotate(-30deg); }
  .bamboo-right::after, .bamboo-right-play::after { right: 3px; transform: rotate(30deg); }

  .intro-content, .complete-content, .gameover-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
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
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FFD700, #FF6B35, #FF4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
  }

  .logo-star {
    font-size: 2.5rem;
    animation: starSpin 3s ease-in-out infinite;
  }

  .logo-star.flip {
    animation-delay: 0.5s;
  }

  @keyframes starSpin {
    0%, 100% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(15deg) scale(1.1); }
    50% { transform: rotate(0deg) scale(1); }
    75% { transform: rotate(-15deg) scale(1.1); }
  }

  .tagline {
    color: #8b949e;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-style: italic;
  }

  .instructions-card {
    background: rgba(255, 255, 255, 0.03);
    border: 2px solid rgba(255, 200, 100, 0.15);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .instructions-card h3 {
    color: #FFD700;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
  }

  .instruction {
    margin-bottom: 1.5rem;
  }

  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.5rem;
  }

  .mini-beam { font-size: 2rem; }

  .eq-text {
    font-size: 1.3rem;
    font-weight: 800;
    color: #FFD700;
    font-family: monospace;
  }

  .mini-shuriken {
    font-size: 2rem;
    color: #C0C0C0;
    animation: miniSpin 2s linear infinite;
  }

  @keyframes miniSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .throw-arrow {
    font-size: 1.5rem;
    color: #FF6B35;
    animation: throwBounce 1s ease-in-out infinite;
  }

  @keyframes throwBounce {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-8px) translateX(4px); }
  }

  .mini-target { font-size: 2rem; }

  .combo-icon { font-size: 1.8rem; }

  .combo-text {
    font-size: 1.3rem;
    font-weight: 900;
    color: #FF6B35;
  }

  .instruction p { color: #c9d1d9; font-size: 0.95rem; }

  .highlight { font-weight: 700; }
  .highlight.eq-hl { color: #FFD700; }
  .highlight.throw-hl { color: #C0C0C0; }
  .highlight.combo-hl { color: #FF6B35; }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #FF6B35, #FF4444);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(255, 107, 53, 0.4);
  }

  .start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(255, 107, 53, 0.5);
  }

  .btn-icon { font-size: 1.3rem; }

  .menu-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #8b949e;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover {
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
  }

  /* ===== GAME OVER ===== */
  .gameover-ninja {
    font-size: 6rem;
    margin-bottom: 1rem;
    animation: gameoverShake 0.5s ease-in-out;
  }

  @keyframes gameoverShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }

  .gameover-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    color: #FF4444;
    margin-bottom: 1.5rem;
  }

  .final-stats, .complete-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .stat-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem 1.5rem;
    background: rgba(255, 215, 0, 0.05);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 12px;
    min-width: 100px;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #8b949e;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.3rem;
  }

  .stat-value {
    font-size: 1.3rem;
    font-weight: 900;
    color: #FFD700;
  }

  .gameover-buttons, .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  /* ===== LEVEL COMPLETE ===== */
  .level-complete-ninja {
    font-size: 6rem;
    margin-bottom: 0.5rem;
    animation: ninjaFlip 0.8s ease-out;
  }

  @keyframes ninjaFlip {
    0% { transform: scale(0) rotate(-180deg); }
    60% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    color: #FFD700;
    margin-bottom: 1rem;
  }

  .stars-row {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .star {
    font-size: 2.5rem;
    animation: starPop 0.5s ease-out backwards;
  }

  .star.empty { opacity: 0.3; filter: grayscale(100%); }

  @keyframes starPop {
    0% { transform: scale(0) rotate(-45deg); }
    60% { transform: scale(1.3) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  /* ===== GAME SCREEN ===== */
  .game-screen {
    height: 100%;
    position: relative;
    overflow: hidden;
    touch-action: none;
  }

  .dojo-bg-play {
    background: linear-gradient(180deg, #0d1117 0%, #12161e 30%, #1a1e2e 60%, #0d1117 100%);
  }

  .pagoda-silhouette-play {
    position: absolute;
    bottom: 10%;
    right: 5%;
    width: 100px;
    height: 120px;
    background:
      linear-gradient(135deg, transparent 40%, #1a1e2e 40%, #1a1e2e 60%, transparent 60%) 50% 0 / 80px 20px no-repeat,
      linear-gradient(135deg, transparent 35%, #171b28 35%, #171b28 65%, transparent 65%) 50% 18px / 65px 20px no-repeat,
      linear-gradient(to bottom, #141822, #0d1117) 50% 36px / 35px 84px no-repeat;
    background-position-x: center;
    opacity: 0.25;
  }

  .moon {
    position: absolute;
    top: 8%;
    right: 12%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fffde7, #fff9c4 40%, #fdd835 100%);
    box-shadow: 0 0 30px rgba(253, 216, 53, 0.3), 0 0 60px rgba(253, 216, 53, 0.1);
    opacity: 0.7;
  }

  .falling-petal {
    position: absolute;
    top: -20px;
    background: radial-gradient(ellipse, #ffb7c5 0%, #ff8da1 60%, transparent 100%);
    border-radius: 50% 0 50% 0;
    animation: petalFall linear infinite;
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
  }

  @keyframes petalFall {
    0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 0; }
    5% { opacity: 0.5; }
    95% { opacity: 0.5; }
    100% { transform: translateY(100vh) translateX(var(--drift)) rotate(1080deg); opacity: 0; }
  }

  /* Header */
  .game-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%);
    z-index: 50;
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.5rem; }
  .header-center { display: flex; align-items: center; }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(255, 255, 255, 0.2); }

  .level-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #FF6B35, #FF4444);
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.85rem;
    color: white;
  }

  .lives-display { display: flex; gap: 0.2rem; }

  .heart {
    font-size: 1.3rem;
    transition: all 0.3s ease;
  }

  .heart.dead {
    opacity: 0.4;
    transform: scale(0.8);
  }

  .score-scroll {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(255, 215, 0, 0.15);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 16px;
    color: #FFD700;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  .combo-badge {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.3rem 0.6rem;
    background: rgba(255, 107, 53, 0.2);
    border: 1px solid rgba(255, 107, 53, 0.4);
    border-radius: 14px;
    animation: comboPulse 0.5s ease-in-out infinite alternate;
  }

  @keyframes comboPulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.08); }
  }

  .combo-fire { font-size: 0.9rem; }
  .combo-count { color: #FF6B35; font-weight: 800; font-size: 0.85rem; }

  /* Rank */
  .rank-display {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0.8rem;
    background: rgba(255, 215, 0, 0.08);
    border: 1px solid rgba(255, 215, 0, 0.15);
    border-radius: 12px;
    z-index: 20;
  }

  .rank-emoji { font-size: 1rem; }
  .rank-text { color: #FFD700; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }

  /* Equation */
  .equation-display {
    position: absolute;
    top: 78px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    transition: all 0.3s ease;
  }

  .equation-display.correct .equation-scroll {
    border-color: #4ade80;
    box-shadow: 0 0 20px rgba(74, 222, 128, 0.4);
  }

  .equation-display.wrong .equation-scroll {
    border-color: #FF4444;
    box-shadow: 0 0 20px rgba(255, 68, 68, 0.4);
    animation: equationShake 0.4s ease-in-out;
  }

  @keyframes equationShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  .equation-scroll {
    padding: 0.5rem 1.5rem;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 16px;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
  }

  .equation-text {
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    font-weight: 900;
    color: #FFD700;
    font-family: 'Nunito', monospace;
    letter-spacing: 0.05em;
  }

  /* Ninja character */
  .ninja-character {
    position: absolute;
    z-index: 15;
    pointer-events: none;
  }

  .ninja-emoji {
    font-size: clamp(3rem, 8vw, 5rem);
    display: block;
    animation: ninjaIdle 3s ease-in-out infinite;
  }

  @keyframes ninjaIdle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  /* Target zone */
  .target-zone {
    position: absolute;
    width: 90px;
    height: 90px;
    z-index: 10;
    pointer-events: none;
  }

  .target-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid;
  }

  .target-ring.outer {
    inset: 0;
    border-color: rgba(255, 68, 68, 0.3);
    animation: targetRingPulse 2s ease-in-out infinite;
  }

  .target-ring.middle {
    inset: 15px;
    border-color: rgba(255, 107, 53, 0.4);
    animation: targetRingPulse 2s ease-in-out infinite 0.3s;
  }

  .target-ring.inner {
    inset: 30px;
    border-color: rgba(255, 215, 0, 0.5);
    animation: targetRingPulse 2s ease-in-out infinite 0.6s;
  }

  @keyframes targetRingPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 1; }
  }

  .target-center {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  /* Balance beam */
  .beam-pivot {
    position: absolute;
    z-index: 12;
    pointer-events: none;
  }

  .pivot-triangle {
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 20px solid #8B6914;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  }

  .beam-arm {
    position: absolute;
    height: 16px;
    z-index: 11;
    transition: transform 0.05s linear;
    pointer-events: none;
  }

  .beam-wood {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #D4A04F 0%, #B8860B 40%, #8B6914 100%);
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.15);
  }

  .beam-left-plate, .beam-right-plate {
    position: absolute;
    top: -50px;
    width: 80px;
    display: flex;
    justify-content: center;
  }

  .beam-left-plate { left: 10px; }
  .beam-right-plate { right: 10px; }

  .plate-blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;
    max-width: 80px;
  }

  .block {
    width: 14px;
    height: 14px;
    background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    animation: blockAppear 0.3s ease-out backwards;
  }

  .block.gold {
    background: linear-gradient(135deg, #FFD700 0%, #FF8C00 100%);
  }

  @keyframes blockAppear {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .block-count {
    font-size: 0.7rem;
    color: white;
    font-weight: 800;
    background: rgba(0,0,0,0.5);
    border-radius: 4px;
    padding: 1px 4px;
  }

  .beam-post {
    position: absolute;
    width: 12px;
    background: linear-gradient(180deg, #8B6914, #6B4F12);
    border-radius: 0 0 4px 4px;
    z-index: 10;
    pointer-events: none;
  }

  /* Trajectory */
  .trajectory-svg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 25;
  }

  /* Shuriken */
  .shuriken {
    position: absolute;
    width: 70px;
    height: 70px;
    z-index: 30;
    cursor: grab;
    transition: filter 0.2s ease;
  }

  .shuriken.rack {
    animation: rackFloat 2s ease-in-out infinite;
  }

  .shuriken.rack:nth-child(odd) {
    animation-delay: 0.5s;
  }

  @keyframes rackFloat {
    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
    50% { transform: translate(-50%, -50%) translateY(-4px); }
  }

  .shuriken.dragging {
    cursor: grabbing;
    z-index: 100;
    filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.6));
  }

  .shuriken.flying {
    z-index: 90;
    pointer-events: none;
  }

  .shuriken.shatter {
    pointer-events: none;
    animation: shurikenShatter 0.5s ease-out forwards;
  }

  @keyframes shurikenShatter {
    0% { opacity: 1; filter: brightness(2); }
    50% { opacity: 0.5; filter: brightness(1); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.1) rotate(720deg); }
  }

  .shuriken-body {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .shuriken-blade {
    position: absolute;
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #E8E8E8 0%, #A0A0A0 40%, #707070 100%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
  }

  .shuriken-blade.b1 { top: -2px; left: 50%; transform: translateX(-50%); }
  .shuriken-blade.b2 { right: -2px; top: 50%; transform: translateY(-50%); }
  .shuriken-blade.b3 { bottom: -2px; left: 50%; transform: translateX(-50%); }
  .shuriken-blade.b4 { left: -2px; top: 50%; transform: translateY(-50%); }

  .shuriken-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    background: radial-gradient(circle at 40% 40%, #555, #333 60%, #1a1a1a 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #666;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }

  .shuriken-number {
    font-size: 1rem;
    font-weight: 900;
    color: #FFD700;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
  }

  .drag-glow {
    position: absolute;
    inset: -12px;
    border: 2px solid rgba(255, 215, 0, 0.5);
    border-radius: 50%;
    animation: dragGlowPulse 0.8s ease-in-out infinite;
  }

  @keyframes dragGlowPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  /* Trails */
  .shuriken-trail {
    position: absolute;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, rgba(192, 192, 192, 0.5) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 25;
  }

  .fire-trail {
    position: absolute;
    width: 18px;
    height: 18px;
    background: radial-gradient(circle, #FFD700 0%, #FF6B35 40%, #FF4444 70%, transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 25;
  }

  /* Impact */
  .impact-ring {
    position: absolute;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 40;
  }

  .impact-ring::before, .impact-ring::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid #FFD700;
    animation: impactExpand 0.8s ease-out forwards;
  }

  .impact-ring::before {
    width: 20px;
    height: 20px;
  }

  .impact-ring::after {
    width: 20px;
    height: 20px;
    border-color: #FF6B35;
    animation-delay: 0.1s;
  }

  @keyframes impactExpand {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(8); opacity: 0; }
  }

  /* Particles */
  .particle {
    position: absolute;
    pointer-events: none;
    z-index: 45;
    border-radius: 50%;
  }

  .particle-spark {
    box-shadow: 0 0 4px currentColor;
  }

  .particle-celebration {
    border-radius: 2px;
  }

  .particle-shatter {
    border-radius: 1px;
  }

  /* Progress dots */
  .progress-row {
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 20;
  }

  .progress-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  .progress-dot.done {
    background: #4ade80;
    border-color: #4ade80;
    box-shadow: 0 0 8px rgba(74, 222, 128, 0.5);
  }

  .progress-dot.current {
    background: #FFD700;
    border-color: #FFD700;
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
    animation: currentDotPulse 1s ease-in-out infinite;
  }

  @keyframes currentDotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
  }

  /* Bottom hint */
  .bottom-hint {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    text-align: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 100%);
    z-index: 20;
  }

  .hint-text {
    font-size: 0.8rem;
    color: #8b949e;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 600px) {
    .equation-text { font-size: 1.2rem; }
    .shuriken { width: 58px; height: 58px; }
    .shuriken-blade { width: 22px; height: 22px; }
    .shuriken-center { width: 30px; height: 30px; }
    .shuriken-number { font-size: 0.85rem; }
    .ninja-emoji { font-size: 3rem; }
    .target-zone { width: 70px; height: 70px; }
    .beam-left-plate, .beam-right-plate { width: 60px; top: -40px; }
    .block { width: 10px; height: 10px; }
    .header-center { display: none; }
    .rank-display { top: 45px; }
    .equation-display { top: 70px; }
    .moon { width: 35px; height: 35px; }
  }

  @media (max-width: 400px) {
    .game-header { padding: 0.4rem 0.5rem; }
    .shuriken { width: 50px; height: 50px; }
    .shuriken-blade { width: 18px; height: 18px; }
    .shuriken-center { width: 26px; height: 26px; }
    .shuriken-number { font-size: 0.75rem; }
  }
`;
