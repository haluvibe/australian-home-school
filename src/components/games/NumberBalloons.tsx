"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Physics constants
const FRICTION = 0.985;
const BOUNCE = 0.6;
const MERGE_DISTANCE = 90;
const FLOAT_SPEED_BASE = 0.25;
const WOBBLE_AMOUNT = 0.4;
const MAGNETIC_DISTANCE = 160;
const MAGNETIC_STRENGTH = 0.08;

// Number words lookup
const NUMBER_WORDS: Record<number, string> = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
  16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
};

// Balloon color palette (HSL hues)
const BALLOON_HUES = [0, 25, 45, 120, 180, 210, 260, 300, 330, 350, 15, 55, 90, 150, 195, 240, 275, 315, 340, 30, 70];

type BalloonType = 'numeral' | 'word' | 'dots';

interface Balloon {
  id: number;
  value: number;
  type: BalloonType;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  wobblePhase: number;
  wobbleSpeed: number;
  spawnTime: number;
}

interface DraggedBalloon extends Balloon {
  offsetX: number;
  offsetY: number;
}

interface PopEffect {
  id: number;
  x: number;
  y: number;
  hue: number;
  value: number;
  particles: PopParticle[];
}

interface PopParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  rotation: number;
  type: 'confetti' | 'spark' | 'ring';
}

interface RejectEffect {
  id: number;
  x: number;
  y: number;
}

interface ComboText {
  id: number;
  x: number;
  y: number;
  text: string;
}

