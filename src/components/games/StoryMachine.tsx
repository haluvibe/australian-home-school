"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type SlotType = 'who' | 'where' | 'what' | 'feeling';
type GameScreen = 'intro' | 'playing' | 'producing' | 'reveal' | 'storybook' | 'complete';

interface StoryBlock {
  id: number;
  type: SlotType;
  text: string;
  emoji: string;
  creativityTag?: string; // 'wild' | 'funny' | 'spooky' etc
  x: number;
  y: number;
  vx: number;
  vy: number;
  conveyorSide: 'left' | 'right';
  hue: number;
}

interface DraggedBlock extends StoryBlock {
  offsetX: number;
  offsetY: number;
}

interface FilledSlot {
  type: SlotType;
  block: StoryBlock;
}

interface SteamParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface SoundEffect {
  id: number;
  text: string;
  x: number;
  y: number;
}

interface Sentence {
  who: StoryBlock;
  where?: StoryBlock;
  what: StoryBlock;
  feeling?: StoryBlock;
  text: string;
  creativityScore: number;
}

interface LevelConfig {
  slots: SlotType[];
  title: string;
  description: string;
  challengeHint?: string;
  requiredSlot?: SlotType;
  requiredTag?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const FRICTION = 0.97;
const BOUNCE = 0.6;
const BLOCK_WIDTH = 180;
const BLOCK_HEIGHT = 52;

let blockIdCounter = 0;
const getNewId = (): number => ++blockIdCounter;

const WHO_OPTIONS: { text: string; emoji: string; tag: string }[] = [
  { text: 'A brave knight', emoji: '🤺', tag: 'adventure' },
  { text: 'A tiny mouse', emoji: '🐭', tag: 'cute' },
  { text: 'A silly monkey', emoji: '🐒', tag: 'funny' },
  { text: 'A friendly dragon', emoji: '🐉', tag: 'wild' },
  { text: 'A clever fox', emoji: '🦊', tag: 'adventure' },
  { text: 'A kind princess', emoji: '👸', tag: 'adventure' },
  { text: 'A grumpy troll', emoji: '👹', tag: 'spooky' },
  { text: 'A lost robot', emoji: '🤖', tag: 'wild' },
  { text: 'A magic cat', emoji: '🐱', tag: 'wild' },
  { text: 'A baby owl', emoji: '🦉', tag: 'cute' },
  { text: 'A singing fish', emoji: '🐟', tag: 'funny' },
  { text: 'A dancing bear', emoji: '🐻', tag: 'funny' },
];

const WHERE_OPTIONS: { text: string; emoji: string; tag: string }[] = [
  { text: 'in a dark forest', emoji: '🌲', tag: 'spooky' },
  { text: 'on a sunny beach', emoji: '🏖️', tag: 'adventure' },
  { text: 'at a noisy school', emoji: '🏫', tag: 'funny' },
  { text: 'in a tall castle', emoji: '🏰', tag: 'adventure' },
  { text: 'under the deep sea', emoji: '🌊', tag: 'wild' },
  { text: 'on a snowy mountain', emoji: '🏔️', tag: 'adventure' },
  { text: 'in a busy market', emoji: '🏪', tag: 'funny' },
  { text: 'on a fluffy cloud', emoji: '☁️', tag: 'wild' },
  { text: 'in a spooky cave', emoji: '🦇', tag: 'spooky' },
  { text: 'at a fun carnival', emoji: '🎪', tag: 'funny' },
  { text: 'in outer space', emoji: '🚀', tag: 'wild' },
  { text: 'in a magic garden', emoji: '🌸', tag: 'cute' },
];

const WHAT_OPTIONS: { text: string; emoji: string; tag: string }[] = [
  { text: 'found a golden key', emoji: '🗝️', tag: 'adventure' },
  { text: 'jumped over a river', emoji: '💨', tag: 'adventure' },
  { text: 'made a new friend', emoji: '🤝', tag: 'cute' },
  { text: 'found a treasure map', emoji: '🗺️', tag: 'adventure' },
  { text: 'baked a huge cake', emoji: '🎂', tag: 'funny' },
  { text: 'built a tall tower', emoji: '🗼', tag: 'wild' },
  { text: 'wrote a secret note', emoji: '📝', tag: 'spooky' },
  { text: 'sang a silly song', emoji: '🎵', tag: 'funny' },
  { text: 'planted magic beans', emoji: '🌱', tag: 'wild' },
  { text: 'caught a falling star', emoji: '⭐', tag: 'wild' },
  { text: 'dug up an old bone', emoji: '🦴', tag: 'funny' },
  { text: 'painted a rainbow', emoji: '🌈', tag: 'cute' },
];

const FEELING_OPTIONS: { text: string; emoji: string; tag: string }[] = [
  { text: 'and felt very happy', emoji: '😊', tag: 'cute' },
  { text: 'and was so excited', emoji: '🤩', tag: 'adventure' },
  { text: 'but was a little scared', emoji: '😨', tag: 'spooky' },
  { text: 'and laughed out loud', emoji: '😂', tag: 'funny' },
  { text: 'and felt really proud', emoji: '😤', tag: 'adventure' },
  { text: 'but felt a bit sad', emoji: '😢', tag: 'spooky' },
  { text: 'and danced with joy', emoji: '💃', tag: 'funny' },
  { text: 'and felt very brave', emoji: '💪', tag: 'adventure' },
  { text: 'and was really amazed', emoji: '🤯', tag: 'wild' },
  { text: 'and grinned from ear to ear', emoji: '😁', tag: 'cute' },
  { text: 'but felt quite confused', emoji: '🤔', tag: 'funny' },
  { text: 'and felt so grateful', emoji: '🥰', tag: 'cute' },
];

const SLOT_CONFIG: Record<SlotType, { label: string; color: string; hueBase: number }> = {
  who:     { label: 'WHO',     color: '#f472b6', hueBase: 330 },
  where:   { label: 'WHERE',   color: '#60a5fa', hueBase: 210 },
  what:    { label: 'WHAT',    color: '#4ade80', hueBase: 140 },
  feeling: { label: 'FEELING', color: '#fbbf24', hueBase: 40 },
};

const OPTIONS_MAP: Record<SlotType, { text: string; emoji: string; tag: string }[]> = {
  who: WHO_OPTIONS,
  where: WHERE_OPTIONS,
  what: WHAT_OPTIONS,
  feeling: FEELING_OPTIONS,
};

const LEVELS: LevelConfig[] = [
  { slots: ['who', 'what'], title: 'Simple Sentence', description: 'Build a sentence with WHO and WHAT' },
  { slots: ['who', 'what'], title: 'Another Try', description: 'Try a different combination!' },
  { slots: ['who', 'where', 'what'], title: 'Add a Place', description: 'Now add WHERE it happens!' },
  { slots: ['who', 'where', 'what'], title: 'Explorer', description: 'Build an adventure sentence!' },
  { slots: ['who', 'where', 'what', 'feeling'], title: 'Full Story', description: 'Add a FEELING to complete the picture', challengeHint: 'Try making it FUNNY!', requiredTag: 'funny' },
  { slots: ['who', 'where', 'what', 'feeling'], title: 'Creative Mix', description: 'Mix different themes for bonus points!', challengeHint: 'Use WILD combinations!' },
  { slots: ['who', 'where', 'what', 'feeling'], title: 'Master Storyteller', description: 'Create the most creative sentence you can!' },
  { slots: ['who', 'where', 'what', 'feeling'], title: 'Grand Finale', description: 'Your final masterpiece! Make it count!' },
];

// ─── Creativity Scoring ──────────────────────────────────────────────────────

function computeCreativity(filled: FilledSlot[]): number {
  const tags = filled.map(f => f.block.creativityTag).filter(Boolean) as string[];
  const uniqueTags = new Set(tags);
  let score = 0;

  // Variety bonus: more unique tags = more creative
  score += uniqueTags.size * 15;

  // Contrast bonus: spooky + cute, funny + adventure, etc
  const contrasts: [string, string][] = [
    ['spooky', 'cute'], ['funny', 'adventure'], ['wild', 'cute'], ['spooky', 'funny'],
  ];
  for (const [a, b] of contrasts) {
    if (uniqueTags.has(a) && uniqueTags.has(b)) score += 25;
  }

  // Wild element bonus
  if (uniqueTags.has('wild')) score += 10;

  // Base points for completing
  score += filled.length * 10;

  return Math.min(score, 100);
}

function getCreativityLabel(score: number): string {
  if (score >= 80) return 'SUPER CREATIVE!';
  if (score >= 60) return 'Very Creative!';
  if (score >= 40) return 'Creative!';
  if (score >= 20) return 'Good Start!';
  return 'Nice Try!';
}

function getCreativityStars(score: number): number {
  if (score >= 80) return 5;
  if (score >= 60) return 4;
  if (score >= 40) return 3;
  if (score >= 20) return 2;
  return 1;
}

// ─── Scene illustration helpers ──────────────────────────────────────────────

function getSceneBg(where?: StoryBlock): string {
  if (!where) return 'linear-gradient(180deg, #87CEEB 0%, #98FB98 100%)';
  const t = where.creativityTag;
  if (t === 'spooky') return 'linear-gradient(180deg, #2d1b4e 0%, #1a1a2e 50%, #0f3d0f 100%)';
  if (t === 'wild') return 'linear-gradient(180deg, #0c1445 0%, #1a0a3e 50%, #2d0b4e 100%)';
  if (t === 'adventure') return 'linear-gradient(180deg, #87CEEB 0%, #f0c27f 50%, #4b830d 100%)';
  if (t === 'funny') return 'linear-gradient(180deg, #ff9a9e 0%, #fecfef 50%, #ffecd2 100%)';
  if (t === 'cute') return 'linear-gradient(180deg, #a8edea 0%, #fed6e3 50%, #d299c2 100%)';
  return 'linear-gradient(180deg, #87CEEB 0%, #98FB98 100%)';
}

// ─── Component ───────────────────────────────────────────────────────────────

interface StoryMachineProps {
  onExit?: () => void;
}

export default function StoryMachine({ onExit }: StoryMachineProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [blocks, setBlocks] = useState<StoryBlock[]>([]);
  const [filledSlots, setFilledSlots] = useState<FilledSlot[]>([]);
  const [draggedBlock, setDraggedBlock] = useState<DraggedBlock | null>(null);
  const [steamParticles, setSteamParticles] = useState<SteamParticle[]>([]);
  const [soundEffects, setSoundEffects] = useState<SoundEffect[]>([]);
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null);
  const [productionPhase, setProductionPhase] = useState<number>(0);
  const [gearSpeed, setGearSpeed] = useState<number>(1);
  const [highlightedSlot, setHighlightedSlot] = useState<SlotType | null>(null);
  const [tutorial, setTutorial] = useState<{ step: number; show: boolean }>({ step: 0, show: true });
  const [revealProgress, setRevealProgress] = useState<number>(0);
  const [indicatorLights, setIndicatorLights] = useState<boolean[]>([false, false, false, false, false]);
  const [storybookPage, setStorybookPage] = useState<number>(0);
  const [showIllustration, setShowIllustration] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const steamIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slotRefsMap = useRef<Record<SlotType, HTMLDivElement | null>>({ who: null, where: null, what: null, feeling: null });

