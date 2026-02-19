"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Physics constants — match BubbleMathLab EXACTLY
const FRICTION = 0.98;
const BOUNCE = 0.7;
const MERGE_DISTANCE = 75;

interface RhymeFamily {
  suffix: string;
  words: string[];
}

const RHYME_FAMILIES: RhymeFamily[] = [
  { suffix: 'at', words: ['cat', 'hat', 'bat', 'mat', 'rat', 'sat', 'pat', 'fat'] },
  { suffix: 'og', words: ['dog', 'log', 'fog', 'hog', 'jog', 'bog'] },
  { suffix: 'un', words: ['sun', 'fun', 'run', 'bun'] },
  { suffix: 'an', words: ['can', 'fan', 'man', 'van', 'pan', 'ran', 'tan'] },
  { suffix: 'ig', words: ['big', 'dig', 'fig', 'pig', 'wig', 'jig'] },
  { suffix: 'op', words: ['hop', 'mop', 'top', 'pop', 'cop'] },
  { suffix: 'ed', words: ['bed', 'red', 'fed', 'led'] },
  { suffix: 'ug', words: ['bug', 'rug', 'mug', 'hug', 'tug', 'dug'] },
];

function getFamily(word: string): string | null {
  for (const fam of RHYME_FAMILIES) {
    if (fam.words.includes(word)) return fam.suffix;
  }
  return null;
}

function doRhyme(a: string, b: string): boolean {
  const fa = getFamily(a);
  const fb = getFamily(b);
  return fa !== null && fa === fb;
}

interface WordBubble {
  id: number;
  word: string;
  family: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
}

interface DraggedBubble extends WordBubble {
  offsetX: number;
  offsetY: number;
}

interface MergeEffect {
  id: number;
  x: number;
  y: number;
  wordA: string;
  wordB: string;
}

interface RepelEffect {
  id: number;
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
  size: number;
}

interface ContainerSize {
  width: number;
  height: number;
}

interface LevelConfig {
  families: string[];
  bubblesPerFamily: number;
  fuelNeeded: number;
  label: string;
}

const LEVEL_CONFIGS: LevelConfig[] = [
  { families: ['at'], bubblesPerFamily: 4, fuelNeeded: 2, label: '-at words' },
  { families: ['og'], bubblesPerFamily: 4, fuelNeeded: 2, label: '-og words' },
  { families: ['at', 'og'], bubblesPerFamily: 3, fuelNeeded: 3, label: '-at & -og mixed' },
  { families: ['un', 'an'], bubblesPerFamily: 3, fuelNeeded: 3, label: '-un & -an words' },
  { families: ['ig', 'op'], bubblesPerFamily: 3, fuelNeeded: 4, label: '-ig & -op words' },
  { families: ['ed', 'ug'], bubblesPerFamily: 3, fuelNeeded: 4, label: '-ed & -ug words' },
  { families: ['at', 'un', 'ig'], bubblesPerFamily: 2, fuelNeeded: 4, label: 'Three families!' },
  { families: ['og', 'op', 'ug', 'ed'], bubblesPerFamily: 2, fuelNeeded: 5, label: 'All mixed up!' },
];

const FAMILY_HUES: Record<string, number> = {
  at: 0, og: 45, un: 90, an: 140, ig: 200, op: 260, ed: 310, ug: 30,
};

type GameScreen = 'intro' | 'playing' | 'blastoff' | 'complete';

let bubbleIdCounter = 0;
const getNewId = (): number => ++bubbleIdCounter;

interface RhymeRocketProps {
  onExit?: () => void;
}

