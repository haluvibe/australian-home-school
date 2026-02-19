"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Physics constants
const FRICTION = 0.98;
const BOUNCE = 0.7;
const MERGE_DISTANCE = 65;
const CAPTURE_DISTANCE = 100;

interface Creature {
  emoji: string;
  name: string;
}

const CREATURES: Creature[] = [
  { emoji: '🦋', name: 'Butterfly' },
  { emoji: '🐸', name: 'Frog' },
  { emoji: '🦎', name: 'Lizard' },
  { emoji: '🐢', name: 'Turtle' },
  { emoji: '🦚', name: 'Peacock' },
  { emoji: '🐙', name: 'Octopus' },
  { emoji: '🦀', name: 'Crab' },
  { emoji: '🐠', name: 'Fish' },
];

interface Bubble {
  id: number;
  value: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
}

interface DraggedBubble extends Bubble {
  offsetX: number;
  offsetY: number;
}

interface Target {
  id: number;
  emoji: string;
  name: string;
  targetValue: number;
  x: number;
  captured: boolean;
}

interface Position {
  x: number;
  y: number;
}

interface MergeEffect {
  id: number;
  x: number;
  y: number;
  value: number;
  from: [number, number];
}

interface SplitEffect {
  id: number;
  x: number;
  y: number;
  from: number;
  to: [number, number];
}

interface CaptureEffect {
  id: number;
  x: number;
  y: number;
  emoji: string;
  value: number;
}

interface Tutorial {
  step: number;
  show: boolean;
}

interface ContainerSize {
  width: number;
  height: number;
}

type GameScreen = 'intro' | 'playing' | 'complete';

let bubbleIdCounter = 0;
const getNewId = (): number => ++bubbleIdCounter;

