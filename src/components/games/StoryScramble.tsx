"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface StoryScene {
  emoji: string;
  text: string;
}

interface Story {
  title: string;
  bookEmoji: string;
  scenes: StoryScene[];
}

interface SceneCard {
  id: number;
  sceneIndex: number;
  emoji: string;
  text: string;
  correctSlot: number;
  currentSlot: number | null;
  x: number;
  y: number;
  rotation: number;
  vx: number;
  vy: number;
  vr: number;
  scale: number;
  opacity: number;
  isFlying: boolean;
  landed: boolean;
  zIndex: number;
}

interface TimelineSlot {
  id: number;
  index: number;
  label: string;
  cardId: number | null;
  glowing: boolean;
}

interface DragState {
  cardId: number;
  offsetX: number;
  offsetY: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  velocityX: number;
  velocityY: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  vr: number;
  type: 'leaf' | 'sparkle' | 'confetti' | 'page';
  color: string;
  life: number;
  maxLife: number;
}

interface WindLeaf {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
  size: number;
  opacity: number;
  emoji: string;
}

interface HintMessage {
  text: string;
  visible: boolean;
}

interface StarRating {
  stars: number;
  firstTry: boolean;
}

type GameScreen = 'intro' | 'playing' | 'story-reveal' | 'complete' | 'game-over';

// ─── Constants ───────────────────────────────────────────────────────────────

const WIND_TIMER_MAX = 45000; // 45 seconds before wind scatters
const SNAP_DISTANCE = 80;
const CARD_WIDTH = 160;
const CARD_HEIGHT = 200;

const SLOT_LABELS_3 = ['1st', '2nd', '3rd'];
const SLOT_LABELS_4 = ['1st', '2nd', '3rd', '4th'];
const SLOT_LABELS_5 = ['1st', '2nd', '3rd', '4th', '5th'];
const SLOT_LABELS_6 = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

const STORIES: Story[] = [
  {
    title: 'The Hungry Caterpillar',
    bookEmoji: '🦋',
    scenes: [
      { emoji: '🥚', text: 'A tiny egg sits on a leaf' },
      { emoji: '🐛', text: 'A caterpillar hatches out' },
      { emoji: '🍎', text: 'It eats lots of yummy food' },
      { emoji: '🫘', text: 'It wraps up in a cocoon' },
      { emoji: '🦋', text: 'A beautiful butterfly appears!' },
    ],
  },
  {
    title: 'Getting Ready for School',
    bookEmoji: '🏫',
    scenes: [
      { emoji: '⏰', text: 'The alarm rings — time to wake up!' },
      { emoji: '🪥', text: 'Brush your teeth nice and clean' },
      { emoji: '🥣', text: 'Eat a big healthy breakfast' },
      { emoji: '🎒', text: 'Pack your school bag' },
      { emoji: '🚌', text: 'Off to school you go!' },
    ],
  },
  {
    title: 'Planting a Seed',
    bookEmoji: '🌻',
    scenes: [
      { emoji: '🕳️', text: 'Dig a little hole in the soil' },
      { emoji: '🌱', text: 'Place the seed in the ground' },
      { emoji: '💧', text: 'Water it every day' },
      { emoji: '☀️', text: 'The sun shines down warmly' },
      { emoji: '🌸', text: 'A beautiful flower grows tall!' },
    ],
  },
  {
    title: 'Building a Sandcastle',
    bookEmoji: '🏖️',
    scenes: [
      { emoji: '🏖️', text: 'Arrive at the sunny beach' },
      { emoji: '⛏️', text: 'Dig up lots of wet sand' },
      { emoji: '🏰', text: 'Build a tall sandcastle' },
      { emoji: '🐚', text: 'Decorate it with pretty shells' },
      { emoji: '🌊', text: 'Oh no! A wave washes it away!' },
    ],
  },
  {
    title: 'Making a Cake',
    bookEmoji: '🎂',
    scenes: [
      { emoji: '🥚', text: 'Get out the eggs, flour and sugar' },
      { emoji: '🥣', text: 'Mix everything in a big bowl' },
      { emoji: '🫙', text: 'Pour the batter into a tin' },
      { emoji: '🔥', text: 'Bake it in the hot oven' },
      { emoji: '🎂', text: 'Decorate and eat the cake! Yum!' },
    ],
  },
  {
    title: 'A Rainy Day',
    bookEmoji: '🌈',
    scenes: [
      { emoji: '☁️', text: 'Dark clouds fill the sky' },
      { emoji: '🌧️', text: 'Rain starts falling down' },
      { emoji: '💧', text: 'Puddles form on the ground' },
      { emoji: '☀️', text: 'The sun peeks through the clouds' },
      { emoji: '🌈', text: 'A rainbow appears in the sky!' },
    ],
  },
  {
    title: 'The Lost Puppy',
    bookEmoji: '🐕',
    scenes: [
      { emoji: '🐕', text: 'The little puppy runs away!' },
      { emoji: '🌳', text: 'Search for it in the park' },
      { emoji: '🏘️', text: 'Look up and down the street' },
      { emoji: '🐶', text: 'Found it hiding under a bush!' },
      { emoji: '🏠', text: 'Take the happy puppy home' },
    ],
  },
  {
    title: 'Space Adventure',
    bookEmoji: '🚀',
    scenes: [
      { emoji: '👨‍🚀', text: 'Put on your space suit' },
      { emoji: '🚀', text: 'Blast off into outer space!' },
      { emoji: '🌌', text: 'Float among the twinkling stars' },
      { emoji: '🌍', text: 'See planet Earth far below' },
      { emoji: '🛬', text: 'Land safely back on the ground' },
    ],
  },
];

let cardIdCounter = 0;
const getNewCardId = (): number => ++cardIdCounter;

let particleIdCounter = 0;
const getNewParticleId = (): number => ++particleIdCounter;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getSlotLabels(count: number): string[] {
  if (count <= 3) return SLOT_LABELS_3;
  if (count === 4) return SLOT_LABELS_4;
  if (count === 5) return SLOT_LABELS_5;
  return SLOT_LABELS_6;
}

function getScenesForLevel(level: number, story: Story): StoryScene[] {
  const sceneCount = level <= 2 ? 3 : level <= 4 ? 4 : level <= 6 ? 5 : Math.min(story.scenes.length, 6);
  // Take scenes evenly spaced from full story if we need fewer
  if (sceneCount >= story.scenes.length) return story.scenes;
  const indices: number[] = [0]; // always include first
  const step = (story.scenes.length - 1) / (sceneCount - 1);
  for (let i = 1; i < sceneCount - 1; i++) {
    indices.push(Math.round(step * i));
  }
  indices.push(story.scenes.length - 1); // always include last
  return indices.map(i => story.scenes[i]);
}

// ─── Component ───────────────────────────────────────────────────────────────

interface StoryScrambleProps {
  onExit?: () => void;
}

