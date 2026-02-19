"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

/*
  🔍 POSITION PLAYGROUND: HIDE & SEEK ADVENTURE 🔍

  A hide-and-seek game where cute animals are hiding in a colorful playground.
  You get position CLUES and must DRAG a magnifying glass to search and find them.

  Learning: Position language (above, below, next to, between, left, right, inside, outside)
  Target: Foundation Maths (Australian Curriculum)

  Controls:
  - Mouse drag / Touch drag: Move magnifying glass
  - Click/Tap when over hidden animal: Reveal it!
*/

// =============== TYPES ===============

interface PositionPlaygroundProps {
  onExit?: () => void;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameComplete';

interface PlaygroundObject {
  id: string;
  name: string;
  x: number; // px from left (set during init)
  y: number; // px from top
  w: number;
  h: number;
}

interface HiddenAnimal {
  emoji: string;
  name: string;
  x: number;
  y: number;
  found: boolean;
  peekPhase: number; // 0=hidden, 1=peeking, 2=revealed
  revealTimer: number;
  positionWord: string;
  clueText: string;
  refObject: string;
  refObject2?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  type: 'confetti' | 'sparkle' | 'leaf' | 'star';
  rotation: number;
  rotSpeed: number;
}

interface FoundFriend {
  emoji: string;
  name: string;
  bounceDelay: number;
}

interface LevelConfig {
  numAnimals: number;
  positionWords: string[];
  hasBossRound: boolean;
  timeBonus: number;
}

// =============== CONSTANTS ===============

const ANIMALS = [
  { emoji: '🐱', name: 'Kitten' },
  { emoji: '🐶', name: 'Puppy' },
  { emoji: '🐦', name: 'Bird' },
  { emoji: '🐸', name: 'Frog' },
  { emoji: '🦋', name: 'Butterfly' },
  { emoji: '🐿️', name: 'Squirrel' },
  { emoji: '🐞', name: 'Ladybug' },
  { emoji: '🐝', name: 'Bee' },
];

const POSITION_WORDS_EASY = ['above', 'below', 'next to', 'left of', 'right of'];
const POSITION_WORDS_MED = [...POSITION_WORDS_EASY, 'between', 'beside', 'inside'];
const POSITION_WORDS_HARD = [...POSITION_WORDS_MED, 'outside', 'behind', 'in front of'];

const MAGNIFIER_RADIUS = 55;
const REVEAL_DISTANCE = 70;
const WARM_DISTANCE = 200;
const HOT_DISTANCE = 120;

const CONFETTI_COLORS = ['#FF6B8A', '#FFB74D', '#4ade80', '#38BDF8', '#A855F7', '#FBBF24', '#F472B6'];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rand(lo: number, hi: number): number {
  return lo + Math.random() * (hi - lo);
}

function dist(x1: number, y1: number, x2: number, y2: number): number {
  return Math.hypot(x1 - x2, y1 - y2);
}

function getLevelConfig(level: number): LevelConfig {
  if (level <= 3) {
    return { numAnimals: 3, positionWords: POSITION_WORDS_EASY, hasBossRound: false, timeBonus: 20 };
  } else if (level <= 6) {
    return { numAnimals: 3, positionWords: POSITION_WORDS_MED, hasBossRound: level === 6, timeBonus: 15 };
  } else {
    return { numAnimals: 3, positionWords: POSITION_WORDS_HARD, hasBossRound: level % 3 === 0, timeBonus: 12 };
  }
}

// Playground equipment definitions (relative percentages that get scaled)
const EQUIPMENT_DEFS = [
  { id: 'slide', name: 'slide', xPct: 12, yPct: 42, wPct: 14, hPct: 22 },
  { id: 'swings', name: 'swings', xPct: 35, yPct: 38, wPct: 14, hPct: 24 },
  { id: 'sandbox', name: 'sandbox', xPct: 58, yPct: 68, wPct: 16, hPct: 12 },
  { id: 'seesaw', name: 'seesaw', xPct: 78, yPct: 62, wPct: 16, hPct: 10 },
  { id: 'climbing', name: 'climbing frame', xPct: 55, yPct: 36, wPct: 12, hPct: 22 },
  { id: 'bench', name: 'bench', xPct: 22, yPct: 70, wPct: 13, hPct: 8 },
  { id: 'tree', name: 'tree', xPct: 85, yPct: 28, wPct: 12, hPct: 32 },
  { id: 'bushes', name: 'bushes', xPct: 5, yPct: 68, wPct: 12, hPct: 10 },
];

function getPositionCoords(
  posWord: string,
  obj: PlaygroundObject,
  obj2?: PlaygroundObject,
  sceneW?: number,
  sceneH?: number,
): { x: number; y: number } {
  const W = sceneW || 800;
  const H = sceneH || 500;
  const cx = obj.x + obj.w / 2;
  const cy = obj.y + obj.h / 2;

  switch (posWord) {
    case 'above':
      return { x: cx, y: Math.max(30, obj.y - 40) };
    case 'below':
      return { x: cx, y: Math.min(H - 40, obj.y + obj.h + 30) };
    case 'left of':
      return { x: Math.max(30, obj.x - 45), y: cy };
    case 'right of':
      return { x: Math.min(W - 30, obj.x + obj.w + 40), y: cy };
    case 'next to':
    case 'beside':
      return { x: Math.min(W - 30, obj.x + obj.w + 35), y: cy + 10 };
    case 'between':
      if (obj2) {
        const cx2 = obj2.x + obj2.w / 2;
        const cy2 = obj2.y + obj2.h / 2;
        return { x: (cx + cx2) / 2, y: (cy + cy2) / 2 };
      }
      return { x: cx + 60, y: cy };
    case 'inside':
      return { x: cx + rand(-10, 10), y: cy + rand(-5, 5) };
    case 'outside':
      return { x: Math.max(30, obj.x - 50), y: obj.y - 20 };
    case 'behind':
      return { x: cx + 10, y: Math.max(30, obj.y - 30) };
    case 'in front of':
      return { x: cx - 10, y: Math.min(H - 40, obj.y + obj.h + 25) };
    default:
      return { x: cx, y: cy - 40 };
  }
}

// =============== MAIN COMPONENT ===============

export default function PositionPlayground({ onExit }: PositionPlaygroundProps = {}) {
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [foundFriends, setFoundFriends] = useState<FoundFriend[]>([]);
  const [currentAnimalIdx, setCurrentAnimalIdx] = useState(0);
  const [animals, setAnimals] = useState<HiddenAnimal[]>([]);
  const [equipment, setEquipment] = useState<PlaygroundObject[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');
  const [wrongShake, setWrongShake] = useState(false);
  const [foundText, setFoundText] = useState('');
  const [totalFound, setTotalFound] = useState(0);
  const [decorations, setDecorations] = useState<number>(0);

  // Magnifying glass state
  const [magX, setMagX] = useState(0);
  const [magY, setMagY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [warmth, setWarmth] = useState(0); // 0=cold, 1=warm, 2=hot, 3=burning
  const [magGlowing, setMagGlowing] = useState(false);
  const [showFoundAnim, setShowFoundAnim] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const dragStartRef = useRef({ x: 0, y: 0, magX: 0, magY: 0 });

  // ========== SCENE SETUP ==========

  const initLevel = useCallback((lvl: number) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const W = scene.offsetWidth;
    const H = scene.offsetHeight;

    // Build equipment from definitions
    const eq: PlaygroundObject[] = EQUIPMENT_DEFS.map(def => ({
      id: def.id,
      name: def.name,
      x: (def.xPct / 100) * W,
      y: (def.yPct / 100) * H,
      w: (def.wPct / 100) * W,
      h: (def.hPct / 100) * H,
    }));
    setEquipment(eq);

    const config = getLevelConfig(lvl);
    const shuffledAnimals = shuffle(ANIMALS);
    const shuffledWords = shuffle(config.positionWords);
    const shuffledEquip = shuffle(eq);

    const newAnimals: HiddenAnimal[] = [];
    for (let i = 0; i < config.numAnimals; i++) {
      const animal = shuffledAnimals[i % shuffledAnimals.length];
      const posWord = shuffledWords[i % shuffledWords.length];
      const refObj = shuffledEquip[i % shuffledEquip.length];
      let refObj2: PlaygroundObject | undefined;

      if (posWord === 'between' && shuffledEquip.length > 1) {
        const otherIdx = (i + 1) % shuffledEquip.length;
        if (otherIdx !== i % shuffledEquip.length) {
          refObj2 = shuffledEquip[otherIdx];
        }
      }

      const coords = getPositionCoords(posWord, refObj, refObj2, W, H);
      // Clamp to scene bounds
      coords.x = Math.max(40, Math.min(W - 40, coords.x));
      coords.y = Math.max(40, Math.min(H - 40, coords.y));

      let clueText: string;
      if (posWord === 'between' && refObj2) {
        clueText = `The ${animal.name} is BETWEEN the ${refObj.name} and the ${refObj2.name}!`;
      } else {
        clueText = `The ${animal.name} is ${posWord.toUpperCase()} the ${refObj.name}!`;
      }

      newAnimals.push({
        emoji: animal.emoji,
        name: animal.name,
        x: coords.x,
        y: coords.y,
        found: false,
        peekPhase: 0,
        revealTimer: 0,
        positionWord: posWord,
        clueText,
        refObject: refObj.name,
        refObject2: refObj2?.name,
      });
    }

    setAnimals(newAnimals);
    setCurrentAnimalIdx(0);
    setShowHint(false);
    setHintText('');
    setFoundText('');
    setShowFoundAnim(false);
    setWrongShake(false);
    setMagX(W / 2);
    setMagY(H / 2);
    setWarmth(0);
    setMagGlowing(false);
    particlesRef.current = [];
    setParticles([]);
  }, []);

  // ========== GAME START / NAVIGATION ==========

  const startGame = useCallback(() => {
    setScreen('playing');
    setLevel(1);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setFoundFriends([]);
    setTotalFound(0);
    setDecorations(0);
    setTimeout(() => initLevel(1), 50);
  }, [initLevel]);

  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    if (newLevel > 10) {
      setScreen('gameComplete');
      return;
    }
    setLevel(newLevel);
    setScreen('playing');
    setTimeout(() => initLevel(newLevel), 50);
  }, [level, initLevel]);