export default function BubbleMathLab() {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [targets, setTargets] = useState<Target[]>([]);
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [mergeEffect, setMergeEffect] = useState<MergeEffect | null>(null);
  const [splitEffect, setSplitEffect] = useState<SplitEffect | null>(null);
  const [captureEffect, setCaptureEffect] = useState<CaptureEffect | null>(null);
  const [draggedBubble, setDraggedBubble] = useState<DraggedBubble | null>(null);
  const [tutorial, setTutorial] = useState<Tutorial>({ step: 0, show: true });
  const [levelComplete, setLevelComplete] = useState<boolean>(false);
  const [nearbyTarget, setNearbyTarget] = useState<Target | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const targetsRowRef = useRef<HTMLDivElement>(null);
  const targetElementsRef = useRef<Record<number, HTMLDivElement>>({});
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const spawnIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const targetsRef = useRef<Target[]>(targets);

  useEffect(() => {
    targetsRef.current = targets;
  }, [targets]);

  const getContainerSize = useCallback((): ContainerSize => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 500 };
  }, []);

  const getTargetPosition = useCallback((target: Target): Position => {
    const el = targetElementsRef.current[target.id];
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = el.getBoundingClientRect();
      return {
        x: targetRect.left + targetRect.width / 2 - containerRect.left,
        y: targetRect.top + targetRect.height / 2 - containerRect.top,
      };
    }
    return { x: target.x, y: -50 };
  }, []);

  const getTargetY = useCallback((): number => {
    if (targetsRowRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rowRect = targetsRowRef.current.getBoundingClientRect();
      return rowRect.top + rowRect.height / 2 - containerRect.top;
    }
    return -50;
  }, []);

  // Keep getTargetY in dep array to avoid lint warnings
  void getTargetY;

  const createBubble = useCallback((value: number, x?: number, y?: number, vx = 0, vy = 0): Bubble => {
    const size = getContainerSize();
    return {
      id: getNewId(),
      value: Math.max(1, Math.min(value, 99)),
      x: x ?? 50 + Math.random() * (size.width - 100),
      y: y ?? 100 + Math.random() * (size.height - 300),
      vx: vx || (Math.random() - 0.5) * 2,
      vy: vy || (Math.random() - 0.5) * 2,
      radius: Math.min(25 + value * 1.5, 55),
      hue: (value * 25) % 360,
    };
  }, [getContainerSize]);

  const performCapture = useCallback((bubble: Bubble, target: Target): void => {
    const pos = getTargetPosition(target);
    setCaptureEffect({
      id: Date.now(),
      x: pos.x,
      y: pos.y,
      emoji: target.emoji,
      value: bubble.value
    });
    setTimeout(() => setCaptureEffect(null), 1000);

    setTargets(prev => prev.map(t =>
      t.id === target.id ? { ...t, captured: true } : t
    ));
    setBubbles(prev => prev.filter(b => b.id !== bubble.id));
    setScore(s => s + bubble.value * 10);
    setNearbyTarget(null);

    if (tutorial.show && tutorial.step === 2) {
      setTutorial({ step: 3, show: false });
    }
  }, [getTargetPosition, tutorial]);

  const checkBubbleCapture = useCallback((bubble: Bubble, immediateCapture = false): Target | null => {
    if (!bubble) return null;
    let capturedTarget: Target | null = null;

    targetsRef.current.forEach(target => {
      if (target.captured) return;
      if (bubble.value !== target.targetValue) return;
      const pos = getTargetPosition(target);
      const dx = bubble.x - pos.x;
      const dy = bubble.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CAPTURE_DISTANCE + bubble.radius) {
        capturedTarget = target;
      }
    });

    if (capturedTarget && immediateCapture) {
      performCapture(bubble, capturedTarget);
    }
    return capturedTarget;
  }, [getTargetPosition, performCapture]);

  const findNearbyMatchingTarget = useCallback((bubble: Bubble): Target | null => {
    if (!bubble) return null;
    let closest: Target | null = null;
    let closestDist = Infinity;

    targetsRef.current.forEach(target => {
      if (target.captured) return;
      if (bubble.value !== target.targetValue) return;
      const pos = getTargetPosition(target);
      const dx = bubble.x - pos.x;
      const dy = bubble.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CAPTURE_DISTANCE * 1.5 + bubble.radius && dist < closestDist) {
        closest = target;
        closestDist = dist;
      }
    });
    return closest;
  }, [getTargetPosition]);

  const initLevel = useCallback((lvl: number): void => {
    const size = getContainerSize();
    setLevelComplete(false);
    setMergeEffect(null);
    setSplitEffect(null);
    setCaptureEffect(null);
    setDraggedBubble(null);
    setNearbyTarget(null);
    targetElementsRef.current = {};

    const baseMax = 5 + Math.floor(lvl * 1.5);
    const maxBubbleValue = Math.min(baseMax, 15);
    const numBubbles = Math.min(4 + Math.floor(lvl / 2), 8);
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < numBubbles; i++) {
      const value = 1 + Math.floor(Math.random() * maxBubbleValue);
      newBubbles.push(createBubble(value));
    }

    const numTargets = Math.min(2 + Math.floor(lvl / 2), 5);
    const newTargets: Target[] = [];
    const minTarget = 5 + Math.floor(lvl * 0.5);
    const maxTarget = Math.min(10 + lvl * 2, 30);

    for (let i = 0; i < numTargets; i++) {
      const creature = CREATURES[i % CREATURES.length];
      const targetValue = minTarget + Math.floor(Math.random() * (maxTarget - minTarget + 1));
      const spacing = size.width / (numTargets + 1);
      newTargets.push({
        id: getNewId(),
        emoji: creature.emoji,
        name: creature.name,
        targetValue,
        x: spacing * (i + 1),
        captured: false,
      });
    }

    setBubbles(newBubbles);
    setTargets(newTargets);
  }, [createBubble, getContainerSize]);

  const startGame = (): void => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setTutorial({ step: 0, show: true });
    initLevel(1);
  };

  const nextLevel = (): void => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // Level completion check
  useEffect(() => {
    if (gameState !== 'playing' || levelComplete) return;
    const allCaptured = targets.length > 0 && targets.every(t => t.captured);
    if (allCaptured) {
      setLevelComplete(true);
      setTimeout(() => setGameState('complete'), 1000);
    }
  }, [targets, gameState, levelComplete]);

  // Physics loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const updatePhysics = (timestamp: number): void => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 2);
      lastTimeRef.current = timestamp;
      const size = getContainerSize();

      setBubbles(prev => prev.map(bubble => {
        if (draggedBubble?.id === bubble.id) return bubble;
        let { x, y, vx, vy, radius } = bubble;
        x += vx * delta;
        y += vy * delta;
        vx *= FRICTION;
        vy *= FRICTION;
        const minX = radius;
        const maxX = size.width - radius;
        const minY = radius + 50;
        const maxY = size.height - 100 - radius;
        if (x < minX) { x = minX; vx = Math.abs(vx) * BOUNCE; }
        if (x > maxX) { x = maxX; vx = -Math.abs(vx) * BOUNCE; }
        if (y < minY) { y = minY; vy = Math.abs(vy) * BOUNCE; }
        if (y > maxY) { y = maxY; vy = -Math.abs(vy) * BOUNCE; }
        vx += (Math.random() - 0.5) * 0.1;
        vy += (Math.random() - 0.5) * 0.1;
        return { ...bubble, x, y, vx, vy };
      }));

      animationRef.current = requestAnimationFrame(updatePhysics);
    };

    animationRef.current = requestAnimationFrame(updatePhysics);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameState, draggedBubble, getContainerSize]);

  // Periodic capture check for non-dragged bubbles
  useEffect(() => {
    if (gameState !== 'playing') return;
    const interval = setInterval(() => {
      setBubbles(prev => {
        let changed = false;
        const remaining = prev.filter(bubble => {
          if (draggedBubble?.id === bubble.id) return true;
          const target = checkBubbleCapture(bubble, false);
          if (target) {
            performCapture(bubble, target);
            changed = true;
            return false;
          }
          return true;
        });
        return changed ? remaining : prev;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [gameState, draggedBubble, checkBubbleCapture, performCapture]);

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    bubble: Bubble
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDraggedBubble({
      ...bubble,
      offsetX: clientX - rect.left - bubble.x,
      offsetY: clientY - rect.top - bubble.y,
    });
    setNearbyTarget(findNearbyMatchingTarget(bubble));
    if (tutorial.show && tutorial.step === 0) setTutorial({ step: 1, show: true });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent): void => {
    if (!draggedBubble || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(30, Math.min(rect.width - 30, clientX - rect.left - draggedBubble.offsetX));
    const minY = targetsRowRef.current
      ? targetsRowRef.current.getBoundingClientRect().top - rect.top
      : -120;
    const newY = Math.max(minY, Math.min(rect.height - 100, clientY - rect.top - draggedBubble.offsetY));
    const updatedBubble: Bubble = { ...draggedBubble, x: newX, y: newY };
    setNearbyTarget(findNearbyMatchingTarget(updatedBubble));

    const captureTarget = checkBubbleCapture(updatedBubble, false);
    if (captureTarget) {
      const pos = getTargetPosition(captureTarget);
      const dx = pos.x - newX;
      const dy = pos.y - newY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 60) {
        performCapture(updatedBubble, captureTarget);
        setDraggedBubble(null);
        return;
      }
    }

    setBubbles(prev => prev.map(b =>
      b.id === draggedBubble.id ? { ...b, x: newX, y: newY, vx: 0, vy: 0 } : b
    ));
  }, [draggedBubble, findNearbyMatchingTarget, checkBubbleCapture, performCapture, getTargetPosition]);

  const handleDragEnd = useCallback((): void => {
    if (!draggedBubble) return;
    setNearbyTarget(null);
    const currentBubble = bubbles.find(b => b.id === draggedBubble.id);
    if (!currentBubble) { setDraggedBubble(null); return; }

    const captureTarget = checkBubbleCapture(currentBubble, false);
    if (captureTarget) {
      performCapture(currentBubble, captureTarget);
      setDraggedBubble(null);
      return;
    }

    setBubbles(prevBubbles => {
      const dragged = prevBubbles.find(b => b.id === draggedBubble.id);
      if (!dragged) { setDraggedBubble(null); return prevBubbles; }

      let mergeTarget: Bubble | null = null;
      let minDist = MERGE_DISTANCE;
      prevBubbles.forEach(other => {
        if (other.id === dragged.id) return;
        const dx = dragged.x - other.x;
        const dy = dragged.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) { minDist = dist; mergeTarget = other; }
      });

      if (mergeTarget) {
        const mt = mergeTarget as Bubble;
        const newValue = dragged.value + mt.value;
        const newX = (dragged.x + mt.x) / 2;
        const newY = (dragged.y + mt.y) / 2;
        setMergeEffect({ id: Date.now(), x: newX, y: newY, value: newValue, from: [dragged.value, mt.value] });
        setTimeout(() => setMergeEffect(null), 800);
        if (tutorial.show && tutorial.step === 1) setTutorial({ step: 2, show: true });
        setDraggedBubble(null);
        return [...prevBubbles.filter(b => b.id !== dragged.id && b.id !== mt.id), createBubble(newValue, newX, newY, 0, 0)];
      }

      setDraggedBubble(null);
      return prevBubbles.map(b =>
        b.id === dragged.id ? { ...b, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3 } : b
      );
    });
  }, [draggedBubble, bubbles, createBubble, checkBubbleCapture, performCapture, tutorial]);

  const handleSplit = useCallback((bubble: Bubble): void => {
    if (bubble.value <= 1) return;
    const half = Math.floor(bubble.value / 2);
    const other = bubble.value - half;
    setSplitEffect({ id: Date.now(), x: bubble.x, y: bubble.y, from: bubble.value, to: [half, other] });
    setTimeout(() => setSplitEffect(null), 800);
    const offset = 40;
    setBubbles(prev => [
      ...prev.filter(b => b.id !== bubble.id),
      createBubble(half, bubble.x - offset, bubble.y, -2, (Math.random() - 0.5) * 2),
      createBubble(other, bubble.x + offset, bubble.y, 2, (Math.random() - 0.5) * 2),
    ]);
  }, [createBubble]);

  // Drag event listeners
  useEffect(() => {
    if (!draggedBubble) return;
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
  }, [draggedBubble, handleDragMove, handleDragEnd]);

  // Bubble spawning
  useEffect(() => {
    if (gameState !== 'playing') {
      if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
      return;
    }
    spawnIntervalRef.current = setInterval(() => {
      setBubbles(prev => {
        if (prev.length >= 10) return prev;
        const maxVal = Math.min(5 + level, 12);
        const value = 1 + Math.floor(Math.random() * maxVal);
        return [...prev, createBubble(value)];
      });
    }, 4000);
    return () => { if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current); };
  }, [gameState, level, createBubble]);

  const rescuedCount = targets.filter(t => t.captured).length;
  const totalTargets = targets.length;
  const isTargetHighlighted = (target: Target): boolean => nearbyTarget?.id === target.id;

  if (gameState === 'intro') {
    return (
      <div className="bubble-lab">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bg-bubble" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 20 + Math.random() * 40,
                height: 20 + Math.random() * 40,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-bubble">🫧</span>
              <h1>Bubble Math Lab</h1>
              <span className="logo-bubble">🧪</span>
            </div>
            <p className="tagline">Where Numbers Come Alive!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-bubble">3</span>
                  <span className="plus">+</span>
                  <span className="mini-bubble">5</span>
                  <span className="arrow">→</span>
                  <span className="mini-bubble big">8</span>
                </div>
                <p><strong>DRAG</strong> bubbles together to <span className="highlight add">ADD</span> them!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-bubble big">7</span>
                  <span className="arrow">→</span>
                  <span className="mini-bubble">3</span>
                  <span className="mini-bubble">4</span>
                </div>
                <p><strong>DOUBLE-TAP</strong> a bubble to <span className="highlight sub">SPLIT</span> it!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-bubble">10</span>
                  <span className="arrow">→</span>
                  <span className="creature-icon">🦋</span>
                  <span className="need-text">needs 10</span>
                </div>
                <p><strong>DRAG</strong> matching bubbles to <span className="highlight rescue">RESCUE</span> creatures!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-bubbles">🫧</span>
              Start Experimenting
              <span className="btn-bubbles">🫧</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'complete') {
    return (
      <div className="bubble-lab">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {targets.map((t, i) => (
              <div key={t.id} className="floating-creature" style={{ left: `${15 + i * 20}%`, animationDelay: `${i * 0.3}s` }}>
                {t.emoji}
              </div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">🎉 Level {level} Complete! 🎉</h1>
            <div className="rescued-display">
              <div className="rescued-creatures">
                {targets.map((t) => <span key={t.id} className="rescued-emoji">{t.emoji}</span>)}
              </div>
              <p>All creatures rescued!</p>
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Creatures Saved</span>
                <span className="score-value">{targets.length}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={nextLevel}>Level {level + 1} →</button>
              <button className="menu-btn" onClick={() => setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bubble-lab">
      <style>{styles}</style>
      <div className="game-screen">
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => setGameState('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="rescue-progress">
              <span className="rescue-icon">🦋</span>
              <span className="rescue-text">{rescuedCount} / {totalTargets}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        <div className="targets-row" ref={targetsRowRef}>
          {targets.map(target => (
            <div
              key={target.id}
              ref={el => { if (el) targetElementsRef.current[target.id] = el; }}
              className={`target ${target.captured ? 'captured' : ''} ${isTargetHighlighted(target) ? 'highlighted' : ''}`}
            >
              <div className="target-glow" />
              <div className="target-creature">{target.emoji}</div>
              <div className="target-need">{target.captured ? '✓' : target.targetValue}</div>
              {!target.captured && <div className="target-label">needs</div>}
              {!target.captured && <div className="target-hitzone" />}
            </div>
          ))}
        </div>

        <div className="bubble-container" ref={containerRef}>
          {draggedBubble && nearbyTarget && (() => {
            const tPos = getTargetPosition(nearbyTarget);
            return (
              <svg className="connection-line">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <line
                  x1={bubbles.find(b => b.id === draggedBubble.id)?.x || 0}
                  y1={bubbles.find(b => b.id === draggedBubble.id)?.y || 0}
                  x2={tPos.x}
                  y2={tPos.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  opacity="0.8"
                />
              </svg>
            );
          })()}

          {bubbles.map(bubble => {
            const isDragging = draggedBubble?.id === bubble.id;
            const isMatching = isDragging && nearbyTarget;
            return (
              <div
                key={bubble.id}
                className={`bubble ${isDragging ? 'dragging' : ''} ${isMatching ? 'matching' : ''}`}
                style={{ left: bubble.x, top: bubble.y, width: bubble.radius * 2, height: bubble.radius * 2, '--bubble-hue': bubble.hue } as React.CSSProperties}
                onMouseDown={(e) => handleDragStart(e, bubble)}
                onTouchStart={(e) => handleDragStart(e, bubble)}
                onDoubleClick={() => handleSplit(bubble)}
              >
                <div className="bubble-shine" />
                <div className="bubble-value">{bubble.value}</div>
                {isMatching && <div className="bubble-match-ring" />}
              </div>
            );
          })}

          {mergeEffect && (
            <div key={mergeEffect.id} className="merge-effect" style={{ left: mergeEffect.x, top: mergeEffect.y }}>
              <div className="merge-equation">{mergeEffect.from[0]} + {mergeEffect.from[1]} = {mergeEffect.value}</div>
              <div className="merge-burst" />
            </div>
          )}
          {splitEffect && (
            <div key={splitEffect.id} className="split-effect" style={{ left: splitEffect.x, top: splitEffect.y }}>
              <div className="split-equation">{splitEffect.from} → {splitEffect.to[0]} + {splitEffect.to[1]}</div>
            </div>
          )}
          {captureEffect && (
            <div key={captureEffect.id} className="capture-effect" style={{ left: captureEffect.x, top: captureEffect.y }}>
              <div className="capture-emoji">{captureEffect.emoji}</div>
              <div className="capture-text">Rescued!</div>
              <div className="capture-sparkles">✨</div>
            </div>
          )}

          {tutorial.show && gameState === 'playing' && (
            <div className="tutorial-overlay">
              {tutorial.step === 0 && (
                <div className="tutorial-tip" style={{ bottom: '30%', left: '50%' }}>
                  <span className="tutorial-icon">👆</span>
                  <p>Drag a bubble!</p>
                </div>
              )}
              {tutorial.step === 1 && (
                <div className="tutorial-tip" style={{ bottom: '30%', left: '50%' }}>
                  <span className="tutorial-icon">🫧</span>
                  <p>Drag into another bubble to add!</p>
                </div>
              )}
              {tutorial.step === 2 && (
                <div className="tutorial-tip" style={{ top: '20%', left: '50%' }}>
                  <span className="tutorial-icon">🦋</span>
                  <p>Drag matching numbers to creatures!</p>
                </div>
              )}
            </div>
          )}

          {bubbles.length === 0 && (
            <div className="empty-hint"><p>New bubbles spawning...</p></div>
          )}
        </div>

        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-merge">🫧 Drag together = Add</span>
            <span className="hint-split">👆👆 Double-tap = Split</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .bubble-lab {
    width: 100%;
    height: calc(100vh - 72px);
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  }

  .intro-screen, .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .bg-bubble {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(56,189,248,0.3), rgba(139,92,246,0.1));
    animation: floatBubble 6s ease-in-out infinite;
  }

  @keyframes floatBubble {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
    50% { transform: translateY(-30px) scale(1.1); opacity: 0.5; }
  }

  .intro-content, .complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .logo { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.5rem; }

  .logo h1 {
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #38bdf8, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .logo-bubble { font-size: 2.5rem; animation: logoBounce 2s ease-in-out infinite; }
  .logo-bubble:last-child { animation-delay: 0.3s; }

  @keyframes logoBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(10deg); }
  }

  .tagline { color: #94a3b8; font-size: 1.2rem; margin-bottom: 2rem; }

  .instructions-card {
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1.5rem; }

  .instruction { margin-bottom: 1.5rem; }
  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem;
  }

  .mini-bubble {
    width: 36px; height: 36px; border-radius: 50%;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 1rem;
  }

  .mini-bubble.big {
    width: 44px; height: 44px; font-size: 1.2rem;
    background: linear-gradient(135deg, #c084fc, #f472b6);
  }

  .plus, .arrow { color: #64748b; font-size: 1.2rem; }
  .creature-icon { font-size: 2rem; }
  .need-text { font-size: 0.8rem; color: #94a3b8; }
  .instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .highlight { font-weight: 700; }
  .highlight.add { color: #4ade80; }
  .highlight.sub { color: #fb923c; }
  .highlight.rescue { color: #38bdf8; }

  .start-btn, .next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(59,130,246,0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(59,130,246,0.5);
  }

  .btn-bubbles { font-size: 1.5rem; }

  .complete-bg { position: absolute; inset: 0; overflow: hidden; }

  .floating-creature {
    position: absolute; top: 20%; font-size: 4rem;
    animation: floatCreature 3s ease-in-out infinite;
  }

  @keyframes floatCreature {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .complete-title { font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 1.5rem; }
  .rescued-display { margin-bottom: 2rem; }

  .rescued-creatures { display: flex; justify-content: center; gap: 1rem; margin-bottom: 0.5rem; }

  .rescued-emoji { font-size: 3rem; animation: rescuedBounce 1s ease infinite; }
  .rescued-emoji:nth-child(2) { animation-delay: 0.2s; }
  .rescued-emoji:nth-child(3) { animation-delay: 0.4s; }
  .rescued-emoji:nth-child(4) { animation-delay: 0.6s; }
  .rescued-emoji:nth-child(5) { animation-delay: 0.8s; }

  @keyframes rescuedBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .rescued-display p { color: #94a3b8; font-size: 1.1rem; }

  .score-card { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; }
  .score-item { display: flex; flex-direction: column; align-items: center; }
  .score-label { font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem; }
  .score-value { font-size: 2rem; font-weight: 900; color: white; }

  .complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  .game-screen { height: 100%; display: flex; flex-direction: column; position: relative; }

  .game-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.8rem 1rem; background: rgba(0,0,0,0.4); z-index: 50;
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.8rem; }

  .back-btn {
    width: 40px; height: 40px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 12px; color: white; font-size: 1.2rem;
    cursor: pointer; transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(255,255,255,0.2); }

  .level-badge {
    padding: 0.5rem 1rem; background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 20px; font-weight: 700; color: white;
  }

  .rescue-progress {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border-radius: 20px;
  }

  .rescue-icon { font-size: 1.2rem; }
  .rescue-text { color: white; font-weight: 600; }

  .score-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem; background: rgba(251,191,36,0.2);
    border-radius: 20px; color: #fbbf24; font-weight: 700;
  }

  .targets-row {
    display: flex; justify-content: center; gap: 1rem; padding: 1rem;
    background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%);
    flex-wrap: wrap; min-height: 110px;
  }

  .target {
    position: relative; display: flex; flex-direction: column; align-items: center;
    padding: 0.8rem 1.2rem; background: rgba(255,255,255,0.05);
    border: 3px solid rgba(255,255,255,0.15); border-radius: 20px;
    transition: all 0.3s ease; min-width: 85px;
  }

  .target-glow {
    position: absolute; inset: -10px; border-radius: 30px;
    background: radial-gradient(circle, transparent 30%, transparent 100%);
    opacity: 0; transition: all 0.3s ease; pointer-events: none;
  }

  .target.highlighted { border-color: #4ade80; transform: scale(1.1); z-index: 10; }

  .target.highlighted .target-glow {
    opacity: 1;
    background: radial-gradient(circle, rgba(74,222,128,0.4) 0%, transparent 70%);
    animation: targetPulse 1s ease-in-out infinite;
  }

  @keyframes targetPulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  .target.captured { background: rgba(74,222,128,0.2); border-color: #4ade80; }
  .target-creature { font-size: 2.2rem; margin-bottom: 0.2rem; }
  .target-need { font-size: 1.5rem; font-weight: 900; color: white; }
  .target.captured .target-need { color: #4ade80; }
  .target.highlighted .target-need { color: #4ade80; }
  .target-label { font-size: 0.7rem; color: #64748b; }

  .target-hitzone {
    position: absolute; inset: -20px;
    border: 2px dashed rgba(255,255,255,0.1); border-radius: 30px; pointer-events: none;
  }

  .target.highlighted .target-hitzone { border-color: rgba(74,222,128,0.5); animation: hitzoneGlow 1s ease-in-out infinite; }

  @keyframes hitzoneGlow {
    0%, 100% { border-color: rgba(74,222,128,0.3); }
    50% { border-color: rgba(74,222,128,0.7); }
  }

  .bubble-container { flex: 1; position: relative; overflow: visible; touch-action: none; }

  .connection-line { position: absolute; inset: 0; pointer-events: none; z-index: 5; }

  .bubble {
    position: absolute; transform: translate(-50%, -50%); border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
      hsl(var(--bubble-hue), 80%, 70%) 0%,
      hsl(var(--bubble-hue), 70%, 50%) 50%,
      hsl(var(--bubble-hue), 60%, 40%) 100%);
    box-shadow:
      0 10px 30px hsla(var(--bubble-hue), 70%, 50%, 0.4),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
    cursor: grab; transition: box-shadow 0.2s ease;
    display: flex; align-items: center; justify-content: center; z-index: 10;
  }

  .bubble:hover {
    z-index: 20;
    box-shadow:
      0 15px 40px hsla(var(--bubble-hue), 70%, 50%, 0.6),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
  }

  .bubble.dragging {
    cursor: grabbing; transform: translate(-50%, -50%) scale(1.15); z-index: 100;
    box-shadow:
      0 20px 50px hsla(var(--bubble-hue), 70%, 50%, 0.7),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
  }

  .bubble.matching {
    box-shadow:
      0 0 30px rgba(74,222,128,0.8),
      0 20px 50px hsla(var(--bubble-hue), 70%, 50%, 0.7),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
  }

  .bubble-match-ring {
    position: absolute; inset: -8px; border: 3px solid #4ade80; border-radius: 50%;
    animation: matchRing 0.8s ease-in-out infinite;
  }

  @keyframes matchRing {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.15); opacity: 0.5; }
  }

  .bubble-shine {
    position: absolute; top: 15%; left: 20%; width: 30%; height: 20%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%);
    border-radius: 50%;
  }

  .bubble-value { font-size: 1.6rem; font-weight: 900; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.3); z-index: 2; }

  .merge-effect, .split-effect, .capture-effect {
    position: absolute; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 200; animation: effectPop 0.8s ease forwards;
  }

  @keyframes effectPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  }

  .merge-equation, .split-equation {
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border-radius: 30px; font-size: 1.4rem; font-weight: 900; color: white;
    white-space: nowrap; box-shadow: 0 10px 30px rgba(74,222,128,0.5);
  }

  .split-equation { background: linear-gradient(135deg, #fb923c, #f97316); box-shadow: 0 10px 30px rgba(251,146,60,0.5); }

  .merge-burst {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 100px; height: 100px; border: 3px solid #4ade80; border-radius: 50%;
    animation: burstRing 0.6s ease forwards;
  }

  @keyframes burstRing {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  }

  .capture-effect { display: flex; flex-direction: column; align-items: center; animation: captureFloat 1s ease forwards; }

  @keyframes captureFloat {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    30% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -100%) scale(1); opacity: 0; }
  }

  .capture-emoji { font-size: 3.5rem; }
  .capture-text { font-size: 1.3rem; font-weight: 800; color: #4ade80; }
  .capture-sparkles { font-size: 1.5rem; animation: sparkleRotate 0.5s linear infinite; }

  @keyframes sparkleRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .tutorial-overlay { position: absolute; inset: 0; pointer-events: none; z-index: 150; }

  .tutorial-tip {
    position: absolute; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
    padding: 1rem 1.5rem; background: rgba(0,0,0,0.9);
    border: 2px solid #fbbf24; border-radius: 20px;
    animation: tutorialBounce 1s ease-in-out infinite;
  }

  @keyframes tutorialBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
  }

  .tutorial-icon { font-size: 2rem; }
  .tutorial-tip p { color: white; font-weight: 600; font-size: 1rem; }

  .empty-hint { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #64748b; font-size: 1rem; }

  .bottom-bar { padding: 0.8rem; background: rgba(0,0,0,0.4); text-align: center; }

  .hint-text { display: flex; justify-content: center; gap: 2rem; font-size: 0.85rem; color: #64748b; }
  .hint-merge { color: #4ade80; }
  .hint-split { color: #fb923c; }

  @media (max-width: 600px) {
    .targets-row { gap: 0.6rem; padding: 0.8rem; }
    .target { padding: 0.5rem 0.8rem; min-width: 70px; }
    .target-creature { font-size: 1.8rem; }
    .target-need { font-size: 1.2rem; }
    .bubble-value { font-size: 1.3rem; }
    .hint-text { flex-direction: column; gap: 0.3rem; }
    .header-center { display: none; }
  }
`;
