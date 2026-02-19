"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface FootstepExplorerProps {
  onExit?: () => void;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameComplete';
type RoundType = 'measure' | 'compare' | 'estimate';

interface MeasurableObject {
  name: string;
  lengthInUnits: number; // how many units long
  cssShape: string; // CSS class for the shape
  color1: string;
  color2: string;
  widthPx: number; // actual rendered width
  heightPx: number;
  label: string;
}

interface MeasureUnit {
  name: string;
  namePlural: string;
  cssClass: string;
  widthPx: number;
  heightPx: number;
  color1: string;
  color2: string;
}

interface PlacedUnit {
  id: number;
  index: number; // position along the object (0, 1, 2...)
  x: number;
  y: number;
  settled: boolean;
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
  type: 'sparkle' | 'confetti';
}

interface JournalEntry {
  objectName: string;
  unitName: string;
  count: number;
  level: number;
}

interface LevelConfig {
  roundType: RoundType;
  objects: MeasurableObject[];
  unit: MeasureUnit;
  estimateTarget?: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SNAP_THRESHOLD = 40;
const UNIT_GAP = 2;

let idCounter = 0;
const getNewId = (): number => ++idCounter;

const UNITS: MeasureUnit[] = [
  { name: 'paperclip', namePlural: 'paperclips', cssClass: 'unit-paperclip', widthPx: 44, heightPx: 20, color1: '#c0c0c0', color2: '#8a8a8a' },
  { name: 'block', namePlural: 'blocks', cssClass: 'unit-block', widthPx: 40, heightPx: 38, color1: '#e74c3c', color2: '#c0392b' },
  { name: 'handspan', namePlural: 'handspans', cssClass: 'unit-handspan', widthPx: 56, heightPx: 32, color1: '#f5cba7', color2: '#e0ac69' },
  { name: 'footstep', namePlural: 'footsteps', cssClass: 'unit-footstep', widthPx: 52, heightPx: 28, color1: '#7b5b3a', color2: '#5a3e28' },
];

const OBJECTS: MeasurableObject[] = [
  { name: 'Pencil', lengthInUnits: 3, cssShape: 'shape-pencil', color1: '#f1c40f', color2: '#e67e22', widthPx: 132, heightPx: 28, label: 'pencil' },
  { name: 'Crayon', lengthInUnits: 3, cssShape: 'shape-crayon', color1: '#e74c3c', color2: '#c0392b', widthPx: 132, heightPx: 24, label: 'crayon' },
  { name: 'Book', lengthInUnits: 4, cssShape: 'shape-book', color1: '#3498db', color2: '#2980b9', widthPx: 176, heightPx: 44, label: 'book' },
  { name: 'Ruler', lengthInUnits: 5, cssShape: 'shape-ruler', color1: '#f39c12', color2: '#d68910', widthPx: 220, heightPx: 22, label: 'ruler' },
  { name: 'Shoe', lengthInUnits: 4, cssShape: 'shape-shoe', color1: '#8e44ad', color2: '#6c3483', widthPx: 176, heightPx: 40, label: 'shoe' },
  { name: 'Worm', lengthInUnits: 6, cssShape: 'shape-worm', color1: '#e88db4', color2: '#d35e8c', widthPx: 264, heightPx: 20, label: 'worm' },
  { name: 'Banana', lengthInUnits: 3, cssShape: 'shape-banana', color1: '#f9e74a', color2: '#f1c40f', widthPx: 132, heightPx: 30, label: 'banana' },
  { name: 'Snake', lengthInUnits: 7, cssShape: 'shape-snake', color1: '#27ae60', color2: '#1e8449', widthPx: 308, heightPx: 18, label: 'snake' },
  { name: 'Caterpillar', lengthInUnits: 5, cssShape: 'shape-caterpillar', color1: '#2ecc71', color2: '#1abc9c', widthPx: 220, heightPx: 24, label: 'caterpillar' },
  { name: 'Ribbon', lengthInUnits: 8, cssShape: 'shape-ribbon', color1: '#e91e9e', color2: '#c0197f', widthPx: 352, heightPx: 14, label: 'ribbon' },
  { name: 'Spoon', lengthInUnits: 4, cssShape: 'shape-spoon', color1: '#bdc3c7', color2: '#95a5a6', widthPx: 176, heightPx: 26, label: 'spoon' },
  { name: 'Feather', lengthInUnits: 5, cssShape: 'shape-feather', color1: '#f39c12', color2: '#e67e22', widthPx: 220, heightPx: 20, label: 'feather' },
];

function buildLevels(): LevelConfig[] {
  return [
    // Level 1: Simple measure - short object, paperclips
    { roundType: 'measure', objects: [{ ...OBJECTS[0], lengthInUnits: 3, widthPx: 3 * (UNITS[0].widthPx + UNIT_GAP) }], unit: UNITS[0] },
    // Level 2: Measure with blocks
    { roundType: 'measure', objects: [{ ...OBJECTS[2], lengthInUnits: 4, widthPx: 4 * (UNITS[1].widthPx + UNIT_GAP) }], unit: UNITS[1] },
    // Level 3: Estimate round - guess before measuring
    { roundType: 'estimate', objects: [{ ...OBJECTS[1], lengthInUnits: 3, widthPx: 3 * (UNITS[0].widthPx + UNIT_GAP) }], unit: UNITS[0], estimateTarget: 3 },
    // Level 4: Compare two objects
    {
      roundType: 'compare',
      objects: [
        { ...OBJECTS[0], lengthInUnits: 3, widthPx: 3 * (UNITS[0].widthPx + UNIT_GAP) },
        { ...OBJECTS[4], lengthInUnits: 5, widthPx: 5 * (UNITS[0].widthPx + UNIT_GAP) },
      ],
      unit: UNITS[0],
    },
    // Level 5: Measure with handspans
    { roundType: 'measure', objects: [{ ...OBJECTS[5], lengthInUnits: 4, widthPx: 4 * (UNITS[2].widthPx + UNIT_GAP) }], unit: UNITS[2] },
    // Level 6: Estimate round - longer object
    { roundType: 'estimate', objects: [{ ...OBJECTS[8], lengthInUnits: 5, widthPx: 5 * (UNITS[1].widthPx + UNIT_GAP) }], unit: UNITS[1], estimateTarget: 5 },
    // Level 7: Footsteps measure
    { roundType: 'measure', objects: [{ ...OBJECTS[3], lengthInUnits: 5, widthPx: 5 * (UNITS[3].widthPx + UNIT_GAP) }], unit: UNITS[3] },
    // Level 8: Compare with handspans
    {
      roundType: 'compare',
      objects: [
        { ...OBJECTS[6], lengthInUnits: 2, widthPx: 2 * (UNITS[2].widthPx + UNIT_GAP) },
        { ...OBJECTS[7], lengthInUnits: 5, widthPx: 5 * (UNITS[2].widthPx + UNIT_GAP) },
      ],
      unit: UNITS[2],
    },
    // Level 9: Estimate - big object
    { roundType: 'estimate', objects: [{ ...OBJECTS[9], lengthInUnits: 6, widthPx: 6 * (UNITS[0].widthPx + UNIT_GAP) }], unit: UNITS[0], estimateTarget: 6 },
    // Level 10: Final measure - long ribbon with blocks
    { roundType: 'measure', objects: [{ ...OBJECTS[11], lengthInUnits: 7, widthPx: 7 * (UNITS[1].widthPx + UNIT_GAP) }], unit: UNITS[1] },
  ];
}

const LEVELS = buildLevels();

// ─── Component ───────────────────────────────────────────────────────────────

export default function FootstepExplorer({ onExit }: FootstepExplorerProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);