interface ContainerSize {
  width: number;
  height: number;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameOver';

interface NumberBalloonsProps {
  onExit?: () => void;
}

let balloonIdCounter = 0;
const getNewId = (): number => ++balloonIdCounter;

export default function NumberBalloons({ onExit }: NumberBalloonsProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [lives, setLives] = useState<number>(5);
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [matchesMade, setMatchesMade] = useState<number>(0);
  const [matchesNeeded, setMatchesNeeded] = useState<number>(0);
  const [popEffect, setPopEffect] = useState<PopEffect | null>(null);
  const [rejectEffect, setRejectEffect] = useState<RejectEffect | null>(null);
  const [comboText, setComboText] = useState<ComboText | null>(null);
  const [draggedBalloon, setDraggedBalloon] = useState<DraggedBalloon | null>(null);
  const [nearbyMatch, setNearbyMatch] = useState<Balloon | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const spawnTimerRef = useRef<number>(0);
  const pairCounterRef = useRef<number>(0);
  const balloonsRef = useRef<Balloon[]>(balloons);
  const livesRef = useRef<number>(lives);
  const matchesMadeRef = useRef<number>(matchesMade);
  const matchesNeededRef = useRef<number>(matchesNeeded);

  useEffect(() => { balloonsRef.current = balloons; }, [balloons]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { matchesMadeRef.current = matchesMade; }, [matchesMade]);
  useEffect(() => { matchesNeededRef.current = matchesNeeded; }, [matchesNeeded]);

  const getContainerSize = useCallback((): ContainerSize => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 600 };
  }, []);

  // Get the number range for the current level
  const getNumberRange = useCallback((lvl: number): [number, number] => {
    if (lvl <= 2) return [0, 5];
    if (lvl <= 4) return [0, 10];
    return [0, 20];
  }, []);

  // Get balloon type pairing for a level
  const pickPairTypes = useCallback((lvl: number): [BalloonType, BalloonType] => {
    if (lvl <= 2) return ['numeral', 'word'];
    if (lvl <= 4) {
      return Math.random() < 0.5 ? ['numeral', 'word'] : ['numeral', 'dots'];
    }
    const r = Math.random();
    if (r < 0.35) return ['numeral', 'word'];
    if (r < 0.7) return ['numeral', 'dots'];
    return ['word', 'dots'];
  }, []);

  // Get spawn interval for current level
  const getSpawnInterval = useCallback((lvl: number): number => {
    return Math.max(2200 - lvl * 150, 900);
  }, []);

  // Get max simultaneous balloons
  const getMaxBalloons = useCallback((lvl: number): number => {
    return Math.min(6 + Math.floor(lvl * 0.8), 14);
  }, []);

  // Get matches needed for level
  const getLevelMatches = useCallback((lvl: number): number => {
    return Math.min(4 + Math.floor(lvl * 1.2), 12);
  }, []);

  // Get float speed for level
  const getFloatSpeed = useCallback((lvl: number): number => {
    return FLOAT_SPEED_BASE + lvl * 0.06;
  }, []);

  // Spawn a pair of matching balloons
  const spawnPair = useCallback((lvl: number): Balloon[] => {
    const [minNum, maxNum] = getNumberRange(lvl);
    const value = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
    const [typeA, typeB] = pickPairTypes(lvl);
    const hue = BALLOON_HUES[value % BALLOON_HUES.length];
    const size = getContainerSize();
    const floatSpeed = getFloatSpeed(lvl);

    const getRadius = (type: BalloonType) => {
      if (type === 'word') return 52;
      if (type === 'dots') return 48;
      return 45;
    };

    const makeOne = (type: BalloonType, xRegion: number): Balloon => {
      const radius = getRadius(type);
      const regionWidth = size.width / 3;
      const x = radius + regionWidth * xRegion + Math.random() * (regionWidth - radius * 2);
      return {
        id: getNewId(),
        value,
        type,
        x,
        y: size.height + radius + Math.random() * 80,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(floatSpeed + Math.random() * floatSpeed * 0.5),
        radius,
        hue: hue + (type === 'word' ? 30 : type === 'dots' ? -30 : 0),
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 1.2 + Math.random() * 1.5,
        spawnTime: Date.now(),
      };
    };

    const regionA = Math.random() < 0.5 ? 0 : 2;
    const regionB = regionA === 0 ? 2 : 0;
    const a = makeOne(typeA, regionA);
    const b = makeOne(typeB, regionB);
    b.y += 40 + Math.random() * 60;
    return [a, b];
  }, [getNumberRange, pickPairTypes, getContainerSize, getFloatSpeed]);

  // Create pop particles
  const createPopParticles = useCallback((x: number, y: number, hue: number): PopParticle[] => {
    const particles: PopParticle[] = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.5;
      const speed = 3 + Math.random() * 6;
      const type: PopParticle['type'] = i < count * 0.5 ? 'confetti' : i < count * 0.75 ? 'spark' : 'ring';
      particles.push({
        id: getNewId(),
        x: x + Math.cos(angle) * 10,
        y: y + Math.sin(angle) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: type === 'confetti' ? 5 + Math.random() * 7 : type === 'spark' ? 2 + Math.random() * 4 : 20 + Math.random() * 15,
        hue: hue + (Math.random() - 0.5) * 60,
        rotation: Math.random() * 360,
        type,
      });
    }
    return particles;
  }, []);

  // Find nearby matching balloon while dragging
  const findNearbyMatch = useCallback((balloon: Balloon): Balloon | null => {
    if (!balloon) return null;
    let closest: Balloon | null = null;
    let closestDist = Infinity;

    balloonsRef.current.forEach(other => {
      if (other.id === balloon.id) return;
      if (other.value !== balloon.value) return;
      if (other.type === balloon.type) return;
      const dx = balloon.x - other.x;
      const dy = balloon.y - other.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MAGNETIC_DISTANCE && dist < closestDist) {
        closest = other;
        closestDist = dist;
      }
    });
    return closest;
  }, []);

  // Check if two balloons are close enough to merge
  const checkMerge = useCallback((a: Balloon, b: Balloon): boolean => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist < MERGE_DISTANCE;
  }, []);

  // Perform match
  const performMatch = useCallback((balloonA: Balloon, balloonB: Balloon): void => {
    const midX = (balloonA.x + balloonB.x) / 2;
    const midY = (balloonA.y + balloonB.y) / 2;
    const hue = balloonA.hue;

    setPopEffect({
      id: Date.now(),
      x: midX,
      y: midY,
      hue,
      value: balloonA.value,
      particles: createPopParticles(midX, midY, hue),
    });
    setTimeout(() => setPopEffect(null), 1000);

    setBalloons(prev => prev.filter(b => b.id !== balloonA.id && b.id !== balloonB.id));

    setCombo(prev => {
      const newCombo = prev + 1;
      const multiplier = Math.min(newCombo, 5);
      const points = 100 * multiplier;
      setScore(s => s + points);
      if (newCombo > maxCombo) setMaxCombo(newCombo);

      if (newCombo >= 2) {
        setComboText({
          id: Date.now(),
          x: midX,
          y: midY - 50,
          text: newCombo >= 5 ? `${multiplier}x INCREDIBLE!` : newCombo >= 4 ? `${multiplier}x AMAZING!` : newCombo >= 3 ? `${multiplier}x GREAT!` : `${multiplier}x COMBO!`,
        });
        setTimeout(() => setComboText(null), 1200);
      }
      return newCombo;
    });

    setMatchesMade(prev => {
      const newMM = prev + 1;
      if (newMM >= matchesNeededRef.current) {
        setTimeout(() => setGameState('levelComplete'), 800);
      }
      return newMM;
    });
    setNearbyMatch(null);
  }, [createPopParticles, maxCombo]);

  // Perform wrong match rejection
  const performReject = useCallback((balloonA: Balloon, balloonB: Balloon): void => {
    const midX = (balloonA.x + balloonB.x) / 2;
    const midY = (balloonA.y + balloonB.y) / 2;

    setRejectEffect({ id: Date.now(), x: midX, y: midY });
    setTimeout(() => setRejectEffect(null), 500);

    // Repel balloons apart
    const dx = balloonA.x - balloonB.x;
    const dy = balloonA.y - balloonB.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const repelForce = 8;

    setBalloons(prev => prev.map(b => {
      if (b.id === balloonA.id) {
        return { ...b, vx: (dx / dist) * repelForce, vy: (dy / dist) * repelForce };
      }
      if (b.id === balloonB.id) {
        return { ...b, vx: -(dx / dist) * repelForce, vy: -(dy / dist) * repelForce };
      }
      return b;
    }));

    setCombo(0);
    setLives(prev => {
      const newLives = prev - 1;
      if (newLives <= 0) {
        setTimeout(() => setGameState('gameOver'), 500);
      }
      return newLives;
    });
  }, []);

  const initLevel = useCallback((lvl: number): void => {
    const size = getContainerSize();
    setPopEffect(null);
    setRejectEffect(null);
    setComboText(null);
    setDraggedBalloon(null);
    setNearbyMatch(null);
    setCombo(0);
    pairCounterRef.current = 0;
    spawnTimerRef.current = 0;

    const needed = getLevelMatches(lvl);
    setMatchesNeeded(needed);
    setMatchesMade(0);

    // Spawn initial balloon pairs
    const initialPairs = Math.min(2 + Math.floor(lvl * 0.3), 4);
    const initialBalloons: Balloon[] = [];
    for (let i = 0; i < initialPairs; i++) {
      const pair = spawnPair(lvl);
      // Place initial balloons on screen (not below)
      pair[0].y = size.height * (0.35 + i * 0.15);
      pair[1].y = size.height * (0.45 + i * 0.15);
      initialBalloons.push(...pair);
    }
    setBalloons(initialBalloons);
  }, [getContainerSize, getLevelMatches, spawnPair]);

  const startGame = (): void => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setLives(5);
    setCombo(0);
    setMaxCombo(0);
    setMatchesMade(0);
    initLevel(1);
  };

  const nextLevel = (): void => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // Physics loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const updatePhysics = (timestamp: number): void => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = timestamp - lastTimeRef.current;
      const delta = Math.min(rawDelta / 16, 3);
      lastTimeRef.current = timestamp;
      const size = getContainerSize();
      const time = timestamp / 1000;

      setBalloons(prev => {
        let changed = false;
        const escapedIds = new Set<number>();

        const updated = prev.map(balloon => {
          if (draggedBalloon?.id === balloon.id) return balloon;

          let { x, y, vx, vy, radius, wobblePhase, wobbleSpeed } = balloon;

          // Upward float
          y += vy * delta;

          // Wobble
          wobblePhase += wobbleSpeed * delta * 0.02;
          x += Math.sin(wobblePhase) * WOBBLE_AMOUNT * delta;

          // Drift
          vx += (Math.random() - 0.5) * 0.03 * delta;
          x += vx * delta;
          vx *= FRICTION;

          // Wall bounce
          if (x < radius) { x = radius; vx = Math.abs(vx) * BOUNCE; changed = true; }
          if (x > size.width - radius) { x = size.width - radius; vx = -Math.abs(vx) * BOUNCE; changed = true; }

          // Check if floated off top
          if (y < -radius - 40) {
            escapedIds.add(balloon.id);
            changed = true;
          }

          if (x !== balloon.x || y !== balloon.y || vx !== balloon.vx) changed = true;

          return { ...balloon, x, y, vx, vy, wobblePhase };
        });

        // Handle escaped balloons
        if (escapedIds.size > 0) {
          setLives(prev => {
            const newLives = Math.max(0, prev - 1);
            if (newLives <= 0) {
              setTimeout(() => setGameState('gameOver'), 300);
            }
            return newLives;
          });
          return updated.filter(b => !escapedIds.has(b.id));
        }

        return updated;
      });

      // Spawn new pairs
      spawnTimerRef.current += rawDelta;
      const lvl = level;
      const spawnInterval = getSpawnInterval(lvl);
      const maxBalloons = getMaxBalloons(lvl);

      if (spawnTimerRef.current >= spawnInterval &&
          balloonsRef.current.length < maxBalloons &&
          matchesMadeRef.current < matchesNeededRef.current) {
        spawnTimerRef.current = 0;
        const pair = spawnPair(lvl);
        setBalloons(prev => [...prev, ...pair]);
      }

      animationRef.current = requestAnimationFrame(updatePhysics);
    };

    animationRef.current = requestAnimationFrame(updatePhysics);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameState, draggedBalloon, getContainerSize, level, getSpawnInterval, getMaxBalloons, spawnPair]);

  // Drag handlers
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    balloon: Balloon
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDraggedBalloon({
      ...balloon,
      offsetX: clientX - rect.left - balloon.x,
      offsetY: clientY - rect.top - balloon.y,
    });
    setNearbyMatch(findNearbyMatch(balloon));
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent): void => {
    if (!draggedBalloon || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(30, Math.min(rect.width - 30, clientX - rect.left - draggedBalloon.offsetX));
    const newY = Math.max(30, Math.min(rect.height - 30, clientY - rect.top - draggedBalloon.offsetY));

    const updatedBalloon: Balloon = { ...draggedBalloon, x: newX, y: newY };
    const nearby = findNearbyMatch(updatedBalloon);
    setNearbyMatch(nearby);

    // Magnetic pull toward matching balloon
    if (nearby) {
      const dx = nearby.x - newX;
      const dy = nearby.y - newY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MERGE_DISTANCE) {
        // Close enough to merge
        const isCorrectMatch = updatedBalloon.value === nearby.value && updatedBalloon.type !== nearby.type;
        if (isCorrectMatch) {
          performMatch(updatedBalloon, nearby);
          setDraggedBalloon(null);
          return;
        }
      }
    }

    setBalloons(prev => prev.map(b =>
      b.id === draggedBalloon.id ? { ...b, x: newX, y: newY, vx: 0, vy: b.vy } : b
    ));
  }, [draggedBalloon, findNearbyMatch, performMatch]);

  const handleDragEnd = useCallback((): void => {
    if (!draggedBalloon) return;
    setNearbyMatch(null);

    const currentBalloon = balloonsRef.current.find(b => b.id === draggedBalloon.id);
    if (!currentBalloon) { setDraggedBalloon(null); return; }

    // Check for close balloon to merge/reject
    let closestBalloon: Balloon | null = null;
    let minDist = MERGE_DISTANCE * 1.2;

    balloonsRef.current.forEach(other => {
      if (other.id === currentBalloon.id) return;
      const dx = currentBalloon.x - other.x;
      const dy = currentBalloon.y - other.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist) {
        minDist = dist;
        closestBalloon = other;
      }
    });

    if (closestBalloon) {
      const cb = closestBalloon as Balloon;
      const isMatch = currentBalloon.value === cb.value && currentBalloon.type !== cb.type;
      if (isMatch) {
        performMatch(currentBalloon, cb);
        setDraggedBalloon(null);
        return;
      } else {
        // Wrong match or same type
        performReject(currentBalloon, cb);
        setDraggedBalloon(null);
        return;
      }
    }

    // Just release with some drift
    setBalloons(prev => prev.map(b =>
      b.id === currentBalloon.id
        ? { ...b, vx: (Math.random() - 0.5) * 2, vy: b.vy }
        : b
    ));
    setDraggedBalloon(null);
  }, [draggedBalloon, performMatch, performReject]);

  // Drag event listeners
  useEffect(() => {
    if (!draggedBalloon) return;
    const moveHandler = (e: MouseEvent | TouchEvent): void => handleDragMove(e);
    const endHandler = (): void => handleDragEnd();
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
  }, [draggedBalloon, handleDragMove, handleDragEnd]);

  // Render dots for a balloon
  const renderDots = (value: number, radius: number): React.ReactNode => {
    if (value === 0) return null;
    const dots: React.ReactNode[] = [];
    const cols = value <= 3 ? value : value <= 6 ? 3 : value <= 10 ? 4 : 5;
    const rows = Math.ceil(value / cols);
    const dotSize = value <= 5 ? 7 : value <= 10 ? 5.5 : 4;
    const spacing = dotSize * 2.6;
    const totalW = (cols - 1) * spacing;
    const totalH = (rows - 1) * spacing;

    let count = 0;
    for (let r = 0; r < rows && count < value; r++) {
      const rowCols = Math.min(cols, value - count);
      const rowOffset = (cols - rowCols) * spacing / 2;
      for (let c = 0; c < rowCols && count < value; c++) {
        const dx = -totalW / 2 + rowOffset + c * spacing;
        const dy = -totalH / 2 + r * spacing;
        dots.push(
          <div
            key={count}
            className="balloon-dot"
            style={{
              position: 'absolute',
              left: `calc(50% + ${dx}px)`,
              top: `calc(50% + ${dy}px)`,
              width: dotSize * 2,
              height: dotSize * 2,
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
        count++;
      }
    }
    return <>{dots}</>;
  };

  // Get balloon content
  const getBalloonContent = (balloon: Balloon): React.ReactNode => {
    if (balloon.type === 'numeral') {
      return <div className="balloon-numeral">{balloon.value}</div>;
    }
    if (balloon.type === 'word') {
      const word = NUMBER_WORDS[balloon.value] || String(balloon.value);
      return <div className={`balloon-word ${word.length > 7 ? 'long' : word.length > 5 ? 'med' : ''}`}>{word}</div>;
    }
    return <div className="balloon-dots-container">{renderDots(balloon.value, balloon.radius)}</div>;
  };

  const progress = matchesNeeded > 0 ? matchesMade / matchesNeeded : 0;

  // ---- INTRO SCREEN ----
  if (gameState === 'intro') {
    return (
      <div className="number-balloons">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-sky">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="deco-balloon" style={{
                left: `${5 + (i * 6.5) % 90}%`,
                bottom: `${-15 - Math.random() * 15}%`,
                '--deco-hue': BALLOON_HUES[i % BALLOON_HUES.length],
                '--deco-delay': `${i * 0.5}s`,
                '--deco-duration': `${9 + Math.random() * 6}s`,
                '--deco-wobble': `${3 + Math.random() * 3}s`,
                '--deco-size': `${35 + Math.random() * 30}px`,
              } as React.CSSProperties} />
            ))}
            {[...Array(5)].map((_, i) => (
              <div key={`cloud-${i}`} className="intro-cloud" style={{
                top: `${8 + i * 14}%`,
                left: `${-20 + i * 22}%`,
                '--cloud-speed': `${22 + i * 7}s`,
                '--cloud-scale': 0.5 + i * 0.18,
              } as React.CSSProperties} />
            ))}
            <div className="intro-sun">
              <div className="sun-rays" />
              <div className="sun-body" />
            </div>
          </div>

          <div className="intro-content">
            <div className="intro-logo">
              <span className="logo-emoji">🎈</span>
              <h1 className="intro-title">Number Balloons</h1>
              <span className="logo-emoji flip">🎈</span>
            </div>
            <p className="intro-tagline">Match numbers, words &amp; dots!</p>

            <div className="intro-card">
              <h3 className="card-heading">How to Play</h3>
              <div className="intro-instruction">
                <div className="inst-visual">
                  <span className="inst-balloon numeral">7</span>
                  <span className="inst-arrow">&#8594;</span>
                  <span className="inst-balloon word">seven</span>
                  <span className="inst-result">POP!</span>
                </div>
                <p><strong>DRAG</strong> a balloon to its <span className="hl match">matching pair</span></p>
              </div>
              <div className="intro-instruction">
                <div className="inst-visual">
                  <span className="inst-balloon numeral sm">5</span>
                  <span className="inst-arrow">=</span>
                  <span className="inst-balloon dots-demo">
                    <span className="demo-dot" /><span className="demo-dot" /><span className="demo-dot" />
                    <span className="demo-dot" /><span className="demo-dot" />
                  </span>
                </div>
                <p>Match <span className="hl types">numerals, words &amp; dot groups</span></p>
              </div>
              <div className="intro-instruction">
                <div className="inst-visual">
                  <span className="inst-combo">3x COMBO!</span>
                </div>
                <p><strong>Consecutive</strong> matches build your <span className="hl combo">score multiplier</span></p>
              </div>
            </div>

            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🎈</span>
              Start Playing
              <span className="btn-icon">🎈</span>
            </button>
            {onExit && (
              <button className="back-link" onClick={onExit}>
                &#8592; Back to games
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---- LEVEL COMPLETE ----
  if (gameState === 'levelComplete') {
    const stars = maxCombo >= 4 ? 3 : maxCombo >= 2 ? 2 : 1;
    return (
      <div className="number-balloons">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-sky">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                '--conf-hue': Math.random() * 360,
                '--conf-delay': `${Math.random() * 2}s`,
                '--conf-duration': `${2 + Math.random() * 3}s`,
                '--conf-drift': `${(Math.random() - 0.5) * 120}px`,
              } as React.CSSProperties} />
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`spark-${i}`} className="complete-sparkle" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                '--sparkle-delay': `${Math.random() * 3}s`,
              } as React.CSSProperties} />
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Level {level} Complete!</h1>
            <div className="stars-row">
              {[1, 2, 3].map(i => (
                <span key={i} className={`star ${i <= stars ? 'earned' : 'empty'}`}
                  style={{ '--star-delay': `${i * 0.2}s` } as React.CSSProperties}>
                  {i <= stars ? '\u2B50' : '\u2606'}
                </span>
              ))}
            </div>
            <div className="complete-stats">
              <div className="stat-item">
                <span className="stat-label">Score</span>
                <span className="stat-value">{score}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Matches</span>
                <span className="stat-value">{matchesMade}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Best Combo</span>
                <span className="stat-value">{maxCombo}x</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Lives Left</span>
                <span className="stat-value">{lives}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={nextLevel}>
                Level {level + 1} &#8594;
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- GAME OVER ----
  if (gameState === 'gameOver') {
    return (
      <div className="number-balloons">
        <style>{styles}</style>
        <div className="gameover-screen">
          <div className="gameover-content">
            <div className="gameover-balloon-burst">
              <div className="burst-ring r1" />
              <div className="burst-ring r2" />
              <div className="burst-ring r3" />
            </div>
            <span className="gameover-emoji">💨</span>
            <h1 className="gameover-title">Game Over</h1>
            <p className="gameover-sub">You reached Level {level}</p>
            <div className="complete-stats">
              <div className="stat-item">
                <span className="stat-label">Final Score</span>
                <span className="stat-value">{score}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Matches Made</span>
                <span className="stat-value">{matchesMade}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Best Combo</span>
                <span className="stat-value">{maxCombo}x</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={startGame}>
                Try Again
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- PLAYING STATE ----
  return (
    <div className="number-balloons">
      <style>{styles}</style>
      <div className="game-screen">
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>&#8592;</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="lives-display">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`heart ${i < lives ? 'alive' : 'dead'}`}>
                  {i < lives ? '\u2764\uFE0F' : '\uD83D\uDDA4'}
                </span>
              ))}
            </div>
            <div className="progress-bar-wrap">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${Math.min(progress * 100, 100)}%` }} />
              </div>
              <span className="progress-text">{matchesMade} / {matchesNeeded}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">&#11088;</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        <div className="balloon-container" ref={containerRef}>
          {/* Background clouds */}
          <div className="game-clouds">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="game-cloud" style={{
                top: `${5 + i * 20}%`,
                '--cloud-speed': `${25 + i * 10}s`,
                '--cloud-scale': 0.5 + i * 0.2,
                '--cloud-start': `${-15 + i * 20}%`,
              } as React.CSSProperties} />
            ))}
          </div>

          {/* Sun */}
          <div className="game-sun">
            <div className="sun-rays" />
            <div className="sun-body" />
          </div>

          {/* Connection line between dragged balloon and nearby match */}
          {draggedBalloon && nearbyMatch && (() => {
            const dragB = balloons.find(b => b.id === draggedBalloon.id);
            if (!dragB) return null;
            return (
              <svg className="connection-line">
                <defs>
                  <linearGradient id="matchLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <line
                  x1={dragB.x}
                  y1={dragB.y}
                  x2={nearbyMatch.x}
                  y2={nearbyMatch.y}
                  stroke="url(#matchLineGrad)"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  opacity="0.7"
                />
              </svg>
            );
          })()}

          {/* Balloons */}
          {balloons.map(balloon => {
            const isDragging = draggedBalloon?.id === balloon.id;
            const isNearby = nearbyMatch?.id === balloon.id;
            return (
              <div
                key={balloon.id}
                className={`balloon ${isDragging ? 'dragging' : ''} ${isNearby ? 'nearby-match' : ''}`}
                style={{
                  left: balloon.x,
                  top: balloon.y,
                  width: balloon.radius * 2,
                  height: balloon.radius * 2.15,
                  '--balloon-hue': balloon.hue,
                } as React.CSSProperties}
                onMouseDown={(e) => handleDragStart(e, balloon)}
                onTouchStart={(e) => handleDragStart(e, balloon)}
              >
                <div className="balloon-body">
                  <div className="balloon-shine" />
                  <div className="balloon-shine-secondary" />
                  {getBalloonContent(balloon)}
                  {isNearby && <div className="balloon-match-ring" />}
                </div>
                <div className="balloon-knot" />
                <div className="balloon-string">
                  <svg viewBox="0 0 10 30" className="string-svg">
                    <path d="M5 0 Q8 10 3 20 Q6 25 5 30" stroke={`hsla(${balloon.hue}, 40%, 40%, 0.5)`} strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>
            );
          })}

          {/* Pop effect */}
          {popEffect && (
            <div key={popEffect.id} className="pop-effect" style={{ left: popEffect.x, top: popEffect.y }}>
              <div className="pop-burst-ring" style={{ '--pop-hue': popEffect.hue } as React.CSSProperties} />
              <div className="pop-burst-ring ring-2" style={{ '--pop-hue': popEffect.hue } as React.CSSProperties} />
              <div className="pop-value">{popEffect.value} = {NUMBER_WORDS[popEffect.value]}</div>
              {popEffect.particles.map(p => (
                <div
                  key={p.id}
                  className={`pop-particle ${p.type}`}
                  style={{
                    '--px': `${p.vx * 25}px`,
                    '--py': `${p.vy * 25}px`,
                    '--psize': `${p.size}px`,
                    '--phue': p.hue,
                    '--protation': `${p.rotation}deg`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          )}

          {/* Reject effect */}
          {rejectEffect && (
            <div key={rejectEffect.id} className="reject-effect" style={{ left: rejectEffect.x, top: rejectEffect.y }}>
              <div className="reject-x">&#10006;</div>
              <div className="reject-ring" />
            </div>
          )}

          {/* Combo text */}
          {comboText && (
            <div key={comboText.id} className="combo-popup" style={{ left: comboText.x, top: comboText.y }}>
              {comboText.text}
            </div>
          )}

          {/* Combo display */}
          {combo >= 2 && (
            <div className="combo-badge">
              <span className="combo-fire">{combo >= 4 ? '🔥' : '✨'}</span>
              <span className="combo-count">{combo}x</span>
            </div>
          )}

          {/* Ground */}
          <div className="game-ground" />

          {/* Empty hint */}
          {balloons.length === 0 && matchesMade < matchesNeeded && (
            <div className="empty-hint"><p>Balloons incoming...</p></div>
          )}
        </div>

        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">🎈 Drag to match</span>
            <span className="hint-types">
              {level <= 2 ? 'Numeral ↔ Word' : level <= 4 ? 'Numeral ↔ Word/Dots' : 'All types'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .number-balloons {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0F0 40%, #D4F0FC 70%, #F0F9FF 100%);
    position: relative;
  }

  /* ───────── INTRO SCREEN ───────── */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0F0 40%, #D4F0FC 70%, #F0F9FF 100%);
    overflow: hidden;
  }

  /* Decorative floating balloons */
  .deco-balloon {
    position: absolute;
    width: var(--deco-size);
    height: calc(var(--deco-size) * 1.15);
    border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
    background: radial-gradient(
      circle at 35% 30%,
      hsla(var(--deco-hue), 85%, 75%, 0.9),
      hsla(var(--deco-hue), 75%, 55%, 0.9) 50%,
      hsla(var(--deco-hue), 65%, 40%, 0.9)
    );
    box-shadow:
      0 8px 20px hsla(var(--deco-hue), 70%, 50%, 0.3),
      inset 0 -8px 15px hsla(var(--deco-hue), 80%, 30%, 0.2);
    animation:
      decoFloat var(--deco-duration) ease-in-out var(--deco-delay) infinite,
      decoWobble var(--deco-wobble) ease-in-out var(--deco-delay) infinite;
  }

  .deco-balloon::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 22%;
    width: 28%;
    height: 18%;
    border-radius: 50%;
    background: rgba(255,255,255,0.45);
  }

  .deco-balloon::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5px;
    height: 18px;
    background: linear-gradient(to bottom, hsla(var(--deco-hue), 40%, 40%, 0.5), transparent);
  }

  @keyframes decoFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(calc(-100vh - 120px)); }
    50.1%, 100% { transform: translateY(0); }
  }

  @keyframes decoWobble {
    0%, 100% { margin-left: 0; }
    25% { margin-left: 18px; }
    75% { margin-left: -18px; }
  }

  /* Intro clouds */
  .intro-cloud {
    position: absolute;
    width: calc(80px * var(--cloud-scale));
    height: calc(30px * var(--cloud-scale));
    background: rgba(255,255,255,0.55);
    border-radius: 50px;
    animation: cloudDrift var(--cloud-speed) linear infinite;
  }

  .intro-cloud::before,
  .intro-cloud::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.55);
    border-radius: 50%;
  }

  .intro-cloud::before {
    width: calc(40px * var(--cloud-scale));
    height: calc(40px * var(--cloud-scale));
    top: calc(-18px * var(--cloud-scale));
    left: calc(15px * var(--cloud-scale));
  }

  .intro-cloud::after {
    width: calc(30px * var(--cloud-scale));
    height: calc(30px * var(--cloud-scale));
    top: calc(-10px * var(--cloud-scale));
    left: calc(40px * var(--cloud-scale));
  }

  @keyframes cloudDrift {
    0% { transform: translateX(-150px); }
    100% { transform: translateX(calc(100vw + 150px)); }
  }

  /* Intro sun */
  .intro-sun, .game-sun {
    position: absolute;
    top: 35px;
    right: 55px;
  }

  .sun-body {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #fde047, #f59e0b);
    box-shadow: 0 0 35px rgba(253,224,71,0.5), 0 0 70px rgba(251,191,36,0.2);
    position: relative;
    z-index: 2;
  }

  .sun-rays {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90px;
    height: 90px;
    transform: translate(-50%, -50%);
    background: conic-gradient(
      from 0deg,
      transparent 0deg, rgba(253,224,71,0.2) 10deg, transparent 20deg,
      transparent 30deg, rgba(253,224,71,0.2) 40deg, transparent 50deg,
      transparent 60deg, rgba(253,224,71,0.2) 70deg, transparent 80deg,
      transparent 90deg, rgba(253,224,71,0.2) 100deg, transparent 110deg,
      transparent 120deg, rgba(253,224,71,0.2) 130deg, transparent 140deg,
      transparent 150deg, rgba(253,224,71,0.2) 160deg, transparent 170deg,
      transparent 180deg, rgba(253,224,71,0.2) 190deg, transparent 200deg,
      transparent 210deg, rgba(253,224,71,0.2) 220deg, transparent 230deg,
      transparent 240deg, rgba(253,224,71,0.2) 250deg, transparent 260deg,
      transparent 270deg, rgba(253,224,71,0.2) 280deg, transparent 290deg,
      transparent 300deg, rgba(253,224,71,0.2) 310deg, transparent 320deg,
      transparent 330deg, rgba(253,224,71,0.2) 340deg, transparent 350deg,
      transparent 360deg
    );
    border-radius: 50%;
    animation: spinSlow 30s linear infinite;
    z-index: 1;
  }

  @keyframes spinSlow {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 480px;
  }

  .intro-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .logo-emoji {
    font-size: 2.5rem;
    animation: logoBob 2s ease-in-out infinite;
  }

  .logo-emoji.flip {
    transform: scaleX(-1);
    animation: logoBobFlip 2s ease-in-out 0.3s infinite;
  }

  @keyframes logoBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes logoBobFlip {
    0%, 100% { transform: scaleX(-1) translateY(0); }
    50% { transform: scaleX(-1) translateY(-10px); }
  }

  .intro-title {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rainbowShift 4s ease infinite;
  }

  @keyframes rainbowShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .intro-tagline {
    color: #475569;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .intro-card {
    background: rgba(255,255,255,0.75);
    border: 2px solid rgba(255,255,255,0.85);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 1.8rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  }

  .card-heading {
    color: #1e293b;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    font-weight: 800;
  }

  .intro-instruction {
    margin-bottom: 1.2rem;
  }

  .intro-instruction:last-child { margin-bottom: 0; }

  .inst-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .inst-balloon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 800;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }

  .inst-balloon.numeral {
    width: 40px;
    height: 46px;
    border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
    background: radial-gradient(circle at 35% 30%, #60a5fa, #3b82f6 60%, #2563eb);
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(59,130,246,0.3);
  }

  .inst-balloon.numeral.sm {
    width: 36px;
    height: 42px;
    font-size: 1rem;
  }

  .inst-balloon.word {
    width: auto;
    padding: 4px 14px;
    height: 40px;
    border-radius: 20px / 22px;
    background: radial-gradient(circle at 35% 30%, #f472b6, #ec4899 60%, #db2777);
    font-size: 0.85rem;
    box-shadow: 0 4px 12px rgba(236,72,153,0.3);
  }

  .inst-balloon.dots-demo {
    width: 44px;
    height: 50px;
    border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
    background: radial-gradient(circle at 35% 30%, #4ade80, #22c55e 60%, #16a34a);
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 8px;
    box-shadow: 0 4px 12px rgba(34,197,94,0.3);
  }

  .demo-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    display: block;
  }

  .inst-arrow {
    color: #64748b;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .inst-result {
    font-size: 0.95rem;
    font-weight: 800;
    color: #f59e0b;
    animation: popPulse 1.5s ease infinite;
  }

  @keyframes popPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .inst-combo {
    font-size: 1rem;
    font-weight: 900;
    background: linear-gradient(90deg, #f97316, #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .intro-instruction p {
    color: #475569;
    font-size: 0.9rem;
  }

  .hl { font-weight: 700; }
  .hl.match { color: #3b82f6; }
  .hl.types { color: #8b5cf6; }
  .hl.combo { color: #f97316; }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(59,130,246,0.4);
  }

  .start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(59,130,246,0.5);
  }

  .start-btn:active {
    transform: translateY(-1px);
  }

  .btn-icon { font-size: 1.3rem; }

  .back-link {
    display: block;
    margin-top: 1rem;
    background: none;
    border: none;
    color: #64748b;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: color 0.2s;
  }

  .back-link:hover { color: #334155; }

  /* ───────── GAME SCREEN ───────── */

  .game-screen { height: 100%; display: flex; flex-direction: column; position: relative; }

  .game-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 1rem; background: rgba(255,255,255,0.35);
    backdrop-filter: blur(10px);
    z-index: 50; border-bottom: 1px solid rgba(255,255,255,0.3);
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.6rem; }

  .header-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .back-btn {
    width: 36px; height: 36px; background: rgba(0,0,0,0.08);
    border: none; border-radius: 10px; color: #475569; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease;
    font-weight: 700;
  }

  .back-btn:hover { background: rgba(0,0,0,0.15); }

  .level-badge {
    padding: 0.4rem 0.9rem; background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.85rem;
    box-shadow: 0 3px 10px rgba(59,130,246,0.3);
  }

  .lives-display {
    display: flex;
    gap: 0.2rem;
  }

  .heart {
    font-size: 0.95rem;
    transition: all 0.3s ease;
  }

  .heart.dead {
    opacity: 0.2;
    filter: grayscale(1);
  }

  .heart.alive {
    animation: heartBeat 2s ease infinite;
  }

  .heart.alive:nth-child(2) { animation-delay: 0.1s; }
  .heart.alive:nth-child(3) { animation-delay: 0.2s; }
  .heart.alive:nth-child(4) { animation-delay: 0.3s; }
  .heart.alive:nth-child(5) { animation-delay: 0.4s; }

  @keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    5% { transform: scale(1.15); }
    10% { transform: scale(1); }
  }

  .progress-bar-wrap {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .progress-bar-bg {
    width: 100px;
    height: 6px;
    background: rgba(0,0,0,0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #22c55e);
    border-radius: 3px;
    transition: width 0.5s ease;
  }

  .progress-text {
    font-size: 0.7rem;
    color: #64748b;
    font-weight: 600;
  }

  .score-badge {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.4rem 0.8rem; background: rgba(251,191,36,0.15);
    border-radius: 16px; color: #b45309; font-weight: 800; font-size: 0.9rem;
    box-shadow: 0 2px 8px rgba(251,191,36,0.15);
  }

  .score-icon { font-size: 1rem; }

  /* ───────── BALLOON CONTAINER ───────── */

  .balloon-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0F0 35%, #D4F0FC 65%, #E8F8F0 85%, #d1fae5 100%);
  }

  /* Game clouds */
  .game-clouds { position: absolute; inset: 0; pointer-events: none; z-index: 1; }

  .game-cloud {
    position: absolute;
    width: calc(85px * var(--cloud-scale));
    height: calc(28px * var(--cloud-scale));
    background: rgba(255,255,255,0.45);
    border-radius: 50px;
    animation: cloudDrift var(--cloud-speed) linear infinite;
    left: var(--cloud-start);
  }

  .game-cloud::before,
  .game-cloud::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.45);
    border-radius: 50%;
  }

  .game-cloud::before {
    width: calc(38px * var(--cloud-scale));
    height: calc(38px * var(--cloud-scale));
    top: calc(-16px * var(--cloud-scale));
    left: calc(12px * var(--cloud-scale));
  }

  .game-cloud::after {
    width: calc(28px * var(--cloud-scale));
    height: calc(28px * var(--cloud-scale));
    top: calc(-10px * var(--cloud-scale));
    left: calc(38px * var(--cloud-scale));
  }

  /* Game sun */
  .game-sun {
    position: absolute;
    top: 10px;
    right: 25px;
    z-index: 1;
    pointer-events: none;
  }

  .game-sun .sun-body {
    width: 40px;
    height: 40px;
  }

  .game-sun .sun-rays {
    width: 70px;
    height: 70px;
  }

  /* Ground */
  .game-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25px;
    background: linear-gradient(180deg, #86efac 0%, #4ade80 100%);
    border-radius: 100% 100% 0 0 / 60% 60% 0 0;
    z-index: 2;
    pointer-events: none;
  }

  /* Connection line */
  .connection-line {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 5;
    width: 100%;
    height: 100%;
  }

  /* ───────── BALLOONS ───────── */

  .balloon {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: grab;
    transition: filter 0.2s ease;
    animation: balloonSpawn 0.5s ease-out;
  }

  @keyframes balloonSpawn {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
    60% { transform: translate(-50%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  .balloon:hover {
    z-index: 20;
    filter: brightness(1.08);
  }

  .balloon.dragging {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.15);
    z-index: 100;
    filter: brightness(1.1);
  }

  .balloon.dragging .balloon-body {
    box-shadow:
      0 20px 50px hsla(var(--balloon-hue), 70%, 50%, 0.5),
      inset 0 -10px 20px hsla(var(--balloon-hue), 80%, 30%, 0.25);
  }

  .balloon.nearby-match .balloon-body {
    box-shadow:
      0 0 25px rgba(74,222,128,0.7),
      0 10px 30px hsla(var(--balloon-hue), 70%, 50%, 0.4),
      inset 0 -10px 20px hsla(var(--balloon-hue), 80%, 30%, 0.25);
  }

  .balloon-body {
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
    background: radial-gradient(
      circle at 30% 28%,
      hsla(var(--balloon-hue), 85%, 75%, 0.95) 0%,
      hsla(var(--balloon-hue), 78%, 58%, 0.95) 40%,
      hsla(var(--balloon-hue), 68%, 45%, 0.95) 80%,
      hsla(var(--balloon-hue), 60%, 35%, 0.95) 100%
    );
    box-shadow:
      0 10px 30px hsla(var(--balloon-hue), 70%, 50%, 0.35),
      inset 0 -10px 20px hsla(var(--balloon-hue), 80%, 30%, 0.25);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    animation: balloonBob 3s ease-in-out infinite;
  }

  @keyframes balloonBob {
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50% { transform: translateY(-4px) rotate(1deg); }
  }

  .balloon-shine {
    position: absolute;
    top: 14%;
    left: 18%;
    width: 30%;
    height: 20%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .balloon-shine-secondary {
    position: absolute;
    top: 8%;
    left: 28%;
    width: 14%;
    height: 10%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .balloon-match-ring {
    position: absolute;
    inset: -8px;
    border: 3px solid #4ade80;
    border-radius: 50%;
    animation: matchRing 0.8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes matchRing {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.12); opacity: 0.5; }
  }

  .balloon-knot {
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 6px;
    background: hsla(var(--balloon-hue), 60%, 38%, 0.9);
    border-radius: 0 0 50% 50%;
    z-index: 3;
  }

  .balloon-string {
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 30px;
    pointer-events: none;
    z-index: 1;
  }

  .string-svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  /* Balloon content */
  .balloon-numeral {
    font-size: 1.8rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 2px 5px rgba(0,0,0,0.25);
    z-index: 2;
    position: relative;
    line-height: 1;
  }

  .balloon-word {
    font-size: 0.85rem;
    font-weight: 800;
    color: white;
    text-shadow: 0 1px 4px rgba(0,0,0,0.25);
    z-index: 2;
    position: relative;
    line-height: 1.1;
    text-align: center;
    padding: 0 4px;
  }

  .balloon-word.med { font-size: 0.75rem; }
  .balloon-word.long { font-size: 0.62rem; }

  .balloon-dots-container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .balloon-dot {
    border-radius: 50%;
    background: rgba(255,255,255,0.92);
    box-shadow: 0 1px 2px rgba(0,0,0,0.12);
  }

  /* ───────── POP EFFECT ───────── */

  .pop-effect {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 200;
  }

  .pop-burst-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 4px solid hsl(var(--pop-hue), 80%, 60%);
    border-radius: 50%;
    animation: burstRingExpand 0.7s ease-out forwards;
  }

  .pop-burst-ring.ring-2 {
    width: 50px;
    height: 50px;
    border-width: 3px;
    animation-delay: 0.1s;
    border-color: hsl(var(--pop-hue), 70%, 70%);
  }

  @keyframes burstRingExpand {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
  }

  .pop-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    font-size: 1.3rem;
    font-weight: 900;
    color: white;
    padding: 0.5rem 1.2rem;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border-radius: 30px;
    box-shadow: 0 8px 25px rgba(34,197,94,0.4);
    animation: popValueAnim 0.9s ease forwards;
    z-index: 5;
  }

  @keyframes popValueAnim {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    25% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    60% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -100%) scale(0.9); opacity: 0; }
  }

  .pop-particle {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: particleBurst 0.7s ease-out forwards;
  }

  .pop-particle.confetti {
    width: var(--psize);
    height: calc(var(--psize) * 0.5);
    background: hsl(var(--phue), 80%, 60%);
    border-radius: 2px;
    transform: rotate(var(--protation));
  }

  .pop-particle.spark {
    width: var(--psize);
    height: var(--psize);
    background: hsl(var(--phue), 90%, 80%);
    border-radius: 50%;
  }

  .pop-particle.ring {
    width: var(--psize);
    height: var(--psize);
    border: 2px solid hsl(var(--phue), 80%, 70%);
    border-radius: 50%;
    background: transparent;
  }

  @keyframes particleBurst {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--px), var(--py)) scale(0.3); opacity: 0; }
  }

  /* ───────── REJECT EFFECT ───────── */

  .reject-effect {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 200;
    animation: rejectShake 0.4s ease-out;
  }

  @keyframes rejectShake {
    0% { transform: translate(-50%, -50%); }
    15% { transform: translate(calc(-50% + 6px), -50%); }
    30% { transform: translate(calc(-50% - 6px), -50%); }
    45% { transform: translate(calc(-50% + 4px), -50%); }
    60% { transform: translate(calc(-50% - 4px), -50%); }
    75% { transform: translate(calc(-50% + 2px), -50%); }
    100% { transform: translate(-50%, -50%); }
  }

  .reject-x {
    font-size: 3rem;
    color: #ef4444;
    font-weight: 900;
    animation: rejectXPop 0.5s ease forwards;
    text-shadow: 0 3px 10px rgba(239,68,68,0.4);
  }

  @keyframes rejectXPop {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    30% { transform: scale(1.4) rotate(5deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 0; }
  }

  .reject-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border: 3px solid #ef4444;
    border-radius: 50%;
    animation: rejectRingExpand 0.5s ease-out forwards;
  }

  @keyframes rejectRingExpand {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  }

  /* ───────── COMBO ───────── */

  .combo-popup {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    background: linear-gradient(90deg, #f97316, #fbbf24, #f97316);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: comboPopIn 1.2s ease forwards, rainbowShift 1s ease infinite;
    z-index: 150;
    white-space: nowrap;
    filter: drop-shadow(0 2px 8px rgba(249,115,22,0.5));
  }

  @keyframes comboPopIn {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
    40% { transform: translate(-50%, -50%) scale(1.0); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(0.8); opacity: 0; }
  }

  .combo-badge {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 0.8rem;
    background: rgba(249,115,22,0.15);
    border: 2px solid rgba(249,115,22,0.3);
    border-radius: 16px;
    z-index: 50;
    animation: comboBadgePulse 0.8s ease-in-out infinite;
  }

  @keyframes comboBadgePulse {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.08); }
  }

  .combo-fire { font-size: 1.1rem; }

  .combo-count {
    font-size: 1rem;
    font-weight: 900;
    color: #ea580c;
  }

  /* ───────── BOTTOM BAR ───────── */

  .bottom-bar {
    padding: 0.6rem;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(8px);
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.3);
  }

  .hint-text {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 600;
  }

  .hint-drag { color: #3b82f6; }
  .hint-types { color: #8b5cf6; }

  .empty-hint {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #94a3b8;
    font-size: 1rem;
    font-weight: 600;
    animation: emptyPulse 2s ease-in-out infinite;
    z-index: 5;
  }

  @keyframes emptyPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* ───────── LEVEL COMPLETE SCREEN ───────── */

  .complete-screen, .gameover-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .complete-screen {
    background: linear-gradient(180deg, #87CEEB 0%, #D4F0FC 50%, #F0F9FF 100%);
  }

  .gameover-screen {
    background: linear-gradient(180deg, #1e293b 0%, #334155 50%, #1e293b 100%);
  }

  .complete-sky {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .confetti-piece {
    position: absolute;
    top: -10px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: hsl(var(--conf-hue), 80%, 60%);
    animation: confettiFall var(--conf-duration) ease-in var(--conf-delay) infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) translateX(var(--conf-drift)) rotate(720deg); opacity: 0.3; }
  }

  .complete-sparkle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fbbf24;
    border-radius: 50%;
    animation: sparkleFlash 1.5s ease-in-out var(--sparkle-delay) infinite;
  }

  @keyframes sparkleFlash {
    0%, 100% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.5); opacity: 1; }
  }

  .complete-content, .gameover-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 450px;
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: #1e293b;
    margin-bottom: 1rem;
    animation: titleSlideIn 0.6s ease-out;
  }

  @keyframes titleSlideIn {
    0% { transform: translateY(-30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .gameover-balloon-burst {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 1rem;
  }

  .burst-ring {
    position: absolute;
    inset: 0;
    border: 3px solid #ef4444;
    border-radius: 50%;
    animation: burstRingExpand 2s ease-out infinite;
  }

  .burst-ring.r2 {
    animation-delay: 0.4s;
    border-color: #f97316;
  }

  .burst-ring.r3 {
    animation-delay: 0.8s;
    border-color: #fbbf24;
  }

  .gameover-emoji {
    font-size: 4rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  .gameover-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: #f87171;
    margin-bottom: 0.5rem;
  }

  .gameover-sub {
    color: #94a3b8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .stars-row {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .star {
    font-size: 3rem;
    animation: starPop 0.5s ease var(--star-delay) both;
  }

  .star.empty {
    opacity: 0.2;
    filter: grayscale(1);
    animation: none;
  }

  @keyframes starPop {
    0% { transform: scale(0) rotate(-30deg); opacity: 0; }
    60% { transform: scale(1.3) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .complete-stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.2rem;
    font-weight: 600;
  }

  .gameover-screen .stat-label {
    color: #94a3b8;
  }

  .stat-value {
    font-size: 1.8rem;
    font-weight: 900;
    color: #1e293b;
  }

  .gameover-screen .stat-value {
    color: #f1f5f9;
  }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(59,130,246,0.3);
  }

  .next-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(59,130,246,0.4);
  }

  .menu-btn {
    padding: 0.7rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #64748b;
    background: transparent;
    border: 2px solid rgba(100,116,139,0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .gameover-screen .menu-btn {
    color: #94a3b8;
    border-color: rgba(148,163,184,0.3);
  }

  .menu-btn:hover {
    border-color: rgba(100,116,139,0.6);
    color: #334155;
  }

  .gameover-screen .menu-btn:hover {
    border-color: rgba(148,163,184,0.6);
    color: #e2e8f0;
  }

  /* ───────── RESPONSIVE ───────── */

  @media (max-width: 600px) {
    .intro-card {
      padding: 1rem;
      margin-bottom: 1.2rem;
    }

    .inst-balloon.numeral { width: 34px; height: 40px; font-size: 1rem; }
    .inst-balloon.word { padding: 3px 10px; height: 34px; font-size: 0.75rem; }
    .inst-balloon.dots-demo { width: 38px; height: 44px; }

    .intro-tagline { font-size: 0.95rem; margin-bottom: 1rem; }

    .complete-stats { gap: 1rem; }
    .stat-value { font-size: 1.5rem; }

    .header-center .lives-display { gap: 0.1rem; }
    .heart { font-size: 0.8rem; }
    .progress-bar-bg { width: 70px; }
    .hint-text { flex-direction: column; gap: 0.2rem; }
    .balloon-numeral { font-size: 1.5rem; }
    .balloon-word { font-size: 0.75rem; }
    .balloon-word.med { font-size: 0.65rem; }
    .balloon-word.long { font-size: 0.55rem; }
  }

  @media (max-height: 500px) {
    .intro-content { padding: 0.8rem; }
    .intro-card { padding: 0.8rem; margin-bottom: 1rem; }
    .intro-instruction { margin-bottom: 0.6rem; }
    .intro-logo { margin-bottom: 0; }
    .intro-tagline { margin-bottom: 0.8rem; font-size: 0.9rem; }
    .logo-emoji { font-size: 1.8rem; }
    .game-header { padding: 0.4rem 0.8rem; }
    .bottom-bar { padding: 0.4rem; }
  }
`;