  // ========== RE-INIT ON RESIZE ==========

  useEffect(() => {
    if (screen !== 'playing') return;
    const handleResize = () => initLevel(level);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screen, level, initLevel]);

  // Init level when entering playing state
  useEffect(() => {
    if (screen === 'playing') {
      setTimeout(() => initLevel(level), 50);
    }
  }, [screen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ========== WARMTH DETECTION ==========

  useEffect(() => {
    if (screen !== 'playing' || animals.length === 0) return;
    const current = animals[currentAnimalIdx];
    if (!current || current.found) return;

    const d = dist(magX, magY, current.x, current.y);
    if (d < REVEAL_DISTANCE) {
      setWarmth(3);
      setMagGlowing(true);
    } else if (d < HOT_DISTANCE) {
      setWarmth(2);
      setMagGlowing(true);
    } else if (d < WARM_DISTANCE) {
      setWarmth(1);
      setMagGlowing(false);
    } else {
      setWarmth(0);
      setMagGlowing(false);
    }
  }, [magX, magY, animals, currentAnimalIdx, screen]);

  // ========== CLICK TO REVEAL ==========

  const handleRevealAttempt = useCallback(() => {
    if (screen !== 'playing' || animals.length === 0) return;
    const current = animals[currentAnimalIdx];
    if (!current || current.found) return;

    const d = dist(magX, magY, current.x, current.y);

    if (d < REVEAL_DISTANCE) {
      // FOUND IT!
      const newAnimals = [...animals];
      newAnimals[currentAnimalIdx] = { ...current, found: true, peekPhase: 2, revealTimer: 0 };
      setAnimals(newAnimals);

      const streakBonus = streak >= 2 ? streak * 5 : 0;
      const points = 25 + streakBonus;
      setScore(s => s + points);
      setStreak(s => {
        const newStreak = s + 1;
        setBestStreak(b => Math.max(b, newStreak));
        return newStreak;
      });
      setTotalFound(t => t + 1);
      setDecorations(d => d + 1);
      setShowFoundAnim(true);
      setFoundText(`FOUND IT! The ${current.name} was ${current.positionWord.toUpperCase()} the ${current.refObject}!`);

      // Add friend
      setFoundFriends(prev => [...prev, {
        emoji: current.emoji,
        name: current.name,
        bounceDelay: prev.length * 0.15,
      }]);

      // Spawn confetti
      spawnConfetti(current.x, current.y, 30);

      // Move to next animal or complete level
      setTimeout(() => {
        setShowFoundAnim(false);
        setFoundText('');
        const nextIdx = currentAnimalIdx + 1;
        if (nextIdx >= animals.length) {
          // Level complete
          setTimeout(() => setScreen('levelComplete'), 600);
        } else {
          setCurrentAnimalIdx(nextIdx);
          setWarmth(0);
          setMagGlowing(false);
        }
      }, 2200);
    } else {
      // WRONG AREA
      setWrongShake(true);
      setStreak(0);
      const posWord = current.positionWord;
      let hint = '';
      if (posWord === 'above') hint = 'Look UP HIGH above it!';
      else if (posWord === 'below') hint = 'Look DOWN LOW below it!';
      else if (posWord === 'left of') hint = 'Look to the LEFT!';
      else if (posWord === 'right of') hint = 'Look to the RIGHT!';
      else if (posWord === 'next to' || posWord === 'beside') hint = 'Look right NEXT TO it!';
      else if (posWord === 'between') hint = 'Look IN BETWEEN the two things!';
      else if (posWord === 'inside') hint = 'Look INSIDE it!';
      else if (posWord === 'outside') hint = 'Look OUTSIDE, away from it!';
      else if (posWord === 'behind') hint = 'Look BEHIND it (up and back)!';
      else if (posWord === 'in front of') hint = 'Look IN FRONT (down and forward)!';
      else hint = 'Keep searching!';

      setShowHint(true);
      setHintText(hint);
      setTimeout(() => {
        setWrongShake(false);
        setShowHint(false);
        setHintText('');
      }, 1800);
    }
  }, [screen, animals, currentAnimalIdx, magX, magY, streak]);

  const spawnConfetti = useCallback((cx: number, cy: number, count: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const type = (['confetti', 'sparkle', 'star'] as const)[Math.floor(Math.random() * 3)];
      newParticles.push({
        x: cx,
        y: cy,
        vx: rand(-6, 6),
        vy: rand(-8, -2),
        life: 60 + Math.random() * 40,
        maxLife: 100,
        color: pick(CONFETTI_COLORS),
        size: type === 'star' ? 12 + Math.random() * 8 : 4 + Math.random() * 6,
        type,
        rotation: Math.random() * 360,
        rotSpeed: rand(-8, 8),
      });
    }
    particlesRef.current = [...particlesRef.current, ...newParticles];
    setParticles([...particlesRef.current]);
  }, []);

  // ========== ANIMATION LOOP ==========

  useEffect(() => {
    if (screen !== 'playing' && screen !== 'levelComplete' && screen !== 'gameComplete') {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const tick = (timestamp: number) => {
      const dt = Math.min((timestamp - (timeRef.current || timestamp)) / 16.667, 3);
      timeRef.current = timestamp;

      // Update particles
      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 0.15 * dt; // gravity
        p.vx *= 0.99;
        p.life -= dt;
        p.rotation += p.rotSpeed * dt;
        return p.life > 0;
      });
      // Only update React state every few frames
      if (Math.floor(timestamp / 50) % 2 === 0) {
        setParticles([...particlesRef.current]);
      }

      animRef.current = requestAnimationFrame(tick);
    };

    timeRef.current = 0;
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [screen]);

  // ========== DRAG HANDLERS ==========

  const getEventPos = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if ('touches' in e && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    if ('changedTouches' in e && e.changedTouches.length > 0) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    if ('clientX' in e) {
      return { x: e.clientX, y: e.clientY };
    }
    return { x: 0, y: 0 };
  }, []);

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const pos = getEventPos(e);
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    dragStartRef.current = {
      x: pos.x,
      y: pos.y,
      magX: magX,
      magY: magY,
    };
    setIsDragging(true);

