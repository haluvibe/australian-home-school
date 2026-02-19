"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface NumberExpress120Props {
  onExit?: () => void;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameComplete' | 'gameOver';
type LevelMode = 'ascending' | 'descending' | 'fillGap';

interface TrainCar {
  id: number;
  number: number;
  placed: boolean;
  slotIndex: number | null;
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  shaking: boolean;
  coupling: boolean;
}

interface Slot {
  index: number;
  expectedNumber: number;
  filled: boolean;
  prefilled: boolean;
  carId: number | null;
  x: number;
  y: number;
}

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  hue: number;
}

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  life: number;
}

interface ScorePopup {
  id: number;
  x: number;
  y: number;
  value: number;
  opacity: number;
  life: number;
}

interface DragState {
  carId: number;
  offsetX: number;
  offsetY: number;
}

interface LevelConfig {
  start: number;
  end: number;
  carsPerSet: number;
  mode: LevelMode;
  label: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const CAR_COLORS = [
  '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6',
  '#1abc9c', '#e67e22', '#e84393', '#00b894', '#6c5ce7',
  '#fd79a8', '#00cec9', '#fab1a0', '#a29bfe', '#ffeaa7',
];

const LEVEL_CONFIGS: LevelConfig[] = [
  { start: 1, end: 10, carsPerSet: 5, mode: 'ascending', label: '1 - 10' },
  { start: 11, end: 20, carsPerSet: 5, mode: 'ascending', label: '11 - 20' },
  { start: 21, end: 40, carsPerSet: 5, mode: 'ascending', label: '21 - 40' },
  { start: 21, end: 40, carsPerSet: 5, mode: 'descending', label: '40 - 21 (reverse!)' },
  { start: 41, end: 60, carsPerSet: 5, mode: 'ascending', label: '41 - 60' },
  { start: 41, end: 60, carsPerSet: 5, mode: 'fillGap', label: '41 - 60 (fill gaps!)' },
  { start: 61, end: 100, carsPerSet: 5, mode: 'ascending', label: '61 - 100' },
  { start: 1, end: 120, carsPerSet: 5, mode: 'ascending', label: '1 - 120 Express!' },
];

const SLOT_WIDTH = 80;
const SLOT_GAP = 6;
const CAR_WIDTH = 76;
const CAR_HEIGHT = 60;
const TRACK_Y = 0.55;

let idCounter = 0;
const nextId = () => ++idCounter;

// ─── Component ───────────────────────────────────────────────────────────────

export default function NumberExpress120({ onExit }: NumberExpress120Props = {}) {
  // Screens
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');

  // Game state
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [setIndex, setSetIndex] = useState(0);
  const [totalSets, setTotalSets] = useState(0);
  const [distanceTraveled, setDistanceTraveled] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);

