"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameComplete';
type RoundType = 'find' | 'place' | 'direction';
type PositionWord =
  | 'above' | 'below' | 'left' | 'right'
  | 'next to' | 'beside' | 'between'
  | 'inside' | 'outside' | 'in front of' | 'behind';
type DirectionWord = 'left' | 'right' | 'up' | 'down';

interface PlaygroundObject {
  id: string;
  emoji: string;
  name: string;
  x: number;   // % from left
  y: number;   // % from top
  width: number;
  height: number;
  animType: 'sway' | 'swing' | 'bob' | 'none';
  animSpeed: number;
}

interface MovingCharacter {
  emoji: string;
  name: string;
}

interface PositionZone {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  positionWord: PositionWord;
  refObject1: string;
  refObject2?: string;
}

interface Round {
  type: RoundType;
  question: string;
  character?: MovingCharacter;
  characterPosition?: { x: number; y: number };
  correctAnswer: string;
  options?: string[];
  zones?: PositionZone[];
  correctZoneId?: string;
  direction?: DirectionWord;
  positionWord: PositionWord | DirectionWord;
}

interface CloudData {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface FlowerData {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
}

interface ButterflyData {
  id: number;
  startX: number;
  startY: number;
  color: string;
  speed: number;
  delay: number;
}

interface SparkleData {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Badge {
  word: string;
  earned: boolean;
  emoji: string;
}

interface PositionPlaygroundProps {
  onExit?: () => void;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const CHARACTERS: MovingCharacter[] = [
  { emoji: '🐱', name: 'cat' },
  { emoji: '🐕', name: 'dog' },
  { emoji: '🏀', name: 'ball' },
  { emoji: '🦋', name: 'butterfly' },
  { emoji: '🐸', name: 'frog' },
  { emoji: '🐦', name: 'bird' },
  { emoji: '🧸', name: 'teddy bear' },
  { emoji: '⭐', name: 'star' },
];

const PLAYGROUND_OBJECTS: PlaygroundObject[] = [
  { id: 'slide', emoji: '🛝', name: 'slide', x: 15, y: 50, width: 14, height: 20, animType: 'none', animSpeed: 0 },
  { id: 'swings', emoji: '🎪', name: 'swings', x: 40, y: 45, width: 12, height: 22, animType: 'swing', animSpeed: 2 },
  { id: 'tree', emoji: '🌳', name: 'tree', x: 72, y: 38, width: 16, height: 28, animType: 'sway', animSpeed: 3 },
  { id: 'sandpit', emoji: '🏖️', name: 'sandpit', x: 55, y: 72, width: 16, height: 10, animType: 'none', animSpeed: 0 },
  { id: 'bench', emoji: '🪑', name: 'bench', x: 28, y: 72, width: 12, height: 8, animType: 'none', animSpeed: 0 },
  { id: 'fountain', emoji: '⛲', name: 'fountain', x: 85, y: 60, width: 12, height: 14, animType: 'bob', animSpeed: 2.5 },
];

const POSITION_BADGES: Badge[] = [
  { word: 'above', earned: false, emoji: '⬆️' },
  { word: 'below', earned: false, emoji: '⬇️' },
  { word: 'left', earned: false, emoji: '⬅️' },
  { word: 'right', earned: false, emoji: '➡️' },
  { word: 'next to', earned: false, emoji: '↔️' },
  { word: 'beside', earned: false, emoji: '🤝' },
  { word: 'between', earned: false, emoji: '↕️' },
  { word: 'inside', earned: false, emoji: '🔲' },
  { word: 'outside', earned: false, emoji: '🔳' },
  { word: 'in front of', earned: false, emoji: '👉' },
  { word: 'behind', earned: false, emoji: '👈' },
];

const FLOWER_COLORS = ['#FF6B8A', '#FFB74D', '#E040FB', '#FF5252', '#FF80AB', '#FFAB40'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

// Generate position-based coordinates relative to a reference object
function getPositionCoords(
  posWord: PositionWord,
  ref1: PlaygroundObject,
  ref2?: PlaygroundObject
): { x: number; y: number } {
  switch (posWord) {
    case 'above':
      return { x: ref1.x + ref1.width / 2 - 3, y: ref1.y - 14 };
    case 'below':
      return { x: ref1.x + ref1.width / 2 - 3, y: ref1.y + ref1.height + 2 };
    case 'left':
      return { x: ref1.x - 12, y: ref1.y + ref1.height / 2 - 3 };
    case 'right':
      return { x: ref1.x + ref1.width + 2, y: ref1.y + ref1.height / 2 - 3 };
    case 'next to':
    case 'beside':
      return { x: ref1.x + ref1.width + 3, y: ref1.y + ref1.height / 2 - 3 };
    case 'between':
      if (ref2) {
        return {
          x: (ref1.x + ref1.width / 2 + ref2.x + ref2.width / 2) / 2 - 3,
          y: (ref1.y + ref1.height / 2 + ref2.y + ref2.height / 2) / 2 - 3,
        };
      }
      return { x: ref1.x + ref1.width + 8, y: ref1.y + ref1.height / 2 - 3 };
    case 'inside':
      return { x: ref1.x + ref1.width / 2 - 3, y: ref1.y + ref1.height / 2 - 3 };
    case 'outside':
      return { x: ref1.x - 14, y: ref1.y - 6 };
    case 'in front of':
      return { x: ref1.x + ref1.width / 2 - 3, y: ref1.y + ref1.height + 4 };
    case 'behind':
      return { x: ref1.x + ref1.width / 2 - 3, y: ref1.y - 10 };
    default:
      return { x: ref1.x, y: ref1.y };
  }
}

// ─── Round Generation ────────────────────────────────────────────────────────

function generateFindRound(level: number): Round {
  const character = pick(CHARACTERS);
  const refObj = pick(PLAYGROUND_OBJECTS);

  // Pick position words based on difficulty
  let availableWords: PositionWord[];
  if (level <= 3) {
    availableWords = ['above', 'below', 'left', 'right'];
  } else if (level <= 6) {
    availableWords = ['above', 'below', 'left', 'right', 'next to', 'beside', 'between'];
  } else {
    availableWords = ['above', 'below', 'left', 'right', 'next to', 'beside', 'between', 'inside', 'outside', 'in front of', 'behind'];
  }

  const posWord = pick(availableWords);
  let ref2: PlaygroundObject | undefined;
  if (posWord === 'between') {
    const others = PLAYGROUND_OBJECTS.filter(o => o.id !== refObj.id);
    ref2 = pick(others);
  }

  const coords = getPositionCoords(posWord, refObj, ref2);
  const correctAnswer = posWord === 'between'
    ? `${posWord} the ${refObj.name} and the ${ref2!.name}`
    : `${posWord} the ${refObj.name}`;

  // Generate wrong options
  const wrongWords = availableWords.filter(w => w !== posWord);
  const wrongOptions: string[] = [];
  const usedPhrases = new Set<string>([correctAnswer]);

  while (wrongOptions.length < (level <= 3 ? 1 : 2)) {
    const wrongWord = pick(wrongWords);
    const wrongRef = pick(PLAYGROUND_OBJECTS);
    let phrase: string;
    if (wrongWord === 'between') {
      const others = PLAYGROUND_OBJECTS.filter(o => o.id !== wrongRef.id);
      const wrongRef2 = pick(others);
      phrase = `${wrongWord} the ${wrongRef.name} and the ${wrongRef2.name}`;
    } else {
      phrase = `${wrongWord} the ${wrongRef.name}`;
    }
    if (!usedPhrases.has(phrase)) {
      wrongOptions.push(phrase);
      usedPhrases.add(phrase);
    }
  }

  const options = shuffle([correctAnswer, ...wrongOptions]);

  return {
    type: 'find',
    question: `Where is the ${character.name}?`,
    character,
    characterPosition: coords,
    correctAnswer,
    options,
    positionWord: posWord,
  };
}

function generatePlaceRound(level: number): Round {
  const character = pick(CHARACTERS);
  const refObj = pick(PLAYGROUND_OBJECTS);

  let availableWords: PositionWord[];
  if (level <= 3) {
    availableWords = ['above', 'below', 'left', 'right'];
  } else if (level <= 6) {
    availableWords = ['above', 'below', 'left', 'right', 'next to', 'beside'];
  } else {
    availableWords = ['above', 'below', 'left', 'right', 'next to', 'beside', 'between', 'inside', 'outside'];
  }

  const posWord = pick(availableWords);
  let ref2: PlaygroundObject | undefined;
  let instruction: string;

  if (posWord === 'between') {
    const others = PLAYGROUND_OBJECTS.filter(o => o.id !== refObj.id);
    ref2 = pick(others);
    instruction = `Put the ${character.name} BETWEEN the ${refObj.name} and the ${ref2.name}`;
  } else {
    instruction = `Put the ${character.name} ${posWord.toUpperCase()} the ${refObj.name}`;
  }

  const correctCoords = getPositionCoords(posWord, refObj, ref2);

  // Create position zones — correct + distractors
  const correctZone: PositionZone = {
    id: 'correct',
    label: posWord,
    x: correctCoords.x,
    y: correctCoords.y,
    width: 14,
    height: 12,
    positionWord: posWord,
    refObject1: refObj.id,
    refObject2: ref2?.id,
  };

  // Generate distractor zones
  const distractorWords = availableWords.filter(w => w !== posWord);
  const distractorZones: PositionZone[] = [];
  const numDistractors = level <= 3 ? 1 : level <= 6 ? 2 : 3;

  for (let i = 0; i < Math.min(numDistractors, distractorWords.length); i++) {
    const dWord = distractorWords[i];
    const dCoords = getPositionCoords(dWord, refObj);
    distractorZones.push({
      id: `distractor-${i}`,
      label: dWord,
      x: dCoords.x,
      y: dCoords.y,
      width: 14,
      height: 12,
      positionWord: dWord,
      refObject1: refObj.id,
    });
  }

  return {
    type: 'place',
    question: instruction,
    character,
    correctAnswer: 'correct',
    correctZoneId: 'correct',
    zones: shuffle([correctZone, ...distractorZones]),
    positionWord: posWord,
  };
}

function generateDirectionRound(level: number): Round {
  const directions: DirectionWord[] = ['left', 'right', 'up', 'down'];
  const correct = pick(directions);
  const wrongOptions = directions.filter(d => d !== correct);
  const numWrong = level <= 3 ? 1 : 2;
  const options = shuffle([correct, ...shuffle(wrongOptions).slice(0, numWrong)]);

  return {
    type: 'direction',
    question: 'Which direction is the arrow pointing?',
    correctAnswer: correct,
    options,
    direction: correct,
    positionWord: correct,
  };
}

function generateRound(level: number, roundIndex: number): Round {
  // Mix round types based on level
  if (level <= 2) {
    // Early levels: mostly find, some direction
    return roundIndex % 3 === 2 ? generateDirectionRound(level) : generateFindRound(level);
  } else if (level <= 5) {
    // Mid levels: mix of all three
    const types: RoundType[] = ['find', 'place', 'direction'];
    const type = types[roundIndex % 3];
    if (type === 'find') return generateFindRound(level);
    if (type === 'place') return generatePlaceRound(level);
    return generateDirectionRound(level);
  } else {
    // Later levels: more place and find
    const types: RoundType[] = ['find', 'place', 'find', 'place', 'direction'];
    const type = types[roundIndex % 5];
    if (type === 'find') return generateFindRound(level);
    if (type === 'place') return generatePlaceRound(level);
    return generateDirectionRound(level);
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function PositionPlayground({ onExit }: PositionPlaygroundProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState<Round | null>(null);
  const [roundIndex, setRoundIndex] = useState(0);
  const [roundsInLevel, setRoundsInLevel] = useState(0);
  const [totalRoundsInLevel] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [badges, setBadges] = useState<Badge[]>(POSITION_BADGES.map(b => ({ ...b })));
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [sparkles, setSparkles] = useState<SparkleData[]>([]);
  const [characterBounce, setCharacterBounce] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [streak, setStreak] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const cloudsRef = useRef<CloudData[]>([]);
  const butterfliesRef = useRef<ButterflyData[]>([]);
  const timeRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate atmospheric data on mount
  const flowers = useMemo<FlowerData[]>(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 3 + (i / 12) * 94,
      color: FLOWER_COLORS[i % FLOWER_COLORS.length],
      size: 12 + Math.random() * 8,
      delay: Math.random() * 3,
    }));
  }, []);

