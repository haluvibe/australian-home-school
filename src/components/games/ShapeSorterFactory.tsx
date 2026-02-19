"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────

type ShapeType =
  | 'circle' | 'triangle' | 'square' | 'rectangle' | 'pentagon' | 'hexagon' | 'oval' | 'diamond'
  | 'cube' | 'cylinder' | 'sphere' | 'cone' | 'rectangular-prism';

interface ShapeDefinition {
  type: ShapeType;
  name: string;
  sides: number;
  corners: number;
  hasCurves: boolean;
  is3D: boolean;
  cssClass: string;
  color: string;
  gradient: string;
}

interface ConveyorShape {
  id: number;
  definition: ShapeDefinition;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  state: 'on-belt' | 'dragging' | 'correct' | 'wrong' | 'falling';
  fallVelocity: number;
  fallRotation: number;
  opacity: number;
  bounceY: number;
}

interface SortingBin {
  id: number;
  label: string;
  description: string;
  color: string;
  acceptsFn: (shape: ShapeDefinition) => boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  count: number;
  flash: 'none' | 'correct' | 'wrong';
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'spark' | 'confetti' | 'steam';
  rotation: number;
  rotationSpeed: number;
}

interface DragState {
  shapeId: number;
  offsetX: number;
  offsetY: number;
  startX: number;
  startY: number;
}

interface LevelConfig {
  levelNum: number;
  title: string;
  beltSpeed: number;
  spawnInterval: number;
  shapesAvailable: ShapeType[];
  bins: { label: string; description: string; color: string; acceptsFn: (s: ShapeDefinition) => boolean }[];
  shapesRequired: number;
}

type GameScreen = 'intro' | 'playing' | 'level-complete' | 'game-over';

// ─── Shape Data ────────────────────────────────────────────────────────────────

const ALL_SHAPES: ShapeDefinition[] = [
  { type: 'circle', name: 'Circle', sides: 0, corners: 0, hasCurves: true, is3D: false, cssClass: 'shape-circle', color: '#f472b6', gradient: 'linear-gradient(135deg, #f9a8d4, #f472b6, #db2777)' },
  { type: 'triangle', name: 'Triangle', sides: 3, corners: 3, hasCurves: false, is3D: false, cssClass: 'shape-triangle', color: '#fbbf24', gradient: 'linear-gradient(135deg, #fde68a, #fbbf24, #d97706)' },
  { type: 'square', name: 'Square', sides: 4, corners: 4, hasCurves: false, is3D: false, cssClass: 'shape-square', color: '#34d399', gradient: 'linear-gradient(135deg, #6ee7b7, #34d399, #059669)' },
  { type: 'rectangle', name: 'Rectangle', sides: 4, corners: 4, hasCurves: false, is3D: false, cssClass: 'shape-rectangle', color: '#60a5fa', gradient: 'linear-gradient(135deg, #93c5fd, #60a5fa, #2563eb)' },
  { type: 'pentagon', name: 'Pentagon', sides: 5, corners: 5, hasCurves: false, is3D: false, cssClass: 'shape-pentagon', color: '#a78bfa', gradient: 'linear-gradient(135deg, #c4b5fd, #a78bfa, #7c3aed)' },
  { type: 'hexagon', name: 'Hexagon', sides: 6, corners: 6, hasCurves: false, is3D: false, cssClass: 'shape-hexagon', color: '#fb923c', gradient: 'linear-gradient(135deg, #fdba74, #fb923c, #ea580c)' },
  { type: 'oval', name: 'Oval', sides: 0, corners: 0, hasCurves: true, is3D: false, cssClass: 'shape-oval', color: '#f472b6', gradient: 'linear-gradient(135deg, #fbcfe8, #f472b6, #be185d)' },
  { type: 'diamond', name: 'Diamond', sides: 4, corners: 4, hasCurves: false, is3D: false, cssClass: 'shape-diamond', color: '#22d3ee', gradient: 'linear-gradient(135deg, #67e8f9, #22d3ee, #0891b2)' },
  { type: 'cube', name: 'Cube', sides: 6, corners: 8, hasCurves: false, is3D: true, cssClass: 'shape-cube', color: '#f97316', gradient: 'linear-gradient(135deg, #fdba74, #f97316, #c2410c)' },
  { type: 'cylinder', name: 'Cylinder', sides: 3, corners: 0, hasCurves: true, is3D: true, cssClass: 'shape-cylinder', color: '#a3e635', gradient: 'linear-gradient(135deg, #d9f99d, #a3e635, #65a30d)' },
  { type: 'sphere', name: 'Sphere', sides: 0, corners: 0, hasCurves: true, is3D: true, cssClass: 'shape-sphere', color: '#e879f9', gradient: 'linear-gradient(135deg, #f0abfc, #e879f9, #a21caf)' },
  { type: 'cone', name: 'Cone', sides: 2, corners: 1, hasCurves: true, is3D: true, cssClass: 'shape-cone', color: '#fb7185', gradient: 'linear-gradient(135deg, #fda4af, #fb7185, #be123c)' },
  { type: 'rectangular-prism', name: 'Rectangular Prism', sides: 6, corners: 8, hasCurves: false, is3D: true, cssClass: 'shape-rect-prism', color: '#38bdf8', gradient: 'linear-gradient(135deg, #7dd3fc, #38bdf8, #0284c7)' },
];

const getShapeDef = (type: ShapeType): ShapeDefinition => ALL_SHAPES.find(s => s.type === type)!;

// ─── Level Configurations ──────────────────────────────────────────────────────