  const levelConfig = LEVELS[Math.min(level - 1, LEVELS.length - 1)];
  const activeSlots = levelConfig.slots;

  // ─── Container size helper ──────────────────────────────────────────────────

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 800, height: 600 };
  }, []);

  // ─── Slot position helpers ──────────────────────────────────────────────────

  const getSlotPosition = useCallback((slotType: SlotType): { x: number; y: number } => {
    const el = slotRefsMap.current[slotType];
    if (el && containerRef.current) {
      const cr = containerRef.current.getBoundingClientRect();
      const sr = el.getBoundingClientRect();
      return { x: sr.left + sr.width / 2 - cr.left, y: sr.top + sr.height / 2 - cr.top };
    }
    return { x: 400, y: 300 };
  }, []);

  // ─── Block creation ─────────────────────────────────────────────────────────

  const createBlock = useCallback((type: SlotType, side: 'left' | 'right', yPos?: number): StoryBlock => {
    const options = OPTIONS_MAP[type];
    const opt = options[Math.floor(Math.random() * options.length)];
    const size = getContainerSize();
    const x = side === 'left' ? -BLOCK_WIDTH / 2 : size.width + BLOCK_WIDTH / 2;
    const y = yPos ?? 120 + Math.random() * (size.height - 320);
    return {
      id: getNewId(),
      type,
      text: opt.text,
      emoji: opt.emoji,
      creativityTag: opt.tag,
      x,
      y,
      vx: side === 'left' ? 1.5 + Math.random() * 1.5 : -(1.5 + Math.random() * 1.5),
      vy: (Math.random() - 0.5) * 0.8,
      conveyorSide: side,
      hue: SLOT_CONFIG[type].hueBase,
    };
  }, [getContainerSize]);

  // ─── Spawn initial blocks for a level ────────────────────────────────────────

  const spawnBlocks = useCallback((slots: SlotType[]) => {
    const newBlocks: StoryBlock[] = [];
    const size = getContainerSize();
    // For each active slot, spawn 2–3 blocks
    slots.forEach((slotType, slotIdx) => {
      const count = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        const side = (slotIdx + i) % 2 === 0 ? 'left' : 'right';
        const ySpread = size.height - 300;
        const yPos = 130 + (i * ySpread / count) + Math.random() * 40;
        newBlocks.push(createBlock(slotType, side, yPos));
      }
    });
    return newBlocks;
  }, [createBlock, getContainerSize]);

  // ─── Level initialization ──────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    const config = LEVELS[Math.min(lvl - 1, LEVELS.length - 1)];
    setFilledSlots([]);
    setDraggedBlock(null);
    setHighlightedSlot(null);
    setSoundEffects([]);
    setSteamParticles([]);
    setGearSpeed(1);
    setProductionPhase(0);
    setCurrentSentence(null);
    setRevealProgress(0);
    setShowIllustration(false);
    setIndicatorLights([false, false, false, false, false]);
    setBlocks(spawnBlocks(config.slots));
  }, [spawnBlocks]);

  // ─── Start / restart ────────────────────────────────────────────────────────

  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setSentences([]);
    setTutorial({ step: 0, show: true });
    initLevel(1);
  };

  const nextLevel = () => {
    if (level >= 8) {
      setGameState('storybook');
      setStorybookPage(0);
      return;
    }
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // ─── Sound effect popup ────────────────────────────────────────────────────

  const addSoundEffect = useCallback((text: string, x: number, y: number) => {
    const id = Date.now() + Math.random();
    setSoundEffects(prev => [...prev, { id, text, x, y }]);
    setTimeout(() => setSoundEffects(prev => prev.filter(s => s.id !== id)), 900);
  }, []);

  // ─── Steam particle system ─────────────────────────────────────────────────

  const addSteamBurst = useCallback((cx: number, cy: number, count: number) => {
    const newParticles: SteamParticle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 1 + Math.random() * 2;
      newParticles.push({
        id: Date.now() + i + Math.random(),
        x: cx + (Math.random() - 0.5) * 20,
        y: cy + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: -Math.abs(Math.sin(angle)) * speed - 0.5,
        life: 60 + Math.floor(Math.random() * 40),
        maxLife: 100,
        size: 8 + Math.random() * 16,
      });
    }
    setSteamParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ─── Slot fill handler ─────────────────────────────────────────────────────

  const fillSlot = useCallback((block: StoryBlock) => {
    setFilledSlots(prev => {
      // Don't double-fill the same slot type
      if (prev.some(f => f.type === block.type)) return prev;
      const next = [...prev, { type: block.type, block }];

      // Machine feedback
      setGearSpeed(s => Math.min(s + 0.5, 4));
      const slotPos = getSlotPosition(block.type);
      addSteamBurst(slotPos.x, slotPos.y - 30, 6);

      const sfxTexts = ['CLANK!', 'WHIRR!', 'DING!', 'CLUNK!', 'WHOOSH!'];
      addSoundEffect(sfxTexts[Math.floor(Math.random() * sfxTexts.length)], slotPos.x + (Math.random() - 0.5) * 80, slotPos.y - 50 - Math.random() * 40);

      // Light up indicator
      setIndicatorLights(lights => {
        const newLights = [...lights];
        newLights[next.length - 1] = true;
        return newLights;
      });

      return next;
    });

    // Remove block from floating pool
    setBlocks(prev => prev.filter(b => b.id !== block.id));

    if (tutorial.show && tutorial.step === 0) {
      setTutorial({ step: 1, show: true });
    }
  }, [addSoundEffect, addSteamBurst, getSlotPosition, tutorial]);

  // ─── Check if all slots filled → trigger production ────────────────────────

  useEffect(() => {
    if (gameState !== 'playing') return;
    if (filledSlots.length === activeSlots.length && activeSlots.length > 0) {
      // All slots filled! Start production
      setTimeout(() => {
        setGameState('producing');
        setProductionPhase(1);
        setGearSpeed(5);
        setTutorial({ step: 2, show: false });
      }, 600);
    }
  }, [filledSlots, activeSlots, gameState]);

  // ─── Production animation sequence ────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'producing') return;

    const size = getContainerSize();
    const cx = size.width / 2;
    const cy = size.height / 2;

    if (productionPhase === 1) {
      // Phase 1: gears crank, lights sequence
      const lightInterval = setInterval(() => {
        setIndicatorLights(prev => {
          const next = [...prev];
          const off = next.indexOf(false);
          if (off >= 0) next[off] = true;
          return next;
        });
      }, 200);

      addSteamBurst(cx - 80, cy - 60, 8);
      addSoundEffect('WHIRR!', cx - 60, cy - 100);

      setTimeout(() => {
        clearInterval(lightInterval);
        setProductionPhase(2);
      }, 1200);

      return () => clearInterval(lightInterval);
    }

    if (productionPhase === 2) {
      // Phase 2: pipes shake, more steam
      addSteamBurst(cx + 80, cy - 40, 10);
      addSteamBurst(cx - 60, cy + 20, 6);
      addSoundEffect('CLANK!', cx + 40, cy - 80);

      setTimeout(() => setProductionPhase(3), 1000);
    }

    if (productionPhase === 3) {
      // Phase 3: big burst, build sentence
      addSteamBurst(cx, cy - 80, 15);
      addSoundEffect('DING DING!', cx, cy - 120);
      setGearSpeed(8);

      setTimeout(() => {
        // Build the sentence
        const whoSlot = filledSlots.find(f => f.type === 'who');
        const whereSlot = filledSlots.find(f => f.type === 'where');
        const whatSlot = filledSlots.find(f => f.type === 'what');
        const feelingSlot = filledSlots.find(f => f.type === 'feeling');

        if (!whoSlot || !whatSlot) return;

        let text = whoSlot.block.text;
        if (whereSlot) text += ' ' + whereSlot.block.text;
        text += ' ' + whatSlot.block.text;
        if (feelingSlot) text += ' ' + feelingSlot.block.text;
        text += '.';

        // Capitalize first letter
        text = text.charAt(0).toUpperCase() + text.slice(1);

        const creativity = computeCreativity(filledSlots);
        const sentence: Sentence = {
          who: whoSlot.block,
          where: whereSlot?.block,
          what: whatSlot.block,
          feeling: feelingSlot?.block,
          text,
          creativityScore: creativity,
        };

        setCurrentSentence(sentence);
        setScore(prev => prev + creativity + filledSlots.length * 10);
        setSentences(prev => [...prev, sentence]);
        setGameState('reveal');
        setRevealProgress(0);
        setGearSpeed(1);
      }, 1200);
    }
  }, [productionPhase, gameState, filledSlots, addSteamBurst, addSoundEffect, getContainerSize]);

  // ─── Reveal animation ─────────────────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'reveal') return;
    const interval = setInterval(() => {
      setRevealProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowIllustration(true), 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [gameState]);

  // ─── Physics loop (floating blocks) ────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 2);
      lastTimeRef.current = timestamp;
      const size = getContainerSize();

      setBlocks(prev => prev.map(block => {
        if (draggedBlock?.id === block.id) return block;
        let { x, y, vx, vy } = block;
        x += vx * delta;
        y += vy * delta;
        vx *= FRICTION;
        vy *= FRICTION;

        // Boundaries
        const halfW = BLOCK_WIDTH / 2;
        const halfH = BLOCK_HEIGHT / 2;
        const minX = halfW;
        const maxX = size.width - halfW;
        const minY = halfH + 60;
        const maxY = size.height - halfH - 80;

        if (x < minX) { x = minX; vx = Math.abs(vx) * BOUNCE; }
        if (x > maxX) { x = maxX; vx = -Math.abs(vx) * BOUNCE; }
        if (y < minY) { y = minY; vy = Math.abs(vy) * BOUNCE; }
        if (y > maxY) { y = maxY; vy = -Math.abs(vy) * BOUNCE; }

        // Gentle random drift
        vx += (Math.random() - 0.5) * 0.06;
        vy += (Math.random() - 0.5) * 0.06;

        return { ...block, x, y, vx, vy };
      }));

      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameState, draggedBlock, getContainerSize]);

  // ─── Steam particle update ─────────────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'playing' && gameState !== 'producing') {
      if (steamIntervalRef.current) clearInterval(steamIntervalRef.current);
      return;
    }

    steamIntervalRef.current = setInterval(() => {
      setSteamParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy - 0.02,
          life: p.life - 1,
          size: p.size * 1.01,
        })).filter(p => p.life > 0)
      );
    }, 30);

    return () => { if (steamIntervalRef.current) clearInterval(steamIntervalRef.current); };
  }, [gameState]);

  // ─── Block spawning (periodic) ─────────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'playing') return;
    const interval = setInterval(() => {
      setBlocks(prev => {
        if (prev.length >= 12) return prev;
        // Pick a slot type that is not yet filled
        const unfilled = activeSlots.filter(s => !filledSlots.some(f => f.type === s));
        if (unfilled.length === 0) return prev;
        const type = unfilled[Math.floor(Math.random() * unfilled.length)];
        const side = Math.random() > 0.5 ? 'left' : 'right';
        return [...prev, createBlock(type, side as 'left' | 'right')];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [gameState, activeSlots, filledSlots, createBlock]);

  // ─── Drag handlers ─────────────────────────────────────────────────────────

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    block: StoryBlock
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDraggedBlock({
      ...block,
      offsetX: clientX - rect.left - block.x,
      offsetY: clientY - rect.top - block.y,
    });
    setHighlightedSlot(block.type);
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!draggedBlock || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(BLOCK_WIDTH / 2, Math.min(rect.width - BLOCK_WIDTH / 2, clientX - rect.left - draggedBlock.offsetX));
    const newY = Math.max(40, Math.min(rect.height - 60, clientY - rect.top - draggedBlock.offsetY));

    setBlocks(prev => prev.map(b =>
      b.id === draggedBlock.id ? { ...b, x: newX, y: newY, vx: 0, vy: 0 } : b
    ));

    // Check proximity to matching slot
    if (!filledSlots.some(f => f.type === draggedBlock.type)) {
      const slotPos = getSlotPosition(draggedBlock.type);
      const dx = newX - slotPos.x;
      const dy = newY - slotPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        setHighlightedSlot(draggedBlock.type);
      } else {
        setHighlightedSlot(draggedBlock.type);
      }
    }
  }, [draggedBlock, filledSlots, getSlotPosition]);

  const handleDragEnd = useCallback(() => {
    if (!draggedBlock) return;
    const block = blocks.find(b => b.id === draggedBlock.id);
    if (!block) { setDraggedBlock(null); setHighlightedSlot(null); return; }

    // Check if near the correct slot
    if (!filledSlots.some(f => f.type === block.type)) {
      const slotPos = getSlotPosition(block.type);
      const dx = block.x - slotPos.x;
      const dy = block.y - slotPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        fillSlot(block);
        setDraggedBlock(null);
        setHighlightedSlot(null);
        return;
      }
    }

    // Release with random velocity
    setBlocks(prev => prev.map(b =>
      b.id === block.id ? { ...b, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3 } : b
    ));
    setDraggedBlock(null);
    setHighlightedSlot(null);
  }, [draggedBlock, blocks, filledSlots, fillSlot, getSlotPosition]);

  // ─── Drag event listeners ──────────────────────────────────────────────────

  useEffect(() => {
    if (!draggedBlock) return;
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
  }, [draggedBlock, handleDragMove, handleDragEnd]);

  // ─── Ambient steam (for machine) ──────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'playing' && gameState !== 'producing') return;
    const size = getContainerSize();
    const interval = setInterval(() => {
      if (Math.random() < 0.4 * gearSpeed) {
        const cx = size.width / 2 + (Math.random() - 0.5) * 120;
        const cy = size.height * 0.35 + (Math.random() - 0.5) * 40;
        addSteamBurst(cx, cy, 2);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [gameState, gearSpeed, addSteamBurst, getContainerSize]);

  // ─── Render: Intro Screen ──────────────────────────────────────────────────

  if (gameState === 'intro') {
    return (
      <div className="story-machine">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gear" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                width: 40 + Math.random() * 60,
                height: 40 + Math.random() * 60,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }} />
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={`s${i}`} className="bg-steam" style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 40}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-gear">&#9881;</span>
              <h1>Story Machine</h1>
              <span className="logo-gear reverse">&#9881;</span>
            </div>
            <p className="tagline">The Creative Writing Factory!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-block who">A brave knight 🤺</span>
                  <span className="arrow">&#8594;</span>
                  <span className="mini-funnel">WHO</span>
                </div>
                <p><strong>DRAG</strong> story blocks into the machine&#39;s <span className="highlight-who">funnels</span></p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-funnel">WHO</span>
                  <span className="plus">+</span>
                  <span className="mini-funnel">WHAT</span>
                  <span className="arrow">&#8594;</span>
                  <span className="mini-scroll">&#128220;</span>
                </div>
                <p>Fill all slots and the machine <span className="highlight-action">builds a sentence!</span></p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="star-icon">&#11088;</span>
                  <span className="star-icon">&#11088;</span>
                  <span className="star-icon">&#11088;</span>
                </div>
                <p>Mix <span className="highlight-creative">creative</span> combos for bonus points!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-gear">&#9881;</span>
              Start the Machine
              <span className="btn-gear reverse">&#9881;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Storybook ────────────────────────────────────────────────────

  if (gameState === 'storybook') {
    const displaySentences = sentences.length > 0 ? sentences : [];
    const totalPages = displaySentences.length;
    const currentPageSentence = displaySentences[storybookPage];

    return (
      <div className="story-machine">
        <style>{styles}</style>
        <div className="storybook-screen">
          <div className="storybook-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="bg-sparkle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }} />
            ))}
          </div>
          <div className="storybook-content">
            <h1 className="storybook-title">&#128214; Your Storybook &#128214;</h1>
            {currentPageSentence ? (
              <div className="storybook-page">
                <div className="page-number">Page {storybookPage + 1} of {totalPages}</div>
                <div className="page-illustration" style={{ background: getSceneBg(currentPageSentence.where) }}>
                  <div className="page-scene-emojis">
                    <span className="scene-character">{currentPageSentence.who.emoji}</span>
                    {currentPageSentence.where && <span className="scene-setting">{currentPageSentence.where.emoji}</span>}
                    <span className="scene-action">{currentPageSentence.what.emoji}</span>
                    {currentPageSentence.feeling && <span className="scene-feeling">{currentPageSentence.feeling.emoji}</span>}
                  </div>
                </div>
                <div className="page-text">{currentPageSentence.text}</div>
                <div className="page-stars">
                  {[...Array(getCreativityStars(currentPageSentence.creativityScore))].map((_, i) => (
                    <span key={i} className="page-star">&#11088;</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="storybook-empty">
                <p>No stories yet! Go write some!</p>
              </div>
            )}
            <div className="storybook-nav">
              <button
                className="page-btn"
                onClick={() => setStorybookPage(p => Math.max(0, p - 1))}
                disabled={storybookPage === 0}
              >&#8592; Previous</button>
              <button
                className="page-btn"
                onClick={() => setStorybookPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={storybookPage >= totalPages - 1}
              >Next &#8594;</button>
            </div>
            <div className="storybook-score">
              <div className="score-final-item">
                <span className="score-final-label">Total Score</span>
                <span className="score-final-value">{score}</span>
              </div>
              <div className="score-final-item">
                <span className="score-final-label">Stories Written</span>
                <span className="score-final-value">{sentences.length}</span>
              </div>
            </div>
            <div className="storybook-buttons">
              <button className="start-btn" onClick={startGame}>
                Play Again
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

  // ─── Render: Reveal Screen ─────────────────────────────────────────────────

  if (gameState === 'reveal' && currentSentence) {
    const stars = getCreativityStars(currentSentence.creativityScore);
    const label = getCreativityLabel(currentSentence.creativityScore);
    const visibleChars = Math.floor((revealProgress / 100) * currentSentence.text.length);
    const revealedText = currentSentence.text.slice(0, visibleChars);

    return (
      <div className="story-machine">
        <style>{styles}</style>
        <div className="reveal-screen">
          <div className="reveal-bg">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bg-confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                backgroundColor: ['#f472b6', '#60a5fa', '#4ade80', '#fbbf24', '#c084fc'][i % 5],
              }} />
            ))}
          </div>
          <div className="reveal-content">
            <div className="scroll-container">
              <div className="scroll-top" />
              <div className="scroll-body" style={{ minHeight: showIllustration ? 320 : 160 }}>
                <div className="scroll-text">{revealedText}<span className="cursor-blink">|</span></div>
                {showIllustration && (
                  <div className="illustration-container" style={{ background: getSceneBg(currentSentence.where) }}>
                    <div className="illustration-emojis">
                      <span className="illust-char anim-bounce">{currentSentence.who.emoji}</span>
                      {currentSentence.where && <span className="illust-setting anim-float">{currentSentence.where.emoji}</span>}
                      <span className="illust-action anim-spin">{currentSentence.what.emoji}</span>
                      {currentSentence.feeling && <span className="illust-feeling anim-pulse">{currentSentence.feeling.emoji}</span>}
                    </div>
                  </div>
                )}
              </div>
              <div className="scroll-bottom" />
            </div>

            {revealProgress >= 100 && (
              <div className="creativity-rating">
                <div className="creativity-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`creativity-star ${i < stars ? 'filled' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>&#11088;</span>
                  ))}
                </div>
                <div className="creativity-label">{label}</div>
                <div className="creativity-score">+{currentSentence.creativityScore + filledSlots.length * 10} points</div>
              </div>
            )}

            {revealProgress >= 100 && showIllustration && (
              <div className="reveal-buttons">
                <button className="next-btn" onClick={nextLevel}>
                  {level >= 8 ? 'View Storybook &#128214;' : `Level ${level + 1} &#8594;`}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Complete Screen (fallback) ────────────────────────────────────

  if (gameState === 'complete') {
    return (
      <div className="story-machine">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-content">
            <h1 className="complete-title">&#127881; All Done! &#127881;</h1>
            <p className="complete-score">Score: {score}</p>
            <div className="complete-buttons">
              <button className="start-btn" onClick={startGame}>Play Again</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Playing / Producing ──────────────────────────────────────────

  return (
    <div className="story-machine">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>&#8592;</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="level-info">
              <span className="level-title">{levelConfig.title}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">&#11088;</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Machine body */}
        <div className="machine-area">
          {/* Conveyor belts (left) */}
          <div className="conveyor conveyor-left">
            <div className="conveyor-belt" style={{ animationDuration: `${3 / gearSpeed}s` }}>
              <div className="chevron-pattern" />
            </div>
            <div className="conveyor-label">STORY BLOCKS</div>
          </div>

          {/* Central machine */}
          <div className={`machine-body ${gameState === 'producing' ? 'producing' : ''}`}>
            {/* Top pipe assembly */}
            <div className="pipe-top">
              <div className="pipe-flange" />
              <div className="pipe-vertical">
                <div className="pipe-rivet" />
                <div className="pipe-rivet" style={{ top: '60%' }} />
              </div>
              <div className="pipe-flange" />
            </div>

            {/* Gears */}
            <div className="gear gear-1" style={{ animationDuration: `${3 / gearSpeed}s` }}>
              <div className="gear-tooth" />
              <div className="gear-tooth" style={{ transform: 'rotate(45deg)' }} />
              <div className="gear-tooth" style={{ transform: 'rotate(90deg)' }} />
              <div className="gear-tooth" style={{ transform: 'rotate(135deg)' }} />
              <div className="gear-center" />
            </div>
            <div className="gear gear-2" style={{ animationDuration: `${3 / gearSpeed}s` }}>
              <div className="gear-tooth" />
              <div className="gear-tooth" style={{ transform: 'rotate(60deg)' }} />
              <div className="gear-tooth" style={{ transform: 'rotate(120deg)' }} />
              <div className="gear-center" />
            </div>
            <div className="gear gear-3" style={{ animationDuration: `${4 / gearSpeed}s` }}>
              <div className="gear-tooth" />
              <div className="gear-tooth" style={{ transform: 'rotate(45deg)' }} />
              <div className="gear-tooth" style={{ transform: 'rotate(90deg)' }} />
              <div className="gear-tooth" style={{ transform: 'rotate(135deg)' }} />
              <div className="gear-center" />
            </div>

            {/* Glass viewing window */}
            <div className="glass-window">
              <div className="glass-shine" />
              <div className="glass-content">
                {filledSlots.length > 0 ? (
                  <div className="window-blocks">
                    {filledSlots.map(f => (
                      <span key={f.type} className="window-block-emoji">{f.block.emoji}</span>
                    ))}
                  </div>
                ) : (
                  <span className="window-empty">&#9881;</span>
                )}
              </div>
            </div>

            {/* Indicator lights */}
            <div className="indicator-row">
              {indicatorLights.map((on, i) => (
                <div key={i} className={`indicator-light ${on ? 'on' : ''}`}>
                  <div className="light-glow" />
                </div>
              ))}
            </div>

            {/* Input funnels / slots */}
            <div className="slots-row">
              {activeSlots.map(slotType => {
                const config = SLOT_CONFIG[slotType];
                const filled = filledSlots.find(f => f.type === slotType);
                const isHighlighted = highlightedSlot === slotType && !filled;
                return (
                  <div
                    key={slotType}
                    ref={el => { slotRefsMap.current[slotType] = el; }}
                    className={`slot-funnel ${filled ? 'filled' : ''} ${isHighlighted ? 'highlighted' : ''}`}
                    style={{ '--slot-color': config.color } as React.CSSProperties}
                  >
                    <div className="funnel-top">
                      <div className="funnel-opening" />
                    </div>
                    <div className="funnel-label">{config.label}</div>
                    {filled ? (
                      <div className="funnel-content">
                        <span className="funnel-emoji">{filled.block.emoji}</span>
                        <span className="funnel-text">{filled.block.text}</span>
                      </div>
                    ) : (
                      <div className="funnel-hint">Drag here!</div>
                    )}
                    {isHighlighted && <div className="funnel-glow" />}
                  </div>
                );
              })}
            </div>

            {/* Bottom pipe / output chute */}
            <div className="pipe-bottom">
              <div className="pipe-horizontal">
                <div className="pipe-rivet" style={{ left: '20%' }} />
                <div className="pipe-rivet" style={{ left: '50%' }} />
                <div className="pipe-rivet" style={{ left: '80%' }} />
              </div>
              <div className="output-chute">
                <div className="chute-arrow">&#9660;</div>
              </div>
            </div>
          </div>

          {/* Conveyor belts (right) */}
          <div className="conveyor conveyor-right">
            <div className="conveyor-belt reverse" style={{ animationDuration: `${3 / gearSpeed}s` }}>
              <div className="chevron-pattern" />
            </div>
            <div className="conveyor-label">STORY BLOCKS</div>
          </div>
        </div>

        {/* Floating story blocks */}
        {blocks.map(block => {
          const isDragging = draggedBlock?.id === block.id;
          const config = SLOT_CONFIG[block.type];
          const isFilled = filledSlots.some(f => f.type === block.type);
          if (isFilled) return null;
          return (
            <div
              key={block.id}
              className={`story-block ${isDragging ? 'dragging' : ''}`}
              style={{
                left: block.x,
                top: block.y,
                '--block-hue': block.hue,
                '--block-color': config.color,
                borderColor: config.color,
              } as React.CSSProperties}
              onMouseDown={(e) => handleDragStart(e, block)}
              onTouchStart={(e) => handleDragStart(e, block)}
            >
              <div className="block-shine" />
              <span className="block-emoji">{block.emoji}</span>
              <span className="block-text">{block.text}</span>
              <div className="block-type-badge" style={{ backgroundColor: config.color }}>{config.label}</div>
            </div>
          );
        })}

        {/* Steam particles */}
        {steamParticles.map(p => (
          <div
            key={p.id}
            className="steam-particle"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: (p.life / p.maxLife) * 0.6,
            }}
          />
        ))}

        {/* Sound effect popups */}
        {soundEffects.map(sfx => (
          <div key={sfx.id} className="sound-effect" style={{ left: sfx.x, top: sfx.y }}>
            {sfx.text}
          </div>
        ))}

        {/* Challenge hint */}
        {levelConfig.challengeHint && filledSlots.length === 0 && (
          <div className="challenge-hint">
            <span className="challenge-icon">&#127919;</span>
            <span>{levelConfig.challengeHint}</span>
          </div>
        )}

        {/* Tutorial overlay */}
        {tutorial.show && gameState === 'playing' && (
          <div className="tutorial-overlay">
            {tutorial.step === 0 && (
              <div className="tutorial-tip" style={{ bottom: '25%', left: '50%' }}>
                <span className="tutorial-icon">&#128070;</span>
                <p>Drag a story block into its matching funnel!</p>
              </div>
            )}
            {tutorial.step === 1 && (
              <div className="tutorial-tip" style={{ bottom: '25%', left: '50%' }}>
                <span className="tutorial-icon">&#9881;</span>
                <p>Fill all the funnels to make a sentence!</p>
              </div>
            )}
          </div>
        )}

        {/* Producing overlay */}
        {gameState === 'producing' && (
          <div className="producing-overlay">
            <div className="producing-text">
              {productionPhase === 1 && 'Cranking the gears...'}
              {productionPhase === 2 && 'Mixing the words...'}
              {productionPhase === 3 && 'Building your sentence!'}
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">&#128070; Drag blocks to funnels</span>
            <span className="hint-match">Match colors to slot types</span>
            {sentences.length > 0 && <span className="hint-stories">&#128214; {sentences.length} stories written</span>}
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

  .story-machine {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #1a0f07 0%, #2d1810 30%, #1a0f07 100%);
    color: white;
  }

  /* ── Intro Screen ───────────────────────────────────────────────────── */

  .intro-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .bg-gear {
    position: absolute; border-radius: 50%;
    border: 4px solid rgba(205, 155, 80, 0.15);
    animation: gearSpin 8s linear infinite;
  }

  .bg-gear::before {
    content: ''; position: absolute; inset: 20%; border-radius: 50%;
    border: 3px dashed rgba(205, 155, 80, 0.1);
  }

  .bg-steam {
    position: absolute; width: 30px; height: 30px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.08), transparent);
    animation: steamRise 6s ease-in-out infinite;
  }

  @keyframes gearSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes steamRise {
    0% { transform: translateY(0) scale(1); opacity: 0.3; }
    50% { transform: translateY(-60px) scale(1.5); opacity: 0.5; }
    100% { transform: translateY(-120px) scale(2); opacity: 0; }
  }

  .intro-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .logo {
    display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.5rem;
  }

  .logo h1 {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #cd9b50, #e8c574, #b8860b);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .logo-gear {
    font-size: 2.5rem; color: #cd9b50;
    animation: gearSpinSlow 4s linear infinite;
    display: inline-block;
  }

  .logo-gear.reverse { animation-direction: reverse; }

  @keyframes gearSpinSlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .tagline { color: #b0896a; font-size: 1.2rem; margin-bottom: 2rem; }

  .instructions-card {
    background: rgba(205, 155, 80, 0.08); border: 2px solid rgba(205, 155, 80, 0.2);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem; backdrop-filter: blur(10px);
  }

  .instructions-card h3 { color: #e8c574; font-size: 1.2rem; margin-bottom: 1.5rem; }

  .instruction { margin-bottom: 1.5rem; }
  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem;
    flex-wrap: wrap;
  }

  .mini-block {
    padding: 6px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;
    display: inline-flex; align-items: center; gap: 4px;
  }

  .mini-block.who { background: rgba(244, 114, 182, 0.3); color: #f472b6; border: 1px solid #f472b6; }

  .mini-funnel {
    padding: 6px 14px; border-radius: 8px 8px 4px 4px;
    background: rgba(205, 155, 80, 0.3); border: 2px solid #cd9b50;
    font-size: 0.75rem; font-weight: 800; color: #e8c574;
  }

  .mini-scroll { font-size: 1.5rem; }
  .plus, .arrow { color: #8a6e4a; font-size: 1.2rem; }
  .star-icon { font-size: 1.5rem; }
  .instruction p { color: #c4a882; font-size: 0.95rem; }
  .highlight-who { color: #f472b6; font-weight: 700; }
  .highlight-action { color: #4ade80; font-weight: 700; }
  .highlight-creative { color: #fbbf24; font-weight: 700; }

  .start-btn, .next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: #1a0f07;
    background: linear-gradient(135deg, #cd9b50, #e8c574);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(205, 155, 80, 0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(205, 155, 80, 0.5);
  }

  .btn-gear {
    font-size: 1.3rem; display: inline-block;
    animation: gearSpinSlow 3s linear infinite;
  }

  .btn-gear.reverse { animation-direction: reverse; }

  /* ── Game Screen ────────────────────────────────────────────────────── */

  .game-screen {
    height: 100%; display: flex; flex-direction: column; position: relative;
    touch-action: none; overflow: hidden;
  }

  .game-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 1rem;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
    z-index: 50; border-bottom: 2px solid rgba(205, 155, 80, 0.3);
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.8rem; }

  .header-center { display: flex; align-items: center; }

  .level-info { display: flex; flex-direction: column; align-items: center; }

  .level-title { color: #e8c574; font-weight: 700; font-size: 0.9rem; }

  .back-btn {
    width: 40px; height: 40px; background: rgba(205, 155, 80, 0.15);
    border: 2px solid rgba(205, 155, 80, 0.3); border-radius: 12px;
    color: #cd9b50; font-size: 1.2rem; cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(205, 155, 80, 0.3); }

  .level-badge {
    padding: 0.4rem 1rem;
    background: linear-gradient(135deg, #cd9b50, #b8860b);
    border-radius: 20px; font-weight: 700; color: #1a0f07; font-size: 0.85rem;
  }

  .score-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.4rem 1rem;
    background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: 20px; color: #fbbf24; font-weight: 700; font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  /* ── Machine Area ───────────────────────────────────────────────────── */

  .machine-area {
    flex: 1; display: flex; align-items: stretch; position: relative; overflow: visible;
    padding: 0.5rem 0;
  }

  /* ── Conveyor Belts ─────────────────────────────────────────────────── */

  .conveyor {
    width: 50px; display: flex; flex-direction: column; align-items: center;
    justify-content: center; position: relative; z-index: 5;
  }

  .conveyor-belt {
    width: 32px; flex: 1; position: relative; overflow: hidden;
    background: linear-gradient(90deg, #3d2b1a, #5a3d26, #3d2b1a);
    border: 2px solid #6b4c2e; border-radius: 4px;
  }

  .chevron-pattern {
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      180deg,
      transparent 0px,
      transparent 8px,
      rgba(205, 155, 80, 0.2) 8px,
      rgba(205, 155, 80, 0.2) 10px,
      transparent 10px,
      transparent 18px
    );
    animation: conveyorMove 2s linear infinite;
  }

  .conveyor-belt.reverse .chevron-pattern { animation-direction: reverse; }

  @keyframes conveyorMove {
    0% { transform: translateY(0); }
    100% { transform: translateY(18px); }
  }

  .conveyor-label {
    font-size: 0.55rem; font-weight: 800; color: #8a6e4a;
    writing-mode: vertical-rl; text-orientation: mixed;
    letter-spacing: 2px; margin-top: 8px;
  }

  /* ── Machine Body ───────────────────────────────────────────────────── */

  .machine-body {
    flex: 1; position: relative; display: flex; flex-direction: column;
    align-items: center; justify-content: center; padding: 0.5rem;
    background: linear-gradient(180deg, #2a1c10 0%, #3d2b1a 40%, #2a1c10 100%);
    border: 3px solid #6b4c2e; border-radius: 16px;
    box-shadow:
      inset 0 2px 20px rgba(0,0,0,0.5),
      0 0 30px rgba(205, 155, 80, 0.1);
    margin: 0 4px;
    transition: box-shadow 0.3s ease;
  }

  .machine-body.producing {
    box-shadow:
      inset 0 2px 20px rgba(0,0,0,0.5),
      0 0 60px rgba(205, 155, 80, 0.3);
    animation: machineShake 0.15s infinite;
  }

  @keyframes machineShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
  }

  /* ── Pipe Assembly ──────────────────────────────────────────────────── */

  .pipe-top {
    display: flex; align-items: center; justify-content: center; gap: 4px;
    margin-bottom: 4px; width: 100%;
  }

  .pipe-flange {
    width: 24px; height: 10px; background: linear-gradient(180deg, #7a5c3a, #5a3d26);
    border: 1px solid #8a6e4a; border-radius: 2px;
  }

  .pipe-vertical {
    width: 16px; height: 30px; position: relative;
    background: linear-gradient(90deg, #5a3d26, #7a5c3a, #5a3d26);
    border: 1px solid #8a6e4a;
  }

  .pipe-rivet {
    position: absolute; left: 50%; top: 30%; transform: translate(-50%, -50%);
    width: 6px; height: 6px; border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #b8860b, #6b4c2e);
    border: 1px solid #cd9b50;
  }

  .pipe-bottom {
    display: flex; flex-direction: column; align-items: center; margin-top: 4px; width: 80%;
  }

  .pipe-horizontal {
    width: 100%; height: 14px; position: relative;
    background: linear-gradient(180deg, #7a5c3a, #5a3d26, #7a5c3a);
    border: 1px solid #8a6e4a; border-radius: 2px;
  }

  .output-chute {
    width: 40px; height: 20px; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(180deg, #5a3d26, #3d2b1a);
    border: 1px solid #6b4c2e; border-radius: 0 0 8px 8px;
  }

  .chute-arrow { color: #cd9b50; font-size: 0.8rem; animation: chuteArrowBounce 1.5s ease-in-out infinite; }

  @keyframes chuteArrowBounce {
    0%, 100% { transform: translateY(0); opacity: 0.5; }
    50% { transform: translateY(3px); opacity: 1; }
  }

  /* ── Gears ──────────────────────────────────────────────────────────── */

  .gear {
    position: absolute; border-radius: 50%;
    border: 3px solid #8a6e4a;
    background: radial-gradient(circle at 40% 40%, #5a3d26, #3d2b1a);
    animation: gearSpin 3s linear infinite;
    z-index: 2;
  }

  .gear-1 { width: 50px; height: 50px; top: 8%; right: 8%; }
  .gear-2 { width: 36px; height: 36px; top: 14%; right: 3%; animation-direction: reverse; }
  .gear-3 { width: 44px; height: 44px; top: 6%; left: 6%; }

  .gear-tooth {
    position: absolute; top: 50%; left: 50%; width: 110%; height: 8px;
    background: #6b4c2e; border-radius: 3px;
    transform: translate(-50%, -50%);
  }

  .gear-center {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 30%; height: 30%; border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #cd9b50, #6b4c2e);
    border: 2px solid #8a6e4a;
  }

  /* ── Glass Viewing Window ───────────────────────────────────────────── */

  .glass-window {
    width: 80px; height: 60px; border-radius: 12px; position: relative;
    background: linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05));
    border: 3px solid #6b4c2e;
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
    margin: 6px 0;
    overflow: hidden;
  }

  .glass-shine {
    position: absolute; top: 5px; left: 8px; width: 20px; height: 12px;
    background: radial-gradient(ellipse, rgba(255,255,255,0.3), transparent);
    border-radius: 50%; transform: rotate(-20deg);
  }

  .glass-content {
    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
  }

  .window-blocks { display: flex; gap: 4px; }
  .window-block-emoji { font-size: 1.2rem; animation: windowEmojiBob 1.5s ease-in-out infinite; }
  .window-block-emoji:nth-child(2) { animation-delay: 0.2s; }
  .window-block-emoji:nth-child(3) { animation-delay: 0.4s; }
  .window-block-emoji:nth-child(4) { animation-delay: 0.6s; }

  @keyframes windowEmojiBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .window-empty { font-size: 1.5rem; color: #5a3d26; animation: gearSpinSlow 6s linear infinite; display: inline-block; }

  /* ── Indicator Lights ───────────────────────────────────────────────── */

  .indicator-row {
    display: flex; gap: 6px; margin: 6px 0;
  }

  .indicator-light {
    width: 12px; height: 12px; border-radius: 50%; position: relative;
    background: #2a1c10; border: 2px solid #5a3d26;
    transition: all 0.3s ease;
  }

  .indicator-light.on {
    background: #4ade80;
    border-color: #22c55e;
    box-shadow: 0 0 10px rgba(74, 222, 128, 0.6);
  }

  .light-glow {
    position: absolute; inset: -6px; border-radius: 50%;
    background: radial-gradient(circle, rgba(74, 222, 128, 0.3), transparent);
    opacity: 0; transition: opacity 0.3s ease;
  }

  .indicator-light.on .light-glow { opacity: 1; animation: lightPulse 1s ease-in-out infinite; }

  @keyframes lightPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.3); opacity: 1; }
  }

  /* ── Slot Funnels ───────────────────────────────────────────────────── */

  .slots-row {
    display: flex; gap: 6px; flex-wrap: wrap; justify-content: center;
    padding: 4px; width: 100%;
  }

  .slot-funnel {
    flex: 1; min-width: 80px; max-width: 160px;
    display: flex; flex-direction: column; align-items: center;
    padding: 6px 4px;
    background: rgba(0,0,0,0.3); border: 2px solid rgba(205, 155, 80, 0.3);
    border-radius: 12px 12px 8px 8px; position: relative;
    transition: all 0.3s ease;
  }

  .slot-funnel.filled {
    background: rgba(74, 222, 128, 0.1); border-color: #4ade80;
  }

  .slot-funnel.highlighted {
    border-color: var(--slot-color);
    box-shadow: 0 0 20px color-mix(in srgb, var(--slot-color) 40%, transparent);
    animation: funnelPulse 0.8s ease-in-out infinite;
  }

  @keyframes funnelPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
  }

  .funnel-top {
    width: 100%; display: flex; justify-content: center; margin-bottom: 2px;
  }

  .funnel-opening {
    width: 60%; height: 6px; border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, var(--slot-color), rgba(0,0,0,0));
    opacity: 0.5;
  }

  .slot-funnel.highlighted .funnel-opening { opacity: 1; }

  .funnel-label {
    font-size: 0.65rem; font-weight: 800; color: var(--slot-color);
    letter-spacing: 1px; margin-bottom: 2px;
  }

  .funnel-content {
    display: flex; flex-direction: column; align-items: center; gap: 2px;
  }

  .funnel-emoji { font-size: 1.3rem; }
  .funnel-text { font-size: 0.55rem; color: #c4a882; text-align: center; line-height: 1.2; max-width: 120px; }

  .funnel-hint { font-size: 0.6rem; color: #6b4c2e; font-style: italic; }

  .funnel-glow {
    position: absolute; inset: -8px; border-radius: 18px; z-index: -1;
    background: radial-gradient(circle, color-mix(in srgb, var(--slot-color) 20%, transparent), transparent 70%);
    animation: funnelGlowPulse 1s ease-in-out infinite;
  }

  @keyframes funnelGlowPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* ── Story Blocks (draggable) ───────────────────────────────────────── */

  .story-block {
    position: absolute; transform: translate(-50%, -50%);
    padding: 8px 14px; border-radius: 16px;
    background: radial-gradient(ellipse at 30% 30%,
      hsl(var(--block-hue), 60%, 35%) 0%,
      hsl(var(--block-hue), 50%, 22%) 100%);
    border: 2px solid var(--block-color);
    box-shadow:
      0 6px 20px hsla(var(--block-hue), 50%, 30%, 0.5),
      inset 0 1px 3px rgba(255,255,255,0.1);
    cursor: grab; z-index: 10;
    display: flex; align-items: center; gap: 6px;
    min-width: 140px; max-width: 200px;
    transition: box-shadow 0.2s ease, transform 0.1s ease;
    white-space: nowrap;
  }

  .story-block:hover {
    z-index: 20;
    box-shadow:
      0 10px 30px hsla(var(--block-hue), 50%, 30%, 0.7),
      inset 0 1px 3px rgba(255,255,255,0.15);
  }

  .story-block.dragging {
    cursor: grabbing; z-index: 100;
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow:
      0 15px 40px hsla(var(--block-hue), 50%, 30%, 0.8),
      0 0 20px color-mix(in srgb, var(--block-color) 50%, transparent),
      inset 0 1px 3px rgba(255,255,255,0.2);
  }

  .block-shine {
    position: absolute; top: 4px; left: 12px; width: 30px; height: 10px;
    background: radial-gradient(ellipse, rgba(255,255,255,0.25), transparent);
    border-radius: 50%;
  }

  .block-emoji { font-size: 1.3rem; z-index: 2; }
  .block-text { font-size: 0.7rem; font-weight: 700; color: white; z-index: 2; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }

  .block-type-badge {
    position: absolute; top: -8px; right: -4px;
    padding: 1px 6px; border-radius: 8px;
    font-size: 0.5rem; font-weight: 800; color: #1a0f07;
    letter-spacing: 0.5px;
  }

  /* ── Steam Particles ────────────────────────────────────────────────── */

  .steam-particle {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.4), rgba(255,255,255,0.05));
    pointer-events: none; z-index: 30;
    transform: translate(-50%, -50%);
  }

  /* ── Sound Effects ──────────────────────────────────────────────────── */

  .sound-effect {
    position: absolute; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 200;
    font-size: 1.2rem; font-weight: 900; color: #e8c574;
    text-shadow: 0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(232, 197, 116, 0.5);
    animation: soundPop 0.9s ease forwards;
    white-space: nowrap;
  }

  @keyframes soundPop {
    0% { transform: translate(-50%, -50%) scale(0) rotate(-10deg); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.3) rotate(5deg); opacity: 1; }
    60% { transform: translate(-50%, -80%) scale(1) rotate(-2deg); opacity: 0.8; }
    100% { transform: translate(-50%, -120%) scale(0.8) rotate(0deg); opacity: 0; }
  }

  /* ── Challenge Hint ─────────────────────────────────────────────────── */

  .challenge-hint {
    position: absolute; top: 60px; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; gap: 8px;
    padding: 8px 16px; background: rgba(251, 191, 36, 0.15);
    border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 20px;
    color: #fbbf24; font-size: 0.85rem; font-weight: 600;
    animation: hintFloat 3s ease-in-out infinite;
    z-index: 40; white-space: nowrap;
  }

  .challenge-icon { font-size: 1.2rem; }

  @keyframes hintFloat {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-5px); }
  }

  /* ── Tutorial ───────────────────────────────────────────────────────── */

  .tutorial-overlay { position: absolute; inset: 0; pointer-events: none; z-index: 150; }

  .tutorial-tip {
    position: absolute; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
    padding: 1rem 1.5rem; background: rgba(0,0,0,0.92);
    border: 2px solid #cd9b50; border-radius: 20px;
    animation: tutorialBounce 1.2s ease-in-out infinite;
  }

  @keyframes tutorialBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-8px); }
  }

  .tutorial-icon { font-size: 2rem; }
  .tutorial-tip p { color: white; font-weight: 600; font-size: 0.95rem; }

  /* ── Producing Overlay ──────────────────────────────────────────────── */

  .producing-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.3);
    display: flex; align-items: center; justify-content: center;
    z-index: 100; pointer-events: none;
  }

  .producing-text {
    padding: 12px 28px;
    background: linear-gradient(135deg, #cd9b50, #e8c574);
    color: #1a0f07; font-size: 1.3rem; font-weight: 900;
    border-radius: 30px;
    animation: producingPulse 0.6s ease-in-out infinite;
    box-shadow: 0 10px 40px rgba(205, 155, 80, 0.5);
  }

  @keyframes producingPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  /* ── Bottom Bar ─────────────────────────────────────────────────────── */

  .bottom-bar {
    padding: 0.6rem; background: rgba(0,0,0,0.5); text-align: center;
    border-top: 2px solid rgba(205, 155, 80, 0.2); z-index: 50;
  }

  .hint-text { display: flex; justify-content: center; gap: 1.5rem; font-size: 0.8rem; color: #6b4c2e; flex-wrap: wrap; }
  .hint-drag { color: #cd9b50; }
  .hint-match { color: #8a6e4a; }
  .hint-stories { color: #4ade80; }

  /* ── Reveal Screen ──────────────────────────────────────────────────── */

  .reveal-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .reveal-bg { position: absolute; inset: 0; overflow: hidden; }

  .bg-confetti {
    position: absolute; top: -10%; width: 8px; height: 8px; border-radius: 2px;
    animation: confettiFall 4s ease-in infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(110vh) rotate(720deg); opacity: 0.3; }
  }

  .reveal-content {
    position: relative; z-index: 10; text-align: center; padding: 1.5rem;
    max-width: 600px; width: 100%;
  }

  /* ── Scroll (parchment) ─────────────────────────────────────────────── */

  .scroll-container {
    position: relative; margin: 0 auto 1.5rem;
    animation: scrollUnfurl 0.8s ease-out forwards;
  }

  @keyframes scrollUnfurl {
    0% { transform: scaleY(0); opacity: 0; }
    50% { transform: scaleY(1.05); opacity: 1; }
    100% { transform: scaleY(1); opacity: 1; }
  }

  .scroll-top, .scroll-bottom {
    width: 100%; height: 20px;
    background: linear-gradient(180deg, #8B7355, #6B5B3D, #8B7355);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    position: relative;
    z-index: 2;
  }

  .scroll-top::before, .scroll-bottom::before {
    content: ''; position: absolute; left: 10px; right: 10px;
    top: 4px; height: 3px; background: rgba(255,255,255,0.15); border-radius: 2px;
  }

  .scroll-top::after, .scroll-bottom::after {
    content: ''; position: absolute; left: 5%; right: 5%; bottom: 2px; height: 2px;
    background: rgba(0,0,0,0.2);
  }

  .scroll-body {
    background: linear-gradient(180deg, #f5e6c8, #e8d5a8, #f0dfc0);
    padding: 1.5rem 2rem;
    border-left: 3px solid #c4a882;
    border-right: 3px solid #c4a882;
    transition: min-height 0.5s ease;
  }

  .scroll-text {
    font-size: clamp(1rem, 3.5vw, 1.4rem); font-weight: 700;
    color: #3d2b1a; line-height: 1.6;
    text-align: left;
  }

  .cursor-blink {
    color: #cd9b50;
    animation: cursorBlink 0.6s step-end infinite;
  }

  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* ── Illustration ───────────────────────────────────────────────────── */

  .illustration-container {
    margin-top: 1rem; border-radius: 12px; padding: 1.5rem;
    animation: illustrationFadeIn 0.6s ease forwards;
    border: 2px solid rgba(0,0,0,0.1);
  }

  @keyframes illustrationFadeIn {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }

  .illustration-emojis {
    display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  }

  .illust-char, .illust-setting, .illust-action, .illust-feeling {
    font-size: 3rem;
  }

  .anim-bounce { animation: illustBounce 1.5s ease-in-out infinite; }
  .anim-float { animation: illustFloat 2s ease-in-out infinite; }
  .anim-spin { animation: illustSpin 3s linear infinite; }
  .anim-pulse { animation: illustPulse 1.2s ease-in-out infinite; }

  @keyframes illustBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  @keyframes illustFloat {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-8px) translateX(5px); }
  }

  @keyframes illustSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes illustPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  /* ── Creativity Rating ──────────────────────────────────────────────── */

  .creativity-rating {
    margin: 1rem 0; animation: ratingPopIn 0.5s ease forwards;
  }

  @keyframes ratingPopIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }

  .creativity-stars { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem; }

  .creativity-star {
    font-size: 2rem; opacity: 0.2;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .creativity-star.filled {
    opacity: 1; animation: starPop 0.4s ease forwards;
  }

  @keyframes starPop {
    0% { transform: scale(0) rotate(-30deg); }
    60% { transform: scale(1.3) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .creativity-label {
    font-size: 1.3rem; font-weight: 900; color: #e8c574;
    text-shadow: 0 2px 10px rgba(205, 155, 80, 0.5);
    margin-bottom: 0.3rem;
  }

  .creativity-score { font-size: 1rem; color: #4ade80; font-weight: 700; }

  .reveal-buttons { margin-top: 1rem; }

  /* ── Storybook Screen ───────────────────────────────────────────────── */

  .storybook-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .storybook-bg { position: absolute; inset: 0; overflow: hidden; }

  .bg-sparkle {
    position: absolute; width: 4px; height: 4px; border-radius: 50%;
    background: #fbbf24;
    animation: sparkleGlow 2s ease-in-out infinite;
  }

  @keyframes sparkleGlow {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }

  .storybook-content {
    position: relative; z-index: 10; text-align: center; padding: 1.5rem;
    max-width: 600px; width: 100%;
  }

  .storybook-title {
    font-size: clamp(1.5rem, 5vw, 2.2rem); font-weight: 900;
    color: #e8c574; margin-bottom: 1rem;
  }

  .storybook-page {
    background: linear-gradient(180deg, #f5e6c8, #e8d5a8);
    border-radius: 16px; padding: 1.5rem;
    border: 3px solid #c4a882;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    margin-bottom: 1rem;
    animation: pageFlip 0.5s ease forwards;
  }

  @keyframes pageFlip {
    0% { transform: rotateY(90deg); opacity: 0; }
    100% { transform: rotateY(0deg); opacity: 1; }
  }

  .page-number { font-size: 0.75rem; color: #8a6e4a; margin-bottom: 0.5rem; }

  .page-illustration {
    border-radius: 12px; padding: 1.2rem; margin-bottom: 1rem;
    border: 2px solid rgba(0,0,0,0.1);
  }

  .page-scene-emojis { display: flex; justify-content: center; gap: 1.2rem; }
  .scene-character, .scene-setting, .scene-action, .scene-feeling { font-size: 2.5rem; }

  .page-text {
    font-size: 1.1rem; color: #3d2b1a; font-weight: 700; line-height: 1.5;
    padding: 0.5rem;
  }

  .page-stars { display: flex; justify-content: center; gap: 0.3rem; }
  .page-star { font-size: 1.3rem; }

  .storybook-nav {
    display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem;
  }

  .page-btn {
    padding: 0.5rem 1.2rem; font-family: 'Nunito', sans-serif;
    font-size: 0.9rem; font-weight: 700; color: #cd9b50;
    background: rgba(205, 155, 80, 0.1); border: 2px solid rgba(205, 155, 80, 0.3);
    border-radius: 20px; cursor: pointer; transition: all 0.2s ease;
  }

  .page-btn:hover:not(:disabled) { background: rgba(205, 155, 80, 0.2); border-color: #cd9b50; }
  .page-btn:disabled { opacity: 0.3; cursor: default; }

  .storybook-score {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 1.5rem;
  }

  .score-final-item { display: flex; flex-direction: column; align-items: center; }
  .score-final-label { font-size: 0.8rem; color: #8a6e4a; }
  .score-final-value { font-size: 1.8rem; font-weight: 900; color: #e8c574; }

  .storybook-buttons, .complete-buttons {
    display: flex; flex-direction: column; gap: 0.8rem; align-items: center;
  }

  .storybook-empty { padding: 2rem; color: #8a6e4a; font-size: 1.1rem; }

  /* ── Complete Screen ────────────────────────────────────────────────── */

  .complete-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative;
  }

  .complete-content { text-align: center; padding: 2rem; }
  .complete-title { font-size: 2rem; color: #e8c574; margin-bottom: 1rem; }
  .complete-score { font-size: 1.3rem; color: #cd9b50; margin-bottom: 2rem; }

  .menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #8a6e4a;
    background: transparent; border: 2px solid rgba(205, 155, 80, 0.3);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: #cd9b50; color: #e8c574; }

  /* ── Responsive ─────────────────────────────────────────────────────── */

  @media (max-width: 600px) {
    .machine-body { margin: 0 2px; }
    .conveyor { width: 30px; }
    .conveyor-belt { width: 20px; }
    .conveyor-label { font-size: 0.45rem; }
    .gear-1 { width: 36px; height: 36px; }
    .gear-2 { width: 26px; height: 26px; }
    .gear-3 { width: 32px; height: 32px; }
    .glass-window { width: 60px; height: 45px; }
    .slot-funnel { min-width: 60px; padding: 4px 2px; }
    .funnel-label { font-size: 0.55rem; }
    .funnel-emoji { font-size: 1rem; }
    .funnel-text { font-size: 0.5rem; }
    .story-block { min-width: 110px; max-width: 160px; padding: 6px 10px; }
    .block-emoji { font-size: 1rem; }
    .block-text { font-size: 0.6rem; }
    .block-type-badge { font-size: 0.45rem; }
    .hint-text { flex-direction: column; gap: 0.2rem; font-size: 0.7rem; }
    .header-center { display: none; }
    .pipe-top { display: none; }
    .pipe-bottom { display: none; }
    .scroll-body { padding: 1rem; }
    .scroll-text { font-size: 1rem; }
    .illust-char, .illust-setting, .illust-action, .illust-feeling { font-size: 2rem; }
    .creativity-star { font-size: 1.5rem; }
    .creativity-label { font-size: 1rem; }
    .challenge-hint { font-size: 0.7rem; padding: 6px 12px; }
    .producing-text { font-size: 1rem; padding: 10px 20px; }
    .level-badge { font-size: 0.75rem; padding: 0.3rem 0.8rem; }
    .score-badge { font-size: 0.8rem; padding: 0.3rem 0.8rem; }
  }

  @media (max-width: 400px) {
    .slots-row { gap: 3px; }
    .slot-funnel { min-width: 50px; }
    .funnel-content { gap: 1px; }
    .gear-1, .gear-2, .gear-3 { display: none; }
    .indicator-row { gap: 4px; }
    .indicator-light { width: 10px; height: 10px; }
  }

  @media (min-width: 900px) {
    .machine-body { max-width: 500px; margin: 0 auto; }
    .story-block { min-width: 160px; max-width: 220px; }
    .block-text { font-size: 0.8rem; }
    .block-emoji { font-size: 1.5rem; }
    .glass-window { width: 100px; height: 70px; }
    .gear-1 { width: 60px; height: 60px; }
    .gear-2 { width: 44px; height: 44px; }
    .gear-3 { width: 52px; height: 52px; }
  }
`;