  // Initialize clouds and butterflies
  useEffect(() => {
    cloudsRef.current = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 3 + Math.random() * 18,
      size: 60 + Math.random() * 50,
      speed: 0.3 + Math.random() * 0.4,
      opacity: 0.5 + Math.random() * 0.4,
    }));
    butterfliesRef.current = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      startX: 20 + Math.random() * 60,
      startY: 25 + Math.random() * 40,
      color: ['#FF6B8A', '#A855F7', '#38BDF8'][i],
      speed: 1.5 + Math.random(),
      delay: i * 1.5,
    }));
  }, []);

  // ─── Animation Loop (Canvas for sky + atmosphere) ─────────────────────────

  const drawScene = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    timeRef.current = timestamp / 1000;
    const t = timeRef.current;

    ctx.clearRect(0, 0, w, h);

    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.55);
    skyGrad.addColorStop(0, '#87CEEB');
    skyGrad.addColorStop(0.3, '#B0E2FF');
    skyGrad.addColorStop(1, '#E0F4FF');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h * 0.55);

    // Sun
    const sunX = w * 0.88;
    const sunY = h * 0.1;
    const sunR = 30 + Math.sin(t * 0.5) * 3;
    // Sun glow
    const sunGlow = ctx.createRadialGradient(sunX, sunY, sunR * 0.5, sunX, sunY, sunR * 3);
    sunGlow.addColorStop(0, 'rgba(255,223,100,0.8)');
    sunGlow.addColorStop(0.3, 'rgba(255,223,100,0.3)');
    sunGlow.addColorStop(1, 'rgba(255,223,100,0)');
    ctx.fillStyle = sunGlow;
    ctx.fillRect(sunX - sunR * 3, sunY - sunR * 3, sunR * 6, sunR * 6);
    // Sun body
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
    ctx.fillStyle = '#FFD700';
    ctx.fill();
    // Sun rays
    ctx.strokeStyle = 'rgba(255,215,0,0.4)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2 + t * 0.3;
      const innerR = sunR + 5;
      const outerR = sunR + 15 + Math.sin(t + i) * 5;
      ctx.beginPath();
      ctx.moveTo(sunX + Math.cos(angle) * innerR, sunY + Math.sin(angle) * innerR);
      ctx.lineTo(sunX + Math.cos(angle) * outerR, sunY + Math.sin(angle) * outerR);
      ctx.stroke();
    }

    // Clouds
    cloudsRef.current.forEach(cloud => {
      cloud.x += cloud.speed * 0.016;
      if (cloud.x > 110) cloud.x = -15;

      const cx = (cloud.x / 100) * w;
      const cy = (cloud.y / 100) * h;
      const s = cloud.size * (w / 800);

      ctx.fillStyle = `rgba(255,255,255,${cloud.opacity})`;
      // Puffy cloud shape
      ctx.beginPath();
      ctx.arc(cx, cy, s * 0.35, 0, Math.PI * 2);
      ctx.arc(cx - s * 0.25, cy + s * 0.05, s * 0.28, 0, Math.PI * 2);
      ctx.arc(cx + s * 0.3, cy + s * 0.05, s * 0.3, 0, Math.PI * 2);
      ctx.arc(cx + s * 0.1, cy - s * 0.15, s * 0.25, 0, Math.PI * 2);
      ctx.fill();
    });

    // Grass area gradient
    const grassGrad = ctx.createLinearGradient(0, h * 0.5, 0, h);
    grassGrad.addColorStop(0, '#7EC850');
    grassGrad.addColorStop(0.15, '#6BBF3B');
    grassGrad.addColorStop(0.5, '#5BAD30');
    grassGrad.addColorStop(1, '#4A9A25');
    ctx.fillStyle = grassGrad;
    ctx.fillRect(0, h * 0.5, w, h * 0.5);

    // Grass texture lines
    ctx.strokeStyle = 'rgba(80,160,40,0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 40; i++) {
      const gx = (i / 40) * w + Math.sin(t + i) * 2;
      const gy = h * 0.52 + (i % 5) * (h * 0.09);
      const gh = 8 + Math.sin(t * 1.5 + i * 0.7) * 3;
      ctx.beginPath();
      ctx.moveTo(gx, gy);
      ctx.quadraticCurveTo(gx + 2, gy - gh, gx + 4, gy);
      ctx.stroke();
    }

    // Butterflies (canvas layer)
    butterfliesRef.current.forEach(bf => {
      const bfT = t * bf.speed + bf.delay;
      const bx = (bf.startX / 100) * w + Math.sin(bfT * 0.8) * 40;
      const by = (bf.startY / 100) * h + Math.cos(bfT * 1.2) * 20;
      const wingAngle = Math.sin(bfT * 8) * 0.4;

      ctx.save();
      ctx.translate(bx, by);

      // Wings
      ctx.fillStyle = bf.color;
      ctx.globalAlpha = 0.7;

      // Left wing
      ctx.save();
      ctx.scale(1 - wingAngle * 0.5, 1);
      ctx.beginPath();
      ctx.ellipse(-5, 0, 6, 4, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Right wing
      ctx.save();
      ctx.scale(1 + wingAngle * 0.5, 1);
      ctx.beginPath();
      ctx.ellipse(5, 0, 6, 4, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Body
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.ellipse(0, 0, 1.5, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      ctx.globalAlpha = 1;
    });

    animFrameRef.current = requestAnimationFrame(drawScene);
  }, []);

  // Start/stop animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animFrameRef.current = requestAnimationFrame(drawScene);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawScene]);

  // ─── Timer for advanced levels ─────────────────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'playing' || level < 7 || !round) return;
    setTimeLeft(15);
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === null) return null;
        if (prev <= 1) {
          // Time up = wrong answer
          handleAnswer('__timeout__');
          return null;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameScreen, level, round?.question]);

  // ─── Game Logic ────────────────────────────────────────────────────────────

  const startGame = useCallback(() => {
    setGameScreen('playing');
    setLevel(1);
    setScore(0);
    setRoundIndex(0);
    setRoundsInLevel(0);
    setStreak(0);
    setBadges(POSITION_BADGES.map(b => ({ ...b })));
    const newRound = generateRound(1, 0);
    setRound(newRound);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowSpeechBubble(false);
    setTimeLeft(null);
  }, []);

  const advanceRound = useCallback(() => {
    const newRoundsInLevel = roundsInLevel + 1;
    if (newRoundsInLevel >= totalRoundsInLevel) {
      // Level complete
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        setGameScreen('levelComplete');
      }, 1500);
      return;
    }
    setRoundsInLevel(newRoundsInLevel);
    const newRoundIdx = roundIndex + 1;
    setRoundIndex(newRoundIdx);
    const newRound = generateRound(level, newRoundIdx);
    setRound(newRound);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowSpeechBubble(false);
    setHoveredZone(null);
    setTimeLeft(null);
  }, [roundsInLevel, totalRoundsInLevel, roundIndex, level]);

  const handleAnswer = useCallback((answer: string) => {
    if (selectedAnswer !== null) return; // Already answered
    setSelectedAnswer(answer);

    const correct = round?.type === 'place'
      ? answer === round?.correctZoneId
      : answer === round?.correctAnswer;

    setIsCorrect(correct);

    if (correct) {
      const streakBonus = streak >= 2 ? streak * 5 : 0;
      setScore(s => s + 10 + streakBonus);
      setStreak(s => s + 1);
      setCharacterBounce(true);
      setShowSpeechBubble(true);

      // Earn badge
      if (round?.positionWord) {
        setBadges(prev =>
          prev.map(b =>
            b.word === round.positionWord ? { ...b, earned: true } : b
          )
        );
      }

      // Sparkle effect
      setSparkles(
        Array.from({ length: 8 }, (_, i) => ({
          id: i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20,
          size: 8 + Math.random() * 12,
          delay: Math.random() * 0.4,
        }))
      );

      setTimeout(() => {
        setCharacterBounce(false);
        setSparkles([]);
        advanceRound();
      }, 1800);
    } else {
      setStreak(0);
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowSpeechBubble(false);
      }, 1500);
    }
  }, [selectedAnswer, round, streak, advanceRound]);

  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setRoundIndex(0);
    setRoundsInLevel(0);
    const newRound = generateRound(newLevel, 0);
    setRound(newRound);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowSpeechBubble(false);
    setTimeLeft(null);
    setGameScreen('playing');
  }, [level]);

  const earnedBadgeCount = badges.filter(b => b.earned).length;

  // ─── Direction Arrow Renderer ──────────────────────────────────────────────

  const DirectionArrow = ({ direction }: { direction: DirectionWord }) => {
    const rotations: Record<DirectionWord, number> = { up: -90, right: 0, down: 90, left: 180 };
    return (
      <div className="pp-direction-arrow" style={{ transform: `rotate(${rotations[direction]}deg)` }}>
        <svg width="120" height="80" viewBox="0 0 120 80">
          <defs>
            <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B8A" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <path
            d="M10 35 L75 35 L75 15 L110 40 L75 65 L75 45 L10 45 Z"
            fill="url(#arrowGrad)"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  };

  // ─── INTRO SCREEN ──────────────────────────────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="pp-root" ref={containerRef}>
        <style>{styles}</style>
        <canvas ref={canvasRef} className="pp-canvas" />
        <div className="pp-intro">
          <div className="pp-intro-floating-words">
            {['above', 'below', 'left', 'right', 'between', 'next to', 'inside', 'behind'].map((word, i) => (
              <span
                key={word}
                className="pp-floating-word"
                style={{
                  left: `${8 + (i % 4) * 24}%`,
                  top: `${10 + Math.floor(i / 4) * 35}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${3 + (i % 3)}s`,
                }}
              >
                {word}
              </span>
            ))}
          </div>

          <div className="pp-intro-characters">
            {['🐱', '🐕', '🏀', '🦋'].map((emoji, i) => (
              <span
                key={i}
                className="pp-intro-char"
                style={{
                  left: `${15 + i * 22}%`,
                  bottom: `${15 + (i % 2) * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {emoji}
              </span>
            ))}
          </div>

          <div className="pp-intro-card">
            <div className="pp-intro-logo">
              <span className="pp-intro-logo-emoji">🏞️</span>
              <h1>Position Playground</h1>
              <span className="pp-intro-logo-emoji">🗺️</span>
            </div>
            <p className="pp-intro-tagline">Learn where things go!</p>

            <div className="pp-instructions-card">
              <h3>How to Play</h3>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-mini-icon">🐱</span>
                  <span className="pp-mini-arrow">?</span>
                  <span className="pp-mini-label">above the slide</span>
                </div>
                <p><strong>FIND IT</strong> — Where is the character?</p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-mini-icon">🏀</span>
                  <span className="pp-mini-arrow">→</span>
                  <span className="pp-mini-zone">✓</span>
                </div>
                <p><strong>PLACE IT</strong> — Tap the right spot!</p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-mini-icon">➡️</span>
                  <span className="pp-mini-arrow">?</span>
                  <span className="pp-mini-label">right</span>
                </div>
                <p><strong>WHICH WAY?</strong> — Name the direction!</p>
              </div>
            </div>

            <button className="pp-start-btn" onClick={startGame}>
              <span>🎪</span>
              Start Playing!
              <span>🎪</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── LEVEL COMPLETE SCREEN ─────────────────────────────────────────────────

  if (gameScreen === 'levelComplete') {
    return (
      <div className="pp-root" ref={containerRef}>
        <style>{styles}</style>
        <canvas ref={canvasRef} className="pp-canvas" />
        <div className="pp-level-complete">
          <div className="pp-fireworks">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="pp-firework"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${5 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  backgroundColor: FLOWER_COLORS[i % FLOWER_COLORS.length],
                }}
              />
            ))}
          </div>

          <div className="pp-complete-card">
            <h1 className="pp-complete-title">Level {level} Complete!</h1>
            <div className="pp-complete-celebration">
              {['🎉', '⭐', '🏆', '⭐', '🎉'].map((e, i) => (
                <span key={i} className="pp-celebrate-emoji" style={{ animationDelay: `${i * 0.15}s` }}>{e}</span>
              ))}
            </div>

            <div className="pp-score-card">
              <div className="pp-score-item">
                <span className="pp-score-label">Score</span>
                <span className="pp-score-value">{score}</span>
              </div>
              <div className="pp-score-item">
                <span className="pp-score-label">Badges</span>
                <span className="pp-score-value">{earnedBadgeCount}/{badges.length}</span>
              </div>
            </div>

            <div className="pp-badge-board">
              <h3>Position Badges</h3>
              <div className="pp-badges-grid">
                {badges.map((badge) => (
                  <div
                    key={badge.word}
                    className={`pp-badge ${badge.earned ? 'earned' : ''}`}
                  >
                    <span className="pp-badge-emoji">{badge.emoji}</span>
                    <span className="pp-badge-word">{badge.word}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pp-complete-buttons">
              <button className="pp-next-btn" onClick={nextLevel}>
                Level {level + 1} →
              </button>
              <button className="pp-menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── PLAYING SCREEN ────────────────────────────────────────────────────────

  if (!round) return null;

  return (
    <div className="pp-root" ref={containerRef}>
      <style>{styles}</style>
      <canvas ref={canvasRef} className="pp-canvas" />

      <div className="pp-game">
        {/* Header */}
        <div className="pp-header">
          <div className="pp-header-left">
            <button className="pp-back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
              ←
            </button>
            <div className="pp-level-badge">Level {level}</div>
          </div>
          <div className="pp-header-center">
            <div className="pp-progress-bar">
              <div
                className="pp-progress-fill"
                style={{ width: `${(roundsInLevel / totalRoundsInLevel) * 100}%` }}
              />
            </div>
            <span className="pp-progress-text">{roundsInLevel}/{totalRoundsInLevel}</span>
          </div>
          <div className="pp-header-right">
            <div className="pp-score-badge">
              ⭐ {score}
            </div>
            {streak >= 2 && (
              <div className="pp-streak-badge">
                🔥 {streak}
              </div>
            )}
          </div>
        </div>

        {/* Question bar */}
        <div className="pp-question-bar">
          <div className={`pp-question-text ${round.type === 'place' ? 'place' : ''}`}>
            {round.type === 'find' && <span className="pp-q-icon">🔍</span>}
            {round.type === 'place' && <span className="pp-q-icon">📍</span>}
            {round.type === 'direction' && <span className="pp-q-icon">🧭</span>}
            <span>{round.question}</span>
          </div>
          {timeLeft !== null && (
            <div className={`pp-timer ${timeLeft <= 5 ? 'urgent' : ''}`}>
              ⏱️ {timeLeft}
            </div>
          )}
        </div>

        {/* Playground scene */}
        <div className="pp-playground">
          {/* Flowers along bottom */}
          {flowers.map(flower => (
            <div
              key={flower.id}
              className="pp-flower"
              style={{
                left: `${flower.x}%`,
                bottom: '2%',
                fontSize: `${flower.size}px`,
                animationDelay: `${flower.delay}s`,
              }}
            >
              🌸
            </div>
          ))}

          {/* Fence along bottom */}
          <div className="pp-fence">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="pp-fence-post" />
            ))}
          </div>

          {/* Playground objects */}
          {PLAYGROUND_OBJECTS.map(obj => (
            <div
              key={obj.id}
              className={`pp-object pp-anim-${obj.animType}`}
              style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                width: `${obj.width}%`,
                height: `${obj.height}%`,
                animationDuration: obj.animSpeed ? `${obj.animSpeed}s` : undefined,
              }}
            >
              <span className="pp-object-emoji">{obj.emoji}</span>
              <span className="pp-object-label">{obj.name}</span>
            </div>
          ))}

          {/* Character for "find" rounds */}
          {round.type === 'find' && round.character && round.characterPosition && (
            <div
              className={`pp-character ${characterBounce ? 'bounce' : ''}`}
              style={{
                left: `${round.characterPosition.x}%`,
                top: `${round.characterPosition.y}%`,
              }}
            >
              <span className="pp-char-emoji">{round.character.emoji}</span>
              {showSpeechBubble && isCorrect && (
                <div className="pp-speech-bubble">
                  <span className="pp-speech-word">{round.positionWord}</span>
                </div>
              )}
            </div>
          )}

          {/* Character to place for "place" rounds (shown floating above scene) */}
          {round.type === 'place' && round.character && !isCorrect && (
            <div className="pp-place-character">
              <span className="pp-place-char-emoji">{round.character.emoji}</span>
              <span className="pp-place-char-label">Tap where to place me!</span>
            </div>
          )}

          {/* Placed character after correct answer */}
          {round.type === 'place' && round.character && isCorrect && round.zones && (
            <div
              className="pp-character bounce"
              style={{
                left: `${round.zones.find(z => z.id === round.correctZoneId)?.x ?? 50}%`,
                top: `${round.zones.find(z => z.id === round.correctZoneId)?.y ?? 50}%`,
              }}
            >
              <span className="pp-char-emoji">{round.character.emoji}</span>
              <div className="pp-speech-bubble">
                <span className="pp-speech-word">{round.positionWord}</span>
              </div>
            </div>
          )}

          {/* Position zones for "place" rounds */}
          {round.type === 'place' && round.zones && !isCorrect && (
            <>
              {round.zones.map(zone => (
                <button
                  key={zone.id}
                  className={`pp-zone ${hoveredZone === zone.id ? 'hovered' : ''} ${
                    selectedAnswer === zone.id ? (zone.id === round.correctZoneId ? 'correct' : 'wrong') : ''
                  }`}
                  style={{
                    left: `${zone.x}%`,
                    top: `${zone.y}%`,
                    width: `${zone.width}%`,
                    height: `${zone.height}%`,
                  }}
                  onClick={() => handleAnswer(zone.id)}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                >
                  <div className="pp-zone-glow" />
                </button>
              ))}
            </>
          )}

          {/* Highlight correct zone on wrong answer */}
          {round.type === 'place' && isCorrect === false && round.zones && (
            <div
              className="pp-zone-highlight"
              style={{
                left: `${round.zones.find(z => z.id === round.correctZoneId)?.x ?? 0}%`,
                top: `${round.zones.find(z => z.id === round.correctZoneId)?.y ?? 0}%`,
                width: `${round.zones.find(z => z.id === round.correctZoneId)?.width ?? 14}%`,
                height: `${round.zones.find(z => z.id === round.correctZoneId)?.height ?? 12}%`,
              }}
            />
          )}

          {/* Direction arrow for "direction" rounds */}
          {round.type === 'direction' && round.direction && (
            <div className="pp-direction-container">
              <DirectionArrow direction={round.direction} />
            </div>
          )}

          {/* Sparkle effects */}
          {sparkles.map(sp => (
            <div
              key={sp.id}
              className="pp-sparkle"
              style={{
                left: `${sp.x}%`,
                top: `${sp.y}%`,
                fontSize: `${sp.size}px`,
                animationDelay: `${sp.delay}s`,
              }}
            >
              ✨
            </div>
          ))}

          {/* Wrong answer flash */}
          {isCorrect === false && <div className="pp-wrong-flash" />}

          {/* Level celebration overlay */}
          {showCelebration && <div className="pp-celebration-overlay">🎉</div>}
        </div>

        {/* Answer options for find and direction rounds */}
        {(round.type === 'find' || round.type === 'direction') && round.options && (
          <div className="pp-options">
            {round.options.map((option) => {
              let btnClass = 'pp-option';
              if (selectedAnswer === option) {
                btnClass += isCorrect ? ' correct' : ' wrong';
              } else if (isCorrect === false && option === round.correctAnswer) {
                btnClass += ' show-correct';
              }
              return (
                <button
                  key={option}
                  className={btnClass}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom badge preview */}
        <div className="pp-bottom-bar">
          <div className="pp-badge-preview">
            {badges.slice(0, 6).map((badge) => (
              <span
                key={badge.word}
                className={`pp-mini-badge ${badge.earned ? 'earned' : ''}`}
                title={badge.word}
              >
                {badge.emoji}
              </span>
            ))}
            {earnedBadgeCount > 6 && (
              <span className="pp-mini-badge-more">+{earnedBadgeCount - 6}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

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

  .pp-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  /* ─── Intro Screen ───────────────────────────────────────────────────────── */

  .pp-intro {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .pp-intro-floating-words {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }

  .pp-floating-word {
    position: absolute;
    font-size: clamp(0.8rem, 2.5vw, 1.2rem);
    font-weight: 800;
    color: rgba(255,255,255,0.6);
    text-shadow: 0 2px 8px rgba(0,0,0,0.15);
    animation: ppFloatWord 4s ease-in-out infinite;
    padding: 0.3rem 0.8rem;
    background: rgba(255,255,255,0.2);
    border-radius: 20px;
    backdrop-filter: blur(4px);
  }

  @keyframes ppFloatWord {
    0%, 100% { transform: translateY(0) rotate(-2deg); opacity: 0.5; }
    50% { transform: translateY(-15px) rotate(2deg); opacity: 0.8; }
  }

  .pp-intro-characters {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
  }

  .pp-intro-char {
    position: absolute;
    font-size: clamp(2rem, 6vw, 3.5rem);
    animation: ppCharBounce 2s ease-in-out infinite;
  }

  @keyframes ppCharBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.1); }
  }

  .pp-intro-card {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.25);
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
    font-size: clamp(1.6rem, 6vw, 2.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FF6B8A, #A855F7, #38BDF8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pp-intro-logo-emoji {
    font-size: 2rem;
    animation: ppLogoBounce 2s ease-in-out infinite;
  }

  .pp-intro-logo-emoji:last-child { animation-delay: 0.4s; }

  @keyframes ppLogoBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(8deg); }
  }

  .pp-intro-tagline {
    color: rgba(255,255,255,0.8);
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .pp-instructions-card {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 20px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .pp-instructions-card h3 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .pp-instruction {
    margin-bottom: 1rem;
  }

  .pp-instruction:last-child { margin-bottom: 0; }

  .pp-instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.3rem;
  }

  .pp-mini-icon {
    font-size: 1.6rem;
  }

  .pp-mini-arrow {
    color: rgba(255,255,255,0.6);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .pp-mini-label {
    font-size: 0.85rem;
    color: white;
    background: rgba(168,85,247,0.4);
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-weight: 600;
  }

  .pp-mini-zone {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: rgba(74,222,128,0.3);
    border: 2px dashed rgba(74,222,128,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4ade80;
    font-weight: 800;
    font-size: 0.9rem;
  }

  .pp-instruction p {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
  }

  .pp-instruction p strong {
    color: #FFD700;
  }

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

  /* ─── Playing Screen ─────────────────────────────────────────────────────── */

  .pp-game {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
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
    gap: 0.6rem;
    flex: 1;
    max-width: 200px;
    margin: 0 1rem;
  }

  .pp-progress-bar {
    flex: 1;
    height: 8px;
    background: rgba(255,255,255,0.15);
    border-radius: 4px;
    overflow: hidden;
  }

  .pp-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #22c55e);
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .pp-progress-text {
    color: rgba(255,255,255,0.7);
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
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
    animation: ppPulse 0.8s ease-in-out infinite;
  }

  @keyframes ppPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  /* Question Bar */
  .pp-question-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.7rem 1rem;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(8px);
  }

  .pp-question-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: clamp(0.95rem, 3vw, 1.25rem);
    font-weight: 700;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .pp-question-text.place {
    color: #FFD700;
  }

  .pp-q-icon { font-size: 1.3rem; }

  .pp-timer {
    padding: 0.3rem 0.8rem;
    background: rgba(255,255,255,0.15);
    border-radius: 14px;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .pp-timer.urgent {
    background: rgba(239,68,68,0.4);
    color: #fca5a5;
    animation: ppPulse 0.5s ease-in-out infinite;
  }

  /* ─── Playground Scene ───────────────────────────────────────────────────── */

  .pp-playground {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  /* Flowers */
  .pp-flower {
    position: absolute;
    animation: ppFlowerSway 3s ease-in-out infinite;
    z-index: 5;
  }

  @keyframes ppFlowerSway {
    0%, 100% { transform: rotate(-5deg) scale(1); }
    50% { transform: rotate(5deg) scale(1.05); }
  }

  /* Fence */
  .pp-fence {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8%;
    display: flex;
    align-items: flex-end;
    z-index: 4;
  }

  .pp-fence-post {
    flex: 1;
    height: 100%;
    background: linear-gradient(180deg, #D2A679, #B8894E);
    border-left: 1px solid rgba(255,255,255,0.1);
    border-right: 1px solid rgba(0,0,0,0.1);
    border-radius: 2px 2px 0 0;
    position: relative;
  }

  .pp-fence-post::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 8px;
    background: #D2A679;
    border-radius: 3px;
  }

  /* Playground Objects */
  .pp-object {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    pointer-events: none;
  }

  .pp-object-emoji {
    font-size: clamp(2rem, 6vw, 3.5rem);
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  }

  .pp-object-label {
    font-size: clamp(0.55rem, 1.5vw, 0.75rem);
    font-weight: 700;
    color: rgba(255,255,255,0.9);
    background: rgba(0,0,0,0.35);
    padding: 0.15rem 0.5rem;
    border-radius: 10px;
    margin-top: 2px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    white-space: nowrap;
  }

  .pp-anim-sway {
    animation: ppSway 3s ease-in-out infinite;
  }

  @keyframes ppSway {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  .pp-anim-swing {
    animation: ppSwing 2s ease-in-out infinite;
    transform-origin: top center;
  }

  @keyframes ppSwing {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  .pp-anim-bob {
    animation: ppBob 2.5s ease-in-out infinite;
  }

  @keyframes ppBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  /* Character */
  .pp-character {
    position: absolute;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .pp-character.bounce .pp-char-emoji {
    animation: ppCharBounceIn 0.6s ease;
  }

  @keyframes ppCharBounceIn {
    0% { transform: scale(0.5); }
    50% { transform: scale(1.3); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }

  .pp-char-emoji {
    font-size: clamp(2rem, 6vw, 3rem);
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
  }

  /* Speech Bubble */
  .pp-speech-bubble {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 16px;
    padding: 0.4rem 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    animation: ppSpeechPop 0.4s ease;
    white-space: nowrap;
  }

  .pp-speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
  }

  @keyframes ppSpeechPop {
    0% { transform: translateX(-50%) scale(0); opacity: 0; }
    60% { transform: translateX(-50%) scale(1.1); }
    100% { transform: translateX(-50%) scale(1); opacity: 1; }
  }

  .pp-speech-word {
    font-size: 1rem;
    font-weight: 800;
    color: #A855F7;
    text-transform: uppercase;
  }

  /* Place Character (floating) */
  .pp-place-character {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    z-index: 30;
    animation: ppPlaceFloat 2s ease-in-out infinite;
  }

  @keyframes ppPlaceFloat {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-8px); }
  }

  .pp-place-char-emoji {
    font-size: 2.5rem;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
  }

  .pp-place-char-label {
    font-size: 0.7rem;
    color: white;
    background: rgba(0,0,0,0.4);
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-weight: 600;
  }

  /* Position Zones */
  .pp-zone {
    position: absolute;
    border: 3px dashed rgba(255,255,255,0.25);
    border-radius: 16px;
    background: rgba(255,255,255,0.05);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 15;
    padding: 0;
    font-family: inherit;
  }

  .pp-zone:hover, .pp-zone.hovered {
    border-color: rgba(168,85,247,0.6);
    background: rgba(168,85,247,0.15);
    transform: scale(1.05);
  }

  .pp-zone-glow {
    position: absolute;
    inset: -4px;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .pp-zone:hover .pp-zone-glow, .pp-zone.hovered .pp-zone-glow {
    opacity: 1;
    background: radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%);
    animation: ppZonePulse 1.5s ease-in-out infinite;
  }

  @keyframes ppZonePulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 1; }
  }

  .pp-zone.correct {
    border-color: #4ade80;
    background: rgba(74,222,128,0.25);
    animation: ppCorrectFlash 0.5s ease;
  }

  .pp-zone.wrong {
    border-color: #ef4444;
    background: rgba(239,68,68,0.2);
    animation: ppShake 0.5s ease;
  }

  @keyframes ppCorrectFlash {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); background: rgba(74,222,128,0.4); }
    100% { transform: scale(1); }
  }

  @keyframes ppShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  .pp-zone-highlight {
    position: absolute;
    border: 3px solid #4ade80;
    border-radius: 16px;
    background: rgba(74,222,128,0.2);
    pointer-events: none;
    z-index: 16;
    animation: ppHighlightPulse 1s ease-in-out infinite;
  }

  @keyframes ppHighlightPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* Direction Arrow */
  .pp-direction-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
  }

  .pp-direction-arrow {
    animation: ppArrowPulse 1.5s ease-in-out infinite;
  }

  @keyframes ppArrowPulse {
    0%, 100% { transform: var(--base-rotation, rotate(0deg)) scale(1); opacity: 0.9; }
    50% { transform: var(--base-rotation, rotate(0deg)) scale(1.1); opacity: 1; }
  }

  /* Sparkles */
  .pp-sparkle {
    position: absolute;
    pointer-events: none;
    z-index: 100;
    animation: ppSparkle 1s ease forwards;
  }

  @keyframes ppSparkle {
    0% { transform: scale(0) rotate(0deg); opacity: 0; }
    30% { transform: scale(1.3) rotate(90deg); opacity: 1; }
    100% { transform: scale(0) rotate(180deg) translateY(-30px); opacity: 0; }
  }

  /* Wrong answer flash */
  .pp-wrong-flash {
    position: absolute;
    inset: 0;
    background: rgba(239,68,68,0.15);
    pointer-events: none;
    z-index: 90;
    animation: ppWrongFlash 0.4s ease forwards;
  }

  @keyframes ppWrongFlash {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  /* Celebration overlay */
  .pp-celebration-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    background: rgba(0,0,0,0.2);
    z-index: 200;
    animation: ppCelebrate 1.5s ease forwards;
  }

  @keyframes ppCelebrate {
    0% { transform: scale(0); opacity: 0; }
    30% { transform: scale(1.5); opacity: 1; }
    70% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }

  /* ─── Answer Options ─────────────────────────────────────────────────────── */

  .pp-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.8rem 1rem;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(8px);
  }

  .pp-option {
    padding: 0.6rem 1.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: clamp(0.8rem, 2.5vw, 1rem);
    font-weight: 700;
    color: white;
    background: rgba(255,255,255,0.12);
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: capitalize;
  }

  .pp-option:hover:not(:disabled) {
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.4);
    transform: translateY(-2px);
  }

  .pp-option.correct {
    background: rgba(74,222,128,0.3);
    border-color: #4ade80;
    color: #4ade80;
    animation: ppCorrectFlash 0.5s ease;
  }

  .pp-option.wrong {
    background: rgba(239,68,68,0.3);
    border-color: #ef4444;
    color: #fca5a5;
    animation: ppShake 0.5s ease;
  }

  .pp-option.show-correct {
    background: rgba(74,222,128,0.15);
    border-color: rgba(74,222,128,0.5);
    animation: ppHighlightPulse 0.8s ease-in-out infinite;
  }

  .pp-option:disabled {
    cursor: default;
  }

  /* ─── Bottom Badge Bar ───────────────────────────────────────────────────── */

  .pp-bottom-bar {
    padding: 0.5rem 1rem;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
  }

  .pp-badge-preview {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }

  .pp-mini-badge {
    font-size: 1rem;
    opacity: 0.3;
    transition: all 0.3s ease;
    filter: grayscale(1);
  }

  .pp-mini-badge.earned {
    opacity: 1;
    filter: grayscale(0);
    animation: ppBadgeEarn 0.5s ease;
  }

  @keyframes ppBadgeEarn {
    0% { transform: scale(0); }
    60% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .pp-mini-badge-more {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.5);
    font-weight: 600;
  }

  /* ─── Level Complete Screen ──────────────────────────────────────────────── */

  .pp-level-complete {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .pp-fireworks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }

  .pp-firework {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: ppFirework 2s ease infinite;
  }

  @keyframes ppFirework {
    0% { transform: scale(0); opacity: 0; }
    20% { transform: scale(1); opacity: 1; }
    40% { transform: scale(3); opacity: 0.8; }
    60% {
      transform: scale(5);
      opacity: 0.4;
      box-shadow:
        -20px -20px 0 currentColor,
        20px -20px 0 currentColor,
        -20px 20px 0 currentColor,
        20px 20px 0 currentColor,
        0 -28px 0 currentColor,
        0 28px 0 currentColor,
        -28px 0 0 currentColor,
        28px 0 0 currentColor;
    }
    100% { transform: scale(6); opacity: 0; }
  }

  .pp-complete-card {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
    background: rgba(255,255,255,0.12);
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 32px;
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }

  .pp-complete-title {
    font-size: clamp(1.6rem, 5vw, 2.2rem);
    font-weight: 900;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .pp-complete-celebration {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .pp-celebrate-emoji {
    font-size: 2.5rem;
    animation: ppCelebrateEmoji 1s ease-in-out infinite;
  }

  @keyframes ppCelebrateEmoji {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(10deg); }
  }

  .pp-score-card {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .pp-score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pp-score-label {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.6);
    margin-bottom: 0.2rem;
  }

  .pp-score-value {
    font-size: 2rem;
    font-weight: 900;
    color: white;
  }

  /* Badge Board */
  .pp-badge-board {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .pp-badge-board h3 {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }

  .pp-badges-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem;
  }

  .pp-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem 0.5rem;
    border-radius: 12px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    opacity: 0.4;
    transition: all 0.3s ease;
    min-width: 52px;
    filter: grayscale(1);
  }

  .pp-badge.earned {
    opacity: 1;
    filter: grayscale(0);
    background: rgba(168,85,247,0.15);
    border-color: rgba(168,85,247,0.3);
    animation: ppBadgeFlyIn 0.6s ease;
  }

  @keyframes ppBadgeFlyIn {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    60% { transform: scale(1.2) rotate(5deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .pp-badge-emoji { font-size: 1.1rem; }

  .pp-badge-word {
    font-size: 0.55rem;
    font-weight: 700;
    color: rgba(255,255,255,0.7);
    text-transform: capitalize;
    white-space: nowrap;
  }

  .pp-badge.earned .pp-badge-word { color: white; }

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

  /* ─── Responsive ─────────────────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .pp-header-center { max-width: 120px; }
    .pp-options { gap: 0.4rem; padding: 0.6rem; }
    .pp-option { padding: 0.5rem 0.8rem; font-size: 0.8rem; }
    .pp-object-emoji { font-size: 2rem; }
    .pp-char-emoji { font-size: 2rem; }
    .pp-question-text { font-size: 0.9rem; }
    .pp-fence { height: 6%; }
    .pp-intro-card { padding: 1.2rem; margin: 1rem; }
    .pp-complete-card { padding: 1.2rem; margin: 1rem; }
    .pp-badge { min-width: 44px; padding: 0.3rem; }
    .pp-badge-emoji { font-size: 0.9rem; }
    .pp-badge-word { font-size: 0.5rem; }
    .pp-score-value { font-size: 1.5rem; }
    .pp-place-char-emoji { font-size: 2rem; }
  }

  @media (max-width: 400px) {
    .pp-header { padding: 0.4rem 0.6rem; }
    .pp-header-center { display: none; }
    .pp-question-bar { padding: 0.5rem; }
    .pp-bottom-bar { padding: 0.3rem; }
  }
`;