export default function RhymeRocket({ onExit }: RhymeRocketProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [bubbles, setBubbles] = useState<WordBubble[]>([]);
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [fuel, setFuel] = useState<number>(0);
  const [fuelNeeded, setFuelNeeded] = useState<number>(2);
  const [combo, setCombo] = useState<number>(0);
  const [mergeEffect, setMergeEffect] = useState<MergeEffect | null>(null);
  const [repelEffect, setRepelEffect] = useState<RepelEffect | null>(null);
  const [draggedBubble, setDraggedBubble] = useState<DraggedBubble | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nearbyBubble, setNearbyBubble] = useState<WordBubble | null>(null);
  const [rocketShake, setRocketShake] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const particleIdRef = useRef<number>(0);

  const getContainerSize = useCallback((): ContainerSize => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 500 };
  }, []);

  const createWordBubble = useCallback((word: string, family: string, x?: number, y?: number): WordBubble => {
    const size = getContainerSize();
    return {
      id: getNewId(),
      word,
      family,
      x: x ?? 60 + Math.random() * (size.width - 120),
      y: y ?? 60 + Math.random() * (size.height - 120),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: 44,
      hue: FAMILY_HUES[family] ?? 0,
    };
  }, [getContainerSize]);

  const spawnParticles = useCallback((x: number, y: number, count: number, hue: number, spread = 5): void => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * spread;
      newParticles.push({
        id: ++particleIdRef.current,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        hue: hue + Math.random() * 40 - 20,
        size: 3 + Math.random() * 5,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const pickWords = useCallback((familySuffix: string, count: number, exclude: string[]): string[] => {
    const fam = RHYME_FAMILIES.find(f => f.suffix === familySuffix);
    if (!fam) return [];
    const available = fam.words.filter(w => !exclude.includes(w));
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }, []);

  const initLevel = useCallback((lvl: number): void => {
    const config = LEVEL_CONFIGS[Math.min(lvl - 1, LEVEL_CONFIGS.length - 1)];
    setFuel(0);
    setFuelNeeded(config.fuelNeeded);
    setCombo(0);
    setMergeEffect(null);
    setRepelEffect(null);
    setDraggedBubble(null);
    setNearbyBubble(null);
    setParticles([]);
    setRocketShake(false);

    const newBubbles: WordBubble[] = [];
    const usedWords: string[] = [];

    for (const fam of config.families) {
      const words = pickWords(fam, config.bubblesPerFamily, usedWords);
      for (const w of words) {
        usedWords.push(w);
        newBubbles.push(createWordBubble(w, fam));
      }
    }

    setBubbles(newBubbles);
  }, [createWordBubble, pickWords]);

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

  // Blastoff check
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (fuel >= fuelNeeded) {
      setRocketShake(true);
      setTimeout(() => {
        setGameState('blastoff');
        setTimeout(() => {
          setGameState('complete');
        }, 3000);
      }, 1200);
    }
  }, [fuel, fuelNeeded, gameState]);

  // Particle physics
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles(prev => {
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1,
            life: p.life - 0.03,
          }))
          .filter(p => p.life > 0);
        return updated;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [particles.length]);

  // Main physics loop
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
        const minY = radius;
        const maxY = size.height - radius;
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

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    bubble: WordBubble
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
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent): void => {
    if (!draggedBubble || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(30, Math.min(rect.width - 30, clientX - rect.left - draggedBubble.offsetX));
    const newY = Math.max(30, Math.min(rect.height - 30, clientY - rect.top - draggedBubble.offsetY));

    setBubbles(prev => prev.map(b =>
      b.id === draggedBubble.id ? { ...b, x: newX, y: newY, vx: 0, vy: 0 } : b
    ));

    // Find nearby bubble
    let closest: WordBubble | null = null;
    let closestDist = MERGE_DISTANCE * 2;
    setBubbles(prev => {
      for (const other of prev) {
        if (other.id === draggedBubble.id) continue;
        const dx = newX - other.x;
        const dy = newY - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < closestDist) {
          closestDist = dist;
          closest = other;
        }
      }
      return prev;
    });
    setNearbyBubble(closest);
  }, [draggedBubble]);

  const handleDragEnd = useCallback((): void => {
    if (!draggedBubble) return;
    setNearbyBubble(null);

    setBubbles(prevBubbles => {
      const dragged = prevBubbles.find(b => b.id === draggedBubble.id);
      if (!dragged) { setDraggedBubble(null); return prevBubbles; }

      // Find closest bubble within merge distance
      let mergeTarget: WordBubble | null = null;
      let minDist = MERGE_DISTANCE;
      prevBubbles.forEach(other => {
        if (other.id === dragged.id) return;
        const dx = dragged.x - other.x;
        const dy = dragged.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) { minDist = dist; mergeTarget = other; }
      });

      if (mergeTarget) {
        const mt = mergeTarget as WordBubble;
        const midX = (dragged.x + mt.x) / 2;
        const midY = (dragged.y + mt.y) / 2;

        if (doRhyme(dragged.word, mt.word)) {
          // RHYME! Merge with celebration
          setMergeEffect({ id: Date.now(), x: midX, y: midY, wordA: dragged.word, wordB: mt.word });
          setTimeout(() => setMergeEffect(null), 1200);
          spawnParticles(midX, midY, 20, FAMILY_HUES[dragged.family] ?? 120, 6);

          setCombo(prev => {
            const newCombo = prev + 1;
            const bonus = newCombo >= 3 ? 2 : 1;
            setFuel(f => f + bonus);
            setScore(s => s + (100 * newCombo));
            return newCombo;
          });

          setRocketShake(true);
          setTimeout(() => setRocketShake(false), 400);

          setDraggedBubble(null);

          // Remove merged, spawn replacements
          const remaining = prevBubbles.filter(b => b.id !== dragged.id && b.id !== mt.id);

          // Spawn 2 new bubbles from random available families in current level
          const config = LEVEL_CONFIGS[Math.min(level - 1, LEVEL_CONFIGS.length - 1)];
          const newBubs: WordBubble[] = [];
          const existingWords = remaining.map(b => b.word);
          for (let i = 0; i < 2; i++) {
            const famIdx = Math.floor(Math.random() * config.families.length);
            const fam = config.families[famIdx];
            const picks = pickWords(fam, 1, [...existingWords, ...newBubs.map(b => b.word)]);
            if (picks.length > 0) {
              const size = getContainerSize();
              newBubs.push(createWordBubble(
                picks[0],
                fam,
                40 + Math.random() * (size.width - 80),
                40 + Math.random() * (size.height - 80),
              ));
            }
          }

          return [...remaining, ...newBubs];
        } else {
          // NOT a rhyme — repel!
          setRepelEffect({ id: Date.now(), x: midX, y: midY });
          setTimeout(() => setRepelEffect(null), 600);
          spawnParticles(midX, midY, 8, 0, 3);
          setCombo(0);

          setDraggedBubble(null);

          // Push bubbles apart
          const dx = dragged.x - mt.x;
          const dy = dragged.y - mt.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = 8;
          return prevBubbles.map(b => {
            if (b.id === dragged.id) return { ...b, vx: (dx / dist) * force, vy: (dy / dist) * force };
            if (b.id === mt.id) return { ...b, vx: -(dx / dist) * force, vy: -(dy / dist) * force };
            return b;
          });
        }
      }

      setDraggedBubble(null);
      return prevBubbles.map(b =>
        b.id === dragged.id ? { ...b, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3 } : b
      );
    });
  }, [draggedBubble, spawnParticles, level, pickWords, createWordBubble, getContainerSize]);

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

  const fuelPercent = Math.min((fuel / fuelNeeded) * 100, 100);
  const config = LEVEL_CONFIGS[Math.min(level - 1, LEVEL_CONFIGS.length - 1)];

  // ===================== INTRO SCREEN =====================
  if (gameState === 'intro') {
    return (
      <div className="rhyme-rocket">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="star-field">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 3,
                height: 1 + Math.random() * 3,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }} />
            ))}
            <div className="planet planet-1" />
            <div className="planet planet-2" />
            <div className="planet planet-3" />
          </div>
          <div className="intro-content">
            <div className="logo">
              <div className="logo-rocket">
                <div className="intro-rocket-body">
                  <div className="intro-rocket-window" />
                  <div className="intro-rocket-fin-l" />
                  <div className="intro-rocket-fin-r" />
                  <div className="intro-rocket-nose" />
                </div>
                <div className="intro-rocket-flame" />
              </div>
              <h1>Rhyme Rocket</h1>
            </div>
            <p className="tagline">Fuel your rocket with rhyming words!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-bubble rr-hue-0">cat</span>
                  <span className="plus">+</span>
                  <span className="mini-bubble rr-hue-0">hat</span>
                  <span className="arrow">=</span>
                  <span className="fuel-icon-sm">&#9981;</span>
                </div>
                <p><strong>DRAG</strong> two rhyming words together for <span className="highlight fuel-hl">FUEL</span>!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-bubble rr-hue-0">cat</span>
                  <span className="plus">+</span>
                  <span className="mini-bubble rr-hue-200">pig</span>
                  <span className="arrow">=</span>
                  <span className="repel-icon-sm">&#10060;</span>
                </div>
                <p>Non-rhyming words <span className="highlight repel-hl">REPEL</span> each other!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="fuel-bar-mini">
                    <span className="fuel-fill-mini" />
                  </span>
                  <span className="arrow">&rarr;</span>
                  <span className="mini-rocket-icon">&#128640;</span>
                </div>
                <p>Fill the fuel gauge to <span className="highlight launch-hl">BLAST OFF</span>!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">&#128640;</span>
              Launch Mission
              <span className="btn-icon">&#11088;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== BLASTOFF SCREEN =====================
  if (gameState === 'blastoff') {
    return (
      <div className="rhyme-rocket">
        <style>{styles}</style>
        <div className="blastoff-screen">
          <div className="star-field">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="star star-streak" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }} />
            ))}
          </div>
          <div className="blastoff-rocket">
            <div className="blastoff-rocket-body">
              <div className="intro-rocket-window" />
              <div className="intro-rocket-fin-l" />
              <div className="intro-rocket-fin-r" />
              <div className="intro-rocket-nose" />
            </div>
            <div className="blastoff-flame" />
            <div className="blastoff-smoke" />
          </div>
          <div className="blastoff-text">BLAST OFF!</div>
        </div>
      </div>
    );
  }

  // ===================== COMPLETE SCREEN =====================
  if (gameState === 'complete') {
    return (
      <div className="rhyme-rocket">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="star-field">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 3,
                height: 1 + Math.random() * 3,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }} />
            ))}
          </div>
          <div className="complete-content">
            <div className="complete-rocket-orbit">&#128640;</div>
            <h1 className="complete-title">Level {level} Complete!</h1>
            <p className="complete-sub">Your rocket reached the stars!</p>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Rhymes Found</span>
                <span className="score-value">{fuel}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Best Combo</span>
                <span className="score-value">{combo}x</span>
              </div>
            </div>
            <div className="complete-buttons">
              {level < 8 && (
                <button className="next-btn" onClick={nextLevel}>Level {level + 1} &rarr;</button>
              )}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PLAYING SCREEN =====================
  return (
    <div className="rhyme-rocket">
      <style>{styles}</style>
      <div className="game-screen">
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>&larr;</button>
            <div className="level-badge">Level {level}</div>
            <div className="level-label">{config.label}</div>
          </div>
          <div className="header-center">
            {combo >= 2 && (
              <div className="combo-badge">
                <span className="combo-fire">&#128293;</span>
                <span className="combo-text">{combo}x COMBO</span>
              </div>
            )}
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">&#11088;</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        <div className="play-area">
          {/* Rocket and fuel gauge on the left */}
          <div className="rocket-panel">
            <div className={`rocket-assembly ${rocketShake ? 'shake' : ''} ${fuel >= fuelNeeded ? 'launching' : ''}`}>
              <div className="rocket-body">
                <div className="rocket-nose" />
                <div className="rocket-hull">
                  <div className="rocket-window" />
                  <div className="rocket-stripe" />
                </div>
                <div className="rocket-fin-left" />
                <div className="rocket-fin-right" />
                <div className="rocket-base" />
                {fuel > 0 && (
                  <div className="rocket-idle-flame">
                    <div className="idle-flame-inner" />
                  </div>
                )}
              </div>
              <div className="launch-pad" />
            </div>
            <div className="fuel-gauge">
              <div className="fuel-gauge-glass">
                <div className="fuel-gauge-liquid" style={{ height: `${fuelPercent}%` }}>
                  <div className="fuel-gauge-shine" />
                </div>
                {[...Array(fuelNeeded)].map((_, i) => (
                  <div key={i} className="fuel-gauge-mark" style={{ bottom: `${((i + 1) / fuelNeeded) * 100}%` }} />
                ))}
              </div>
              <div className="fuel-gauge-label">FUEL</div>
              <div className="fuel-gauge-count">{fuel}/{fuelNeeded}</div>
            </div>
          </div>

          {/* Word bubble arena */}
          <div className="bubble-container" ref={containerRef}>
            {/* SVG connection lines between close rhyming words */}
            <svg className="connection-lines">
              <defs>
                <linearGradient id="rhymeLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {draggedBubble && nearbyBubble && (() => {
                const dragged = bubbles.find(b => b.id === draggedBubble.id);
                if (!dragged) return null;
                const rhymes = doRhyme(dragged.word, nearbyBubble.word);
                return (
                  <line
                    x1={dragged.x}
                    y1={dragged.y}
                    x2={nearbyBubble.x}
                    y2={nearbyBubble.y}
                    stroke={rhymes ? 'url(#rhymeLineGrad)' : 'rgba(239,68,68,0.5)'}
                    strokeWidth="3"
                    strokeDasharray={rhymes ? '8,4' : '4,4'}
                    opacity="0.8"
                  />
                );
              })()}
              {/* Ambient connection lines between nearby rhyming pairs */}
              {bubbles.map((a, i) =>
                bubbles.slice(i + 1).map(b => {
                  const dx = a.x - b.x;
                  const dy = a.y - b.y;
                  const dist = Math.sqrt(dx * dx + dy * dy);
                  if (dist < 180 && doRhyme(a.word, b.word)) {
                    return (
                      <line key={`${a.id}-${b.id}`}
                        x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                        stroke="rgba(74,222,128,0.15)"
                        strokeWidth="1.5"
                        strokeDasharray="4,6"
                      />
                    );
                  }
                  return null;
                })
              )}
            </svg>

            {/* Word bubbles */}
            {bubbles.map(bubble => {
              const isDragging = draggedBubble?.id === bubble.id;
              const isNearby = nearbyBubble?.id === bubble.id;
              const wouldRhyme = isDragging && nearbyBubble ? doRhyme(bubble.word, nearbyBubble.word) : false;
              const isTarget = isNearby && draggedBubble ? doRhyme(draggedBubble.word, bubble.word) : false;
              return (
                <div
                  key={bubble.id}
                  className={`word-bubble ${isDragging ? 'dragging' : ''} ${wouldRhyme ? 'will-rhyme' : ''} ${isTarget ? 'is-target' : ''} ${isNearby && !isTarget ? 'is-near-no-rhyme' : ''}`}
                  style={{
                    left: bubble.x,
                    top: bubble.y,
                    width: bubble.radius * 2,
                    height: bubble.radius * 2,
                    '--bubble-hue': bubble.hue,
                  } as React.CSSProperties}
                  onMouseDown={(e) => handleDragStart(e, bubble)}
                  onTouchStart={(e) => handleDragStart(e, bubble)}
                >
                  <div className="bubble-shine" />
                  <div className="bubble-word">{bubble.word}</div>
                  {(wouldRhyme || isTarget) && <div className="bubble-rhyme-ring" />}
                </div>
              );
            })}

            {/* Particles */}
            {particles.map(p => (
              <div key={p.id} className="particle" style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                opacity: p.life,
                background: `hsl(${p.hue}, 80%, 60%)`,
              }} />
            ))}

            {/* Merge effect */}
            {mergeEffect && (
              <div key={mergeEffect.id} className="merge-effect" style={{ left: mergeEffect.x, top: mergeEffect.y }}>
                <div className="merge-equation">{mergeEffect.wordA} + {mergeEffect.wordB} = RHYME!</div>
                <div className="merge-burst" />
                <div className="merge-burst-2" />
              </div>
            )}

            {/* Repel effect */}
            {repelEffect && (
              <div key={repelEffect.id} className="repel-effect" style={{ left: repelEffect.x, top: repelEffect.y }}>
                <div className="repel-text">No rhyme!</div>
                <div className="repel-sparks">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="repel-spark" style={{
                      '--spark-angle': `${(360 / 6) * i}deg`,
                    } as React.CSSProperties} />
                  ))}
                </div>
              </div>
            )}

            {bubbles.length === 0 && (
              <div className="empty-hint"><p>New words incoming...</p></div>
            )}
          </div>
        </div>

        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-rhyme">&#127925; Drag rhyming words together = Fuel</span>
            <span className="hint-combo">&#128293; Consecutive rhymes = Combo bonus!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .rhyme-rocket {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #0a0a2e 0%, #1a1045 40%, #0d1b3e 70%, #0a0a2e 100%);
  }

  /* ===== STAR FIELD ===== */
  .star-field { position: absolute; inset: 0; overflow: hidden; z-index: 0; }

  .star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle 3s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }

  .star-streak {
    width: 2px !important;
    height: 2px !important;
    animation: streak 0.8s linear infinite !important;
  }

  @keyframes streak {
    0% { transform: translateY(0) scaleY(1); opacity: 1; }
    100% { transform: translateY(100vh) scaleY(20); opacity: 0; }
  }

  .planet {
    position: absolute;
    border-radius: 50%;
  }

  .planet-1 {
    width: 60px; height: 60px;
    top: 15%; right: 10%;
    background: radial-gradient(circle at 35% 35%, #f9a825, #e65100);
    box-shadow: 0 0 30px rgba(249,168,37,0.3);
    animation: planetFloat 8s ease-in-out infinite;
  }

  .planet-2 {
    width: 40px; height: 40px;
    top: 60%; left: 8%;
    background: radial-gradient(circle at 35% 35%, #81d4fa, #0277bd);
    box-shadow: 0 0 20px rgba(2,119,189,0.3);
    animation: planetFloat 10s ease-in-out infinite 2s;
  }

  .planet-3 {
    width: 25px; height: 25px;
    bottom: 20%; right: 20%;
    background: radial-gradient(circle at 35% 35%, #ce93d8, #6a1b9a);
    box-shadow: 0 0 15px rgba(106,27,154,0.3);
    animation: planetFloat 6s ease-in-out infinite 1s;
  }

  @keyframes planetFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  /* ===== INTRO SCREEN ===== */
  .intro-screen, .complete-screen, .blastoff-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-content, .complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 520px;
  }

  .logo {
    display: flex; align-items: center; justify-content: center; gap: 1.2rem; margin-bottom: 0.5rem;
  }

  .logo h1 {
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #f97316, #fb923c, #fbbf24, #f97316);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* Intro rocket */
  .logo-rocket {
    position: relative; width: 50px; height: 90px;
    animation: rocketHover 3s ease-in-out infinite;
  }

  @keyframes rocketHover {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-12px) rotate(2deg); }
  }

  .intro-rocket-body {
    position: relative; width: 30px; height: 60px; margin: 0 auto;
    background: linear-gradient(180deg, #e0e0e0, #9e9e9e);
    border-radius: 15px 15px 5px 5px;
  }

  .intro-rocket-window {
    position: absolute; top: 18px; left: 50%; transform: translateX(-50%);
    width: 14px; height: 14px; border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #64b5f6, #1565c0);
    border: 2px solid #b0bec5;
  }

  .intro-rocket-fin-l, .intro-rocket-fin-r {
    position: absolute; bottom: -2px; width: 12px; height: 20px;
    background: linear-gradient(180deg, #ef5350, #b71c1c);
  }

  .intro-rocket-fin-l {
    left: -8px; border-radius: 0 0 0 10px;
    transform: skewX(15deg);
  }

  .intro-rocket-fin-r {
    right: -8px; border-radius: 0 0 10px 0;
    transform: skewX(-15deg);
  }

  .intro-rocket-nose {
    position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
    width: 0; height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 18px solid #ef5350;
  }

  .intro-rocket-flame {
    position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
    width: 16px; height: 24px;
    background: linear-gradient(180deg, #ff9800, #ff5722, transparent);
    border-radius: 0 0 50% 50%;
    animation: flameFlicker 0.15s ease-in-out infinite alternate;
  }

  @keyframes flameFlicker {
    0% { transform: translateX(-50%) scaleX(0.8) scaleY(0.9); opacity: 0.8; }
    100% { transform: translateX(-50%) scaleX(1.2) scaleY(1.1); opacity: 1; }
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
    width: 44px; height: 44px; border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, hsl(0, 80%, 70%), hsl(0, 70%, 50%));
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 0.8rem;
    box-shadow: 0 4px 12px hsla(0, 70%, 50%, 0.4);
  }

  .mini-bubble.rr-hue-0 {
    background: radial-gradient(circle at 30% 30%, hsl(0, 80%, 70%), hsl(0, 70%, 50%));
  }

  .mini-bubble.rr-hue-200 {
    background: radial-gradient(circle at 30% 30%, hsl(200, 80%, 70%), hsl(200, 70%, 50%));
  }

  .fuel-icon-sm { font-size: 1.5rem; filter: saturate(2); }
  .repel-icon-sm { font-size: 1.2rem; }
  .mini-rocket-icon { font-size: 1.5rem; }

  .fuel-bar-mini {
    width: 40px; height: 14px; border-radius: 7px;
    background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2);
    overflow: hidden;
  }

  .fuel-fill-mini {
    width: 70%; height: 100%;
    background: linear-gradient(90deg, #f97316, #fbbf24);
    border-radius: 5px;
    animation: fuelPulse 1.5s ease-in-out infinite;
  }

  @keyframes fuelPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }

  .plus, .arrow { color: #64748b; font-size: 1.2rem; }
  .instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .highlight { font-weight: 700; }
  .highlight.fuel-hl { color: #fbbf24; }
  .highlight.repel-hl { color: #ef4444; }
  .highlight.launch-hl { color: #f97316; }

  .start-btn, .next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(249,115,22,0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(249,115,22,0.5);
  }

  .btn-icon { font-size: 1.5rem; }

  /* ===== BLASTOFF SCREEN ===== */
  .blastoff-screen {
    flex-direction: column;
    background: linear-gradient(180deg, #0a0a2e, #1a1045);
  }

  .blastoff-rocket {
    position: relative;
    animation: liftoff 3s ease-in forwards;
  }

  @keyframes liftoff {
    0% { transform: translateY(0); }
    30% { transform: translateY(10px); }
    100% { transform: translateY(-120vh); }
  }

  .blastoff-rocket-body {
    position: relative; width: 50px; height: 100px; margin: 0 auto;
    background: linear-gradient(180deg, #e0e0e0, #9e9e9e);
    border-radius: 25px 25px 8px 8px;
  }

  .blastoff-rocket-body .intro-rocket-window {
    top: 28px; width: 20px; height: 20px;
  }

  .blastoff-rocket-body .intro-rocket-fin-l,
  .blastoff-rocket-body .intro-rocket-fin-r {
    width: 18px; height: 30px;
  }

  .blastoff-rocket-body .intro-rocket-fin-l { left: -12px; }
  .blastoff-rocket-body .intro-rocket-fin-r { right: -12px; }

  .blastoff-rocket-body .intro-rocket-nose {
    top: -22px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 28px solid #ef5350;
  }

  .blastoff-flame {
    position: absolute; bottom: -60px; left: 50%; transform: translateX(-50%);
    width: 40px; height: 80px;
    background: linear-gradient(180deg, #fff176 0%, #ff9800 30%, #ff5722 60%, transparent 100%);
    border-radius: 0 0 50% 50%;
    animation: blastFlame 0.1s ease-in-out infinite alternate;
    box-shadow: 0 20px 60px rgba(255,152,0,0.8), 0 40px 100px rgba(255,87,34,0.5);
  }

  @keyframes blastFlame {
    0% { transform: translateX(-50%) scaleX(0.7) scaleY(0.9); }
    100% { transform: translateX(-50%) scaleX(1.3) scaleY(1.1); }
  }

  .blastoff-smoke {
    position: absolute; bottom: -80px; left: 50%; transform: translateX(-50%);
    width: 120px; height: 60px;
    background: radial-gradient(ellipse, rgba(200,200,200,0.4), transparent);
    border-radius: 50%;
    animation: smokeExpand 1s ease-out forwards;
  }

  @keyframes smokeExpand {
    0% { transform: translateX(-50%) scale(0.5); opacity: 1; }
    100% { transform: translateX(-50%) scale(4); opacity: 0; }
  }

  .blastoff-text {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    font-size: clamp(3rem, 12vw, 5rem); font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f97316, #ef4444);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: blastTextPop 0.5s ease-out forwards;
    text-shadow: none;
    z-index: 20;
  }

  @keyframes blastTextPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  /* ===== COMPLETE SCREEN ===== */
  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 0.5rem;
  }

  .complete-sub { color: #94a3b8; font-size: 1.1rem; margin-bottom: 2rem; }

  .complete-rocket-orbit {
    font-size: 4rem;
    animation: orbit 4s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes orbit {
    0% { transform: translateX(-30px) translateY(0) rotate(0deg); }
    25% { transform: translateX(0) translateY(-15px) rotate(90deg); }
    50% { transform: translateX(30px) translateY(0) rotate(180deg); }
    75% { transform: translateX(0) translateY(15px) rotate(270deg); }
    100% { transform: translateX(-30px) translateY(0) rotate(360deg); }
  }

  .score-card { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap; }
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

  /* ===== GAME SCREEN ===== */
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
    padding: 0.5rem 1rem; background: linear-gradient(135deg, #f97316, #ef4444);
    border-radius: 20px; font-weight: 700; color: white;
  }

  .level-label {
    font-size: 0.8rem; color: #94a3b8; font-weight: 600;
  }

  .combo-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem; background: rgba(251,146,60,0.3);
    border: 2px solid #f97316; border-radius: 20px;
    animation: comboPulse 0.5s ease-in-out infinite;
  }

  @keyframes comboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  .combo-fire { font-size: 1.2rem; }
  .combo-text { color: #fbbf24; font-weight: 800; font-size: 0.9rem; }

  .score-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem; background: rgba(251,191,36,0.2);
    border-radius: 20px; color: #fbbf24; font-weight: 700;
  }

  .score-icon { font-size: 1rem; }

  /* ===== PLAY AREA ===== */
  .play-area {
    flex: 1; display: flex; position: relative; overflow: hidden;
  }

  /* ===== ROCKET PANEL ===== */
  .rocket-panel {
    width: 100px; display: flex; flex-direction: column; align-items: center;
    justify-content: center; gap: 1rem; padding: 1rem 0.5rem;
    background: rgba(0,0,0,0.2); border-right: 1px solid rgba(255,255,255,0.05);
    z-index: 5;
  }

  .rocket-assembly {
    position: relative; width: 60px; height: 120px;
    transition: transform 0.1s;
  }

  .rocket-assembly.shake {
    animation: rocketShake 0.4s ease-in-out;
  }

  @keyframes rocketShake {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    20% { transform: translateX(-3px) rotate(-2deg); }
    40% { transform: translateX(3px) rotate(2deg); }
    60% { transform: translateX(-2px) rotate(-1deg); }
    80% { transform: translateX(2px) rotate(1deg); }
  }

  .rocket-assembly.launching {
    animation: rocketLaunchPrep 1.2s ease-in-out infinite;
  }

  @keyframes rocketLaunchPrep {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .rocket-body {
    position: relative; width: 36px; height: 70px; margin: 0 auto;
  }

  .rocket-nose {
    position: absolute; top: -16px; left: 50%; transform: translateX(-50%);
    width: 0; height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 22px solid #ef5350;
    filter: drop-shadow(0 -2px 4px rgba(239,83,80,0.5));
  }

  .rocket-hull {
    width: 100%; height: 100%;
    background: linear-gradient(90deg, #bdbdbd, #e0e0e0 40%, #f5f5f5 60%, #e0e0e0);
    border-radius: 18px 18px 6px 6px;
    position: relative;
    box-shadow: 2px 0 8px rgba(0,0,0,0.3), -2px 0 8px rgba(0,0,0,0.3);
  }

  .rocket-window {
    position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
    width: 16px; height: 16px; border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #64b5f6, #1565c0);
    border: 2px solid #90a4ae;
    box-shadow: 0 0 8px rgba(100,181,246,0.5);
  }

  .rocket-stripe {
    position: absolute; top: 40px; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #ef5350, #f44336);
  }

  .rocket-fin-left, .rocket-fin-right {
    position: absolute; bottom: 0; width: 14px; height: 24px;
    background: linear-gradient(180deg, #ef5350, #b71c1c);
  }

  .rocket-fin-left {
    left: -6px; border-radius: 0 0 0 12px;
    transform: skewX(12deg);
  }

  .rocket-fin-right {
    right: -6px; border-radius: 0 0 12px 0;
    transform: skewX(-12deg);
  }

  .rocket-base {
    position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%);
    width: 28px; height: 8px;
    background: #757575; border-radius: 0 0 4px 4px;
  }

  .rocket-idle-flame {
    position: absolute; bottom: -24px; left: 50%; transform: translateX(-50%);
    width: 14px; height: 20px;
    background: linear-gradient(180deg, #ff9800, #ff5722, transparent);
    border-radius: 0 0 50% 50%;
    animation: flameFlicker 0.12s ease-in-out infinite alternate;
  }

  .idle-flame-inner {
    position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
    width: 6px; height: 12px;
    background: linear-gradient(180deg, #fff176, #ff9800, transparent);
    border-radius: 0 0 50% 50%;
  }

  .launch-pad {
    position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%);
    width: 50px; height: 6px;
    background: linear-gradient(90deg, #424242, #616161, #424242);
    border-radius: 3px;
  }

  /* ===== FUEL GAUGE ===== */
  .fuel-gauge {
    display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
  }

  .fuel-gauge-glass {
    position: relative; width: 24px; height: 100px;
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    overflow: hidden;
  }

  .fuel-gauge-liquid {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(180deg, #fbbf24, #f97316, #ef4444);
    border-radius: 0 0 10px 10px;
    transition: height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .fuel-gauge-shine {
    position: absolute; top: 0; left: 2px; width: 6px; height: 100%;
    background: linear-gradient(180deg, rgba(255,255,255,0.4), transparent);
    border-radius: 3px;
  }

  .fuel-gauge-mark {
    position: absolute; left: 0; right: 0; height: 1px;
    background: rgba(255,255,255,0.3);
  }

  .fuel-gauge-label {
    font-size: 0.6rem; font-weight: 800; color: #f97316;
    letter-spacing: 0.1em;
  }

  .fuel-gauge-count {
    font-size: 0.75rem; font-weight: 700; color: white;
  }

  /* ===== BUBBLE CONTAINER ===== */
  .bubble-container {
    flex: 1; position: relative; overflow: visible; touch-action: none;
  }

  .connection-lines {
    position: absolute; inset: 0; pointer-events: none; z-index: 5;
    width: 100%; height: 100%;
  }

  /* ===== WORD BUBBLES — match BubbleMathLab style EXACTLY ===== */
  .word-bubble {
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

  .word-bubble:hover {
    z-index: 20;
    box-shadow:
      0 15px 40px hsla(var(--bubble-hue), 70%, 50%, 0.6),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
  }

  .word-bubble.dragging {
    cursor: grabbing; transform: translate(-50%, -50%) scale(1.15); z-index: 100;
    box-shadow:
      0 20px 50px hsla(var(--bubble-hue), 70%, 50%, 0.7),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
  }

  .word-bubble.will-rhyme {
    box-shadow:
      0 0 30px rgba(74,222,128,0.8),
      0 20px 50px hsla(var(--bubble-hue), 70%, 50%, 0.7),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
  }

  .word-bubble.is-target {
    box-shadow:
      0 0 30px rgba(74,222,128,0.8),
      0 15px 40px hsla(var(--bubble-hue), 70%, 50%, 0.6),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
    animation: targetPulse 0.6s ease-in-out infinite;
  }

  .word-bubble.is-near-no-rhyme {
    box-shadow:
      0 0 20px rgba(239,68,68,0.6),
      0 15px 40px hsla(var(--bubble-hue), 70%, 50%, 0.6),
      inset 0 -10px 20px hsla(var(--bubble-hue), 80%, 30%, 0.3);
  }

  .bubble-rhyme-ring {
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

  .bubble-word {
    font-size: 1.1rem; font-weight: 900; color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.4); z-index: 2;
    text-transform: lowercase; letter-spacing: 0.02em;
  }

  /* ===== PARTICLES ===== */
  .particle {
    position: absolute; border-radius: 50%; pointer-events: none; z-index: 150;
    transform: translate(-50%, -50%);
  }

  /* ===== MERGE EFFECT ===== */
  .merge-effect {
    position: absolute; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 200; animation: effectPop 1.2s ease forwards;
  }

  @keyframes effectPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  }

  .merge-equation {
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border-radius: 30px; font-size: 1.2rem; font-weight: 900; color: white;
    white-space: nowrap; box-shadow: 0 10px 30px rgba(74,222,128,0.5);
  }

  .merge-burst {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 100px; height: 100px; border: 3px solid #4ade80; border-radius: 50%;
    animation: burstRing 0.8s ease forwards;
  }

  .merge-burst-2 {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 140px; height: 140px; border: 2px solid #22d3ee; border-radius: 50%;
    animation: burstRing 0.8s ease forwards 0.1s;
  }

  @keyframes burstRing {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
  }

  /* ===== REPEL EFFECT ===== */
  .repel-effect {
    position: absolute; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 200;
    animation: repelPop 0.6s ease forwards;
  }

  @keyframes repelPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  }

  .repel-text {
    padding: 0.5rem 1.2rem;
    background: linear-gradient(135deg, #ef4444, #dc2626);
    border-radius: 20px; font-size: 1rem; font-weight: 800; color: white;
    white-space: nowrap; box-shadow: 0 8px 20px rgba(239,68,68,0.5);
  }

  .repel-sparks {
    position: absolute; top: 50%; left: 50%; width: 0; height: 0;
  }

  .repel-spark {
    position: absolute;
    width: 4px; height: 12px;
    background: linear-gradient(180deg, #fbbf24, #ef4444);
    border-radius: 2px;
    transform: rotate(var(--spark-angle)) translateY(-25px);
    animation: sparkFly 0.4s ease-out forwards;
  }

  @keyframes sparkFly {
    0% { transform: rotate(var(--spark-angle)) translateY(0) scaleY(0.5); opacity: 1; }
    100% { transform: rotate(var(--spark-angle)) translateY(-40px) scaleY(1); opacity: 0; }
  }

  .empty-hint {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    color: #64748b; font-size: 1rem;
  }

  /* ===== BOTTOM BAR ===== */
  .bottom-bar { padding: 0.8rem; background: rgba(0,0,0,0.4); text-align: center; }

  .hint-text { display: flex; justify-content: center; gap: 2rem; font-size: 0.85rem; color: #64748b; }
  .hint-rhyme { color: #4ade80; }
  .hint-combo { color: #fbbf24; }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 600px) {
    .rocket-panel { width: 70px; padding: 0.5rem 0.25rem; }
    .rocket-assembly { width: 40px; height: 80px; }
    .rocket-body { width: 24px; height: 48px; }
    .rocket-nose {
      border-left-width: 12px; border-right-width: 12px; border-bottom-width: 16px;
      top: -12px;
    }
    .rocket-hull { border-radius: 12px 12px 4px 4px; }
    .rocket-window { width: 10px; height: 10px; top: 10px; }
    .rocket-stripe { top: 28px; height: 4px; }
    .rocket-fin-left, .rocket-fin-right { width: 10px; height: 16px; }
    .rocket-fin-left { left: -4px; }
    .rocket-fin-right { right: -4px; }
    .fuel-gauge-glass { width: 18px; height: 70px; }
    .word-bubble { }
    .bubble-word { font-size: 0.9rem; }
    .hint-text { flex-direction: column; gap: 0.3rem; }
    .header-center { display: none; }
    .level-label { display: none; }
  }
`;