  // Current level state
  const [currentObjectIndex, setCurrentObjectIndex] = useState<number>(0);
  const [placedUnits, setPlacedUnits] = useState<PlacedUnit[]>([]);
  const [measureComplete, setMeasureComplete] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Estimate state
  const [estimatePhase, setEstimatePhase] = useState<'guess' | 'measure' | 'reveal'>('guess');
  const [playerEstimate, setPlayerEstimate] = useState<number>(0);
  const [estimateOptions, setEstimateOptions] = useState<number[]>([]);

  // Compare state
  const [comparePhase, setComparePhase] = useState<'measure1' | 'measure2' | 'ask' | 'reveal'>('measure1');
  const [measurements, setMeasurements] = useState<number[]>([]);
  const [compareAnswer, setCompareAnswer] = useState<number | null>(null);

  // Drag state
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragPos, setDragPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [snapPreview, setSnapPreview] = useState<number | null>(null);

  // Visual effects
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showClickAnim, setShowClickAnim] = useState<{ x: number; y: number } | null>(null);
  const [counterPop, setCounterPop] = useState<boolean>(false);
  const [journal, setJournal] = useState<JournalEntry[]>([]);
  const [showJournal, setShowJournal] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const measureAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  // ─── Helpers ─────────────────────────────────────────────────────────────

  const getLevelConfig = useCallback((): LevelConfig => {
    return LEVELS[Math.min(level - 1, LEVELS.length - 1)];
  }, [level]);

  const getCurrentObject = useCallback((): MeasurableObject => {
    const config = getLevelConfig();
    return config.objects[Math.min(currentObjectIndex, config.objects.length - 1)];
  }, [getLevelConfig, currentObjectIndex]);

  const getUnit = useCallback((): MeasureUnit => {
    return getLevelConfig().unit;
  }, [getLevelConfig]);

  const getObjectStartX = useCallback((): number => {
    if (!measureAreaRef.current) return 60;
    const areaWidth = measureAreaRef.current.offsetWidth;
    const obj = getCurrentObject();
    return Math.max(40, (areaWidth - obj.widthPx) / 2);
  }, [getCurrentObject]);

  const getSnapPosition = useCallback((dragX: number, dragY: number): number | null => {
    const obj = getCurrentObject();
    const unit = getUnit();
    const startX = getObjectStartX();
    const nextIndex = placedUnits.length;

    if (nextIndex >= obj.lengthInUnits) return null;

    const targetX = startX + nextIndex * (unit.widthPx + UNIT_GAP) + unit.widthPx / 2;
    const measureArea = measureAreaRef.current;
    if (!measureArea) return null;

    const areaRect = measureArea.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return null;

    const relY = dragY - (areaRect.top - containerRect.top);
    const objectCenterY = measureArea.offsetHeight / 2;

    const dx = Math.abs(dragX - targetX);
    const dy = Math.abs(relY - (objectCenterY + 35));

    if (dx < SNAP_THRESHOLD + 20 && dy < SNAP_THRESHOLD + 30) {
      return nextIndex;
    }
    return null;
  }, [getCurrentObject, getUnit, getObjectStartX, placedUnits]);

  // ─── Particle System ────────────────────────────────────────────────────

  const spawnParticles = useCallback((x: number, y: number, count: number, type: 'sparkle' | 'confetti') => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: getNewId(),
        x,
        y,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 6 - 2,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.8,
        size: type === 'sparkle' ? 3 + Math.random() * 5 : 5 + Math.random() * 6,
        hue: type === 'sparkle' ? 45 + Math.random() * 20 : Math.random() * 360,
        type,
      });
    }
    particlesRef.current = [...particlesRef.current, ...newParticles];
    setParticles([...particlesRef.current]);
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;

    const animate = () => {
      particlesRef.current = particlesRef.current
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.15,
          life: p.life - (1 / 60) / p.maxLife,
        }))
        .filter(p => p.life > 0);

      setParticles([...particlesRef.current]);

      if (particlesRef.current.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [particles.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Level Init ─────────────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    const config = LEVELS[Math.min(lvl - 1, LEVELS.length - 1)];
    setPlacedUnits([]);
    setMeasureComplete(false);
    setShowResult(false);
    setCurrentObjectIndex(0);
    setSnapPreview(null);
    setIsDragging(false);
    setCounterPop(false);
    particlesRef.current = [];
    setParticles([]);

    if (config.roundType === 'estimate') {
      setEstimatePhase('guess');
      setPlayerEstimate(0);
      const target = config.objects[0].lengthInUnits;
      const options = new Set<number>();
      options.add(target);
      while (options.size < 4) {
        const offset = Math.floor(Math.random() * 5) + 1;
        const val = target + (Math.random() > 0.5 ? offset : -offset);
        if (val > 0 && val <= 12) options.add(val);
      }
      setEstimateOptions(Array.from(options).sort((a, b) => a - b));
    } else {
      setEstimatePhase('guess');
      setPlayerEstimate(0);
      setEstimateOptions([]);
    }

    if (config.roundType === 'compare') {
      setComparePhase('measure1');
      setMeasurements([]);
      setCompareAnswer(null);
    } else {
      setComparePhase('measure1');
      setMeasurements([]);
      setCompareAnswer(null);
    }
  }, []);

  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setCombo(0);
    setJournal([]);
    initLevel(1);
  };

  // ─── Place Unit Logic ───────────────────────────────────────────────────

  const placeUnit = useCallback((index: number) => {
    const obj = getCurrentObject();
    const unit = getUnit();
    const startX = getObjectStartX();

    const x = startX + index * (unit.widthPx + UNIT_GAP);
    const newUnit: PlacedUnit = {
      id: getNewId(),
      index,
      x,
      y: 0,
      settled: true,
    };

    setPlacedUnits(prev => [...prev, newUnit]);
    setCounterPop(true);
    setTimeout(() => setCounterPop(false), 300);

    // Click animation
    const clickX = x + unit.widthPx / 2;
    setShowClickAnim({ x: clickX, y: 40 });
    setTimeout(() => setShowClickAnim(null), 400);

    // Sparkle on placement
    if (containerRef.current && measureAreaRef.current) {
      const areaRect = measureAreaRef.current.getBoundingClientRect();
      const contRect = containerRef.current.getBoundingClientRect();
      spawnParticles(
        clickX,
        areaRect.top - contRect.top + areaRect.height / 2 + 35,
        6,
        'sparkle'
      );
    }

    // Check if object is fully measured
    if (index + 1 >= obj.lengthInUnits) {
      setTimeout(() => {
        setMeasureComplete(true);
        setShowResult(true);

        // Spawn celebration particles
        if (containerRef.current && measureAreaRef.current) {
          const areaRect = measureAreaRef.current.getBoundingClientRect();
          const contRect = containerRef.current.getBoundingClientRect();
          const centerX = areaRect.width / 2;
          const centerY = areaRect.top - contRect.top + areaRect.height / 2;
          spawnParticles(centerX, centerY, 25, 'sparkle');
        }
      }, 400);
    }
  }, [getCurrentObject, getUnit, getObjectStartX, spawnParticles]);

  // ─── Drag Handlers ──────────────────────────────────────────────────────

  const handleTrayDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (measureComplete) return;
    e.preventDefault();
    e.stopPropagation();

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    setIsDragging(true);
    setDragPos({
      x: clientX - containerRect.left,
      y: clientY - containerRect.top,
    });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - containerRect.left;
    const y = clientY - containerRect.top;

    setDragPos({ x, y });

    // Check for snap preview
    const snap = getSnapPosition(x, y);
    setSnapPreview(snap);
  }, [isDragging, getSnapPosition]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;

    if (snapPreview !== null) {
      placeUnit(snapPreview);
    }

    setIsDragging(false);
    setSnapPreview(null);
  }, [isDragging, snapPreview, placeUnit]);

  useEffect(() => {
    if (!isDragging) return;
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
  }, [isDragging, handleDragMove, handleDragEnd]);

  // ─── Round Logic ────────────────────────────────────────────────────────

  const handleMeasureComplete = useCallback(() => {
    const config = getLevelConfig();
    const obj = getCurrentObject();
    const unit = getUnit();

    // Add journal entry
    setJournal(prev => [...prev, {
      objectName: obj.name,
      unitName: unit.namePlural,
      count: obj.lengthInUnits,
      level,
    }]);

    if (config.roundType === 'compare') {
      if (comparePhase === 'measure1') {
        setMeasurements(prev => [...prev, obj.lengthInUnits]);
        setTimeout(() => {
          setComparePhase('measure2');
          setCurrentObjectIndex(1);
          setPlacedUnits([]);
          setMeasureComplete(false);
          setShowResult(false);
        }, 1800);
      } else if (comparePhase === 'measure2') {
        setMeasurements(prev => [...prev, obj.lengthInUnits]);
        setTimeout(() => {
          setComparePhase('ask');
          setShowResult(false);
        }, 1800);
      }
    } else if (config.roundType === 'estimate') {
      if (estimatePhase === 'measure') {
        setTimeout(() => {
          setEstimatePhase('reveal');
          const obj = getCurrentObject();
          const diff = Math.abs(playerEstimate - obj.lengthInUnits);
          let bonus = 0;
          if (diff === 0) {
            bonus = 50;
            setCombo(prev => prev + 1);
          } else if (diff === 1) {
            bonus = 20;
          } else {
            setCombo(0);
          }
          const comboMultiplier = combo > 0 && diff === 0 ? combo + 1 : 1;
          setScore(prev => prev + (10 + bonus) * comboMultiplier);

          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            spawnParticles(rect.width / 2, rect.height / 2, diff === 0 ? 40 : 15, diff === 0 ? 'confetti' : 'sparkle');
          }
        }, 1200);
      }
    } else {
      // Simple measure
      setScore(prev => prev + 10);
    }
  }, [getLevelConfig, getCurrentObject, getUnit, comparePhase, estimatePhase, playerEstimate, combo, level, spawnParticles]);

  // Watch for measure complete
  useEffect(() => {
    if (measureComplete && showResult) {
      handleMeasureComplete();
    }
  }, [measureComplete, showResult]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleEstimateChoice = (value: number) => {
    setPlayerEstimate(value);
    setEstimatePhase('measure');
    setPlacedUnits([]);
    setMeasureComplete(false);
    setShowResult(false);
  };

  const handleCompareAnswer = (objectIdx: number) => {
    setCompareAnswer(objectIdx);
    const config = getLevelConfig();
    const correct = measurements[0] >= measurements[1] ? 0 : 1;
    const isCorrect = objectIdx === correct;

    if (isCorrect) {
      setScore(prev => prev + 30);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        spawnParticles(rect.width / 2, rect.height / 2, 30, 'confetti');
      }
    }

    setTimeout(() => {
      setComparePhase('reveal');
    }, 500);
  };

  const advanceLevel = () => {
    if (level >= 10) {
      setGameState('gameComplete');
      return;
    }

    const nextLvl = level + 1;
    setLevel(nextLvl);
    setGameState('playing');
    initLevel(nextLvl);
  };

  const handleContinue = () => {
    setGameState('levelComplete');
  };

  // ─── Render helpers ─────────────────────────────────────────────────────

  const renderMeasureObject = (obj: MeasurableObject, compact = false) => {
    const height = compact ? obj.heightPx * 0.7 : obj.heightPx;
    return (
      <div className={`measure-object ${obj.cssShape} ${compact ? 'compact' : ''}`} style={{
        width: obj.widthPx,
        height: height,
        '--obj-color1': obj.color1,
        '--obj-color2': obj.color2,
      } as React.CSSProperties}>
        <span className="object-label">{obj.label}</span>
      </div>
    );
  };

  const renderUnitInTray = () => {
    const unit = getUnit();
    return (
      <div
        className={`tray-unit ${unit.cssClass}`}
        style={{ '--unit-color1': unit.color1, '--unit-color2': unit.color2 } as React.CSSProperties}
        onMouseDown={handleTrayDragStart}
        onTouchStart={handleTrayDragStart}
      >
        <div className="unit-inner" />
      </div>
    );
  };

  const renderPlacedUnits = () => {
    const unit = getUnit();
    return placedUnits.map((pu, idx) => (
      <div
        key={pu.id}
        className={`placed-unit ${unit.cssClass} place-anim`}
        style={{
          left: pu.x,
          '--unit-color1': unit.color1,
          '--unit-color2': unit.color2,
          animationDelay: `${idx * 0.05}s`,
        } as React.CSSProperties}
      >
        <div className="unit-inner" />
        <span className="unit-number">{idx + 1}</span>
      </div>
    ));
  };

  const renderSnapGhost = () => {
    if (snapPreview === null || !measureAreaRef.current) return null;
    const unit = getUnit();
    const startX = getObjectStartX();
    const x = startX + snapPreview * (unit.widthPx + UNIT_GAP);
    return (
      <div
        className={`snap-ghost ${unit.cssClass}`}
        style={{
          left: x,
          width: unit.widthPx,
          height: unit.heightPx,
          '--unit-color1': unit.color1,
          '--unit-color2': unit.color2,
        } as React.CSSProperties}
      />
    );
  };

  const renderDragUnit = () => {
    if (!isDragging) return null;
    const unit = getUnit();
    return (
      <div
        className={`drag-unit ${unit.cssClass}`}
        style={{
          left: dragPos.x,
          top: dragPos.y,
          width: unit.widthPx,
          height: unit.heightPx,
          '--unit-color1': unit.color1,
          '--unit-color2': unit.color2,
        } as React.CSSProperties}
      >
        <div className="unit-inner" />
      </div>
    );
  };

  const renderParticles = () => (
    <>
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
            '--p-hue': p.hue,
            transform: p.type === 'confetti' ? `rotate(${p.vx * 30}deg)` : 'none',
          } as React.CSSProperties}
        />
      ))}
    </>
  );

  // ─── INTRO SCREEN ──────────────────────────────────────────────────────

  if (gameState === 'intro') {
    return (
      <div className="footstep-explorer">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            <div className="compass-rose" />
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-footprint" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 4}s`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className="explorer-avatar intro-avatar">
              <div className="avatar-hat" />
              <div className="avatar-face" />
              <div className="avatar-body" />
            </div>
            <div className="logo">
              <h1>Footstep Explorer</h1>
            </div>
            <p className="tagline">Measure Everything You Find!</p>
            <div className="instructions-card">
              <div className="map-scroll">
                <h3>Explorer&rsquo;s Guide</h3>
                <div className="instruction">
                  <div className="instruction-icon">
                    <div className="mini-paperclip" />
                  </div>
                  <p><strong>DRAG</strong> units from the tray and <span className="hl-place">PLACE</span> them along objects</p>
                </div>
                <div className="instruction">
                  <div className="instruction-icon">
                    <span className="count-demo">1... 2... 3!</span>
                  </div>
                  <p>Count up as each unit <span className="hl-snap">SNAPS</span> into place!</p>
                </div>
                <div className="instruction">
                  <div className="instruction-icon">
                    <span className="estimate-icon">🤔</span>
                  </div>
                  <p><strong>ESTIMATE</strong> first, then measure to check — <span className="hl-bonus">bonus points</span> for accuracy!</p>
                </div>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🗺️</span>
              Open the Map
              <span className="btn-icon">🔍</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── GAME COMPLETE ─────────────────────────────────────────────────────

  if (gameState === 'gameComplete') {
    return (
      <div className="footstep-explorer">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="complete-confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                '--c-hue': Math.random() * 360,
              } as React.CSSProperties} />
            ))}
          </div>
          <div className="complete-content">
            <div className="explorer-avatar complete-avatar">
              <div className="avatar-hat" />
              <div className="avatar-face celebrate" />
              <div className="avatar-body" />
            </div>
            <h1 className="complete-title">Expedition Complete!</h1>
            <p className="complete-sub">You measured everything on the map!</p>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Objects Measured</span>
                <span className="score-value">{journal.length}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Best Combo</span>
                <span className="score-value">{combo}x</span>
              </div>
            </div>
            <div className="journal-final">
              <h3>Explorer&rsquo;s Journal</h3>
              <div className="journal-entries">
                {journal.map((entry, i) => (
                  <div key={i} className="journal-entry">
                    <span className="je-object">{entry.objectName}</span>
                    <span className="je-equals">=</span>
                    <span className="je-count">{entry.count} {entry.unitName}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="complete-buttons">
              <button className="start-btn" onClick={startGame}>
                <span className="btn-icon">🗺️</span>
                New Expedition
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── LEVEL COMPLETE ────────────────────────────────────────────────────

  if (gameState === 'levelComplete') {
    const config = getLevelConfig();
    const obj = config.objects[0];
    const unit = getUnit();

    return (
      <div className="footstep-explorer">
        <style>{styles}</style>
        <div className="level-complete-screen">
          <div className="complete-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="complete-confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                '--c-hue': Math.random() * 360,
              } as React.CSSProperties} />
            ))}
          </div>
          <div className="complete-content">
            <h1 className="level-title">Level {level} Complete!</h1>
            <div className="level-result-card">
              {config.roundType === 'estimate' && (
                <div className="estimate-result">
                  <p className="result-text">
                    The <strong>{obj.name}</strong> is <strong>{obj.lengthInUnits} {unit.namePlural}</strong> long!
                  </p>
                  <p className="estimate-text">
                    Your guess: {playerEstimate} — {playerEstimate === obj.lengthInUnits ? 'Perfect!' : Math.abs(playerEstimate - obj.lengthInUnits) === 1 ? 'So close!' : 'Keep practising!'}
                  </p>
                </div>
              )}
              {config.roundType === 'compare' && (
                <div className="compare-result">
                  <p className="result-text">
                    {config.objects[0].name}: {measurements[0]} {unit.namePlural}
                  </p>
                  <p className="result-text">
                    {config.objects[1].name}: {measurements[1]} {unit.namePlural}
                  </p>
                  <p className="compare-answer-text">
                    The <strong>{measurements[0] >= measurements[1] ? config.objects[0].name : config.objects[1].name}</strong> is longer!
                  </p>
                </div>
              )}
              {config.roundType === 'measure' && (
                <p className="result-text">
                  The <strong>{obj.name}</strong> is <strong>{obj.lengthInUnits} {unit.namePlural}</strong> long!
                </p>
              )}
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Score</span>
                <span className="score-value">{score}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="start-btn" onClick={advanceLevel}>
                {level < 10 ? `Level ${level + 1} →` : 'Final Results'}
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── PLAYING SCREEN ────────────────────────────────────────────────────

  const config = getLevelConfig();
  const currentObj = getCurrentObject();
  const unit = getUnit();
  const roundType = config.roundType;

  const canDrag = !measureComplete && (roundType !== 'estimate' || estimatePhase === 'measure') && (roundType !== 'compare' || comparePhase === 'measure1' || comparePhase === 'measure2');

  return (
    <div className="footstep-explorer">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">
              <span className="badge-compass">🧭</span>
              Level {level}
            </div>
          </div>
          <div className="header-center">
            <div className="round-type-badge">
              {roundType === 'measure' && '📏 Measure'}
              {roundType === 'compare' && '⚖️ Compare'}
              {roundType === 'estimate' && '🤔 Estimate'}
            </div>
          </div>
          <div className="header-right">
            <button className="journal-btn" onClick={() => setShowJournal(!showJournal)}>
              📒 <span className="journal-count">{journal.length}</span>
            </button>
            <div className="score-badge">
              <span className="score-star">⭐</span>
              <span>{score}</span>
              {combo > 1 && <span className="combo-badge">{combo}x</span>}
            </div>
          </div>
        </div>

        {/* Journal overlay */}
        {showJournal && (
          <div className="journal-overlay" onClick={() => setShowJournal(false)}>
            <div className="journal-panel" onClick={e => e.stopPropagation()}>
              <h3>Explorer&rsquo;s Journal</h3>
              {journal.length === 0 ? (
                <p className="journal-empty">Start measuring to fill your journal!</p>
              ) : (
                <div className="journal-entries">
                  {journal.map((entry, i) => (
                    <div key={i} className="journal-entry">
                      <span className="je-object">{entry.objectName}</span>
                      <span className="je-equals">=</span>
                      <span className="je-count">{entry.count} {entry.unitName}</span>
                    </div>
                  ))}
                </div>
              )}
              <button className="journal-close" onClick={() => setShowJournal(false)}>Close</button>
            </div>
          </div>
        )}

        {/* Estimate phase - guess */}
        {roundType === 'estimate' && estimatePhase === 'guess' && (
          <div className="estimate-guess-area">
            <div className="estimate-prompt">
              <p className="estimate-question">How many <strong>{unit.namePlural}</strong> long do you think the <strong>{currentObj.name}</strong> is?</p>
              <div className="estimate-object-preview">
                {renderMeasureObject(currentObj)}
              </div>
              <div className="estimate-options">
                {estimateOptions.map(val => (
                  <button key={val} className="estimate-option" onClick={() => handleEstimateChoice(val)}>
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Estimate reveal */}
        {roundType === 'estimate' && estimatePhase === 'reveal' && (
          <div className="estimate-reveal-area">
            <div className="reveal-card">
              <div className="reveal-result">
                {playerEstimate === currentObj.lengthInUnits ? (
                  <>
                    <span className="reveal-emoji">🎯</span>
                    <h2>Perfect Guess!</h2>
                    <p>The {currentObj.name} is exactly {currentObj.lengthInUnits} {unit.namePlural}!</p>
                    <p className="bonus-text">+50 bonus points! {combo > 1 ? `${combo}x combo!` : ''}</p>
                  </>
                ) : Math.abs(playerEstimate - currentObj.lengthInUnits) === 1 ? (
                  <>
                    <span className="reveal-emoji">👏</span>
                    <h2>So Close!</h2>
                    <p>You guessed {playerEstimate}, it was {currentObj.lengthInUnits} {unit.namePlural}!</p>
                    <p className="bonus-text">+20 bonus points!</p>
                  </>
                ) : (
                  <>
                    <span className="reveal-emoji">🔍</span>
                    <h2>Good Try!</h2>
                    <p>You guessed {playerEstimate}, it was {currentObj.lengthInUnits} {unit.namePlural}!</p>
                  </>
                )}
              </div>
              <button className="start-btn" onClick={handleContinue}>Continue</button>
            </div>
          </div>
        )}

        {/* Compare ask phase */}
        {roundType === 'compare' && comparePhase === 'ask' && (
          <div className="compare-ask-area">
            <div className="compare-prompt">
              <h2>Which is longer?</h2>
              <div className="compare-choices">
                {config.objects.map((obj, idx) => (
                  <button key={idx} className="compare-choice" onClick={() => handleCompareAnswer(idx)}>
                    <div className="choice-object">{renderMeasureObject(obj, true)}</div>
                    <span className="choice-label">{obj.name}</span>
                    <span className="choice-measurement">{measurements[idx]} {unit.namePlural}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Compare reveal */}
        {roundType === 'compare' && comparePhase === 'reveal' && (
          <div className="compare-reveal-area">
            <div className="reveal-card">
              <div className="reveal-result">
                {compareAnswer === (measurements[0] >= measurements[1] ? 0 : 1) ? (
                  <>
                    <span className="reveal-emoji">🎉</span>
                    <h2>Correct!</h2>
                  </>
                ) : (
                  <>
                    <span className="reveal-emoji">💡</span>
                    <h2>Not quite!</h2>
                  </>
                )}
                <p>
                  {config.objects[0].name}: {measurements[0]} {unit.namePlural}<br />
                  {config.objects[1].name}: {measurements[1]} {unit.namePlural}
                </p>
                <p className="compare-conclusion">
                  The <strong>{measurements[0] >= measurements[1] ? config.objects[0].name : config.objects[1].name}</strong> is longer!
                </p>
              </div>
              <button className="start-btn" onClick={handleContinue}>Continue</button>
            </div>
          </div>
        )}

        {/* Measurement Area */}
        {canDrag && (
          <div className="measure-area" ref={measureAreaRef}>
            <div className="measure-prompt">
              {roundType === 'compare' && comparePhase === 'measure1' && (
                <p>Measure the <strong>{currentObj.name}</strong> (Object 1 of 2)</p>
              )}
              {roundType === 'compare' && comparePhase === 'measure2' && (
                <p>Now measure the <strong>{currentObj.name}</strong> (Object 2 of 2)</p>
              )}
              {roundType === 'estimate' && estimatePhase === 'measure' && (
                <p>Now measure to check! You guessed <strong>{playerEstimate}</strong></p>
              )}
              {roundType === 'measure' && !measureComplete && (
                <p>Measure the <strong>{currentObj.name}</strong> with <strong>{unit.namePlural}</strong></p>
              )}
            </div>

            <div className="object-row">
              {renderMeasureObject(currentObj)}
            </div>

            <div className="units-row" style={{ width: currentObj.widthPx }}>
              {renderPlacedUnits()}
              {renderSnapGhost()}
              {showClickAnim && (
                <div className="click-burst" style={{ left: showClickAnim.x, top: showClickAnim.y }} />
              )}
            </div>

            {/* Counter */}
            <div className={`unit-counter ${counterPop ? 'pop' : ''}`}>
              {placedUnits.length > 0 ? (
                <span>{placedUnits.length} {placedUnits.length === 1 ? unit.name : unit.namePlural}</span>
              ) : (
                <span>Drag {unit.namePlural} here!</span>
              )}
            </div>

            {/* Result announcement */}
            {showResult && (
              <div className="result-announcement">
                <p>The {currentObj.name} is <strong>{currentObj.lengthInUnits} {unit.namePlural}</strong> long!</p>
                {roundType === 'measure' && (
                  <button className="continue-btn" onClick={handleContinue}>Continue</button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Unit Tray */}
        {canDrag && !measureComplete && (
          <div className="unit-tray">
            <div className="tray-label">Drag a {unit.name}:</div>
            <div className="tray-units">
              {[0, 1, 2].map(i => (
                <div key={i} className="tray-slot">
                  {renderUnitInTray()}
                </div>
              ))}
            </div>
            <div className="tray-hint">
              {placedUnits.length === 0 ? 'Drag up to the object!' : `${currentObj.lengthInUnits - placedUnits.length} more to go`}
            </div>
          </div>
        )}

        {/* Dragged unit */}
        {renderDragUnit()}

        {/* Particles */}
        {renderParticles()}

        {/* Explorer avatar */}
        <div className="explorer-avatar game-avatar">
          <div className="avatar-hat" />
          <div className="avatar-face" />
          <div className="avatar-body" />
          <div className="avatar-clipboard" />
        </div>
      </div>
    </div>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .footstep-explorer {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(170deg, #f5e6c8 0%, #e8d5a8 30%, #d4c494 60%, #c9b88a 100%);
    position: relative;
  }

  /* ─── Intro ──────────────────────────────────────────────────── */

  .intro-screen, .complete-screen, .level-complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .compass-rose {
    position: absolute;
    top: 10%;
    right: 8%;
    width: 120px;
    height: 120px;
    border: 3px solid rgba(139,90,43,0.2);
    border-radius: 50%;
    animation: compassSpin 20s linear infinite;
  }

  .compass-rose::before {
    content: '✦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    color: rgba(139,90,43,0.3);
  }

  @keyframes compassSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .bg-footprint {
    position: absolute;
    width: 24px;
    height: 36px;
    background: rgba(139,90,43,0.08);
    border-radius: 40% 40% 30% 30%;
    animation: footFade 5s ease-in-out infinite;
  }

  @keyframes footFade {
    0%, 100% { opacity: 0.05; }
    50% { opacity: 0.15; }
  }

  .intro-content, .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 520px;
    width: 100%;
  }

  .logo { margin-bottom: 0.3rem; }

  .logo h1 {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    color: #5a3e1b;
    text-shadow: 0 2px 4px rgba(90,62,27,0.15);
  }

  .tagline { color: #8b6f47; font-size: 1.1rem; margin-bottom: 1.5rem; }

  .instructions-card {
    margin-bottom: 1.5rem;
  }

  .map-scroll {
    background: #faf0db;
    border: 3px solid #c9a96e;
    border-radius: 16px;
    padding: 1.2rem 1.5rem;
    box-shadow: 0 4px 20px rgba(139,90,43,0.15), inset 0 0 30px rgba(201,169,110,0.1);
    position: relative;
  }

  .map-scroll::before {
    content: '';
    position: absolute;
    top: -8px; left: 20%;
    width: 60%;
    height: 16px;
    background: #c9a96e;
    border-radius: 8px 8px 0 0;
  }

  .map-scroll h3 { color: #5a3e1b; font-size: 1.1rem; margin-bottom: 1rem; }

  .instruction {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .instruction:last-child { margin-bottom: 0; }

  .instruction-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(139,90,43,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .mini-paperclip {
    width: 22px;
    height: 10px;
    border: 2px solid #999;
    border-radius: 5px;
    position: relative;
  }

  .mini-paperclip::after {
    content: '';
    position: absolute;
    right: -2px;
    top: -2px;
    width: 8px;
    height: 14px;
    border: 2px solid #999;
    border-left: none;
    border-radius: 0 7px 7px 0;
  }

  .count-demo { font-size: 0.8rem; font-weight: 800; color: #5a3e1b; }
  .estimate-icon { font-size: 1.3rem; }

  .instruction p { color: #6b5235; font-size: 0.9rem; line-height: 1.3; }
  .hl-place { color: #27ae60; font-weight: 700; }
  .hl-snap { color: #e67e22; font-weight: 700; }
  .hl-bonus { color: #e74c3c; font-weight: 700; }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #8b5e3c, #a0724e);
    border: 3px solid #6b4226;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 24px rgba(107,66,38,0.3);
  }

  .start-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(107,66,38,0.4);
    background: linear-gradient(135deg, #a0724e, #b8865e);
  }

  .start-btn:active {
    transform: translateY(0);
  }

  .btn-icon { font-size: 1.3rem; }

  /* ─── Explorer Avatar ────────────────────────────────────────── */

  .explorer-avatar {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
  }

  .intro-avatar {
    margin-bottom: 1rem;
    animation: avatarBounce 2s ease-in-out infinite;
  }

  .game-avatar {
    position: absolute;
    bottom: 80px;
    left: 12px;
    transform: scale(0.7);
    z-index: 5;
    opacity: 0.9;
  }

  .complete-avatar {
    margin-bottom: 1rem;
    animation: avatarCelebrate 0.6s ease-in-out infinite;
  }

  @keyframes avatarBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  @keyframes avatarCelebrate {
    0%, 100% { transform: translateY(0) rotate(-3deg); }
    50% { transform: translateY(-8px) rotate(3deg); }
  }

  .avatar-hat {
    width: 40px;
    height: 18px;
    background: linear-gradient(to bottom, #8b5e3c, #6b4226);
    border-radius: 50% 50% 10% 10%;
    position: relative;
    z-index: 2;
  }

  .avatar-hat::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: -6px;
    width: 52px;
    height: 8px;
    background: #6b4226;
    border-radius: 50%;
  }

  .avatar-face {
    width: 32px;
    height: 32px;
    background: linear-gradient(to bottom, #f5cba7, #e0ac69);
    border-radius: 50%;
    position: relative;
    margin-top: -2px;
  }

  .avatar-face::before {
    content: '• •';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 6px;
    color: #5a3e1b;
    letter-spacing: 6px;
  }

  .avatar-face::after {
    content: '◡';
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: #5a3e1b;
  }

  .avatar-face.celebrate::after {
    content: '◠';
    font-size: 12px;
  }

  .avatar-body {
    width: 36px;
    height: 24px;
    background: linear-gradient(to bottom, #3498db, #2980b9);
    border-radius: 8px 8px 12px 12px;
    margin-top: -2px;
  }

  .avatar-clipboard {
    position: absolute;
    right: -16px;
    bottom: 8px;
    width: 14px;
    height: 18px;
    background: #f5e6c8;
    border: 2px solid #c9a96e;
    border-radius: 2px;
  }

  .avatar-clipboard::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 2px;
    width: 8px;
    height: 6px;
    background: #c9a96e;
    border-radius: 2px;
  }

  /* ─── Game Screen ────────────────────────────────────────────── */

  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    touch-action: none;
  }

  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: linear-gradient(to bottom, rgba(90,62,27,0.15), transparent);
    z-index: 50;
    flex-shrink: 0;
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.5rem; }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(90,62,27,0.15);
    border: 2px solid rgba(90,62,27,0.2);
    border-radius: 10px;
    color: #5a3e1b;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif;
  }

  .back-btn:hover { background: rgba(90,62,27,0.25); }

  .level-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #8b5e3c, #a0724e);
    border-radius: 16px;
    font-weight: 700;
    color: white;
    font-size: 0.85rem;
  }

  .badge-compass { font-size: 0.9rem; }

  .round-type-badge {
    padding: 0.4rem 0.8rem;
    background: rgba(90,62,27,0.1);
    border: 2px solid rgba(90,62,27,0.15);
    border-radius: 16px;
    font-weight: 700;
    color: #5a3e1b;
    font-size: 0.85rem;
  }

  .journal-btn {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.7rem;
    background: rgba(201,169,110,0.3);
    border: 2px solid rgba(201,169,110,0.5);
    border-radius: 16px;
    font-size: 0.85rem;
    cursor: pointer;
    color: #5a3e1b;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    transition: all 0.2s ease;
  }

  .journal-btn:hover { background: rgba(201,169,110,0.5); }

  .journal-count {
    background: #8b5e3c;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.7rem;
    background: rgba(243,156,18,0.15);
    border: 2px solid rgba(243,156,18,0.3);
    border-radius: 16px;
    color: #a0724e;
    font-weight: 800;
    font-size: 0.9rem;
  }

  .score-star { font-size: 0.9rem; }

  .combo-badge {
    background: #e74c3c;
    color: white;
    padding: 0.1rem 0.4rem;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 800;
    animation: comboPulse 0.6s ease-in-out infinite;
  }

  @keyframes comboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }

  /* ─── Measure Area ───────────────────────────────────────────── */

  .measure-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    position: relative;
    min-height: 0;
  }

  .measure-prompt {
    margin-bottom: 0.8rem;
    text-align: center;
  }

  .measure-prompt p {
    color: #5a3e1b;
    font-size: 1rem;
    font-weight: 600;
  }

  .object-row {
    display: flex;
    justify-content: center;
    margin-bottom: 0.4rem;
    position: relative;
  }

  .units-row {
    position: relative;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .unit-counter {
    margin-top: 0.6rem;
    padding: 0.5rem 1.2rem;
    background: rgba(90,62,27,0.1);
    border: 2px solid rgba(90,62,27,0.15);
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: 800;
    color: #5a3e1b;
    transition: transform 0.2s ease;
  }

  .unit-counter.pop {
    animation: counterPop 0.3s ease;
  }

  @keyframes counterPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.25); }
    100% { transform: scale(1); }
  }

  .result-announcement {
    margin-top: 0.8rem;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, rgba(39,174,96,0.15), rgba(46,204,113,0.15));
    border: 2px solid rgba(39,174,96,0.3);
    border-radius: 16px;
    text-align: center;
    animation: resultSlide 0.5s ease;
  }

  @keyframes resultSlide {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .result-announcement p {
    color: #1e8449;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .continue-btn {
    padding: 0.5rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    background: #27ae60;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .continue-btn:hover { background: #2ecc71; transform: translateY(-1px); }

  /* ─── Measurable Objects (CSS Shapes) ────────────────────────── */

  .measure-object {
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--obj-color1), var(--obj-color2));
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
  }

  .measure-object.compact { transform: scale(0.8); }

  .object-label {
    font-size: 0.7rem;
    font-weight: 700;
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .shape-pencil {
    border-radius: 4px 12px 12px 4px;
    position: relative;
  }

  .shape-pencil::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--obj-color2) transparent transparent;
  }

  .shape-pencil::after {
    content: '';
    position: absolute;
    right: -2px;
    top: 4px;
    bottom: 4px;
    width: 12px;
    background: #f8c291;
    border-radius: 0 8px 8px 0;
  }

  .shape-crayon {
    border-radius: 6px 20px 20px 6px;
  }

  .shape-crayon::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent var(--obj-color2) transparent transparent;
  }

  .shape-book {
    border-radius: 4px 8px 8px 4px;
    border-left: 4px solid rgba(0,0,0,0.2);
  }

  .shape-book::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 12px;
    right: 12px;
    height: 2px;
    background: rgba(255,255,255,0.3);
    box-shadow: 0 6px 0 rgba(255,255,255,0.2), 0 12px 0 rgba(255,255,255,0.15);
  }

  .shape-ruler {
    border-radius: 3px;
    border: 2px solid rgba(0,0,0,0.1);
  }

  .shape-ruler::after {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    right: 10px;
    height: 6px;
    background: repeating-linear-gradient(
      90deg,
      rgba(0,0,0,0.15) 0px,
      rgba(0,0,0,0.15) 1px,
      transparent 1px,
      transparent 18px
    );
  }

  .shape-shoe {
    border-radius: 8px 30px 10px 15px;
  }

  .shape-shoe::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 8px;
    background: rgba(0,0,0,0.2);
    border-radius: 0 0 10px 15px;
  }

  .shape-worm {
    border-radius: 50px;
    background: repeating-linear-gradient(
      90deg,
      var(--obj-color1) 0px,
      var(--obj-color1) 12px,
      var(--obj-color2) 12px,
      var(--obj-color2) 24px
    ) !important;
  }

  .shape-worm::before {
    content: '●';
    position: absolute;
    right: -4px;
    font-size: 0.6rem;
    color: #333;
  }

  .shape-banana {
    border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
    transform: rotate(-5deg);
  }

  .shape-snake {
    border-radius: 50px;
    position: relative;
  }

  .shape-snake::before {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 8px;
    border-color: transparent transparent transparent var(--obj-color2);
  }

  .shape-snake::after {
    content: '◉';
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.5rem;
    color: white;
  }

  .shape-caterpillar {
    border-radius: 50px;
    background: repeating-radial-gradient(
      circle at 12px center,
      var(--obj-color1) 0px,
      var(--obj-color2) 12px
    ) !important;
    background-image: repeating-linear-gradient(
      90deg,
      var(--obj-color1) 0px,
      var(--obj-color1) 10px,
      var(--obj-color2) 10px,
      var(--obj-color2) 20px
    ) !important;
  }

  .shape-ribbon {
    border-radius: 3px;
    background: repeating-linear-gradient(
      45deg,
      var(--obj-color1),
      var(--obj-color1) 6px,
      var(--obj-color2) 6px,
      var(--obj-color2) 12px
    ) !important;
  }

  .shape-spoon {
    border-radius: 20px 50% 50% 20px;
  }

  .shape-spoon::before {
    content: '';
    position: absolute;
    right: -2px;
    top: 2px;
    bottom: 2px;
    width: 30%;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
  }

  .shape-feather {
    border-radius: 2px 50% 50% 2px;
    position: relative;
  }

  .shape-feather::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(0,0,0,0.2);
    transform: translateY(-50%);
  }

  /* ─── Measurement Units ──────────────────────────────────────── */

  .tray-unit, .placed-unit, .drag-unit, .snap-ghost {
    width: 44px;
    height: 20px;
    position: relative;
    cursor: grab;
  }

  .placed-unit {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: default;
  }

  .drag-unit {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 200;
    cursor: grabbing;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
    pointer-events: none;
  }

  .snap-ghost {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.35;
    pointer-events: none;
    animation: ghostPulse 0.8s ease-in-out infinite;
  }

  @keyframes ghostPulse {
    0%, 100% { opacity: 0.25; transform: translateY(-50%) scale(1); }
    50% { opacity: 0.45; transform: translateY(-50%) scale(1.05); }
  }

  /* Paperclip */
  .unit-paperclip {
    width: 44px;
    height: 20px;
  }

  .unit-paperclip .unit-inner {
    width: 100%;
    height: 100%;
    border: 3px solid var(--unit-color1);
    border-radius: 10px;
    position: relative;
  }

  .unit-paperclip .unit-inner::after {
    content: '';
    position: absolute;
    right: 2px;
    top: -3px;
    width: 14px;
    height: 26px;
    border: 3px solid var(--unit-color2);
    border-left: none;
    border-radius: 0 13px 13px 0;
  }

  /* Block */
  .unit-block {
    width: 40px;
    height: 38px;
  }

  .unit-block .unit-inner {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--unit-color1), var(--unit-color2));
    border-radius: 4px;
    border: 2px solid rgba(0,0,0,0.1);
    box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1);
  }

  /* Handspan */
  .unit-handspan {
    width: 56px;
    height: 32px;
  }

  .unit-handspan .unit-inner {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--unit-color1), var(--unit-color2));
    border-radius: 8px 8px 20px 20px;
    position: relative;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .unit-handspan .unit-inner::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 4px;
    width: 6px;
    height: 12px;
    background: var(--unit-color1);
    border-radius: 3px 3px 0 0;
    box-shadow:
      9px 0 0 var(--unit-color1),
      18px -2px 0 var(--unit-color1),
      27px 0 0 var(--unit-color1),
      37px 3px 0 var(--unit-color1);
  }

  /* Footstep */
  .unit-footstep {
    width: 52px;
    height: 28px;
  }

  .unit-footstep .unit-inner {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--unit-color1), var(--unit-color2));
    border-radius: 35% 35% 25% 25%;
    position: relative;
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  }

  .unit-footstep .unit-inner::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 6px;
    width: 8px;
    height: 8px;
    background: var(--unit-color1);
    border-radius: 50%;
    box-shadow:
      10px -2px 0 var(--unit-color1),
      20px -2px 0 var(--unit-color1),
      29px 0 0 var(--unit-color1),
      36px 4px 0 var(--unit-color1);
  }

  .unit-number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.65rem;
    font-weight: 900;
    color: rgba(255,255,255,0.9);
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    z-index: 2;
  }

  .place-anim {
    animation: placeSnap 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes placeSnap {
    0% { transform: translateY(-50%) scale(0.3); opacity: 0; }
    60% { transform: translateY(-50%) scale(1.15); opacity: 1; }
    100% { transform: translateY(-50%) scale(1); opacity: 1; }
  }

  /* ─── Unit Tray ──────────────────────────────────────────────── */

  .unit-tray {
    padding: 0.6rem 1rem;
    background: linear-gradient(to top, rgba(90,62,27,0.12), transparent);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    flex-shrink: 0;
    z-index: 20;
  }

  .tray-label {
    font-size: 0.8rem;
    font-weight: 700;
    color: #8b6f47;
  }

  .tray-units {
    display: flex;
    gap: 1rem;
    padding: 0.6rem 1.5rem;
    background: rgba(255,255,255,0.4);
    border: 2px dashed rgba(90,62,27,0.2);
    border-radius: 16px;
  }

  .tray-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: trayBob 2s ease-in-out infinite;
  }

  .tray-slot:nth-child(2) { animation-delay: 0.3s; }
  .tray-slot:nth-child(3) { animation-delay: 0.6s; }

  @keyframes trayBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .tray-hint {
    font-size: 0.75rem;
    color: #a08060;
    font-weight: 600;
  }

  /* ─── Click Burst ────────────────────────────────────────────── */

  .click-burst {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 3px solid #f39c12;
    border-radius: 50%;
    animation: clickBurst 0.4s ease-out forwards;
    pointer-events: none;
  }

  @keyframes clickBurst {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
  }

  /* ─── Particles ──────────────────────────────────────────────── */

  .particle {
    position: absolute;
    pointer-events: none;
    z-index: 300;
    border-radius: 2px;
  }

  .particle-sparkle {
    background: radial-gradient(circle, hsl(calc(var(--p-hue)), 90%, 70%), transparent);
    border-radius: 50%;
    box-shadow: 0 0 4px hsl(calc(var(--p-hue)), 80%, 60%);
  }

  .particle-confetti {
    background: hsl(calc(var(--p-hue)), 80%, 60%);
    border-radius: 1px;
  }

  /* ─── Estimate Phase ─────────────────────────────────────────── */

  .estimate-guess-area, .estimate-reveal-area, .compare-ask-area, .compare-reveal-area {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .estimate-prompt, .compare-prompt {
    text-align: center;
    max-width: 450px;
  }

  .estimate-question {
    font-size: 1.1rem;
    color: #5a3e1b;
    font-weight: 600;
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }

  .estimate-object-preview {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .estimate-options {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .estimate-option {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    border: 3px solid rgba(90,62,27,0.2);
    background: rgba(255,255,255,0.6);
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #5a3e1b;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .estimate-option:hover {
    background: rgba(139,94,60,0.15);
    border-color: #8b5e3c;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(139,94,60,0.2);
  }

  .estimate-option:active { transform: translateY(0); }

  /* ─── Compare Phase ──────────────────────────────────────────── */

  .compare-prompt h2 {
    font-size: 1.5rem;
    color: #5a3e1b;
    margin-bottom: 1.5rem;
  }

  .compare-choices {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .compare-choice {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background: rgba(255,255,255,0.5);
    border: 3px solid rgba(90,62,27,0.2);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif;
  }

  .compare-choice:hover {
    background: rgba(139,94,60,0.1);
    border-color: #8b5e3c;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(139,94,60,0.2);
  }

  .choice-object { overflow: hidden; max-width: 180px; }
  .choice-label { font-size: 1rem; font-weight: 800; color: #5a3e1b; }
  .choice-measurement { font-size: 0.85rem; font-weight: 600; color: #8b6f47; }

  /* ─── Reveal Card ────────────────────────────────────────────── */

  .reveal-card {
    text-align: center;
    max-width: 400px;
    padding: 2rem;
    background: rgba(255,255,255,0.7);
    border: 3px solid rgba(90,62,27,0.15);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(90,62,27,0.1);
    animation: revealPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes revealPop {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .reveal-emoji { font-size: 3rem; display: block; margin-bottom: 0.5rem; }
  .reveal-result h2 { color: #5a3e1b; font-size: 1.5rem; margin-bottom: 0.5rem; }
  .reveal-result p { color: #6b5235; font-size: 1rem; margin-bottom: 0.3rem; line-height: 1.4; }
  .bonus-text { color: #e74c3c; font-weight: 700; }
  .compare-conclusion { font-size: 1.1rem; margin-top: 0.5rem; }

  .reveal-card .start-btn { margin-top: 1.2rem; }

  /* ─── Journal Overlay ────────────────────────────────────────── */

  .journal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .journal-panel {
    background: #faf0db;
    border: 3px solid #c9a96e;
    border-radius: 16px;
    padding: 1.5rem;
    max-width: 350px;
    width: 90%;
    max-height: 70vh;
    overflow-y: auto;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    animation: revealPop 0.3s ease;
  }

  .journal-panel h3 { color: #5a3e1b; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; }
  .journal-empty { color: #8b6f47; text-align: center; font-size: 0.9rem; }

  .journal-entries { display: flex; flex-direction: column; gap: 0.5rem; }

  .journal-entry {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    background: rgba(201,169,110,0.15);
    border-radius: 8px;
  }

  .je-object { font-weight: 700; color: #5a3e1b; font-size: 0.9rem; }
  .je-equals { color: #a08060; }
  .je-count { color: #8b5e3c; font-weight: 800; font-size: 0.9rem; }

  .journal-close {
    display: block;
    margin: 1rem auto 0;
    padding: 0.5rem 1.5rem;
    background: #8b5e3c;
    color: white;
    border: none;
    border-radius: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .journal-close:hover { background: #a0724e; }

  /* ─── Complete Screens ───────────────────────────────────────── */

  .complete-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .complete-confetti {
    position: absolute;
    top: -20px;
    width: 8px;
    height: 12px;
    background: hsl(calc(var(--c-hue)), 80%, 60%);
    border-radius: 2px;
    animation: confettiFall 3s ease-in infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .complete-title, .level-title {
    font-size: clamp(1.6rem, 5vw, 2.2rem);
    color: #5a3e1b;
    margin-bottom: 0.8rem;
    animation: titleBounce 0.6s ease;
  }

  @keyframes titleBounce {
    0% { transform: scale(0); }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  .complete-sub { color: #8b6f47; font-size: 1rem; margin-bottom: 1.5rem; }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem 1.2rem;
    background: rgba(255,255,255,0.5);
    border-radius: 12px;
    border: 2px solid rgba(90,62,27,0.1);
  }

  .score-label { font-size: 0.75rem; color: #8b6f47; margin-bottom: 0.2rem; font-weight: 600; }
  .score-value { font-size: 1.8rem; font-weight: 900; color: #5a3e1b; }

  .level-result-card {
    padding: 1rem 1.5rem;
    background: rgba(255,255,255,0.5);
    border: 2px solid rgba(90,62,27,0.1);
    border-radius: 16px;
    margin-bottom: 1.5rem;
  }

  .result-text { color: #5a3e1b; font-size: 1rem; font-weight: 600; margin-bottom: 0.3rem; }
  .estimate-text { color: #8b6f47; font-size: 0.95rem; }
  .compare-answer-text { color: #27ae60; font-weight: 700; font-size: 1.05rem; margin-top: 0.5rem; }

  .journal-final {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(255,255,255,0.4);
    border: 2px solid rgba(201,169,110,0.3);
    border-radius: 12px;
    max-height: 200px;
    overflow-y: auto;
  }

  .journal-final h3 { color: #5a3e1b; font-size: 1rem; margin-bottom: 0.8rem; }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .menu-btn {
    padding: 0.6rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #8b6f47;
    background: transparent;
    border: 2px solid rgba(90,62,27,0.2);
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: rgba(90,62,27,0.4); color: #5a3e1b; }

  /* ─── Responsive ─────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .game-header { padding: 0.4rem 0.5rem; }
    .header-center { display: none; }
    .level-badge { font-size: 0.75rem; padding: 0.3rem 0.6rem; }
    .measure-prompt p { font-size: 0.85rem; }
    .unit-counter { font-size: 1rem; padding: 0.4rem 0.8rem; }
    .tray-units { padding: 0.4rem 1rem; }
    .score-card { gap: 0.8rem; }
    .estimate-options { gap: 0.5rem; }
    .estimate-option { width: 50px; height: 50px; font-size: 1.2rem; }
    .compare-choices { flex-direction: column; align-items: center; }
    .game-avatar { display: none; }
    .intro-content, .complete-content { padding: 1rem; }
    .map-scroll { padding: 0.8rem 1rem; }
  }
`;