export default function StoryScramble({ onExit }: StoryScrambleProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [currentStory, setCurrentStory] = useState<Story>(STORIES[0]);
  const [scenes, setScenes] = useState<StoryScene[]>([]);
  const [cards, setCards] = useState<SceneCard[]>([]);
  const [slots, setSlots] = useState<TimelineSlot[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windLeaves, setWindLeaves] = useState<WindLeaf[]>([]);
  const [windTimer, setWindTimer] = useState<number>(0);
  const [windPaused, setWindPaused] = useState<boolean>(false);
  const [hint, setHint] = useState<HintMessage>({ text: '', visible: false });
  const [attempts, setAttempts] = useState<number>(0);
  const [bookOpen, setBookOpen] = useState<boolean>(false);
  const [pagesFlying, setPagesFlying] = useState<boolean>(false);
  const [bookReassembling, setBookReassembling] = useState<boolean>(false);
  const [storyRevealIndex, setStoryRevealIndex] = useState<number>(-1);
  const [shakeCardId, setShakeCardId] = useState<number | null>(null);
  const [starRating, setStarRating] = useState<StarRating>({ stars: 3, firstTry: true });
  const [snapEffect, setSnapEffect] = useState<{ slotIndex: number; time: number } | null>(null);
  const [levelStars, setLevelStars] = useState<number>(0);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const playAreaRef = useRef<HTMLDivElement>(null);
  const slotsRef = useRef<HTMLDivElement>(null);
  const slotElementsRef = useRef<Record<number, HTMLDivElement>>({});
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const windTimerRef = useRef<number>(0);
  const cardsRef = useRef<SceneCard[]>(cards);
  const slotsRefData = useRef<TimelineSlot[]>(slots);
  const dragRef = useRef<DragState | null>(null);
  const particlesRef = useRef<Particle[]>(particles);

  useEffect(() => { cardsRef.current = cards; }, [cards]);
  useEffect(() => { slotsRefData.current = slots; }, [slots]);
  useEffect(() => { dragRef.current = dragState; }, [dragState]);
  useEffect(() => { particlesRef.current = particles; }, [particles]);

  // ─── Container size ──────────────────────────────────────────────────────

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 800, height: 600 };
  }, []);

  // ─── Get slot position ──────────────────────────────────────────────────

  const getSlotPosition = useCallback((slotIndex: number) => {
    const slotEl = slotElementsRef.current[slotIndex];
    if (slotEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const slotRect = slotEl.getBoundingClientRect();
      return {
        x: slotRect.left + slotRect.width / 2 - containerRect.left,
        y: slotRect.top + slotRect.height / 2 - containerRect.top,
      };
    }
    return null;
  }, []);

  // ─── Particle system ─────────────────────────────────────────────────────

  const spawnParticles = useCallback((x: number, y: number, type: Particle['type'], count: number) => {
    const colors = type === 'confetti'
      ? ['#f472b6', '#a78bfa', '#38bdf8', '#4ade80', '#fbbf24', '#fb923c']
      : type === 'sparkle'
        ? ['#fbbf24', '#fcd34d', '#fef08a']
        : type === 'leaf'
          ? ['#4ade80', '#86efac', '#a3e635', '#d9f99d']
          : ['#f5f0e8', '#e8e0d0', '#d4c8b0'];
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 4;
      const life = 60 + Math.random() * 60;
      newParticles.push({
        id: getNewParticleId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: type === 'confetti' ? 6 + Math.random() * 6 : type === 'leaf' ? 10 + Math.random() * 8 : 4 + Math.random() * 4,
        opacity: 1,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 15,
        type,
        color: colors[Math.floor(Math.random() * colors.length)],
        life,
        maxLife: life,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ─── Wind leaves ─────────────────────────────────────────────────────────

  const spawnWindLeaves = useCallback(() => {
    const size = getContainerSize();
    const leafEmojis = ['🍃', '🍂', '🍁', '🌿', '☘️'];
    const newLeaves: WindLeaf[] = [];
    for (let i = 0; i < 5; i++) {
      newLeaves.push({
        id: getNewParticleId(),
        x: -20 - Math.random() * 100,
        y: Math.random() * size.height,
        vx: 3 + Math.random() * 4,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 8,
        size: 16 + Math.random() * 12,
        opacity: 0.4 + Math.random() * 0.4,
        emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
      });
    }
    setWindLeaves(prev => [...prev, ...newLeaves]);
  }, [getContainerSize]);

  // ─── Initialize level ────────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    const storyIndex = (lvl - 1) % STORIES.length;
    const story = STORIES[storyIndex];
    const levelScenes = getScenesForLevel(lvl, story);
    const slotLabels = getSlotLabels(levelScenes.length);

    setCurrentStory(story);
    setScenes(levelScenes);
    setAttempts(0);
    setStarRating({ stars: 3, firstTry: true });
    setHint({ text: '', visible: false });
    setShakeCardId(null);
    setSnapEffect(null);
    setBookOpen(false);
    setPagesFlying(false);
    setBookReassembling(false);
    setStoryRevealIndex(-1);
    setWindTimer(0);
    setWindPaused(false);
    windTimerRef.current = 0;
    setParticles([]);
    setWindLeaves([]);
    slotElementsRef.current = {};

    // Create timeline slots
    const newSlots: TimelineSlot[] = slotLabels.slice(0, levelScenes.length).map((label, i) => ({
      id: i,
      index: i,
      label,
      cardId: null,
      glowing: false,
    }));
    setSlots(newSlots);

    // Create cards (will be positioned after book animation)
    const newCards: SceneCard[] = levelScenes.map((scene, i) => ({
      id: getNewCardId(),
      sceneIndex: i,
      emoji: scene.emoji,
      text: scene.text,
      correctSlot: i,
      currentSlot: null,
      x: 0,
      y: 0,
      rotation: 0,
      vx: 0,
      vy: 0,
      vr: 0,
      scale: 0,
      opacity: 0,
      isFlying: true,
      landed: false,
      zIndex: 10 + i,
    }));
    setCards(newCards);

    // Trigger book opening animation
    setTimeout(() => {
      setBookOpen(true);
      setTimeout(() => {
        setPagesFlying(true);
        // Scatter cards with physics
        const size = getContainerSize();
        const bookCenterX = size.width / 2;
        const bookCenterY = size.height * 0.3;
        const scatteredCards = shuffleArray(newCards).map((card, i) => {
          const angle = ((Math.PI * 2) / newCards.length) * i + (Math.random() - 0.5) * 0.8;
          const dist = 80 + Math.random() * 120;
          const targetX = Math.max(CARD_WIDTH / 2 + 10, Math.min(size.width - CARD_WIDTH / 2 - 10,
            bookCenterX + Math.cos(angle) * dist + (Math.random() - 0.5) * 100));
          const targetY = Math.max(80, Math.min(size.height * 0.55,
            bookCenterY + Math.sin(angle) * dist * 0.6 + (Math.random() - 0.5) * 60));
          return {
            ...card,
            x: bookCenterX,
            y: bookCenterY,
            vx: (targetX - bookCenterX) * 0.06 + (Math.random() - 0.5) * 3,
            vy: (targetY - bookCenterY) * 0.06 + (Math.random() - 0.5) * 2 - 3,
            vr: (Math.random() - 0.5) * 12,
            rotation: (Math.random() - 0.5) * 30,
            scale: 0.2,
            opacity: 1,
            isFlying: true,
            landed: false,
            zIndex: 10 + Math.floor(Math.random() * 20),
          };
        });
        setCards(scatteredCards);
        spawnParticles(bookCenterX, bookCenterY, 'page', 12);
      }, 600);
    }, 300);
  }, [getContainerSize, spawnParticles]);

  // ─── Start game ──────────────────────────────────────────────────────────

  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setTotalStars(0);
    setCompletedLevels([]);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    if (newLevel > STORIES.length) {
      setGameState('game-over');
      return;
    }
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // ─── Handle successful completion ────────────────────────────────────────

  const handleLevelComplete = useCallback(() => {
    setWindPaused(true);
    const stars = Math.max(1, 3 - attempts);
    setLevelStars(stars);
    setStarRating({ stars, firstTry: attempts === 0 });
    setTotalStars(prev => prev + stars);
    setScore(prev => prev + stars * 100 + scenes.length * 50);
    setCompletedLevels(prev => [...prev, level]);

    // Spawn confetti
    const size = getContainerSize();
    spawnParticles(size.width / 2, size.height / 2, 'confetti', 30);
    spawnParticles(size.width * 0.3, size.height * 0.4, 'confetti', 20);
    spawnParticles(size.width * 0.7, size.height * 0.4, 'confetti', 20);

    // Start book reassembly animation
    setTimeout(() => {
      setBookReassembling(true);
      setBookOpen(true);

      // Fly cards back into book
      const bookCenterX = size.width / 2;
      const bookCenterY = size.height * 0.3;
      setCards(prev => prev.map((card, i) => ({
        ...card,
        vx: (bookCenterX - card.x) * 0.04,
        vy: (bookCenterY - card.y) * 0.04 - 2,
        vr: (Math.random() - 0.5) * 8,
        isFlying: true,
        landed: false,
        currentSlot: null,
      })));

      // Show story reveal after cards fly back
      setTimeout(() => {
        setGameState('story-reveal');
        setStoryRevealIndex(0);
      }, 1200);
    }, 1000);
  }, [attempts, scenes, level, getContainerSize, spawnParticles]);

  // ─── Story reveal progression ────────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'story-reveal' || storyRevealIndex < 0) return;
    if (storyRevealIndex >= scenes.length) {
      setTimeout(() => setGameState('complete'), 800);
      return;
    }
    const timer = setTimeout(() => {
      setStoryRevealIndex(prev => prev + 1);
      const size = getContainerSize();
      spawnParticles(size.width / 2, size.height * 0.5, 'sparkle', 8);
    }, 2000);
    return () => clearTimeout(timer);
  }, [gameState, storyRevealIndex, scenes.length, getContainerSize, spawnParticles]);

  // ─── Wind scatter ────────────────────────────────────────────────────────

  const scatterCards = useCallback(() => {
    const size = getContainerSize();
    // Remove all cards from slots
    setSlots(prev => prev.map(s => ({ ...s, cardId: null, glowing: false })));
    setCards(prev => {
      const shuffled = shuffleArray(prev);
      return shuffled.map((card, i) => {
        const angle = ((Math.PI * 2) / prev.length) * i + (Math.random() - 0.5);
        const cx = size.width / 2;
        const cy = size.height * 0.35;
        return {
          ...card,
          currentSlot: null,
          x: cx + Math.cos(angle) * 50,
          y: cy + Math.sin(angle) * 30,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 6 - 2,
          vr: (Math.random() - 0.5) * 15,
          rotation: (Math.random() - 0.5) * 40,
          isFlying: true,
          landed: false,
          scale: 1,
          opacity: 1,
        };
      });
    });
    setWindTimer(0);
    windTimerRef.current = 0;
    setAttempts(prev => prev + 1);
    spawnParticles(size.width / 2, size.height / 2, 'leaf', 15);
    setHint({ text: 'The wind scattered the pages! Quick, put them back!', visible: true });
    setTimeout(() => setHint(prev => ({ ...prev, visible: false })), 3000);
  }, [getContainerSize, spawnParticles]);

  // ─── Place card in slot ──────────────────────────────────────────────────

  const placeCardInSlot = useCallback((cardId: number, slotIndex: number) => {
    const card = cardsRef.current.find(c => c.id === cardId);
    if (!card) return;

    const isCorrect = card.correctSlot === slotIndex;

    if (isCorrect) {
      // Snap into place
      const pos = getSlotPosition(slotIndex);
      setSnapEffect({ slotIndex, time: Date.now() });
      setTimeout(() => setSnapEffect(null), 600);

      setCards(prev => prev.map(c =>
        c.id === cardId ? { ...c, currentSlot: slotIndex, isFlying: false, landed: true, vx: 0, vy: 0, vr: 0, rotation: 0, scale: 1 } : c
      ));
      setSlots(prev => prev.map(s =>
        s.index === slotIndex ? { ...s, cardId, glowing: false } : s
      ));

      if (pos) {
        spawnParticles(pos.x, pos.y, 'sparkle', 10);
      }

      setScore(prev => prev + 25);

      // Check if all correct
      setTimeout(() => {
        const updatedCards = cardsRef.current;
        const updatedSlots = slotsRefData.current;
        const allFilled = updatedSlots.every(s => s.cardId !== null);
        if (allFilled) {
          const allCorrect = updatedCards.every(c => c.currentSlot === c.correctSlot);
          if (allCorrect) {
            handleLevelComplete();
          }
        }
      }, 100);
    } else {
      // Wrong placement - shake and bounce back
      setShakeCardId(cardId);
      setAttempts(prev => prev + 1);
      setTimeout(() => setShakeCardId(null), 600);

      // Generate hint
      const hintText = `Hmm, does "${card.text.substring(0, 25)}..." happen here? Think about what comes ${slotIndex === 0 ? 'first' : 'before and after'}!`;
      setHint({ text: hintText, visible: true });
      setTimeout(() => setHint(prev => ({ ...prev, visible: false })), 3500);

      // Bounce card back
      const size = getContainerSize();
      setCards(prev => prev.map(c =>
        c.id === cardId ? {
          ...c,
          currentSlot: null,
          vx: (Math.random() - 0.5) * 4,
          vy: -3 - Math.random() * 2,
          vr: (Math.random() - 0.5) * 8,
          isFlying: true,
          landed: false,
        } : c
      ));
    }
  }, [getSlotPosition, spawnParticles, scenes, getContainerSize, handleLevelComplete]);

  // ─── Remove card from slot ───────────────────────────────────────────────

  const removeCardFromSlot = useCallback((cardId: number) => {
    const card = cardsRef.current.find(c => c.id === cardId);
    if (!card || card.currentSlot === null) return;

    setSlots(prev => prev.map(s =>
      s.cardId === cardId ? { ...s, cardId: null, glowing: false } : s
    ));
    setCards(prev => prev.map(c =>
      c.id === cardId ? { ...c, currentSlot: null, isFlying: false, landed: true } : c
    ));
  }, []);

  // ─── Physics loop ────────────────────────────────────────────────────────

  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const updatePhysics = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = timestamp - lastTimeRef.current;
      const delta = Math.min(rawDelta / 16, 3);
      lastTimeRef.current = timestamp;

      const size = getContainerSize();

      // Update wind timer
      if (!windPaused) {
        windTimerRef.current += rawDelta;
        if (windTimerRef.current >= WIND_TIMER_MAX) {
          scatterCards();
          windTimerRef.current = 0;
        }
        setWindTimer(windTimerRef.current);
      }

      // Update card physics
      setCards(prev => prev.map(card => {
        if (dragRef.current?.cardId === card.id) return card;
        if (card.currentSlot !== null) return card;
        if (!card.isFlying && card.landed) return card;

        let { x, y, vx, vy, vr, rotation, scale, opacity } = card;

        // Gravity-like settling
        vy += 0.15 * delta;

        // Friction
        vx *= 0.97;
        vy *= 0.97;
        vr *= 0.95;

        x += vx * delta;
        y += vy * delta;
        rotation += vr * delta;

        // Scale up from flying state
        if (scale < 1) {
          scale = Math.min(1, scale + 0.03 * delta);
        }

        // Boundaries
        const halfW = CARD_WIDTH * scale / 2;
        const halfH = CARD_HEIGHT * scale / 2;
        const minX = halfW + 5;
        const maxX = size.width - halfW - 5;
        const minY = halfH + 50;
        const maxY = size.height - halfH - 120;

        if (x < minX) { x = minX; vx = Math.abs(vx) * 0.5; }
        if (x > maxX) { x = maxX; vx = -Math.abs(vx) * 0.5; }
        if (y < minY) { y = minY; vy = Math.abs(vy) * 0.5; }
        if (y > maxY) { y = maxY; vy = -Math.abs(vy) * 0.3; }

        // Check if settled
        const speed = Math.sqrt(vx * vx + vy * vy);
        const landed = speed < 0.3 && Math.abs(vr) < 0.3;

        return { ...card, x, y, vx, vy, vr, rotation, scale, opacity, isFlying: !landed, landed };
      }));

      // Update particles
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta + (p.type === 'confetti' ? 0.5 : 0.2) * delta,
          vx: p.vx * 0.98,
          vy: p.vy * 0.98,
          rotation: p.rotation + p.vr * delta,
          life: p.life - delta,
          opacity: Math.max(0, p.life / p.maxLife),
        }));
        return updated.filter(p => p.life > 0);
      });

      // Update wind leaves
      setWindLeaves(prev => {
        const updated = prev.map(l => ({
          ...l,
          x: l.x + l.vx * delta,
          y: l.y + l.vy * delta + Math.sin(l.x * 0.02) * 0.5,
          rotation: l.rotation + l.vr * delta,
          opacity: l.opacity * 0.998,
        }));
        return updated.filter(l => l.x < size.width + 100 && l.opacity > 0.05);
      });

      // Spawn wind leaves when wind meter is high
      const windRatio = windTimerRef.current / WIND_TIMER_MAX;
      if (windRatio > 0.5 && Math.random() < windRatio * 0.05) {
        spawnWindLeaves();
      }

      animationRef.current = requestAnimationFrame(updatePhysics);
    };

    animationRef.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameState, getContainerSize, windPaused, scatterCards, spawnWindLeaves]);

  // ─── Drag handlers ───────────────────────────────────────────────────────

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    card: SceneCard
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;

    // If card is in a slot, remove it first
    if (card.currentSlot !== null) {
      removeCardFromSlot(card.id);
    }

    setDragState({
      cardId: card.id,
      offsetX: cx - card.x,
      offsetY: cy - card.y,
      startX: cx,
      startY: cy,
      lastX: cx,
      lastY: cy,
      velocityX: 0,
      velocityY: 0,
    });

    // Bring card to front
    setCards(prev => prev.map(c =>
      c.id === card.id ? { ...c, zIndex: 100, isFlying: false, landed: true, vx: 0, vy: 0, vr: 0 } : c
    ));
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragRef.current || !containerRef.current) return;
    e.preventDefault();

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;

    const drag = dragRef.current;
    const newX = cx - drag.offsetX;
    const newY = cy - drag.offsetY;

    // Track velocity for momentum
    setDragState(prev => prev ? {
      ...prev,
      lastX: cx,
      lastY: cy,
      velocityX: cx - prev.lastX,
      velocityY: cy - prev.lastY,
    } : null);

    // Move card
    setCards(prev => prev.map(c =>
      c.id === drag.cardId ? { ...c, x: newX, y: newY, rotation: (cx - drag.startX) * 0.1 } : c
    ));

    // Check proximity to slots for glow
    setSlots(prev => prev.map(slot => {
      if (slot.cardId !== null) return { ...slot, glowing: false };
      const pos = getSlotPosition(slot.index);
      if (!pos) return { ...slot, glowing: false };
      const dx = newX - pos.x;
      const dy = newY - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      return { ...slot, glowing: dist < SNAP_DISTANCE * 1.5 };
    }));
  }, [getSlotPosition]);

  const handleDragEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;

    const card = cardsRef.current.find(c => c.id === drag.cardId);
    if (!card) { setDragState(null); return; }

    // Check if near any empty slot
    let closestSlot: number | null = null;
    let closestDist = SNAP_DISTANCE;

    slotsRefData.current.forEach(slot => {
      if (slot.cardId !== null) return;
      const pos = getSlotPosition(slot.index);
      if (!pos) return;
      const dx = card.x - pos.x;
      const dy = card.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < closestDist) {
        closestDist = dist;
        closestSlot = slot.index;
      }
    });

    if (closestSlot !== null) {
      placeCardInSlot(card.id, closestSlot);
    } else {
      // Apply momentum
      setCards(prev => prev.map(c =>
        c.id === drag.cardId ? {
          ...c,
          vx: drag.velocityX * 0.5,
          vy: drag.velocityY * 0.5,
          vr: drag.velocityX * 0.2,
          isFlying: true,
          landed: false,
          zIndex: 10 + Math.floor(Math.random() * 20),
        } : c
      ));
    }

    // Reset slot glowing
    setSlots(prev => prev.map(s => ({ ...s, glowing: false })));
    setDragState(null);
  }, [getSlotPosition, placeCardInSlot]);

  // ─── Drag event listeners ────────────────────────────────────────────────

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

  // ─── Render: Intro ───────────────────────────────────────────────────────

  if (gameState === 'intro') {
    return (
      <div className="story-scramble">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="floating-page" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                transform: `rotate(${(Math.random() - 0.5) * 30}deg)`,
              }}>
                <div className="page-content">
                  {['📖', '📚', '📜', '📄', '🗒️', '📝', '📃', '📋'][i]}
                </div>
              </div>
            ))}
            <div className="desk-lamp" />
            <div className="desk-surface" />
          </div>
          <div className="intro-content">
            <div className="intro-book">
              <div className="book-spine" />
              <div className="book-cover">
                <div className="book-title-area">
                  <span className="book-icon">📖</span>
                  <h1 className="game-title">Story Scramble</h1>
                  <span className="book-icon">✨</span>
                </div>
                <p className="game-subtitle">Put the story back together!</p>
              </div>
            </div>

            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-icon">💨</div>
                <p>A mischievous wind has scattered the story pages!</p>
              </div>
              <div className="instruction">
                <div className="instruction-icon">👆</div>
                <p><strong>Drag</strong> the scene cards to the correct order on the timeline</p>
              </div>
              <div className="instruction">
                <div className="instruction-icon">⏱️</div>
                <p>Watch the wind meter — if it fills up, the pages scatter again!</p>
              </div>
              <div className="instruction">
                <div className="instruction-icon">⭐</div>
                <p>Get it right first try for a <strong>gold star</strong>!</p>
              </div>
            </div>

            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">📖</span>
              Open the Book
              <span className="btn-icon">✨</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Story reveal ────────────────────────────────────────────────

  if (gameState === 'story-reveal') {
    return (
      <div className="story-scramble">
        <style>{styles}</style>
        <div className="reveal-screen">
          <div className="reveal-book">
            <div className="reveal-book-glow" />
            <h2 className="reveal-title">{currentStory.bookEmoji} {currentStory.title}</h2>
            <div className="reveal-pages">
              {scenes.map((scene, i) => (
                <div
                  key={i}
                  className={`reveal-page ${i <= storyRevealIndex ? 'visible' : ''} ${i === storyRevealIndex ? 'current' : ''}`}
                >
                  <div className="reveal-page-number">{i + 1}</div>
                  <div className="reveal-page-emoji">{scene.emoji}</div>
                  <div className="reveal-page-text">{scene.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} className="particle" style={{
              left: p.x, top: p.y, width: p.size, height: p.size,
              opacity: p.opacity, transform: `rotate(${p.rotation}deg)`,
              background: p.color, borderRadius: p.type === 'sparkle' ? '50%' : '2px',
            }} />
          ))}
        </div>
      </div>
    );
  }

  // ─── Render: Complete ────────────────────────────────────────────────────

  if (gameState === 'complete') {
    return (
      <div className="story-scramble">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bg-confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                background: ['#f472b6', '#a78bfa', '#38bdf8', '#4ade80', '#fbbf24'][i % 5],
              }} />
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Story Complete!</h1>
            <div className="complete-book-emoji">{currentStory.bookEmoji}</div>
            <p className="complete-story-name">{currentStory.title}</p>

            <div className="stars-display">
              {[1, 2, 3].map(s => (
                <span key={s} className={`star ${s <= levelStars ? 'earned' : 'empty'}`}>
                  {s <= levelStars ? '⭐' : '☆'}
                </span>
              ))}
            </div>
            <p className="stars-label">
              {levelStars === 3 ? 'Perfect! First try!' : levelStars === 2 ? 'Great job!' : 'You did it!'}
            </p>

            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Total Stars</span>
                <span className="score-value">{totalStars}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Stories</span>
                <span className="score-value">{completedLevels.length}/{STORIES.length}</span>
              </div>
            </div>

            <div className="complete-buttons">
              {level < STORIES.length && (
                <button className="next-btn" onClick={nextLevel}>
                  Next Story →
                </button>
              )}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
                {level >= STORIES.length ? 'Play Again' : 'Main Menu'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Game Over (all stories done) ────────────────────────────────

  if (gameState === 'game-over') {
    return (
      <div className="story-scramble">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {STORIES.map((s, i) => (
              <div key={i} className="floating-story-emoji" style={{
                left: `${10 + (i / STORIES.length) * 80}%`,
                animationDelay: `${i * 0.3}s`,
              }}>
                {s.bookEmoji}
              </div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">All Stories Complete!</h1>
            <div className="all-books">
              {STORIES.map((s, i) => (
                <span key={i} className="mini-book-emoji">{s.bookEmoji}</span>
              ))}
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Final Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Total Stars</span>
                <span className="score-value">{totalStars} / {STORIES.length * 3}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={startGame}>Play Again</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Playing ─────────────────────────────────────────────────────

  const windRatio = windTimer / WIND_TIMER_MAX;

  return (
    <div className="story-scramble">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">
              <span className="level-emoji">{currentStory.bookEmoji}</span>
              <span>Story {level}</span>
            </div>
          </div>
          <div className="header-center">
            <div className="story-title-badge">{currentStory.title}</div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Wind meter */}
        <div className={`wind-meter ${windRatio > 0.7 ? 'danger' : windRatio > 0.4 ? 'warning' : ''}`}>
          <div className="wind-label">
            <span className="wind-emoji">💨</span>
            <span>Wind</span>
          </div>
          <div className="wind-bar-bg">
            <div className="wind-bar-fill" style={{ width: `${windRatio * 100}%` }} />
          </div>
          {windRatio > 0.7 && <div className="wind-warning-pulse" />}
        </div>

        {/* Book (center, background) */}
        <div className={`storybook ${bookOpen ? 'open' : ''} ${pagesFlying ? 'pages-out' : ''} ${bookReassembling ? 'reassembling' : ''}`}>
          <div className="book-back" />
          <div className="book-spine-3d" />
          <div className="book-front">
            <div className="book-front-text">{currentStory.bookEmoji}</div>
          </div>
        </div>

        {/* Play area for cards */}
        <div className="play-area" ref={playAreaRef}>
          {/* Wind leaves */}
          {windLeaves.map(leaf => (
            <div key={leaf.id} className="wind-leaf" style={{
              left: leaf.x, top: leaf.y, fontSize: leaf.size,
              opacity: leaf.opacity, transform: `rotate(${leaf.rotation}deg)`,
            }}>
              {leaf.emoji}
            </div>
          ))}

          {/* Scene cards */}
          {cards.map(card => {
            const isDragging = dragState?.cardId === card.id;
            const isShaking = shakeCardId === card.id;
            const isInSlot = card.currentSlot !== null;

            // If in slot, position at slot position
            let cardX = card.x;
            let cardY = card.y;
            if (isInSlot && !isDragging) {
              const pos = getSlotPosition(card.currentSlot!);
              if (pos) { cardX = pos.x; cardY = pos.y; }
            }

            return (
              <div
                key={card.id}
                className={`scene-card ${isDragging ? 'dragging' : ''} ${isShaking ? 'shaking' : ''} ${isInSlot ? 'in-slot' : ''} ${card.isFlying ? 'flying' : ''}`}
                style={{
                  left: cardX,
                  top: cardY,
                  transform: `translate(-50%, -50%) rotate(${isDragging ? card.rotation : isInSlot ? 0 : card.rotation}deg) scale(${isDragging ? 1.08 : card.scale})`,
                  opacity: card.opacity,
                  zIndex: isDragging ? 200 : card.zIndex,
                  transition: isInSlot && !isDragging ? 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s ease' : 'none',
                }}
                onMouseDown={(e) => handleDragStart(e, card)}
                onTouchStart={(e) => handleDragStart(e, card)}
              >
                <div className="card-parchment" />
                <div className="card-border" />
                <div className="card-emoji">{card.emoji}</div>
                <div className="card-text">{card.text}</div>
                {isDragging && <div className="card-drag-glow" />}
              </div>
            );
          })}

          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} className={`particle particle-${p.type}`} style={{
              left: p.x, top: p.y, width: p.size, height: p.size,
              opacity: p.opacity, transform: `rotate(${p.rotation}deg)`,
              background: p.color,
            }} />
          ))}
        </div>

        {/* Timeline slots */}
        <div className="timeline-area" ref={slotsRef}>
          <div className="timeline-line" />
          <div className="timeline-slots">
            {slots.map(slot => (
              <div
                key={slot.id}
                ref={el => { if (el) slotElementsRef.current[slot.index] = el; }}
                className={`timeline-slot ${slot.glowing ? 'glowing' : ''} ${slot.cardId !== null ? 'filled' : ''} ${snapEffect?.slotIndex === slot.index ? 'snapping' : ''}`}
              >
                <div className="slot-glow-ring" />
                <div className="slot-number">{slot.label}</div>
                {slot.cardId === null && <div className="slot-placeholder">
                  <span className="slot-placeholder-icon">📄</span>
                </div>}
              </div>
            ))}
          </div>
        </div>

        {/* Hint message */}
        <div className={`hint-overlay ${hint.visible ? 'visible' : ''}`}>
          <div className="hint-bubble">
            <span className="hint-icon">💡</span>
            <p className="hint-text">{hint.text}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bottom-bar">
          <div className="progress-dots">
            {STORIES.map((_, i) => (
              <div key={i} className={`progress-dot ${completedLevels.includes(i + 1) ? 'complete' : i + 1 === level ? 'current' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .story-scramble {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #2c1810;
  }

  /* ═══ INTRO SCREEN ═══ */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #1a0f0a 0%, #2c1810 30%, #3d2317 60%, #2c1810 100%);
  }

  .intro-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .desk-surface {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(180deg,
      #4a3228 0%,
      #5c3d2e 20%,
      #6b4835 50%,
      #5c3d2e 100%);
    border-top: 3px solid #7a5940;
  }

  .desk-surface::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(180deg, rgba(122,89,64,0.6), transparent);
  }

  .desk-lamp {
    position: absolute;
    top: 10%;
    right: 10%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle at 50% 80%, #fbbf24 0%, #f59e0b 20%, transparent 60%);
    opacity: 0.4;
    animation: lampGlow 3s ease-in-out infinite;
  }

  @keyframes lampGlow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.1); }
  }

  .floating-page {
    position: absolute;
    width: 50px;
    height: 65px;
    background: linear-gradient(135deg, #f5f0e8, #e8dfd0);
    border-radius: 3px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: floatPage 6s ease-in-out infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.4;
  }

  .page-content { font-size: 1.5rem; }

  @keyframes floatPage {
    0%, 100% { transform: translateY(0) rotate(var(--rot, 5deg)); opacity: 0.3; }
    50% { transform: translateY(-20px) rotate(calc(var(--rot, 5deg) * -1)); opacity: 0.5; }
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
  }

  .intro-book {
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
    perspective: 800px;
  }

  .book-cover {
    background: linear-gradient(145deg, #8b4513, #a0522d, #8b4513);
    border: 3px solid #6b3410;
    border-radius: 4px 12px 12px 4px;
    padding: 1.5rem 2rem;
    position: relative;
    box-shadow:
      -4px 0 0 #5c2d0e,
      -6px 2px 0 #4a2409,
      0 10px 30px rgba(0,0,0,0.4),
      inset 0 0 30px rgba(0,0,0,0.15);
  }

  .book-spine {
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    width: 8px;
    background: linear-gradient(90deg, #4a2409, #6b3410, #5c2d0e);
    border-radius: 4px 0 0 4px;
  }

  .book-title-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .book-icon { font-size: 1.8rem; }

  .game-title {
    font-family: 'Baloo 2', cursive;
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 800;
    background: linear-gradient(135deg, #fcd34d, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }

  .game-subtitle {
    color: #d4a574;
    font-size: 1.1rem;
    font-style: italic;
  }

  .instructions-card {
    background: rgba(245,240,232,0.08);
    border: 2px solid rgba(245,240,232,0.12);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .instructions-card h3 {
    color: #fcd34d;
    font-family: 'Baloo 2', cursive;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .instruction {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .instruction:last-child { margin-bottom: 0; }

  .instruction-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    width: 36px;
    text-align: center;
  }

  .instruction p {
    color: #d4c4b0;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .instruction strong { color: #fbbf24; }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c1810;
    background: linear-gradient(135deg, #fcd34d, #fbbf24, #f59e0b);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(251,191,36,0.3), 0 2px 0 #d97706;
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(251,191,36,0.4), 0 3px 0 #d97706;
  }

  .start-btn:active, .next-btn:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(251,191,36,0.3), 0 1px 0 #d97706;
  }

  .btn-icon { font-size: 1.4rem; }

  /* ═══ GAME SCREEN ═══ */

  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background: linear-gradient(180deg,
      #1a0f0a 0%,
      #2c1810 15%,
      #3d2317 50%,
      #4a3228 70%,
      #5c3d2e 100%);
  }

  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    background: rgba(0,0,0,0.4);
    z-index: 50;
    flex-shrink: 0;
  }

  .header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .header-center {
    flex: 1;
    text-align: center;
  }

  .back-btn {
    width: 38px;
    height: 38px;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 10px;
    color: #d4c4b0;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back-btn:hover { background: rgba(255,255,255,0.2); color: white; }

  .level-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #8b4513, #a0522d);
    border-radius: 16px;
    font-weight: 700;
    color: #fcd34d;
    font-size: 0.85rem;
  }

  .level-emoji { font-size: 1rem; }

  .story-title-badge {
    display: inline-block;
    padding: 0.3rem 1rem;
    background: rgba(252,211,77,0.1);
    border: 1px solid rgba(252,211,77,0.2);
    border-radius: 16px;
    font-family: 'Baloo 2', cursive;
    font-size: 0.85rem;
    color: #fcd34d;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(251,191,36,0.15);
    border-radius: 16px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 0.9rem; }

  /* ═══ WIND METER ═══ */

  .wind-meter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    background: rgba(0,0,0,0.25);
    flex-shrink: 0;
    position: relative;
  }

  .wind-label {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #8b7355;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .wind-emoji { font-size: 0.9rem; }

  .wind-bar-bg {
    flex: 1;
    height: 8px;
    background: rgba(255,255,255,0.08);
    border-radius: 4px;
    overflow: hidden;
  }

  .wind-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #fbbf24);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .wind-meter.warning .wind-bar-fill {
    background: linear-gradient(90deg, #fbbf24, #fb923c);
  }

  .wind-meter.danger .wind-bar-fill {
    background: linear-gradient(90deg, #fb923c, #ef4444);
    animation: windPulse 0.5s ease-in-out infinite;
  }

  @keyframes windPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  .wind-warning-pulse {
    position: absolute;
    right: 1rem;
    width: 10px;
    height: 10px;
    background: #ef4444;
    border-radius: 50%;
    animation: warningBlink 0.5s ease-in-out infinite;
  }

  @keyframes warningBlink {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.3); }
  }

  /* ═══ STORYBOOK ═══ */

  .storybook {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 90px;
    perspective: 600px;
    z-index: 5;
    pointer-events: none;
    opacity: 0.6;
    transition: opacity 0.5s ease;
  }

  .storybook.open { opacity: 0.3; }
  .storybook.pages-out { opacity: 0.15; }
  .storybook.reassembling { opacity: 0.7; animation: bookGlow 1s ease-in-out infinite; }

  @keyframes bookGlow {
    0%, 100% { filter: drop-shadow(0 0 10px rgba(251,191,36,0.3)); }
    50% { filter: drop-shadow(0 0 25px rgba(251,191,36,0.6)); }
  }

  .book-back {
    position: absolute;
    inset: 0;
    background: linear-gradient(145deg, #6b3410, #8b4513);
    border-radius: 3px 8px 8px 3px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .book-spine-3d {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12px;
    background: linear-gradient(90deg, #4a2409, #6b3410);
    border-radius: 3px 0 0 3px;
    transform-origin: left;
  }

  .book-front {
    position: absolute;
    inset: 0;
    background: linear-gradient(145deg, #a0522d, #8b4513);
    border-radius: 3px 8px 8px 3px;
    transform-origin: left;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .storybook.open .book-front {
    transform: rotateY(-160deg);
  }

  .book-front-text { font-size: 2rem; }

  /* ═══ PLAY AREA ═══ */

  .play-area {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
    min-height: 0;
  }

  /* ═══ SCENE CARDS ═══ */

  .scene-card {
    position: absolute;
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT}px;
    cursor: grab;
    touch-action: none;
    will-change: transform, left, top;
  }

  .scene-card.dragging { cursor: grabbing; z-index: 200 !important; }

  .scene-card.shaking {
    animation: cardShake 0.5s ease-in-out;
  }

  @keyframes cardShake {
    0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
    10% { transform: translate(-50%, -50%) rotate(-8deg) scale(1.02); }
    20% { transform: translate(-50%, -50%) rotate(8deg) scale(1.02); }
    30% { transform: translate(-50%, -50%) rotate(-6deg) scale(1.01); }
    40% { transform: translate(-50%, -50%) rotate(6deg) scale(1.01); }
    50% { transform: translate(-50%, -50%) rotate(-3deg) scale(1); }
    60% { transform: translate(-50%, -50%) rotate(3deg) scale(1); }
  }

  .card-parchment {
    position: absolute;
    inset: 0;
    background: linear-gradient(145deg,
      #f5f0e8 0%,
      #ede5d8 25%,
      #e8dfd0 50%,
      #ede5d8 75%,
      #f5f0e8 100%);
    border-radius: 12px;
    box-shadow:
      0 4px 16px rgba(0,0,0,0.25),
      0 1px 4px rgba(0,0,0,0.15),
      inset 0 1px 0 rgba(255,255,255,0.5);
  }

  .scene-card.dragging .card-parchment {
    box-shadow:
      0 12px 40px rgba(0,0,0,0.35),
      0 4px 12px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.5);
  }

  .scene-card.shaking .card-parchment {
    background: linear-gradient(145deg,
      #fce4e4 0%,
      #f5d5d5 25%,
      #fce4e4 50%,
      #f5d5d5 75%,
      #fce4e4 100%);
    box-shadow:
      0 0 20px rgba(239,68,68,0.4),
      0 4px 16px rgba(0,0,0,0.25);
  }

  .card-border {
    position: absolute;
    inset: 6px;
    border: 2px solid #c4a882;
    border-radius: 8px;
    pointer-events: none;
  }

  .scene-card.shaking .card-border {
    border-color: #ef4444;
  }

  .scene-card.in-slot .card-border {
    border-color: #4ade80;
  }

  .card-emoji {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3.5rem;
    line-height: 1;
    z-index: 2;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }

  .card-text {
    position: absolute;
    bottom: 12px;
    left: 12px;
    right: 12px;
    font-family: 'Baloo 2', cursive;
    font-size: 0.75rem;
    font-weight: 600;
    color: #4a3228;
    text-align: center;
    line-height: 1.25;
    z-index: 2;
  }

  .card-drag-glow {
    position: absolute;
    inset: -6px;
    border-radius: 16px;
    background: radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%);
    animation: cardGlow 0.8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes cardGlow {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }

  /* ═══ TIMELINE ═══ */

  .timeline-area {
    flex-shrink: 0;
    padding: 0.6rem 1rem 0.4rem;
    position: relative;
    background: linear-gradient(180deg, transparent, rgba(0,0,0,0.3));
    z-index: 30;
  }

  .timeline-line {
    position: absolute;
    top: 50%;
    left: 2rem;
    right: 2rem;
    height: 4px;
    background: linear-gradient(90deg, transparent, #6b4835, #8b5e45, #6b4835, transparent);
    border-radius: 2px;
    transform: translateY(-50%);
  }

  .timeline-slots {
    display: flex;
    justify-content: center;
    gap: clamp(0.4rem, 2vw, 1rem);
    position: relative;
  }

  .timeline-slot {
    width: clamp(60px, 15vw, 90px);
    height: clamp(80px, 12vh, 110px);
    background: rgba(245,240,232,0.06);
    border: 2px dashed rgba(196,168,130,0.3);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    position: relative;
    transition: all 0.3s ease;
  }

  .timeline-slot.glowing {
    border-color: #fbbf24;
    background: rgba(251,191,36,0.1);
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(251,191,36,0.3);
  }

  .timeline-slot.filled {
    border-color: #4ade80;
    border-style: solid;
    background: rgba(74,222,128,0.08);
  }

  .timeline-slot.snapping {
    animation: slotSnap 0.5s ease;
  }

  @keyframes slotSnap {
    0% { transform: scale(1); }
    30% { transform: scale(1.15); }
    60% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }

  .slot-glow-ring {
    position: absolute;
    inset: -8px;
    border-radius: 16px;
    border: 2px solid transparent;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .timeline-slot.glowing .slot-glow-ring {
    border-color: rgba(251,191,36,0.5);
    animation: slotRingPulse 1s ease-in-out infinite;
  }

  @keyframes slotRingPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.08); opacity: 1; }
  }

  .slot-number {
    font-family: 'Baloo 2', cursive;
    font-size: 0.8rem;
    font-weight: 700;
    color: #8b7355;
  }

  .slot-placeholder {
    opacity: 0.3;
    animation: placeholderFloat 2s ease-in-out infinite;
  }

  .slot-placeholder-icon { font-size: 1.2rem; }

  @keyframes placeholderFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  /* ═══ PARTICLES ═══ */

  .particle {
    position: absolute;
    pointer-events: none;
    z-index: 100;
  }

  .particle-sparkle { border-radius: 50%; }
  .particle-confetti { border-radius: 2px; }
  .particle-leaf { border-radius: 40% 60% 60% 40%; }
  .particle-page { border-radius: 2px; }

  .wind-leaf {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    transition: none;
  }

  /* ═══ HINT ═══ */

  .hint-overlay {
    position: absolute;
    bottom: 130px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
    pointer-events: none;
    z-index: 150;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    width: max-content;
    max-width: 90%;
  }

  .hint-overlay.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .hint-bubble {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    padding: 0.8rem 1.2rem;
    background: rgba(26,15,10,0.95);
    border: 2px solid #fbbf24;
    border-radius: 16px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }

  .hint-icon { font-size: 1.3rem; flex-shrink: 0; }

  .hint-text {
    color: #e8dfd0;
    font-size: 0.85rem;
    line-height: 1.4;
    font-weight: 500;
  }

  /* ═══ BOTTOM BAR ═══ */

  .bottom-bar {
    padding: 0.5rem 1rem;
    background: rgba(0,0,0,0.35);
    flex-shrink: 0;
    z-index: 40;
  }

  .progress-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .progress-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(139,115,85,0.3);
    border: 2px solid rgba(139,115,85,0.2);
    transition: all 0.3s ease;
  }

  .progress-dot.complete {
    background: #4ade80;
    border-color: #4ade80;
    box-shadow: 0 0 6px rgba(74,222,128,0.4);
  }

  .progress-dot.current {
    background: #fbbf24;
    border-color: #fbbf24;
    box-shadow: 0 0 6px rgba(251,191,36,0.4);
    animation: currentDotPulse 1.5s ease-in-out infinite;
  }

  @keyframes currentDotPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
  }

  /* ═══ REVEAL SCREEN ═══ */

  .reveal-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #1a0f0a 0%, #2c1810 50%, #1a0f0a 100%);
  }

  .reveal-book {
    position: relative;
    text-align: center;
    padding: 2rem;
    max-width: 600px;
    width: 90%;
  }

  .reveal-book-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%);
    pointer-events: none;
    animation: revealGlow 2s ease-in-out infinite;
  }

  @keyframes revealGlow {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
  }

  .reveal-title {
    font-family: 'Baloo 2', cursive;
    font-size: clamp(1.5rem, 5vw, 2.2rem);
    color: #fcd34d;
    margin-bottom: 2rem;
    animation: revealTitleIn 0.8s ease backwards;
  }

  @keyframes revealTitleIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .reveal-pages {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .reveal-page {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.2rem;
    background: rgba(245,240,232,0.05);
    border: 2px solid transparent;
    border-radius: 12px;
    max-width: 400px;
    width: 100%;
    opacity: 0;
    transform: translateX(-30px) scale(0.9);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .reveal-page.visible {
    opacity: 1;
    transform: translateX(0) scale(1);
    border-color: rgba(196,168,130,0.2);
    background: rgba(245,240,232,0.08);
  }

  .reveal-page.current {
    border-color: #fbbf24;
    background: rgba(251,191,36,0.1);
    box-shadow: 0 0 20px rgba(251,191,36,0.2);
  }

  .reveal-page-number {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(139,115,85,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 800;
    color: #d4c4b0;
    flex-shrink: 0;
  }

  .reveal-page.visible .reveal-page-number {
    background: #fbbf24;
    color: #2c1810;
  }

  .reveal-page-emoji { font-size: 1.8rem; flex-shrink: 0; }

  .reveal-page-text {
    font-family: 'Baloo 2', cursive;
    font-size: 0.9rem;
    color: #d4c4b0;
    text-align: left;
    line-height: 1.3;
  }

  .reveal-page.visible .reveal-page-text { color: #f5f0e8; }

  /* ═══ COMPLETE SCREEN ═══ */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #1a0f0a 0%, #2c1810 50%, #1a0f0a 100%);
  }

  .complete-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .bg-confetti {
    position: absolute;
    top: -10px;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    animation: confettiFall 3s ease-in infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .floating-story-emoji {
    position: absolute;
    top: 15%;
    font-size: 3rem;
    animation: floatStory 3s ease-in-out infinite;
  }

  @keyframes floatStory {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }

  .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 500px;
  }

  .complete-title {
    font-family: 'Baloo 2', cursive;
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    color: #fcd34d;
    margin-bottom: 0.5rem;
    animation: completeTitleBounce 0.6s ease backwards;
  }

  @keyframes completeTitleBounce {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }

  .complete-book-emoji {
    font-size: 4rem;
    animation: bookFloat 2s ease-in-out infinite;
    margin-bottom: 0.3rem;
  }

  @keyframes bookFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .complete-story-name {
    font-family: 'Baloo 2', cursive;
    font-size: 1.2rem;
    color: #d4c4b0;
    margin-bottom: 1.5rem;
  }

  .stars-display {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .star {
    font-size: 2.5rem;
    transition: all 0.3s ease;
  }

  .star.earned {
    animation: starPop 0.5s ease backwards;
    filter: drop-shadow(0 0 8px rgba(251,191,36,0.5));
  }

  .star.earned:nth-child(1) { animation-delay: 0.1s; }
  .star.earned:nth-child(2) { animation-delay: 0.3s; }
  .star.earned:nth-child(3) { animation-delay: 0.5s; }

  @keyframes starPop {
    0% { transform: scale(0) rotate(-30deg); opacity: 0; }
    60% { transform: scale(1.3) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .star.empty {
    font-size: 2.5rem;
    color: #4a3228;
  }

  .stars-label {
    color: #d4c4b0;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    background: rgba(245,240,232,0.05);
    border-radius: 12px;
    min-width: 80px;
  }

  .score-label {
    font-size: 0.75rem;
    color: #8b7355;
    margin-bottom: 0.2rem;
  }

  .score-value {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: #fcd34d;
  }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    font-weight: 600;
    color: #8b7355;
    background: transparent;
    border: 2px solid rgba(139,115,85,0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover {
    border-color: rgba(139,115,85,0.6);
    color: #d4c4b0;
  }

  .all-books {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .mini-book-emoji {
    font-size: 2rem;
    animation: miniBookBounce 1s ease infinite;
  }

  .mini-book-emoji:nth-child(2) { animation-delay: 0.1s; }
  .mini-book-emoji:nth-child(3) { animation-delay: 0.2s; }
  .mini-book-emoji:nth-child(4) { animation-delay: 0.3s; }
  .mini-book-emoji:nth-child(5) { animation-delay: 0.4s; }
  .mini-book-emoji:nth-child(6) { animation-delay: 0.5s; }
  .mini-book-emoji:nth-child(7) { animation-delay: 0.6s; }
  .mini-book-emoji:nth-child(8) { animation-delay: 0.7s; }

  @keyframes miniBookBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  /* ═══ RESPONSIVE ═══ */

  @media (max-width: 600px) {
    .scene-card {
      width: 120px;
      height: 155px;
    }

    .card-emoji { font-size: 2.5rem; top: 10px; }
    .card-text { font-size: 0.65rem; bottom: 8px; left: 8px; right: 8px; }
    .card-border { inset: 4px; }

    .timeline-slot {
      width: 50px;
      height: 68px;
    }

    .slot-number { font-size: 0.65rem; }
    .slot-placeholder-icon { font-size: 0.9rem; }

    .header-center { display: none; }

    .game-header { padding: 0.4rem 0.6rem; }
    .level-badge { font-size: 0.75rem; padding: 0.3rem 0.6rem; }
    .score-badge { font-size: 0.8rem; padding: 0.3rem 0.6rem; }

    .wind-meter { padding: 0.3rem 0.6rem; }
    .wind-label { font-size: 0.65rem; }

    .reveal-page { padding: 0.6rem 0.8rem; gap: 0.5rem; }
    .reveal-page-emoji { font-size: 1.4rem; }
    .reveal-page-text { font-size: 0.8rem; }

    .hint-bubble { padding: 0.6rem 0.8rem; }
    .hint-text { font-size: 0.75rem; }

    .instructions-card { padding: 1rem; }
    .instruction-icon { font-size: 1.2rem; width: 28px; }
    .instruction p { font-size: 0.85rem; }

    .complete-title { font-size: 1.5rem; }
    .star { font-size: 2rem; }
    .star.empty { font-size: 2rem; }
  }

  @media (max-width: 380px) {
    .timeline-slot {
      width: 42px;
      height: 58px;
    }

    .scene-card {
      width: 100px;
      height: 130px;
    }

    .card-emoji { font-size: 2rem; }
    .card-text { font-size: 0.55rem; }
  }

  @media (min-width: 1024px) {
    .scene-card {
      width: 170px;
      height: 210px;
    }

    .card-emoji { font-size: 4rem; }
    .card-text { font-size: 0.85rem; }

    .timeline-slot {
      width: 100px;
      height: 120px;
    }
  }
`;