  // Train state
  const [cars, setCars] = useState<TrainCar[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [trainOffset, setTrainOffset] = useState(0);
  const [chugging, setChugging] = useState(false);
  const [enteringTunnel, setEnteringTunnel] = useState(false);

  // Particles
  const [smokeParticles, setSmokeParticles] = useState<SmokeParticle[]>([]);
  const [sparkParticles, setSparkParticles] = useState<SparkParticle[]>([]);
  const [confettiParticles, setConfettiParticles] = useState<ConfettiParticle[]>([]);
  const [scorePopups, setScorePopups] = useState<ScorePopup[]>([]);

  // Drag
  const [drag, setDrag] = useState<DragState | null>(null);
  const [dragPos, setDragPos] = useState<{ x: number; y: number } | null>(null);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const smokeTimerRef = useRef(0);
  const wheelRotation = useRef(0);
  const chuggingRef = useRef(false);

  // Keep refs in sync
  useEffect(() => { chuggingRef.current = chugging; }, [chugging]);

  const getSize = useCallback(() => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 800, height: 500 };
  }, []);

  // ─── Level setup ─────────────────────────────────────────────────────────

  const generateSet = useCallback((config: LevelConfig, sIdx: number): { newCars: TrainCar[]; newSlots: Slot[] } => {
    const size = getSize();
    const totalNumbers = config.end - config.start + 1;
    const numSets = Math.ceil(totalNumbers / config.carsPerSet);
    const setStart = config.start + sIdx * config.carsPerSet;
    const setEnd = Math.min(setStart + config.carsPerSet - 1, config.end);
    const numbers: number[] = [];
    for (let n = setStart; n <= setEnd; n++) numbers.push(n);

    let slotNumbers: number[];
    if (config.mode === 'descending') {
      slotNumbers = [...numbers].reverse();
    } else {
      slotNumbers = [...numbers];
    }

    // Create slots along the track
    const trackY = size.height * TRACK_Y;
    const totalSlotWidth = slotNumbers.length * (SLOT_WIDTH + SLOT_GAP);
    const slotsStartX = 180 + 20; // after locomotive
    const newSlots: Slot[] = slotNumbers.map((num, i) => ({
      index: i,
      expectedNumber: num,
      filled: false,
      prefilled: false,
      carId: null,
      x: slotsStartX + i * (SLOT_WIDTH + SLOT_GAP),
      y: trackY - CAR_HEIGHT / 2,
    }));

    // In fillGap mode, pre-fill some slots
    if (config.mode === 'fillGap') {
      const fillCount = Math.max(1, Math.floor(slotNumbers.length * 0.4));
      const indices = [...Array(slotNumbers.length).keys()];
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      const prefilledIndices = indices.slice(0, fillCount);
      prefilledIndices.forEach(idx => {
        newSlots[idx].filled = true;
        newSlots[idx].prefilled = true;
      });
    }

    // Create draggable cars for unfilled slots (shuffled on the platform)
    const unfilledNumbers = newSlots.filter(s => !s.filled).map(s => s.expectedNumber);
    // Shuffle
    for (let i = unfilledNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unfilledNumbers[i], unfilledNumbers[j]] = [unfilledNumbers[j], unfilledNumbers[i]];
    }

    const platformX = size.width - 140;
    const platformStartY = trackY - 120;
    const carsPerRow = 3;
    const newCars: TrainCar[] = unfilledNumbers.map((num, i) => {
      const row = Math.floor(i / carsPerRow);
      const col = i % carsPerRow;
      const x = platformX - col * (CAR_WIDTH + 10);
      const y = platformStartY + row * (CAR_HEIGHT + 14);
      return {
        id: nextId(),
        number: num,
        placed: false,
        slotIndex: null,
        x,
        y,
        originX: x,
        originY: y,
        color: CAR_COLORS[num % CAR_COLORS.length],
        shaking: false,
        coupling: false,
      };
    });

    void totalSlotWidth;
    void numSets;
    return { newCars, newSlots };
  }, [getSize]);

  const startSet = useCallback((lvl: number, sIdx: number) => {
    const config = LEVEL_CONFIGS[lvl - 1];
    if (!config) return;
    const totalNumbers = config.end - config.start + 1;
    const numSets = Math.ceil(totalNumbers / config.carsPerSet);
    setTotalSets(numSets);
    setSetIndex(sIdx);
    setTrainOffset(0);
    setChugging(false);
    setEnteringTunnel(false);
    setSparkParticles([]);
    setConfettiParticles([]);
    setScorePopups([]);

    const { newCars, newSlots } = generateSet(config, sIdx);
    setCars(newCars);
    setSlots(newSlots);
  }, [generateSet]);

  const startLevel = useCallback((lvl: number) => {
    setLevel(lvl);
    setCombo(0);
    startSet(lvl, 0);
  }, [startSet]);

  const startGame = () => {
    setGameScreen('playing');
    setScore(0);
    setLives(3);
    setCombo(0);
    setBestCombo(0);
    setDistanceTraveled(0);
    startLevel(1);
  };

  // ─── Particles (requestAnimationFrame) ───────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'playing' && gameScreen !== 'levelComplete') {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;

      // Wheel rotation
      if (chuggingRef.current) {
        wheelRotation.current += 8 * dt;
      }

      // Smoke from locomotive
      smokeTimerRef.current += dt;
      if (smokeTimerRef.current > (chuggingRef.current ? 1.5 : 5)) {
        smokeTimerRef.current = 0;
        setSmokeParticles(prev => {
          const size = containerRef.current ? { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight } : { width: 800, height: 500 };
          const newP: SmokeParticle = {
            id: nextId(),
            x: 100,
            y: size.height * TRACK_Y - 90,
            vx: (Math.random() - 0.3) * 0.8,
            vy: -1.5 - Math.random() * 1.5,
            size: 12 + Math.random() * 18,
            opacity: 0.7,
            life: 1,
          };
          return [...prev.slice(-30), newP];
        });
      }

      // Update smoke
      setSmokeParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx * dt,
        y: p.y + p.vy * dt,
        size: p.size + 0.5 * dt,
        opacity: p.opacity - 0.008 * dt,
        life: p.life - 0.012 * dt,
      })).filter(p => p.life > 0 && p.opacity > 0));

      // Update sparks
      setSparkParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx * dt,
        y: p.y + p.vy * dt,
        vy: p.vy + 0.15 * dt,
        opacity: p.opacity - 0.025 * dt,
        life: p.life - 0.025 * dt,
      })).filter(p => p.life > 0));

      // Update confetti
      setConfettiParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx * dt,
        y: p.y + p.vy * dt,
        vy: p.vy + 0.08 * dt,
        rotation: p.rotation + p.rotationSpeed * dt,
        opacity: p.opacity - 0.008 * dt,
        life: p.life - 0.008 * dt,
      })).filter(p => p.life > 0));

      // Update score popups
      setScorePopups(prev => prev.map(p => ({
        ...p,
        y: p.y - 1.2 * dt,
        opacity: p.opacity - 0.018 * dt,
        life: p.life - 0.018 * dt,
      })).filter(p => p.life > 0));

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [gameScreen]);

  // ─── Spark burst ─────────────────────────────────────────────────────────

  const spawnSparks = useCallback((x: number, y: number, count: number, hue: number) => {
    const newSparks: SparkParticle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 2 + Math.random() * 4;
      newSparks.push({
        id: nextId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 3 + Math.random() * 4,
        opacity: 1,
        life: 1,
        hue,
      });
    }
    setSparkParticles(prev => [...prev, ...newSparks]);
  }, []);

  const spawnConfetti = useCallback((x: number, y: number, count: number) => {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e84393', '#ffd700'];
    const newConf: ConfettiParticle[] = [];
    for (let i = 0; i < count; i++) {
      newConf.push({
        id: nextId(),
        x: x + (Math.random() - 0.5) * 100,
        y: y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 6,
        vy: -3 - Math.random() * 5,
        size: 6 + Math.random() * 6,
        opacity: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
      });
    }
    setConfettiParticles(prev => [...prev, ...newConf]);
  }, []);

  const spawnScorePopup = useCallback((x: number, y: number, value: number) => {
    setScorePopups(prev => [...prev, { id: nextId(), x, y, value, opacity: 1, life: 1 }]);
  }, []);

  // ─── Set/Level completion ────────────────────────────────────────────────

  const advanceSet = useCallback(() => {
    const config = LEVEL_CONFIGS[level - 1];
    if (!config) return;
    const totalNumbers = config.end - config.start + 1;
    const numSets = Math.ceil(totalNumbers / config.carsPerSet);

    if (setIndex + 1 >= numSets) {
      // Level complete
      setEnteringTunnel(true);
      setTimeout(() => {
        setEnteringTunnel(false);
        setChugging(false);
        if (level >= LEVEL_CONFIGS.length) {
          setGameScreen('gameComplete');
        } else {
          setGameScreen('levelComplete');
        }
      }, 1800);
    } else {
      // Next set: train chugs forward
      setChugging(true);
      setDistanceTraveled(prev => prev + 50);
      setTimeout(() => {
        setChugging(false);
        startSet(level, setIndex + 1);
      }, 1500);
    }
  }, [level, setIndex, startSet]);

  // Check if all slots filled
  useEffect(() => {
    if (gameScreen !== 'playing') return;
    if (slots.length === 0) return;
    const allFilled = slots.every(s => s.filled);
    if (allFilled) {
      // Small delay then advance
      setChugging(true);
      setDistanceTraveled(prev => prev + 50);
      const size = getSize();
      spawnConfetti(size.width / 2, size.height * TRACK_Y - 40, 25);
      setTimeout(() => advanceSet(), 1600);
    }
  }, [slots, gameScreen, advanceSet, getSize, spawnConfetti]);

  // ─── Drag handling ───────────────────────────────────────────────────────

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, car: TrainCar) => {
    if (car.placed || chugging) return;
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const mx = clientX - rect.left;
    const my = clientY - rect.top;
    setDrag({ carId: car.id, offsetX: mx - car.x, offsetY: my - car.y });
    setDragPos({ x: mx, y: my });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!drag || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const mx = clientX - rect.left;
    const my = clientY - rect.top;
    setDragPos({ x: mx, y: my });

    setCars(prev => prev.map(c =>
      c.id === drag.carId ? { ...c, x: mx - drag.offsetX, y: my - drag.offsetY } : c
    ));
  }, [drag]);

  const handleDragEnd = useCallback(() => {
    if (!drag) return;
    const car = cars.find(c => c.id === drag.carId);
    if (!car) { setDrag(null); setDragPos(null); return; }

    // Check proximity to slots
    let matched = false;
    const updatedSlots = slots.map(slot => {
      if (slot.filled || matched) return slot;
      const dx = car.x - slot.x;
      const dy = car.y - slot.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 60) {
        // Check correctness
        if (car.number === slot.expectedNumber) {
          matched = true;
          return { ...slot, filled: true, carId: car.id };
        }
      }
      return slot;
    });

    if (matched) {
      const slotMatch = updatedSlots.find(s => s.carId === car.id);
      const points = 10 * (1 + combo);
      setScore(prev => prev + points);
      setCombo(prev => {
        const newCombo = prev + 1;
        if (newCombo > bestCombo) setBestCombo(newCombo);
        return newCombo;
      });
      setSlots(updatedSlots);
      setCars(prev => prev.map(c =>
        c.id === car.id
          ? { ...c, placed: true, slotIndex: slotMatch!.index, x: slotMatch!.x, y: slotMatch!.y, coupling: true }
          : c
      ));
      // Coupling animation reset
      setTimeout(() => {
        setCars(prev => prev.map(c => c.id === car.id ? { ...c, coupling: false } : c));
      }, 500);

      // Sparks + score popup at slot
      if (slotMatch) {
        spawnSparks(slotMatch.x + CAR_WIDTH / 2, slotMatch.y + CAR_HEIGHT / 2, 12, 45);
        spawnScorePopup(slotMatch.x + CAR_WIDTH / 2, slotMatch.y - 10, points);
      }
    } else {
      // Check if we were close to a slot (wrong number)
      let wasClose = false;
      for (const slot of slots) {
        if (slot.filled) continue;
        const dx = car.x - slot.x;
        const dy = car.y - slot.y;
        if (Math.sqrt(dx * dx + dy * dy) < 60) {
          wasClose = true;
          break;
        }
      }

      if (wasClose) {
        // Wrong placement
        setCombo(0);
        setLives(prev => {
          const newLives = prev - 1;
          if (newLives <= 0) {
            setTimeout(() => setGameScreen('gameOver'), 600);
          }
          return newLives;
        });
        // Shake and sparks (red)
        setCars(prev => prev.map(c =>
          c.id === car.id ? { ...c, shaking: true } : c
        ));
        spawnSparks(car.x + CAR_WIDTH / 2, car.y + CAR_HEIGHT / 2, 8, 0);
        setTimeout(() => {
          setCars(prev => prev.map(c =>
            c.id === car.id ? { ...c, shaking: false, x: c.originX, y: c.originY } : c
          ));
        }, 500);
      } else {
        // Dropped nowhere near a slot — return to origin
        setCars(prev => prev.map(c =>
          c.id === car.id ? { ...c, x: c.originX, y: c.originY } : c
        ));
      }
    }

    setDrag(null);
    setDragPos(null);
  }, [drag, cars, slots, combo, bestCombo, spawnSparks, spawnScorePopup]);

  // Attach global drag listeners
  useEffect(() => {
    if (!drag) return;
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
  }, [drag, handleDragMove, handleDragEnd]);

  // ─── Render helpers ──────────────────────────────────────────────────────

  const size = getSize();
  const trackY = size.height * TRACK_Y;
  const config = LEVEL_CONFIGS[level - 1] || LEVEL_CONFIGS[0];

  // ─── INTRO SCREEN ────────────────────────────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="ne120">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            <div className="hills" />
            <div className="intro-track" />
            <div className="intro-train">
              <div className="intro-loco">
                <div className="loco-body" />
                <div className="loco-cabin" />
                <div className="loco-smokestack" />
                <div className="loco-chimney-cap" />
                <div className="loco-wheel loco-wheel-1"><div className="wheel-spoke" /></div>
                <div className="loco-wheel loco-wheel-2"><div className="wheel-spoke" /></div>
                <div className="loco-wheel loco-wheel-3"><div className="wheel-spoke" /></div>
                <div className="loco-cowcatcher" />
                <div className="intro-smoke-1" />
                <div className="intro-smoke-2" />
                <div className="intro-smoke-3" />
              </div>
              <div className="intro-car intro-car-1"><span>1</span><div className="ic-wheel ic-w1" /><div className="ic-wheel ic-w2" /></div>
              <div className="intro-car intro-car-2"><span>2</span><div className="ic-wheel ic-w1" /><div className="ic-wheel ic-w2" /></div>
              <div className="intro-car intro-car-3"><span>3</span><div className="ic-wheel ic-w1" /><div className="ic-wheel ic-w2" /></div>
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-cloud" style={{
                left: `${10 + i * 12}%`,
                top: `${8 + (i % 3) * 6}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${18 + i * 3}s`,
                opacity: 0.3 + (i % 3) * 0.15,
                transform: `scale(${0.6 + (i % 4) * 0.2})`,
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-icon">🚂</span>
              <h1>Number Express 120</h1>
            </div>
            <p className="tagline">Build the longest number train!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-car">5</span>
                  <span className="arrow">&#10132;</span>
                  <span className="mini-slot">5</span>
                </div>
                <p><strong>DRAG</strong> numbered train cars to the correct <span className="hl-green">position</span>!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-car">3</span>
                  <span className="mini-car">4</span>
                  <span className="mini-car">5</span>
                </div>
                <p>Place numbers in <span className="hl-blue">order</span> to build the train!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="combo-icon">&#9889;</span>
                  <span className="combo-text">COMBO x3</span>
                </div>
                <p>Consecutive correct placements earn <span className="hl-gold">bonus points</span>!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">&#128642;</span>
              All Aboard!
              <span className="btn-icon">&#128648;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── LEVEL COMPLETE SCREEN ───────────────────────────────────────────────

  if (gameScreen === 'levelComplete') {
    return (
      <div className="ne120">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            <div className="hills" />
            {[...Array(12)].map((_, i) => (
              <div key={i} className="floating-star" style={{
                left: `${8 + i * 8}%`,
                top: `${15 + (i % 4) * 10}%`,
                animationDelay: `${i * 0.25}s`,
              }}>&#11088;</div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">&#127881; Level {level} Complete! &#127881;</h1>
            <p className="complete-label">{config.label}</p>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Best Combo</span>
                <span className="score-value">x{bestCombo}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Distance</span>
                <span className="score-value">{distanceTraveled}km</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={() => { setGameScreen('playing'); startLevel(level + 1); }}>
                Level {level + 1} &#10132;
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── GAME COMPLETE SCREEN ────────────────────────────────────────────────

  if (gameScreen === 'gameComplete') {
    return (
      <div className="ne120">
        <style>{styles}</style>
        <div className="complete-screen game-complete-screen">
          <div className="complete-bg">
            <div className="hills" />
            {[...Array(20)].map((_, i) => (
              <div key={i} className="floating-star" style={{
                left: `${5 + i * 4.5}%`,
                top: `${10 + (i % 5) * 12}%`,
                animationDelay: `${i * 0.15}s`,
              }}>&#11088;</div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title gc-title">&#127942; Number Express Master! &#127942;</h1>
            <p className="complete-label">You built the ultimate number train from 1 to 120!</p>
            <div className="trophy-row">
              <span className="trophy">&#128643;</span>
              <span className="trophy">&#11088;</span>
              <span className="trophy">&#128643;</span>
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Final Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Best Combo</span>
                <span className="score-value">x{bestCombo}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Total Distance</span>
                <span className="score-value">{distanceTraveled}km</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={startGame}>Play Again &#128260;</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── GAME OVER SCREEN ────────────────────────────────────────────────────

  if (gameScreen === 'gameOver') {
    return (
      <div className="ne120">
        <style>{styles}</style>
        <div className="complete-screen gameover-screen">
          <div className="complete-bg">
            <div className="hills hills-dusk" />
          </div>
          <div className="complete-content">
            <h1 className="complete-title go-title">&#128683; Out of Steam! &#128683;</h1>
            <p className="complete-label">The train ran out of lives on Level {level}.</p>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Final Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Reached Level</span>
                <span className="score-value">{level}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Distance</span>
                <span className="score-value">{distanceTraveled}km</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={startGame}>Try Again &#128260;</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── PLAYING SCREEN ──────────────────────────────────────────────────────

  return (
    <div className="ne120">
      <style>{styles}</style>
      <div className="game-screen">
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>&#8592;</button>
            <div className="level-badge">Lvl {level}</div>
            <div className="mode-badge">
              {config.mode === 'descending' ? '&#128315; Reverse' : config.mode === 'fillGap' ? '&#129513; Fill Gaps' : '&#128314; Order'}
            </div>
          </div>
          <div className="header-center">
            <div className="combo-display" style={{ opacity: combo > 0 ? 1 : 0.3 }}>
              <span className="combo-bolt">&#9889;</span>
              <span className="combo-val">x{combo}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="lives-display">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`life-heart ${i < lives ? 'alive' : 'dead'}`}>&#10084;&#65039;</span>
              ))}
            </div>
            <div className="score-badge">
              <span className="score-icon">&#11088;</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Game area */}
        <div className="game-area" ref={containerRef}>
          {/* Sky */}
          <div className="sky" />
          {/* Clouds */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="cloud" style={{
              left: `${i * 22}%`,
              top: `${5 + (i % 3) * 5}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${30 + i * 5}s`,
              transform: `scale(${0.5 + i * 0.15})`,
            }} />
          ))}
          {/* Hills */}
          <div className="hills-game" />
          {/* Track */}
          <div className="track" style={{ top: trackY }}>
            <div className="rail rail-top" />
            <div className="rail rail-bottom" />
            <div className="ties">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="tie" style={{ left: i * 30 - (trainOffset % 30) }} />
              ))}
            </div>
          </div>

          {/* Tunnel (entering between levels) */}
          {enteringTunnel && <div className="tunnel" />}

          {/* Locomotive */}
          <div className={`locomotive ${chugging ? 'chugging' : ''}`} style={{ top: trackY - 95, left: 20 - trainOffset }}>
            {/* Boiler body */}
            <div className="loco-main-body" />
            {/* Cabin */}
            <div className="loco-main-cabin">
              <div className="cabin-window" />
            </div>
            {/* Smokestack */}
            <div className="loco-main-smokestack" />
            <div className="loco-main-chimney-top" />
            {/* Headlight */}
            <div className="loco-headlight" />
            {/* Cowcatcher */}
            <div className="loco-main-cowcatcher" />
            {/* Wheels */}
            <div className="loco-main-wheel loco-mw-1" style={{ transform: `rotate(${wheelRotation.current}deg)` }}>
              <div className="wheel-cross" />
            </div>
            <div className="loco-main-wheel loco-mw-2" style={{ transform: `rotate(${wheelRotation.current}deg)` }}>
              <div className="wheel-cross" />
            </div>
            <div className="loco-main-wheel loco-mw-3 loco-mw-big" style={{ transform: `rotate(${wheelRotation.current}deg)` }}>
              <div className="wheel-cross" />
            </div>
            {/* Steam detail */}
            <div className="loco-steam-pipe" />
          </div>

          {/* Smoke particles */}
          {smokeParticles.map(p => (
            <div key={p.id} className="smoke-particle" style={{
              left: p.x, top: p.y,
              width: p.size, height: p.size,
              opacity: p.opacity,
            }} />
          ))}

          {/* Spark particles */}
          {sparkParticles.map(p => (
            <div key={p.id} className="spark-particle" style={{
              left: p.x, top: p.y,
              width: p.size, height: p.size,
              opacity: p.opacity,
              background: `hsl(${p.hue}, 100%, 60%)`,
              boxShadow: `0 0 6px hsl(${p.hue}, 100%, 70%)`,
            }} />
          ))}

          {/* Confetti */}
          {confettiParticles.map(p => (
            <div key={p.id} className="confetti-particle" style={{
              left: p.x, top: p.y,
              width: p.size, height: p.size * 0.6,
              opacity: p.opacity,
              background: p.color,
              transform: `rotate(${p.rotation}deg)`,
            }} />
          ))}

          {/* Score popups */}
          {scorePopups.map(p => (
            <div key={p.id} className="score-popup" style={{
              left: p.x, top: p.y, opacity: p.opacity,
            }}>+{p.value}</div>
          ))}

          {/* Slots on the track */}
          {slots.map(slot => (
            <div
              key={slot.index}
              className={`slot ${slot.filled ? 'slot-filled' : ''} ${slot.prefilled ? 'slot-prefilled' : ''}`}
              style={{ left: slot.x, top: slot.y, width: SLOT_WIDTH, height: CAR_HEIGHT }}
            >
              {slot.prefilled && <div className="slot-prefill-number">{slot.expectedNumber}</div>}
              {!slot.filled && !slot.prefilled && <div className="slot-hint">?</div>}
              {slot.filled && !slot.prefilled && (
                <div className="placed-car" style={{ background: CAR_COLORS[slot.expectedNumber % CAR_COLORS.length] }}>
                  <div className="car-number">{slot.expectedNumber}</div>
                  <div className="car-shine" />
                  <div className="car-wheel car-wheel-l" style={{ transform: `rotate(${wheelRotation.current}deg)` }}><div className="wheel-dot" /></div>
                  <div className="car-wheel car-wheel-r" style={{ transform: `rotate(${wheelRotation.current}deg)` }}><div className="wheel-dot" /></div>
                  <div className="car-coupler car-coupler-l" />
                  <div className="car-coupler car-coupler-r" />
                </div>
              )}
            </div>
          ))}

          {/* Draggable cars (platform) */}
          <div className="platform" style={{ top: trackY - 160, right: 10 }}>
            <div className="platform-roof" />
            <div className="platform-label">Station</div>
          </div>

          {cars.filter(c => !c.placed).map(car => (
            <div
              key={car.id}
              className={`draggable-car ${drag?.carId === car.id ? 'dragging' : ''} ${car.shaking ? 'shaking' : ''} ${car.coupling ? 'coupling' : ''}`}
              style={{
                left: car.x,
                top: car.y,
                width: CAR_WIDTH,
                height: CAR_HEIGHT,
                background: car.color,
                zIndex: drag?.carId === car.id ? 100 : 10,
              }}
              onMouseDown={(e) => handleDragStart(e, car)}
              onTouchStart={(e) => handleDragStart(e, car)}
            >
              <div className="car-number">{car.number}</div>
              <div className="car-shine" />
              <div className="car-wheel car-wheel-l"><div className="wheel-dot" /></div>
              <div className="car-wheel car-wheel-r"><div className="wheel-dot" /></div>
              <div className="car-coupler car-coupler-l" />
              <div className="car-coupler car-coupler-r" />
            </div>
          ))}

          {/* Drag ghost (for visual feedback) */}
          {drag && dragPos && (
            <div className="drag-indicator" style={{ left: dragPos.x, top: dragPos.y }} />
          )}
        </div>

        {/* Bottom bar */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">&#128071; Drag cars to matching slots</span>
            <span className="hint-set">Set {setIndex + 1} / {totalSets} &middot; {config.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── STYLES ────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .ne120 {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #1a1a2e;
  }

  /* ─── INTRO SCREEN ────────────────────────────────────────────────────── */

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
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0FF 40%, #90EE90 60%, #228B22 100%);
  }

  .hills {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background:
      radial-gradient(ellipse 180% 100% at 20% 100%, #2d8a4e 0%, transparent 60%),
      radial-gradient(ellipse 200% 100% at 80% 100%, #3a9d5e 0%, transparent 55%),
      radial-gradient(ellipse 150% 80% at 50% 100%, #45a968 0%, transparent 50%);
  }

  .hills-dusk {
    background:
      radial-gradient(ellipse 180% 100% at 20% 100%, #5a3d2b 0%, transparent 60%),
      radial-gradient(ellipse 200% 100% at 80% 100%, #6b4c3b 0%, transparent 55%),
      radial-gradient(ellipse 150% 80% at 50% 100%, #7c5c4a 0%, transparent 50%) !important;
  }

  .intro-track {
    position: absolute;
    bottom: 18%;
    left: 0;
    right: 0;
    height: 8px;
    background: #4a3728;
    box-shadow: 0 4px 0 #3a2718, 0 -4px 0 #3a2718;
  }

  .intro-track::before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 6px;
    background: repeating-linear-gradient(90deg, #6b4c3b 0px, #6b4c3b 4px, transparent 4px, transparent 22px);
  }

  /* ─── INTRO LOCOMOTIVE ────────────────────────────────────────────────── */

  .intro-train {
    position: absolute;
    bottom: calc(18% + 4px);
    left: 50%;
    transform: translateX(-60%);
    display: flex;
    align-items: flex-end;
    animation: introTrainBob 3s ease-in-out infinite;
  }

  @keyframes introTrainBob {
    0%, 100% { transform: translateX(-60%) translateY(0); }
    50% { transform: translateX(-60%) translateY(-3px); }
  }

  .intro-loco {
    position: relative;
    width: 140px;
    height: 80px;
  }

  .loco-body {
    position: absolute;
    bottom: 16px;
    left: 15px;
    width: 100px;
    height: 40px;
    background: linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 60%, #0d0d0d 100%);
    border-radius: 8px 20px 4px 4px;
    box-shadow: inset 0 2px 4px rgba(255,255,255,0.15), 0 4px 8px rgba(0,0,0,0.5);
  }

  .loco-cabin {
    position: absolute;
    bottom: 16px;
    right: 5px;
    width: 40px;
    height: 52px;
    background: linear-gradient(180deg, #c0392b 0%, #a93226 50%, #922b21 100%);
    border-radius: 4px 4px 0 0;
    box-shadow: inset 0 2px 4px rgba(255,255,255,0.2);
  }

  .loco-cabin::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 6px;
    width: 14px;
    height: 14px;
    background: rgba(135,206,235,0.6);
    border: 2px solid #7f1d1d;
    border-radius: 2px;
  }

  .loco-smokestack {
    position: absolute;
    bottom: 56px;
    left: 22px;
    width: 14px;
    height: 24px;
    background: linear-gradient(180deg, #333 0%, #1a1a1a 100%);
    border-radius: 3px 3px 0 0;
  }

  .loco-chimney-cap {
    position: absolute;
    bottom: 78px;
    left: 17px;
    width: 24px;
    height: 6px;
    background: linear-gradient(180deg, #444, #222);
    border-radius: 3px 3px 0 0;
  }

  .loco-wheel {
    position: absolute;
    bottom: 2px;
    width: 18px;
    height: 18px;
    background: radial-gradient(circle, #555 40%, #333 70%, #222 100%);
    border-radius: 50%;
    border: 2px solid #666;
    animation: introWheelSpin 2s linear infinite;
  }

  .loco-wheel-1 { left: 20px; }
  .loco-wheel-2 { left: 50px; }
  .loco-wheel-3 { left: 80px; width: 22px; height: 22px; bottom: 0; }

  @keyframes introWheelSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .wheel-spoke {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 2px;
    background: #888;
    transform: translate(-50%, -50%);
  }

  .wheel-spoke::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 70%;
    background: #888;
    transform: translate(-50%, -50%);
  }

  .loco-cowcatcher {
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 18px solid #666;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }

  .intro-smoke-1, .intro-smoke-2, .intro-smoke-3 {
    position: absolute;
    border-radius: 50%;
    background: rgba(200, 200, 200, 0.6);
    animation: introSmokePuff 3s ease-out infinite;
  }

  .intro-smoke-1 { bottom: 82px; left: 20px; width: 20px; height: 20px; }
  .intro-smoke-2 { bottom: 95px; left: 15px; width: 28px; height: 28px; animation-delay: 0.8s; }
  .intro-smoke-3 { bottom: 110px; left: 10px; width: 36px; height: 36px; animation-delay: 1.6s; opacity: 0.4; }

  @keyframes introSmokePuff {
    0% { transform: translateY(0) scale(0.6); opacity: 0.7; }
    50% { transform: translateY(-20px) scale(1); opacity: 0.4; }
    100% { transform: translateY(-40px) scale(1.3); opacity: 0; }
  }

  /* Intro cars */
  .intro-car {
    position: relative;
    width: 60px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.4rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    margin-left: 4px;
    bottom: 16px;
    box-shadow: inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.3);
  }

  .intro-car-1 { background: linear-gradient(180deg, #e74c3c, #c0392b); }
  .intro-car-2 { background: linear-gradient(180deg, #3498db, #2980b9); }
  .intro-car-3 { background: linear-gradient(180deg, #2ecc71, #27ae60); }

  .ic-wheel {
    position: absolute;
    bottom: -6px;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, #555, #222);
    border-radius: 50%;
    border: 2px solid #666;
    animation: introWheelSpin 2s linear infinite;
  }

  .ic-w1 { left: 8px; }
  .ic-w2 { right: 8px; }

  /* Clouds */
  .bg-cloud {
    position: absolute;
    width: 120px;
    height: 50px;
    background: white;
    border-radius: 50px;
    animation: cloudDrift 30s linear infinite;
  }

  .bg-cloud::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 20px;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
  }

  .bg-cloud::after {
    content: '';
    position: absolute;
    top: -12px;
    left: 55px;
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
  }

  @keyframes cloudDrift {
    from { transform: translateX(-200px); }
    to { transform: translateX(calc(100vw + 200px)); }
  }

  /* Intro content */
  .intro-content, .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .logo-icon {
    font-size: 2.5rem;
    animation: logoChug 1s ease-in-out infinite;
  }

  @keyframes logoChug {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    25% { transform: translateX(3px) rotate(1deg); }
    75% { transform: translateX(-3px) rotate(-1deg); }
  }

  .logo h1 {
    font-size: clamp(1.6rem, 6vw, 2.6rem);
    font-weight: 900;
    background: linear-gradient(135deg, #e74c3c, #f39c12, #2ecc71, #3498db);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .tagline {
    color: #2c3e50;
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-shadow: 0 1px 2px rgba(255,255,255,0.5);
  }

  .instructions-card {
    background: rgba(255,255,255,0.85);
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  }

  .instructions-card h3 {
    color: #2c3e50;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .instruction {
    margin-bottom: 1.2rem;
  }

  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .mini-car {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 30px;
    background: linear-gradient(180deg, #e74c3c, #c0392b);
    border-radius: 6px;
    color: white;
    font-weight: 900;
    font-size: 1rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  }

  .mini-slot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 30px;
    border: 3px dashed #2ecc71;
    border-radius: 6px;
    color: #2ecc71;
    font-weight: 900;
    font-size: 1rem;
    background: rgba(46,204,113,0.1);
  }

  .arrow { color: #7f8c8d; font-size: 1.4rem; }

  .combo-icon { font-size: 1.6rem; }
  .combo-text { font-size: 1rem; font-weight: 800; color: #f39c12; }

  .instruction p { color: #34495e; font-size: 0.95rem; }
  .hl-green { font-weight: 700; color: #27ae60; }
  .hl-blue { font-weight: 700; color: #2980b9; }
  .hl-gold { font-weight: 700; color: #d35400; }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(231,76,60,0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(231,76,60,0.5);
  }

  .start-btn:active, .next-btn:active {
    transform: translateY(0);
  }

  .btn-icon { font-size: 1.4rem; }

  /* ─── COMPLETE / GAMEOVER SCREENS ─────────────────────────────────────── */

  .complete-screen .complete-bg {
    background: linear-gradient(180deg, #87CEEB 0%, #FFD700 30%, #90EE90 60%, #228B22 100%);
  }

  .game-complete-screen .complete-bg {
    background: linear-gradient(180deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%);
  }

  .gameover-screen .complete-bg {
    background: linear-gradient(180deg, #4a2c2a 0%, #6b3a3a 40%, #3d2b1f 100%);
  }

  .floating-star {
    position: absolute;
    font-size: 2rem;
    animation: starFloat 2.5s ease-in-out infinite;
  }

  @keyframes starFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(15deg); }
  }

  .complete-title {
    font-size: clamp(1.6rem, 5vw, 2.4rem);
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .gc-title {
    color: #ffd700 !important;
    text-shadow: 0 2px 8px rgba(255,215,0,0.5);
  }

  .go-title {
    color: #e74c3c !important;
  }

  .complete-label {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .game-complete-screen .complete-label { color: #a0a0c0; }
  .gameover-screen .complete-label { color: #bfa09a; }

  .trophy-row {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .trophy {
    font-size: 3rem;
    animation: trophyBounce 1.5s ease-in-out infinite;
  }

  .trophy:nth-child(2) { animation-delay: 0.3s; }
  .trophy:nth-child(3) { animation-delay: 0.6s; }

  @keyframes trophyBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-12px) scale(1.1); }
  }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.8rem;
    flex-wrap: wrap;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.15);
    padding: 0.8rem 1.2rem;
    border-radius: 16px;
  }

  .score-label { font-size: 0.8rem; color: #7f8c8d; margin-bottom: 0.2rem; }
  .score-value { font-size: 1.8rem; font-weight: 900; color: #2c3e50; }
  .game-complete-screen .score-value { color: white; }
  .game-complete-screen .score-label { color: #8888aa; }
  .gameover-screen .score-value { color: #f5e6e0; }
  .gameover-screen .score-label { color: #bfa09a; }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .menu-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #7f8c8d;
    background: transparent;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: rgba(0,0,0,0.4); color: #2c3e50; }
  .game-complete-screen .menu-btn { color: #8888aa; border-color: rgba(255,255,255,0.2); }
  .game-complete-screen .menu-btn:hover { color: white; border-color: rgba(255,255,255,0.4); }
  .gameover-screen .menu-btn { color: #bfa09a; border-color: rgba(255,255,255,0.15); }
  .gameover-screen .menu-btn:hover { color: #f5e6e0; border-color: rgba(255,255,255,0.3); }

  /* ─── GAME SCREEN ─────────────────────────────────────────────────────── */

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
    padding: 0.6rem 0.8rem;
    background: rgba(0,0,0,0.5);
    z-index: 50;
    backdrop-filter: blur(8px);
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.6rem; }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(255,255,255,0.2); }

  .level-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    border-radius: 16px;
    font-weight: 700;
    color: white;
    font-size: 0.85rem;
  }

  .mode-badge {
    padding: 0.4rem 0.8rem;
    background: rgba(255,255,255,0.1);
    border-radius: 16px;
    font-weight: 600;
    color: #ccc;
    font-size: 0.75rem;
  }

  .combo-display {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1rem;
    background: rgba(243,156,18,0.2);
    border-radius: 20px;
    transition: opacity 0.3s ease;
  }

  .combo-bolt { font-size: 1.1rem; }
  .combo-val { color: #f39c12; font-weight: 800; font-size: 1.1rem; }

  .lives-display { display: flex; gap: 0.2rem; }

  .life-heart {
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .life-heart.dead {
    opacity: 0.2;
    filter: grayscale(1);
  }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(251,191,36,0.2);
    border-radius: 16px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  /* ─── GAME AREA ───────────────────────────────────────────────────────── */

  .game-area {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
  }

  .sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0FF 50%, #c8e6c9 80%, #4CAF50 100%);
  }

  .cloud {
    position: absolute;
    width: 100px;
    height: 40px;
    background: rgba(255,255,255,0.8);
    border-radius: 40px;
    animation: cloudDrift 35s linear infinite;
  }

  .cloud::before {
    content: '';
    position: absolute;
    top: -16px;
    left: 16px;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
  }

  .cloud::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 44px;
    width: 28px;
    height: 28px;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
  }

  .hills-game {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55%;
    background:
      radial-gradient(ellipse 160% 90% at 15% 100%, #388E3C 0%, transparent 55%),
      radial-gradient(ellipse 180% 80% at 75% 100%, #43A047 0%, transparent 50%),
      radial-gradient(ellipse 200% 100% at 50% 100%, #4CAF50 0%, transparent 60%);
  }

  /* ─── TRACK ───────────────────────────────────────────────────────────── */

  .track {
    position: absolute;
    left: 0;
    right: 0;
    height: 30px;
  }

  .rail {
    position: absolute;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(180deg, #888, #666, #888);
    box-shadow: 0 1px 3px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2);
  }

  .rail-top { top: 2px; }
  .rail-bottom { top: 22px; }

  .ties {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    overflow: hidden;
  }

  .tie {
    position: absolute;
    top: 4px;
    width: 10px;
    height: 22px;
    background: linear-gradient(90deg, #6d4c2a, #8B6914, #6d4c2a);
    border-radius: 1px;
  }

  /* ─── LOCOMOTIVE (IN-GAME) ────────────────────────────────────────────── */

  .locomotive {
    position: absolute;
    width: 160px;
    height: 95px;
    z-index: 20;
    transition: left 0.5s ease;
  }

  .locomotive.chugging {
    animation: locoChug 0.2s ease-in-out infinite;
  }

  @keyframes locoChug {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  .loco-main-body {
    position: absolute;
    bottom: 22px;
    left: 30px;
    width: 100px;
    height: 46px;
    background: linear-gradient(180deg, #333 0%, #1a1a1a 40%, #111 100%);
    border-radius: 10px 24px 4px 4px;
    box-shadow:
      inset 0 3px 6px rgba(255,255,255,0.12),
      inset 0 -3px 8px rgba(0,0,0,0.5),
      0 6px 12px rgba(0,0,0,0.6);
  }

  .loco-main-body::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 8px;
    right: 30px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #b8860b, #daa520, #b8860b, transparent);
    border-radius: 2px;
  }

  .loco-main-body::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 8px;
    right: 8px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #b8860b, #daa520, #b8860b, transparent);
    border-radius: 2px;
  }

  .loco-main-cabin {
    position: absolute;
    bottom: 22px;
    right: 4px;
    width: 46px;
    height: 60px;
    background: linear-gradient(180deg, #c0392b 0%, #a93226 40%, #922b21 100%);
    border-radius: 5px 5px 0 0;
    box-shadow:
      inset 0 3px 6px rgba(255,255,255,0.2),
      inset 0 -3px 6px rgba(0,0,0,0.3),
      0 4px 10px rgba(0,0,0,0.4);
  }

  .loco-main-cabin::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    height: 6px;
    background: linear-gradient(180deg, #daa520, #b8860b);
    border-radius: 3px 3px 0 0;
  }

  .cabin-window {
    position: absolute;
    top: 10px;
    left: 7px;
    width: 18px;
    height: 18px;
    background: linear-gradient(135deg, rgba(135,206,235,0.8), rgba(100,180,220,0.6));
    border: 2px solid #7f1d1d;
    border-radius: 3px;
    box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
  }

  .loco-main-smokestack {
    position: absolute;
    bottom: 68px;
    left: 38px;
    width: 16px;
    height: 28px;
    background: linear-gradient(180deg, #444 0%, #222 100%);
    border-radius: 4px 4px 0 0;
  }

  .loco-main-chimney-top {
    position: absolute;
    bottom: 94px;
    left: 32px;
    width: 28px;
    height: 7px;
    background: linear-gradient(180deg, #555, #333);
    border-radius: 4px 4px 0 0;
    box-shadow: 0 -2px 4px rgba(0,0,0,0.3);
  }

  .loco-headlight {
    position: absolute;
    bottom: 48px;
    left: 28px;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, #fff8dc, #ffd700, #daa520);
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(255,215,0,0.8), 0 0 30px rgba(255,215,0,0.3);
  }

  .loco-main-cowcatcher {
    position: absolute;
    bottom: 14px;
    left: 12px;
    width: 22px;
    height: 18px;
    background: linear-gradient(135deg, #777, #555);
    clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
  }

  .loco-main-wheel {
    position: absolute;
    bottom: 4px;
    width: 22px;
    height: 22px;
    background: radial-gradient(circle at 50% 50%, #777 0%, #555 50%, #333 80%, #222 100%);
    border-radius: 50%;
    border: 3px solid #888;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }

  .loco-mw-1 { left: 36px; }
  .loco-mw-2 { left: 66px; }
  .loco-mw-3 { left: 96px; }

  .loco-mw-big {
    width: 30px !important;
    height: 30px !important;
    bottom: 0 !important;
  }

  .wheel-cross {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 2px;
    background: #aaa;
    transform: translate(-50%, -50%);
  }

  .wheel-cross::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 700%;
    background: #aaa;
    transform: translate(-50%, -50%);
  }

  .loco-steam-pipe {
    position: absolute;
    bottom: 32px;
    left: 30px;
    width: 8px;
    height: 6px;
    background: #666;
    border-radius: 3px;
  }

  /* ─── SMOKE PARTICLES ─────────────────────────────────────────────────── */

  .smoke-particle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200,200,200,0.7), rgba(180,180,180,0.3));
    pointer-events: none;
    z-index: 18;
    transform: translate(-50%, -50%);
  }

  /* ─── SPARK PARTICLES ─────────────────────────────────────────────────── */

  .spark-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 30;
    transform: translate(-50%, -50%);
  }

  /* ─── CONFETTI ────────────────────────────────────────────────────────── */

  .confetti-particle {
    position: absolute;
    pointer-events: none;
    z-index: 35;
    border-radius: 2px;
  }

  /* ─── SCORE POPUPS ────────────────────────────────────────────────────── */

  .score-popup {
    position: absolute;
    transform: translateX(-50%);
    font-size: 1.4rem;
    font-weight: 900;
    color: #ffd700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    pointer-events: none;
    z-index: 40;
    animation: scorePopAnim 0.3s ease-out;
  }

  @keyframes scorePopAnim {
    from { transform: translateX(-50%) scale(0.5); }
    to { transform: translateX(-50%) scale(1); }
  }

  /* ─── SLOTS ───────────────────────────────────────────────────────────── */

  .slot {
    position: absolute;
    border: 3px dashed rgba(255,255,255,0.5);
    border-radius: 8px;
    background: rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 12;
    transition: all 0.3s ease;
  }

  .slot-filled {
    border-style: solid;
    border-color: transparent;
    background: transparent;
  }

  .slot-prefilled {
    border-style: solid;
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.15);
  }

  .slot-hint {
    font-size: 1.8rem;
    font-weight: 900;
    color: rgba(255,255,255,0.25);
    animation: slotPulse 2s ease-in-out infinite;
  }

  @keyframes slotPulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
  }

  .slot-prefill-number {
    font-size: 1.8rem;
    font-weight: 900;
    color: rgba(255,255,255,0.6);
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  /* ─── PLACED CAR (in slot) ────────────────────────────────────────────── */

  .placed-car {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      inset 0 3px 6px rgba(255,255,255,0.3),
      inset 0 -3px 6px rgba(0,0,0,0.2),
      0 4px 10px rgba(0,0,0,0.3);
    animation: carSnapIn 0.4s ease-out;
  }

  @keyframes carSnapIn {
    0% { transform: scale(1.2); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }

  .car-number {
    font-size: 2rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,0.4);
    z-index: 2;
  }

  .car-shine {
    position: absolute;
    top: 4px;
    left: 6px;
    width: 40%;
    height: 30%;
    background: linear-gradient(180deg, rgba(255,255,255,0.4), transparent);
    border-radius: 4px 4px 50% 50%;
    pointer-events: none;
  }

  .car-wheel {
    position: absolute;
    bottom: -8px;
    width: 16px;
    height: 16px;
    background: radial-gradient(circle, #666 30%, #444 60%, #333 100%);
    border-radius: 50%;
    border: 2px solid #777;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    z-index: 3;
  }

  .car-wheel-l { left: 10px; }
  .car-wheel-r { right: 10px; }

  .wheel-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background: #aaa;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .car-coupler {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 6px;
    background: #666;
    border-radius: 2px;
    transform: translateY(-50%);
    z-index: 1;
  }

  .car-coupler-l { left: -8px; }
  .car-coupler-r { right: -8px; }

  /* ─── DRAGGABLE CAR ───────────────────────────────────────────────────── */

  .draggable-car {
    position: absolute;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    transition: box-shadow 0.2s ease, transform 0.15s ease;
    box-shadow:
      inset 0 3px 8px rgba(255,255,255,0.35),
      inset 0 -3px 8px rgba(0,0,0,0.25),
      0 4px 12px rgba(0,0,0,0.3);
  }

  .draggable-car:hover {
    box-shadow:
      inset 0 3px 8px rgba(255,255,255,0.35),
      inset 0 -3px 8px rgba(0,0,0,0.25),
      0 8px 20px rgba(0,0,0,0.4);
    transform: translateY(-2px);
  }

  .draggable-car.dragging {
    cursor: grabbing;
    transform: scale(1.12) rotate(-2deg);
    box-shadow:
      inset 0 3px 8px rgba(255,255,255,0.35),
      inset 0 -3px 8px rgba(0,0,0,0.25),
      0 15px 40px rgba(0,0,0,0.5);
    z-index: 100 !important;
  }

  .draggable-car.shaking {
    animation: carShake 0.4s ease;
  }

  @keyframes carShake {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    20% { transform: translateX(-8px) rotate(-3deg); }
    40% { transform: translateX(8px) rotate(3deg); }
    60% { transform: translateX(-5px) rotate(-2deg); }
    80% { transform: translateX(5px) rotate(2deg); }
  }

  .draggable-car.coupling {
    animation: carCouple 0.5s ease;
  }

  @keyframes carCouple {
    0% { transform: scale(1.15); }
    30% { transform: scale(0.9) translateX(-3px); }
    60% { transform: scale(1.05) translateX(2px); }
    100% { transform: scale(1); }
  }

  .drag-indicator {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 3px solid rgba(255,255,255,0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 110;
    animation: dragPulse 0.6s ease-in-out infinite;
  }

  @keyframes dragPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
  }

  /* ─── PLATFORM ────────────────────────────────────────────────────────── */

  .platform {
    position: absolute;
    width: 260px;
    height: 180px;
    background: linear-gradient(180deg, rgba(139,69,19,0.3), rgba(139,69,19,0.1));
    border: 2px solid rgba(139,69,19,0.3);
    border-radius: 12px 12px 0 0;
    z-index: 5;
  }

  .platform-roof {
    position: absolute;
    top: -10px;
    left: -8px;
    right: -8px;
    height: 14px;
    background: linear-gradient(180deg, #8B4513, #6B3410);
    border-radius: 6px 6px 0 0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  }

  .platform-label {
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255,255,255,0.5);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* ─── TUNNEL ──────────────────────────────────────────────────────────── */

  .tunnel {
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    width: 50%;
    background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 70%, transparent 100%);
    z-index: 50;
    animation: tunnelIn 1.8s ease forwards;
  }

  @keyframes tunnelIn {
    0% { transform: translateX(-100%); }
    30% { transform: translateX(0); }
    70% { transform: translateX(0); width: 100%; }
    100% { transform: translateX(0); width: 200%; }
  }

  /* ─── BOTTOM BAR ──────────────────────────────────────────────────────── */

  .bottom-bar {
    padding: 0.6rem 0.8rem;
    background: rgba(0,0,0,0.5);
    text-align: center;
    z-index: 50;
    backdrop-filter: blur(6px);
  }

  .hint-text {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 0.8rem;
    color: #999;
  }

  .hint-drag { color: #81c784; }
  .hint-set { color: #90caf9; }

  /* ─── RESPONSIVE ──────────────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .game-header { padding: 0.4rem 0.5rem; }
    .header-center { display: none; }
    .mode-badge { display: none; }
    .level-badge { font-size: 0.75rem; padding: 0.3rem 0.6rem; }
    .score-badge { font-size: 0.75rem; padding: 0.3rem 0.6rem; }
    .life-heart { font-size: 0.9rem; }
    .hint-text { flex-direction: column; gap: 0.2rem; }
    .platform { width: 200px; }
    .car-number { font-size: 1.5rem; }
    .instructions-card { padding: 1rem; }
    .instruction { margin-bottom: 1rem; }
  }
`;