    // Update mag position immediately
    const newX = Math.max(MAGNIFIER_RADIUS, Math.min(rect.width - MAGNIFIER_RADIUS, pos.x - rect.left));
    const newY = Math.max(MAGNIFIER_RADIUS, Math.min(rect.height - MAGNIFIER_RADIUS, pos.y - rect.top));
    setMagX(newX);
    setMagY(newY);
  }, [getEventPos, magX, magY]);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const pos = getEventPos(e);
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    const newX = Math.max(MAGNIFIER_RADIUS, Math.min(rect.width - MAGNIFIER_RADIUS, pos.x - rect.left));
    const newY = Math.max(MAGNIFIER_RADIUS, Math.min(rect.height - MAGNIFIER_RADIUS, pos.y - rect.top));
    setMagX(newX);
    setMagY(newY);
  }, [isDragging, getEventPos]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    // Try to reveal on release
    handleRevealAttempt();
  }, [isDragging, handleRevealAttempt]);

  // Scene click (for non-drag taps)
  const handleSceneClick = useCallback((e: React.MouseEvent) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMagX(x);
    setMagY(y);
    // Short delay then try reveal
    setTimeout(() => handleRevealAttempt(), 50);
  }, [handleRevealAttempt]);

  // Global drag listeners
  useEffect(() => {
    if (!isDragging) return;
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
  }, [isDragging, handleDragMove, handleDragEnd]);

  // ========== DERIVED STATE ==========

  const currentAnimal = animals[currentAnimalIdx];
  const allFound = animals.length > 0 && animals.every(a => a.found);
  const foundCount = animals.filter(a => a.found).length;
  const completion = animals.length > 0 ? Math.round((totalFound / (level * 3)) * 100) : 0;

  // Warmth color for magnifier
  const warmthColor = warmth === 3 ? '#22c55e' : warmth === 2 ? '#ef4444' : warmth === 1 ? '#f97316' : '#60a5fa';
  const warmthLabel = warmth === 3 ? 'RIGHT HERE!' : warmth === 2 ? 'HOT! 🔥' : warmth === 1 ? 'Getting warmer...' : '';

  // ========== INTRO SCREEN ==========

  if (screen === 'intro') {
    return (
      <div className="pp-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="pp-intro">
          {/* Animated sky */}
          <div className="pp-intro-sky">
            <div className="pp-sun" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="pp-cloud" style={{
                top: `${8 + i * 8}%`,
                left: `${-10 + i * 25}%`,
                animationDuration: `${20 + i * 8}s`,
                animationDelay: `${i * 3}s`,
                opacity: 0.7 + Math.random() * 0.3,
              }} />
            ))}
          </div>

          {/* Floating animals */}
          <div className="pp-intro-animals">
            {ANIMALS.slice(0, 5).map((a, i) => (
              <span key={i} className="pp-intro-animal" style={{
                left: `${10 + i * 18}%`,
                bottom: `${12 + (i % 3) * 8}%`,
                animationDelay: `${i * 0.4}s`,
                fontSize: `clamp(2rem, 5vw, 3rem)`,
              }}>
                {a.emoji}
              </span>
            ))}
          </div>

          {/* Floating position words */}
          <div className="pp-intro-words">
            {['ABOVE', 'BELOW', 'LEFT', 'RIGHT', 'BETWEEN', 'NEXT TO', 'INSIDE'].map((w, i) => (
              <span key={w} className="pp-intro-word" style={{
                left: `${5 + (i % 4) * 25}%`,
                top: `${8 + Math.floor(i / 4) * 30}%`,
                animationDelay: `${i * 0.5}s`,
              }}>
                {w}
              </span>
            ))}
          </div>

          <div className="pp-intro-card">
            <div className="pp-intro-logo">
              <span className="pp-logo-emoji">🔍</span>
              <h1>Position Playground</h1>
              <span className="pp-logo-emoji flip">🔍</span>
            </div>
            <p className="pp-intro-tagline">Hide & Seek Adventure!</p>

            <div className="pp-how-to-play">
              <h3>How to Play</h3>
              <div className="pp-how-step">
                <div className="pp-how-visual">
                  <span className="pp-how-icon">🐱</span>
                  <span className="pp-how-arrow">?</span>
                  <span className="pp-how-badge">ABOVE the slide</span>
                </div>
                <p>Animals are <strong>HIDING</strong> in the playground!</p>
              </div>
              <div className="pp-how-step">
                <div className="pp-how-visual">
                  <span className="pp-how-mag">🔍</span>
                  <span className="pp-how-arrow">&rarr;</span>
                  <span className="pp-how-temp">🔥</span>
                </div>
                <p><strong>DRAG</strong> your magnifying glass to search!</p>
              </div>
              <div className="pp-how-step">
                <div className="pp-how-visual">
                  <span className="pp-how-icon">🎉</span>
                  <span className="pp-how-icon">✨</span>
                  <span className="pp-how-icon">🐱</span>
                </div>
                <p><strong>TAP</strong> when you're close to <span className="pp-highlight">REVEAL</span> them!</p>
              </div>
            </div>

            <button className="pp-start-btn" onClick={startGame}>
              <span>🔍</span>
              Start Searching!
              <span>🐾</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========== LEVEL COMPLETE SCREEN ==========

  if (screen === 'levelComplete') {
    return (
      <div className="pp-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="pp-complete">
          <div className="pp-complete-sky">
            <div className="pp-sun" />
            {[...Array(8)].map((_, i) => (
              <div key={i} className="pp-cloud" style={{
                top: `${5 + i * 6}%`,
                left: `${-5 + i * 15}%`,
                animationDuration: `${18 + i * 5}s`,
              }} />
            ))}
          </div>
          <div className="pp-complete-confetti">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="pp-confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                backgroundColor: pick(CONFETTI_COLORS),
                width: 6 + Math.random() * 8,
                height: 6 + Math.random() * 4,
              }} />
            ))}
          </div>
          <div className="pp-complete-card">
            <h1 className="pp-complete-title">Level {level} Complete!</h1>
            <div className="pp-complete-animals">
              {foundFriends.slice(-3).map((f, i) => (
                <span key={i} className="pp-complete-animal" style={{ animationDelay: `${i * 0.2}s` }}>
                  {f.emoji}
                </span>
              ))}
            </div>
            <p className="pp-complete-subtitle">All friends found!</p>

            <div className="pp-stats-row">
              <div className="pp-stat">
                <span className="pp-stat-label">Score</span>
                <span className="pp-stat-value">{score}</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-label">Best Streak</span>
                <span className="pp-stat-value">{bestStreak} 🔥</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-label">Total Found</span>
                <span className="pp-stat-value">{totalFound}</span>
              </div>
            </div>

            {/* Found friends row */}
            <div className="pp-friends-row">
              <h3>Found Friends</h3>
              <div className="pp-friends-list">
                {foundFriends.map((f, i) => (
                  <span key={i} className="pp-friend-emoji" style={{ animationDelay: `${f.bounceDelay}s` }}>
                    {f.emoji}
                  </span>
                ))}
              </div>
            </div>

            <div className="pp-complete-buttons">
              {level < 10 ? (
                <button className="pp-next-btn" onClick={nextLevel}>
                  Level {level + 1} &rarr;
                </button>
              ) : (
                <button className="pp-next-btn" onClick={() => setScreen('gameComplete')}>
                  See Results! 🏆
                </button>
              )}
              <button className="pp-menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME COMPLETE SCREEN ==========

  if (screen === 'gameComplete') {
    return (
      <div className="pp-root" ref={containerRef}>
        <style>{styles}</style>
        <div className="pp-complete">
          <div className="pp-complete-sky">
            <div className="pp-sun" />
          </div>
          <div className="pp-complete-confetti">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="pp-confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                backgroundColor: pick(CONFETTI_COLORS),
                width: 8 + Math.random() * 10,
                height: 6 + Math.random() * 6,
              }} />
            ))}
          </div>
          <div className="pp-complete-card">
            <h1 className="pp-complete-title">🏆 Amazing Explorer! 🏆</h1>
            <div className="pp-complete-animals">
              {ANIMALS.map((a, i) => (
                <span key={i} className="pp-complete-animal" style={{ animationDelay: `${i * 0.15}s` }}>
                  {a.emoji}
                </span>
              ))}
            </div>
            <p className="pp-complete-subtitle">You found ALL the hidden friends!</p>

            <div className="pp-stats-row">
              <div className="pp-stat">
                <span className="pp-stat-label">Final Score</span>
                <span className="pp-stat-value">{score}</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-label">Best Streak</span>
                <span className="pp-stat-value">{bestStreak} 🔥</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-label">Total Found</span>
                <span className="pp-stat-value">{totalFound}</span>
              </div>
            </div>

            <div className="pp-complete-buttons">
              <button className="pp-next-btn" onClick={startGame}>
                Play Again!
              </button>
              <button className="pp-menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== PLAYING SCREEN ==========

  return (
    <div className="pp-root" ref={containerRef}>
      <style>{styles}</style>
      <div className="pp-game">
        {/* Header */}
        <div className="pp-header">
          <div className="pp-header-left">
            <button className="pp-back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
              &larr;
            </button>
            <div className="pp-level-badge">Level {level}</div>
          </div>
          <div className="pp-header-center">
            <div className="pp-progress">
              <span className="pp-progress-icon">🔍</span>
              <span className="pp-progress-text">{foundCount} / {animals.length}</span>
            </div>
          </div>
          <div className="pp-header-right">
            <div className="pp-score-badge">⭐ {score}</div>
            {streak >= 2 && (
              <div className="pp-streak-badge">🔥 {streak}</div>
            )}
          </div>
        </div>

        {/* Clue Bar */}
        {currentAnimal && !currentAnimal.found && (
          <div className="pp-clue-bar">
            <div className="pp-clue-text">
              <span className="pp-clue-icon">🔍</span>
              <span>Find the {currentAnimal.name}! It&apos;s </span>
              <span className="pp-clue-keyword">{currentAnimal.positionWord.toUpperCase()}</span>
              <span> the {currentAnimal.refObject}
                {currentAnimal.refObject2 ? ` and the ${currentAnimal.refObject2}` : ''}!</span>
            </div>
          </div>
        )}

        {/* Found text bar */}
        {foundText && (
          <div className="pp-found-bar">
            <span className="pp-found-text">{foundText}</span>
          </div>
        )}

        {/* Warmth indicator */}
        {warmthLabel && isDragging && (
          <div className="pp-warmth-bar" style={{ color: warmthColor }}>
            {warmthLabel}
          </div>
        )}

        {/* Playground Scene */}
        <div
          className={`pp-scene ${wrongShake ? 'shake' : ''}`}
          ref={sceneRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onClick={handleSceneClick}
        >
          {/* Sky background */}
          <div className="pp-sky">
            <div className="pp-sun-small" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="pp-scene-cloud" style={{
                top: `${5 + i * 7}%`,
                animationDuration: `${25 + i * 10}s`,
                animationDelay: `${i * 5}s`,
              }} />
            ))}
          </div>

          {/* Grass */}
          <div className="pp-grass" />

          {/* Ambient leaf particles */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="pp-leaf" style={{
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${8 + i * 2}s`,
            }}>
              🍃
            </div>
          ))}

          {/* Playground Equipment */}
          {equipment.map(obj => (
            <div
              key={obj.id}
              className={`pp-equip pp-equip-${obj.id}`}
              style={{
                left: obj.x,
                top: obj.y,
                width: obj.w,
                height: obj.h,
              }}
            >
              <span className="pp-equip-label">{obj.name}</span>
            </div>
          ))}

          {/* Decorations from finding animals */}
          {decorations > 0 && [...Array(Math.min(decorations, 10))].map((_, i) => (
            <div key={i} className="pp-decoration" style={{
              left: `${10 + (i * 17) % 85}%`,
              top: `${15 + (i * 23) % 50}%`,
              animationDelay: `${i * 0.3}s`,
            }}>
              {['🎈', '🌸', '🦋', '🌻', '🎀', '⭐', '🌺', '🎪', '🎨', '🌈'][i % 10]}
            </div>
          ))}

          {/* Hidden Animals */}
          {animals.map((animal, idx) => {
            if (idx !== currentAnimalIdx && !animal.found) return null;
            return (
              <div
                key={idx}
                className={`pp-hidden-animal ${animal.found ? 'revealed' : ''} ${
                  idx === currentAnimalIdx && warmth >= 3 && !animal.found ? 'peeking' : ''
                }`}
                style={{
                  left: animal.x,
                  top: animal.y,
                }}
              >
                {/* Eyes peeking when close */}
                {idx === currentAnimalIdx && warmth >= 2 && !animal.found && (
                  <div className="pp-peek-eyes">
                    <span className="pp-eye">👀</span>
                  </div>
                )}
                {/* Full reveal */}
                {animal.found && (
                  <div className="pp-revealed-animal">
                    <span className="pp-animal-emoji">{animal.emoji}</span>
                    <div className="pp-reveal-speech">
                      <span className="pp-reveal-word">{animal.positionWord.toUpperCase()}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Magnifying Glass */}
          <div
            className={`pp-magnifier ${isDragging ? 'dragging' : ''} ${magGlowing ? 'glowing' : ''} ${warmth === 3 ? 'pulse-green' : ''}`}
            style={{
              left: magX,
              top: magY,
              '--warmth-color': warmthColor,
            } as React.CSSProperties}
          >
            <div className="pp-mag-glass" />
            <div className="pp-mag-handle" />
            <div className="pp-mag-ring" style={{ borderColor: warmthColor }} />
            {magGlowing && <div className="pp-mag-glow" style={{ background: `radial-gradient(circle, ${warmthColor}40 0%, transparent 70%)` }} />}
          </div>

          {/* Hint overlay */}
          {showHint && (
            <div className="pp-hint-overlay">
              <div className="pp-hint-bubble">
                <span className="pp-hint-icon">💡</span>
                <span>{hintText}</span>
              </div>
            </div>
          )}

          {/* Found animation overlay */}
          {showFoundAnim && (
            <div className="pp-found-overlay">
              <div className="pp-found-burst">🎉</div>
            </div>
          )}

          {/* Particles */}
          {particles.map((p, i) => {
            const alpha = Math.max(0, p.life / p.maxLife);
            return (
              <div
                key={i}
                className="pp-particle"
                style={{
                  left: p.x,
                  top: p.y,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.type === 'star' ? 'transparent' : p.color,
                  opacity: alpha,
                  transform: `rotate(${p.rotation}deg)`,
                  borderRadius: p.type === 'confetti' ? '2px' : '50%',
                  fontSize: p.type === 'star' ? `${p.size}px` : undefined,
                }}
              >
                {p.type === 'star' && '⭐'}
                {p.type === 'sparkle' && '✨'}
              </div>
            );
          })}
        </div>

        {/* Found Friends Bar */}
        <div className="pp-friends-bar">
          <span className="pp-friends-label">Found:</span>
          {foundFriends.map((f, i) => (
            <span key={i} className="pp-friend-icon" style={{ animationDelay: `${f.bounceDelay}s` }}>
              {f.emoji}
            </span>
          ))}
          {foundFriends.length === 0 && (
            <span className="pp-friends-empty">Search the playground!</span>
          )}
        </div>
      </div>
    </div>
  );
}

// =============== STYLES ===============

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .pp-root {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    position: relative;
    background: #87CEEB;
  }

  /* ========== INTRO SCREEN ========== */

  .pp-intro {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .pp-intro-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #4FC3F7 0%, #81D4FA 30%, #B3E5FC 60%, #7EC850 60%, #5BAD30 100%);
  }

  .pp-sun {
    position: absolute;
    top: 8%;
    right: 12%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #FFF9C4, #FFD54F, #FFA726);
    box-shadow: 0 0 40px rgba(255,213,79,0.6), 0 0 80px rgba(255,213,79,0.3);
    animation: ppSunPulse 4s ease-in-out infinite;
  }

  @keyframes ppSunPulse {
    0%, 100% { box-shadow: 0 0 40px rgba(255,213,79,0.6), 0 0 80px rgba(255,213,79,0.3); transform: scale(1); }
    50% { box-shadow: 0 0 60px rgba(255,213,79,0.8), 0 0 120px rgba(255,213,79,0.4); transform: scale(1.05); }
  }

  .pp-cloud {
    position: absolute;
    width: 120px;
    height: 45px;
    background: white;
    border-radius: 45px;
    animation: ppCloudDrift linear infinite;
  }

  .pp-cloud::before {
    content: '';
    position: absolute;
    top: -18px;
    left: 25px;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
  }

  .pp-cloud::after {
    content: '';
    position: absolute;
    top: -12px;
    left: 55px;
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
  }

  @keyframes ppCloudDrift {
    0% { transform: translateX(-150px); }
    100% { transform: translateX(calc(100vw + 150px)); }
  }

  .pp-intro-animals {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 3;
  }

  .pp-intro-animal {
    position: absolute;
    animation: ppAnimalBounce 2s ease-in-out infinite;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  }

  @keyframes ppAnimalBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-18px) scale(1.08); }
  }

  .pp-intro-words {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
  }

  .pp-intro-word {
    position: absolute;
    font-size: clamp(0.7rem, 2vw, 1rem);
    font-weight: 800;
    color: rgba(255,255,255,0.7);
    background: rgba(255,255,255,0.2);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    backdrop-filter: blur(4px);
    animation: ppWordFloat 4s ease-in-out infinite;
    text-shadow: 0 1px 4px rgba(0,0,0,0.1);
  }

  @keyframes ppWordFloat {
    0%, 100% { transform: translateY(0) rotate(-2deg); opacity: 0.5; }
    50% { transform: translateY(-12px) rotate(2deg); opacity: 0.8; }
  }

  .pp-intro-card {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
    background: rgba(255,255,255,0.18);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 32px;
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }

  .pp-intro-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .pp-intro-logo h1 {
    font-size: clamp(1.5rem, 6vw, 2.4rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FF6B8A, #A855F7, #38BDF8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pp-logo-emoji {
    font-size: 2rem;
    animation: ppLogoWobble 2s ease-in-out infinite;
  }

  .pp-logo-emoji.flip { transform: scaleX(-1); }
  .pp-logo-emoji:last-child { animation-delay: 0.3s; }

  @keyframes ppLogoWobble {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(-10deg); }
    75% { transform: translateY(-5px) rotate(10deg); }
  }

  .pp-intro-tagline {
    color: rgba(255,255,255,0.85);
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 0 1px 3px rgba(0,0,0,0.15);
  }

  .pp-how-to-play {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 20px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .pp-how-to-play h3 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .pp-how-step {
    margin-bottom: 1rem;
  }

  .pp-how-step:last-child { margin-bottom: 0; }

  .pp-how-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.3rem;
  }

  .pp-how-icon { font-size: 1.5rem; }
  .pp-how-mag { font-size: 1.8rem; animation: ppMagSearch 2s ease-in-out infinite; }

  @keyframes ppMagSearch {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    25% { transform: translateX(-10px) rotate(-15deg); }
    75% { transform: translateX(10px) rotate(15deg); }
  }

  .pp-how-arrow { color: rgba(255,255,255,0.5); font-size: 1.2rem; font-weight: 700; }

  .pp-how-badge {
    font-size: 0.8rem;
    color: white;
    background: rgba(168,85,247,0.4);
    padding: 0.25rem 0.6rem;
    border-radius: 12px;
    font-weight: 700;
  }

  .pp-how-temp { font-size: 1.4rem; animation: ppTempPulse 1s ease-in-out infinite; }

  @keyframes ppTempPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  .pp-how-step p {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
  }

  .pp-how-step p strong { color: #FFD700; }
  .pp-highlight { color: #4ade80; font-weight: 800; }

  .pp-start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #FF6B8A, #A855F7);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(168,85,247,0.4);
  }

  .pp-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(168,85,247,0.5);
  }

  /* ========== PLAYING SCREEN ========== */

  .pp-game {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .pp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(10px);
    z-index: 50;
  }

  .pp-header-left, .pp-header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .pp-back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.15);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pp-back-btn:hover { background: rgba(255,255,255,0.25); }

  .pp-level-badge {
    padding: 0.4rem 0.9rem;
    background: linear-gradient(135deg, #FF6B8A, #A855F7);
    border-radius: 18px;
    font-weight: 700;
    color: white;
    font-size: 0.85rem;
  }

  .pp-header-center {
    display: flex;
    align-items: center;
  }

  .pp-progress {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    background: rgba(255,255,255,0.12);
    border-radius: 18px;
  }

  .pp-progress-icon { font-size: 1rem; }

  .pp-progress-text {
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .pp-score-badge {
    padding: 0.4rem 0.9rem;
    background: rgba(251,191,36,0.25);
    border-radius: 18px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .pp-streak-badge {
    padding: 0.3rem 0.7rem;
    background: rgba(239,68,68,0.25);
    border-radius: 14px;
    color: #f87171;
    font-weight: 700;
    font-size: 0.8rem;
    animation: ppStreakPulse 0.8s ease-in-out infinite;
  }

  @keyframes ppStreakPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* Clue Bar */
  .pp-clue-bar {
    padding: 0.6rem 1rem;
    background: linear-gradient(90deg, rgba(168,85,247,0.3), rgba(56,189,248,0.3));
    backdrop-filter: blur(8px);
    text-align: center;
    z-index: 40;
  }

  .pp-clue-text {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: clamp(0.85rem, 2.5vw, 1.1rem);
    font-weight: 700;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    flex-wrap: wrap;
    justify-content: center;
  }

  .pp-clue-icon { font-size: 1.2rem; }

  .pp-clue-keyword {
    font-size: clamp(1rem, 3vw, 1.3rem);
    font-weight: 900;
    color: #FFD700;
    background: rgba(255,215,0,0.2);
    padding: 0.1rem 0.6rem;
    border-radius: 10px;
    animation: ppKeywordPulse 1.5s ease-in-out infinite;
    text-shadow: 0 2px 8px rgba(255,215,0,0.4);
  }

  @keyframes ppKeywordPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  /* Found text bar */
  .pp-found-bar {
    padding: 0.5rem 1rem;
    background: linear-gradient(90deg, rgba(74,222,128,0.4), rgba(34,197,94,0.4));
    text-align: center;
    z-index: 40;
    animation: ppFoundBarSlide 0.4s ease;
  }

  @keyframes ppFoundBarSlide {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .pp-found-text {
    font-size: clamp(0.8rem, 2vw, 1rem);
    font-weight: 800;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  /* Warmth indicator */
  .pp-warmth-bar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(1rem, 3vw, 1.4rem);
    font-weight: 900;
    z-index: 80;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
    pointer-events: none;
    animation: ppWarmthPop 0.3s ease;
  }

  @keyframes ppWarmthPop {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  /* ========== PLAYGROUND SCENE ========== */

  .pp-scene {
    flex: 1;
    position: relative;
    overflow: hidden;
    cursor: grab;
    touch-action: none;
  }

  .pp-scene.shake {
    animation: ppSceneShake 0.5s ease;
  }

  @keyframes ppSceneShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px) rotate(-0.5deg); }
    40% { transform: translateX(6px) rotate(0.5deg); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
  }

  /* Sky in scene */
  .pp-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #4FC3F7 0%, #81D4FA 30%, #B3E5FC 55%, transparent 55%);
    pointer-events: none;
  }

  .pp-sun-small {
    position: absolute;
    top: 5%;
    right: 8%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #FFF9C4, #FFD54F);
    box-shadow: 0 0 20px rgba(255,213,79,0.5), 0 0 50px rgba(255,213,79,0.2);
    animation: ppSunPulse 4s ease-in-out infinite;
  }

  .pp-scene-cloud {
    position: absolute;
    width: 80px;
    height: 28px;
    background: rgba(255,255,255,0.8);
    border-radius: 28px;
    animation: ppCloudDrift linear infinite;
    pointer-events: none;
  }

  .pp-scene-cloud::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 18px;
    width: 30px;
    height: 30px;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
  }

  .pp-scene-cloud::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 38px;
    width: 22px;
    height: 22px;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
  }

  /* Grass */
  .pp-grass {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(180deg, #7EC850 0%, #6BBF3B 20%, #5BAD30 60%, #4A9A25 100%);
    pointer-events: none;
  }

  .pp-grass::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    height: 16px;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 10px,
      #7EC850 10px,
      #7EC850 12px,
      transparent 12px,
      transparent 20px
    );
    opacity: 0.3;
  }

  /* Falling leaves */
  .pp-leaf {
    position: absolute;
    top: -5%;
    font-size: 1.2rem;
    animation: ppLeafFall linear infinite;
    pointer-events: none;
    z-index: 5;
    opacity: 0.6;
  }

  @keyframes ppLeafFall {
    0% { transform: translateY(-20px) rotate(0deg) translateX(0); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.6; }
    100% { transform: translateY(100vh) rotate(720deg) translateX(80px); opacity: 0; }
  }

  /* ========== PLAYGROUND EQUIPMENT (CSS-rendered) ========== */

  .pp-equip {
    position: absolute;
    pointer-events: none;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .pp-equip-label {
    position: absolute;
    bottom: -18px;
    font-size: clamp(0.5rem, 1.2vw, 0.7rem);
    font-weight: 700;
    color: rgba(255,255,255,0.9);
    background: rgba(0,0,0,0.4);
    padding: 0.1rem 0.4rem;
    border-radius: 8px;
    white-space: nowrap;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  }

  /* Slide */
  .pp-equip-slide {
    background: linear-gradient(135deg, #E53935 0%, #EF5350 50%, #E53935 100%);
    border-radius: 8px 30px 4px 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.3);
    transform: skewX(-5deg);
  }

  .pp-equip-slide::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 15%;
    height: 100%;
    background: linear-gradient(180deg, #C62828, #8D6E63);
    border-radius: 2px;
  }

  .pp-equip-slide::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 5%;
    width: 15%;
    height: 60%;
    background: linear-gradient(180deg, #C62828, #8D6E63);
    border-radius: 2px;
  }

  /* Swings */
  .pp-equip-swings {
    background: transparent;
    border-top: 6px solid #795548;
    position: relative;
  }

  .pp-equip-swings::before {
    content: '';
    position: absolute;
    left: 20%;
    top: 6px;
    width: 4px;
    height: 70%;
    background: linear-gradient(180deg, #8D6E63, #6D4C41);
    border-radius: 2px;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
    animation: ppSwingAnim 2.5s ease-in-out infinite;
    transform-origin: top center;
  }

  .pp-equip-swings::after {
    content: '';
    position: absolute;
    right: 20%;
    top: 6px;
    width: 4px;
    height: 70%;
    background: linear-gradient(180deg, #8D6E63, #6D4C41);
    border-radius: 2px;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
    animation: ppSwingAnim 2.5s ease-in-out infinite 0.3s;
    transform-origin: top center;
  }

  @keyframes ppSwingAnim {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
  }

  /* Sandbox */
  .pp-equip-sandbox {
    background: linear-gradient(180deg, #FFE0B2 0%, #FFCC80 50%, #FFB74D 100%);
    border: 3px solid #8D6E63;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15), inset 0 -4px 8px rgba(0,0,0,0.1);
  }

  .pp-equip-sandbox::before {
    content: '🪣';
    position: absolute;
    top: 10%;
    left: 15%;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
  }

  .pp-equip-sandbox::after {
    content: '';
    position: absolute;
    top: 30%;
    right: 20%;
    width: 30%;
    height: 30%;
    background: radial-gradient(circle, #FFE0B2 0%, #FFCC80 100%);
    border-radius: 50%;
    opacity: 0.5;
  }

  /* Seesaw */
  .pp-equip-seesaw {
    background: transparent;
  }

  .pp-equip-seesaw::before {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 45%;
    width: 10%;
    height: 40%;
    background: linear-gradient(180deg, #6D4C41, #5D4037);
    border-radius: 3px;
    clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
  }

  .pp-equip-seesaw::after {
    content: '';
    position: absolute;
    bottom: 50%;
    left: 5%;
    width: 90%;
    height: 14%;
    background: linear-gradient(90deg, #42A5F5, #1E88E5, #42A5F5);
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    animation: ppSeesawTilt 3s ease-in-out infinite;
    transform-origin: center center;
  }

  @keyframes ppSeesawTilt {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  /* Climbing Frame */
  .pp-equip-climbing {
    background: transparent;
    border: 4px solid #F57C00;
    border-radius: 6px;
    box-shadow: inset 4px 0 0 -2px #FFB74D, inset -4px 0 0 -2px #FFB74D,
                inset 0 4px 0 -2px #FFB74D, inset 0 -4px 0 -2px #FFB74D;
  }

  .pp-equip-climbing::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    height: 3px;
    background: #F57C00;
    box-shadow: 0 10px 0 #FFB74D, 0 20px 0 #F57C00, 0 30px 0 #FFB74D;
  }

  .pp-equip-climbing::after {
    content: '';
    position: absolute;
    top: 0;
    left: 45%;
    width: 3px;
    height: 100%;
    background: #F57C00;
    box-shadow: 8px 0 0 #FFB74D;
  }

  /* Bench */
  .pp-equip-bench {
    background: linear-gradient(180deg, #8D6E63 0%, #6D4C41 100%);
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  }

  .pp-equip-bench::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 15%;
    width: 12%;
    height: 10px;
    background: #5D4037;
    border-radius: 0 0 3px 3px;
    box-shadow: calc(100% * 4.5) 0 0 0 #5D4037;
  }

  .pp-equip-bench::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #A1887F, #8D6E63, #A1887F);
    border-radius: 3px 3px 0 0;
  }

  /* Tree */
  .pp-equip-tree {
    background: transparent;
  }

  .pp-equip-tree::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 40%;
    width: 20%;
    height: 55%;
    background: linear-gradient(90deg, #6D4C41, #8D6E63, #6D4C41);
    border-radius: 4px;
  }

  .pp-equip-tree::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: radial-gradient(ellipse at 50% 60%, #4CAF50, #388E3C, #2E7D32);
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: ppTreeSway 4s ease-in-out infinite;
  }

  @keyframes ppTreeSway {
    0%, 100% { transform: rotate(-1deg) scaleX(1); }
    50% { transform: rotate(1deg) scaleX(1.02); }
  }

  /* Bushes */
  .pp-equip-bushes {
    background: radial-gradient(ellipse at 50% 70%, #66BB6A, #43A047, #2E7D32);
    border-radius: 50% 50% 40% 40%;
    box-shadow: 20px 5px 0 -3px #4CAF50, -15px 8px 0 -5px #388E3C, 0 4px 8px rgba(0,0,0,0.15);
  }

  .pp-equip-bushes::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -20%;
    width: 50%;
    height: 80%;
    background: radial-gradient(ellipse at 50% 70%, #66BB6A, #43A047);
    border-radius: 50%;
  }

  .pp-equip-bushes::after {
    content: '';
    position: absolute;
    top: 15%;
    right: -15%;
    width: 45%;
    height: 75%;
    background: radial-gradient(ellipse at 50% 60%, #81C784, #4CAF50);
    border-radius: 50%;
  }

  /* ========== DECORATIONS ========== */

  .pp-decoration {
    position: absolute;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    pointer-events: none;
    z-index: 6;
    animation: ppDecoFloat 3s ease-in-out infinite;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
  }

  @keyframes ppDecoFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.05); }
  }

  /* ========== HIDDEN ANIMALS ========== */

  .pp-hidden-animal {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 25;
    pointer-events: none;
  }

  .pp-peek-eyes {
    animation: ppPeekIn 0.4s ease;
  }

  @keyframes ppPeekIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.2); }
    100% { transform: scale(1); opacity: 1; }
  }

  .pp-eye {
    font-size: clamp(1.5rem, 4vw, 2rem);
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
    animation: ppEyeBlink 2s ease-in-out infinite;
  }

  @keyframes ppEyeBlink {
    0%, 45%, 55%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.1); }
  }

  .pp-revealed-animal {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ppRevealPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes ppRevealPop {
    0% { transform: scale(0) rotate(-20deg); }
    50% { transform: scale(1.4) rotate(10deg); }
    70% { transform: scale(0.9) rotate(-5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .pp-animal-emoji {
    font-size: clamp(2.5rem, 7vw, 3.5rem);
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
    animation: ppAnimalHappy 1s ease-in-out infinite;
  }

  @keyframes ppAnimalHappy {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .pp-reveal-speech {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 14px;
    padding: 0.3rem 0.8rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    animation: ppSpeechIn 0.4s ease 0.3s both;
    white-space: nowrap;
  }

  .pp-reveal-speech::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid white;
  }

  @keyframes ppSpeechIn {
    0% { transform: translateX(-50%) scale(0); opacity: 0; }
    100% { transform: translateX(-50%) scale(1); opacity: 1; }
  }

  .pp-reveal-word {
    font-size: clamp(0.7rem, 2vw, 0.9rem);
    font-weight: 900;
    color: #A855F7;
  }

  /* ========== MAGNIFYING GLASS ========== */

  .pp-magnifier {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 30;
    pointer-events: none;
    transition: filter 0.3s ease;
  }

  .pp-mag-glass {
    width: ${MAGNIFIER_RADIUS * 2}px;
    height: ${MAGNIFIER_RADIUS * 2}px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%,
      rgba(255,255,255,0.4) 0%,
      rgba(255,255,255,0.15) 30%,
      rgba(200,230,255,0.1) 60%,
      rgba(180,220,255,0.05) 100%
    );
    border: 4px solid #6D4C41;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2),
                inset 0 0 30px rgba(255,255,255,0.15);
    position: relative;
  }

  .pp-mag-glass::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 20%;
    width: 30%;
    height: 20%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%);
    border-radius: 50%;
  }

  .pp-mag-handle {
    position: absolute;
    bottom: -30px;
    right: -20px;
    width: 12px;
    height: 40px;
    background: linear-gradient(90deg, #8D6E63, #6D4C41, #8D6E63);
    border-radius: 0 0 6px 6px;
    transform: rotate(45deg);
    box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
  }

  .pp-mag-ring {
    position: absolute;
    inset: -6px;
    border: 3px solid #60a5fa;
    border-radius: 50%;
    transition: border-color 0.3s ease;
    opacity: 0.8;
  }

  .pp-mag-glow {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    pointer-events: none;
    animation: ppMagGlow 1s ease-in-out infinite;
  }

  @keyframes ppMagGlow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  .pp-magnifier.dragging {
    filter: brightness(1.1);
  }

  .pp-magnifier.dragging .pp-mag-glass {
    border-color: #5D4037;
    box-shadow: 0 6px 30px rgba(0,0,0,0.3),
                inset 0 0 30px rgba(255,255,255,0.2);
  }

  .pp-magnifier.glowing .pp-mag-ring {
    opacity: 1;
    animation: ppRingPulse 0.8s ease-in-out infinite;
  }

  @keyframes ppRingPulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.08); opacity: 1; }
  }

  .pp-magnifier.pulse-green .pp-mag-glass {
    box-shadow: 0 0 20px rgba(34,197,94,0.5),
                0 6px 30px rgba(0,0,0,0.3),
                inset 0 0 30px rgba(34,197,94,0.2);
    animation: ppMagPulseGreen 0.6s ease-in-out infinite;
  }

  @keyframes ppMagPulseGreen {
    0%, 100% { box-shadow: 0 0 20px rgba(34,197,94,0.5), 0 6px 30px rgba(0,0,0,0.3), inset 0 0 30px rgba(34,197,94,0.2); }
    50% { box-shadow: 0 0 40px rgba(34,197,94,0.8), 0 8px 40px rgba(0,0,0,0.3), inset 0 0 40px rgba(34,197,94,0.3); }
  }

  /* ========== HINT OVERLAY ========== */

  .pp-hint-overlay {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 90;
    pointer-events: none;
    animation: ppHintSlide 0.4s ease;
  }

  @keyframes ppHintSlide {
    0% { transform: translateX(-50%) translateY(20px); opacity: 0; }
    100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  }

  .pp-hint-bubble {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    background: rgba(0,0,0,0.85);
    border: 2px solid #fbbf24;
    border-radius: 20px;
    color: white;
    font-weight: 700;
    font-size: clamp(0.8rem, 2.5vw, 1rem);
    white-space: nowrap;
    backdrop-filter: blur(8px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }

  .pp-hint-icon { font-size: 1.3rem; }

  /* ========== FOUND ANIMATION OVERLAY ========== */

  .pp-found-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 100;
  }

  .pp-found-burst {
    font-size: 5rem;
    animation: ppFoundBurst 1.5s ease forwards;
  }

  @keyframes ppFoundBurst {
    0% { transform: scale(0) rotate(0deg); opacity: 0; }
    30% { transform: scale(1.5) rotate(15deg); opacity: 1; }
    60% { transform: scale(1.2) rotate(-5deg); opacity: 1; }
    100% { transform: scale(2) rotate(0deg); opacity: 0; }
  }

  /* ========== PARTICLES ========== */

  .pp-particle {
    position: absolute;
    pointer-events: none;
    z-index: 110;
    transform-origin: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  /* ========== FOUND FRIENDS BAR ========== */

  .pp-friends-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(8px);
    overflow-x: auto;
    z-index: 40;
  }

  .pp-friends-label {
    color: rgba(255,255,255,0.6);
    font-size: 0.8rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .pp-friend-icon {
    font-size: 1.5rem;
    animation: ppFriendPop 0.5s ease both, ppFriendBob 2s ease-in-out infinite;
  }

  @keyframes ppFriendPop {
    0% { transform: scale(0); }
    60% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  @keyframes ppFriendBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .pp-friends-empty {
    color: rgba(255,255,255,0.4);
    font-size: 0.8rem;
    font-style: italic;
  }

  /* ========== COMPLETE SCREENS ========== */

  .pp-complete {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .pp-complete-sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #4FC3F7 0%, #81D4FA 30%, #B3E5FC 60%, #7EC850 60%, #5BAD30 100%);
  }

  .pp-complete-confetti {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 5;
  }

  .pp-confetti-piece {
    position: absolute;
    top: -10px;
    border-radius: 2px;
    animation: ppConfettiFall linear infinite;
  }

  @keyframes ppConfettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0.3; }
  }

  .pp-complete-card {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
    background: rgba(255,255,255,0.18);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 32px;
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }

  .pp-complete-title {
    font-size: clamp(1.5rem, 5vw, 2.2rem);
    font-weight: 900;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .pp-complete-animals {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .pp-complete-animal {
    font-size: 2.5rem;
    animation: ppCompleteAnimalBounce 1s ease-in-out infinite;
  }

  @keyframes ppCompleteAnimalBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(10deg); }
  }

  .pp-complete-subtitle {
    color: rgba(255,255,255,0.8);
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .pp-stats-row {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .pp-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pp-stat-label {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.6);
    margin-bottom: 0.2rem;
    font-weight: 600;
  }

  .pp-stat-value {
    font-size: 1.6rem;
    font-weight: 900;
    color: white;
  }

  .pp-friends-row {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px;
    padding: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .pp-friends-row h3 {
    color: rgba(255,255,255,0.7);
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }

  .pp-friends-list {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .pp-friend-emoji {
    font-size: 2rem;
    animation: ppFriendBob 1.5s ease-in-out infinite;
  }

  .pp-complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .pp-next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #FF6B8A, #A855F7);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(168,85,247,0.4);
  }

  .pp-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(168,85,247,0.5);
  }

  .pp-menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: rgba(255,255,255,0.6);
    background: transparent;
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pp-menu-btn:hover {
    border-color: rgba(255,255,255,0.4);
    color: white;
  }

  /* ========== RESPONSIVE ========== */

  @media (max-width: 600px) {
    .pp-equip-label { font-size: 0.5rem; bottom: -14px; }
    .pp-clue-text { font-size: 0.8rem; }
    .pp-clue-keyword { font-size: 0.9rem; }
    .pp-hint-bubble { font-size: 0.75rem; padding: 0.6rem 0.8rem; }
    .pp-friends-bar { padding: 0.3rem 0.6rem; gap: 0.3rem; }
    .pp-friend-icon { font-size: 1.2rem; }
    .pp-header { padding: 0.4rem 0.6rem; }
    .pp-intro-card { padding: 1.2rem; margin: 0.5rem; }
    .pp-complete-card { padding: 1.2rem; margin: 0.5rem; }
    .pp-stats-row { gap: 1rem; }
    .pp-stat-value { font-size: 1.3rem; }
    .pp-complete-animal { font-size: 2rem; }
  }

  @media (max-width: 400px) {
    .pp-header-center { display: none; }
    .pp-clue-bar { padding: 0.4rem 0.6rem; }
    .pp-mag-glass { width: 80px; height: 80px; }
    .pp-mag-handle { height: 30px; width: 10px; bottom: -22px; right: -14px; }
  }
`;