const LEVELS: LevelConfig[] = [
  {
    levelNum: 1, title: 'Count the Sides!', beltSpeed: 0.6, spawnInterval: 3200,
    shapesAvailable: ['triangle', 'square', 'rectangle', 'hexagon'],
    bins: [
      { label: '3 Sides', description: 'Triangles', color: '#fbbf24', acceptsFn: s => s.sides === 3 && !s.is3D },
      { label: '4 Sides', description: 'Rectangles & Squares', color: '#34d399', acceptsFn: s => s.sides === 4 && !s.is3D },
    ],
    shapesRequired: 8,
  },
  {
    levelNum: 2, title: 'More Sides!', beltSpeed: 0.7, spawnInterval: 3000,
    shapesAvailable: ['triangle', 'square', 'rectangle', 'pentagon', 'hexagon', 'diamond'],
    bins: [
      { label: '3 Sides', description: 'Triangles', color: '#fbbf24', acceptsFn: s => s.sides === 3 && !s.is3D },
      { label: '4 Sides', description: 'Quads', color: '#34d399', acceptsFn: s => s.sides === 4 && !s.is3D },
      { label: '5+ Sides', description: 'Pentagons & more', color: '#a78bfa', acceptsFn: s => s.sides >= 5 && !s.is3D },
    ],
    shapesRequired: 10,
  },
  {
    levelNum: 3, title: 'Curves Ahead!', beltSpeed: 0.75, spawnInterval: 2800,
    shapesAvailable: ['circle', 'triangle', 'square', 'oval', 'hexagon', 'diamond'],
    bins: [
      { label: 'Has Curves', description: 'Round shapes', color: '#f472b6', acceptsFn: s => s.hasCurves && !s.is3D },
      { label: 'No Curves', description: 'Straight edges only', color: '#60a5fa', acceptsFn: s => !s.hasCurves && !s.is3D },
    ],
    shapesRequired: 10,
  },
  {
    levelNum: 4, title: 'Meet 3D Shapes!', beltSpeed: 0.8, spawnInterval: 2600,
    shapesAvailable: ['circle', 'square', 'triangle', 'cube', 'sphere', 'cylinder', 'cone'],
    bins: [
      { label: '2D Flat', description: 'Flat shapes', color: '#60a5fa', acceptsFn: s => !s.is3D },
      { label: '3D Solid', description: 'Solid shapes', color: '#f97316', acceptsFn: s => s.is3D },
    ],
    shapesRequired: 12,
  },
  {
    levelNum: 5, title: '3D Properties!', beltSpeed: 0.85, spawnInterval: 2400,
    shapesAvailable: ['cube', 'sphere', 'cylinder', 'cone', 'rectangular-prism'],
    bins: [
      { label: 'Has Curves', description: 'Curved 3D', color: '#e879f9', acceptsFn: s => s.is3D && s.hasCurves },
      { label: 'No Curves', description: 'Flat faces only', color: '#fb923c', acceptsFn: s => s.is3D && !s.hasCurves },
    ],
    shapesRequired: 12,
  },
  {
    levelNum: 6, title: 'Mixed Sorting!', beltSpeed: 0.9, spawnInterval: 2200,
    shapesAvailable: ['circle', 'triangle', 'square', 'hexagon', 'cube', 'sphere', 'cylinder'],
    bins: [
      { label: '3 Sides', description: '2D Triangles', color: '#fbbf24', acceptsFn: s => s.sides === 3 && !s.is3D },
      { label: 'Has Curves', description: 'Any curved', color: '#f472b6', acceptsFn: s => s.hasCurves },
      { label: '3D Solid', description: 'All 3D', color: '#f97316', acceptsFn: s => s.is3D },
    ],
    shapesRequired: 14,
  },
  {
    levelNum: 7, title: 'Expert Sorter!', beltSpeed: 1.0, spawnInterval: 2000,
    shapesAvailable: ['circle', 'triangle', 'square', 'rectangle', 'pentagon', 'hexagon', 'diamond', 'oval', 'cube', 'cylinder', 'sphere', 'cone'],
    bins: [
      { label: '0 Corners', description: 'No corners', color: '#f472b6', acceptsFn: s => s.corners === 0 },
      { label: '3-4 Corners', description: 'Few corners', color: '#34d399', acceptsFn: s => s.corners >= 3 && s.corners <= 4 },
      { label: '5+ Corners', description: 'Many corners', color: '#a78bfa', acceptsFn: s => s.corners >= 5 },
    ],
    shapesRequired: 16,
  },
  {
    levelNum: 8, title: 'Factory Master!', beltSpeed: 1.15, spawnInterval: 1800,
    shapesAvailable: ['circle', 'triangle', 'square', 'rectangle', 'pentagon', 'hexagon', 'diamond', 'oval', 'cube', 'cylinder', 'sphere', 'cone', 'rectangular-prism'],
    bins: [
      { label: '2D Curved', description: 'Flat + curved', color: '#f472b6', acceptsFn: s => !s.is3D && s.hasCurves },
      { label: '2D Straight', description: 'Flat + straight', color: '#60a5fa', acceptsFn: s => !s.is3D && !s.hasCurves },
      { label: '3D Curved', description: 'Solid + curved', color: '#e879f9', acceptsFn: s => s.is3D && s.hasCurves },
      { label: '3D Straight', description: 'Solid + straight', color: '#fb923c', acceptsFn: s => s.is3D && !s.hasCurves },
    ],
    shapesRequired: 20,
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

let idCounter = 0;
const nextId = () => ++idCounter;

interface ShapeSorterFactoryProps {
  onExit?: () => void;
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ShapeSorterFactory({ onExit }: ShapeSorterFactoryProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [shapes, setShapes] = useState<ConveyorShape[]>([]);
  const [bins, setBins] = useState<SortingBin[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [sorted, setSorted] = useState(0);
  const [missed, setMissed] = useState(0);
  const [comboCount, setComboCount] = useState(0);
  const [showCombo, setShowCombo] = useState(false);
  const [mascotMood, setMascotMood] = useState<'idle' | 'happy' | 'sad' | 'excited'>('idle');
  const [beltOffset, setBeltOffset] = useState(0);
  const [introReady, setIntroReady] = useState(false);
  const [gearAngle, setGearAngle] = useState(0);
  const [steamPuffs, setSteamPuffs] = useState<{ id: number; x: number; delay: number }[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const binsRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const spawnTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTimeRef = useRef(0);
  const shapesRef = useRef(shapes);
  const binsRef2 = useRef(bins);
  const dragRef = useRef(dragState);
  const levelConfigRef = useRef<LevelConfig>(LEVELS[0]);
  const sortedRef = useRef(sorted);
  const missedRef = useRef(missed);

  useEffect(() => { shapesRef.current = shapes; }, [shapes]);
  useEffect(() => { binsRef2.current = bins; }, [bins]);
  useEffect(() => { dragRef.current = dragState; }, [dragState]);
  useEffect(() => { sortedRef.current = sorted; }, [sorted]);
  useEffect(() => { missedRef.current = missed; }, [missed]);

  // Intro animation
  useEffect(() => {
    if (gameScreen === 'intro') {
      const t = setTimeout(() => setIntroReady(true), 600);
      return () => clearTimeout(t);
    }
    setIntroReady(false);
  }, [gameScreen]);

  // Steam puffs
  useEffect(() => {
    if (gameScreen !== 'playing') return;
    const interval = setInterval(() => {
      setSteamPuffs(prev => {
        const now = Date.now();
        const filtered = prev.filter(p => now - p.id < 3000);
        return [...filtered, { id: now, x: 5 + Math.random() * 10, delay: 0 }, { id: now + 1, x: 85 + Math.random() * 10, delay: Math.random() * 0.5 }];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [gameScreen]);

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 800, height: 500 };
  }, []);

  const spawnParticles = useCallback((x: number, y: number, count: number, type: Particle['type'], color: string) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = type === 'confetti' ? 2 + Math.random() * 4 : 1 + Math.random() * 3;
      newParticles.push({
        id: nextId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'steam' ? 2 : 0),
        size: type === 'confetti' ? 4 + Math.random() * 6 : 3 + Math.random() * 4,
        color: type === 'confetti'
          ? ['#fbbf24', '#f472b6', '#34d399', '#60a5fa', '#a78bfa', '#fb923c'][Math.floor(Math.random() * 6)]
          : color,
        life: 1,
        maxLife: type === 'steam' ? 60 : 40,
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const getLevelConfig = useCallback((lvl: number): LevelConfig => {
    return LEVELS[Math.min(lvl - 1, LEVELS.length - 1)];
  }, []);

  const createBins = useCallback((config: LevelConfig): SortingBin[] => {
    const size = getContainerSize();
    const binCount = config.bins.length;
    const binWidth = Math.min(160, (size.width - 40) / binCount - 10);
    const totalBinsWidth = binCount * (binWidth + 10) - 10;
    const startX = (size.width - totalBinsWidth) / 2;

    return config.bins.map((b, i) => ({
      id: nextId(),
      label: b.label,
      description: b.description,
      color: b.color,
      acceptsFn: b.acceptsFn,
      x: startX + i * (binWidth + 10),
      y: size.height - 140,
      width: binWidth,
      height: 120,
      count: 0,
      flash: 'none' as const,
    }));
  }, [getContainerSize]);

  const spawnShape = useCallback(() => {
    const config = levelConfigRef.current;
    const size = getContainerSize();
    const available = config.shapesAvailable;
    const type = available[Math.floor(Math.random() * available.length)];
    const def = getShapeDef(type);

    const shape: ConveyorShape = {
      id: nextId(),
      definition: def,
      x: size.width + 60,
      y: 55 + Math.random() * 15,
      rotation: Math.random() * 20 - 10,
      scale: 1,
      state: 'on-belt',
      fallVelocity: 0,
      fallRotation: 0,
      opacity: 1,
      bounceY: 0,
    };

    setShapes(prev => [...prev, shape]);
  }, [getContainerSize]);

  const initLevel = useCallback((lvl: number) => {
    const config = getLevelConfig(lvl);
    levelConfigRef.current = config;
    setShapes([]);
    setParticles([]);
    setDragState(null);
    setSorted(0);
    setMissed(0);
    setComboCount(0);
    setMascotMood('idle');
    setBins(createBins(config));
    lastTimeRef.current = 0;
  }, [getLevelConfig, createBins]);

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

  // Spawn shapes on interval
  useEffect(() => {
    if (gameScreen !== 'playing') {
      if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
      return;
    }
    // Spawn first shape quickly
    const firstTimeout = setTimeout(() => spawnShape(), 800);
    const config = levelConfigRef.current;
    spawnTimerRef.current = setInterval(() => {
      if (shapesRef.current.filter(s => s.state === 'on-belt').length < 5) {
        spawnShape();
      }
    }, config.spawnInterval);
    return () => {
      clearTimeout(firstTimeout);
      if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
    };
  }, [gameScreen, level, spawnShape]);

  // Main animation loop
  useEffect(() => {
    if (gameScreen !== 'playing') {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;

      const config = levelConfigRef.current;
      const size = getContainerSize();

      // Belt animation
      setBeltOffset(prev => (prev + config.beltSpeed * dt * 2) % 40);
      setGearAngle(prev => (prev + config.beltSpeed * dt * 2) % 360);

      // Move shapes on belt
      setShapes(prev => {
        const updated: ConveyorShape[] = [];
        let fellOff = false;

        for (const shape of prev) {
          if (shape.state === 'on-belt') {
            const newX = shape.x - config.beltSpeed * dt;
            if (newX < -80) {
              fellOff = true;
              continue; // remove it
            }
            updated.push({ ...shape, x: newX });
          } else if (shape.state === 'dragging') {
            updated.push(shape);
          } else if (shape.state === 'correct') {
            const newOpacity = shape.opacity - 0.03 * dt;
            const newScale = shape.scale + 0.02 * dt;
            if (newOpacity > 0) {
              updated.push({ ...shape, opacity: newOpacity, scale: newScale });
            }
          } else if (shape.state === 'wrong') {
            const newBounce = shape.bounceY + shape.fallVelocity * dt;
            const newFallV = shape.fallVelocity + 0.3 * dt;
            if (newBounce > 40) {
              // Snap back to belt
              updated.push({
                ...shape,
                state: 'on-belt',
                bounceY: 0,
                fallVelocity: 0,
                y: 55 + Math.random() * 15,
                x: Math.min(shape.x, size.width - 100),
              });
            } else {
              updated.push({ ...shape, bounceY: newBounce, fallVelocity: newFallV });
            }
          } else if (shape.state === 'falling') {
            const newY = shape.y + shape.fallVelocity * dt;
            const newFallV = shape.fallVelocity + 0.5 * dt;
            const newRot = shape.fallRotation + 3 * dt;
            const newOpacity = shape.opacity - 0.02 * dt;
            if (newOpacity > 0 && newY < size.height + 100) {
              updated.push({ ...shape, y: newY, fallVelocity: newFallV, fallRotation: newRot, opacity: newOpacity });
            }
          }
        }

        if (fellOff) {
          setMissed(m => m + 1);
          setComboCount(0);
          setMascotMood('sad');
          setTimeout(() => setMascotMood('idle'), 1500);
          setScore(s => Math.max(0, s - 5));
        }

        return updated;
      });

      // Update particles
      setParticles(prev => {
        return prev
          .map(p => ({
            ...p,
            x: p.x + p.vx * dt,
            y: p.y + p.vy * dt + (p.type === 'confetti' ? 0.1 * dt : 0),
            vy: p.vy + (p.type === 'steam' ? -0.05 * dt : 0.08 * dt),
            life: p.life - (1 / p.maxLife) * dt,
            rotation: p.rotation + p.rotationSpeed * dt,
          }))
          .filter(p => p.life > 0);
      });

      // Check level complete
      const totalDone = sortedRef.current + missedRef.current;
      if (sortedRef.current >= config.shapesRequired) {
        setGameScreen('level-complete');
      } else if (missedRef.current >= 5) {
        setGameScreen('game-over');
      }

      animFrameRef.current = requestAnimationFrame(update);
    };

    animFrameRef.current = requestAnimationFrame(update);
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, [gameScreen, getContainerSize]);

  // Check which bin a point falls into
  const findBinAtPoint = useCallback((px: number, py: number): SortingBin | null => {
    const binsEl = binsRef.current;
    const containerEl = containerRef.current;
    if (!binsEl || !containerEl) return null;

    const containerRect = containerEl.getBoundingClientRect();

    for (const bin of binsRef2.current) {
      const binLeft = bin.x;
      const binTop = bin.y;
      const binRight = bin.x + bin.width;
      const binBottom = bin.y + bin.height;

      if (px >= binLeft - 20 && px <= binRight + 20 && py >= binTop - 30 && py <= binBottom + 20) {
        return bin;
      }
    }
    return null;
  }, []);

  const handleCorrectSort = useCallback((shape: ConveyorShape, bin: SortingBin) => {
    // Mark shape as correct
    setShapes(prev => prev.map(s =>
      s.id === shape.id ? { ...s, state: 'correct' as const, scale: 1.2, opacity: 1 } : s
    ));

    // Flash bin
    setBins(prev => prev.map(b =>
      b.id === bin.id ? { ...b, count: b.count + 1, flash: 'correct' as const } : b
    ));
    setTimeout(() => setBins(prev => prev.map(b => b.id === bin.id ? { ...b, flash: 'none' as const } : b)), 600);

    // Particles
    spawnParticles(bin.x + bin.width / 2, bin.y, 12, 'spark', bin.color);

    // Score
    const newCombo = comboCount + 1;
    setComboCount(newCombo);
    const bonus = Math.min(newCombo, 5);
    setScore(s => s + 10 + bonus * 5);
    setSorted(s => s + 1);

    if (newCombo >= 3) {
      setShowCombo(true);
      setTimeout(() => setShowCombo(false), 1000);
    }

    setMascotMood('happy');
    setTimeout(() => setMascotMood('idle'), 1200);
  }, [comboCount, spawnParticles]);

  const handleWrongSort = useCallback((shape: ConveyorShape, bin: SortingBin) => {
    setShapes(prev => prev.map(s =>
      s.id === shape.id ? { ...s, state: 'wrong' as const, fallVelocity: -3, bounceY: 0 } : s
    ));

    setBins(prev => prev.map(b =>
      b.id === bin.id ? { ...b, flash: 'wrong' as const } : b
    ));
    setTimeout(() => setBins(prev => prev.map(b => b.id === bin.id ? { ...b, flash: 'none' as const } : b)), 600);

    setComboCount(0);
    setMascotMood('sad');
    setTimeout(() => setMascotMood('idle'), 1200);
  }, []);

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, shape: ConveyorShape) => {
    if (shape.state !== 'on-belt') return;
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setDragState({
      shapeId: shape.id,
      offsetX: x - shape.x,
      offsetY: y - shape.y,
      startX: shape.x,
      startY: shape.y,
    });

    setShapes(prev => prev.map(s =>
      s.id === shape.id ? { ...s, state: 'dragging' as const } : s
    ));
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    const drag = dragRef.current;
    if (!drag || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = clientX - rect.left - drag.offsetX;
    const newY = clientY - rect.top - drag.offsetY;

    setShapes(prev => prev.map(s =>
      s.id === drag.shapeId ? { ...s, x: newX, y: newY } : s
    ));
  }, []);

  const handleDragEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;

    const shape = shapesRef.current.find(s => s.id === drag.shapeId);
    if (!shape) { setDragState(null); return; }

    const bin = findBinAtPoint(shape.x, shape.y);
    if (bin) {
      if (bin.acceptsFn(shape.definition)) {
        handleCorrectSort(shape, bin);
      } else {
        handleWrongSort(shape, bin);
      }
    } else {
      // Return to belt
      setShapes(prev => prev.map(s =>
        s.id === drag.shapeId ? { ...s, state: 'on-belt' as const, y: 55 + Math.random() * 15 } : s
      ));
    }

    setDragState(null);
  }, [findBinAtPoint, handleCorrectSort, handleWrongSort]);

  // Drag event listeners
  useEffect(() => {
    if (!dragState) return;
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
  }, [dragState, handleDragMove, handleDragEnd]);

  // Level complete confetti
  useEffect(() => {
    if (gameScreen === 'level-complete') {
      const size = getContainerSize();
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          spawnParticles(Math.random() * size.width, Math.random() * size.height * 0.3, 20, 'confetti', '#fbbf24');
        }, i * 300);
      }
    }
  }, [gameScreen, getContainerSize, spawnParticles]);

  const config = getLevelConfig(level);
  const progress = Math.min(sorted / config.shapesRequired, 1);

  // ─── RENDER ────────────────────────────────────────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="ssf">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="factory-bg-intro">
            <div className="gear-large intro-gear-1" />
            <div className="gear-medium intro-gear-2" />
            <div className="gear-small intro-gear-3" />
            <div className="pipe pipe-left" />
            <div className="pipe pipe-right" />
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-shape-float" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}>
                {['triangle-mini', 'square-mini', 'circle-mini', 'hex-mini', 'diamond-mini', 'cube-mini'][i % 6] === 'triangle-mini' && <div className="bg-tri" />}
                {['triangle-mini', 'square-mini', 'circle-mini', 'hex-mini', 'diamond-mini', 'cube-mini'][i % 6] === 'square-mini' && <div className="bg-sq" />}
                {['triangle-mini', 'square-mini', 'circle-mini', 'hex-mini', 'diamond-mini', 'cube-mini'][i % 6] === 'circle-mini' && <div className="bg-circ" />}
                {['triangle-mini', 'square-mini', 'circle-mini', 'hex-mini', 'diamond-mini', 'cube-mini'][i % 6] === 'hex-mini' && <div className="bg-hex" />}
                {['triangle-mini', 'square-mini', 'circle-mini', 'hex-mini', 'diamond-mini', 'cube-mini'][i % 6] === 'diamond-mini' && <div className="bg-dia" />}
                {['triangle-mini', 'square-mini', 'circle-mini', 'hex-mini', 'diamond-mini', 'cube-mini'][i % 6] === 'cube-mini' && <div className="bg-cub" />}
              </div>
            ))}
          </div>
          <div className={`intro-content ${introReady ? 'ready' : ''}`}>
            <div className="logo-row">
              <span className="logo-icon">🏭</span>
              <h1 className="game-title">Shape Sorter Factory</h1>
              <span className="logo-icon flip">🏭</span>
            </div>
            <p className="tagline">Sort shapes before they fall off the belt!</p>

            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <div className="mini-belt" />
                  <div className="mini-shape-on-belt" />
                  <span className="arrow-right">&#10132;</span>
                </div>
                <p>Shapes roll down the <strong>conveyor belt</strong></p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="drag-icon">&#9995;</span>
                  <div className="mini-shape-drag" />
                  <span className="arrow-right">&#10132;</span>
                  <div className="mini-bin">3 Sides</div>
                </div>
                <p><strong>DRAG</strong> shapes into the correct <span className="hl-sort">sorting bin</span></p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="speed-icon">&#9889;</span>
                  <span className="speed-text">Faster!</span>
                </div>
                <p>Belt gets <strong>faster</strong> each level!</p>
              </div>
            </div>

            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">&#9881;</span>
              Start the Factory
              <span className="btn-icon">&#9881;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameScreen === 'level-complete') {
    const levelScore = score;
    return (
      <div className="ssf">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                backgroundColor: ['#fbbf24', '#f472b6', '#34d399', '#60a5fa', '#a78bfa', '#fb923c'][i % 6],
              }} />
            ))}
          </div>
          <div className="complete-content">
            <div className="mascot-big">&#129489;&#8205;&#128295;</div>
            <h1 className="complete-title">Level {level} Complete!</h1>
            <p className="complete-subtitle">{config.title}</p>
            <div className="stats-row">
              <div className="stat">
                <span className="stat-val">{sorted}</span>
                <span className="stat-label">Sorted</span>
              </div>
              <div className="stat">
                <span className="stat-val">{missed}</span>
                <span className="stat-label">Missed</span>
              </div>
              <div className="stat">
                <span className="stat-val">{levelScore}</span>
                <span className="stat-label">Score</span>
              </div>
            </div>
            <div className="complete-buttons">
              {level < 8 ? (
                <button className="next-btn" onClick={nextLevel}>Level {level + 1} &#10132;</button>
              ) : (
                <button className="next-btn" onClick={() => { setLevel(1); setScore(0); startGame(); }}>Play Again</button>
              )}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameScreen === 'game-over') {
    return (
      <div className="ssf">
        <style>{styles}</style>
        <div className="complete-screen gameover">
          <div className="complete-content">
            <div className="mascot-big sad">&#129489;&#8205;&#128295;</div>
            <h1 className="complete-title">Oh no!</h1>
            <p className="complete-subtitle">Too many shapes fell off the belt!</p>
            <div className="stats-row">
              <div className="stat">
                <span className="stat-val">{sorted}</span>
                <span className="stat-label">Sorted</span>
              </div>
              <div className="stat">
                <span className="stat-val">{score}</span>
                <span className="stat-label">Score</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={() => { initLevel(level); setGameScreen('playing'); }}>Try Again</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PLAYING
  return (
    <div className="ssf">
      <style>{styles}</style>
      <div className="game-screen">
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>&#8592;</button>
            <div className="level-badge">Lvl {level}</div>
          </div>
          <div className="header-center">
            <div className="progress-bar-wrap">
              <div className="progress-bar-fill" style={{ width: `${progress * 100}%` }} />
              <span className="progress-text">{sorted}/{config.shapesRequired}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">&#11088; {score}</div>
            <div className="lives-badge">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`life-dot ${i < 5 - missed ? 'active' : 'lost'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Factory scene */}
        <div className="factory-area" ref={containerRef}>
          {/* Background decorations */}
          <div className="factory-wall" />
          <div className="factory-pipes">
            <div className="pipe-segment pipe-top-left" />
            <div className="pipe-segment pipe-top-right" />
            <div className="pipe-elbow pipe-elbow-left" />
            <div className="pipe-elbow pipe-elbow-right" />
          </div>

          {/* Gears */}
          <div className="gear gear-bg-1" style={{ transform: `rotate(${gearAngle}deg)` }} />
          <div className="gear gear-bg-2" style={{ transform: `rotate(${-gearAngle * 0.7}deg)` }} />
          <div className="gear gear-bg-3" style={{ transform: `rotate(${gearAngle * 1.3}deg)` }} />

          {/* Steam puffs */}
          {steamPuffs.map(puff => (
            <div key={puff.id} className="steam-puff" style={{ left: `${puff.x}%`, animationDelay: `${puff.delay}s` }} />
          ))}

          {/* Conveyor Belt */}
          <div className="conveyor-section">
            <div className="conveyor-roller roller-left">
              <div className="roller-inner" style={{ transform: `rotate(${gearAngle * 2}deg)` }} />
            </div>
            <div className="conveyor-belt">
              <div className="belt-surface" style={{ backgroundPositionX: `${-beltOffset}px` }} />
              <div className="belt-edge belt-edge-top" />
              <div className="belt-edge belt-edge-bottom" />
            </div>
            <div className="conveyor-roller roller-right">
              <div className="roller-inner" style={{ transform: `rotate(${gearAngle * 2}deg)` }} />
            </div>
            <div className="belt-legs">
              <div className="belt-leg" style={{ left: '15%' }} />
              <div className="belt-leg" style={{ left: '50%' }} />
              <div className="belt-leg" style={{ left: '85%' }} />
            </div>
          </div>

          {/* Shapes on belt */}
          {shapes.map(shape => {
            const isDragging = shape.state === 'dragging';
            const isCorrect = shape.state === 'correct';
            const isWrong = shape.state === 'wrong';
            const isFalling = shape.state === 'falling';
            const yOffset = isWrong ? shape.bounceY : 0;
            const rot = isFalling ? shape.fallRotation : shape.rotation;

            return (
              <div
                key={shape.id}
                className={`conveyor-shape ${isDragging ? 'dragging' : ''} ${isCorrect ? 'correct-anim' : ''} ${isWrong ? 'wrong-anim' : ''}`}
                style={{
                  left: shape.x,
                  top: shape.y + yOffset,
                  transform: `translate(-50%, -50%) rotate(${rot}deg) scale(${shape.scale})`,
                  opacity: shape.opacity,
                  zIndex: isDragging ? 100 : 10,
                  cursor: shape.state === 'on-belt' ? 'grab' : isDragging ? 'grabbing' : 'default',
                }}
                onMouseDown={e => handleDragStart(e, shape)}
                onTouchStart={e => handleDragStart(e, shape)}
              >
                <div className={`shape-render ${shape.definition.cssClass}`} style={{ '--shape-color': shape.definition.color, '--shape-gradient': shape.definition.gradient } as React.CSSProperties}>
                  <div className="shape-shine" />
                </div>
                <div className="shape-name-tag">{shape.definition.name}</div>
              </div>
            );
          })}

          {/* Sorting Bins */}
          <div className="bins-area" ref={binsRef}>
            {bins.map(bin => (
              <div
                key={bin.id}
                className={`sorting-bin ${bin.flash === 'correct' ? 'bin-correct' : ''} ${bin.flash === 'wrong' ? 'bin-wrong' : ''}`}
                style={{
                  left: bin.x,
                  top: bin.y,
                  width: bin.width,
                  height: bin.height,
                  '--bin-color': bin.color,
                } as React.CSSProperties}
              >
                <div className="bin-opening" />
                <div className="bin-body">
                  <div className="bin-label">{bin.label}</div>
                  <div className="bin-desc">{bin.description}</div>
                  <div className="bin-count">{bin.count}</div>
                </div>
                <div className="bin-shadow" />
              </div>
            ))}
          </div>

          {/* Mascot */}
          <div className={`mascot mascot-${mascotMood}`}>
            <div className="mascot-body">
              {mascotMood === 'idle' && <span>&#129489;&#8205;&#128295;</span>}
              {mascotMood === 'happy' && <span>&#129321;</span>}
              {mascotMood === 'sad' && <span>&#128533;</span>}
              {mascotMood === 'excited' && <span>&#129395;</span>}
            </div>
            <div className="mascot-hat">&#129521;</div>
            {mascotMood === 'happy' && <div className="mascot-speech">Nice!</div>}
            {mascotMood === 'sad' && <div className="mascot-speech sad-speech">Oops!</div>}
          </div>

          {/* Combo display */}
          {showCombo && comboCount >= 3 && (
            <div className="combo-display">
              <span className="combo-num">{comboCount}x</span>
              <span className="combo-text">COMBO!</span>
            </div>
          )}

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
                backgroundColor: p.color,
                opacity: p.life,
                transform: `rotate(${p.rotation}deg)`,
              }}
            />
          ))}

          {/* Level title overlay on start */}
          {sorted === 0 && missed === 0 && shapes.length <= 1 && (
            <div className="level-title-overlay">
              <div className="level-title-card">
                <span className="lt-num">Level {level}</span>
                <span className="lt-name">{config.title}</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom hint bar */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">&#9995; Drag shapes to bins</span>
            <span className="hint-speed">&#9889; Don&apos;t let them fall!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .ssf {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #1a1a2e;
  }

  /* ─── INTRO SCREEN ─────────────────────────────────────────────────────── */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
  }

  .factory-bg-intro { position: absolute; inset: 0; overflow: hidden; }

  .gear-large, .gear-medium, .gear-small {
    position: absolute;
    border-radius: 50%;
    border: 6px dashed rgba(255,255,255,0.06);
  }
  .gear-large { width: 300px; height: 300px; top: -80px; right: -80px; animation: spinGear 20s linear infinite; }
  .gear-medium { width: 200px; height: 200px; bottom: -60px; left: -40px; animation: spinGear 15s linear infinite reverse; }
  .gear-small { width: 120px; height: 120px; top: 40%; left: 10%; animation: spinGear 10s linear infinite; }

  .intro-gear-1 { border-color: rgba(251,191,36,0.1); }
  .intro-gear-2 { border-color: rgba(244,114,182,0.1); }
  .intro-gear-3 { border-color: rgba(52,211,153,0.1); }

  @keyframes spinGear { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

  .pipe { position: absolute; width: 20px; background: linear-gradient(90deg, #374151, #4b5563, #374151); }
  .pipe-left { left: 30px; top: 0; bottom: 0; border-radius: 4px; }
  .pipe-right { right: 30px; top: 0; bottom: 0; border-radius: 4px; }

  .bg-shape-float { position: absolute; animation: shapeFloat 5s ease-in-out infinite; opacity: 0.15; }
  @keyframes shapeFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(15deg); }
  }
  .bg-tri { width: 0; height: 0; border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 26px solid #fbbf24; }
  .bg-sq { width: 24px; height: 24px; background: #34d399; border-radius: 3px; }
  .bg-circ { width: 24px; height: 24px; background: #f472b6; border-radius: 50%; }
  .bg-hex { width: 24px; height: 24px; background: #fb923c; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
  .bg-dia { width: 20px; height: 20px; background: #22d3ee; transform: rotate(45deg); }
  .bg-cub { width: 20px; height: 20px; background: #f97316; border-radius: 3px; box-shadow: 3px 3px 0 rgba(0,0,0,0.2); }

  .intro-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem;
    max-width: 520px; opacity: 0; transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .intro-content.ready { opacity: 1; transform: translateY(0); }

  .logo-row { display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem; }
  .logo-icon { font-size: 2.2rem; animation: factoryPulse 2s ease-in-out infinite; }
  .logo-icon.flip { transform: scaleX(-1); animation: factoryPulse 2s ease-in-out infinite 0.3s; }
  @keyframes factoryPulse {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-6px) scale(1.05); }
  }
  .logo-icon.flip { animation-name: factoryPulseFlip; }
  @keyframes factoryPulseFlip {
    0%, 100% { transform: scaleX(-1) translateY(0) scale(1); }
    50% { transform: scaleX(-1) translateY(-6px) scale(1.05); }
  }

  .game-title {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #fb923c, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }

  .tagline { color: #94a3b8; font-size: 1.1rem; margin-bottom: 2rem; }

  .instructions-card {
    background: rgba(255,255,255,0.04);
    border: 2px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }
  .instructions-card h3 { color: white; font-size: 1.15rem; margin-bottom: 1.2rem; }

  .instruction { margin-bottom: 1.2rem; }
  .instruction:last-child { margin-bottom: 0; }
  .instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.6rem; margin-bottom: 0.4rem;
  }

  .mini-belt {
    width: 60px; height: 14px; border-radius: 7px;
    background: repeating-linear-gradient(90deg, #4b5563 0px, #4b5563 8px, #6b7280 8px, #6b7280 16px);
    border: 2px solid #374151;
  }
  .mini-shape-on-belt {
    width: 20px; height: 20px; background: linear-gradient(135deg, #fbbf24, #f59e0b);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: miniSlide 2s ease-in-out infinite;
  }
  @keyframes miniSlide { 0%, 100% { transform: translateX(5px); } 50% { transform: translateX(-5px); } }
  .mini-shape-drag {
    width: 20px; height: 20px; background: linear-gradient(135deg, #34d399, #059669);
    border-radius: 3px;
  }
  .mini-bin {
    padding: 3px 8px; background: rgba(251,191,36,0.2); border: 2px solid #fbbf24;
    border-radius: 8px; font-size: 0.7rem; color: #fbbf24; font-weight: 700;
  }
  .arrow-right { color: #64748b; font-size: 1.2rem; }
  .drag-icon { font-size: 1.3rem; }
  .speed-icon { font-size: 1.5rem; }
  .speed-text { color: #fb923c; font-weight: 800; font-size: 1rem; }
  .instruction p { color: #cbd5e1; font-size: 0.92rem; }
  .hl-sort { color: #fbbf24; font-weight: 700; }

  .start-btn, .next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #f97316, #f59e0b);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(249,115,22,0.4);
  }
  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(249,115,22,0.5);
  }
  .btn-icon { font-size: 1.4rem; animation: spinGear 3s linear infinite; display: inline-block; }

  /* ─── COMPLETE / GAMEOVER SCREEN ───────────────────────────────────────── */

  .complete-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
  }
  .complete-screen.gameover { background: linear-gradient(160deg, #1a1a2e 0%, #2d1b1b 40%, #3d1515 100%); }

  .complete-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
  .confetti-piece {
    position: absolute; top: -20px; width: 8px; height: 14px; border-radius: 2px;
    animation: confettiFall 3s ease-in infinite;
  }
  @keyframes confettiFall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 480px;
  }
  .mascot-big { font-size: 4rem; margin-bottom: 1rem; animation: mascotCelebrate 1s ease infinite; }
  .mascot-big.sad { animation: mascotSad 2s ease infinite; }
  @keyframes mascotCelebrate {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(-5deg); }
    75% { transform: translateY(-10px) rotate(5deg); }
  }
  @keyframes mascotSad {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .complete-title { font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 0.5rem; }
  .complete-subtitle { color: #94a3b8; font-size: 1.1rem; margin-bottom: 1.5rem; }

  .stats-row { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; }
  .stat { display: flex; flex-direction: column; align-items: center; }
  .stat-val { font-size: 2.2rem; font-weight: 900; color: white; }
  .stat-label { font-size: 0.8rem; color: #64748b; }

  .complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }
  .menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* ─── GAME SCREEN ──────────────────────────────────────────────────────── */

  .game-screen { height: 100%; display: flex; flex-direction: column; position: relative; background: #1a1a2e; }

  .game-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 1rem; background: rgba(0,0,0,0.5); z-index: 50;
    border-bottom: 2px solid rgba(255,255,255,0.05);
  }
  .header-left, .header-right { display: flex; align-items: center; gap: 0.6rem; }

  .back-btn {
    width: 36px; height: 36px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 10px; color: white; font-size: 1.2rem;
    cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center;
  }
  .back-btn:hover { background: rgba(255,255,255,0.2); }

  .level-badge {
    padding: 0.4rem 0.8rem; background: linear-gradient(135deg, #f97316, #f59e0b);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.85rem;
  }

  .header-center { flex: 1; max-width: 200px; margin: 0 1rem; }

  .progress-bar-wrap {
    position: relative; height: 24px; background: rgba(255,255,255,0.1);
    border-radius: 12px; overflow: hidden;
  }
  .progress-bar-fill {
    position: absolute; left: 0; top: 0; bottom: 0;
    background: linear-gradient(90deg, #f97316, #fbbf24);
    border-radius: 12px; transition: width 0.3s ease;
  }
  .progress-text {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; font-weight: 700; color: white; z-index: 2;
  }

  .score-badge {
    padding: 0.4rem 0.8rem; background: rgba(251,191,36,0.15);
    border-radius: 16px; color: #fbbf24; font-weight: 700; font-size: 0.85rem;
  }

  .lives-badge { display: flex; gap: 3px; align-items: center; }
  .life-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: #ef4444; transition: all 0.3s ease;
  }
  .life-dot.active { background: #22c55e; box-shadow: 0 0 6px rgba(34,197,94,0.5); }
  .life-dot.lost { background: #374151; }

  /* ─── FACTORY AREA ─────────────────────────────────────────────────────── */

  .factory-area {
    flex: 1; position: relative; overflow: hidden; touch-action: none;
    background: linear-gradient(180deg, #1e293b 0%, #1a1a2e 40%, #111827 100%);
  }

  .factory-wall {
    position: absolute; inset: 0;
    background:
      repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px);
    pointer-events: none;
  }

  .factory-pipes { position: absolute; inset: 0; pointer-events: none; }
  .pipe-segment {
    position: absolute; background: linear-gradient(90deg, #374151, #4b5563, #374151);
    border-radius: 6px;
  }
  .pipe-top-left { left: 3%; top: 0; width: 14px; height: 35%; }
  .pipe-top-right { right: 3%; top: 0; width: 14px; height: 35%; }
  .pipe-elbow {
    position: absolute; width: 28px; height: 28px;
    border: 7px solid #4b5563; border-radius: 0;
  }
  .pipe-elbow-left { left: 3%; top: 35%; border-right: none; border-top: none; border-bottom-left-radius: 14px; }
  .pipe-elbow-right { right: 3%; top: 35%; border-left: none; border-top: none; border-bottom-right-radius: 14px; }

  /* Gears */
  .gear {
    position: absolute; pointer-events: none; opacity: 0.08;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #fbbf24 0deg, transparent 30deg, transparent 60deg, #fbbf24 60deg, transparent 90deg, transparent 120deg, #fbbf24 120deg, transparent 150deg, transparent 180deg, #fbbf24 180deg, transparent 210deg, transparent 240deg, #fbbf24 240deg, transparent 270deg, transparent 300deg, #fbbf24 300deg, transparent 330deg, transparent 360deg);
  }
  .gear::after {
    content: ''; position: absolute; top: 30%; left: 30%; width: 40%; height: 40%;
    background: #1a1a2e; border-radius: 50%;
  }
  .gear-bg-1 { width: 100px; height: 100px; top: 5%; right: 8%; }
  .gear-bg-2 { width: 70px; height: 70px; top: 12%; right: 3%; }
  .gear-bg-3 { width: 80px; height: 80px; bottom: 45%; left: 5%; }

  /* Steam */
  .steam-puff {
    position: absolute; top: 30%; width: 30px; height: 30px;
    background: radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%);
    border-radius: 50%;
    animation: steamRise 2.5s ease-out forwards;
    pointer-events: none;
  }
  @keyframes steamRise {
    0% { transform: translateY(0) scale(0.5); opacity: 0.6; }
    100% { transform: translateY(-80px) scale(2); opacity: 0; }
  }

  /* ─── CONVEYOR BELT ────────────────────────────────────────────────────── */

  .conveyor-section {
    position: absolute; top: 20px; left: 0; right: 0; height: 90px;
    display: flex; align-items: center;
  }

  .conveyor-roller {
    width: 36px; height: 70px; background: linear-gradient(180deg, #6b7280, #9ca3af, #6b7280);
    border-radius: 8px; z-index: 5; position: relative; flex-shrink: 0;
    border: 2px solid #4b5563;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
  }
  .roller-left { margin-left: 4px; }
  .roller-right { margin-right: 4px; }
  .roller-inner {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 20px; height: 20px; border: 3px solid rgba(0,0,0,0.2); border-radius: 50%;
    border-top-color: rgba(255,255,255,0.2);
  }

  .conveyor-belt {
    flex: 1; height: 50px; position: relative; overflow: hidden;
  }
  .belt-surface {
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      90deg,
      #374151 0px, #374151 18px,
      #4b5563 18px, #4b5563 20px,
      #374151 20px, #374151 38px,
      #4b5563 38px, #4b5563 40px
    );
    background-size: 40px 100%;
  }
  .belt-edge {
    position: absolute; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #6b7280, #9ca3af, #6b7280);
  }
  .belt-edge-top { top: 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .belt-edge-bottom { bottom: 0; border-top: 1px solid rgba(255,255,255,0.1); }

  .belt-legs { position: absolute; top: 100%; left: 40px; right: 40px; height: 30px; }
  .belt-leg {
    position: absolute; top: 0; width: 8px; height: 30px;
    background: linear-gradient(90deg, #4b5563, #6b7280, #4b5563);
    border-radius: 0 0 3px 3px;
    transform: translateX(-50%);
  }

  /* ─── SHAPES ───────────────────────────────────────────────────────────── */

  .conveyor-shape {
    position: absolute; width: 85px; height: 85px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: box-shadow 0.2s ease;
    z-index: 10;
  }
  .conveyor-shape.dragging { z-index: 100; filter: brightness(1.2); }
  .conveyor-shape.correct-anim { animation: correctPop 0.5s ease forwards; }
  .conveyor-shape.wrong-anim { animation: wrongShake 0.4s ease; }

  @keyframes correctPop {
    0% { transform: translate(-50%,-50%) scale(1); }
    50% { transform: translate(-50%,-50%) scale(1.3); }
    100% { transform: translate(-50%,-50%) scale(0); opacity: 0; }
  }
  @keyframes wrongShake {
    0%, 100% { transform: translate(-50%,-50%) translateX(0); }
    20% { transform: translate(-50%,-50%) translateX(-8px); }
    40% { transform: translate(-50%,-50%) translateX(8px); }
    60% { transform: translate(-50%,-50%) translateX(-5px); }
    80% { transform: translate(-50%,-50%) translateX(5px); }
  }

  .shape-render {
    width: 70px; height: 70px; position: relative;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
  }
  .shape-shine {
    position: absolute; top: 10%; left: 15%; width: 35%; height: 25%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%; z-index: 2; pointer-events: none;
  }

  .shape-name-tag {
    position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%);
    font-size: 0.55rem; font-weight: 700; color: white;
    background: rgba(0,0,0,0.7); padding: 1px 6px; border-radius: 6px;
    white-space: nowrap; pointer-events: none;
  }

  /* ─── 2D Shape CSS ─────────────────────────────────────────────────────── */

  .shape-circle {
    border-radius: 50%;
    background: var(--shape-gradient);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--shape-color) 40%, transparent),
                inset 0 -8px 15px rgba(0,0,0,0.2);
  }

  .shape-triangle {
    background: transparent;
    width: 0 !important; height: 0 !important;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 61px solid var(--shape-color);
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }
  .shape-triangle .shape-shine { top: 40%; left: 25%; }

  .shape-square {
    border-radius: 6px;
    background: var(--shape-gradient);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--shape-color) 40%, transparent),
                inset 0 -8px 15px rgba(0,0,0,0.2);
  }

  .shape-rectangle {
    width: 80px !important; height: 50px !important;
    border-radius: 6px;
    background: var(--shape-gradient);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--shape-color) 40%, transparent),
                inset 0 -8px 15px rgba(0,0,0,0.2);
  }

  .shape-pentagon {
    background: var(--shape-color);
    clip-path: polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%);
    box-shadow: none;
    filter: drop-shadow(0 4px 10px color-mix(in srgb, var(--shape-color) 40%, transparent));
  }

  .shape-hexagon {
    background: var(--shape-color);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    filter: drop-shadow(0 4px 10px color-mix(in srgb, var(--shape-color) 40%, transparent));
  }

  .shape-oval {
    width: 80px !important; height: 50px !important;
    border-radius: 50%;
    background: var(--shape-gradient);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--shape-color) 40%, transparent),
                inset 0 -8px 15px rgba(0,0,0,0.2);
  }

  .shape-diamond {
    background: var(--shape-color);
    transform: rotate(45deg);
    width: 50px !important; height: 50px !important;
    border-radius: 4px;
    box-shadow: 0 6px 20px color-mix(in srgb, var(--shape-color) 40%, transparent),
                inset 0 -8px 15px rgba(0,0,0,0.2);
  }

  /* ─── 3D Shape CSS ─────────────────────────────────────────────────────── */

  .shape-cube {
    width: 55px !important; height: 55px !important;
    background: var(--shape-gradient);
    border-radius: 4px;
    position: relative;
    box-shadow:
      8px 8px 0 rgba(0,0,0,0.15),
      inset 0 -8px 15px rgba(0,0,0,0.2);
  }
  .shape-cube::before {
    content: ''; position: absolute;
    top: -8px; left: 8px; right: -8px; height: 8px;
    background: color-mix(in srgb, var(--shape-color) 80%, white 20%);
    transform: skewX(-45deg); transform-origin: bottom left;
    border-radius: 2px 2px 0 0;
  }
  .shape-cube::after {
    content: ''; position: absolute;
    top: -8px; right: -8px; bottom: 8px; width: 8px;
    background: color-mix(in srgb, var(--shape-color) 60%, black 10%);
    transform: skewY(-45deg); transform-origin: top left;
    border-radius: 0 2px 2px 0;
  }

  .shape-cylinder {
    width: 55px !important; height: 65px !important;
    background: var(--shape-gradient);
    border-radius: 4px;
    position: relative;
  }
  .shape-cylinder::before {
    content: ''; position: absolute;
    top: -8px; left: -2px; right: -2px; height: 18px;
    background: color-mix(in srgb, var(--shape-color) 85%, white 15%);
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.1);
  }
  .shape-cylinder::after {
    content: ''; position: absolute;
    bottom: -2px; left: -2px; right: -2px; height: 14px;
    background: color-mix(in srgb, var(--shape-color) 70%, black 20%);
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
  }

  .shape-sphere {
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, color-mix(in srgb, var(--shape-color) 80%, white 30%), var(--shape-color), color-mix(in srgb, var(--shape-color) 70%, black 20%));
    box-shadow:
      0 8px 25px color-mix(in srgb, var(--shape-color) 50%, transparent),
      inset 0 -10px 20px rgba(0,0,0,0.25),
      inset 5px 5px 15px rgba(255,255,255,0.15);
  }

  .shape-cone {
    width: 0 !important; height: 0 !important;
    border-left: 32px solid transparent;
    border-right: 32px solid transparent;
    border-bottom: 65px solid var(--shape-color);
    border-radius: 0 0 5px 5px;
    position: relative;
    filter: drop-shadow(0 4px 10px color-mix(in srgb, var(--shape-color) 40%, transparent));
  }
  .shape-cone::after {
    content: ''; position: absolute;
    bottom: -68px; left: -28px; width: 56px; height: 14px;
    background: color-mix(in srgb, var(--shape-color) 80%, black 10%);
    border-radius: 50%;
  }

  .shape-rect-prism {
    width: 70px !important; height: 45px !important;
    background: var(--shape-gradient);
    border-radius: 3px;
    position: relative;
    box-shadow:
      6px 6px 0 rgba(0,0,0,0.15),
      inset 0 -6px 12px rgba(0,0,0,0.2);
  }
  .shape-rect-prism::before {
    content: ''; position: absolute;
    top: -6px; left: 6px; right: -6px; height: 6px;
    background: color-mix(in srgb, var(--shape-color) 80%, white 20%);
    transform: skewX(-45deg); transform-origin: bottom left;
  }
  .shape-rect-prism::after {
    content: ''; position: absolute;
    top: -6px; right: -6px; bottom: 6px; width: 6px;
    background: color-mix(in srgb, var(--shape-color) 60%, black 10%);
    transform: skewY(-45deg); transform-origin: top left;
  }

  /* ─── SORTING BINS ─────────────────────────────────────────────────────── */

  .bins-area { position: absolute; left: 0; right: 0; bottom: 10px; height: 140px; pointer-events: none; }

  .sorting-bin {
    position: absolute;
    pointer-events: auto;
    border-radius: 12px 12px 8px 8px;
    transition: all 0.3s ease;
    overflow: visible;
  }

  .bin-opening {
    position: absolute; top: -6px; left: 8%; right: 8%; height: 12px;
    background: linear-gradient(180deg, var(--bin-color), color-mix(in srgb, var(--bin-color) 70%, black));
    border-radius: 6px 6px 0 0;
    border: 2px solid rgba(255,255,255,0.15);
    border-bottom: none;
  }

  .bin-body {
    position: absolute; top: 4px; left: 0; right: 0; bottom: 0;
    background: linear-gradient(180deg,
      color-mix(in srgb, var(--bin-color) 20%, #1a1a2e) 0%,
      color-mix(in srgb, var(--bin-color) 10%, #111827) 100%);
    border: 2px solid color-mix(in srgb, var(--bin-color) 40%, transparent);
    border-radius: 0 0 8px 8px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 0.4rem;
  }

  .bin-label {
    font-size: 0.85rem; font-weight: 800; color: var(--bin-color);
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }
  .bin-desc { font-size: 0.6rem; color: #64748b; margin-bottom: 0.2rem; }
  .bin-count {
    font-size: 1.4rem; font-weight: 900; color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .bin-shadow {
    position: absolute; bottom: -8px; left: 10%; right: 10%; height: 8px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.3), transparent);
    border-radius: 50%;
  }

  .sorting-bin.bin-correct {
    animation: binFlashCorrect 0.5s ease;
  }
  .sorting-bin.bin-correct .bin-body {
    border-color: #22c55e;
    box-shadow: 0 0 30px rgba(34,197,94,0.4), inset 0 0 20px rgba(34,197,94,0.1);
  }
  @keyframes binFlashCorrect {
    0%, 100% { transform: scale(1); }
    30% { transform: scale(1.05); }
  }

  .sorting-bin.bin-wrong {
    animation: binFlashWrong 0.4s ease;
  }
  .sorting-bin.bin-wrong .bin-body {
    border-color: #ef4444;
    box-shadow: 0 0 30px rgba(239,68,68,0.4);
  }
  @keyframes binFlashWrong {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-5px); }
    40% { transform: translateX(5px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
  }

  /* ─── MASCOT ───────────────────────────────────────────────────────────── */

  .mascot {
    position: absolute; bottom: 155px; right: 12px; z-index: 30;
    display: flex; flex-direction: column; align-items: center;
    transition: all 0.3s ease;
  }
  .mascot-body { font-size: 2.2rem; animation: mascotBob 3s ease-in-out infinite; }
  @keyframes mascotBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  .mascot-hat {
    position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
    font-size: 1.2rem;
  }
  .mascot-happy .mascot-body { animation: mascotJump 0.5s ease; }
  @keyframes mascotJump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
  .mascot-sad .mascot-body { animation: mascotShake 0.5s ease; }
  @keyframes mascotShake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }

  .mascot-speech {
    position: absolute; top: -32px; right: 40px;
    padding: 3px 10px; background: rgba(34,197,94,0.9);
    border-radius: 10px; font-size: 0.75rem; font-weight: 800; color: white;
    animation: speechPop 0.3s ease;
    white-space: nowrap;
  }
  .mascot-speech.sad-speech { background: rgba(239,68,68,0.9); }
  @keyframes speechPop {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
  }

  /* ─── COMBO ────────────────────────────────────────────────────────────── */

  .combo-display {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    display: flex; align-items: center; gap: 0.5rem; z-index: 200;
    animation: comboIn 0.8s ease forwards; pointer-events: none;
  }
  @keyframes comboIn {
    0% { transform: translate(-50%, -50%) scale(0) rotate(-10deg); opacity: 0; }
    40% { transform: translate(-50%, -50%) scale(1.3) rotate(5deg); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0; }
  }
  .combo-num {
    font-size: 3rem; font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .combo-text {
    font-size: 2rem; font-weight: 900; color: white;
    text-shadow: 0 4px 10px rgba(0,0,0,0.5);
  }

  /* ─── PARTICLES ────────────────────────────────────────────────────────── */

  .particle {
    position: absolute; pointer-events: none; border-radius: 50%;
  }
  .particle-confetti { border-radius: 2px; }
  .particle-steam { border-radius: 50%; }
  .particle-spark {
    border-radius: 50%;
    box-shadow: 0 0 4px currentColor;
  }

  /* ─── LEVEL TITLE OVERLAY ──────────────────────────────────────────────── */

  .level-title-overlay {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    z-index: 60; pointer-events: none;
    animation: levelTitleFade 2.5s ease forwards;
  }
  @keyframes levelTitleFade {
    0% { opacity: 0; }
    20% { opacity: 1; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }
  .level-title-card {
    display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
    padding: 1.2rem 2.5rem;
    background: rgba(0,0,0,0.85); border: 2px solid rgba(249,115,22,0.4);
    border-radius: 20px; backdrop-filter: blur(10px);
    animation: levelCardPop 0.5s ease;
  }
  @keyframes levelCardPop {
    0% { transform: scale(0.5); }
    100% { transform: scale(1); }
  }
  .lt-num { font-size: 1.5rem; font-weight: 900; color: #fbbf24; }
  .lt-name { font-size: 1rem; color: #94a3b8; font-weight: 600; }

  /* ─── BOTTOM BAR ───────────────────────────────────────────────────────── */

  .bottom-bar {
    padding: 0.6rem; background: rgba(0,0,0,0.5); text-align: center;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  .hint-text { display: flex; justify-content: center; gap: 2rem; font-size: 0.8rem; }
  .hint-drag { color: #fbbf24; }
  .hint-speed { color: #fb923c; }

  /* ─── RESPONSIVE ───────────────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .conveyor-shape { width: 70px; height: 70px; }
    .shape-render { width: 55px; height: 55px; }
    .shape-triangle { border-left-width: 27px !important; border-right-width: 27px !important; border-bottom-width: 47px !important; }
    .shape-cone { border-left-width: 24px !important; border-right-width: 24px !important; border-bottom-width: 50px !important; }
    .bin-label { font-size: 0.7rem; }
    .bin-count { font-size: 1.1rem; }
    .header-center { max-width: 120px; }
    .mascot { display: none; }
    .hint-text { flex-direction: column; gap: 0.2rem; }
    .game-title { font-size: clamp(1.4rem, 5vw, 2rem); }
  }

  @media (max-width: 400px) {
    .sorting-bin { min-height: 80px; }
    .conveyor-shape { width: 60px; height: 60px; }
    .shape-render { width: 45px; height: 45px; }
  }
`;
